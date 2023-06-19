import{S as R,i as Y,s as W,e as u,a as V,t as G,c as p,b as v,g as D,d as H,f,v as s,z as Z,A as X,h as C,j as r,N as K,n as U,B as ce,O as de,J as ve,P as se,C as me,m as fe,o as he,p as ue,q as J,r as F,H as _e,D as ge,E as be,F as we,u as pe,l as Ee,K as ke}from"../chunks/index.6f362b87.js";import{p as ye}from"../chunks/stores.36380045.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=u("a"),n=G(t),o=V(),this.h()},l(l){e=p(l,"A",{class:!0,href:!0});var c=v(e);n=H(c,t),o=D(c),c.forEach(f),this.h()},h(){s(e,"class","d-ib svelte-1pw93bp"),s(e,"href",i[5].href),se(e,"active",i[5].href===i[1])},m(l,c){C(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&f(e)}}}function $e(i){let e,t,n,o,l,c,m,y,T,I,d,E,j,A,$,P,N,z,x,S,k,B=i[2],h=[];for(let _=0;_<B.length;_+=1)h[_]=re(ne(i,B,_));return{c(){e=u("nav"),t=u("div"),n=u("input"),o=V(),l=u("div"),c=u("a"),m=u("img"),T=G(`
                The Barabari Project`),I=V(),d=u("div"),E=u("label"),j=u("span"),A=V(),$=u("span"),P=V(),N=u("span"),z=V(),x=u("div");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=p(_,"NAV",{class:!0});var g=v(e);t=p(g,"DIV",{class:!0});var a=v(t);n=p(a,"INPUT",{type:!0,id:!0,class:!0}),o=D(a),l=p(a,"DIV",{class:!0});var b=v(l);c=p(b,"A",{href:!0,class:!0});var w=v(c);m=p(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),T=H(w,`
                The Barabari Project`),w.forEach(f),b.forEach(f),I=D(a),d=p(a,"DIV",{class:!0});var O=v(d);E=p(O,"LABEL",{for:!0,class:!0});var M=v(E);j=p(M,"SPAN",{class:!0}),v(j).forEach(f),A=D(M),$=p(M,"SPAN",{class:!0}),v($).forEach(f),P=D(M),N=p(M,"SPAN",{class:!0}),v(N).forEach(f),M.forEach(f),O.forEach(f),z=D(a),x=p(a,"DIV",{class:!0});var L=v(x);for(let q=0;q<h.length;q+=1)h[q].l(L);L.forEach(f),a.forEach(f),g.forEach(f),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1pw93bp"),s(m,"class","p-rel"),Z(m.src,y="/favicon.png")||s(m,"src",y),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),X(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-1pw93bp"),s(l,"class","nav-header d-i"),s(j,"class","svelte-1pw93bp"),s($,"class","svelte-1pw93bp"),s(N,"class","svelte-1pw93bp"),s(E,"for","nav-check"),s(E,"class","svelte-1pw93bp"),s(d,"class","nav-btn p-abs svelte-1pw93bp"),s(x,"class","nav-links d-i svelte-1pw93bp"),s(t,"class","nav d-b wait svelte-1pw93bp"),s(e,"class","p-stx z-10 mx-a w-100 p-rel svelte-1pw93bp")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,T),r(t,I),r(t,d),r(d,E),r(E,j),r(E,A),r(E,$),r(E,P),r(E,N),r(t,z),r(t,x);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(x,null);S||(k=[K(n,"change",i[4]),K(c,"click",i[3]),K(x,"click",i[3])],S=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){B=_[2];let a;for(a=0;a<B.length;a+=1){const b=ne(_,B,a);h[a]?h[a].p(b,g):(h[a]=re(b),h[a].c(),h[a].m(x,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=B.length}},i:U,o:U,d(_){_&&f(e),ce(h,_),S=!1,de(k)}}}function Ie(i,e,t){let n,o="/";ve(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class xe extends R{constructor(e){super(),Y(this,e,Ie,$e,W,{})}}function je(i){let e,t,n,o,l,c,m,y,T,I,d,E;return{c(){e=u("div"),t=u("div"),n=u("span"),o=G("Hi! "),l=u("span"),c=G("👋"),m=G(`,
        `),y=u("span"),T=G("we are"),I=V(),d=u("img"),this.h()},l(j){e=p(j,"DIV",{class:!0,style:!0});var A=v(e);t=p(A,"DIV",{id:!0,class:!0});var $=v(t);n=p($,"SPAN",{class:!0});var P=v(n);o=H(P,"Hi! "),l=p(P,"SPAN",{class:!0,id:!0});var N=v(l);c=H(N,"👋"),N.forEach(f),P.forEach(f),m=H($,`,
        `),y=p($,"SPAN",{class:!0,style:!0});var z=v(y);T=H(z,"we are"),z.forEach(f),$.forEach(f),I=D(A),d=p(A,"IMG",{id:!0,class:!0,src:!0,alt:!0}),A.forEach(f),this.h()},h(){s(l,"class","d-ib svelte-14fjp5n"),s(l,"id","wave"),s(n,"class","svelte-14fjp5n"),s(y,"class","fade-right o-0 svelte-14fjp5n"),X(y,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-14fjp5n"),s(d,"id","logo"),s(d,"class","o-0 p-abs svelte-14fjp5n"),Z(d.src,E="/icons/barabari.png")||s(d,"src",E),s(d,"alt","logo"),s(e,"class","w-100 h-100 fade tc p-rel col-222 bg-222"),X(e,"margin-top","20px")},m(j,A){C(j,e,A),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,y),r(y,T),r(e,I),r(e,d)},p:U,i:U,o:U,d(j){j&&f(e)}}}class Ae extends R{constructor(e){super(),Y(this,e,null,je,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new Ae({}),{c(){e=u("div"),fe(t.$$.fragment),this.h()},l(o){e=p(o,"DIV",{class:!0});var l=v(e);he(t.$$.fragment,l),l.forEach(f),this.h()},h(){s(e,"class","p-abs hero z-1 fade-right bg-222 svelte-f5tg0c")},m(o,l){C(o,e,l),ue(t,e,null),n=!0},i(o){n||(J(t.$$.fragment,o),n=!0)},o(o){F(t.$$.fragment,o),n=!1},d(o){o&&f(e),pe(t)}}}function ie(i){let e,t,n,o;return{c(){e=u("a"),t=u("img"),o=V(),this.h()},l(l){e=p(l,"A",{href:!0,class:!0});var c=v(e);t=p(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=D(c),c.forEach(f),this.h()},h(){s(t,"class","rx5 icon svelte-f5tg0c"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,o)},p:U,d(l){l&&f(e)}}}function Ve(i){let e,t,n,o,l,c,m,y,T,I,d,E,j,A,$,P,N,z,x,S;t=new xe({});let k=i[0].url.pathname==="/"&&oe();const B=i[3].default,h=me(B,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=u("main"),fe(t.$$.fragment),n=V(),o=u("style"),l=G(`section {
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
        }`),c=V(),k&&k.c(),m=V(),y=u("div"),h&&h.c(),T=V(),I=u("footer"),d=u("div"),E=u("div"),j=G("The Barabari Project"),A=V(),$=u("div"),P=u("i"),N=G("Universal Access To Quality Jobs"),z=V(),x=u("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=p(a,"MAIN",{class:!0});var b=v(e);he(t.$$.fragment,b),n=D(b),o=p(b,"STYLE",{});var w=v(o);l=H(w,`section {
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
        }`),w.forEach(f),c=D(b),k&&k.l(b),m=D(b),y=p(b,"DIV",{id:!0,class:!0});var O=v(y);h&&h.l(O),O.forEach(f),T=D(b),I=p(b,"FOOTER",{class:!0,style:!0});var M=v(I);d=p(M,"DIV",{class:!0,style:!0});var L=v(d);E=p(L,"DIV",{class:!0,style:!0});var q=v(E);j=H(q,"The Barabari Project"),q.forEach(f),A=D(L),$=p(L,"DIV",{class:!0,style:!0});var ee=v($);P=p(ee,"I",{});var te=v(P);N=H(te,"Universal Access To Quality Jobs"),te.forEach(f),ee.forEach(f),z=D(L),x=p(L,"DIV",{class:!0});var ae=v(x);for(let Q=0;Q<g.length;Q+=1)g[Q].l(ae);ae.forEach(f),L.forEach(f),M.forEach(f),b.forEach(f),this.h()},h(){s(y,"id","content"),s(y,"class","z-1 svelte-f5tg0c"),s(E,"class","fw4"),X(E,"font-size","2rem"),s($,"class","p10"),X($,"font-size","1.1em"),s(x,"class","f j-ar"),s(d,"class","mx-a"),X(d,"max-width","300px"),s(I,"class","p10 w-100 tc p5"),X(I,"background","var(--yellow)"),X(I,"font-size","0.8em"),s(e,"class","app p-rel")},m(a,b){C(a,e,b),ue(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),k&&k.m(e,null),r(e,m),r(e,y),h&&h.m(y,null),r(e,T),r(e,I),r(I,d),r(d,E),r(E,j),r(d,A),r(d,$),r($,P),r(P,N),r(d,z),r(d,x);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m(x,null);S=!0},p(a,[b]){if(a[0].url.pathname==="/"?k?b&1&&J(k,1):(k=oe(),k.c(),J(k,1),k.m(e,m)):k&&(ke(),F(k,1,1,()=>{k=null}),_e()),h&&h.p&&(!S||b&4)&&ge(h,B,a,a[2],S?we(B,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const O=le(a,_,w);g[w]?g[w].p(O,b):(g[w]=ie(O),g[w].c(),g[w].m(x,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){S||(J(t.$$.fragment,a),J(k),J(h,a),S=!0)},o(a){F(t.$$.fragment,a),F(k),F(h,a),S=!1},d(a){a&&f(e),pe(t),k&&k.d(),h&&h.d(a),ce(g,a)}}}function De(i,e,t){let n;Ee(i,ye,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class Te extends R{constructor(e){super(),Y(this,e,De,Ve,W,{})}}export{Te as default};
