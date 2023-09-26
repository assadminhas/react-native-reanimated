"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2281],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),v=a,m=u["".concat(d,".").concat(v)]||u[v]||p[v]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},41448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(83117),a=(t(67294),t(3905));const o={sidebar_position:4},i="useEvent",l={unversionedId:"advanced/useEvent",id:"advanced/useEvent",title:"useEvent",description:"This page was ported from an old version of the documentation.",source:"@site/docs/advanced/useEvent.mdx",sourceDirName:"advanced",slug:"/advanced/useEvent",permalink:"/react-native-reanimated/docs/advanced/useEvent",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/advanced/useEvent.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useFrameCallback",permalink:"/react-native-reanimated/docs/advanced/useFrameCallback"},next:{title:"useHandler",permalink:"/react-native-reanimated/docs/advanced/useHandler"}},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>handler</code> function",id:"handler-function",level:4},{value:"<code>eventNames</code> Array",id:"eventnames-array",level:4},{value:"<code>rebuilt</code> boolean",id:"rebuilt-boolean",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],s={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useevent"},"useEvent"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page was ported from an old version of the documentation."),(0,a.kt)("p",{parentName:"admonition"},"As we're rewriting the documentation some of the pages might be a little outdated.")),(0,a.kt)("p",null,"This is low-level hook returning event handler that will be invoked with native events, which should be used in order to create custom event handler hook like ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"handler-function"},(0,a.kt)("inlineCode",{parentName:"h4"},"handler")," ","[function]"),(0,a.kt)("p",null,"Handler will receive event object with native payload, that can be passed to custom handler hook's worklets."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event")," ","[object]"," - event object.\nThe payload can differ depending on the type of the event.")),(0,a.kt)("h4",{id:"eventnames-array"},(0,a.kt)("inlineCode",{parentName:"h4"},"eventNames")," ","[Array]"),(0,a.kt)("p",null,"Array of event names that will be handled by handler."),(0,a.kt)("h4",{id:"rebuilt-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"rebuilt")," ","[boolean]"),(0,a.kt)("p",null,"Value indicating whether handler should be rebuilt."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The hook returns event handler that will be invoked when native event is dispatched."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer,\n  );\n")))}p.isMDXComponent=!0}}]);