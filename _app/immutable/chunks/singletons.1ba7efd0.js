var T=Object.defineProperty,y=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))x.call(t,n)&&p(e,n,t[n]);return e},g=(e,t)=>y(e,I(t));var h=(e,t,n)=>new Promise((l,o)=>{var r=i=>{try{s(n.next(i))}catch(c){o(c)}},a=i=>{try{s(n.throw(i))}catch(c){o(c)}},s=i=>i.done?l(i.value):Promise.resolve(i.value).then(r,a);s((n=n.apply(e,t)).next())});import{w as f}from"./index.a977151e.js";var m,E;const O=(E=(m=globalThis.__sveltekit_q5qzue)==null?void 0:m.base)!=null?E:"";var w,A;const U=(A=(w=globalThis.__sveltekit_q5qzue)==null?void 0:w.assets)!=null?A:O,L="1703566711114",Y="sveltekit:snapshot",K="sveltekit:scroll",$="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function j(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function z(){return{x:pageXOffset,y:pageYOffset}}function u(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const v=g(_({},b),{"":b.hover});function R(e){var n;let t=(n=e.assignedSlot)!=null?n:e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function C(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=R(e)}}function D(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch(a){}const l=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!l||q(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:o,target:l,download:r}}function G(e){let t=null,n=null,l=null,o=null,r=null,a=null,s=e;for(;s&&s!==document.documentElement;)l===null&&(l=u(s,"preload-code")),o===null&&(o=u(s,"preload-data")),t===null&&(t=u(s,"keepfocus")),n===null&&(n=u(s,"noscroll")),r===null&&(r=u(s,"reload")),a===null&&(a=u(s,"replacestate")),s=R(s);return{preload_code:v[l!=null?l:"off"],preload_data:v[o!=null?o:"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:a==="off"?!1:a===""?!0:null}}function k(e){const t=f(e);let n=!0;function l(){n=!0,t.update(a=>a)}function o(a){n=!1,t.set(a)}function r(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:l,set:o,subscribe:r}}function N(){const{set:e,subscribe:t}=f(!1);let n;function l(){return h(this,null,function*(){clearTimeout(n);try{const o=yield fetch(`${U}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(yield o.json()).version!==L;return a&&(e(!0),clearTimeout(n)),a}catch(o){return!1}})}return{subscribe:t,check:l}}function q(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function X(e){e.client}const B={url:k({}),page:k({}),navigating:f(null),updated:N()};export{$ as I,b as P,K as S,Y as a,D as b,G as c,z as d,O as e,C as f,j as g,X as h,q as i,B as s};
