import{S as L,i as T,s as M,H as P,e as v,a as I,t as N,c as b,b as w,g as z,d as O,f as p,m as k,h as j,j as h,u as E,G as Q,v as q,F as U,k as W,I as R,J as S,K as $,L as X}from"./index.77aeed67.js";const Y=t=>({}),C=t=>({}),Z=t=>({}),F=t=>({}),x=t=>({}),G=t=>({});function J(t){let e,i,a;const u=t[3].desc,o=P(u,t,t[2],G);return{c(){e=v("header"),i=v("div"),o&&o.c(),this.h()},l(l){e=b(l,"HEADER",{class:!0});var _=w(e);i=b(_,"DIV",{class:!0});var g=w(i);o&&o.l(g),g.forEach(p),_.forEach(p),this.h()},h(){k(i,"class","w-100 desc svelte-1p8qrzw"),k(e,"class","p5 tc p-rel bg-222 desc svelte-1p8qrzw")},m(l,_){j(l,e,_),h(e,i),o&&o.m(i,null),a=!0},p(l,_){o&&o.p&&(!a||_&4)&&R(o,u,l,l[2],a?$(u,l[2],_,x):S(l[2]),G)},i(l){a||(E(o,l),a=!0)},o(l){q(o,l),a=!1},d(l){l&&p(e),o&&o.d(l)}}}function K(t){let e;return{c(){e=v("br")},l(i){e=b(i,"BR",{})},m(i,a){j(i,e,a)},d(i){i&&p(e)}}}function ee(t){let e,i,a,u,o,l,_,g,y,m,n=t[1].desc&&J(t),r=!t[1].desc&&K();const V=t[3].body,f=P(V,t,t[2],F),H=t[3].max,d=P(H,t,t[2],C);return{c(){e=v("div"),n&&n.c(),i=I(),a=v("h1"),r&&r.c(),u=I(),o=N(t[0]),l=I(),_=v("div"),f&&f.c(),g=I(),y=v("div"),d&&d.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var c=w(e);n&&n.l(c),i=z(c),a=b(c,"H1",{class:!0});var D=w(a);r&&r.l(D),u=z(D),o=O(D,t[0]),D.forEach(p),l=z(c),_=b(c,"DIV",{class:!0});var A=w(_);f&&f.l(A),A.forEach(p),g=z(c),y=b(c,"DIV",{class:!0});var B=w(y);d&&d.l(B),B.forEach(p),c.forEach(p),this.h()},h(){k(a,"class","m0 p20 bg-fc3 svelte-1p8qrzw"),k(_,"class","limit flow-h mx-a svelte-1p8qrzw"),k(y,"class","mx-a"),k(e,"class","w-100")},m(s,c){j(s,e,c),n&&n.m(e,null),h(e,i),h(e,a),r&&r.m(a,null),h(a,u),h(a,o),h(e,l),h(e,_),f&&f.m(_,null),h(e,g),h(e,y),d&&d.m(y,null),m=!0},p(s,[c]){s[1].desc?n?(n.p(s,c),c&2&&E(n,1)):(n=J(s),n.c(),E(n,1),n.m(e,i)):n&&(Q(),q(n,1,1,()=>{n=null}),U()),s[1].desc?r&&(r.d(1),r=null):r||(r=K(),r.c(),r.m(a,u)),(!m||c&1)&&W(o,s[0]),f&&f.p&&(!m||c&4)&&R(f,V,s,s[2],m?$(V,s[2],c,Z):S(s[2]),F),d&&d.p&&(!m||c&4)&&R(d,H,s,s[2],m?$(H,s[2],c,Y):S(s[2]),C)},i(s){m||(E(n),E(f,s),E(d,s),m=!0)},o(s){q(n),q(f,s),q(d,s),m=!1},d(s){s&&p(e),n&&n.d(),r&&r.d(),f&&f.d(s),d&&d.d(s)}}}function se(t,e,i){let{$$slots:a={},$$scope:u}=e;const o=X(a);let{title:l="Title!"}=e;return t.$$set=_=>{"title"in _&&i(0,l=_.title),"$$scope"in _&&i(2,u=_.$$scope)},[l,o,u,a]}class le extends L{constructor(e){super(),T(this,e,se,ee,M,{title:0})}}export{le as P};