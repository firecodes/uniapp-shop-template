import{c as y,f as L,h as D,d as I,i as B,b as n,af as V,n as o,t as _,Q as u,aA as s,I as b,w as q}from"./index-a4e6f10c.js";const[A,i]=y("cell"),z={tag:V("div"),icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:_,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},N=L({},z,D);var R=I({name:A,props:N,setup(e,{slots:l}){const v=B(),g=()=>{if(l.label||s(e.label))return n("div",{class:[i("label"),e.labelClass]},[l.label?l.label():e.label])},h=()=>{var a;if(l.title||s(e.title)){const t=(a=l.title)==null?void 0:a.call(l);return Array.isArray(t)&&t.length===0?void 0:n("div",{class:[i("title"),e.titleClass],style:e.titleStyle},[t||n("span",null,[e.title]),g()])}},m=()=>{const a=l.value||l.default;if(a||s(e.value))return n("div",{class:[i("value"),e.valueClass]},[a?a():n("span",null,[e.value])])},w=()=>{if(l.icon)return l.icon();if(e.icon)return n(b,{name:e.icon,class:i("left-icon"),classPrefix:e.iconPrefix},null)},C=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){const a=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return n(b,{name:a,class:i("right-icon")},null)}};return()=>{var a;const{tag:t,size:r,center:P,border:S,isLink:k,required:x}=e,c=(a=e.clickable)!=null?a:k,d={center:P,required:!!x,clickable:c,borderless:!S};return r&&(d[r]=!!r),n(t,{class:i(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:v},{default:()=>{var f;return[w(),h(),m(),C(),(f=l.extra)==null?void 0:f.call(l)]}})}}});const T=q(R);export{T as C,z as c};
