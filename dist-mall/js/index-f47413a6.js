import{A as F,x as k,q as V,aj as D,d as G,y as j,R as J,ac as re,aA as ve,c as d,L as K,J as C,ak as fe,al as de,bf as he,S as U,b9 as ge,ba as we,b7 as me,au as be,ad as ye,f as $,b2 as q,a2 as Q,be as z,ae as xe,af as R,G as Z,H as Se}from"./index-47556e42.js";const[ee,I]=F("swipe"),Te={loop:k,width:V,height:V,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:k,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:k,stopPropagation:k},te=Symbol(ee);var pe=G({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:y,slots:g}){const u=j(),h=j(),t=J({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=re(),{children:w,linkChildren:s}=ve(te),i=d(()=>w.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),b=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),M=d(()=>o.value?Math.ceil(Math.abs(b.value)/o.value):i.value),O=d(()=>i.value*o.value),S=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${O.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,M.value):l},Y=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-b.value));let f=l-n;return a.loop||(f=R(f,b.value,0)),f},m=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),A=Y(c,l);if(a.loop){if(w[0]&&A!==b.value){const _=A<b.value;w[0].setOffset(_?O.value:0)}if(w[i.value-1]&&A!==0){const _=A>0;w[i.value-1].setOffset(_?-O.value:0)}}t.active=c,t.offset=A,n&&c!==f&&y("change",S.value)},E=()=>{t.swiping=!0,t.active<=-1?m({pace:i.value}):t.active>=i.value&&m({pace:-i.value})},ne=()=>{E(),r.reset(),z(()=>{t.swiping=!1,m({pace:-1,emitChange:!0})})},H=()=>{E(),r.reset(),z(()=>{t.swiping=!1,m({pace:1,emitChange:!0})})};let X;const p=()=>clearTimeout(X),P=()=>{p(),+a.autoplay>0&&i.value>1&&(X=setTimeout(()=>{H(),P()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!q(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=Y(e),w.forEach(c=>{c.setOffset(0)}),P()};q(u)?Q().then(l):l()},L=()=>T(t.active);let N;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,N=Date.now(),p(),E())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(xe(e,a.stopPropagation),m({offset:v.value}),x||(y("dragStart",{index:S.value}),x=!0))))},W=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-N,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),m({pace:c,emitChange:!0})}else v.value&&m({pace:0});x=!1,t.swiping=!1,y("dragEnd",{index:S.value}),P()},se=(e,l={})=>{E(),r.reset(),z(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?z(()=>{t.swiping=!1}):t.swiping=!1,m({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return $("i",{style:f,class:I("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return $("div",{class:I("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return K({prev:ne,next:H,state:t,resize:L,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:S}),C(()=>a.initialSwipe,e=>T(+e)),C(i,()=>T(t.active)),C(()=>a.autoplay,P),C([fe,de,()=>a.width,()=>a.height],L),C(he(),e=>{e==="visible"?P():p()}),U(T),ge(()=>T(t.active)),we(()=>T(t.active)),me(p),be(p),ye("touchmove",oe,{target:h}),()=>{var e;return $("div",{ref:u,class:I()},[$("div",{ref:h,style:ae.value,class:I("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:W,onTouchcancel:W},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ee=Z(pe),[Pe,Ae]=F("swipe-item");var Ce=G({name:Pe,setup(a,{slots:y}){let g;const u=J({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const x=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,b=o===0&&s?v:o-1,M=o===v&&s?0:o+1;return g=t.value===o||t.value===b||t.value===M,g}),w=s=>{u.offset=s};return U(()=>{Q(()=>{u.mounted=!0})}),K({setOffset:w}),()=>{var s;return $("div",{class:Ae(),style:x.value},[r.value?(s=y.default)==null?void 0:s.call(y):null])}}});const ke=Z(Ce);export{Ee as S,ke as a};
