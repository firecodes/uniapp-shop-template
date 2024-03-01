import{d as j,a_ as T,l as g,a$ as R,b0 as I,aF as z}from"./index-8edc4f7f.js";function k(t){let e=0;for(let n=0;n<t.length;++n)t[n]==="&"&&++e;return e}const w=/\s*,(?![^(]*\))\s*/g,q=/\s+/g;function B(t,e){const n=[];return e.split(w).forEach(r=>{let u=k(r);if(u){if(u===1){t.forEach(o=>{n.push(r.replace("&",o))});return}}else{t.forEach(o=>{n.push((o&&o+" ")+r)});return}let i=[r];for(;u--;){const o=[];i.forEach(f=>{t.forEach(s=>{o.push(f.replace("&",s))})}),i=o}i.forEach(o=>n.push(o))}),n}function L(t,e){const n=[];return e.split(w).forEach(r=>{t.forEach(u=>{n.push((u&&u+" ")+r)})}),n}function N(t){let e=[""];return t.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?e=B(e,n):e=L(e,n))}),e.join(", ").replace(q," ")}const M=/[A-Z]/g;function A(t){return t.replace(M,e=>"-"+e.toLowerCase())}function O(t,e="  "){return typeof t=="object"&&t!==null?` {
`+Object.entries(t).map(n=>e+`  ${A(n[0])}: ${n[1]};`).join(`
`)+`
`+e+"}":`: ${t};`}function P(t,e,n){return typeof t=="function"?t({context:e.context,props:n}):t}function E(t,e,n,r){if(!e)return"";const u=P(e,n,r);if(!u)return"";if(typeof u=="string")return`${t} {
${u}
}`;const i=Object.keys(u);if(i.length===0)return n.config.keepEmptyBlock?t+` {
}`:"";const o=t?[t+" {"]:[];return i.forEach(f=>{const s=u[f];if(f==="raw"){o.push(`
`+s+`
`);return}f=A(f),s!=null&&o.push(`  ${f}${O(s)}`)}),t&&o.push("}"),o.join(`
`)}function p(t,e,n){t&&t.forEach(r=>{if(Array.isArray(r))p(r,e,n);else if(typeof r=="function"){const u=r(e);Array.isArray(u)?p(u,e,n):u&&n(u)}else r&&n(r)})}function $(t,e,n,r,u,i){const o=t.$;!o||typeof o=="string"?e.push(o):typeof o=="function"?e.push(o({context:r.context,props:u})):(o.before&&o.before(r.context),!o.$||typeof o.$=="string"?e.push(o.$):o.$&&e.push(o.$({context:r.context,props:u})));const f=N(e),s=E(f,t.props,r,u);i&&s&&i.insertRule(s),!i&&s.length&&n.push(s),t.children&&p(t.children,{context:r.context,props:u},c=>{if(typeof c=="string"){const h=E(f,{raw:c},r,u);i?i.insertRule(h):n.push(h)}else $(c,e,n,r,u,i)}),e.pop(),o&&o.after&&o.after(r.context)}function S(t,e,n,r=!1){const u=[];return $(t,[],u,e,n,r?t.instance.__styleSheet:void 0),r?"":u.join(`

`)}function W(t){for(var e=0,n,r=0,u=t.length;u>=4;++r,u-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(u){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}function x(t){if(!t)return;const e=t.parentElement;e&&e.removeChild(t)}function v(t){return document.querySelector(`style[cssr-id="${t}"]`)}function F(t){const e=document.createElement("style");return e.setAttribute("cssr-id",t),e}window&&(window.__cssrContext={});function _(t){const e=t.getAttribute("mount-count");return e===null?null:Number(e)}function C(t,e){t.setAttribute("mount-count",String(e))}function b(t,e,n,r){const{els:u}=e;if(n===void 0)u.forEach(x),e.els=[];else{const i=v(n);if(i&&u.includes(i)){const o=_(i);r?o===null?console.error(`[css-render/unmount]: The style with target='${n}' is mounted in count mode.`):o<=1?(x(i),e.els=u.filter(f=>f!==i)):C(i,o-1):o!==null?console.error(`[css-render/unmount]: The style with target='${n}' is mounted in no-count mode.`):(x(i),e.els=u.filter(f=>f!==i))}}}function K(t,e){t.push(e)}function U(t,e,n,r,u,i,o,f,s){if(o&&!s){if(n===void 0){console.error("[css-render/mount]: `id` is required in `boost` mode.");return}const a=window.__cssrContext;a[n]||(a[n]=!0,S(e,t,r,o));return}let c;const{els:h}=e;let d;if(n===void 0&&(d=e.render(r),n=W(d)),s){s(n,d??e.render(r));return}const l=v(n);if(f||l===null){if(c=l===null?F(n):l,d===void 0&&(d=e.render(r)),c.textContent=d,l!==null)return;if(u){const a=document.head.getElementsByTagName("style")[0]||null;document.head.insertBefore(c,a)}else document.head.appendChild(c);i&&C(c,1),K(h,c)}else{const a=_(l);i?a===null?console.error(`[css-render/mount]: The style with id='${n}' has been mounted in no-count mode.`):C(l,a+1):a!==null&&console.error(`[css-render/mount]: The style with id='${n}' has been mounted in count mode.`)}return l??c}function Z(t){return S(this,this.instance,t)}function D(t={}){const{target:e,id:n,ssr:r,props:u,count:i=!1,head:o=!1,boost:f=!1,force:s=!1}=t;return U(this.instance,this,n??e,u,o,i,f,s,r)}function G(t={}){const{id:e,target:n,delay:r=0,count:u=!1}=t;r===0?b(this.instance,this,e??n,u):setTimeout(()=>b(this.instance,this,e??n,u),r)}const m=function(t,e,n,r){return{instance:t,$:e,props:n,children:r,els:[],render:Z,mount:D,unmount:G}},H=function(t,e,n,r){return Array.isArray(e)?m(t,{$:null},null,e):Array.isArray(n)?m(t,e,null,n):Array.isArray(r)?m(t,e,n,r):m(t,e,n,null)};function J(t={}){let e=null;const n={c:(...r)=>H(n,...r),use:(r,...u)=>r.install(n,...u),find:v,context:{},config:t,get __styleSheet(){if(!e){const r=document.createElement("style");return document.head.appendChild(r),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return n}const{c:y}=J(),Q=y(".xicon",{width:"1em",height:"1em",display:"inline-flex"},[y("svg",{width:"1em",height:"1em"}),y("svg:not([fill])",{fill:"currentColor"})]),V=()=>{Q.mount({id:"xicons-icon"})},X={size:[String,Number],color:String,tag:String},Y=Symbol("IconConfigInjection"),ee="span",te=j({name:"Icon",props:X,setup(t,{slots:e}){const n=T(Y,null),r=g(()=>{var o;const f=(o=t.size)!==null&&o!==void 0?o:n==null?void 0:n.size;if(f!==void 0)return typeof f=="number"||/^\d+$/.test(f)?`${f}px`:f}),u=g(()=>{const{color:o}=t;return o===void 0?n?n.color:void 0:o}),i=g(()=>{var o;const{tag:f}=t;return f===void 0?(o=n==null?void 0:n.tag)!==null&&o!==void 0?o:ee:f});return R(()=>{V()}),()=>I(i.value,{class:"xicon",style:{color:u.value,fontSize:r.value}},[z(e,"default")])}});export{te as I};
