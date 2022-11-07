#import <Foundation/Foundation.h>
#import <RNReanimated/FeaturesConfig.h>
#import <RNReanimated/REAIOSScheduler.h>
#import <RNReanimated/REAUIManager.h>
#import <RNReanimated/Scheduler.h>
#import <React/RCTComponentData.h>
#import <React/RCTLayoutAnimation.h>
#import <React/RCTLayoutAnimationGroup.h>
#import <React/RCTModalHostView.h>
#import <React/RCTRootShadowView.h>
#import <React/RCTRootViewInternal.h>
#import <React/RCTUIManagerObserverCoordinator.h>

#if __has_include(<RNScreens/RNSScreen.h>)
#import <RNScreens/RNSScreen.h>
#endif

@interface RCTUIManager (REA)
- (void)_manageChildren:(NSNumber *)containerTag
        moveFromIndices:(NSArray<NSNumber *> *)moveFromIndices
          moveToIndices:(NSArray<NSNumber *> *)moveToIndices
      addChildReactTags:(NSArray<NSNumber *> *)addChildReactTags
           addAtIndices:(NSArray<NSNumber *> *)addAtIndices
        removeAtIndices:(NSArray<NSNumber *> *)removeAtIndices
               registry:(NSMutableDictionary<NSNumber *, id<RCTComponent>> *)registry;

- (void)_removeChildren:(NSArray<UIView *> *)children
          fromContainer:(UIView *)container
          withAnimation:(RCTLayoutAnimationGroup *)animation;

- (RCTViewManagerUIBlock)uiBlockWithLayoutUpdateForRootView:(RCTRootShadowView *)rootShadowView;

- (NSArray<id<RCTComponent>> *)_childrenToRemoveFromContainer:(id<RCTComponent>)container
                                                    atIndices:(NSArray<NSNumber *> *)atIndices;
@end

@implementation REAUIManager {
  BOOL _proxyViewRemoval;
  RCTLayoutAnimationGroup *_reactLayoutAnimationGroup;
  NSMutableDictionary<NSNumber *, NSMutableSet<id<RCTComponent>> *> *_toBeRemovedRegister;
  NSMutableDictionary<NSNumber *, NSNumber *> *_parentMapper;
  REAAnimationsManager *_animationsManager;
  std::weak_ptr<reanimated::Scheduler> _scheduler;
}

+ (NSString *)moduleName
{
  return NSStringFromClass([RCTUIManager class]);
}

- (void)setBridge:(RCTBridge *)bridge
{
  RCTLayoutAnimation *deletingAnimation = [[RCTLayoutAnimation alloc] initWithDuration:0.5 config:@{}];
  _reactLayoutAnimationGroup = [[RCTLayoutAnimationGroup alloc] initWithCreatingLayoutAnimation:nil
                                                                        updatingLayoutAnimation:nil
                                                                        deletingLayoutAnimation:deletingAnimation
                                                                                       callback:nil];
  if (!_blockSetter) {
    _blockSetter = true;

    self.bridge = bridge;
    [super setValue:bridge forKey:@"_bridge"];
    [self setValue:[bridge.uiManager valueForKey:@"_shadowViewRegistry"] forKey:@"_shadowViewRegistry"];
    [self setValue:[bridge.uiManager valueForKey:@"_viewRegistry"] forKey:@"_viewRegistry"];
    [self setValue:[bridge.uiManager valueForKey:@"_nativeIDRegistry"] forKey:@"_nativeIDRegistry"];
    [self setValue:[bridge.uiManager valueForKey:@"_shadowViewsWithUpdatedProps"]
            forKey:@"_shadowViewsWithUpdatedProps"];
    [self setValue:[bridge.uiManager valueForKey:@"_shadowViewsWithUpdatedChildren"]
            forKey:@"_shadowViewsWithUpdatedChildren"];
    [self setValue:[bridge.uiManager valueForKey:@"_pendingUIBlocks"] forKey:@"_pendingUIBlocks"];
    [self setValue:[bridge.uiManager valueForKey:@"_rootViewTags"] forKey:@"_rootViewTags"];
    [self setValue:[bridge.uiManager valueForKey:@"_observerCoordinator"] forKey:@"_observerCoordinator"];
    [self setValue:[bridge.uiManager valueForKey:@"_componentDataByName"] forKey:@"_componentDataByName"];

    _blockSetter = false;
  }
}

