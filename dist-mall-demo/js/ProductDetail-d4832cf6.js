import{B as y,C as k,D as S,E as T,G as L,H as A,e,J as D,K as N,I as R,L as H,j as M,u as $,M as E,a as O,o as j,N as F,O as K,b as p,c as b,d as t,w as g,t as x,P as V,F as q,l as G,Q as J,R as h,T as w,g as Q,U}from"./index-b6baaa43.js";import"./index-c2ffc462.js";import{a as Y}from"./good-a2cc340e.js";import{s as z}from"./SimpleHeader-eb02e727.js";import{A as W,a as X,b as Z}from"./index-3bdf2bbf.js";import{r as tt,u as ot}from"./use-route-29860e60.js";import"./use-placeholder-eae2f82f.js";const[et,m]=y("action-bar-icon"),at=k({},tt,{dot:Boolean,text:String,icon:String,color:String,badge:S,iconClass:T,badgeProps:Object,iconPrefix:String});var st=L({name:et,props:at,setup(l,{slots:c}){const r=ot();A(W);const n=()=>{const{dot:o,badge:d,icon:u,color:_,iconClass:s,badgeProps:a,iconPrefix:i}=l;return c.icon?e(N,D({dot:o,class:m("icon"),content:d},a),{default:c.icon}):e(R,{tag:"div",dot:o,name:u,badge:d,color:_,class:[m("icon"),s],badgeProps:a,classPrefix:i},null)};return()=>e("div",{role:"button",class:m(),tabindex:0,onClick:r},[n(),c.default?c.default():l.text])}});const nt=H(st);const ct={class:"product-detail"},it={class:"detail-content"},rt={class:"detail-swipe-wrap"},dt=["src"],lt={class:"product-info"},ut={class:"product-title"},_t=t("div",{class:"product-desc"},"免邮费 顺丰快递",-1),pt={class:"product-price"},gt={class:"product-intro"},mt=t("ul",null,[t("li",null,"概述"),t("li",null,"参数"),t("li",null,"安装服务"),t("li",null,"常见问题")],-1),Ct=["innerHTML"],Bt={__name:"ProductDetail",setup(l){const c=M(),r=$(),n=E(),o=O({detail:{goodsCarouselList:[]}});j(async()=>{const{id:s}=c.params,{data:a}=await Y(s);a.goodsCarouselList=a.goodsCarouselList.map(i=>F(i)),o.detail=a,n.updateCart()}),K(()=>{const s=document.querySelector(".detail-content");s.scrollTop=0});const d=()=>{r.push({path:"/cart"})},u=async()=>{const{resultCode:s}=await w({goodsCount:1,goodsId:o.detail.goodsId});s==200&&Q("添加成功"),n.updateCart()},_=async()=>{await w({goodsCount:1,goodsId:o.detail.goodsId}),n.updateCart(),r.push({path:"/cart"})};return(s,a)=>{const i=U,P=V,C=nt,f=Z,B=X;return p(),b("div",ct,[e(z,{name:"商品详情"}),t("div",it,[t("div",rt,[e(P,{class:"my-swipe","indicator-color":"#1baeae"},{default:g(()=>[(p(!0),b(q,null,G(o.detail.goodsCarouselList,(v,I)=>(p(),J(i,{key:I},{default:g(()=>[t("img",{src:v,alt:""},null,8,dt)]),_:2},1024))),128))]),_:1})]),t("div",lt,[t("div",ut,x(o.detail.goodsName||""),1),_t,t("div",pt,[t("span",null,"¥"+x(o.detail.sellingPrice||""),1)])]),t("div",gt,[mt,t("div",{class:"product-content",innerHTML:o.detail.goodsDetailContent||""},null,8,Ct)])]),e(B,null,{default:g(()=>[e(C,{icon:"chat-o",text:"客服"}),e(C,{icon:"cart-o",badge:h(n).count?h(n).count:"",onClick:a[0]||(a[0]=v=>d()),text:"购物车"},null,8,["badge"]),e(f,{type:"warning",onClick:u,text:"加入购物车"}),e(f,{type:"danger",onClick:_,text:"立即购买"})]),_:1})])}}};export{Bt as default};
