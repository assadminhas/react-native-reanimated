"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5910],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const i={sidebar_position:3},o="createWorkletRuntime",l={unversionedId:"threading/createWorkletRuntime",id:"threading/createWorkletRuntime",title:"createWorkletRuntime",description:"createWorkletRuntime lets you create a new JS runtime which can be used to run worklets possibly on different threads than JS or UI thread. This function is supposed to be used by third-party libraries that need to integrate with worklets. The return value represents the runtime and it's supposed to be passed to C++ side using JSI (JavaScript Interface) for further operations.",source:"@site/docs/threading/createWorkletRuntime.mdx",sourceDirName:"threading",slug:"/threading/createWorkletRuntime",permalink:"/react-native-reanimated/docs/threading/createWorkletRuntime",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/threading/createWorkletRuntime.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"runOnUI",permalink:"/react-native-reanimated/docs/threading/runOnUI"},next:{title:"Utilities",permalink:"/react-native-reanimated/docs/category/utilities"}},s={},u=[{value:"Reference",id:"reference",level:2},{value:"Usage in JavaScript",id:"usage-in-javascript",level:3},{value:"Usage in C++",id:"usage-in-c",level:3},{value:"Arguments",id:"arguments",level:3},{value:"<code>name</code>",id:"name",level:4},{value:"<code>initializer</code>",id:"initializer",level:4},{value:"Returns",id:"returns",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createworkletruntime"},"createWorkletRuntime"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createWorkletRuntime")," lets you create a new JS runtime which can be used to run ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#worklet"},"worklets")," possibly on different threads than ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JS")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". This function is supposed to be used by third-party libraries that need to integrate with worklets. The return value represents the runtime and it's supposed to be passed to C++ side using JSI (JavaScript Interface) for further operations."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"usage-in-javascript"},"Usage in JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createWorkletRuntime } from 'react-native-reanimated';\n\nfunction App() {\n  const runtime = createWorkletRuntime('background');\n}\n")),(0,a.kt)("h3",{id:"usage-in-c"},"Usage in C++"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"auto runtime = reanimated::extractWorkletRuntime(rt, runtimeValue);\n\njsi::Runtime &rt = runtime->getJSIRuntime();\n\nauto worklet = reanimated::extractShareableOrThrow<reanimated::ShareableWorklet>(rt, workletValue);\n\nruntime->runGuarded(worklet, ...args);\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Type definitions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type WorkletRuntime = {\n  __hostObjectWorkletRuntime: never;\n  readonly name: string;\n};\n\nfunction createWorkletRuntime(\n  name: string,\n  initializer?: __ComplexWorkletFunction<[], void>\n): WorkletRuntime;\n"))),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")),(0,a.kt)("p",null,"A name used to identify the runtime which will appear in devices list in Chrome DevTools."),(0,a.kt)("h4",{id:"initializer"},(0,a.kt)("inlineCode",{parentName:"h4"},"initializer")),(0,a.kt)("p",null,"An optional worklet that will be run synchronously on the same thread immediately after the runtime is created. It can be used to inject some global variables or functions into the runtime."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createWorkletRuntime")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"WorkletRuntime")," which is a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsi::HostObject<reanimated::WorkletRuntime>"),"."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Worklet runtimes come with ",(0,a.kt)("inlineCode",{parentName:"p"},"console.*")," methods installed out-of-the-box. Other APIs (including ",(0,a.kt)("inlineCode",{parentName:"p"},"performance.now"),") are not available and need to be injected into the runtime or captured via worklet closure.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In development mode, all unhandled errors thrown in the runtime (except for those thrown in ",(0,a.kt)("inlineCode",{parentName:"p"},"initializer"),") will be caught and thus logged to the console and displayed in a LogBox.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can use Chrome DevTools to debug the runtime (Hermes only). The runtime will appear in the devices list as ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"createWorkletRuntime"),"."))),(0,a.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,a.kt)("div",{className:"compatibility"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Android"),(0,a.kt)("th",{parentName:"tr",align:null},"iOS"),(0,a.kt)("th",{parentName:"tr",align:null},"Web"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"))))))}p.isMDXComponent=!0}}]);