import{d as s,o as e,c as a,w as l,a as t,b as i,t as c,A as d,n as u,i as r,g as o}from"./index.1710046744346.js";const n=s({__name:"app-shop-item-v1",props:{guessLike:null},setup(s){const n=s,p=()=>{u({url:"/pages/detail/detail?id="+n.guessLike.id})};return(u,n)=>{const m=r,f=o;return e(),a(f,{class:"w-46vw bg-white p-3 mb-2 rounded-3 shadow-md",onClick:p},{default:l((()=>[t(m,{class:"rounded-3 w-full h-42",mode:"aspectFill",src:s.guessLike.picture},null,8,["src"]),t(f,{class:"line-clamp-1 my-1 text-dark-100"},{default:l((()=>[i(c(s.guessLike.name),1)])),_:1}),d(" 在scroll-view中 view里面嵌套text 添加新数据会导致scroll-view 重回顶部 "),t(f,{class:"flex items-center"},{default:l((()=>[t(f,{class:"text-[#f00]"},{default:l((()=>[i("¥")])),_:1}),t(f,{class:"text-[#f00] ml-0.25 font-blod"},{default:l((()=>[i(c(s.guessLike.price),1)])),_:1})])),_:1})])),_:1})}}});export{n as _};