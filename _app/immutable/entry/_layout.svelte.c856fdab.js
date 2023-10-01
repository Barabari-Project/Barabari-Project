import{S as R,i as Y,s as W,e as d,a as D,t as G,c as u,b as v,g as V,d as L,f,m as s,z as Z,A as O,h as F,j as r,B as Q,n as C,C as ce,Q as ve,O as fe,D as se,H as me,o as he,q as de,r as ue,u as U,v as J,F as _e,I as ge,J as be,K as we,w as pe,l as Ee,G as xe}from"../chunks/index.77aeed67.js";import{p as ke}from"../chunks/stores.3d963d63.js";import{c as ye}from"../chunks/state.2c52226e.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=d("a"),n=G(t),o=D(),this.h()},l(l){e=u(l,"A",{class:!0,href:!0});var c=v(e);n=L(c,t),o=V(c),c.forEach(f),this.h()},h(){s(e,"class","d-ib svelte-1rfp1dj"),s(e,"href",i[5].href),se(e,"active",i[5].href===i[1])},m(l,c){F(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&f(e)}}}function $e(i){let e,t,n,o,l,c,m,k,P,I,p,E,j,A,y,q,T,N,$,z,x,S=i[2],h=[];for(let _=0;_<S.length;_+=1)h[_]=re(ne(i,S,_));return{c(){e=d("nav"),t=d("div"),n=d("input"),o=D(),l=d("div"),c=d("a"),m=d("img"),P=G(`
                The Barabari Project`),I=D(),p=d("div"),E=d("label"),j=d("span"),A=D(),y=d("span"),q=D(),T=d("span"),N=D(),$=d("div");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=u(_,"NAV",{class:!0,style:!0});var g=v(e);t=u(g,"DIV",{class:!0});var a=v(t);n=u(a,"INPUT",{type:!0,id:!0,class:!0}),o=V(a),l=u(a,"DIV",{class:!0});var b=v(l);c=u(b,"A",{href:!0,class:!0});var w=v(c);m=u(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),P=L(w,`
                The Barabari Project`),w.forEach(f),b.forEach(f),I=V(a),p=u(a,"DIV",{class:!0});var H=v(p);E=u(H,"LABEL",{for:!0,class:!0});var B=v(E);j=u(B,"SPAN",{class:!0}),v(j).forEach(f),A=V(B),y=u(B,"SPAN",{class:!0}),v(y).forEach(f),q=V(B),T=u(B,"SPAN",{class:!0}),v(T).forEach(f),B.forEach(f),H.forEach(f),N=V(a),$=u(a,"DIV",{class:!0});var M=v($);for(let X=0;X<h.length;X+=1)h[X].l(M);M.forEach(f),a.forEach(f),g.forEach(f),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1rfp1dj"),s(m,"class","p-rel"),Z(m.src,k="/favicon.png")||s(m,"src",k),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),O(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-1rfp1dj"),s(l,"class","nav-header d-i"),s(j,"class","svelte-1rfp1dj"),s(y,"class","svelte-1rfp1dj"),s(T,"class","svelte-1rfp1dj"),s(E,"for","nav-check"),s(E,"class","svelte-1rfp1dj"),s(p,"class","nav-btn p-abs svelte-1rfp1dj"),s($,"class","nav-links d-i svelte-1rfp1dj"),s(t,"class","nav d-b wait svelte-1rfp1dj"),s(e,"class","p-stx mx-a w-100 p-rel svelte-1rfp1dj"),O(e,"z-index","10")},m(_,g){F(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,P),r(t,I),r(t,p),r(p,E),r(E,j),r(E,A),r(E,y),r(E,q),r(E,T),r(t,N),r(t,$);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m($,null);z||(x=[Q(n,"change",i[4]),Q(c,"click",i[3]),Q($,"click",i[3])],z=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){S=_[2];let a;for(a=0;a<S.length;a+=1){const b=ne(_,S,a);h[a]?h[a].p(b,g):(h[a]=re(b),h[a].c(),h[a].m($,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=S.length}},i:C,o:C,d(_){_&&f(e),ce(h,_),z=!1,ve(x)}}}function je(i,e,t){let n,o="/";fe(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"},{name:"Donate",href:"/donate"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class Ie extends R{constructor(e){super(),Y(this,e,je,$e,W,{})}}function Ae(i){let e,t,n,o,l,c,m,k,P,I,p,E;return{c(){e=d("div"),t=d("div"),n=d("span"),o=G("Hi! "),l=d("span"),c=G("👋"),m=G(`,
        `),k=d("span"),P=G("we are"),I=D(),p=d("img"),this.h()},l(j){e=u(j,"DIV",{class:!0});var A=v(e);t=u(A,"DIV",{id:!0,class:!0});var y=v(t);n=u(y,"SPAN",{class:!0});var q=v(n);o=L(q,"Hi! "),l=u(q,"SPAN",{class:!0,id:!0});var T=v(l);c=L(T,"👋"),T.forEach(f),q.forEach(f),m=L(y,`,
        `),k=u(y,"SPAN",{class:!0,style:!0});var N=v(k);P=L(N,"we are"),N.forEach(f),y.forEach(f),I=V(A),p=u(A,"IMG",{id:!0,class:!0,src:!0,alt:!0}),A.forEach(f),this.h()},h(){s(l,"class","d-ib svelte-1aex39q"),s(l,"id","wave"),s(n,"class","svelte-1aex39q"),s(k,"class","fade-right o-0 svelte-1aex39q"),O(k,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1aex39q"),s(p,"id","logo"),s(p,"class","o-0 p-abs svelte-1aex39q"),Z(p.src,E="/icons/barabari.png")||s(p,"src",E),s(p,"alt","logo"),s(e,"class","cont bg-222 w-100 h-100 fade tc p-rel svelte-1aex39q")},m(j,A){F(j,e,A),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,k),r(k,P),r(e,I),r(e,p)},p:C,i:C,o:C,d(j){j&&f(e)}}}class De extends R{constructor(e){super(),Y(this,e,null,Ae,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new De({}),{c(){e=d("div"),he(t.$$.fragment),this.h()},l(o){e=u(o,"DIV",{class:!0,style:!0});var l=v(e);de(t.$$.fragment,l),l.forEach(f),this.h()},h(){s(e,"class","p-abs hero flow-h fade-right svelte-qhxw8a"),O(e,"z-index","1")},m(o,l){F(o,e,l),ue(t,e,null),n=!0},i(o){n||(U(t.$$.fragment,o),n=!0)},o(o){J(t.$$.fragment,o),n=!1},d(o){o&&f(e),pe(t)}}}function ie(i){let e,t,n,o;return{c(){e=d("a"),t=d("img"),o=D(),this.h()},l(l){e=u(l,"A",{href:!0,class:!0});var c=v(e);t=u(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=V(c),c.forEach(f),this.h()},h(){s(t,"class","rx5 icon svelte-qhxw8a"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){F(l,e,c),r(e,t),r(e,o)},p:C,d(l){l&&f(e)}}}function Ve(i){let e,t,n,o,l,c,m,k,P,I,p,E,j,A,y,q,T,N,$,z;t=new Ie({});let x=i[0].url.pathname==="/"&&oe();const S=i[3].default,h=me(S,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=d("main"),he(t.$$.fragment),n=D(),o=d("style"),l=G(`section {
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
        }`),c=D(),x&&x.c(),m=D(),k=d("div"),h&&h.c(),P=D(),I=d("footer"),p=d("div"),E=d("div"),j=G("The Barabari Project"),A=D(),y=d("div"),q=d("i"),T=G("Universal Access To Tech Education"),N=D(),$=d("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=u(a,"MAIN",{class:!0});var b=v(e);de(t.$$.fragment,b),n=V(b),o=u(b,"STYLE",{});var w=v(o);l=L(w,`section {
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
        }`),w.forEach(f),c=V(b),x&&x.l(b),m=V(b),k=u(b,"DIV",{id:!0,style:!0,class:!0});var H=v(k);h&&h.l(H),H.forEach(f),P=V(b),I=u(b,"FOOTER",{class:!0});var B=v(I);p=u(B,"DIV",{class:!0,style:!0});var M=v(p);E=u(M,"DIV",{class:!0,style:!0});var X=v(E);j=L(X,"The Barabari Project"),X.forEach(f),A=V(M),y=u(M,"DIV",{class:!0,style:!0});var ee=v(y);q=u(ee,"I",{});var te=v(q);T=L(te,"Universal Access To Tech Education"),te.forEach(f),ee.forEach(f),N=V(M),$=u(M,"DIV",{class:!0});var ae=v($);for(let K=0;K<g.length;K+=1)g[K].l(ae);ae.forEach(f),M.forEach(f),B.forEach(f),b.forEach(f),this.h()},h(){s(k,"id","content"),O(k,"z-index","1"),s(k,"class","svelte-qhxw8a"),s(E,"class","fw4"),O(E,"font-size","2rem"),s(y,"class","p10"),O(y,"font-size","1.1em"),s($,"class","f j-ar"),s(p,"class","mx-a"),O(p,"max-width","300px"),s(I,"class","p10 w-100 tc bg-fc3 svelte-qhxw8a"),s(e,"class","app p-rel flow-x-h")},m(a,b){F(a,e,b),ue(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),x&&x.m(e,null),r(e,m),r(e,k),h&&h.m(k,null),r(e,P),r(e,I),r(I,p),r(p,E),r(E,j),r(p,A),r(p,y),r(y,q),r(q,T),r(p,N),r(p,$);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m($,null);z=!0},p(a,[b]){if(a[0].url.pathname==="/"?x?b&1&&U(x,1):(x=oe(),x.c(),U(x,1),x.m(e,m)):x&&(xe(),J(x,1,1,()=>{x=null}),_e()),h&&h.p&&(!z||b&4)&&ge(h,S,a,a[2],z?we(S,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const H=le(a,_,w);g[w]?g[w].p(H,b):(g[w]=ie(H),g[w].c(),g[w].m($,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){z||(U(t.$$.fragment,a),U(x),U(h,a),z=!0)},o(a){J(t.$$.fragment,a),J(x),J(h,a),z=!1},d(a){a&&f(e),pe(t),x&&x.d(),h&&h.d(a),ce(g,a)}}}function qe(i,e,t){let n;Ee(i,ke,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return fe(ye),i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class ze extends R{constructor(e){super(),Y(this,e,qe,Ve,W,{})}}export{ze as default};
