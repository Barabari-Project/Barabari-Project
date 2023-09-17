import{S as R,i as Y,s as W,e as u,a as V,t as G,c as d,b as p,g as z,d as L,f as h,m as s,z as Z,A as O,h as F,j as r,B as Q,n as C,C as ce,Q as pe,O as he,D as se,H as me,o as fe,q as ue,r as de,u as U,v as J,F as _e,I as ge,J as we,K as be,w as ve,l as Ee,G as ye}from"../chunks/index.77aeed67.js";import{p as ke}from"../chunks/stores.3f46b045.js";import{c as xe}from"../chunks/state.2c52226e.js";function ne(i,e,t){const n=i.slice();return n[5]=e[t],n}function re(i){let e,t=i[5].name+"",n,o;return{c(){e=u("a"),n=G(t),o=V(),this.h()},l(l){e=d(l,"A",{class:!0,href:!0});var c=p(e);n=L(c,t),o=z(c),c.forEach(h),this.h()},h(){s(e,"class","d-ib svelte-1nowu63"),s(e,"href",i[5].href),se(e,"active",i[5].href===i[1])},m(l,c){F(l,e,c),r(e,n),r(e,o)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&h(e)}}}function $e(i){let e,t,n,o,l,c,m,k,j,A,v,E,I,D,x,T,P,N,$,q,y,S=i[2],f=[];for(let _=0;_<S.length;_+=1)f[_]=re(ne(i,S,_));return{c(){e=u("nav"),t=u("div"),n=u("input"),o=V(),l=u("div"),c=u("a"),m=u("img"),j=G(`
                The Barabari Project`),A=V(),v=u("div"),E=u("label"),I=u("span"),D=V(),x=u("span"),T=V(),P=u("span"),N=V(),$=u("div");for(let _=0;_<f.length;_+=1)f[_].c();this.h()},l(_){e=d(_,"NAV",{class:!0,style:!0});var g=p(e);t=d(g,"DIV",{class:!0});var a=p(t);n=d(a,"INPUT",{type:!0,id:!0,class:!0}),o=z(a),l=d(a,"DIV",{class:!0});var w=p(l);c=d(w,"A",{href:!0,class:!0});var b=p(c);m=d(b,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),j=L(b,`
                The Barabari Project`),b.forEach(h),w.forEach(h),A=z(a),v=d(a,"DIV",{class:!0});var H=p(v);E=d(H,"LABEL",{for:!0,class:!0});var B=p(E);I=d(B,"SPAN",{class:!0}),p(I).forEach(h),D=z(B),x=d(B,"SPAN",{class:!0}),p(x).forEach(h),T=z(B),P=d(B,"SPAN",{class:!0}),p(P).forEach(h),B.forEach(h),H.forEach(h),N=z(a),$=d(a,"DIV",{class:!0});var M=p($);for(let X=0;X<f.length;X+=1)f[X].l(M);M.forEach(h),a.forEach(h),g.forEach(h),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1nowu63"),s(m,"class","p-rel"),Z(m.src,k="/favicon.png")||s(m,"src",k),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),O(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-1nowu63"),s(l,"class","nav-header d-i"),s(I,"class","svelte-1nowu63"),s(x,"class","svelte-1nowu63"),s(P,"class","svelte-1nowu63"),s(E,"for","nav-check"),s(E,"class","svelte-1nowu63"),s(v,"class","nav-btn p-abs svelte-1nowu63"),s($,"class","nav-links d-i svelte-1nowu63"),s(t,"class","nav d-b wait svelte-1nowu63"),s(e,"class","p-stx mx-a w-100 p-rel svelte-1nowu63"),O(e,"z-index","10")},m(_,g){F(_,e,g),r(e,t),r(t,n),n.checked=i[0],r(t,o),r(t,l),r(l,c),r(c,m),r(c,j),r(t,A),r(t,v),r(v,E),r(E,I),r(E,D),r(E,x),r(E,T),r(E,P),r(t,N),r(t,$);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m($,null);q||(y=[Q(n,"change",i[4]),Q(c,"click",i[3]),Q($,"click",i[3])],q=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){S=_[2];let a;for(a=0;a<S.length;a+=1){const w=ne(_,S,a);f[a]?f[a].p(w,g):(f[a]=re(w),f[a].c(),f[a].m($,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=S.length}},i:C,o:C,d(_){_&&h(e),ce(f,_),q=!1,pe(y)}}}function Ie(i,e,t){let n,o="/";he(()=>t(1,o=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"},{name:"Donate",href:"/donate"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,o=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,o,l,c,m]}class Ae extends R{constructor(e){super(),Y(this,e,Ie,$e,W,{})}}function De(i){let e,t,n,o,l,c,m,k,j,A,v,E;return{c(){e=u("div"),t=u("div"),n=u("span"),o=G("Hi! "),l=u("span"),c=G("👋"),m=G(`,
        `),k=u("span"),j=G("we are"),A=V(),v=u("img"),this.h()},l(I){e=d(I,"DIV",{class:!0});var D=p(e);t=d(D,"DIV",{id:!0,class:!0});var x=p(t);n=d(x,"SPAN",{class:!0});var T=p(n);o=L(T,"Hi! "),l=d(T,"SPAN",{class:!0,id:!0});var P=p(l);c=L(P,"👋"),P.forEach(h),T.forEach(h),m=L(x,`,
        `),k=d(x,"SPAN",{class:!0,style:!0});var N=p(k);j=L(N,"we are"),N.forEach(h),x.forEach(h),A=z(D),v=d(D,"IMG",{id:!0,class:!0,src:!0,alt:!0}),D.forEach(h),this.h()},h(){s(l,"class","d-ib svelte-1aex39q"),s(l,"id","wave"),s(n,"class","svelte-1aex39q"),s(k,"class","fade-right o-0 svelte-1aex39q"),O(k,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1aex39q"),s(v,"id","logo"),s(v,"class","o-0 p-abs svelte-1aex39q"),Z(v.src,E="/icons/barabari.png")||s(v,"src",E),s(v,"alt","logo"),s(e,"class","cont bg-222 w-100 h-100 fade tc p-rel svelte-1aex39q")},m(I,D){F(I,e,D),r(e,t),r(t,n),r(n,o),r(n,l),r(l,c),r(t,m),r(t,k),r(k,j),r(e,A),r(e,v)},p:C,i:C,o:C,d(I){I&&h(e)}}}class Ve extends R{constructor(e){super(),Y(this,e,null,De,W,{})}}function le(i,e,t){const n=i.slice();return n[4]=e[t],n}function oe(i){let e,t,n;return t=new Ve({}),{c(){e=u("div"),fe(t.$$.fragment),this.h()},l(o){e=d(o,"DIV",{class:!0,style:!0});var l=p(e);ue(t.$$.fragment,l),l.forEach(h),this.h()},h(){s(e,"class","p-abs hero fade-right svelte-y97mz9"),O(e,"z-index","1")},m(o,l){F(o,e,l),de(t,e,null),n=!0},i(o){n||(U(t.$$.fragment,o),n=!0)},o(o){J(t.$$.fragment,o),n=!1},d(o){o&&h(e),ve(t)}}}function ie(i){let e,t,n,o;return{c(){e=u("a"),t=u("img"),o=V(),this.h()},l(l){e=d(l,"A",{href:!0,class:!0});var c=p(e);t=d(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),o=z(c),c.forEach(h),this.h()},h(){s(t,"class","rx5 icon svelte-y97mz9"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(l,c){F(l,e,c),r(e,t),r(e,o)},p:C,d(l){l&&h(e)}}}function ze(i){let e,t,n,o,l,c,m,k,j,A,v,E,I,D,x,T,P,N,$,q;t=new Ae({});let y=i[0].url.pathname==="/"&&oe();const S=i[3].default,f=me(S,i,i[2],null);let _=i[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=ie(le(i,_,a));return{c(){e=u("main"),fe(t.$$.fragment),n=V(),o=u("style"),l=G(`section {
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
        }`),c=V(),y&&y.c(),m=V(),k=u("div"),f&&f.c(),j=V(),A=u("footer"),v=u("div"),E=u("div"),I=G("The Barabari Project"),D=V(),x=u("div"),T=u("i"),P=G("Universal Access To Tech Education"),N=V(),$=u("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=d(a,"MAIN",{class:!0});var w=p(e);ue(t.$$.fragment,w),n=z(w),o=d(w,"STYLE",{});var b=p(o);l=L(b,`section {
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
        }`),b.forEach(h),c=z(w),y&&y.l(w),m=z(w),k=d(w,"DIV",{id:!0,style:!0,class:!0});var H=p(k);f&&f.l(H),H.forEach(h),j=z(w),A=d(w,"FOOTER",{class:!0});var B=p(A);v=d(B,"DIV",{class:!0,style:!0});var M=p(v);E=d(M,"DIV",{class:!0,style:!0});var X=p(E);I=L(X,"The Barabari Project"),X.forEach(h),D=z(M),x=d(M,"DIV",{class:!0,style:!0});var ee=p(x);T=d(ee,"I",{});var te=p(T);P=L(te,"Universal Access To Tech Education"),te.forEach(h),ee.forEach(h),N=z(M),$=d(M,"DIV",{class:!0});var ae=p($);for(let K=0;K<g.length;K+=1)g[K].l(ae);ae.forEach(h),M.forEach(h),B.forEach(h),w.forEach(h),this.h()},h(){s(k,"id","content"),O(k,"z-index","1"),s(k,"class","svelte-y97mz9"),s(E,"class","fw4"),O(E,"font-size","2rem"),s(x,"class","p10"),O(x,"font-size","1.1em"),s($,"class","f j-ar"),s(v,"class","mx-a"),O(v,"max-width","300px"),s(A,"class","p10 w-100 tc bg-fc3 svelte-y97mz9"),s(e,"class","app p-rel flow-x-h")},m(a,w){F(a,e,w),de(t,e,null),r(e,n),r(e,o),r(o,l),r(e,c),y&&y.m(e,null),r(e,m),r(e,k),f&&f.m(k,null),r(e,j),r(e,A),r(A,v),r(v,E),r(E,I),r(v,D),r(v,x),r(x,T),r(T,P),r(v,N),r(v,$);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m($,null);q=!0},p(a,[w]){if(a[0].url.pathname==="/"?y?w&1&&U(y,1):(y=oe(),y.c(),U(y,1),y.m(e,m)):y&&(ye(),J(y,1,1,()=>{y=null}),_e()),f&&f.p&&(!q||w&4)&&ge(f,S,a,a[2],q?be(S,a[2],w,null):we(a[2]),null),w&2){_=a[1];let b;for(b=0;b<_.length;b+=1){const H=le(a,_,b);g[b]?g[b].p(H,w):(g[b]=ie(H),g[b].c(),g[b].m($,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=_.length}},i(a){q||(U(t.$$.fragment,a),U(y),U(f,a),q=!0)},o(a){J(t.$$.fragment,a),J(y),J(f,a),q=!1},d(a){a&&h(e),ve(t),y&&y.d(),f&&f.d(a),ce(g,a)}}}function Te(i,e,t){let n;Ee(i,ke,m=>t(0,n=m));let{$$slots:o={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return he(xe),i.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,o]}class qe extends R{constructor(e){super(),Y(this,e,Te,ze,W,{})}}export{qe as default};
