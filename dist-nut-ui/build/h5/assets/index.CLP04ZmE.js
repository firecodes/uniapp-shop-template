import{d as f,c as $,o,a as r,w as t,b as a,j as c,t as d,s as p,g,e as y,f as v,i as b,h as E,F as I}from"./index.1709636774746.js";import{c as N,a as n,P as T,g as h,m as z,b as L}from"./prefix.CG6Gj_JG.js";import{_ as P}from"./plugin-vueexport-helper.DlAUqK2U.js";import{N as R}from"./icon.sT-AJalv.js";import{C as S}from"./event.DRiCrrdg.js";import{p as V}from"./pxCheck.f4SXeRzl.js";const F={...N,title:n(""),desc:n("")},w=`${T}-cell-group`,G=f({name:w,options:{virtualHost:!0,addGlobalClass:!0}}),j=f({...G,props:F,setup(m){const k=m,l=$(()=>h(k,w));return(s,C)=>{const i=b;return o(),r(i,{class:y(l.value),style:v(s.customStyle)},{default:t(()=>[s.$slots.title?a(s.$slots,"title",{key:0},void 0,!0):s.title?(o(),r(i,{key:1,class:"nut-cell-group__title"},{default:t(()=>[c(d(s.title),1)]),_:1})):p("",!0),s.$slots.desc?a(s.$slots,"desc",{key:2},void 0,!0):s.desc?(o(),r(i,{key:3,class:"nut-cell-group__desc"},{default:t(()=>[c(d(s.desc),1)]),_:1})):p("",!0),g(i,{class:"nut-cell-group__wrap"},{default:t(()=>[a(s.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["class","style"])}}}),W=P(j,[["__scopeId","data-v-3eac95c2"]]),A={...N,title:n(""),subTitle:n(""),desc:n(""),descTextAlign:n("right"),isLink:Boolean,to:n(""),roundRadius:z(""),center:Boolean,size:n("")},H={[S]:m=>m instanceof Object},_=`${T}-cell`,M=f({name:_,options:{virtualHost:!0,addGlobalClass:!0}}),D=f({...M,props:A,emits:H,setup(m,{emit:k}){const l=m,s=k,C=$(()=>h(l,_,{[`${_}--clickable`]:l.isLink||l.to,[`${_}--center`]:l.center,[`${_}--large`]:l.size==="large"})),i=$(()=>L(l,{borderRadius:V(l.roundRadius)}));function B(e){s(S,e)}return(e,K)=>{const u=b;return o(),r(u,{class:y(C.value),style:v(i.value),onClick:B},{default:t(()=>[a(e.$slots,"default",{},()=>[e.$slots.icon?(o(),r(u,{key:0,class:"nut-cell__icon"},{default:t(()=>[a(e.$slots,"icon",{},void 0,!0)]),_:3})):p("",!0),e.title||e.subTitle||e.$slots.title?(o(),r(u,{key:1,class:"nut-cell__title"},{default:t(()=>[e.subTitle?(o(),E(I,{key:0},[a(e.$slots,"title",{},()=>[g(u,{class:"title"},{default:t(()=>[c(d(e.title),1)]),_:1})],!0),g(u,{class:"nut-cell__title-desc"},{default:t(()=>[c(d(e.subTitle),1)]),_:1})],64)):a(e.$slots,"title",{key:1},()=>[c(d(e.title),1)],!0)]),_:3})):p("",!0),e.desc||e.$slots.desc?(o(),r(u,{key:2,class:y(["nut-cell__value",{"nut-cell__value--alone":!e.title&&!e.subTitle&&!e.$slots.title}]),style:v({"text-align":e.descTextAlign})},{default:t(()=>[a(e.$slots,"desc",{},()=>[c(d(e.desc),1)],!0)]),_:3},8,["class","style"])):p("",!0),a(e.$slots,"link",{},()=>[e.isLink||e.to?(o(),r(R,{key:0,name:"right",class:"nut-cell__link"})):p("",!0)],!0)],!0)]),_:3},8,["class","style","onClick"])}}}),Y=P(D,[["__scopeId","data-v-6fee907e"]]);export{W as N,Y as _};
