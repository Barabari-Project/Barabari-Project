var _=(o,n,e)=>new Promise((s,r)=>{var m=t=>{try{i(e.next(t))}catch(a){r(a)}},u=t=>{try{i(e.throw(t))}catch(a){r(a)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(m,u);i((e=e.apply(o,n)).next())});import{_ as c}from"./preload-helper.41c905a7.js";const l=(o,n)=>{const e=o[n];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+n)))})},p=n=>_(void 0,[n],function*({data:o}){const e=yield l(Object.assign({"../../../../content/data-analytics/index.mdx":()=>c(()=>import("./index.86aa1e85.js"),["./index.86aa1e85.js","./index.652d0663.js"],import.meta.url),"../../../../content/dsa/index.mdx":()=>c(()=>import("./index.b03d009b.js"),["./index.b03d009b.js","./index.652d0663.js"],import.meta.url)}),`../../../../content/${o.post.slug}/index.mdx`);return{post:o.post,component:e.default}}),v=Object.freeze(Object.defineProperty({__proto__:null,load:p},Symbol.toStringTag,{value:"Module"}));export{v as _,p as l};
