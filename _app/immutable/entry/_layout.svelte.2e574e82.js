import{S as R,i as Y,s as W,e as f,a as D,t as L,c as d,b as p,g as P,d as G,f as h,v as s,z as Z,A as O,h as C,j as r,N as K,n as U,B as ce,O as ve,J as pe,P as se,C as me,m as he,o as ue,p as fe,q as J,r as F,H as _e,D as ge,E as be,F as we,u as de,l as Ee,K as ke}from"../chunks/index.6f362b87.js";import{p as ye}from"../chunks/stores.2bd7b634.js";function ne(o,e,t){const n=o.slice();return n[5]=e[t],n}function re(o){let e,t=o[5].name+"",n,i;return{c(){e=f("a"),n=L(t),i=D(),this.h()},l(l){e=d(l,"A",{class:!0,href:!0});var c=p(e);n=G(c,t),i=P(c),c.forEach(h),this.h()},h(){s(e,"class","d-ib svelte-18b4uv9"),s(e,"href",o[5].href),se(e,"active",o[5].href===o[1])},m(l,c){C(l,e,c),r(e,n),r(e,i)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&h(e)}}}function xe(o){let e,t,n,i,l,c,m,y,T,A,v,E,I,V,x,j,N,q,$,z,k,S=o[2],u=[];for(let _=0;_<S.length;_+=1)u[_]=re(ne(o,S,_));return{c(){e=f("nav"),t=f("div"),n=f("input"),i=D(),l=f("div"),c=f("a"),m=f("img"),T=L(`
                The Barabari Project`),A=D(),v=f("div"),E=f("label"),I=f("span"),V=D(),x=f("span"),j=D(),N=f("span"),q=D(),$=f("div");for(let _=0;_<u.length;_+=1)u[_].c();this.h()},l(_){e=d(_,"NAV",{class:!0,style:!0});var g=p(e);t=d(g,"DIV",{class:!0});var a=p(t);n=d(a,"INPUT",{type:!0,id:!0,class:!0}),i=P(a),l=d(a,"DIV",{class:!0});var b=p(l);c=d(b,"A",{href:!0,class:!0});var w=p(c);m=d(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),T=G(w,`
                The Barabari Project`),w.forEach(h),b.forEach(h),A=P(a),v=d(a,"DIV",{class:!0});var H=p(v);E=d(H,"LABEL",{for:!0,class:!0});var B=p(E);I=d(B,"SPAN",{class:!0}),p(I).forEach(h),V=P(B),x=d(B,"SPAN",{class:!0}),p(x).forEach(h),j=P(B),N=d(B,"SPAN",{class:!0}),p(N).forEach(h),B.forEach(h),H.forEach(h),q=P(a),$=d(a,"DIV",{class:!0});var M=p($);for(let X=0;X<u.length;X+=1)u[X].l(M);M.forEach(h),a.forEach(h),g.forEach(h),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-18b4uv9"),s(m,"class","p-rel"),Z(m.src,y="/favicon.png")||s(m,"src",y),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),O(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-18b4uv9"),s(l,"class","nav-header d-i"),s(I,"class","svelte-18b4uv9"),s(x,"class","svelte-18b4uv9"),s(N,"class","svelte-18b4uv9"),s(E,"for","nav-check"),s(E,"class","svelte-18b4uv9"),s(v,"class","nav-btn p-abs svelte-18b4uv9"),s($,"class","nav-links d-i svelte-18b4uv9"),s(t,"class","nav d-b wait svelte-18b4uv9"),s(e,"class","p-stx mx-a w-100 p-rel svelte-18b4uv9"),O(e,"z-index","10")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=o[0],r(t,i),r(t,l),r(l,c),r(c,m),r(c,T),r(t,A),r(t,v),r(v,E),r(E,I),r(E,V),r(E,x),r(E,j),r(E,N),r(t,q),r(t,$);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m($,null);z||(k=[K(n,"change",o[4]),K(c,"click",o[3]),K($,"click",o[3])],z=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){S=_[2];let a;for(a=0;a<S.length;a+=1){const b=ne(_,S,a);u[a]?u[a].p(b,g):(u[a]=re(b),u[a].c(),u[a].m($,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=S.length}},i:U,o:U,d(_){_&&h(e),ce(u,_),z=!1,ve(k)}}}function $e(o,e,t){let n,i="/";pe(()=>t(1,i=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,i=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,i,l,c,m]}class Ie extends R{constructor(e){super(),Y(this,e,$e,xe,W,{})}}function Ae(o){let e,t,n,i,l,c,m,y,T,A,v,E;return{c(){e=f("div"),t=f("div"),n=f("span"),i=L("Hi! "),l=f("span"),c=L("👋"),m=L(`,
        `),y=f("span"),T=L("we are"),A=D(),v=f("img"),this.h()},l(I){e=d(I,"DIV",{class:!0});var V=p(e);t=d(V,"DIV",{id:!0,class:!0});var x=p(t);n=d(x,"SPAN",{class:!0});var j=p(n);i=G(j,"Hi! "),l=d(j,"SPAN",{class:!0,id:!0});var N=p(l);c=G(N,"👋"),N.forEach(h),j.forEach(h),m=G(x,`,
        `),y=d(x,"SPAN",{class:!0,style:!0});var q=p(y);T=G(q,"we are"),q.forEach(h),x.forEach(h),A=P(V),v=d(V,"IMG",{id:!0,class:!0,src:!0,alt:!0}),V.forEach(h),this.h()},h(){s(l,"class","d-ib svelte-1aex39q"),s(l,"id","wave"),s(n,"class","svelte-1aex39q"),s(y,"class","fade-right o-0 svelte-1aex39q"),O(y,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1aex39q"),s(v,"id","logo"),s(v,"class","o-0 p-abs svelte-1aex39q"),Z(v.src,E="/icons/barabari.png")||s(v,"src",E),s(v,"alt","logo"),s(e,"class","cont bg-222 w-100 h-100 fade tc p-rel svelte-1aex39q")},m(I,V){C(I,e,V),r(e,t),r(t,n),r(n,i),r(n,l),r(l,c),r(t,m),r(t,y),r(y,T),r(e,A),r(e,v)},p:U,i:U,o:U,d(I){I&&h(e)}}}class Ve extends R{constructor(e){super(),Y(this,e,null,Ae,W,{})}}function le(o,e,t){const n=o.slice();return n[4]=e[t],n}function ie(o){let e,t,n;return t=new Ve({}),{c(){e=f("div"),he(t.$$.fragment),this.h()},l(i){e=d(i,"DIV",{class:!0,style:!0});var l=p(e);ue(t.$$.fragment,l),l.forEach(h),this.h()},h(){s(e,"class","p-abs hero fade-right svelte-29i43i"),O(e,"z-index","1")},m(i,l){C(i,e,l),fe(t,e,null),n=!0},i(i){n||(J(t.$$.fragment,i),n=!0)},o(i){F(t.$$.fragment,i),n=!1},d(i){i&&h(e),de(t)}}}function oe(o){let e,t,n,i;return{c(){e=f("a"),t=f("img"),i=D(),this.h()},l(l){e=d(l,"A",{href:!0,class:!0});var c=p(e);t=d(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),i=P(c),c.forEach(h),this.h()},h(){s(t,"class","rx5 icon svelte-29i43i"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=o[4].icon)||s(t,"src",n),s(t,"alt",o[4].name),s(e,"href",o[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,i)},p:U,d(l){l&&h(e)}}}function De(o){let e,t,n,i,l,c,m,y,T,A,v,E,I,V,x,j,N,q,$,z;t=new Ie({});let k=o[0].url.pathname==="/"&&ie();const S=o[3].default,u=me(S,o,o[2],null);let _=o[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=oe(le(o,_,a));return{c(){e=f("main"),he(t.$$.fragment),n=D(),i=f("style"),l=L(`section {
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
        }`),c=D(),k&&k.c(),m=D(),y=f("div"),u&&u.c(),T=D(),A=f("footer"),v=f("div"),E=f("div"),I=L("The Barabari Project"),V=D(),x=f("div"),j=f("i"),N=L("Universal Access To Quality Jobs"),q=D(),$=f("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=d(a,"MAIN",{class:!0});var b=p(e);ue(t.$$.fragment,b),n=P(b),i=d(b,"STYLE",{});var w=p(i);l=G(w,`section {
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
        }`),w.forEach(h),c=P(b),k&&k.l(b),m=P(b),y=d(b,"DIV",{id:!0,style:!0,class:!0});var H=p(y);u&&u.l(H),H.forEach(h),T=P(b),A=d(b,"FOOTER",{class:!0});var B=p(A);v=d(B,"DIV",{class:!0,style:!0});var M=p(v);E=d(M,"DIV",{class:!0,style:!0});var X=p(E);I=G(X,"The Barabari Project"),X.forEach(h),V=P(M),x=d(M,"DIV",{class:!0,style:!0});var ee=p(x);j=d(ee,"I",{});var te=p(j);N=G(te,"Universal Access To Quality Jobs"),te.forEach(h),ee.forEach(h),q=P(M),$=d(M,"DIV",{class:!0});var ae=p($);for(let Q=0;Q<g.length;Q+=1)g[Q].l(ae);ae.forEach(h),M.forEach(h),B.forEach(h),b.forEach(h),this.h()},h(){s(y,"id","content"),O(y,"z-index","1"),s(y,"class","svelte-29i43i"),s(E,"class","fw4"),O(E,"font-size","2rem"),s(x,"class","p10"),O(x,"font-size","1.1em"),s($,"class","f j-ar"),s(v,"class","mx-a"),O(v,"max-width","300px"),s(A,"class","p10 w-100 tc svelte-29i43i"),s(e,"class","app p-rel flow-x-h")},m(a,b){C(a,e,b),fe(t,e,null),r(e,n),r(e,i),r(i,l),r(e,c),k&&k.m(e,null),r(e,m),r(e,y),u&&u.m(y,null),r(e,T),r(e,A),r(A,v),r(v,E),r(E,I),r(v,V),r(v,x),r(x,j),r(j,N),r(v,q),r(v,$);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m($,null);z=!0},p(a,[b]){if(a[0].url.pathname==="/"?k?b&1&&J(k,1):(k=ie(),k.c(),J(k,1),k.m(e,m)):k&&(ke(),F(k,1,1,()=>{k=null}),_e()),u&&u.p&&(!z||b&4)&&ge(u,S,a,a[2],z?we(S,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const H=le(a,_,w);g[w]?g[w].p(H,b):(g[w]=oe(H),g[w].c(),g[w].m($,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){z||(J(t.$$.fragment,a),J(k),J(u,a),z=!0)},o(a){F(t.$$.fragment,a),F(k),F(u,a),z=!1},d(a){a&&h(e),de(t),k&&k.d(),u&&u.d(a),ce(g,a)}}}function Pe(o,e,t){let n;Ee(o,ye,m=>t(0,n=m));let{$$slots:i={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return o.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,i]}class Te extends R{constructor(e){super(),Y(this,e,Pe,De,W,{})}}export{Te as default};
