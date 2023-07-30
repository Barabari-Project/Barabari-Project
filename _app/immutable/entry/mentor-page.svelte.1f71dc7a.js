import{S as re,i as ae,s as le,e as _,c as b,b as v,f,v as i,h as M,N as oe,n as V,B as ie,t as B,a as E,d as S,g as k,z as ne,P as X,j as c,A as x,m as G,w as ce,o as J,p as K,q as j,r as L,u as F,J as ue,x as D,y as R,K as de,H as fe}from"../chunks/index.6f362b87.js";import{M as pe}from"../chunks/meta.b7aff72b.js";import{J as he}from"../chunks/joinpages.28ee822f.js";const me=""+new URL("../assets/mentor.4d4978bb.webp",import.meta.url).href,{round:ge,min:ve,max:_e,abs:be}=Math;function $e(o,e,s){o=parseInt(o,16),e=parseInt(e,16);const a=be(o-e)/(s-1),l=o<e?1:-1,t=new Array(s);for(let r=0;r<s;r++){const u=ge(o+r*a*l).toString(16).toUpperCase();t[r]=u}return t}function ye(o,e,s){s=_e(ve(s-1,5),2),console.log(`Interpolating ${o} to ${e} in ${s+1} parts`),o=o.replace(/^#/,"").split(""),e=e.replace(/^#/,"").split("");const a=[];for(let t=0;t<o.length;t++)a.push($e(o[t],e[t],s+1));const l=new Array(s+1);for(let t=0;t<s+1;t++){l[t]="";for(let r=0;r<o.length;r++)l[t]+=a[r][t]}return l}function Z(o,e,s){const a=o.slice();return a[5]=e[s],a[7]=s,a}function ee(o){let e,s=o[5].content+"",a;return{c(){e=_("p"),a=B(s),this.h()},l(l){e=b(l,"P",{class:!0,style:!0});var t=v(e);a=S(t,s),t.forEach(f),this.h()},h(){i(e,"class","fade-left o-0 svelte-1870emy"),x(e,"--delay","0.1s")},m(l,t){M(l,e,t),c(e,a)},p:V,d(l){l&&f(e)}}}function te(o){let e,s,a,l=o[5].title+"",t,r,u,n,p,$,d=o[0]===o[7]&&ee(o);return{c(){e=_("div"),s=_("div"),a=_("h3"),t=B(l),r=E(),d&&d.c(),u=E(),n=_("img"),$=E(),this.h()},l(m){e=b(m,"DIV",{class:!0,id:!0,style:!0});var h=v(e);s=b(h,"DIV",{class:!0});var y=v(s);a=b(y,"H3",{});var q=v(a);t=S(q,l),q.forEach(f),r=k(y),d&&d.l(y),u=k(y),n=b(y,"IMG",{src:!0,class:!0,alt:!0}),y.forEach(f),$=k(h),h.forEach(f),this.h()},h(){ne(n.src,p=o[5].icon)||i(n,"src",p),i(n,"class","p-abs icon svelte-1870emy"),i(n,"alt","Mentor"),i(s,"class","f-col p10 content svelte-1870emy"),i(e,"class","item p-rel svelte-1870emy"),i(e,"id",o[7]),i(e,"style",o[3](o[7])),X(e,"active",o[0]===o[7])},m(m,h){M(m,e,h),c(e,s),c(s,a),c(a,t),c(s,r),d&&d.m(s,null),c(s,u),c(s,n),c(e,$)},p(m,h){m[0]===m[7]?d?d.p(m,h):(d=ee(m),d.c(),d.m(s,u)):d&&(d.d(1),d=null),h&1&&X(e,"active",m[0]===m[7])},d(m){m&&f(e),d&&d.d()}}}function we(o){let e,s,a,l=o[1],t=[];for(let r=0;r<l.length;r+=1)t[r]=te(Z(o,l,r));return{c(){e=_("article");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=b(r,"ARTICLE",{class:!0});var u=v(e);for(let n=0;n<t.length;n+=1)t[n].l(u);u.forEach(f),this.h()},h(){i(e,"class","f mx-a rx10 svelte-1870emy")},m(r,u){M(r,e,u);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null);s||(a=oe(e,"click",o[2]),s=!0)},p(r,[u]){if(u&11){l=r[1];let n;for(n=0;n<l.length;n+=1){const p=Z(r,l,n);t[n]?t[n].p(p,u):(t[n]=te(p),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},i:V,o:V,d(r){r&&f(e),ie(t,r),s=!1,a()}}}function Ee(o,e,s){let a;const l=[{title:"Section 1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",icon:"https://api.dicebear.com/6.x/bottts/png?seed=red"},{title:"Section 2",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",icon:"https://api.dicebear.com/6.x/bottts/png?seed=blue"},{title:"Section 3",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",icon:"https://api.dicebear.com/6.x/bottts/png?seed=green"},{title:"Section 4",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate, quibusdam voluptatum, voluptatibus, quos dolorum",icon:"https://api.dicebear.com/6.x/bottts/png?seed=alpha"}],t=n=>{const p=+n.target.id;console.log(p,n.target),!Number.isNaN(p)&&p!==a&&s(0,a=p)},r=ye("349","a2F",l.length),u=n=>{let p="";return p+=`background-color: #${r[n]};`,p+=`z-index: ${n};`,p+="color: #fff;",p};return s(0,a=0),[a,l,t,u]}class ke extends re{constructor(e){super(),ae(this,e,Ee,we,le,{})}}function Ie(o){let e,s,a,l,t,r,u,n,p;return{c(){e=_("div"),s=_("span"),a=B(`The Barabari Project is a non-profit working to provide quality
            training and mentorship to candidates from low-income categories,
            rural backgrounds, underprivileged caste sections, and
            underrepresented gender backgrounds.
            `),l=_("br"),t=_("br"),r=B(`
        Come join us as a
        `),u=_("b"),n=B("mentor, doubt solver or technical content curator"),p=B(` and positively
        impact the lives of thousands of underprivileged candidates. Find all details
        in the form below`),this.h()},l($){e=b($,"DIV",{slot:!0});var d=v(e);s=b(d,"SPAN",{class:!0});var m=v(s);a=S(m,`The Barabari Project is a non-profit working to provide quality
            training and mentorship to candidates from low-income categories,
            rural backgrounds, underprivileged caste sections, and
            underrepresented gender backgrounds.
            `),l=b(m,"BR",{}),t=b(m,"BR",{}),m.forEach(f),r=S(d,`
        Come join us as a
        `),u=b(d,"B",{});var h=v(u);n=S(h,"mentor, doubt solver or technical content curator"),h.forEach(f),p=S(d,` and positively
        impact the lives of thousands of underprivileged candidates. Find all details
        in the form below`),d.forEach(f),this.h()},h(){i(s,"class","desktop-only"),i(e,"slot","desc")},m($,d){M($,e,d),c(e,s),c(s,a),c(s,l),c(s,t),c(e,r),c(e,u),c(u,n),c(e,p)},p:V,d($){$&&f(e)}}}function se(o){let e,s,a;return s=new ke({}),{c(){e=_("div"),G(s.$$.fragment),this.h()},l(l){e=b(l,"DIV",{class:!0});var t=v(e);J(s.$$.fragment,t),t.forEach(f),this.h()},h(){i(e,"class","p10")},m(l,t){M(l,e,t),K(s,e,null),a=!0},i(l){a||(j(s.$$.fragment,l),a=!0)},o(l){L(s.$$.fragment,l),a=!1},d(l){l&&f(e),F(s)}}}function ze(o){let e,s,a,l,t,r,u,n,p,$,d,m,h,y,q,H,I,C,Q,T,g=o[0]===!0&&se();return{c(){e=_("main"),s=_("div"),a=_("img"),t=E(),r=_("a"),u=_("div"),n=B("Apply Here!"),p=E(),$=D("svg"),d=D("path"),m=E(),h=_("a"),y=_("div"),q=B("Read More!"),H=E(),I=D("svg"),C=D("path"),Q=E(),g&&g.c(),this.h()},l(w){e=b(w,"MAIN",{slot:!0});var z=v(e);s=b(z,"DIV",{class:!0,style:!0});var A=v(s);a=b(A,"IMG",{src:!0,alt:!0,class:!0,style:!0}),t=k(A),r=b(A,"A",{href:!0,target:!0,rel:!0,class:!0});var N=v(r);u=b(N,"DIV",{style:!0});var U=v(u);n=S(U,"Apply Here!"),U.forEach(f),p=k(N),$=R(N,"svg",{viewBox:!0,height:!0,class:!0});var O=v($);d=R(O,"path",{d:!0}),v(d).forEach(f),O.forEach(f),N.forEach(f),m=k(A),h=b(A,"A",{href:!0,target:!0,rel:!0,class:!0});var P=v(h);y=b(P,"DIV",{style:!0});var W=v(y);q=S(W,"Read More!"),W.forEach(f),H=k(P),I=R(P,"svg",{viewBox:!0,height:!0,class:!0});var Y=v(I);C=R(Y,"path",{d:!0}),v(C).forEach(f),Y.forEach(f),P.forEach(f),A.forEach(f),Q=k(z),g&&g.l(z),z.forEach(f),this.h()},h(){ne(a.src,l=me)||i(a,"src",l),i(a,"alt","candidate"),i(a,"class","p-abs w-100 h-100"),x(a,"z-index","-1000"),x(a,"filter","blur(5px)"),x(u,"align-self","center"),i(d,"d","M11 29 24 16 11 3"),i($,"viewBox","0 0 32 32"),i($,"height","48"),i($,"class","svelte-t4zz9n"),i(r,"href","https://docs.google.com/forms/d/1utKmc4y1SJWNH0rzQSlTBcItT6IBiHkeb6Ivz5u3mKo/"),i(r,"target","_blank"),i(r,"rel","noreferrer"),i(r,"class","blur-16 fw4 CTA tc m20 p20 p-rel f j-ar svelte-t4zz9n"),x(y,"align-self","center"),i(C,"d","M11 29 24 16 11 3"),i(I,"viewBox","0 0 32 32"),i(I,"height","48"),i(I,"class","svelte-t4zz9n"),i(h,"href","https://docs.google.com/document/d/1SGicA4CjgESXWGYP1o6YQkI4Z0aOvNrxTyLvg_abKL8/"),i(h,"target","_blank"),i(h,"rel","noreferrer"),i(h,"class","blur-16 fw4 CTA tc m20 p20 p-rel f j-ar svelte-t4zz9n"),i(s,"class","hero f-col p-rel j-ct p-rel h-100 svelte-t4zz9n"),x(s,"overflow","hidden"),i(e,"slot","max")},m(w,z){M(w,e,z),c(e,s),c(s,a),c(s,t),c(s,r),c(r,u),c(u,n),c(r,p),c(r,$),c($,d),c(s,m),c(s,h),c(h,y),c(y,q),c(h,H),c(h,I),c(I,C),c(e,Q),g&&g.m(e,null),T=!0},p(w,z){w[0]===!0?g?z&1&&j(g,1):(g=se(),g.c(),j(g,1),g.m(e,null)):g&&(de(),L(g,1,1,()=>{g=null}),fe())},i(w){T||(j(g),T=!0)},o(w){L(g),T=!1},d(w){w&&f(e),g&&g.d()}}}function Be(o){let e,s,a,l;return e=new pe({props:{title:"Become a Mentor"}}),a=new he({props:{title:"Become a Mentor!",$$slots:{max:[ze],desc:[Ie]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment),s=E(),G(a.$$.fragment)},l(t){const r=ce("svelte-1c065e0",document.head);J(e.$$.fragment,r),r.forEach(f),s=k(t),J(a.$$.fragment,t)},m(t,r){K(e,document.head,null),M(t,s,r),K(a,t,r),l=!0},p(t,[r]){const u={};r&3&&(u.$$scope={dirty:r,ctx:t}),a.$set(u)},i(t){l||(j(e.$$.fragment,t),j(a.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),L(a.$$.fragment,t),l=!1},d(t){F(e),t&&f(s),F(a,t)}}}function Se(o,e,s){let a=!1;return ue(()=>{new URL(window.location.href).searchParams.get("demo")==="true"&&s(0,a=!0)}),[a]}class xe extends re{constructor(e){super(),ae(this,e,Se,Be,le,{})}}export{xe as default};
