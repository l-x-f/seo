import{Q as s,a5 as r,a6 as i,a7 as u,a8 as c,a9 as l,aa as d,ab as f,ac as m,ad as h,ae as A,M as g,d as P,u as v,p as w,k as y,af as C,ag as R,ah as _,ai as b}from"./chunks/framework.7ae304b1.js";import{t as E}from"./chunks/theme.740397bf.js";const D={...E,enhanceApp({app:e}){}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=p(D),T=P({name:"VitePressApp",setup(){const{site:e}=v();return w(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),R(),_(),n.setup&&n.setup(),()=>b(n.Layout)}});async function O(){const e=j(),a=S();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function S(){return m(T)}function j(){let e=s,a;return h(t=>{let o=A(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{r(a.route,t.site),e.mount("#app")})});export{O as createApp};
