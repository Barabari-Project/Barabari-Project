var y=Object.defineProperty,I=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&_(e,t,n[t]);if(p)for(var t of p(n))U.call(n,t)&&_(e,t,n[t]);return e},g=(e,n)=>I(e,x(n));var k=(e,n,t)=>new Promise((o,r)=>{var u=a=>{try{s(t.next(a))}catch(i){r(i)}},l=a=>{try{s(t.throw(a))}catch(i){r(i)}},s=a=>a.done?o(a.value):Promise.resolve(a.value).then(u,l);s((t=t.apply(e,n)).next())});import{n as d,s as L}from"./index.6f362b87.js";const c=[];function b(e,n=d){let t;const o=new Set;function r(s){if(L(e,s)&&(e=s,t)){const a=!c.length;for(const i of o)i[1](),c.push(i,e);if(a){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function u(s){r(s(e))}function l(s,a=d){const i=[s,a];return o.add(i),o.size===1&&(t=n(r)||d),s(e),()=>{o.delete(i),o.size===0&&t&&(t(),t=null)}}return{set:r,update:u,subscribe:l}}var A,R;const N=(R=(A=globalThis.__sveltekit_u1nfkv)==null?void 0:A.base)!=null?R:"";var S,T;const P=(T=(S=globalThis.__sveltekit_u1nfkv)==null?void 0:S.assets)!=null?T:N,V="1690381852908",j="sveltekit:snapshot",z="sveltekit:scroll",C="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function D(e){let n=e.baseURI;if(!n){const t=e.getElementsByTagName("base");n=t.length?t[0].href:e.URL}return n}function G(){return{x:pageXOffset,y:pageYOffset}}function f(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const m=g(h({},v),{"":v.hover});function w(e){var t;let n=(t=e.assignedSlot)!=null?t:e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function X(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=w(e)}}function B(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch(l){}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!o||q(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),u=(t==null?void 0:t.origin)===location.origin&&e.hasAttribute("download");return{url:t,external:r,target:o,download:u}}function H(e){let n=null,t=null,o=null,r=null,u=null,l=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),n===null&&(n=f(s,"keepfocus")),t===null&&(t=f(s,"noscroll")),u===null&&(u=f(s,"reload")),l===null&&(l=f(s,"replacestate")),s=w(s);return{preload_code:m[o!=null?o:"off"],preload_data:m[r!=null?r:"off"],keep_focus:n==="off"?!1:n===""?!0:null,noscroll:t==="off"?!1:t===""?!0:null,reload:u==="off"?!1:u===""?!0:null,replace_state:l==="off"?!1:l===""?!0:null}}function E(e){const n=b(e);let t=!0;function o(){t=!0,n.update(l=>l)}function r(l){t=!1,n.set(l)}function u(l){let s;return n.subscribe(a=>{(s===void 0||t&&a!==s)&&l(s=a)})}return{notify:o,set:r,subscribe:u}}function Y(){const{set:e,subscribe:n}=b(!1);let t;function o(){return k(this,null,function*(){clearTimeout(t);try{const r=yield fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const l=(yield r.json()).version!==V;return l&&(e(!0),clearTimeout(t)),l}catch(r){return!1}})}return{subscribe:n,check:o}}function q(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}function W(e){e.client}const F={url:E({}),page:E({}),navigating:b(null),updated:Y()};export{C as I,v as P,z as S,j as a,B as b,H as c,G as d,N as e,X as f,D as g,W as h,q as i,F as s};
