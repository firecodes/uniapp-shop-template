import{d as e,p as a,as as s,e as t,q as r,v as u,o as A,c as l,w as o,a as i,b as n,h as p,F as c,r as g,u as m,i as f,g as v}from"./index.1710046744346.js";import{_ as d}from"./app-shop-item-v1.vuevuetypescriptsetuptruelang.0f0b6f40.js";import{_ as z}from"./app-load-more.5bfbba66.js";import{a as L}from"./global.832d1848.js";const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABa1BMVEUAAAA8zbMAxaYAxaXs8e8UzLIAxKSD3MsAxKT18/IAwqD38/Nw2MU2z7e9596V39DR6+UAy6/x8fGD28sAwaD38/Or49ie4NPv8fAzz7bK6eLr8O6/594AxKXq8O7U6+ZI0boAyq7N6uMAy7AAwZ+z5drm7+zW7Oe45tzI6eKK3c172sgczbJA0LgAya1a1L7e7emn4tb38/Lh7utE0blf1cC15duj4dWl4tbM6uNc1L8AzLBq18Oa4NLc7ekezbPH6eFd1L9M0rvK6eLE6OAmzbQQzLEAyKoAxqcAy6/U7OYAyawAw6Le7uri7uvY7OjO6uSr49hl1sJU070pzrQAxaTx8vDt8e/o8O3l7+zb7enJ6eLD6OC45tyf4dSK3c102cZA0bk3z7f08vLp8O6+596y5Nql4taX39GT3s+A28p72shu18RK0rsZzbLE6OC85t2w5NmZ39GQ3s6E28tr18Ne1b9b1L9N0rvq6StFAAAAR3RSTlMABqxbBvz65N/dj4lwcG9vbm1YVFRSRPz5+fjz8uTj4ODg29vb2dfQ0M/Pz87MzKyrq6amk4qJiW9ubW1cW1VTUkREQkJAQKpNtFsAAAETSURBVBjTTc5nW8JQDAXgtEWGssG99957b0upoG0RBC0tU6Z7/XzT1us13/I+T04OmGMLrri6eidWD2zwN+2uQrJ4G49dRUeOiLUVkimTru/unzd+DSkdyxhUUl+kTfM2VUSa9J+eeafK0kO2EsIfA+l4Juq3jrY6K2+ag4GgEbZN4n1ara7vwRLmT9Mis/qHvAiDmO+l6Ja/lCHoeSqpHRSPlWauG/rUsvQPT3L5RAuMYwsfRU/iURiG5exrdYbinCCILOxXtfe6m9iuIPIRDhhHTW/IO5YFRJ6P9DMAoYb8qTTnPecXgQWkm8sw4Kwr38ZLQURCa7WO1vL4Es0gYgCHo4TGwrQIw7FOu93Jcoy5/gCKLT9YRdi86gAAAABJRU5ErkJggg==",w=e({__name:"app-guess-like",setup(e,{expose:w}){const O=a([]),U=a("more"),R=s({page:1,pageSize:20});async function x(){if("noMore"==U.value)return void t({icon:"none",title:"没有更多数据了~"});U.value="loading";const{result:e}=await L(R),{items:a,page:s,pages:r}=e;U.value=s>=r?"noMore":"more",O.value=[...O.value,...a],R.page++}return x(),w({refreshData:async function(){R.page=1,R.pageSize=20,U.value="more",O.value=[],await x()},getGuessLikeData:x}),(e,a)=>{const s=f,t=v,L=r(u("app-shop-item-v1"),d),w=r(u("app-load-more"),z);return A(),l(t,{class:"app-guess-like"},{default:o((()=>[i(t,{class:"center py-3"},{default:o((()=>[i(s,{mode:"aspectFill",class:"w-3 h-3",src:b}),i(t,{class:"text-lg px-1 text-gray-600"},{default:o((()=>[n("猜你喜欢")])),_:1}),i(s,{mode:"aspectFill",class:"w-3 h-3",src:b})])),_:1}),i(t,{class:"container flex-wrap between"},{default:o((()=>[(A(!0),p(c,null,g(m(O),(e=>(A(),l(L,{"guess-like":e,key:e.id+Math.random()},null,8,["guess-like"])))),128))])),_:1}),i(w,{class:"py-2",status:m(U)},null,8,["status"])])),_:1})}}});function O(){const e=a();return{appGuessLikeRef:e,getMore:function(){var a;null==(a=e.value)||a.getGuessLikeData()},refreshData:function(){var a;return null==(a=e.value)?void 0:a.refreshData}}}export{w as _,O as u};