- (void)_removeChildren:(NSArray<UIView *> *)children
          fromContainer:(UIView *)container
          withAnimation:(RCTLayoutAnimationGroup *)animation
{
  if (_proxyViewRemoval) {
    [_animationsManager removeChildren:children fromContainer:container];
  } else {
    [super _removeChildren:children fromContainer:container withAnimation:animation];
  }
}

- (void)batchDidComplete
{
  _proxyViewRemoval = NO;
  [super batchDidComplete];
}

- (void)_manageChildren:(NSNumber *)containerTag
        moveFromIndices:(NSArray<NSNumber *> *)moveFromIndices
          moveToIndices:(NSArray<NSNumber *> *)moveToIndices
      addChildReactTags:(NSArray<NSNumber *> *)addChildReactTags
           addAtIndices:(NSArray<NSNumber *> *)addAtIndices
        removeAtIndices:(NSArray<NSNumber *> *)removeAtIndices
               registry:(NSMutableDictionary<NSNumber *, id<RCTComponent>> *)registry
{
  if (!reanimated::FeaturesConfig::isLayoutAnimationEnabled()) {
    [super _manageChildren:containerTag
           moveFromIndices:moveFromIndices
             moveToIndices:moveToIndices
         addChildReactTags:addChildReactTags
              addAtIndices:addAtIndices
           removeAtIndices:removeAtIndices
                  registry:registry];
    return;
  }

  // Reanimated changes /start
  BOOL isUIViewRegistry = ((id)registry == (id)[self valueForKey:@"_viewRegistry"]);
  if (isUIViewRegistry) {
    BOOL wasProxyRemovalSet = _proxyViewRemoval;
    if (!_proxyViewRemoval) {
      id<RCTComponent> container = registry[containerTag];
      NSArray<id<RCTComponent>> *permanentlyRemovedChildren = [self _childrenToRemoveFromContainer:container
                                                                                         atIndices:removeAtIndices];
      for (UIView *removedChild in permanentlyRemovedChildren) {
        if ([_animationsManager wantsHandleRemovalOfView:removedChild]) {
          _proxyViewRemoval = YES;
          break;
        }
        [_animationsManager removeAnimationsFromSubtree:removedChild];
      }
    }
    if (!wasProxyRemovalSet && _proxyViewRemoval) {
      // set layout animation group
      [super setNextLayoutAnimationGroup:_reactLayoutAnimationGroup];
    }
  }
  // Reanimated changes /end

  [super _manageChildren:containerTag
         moveFromIndices:moveFromIndices
           moveToIndices:moveToIndices
       addChildReactTags:addChildReactTags
            addAtIndices:addAtIndices
         removeAtIndices:removeAtIndices
                registry:registry];
}

- (void)callAnimationForTree:(UIView *)view parentTag:(NSNumber *)parentTag
{
  _parentMapper[view.reactTag] = parentTag;

  for (UIView *subView in view.reactSubviews) {
    [self callAnimationForTree:subView parentTag:view.reactTag];
  }
}

