import{A as p,x as C,q as x,aj as $,d as B,y as k,aA as O,aT as V,f as d,aU as R,E as j,am as E,G as A,s as M,aV as N,aW as z,$ as q,H as w,c as D,aX as F,C as G,aJ as H,I as J}from"./index-47556e42.js";const[_,I]=p("tabbar"),K={route:Boolean,fixed:C,border:C,zIndex:x,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:$(0),safeAreaInsetBottom:{type:Boolean,default:null}},T=Symbol(_);var U=B({name:_,props:K,emits:["change","update:modelValue"],setup(e,{emit:u,slots:r}){const m=k(),{linkChildren:b}=O(T),c=V(m,I),f=()=>{var a;return(a=e.safeAreaInsetBottom)!=null?a:e.fixed},n=()=>{var a;const{fixed:t,zIndex:o,border:l}=e;return d("div",{ref:m,role:"tablist",style:R(o),class:[I({fixed:t}),{[j]:l,"van-safe-area-bottom":f()}]},[(a=r.default)==null?void 0:a.call(r)])};return b({props:e,setActive:(a,t)=>{E(e.beforeChange,{args:[a],done(){u("update:modelValue",a),u("change",a),t()}})}}),()=>e.fixed&&e.placeholder?c(n):n()}});const L=A(U),[W,h]=p("tabbar-item"),X=M({},N,{dot:Boolean,icon:String,name:x,badge:x,badgeProps:Object,iconPrefix:String});var Y=B({name:W,props:X,emits:["click"],setup(e,{emit:u,slots:r}){const m=z(),b=q().proxy,{parent:c,index:f}=w(T);if(!c)return;const n=D(()=>{var t;const{route:o,modelValue:l}=c.props;if(o&&"$route"in b){const{$route:v}=b,{to:i}=e,s=H(i)?i:{path:i};return!!v.matched.find(P=>{const y="path"in s&&s.path===P.path,S="name"in s&&s.name===P.name;return y||S})}return((t=e.name)!=null?t:f.value)===l}),g=t=>{var o;n.value||c.setActive((o=e.name)!=null?o:f.value,m),u("click",t)},a=()=>{if(r.icon)return r.icon({active:n.value});if(e.icon)return d(J,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var t;const{dot:o,badge:l}=e,{activeColor:v,inactiveColor:i}=c.props,s=n.value?v:i;return d("div",{role:"tab",class:h({active:n.value}),style:{color:s},tabindex:0,"aria-selected":n.value,onClick:g},[d(F,G({dot:o,class:h("icon"),content:l},e.badgeProps),{default:a}),d("div",{class:h("text")},[(t=r.default)==null?void 0:t.call(r,{active:n.value})])])}}});const Q=A(Y);export{L as T,Q as a};
