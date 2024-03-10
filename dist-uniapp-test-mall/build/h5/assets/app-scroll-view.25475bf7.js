import{d as e,p as r,J as t,o,c as n,w as a,a as l,u as i,z as s,B as u,m as f,A as c,l as d,g as p}from"./index.1710046744346.js";import{a as v,_ as h,b as m,i as g}from"./isObjectLike.53204146.js";import{u as w}from"./useSystem.fcc01766.js";import{_ as y}from"./plugin-vueexport-helper.6cd7b27f.js";var b=v,x=/\s/;var T=function(e){for(var r=e.length;r--&&x.test(e.charAt(r)););return r},_=/^\s+/;var B=h,j=m;var E=function(e){return e?e.slice(0,T(e)+1).replace(_,""):e},S=g,N=function(e){return"symbol"==typeof e||j(e)&&"[object Symbol]"==B(e)},$=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,O=/^0o[0-7]+$/i,W=parseInt;var A=g,I=function(){return b.Date.now()},M=function(e){if("number"==typeof e)return e;if(N(e))return NaN;if(S(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=S(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=E(e);var t=k.test(e);return t||O.test(e)?W(e.slice(2),t?2:8):$.test(e)?NaN:+e},R=Math.max,z=Math.min;var C=function(e,r,t){var o,n,a,l,i,s,u=0,f=!1,c=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(r){var t=o,a=n;return o=n=void 0,u=r,l=e.apply(a,t)}function v(e){var t=e-s;return void 0===s||t>=r||t<0||c&&e-u>=a}function h(){var e=I();if(v(e))return m(e);i=setTimeout(h,function(e){var t=r-(e-s);return c?z(t,a-(e-u)):t}(e))}function m(e){return i=void 0,d&&o?p(e):(o=n=void 0,l)}function g(){var e=I(),t=v(e);if(o=arguments,n=this,s=e,t){if(void 0===i)return function(e){return u=e,i=setTimeout(h,r),f?p(e):l}(s);if(c)return clearTimeout(i),i=setTimeout(h,r),p(s)}return void 0===i&&(i=setTimeout(h,r)),l}return r=M(r)||0,A(t)&&(f=!!t.leading,a=(c="maxWait"in t)?R(M(t.maxWait)||0,r):a,d="trailing"in t?!!t.trailing:d),g.cancel=function(){void 0!==i&&clearTimeout(i),u=0,o=s=n=i=void 0},g.flush=function(){return void 0===i?l:m(I())},g},D=g;var J=function(e,r,t){var o=!0,n=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return D(t)&&(o="leading"in t?!!t.leading:o,n="trailing"in t?!!t.trailing:n),C(e,r,{leading:o,maxWait:r,trailing:n})};const L=y(e({__name:"app-scroll-view",props:{paddingBottom:{default:0},showTop:{type:Boolean,default:!0},refresherEnabled:{type:Boolean,default:!0},refresherTriggered:{type:Boolean},refresherrefresh:null,scrolltolower:null,scroll:null},setup(e,{expose:v}){const h=e,m=r(!1),g=r(!1),y=r(0),{windowBottom:b}=w(),x=J((e=>{var r;g.value=g.value||e.detail.scrollTop>=1200,m.value=e.detail.scrollTop>=1200,null==(r=h.scroll)||r.call(h,e)}),100),T=()=>{m.value&&_(),m.value=!1,g.value=!1};function _(){y.value=y.value?0:.1}return t((()=>{g.value=!1})),v({scrollToTop:_}),(r,t)=>{const v=d,h=p;return o(),n(h,{class:"flex h-full overflow-hidden"},{default:a((()=>[l(v,{"scroll-y":"",class:"flex-1 h-full overflow-hidden","refresher-enabled":e.refresherEnabled,"scroll-top":i(y),"refresher-triggered":e.refresherTriggered,onScroll:i(x),onRefresherrefresh:e.refresherrefresh,onScrolltolower:e.scrolltolower},{default:a((()=>[s(r.$slots,"default",{},void 0,!0)])),_:3},8,["refresher-enabled","scroll-top","refresher-triggered","onScroll","onRefresherrefresh","onScrolltolower"]),i(g)&&e.showTop?(o(),n(h,{key:0,class:u({disapper:!i(m),show:i(m),"h-12 w-12 rounded-full fab fixed bg-[#fbb957] right-4 center":!0}),style:f({bottom:i(b)+e.paddingBottom+30+"px"}),onClick:T},{default:a((()=>[l(h,{class:"i-carbon-arrow-up text-7 text-white"})])),_:1},8,["class","style"])):c("v-if",!0)])),_:3})}}}),[["__scopeId","data-v-f8890466"]]);export{L as _};