// Overrided https://github.com/facebook/react-native/blob/v0.65.0/React/Modules/RCTUIManager.m#L530
- (RCTViewManagerUIBlock)uiBlockWithLayoutUpdateForRootView:(RCTRootShadowView *)rootShadowView
{
  if (!reanimated::FeaturesConfig::isLayoutAnimationEnabled()) {
    return [super uiBlockWithLayoutUpdateForRootView:rootShadowView];
  }

  NSHashTable<RCTShadowView *> *affectedShadowViews = [NSHashTable weakObjectsHashTable];
  [rootShadowView layoutWithAffectedShadowViews:affectedShadowViews];

  if (!affectedShadowViews.count) {
    // no frame change results in no UI update block
    return nil;
  }

  typedef struct {
    CGRect frame;
    UIUserInterfaceLayoutDirection layoutDirection;
    BOOL isNew;
    BOOL parentIsNew;
    RCTDisplayType displayType;
  } RCTFrameData;

  // Construct arrays then hand off to main thread
  NSUInteger count = affectedShadowViews.count;
  NSMutableArray *reactTags = [[NSMutableArray alloc] initWithCapacity:count];
  NSMutableData *framesData = [[NSMutableData alloc] initWithLength:sizeof(RCTFrameData) * count];
  {
    NSUInteger index = 0;
    RCTFrameData *frameDataArray = (RCTFrameData *)framesData.mutableBytes;
    for (RCTShadowView *shadowView in affectedShadowViews) {
      reactTags[index] = shadowView.reactTag;
      RCTLayoutMetrics layoutMetrics = shadowView.layoutMetrics;
      frameDataArray[index++] = (RCTFrameData){
          layoutMetrics.frame,
          layoutMetrics.layoutDirection,
          shadowView.isNewView,
          shadowView.superview.isNewView,
          layoutMetrics.displayType};
    }
  }

  for (RCTShadowView *shadowView in affectedShadowViews) {
    // We have to do this after we build the parentsAreNew array.
    shadowView.newView = NO;

    NSNumber *reactTag = shadowView.reactTag;

    if (shadowView.onLayout) {
      CGRect frame = shadowView.layoutMetrics.frame;
      shadowView.onLayout(@{
        @"layout" : @{
          @"x" : @(frame.origin.x),
          @"y" : @(frame.origin.y),
          @"width" : @(frame.size.width),
          @"height" : @(frame.size.height),
        },
      });
    }

    if (RCTIsReactRootView(reactTag) && [shadowView isKindOfClass:[RCTRootShadowView class]]) {
      CGSize contentSize = shadowView.layoutMetrics.frame.size;

      RCTExecuteOnMainQueue(^{
        NSMutableDictionary<NSNumber *, UIView *> *viewRegistry = [self valueForKey:@"_viewRegistry"];
        UIView *view = viewRegistry[reactTag];
        RCTAssert(view != nil, @"view (for ID %@) not found", reactTag);

        RCTRootView *rootView = (RCTRootView *)[view superview];
        if ([rootView isKindOfClass:[RCTRootView class]]) {
          rootView.intrinsicContentSize = contentSize;
        }
      });
    }
  }

  // Perform layout (possibly animated)
  return ^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, UIView *> *viewRegistry) {
    const RCTFrameData *frameDataArray = (const RCTFrameData *)framesData.bytes;
    RCTLayoutAnimationGroup *layoutAnimationGroup = [uiManager valueForKey:@"_layoutAnimationGroup"];

    __block NSUInteger completionsCalled = 0;

    NSInteger index = 0;
    for (NSNumber *reactTag in reactTags) {
      RCTFrameData frameData = frameDataArray[index++];

      UIView *view = viewRegistry[reactTag];
      CGRect frame = frameData.frame;

      UIUserInterfaceLayoutDirection layoutDirection = frameData.layoutDirection;
      BOOL isNew = frameData.isNew;
      RCTLayoutAnimation *updatingLayoutAnimation = isNew ? nil : layoutAnimationGroup.updatingLayoutAnimation;
      BOOL shouldAnimateCreation = isNew && !frameData.parentIsNew;
      RCTLayoutAnimation *creatingLayoutAnimation =
          shouldAnimateCreation ? layoutAnimationGroup.creatingLayoutAnimation : nil;
      BOOL isHidden = frameData.displayType == RCTDisplayTypeNone;

      void (^completion)(BOOL) = ^(BOOL finished) {
        completionsCalled++;
        if (layoutAnimationGroup.callback && completionsCalled == count) {
          layoutAnimationGroup.callback(@[ @(finished) ]);

          // It's unsafe to call this callback more than once, so we nil it out here
          // to make sure that doesn't happen.
          layoutAnimationGroup.callback = nil;
        }
      };

      if (view.reactLayoutDirection != layoutDirection) {
        view.reactLayoutDirection = layoutDirection;
      }

      if (view.isHidden != isHidden) {
        view.hidden = isHidden;
      }

      // Reanimated changes /start
      REASnapshot *snapshotBefore = isNew ? nil : [self->_animationsManager prepareSnapshotBeforeMountForView:view];
      // Reanimated changes /end

      if (creatingLayoutAnimation) {
        // Animate view creation
        [view reactSetFrame:frame];

        CATransform3D finalTransform = view.layer.transform;
        CGFloat finalOpacity = view.layer.opacity;

        NSString *property = creatingLayoutAnimation.property;
        if ([property isEqualToString:@"scaleXY"]) {
          view.layer.transform = CATransform3DMakeScale(0, 0, 0);
        } else if ([property isEqualToString:@"scaleX"]) {
          view.layer.transform = CATransform3DMakeScale(0, 1, 0);
        } else if ([property isEqualToString:@"scaleY"]) {
          view.layer.transform = CATransform3DMakeScale(1, 0, 0);
        } else if ([property isEqualToString:@"opacity"]) {
          view.layer.opacity = 0.0;
        } else {
          RCTLogError(@"Unsupported layout animation createConfig property %@", creatingLayoutAnimation.property);
        }

        [creatingLayoutAnimation
              performAnimations:^{
                if ([property isEqualToString:@"scaleX"] || [property isEqualToString:@"scaleY"] ||
                    [property isEqualToString:@"scaleXY"]) {
                  view.layer.transform = finalTransform;
                } else if ([property isEqualToString:@"opacity"]) {
                  view.layer.opacity = finalOpacity;
                }
              }
            withCompletionBlock:completion];

      } else if (updatingLayoutAnimation) {
        // Animate view update
        [updatingLayoutAnimation
              performAnimations:^{
                [view reactSetFrame:frame];
              }
            withCompletionBlock:completion];

      } else {
        // Update without animation
        [view reactSetFrame:frame];
        completion(YES);
      }

      // Reanimated changes /start
      if (isNew || snapshotBefore != nil) {
        [self->_animationsManager viewDidMount:view withBeforeSnapshot:snapshotBefore];
      }
      // Reanimated changes /end
    }
    // Clean up
    // below line serves as this one uiManager->_layoutAnimationGroup = nil;, because we don't have access to the
    // private field
    [uiManager setNextLayoutAnimationGroup:nil];
  };
}

