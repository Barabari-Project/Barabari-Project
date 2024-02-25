import{S as J,i as K,s as W,e as u,a as D,t as G,c as d,b as p,g as V,d as L,f as h,m as s,z as Z,A as O,h as C,j as r,O as Y,n as F,B as ce,P as ve,M as pe,Q as se,F as me,o as he,q as fe,r as ue,u as U,v as Q,D as _e,G as ge,H as be,I as we,w as de,l as Ee,E as xe}from"../chunks/index.b4f11e6d.js";import{p as ke}from"../chunks/stores.f7f8d098.js";function ne(o,e,t){const n=o.slice();return n[5]=e[t],n}function re(o){let e,t=o[5].name+"",n,i;return{c(){e=u("a"),n=G(t),i=D(),this.h()},l(l){e=d(l,"A",{class:!0,href:!0});var c=p(e);n=L(c,t),i=V(c),c.forEach(h),this.h()},h(){s(e,"class","d-ib svelte-1j8il2v"),s(e,"href",o[5].href),se(e,"active",o[5].href===o[1])},m(l,c){C(l,e,c),r(e,n),r(e,i)},p(l,c){c&6&&se(e,"active",l[5].href===l[1])},d(l){l&&h(e)}}}function ye(o){let e,t,n,i,l,c,m,k,T,I,v,E,j,A,y,q,P,N,$,z,x,M=o[2],f=[];for(let _=0;_<M.length;_+=1)f[_]=re(ne(o,M,_));return{c(){e=u("nav"),t=u("div"),n=u("input"),i=D(),l=u("div"),c=u("a"),m=u("img"),T=G(`
                The Barabari Project`),I=D(),v=u("div"),E=u("label"),j=u("span"),A=D(),y=u("span"),q=D(),P=u("span"),N=D(),$=u("div");for(let _=0;_<f.length;_+=1)f[_].c();this.h()},l(_){e=d(_,"NAV",{class:!0,style:!0});var g=p(e);t=d(g,"DIV",{class:!0});var a=p(t);n=d(a,"INPUT",{type:!0,id:!0,class:!0}),i=V(a),l=d(a,"DIV",{class:!0});var b=p(l);c=d(b,"A",{href:!0,class:!0});var w=p(c);m=d(w,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),T=L(w,`
                The Barabari Project`),w.forEach(h),b.forEach(h),I=V(a),v=d(a,"DIV",{class:!0});var H=p(v);E=d(H,"LABEL",{for:!0,class:!0});var S=p(E);j=d(S,"SPAN",{class:!0}),p(j).forEach(h),A=V(S),y=d(S,"SPAN",{class:!0}),p(y).forEach(h),q=V(S),P=d(S,"SPAN",{class:!0}),p(P).forEach(h),S.forEach(h),H.forEach(h),N=V(a),$=d(a,"DIV",{class:!0});var B=p($);for(let X=0;X<f.length;X+=1)f[X].l(B);B.forEach(h),a.forEach(h),g.forEach(h),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1j8il2v"),s(m,"class","p-rel"),Z(m.src,k="/favicon.png")||s(m,"src",k),s(m,"height","22px"),s(m,"width","22px"),s(m,"alt",""),O(m,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-1j8il2v"),s(l,"class","nav-header d-i"),s(j,"class","svelte-1j8il2v"),s(y,"class","svelte-1j8il2v"),s(P,"class","svelte-1j8il2v"),s(E,"for","nav-check"),s(E,"class","svelte-1j8il2v"),s(v,"class","nav-btn p-abs svelte-1j8il2v"),s($,"class","nav-links d-i svelte-1j8il2v"),s(t,"class","nav d-b wait svelte-1j8il2v"),s(e,"class","p-stx mx-a w-100 p-rel svelte-1j8il2v"),O(e,"z-index","10")},m(_,g){C(_,e,g),r(e,t),r(t,n),n.checked=o[0],r(t,i),r(t,l),r(l,c),r(c,m),r(c,T),r(t,I),r(t,v),r(v,E),r(E,j),r(E,A),r(E,y),r(E,q),r(E,P),r(t,N),r(t,$);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m($,null);z||(x=[Y(n,"change",o[4]),Y(c,"click",o[3]),Y($,"click",o[3])],z=!0)},p(_,[g]){if(g&1&&(n.checked=_[0]),g&6){M=_[2];let a;for(a=0;a<M.length;a+=1){const b=ne(_,M,a);f[a]?f[a].p(b,g):(f[a]=re(b),f[a].c(),f[a].m($,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=M.length}},i:F,o:F,d(_){_&&h(e),ce(f,_),z=!1,ve(x)}}}function $e(o,e,t){let n,i="/";pe(()=>t(1,i=window.location.pathname));const l=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer",href:"/volunteer"},{name:"Donate",href:"/donate"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,i=window.location.pathname),200)};function m(){n=this.checked,t(0,n)}return[n,i,l,c,m]}class je extends J{constructor(e){super(),K(this,e,$e,ye,W,{})}}function Ie(o){let e,t,n,i,l,c,m,k,T,I,v,E;return{c(){e=u("div"),t=u("div"),n=u("span"),i=G("Hi! "),l=u("span"),c=G("👋"),m=G(`,
        `),k=u("span"),T=G("we are"),I=D(),v=u("img"),this.h()},l(j){e=d(j,"DIV",{class:!0});var A=p(e);t=d(A,"DIV",{id:!0,class:!0});var y=p(t);n=d(y,"SPAN",{class:!0});var q=p(n);i=L(q,"Hi! "),l=d(q,"SPAN",{class:!0,id:!0});var P=p(l);c=L(P,"👋"),P.forEach(h),q.forEach(h),m=L(y,`,
        `),k=d(y,"SPAN",{class:!0,style:!0});var N=p(k);T=L(N,"we are"),N.forEach(h),y.forEach(h),I=V(A),v=d(A,"IMG",{id:!0,class:!0,src:!0,alt:!0}),A.forEach(h),this.h()},h(){s(l,"class","d-ib svelte-1aex39q"),s(l,"id","wave"),s(n,"class","svelte-1aex39q"),s(k,"class","fade-right o-0 svelte-1aex39q"),O(k,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1aex39q"),s(v,"id","logo"),s(v,"class","o-0 p-abs svelte-1aex39q"),Z(v.src,E="/icons/barabari.png")||s(v,"src",E),s(v,"alt","logo"),s(e,"class","cont bg-222 w-100 h-100 fade tc p-rel svelte-1aex39q")},m(j,A){C(j,e,A),r(e,t),r(t,n),r(n,i),r(n,l),r(l,c),r(t,m),r(t,k),r(k,T),r(e,I),r(e,v)},p:F,i:F,o:F,d(j){j&&h(e)}}}class Ae extends J{constructor(e){super(),K(this,e,null,Ie,W,{})}}function le(o,e,t){const n=o.slice();return n[4]=e[t],n}function ie(o){let e,t,n;return t=new Ae({}),{c(){e=u("div"),he(t.$$.fragment),this.h()},l(i){e=d(i,"DIV",{class:!0,style:!0});var l=p(e);fe(t.$$.fragment,l),l.forEach(h),this.h()},h(){s(e,"class","p-abs hero flow-h fade-right svelte-qhxw8a"),O(e,"z-index","1")},m(i,l){C(i,e,l),ue(t,e,null),n=!0},i(i){n||(U(t.$$.fragment,i),n=!0)},o(i){Q(t.$$.fragment,i),n=!1},d(i){i&&h(e),de(t)}}}function oe(o){let e,t,n,i;return{c(){e=u("a"),t=u("img"),i=D(),this.h()},l(l){e=d(l,"A",{href:!0,class:!0});var c=p(e);t=d(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),i=V(c),c.forEach(h),this.h()},h(){s(t,"class","rx5 icon svelte-qhxw8a"),s(t,"height","36px"),s(t,"width","36px"),Z(t.src,n=o[4].icon)||s(t,"src",n),s(t,"alt",o[4].name),s(e,"href",o[4].href),s(e,"class","p5")},m(l,c){C(l,e,c),r(e,t),r(e,i)},p:F,d(l){l&&h(e)}}}function De(o){let e,t,n,i,l,c,m,k,T,I,v,E,j,A,y,q,P,N,$,z;t=new je({});let x=o[0].url.pathname==="/"&&ie();const M=o[3].default,f=me(M,o,o[2],null);let _=o[1],g=[];for(let a=0;a<_.length;a+=1)g[a]=oe(le(o,_,a));return{c(){e=u("main"),he(t.$$.fragment),n=D(),i=u("style"),l=G(`section {
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
        }`),c=D(),x&&x.c(),m=D(),k=u("div"),f&&f.c(),T=D(),I=u("footer"),v=u("div"),E=u("div"),j=G("The Barabari Project"),A=D(),y=u("div"),q=u("i"),P=G("Universal Access To Tech Education"),N=D(),$=u("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=d(a,"MAIN",{class:!0});var b=p(e);fe(t.$$.fragment,b),n=V(b),i=d(b,"STYLE",{});var w=p(i);l=L(w,`section {
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
        }`),w.forEach(h),c=V(b),x&&x.l(b),m=V(b),k=d(b,"DIV",{id:!0,style:!0,class:!0});var H=p(k);f&&f.l(H),H.forEach(h),T=V(b),I=d(b,"FOOTER",{class:!0});var S=p(I);v=d(S,"DIV",{class:!0,style:!0});var B=p(v);E=d(B,"DIV",{class:!0,style:!0});var X=p(E);j=L(X,"The Barabari Project"),X.forEach(h),A=V(B),y=d(B,"DIV",{class:!0,style:!0});var ee=p(y);q=d(ee,"I",{});var te=p(q);P=L(te,"Universal Access To Tech Education"),te.forEach(h),ee.forEach(h),N=V(B),$=d(B,"DIV",{class:!0});var ae=p($);for(let R=0;R<g.length;R+=1)g[R].l(ae);ae.forEach(h),B.forEach(h),S.forEach(h),b.forEach(h),this.h()},h(){s(k,"id","content"),O(k,"z-index","1"),s(k,"class","svelte-qhxw8a"),s(E,"class","fw4"),O(E,"font-size","2rem"),s(y,"class","p10"),O(y,"font-size","1.1em"),s($,"class","f j-ar"),s(v,"class","mx-a"),O(v,"max-width","300px"),s(I,"class","p10 w-100 tc bg-fc3 svelte-qhxw8a"),s(e,"class","app p-rel flow-x-h")},m(a,b){C(a,e,b),ue(t,e,null),r(e,n),r(e,i),r(i,l),r(e,c),x&&x.m(e,null),r(e,m),r(e,k),f&&f.m(k,null),r(e,T),r(e,I),r(I,v),r(v,E),r(E,j),r(v,A),r(v,y),r(y,q),r(q,P),r(v,N),r(v,$);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m($,null);z=!0},p(a,[b]){if(a[0].url.pathname==="/"?x?b&1&&U(x,1):(x=ie(),x.c(),U(x,1),x.m(e,m)):x&&(xe(),Q(x,1,1,()=>{x=null}),_e()),f&&f.p&&(!z||b&4)&&ge(f,M,a,a[2],z?we(M,a[2],b,null):be(a[2]),null),b&2){_=a[1];let w;for(w=0;w<_.length;w+=1){const H=le(a,_,w);g[w]?g[w].p(H,b):(g[w]=oe(H),g[w].c(),g[w].m($,null))}for(;w<g.length;w+=1)g[w].d(1);g.length=_.length}},i(a){z||(U(t.$$.fragment,a),U(x),U(f,a),z=!0)},o(a){Q(t.$$.fragment,a),Q(x),Q(f,a),z=!1},d(a){a&&h(e),de(t),x&&x.d(),f&&f.d(a),ce(g,a)}}}function Ve(o,e,t){let n;Ee(o,ke,m=>t(0,n=m));let{$$slots:i={},$$scope:l}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return o.$$set=m=>{"$$scope"in m&&t(2,l=m.$$scope)},[n,c,l,i]}class Te extends J{constructor(e){super(),K(this,e,Ve,De,W,{})}}export{Te as default};
