import{S as R,i as Y,s as W,e as u,a as D,t as G,c as d,b as p,g as V,d as L,f as h,m as s,z as Z,A as O,h as F,j as r,B as Q,n as C,C as ce,Q as pe,O as he,D as se,H as me,o as fe,q as ue,r as de,u as U,v as J,F as _e,I as ge,J as be,K as we,w as ve,l as Ee,G as xe}from"../chunks/index.77aeed67.js";import{p as ke}from"../chunks/stores.527e2838.js";import{c as ye}from"../chunks/state.2c52226e.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=u("a"),n=G(t),o=D(),this.h()},l(l){e=d(l,"A",{class:!0,href:!0});var c=p(e);n=L(c,t),o=V(c),c.forEach(h),this.h()},h(){s(e,"class","d-ib svelte-1j8il2v"),s(e,"href",i[5].href),se(e,"active",i[5].href===i[1])},m(l,c){F(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&h(e)}}}function $e(i){let e,t,n,o,l,c,m,k,P,I,v,E,j,A,y,q,T,N,$,z,x,S=i[2],f=[];for(let _=0;_<S.length;_+=1)f[_]=re(ne(i,S,_));return{c(){e=u("nav"),t=u("div"),n=u("input"),o=D(),l=u("div"),c=u("a"),m=u("img"),P=G(`
                The Barabari Project`),I=D(),v=u("div"),E=u("label"),j=u("span"),A=D(),y=u("span"),q=D(),T=u("span"),N=D(),$=u("div");for(let _=0;_<f.length;_+=1)f[_].c();this.h()},l(_){e=d(_,"NAV",{class:!0,style:!0});var g=p(e);t=d(g,"DIV",{class:!0});var a=p(t);n=d(a,"INPUT",{type:!0,id:!0,class:!0}),o=V(a),l=d(a,"DIV",{class:!0});var b=p(l);c=d(b,"A",{href:!0,class:!0});var w=p(c);m=d(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),P=L(w,`
                The Barabari Project`),w.forEach(h),b.forEach(h),I=V(a),v=d(a,"DIV",{class:!0});var H=p(v);E=d(H,"LABEL",{for:!0,class:!0});var B=p(E);j=d(B,"SPAN",{class:!0}),p(j).forEach(h),A=V(B),y=d(B,"SPAN",{class:!0}),p(y).forEach(h),q=V(B),T=d(B,"SPAN",{class:!0}),p(T).forEach(h),B.forEach(h),H.forEach(h),N=V(a),$=d(a,"DIV",{class:!0});var M=p($);for(let X=0;X<f.length;X+=1)f[X].l(M);M.forEach(h),a.forEach(h),g.forEach(h),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1j8il2v"),s(m,"class","p-rel"),Z(m.src,k="/favicon.png")||s(m,"src",k),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),O(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-1j8il2v"),s(l,"class","nav-header d-i"),s(j,"class","svelte-1j8il2v"),s(y,"class","svelte-1j8il2v"),s(T,"class","svelte-1j8il2v"),s(E,"for","nav-check"),s(E,"class","svelte-1j8il2v"),s(v,"class","nav-btn p-abs svelte-1j8il2v"),s($,"class","nav-links d-i svelte-1j8il2v"),s(t,"class","nav d-b wait svelte-1j8il2v"),s(e,"class","p-stx mx-a w-100 p-rel svelte-1j8il2v"),O(e,"z-index","10")},m(_,g){F(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,P),r(t,I),r(t,v),r(v,E),r(E,j),r(E,A),r(E,y),r(E,q),r(E,T),r(t,N),r(t,$);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m($,null);z||(x=[Q(n,"change",i[4]),Q(c,"click",i[3]),Q($,"click",i[3])],z=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){S=_[2];let a;for(a=0;a<S.length;a+=1){const b=ne(_,S,a);f[a]?f[a].p(b,g):(f[a]=re(b),f[a].c(),f[a].m($,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=S.length}},i:C,o:C,d(_){_&&h(e),ce(f,_),z=!1,pe(x)}}}function je(i,e,t){let n,o="/";he(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"},{name:"Donate",href:"/donate"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class Ie extends R{constructor(e){super(),Y(this,e,je,$e,W,{})}}function Ae(i){let e,t,n,o,l,c,m,k,P,I,v,E;return{c(){e=u("div"),t=u("div"),n=u("span"),o=G("Hi! "),l=u("span"),c=G("👋"),m=G(`,
        `),k=u("span"),P=G("we are"),I=D(),v=u("img"),this.h()},l(j){e=d(j,"DIV",{class:!0});var A=p(e);t=d(A,"DIV",{id:!0,class:!0});var y=p(t);n=d(y,"SPAN",{class:!0});var q=p(n);o=L(q,"Hi! "),l=d(q,"SPAN",{class:!0,id:!0});var T=p(l);c=L(T,"👋"),T.forEach(h),q.forEach(h),m=L(y,`,
        `),k=d(y,"SPAN",{class:!0,style:!0});var N=p(k);P=L(N,"we are"),N.forEach(h),y.forEach(h),I=V(A),v=d(A,"IMG",{id:!0,class:!0,src:!0,alt:!0}),A.forEach(h),this.h()},h(){s(l,"class","d-ib svelte-1aex39q"),s(l,"id","wave"),s(n,"class","svelte-1aex39q"),s(k,"class","fade-right o-0 svelte-1aex39q"),O(k,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1aex39q"),s(v,"id","logo"),s(v,"class","o-0 p-abs svelte-1aex39q"),Z(v.src,E="/icons/barabari.png")||s(v,"src",E),s(v,"alt","logo"),s(e,"class","cont bg-222 w-100 h-100 fade tc p-rel svelte-1aex39q")},m(j,A){F(j,e,A),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,k),r(k,P),r(e,I),r(e,v)},p:C,i:C,o:C,d(j){j&&h(e)}}}class De extends R{constructor(e){super(),Y(this,e,null,Ae,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new De({}),{c(){e=u("div"),fe(t.$$.fragment),this.h()},l(o){e=d(o,"DIV",{class:!0,style:!0});var l=p(e);ue(t.$$.fragment,l),l.forEach(h),this.h()},h(){s(e,"class","p-abs hero flow-h fade-right svelte-qhxw8a"),O(e,"z-index","1")},m(o,l){F(o,e,l),de(t,e,null),n=!0},i(o){n||(U(t.$$.fragment,o),n=!0)},o(o){J(t.$$.fragment,o),n=!1},d(o){o&&h(e),ve(t)}}}function ie(i){let e,t,n,o;return{c(){e=u("a"),t=u("img"),o=D(),this.h()},l(l){e=d(l,"A",{href:!0,class:!0});var c=p(e);t=d(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=V(c),c.forEach(h),this.h()},h(){s(t,"class","rx5 icon svelte-qhxw8a"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){F(l,e,c),r(e,t),r(e,o)},p:C,d(l){l&&h(e)}}}function Ve(i){let e,t,n,o,l,c,m,k,P,I,v,E,j,A,y,q,T,N,$,z;t=new Ie({});let x=i[0].url.pathname==="/"&&oe();const S=i[3].default,f=me(S,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=u("main"),fe(t.$$.fragment),n=D(),o=u("style"),l=G(`section {
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
        }`),c=D(),x&&x.c(),m=D(),k=u("div"),f&&f.c(),P=D(),I=u("footer"),v=u("div"),E=u("div"),j=G("The Barabari Project"),A=D(),y=u("div"),q=u("i"),T=G("Universal Access To Tech Education"),N=D(),$=u("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=d(a,"MAIN",{class:!0});var b=p(e);ue(t.$$.fragment,b),n=V(b),o=d(b,"STYLE",{});var w=p(o);l=L(w,`section {
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
        }`),w.forEach(h),c=V(b),x&&x.l(b),m=V(b),k=d(b,"DIV",{id:!0,style:!0,class:!0});var H=p(k);f&&f.l(H),H.forEach(h),P=V(b),I=d(b,"FOOTER",{class:!0});var B=p(I);v=d(B,"DIV",{class:!0,style:!0});var M=p(v);E=d(M,"DIV",{class:!0,style:!0});var X=p(E);j=L(X,"The Barabari Project"),X.forEach(h),A=V(M),y=d(M,"DIV",{class:!0,style:!0});var ee=p(y);q=d(ee,"I",{});var te=p(q);T=L(te,"Universal Access To Tech Education"),te.forEach(h),ee.forEach(h),N=V(M),$=d(M,"DIV",{class:!0});var ae=p($);for(let K=0;K<g.length;K+=1)g[K].l(ae);ae.forEach(h),M.forEach(h),B.forEach(h),b.forEach(h),this.h()},h(){s(k,"id","content"),O(k,"z-index","1"),s(k,"class","svelte-qhxw8a"),s(E,"class","fw4"),O(E,"font-size","2rem"),s(y,"class","p10"),O(y,"font-size","1.1em"),s($,"class","f j-ar"),s(v,"class","mx-a"),O(v,"max-width","300px"),s(I,"class","p10 w-100 tc bg-fc3 svelte-qhxw8a"),s(e,"class","app p-rel flow-x-h")},m(a,b){F(a,e,b),de(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),x&&x.m(e,null),r(e,m),r(e,k),f&&f.m(k,null),r(e,P),r(e,I),r(I,v),r(v,E),r(E,j),r(v,A),r(v,y),r(y,q),r(q,T),r(v,N),r(v,$);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m($,null);z=!0},p(a,[b]){if(a[0].url.pathname==="/"?x?b&1&&U(x,1):(x=oe(),x.c(),U(x,1),x.m(e,m)):x&&(xe(),J(x,1,1,()=>{x=null}),_e()),f&&f.p&&(!z||b&4)&&ge(f,S,a,a[2],z?we(S,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const H=le(a,_,w);g[w]?g[w].p(H,b):(g[w]=ie(H),g[w].c(),g[w].m($,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){z||(U(t.$$.fragment,a),U(x),U(f,a),z=!0)},o(a){J(t.$$.fragment,a),J(x),J(f,a),z=!1},d(a){a&&h(e),ve(t),x&&x.d(),f&&f.d(a),ce(g,a)}}}function qe(i,e,t){let n;Ee(i,ke,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return he(ye),i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class ze extends R{constructor(e){super(),Y(this,e,qe,Ve,W,{})}}export{ze as default};
