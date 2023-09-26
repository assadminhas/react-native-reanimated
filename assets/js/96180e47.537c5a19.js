"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8273],{4850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>_,frontMatter:()=>b,metadata:()=>R,toc:()=>w});var r=n(83117),a=n(67294),o=n(3905),l=n(67177),i=n(28033),s=n(10758),d=n(74306),p=n(35842),u=n(49638),c=n(42055);const m={code:"function anonymous(event){const{offset,clamp}=this.__closure;offset.value+=clamp(event.changeX,-5,5);}"},h={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function S(){const e=(0,s.y)(0),t=c.oF.Pan().onChange(function(){const t=function(t){e.value+=(0,d.uZ)(t.changeX,-5,5)};return t.__closure={offset:e,clamp:d.uZ},t.__initData=m,t.__workletHash=9905049030645,t}()),n=(0,p.l)(function(){const t=()=>({transform:[{translateX:e.value}]});return t.__closure={offset:e},t.__initData=h,t.__workletHash=0xf945d52c70d,t}());return a.createElement(c.cS,{style:v.container},a.createElement(l.Z,{style:v.wrapper},a.createElement(c.Le,{gesture:t},a.createElement(u.n,{style:[v.box,n]}))))}const v=i.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},wrapper:{flex:1,width:"100%",alignItems:"center",justifyContent:"center"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,cursor:"grab",alignItems:"center",justifyContent:"center"}}),f="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  clamp,\n  useAnimatedStyle,\n  useSharedValue,\n} from 'react-native-reanimated';\nimport {\n  Gesture,\n  GestureDetector,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n\nexport default function App() {\n  const offset = useSharedValue(0);\n\n  const pan = Gesture.Pan().onChange((event) => {\n    // highlight-next-line\n    offset.value += clamp(event.changeX, -5, 5);\n  });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <View style={styles.wrapper}>\n        <GestureDetector gesture={pan}>\n          <Animated.View style={[styles.box, animatedStyles]} />\n        </GestureDetector>\n      </View>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  wrapper: {\n    flex: 1,\n    width: '100%',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    cursor: 'grab',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n});\n",b={sidebar_position:2},k="clamp",R={unversionedId:"utilities/clamp",id:"utilities/clamp",title:"clamp",description:"clamp lets you limit a value within a specified range.",source:"@site/docs/utilities/clamp.mdx",sourceDirName:"utilities",slug:"/utilities/clamp",permalink:"/react-native-reanimated/docs/utilities/clamp",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/utilities/clamp.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"interpolate",permalink:"/react-native-reanimated/docs/utilities/interpolate"},next:{title:"interpolateColor",permalink:"/react-native-reanimated/docs/utilities/interpolateColor"}},g={},w=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>value</code>",id:"value",level:4},{value:"<code>min</code>",id:"min",level:4},{value:"<code>max</code>",id:"max",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],x=(C="InteractiveExample",function(e){return console.warn("Component "+C+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var C;const y={toc:w},N="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(N,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clamp"},"clamp"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clamp")," lets you limit a value within a specified range."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { clamp } from 'react-native-reanimated';\n\nfunction App() {\n  const result = clamp(sv.value, 0, 100);\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Type definitions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function clamp(value: number, min: number, max: number): number;\n"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"value"},(0,o.kt)("inlineCode",{parentName:"h4"},"value")),(0,o.kt)("p",null,"A number that will be returned as long as the provided value is in range between ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,o.kt)("h4",{id:"min"},(0,o.kt)("inlineCode",{parentName:"h4"},"min")),(0,o.kt)("p",null,"A number which will be returned when provided ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is lower than ",(0,o.kt)("inlineCode",{parentName:"p"},"min"),"."),(0,o.kt)("h4",{id:"max"},(0,o.kt)("inlineCode",{parentName:"h4"},"max")),(0,o.kt)("p",null,"A number which will be returned when provided ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is higher than ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clamp")," returns a number between ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," bounds."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(x,{src:f,component:(0,o.kt)(S,{mdxType:"Clamp"}),label:"Grab and drag the square",mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.kt)("div",{className:"compatibility"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Android"),(0,o.kt)("th",{parentName:"tr",align:null},"iOS"),(0,o.kt)("th",{parentName:"tr",align:null},"Web"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}_.isMDXComponent=!0},24404:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(3058),a=n(80102),o=n(67294),l=n(37353),i=n(13250),s=n(45819),d=n(30042),p=n(16528),u=n(60091),c=n(72359),m=n(28033),h=n(84370),S=n(72931),v=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],f=Object.assign({},i.lG,i.LO,i._T,i.YB,i.Uy,i.hJ,i.E5,i.vr,{href:!0,lang:!0,pointerEvents:!0}),b=o.forwardRef(((e,t)=>{var n=e.hrefAttrs,r=e.numberOfLines,i=e.onClick,m=e.onLayout,b=e.onPress,k=e.onMoveShouldSetResponder,g=e.onMoveShouldSetResponderCapture,w=e.onResponderEnd,x=e.onResponderGrant,C=e.onResponderMove,y=e.onResponderReject,N=e.onResponderRelease,_=e.onResponderStart,A=e.onResponderTerminate,Z=e.onResponderTerminationRequest,M=e.onScrollShouldSetResponder,E=e.onScrollShouldSetResponderCapture,G=e.onSelectionChangeShouldSetResponder,T=e.onSelectionChangeShouldSetResponderCapture,L=e.onStartShouldSetResponder,j=e.onStartShouldSetResponderCapture,D=e.selectable,P=(0,a.Z)(e,v),O=o.useContext(h.Z),I=o.useRef(null),V=(0,S.PE)().direction;(0,d.Z)(I,m),(0,c.Z)(I,{onMoveShouldSetResponder:k,onMoveShouldSetResponderCapture:g,onResponderEnd:w,onResponderGrant:x,onResponderMove:C,onResponderReject:y,onResponderRelease:N,onResponderStart:_,onResponderTerminate:A,onResponderTerminationRequest:Z,onScrollShouldSetResponder:M,onScrollShouldSetResponderCapture:E,onSelectionChangeShouldSetResponder:G,onSelectionChangeShouldSetResponderCapture:T,onStartShouldSetResponder:L,onStartShouldSetResponderCapture:j});var X=o.useCallback((e=>{null!=i?i(e):null!=b&&(e.stopPropagation(),b(e))}),[i,b]),H=O?"span":"div",W=null!=e.lang?(0,S.w1)(e.lang):null,q=e.dir||W,$=q||V,B=(e=>(0,s.Z)(e,f))(P);if(B.dir=q,O||(B.dir=null!=q?q:"auto"),(i||b)&&(B.onClick=X),B.style=[null!=r&&r>1&&{WebkitLineClamp:r},!0===O?R.textHasAncestor$raw:R.text$raw,1===r&&R.textOneLine,null!=r&&r>1&&R.textMultiLine,e.style,!0===D&&R.selectable,!1===D&&R.notSelectable,b&&R.pressable],null!=e.href&&(H="a",null!=n)){var U=n.download,z=n.rel,F=n.target;null!=U&&(B.download=U),null!=z&&(B.rel=z),"string"==typeof F&&(B.target="_"!==F.charAt(0)?"_"+F:F)}var J=(0,u.Z)(B),Y=(0,p.Z)(I,J,t);B.ref=Y;var K=(0,l.Z)(H,B,{writingDirection:$});return O?K:o.createElement(h.Z.Provider,{value:!0},K)}));b.displayName="Text";var k={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,textAlign:"inherit",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},R=m.Z.create({text$raw:k,textHasAncestor$raw:(0,r.Z)((0,r.Z)({},k),{},{color:"inherit",font:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const g=b}}]);