import{j as a,c as s,q as i,s as l,t as c,a1 as p}from"./@vue-039bafd1.js";import{_ as d}from"./plugin-vueexport-helper-c27b6911.js";const f=a({name:"SvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},size:{type:[Number,String],default:16},color:{type:String,default:"#333"}},setup(e){const r=s(()=>`#${e.prefix}-${e.name}`),n=s(()=>{const{size:o}=e;let t=`${o}`;return t=`${t.replace("px","")}px`,{width:t,height:t}});return{symbolId:r,getStyle:n}}}),u=["xlink:href","fill"];function m(e,r,n,o,t,g){return i(),l("svg",{style:p(e.getStyle),"aria-hidden":"true"},[c("use",{"xlink:href":e.symbolId,fill:e.color},null,8,u)],4)}const h=d(f,[["render",m]]);export{h as S};
