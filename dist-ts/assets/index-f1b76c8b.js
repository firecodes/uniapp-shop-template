import{c as B,d as $,r as u,j,l as C,S as f,aA as D,U,au as _,aB as M,a0 as N,ac as P,b as n,n as d,t as S,af as b,aC as R,aM as A,p as z,I as F,w as O}from"./index-d3511f07.js";const[T,i]=B("image"),V={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:S,errorIcon:b("photo-fail"),iconPrefix:String,showLoading:S,loadingIcon:b("photo"),crossorigin:String,referrerpolicy:String};var q=$({name:T,props:V,emits:["load","error"],setup(r,{emit:g,slots:c}){const t=u(!1),o=u(!0),a=u(),{$Lazyload:l}=j().proxy,x=C(()=>{const e={width:f(r.width),height:f(r.height)};return D(r.radius)&&(e.overflow="hidden",e.borderRadius=f(r.radius)),e});U(()=>r.src,()=>{t.value=!1,o.value=!0});const v=e=>{o.value&&(o.value=!1,g("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:a.value,enumerable:!0}),v(e)},m=e=>{t.value=!0,o.value=!1,g("error",e)},y=(e,s,I)=>I?I():n(F,{name:e,size:r.iconSize,class:s,classPrefix:r.iconPrefix},null),E=()=>{if(o.value&&r.showLoading)return n("div",{class:i("loading")},[y(r.loadingIcon,i("loading-icon"),c.loading)]);if(t.value&&r.showError)return n("div",{class:i("error")},[y(r.errorIcon,i("error-icon"),c.error)])},k=()=>{if(t.value||!r.src)return;const e={alt:r.alt,class:i("img"),style:{objectFit:r.fit,objectPosition:r.position},crossorigin:r.crossorigin,referrerpolicy:r.referrerpolicy};return r.lazyLoad?R(n("img",z({ref:a},e),null),[[A("lazy"),r.src]]):n("img",z({ref:a,src:r.src,onLoad:v,onError:m},e),null)},w=({el:e})=>{const s=()=>{e===a.value&&o.value&&h()};a.value?s():P(s)},L=({el:e})=>{e===a.value&&!t.value&&m()};return l&&_&&(l.$on("loaded",w),l.$on("error",L),M(()=>{l.$off("loaded",w),l.$off("error",L)})),N(()=>{P(()=>{var e;(e=a.value)!=null&&e.complete&&!r.lazyLoad&&h()})}),()=>{var e;return n("div",{class:i({round:r.round,block:r.block}),style:x.value},[k(),E(),(e=c.default)==null?void 0:e.call(c)])}}});const H=O(q);export{H as I};
