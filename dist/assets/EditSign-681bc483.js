import{d as u,_ as p,r as d,$ as _,a0 as g,v as h,b as n,z as r,D as v,L as V,ak as k}from"./index-a4e6f10c.js";import"./index-d45402ed.js";import{F as x}from"./index-de1cbcae.js";import{_ as y}from"./NavBar.vue_vue_type_script_setup_true_lang-5d74c38c.js";import{F as w}from"./index-3b61c6f5.js";import"./index-b5e81437.js";import"./Icon-adcc2f31.js";const z=u({__name:"EditSign",setup(F){const l=p(),{sign:i}=l.getUserInfo,o=d(),a=_({sign:""});function m(){var t;(t=o.value)==null||t.validate().then(async()=>{var e;try{const s=(e=o.value)==null?void 0:e.getValues();k({message:`当前表单值：${JSON.stringify(s)}`})}finally{}}).catch(()=>{console.error("验证失败")})}return g(()=>{a.sign=i??""}),(t,e)=>{const s=x,c=w;return v(),h("div",null,[n(y,null,{right:r(()=>[V("span",{onClick:m},"保存")]),_:1}),n(c,{ref_key:"formRef",ref:o},{default:r(()=>[n(s,{modelValue:a.sign,"onUpdate:modelValue":e[0]||(e[0]=f=>a.sign=f),class:"mt-20px",name:"sign",clearable:"",rows:"4",autosize:"",label:"签名",type:"textarea",maxlength:"70",placeholder:"随知修行乃当务之急，然怠惰度日至今","show-word-limit":""},null,8,["modelValue"])]),_:1},512)])}}});export{z as default};
