import{S as R,i as Y,s as W,e as f,a as z,t as L,c as d,b as p,g as D,d as G,f as h,v as s,z as Z,A as O,h as C,j as r,N as K,n as U,B as ce,P as ve,J as pe,O as se,C as me,m as he,o as ue,p as fe,q as J,r as F,H as _e,D as ge,E as be,F as we,u as de,l as ye,K as Ee}from"../chunks/index.eb3563e4.js";import{p as ke}from"../chunks/stores.aa900c90.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=f("a"),n=L(t),o=z(),this.h()},l(l){e=d(l,"A",{class:!0,href:!0});var c=p(e);n=G(c,t),o=D(c),c.forEach(h),this.h()},h(){s(e,"class","d-ib svelte-18b4uv9"),s(e,"href",i[5].href),se(e,"active",i[5].href===i[1])},m(l,c){C(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&h(e)}}}function xe(i){let e,t,n,o,l,c,m,k,N,A,v,y,I,V,x,P,j,T,$,q,E,S=i[2],u=[];for(let _=0;_<S.length;_+=1)u[_]=re(ne(i,S,_));return{c(){e=f("nav"),t=f("div"),n=f("input"),o=z(),l=f("div"),c=f("a"),m=f("img"),N=L(`
                The Barabari Project`),A=z(),v=f("div"),y=f("label"),I=f("span"),V=z(),x=f("span"),P=z(),j=f("span"),T=z(),$=f("div");for(let _=0;_<u.length;_+=1)u[_].c();this.h()},l(_){e=d(_,"NAV",{class:!0,style:!0});var g=p(e);t=d(g,"DIV",{class:!0});var a=p(t);n=d(a,"INPUT",{type:!0,id:!0,class:!0}),o=D(a),l=d(a,"DIV",{class:!0});var b=p(l);c=d(b,"A",{href:!0,class:!0});var w=p(c);m=d(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),N=G(w,`
                The Barabari Project`),w.forEach(h),b.forEach(h),A=D(a),v=d(a,"DIV",{class:!0});var H=p(v);y=d(H,"LABEL",{for:!0,class:!0});var B=p(y);I=d(B,"SPAN",{class:!0}),p(I).forEach(h),V=D(B),x=d(B,"SPAN",{class:!0}),p(x).forEach(h),P=D(B),j=d(B,"SPAN",{class:!0}),p(j).forEach(h),B.forEach(h),H.forEach(h),T=D(a),$=d(a,"DIV",{class:!0});var M=p($);for(let X=0;X<u.length;X+=1)u[X].l(M);M.forEach(h),a.forEach(h),g.forEach(h),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-18b4uv9"),s(m,"class","p-rel"),Z(m.src,k="/favicon.png")||s(m,"src",k),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),O(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-18b4uv9"),s(l,"class","nav-header d-i"),s(I,"class","svelte-18b4uv9"),s(x,"class","svelte-18b4uv9"),s(j,"class","svelte-18b4uv9"),s(y,"for","nav-check"),s(y,"class","svelte-18b4uv9"),s(v,"class","nav-btn p-abs svelte-18b4uv9"),s($,"class","nav-links d-i svelte-18b4uv9"),s(t,"class","nav d-b wait svelte-18b4uv9"),s(e,"class","p-stx mx-a w-100 p-rel svelte-18b4uv9"),O(e,"z-index","10")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,N),r(t,A),r(t,v),r(v,y),r(y,I),r(y,V),r(y,x),r(y,P),r(y,j),r(t,T),r(t,$);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m($,null);q||(E=[K(n,"change",i[4]),K(c,"click",i[3]),K($,"click",i[3])],q=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){S=_[2];let a;for(a=0;a<S.length;a+=1){const b=ne(_,S,a);u[a]?u[a].p(b,g):(u[a]=re(b),u[a].c(),u[a].m($,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=S.length}},i:U,o:U,d(_){_&&h(e),ce(u,_),q=!1,ve(E)}}}function $e(i,e,t){let n,o="/";pe(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class Ie extends R{constructor(e){super(),Y(this,e,$e,xe,W,{})}}function Ae(i){let e,t,n,o,l,c,m,k,N,A,v,y;return{c(){e=f("div"),t=f("div"),n=f("span"),o=L("Hi! "),l=f("span"),c=L("👋"),m=L(`,
        `),k=f("span"),N=L("we are"),A=z(),v=f("img"),this.h()},l(I){e=d(I,"DIV",{class:!0});var V=p(e);t=d(V,"DIV",{id:!0,class:!0});var x=p(t);n=d(x,"SPAN",{class:!0});var P=p(n);o=G(P,"Hi! "),l=d(P,"SPAN",{class:!0,id:!0});var j=p(l);c=G(j,"👋"),j.forEach(h),P.forEach(h),m=G(x,`,
        `),k=d(x,"SPAN",{class:!0,style:!0});var T=p(k);N=G(T,"we are"),T.forEach(h),x.forEach(h),A=D(V),v=d(V,"IMG",{id:!0,class:!0,src:!0,alt:!0}),V.forEach(h),this.h()},h(){s(l,"class","d-ib svelte-1aex39q"),s(l,"id","wave"),s(n,"class","svelte-1aex39q"),s(k,"class","fade-right o-0 svelte-1aex39q"),O(k,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1aex39q"),s(v,"id","logo"),s(v,"class","o-0 p-abs svelte-1aex39q"),Z(v.src,y="/icons/barabari.png")||s(v,"src",y),s(v,"alt","logo"),s(e,"class","cont bg-222 w-100 h-100 fade tc p-rel svelte-1aex39q")},m(I,V){C(I,e,V),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,k),r(k,N),r(e,A),r(e,v)},p:U,i:U,o:U,d(I){I&&h(e)}}}class Ve extends R{constructor(e){super(),Y(this,e,null,Ae,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new Ve({}),{c(){e=f("div"),he(t.$$.fragment),this.h()},l(o){e=d(o,"DIV",{class:!0,style:!0});var l=p(e);ue(t.$$.fragment,l),l.forEach(h),this.h()},h(){s(e,"class","p-abs hero fade-right svelte-y97mz9"),O(e,"z-index","1")},m(o,l){C(o,e,l),fe(t,e,null),n=!0},i(o){n||(J(t.$$.fragment,o),n=!0)},o(o){F(t.$$.fragment,o),n=!1},d(o){o&&h(e),de(t)}}}function ie(i){let e,t,n,o;return{c(){e=f("a"),t=f("img"),o=z(),this.h()},l(l){e=d(l,"A",{href:!0,class:!0});var c=p(e);t=d(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=D(c),c.forEach(h),this.h()},h(){s(t,"class","rx5 icon svelte-y97mz9"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,o)},p:U,d(l){l&&h(e)}}}function ze(i){let e,t,n,o,l,c,m,k,N,A,v,y,I,V,x,P,j,T,$,q;t=new Ie({});let E=i[0].url.pathname==="/"&&oe();const S=i[3].default,u=me(S,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=f("main"),he(t.$$.fragment),n=z(),o=f("style"),l=L(`section {
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
        }`),c=z(),E&&E.c(),m=z(),k=f("div"),u&&u.c(),N=z(),A=f("footer"),v=f("div"),y=f("div"),I=L("The Barabari Project"),V=z(),x=f("div"),P=f("i"),j=L("Universal Access To Quality Jobs"),T=z(),$=f("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=d(a,"MAIN",{class:!0});var b=p(e);ue(t.$$.fragment,b),n=D(b),o=d(b,"STYLE",{});var w=p(o);l=G(w,`section {
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
        }`),w.forEach(h),c=D(b),E&&E.l(b),m=D(b),k=d(b,"DIV",{id:!0,style:!0,class:!0});var H=p(k);u&&u.l(H),H.forEach(h),N=D(b),A=d(b,"FOOTER",{class:!0});var B=p(A);v=d(B,"DIV",{class:!0,style:!0});var M=p(v);y=d(M,"DIV",{class:!0,style:!0});var X=p(y);I=G(X,"The Barabari Project"),X.forEach(h),V=D(M),x=d(M,"DIV",{class:!0,style:!0});var ee=p(x);P=d(ee,"I",{});var te=p(P);j=G(te,"Universal Access To Quality Jobs"),te.forEach(h),ee.forEach(h),T=D(M),$=d(M,"DIV",{class:!0});var ae=p($);for(let Q=0;Q<g.length;Q+=1)g[Q].l(ae);ae.forEach(h),M.forEach(h),B.forEach(h),b.forEach(h),this.h()},h(){s(k,"id","content"),O(k,"z-index","1"),s(k,"class","svelte-y97mz9"),s(y,"class","fw4"),O(y,"font-size","2rem"),s(x,"class","p10"),O(x,"font-size","1.1em"),s($,"class","f j-ar"),s(v,"class","mx-a"),O(v,"max-width","300px"),s(A,"class","p10 w-100 tc bg-fc3 svelte-y97mz9"),s(e,"class","app p-rel flow-x-h")},m(a,b){C(a,e,b),fe(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),E&&E.m(e,null),r(e,m),r(e,k),u&&u.m(k,null),r(e,N),r(e,A),r(A,v),r(v,y),r(y,I),r(v,V),r(v,x),r(x,P),r(P,j),r(v,T),r(v,$);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m($,null);q=!0},p(a,[b]){if(a[0].url.pathname==="/"?E?b&1&&J(E,1):(E=oe(),E.c(),J(E,1),E.m(e,m)):E&&(Ee(),F(E,1,1,()=>{E=null}),_e()),u&&u.p&&(!q||b&4)&&ge(u,S,a,a[2],q?we(S,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const H=le(a,_,w);g[w]?g[w].p(H,b):(g[w]=ie(H),g[w].c(),g[w].m($,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){q||(J(t.$$.fragment,a),J(E),J(u,a),q=!0)},o(a){F(t.$$.fragment,a),F(E),F(u,a),q=!1},d(a){a&&h(e),de(t),E&&E.d(),u&&u.d(a),ce(g,a)}}}function De(i,e,t){let n;ye(i,ke,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class Ne extends R{constructor(e){super(),Y(this,e,De,ze,W,{})}}export{Ne as default};
