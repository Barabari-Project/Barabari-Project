import{S as R,i as Y,s as W,k as h,a as D,q as G,l as u,m as v,c as P,r as H,h as f,n as s,C as Z,p as M,b as C,D as r,E as K,B as U,F as ce,G as pe,o as ve,H as se,I as me,w as fe,x as he,y as ue,f as O,t as F,d as _e,J as ge,K as be,L as we,z as de,M as xe,g as Ee}from"../../chunks/index-fb3bcbd7.js";import{p as ke}from"../../chunks/stores-1d19ff31.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=h("a"),n=G(t),o=D(),this.h()},l(l){e=u(l,"A",{href:!0,class:!0});var c=v(e);n=H(c,t),o=P(c),c.forEach(f),this.h()},h(){s(e,"href",i[5].href),s(e,"class","svelte-13m8x08"),se(e,"active",i[5].href===i[1])},m(l,c){C(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&f(e)}}}function ye(i){let e,t,n,o,l,c,m,k,N,$,p,x,A,V,y,T,j,S,I,q,E,z=i[2],d=[];for(let _=0;_<z.length;_+=1)d[_]=re(ne(i,z,_));return{c(){e=h("nav"),t=h("div"),n=h("input"),o=D(),l=h("div"),c=h("a"),m=h("img"),N=G(`
                The Barabari Project`),$=D(),p=h("div"),x=h("label"),A=h("span"),V=D(),y=h("span"),T=D(),j=h("span"),S=D(),I=h("div");for(let _=0;_<d.length;_+=1)d[_].c();this.h()},l(_){e=u(_,"NAV",{class:!0});var g=v(e);t=u(g,"DIV",{class:!0});var a=v(t);n=u(a,"INPUT",{type:!0,id:!0,class:!0}),o=P(a),l=u(a,"DIV",{class:!0});var b=v(l);c=u(b,"A",{href:!0,class:!0});var w=v(c);m=u(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),N=H(w,`
                The Barabari Project`),w.forEach(f),b.forEach(f),$=P(a),p=u(a,"DIV",{class:!0});var X=v(p);x=u(X,"LABEL",{for:!0,class:!0});var B=v(x);A=u(B,"SPAN",{class:!0}),v(A).forEach(f),V=P(B),y=u(B,"SPAN",{class:!0}),v(y).forEach(f),T=P(B),j=u(B,"SPAN",{class:!0}),v(j).forEach(f),B.forEach(f),X.forEach(f),S=P(a),I=u(a,"DIV",{class:!0});var L=v(I);for(let J=0;J<d.length;J+=1)d[J].l(L);L.forEach(f),a.forEach(f),g.forEach(f),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-13m8x08"),s(m,"class","p-rel"),Z(m.src,k="/favicon.png")||s(m,"src",k),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),M(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-b svelte-13m8x08"),s(l,"class","nav-header svelte-13m8x08"),s(A,"class","svelte-13m8x08"),s(y,"class","svelte-13m8x08"),s(j,"class","svelte-13m8x08"),s(x,"for","nav-check"),s(x,"class","svelte-13m8x08"),s(p,"class","nav-btn p-abs svelte-13m8x08"),s(I,"class","nav-links svelte-13m8x08"),s(t,"class","nav wait svelte-13m8x08"),s(e,"class","p-stx mx-a w-100 p-rel svelte-13m8x08")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,N),r(t,$),r(t,p),r(p,x),r(x,A),r(x,V),r(x,y),r(x,T),r(x,j),r(t,S),r(t,I);for(let a=0;a<d.length;a+=1)d[a].m(I,null);q||(E=[K(n,"change",i[4]),K(c,"click",i[3]),K(I,"click",i[3])],q=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){z=_[2];let a;for(a=0;a<z.length;a+=1){const b=ne(_,z,a);d[a]?d[a].p(b,g):(d[a]=re(b),d[a].c(),d[a].m(I,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=z.length}},i:U,o:U,d(_){_&&f(e),ce(d,_),q=!1,pe(E)}}}function $e(i,e,t){let n,o="/";ve(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class Ie extends R{constructor(e){super(),Y(this,e,$e,ye,W,{})}}function Ae(i){let e,t,n,o,l,c,m,k,N,$,p,x;return{c(){e=h("div"),t=h("div"),n=h("span"),o=G("Hi! "),l=h("span"),c=G("👋"),m=G(`,
        `),k=h("span"),N=G("we are"),$=D(),p=h("img"),this.h()},l(A){e=u(A,"DIV",{class:!0,style:!0});var V=v(e);t=u(V,"DIV",{id:!0,class:!0});var y=v(t);n=u(y,"SPAN",{class:!0});var T=v(n);o=H(T,"Hi! "),l=u(T,"SPAN",{id:!0,class:!0});var j=v(l);c=H(j,"👋"),j.forEach(f),T.forEach(f),m=H(y,`,
        `),k=u(y,"SPAN",{class:!0,style:!0});var S=v(k);N=H(S,"we are"),S.forEach(f),y.forEach(f),$=P(V),p=u(V,"IMG",{id:!0,class:!0,src:!0,alt:!0}),V.forEach(f),this.h()},h(){s(l,"id","wave"),s(l,"class","svelte-1bqd0f7"),s(n,"class","svelte-1bqd0f7"),s(k,"class","fade-right o-0 svelte-1bqd0f7"),M(k,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1bqd0f7"),s(p,"id","logo"),s(p,"class","o-0 p-abs svelte-1bqd0f7"),Z(p.src,x="/icons/barabari.png")||s(p,"src",x),s(p,"alt","logo"),s(e,"class","w-100 h-100 fade tc p-rel"),M(e,"color","#222"),M(e,"margin-top","20px")},m(A,V){C(A,e,V),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,k),r(k,N),r(e,$),r(e,p)},p:U,i:U,o:U,d(A){A&&f(e)}}}class Ve extends R{constructor(e){super(),Y(this,e,null,Ae,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new Ve({}),{c(){e=h("div"),fe(t.$$.fragment),this.h()},l(o){e=u(o,"DIV",{class:!0,style:!0});var l=v(e);he(t.$$.fragment,l),l.forEach(f),this.h()},h(){s(e,"class","p-abs hero fade-right svelte-xd3o08"),M(e,"background","#222")},m(o,l){C(o,e,l),ue(t,e,null),n=!0},i(o){n||(O(t.$$.fragment,o),n=!0)},o(o){F(t.$$.fragment,o),n=!1},d(o){o&&f(e),de(t)}}}function ie(i){let e,t,n,o;return{c(){e=h("a"),t=h("img"),o=D(),this.h()},l(l){e=u(l,"A",{href:!0,class:!0});var c=v(e);t=u(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=P(c),c.forEach(f),this.h()},h(){s(t,"class","rx5 icon svelte-xd3o08"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,o)},p:U,d(l){l&&f(e)}}}function De(i){let e,t,n,o,l,c,m,k,N,$,p,x,A,V,y,T,j,S,I,q;t=new Ie({});let E=i[0].url.pathname==="/"&&oe();const z=i[3].default,d=me(z,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=h("main"),fe(t.$$.fragment),n=D(),o=h("style"),l=G(`section {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
        }
        section:not(:first-of-type) {
            overflow: hidden;
        }
        .arrow {
            transform: translateX(-7px) scale(1);
            animation: 1.5s wobble ease infinite;
            background: #fff;
            max-height: 1.42em;
            color: var(--purple);
            padding: 2px 12px;
            border: 1px solid #fff;
            cursor: pointer;
            transition: transform 0.15s ease-in-out;
        }
        .arrow:hover {
            transform: translateX(-7px) scale(1.1);
            border: 1px solid var(--purple);
            color: var(--purple);
        }
        @media (prefers-reduced-motion) {
            .arrow {
                animation: none;
            }
        }`),c=D(),E&&E.c(),m=D(),k=h("div"),d&&d.c(),N=D(),$=h("footer"),p=h("div"),x=h("div"),A=G("The Barabari Project"),V=D(),y=h("div"),T=h("i"),j=G("Universal Access To Quality Jobs"),S=D(),I=h("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=u(a,"MAIN",{class:!0});var b=v(e);he(t.$$.fragment,b),n=P(b),o=u(b,"STYLE",{});var w=v(o);l=H(w,`section {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
        }
        section:not(:first-of-type) {
            overflow: hidden;
        }
        .arrow {
            transform: translateX(-7px) scale(1);
            animation: 1.5s wobble ease infinite;
            background: #fff;
            max-height: 1.42em;
            color: var(--purple);
            padding: 2px 12px;
            border: 1px solid #fff;
            cursor: pointer;
            transition: transform 0.15s ease-in-out;
        }
        .arrow:hover {
            transform: translateX(-7px) scale(1.1);
            border: 1px solid var(--purple);
            color: var(--purple);
        }
        @media (prefers-reduced-motion) {
            .arrow {
                animation: none;
            }
        }`),w.forEach(f),c=P(b),E&&E.l(b),m=P(b),k=u(b,"DIV",{id:!0,style:!0,class:!0});var X=v(k);d&&d.l(X),X.forEach(f),N=P(b),$=u(b,"FOOTER",{class:!0,style:!0});var B=v($);p=u(B,"DIV",{class:!0,style:!0});var L=v(p);x=u(L,"DIV",{class:!0,style:!0});var J=v(x);A=H(J,"The Barabari Project"),J.forEach(f),V=P(L),y=u(L,"DIV",{class:!0,style:!0});var ee=v(y);T=u(ee,"I",{});var te=v(T);j=H(te,"Universal Access To Quality Jobs"),te.forEach(f),ee.forEach(f),S=P(L),I=u(L,"DIV",{class:!0});var ae=v(I);for(let Q=0;Q<g.length;Q+=1)g[Q].l(ae);ae.forEach(f),L.forEach(f),B.forEach(f),b.forEach(f),this.h()},h(){s(k,"id","content"),M(k,"z-index","0"),s(k,"class","svelte-xd3o08"),s(x,"class","fw4"),M(x,"font-size","2rem"),s(y,"class","p10"),M(y,"font-size","1.1em"),s(I,"class","f j-ar"),s(p,"class","mx-a"),M(p,"max-width","300px"),s($,"class","p10 w-100 tc p5"),M($,"background","var(--yellow)"),M($,"font-size","0.8em"),s(e,"class","app p-rel")},m(a,b){C(a,e,b),ue(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),E&&E.m(e,null),r(e,m),r(e,k),d&&d.m(k,null),r(e,N),r(e,$),r($,p),r(p,x),r(x,A),r(p,V),r(p,y),r(y,T),r(T,j),r(p,S),r(p,I);for(let w=0;w<g.length;w+=1)g[w].m(I,null);q=!0},p(a,[b]){if(a[0].url.pathname==="/"?E?b&1&&O(E,1):(E=oe(),E.c(),O(E,1),E.m(e,m)):E&&(Ee(),F(E,1,1,()=>{E=null}),_e()),d&&d.p&&(!q||b&4)&&ge(d,z,a,a[2],q?we(z,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const X=le(a,_,w);g[w]?g[w].p(X,b):(g[w]=ie(X),g[w].c(),g[w].m(I,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){q||(O(t.$$.fragment,a),O(E),O(d,a),q=!0)},o(a){F(t.$$.fragment,a),F(E),F(d,a),q=!1},d(a){a&&f(e),de(t),E&&E.d(),d&&d.d(a),ce(g,a)}}}function Pe(i,e,t){let n;xe(i,ke,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class Ne extends R{constructor(e){super(),Y(this,e,Pe,De,W,{})}}export{Ne as default};
