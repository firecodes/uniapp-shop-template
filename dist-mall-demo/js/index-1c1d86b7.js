import{r as L,u as y}from"./use-route-29860e60.js";import{B as D,$ as B,D as o,a1 as I,E as u,C as V,G as _,e as n,aa as s,I as b,L as q}from"./index-b6baaa43.js";const[z,r]=D("cell"),A={tag:B("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:I,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},N=V({},A,L);var R=_({name:z,props:N,setup(e,{slots:l}){const v=y(),g=()=>{if(l.label||s(e.label))return n("div",{class:[r("label"),e.labelClass]},[l.label?l.label():e.label])},h=()=>{var a;if(l.title||s(e.title)){const t=(a=l.title)==null?void 0:a.call(l);return Array.isArray(t)&&t.length===0?void 0:n("div",{class:[r("title"),e.titleClass],style:e.titleStyle},[t||n("span",null,[e.title]),g()])}},m=()=>{const a=l.value||l.default;if(a||s(e.value))return n("div",{class:[r("value"),e.valueClass]},[a?a():n("span",null,[e.value])])},C=()=>{if(l.icon)return l.icon();if(e.icon)return n(b,{name:e.icon,class:r("left-icon"),classPrefix:e.iconPrefix},null)},w=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){const a=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return n(b,{name:a,class:r("right-icon")},null)}};return()=>{var a;const{tag:t,size:i,center:P,border:S,isLink:k,required:x}=e,c=(a=e.clickable)!=null?a:k,d={center:P,required:!!x,clickable:c,borderless:!S};return i&&(d[i]=!!i),n(t,{class:r(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:v},{default:()=>{var f;return[C(),h(),m(),w(),(f=l.extra)==null?void 0:f.call(l)]}})}}});const G=q(R);export{G as C,A as c};
