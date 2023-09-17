import{S as W,i as Z,s as ee,e as d,a as A,t as M,c as v,b as _,g as D,d as G,f as u,m as s,z as te,A as H,h as R,j as a,B as Y,n as F,C as fe,Q as _e,O as ue,D as re,H as ge,o as de,q as ve,r as pe,u as C,v as J,F as be,I as we,J as Ee,K as ye,w as me,l as ke,G as xe}from"../chunks/index.77aeed67.js";import{p as $e}from"../chunks/stores.a16adbda.js";import{c as Ie}from"../chunks/state.2c52226e.js";function le(i,e,t){const n=i.slice();return n[5]=e[t],n}function oe(i){let e,t=i[5].name+"",n,l;return{c(){e=d("a"),n=M(t),l=A(),this.h()},l(r){e=v(r,"A",{class:!0,href:!0});var c=_(e);n=G(c,t),l=D(c),c.forEach(u),this.h()},h(){s(e,"class","d-ib svelte-1nowu63"),s(e,"href",i[5].href),re(e,"active",i[5].href===i[1])},m(r,c){R(r,e,c),a(e,n),a(e,l)},p(r,c){c&6&&re(e,"active",r[5].href===r[1])},d(r){r&&u(e)}}}function Ae(i){let e,t,n,l,r,c,g,$,q,V,p,E,I,z,x,T,j,B,N,O,S,P=i[2],o=[];for(let b=0;b<P.length;b+=1)o[b]=oe(le(i,P,b));return{c(){e=d("nav"),t=d("div"),n=d("input"),l=A(),r=d("div"),c=d("a"),g=d("img"),q=M(`
                The Barabari Project`),V=A(),p=d("div"),E=d("label"),I=d("span"),z=A(),x=d("span"),T=A(),j=d("span"),B=A(),N=d("div");for(let b=0;b<o.length;b+=1)o[b].c();this.h()},l(b){e=v(b,"NAV",{class:!0,style:!0});var y=_(e);t=v(y,"DIV",{class:!0});var f=_(t);n=v(f,"INPUT",{type:!0,id:!0,class:!0}),l=D(f),r=v(f,"DIV",{class:!0});var w=_(r);c=v(w,"A",{href:!0,class:!0});var h=_(c);g=v(h,"IMG",{class:!0,src:!0,height:!0,width:!0,alt:!0,style:!0}),q=G(h,`
                The Barabari Project`),h.forEach(u),w.forEach(u),V=D(f),p=v(f,"DIV",{class:!0});var k=_(p);E=v(k,"LABEL",{for:!0,class:!0});var m=_(E);I=v(m,"SPAN",{class:!0}),_(I).forEach(u),z=D(m),x=v(m,"SPAN",{class:!0}),_(x).forEach(u),T=D(m),j=v(m,"SPAN",{class:!0}),_(j).forEach(u),m.forEach(u),k.forEach(u),B=D(f),N=v(f,"DIV",{class:!0});var L=_(N);for(let X=0;X<o.length;X+=1)o[X].l(L);L.forEach(u),f.forEach(u),y.forEach(u),this.h()},h(){s(n,"type","checkbox"),s(n,"id","nav-check"),s(n,"class","svelte-1nowu63"),s(g,"class","p-rel"),te(g.src,$="/favicon.png")||s(g,"src",$),s(g,"height","22px"),s(g,"width","22px"),s(g,"alt",""),H(g,"top","3px"),s(c,"href","/"),s(c,"class","nav-title d-ib svelte-1nowu63"),s(r,"class","nav-header d-i"),s(I,"class","svelte-1nowu63"),s(x,"class","svelte-1nowu63"),s(j,"class","svelte-1nowu63"),s(E,"for","nav-check"),s(E,"class","svelte-1nowu63"),s(p,"class","nav-btn p-abs svelte-1nowu63"),s(N,"class","nav-links d-i svelte-1nowu63"),s(t,"class","nav d-b wait svelte-1nowu63"),s(e,"class","p-stx mx-a w-100 p-rel svelte-1nowu63"),H(e,"z-index","10")},m(b,y){R(b,e,y),a(e,t),a(t,n),n.checked=i[0],a(t,l),a(t,r),a(r,c),a(c,g),a(c,q),a(t,V),a(t,p),a(p,E),a(E,I),a(E,z),a(E,x),a(E,T),a(E,j),a(t,B),a(t,N);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(N,null);O||(S=[Y(n,"change",i[4]),Y(c,"click",i[3]),Y(N,"click",i[3])],O=!0)},p(b,[y]){if(y&1&&(n.checked=b[0]),y&6){P=b[2];let f;for(f=0;f<P.length;f+=1){const w=le(b,P,f);o[f]?o[f].p(w,y):(o[f]=oe(w),o[f].c(),o[f].m(N,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=P.length}},i:F,o:F,d(b){b&&u(e),fe(o,b),O=!1,_e(S)}}}function De(i,e,t){let n,l="/";ue(()=>t(1,l=window.location.pathname));const r=[{name:"Get Mentorship",href:"/candidate"},{name:"Be a Mentor",href:"/mentor"},{name:"Volunteer!",href:"/volunteer"},{name:"Donate",href:"/donate"}],c=()=>{t(0,n=!n),setTimeout(()=>t(1,l=window.location.pathname),200)};function g(){n=this.checked,t(0,n)}return[n,l,r,c,g]}class Ve extends W{constructor(e){super(),Z(this,e,De,Ae,ee,{})}}function ze(i){let e,t,n,l,r,c,g,$,q,V,p,E;return{c(){e=d("div"),t=d("div"),n=d("span"),l=M("Hi! "),r=d("span"),c=M("👋"),g=M(`,
        `),$=d("span"),q=M("we are"),V=A(),p=d("img"),this.h()},l(I){e=v(I,"DIV",{class:!0});var z=_(e);t=v(z,"DIV",{id:!0,class:!0});var x=_(t);n=v(x,"SPAN",{class:!0});var T=_(n);l=G(T,"Hi! "),r=v(T,"SPAN",{class:!0,id:!0});var j=_(r);c=G(j,"👋"),j.forEach(u),T.forEach(u),g=G(x,`,
        `),$=v(x,"SPAN",{class:!0,style:!0});var B=_($);q=G(B,"we are"),B.forEach(u),x.forEach(u),V=D(z),p=v(z,"IMG",{id:!0,class:!0,src:!0,alt:!0}),z.forEach(u),this.h()},h(){s(r,"class","d-ib svelte-1aex39q"),s(r,"id","wave"),s(n,"class","svelte-1aex39q"),s($,"class","fade-right o-0 svelte-1aex39q"),H($,"--delay","1s"),s(t,"id","hi"),s(t,"class","fade-right svelte-1aex39q"),s(p,"id","logo"),s(p,"class","o-0 p-abs svelte-1aex39q"),te(p.src,E="/icons/barabari.png")||s(p,"src",E),s(p,"alt","logo"),s(e,"class","cont bg-222 w-100 h-100 fade tc p-rel svelte-1aex39q")},m(I,z){R(I,e,z),a(e,t),a(t,n),a(n,l),a(n,r),a(r,c),a(t,g),a(t,$),a($,q),a(e,V),a(e,p)},p:F,i:F,o:F,d(I){I&&u(e)}}}class Te extends W{constructor(e){super(),Z(this,e,null,ze,ee,{})}}function ie(i,e,t){const n=i.slice();return n[4]=e[t],n}function ce(i){let e,t,n;return t=new Te({}),{c(){e=d("div"),de(t.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0,style:!0});var r=_(e);ve(t.$$.fragment,r),r.forEach(u),this.h()},h(){s(e,"class","p-abs hero fade-right svelte-y97mz9"),H(e,"z-index","1")},m(l,r){R(l,e,r),pe(t,e,null),n=!0},i(l){n||(C(t.$$.fragment,l),n=!0)},o(l){J(t.$$.fragment,l),n=!1},d(l){l&&u(e),me(t)}}}function he(i){let e,t,n,l;return{c(){e=d("a"),t=d("img"),l=A(),this.h()},l(r){e=v(r,"A",{href:!0,class:!0});var c=_(e);t=v(c,"IMG",{class:!0,height:!0,width:!0,src:!0,alt:!0}),l=D(c),c.forEach(u),this.h()},h(){s(t,"class","rx5 icon svelte-y97mz9"),s(t,"height","36px"),s(t,"width","36px"),te(t.src,n=i[4].icon)||s(t,"src",n),s(t,"alt",i[4].name),s(e,"href",i[4].href),s(e,"class","p5")},m(r,c){R(r,e,c),a(e,t),a(e,l)},p:F,d(r){r&&u(e)}}}function Pe(i){let e,t,n,l,r,c,g,$,q,V,p,E,I,z,x,T,j,B,N,O,S,P;t=new Ve({});let o=i[0].url.pathname==="/"&&ce();const b=i[3].default,y=ge(b,i,i[2],null);let f=i[1],w=[];for(let h=0;h<f.length;h+=1)w[h]=he(ie(i,f,h));return{c(){e=d("main"),de(t.$$.fragment),n=A(),l=d("style"),r=M(`section {
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
        }`),c=A(),o&&o.c(),g=A(),$=d("div"),y&&y.c(),q=A(),V=d("footer"),p=d("div"),E=d("div"),I=M("The Barabari Project"),z=A(),x=d("div"),T=d("i"),j=M("Universal Access To Tech Education"),B=A(),N=d("br"),O=A(),S=d("div");for(let h=0;h<w.length;h+=1)w[h].c();this.h()},l(h){e=v(h,"MAIN",{class:!0});var k=_(e);ve(t.$$.fragment,k),n=D(k),l=v(k,"STYLE",{});var m=_(l);r=G(m,`section {
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
        }`),m.forEach(u),c=D(k),o&&o.l(k),g=D(k),$=v(k,"DIV",{id:!0,style:!0,class:!0});var L=_($);y&&y.l(L),L.forEach(u),q=D(k),V=v(k,"FOOTER",{class:!0});var X=_(V);p=v(X,"DIV",{class:!0,style:!0});var U=_(p);E=v(U,"DIV",{class:!0,style:!0});var ae=_(E);I=G(ae,"The Barabari Project"),ae.forEach(u),z=D(U),x=v(U,"DIV",{class:!0,style:!0});var K=_(x);T=v(K,"I",{});var se=_(T);j=G(se,"Universal Access To Tech Education"),se.forEach(u),B=D(K),N=v(K,"BR",{}),K.forEach(u),O=D(U),S=v(U,"DIV",{class:!0});var ne=_(S);for(let Q=0;Q<w.length;Q+=1)w[Q].l(ne);ne.forEach(u),U.forEach(u),X.forEach(u),k.forEach(u),this.h()},h(){s($,"id","content"),H($,"z-index","1"),s($,"class","svelte-y97mz9"),s(E,"class","fw4"),H(E,"font-size","2rem"),s(x,"class","p10"),H(x,"font-size","1.1em"),s(S,"class","f j-ar"),s(p,"class","mx-a"),H(p,"max-width","300px"),s(V,"class","p10 w-100 tc bg-fc3 svelte-y97mz9"),s(e,"class","app p-rel flow-x-h")},m(h,k){R(h,e,k),pe(t,e,null),a(e,n),a(e,l),a(l,r),a(e,c),o&&o.m(e,null),a(e,g),a(e,$),y&&y.m($,null),a(e,q),a(e,V),a(V,p),a(p,E),a(E,I),a(p,z),a(p,x),a(x,T),a(T,j),a(x,B),a(x,N),a(p,O),a(p,S);for(let m=0;m<w.length;m+=1)w[m]&&w[m].m(S,null);P=!0},p(h,[k]){if(h[0].url.pathname==="/"?o?k&1&&C(o,1):(o=ce(),o.c(),C(o,1),o.m(e,g)):o&&(xe(),J(o,1,1,()=>{o=null}),be()),y&&y.p&&(!P||k&4)&&we(y,b,h,h[2],P?ye(b,h[2],k,null):Ee(h[2]),null),k&2){f=h[1];let m;for(m=0;m<f.length;m+=1){const L=ie(h,f,m);w[m]?w[m].p(L,k):(w[m]=he(L),w[m].c(),w[m].m(S,null))}for(;m<w.length;m+=1)w[m].d(1);w.length=f.length}},i(h){P||(C(t.$$.fragment,h),C(o),C(y,h),P=!0)},o(h){J(t.$$.fragment,h),J(o),J(y,h),P=!1},d(h){h&&u(e),me(t),o&&o.d(),y&&y.d(h),fe(w,h)}}}function je(i,e,t){let n;ke(i,$e,g=>t(0,n=g));let{$$slots:l={},$$scope:r}=e;const c=Object.freeze([{name:"GMail",icon:"/icons/gmail.svg",href:"mailto:thebarabariproject@gmail.com"},{name:"Instagram",icon:"/icons/insta.svg",href:"https://www.instagram.com/thebarabariproject/"},{name:"Twitter",icon:"/icons/twitter.svg",href:"https://twitter.com/BarabariProject"},{name:"LinkedIn",icon:"/icons/lin.svg",href:"https://www.linkedin.com/company/the-barabari-project/"}]);return ue(Ie),i.$$set=g=>{"$$scope"in g&&t(2,r=g.$$scope)},[n,c,r,l]}class Se extends W{constructor(e){super(),Z(this,e,je,Pe,ee,{})}}export{Se as default};
