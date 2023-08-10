(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8664],{78069:(t,e,r)=>{"use strict";r.d(e,{P2:()=>c,XW:()=>u,Yv:()=>a});var n=r(84831);let i={opacity:!0,transform:!0,backgroundColor:!0,borderRightColor:!0,borderBottomColor:!0,borderColor:!0,borderEndColor:!0,borderLeftColor:!0,borderStartColor:!0,borderTopColor:!0,shadowOpacity:!0,shadowRadius:!0,scaleX:!0,scaleY:!0,translateX:!0,translateY:!0},o={borderBottomWidth:!0,borderEndWidth:!0,borderLeftWidth:!0,borderRightWidth:!0,borderStartWidth:!0,borderTopWidth:!0,borderWidth:!0,bottom:!0,flex:!0,flexGrow:!0,flexShrink:!0,height:!0,left:!0,margin:!0,marginBottom:!0,marginEnd:!0,marginHorizontal:!0,marginLeft:!0,marginRight:!0,marginStart:!0,marginTop:!0,marginVertical:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,padding:!0,paddingBottom:!0,paddingEnd:!0,paddingHorizontal:!0,paddingLeft:!0,paddingRight:!0,paddingStart:!0,paddingTop:!0,paddingVertical:!0,right:!0,start:!0,top:!0,width:!0,zIndex:!0,borderBottomEndRadius:!0,borderBottomLeftRadius:!0,borderBottomRightRadius:!0,borderBottomStartRadius:!0,borderRadius:!0,borderTopEndRadius:!0,borderTopLeftRadius:!0,borderTopRightRadius:!0,borderTopStartRadius:!0,elevation:!0,fontSize:!0,lineHeight:!0,textShadowRadius:!0,letterSpacing:!0,display:!0,backfaceVisibility:!0,overflow:!0,resizeMode:!0,fontStyle:!0,fontWeight:!0,textAlign:!0,textDecorationLine:!0,fontFamily:!0,textAlignVertical:!0,fontVariant:!0,textDecorationStyle:!0,textTransform:!0,writingDirection:!0,color:!0,tintColor:!0,shadowColor:!0,placeholderTextColor:!0};function s(){(0,n.RR)(Object.keys(i),Object.keys(o))}function a(t){const e=Object.keys(o).length;o={...o,...t},e!==Object.keys(o).length&&s()}function c(t){const e=Object.keys(i).length;i={...i,...t},e!==Object.keys(i).length&&s()}const l=new Set;function u(t){const e=t.uiViewClassName,r=t.validAttributes;if(!l.has(e)){const t={};Object.keys(r).forEach((e=>{e in o||e in i||(t[e]=!0)})),c(t),l.add(e)}}s()},88664:(t,e,r)=>{"use strict";r.d(e,{Z:()=>M});var n=r(67294),i=r(82747),o=r(22805),s=r(28033),a=r(18452);const c=function(t){let{getForwardedRef:e,setLocalRef:r}=t;return function(t){const n=e();r(t),"function"==typeof n?n(t):"object"==typeof n&&null!=n&&(n.current=t)}};var l=r(41143),u=r.n(l),d=r(78069),h=r(51506),f=r(84831),p=r(12717),v=r(97604),m=r(83442),g=r(81774),b=r(97608),w=r(81064),y=r(41956),_=r(7737),E=r(49402),R=r(4463),N=r(78385);function T(){return T=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},T.apply(this,arguments)}function P(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function S(){}function C(t){return"build"in t&&"function"==typeof t.build?t.build():t}function I(t){if(!Array.isArray(t))return[t];const e=[],r=t=>{t.forEach((t=>{Array.isArray(t)?r(t):e.push(t)}))};return r(t),e}function O(t,e){return(null==t?void 0:t.viewsRef)===(null==e?void 0:e.viewsRef)}const j=O,V=(t,e)=>("function"==typeof e||"object"==typeof e)&&(null!=e&&t in e);function k(t){return!!t&&t.some((t=>A(t)))}function A(t){return!!t&&Object.keys(t).some((e=>{const r=t[e];return(0,N.E)(r)||"transform"===e&&k(r)}))}function D(t){const e={};for(const[r,n]of Object.entries(t))"transform"===r?e[r]=n.map((t=>D(t))):(0,N.E)(n)?e[r]=n.value:e[r]=n;return e}function M(t,e){u()("function"!=typeof t||t.prototype&&t.prototype.isReactComponent,`Looks like you're passing a function component \`${t.name}\` to \`createAnimatedComponent\` function which supports only class components. Please wrap your function component with \`React.forwardRef()\` or use a class component instead.`);class l extends n.Component{constructor(t){super(t),P(this,"_styles",null),P(this,"_animatedProps",void 0),P(this,"_viewTag",-1),P(this,"_isFirstRender",!0),P(this,"animatedStyle",{value:{}}),P(this,"initialStyle",{}),P(this,"_component",null),P(this,"_inlinePropsViewDescriptors",null),P(this,"_inlinePropsMapperId",null),P(this,"_inlineProps",{}),P(this,"_setComponentRef",c({getForwardedRef:()=>this.props.forwardedRef,setLocalRef:t=>{const e=(0,i.Z)(t),{layout:r,entering:n,exiting:o,sharedTransitionTag:s}=this.props;if((r||n||o||s)&&null!=e&&((0,m.Wr)()||(0,f.HD)(!0,!1),r&&(0,f.ln)(e,b.T.LAYOUT,C(r)),n&&(0,f.ln)(e,b.T.ENTERING,C(n)),o&&(0,f.ln)(e,b.T.EXITING,C(o)),s)){const t=this.props.sharedTransitionStyle??w._;(0,f.ln)(e,b.T.SHARED_ELEMENT_TRANSITION,C(t),s)}t!==this._component&&(this._component=t)}})),(0,m.V5)()&&(this.animatedStyle={value:{}})}componentWillUnmount(){this._detachNativeEvents(),this._detachStyles(),this._detachInlineProps()}componentDidMount(){this._attachNativeEvents(),this._attachAnimatedStyles(),this._attachInlineProps()}_getEventViewRef(){var t;return null!==(t=this._component)&&void 0!==t&&t.getScrollableNode?this._component.getScrollableNode():this._component}_attachNativeEvents(){const t=this._getEventViewRef();let r=null;for(const n in this.props){const o=this.props[n];V("current",o)&&o.current instanceof a.Z&&(null===r&&(r=(0,i.Z)(null!=e&&e.setNativeProps?this:t)),o.current.registerForEvents(r,n))}}_detachNativeEvents(){for(const t in this.props){const e=this.props[t];V("current",e)&&e.current instanceof a.Z&&e.current.unregisterFromEvents()}}_detachStyles(){if("web"===o.Z.OS&&null!==this._styles)for(const e of this._styles)null!=e&&e.viewsRef&&e.viewsRef.remove(this);else if(-1!==this._viewTag&&null!==this._styles){var t;for(const t of this._styles)t.viewDescriptors.remove(this._viewTag);if(null!==(t=this.props.animatedProps)&&void 0!==t&&t.viewDescriptors&&this.props.animatedProps.viewDescriptors.remove(this._viewTag),r.g._IS_FABRIC){const t=this._viewTag;(0,p.m_)((()=>{_removeShadowNodeFromRegistry(t)}))()}}}_reattachNativeEvents(t){for(const e in t){const t=this.props[e];V("current",t)&&t.current instanceof a.Z&&t.current.reattachNeeded&&t.current.unregisterFromEvents()}let r=null;for(const n in this.props){const t=this.props[n];if(V("current",t)&&t.current instanceof a.Z&&t.current.reattachNeeded){if(null===r){const t=this._getEventViewRef();r=(0,i.Z)(null!=e&&e.setNativeProps?this:t)}t.current.registerForEvents(r,n),t.current.reattachNeeded=!1}}}_updateFromNative(t){var r,n;null!=e&&e.setNativeProps?e.setNativeProps(this._component,t):null===(r=this._component)||void 0===r||null===(n=r.setNativeProps)||void 0===n||n.call(r,t)}_getViewInfo(){var t;let e,n,s,a=null;const c=null!==(t=this._component)&&void 0!==t&&t.getAnimatableRef?this._component.getAnimatableRef():this;if("web"===o.Z.OS)e=(0,i.Z)(c),n=null,a=null,s=null;else{var l;const t=h.RNRenderer.findHostInstance_DEPRECATED(c);if(!t)throw new Error("Cannot find host instance for this component. Maybe it renders nothing?");e=null==t?void 0:t._nativeTag,n=null==t||null===(l=t.viewConfig)||void 0===l?void 0:l.uiViewClassName,s=null==t?void 0:t.viewConfig,r.g._IS_FABRIC&&(a=(0,_.b)(this))}return{viewTag:e,viewName:n,shadowNodeWrapper:a,viewConfig:s}}_attachAnimatedStyles(){var t,e;const r=this.props.style?function(t){return t.filter((t=>null==t?void 0:t.viewDescriptors))}(I(this.props.style)):[],n=this._styles;this._styles=r;const i=this._animatedProps;this._animatedProps=this.props.animatedProps;const{viewTag:o,viewName:s,shadowNodeWrapper:a,viewConfig:c}=this._getViewInfo();if(((null===(t=this.props.animatedProps)||void 0===t?void 0:t.viewDescriptors)||r.length)&&c&&(0,d.XW)(c),this._viewTag=o,n){if(!(1===r.length&&1===n.length&&O(r[0],n[0])))for(const t of n){r.some((e=>O(e,t)))||t.viewDescriptors.remove(o)}}r.forEach((t=>{t.viewDescriptors.add({tag:o,name:s,shadowNodeWrapper:a}),(0,m.V5)()&&(this.animatedStyle.value={...this.animatedStyle.value,...t.initial.value},t.animatedStyle.current=this.animatedStyle)})),i&&!j(i,this.props.animatedProps)&&i.viewDescriptors.remove(o),null!==(e=this.props.animatedProps)&&void 0!==e&&e.viewDescriptors&&this.props.animatedProps.viewDescriptors.add({tag:o,name:s,shadowNodeWrapper:a})}_attachInlineProps(){const t=function(t){const e={};for(const r in t){const n=t[r];"style"===r?I(t.style??[]).forEach((t=>{if(t)for(const[r,n]of Object.entries(t))((0,N.E)(n)||"transform"===r&&k(n))&&(e[r]=n)})):(0,N.E)(n)&&(e[r]=n)}return e}(this.props);if(function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!0;for(const r of Object.keys(t))if(t[r]!==e[r])return!0;return!1}(t,this._inlineProps)){if(!this._inlinePropsViewDescriptors){this._inlinePropsViewDescriptors=(0,y.G)();const{viewTag:e,viewName:r,shadowNodeWrapper:n,viewConfig:i}=this._getViewInfo();Object.keys(t).length&&i&&(0,d.XW)(i),this._inlinePropsViewDescriptors.add({tag:e,name:r,shadowNodeWrapper:n})}const e=this._inlinePropsViewDescriptors.sharableViewDescriptors,r=R.Z.native?void 0:{items:new Set([this])},n=()=>{const n=D(t);(0,E.ZP)(e,n,r)};this._inlineProps=t,this._inlinePropsMapperId&&(0,v.BV)(this._inlinePropsMapperId),this._inlinePropsMapperId=null,Object.keys(t).length&&(this._inlinePropsMapperId=(0,f.Rn)(n,Object.values(t)))}}_detachInlineProps(){this._inlinePropsMapperId&&(0,v.BV)(this._inlinePropsMapperId)}componentDidUpdate(t){this._reattachNativeEvents(t),this._attachAnimatedStyles(),this._attachInlineProps()}_filterNonAnimatedProps(t){const e={};for(const r in t){const n=t[r];if("style"===r){const n=I(t.style??[]).map((t=>{if(t&&t.viewDescriptors)return t.viewsRef.add(this),this._isFirstRender&&(this.initialStyle={...t.initial.value,...(0,g.AX)(t.initial.updater)}),this.initialStyle;if(A(t)){if(this._isFirstRender)return D(t);const e={};for(const[r,n]of Object.entries(t))(0,N.E)(n)||"transform"===r&&k(n)||(e[r]=n);return e}return t}));e[r]=s.Z.flatten(n)}else if("animatedProps"===r){const r=t.animatedProps;void 0!==r.initial&&Object.keys(r.initial.value).forEach((t=>{var n,i;e[t]=null===(n=r.initial)||void 0===n?void 0:n.value[t],null===(i=r.viewsRef)||void 0===i||i.add(this)}))}else V("current",n)&&n.current instanceof a.Z?n.current.eventNames.length>0?n.current.eventNames.forEach((t=>{e[t]=V("listeners",n.current)?n.current.listeners[t]:S})):e[r]=S:(0,N.E)(n)?this._isFirstRender&&(e[r]=n.value):"onGestureHandlerStateChange"===r&&(0,m.f1)()||(e[r]=n)}return e}render(){const e=this._filterNonAnimatedProps(this.props);(0,m.V5)()&&(e.animatedStyle=this.animatedStyle),this._isFirstRender&&(this._isFirstRender=!1);const r=o.Z.select({web:{},default:{collapsable:!1}});return n.createElement(t,T({},e,{ref:this._setComponentRef},r))}}return P(l,"displayName",void 0),l.displayName=`AnimatedComponent(${t.displayName||t.name||"Component"})`,n.forwardRef(((t,e)=>n.createElement(l,T({},t,null===e?null:{forwardedRef:e}))))}},87827:(t,e,r)=>{"use strict";function n(t,e,r,n){const i=4,o=.001,s=1e-7,a=10,c=11,l=1/(c-1);function u(t,e){return 1-3*e+3*t}function d(t,e){return 3*e-6*t}function h(t){return 3*t}function f(t,e,r){return((u(e,r)*t+d(e,r))*t+h(e))*t}function p(t,e,r){return 3*u(e,r)*t*t+2*d(e,r)*t+h(e)}if(!(t>=0&&t<=1&&r>=0&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===n)return function(t){return t};const v=new Array(c);for(let g=0;g<c;++g)v[g]=f(g*l,t,r);function m(e){let n=0,u=1;const d=c-1;for(;u!==d&&v[u]<=e;++u)n+=l;--u;const h=n+(e-v[u])/(v[u+1]-v[u])*l,m=p(h,t,r);return m>=o?function(t,e,r,n){for(let o=0;o<i;++o){const i=p(e,r,n);if(0===i)return e;e-=(f(e,r,n)-t)/i}return e}(e,h,t,r):0===m?h:function(t,e,r,n,i){let o,c,l=0;do{c=e+(r-e)/2,o=f(c,n,i)-t,o>0?r=c:e=c}while(Math.abs(o)>s&&++l<a);return c}(e,n,n+l,t,r)}return function(i){return t===e&&r===n?i:0===i?0:1===i?1:f(m(i),e,n)}}r.d(e,{o:()=>i});const i={linear:function(t){return t},ease:function(t){return n(.42,0,1,1)(t)},quad:function(t){return t*t},cubic:function(t){return t*t*t},poly:function(t){return e=>Math.pow(e,t)},sin:function(t){return 1-Math.cos(t*Math.PI/2)},circle:function(t){return 1-Math.sqrt(1-t*t)},exp:function(t){return Math.pow(2,10*(t-1))},elastic:function(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return e=>1-Math.pow(Math.cos(e*Math.PI/2),3)*Math.cos(e*t)},back:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.70158;return e=>e*e*((t+1)*e-t)},bounce:function(t){if(t<1/2.75)return 7.5625*t*t;if(t<2/2.75){const e=t-1.5/2.75;return 7.5625*e*e+.75}if(t<2.5/2.75){const e=t-2.25/2.75;return 7.5625*e*e+.9375}const e=t-2.625/2.75;return 7.5625*e*e+.984375},bezier:function(t,e,r,i){return{factory:()=>n(t,e,r,i)}},bezierFn:function(t,e,r,i){return n(t,e,r,i)},steps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return r=>{const n=Math.min(Math.max(r,0),1)*t;return e?Math.ceil(n)/t:Math.floor(n)/t}},in:function(t){return t},out:function(t){return e=>1-t(1-e)},inOut:function(t){return e=>e<.5?t(2*e)/2:1-t(2*(1-e))/2}}},49402:(t,e,r)=>{"use strict";r.d(e,{RH:()=>u,Ue:()=>a,ZP:()=>d});var n=r(43219),i=r(84831),o=r(79773),s=r(83442);const a=(0,i.lF)()?(0,i.Uv)(["backgroundColor","borderBottomColor","borderColor","borderLeftColor","borderRightColor","borderTopColor","borderStartColor","borderEndColor","color","shadowColor","textDecorationColor","tintColor","textShadowColor","overlayColor"]):[];let c;c=(0,s.Wr)()?(t,e,r)=>{r&&r.items.forEach(((t,r)=>{(0,o.n)(e,t)}))}:r.g._IS_FABRIC?(t,e,r)=>{for(const i in e)-1!==a.indexOf(i)&&(e[i]=(0,n.aL)(e[i]));t.value.forEach((t=>{_updatePropsFabric(t.shadowNodeWrapper,e)}))}:(t,e,r)=>{for(const i in e)-1!==a.indexOf(i)&&(e[i]=(0,n.aL)(e[i]));t.value.forEach((t=>{_updatePropsPaper(t.tag,t.name||"RCTView",e)}))};const l=c,u=(t,e,r,n,i)=>{i.forEach((t=>{t(e)})),n.current.value={...n.current.value,...e},l(t,e,r)},d=c},41956:(t,e,r)=>{"use strict";r.d(e,{G:()=>o,S:()=>s});var n=r(67294),i=r(84831);function o(){const t=(0,i.vG)([]);return{sharableViewDescriptors:t,add:e=>{t.modify((t=>{const r=t.findIndex((t=>t.tag===e.tag));return-1!==r?t[r]=e:t.push(e),t}))},remove:e=>{t.modify((t=>{const r=t.findIndex((t=>t.tag===e));return-1!==r&&t.splice(r,1),t}))}}}function s(){const t=(0,n.useRef)(null);if(null===t.current){const e={items:new Set,add:t=>{e.items.has(t)||e.items.add(t)},remove:t=>{e.items.delete(t)}};t.current=e}return t.current}},18452:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(4463),i=r(84831);function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class s{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];o(this,"worklet",void 0),o(this,"eventNames",void 0),o(this,"reattachNeeded",void 0),o(this,"listeners",void 0),o(this,"viewTag",void 0),o(this,"registrations",void 0),this.worklet=t,this.eventNames=e,this.reattachNeeded=!1,this.listeners={},this.viewTag=void 0,this.registrations=[],n.Z.native||(this.listeners=e.reduce(((e,r)=>(e[r]=function(t,e){return r=>{e({...r.nativeEvent,eventName:t})}}(r,t),e)),{}))}updateWorklet(t){this.worklet=t,this.reattachNeeded=!0}registerForEvents(t,e){this.viewTag=t,this.registrations=this.eventNames.map((e=>(0,i.$v)(t+e,this.worklet))),0===this.registrations.length&&e&&this.registrations.push((0,i.$v)(t+e,this.worklet))}unregisterFromEvents(){this.registrations.forEach((t=>(0,i.dl)(t))),this.registrations=[]}}},6328:(t,e,r)=>{"use strict";r.d(e,{j:()=>o});var n=r(87827),i=r(81774);function o(t,e,r){return(0,i.oF)(t,(()=>{const i={duration:300,easing:n.o.inOut(n.o.quad)};return e&&Object.keys(e).forEach((t=>i[t]=e[t])),{type:"timing",onFrame:function(t,e){const{toValue:r,startTime:n,startValue:o}=t,s=e-n;if(s>=i.duration)return t.startTime=0,t.current=r,!0;const a=t.easing(s/i.duration);return t.current=o+(r-o)*a,!1},onStart:function(e,r,n,o){o&&"timing"===o.type&&o.toValue===t&&o.startTime?(e.startTime=o.startTime,e.startValue=o.startValue):(e.startTime=n,e.startValue=r),e.current=r,"object"==typeof i.easing?e.easing=i.easing.factory():e.easing=i.easing},progress:0,toValue:t,startValue:0,startTime:0,easing:()=>0,current:t,callback:r}}))}},97608:(t,e,r)=>{"use strict";r.d(e,{T:()=>n});let n=function(t){return t[t.ENTERING=1]="ENTERING",t[t.EXITING=2]="EXITING",t[t.LAYOUT=3]="LAYOUT",t[t.SHARED_ELEMENT_TRANSITION=4]="SHARED_ELEMENT_TRANSITION",t}({})},81064:(t,e,r)=>{"use strict";r.d(e,{_:()=>a,w:()=>s});var n=r(6328);function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const o=["width","height","originX","originY","transform"];class s{constructor(){i(this,"animationFactory",null),i(this,"defaultDuration",500)}static createInstance(){return new s}static custom(t){return this.createInstance().custom(t)}custom(t){return this.animationFactory=t,this}static build(){return this.createInstance().build()}build(){const t=this.animationFactory,e=this.defaultDuration;return r=>{let i={};const s={};if(t){i=t(r);for(const t in i)if(!o.includes(t))throw Error(`The prop '${t}' is not supported yet.`)}else for(const t of o)if("transform"===t){const t=r.targetTransformMatrix;i.transformMatrix=(0,n.j)(t,{duration:e})}else{const o="target"+t.charAt(0).toUpperCase()+t.slice(1);i[t]=(0,n.j)(r[o],{duration:e})}for(const t in i)if("transform"===t)s.transformMatrix=r.currentTransformMatrix;else{const e="current"+t.charAt(0).toUpperCase()+t.slice(1);s[t]=r[e]}return{initialValues:s,animations:i}}}}const a=s},51506:t=>{t.exports=null}}]);