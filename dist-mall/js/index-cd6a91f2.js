import{c as T,t as B,n as C,m as O,d as k,r as D,u as E,a as M,b as _,g as j,B as z,e as F,w as V,f as H,h as K,i as q,j as G,k as J,l as x,o as L,p as Y,q as Z,I as Q,s as U,v as I,x as h,y as W,z as g,A as X,C as ee,D as v,E as A,K as te,F as ae,G as ne,H as oe,J as re}from"./index-3d2bf020.js";import{N as se}from"./index-0b8935aa.js";import{_ as ce}from"./plugin-vueexport-helper-c27b6911.js";const[$,S]=T("tabbar"),le={route:Boolean,fixed:B,border:B,zIndex:C,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:O(0),safeAreaInsetBottom:{type:Boolean,default:null}},w=Symbol($);var ie=k({name:$,props:le,emits:["change","update:modelValue"],setup(e,{emit:u,slots:s}){const d=D(),{linkChildren:f}=E(w),i=M(d,S),b=()=>{var t;return(t=e.safeAreaInsetBottom)!=null?t:e.fixed},o=()=>{var t;const{fixed:a,zIndex:c,border:m}=e;return _("div",{ref:d,role:"tablist",style:j(c),class:[S({fixed:a}),{[z]:m,"van-safe-area-bottom":b()}]},[(t=s.default)==null?void 0:t.call(s)])};return f({props:e,setActive:(t,a)=>{F(e.beforeChange,{args:[t],done(){u("update:modelValue",t),u("change",t),a()}})}}),()=>e.fixed&&e.placeholder?i(o):o()}});const ue=V(ie),[de,P]=T("tabbar-item"),me=H({},K,{dot:Boolean,icon:String,name:C,badge:C,badgeProps:Object,iconPrefix:String});var ve=k({name:de,props:me,emits:["click"],setup(e,{emit:u,slots:s}){const d=q(),f=G().proxy,{parent:i,index:b}=J(w);if(!i)return;const o=x(()=>{var a;const{route:c,modelValue:m}=i.props;if(c&&"$route"in f){const{$route:n}=f,{to:r}=e,l=Z(r)?r:{path:r};return!!n.matched.find(y=>{const N="path"in l&&l.path===y.path,R="name"in l&&l.name===y.name;return N||R})}return((a=e.name)!=null?a:b.value)===m}),p=a=>{var c;o.value||i.setActive((c=e.name)!=null?c:b.value,d),u("click",a)},t=()=>{if(s.icon)return s.icon({active:o.value});if(e.icon)return _(Q,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var a;const{dot:c,badge:m}=e,{activeColor:n,inactiveColor:r}=i.props,l=o.value?n:r;return _("div",{role:"tab",class:P({active:o.value}),style:{color:l},tabindex:0,"aria-selected":o.value,onClick:p},[_(L,Y({dot:c,class:P("icon"),content:m},e.badgeProps),{default:t}),_("div",{class:P("text")},[(a=s.default)==null?void 0:a.call(s,{active:o.value})])])}}});const _e=V(ve);const fe={class:"h-screen flex flex-col"},be=k({__name:"index",setup(e){const u=U(),s=x(()=>u.keepAliveComponents),d=ee(),f=x(()=>d.meta.title),i=x(()=>u.menus.filter(o=>{var p;return!((p=o.meta)!=null&&p.innerPage)})),b=x(()=>!d.meta.hiddenHeader);return(o,p)=>{const t=se,a=X("routerView"),c=_e,m=ue;return v(),I("div",fe,[b.value?(v(),h(t,{key:0,placeholder:"",fixed:"",title:f.value},null,8,["title"])):W("",!0),_(a,{class:"flex-1 overflow-x-hidden"},{default:g(({Component:n,route:r})=>[s.value?(v(),h(te,{key:0,include:s.value},[(v(),h(A(n),{key:r.fullPath}))],1032,["include"])):(v(),h(A(n),{key:r.fullPath}))]),_:1}),_(m,{route:"",class:"tabbar"},{default:g(()=>[(v(!0),I(ae,null,ne(i.value,n=>{var r;return v(),h(c,{key:n.name,replace:"",to:n.path,icon:(r=n==null?void 0:n.meta)==null?void 0:r.icon},{default:g(()=>{var l;return[oe(re((l=n.meta)==null?void 0:l.title),1)]}),_:2},1032,["to","icon"])}),128))]),_:1})])}}});const ge=ce(be,[["__scopeId","data-v-a5a2b951"]]);export{ge as default};
