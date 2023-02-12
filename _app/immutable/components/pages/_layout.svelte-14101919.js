import{S as K,i as R,s as Y,k as f,a as V,q as G,l as u,m as v,c as D,r as H,h,n as s,C as W,p as N,b as C,D as r,E as ae,B as U,F as ce,G as pe,o as ve,H as se,I as me,w as he,x as fe,y as ue,f as O,t as F,d as _e,J as ge,K as be,L as we,z as de,M as xe,g as Ee}from"../../chunks/index-fb3bcbd7.js";import{p as ye}from"../../chunks/stores-1d19ff31.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=f("a"),n=G(t),o=V(),this.h()},l(l){e=u(l,"A",{href:!0,class:!0});var c=v(e);n=H(c,t),o=D(c),c.forEach(h),this.h()},h(){s(e,"href",i[5].href),s(e,"class","svelte-1lwqxh3"),se(e,"active",i[5].href===i[1])},m(l,c){C(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&h(e)}}}function ke(i){let e,t,n,o,l,c,m,y,j,$,p,x,q,A,k,P,T,M,I,S,E,z=i[2],d=[];for(let _=0;_<z.length;_+=1)d[_]=re(ne(i,z,_));return{c(){e=f("nav"),t=f("div"),n=f("input"),o=V(),l=f("div"),c=f("a"),m=f("img"),j=G(`
                The Barabari Project`),$=V(),p=f("div"),x=f("label"),q=f("span"),A=V(),k=f("span"),P=V(),T=f("span"),M=V(),I=f("div");for(let _=0;_<d.length;_+=1)d[_].c();this.h()},l(_){e=u(_,"NAV",{class:!0});var g=v(e);t=u(g,"DIV",{class:!0});var a=v(t);n=u(a,"INPUT",{type:!0,id:!0,class:!0}),o=D(a),l=u(a,"DIV",{class:!0});var b=v(l);c=u(b,"A",{href:!0,class:!0});var w=v(c);m=u(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),j=H(w,`
                The Barabari Project`),w.forEach(h),b.forEach(h),$=D(a),p=u(a,"DIV",{class:!0});var X=v(p);x=u(X,"LABEL",{for:!0,class:!0});var B=v(x);q=u(B,"SPAN",{class:!0}),v(q).forEach(h),A=D(B),k=u(B,"SPAN",{class:!0}),v(k).forEach(h),P=D(B),T=u(B,"SPAN",{class:!0}),v(T).forEach(h),B.forEach(h),X.forEach(h),M=D(a),I=u(a,"DIV",{class:!0});var L=v(I);for(let J=0;J<d.length;J+=1)d[J].l(L);L.forEach(h),a.forEach(h),g.forEach(h),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1lwqxh3"),s(m,"class","p-rel"),W(m.src,y="/favicon.png")||s(m,"src",y),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),N(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-b svelte-1lwqxh3"),s(l,"class","nav-header svelte-1lwqxh3"),s(q,"class","svelte-1lwqxh3"),s(k,"class","svelte-1lwqxh3"),s(T,"class","svelte-1lwqxh3"),s(x,"for","nav-check"),s(x,"class","svelte-1lwqxh3"),s(p,"class","nav-btn p-abs svelte-1lwqxh3"),s(I,"class","nav-links svelte-1lwqxh3"),s(t,"class","nav wait svelte-1lwqxh3"),s(e,"class","p-stx mx-a w-100 p-rel svelte-1lwqxh3")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,j),r(t,$),r(t,p),r(p,x),r(x,q),r(x,A),r(x,k),r(x,P),r(x,T),r(t,M),r(t,I);for(let a=0;a<d.length;a+=1)d[a].m(I,null);S||(E=[ae(n,"change",i[4]),ae(I,"click",i[3])],S=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){z=_[2];let a;for(a=0;a<z.length;a+=1){const b=ne(_,z,a);d[a]?d[a].p(b,g):(d[a]=re(b),d[a].c(),d[a].m(I,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=z.length}},i:U,o:U,d(_){_&&h(e),ce(d,_),S=!1,pe(E)}}}function $e(i,e,t){let n,o="/";ve(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class Ie extends K{constructor(e){super(),R(this,e,$e,ke,Y,{})}}function qe(i){let e,t,n,o,l,c,m,y,j,$,p,x;return{c(){e=f("div"),t=f("div"),n=f("span"),o=G("Hi! "),l=f("span"),c=G("👋"),m=G(`,
        `),y=f("span"),j=G("we are"),$=V(),p=f("img"),this.h()},l(q){e=u(q,"DIV",{class:!0,style:!0});var A=v(e);t=u(A,"DIV",{id:!0,class:!0});var k=v(t);n=u(k,"SPAN",{class:!0});var P=v(n);o=H(P,"Hi! "),l=u(P,"SPAN",{id:!0,class:!0});var T=v(l);c=H(T,"👋"),T.forEach(h),P.forEach(h),m=H(k,`,
        `),y=u(k,"SPAN",{class:!0,style:!0});var M=v(y);j=H(M,"we are"),M.forEach(h),k.forEach(h),$=D(A),p=u(A,"IMG",{id:!0,class:!0,src:!0,alt:!0}),A.forEach(h),this.h()},h(){s(l,"id","wave"),s(l,"class","svelte-1bqd0f7"),s(n,"class","svelte-1bqd0f7"),s(y,"class","fade-right o-0 svelte-1bqd0f7"),N(y,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1bqd0f7"),s(p,"id","logo"),s(p,"class","o-0 p-abs svelte-1bqd0f7"),W(p.src,x="/icons/barabari.png")||s(p,"src",x),s(p,"alt","logo"),s(e,"class","w-100 h-100 fade tc p-rel"),N(e,"color","#222"),N(e,"margin-top","20px")},m(q,A){C(q,e,A),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,y),r(y,j),r(e,$),r(e,p)},p:U,i:U,o:U,d(q){q&&h(e)}}}class Ae extends K{constructor(e){super(),R(this,e,null,qe,Y,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new Ae({}),{c(){e=f("div"),he(t.$$.fragment),this.h()},l(o){e=u(o,"DIV",{class:!0,style:!0});var l=v(e);fe(t.$$.fragment,l),l.forEach(h),this.h()},h(){s(e,"class","p-abs hero fade-right svelte-xd3o08"),N(e,"background","#222")},m(o,l){C(o,e,l),ue(t,e,null),n=!0},i(o){n||(O(t.$$.fragment,o),n=!0)},o(o){F(t.$$.fragment,o),n=!1},d(o){o&&h(e),de(t)}}}function ie(i){let e,t,n,o;return{c(){e=f("a"),t=f("img"),o=V(),this.h()},l(l){e=u(l,"A",{href:!0,class:!0});var c=v(e);t=u(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=D(c),c.forEach(h),this.h()},h(){s(t,"class","rx5 icon svelte-xd3o08"),s(t,"height","36px"),s(t,"width","36px"),W(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,o)},p:U,d(l){l&&h(e)}}}function Ve(i){let e,t,n,o,l,c,m,y,j,$,p,x,q,A,k,P,T,M,I,S;t=new Ie({});let E=i[0].url.pathname==="/"&&oe();const z=i[3].default,d=me(z,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=f("main"),he(t.$$.fragment),n=V(),o=f("style"),l=G(`section {
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
        }`),c=V(),E&&E.c(),m=V(),y=f("div"),d&&d.c(),j=V(),$=f("footer"),p=f("div"),x=f("div"),q=G("The Barabari Project"),A=V(),k=f("div"),P=f("i"),T=G("Universal Access To Quality Jobs"),M=V(),I=f("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=u(a,"MAIN",{class:!0});var b=v(e);fe(t.$$.fragment,b),n=D(b),o=u(b,"STYLE",{});var w=v(o);l=H(w,`section {
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
        }`),w.forEach(h),c=D(b),E&&E.l(b),m=D(b),y=u(b,"DIV",{id:!0,style:!0,class:!0});var X=v(y);d&&d.l(X),X.forEach(h),j=D(b),$=u(b,"FOOTER",{class:!0,style:!0});var B=v($);p=u(B,"DIV",{class:!0,style:!0});var L=v(p);x=u(L,"DIV",{class:!0,style:!0});var J=v(x);q=H(J,"The Barabari Project"),J.forEach(h),A=D(L),k=u(L,"DIV",{class:!0,style:!0});var Z=v(k);P=u(Z,"I",{});var ee=v(P);T=H(ee,"Universal Access To Quality Jobs"),ee.forEach(h),Z.forEach(h),M=D(L),I=u(L,"DIV",{class:!0});var te=v(I);for(let Q=0;Q<g.length;Q+=1)g[Q].l(te);te.forEach(h),L.forEach(h),B.forEach(h),b.forEach(h),this.h()},h(){s(y,"id","content"),N(y,"z-index","0"),s(y,"class","svelte-xd3o08"),s(x,"class","fw4"),N(x,"font-size","2rem"),s(k,"class","p10"),N(k,"font-size","1.1em"),s(I,"class","f j-ar"),s(p,"class","mx-a"),N(p,"max-width","300px"),s($,"class","p10 w-100 tc p5"),N($,"background","var(--yellow)"),N($,"font-size","0.8em"),s(e,"class","app p-rel")},m(a,b){C(a,e,b),ue(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),E&&E.m(e,null),r(e,m),r(e,y),d&&d.m(y,null),r(e,j),r(e,$),r($,p),r(p,x),r(x,q),r(p,A),r(p,k),r(k,P),r(P,T),r(p,M),r(p,I);for(let w=0;w<g.length;w+=1)g[w].m(I,null);S=!0},p(a,[b]){if(a[0].url.pathname==="/"?E?b&1&&O(E,1):(E=oe(),E.c(),O(E,1),E.m(e,m)):E&&(Ee(),F(E,1,1,()=>{E=null}),_e()),d&&d.p&&(!S||b&4)&&ge(d,z,a,a[2],S?we(z,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const X=le(a,_,w);g[w]?g[w].p(X,b):(g[w]=ie(X),g[w].c(),g[w].m(I,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){S||(O(t.$$.fragment,a),O(E),O(d,a),S=!0)},o(a){F(t.$$.fragment,a),F(E),F(d,a),S=!1},d(a){a&&h(e),de(t),E&&E.d(),d&&d.d(a),ce(g,a)}}}function De(i,e,t){let n;xe(i,ye,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class je extends K{constructor(e){super(),R(this,e,De,Ve,Y,{})}}export{je as default};
