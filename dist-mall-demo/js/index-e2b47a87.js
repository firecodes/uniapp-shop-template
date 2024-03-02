import{bb as he,aT as be,ay as ve,bc as ye,b4 as Ie,B as Se,D as _,$ as M,a4 as Ce,C as xe,E as ke,G as Ve,a as Ee,r as A,H as Me,a2 as I,a5 as H,Y as we,aX as Te,bd as Le,X as Ae,O as E,o as Pe,ai as Re,e as d,aB as Be,aa as S,be as K,a9 as _e,ac as P,I as R,J as Oe,h as ze,ab as De,L as Ne}from"./index-b6baaa43.js";import{c as We,C as Fe}from"./index-1c1d86b7.js";import{u as $e}from"./use-id-2077b3eb.js";function U(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function qe(t,r){if(U(t)){if(r.required)return!1;if(r.validateEmpty===!1)return!0}return!(r.pattern&&!r.pattern.test(String(t)))}function je(t,r){return new Promise(l=>{const f=r.validator(t,r);if(ye(f)){f.then(l);return}l(f)})}function Y(t,r){const{message:l}=r;return Ie(l)?l(t,r):l||""}function He({target:t}){t.composing=!0}function J({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function Ke(t,r){const l=he();t.style.height="auto";let f=t.scrollHeight;if(ve(r)){const{maxHeight:i,minHeight:c}=r;i!==void 0&&(f=Math.min(f,i)),c!==void 0&&(f=Math.max(f,c))}f&&(t.style.height=`${f}px`,be(l))}function Ye(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function B(t,r){return[...t].slice(0,r).join("")}const[Je,m]=Se("field"),Ue={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:_,formatter:Function,clearIcon:M("clear"),modelValue:Ce(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:M("focus"),formatTrigger:M("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Xe=xe({},We,Ue,{rows:_,type:M("text"),rules:Array,autosize:[Boolean,Object],labelWidth:_,labelClass:ke,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Ge=Ve({name:Je,props:Xe,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:r,slots:l}){const f=$e(),i=Ee({status:"unvalidated",focused:!1,validateMessage:""}),c=A(),O=A(),w=A(),{parent:h}=Me(Be),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},u=e=>{if(S(t[e]))return t[e];if(h&&S(h.props[e]))return h.props[e]},X=I(()=>{const e=u("readonly");if(t.clearable&&!e){const n=y()!=="",a=t.clearTrigger==="always"||t.clearTrigger==="focus"&&i.focused;return n&&a}return!1}),z=I(()=>w.value&&l.input?w.value():t.modelValue),G=I(()=>{var e;const n=u("required");return n==="auto"?(e=t.rules)==null?void 0:e.some(a=>a.required):n}),Q=e=>e.reduce((n,a)=>n.then(()=>{if(i.status==="failed")return;let{value:o}=z;if(a.formatter&&(o=a.formatter(o,a)),!qe(o,a)){i.status="failed",i.validateMessage=Y(o,a);return}if(a.validator)return U(o)&&a.validateEmpty===!1?void 0:je(o,a).then(s=>{s&&typeof s=="string"?(i.status="failed",i.validateMessage=s):s===!1&&(i.status="failed",i.validateMessage=Y(o,a))})}),Promise.resolve()),C=()=>{i.status="unvalidated",i.validateMessage=""},D=()=>r("endValidate",{status:i.status,message:i.validateMessage}),N=(e=t.rules)=>new Promise(n=>{C(),e?(r("startValidate"),Q(e).then(()=>{i.status==="failed"?(n({name:t.name,message:i.validateMessage}),D()):(i.status="passed",n(),D())})):n()}),T=e=>{if(h&&t.rules){const{validateTrigger:n}=h.props,a=K(n).includes(e),o=t.rules.filter(s=>s.trigger?K(s.trigger).includes(e):a);o.length&&N(o)}},Z=e=>{var n;const{maxlength:a}=t;if(S(a)&&v(e)>+a){const o=y();if(o&&v(o)===+a)return o;const s=(n=c.value)==null?void 0:n.selectionEnd;if(i.focused&&s){const g=[...e],b=g.length-+a;return g.splice(s-b,b),g.join("")}return B(e,+a)}return e},x=(e,n="onChange")=>{const a=e;e=Z(e);const o=v(a)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=_e(e,g,g)}let s=0;if(t.formatter&&n===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),S(b)&&v(e)>+b&&(e=B(e,+b)),c.value&&i.focused){const{selectionEnd:V}=c.value,j=B(a,V);s=v(g(j))-v(j)}}if(c.value&&c.value.value!==e)if(i.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,S(g)&&S(b)){const V=v(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,V),Math.min(b,V))}}else c.value.value=e;e!==t.modelValue&&r("update:modelValue",e)},p=e=>{e.target.composing||x(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},W=()=>{var e;return(e=c.value)==null?void 0:e.focus()},k=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&Ke(e,t.autosize)},ee=e=>{i.focused=!0,r("focus",e),E(k),u("readonly")&&L()},te=e=>{i.focused=!1,x(y(),"onBlur"),r("blur",e),!u("readonly")&&(T("onBlur"),E(k),De())},F=e=>r("clickInput",e),ne=e=>r("clickLeftIcon",e),ae=e=>r("clickRightIcon",e),re=e=>{P(e),r("update:modelValue",""),r("clear",e)},$=I(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&i.status==="failed")return!0}),ie=I(()=>{const e=u("labelWidth"),n=u("labelAlign");if(e&&n!=="top")return{width:H(e)}}),le=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&P(e),t.type==="search"&&L()),r("keypress",e)},q=()=>t.id||`${f}-input`,oe=()=>i.status,se=()=>{const e=m("control",[u("inputAlign"),{error:$.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return d("div",{class:e,onClick:F},[l.input()]);const n={id:q(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:u("disabled"),readonly:u("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,enterkeyhint:t.enterkeyhint,spellcheck:t.spellcheck,"aria-labelledby":t.label?`${f}-label`:void 0,onBlur:te,onFocus:ee,onInput:p,onClick:F,onChange:J,onKeypress:le,onCompositionend:J,onCompositionstart:He};return t.type==="textarea"?d("textarea",n,null):d("input",Oe(Ye(t.type),n),null)},ce=()=>{const e=l["left-icon"];if(t.leftIcon||e)return d("div",{class:m("left-icon"),onClick:ne},[e?e():d(R,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{const e=l["right-icon"];if(t.rightIcon||e)return d("div",{class:m("right-icon"),onClick:ae},[e?e():d(R,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},de=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return d("div",{class:m("word-limit")},[d("span",{class:m("word-num")},[e]),ze("/"),t.maxlength])}},fe=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||i.validateMessage;if(e){const n=l["error-message"],a=u("errorMessageAlign");return d("div",{class:m("error-message",a)},[n?n({message:e}):e])}},ge=()=>{const e=u("labelWidth"),n=u("labelAlign"),a=u("colon")?":":"";if(l.label)return[l.label(),a];if(t.label)return d("label",{id:`${f}-label`,for:l.input?void 0:q(),onClick:o=>{P(o),W()},style:n==="top"&&e?{width:H(e)}:void 0},[t.label+a])},me=()=>[d("div",{class:m("body")},[se(),X.value&&d(R,{ref:O,name:t.clearIcon,class:m("clear")},null),ue(),l.button&&d("div",{class:m("button")},[l.button()])]),de(),fe()];return we({blur:L,focus:W,validate:N,formValue:z,resetValidation:C,getValidationStatus:oe}),Te(Le,{customValue:w,resetValidation:C,validateWithTrigger:T}),Ae(()=>t.modelValue,()=>{x(y()),C(),T("onChange"),E(k)}),Pe(()=>{x(y(),t.formatTrigger),E(k)}),Re("touchstart",re,{target:I(()=>{var e;return(e=O.value)==null?void 0:e.$el})}),()=>{const e=u("disabled"),n=u("labelAlign"),a=ce(),o=()=>{const s=ge();return n==="top"?[a,s].filter(Boolean):s||[]};return d(Fe,{size:t.size,class:m({error:$.value,disabled:e,[`label-${n}`]:n}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[n,{required:G.value}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:a&&n!=="top"?()=>a:null,title:o,value:me,extra:l.extra})}}});const et=Ne(Ge);export{et as F};
