"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7261],{3359:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),o=n(67177),r=n(28033),s=n(10758),i=n(61693),l=n(35842),c=n(49638),d=n(42055);const u=120,h={code:"function anonymous(event){const{offset}=this.__closure;offset.value+=event.changeX;}"},p={code:"function anonymous(event){const{offset,withDecay,width,SIZE}=this.__closure;offset.value=withDecay({velocity:event.velocityX,rubberBandEffect:true,clamp:[-(width.value/2)+SIZE/2,width.value/2-SIZE/2]});}"},m={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function g(){const e=(0,s.y)(0),t=(0,s.y)(0),n=d.oF.Pan().onChange(function(){const t=function(t){e.value+=t.changeX};return t.__closure={offset:e},t.__initData=h,t.__workletHash=7961514168757,t}()).onFinalize(function(){const n=function(n){e.value=(0,i.$)({velocity:n.velocityX,rubberBandEffect:!0,clamp:[-t.value/2+u/2,t.value/2-u/2]})};return n.__closure={offset:e,withDecay:i.$,width:t,SIZE:u},n.__initData=p,n.__workletHash=0xd691977aa61,n}()),r=(0,l.l)(function(){const t=()=>({transform:[{translateX:e.value}]});return t.__closure={offset:e},t.__initData=m,t.__workletHash=0xf945d52c70d,t}());return a.createElement(d.cS,{style:f.container},a.createElement(o.Z,{onLayout:e=>{t.value=e.nativeEvent.layout.width},style:f.wrapper},a.createElement(d.Le,{gesture:n},a.createElement(c.n,{style:[f.box,r]}))))}const f=r.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},wrapper:{flex:1,width:"100%",alignItems:"center",justifyContent:"center"},box:{height:u,width:u,backgroundColor:"#b58df1",borderRadius:20,cursor:"grab",alignItems:"center",justifyContent:"center"}})},49262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>H,contentTitle:()=>D,default:()=>j,frontMatter:()=>G,metadata:()=>E,toc:()=>V});var a=n(83117),o=n(67294),r=n(3905),s=n(42055),i=n(67177),l=n(28033),c=n(10758),d=n(35842),u=n(6328),h=n(49638);const p={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=true;}"},m={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=false;}"},g={code:"function anonymous(){const{pressed,withTiming}=this.__closure;return{backgroundColor:pressed.value?'#FFE04B':'#B58DF1',transform:[{scale:withTiming(pressed.value?1.2:1)}]};}"};function f(){const e=(0,c.y)(!1),t=s.oF.Tap().onBegin(function(){const t=function(){e.value=!0};return t.__closure={pressed:e},t.__initData=p,t.__workletHash=9733417743160,t}()).onFinalize(function(){const t=function(){e.value=!1};return t.__closure={pressed:e},t.__initData=m,t.__workletHash=200209545011,t}()),n=(0,d.l)(function(){const t=()=>({backgroundColor:e.value?"#FFE04B":"#B58DF1",transform:[{scale:(0,u.j)(e.value?1.2:1)}]});return t.__closure={pressed:e,withTiming:u.j},t.__initData=g,t.__workletHash=1834590992963,t}());return o.createElement(s.cS,{style:w.container},o.createElement(i.Z,{style:w.container},o.createElement(s.Le,{gesture:t},o.createElement(h.n,{style:[w.circle,n]}))))}const w=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},circle:{height:120,width:120,borderRadius:500}}),v="import 'react-native-gesture-handler';\nimport React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n// highlight-start\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n// highlight-end\n\nexport default function App() {\n  const pressed = useSharedValue(false);\n\n  const tap = Gesture.Tap()\n    .onBegin(() => {\n      pressed.value = true;\n    })\n    .onFinalize(() => {\n      pressed.value = false;\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',\n    transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View style={styles.container}>\n        {/* highlight-next-line */}\n        <GestureDetector gesture={tap}>\n          <Animated.View style={[styles.circle, animatedStyles]} />\n          {/* highlight-next-line */}\n        </GestureDetector>\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  circle: {\n    height: 120,\n    width: 120,\n    borderRadius: 500,\n  },\n});\n";var k=n(10919);const y={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=true;}"},S={code:"function anonymous(event){const{offset}=this.__closure;offset.value=event.translationX;}"},b={code:"function anonymous(){const{offset,withSpring,pressed}=this.__closure;offset.value=withSpring(0);pressed.value=false;}"},C={code:"function anonymous(){const{offset,withTiming,pressed}=this.__closure;return{transform:[{translateX:offset.value},{scale:withTiming(pressed.value?1.2:1)}],backgroundColor:pressed.value?'#FFE04B':'#b58df1'};}"};function R(){const e=(0,c.y)(!1),t=(0,c.y)(0),n=s.oF.Pan().onBegin(function(){const t=function(){e.value=!0};return t.__closure={pressed:e},t.__initData=y,t.__workletHash=9733417743160,t}()).onChange(function(){const e=function(e){t.value=e.translationX};return e.__closure={offset:t},e.__initData=S,e.__workletHash=5437248460915,e}()).onFinalize(function(){const n=function(){t.value=(0,k.V)(0),e.value=!1};return n.__closure={offset:t,withSpring:k.V,pressed:e},n.__initData=b,n.__workletHash=3551330256065,n}()),a=(0,d.l)(function(){const n=()=>({transform:[{translateX:t.value},{scale:(0,u.j)(e.value?1.2:1)}],backgroundColor:e.value?"#FFE04B":"#b58df1"});return n.__closure={offset:t,withTiming:u.j,pressed:e},n.__initData=C,n.__workletHash=0xc0528674be4,n}());return o.createElement(s.cS,{style:_.container},o.createElement(i.Z,{style:_.container},o.createElement(s.Le,{gesture:n},o.createElement(h.n,{style:[_.circle,a]}))))}const _=l.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},circle:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:500,cursor:"grab"}}),x="import 'react-native-gesture-handler';\nimport React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n  withSpring,\n  withTiming,\n} from 'react-native-reanimated';\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n\nexport default function App() {\n  const pressed = useSharedValue(false);\n  // highlight-next-line\n  const offset = useSharedValue(0);\n\n  const pan = Gesture.Pan()\n    .onBegin(() => {\n      pressed.value = true;\n    })\n    // highlight-start\n    .onChange((event) => {\n      offset.value = event.translationX;\n    })\n    // highlight-end\n    .onFinalize(() => {\n      // highlight-next-line\n      offset.value = withSpring(0);\n      pressed.value = false;\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [\n      // highlight-next-line\n      { translateX: offset.value },\n      { scale: withTiming(pressed.value ? 1.2 : 1) },\n    ],\n    backgroundColor: pressed.value ? '#FFE04B' : '#b58df1',\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View style={styles.container}>\n        <GestureDetector gesture={pan}>\n          <Animated.View style={[styles.circle, animatedStyles]} />\n        </GestureDetector>\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  circle: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 500,\n    cursor: 'grab',\n  },\n});\n";var N=n(3359),T=n(96662);const G={sidebar_position:6},D="Handling gestures",E={unversionedId:"fundamentals/handling-gestures",id:"fundamentals/handling-gestures",title:"Handling gestures",description:"In this section, we'll learn how to handle gestures with Reanimated. To achieve this, Reanimated integrates tightly with React Native Gesture Handler, another library created by Software Mansion.",source:"@site/docs/fundamentals/handling-gestures.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/handling-gestures",permalink:"/react-native-reanimated/docs/fundamentals/handling-gestures",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/fundamentals/handling-gestures.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Applying modifiers",permalink:"/react-native-reanimated/docs/fundamentals/applying-modifiers"},next:{title:"Glossary of terms",permalink:"/react-native-reanimated/docs/fundamentals/glossary"}},H={},V=[{value:"Handling tap gestures",id:"handling-tap-gestures",level:2},{value:"Handling pan gestures",id:"handling-pan-gestures",level:2},{value:"Using <code>withDecay</code>",id:"using-withdecay",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],Z=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},I=Z("CollapsibleCode"),A=Z("InteractiveExample"),F={toc:V},L="wrapper";function j(e){let{components:t,...n}=e;return(0,r.kt)(L,(0,a.Z)({},F,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handling-gestures"},"Handling gestures"),(0,r.kt)("p",null,"In this section, we'll learn how to handle gestures with Reanimated. To achieve this, Reanimated integrates tightly with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/"},"React Native Gesture Handler"),", another library created by Software Mansion."),(0,r.kt)("p",null,"Gesture Handler comes with plentiful gestures like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pinch-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Pinch"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/fling-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Fling")),". Right now we'll start simple and get to know ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/tap-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Tap"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pan-gesture"},(0,r.kt)("inlineCode",{parentName:"a"},"Pan"))," gestures as well as how to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withDecay"},(0,r.kt)("inlineCode",{parentName:"a"},"withDecay"))," animation function."),(0,r.kt)("p",null,"Just make sure to go through the Gesture Handler ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/installation"},"installation steps")," first and come back here to learn how to use it with Reanimated."),(0,r.kt)("h2",{id:"handling-tap-gestures"},"Handling tap gestures"),(0,r.kt)("p",null,"Let's start with the simplest gesture - tapping. Tap gesture detects fingers touching the screen for a short period of time. You can use them to implement custom buttons or pressable elements from scratch."),(0,r.kt)("p",null,"In this example, we'll create a circle which will grow and change color on touch."),(0,r.kt)("p",null,"First, let's wrap our app with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/installation/#js"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureHandlerRootView")),". Make sure to keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," as close to the actual root view as possible. That'll ensure that our gestures will work as expected with each other."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { GestureHandlerRootView } from 'react-native-gesture-handler';\n\nfunction App() {\n  return (\n    <GestureHandlerRootView style={{ flex: 1 }}>\n      {/* rest of the app */}\n    </GestureHandlerRootView>\n  );\n}\n")),(0,r.kt)("p",null,"New tap gestures are defined with ",(0,r.kt)("inlineCode",{parentName:"p"},"Gesture.Tap()")," in your component's body. You can define the behavior of the gesture by chaining methods like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/tap-gesture/#onbegincallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onBegin")),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/tap-gesture/#onstartcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onStart")),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/tap-gesture/#onendcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onEnd")),", or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/tap-gesture/#onfinalizecallback"},(0,r.kt)("inlineCode",{parentName:"a"},"onFinalize"))," on the gesture. We'll use them to update a shared value just after the gesture begins and return to the initial value when the gesture finishes."),(0,r.kt)(I,{showLines:[16,25],src:v,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"You can safely access the shared values because callbacks passed to gestures are automatically ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," for you."),(0,r.kt)("p",null,"We'd like our circle to change color from violet to yellow and smoothly scale by 20% on tap. Let's define that animation logic using ",(0,r.kt)("inlineCode",{parentName:"p"},"withTiming")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle"),":"),(0,r.kt)(I,{showLines:[27,30],src:v,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"You need to pass your defined gesture to the ",(0,r.kt)("inlineCode",{parentName:"p"},"gesture")," prop of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/gesture-detector"},(0,r.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," component. That component should wrap the view you'd like to handle gestures on. Also, remember to pass the defined ",(0,r.kt)("inlineCode",{parentName:"p"},"animatedStyles")," to the view you want to animate like so:"),(0,r.kt)(I,{showLines:[32,43],src:v,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"And that's it! Pretty straightforward, isn't it? Let's see it in the full glory in an interactive example:"),(0,r.kt)(A,{src:v,component:(0,r.kt)(f,{mdxType:"TapGesture"}),label:"Tap the circle",mdxType:"InteractiveExample"}),(0,r.kt)("p",null,"You can make the use of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gesture-composition/"},"composing gestures")," to more complex behaviors. But what if we'd like to create something a bit more interesting?"),(0,r.kt)("h2",{id:"handling-pan-gestures"},"Handling pan gestures"),(0,r.kt)("p",null,"Let's spice things a bit by making the circle draggable and have it bounce back to it's staring position when released. Let's also keep the color highlight and scale effect we've added in the previous example. Implementing this behavior it's not possible with just a simple tap gesture. We need to reach for a pan gesture instead."),(0,r.kt)("p",null,"Luckily, all the gestures share a similar API so implementing this is nearly as easy as renaming the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tap")," gesture to ",(0,r.kt)("inlineCode",{parentName:"p"},"Pan")," and chaining an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," method."),(0,r.kt)(I,{showLines:[17,33],src:x,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"The callback passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," comes with some ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pan-gesture#event-data"},"event data")," that has a bunch of handy properties. One of them is ",(0,r.kt)("inlineCode",{parentName:"p"},"translationX")," which indicates how much the object has moved on the X axis. We stored that in a shared value to move the circle accordingly. To make the circle come back to initial place all you have to do is to reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"offset.value")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinalize")," method. We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"withSpring")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"withTiming")," functions to make it come back with an animation."),(0,r.kt)("p",null,"All that's left to do is to adjust the logic in ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," to handle the offset."),(0,r.kt)(I,{showLines:[35,43],src:x,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"You can play around with the example below and see how the circle changes and reacts to the gesture:"),(0,r.kt)(A,{src:x,component:(0,r.kt)(R,{mdxType:"PanGesture"}),label:"Grab and drag the circle",mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"using-withdecay"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"withDecay")),(0,r.kt)("p",null,"Remember when some time ago we said that we'll come back to ",(0,r.kt)("inlineCode",{parentName:"p"},"withDecay"),"? Now this is the time!"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withDecay")," lets you retain the velocity of the gesture and animate with some deceleration. That means when you release a grabbed object with some velocity you can slowly bring it to stop. Sounds complicated but it really isn't!"),(0,r.kt)("p",null,"Simply pass the final velocity in ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinalize")," method to the ",(0,r.kt)("inlineCode",{parentName:"p"},"velocity")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"withDecay")," function and let Reanimated handle it for you. To retain the new position of an object update the change on the X axis in ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," method like so:"),(0,r.kt)(I,{showLines:[23,36],src:T.Z,mdxType:"CollapsibleCode"}),(0,r.kt)("p",null,"The rest of the code is just to make sure the square stays inside the screen."),(0,r.kt)("p",null,"Play around and see how the square decelerates when let go with some speed!"),(0,r.kt)(A,{src:T.Z,component:(0,r.kt)(N.Z,{mdxType:"DecayBasic"}),label:"Grab and release the square",mdxType:"InteractiveExample"}),(0,r.kt)("p",null,"Make sure to check check the full ",(0,r.kt)("a",{parentName:"p",href:"/docs/animations/withDecay"},(0,r.kt)("inlineCode",{parentName:"a"},"withDecay")," API reference")," to get to know rest of the configuration options."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this section, we went through basics of handling gestures with Reanimated and Gesture Handler. We learned about ",(0,r.kt)("inlineCode",{parentName:"p"},"Tap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pan")," gestures and ",(0,r.kt)("inlineCode",{parentName:"p"},"withDecay")," function. To sum up:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reanimated integrates with a different package called React Native Gesture Handler to provide seamless interactions."),(0,r.kt)("li",{parentName:"ul"},"We create new gestures, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"Gesture.Pan()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Gesture.Tap()"),", and pass them to ",(0,r.kt)("inlineCode",{parentName:"li"},"GestureDetector"),", which have to wrap the element we want to handle interactions on."),(0,r.kt)("li",{parentName:"ul"},"You can access and modify shared values inside gesture callbacks without any additional boilerplate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withDecay")," lets you create decelerating animations based on velocity coming from a gesture.")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"In this article, we've barely scratched the surface of what's possible with gestures in Reanimated. Besides ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/tap-gesture"},"Tap")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pan-gesture"},"Pan")," gestures Gesture Handler comes with many more e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pinch-gesture"},"Pinch")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/fling-gesture"},"Fling"),". We welcome you to dive into the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/quickstart"},"Quick start")," section of the React Native Gesture Handler documentation and explore all the possibilities that this library comes with."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/customizing-animation"},"the next section"),", we'll learn more about animating colors."))}j.isMDXComponent=!0},96662:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useSharedValue,\n  withDecay,\n} from 'react-native-reanimated';\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n\nconst SIZE = 120;\n\nexport default function App() {\n  const offset = useSharedValue(0);\n  const width = useSharedValue(0);\n\n  const onLayout = (event) => {\n    width.value = event.nativeEvent.layout.width;\n  };\n\n  const pan = Gesture.Pan()\n    .onChange((event) => {\n      // highlight-next-line\n      offset.value += event.changeX;\n    })\n    .onFinalize((event) => {\n      // highlight-start\n      offset.value = withDecay({\n        velocity: event.velocityX,\n        rubberBandEffect: true,\n        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],\n      });\n      // highlight-end\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View onLayout={onLayout} style={styles.wrapper}>\n        <GestureDetector gesture={pan}>\n          <Animated.View style={[styles.box, animatedStyles]} />\n        </GestureDetector>\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  wrapper: {\n    flex: 1,\n    width: '100%',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: SIZE,\n    width: SIZE,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    cursor: 'grab',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n"},24404:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(3058),o=n(80102),r=n(67294),s=n(37353),i=n(13250),l=n(45819),c=n(30042),d=n(16528),u=n(60091),h=n(72359),p=n(28033),m=n(84370),g=n(72931),f=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],w=Object.assign({},i.lG,i.LO,i._T,i.YB,i.Uy,i.hJ,i.E5,i.vr,{href:!0,lang:!0,pointerEvents:!0}),v=r.forwardRef(((e,t)=>{var n=e.hrefAttrs,a=e.numberOfLines,i=e.onClick,p=e.onLayout,v=e.onPress,k=e.onMoveShouldSetResponder,S=e.onMoveShouldSetResponderCapture,b=e.onResponderEnd,C=e.onResponderGrant,R=e.onResponderMove,_=e.onResponderReject,x=e.onResponderRelease,N=e.onResponderStart,T=e.onResponderTerminate,G=e.onResponderTerminationRequest,D=e.onScrollShouldSetResponder,E=e.onScrollShouldSetResponderCapture,H=e.onSelectionChangeShouldSetResponder,V=e.onSelectionChangeShouldSetResponderCapture,Z=e.onStartShouldSetResponder,I=e.onStartShouldSetResponderCapture,A=e.selectable,F=(0,o.Z)(e,f),L=r.useContext(m.Z),j=r.useRef(null),P=(0,g.PE)().direction;(0,c.Z)(j,p),(0,h.Z)(j,{onMoveShouldSetResponder:k,onMoveShouldSetResponderCapture:S,onResponderEnd:b,onResponderGrant:C,onResponderMove:R,onResponderReject:_,onResponderRelease:x,onResponderStart:N,onResponderTerminate:T,onResponderTerminationRequest:G,onScrollShouldSetResponder:D,onScrollShouldSetResponderCapture:E,onSelectionChangeShouldSetResponder:H,onSelectionChangeShouldSetResponderCapture:V,onStartShouldSetResponder:Z,onStartShouldSetResponderCapture:I});var B=r.useCallback((e=>{null!=i?i(e):null!=v&&(e.stopPropagation(),v(e))}),[i,v]),X=L?"span":"div",M=null!=e.lang?(0,g.w1)(e.lang):null,W=e.dir||M,z=W||P,O=(e=>(0,l.Z)(e,w))(F);if(O.dir=W,L||(O.dir=null!=W?W:"auto"),(i||v)&&(O.onClick=B),O.style=[null!=a&&a>1&&{WebkitLineClamp:a},!0===L?y.textHasAncestor$raw:y.text$raw,1===a&&y.textOneLine,null!=a&&a>1&&y.textMultiLine,e.style,!0===A&&y.selectable,!1===A&&y.notSelectable,v&&y.pressable],null!=e.href&&(X="a",null!=n)){var Y=n.download,q=n.rel,$=n.target;null!=Y&&(O.download=Y),null!=q&&(O.rel=q),"string"==typeof $&&(O.target="_"!==$.charAt(0)?"_"+$:$)}var U=(0,u.Z)(O),J=(0,d.Z)(j,U,t);O.ref=J;var Q=(0,s.Z)(X,O,{writingDirection:z});return L?Q:r.createElement(m.Z.Provider,{value:!0},Q)}));v.displayName="Text";var k={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,textAlign:"inherit",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},y=p.Z.create({text$raw:k,textHasAncestor$raw:(0,a.Z)((0,a.Z)({},k),{},{color:"inherit",font:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const S=v}}]);