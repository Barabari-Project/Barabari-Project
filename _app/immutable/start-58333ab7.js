import{S as Ye,i as Xe,s as Ze,a as Qe,e as V,c as xe,b as M,g as pe,t as F,d as de,f as J,h as G,j as et,o as Re,k as tt,l as nt,m as rt,n as ve,p as B,q as at,r as st,u as ot,v as Y,w as X,x as Ie,y as Z,z as Q,A as Ve}from"./chunks/index-a4411d4c.js";import{g as Fe,f as Je,s as z,a as Se,b as it,i as lt}from"./chunks/singletons-34fcff66.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const n=new URL(r);for(const s of ut){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return dt(n),n}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ht="/__data.json";function mt(r){return r.replace(/\/$/,"")+ht}function gt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ue.delete(s)}return he(r,e)};const ue=new Map;function _t(r,e,n){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(i+=`[data-hash="${gt(n.body)}"]`);const l=document.querySelector(i);if(l!=null&&l.textContent){const{body:t,...u}=JSON.parse(l.textContent),_=l.getAttribute("data-ttl");return _&&ue.set(e,{body:t,init:u,ttl:1e3*Number(_)}),Promise.resolve(new Response(t,u))}return he(r,n)}function yt(r,e){const n=ue.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);ue.delete(r)}return he(r,e)}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(r){const e=[],n=[],s=[];let i=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${kt(r).map((t,u,_)=>{const p=decodeURIComponent(t),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(m)return e.push(m[1]),n.push(m[2]),s.push(!1),"(?:/(.*))?";const y=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(p);if(y)return e.push(y[1]),n.push(y[2]),s.push(!0),"(?:/([^/]+))?";const S=u===_.length-1;return p?"/"+p.split(/\[(.+?)\](?!\])/).map((T,D)=>{if(D%2){const q=wt.exec(T);if(!q)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,K,ae,x,se]=q;return e.push(x),n.push(se),s.push(!!K),ae?"(.*?)":K?"([^/]*)?":"([^/]+?)"}return S&&T.includes(".")&&(i=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${i?"/?":""}$`),names:e,types:n,optional:s}}function vt(r){return!/^\([^)]+\)$/.test(r)}function kt(r){return r.slice(1).split("/").filter(vt)}function Et(r,{names:e,types:n,optional:s},i){const l={};for(let t=0;t<e.length;t+=1){const u=e[t],_=n[t];let p=r[t+1];if(p||!s[t]){if(_){const m=i[_];if(!m)throw new Error(`Missing "${_}" param matcher`);if(!m(p))return}l[u]=p!=null?p:""}}return l}function Rt(r,e,n,s){const i=new Set(e);return Object.entries(n).map(([u,[_,p,m]])=>{const{pattern:y,names:S,types:U,optional:H}=bt(u),T={id:u,exec:D=>{const q=y.exec(D);if(q)return Et(q,{names:S,types:U,optional:H},s)},errors:[1,...m||[]].map(D=>r[D]),layouts:[0,...p||[]].map(t),leaf:l(_)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function l(u){const _=u<0;return _&&(u=~u),[_,r[u]]}function t(u){return u===void 0?u:[i.has(u),r[u]]}}function St(r){let e,n,s;var i=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),n=V()},l(t){e&&Ie(e.$$.fragment,t),n=V()},m(t,u){e&&Z(e,t,u),M(t,n,u),s=!0},p(t,u){const _={};if(u&4&&(_.data=t[2]),u&2&&(_.form=t[1]),i!==(i=t[0][0])){if(e){pe();const p=e;F(p.$$.fragment,1,0,()=>{Q(p,1)}),de()}i?(e=Y(i,l(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Ot(r){let e,n,s;var i=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[$t]},$$scope:{ctx:t}}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),n=V()},l(t){e&&Ie(e.$$.fragment,t),n=V()},m(t,u){e&&Z(e,t,u),M(t,n,u),s=!0},p(t,u){const _={};if(u&4&&(_.data=t[2]),u&523&&(_.$$scope={dirty:u,ctx:t}),i!==(i=t[0][0])){if(e){pe();const p=e;F(p.$$.fragment,1,0,()=>{Q(p,1)}),de()}i?(e=Y(i,l(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Q(e,t)}}}function $t(r){let e,n,s;var i=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),n=V()},l(t){e&&Ie(e.$$.fragment,t),n=V()},m(t,u){e&&Z(e,t,u),M(t,n,u),s=!0},p(t,u){const _={};if(u&8&&(_.data=t[3]),u&2&&(_.form=t[1]),i!==(i=t[0][1])){if(e){pe();const p=e;F(p.$$.fragment,1,0,()=>{Q(p,1)}),de()}i?(e=Y(i,l(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Ge(r){let e,n=r[5]&&Ke(r);return{c(){e=tt("div"),n&&n.c(),this.h()},l(s){e=nt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=rt(e);n&&n.l(i),i.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,i){M(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=Ke(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function Ke(r){let e;return{c(){e=at(r[6])},l(n){e=st(n,r[6])},m(n,s){M(n,e,s)},p(n,s){s&64&&ot(e,n[6])},d(n){n&&G(e)}}}function Lt(r){let e,n,s,i,l;const t=[Ot,St],u=[];function _(m,y){return m[0][1]?0:1}e=_(r),n=u[e]=t[e](r);let p=r[4]&&Ge(r);return{c(){n.c(),s=Qe(),p&&p.c(),i=V()},l(m){n.l(m),s=xe(m),p&&p.l(m),i=V()},m(m,y){u[e].m(m,y),M(m,s,y),p&&p.m(m,y),M(m,i,y),l=!0},p(m,[y]){let S=e;e=_(m),e===S?u[e].p(m,y):(pe(),F(u[S],1,1,()=>{u[S]=null}),de(),n=u[e],n?n.p(m,y):(n=u[e]=t[e](m),n.c()),J(n,1),n.m(s.parentNode,s)),m[4]?p?p.p(m,y):(p=Ge(m),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null)},i(m){l||(J(n),l=!0)},o(m){F(n),l=!1},d(m){u[e].d(m),m&&G(s),p&&p.d(m),m&&G(i)}}}function It(r,e,n){let{stores:s}=e,{page:i}=e,{components:l}=e,{form:t}=e,{data_0:u=null}=e,{data_1:_=null}=e;et(s.page.notify);let p=!1,m=!1,y=null;return Re(()=>{const S=s.page.subscribe(()=>{p&&(n(5,m=!0),n(6,y=document.title||"untitled page"))});return n(4,p=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,i=S.page),"components"in S&&n(0,l=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,u=S.data_0),"data_1"in S&&n(3,_=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[l,t,u,_,p,m,y,s,i]}class jt extends Ye{constructor(e){super(),Xe(this,e,It,Lt,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const At=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Nt=function(r,e){return new URL(r,e).href},ze={},ke=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Nt(l,s),l in ze)return;ze[l]=!0;const t=l.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let m=i.length-1;m>=0;m--){const y=i[m];if(y.href===l&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":At,t||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),t)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Pt={},me=[()=>ke(()=>import("./chunks/0-c09fc356.js"),["./chunks/0-c09fc356.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-128b2b64.js","./chunks/index-a4411d4c.js","./assets/_layout-997706f3.css"],import.meta.url),()=>ke(()=>import("./chunks/1-a3604be7.js"),["./chunks/1-a3604be7.js","./components/error.svelte-b9dc4f7b.js","./chunks/index-a4411d4c.js","./chunks/singletons-34fcff66.js"],import.meta.url),()=>ke(()=>import("./chunks/2-a32284c6.js"),["./chunks/2-a32284c6.js","./components/pages/_page.svelte-e1384e0b.js","./chunks/index-a4411d4c.js","./assets/_page-2ca4bd63.css"],import.meta.url)],Ut=[],Tt={"/":[2]},Dt={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,n){this.status=e,this.location=n}}async function Bt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,i])=>[s,await i])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const qt=-1,Ct=-2,Vt=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){const e=JSON.parse(r);if(typeof e=="number")return i(e);const n=e,s=Array(n.length);function i(l){if(l===qt)return;if(l===Vt)return NaN;if(l===Ft)return 1/0;if(l===Jt)return-1/0;if(l===Gt)return-0;if(l in s)return s[l];const t=n[l];if(!t||typeof t!="object")s[l]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":s[l]=new Date(t[1]);break;case"Set":const _=new Set;s[l]=_;for(let y=1;y<t.length;y+=1)_.add(i(t[y]));break;case"Map":const p=new Map;s[l]=p;for(let y=1;y<t.length;y+=2)p.set(i(t[y]),i(t[y+1]));break;case"RegExp":s[l]=new RegExp(t[1],t[2]);break;case"Object":s[l]=Object(t[1]);break;case"BigInt":s[l]=BigInt(t[1]);break;case"null":const m=Object.create(null);s[l]=m;for(let y=1;y<t.length;y+=2)m[t[y]]=i(t[y+1]);break}else{const u=new Array(t.length);s[l]=u;for(let _=0;_<t.length;_+=1){const p=t[_];p!==Ct&&(u[_]=i(p))}}else{const u={};s[l]=u;for(const _ in t){const p=t[_];u[_]=i(p)}}return s[l]}return i(0)}const We="sveltekit:scroll",C="sveltekit:index",le=Rt(me,Ut,Tt,Pt),$e=me[0],Le=me[1];$e();Le();let re={};try{re=JSON.parse(sessionStorage[We])}catch{}function Ee(r){re[r]=Se()}function zt({target:r,base:e,trailing_slash:n}){var Be;const s=[];let i=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,_=!1,p=!0,m=!1,y=!1,S,U=(Be=history.state)==null?void 0:Be[C];U||(U=Date.now(),history.replaceState({...history.state,[C]:U},"",location.href));const H=re[U];H&&(history.scrollRestoration="manual",scrollTo(H.x,H.y));let T=!1,D,q,K;async function ae(){K=K||Promise.resolve(),await K,K=null;const a=new URL(location.href),f=ye(a,!0);i=null,await je(f,a,[])}async function x(a,{noscroll:f=!1,replaceState:d=!1,keepfocus:o=!1,state:c={},invalidateAll:h=!1},g,k){return typeof a=="string"&&(a=new URL(a,Fe(document))),we({url:a,scroll:f?Se():null,keepfocus:o,redirect_chain:g,details:{state:c,replaceState:d},nav_token:k,accepted:()=>{h&&(y=!0)},blocked:()=>{},type:"goto"})}async function se(a){const f=ye(a,!1);if(!f)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return i={id:f.id,promise:Pe(f)},i.promise}async function je(a,f,d,o,c={},h){var k,E;q=c;let g=a&&await Pe(a);if(g||(g=await De(f,null,ne(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,q!==c)return!1;if(g.type==="redirect")if(d.length>10||d.includes(f.pathname))g=await oe({status:500,error:ne(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return x(new URL(g.location,f).href,{},[...d,f.pathname],c),!1;else((E=(k=g.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await z.updated.check()&&await ie(f);if(s.length=0,y=!1,m=!0,o&&o.details){const{details:b}=o,v=b.replaceState?0:1;b.state[C]=U+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",f)}if(i=null,_){t=g.state,g.props.page&&(g.props.page.url=f);const b=fe();S.$set(g.props),b()}else Ae(g);if(o){const{scroll:b,keepfocus:v}=o;if(!v){const O=document.body,L=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),L!==null?O.setAttribute("tabindex",L):O.removeAttribute("tabindex")}if(await Ve(),p){const O=f.hash&&document.getElementById(f.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ve();p=!0,g.props.page&&(D=g.props.page),h&&h(),m=!1}function Ae(a){var c,h;t=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),D=a.props.page;const d=fe();S=new jt({target:r,props:{...a.props,stores:z},hydrate:!0}),d();const o={from:null,to:ce("to",{params:t.params,routeId:(h=(c=t.route)==null?void 0:c.id)!=null?h:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(g=>g(o)),_=!0}async function ee({url:a,params:f,branch:d,status:o,error:c,route:h,form:g}){var L;const k=d.filter(Boolean),E={type:"loaded",state:{url:a,params:f,branch:d,error:c,route:h},props:{components:k.map(I=>I.node.component)}};g!==void 0&&(E.props.form=g);let b={},v=!D;for(let I=0;I<k.length;I+=1){const N=k[I];b={...b,...N.data},(v||!t.branch.some(P=>P===N))&&(E.props[`data_${I}`]=b,v=v||Object.keys((L=N.data)!=null?L:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!t.url||a.href!==t.url.href||t.error!==c||g!==void 0||v){E.props.page={error:c,params:f,routeId:h&&h.id,status:o,url:a,form:g,data:v?b:D.data};const I=(N,P)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return E}async function ge({loader:a,parent:f,url:d,params:o,routeId:c,server_data_node:h}){var b,v,O,L,I;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let N=function(...$){for(const w of $){const{href:R}=new URL(w,d);k.dependencies.add(R)}};const P={routeId:c,params:new Proxy(o,{get:($,w)=>(k.params.add(w),$[w])}),data:(v=h==null?void 0:h.data)!=null?v:null,url:pt(d,()=>{k.url=!0}),async fetch($,w){let R;$ instanceof Request?(R=$.url,w={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...w}):R=$;const A=new URL(R,d).href;return N(A),_?yt(A,w):_t(R,A,w)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,f()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(O=await E.shared.load.call(null,P))!=null?O:null,g=g?await Bt(g):null}return{node:E,loader:a,server:h,shared:(L=E.shared)!=null&&L.load?{type:"data",data:g,uses:k}:null,data:(I=g!=null?g:h==null?void 0:h.data)!=null?I:null}}function Ne(a,f,d,o){if(y)return!0;if(!d)return!1;if(d.parent&&f||d.url&&a)return!0;for(const c of d.params)if(o[c]!==t.params[c])return!0;for(const c of d.dependencies)if(s.some(h=>h(new URL(c))))return!0;return!1}function _e(a,f){var d,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Pe({id:a,invalidating:f,url:d,params:o,route:c}){var $;if((i==null?void 0:i.id)===a)return i.promise;const{errors:h,layouts:g,leaf:k}=c,E=[...g,k];h.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=t.url?a!==t.url.pathname+t.url.search:!1,O=E.reduce((w,R,A)=>{var te;const j=t.branch[A],W=!!(R!=null&&R[0])&&((j==null?void 0:j.loader)!==R[1]||Ne(v,w.some(Boolean),(te=j.server)==null?void 0:te.uses,o));return w.push(W),w},[]);if(O.some(Boolean)){try{b=await He(d,O)}catch(w){return oe({status:500,error:ne(w,{url:d,params:o,routeId:c.id}),url:d,routeId:c.id})}if(b.type==="redirect")return b}const L=b==null?void 0:b.nodes;let I=!1;const N=E.map(async(w,R)=>{var te;if(!w)return;const A=t.branch[R],j=L==null?void 0:L[R];if((!j||j.type==="skip")&&w[1]===(A==null?void 0:A.loader)&&!Ne(v,I,(te=A.shared)==null?void 0:te.uses,o))return A;if(I=!0,(j==null?void 0:j.type)==="error")throw j;return ge({loader:w[1],url:d,params:o,routeId:c.id,parent:async()=>{var Ce;const qe={};for(let be=0;be<R;be+=1)Object.assign(qe,(Ce=await N[be])==null?void 0:Ce.data);return qe},server_data_node:_e(j===void 0&&w[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const w of N)w.catch(()=>{});const P=[];for(let w=0;w<E.length;w+=1)if(E[w])try{P.push(await N[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let A=500,j;L!=null&&L.includes(R)?(A=($=R.status)!=null?$:A,j=R.error):R instanceof Oe?(A=R.status,j=R.body):j=ne(R,{params:o,url:d,routeId:c.id});const W=await Ue(w,P,h);return W?await ee({url:d,params:o,branch:P.slice(0,W.idx).concat(W.node),status:A,error:j,route:c}):await De(d,c.id,j,A)}else P.push(void 0);return await ee({url:d,params:o,branch:P,status:200,error:null,route:c,form:f?void 0:null})}async function Ue(a,f,d){for(;a--;)if(d[a]){let o=a;for(;!f[o];)o-=1;try{return{idx:o+1,node:{node:await d[a](),loader:d[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:f,url:d,routeId:o}){var b;const c={},h=await $e();let g=null;if(h.server)try{const v=await He(d,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||u)&&await ie(d)}const k=await ge({loader:$e,url:d,params:c,routeId:o,parent:()=>Promise.resolve({}),server_data_node:_e(g)}),E={node:await Le(),loader:Le,shared:null,server:null,data:null};return await ee({url:d,params:c,branch:[k,E],status:a,error:f,route:null})}function ye(a,f){if(Te(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const o of le){const c=o.exec(d);if(c){const h=new URL(a.origin+ct(a.pathname,n)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:f,route:o,params:ft(c),url:h}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function we({url:a,scroll:f,keepfocus:d,redirect_chain:o,details:c,type:h,delta:g,nav_token:k,accepted:E,blocked:b}){var N,P,$,w;let v=!1;const O=ye(a,!1),L={from:ce("from",{params:t.params,routeId:(P=(N=t.route)==null?void 0:N.id)!=null?P:null,url:t.url}),to:ce("to",{params:($=O==null?void 0:O.params)!=null?$:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:a}),type:h};g!==void 0&&(L.delta=g);const I={...L,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R(I)),v){b();return}Ee(U),E(),_&&z.navigating.set(L),await je(O,a,o,{scroll:f,keepfocus:d,details:c},k,()=>{l.after_navigate.forEach(R=>R(L)),z.navigating.set(null)})}async function De(a,f,d,o){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await oe({status:o,error:d,url:a,routeId:f}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(l.after_navigate.push(a),()=>{const f=l.after_navigate.indexOf(a);l.after_navigate.splice(f,1)}))},before_navigate:a=>{Re(()=>(l.before_navigate.push(a),()=>{const f=l.before_navigate.indexOf(a);l.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(m||!_)&&(p=!1)},goto:(a,f={})=>x(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:f}=new URL(a,location.href);s.push(d=>d.href===f)}return ae()},invalidateAll:()=>(y=!0,ae()),prefetch:async a=>{const f=new URL(a,Fe(document));await se(f)},prefetch_routes:async a=>{const d=(a?le.filter(o=>a.some(c=>o.exec(c))):le).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:d,route:o}=t;if(!o)return;const c=await Ue(t.branch.length,d,o.errors);if(c){const h=await ee({url:f,params:t.params,branch:d.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:o});t=h.state;const g=fe();S.$set(h.props),g()}}else if(a.type==="redirect")x(a.location,{invalidateAll:!0},[]);else{const f={form:a.data,page:{...D,form:a.data,status:a.status}},d=fe();S.$set(f),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var g,k;let c=!1;const h={from:ce("from",{params:t.params,routeId:(k=(g=t.route)==null?void 0:g.id)!=null?k:null,url:t.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(E=>E(h)),c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(U);try{sessionStorage[We]=JSON.stringify(re)}catch{}}});const a=o=>{const{url:c,options:h}=Je(o);if(c&&h.prefetch){if(Te(c))return;se(c)}};let f;const d=o=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:c,url:h,options:g}=Je(o);if(!c||!h)return;const k=c instanceof SVGAElement;if(!k&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||g.reload||(k?c.target.baseVal:c.target))return;const[b,v]=h.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){T=!0,Ee(U),t.url=h,z.page.set({...D,url:h}),z.page.notify();return}we({url:h,scroll:g.noscroll?Se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[C]===U)return;const c=o.state[C]-U;we({url:new URL(location.href),scroll:re[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=o.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[C]:++U},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:d,params:o,routeId:c,data:h,form:g})=>{var b;u=!0;const k=new URL(location.href);let E;try{const v=d.map(async(O,L)=>{const I=h[L];return ge({loader:me[O],url:k,params:o,routeId:c,parent:async()=>{const N={};for(let P=0;P<L;P+=1)Object.assign(N,(await v[P]).data);return N},server_data_node:_e(I)})});E=await ee({url:k,params:o,branch:await Promise.all(v),status:a,error:f,form:g,route:(b=le.find(O=>O.id===c))!=null?b:null})}catch(v){if(v instanceof Me){await ie(new URL(v.location,location.href));return}E=await oe({status:v instanceof Oe?v.status:500,error:ne(v,{url:k,params:o,routeId:c}),url:k,routeId:c})}Ae(E)}}}async function He(r,e){const n=new URL(r);n.pathname=mt(r.pathname);const s=await he(n.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),i=await s.text();if(!s.ok)throw new Error(JSON.parse(i));return Kt(i)}function ne(r,e){var n;return r instanceof Oe?r.body:(n=Dt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Mt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const n of Mt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function fe(){return()=>{}}async function Yt({env:r,hydrate:e,paths:n,target:s,trailing_slash:i}){it(n);const l=zt({target:s,base:n.base,trailing_slash:i});lt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Yt as start};
