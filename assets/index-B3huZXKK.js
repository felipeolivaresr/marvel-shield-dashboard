(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bs(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},en=[],$e=()=>{},dl=()=>!1,xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vs=t=>t.startsWith("onUpdate:"),ce=Object.assign,Ws=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hl=Object.prototype.hasOwnProperty,G=(t,e)=>hl.call(t,e),j=Array.isArray,tn=t=>Nr(t)==="[object Map]",Go=t=>Nr(t)==="[object Set]",B=t=>typeof t=="function",oe=t=>typeof t=="string",St=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",qo=t=>(se(t)||B(t))&&B(t.then)&&B(t.catch),Yo=Object.prototype.toString,Nr=t=>Yo.call(t),pl=t=>Nr(t).slice(8,-1),Jo=t=>Nr(t)==="[object Object]",$s=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=Bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gl=/-(\w)/g,Oe=Mr(t=>t.replace(gl,(e,n)=>n?n.toUpperCase():"")),ml=/\B([A-Z])/g,$t=Mr(t=>t.replace(ml,"-$1").toLowerCase()),Lr=Mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yr=Mr(t=>t?`on${Lr(t)}`:""),Et=(t,e)=>!Object.is(t,e),ir=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Si;const Ur=()=>Si||(Si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ks(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?bl(r):Ks(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||se(t))return t}const _l=/;(?![^(]*\))/g,vl=/:([^]+)/,yl=/\/\*[^]*?\*\//g;function bl(t){const e={};return t.replace(yl,"").split(_l).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zs(t){let e="";if(oe(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=zs(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const El="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Il=Bs(El);function Qo(t){return!!t||t===""}const Zo=t=>!!(t&&t.__v_isRef===!0),Gs=t=>oe(t)?t:t==null?"":j(t)||se(t)&&(t.toString===Yo||!B(t.toString))?Zo(t)?Gs(t.value):JSON.stringify(t,ea,2):String(t),ea=(t,e)=>Zo(e)?ea(t,e.value):tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Jr(r,i)+" =>"]=s,n),{})}:Go(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jr(n))}:St(e)?Jr(e):se(e)&&!j(e)&&!Jo(e)?String(e):e,Jr=(t,e="")=>{var n;return St(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class wl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sl(){return we}let ne;const Xr=new WeakSet;class ta{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xr.has(this)&&(Xr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ra(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ti(this),sa(this);const e=ne,n=Ne;ne=this,Ne=!0;try{return this.fn()}finally{ia(this),ne=e,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Js(e);this.deps=this.depsTail=void 0,Ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_s(this)&&this.run()}get dirty(){return _s(this)}}let na=0,Sn,Tn;function ra(t,e=!1){if(t.flags|=8,e){t.next=Tn,Tn=t;return}t.next=Sn,Sn=t}function qs(){na++}function Ys(){if(--na>0)return;if(Tn){let e=Tn;for(Tn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sn;){let e=Sn;for(Sn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ia(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Js(r),Tl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function _s(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(oa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function oa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xn))return;t.globalVersion=xn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_s(t)){t.flags&=-3;return}const n=ne,r=Ne;ne=t,Ne=!0;try{sa(t);const s=t.fn(t._value);(e.version===0||Et(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ne=n,Ne=r,ia(t),t.flags&=-3}}function Js(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Js(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ne=!0;const aa=[];function Tt(){aa.push(Ne),Ne=!1}function Rt(){const t=aa.pop();Ne=t===void 0?!0:t}function Ti(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let xn=0;class Rl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Ne||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Rl(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,ca(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(e){this.version++,xn++,this.notify(e)}notify(e){qs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ys()}}}function ca(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ca(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vs=new WeakMap,Lt=Symbol(""),ys=Symbol(""),Nn=Symbol("");function fe(t,e,n){if(Ne&&ne){let r=vs.get(t);r||vs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xs),s.map=r,s.key=n),s.track()}}function et(t,e,n,r,s,i){const o=vs.get(t);if(!o){xn++;return}const c=a=>{a&&a.trigger()};if(qs(),e==="clear")o.forEach(c);else{const a=j(t),l=a&&$s(n);if(a&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===Nn||!St(p)&&p>=f)&&c(h)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(Nn)),e){case"add":a?l&&c(o.get("length")):(c(o.get(Lt)),tn(t)&&c(o.get(ys)));break;case"delete":a||(c(o.get(Lt)),tn(t)&&c(o.get(ys)));break;case"set":tn(t)&&c(o.get(Lt));break}}Ys()}function Yt(t){const e=z(t);return e===t?e:(fe(e,"iterate",Nn),Me(t)?e:e.map(ge))}function Qs(t){return fe(t=z(t),"iterate",Nn),t}const Cl={__proto__:null,[Symbol.iterator](){return Qr(this,Symbol.iterator,ge)},concat(...t){return Yt(this).concat(...t.map(e=>j(e)?Yt(e):e))},entries(){return Qr(this,"entries",t=>(t[1]=ge(t[1]),t))},every(t,e){return Je(this,"every",t,e,void 0,arguments)},filter(t,e){return Je(this,"filter",t,e,n=>n.map(ge),arguments)},find(t,e){return Je(this,"find",t,e,ge,arguments)},findIndex(t,e){return Je(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Je(this,"findLast",t,e,ge,arguments)},findLastIndex(t,e){return Je(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Je(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zr(this,"includes",t)},indexOf(...t){return Zr(this,"indexOf",t)},join(t){return Yt(this).join(t)},lastIndexOf(...t){return Zr(this,"lastIndexOf",t)},map(t,e){return Je(this,"map",t,e,void 0,arguments)},pop(){return _n(this,"pop")},push(...t){return _n(this,"push",t)},reduce(t,...e){return Ri(this,"reduce",t,e)},reduceRight(t,...e){return Ri(this,"reduceRight",t,e)},shift(){return _n(this,"shift")},some(t,e){return Je(this,"some",t,e,void 0,arguments)},splice(...t){return _n(this,"splice",t)},toReversed(){return Yt(this).toReversed()},toSorted(t){return Yt(this).toSorted(t)},toSpliced(...t){return Yt(this).toSpliced(...t)},unshift(...t){return _n(this,"unshift",t)},values(){return Qr(this,"values",ge)}};function Qr(t,e,n){const r=Qs(t),s=r[e]();return r!==t&&!Me(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Al=Array.prototype;function Je(t,e,n,r,s,i){const o=Qs(t),c=o!==t&&!Me(t),a=o[e];if(a!==Al[e]){const h=a.apply(t,i);return c?ge(h):h}let l=n;o!==t&&(c?l=function(h,p){return n.call(this,ge(h),p,t)}:n.length>2&&(l=function(h,p){return n.call(this,h,p,t)}));const f=a.call(o,l,r);return c&&s?s(f):f}function Ri(t,e,n,r){const s=Qs(t);let i=n;return s!==t&&(Me(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,ge(c),a,t)}),s[e](i,...r)}function Zr(t,e,n){const r=z(t);fe(r,"iterate",Nn);const s=r[e](...n);return(s===-1||s===!1)&&ti(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function _n(t,e,n=[]){Tt(),qs();const r=z(t)[e].apply(t,n);return Ys(),Rt(),r}const Pl=Bs("__proto__,__v_isRef,__isVue"),la=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(St));function Ol(t){St(t)||(t=String(t));const e=z(this);return fe(e,"has",t),e.hasOwnProperty(t)}class ua{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?jl:pa:i?ha:da).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!s){let a;if(o&&(a=Cl[n]))return a;if(n==="hasOwnProperty")return Ol}const c=Reflect.get(e,n,he(e)?e:r);return(St(n)?la.has(n):Pl(n))||(s||fe(e,"get",n),i)?c:he(c)?o&&$s(n)?c:c.value:se(c)?s?ma(c):Fr(c):c}}class fa extends ua{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Ft(i);if(!Me(r)&&!Ft(r)&&(i=z(i),r=z(r)),!j(e)&&he(i)&&!he(r))return a?!1:(i.value=r,!0)}const o=j(e)&&$s(n)?Number(n)<e.length:G(e,n),c=Reflect.set(e,n,r,he(e)?e:s);return e===z(s)&&(o?Et(r,i)&&et(e,"set",n,r):et(e,"add",n,r)),c}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&et(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!St(n)||!la.has(n))&&fe(e,"has",n),r}ownKeys(e){return fe(e,"iterate",j(e)?"length":Lt),Reflect.ownKeys(e)}}class kl extends ua{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dl=new fa,xl=new kl,Nl=new fa(!0);const bs=t=>t,er=t=>Reflect.getPrototypeOf(t);function Ml(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=tn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?bs:e?Es:ge;return!e&&fe(i,"iterate",a?ys:Lt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ll(t,e){const n={get(s){const i=this.__v_raw,o=z(i),c=z(s);t||(Et(s,c)&&fe(o,"get",s),fe(o,"get",c));const{has:a}=er(o),l=e?bs:t?Es:ge;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&fe(z(s),"iterate",Lt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=z(i),c=z(s);return t||(Et(s,c)&&fe(o,"has",s),fe(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=z(c),l=e?bs:t?Es:ge;return!t&&fe(a,"iterate",Lt),c.forEach((f,h)=>s.call(i,l(f),l(h),o))}};return ce(n,t?{add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear")}:{add(s){!e&&!Me(s)&&!Ft(s)&&(s=z(s));const i=z(this);return er(i).has.call(i,s)||(i.add(s),et(i,"add",s,s)),this},set(s,i){!e&&!Me(i)&&!Ft(i)&&(i=z(i));const o=z(this),{has:c,get:a}=er(o);let l=c.call(o,s);l||(s=z(s),l=c.call(o,s));const f=a.call(o,s);return o.set(s,i),l?Et(i,f)&&et(o,"set",s,i):et(o,"add",s,i),this},delete(s){const i=z(this),{has:o,get:c}=er(i);let a=o.call(i,s);a||(s=z(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&et(i,"delete",s,void 0),l},clear(){const s=z(this),i=s.size!==0,o=s.clear();return i&&et(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ml(s,t,e)}),n}function Zs(t,e){const n=Ll(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Ul={get:Zs(!1,!1)},Fl={get:Zs(!1,!0)},Hl={get:Zs(!0,!1)};const da=new WeakMap,ha=new WeakMap,pa=new WeakMap,jl=new WeakMap;function Bl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vl(t){return t.__v_skip||!Object.isExtensible(t)?0:Bl(pl(t))}function Fr(t){return Ft(t)?t:ei(t,!1,Dl,Ul,da)}function ga(t){return ei(t,!1,Nl,Fl,ha)}function ma(t){return ei(t,!0,xl,Hl,pa)}function ei(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Vl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Rn(t){return Ft(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ft(t){return!!(t&&t.__v_isReadonly)}function Me(t){return!!(t&&t.__v_isShallow)}function ti(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Wl(t){return!G(t,"__v_skip")&&Object.isExtensible(t)&&Xo(t,"__v_skip",!0),t}const ge=t=>se(t)?Fr(t):t,Es=t=>se(t)?ma(t):t;function he(t){return t?t.__v_isRef===!0:!1}function Ht(t){return _a(t,!1)}function $l(t){return _a(t,!0)}function _a(t,e){return he(t)?t:new Kl(t,e)}class Kl{constructor(e,n){this.dep=new Xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:ge(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Me(e)||Ft(e);e=r?e:z(e),Et(e,n)&&(this._rawValue=e,this._value=r?e:ge(e),this.dep.trigger())}}function Ut(t){return he(t)?t.value:t}const zl={get:(t,e,n)=>e==="__v_raw"?t:Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function va(t){return Rn(t)?t:new Proxy(t,zl)}class Gl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return ra(this,!0),!0}get value(){const e=this.dep.track();return oa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ql(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new Gl(r,s,n)}const nr={},mr=new WeakMap;let Nt;function Yl(t,e=!1,n=Nt){if(n){let r=mr.get(n);r||mr.set(n,r=[]),r.push(t)}}function Jl(t,e,n=Z){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:Me(O)||s===!1||s===0?tt(O,1):tt(O);let f,h,p,g,R=!1,P=!1;if(he(t)?(h=()=>t.value,R=Me(t)):Rn(t)?(h=()=>l(t),R=!0):j(t)?(P=!0,R=t.some(O=>Rn(O)||Me(O)),h=()=>t.map(O=>{if(he(O))return O.value;if(Rn(O))return l(O);if(B(O))return a?a(O,2):O()})):B(t)?e?h=a?()=>a(t,2):t:h=()=>{if(p){Tt();try{p()}finally{Rt()}}const O=Nt;Nt=f;try{return a?a(t,3,[g]):t(g)}finally{Nt=O}}:h=$e,e&&s){const O=h,W=s===!0?1/0:s;h=()=>tt(O(),W)}const H=Sl(),M=()=>{f.stop(),H&&H.active&&Ws(H.effects,f)};if(i&&e){const O=e;e=(...W)=>{O(...W),M()}}let k=P?new Array(t.length).fill(nr):nr;const N=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const W=f.run();if(s||R||(P?W.some((ie,ee)=>Et(ie,k[ee])):Et(W,k))){p&&p();const ie=Nt;Nt=f;try{const ee=[W,k===nr?void 0:P&&k[0]===nr?[]:k,g];a?a(e,3,ee):e(...ee),k=W}finally{Nt=ie}}}else f.run()};return c&&c(N),f=new ta(h),f.scheduler=o?()=>o(N,!1):N,g=O=>Yl(O,!1,f),p=f.onStop=()=>{const O=mr.get(f);if(O){if(a)a(O,4);else for(const W of O)W();mr.delete(f)}},e?r?N(!0):k=f.run():o?o(N.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function tt(t,e=1/0,n){if(e<=0||!se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))tt(t.value,e,n);else if(j(t))for(let r=0;r<t.length;r++)tt(t[r],e,n);else if(Go(t)||tn(t))t.forEach(r=>{tt(r,e,n)});else if(Jo(t)){for(const r in t)tt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&tt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $n(t,e,n,r){try{return r?t(...r):t()}catch(s){Hr(s,e,n)}}function qe(t,e,n,r){if(B(t)){const s=$n(t,e,n,r);return s&&qo(s)&&s.catch(i=>{Hr(i,e,n)}),s}if(j(t)){const s=[];for(let i=0;i<t.length;i++)s.push(qe(t[i],e,n,r));return s}}function Hr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,a,l)===!1)return}c=c.parent}if(i){Tt(),$n(i,null,10,[t,a,l]),Rt();return}}Xl(t,n,s,r,o)}function Xl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const me=[];let Ve=-1;const nn=[];let pt=null,Jt=0;const ya=Promise.resolve();let _r=null;function ba(t){const e=_r||ya;return t?e.then(this?t.bind(this):t):e}function Ql(t){let e=Ve+1,n=me.length;for(;e<n;){const r=e+n>>>1,s=me[r],i=Mn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ni(t){if(!(t.flags&1)){const e=Mn(t),n=me[me.length-1];!n||!(t.flags&2)&&e>=Mn(n)?me.push(t):me.splice(Ql(e),0,t),t.flags|=1,Ea()}}function Ea(){_r||(_r=ya.then(wa))}function Zl(t){j(t)?nn.push(...t):pt&&t.id===-1?pt.splice(Jt+1,0,t):t.flags&1||(nn.push(t),t.flags|=1),Ea()}function Ci(t,e,n=Ve+1){for(;n<me.length;n++){const r=me[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;me.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ia(t){if(nn.length){const e=[...new Set(nn)].sort((n,r)=>Mn(n)-Mn(r));if(nn.length=0,pt){pt.push(...e);return}for(pt=e,Jt=0;Jt<pt.length;Jt++){const n=pt[Jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pt=null,Jt=0}}const Mn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wa(t){try{for(Ve=0;Ve<me.length;Ve++){const e=me[Ve];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$n(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ve<me.length;Ve++){const e=me[Ve];e&&(e.flags&=-2)}Ve=-1,me.length=0,Ia(),_r=null,(me.length||nn.length)&&wa()}}let Se=null,Sa=null;function vr(t){const e=Se;return Se=t,Sa=t&&t.type.__scopeId||null,e}function Is(t,e=Se,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Li(-1);const i=vr(e);let o;try{o=t(...s)}finally{vr(i),r._d&&Li(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yr(t,e){if(Se===null)return t;const n=Wr(Se),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Z]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&tt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Tt(),qe(a,n,8,[t.el,c,t,e]),Rt())}}const eu=Symbol("_vte"),tu=t=>t.__isTeleport;function ri(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ri(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ta(t,e){return B(t)?ce({name:t.name},e,{setup:t}):t}function Ra(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function br(t,e,n,r,s=!1){if(j(t)){t.forEach((R,P)=>br(R,e&&(j(e)?e[P]:e),n,r,s));return}if(Cn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&br(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Z?c.refs={}:c.refs,h=c.setupState,p=z(h),g=h===Z?()=>!1:R=>G(p,R);if(l!=null&&l!==a&&(oe(l)?(f[l]=null,g(l)&&(h[l]=null)):he(l)&&(l.value=null)),B(a))$n(a,c,12,[o,f]);else{const R=oe(a),P=he(a);if(R||P){const H=()=>{if(t.f){const M=R?g(a)?h[a]:f[a]:a.value;s?j(M)&&Ws(M,i):j(M)?M.includes(i)||M.push(i):R?(f[a]=[i],g(a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else R?(f[a]=o,g(a)&&(h[a]=o)):P&&(a.value=o,t.k&&(f[t.k]=o))};o?(H.id=-1,Ie(H,n)):H()}}}Ur().requestIdleCallback;Ur().cancelIdleCallback;const Cn=t=>!!t.type.__asyncLoader,Ca=t=>t.type.__isKeepAlive;function nu(t,e){Aa(t,"a",e)}function ru(t,e){Aa(t,"da",e)}function Aa(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ca(s.parent.vnode)&&su(r,e,n,s),s=s.parent}}function su(t,e,n,r){const s=jr(e,t,r,!0);Oa(()=>{Ws(r[e],s)},n)}function jr(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tt();const c=Kn(n),a=qe(e,n,t,o);return c(),Rt(),a});return r?s.unshift(i):s.push(i),i}}const ct=t=>(e,n=de)=>{(!Un||t==="sp")&&jr(t,(...r)=>e(...r),n)},iu=ct("bm"),Pa=ct("m"),ou=ct("bu"),au=ct("u"),cu=ct("bum"),Oa=ct("um"),lu=ct("sp"),uu=ct("rtg"),fu=ct("rtc");function du(t,e=de){jr("ec",t,e)}const hu="components";function pu(t,e){return mu(hu,t,!0,e)||t}const gu=Symbol.for("v-ndc");function mu(t,e,n=!0,r=!1){const s=Se||de;if(s){const i=s.type;{const c=sf(i,!1);if(c&&(c===e||c===Oe(e)||c===Lr(Oe(e))))return i}const o=Ai(s[t]||i[t],e)||Ai(s.appContext[t],e);return!o&&r?i:o}}function Ai(t,e){return t&&(t[e]||t[Oe(e)]||t[Lr(Oe(e))])}const ws=t=>t?Xa(t)?Wr(t):ws(t.parent):null,An=ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ws(t.parent),$root:t=>ws(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>si(t),$forceUpdate:t=>t.f||(t.f=()=>{ni(t.update)}),$nextTick:t=>t.n||(t.n=ba.bind(t.proxy)),$watch:t=>Uu.bind(t)}),es=(t,e)=>t!==Z&&!t.__isScriptSetup&&G(t,e),_u={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(es(r,e))return o[e]=1,r[e];if(s!==Z&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==Z&&G(n,e))return o[e]=4,n[e];Ss&&(o[e]=0)}}const f=An[e];let h,p;if(f)return e==="$attrs"&&fe(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Z&&G(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return es(s,e)?(s[e]=n,!0):r!==Z&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Z&&G(t,o)||es(e,o)||(c=i[0])&&G(c,o)||G(r,o)||G(An,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pi(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ss=!0;function vu(t){const e=si(t),n=t.proxy,r=t.ctx;Ss=!1,e.beforeCreate&&Oi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:g,updated:R,activated:P,deactivated:H,beforeDestroy:M,beforeUnmount:k,destroyed:N,unmounted:O,render:W,renderTracked:ie,renderTriggered:ee,errorCaptured:Re,serverPrefetch:Ce,expose:Ae,inheritAttrs:ut,components:Ot,directives:Fe,filters:gn}=e;if(l&&yu(l,r,null),o)for(const J in o){const $=o[J];B($)&&(r[J]=$.bind(n))}if(s){const J=s.call(n,n);se(J)&&(t.data=Fr(J))}if(Ss=!0,i)for(const J in i){const $=i[J],Ye=B($)?$.bind(n,n):B($.get)?$.get.bind(n,n):$e,ft=!B($)&&B($.set)?$.set.bind(n):$e,He=De({get:Ye,set:ft});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>He.value,set:ve=>He.value=ve})}if(c)for(const J in c)ka(c[J],r,n,J);if(a){const J=B(a)?a.call(n):a;Reflect.ownKeys(J).forEach($=>{or($,J[$])})}f&&Oi(f,t,"c");function ae(J,$){j($)?$.forEach(Ye=>J(Ye.bind(n))):$&&J($.bind(n))}if(ae(iu,h),ae(Pa,p),ae(ou,g),ae(au,R),ae(nu,P),ae(ru,H),ae(du,Re),ae(fu,ie),ae(uu,ee),ae(cu,k),ae(Oa,O),ae(lu,Ce),j(Ae))if(Ae.length){const J=t.exposed||(t.exposed={});Ae.forEach($=>{Object.defineProperty(J,$,{get:()=>n[$],set:Ye=>n[$]=Ye})})}else t.exposed||(t.exposed={});W&&t.render===$e&&(t.render=W),ut!=null&&(t.inheritAttrs=ut),Ot&&(t.components=Ot),Fe&&(t.directives=Fe),Ce&&Ra(t)}function yu(t,e,n=$e){j(t)&&(t=Ts(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=Ke(s.from||r,s.default,!0):i=Ke(s.from||r):i=Ke(s),he(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Oi(t,e,n){qe(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ka(t,e,n,r){let s=r.includes(".")?Ka(n,r):()=>n[r];if(oe(t)){const i=e[t];B(i)&&ar(s,i)}else if(B(t))ar(s,t.bind(n));else if(se(t))if(j(t))t.forEach(i=>ka(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&ar(s,i,t)}}function si(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Er(a,l,o,!0)),Er(a,e,o)),se(e)&&i.set(e,a),a}function Er(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Er(t,i,n,!0),s&&s.forEach(o=>Er(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=bu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const bu={data:ki,props:Di,emits:Di,methods:bn,computed:bn,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:bn,directives:bn,watch:Iu,provide:ki,inject:Eu};function ki(t,e){return e?t?function(){return ce(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Eu(t,e){return bn(Ts(t),Ts(e))}function Ts(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pe(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?ce(Object.create(null),t,e):e}function Di(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:ce(Object.create(null),Pi(t),Pi(e??{})):e}function Iu(t,e){if(!t)return e;if(!e)return t;const n=ce(Object.create(null),t);for(const r in e)n[r]=pe(t[r],e[r]);return n}function Da(){return{app:null,config:{isNativeTag:dl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wu=0;function Su(t,e){return function(r,s=null){B(r)||(r=ce({},r)),s!=null&&!se(s)&&(s=null);const i=Da(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:wu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...h)):B(f)&&(o.add(f),f(l,...h))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,h){return h?(i.components[f]=h,l):i.components[f]},directive(f,h){return h?(i.directives[f]=h,l):i.directives[f]},mount(f,h,p){if(!a){const g=l._ceVNode||le(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,f):t(g,f,p),a=!0,l._container=f,f.__vue_app__=l,Wr(g.component)}},onUnmount(f){c.push(f)},unmount(){a&&(qe(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,h){return i.provides[f]=h,l},runWithContext(f){const h=rn;rn=l;try{return f()}finally{rn=h}}};return l}}let rn=null;function or(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=de||Se;if(r||rn){const s=rn?rn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const xa={},Na=()=>Object.create(xa),Ma=t=>Object.getPrototypeOf(t)===xa;function Tu(t,e,n,r=!1){const s={},i=Na();t.propsDefaults=Object.create(null),La(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ga(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ru(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Br(t.emitsOptions,p))continue;const g=e[p];if(a)if(G(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const R=Oe(p);s[R]=Rs(a,c,R,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{La(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!G(e,h)&&((f=$t(h))===h||!G(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Rs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&et(t.attrs,"set","")}function La(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(wn(a))continue;const l=e[a];let f;s&&G(s,f=Oe(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Br(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=z(n),l=c||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Rs(s,a,h,l[h],t,!G(l,h))}}return o}function Rs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=G(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Kn(s);r=l[n]=a.call(null,e),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}const Cu=new WeakMap;function Ua(t,e,n=!1){const r=n?Cu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const f=h=>{a=!0;const[p,g]=Ua(h,e,!0);ce(o,p),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return se(t)&&r.set(t,en),en;if(j(i))for(let f=0;f<i.length;f++){const h=Oe(i[f]);xi(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=Oe(f);if(xi(h)){const p=i[f],g=o[h]=j(p)||B(p)?{type:p}:ce({},p),R=g.type;let P=!1,H=!0;if(j(R))for(let M=0;M<R.length;++M){const k=R[M],N=B(k)&&k.name;if(N==="Boolean"){P=!0;break}else N==="String"&&(H=!1)}else P=B(R)&&R.name==="Boolean";g[0]=P,g[1]=H,(P||G(g,"default"))&&c.push(h)}}const l=[o,c];return se(t)&&r.set(t,l),l}function xi(t){return t[0]!=="$"&&!wn(t)}const Fa=t=>t[0]==="_"||t==="$stable",ii=t=>j(t)?t.map(We):[We(t)],Au=(t,e,n)=>{if(e._n)return e;const r=Is((...s)=>ii(e(...s)),n);return r._c=!1,r},Ha=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fa(s))continue;const i=t[s];if(B(i))e[s]=Au(s,i,r);else if(i!=null){const o=ii(i);e[s]=()=>o}}},ja=(t,e)=>{const n=ii(e);t.slots.default=()=>n},Ba=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Pu=(t,e,n)=>{const r=t.slots=Na();if(t.vnode.shapeFlag&32){const s=e._;s?(Ba(r,e,n),n&&Xo(r,"_",s,!0)):Ha(e,r)}else e&&ja(t,e)},Ou=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ba(s,e,n):(i=!e.$stable,Ha(e,s)),o=e}else e&&(ja(t,e),o={default:1});if(i)for(const c in s)!Fa(c)&&o[c]==null&&delete s[c]},Ie=$u;function ku(t){return Du(t)}function Du(t,e){const n=Ur();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:g=$e,insertStaticContent:R}=t,P=(u,d,m,y=null,_=null,b=null,S=void 0,w=null,I=!!d.dynamicChildren)=>{if(u===d)return;u&&!vn(u,d)&&(y=v(u),ve(u,_,b,!0),u=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:E,ref:L,shapeFlag:C}=d;switch(E){case Vr:H(u,d,m,y);break;case jt:M(u,d,m,y);break;case cr:u==null&&k(d,m,y,S);break;case Ze:Ot(u,d,m,y,_,b,S,w,I);break;default:C&1?W(u,d,m,y,_,b,S,w,I):C&6?Fe(u,d,m,y,_,b,S,w,I):(C&64||C&128)&&E.process(u,d,m,y,_,b,S,w,I,D)}L!=null&&_&&br(L,u&&u.ref,b,d||u,!d)},H=(u,d,m,y)=>{if(u==null)r(d.el=c(d.children),m,y);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},M=(u,d,m,y)=>{u==null?r(d.el=a(d.children||""),m,y):d.el=u.el},k=(u,d,m,y)=>{[u.el,u.anchor]=R(u.children,d,m,y,u.el,u.anchor)},N=({el:u,anchor:d},m,y)=>{let _;for(;u&&u!==d;)_=p(u),r(u,m,y),u=_;r(d,m,y)},O=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=p(u),s(u),u=m;s(d)},W=(u,d,m,y,_,b,S,w,I)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),u==null?ie(d,m,y,_,b,S,w,I):Ce(u,d,_,b,S,w,I)},ie=(u,d,m,y,_,b,S,w)=>{let I,E;const{props:L,shapeFlag:C,transition:x,dirs:F}=u;if(I=u.el=o(u.type,b,L&&L.is,L),C&8?f(I,u.children):C&16&&Re(u.children,I,null,y,_,ts(u,b),S,w),F&&kt(u,null,y,"created"),ee(I,u,u.scopeId,S,y),L){for(const te in L)te!=="value"&&!wn(te)&&i(I,te,null,L[te],b,y);"value"in L&&i(I,"value",null,L.value,b),(E=L.onVnodeBeforeMount)&&Be(E,y,u)}F&&kt(u,null,y,"beforeMount");const V=xu(_,x);V&&x.beforeEnter(I),r(I,d,m),((E=L&&L.onVnodeMounted)||V||F)&&Ie(()=>{E&&Be(E,y,u),V&&x.enter(I),F&&kt(u,null,y,"mounted")},_)},ee=(u,d,m,y,_)=>{if(m&&g(u,m),y)for(let b=0;b<y.length;b++)g(u,y[b]);if(_){let b=_.subTree;if(d===b||Ga(b.type)&&(b.ssContent===d||b.ssFallback===d)){const S=_.vnode;ee(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},Re=(u,d,m,y,_,b,S,w,I=0)=>{for(let E=I;E<u.length;E++){const L=u[E]=w?gt(u[E]):We(u[E]);P(null,L,d,m,y,_,b,S,w)}},Ce=(u,d,m,y,_,b,S)=>{const w=d.el=u.el;let{patchFlag:I,dynamicChildren:E,dirs:L}=d;I|=u.patchFlag&16;const C=u.props||Z,x=d.props||Z;let F;if(m&&Dt(m,!1),(F=x.onVnodeBeforeUpdate)&&Be(F,m,d,u),L&&kt(d,u,m,"beforeUpdate"),m&&Dt(m,!0),(C.innerHTML&&x.innerHTML==null||C.textContent&&x.textContent==null)&&f(w,""),E?Ae(u.dynamicChildren,E,w,m,y,ts(d,_),b):S||$(u,d,w,null,m,y,ts(d,_),b,!1),I>0){if(I&16)ut(w,C,x,m,_);else if(I&2&&C.class!==x.class&&i(w,"class",null,x.class,_),I&4&&i(w,"style",C.style,x.style,_),I&8){const V=d.dynamicProps;for(let te=0;te<V.length;te++){const Y=V[te],ye=C[Y],ue=x[Y];(ue!==ye||Y==="value")&&i(w,Y,ye,ue,_,m)}}I&1&&u.children!==d.children&&f(w,d.children)}else!S&&E==null&&ut(w,C,x,m,_);((F=x.onVnodeUpdated)||L)&&Ie(()=>{F&&Be(F,m,d,u),L&&kt(d,u,m,"updated")},y)},Ae=(u,d,m,y,_,b,S)=>{for(let w=0;w<d.length;w++){const I=u[w],E=d[w],L=I.el&&(I.type===Ze||!vn(I,E)||I.shapeFlag&70)?h(I.el):m;P(I,E,L,null,y,_,b,S,!0)}},ut=(u,d,m,y,_)=>{if(d!==m){if(d!==Z)for(const b in d)!wn(b)&&!(b in m)&&i(u,b,d[b],null,_,y);for(const b in m){if(wn(b))continue;const S=m[b],w=d[b];S!==w&&b!=="value"&&i(u,b,w,S,_,y)}"value"in m&&i(u,"value",d.value,m.value,_)}},Ot=(u,d,m,y,_,b,S,w,I)=>{const E=d.el=u?u.el:c(""),L=d.anchor=u?u.anchor:c("");let{patchFlag:C,dynamicChildren:x,slotScopeIds:F}=d;F&&(w=w?w.concat(F):F),u==null?(r(E,m,y),r(L,m,y),Re(d.children||[],m,L,_,b,S,w,I)):C>0&&C&64&&x&&u.dynamicChildren?(Ae(u.dynamicChildren,x,m,_,b,S,w),(d.key!=null||_&&d===_.subTree)&&Va(u,d,!0)):$(u,d,m,L,_,b,S,w,I)},Fe=(u,d,m,y,_,b,S,w,I)=>{d.slotScopeIds=w,u==null?d.shapeFlag&512?_.ctx.activate(d,m,y,S,I):gn(d,m,y,_,b,S,I):zt(u,d,I)},gn=(u,d,m,y,_,b,S)=>{const w=u.component=Zu(u,y,_);if(Ca(u)&&(w.ctx.renderer=D),ef(w,!1,S),w.asyncDep){if(_&&_.registerDep(w,ae,S),!u.el){const I=w.subTree=le(jt);M(null,I,d,m)}}else ae(w,u,d,m,_,b,S)},zt=(u,d,m)=>{const y=d.component=u.component;if(Vu(u,d,m))if(y.asyncDep&&!y.asyncResolved){J(y,d,m);return}else y.next=d,y.update();else d.el=u.el,y.vnode=d},ae=(u,d,m,y,_,b,S)=>{const w=()=>{if(u.isMounted){let{next:C,bu:x,u:F,parent:V,vnode:te}=u;{const be=Wa(u);if(be){C&&(C.el=te.el,J(u,C,S)),be.asyncDep.then(()=>{u.isUnmounted||w()});return}}let Y=C,ye;Dt(u,!1),C?(C.el=te.el,J(u,C,S)):C=te,x&&ir(x),(ye=C.props&&C.props.onVnodeBeforeUpdate)&&Be(ye,V,C,te),Dt(u,!0);const ue=ns(u),ke=u.subTree;u.subTree=ue,P(ke,ue,h(ke.el),v(ke),u,_,b),C.el=ue.el,Y===null&&Wu(u,ue.el),F&&Ie(F,_),(ye=C.props&&C.props.onVnodeUpdated)&&Ie(()=>Be(ye,V,C,te),_)}else{let C;const{el:x,props:F}=d,{bm:V,m:te,parent:Y,root:ye,type:ue}=u,ke=Cn(d);if(Dt(u,!1),V&&ir(V),!ke&&(C=F&&F.onVnodeBeforeMount)&&Be(C,Y,d),Dt(u,!0),x&&re){const be=()=>{u.subTree=ns(u),re(x,u.subTree,u,_,null)};ke&&ue.__asyncHydrate?ue.__asyncHydrate(x,u,be):be()}else{ye.ce&&ye.ce._injectChildStyle(ue);const be=u.subTree=ns(u);P(null,be,m,y,u,_,b),d.el=be.el}if(te&&Ie(te,_),!ke&&(C=F&&F.onVnodeMounted)){const be=d;Ie(()=>Be(C,Y,be),_)}(d.shapeFlag&256||Y&&Cn(Y.vnode)&&Y.vnode.shapeFlag&256)&&u.a&&Ie(u.a,_),u.isMounted=!0,d=m=y=null}};u.scope.on();const I=u.effect=new ta(w);u.scope.off();const E=u.update=I.run.bind(I),L=u.job=I.runIfDirty.bind(I);L.i=u,L.id=u.uid,I.scheduler=()=>ni(L),Dt(u,!0),E()},J=(u,d,m)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,Ru(u,d.props,y,m),Ou(u,d.children,m),Tt(),Ci(u),Rt()},$=(u,d,m,y,_,b,S,w,I=!1)=>{const E=u&&u.children,L=u?u.shapeFlag:0,C=d.children,{patchFlag:x,shapeFlag:F}=d;if(x>0){if(x&128){ft(E,C,m,y,_,b,S,w,I);return}else if(x&256){Ye(E,C,m,y,_,b,S,w,I);return}}F&8?(L&16&&Pe(E,_,b),C!==E&&f(m,C)):L&16?F&16?ft(E,C,m,y,_,b,S,w,I):Pe(E,_,b,!0):(L&8&&f(m,""),F&16&&Re(C,m,y,_,b,S,w,I))},Ye=(u,d,m,y,_,b,S,w,I)=>{u=u||en,d=d||en;const E=u.length,L=d.length,C=Math.min(E,L);let x;for(x=0;x<C;x++){const F=d[x]=I?gt(d[x]):We(d[x]);P(u[x],F,m,null,_,b,S,w,I)}E>L?Pe(u,_,b,!0,!1,C):Re(d,m,y,_,b,S,w,I,C)},ft=(u,d,m,y,_,b,S,w,I)=>{let E=0;const L=d.length;let C=u.length-1,x=L-1;for(;E<=C&&E<=x;){const F=u[E],V=d[E]=I?gt(d[E]):We(d[E]);if(vn(F,V))P(F,V,m,null,_,b,S,w,I);else break;E++}for(;E<=C&&E<=x;){const F=u[C],V=d[x]=I?gt(d[x]):We(d[x]);if(vn(F,V))P(F,V,m,null,_,b,S,w,I);else break;C--,x--}if(E>C){if(E<=x){const F=x+1,V=F<L?d[F].el:y;for(;E<=x;)P(null,d[E]=I?gt(d[E]):We(d[E]),m,V,_,b,S,w,I),E++}}else if(E>x)for(;E<=C;)ve(u[E],_,b,!0),E++;else{const F=E,V=E,te=new Map;for(E=V;E<=x;E++){const Ee=d[E]=I?gt(d[E]):We(d[E]);Ee.key!=null&&te.set(Ee.key,E)}let Y,ye=0;const ue=x-V+1;let ke=!1,be=0;const mn=new Array(ue);for(E=0;E<ue;E++)mn[E]=0;for(E=F;E<=C;E++){const Ee=u[E];if(ye>=ue){ve(Ee,_,b,!0);continue}let je;if(Ee.key!=null)je=te.get(Ee.key);else for(Y=V;Y<=x;Y++)if(mn[Y-V]===0&&vn(Ee,d[Y])){je=Y;break}je===void 0?ve(Ee,_,b,!0):(mn[je-V]=E+1,je>=be?be=je:ke=!0,P(Ee,d[je],m,null,_,b,S,w,I),ye++)}const Ii=ke?Nu(mn):en;for(Y=Ii.length-1,E=ue-1;E>=0;E--){const Ee=V+E,je=d[Ee],wi=Ee+1<L?d[Ee+1].el:y;mn[E]===0?P(null,je,m,wi,_,b,S,w,I):ke&&(Y<0||E!==Ii[Y]?He(je,m,wi,2):Y--)}}},He=(u,d,m,y,_=null)=>{const{el:b,type:S,transition:w,children:I,shapeFlag:E}=u;if(E&6){He(u.component.subTree,d,m,y);return}if(E&128){u.suspense.move(d,m,y);return}if(E&64){S.move(u,d,m,D);return}if(S===Ze){r(b,d,m);for(let C=0;C<I.length;C++)He(I[C],d,m,y);r(u.anchor,d,m);return}if(S===cr){N(u,d,m);return}if(y!==2&&E&1&&w)if(y===0)w.beforeEnter(b),r(b,d,m),Ie(()=>w.enter(b),_);else{const{leave:C,delayLeave:x,afterLeave:F}=w,V=()=>r(b,d,m),te=()=>{C(b,()=>{V(),F&&F()})};x?x(b,V,te):te()}else r(b,d,m)},ve=(u,d,m,y=!1,_=!1)=>{const{type:b,props:S,ref:w,children:I,dynamicChildren:E,shapeFlag:L,patchFlag:C,dirs:x,cacheIndex:F}=u;if(C===-2&&(_=!1),w!=null&&br(w,null,m,u,!0),F!=null&&(d.renderCache[F]=void 0),L&256){d.ctx.deactivate(u);return}const V=L&1&&x,te=!Cn(u);let Y;if(te&&(Y=S&&S.onVnodeBeforeUnmount)&&Be(Y,d,u),L&6)Zn(u.component,m,y);else{if(L&128){u.suspense.unmount(m,y);return}V&&kt(u,null,d,"beforeUnmount"),L&64?u.type.remove(u,d,m,D,y):E&&!E.hasOnce&&(b!==Ze||C>0&&C&64)?Pe(E,d,m,!1,!0):(b===Ze&&C&384||!_&&L&16)&&Pe(I,d,m),y&&Gt(u)}(te&&(Y=S&&S.onVnodeUnmounted)||V)&&Ie(()=>{Y&&Be(Y,d,u),V&&kt(u,null,d,"unmounted")},m)},Gt=u=>{const{type:d,el:m,anchor:y,transition:_}=u;if(d===Ze){qt(m,y);return}if(d===cr){O(u);return}const b=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:w}=_,I=()=>S(m,b);w?w(u.el,b,I):I()}else b()},qt=(u,d)=>{let m;for(;u!==d;)m=p(u),s(u),u=m;s(d)},Zn=(u,d,m)=>{const{bum:y,scope:_,job:b,subTree:S,um:w,m:I,a:E}=u;Ni(I),Ni(E),y&&ir(y),_.stop(),b&&(b.flags|=8,ve(S,u,d,m)),w&&Ie(w,d),Ie(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Pe=(u,d,m,y=!1,_=!1,b=0)=>{for(let S=b;S<u.length;S++)ve(u[S],d,m,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=p(u.anchor||u.el),m=d&&d[eu];return m?p(m):d};let A=!1;const T=(u,d,m)=>{u==null?d._vnode&&ve(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,m),d._vnode=u,A||(A=!0,Ci(),Ia(),A=!1)},D={p:P,um:ve,m:He,r:Gt,mt:gn,mc:Re,pc:$,pbc:Ae,n:v,o:t};let q,re;return{render:T,hydrate:q,createApp:Su(T,q)}}function ts({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Va(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=gt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Va(o,c)),c.type===Vr&&(c.el=o.el)}}function Nu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wa(e)}function Ni(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mu=Symbol.for("v-scx"),Lu=()=>Ke(Mu);function ar(t,e,n){return $a(t,e,n)}function $a(t,e,n=Z){const{immediate:r,deep:s,flush:i,once:o}=n,c=ce({},n),a=e&&r||!e&&i!=="post";let l;if(Un){if(i==="sync"){const g=Lu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=$e,g.resume=$e,g.pause=$e,g}}const f=de;c.call=(g,R,P)=>qe(g,f,R,P);let h=!1;i==="post"?c.scheduler=g=>{Ie(g,f&&f.suspense)}:i!=="sync"&&(h=!0,c.scheduler=(g,R)=>{R?g():ni(g)}),c.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=Jl(t,e,c);return Un&&(l?l.push(p):a&&p()),p}function Uu(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?Ka(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Kn(this),c=$a(s,i.bind(r),n);return o(),c}function Ka(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Fu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Oe(e)}Modifiers`]||t[`${$t(e)}Modifiers`];function Hu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&Fu(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>oe(f)?f.trim():f)),o.number&&(s=n.map(ms)));let c,a=r[c=Yr(e)]||r[c=Yr(Oe(e))];!a&&i&&(a=r[c=Yr($t(e))]),a&&qe(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,qe(l,t,6,s)}}function za(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const f=za(l,e,!0);f&&(c=!0,ce(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(se(t)&&r.set(t,null),null):(j(i)?i.forEach(a=>o[a]=null):ce(o,i),se(t)&&r.set(t,o),o)}function Br(t,e){return!t||!xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,$t(e))||G(t,e))}function ns(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:h,data:p,setupState:g,ctx:R,inheritAttrs:P}=t,H=vr(t);let M,k;try{if(n.shapeFlag&4){const O=s||r,W=O;M=We(l.call(W,O,f,h,g,p,R)),k=c}else{const O=e;M=We(O.length>1?O(h,{attrs:c,slots:o,emit:a}):O(h,null)),k=e.props?c:ju(c)}}catch(O){Pn.length=0,Hr(O,t,1),M=le(jt)}let N=M;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:W}=N;O.length&&W&7&&(i&&O.some(Vs)&&(k=Bu(k,i)),N=un(N,k,!1,!0))}return n.dirs&&(N=un(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&ri(N,n.transition),M=N,vr(H),M}const ju=t=>{let e;for(const n in t)(n==="class"||n==="style"||xr(n))&&((e||(e={}))[n]=t[n]);return e},Bu=(t,e)=>{const n={};for(const r in t)(!Vs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Vu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Mi(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Br(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Mi(r,o,l):!0:!!o;return!1}function Mi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Br(n,i))return!0}return!1}function Wu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ga=t=>t.__isSuspense;function $u(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Zl(t)}const Ze=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),cr=Symbol.for("v-stc"),Pn=[];let Te=null;function Bt(t=!1){Pn.push(Te=t?null:[])}function Ku(){Pn.pop(),Te=Pn[Pn.length-1]||null}let Ln=1;function Li(t,e=!1){Ln+=t,t<0&&Te&&e&&(Te.hasOnce=!0)}function qa(t){return t.dynamicChildren=Ln>0?Te||en:null,Ku(),Ln>0&&Te&&Te.push(t),t}function ln(t,e,n,r,s,i){return qa(Q(t,e,n,r,s,i,!0))}function zu(t,e,n,r,s){return qa(le(t,e,n,r,s,!0))}function Ir(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const Ya=({key:t})=>t??null,lr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||he(t)||B(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ya(e),ref:e&&lr(e),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return c?(oi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),Ln>0&&!o&&Te&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Te.push(a),a}const le=Gu;function Gu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===gu)&&(t=jt),Ir(t)){const c=un(t,e,!0);return n&&oi(c,n),Ln>0&&!i&&Te&&(c.shapeFlag&6?Te[Te.indexOf(t)]=c:Te.push(c)),c.patchFlag=-2,c}if(of(t)&&(t=t.__vccOpts),e){e=qu(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=zs(c)),se(a)&&(ti(a)&&!j(a)&&(a=ce({},a)),e.style=Ks(a))}const o=oe(t)?1:Ga(t)?128:tu(t)?64:se(t)?4:B(t)?2:0;return Q(t,e,n,r,s,o,i,!0)}function qu(t){return t?ti(t)||Ma(t)?ce({},t):t:null}function un(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?Ju(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ya(l),ref:e&&e.ref?n&&i?j(i)?i.concat(lr(e)):[i,lr(e)]:lr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&ri(f,a.clone(f)),f}function wr(t=" ",e=0){return le(Vr,null,t,e)}function Yu(t,e){const n=le(cr,null,t);return n.staticCount=e,n}function Ja(t="",e=!1){return e?(Bt(),zu(jt,null,t)):le(jt,null,t)}function We(t){return t==null||typeof t=="boolean"?le(jt):j(t)?le(Ze,null,t.slice()):Ir(t)?gt(t):le(Vr,null,String(t))}function gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function oi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),oi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ma(e)?e._ctx=Se:s===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[wr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ju(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=zs([e.class,r.class]));else if(s==="style")e.style=Ks([e.style,r.style]);else if(xr(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Be(t,e,n,r=null){qe(t,e,7,[n,r])}const Xu=Da();let Qu=0;function Zu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Xu,i={uid:Qu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ua(r,s),emitsOptions:za(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hu.bind(null,i),t.ce&&t.ce(i),i}let de=null,Sr,Cs;{const t=Ur(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Sr=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Cs=e("__VUE_SSR_SETTERS__",n=>Un=n)}const Kn=t=>{const e=de;return Sr(t),t.scope.on(),()=>{t.scope.off(),Sr(e)}},Ui=()=>{de&&de.scope.off(),Sr(null)};function Xa(t){return t.vnode.shapeFlag&4}let Un=!1;function ef(t,e=!1,n=!1){e&&Cs(e);const{props:r,children:s}=t.vnode,i=Xa(t);Tu(t,r,i,e),Pu(t,s,n);const o=i?tf(t,e):void 0;return e&&Cs(!1),o}function tf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_u);const{setup:r}=n;if(r){Tt();const s=t.setupContext=r.length>1?rf(t):null,i=Kn(t),o=$n(r,t,0,[t.props,s]),c=qo(o);if(Rt(),i(),(c||t.sp)&&!Cn(t)&&Ra(t),c){if(o.then(Ui,Ui),e)return o.then(a=>{Fi(t,a,e)}).catch(a=>{Hr(a,t,0)});t.asyncDep=o}else Fi(t,o,e)}else Qa(t,e)}function Fi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=va(e)),Qa(t,n)}let Hi;function Qa(t,e,n){const r=t.type;if(!t.render){if(!e&&Hi&&!r.render){const s=r.template||si(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ce(ce({isCustomElement:i,delimiters:c},o),a);r.render=Hi(s,l)}}t.render=r.render||$e}{const s=Kn(t);Tt();try{vu(t)}finally{Rt(),s()}}}const nf={get(t,e){return fe(t,"get",""),t[e]}};function rf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nf),slots:t.slots,emit:t.emit,expose:e}}function Wr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(va(Wl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in An)return An[n](t)},has(e,n){return n in e||n in An}})):t.proxy}function sf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function of(t){return B(t)&&"__vccOpts"in t}const De=(t,e)=>ql(t,e,Un);function Za(t,e,n){const r=arguments.length;return r===2?se(e)&&!j(e)?Ir(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),le(t,e,n))}const af="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let As;const ji=typeof window<"u"&&window.trustedTypes;if(ji)try{As=ji.createPolicy("vue",{createHTML:t=>t})}catch{}const ec=As?t=>As.createHTML(t):t=>t,cf="http://www.w3.org/2000/svg",lf="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,Bi=Qe&&Qe.createElement("template"),uf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Qe.createElementNS(cf,t):e==="mathml"?Qe.createElementNS(lf,t):n?Qe.createElement(t,{is:n}):Qe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qe.createTextNode(t),createComment:t=>Qe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bi.innerHTML=ec(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Bi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ff=Symbol("_vtc");function df(t,e,n){const r=t[ff];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vi=Symbol("_vod"),hf=Symbol("_vsh"),pf=Symbol(""),gf=/(^|;)\s*display\s*:/;function mf(t,e,n){const r=t.style,s=oe(n);let i=!1;if(n&&!s){if(e)if(oe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ur(r,c,"")}else for(const o in e)n[o]==null&&ur(r,o,"");for(const o in n)o==="display"&&(i=!0),ur(r,o,n[o])}else if(s){if(e!==n){const o=r[pf];o&&(n+=";"+o),r.cssText=n,i=gf.test(n)}}else e&&t.removeAttribute("style");Vi in t&&(t[Vi]=i?r.display:"",t[hf]&&(r.display="none"))}const Wi=/\s*!important$/;function ur(t,e,n){if(j(n))n.forEach(r=>ur(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_f(t,e);Wi.test(n)?t.setProperty($t(r),n.replace(Wi,""),"important"):t[r]=n}}const $i=["Webkit","Moz","ms"],rs={};function _f(t,e){const n=rs[e];if(n)return n;let r=Oe(e);if(r!=="filter"&&r in t)return rs[e]=r;r=Lr(r);for(let s=0;s<$i.length;s++){const i=$i[s]+r;if(i in t)return rs[e]=i}return e}const Ki="http://www.w3.org/1999/xlink";function zi(t,e,n,r,s,i=Il(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ki,e.slice(6,e.length)):t.setAttributeNS(Ki,e,n):n==null||i&&!Qo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":St(n)?String(n):n)}function Gi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ec(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Qo(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xt(t,e,n,r){t.addEventListener(e,n,r)}function vf(t,e,n,r){t.removeEventListener(e,n,r)}const qi=Symbol("_vei");function yf(t,e,n,r,s=null){const i=t[qi]||(t[qi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=bf(e);if(r){const l=i[e]=wf(r,s);Xt(t,c,l,a)}else o&&(vf(t,c,o,a),i[e]=void 0)}}const Yi=/(?:Once|Passive|Capture)$/;function bf(t){let e;if(Yi.test(t)){e={};let r;for(;r=t.match(Yi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$t(t.slice(2)),e]}let ss=0;const Ef=Promise.resolve(),If=()=>ss||(Ef.then(()=>ss=0),ss=Date.now());function wf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(Sf(r,n.value),e,5,[r])};return n.value=t,n.attached=If(),n}function Sf(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ji=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?df(t,r,o):e==="style"?mf(t,n,r):xr(e)?Vs(e)||yf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rf(t,e,r,o))?(Gi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zi(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!oe(r))?Gi(t,Oe(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zi(t,e,r,o))};function Rf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ji(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ji(e)&&oe(n)?!1:e in t}const Xi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>ir(e,n):e};function Cf(t){t.target.composing=!0}function Qi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const is=Symbol("_assign"),Tr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[is]=Xi(s);const i=r||s.props&&s.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ms(c)),t[is](c)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",Cf),Xt(t,"compositionend",Qi),Xt(t,"change",Qi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[is]=Xi(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ms(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Af=["ctrl","shift","alt","meta"],Pf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Af.some(n=>t[`${n}Key`]&&!e.includes(n))},tc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Pf[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Of=ce({patchProp:Tf},uf);let Zi;function kf(){return Zi||(Zi=ku(Of))}const Df=(...t)=>{const e=kf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Nf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Nf(t){return oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof document<"u";function nc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&nc(t.default)}const K=Object.assign;function os(t,e){const n={};for(const r in e){const s=e[r];n[r]=Le(s)?s.map(t):t(s)}return n}const On=()=>{},Le=Array.isArray,rc=/#/g,Lf=/&/g,Uf=/\//g,Ff=/=/g,Hf=/\?/g,sc=/\+/g,jf=/%5B/g,Bf=/%5D/g,ic=/%5E/g,Vf=/%60/g,oc=/%7B/g,Wf=/%7C/g,ac=/%7D/g,$f=/%20/g;function ai(t){return encodeURI(""+t).replace(Wf,"|").replace(jf,"[").replace(Bf,"]")}function Kf(t){return ai(t).replace(oc,"{").replace(ac,"}").replace(ic,"^")}function Ps(t){return ai(t).replace(sc,"%2B").replace($f,"+").replace(rc,"%23").replace(Lf,"%26").replace(Vf,"`").replace(oc,"{").replace(ac,"}").replace(ic,"^")}function zf(t){return Ps(t).replace(Ff,"%3D")}function Gf(t){return ai(t).replace(rc,"%23").replace(Hf,"%3F")}function qf(t){return t==null?"":Gf(t).replace(Uf,"%2F")}function Fn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Yf=/\/$/,Jf=t=>t.replace(Yf,"");function as(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ed(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fn(o)}}function Xf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function eo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fn(e.matched[r],n.matched[s])&&cc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zf(t[n],e[n]))return!1;return!0}function Zf(t,e){return Le(t)?to(t,e):Le(e)?to(e,t):t===e}function to(t,e){return Le(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ed(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Hn;(function(t){t.pop="pop",t.push="push"})(Hn||(Hn={}));var kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kn||(kn={}));function td(t){if(!t)if(Qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jf(t)}const nd=/^[^#]+#/;function rd(t,e){return t.replace(nd,"#")+e}function sd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $r=()=>({left:window.scrollX,top:window.scrollY});function id(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function no(t,e){return(history.state?history.state.position-e:-1)+t}const Os=new Map;function od(t,e){Os.set(t,e)}function ad(t){const e=Os.get(t);return Os.delete(t),e}let cd=()=>location.protocol+"//"+location.host;function lc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),eo(a,"")}return eo(n,t)+r+s}function ld(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const g=lc(t,location),R=n.value,P=e.value;let H=0;if(p){if(n.value=g,e.value=p,o&&o===R){o=null;return}H=P?p.position-P.position:0}else r(g);s.forEach(M=>{M(n.value,R,{delta:H,type:Hn.pop,direction:H?H>0?kn.forward:kn.back:kn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const g=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(K({},p.state,{scroll:$r()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function ro(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$r():null}}function ud(t){const{history:e,location:n}=window,r={value:lc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:cd()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(a,l){const f=K({},e.state,ro(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=K({},s.value,e.state,{forward:a,scroll:$r()});i(f.current,f,!0);const h=K({},ro(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function fd(t){t=td(t);const e=ud(t),n=ld(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=K({location:"",base:t,go:r,createHref:rd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function dd(t){return typeof t=="string"||t&&typeof t=="object"}function uc(t){return typeof t=="string"||typeof t=="symbol"}const fc=Symbol("");var so;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(so||(so={}));function dn(t,e){return K(new Error,{type:t,[fc]:!0},e)}function Xe(t,e){return t instanceof Error&&fc in t&&(e==null||!!(t.type&e))}const io="[^/]+?",hd={sensitive:!1,strict:!1,start:!0,end:!0},pd=/[.+*?^${}()[\]/\\]/g;function gd(t,e){const n=K({},hd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(pd,"\\$&"),g+=40;else if(p.type===1){const{value:R,repeatable:P,optional:H,regexp:M}=p;i.push({name:R,repeatable:P,optional:H});const k=M||io;if(k!==io){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+O.message)}}let N=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=H&&l.length<2?`(?:/${N})`:"/"+N),H&&(N+="?"),s+=N,g+=20,H&&(g+=-8),P&&(g+=-20),k===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",R=i[p-1];h[R.name]=g&&R.repeatable?g.split("/"):g}return h}function a(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:R,repeatable:P,optional:H}=g,M=R in l?l[R]:"";if(Le(M)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=Le(M)?M.join("/"):M;if(!k)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function md(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=md(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(oo(r))return 1;if(oo(s))return-1}return s.length-r.length}function oo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _d={type:0,value:""},vd=/[a-zA-Z0-9_]/;function yd(t){if(!t)return[[]];if(t==="/")return[[_d]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:vd.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function bd(t,e,n){const r=gd(yd(t.path),n),s=K(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ed(t,e){const n=[],r=new Map;e=uo({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,g){const R=!g,P=co(h);P.aliasOf=g&&g.record;const H=uo(e,h),M=[P];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const W of O)M.push(co(K({},P,{components:g?g.record.components:P.components,path:W,aliasOf:g?g.record:P})))}let k,N;for(const O of M){const{path:W}=O;if(p&&W[0]!=="/"){const ie=p.record.path,ee=ie[ie.length-1]==="/"?"":"/";O.path=p.record.path+(W&&ee+W)}if(k=bd(O,p,H),g?g.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),R&&h.name&&!lo(k)&&o(h.name)),hc(k)&&a(k),P.children){const ie=P.children;for(let ee=0;ee<ie.length;ee++)i(ie[ee],k,g&&g.children[ee])}g=g||k}return N?()=>{o(N)}:On}function o(h){if(uc(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=Sd(h,n);n.splice(p,0,h),h.record.name&&!lo(h)&&r.set(h.record.name,h)}function l(h,p){let g,R={},P,H;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw dn(1,{location:h});H=g.record.name,R=K(ao(p.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),h.params&&ao(h.params,g.keys.map(N=>N.name))),P=g.stringify(R)}else if(h.path!=null)P=h.path,g=n.find(N=>N.re.test(P)),g&&(R=g.parse(P),H=g.record.name);else{if(g=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!g)throw dn(1,{location:h,currentLocation:p});H=g.record.name,R=K({},p.params,h.params),P=g.stringify(R)}const M=[];let k=g;for(;k;)M.unshift(k.record),k=k.parent;return{name:H,path:P,params:R,matched:M,meta:wd(M)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function ao(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function co(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Id(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Id(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function lo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wd(t){return t.reduce((e,n)=>K(e,n.meta),{})}function uo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sd(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;dc(t,e[i])<0?r=i:n=i+1}const s=Td(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Td(t){let e=t;for(;e=e.parent;)if(hc(e)&&dc(t,e)===0)return e}function hc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Rd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(sc," "),o=i.indexOf("="),c=Fn(o<0?i:i.slice(0,o)),a=o<0?null:Fn(i.slice(o+1));if(c in e){let l=e[c];Le(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function fo(t){let e="";for(let n in t){const r=t[n];if(n=zf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Le(r)?r.map(i=>i&&Ps(i)):[r&&Ps(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Cd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Le(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ad=Symbol(""),ho=Symbol(""),Kr=Symbol(""),pc=Symbol(""),ks=Symbol("");function yn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(dn(4,{from:n,to:e})):p instanceof Error?a(p):dd(p)?a(dn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(f);t.length<3&&(h=h.then(l)),h.catch(p=>a(p))})}function cs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(nc(a)){const f=(a.__vccOpts||a)[e];f&&i.push(mt(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const h=Mf(f)?f.default:f;o.mods[c]=f,o.components[c]=h;const g=(h.__vccOpts||h)[e];return g&&mt(g,n,r,o,c,s)()}))}}return i}function po(t){const e=Ke(Kr),n=Ke(pc),r=De(()=>{const a=Ut(t.to);return e.resolve(a)}),s=De(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(fn.bind(null,f));if(p>-1)return p;const g=go(a[l-2]);return l>1&&go(f)===g&&h[h.length-1].path!==g?h.findIndex(fn.bind(null,a[l-2])):p}),i=De(()=>s.value>-1&&xd(n.params,r.value.params)),o=De(()=>s.value>-1&&s.value===n.matched.length-1&&cc(n.params,r.value.params));function c(a={}){if(Dd(a)){const l=e[Ut(t.replace)?"replace":"push"](Ut(t.to)).catch(On);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Pd(t){return t.length===1?t[0]:t}const Od=Ta({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:po,setup(t,{slots:e}){const n=Fr(po(t)),{options:r}=Ke(Kr),s=De(()=>({[mo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Pd(e.default(n));return t.custom?i:Za("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kd=Od;function Dd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Le(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function go(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mo=(t,e,n)=>t??e??n,Nd=Ta({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(ks),s=De(()=>t.route||r.value),i=Ke(ho,0),o=De(()=>{let l=Ut(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=De(()=>s.value.matched[o.value]);or(ho,De(()=>o.value+1)),or(Ad,c),or(ks,s);const a=Ht();return ar(()=>[a.value,c.value,t.name],([l,f,h],[p,g,R])=>{f&&(f.instances[h]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!fn(f,g)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,p=h&&h.components[f];if(!p)return _o(n.default,{Component:p,route:l});const g=h.props[f],R=g?g===!0?l.params:typeof g=="function"?g(l):g:null,H=Za(p,K({},R,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return _o(n.default,{Component:H,route:l})||H}}});function _o(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gc=Nd;function Md(t){const e=Ed(t.routes,t),n=t.parseQuery||Rd,r=t.stringifyQuery||fo,s=t.history,i=yn(),o=yn(),c=yn(),a=$l(dt);let l=dt;Qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=os.bind(null,v=>""+v),h=os.bind(null,qf),p=os.bind(null,Fn);function g(v,A){let T,D;return uc(v)?(T=e.getRecordMatcher(v),D=A):D=v,e.addRoute(D,T)}function R(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function H(v){return!!e.getRecordMatcher(v)}function M(v,A){if(A=K({},A||a.value),typeof v=="string"){const d=as(n,v,A.path),m=e.resolve({path:d.path},A),y=s.createHref(d.fullPath);return K(d,m,{params:p(m.params),hash:Fn(d.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=K({},v,{path:as(n,v.path,A.path).path});else{const d=K({},v.params);for(const m in d)d[m]==null&&delete d[m];T=K({},v,{params:h(d)}),A.params=h(A.params)}const D=e.resolve(T,A),q=v.hash||"";D.params=f(p(D.params));const re=Xf(r,K({},v,{hash:Kf(q),path:D.path})),u=s.createHref(re);return K({fullPath:re,hash:q,query:r===fo?Cd(v.query):v.query||{}},D,{redirectedFrom:void 0,href:u})}function k(v){return typeof v=="string"?as(n,v,a.value.path):K({},v)}function N(v,A){if(l!==v)return dn(8,{from:A,to:v})}function O(v){return ee(v)}function W(v){return O(K(k(v),{replace:!0}))}function ie(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let D=typeof T=="function"?T(v):T;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),K({query:v.query,hash:v.hash,params:D.path!=null?{}:v.params},D)}}function ee(v,A){const T=l=M(v),D=a.value,q=v.state,re=v.force,u=v.replace===!0,d=ie(T);if(d)return ee(K(k(d),{state:typeof d=="object"?K({},q,d.state):q,force:re,replace:u}),A||T);const m=T;m.redirectedFrom=A;let y;return!re&&Qf(r,D,T)&&(y=dn(16,{to:m,from:D}),He(D,D,!0,!1)),(y?Promise.resolve(y):Ae(m,D)).catch(_=>Xe(_)?Xe(_,2)?_:ft(_):$(_,m,D)).then(_=>{if(_){if(Xe(_,2))return ee(K({replace:u},k(_.to),{state:typeof _.to=="object"?K({},q,_.to.state):q,force:re}),A||m)}else _=Ot(m,D,!0,u,q);return ut(m,D,_),_})}function Re(v,A){const T=N(v,A);return T?Promise.reject(T):Promise.resolve()}function Ce(v){const A=qt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Ae(v,A){let T;const[D,q,re]=Ld(v,A);T=cs(D.reverse(),"beforeRouteLeave",v,A);for(const d of D)d.leaveGuards.forEach(m=>{T.push(mt(m,v,A))});const u=Re.bind(null,v,A);return T.push(u),Pe(T).then(()=>{T=[];for(const d of i.list())T.push(mt(d,v,A));return T.push(u),Pe(T)}).then(()=>{T=cs(q,"beforeRouteUpdate",v,A);for(const d of q)d.updateGuards.forEach(m=>{T.push(mt(m,v,A))});return T.push(u),Pe(T)}).then(()=>{T=[];for(const d of re)if(d.beforeEnter)if(Le(d.beforeEnter))for(const m of d.beforeEnter)T.push(mt(m,v,A));else T.push(mt(d.beforeEnter,v,A));return T.push(u),Pe(T)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),T=cs(re,"beforeRouteEnter",v,A,Ce),T.push(u),Pe(T))).then(()=>{T=[];for(const d of o.list())T.push(mt(d,v,A));return T.push(u),Pe(T)}).catch(d=>Xe(d,8)?d:Promise.reject(d))}function ut(v,A,T){c.list().forEach(D=>Ce(()=>D(v,A,T)))}function Ot(v,A,T,D,q){const re=N(v,A);if(re)return re;const u=A===dt,d=Qt?history.state:{};T&&(D||u?s.replace(v.fullPath,K({scroll:u&&d&&d.scroll},q)):s.push(v.fullPath,q)),a.value=v,He(v,A,T,u),ft()}let Fe;function gn(){Fe||(Fe=s.listen((v,A,T)=>{if(!Zn.listening)return;const D=M(v),q=ie(D);if(q){ee(K(q,{replace:!0,force:!0}),D).catch(On);return}l=D;const re=a.value;Qt&&od(no(re.fullPath,T.delta),$r()),Ae(D,re).catch(u=>Xe(u,12)?u:Xe(u,2)?(ee(K(k(u.to),{force:!0}),D).then(d=>{Xe(d,20)&&!T.delta&&T.type===Hn.pop&&s.go(-1,!1)}).catch(On),Promise.reject()):(T.delta&&s.go(-T.delta,!1),$(u,D,re))).then(u=>{u=u||Ot(D,re,!1),u&&(T.delta&&!Xe(u,8)?s.go(-T.delta,!1):T.type===Hn.pop&&Xe(u,20)&&s.go(-1,!1)),ut(D,re,u)}).catch(On)}))}let zt=yn(),ae=yn(),J;function $(v,A,T){ft(v);const D=ae.list();return D.length?D.forEach(q=>q(v,A,T)):console.error(v),Promise.reject(v)}function Ye(){return J&&a.value!==dt?Promise.resolve():new Promise((v,A)=>{zt.add([v,A])})}function ft(v){return J||(J=!v,gn(),zt.list().forEach(([A,T])=>v?T(v):A()),zt.reset()),v}function He(v,A,T,D){const{scrollBehavior:q}=t;if(!Qt||!q)return Promise.resolve();const re=!T&&ad(no(v.fullPath,0))||(D||!T)&&history.state&&history.state.scroll||null;return ba().then(()=>q(v,A,re)).then(u=>u&&id(u)).catch(u=>$(u,v,A))}const ve=v=>s.go(v);let Gt;const qt=new Set,Zn={currentRoute:a,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:P,resolve:M,options:t,push:O,replace:W,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ae.add,isReady:Ye,install(v){const A=this;v.component("RouterLink",kd),v.component("RouterView",gc),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(a)}),Qt&&!Gt&&a.value===dt&&(Gt=!0,O(s.location).catch(q=>{}));const T={};for(const q in dt)Object.defineProperty(T,q,{get:()=>a.value[q],enumerable:!0});v.provide(Kr,A),v.provide(pc,ga(T)),v.provide(ks,a);const D=v.unmount;qt.add(v),v.unmount=function(){qt.delete(v),qt.size<1&&(l=dt,Fe&&Fe(),Fe=null,a.value=dt,Gt=!1,J=!1),D()}}};function Pe(v){return v.reduce((A,T)=>A.then(()=>Ce(T)),Promise.resolve())}return Zn}function Ld(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>fn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>fn(l,a))||s.push(a))}return[n,r,s]}function ci(){return Ke(Kr)}const Ud={class:"marvel-container"},Fd={class:"marvel-nav"},Hd={__name:"App",setup(t){return(e,n)=>{const r=pu("router-link");return Bt(),ln("div",Ud,[Q("nav",Fd,[n[2]||(n[2]=Q("div",{class:"logo"},"MARVEL AUTH",-1)),le(r,{to:"/login"},{default:Is(()=>n[0]||(n[0]=[wr("Login")])),_:1}),le(r,{to:"/signup"},{default:Is(()=>n[1]||(n[1]=[wr("Sign Up")])),_:1})]),le(Ut(gc))])}}};var vo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(p=64)),r.push(n[f],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Bd;const p=i<<2|c>>4;if(r.push(p),l!==64){const g=c<<4&240|l>>2;if(r.push(g),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vd=function(t){const e=mc(t);return _c.encodeByteArray(e,!0)},vc=function(t){return Vd(t).replace(/\./g,"")},yc=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=()=>Wd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof vo>"u")return;const t=vo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yc(t[1]);return e&&JSON.parse(e)},li=()=>{try{return $d()||Kd()||zd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gd=t=>{var e,n;return(n=(e=li())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bc=()=>{var t;return(t=li())===null||t===void 0?void 0:t.config},Ec=t=>{var e;return(e=li())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Jd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zd(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eh(){try{return typeof indexedDB=="object"}catch{return!1}}function th(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nh,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rh(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,c,r)}}function rh(t,e){return t.replace(sh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sh=/\{\$([^}]+)}/g;function ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yo(i)&&yo(o)){if(!Rr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function In(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oh(t,e){const n=new ah(t,e);return n.subscribe.bind(n)}class ah{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ch(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ls),s.error===void 0&&(s.error=ls),s.complete===void 0&&(s.complete=ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ch(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fh(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uh(t){return t===Mt?void 0:t}function fh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const hh={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ph=X.INFO,gh={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},mh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=ph,this._logHandler=mh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const _h=(t,e)=>e.some(n=>t instanceof n);let bo,Eo;function vh(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yh(){return Eo||(Eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wc=new WeakMap,Ds=new WeakMap,Sc=new WeakMap,us=new WeakMap,ui=new WeakMap;function bh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wc.set(n,t)}).catch(()=>{}),ui.set(e,t),e}function Eh(t){if(Ds.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ds.set(t,e)}let xs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ih(t){xs=t(xs)}function wh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fs(this),e,...n);return Sc.set(r,e.sort?e.sort():[e]),It(r)}:yh().includes(t)?function(...e){return t.apply(fs(this),e),It(wc.get(this))}:function(...e){return It(t.apply(fs(this),e))}}function Sh(t){return typeof t=="function"?wh(t):(t instanceof IDBTransaction&&Eh(t),_h(t,vh())?new Proxy(t,xs):t)}function It(t){if(t instanceof IDBRequest)return bh(t);if(us.has(t))return us.get(t);const e=Sh(t);return e!==t&&(us.set(t,e),ui.set(e,t)),e}const fs=t=>ui.get(t);function Th(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=It(o);return r&&o.addEventListener("upgradeneeded",a=>{r(It(o.result),a.oldVersion,a.newVersion,It(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Rh=["get","getKey","getAll","getAllKeys","count"],Ch=["put","add","delete","clear"],ds=new Map;function Io(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ch.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Rh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return ds.set(e,i),i}Ih(t=>({...t,get:(e,n,r)=>Io(e,n)||t.get(e,n,r),has:(e,n)=>!!Io(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ph(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ph(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ns="@firebase/app",wo="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Ic("@firebase/app"),Oh="@firebase/app-compat",kh="@firebase/analytics-compat",Dh="@firebase/analytics",xh="@firebase/app-check-compat",Nh="@firebase/app-check",Mh="@firebase/auth",Lh="@firebase/auth-compat",Uh="@firebase/database",Fh="@firebase/data-connect",Hh="@firebase/database-compat",jh="@firebase/functions",Bh="@firebase/functions-compat",Vh="@firebase/installations",Wh="@firebase/installations-compat",$h="@firebase/messaging",Kh="@firebase/messaging-compat",zh="@firebase/performance",Gh="@firebase/performance-compat",qh="@firebase/remote-config",Yh="@firebase/remote-config-compat",Jh="@firebase/storage",Xh="@firebase/storage-compat",Qh="@firebase/firestore",Zh="@firebase/vertexai",ep="@firebase/firestore-compat",tp="firebase",np="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="[DEFAULT]",rp={[Ns]:"fire-core",[Oh]:"fire-core-compat",[Dh]:"fire-analytics",[kh]:"fire-analytics-compat",[Nh]:"fire-app-check",[xh]:"fire-app-check-compat",[Mh]:"fire-auth",[Lh]:"fire-auth-compat",[Uh]:"fire-rtdb",[Fh]:"fire-data-connect",[Hh]:"fire-rtdb-compat",[jh]:"fire-fn",[Bh]:"fire-fn-compat",[Vh]:"fire-iid",[Wh]:"fire-iid-compat",[$h]:"fire-fcm",[Kh]:"fire-fcm-compat",[zh]:"fire-perf",[Gh]:"fire-perf-compat",[qh]:"fire-rc",[Yh]:"fire-rc-compat",[Jh]:"fire-gcs",[Xh]:"fire-gcs-compat",[Qh]:"fire-fst",[ep]:"fire-fst-compat",[Zh]:"fire-vertex","fire-js":"fire-js",[tp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map,sp=new Map,Ls=new Map;function So(t,e){try{t.container.addComponent(e)}catch(n){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(Ls.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;Ls.set(e,t);for(const n of Cr.values())So(n,t);for(const n of sp.values())So(n,t);return!0}function Tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new zn("app","Firebase",ip);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=np;function Rc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ms,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=bc()),!n)throw wt.create("no-options");const i=Cr.get(s);if(i){if(Rr(n,i.options)&&Rr(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new dh(s);for(const a of Ls.values())o.addComponent(a);const c=new op(n,r,o);return Cr.set(s,c),c}function ap(t=Ms){const e=Cr.get(t);if(!e&&t===Ms&&bc())return Rc();if(!e)throw wt.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=rp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(c.join(" "));return}jn(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="firebase-heartbeat-database",lp=1,Bn="firebase-heartbeat-store";let hs=null;function Cc(){return hs||(hs=Th(cp,lp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bn)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),hs}async function up(t){try{const n=(await Cc()).transaction(Bn),r=await n.objectStore(Bn).get(Ac(t));return await n.done,r}catch(e){if(e instanceof Ct)ot.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(n.message)}}}async function To(t,e){try{const r=(await Cc()).transaction(Bn,"readwrite");await r.objectStore(Bn).put(e,Ac(t)),await r.done}catch(n){if(n instanceof Ct)ot.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ot.warn(r.message)}}}function Ac(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=1024,dp=30;class hp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ro();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>dp){const o=mp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ot.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ro(),{heartbeatsToSend:r,unsentEntries:s}=pp(this._heartbeatsCache.heartbeats),i=vc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ot.warn(n),""}}}function Ro(){return new Date().toISOString().substring(0,10)}function pp(t,e=fp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Co(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Co(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eh()?th().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await up(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return To(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return To(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Co(t){return vc(JSON.stringify({version:2,heartbeats:t})).length}function mp(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){jn(new hn("platform-logger",e=>new Ah(e),"PRIVATE")),jn(new hn("heartbeat",e=>new hp(e),"PRIVATE")),sn(Ns,wo,t),sn(Ns,wo,"esm2017"),sn("fire-js","")}_p("");var vp="firebase",yp="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(vp,yp,"app");function fi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Pc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bp=Pc,Oc=new zn("auth","Firebase",Pc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Ic("@firebase/auth");function Ep(t,...e){Ar.logLevel<=X.WARN&&Ar.warn(`Auth (${qn}): ${t}`,...e)}function fr(t,...e){Ar.logLevel<=X.ERROR&&Ar.error(`Auth (${qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw di(t,...e)}function ze(t,...e){return di(t,...e)}function kc(t,e,n){const r=Object.assign(Object.assign({},bp()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function it(t){return kc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function di(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Oc.create(t,...e)}function U(t,e,...n){if(!t)throw di(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fr(e),new Error(e)}function at(t,e){t||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ip(){return Ao()==="http:"||Ao()==="https:"}function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ip()||Xd()||"connection"in navigator)?navigator.onLine:!0}function Sp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||Qd()}get(){return wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Yn(3e4,6e4);function At(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pt(t,e,n,r,s={}){return xc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return Jd()||(l.referrerPolicy="no-referrer"),Dc.fetch()(Nc(t,t.config.apiHost,n,c),l)})}async function xc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tp),e);try{const s=new Ap(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw rr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw rr(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kc(t,f,l);Ue(t,f)}}catch(s){if(s instanceof Ct)throw s;Ue(t,"network-request-failed",{message:String(s)})}}async function Jn(t,e,n,r,s={}){const i=await Pt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ue(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Nc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hi(t.config,s):`${t.config.apiScheme}://${s}`}function Cp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ap{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),Rp.get())})}}function rr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(t,e,r);return s.customData._tokenResponse=n,s}function Po(t){return t!==void 0&&t.enterprise!==void 0}class Pp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Cp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Op(t,e){return Pt(t,"GET","/v2/recaptchaConfig",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(t,e){return Pt(t,"POST","/v1/accounts:delete",e)}async function Mc(t,e){return Pt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dp(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=pi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Dn(ps(s.auth_time)),issuedAtTime:Dn(ps(s.iat)),expirationTime:Dn(ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ps(t){return Number(t)*1e3}function pi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fr("JWT malformed, contained fewer than 3 sections"),null;try{const s=yc(n);return s?JSON.parse(s):(fr("Failed to decode base64 JWT payload"),null)}catch(s){return fr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Oo(t){const e=pi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&xp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vn(t,Mc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lc(i.providerUserInfo):[],c=Lp(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Fs(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Mp(t){const e=lt(t);await Pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lc(t){return t.map(e=>{var{providerId:n}=e,r=fi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(t,e){const n=await xc(t,{},async()=>{const r=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Nc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Dc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Fp(t,e){return Pt(t,"POST","/v2/accounts:revokeToken",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Oo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Up(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new on;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Np(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dp(this,e)}reload(){return Mp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await Vn(this,kp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:O,isAnonymous:W,providerData:ie,stsTokenManager:ee}=n;U(N&&ee,e,"internal-error");const Re=on.fromJSON(this.name,ee);U(typeof N=="string",e,"internal-error"),ht(h,e.name),ht(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof W=="boolean",e,"internal-error"),ht(g,e.name),ht(R,e.name),ht(P,e.name),ht(H,e.name),ht(M,e.name),ht(k,e.name);const Ce=new rt({uid:N,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:W,photoURL:R,phoneNumber:g,tenantId:P,stsTokenManager:Re,createdAt:M,lastLoginAt:k});return ie&&Array.isArray(ie)&&(Ce.providerData=ie.map(Ae=>Object.assign({},Ae))),H&&(Ce._redirectEventId=H),Ce}static async _fromIdTokenResponse(e,n,r=!1){const s=new on;s.updateFromServerResponse(n);const i=new rt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new on;c.updateFromIdToken(r);const a=new rt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map;function st(t){at(t instanceof Function,"Expected a class definition");let e=ko.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ko.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uc.type="NONE";const Do=Uc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e,n){return`firebase:${t}:${e}:${n}`}class an{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=dr(this.userKey,s.apiKey,i),this.fullPersistenceKey=dr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new an(st(Do),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||st(Do);const o=dr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=rt._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new an(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new an(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wc(e))return"Blackberry";if($c(e))return"Webos";if(Hc(e))return"Safari";if((e.includes("chrome/")||jc(e))&&!e.includes("edge/"))return"Chrome";if(Vc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fc(t=_e()){return/firefox\//i.test(t)}function Hc(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jc(t=_e()){return/crios\//i.test(t)}function Bc(t=_e()){return/iemobile/i.test(t)}function Vc(t=_e()){return/android/i.test(t)}function Wc(t=_e()){return/blackberry/i.test(t)}function $c(t=_e()){return/webos/i.test(t)}function gi(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hp(t=_e()){var e;return gi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jp(){return Zd()&&document.documentMode===10}function Kc(t=_e()){return gi(t)||Vc(t)||$c(t)||Wc(t)||/windows phone/i.test(t)||Bc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e=[]){let n;switch(t){case"Browser":n=xo(_e());break;case"Worker":n=`${xo(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(t,e={}){return Pt(t,"GET","/v2/passwordPolicy",At(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=6;class $p{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new Bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mc(this,{idToken:e}),r=await rt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(it(this));const n=e?lt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vp(this),n=new $p(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ep(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kt(t){return lt(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=oh(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zp(t){zr=t}function Gc(t){return zr.loadJS(t)}function Gp(){return zr.recaptchaEnterpriseScript}function qp(){return zr.gapiScript}function Yp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Jp{constructor(){this.enterprise=new Xp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Xp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Qp="recaptcha-enterprise",qc="NO_RECAPTCHA";class Zp{constructor(e){this.type=Qp,this.auth=Kt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Op(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Pp(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Po(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(qc)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Po(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Gp();a.length!==0&&(a+=c),Gc(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Mo(t,e,n,r=!1,s=!1){const i=new Zp(t);let o;if(s)o=qc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hs(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Mo(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Mo(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e){const n=Tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rr(i,e??{}))return s;Ue(s,"already-initialized")}return n.initialize({options:e})}function tg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ng(t,e,n){const r=Kt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Yc(e),{host:o,port:c}=rg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),sg()}function Yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rg(t){const e=Yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lo(o)}}}function Lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function ig(t,e){return Pt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(t,e){return Jn(t,"POST","/v1/accounts:signInWithPassword",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}async function cg(t,e){return Jn(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends mi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(e,n,"signInWithPassword",og);case"emailLink":return ag(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(e,r,"signUpPassword",ig);case"emailLink":return cg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return Jn(t,"POST","/v1/accounts:signInWithIdp",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="http://localhost";class Vt extends mi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cn(e,n)}buildRequest(){const e={requestUri:lg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fg(t){const e=En(In(t)).link,n=e?En(In(e)).deep_link_id:null,r=En(In(t)).deep_link_id;return(r?En(In(r)).link:null)||r||n||e||t}class _i{constructor(e){var n,r,s,i,o,c;const a=En(In(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=ug((s=a.mode)!==null&&s!==void 0?s:null);U(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=fg(e);try{return new _i(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,n){return Wn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_i.parseLink(n);return U(r,"argument-error"),Wn._fromEmailAndCode(e,r.code,r.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Jc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Xn{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Xn{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(t,e){return Jn(t,"POST","/v1/accounts:signUp",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rt._fromIdTokenResponse(e,r,s),o=Uo(r);return new Wt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Uo(r);return new Wt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Or.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Or(e,n,r,s)}}function Xc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Or._fromErrorAndOperation(t,i,e,r):i})}async function hg(t,e,n=!1){const r=await Vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e,n=!1){const{auth:r}=t;if(xe(r.app))return Promise.reject(it(r));const s="reauthenticate";try{const i=await Vn(t,Xc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=pi(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),Wt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(t,e,n=!1){if(xe(t.app))return Promise.reject(it(t));const r="signIn",s=await Xc(t,r,e),i=await Wt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gg(t,e){return Qc(Kt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(t){const e=Kt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mg(t,e,n){if(xe(t.app))return Promise.reject(it(t));const r=Kt(t),o=await Hs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dg).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Zc(t),a}),c=await Wt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function _g(t,e,n){return xe(t.app)?Promise.reject(it(t)):gg(lt(t),pn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zc(t),r})}function vg(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function yg(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function bg(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function Eg(t){return lt(t).signOut()}const kr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kr,"1"),this.storage.removeItem(kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=1e3,wg=10;class tl extends el{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tl.type="LOCAL";const Sg=tl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends el{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nl.type="SESSION";const rl=nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Gr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Tg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=vi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function Cg(t){Ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Ag(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Og(){return sl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="firebaseLocalStorageDb",kg=1,Dr="firebaseLocalStorage",ol="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qr(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function Dg(){const t=indexedDB.deleteDatabase(il);return new Qn(t).toPromise()}function js(){const t=indexedDB.open(il,kg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dr,{keyPath:ol})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dr)?e(r):(r.close(),await Dg(),e(await js()))})})}async function Fo(t,e,n){const r=qr(t,!0).put({[ol]:e,value:n});return new Qn(r).toPromise()}async function xg(t,e){const n=qr(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function Ho(t,e){const n=qr(t,!0).delete(e);return new Qn(n).toPromise()}const Ng=800,Mg=3;class al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await js(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gr._getInstance(Og()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ag(),!this.activeServiceWorker)return;this.sender=new Rg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await js();return await Fo(e,kr,"1"),await Ho(e,kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ho(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qr(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}al.type="LOCAL";const Lg=al;new Yn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e){return e?st(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends mi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fg(t){return Qc(t.auth,new yi(t),t.bypassAuthState)}function Hg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),pg(n,new yi(t),t.bypassAuthState)}async function jg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),hg(n,new yi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fg;case"linkViaPopup":case"linkViaRedirect":return jg;case"reauthViaPopup":case"reauthViaRedirect":return Hg;default:Ue(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Yn(2e3,1e4);class Zt extends cl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=vi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bg.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="pendingRedirect",hr=new Map;class Wg extends cl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const r=await $g(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $g(t,e){const n=Gg(e),r=zg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Kg(t,e){hr.set(t._key(),e)}function zg(t){return st(t._redirectPersistence)}function Gg(t){return dr(Vg,t.config.apiKey,t.name)}async function qg(t,e,n=!1){if(xe(t.app))return Promise.reject(it(t));const r=Kt(t),s=Ug(r,e),o=await new Wg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=10*60*1e3;class Jg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ll(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yg&&this.cachedEventUids.clear(),this.cachedEventUids.has(jo(e))}saveEventToCache(e){this.cachedEventUids.add(jo(e)),this.lastProcessedEventTime=Date.now()}}function jo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ll({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ll(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(t,e={}){return Pt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,em=/^https?/;async function tm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qg(t);for(const n of e)try{if(nm(n))return}catch{}Ue(t,"unauthorized-domain")}function nm(t){const e=Us(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!em.test(n))return!1;if(Zg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new Yn(3e4,6e4);function Bo(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sm(t){return new Promise((e,n)=>{var r,s,i;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),n(ze(t,"network-request-failed"))},timeout:rm.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const c=Yp("iframefcb");return Ge()[c]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},Gc(`${qp()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw pr=null,e})}let pr=null;function im(t){return pr=pr||sm(t),pr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new Yn(5e3,15e3),am="__/auth/iframe",cm="emulator/auth/iframe",lm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},um=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fm(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hi(e,cm):`https://${t.config.authDomain}/${am}`,r={apiKey:e.apiKey,appName:t.name,v:qn},s=um.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gn(r).slice(1)}`}async function dm(t){const e=await im(t),n=Ge().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:fm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),c=Ge().setTimeout(()=>{i(o)},om.get());function a(){Ge().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pm=500,gm=600,mm="_blank",_m="http://localhost";class Vo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vm(t,e,n,r=pm,s=gm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},hm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(c=jc(l)?mm:n),Fc(l)&&(e=e||_m,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[g,R])=>`${p}${g}=${R},`,"");if(Hp(l)&&c!=="_self")return ym(e||"",c),new Vo(null);const h=window.open(e||"",c,f);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Vo(h)}function ym(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="__/auth/handler",Em="emulator/auth/handler",Im=encodeURIComponent("fac");async function Wo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qn,eventId:s};if(e instanceof Jc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Xn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${Im}=${encodeURIComponent(a)}`:"";return`${wm(t)}?${Gn(c).slice(1)}${l}`}function wm({config:t}){return t.emulator?hi(t,Em):`https://${t.authDomain}/${bm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="webStorageSupport";class Sm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rl,this._completeRedirectFn=qg,this._overrideRedirectResult=Kg}async _openPopup(e,n,r,s){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wo(e,n,r,Us(),s);return vm(e,o,vi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wo(e,n,r,Us(),s);return Cg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(at(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dm(e),r=new Jg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gs,{type:gs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gs];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kc()||Hc()||gi()}}const Tm=Sm;var $o="@firebase/auth",Ko="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Am(t){jn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zc(t)},l=new Kp(r,s,i,a);return tg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new hn("auth-internal",e=>{const n=Kt(e.getProvider("auth").getImmediate());return(r=>new Rm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn($o,Ko,Cm(t)),sn($o,Ko,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=5*60,Om=Ec("authIdTokenMaxAge")||Pm;let zo=null;const km=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Om)return;const s=n==null?void 0:n.token;zo!==s&&(zo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ul(t=ap()){const e=Tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eg(t,{popupRedirectResolver:Tm,persistence:[Lg,Sg,rl]}),r=Ec("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=km(i.toString());yg(n,o,()=>o(n.currentUser)),vg(n,c=>o(c))}}const s=Gd("auth");return s&&ng(n,`http://${s}`),n}function Dm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Dm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Am("Browser");const xm={apiKey:"AIzaSyCs5G5EL6WypLZD9kXKM6y8ppV7xZlVzlA",authDomain:"fir-2-5fbbf.firebaseapp.com",projectId:"fir-2-5fbbf",storageBucket:"fir-2-5fbbf.firebasestorage.app",messagingSenderId:"192623161678",appId:"1:192623161678:web:20cd74da9f6d20d52e6e1f"},Nm=Rc(xm),gr=ul(Nm),sr=Ht(null),xt=Ht(null),bi=()=>({user:sr,error:xt,signup:async(r,s)=>{xt.value=null;try{const i=await mg(gr,r,s);return sr.value=i.user,i}catch(i){xt.value=i.message}},login:async(r,s)=>{xt.value=null;try{const i=await _g(gr,r,s);return sr.value=i.user,i}catch(i){xt.value=i.message}},logout:async()=>{xt.value=null;try{await Eg(gr),sr.value=null}catch(r){xt.value=r.message}}}),Ei=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Mm={class:"home"},Lm={__name:"Home",setup(t){const e=ci(),{logout:n}=bi();Pa(()=>{const s=ul();bg(s,i=>{i||e.push("/login")})});const r=async()=>{await n(),e.push("/login")};return(s,i)=>(Bt(),ln("div",Mm,[i[2]||(i[2]=Q("h1",null,"Bienvenido al Universo Marvel",-1)),Q("div",{class:"hero-content"},[Q("div",{class:"hero-card"},[i[1]||(i[1]=Yu('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWIAAACOCAMAAAA8c/IFAAAAkFBMVEX////tHSTsAAD5wcPsAAjtGSH3tbb6zM3tKC7719jwV1vtFBzsAA3ycHPtDxn2mpz2p6n++Pj4sbL83+DuLzT+7+/sCRT3pqj/+fnzfYD3ra/6zc7yc3b1lJb84+T4urzwT1P0h4rxZ2rxYGPuNTrvSEz+8fLvPkLzen30jY/96er2nqDvPEH5v8D71NXwVFgUxIiuAAAQPElEQVR4nO2da3uiPhPGAUHbSm2tldqjPWrrbt3v/+0eToEk3DMZ3OXfXM/lvJQQww+STGYmkyA8ysAS/HQD/v/liHhwOSIeXI6IB5cj4sHliHhwOSIeXI6IB5cj4sFFQ5xEtMy6d3LFp1bZKVO2U/cMF4vjNJsl+ClSeAMozDXaKVleQYYupELEyclkRMnktcM42TLFz0zG02e67Gj0adY9u4Wlvtfju6/zbf489vvLCd/BW046jJNrriEuecnC7AJduGEZ64gDWi47lczOmeIPJrXshSkbjCKT1w1XODi9OYvtXhLtYdE/nZcxe2XrdshVHEb3sE2R/UcHIL7vVJL+Yoqfm4jTO67li16Ic5mP/5ijSzyG5R46XS/7ctXNSYF4gi78E8S7TiXRN1PcQowbpmTVF3EuiwcdcvYIC/3qdD3+XbtkWMRB3EH8xJS2Ee/YpifGmClCnL/016i5bfYJi4y7jWbftUsGRvxhj2vZnCltIk6mXNkgeDPqFiIOgslJVt8y/YAFuk/OfhdOGRixPa4l11xpC/FvvukvmV5ajDgIPutHS0J4GYxu4qqRDIzYHtf4udlE7JrH74y6eyAOxvVgkeJuMrW0Nv67cMrAiL+tWogZphYTMV827/FG3X0QB6eVlkwMAO8W4ulbj6q7MjBiS7MK4zVX+lyiUzWyOxxxsAsLxsQ0Zi+Ysts+VXdkYMSbzLwvOuVKm4j5srnWZqyL+yEOlknOOL6C176sRves2paBEdudLlpxhS3EG0fbt3+BONhlCTUU3VkTCKvLu2VoxKZm5ShsIXa13ejQvT+1/AGJ1by9Jo0W8H7pHw2N2Ox0jonDQExorZo86nX3781X0fQZXniyHj2F3YmdVYz/GRjxlbFU4g07JmJi7aWJsQw7YMC8jYm2m49OPKFD32llaMR7oxpiflFiIGYNRt0mHjInXUdYMTbNmUR34kyGhgyNeGlUQ5gPm1briKORq+3Lv0W8JxRjcwLB3Wn+R/ovQyM2O120ZMuaiOEkY4iutR2kWZ3j13hrLs0vUJmdc6pQMjhi3RDkKmsi5o1Adt0HIV5iK6XpjsDLpZE/iPUvgpjBG9ERJ+/uxut1H7Y+wOZSc9mPl0A3/iDWvwjXSlRHPD1zN143Mv3lEsyQhWB0+3yW1jY4Yt3F5sKgI3bod9K6R3vXGhHIxtA08RLoWT7dpQMj1vV4l/dARyxx5iyciOdRFP1+7G1R17U2YsRKMeK3k2tb8sqGRbzSOrPDU2QgFjlzdMSXqMB8moRJGj24p05D9HkUr7I3ER7IzmZJR6iH+VeIdWONy+pgIHa8jlKu27ppxLlkaT/vm+6swe7newpxN1yD/F7+GeLWWOPyFOmIk8xRthRtjcAiDpNIbFIo5ELrethsfeUT4otGs3JaHXTEAp3NcN/xiHt6kXXrB77xK/YIcdtcp9VBQ8xGDTWiGZlciJOsh2qhPzwesc4yjxC3FTmtDhpil+OuEs1950IcZmK7jemzyqAXIZx5hHjTjGvOcAQNMe/kU7LrgVhi9GikrTfZouublFga/QjiIFRPGbNepcBA7LDJ1bJqI4LciDOnAbqVVlXBXoRF5BViFemIvwdddMRAkwU/bXsgTthIJFNaNQivMsexV4jVtO8OIW0RJ0n36gq0s73DjVhggW6k9Yfhei8yrxCrIOMM2l11aYFNwfJ0DhSSCwcKA7HE7FFL64TG7+V15hVi5dB1z2AtYqRCLwChdasRuhG7R6pGWlUFz9HbxCvEatp3z+hatwdGnQmYeNpWChD3CP9rjVfQ/bxKKWPrzyBWGhD2levSIkbdcwyM4Jt+iCV2D6PNRPRm/gb8QlzZrQQFNcSge16gp+0zUDhDuDRRUUzYUTPyDXFltxLEN7aIkX51i6K1ntUjiRDL7RQKFXbU/PJtoKj8P4I9KQ1iaAQ6Q/28cd+JEMu1NlUvtqt8zjxDXHkbHWEqhTSIYfuv0daqxjUoQSxblRv14reSr3j8Qlz5fwRL4gYx/OIzZPNt3Hf/+CtWTmg8fEek+/aHEM/LTueMZdUQI8fdMkYxI0+9EMvHYuUWhNEcO+8Ql9NzMnOXaxCjIWERoamncQ1id6pEo4DGqWVVL271vX+IC/+PJC6iRQwmthE2bv1OeiCGERG4d1X2QayzFSYBzxAXRhXJhokWMbh4l8JlgHLfiRDDf11Cxtuy3tkDulYYtjxDXPh/JHERCjHU2R4ziEjZxASICSo7uLCvlHlsunqme+VPIS6CjCVTjUIMv538Iho/lPtOgJhwVu2gKleF4GM1r4hk8QxxEQjsiHstRSGGLPJPB01XKkZcgJhQG3eQfOXVhbcsi0sE4meY8mN4xEFKbYY1RSGG3851EsZg69BOjJjaBPoEXQXVq4MfRnlJMn1XMnhMWykfU/fmmKBFjL7WQrmGq9k6jtuNGIdiB8EEoi9fXRIijW7MfMVABo/MLOU2c2+OCTTEQN8vBhvotvgtRUzFhF9hRaNEDI345QzrG+KbVBT+WyOGVZbqPjLW1fFnTsQxFZnxgh0bxXoJuxtL36lviCeRyDxQI0aOu+A7JoLiavedC/GUbOcH5Z6jdJDSluwb4qdIlDWjRgxXKYVFFM6ZtcHGhZg0x68ibLAs1he40vIPfUMcxCK3WY0YDiplqEAMJvhTEWI6MnMU4SVc4YSGmakWfiLeirJm1Ihhxy0HQORhXQkQc7GvtxkOyi3MpLDvffuJ+FUUs6cQowcrB0AIvzLYMIiT9ISxVU+TZIpUs8JMCvteFXzsHeIvUaYzNRYj7SoiOVZr1hgjnk1nEalLFEJ+rHNqvVS7In1DfCVy6VSI4SpsXjYHekMqNxuBOPx9zidnKV4QVineE+zRrZzT3iHeiwItz2lXdTXHwMDuKqALI3ZK6TXBKsWfKY7Qqoz13iHeiYIiK8TwU60ioKCFvHLfHYi4/Esckn+bQdWmdmX9PGKHXQ1frhBDV/VdafhCAZu1IegwxBUvbED5lcIBZOILYod1GK/1KsTQgFiv4VC0SqWYCWIIgLxVE2yMrq0jGIV348tA4TBJQHexQowizz4Zfe73wYhVACasdhHBZFF1S34e8QU7UmywGlUjRpfqwCrY1vJTPAix2ogLR4RlBB+tbsnPI/4FkyIrWWA1uUSMB8Z68wUEWfqADkF820QIQFNyBLc516/FA8TsSDFmvmJoMVC2Bmj6Kt13ByBu005gK8U7+lWF23qAmPXpfzGI4Rel0gBBy37p6OmPeJc2tmTsc3pFLbn3BvENG/T/xiCGjjvVGjiKLA9CvAo1ZzEc/1/QulB5vD1AnHL/eoLdaCViaNhVfRpbDQ5C/GEkIkIqxR3SHtX+KwLx08KWp1zfHATxJRv0HzGIYxSc0xytkCI9akunGKVk9WFksYJpMSeIu4o++nkn/yU+Z0HVTSPGw2KzZR9+boWq2g/x8t3M7gqtFEu06lf7VX8+VOUyYha0awYxdNy1uznx0i/tizi0UhTLEgcE2jkMPiBmVIpHBjG2bjWZZGACjsIQ1A+xdfaCfEveqU+In+l2vjKIcTRAs1Ud9uhFb8Rr62CJZCbcH93c6AHiGBnFajmJacSwNe0xKdA7veqNeGM/nfRciSahrweIU1ql2KRE7FOJGD1ru5kTP1kR79ZPo7APHJFm2m4mBS8Qk/bMRcQhRhfavNh40Mw1qZ6I7dMwqIA3W5rE7T4gpkOsxnBjTFAixtW1+YWwtzjX6Xoito9qEKoU85lPiOlAwceMRoyjyLSkXnDj011KIV5Mbm4/0C3WqXayjFrOEeu/RUxnZXub0ojxHtMHbbGEFONJRCCeR1GaQWuwmaNYust/5BViutHvCY0YJ57bTxoZIVv/jkRcGEGhqm2dSChMztTmsfUDMaEHzSNqcim2c7CmfEpWs4RBDPvTPLNOHBGpFG2mRz8QE/GupyziA3LhBkXHYBDj7QRmwnhBWp1CmsQBfiCmkgvmCyQScTIVPCeQ1xmHGJqgrTNoZCpFm73eC8RUo78yGrErFToljxmHGCo31rF2ohPXtDMYvEBMqRR5DyURYyeaW8YxnicrxNiQf20OxpIsbhPfEBOmlbyzkYjd56Vg2UccYjzzWgeCSVQK7dBlLxATKkURY0ki7pGUw5ANjxhGY5kH54jygWjJfD1BDPWgUw5xn9ShhmQRhxivGa0jeAUqhXYKtx+I8X6fcs85OVAcprMVPjMOMR6M+x11WoimS/uBGDe6GAIpxJkokhbJJ4sYu7XXxiMKHB/6oU5+IMamlaIRFGLiJAeB3PCI4TRq2eX5EyULOfUOMbZSFCYuCnEkTxxqyYhHjIGYdnn3PKAf3ucLYtA9y0wDJOKDT/F54hHjt23a5d1WCv2YSE8QIz2oVJVIxP2O39Bk7kJMb1JU4k5fr5s1PEGMGn3FfsW9j+ppJOQRY36GXd6tUujHAROIP7rRQCmFeN8tq/2BDDHae1Rq7yRi10PS8szYKEIqatmwyzs3Bs31cYVAvFnasrmhUn4EG1v0Rb0MMVJHy85GIT5YZ8tfHY8Yp/Y1z5x3vWBjXPkHkZlAeiNGIYBl0AmB+FWg/VNy40AMrdemXd6lUnz7iLirUlS6KIUYOu72z2eG4CFh4kiWgAO5DLu8y0pxIRgogAz8FXdo7FnEEN5lNDUkhQbPhQMxNq3e6YFXLpVCPz/MG8TdT6fyNRCI36DjzjI6Ug/nSlwDvUuGXd6lUmwTdyuADIu4247KHEghhjvJLCcb9Y/QU6jnBoLDgK6HuWIpjLnRF8Tdi5V/kUD8AK0ElneCMiZg43SLGIfO6Au2kD9M7MlLxF2HcuVfJBDD2W417SCWG5U1xNigadjl+YonniK2Rtd67CMQw227u84ys8cy28jTBr/zUHuBvEphHsDtDWI7Dco9ixjOdvcdxD2OfNYR473+xjGjrEphhmh5g9hWKRR5jBjOdldWQHuvs5J0xFhh0O3yvEphmj69QWzHRdRfgjSat5BHS2cTnRCixEhLCgdj/VhtPpYiNOYEbxDb6/46YKkP4ldr54s0kUspZnJdmA3vWfs4OceHNSd4hNjcjlB/CX0Q21sGQiJDBxQDMR7Ddbs8d0LQ3lvExhSm/It9ECe2zibf+yJKdK7bzziVwpoT/EFsfjmT/og7e4s6740TSbp+zS7PqRQv5pzgD2JzE1cDXo54DxDLUy1ZiOGr0djNmInUWsf7g9j0NjSHQ8kR25sQXR+bKSZifJ+2auMmUmsd7w9iM1W4mrp6IDaMtOpjE5vuTcTYu7Rqg4aZYw/nVm/yB7GpUqhm9gjAvO3obBQqKKaBI4WxoppaSFspbHexHPE4lk8eBOL1uCvrz/bQr/bXhvvsHN2EZL3tKhR515DefWXFED+C/23bWrR29F3IuhKtkDXbhclW+Ajr22If1vhKIusThDhMYiRaq9sf2z4/gzchAYSLdLnCu+1RJkOF9H6SVc72bqHOGhM/N1E9/F8g0Ml/lIHkiHhwOSIeXI6IB5cj4sHliHhwOSIeXI6IB5cj4sHliHhw+R9PBj9Uj4RZxwAAAABJRU5ErkJggg==" alt="Shield Logo" class="shield-logo" data-v-f9f24fd1><p class="welcome-text" data-v-f9f24fd1>¡Bienvenido, Agente!</p><p class="mission-text" data-v-f9f24fd1>Has sido autorizado para acceder a los archivos confidenciales de S.H.I.E.L.D.</p><div class="stats" data-v-f9f24fd1><div class="stat-item" data-v-f9f24fd1><span class="stat-label" data-v-f9f24fd1>Nivel de Autorización</span><span class="stat-value" data-v-f9f24fd1>7</span></div><div class="stat-item" data-v-f9f24fd1><span class="stat-label" data-v-f9f24fd1>Estado</span><span class="stat-value" data-v-f9f24fd1>Activo</span></div></div>',4)),Q("button",{onClick:r,class:"logout-btn"},i[0]||(i[0]=[wr(" Cerrar Sesión "),Q("span",{class:"icon"},"🔒",-1)]))])])]))}},Um=Ei(Lm,[["__scopeId","data-v-f9f24fd1"]]),Fm={setup(){const{error:t,login:e}=bi(),n=ci(),r=Ht(""),s=Ht("");return{email:r,password:s,error:t,handleSubmit:async()=>{await e(r.value,s.value)&&n.push("/")}}}},Hm={class:"login"},jm={class:"form-group"},Bm={class:"form-group"},Vm={key:0,class:"error"};function Wm(t,e,n,r,s,i){return Bt(),ln("div",Hm,[e[6]||(e[6]=Q("h2",null,"Accede al Universo Marvel",-1)),Q("form",{onSubmit:e[2]||(e[2]=tc((...o)=>r.handleSubmit&&r.handleSubmit(...o),["prevent"]))},[Q("div",jm,[e[3]||(e[3]=Q("label",null,"Email del Héroe",-1)),yr(Q("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),required:"",placeholder:"peter.parker@marvel.com"},null,512),[[Tr,r.email]])]),Q("div",Bm,[e[4]||(e[4]=Q("label",null,"Código Secreto",-1)),yr(Q("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),required:"",placeholder:"••••••••"},null,512),[[Tr,r.password]])]),r.error?(Bt(),ln("div",Vm,Gs(r.error),1)):Ja("",!0),e[5]||(e[5]=Q("button",{type:"submit"},"Activar Poderes",-1))],32)])}const $m=Ei(Fm,[["render",Wm]]),Km={setup(){const{error:t,signup:e}=bi(),n=ci(),r=Ht(""),s=Ht("");return{email:r,password:s,error:t,handleSubmit:async()=>{await e(r.value,s.value)&&n.push("/")}}}},zm={class:"signup"},Gm={class:"form-group"},qm={class:"form-group"},Ym={key:0,class:"error"};function Jm(t,e,n,r,s,i){return Bt(),ln("div",zm,[e[6]||(e[6]=Q("h2",null,"Únete a los Vengadores",-1)),Q("form",{onSubmit:e[2]||(e[2]=tc((...o)=>r.handleSubmit&&r.handleSubmit(...o),["prevent"]))},[Q("div",Gm,[e[3]||(e[3]=Q("label",null,"Email del Héroe",-1)),yr(Q("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),required:"",placeholder:"tony.stark@marvel.com"},null,512),[[Tr,r.email]])]),Q("div",qm,[e[4]||(e[4]=Q("label",null,"Código Secreto",-1)),yr(Q("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),required:"",placeholder:"••••••••"},null,512),[[Tr,r.password]])]),r.error?(Bt(),ln("div",Ym,Gs(r.error),1)):Ja("",!0),e[5]||(e[5]=Q("button",{type:"submit"},"Obtener Poderes",-1))],32)])}const Xm=Ei(Km,[["render",Jm],["__scopeId","data-v-9b0af0e7"]]),Qm=(t,e,n)=>{gr.currentUser?n():n("/login")},Zm=[{path:"/",name:"Home",component:Um,beforeEnter:Qm},{path:"/login",name:"Login",component:$m},{path:"/signup",name:"SignUp",component:Xm}],e_=Md({history:fd(),routes:Zm}),fl=Df(Hd);fl.use(e_);fl.mount("#app");
