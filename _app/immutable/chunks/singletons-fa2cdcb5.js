var S=Object.defineProperty,T=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var g=(t,n,e)=>n in t?S(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||(n={}))L.call(n,e)&&g(t,e,n[e]);if(h)for(var e of h(n))O.call(n,e)&&g(t,e,n[e]);return t},w=(t,n)=>T(t,U(n));var E=(t,n,e)=>new Promise((l,a)=>{var c=i=>{try{s(e.next(i))}catch(o){a(o)}},r=i=>{try{s(e.throw(i))}catch(o){a(o)}},s=i=>i.done?l(i.value):Promise.resolve(i.value).then(c,r);s((e=e.apply(t,n)).next())});import{B as d,s as V}from"./index-c335f3f6.js";const u=[];function b(t,n=d){let e;const l=new Set;function a(s){if(V(t,s)&&(t=s,e)){const i=!u.length;for(const o of l)o[1](),u.push(o,t);if(i){for(let o=0;o<u.length;o+=2)u[o][0](u[o+1]);u.length=0}}}function c(s){a(s(t))}function r(s,i=d){const o=[s,i];return l.add(o),l.size===1&&(e=n(a)||d),s(t),()=>{l.delete(o),l.size===0&&(e(),e=null)}}return{set:a,update:c,subscribe:r}}let v="",k="";function Y(t){v=t.base,k=t.assets||v}let y="";function j(t){y=t}const z="sveltekit:scroll",B="sveltekit:index",R={tap:1,hover:2,viewport:3,eager:4,off:-1};function C(t){let n=t.baseURI;if(!n){const e=t.getElementsByTagName("base");n=e.length?e[0].href:t.URL}return n}function D(){return{x:pageXOffset,y:pageYOffset}}function f(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const x=w(_({},R),{"":R.hover});function G(t,n){var p;let e,l=null,a=null,c=null,r=null;for(;t!==document.documentElement;)!e&&t.nodeName.toUpperCase()==="A"&&(e=t),e&&(a===null&&(a=f(t,"preload-code")),c===null&&(c=f(t,"preload-data")),l===null&&(l=f(t,"noscroll")),r===null&&(r=f(t,"reload"))),t=(p=t.assignedSlot)!=null?p:t.parentNode,t.nodeType===11&&(t=t.host);let s;try{s=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch($){}const i={preload_code:x[a!=null?a:"off"],preload_data:x[c!=null?c:"off"],noscroll:l==="off"?!1:l===""?!0:null,reload:r==="off"?!1:r===""?!0:null},o=e?{rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)}:{},A=!s||N(s,n)||i.reload||o.rel_external||o.target||o.download;return{a:e,url:s,options:i,external:A,has:o}}function I(t){const n=b(t);let e=!0;function l(){e=!0,n.update(r=>r)}function a(r){e=!1,n.set(r)}function c(r){let s;return n.subscribe(i=>{(s===void 0||e&&i!==s)&&r(s=i)})}return{notify:l,set:a,subscribe:c}}function m(){const{set:t,subscribe:n}=b(!1);let e;function l(){return E(this,null,function*(){clearTimeout(e);const a=yield fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const r=(yield a.json()).version!==y;return r&&(t(!0),clearTimeout(e)),r}else throw new Error(`Version check failed: ${a.status}`)})}return{subscribe:n,check:l}}function N(t,n){return t.origin!==location.origin||!t.pathname.startsWith(n)}function K(t){t.client}const X={url:I({}),page:I({}),navigating:b(null),updated:m()};export{B as I,R as P,z as S,D as a,Y as b,K as c,j as d,G as f,C as g,N as i,X as s};
