import{c as f,d as h,W as b,b as l,n as k,Q as t,aj as w,S,w as y}from"./index-3d2bf020.js";const[x,c]=f("switch"),z={size:k,loading:Boolean,disabled:Boolean,modelValue:t,activeColor:String,inactiveColor:String,activeValue:{type:t,default:!0},inactiveValue:{type:t,default:!1}};var P=h({name:x,props:z,emits:["change","update:modelValue"],setup(e,{emit:d,slots:n}){const o=()=>e.modelValue===e.activeValue,u=()=>{if(!e.disabled&&!e.loading){const a=o()?e.inactiveValue:e.activeValue;d("update:modelValue",a),d("change",a)}},r=()=>{if(e.loading){const a=o()?e.activeColor:e.inactiveColor;return l(w,{class:c("loading"),color:a},null)}if(n.node)return n.node()};return b(()=>e.modelValue),()=>{var a;const{size:v,loading:g,disabled:s,activeColor:m,inactiveColor:V}=e,i=o(),C={fontSize:S(v),backgroundColor:i?m:V};return l("div",{role:"switch",class:c({on:i,loading:g,disabled:s}),style:C,tabindex:s?void 0:0,"aria-checked":i,onClick:u},[l("div",{class:c("node")},[r()]),(a=n.background)==null?void 0:a.call(n)])}}});const L=y(P);export{L as S};
