import{A as b,d as g,f as o,bg as C,x,a5 as w,a8 as B,I as h,G as y,a as S,k as l,w as r,o as I,j as P}from"./index-47556e42.js";import{C as T}from"./index-44953755.js";const[N,d]=b("tag"),A={size:String,mark:Boolean,show:x,type:w("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var E=g({name:N,props:A,emits:["close"],setup(s,{slots:i,emit:_}){const e=t=>{t.stopPropagation(),_("close",t)},n=()=>s.plain?{color:s.textColor||s.color,borderColor:s.color}:{color:s.textColor,background:s.color},a=()=>{var t;const{type:u,mark:m,plain:p,round:k,size:c,closeable:z}=s,f={mark:m,plain:p,round:k};c&&(f[c]=c);const v=z&&o(h,{name:"cross",class:[d("close"),B],onClick:e},null);return o("span",{style:n(),class:d([f,u])},[(t=i.default)==null?void 0:t.call(i),v])};return()=>o(C,{name:s.closeable?"van-fade":void 0},{default:()=>[s.show?a():null]})}});const V=y(E);const j={class:"h-screen flex flex-col"},D={class:"w-full bg-fff"},F={class:"w-full bg-fff mt-2"},G=l("span",{class:"custom-title"},"单元格",-1),H={class:"w-full bg-fff mt-2"},K={class:"w-full bg-fff mt-2"},q=l("div",{class:"mb-4 w-full bg-fff"},null,-1),M=g({__name:"index",setup(s){return(i,_)=>{const e=T,n=h,a=V;return I(),S("div",j,[l("div",D,[o(e,{title:"登录/注册",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"单元格"},{"right-icon":r(()=>[o(n,{name:"search",class:"search-icon"})]),_:1})]),l("div",F,[o(e,{title:"我是买家",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"我是买家",size:"large",icon:"shop-o","is-link":""}),o(e,{value:"内容",icon:"shop-o","is-link":""},{title:r(()=>[G,o(a,{type:"primary"},{default:r(()=>[P("标签")]),_:1})]),_:1})]),l("div",H,[o(e,{title:"积分中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"积分中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"积分中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"积分中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"积分中心",size:"large",icon:"shop-o","is-link":""})]),l("div",K,[o(e,{title:"客服中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"客服中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"客服中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"客服中心",size:"large",icon:"shop-o","is-link":""}),o(e,{title:"客服中心",size:"large",icon:"shop-o","is-link":""})]),q])}}});export{M as default};
