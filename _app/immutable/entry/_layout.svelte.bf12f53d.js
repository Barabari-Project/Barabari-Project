import{S as R,i as Y,s as W,e as u,a as V,t as G,c as d,b as p,g as z,d as H,f,v as s,z as Z,A as J,h as C,j as r,N as K,n as U,B as ce,O as ve,J as pe,P as se,C as me,m as fe,o as he,p as ue,q,r as F,H as _e,D as ge,E as be,F as we,u as de,l as Ee,K as ke}from"../chunks/index.6f362b87.js";import{p as ye}from"../chunks/stores.cebe0d5f.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=u("a"),n=G(t),o=V(),this.h()},l(l){e=d(l,"A",{class:!0,href:!0});var c=p(e);n=H(c,t),o=z(c),c.forEach(f),this.h()},h(){s(e,"class","d-ib svelte-18b4uv9"),s(e,"href",i[5].href),se(e,"active",i[5].href===i[1])},m(l,c){C(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&f(e)}}}function $e(i){let e,t,n,o,l,c,m,y,N,x,v,E,j,A,$,D,P,T,I,S,k,B=i[2],h=[];for(let _=0;_<B.length;_+=1)h[_]=re(ne(i,B,_));return{c(){e=u("nav"),t=u("div"),n=u("input"),o=V(),l=u("div"),c=u("a"),m=u("img"),N=G(`
                The Barabari Project`),x=V(),v=u("div"),E=u("label"),j=u("span"),A=V(),$=u("span"),D=V(),P=u("span"),T=V(),I=u("div");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=d(_,"NAV",{class:!0});var g=p(e);t=d(g,"DIV",{class:!0});var a=p(t);n=d(a,"INPUT",{type:!0,id:!0,class:!0}),o=z(a),l=d(a,"DIV",{class:!0});var b=p(l);c=d(b,"A",{href:!0,class:!0});var w=p(c);m=d(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),N=H(w,`
                The Barabari Project`),w.forEach(f),b.forEach(f),x=z(a),v=d(a,"DIV",{class:!0});var O=p(v);E=d(O,"LABEL",{for:!0,class:!0});var M=p(E);j=d(M,"SPAN",{class:!0}),p(j).forEach(f),A=z(M),$=d(M,"SPAN",{class:!0}),p($).forEach(f),D=z(M),P=d(M,"SPAN",{class:!0}),p(P).forEach(f),M.forEach(f),O.forEach(f),T=z(a),I=d(a,"DIV",{class:!0});var L=p(I);for(let X=0;X<h.length;X+=1)h[X].l(L);L.forEach(f),a.forEach(f),g.forEach(f),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-18b4uv9"),s(m,"class","p-rel"),Z(m.src,y="/favicon.png")||s(m,"src",y),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),J(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-18b4uv9"),s(l,"class","nav-header d-i"),s(j,"class","svelte-18b4uv9"),s($,"class","svelte-18b4uv9"),s(P,"class","svelte-18b4uv9"),s(E,"for","nav-check"),s(E,"class","svelte-18b4uv9"),s(v,"class","nav-btn p-abs svelte-18b4uv9"),s(I,"class","nav-links d-i svelte-18b4uv9"),s(t,"class","nav d-b wait svelte-18b4uv9"),s(e,"class","p-stx z-10 mx-a w-100 p-rel svelte-18b4uv9")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,N),r(t,x),r(t,v),r(v,E),r(E,j),r(E,A),r(E,$),r(E,D),r(E,P),r(t,T),r(t,I);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(I,null);S||(k=[K(n,"change",i[4]),K(c,"click",i[3]),K(I,"click",i[3])],S=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){B=_[2];let a;for(a=0;a<B.length;a+=1){const b=ne(_,B,a);h[a]?h[a].p(b,g):(h[a]=re(b),h[a].c(),h[a].m(I,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=B.length}},i:U,o:U,d(_){_&&f(e),ce(h,_),S=!1,ve(k)}}}function Ie(i,e,t){let n,o="/";pe(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class je extends R{constructor(e){super(),Y(this,e,Ie,$e,W,{})}}function xe(i){let e,t,n,o,l,c,m,y,N,x,v,E;return{c(){e=u("div"),t=u("div"),n=u("span"),o=G("Hi! "),l=u("span"),c=G("👋"),m=G(`,
        `),y=u("span"),N=G("we are"),x=V(),v=u("img"),this.h()},l(j){e=d(j,"DIV",{class:!0,style:!0});var A=p(e);t=d(A,"DIV",{id:!0,class:!0});var $=p(t);n=d($,"SPAN",{class:!0});var D=p(n);o=H(D,"Hi! "),l=d(D,"SPAN",{class:!0,id:!0});var P=p(l);c=H(P,"👋"),P.forEach(f),D.forEach(f),m=H($,`,
        `),y=d($,"SPAN",{class:!0,style:!0});var T=p(y);N=H(T,"we are"),T.forEach(f),$.forEach(f),x=z(A),v=d(A,"IMG",{id:!0,class:!0,src:!0,alt:!0}),A.forEach(f),this.h()},h(){s(l,"class","d-ib svelte-14fjp5n"),s(l,"id","wave"),s(n,"class","svelte-14fjp5n"),s(y,"class","fade-right o-0 svelte-14fjp5n"),J(y,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-14fjp5n"),s(v,"id","logo"),s(v,"class","o-0 p-abs svelte-14fjp5n"),Z(v.src,E="/icons/barabari.png")||s(v,"src",E),s(v,"alt","logo"),s(e,"class","w-100 h-100 fade tc p-rel col-222 bg-222"),J(e,"margin-top","20px")},m(j,A){C(j,e,A),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,y),r(y,N),r(e,x),r(e,v)},p:U,i:U,o:U,d(j){j&&f(e)}}}class Ae extends R{constructor(e){super(),Y(this,e,null,xe,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new Ae({}),{c(){e=u("div"),fe(t.$$.fragment),this.h()},l(o){e=d(o,"DIV",{class:!0});var l=p(e);he(t.$$.fragment,l),l.forEach(f),this.h()},h(){s(e,"class","p-abs hero z-1 fade-right bg-222 svelte-jpz8vo")},m(o,l){C(o,e,l),ue(t,e,null),n=!0},i(o){n||(q(t.$$.fragment,o),n=!0)},o(o){F(t.$$.fragment,o),n=!1},d(o){o&&f(e),de(t)}}}function ie(i){let e,t,n,o;return{c(){e=u("a"),t=u("img"),o=V(),this.h()},l(l){e=d(l,"A",{href:!0,class:!0});var c=p(e);t=d(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=z(c),c.forEach(f),this.h()},h(){s(t,"class","rx5 icon svelte-jpz8vo"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,o)},p:U,d(l){l&&f(e)}}}function Ve(i){let e,t,n,o,l,c,m,y,N,x,v,E,j,A,$,D,P,T,I,S;t=new je({});let k=i[0].url.pathname==="/"&&oe();const B=i[3].default,h=me(B,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=u("main"),fe(t.$$.fragment),n=V(),o=u("style"),l=G(`section {
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
        }`),c=V(),k&&k.c(),m=V(),y=u("div"),h&&h.c(),N=V(),x=u("footer"),v=u("div"),E=u("div"),j=G("The Barabari Project"),A=V(),$=u("div"),D=u("i"),P=G("Universal Access To Quality Jobs"),T=V(),I=u("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=d(a,"MAIN",{class:!0});var b=p(e);he(t.$$.fragment,b),n=z(b),o=d(b,"STYLE",{});var w=p(o);l=H(w,`section {
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
        }`),w.forEach(f),c=z(b),k&&k.l(b),m=z(b),y=d(b,"DIV",{id:!0,class:!0});var O=p(y);h&&h.l(O),O.forEach(f),N=z(b),x=d(b,"FOOTER",{class:!0});var M=p(x);v=d(M,"DIV",{class:!0,style:!0});var L=p(v);E=d(L,"DIV",{class:!0,style:!0});var X=p(E);j=H(X,"The Barabari Project"),X.forEach(f),A=z(L),$=d(L,"DIV",{class:!0,style:!0});var ee=p($);D=d(ee,"I",{});var te=p(D);P=H(te,"Universal Access To Quality Jobs"),te.forEach(f),ee.forEach(f),T=z(L),I=d(L,"DIV",{class:!0});var ae=p(I);for(let Q=0;Q<g.length;Q+=1)g[Q].l(ae);ae.forEach(f),L.forEach(f),M.forEach(f),b.forEach(f),this.h()},h(){s(y,"id","content"),s(y,"class","z-1 svelte-jpz8vo"),s(E,"class","fw4"),J(E,"font-size","2rem"),s($,"class","p10"),J($,"font-size","1.1em"),s(I,"class","f j-ar"),s(v,"class","mx-a"),J(v,"max-width","300px"),s(x,"class","p10 w-100 tc svelte-jpz8vo"),s(e,"class","app p-rel flow-x-h")},m(a,b){C(a,e,b),ue(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),k&&k.m(e,null),r(e,m),r(e,y),h&&h.m(y,null),r(e,N),r(e,x),r(x,v),r(v,E),r(E,j),r(v,A),r(v,$),r($,D),r(D,P),r(v,T),r(v,I);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m(I,null);S=!0},p(a,[b]){if(a[0].url.pathname==="/"?k?b&1&&q(k,1):(k=oe(),k.c(),q(k,1),k.m(e,m)):k&&(ke(),F(k,1,1,()=>{k=null}),_e()),h&&h.p&&(!S||b&4)&&ge(h,B,a,a[2],S?we(B,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const O=le(a,_,w);g[w]?g[w].p(O,b):(g[w]=ie(O),g[w].c(),g[w].m(I,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){S||(q(t.$$.fragment,a),q(k),q(h,a),S=!0)},o(a){F(t.$$.fragment,a),F(k),F(h,a),S=!1},d(a){a&&f(e),de(t),k&&k.d(),h&&h.d(a),ce(g,a)}}}function ze(i,e,t){let n;Ee(i,ye,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class Ne extends R{constructor(e){super(),Y(this,e,ze,Ve,W,{})}}export{Ne as default};
