import{d as f,_ as k,r as v,$ as h,a0 as g,v as y,b as c,z as i,O as N,P as V,L as o,D as S,ak as x}from"./index-e35fb8b8.js";import"./index-11a8565a.js";import{F as E}from"./index-f23aabd9.js";import{_ as F}from"./NavBar.vue_vue_type_script_setup_true_lang-372bb563.js";import{F as I}from"./index-4fb8faad.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-9b5a9b13.js";import"./Icon-aa9292b8.js";const C=n=>(N("data-v-b2ded4da"),n=n(),V(),n),P=C(()=>o("div",{class:"note p-6"},[o("p",null,"昵称支持2-12个中文字符或3-24个英文字符，"),o("p",null,"符号仅支持”-“和”_“和”.“以及“·”")],-1)),$=f({__name:"EditNickname",setup(n){const l=k(),{nickname:m}=l.getUserInfo,a=v(),s=h({nickname:""});function d(){return async e=>/^[\u4E00-\u9FA5A-Za-z0-9-_.·]+$/.test(e)?e.length<2||e.length>12?Promise.resolve("长度不符合"):Promise.resolve(!0):Promise.resolve("请输入正确内容")}function _(){var e;(e=a.value)==null||e.validate().then(async()=>{var t;try{const r=(t=a.value)==null?void 0:t.getValues();x({message:`当前表单值：${JSON.stringify(r)}`})}finally{}}).catch(()=>{console.error("验证失败")})}return g(()=>{s.nickname=m}),(e,t)=>{const r=E,p=I;return S(),y("div",null,[c(F,null,{right:i(()=>[o("span",{onClick:_},"保存")]),_:1}),c(p,{ref_key:"formRef",ref:a},{default:i(()=>[c(r,{modelValue:s.nickname,"onUpdate:modelValue":t[0]||(t[0]=u=>s.nickname=u),class:"mt-4",name:"nickname",placeholder:"请输入昵称（2-12字）",rules:[{validator:d(),trigger:"onChange"}]},null,8,["modelValue","rules"])]),_:1},512),P])}}});const J=b($,[["__scopeId","data-v-b2ded4da"]]);export{J as default};
