import{b as D,c as S,u as h,V as d}from"./VOverlay-891c21e4.js";import{g as x,v as A}from"./forwardRefs-540210a6.js";import{i as L,k as w,J as B,C as F,ao as I,E as m,l as R,M as f,a as g,S as T,ap as C}from"./index-cd0f3d5b.js";const O=L({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...D({origin:"center center",scrollStrategy:"block",transition:{component:S},zIndex:2400})},"VDialog"),z=w()({name:"VDialog",props:O(),emits:{"update:modelValue":a=>!0,afterLeave:()=>!0},setup(a,p){let{emit:E,slots:u}=p;const r=B(a,"modelValue"),{scopeId:V}=h(),e=F();function v(t){var l,c;const n=t.relatedTarget,s=t.target;if(n!==s&&((l=e.value)!=null&&l.contentEl)&&((c=e.value)!=null&&c.globalTop)&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const o=C(e.value.contentEl);if(!o.length)return;const i=o[0],y=o[o.length-1];n===i?y.focus():i.focus()}}I&&m(()=>r.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)},{immediate:!0});function P(){var t;(t=e.value)!=null&&t.contentEl&&!e.value.contentEl.contains(document.activeElement)&&e.value.contentEl.focus({preventScroll:!0})}function b(){E("afterLeave")}return m(r,async t=>{var n;t||(await T(),(n=e.value.activatorEl)==null||n.focus({preventScroll:!0}))}),R(()=>{const t=d.filterProps(a),n=f({"aria-haspopup":"dialog","aria-expanded":String(r.value)},a.activatorProps),s=f({tabindex:-1},a.contentProps);return g(d,f({ref:e,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:r.value,"onUpdate:modelValue":l=>r.value=l,"aria-modal":"true",activatorProps:n,contentProps:s,role:"dialog",onAfterEnter:P,onAfterLeave:b},V),{activator:u.activator,default:function(){for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return g(x,{root:"VDialog"},{default:()=>{var i;return[(i=u.default)==null?void 0:i.call(u,...c)]}})}})}),A({},e)}});export{z as V};