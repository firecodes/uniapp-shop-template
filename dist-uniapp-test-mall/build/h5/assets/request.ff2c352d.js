import{a7 as e,ab as t,e as a}from"./index.1710046744346.js";import{u as o}from"./plugin-vueexport-helper.6cd7b27f.js";const s={invoke(e){var t;e.url.startsWith("http")||(e.url="https://pcapi-xiaotuxian-front.itheima.net"+e.url);const a=null==(t=o().user)?void 0:t.token;a&&(e.header={...e.header,Authorization:a}),e.header={...e.header,"source-client":"miniapp"},e.timeout=1e4}};e("request",s),e("uploadFile",s);const i=e=>new Promise(((o,s)=>{t({...e,success(e){e.statusCode>=200&&e.statusCode<=300?o(e.data):(401==e.statusCode||a({icon:"none",title:e.data.msg||"网络错误，请重试"}),s(e))},fail(e){a({icon:"none",title:"网络错误，请重试"}),s(e)}})})),r=e=>i({...e,method:"GET"}),n=e=>i({...e,method:"POST"}),u=e=>i({...e,method:"PUT"}),d=e=>i({...e,method:"DELETE"});export{u as a,d,r as g,n as p};