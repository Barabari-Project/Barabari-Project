import{S as R,i as Y,s as W,k as u,a as V,q as G,l as h,m as v,c as D,r as H,h as f,n as s,C as Z,p as q,b as C,D as r,E as K,B as U,F as ce,G as pe,o as ve,H as se,I as me,w as fe,x as ue,y as he,f as O,t as F,d as _e,J as ge,K as be,L as we,z as de,M as Ee,g as ke}from"../../chunks/index-fb3bcbd7.js";import{p as xe}from"../../chunks/stores-1d19ff31.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=u("a"),n=G(t),o=V(),this.h()},l(l){e=h(l,"A",{class:!0,href:!0});var c=v(e);n=H(c,t),o=D(c),c.forEach(f),this.h()},h(){s(e,"class","d-ib svelte-1upo9vx"),s(e,"href",i[5].href),se(e,"active",i[5].href===i[1])},m(l,c){C(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&f(e)}}}function ye(i){let e,t,n,o,l,c,m,x,z,$,p,E,j,A,y,P,T,N,I,M,k,S=i[2],d=[];for(let _=0;_<S.length;_+=1)d[_]=re(ne(i,S,_));return{c(){e=u("nav"),t=u("div"),n=u("input"),o=V(),l=u("div"),c=u("a"),m=u("img"),z=G(`
                The Barabari Project`),$=V(),p=u("div"),E=u("label"),j=u("span"),A=V(),y=u("span"),P=V(),T=u("span"),N=V(),I=u("div");for(let _=0;_<d.length;_+=1)d[_].c();this.h()},l(_){e=h(_,"NAV",{class:!0});var g=v(e);t=h(g,"DIV",{class:!0});var a=v(t);n=h(a,"INPUT",{type:!0,id:!0,class:!0}),o=D(a),l=h(a,"DIV",{class:!0});var b=v(l);c=h(b,"A",{href:!0,class:!0});var w=v(c);m=h(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),z=H(w,`
                The Barabari Project`),w.forEach(f),b.forEach(f),$=D(a),p=h(a,"DIV",{class:!0});var X=v(p);E=h(X,"LABEL",{for:!0,class:!0});var B=v(E);j=h(B,"SPAN",{class:!0}),v(j).forEach(f),A=D(B),y=h(B,"SPAN",{class:!0}),v(y).forEach(f),P=D(B),T=h(B,"SPAN",{class:!0}),v(T).forEach(f),B.forEach(f),X.forEach(f),N=D(a),I=h(a,"DIV",{class:!0});var L=v(I);for(let J=0;J<d.length;J+=1)d[J].l(L);L.forEach(f),a.forEach(f),g.forEach(f),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1upo9vx"),s(m,"class","p-rel"),Z(m.src,x="/favicon.png")||s(m,"src",x),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),q(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-1upo9vx"),s(l,"class","nav-header d-i"),s(j,"class","svelte-1upo9vx"),s(y,"class","svelte-1upo9vx"),s(T,"class","svelte-1upo9vx"),s(E,"for","nav-check"),s(E,"class","svelte-1upo9vx"),s(p,"class","nav-btn p-abs svelte-1upo9vx"),s(I,"class","nav-links d-i svelte-1upo9vx"),s(t,"class","nav d-b wait svelte-1upo9vx"),s(e,"class","p-stx z-10 mx-a w-100 p-rel svelte-1upo9vx")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,z),r(t,$),r(t,p),r(p,E),r(E,j),r(E,A),r(E,y),r(E,P),r(E,T),r(t,N),r(t,I);for(let a=0;a<d.length;a+=1)d[a].m(I,null);M||(k=[K(n,"change",i[4]),K(c,"click",i[3]),K(I,"click",i[3])],M=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){S=_[2];let a;for(a=0;a<S.length;a+=1){const b=ne(_,S,a);d[a]?d[a].p(b,g):(d[a]=re(b),d[a].c(),d[a].m(I,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=S.length}},i:U,o:U,d(_){_&&f(e),ce(d,_),M=!1,pe(k)}}}function $e(i,e,t){let n,o="/";ve(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class Ie extends R{constructor(e){super(),Y(this,e,$e,ye,W,{})}}function je(i){let e,t,n,o,l,c,m,x,z,$,p,E;return{c(){e=u("div"),t=u("div"),n=u("span"),o=G("Hi! "),l=u("span"),c=G("👋"),m=G(`,
        `),x=u("span"),z=G("we are"),$=V(),p=u("img"),this.h()},l(j){e=h(j,"DIV",{class:!0,style:!0});var A=v(e);t=h(A,"DIV",{id:!0,class:!0});var y=v(t);n=h(y,"SPAN",{class:!0});var P=v(n);o=H(P,"Hi! "),l=h(P,"SPAN",{class:!0,id:!0});var T=v(l);c=H(T,"👋"),T.forEach(f),P.forEach(f),m=H(y,`,
        `),x=h(y,"SPAN",{class:!0,style:!0});var N=v(x);z=H(N,"we are"),N.forEach(f),y.forEach(f),$=D(A),p=h(A,"IMG",{id:!0,class:!0,src:!0,alt:!0}),A.forEach(f),this.h()},h(){s(l,"class","d-ib svelte-14fjp5n"),s(l,"id","wave"),s(n,"class","svelte-14fjp5n"),s(x,"class","fade-right o-0 svelte-14fjp5n"),q(x,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-14fjp5n"),s(p,"id","logo"),s(p,"class","o-0 p-abs svelte-14fjp5n"),Z(p.src,E="/icons/barabari.png")||s(p,"src",E),s(p,"alt","logo"),s(e,"class","w-100 h-100 fade tc p-rel col-222 bg-222"),q(e,"margin-top","20px")},m(j,A){C(j,e,A),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,x),r(x,z),r(e,$),r(e,p)},p:U,i:U,o:U,d(j){j&&f(e)}}}class Ae extends R{constructor(e){super(),Y(this,e,null,je,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new Ae({}),{c(){e=u("div"),fe(t.$$.fragment),this.h()},l(o){e=h(o,"DIV",{class:!0});var l=v(e);ue(t.$$.fragment,l),l.forEach(f),this.h()},h(){s(e,"class","p-abs hero z-1 fade-right bg-222 svelte-f5tg0c")},m(o,l){C(o,e,l),he(t,e,null),n=!0},i(o){n||(O(t.$$.fragment,o),n=!0)},o(o){F(t.$$.fragment,o),n=!1},d(o){o&&f(e),de(t)}}}function ie(i){let e,t,n,o;return{c(){e=u("a"),t=u("img"),o=V(),this.h()},l(l){e=h(l,"A",{href:!0,class:!0});var c=v(e);t=h(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=D(c),c.forEach(f),this.h()},h(){s(t,"class","rx5 icon svelte-f5tg0c"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,o)},p:U,d(l){l&&f(e)}}}function Ve(i){let e,t,n,o,l,c,m,x,z,$,p,E,j,A,y,P,T,N,I,M;t=new Ie({});let k=i[0].url.pathname==="/"&&oe();const S=i[3].default,d=me(S,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=u("main"),fe(t.$$.fragment),n=V(),o=u("style"),l=G(`section {
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
        }`),c=V(),k&&k.c(),m=V(),x=u("div"),d&&d.c(),z=V(),$=u("footer"),p=u("div"),E=u("div"),j=G("The Barabari Project"),A=V(),y=u("div"),P=u("i"),T=G("Universal Access To Quality Jobs"),N=V(),I=u("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=h(a,"MAIN",{class:!0});var b=v(e);ue(t.$$.fragment,b),n=D(b),o=h(b,"STYLE",{});var w=v(o);l=H(w,`section {
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
        }`),w.forEach(f),c=D(b),k&&k.l(b),m=D(b),x=h(b,"DIV",{id:!0,class:!0});var X=v(x);d&&d.l(X),X.forEach(f),z=D(b),$=h(b,"FOOTER",{class:!0,style:!0});var B=v($);p=h(B,"DIV",{class:!0,style:!0});var L=v(p);E=h(L,"DIV",{class:!0,style:!0});var J=v(E);j=H(J,"The Barabari Project"),J.forEach(f),A=D(L),y=h(L,"DIV",{class:!0,style:!0});var ee=v(y);P=h(ee,"I",{});var te=v(P);T=H(te,"Universal Access To Quality Jobs"),te.forEach(f),ee.forEach(f),N=D(L),I=h(L,"DIV",{class:!0});var ae=v(I);for(let Q=0;Q<g.length;Q+=1)g[Q].l(ae);ae.forEach(f),L.forEach(f),B.forEach(f),b.forEach(f),this.h()},h(){s(x,"id","content"),s(x,"class","z-1 svelte-f5tg0c"),s(E,"class","fw4"),q(E,"font-size","2rem"),s(y,"class","p10"),q(y,"font-size","1.1em"),s(I,"class","f j-ar"),s(p,"class","mx-a"),q(p,"max-width","300px"),s($,"class","p10 w-100 tc p5"),q($,"background","var(--yellow)"),q($,"font-size","0.8em"),s(e,"class","app p-rel")},m(a,b){C(a,e,b),he(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),k&&k.m(e,null),r(e,m),r(e,x),d&&d.m(x,null),r(e,z),r(e,$),r($,p),r(p,E),r(E,j),r(p,A),r(p,y),r(y,P),r(P,T),r(p,N),r(p,I);for(let w=0;w<g.length;w+=1)g[w].m(I,null);M=!0},p(a,[b]){if(a[0].url.pathname==="/"?k?b&1&&O(k,1):(k=oe(),k.c(),O(k,1),k.m(e,m)):k&&(ke(),F(k,1,1,()=>{k=null}),_e()),d&&d.p&&(!M||b&4)&&ge(d,S,a,a[2],M?we(S,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const X=le(a,_,w);g[w]?g[w].p(X,b):(g[w]=ie(X),g[w].c(),g[w].m(I,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){M||(O(t.$$.fragment,a),O(k),O(d,a),M=!0)},o(a){F(t.$$.fragment,a),F(k),F(d,a),M=!1},d(a){a&&f(e),de(t),k&&k.d(),d&&d.d(a),ce(g,a)}}}function De(i,e,t){let n;Ee(i,xe,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class ze extends R{constructor(e){super(),Y(this,e,De,Ve,W,{})}}export{ze as default};
