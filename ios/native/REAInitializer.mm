#import "REAInitializer.h"

@interface RCTEventDispatcher(Reanimated)

- (void)setBridge:(RCTBridge*)bridge;

@end

namespace reanimated {

using namespace facebook;
using namespace react;

JSIExecutor::RuntimeInstaller REAJSIExecutorRuntimeInstaller(
    RCTBridge* bridge,
    JSIExecutor::RuntimeInstaller runtimeInstallerToWrap)
{
    [bridge moduleForClass:[RCTEventDispatcher class]];
    RCTEventDispatcher *eventDispatcher = [REAEventDispatcher new];
    RCTCallableJSModules *callableJSModules = [RCTCallableJSModules new];
    [bridge setValue:callableJSModules forKey:@"_callableJSModules"];
    [callableJSModules setBridge:bridge];
    [eventDispatcher setValue:callableJSModules forKey:@"_callableJSModules"];
    [eventDispatcher setValue:bridge forKey:@"_bridge"];
    [eventDispatcher initialize];
    [bridge updateModuleWithInstance:eventDispatcher];
     _bridge_reanimated = bridge;
    const auto runtimeInstaller = [bridge, runtimeInstallerToWrap](facebook::jsi::Runtime &runtime) {
      if (!bridge) {
        return;
      }
    auto reanimatedModule = reanimated::createReanimatedModule(bridge.jsCallInvoker);
    runtime.global().setProperty(runtime,
                                 jsi::PropNameID::forAscii(runtime, "__reanimatedModuleProxy"),
                                 jsi::Object::createFromHostObject(runtime, reanimatedModule));
        
        if (runtimeInstallerToWrap) {
            runtimeInstallerToWrap(runtime);
        }
    };
    return runtimeInstaller;
}


}
