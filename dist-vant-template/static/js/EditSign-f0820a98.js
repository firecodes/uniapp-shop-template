import{e as f,j as u,F as d}from"./vant-7bd86a8c.js";import{_}from"./NavBar.vuevuetypescriptsetuptruelang-8639ca42.js";import{b as g}from"./index-03307fbd.js";import{j as h,r as V,a as v,e as x,s as y,E as m,W as a,q as k,t as w}from"./@vue-0377b646.js";import"./@vant-58ad0652.js";import"./@vicons-a0e492aa.js";import"./@xicons-08a530b2.js";import"./css-render-bba99c0e.js";import"./@emotion-8a8e73f6.js";import"./vue-router-364552f7.js";/* empty css                */import"./pinia-c96fbc4a.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./vue-i18n-1caedbd2.js";import"./@intlify-9d27331d.js";import"./axios-a342f982.js";import"./qs-3adf1c80.js";import"./call-bind-0362a3f2.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./side-channel-27cf7d8c.js";import"./object-inspect-46f86162.js";import"./lodash-es-4d284b0e.js";import"./mockjs-5811d250.js";import"./vite-plugin-mock-3c140df3.js";import"./path-to-regexp-31db6522.js";const ao=h({__name:"EditSign",setup(N){const s=g(),{sign:n}=s.getUserInfo,t=V(),e=v({sign:""});function p(){var r;(r=t.value)==null||r.validate().then(async()=>{var o;try{const i=(o=t.value)==null?void 0:o.getValues();u({message:`当前表单值：${JSON.stringify(i)}`})}finally{}}).catch(()=>{console.error("验证失败")})}return x(()=>{e.sign=n??""}),(r,o)=>{const i=d,l=f;return k(),y("div",null,[m(_,null,{right:a(()=>[w("span",{onClick:p},"保存")]),_:1}),m(l,{ref_key:"formRef",ref:t},{default:a(()=>[m(i,{modelValue:e.sign,"onUpdate:modelValue":o[0]||(o[0]=c=>e.sign=c),class:"mt-20px",name:"sign",clearable:"",rows:"4",autosize:"",label:"签名",type:"textarea",maxlength:"70",placeholder:"随知修行乃当务之急，然怠惰度日至今","show-word-limit":""},null,8,["modelValue"])]),_:1},512)])}}});export{ao as default};
