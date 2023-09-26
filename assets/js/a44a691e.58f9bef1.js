"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4881],{33701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>w,default:()=>P,frontMatter:()=>g,metadata:()=>k,toc:()=>A});var a=n(83117),i=n(67294),o=n(3905),r=n(67177),l=n(72400),s=n(28033),d=n(10758),c=n(65641),u=n(6328),m=n(68171);const p=1e3,y=500,h=["React","Native","Reanimated"];function b(){const[e,t]=(0,i.useState)(!1),n=(0,d.y)(0),a=(0,d.y)(0),o=(0,d.y)(0);return i.createElement(r.Z,{style:f.container},i.createElement(r.Z,{style:f.text},i.createElement(m.V,{style:{...f.label,opacity:n}},h[0]),i.createElement(m.V,{style:{...f.label,opacity:a}},h[1]),i.createElement(m.V,{style:{...f.label,opacity:o}},h[2])),i.createElement(l.Z,{title:e?"Hide":"Show",onPress:()=>{e?(o.value=(0,c.p)(0*y,(0,u.j)(0,{duration:p})),a.value=(0,c.p)(1*y,(0,u.j)(0,{duration:p})),n.value=(0,c.p)(2*y,(0,u.j)(0,{duration:p}))):(n.value=(0,c.p)(0*y,(0,u.j)(1,{duration:p})),a.value=(0,c.p)(1*y,(0,u.j)(1,{duration:p})),o.value=(0,c.p)(2*y,(0,u.j)(1,{duration:p}))),t(!e)}}))}const f=s.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},text:{flexDirection:"row"},tab:{paddingHorizontal:20,paddingVertical:10},label:{fontSize:42,textAlign:"center",fontWeight:"bold",marginRight:8},divider:{borderRightWidth:1,borderRightColor:"#ddd"},animatedBorder:{height:8,width:64,backgroundColor:"tomato",borderRadius:20}}),v="import React, { useState } from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withDelay,\n  withTiming,\n} from 'react-native-reanimated';\n\nconst DURATION = 1000;\nconst DELAY = 500;\n\nconst text = ['React', 'Native', 'Reanimated'];\n\nexport default function App() {\n  const [isShown, setShown] = useState(false);\n\n  const opacity1 = useSharedValue(0);\n  const opacity2 = useSharedValue(0);\n  const opacity3 = useSharedValue(0);\n\n  // prettier-ignore\n  const show = () => {\n    if (isShown) {\n      opacity3.value = withDelay(0 * DELAY, withTiming(0, { duration: DURATION }));\n      opacity2.value = withDelay(1 * DELAY, withTiming(0, { duration: DURATION }));\n      opacity1.value = withDelay(2 * DELAY, withTiming(0, { duration: DURATION }));\n    } else {\n      opacity1.value = withDelay(0 * DELAY, withTiming(1, { duration: DURATION }));\n      opacity2.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }));\n      opacity3.value = withDelay(2 * DELAY, withTiming(1, { duration: DURATION }));\n    }\n\n    setShown(!isShown);\n  };\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.text}>\n        <Animated.Text style={{ ...styles.label, opacity: opacity1 }}>\n          {text[0]}\n        </Animated.Text>\n        <Animated.Text style={{ ...styles.label, opacity: opacity2 }}>\n          {text[1]}\n        </Animated.Text>\n        <Animated.Text style={{ ...styles.label, opacity: opacity3 }}>\n          {text[2]}\n        </Animated.Text>\n      </View>\n      <Button title={isShown ? 'Hide' : 'Show'} onPress={show} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  text: {\n    flexDirection: 'row',\n  },\n  tab: {\n    paddingHorizontal: 20,\n    paddingVertical: 10,\n  },\n  label: {\n    fontSize: 42,\n    textAlign: 'center',\n    fontWeight: 'bold',\n    marginRight: 8,\n  },\n  divider: {\n    borderRightWidth: 1,\n    borderRightColor: '#ddd',\n  },\n  animatedBorder: {\n    height: 8,\n    width: 64,\n    backgroundColor: 'tomato',\n    borderRadius: 20,\n  },\n});\n",g={sidebar_position:6},w="withDelay",k={unversionedId:"animations/withDelay",id:"animations/withDelay",title:"withDelay",description:"withDelay is an animation modifier that lets you start an animation with a delay.",source:"@site/docs/animations/withDelay.mdx",sourceDirName:"animations",slug:"/animations/withDelay",permalink:"/react-native-reanimated/docs/animations/withDelay",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/animations/withDelay.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"withRepeat",permalink:"/react-native-reanimated/docs/animations/withRepeat"},next:{title:"Core",permalink:"/react-native-reanimated/docs/category/core"}},D={},A=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>delayMs</code>",id:"delayms",level:4},{value:"<code>delayedAnimation</code>",id:"delayedanimation",level:4},{value:"<code>reduceMotion</code> <Optional />",id:"reducemotion-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],x=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},N=x("Optional"),T=x("InteractiveExample"),R={toc:A},S="wrapper";function P(e){let{components:t,...n}=e;return(0,o.kt)(S,(0,a.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"withdelay"},"withDelay"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"withDelay")," is an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-modifier"},"animation modifier")," that lets you start an animation with a delay."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withDelay } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withDelay(500, withTiming(0));\n  // ...\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type AnimatableValue = number | string | number[];\n\nfunction withDelay<T extends AnimatableValue>(\n  delayMs: number,\n  delayedAnimation: T,\n  reduceMotion?: ReduceMotion\n): T;\n\nenum ReduceMotion {\n  System = 'system',\n  Always = 'always',\n  Never = 'never',\n}\n"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"delayms"},(0,o.kt)("inlineCode",{parentName:"h4"},"delayMs")),(0,o.kt)("p",null,"Duration (in milliseconds) before the animation starts."),(0,o.kt)("h4",{id:"delayedanimation"},(0,o.kt)("inlineCode",{parentName:"h4"},"delayedAnimation")),(0,o.kt)("p",null,"Animation to delay."),(0,o.kt)("h4",{id:"reducemotion-"},(0,o.kt)("inlineCode",{parentName:"h4"},"reduceMotion")," ",(0,o.kt)(N,{mdxType:"Optional"})),(0,o.kt)("p",null,"A parameter that determines how the animation responds to the device's reduced motion accessibility setting."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"withDelay")," returns an ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation object"),". It can be either assigned directly to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," or can be used as a value for a style object returned from ",(0,o.kt)("a",{parentName:"p",href:"docs/core/useAnimatedStyle"},"useAnimatedStyle"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(T,{src:v,component:(0,o.kt)(b,{mdxType:"DelayText"}),mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)("div",{className:"compatibility"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Android"),(0,o.kt)("th",{parentName:"tr",align:null},"iOS"),(0,o.kt)("th",{parentName:"tr",align:null},"Web"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}P.isMDXComponent=!0},65641:(e,t,n)=>{n.d(t,{p:()=>i});var a=n(76933);const i=function(e,t,n){return(0,a.oF)(t,(()=>{const i="function"==typeof t?t():t;return{isHigherOrder:!0,onFrame:function(t,n){const{startTime:a,started:o,previousAnimation:r}=t,l=t.current;if(n-a>e||t.reduceMotion){o||(i.onStart(i,l,n,r),t.previousAnimation=null,t.started=!0);const e=i.onFrame(i,n);return t.current=i.current,e}if(r){const e=r.finished||r.onFrame(r,n);t.current=r.current,e&&(t.previousAnimation=null)}return!1},onStart:function(e,t,n,a){e.startTime=n,e.started=!1,e.current=t,e.previousAnimation=a===e?a.previousAnimation:a,void 0===i.reduceMotion&&(i.reduceMotion=e.reduceMotion)},current:i.current,callback:e=>{i.callback&&i.callback(e)},previousAnimation:null,startTime:0,started:!1,reduceMotion:(0,a.uh)(n)}}))}},68171:(e,t,n)=>{n.d(t,{V:()=>i});n(67294);var a=n(24404);const i=(0,n(34605).Z)(a.Z)},72400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),i=n(28033),o=n(88548),r=n(24404),l=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,i=e.color,l=e.disabled,d=e.onPress,c=e.testID,u=e.title;return a.createElement(o.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:l,focusable:!l,onPress:d,ref:t,style:[s.button,i&&{backgroundColor:i},l&&s.buttonDisabled],testID:c},a.createElement(r.Z,{style:[s.text,l&&s.textDisabled]},u))}));l.displayName="Button";var s=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const d=l},88548:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(83117),i=n(80102),o=n(67294),r=n(16528),l=n(94119),s=n(28033),d=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function u(e,t){var n=e.activeOpacity,s=e.delayPressIn,u=e.delayPressOut,p=e.delayLongPress,y=e.disabled,h=e.focusable,b=e.onLongPress,f=e.onPress,v=e.onPressIn,g=e.onPressOut,w=e.rejectResponderTermination,k=e.style,D=(0,i.Z)(e,c),A=(0,o.useRef)(null),x=(0,r.Z)(t,A),N=(0,o.useState)("0s"),T=N[0],R=N[1],S=(0,o.useState)(null),P=S[0],C=S[1],E=(0,o.useCallback)(((e,t)=>{C(e),R(t?t/1e3+"s":"0s")}),[C,R]),I=(0,o.useCallback)((e=>{E(null!=n?n:.2,e)}),[n,E]),M=(0,o.useCallback)((e=>{E(null,e)}),[E]),O=(0,o.useMemo)((()=>({cancelable:!w,disabled:y,delayLongPress:p,delayPressStart:s,delayPressEnd:u,onLongPress:b,onPress:f,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;I(t?0:150),null!=v&&v(e)},onPressEnd(e){M(250),null!=g&&g(e)}})),[p,s,u,y,b,f,v,g,w,I,M]),Z=(0,l.Z)(A,O);return o.createElement(d.Z,(0,a.Z)({},D,Z,{accessibilityDisabled:y,focusable:!y&&!1!==h,pointerEvents:y?"none":void 0,ref:x,style:[m.root,!y&&m.actionable,k,null!=P&&{opacity:P},{transitionDuration:T}]}))}var m=s.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=o.memo(o.forwardRef(u));p.displayName="TouchableOpacity";const y=p}}]);