import{o as D,g as j,u as F,d as P}from"./@vue-0377b646.js";function p(e){return typeof e=="function"?e():F(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const m=()=>{};function y(e,r){function t(...n){return new Promise((o,i)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(o).catch(i)})}return t}function g(e,r={}){let t,n,o=m;const i=l=>{clearTimeout(l),o(),o=m};return l=>{const a=p(e),u=p(r.maxWait);return t&&i(t),a<=0||u!==void 0&&u<=0?(n&&(i(n),n=null),Promise.resolve(l())):new Promise((s,T)=>{o=r.rejectOnCancel?T:s,u&&!n&&(n=setTimeout(()=>{t&&i(t),n=null,s(l())},u)),t=setTimeout(()=>{n&&i(n),n=null,s(l())},a)})}}function C(...e){let r=0,t,n=!0,o=m,i,c,l,a,u;!P(e[0])&&typeof e[0]=="object"?{delay:c,trailing:l=!0,leading:a=!0,rejectOnCancel:u=!1}=e[0]:[c,l=!0,a=!0,u=!1]=e;const s=()=>{t&&(clearTimeout(t),t=void 0,o(),o=m)};return b=>{const f=p(c),h=Date.now()-r,d=()=>i=b();return s(),f<=0?(r=Date.now(),d()):(h>f&&(a||!n)?(r=Date.now(),d()):l&&(i=new Promise((w,x)=>{o=u?x:w,t=setTimeout(()=>{r=Date.now(),n=!0,w(d()),s()},Math.max(0,f-h))})),!a&&!t&&(t=setTimeout(()=>n=!0,f)),n=!1,i)}}function W(e){return e||j()}function R(e,r=200,t={}){return y(g(r,t),e)}function G(e,r=200,t=!1,n=!0,o=!1){return y(C(r,t,n,o),e)}function L(e,r){W(r)&&D(e,r)}export{G as a,L as t,R as u};
