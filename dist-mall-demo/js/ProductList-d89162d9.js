import{_ as x,j as B,u as I,a as C,b as c,c as d,d as t,k as S,v as T,e as n,w as p,F as V,l as R,t as _,p as N,i as $}from"./index-b6baaa43.js";import{T as D,P as U,a as q,L as F}from"./index-d2044eed.js";/* empty css              */import{s as j}from"./good-a2cc340e.js";import"./use-id-2077b3eb.js";import"./use-route-29860e60.js";const z=i=>(N("data-v-67b5056e"),i=i(),$(),i),A={class:"product-list-wrap"},E={class:"product-list-content"},M={class:"category-header wrap"},O={class:"header-search"},G=z(()=>t("i",{class:"nbicon nbSearch"},null,-1)),H={class:"content"},J=["onClick"],K=["src"],Q={class:"product-info"},W={class:"name"},X={class:"subtitle"},Y={class:"price"},Z={key:1,class:"empty",src:"https://s.yezgea02.com/1604041313083/kesrtd.png",alt:"搜索"},ee={__name:"ProductList",setup(i){const u=B(),g=I(),e=C({keyword:u.query.keyword||"",searchBtn:!1,seclectActive:!1,refreshing:!1,list:[],loading:!1,finished:!1,productList:[],totalPage:0,page:1,orderBy:""}),f=async()=>{const{categoryId:o}=u.query;if(!o&&!e.keyword){e.finished=!0,e.loading=!1;return}const{data:a,data:{list:r}}=await j({pageNumber:e.page,goodsCategoryId:o,keyword:e.keyword,orderBy:e.orderBy});e.productList=e.productList.concat(r),e.totalPage=a.totalPage,e.loading=!1,e.page>=a.totalPage&&(e.finished=!0)},m=()=>{g.go(-1)},y=o=>{g.push({path:`/product/${o.goodsId}`})},v=()=>{l()},h=()=>{!e.refreshing&&e.page<e.totalPage&&(e.page=e.page+1),e.refreshing&&(e.productList=[],e.refreshing=!1),f()},l=()=>{e.refreshing=!0,e.finished=!1,e.loading=!0,e.page=1,h()},k=({name:o})=>{console.log("name",o),e.orderBy=o,l()};return(o,a)=>{const r=q,b=D,w=F,L=U;return c(),d("div",A,[t("div",E,[t("header",M,[t("i",{class:"nbicon nbfanhui",onClick:m}),t("div",O,[G,S(t("input",{type:"text",class:"search-title","onUpdate:modelValue":a[0]||(a[0]=s=>e.keyword=s)},null,512),[[T,e.keyword]])]),t("span",{class:"search-btn",onClick:v},"搜索")]),n(b,{type:"card",color:"#1baeae",onClickTab:k},{default:p(()=>[n(r,{title:"推荐",name:""}),n(r,{title:"新品",name:"new"}),n(r,{title:"价格",name:"price"})]),_:1})]),t("div",H,[n(L,{modelValue:e.refreshing,"onUpdate:modelValue":a[2]||(a[2]=s=>e.refreshing=s),onRefresh:l,class:"product-list-refresh"},{default:p(()=>[n(w,{loading:e.loading,"onUpdate:loading":a[1]||(a[1]=s=>e.loading=s),finished:e.finished,"finished-text":e.productList.length?"没有更多了":"搜索想要的商品",onLoad:h,onOffset:s=>10},{default:p(()=>[e.productList.length?(c(!0),d(V,{key:0},R(e.productList,(s,P)=>(c(),d("div",{class:"product-item",key:P,onClick:te=>y(s)},[t("img",{src:o.$filters.prefix(s.goodsCoverImg)},null,8,K),t("div",Q,[t("p",W,_(s.goodsName),1),t("p",X,_(s.goodsIntro),1),t("span",Y,"￥ "+_(s.sellingPrice),1)])],8,J))),128)):(c(),d("img",Z))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])])])}}},ce=x(ee,[["__scopeId","data-v-67b5056e"]]);export{ce as default};
