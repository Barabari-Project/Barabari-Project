var pt=Object.defineProperty,ht=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Qe=(a,e,t)=>e in a?pt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,B=(a,e)=>{for(var t in e||(e={}))xe.call(e,t)&&Qe(a,t,e[t]);if(he)for(var t of he(e))et.call(e,t)&&Qe(a,t,e[t]);return a},Y=(a,e)=>ht(a,mt(e));var tt=(a,e)=>{var t={};for(var o in a)xe.call(a,o)&&e.indexOf(o)<0&&(t[o]=a[o]);if(a!=null&&he)for(var o of he(a))e.indexOf(o)<0&&et.call(a,o)&&(t[o]=a[o]);return t};var P=(a,e,t)=>new Promise((o,i)=>{var p=u=>{try{f(t.next(u))}catch(d){i(d)}},n=u=>{try{f(t.throw(u))}catch(d){i(d)}},f=u=>u.done?o(u.value):Promise.resolve(u.value).then(p,n);f((t=t.apply(a,e)).next())});import{S as _t,i as gt,s as yt,a as wt,e as K,c as bt,b as Z,g as ye,t as M,d as we,f as z,h as H,j as vt,o as Ue,k as Et,l as kt,m as Rt,n as Oe,p as G,q as St,r as Lt,u as Ot,v as Q,w as x,x as Ve,y as ee,z as te,A as me}from"./chunks/index-fb3bcbd7.js";import{S as ut,I as J,g as nt,f as at,a as Ie,b as _e,s as X,i as rt,c as ge,P as ot,d as It,e as At,h as Pt}from"./chunks/singletons-358b61f9.js";function Nt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Tt(a){return a.split("%25").map(decodeURI).join("%25")}function Ut(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const $t=["href","pathname","search","searchParams","toString","toJSON"];function jt(a,e){const t=new URL(a);for(const o of $t){let i=t[o];Object.defineProperty(t,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return Dt(t),t}function Dt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Vt="/__data.json";function Ct(a){return a.replace(/\/$/,"")+Vt}function qt(a){let e=5381;if(typeof a=="string"){let t=a.length;for(;t;)e=e*33^a.charCodeAt(--t)}else if(ArrayBuffer.isView(a)){const t=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const be=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&oe.delete(Ce(a)),be(a,e));const oe=new Map;function Bt(a,e){const t=Ce(a,e),o=document.querySelector(t);if(o!=null&&o.textContent){const i=JSON.parse(o.textContent),{body:p}=i,n=tt(i,["body"]),f=o.getAttribute("data-ttl");return f&&oe.set(t,{body:p,init:n,ttl:1e3*Number(f)}),Promise.resolve(new Response(p,n))}return be(a,e)}function Ft(a,e,t){if(oe.size>0){const o=Ce(a,t),i=oe.get(o);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(i.body,i.init);oe.delete(o)}}return be(e,t)}function Ce(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${qt(e.body)}"]`),o}const Gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Jt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Mt(a).map(o=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(p)return e.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const n=o.split(/\[(.+?)\](?!\])/);return"/"+n.map((u,d)=>{if(d%2){if(u.startsWith("x+"))return Ae(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Ae(String.fromCharCode(...u.slice(2).split("-").map($=>parseInt($,16))));const _=Gt.exec(u);if(!_)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,L,D,C]=_;return e.push({name:D,matcher:C,optional:!!y,rest:!!L,chained:L?d===1&&n[0]==="":!1}),L?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Ae(u)}).join("")}).join("")}/?$`),params:e}}function Kt(a){return!/^\([^)]+\)$/.test(a)}function Mt(a){return a.slice(1).split("/").filter(Kt)}function zt(a,e,t){const o={},i=a.slice(1);let p="";for(let n=0;n<e.length;n+=1){const f=e[n];let u=i[n];if(f.chained&&f.rest&&p&&(u=u?p+"/"+u:p),p="",u===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!t[f.matcher](u)){if(f.optional&&f.chained){let d=i.indexOf(void 0,n);if(d===-1){const _=e[n+1];if(_!=null&&_.rest&&_.chained)p=u;else return}for(;d>=n;)i[d]=i[d-1],d-=1;continue}return}o[f.name]=u}}if(!p)return o}function Ae(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ht(a,e,t,o){const i=new Set(e);return Object.entries(t).map(([f,[u,d,_]])=>{const{pattern:y,params:L}=Jt(f),D={id:f,exec:C=>{const $=y.exec(C);if($)return zt($,L,o)},errors:[1,..._||[]].map(C=>a[C]),layouts:[0,...d||[]].map(n),leaf:p(u)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function p(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function n(f){return f===void 0?f:[i.has(f),a[f]]}}function Wt(a){let e,t,o;var i=a[0][0];function p(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=Q(i,p(a))),{c(){e&&x(e.$$.fragment),t=K()},l(n){e&&Ve(e.$$.fragment,n),t=K()},m(n,f){e&&ee(e,n,f),Z(n,t,f),o=!0},p(n,f){const u={};if(f&4&&(u.data=n[2]),f&2&&(u.form=n[1]),i!==(i=n[0][0])){if(e){ye();const d=e;M(d.$$.fragment,1,0,()=>{te(d,1)}),we()}i?(e=Q(i,p(n)),x(e.$$.fragment),z(e.$$.fragment,1),ee(e,t.parentNode,t)):e=null}else i&&e.$set(u)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&M(e.$$.fragment,n),o=!1},d(n){n&&H(t),e&&te(e,n)}}}function Yt(a){let e,t,o;var i=a[0][0];function p(n){return{props:{data:n[2],$$slots:{default:[Xt]},$$scope:{ctx:n}}}}return i&&(e=Q(i,p(a))),{c(){e&&x(e.$$.fragment),t=K()},l(n){e&&Ve(e.$$.fragment,n),t=K()},m(n,f){e&&ee(e,n,f),Z(n,t,f),o=!0},p(n,f){const u={};if(f&4&&(u.data=n[2]),f&523&&(u.$$scope={dirty:f,ctx:n}),i!==(i=n[0][0])){if(e){ye();const d=e;M(d.$$.fragment,1,0,()=>{te(d,1)}),we()}i?(e=Q(i,p(n)),x(e.$$.fragment),z(e.$$.fragment,1),ee(e,t.parentNode,t)):e=null}else i&&e.$set(u)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&M(e.$$.fragment,n),o=!1},d(n){n&&H(t),e&&te(e,n)}}}function Xt(a){let e,t,o;var i=a[0][1];function p(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=Q(i,p(a))),{c(){e&&x(e.$$.fragment),t=K()},l(n){e&&Ve(e.$$.fragment,n),t=K()},m(n,f){e&&ee(e,n,f),Z(n,t,f),o=!0},p(n,f){const u={};if(f&8&&(u.data=n[3]),f&2&&(u.form=n[1]),i!==(i=n[0][1])){if(e){ye();const d=e;M(d.$$.fragment,1,0,()=>{te(d,1)}),we()}i?(e=Q(i,p(n)),x(e.$$.fragment),z(e.$$.fragment,1),ee(e,t.parentNode,t)):e=null}else i&&e.$set(u)},i(n){o||(e&&z(e.$$.fragment,n),o=!0)},o(n){e&&M(e.$$.fragment,n),o=!1},d(n){n&&H(t),e&&te(e,n)}}}function st(a){let e,t=a[5]&&it(a);return{c(){e=Et("div"),t&&t.c(),this.h()},l(o){e=kt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=Rt(e);t&&t.l(i),i.forEach(H),this.h()},h(){Oe(e,"id","svelte-announcer"),Oe(e,"aria-live","assertive"),Oe(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(o,i){Z(o,e,i),t&&t.m(e,null)},p(o,i){o[5]?t?t.p(o,i):(t=it(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&H(e),t&&t.d()}}}function it(a){let e;return{c(){e=St(a[6])},l(t){e=Lt(t,a[6])},m(t,o){Z(t,e,o)},p(t,o){o&64&&Ot(e,t[6])},d(t){t&&H(e)}}}function Zt(a){let e,t,o,i,p;const n=[Yt,Wt],f=[];function u(_,y){return _[0][1]?0:1}e=u(a),t=f[e]=n[e](a);let d=a[4]&&st(a);return{c(){t.c(),o=wt(),d&&d.c(),i=K()},l(_){t.l(_),o=bt(_),d&&d.l(_),i=K()},m(_,y){f[e].m(_,y),Z(_,o,y),d&&d.m(_,y),Z(_,i,y),p=!0},p(_,[y]){let L=e;e=u(_),e===L?f[e].p(_,y):(ye(),M(f[L],1,1,()=>{f[L]=null}),we(),t=f[e],t?t.p(_,y):(t=f[e]=n[e](_),t.c()),z(t,1),t.m(o.parentNode,o)),_[4]?d?d.p(_,y):(d=st(_),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(_){p||(z(t),p=!0)},o(_){M(t),p=!1},d(_){f[e].d(_),_&&H(o),d&&d.d(_),_&&H(i)}}}function Qt(a,e,t){let{stores:o}=e,{page:i}=e,{components:p}=e,{form:n}=e,{data_0:f=null}=e,{data_1:u=null}=e;vt(o.page.notify);let d=!1,_=!1,y=null;return Ue(()=>{const L=o.page.subscribe(()=>{d&&(t(5,_=!0),t(6,y=document.title||"untitled page"))});return t(4,d=!0),L}),a.$$set=L=>{"stores"in L&&t(7,o=L.stores),"page"in L&&t(8,i=L.page),"components"in L&&t(0,p=L.components),"form"in L&&t(1,n=L.form),"data_0"in L&&t(2,f=L.data_0),"data_1"in L&&t(3,u=L.data_1)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(i)},[p,n,f,u,d,_,y,o,i]}class xt extends _t{constructor(e){super(),gt(this,e,Qt,Zt,yt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const en="modulepreload",tn=function(a,e){return new URL(a,e).href},lt={},V=function(e,t,o){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(p=>{if(p=tn(p,o),p in lt)return;lt[p]=!0;const n=p.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!o)for(let _=i.length-1;_>=0;_--){const y=i[_];if(y.href===p&&(!n||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${f}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":en,n||(d.as="script",d.crossOrigin=""),d.href=p,document.head.appendChild(d),n)return new Promise((_,y)=>{d.addEventListener("load",_),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})})).then(()=>e())},nn={},ve=[()=>V(()=>import("./chunks/0-383dd199.js"),["./chunks/0-383dd199.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-98aac599.js","./chunks/index-fb3bcbd7.js","./chunks/stores-1d19ff31.js","./chunks/singletons-358b61f9.js","./assets/_layout-b76a555b.css"],import.meta.url),()=>V(()=>import("./chunks/1-c84c45a3.js"),["./chunks/1-c84c45a3.js","./components/error.svelte-e20340d0.js","./chunks/index-fb3bcbd7.js","./chunks/stores-1d19ff31.js","./chunks/singletons-358b61f9.js"],import.meta.url),()=>V(()=>import("./chunks/2-8c5bc1bf.js"),["./chunks/2-8c5bc1bf.js","./components/pages/_page.svelte-da7ebfbd.js","./chunks/index-fb3bcbd7.js","./chunks/meta-2ca000da.js","./assets/_page-558e8c0e.css"],import.meta.url),()=>V(()=>import("./chunks/3-41d9c6ca.js"),["./chunks/3-41d9c6ca.js","./components/pages/candidate/_page.svelte-a3d96b73.js","./chunks/index-fb3bcbd7.js","./chunks/meta-2ca000da.js","./chunks/joinpages-bb0102ec.js","./assets/joinpages-c27f5e21.css","./assets/_page-8767a735.css"],import.meta.url),()=>V(()=>import("./chunks/4-2614046c.js"),["./chunks/4-2614046c.js","./components/pages/mentor/_page.svelte-8190ef00.js","./chunks/index-fb3bcbd7.js","./chunks/meta-2ca000da.js","./chunks/joinpages-bb0102ec.js","./assets/joinpages-c27f5e21.css","./assets/_page-8767a735.css"],import.meta.url),()=>V(()=>import("./chunks/5-8ff55469.js"),["./chunks/5-8ff55469.js","./components/pages/resources/_page.svelte-dc6c055d.js","./chunks/index-fb3bcbd7.js","./chunks/joinpages-bb0102ec.js","./assets/joinpages-c27f5e21.css"],import.meta.url),()=>V(()=>import("./chunks/6-40d099d4.js"),["./chunks/6-40d099d4.js","./components/pages/team/_page.svelte-d25431d6.js","./chunks/index-fb3bcbd7.js","./chunks/joinpages-bb0102ec.js","./assets/joinpages-c27f5e21.css","./assets/_page-9201189b.css"],import.meta.url),()=>V(()=>import("./chunks/7-0e575586.js"),["./chunks/7-0e575586.js","./components/pages/tools/components/_page.svelte-5f54e6ff.js","./chunks/index-fb3bcbd7.js"],import.meta.url),()=>V(()=>import("./chunks/8-dbd281e3.js"),["./chunks/8-dbd281e3.js","./components/pages/tools/design/_page.svelte-af26a7eb.js","./chunks/index-fb3bcbd7.js","./assets/_page-8f51f70e.css"],import.meta.url),()=>V(()=>import("./chunks/9-3f8bd802.js"),["./chunks/9-3f8bd802.js","./components/pages/tools/stats/_page.svelte-418db803.js","./chunks/index-fb3bcbd7.js","./chunks/joinpages-bb0102ec.js","./assets/joinpages-c27f5e21.css"],import.meta.url),()=>V(()=>import("./chunks/10-d9dd3456.js"),["./chunks/10-d9dd3456.js","./components/pages/volunteer/_page.svelte-b60783d8.js","./chunks/index-fb3bcbd7.js","./chunks/meta-2ca000da.js","./chunks/joinpages-bb0102ec.js","./assets/joinpages-c27f5e21.css","./assets/_page-4985e42e.css"],import.meta.url)],an=[],rn={"/":[2],"/candidate":[3],"/mentor":[4],"/resources":[5],"/team":[6],"/tools/components":[7],"/tools/design":[8],"/tools/stats":[9],"/volunteer":[10]},on={handleError:({error:a})=>{console.error(a)}};class $e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ct{constructor(e,t){this.status=e,this.location=t}}function sn(a){return P(this,null,function*(){var e;for(const t in a)if(typeof((e=a[t])==null?void 0:e.then)=="function")return Object.fromEntries(yield Promise.all(Object.entries(a).map(p=>P(this,[p],function*([o,i]){return[o,yield i]}))));return a})}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ln=-1,cn=-2,fn=-3,un=-4,dn=-5,pn=-6;function hn(a){if(typeof a=="number")return o(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,t=Array(e.length);function o(i,p=!1){if(i===ln)return;if(i===fn)return NaN;if(i===un)return 1/0;if(i===dn)return-1/0;if(i===pn)return-0;if(p)throw new Error("Invalid input");if(i in t)return t[i];const n=e[i];if(!n||typeof n!="object")t[i]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":t[i]=new Date(n[1]);break;case"Set":const u=new Set;t[i]=u;for(let y=1;y<n.length;y+=1)u.add(o(n[y]));break;case"Map":const d=new Map;t[i]=d;for(let y=1;y<n.length;y+=2)d.set(o(n[y]),o(n[y+1]));break;case"RegExp":t[i]=new RegExp(n[1],n[2]);break;case"Object":t[i]=Object(n[1]);break;case"BigInt":t[i]=BigInt(n[1]);break;case"null":const _=Object.create(null);t[i]=_;for(let y=1;y<n.length;y+=2)_[n[y]]=o(n[y+1]);break}else{const f=new Array(n.length);t[i]=f;for(let u=0;u<n.length;u+=1){const d=n[u];d!==cn&&(f[u]=o(d))}}else{const f={};t[i]=f;for(const u in n){const d=n[u];f[u]=o(d)}}return t[i]}return o(0)}const Pe=Ht(ve,an,rn,nn),je=ve[0],De=ve[1];je();De();let se={};try{se=JSON.parse(sessionStorage[ut])}catch(a){}function Ne(a){se[a]=ge()}function mn({target:a,base:e}){var Ye;const t=document.documentElement,o=[];let i=null;const p={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,u=!1,d=!0,_=!1,y=!1,L=!1,D=!1,C,$=(Ye=history.state)==null?void 0:Ye[J];$||($=Date.now(),history.replaceState(Y(B({},history.state),{[J]:$}),"",location.href));const Ee=se[$];Ee&&(history.scrollRestoration="manual",scrollTo(Ee.x,Ee.y));let W,qe,ie;function Be(){return P(this,null,function*(){ie=ie||Promise.resolve(),yield ie,ie=null;const r=new URL(location.href),s=fe(r,!0);i=null,yield Ge(s,r,[])})}function ke(v,R,w,E){return P(this,arguments,function*(r,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:m={},invalidateAll:h=!1},g,k){return typeof r=="string"&&(r=new URL(r,nt(document))),ue({url:r,scroll:s?ge():null,keepfocus:l,redirect_chain:g,details:{state:m,replaceState:c},nav_token:k,accepted:()=>{h&&(D=!0)},blocked:()=>{},type:"goto"})})}function Fe(r){return P(this,null,function*(){const s=fe(r,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:s.id,promise:Me(s).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise})}function le(...r){return P(this,null,function*(){const c=Pe.filter(l=>r.some(m=>l.exec(m))).map(l=>Promise.all([...l.layouts,l.leaf].map(m=>m==null?void 0:m[1]())));yield Promise.all(c)})}function Ge(g,k,v,R){return P(this,arguments,function*(r,s,c,l,m={},h){var E,O;qe=m;let w=r&&(yield Me(r));if(w||(w=yield We(s,{id:null},yield re(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(r==null?void 0:r.url)||s,qe!==m)return!1;if(w.type==="redirect")if(c.length>10||c.includes(s.pathname))w=yield ce({status:500,error:yield re(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ke(new URL(w.location,s).href,{},[...c,s.pathname],m),!1;else((O=(E=w.props)==null?void 0:E.page)==null?void 0:O.status)>=400&&(yield X.updated.check())&&(yield de(s));if(o.length=0,D=!1,_=!0,l&&l.details){const{details:T}=l,U=T.replaceState?0:1;T.state[J]=$+=U,history[T.replaceState?"replaceState":"pushState"](T.state,"",s)}if(i=null,u?(n=w.state,w.props.page&&(w.props.page.url=s),C.$set(w.props)):Je(w),l){const{scroll:T,keepfocus:U}=l;if(U||Te(),yield me(),d){const N=s.hash&&document.getElementById(s.hash.slice(1));T?scrollTo(T.x,T.y):N?N.scrollIntoView():scrollTo(0,0)}}else yield me();d=!0,w.props.page&&(W=w.props.page),h&&h(),_=!1})}function Je(r){var l,m;n=r.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),W=r.props.page,C=new xt({target:a,props:Y(B({},r.props),{stores:X}),hydrate:!0});const c={from:null,to:{params:n.params,route:{id:(m=(l=n.route)==null?void 0:l.id)!=null?m:null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(h=>h(c)),u=!0}function ne(k){return P(this,arguments,function*({url:r,params:s,branch:c,status:l,error:m,route:h,form:g}){var U;const v=c.filter(Boolean);let R="never";for(const N of c)(N==null?void 0:N.slash)!==void 0&&(R=N.slash);r.pathname=Nt(r.pathname,R),r.search=r.search;const w={type:"loaded",state:{url:r,params:s,branch:c,error:m,route:h},props:{components:v.map(N=>N.node.component)}};g!==void 0&&(w.props.form=g);let E={},O=!W;for(let N=0;N<v.length;N+=1){const j=v[N];E=B(B({},E),j.data),(O||!n.branch.some(q=>q===j))&&(w.props[`data_${N}`]=E,O=O||Object.keys((U=j.data)!=null?U:{}).length>0)}return O||(O=Object.keys(W.data).length!==Object.keys(E).length),(!n.url||r.href!==n.url.href||n.error!==m||g!==void 0||O)&&(w.props.page={error:m,params:s,route:h,status:l,url:new URL(r),form:g!=null?g:null,data:O?E:W.data}),w})}function Re(g){return P(this,arguments,function*({loader:r,parent:s,url:c,params:l,route:m,server_data_node:h}){var w,E,O,T,U,N,j;let k=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},R=yield r();if((w=R.universal)!=null&&w.load){let q=function(...b){for(const A of b){const{href:S}=new URL(A,c);v.dependencies.add(S)}},I;const pe={route:{get id(){return v.route=!0,m.id}},params:new Proxy(l,{get:(b,A)=>(v.params.add(A),b[A])}),data:(E=h==null?void 0:h.data)!=null?E:null,url:jt(c,()=>{v.url=!0}),fetch(b,A){return P(this,null,function*(){let S;b instanceof Request?(S=b.url,A=B({body:b.method==="GET"||b.method==="HEAD"?void 0:yield b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal},A)):S=b;const F=new URL(S,c).href;return q(F),u?Ft(S,F,A):Bt(S,A)})},setHeaders:()=>{},depends:q,parent(){return v.parent=!0,s()}};k=(O=yield R.universal.load.call(null,pe))!=null?O:null,k=k?yield sn(k):null}return{node:R,loader:r,server:h,universal:(T=R.universal)!=null&&T.load?{type:"data",data:k,uses:v}:null,data:(U=k!=null?k:h==null?void 0:h.data)!=null?U:null,slash:(j=(N=R.universal)==null?void 0:N.trailingSlash)!=null?j:h==null?void 0:h.slash}})}function Ke(r,s,c,l,m){if(D)return!0;if(!l)return!1;if(l.parent&&r||l.route&&s||l.url&&c)return!0;for(const h of l.params)if(m[h]!==n.params[h])return!0;for(const h of l.dependencies)if(o.some(g=>g(new URL(h))))return!0;return!1}function Se(r,s){var c,l;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((c=r.uses.dependencies)!=null?c:[]),params:new Set((l=r.uses.params)!=null?l:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"&&s!=null?s:null}function Me(h){return P(this,arguments,function*({id:r,invalidating:s,url:c,params:l,route:m}){var pe;if((i==null?void 0:i.id)===r)return i.promise;const{errors:g,layouts:k,leaf:v}=m,R=[...k,v];g.forEach(I=>I==null?void 0:I().catch(()=>{})),R.forEach(I=>I==null?void 0:I[1]().catch(()=>{}));let w=null;const E=n.url?r!==n.url.pathname+n.url.search:!1,O=n.route?r!==n.route.id:!1,T=R.reduce((I,b,A)=>{var ae;const S=n.branch[A],F=!!(b!=null&&b[0])&&((S==null?void 0:S.loader)!==b[1]||Ke(I.some(Boolean),O,E,(ae=S.server)==null?void 0:ae.uses,l));return I.push(F),I},[]);if(T.some(Boolean)){try{w=yield ft(c,T)}catch(I){return ce({status:500,error:yield re(I,{url:c,params:l,route:{id:m.id}}),url:c,route:m})}if(w.type==="redirect")return w}const U=w==null?void 0:w.nodes;let N=!1;const j=R.map((I,b)=>P(this,null,function*(){var ae;if(!I)return;const A=n.branch[b],S=U==null?void 0:U[b];if((!S||S.type==="skip")&&I[1]===(A==null?void 0:A.loader)&&!Ke(N,O,E,(ae=A.universal)==null?void 0:ae.uses,l))return A;if(N=!0,(S==null?void 0:S.type)==="error")throw S;return Re({loader:I[1],url:c,params:l,route:m,parent:()=>P(this,null,function*(){var Ze;const Xe={};for(let Le=0;Le<b;Le+=1)Object.assign(Xe,(Ze=yield j[Le])==null?void 0:Ze.data);return Xe}),server_data_node:Se(S===void 0&&I[0]?{type:"skip"}:S!=null?S:null,A==null?void 0:A.server)})}));for(const I of j)I.catch(()=>{});const q=[];for(let I=0;I<R.length;I+=1)if(R[I])try{q.push(yield j[I])}catch(b){if(b instanceof ct)return{type:"redirect",location:b.location};let A=500,S;U!=null&&U.includes(b)?(A=(pe=b.status)!=null?pe:A,S=b.error):b instanceof $e?(A=b.status,S=b.body):S=yield re(b,{params:l,url:c,route:{id:m.id}});const F=yield ze(I,q,g);return F?yield ne({url:c,params:l,branch:q.slice(0,F.idx).concat(F.node),status:A,error:S,route:m}):yield We(c,{id:m.id},S,A)}else q.push(void 0);return yield ne({url:c,params:l,branch:q,status:200,error:null,route:m,form:s?void 0:null})})}function ze(r,s,c){return P(this,null,function*(){for(;r--;)if(c[r]){let l=r;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:yield c[r](),loader:c[r],data:{},server:null,universal:null}}}catch(m){continue}}})}function ce(m){return P(this,arguments,function*({status:r,error:s,url:c,route:l}){var w;const h={},g=yield je();let k=null;if(g.server)try{const E=yield ft(c,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;k=(w=E.nodes[0])!=null?w:null}catch(E){(c.origin!==location.origin||c.pathname!==location.pathname||f)&&(yield de(c))}const v=yield Re({loader:je,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:Se(k)}),R={node:yield De(),loader:De,universal:null,server:null,data:null};return yield ne({url:c,params:h,branch:[v,R],status:r,error:s,route:null})})}function fe(r,s){if(rt(r,e))return;const c=Tt(r.pathname.slice(e.length)||"/");for(const l of Pe){const m=l.exec(c);if(m)return{id:r.pathname+r.search,invalidating:s,route:l,params:Ut(m),url:r}}}function He({url:r,type:s,intent:c,delta:l}){var k,v,R,w,E;let m=!1;const h={from:{params:n.params,route:{id:(v=(k=n.route)==null?void 0:k.id)!=null?v:null},url:n.url},to:{params:(R=c==null?void 0:c.params)!=null?R:null,route:{id:(E=(w=c==null?void 0:c.route)==null?void 0:w.id)!=null?E:null},url:r},willUnload:!c,type:s};l!==void 0&&(h.delta=l);const g=Y(B({},h),{cancel:()=>{m=!0}});return y||p.before_navigate.forEach(O=>O(g)),m?null:h}function ue(w){return P(this,arguments,function*({url:r,scroll:s,keepfocus:c,redirect_chain:l,details:m,type:h,delta:g,nav_token:k,accepted:v,blocked:R}){const E=fe(r,!1),O=He({url:r,type:h,delta:g,intent:E});if(!O){R();return}Ne($),v(),y=!0,u&&X.navigating.set(O),yield Ge(E,r,l,{scroll:s,keepfocus:c,details:m},k,()=>{y=!1,p.after_navigate.forEach(T=>T(O)),X.navigating.set(null)})})}function We(r,s,c,l){return P(this,null,function*(){return r.origin===location.origin&&r.pathname===location.pathname&&!f?yield ce({status:l,error:c,url:r,route:s}):yield de(r)})}function de(r){return location.href=r.href,new Promise(()=>{})}function dt(){let r;t.addEventListener("mousemove",h=>{const g=h.target;clearTimeout(r),r=setTimeout(()=>{l(g,2)},20)});function s(h){l(h.composedPath()[0],1)}t.addEventListener("mousedown",s),t.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(h=>{for(const g of h)g.isIntersecting&&(le(new URL(g.target.href).pathname),c.unobserve(g.target))},{threshold:0});function l(h,g){const k=at(h,t);if(!k)return;const{url:v,external:R}=Ie(k,e);if(R)return;const w=_e(k);w.reload||(g<=w.preload_data?Fe(v):g<=w.preload_code&&le(v.pathname))}function m(){c.disconnect();for(const h of t.querySelectorAll("a")){const{url:g,external:k}=Ie(h,e);if(k)continue;const v=_e(h);v.reload||(v.preload_code===ot.viewport&&c.observe(h),v.preload_code===ot.eager&&le(g.pathname))}}p.after_navigate.push(m),m()}return{after_navigate:r=>{Ue(()=>(p.after_navigate.push(r),()=>{const s=p.after_navigate.indexOf(r);p.after_navigate.splice(s,1)}))},before_navigate:r=>{Ue(()=>(p.before_navigate.push(r),()=>{const s=p.before_navigate.indexOf(r);p.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(_||!u)&&(d=!1)},goto:(r,s={})=>ke(r,s,[]),invalidate:r=>{if(typeof r=="function")o.push(r);else{const{href:s}=new URL(r,location.href);o.push(c=>c.href===s)}return Be()},invalidateAll:()=>(D=!0,Be()),preload_data:r=>P(this,null,function*(){const s=new URL(r,nt(document));yield Fe(s)}),preload_code:le,apply_action:r=>P(this,null,function*(){var s;if(r.type==="error"){const c=new URL(location.href),{branch:l,route:m}=n;if(!m)return;const h=yield ze(n.branch.length,l,m.errors);if(h){const g=yield ne({url:c,params:n.params,branch:l.slice(0,h.idx).concat(h.node),status:(s=r.status)!=null?s:500,error:r.error,route:m});n=g.state,C.$set(g.props),me().then(Te)}}else if(r.type==="redirect")ke(r.location,{invalidateAll:!0},[]);else{const c={form:r.data,page:Y(B({},W),{form:r.data,status:r.status})};C.$set(c),r.type==="success"&&me().then(Te)}}),_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l,m;let c=!1;if(!y){const h={from:{params:n.params,route:{id:(m=(l=n.route)==null?void 0:l.id)!=null?m:null},url:n.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};p.before_navigate.forEach(g=>g(h))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ne($);try{sessionStorage[ut]=JSON.stringify(se)}catch(s){}}}),(r=navigator.connection)!=null&&r.saveData||dt(),t.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=at(s.composedPath()[0],t);if(!c)return;const{url:l,external:m,has:h}=Ie(c,e),g=_e(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(m||g.reload){He({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[v,R]=l.href.split("#");if(R!==void 0&&v===location.href.split("#")[0]){L=!0,Ne($),n.url=l,X.page.set(Y(B({},W),{url:l})),X.page.notify();return}ue({url:l,scroll:g.noscroll?ge():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),t.addEventListener("submit",s=>{var v;if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((v=s.submitter)==null?void 0:v.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(rt(h,e))return;const{noscroll:g,reload:k}=_e(s.target);k||(s.preventDefault(),s.stopPropagation(),h.search=new URLSearchParams(new FormData(s.target)).toString(),ue({url:h,scroll:g?ge():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[J]){if(s.state[J]===$)return;const l=s.state[J]-$;ue({url:new URL(location.href),scroll:se[s.state[J]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=s.state[J]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{L&&(L=!1,history.replaceState(Y(B({},history.state),{[J]:++$}),"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&X.navigating.set(null)})},_hydrate:k=>P(this,[k],function*({status:r=200,error:s,node_ids:c,params:l,route:m,data:h,form:g}){var w;f=!0;const v=new URL(location.href);({params:l={},route:m={id:null}}=fe(v,!1)||{});let R;try{const E=c.map((O,T)=>P(this,null,function*(){const U=h[T];return Re({loader:ve[O],url:v,params:l,route:m,parent:()=>P(this,null,function*(){const N={};for(let j=0;j<T;j+=1)Object.assign(N,(yield E[j]).data);return N}),server_data_node:Se(U)})}));R=yield ne({url:v,params:l,branch:yield Promise.all(E),status:r,error:s,form:g,route:(w=Pe.find(({id:O})=>O===m.id))!=null?w:null})}catch(E){if(E instanceof ct){yield de(new URL(E.location,location.href));return}R=yield ce({status:E instanceof $e?E.status:500,error:yield re(E,{url:v,params:l,route:m}),url:v,route:m})}Je(R)})}}function ft(a,e){return P(this,null,function*(){var p;const t=new URL(a);t.pathname=Ct(a.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(n=>n?"1":"").join("_"));const o=yield be(t.href),i=yield o.json();if(!o.ok)throw new Error(i);return(p=i.nodes)==null||p.forEach(n=>{var f,u;(n==null?void 0:n.type)==="data"&&(n.data=hn(n.data),n.uses={dependencies:new Set((f=n.uses.dependencies)!=null?f:[]),params:new Set((u=n.uses.params)!=null?u:[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),i})}function re(a,e){var t;return a instanceof $e?a.body:(t=on.handleError({error:a,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}function Te(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}function wn(p){return P(this,arguments,function*({env:a,hydrate:e,paths:t,target:o,version:i}){It(t),Pt(i);const n=mn({target:o,base:t.base});At({client:n}),e?yield n._hydrate(e):n.goto(location.href,{replaceState:!0}),n._start_router()})}export{wn as start};
