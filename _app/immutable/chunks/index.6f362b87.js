function y(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(L)}function S(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function ot(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(I(e,n))}function ft(t,e,n,r){if(t){const i=O(t,e,n,r);return t[0](i)}}function O(t,e,n,r){return t[1]&&r?R(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|i[l];return o}return e.dirty|i}return e.dirty}function _t(t,e,n,r,i,o){if(i){const c=O(e,n,r,o);t.p(c,i)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function mt(t){return t&&S(t.destroy)?t.destroy:y}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let u=0;u<e.length;u++){const s=e[u].claim_order,f=(i>0&&e[n[i]].claim_order<=s?i+1:Q(1,i,b=>e[n[b]].claim_order,s))-1;r[u]=n[f]+1;const a=f+1;n[a]=u,i=Math.max(a,i)}const o=[],c=[];let l=e.length-1;for(let u=n[i]+1;u!=0;u=r[u-1]){for(o.push(e[u-1]);l>=u;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<o.length&&c[u].claim_order>=o[s].claim_order;)s++;const f=s<o.length?o[s]:null;t.insertBefore(c[u],f)}}function U(t,e){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function gt(){return j(" ")}function xt(){return j("")}function bt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,r,i=!1){tt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const u=n(l);return u===void 0?t.splice(c,1):t[c]=u,i||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const u=n(l);return u===void 0?t.splice(c,1):t[c]=u,i?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function B(t,e,n,r){return q(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const l=i.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function wt(t,e,n){return B(t,e,n,X)}function Et(t,e,n){return B(t,e,n,Y)}function et(t,e){return q(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function vt(t){return et(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function St(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Ct(t,e){return new t(e)}let g;function p(t){g=t}function H(){if(!g)throw new Error("Function called outside component initialization");return g}function Tt(t){H().$$.on_mount.push(t)}function Mt(t){H().$$.after_update.push(t)}const h=[],k=[];let m=[];const D=[],P=Promise.resolve();let N=!1;function z(){N||(N=!0,P.then(F))}function kt(){return z(),P}function A(t){m.push(t)}const v=new Set;let _=0;function F(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;k.length;)k.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;D.length;)D.pop()();N=!1,v.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function rt(t){const e=[],n=[];m.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),m=e}const w=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Lt(){d.r||x(d.c),d=d.p}function it(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Ot(t,e,n,r){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function qt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function ct(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||A(()=>{const c=t.$$.on_mount.map(L).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(A)}function ut(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,r,i,o,c,l=[-1]){const u=g;p(t);const s=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,b,...C)=>{const T=C.length?C[0]:b;return s.ctx&&i(s.ctx[a],s.ctx[a]=T)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](T),f&&st(t,a)),b}):[],s.update(),f=!0,x(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){J();const a=Z(e.target);s.fragment&&s.fragment.l(a),a.forEach(V)}else s.fragment&&s.fragment.c();e.intro&&it(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),K(),F()}p(u)}class Pt{$destroy(){ut(this,1),this.$destroy=y}$on(e,n){if(!S(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{At as A,yt as B,ft as C,_t as D,ht as E,dt as F,xt as G,Lt as H,Mt as I,Tt as J,Dt as K,k as L,Ct as M,bt as N,x as O,St as P,mt as Q,A as R,Pt as S,kt as T,gt as a,Z as b,wt as c,et as d,X as e,V as f,vt as g,pt as h,Ht as i,U as j,Nt as k,at as l,qt as m,y as n,Bt as o,ct as p,it as q,Ot as r,lt as s,j as t,ut as u,$t as v,jt as w,Y as x,Et as y,ot as z};
