import{B as u,G as d,r as x,W as P,a1 as C,e as p,L as f,C as S,H as _,a2 as c,Y as y}from"./index-b6baaa43.js";import{u as I}from"./use-placeholder-eae2f82f.js";import{r as N,u as $}from"./use-route-29860e60.js";import{B as k}from"./index-c2ffc462.js";const[m,l]=u("action-bar"),B=Symbol(m),E={placeholder:Boolean,safeAreaInsetBottom:C};var L=d({name:m,props:E,setup(a,{slots:o}){const n=x(),e=I(n,l),{linkChildren:r}=P(B);r();const s=()=>{var i;return p("div",{ref:n,class:[l(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(i=o.default)==null?void 0:i.call(o)])};return()=>a.placeholder?e(s):s()}});const O=f(L),[R,Y]=u("action-bar-button"),w=S({},N,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var z=d({name:R,props:w,setup(a,{slots:o}){const n=$(),{parent:e,index:r}=_(B),s=c(()=>{if(e){const t=e.children[r.value-1];return!(t&&"isButton"in t)}}),i=c(()=>{if(e){const t=e.children[r.value+1];return!(t&&"isButton"in t)}});return y({isButton:!0}),()=>{const{type:t,icon:b,text:v,color:h,loading:g,disabled:A}=a;return p(k,{class:Y([t,{last:i.value,first:s.value}]),size:"large",type:t,icon:b,color:h,loading:g,disabled:A,onClick:n},{default:()=>[o.default?o.default():v]})}}});const T=f(z);export{B as A,O as a,T as b};
