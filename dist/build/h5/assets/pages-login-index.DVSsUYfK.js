import{d as x,r as b,q as w,T,s as h,v as k,c as y,e as g,w as a,f as e,i as c,u as s,j as B,I as V,x as $,y as I,z as S}from"./index.1709508483504.js";import{u as q,l as z,T as A,o as C}from"./auth.BhQR7_Z-.js";import{_ as L}from"./plugin-vueexport-helper.DlAUqK2U.js";const N=x({__name:"index",setup(j){const o=b(void 0);w(r=>{o.value=r});const i=T(),u=h({email:"uni-app@test.com",password:"Vue3_Ts_Vite"}),_=k(),{send:d}=q(z,{immediate:!1}),f=r=>{d(r.detail.value).then(m=>{A("登录成功",{duration:1500}),_.setToken(m.token),setTimeout(()=>{var t,n;if((t=s(o))!=null&&t.redirect){const l=C(s(o),["redirect","tabBar"]);(n=s(o))!=null&&n.tabBar?i.replaceAll({name:s(o).redirect,params:l}):i.replace({name:s(o).redirect,params:l})}else i.back()},1500)})};return(r,m)=>{const t=B,n=V,l=$,p=I,v=S;return y(),g(t,{class:"container"},{default:a(()=>[e(t,{class:"title"},{default:a(()=>[c("登录")]),_:1}),e(t,{class:"form-wrap"},{default:a(()=>[e(v,{class:"form",onSubmit:f},{default:a(()=>[e(l,{class:"form-item"},{default:a(()=>[e(t,{class:"form-label"},{default:a(()=>[c("邮箱:")]),_:1}),e(t,{class:"form-element"},{default:a(()=>[e(n,{name:"email",value:s(u).email},null,8,["value"])]),_:1})]),_:1}),e(l,{class:"form-item"},{default:a(()=>[e(t,{class:"form-label"},{default:a(()=>[c("密码:")]),_:1}),e(t,{class:"form-element"},{default:a(()=>[e(n,{type:"password",name:"password",value:s(u).password},null,8,["value"])]),_:1})]),_:1}),e(p,{"form-type":"submit",class:"submit-btn","hover-class":"none"},{default:a(()=>[c("登录")]),_:1})]),_:1})]),_:1})]),_:1})}}}),E=L(N,[["__scopeId","data-v-a84fa731"]]);export{E as default};
