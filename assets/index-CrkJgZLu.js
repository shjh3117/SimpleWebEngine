(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();var xh={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function xS(){if(Qv)return ko;Qv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:l}}return ko.Fragment=t,ko.jsx=e,ko.jsxs=e,ko}var Jv;function SS(){return Jv||(Jv=1,xh.exports=xS()),xh.exports}var Vt=SS(),Sh={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function MS(){if($v)return ue;$v=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(N,tt,mt){this.props=N,this.context=tt,this.refs=T,this.updater=mt||y}M.prototype.isReactComponent={},M.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=M.prototype;function L(N,tt,mt){this.props=N,this.context=tt,this.refs=T,this.updater=mt||y}var R=L.prototype=new x;R.constructor=L,S(R,M.prototype),R.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function z(N,tt,mt,xt,wt,nt){return mt=nt.ref,{$$typeof:o,type:N,key:tt,ref:mt!==void 0?mt:null,props:nt}}function G(N,tt){return z(N.type,tt,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function D(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(mt){return tt[mt]})}var I=/\/+/g;function Z(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):tt.toString(36)}function it(){}function lt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(it,it):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ut(N,tt,mt,xt,wt){var nt=typeof N;(nt==="undefined"||nt==="boolean")&&(N=null);var dt=!1;if(N===null)dt=!0;else switch(nt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(N.$$typeof){case o:case t:dt=!0;break;case v:return dt=N._init,ut(dt(N._payload),tt,mt,xt,wt)}}if(dt)return wt=wt(N),dt=xt===""?"."+Z(N,0):xt,w(wt)?(mt="",dt!=null&&(mt=dt.replace(I,"$&/")+"/"),ut(wt,tt,mt,"",function(Yt){return Yt})):wt!=null&&(U(wt)&&(wt=G(wt,mt+(wt.key==null||N&&N.key===wt.key?"":(""+wt.key).replace(I,"$&/")+"/")+dt)),tt.push(wt)),1;dt=0;var St=xt===""?".":xt+":";if(w(N))for(var Dt=0;Dt<N.length;Dt++)xt=N[Dt],nt=St+Z(xt,Dt),dt+=ut(xt,tt,mt,nt,wt);else if(Dt=_(N),typeof Dt=="function")for(N=Dt.call(N),Dt=0;!(xt=N.next()).done;)xt=xt.value,nt=St+Z(xt,Dt++),dt+=ut(xt,tt,mt,nt,wt);else if(nt==="object"){if(typeof N.then=="function")return ut(lt(N),tt,mt,xt,wt);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return dt}function F(N,tt,mt){if(N==null)return N;var xt=[],wt=0;return ut(N,xt,"","",function(nt){return tt.call(mt,nt,wt++)}),xt}function Q(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=mt)},function(mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=mt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function yt(){}return ue.Children={map:F,forEach:function(N,tt,mt){F(N,function(){tt.apply(this,arguments)},mt)},count:function(N){var tt=0;return F(N,function(){tt++}),tt},toArray:function(N){return F(N,function(tt){return tt})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ue.Component=M,ue.Fragment=e,ue.Profiler=r,ue.PureComponent=L,ue.StrictMode=a,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cloneElement=function(N,tt,mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var xt=S({},N.props),wt=N.key,nt=void 0;if(tt!=null)for(dt in tt.ref!==void 0&&(nt=void 0),tt.key!==void 0&&(wt=""+tt.key),tt)!B.call(tt,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&tt.ref===void 0||(xt[dt]=tt[dt]);var dt=arguments.length-2;if(dt===1)xt.children=mt;else if(1<dt){for(var St=Array(dt),Dt=0;Dt<dt;Dt++)St[Dt]=arguments[Dt+2];xt.children=St}return z(N.type,wt,void 0,void 0,nt,xt)},ue.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},ue.createElement=function(N,tt,mt){var xt,wt={},nt=null;if(tt!=null)for(xt in tt.key!==void 0&&(nt=""+tt.key),tt)B.call(tt,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(wt[xt]=tt[xt]);var dt=arguments.length-2;if(dt===1)wt.children=mt;else if(1<dt){for(var St=Array(dt),Dt=0;Dt<dt;Dt++)St[Dt]=arguments[Dt+2];wt.children=St}if(N&&N.defaultProps)for(xt in dt=N.defaultProps,dt)wt[xt]===void 0&&(wt[xt]=dt[xt]);return z(N,nt,void 0,void 0,null,wt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:f,render:N}},ue.isValidElement=U,ue.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:Q}},ue.memo=function(N,tt){return{$$typeof:d,type:N,compare:tt===void 0?null:tt}},ue.startTransition=function(N){var tt=O.T,mt={};O.T=mt;try{var xt=N(),wt=O.S;wt!==null&&wt(mt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(yt,Y)}catch(nt){Y(nt)}finally{O.T=tt}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(N){return O.H.use(N)},ue.useActionState=function(N,tt,mt){return O.H.useActionState(N,tt,mt)},ue.useCallback=function(N,tt){return O.H.useCallback(N,tt)},ue.useContext=function(N){return O.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,tt){return O.H.useDeferredValue(N,tt)},ue.useEffect=function(N,tt,mt){var xt=O.H;if(typeof mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(N,tt)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(N,tt,mt){return O.H.useImperativeHandle(N,tt,mt)},ue.useInsertionEffect=function(N,tt){return O.H.useInsertionEffect(N,tt)},ue.useLayoutEffect=function(N,tt){return O.H.useLayoutEffect(N,tt)},ue.useMemo=function(N,tt){return O.H.useMemo(N,tt)},ue.useOptimistic=function(N,tt){return O.H.useOptimistic(N,tt)},ue.useReducer=function(N,tt,mt){return O.H.useReducer(N,tt,mt)},ue.useRef=function(N){return O.H.useRef(N)},ue.useState=function(N){return O.H.useState(N)},ue.useSyncExternalStore=function(N,tt,mt){return O.H.useSyncExternalStore(N,tt,mt)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.1.1",ue}var t_;function np(){return t_||(t_=1,Sh.exports=MS()),Sh.exports}var fe=np(),Mh={exports:{}},Xo={},Eh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function ES(){return e_||(e_=1,function(o){function t(F,Q){var Y=F.length;F.push(Q);t:for(;0<Y;){var yt=Y-1>>>1,N=F[yt];if(0<r(N,Q))F[yt]=Q,F[Y]=N,Y=yt;else break t}}function e(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var Q=F[0],Y=F.pop();if(Y!==Q){F[0]=Y;t:for(var yt=0,N=F.length,tt=N>>>1;yt<tt;){var mt=2*(yt+1)-1,xt=F[mt],wt=mt+1,nt=F[wt];if(0>r(xt,Y))wt<N&&0>r(nt,xt)?(F[yt]=nt,F[wt]=Y,yt=wt):(F[yt]=xt,F[mt]=Y,yt=mt);else if(wt<N&&0>r(nt,Y))F[yt]=nt,F[wt]=Y,yt=wt;else break t}}return Q}function r(F,Q){var Y=F.sortIndex-Q.sortIndex;return Y!==0?Y:F.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var p=[],d=[],v=1,g=null,_=3,y=!1,S=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var Q=e(d);Q!==null;){if(Q.callback===null)a(d);else if(Q.startTime<=F)a(d),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=e(d)}}function O(F){if(T=!1,w(F),!S)if(e(p)!==null)S=!0,B||(B=!0,Z());else{var Q=e(d);Q!==null&&ut(O,Q.startTime-F)}}var B=!1,z=-1,G=5,U=-1;function D(){return M?!0:!(o.unstable_now()-U<G)}function I(){if(M=!1,B){var F=o.unstable_now();U=F;var Q=!0;try{t:{S=!1,T&&(T=!1,L(z),z=-1),y=!0;var Y=_;try{e:{for(w(F),g=e(p);g!==null&&!(g.expirationTime>F&&D());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,_=g.priorityLevel;var N=yt(g.expirationTime<=F);if(F=o.unstable_now(),typeof N=="function"){g.callback=N,w(F),Q=!0;break e}g===e(p)&&a(p),w(F)}else a(p);g=e(p)}if(g!==null)Q=!0;else{var tt=e(d);tt!==null&&ut(O,tt.startTime-F),Q=!1}}break t}finally{g=null,_=Y,y=!1}Q=void 0}}finally{Q?Z():B=!1}}}var Z;if(typeof R=="function")Z=function(){R(I)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=I,Z=function(){lt.postMessage(null)}}else Z=function(){x(I,0)};function ut(F,Q){z=x(function(){F(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(F){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var Y=_;_=Q;try{return F()}finally{_=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Y=_;_=F;try{return Q()}finally{_=Y}},o.unstable_scheduleCallback=function(F,Q,Y){var yt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?yt+Y:yt):Y=yt,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,F={id:v++,callback:Q,priorityLevel:F,startTime:Y,expirationTime:N,sortIndex:-1},Y>yt?(F.sortIndex=Y,t(d,F),e(p)===null&&F===e(d)&&(T?(L(z),z=-1):T=!0,ut(O,Y-yt))):(F.sortIndex=N,t(p,F),S||y||(S=!0,B||(B=!0,Z()))),F},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(F){var Q=_;return function(){var Y=_;_=Q;try{return F.apply(this,arguments)}finally{_=Y}}}}(Th)),Th}var n_;function TS(){return n_||(n_=1,Eh.exports=ES()),Eh.exports}var bh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function bS(){if(i_)return On;i_=1;var o=np();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var a={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,d,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:p,containerInfo:d,implementation:v}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,On.createPortal=function(p,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,v)},On.flushSync=function(p){var d=u.T,v=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=v,a.d.f()}},On.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},On.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},On.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var v=d.as,g=f(v,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):v==="script"&&a.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},On.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},On.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,g=f(v,d.crossOrigin);a.d.L(p,v,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},On.preloadModule=function(p,d){if(typeof p=="string")if(d){var v=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},On.requestFormReset=function(p){a.d.r(p)},On.unstable_batchedUpdates=function(p,d){return p(d)},On.useFormState=function(p,d,v){return u.H.useFormState(p,d,v)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.1.1",On}var a_;function AS(){if(a_)return bh.exports;a_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),bh.exports=bS(),bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function wS(){if(r_)return Xo;r_=1;var o=TS(),t=np(),e=AS();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function p(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,c=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),n;if(m===c)return f(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==c.return)s=h,c=m;else{for(var E=!1,A=h.child;A;){if(A===s){E=!0,s=h,c=m;break}if(A===c){E=!0,c=h,s=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===s){E=!0,s=m,c=h;break}if(A===c){E=!0,c=m,s=h;break}A=A.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function d(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=d(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),R=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var it=Symbol.for("react.client.reference");function lt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===it?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case O:return"Suspense";case B:return"SuspenseList";case U:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case R:return(n.displayName||"Context")+".Provider";case L:return(n._context.displayName||"Context")+".Consumer";case w:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return i=n.displayName||null,i!==null?i:lt(n.type)||"Memo";case G:i=n._payload,n=n._init;try{return lt(n(i))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},yt=[],N=-1;function tt(n){return{current:n}}function mt(n){0>N||(n.current=yt[N],yt[N]=null,N--)}function xt(n,i){N++,yt[N]=n.current,n.current=i}var wt=tt(null),nt=tt(null),dt=tt(null),St=tt(null);function Dt(n,i){switch(xt(dt,i),xt(nt,n),xt(wt,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?bv(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=bv(i),n=Av(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}mt(wt),xt(wt,n)}function Yt(){mt(wt),mt(nt),mt(dt)}function re(n){n.memoizedState!==null&&xt(St,n);var i=wt.current,s=Av(i,n.type);i!==s&&(xt(nt,n),xt(wt,s))}function Xe(n){nt.current===n&&(mt(wt),mt(nt)),St.current===n&&(mt(St),Fo._currentValue=Y)}var _e=Object.prototype.hasOwnProperty,V=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,Jt=o.unstable_shouldYield,Ae=o.unstable_requestPaint,Ft=o.unstable_now,We=o.unstable_getCurrentPriorityLevel,zt=o.unstable_ImmediatePriority,le=o.unstable_UserBlockingPriority,Je=o.unstable_NormalPriority,$e=o.unstable_LowPriority,P=o.unstable_IdlePriority,b=o.log,et=o.unstable_setDisableYieldValue,ft=null,_t=null;function ct(n){if(typeof b=="function"&&et(n),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ft,n)}catch{}}var Pt=Math.clz32?Math.clz32:qt,At=Math.log,Xt=Math.LN2;function qt(n){return n>>>=0,n===0?32:31-(At(n)/Xt|0)|0}var Mt=256,Lt=4194304;function Kt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function kt(n,i,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var A=c&134217727;return A!==0?(c=A&~m,c!==0?h=Kt(c):(E&=A,E!==0?h=Kt(E):s||(s=A&~n,s!==0&&(h=Kt(s))))):(A=c&~m,A!==0?h=Kt(A):E!==0?h=Kt(E):s||(s=c&~n,s!==0&&(h=Kt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Ct(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function oe(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var n=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),n}function bt(){var n=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),n}function Rt(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function It(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Et(n,i,s,c,h,m){var E=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var A=n.entanglements,H=n.expirationTimes,$=n.hiddenUpdates;for(s=E&~s;0<s;){var ht=31-Pt(s),gt=1<<ht;A[ht]=0,H[ht]=-1;var at=$[ht];if(at!==null)for($[ht]=null,ht=0;ht<at.length;ht++){var rt=at[ht];rt!==null&&(rt.lane&=-536870913)}s&=~gt}c!==0&&vt(n,c,0),m!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~i))}function vt(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-Pt(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function Gt(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var c=31-Pt(s),h=1<<c;h&i|n[c]&i&&(n[c]|=i),s&=~h}}function se(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Oe(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function we(){var n=Q.p;return n!==0?n:(n=window.event,n===void 0?32:Wv(n.type))}function Si(n,i){var s=Q.p;try{return Q.p=n,i()}finally{Q.p=s}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,nn="__reactProps$"+pn,Li="__reactContainer$"+pn,Or="__reactEvents$"+pn,ml="__reactListeners$"+pn,Pr="__reactHandles$"+pn,Zs="__reactResources$"+pn,Ni="__reactMarker$"+pn;function Ir(n){delete n[mn],delete n[nn],delete n[Or],delete n[ml],delete n[Pr]}function qi(n){var i=n[mn];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Li]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=Dv(n);n!==null;){if(s=n[mn])return s;n=Dv(n)}return i}n=s,s=n.parentNode}return null}function va(n){if(n=n[mn]||n[Li]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function tr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function _a(n){var i=n[Zs];return i||(i=n[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function un(n){n[Ni]=!0}var gl=new Set,vl={};function C(n,i){q(n,i),q(n+"Capture",i)}function q(n,i){for(vl[n]=i,n=0;n<i.length;n++)gl.add(i[n])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},K={};function Tt(n){return _e.call(K,n)?!0:_e.call(ot,n)?!1:st.test(n)?K[n]=!0:(ot[n]=!0,!1)}function Ut(n,i,s){if(Tt(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function Bt(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Nt(n,i,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+c)}}var $t,ee;function Wt(n){if($t===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$t=i&&i[1]||"",ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+n+ee}var he=!1;function Ce(n,i){if(!n||he)return"";he=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var at=rt}Reflect.construct(n,[],gt)}else{try{gt.call()}catch(rt){at=rt}n.call(gt.prototype)}}else{try{throw Error()}catch(rt){at=rt}(gt=n())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&at&&typeof rt.stack=="string")return[rt.stack,at.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var H=E.split(`
`),$=A.split(`
`);for(h=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;h<$.length&&!$[h].includes("DetermineComponentFrameRoot");)h++;if(c===H.length||h===$.length)for(c=H.length-1,h=$.length-1;1<=c&&0<=h&&H[c]!==$[h];)h--;for(;1<=c&&0<=h;c--,h--)if(H[c]!==$[h]){if(c!==1||h!==1)do if(c--,h--,0>h||H[c]!==$[h]){var ht=`
`+H[c].replace(" at new "," at ");return n.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",n.displayName)),ht}while(1<=c&&0<=h);break}}}finally{he=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Wt(s):""}function Ke(n){switch(n.tag){case 26:case 27:case 5:return Wt(n.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Ce(n.type,!1);case 11:return Ce(n.type.render,!1);case 1:return Ce(n.type,!0);case 31:return Wt("Activity");default:return""}}function Be(n){try{var i="";do i+=Ke(n),n=n.return;while(n);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function de(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Qt(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ye(n){n._valueTracker||(n._valueTracker=Ye(n))}function Un(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return n&&(c=Qt(n)?n.checked?"true":"false":n.value),n=c,n!==s?(i.setValue(n),!0):!1}function Mi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Fn=/[\n"\\]/g;function xn(n){return n.replace(Fn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ge(n,i,s,c,h,m,E,A){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+de(i)):n.value!==""+de(i)&&(n.value=""+de(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Ln(n,E,de(i)):s!=null?Ln(n,E,de(s)):c!=null&&n.removeAttribute("value"),h==null&&m!=null&&(n.defaultChecked=!!m),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+de(A):n.removeAttribute("name")}function zn(n,i,s,c,h,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+de(s):"",i=i!=null?""+de(i):s,A||i===n.value||(n.value=i),n.defaultValue=i}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=A?n.checked:!!c,n.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Ln(n,i,s){i==="number"&&Mi(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function an(n,i,s,c){if(n=n.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=i.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+de(s),i=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function An(n,i,s){if(i!=null&&(i=""+de(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+de(s):""}function Br(n,i,s,c){if(i==null){if(c!=null){if(s!=null)throw Error(a(92));if(ut(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),i=s}s=de(i),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Xn(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bp(n,i,s){var c=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,s):typeof s!="number"||s===0||vy.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function Ap(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in i)c=i[h],i.hasOwnProperty(h)&&s[h]!==c&&bp(n,h,c)}else for(var m in i)i.hasOwnProperty(m)&&bp(n,m,i[m])}function _u(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _y=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(n){return yy.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var yu=null;function xu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fr=null,zr=null;function wp(n){var i=va(n);if(i&&(n=i.stateNode)){var s=n[nn]||null;t:switch(n=i.stateNode,i.type){case"input":if(Ge(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+xn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==n&&c.form===n.form){var h=c[nn]||null;if(!h)throw Error(a(90));Ge(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)c=s[i],c.form===n.form&&Un(c)}break t;case"textarea":An(n,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&an(n,!!s.multiple,i,!1)}}}var Su=!1;function Rp(n,i,s){if(Su)return n(i,s);Su=!0;try{var c=n(i);return c}finally{if(Su=!1,(Fr!==null||zr!==null)&&(ic(),Fr&&(i=Fr,n=zr,zr=Fr=null,wp(i),n)))for(i=0;i<n.length;i++)wp(n[i])}}function Ks(n,i){var s=n.stateNode;if(s===null)return null;var c=s[nn]||null;if(c===null)return null;s=c[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Yi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Mu=!1}var ya=null,Eu=null,yl=null;function Cp(){if(yl)return yl;var n,i=Eu,s=i.length,c,h="value"in ya?ya.value:ya.textContent,m=h.length;for(n=0;n<s&&i[n]===h[n];n++);var E=s-n;for(c=1;c<=E&&i[s-c]===h[m-c];c++);return yl=h.slice(n,1<c?1-c:void 0)}function xl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Sl(){return!0}function Dp(){return!1}function Wn(n){function i(s,c,h,m,E){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(s=n[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Sl:Dp,this.isPropagationStopped=Dp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Wn(er),Js=v({},er,{view:0,detail:0}),xy=Wn(Js),Tu,bu,$s,El=v({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$s&&($s&&n.type==="mousemove"?(Tu=n.screenX-$s.screenX,bu=n.screenY-$s.screenY):bu=Tu=0,$s=n),Tu)},movementY:function(n){return"movementY"in n?n.movementY:bu}}),Up=Wn(El),Sy=v({},El,{dataTransfer:0}),My=Wn(Sy),Ey=v({},Js,{relatedTarget:0}),Au=Wn(Ey),Ty=v({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),by=Wn(Ty),Ay=v({},er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wy=Wn(Ay),Ry=v({},er,{data:0}),Lp=Wn(Ry),Cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Uy[n])?!!i[n]:!1}function wu(){return Ly}var Ny=v({},Js,{key:function(n){if(n.key){var i=Cy[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(n){return n.type==="keypress"?xl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Oy=Wn(Ny),Py=v({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Wn(Py),Iy=v({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),By=Wn(Iy),Fy=v({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),zy=Wn(Fy),Hy=v({},El,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Wn(Hy),Gy=v({},er,{newState:0,oldState:0}),ky=Wn(Gy),Xy=[9,13,27,32],Ru=Yi&&"CompositionEvent"in window,to=null;Yi&&"documentMode"in document&&(to=document.documentMode);var Wy=Yi&&"TextEvent"in window&&!to,Op=Yi&&(!Ru||to&&8<to&&11>=to),Pp=" ",Ip=!1;function Bp(n,i){switch(n){case"keyup":return Xy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hr=!1;function qy(n,i){switch(n){case"compositionend":return Fp(i);case"keypress":return i.which!==32?null:(Ip=!0,Pp);case"textInput":return n=i.data,n===Pp&&Ip?null:n;default:return null}}function Yy(n,i){if(Hr)return n==="compositionend"||!Ru&&Bp(n,i)?(n=Cp(),yl=Eu=ya=null,Hr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Op&&i.locale!=="ko"?null:i.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!jy[n.type]:i==="textarea"}function Hp(n,i,s,c){Fr?zr?zr.push(c):zr=[c]:Fr=c,i=cc(i,"onChange"),0<i.length&&(s=new Ml("onChange","change",null,s,c),n.push({event:s,listeners:i}))}var eo=null,no=null;function Zy(n){xv(n,0)}function Tl(n){var i=tr(n);if(Un(i))return n}function Vp(n,i){if(n==="change")return i}var Gp=!1;if(Yi){var Cu;if(Yi){var Du="oninput"in document;if(!Du){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Du=typeof kp.oninput=="function"}Cu=Du}else Cu=!1;Gp=Cu&&(!document.documentMode||9<document.documentMode)}function Xp(){eo&&(eo.detachEvent("onpropertychange",Wp),no=eo=null)}function Wp(n){if(n.propertyName==="value"&&Tl(no)){var i=[];Hp(i,no,n,xu(n)),Rp(Zy,i)}}function Ky(n,i,s){n==="focusin"?(Xp(),eo=i,no=s,eo.attachEvent("onpropertychange",Wp)):n==="focusout"&&Xp()}function Qy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(no)}function Jy(n,i){if(n==="click")return Tl(i)}function $y(n,i){if(n==="input"||n==="change")return Tl(i)}function tx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:tx;function io(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!_e.call(i,h)||!Jn(n[h],i[h]))return!1}return!0}function qp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yp(n,i){var s=qp(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=i&&c>=i)return{node:s,offset:i-n};n=c}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=qp(s)}}function jp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?jp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Zp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Mi(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Mi(n.document)}return i}function Uu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var ex=Yi&&"documentMode"in document&&11>=document.documentMode,Vr=null,Lu=null,ao=null,Nu=!1;function Kp(n,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nu||Vr==null||Vr!==Mi(c)||(c=Vr,"selectionStart"in c&&Uu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ao&&io(ao,c)||(ao=c,c=cc(Lu,"onSelect"),0<c.length&&(i=new Ml("onSelect","select",null,i,s),n.push({event:i,listeners:c}),i.target=Vr)))}function nr(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var Gr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Ou={},Qp={};Yi&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ir(n){if(Ou[n])return Ou[n];if(!Gr[n])return n;var i=Gr[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in Qp)return Ou[n]=i[s];return n}var Jp=ir("animationend"),$p=ir("animationiteration"),tm=ir("animationstart"),nx=ir("transitionrun"),ix=ir("transitionstart"),ax=ir("transitioncancel"),em=ir("transitionend"),nm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ei(n,i){nm.set(n,i),C(i,[n])}var im=new WeakMap;function ui(n,i){if(typeof n=="object"&&n!==null){var s=im.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Be(i)},im.set(n,i),i)}return{value:n,source:i,stack:Be(i)}}var fi=[],kr=0,Iu=0;function bl(){for(var n=kr,i=Iu=kr=0;i<n;){var s=fi[i];fi[i++]=null;var c=fi[i];fi[i++]=null;var h=fi[i];fi[i++]=null;var m=fi[i];if(fi[i++]=null,c!==null&&h!==null){var E=c.pending;E===null?h.next=h:(h.next=E.next,E.next=h),c.pending=h}m!==0&&am(s,h,m)}}function Al(n,i,s,c){fi[kr++]=n,fi[kr++]=i,fi[kr++]=s,fi[kr++]=c,Iu|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Bu(n,i,s,c){return Al(n,i,s,c),wl(n)}function Xr(n,i){return Al(n,null,null,i),wl(n)}function am(n,i,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,m=n.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(h=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,h&&i!==null&&(h=31-Pt(s),n=m.hiddenUpdates,c=n[h],c===null?n[h]=[i]:c.push(i),i.lane=s|536870912),m):null}function wl(n){if(50<Do)throw Do=0,Xf=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Wr={};function rx(n,i,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,s,c){return new rx(n,i,s,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ji(n,i){var s=n.alternate;return s===null?(s=$n(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function rm(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Rl(n,i,s,c,h,m){var E=0;if(c=n,typeof n=="function")Fu(n)&&(E=1);else if(typeof n=="string")E=oS(n,s,wt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case U:return n=$n(31,s,i,h),n.elementType=U,n.lanes=m,n;case S:return ar(s.children,h,m,i);case T:E=8,h|=24;break;case M:return n=$n(12,s,i,h|2),n.elementType=M,n.lanes=m,n;case O:return n=$n(13,s,i,h),n.elementType=O,n.lanes=m,n;case B:return n=$n(19,s,i,h),n.elementType=B,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case R:E=10;break t;case L:E=9;break t;case w:E=11;break t;case z:E=14;break t;case G:E=16,c=null;break t}E=29,s=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=$n(E,s,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function ar(n,i,s,c){return n=$n(7,n,c,i),n.lanes=s,n}function zu(n,i,s){return n=$n(6,n,null,i),n.lanes=s,n}function Hu(n,i,s){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var qr=[],Yr=0,Cl=null,Dl=0,hi=[],di=0,rr=null,Zi=1,Ki="";function sr(n,i){qr[Yr++]=Dl,qr[Yr++]=Cl,Cl=n,Dl=i}function sm(n,i,s){hi[di++]=Zi,hi[di++]=Ki,hi[di++]=rr,rr=n;var c=Zi;n=Ki;var h=32-Pt(c)-1;c&=~(1<<h),s+=1;var m=32-Pt(i)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Zi=1<<32-Pt(i)+h|s<<h|c,Ki=m+n}else Zi=1<<m|s<<h|c,Ki=n}function Vu(n){n.return!==null&&(sr(n,1),sm(n,1,0))}function Gu(n){for(;n===Cl;)Cl=qr[--Yr],qr[Yr]=null,Dl=qr[--Yr],qr[Yr]=null;for(;n===rr;)rr=hi[--di],hi[di]=null,Ki=hi[--di],hi[di]=null,Zi=hi[--di],hi[di]=null}var Hn=null,rn=null,Le=!1,or=null,Oi=!1,ku=Error(a(519));function lr(n){var i=Error(a(418,""));throw oo(ui(i,n)),ku}function om(n){var i=n.stateNode,s=n.type,c=n.memoizedProps;switch(i[mn]=n,i[nn]=c,s){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(s=0;s<Lo.length;s++)Se(Lo[s],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Se("invalid",i),zn(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ye(i);break;case"select":Se("invalid",i);break;case"textarea":Se("invalid",i),Br(i,c.value,c.defaultValue,c.children),ye(i)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||c.suppressHydrationWarning===!0||Tv(i.textContent,s)?(c.popover!=null&&(Se("beforetoggle",i),Se("toggle",i)),c.onScroll!=null&&Se("scroll",i),c.onScrollEnd!=null&&Se("scrollend",i),c.onClick!=null&&(i.onclick=uc),i=!0):i=!1,i||lr(n)}function lm(n){for(Hn=n.return;Hn;)switch(Hn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Hn=Hn.return}}function ro(n){if(n!==Hn)return!1;if(!Le)return lm(n),Le=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||sh(n.type,n.memoizedProps)),s=!s),s&&rn&&lr(n),lm(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){rn=bi(n.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;n=n.nextSibling}rn=null}}else i===27?(i=rn,Pa(n.type)?(n=uh,uh=null,rn=n):rn=i):rn=Hn?bi(n.stateNode.nextSibling):null;return!0}function so(){rn=Hn=null,Le=!1}function cm(){var n=or;return n!==null&&(jn===null?jn=n:jn.push.apply(jn,n),or=null),n}function oo(n){or===null?or=[n]:or.push(n)}var Xu=tt(null),cr=null,Qi=null;function xa(n,i,s){xt(Xu,i._currentValue),i._currentValue=s}function Ji(n){n._currentValue=Xu.current,mt(Xu)}function Wu(n,i,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===s)break;n=n.return}}function qu(n,i,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=h;for(var H=0;H<i.length;H++)if(A.context===i[H]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Wu(m.return,s,n),c||(E=null);break t}m=A.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Wu(E,s,n),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===n){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function lo(n,i,s,c){n=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var A=h.type;Jn(h.pendingProps.value,E.value)||(n!==null?n.push(A):n=[A])}}else if(h===St.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Fo):n=[Fo])}h=h.return}n!==null&&qu(i,n,s,c),i.flags|=262144}function Ul(n){for(n=n.firstContext;n!==null;){if(!Jn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ur(n){cr=n,Qi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Nn(n){return um(cr,n)}function Ll(n,i){return cr===null&&ur(n),um(n,i)}function um(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(n===null)throw Error(a(308));Qi=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Qi=Qi.next=i;return s}var sx=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},ox=o.unstable_scheduleCallback,lx=o.unstable_NormalPriority,gn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new sx,data:new Map,refCount:0}}function co(n){n.refCount--,n.refCount===0&&ox(lx,function(){n.controller.abort()})}var uo=null,ju=0,jr=0,Zr=null;function cx(n,i){if(uo===null){var s=uo=[];ju=0,jr=Qf(),Zr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return ju++,i.then(fm,fm),i}function fm(){if(--ju===0&&uo!==null){Zr!==null&&(Zr.status="fulfilled");var n=uo;uo=null,jr=0,Zr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function ux(n,i){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var hm=F.S;F.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&cx(n,i),hm!==null&&hm(n,i)};var fr=tt(null);function Zu(){var n=fr.current;return n!==null?n:qe.pooledCache}function Nl(n,i){i===null?xt(fr,fr.current):xt(fr,i.pool)}function dm(){var n=Zu();return n===null?null:{parent:gn._currentValue,pool:n}}var fo=Error(a(460)),pm=Error(a(474)),Ol=Error(a(542)),Ku={then:function(){}};function mm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Pl(){}function gm(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(Pl,Pl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,_m(n),n;default:if(typeof i.status=="string")i.then(Pl,Pl);else{if(n=qe,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=c}},function(c){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,_m(n),n}throw ho=i,fo}}var ho=null;function vm(){if(ho===null)throw Error(a(459));var n=ho;return ho=null,n}function _m(n){if(n===fo||n===Ol)throw Error(a(483))}var Sa=!1;function Qu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ma(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ea(n,i,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pe&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,i=wl(n),am(n,null,s),i}return Al(n,c,i,s),wl(n)}function po(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,Gt(n,s)}}function $u(n,i){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var tf=!1;function mo(){if(tf){var n=Zr;if(n!==null)throw n}}function go(n,i,s,c){tf=!1;var h=n.updateQueue;Sa=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var H=A,$=H.next;H.next=null,E===null?m=$:E.next=$,E=H;var ht=n.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==E&&(A===null?ht.firstBaseUpdate=$:A.next=$,ht.lastBaseUpdate=H))}if(m!==null){var gt=h.baseState;E=0,ht=$=H=null,A=m;do{var at=A.lane&-536870913,rt=at!==A.lane;if(rt?(be&at)===at:(c&at)===at){at!==0&&at===jr&&(tf=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=n,te=A;at=i;var He=s;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){gt=ie.call(He,gt,at);break t}gt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,at=typeof ie=="function"?ie.call(He,gt,at):ie,at==null)break t;gt=v({},gt,at);break t;case 2:Sa=!0}}at=A.callback,at!==null&&(n.flags|=64,rt&&(n.flags|=8192),rt=h.callbacks,rt===null?h.callbacks=[at]:rt.push(at))}else rt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?($=ht=rt,H=gt):ht=ht.next=rt,E|=at;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,h.lastBaseUpdate=rt,h.shared.pending=null}}while(!0);ht===null&&(H=gt),h.baseState=H,h.firstBaseUpdate=$,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),Ua|=E,n.lanes=E,n.memoizedState=gt}}function ym(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function xm(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)ym(s[n],i)}var Kr=tt(null),Il=tt(0);function Sm(n,i){n=ra,xt(Il,n),xt(Kr,i),ra=n|i.baseLanes}function ef(){xt(Il,ra),xt(Kr,Kr.current)}function nf(){ra=Il.current,mt(Kr),mt(Il)}var Ta=0,ge=null,Fe=null,fn=null,Bl=!1,Qr=!1,hr=!1,Fl=0,vo=0,Jr=null,fx=0;function on(){throw Error(a(321))}function af(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!Jn(n[s],i[s]))return!1;return!0}function rf(n,i,s,c,h,m){return Ta=m,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=n===null||n.memoizedState===null?ag:rg,hr=!1,m=s(c,h),hr=!1,Qr&&(m=Em(i,s,c,h)),Mm(n),m}function Mm(n){F.H=Xl;var i=Fe!==null&&Fe.next!==null;if(Ta=0,fn=Fe=ge=null,Bl=!1,vo=0,Jr=null,i)throw Error(a(300));n===null||Sn||(n=n.dependencies,n!==null&&Ul(n)&&(Sn=!0))}function Em(n,i,s,c){ge=n;var h=0;do{if(Qr&&(Jr=null),vo=0,Qr=!1,25<=h)throw Error(a(301));if(h+=1,fn=Fe=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=_x,m=i(s,c)}while(Qr);return m}function hx(){var n=F.H,i=n.useState()[0];return i=typeof i.then=="function"?_o(i):i,n=n.useState()[0],(Fe!==null?Fe.memoizedState:null)!==n&&(ge.flags|=1024),i}function sf(){var n=Fl!==0;return Fl=0,n}function of(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function lf(n){if(Bl){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Bl=!1}Ta=0,fn=Fe=ge=null,Qr=!1,vo=Fl=0,Jr=null}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ge.memoizedState=fn=n:fn=fn.next=n,fn}function hn(){if(Fe===null){var n=ge.alternate;n=n!==null?n.memoizedState:null}else n=Fe.next;var i=fn===null?ge.memoizedState:fn.next;if(i!==null)fn=i,Fe=n;else{if(n===null)throw ge.alternate===null?Error(a(467)):Error(a(310));Fe=n,n={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},fn===null?ge.memoizedState=fn=n:fn=fn.next=n}return fn}function cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(n){var i=vo;return vo+=1,Jr===null&&(Jr=[]),n=gm(Jr,n,i),i=ge,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?ag:rg),n}function zl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return _o(n);if(n.$$typeof===R)return Nn(n)}throw Error(a(438,String(n)))}function uf(n){var i=null,s=ge.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var c=ge.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=cf(),ge.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),c=0;c<n;c++)s[c]=D;return i.index++,s}function $i(n,i){return typeof i=="function"?i(n):i}function Hl(n){var i=hn();return ff(i,Fe,n)}function ff(n,i,s){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var h=n.baseQueue,m=c.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,c.pending=null}if(m=n.baseState,h===null)n.memoizedState=m;else{i=h.next;var A=E=null,H=null,$=i,ht=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(be&gt)===gt:(Ta&gt)===gt){var at=$.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===jr&&(ht=!0);else if((Ta&at)===at){$=$.next,at===jr&&(ht=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=gt,E=m):H=H.next=gt,ge.lanes|=at,Ua|=at;gt=$.action,hr&&s(m,gt),m=$.hasEagerState?$.eagerState:s(m,gt)}else at={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=at,E=m):H=H.next=at,ge.lanes|=gt,Ua|=gt;$=$.next}while($!==null&&$!==i);if(H===null?E=m:H.next=A,!Jn(m,n.memoizedState)&&(Sn=!0,ht&&(s=Zr,s!==null)))throw s;n.memoizedState=m,n.baseState=E,n.baseQueue=H,c.lastRenderedState=m}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function hf(n){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=n(m,E.action),E=E.next;while(E!==h);Jn(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,c]}function Tm(n,i,s){var c=ge,h=hn(),m=Le;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Jn((Fe||h).memoizedState,s);E&&(h.memoizedState=s,Sn=!0),h=h.queue;var A=wm.bind(null,c,h,n);if(yo(2048,8,A,[n]),h.getSnapshot!==i||E||fn!==null&&fn.memoizedState.tag&1){if(c.flags|=2048,$r(9,Vl(),Am.bind(null,c,h,s,i),null),qe===null)throw Error(a(349));m||(Ta&124)!==0||bm(c,i,s)}return s}function bm(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=ge.updateQueue,i===null?(i=cf(),ge.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Am(n,i,s,c){i.value=s,i.getSnapshot=c,Rm(i)&&Cm(n)}function wm(n,i,s){return s(function(){Rm(i)&&Cm(n)})}function Rm(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!Jn(n,s)}catch{return!0}}function Cm(n){var i=Xr(n,2);i!==null&&ai(i,n,2)}function df(n){var i=qn();if(typeof n=="function"){var s=n;if(n=s(),hr){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:n},i}function Dm(n,i,s,c){return n.baseState=s,ff(n,Fe,typeof c=="function"?c:$i)}function dx(n,i,s,c,h){if(kl(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};F.T!==null?s(!0):m.isTransition=!1,c(m),s=i.pending,s===null?(m.next=i.pending=m,Um(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Um(n,i){var s=i.action,c=i.payload,h=n.state;if(i.isTransition){var m=F.T,E={};F.T=E;try{var A=s(h,c),H=F.S;H!==null&&H(E,A),Lm(n,i,A)}catch($){pf(n,i,$)}finally{F.T=m}}else try{m=s(h,c),Lm(n,i,m)}catch($){pf(n,i,$)}}function Lm(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Nm(n,i,c)},function(c){return pf(n,i,c)}):Nm(n,i,s)}function Nm(n,i,s){i.status="fulfilled",i.value=s,Om(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,Um(n,s)))}function pf(n,i,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=s,Om(i),i=i.next;while(i!==c)}n.action=null}function Om(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Pm(n,i){return i}function Im(n,i){if(Le){var s=qe.formState;if(s!==null){t:{var c=ge;if(Le){if(rn){e:{for(var h=rn,m=Oi;h.nodeType!==8;){if(!m){h=null;break e}if(h=bi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){rn=bi(h.nextSibling),c=h.data==="F!";break t}}lr(c)}c=!1}c&&(i=s[0])}}return s=qn(),s.memoizedState=s.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:i},s.queue=c,s=eg.bind(null,ge,c),c.dispatch=s,c=df(!1),m=yf.bind(null,ge,!1,c.queue),c=qn(),h={state:i,dispatch:null,action:n,pending:null},c.queue=h,s=dx.bind(null,ge,h,m,s),h.dispatch=s,c.memoizedState=n,[i,s,!1]}function Bm(n){var i=hn();return Fm(i,Fe,n)}function Fm(n,i,s){if(i=ff(n,i,Pm)[0],n=Hl($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=_o(i)}catch(E){throw E===fo?Ol:E}else c=i;i=hn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(ge.flags|=2048,$r(9,Vl(),px.bind(null,h,s),null)),[c,m,n]}function px(n,i){n.action=i}function zm(n){var i=hn(),s=Fe;if(s!==null)return Fm(i,s,n);hn(),i=i.memoizedState,s=hn();var c=s.queue.dispatch;return s.memoizedState=n,[i,c,!1]}function $r(n,i,s,c){return n={tag:n,create:s,deps:c,inst:i,next:null},i=ge.updateQueue,i===null&&(i=cf(),ge.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,i.lastEffect=n),n}function Vl(){return{destroy:void 0,resource:void 0}}function Hm(){return hn().memoizedState}function Gl(n,i,s,c){var h=qn();c=c===void 0?null:c,ge.flags|=n,h.memoizedState=$r(1|i,Vl(),s,c)}function yo(n,i,s,c){var h=hn();c=c===void 0?null:c;var m=h.memoizedState.inst;Fe!==null&&c!==null&&af(c,Fe.memoizedState.deps)?h.memoizedState=$r(i,m,s,c):(ge.flags|=n,h.memoizedState=$r(1|i,m,s,c))}function Vm(n,i){Gl(8390656,8,n,i)}function Gm(n,i){yo(2048,8,n,i)}function km(n,i){return yo(4,2,n,i)}function Xm(n,i){return yo(4,4,n,i)}function Wm(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qm(n,i,s){s=s!=null?s.concat([n]):null,yo(4,4,Wm.bind(null,i,n),s)}function mf(){}function Ym(n,i){var s=hn();i=i===void 0?null:i;var c=s.memoizedState;return i!==null&&af(i,c[1])?c[0]:(s.memoizedState=[n,i],n)}function jm(n,i){var s=hn();i=i===void 0?null:i;var c=s.memoizedState;if(i!==null&&af(i,c[1]))return c[0];if(c=n(),hr){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[c,i],c}function gf(n,i,s){return s===void 0||(Ta&1073741824)!==0?n.memoizedState=i:(n.memoizedState=s,n=Qg(),ge.lanes|=n,Ua|=n,s)}function Zm(n,i,s,c){return Jn(s,i)?s:Kr.current!==null?(n=gf(n,s,c),Jn(n,i)||(Sn=!0),n):(Ta&42)===0?(Sn=!0,n.memoizedState=s):(n=Qg(),ge.lanes|=n,Ua|=n,i)}function Km(n,i,s,c,h){var m=Q.p;Q.p=m!==0&&8>m?m:8;var E=F.T,A={};F.T=A,yf(n,!1,i,s);try{var H=h(),$=F.S;if($!==null&&$(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ht=ux(H,c);xo(n,i,ht,ii(n))}else xo(n,i,c,ii(n))}catch(gt){xo(n,i,{then:function(){},status:"rejected",reason:gt},ii())}finally{Q.p=m,F.T=E}}function mx(){}function vf(n,i,s,c){if(n.tag!==5)throw Error(a(476));var h=Qm(n).queue;Km(n,h,i,Y,s===null?mx:function(){return Jm(n),s(c)})}function Qm(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Jm(n){var i=Qm(n).next.queue;xo(n,i,{},ii())}function _f(){return Nn(Fo)}function $m(){return hn().memoizedState}function tg(){return hn().memoizedState}function gx(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=ii();n=Ma(s);var c=Ea(i,n,s);c!==null&&(ai(c,i,s),po(c,i,s)),i={cache:Yu()},n.payload=i;return}i=i.return}}function vx(n,i,s){var c=ii();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},kl(n)?ng(i,s):(s=Bu(n,i,s,c),s!==null&&(ai(s,n,c),ig(s,i,c)))}function eg(n,i,s){var c=ii();xo(n,i,s,c)}function xo(n,i,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(kl(n))ng(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,A=m(E,s);if(h.hasEagerState=!0,h.eagerState=A,Jn(A,E))return Al(n,i,h,0),qe===null&&bl(),!1}catch{}finally{}if(s=Bu(n,i,h,c),s!==null)return ai(s,n,c),ig(s,i,c),!0}return!1}function yf(n,i,s,c){if(c={lane:2,revertLane:Qf(),action:c,hasEagerState:!1,eagerState:null,next:null},kl(n)){if(i)throw Error(a(479))}else i=Bu(n,s,c,2),i!==null&&ai(i,n,2)}function kl(n){var i=n.alternate;return n===ge||i!==null&&i===ge}function ng(n,i){Qr=Bl=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function ig(n,i,s){if((s&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,Gt(n,s)}}var Xl={readContext:Nn,use:zl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},ag={readContext:Nn,use:zl,useCallback:function(n,i){return qn().memoizedState=[n,i===void 0?null:i],n},useContext:Nn,useEffect:Vm,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,Gl(4194308,4,Wm.bind(null,i,n),s)},useLayoutEffect:function(n,i){return Gl(4194308,4,n,i)},useInsertionEffect:function(n,i){Gl(4,2,n,i)},useMemo:function(n,i){var s=qn();i=i===void 0?null:i;var c=n();if(hr){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[c,i],c},useReducer:function(n,i,s){var c=qn();if(s!==void 0){var h=s(i);if(hr){ct(!0);try{s(i)}finally{ct(!1)}}}else h=i;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=vx.bind(null,ge,n),[c.memoizedState,n]},useRef:function(n){var i=qn();return n={current:n},i.memoizedState=n},useState:function(n){n=df(n);var i=n.queue,s=eg.bind(null,ge,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:mf,useDeferredValue:function(n,i){var s=qn();return gf(s,n,i)},useTransition:function(){var n=df(!1);return n=Km.bind(null,ge,n.queue,!0,!1),qn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var c=ge,h=qn();if(Le){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(be&124)!==0||bm(c,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,Vm(wm.bind(null,c,m,n),[n]),c.flags|=2048,$r(9,Vl(),Am.bind(null,c,m,s,i),null),s},useId:function(){var n=qn(),i=qe.identifierPrefix;if(Le){var s=Ki,c=Zi;s=(c&~(1<<32-Pt(c)-1)).toString(32)+s,i="«"+i+"R"+s,s=Fl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=fx++,i="«"+i+"r"+s.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:_f,useFormState:Im,useActionState:Im,useOptimistic:function(n){var i=qn();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=yf.bind(null,ge,!0,s),s.dispatch=i,[n,i]},useMemoCache:uf,useCacheRefresh:function(){return qn().memoizedState=gx.bind(null,ge)}},rg={readContext:Nn,use:zl,useCallback:Ym,useContext:Nn,useEffect:Gm,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:jm,useReducer:Hl,useRef:Hm,useState:function(){return Hl($i)},useDebugValue:mf,useDeferredValue:function(n,i){var s=hn();return Zm(s,Fe.memoizedState,n,i)},useTransition:function(){var n=Hl($i)[0],i=hn().memoizedState;return[typeof n=="boolean"?n:_o(n),i]},useSyncExternalStore:Tm,useId:$m,useHostTransitionStatus:_f,useFormState:Bm,useActionState:Bm,useOptimistic:function(n,i){var s=hn();return Dm(s,Fe,n,i)},useMemoCache:uf,useCacheRefresh:tg},_x={readContext:Nn,use:zl,useCallback:Ym,useContext:Nn,useEffect:Gm,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:jm,useReducer:hf,useRef:Hm,useState:function(){return hf($i)},useDebugValue:mf,useDeferredValue:function(n,i){var s=hn();return Fe===null?gf(s,n,i):Zm(s,Fe.memoizedState,n,i)},useTransition:function(){var n=hf($i)[0],i=hn().memoizedState;return[typeof n=="boolean"?n:_o(n),i]},useSyncExternalStore:Tm,useId:$m,useHostTransitionStatus:_f,useFormState:zm,useActionState:zm,useOptimistic:function(n,i){var s=hn();return Fe!==null?Dm(s,Fe,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:uf,useCacheRefresh:tg},ts=null,So=0;function Wl(n){var i=So;return So+=1,ts===null&&(ts=[]),gm(ts,n,i)}function Mo(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ql(n,i){throw i.$$typeof===g?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function sg(n){var i=n._init;return i(n._payload)}function og(n){function i(j,k){if(n){var J=j.deletions;J===null?(j.deletions=[k],j.flags|=16):J.push(k)}}function s(j,k){if(!n)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function c(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function h(j,k){return j=ji(j,k),j.index=0,j.sibling=null,j}function m(j,k,J){return j.index=J,n?(J=j.alternate,J!==null?(J=J.index,J<k?(j.flags|=67108866,k):J):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function E(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,J,pt){return k===null||k.tag!==6?(k=zu(J,j.mode,pt),k.return=j,k):(k=h(k,J),k.return=j,k)}function H(j,k,J,pt){var Ht=J.type;return Ht===S?ht(j,k,J.props.children,pt,J.key):k!==null&&(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&sg(Ht)===k.type)?(k=h(k,J.props),Mo(k,J),k.return=j,k):(k=Rl(J.type,J.key,J.props,null,j.mode,pt),Mo(k,J),k.return=j,k)}function $(j,k,J,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Hu(J,j.mode,pt),k.return=j,k):(k=h(k,J.children||[]),k.return=j,k)}function ht(j,k,J,pt,Ht){return k===null||k.tag!==7?(k=ar(J,j.mode,pt,Ht),k.return=j,k):(k=h(k,J),k.return=j,k)}function gt(j,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=zu(""+k,j.mode,J),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return J=Rl(k.type,k.key,k.props,null,j.mode,J),Mo(J,k),J.return=j,J;case y:return k=Hu(k,j.mode,J),k.return=j,k;case G:var pt=k._init;return k=pt(k._payload),gt(j,k,J)}if(ut(k)||Z(k))return k=ar(k,j.mode,J,null),k.return=j,k;if(typeof k.then=="function")return gt(j,Wl(k),J);if(k.$$typeof===R)return gt(j,Ll(j,k),J);ql(j,k)}return null}function at(j,k,J,pt){var Ht=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:A(j,k,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Ht?H(j,k,J,pt):null;case y:return J.key===Ht?$(j,k,J,pt):null;case G:return Ht=J._init,J=Ht(J._payload),at(j,k,J,pt)}if(ut(J)||Z(J))return Ht!==null?null:ht(j,k,J,pt,null);if(typeof J.then=="function")return at(j,k,Wl(J),pt);if(J.$$typeof===R)return at(j,k,Ll(j,J),pt);ql(j,J)}return null}function rt(j,k,J,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,A(k,j,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case _:return j=j.get(pt.key===null?J:pt.key)||null,H(k,j,pt,Ht);case y:return j=j.get(pt.key===null?J:pt.key)||null,$(k,j,pt,Ht);case G:var ve=pt._init;return pt=ve(pt._payload),rt(j,k,J,pt,Ht)}if(ut(pt)||Z(pt))return j=j.get(J)||null,ht(k,j,pt,Ht,null);if(typeof pt.then=="function")return rt(j,k,J,Wl(pt),Ht);if(pt.$$typeof===R)return rt(j,k,J,Ll(k,pt),Ht);ql(k,pt)}return null}function ie(j,k,J,pt){for(var Ht=null,ve=null,jt=k,ne=k=0,En=null;jt!==null&&ne<J.length;ne++){jt.index>ne?(En=jt,jt=null):En=jt.sibling;var De=at(j,jt,J[ne],pt);if(De===null){jt===null&&(jt=En);break}n&&jt&&De.alternate===null&&i(j,jt),k=m(De,k,ne),ve===null?Ht=De:ve.sibling=De,ve=De,jt=En}if(ne===J.length)return s(j,jt),Le&&sr(j,ne),Ht;if(jt===null){for(;ne<J.length;ne++)jt=gt(j,J[ne],pt),jt!==null&&(k=m(jt,k,ne),ve===null?Ht=jt:ve.sibling=jt,ve=jt);return Le&&sr(j,ne),Ht}for(jt=c(jt);ne<J.length;ne++)En=rt(jt,j,ne,J[ne],pt),En!==null&&(n&&En.alternate!==null&&jt.delete(En.key===null?ne:En.key),k=m(En,k,ne),ve===null?Ht=En:ve.sibling=En,ve=En);return n&&jt.forEach(function(Ha){return i(j,Ha)}),Le&&sr(j,ne),Ht}function te(j,k,J,pt){if(J==null)throw Error(a(151));for(var Ht=null,ve=null,jt=k,ne=k=0,En=null,De=J.next();jt!==null&&!De.done;ne++,De=J.next()){jt.index>ne?(En=jt,jt=null):En=jt.sibling;var Ha=at(j,jt,De.value,pt);if(Ha===null){jt===null&&(jt=En);break}n&&jt&&Ha.alternate===null&&i(j,jt),k=m(Ha,k,ne),ve===null?Ht=Ha:ve.sibling=Ha,ve=Ha,jt=En}if(De.done)return s(j,jt),Le&&sr(j,ne),Ht;if(jt===null){for(;!De.done;ne++,De=J.next())De=gt(j,De.value,pt),De!==null&&(k=m(De,k,ne),ve===null?Ht=De:ve.sibling=De,ve=De);return Le&&sr(j,ne),Ht}for(jt=c(jt);!De.done;ne++,De=J.next())De=rt(jt,j,ne,De.value,pt),De!==null&&(n&&De.alternate!==null&&jt.delete(De.key===null?ne:De.key),k=m(De,k,ne),ve===null?Ht=De:ve.sibling=De,ve=De);return n&&jt.forEach(function(yS){return i(j,yS)}),Le&&sr(j,ne),Ht}function He(j,k,J,pt){if(typeof J=="object"&&J!==null&&J.type===S&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:t:{for(var Ht=J.key;k!==null;){if(k.key===Ht){if(Ht=J.type,Ht===S){if(k.tag===7){s(j,k.sibling),pt=h(k,J.props.children),pt.return=j,j=pt;break t}}else if(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===G&&sg(Ht)===k.type){s(j,k.sibling),pt=h(k,J.props),Mo(pt,J),pt.return=j,j=pt;break t}s(j,k);break}else i(j,k);k=k.sibling}J.type===S?(pt=ar(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=Rl(J.type,J.key,J.props,null,j.mode,pt),Mo(pt,J),pt.return=j,j=pt)}return E(j);case y:t:{for(Ht=J.key;k!==null;){if(k.key===Ht)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){s(j,k.sibling),pt=h(k,J.children||[]),pt.return=j,j=pt;break t}else{s(j,k);break}else i(j,k);k=k.sibling}pt=Hu(J,j.mode,pt),pt.return=j,j=pt}return E(j);case G:return Ht=J._init,J=Ht(J._payload),He(j,k,J,pt)}if(ut(J))return ie(j,k,J,pt);if(Z(J)){if(Ht=Z(J),typeof Ht!="function")throw Error(a(150));return J=Ht.call(J),te(j,k,J,pt)}if(typeof J.then=="function")return He(j,k,Wl(J),pt);if(J.$$typeof===R)return He(j,k,Ll(j,J),pt);ql(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(s(j,k.sibling),pt=h(k,J),pt.return=j,j=pt):(s(j,k),pt=zu(J,j.mode,pt),pt.return=j,j=pt),E(j)):s(j,k)}return function(j,k,J,pt){try{So=0;var Ht=He(j,k,J,pt);return ts=null,Ht}catch(jt){if(jt===fo||jt===Ol)throw jt;var ve=$n(29,jt,null,j.mode);return ve.lanes=pt,ve.return=j,ve}finally{}}}var es=og(!0),lg=og(!1),pi=tt(null),Pi=null;function ba(n){var i=n.alternate;xt(vn,vn.current&1),xt(pi,n),Pi===null&&(i===null||Kr.current!==null||i.memoizedState!==null)&&(Pi=n)}function cg(n){if(n.tag===22){if(xt(vn,vn.current),xt(pi,n),Pi===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Pi=n)}}else Aa()}function Aa(){xt(vn,vn.current),xt(pi,pi.current)}function ta(n){mt(pi),Pi===n&&(Pi=null),mt(vn)}var vn=tt(0);function Yl(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ch(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function xf(n,i,s,c){i=n.memoizedState,s=s(c,i),s=s==null?i:v({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Sf={enqueueSetState:function(n,i,s){n=n._reactInternals;var c=ii(),h=Ma(c);h.payload=i,s!=null&&(h.callback=s),i=Ea(n,h,c),i!==null&&(ai(i,n,c),po(i,n,c))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var c=ii(),h=Ma(c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Ea(n,h,c),i!==null&&(ai(i,n,c),po(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=ii(),c=Ma(s);c.tag=2,i!=null&&(c.callback=i),i=Ea(n,c,s),i!==null&&(ai(i,n,s),po(i,n,s))}};function ug(n,i,s,c,h,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!io(s,c)||!io(h,m):!0}function fg(n,i,s,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==n&&Sf.enqueueReplaceState(i,i.state,null)}function dr(n,i){var s=i;if("ref"in i){s={};for(var c in i)c!=="ref"&&(s[c]=i[c])}if(n=n.defaultProps){s===i&&(s=v({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var jl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function hg(n){jl(n)}function dg(n){console.error(n)}function pg(n){jl(n)}function Zl(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function mg(n,i,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Mf(n,i,s){return s=Ma(s),s.tag=3,s.payload={element:null},s.callback=function(){Zl(n,i)},s}function gg(n){return n=Ma(n),n.tag=3,n}function vg(n,i,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;n.payload=function(){return h(m)},n.callback=function(){mg(i,s,c)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){mg(i,s,c),typeof h!="function"&&(La===null?La=new Set([this]):La.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function yx(n,i,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=s.alternate,i!==null&&lo(i,s,h,!0),s=pi.current,s!==null){switch(s.tag){case 13:return Pi===null?qf():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===Ku?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([c]):i.add(c),jf(n,c,h)),!1;case 22:return s.flags|=65536,c===Ku?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([c]):s.add(c)),jf(n,c,h)),!1}throw Error(a(435,s.tag))}return jf(n,c,h),qf(),!1}if(Le)return i=pi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,c!==ku&&(n=Error(a(422),{cause:c}),oo(ui(n,s)))):(c!==ku&&(i=Error(a(423),{cause:c}),oo(ui(i,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=ui(c,s),h=Mf(n.stateNode,c,h),$u(n,h),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:c});if(m=ui(m,s),Co===null?Co=[m]:Co.push(m),sn!==4&&(sn=2),i===null)return!0;c=ui(c,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Mf(s.stateNode,c,n),$u(s,n),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(La===null||!La.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=gg(h),vg(h,n,s,c),$u(s,h),!1}s=s.return}while(s!==null);return!1}var _g=Error(a(461)),Sn=!1;function wn(n,i,s,c){i.child=n===null?lg(i,null,s,c):es(i,n.child,s,c)}function yg(n,i,s,c,h){s=s.render;var m=i.ref;if("ref"in c){var E={};for(var A in c)A!=="ref"&&(E[A]=c[A])}else E=c;return ur(i),c=rf(n,i,s,E,m,h),A=sf(),n!==null&&!Sn?(of(n,i,h),ea(n,i,h)):(Le&&A&&Vu(i),i.flags|=1,wn(n,i,c,h),i.child)}function xg(n,i,s,c,h){if(n===null){var m=s.type;return typeof m=="function"&&!Fu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Sg(n,i,m,c,h)):(n=Rl(s.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!Df(n,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:io,s(E,c)&&n.ref===i.ref)return ea(n,i,h)}return i.flags|=1,n=ji(m,c),n.ref=i.ref,n.return=i,i.child=n}function Sg(n,i,s,c,h){if(n!==null){var m=n.memoizedProps;if(io(m,c)&&n.ref===i.ref)if(Sn=!1,i.pendingProps=c=m,Df(n,h))(n.flags&131072)!==0&&(Sn=!0);else return i.lanes=n.lanes,ea(n,i,h)}return Ef(n,i,s,c,h)}function Mg(n,i,s){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((i.flags&128)!==0){if(c=m!==null?m.baseLanes|s:s,n!==null){for(h=i.child=n.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;i.childLanes=m&~c}else i.childLanes=0,i.child=null;return Eg(n,i,c,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Nl(i,m!==null?m.cachePool:null),m!==null?Sm(i,m):ef(),cg(i);else return i.lanes=i.childLanes=536870912,Eg(n,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Nl(i,m.cachePool),Sm(i,m),Aa(),i.memoizedState=null):(n!==null&&Nl(i,null),ef(),Aa());return wn(n,i,h,s),i.child}function Eg(n,i,s,c){var h=Zu();return h=h===null?null:{parent:gn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},n!==null&&Nl(i,null),ef(),cg(i),n!==null&&lo(n,i,c,!0),null}function Kl(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function Ef(n,i,s,c,h){return ur(i),s=rf(n,i,s,c,void 0,h),c=sf(),n!==null&&!Sn?(of(n,i,h),ea(n,i,h)):(Le&&c&&Vu(i),i.flags|=1,wn(n,i,s,h),i.child)}function Tg(n,i,s,c,h,m){return ur(i),i.updateQueue=null,s=Em(i,c,s,h),Mm(n),c=sf(),n!==null&&!Sn?(of(n,i,m),ea(n,i,m)):(Le&&c&&Vu(i),i.flags|=1,wn(n,i,s,m),i.child)}function bg(n,i,s,c,h){if(ur(i),i.stateNode===null){var m=Wr,E=s.contextType;typeof E=="object"&&E!==null&&(m=Nn(E)),m=new s(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Sf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},Qu(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Nn(E):Wr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(xf(i,s,E,c),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Sf.enqueueReplaceState(m,m.state,null),go(i,c,m,h),mo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var A=i.memoizedProps,H=dr(s,A);m.props=H;var $=m.context,ht=s.contextType;E=Wr,typeof ht=="object"&&ht!==null&&(E=Nn(ht));var gt=s.getDerivedStateFromProps;ht=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||$!==E)&&fg(i,m,c,E),Sa=!1;var at=i.memoizedState;m.state=at,go(i,c,m,h),mo(),$=i.memoizedState,A||at!==$||Sa?(typeof gt=="function"&&(xf(i,s,gt,c),$=i.memoizedState),(H=Sa||ug(i,s,H,c,at,$,E))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=$),m.props=c,m.state=$,m.context=E,c=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,Ju(n,i),E=i.memoizedProps,ht=dr(s,E),m.props=ht,gt=i.pendingProps,at=m.context,$=s.contextType,H=Wr,typeof $=="object"&&$!==null&&(H=Nn($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==gt||at!==H)&&fg(i,m,c,H),Sa=!1,at=i.memoizedState,m.state=at,go(i,c,m,h),mo();var rt=i.memoizedState;E!==gt||at!==rt||Sa||n!==null&&n.dependencies!==null&&Ul(n.dependencies)?(typeof A=="function"&&(xf(i,s,A,c),rt=i.memoizedState),(ht=Sa||ug(i,s,ht,c,at,rt,H)||n!==null&&n.dependencies!==null&&Ul(n.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,rt,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,rt,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=rt),m.props=c,m.state=rt,m.context=H,c=ht):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,Kl(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=es(i,n.child,null,h),i.child=es(i,null,s,h)):wn(n,i,s,h),i.memoizedState=m.state,n=i.child):n=ea(n,i,h),n}function Ag(n,i,s,c){return so(),i.flags|=256,wn(n,i,s,c),i.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(n){return{baseLanes:n,cachePool:dm()}}function Af(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=mi),n}function wg(n,i,s){var c=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(vn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(Le){if(h?ba(i):Aa(),Le){var A=rn,H;if(H=A){t:{for(H=A,A=Oi;H.nodeType!==8;){if(!A){A=null;break t}if(H=bi(H.nextSibling),H===null){A=null;break t}}A=H}A!==null?(i.memoizedState={dehydrated:A,treeContext:rr!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},H=$n(18,null,null,0),H.stateNode=A,H.return=i,i.child=H,Hn=i,rn=null,H=!0):H=!1}H||lr(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return ch(A)?i.lanes=32:i.lanes=536870912,null;ta(i)}return A=c.children,c=c.fallback,h?(Aa(),h=i.mode,A=Ql({mode:"hidden",children:A},h),c=ar(c,h,s,null),A.return=i,c.return=i,A.sibling=c,i.child=A,h=i.child,h.memoizedState=bf(s),h.childLanes=Af(n,E,s),i.memoizedState=Tf,c):(ba(i),wf(i,A))}if(H=n.memoizedState,H!==null&&(A=H.dehydrated,A!==null)){if(m)i.flags&256?(ba(i),i.flags&=-257,i=Rf(n,i,s)):i.memoizedState!==null?(Aa(),i.child=n.child,i.flags|=128,i=null):(Aa(),h=c.fallback,A=i.mode,c=Ql({mode:"visible",children:c.children},A),h=ar(h,A,s,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,es(i,n.child,null,s),c=i.child,c.memoizedState=bf(s),c.childLanes=Af(n,E,s),i.memoizedState=Tf,i=h);else if(ba(i),ch(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var $=E.dgst;E=$,c=Error(a(419)),c.stack="",c.digest=E,oo({value:c,source:null,stack:null}),i=Rf(n,i,s)}else if(Sn||lo(n,i,s,!1),E=(s&n.childLanes)!==0,Sn||E){if(E=qe,E!==null&&(c=s&-s,c=(c&42)!==0?1:se(c),c=(c&(E.suspendedLanes|s))!==0?0:c,c!==0&&c!==H.retryLane))throw H.retryLane=c,Xr(n,c),ai(E,n,c),_g;A.data==="$?"||qf(),i=Rf(n,i,s)}else A.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=H.treeContext,rn=bi(A.nextSibling),Hn=i,Le=!0,or=null,Oi=!1,n!==null&&(hi[di++]=Zi,hi[di++]=Ki,hi[di++]=rr,Zi=n.id,Ki=n.overflow,rr=i),i=wf(i,c.children),i.flags|=4096);return i}return h?(Aa(),h=c.fallback,A=i.mode,H=n.child,$=H.sibling,c=ji(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,$!==null?h=ji($,h):(h=ar(h,A,s,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,A=n.child.memoizedState,A===null?A=bf(s):(H=A.cachePool,H!==null?($=gn._currentValue,H=H.parent!==$?{parent:$,pool:$}:H):H=dm(),A={baseLanes:A.baseLanes|s,cachePool:H}),h.memoizedState=A,h.childLanes=Af(n,E,s),i.memoizedState=Tf,c):(ba(i),s=n.child,n=s.sibling,s=ji(s,{mode:"visible",children:c.children}),s.return=i,s.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=s,i.memoizedState=null,s)}function wf(n,i){return i=Ql({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Ql(n,i){return n=$n(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Rf(n,i,s){return es(i,n.child,null,s),n=wf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Rg(n,i,s){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wu(n.return,i,s)}function Cf(n,i,s,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=s,m.tailMode=h)}function Cg(n,i,s){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(wn(n,i,c.children,s),c=vn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rg(n,s,i);else if(n.tag===19)Rg(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(xt(vn,c),h){case"forwards":for(s=i.child,h=null;s!==null;)n=s.alternate,n!==null&&Yl(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Cf(i,!1,h,s,m);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Yl(n)===null){i.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Cf(i,!0,s,null,m);break;case"together":Cf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ea(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Ua|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(lo(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=ji(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=ji(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function Df(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Ul(n)))}function xx(n,i,s){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),xa(i,gn,n.memoizedState.cache),so();break;case 27:case 5:re(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:xa(i,i.type,i.memoizedProps.value);break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(ba(i),i.flags|=128,null):(s&i.child.childLanes)!==0?wg(n,i,s):(ba(i),n=ea(n,i,s),n!==null?n.sibling:null);ba(i);break;case 19:var h=(n.flags&128)!==0;if(c=(s&i.childLanes)!==0,c||(lo(n,i,s,!1),c=(s&i.childLanes)!==0),h){if(c)return Cg(n,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),xt(vn,vn.current),c)break;return null;case 22:case 23:return i.lanes=0,Mg(n,i,s);case 24:xa(i,gn,n.memoizedState.cache)}return ea(n,i,s)}function Dg(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)Sn=!0;else{if(!Df(n,s)&&(i.flags&128)===0)return Sn=!1,xx(n,i,s);Sn=(n.flags&131072)!==0}else Sn=!1,Le&&(i.flags&1048576)!==0&&sm(i,Dl,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var c=i.elementType,h=c._init;if(c=h(c._payload),i.type=c,typeof c=="function")Fu(c)?(n=dr(c,n),i.tag=1,i=bg(null,i,c,n,s)):(i.tag=0,i=Ef(null,i,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===w){i.tag=11,i=yg(null,i,c,n,s);break t}else if(h===z){i.tag=14,i=xg(null,i,c,n,s);break t}}throw i=lt(c)||c,Error(a(306,i,""))}}return i;case 0:return Ef(n,i,i.type,i.pendingProps,s);case 1:return c=i.type,h=dr(c,i.pendingProps),bg(n,i,c,h,s);case 3:t:{if(Dt(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;h=m.element,Ju(n,i),go(i,c,null,s);var E=i.memoizedState;if(c=E.cache,xa(i,gn,c),c!==m.cache&&qu(i,[gn],s,!0),mo(),c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Ag(n,i,c,s);break t}else if(c!==h){h=ui(Error(a(424)),i),oo(h),i=Ag(n,i,c,s);break t}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(rn=bi(n.firstChild),Hn=i,Le=!0,or=null,Oi=!0,s=lg(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(so(),c===h){i=ea(n,i,s);break t}wn(n,i,c,s)}i=i.child}return i;case 26:return Kl(n,i),n===null?(s=Ov(i.type,null,i.pendingProps,null))?i.memoizedState=s:Le||(s=i.type,n=i.pendingProps,c=fc(dt.current).createElement(s),c[mn]=i,c[nn]=n,Cn(c,s,n),un(c),i.stateNode=c):i.memoizedState=Ov(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return re(i),n===null&&Le&&(c=i.stateNode=Uv(i.type,i.pendingProps,dt.current),Hn=i,Oi=!0,h=rn,Pa(i.type)?(uh=h,rn=bi(c.firstChild)):rn=h),wn(n,i,i.pendingProps.children,s),Kl(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Le&&((h=c=rn)&&(c=jx(c,i.type,i.pendingProps,Oi),c!==null?(i.stateNode=c,Hn=i,rn=bi(c.firstChild),Oi=!1,h=!0):h=!1),h||lr(i)),re(i),h=i.type,m=i.pendingProps,E=n!==null?n.memoizedProps:null,c=m.children,sh(h,m)?c=null:E!==null&&sh(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=rf(n,i,hx,null,null,s),Fo._currentValue=h),Kl(n,i),wn(n,i,c,s),i.child;case 6:return n===null&&Le&&((n=s=rn)&&(s=Zx(s,i.pendingProps,Oi),s!==null?(i.stateNode=s,Hn=i,rn=null,n=!0):n=!1),n||lr(i)),null;case 13:return wg(n,i,s);case 4:return Dt(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=es(i,null,c,s):wn(n,i,c,s),i.child;case 11:return yg(n,i,i.type,i.pendingProps,s);case 7:return wn(n,i,i.pendingProps,s),i.child;case 8:return wn(n,i,i.pendingProps.children,s),i.child;case 12:return wn(n,i,i.pendingProps.children,s),i.child;case 10:return c=i.pendingProps,xa(i,i.type,c.value),wn(n,i,c.children,s),i.child;case 9:return h=i.type._context,c=i.pendingProps.children,ur(i),h=Nn(h),c=c(h),i.flags|=1,wn(n,i,c,s),i.child;case 14:return xg(n,i,i.type,i.pendingProps,s);case 15:return Sg(n,i,i.type,i.pendingProps,s);case 19:return Cg(n,i,s);case 31:return c=i.pendingProps,s=i.mode,c={mode:c.mode,children:c.children},n===null?(s=Ql(c,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ji(n.child,c),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Mg(n,i,s);case 24:return ur(i),c=Nn(gn),n===null?(h=Zu(),h===null&&(h=qe,m=Yu(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:c,cache:h},Qu(i),xa(i,gn,h)):((n.lanes&s)!==0&&(Ju(n,i),go(i,null,null,s),mo()),h=n.memoizedState,m=i.memoizedState,h.parent!==c?(h={parent:c,cache:c},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),xa(i,gn,c)):(c=m.cache,xa(i,gn,c),c!==h.cache&&qu(i,[gn],s,!0))),wn(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function na(n){n.flags|=4}function Ug(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!zv(i)){if(i=pi.current,i!==null&&((be&4194048)===be?Pi!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Pi))throw ho=Ku,pm;n.flags|=8192}}function Jl(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?bt():536870912,n.lanes|=i,rs|=i)}function Eo(n,i){if(!Le)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(i)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,i}function Sx(n,i,s){var c=i.pendingProps;switch(Gu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Ji(gn),Yt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(ro(i)?na(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cm())),tn(i),null;case 26:return s=i.memoizedState,n===null?(na(i),s!==null?(tn(i),Ug(i,s)):(tn(i),i.flags&=-16777217)):s?s!==n.memoizedState?(na(i),tn(i),Ug(i,s)):(tn(i),i.flags&=-16777217):(n.memoizedProps!==c&&na(i),tn(i),i.flags&=-16777217),null;case 27:Xe(i),s=dt.current;var h=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==c&&na(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return tn(i),null}n=wt.current,ro(i)?om(i):(n=Uv(h,c,s),i.stateNode=n,na(i))}return tn(i),null;case 5:if(Xe(i),s=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&na(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return tn(i),null}if(n=wt.current,ro(i))om(i);else{switch(h=fc(dt.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[mn]=i,n[nn]=c;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=n;t:switch(Cn(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&na(i)}}return tn(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&na(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=dt.current,ro(i)){if(n=i.stateNode,s=i.memoizedProps,c=null,h=Hn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[mn]=i,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||Tv(n.nodeValue,s)),n||lr(i)}else n=fc(n).createTextNode(c),n[mn]=i,i.stateNode=n}return tn(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=ro(i),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[mn]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),h=!1}else h=cm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ta(i),i):(ta(i),null)}if(ta(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=i.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)}return s!==n&&s&&(i.child.flags|=8192),Jl(i,i.updateQueue),tn(i),null;case 4:return Yt(),n===null&&eh(i.stateNode.containerInfo),tn(i),null;case 10:return Ji(i.type),tn(i),null;case 19:if(mt(vn),h=i.memoizedState,h===null)return tn(i),null;if(c=(i.flags&128)!==0,m=h.rendering,m===null)if(c)Eo(h,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=Yl(n),m!==null){for(i.flags|=128,Eo(h,!1),n=m.updateQueue,i.updateQueue=n,Jl(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)rm(s,n),s=s.sibling;return xt(vn,vn.current&1|2),i.child}n=n.sibling}h.tail!==null&&Ft()>ec&&(i.flags|=128,c=!0,Eo(h,!1),i.lanes=4194304)}else{if(!c)if(n=Yl(m),n!==null){if(i.flags|=128,c=!0,n=n.updateQueue,i.updateQueue=n,Jl(i,n),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Le)return tn(i),null}else 2*Ft()-h.renderingStartTime>ec&&s!==536870912&&(i.flags|=128,c=!0,Eo(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(n=h.last,n!==null?n.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ft(),i.sibling=null,n=vn.current,xt(vn,c?n&1|2:n&1),i):(tn(i),null);case 22:case 23:return ta(i),nf(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&Jl(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048),n!==null&&mt(fr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(gn),tn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Mx(n,i){switch(Gu(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ji(gn),Yt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Xe(i),null;case 13:if(ta(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));so()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return mt(vn),null;case 4:return Yt(),null;case 10:return Ji(i.type),null;case 22:case 23:return ta(i),nf(),n!==null&&mt(fr),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ji(gn),null;case 25:return null;default:return null}}function Lg(n,i){switch(Gu(i),i.tag){case 3:Ji(gn),Yt();break;case 26:case 27:case 5:Xe(i);break;case 4:Yt();break;case 13:ta(i);break;case 19:mt(vn);break;case 10:Ji(i.type);break;case 22:case 23:ta(i),nf(),n!==null&&mt(fr);break;case 24:Ji(gn)}}function To(n,i){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var m=s.create,E=s.inst;c=m(),E.destroy=c}s=s.next}while(s!==h)}}catch(A){ke(i,i.return,A)}}function wa(n,i,s){try{var c=i.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&n)===n){var E=c.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,h=i;var H=s,$=A;try{$()}catch(ht){ke(h,H,ht)}}}c=c.next}while(c!==m)}}catch(ht){ke(i,i.return,ht)}}function Ng(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{xm(i,s)}catch(c){ke(n,n.return,c)}}}function Og(n,i,s){s.props=dr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){ke(n,i,c)}}function bo(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){ke(n,i,h)}}function Ii(n,i){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){ke(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){ke(n,i,h)}else s.current=null}function Pg(n){var i=n.type,s=n.memoizedProps,c=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break t;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){ke(n,n.return,h)}}function Uf(n,i,s){try{var c=n.stateNode;kx(c,n.type,s,i),c[nn]=i}catch(h){ke(n,n.return,h)}}function Ig(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Pa(n.type)||n.tag===4}function Lf(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||Ig(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Pa(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nf(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=uc));else if(c!==4&&(c===27&&Pa(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(Nf(n,i,s),n=n.sibling;n!==null;)Nf(n,i,s),n=n.sibling}function $l(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(c!==4&&(c===27&&Pa(n.type)&&(s=n.stateNode),n=n.child,n!==null))for($l(n,i,s),n=n.sibling;n!==null;)$l(n,i,s),n=n.sibling}function Bg(n){var i=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Cn(i,c,s),i[mn]=n,i[nn]=s}catch(m){ke(n,n.return,m)}}var ia=!1,ln=!1,Of=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Ex(n,i){if(n=n.containerInfo,ah=vc,n=Zp(n),Uu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,A=-1,H=-1,$=0,ht=0,gt=n,at=null;e:for(;;){for(var rt;gt!==s||h!==0&&gt.nodeType!==3||(A=E+h),gt!==m||c!==0&&gt.nodeType!==3||(H=E+c),gt.nodeType===3&&(E+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)at=gt,gt=rt;for(;;){if(gt===n)break e;if(at===s&&++$===h&&(A=E),at===m&&++ht===c&&(H=E),(rt=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=rt}s=A===-1||H===-1?null:{start:A,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(rh={focusedElem:n,selectionRange:s},vc=!1,Mn=i;Mn!==null;)if(i=Mn,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,Mn=n;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var ie=dr(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(ie,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(te){ke(s,s.return,te)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)lh(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":lh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Mn=n;break}Mn=i.return}}function zg(n,i,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ra(n,s),c&4&&To(5,s);break;case 1:if(Ra(n,s),c&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(E){ke(s,s.return,E)}else{var h=dr(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){ke(s,s.return,E)}}c&64&&Ng(s),c&512&&bo(s,s.return);break;case 3:if(Ra(n,s),c&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{xm(n,i)}catch(E){ke(s,s.return,E)}}break;case 27:i===null&&c&4&&Bg(s);case 26:case 5:Ra(n,s),i===null&&c&4&&Pg(s),c&512&&bo(s,s.return);break;case 12:Ra(n,s);break;case 13:Ra(n,s),c&4&&Gg(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=Lx.bind(null,s),Kx(n,s))));break;case 22:if(c=s.memoizedState!==null||ia,!c){i=i!==null&&i.memoizedState!==null||ln,h=ia;var m=ln;ia=c,(ln=i)&&!m?Ca(n,s,(s.subtreeFlags&8772)!==0):Ra(n,s),ia=h,ln=m}break;case 30:break;default:Ra(n,s)}}function Hg(n){var i=n.alternate;i!==null&&(n.alternate=null,Hg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ir(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Qe=null,Yn=!1;function aa(n,i,s){for(s=s.child;s!==null;)Vg(n,i,s),s=s.sibling}function Vg(n,i,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ft,s)}catch{}switch(s.tag){case 26:ln||Ii(s,i),aa(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ln||Ii(s,i);var c=Qe,h=Yn;Pa(s.type)&&(Qe=s.stateNode,Yn=!1),aa(n,i,s),Oo(s.stateNode),Qe=c,Yn=h;break;case 5:ln||Ii(s,i);case 6:if(c=Qe,h=Yn,Qe=null,aa(n,i,s),Qe=c,Yn=h,Qe!==null)if(Yn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(s.stateNode)}catch(m){ke(s,i,m)}else try{Qe.removeChild(s.stateNode)}catch(m){ke(s,i,m)}break;case 18:Qe!==null&&(Yn?(n=Qe,Cv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Go(n)):Cv(Qe,s.stateNode));break;case 4:c=Qe,h=Yn,Qe=s.stateNode.containerInfo,Yn=!0,aa(n,i,s),Qe=c,Yn=h;break;case 0:case 11:case 14:case 15:ln||wa(2,s,i),ln||wa(4,s,i),aa(n,i,s);break;case 1:ln||(Ii(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Og(s,i,c)),aa(n,i,s);break;case 21:aa(n,i,s);break;case 22:ln=(c=ln)||s.memoizedState!==null,aa(n,i,s),ln=c;break;default:aa(n,i,s)}}function Gg(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Go(n)}catch(s){ke(i,i.return,s)}}function Tx(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Fg),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Fg),i;default:throw Error(a(435,n.tag))}}function Pf(n,i){var s=Tx(n);i.forEach(function(c){var h=Nx.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function ti(n,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],m=n,E=i,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(Pa(A.type)){Qe=A.stateNode,Yn=!1;break t}break;case 5:Qe=A.stateNode,Yn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(Qe===null)throw Error(a(160));Vg(m,E,h),Qe=null,Yn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)kg(i,n),i=i.sibling}var Ti=null;function kg(n,i){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ti(i,n),ei(n),c&4&&(wa(3,n,n.return),To(3,n),wa(5,n,n.return));break;case 1:ti(i,n),ei(n),c&512&&(ln||s===null||Ii(s,s.return)),c&64&&ia&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Ti;if(ti(i,n),ei(n),c&512&&(ln||s===null||Ii(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){t:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Ni]||m[mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),Cn(m,c,s),m[mn]=n,un(m),c=m;break t;case"link":var E=Bv("link","href",h).get(c+(s.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(A,1);break e}}m=h.createElement(c),Cn(m,c,s),h.head.appendChild(m);break;case"meta":if(E=Bv("meta","content",h).get(c+(s.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(A,1);break e}}m=h.createElement(c),Cn(m,c,s),h.head.appendChild(m);break;default:throw Error(a(468,c))}m[mn]=n,un(m),c=m}n.stateNode=c}else Fv(h,n.type,n.stateNode);else n.stateNode=Iv(h,c,n.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?Fv(h,n.type,n.stateNode):Iv(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Uf(n,n.memoizedProps,s.memoizedProps)}break;case 27:ti(i,n),ei(n),c&512&&(ln||s===null||Ii(s,s.return)),s!==null&&c&4&&Uf(n,n.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,n),ei(n),c&512&&(ln||s===null||Ii(s,s.return)),n.flags&32){h=n.stateNode;try{Xn(h,"")}catch(rt){ke(n,n.return,rt)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,Uf(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Of=!0);break;case 6:if(ti(i,n),ei(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(rt){ke(n,n.return,rt)}}break;case 3:if(pc=null,h=Ti,Ti=hc(i.containerInfo),ti(i,n),Ti=h,ei(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Go(i.containerInfo)}catch(rt){ke(n,n.return,rt)}Of&&(Of=!1,Xg(n));break;case 4:c=Ti,Ti=hc(n.stateNode.containerInfo),ti(i,n),ei(n),Ti=c;break;case 12:ti(i,n),ei(n);break;case 13:ti(i,n),ei(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vf=Ft()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Pf(n,c)));break;case 22:h=n.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,$=ia,ht=ln;if(ia=$||h,ln=ht||H,ti(i,n),ln=ht,ia=$,ei(n),c&8192)t:for(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||H||ia||ln||pr(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(m=H.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=H.stateNode;var gt=H.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(rt){ke(H,H.return,rt)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(rt){ke(H,H.return,rt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Pf(n,s))));break;case 19:ti(i,n),ei(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Pf(n,c)));break;case 30:break;case 21:break;default:ti(i,n),ei(n)}}function ei(n){var i=n.flags;if(i&2){try{for(var s,c=n.return;c!==null;){if(Ig(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Lf(n);$l(n,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(Xn(E,""),s.flags&=-33);var A=Lf(n);$l(n,A,E);break;case 3:case 4:var H=s.stateNode.containerInfo,$=Lf(n);Nf(n,$,H);break;default:throw Error(a(161))}}catch(ht){ke(n,n.return,ht)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Xg(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Xg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ra(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)zg(n,i.alternate,i),i=i.sibling}function pr(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:wa(4,i,i.return),pr(i);break;case 1:Ii(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Og(i,i.return,s),pr(i);break;case 27:Oo(i.stateNode);case 26:case 5:Ii(i,i.return),pr(i);break;case 22:i.memoizedState===null&&pr(i);break;case 30:pr(i);break;default:pr(i)}n=n.sibling}}function Ca(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,h=n,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(h,m,s),To(4,m);break;case 1:if(Ca(h,m,s),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch($){ke(c,c.return,$)}if(c=m,h=c.updateQueue,h!==null){var A=c.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)ym(H[h],A)}catch($){ke(c,c.return,$)}}s&&E&64&&Ng(m),bo(m,m.return);break;case 27:Bg(m);case 26:case 5:Ca(h,m,s),s&&c===null&&E&4&&Pg(m),bo(m,m.return);break;case 12:Ca(h,m,s);break;case 13:Ca(h,m,s),s&&E&4&&Gg(h,m);break;case 22:m.memoizedState===null&&Ca(h,m,s),bo(m,m.return);break;case 30:break;default:Ca(h,m,s)}i=i.sibling}}function If(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&co(s))}function Bf(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&co(n))}function Bi(n,i,s,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Wg(n,i,s,c),i=i.sibling}function Wg(n,i,s,c){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Bi(n,i,s,c),h&2048&&To(9,i);break;case 1:Bi(n,i,s,c);break;case 3:Bi(n,i,s,c),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&co(n)));break;case 12:if(h&2048){Bi(n,i,s,c),n=i.stateNode;try{var m=i.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){ke(i,i.return,H)}}else Bi(n,i,s,c);break;case 13:Bi(n,i,s,c);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Bi(n,i,s,c):Ao(n,i):m._visibility&2?Bi(n,i,s,c):(m._visibility|=2,ns(n,i,s,c,(i.subtreeFlags&10256)!==0)),h&2048&&If(E,i);break;case 24:Bi(n,i,s,c),h&2048&&Bf(i.alternate,i);break;default:Bi(n,i,s,c)}}function ns(n,i,s,c,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=n,E=i,A=s,H=c,$=E.flags;switch(E.tag){case 0:case 11:case 15:ns(m,E,A,H,h),To(8,E);break;case 23:break;case 22:var ht=E.stateNode;E.memoizedState!==null?ht._visibility&2?ns(m,E,A,H,h):Ao(m,E):(ht._visibility|=2,ns(m,E,A,H,h)),h&&$&2048&&If(E.alternate,E);break;case 24:ns(m,E,A,H,h),h&&$&2048&&Bf(E.alternate,E);break;default:ns(m,E,A,H,h)}i=i.sibling}}function Ao(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,c=i,h=c.flags;switch(c.tag){case 22:Ao(s,c),h&2048&&If(c.alternate,c);break;case 24:Ao(s,c),h&2048&&Bf(c.alternate,c);break;default:Ao(s,c)}i=i.sibling}}var wo=8192;function is(n){if(n.subtreeFlags&wo)for(n=n.child;n!==null;)qg(n),n=n.sibling}function qg(n){switch(n.tag){case 26:is(n),n.flags&wo&&n.memoizedState!==null&&cS(Ti,n.memoizedState,n.memoizedProps);break;case 5:is(n);break;case 3:case 4:var i=Ti;Ti=hc(n.stateNode.containerInfo),is(n),Ti=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=wo,wo=16777216,is(n),wo=i):is(n));break;default:is(n)}}function Yg(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ro(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Mn=c,Zg(c,n)}Yg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jg(n),n=n.sibling}function jg(n){switch(n.tag){case 0:case 11:case 15:Ro(n),n.flags&2048&&wa(9,n,n.return);break;case 3:Ro(n);break;case 12:Ro(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,tc(n)):Ro(n);break;default:Ro(n)}}function tc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Mn=c,Zg(c,n)}Yg(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:wa(8,i,i.return),tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,tc(i));break;default:tc(i)}n=n.sibling}}function Zg(n,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:co(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,Mn=c;else t:for(s=n;Mn!==null;){c=Mn;var h=c.sibling,m=c.return;if(Hg(c),c===s){Mn=null;break t}if(h!==null){h.return=m,Mn=h;break t}Mn=m}}}var bx={getCacheForType:function(n){var i=Nn(gn),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s}},Ax=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,xe=null,be=0,Ie=0,ni=null,Da=!1,as=!1,Ff=!1,ra=0,sn=0,Ua=0,mr=0,zf=0,mi=0,rs=0,Co=null,jn=null,Hf=!1,Vf=0,ec=1/0,nc=null,La=null,Rn=0,Na=null,ss=null,os=0,Gf=0,kf=null,Kg=null,Do=0,Xf=null;function ii(){if((Pe&2)!==0&&be!==0)return be&-be;if(F.T!==null){var n=jr;return n!==0?n:Qf()}return we()}function Qg(){mi===0&&(mi=(be&536870912)===0||Le?X():536870912);var n=pi.current;return n!==null&&(n.flags|=32),mi}function ai(n,i,s){(n===qe&&(Ie===2||Ie===9)||n.cancelPendingCommit!==null)&&(ls(n,0),Oa(n,be,mi,!1)),It(n,s),((Pe&2)===0||n!==qe)&&(n===qe&&((Pe&2)===0&&(mr|=s),sn===4&&Oa(n,be,mi,!1)),Fi(n))}function Jg(n,i,s){if((Pe&6)!==0)throw Error(a(327));var c=!s&&(i&124)===0&&(i&n.expiredLanes)===0||Ct(n,i),h=c?Cx(n,i):Yf(n,i,!0),m=c;do{if(h===0){as&&!c&&Oa(n,i,0,!1);break}else{if(s=n.current.alternate,m&&!wx(s)){h=Yf(n,i,!1),m=!1;continue}if(h===2){if(m=i,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var A=n;h=Co;var H=A.current.memoizedState.isDehydrated;if(H&&(ls(A,E).flags|=256),E=Yf(A,E,!1),E!==2){if(Ff&&!H){A.errorRecoveryDisabledLanes|=m,mr|=m,h=4;break t}m=jn,jn=h,m!==null&&(jn===null?jn=m:jn.push.apply(jn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){ls(n,0),Oa(n,i,0,!0);break}t:{switch(c=n,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oa(c,i,mi,!Da);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Vf+300-Ft(),10<h)){if(Oa(c,i,mi,!Da),kt(c,0,!0)!==0)break t;c.timeoutHandle=wv($g.bind(null,c,s,jn,nc,Hf,i,mi,mr,rs,Da,m,2,-0,0),h);break t}$g(c,s,jn,nc,Hf,i,mi,mr,rs,Da,m,0,-0,0)}}break}while(!0);Fi(n)}function $g(n,i,s,c,h,m,E,A,H,$,ht,gt,at,rt){if(n.timeoutHandle=-1,gt=i.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:lS},qg(i),gt=uS(),gt!==null)){n.cancelPendingCommit=gt(sv.bind(null,n,i,m,s,c,h,E,A,H,ht,1,at,rt)),Oa(n,m,E,!$);return}sv(n,i,m,s,c,h,E,A,H)}function wx(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],m=h.getSnapshot;h=h.value;try{if(!Jn(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oa(n,i,s,c){i&=~zf,i&=~mr,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var h=i;0<h;){var m=31-Pt(h),E=1<<m;c[m]=-1,h&=~E}s!==0&&vt(n,s,i)}function ic(){return(Pe&6)===0?(Uo(0),!1):!0}function Wf(){if(xe!==null){if(Ie===0)var n=xe.return;else n=xe,Qi=cr=null,lf(n),ts=null,So=0,n=xe;for(;n!==null;)Lg(n.alternate,n),n=n.return;xe=null}}function ls(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,Wx(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Wf(),qe=n,xe=s=ji(n.current,null),be=i,Ie=0,ni=null,Da=!1,as=Ct(n,i),Ff=!1,rs=mi=zf=mr=Ua=sn=0,jn=Co=null,Hf=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var h=31-Pt(c),m=1<<h;i|=n[h],c&=~m}return ra=i,bl(),s}function tv(n,i){ge=null,F.H=Xl,i===fo||i===Ol?(i=vm(),Ie=3):i===pm?(i=vm(),Ie=4):Ie=i===_g?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ni=i,xe===null&&(sn=1,Zl(n,ui(i,n.current)))}function ev(){var n=F.H;return F.H=Xl,n===null?Xl:n}function nv(){var n=F.A;return F.A=bx,n}function qf(){sn=4,Da||(be&4194048)!==be&&pi.current!==null||(as=!0),(Ua&134217727)===0&&(mr&134217727)===0||qe===null||Oa(qe,be,mi,!1)}function Yf(n,i,s){var c=Pe;Pe|=2;var h=ev(),m=nv();(qe!==n||be!==i)&&(nc=null,ls(n,i)),i=!1;var E=sn;t:do try{if(Ie!==0&&xe!==null){var A=xe,H=ni;switch(Ie){case 8:Wf(),E=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(i=!0);var $=Ie;if(Ie=0,ni=null,cs(n,A,H,$),s&&as){E=0;break t}break;default:$=Ie,Ie=0,ni=null,cs(n,A,H,$)}}Rx(),E=sn;break}catch(ht){tv(n,ht)}while(!0);return i&&n.shellSuspendCounter++,Qi=cr=null,Pe=c,F.H=h,F.A=m,xe===null&&(qe=null,be=0,bl()),E}function Rx(){for(;xe!==null;)iv(xe)}function Cx(n,i){var s=Pe;Pe|=2;var c=ev(),h=nv();qe!==n||be!==i?(nc=null,ec=Ft()+500,ls(n,i)):as=Ct(n,i);t:do try{if(Ie!==0&&xe!==null){i=xe;var m=ni;e:switch(Ie){case 1:Ie=0,ni=null,cs(n,i,m,1);break;case 2:case 9:if(mm(m)){Ie=0,ni=null,av(i);break}i=function(){Ie!==2&&Ie!==9||qe!==n||(Ie=7),Fi(n)},m.then(i,i);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:mm(m)?(Ie=0,ni=null,av(i)):(Ie=0,ni=null,cs(n,i,m,7));break;case 5:var E=null;switch(xe.tag){case 26:E=xe.memoizedState;case 5:case 27:var A=xe;if(!E||zv(E)){Ie=0,ni=null;var H=A.sibling;if(H!==null)xe=H;else{var $=A.return;$!==null?(xe=$,ac($)):xe=null}break e}}Ie=0,ni=null,cs(n,i,m,5);break;case 6:Ie=0,ni=null,cs(n,i,m,6);break;case 8:Wf(),sn=6;break t;default:throw Error(a(462))}}Dx();break}catch(ht){tv(n,ht)}while(!0);return Qi=cr=null,F.H=c,F.A=h,Pe=s,xe!==null?0:(qe=null,be=0,bl(),sn)}function Dx(){for(;xe!==null&&!Jt();)iv(xe)}function iv(n){var i=Dg(n.alternate,n,ra);n.memoizedProps=n.pendingProps,i===null?ac(n):xe=i}function av(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=Tg(s,i,i.pendingProps,i.type,void 0,be);break;case 11:i=Tg(s,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:lf(i);default:Lg(s,i),i=xe=rm(i,ra),i=Dg(s,i,ra)}n.memoizedProps=n.pendingProps,i===null?ac(n):xe=i}function cs(n,i,s,c){Qi=cr=null,lf(i),ts=null,So=0;var h=i.return;try{if(yx(n,h,i,s,be)){sn=1,Zl(n,ui(s,n.current)),xe=null;return}}catch(m){if(h!==null)throw xe=h,m;sn=1,Zl(n,ui(s,n.current)),xe=null;return}i.flags&32768?(Le||c===1?n=!0:as||(be&536870912)!==0?n=!1:(Da=n=!0,(c===2||c===9||c===3||c===6)&&(c=pi.current,c!==null&&c.tag===13&&(c.flags|=16384))),rv(i,n)):ac(i)}function ac(n){var i=n;do{if((i.flags&32768)!==0){rv(i,Da);return}n=i.return;var s=Sx(i.alternate,i,ra);if(s!==null){xe=s;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=n}while(i!==null);sn===0&&(sn=5)}function rv(n,i){do{var s=Mx(n.alternate,n);if(s!==null){s.flags&=32767,xe=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){xe=n;return}xe=n=s}while(n!==null);sn=6,xe=null}function sv(n,i,s,c,h,m,E,A,H){n.cancelPendingCommit=null;do rc();while(Rn!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Iu,Et(n,s,m,E,A,H),n===qe&&(xe=qe=null,be=0),ss=i,Na=n,os=s,Gf=m,kf=h,Kg=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Ox(Je,function(){return fv(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=F.T,F.T=null,h=Q.p,Q.p=2,E=Pe,Pe|=4;try{Ex(n,i,s)}finally{Pe=E,Q.p=h,F.T=c}}Rn=1,ov(),lv(),cv()}}function ov(){if(Rn===1){Rn=0;var n=Na,i=ss,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var c=Q.p;Q.p=2;var h=Pe;Pe|=4;try{kg(i,n);var m=rh,E=Zp(n.containerInfo),A=m.focusedElem,H=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&jp(A.ownerDocument.documentElement,A)){if(H!==null&&Uu(A)){var $=H.start,ht=H.end;if(ht===void 0&&(ht=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ht,A.value.length);else{var gt=A.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var rt=at.getSelection(),ie=A.textContent.length,te=Math.min(H.start,ie),He=H.end===void 0?te:Math.min(H.end,ie);!rt.extend&&te>He&&(E=He,He=te,te=E);var j=Yp(A,te),k=Yp(A,He);if(j&&k&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var J=gt.createRange();J.setStart(j.node,j.offset),rt.removeAllRanges(),te>He?(rt.addRange(J),rt.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),rt.addRange(J))}}}}for(gt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var pt=gt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}vc=!!ah,rh=ah=null}finally{Pe=h,Q.p=c,F.T=s}}n.current=i,Rn=2}}function lv(){if(Rn===2){Rn=0;var n=Na,i=ss,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var c=Q.p;Q.p=2;var h=Pe;Pe|=4;try{zg(n,i.alternate,i)}finally{Pe=h,Q.p=c,F.T=s}}Rn=3}}function cv(){if(Rn===4||Rn===3){Rn=0,Ae();var n=Na,i=ss,s=os,c=Kg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,ss=Na=null,uv(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(La=null),Oe(s),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=F.T,h=Q.p,Q.p=2,F.T=null;try{for(var m=n.onRecoverableError,E=0;E<c.length;E++){var A=c[E];m(A.value,{componentStack:A.stack})}}finally{F.T=i,Q.p=h}}(os&3)!==0&&rc(),Fi(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Xf?Do++:(Do=0,Xf=n):Do=0,Uo(0)}}function uv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,co(i)))}function rc(n){return ov(),lv(),cv(),fv()}function fv(){if(Rn!==5)return!1;var n=Na,i=Gf;Gf=0;var s=Oe(os),c=F.T,h=Q.p;try{Q.p=32>s?32:s,F.T=null,s=kf,kf=null;var m=Na,E=os;if(Rn=0,ss=Na=null,os=0,(Pe&6)!==0)throw Error(a(331));var A=Pe;if(Pe|=4,jg(m.current),Wg(m,m.current,E,s),Pe=A,Uo(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ft,m)}catch{}return!0}finally{Q.p=h,F.T=c,uv(n,i)}}function hv(n,i,s){i=ui(s,i),i=Mf(n.stateNode,i,2),n=Ea(n,i,2),n!==null&&(It(n,2),Fi(n))}function ke(n,i,s){if(n.tag===3)hv(n,n,s);else for(;i!==null;){if(i.tag===3){hv(i,n,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(La===null||!La.has(c))){n=ui(s,n),s=gg(2),c=Ea(i,s,2),c!==null&&(vg(s,c,i,n),It(c,2),Fi(c));break}}i=i.return}}function jf(n,i,s){var c=n.pingCache;if(c===null){c=n.pingCache=new Ax;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(s)||(Ff=!0,h.add(s),n=Ux.bind(null,n,i,s),i.then(n,n))}function Ux(n,i,s){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,qe===n&&(be&s)===s&&(sn===4||sn===3&&(be&62914560)===be&&300>Ft()-Vf?(Pe&2)===0&&ls(n,0):zf|=s,rs===be&&(rs=0)),Fi(n)}function dv(n,i){i===0&&(i=bt()),n=Xr(n,i),n!==null&&(It(n,i),Fi(n))}function Lx(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),dv(n,s)}function Nx(n,i){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),dv(n,s)}function Ox(n,i){return V(n,i)}var sc=null,us=null,Zf=!1,oc=!1,Kf=!1,gr=0;function Fi(n){n!==us&&n.next===null&&(us===null?sc=us=n:us=us.next=n),oc=!0,Zf||(Zf=!0,Ix())}function Uo(n,i){if(!Kf&&oc){Kf=!0;do for(var s=!1,c=sc;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var E=c.suspendedLanes,A=c.pingedLanes;m=(1<<31-Pt(42|n)+1)-1,m&=h&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,vv(c,m))}else m=be,m=kt(c,c===qe?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Ct(c,m)||(s=!0,vv(c,m));c=c.next}while(s);Kf=!1}}function Px(){pv()}function pv(){oc=Zf=!1;var n=0;gr!==0&&(Xx()&&(n=gr),gr=0);for(var i=Ft(),s=null,c=sc;c!==null;){var h=c.next,m=mv(c,i);m===0?(c.next=null,s===null?sc=h:s.next=h,h===null&&(us=s)):(s=c,(n!==0||(m&3)!==0)&&(oc=!0)),c=h}Uo(n)}function mv(n,i){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-Pt(m),A=1<<E,H=h[E];H===-1?((A&s)===0||(A&c)!==0)&&(h[E]=oe(A,i)):H<=i&&(n.expiredLanes|=A),m&=~A}if(i=qe,s=be,s=kt(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===i&&(Ie===2||Ie===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Ne(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Ct(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(c!==null&&Ne(c),Oe(s)){case 2:case 8:s=le;break;case 32:s=Je;break;case 268435456:s=P;break;default:s=Je}return c=gv.bind(null,n),s=V(s,c),n.callbackPriority=i,n.callbackNode=s,i}return c!==null&&c!==null&&Ne(c),n.callbackPriority=2,n.callbackNode=null,2}function gv(n,i){if(Rn!==0&&Rn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(rc()&&n.callbackNode!==s)return null;var c=be;return c=kt(n,n===qe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(Jg(n,c,i),mv(n,Ft()),n.callbackNode!=null&&n.callbackNode===s?gv.bind(null,n):null)}function vv(n,i){if(rc())return null;Jg(n,i,!0)}function Ix(){qx(function(){(Pe&6)!==0?V(zt,Px):pv()})}function Qf(){return gr===0&&(gr=X()),gr}function _v(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:_l(""+n)}function yv(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function Bx(n,i,s,c,h){if(i==="submit"&&s&&s.stateNode===h){var m=_v((h[nn]||null).action),E=c.submitter;E&&(i=(i=E[nn]||null)?_v(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var A=new Ml("action","action",null,c,h);n.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(gr!==0){var H=E?yv(h,E):new FormData(h);vf(s,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(A.preventDefault(),H=E?yv(h,E):new FormData(h),vf(s,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var Jf=0;Jf<Pu.length;Jf++){var $f=Pu[Jf],Fx=$f.toLowerCase(),zx=$f[0].toUpperCase()+$f.slice(1);Ei(Fx,"on"+zx)}Ei(Jp,"onAnimationEnd"),Ei($p,"onAnimationIteration"),Ei(tm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(nx,"onTransitionRun"),Ei(ix,"onTransitionStart"),Ei(ax,"onTransitionCancel"),Ei(em,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function xv(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;t:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var A=c[E],H=A.instance,$=A.currentTarget;if(A=A.listener,H!==m&&h.isPropagationStopped())break t;m=A,h.currentTarget=$;try{m(h)}catch(ht){jl(ht)}h.currentTarget=null,m=H}else for(E=0;E<c.length;E++){if(A=c[E],H=A.instance,$=A.currentTarget,A=A.listener,H!==m&&h.isPropagationStopped())break t;m=A,h.currentTarget=$;try{m(h)}catch(ht){jl(ht)}h.currentTarget=null,m=H}}}}function Se(n,i){var s=i[Or];s===void 0&&(s=i[Or]=new Set);var c=n+"__bubble";s.has(c)||(Sv(i,n,2,!1),s.add(c))}function th(n,i,s){var c=0;i&&(c|=4),Sv(s,n,c,i)}var lc="_reactListening"+Math.random().toString(36).slice(2);function eh(n){if(!n[lc]){n[lc]=!0,gl.forEach(function(s){s!=="selectionchange"&&(Hx.has(s)||th(s,!1,n),th(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[lc]||(i[lc]=!0,th("selectionchange",!1,i))}}function Sv(n,i,s,c){switch(Wv(i)){case 2:var h=dS;break;case 8:h=pS;break;default:h=mh}s=h.bind(null,i,s,n),h=void 0,!Mu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,s,{capture:!0,passive:h}):n.addEventListener(i,s,!0):h!==void 0?n.addEventListener(i,s,{passive:h}):n.addEventListener(i,s,!1)}function nh(n,i,s,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)t:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var A=c.stateNode.containerInfo;if(A===h)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;A!==null;){if(E=qi(A),E===null)return;if(H=E.tag,H===5||H===6||H===26||H===27){c=m=E;continue t}A=A.parentNode}}c=c.return}Rp(function(){var $=m,ht=xu(s),gt=[];t:{var at=nm.get(n);if(at!==void 0){var rt=Ml,ie=n;switch(n){case"keypress":if(xl(s)===0)break t;case"keydown":case"keyup":rt=Oy;break;case"focusin":ie="focus",rt=Au;break;case"focusout":ie="blur",rt=Au;break;case"beforeblur":case"afterblur":rt=Au;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=My;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=By;break;case Jp:case $p:case tm:rt=by;break;case em:rt=zy;break;case"scroll":case"scrollend":rt=xy;break;case"wheel":rt=Vy;break;case"copy":case"cut":case"paste":rt=wy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Np;break;case"toggle":case"beforetoggle":rt=ky}var te=(i&4)!==0,He=!te&&(n==="scroll"||n==="scrollend"),j=te?at!==null?at+"Capture":null:at;te=[];for(var k=$,J;k!==null;){var pt=k;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=Ks(k,j),pt!=null&&te.push(No(k,pt,J))),He)break;k=k.return}0<te.length&&(at=new rt(at,ie,null,s,ht),gt.push({event:at,listeners:te}))}}if((i&7)===0){t:{if(at=n==="mouseover"||n==="pointerover",rt=n==="mouseout"||n==="pointerout",at&&s!==yu&&(ie=s.relatedTarget||s.fromElement)&&(qi(ie)||ie[Li]))break t;if((rt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,rt?(ie=s.relatedTarget||s.toElement,rt=$,ie=ie?qi(ie):null,ie!==null&&(He=l(ie),te=ie.tag,ie!==He||te!==5&&te!==27&&te!==6)&&(ie=null)):(rt=null,ie=$),rt!==ie)){if(te=Up,pt="onMouseLeave",j="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(te=Np,pt="onPointerLeave",j="onPointerEnter",k="pointer"),He=rt==null?at:tr(rt),J=ie==null?at:tr(ie),at=new te(pt,k+"leave",rt,s,ht),at.target=He,at.relatedTarget=J,pt=null,qi(ht)===$&&(te=new te(j,k+"enter",ie,s,ht),te.target=J,te.relatedTarget=He,pt=te),He=pt,rt&&ie)e:{for(te=rt,j=ie,k=0,J=te;J;J=fs(J))k++;for(J=0,pt=j;pt;pt=fs(pt))J++;for(;0<k-J;)te=fs(te),k--;for(;0<J-k;)j=fs(j),J--;for(;k--;){if(te===j||j!==null&&te===j.alternate)break e;te=fs(te),j=fs(j)}te=null}else te=null;rt!==null&&Mv(gt,at,rt,te,!1),ie!==null&&He!==null&&Mv(gt,He,ie,te,!0)}}t:{if(at=$?tr($):window,rt=at.nodeName&&at.nodeName.toLowerCase(),rt==="select"||rt==="input"&&at.type==="file")var Ht=Vp;else if(zp(at))if(Gp)Ht=$y;else{Ht=Qy;var ve=Ky}else rt=at.nodeName,!rt||rt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&_u($.elementType)&&(Ht=Vp):Ht=Jy;if(Ht&&(Ht=Ht(n,$))){Hp(gt,Ht,s,ht);break t}ve&&ve(n,at,$),n==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Ln(at,"number",at.value)}switch(ve=$?tr($):window,n){case"focusin":(zp(ve)||ve.contentEditable==="true")&&(Vr=ve,Lu=$,ao=null);break;case"focusout":ao=Lu=Vr=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Kp(gt,s,ht);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":Kp(gt,s,ht)}var jt;if(Ru)t:{switch(n){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Hr?Bp(n,s)&&(ne="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ne="onCompositionStart");ne&&(Op&&s.locale!=="ko"&&(Hr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Hr&&(jt=Cp()):(ya=ht,Eu="value"in ya?ya.value:ya.textContent,Hr=!0)),ve=cc($,ne),0<ve.length&&(ne=new Lp(ne,n,null,s,ht),gt.push({event:ne,listeners:ve}),jt?ne.data=jt:(jt=Fp(s),jt!==null&&(ne.data=jt)))),(jt=Wy?qy(n,s):Yy(n,s))&&(ne=cc($,"onBeforeInput"),0<ne.length&&(ve=new Lp("onBeforeInput","beforeinput",null,s,ht),gt.push({event:ve,listeners:ne}),ve.data=jt)),Bx(gt,n,$,s,ht)}xv(gt,i)})}function No(n,i,s){return{instance:n,listener:i,currentTarget:s}}function cc(n,i){for(var s=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Ks(n,s),h!=null&&c.unshift(No(n,h,m)),h=Ks(n,i),h!=null&&c.push(No(n,h,m))),n.tag===3)return c;n=n.return}return[]}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Mv(n,i,s,c,h){for(var m=i._reactName,E=[];s!==null&&s!==c;){var A=s,H=A.alternate,$=A.stateNode;if(A=A.tag,H!==null&&H===c)break;A!==5&&A!==26&&A!==27||$===null||(H=$,h?($=Ks(s,m),$!=null&&E.unshift(No(s,$,H))):h||($=Ks(s,m),$!=null&&E.push(No(s,$,H)))),s=s.return}E.length!==0&&n.push({event:i,listeners:E})}var Vx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function Ev(n){return(typeof n=="string"?n:""+n).replace(Vx,`
`).replace(Gx,"")}function Tv(n,i){return i=Ev(i),Ev(n)===i}function uc(){}function ze(n,i,s,c,h,m){switch(s){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Xn(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Xn(n,""+c);break;case"className":Bt(n,"class",c);break;case"tabIndex":Bt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(n,s,c);break;case"style":Ap(n,c,m);break;case"data":if(i!=="object"){Bt(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=_l(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&ze(n,i,"name",h.name,h,null),ze(n,i,"formEncType",h.formEncType,h,null),ze(n,i,"formMethod",h.formMethod,h,null),ze(n,i,"formTarget",h.formTarget,h,null)):(ze(n,i,"encType",h.encType,h,null),ze(n,i,"method",h.method,h,null),ze(n,i,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=_l(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=uc);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=_l(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Se("beforetoggle",n),Se("toggle",n),Ut(n,"popover",c);break;case"xlinkActuate":Nt(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Nt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Nt(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Nt(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Nt(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Nt(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ut(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=_y.get(s)||s,Ut(n,s,c))}}function ih(n,i,s,c,h,m){switch(s){case"style":Ap(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Xn(n,c):(typeof c=="number"||typeof c=="bigint")&&Xn(n,""+c);break;case"onScroll":c!=null&&Se("scroll",n);break;case"onScrollEnd":c!=null&&Se("scrollend",n);break;case"onClick":c!=null&&(n.onclick=uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=n[nn]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(i,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,c,h);break t}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Ut(n,s,c)}}}function Cn(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var c=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ze(n,i,m,E,s,null)}}h&&ze(n,i,"srcSet",s.srcSet,s,null),c&&ze(n,i,"src",s.src,s,null);return;case"input":Se("invalid",n);var A=m=E=h=null,H=null,$=null;for(c in s)if(s.hasOwnProperty(c)){var ht=s[c];if(ht!=null)switch(c){case"name":h=ht;break;case"type":E=ht;break;case"checked":H=ht;break;case"defaultChecked":$=ht;break;case"value":m=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:ze(n,i,c,ht,s,null)}}zn(n,m,A,H,$,E,h,!1),ye(n);return;case"select":Se("invalid",n),c=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":c=A;default:ze(n,i,h,A,s,null)}i=m,s=E,n.multiple=!!c,i!=null?an(n,!!c,i,!1):s!=null&&an(n,!!c,s,!0);return;case"textarea":Se("invalid",n),m=h=c=null;for(E in s)if(s.hasOwnProperty(E)&&(A=s[E],A!=null))switch(E){case"value":c=A;break;case"defaultValue":h=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ze(n,i,E,A,s,null)}Br(n,c,h,m),ye(n);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(c=s[H],c!=null))switch(H){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ze(n,i,H,c,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(c=0;c<Lo.length;c++)Se(Lo[c],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(c=s[$],c!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ze(n,i,$,c,s,null)}return;default:if(_u(i)){for(ht in s)s.hasOwnProperty(ht)&&(c=s[ht],c!==void 0&&ih(n,i,ht,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&ze(n,i,A,c,s,null))}function kx(n,i,s,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,A=null,H=null,$=null,ht=null;for(rt in s){var gt=s[rt];if(s.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":H=gt;default:c.hasOwnProperty(rt)||ze(n,i,rt,null,c,gt)}}for(var at in c){var rt=c[at];if(gt=s[at],c.hasOwnProperty(at)&&(rt!=null||gt!=null))switch(at){case"type":m=rt;break;case"name":h=rt;break;case"checked":$=rt;break;case"defaultChecked":ht=rt;break;case"value":E=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:rt!==gt&&ze(n,i,at,rt,c,gt)}}Ge(n,E,A,H,$,ht,m,h);return;case"select":rt=E=A=at=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":rt=H;default:c.hasOwnProperty(m)||ze(n,i,m,null,c,H)}for(h in c)if(m=c[h],H=s[h],c.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":at=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==H&&ze(n,i,h,m,c,H)}i=A,s=E,c=rt,at!=null?an(n,!!s,at,!1):!!c!=!!s&&(i!=null?an(n,!!s,i,!0):an(n,!!s,s?[]:"",!1));return;case"textarea":rt=at=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(n,i,A,null,c,h)}for(E in c)if(h=c[E],m=s[E],c.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":at=h;break;case"defaultValue":rt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&ze(n,i,E,h,c,m)}An(n,at,rt);return;case"option":for(var ie in s)if(at=s[ie],s.hasOwnProperty(ie)&&at!=null&&!c.hasOwnProperty(ie))switch(ie){case"selected":n.selected=!1;break;default:ze(n,i,ie,null,c,at)}for(H in c)if(at=c[H],rt=s[H],c.hasOwnProperty(H)&&at!==rt&&(at!=null||rt!=null))switch(H){case"selected":n.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:ze(n,i,H,at,c,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)at=s[te],s.hasOwnProperty(te)&&at!=null&&!c.hasOwnProperty(te)&&ze(n,i,te,null,c,at);for($ in c)if(at=c[$],rt=s[$],c.hasOwnProperty($)&&at!==rt&&(at!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:ze(n,i,$,at,c,rt)}return;default:if(_u(i)){for(var He in s)at=s[He],s.hasOwnProperty(He)&&at!==void 0&&!c.hasOwnProperty(He)&&ih(n,i,He,void 0,c,at);for(ht in c)at=c[ht],rt=s[ht],!c.hasOwnProperty(ht)||at===rt||at===void 0&&rt===void 0||ih(n,i,ht,at,c,rt);return}}for(var j in s)at=s[j],s.hasOwnProperty(j)&&at!=null&&!c.hasOwnProperty(j)&&ze(n,i,j,null,c,at);for(gt in c)at=c[gt],rt=s[gt],!c.hasOwnProperty(gt)||at===rt||at==null&&rt==null||ze(n,i,gt,at,c,rt)}var ah=null,rh=null;function fc(n){return n.nodeType===9?n:n.ownerDocument}function bv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Av(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function sh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oh=null;function Xx(){var n=window.event;return n&&n.type==="popstate"?n===oh?!1:(oh=n,!0):(oh=null,!1)}var wv=typeof setTimeout=="function"?setTimeout:void 0,Wx=typeof clearTimeout=="function"?clearTimeout:void 0,Rv=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rv<"u"?function(n){return Rv.resolve(null).then(n).catch(Yx)}:wv;function Yx(n){setTimeout(function(){throw n})}function Pa(n){return n==="head"}function Cv(n,i){var s=i,c=0,h=0;do{var m=s.nextSibling;if(n.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<c&&8>c){s=c;var E=n.ownerDocument;if(s&1&&Oo(E.documentElement),s&2&&Oo(E.body),s&4)for(s=E.head,Oo(s),E=s.firstChild;E;){var A=E.nextSibling,H=E.nodeName;E[Ni]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=A}}if(h===0){n.removeChild(m),Go(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=m}while(s);Go(i)}function lh(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":lh(s),Ir(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function jx(n,i,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Ni])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=bi(n.nextSibling),n===null)break}return null}function Zx(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=bi(n.nextSibling),n===null))return null;return n}function ch(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Kx(n,i){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")i();else{var c=function(){i(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function bi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var uh=null;function Dv(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}function Uv(n,i,s){switch(i=fc(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Oo(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ir(n)}var gi=new Map,Lv=new Set;function hc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var sa=Q.d;Q.d={f:Qx,r:Jx,D:$x,C:tS,L:eS,m:nS,X:aS,S:iS,M:rS};function Qx(){var n=sa.f(),i=ic();return n||i}function Jx(n){var i=va(n);i!==null&&i.tag===5&&i.type==="form"?Jm(i):sa.r(n)}var hs=typeof document>"u"?null:document;function Nv(n,i,s){var c=hs;if(c&&typeof i=="string"&&i){var h=xn(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Lv.has(h)||(Lv.add(h),n={rel:n,crossOrigin:s,href:i},c.querySelector(h)===null&&(i=c.createElement("link"),Cn(i,"link",n),un(i),c.head.appendChild(i)))}}function $x(n){sa.D(n),Nv("dns-prefetch",n,null)}function tS(n,i){sa.C(n,i),Nv("preconnect",n,i)}function eS(n,i,s){sa.L(n,i,s);var c=hs;if(c&&n&&i){var h='link[rel="preload"][as="'+xn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+xn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+xn(s.imageSizes)+'"]')):h+='[href="'+xn(n)+'"]';var m=h;switch(i){case"style":m=ds(n);break;case"script":m=ps(n)}gi.has(m)||(n=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),gi.set(m,n),c.querySelector(h)!==null||i==="style"&&c.querySelector(Po(m))||i==="script"&&c.querySelector(Io(m))||(i=c.createElement("link"),Cn(i,"link",n),un(i),c.head.appendChild(i)))}}function nS(n,i){sa.m(n,i);var s=hs;if(s&&n){var c=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+xn(c)+'"][href="'+xn(n)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ps(n)}if(!gi.has(m)&&(n=v({rel:"modulepreload",href:n},i),gi.set(m,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Io(m)))return}c=s.createElement("link"),Cn(c,"link",n),un(c),s.head.appendChild(c)}}}function iS(n,i,s){sa.S(n,i,s);var c=hs;if(c&&n){var h=_a(c).hoistableStyles,m=ds(n);i=i||"default";var E=h.get(m);if(!E){var A={loading:0,preload:null};if(E=c.querySelector(Po(m)))A.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},s),(s=gi.get(m))&&fh(n,s);var H=E=c.createElement("link");un(H),Cn(H,"link",n),H._p=new Promise(function($,ht){H.onload=$,H.onerror=ht}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,dc(E,i,c)}E={type:"stylesheet",instance:E,count:1,state:A},h.set(m,E)}}}function aS(n,i){sa.X(n,i);var s=hs;if(s&&n){var c=_a(s).hoistableScripts,h=ps(n),m=c.get(h);m||(m=s.querySelector(Io(h)),m||(n=v({src:n,async:!0},i),(i=gi.get(h))&&hh(n,i),m=s.createElement("script"),un(m),Cn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function rS(n,i){sa.M(n,i);var s=hs;if(s&&n){var c=_a(s).hoistableScripts,h=ps(n),m=c.get(h);m||(m=s.querySelector(Io(h)),m||(n=v({src:n,async:!0,type:"module"},i),(i=gi.get(h))&&hh(n,i),m=s.createElement("script"),un(m),Cn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function Ov(n,i,s,c){var h=(h=dt.current)?hc(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ds(s.href),s=_a(h).hoistableStyles,c=s.get(i),c||(c={type:"style",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ds(s.href);var m=_a(h).hoistableStyles,E=m.get(n);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=h.querySelector(Po(n)))&&!m._p&&(E.instance=m,E.state.loading=5),gi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(n,s),m||sS(h,n,s,E.state))),i&&c===null)throw Error(a(528,""));return E}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ps(s),s=_a(h).hoistableScripts,c=s.get(i),c||(c={type:"script",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function ds(n){return'href="'+xn(n)+'"'}function Po(n){return'link[rel="stylesheet"]['+n+"]"}function Pv(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function sS(n,i,s,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Cn(i,"link",s),un(i),n.head.appendChild(i))}function ps(n){return'[src="'+xn(n)+'"]'}function Io(n){return"script[async]"+n}function Iv(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+xn(s.href)+'"]');if(c)return i.instance=c,un(c),c;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),un(c),Cn(c,"style",h),dc(c,s.precedence,n),i.instance=c;case"stylesheet":h=ds(s.href);var m=n.querySelector(Po(h));if(m)return i.state.loading|=4,i.instance=m,un(m),m;c=Pv(s),(h=gi.get(h))&&fh(c,h),m=(n.ownerDocument||n).createElement("link"),un(m);var E=m;return E._p=new Promise(function(A,H){E.onload=A,E.onerror=H}),Cn(m,"link",c),i.state.loading|=4,dc(m,s.precedence,n),i.instance=m;case"script":return m=ps(s.src),(h=n.querySelector(Io(m)))?(i.instance=h,un(h),h):(c=s,(h=gi.get(m))&&(c=v({},s),hh(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),un(h),Cn(h,"link",c),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,dc(c,s.precedence,n));return i.instance}function dc(n,i,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,E=0;E<c.length;E++){var A=c[E];if(A.dataset.precedence===i)m=A;else if(m!==h)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function fh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function hh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var pc=null;function Bv(n,i,s){if(pc===null){var c=new Map,h=pc=new Map;h.set(s,c)}else h=pc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var m=s[h];if(!(m[Ni]||m[mn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=n+E;var A=c.get(E);A?A.push(m):c.set(E,[m])}}return c}function Fv(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function oS(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Bo=null;function lS(){}function cS(n,i,s){if(Bo===null)throw Error(a(475));var c=Bo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=ds(s.href),m=n.querySelector(Po(h));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=mc.bind(c),n.then(c,c)),i.state.loading|=4,i.instance=m,un(m);return}m=n.ownerDocument||n,s=Pv(s),(h=gi.get(h))&&fh(s,h),m=m.createElement("link"),un(m);var E=m;E._p=new Promise(function(A,H){E.onload=A,E.onerror=H}),Cn(m,"link",s),i.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(c.count++,i=mc.bind(c),n.addEventListener("load",i),n.addEventListener("error",i))}}function uS(){if(Bo===null)throw Error(a(475));var n=Bo;return n.stylesheets&&n.count===0&&dh(n,n.stylesheets),0<n.count?function(i){var s=setTimeout(function(){if(n.stylesheets&&dh(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(s)}}:null}function mc(){if(this.count--,this.count===0){if(this.stylesheets)dh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var gc=null;function dh(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,gc=new Map,i.forEach(fS,n),gc=null,mc.call(n))}function fS(n,i){if(!(i.state.loading&4)){var s=gc.get(n);if(s)var c=s.get(null);else{s=new Map,gc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),c=E)}c&&s.set(null,c)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||c,m===c&&s.set(null,h),s.set(E,h),this.count++,c=mc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var Fo={$$typeof:R,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function hS(n,i,s,c,h,m,E,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Hv(n,i,s,c,h,m,E,A,H,$,ht,gt){return n=new hS(n,i,s,E,A,H,$,gt),i=1,m===!0&&(i|=24),m=$n(3,null,null,i),n.current=m,m.stateNode=n,i=Yu(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:i},Qu(m),n}function Vv(n){return n?(n=Wr,n):Wr}function Gv(n,i,s,c,h,m){h=Vv(h),c.context===null?c.context=h:c.pendingContext=h,c=Ma(i),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=Ea(n,c,i),s!==null&&(ai(s,n,i),po(s,n,i))}function kv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function ph(n,i){kv(n,i),(n=n.alternate)&&kv(n,i)}function Xv(n){if(n.tag===13){var i=Xr(n,67108864);i!==null&&ai(i,n,67108864),ph(n,67108864)}}var vc=!0;function dS(n,i,s,c){var h=F.T;F.T=null;var m=Q.p;try{Q.p=2,mh(n,i,s,c)}finally{Q.p=m,F.T=h}}function pS(n,i,s,c){var h=F.T;F.T=null;var m=Q.p;try{Q.p=8,mh(n,i,s,c)}finally{Q.p=m,F.T=h}}function mh(n,i,s,c){if(vc){var h=gh(c);if(h===null)nh(n,i,c,_c,s),qv(n,c);else if(gS(h,n,i,s,c))c.stopPropagation();else if(qv(n,c),i&4&&-1<mS.indexOf(n)){for(;h!==null;){var m=va(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Kt(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var H=1<<31-Pt(E);A.entanglements[1]|=H,E&=~H}Fi(m),(Pe&6)===0&&(ec=Ft()+500,Uo(0))}}break;case 13:A=Xr(m,2),A!==null&&ai(A,m,2),ic(),ph(m,2)}if(m=gh(c),m===null&&nh(n,i,c,_c,s),m===h)break;h=m}h!==null&&c.stopPropagation()}else nh(n,i,c,null,s)}}function gh(n){return n=xu(n),vh(n)}var _c=null;function vh(n){if(_c=null,n=qi(n),n!==null){var i=l(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=u(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return _c=n,null}function Wv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case zt:return 2;case le:return 8;case Je:case $e:return 32;case P:return 268435456;default:return 32}default:return 32}}var _h=!1,Ia=null,Ba=null,Fa=null,zo=new Map,Ho=new Map,za=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qv(n,i){switch(n){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(i.pointerId)}}function Vo(n,i,s,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=va(i),i!==null&&Xv(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function gS(n,i,s,c,h){switch(i){case"focusin":return Ia=Vo(Ia,n,i,s,c,h),!0;case"dragenter":return Ba=Vo(Ba,n,i,s,c,h),!0;case"mouseover":return Fa=Vo(Fa,n,i,s,c,h),!0;case"pointerover":var m=h.pointerId;return zo.set(m,Vo(zo.get(m)||null,n,i,s,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Ho.set(m,Vo(Ho.get(m)||null,n,i,s,c,h)),!0}return!1}function Yv(n){var i=qi(n.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){n.blockedOn=i,Si(n.priority,function(){if(s.tag===13){var c=ii();c=se(c);var h=Xr(s,c);h!==null&&ai(h,s,c),ph(s,c)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=gh(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);yu=c,s.target.dispatchEvent(c),yu=null}else return i=va(s),i!==null&&Xv(i),n.blockedOn=s,!1;i.shift()}return!0}function jv(n,i,s){yc(n)&&s.delete(i)}function vS(){_h=!1,Ia!==null&&yc(Ia)&&(Ia=null),Ba!==null&&yc(Ba)&&(Ba=null),Fa!==null&&yc(Fa)&&(Fa=null),zo.forEach(jv),Ho.forEach(jv)}function xc(n,i){n.blockedOn===i&&(n.blockedOn=null,_h||(_h=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vS)))}var Sc=null;function Zv(n){Sc!==n&&(Sc=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Sc===n&&(Sc=null);for(var i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],h=n[i+2];if(typeof c!="function"){if(vh(c||s)===null)continue;break}var m=va(s);m!==null&&(n.splice(i,3),i-=3,vf(m,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function Go(n){function i(H){return xc(H,n)}Ia!==null&&xc(Ia,n),Ba!==null&&xc(Ba,n),Fa!==null&&xc(Fa,n),zo.forEach(i),Ho.forEach(i);for(var s=0;s<za.length;s++){var c=za[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<za.length&&(s=za[0],s.blockedOn===null);)Yv(s),s.blockedOn===null&&za.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],m=s[c+1],E=h[nn]||null;if(typeof m=="function")E||Zv(s);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[nn]||null)A=E.formAction;else if(vh(h)!==null)continue}else A=E.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),Zv(s)}}}function yh(n){this._internalRoot=n}Mc.prototype.render=yh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,c=ii();Gv(s,c,n,i,null,null)},Mc.prototype.unmount=yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gv(n.current,2,null,n,null,null),ic(),i[Li]=null}};function Mc(n){this._internalRoot=n}Mc.prototype.unstable_scheduleHydration=function(n){if(n){var i=we();n={blockedOn:null,target:n,priority:i};for(var s=0;s<za.length&&i!==0&&i<za[s].priority;s++);za.splice(s,0,n),s===0&&Yv(n)}};var Kv=t.version;if(Kv!=="19.1.1")throw Error(a(527,Kv,"19.1.1"));Q.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(i),n=n!==null?d(n):null,n=n===null?null:n.stateNode,n};var _S={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{ft=Ec.inject(_S),_t=Ec}catch{}}return Xo.createRoot=function(n,i){if(!r(n))throw Error(a(299));var s=!1,c="",h=hg,m=dg,E=pg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=Hv(n,1,!1,null,null,s,c,h,m,E,A,null),n[Li]=i.current,eh(n),new yh(i)},Xo.hydrateRoot=function(n,i,s){if(!r(n))throw Error(a(299));var c=!1,h="",m=hg,E=dg,A=pg,H=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=Hv(n,1,!0,i,s??null,c,h,m,E,A,H,$),i.context=Vv(null),s=i.current,c=ii(),c=se(c),h=Ma(c),h.callback=null,Ea(s,h,c),s=c,i.current.lanes=s,It(i,s),Fi(i),n[Li]=i.current,eh(n),new Mc(i)},Xo.version="19.1.1",Xo}var s_;function RS(){if(s_)return Mh.exports;s_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Mh.exports=wS(),Mh.exports}var CS=RS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cu="179",DS=0,o_=1,US=2,b0=1,A0=2,da=3,Ja=0,Qn=1,Kn=2,Ka=0,Ps=1,l_=2,c_=3,u_=4,LS=5,br=100,NS=101,OS=102,PS=103,IS=104,BS=200,FS=201,zS=202,HS=203,hd=204,dd=205,VS=206,GS=207,kS=208,XS=209,WS=210,qS=211,YS=212,jS=213,ZS=214,pd=0,md=1,gd=2,Fs=3,vd=4,_d=5,yd=6,xd=7,uu=0,KS=1,QS=2,Qa=0,JS=1,$S=2,tM=3,eM=4,nM=5,iM=6,aM=7,f_="attached",rM="detached",w0=300,zs=301,Hs=302,nu=303,Sd=304,fu=306,nl=1e3,pa=1001,Md=1002,ci=1003,sM=1004,Tc=1005,Vi=1006,Ah=1007,wr=1008,Wi=1009,R0=1010,C0=1011,il=1012,ip=1013,Cr=1014,Gi=1015,ul=1016,ap=1017,rp=1018,al=1020,D0=35902,U0=1021,L0=1022,xi=1023,rl=1026,sl=1027,N0=1028,sp=1029,O0=1030,op=1031,lp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,Ed=35840,Td=35841,bd=35842,Ad=35843,wd=36196,Rd=37492,Cd=37496,Dd=37808,Ud=37809,Ld=37810,Nd=37811,Od=37812,Pd=37813,Id=37814,Bd=37815,Fd=37816,zd=37817,Hd=37818,Vd=37819,Gd=37820,kd=37821,tu=36492,Xd=36494,Wd=36495,P0=36283,qd=36284,Yd=36285,jd=36286,oM=2200,lM=2201,cM=2202,iu=2300,Zd=2301,wh=2302,Ls=2400,Ns=2401,au=2402,cp=2500,uM=2501,fM=3200,hM=3201,up=0,dM=1,ja="",_i="srgb",Vs="srgb-linear",ru="linear",Ve="srgb",ms=7680,h_=519,pM=512,mM=513,gM=514,I0=515,vM=516,_M=517,yM=518,xM=519,d_=35044,p_="300 es",ki=2e3,su=2001;class Ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const a=e[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let m_=1234567;const Jo=Math.PI/180,Gs=180/Math.PI;function $a(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function me(o,t,e){return Math.max(t,Math.min(e,o))}function fp(o,t){return(o%t+t)%t}function SM(o,t,e,a,r){return a+(o-t)*(r-a)/(e-t)}function MM(o,t,e){return o!==t?(e-o)/(t-o):0}function $o(o,t,e){return(1-e)*o+e*t}function EM(o,t,e,a){return $o(o,t,1-Math.exp(-e*a))}function TM(o,t=1){return t-Math.abs(fp(o,t*2)-t)}function bM(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function AM(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function wM(o,t){return o+Math.floor(Math.random()*(t-o+1))}function RM(o,t){return o+Math.random()*(t-o)}function CM(o){return o*(.5-Math.random())}function DM(o){o!==void 0&&(m_=o);let t=m_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function UM(o){return o*Jo}function LM(o){return o*Gs}function NM(o){return(o&o-1)===0&&o!==0}function OM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function PM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function IM(o,t,e,a,r){const l=Math.cos,u=Math.sin,f=l(e/2),p=u(e/2),d=l((t+a)/2),v=u((t+a)/2),g=l((t-a)/2),_=u((t-a)/2),y=l((a-t)/2),S=u((a-t)/2);switch(r){case"XYX":o.set(f*v,p*g,p*_,f*d);break;case"YZY":o.set(p*_,f*v,p*g,f*d);break;case"ZXZ":o.set(p*g,p*_,f*v,f*d);break;case"XZX":o.set(f*v,p*S,p*y,f*d);break;case"YXY":o.set(p*y,f*v,p*S,f*d);break;case"ZYZ":o.set(p*S,p*y,f*v,f*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Us(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Hi={DEG2RAD:Jo,RAD2DEG:Gs,generateUUID:$a,clamp:me,euclideanModulo:fp,mapLinear:SM,inverseLerp:MM,lerp:$o,damp:EM,pingpong:TM,smoothstep:bM,smootherstep:AM,randInt:wM,randFloat:RM,randFloatSpread:CM,seededRandom:DM,degToRad:UM,radToDeg:LM,isPowerOfTwo:NM,ceilPowerOfTwo:OM,floorPowerOfTwo:PM,setQuaternionFromProperEuler:IM,normalize:Vn,denormalize:Us};class Ee{constructor(t=0,e=0){Ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,a=this.y,r=t.elements;return this.x=r[0]*e+r[3]*a+r[6],this.y=r[1]*e+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const a=Math.cos(e),r=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*r+t.x,this.y=l*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(t=0,e=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=r}static slerpFlat(t,e,a,r,l,u,f){let p=a[r+0],d=a[r+1],v=a[r+2],g=a[r+3];const _=l[u+0],y=l[u+1],S=l[u+2],T=l[u+3];if(f===0){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(f===1){t[e+0]=_,t[e+1]=y,t[e+2]=S,t[e+3]=T;return}if(g!==T||p!==_||d!==y||v!==S){let M=1-f;const x=p*_+d*y+v*S+g*T,L=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const O=Math.sqrt(R),B=Math.atan2(O,x*L);M=Math.sin(M*B)/O,f=Math.sin(f*B)/O}const w=f*L;if(p=p*M+_*w,d=d*M+y*w,v=v*M+S*w,g=g*M+T*w,M===1-f){const O=1/Math.sqrt(p*p+d*d+v*v+g*g);p*=O,d*=O,v*=O,g*=O}}t[e]=p,t[e+1]=d,t[e+2]=v,t[e+3]=g}static multiplyQuaternionsFlat(t,e,a,r,l,u){const f=a[r],p=a[r+1],d=a[r+2],v=a[r+3],g=l[u],_=l[u+1],y=l[u+2],S=l[u+3];return t[e]=f*S+v*g+p*y-d*_,t[e+1]=p*S+v*_+d*g-f*y,t[e+2]=d*S+v*y+f*_-p*g,t[e+3]=v*S-f*g-p*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,r){return this._x=t,this._y=e,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const a=t._x,r=t._y,l=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),v=f(r/2),g=f(l/2),_=p(a/2),y=p(r/2),S=p(l/2);switch(u){case"XYZ":this._x=_*v*g+d*y*S,this._y=d*y*g-_*v*S,this._z=d*v*S+_*y*g,this._w=d*v*g-_*y*S;break;case"YXZ":this._x=_*v*g+d*y*S,this._y=d*y*g-_*v*S,this._z=d*v*S-_*y*g,this._w=d*v*g+_*y*S;break;case"ZXY":this._x=_*v*g-d*y*S,this._y=d*y*g+_*v*S,this._z=d*v*S+_*y*g,this._w=d*v*g-_*y*S;break;case"ZYX":this._x=_*v*g-d*y*S,this._y=d*y*g+_*v*S,this._z=d*v*S-_*y*g,this._w=d*v*g+_*y*S;break;case"YZX":this._x=_*v*g+d*y*S,this._y=d*y*g+_*v*S,this._z=d*v*S-_*y*g,this._w=d*v*g-_*y*S;break;case"XZY":this._x=_*v*g-d*y*S,this._y=d*y*g-_*v*S,this._z=d*v*S+_*y*g,this._w=d*v*g+_*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const a=e/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,a=e[0],r=e[4],l=e[8],u=e[1],f=e[5],p=e[9],d=e[2],v=e[6],g=e[10],_=a+f+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-p)*y,this._y=(l-d)*y,this._z=(u-r)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(v-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(l+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(l-d)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(u-r)/y,this._x=(l+d)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,e/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const a=t._x,r=t._y,l=t._z,u=t._w,f=e._x,p=e._y,d=e._z,v=e._w;return this._x=a*v+u*f+r*d-l*p,this._y=r*v+u*p+l*f-a*d,this._z=l*v+u*d+a*p-r*f,this._w=u*v-a*f-r*p-l*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const a=this._x,r=this._y,l=this._z,u=this._w;let f=u*t._w+a*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=a,this._y=r,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-e;return this._w=y*u+e*this._w,this._x=y*a+e*this._x,this._y=y*r+e*this._y,this._z=y*l+e*this._z,this.normalize(),this}const d=Math.sqrt(p),v=Math.atan2(d,f),g=Math.sin((1-e)*v)/d,_=Math.sin(e*v)/d;return this._w=u*g+this._w*_,this._x=a*g+this._x*_,this._y=r*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,a=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(g_.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(g_.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*a+l[6]*r,this.y=l[1]*e+l[4]*a+l[7]*r,this.z=l[2]*e+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=t.elements,u=1/(l[3]*e+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*e+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*e+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(t){const e=this.x,a=this.y,r=this.z,l=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*r-f*a),v=2*(f*e-l*r),g=2*(l*a-u*e);return this.x=e+p*d+u*g-f*v,this.y=a+p*v+f*d-l*g,this.z=r+p*g+l*v-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*a+l[8]*r,this.y=l[1]*e+l[5]*a+l[9]*r,this.z=l[2]*e+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const a=t.x,r=t.y,l=t.z,u=e.x,f=e.y,p=e.z;return this.x=r*p-l*f,this.y=l*u-a*p,this.z=a*f-r*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return e*e+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){const r=Math.sin(e)*t;return this.x=r*Math.sin(a),this.y=Math.cos(e)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,a=Math.sqrt(1-e*e);return this.x=a*Math.cos(t),this.y=e,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new W,g_=new oi;class ce{constructor(t,e,a,r,l,u,f,p,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,u,f,p,d)}set(t,e,a,r,l,u,f,p,d){const v=this.elements;return v[0]=t,v[1]=r,v[2]=f,v[3]=e,v[4]=l,v[5]=p,v[6]=a,v[7]=u,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],v=a[4],g=a[7],_=a[2],y=a[5],S=a[8],T=r[0],M=r[3],x=r[6],L=r[1],R=r[4],w=r[7],O=r[2],B=r[5],z=r[8];return l[0]=u*T+f*L+p*O,l[3]=u*M+f*R+p*B,l[6]=u*x+f*w+p*z,l[1]=d*T+v*L+g*O,l[4]=d*M+v*R+g*B,l[7]=d*x+v*w+g*z,l[2]=_*T+y*L+S*O,l[5]=_*M+y*R+S*B,l[8]=_*x+y*w+S*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],v=t[8];return e*u*v-e*f*d-a*l*v+a*f*p+r*l*d-r*u*p}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],v=t[8],g=v*u-f*d,_=f*p-v*l,y=d*l-u*p,S=e*g+a*_+r*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=g*T,t[1]=(r*d-v*a)*T,t[2]=(f*a-r*u)*T,t[3]=_*T,t[4]=(v*e-r*p)*T,t[5]=(r*l-f*e)*T,t[6]=y*T,t[7]=(a*p-d*e)*T,t[8]=(u*e-a*l)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,r,l,u,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-r*d,r*p,-r*(-d*u+p*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(Ch.makeScale(t,e)),this}rotate(t){return this.premultiply(Ch.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ch.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<9;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new ce;function B0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ol(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function BM(){const o=ol("canvas");return o.style.display="block",o}const v_={};function Is(o){o in v_||(v_[o]=!0,console.warn(o))}function FM(o,t,e){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:a()}}setTimeout(l,e)})}const __=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zM(){const o={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ve&&(r.r=ma(r.r),r.g=ma(r.g),r.b=ma(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ve&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ja?ru:this.spaces[r].transfer},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Is("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Is("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Vs]:{primaries:t,whitePoint:a,transfer:ru,toXYZ:__,fromXYZ:y_,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:a,transfer:Ve,toXYZ:__,fromXYZ:y_,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Ue=zM();function ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gs;class HM{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{gs===void 0&&(gs=ol("canvas")),gs.width=t.width,gs.height=t.height;const r=gs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=gs}return a.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ol("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=ma(l[u]/255)*255;return a.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(ma(e[a]/255)*255):e[a]=ma(e[a]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VM=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=$a(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(Dh(r[u].image)):l.push(Dh(r[u]))}else l=Dh(r);a.url=l}return e||(t.images[this.uuid]=a),a}}function Dh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GM=0;const Uh=new W;class bn extends Ur{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,a=pa,r=pa,l=Vi,u=wr,f=xi,p=Wi,d=bn.DEFAULT_ANISOTROPY,v=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=$a(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nl:t.x=t.x-Math.floor(t.x);break;case pa:t.x=t.x<0?0:1;break;case Md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nl:t.y=t.y-Math.floor(t.y);break;case pa:t.y=t.y<0?0:1;break;case Md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=w0;bn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,a=0,r=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,a,r){return this.x=t,this.y=e,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*e+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*e+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*e+u[7]*a+u[11]*r+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,a,r,l;const p=t.elements,d=p[0],v=p[4],g=p[8],_=p[1],y=p[5],S=p[9],T=p[2],M=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-T)<.01&&Math.abs(S-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+T)<.1&&Math.abs(S+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(d+1)/2,w=(y+1)/2,O=(x+1)/2,B=(v+_)/4,z=(g+T)/4,G=(S+M)/4;return R>w&&R>O?R<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(R),r=B/a,l=z/a):w>O?w<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(w),a=B/r,l=G/r):O<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(O),a=z/l,r=G/l),this.set(a,r,l,e),this}let L=Math.sqrt((M-S)*(M-S)+(g-T)*(g-T)+(_-v)*(_-v));return Math.abs(L)<.001&&(L=1),this.x=(M-S)/L,this.y=(g-T)/L,this.z=(_-v)/L,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this.w=t.w+(e.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends Ur{constructor(t=1,e=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=a.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const r={width:t,height:e,depth:a.depth},l=new bn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const e={minFilter:Vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,a=1){if(this.width!==t||this.height!==e||this.depth!==a){this.width=t,this.height=e,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,a=t.textures.length;e<a;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new hp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends kM{constructor(t=1,e=1,a={}){super(t,e,a),this.isWebGLRenderTarget=!0}}class F0 extends bn{constructor(t=null,e=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class XM extends bn{constructor(t=null,e=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Ai):Ai.fromBufferAttribute(l,u),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),bc.copy(a.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const r=t.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Ac.subVectors(this.max,Wo),vs.subVectors(t.a,Wo),_s.subVectors(t.b,Wo),ys.subVectors(t.c,Wo),Va.subVectors(_s,vs),Ga.subVectors(ys,_s),vr.subVectors(vs,ys);let e=[0,-Va.z,Va.y,0,-Ga.z,Ga.y,0,-vr.z,vr.y,Va.z,0,-Va.x,Ga.z,0,-Ga.x,vr.z,0,-vr.x,-Va.y,Va.x,0,-Ga.y,Ga.x,0,-vr.y,vr.x,0];return!Lh(e,vs,_s,ys,Ac)||(e=[1,0,0,0,1,0,0,0,1],!Lh(e,vs,_s,ys,Ac))?!1:(wc.crossVectors(Va,Ga),e=[wc.x,wc.y,wc.z],Lh(e,vs,_s,ys,Ac))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new W,new W,new W,new W,new W,new W,new W,new W],Ai=new W,bc=new Lr,vs=new W,_s=new W,ys=new W,Va=new W,Ga=new W,vr=new W,Wo=new W,Ac=new W,wc=new W,_r=new W;function Lh(o,t,e,a,r){for(let l=0,u=o.length-3;l<=u;l+=3){_r.fromArray(o,l);const f=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),p=t.dot(_r),d=e.dot(_r),v=a.dot(_r);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>f)return!1}return!0}const WM=new Lr,qo=new W,Nh=new W;class Xs{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const a=this.center;e!==void 0?a.copy(e):WM.setFromPoints(t).getCenter(a);let r=0;for(let l=0,u=t.length;l<u;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const e=qo.lengthSq();if(e>this.radius*this.radius){const a=Math.sqrt(e),r=(a-this.radius)*.5;this.center.addScaledVector(qo,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Nh)),this.expandByPoint(qo.copy(t.center).sub(Nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new W,Oh=new W,Rc=new W,ka=new W,Ph=new W,Cc=new W,Ih=new W;class hu{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=la.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,e),la.distanceToSquared(t))}distanceSqToSegment(t,e,a,r){Oh.copy(t).add(e).multiplyScalar(.5),Rc.copy(e).sub(t).normalize(),ka.copy(this.origin).sub(Oh);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Rc),f=ka.dot(this.direction),p=-ka.dot(Rc),d=ka.lengthSq(),v=Math.abs(1-u*u);let g,_,y,S;if(v>0)if(g=u*p-f,_=u*f-p,S=l*v,g>=0)if(_>=-S)if(_<=S){const T=1/v;g*=T,_*=T,y=g*(g+u*_+2*f)+_*(u*g+_+2*p)+d}else _=l,g=Math.max(0,-(u*_+f)),y=-g*g+_*(_+2*p)+d;else _=-l,g=Math.max(0,-(u*_+f)),y=-g*g+_*(_+2*p)+d;else _<=-S?(g=Math.max(0,-(-u*l+f)),_=g>0?-l:Math.min(Math.max(-l,-p),l),y=-g*g+_*(_+2*p)+d):_<=S?(g=0,_=Math.min(Math.max(-l,-p),l),y=_*(_+2*p)+d):(g=Math.max(0,-(u*l+f)),_=g>0?l:Math.min(Math.max(-l,-p),l),y=-g*g+_*(_+2*p)+d);else _=u>0?-l:l,g=Math.max(0,-(u*_+f)),y=-g*g+_*(_+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Oh).addScaledVector(Rc,_),y}intersectSphere(t,e){la.subVectors(t.center,this.origin);const a=la.dot(this.direction),r=la.dot(la)-a*a,l=t.radius*t.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){const a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,r,l,u,f,p;const d=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(a=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(a=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),v>=0?(l=(t.min.y-_.y)*v,u=(t.max.y-_.y)*v):(l=(t.max.y-_.y)*v,u=(t.min.y-_.y)*v),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),g>=0?(f=(t.min.z-_.z)*g,p=(t.max.z-_.z)*g):(f=(t.max.z-_.z)*g,p=(t.min.z-_.z)*g),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,e)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,e,a,r,l){Ph.subVectors(e,t),Cc.subVectors(a,t),Ih.crossVectors(Ph,Cc);let u=this.direction.dot(Ih),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ka.subVectors(this.origin,t);const p=f*this.direction.dot(Cc.crossVectors(ka,Cc));if(p<0)return null;const d=f*this.direction.dot(Ph.cross(ka));if(d<0||p+d>u)return null;const v=-f*ka.dot(Ih);return v<0?null:this.at(v/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,a,r,l,u,f,p,d,v,g,_,y,S,T,M){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,u,f,p,d,v,g,_,y,S,T,M)}set(t,e,a,r,l,u,f,p,d,v,g,_,y,S,T,M){const x=this.elements;return x[0]=t,x[4]=e,x[8]=a,x[12]=r,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=v,x[10]=g,x[14]=_,x[3]=y,x[7]=S,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){const e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,a=t.elements,r=1/xs.setFromMatrixColumn(t,0).length(),l=1/xs.setFromMatrixColumn(t,1).length(),u=1/xs.setFromMatrixColumn(t,2).length();return e[0]=a[0]*r,e[1]=a[1]*r,e[2]=a[2]*r,e[3]=0,e[4]=a[4]*l,e[5]=a[5]*l,e[6]=a[6]*l,e[7]=0,e[8]=a[8]*u,e[9]=a[9]*u,e[10]=a[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,a=t.x,r=t.y,l=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(r),d=Math.sin(r),v=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const _=u*v,y=u*g,S=f*v,T=f*g;e[0]=p*v,e[4]=-p*g,e[8]=d,e[1]=y+S*d,e[5]=_-T*d,e[9]=-f*p,e[2]=T-_*d,e[6]=S+y*d,e[10]=u*p}else if(t.order==="YXZ"){const _=p*v,y=p*g,S=d*v,T=d*g;e[0]=_+T*f,e[4]=S*f-y,e[8]=u*d,e[1]=u*g,e[5]=u*v,e[9]=-f,e[2]=y*f-S,e[6]=T+_*f,e[10]=u*p}else if(t.order==="ZXY"){const _=p*v,y=p*g,S=d*v,T=d*g;e[0]=_-T*f,e[4]=-u*g,e[8]=S+y*f,e[1]=y+S*f,e[5]=u*v,e[9]=T-_*f,e[2]=-u*d,e[6]=f,e[10]=u*p}else if(t.order==="ZYX"){const _=u*v,y=u*g,S=f*v,T=f*g;e[0]=p*v,e[4]=S*d-y,e[8]=_*d+T,e[1]=p*g,e[5]=T*d+_,e[9]=y*d-S,e[2]=-d,e[6]=f*p,e[10]=u*p}else if(t.order==="YZX"){const _=u*p,y=u*d,S=f*p,T=f*d;e[0]=p*v,e[4]=T-_*g,e[8]=S*g+y,e[1]=g,e[5]=u*v,e[9]=-f*v,e[2]=-d*v,e[6]=y*g+S,e[10]=_-T*g}else if(t.order==="XZY"){const _=u*p,y=u*d,S=f*p,T=f*d;e[0]=p*v,e[4]=-g,e[8]=d*v,e[1]=_*g+T,e[5]=u*v,e[9]=y*g-S,e[2]=S*g-y,e[6]=f*v,e[10]=T*g+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qM,t,YM)}lookAt(t,e,a){const r=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Xa.crossVectors(a,ri),Xa.lengthSq()===0&&(Math.abs(a.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Xa.crossVectors(a,ri)),Xa.normalize(),Dc.crossVectors(ri,Xa),r[0]=Xa.x,r[4]=Dc.x,r[8]=ri.x,r[1]=Xa.y,r[5]=Dc.y,r[9]=ri.y,r[2]=Xa.z,r[6]=Dc.z,r[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],v=a[1],g=a[5],_=a[9],y=a[13],S=a[2],T=a[6],M=a[10],x=a[14],L=a[3],R=a[7],w=a[11],O=a[15],B=r[0],z=r[4],G=r[8],U=r[12],D=r[1],I=r[5],Z=r[9],it=r[13],lt=r[2],ut=r[6],F=r[10],Q=r[14],Y=r[3],yt=r[7],N=r[11],tt=r[15];return l[0]=u*B+f*D+p*lt+d*Y,l[4]=u*z+f*I+p*ut+d*yt,l[8]=u*G+f*Z+p*F+d*N,l[12]=u*U+f*it+p*Q+d*tt,l[1]=v*B+g*D+_*lt+y*Y,l[5]=v*z+g*I+_*ut+y*yt,l[9]=v*G+g*Z+_*F+y*N,l[13]=v*U+g*it+_*Q+y*tt,l[2]=S*B+T*D+M*lt+x*Y,l[6]=S*z+T*I+M*ut+x*yt,l[10]=S*G+T*Z+M*F+x*N,l[14]=S*U+T*it+M*Q+x*tt,l[3]=L*B+R*D+w*lt+O*Y,l[7]=L*z+R*I+w*ut+O*yt,l[11]=L*G+R*Z+w*F+O*N,l[15]=L*U+R*it+w*Q+O*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[4],r=t[8],l=t[12],u=t[1],f=t[5],p=t[9],d=t[13],v=t[2],g=t[6],_=t[10],y=t[14],S=t[3],T=t[7],M=t[11],x=t[15];return S*(+l*p*g-r*d*g-l*f*_+a*d*_+r*f*y-a*p*y)+T*(+e*p*y-e*d*_+l*u*_-r*u*y+r*d*v-l*p*v)+M*(+e*d*g-e*f*y-l*u*g+a*u*y+l*f*v-a*d*v)+x*(-r*f*v-e*p*g+e*f*_+r*u*g-a*u*_+a*p*v)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=a),this}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],v=t[8],g=t[9],_=t[10],y=t[11],S=t[12],T=t[13],M=t[14],x=t[15],L=g*M*d-T*_*d+T*p*y-f*M*y-g*p*x+f*_*x,R=S*_*d-v*M*d-S*p*y+u*M*y+v*p*x-u*_*x,w=v*T*d-S*g*d+S*f*y-u*T*y-v*f*x+u*g*x,O=S*g*p-v*T*p-S*f*_+u*T*_+v*f*M-u*g*M,B=e*L+a*R+r*w+l*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=L*z,t[1]=(T*_*l-g*M*l-T*r*y+a*M*y+g*r*x-a*_*x)*z,t[2]=(f*M*l-T*p*l+T*r*d-a*M*d-f*r*x+a*p*x)*z,t[3]=(g*p*l-f*_*l-g*r*d+a*_*d+f*r*y-a*p*y)*z,t[4]=R*z,t[5]=(v*M*l-S*_*l+S*r*y-e*M*y-v*r*x+e*_*x)*z,t[6]=(S*p*l-u*M*l-S*r*d+e*M*d+u*r*x-e*p*x)*z,t[7]=(u*_*l-v*p*l+v*r*d-e*_*d-u*r*y+e*p*y)*z,t[8]=w*z,t[9]=(S*g*l-v*T*l-S*a*y+e*T*y+v*a*x-e*g*x)*z,t[10]=(u*T*l-S*f*l+S*a*d-e*T*d-u*a*x+e*f*x)*z,t[11]=(v*f*l-u*g*l-v*a*d+e*g*d+u*a*y-e*f*y)*z,t[12]=O*z,t[13]=(v*T*r-S*g*r+S*a*_-e*T*_-v*a*M+e*g*M)*z,t[14]=(S*f*r-u*T*r-S*a*p+e*T*p+u*a*M-e*f*M)*z,t[15]=(u*g*r-v*f*r+v*a*p-e*g*p-u*a*_+e*f*_)*z,this}scale(t){const e=this.elements,a=t.x,r=t.y,l=t.z;return e[0]*=a,e[4]*=r,e[8]*=l,e[1]*=a,e[5]*=r,e[9]*=l,e[2]*=a,e[6]*=r,e[10]*=l,e[3]*=a,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,r))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const a=Math.cos(e),r=Math.sin(e),l=1-a,u=t.x,f=t.y,p=t.z,d=l*u,v=l*f;return this.set(d*u+a,d*f-r*p,d*p+r*f,0,d*f+r*p,v*f+a,v*p-r*u,0,d*p-r*f,v*p+r*u,l*p*p+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,r,l,u){return this.set(1,a,l,0,t,1,u,0,e,r,1,0,0,0,0,1),this}compose(t,e,a){const r=this.elements,l=e._x,u=e._y,f=e._z,p=e._w,d=l+l,v=u+u,g=f+f,_=l*d,y=l*v,S=l*g,T=u*v,M=u*g,x=f*g,L=p*d,R=p*v,w=p*g,O=a.x,B=a.y,z=a.z;return r[0]=(1-(T+x))*O,r[1]=(y+w)*O,r[2]=(S-R)*O,r[3]=0,r[4]=(y-w)*B,r[5]=(1-(_+x))*B,r[6]=(M+L)*B,r[7]=0,r[8]=(S+R)*z,r[9]=(M-L)*z,r[10]=(1-(_+T))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,a){const r=this.elements;let l=xs.set(r[0],r[1],r[2]).length();const u=xs.set(r[4],r[5],r[6]).length(),f=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],wi.copy(this);const d=1/l,v=1/u,g=1/f;return wi.elements[0]*=d,wi.elements[1]*=d,wi.elements[2]*=d,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,e.setFromRotationMatrix(wi),a.x=l,a.y=u,a.z=f,this}makePerspective(t,e,a,r,l,u,f=ki,p=!1){const d=this.elements,v=2*l/(e-t),g=2*l/(a-r),_=(e+t)/(e-t),y=(a+r)/(a-r);let S,T;if(p)S=l/(u-l),T=u*l/(u-l);else if(f===ki)S=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===su)S=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=v,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,a,r,l,u,f=ki,p=!1){const d=this.elements,v=2/(e-t),g=2/(a-r),_=-(e+t)/(e-t),y=-(a+r)/(a-r);let S,T;if(p)S=1/(u-l),T=u/(u-l);else if(f===ki)S=-2/(u-l),T=-(u+l)/(u-l);else if(f===su)S=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=v,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=S,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<16;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}}const xs=new W,wi=new Zt,qM=new W(0,0,0),YM=new W(1,1,1),Xa=new W,Dc=new W,ri=new W,x_=new Zt,S_=new oi;class Dn{constructor(t=0,e=0,a=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,r=this._order){return this._x=t,this._y=e,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){const r=t.elements,l=r[0],u=r[4],f=r[8],p=r[1],d=r[5],v=r[9],g=r[2],_=r[6],y=r[10];switch(e){case"XYZ":this._y=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return x_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(x_,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return S_.setFromEuler(this),this.setFromQuaternion(S_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class dp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jM=0;const M_=new W,Ss=new oi,ca=new Zt,Uc=new W,Yo=new W,ZM=new W,KM=new oi,E_=new W(1,0,0),T_=new W(0,1,0),b_=new W(0,0,1),A_={type:"added"},QM={type:"removed"},Ms={type:"childadded",child:null},Bh={type:"childremoved",child:null};class en extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new W,e=new Dn,a=new oi,r=new W(1,1,1);function l(){a.setFromEuler(e,!1)}function u(){e.setFromQuaternion(a,void 0,!1)}e._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ce}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(E_,t)}rotateY(t){return this.rotateOnAxis(T_,t)}rotateZ(t){return this.rotateOnAxis(b_,t)}translateOnAxis(t,e){return M_.copy(t).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(E_,t)}translateY(t){return this.translateOnAxis(T_,t)}translateZ(t){return this.translateOnAxis(b_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?Uc.copy(t):Uc.set(t,e,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Yo,Uc,this.up):ca.lookAt(Uc,Yo,this.up),this.quaternion.setFromRotationMatrix(ca),r&&(ca.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(ca),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(A_),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(QM),Bh.child=t,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(A_),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,a=[]){this[t]===e&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(t,e,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,ZM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,KM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].updateMatrixWorld(t)}updateWorldMatrix(t,e){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(t.animations,p))}}if(e){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),v=u(t.images),g=u(t.shapes),_=u(t.skeletons),y=u(t.animations),S=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),v.length>0&&(a.images=v),g.length>0&&(a.shapes=g),_.length>0&&(a.skeletons=_),y.length>0&&(a.animations=y),S.length>0&&(a.nodes=S)}return a.object=r,a;function u(f){const p=[];for(const d in f){const v=f[d];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}en.DEFAULT_UP=new W(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new W,ua=new W,Fh=new W,fa=new W,Es=new W,Ts=new W,w_=new W,zh=new W,Hh=new W,Vh=new W,Gh=new Te,kh=new Te,Xh=new Te;class Di{constructor(t=new W,e=new W,a=new W){this.a=t,this.b=e,this.c=a}static getNormal(t,e,a,r){r.subVectors(a,e),Ri.subVectors(t,e),r.cross(Ri);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,a,r,l){Ri.subVectors(r,e),ua.subVectors(a,e),Fh.subVectors(t,e);const u=Ri.dot(Ri),f=Ri.dot(ua),p=Ri.dot(Fh),d=ua.dot(ua),v=ua.dot(Fh),g=u*d-f*f;if(g===0)return l.set(0,0,0),null;const _=1/g,y=(d*p-f*v)*_,S=(u*v-f*p)*_;return l.set(1-y-S,S,y)}static containsPoint(t,e,a,r){return this.getBarycoord(t,e,a,r,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,e,a,r,l,u,f,p){return this.getBarycoord(t,e,a,r,fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,fa.x),p.addScaledVector(u,fa.y),p.addScaledVector(f,fa.z),p)}static getInterpolatedAttribute(t,e,a,r,l,u){return Gh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Gh.fromBufferAttribute(t,e),kh.fromBufferAttribute(t,a),Xh.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(Gh,l.x),u.addScaledVector(kh,l.y),u.addScaledVector(Xh,l.z),u}static isFrontFacing(t,e,a,r){return Ri.subVectors(a,e),ua.subVectors(t,e),Ri.cross(ua).dot(r)<0}set(t,e,a){return this.a.copy(t),this.b.copy(e),this.c.copy(a),this}setFromPointsAndIndices(t,e,a,r){return this.a.copy(t[e]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,a,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ri.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,a,r,l){return Di.getInterpolation(t,this.a,this.b,this.c,e,a,r,l)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const a=this.a,r=this.b,l=this.c;let u,f;Es.subVectors(r,a),Ts.subVectors(l,a),zh.subVectors(t,a);const p=Es.dot(zh),d=Ts.dot(zh);if(p<=0&&d<=0)return e.copy(a);Hh.subVectors(t,r);const v=Es.dot(Hh),g=Ts.dot(Hh);if(v>=0&&g<=v)return e.copy(r);const _=p*g-v*d;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),e.copy(a).addScaledVector(Es,u);Vh.subVectors(t,l);const y=Es.dot(Vh),S=Ts.dot(Vh);if(S>=0&&y<=S)return e.copy(l);const T=y*d-p*S;if(T<=0&&d>=0&&S<=0)return f=d/(d-S),e.copy(a).addScaledVector(Ts,f);const M=v*S-y*g;if(M<=0&&g-v>=0&&y-S>=0)return w_.subVectors(l,r),f=(g-v)/(g-v+(y-S)),e.copy(r).addScaledVector(w_,f);const x=1/(M+T+_);return u=T*x,f=_*x,e.copy(a).addScaledVector(Es,u).addScaledVector(Ts,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Wh(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class ae{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,e),this}setRGB(t,e,a,r=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=a,Ue.colorSpaceToWorking(this,r),this}setHSL(t,e,a,r=Ue.workingColorSpace){if(t=fp(t,1),e=me(e,0,1),a=me(a,0,1),e===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+e):a+e-a*e,u=2*a-l;this.r=Wh(u,l,t+1/3),this.g=Wh(u,l,t),this.b=Wh(u,l,t-1/3)}return Ue.colorSpaceToWorking(this,r),this}setStyle(t,e=_i){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_i){const a=z0[t.toLowerCase()];return a!==void 0?this.setHex(a,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Ue.workingToColorSpace(In.copy(this),t),Math.round(me(In.r*255,0,255))*65536+Math.round(me(In.g*255,0,255))*256+Math.round(me(In.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),e);const a=In.r,r=In.g,l=In.b,u=Math.max(a,r,l),f=Math.min(a,r,l);let p,d;const v=(f+u)/2;if(f===u)p=0,d=0;else{const g=u-f;switch(d=v<=.5?g/(u+f):g/(2-u-f),u){case a:p=(r-l)/g+(r<l?6:0);break;case r:p=(l-a)/g+2;break;case l:p=(a-r)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=v,t}getRGB(t,e=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=_i){Ue.workingToColorSpace(In.copy(this),t);const e=In.r,a=In.g,r=In.b;return t!==_i?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,e,a){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+e,Wa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(Wa),t.getHSL(Lc);const a=$o(Wa.h,Lc.h,e),r=$o(Wa.s,Lc.s,e),l=$o(Wa.l,Lc.l,e);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*a+l[6]*r,this.g=l[1]*e+l[4]*a+l[7]*r,this.b=l[2]*e+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ae;ae.NAMES=z0;let JM=0;class Nr extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Ps,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(a.blending=this.blending),this.side!==Ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==hd&&(a.blendSrc=this.blendSrc),this.blendDst!==dd&&(a.blendDst=this.blendDst),this.blendEquation!==br&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(e){const l=r(t.textures),u=r(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let a=null;if(e!==null){const r=e.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=e[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class H0 extends Nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new W,Nc=new Ee;let $M=0;class Xi{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=d_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)Nc.fromBufferAttribute(this,e),Nc.applyMatrix3(t),this.setXY(e,Nc.x,Nc.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=Us(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),a=Vn(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,r){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),a=Vn(a,this.array),r=Vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,e,a,r,l){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),a=Vn(a,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==d_&&(t.usage=this.usage),t}}class pp extends Xi{constructor(t,e,a){super(new Uint16Array(t),e,a)}}class V0 extends Xi{constructor(t,e,a){super(new Uint32Array(t),e,a)}}class je extends Xi{constructor(t,e,a){super(new Float32Array(t),e,a)}}let tE=0;const vi=new Zt,qh=new en,bs=new W,si=new Lr,jo=new Lr,Tn=new W;class Bn extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B0(t)?V0:pp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ce().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,a){return vi.makeTranslation(t,e,a),this.applyMatrix4(vi),this}scale(t,e,a){return vi.makeScale(t,e,a),this.applyMatrix4(vi),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new je(a,3))}else{const a=Math.min(t.length,e.count);for(let r=0;r<a;r++){const l=t[r];e.setXYZ(r,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const l=e[a];si.setFromBufferAttribute(l),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const a=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const f=e[l];jo.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(si.min,jo.min),si.expandByPoint(Tn),Tn.addVectors(si.max,jo.max),si.expandByPoint(Tn)):(si.expandByPoint(jo.min),si.expandByPoint(jo.max))}si.getCenter(a);let r=0;for(let l=0,u=t.count;l<u;l++)Tn.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(Tn));if(e)for(let l=0,u=e.length;l<u;l++){const f=e[l],p=this.morphTargetsRelative;for(let d=0,v=f.count;d<v;d++)Tn.fromBufferAttribute(f,d),p&&(bs.fromBufferAttribute(t,d),Tn.add(bs)),r=Math.max(r,a.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.position,r=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<a.count;G++)f[G]=new W,p[G]=new W;const d=new W,v=new W,g=new W,_=new Ee,y=new Ee,S=new Ee,T=new W,M=new W;function x(G,U,D){d.fromBufferAttribute(a,G),v.fromBufferAttribute(a,U),g.fromBufferAttribute(a,D),_.fromBufferAttribute(l,G),y.fromBufferAttribute(l,U),S.fromBufferAttribute(l,D),v.sub(d),g.sub(d),y.sub(_),S.sub(_);const I=1/(y.x*S.y-S.x*y.y);isFinite(I)&&(T.copy(v).multiplyScalar(S.y).addScaledVector(g,-y.y).multiplyScalar(I),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-S.x).multiplyScalar(I),f[G].add(T),f[U].add(T),f[D].add(T),p[G].add(M),p[U].add(M),p[D].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let G=0,U=L.length;G<U;++G){const D=L[G],I=D.start,Z=D.count;for(let it=I,lt=I+Z;it<lt;it+=3)x(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const R=new W,w=new W,O=new W,B=new W;function z(G){O.fromBufferAttribute(r,G),B.copy(O);const U=f[G];R.copy(U),R.sub(O.multiplyScalar(O.dot(U))).normalize(),w.crossVectors(B,U);const I=w.dot(p[G])<0?-1:1;u.setXYZW(G,R.x,R.y,R.z,I)}for(let G=0,U=L.length;G<U;++G){const D=L[G],I=D.start,Z=D.count;for(let it=I,lt=I+Z;it<lt;it+=3)z(t.getX(it+0)),z(t.getX(it+1)),z(t.getX(it+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Xi(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let _=0,y=a.count;_<y;_++)a.setXYZ(_,0,0,0);const r=new W,l=new W,u=new W,f=new W,p=new W,d=new W,v=new W,g=new W;if(t)for(let _=0,y=t.count;_<y;_+=3){const S=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);r.fromBufferAttribute(e,S),l.fromBufferAttribute(e,T),u.fromBufferAttribute(e,M),v.subVectors(u,l),g.subVectors(r,l),v.cross(g),f.fromBufferAttribute(a,S),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,M),f.add(v),p.add(v),d.add(v),a.setXYZ(S,f.x,f.y,f.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,y=e.count;_<y;_+=3)r.fromBufferAttribute(e,_+0),l.fromBufferAttribute(e,_+1),u.fromBufferAttribute(e,_+2),v.subVectors(u,l),g.subVectors(r,l),v.cross(g),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(f,p){const d=f.array,v=f.itemSize,g=f.normalized,_=new d.constructor(p.length*v);let y=0,S=0;for(let T=0,M=p.length;T<M;T++){f.isInterleavedBufferAttribute?y=p[T]*f.data.stride+f.offset:y=p[T]*v;for(let x=0;x<v;x++)_[S++]=d[y++]}return new Xi(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bn,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],d=t(p,a);e.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let v=0,g=d.length;v<g;v++){const _=d[v],y=t(_,a);p.push(y)}e.morphAttributes[f]=p}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let g=0,_=d.length;g<_;g++){const y=d[g];v.push(y.toJSON(t.data))}v.length>0&&(r[p]=v,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const d in r){const v=r[d];this.setAttribute(d,v.clone(e))}const l=t.morphAttributes;for(const d in l){const v=[],g=l[d];for(let _=0,y=g.length;_<y;_++)v.push(g[_].clone(e));this.morphAttributes[d]=v}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,v=u.length;d<v;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const R_=new Zt,yr=new hu,Oc=new Xs,C_=new W,Pc=new W,Ic=new W,Bc=new W,Yh=new W,Fc=new W,D_=new W,zc=new W;class li extends en{constructor(t=new Bn,e=new H0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;e.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Fc.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const v=f[p],g=l[p];v!==0&&(Yh.fromBufferAttribute(g,t),u?Fc.addScaledVector(Yh,v):Fc.addScaledVector(Yh.sub(e),v))}e.add(Fc)}return e}raycast(t,e){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Oc.copy(a.boundingSphere),Oc.applyMatrix4(l),yr.copy(t.ray).recast(t.near),!(Oc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Oc,C_)===null||yr.origin.distanceToSquared(C_)>(t.far-t.near)**2))&&(R_.copy(l).invert(),yr.copy(t.ray).applyMatrix4(R_),!(a.boundingBox!==null&&yr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,a){let r;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,v=l.attributes.uv1,g=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const M=_[S],x=u[M.materialIndex],L=Math.max(M.start,y.start),R=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let w=L,O=R;w<O;w+=3){const B=f.getX(w),z=f.getX(w+1),G=f.getX(w+2);r=Hc(this,x,t,a,d,v,g,B,z,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=M.materialIndex,e.push(r))}}else{const S=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let M=S,x=T;M<x;M+=3){const L=f.getX(M),R=f.getX(M+1),w=f.getX(M+2);r=Hc(this,u,t,a,d,v,g,L,R,w),r&&(r.faceIndex=Math.floor(M/3),e.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const M=_[S],x=u[M.materialIndex],L=Math.max(M.start,y.start),R=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let w=L,O=R;w<O;w+=3){const B=w,z=w+1,G=w+2;r=Hc(this,x,t,a,d,v,g,B,z,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=M.materialIndex,e.push(r))}}else{const S=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let M=S,x=T;M<x;M+=3){const L=M,R=M+1,w=M+2;r=Hc(this,u,t,a,d,v,g,L,R,w),r&&(r.faceIndex=Math.floor(M/3),e.push(r))}}}}function eE(o,t,e,a,r,l,u,f){let p;if(t.side===Qn?p=a.intersectTriangle(u,l,r,!0,f):p=a.intersectTriangle(r,l,u,t.side===Ja,f),p===null)return null;zc.copy(f),zc.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(zc);return d<e.near||d>e.far?null:{distance:d,point:zc.clone(),object:o}}function Hc(o,t,e,a,r,l,u,f,p,d){o.getVertexPosition(f,Pc),o.getVertexPosition(p,Ic),o.getVertexPosition(d,Bc);const v=eE(o,t,e,a,Pc,Ic,Bc,D_);if(v){const g=new W;Di.getBarycoord(D_,Pc,Ic,Bc,g),r&&(v.uv=Di.getInterpolatedAttribute(r,f,p,d,g,new Ee)),l&&(v.uv1=Di.getInterpolatedAttribute(l,f,p,d,g,new Ee)),u&&(v.normal=Di.getInterpolatedAttribute(u,f,p,d,g,new W),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:p,c:d,normal:new W,materialIndex:0};Di.getNormal(Pc,Ic,Bc,_.normal),v.face=_,v.barycoord=g}return v}class Ws extends Bn{constructor(t=1,e=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],v=[],g=[];let _=0,y=0;S("z","y","x",-1,-1,a,e,t,u,l,0),S("z","y","x",1,-1,a,e,-t,u,l,1),S("x","z","y",1,1,t,a,e,r,u,2),S("x","z","y",1,-1,t,a,-e,r,u,3),S("x","y","z",1,-1,t,e,a,r,l,4),S("x","y","z",-1,-1,t,e,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(g,2));function S(T,M,x,L,R,w,O,B,z,G,U){const D=w/z,I=O/G,Z=w/2,it=O/2,lt=B/2,ut=z+1,F=G+1;let Q=0,Y=0;const yt=new W;for(let N=0;N<F;N++){const tt=N*I-it;for(let mt=0;mt<ut;mt++){const xt=mt*D-Z;yt[T]=xt*L,yt[M]=tt*R,yt[x]=lt,d.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[x]=B>0?1:-1,v.push(yt.x,yt.y,yt.z),g.push(mt/z),g.push(1-N/G),Q+=1}}for(let N=0;N<G;N++)for(let tt=0;tt<z;tt++){const mt=_+tt+ut*N,xt=_+tt+ut*(N+1),wt=_+(tt+1)+ut*(N+1),nt=_+(tt+1)+ut*N;p.push(mt,xt,nt),p.push(xt,wt,nt),Y+=6}f.addGroup(y,Y,U),y+=Y,_+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(o){const t={};for(const e in o){t[e]={};for(const a in o[e]){const r=o[e][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=r.clone():Array.isArray(r)?t[e][a]=r.slice():t[e][a]=r}}return t}function Gn(o){const t={};for(let e=0;e<o.length;e++){const a=ks(o[e]);for(const r in a)t[r]=a[r]}return t}function nE(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function G0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const iE={clone:ks,merge:Gn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends Nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=rE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=nE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?e.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[r]={type:"m4",value:u.toArray()}:e.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}}class k0 extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new W,U_=new Ee,L_=new Ee;class kn extends k0{constructor(t=50,e=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,a){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,e){return this.getViewBounds(t,U_,L_),e.subVectors(L_,U_)}setViewOffset(t,e,a,r,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jo*.5*this.fov)/this.zoom,a=2*e,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*r/p,e-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,ws=1;class sE extends en{constructor(t,e,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(As,ws,t,e);r.layers=this.layers,this.add(r);const l=new kn(As,ws,t,e);l.layers=this.layers,this.add(l);const u=new kn(As,ws,t,e);u.layers=this.layers,this.add(u);const f=new kn(As,ws,t,e);f.layers=this.layers,this.add(f);const p=new kn(As,ws,t,e);p.layers=this.layers,this.add(p);const d=new kn(As,ws,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[a,r,l,u,f,p]=e;for(const d of e)this.remove(d);if(t===ki)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===su)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,d,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(e,l),t.setRenderTarget(a,1,r),t.render(e,u),t.setRenderTarget(a,2,r),t.render(e,f),t.setRenderTarget(a,3,r),t.render(e,p),t.setRenderTarget(a,4,r),t.render(e,d),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,r),t.render(e,v),t.setRenderTarget(g,_,y),t.xr.enabled=S,a.texture.needsPMREMUpdate=!0}}class X0 extends bn{constructor(t=[],e=zs,a,r,l,u,f,p,d,v){super(t,e,a,r,l,u,f,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oE extends Dr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new X0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ws(5,5,5),l=new ga({name:"CubemapFromEquirect",uniforms:ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:Ka});l.uniforms.tEquirect.value=e;const u=new li(r,l),f=e.minFilter;return e.minFilter===wr&&(e.minFilter=Vi),new sE(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,a,r);t.setRenderTarget(l)}}class Rr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const a of t.hand.values())this._getHandJoint(e,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let r=null,l=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const T of t.hand.values()){const M=e.getJointPose(T,a),x=this._getHandJoint(d,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=v.position.distanceTo(g.position),y=.02,S=.005;d.inputState.pinching&&_>y+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=e.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const a=new Rr;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[e.jointName]=a,t.add(a)}return t.joints[e.jointName]}}class cE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const N_=new W,O_=new Te,P_=new Te,uE=new W,I_=new Zt,Vc=new W,Zh=new Xs,B_=new Zt,Kh=new hu;class fE extends li{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=f_,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lr),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let a=0;a<e.count;a++)this.getVertexPosition(a,Vc),this.boundingBox.expandByPoint(Vc)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let a=0;a<e.count;a++)this.getVertexPosition(a,Vc),this.boundingSphere.expandByPoint(Vc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zh.copy(this.boundingSphere),Zh.applyMatrix4(r),t.ray.intersectsSphere(Zh)!==!1&&(B_.copy(r).invert(),Kh.copy(t.ray).applyMatrix4(B_),!(this.boundingBox!==null&&Kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Kh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Te,e=this.geometry.attributes.skinWeight;for(let a=0,r=e.count;a<r;a++){t.fromBufferAttribute(e,a);const l=1/t.manhattanLength();l!==1/0?t.multiplyScalar(l):t.set(1,0,0,0),e.setXYZW(a,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===f_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const a=this.skeleton,r=this.geometry;O_.fromBufferAttribute(r.attributes.skinIndex,t),P_.fromBufferAttribute(r.attributes.skinWeight,t),N_.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let l=0;l<4;l++){const u=P_.getComponent(l);if(u!==0){const f=O_.getComponent(l);I_.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),e.addScaledVector(uE.copy(N_).applyMatrix4(I_),u)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Kd extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hE extends bn{constructor(t=null,e=1,a=1,r,l,u,f,p,d=ci,v=ci,g,_){super(null,u,f,p,d,v,r,l,g,_),this.isDataTexture=!0,this.image={data:t,width:e,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const F_=new Zt,dE=new Zt;class mp{constructor(t=[],e=[]){this.uuid=$a(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const a=new Zt;this.bones[t]&&a.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const a=this.bones[t];a&&a.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const a=this.bones[t];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const t=this.bones,e=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let l=0,u=t.length;l<u;l++){const f=t[l]?t[l].matrixWorld:dE;F_.multiplyMatrices(f,e[l]),F_.toArray(a,l*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new mp(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const a=new hE(e,t,t,xi,Gi);return a.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=a,this}getBoneByName(t){for(let e=0,a=this.bones.length;e<a;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let a=0,r=t.bones.length;a<r;a++){const l=t.bones[a];let u=e[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new Kd),this.bones.push(u),this.boneInverses.push(new Zt().fromArray(t.boneInverses[a]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,a=this.boneInverses;for(let r=0,l=e.length;r<l;r++){const u=e[r];t.bones.push(u.uuid);const f=a[r];t.boneInverses.push(f.toArray())}return t}}const Qh=new W,pE=new W,mE=new ce;class Er{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,r){return this.normal.set(t,e,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const r=Qh.subVectors(a,e).cross(pE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const a=t.delta(Qh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||mE.getNormalMatrix(t),r=this.coplanarPoint(Qh).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Xs,gE=new Ee(.5,.5),Gc=new W;class gp{constructor(t=new Er,e=new Er,a=new Er,r=new Er,l=new Er,u=new Er){this.planes=[t,e,a,r,l,u]}set(t,e,a,r,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(t){const e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,e=ki,a=!1){const r=this.planes,l=t.elements,u=l[0],f=l[1],p=l[2],d=l[3],v=l[4],g=l[5],_=l[6],y=l[7],S=l[8],T=l[9],M=l[10],x=l[11],L=l[12],R=l[13],w=l[14],O=l[15];if(r[0].setComponents(d-u,y-v,x-S,O-L).normalize(),r[1].setComponents(d+u,y+v,x+S,O+L).normalize(),r[2].setComponents(d+f,y+g,x+T,O+R).normalize(),r[3].setComponents(d-f,y-g,x-T,O-R).normalize(),a)r[4].setComponents(p,_,M,w).normalize(),r[5].setComponents(d-p,y-_,x-M,O-w).normalize();else if(r[4].setComponents(d-p,y-_,x-M,O-w).normalize(),e===ki)r[5].setComponents(d+p,y+_,x+M,O+w).normalize();else if(e===su)r[5].setComponents(p,_,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);const e=gE.distanceTo(t.center);return xr.radius=.7071067811865476+e,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const e=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let a=0;a<6;a++){const r=e[a];if(Gc.x=r.normal.x>0?t.max.x:t.min.x,Gc.y=r.normal.y>0?t.max.y:t.min.y,Gc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class du extends Nr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ou=new W,lu=new W,z_=new Zt,Zo=new hu,kc=new Xs,Jh=new W,H_=new W;class W0 extends en{constructor(t=new Bn,e=new du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[0];for(let r=1,l=e.count;r<l;r++)ou.fromBufferAttribute(e,r-1),lu.fromBufferAttribute(e,r),a[r]=a[r-1],a[r]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new je(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const a=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere),kc.applyMatrix4(r),kc.radius+=l,t.ray.intersectsSphere(kc)===!1)return;z_.copy(r).invert(),Zo.copy(t.ray).applyMatrix4(z_);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,v=a.index,_=a.attributes.position;if(v!==null){const y=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let T=y,M=S-1;T<M;T+=d){const x=v.getX(T),L=v.getX(T+1),R=Xc(this,t,Zo,p,x,L,T);R&&e.push(R)}if(this.isLineLoop){const T=v.getX(S-1),M=v.getX(y),x=Xc(this,t,Zo,p,T,M,S-1);x&&e.push(x)}}else{const y=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let T=y,M=S-1;T<M;T+=d){const x=Xc(this,t,Zo,p,T,T+1,T);x&&e.push(x)}if(this.isLineLoop){const T=Xc(this,t,Zo,p,S-1,y,S-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Xc(o,t,e,a,r,l,u){const f=o.geometry.attributes.position;if(ou.fromBufferAttribute(f,r),lu.fromBufferAttribute(f,l),e.distanceSqToSegment(ou,lu,Jh,H_)>a)return;Jh.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Jh);if(!(d<t.near||d>t.far))return{distance:d,point:H_.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const V_=new W,G_=new W;class q0 extends W0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[];for(let r=0,l=e.count;r<l;r+=2)V_.fromBufferAttribute(e,r),G_.fromBufferAttribute(e,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+V_.distanceTo(G_);t.setAttribute("lineDistance",new je(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends bn{constructor(t,e,a=Cr,r,l,u,f=ci,p=ci,d,v=rl,g=1){if(v!==rl&&v!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:g};super(_,r,l,u,f,p,v,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vp extends Bn{constructor(t=1,e=1,a=1,r=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:a,radialSegments:r,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const d=this;r=Math.floor(r),l=Math.floor(l);const v=[],g=[],_=[],y=[];let S=0;const T=[],M=a/2;let x=0;L(),u===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(y,2));function L(){const w=new W,O=new W;let B=0;const z=(e-t)/a;for(let G=0;G<=l;G++){const U=[],D=G/l,I=D*(e-t)+t;for(let Z=0;Z<=r;Z++){const it=Z/r,lt=it*p+f,ut=Math.sin(lt),F=Math.cos(lt);O.x=I*ut,O.y=-D*a+M,O.z=I*F,g.push(O.x,O.y,O.z),w.set(ut,z,F).normalize(),_.push(w.x,w.y,w.z),y.push(it,1-D),U.push(S++)}T.push(U)}for(let G=0;G<r;G++)for(let U=0;U<l;U++){const D=T[U][G],I=T[U+1][G],Z=T[U+1][G+1],it=T[U][G+1];(t>0||U!==0)&&(v.push(D,I,it),B+=3),(e>0||U!==l-1)&&(v.push(I,Z,it),B+=3)}d.addGroup(x,B,0),x+=B}function R(w){const O=S,B=new Ee,z=new W;let G=0;const U=w===!0?t:e,D=w===!0?1:-1;for(let Z=1;Z<=r;Z++)g.push(0,M*D,0),_.push(0,D,0),y.push(.5,.5),S++;const I=S;for(let Z=0;Z<=r;Z++){const lt=Z/r*p+f,ut=Math.cos(lt),F=Math.sin(lt);z.x=U*F,z.y=M*D,z.z=U*ut,g.push(z.x,z.y,z.z),_.push(0,D,0),B.x=ut*.5+.5,B.y=F*.5*D+.5,y.push(B.x,B.y),S++}for(let Z=0;Z<r;Z++){const it=O+Z,lt=I+Z;w===!0?v.push(lt,lt+1,it):v.push(lt+1,lt,it),G+=3}d.addGroup(x,G,w===!0?1:2),x+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _p extends vp{constructor(t=1,e=1,a=32,r=1,l=!1,u=0,f=Math.PI*2){super(0,t,e,a,r,l,u,f),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:a,heightSegments:r,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(t){return new _p(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const a=this.getUtoTmapping(t);return this.getPoint(a,e)}getPoints(t=5){const e=[];for(let a=0;a<=t;a++)e.push(this.getPoint(a/t));return e}getSpacedPoints(t=5){const e=[];for(let a=0;a<=t;a++)e.push(this.getPointAt(a/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let a,r=this.getPoint(0),l=0;e.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),l+=a.distanceTo(r),e.push(l),r=a;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const a=this.getLengths();let r=0;const l=a.length;let u;e?u=e:u=t*a[l-1];let f=0,p=l-1,d;for(;f<=p;)if(r=Math.floor(f+(p-f)/2),d=a[r]-u,d<0)f=r+1;else if(d>0)p=r-1;else{p=r;break}if(r=p,a[r]===u)return r/(l-1);const v=a[r],_=a[r+1]-v,y=(u-v)/_;return(r+y)/(l-1)}getTangent(t,e){let r=t-1e-4,l=t+1e-4;r<0&&(r=0),l>1&&(l=1);const u=this.getPoint(r),f=this.getPoint(l),p=e||(u.isVector2?new Ee:new W);return p.copy(f).sub(u).normalize(),p}getTangentAt(t,e){const a=this.getUtoTmapping(t);return this.getTangent(a,e)}computeFrenetFrames(t,e=!1){const a=new W,r=[],l=[],u=[],f=new W,p=new Zt;for(let y=0;y<=t;y++){const S=y/t;r[y]=this.getTangentAt(S,new W)}l[0]=new W,u[0]=new W;let d=Number.MAX_VALUE;const v=Math.abs(r[0].x),g=Math.abs(r[0].y),_=Math.abs(r[0].z);v<=d&&(d=v,a.set(1,0,0)),g<=d&&(d=g,a.set(0,1,0)),_<=d&&a.set(0,0,1),f.crossVectors(r[0],a).normalize(),l[0].crossVectors(r[0],f),u[0].crossVectors(r[0],l[0]);for(let y=1;y<=t;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),f.crossVectors(r[y-1],r[y]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(me(r[y-1].dot(r[y]),-1,1));l[y].applyMatrix4(p.makeRotationAxis(f,S))}u[y].crossVectors(r[y],l[y])}if(e===!0){let y=Math.acos(me(l[0].dot(l[t]),-1,1));y/=t,r[0].dot(f.crossVectors(l[0],l[t]))>0&&(y=-y);for(let S=1;S<=t;S++)l[S].applyMatrix4(p.makeRotationAxis(r[S],y*S)),u[S].crossVectors(r[S],l[S])}return{tangents:r,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fl extends Bn{constructor(t=1,e=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:r};const l=t/2,u=e/2,f=Math.floor(a),p=Math.floor(r),d=f+1,v=p+1,g=t/f,_=e/p,y=[],S=[],T=[],M=[];for(let x=0;x<v;x++){const L=x*_-u;for(let R=0;R<d;R++){const w=R*g-l;S.push(w,-L,0),T.push(0,0,1),M.push(R/f),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<f;L++){const R=L+d*x,w=L+d*(x+1),O=L+1+d*(x+1),B=L+1+d*x;y.push(R,w,B),y.push(w,O,B)}this.setIndex(y),this.setAttribute("position",new je(S,3)),this.setAttribute("normal",new je(T,3)),this.setAttribute("uv",new je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.widthSegments,t.heightSegments)}}class yp extends Bn{constructor(t=1,e=32,a=16,r=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:f},e=Math.max(3,Math.floor(e)),a=Math.max(2,Math.floor(a));const p=Math.min(u+f,Math.PI);let d=0;const v=[],g=new W,_=new W,y=[],S=[],T=[],M=[];for(let x=0;x<=a;x++){const L=[],R=x/a;let w=0;x===0&&u===0?w=.5/e:x===a&&p===Math.PI&&(w=-.5/e);for(let O=0;O<=e;O++){const B=O/e;g.x=-t*Math.cos(r+B*l)*Math.sin(u+R*f),g.y=t*Math.cos(u+R*f),g.z=t*Math.sin(r+B*l)*Math.sin(u+R*f),S.push(g.x,g.y,g.z),_.copy(g).normalize(),T.push(_.x,_.y,_.z),M.push(B+w,1-R),L.push(d++)}v.push(L)}for(let x=0;x<a;x++)for(let L=0;L<e;L++){const R=v[x][L+1],w=v[x][L],O=v[x+1][L],B=v[x+1][L+1];(x!==0||u>0)&&y.push(R,w,B),(x!==a-1||p<Math.PI)&&y.push(w,O,B)}this.setIndex(y),this.setAttribute("position",new je(S,3)),this.setAttribute("normal",new je(T,3)),this.setAttribute("uv",new je(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $h extends Nr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pu extends Nr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _E extends Nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yE extends Nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Wc(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function xE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function SE(o){function t(r,l){return o[r]-o[l]}const e=o.length,a=new Array(e);for(let r=0;r!==e;++r)a[r]=r;return a.sort(t),a}function k_(o,t,e){const a=o.length,r=new o.constructor(a);for(let l=0,u=0;u!==a;++l){const f=e[l]*t;for(let p=0;p!==t;++p)r[u++]=o[f+p]}return r}function j0(o,t,e,a){let r=1,l=o[0];for(;l!==void 0&&l[a]===void 0;)l=o[r++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(t.push(l.time),e.push(...u)),l=o[r++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(t.push(l.time),u.toArray(e,e.length)),l=o[r++];while(l!==void 0);else do u=l[a],u!==void 0&&(t.push(l.time),e.push(u)),l=o[r++];while(l!==void 0)}class mu{constructor(t,e,a,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(a),this.sampleValues=e,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let a=this._cachedIndex,r=e[a],l=e[a-1];t:{e:{let u;n:{i:if(!(t<r)){for(let f=a+2;;){if(r===void 0){if(t<l)break i;return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=r,r=e[++a],t<r)break e}u=e.length;break n}if(!(t>=l)){const f=e[1];t<f&&(a=2,l=f);for(let p=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=l,l=e[--a-1],t>=l)break e}u=a,a=0;break n}break t}for(;a<u;){const f=a+u>>>1;t<e[f]?u=f:a=f+1}if(r=e[a],l=e[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,r)}return this.interpolate_(a,l,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r;for(let u=0;u!==r;++u)e[u]=a[l+u];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ME extends mu{constructor(t,e,a,r){super(t,e,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ls,endingEnd:Ls}}intervalChanged_(t,e,a){const r=this.parameterPositions;let l=t-2,u=t+1,f=r[l],p=r[u];if(f===void 0)switch(this.getSettings_().endingStart){case Ns:l=t,f=2*e-a;break;case au:l=r.length-2,f=e+r[l]-r[l+1];break;default:l=t,f=a}if(p===void 0)switch(this.getSettings_().endingEnd){case Ns:u=t,p=2*a-e;break;case au:u=1,p=a+r[1]-r[0];break;default:u=t-1,p=e}const d=(a-e)*.5,v=this.valueSize;this._weightPrev=d/(e-f),this._weightNext=d/(p-a),this._offsetPrev=l*v,this._offsetNext=u*v}interpolate_(t,e,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=t*f,d=p-f,v=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,S=(a-e)/(r-e),T=S*S,M=T*S,x=-_*M+2*_*T-_*S,L=(1+_)*M+(-1.5-2*_)*T+(-.5+_)*S+1,R=(-1-y)*M+(1.5+y)*T+.5*S,w=y*M-y*T;for(let O=0;O!==f;++O)l[O]=x*u[v+O]+L*u[d+O]+R*u[p+O]+w*u[g+O];return l}}class Z0 extends mu{constructor(t,e,a,r){super(t,e,a,r)}interpolate_(t,e,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=t*f,d=p-f,v=(a-e)/(r-e),g=1-v;for(let _=0;_!==f;++_)l[_]=u[d+_]*g+u[p+_]*v;return l}}class EE extends mu{constructor(t,e,a,r){super(t,e,a,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ui{constructor(t,e,a,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wc(e,this.TimeBufferType),this.values=Wc(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let a;if(e.toJSON!==this.toJSON)a=e.toJSON(t);else{a={name:t.name,times:Wc(t.times,Array),values:Wc(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(a.interpolation=r)}return a.type=t.ValueTypeName,a}InterpolantFactoryMethodDiscrete(t){return new EE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Z0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ME(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case iu:e=this.InterpolantFactoryMethodDiscrete;break;case Zd:e=this.InterpolantFactoryMethodLinear;break;case wh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return iu;case this.InterpolantFactoryMethodLinear:return Zd;case this.InterpolantFactoryMethodSmooth:return wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let a=0,r=e.length;a!==r;++a)e[a]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let a=0,r=e.length;a!==r;++a)e[a]*=t}return this}trim(t,e){const a=this.times,r=a.length;let l=0,u=r-1;for(;l!==r&&a[l]<t;)++l;for(;u!==-1&&a[u]>e;)--u;if(++u,l!==0||u!==r){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const a=this.times,r=this.values,l=a.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let u=null;for(let f=0;f!==l;f++){const p=a[f];if(typeof p=="number"&&isNaN(p)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,p),t=!1;break}if(u!==null&&u>p){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,p,u),t=!1;break}u=p}if(r!==void 0&&xE(r))for(let f=0,p=r.length;f!==p;++f){const d=r[f];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===wh,l=t.length-1;let u=1;for(let f=1;f<l;++f){let p=!1;const d=t[f],v=t[f+1];if(d!==v&&(f!==1||d!==t[0]))if(r)p=!0;else{const g=f*a,_=g-a,y=g+a;for(let S=0;S!==a;++S){const T=e[g+S];if(T!==e[_+S]||T!==e[y+S]){p=!0;break}}}if(p){if(f!==u){t[u]=t[f];const g=f*a,_=u*a;for(let y=0;y!==a;++y)e[_+y]=e[g+y]}++u}}if(l>0){t[u]=t[l];for(let f=l*a,p=u*a,d=0;d!==a;++d)e[p+d]=e[f+d];++u}return u!==t.length?(this.times=t.slice(0,u),this.values=e.slice(0,u*a)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),a=this.constructor,r=new a(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=Zd;class qs extends Ui{constructor(t,e,a){super(t,e,a)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=iu;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class K0 extends Ui{constructor(t,e,a,r){super(t,e,a,r)}}K0.prototype.ValueTypeName="color";class ll extends Ui{constructor(t,e,a,r){super(t,e,a,r)}}ll.prototype.ValueTypeName="number";class TE extends mu{constructor(t,e,a,r){super(t,e,a,r)}interpolate_(t,e,a,r){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,p=(a-e)/(r-e);let d=t*f;for(let v=d+f;d!==v;d+=4)oi.slerpFlat(l,0,u,d-f,u,d,p);return l}}class hl extends Ui{constructor(t,e,a,r){super(t,e,a,r)}InterpolantFactoryMethodLinear(t){return new TE(this.times,this.values,this.getValueSize(),t)}}hl.prototype.ValueTypeName="quaternion";hl.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends Ui{constructor(t,e,a){super(t,e,a)}}Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=iu;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class cl extends Ui{constructor(t,e,a,r){super(t,e,a,r)}}cl.prototype.ValueTypeName="vector";class Qd{constructor(t="",e=-1,a=[],r=cp){this.name=t,this.tracks=a,this.duration=e,this.blendMode=r,this.uuid=$a(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],a=t.tracks,r=1/(t.fps||1);for(let u=0,f=a.length;u!==f;++u)e.push(AE(a[u]).scale(r));const l=new this(t.name,t.duration,e,t.blendMode);return l.uuid=t.uuid,l}static toJSON(t){const e=[],a=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let l=0,u=a.length;l!==u;++l)e.push(Ui.toJSON(a[l]));return r}static CreateFromMorphTargetSequence(t,e,a,r){const l=e.length,u=[];for(let f=0;f<l;f++){let p=[],d=[];p.push((f+l-1)%l,f,(f+1)%l),d.push(0,1,0);const v=SE(p);p=k_(p,1,v),d=k_(d,1,v),!r&&p[0]===0&&(p.push(l),d.push(d[0])),u.push(new ll(".morphTargetInfluences["+e[f].name+"]",p,d).scale(1/a))}return new this(t,-1,u)}static findByName(t,e){let a=t;if(!Array.isArray(t)){const r=t;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===e)return a[r];return null}static CreateClipsFromMorphTargetSequences(t,e,a){const r={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,p=t.length;f<p;f++){const d=t[f],v=d.name.match(l);if(v&&v.length>1){const g=v[1];let _=r[g];_||(r[g]=_=[]),_.push(d)}}const u=[];for(const f in r)u.push(this.CreateFromMorphTargetSequence(f,r[f],e,a));return u}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(g,_,y,S,T){if(y.length!==0){const M=[],x=[];j0(y,M,x,S),M.length!==0&&T.push(new g(_,M,x))}},r=[],l=t.name||"default",u=t.fps||30,f=t.blendMode;let p=t.length||-1;const d=t.hierarchy||[];for(let g=0;g<d.length;g++){const _=d[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let S;for(S=0;S<_.length;S++)if(_[S].morphTargets)for(let T=0;T<_[S].morphTargets.length;T++)y[_[S].morphTargets[T]]=-1;for(const T in y){const M=[],x=[];for(let L=0;L!==_[S].morphTargets.length;++L){const R=_[S];M.push(R.time),x.push(R.morphTarget===T?1:0)}r.push(new ll(".morphTargetInfluence["+T+"]",M,x))}p=y.length*u}else{const y=".bones["+e[g].name+"]";a(cl,y+".position",_,"pos",r),a(hl,y+".quaternion",_,"rot",r),a(cl,y+".scale",_,"scl",r)}}return r.length===0?null:new this(l,p,r,f)}resetDuration(){const t=this.tracks;let e=0;for(let a=0,r=t.length;a!==r;++a){const l=this.tracks[a];e=Math.max(e,l.times[l.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ll;case"vector":case"vector2":case"vector3":case"vector4":return cl;case"color":return K0;case"quaternion":return hl;case"bool":case"boolean":return qs;case"string":return Ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function AE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=bE(o.type);if(o.times===void 0){const e=[],a=[];j0(o.keys,e,a,"value"),o.times=e,o.values=a}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const tl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class wE{constructor(t,e,a){const r=this;let l=!1,u=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=a,this.abortController=new AbortController,this.itemStart=function(v){f++,l===!1&&r.onStart!==void 0&&r.onStart(v,u,f),l=!0},this.itemEnd=function(v){u++,r.onProgress!==void 0&&r.onProgress(v,u,f),u===f&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(v){r.onError!==void 0&&r.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,g){return d.push(v,g),this},this.removeHandler=function(v){const g=d.indexOf(v);return g!==-1&&d.splice(g,2),this},this.getHandler=function(v){for(let g=0,_=d.length;g<_;g+=2){const y=d[g],S=d[g+1];if(y.global&&(y.lastIndex=0),y.test(v))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const RE=new wE;class dl{constructor(t){this.manager=t!==void 0?t:RE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const a=this;return new Promise(function(r,l){a.load(t,r,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}dl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ha={};class CE extends Error{constructor(t,e){super(t),this.response=e}}class DE extends dl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,a,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=tl.get(`file:${t}`);if(l!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(l),this.manager.itemEnd(t)},0),l;if(ha[t]!==void 0){ha[t].push({onLoad:e,onProgress:a,onError:r});return}ha[t]=[],ha[t].push({onLoad:e,onProgress:a,onError:r});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const v=ha[t],g=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,S=y!==0;let T=0;const M=new ReadableStream({start(x){L();function L(){g.read().then(({done:R,value:w})=>{if(R)x.close();else{T+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:S,loaded:T,total:y});for(let B=0,z=v.length;B<z;B++){const G=v[B];G.onProgress&&G.onProgress(O)}x.enqueue(w),L()}},R=>{x.error(R)})}}});return new Response(M)}else throw new CE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(v=>new DOMParser().parseFromString(v,f));case"json":return d.json();default:if(f==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(S=>y.decode(S))}}}).then(d=>{tl.add(`file:${t}`,d);const v=ha[t];delete ha[t];for(let g=0,_=v.length;g<_;g++){const y=v[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const v=ha[t];if(v===void 0)throw this.manager.itemError(t),d;delete ha[t];for(let g=0,_=v.length;g<_;g++){const y=v[g];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Rs=new WeakMap;class UE extends dl{constructor(t){super(t)}load(t,e,a,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=tl.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(t),setTimeout(function(){e&&e(u),l.manager.itemEnd(t)},0);else{let g=Rs.get(u);g===void 0&&(g=[],Rs.set(u,g)),g.push({onLoad:e,onError:r})}return u}const f=ol("img");function p(){v(),e&&e(this);const g=Rs.get(this)||[];for(let _=0;_<g.length;_++){const y=g[_];y.onLoad&&y.onLoad(this)}Rs.delete(this),l.manager.itemEnd(t)}function d(g){v(),r&&r(g),tl.remove(`image:${t}`);const _=Rs.get(this)||[];for(let y=0;y<_.length;y++){const S=_[y];S.onError&&S.onError(g)}Rs.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function v(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),tl.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class LE extends dl{constructor(t){super(t)}load(t,e,a,r){const l=new bn,u=new UE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){l.image=f,l.needsUpdate=!0,e!==void 0&&e(l)},a,r),l}}class gu extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const td=new Zt,X_=new W,W_=new W;class xp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,a=this.matrix;X_.setFromMatrixPosition(t.matrixWorld),e.position.copy(X_),W_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(W_),e.updateMatrixWorld(),td.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,e.coordinateSystem,e.reversedDepth),e.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class NE extends xp{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,a=Gs*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,l=t.distance||e.far;(a!==e.fov||r!==e.aspect||l!==e.far)&&(e.fov=a,e.aspect=r,e.far=l,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class OE extends gu{constructor(t,e,a=0,r=Math.PI/3,l=0,u=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=a,this.angle=r,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new NE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const q_=new Zt,Ko=new W,ed=new W;class PE extends xp{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const a=this.camera,r=this.matrix,l=t.distance||a.far;l!==a.far&&(a.far=l,a.updateProjectionMatrix()),Ko.setFromMatrixPosition(t.matrixWorld),a.position.copy(Ko),ed.copy(a.position),ed.add(this._cubeDirections[e]),a.up.copy(this._cubeUps[e]),a.lookAt(ed),a.updateMatrixWorld(),r.makeTranslation(-Ko.x,-Ko.y,-Ko.z),q_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q_,a.coordinateSystem,a.reversedDepth)}}class Y_ extends gu{constructor(t,e,a=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sp extends k0{constructor(t=-1,e=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,u=a+t,f=r+e,p=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class IE extends xp{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q0 extends gu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new IE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class J0 extends gu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class BE{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class FE extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class zE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class HE{constructor(t,e,a){this.binding=t,this.valueSize=a;let r,l,u;switch(e){case"quaternion":r=this._slerp,l=this._slerpAdditive,u=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(a*6),this._workIndex=5;break;case"string":case"bool":r=this._select,l=this._select,u=this._setAdditiveIdentityOther,this.buffer=new Array(a*5);break;default:r=this._lerp,l=this._lerpAdditive,u=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(a*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=l,this._setIdentity=u,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const a=this.buffer,r=this.valueSize,l=t*r+r;let u=this.cumulativeWeight;if(u===0){for(let f=0;f!==r;++f)a[l+f]=a[f];u=e}else{u+=e;const f=e/u;this._mixBufferRegion(a,l,0,f,r)}this.cumulativeWeight=u}accumulateAdditive(t){const e=this.buffer,a=this.valueSize,r=a*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,r,0,t,a),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,a=this.buffer,r=t*e+e,l=this.cumulativeWeight,u=this.cumulativeWeightAdditive,f=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,l<1){const p=e*this._origIndex;this._mixBufferRegion(a,r,p,1-l,e)}u>0&&this._mixBufferRegionAdditive(a,r,this._addIndex*e,1,e);for(let p=e,d=e+e;p!==d;++p)if(a[p]!==a[p+e]){f.setValue(a,r);break}}saveOriginalState(){const t=this.binding,e=this.buffer,a=this.valueSize,r=a*this._origIndex;t.getValue(e,r);for(let l=a,u=r;l!==u;++l)e[l]=e[r+l%a];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let a=t;a<e;a++)this.buffer[a]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let a=0;a<this.valueSize;a++)this.buffer[e+a]=this.buffer[t+a]}_select(t,e,a,r,l){if(r>=.5)for(let u=0;u!==l;++u)t[e+u]=t[a+u]}_slerp(t,e,a,r){oi.slerpFlat(t,e,t,e,t,a,r)}_slerpAdditive(t,e,a,r,l){const u=this._workIndex*l;oi.multiplyQuaternionsFlat(t,u,t,e,t,a),oi.slerpFlat(t,e,t,e,t,u,r)}_lerp(t,e,a,r,l){const u=1-r;for(let f=0;f!==l;++f){const p=e+f;t[p]=t[p]*u+t[a+f]*r}}_lerpAdditive(t,e,a,r,l){for(let u=0;u!==l;++u){const f=e+u;t[f]=t[f]+t[a+u]*r}}}const Mp="\\[\\]\\.:\\/",VE=new RegExp("["+Mp+"]","g"),Ep="[^"+Mp+"]",GE="[^"+Mp.replace("\\.","")+"]",kE=/((?:WC+[\/:])*)/.source.replace("WC",Ep),XE=/(WCOD+)?/.source.replace("WCOD",GE),WE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ep),qE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ep),YE=new RegExp("^"+kE+XE+WE+qE+"$"),jE=["material","materials","bones","map"];class ZE{constructor(t,e,a){const r=a||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(t,e)}setValue(t,e){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,l=a.length;r!==l;++r)a[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].unbind()}}class Re{constructor(t,e,a){this.path=e,this.parsedPath=a||Re.parseTrackName(e),this.node=Re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,a){return t&&t.isAnimationObjectGroup?new Re.Composite(t,e,a):new Re(t,e,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(VE,"")}static parseTrackName(t){const e=YE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const l=a.nodeName.substring(r+1);jE.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(e);if(a!==void 0)return a}if(t.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===e||f.uuid===e)return f;const p=a(f.children);if(p)return p}return null},r=a(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)t[e++]=a[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const a=this.resolvedProperty;for(let r=0,l=a.length;r!==l;++r)a[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,a=e.objectName,r=e.propertyName;let l=e.propertyIndex;if(t||(t=Re.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=e.objectIndex;switch(a){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let v=0;v<t.length;v++)if(t[v].name===d){d=v;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(d!==void 0){if(t[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const u=t[r];if(u===void 0){const d=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",t);return}let f=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?f=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(l!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[l]!==void 0&&(l=t.morphTargetDictionary[l])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Re.Composite=ZE;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class KE{constructor(t,e,a=null,r=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=a,this.blendMode=r;const l=e.tracks,u=l.length,f=new Array(u),p={endingStart:Ls,endingEnd:Ls};for(let d=0;d!==u;++d){const v=l[d].createInterpolant(null);f[d]=v,v.settings=p}this._interpolantSettings=p,this._interpolants=f,this._propertyBindings=new Array(u),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,a=!1){if(t.fadeOut(e),this.fadeIn(e),a===!0){const r=this._clip.duration,l=t._clip.duration,u=l/r,f=r/l;t.warp(1,u,e),this.warp(f,1,e)}return this}crossFadeTo(t,e,a=!1){return t.crossFadeFrom(this,e,a)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,a){const r=this._mixer,l=r.time,u=this.timeScale;let f=this._timeScaleInterpolant;f===null&&(f=r._lendControlInterpolant(),this._timeScaleInterpolant=f);const p=f.parameterPositions,d=f.sampleValues;return p[0]=l,p[1]=l+a,d[0]=t/u,d[1]=e/u,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,a,r){if(!this.enabled){this._updateWeight(t);return}const l=this._startTime;if(l!==null){const p=(t-l)*a;p<0||a===0?e=0:(this._startTime=null,e=a*p)}e*=this._updateTimeScale(t);const u=this._updateTime(e),f=this._updateWeight(t);if(f>0){const p=this._interpolants,d=this._propertyBindings;switch(this.blendMode){case uM:for(let v=0,g=p.length;v!==g;++v)p[v].evaluate(u),d[v].accumulateAdditive(f);break;case cp:default:for(let v=0,g=p.length;v!==g;++v)p[v].evaluate(u),d[v].accumulate(r,f)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const a=this._weightInterpolant;if(a!==null){const r=a.evaluate(t)[0];e*=r,t>a.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const a=this._timeScaleInterpolant;if(a!==null){const r=a.evaluate(t)[0];e*=r,t>a.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,a=this.loop;let r=this.time+t,l=this._loopCount;const u=a===cM;if(t===0)return l===-1?r:u&&(l&1)===1?e-r:r;if(a===oM){l===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=e)r=e;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(l===-1&&(t>=0?(l=0,this._setEndings(!0,this.repetitions===0,u)):this._setEndings(this.repetitions===0,!0,u)),r>=e||r<0){const f=Math.floor(r/e);r-=e*f,l+=Math.abs(f);const p=this.repetitions-l;if(p<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?e:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(p===1){const d=t<0;this._setEndings(d,!d,u)}else this._setEndings(!1,!1,u);this._loopCount=l,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f})}}else this.time=r;if(u&&(l&1)===1)return e-r}return r}_setEndings(t,e,a){const r=this._interpolantSettings;a?(r.endingStart=Ns,r.endingEnd=Ns):(t?r.endingStart=this.zeroSlopeAtStart?Ns:Ls:r.endingStart=au,e?r.endingEnd=this.zeroSlopeAtEnd?Ns:Ls:r.endingEnd=au)}_scheduleFading(t,e,a){const r=this._mixer,l=r.time;let u=this._weightInterpolant;u===null&&(u=r._lendControlInterpolant(),this._weightInterpolant=u);const f=u.parameterPositions,p=u.sampleValues;return f[0]=l,p[0]=e,f[1]=l+t,p[1]=a,this}}const QE=new Float32Array(1);class JE extends Ur{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const a=t._localRoot||this._root,r=t._clip.tracks,l=r.length,u=t._propertyBindings,f=t._interpolants,p=a.uuid,d=this._bindingsByRootAndName;let v=d[p];v===void 0&&(v={},d[p]=v);for(let g=0;g!==l;++g){const _=r[g],y=_.name;let S=v[y];if(S!==void 0)++S.referenceCount,u[g]=S;else{if(S=u[g],S!==void 0){S._cacheIndex===null&&(++S.referenceCount,this._addInactiveBinding(S,p,y));continue}const T=e&&e._propertyBindings[g].binding.parsedPath;S=new HE(Re.create(a,y,T),_.ValueTypeName,_.getValueSize()),++S.referenceCount,this._addInactiveBinding(S,p,y),u[g]=S}f[g].resultBuffer=S.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const a=(t._localRoot||this._root).uuid,r=t._clip.uuid,l=this._actionsByClip[r];this._bindAction(t,l&&l.knownActions[0]),this._addInactiveAction(t,r,a)}const e=t._propertyBindings;for(let a=0,r=e.length;a!==r;++a){const l=e[a];l.useCount++===0&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let a=0,r=e.length;a!==r;++a){const l=e[a];--l.useCount===0&&(l.restoreOriginalState(),this._takeBackBinding(l))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,a){const r=this._actions,l=this._actionsByClip;let u=l[e];if(u===void 0)u={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,l[e]=u;else{const f=u.knownActions;t._byClipCacheIndex=f.length,f.push(t)}t._cacheIndex=r.length,r.push(t),u.actionByRoot[a]=t}_removeInactiveAction(t){const e=this._actions,a=e[e.length-1],r=t._cacheIndex;a._cacheIndex=r,e[r]=a,e.pop(),t._cacheIndex=null;const l=t._clip.uuid,u=this._actionsByClip,f=u[l],p=f.knownActions,d=p[p.length-1],v=t._byClipCacheIndex;d._byClipCacheIndex=v,p[v]=d,p.pop(),t._byClipCacheIndex=null;const g=f.actionByRoot,_=(t._localRoot||this._root).uuid;delete g[_],p.length===0&&delete u[l],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let a=0,r=e.length;a!==r;++a){const l=e[a];--l.referenceCount===0&&this._removeInactiveBinding(l)}}_lendAction(t){const e=this._actions,a=t._cacheIndex,r=this._nActiveActions++,l=e[r];t._cacheIndex=r,e[r]=t,l._cacheIndex=a,e[a]=l}_takeBackAction(t){const e=this._actions,a=t._cacheIndex,r=--this._nActiveActions,l=e[r];t._cacheIndex=r,e[r]=t,l._cacheIndex=a,e[a]=l}_addInactiveBinding(t,e,a){const r=this._bindingsByRootAndName,l=this._bindings;let u=r[e];u===void 0&&(u={},r[e]=u),u[a]=t,t._cacheIndex=l.length,l.push(t)}_removeInactiveBinding(t){const e=this._bindings,a=t.binding,r=a.rootNode.uuid,l=a.path,u=this._bindingsByRootAndName,f=u[r],p=e[e.length-1],d=t._cacheIndex;p._cacheIndex=d,e[d]=p,e.pop(),delete f[l],Object.keys(f).length===0&&delete u[r]}_lendBinding(t){const e=this._bindings,a=t._cacheIndex,r=this._nActiveBindings++,l=e[r];t._cacheIndex=r,e[r]=t,l._cacheIndex=a,e[a]=l}_takeBackBinding(t){const e=this._bindings,a=t._cacheIndex,r=--this._nActiveBindings,l=e[r];t._cacheIndex=r,e[r]=t,l._cacheIndex=a,e[a]=l}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let a=t[e];return a===void 0&&(a=new Z0(new Float32Array(2),new Float32Array(2),1,QE),a.__cacheIndex=e,t[e]=a),a}_takeBackControlInterpolant(t){const e=this._controlInterpolants,a=t.__cacheIndex,r=--this._nActiveControlInterpolants,l=e[r];t.__cacheIndex=r,e[r]=t,l.__cacheIndex=a,e[a]=l}clipAction(t,e,a){const r=e||this._root,l=r.uuid;let u=typeof t=="string"?Qd.findByName(r,t):t;const f=u!==null?u.uuid:t,p=this._actionsByClip[f];let d=null;if(a===void 0&&(u!==null?a=u.blendMode:a=cp),p!==void 0){const g=p.actionByRoot[l];if(g!==void 0&&g.blendMode===a)return g;d=p.knownActions[0],u===null&&(u=d._clip)}if(u===null)return null;const v=new KE(this,u,e,a);return this._bindAction(v,d),this._addInactiveAction(v,f,l),v}existingAction(t,e){const a=e||this._root,r=a.uuid,l=typeof t=="string"?Qd.findByName(a,t):t,u=l?l.uuid:t,f=this._actionsByClip[u];return f!==void 0&&f.actionByRoot[r]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let a=e-1;a>=0;--a)t[a].stop();return this}update(t){t*=this.timeScale;const e=this._actions,a=this._nActiveActions,r=this.time+=t,l=Math.sign(t),u=this._accuIndex^=1;for(let d=0;d!==a;++d)e[d]._update(r,t,l,u);const f=this._bindings,p=this._nActiveBindings;for(let d=0;d!==p;++d)f[d].apply(u);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,a=t.uuid,r=this._actionsByClip,l=r[a];if(l!==void 0){const u=l.knownActions;for(let f=0,p=u.length;f!==p;++f){const d=u[f];this._deactivateAction(d);const v=d._cacheIndex,g=e[e.length-1];d._cacheIndex=null,d._byClipCacheIndex=null,g._cacheIndex=v,e[v]=g,e.pop(),this._removeInactiveBindingsForAction(d)}delete r[a]}}uncacheRoot(t){const e=t.uuid,a=this._actionsByClip;for(const u in a){const f=a[u].actionByRoot,p=f[e];p!==void 0&&(this._deactivateAction(p),this._removeInactiveAction(p))}const r=this._bindingsByRootAndName,l=r[e];if(l!==void 0)for(const u in l){const f=l[u];f.restoreOriginalState(),this._removeInactiveBinding(f)}}uncacheAction(t,e){const a=this.existingAction(t,e);a!==null&&(this._deactivateAction(a),this._removeInactiveAction(a))}}const j_=new Zt;class $E{constructor(t,e,a=0,r=1/0){this.ray=new hu(t,e),this.near=a,this.far=r,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return j_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(j_),this}intersectObject(t,e=!0,a=[]){return Jd(t,this,a,e),a.sort(Z_),a}intersectObjects(t,e=!0,a=[]){for(let r=0,l=t.length;r<l;r++)Jd(t[r],this,a,e);return a.sort(Z_),a}}function Z_(o,t){return o.distance-t.distance}function Jd(o,t,e,a){let r=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(r=!1),r===!0&&a===!0){const l=o.children;for(let u=0,f=l.length;u<f;u++)Jd(l[u],t,e,!0)}}class tT{constructor(t=1,e=0,a=0){this.radius=t,this.phi=e,this.theta=a}set(t,e,a){return this.radius=t,this.phi=e,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,a){return this.radius=Math.sqrt(t*t+e*e+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eT extends q0{constructor(t=10,e=10,a=4473924,r=8947848){a=new ae(a),r=new ae(r);const l=e/2,u=t/e,f=t/2,p=[],d=[];for(let _=0,y=0,S=-f;_<=e;_++,S+=u){p.push(-f,0,S,f,0,S),p.push(S,0,-f,S,0,f);const T=_===l?a:r;T.toArray(d,y),y+=3,T.toArray(d,y),y+=3,T.toArray(d,y),y+=3,T.toArray(d,y),y+=3}const v=new Bn;v.setAttribute("position",new je(p,3)),v.setAttribute("color",new je(d,3));const g=new du({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class nT extends q0{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],a=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Bn;r.setAttribute("position",new je(e,3)),r.setAttribute("color",new je(a,3));const l=new du({vertexColors:!0,toneMapped:!1});super(r,l),this.type="AxesHelper"}setColors(t,e,a){const r=new ae,l=this.geometry.attributes.color.array;return r.set(t),r.toArray(l,0),r.toArray(l,3),r.set(e),r.toArray(l,6),r.toArray(l,9),r.set(a),r.toArray(l,12),r.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function K_(o,t,e,a){const r=iT(a);switch(e){case U0:return o*t;case N0:return o*t/r.components*r.byteLength;case sp:return o*t/r.components*r.byteLength;case O0:return o*t*2/r.components*r.byteLength;case op:return o*t*2/r.components*r.byteLength;case L0:return o*t*3/r.components*r.byteLength;case xi:return o*t*4/r.components*r.byteLength;case lp:return o*t*4/r.components*r.byteLength;case Kc:case Qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jc:case $c:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Td:case Ad:return Math.max(o,16)*Math.max(t,8)/4;case Ed:case bd:return Math.max(o,8)*Math.max(t,8)/2;case wd:case Rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Cd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Od:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Id:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case kd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case tu:case Xd:case Wd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case P0:case qd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Yd:case jd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function iT(o){switch(o){case Wi:case R0:return{byteLength:1,components:1};case il:case C0:case ul:return{byteLength:2,components:1};case ap:case rp:return{byteLength:2,components:4};case Cr:case ip:case Gi:return{byteLength:4,components:1};case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $0(){let o=null,t=!1,e=null,a=null;function r(l,u){e(l,u),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function aT(o){const t=new WeakMap;function e(f,p){const d=f.array,v=f.usage,g=d.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,d,v),f.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const v=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,v);else{g.sort((y,S)=>y.start-S.start);let _=0;for(let y=1;y<g.length;y++){const S=g[_],T=g[y];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++_,g[_]=T)}g.length=_+1;for(let y=0,S=g.length;y<S;y++){const T=g[y];o.bufferSubData(d,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=t.get(f);(!v||v.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,e(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:r,remove:l,update:u}}var rT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sT=`#ifdef USE_ALPHAHASH
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
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fT=`#ifdef USE_AOMAP
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
#endif`,hT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dT=`#ifdef USE_BATCHING
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
#endif`,pT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_T=`#ifdef USE_IRIDESCENCE
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
#endif`,yT=`#ifdef USE_BUMPMAP
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
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RT=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,CT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DT=`vec3 transformedNormal = objectNormal;
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
#endif`,UT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PT="gl_FragColor = linearToOutputTexel( gl_FragColor );",IT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qT=`#ifdef USE_GRADIENTMAP
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
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KT=`uniform bool receiveShadow;
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
#endif`,QT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,JT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ib=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ab=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ob=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pb=`#if defined( USE_POINTS_UV )
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
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
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
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`#include <common>
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
}`,f1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,d1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,v1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,S1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,M1=`#define MATCAP
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
}`,E1=`#define MATCAP
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
}`,T1=`#define NORMAL
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
}`,b1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
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
}`,w1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,D1=`#define TOON
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
}`,U1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,L1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,P1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,I1=`uniform float rotation;
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
}`,B1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:rT,alphahash_pars_fragment:sT,alphamap_fragment:oT,alphamap_pars_fragment:lT,alphatest_fragment:cT,alphatest_pars_fragment:uT,aomap_fragment:fT,aomap_pars_fragment:hT,batching_pars_vertex:dT,batching_vertex:pT,begin_vertex:mT,beginnormal_vertex:gT,bsdfs:vT,iridescence_fragment:_T,bumpmap_pars_fragment:yT,clipping_planes_fragment:xT,clipping_planes_pars_fragment:ST,clipping_planes_pars_vertex:MT,clipping_planes_vertex:ET,color_fragment:TT,color_pars_fragment:bT,color_pars_vertex:AT,color_vertex:wT,common:RT,cube_uv_reflection_fragment:CT,defaultnormal_vertex:DT,displacementmap_pars_vertex:UT,displacementmap_vertex:LT,emissivemap_fragment:NT,emissivemap_pars_fragment:OT,colorspace_fragment:PT,colorspace_pars_fragment:IT,envmap_fragment:BT,envmap_common_pars_fragment:FT,envmap_pars_fragment:zT,envmap_pars_vertex:HT,envmap_physical_pars_fragment:QT,envmap_vertex:VT,fog_vertex:GT,fog_pars_vertex:kT,fog_fragment:XT,fog_pars_fragment:WT,gradientmap_pars_fragment:qT,lightmap_pars_fragment:YT,lights_lambert_fragment:jT,lights_lambert_pars_fragment:ZT,lights_pars_begin:KT,lights_toon_fragment:JT,lights_toon_pars_fragment:$T,lights_phong_fragment:tb,lights_phong_pars_fragment:eb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:ab,lights_fragment_maps:rb,lights_fragment_end:sb,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:ub,map_fragment:fb,map_pars_fragment:hb,map_particle_fragment:db,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:vb,morphcolor_vertex:_b,morphnormal_vertex:yb,morphtarget_pars_vertex:xb,morphtarget_vertex:Sb,normal_fragment_begin:Mb,normal_fragment_maps:Eb,normal_pars_fragment:Tb,normal_pars_vertex:bb,normal_vertex:Ab,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:Cb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Ub,opaque_fragment:Lb,packing:Nb,premultiplied_alpha_fragment:Ob,project_vertex:Pb,dithering_fragment:Ib,dithering_pars_fragment:Bb,roughnessmap_fragment:Fb,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Vb,shadowmap_vertex:Gb,shadowmask_pars_fragment:kb,skinbase_vertex:Xb,skinning_pars_vertex:Wb,skinning_vertex:qb,skinnormal_vertex:Yb,specularmap_fragment:jb,specularmap_pars_fragment:Zb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Qb,transmission_fragment:Jb,transmission_pars_fragment:$b,uv_pars_fragment:t1,uv_pars_vertex:e1,uv_vertex:n1,worldpos_vertex:i1,background_vert:a1,background_frag:r1,backgroundCube_vert:s1,backgroundCube_frag:o1,cube_vert:l1,cube_frag:c1,depth_vert:u1,depth_frag:f1,distanceRGBA_vert:h1,distanceRGBA_frag:d1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:v1,meshbasic_vert:_1,meshbasic_frag:y1,meshlambert_vert:x1,meshlambert_frag:S1,meshmatcap_vert:M1,meshmatcap_frag:E1,meshnormal_vert:T1,meshnormal_frag:b1,meshphong_vert:A1,meshphong_frag:w1,meshphysical_vert:R1,meshphysical_frag:C1,meshtoon_vert:D1,meshtoon_frag:U1,points_vert:L1,points_frag:N1,shadow_vert:O1,shadow_frag:P1,sprite_vert:I1,sprite_frag:B1},Ot={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},zi={basic:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Gn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Gn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Gn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ae(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Gn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Gn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Gn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Gn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Gn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Gn([Ot.common,Ot.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Gn([Ot.lights,Ot.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};zi.physical={uniforms:Gn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const qc={r:0,b:0,g:0},Sr=new Dn,F1=new Zt;function z1(o,t,e,a,r,l,u){const f=new ae(0);let p=l===!0?0:1,d,v,g=null,_=0,y=null;function S(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?e:t).get(w)),w}function T(R){let w=!1;const O=S(R);O===null?x(f,p):O&&O.isColor&&(x(O,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(R,w){const O=S(w);O&&(O.isCubeTexture||O.mapping===fu)?(v===void 0&&(v=new li(new Ws(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:ks(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(v)),Sr.copy(w.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(Sr)),v.material.toneMapped=Ue.getTransfer(O.colorSpace)!==Ve,(g!==O||_!==O.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,g=O,_=O.version,y=o.toneMapping),v.layers.enableAll(),R.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new li(new fl(2,2),new ga({name:"BackgroundMaterial",uniforms:ks(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Ue.getTransfer(O.colorSpace)!==Ve,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||_!==O.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=O,_=O.version,y=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function x(R,w){R.getRGB(qc,G0(o)),a.buffers.color.setClear(qc.r,qc.g,qc.b,w,u)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,w=1){f.set(R),p=w,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,x(f,p)},render:T,addToRenderList:M,dispose:L}}function H1(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=_(null);let l=r,u=!1;function f(D,I,Z,it,lt){let ut=!1;const F=g(it,Z,I);l!==F&&(l=F,d(l.object)),ut=y(D,it,Z,lt),ut&&S(D,it,Z,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(ut||u)&&(u=!1,w(D,I,Z,it),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return o.createVertexArray()}function d(D){return o.bindVertexArray(D)}function v(D){return o.deleteVertexArray(D)}function g(D,I,Z){const it=Z.wireframe===!0;let lt=a[D.id];lt===void 0&&(lt={},a[D.id]=lt);let ut=lt[I.id];ut===void 0&&(ut={},lt[I.id]=ut);let F=ut[it];return F===void 0&&(F=_(p()),ut[it]=F),F}function _(D){const I=[],Z=[],it=[];for(let lt=0;lt<e;lt++)I[lt]=0,Z[lt]=0,it[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Z,attributeDivisors:it,object:D,attributes:{},index:null}}function y(D,I,Z,it){const lt=l.attributes,ut=I.attributes;let F=0;const Q=Z.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const N=lt[Y];let tt=ut[Y];if(tt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;F++}return l.attributesNum!==F||l.index!==it}function S(D,I,Z,it){const lt={},ut=I.attributes;let F=0;const Q=Z.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let N=ut[Y];N===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),lt[Y]=tt,F++}l.attributes=lt,l.attributesNum=F,l.index=it}function T(){const D=l.newAttributes;for(let I=0,Z=D.length;I<Z;I++)D[I]=0}function M(D){x(D,0)}function x(D,I){const Z=l.newAttributes,it=l.enabledAttributes,lt=l.attributeDivisors;Z[D]=1,it[D]===0&&(o.enableVertexAttribArray(D),it[D]=1),lt[D]!==I&&(o.vertexAttribDivisor(D,I),lt[D]=I)}function L(){const D=l.newAttributes,I=l.enabledAttributes;for(let Z=0,it=I.length;Z<it;Z++)I[Z]!==D[Z]&&(o.disableVertexAttribArray(Z),I[Z]=0)}function R(D,I,Z,it,lt,ut,F){F===!0?o.vertexAttribIPointer(D,I,Z,lt,ut):o.vertexAttribPointer(D,I,Z,it,lt,ut)}function w(D,I,Z,it){T();const lt=it.attributes,ut=Z.getAttributes(),F=I.defaultAttributeValues;for(const Q in ut){const Y=ut[Q];if(Y.location>=0){let yt=lt[Q];if(yt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const N=yt.normalized,tt=yt.itemSize,mt=t.get(yt);if(mt===void 0)continue;const xt=mt.buffer,wt=mt.type,nt=mt.bytesPerElement,dt=wt===o.INT||wt===o.UNSIGNED_INT||yt.gpuType===ip;if(yt.isInterleavedBufferAttribute){const St=yt.data,Dt=St.stride,Yt=yt.offset;if(St.isInstancedInterleavedBuffer){for(let re=0;re<Y.locationSize;re++)x(Y.location+re,St.meshPerAttribute);D.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let re=0;re<Y.locationSize;re++)M(Y.location+re);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let re=0;re<Y.locationSize;re++)R(Y.location+re,tt/Y.locationSize,wt,N,Dt*nt,(Yt+tt/Y.locationSize*re)*nt,dt)}else{if(yt.isInstancedBufferAttribute){for(let St=0;St<Y.locationSize;St++)x(Y.location+St,yt.meshPerAttribute);D.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let St=0;St<Y.locationSize;St++)M(Y.location+St);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let St=0;St<Y.locationSize;St++)R(Y.location+St,tt/Y.locationSize,wt,N,tt*nt,tt/Y.locationSize*St*nt,dt)}}else if(F!==void 0){const N=F[Q];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(Y.location,N);break;case 3:o.vertexAttrib3fv(Y.location,N);break;case 4:o.vertexAttrib4fv(Y.location,N);break;default:o.vertexAttrib1fv(Y.location,N)}}}}L()}function O(){G();for(const D in a){const I=a[D];for(const Z in I){const it=I[Z];for(const lt in it)v(it[lt].object),delete it[lt];delete I[Z]}delete a[D]}}function B(D){if(a[D.id]===void 0)return;const I=a[D.id];for(const Z in I){const it=I[Z];for(const lt in it)v(it[lt].object),delete it[lt];delete I[Z]}delete a[D.id]}function z(D){for(const I in a){const Z=a[I];if(Z[D.id]===void 0)continue;const it=Z[D.id];for(const lt in it)v(it[lt].object),delete it[lt];delete Z[D.id]}}function G(){U(),u=!0,l!==r&&(l=r,d(l.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:G,resetDefaultState:U,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:L}}function V1(o,t,e){let a;function r(d){a=d}function l(d,v){o.drawArrays(a,d,v),e.update(v,a,1)}function u(d,v,g){g!==0&&(o.drawArraysInstanced(a,d,v,g),e.update(v,a,g))}function f(d,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,v,0,g);let y=0;for(let S=0;S<g;S++)y+=v[S];e.update(y,a,1)}function p(d,v,g,_){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<d.length;S++)u(d[S],v[S],_[S]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,v,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=v[T]*_[T];e.update(S,a,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function G1(o,t,e,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(z){return!(z!==xi&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const G=z===ul&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Wi&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Gi&&!G)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const v=p(d);v!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const g=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=S>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:O,maxSamples:B}}function k1(o){const t=this;let e=null,a=0,r=!1,l=!1;const u=new Er,f=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||a!==0||r;return r=_,a=g.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){e=v(g,_,0)},this.setState=function(g,_,y){const S=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!r||S===null||S.length===0||l&&!M)l?v(null):d();else{const L=l?0:a,R=L*4;let w=x.clippingState||null;p.value=w,w=v(S,_,R,y);for(let O=0;O!==R;++O)w[O]=e[O];x.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function v(g,_,y,S){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,S!==!0||M===null){const x=y+T*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(M===null||M.length<x)&&(M=new Float32Array(x));for(let R=0,w=y;R!==T;++R,w+=4)u.copy(g[R]).applyMatrix4(L,f),u.normal.toArray(M,w),M[w+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function X1(o){let t=new WeakMap;function e(u,f){return f===nu?u.mapping=zs:f===Sd&&(u.mapping=Hs),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===nu||f===Sd)if(t.has(u)){const p=t.get(u).texture;return e(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new oE(p.height);return d.fromEquirectangularTexture(o,u),t.set(u,d),u.addEventListener("dispose",r),e(d.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Os=4,Q_=[.125,.215,.35,.446,.526,.582],Ar=20,nd=new Sp,J_=new ae;let id=null,ad=0,rd=0,sd=!1;const Tr=(1+Math.sqrt(5))/2,Cs=1/Tr,$_=[new W(-Tr,Cs,0),new W(Tr,Cs,0),new W(-Cs,0,Tr),new W(Cs,0,Tr),new W(0,Tr,-Cs),new W(0,Tr,Cs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],W1=new W;class t0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,a=.1,r=100,l={}){const{size:u=256,position:f=W1}=l;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),e>0&&this._blur(p,0,0,e),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(id,ad,rd),this._renderer.xr.enabled=sd,t.scissorTest=!1,Yc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:ul,format:xi,colorSpace:Vs,depthBuffer:!1},r=e0(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(t,e,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q1(l)),this._blurMaterial=Y1(l,t,e)}return r}_compileMaterial(t){const e=new li(this._lodPlanes[0],t);this._renderer.compile(e,nd)}_sceneToCubeUV(t,e,a,r,l){const p=new kn(90,1,e,a),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(J_),g.toneMapping=Qa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null));const T=new H0({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),M=new li(new Ws,T);let x=!1;const L=t.background;L?L.isColor&&(T.color.copy(L),t.background=null,x=!0):(T.color.copy(J_),x=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(p.up.set(0,d[R],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[R],l.y,l.z)):w===1?(p.up.set(0,0,d[R]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[R],l.z)):(p.up.set(0,d[R],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[R]));const O=this._cubeSize;Yc(r,w*O,R>2?O:0,O,O),g.setRenderTarget(r),x&&g.render(M,p),g.render(t,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=L}_textureToCubeUV(t,e){const a=this._renderer,r=t.mapping===zs||t.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new li(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Yc(e,0,0,3*p,2*p),a.setRenderTarget(e),a.render(u,nd)}_applyPMREM(t){const e=this._renderer,a=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=$_[(r-l-1)%$_.length];this._blur(t,l-1,l,u,f)}e.autoClear=a}_blur(t,e,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,a,r,"latitudinal",l),this._halfBlur(u,t,a,a,r,"longitudinal",l)}_halfBlur(t,e,a,r,l,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new li(this._lodPlanes[r],d),_=d.uniforms,y=this._sizeLods[a]-1,S=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Ar-1),T=l/S,M=isFinite(l)?1+Math.floor(v*T):Ar;M>Ar&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ar}`);const x=[];let L=0;for(let z=0;z<Ar;++z){const G=z/T,U=Math.exp(-G*G/2);x.push(U),z===0?L+=U:z<M&&(L+=2*U)}for(let z=0;z<x.length;z++)x[z]=x[z]/L;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:R}=this;_.dTheta.value=S,_.mipInt.value=R-a;const w=this._sizeLods[r],O=3*w*(r>R-Os?r-R+Os:0),B=4*(this._cubeSize-w);Yc(e,O,B,3*w,2*w),p.setRenderTarget(e),p.render(g,nd)}}function q1(o){const t=[],e=[],a=[];let r=o;const l=o-Os+1+Q_.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);e.push(f);let p=1/f;u>o-Os?p=Q_[u-o+Os-1]:u===0&&(p=0),a.push(p);const d=1/(f-2),v=-d,g=1+d,_=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,S=6,T=3,M=2,x=1,L=new Float32Array(T*S*y),R=new Float32Array(M*S*y),w=new Float32Array(x*S*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,G=B>2?0:-1,U=[z,G,0,z+2/3,G,0,z+2/3,G+1,0,z,G,0,z+2/3,G+1,0,z,G+1,0];L.set(U,T*S*B),R.set(_,M*S*B);const D=[B,B,B,B,B,B];w.set(D,x*S*B)}const O=new Bn;O.setAttribute("position",new Xi(L,T)),O.setAttribute("uv",new Xi(R,M)),O.setAttribute("faceIndex",new Xi(w,x)),t.push(O),r>Os&&r--}return{lodPlanes:t,sizeLods:e,sigmas:a}}function e0(o,t,e){const a=new Dr(o,t,e);return a.texture.mapping=fu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Yc(o,t,e,a,r){o.viewport.set(t,e,a,r),o.scissor.set(t,e,a,r)}function Y1(o,t,e){const a=new Float32Array(Ar),r=new W(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function n0(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function i0(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Tp(){return`

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
	`}function j1(o){let t=new WeakMap,e=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===nu||p===Sd,v=p===zs||p===Hs;if(d||v){let g=t.get(f);const _=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return e===null&&(e=new t0(o)),g=d?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||v&&y&&r(y)?(e===null&&(e=new t0(o)),g=d?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let p=0;const d=6;for(let v=0;v<d;v++)f[v]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:u}}function Z1(o){const t={};function e(a){if(t[a]!==void 0)return t[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return t[a]=r,r}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){const r=e(a);return r===null&&Is("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function K1(o,t,e,a){const r={},l=new WeakMap;function u(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const S in _.attributes)t.remove(_.attributes[S]);_.removeEventListener("dispose",u),delete r[_.id];const y=l.get(_);y&&(t.remove(y),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function f(g,_){return r[_.id]===!0||(_.addEventListener("dispose",u),r[_.id]=!0,e.memory.geometries++),_}function p(g){const _=g.attributes;for(const y in _)t.update(_[y],o.ARRAY_BUFFER)}function d(g){const _=[],y=g.index,S=g.attributes.position;let T=0;if(y!==null){const L=y.array;T=y.version;for(let R=0,w=L.length;R<w;R+=3){const O=L[R+0],B=L[R+1],z=L[R+2];_.push(O,B,B,z,z,O)}}else if(S!==void 0){const L=S.array;T=S.version;for(let R=0,w=L.length/3-1;R<w;R+=3){const O=R+0,B=R+1,z=R+2;_.push(O,B,B,z,z,O)}}else return;const M=new(B0(_)?V0:pp)(_,1);M.version=T;const x=l.get(g);x&&t.remove(x),l.set(g,M)}function v(g){const _=l.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:v}}function Q1(o,t,e){let a;function r(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function p(_,y){o.drawElements(a,y,l,_*u),e.update(y,a,1)}function d(_,y,S){S!==0&&(o.drawElementsInstanced(a,y,l,_*u,S),e.update(y,a,S))}function v(_,y,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,l,_,0,S);let M=0;for(let x=0;x<S;x++)M+=y[x];e.update(M,a,1)}function g(_,y,S,T){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)d(_[x]/u,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,l,_,0,T,0,S);let x=0;for(let L=0;L<S;L++)x+=y[L]*T[L];e.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function J1(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(e.calls++,u){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:a}}function $1(o,t,e){const a=new WeakMap,r=new Te;function l(u,f,p){const d=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=v!==void 0?v.length:0;let _=a.get(f);if(_===void 0||_.count!==g){let D=function(){G.dispose(),a.delete(f),f.removeEventListener("dispose",D)};var y=D;_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let w=0;S===!0&&(w=1),T===!0&&(w=2),M===!0&&(w=3);let O=f.attributes.position.count*w,B=1;O>t.maxTextureSize&&(B=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const z=new Float32Array(O*B*4*g),G=new F0(z,O,B,g);G.type=Gi,G.needsUpdate=!0;const U=w*4;for(let I=0;I<g;I++){const Z=x[I],it=L[I],lt=R[I],ut=O*B*4*I;for(let F=0;F<Z.count;F++){const Q=F*U;S===!0&&(r.fromBufferAttribute(Z,F),z[ut+Q+0]=r.x,z[ut+Q+1]=r.y,z[ut+Q+2]=r.z,z[ut+Q+3]=0),T===!0&&(r.fromBufferAttribute(it,F),z[ut+Q+4]=r.x,z[ut+Q+5]=r.y,z[ut+Q+6]=r.z,z[ut+Q+7]=0),M===!0&&(r.fromBufferAttribute(lt,F),z[ut+Q+8]=r.x,z[ut+Q+9]=r.y,z[ut+Q+10]=r.z,z[ut+Q+11]=lt.itemSize===4?r.w:1)}}_={count:g,texture:G,size:new Ee(O,B)},a.set(f,_),f.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,e);else{let S=0;for(let M=0;M<d.length;M++)S+=d[M];const T=f.morphTargetsRelative?1:1-S;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:l}}function tA(o,t,e,a){let r=new WeakMap;function l(p){const d=a.render.frame,v=p.geometry,g=t.get(p,v);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==d&&(e.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&e.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return g}function u(){r=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:l,dispose:u}}const ty=new bn,a0=new Y0(1,1),ey=new F0,ny=new XM,iy=new X0,r0=[],s0=[],o0=new Float32Array(16),l0=new Float32Array(9),c0=new Float32Array(4);function js(o,t,e){const a=o[0];if(a<=0||a>0)return o;const r=t*e;let l=r0[r];if(l===void 0&&(l=new Float32Array(r),r0[r]=l),t!==0){a.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=e,o[u].toArray(l,f)}return l}function _n(o,t){if(o.length!==t.length)return!1;for(let e=0,a=o.length;e<a;e++)if(o[e]!==t[e])return!1;return!0}function yn(o,t){for(let e=0,a=t.length;e<a;e++)o[e]=t[e]}function vu(o,t){let e=s0[t];e===void 0&&(e=new Int32Array(t),s0[t]=e);for(let a=0;a!==t;++a)e[a]=o.allocateTextureUnit();return e}function eA(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function nA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;o.uniform2fv(this.addr,t),yn(e,t)}}function iA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;o.uniform3fv(this.addr,t),yn(e,t)}}function aA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;o.uniform4fv(this.addr,t),yn(e,t)}}function rA(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(_n(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,a))return;c0.set(a),o.uniformMatrix2fv(this.addr,!1,c0),yn(e,a)}}function sA(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(_n(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,a))return;l0.set(a),o.uniformMatrix3fv(this.addr,!1,l0),yn(e,a)}}function oA(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(_n(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,a))return;o0.set(a),o.uniformMatrix4fv(this.addr,!1,o0),yn(e,a)}}function lA(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function cA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;o.uniform2iv(this.addr,t),yn(e,t)}}function uA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;o.uniform3iv(this.addr,t),yn(e,t)}}function fA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;o.uniform4iv(this.addr,t),yn(e,t)}}function hA(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function dA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;o.uniform2uiv(this.addr,t),yn(e,t)}}function pA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;o.uniform3uiv(this.addr,t),yn(e,t)}}function mA(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;o.uniform4uiv(this.addr,t),yn(e,t)}}function gA(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(a0.compareFunction=I0,l=a0):l=ty,e.setTexture2D(t||l,r)}function vA(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture3D(t||ny,r)}function _A(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTextureCube(t||iy,r)}function yA(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture2DArray(t||ey,r)}function xA(o){switch(o){case 5126:return eA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return rA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return yA}}function SA(o,t){o.uniform1fv(this.addr,t)}function MA(o,t){const e=js(t,this.size,2);o.uniform2fv(this.addr,e)}function EA(o,t){const e=js(t,this.size,3);o.uniform3fv(this.addr,e)}function TA(o,t){const e=js(t,this.size,4);o.uniform4fv(this.addr,e)}function bA(o,t){const e=js(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function AA(o,t){const e=js(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function wA(o,t){const e=js(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function RA(o,t){o.uniform1iv(this.addr,t)}function CA(o,t){o.uniform2iv(this.addr,t)}function DA(o,t){o.uniform3iv(this.addr,t)}function UA(o,t){o.uniform4iv(this.addr,t)}function LA(o,t){o.uniform1uiv(this.addr,t)}function NA(o,t){o.uniform2uiv(this.addr,t)}function OA(o,t){o.uniform3uiv(this.addr,t)}function PA(o,t){o.uniform4uiv(this.addr,t)}function IA(o,t,e){const a=this.cache,r=t.length,l=vu(e,r);_n(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)e.setTexture2D(t[u]||ty,l[u])}function BA(o,t,e){const a=this.cache,r=t.length,l=vu(e,r);_n(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)e.setTexture3D(t[u]||ny,l[u])}function FA(o,t,e){const a=this.cache,r=t.length,l=vu(e,r);_n(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)e.setTextureCube(t[u]||iy,l[u])}function zA(o,t,e){const a=this.cache,r=t.length,l=vu(e,r);_n(a,l)||(o.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)e.setTexture2DArray(t[u]||ey,l[u])}function HA(o){switch(o){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return TA;case 35674:return bA;case 35675:return AA;case 35676:return wA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return DA;case 35669:case 35673:return UA;case 5125:return LA;case 36294:return NA;case 36295:return OA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return zA}}class VA{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.setValue=xA(e.type)}}class GA{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HA(e.type)}}class kA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(t,e[f.id],a)}}}const od=/(\w+)(\])?(\[|\.)?/g;function u0(o,t){o.seq.push(t),o.map[t.id]=t}function XA(o,t,e){const a=o.name,r=a.length;for(od.lastIndex=0;;){const l=od.exec(a),u=od.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===r){u0(e,d===void 0?new VA(f,o,t):new GA(f,o,t));break}else{let g=e.map[f];g===void 0&&(g=new kA(f),u0(e,g)),e=g}}}class eu{constructor(t,e){this.seq=[],this.map={};const a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(e,r),u=t.getUniformLocation(e,l.name);XA(l,u,this)}}setValue(t,e,a,r){const l=this.map[e];l!==void 0&&l.setValue(t,a,r)}setOptional(t,e,a){const r=e[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,e,a,r){for(let l=0,u=e.length;l!==u;++l){const f=e[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,e){const a=[];for(let r=0,l=t.length;r!==l;++r){const u=t[r];u.id in e&&a.push(u)}return a}}function f0(o,t,e){const a=o.createShader(t);return o.shaderSource(a,e),o.compileShader(a),a}const WA=37297;let qA=0;function YA(o,t){const e=o.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=r;u<l;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return a.join(`
`)}const h0=new ce;function jA(o){Ue._getMatrix(h0,Ue.workingColorSpace,o);const t=`mat3( ${h0.elements.map(e=>e.toFixed(4))} )`;switch(Ue.getTransfer(o)){case ru:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function d0(o,t,e){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return e.toUpperCase()+`

`+l+`

`+YA(o.getShaderSource(t),f)}else return l}function ZA(o,t){const e=jA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function KA(o,t){let e;switch(t){case JS:e="Linear";break;case $S:e="Reinhard";break;case tM:e="Cineon";break;case eM:e="ACESFilmic";break;case iM:e="AgX";break;case aM:e="Neutral";break;case nM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jc=new W;function QA(){Ue.getLuminanceCoefficients(jc);const o=jc.x.toFixed(4),t=jc.y.toFixed(4),e=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function $A(o){const t=[];for(const e in o){const a=o[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function tw(o,t){const e={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(t,r),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:f}}return e}function Qo(o){return o!==""}function p0(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function m0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(o){return o.replace(ew,iw)}const nw=new Map;function iw(o,t){let e=pe[t];if(e===void 0){const a=nw.get(t);if(a!==void 0)e=pe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return $d(e)}const aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(o){return o.replace(aw,rw)}function rw(o,t,e,a){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function v0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===b0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===A0?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function ow(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Hs:t="ENVMAP_TYPE_CUBE";break;case fu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function cw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case KS:t="ENVMAP_BLENDING_MIX";break;case QS:t="ENVMAP_BLENDING_ADD";break}return t}function uw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:a,maxMip:e}}function fw(o,t,e,a){const r=o.getContext(),l=e.defines;let u=e.vertexShader,f=e.fragmentShader;const p=sw(e),d=ow(e),v=lw(e),g=cw(e),_=uw(e),y=JA(e),S=$A(l),T=r.createProgram();let M,x,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Qo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(M=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+v:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",e.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qa?"#define TONE_MAPPING":"",e.toneMapping!==Qa?pe.tonemapping_pars_fragment:"",e.toneMapping!==Qa?KA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,ZA("linearToOutputTexel",e.outputColorSpace),QA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qo).join(`
`)),u=$d(u),u=p0(u,e),u=m0(u,e),f=$d(f),f=p0(f,e),f=m0(f,e),u=g0(u),f=g0(f),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=L+M+u,w=L+x+f,O=f0(r,r.VERTEX_SHADER,R),B=f0(r,r.FRAGMENT_SHADER,w);r.attachShader(T,O),r.attachShader(T,B),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function z(I){if(o.debug.checkShaderErrors){const Z=r.getProgramInfoLog(T)||"",it=r.getShaderInfoLog(O)||"",lt=r.getShaderInfoLog(B)||"",ut=Z.trim(),F=it.trim(),Q=lt.trim();let Y=!0,yt=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,T,O,B);else{const N=d0(r,O,"vertex"),tt=d0(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ut+`
`+N+`
`+tt)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(F===""||Q==="")&&(yt=!1);yt&&(I.diagnostics={runnable:Y,programLog:ut,vertexShader:{log:F,prefix:M},fragmentShader:{log:Q,prefix:x}})}r.deleteShader(O),r.deleteShader(B),G=new eu(r,T),U=tw(r,T)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(T,WA)),D},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=B,this}let hw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let a=e.get(t);return a===void 0&&(a=new Set,e.set(t,a)),a}_getShaderStage(t){const e=this.shaderCache;let a=e.get(t);return a===void 0&&(a=new pw(t),e.set(t,a)),a}}class pw{constructor(t){this.id=hw++,this.code=t,this.usedTimes=0}}function mw(o,t,e,a,r,l,u){const f=new dp,p=new dw,d=new Set,v=[],g=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return d.add(U),U===0?"uv":`uv${U}`}function M(U,D,I,Z,it){const lt=Z.fog,ut=it.geometry,F=U.isMeshStandardMaterial?Z.environment:null,Q=(U.isMeshStandardMaterial?e:t).get(U.envMap||F),Y=Q&&Q.mapping===fu?Q.image.height:null,yt=S[U.type];U.precision!==null&&(y=r.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const N=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,tt=N!==void 0?N.length:0;let mt=0;ut.morphAttributes.position!==void 0&&(mt=1),ut.morphAttributes.normal!==void 0&&(mt=2),ut.morphAttributes.color!==void 0&&(mt=3);let xt,wt,nt,dt;if(yt){const we=zi[yt];xt=we.vertexShader,wt=we.fragmentShader}else xt=U.vertexShader,wt=U.fragmentShader,p.update(U),nt=p.getVertexShaderID(U),dt=p.getFragmentShaderID(U);const St=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Yt=it.isInstancedMesh===!0,re=it.isBatchedMesh===!0,Xe=!!U.map,_e=!!U.matcap,V=!!Q,Ne=!!U.aoMap,Jt=!!U.lightMap,Ae=!!U.bumpMap,Ft=!!U.normalMap,We=!!U.displacementMap,zt=!!U.emissiveMap,le=!!U.metalnessMap,Je=!!U.roughnessMap,$e=U.anisotropy>0,P=U.clearcoat>0,b=U.dispersion>0,et=U.iridescence>0,ft=U.sheen>0,_t=U.transmission>0,ct=$e&&!!U.anisotropyMap,Pt=P&&!!U.clearcoatMap,At=P&&!!U.clearcoatNormalMap,Xt=P&&!!U.clearcoatRoughnessMap,qt=et&&!!U.iridescenceMap,Mt=et&&!!U.iridescenceThicknessMap,Lt=ft&&!!U.sheenColorMap,Kt=ft&&!!U.sheenRoughnessMap,kt=!!U.specularMap,Ct=!!U.specularColorMap,oe=!!U.specularIntensityMap,X=_t&&!!U.transmissionMap,bt=_t&&!!U.thicknessMap,Rt=!!U.gradientMap,It=!!U.alphaMap,Et=U.alphaTest>0,vt=!!U.alphaHash,Gt=!!U.extensions;let se=Qa;U.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(se=o.toneMapping);const Oe={shaderID:yt,shaderType:U.type,shaderName:U.name,vertexShader:xt,fragmentShader:wt,defines:U.defines,customVertexShaderID:nt,customFragmentShaderID:dt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:re,batchingColor:re&&it._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&it.instanceColor!==null,instancingMorph:Yt&&it.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Vs,alphaToCoverage:!!U.alphaToCoverage,map:Xe,matcap:_e,envMap:V,envMapMode:V&&Q.mapping,envMapCubeUVHeight:Y,aoMap:Ne,lightMap:Jt,bumpMap:Ae,normalMap:Ft,displacementMap:_&&We,emissiveMap:zt,normalMapObjectSpace:Ft&&U.normalMapType===dM,normalMapTangentSpace:Ft&&U.normalMapType===up,metalnessMap:le,roughnessMap:Je,anisotropy:$e,anisotropyMap:ct,clearcoat:P,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:et,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ft,sheenColorMap:Lt,sheenRoughnessMap:Kt,specularMap:kt,specularColorMap:Ct,specularIntensityMap:oe,transmission:_t,transmissionMap:X,thicknessMap:bt,gradientMap:Rt,opaque:U.transparent===!1&&U.blending===Ps&&U.alphaToCoverage===!1,alphaMap:It,alphaTest:Et,alphaHash:vt,combine:U.combine,mapUv:Xe&&T(U.map.channel),aoMapUv:Ne&&T(U.aoMap.channel),lightMapUv:Jt&&T(U.lightMap.channel),bumpMapUv:Ae&&T(U.bumpMap.channel),normalMapUv:Ft&&T(U.normalMap.channel),displacementMapUv:We&&T(U.displacementMap.channel),emissiveMapUv:zt&&T(U.emissiveMap.channel),metalnessMapUv:le&&T(U.metalnessMap.channel),roughnessMapUv:Je&&T(U.roughnessMap.channel),anisotropyMapUv:ct&&T(U.anisotropyMap.channel),clearcoatMapUv:Pt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:At&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&T(U.sheenRoughnessMap.channel),specularMapUv:kt&&T(U.specularMap.channel),specularColorMapUv:Ct&&T(U.specularColorMap.channel),specularIntensityMapUv:oe&&T(U.specularIntensityMap.channel),transmissionMapUv:X&&T(U.transmissionMap.channel),thicknessMapUv:bt&&T(U.thicknessMap.channel),alphaMapUv:It&&T(U.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Ft||$e),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ut.attributes.uv&&(Xe||It),fog:!!lt,useFog:U.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:it.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:mt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:Xe&&U.map.isVideoTexture===!0&&Ue.getTransfer(U.map.colorSpace)===Ve,decodeVideoTextureEmissive:zt&&U.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(U.emissiveMap.colorSpace)===Ve,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Kn,flipSided:U.side===Qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Gt&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&U.extensions.multiDraw===!0||re)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Oe.vertexUv1s=d.has(1),Oe.vertexUv2s=d.has(2),Oe.vertexUv3s=d.has(3),d.clear(),Oe}function x(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const I in U.defines)D.push(I),D.push(U.defines[I]);return U.isRawShaderMaterial===!1&&(L(D,U),R(D,U),D.push(o.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function L(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function R(U,D){f.disableAll(),D.supportsVertexTextures&&f.enable(0),D.instancing&&f.enable(1),D.instancingColor&&f.enable(2),D.instancingMorph&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),D.dispersion&&f.enable(20),D.batchingColor&&f.enable(21),D.gradientMap&&f.enable(22),U.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),U.push(f.mask)}function w(U){const D=S[U.type];let I;if(D){const Z=zi[D];I=iE.clone(Z.uniforms)}else I=U.uniforms;return I}function O(U,D){let I;for(let Z=0,it=v.length;Z<it;Z++){const lt=v[Z];if(lt.cacheKey===D){I=lt,++I.usedTimes;break}}return I===void 0&&(I=new fw(o,D,U,l),v.push(I)),I}function B(U){if(--U.usedTimes===0){const D=v.indexOf(U);v[D]=v[v.length-1],v.pop(),U.destroy()}}function z(U){p.remove(U)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:O,releaseProgram:B,releaseShaderCache:z,programs:v,dispose:G}}function gw(){let o=new WeakMap;function t(u){return o.has(u)}function e(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function r(u,f,p){o.get(u)[f]=p}function l(){o=new WeakMap}return{has:t,get:e,remove:a,update:r,dispose:l}}function vw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function _0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function y0(){const o=[];let t=0;const e=[],a=[],r=[];function l(){t=0,e.length=0,a.length=0,r.length=0}function u(g,_,y,S,T,M){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:S,renderOrder:g.renderOrder,z:T,group:M},o[t]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=S,x.renderOrder=g.renderOrder,x.z=T,x.group=M),t++,x}function f(g,_,y,S,T,M){const x=u(g,_,y,S,T,M);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):e.push(x)}function p(g,_,y,S,T,M){const x=u(g,_,y,S,T,M);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):e.unshift(x)}function d(g,_){e.length>1&&e.sort(g||vw),a.length>1&&a.sort(_||_0),r.length>1&&r.sort(_||_0)}function v(){for(let g=t,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:a,transparent:r,init:l,push:f,unshift:p,finish:v,sort:d}}function _w(){let o=new WeakMap;function t(a,r){const l=o.get(a);let u;return l===void 0?(u=new y0,o.set(a,[u])):r>=l.length?(u=new y0,l.push(u)):u=l[r],u}function e(){o=new WeakMap}return{get:t,dispose:e}}function yw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new ae};break;case"SpotLight":e={position:new W,direction:new W,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new W,halfWidth:new W,halfHeight:new W};break}return o[t.id]=e,e}}}function xw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Sw=0;function Mw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ew(o){const t=new yw,e=xw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new W);const r=new W,l=new Zt,u=new Zt;function f(d){let v=0,g=0,_=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let y=0,S=0,T=0,M=0,x=0,L=0,R=0,w=0,O=0,B=0,z=0;d.sort(Mw);for(let U=0,D=d.length;U<D;U++){const I=d[U],Z=I.color,it=I.intensity,lt=I.distance,ut=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=Z.r*it,g+=Z.g*it,_+=Z.b*it;else if(I.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(I.sh.coefficients[F],it);z++}else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,Y=e.get(I);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=ut,a.directionalShadowMatrix[y]=I.shadow.matrix,L++}a.directional[y]=F,y++}else if(I.isSpotLight){const F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(Z).multiplyScalar(it),F.distance=lt,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,a.spot[T]=F;const Q=I.shadow;if(I.map&&(a.spotLightMap[O]=I.map,O++,Q.updateMatrices(I),I.castShadow&&B++),a.spotLightMatrix[T]=Q.matrix,I.castShadow){const Y=e.get(I);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,a.spotShadow[T]=Y,a.spotShadowMap[T]=ut,w++}T++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(Z).multiplyScalar(it),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),a.rectArea[M]=F,M++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){const Q=I.shadow,Y=e.get(I);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,a.pointShadow[S]=Y,a.pointShadowMap[S]=ut,a.pointShadowMatrix[S]=I.shadow.matrix,R++}a.point[S]=F,S++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(it),F.groundColor.copy(I.groundColor).multiplyScalar(it),a.hemi[x]=F,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=g,a.ambient[2]=_;const G=a.hash;(G.directionalLength!==y||G.pointLength!==S||G.spotLength!==T||G.rectAreaLength!==M||G.hemiLength!==x||G.numDirectionalShadows!==L||G.numPointShadows!==R||G.numSpotShadows!==w||G.numSpotMaps!==O||G.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=M,a.point.length=S,a.hemi.length=x,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=w+O-B,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,G.directionalLength=y,G.pointLength=S,G.spotLength=T,G.rectAreaLength=M,G.hemiLength=x,G.numDirectionalShadows=L,G.numPointShadows=R,G.numSpotShadows=w,G.numSpotMaps=O,G.numLightProbes=z,a.version=Sw++)}function p(d,v){let g=0,_=0,y=0,S=0,T=0;const M=v.matrixWorldInverse;for(let x=0,L=d.length;x<L;x++){const R=d[x];if(R.isDirectionalLight){const w=a.directional[g];w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(M),g++}else if(R.isSpotLight){const w=a.spot[y];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(M),y++}else if(R.isRectAreaLight){const w=a.rectArea[S];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(M),u.identity(),l.copy(R.matrixWorld),l.premultiply(M),u.extractRotation(l),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),S++}else if(R.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(M),_++}else if(R.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:f,setupView:p,state:a}}function x0(o){const t=new Ew(o),e=[],a=[];function r(v){d.camera=v,e.length=0,a.length=0}function l(v){e.push(v)}function u(v){a.push(v)}function f(){t.setup(e)}function p(v){t.setupView(e,v)}const d={lightsArray:e,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function Tw(o){let t=new WeakMap;function e(r,l=0){const u=t.get(r);let f;return u===void 0?(f=new x0(o),t.set(r,[f])):l>=u.length?(f=new x0(o),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:e,dispose:a}}const bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ww(o,t,e){let a=new gp;const r=new Ee,l=new Ee,u=new Te,f=new _E({depthPacking:hM}),p=new yE,d={},v=e.maxTextureSize,g={[Ja]:Qn,[Qn]:Ja,[Kn]:Kn},_=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:bw,fragmentShader:Aw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const S=new Bn;S.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new li(S,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let x=this.type;this.render=function(B,z,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const U=o.getRenderTarget(),D=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Ka),Z.buffers.depth.getReversed()?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const it=x!==da&&this.type===da,lt=x===da&&this.type!==da;for(let ut=0,F=B.length;ut<F;ut++){const Q=B[ut],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const yt=Y.getFrameExtents();if(r.multiply(yt),l.copy(Y.mapSize),(r.x>v||r.y>v)&&(r.x>v&&(l.x=Math.floor(v/yt.x),r.x=l.x*yt.x,Y.mapSize.x=l.x),r.y>v&&(l.y=Math.floor(v/yt.y),r.y=l.y*yt.y,Y.mapSize.y=l.y)),Y.map===null||it===!0||lt===!0){const tt=this.type!==da?{minFilter:ci,magFilter:ci}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Dr(r.x,r.y,tt),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const N=Y.getViewportCount();for(let tt=0;tt<N;tt++){const mt=Y.getViewport(tt);u.set(l.x*mt.x,l.y*mt.y,l.x*mt.z,l.y*mt.w),Z.viewport(u),Y.updateMatrices(Q,tt),a=Y.getFrustum(),w(z,G,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===da&&L(Y,G),Y.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(U,D,I)};function L(B,z){const G=t.update(T);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Dr(r.x,r.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,G,_,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,G,y,T,null)}function R(B,z,G,U){let D=null;const I=G.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(I!==void 0)D=I;else if(D=G.isPointLight===!0?p:f,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=D.uuid,it=z.uuid;let lt=d[Z];lt===void 0&&(lt={},d[Z]=lt);let ut=lt[it];ut===void 0&&(ut=D.clone(),lt[it]=ut,z.addEventListener("dispose",O)),D=ut}if(D.visible=z.visible,D.wireframe=z.wireframe,U===da?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:g[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Z=o.properties.get(D);Z.light=G}return D}function w(B,z,G,U,D){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===da)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld);const it=t.update(B),lt=B.material;if(Array.isArray(lt)){const ut=it.groups;for(let F=0,Q=ut.length;F<Q;F++){const Y=ut[F],yt=lt[Y.materialIndex];if(yt&&yt.visible){const N=R(B,yt,U,D);B.onBeforeShadow(o,B,z,G,it,N,Y),o.renderBufferDirect(G,null,it,N,B,Y),B.onAfterShadow(o,B,z,G,it,N,Y)}}}else if(lt.visible){const ut=R(B,lt,U,D);B.onBeforeShadow(o,B,z,G,it,ut,null),o.renderBufferDirect(G,null,it,ut,B,null),B.onAfterShadow(o,B,z,G,it,ut,null)}}const Z=B.children;for(let it=0,lt=Z.length;it<lt;it++)w(Z[it],z,G,U,D)}function O(B){B.target.removeEventListener("dispose",O);for(const G in d){const U=d[G],D=B.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const Rw={[pd]:md,[gd]:yd,[vd]:xd,[Fs]:_d,[md]:pd,[yd]:gd,[xd]:vd,[_d]:Fs};function Cw(o,t){function e(){let X=!1;const bt=new Te;let Rt=null;const It=new Te(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!X&&(o.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,vt,Gt,se,Oe){Oe===!0&&(Et*=se,vt*=se,Gt*=se),bt.set(Et,vt,Gt,se),It.equals(bt)===!1&&(o.clearColor(Et,vt,Gt,se),It.copy(bt))},reset:function(){X=!1,Rt=null,It.set(-1,0,0,0)}}}function a(){let X=!1,bt=!1,Rt=null,It=null,Et=null;return{setReversed:function(vt){if(bt!==vt){const Gt=t.get("EXT_clip_control");vt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=vt;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return bt},setTest:function(vt){vt?St(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(vt){Rt!==vt&&!X&&(o.depthMask(vt),Rt=vt)},setFunc:function(vt){if(bt&&(vt=Rw[vt]),It!==vt){switch(vt){case pd:o.depthFunc(o.NEVER);break;case md:o.depthFunc(o.ALWAYS);break;case gd:o.depthFunc(o.LESS);break;case Fs:o.depthFunc(o.LEQUAL);break;case vd:o.depthFunc(o.EQUAL);break;case _d:o.depthFunc(o.GEQUAL);break;case yd:o.depthFunc(o.GREATER);break;case xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Et!==vt&&(bt&&(vt=1-vt),o.clearDepth(vt),Et=vt)},reset:function(){X=!1,Rt=null,It=null,Et=null,bt=!1}}}function r(){let X=!1,bt=null,Rt=null,It=null,Et=null,vt=null,Gt=null,se=null,Oe=null;return{setTest:function(we){X||(we?St(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(we){bt!==we&&!X&&(o.stencilMask(we),bt=we)},setFunc:function(we,Si,pn){(Rt!==we||It!==Si||Et!==pn)&&(o.stencilFunc(we,Si,pn),Rt=we,It=Si,Et=pn)},setOp:function(we,Si,pn){(vt!==we||Gt!==Si||se!==pn)&&(o.stencilOp(we,Si,pn),vt=we,Gt=Si,se=pn)},setLocked:function(we){X=we},setClear:function(we){Oe!==we&&(o.clearStencil(we),Oe=we)},reset:function(){X=!1,bt=null,Rt=null,It=null,Et=null,vt=null,Gt=null,se=null,Oe=null}}}const l=new e,u=new a,f=new r,p=new WeakMap,d=new WeakMap;let v={},g={},_=new WeakMap,y=[],S=null,T=!1,M=null,x=null,L=null,R=null,w=null,O=null,B=null,z=new ae(0,0,0),G=0,U=!1,D=null,I=null,Z=null,it=null,lt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Q=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=Q>=2);let yt=null,N={};const tt=o.getParameter(o.SCISSOR_BOX),mt=o.getParameter(o.VIEWPORT),xt=new Te().fromArray(tt),wt=new Te().fromArray(mt);function nt(X,bt,Rt,It){const Et=new Uint8Array(4),vt=o.createTexture();o.bindTexture(X,vt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Rt;Gt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return vt}const dt={};dt[o.TEXTURE_2D]=nt(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),St(o.DEPTH_TEST),u.setFunc(Fs),Ae(!1),Ft(o_),St(o.CULL_FACE),Ne(Ka);function St(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Dt(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function Yt(X,bt){return g[X]!==bt?(o.bindFramebuffer(X,bt),g[X]=bt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function re(X,bt){let Rt=y,It=!1;if(X){Rt=_.get(bt),Rt===void 0&&(Rt=[],_.set(bt,Rt));const Et=X.textures;if(Rt.length!==Et.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Gt=Et.length;vt<Gt;vt++)Rt[vt]=o.COLOR_ATTACHMENT0+vt;Rt.length=Et.length,It=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,It=!0);It&&o.drawBuffers(Rt)}function Xe(X){return S!==X?(o.useProgram(X),S=X,!0):!1}const _e={[br]:o.FUNC_ADD,[NS]:o.FUNC_SUBTRACT,[OS]:o.FUNC_REVERSE_SUBTRACT};_e[PS]=o.MIN,_e[IS]=o.MAX;const V={[BS]:o.ZERO,[FS]:o.ONE,[zS]:o.SRC_COLOR,[hd]:o.SRC_ALPHA,[WS]:o.SRC_ALPHA_SATURATE,[kS]:o.DST_COLOR,[VS]:o.DST_ALPHA,[HS]:o.ONE_MINUS_SRC_COLOR,[dd]:o.ONE_MINUS_SRC_ALPHA,[XS]:o.ONE_MINUS_DST_COLOR,[GS]:o.ONE_MINUS_DST_ALPHA,[qS]:o.CONSTANT_COLOR,[YS]:o.ONE_MINUS_CONSTANT_COLOR,[jS]:o.CONSTANT_ALPHA,[ZS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ne(X,bt,Rt,It,Et,vt,Gt,se,Oe,we){if(X===Ka){T===!0&&(Dt(o.BLEND),T=!1);return}if(T===!1&&(St(o.BLEND),T=!0),X!==LS){if(X!==M||we!==U){if((x!==br||w!==br)&&(o.blendEquation(o.FUNC_ADD),x=br,w=br),we)switch(X){case Ps:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case l_:o.blendFunc(o.ONE,o.ONE);break;case c_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case u_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ps:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case l_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case c_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case u_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,R=null,O=null,B=null,z.set(0,0,0),G=0,M=X,U=we}return}Et=Et||bt,vt=vt||Rt,Gt=Gt||It,(bt!==x||Et!==w)&&(o.blendEquationSeparate(_e[bt],_e[Et]),x=bt,w=Et),(Rt!==L||It!==R||vt!==O||Gt!==B)&&(o.blendFuncSeparate(V[Rt],V[It],V[vt],V[Gt]),L=Rt,R=It,O=vt,B=Gt),(se.equals(z)===!1||Oe!==G)&&(o.blendColor(se.r,se.g,se.b,Oe),z.copy(se),G=Oe),M=X,U=!1}function Jt(X,bt){X.side===Kn?Dt(o.CULL_FACE):St(o.CULL_FACE);let Rt=X.side===Qn;bt&&(Rt=!Rt),Ae(Rt),X.blending===Ps&&X.transparent===!1?Ne(Ka):Ne(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const It=X.stencilWrite;f.setTest(It),It&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function Ft(X){X!==DS?(St(o.CULL_FACE),X!==I&&(X===o_?o.cullFace(o.BACK):X===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),I=X}function We(X){X!==Z&&(F&&o.lineWidth(X),Z=X)}function zt(X,bt,Rt){X?(St(o.POLYGON_OFFSET_FILL),(it!==bt||lt!==Rt)&&(o.polygonOffset(bt,Rt),it=bt,lt=Rt)):Dt(o.POLYGON_OFFSET_FILL)}function le(X){X?St(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Je(X){X===void 0&&(X=o.TEXTURE0+ut-1),yt!==X&&(o.activeTexture(X),yt=X)}function $e(X,bt,Rt){Rt===void 0&&(yt===null?Rt=o.TEXTURE0+ut-1:Rt=yt);let It=N[Rt];It===void 0&&(It={type:void 0,texture:void 0},N[Rt]=It),(It.type!==X||It.texture!==bt)&&(yt!==Rt&&(o.activeTexture(Rt),yt=Rt),o.bindTexture(X,bt||dt[X]),It.type=X,It.texture=bt)}function P(){const X=N[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){xt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function Kt(X){wt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function kt(X,bt){let Rt=d.get(bt);Rt===void 0&&(Rt=new WeakMap,d.set(bt,Rt));let It=Rt.get(X);It===void 0&&(It=o.getUniformBlockIndex(bt,X.name),Rt.set(X,It))}function Ct(X,bt){const It=d.get(bt).get(X);p.get(bt)!==It&&(o.uniformBlockBinding(bt,It,X.__bindingPointIndex),p.set(bt,It))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,N={},g={},_=new WeakMap,y=[],S=null,T=!1,M=null,x=null,L=null,R=null,w=null,O=null,B=null,z=new ae(0,0,0),G=0,U=!1,D=null,I=null,Z=null,it=null,lt=null,xt.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:St,disable:Dt,bindFramebuffer:Yt,drawBuffers:re,useProgram:Xe,setBlending:Ne,setMaterial:Jt,setFlipSided:Ae,setCullFace:Ft,setLineWidth:We,setPolygonOffset:zt,setScissorTest:le,activeTexture:Je,bindTexture:$e,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:qt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Ct,texStorage2D:At,texStorage3D:Xt,texSubImage2D:ft,texSubImage3D:_t,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:Lt,viewport:Kt,reset:oe}}function Dw(o,t,e,a,r,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ee,v=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,b){return y?new OffscreenCanvas(P,b):ol("canvas")}function T(P,b,et){let ft=1;const _t=$e(P);if((_t.width>et||_t.height>et)&&(ft=et/Math.max(_t.width,_t.height)),ft<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ct=Math.floor(ft*_t.width),Pt=Math.floor(ft*_t.height);g===void 0&&(g=S(ct,Pt));const At=b?S(ct,Pt):g;return At.width=ct,At.height=Pt,At.getContext("2d").drawImage(P,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ct+"x"+Pt+")."),At}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),P;return P}function M(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(P,b,et,ft,_t=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=b;if(b===o.RED&&(et===o.FLOAT&&(ct=o.R32F),et===o.HALF_FLOAT&&(ct=o.R16F),et===o.UNSIGNED_BYTE&&(ct=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.R8UI),et===o.UNSIGNED_SHORT&&(ct=o.R16UI),et===o.UNSIGNED_INT&&(ct=o.R32UI),et===o.BYTE&&(ct=o.R8I),et===o.SHORT&&(ct=o.R16I),et===o.INT&&(ct=o.R32I)),b===o.RG&&(et===o.FLOAT&&(ct=o.RG32F),et===o.HALF_FLOAT&&(ct=o.RG16F),et===o.UNSIGNED_BYTE&&(ct=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RG8UI),et===o.UNSIGNED_SHORT&&(ct=o.RG16UI),et===o.UNSIGNED_INT&&(ct=o.RG32UI),et===o.BYTE&&(ct=o.RG8I),et===o.SHORT&&(ct=o.RG16I),et===o.INT&&(ct=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),et===o.UNSIGNED_INT&&(ct=o.RGB32UI),et===o.BYTE&&(ct=o.RGB8I),et===o.SHORT&&(ct=o.RGB16I),et===o.INT&&(ct=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),et===o.UNSIGNED_INT&&(ct=o.RGBA32UI),et===o.BYTE&&(ct=o.RGBA8I),et===o.SHORT&&(ct=o.RGBA16I),et===o.INT&&(ct=o.RGBA32I)),b===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),b===o.RGBA){const Pt=_t?ru:Ue.getTransfer(ft);et===o.FLOAT&&(ct=o.RGBA32F),et===o.HALF_FLOAT&&(ct=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ct=Pt===Ve?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(P,b){let et;return P?b===null||b===Cr||b===al?et=o.DEPTH24_STENCIL8:b===Gi?et=o.DEPTH32F_STENCIL8:b===il&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Cr||b===al?et=o.DEPTH_COMPONENT24:b===Gi?et=o.DEPTH_COMPONENT32F:b===il&&(et=o.DEPTH_COMPONENT16),et}function O(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==Vi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function B(P){const b=P.target;b.removeEventListener("dispose",B),G(b),b.isVideoTexture&&v.delete(b)}function z(P){const b=P.target;b.removeEventListener("dispose",z),D(b)}function G(P){const b=a.get(P);if(b.__webglInit===void 0)return;const et=P.source,ft=_.get(et);if(ft){const _t=ft[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&U(P),Object.keys(ft).length===0&&_.delete(et)}a.remove(P)}function U(P){const b=a.get(P);o.deleteTexture(b.__webglTexture);const et=P.source,ft=_.get(et);delete ft[b.__cacheKey],u.memory.textures--}function D(P){const b=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let _t=0;_t<b.__webglFramebuffer[ft].length;_t++)o.deleteFramebuffer(b.__webglFramebuffer[ft][_t]);else o.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)o.deleteFramebuffer(b.__webglFramebuffer[ft]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=P.textures;for(let ft=0,_t=et.length;ft<_t;ft++){const ct=a.get(et[ft]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),u.memory.textures--),a.remove(et[ft])}a.remove(P)}let I=0;function Z(){I=0}function it(){const P=I;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function lt(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ut(P,b){const et=a.get(P);if(P.isVideoTexture&&le(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const ft=P.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(et,P,b);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function F(P,b){const et=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){dt(et,P,b);return}e.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function Q(P,b){const et=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){dt(et,P,b);return}e.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function Y(P,b){const et=a.get(P);if(P.version>0&&et.__version!==P.version){St(et,P,b);return}e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const yt={[nl]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Md]:o.MIRRORED_REPEAT},N={[ci]:o.NEAREST,[sM]:o.NEAREST_MIPMAP_NEAREST,[Tc]:o.NEAREST_MIPMAP_LINEAR,[Vi]:o.LINEAR,[Ah]:o.LINEAR_MIPMAP_NEAREST,[wr]:o.LINEAR_MIPMAP_LINEAR},tt={[pM]:o.NEVER,[xM]:o.ALWAYS,[mM]:o.LESS,[I0]:o.LEQUAL,[gM]:o.EQUAL,[yM]:o.GEQUAL,[vM]:o.GREATER,[_M]:o.NOTEQUAL};function mt(P,b){if(b.type===Gi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Vi||b.magFilter===Ah||b.magFilter===Tc||b.magFilter===wr||b.minFilter===Vi||b.minFilter===Ah||b.minFilter===Tc||b.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,yt[b.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,yt[b.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,yt[b.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,N[b.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ci||b.minFilter!==Tc&&b.minFilter!==wr||b.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function xt(P,b){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",B));const ft=b.source;let _t=_.get(ft);_t===void 0&&(_t={},_.set(ft,_t));const ct=lt(b);if(ct!==P.__cacheKey){_t[ct]===void 0&&(_t[ct]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,et=!0),_t[ct].usedTimes++;const Pt=_t[P.__cacheKey];Pt!==void 0&&(_t[P.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(b)),P.__cacheKey=ct,P.__webglTexture=_t[ct].texture}return et}function wt(P,b,et){return Math.floor(Math.floor(P/et)/b)}function nt(P,b,et,ft){const ct=P.updateRanges;if(ct.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,ft,b.data);else{ct.sort((Mt,Lt)=>Mt.start-Lt.start);let Pt=0;for(let Mt=1;Mt<ct.length;Mt++){const Lt=ct[Pt],Kt=ct[Mt],kt=Lt.start+Lt.count,Ct=wt(Kt.start,b.width,4),oe=wt(Lt.start,b.width,4);Kt.start<=kt+1&&Ct===oe&&wt(Kt.start+Kt.count-1,b.width,4)===Ct?Lt.count=Math.max(Lt.count,Kt.start+Kt.count-Lt.start):(++Pt,ct[Pt]=Kt)}ct.length=Pt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,Lt=ct.length;Mt<Lt;Mt++){const Kt=ct[Mt],kt=Math.floor(Kt.start/4),Ct=Math.ceil(Kt.count/4),oe=kt%b.width,X=Math.floor(kt/b.width),bt=Ct,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),e.texSubImage2D(o.TEXTURE_2D,0,oe,X,bt,Rt,et,ft,b.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function dt(P,b,et){let ft=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=o.TEXTURE_3D);const _t=xt(P,b),ct=b.source;e.bindTexture(ft,P.__webglTexture,o.TEXTURE0+et);const Pt=a.get(ct);if(ct.version!==Pt.__version||_t===!0){e.activeTexture(o.TEXTURE0+et);const At=Ue.getPrimaries(Ue.workingColorSpace),Xt=b.colorSpace===ja?null:Ue.getPrimaries(b.colorSpace),qt=b.colorSpace===ja||At===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=T(b.image,!1,r.maxTextureSize);Mt=Je(b,Mt);const Lt=l.convert(b.format,b.colorSpace),Kt=l.convert(b.type);let kt=R(b.internalFormat,Lt,Kt,b.colorSpace,b.isVideoTexture);mt(ft,b);let Ct;const oe=b.mipmaps,X=b.isVideoTexture!==!0,bt=Pt.__version===void 0||_t===!0,Rt=ct.dataReady,It=O(b,Mt);if(b.isDepthTexture)kt=w(b.format===sl,b.type),bt&&(X?e.texStorage2D(o.TEXTURE_2D,1,kt,Mt.width,Mt.height):e.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Lt,Kt,null));else if(b.isDataTexture)if(oe.length>0){X&&bt&&e.texStorage2D(o.TEXTURE_2D,It,kt,oe[0].width,oe[0].height);for(let Et=0,vt=oe.length;Et<vt;Et++)Ct=oe[Et],X?Rt&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):e.texImage2D(o.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data);b.generateMipmaps=!1}else X?(bt&&e.texStorage2D(o.TEXTURE_2D,It,kt,Mt.width,Mt.height),Rt&&nt(b,Mt,Lt,Kt)):e.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Lt,Kt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&bt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,kt,oe[0].width,oe[0].height,Mt.depth);for(let Et=0,vt=oe.length;Et<vt;Et++)if(Ct=oe[Et],b.format!==xi)if(Lt!==null)if(X){if(Rt)if(b.layerUpdates.size>0){const Gt=K_(Ct.width,Ct.height,b.format,b.type);for(const se of b.layerUpdates){const Oe=Ct.data.subarray(se*Gt/Ct.data.BYTES_PER_ELEMENT,(se+1)*Gt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,se,Ct.width,Ct.height,1,Lt,Oe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Ct.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Rt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Kt,Ct.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Ct.width,Ct.height,Mt.depth,0,Lt,Kt,Ct.data)}else{X&&bt&&e.texStorage2D(o.TEXTURE_2D,It,kt,oe[0].width,oe[0].height);for(let Et=0,vt=oe.length;Et<vt;Et++)Ct=oe[Et],b.format!==xi?Lt!==null?X?Rt&&e.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):e.compressedTexImage2D(o.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Rt&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):e.texImage2D(o.TEXTURE_2D,Et,kt,Ct.width,Ct.height,0,Lt,Kt,Ct.data)}else if(b.isDataArrayTexture)if(X){if(bt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,kt,Mt.width,Mt.height,Mt.depth),Rt)if(b.layerUpdates.size>0){const Et=K_(Mt.width,Mt.height,b.format,b.type);for(const vt of b.layerUpdates){const Gt=Mt.data.subarray(vt*Et/Mt.data.BYTES_PER_ELEMENT,(vt+1)*Et/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Lt,Kt,Gt)}b.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Kt,Mt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Lt,Kt,Mt.data);else if(b.isData3DTexture)X?(bt&&e.texStorage3D(o.TEXTURE_3D,It,kt,Mt.width,Mt.height,Mt.depth),Rt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Kt,Mt.data)):e.texImage3D(o.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Lt,Kt,Mt.data);else if(b.isFramebufferTexture){if(bt)if(X)e.texStorage2D(o.TEXTURE_2D,It,kt,Mt.width,Mt.height);else{let Et=Mt.width,vt=Mt.height;for(let Gt=0;Gt<It;Gt++)e.texImage2D(o.TEXTURE_2D,Gt,kt,Et,vt,0,Lt,Kt,null),Et>>=1,vt>>=1}}else if(oe.length>0){if(X&&bt){const Et=$e(oe[0]);e.texStorage2D(o.TEXTURE_2D,It,kt,Et.width,Et.height)}for(let Et=0,vt=oe.length;Et<vt;Et++)Ct=oe[Et],X?Rt&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt,Kt,Ct):e.texImage2D(o.TEXTURE_2D,Et,kt,Lt,Kt,Ct);b.generateMipmaps=!1}else if(X){if(bt){const Et=$e(Mt);e.texStorage2D(o.TEXTURE_2D,It,kt,Et.width,Et.height)}Rt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,Kt,Mt)}else e.texImage2D(o.TEXTURE_2D,0,kt,Lt,Kt,Mt);M(b)&&x(ft),Pt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function St(P,b,et){if(b.image.length!==6)return;const ft=xt(P,b),_t=b.source;e.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+et);const ct=a.get(_t);if(_t.version!==ct.__version||ft===!0){e.activeTexture(o.TEXTURE0+et);const Pt=Ue.getPrimaries(Ue.workingColorSpace),At=b.colorSpace===ja?null:Ue.getPrimaries(b.colorSpace),Xt=b.colorSpace===ja||Pt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let vt=0;vt<6;vt++)!qt&&!Mt?Lt[vt]=T(b.image[vt],!0,r.maxCubemapSize):Lt[vt]=Mt?b.image[vt].image:b.image[vt],Lt[vt]=Je(b,Lt[vt]);const Kt=Lt[0],kt=l.convert(b.format,b.colorSpace),Ct=l.convert(b.type),oe=R(b.internalFormat,kt,Ct,b.colorSpace),X=b.isVideoTexture!==!0,bt=ct.__version===void 0||ft===!0,Rt=_t.dataReady;let It=O(b,Kt);mt(o.TEXTURE_CUBE_MAP,b);let Et;if(qt){X&&bt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,Kt.width,Kt.height);for(let vt=0;vt<6;vt++){Et=Lt[vt].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const se=Et[Gt];b.format!==xi?kt!==null?X?Rt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,se.width,se.height,kt,se.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,oe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,se.width,se.height,kt,Ct,se.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,oe,se.width,se.height,0,kt,Ct,se.data)}}}else{if(Et=b.mipmaps,X&&bt){Et.length>0&&It++;const vt=$e(Lt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){X?Rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Lt[vt].width,Lt[vt].height,kt,Ct,Lt[vt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Lt[vt].width,Lt[vt].height,0,kt,Ct,Lt[vt].data);for(let Gt=0;Gt<Et.length;Gt++){const Oe=Et[Gt].image[vt].image;X?Rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,Oe.width,Oe.height,kt,Ct,Oe.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,oe,Oe.width,Oe.height,0,kt,Ct,Oe.data)}}else{X?Rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,Ct,Lt[vt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,kt,Ct,Lt[vt]);for(let Gt=0;Gt<Et.length;Gt++){const se=Et[Gt];X?Rt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,kt,Ct,se.image[vt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,oe,kt,Ct,se.image[vt])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),ct.__version=_t.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Dt(P,b,et,ft,_t,ct){const Pt=l.convert(et.format,et.colorSpace),At=l.convert(et.type),Xt=R(et.internalFormat,Pt,At,et.colorSpace),qt=a.get(b),Mt=a.get(et);if(Mt.__renderTarget=b,!qt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ct),Kt=Math.max(1,b.height>>ct);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?e.texImage3D(_t,ct,Xt,Lt,Kt,b.depth,0,Pt,At,null):e.texImage2D(_t,ct,Xt,Lt,Kt,0,Pt,At,null)}e.bindFramebuffer(o.FRAMEBUFFER,P),zt(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,_t,Mt.__webglTexture,0,We(b)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,_t,Mt.__webglTexture,ct),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(P,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,P),b.depthBuffer){const ft=b.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,ct=w(b.stencilBuffer,_t),Pt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=We(b);zt(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ct,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ct,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ct,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,P)}else{const ft=b.textures;for(let _t=0;_t<ft.length;_t++){const ct=ft[_t],Pt=l.convert(ct.format,ct.colorSpace),At=l.convert(ct.type),Xt=R(ct.internalFormat,Pt,At,ct.colorSpace),qt=We(b);et&&zt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Xt,b.width,b.height):zt(b)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Xt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function re(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=a.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const _t=ft.__webglTexture,ct=We(b);if(b.depthTexture.format===rl)zt(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(b.depthTexture.format===sl)zt(b)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const b=a.get(P),et=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ft=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=ft}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=P.texture.mipmaps;ft&&ft.length>0?re(b.__webglFramebuffer[0],P):re(b.__webglFramebuffer,P)}else if(et){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=o.createRenderbuffer(),Yt(b.__webglDepthbuffer[ft],P,!1);else{const _t=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}else{const ft=P.texture.mipmaps;if(ft&&ft.length>0?e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Yt(b.__webglDepthbuffer,P,!1);else{const _t=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function _e(P,b,et){const ft=a.get(P);b!==void 0&&Dt(ft.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Xe(P)}function V(P){const b=P.texture,et=a.get(P),ft=a.get(b);P.addEventListener("dispose",z);const _t=P.textures,ct=P.isWebGLCubeRenderTarget===!0,Pt=_t.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=b.version,u.memory.textures++),ct){et.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[At]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)et.__webglFramebuffer[At][Xt]=o.createFramebuffer()}else et.__webglFramebuffer[At]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)et.__webglFramebuffer[At]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let At=0,Xt=_t.length;At<Xt;At++){const qt=a.get(_t[At]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),u.memory.textures++)}if(P.samples>0&&zt(P)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let At=0;At<_t.length;At++){const Xt=_t[At];et.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[At]);const qt=l.convert(Xt.format,Xt.colorSpace),Mt=l.convert(Xt.type),Lt=R(Xt.internalFormat,qt,Mt,Xt.colorSpace,P.isXRRenderTarget===!0),Kt=We(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Lt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,et.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Yt(et.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){e.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),mt(o.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(et.__webglFramebuffer[At][Xt],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Xt);else Dt(et.__webglFramebuffer[At],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(b)&&x(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let At=0,Xt=_t.length;At<Xt;At++){const qt=_t[At],Mt=a.get(qt);let Lt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Mt.__webglTexture),mt(Lt,qt),Dt(et.__webglFramebuffer,P,qt,o.COLOR_ATTACHMENT0+At,Lt,0),M(qt)&&x(Lt)}e.unbindTexture()}else{let At=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(At=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(At,ft.__webglTexture),mt(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Dt(et.__webglFramebuffer[Xt],P,b,o.COLOR_ATTACHMENT0,At,Xt);else Dt(et.__webglFramebuffer,P,b,o.COLOR_ATTACHMENT0,At,0);M(b)&&x(At),e.unbindTexture()}P.depthBuffer&&Xe(P)}function Ne(P){const b=P.textures;for(let et=0,ft=b.length;et<ft;et++){const _t=b[et];if(M(_t)){const ct=L(P),Pt=a.get(_t).__webglTexture;e.bindTexture(ct,Pt),x(ct),e.unbindTexture()}}}const Jt=[],Ae=[];function Ft(P){if(P.samples>0){if(zt(P)===!1){const b=P.textures,et=P.width,ft=P.height;let _t=o.COLOR_BUFFER_BIT;const ct=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=a.get(P),At=b.length>1;if(At)for(let qt=0;qt<b.length;qt++)e.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Xt=P.texture.mipmaps;Xt&&Xt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<b.length;qt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=a.get(b[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,_t,o.NEAREST),p===!0&&(Jt.length=0,Ae.length=0,Jt.push(o.COLOR_ATTACHMENT0+qt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Jt.push(ct),Ae.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let qt=0;qt<b.length;qt++){e.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=a.get(b[qt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Mt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const b=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function We(P){return Math.min(r.maxSamples,P.samples)}function zt(P){const b=a.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(P){const b=u.render.frame;v.get(P)!==b&&(v.set(P,b),P.update())}function Je(P,b){const et=P.colorSpace,ft=P.format,_t=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==Vs&&et!==ja&&(Ue.getTransfer(et)===Ve?(ft!==xi||_t!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function $e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=it,this.resetTextureUnits=Z,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=_e,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=zt}function Uw(o,t){function e(a,r=ja){let l;const u=Ue.getTransfer(r);if(a===Wi)return o.UNSIGNED_BYTE;if(a===ap)return o.UNSIGNED_SHORT_4_4_4_4;if(a===rp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===D0)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===R0)return o.BYTE;if(a===C0)return o.SHORT;if(a===il)return o.UNSIGNED_SHORT;if(a===ip)return o.INT;if(a===Cr)return o.UNSIGNED_INT;if(a===Gi)return o.FLOAT;if(a===ul)return o.HALF_FLOAT;if(a===U0)return o.ALPHA;if(a===L0)return o.RGB;if(a===xi)return o.RGBA;if(a===rl)return o.DEPTH_COMPONENT;if(a===sl)return o.DEPTH_STENCIL;if(a===N0)return o.RED;if(a===sp)return o.RED_INTEGER;if(a===O0)return o.RG;if(a===op)return o.RG_INTEGER;if(a===lp)return o.RGBA_INTEGER;if(a===Kc||a===Qc||a===Jc||a===$c)if(u===Ve)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Kc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Qc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Jc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===$c)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Kc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Qc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Jc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===$c)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ed||a===Td||a===bd||a===Ad)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Ed)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Td)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ad)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wd||a===Rd||a===Cd)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===wd||a===Rd)return u===Ve?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Cd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===Pd||a===Id||a===Bd||a===Fd||a===zd||a===Hd||a===Vd||a===Gd||a===kd)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Dd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ud)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ld)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Nd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Od)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Pd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Id)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Bd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Fd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===zd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Hd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Vd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Gd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===kd)return u===Ve?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===tu||a===Xd||a===Wd)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===tu)return u===Ve?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Wd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===P0||a===qd||a===Yd||a===jd)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===tu)return l.COMPRESSED_RED_RGTC1_EXT;if(a===qd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===jd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===al?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:e}}class ay extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const Lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
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

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const a=new ay(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,a=new ga({vertexShader:Lw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new li(new fl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pw extends Ur{constructor(t,e){super();const a=this;let r=null,l=1,u=null,f="local-floor",p=1,d=null,v=null,g=null,_=null,y=null,S=null;const T=new Ow,M={},x=e.getContextAttributes();let L=null,R=null;const w=[],O=[],B=new Ee;let z=null;const G=new kn;G.viewport=new Te;const U=new kn;U.viewport=new Te;const D=[G,U],I=new FE;let Z=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let dt=w[nt];return dt===void 0&&(dt=new jh,w[nt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(nt){let dt=w[nt];return dt===void 0&&(dt=new jh,w[nt]=dt),dt.getGripSpace()},this.getHand=function(nt){let dt=w[nt];return dt===void 0&&(dt=new jh,w[nt]=dt),dt.getHandSpace()};function lt(nt){const dt=O.indexOf(nt.inputSource);if(dt===-1)return;const St=w[dt];St!==void 0&&(St.update(nt.inputSource,nt.frame,d||u),St.dispatchEvent({type:nt.type,data:nt.inputSource}))}function ut(){r.removeEventListener("select",lt),r.removeEventListener("selectstart",lt),r.removeEventListener("selectend",lt),r.removeEventListener("squeeze",lt),r.removeEventListener("squeezestart",lt),r.removeEventListener("squeezeend",lt),r.removeEventListener("end",ut),r.removeEventListener("inputsourceschange",F);for(let nt=0;nt<w.length;nt++){const dt=O[nt];dt!==null&&(O[nt]=null,w[nt].disconnect(dt))}Z=null,it=null,T.reset();for(const nt in M)delete M[nt];t.setRenderTarget(L),y=null,_=null,g=null,r=null,R=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(z),t.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){l=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(L=t.getRenderTarget(),r.addEventListener("select",lt),r.addEventListener("selectstart",lt),r.addEventListener("selectend",lt),r.addEventListener("squeeze",lt),r.addEventListener("squeezestart",lt),r.addEventListener("squeezeend",lt),r.addEventListener("end",ut),r.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(r,e)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Dt=null,Yt=null;x.depth&&(Yt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=x.stencil?sl:rl,Dt=x.stencil?al:Cr);const re={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:l};_=g.createProjectionLayer(re),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),R=new Dr(_.textureWidth,_.textureHeight,{format:xi,type:Wi,depthTexture:new Y0(_.textureWidth,_.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const St={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(r,e,St),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Dr(y.framebufferWidth,y.framebufferHeight,{format:xi,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(f),wt.setContext(r),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function F(nt){for(let dt=0;dt<nt.removed.length;dt++){const St=nt.removed[dt],Dt=O.indexOf(St);Dt>=0&&(O[Dt]=null,w[Dt].disconnect(St))}for(let dt=0;dt<nt.added.length;dt++){const St=nt.added[dt];let Dt=O.indexOf(St);if(Dt===-1){for(let re=0;re<w.length;re++)if(re>=O.length){O.push(St),Dt=re;break}else if(O[re]===null){O[re]=St,Dt=re;break}if(Dt===-1)break}const Yt=w[Dt];Yt&&Yt.connect(St)}}const Q=new W,Y=new W;function yt(nt,dt,St){Q.setFromMatrixPosition(dt.matrixWorld),Y.setFromMatrixPosition(St.matrixWorld);const Dt=Q.distanceTo(Y),Yt=dt.projectionMatrix.elements,re=St.projectionMatrix.elements,Xe=Yt[14]/(Yt[10]-1),_e=Yt[14]/(Yt[10]+1),V=(Yt[9]+1)/Yt[5],Ne=(Yt[9]-1)/Yt[5],Jt=(Yt[8]-1)/Yt[0],Ae=(re[8]+1)/re[0],Ft=Xe*Jt,We=Xe*Ae,zt=Dt/(-Jt+Ae),le=zt*-Jt;if(dt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(le),nt.translateZ(zt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Yt[10]===-1)nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Je=Xe+zt,$e=_e+zt,P=Ft-le,b=We+(Dt-le),et=V*_e/$e*Je,ft=Ne*_e/$e*Je;nt.projectionMatrix.makePerspective(P,b,et,ft,Je,$e),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function N(nt,dt){dt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(dt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let dt=nt.near,St=nt.far;T.texture!==null&&(T.depthNear>0&&(dt=T.depthNear),T.depthFar>0&&(St=T.depthFar)),I.near=U.near=G.near=dt,I.far=U.far=G.far=St,(Z!==I.near||it!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),Z=I.near,it=I.far),I.layers.mask=nt.layers.mask|6,G.layers.mask=I.layers.mask&3,U.layers.mask=I.layers.mask&5;const Dt=nt.parent,Yt=I.cameras;N(I,Dt);for(let re=0;re<Yt.length;re++)N(Yt[re],Dt);Yt.length===2?yt(I,G,U):I.projectionMatrix.copy(G.projectionMatrix),tt(nt,I,Dt)};function tt(nt,dt,St){St===null?nt.matrix.copy(dt.matrixWorld):(nt.matrix.copy(St.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(dt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Gs*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(nt){p=nt,_!==null&&(_.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(I)},this.getCameraTexture=function(nt){return M[nt]};let mt=null;function xt(nt,dt){if(v=dt.getViewerPose(d||u),S=dt,v!==null){const St=v.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let Dt=!1;St.length!==I.cameras.length&&(I.cameras.length=0,Dt=!0);for(let _e=0;_e<St.length;_e++){const V=St[_e];let Ne=null;if(y!==null)Ne=y.getViewport(V);else{const Ae=g.getViewSubImage(_,V);Ne=Ae.viewport,_e===0&&(t.setRenderTargetTextures(R,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(R))}let Jt=D[_e];Jt===void 0&&(Jt=new kn,Jt.layers.enable(_e),Jt.viewport=new Te,D[_e]=Jt),Jt.matrix.fromArray(V.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(V.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),_e===0&&(I.matrix.copy(Jt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Dt===!0&&I.cameras.push(Jt)}const Yt=r.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const _e=g.getDepthInformation(St[0]);_e&&_e.isValid&&_e.texture&&T.init(_e,r.renderState)}if(Yt&&Yt.includes("camera-access")&&(t.state.unbindTexture(),g))for(let _e=0;_e<St.length;_e++){const V=St[_e].camera;if(V){let Ne=M[V];Ne||(Ne=new ay,M[V]=Ne);const Jt=g.getCameraImage(V);Ne.sourceTexture=Jt}}}for(let St=0;St<w.length;St++){const Dt=O[St],Yt=w[St];Dt!==null&&Yt!==void 0&&Yt.update(Dt,dt,d||u)}mt&&mt(nt,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),S=null}const wt=new $0;wt.setAnimationLoop(xt),this.setAnimationLoop=function(nt){mt=nt},this.dispose=function(){}}}const Mr=new Dn,Iw=new Zt;function Bw(o,t){function e(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,G0(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function r(M,x,L,R,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(M,x):x.isMeshToonMaterial?(l(M,x),g(M,x)):x.isMeshPhongMaterial?(l(M,x),v(M,x)):x.isMeshStandardMaterial?(l(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,w)):x.isMeshMatcapMaterial?(l(M,x),S(M,x)):x.isMeshDepthMaterial?l(M,x):x.isMeshDistanceMaterial?(l(M,x),T(M,x)):x.isMeshNormalMaterial?l(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?p(M,x,L,R):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,e(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,e(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Qn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,e(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Qn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,e(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,e(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const L=t.get(x),R=L.envMap,w=L.envMapRotation;R&&(M.envMap.value=R,Mr.copy(w),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),M.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(Mr)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,e(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,L,R){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*L,M.scale.value=R*.5,x.map&&(M.map.value=x.map,e(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,e(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,e(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,L){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const L=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function Fw(o,t,e,a){let r={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,R){const w=R.program;a.uniformBlockBinding(L,w)}function d(L,R){let w=r[L.id];w===void 0&&(S(L),w=v(L),r[L.id]=w,L.addEventListener("dispose",M));const O=R.program;a.updateUBOMapping(L,O);const B=t.render.frame;l[L.id]!==B&&(_(L),l[L.id]=B)}function v(L){const R=g();L.__bindingPointIndex=R;const w=o.createBuffer(),O=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,O,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,w),w}function g(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const R=r[L.id],w=L.uniforms,O=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let B=0,z=w.length;B<z;B++){const G=Array.isArray(w[B])?w[B]:[w[B]];for(let U=0,D=G.length;U<D;U++){const I=G[U];if(y(I,B,U,O)===!0){const Z=I.__offset,it=Array.isArray(I.value)?I.value:[I.value];let lt=0;for(let ut=0;ut<it.length;ut++){const F=it[ut],Q=T(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,Z+lt,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,lt),lt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,R,w,O){const B=L.value,z=R+"_"+w;if(O[z]===void 0)return typeof B=="number"||typeof B=="boolean"?O[z]=B:O[z]=B.clone(),!0;{const G=O[z];if(typeof B=="number"||typeof B=="boolean"){if(G!==B)return O[z]=B,!0}else if(G.equals(B)===!1)return G.copy(B),!0}return!1}function S(L){const R=L.uniforms;let w=0;const O=16;for(let z=0,G=R.length;z<G;z++){const U=Array.isArray(R[z])?R[z]:[R[z]];for(let D=0,I=U.length;D<I;D++){const Z=U[D],it=Array.isArray(Z.value)?Z.value:[Z.value];for(let lt=0,ut=it.length;lt<ut;lt++){const F=it[lt],Q=T(F),Y=w%O,yt=Y%Q.boundary,N=Y+yt;w+=yt,N!==0&&O-N<Q.storage&&(w+=O-N),Z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=Q.storage}}}const B=w%O;return B>0&&(w+=O-B),L.__size=w,L.__cache={},this}function T(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function M(L){const R=L.target;R.removeEventListener("dispose",M);const w=u.indexOf(R.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[R.id]),delete r[R.id],delete l[R.id]}function x(){for(const L in r)o.deleteBuffer(r[L]);u=[],r={},l={}}return{bind:p,update:d,dispose:x}}class zw{constructor(t={}){const{canvas:e=BM(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const S=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const L=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=_i;let B=0,z=0,G=null,U=-1,D=null;const I=new Te,Z=new Te;let it=null;const lt=new ae(0);let ut=0,F=e.width,Q=e.height,Y=1,yt=null,N=null;const tt=new Te(0,0,F,Q),mt=new Te(0,0,F,Q);let xt=!1;const wt=new gp;let nt=!1,dt=!1;const St=new Zt,Dt=new W,Yt=new Te,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function _e(){return G===null?Y:1}let V=a;function Ne(C,q){return e.getContext(C,q)}try{const C={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cu}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Et,!1),V===null){const q="webgl2";if(V=Ne(q,C),V===null)throw Ne(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Jt,Ae,Ft,We,zt,le,Je,$e,P,b,et,ft,_t,ct,Pt,At,Xt,qt,Mt,Lt,Kt,kt,Ct,oe;function X(){Jt=new Z1(V),Jt.init(),kt=new Uw(V,Jt),Ae=new G1(V,Jt,t,kt),Ft=new Cw(V,Jt),Ae.reversedDepthBuffer&&_&&Ft.buffers.depth.setReversed(!0),We=new J1(V),zt=new gw,le=new Dw(V,Jt,Ft,zt,Ae,kt,We),Je=new X1(w),$e=new j1(w),P=new aT(V),Ct=new H1(V,P),b=new K1(V,P,We,Ct),et=new tA(V,b,P,We),Mt=new $1(V,Ae,le),At=new k1(zt),ft=new mw(w,Je,$e,Jt,Ae,Ct,At),_t=new Bw(w,zt),ct=new _w,Pt=new Tw(Jt),qt=new z1(w,Je,$e,Ft,et,y,p),Xt=new ww(w,et,Ae),oe=new Fw(V,We,Ae,Ft),Lt=new V1(V,Jt,We),Kt=new Q1(V,Jt,We),We.programs=ft.programs,w.capabilities=Ae,w.extensions=Jt,w.properties=zt,w.renderLists=ct,w.shadowMap=Xt,w.state=Ft,w.info=We}X();const bt=new Pw(w,V);this.xr=bt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Jt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Jt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(F,Q,!1))},this.getSize=function(C){return C.set(F,Q)},this.setSize=function(C,q,st=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,Q=q,e.width=Math.floor(C*Y),e.height=Math.floor(q*Y),st===!0&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(F*Y,Q*Y).floor()},this.setDrawingBufferSize=function(C,q,st){F=C,Q=q,Y=st,e.width=Math.floor(C*st),e.height=Math.floor(q*st),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,q,st,ot){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,q,st,ot),Ft.viewport(I.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(mt)},this.setScissor=function(C,q,st,ot){C.isVector4?mt.set(C.x,C.y,C.z,C.w):mt.set(C,q,st,ot),Ft.scissor(Z.copy(mt).multiplyScalar(Y).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(C){Ft.setScissorTest(xt=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,st=!0){let ot=0;if(C){let K=!1;if(G!==null){const Tt=G.texture.format;K=Tt===lp||Tt===op||Tt===sp}if(K){const Tt=G.texture.type,Ut=Tt===Wi||Tt===Cr||Tt===il||Tt===al||Tt===ap||Tt===rp,Bt=qt.getClearColor(),Nt=qt.getClearAlpha(),$t=Bt.r,ee=Bt.g,Wt=Bt.b;Ut?(S[0]=$t,S[1]=ee,S[2]=Wt,S[3]=Nt,V.clearBufferuiv(V.COLOR,0,S)):(T[0]=$t,T[1]=ee,T[2]=Wt,T[3]=Nt,V.clearBufferiv(V.COLOR,0,T))}else ot|=V.COLOR_BUFFER_BIT}q&&(ot|=V.DEPTH_BUFFER_BIT),st&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),qt.dispose(),ct.dispose(),Pt.dispose(),zt.dispose(),Je.dispose(),$e.dispose(),et.dispose(),Ct.dispose(),oe.dispose(),ft.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",pn),bt.removeEventListener("sessionend",mn),nn.stop()};function Rt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const C=We.autoReset,q=Xt.enabled,st=Xt.autoUpdate,ot=Xt.needsUpdate,K=Xt.type;X(),We.autoReset=C,Xt.enabled=q,Xt.autoUpdate=st,Xt.needsUpdate=ot,Xt.type=K}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vt(C){const q=C.target;q.removeEventListener("dispose",vt),Gt(q)}function Gt(C){se(C),zt.remove(C)}function se(C){const q=zt.get(C).programs;q!==void 0&&(q.forEach(function(st){ft.releaseProgram(st)}),C.isShaderMaterial&&ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,st,ot,K,Tt){q===null&&(q=re);const Ut=K.isMesh&&K.matrixWorld.determinant()<0,Bt=va(C,q,st,ot,K);Ft.setMaterial(ot,Ut);let Nt=st.index,$t=1;if(ot.wireframe===!0){if(Nt=b.getWireframeAttribute(st),Nt===void 0)return;$t=2}const ee=st.drawRange,Wt=st.attributes.position;let he=ee.start*$t,Ce=(ee.start+ee.count)*$t;Tt!==null&&(he=Math.max(he,Tt.start*$t),Ce=Math.min(Ce,(Tt.start+Tt.count)*$t)),Nt!==null?(he=Math.max(he,0),Ce=Math.min(Ce,Nt.count)):Wt!=null&&(he=Math.max(he,0),Ce=Math.min(Ce,Wt.count));const Ke=Ce-he;if(Ke<0||Ke===1/0)return;Ct.setup(K,ot,Bt,st,Nt);let Be,de=Lt;if(Nt!==null&&(Be=P.get(Nt),de=Kt,de.setIndex(Be)),K.isMesh)ot.wireframe===!0?(Ft.setLineWidth(ot.wireframeLinewidth*_e()),de.setMode(V.LINES)):de.setMode(V.TRIANGLES);else if(K.isLine){let Qt=ot.linewidth;Qt===void 0&&(Qt=1),Ft.setLineWidth(Qt*_e()),K.isLineSegments?de.setMode(V.LINES):K.isLineLoop?de.setMode(V.LINE_LOOP):de.setMode(V.LINE_STRIP)}else K.isPoints?de.setMode(V.POINTS):K.isSprite&&de.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))de.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qt=K._multiDrawStarts,Ye=K._multiDrawCounts,ye=K._multiDrawCount,Un=Nt?P.get(Nt).bytesPerElement:1,Mi=zt.get(ot).currentProgram.getUniforms();for(let Fn=0;Fn<ye;Fn++)Mi.setValue(V,"_gl_DrawID",Fn),de.render(Qt[Fn]/Un,Ye[Fn])}else if(K.isInstancedMesh)de.renderInstances(he,Ke,K.count);else if(st.isInstancedBufferGeometry){const Qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,Qt);de.renderInstances(he,Ke,Ye)}else de.render(he,Ke)};function Oe(C,q,st){C.transparent===!0&&C.side===Kn&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Ni(C,q,st),C.side=Ja,C.needsUpdate=!0,Ni(C,q,st),C.side=Kn):Ni(C,q,st)}this.compile=function(C,q,st=null){st===null&&(st=C),x=Pt.get(st),x.init(q),R.push(x),st.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),C!==st&&C.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const ot=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Bt=Tt[Ut];Oe(Bt,st,K),ot.add(Bt)}else Oe(Tt,st,K),ot.add(Tt)}),x=R.pop(),ot},this.compileAsync=function(C,q,st=null){const ot=this.compile(C,q,st);return new Promise(K=>{function Tt(){if(ot.forEach(function(Ut){zt.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){K(C);return}setTimeout(Tt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let we=null;function Si(C){we&&we(C)}function pn(){nn.stop()}function mn(){nn.start()}const nn=new $0;nn.setAnimationLoop(Si),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(C){we=C,bt.setAnimationLoop(C),C===null?nn.stop():nn.start()},bt.addEventListener("sessionstart",pn),bt.addEventListener("sessionend",mn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,G),x=Pt.get(C,R.length),x.init(q),R.push(x),St.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),wt.setFromProjectionMatrix(St,ki,q.reversedDepth),dt=this.localClippingEnabled,nt=At.init(this.clippingPlanes,dt),M=ct.get(C,L.length),M.init(),L.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Li(Tt,q,-1/0,w.sortObjects)}Li(C,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(yt,N),Xe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Xe&&qt.addToRenderList(M,C),this.info.render.frame++,nt===!0&&At.beginShadows();const st=x.state.shadowsArray;Xt.render(st,C,q),nt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,K=M.transmissive;if(x.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(K.length>0)for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Nt=Tt[Ut];ml(ot,K,C,Nt)}Xe&&qt.render(C);for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Nt=Tt[Ut];Or(M,C,Nt,Nt.viewport)}}else K.length>0&&ml(ot,K,C,q),Xe&&qt.render(C),Or(M,C,q);G!==null&&z===0&&(le.updateMultisampleRenderTarget(G),le.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(w,C,q),Ct.resetDefaultState(),U=-1,D=null,R.pop(),R.length>0?(x=R[R.length-1],nt===!0&&At.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Li(C,q,st,ot){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||wt.intersectsSprite(C)){ot&&Yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(St);const Ut=et.update(C),Bt=C.material;Bt.visible&&M.push(C,Ut,Bt,st,Yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||wt.intersectsObject(C))){const Ut=et.update(C),Bt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Yt.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Yt.copy(Ut.boundingSphere.center)),Yt.applyMatrix4(C.matrixWorld).applyMatrix4(St)),Array.isArray(Bt)){const Nt=Ut.groups;for(let $t=0,ee=Nt.length;$t<ee;$t++){const Wt=Nt[$t],he=Bt[Wt.materialIndex];he&&he.visible&&M.push(C,Ut,he,st,Yt.z,Wt)}}else Bt.visible&&M.push(C,Ut,Bt,st,Yt.z,null)}}const Tt=C.children;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++)Li(Tt[Ut],q,st,ot)}function Or(C,q,st,ot){const K=C.opaque,Tt=C.transmissive,Ut=C.transparent;x.setupLightsView(st),nt===!0&&At.setGlobalState(w.clippingPlanes,st),ot&&Ft.viewport(I.copy(ot)),K.length>0&&Pr(K,q,st),Tt.length>0&&Pr(Tt,q,st),Ut.length>0&&Pr(Ut,q,st),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function ml(C,q,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new Dr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?ul:Wi,minFilter:wr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||I;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Bt=w.getRenderTarget(),Nt=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(lt),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),Xe&&qt.render(st);const ee=w.toneMapping;w.toneMapping=Qa;const Wt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),nt===!0&&At.setGlobalState(w.clippingPlanes,ot),Pr(C,st,ot),le.updateMultisampleRenderTarget(Tt),le.updateRenderTargetMipmap(Tt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ce=0,Ke=q.length;Ce<Ke;Ce++){const Be=q[Ce],de=Be.object,Qt=Be.geometry,Ye=Be.material,ye=Be.group;if(Ye.side===Kn&&de.layers.test(ot.layers)){const Un=Ye.side;Ye.side=Qn,Ye.needsUpdate=!0,Zs(de,st,ot,Qt,Ye,ye),Ye.side=Un,Ye.needsUpdate=!0,he=!0}}he===!0&&(le.updateMultisampleRenderTarget(Tt),le.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Bt,Nt,$t),w.setClearColor(lt,ut),Wt!==void 0&&(ot.viewport=Wt),w.toneMapping=ee}function Pr(C,q,st){const ot=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Tt=C.length;K<Tt;K++){const Ut=C[K],Bt=Ut.object,Nt=Ut.geometry,$t=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Bt.layers.test(st.layers)&&Zs(Bt,q,st,Nt,ee,$t)}}function Zs(C,q,st,ot,K,Tt){C.onBeforeRender(w,q,st,ot,K,Tt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(w,q,st,ot,C,Tt),K.transparent===!0&&K.side===Kn&&K.forceSinglePass===!1?(K.side=Qn,K.needsUpdate=!0,w.renderBufferDirect(st,q,ot,K,C,Tt),K.side=Ja,K.needsUpdate=!0,w.renderBufferDirect(st,q,ot,K,C,Tt),K.side=Kn):w.renderBufferDirect(st,q,ot,K,C,Tt),C.onAfterRender(w,q,st,ot,K,Tt)}function Ni(C,q,st){q.isScene!==!0&&(q=re);const ot=zt.get(C),K=x.state.lights,Tt=x.state.shadowsArray,Ut=K.state.version,Bt=ft.getParameters(C,K.state,Tt,q,st),Nt=ft.getProgramCacheKey(Bt);let $t=ot.programs;ot.environment=C.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(C.isMeshStandardMaterial?$e:Je).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",vt),$t=new Map,ot.programs=$t);let ee=$t.get(Nt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Ut)return qi(C,Bt),ee}else Bt.uniforms=ft.getUniforms(C),C.onBeforeCompile(Bt,w),ee=ft.acquireProgram(Bt,Nt),$t.set(Nt,ee),ot.uniforms=Bt.uniforms;const Wt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=At.uniform),qi(C,Bt),ot.needsLights=_a(C),ot.lightsStateVersion=Ut,ot.needsLights&&(Wt.ambientLightColor.value=K.state.ambient,Wt.lightProbe.value=K.state.probe,Wt.directionalLights.value=K.state.directional,Wt.directionalLightShadows.value=K.state.directionalShadow,Wt.spotLights.value=K.state.spot,Wt.spotLightShadows.value=K.state.spotShadow,Wt.rectAreaLights.value=K.state.rectArea,Wt.ltc_1.value=K.state.rectAreaLTC1,Wt.ltc_2.value=K.state.rectAreaLTC2,Wt.pointLights.value=K.state.point,Wt.pointLightShadows.value=K.state.pointShadow,Wt.hemisphereLights.value=K.state.hemi,Wt.directionalShadowMap.value=K.state.directionalShadowMap,Wt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Wt.spotShadowMap.value=K.state.spotShadowMap,Wt.spotLightMatrix.value=K.state.spotLightMatrix,Wt.spotLightMap.value=K.state.spotLightMap,Wt.pointShadowMap.value=K.state.pointShadowMap,Wt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Ir(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=eu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function qi(C,q){const st=zt.get(C);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function va(C,q,st,ot,K){q.isScene!==!0&&(q=re),le.resetTextureUnits();const Tt=q.fog,Ut=ot.isMeshStandardMaterial?q.environment:null,Bt=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Vs,Nt=(ot.isMeshStandardMaterial?$e:Je).get(ot.envMap||Ut),$t=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Wt=!!st.morphAttributes.position,he=!!st.morphAttributes.normal,Ce=!!st.morphAttributes.color;let Ke=Qa;ot.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ke=w.toneMapping);const Be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,de=Be!==void 0?Be.length:0,Qt=zt.get(ot),Ye=x.state.lights;if(nt===!0&&(dt===!0||C!==D)){const an=C===D&&ot.id===U;At.setState(ot,C,an)}let ye=!1;ot.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ye.state.version||Qt.outputColorSpace!==Bt||K.isBatchedMesh&&Qt.batching===!1||!K.isBatchedMesh&&Qt.batching===!0||K.isBatchedMesh&&Qt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qt.instancing===!1||!K.isInstancedMesh&&Qt.instancing===!0||K.isSkinnedMesh&&Qt.skinning===!1||!K.isSkinnedMesh&&Qt.skinning===!0||K.isInstancedMesh&&Qt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qt.instancingMorph===!1&&K.morphTexture!==null||Qt.envMap!==Nt||ot.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==At.numPlanes||Qt.numIntersection!==At.numIntersection)||Qt.vertexAlphas!==$t||Qt.vertexTangents!==ee||Qt.morphTargets!==Wt||Qt.morphNormals!==he||Qt.morphColors!==Ce||Qt.toneMapping!==Ke||Qt.morphTargetsCount!==de)&&(ye=!0):(ye=!0,Qt.__version=ot.version);let Un=Qt.currentProgram;ye===!0&&(Un=Ni(ot,q,K));let Mi=!1,Fn=!1,xn=!1;const Ge=Un.getUniforms(),zn=Qt.uniforms;if(Ft.useProgram(Un.program)&&(Mi=!0,Fn=!0,xn=!0),ot.id!==U&&(U=ot.id,Fn=!0),Mi||D!==C){Ft.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ge.setValue(V,"projectionMatrix",C.projectionMatrix),Ge.setValue(V,"viewMatrix",C.matrixWorldInverse);const An=Ge.map.cameraPosition;An!==void 0&&An.setValue(V,Dt.setFromMatrixPosition(C.matrixWorld)),Ae.logarithmicDepthBuffer&&Ge.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Fn=!0,xn=!0)}if(K.isSkinnedMesh){Ge.setOptional(V,K,"bindMatrix"),Ge.setOptional(V,K,"bindMatrixInverse");const an=K.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ge.setValue(V,"boneTexture",an.boneTexture,le))}K.isBatchedMesh&&(Ge.setOptional(V,K,"batchingTexture"),Ge.setValue(V,"batchingTexture",K._matricesTexture,le),Ge.setOptional(V,K,"batchingIdTexture"),Ge.setValue(V,"batchingIdTexture",K._indirectTexture,le),Ge.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Ge.setValue(V,"batchingColorTexture",K._colorsTexture,le));const Ln=st.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Mt.update(K,st,Un),(Fn||Qt.receiveShadow!==K.receiveShadow)&&(Qt.receiveShadow=K.receiveShadow,Ge.setValue(V,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(zn.envMap.value=Nt,zn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(zn.envMapIntensity.value=q.environmentIntensity),Fn&&(Ge.setValue(V,"toneMappingExposure",w.toneMappingExposure),Qt.needsLights&&tr(zn,xn),Tt&&ot.fog===!0&&_t.refreshFogUniforms(zn,Tt),_t.refreshMaterialUniforms(zn,ot,Y,Q,x.state.transmissionRenderTarget[C.id]),eu.upload(V,Ir(Qt),zn,le)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(eu.upload(V,Ir(Qt),zn,le),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(V,"center",K.center),Ge.setValue(V,"modelViewMatrix",K.modelViewMatrix),Ge.setValue(V,"normalMatrix",K.normalMatrix),Ge.setValue(V,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const an=ot.uniformsGroups;for(let An=0,Br=an.length;An<Br;An++){const Xn=an[An];oe.update(Xn,Un),oe.bind(Xn,Un)}}return Un}function tr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function _a(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,q,st){const ot=zt.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),zt.get(C.texture).__webglTexture=q,zt.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const st=zt.get(C);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const un=V.createFramebuffer();this.setRenderTarget=function(C,q=0,st=0){G=C,B=q,z=st;let ot=!0,K=null,Tt=!1,Ut=!1;if(C){const Nt=zt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(Nt.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(Nt.__hasExternalTextures)le.rebindTextures(C,zt.get(C.texture).__webglTexture,zt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Wt=C.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&zt.has(Wt)&&(C.width!==Wt.image.width||C.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const $t=C.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const ee=zt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?K=ee[q][st]:K=ee[q],Tt=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?K=zt.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[st]:K=ee,I.copy(C.viewport),Z.copy(C.scissor),it=C.scissorTest}else I.copy(tt).multiplyScalar(Y).floor(),Z.copy(mt).multiplyScalar(Y).floor(),it=xt;if(st!==0&&(K=un),Ft.bindFramebuffer(V.FRAMEBUFFER,K)&&ot&&Ft.drawBuffers(C,K),Ft.viewport(I),Ft.scissor(Z),Ft.setScissorTest(it),Tt){const Nt=zt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,st)}else if(Ut){const Nt=q;for(let $t=0;$t<C.textures.length;$t++){const ee=zt.get(C.textures[$t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+$t,ee.__webglTexture,st,Nt)}}else if(C!==null&&st!==0){const Nt=zt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,st)}U=-1},this.readRenderTargetPixels=function(C,q,st,ot,K,Tt,Ut,Bt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Ft.bindFramebuffer(V.FRAMEBUFFER,Nt);try{const $t=C.textures[Bt],ee=$t.format,Wt=$t.type;if(!Ae.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ot&&st>=0&&st<=C.height-K&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(q,st,ot,K,kt.convert(ee),kt.convert(Wt),Tt))}finally{const $t=G!==null?zt.get(G).__webglFramebuffer:null;Ft.bindFramebuffer(V.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,q,st,ot,K,Tt,Ut,Bt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(q>=0&&q<=C.width-ot&&st>=0&&st<=C.height-K){Ft.bindFramebuffer(V.FRAMEBUFFER,Nt);const $t=C.textures[Bt],ee=$t.format,Wt=$t.type;if(!Ae.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Bt),V.readPixels(q,st,ot,K,kt.convert(ee),kt.convert(Wt),0);const Ce=G!==null?zt.get(G).__webglFramebuffer:null;Ft.bindFramebuffer(V.FRAMEBUFFER,Ce);const Ke=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await FM(V,Ke,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.deleteBuffer(he),V.deleteSync(Ke),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,st=0){const ot=Math.pow(2,-st),K=Math.floor(C.image.width*ot),Tt=Math.floor(C.image.height*ot),Ut=q!==null?q.x:0,Bt=q!==null?q.y:0;le.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Ut,Bt,K,Tt),Ft.unbindTexture()};const gl=V.createFramebuffer(),vl=V.createFramebuffer();this.copyTextureToTexture=function(C,q,st=null,ot=null,K=0,Tt=null){Tt===null&&(K!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Ut,Bt,Nt,$t,ee,Wt,he,Ce,Ke;const Be=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(st!==null)Ut=st.max.x-st.min.x,Bt=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ee=st.min.y,Wt=st.isBox3?st.min.z:0;else{const Ln=Math.pow(2,-K);Ut=Math.floor(Be.width*Ln),Bt=Math.floor(Be.height*Ln),C.isDataArrayTexture?Nt=Be.depth:C.isData3DTexture?Nt=Math.floor(Be.depth*Ln):Nt=1,$t=0,ee=0,Wt=0}ot!==null?(he=ot.x,Ce=ot.y,Ke=ot.z):(he=0,Ce=0,Ke=0);const de=kt.convert(q.format),Qt=kt.convert(q.type);let Ye;q.isData3DTexture?(le.setTexture3D(q,0),Ye=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(le.setTexture2DArray(q,0),Ye=V.TEXTURE_2D_ARRAY):(le.setTexture2D(q,0),Ye=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ye=V.getParameter(V.UNPACK_ROW_LENGTH),Un=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Mi=V.getParameter(V.UNPACK_SKIP_PIXELS),Fn=V.getParameter(V.UNPACK_SKIP_ROWS),xn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Be.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Be.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,$t),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const Ge=C.isDataArrayTexture||C.isData3DTexture,zn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Ln=zt.get(C),an=zt.get(q),An=zt.get(Ln.__renderTarget),Br=zt.get(an.__renderTarget);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,An.__webglFramebuffer),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let Xn=0;Xn<Nt;Xn++)Ge&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.get(C).__webglTexture,K,Wt+Xn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.get(q).__webglTexture,Tt,Ke+Xn)),V.blitFramebuffer($t,ee,Ut,Bt,he,Ce,Ut,Bt,V.DEPTH_BUFFER_BIT,V.NEAREST);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||zt.has(C)){const Ln=zt.get(C),an=zt.get(q);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,gl),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,vl);for(let An=0;An<Nt;An++)Ge?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,K,Wt+An):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,K),zn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,an.__webglTexture,Tt,Ke+An):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,an.__webglTexture,Tt),K!==0?V.blitFramebuffer($t,ee,Ut,Bt,he,Ce,Ut,Bt,V.COLOR_BUFFER_BIT,V.NEAREST):zn?V.copyTexSubImage3D(Ye,Tt,he,Ce,Ke+An,$t,ee,Ut,Bt):V.copyTexSubImage2D(Ye,Tt,he,Ce,$t,ee,Ut,Bt);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ye,Tt,he,Ce,Ke,Ut,Bt,Nt,de,Qt,Be.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,Tt,he,Ce,Ke,Ut,Bt,Nt,de,Be.data):V.texSubImage3D(Ye,Tt,he,Ce,Ke,Ut,Bt,Nt,de,Qt,Be):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,he,Ce,Ut,Bt,de,Qt,Be.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,he,Ce,Be.width,Be.height,de,Be.data):V.texSubImage2D(V.TEXTURE_2D,Tt,he,Ce,Ut,Bt,de,Qt,Be);V.pixelStorei(V.UNPACK_ROW_LENGTH,ye),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Un),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Mi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xn),Tt===0&&q.generateMipmaps&&V.generateMipmap(Ye),Ft.unbindTexture()},this.copyTextureToTexture3D=function(C,q,st=null,ot=null,K=0){return Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,st,ot,K)},this.initRenderTarget=function(C){zt.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),Ft.unbindTexture()},this.resetState=function(){B=0,z=0,G=null,Ft.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ue._getUnpackColorSpace()}}const Hw=(o,t)=>{const e=fe.useRef({isLeftMouseDown:!1,isRightMouseDown:!1,isMiddleMouseDown:!1,lastMouseX:0,lastMouseY:0,spherical:new tT(10,Math.PI/3,0),target:new W(0,0,0),panSpeed:.01,rotateSpeed:.01,zoomSpeed:.5,cameraRotation:new Dn(0,0,0,"YXZ")}),a=fe.useCallback(()=>{if(!o)return;const{spherical:u,target:f}=e.current,p=new W;p.setFromSpherical(u),p.add(f),o.position.copy(p),o.lookAt(f)},[o]),r=fe.useCallback(()=>{o&&o.rotation.copy(e.current.cameraRotation)},[o]);return fe.useEffect(()=>{if(!o||!t)return;const u=g=>{g.preventDefault(),g.button===0&&(e.current.isLeftMouseDown=!0),g.button===1&&(e.current.isMiddleMouseDown=!0),g.button===2&&(e.current.isRightMouseDown=!0),e.current.lastMouseX=g.clientX,e.current.lastMouseY=g.clientY,e.current.isRightMouseDown&&(t.style.cursor="none")},f=g=>{g.button===0&&(e.current.isLeftMouseDown=!1),g.button===1&&(e.current.isMiddleMouseDown=!1),g.button===2&&(e.current.isRightMouseDown=!1),t.style.cursor="default"},p=g=>{const _=g.clientX-e.current.lastMouseX,y=g.clientY-e.current.lastMouseY;if(e.current.isRightMouseDown)e.current.cameraRotation.y-=_*e.current.rotateSpeed,e.current.cameraRotation.x-=y*e.current.rotateSpeed,e.current.cameraRotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,e.current.cameraRotation.x)),r();else if(e.current.isLeftMouseDown&&e.current.isRightMouseDown){const S=-y*e.current.zoomSpeed;e.current.spherical.radius=Math.max(.1,e.current.spherical.radius+S)}else if(e.current.isLeftMouseDown)e.current.spherical.theta-=_*e.current.rotateSpeed,e.current.spherical.phi+=y*e.current.rotateSpeed,e.current.spherical.phi=Math.max(.01,Math.min(Math.PI-.01,e.current.spherical.phi)),a();else if(e.current.isMiddleMouseDown){const S=new W(1,0,0),T=new W(0,1,0);S.applyQuaternion(o.quaternion),T.applyQuaternion(o.quaternion);const M=new W;M.addScaledVector(S,-_*e.current.panSpeed),M.addScaledVector(T,y*e.current.panSpeed),o.position.add(M),e.current.target.add(M)}e.current.lastMouseX=g.clientX,e.current.lastMouseY=g.clientY},d=g=>{g.preventDefault();const _=g.deltaY>0?1:-1,y=new W(0,0,-1);y.applyQuaternion(o.quaternion),o.position.add(y.multiplyScalar(-_*e.current.zoomSpeed))},v=g=>g.preventDefault();return t.addEventListener("mousedown",u),document.addEventListener("mouseup",f),document.addEventListener("mousemove",p),t.addEventListener("wheel",d,{passive:!1}),t.addEventListener("contextmenu",v),a(),()=>{t.removeEventListener("mousedown",u),document.removeEventListener("mouseup",f),document.removeEventListener("mousemove",p),t.removeEventListener("wheel",d),t.removeEventListener("contextmenu",v),t.style.cursor="default"}},[o,t,a,r]),{resetCamera:fe.useCallback(()=>{o&&(e.current.spherical.set(10,Math.PI/3,0),e.current.target.set(0,0,0),e.current.cameraRotation.set(0,0,0),a(),r())},[o,a,r])}},Vw=()=>{const o=fe.useRef(null),t=fe.useRef(null),e=fe.useRef(null),a=fe.useRef([]),r=fe.useRef(new zE),l=fe.useRef(null),u=fe.useRef(new $E),f=fe.useRef(new Ee),p=fe.useRef(null),d=x=>{if(t.current)return{scene:o.current,camera:e.current,renderer:t.current};const L=new cE;L.background=new ae(2763306),o.current=L;const R=new kn(75,x.clientWidth/x.clientHeight,.1,1e3);R.position.set(0,5,10),e.current=R;const w=new zw({antialias:!0});w.setSize(x.clientWidth,x.clientHeight),w.setPixelRatio(window.devicePixelRatio),w.shadowMap.enabled=!0,w.shadowMap.type=A0,t.current=w,x.appendChild(w.domElement);const O=new J0(4210752,.4);L.add(O);const B=new Q0(16777215,.8);B.position.set(10,10,5),B.castShadow=!0,B.shadow.mapSize.width=2048,B.shadow.mapSize.height=2048,B.shadow.camera.near=.1,B.shadow.camera.far=50,B.shadow.camera.left=-15,B.shadow.camera.right=15,B.shadow.camera.top=15,B.shadow.camera.bottom=-15,B.shadow.bias=-5e-4,B.shadow.normalBias=.02,B.shadow.camera.updateProjectionMatrix(),B.shadow.needsUpdate=!0,L.add(B);const z=new eT(20,20,4473924,2236962);L.add(z);const G=new fl(30,30),U=new pu({color:6710886,transparent:!0,opacity:.5}),D=new li(G,U);D.rotation.x=-Math.PI/2,D.position.y=-.01,D.receiveShadow=!0,L.add(D);const I=new nT(5);return L.add(I),{scene:L,camera:R,renderer:w,directionalLight:B}},v=x=>{if(p.current=x,!t.current)return;const L=R=>{if(R.button!==0)return;R.preventDefault(),R.stopPropagation();const w=t.current.domElement.getBoundingClientRect();f.current.x=(R.clientX-w.left)/w.width*2-1,f.current.y=-((R.clientY-w.top)/w.height)*2+1,u.current.setFromCamera(f.current,e.current);const O=[];o.current.traverse(z=>{z.isMesh&&z.userData.isModel&&O.push(z)});const B=u.current.intersectObjects(O,!1);if(B.length>0){let z=B[0].object;for(;z.parent&&!z.userData.isModel&&z.parent!==o.current;)z=z.parent;p.current(z)}else p.current(null)};t.current.domElement.addEventListener("mousedown",L)},g=(x=null)=>{if(!t.current||!o.current||!e.current)return;l.current=requestAnimationFrame(()=>g(x));const L=r.current.getDelta();a.current.forEach(R=>R.update(L)),o.current.traverse(R=>{R.isDirectionalLight&&R.shadow&&(R.shadow.camera.updateMatrixWorld(),R.shadow.camera.updateProjectionMatrix())}),x&&x(e.current,o.current),t.current.render(o.current,e.current)};return{initializeScene:d,setupMeshSelection:v,animate:g,addModel:(x,L=null)=>{if(o.current&&(x.userData.isModel=!0,x.userData.modelId=L,x.traverse(R=>{R.isMesh&&(R.userData.isModel=!0,R.userData.modelId=L,R.castShadow=!0,R.receiveShadow=!0)}),o.current.add(x),x.animations&&x.animations.length>0)){const R=new JE(x);R.clipAction(x.animations[0]).play(),a.current.push(R)}},removeModelById:x=>{if(!o.current)return;const L=[];o.current.traverse(R=>{R.userData.isModel&&R.userData.modelId===x&&R.parent===o.current&&L.push(R)}),L.forEach(R=>{o.current.remove(R),R.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&(Array.isArray(w.material)?w.material.forEach(O=>O.dispose&&O.dispose()):w.material.dispose&&w.material.dispose()),w.texture&&w.texture.dispose()}),a.current=a.current.filter(w=>w.getRoot()!==R)})},clearScene:()=>{if(!o.current)return;o.current.children.filter(L=>L.userData.isModel).forEach(L=>{o.current.remove(L),L.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&(Array.isArray(R.material)?R.material.forEach(w=>w.dispose()):R.material.dispose())})}),a.current.forEach(L=>L.uncacheRoot(L.getRoot())),a.current=[]},handleResize:x=>{if(!e.current||!t.current||!x)return;const L=x.clientWidth,R=x.clientHeight;e.current.aspect=L/R,e.current.updateProjectionMatrix(),t.current.setSize(L,R)},cleanup:x=>{l.current&&(cancelAnimationFrame(l.current),l.current=null),a.current.forEach(L=>L.uncacheRoot(L.getRoot())),a.current=[],t.current&&x&&t.current.domElement&&(x.removeChild(t.current.domElement),t.current.dispose(),t.current=null),o.current&&o.current.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material.forEach(R=>R.dispose()):L.material.dispose())}),o.current=null,e.current=null},scene:o.current,camera:e.current,renderer:t.current}},Gw=parseInt(cu.replace(/\D+/g,"")),kw=Gw>=125?"uv1":"uv2";var yi=Uint8Array,Za=Uint16Array,tp=Uint32Array,ry=new yi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),sy=new yi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Xw=new yi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),oy=function(o,t){for(var e=new Za(31),a=0;a<31;++a)e[a]=t+=1<<o[a-1];for(var r=new tp(e[30]),a=1;a<30;++a)for(var l=e[a];l<e[a+1];++l)r[l]=l-e[a]<<5|a;return[e,r]},ly=oy(ry,2),cy=ly[0],Ww=ly[1];cy[28]=258,Ww[258]=28;var qw=oy(sy,0),Yw=qw[0],ep=new Za(32768);for(var Ze=0;Ze<32768;++Ze){var Ya=(Ze&43690)>>>1|(Ze&21845)<<1;Ya=(Ya&52428)>>>2|(Ya&13107)<<2,Ya=(Ya&61680)>>>4|(Ya&3855)<<4,ep[Ze]=((Ya&65280)>>>8|(Ya&255)<<8)>>>1}var el=function(o,t,e){for(var a=o.length,r=0,l=new Za(t);r<a;++r)++l[o[r]-1];var u=new Za(t);for(r=0;r<t;++r)u[r]=u[r-1]+l[r-1]<<1;var f;if(e){f=new Za(1<<t);var p=15-t;for(r=0;r<a;++r)if(o[r])for(var d=r<<4|o[r],v=t-o[r],g=u[o[r]-1]++<<v,_=g|(1<<v)-1;g<=_;++g)f[ep[g]>>>p]=d}else for(f=new Za(a),r=0;r<a;++r)o[r]&&(f[r]=ep[u[o[r]-1]++]>>>15-o[r]);return f},pl=new yi(288);for(var Ze=0;Ze<144;++Ze)pl[Ze]=8;for(var Ze=144;Ze<256;++Ze)pl[Ze]=9;for(var Ze=256;Ze<280;++Ze)pl[Ze]=7;for(var Ze=280;Ze<288;++Ze)pl[Ze]=8;var uy=new yi(32);for(var Ze=0;Ze<32;++Ze)uy[Ze]=5;var jw=el(pl,9,1),Zw=el(uy,5,1),ld=function(o){for(var t=o[0],e=1;e<o.length;++e)o[e]>t&&(t=o[e]);return t},Ci=function(o,t,e){var a=t/8|0;return(o[a]|o[a+1]<<8)>>(t&7)&e},cd=function(o,t){var e=t/8|0;return(o[e]|o[e+1]<<8|o[e+2]<<16)>>(t&7)},Kw=function(o){return(o/8|0)+(o&7&&1)},Qw=function(o,t,e){(e==null||e>o.length)&&(e=o.length);var a=new(o instanceof Za?Za:o instanceof tp?tp:yi)(e-t);return a.set(o.subarray(t,e)),a},Jw=function(o,t,e){var a=o.length;if(!a||e&&!e.l&&a<5)return t||new yi(0);var r=!t||e,l=!e||e.i;e||(e={}),t||(t=new yi(a*3));var u=function(dt){var St=t.length;if(dt>St){var Dt=new yi(Math.max(St*2,dt));Dt.set(t),t=Dt}},f=e.f||0,p=e.p||0,d=e.b||0,v=e.l,g=e.d,_=e.m,y=e.n,S=a*8;do{if(!v){e.f=f=Ci(o,p,1);var T=Ci(o,p+1,3);if(p+=3,T)if(T==1)v=jw,g=Zw,_=9,y=5;else if(T==2){var R=Ci(o,p,31)+257,w=Ci(o,p+10,15)+4,O=R+Ci(o,p+5,31)+1;p+=14;for(var B=new yi(O),z=new yi(19),G=0;G<w;++G)z[Xw[G]]=Ci(o,p+G*3,7);p+=w*3;for(var U=ld(z),D=(1<<U)-1,I=el(z,U,1),G=0;G<O;){var Z=I[Ci(o,p,D)];p+=Z&15;var M=Z>>>4;if(M<16)B[G++]=M;else{var it=0,lt=0;for(M==16?(lt=3+Ci(o,p,3),p+=2,it=B[G-1]):M==17?(lt=3+Ci(o,p,7),p+=3):M==18&&(lt=11+Ci(o,p,127),p+=7);lt--;)B[G++]=it}}var ut=B.subarray(0,R),F=B.subarray(R);_=ld(ut),y=ld(F),v=el(ut,_,1),g=el(F,y,1)}else throw"invalid block type";else{var M=Kw(p)+4,x=o[M-4]|o[M-3]<<8,L=M+x;if(L>a){if(l)throw"unexpected EOF";break}r&&u(d+x),t.set(o.subarray(M,L),d),e.b=d+=x,e.p=p=L*8;continue}if(p>S){if(l)throw"unexpected EOF";break}}r&&u(d+131072);for(var Q=(1<<_)-1,Y=(1<<y)-1,yt=p;;yt=p){var it=v[cd(o,p)&Q],N=it>>>4;if(p+=it&15,p>S){if(l)throw"unexpected EOF";break}if(!it)throw"invalid length/literal";if(N<256)t[d++]=N;else if(N==256){yt=p,v=null;break}else{var tt=N-254;if(N>264){var G=N-257,mt=ry[G];tt=Ci(o,p,(1<<mt)-1)+cy[G],p+=mt}var xt=g[cd(o,p)&Y],wt=xt>>>4;if(!xt)throw"invalid distance";p+=xt&15;var F=Yw[wt];if(wt>3){var mt=sy[wt];F+=cd(o,p)&(1<<mt)-1,p+=mt}if(p>S){if(l)throw"unexpected EOF";break}r&&u(d+131072);for(var nt=d+tt;d<nt;d+=4)t[d]=t[d-F],t[d+1]=t[d+1-F],t[d+2]=t[d+2-F],t[d+3]=t[d+3-F];d=nt}}e.l=v,e.p=yt,e.b=d,v&&(f=1,e.m=_,e.d=g,e.n=y)}while(!f);return d==t.length?t:Qw(t,0,d)},$w=new yi(0),tR=function(o){if((o[0]&15)!=8||o[0]>>>4>7||(o[0]<<8|o[1])%31)throw"invalid zlib data";if(o[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function eR(o,t){return Jw((tR(o),o.subarray(2,-4)),t)}var nR=typeof TextDecoder<"u"&&new TextDecoder,iR=0;try{nR.decode($w,{stream:!0}),iR=1}catch{}function fy(o){if(typeof TextDecoder<"u")return new TextDecoder().decode(o);let t="";for(let e=0,a=o.length;e<a;e++)t+=String.fromCharCode(o[e]);try{return decodeURIComponent(escape(t))}catch{return t}}function hy(o,t,e){const a=e.length-o-1;if(t>=e[a])return a-1;if(t<=e[o])return o;let r=o,l=a,u=Math.floor((r+l)/2);for(;t<e[u]||t>=e[u+1];)t<e[u]?l=u:r=u,u=Math.floor((r+l)/2);return u}function aR(o,t,e,a){const r=[],l=[],u=[];r[0]=1;for(let f=1;f<=e;++f){l[f]=t-a[o+1-f],u[f]=a[o+f]-t;let p=0;for(let d=0;d<f;++d){const v=u[d+1],g=l[f-d],_=r[d]/(v+g);r[d]=p+v*_,p=g*_}r[f]=p}return r}function rR(o,t,e,a){const r=hy(o,a,t),l=aR(r,a,o,t),u=new Te(0,0,0,0);for(let f=0;f<=o;++f){const p=e[r-o+f],d=l[f],v=p.w*d;u.x+=p.x*v,u.y+=p.y*v,u.z+=p.z*v,u.w+=p.w*d}return u}function sR(o,t,e,a,r){const l=[];for(let g=0;g<=e;++g)l[g]=0;const u=[];for(let g=0;g<=a;++g)u[g]=l.slice(0);const f=[];for(let g=0;g<=e;++g)f[g]=l.slice(0);f[0][0]=1;const p=l.slice(0),d=l.slice(0);for(let g=1;g<=e;++g){p[g]=t-r[o+1-g],d[g]=r[o+g]-t;let _=0;for(let y=0;y<g;++y){const S=d[y+1],T=p[g-y];f[g][y]=S+T;const M=f[y][g-1]/f[g][y];f[y][g]=_+S*M,_=T*M}f[g][g]=_}for(let g=0;g<=e;++g)u[0][g]=f[g][e];for(let g=0;g<=e;++g){let _=0,y=1;const S=[];for(let T=0;T<=e;++T)S[T]=l.slice(0);S[0][0]=1;for(let T=1;T<=a;++T){let M=0;const x=g-T,L=e-T;g>=T&&(S[y][0]=S[_][0]/f[L+1][x],M=S[y][0]*f[x][L]);const R=x>=-1?1:-x,w=g-1<=L?T-1:e-g;for(let B=R;B<=w;++B)S[y][B]=(S[_][B]-S[_][B-1])/f[L+1][x+B],M+=S[y][B]*f[x+B][L];g<=L&&(S[y][T]=-S[_][T-1]/f[L+1][g],M+=S[y][T]*f[g][L]),u[T][g]=M;const O=_;_=y,y=O}}let v=e;for(let g=1;g<=a;++g){for(let _=0;_<=e;++_)u[g][_]*=v;v*=e-g}return u}function oR(o,t,e,a,r){const l=r<o?r:o,u=[],f=hy(o,a,t),p=sR(f,a,o,l,t),d=[];for(let v=0;v<e.length;++v){const g=e[v].clone(),_=g.w;g.x*=_,g.y*=_,g.z*=_,d[v]=g}for(let v=0;v<=l;++v){const g=d[f-o].clone().multiplyScalar(p[v][0]);for(let _=1;_<=o;++_)g.add(d[f-o+_].clone().multiplyScalar(p[v][_]));u[v]=g}for(let v=l+1;v<=r+1;++v)u[v]=new Te(0,0,0);return u}function lR(o,t){let e=1;for(let r=2;r<=o;++r)e*=r;let a=1;for(let r=2;r<=t;++r)a*=r;for(let r=2;r<=o-t;++r)a*=r;return e/a}function cR(o){const t=o.length,e=[],a=[];for(let l=0;l<t;++l){const u=o[l];e[l]=new W(u.x,u.y,u.z),a[l]=u.w}const r=[];for(let l=0;l<t;++l){const u=e[l].clone();for(let f=1;f<=l;++f)u.sub(r[l-f].clone().multiplyScalar(lR(l,f)*a[f]));r[l]=u.divideScalar(a[0])}return r}function uR(o,t,e,a,r){const l=oR(o,t,e,a,r);return cR(l)}class S0 extends vE{constructor(t,e,a,r,l){super(),this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=r||0,this.endKnot=l||this.knots.length-1;for(let u=0;u<a.length;++u){const f=a[u];this.controlPoints[u]=new Te(f.x,f.y,f.z,f.w)}}getPoint(t,e){const a=e||new W,r=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),l=rR(this.degree,this.knots,this.controlPoints,r);return l.w!=1&&l.divideScalar(l.w),a.set(l.x,l.y,l.z)}getTangent(t,e){const a=e||new W,r=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),l=uR(this.degree,this.knots,this.controlPoints,r,1);return a.copy(l[1]).normalize(),a}}let Me,cn,Zn;class fR extends dl{constructor(t){super(t)}load(t,e,a,r){const l=this,u=l.path===""?BE.extractUrlBase(t):l.path,f=new DE(this.manager);f.setPath(l.path),f.setResponseType("arraybuffer"),f.setRequestHeader(l.requestHeader),f.setWithCredentials(l.withCredentials),f.load(t,function(p){try{e(l.parse(p,u))}catch(d){r?r(d):console.error(d),l.manager.itemError(t)}},a,r)}parse(t,e){if(vR(t))Me=new gR().parse(t);else{const r=gy(t);if(!_R(r))throw new Error("THREE.FBXLoader: Unknown format.");if(E0(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+E0(r));Me=new mR().parse(r)}const a=new LE(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new hR(a,this.manager).parse(Me)}}class hR{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){cn=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),a=this.parseMaterials(e),r=this.parseDeformers(),l=new dR().parse(r);return this.parseScene(r,l,a),Zn}parseConnections(){const t=new Map;return"Connections"in Me&&Me.Connections.connections.forEach(function(a){const r=a[0],l=a[1],u=a[2];t.has(r)||t.set(r,{parents:[],children:[]});const f={ID:l,relationship:u};t.get(r).parents.push(f),t.has(l)||t.set(l,{parents:[],children:[]});const p={ID:r,relationship:u};t.get(l).children.push(p)}),t}parseImages(){const t={},e={};if("Video"in Me.Objects){const a=Me.Objects.Video;for(const r in a){const l=a[r],u=parseInt(r);if(t[u]=l.RelativeFilename||l.Filename,"Content"in l){const f=l.Content instanceof ArrayBuffer&&l.Content.byteLength>0,p=typeof l.Content=="string"&&l.Content!=="";if(f||p){const d=this.parseImage(a[r]);e[l.RelativeFilename||l.Filename]=d}}}}for(const a in t){const r=t[a];e[r]!==void 0?t[a]=e[r]:t[a]=t[a].split("\\").pop()}return t}parseImage(t){const e=t.Content,a=t.RelativeFilename||t.Filename,r=a.slice(a.lastIndexOf(".")+1).toLowerCase();let l;switch(r){case"bmp":l="image/bmp";break;case"jpg":case"jpeg":l="image/jpeg";break;case"png":l="image/png";break;case"tif":l="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",a),l="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof e=="string")return"data:"+l+";base64,"+e;{const u=new Uint8Array(e);return window.URL.createObjectURL(new Blob([u],{type:l}))}}parseTextures(t){const e=new Map;if("Texture"in Me.Objects){const a=Me.Objects.Texture;for(const r in a){const l=this.parseTexture(a[r],t);e.set(parseInt(r),l)}}return e}parseTexture(t,e){const a=this.loadTexture(t,e);a.ID=t.id,a.name=t.attrName;const r=t.WrapModeU,l=t.WrapModeV,u=r!==void 0?r.value:0,f=l!==void 0?l.value:0;if(a.wrapS=u===0?nl:pa,a.wrapT=f===0?nl:pa,"Scaling"in t){const p=t.Scaling.value;a.repeat.x=p[0],a.repeat.y=p[1]}return a}loadTexture(t,e){let a;const r=this.textureLoader.path,l=cn.get(t.id).children;l!==void 0&&l.length>0&&e[l[0].ID]!==void 0&&(a=e[l[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let u;const f=t.FileName.slice(-3).toLowerCase();if(f==="tga"){const p=this.manager.getHandler(".tga");p===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",t.RelativeFilename),u=new bn):(p.setPath(this.textureLoader.path),u=p.load(a))}else f==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",t.RelativeFilename),u=new bn):u=this.textureLoader.load(a);return this.textureLoader.setPath(r),u}parseMaterials(t){const e=new Map;if("Material"in Me.Objects){const a=Me.Objects.Material;for(const r in a){const l=this.parseMaterial(a[r],t);l!==null&&e.set(parseInt(r),l)}}return e}parseMaterial(t,e){const a=t.id,r=t.attrName;let l=t.ShadingModel;if(typeof l=="object"&&(l=l.value),!cn.has(a))return null;const u=this.parseParameters(t,e,a);let f;switch(l.toLowerCase()){case"phong":f=new $h;break;case"lambert":f=new pu;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',l),f=new $h;break}return f.setValues(u),f.name=r,f}parseParameters(t,e,a){const r={};t.BumpFactor&&(r.bumpScale=t.BumpFactor.value),t.Diffuse?r.color=new ae().fromArray(t.Diffuse.value):t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(r.color=new ae().fromArray(t.DiffuseColor.value)),t.DisplacementFactor&&(r.displacementScale=t.DisplacementFactor.value),t.Emissive?r.emissive=new ae().fromArray(t.Emissive.value):t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(r.emissive=new ae().fromArray(t.EmissiveColor.value)),t.EmissiveFactor&&(r.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(r.opacity=parseFloat(t.Opacity.value)),r.opacity<1&&(r.transparent=!0),t.ReflectionFactor&&(r.reflectivity=t.ReflectionFactor.value),t.Shininess&&(r.shininess=t.Shininess.value),t.Specular?r.specular=new ae().fromArray(t.Specular.value):t.SpecularColor&&t.SpecularColor.type==="Color"&&(r.specular=new ae().fromArray(t.SpecularColor.value));const l=this;return cn.get(a).children.forEach(function(u){const f=u.relationship;switch(f){case"Bump":r.bumpMap=l.getTexture(e,u.ID);break;case"Maya|TEX_ao_map":r.aoMap=l.getTexture(e,u.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=l.getTexture(e,u.ID),r.map!==void 0&&("colorSpace"in r.map?r.map.colorSpace="srgb":r.map.encoding=3001);break;case"DisplacementColor":r.displacementMap=l.getTexture(e,u.ID);break;case"EmissiveColor":r.emissiveMap=l.getTexture(e,u.ID),r.emissiveMap!==void 0&&("colorSpace"in r.emissiveMap?r.emissiveMap.colorSpace="srgb":r.emissiveMap.encoding=3001);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=l.getTexture(e,u.ID);break;case"ReflectionColor":r.envMap=l.getTexture(e,u.ID),r.envMap!==void 0&&(r.envMap.mapping=nu,"colorSpace"in r.envMap?r.envMap.colorSpace="srgb":r.envMap.encoding=3001);break;case"SpecularColor":r.specularMap=l.getTexture(e,u.ID),r.specularMap!==void 0&&("colorSpace"in r.specularMap?r.specularMap.colorSpace="srgb":r.specularMap.encoding=3001);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=l.getTexture(e,u.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",f);break}}),r}getTexture(t,e){return"LayeredTexture"in Me.Objects&&e in Me.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=cn.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in Me.Objects){const a=Me.Objects.Deformer;for(const r in a){const l=a[r],u=cn.get(parseInt(r));if(l.attrType==="Skin"){const f=this.parseSkeleton(u,a);f.ID=r,u.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),f.geometryID=u.parents[0].ID,t[r]=f}else if(l.attrType==="BlendShape"){const f={id:r};f.rawTargets=this.parseMorphTargets(u,a),f.id=r,u.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[r]=f}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const a=[];return t.children.forEach(function(r){const l=e[r.ID];if(l.attrType!=="Cluster")return;const u={ID:r.ID,indices:[],weights:[],transformLink:new Zt().fromArray(l.TransformLink.a)};"Indexes"in l&&(u.indices=l.Indexes.a,u.weights=l.Weights.a),a.push(u)}),{rawBones:a,bones:[]}}parseMorphTargets(t,e){const a=[];for(let r=0;r<t.children.length;r++){const l=t.children[r],u=e[l.ID],f={name:u.attrName,initialWeight:u.DeformPercent,id:u.id,fullWeights:u.FullWeights.a};if(u.attrType!=="BlendShapeChannel")return;f.geoID=cn.get(parseInt(l.ID)).children.filter(function(p){return p.relationship===void 0})[0].ID,a.push(f)}return a}parseScene(t,e,a){Zn=new Rr;const r=this.parseModels(t.skeletons,e,a),l=Me.Objects.Model,u=this;r.forEach(function(p){const d=l[p.ID];u.setLookAtProperties(p,d),cn.get(p.ID).parents.forEach(function(g){const _=r.get(g.ID);_!==void 0&&_.add(p)}),p.parent===null&&Zn.add(p)}),this.bindSkeleton(t.skeletons,e,r),this.createAmbientLight(),Zn.traverse(function(p){if(p.userData.transformData){p.parent&&(p.userData.transformData.parentMatrix=p.parent.matrix,p.userData.transformData.parentMatrixWorld=p.parent.matrixWorld);const d=py(p.userData.transformData);p.applyMatrix4(d),p.updateWorldMatrix()}});const f=new pR().parse();Zn.children.length===1&&Zn.children[0].isGroup&&(Zn.children[0].animations=f,Zn=Zn.children[0]),Zn.animations=f}parseModels(t,e,a){const r=new Map,l=Me.Objects.Model;for(const u in l){const f=parseInt(u),p=l[u],d=cn.get(f);let v=this.buildSkeleton(d,t,f,p.attrName);if(!v){switch(p.attrType){case"Camera":v=this.createCamera(d);break;case"Light":v=this.createLight(d);break;case"Mesh":v=this.createMesh(d,e,a);break;case"NurbsCurve":v=this.createCurve(d,e);break;case"LimbNode":case"Root":v=new Kd;break;case"Null":default:v=new Rr;break}v.name=p.attrName?Re.sanitizeNodeName(p.attrName):"",v.ID=f}this.getTransformData(v,p),r.set(f,v)}return r}buildSkeleton(t,e,a,r){let l=null;return t.parents.forEach(function(u){for(const f in e){const p=e[f];p.rawBones.forEach(function(d,v){if(d.ID===u.ID){const g=l;l=new Kd,l.matrixWorld.copy(d.transformLink),l.name=r?Re.sanitizeNodeName(r):"",l.ID=a,p.bones[v]=l,g!==null&&l.add(g)}})}}),l}createCamera(t){let e,a;if(t.children.forEach(function(r){const l=Me.Objects.NodeAttribute[r.ID];l!==void 0&&(a=l)}),a===void 0)e=new en;else{let r=0;a.CameraProjectionType!==void 0&&a.CameraProjectionType.value===1&&(r=1);let l=1;a.NearPlane!==void 0&&(l=a.NearPlane.value/1e3);let u=1e3;a.FarPlane!==void 0&&(u=a.FarPlane.value/1e3);let f=window.innerWidth,p=window.innerHeight;a.AspectWidth!==void 0&&a.AspectHeight!==void 0&&(f=a.AspectWidth.value,p=a.AspectHeight.value);const d=f/p;let v=45;a.FieldOfView!==void 0&&(v=a.FieldOfView.value);const g=a.FocalLength?a.FocalLength.value:null;switch(r){case 0:e=new kn(v,d,l,u),g!==null&&e.setFocalLength(g);break;case 1:e=new Sp(-f/2,f/2,p/2,-p/2,l,u);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),e=new en;break}}return e}createLight(t){let e,a;if(t.children.forEach(function(r){const l=Me.Objects.NodeAttribute[r.ID];l!==void 0&&(a=l)}),a===void 0)e=new en;else{let r;a.LightType===void 0?r=0:r=a.LightType.value;let l=16777215;a.Color!==void 0&&(l=new ae().fromArray(a.Color.value));let u=a.Intensity===void 0?1:a.Intensity.value/100;a.CastLightOnObject!==void 0&&a.CastLightOnObject.value===0&&(u=0);let f=0;a.FarAttenuationEnd!==void 0&&(a.EnableFarAttenuation!==void 0&&a.EnableFarAttenuation.value===0?f=0:f=a.FarAttenuationEnd.value);const p=1;switch(r){case 0:e=new Y_(l,u,f,p);break;case 1:e=new Q0(l,u);break;case 2:let d=Math.PI/3;a.InnerAngle!==void 0&&(d=Hi.degToRad(a.InnerAngle.value));let v=0;a.OuterAngle!==void 0&&(v=Hi.degToRad(a.OuterAngle.value),v=Math.max(v,1)),e=new OE(l,u,f,d,v,p);break;default:console.warn("THREE.FBXLoader: Unknown light type "+a.LightType.value+", defaulting to a PointLight."),e=new Y_(l,u);break}a.CastShadows!==void 0&&a.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,a){let r,l=null,u=null;const f=[];return t.children.forEach(function(p){e.has(p.ID)&&(l=e.get(p.ID)),a.has(p.ID)&&f.push(a.get(p.ID))}),f.length>1?u=f:f.length>0?u=f[0]:(u=new $h({color:13421772}),f.push(u)),"color"in l.attributes&&f.forEach(function(p){p.vertexColors=!0}),l.FBX_Deformer?(r=new fE(l,u),r.normalizeSkinWeights()):r=new li(l,u),r}createCurve(t,e){const a=t.children.reduce(function(l,u){return e.has(u.ID)&&(l=e.get(u.ID)),l},null),r=new du({color:3342591,linewidth:1});return new W0(a,r)}getTransformData(t,e){const a={};"InheritType"in e&&(a.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?a.eulerOrder=my(e.RotationOrder.value):a.eulerOrder="ZYX","Lcl_Translation"in e&&(a.translation=e.Lcl_Translation.value),"PreRotation"in e&&(a.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(a.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(a.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(a.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(a.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(a.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(a.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(a.rotationPivot=e.RotationPivot.value),t.userData.transformData=a}setLookAtProperties(t,e){"LookAtProperty"in e&&cn.get(t.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const l=Me.Objects.Model[r.ID];if("Lcl_Translation"in l){const u=l.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(u),Zn.add(t.target)):t.lookAt(new W().fromArray(u))}}})}bindSkeleton(t,e,a){const r=this.parsePoseNodes();for(const l in t){const u=t[l];cn.get(parseInt(u.ID)).parents.forEach(function(p){if(e.has(p.ID)){const d=p.ID;cn.get(d).parents.forEach(function(g){a.has(g.ID)&&a.get(g.ID).bind(new mp(u.bones),r[g.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in Me.Objects){const e=Me.Objects.Pose;for(const a in e)if(e[a].attrType==="BindPose"&&e[a].NbPoseNodes>0){const r=e[a].PoseNode;Array.isArray(r)?r.forEach(function(l){t[l.Node]=new Zt().fromArray(l.Matrix.a)}):t[r.Node]=new Zt().fromArray(r.Matrix.a)}}return t}createAmbientLight(){if("GlobalSettings"in Me&&"AmbientColor"in Me.GlobalSettings){const t=Me.GlobalSettings.AmbientColor.value,e=t[0],a=t[1],r=t[2];if(e!==0||a!==0||r!==0){const l=new ae(e,a,r);Zn.add(new J0(l,1))}}}}class dR{parse(t){const e=new Map;if("Geometry"in Me.Objects){const a=Me.Objects.Geometry;for(const r in a){const l=cn.get(parseInt(r)),u=this.parseGeometry(l,a[r],t);e.set(parseInt(r),u)}}return e}parseGeometry(t,e,a){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,a);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,a){const r=a.skeletons,l=[],u=t.parents.map(function(g){return Me.Objects.Model[g.ID]});if(u.length===0)return;const f=t.children.reduce(function(g,_){return r[_.ID]!==void 0&&(g=r[_.ID]),g},null);t.children.forEach(function(g){a.morphTargets[g.ID]!==void 0&&l.push(a.morphTargets[g.ID])});const p=u[0],d={};"RotationOrder"in p&&(d.eulerOrder=my(p.RotationOrder.value)),"InheritType"in p&&(d.inheritType=parseInt(p.InheritType.value)),"GeometricTranslation"in p&&(d.translation=p.GeometricTranslation.value),"GeometricRotation"in p&&(d.rotation=p.GeometricRotation.value),"GeometricScaling"in p&&(d.scale=p.GeometricScaling.value);const v=py(d);return this.genGeometry(e,f,l,v)}genGeometry(t,e,a,r){const l=new Bn;t.attrName&&(l.name=t.attrName);const u=this.parseGeoNode(t,e),f=this.genBuffers(u),p=new je(f.vertex,3);if(p.applyMatrix4(r),l.setAttribute("position",p),f.colors.length>0&&l.setAttribute("color",new je(f.colors,3)),e&&(l.setAttribute("skinIndex",new pp(f.weightsIndices,4)),l.setAttribute("skinWeight",new je(f.vertexWeights,4)),l.FBX_Deformer=e),f.normal.length>0){const d=new ce().getNormalMatrix(r),v=new je(f.normal,3);v.applyNormalMatrix(d),l.setAttribute("normal",v)}if(f.uvs.forEach(function(d,v){kw==="uv2"&&v++;const g=v===0?"uv":`uv${v}`;l.setAttribute(g,new je(f.uvs[v],2))}),u.material&&u.material.mappingType!=="AllSame"){let d=f.materialIndex[0],v=0;if(f.materialIndex.forEach(function(g,_){g!==d&&(l.addGroup(v,_-v,d),d=g,v=_)}),l.groups.length>0){const g=l.groups[l.groups.length-1],_=g.start+g.count;_!==f.materialIndex.length&&l.addGroup(_,f.materialIndex.length-_,d)}l.groups.length===0&&l.addGroup(0,f.materialIndex.length,f.materialIndex[0])}return this.addMorphTargets(l,t,a,r),l}parseGeoNode(t,e){const a={};if(a.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],a.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(a.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(a.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(a.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){a.uv=[];let r=0;for(;t.LayerElementUV[r];)t.LayerElementUV[r].UV&&a.uv.push(this.parseUVs(t.LayerElementUV[r])),r++}return a.weightTable={},e!==null&&(a.skeleton=e,e.rawBones.forEach(function(r,l){r.indices.forEach(function(u,f){a.weightTable[u]===void 0&&(a.weightTable[u]=[]),a.weightTable[u].push({id:l,weight:r.weights[f]})})})),a}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let a=0,r=0,l=!1,u=[],f=[],p=[],d=[],v=[],g=[];const _=this;return t.vertexIndices.forEach(function(y,S){let T,M=!1;y<0&&(y=y^-1,M=!0);let x=[],L=[];if(u.push(y*3,y*3+1,y*3+2),t.color){const R=Zc(S,a,y,t.color);p.push(R[0],R[1],R[2])}if(t.skeleton){if(t.weightTable[y]!==void 0&&t.weightTable[y].forEach(function(R){L.push(R.weight),x.push(R.id)}),L.length>4){l||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),l=!0);const R=[0,0,0,0],w=[0,0,0,0];L.forEach(function(O,B){let z=O,G=x[B];w.forEach(function(U,D,I){if(z>U){I[D]=z,z=U;const Z=R[D];R[D]=G,G=Z}})}),x=R,L=w}for(;L.length<4;)L.push(0),x.push(0);for(let R=0;R<4;++R)v.push(L[R]),g.push(x[R])}if(t.normal){const R=Zc(S,a,y,t.normal);f.push(R[0],R[1],R[2])}t.material&&t.material.mappingType!=="AllSame"&&(T=Zc(S,a,y,t.material)[0]),t.uv&&t.uv.forEach(function(R,w){const O=Zc(S,a,y,R);d[w]===void 0&&(d[w]=[]),d[w].push(O[0]),d[w].push(O[1])}),r++,M&&(_.genFace(e,t,u,T,f,p,d,v,g,r),a++,r=0,u=[],f=[],p=[],d=[],v=[],g=[])}),e}genFace(t,e,a,r,l,u,f,p,d,v){for(let g=2;g<v;g++)t.vertex.push(e.vertexPositions[a[0]]),t.vertex.push(e.vertexPositions[a[1]]),t.vertex.push(e.vertexPositions[a[2]]),t.vertex.push(e.vertexPositions[a[(g-1)*3]]),t.vertex.push(e.vertexPositions[a[(g-1)*3+1]]),t.vertex.push(e.vertexPositions[a[(g-1)*3+2]]),t.vertex.push(e.vertexPositions[a[g*3]]),t.vertex.push(e.vertexPositions[a[g*3+1]]),t.vertex.push(e.vertexPositions[a[g*3+2]]),e.skeleton&&(t.vertexWeights.push(p[0]),t.vertexWeights.push(p[1]),t.vertexWeights.push(p[2]),t.vertexWeights.push(p[3]),t.vertexWeights.push(p[(g-1)*4]),t.vertexWeights.push(p[(g-1)*4+1]),t.vertexWeights.push(p[(g-1)*4+2]),t.vertexWeights.push(p[(g-1)*4+3]),t.vertexWeights.push(p[g*4]),t.vertexWeights.push(p[g*4+1]),t.vertexWeights.push(p[g*4+2]),t.vertexWeights.push(p[g*4+3]),t.weightsIndices.push(d[0]),t.weightsIndices.push(d[1]),t.weightsIndices.push(d[2]),t.weightsIndices.push(d[3]),t.weightsIndices.push(d[(g-1)*4]),t.weightsIndices.push(d[(g-1)*4+1]),t.weightsIndices.push(d[(g-1)*4+2]),t.weightsIndices.push(d[(g-1)*4+3]),t.weightsIndices.push(d[g*4]),t.weightsIndices.push(d[g*4+1]),t.weightsIndices.push(d[g*4+2]),t.weightsIndices.push(d[g*4+3])),e.color&&(t.colors.push(u[0]),t.colors.push(u[1]),t.colors.push(u[2]),t.colors.push(u[(g-1)*3]),t.colors.push(u[(g-1)*3+1]),t.colors.push(u[(g-1)*3+2]),t.colors.push(u[g*3]),t.colors.push(u[g*3+1]),t.colors.push(u[g*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(r),t.materialIndex.push(r),t.materialIndex.push(r)),e.normal&&(t.normal.push(l[0]),t.normal.push(l[1]),t.normal.push(l[2]),t.normal.push(l[(g-1)*3]),t.normal.push(l[(g-1)*3+1]),t.normal.push(l[(g-1)*3+2]),t.normal.push(l[g*3]),t.normal.push(l[g*3+1]),t.normal.push(l[g*3+2])),e.uv&&e.uv.forEach(function(_,y){t.uvs[y]===void 0&&(t.uvs[y]=[]),t.uvs[y].push(f[y][0]),t.uvs[y].push(f[y][1]),t.uvs[y].push(f[y][(g-1)*2]),t.uvs[y].push(f[y][(g-1)*2+1]),t.uvs[y].push(f[y][g*2]),t.uvs[y].push(f[y][g*2+1])})}addMorphTargets(t,e,a,r){if(a.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const l=this;a.forEach(function(u){u.rawTargets.forEach(function(f){const p=Me.Objects.Geometry[f.geoID];p!==void 0&&l.genMorphGeometry(t,e,p,r,f.name)})})}genMorphGeometry(t,e,a,r,l){const u=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],f=a.Vertices!==void 0?a.Vertices.a:[],p=a.Indexes!==void 0?a.Indexes.a:[],d=t.attributes.position.count*3,v=new Float32Array(d);for(let S=0;S<p.length;S++){const T=p[S]*3;v[T]=f[S*3],v[T+1]=f[S*3+1],v[T+2]=f[S*3+2]}const g={vertexIndices:u,vertexPositions:v},_=this.genBuffers(g),y=new je(_.vertex,3);y.name=l||a.attrName,y.applyMatrix4(r),t.morphAttributes.position.push(y)}parseNormals(t){const e=t.MappingInformationType,a=t.ReferenceInformationType,r=t.Normals.a;let l=[];return a==="IndexToDirect"&&("NormalIndex"in t?l=t.NormalIndex.a:"NormalsIndex"in t&&(l=t.NormalsIndex.a)),{dataSize:3,buffer:r,indices:l,mappingType:e,referenceType:a}}parseUVs(t){const e=t.MappingInformationType,a=t.ReferenceInformationType,r=t.UV.a;let l=[];return a==="IndexToDirect"&&(l=t.UVIndex.a),{dataSize:2,buffer:r,indices:l,mappingType:e,referenceType:a}}parseVertexColors(t){const e=t.MappingInformationType,a=t.ReferenceInformationType,r=t.Colors.a;let l=[];return a==="IndexToDirect"&&(l=t.ColorIndex.a),{dataSize:4,buffer:r,indices:l,mappingType:e,referenceType:a}}parseMaterialIndices(t){const e=t.MappingInformationType,a=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:a};const r=t.Materials.a,l=[];for(let u=0;u<r.length;++u)l.push(u);return{dataSize:1,buffer:r,indices:l,mappingType:e,referenceType:a}}parseNurbsGeometry(t){if(S0===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new Bn;const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new Bn;const a=e-1,r=t.KnotVector.a,l=[],u=t.Points.a;for(let g=0,_=u.length;g<_;g+=4)l.push(new Te().fromArray(u,g));let f,p;if(t.Form==="Closed")l.push(l[0]);else if(t.Form==="Periodic"){f=a,p=r.length-1-f;for(let g=0;g<a;++g)l.push(l[g])}const v=new S0(a,r,l,f,p).getPoints(l.length*12);return new Bn().setFromPoints(v)}}class pR{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const a in e){const r=e[a],l=this.addClip(r);t.push(l)}return t}parseClips(){if(Me.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=Me.Objects.AnimationCurveNode,e=new Map;for(const a in t){const r=t[a];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const l={id:r.id,attr:r.attrName,curves:{}};e.set(l.id,l)}}return e}parseAnimationCurves(t){const e=Me.Objects.AnimationCurve;for(const a in e){const r={id:e[a].id,times:e[a].KeyTime.a.map(yR),values:e[a].KeyValueFloat.a},l=cn.get(r.id);if(l!==void 0){const u=l.parents[0].ID,f=l.parents[0].relationship;f.match(/X/)?t.get(u).curves.x=r:f.match(/Y/)?t.get(u).curves.y=r:f.match(/Z/)?t.get(u).curves.z=r:f.match(/d|DeformPercent/)&&t.has(u)&&(t.get(u).curves.morph=r)}}}parseAnimationLayers(t){const e=Me.Objects.AnimationLayer,a=new Map;for(const r in e){const l=[],u=cn.get(parseInt(r));u!==void 0&&(u.children.forEach(function(p,d){if(t.has(p.ID)){const v=t.get(p.ID);if(v.curves.x!==void 0||v.curves.y!==void 0||v.curves.z!==void 0){if(l[d]===void 0){const g=cn.get(p.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID;if(g!==void 0){const _=Me.Objects.Model[g.toString()];if(_===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",p);return}const y={modelName:_.attrName?Re.sanitizeNodeName(_.attrName):"",ID:_.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Zn.traverse(function(S){S.ID===_.id&&(y.transform=S.matrix,S.userData.transformData&&(y.eulerOrder=S.userData.transformData.eulerOrder))}),y.transform||(y.transform=new Zt),"PreRotation"in _&&(y.preRotation=_.PreRotation.value),"PostRotation"in _&&(y.postRotation=_.PostRotation.value),l[d]=y}}l[d]&&(l[d][v.attr]=v)}else if(v.curves.morph!==void 0){if(l[d]===void 0){const g=cn.get(p.ID).parents.filter(function(x){return x.relationship!==void 0})[0].ID,_=cn.get(g).parents[0].ID,y=cn.get(_).parents[0].ID,S=cn.get(y).parents[0].ID,T=Me.Objects.Model[S],M={modelName:T.attrName?Re.sanitizeNodeName(T.attrName):"",morphName:Me.Objects.Deformer[g].attrName};l[d]=M}l[d][v.attr]=v}}}),a.set(parseInt(r),l))}return a}parseAnimStacks(t){const e=Me.Objects.AnimationStack,a={};for(const r in e){const l=cn.get(parseInt(r)).children;l.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const u=t.get(l[0].ID);a[r]={name:e[r].attrName,layer:u}}return a}addClip(t){let e=[];const a=this;return t.layer.forEach(function(r){e=e.concat(a.generateTracks(r))}),new Qd(t.name,-1,e)}generateTracks(t){const e=[];let a=new W,r=new oi,l=new W;if(t.transform&&t.transform.decompose(a,r,l),a=a.toArray(),r=new Dn().setFromQuaternion(r,t.eulerOrder).toArray(),l=l.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const u=this.generateVectorTrack(t.modelName,t.T.curves,a,"position");u!==void 0&&e.push(u)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const u=this.generateRotationTrack(t.modelName,t.R.curves,r,t.preRotation,t.postRotation,t.eulerOrder);u!==void 0&&e.push(u)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const u=this.generateVectorTrack(t.modelName,t.S.curves,l,"scale");u!==void 0&&e.push(u)}if(t.DeformPercent!==void 0){const u=this.generateMorphTrack(t);u!==void 0&&e.push(u)}return e}generateVectorTrack(t,e,a,r){const l=this.getTimesForAllAxes(e),u=this.getKeyframeTrackValues(l,e,a);return new cl(t+"."+r,l,u)}generateRotationTrack(t,e,a,r,l,u){e.x!==void 0&&(this.interpolateRotations(e.x),e.x.values=e.x.values.map(Hi.degToRad)),e.y!==void 0&&(this.interpolateRotations(e.y),e.y.values=e.y.values.map(Hi.degToRad)),e.z!==void 0&&(this.interpolateRotations(e.z),e.z.values=e.z.values.map(Hi.degToRad));const f=this.getTimesForAllAxes(e),p=this.getKeyframeTrackValues(f,e,a);r!==void 0&&(r=r.map(Hi.degToRad),r.push(u),r=new Dn().fromArray(r),r=new oi().setFromEuler(r)),l!==void 0&&(l=l.map(Hi.degToRad),l.push(u),l=new Dn().fromArray(l),l=new oi().setFromEuler(l).invert());const d=new oi,v=new Dn,g=[];for(let _=0;_<p.length;_+=3)v.set(p[_],p[_+1],p[_+2],u),d.setFromEuler(v),r!==void 0&&d.premultiply(r),l!==void 0&&d.multiply(l),d.toArray(g,_/3*4);return new hl(t+".quaternion",f,g)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,a=e.values.map(function(l){return l/100}),r=Zn.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new ll(t.modelName+".morphTargetInfluences["+r+"]",e.times,a)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(a,r){return a-r}),e.length>1){let a=1,r=e[0];for(let l=1;l<e.length;l++){const u=e[l];u!==r&&(e[a]=u,r=u,a++)}e=e.slice(0,a)}return e}getKeyframeTrackValues(t,e,a){const r=a,l=[];let u=-1,f=-1,p=-1;return t.forEach(function(d){if(e.x&&(u=e.x.times.indexOf(d)),e.y&&(f=e.y.times.indexOf(d)),e.z&&(p=e.z.times.indexOf(d)),u!==-1){const v=e.x.values[u];l.push(v),r[0]=v}else l.push(r[0]);if(f!==-1){const v=e.y.values[f];l.push(v),r[1]=v}else l.push(r[1]);if(p!==-1){const v=e.z.values[p];l.push(v),r[2]=v}else l.push(r[2])}),l}interpolateRotations(t){for(let e=1;e<t.values.length;e++){const a=t.values[e-1],r=t.values[e]-a,l=Math.abs(r);if(l>=180){const u=l/180,f=r/u;let p=a+f;const d=t.times[e-1],g=(t.times[e]-d)/u;let _=d+g;const y=[],S=[];for(;_<t.times[e];)y.push(_),_+=g,S.push(p),p+=f;t.times=T0(t.times,e,y),t.values=T0(t.values,e,S)}}}}class mR{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new dy,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,a=t.split(/[\r\n]+/);return a.forEach(function(r,l){const u=r.match(/^[\s\t]*;/),f=r.match(/^[\s\t]*$/);if(u||f)return;const p=r.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),d=r.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),v=r.match("^\\t{"+(e.currentIndent-1)+"}}");p?e.parseNodeBegin(r,p):d?e.parseNodeProperty(r,d,a[++l]):v?e.popStack():r.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(t,e){const a=e[1].trim().replace(/^"/,"").replace(/"$/,""),r=e[2].split(",").map(function(p){return p.trim().replace(/^"/,"").replace(/"$/,"")}),l={name:a},u=this.parseNodeAttr(r),f=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(a,l):a in f?(a==="PoseNode"?f.PoseNode.push(l):f[a].id!==void 0&&(f[a]={},f[a][f[a].id]=f[a]),u.id!==""&&(f[a][u.id]=l)):typeof u.id=="number"?(f[a]={},f[a][u.id]=l):a!=="Properties70"&&(a==="PoseNode"?f[a]=[l]:f[a]=l),typeof u.id=="number"&&(l.id=u.id),u.name!==""&&(l.attrName=u.name),u.type!==""&&(l.attrType=u.type),this.pushStack(l)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let a="",r="";return t.length>1&&(a=t[1].replace(/^(\w+)::/,""),r=t[2]),{id:e,name:a,type:r}}parseNodeProperty(t,e,a){let r=e[1].replace(/^"/,"").replace(/"$/,"").trim(),l=e[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&l===","&&(l=a.replace(/"/g,"").replace(/,$/,"").trim());const u=this.getCurrentNode();if(u.name==="Properties70"){this.parseNodeSpecialProperty(t,r,l);return}if(r==="C"){const p=l.split(",").slice(1),d=parseInt(p[0]),v=parseInt(p[1]);let g=l.split(",").slice(3);g=g.map(function(_){return _.trim().replace(/^"/,"")}),r="connections",l=[d,v],SR(l,g),u[r]===void 0&&(u[r]=[])}r==="Node"&&(u.id=l),r in u&&Array.isArray(u[r])?u[r].push(l):r!=="a"?u[r]=l:u.a=l,this.setCurrentProp(u,r),r==="a"&&l.slice(-1)!==","&&(u.a=fd(l))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=fd(e.a))}parseNodeSpecialProperty(t,e,a){const r=a.split('",').map(function(v){return v.trim().replace(/^\"/,"").replace(/\s/,"_")}),l=r[0],u=r[1],f=r[2],p=r[3];let d=r[4];switch(u){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":d=parseFloat(d);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":d=fd(d);break}this.getPrevNode()[l]={type:u,type2:f,flag:p,value:d},this.setCurrentProp(this.getPrevNode(),l)}}class gR{parse(t){const e=new M0(t);e.skip(23);const a=e.getUint32();if(a<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+a);const r=new dy;for(;!this.endOfContent(e);){const l=this.parseNode(e,a);l!==null&&r.add(l.name,l)}return r}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const a={},r=e>=7500?t.getUint64():t.getUint32(),l=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const u=t.getUint8(),f=t.getString(u);if(r===0)return null;const p=[];for(let _=0;_<l;_++)p.push(this.parseProperty(t));const d=p.length>0?p[0]:"",v=p.length>1?p[1]:"",g=p.length>2?p[2]:"";for(a.singleProperty=l===1&&t.getOffset()===r;r>t.getOffset();){const _=this.parseNode(t,e);_!==null&&this.parseSubNode(f,a,_)}return a.propertyList=p,typeof d=="number"&&(a.id=d),v!==""&&(a.attrName=v),g!==""&&(a.attrType=g),f!==""&&(a.name=f),a}parseSubNode(t,e,a){if(a.singleProperty===!0){const r=a.propertyList[0];Array.isArray(r)?(e[a.name]=a,a.a=r):e[a.name]=r}else if(t==="Connections"&&a.name==="C"){const r=[];a.propertyList.forEach(function(l,u){u!==0&&r.push(l)}),e.connections===void 0&&(e.connections=[]),e.connections.push(r)}else if(a.name==="Properties70")Object.keys(a).forEach(function(l){e[l]=a[l]});else if(t==="Properties70"&&a.name==="P"){let r=a.propertyList[0],l=a.propertyList[1];const u=a.propertyList[2],f=a.propertyList[3];let p;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),l.indexOf("Lcl ")===0&&(l=l.replace("Lcl ","Lcl_")),l==="Color"||l==="ColorRGB"||l==="Vector"||l==="Vector3D"||l.indexOf("Lcl_")===0?p=[a.propertyList[4],a.propertyList[5],a.propertyList[6]]:p=a.propertyList[4],e[r]={type:l,type2:u,flag:f,value:p}}else e[a.name]===void 0?typeof a.id=="number"?(e[a.name]={},e[a.name][a.id]=a):e[a.name]=a:a.name==="PoseNode"?(Array.isArray(e[a.name])||(e[a.name]=[e[a.name]]),e[a.name].push(a)):e[a.name][a.id]===void 0&&(e[a.name][a.id]=a)}parseProperty(t){const e=t.getString(1);let a;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return a=t.getUint32(),t.getArrayBuffer(a);case"S":return a=t.getUint32(),t.getString(a);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=t.getUint32(),l=t.getUint32(),u=t.getUint32();if(l===0)switch(e){case"b":case"c":return t.getBooleanArray(r);case"d":return t.getFloat64Array(r);case"f":return t.getFloat32Array(r);case"i":return t.getInt32Array(r);case"l":return t.getInt64Array(r)}const f=eR(new Uint8Array(t.getArrayBuffer(u))),p=new M0(f.buffer);switch(e){case"b":case"c":return p.getBooleanArray(r);case"d":return p.getFloat64Array(r);case"f":return p.getFloat32Array(r);case"i":return p.getInt32Array(r);case"l":return p.getInt64Array(r)}default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class M0{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let a=0;a<t;a++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let a=0;a<t;a++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let a=0;a<t;a++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let a=0;a<t;a++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let a=0;a<t;a++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){let e=[];for(let r=0;r<t;r++)e[r]=this.getUint8();const a=e.indexOf(0);return a>=0&&(e=e.slice(0,a)),fy(new Uint8Array(e))}}class dy{add(t,e){this[t]=e}}function vR(o){const t="Kaydara FBX Binary  \0";return o.byteLength>=t.length&&t===gy(o,0,t.length)}function _R(o){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function a(r){const l=o[r-1];return o=o.slice(e+r),e++,l}for(let r=0;r<t.length;++r)if(a(1)===t[r])return!1;return!0}function E0(o){const t=/FBXVersion: (\d+)/,e=o.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function yR(o){return o/46186158e3}const xR=[];function Zc(o,t,e,a){let r;switch(a.mappingType){case"ByPolygonVertex":r=o;break;case"ByPolygon":r=t;break;case"ByVertice":r=e;break;case"AllSame":r=a.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+a.mappingType)}a.referenceType==="IndexToDirect"&&(r=a.indices[r]);const l=r*a.dataSize,u=l+a.dataSize;return MR(xR,a.buffer,l,u)}const ud=new Dn,Ds=new W;function py(o){const t=new Zt,e=new Zt,a=new Zt,r=new Zt,l=new Zt,u=new Zt,f=new Zt,p=new Zt,d=new Zt,v=new Zt,g=new Zt,_=new Zt,y=o.inheritType?o.inheritType:0;if(o.translation&&t.setPosition(Ds.fromArray(o.translation)),o.preRotation){const D=o.preRotation.map(Hi.degToRad);D.push(o.eulerOrder),e.makeRotationFromEuler(ud.fromArray(D))}if(o.rotation){const D=o.rotation.map(Hi.degToRad);D.push(o.eulerOrder),a.makeRotationFromEuler(ud.fromArray(D))}if(o.postRotation){const D=o.postRotation.map(Hi.degToRad);D.push(o.eulerOrder),r.makeRotationFromEuler(ud.fromArray(D)),r.invert()}o.scale&&l.scale(Ds.fromArray(o.scale)),o.scalingOffset&&f.setPosition(Ds.fromArray(o.scalingOffset)),o.scalingPivot&&u.setPosition(Ds.fromArray(o.scalingPivot)),o.rotationOffset&&p.setPosition(Ds.fromArray(o.rotationOffset)),o.rotationPivot&&d.setPosition(Ds.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(g.copy(o.parentMatrix),v.copy(o.parentMatrixWorld));const S=e.clone().multiply(a).multiply(r),T=new Zt;T.extractRotation(v);const M=new Zt;M.copyPosition(v);const x=M.clone().invert().multiply(v),L=T.clone().invert().multiply(x),R=l,w=new Zt;if(y===0)w.copy(T).multiply(S).multiply(L).multiply(R);else if(y===1)w.copy(T).multiply(L).multiply(S).multiply(R);else{const I=new Zt().scale(new W().setFromMatrixScale(g)).clone().invert(),Z=L.clone().multiply(I);w.copy(T).multiply(S).multiply(Z).multiply(R)}const O=d.clone().invert(),B=u.clone().invert();let z=t.clone().multiply(p).multiply(d).multiply(e).multiply(a).multiply(r).multiply(O).multiply(f).multiply(u).multiply(l).multiply(B);const G=new Zt().copyPosition(z),U=v.clone().multiply(G);return _.copyPosition(U),z=_.clone().multiply(w),z.premultiply(v.invert()),z}function my(o){o=o||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[o]}function fd(o){return o.split(",").map(function(e){return parseFloat(e)})}function gy(o,t,e){return t===void 0&&(t=0),e===void 0&&(e=o.byteLength),fy(new Uint8Array(o,t,e))}function SR(o,t){for(let e=0,a=o.length,r=t.length;e<r;e++,a++)o[a]=t[e]}function MR(o,t,e,a){for(let r=e,l=0;r<a;r++,l++)o[l]=t[r];return o}function T0(o,t,e){return o.slice(0,t).concat(e).concat(o.slice(t))}const ER=(o,t)=>{const[e,a]=fe.useState(!1);return{loadFBX:u=>{a(!0);const f=new fR,p=URL.createObjectURL(u);f.load(p,d=>{const v=new Lr().setFromObject(d),g=v.getSize(new W),_=Math.max(g.x,g.y,g.z);if(_>0){const y=5/_;d.scale.setScalar(y);const S=v.getCenter(new W);d.position.sub(S.multiplyScalar(y))}d.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0,y.material&&(y.material.side=Kn,y.material.shadowSide=Kn,y.material.needsUpdate=!0,y.userData.originalMaterial=y.material))}),o(d,{name:u.name.replace(/\.[^/.]+$/,""),type:"fbx",originalFile:u}),a(!1),URL.revokeObjectURL(p)},void 0,d=>{t("FBX load failed"),a(!1),URL.revokeObjectURL(p)})},createSampleModel:()=>{a(!0);const u=new Rr,f=(p,d,v)=>{const g=new li(p,new pu({color:d}));return g.position.set(...v),g.castShadow=!0,g.receiveShadow=!0,g.userData.originalMaterial=g.material,g};u.add(f(new Ws(2,2,2),16739179,[-3,1,0])),u.add(f(new yp(1.5,32,32),5164484,[0,1.5,0])),u.add(f(new _p(1,3,8),4569041,[3,1.5,0])),o(u,{name:"Sample Objects",type:"sample"}),a(!1)},loading:e}},TR=o=>{const[t,e]=fe.useState([]),a=`
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec4 vLightSpacePosition;
    uniform mat4 lightSpaceMatrix;
    void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vLightSpacePosition = lightSpaceMatrix * worldPosition;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,r=`
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec4 vLightSpacePosition;
    uniform vec3 lightPosition;
    uniform vec3 lightColor;
    uniform float lightIntensity;
    uniform sampler2D shadowMap;
    uniform vec2 shadowMapSize;
    uniform float shadowBias;
    
    float getShadow() {
        vec3 projCoords = vLightSpacePosition.xyz / vLightSpacePosition.w;
        projCoords = projCoords * 0.5 + 0.5;
        if (projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0 || projCoords.z > 1.0) return 1.0;
        float currentDepth = projCoords.z;
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightPosition - vPosition);
        float bias = max(shadowBias * (1.0 - dot(normal, lightDir)), 0.005);
        float shadow = 0.0;
        vec2 texelSize = 1.0 / shadowMapSize;
        for(int x = -1; x <= 1; ++x) {
            for(int y = -1; y <= 1; ++y) {
                float pcfDepth = texture2D(shadowMap, projCoords.xy + vec2(x, y) * texelSize).r;
                shadow += currentDepth - bias > pcfDepth ? 0.0 : 1.0;
            }
        }
        shadow /= 9.0;
        return shadow;
    }
    
    void main() {
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightPosition - vPosition);
        float diff = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = diff * lightColor * lightIntensity;
        float shadow = getShadow();
        vec3 ambient = vec3(0.1, 0.1, 0.1);
        vec3 finalColor = ambient + diffuse * vec3(0.8, 0.3, 0.3) * shadow;
        gl_FragColor = vec4(finalColor, 1.0);
    }
  `,l=fe.useCallback(_=>{const y=_.fragmentShader||r,S={lightPosition:{value:new W},lightColor:{value:new ae(16777215)},lightIntensity:{value:1},lightSpaceMatrix:{value:new Zt},shadowMap:{value:null},shadowMapSize:{value:new Ee(2048,2048)},shadowBias:{value:.001}};o&&(S.lightPosition.value.copy(o.position),S.lightColor.value.copy(o.color),S.lightIntensity.value=o.intensity);const T=new ga({vertexShader:a,fragmentShader:y,uniforms:S,side:Kn,shadowSide:Kn});return T.shadowSide=Kn,T.needsUpdate=!0,T.updateUniforms=(M,x)=>{if(T.uniforms)try{if(o&&(T.uniforms.lightPosition.value.copy(o.position),T.uniforms.lightColor.value.copy(o.color),T.uniforms.lightIntensity.value=o.intensity,o.shadow&&o.shadow.map)){T.uniforms.shadowMap.value=o.shadow.map.texture,T.uniforms.shadowMapSize.value.set(o.shadow.map.width,o.shadow.map.height),o.shadow.camera.updateMatrixWorld(),o.shadow.camera.updateProjectionMatrix();const L=new Zt;L.multiplyMatrices(o.shadow.camera.projectionMatrix,o.shadow.camera.matrixWorldInverse),T.uniforms.lightSpaceMatrix.value.copy(L)}T.needsUpdate=!0}catch(L){console.error("Error updating material uniforms:",L)}},T},[o,a,r]),u=fe.useCallback((_="New Material")=>{const y={id:Date.now()+Math.random(),name:_,fragmentShader:r,createdAt:Date.now(),lastModified:Date.now()};return e(S=>[...S,y]),y},[r]),f=fe.useCallback(_=>{e(y=>y.map(S=>S.id===_.id?{..._,lastModified:Date.now()}:S))},[]),p=fe.useCallback(_=>{e(y=>y.filter(S=>S.id!==_))},[]),d=fe.useCallback((_,y)=>{if(!_||!l(y))return;const T=M=>{if(M.isMesh){M.userData.originalMaterial||(M.userData.originalMaterial=M.material),M.material&&M.material.dispose&&M.material!==M.userData.originalMaterial&&M.material.dispose();const x=l(y);M.material=x,M.userData.customMaterial=y,M.castShadow=!0,M.receiveShadow=!0}};_.isGroup||_.type==="Group"?_.traverse(T):_.isMesh&&(_.userData.originalMaterial||(_.userData.originalMaterial=_.material),_.material&&_.material.dispose&&_.material!==_.userData.originalMaterial&&_.material.dispose(),_.material=l(y),_.userData.customMaterial=y,_.castShadow=!0,_.receiveShadow=!0)},[l]),v=fe.useCallback(_=>{if(!_)return;const y=S=>{S.isMesh&&(S.userData.originalMaterial?(S.material&&S.material.dispose&&S.material!==S.userData.originalMaterial&&S.material.dispose(),S.material=S.userData.originalMaterial):(S.material&&S.material.dispose&&S.material.dispose(),S.material=new pu({color:8947848})),delete S.userData.customMaterial)};_.isGroup||_.type==="Group"?_.traverse(y):_.isMesh&&y(_)},[]),g=fe.useCallback((_,y)=>{!_||!y||y.traverse(S=>{if(S.isMesh&&S.material&&S.material.updateUniforms)try{S.material.updateUniforms(_,y)}catch(T){console.error("Error updating material uniforms:",T)}})},[]);return{materials:t,createMaterial:u,updateMaterial:f,deleteMaterial:p,applyMaterialToMesh:d,revertToOriginalMaterial:v,createThreeJSMaterial:l,updateAllMaterialUniforms:g}},bR=({assets:o,materials:t,onAssetSelect:e,onAssetDelete:a,onMaterialCreate:r,onMaterialEdit:l,onMaterialDelete:u,onMaterialApply:f})=>{const[p,d]=fe.useState("models");return Vt.jsxs("div",{style:{height:"200px",background:"#333",borderTop:"1px solid #666",display:"flex",flexDirection:"column"},children:[Vt.jsxs("div",{style:{background:"#444",padding:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Vt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Vt.jsxs("button",{onClick:()=>d("models"),style:{background:p==="models"?"#06c":"#666",color:"#fff",border:"none",padding:"4px 8px",cursor:"pointer"},children:["Models (",o.length,")"]}),Vt.jsxs("button",{onClick:()=>d("materials"),style:{background:p==="materials"?"#06c":"#666",color:"#fff",border:"none",padding:"4px 8px",cursor:"pointer"},children:["Materials (",t.length,")"]})]}),p==="materials"&&Vt.jsx("button",{onClick:r,style:{background:"#0a0",color:"#fff",border:"none",padding:"4px 8px",cursor:"pointer"},children:"+ New"})]}),Vt.jsxs("div",{style:{flex:1,padding:"8px",overflowY:"auto",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(80px, 1fr))",gap:"4px"},children:[p==="models"&&Vt.jsxs(Vt.Fragment,{children:[o.map(v=>Vt.jsxs("div",{onClick:()=>e(v),style:{background:"#555",padding:"8px",cursor:"pointer",position:"relative",textAlign:"center"},children:[Vt.jsx("button",{onClick:g=>{g.stopPropagation(),a(v.id)},style:{position:"absolute",top:"2px",right:"2px",background:"#f44",color:"#fff",border:"none",width:"16px",height:"16px",fontSize:"10px",cursor:"pointer"},children:"×"}),Vt.jsx("div",{style:{fontSize:"24px"},children:"📦"}),Vt.jsx("div",{style:{color:"#ccc",fontSize:"10px"},children:v.name})]},v.id)),o.length===0&&Vt.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",color:"#666",padding:"20px"},children:"No models"})]}),p==="materials"&&Vt.jsxs(Vt.Fragment,{children:[t.map(v=>Vt.jsxs("div",{onClick:()=>l(v),style:{background:"#555",padding:"8px",cursor:"pointer",position:"relative",textAlign:"center"},children:[Vt.jsx("button",{onClick:g=>{g.stopPropagation(),u(v.id)},style:{position:"absolute",top:"2px",right:"2px",background:"#f44",color:"#fff",border:"none",width:"16px",height:"16px",fontSize:"10px",cursor:"pointer"},children:"×"}),Vt.jsx("button",{onClick:g=>{g.stopPropagation(),f(v)},style:{position:"absolute",top:"2px",left:"2px",background:"#0a0",color:"#fff",border:"none",width:"16px",height:"16px",fontSize:"10px",cursor:"pointer"},children:"✓"}),Vt.jsx("div",{style:{fontSize:"24px"},children:"🎨"}),Vt.jsx("div",{style:{color:"#ccc",fontSize:"10px"},children:v.name})]},v.id)),t.length===0&&Vt.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",color:"#666",padding:"20px"},children:"No materials"})]})]})]})},AR=({directionalLight:o,onLightChange:t})=>{const[e,a]=fe.useState(45),[r,l]=fe.useState(45),[u,f]=fe.useState(.8);return fe.useEffect(()=>{if(!o)return;const p=15,d=e*Math.PI/180,v=r*Math.PI/180,g=p*Math.cos(v)*Math.cos(d),_=p*Math.sin(v),y=p*Math.cos(v)*Math.sin(d);o.position.set(g,_,y),o.intensity=u,t&&t({azimuth:e,elevation:r,intensity:u})},[e,r,u,o]),Vt.jsxs("div",{style:{position:"absolute",top:"60px",right:"20px",background:"rgba(50,50,50,0.9)",padding:"12px",color:"#fff",minWidth:"200px"},children:[Vt.jsx("div",{style:{fontWeight:"bold",marginBottom:"8px"},children:"Light"}),Vt.jsxs("div",{style:{marginBottom:"8px"},children:[Vt.jsxs("label",{style:{display:"block",marginBottom:"2px",fontSize:"12px"},children:["Azimuth: ",e,"°"]}),Vt.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:e,onChange:p=>a(parseFloat(p.target.value)),style:{width:"100%"}})]}),Vt.jsxs("div",{style:{marginBottom:"8px"},children:[Vt.jsxs("label",{style:{display:"block",marginBottom:"2px",fontSize:"12px"},children:["Elevation: ",r,"°"]}),Vt.jsx("input",{type:"range",min:"5",max:"85",step:"5",value:r,onChange:p=>l(parseFloat(p.target.value)),style:{width:"100%"}})]}),Vt.jsxs("div",{style:{marginBottom:"8px"},children:[Vt.jsxs("label",{style:{display:"block",marginBottom:"2px",fontSize:"12px"},children:["Intensity: ",u.toFixed(1)]}),Vt.jsx("input",{type:"range",min:"0.1",max:"2.0",step:"0.1",value:u,onChange:p=>f(parseFloat(p.target.value)),style:{width:"100%"}})]}),Vt.jsx("button",{onClick:()=>{a(45),l(45),f(.8)},style:{width:"100%",background:"#06c",color:"#fff",border:"none",padding:"4px",cursor:"pointer"},children:"Reset"})]})},wR=({material:o,onMaterialUpdate:t,onClose:e})=>{const a=`varying vec3 vNormal;
varying vec3 vPosition;
varying vec4 vLightSpacePosition;
uniform vec3 lightPosition;
uniform vec3 lightColor;
uniform float lightIntensity;
uniform sampler2D shadowMap;
uniform vec2 shadowMapSize;
uniform float shadowBias;

float getShadow() {
    if (shadowMap == null) return 1.0;
    
    vec3 projCoords = vLightSpacePosition.xyz / vLightSpacePosition.w;
    projCoords = projCoords * 0.5 + 0.5;
    
    if (projCoords.z > 1.0) return 1.0;
    if (projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) return 1.0;
    
    float currentDepth = projCoords.z;
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(lightPosition - vPosition);
    float bias = max(0.05 * (1.0 - dot(normal, lightDir)), 0.005);
    
    float shadow = 0.0;
    vec2 texelSize = 1.0 / shadowMapSize;
    for(int x = -1; x <= 1; ++x) {
        for(int y = -1; y <= 1; ++y) {
            float pcfDepth = texture2D(shadowMap, projCoords.xy + vec2(x, y) * texelSize).r;
            shadow += (currentDepth - bias) > pcfDepth ? 0.0 : 1.0;
        }
    }
    shadow /= 9.0;
    
    return shadow;
}

void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(lightPosition - vPosition);
    float diff = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = diff * lightColor * lightIntensity;
    float shadow = getShadow();
    vec3 ambient = vec3(0.1, 0.1, 0.1);
    vec3 finalColor = ambient + diffuse * vec3(0.8, 0.3, 0.3) * shadow;
    gl_FragColor = vec4(finalColor, 1.0);
}`,[r,l]=fe.useState(o?.fragmentShader||a),[u,f]=fe.useState(o?.name||"Custom Material"),[p,d]=fe.useState(!1),[v,g]=fe.useState(null),_=()=>{d(!0),g(null),setTimeout(()=>{try{if(!r.includes("gl_FragColor")||!r.includes("void main()"))throw new Error("Invalid shader");t({...o,name:u,fragmentShader:r,lastModified:Date.now()}),d(!1)}catch(y){g(y.message),d(!1)}},300)};return Vt.jsx("div",{style:{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},children:Vt.jsxs("div",{style:{background:"#2a2a2a",width:"80%",height:"80%",display:"flex",flexDirection:"column"},children:[Vt.jsxs("div",{style:{background:"#333",padding:"8px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Vt.jsx("input",{type:"text",value:u,onChange:y=>f(y.target.value),style:{background:"#444",border:"1px solid #666",padding:"4px",color:"#fff",fontSize:"14px"}}),Vt.jsxs("div",{style:{display:"flex",gap:"4px"},children:[Vt.jsx("button",{onClick:()=>{l(a),g(null)},style:{background:"#666",color:"#fff",border:"none",padding:"4px 8px",cursor:"pointer"},children:"Reset"}),Vt.jsx("button",{onClick:_,disabled:p,style:{background:p?"#666":"#0a0",color:"#fff",border:"none",padding:"4px 8px",cursor:p?"not-allowed":"pointer"},children:p?"...":"Save"}),Vt.jsx("button",{onClick:e,style:{background:"#a00",color:"#fff",border:"none",padding:"4px 8px",cursor:"pointer"},children:"×"})]})]}),Vt.jsx("textarea",{value:r,onChange:y=>l(y.target.value),style:{flex:1,background:"#1e1e1e",color:"#f8f8f2",border:"none",padding:"12px",fontFamily:"monospace",fontSize:"12px",resize:"none",outline:"none"}}),v&&Vt.jsx("div",{style:{background:"#a00",color:"#fff",padding:"4px 8px",fontSize:"11px"},children:v})]})})},RR=()=>{const o=fe.useRef(null),[t,e]=fe.useState(null),[a,r]=fe.useState(!1),[l,u]=fe.useState([]),[f,p]=fe.useState(null),[d,v]=fe.useState(null),[g,_]=fe.useState(null),y=Vw(),{materials:S,createMaterial:T,updateMaterial:M,deleteMaterial:x,applyMaterialToMesh:L,revertToOriginalMaterial:R,updateAllMaterialUniforms:w}=TR(f),{resetCamera:O}=Hw(a?y.camera:null,a?y.renderer?.domElement:null),{loadFBX:B,createSampleModel:z,loading:G}=ER((I,Z)=>{const it={id:Date.now()+Math.random(),name:Z.name,type:Z.type,model:I,thumbnail:null};y.addModel(I,it.id),u(lt=>[...lt,it]),e(null)},e);fe.useEffect(()=>{if(!o.current)return;const I=o.current,{directionalLight:Z}=y.initializeScene(I);p(Z),y.setupMeshSelection(D),r(!0),y.animate((lt,ut)=>{lt&&ut&&w(lt,ut)});const it=()=>y.handleResize(I);return window.addEventListener("resize",it),()=>{window.removeEventListener("resize",it),r(!1),y.cleanup(I),p(null),v(null)}},[w]);const U=I=>{const Z=I.target.files[0];Z?.name.toLowerCase().endsWith(".fbx")?B(Z):e("FBX files only")},D=I=>{d&&d.traverse(Z=>{Z.isMesh&&Z.userData.originalEmissive!==void 0&&(Z.material?.emissive&&Z.material.emissive.copy(Z.userData.originalEmissive),delete Z.userData.originalEmissive)}),v(I),I&&I.traverse(Z=>{Z.isMesh&&Z.material?.emissive&&(Z.userData.originalEmissive=Z.material.emissive.clone(),Z.material.emissive.setHex(3355443))})};return Vt.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#222",display:"flex",flexDirection:"column",position:"relative"},children:[Vt.jsxs("div",{style:{background:"#444",padding:"8px",display:"flex",gap:"8px",alignItems:"center"},children:[Vt.jsx("h1",{style:{color:"#fff",margin:0,fontSize:"18px"},children:"SimpleWebEngine"}),Vt.jsxs("label",{style:{background:"#06c",color:"#fff",padding:"4px 8px",cursor:"pointer"},children:["Load FBX",Vt.jsx("input",{type:"file",accept:".fbx",onChange:U,style:{display:"none"}})]}),Vt.jsx("button",{onClick:()=>z(),style:{background:"#0a0",color:"#fff",padding:"4px 8px",border:"none",cursor:"pointer"},children:"Sample"}),Vt.jsx("button",{onClick:O,disabled:!a,style:{background:a?"#a00":"#666",color:"#fff",padding:"4px 8px",border:"none",cursor:a?"pointer":"not-allowed"},children:"Reset Cam"}),Vt.jsx("button",{onClick:()=>{y.clearScene(),u([])},style:{background:"#c60",color:"#fff",padding:"4px 8px",border:"none",cursor:"pointer"},children:"Clear"}),Vt.jsx("button",{onClick:()=>{d&&R(d)},style:{background:"#666",color:"#fff",padding:"4px 8px",border:"none",cursor:"pointer"},children:"Revert"}),G&&Vt.jsx("span",{style:{color:"#fa0"},children:"Loading..."}),t&&Vt.jsx("span",{style:{color:"#f44"},children:t}),Vt.jsxs("div",{style:{marginLeft:"auto",color:"#ccc",fontSize:"12px"},children:["Models: ",l.length," | Materials: ",S.length,d&&Vt.jsx("span",{style:{color:"#0f0"},children:" | Selected: ✓"})]})]}),Vt.jsx("div",{ref:o,style:{flex:1}}),a&&f&&Vt.jsx(AR,{directionalLight:f,onLightChange:()=>{}}),Vt.jsx("div",{style:{background:"#444",padding:"4px 8px",color:"#ccc",fontSize:"12px"},children:"Controls: Left=Orbit | Right=Camera | Left+Right=Zoom | Middle=Pan | Wheel=Move"}),Vt.jsx(bR,{assets:l,materials:S,onAssetSelect:()=>{},onAssetDelete:I=>{u(Z=>Z.filter(it=>it.id!==I)),y.removeModelById(I)},onMaterialCreate:()=>_(T("Custom Material")),onMaterialEdit:_,onMaterialDelete:x,onMaterialApply:I=>{d?L(d,I):alert("Select a mesh first")}}),g&&Vt.jsx(wR,{material:g,onMaterialUpdate:I=>{M(I),_(null)},onClose:()=>_(null)})]})};CS.createRoot(document.getElementById("root")).render(Vt.jsx(fe.StrictMode,{children:Vt.jsx(RR,{})}));
