import{c as D,d as I,r as m,a as R,n as w,t as s,b as l,ai as d,aZ as A,I as C,g as P,w as L}from"./index-abfc8e47.js";const[N,t]=D("nav-bar"),S={title:String,fixed:Boolean,zIndex:w,border:s,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var y=I({name:N,props:S,emits:["clickLeft","clickRight"],setup(e,{emit:n,slots:a}){const r=m(),f=R(r,t),o=i=>{e.leftDisabled||n("clickLeft",i)},h=i=>{e.rightDisabled||n("clickRight",i)},g=()=>a.left?a.left():[e.leftArrow&&l(C,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:t("text")},[e.leftText])],b=()=>a.right?a.right():l("span",{class:t("text")},[e.rightText]),c=()=>{const{title:i,fixed:x,border:u,zIndex:v}=e,B=P(v),T=e.leftArrow||e.leftText||a.left,k=e.rightText||a.right;return l("div",{ref:r,style:B,class:[t({fixed:x}),{[A]:u,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:t("content")},[T&&l("div",{class:[t("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?d:""],onClick:o},[g()]),l("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():i]),k&&l("div",{class:[t("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?d:""],onClick:h},[b()])])])};return()=>e.fixed&&e.placeholder?f(c):c()}});const O=L(y);export{O as N};
