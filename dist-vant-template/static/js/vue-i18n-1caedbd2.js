import{m as $,a as P,i as B,b as v,c as C,d as I,r as da,e as La,f as Ea,g as Ue,h as Ia,D as pe,j as h,k,l as X,n as H,u as q,o as he,N as ka,p as Fa,q as Na,s as Ta,t as ha,v as la,w as Ae,x as Ra,y as Ve,z as He,C as ya,A as Oa,B as $e,E as je,M as Ge,F as xe,G as Ye,H as Be,I as Xe}from"./@intlify-9d27331d.js";import{l as na,v as Ma,r as A,c as W,w as Re,L as Pa,i as Ca,e as pa,o as Aa,Q as Wa,k as Da,d as wa,g as te,E as Sa,R as Ua}from"./@vue-0377b646.js";/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Va="9.2.2";function Ha(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Ue().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Ue().__VUE_I18N_LEGACY_API__=!0)}let ra=ya.__EXTEND_POINT__;const M=()=>++ra,F={UNEXPECTED_RETURN_TYPE:ra,INVALID_ARGUMENT:M(),MUST_BE_CALL_SETUP_TOP:M(),NOT_INSLALLED:M(),NOT_AVAILABLE_IN_LEGACY_MODE:M(),REQUIRED_VALUE:M(),INVALID_VALUE:M(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:M(),NOT_INSLALLED_WITH_PROVIDE:M(),UNEXPECTED_ERROR:M(),NOT_COMPATIBLE_LEGACY_VUE_I18N:M(),BRIDGE_SUPPORT_VUE_2_ONLY:M(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:M(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:M(),__EXTEND_POINT__:M()};function N(e,...r){return Ia(e,null,void 0)}const ye=$("__transrateVNode"),Oe=$("__datetimeParts"),Me=$("__numberParts"),sa=$("__setPluralRules");$("__intlifyMeta");const ca=$("__injectWithOption");function Pe(e){if(!C(e))return e;for(const r in e)if(Ae(e,r))if(!r.includes("."))C(e[r])&&Pe(e[r]);else{const t=r.split("."),n=t.length-1;let l=e;for(let a=0;a<n;a++)t[a]in l||(l[t[a]]={}),l=l[t[a]];l[t[n]]=e[r],delete e[r],C(l[t[n]])&&Pe(l[t[n]])}return e}function le(e,r){const{messages:t,__i18n:n,messageResolver:l,flatJson:a}=r,c=k(t)?t:h(n)?{}:{[e]:{}};if(h(n)&&n.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:m,resource:f}=o;m?(c[m]=c[m]||{},K(f,c[m])):K(f,c)}else v(o)&&K(JSON.parse(o),c)}),l==null&&a)for(const o in c)Ae(c,o)&&Pe(c[o]);return c}const ae=e=>!C(e)||h(e);function K(e,r){if(ae(e)||ae(r))throw N(F.INVALID_VALUE);for(const t in e)Ae(e,t)&&(ae(e[t])||ae(r[t])?r[t]=e[t]:K(e[t],r[t]))}function $a(e){return e.type}function ua(e,r,t){let n=C(r.messages)?r.messages:{};"__i18nGlobal"in t&&(n=le(e.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const l=Object.keys(n);l.length&&l.forEach(a=>{e.mergeLocaleMessage(a,n[a])});{if(C(r.datetimeFormats)){const a=Object.keys(r.datetimeFormats);a.length&&a.forEach(c=>{e.mergeDateTimeFormat(c,r.datetimeFormats[c])})}if(C(r.numberFormats)){const a=Object.keys(r.numberFormats);a.length&&a.forEach(c=>{e.mergeNumberFormat(c,r.numberFormats[c])})}}}function ze(e){return Sa(Ua,null,e,0)}let Je=0;function qe(e){return(r,t,n,l)=>e(t,n,te()||void 0,l)}function We(e={},r){const{__root:t}=e,n=t===void 0;let l=I(e.inheritLocale)?e.inheritLocale:!0;const a=A(t&&l?t.locale.value:v(e.locale)?e.locale:pe),c=A(t&&l?t.fallbackLocale.value:v(e.fallbackLocale)||h(e.fallbackLocale)||k(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a.value),o=A(le(a.value,e)),m=A(k(e.datetimeFormats)?e.datetimeFormats:{[a.value]:{}}),f=A(k(e.numberFormats)?e.numberFormats:{[a.value]:{}});let g=t?t.missingWarn:I(e.missingWarn)||X(e.missingWarn)?e.missingWarn:!0,E=t?t.fallbackWarn:I(e.fallbackWarn)||X(e.fallbackWarn)?e.fallbackWarn:!0,b=t?t.fallbackRoot:I(e.fallbackRoot)?e.fallbackRoot:!0,d=!!e.fallbackFormat,O=H(e.missing)?e.missing:null,R=H(e.missing)?qe(e.missing):null,D=H(e.postTranslation)?e.postTranslation:null,j=t?t.warnHtmlMessage:I(e.warnHtmlMessage)?e.warnHtmlMessage:!0,w=!!e.escapeParameter;const G=t?t.modifiers:k(e.modifiers)?e.modifiers:{};let S=e.pluralRules||t&&t.pluralRules,_;_=(()=>{const s={version:Va,locale:a.value,fallbackLocale:c.value,messages:o.value,modifiers:G,pluralRules:S,missing:R===null?void 0:R,missingWarn:g,fallbackWarn:E,fallbackFormat:d,unresolving:!0,postTranslation:D===null?void 0:D,warnHtmlMessage:j,escapeParameter:w,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return s.datetimeFormats=m.value,s.numberFormats=f.value,s.__datetimeFormatters=k(_)?_.__datetimeFormatters:void 0,s.__numberFormatters=k(_)?_.__numberFormatters:void 0,Ra(s)})(),q(_,a.value,c.value);function x(){return[a.value,c.value,o.value,m.value,f.value]}const Y=W({get:()=>a.value,set:s=>{a.value=s,_.locale=a.value}}),z=W({get:()=>c.value,set:s=>{c.value=s,_.fallbackLocale=c.value,q(_,a.value,s)}}),re=W(()=>o.value),se=W(()=>m.value),ce=W(()=>f.value);function ue(){return H(D)?D:null}function ie(s){D=s,_.postTranslation=s}function oe(){return O}function U(s){s!==null&&(R=qe(s)),O=s,_.missing=R}const V=(s,u,p,y,Te,ee)=>{x();let J;if(J=s(_),B(J)&&J===Oa){const[va,st]=u();return t&&b?y(t):Te(va)}else{if(ee(J))return J;throw N(F.UNEXPECTED_RETURN_TYPE)}};function Q(...s){return V(u=>Reflect.apply(je,null,[u,...s]),()=>$e(...s),"translate",u=>Reflect.apply(u.t,u,[...s]),u=>u,u=>v(u))}function me(...s){const[u,p,y]=s;if(y&&!C(y))throw N(F.INVALID_ARGUMENT);return Q(u,p,P({resolvedMessage:!0},y||{}))}function fe(...s){return V(u=>Reflect.apply(Ye,null,[u,...s]),()=>xe(...s),"datetime format",u=>Reflect.apply(u.d,u,[...s]),()=>Ge,u=>v(u))}function _e(...s){return V(u=>Reflect.apply(Xe,null,[u,...s]),()=>Be(...s),"number format",u=>Reflect.apply(u.n,u,[...s]),()=>Ge,u=>v(u))}function ge(s){return s.map(u=>v(u)||B(u)||I(u)?ze(String(u)):u)}const be={normalize:ge,interpolate:s=>s,type:"vnode"};function ve(...s){return V(u=>{let p;const y=u;try{y.processor=be,p=Reflect.apply(je,null,[y,...s])}finally{y.processor=null}return p},()=>$e(...s),"translate",u=>u[ye](...s),u=>[ze(u)],u=>h(u))}function de(...s){return V(u=>Reflect.apply(Xe,null,[u,...s]),()=>Be(...s),"number format",u=>u[Me](...s),()=>[],u=>v(u)||h(u))}function Le(...s){return V(u=>Reflect.apply(Ye,null,[u,...s]),()=>xe(...s),"datetime format",u=>u[Oe](...s),()=>[],u=>v(u)||h(u))}function Ee(s){S=s,_.pluralRules=S}function Ie(s,u){const p=v(u)?u:a.value,y=Z(p);return _.messageResolver(y,s)!==null}function ke(s){let u=null;const p=la(_,c.value,a.value);for(let y=0;y<p.length;y++){const Te=o.value[p[y]]||{},ee=_.messageResolver(Te,s);if(ee!=null){u=ee;break}}return u}function Fe(s){const u=ke(s);return u??(t?t.tm(s)||{}:{})}function Z(s){return o.value[s]||{}}function Ne(s,u){o.value[s]=u,_.messages=o.value}function i(s,u){o.value[s]=o.value[s]||{},K(u,o.value[s]),_.messages=o.value}function L(s){return m.value[s]||{}}function ma(s,u){m.value[s]=u,_.datetimeFormats=m.value,Ve(_,s,u)}function fa(s,u){m.value[s]=P(m.value[s]||{},u),_.datetimeFormats=m.value,Ve(_,s,u)}function _a(s){return f.value[s]||{}}function ga(s,u){f.value[s]=u,_.numberFormats=f.value,He(_,s,u)}function ba(s,u){f.value[s]=P(f.value[s]||{},u),_.numberFormats=f.value,He(_,s,u)}Je++,t&&he&&(Re(t.locale,s=>{l&&(a.value=s,_.locale=s,q(_,a.value,c.value))}),Re(t.fallbackLocale,s=>{l&&(c.value=s,_.fallbackLocale=s,q(_,a.value,c.value))}));const T={id:Je,locale:Y,fallbackLocale:z,get inheritLocale(){return l},set inheritLocale(s){l=s,s&&t&&(a.value=t.locale.value,c.value=t.fallbackLocale.value,q(_,a.value,c.value))},get availableLocales(){return Object.keys(o.value).sort()},messages:re,get modifiers(){return G},get pluralRules(){return S||{}},get isGlobal(){return n},get missingWarn(){return g},set missingWarn(s){g=s,_.missingWarn=g},get fallbackWarn(){return E},set fallbackWarn(s){E=s,_.fallbackWarn=E},get fallbackRoot(){return b},set fallbackRoot(s){b=s},get fallbackFormat(){return d},set fallbackFormat(s){d=s,_.fallbackFormat=d},get warnHtmlMessage(){return j},set warnHtmlMessage(s){j=s,_.warnHtmlMessage=s},get escapeParameter(){return w},set escapeParameter(s){w=s,_.escapeParameter=s},t:Q,getLocaleMessage:Z,setLocaleMessage:Ne,mergeLocaleMessage:i,getPostTranslationHandler:ue,setPostTranslationHandler:ie,getMissingHandler:oe,setMissingHandler:U,[sa]:Ee};return T.datetimeFormats=se,T.numberFormats=ce,T.rt=me,T.te=Ie,T.tm=Fe,T.d=fe,T.n=_e,T.getDateTimeFormat=L,T.setDateTimeFormat=ma,T.mergeDateTimeFormat=fa,T.getNumberFormat=_a,T.setNumberFormat=ga,T.mergeNumberFormat=ba,T[ca]=e.__injectWithOption,T[ye]=ve,T[Oe]=Le,T[Me]=de,T}function ja(e){const r=v(e.locale)?e.locale:pe,t=v(e.fallbackLocale)||h(e.fallbackLocale)||k(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r,n=H(e.missing)?e.missing:void 0,l=I(e.silentTranslationWarn)||X(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,a=I(e.silentFallbackWarn)||X(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,c=I(e.fallbackRoot)?e.fallbackRoot:!0,o=!!e.formatFallbackMessages,m=k(e.modifiers)?e.modifiers:{},f=e.pluralizationRules,g=H(e.postTranslation)?e.postTranslation:void 0,E=v(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,b=!!e.escapeParameterHtml,d=I(e.sync)?e.sync:!0;let O=e.messages;if(k(e.sharedMessages)){const _=e.sharedMessages;O=Object.keys(_).reduce((x,Y)=>{const z=x[Y]||(x[Y]={});return P(z,_[Y]),x},O||{})}const{__i18n:R,__root:D,__injectWithOption:j}=e,w=e.datetimeFormats,G=e.numberFormats,S=e.flatJson;return{locale:r,fallbackLocale:t,messages:O,flatJson:S,datetimeFormats:w,numberFormats:G,missing:n,missingWarn:l,fallbackWarn:a,fallbackRoot:c,fallbackFormat:o,modifiers:m,pluralRules:f,postTranslation:g,warnHtmlMessage:E,escapeParameter:b,messageResolver:e.messageResolver,inheritLocale:d,__i18n:R,__root:D,__injectWithOption:j}}function Ce(e={},r){{const t=We(ja(e)),n={id:t.id,get locale(){return t.locale.value},set locale(l){t.locale.value=l},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(l){t.fallbackLocale.value=l},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(l){},get missing(){return t.getMissingHandler()},set missing(l){t.setMissingHandler(l)},get silentTranslationWarn(){return I(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(l){t.missingWarn=I(l)?!l:l},get silentFallbackWarn(){return I(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(l){t.fallbackWarn=I(l)?!l:l},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(l){t.fallbackFormat=l},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(l){t.setPostTranslationHandler(l)},get sync(){return t.inheritLocale},set sync(l){t.inheritLocale=l},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(l){t.warnHtmlMessage=l!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(l){t.escapeParameter=l},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(l){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...l){const[a,c,o]=l,m={};let f=null,g=null;if(!v(a))throw N(F.INVALID_ARGUMENT);const E=a;return v(c)?m.locale=c:h(c)?f=c:k(c)&&(g=c),h(o)?f=o:k(o)&&(g=o),Reflect.apply(t.t,t,[E,f||g||{},m])},rt(...l){return Reflect.apply(t.rt,t,[...l])},tc(...l){const[a,c,o]=l,m={plural:1};let f=null,g=null;if(!v(a))throw N(F.INVALID_ARGUMENT);const E=a;return v(c)?m.locale=c:B(c)?m.plural=c:h(c)?f=c:k(c)&&(g=c),v(o)?m.locale=o:h(o)?f=o:k(o)&&(g=o),Reflect.apply(t.t,t,[E,f||g||{},m])},te(l,a){return t.te(l,a)},tm(l){return t.tm(l)},getLocaleMessage(l){return t.getLocaleMessage(l)},setLocaleMessage(l,a){t.setLocaleMessage(l,a)},mergeLocaleMessage(l,a){t.mergeLocaleMessage(l,a)},d(...l){return Reflect.apply(t.d,t,[...l])},getDateTimeFormat(l){return t.getDateTimeFormat(l)},setDateTimeFormat(l,a){t.setDateTimeFormat(l,a)},mergeDateTimeFormat(l,a){t.mergeDateTimeFormat(l,a)},n(...l){return Reflect.apply(t.n,t,[...l])},getNumberFormat(l){return t.getNumberFormat(l)},setNumberFormat(l,a){t.setNumberFormat(l,a)},mergeNumberFormat(l,a){t.mergeNumberFormat(l,a)},getChoiceIndex(l,a){return-1},__onComponentInstanceCreated(l){const{componentInstanceCreatedListener:a}=e;a&&a(l,n)}};return n}}const De={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Ga({slots:e},r){return r.length===1&&r[0]==="default"?(e.default?e.default():[]).reduce((n,l)=>n=[...n,...h(l.children)?l.children:[l]],[]):r.reduce((t,n)=>{const l=e[n];return l&&(t[n]=l()),t},{})}function ia(e){return Pa}const Ke={name:"i18n-t",props:P({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>B(e)||!isNaN(e)}},De),setup(e,r){const{slots:t,attrs:n}=r,l=e.i18n||we({useScope:e.scope,__useComponent:!0});return()=>{const a=Object.keys(t).filter(E=>E!=="_"),c={};e.locale&&(c.locale=e.locale),e.plural!==void 0&&(c.plural=v(e.plural)?+e.plural:e.plural);const o=Ga(r,a),m=l[ye](e.keypath,o,c),f=P({},n),g=v(e.tag)||C(e.tag)?e.tag:ia();return na(g,f,m)}}};function xa(e){return h(e)&&!v(e[0])}function oa(e,r,t,n){const{slots:l,attrs:a}=r;return()=>{const c={part:!0};let o={};e.locale&&(c.locale=e.locale),v(e.format)?c.key=e.format:C(e.format)&&(v(e.format.key)&&(c.key=e.format.key),o=Object.keys(e.format).reduce((b,d)=>t.includes(d)?P({},b,{[d]:e.format[d]}):b,{}));const m=n(e.value,c,o);let f=[c.key];h(m)?f=m.map((b,d)=>{const O=l[b.type],R=O?O({[b.type]:b.value,index:d,parts:m}):[b.value];return xa(R)&&(R[0].key=`${b.type}-${d}`),R}):v(m)&&(f=[m]);const g=P({},a),E=v(e.tag)||C(e.tag)?e.tag:ia();return na(E,g,f)}}const Qe={name:"i18n-n",props:P({value:{type:Number,required:!0},format:{type:[String,Object]}},De),setup(e,r){const t=e.i18n||we({useScope:"parent",__useComponent:!0});return oa(e,r,ka,(...n)=>t[Me](...n))}},Ze={name:"i18n-d",props:P({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},De),setup(e,r){const t=e.i18n||we({useScope:"parent",__useComponent:!0});return oa(e,r,Fa,(...n)=>t[Oe](...n))}};function Ya(e,r){const t=e;if(e.mode==="composition")return t.__getInstance(r)||e.global;{const n=t.__getInstance(r);return n!=null?n.__composer:e.global.__composer}}function Ba(e){const r=c=>{const{instance:o,modifiers:m,value:f}=c;if(!o||!o.$)throw N(F.UNEXPECTED_ERROR);const g=Ya(e,o.$),E=ea(f);return[Reflect.apply(g.t,g,[...aa(E)]),g]};return{created:(c,o)=>{const[m,f]=r(o);he&&e.global===f&&(c.__i18nWatcher=Re(f.locale,()=>{o.instance&&o.instance.$forceUpdate()})),c.__composer=f,c.textContent=m},unmounted:c=>{he&&c.__i18nWatcher&&(c.__i18nWatcher(),c.__i18nWatcher=void 0,delete c.__i18nWatcher),c.__composer&&(c.__composer=void 0,delete c.__composer)},beforeUpdate:(c,{value:o})=>{if(c.__composer){const m=c.__composer,f=ea(o);c.textContent=Reflect.apply(m.t,m,[...aa(f)])}},getSSRProps:c=>{const[o]=r(c);return{textContent:o}}}}function ea(e){if(v(e))return{path:e};if(k(e)){if(!("path"in e))throw N(F.REQUIRED_VALUE,"path");return e}else throw N(F.INVALID_VALUE)}function aa(e){const{path:r,locale:t,args:n,choice:l,plural:a}=e,c={},o=n||{};return v(t)&&(c.locale=t),B(l)&&(c.plural=l),B(a)&&(c.plural=a),[r,o,c]}function Xa(e,r,...t){const n=k(t[0])?t[0]:{},l=!!n.useI18nComponentName;(I(n.globalInstall)?n.globalInstall:!0)&&(e.component(l?"i18n":Ke.name,Ke),e.component(Qe.name,Qe),e.component(Ze.name,Ze)),e.directive("t",Ba(r))}function za(e,r,t){return{beforeCreate(){const n=te();if(!n)throw N(F.UNEXPECTED_ERROR);const l=this.$options;if(l.i18n){const a=l.i18n;l.__i18n&&(a.__i18n=l.__i18n),a.__root=r,this===this.$root?this.$i18n=ta(e,a):(a.__injectWithOption=!0,this.$i18n=Ce(a))}else l.__i18n?this===this.$root?this.$i18n=ta(e,l):this.$i18n=Ce({__i18n:l.__i18n,__injectWithOption:!0,__root:r}):this.$i18n=e;l.__i18nGlobal&&ua(r,l,l),e.__onComponentInstanceCreated(this.$i18n),t.__setInstance(n,this.$i18n),this.$t=(...a)=>this.$i18n.t(...a),this.$rt=(...a)=>this.$i18n.rt(...a),this.$tc=(...a)=>this.$i18n.tc(...a),this.$te=(a,c)=>this.$i18n.te(a,c),this.$d=(...a)=>this.$i18n.d(...a),this.$n=(...a)=>this.$i18n.n(...a),this.$tm=a=>this.$i18n.tm(a)},mounted(){},unmounted(){const n=te();if(!n)throw N(F.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__deleteInstance(n),delete this.$i18n}}}function ta(e,r){e.locale=r.locale||e.locale,e.fallbackLocale=r.fallbackLocale||e.fallbackLocale,e.missing=r.missing||e.missing,e.silentTranslationWarn=r.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=r.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=r.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=r.postTranslation||e.postTranslation,e.warnHtmlInMessage=r.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=r.escapeParameterHtml||e.escapeParameterHtml,e.sync=r.sync||e.sync,e.__composer[sa](r.pluralizationRules||e.pluralizationRules);const t=le(e.locale,{messages:r.messages,__i18n:r.__i18n});return Object.keys(t).forEach(n=>e.mergeLocaleMessage(n,t[n])),r.datetimeFormats&&Object.keys(r.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n,r.datetimeFormats[n])),r.numberFormats&&Object.keys(r.numberFormats).forEach(n=>e.mergeNumberFormat(n,r.numberFormats[n])),e}const Ja=$("global-vue-i18n");function it(e={},r){const t=__VUE_I18N_LEGACY_API__&&I(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=I(e.globalInjection)?e.globalInjection:!0,l=__VUE_I18N_LEGACY_API__&&t?!!e.allowComposition:!0,a=new Map,[c,o]=qa(e,t),m=$("");function f(b){return a.get(b)||null}function g(b,d){a.set(b,d)}function E(b){a.delete(b)}{const b={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return l},async install(d,...O){d.__VUE_I18N_SYMBOL__=m,d.provide(d.__VUE_I18N_SYMBOL__,b),!t&&n&&rt(d,b.global),__VUE_I18N_FULL_INSTALL__&&Xa(d,b,...O),__VUE_I18N_LEGACY_API__&&t&&d.mixin(za(o,o.__composer,b));const R=d.unmount;d.unmount=()=>{b.dispose(),R()}},get global(){return o},dispose(){c.stop()},__instances:a,__getInstance:f,__setInstance:g,__deleteInstance:E};return b}}function we(e={}){const r=te();if(r==null)throw N(F.MUST_BE_CALL_SETUP_TOP);if(!r.isCE&&r.appContext.app!=null&&!r.appContext.app.__VUE_I18N_SYMBOL__)throw N(F.NOT_INSLALLED);const t=Ka(r),n=Za(t),l=$a(r),a=Qa(e,l);if(__VUE_I18N_LEGACY_API__&&t.mode==="legacy"&&!e.__useComponent){if(!t.allowComposition)throw N(F.NOT_AVAILABLE_IN_LEGACY_MODE);return tt(r,a,n,e)}if(a==="global")return ua(n,e,l),n;if(a==="parent"){let m=et(t,r,e.__useComponent);return m==null&&(m=n),m}const c=t;let o=c.__getInstance(r);if(o==null){const m=P({},e);"__i18n"in l&&(m.__i18n=l.__i18n),n&&(m.__root=n),o=We(m),at(c,r),c.__setInstance(r,o)}return o}function qa(e,r,t){const n=Ma();{const l=__VUE_I18N_LEGACY_API__&&r?n.run(()=>Ce(e)):n.run(()=>We(e));if(l==null)throw N(F.UNEXPECTED_ERROR);return[n,l]}}function Ka(e){{const r=Ca(e.isCE?Ja:e.appContext.app.__VUE_I18N_SYMBOL__);if(!r)throw N(e.isCE?F.NOT_INSLALLED_WITH_PROVIDE:F.UNEXPECTED_ERROR);return r}}function Qa(e,r){return Na(e)?"__i18n"in r?"local":"global":e.useScope?e.useScope:"local"}function Za(e){return e.mode==="composition"?e.global:e.global.__composer}function et(e,r,t=!1){let n=null;const l=r.root;let a=r.parent;for(;a!=null;){const c=e;if(e.mode==="composition")n=c.__getInstance(a);else if(__VUE_I18N_LEGACY_API__){const o=c.__getInstance(a);o!=null&&(n=o.__composer,t&&n&&!n[ca]&&(n=null))}if(n!=null||l===a)break;a=a.parent}return n}function at(e,r,t){pa(()=>{},r),Aa(()=>{e.__deleteInstance(r)},r)}function tt(e,r,t,n={}){const l=r==="local",a=Wa(null);if(l&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw N(F.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const c=I(n.inheritLocale)?n.inheritLocale:!0,o=A(l&&c?t.locale.value:v(n.locale)?n.locale:pe),m=A(l&&c?t.fallbackLocale.value:v(n.fallbackLocale)||h(n.fallbackLocale)||k(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:o.value),f=A(le(o.value,n)),g=A(k(n.datetimeFormats)?n.datetimeFormats:{[o.value]:{}}),E=A(k(n.numberFormats)?n.numberFormats:{[o.value]:{}}),b=l?t.missingWarn:I(n.missingWarn)||X(n.missingWarn)?n.missingWarn:!0,d=l?t.fallbackWarn:I(n.fallbackWarn)||X(n.fallbackWarn)?n.fallbackWarn:!0,O=l?t.fallbackRoot:I(n.fallbackRoot)?n.fallbackRoot:!0,R=!!n.fallbackFormat,D=H(n.missing)?n.missing:null,j=H(n.postTranslation)?n.postTranslation:null,w=l?t.warnHtmlMessage:I(n.warnHtmlMessage)?n.warnHtmlMessage:!0,G=!!n.escapeParameter,S=l?t.modifiers:k(n.modifiers)?n.modifiers:{},_=n.pluralRules||l&&t.pluralRules;function ne(){return[o.value,m.value,f.value,g.value,E.value]}const x=W({get:()=>a.value?a.value.locale.value:o.value,set:i=>{a.value&&(a.value.locale.value=i),o.value=i}}),Y=W({get:()=>a.value?a.value.fallbackLocale.value:m.value,set:i=>{a.value&&(a.value.fallbackLocale.value=i),m.value=i}}),z=W(()=>a.value?a.value.messages.value:f.value),re=W(()=>g.value),se=W(()=>E.value);function ce(){return a.value?a.value.getPostTranslationHandler():j}function ue(i){a.value&&a.value.setPostTranslationHandler(i)}function ie(){return a.value?a.value.getMissingHandler():D}function oe(i){a.value&&a.value.setMissingHandler(i)}function U(i){return ne(),i()}function V(...i){return a.value?U(()=>Reflect.apply(a.value.t,null,[...i])):U(()=>"")}function Q(...i){return a.value?Reflect.apply(a.value.rt,null,[...i]):""}function me(...i){return a.value?U(()=>Reflect.apply(a.value.d,null,[...i])):U(()=>"")}function fe(...i){return a.value?U(()=>Reflect.apply(a.value.n,null,[...i])):U(()=>"")}function _e(i){return a.value?a.value.tm(i):{}}function ge(i,L){return a.value?a.value.te(i,L):!1}function Se(i){return a.value?a.value.getLocaleMessage(i):{}}function be(i,L){a.value&&(a.value.setLocaleMessage(i,L),f.value[i]=L)}function ve(i,L){a.value&&a.value.mergeLocaleMessage(i,L)}function de(i){return a.value?a.value.getDateTimeFormat(i):{}}function Le(i,L){a.value&&(a.value.setDateTimeFormat(i,L),g.value[i]=L)}function Ee(i,L){a.value&&a.value.mergeDateTimeFormat(i,L)}function Ie(i){return a.value?a.value.getNumberFormat(i):{}}function ke(i,L){a.value&&(a.value.setNumberFormat(i,L),E.value[i]=L)}function Fe(i,L){a.value&&a.value.mergeNumberFormat(i,L)}const Z={get id(){return a.value?a.value.id:-1},locale:x,fallbackLocale:Y,messages:z,datetimeFormats:re,numberFormats:se,get inheritLocale(){return a.value?a.value.inheritLocale:c},set inheritLocale(i){a.value&&(a.value.inheritLocale=i)},get availableLocales(){return a.value?a.value.availableLocales:Object.keys(f.value)},get modifiers(){return a.value?a.value.modifiers:S},get pluralRules(){return a.value?a.value.pluralRules:_},get isGlobal(){return a.value?a.value.isGlobal:!1},get missingWarn(){return a.value?a.value.missingWarn:b},set missingWarn(i){a.value&&(a.value.missingWarn=i)},get fallbackWarn(){return a.value?a.value.fallbackWarn:d},set fallbackWarn(i){a.value&&(a.value.missingWarn=i)},get fallbackRoot(){return a.value?a.value.fallbackRoot:O},set fallbackRoot(i){a.value&&(a.value.fallbackRoot=i)},get fallbackFormat(){return a.value?a.value.fallbackFormat:R},set fallbackFormat(i){a.value&&(a.value.fallbackFormat=i)},get warnHtmlMessage(){return a.value?a.value.warnHtmlMessage:w},set warnHtmlMessage(i){a.value&&(a.value.warnHtmlMessage=i)},get escapeParameter(){return a.value?a.value.escapeParameter:G},set escapeParameter(i){a.value&&(a.value.escapeParameter=i)},t:V,getPostTranslationHandler:ce,setPostTranslationHandler:ue,getMissingHandler:ie,setMissingHandler:oe,rt:Q,d:me,n:fe,tm:_e,te:ge,getLocaleMessage:Se,setLocaleMessage:be,mergeLocaleMessage:ve,getDateTimeFormat:de,setDateTimeFormat:Le,mergeDateTimeFormat:Ee,getNumberFormat:Ie,setNumberFormat:ke,mergeNumberFormat:Fe};function Ne(i){i.locale.value=o.value,i.fallbackLocale.value=m.value,Object.keys(f.value).forEach(L=>{i.mergeLocaleMessage(L,f.value[L])}),Object.keys(g.value).forEach(L=>{i.mergeDateTimeFormat(L,g.value[L])}),Object.keys(E.value).forEach(L=>{i.mergeNumberFormat(L,E.value[L])}),i.escapeParameter=G,i.fallbackFormat=R,i.fallbackRoot=O,i.fallbackWarn=d,i.missingWarn=b,i.warnHtmlMessage=w}return Da(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw N(F.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const i=a.value=e.proxy.$i18n.__composer;r==="global"?(o.value=i.locale.value,m.value=i.fallbackLocale.value,f.value=i.messages.value,g.value=i.datetimeFormats.value,E.value=i.numberFormats.value):l&&Ne(i)}),Z}const lt=["locale","fallbackLocale","availableLocales"],nt=["t","rt","d","n","tm"];function rt(e,r){const t=Object.create(null);lt.forEach(n=>{const l=Object.getOwnPropertyDescriptor(r,n);if(!l)throw N(F.UNEXPECTED_ERROR);const a=wa(l.value)?{get(){return l.value.value},set(c){l.value.value=c}}:{get(){return l.get&&l.get()}};Object.defineProperty(t,n,a)}),e.config.globalProperties.$i18n=t,nt.forEach(n=>{const l=Object.getOwnPropertyDescriptor(r,n);if(!l||!l.value)throw N(F.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${n}`,l)})}da(Ta);La(ha);Ea(la);Ha();export{it as c};