- (Class)class
{
  return [RCTUIManager class];
}

+ (Class)class
{
  return [RCTUIManager class];
}

- (void)setUp:(REAAnimationsManager *)animationsManager
{
  _animationsManager = animationsManager;
  _toBeRemovedRegister = [[NSMutableDictionary<NSNumber *, NSMutableSet<id<RCTComponent>> *> alloc] init];
  _parentMapper = [[NSMutableDictionary<NSNumber *, NSNumber *> alloc] init];
}

- (void)unregisterView:(id<RCTComponent>)view
{
  NSNumber *tag = _parentMapper[view.reactTag];
  if (tag == nil) {
    return;
  }

  [_toBeRemovedRegister[tag] removeObject:view];
  if (_toBeRemovedRegister[tag].count == 0) {
    [_toBeRemovedRegister removeObjectForKey:tag];
  }
  NSMutableDictionary<NSNumber *, id<RCTComponent>> *viewRegistry = [self valueForKey:@"_viewRegistry"];
  [view.reactSuperview removeReactSubview:view];
  id<RCTComponent> parentView = viewRegistry[tag];
  @try {
    [parentView removeReactSubview:view];
  } @catch (id anException) {
  }
#if __has_include(<RNScreens/RNSScreen.h>)
  if ([view isKindOfClass:[RNSScreenView class]]) {
    [parentView didUpdateReactSubviews];
  }
#endif
  [viewRegistry removeObjectForKey:view.reactTag];
}

@end
