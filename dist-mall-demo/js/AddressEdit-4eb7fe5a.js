import{B as A,aa as Re,C as P,ak as ie,G as L,D as M,ar as G,a0 as z,r as E,ag as $e,a2 as T,H as _e,Y as Z,as as Ne,ai as we,e as m,ac as De,a8 as me,a4 as F,a1 as ce,$ as Me,W as Fe,at as Le,X as U,au as te,av as Se,O as re,a3 as q,J as ke,aw as He,L as Q,Z as je,E as ae,a5 as Ue,F as Ye,ax as ze,a as xe,ay as Ke,k as ne,a7 as le,aq as qe,az as ue,j as Ge,u as Je,o as We,aA as J,b as Xe,c as Ze}from"./index-b6baaa43.js";import{C as Oe}from"./index-1c1d86b7.js";import{F as W}from"./index-e2b47a87.js";import{B as fe}from"./index-c2ffc462.js";/* empty css              */import{s as Qe}from"./SimpleHeader-eb02e727.js";import{g as et,c as tt,E as at,D as nt}from"./address-f7da8579.js";import{F as lt}from"./index-ca14902a.js";import"./use-route-29860e60.js";import"./use-id-2077b3eb.js";const[ot,V,ve]=A("picker"),Te=e=>e.find(t=>!t.disabled)||e[0];function st(e,t){const a=e[0];if(a){if(Array.isArray(a))return"multiple";if(t.children in a)return"cascade"}return"default"}function X(e,t){t=ie(t,0,e.length);for(let a=t;a<e.length;a++)if(!e[a].disabled)return a;for(let a=t-1;a>=0;a--)if(!e[a].disabled)return a;return 0}const he=(e,t,a)=>t!==void 0&&!!e.find(o=>o[a.value]===t);function de(e,t,a){const o=e.findIndex(y=>y[a.value]===t),s=X(e,o);return e[s]}function it(e,t,a){const o=[];let s={[t.children]:e},y=0;for(;s&&s[t.children];){const i=s[t.children],v=a.value[y];if(s=Re(v)?de(i,v,t):void 0,!s&&i.length){const f=Te(i)[t.value];s=de(i,f,t)}y++,o.push(i)}return o}function ct(e){const{transform:t}=window.getComputedStyle(e),a=t.slice(7,t.length-1).split(", ")[5];return Number(a)}function rt(e){return P({text:"text",value:"value",children:"children"},e)}const ge=200,be=300,ut=15,[Ee,oe]=A("picker-column"),Ie=Symbol(Ee);var dt=L({name:Ee,props:{value:M,fields:G(Object),options:z(),readonly:Boolean,allowHtml:Boolean,optionHeight:G(Number),swipeDuration:G(M),visibleOptionNum:G(M)},emits:["change","clickOption","scrollInto"],setup(e,{emit:t,slots:a}){let o,s,y,i,v;const f=E(),l=E(),u=E(0),_=E(0),r=$e(),C=()=>e.options.length,S=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,D=b=>{let n=X(e.options,b);const c=-n*e.optionHeight,h=()=>{n>C()-1&&(n=X(e.options,b));const B=e.options[n][e.fields.value];B!==e.value&&t("change",B)};o&&c!==u.value?v=h:h(),u.value=c},x=()=>e.readonly||!e.options.length,$=b=>{o||x()||(v=null,_.value=ge,D(b),t("clickOption",e.options[b]))},I=b=>ie(Math.round(-b/e.optionHeight),0,C()-1),p=T(()=>I(u.value)),H=(b,n)=>{const c=Math.abs(b/n);b=u.value+c/.003*(b<0?-1:1);const h=I(b);_.value=+e.swipeDuration,D(h)},N=()=>{o=!1,_.value=0,v&&(v(),v=null)},d=b=>{if(!x()){if(r.start(b),o){const n=ct(l.value);u.value=Math.min(0,n-S())}_.value=0,s=u.value,y=Date.now(),i=s,v=null}},w=b=>{if(x())return;r.move(b),r.isVertical()&&(o=!0,De(b,!0));const n=ie(s+r.deltaY.value,-(C()*e.optionHeight),e.optionHeight),c=I(n);c!==p.value&&t("scrollInto",e.options[c]),u.value=n;const h=Date.now();h-y>be&&(y=h,i=n)},g=()=>{if(x())return;const b=u.value-i,n=Date.now()-y;if(n<be&&Math.abs(b)>ut){H(b,n);return}const h=I(u.value);_.value=ge,D(h),setTimeout(()=>{o=!1},0)},O=()=>{const b={height:`${e.optionHeight}px`};return e.options.map((n,c)=>{const h=n[e.fields.text],{disabled:B}=n,K=n[e.fields.value],Ae={role:"button",style:b,tabindex:B?-1:0,class:[oe("item",{disabled:B,selected:K===e.value}),n.className],onClick:()=>$(c)},Be={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:h};return m("li",Ae,[a.option?a.option(n,c):m("div",Be,null)])})};return _e(Ie),Z({stopMomentum:N}),Ne(()=>{const b=o?Math.floor(-u.value/e.optionHeight):e.options.findIndex(h=>h[e.fields.value]===e.value),n=X(e.options,b),c=-n*e.optionHeight;o&&n<b&&N(),u.value=c}),we("touchmove",w,{target:f}),()=>m("div",{ref:f,class:oe(),onTouchstartPassive:d,onTouchend:g,onTouchcancel:g},[m("ul",{ref:l,style:{transform:`translate3d(0, ${u.value+S()}px, 0)`,transitionDuration:`${_.value}ms`,transitionProperty:_.value?"all":"none"},class:oe("wrapper"),onTransitionend:N},[O()])])}});const[mt]=A("picker-toolbar"),ee={title:String,cancelButtonText:String,confirmButtonText:String},ft=["cancel","confirm","title","toolbar"],vt=Object.keys(ee);var ht=L({name:mt,props:ee,emits:["confirm","cancel"],setup(e,{emit:t,slots:a}){const o=()=>{if(a.title)return a.title();if(e.title)return m("div",{class:[V("title"),"van-ellipsis"]},[e.title])},s=()=>t("cancel"),y=()=>t("confirm"),i=()=>{var f;const l=(f=e.cancelButtonText)!=null?f:ve("cancel");if(!(!a.cancel&&!l))return m("button",{type:"button",class:[V("cancel"),me],onClick:s},[a.cancel?a.cancel():l])},v=()=>{var f;const l=(f=e.confirmButtonText)!=null?f:ve("confirm");if(!(!a.confirm&&!l))return m("button",{type:"button",class:[V("confirm"),me],onClick:y},[a.confirm?a.confirm():l])};return()=>m("div",{class:V("toolbar")},[a.toolbar?a.toolbar():[i(),o(),v()]])}});const[gt,Jt]=A("picker-group"),bt=Symbol(gt);P({tabs:z(),activeTab:F(0),nextStepText:String},ee);const pe=P({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:F(44),showToolbar:ce,swipeDuration:F(1e3),visibleOptionNum:F(6)},ee),yt=P({},pe,{columns:z(),modelValue:z(),toolbarPosition:Me("top"),columnsFieldNames:Object});var Ct=L({name:ot,props:yt,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:t,slots:a}){const o=E(),s=E(e.modelValue.slice(0)),{parent:y}=_e(bt),{children:i,linkChildren:v}=Fe(Ie);v();const f=T(()=>rt(e.columnsFieldNames)),l=T(()=>Le(e.optionHeight)),u=T(()=>st(e.columns,f.value)),_=T(()=>{const{columns:n}=e;switch(u.value){case"multiple":return n;case"cascade":return it(n,f.value,s);default:return[n]}}),r=T(()=>_.value.some(n=>n.length)),C=T(()=>_.value.map((n,c)=>de(n,s.value[c],f.value))),S=T(()=>_.value.map((n,c)=>n.findIndex(h=>h[f.value.value]===s.value[c]))),D=(n,c)=>{if(s.value[n]!==c){const h=s.value.slice(0);h[n]=c,s.value=h}},x=()=>({selectedValues:s.value.slice(0),selectedOptions:C.value,selectedIndexes:S.value}),$=(n,c)=>{D(c,n),u.value==="cascade"&&s.value.forEach((h,B)=>{const K=_.value[B];he(K,h,f.value)||D(B,K.length?K[0][f.value.value]:void 0)}),re(()=>{t("change",P({columnIndex:c},x()))})},I=(n,c)=>{const h={columnIndex:c,currentOption:n};t("clickOption",P(x(),h)),t("scrollInto",h)},p=()=>{i.forEach(c=>c.stopMomentum());const n=x();return re(()=>{t("confirm",n)}),n},H=()=>t("cancel",x()),N=()=>_.value.map((n,c)=>m(dt,{value:s.value[c],fields:f.value,options:n,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:l.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:h=>$(h,c),onClickOption:h=>I(h,c),onScrollInto:h=>{t("scrollInto",{currentOption:h,columnIndex:c})}},{option:a.option})),d=n=>{if(r.value){const c={height:`${l.value}px`},h={backgroundSize:`100% ${(n-l.value)/2}px`};return[m("div",{class:V("mask"),style:h},null),m("div",{class:[He,V("frame")],style:c},null)]}},w=()=>{const n=l.value*+e.visibleOptionNum,c={height:`${n}px`};return m("div",{ref:o,class:V("columns"),style:c},[N(),d(n)])},g=()=>{if(e.showToolbar&&!y)return m(ht,ke(q(e,vt),{onConfirm:p,onCancel:H}),q(a,ft))};U(_,n=>{n.forEach((c,h)=>{c.length&&!he(c,s.value[h],f.value)&&D(h,Te(c)[f.value.value])})},{immediate:!0});let O;return U(()=>e.modelValue,n=>{!te(n,s.value)&&!te(n,O)&&(s.value=n.slice(0),O=n.slice(0))},{deep:!0}),U(s,n=>{te(n,e.modelValue)||(O=n.slice(0),t("update:modelValue",O))},{immediate:!0}),we("touchmove",De,{target:o}),Z({confirm:p,getSelectedOptions:()=>C.value}),()=>{var n,c;return m("div",{class:V()},[e.toolbarPosition==="top"?g():null,e.loading?m(Se,{class:V("loading")},null):null,(n=a["columns-top"])==null?void 0:n.call(a),w(),(c=a["columns-bottom"])==null?void 0:c.call(a),e.toolbarPosition==="bottom"?g():null])}}});const Y="000000",_t=["title","cancel","confirm","toolbar","columns-top","columns-bottom"],Ve=["title","loading","readonly","optionHeight","swipeDuration","visibleOptionNum","cancelButtonText","confirmButtonText"],R=(e="",t=Y,a=void 0)=>({text:e,value:t,children:a});function wt({areaList:e,columnsNum:t,columnsPlaceholder:a}){const{city_list:o={},county_list:s={},province_list:y={}}=e,i=+t>1,v=+t>2,f=()=>{if(i)return a.length?[R(a[0],Y,v?[]:void 0)]:[]},l=new Map;Object.keys(y).forEach(r=>{l.set(r.slice(0,2),R(y[r],r,f()))});const u=new Map;if(i){const r=()=>{if(v)return a.length?[R(a[1])]:[]};Object.keys(o).forEach(C=>{const S=R(o[C],C,r());u.set(C.slice(0,4),S);const D=l.get(C.slice(0,2));D&&D.children.push(S)})}v&&Object.keys(s).forEach(r=>{const C=u.get(r.slice(0,4));C&&C.children.push(R(s[r],r))});const _=Array.from(l.values());if(a.length){const r=v?[R(a[2])]:void 0,C=i?[R(a[1],Y,r)]:void 0;_.unshift(R(a[0],Y,C))}return _}const Dt=Q(Ct),[St,kt]=A("area"),xt=P({},q(pe,Ve),{modelValue:String,columnsNum:F(3),columnsPlaceholder:z(),areaList:{type:Object,default:()=>({})}});var Ot=L({name:St,props:xt,emits:["change","confirm","cancel","update:modelValue"],setup(e,{emit:t,slots:a}){const o=E([]),s=E(),y=T(()=>wt(e)),i=(...l)=>t("change",...l),v=(...l)=>t("cancel",...l),f=(...l)=>t("confirm",...l);return U(o,l=>{const u=l.length?l[l.length-1]:"";u&&u!==e.modelValue&&t("update:modelValue",u)},{deep:!0}),U(()=>e.modelValue,l=>{if(l){const u=o.value.length?o.value[o.value.length-1]:"";l!==u&&(o.value=[`${l.slice(0,2)}0000`,`${l.slice(0,4)}00`,l].slice(0,+e.columnsNum))}else o.value=[]},{immediate:!0}),Z({confirm:()=>{var l;return(l=s.value)==null?void 0:l.confirm()},getSelectedOptions:()=>{var l;return((l=s.value)==null?void 0:l.getSelectedOptions())||[]}}),()=>m(Dt,ke({ref:s,modelValue:o.value,"onUpdate:modelValue":l=>o.value=l,class:kt(),columns:y.value,onChange:i,onCancel:v,onConfirm:f},q(e,Ve)),q(a,_t))}});const Tt=Q(Ot),[Et,se]=A("switch"),It={size:M,loading:Boolean,disabled:Boolean,modelValue:ae,activeColor:String,inactiveColor:String,activeValue:{type:ae,default:!0},inactiveValue:{type:ae,default:!1}};var pt=L({name:Et,props:It,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const o=()=>e.modelValue===e.activeValue,s=()=>{if(!e.disabled&&!e.loading){const i=o()?e.inactiveValue:e.activeValue;t("update:modelValue",i),t("change",i)}},y=()=>{if(e.loading){const i=o()?e.activeColor:e.inactiveColor;return m(Se,{class:se("loading"),color:i},null)}if(a.node)return a.node()};return je(()=>e.modelValue),()=>{var i;const{size:v,loading:f,disabled:l,activeColor:u,inactiveColor:_}=e,r=o(),C={fontSize:Ue(v),backgroundColor:r?u:_};return m("div",{role:"switch",class:se({on:r,loading:f,disabled:l}),style:C,tabindex:l?void 0:0,"aria-checked":r,onClick:s},[m("div",{class:se("node")},[y()]),(i=a.background)==null?void 0:i.call(a)])}}});const Vt=Q(pt),[Pt,ye]=A("address-edit-detail"),Ce=A("address-edit")[2];var At=L({name:Pt,props:{show:Boolean,rows:M,value:String,rules:Array,focused:Boolean,maxlength:M,searchResult:Array,showSearchResult:Boolean},emits:["blur","focus","input","selectSearch"],setup(e,{emit:t}){const a=E(),o=()=>e.focused&&e.searchResult&&e.showSearchResult,s=l=>{t("selectSearch",l),t("input",`${l.address||""} ${l.name||""}`.trim())},y=()=>{if(!o())return;const{searchResult:l}=e;return l.map(u=>m(Oe,{clickable:!0,key:(u.name||"")+(u.address||""),icon:"location-o",title:u.name,label:u.address,class:ye("search-item"),border:!1,onClick:()=>s(u)},null))},i=l=>t("blur",l),v=l=>t("focus",l),f=l=>t("input",l);return()=>{if(e.show)return m(Ye,null,[m(W,{autosize:!0,clearable:!0,ref:a,class:ye(),rows:e.rows,type:"textarea",rules:e.rules,label:Ce("addressDetail"),border:!o(),maxlength:e.maxlength,modelValue:e.value,placeholder:Ce("addressDetail"),onBlur:i,onFocus:v,"onUpdate:modelValue":f},null),y()])}}});const[Bt,j,k]=A("address-edit"),Pe={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,addressDetail:""},Rt={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:ce,showDetail:ce,showDelete:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:M,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:F(1),detailMaxlength:F(200),areaColumnsPlaceholder:z(),addressInfo:{type:Object,default:()=>P({},Pe)},telValidator:{type:Function,default:ze}};var $t=L({name:Bt,props:Rt,emits:["save","focus","change","delete","clickArea","changeArea","changeDetail","selectSearch","changeDefault"],setup(e,{emit:t,slots:a}){const o=E(),s=xe({}),y=E(!1),i=E(!1),v=T(()=>Ke(e.areaList)&&Object.keys(e.areaList).length),f=T(()=>{const{province:d,city:w,county:g,areaCode:O}=s;if(O){const b=[d,w,g];return d&&d===w&&b.splice(1,1),b.filter(Boolean).join("/")}return""}),l=T(()=>{var d;return((d=e.searchResult)==null?void 0:d.length)&&i.value}),u=d=>{i.value=d==="addressDetail",t("focus",d)},_=(d,w)=>{t("change",{key:d,value:w})},r=T(()=>{const{validator:d,telValidator:w}=e,g=(O,b)=>({validator:n=>{if(d){const c=d(O,n);if(c)return c}return n?!0:b}});return{name:[g("name",k("nameEmpty"))],tel:[g("tel",k("telInvalid")),{validator:w,message:k("telInvalid")}],areaCode:[g("areaCode",k("areaEmpty"))],addressDetail:[g("addressDetail",k("addressEmpty"))]}}),C=()=>t("save",s),S=d=>{s.addressDetail=d,t("changeDetail",d)},D=d=>{s.province=d[0].text,s.city=d[1].text,s.county=d[2].text},x=({selectedValues:d,selectedOptions:w})=>{d.some(g=>g===Y)?ue(k("areaEmpty")):(y.value=!1,D(w),t("changeArea",w))},$=()=>t("delete",s),I=d=>{s.areaCode=d||""},p=()=>{setTimeout(()=>{i.value=!1})},H=d=>{s.addressDetail=d},N=()=>{if(e.showSetDefault){const d={"right-icon":()=>m(Vt,{modelValue:s.isDefault,"onUpdate:modelValue":w=>s.isDefault=w,onChange:w=>t("changeDefault",w)},null)};return ne(m(Oe,{center:!0,border:!1,title:k("defaultAddress"),class:j("default")},d),[[le,!l.value]])}};return Z({setAreaCode:I,setAddressDetail:H}),U(()=>e.addressInfo,d=>{P(s,Pe,d),re(()=>{var w;const g=(w=o.value)==null?void 0:w.getSelectedOptions();g&&g.every(O=>O&&O.value!==Y)&&D(g)})},{deep:!0,immediate:!0}),()=>{const{disableArea:d}=e;return m(lt,{class:j(),onSubmit:C},{default:()=>{var w;return[m("div",{class:j("fields")},[m(W,{modelValue:s.name,"onUpdate:modelValue":[g=>s.name=g,g=>_("name",g)],clearable:!0,label:k("name"),rules:r.value.name,placeholder:k("name"),onFocus:()=>u("name")},null),m(W,{modelValue:s.tel,"onUpdate:modelValue":[g=>s.tel=g,g=>_("tel",g)],clearable:!0,type:"tel",label:k("tel"),rules:r.value.tel,maxlength:e.telMaxlength,placeholder:k("tel"),onFocus:()=>u("tel")},null),ne(m(W,{readonly:!0,label:k("area"),"is-link":!d,modelValue:f.value,rules:e.showArea?r.value.areaCode:void 0,placeholder:e.areaPlaceholder||k("area"),onFocus:()=>u("areaCode"),onClick:()=>{t("clickArea"),y.value=!d}},null),[[le,e.showArea]]),m(At,{show:e.showDetail,rows:e.detailRows,rules:r.value.addressDetail,value:s.addressDetail,focused:i.value,maxlength:e.detailMaxlength,searchResult:e.searchResult,showSearchResult:e.showSearchResult,onBlur:p,onFocus:()=>u("addressDetail"),onInput:S,onSelectSearch:g=>t("selectSearch",g)},null),(w=a.default)==null?void 0:w.call(a)]),N(),ne(m("div",{class:j("buttons")},[m(fe,{block:!0,round:!0,type:"primary",text:e.saveButtonText||k("save"),class:j("button"),loading:e.isSaving,nativeType:"submit"},null),e.showDelete&&m(fe,{block:!0,round:!0,class:j("button"),loading:e.isDeleting,text:e.deleteButtonText||k("delete"),onClick:$},null)]),[[le,!l.value]]),m(qe,{show:y.value,"onUpdate:show":g=>y.value=g,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[m(Tt,{modelValue:s.areaCode,"onUpdate:modelValue":g=>s.areaCode=g,ref:o,loading:!v.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:x,onCancel:()=>{y.value=!1}},null)]})]}})}}});const Nt=Q($t);const Mt={class:"address-edit-box"},Wt={__name:"AddressEdit",setup(e){const t=Ge(),a=Je(),o=xe({areaList:{province_list:{},city_list:{},county_list:{}},searchResult:[],type:"add",addressId:"",addressInfo:{},from:t.query.from});We(async()=>{let i={},v={},f={};J.getLev1().forEach(r=>{i[r.id]=r.text,J.getLev2(r.id).forEach(C=>{v[C.id]=C.text,J.getLev3(C.id).forEach(S=>f[S.id]=S.text)})}),o.areaList.province_list=i,o.areaList.city_list=v,o.areaList.county_list=f;const{addressId:l,type:u,from:_}=t.query;if(o.addressId=l,o.type=u,o.from=_||"",u=="edit"){const{data:r}=await et(l);let C="";const S=J.getLev1();Object.entries(o.areaList.county_list).forEach(([D,x])=>{if(x==r.regionName){const $=S.findIndex(p=>p.id.substr(0,2)==D.substr(0,2)),I=Object.entries(o.areaList.city_list).filter(([p,H])=>p.substr(0,4)==D.substr(0,4))[0];S[$].text==r.provinceName&&I[1]==r.cityName&&(C=D)}}),o.addressInfo={id:r.addressId,name:r.userName,tel:r.userPhone,province:r.provinceName,city:r.cityName,county:r.regionName,addressDetail:r.detailAddress,areaCode:C,isDefault:!!r.defaultFlag}}});const s=async i=>{const v={userName:i.name,userPhone:i.tel,provinceName:i.province,cityName:i.city,regionName:i.county,detailAddress:i.addressDetail,defaultFlag:i.isDefault?1:0};o.type=="edit"&&(v.addressId=o.addressId),await o.type=="add"?tt(v):at(v),ue("保存成功"),setTimeout(()=>{a.back()},1e3)},y=async()=>{await nt(o.addressId),ue("删除成功"),setTimeout(()=>{a.back()},1e3)};return(i,v)=>{const f=Nt;return Xe(),Ze("div",Mt,[m(Qe,{name:`${o.type=="add"?"新增地址":"编辑地址"}`},null,8,["name"]),m(f,{class:"edit","area-list":o.areaList,"address-info":o.addressInfo,"show-delete":o.type=="edit","show-set-default":"","show-search-result":"","search-result":o.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"],onSave:s,onDelete:y},null,8,["area-list","address-info","show-delete","search-result"])])}}};export{Wt as default};
