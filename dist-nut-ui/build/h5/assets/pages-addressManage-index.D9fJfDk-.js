import{_ as C,a as y,b as x,c as v}from"./index.C0lM2UjS.js";import{_ as b}from"./index.CLP04ZmE.js";import{_ as h}from"./button.ATl534R_.js";import{$ as w,T as E,a0 as f,k as D,A as k,n as A,o as M,a as q,w as n,g as o,j as V}from"./index.1709636774746.js";import{_ as P}from"./plugin-vueexport-helper.DlAUqK2U.js";import"./prefix.CG6Gj_JG.js";import"./useProvide.BZkzDDf8.js";import"./event.DRiCrrdg.js";import"./icon.sT-AJalv.js";import"./pxCheck.f4SXeRzl.js";import"./useTranslate.UOVUuywj.js";import"./useInject.BCFRtg7A.js";const U={setup(){const m=w(),u=m[m.length-1],p=E();f({title:"新增地址"}),console.log("router",p,m,u),u.options.key==="edit"&&f({title:"编辑地址"});const e=D({name:"",age:"",tel:"",address:"",address2:""}),d=D({state:{show:!1,province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]},methods:{show(){d.state.show=!d.state.show,d.state.show&&(e.address="")},onChange({custom:t,next:s,value:c}){e.address+=c.name}}}),_=t=>{console.log(t)},l=k(null);return{addressModule:d,ruleForm:l,formData:e,validate:_,customValidator:t=>/^\d+$/.test(t),customRulePropValidator:(t,s)=>(s==null?void 0:s.reg).test(t),nameLengthValidator:t=>(t==null?void 0:t.length)>=2,asyncValidator:t=>new Promise(s=>{console.log("模拟异步验证中..."),setTimeout(()=>{console.log("验证完成"),s(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(t))},1e3)}),customBlurValidate:t=>{l.value.validate(t).then(({valid:s,errors:c})=>{s?console.log("success",e):console.log("error submit!!",c)})},submit:()=>{l.value.validate().then(({valid:t,errors:s})=>{t?(A({url:"/pages/address/index"}),console.log("success",e)):console.log("error submit!!",s)})},reset:()=>{l.value.reset()}}}};function T(m,u,p,e,d,_){const l=y,r=x,g=v,i=h,F=b,B=C;return M(),q(B,{ref:"ruleForm","model-value":e.formData,rules:{name:[{required:!0,message:"请填写姓名"},{message:"name 至少两个字符",validator:e.nameLengthValidator}]}},{default:n(()=>[o(r,{label:"姓名",prop:"name"},{default:n(()=>[o(l,{modelValue:e.formData.name,"onUpdate:modelValue":u[0]||(u[0]=a=>e.formData.name=a),class:"nut-input-text",placeholder:"请输入姓名，blur 事件校验",type:"text",onBlur:u[1]||(u[1]=a=>e.customBlurValidate("name"))},null,8,["modelValue"])]),_:1}),o(r,{label:"年龄",prop:"age",required:"",rules:[{required:!0,message:"请填写年龄"},{validator:e.customValidator,message:"必须输入数字"},{validator:e.customRulePropValidator,message:"必须输入数字",reg:/^\d+$/},{regex:/^(\d{1,2}|1\d{2}|200)$/,message:"必须输入0-200区间"}]},{default:n(()=>[o(l,{modelValue:e.formData.age,"onUpdate:modelValue":u[2]||(u[2]=a=>e.formData.age=a),class:"nut-input-text",placeholder:"请输入年龄，必须数字且0-200区间",type:"text"},null,8,["modelValue"])]),_:1},8,["rules"]),o(r,{label:"联系电话",prop:"tel",required:"",rules:[{required:!0,message:"请填写联系电话"},{validator:e.asyncValidator,message:"电话格式不正确"}]},{default:n(()=>[o(l,{modelValue:e.formData.tel,"onUpdate:modelValue":u[3]||(u[3]=a=>e.formData.tel=a),class:"nut-input-text",placeholder:"请输入联系电话，异步校验电话格式",type:"text"},null,8,["modelValue"])]),_:1},8,["rules"]),o(r,{label:"地址"},{default:n(()=>[o(l,{class:"nut-input-text",modelValue:e.formData.address,"onUpdate:modelValue":u[4]||(u[4]=a=>e.formData.address=a),onClick:e.addressModule.methods.show,readonly:"",placeholder:"请选择地址",type:"text"},null,8,["modelValue","onClick"]),o(g,{visible:e.addressModule.state.show,"onUpdate:visible":u[5]||(u[5]=a=>e.addressModule.state.show=a),province:e.addressModule.state.province,city:e.addressModule.state.city,country:e.addressModule.state.country,town:e.addressModule.state.town,onChange:e.addressModule.methods.onChange,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onChange"])]),_:1}),o(r,{label:"地址",prop:"address2",required:"",rules:[{required:!0,message:"请填写地址"}]},{default:n(()=>[o(l,{modelValue:e.formData.address2,"onUpdate:modelValue":u[6]||(u[6]=a=>e.formData.address2=a),class:"nut-input-text",placeholder:"请输入地址",type:"text"},null,8,["modelValue"])]),_:1}),o(F,null,{default:n(()=>[o(i,{type:"primary",size:"small",style:{"margin-right":"10px"},onClick:e.submit},{default:n(()=>[V(" 提交 ")]),_:1},8,["onClick"]),o(i,{size:"small",onClick:e.reset},{default:n(()=>[V(" 重置提示状态 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model-value","rules"])}const W=P(U,[["render",T]]);export{W as default};
