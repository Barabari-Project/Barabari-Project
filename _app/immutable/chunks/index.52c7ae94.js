function y(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function T(){return Object.create(null)}function x(t){t.forEach(D)}function A(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function at(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(I(e,n))}function dt(t,e,n,r){if(t){const i=L(t,e,n,r);return t[0](i)}}function L(t,e,n,r){return t[1]&&r?R(n.ctx.slice(),t[1](r(e))):n.ctx}function _t(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],l=Math.max(e.dirty.length,i.length);for(let s=0;s<l;s+=1)o[s]=e.dirty[s]|i[s];return o}return e.dirty|i}return e.dirty}function ht(t,e,n,r,i,o){if(i){const l=L(e,n,r,o);t.p(l,i)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function pt(t){return t&&A(t.destroy)?t.destroy:y}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:Q(1,i,b=>e[n[b]].claim_order,u))-1;r[c]=n[f]+1;const a=f+1;n[a]=c,i=Math.max(a,i)}const o=[],l=[];let s=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(o.push(e[c-1]);s>=c;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);o.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<o.length&&l[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(l[c],f)}}function V(t,e){if(v){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){v&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function xt(){return j(" ")}function bt(){return j("")}function $t(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function wt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,r,i=!1){tt(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const c=n(s);return c===void 0?t.splice(l,1):t[l]=c,i||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const c=n(s);return c===void 0?t.splice(l,1):t[l]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function B(t,e,n,r){return O(t,i=>i.nodeName===e,i=>{const o=[];for(let l=0;l<i.attributes.length;l++){const s=i.attributes[l];n[s.name]||o.push(s.name)}o.forEach(l=>i.removeAttribute(l))},()=>r(e))}function Et(t,e,n){return B(t,e,n,X)}function Nt(t,e,n){return B(t,e,n,Y)}function et(t,e){return O(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function St(t){return et(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e){t.value=e==null?"":e}function Ct(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Mt(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function kt(t,e){return new t(e)}let g;function p(t){g=t}function H(){if(!g)throw new Error("Function called outside component initialization");return g}function qt(t){H().$$.on_mount.push(t)}function Dt(t){H().$$.after_update.push(t)}const h=[],k=[];let m=[];const q=[],P=Promise.resolve();let N=!1;function z(){N||(N=!0,P.then(F))}function Lt(){return z(),P}function S(t){m.push(t)}const E=new Set;let _=0;function F(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;k.length;)k.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;q.length;)q.pop()();N=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function rt(t){const e=[],n=[];m.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),m=e}const w=new Set;let d;function Ot(){d={r:0,c:[],p:d}}function Bt(){d.r||x(d.c),d=d.p}function it(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Ht(t,e,n,r){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const lt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...lt];function Pt(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function ct(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||S(()=>{const l=t.$$.on_mount.map(D).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...l):x(l),t.$$.on_mount=[]}),o.forEach(S)}function ut(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,r,i,o,l,s=[-1]){const c=g;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:T(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,b,...C)=>{const M=C.length?C[0]:b;return u.ctx&&i(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&st(t,a)),b}):[],u.update(),f=!0,x(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){J();const a=Z(e.target);u.fragment&&u.fragment.l(a),a.forEach(W)}else u.fragment&&u.fragment.c();e.intro&&it(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),K(),F()}p(c)}class Rt{$destroy(){ut(this,1),this.$destroy=y}$on(e,n){if(!A(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ut as B,at as C,V as D,$t as E,y as F,gt as G,x as H,Mt as I,dt as J,ht as K,mt as L,_t as M,ft as N,S as O,Y as P,Tt as Q,Nt as R,Rt as S,pt as T,jt as U,wt as V,xt as a,yt as b,St as c,Ht as d,bt as e,Bt as f,it as g,W as h,Ft as i,Dt as j,X as k,Et as l,Z as m,vt as n,qt as o,Ct as p,j as q,et as r,ot as s,Lt as t,At as u,Ot as v,k as w,kt as x,Pt as y,zt as z};
