import{u as et}from"./rules-08dc73ed.js";import{_ as J}from"./plugin-vue_export-helper-c27b6911.js";import{V as tt,a as at,b as nt}from"./VCard-70e41233.js";import{V as ot}from"./VForm-6aa741bf.js";import{V as be}from"./VTextField-c32c9752.js";import{V as lt}from"./VRow-93a26ab0.js";import{V as Ne}from"./VCol-c72717e7.js";import{V as st}from"./VCheckbox-e8072029.js";import{V as Y,a as _e,m as ue,b as ce,c as de,u as ve,d as me,e as he,f as Ue,g as ee,h as it,i as rt,j as ut,t as ct,k as pe,l as dt,n as He,o as Ge,p as vt,q as mt,r as ht,s as ft,v as gt,w as yt,x as bt}from"./forwardRefs-601a00f7.js";import{V as _t}from"./VDialog-a1cc2a02.js";import{r as te,o as S,c as E,w as u,a as o,b as L,t as C,d as P,u as pt,e as F,F as z,f as se,g as W,p as wt,h as Vt,i as R,m as q,j as Q,k as H,l as G,n as fe,q as oe,s as U,v as ge,x as Fe,y as N,z as f,A as ye,B as Z,C as we,D as kt,E as D,G as Ve,H as ke,I as Se,J as ze,K as ae,L as Ce,M as re,N as Ye,O as St,P as Ct,Q as We,R as qe,T as xt,S as Tt,U as $t,V as Ie,W as Et,X as Bt,Y as At}from"./index-9a7d77d1.js";import{V as ne,a as j,b as Pe,c as ie,d as Le,e as Mt}from"./VMenu-28f47fd6.js";import{u as xe}from"./ssrBoot-dfd69665.js";import{m as Nt,u as It,a as Pt}from"./VOverlay-bfd1bd36.js";import"./VField-28f70089.js";import"./VCheckboxBtn-b9ccac59.js";const Lt={setup(){const{rules:e}=et();return{rules:e}},data(){return{dialog:!1,validation:!1,username:"1@a.com",password:"passwordistoolong",showPassword:!1,remember:!0}},beforeUpdate(){},methods:{login(){const e=this;this.$axios({method:this.$api("ACCOUNTS_LOGIN").method,url:this.$api("ACCOUNTS_LOGIN").url,data:{username:this.username,password:this.password}}).then(function(n){const a=n.data.data.key,r=n.data.data.user;e.$store.setToken(a,e.remember),e.$store.setUser(r,e.remember),e.$axios.defaults.headers.common.Authorization="Token "+a,e.dialog=!1,e.$toast.success(e.$t("message.HELLO_USER",{call_name:r.call_name}))}).catch(function(n){e.$toast.error(e.$error(n,"ACCOUNTS_LOGIN"))})}}},Ot={class:"mb-1"},Rt={class:"text-body-2 font-weight-medium"},Dt={class:"mb-1"},Ut={class:"text-body-2 font-weight-medium"},Ht={class:"ml-1 text-subtitle-2"},Gt={class:"mt-1 text-subtitle-2 text-center"};function Ft(e,n,a,r,t,s){const l=te("router-link");return S(),E(_t,{modelValue:t.dialog,"onUpdate:modelValue":n[7]||(n[7]=i=>t.dialog=i),activator:"parent","max-width":"500"},{default:u(()=>[o(tt,{class:"pa-6"},{default:u(()=>[o(at,{class:"mb-4 text-h5 font-weight-bold text-center"},{default:u(()=>[L(C(e.$t("action.LOGIN")),1)]),_:1}),o(ot,{modelValue:t.validation,"onUpdate:modelValue":n[3]||(n[3]=i=>t.validation=i)},{default:u(()=>[P("div",Ot,[P("div",Rt,C(e.$t("accounts.USERNAME")),1),o(be,{modelValue:t.username,"onUpdate:modelValue":n[0]||(n[0]=i=>t.username=i),density:"compact","prepend-inner-icon":"mdi-email-outline",rules:[r.rules.required,r.rules.emailRules]},null,8,["modelValue","rules"])]),P("div",Dt,[P("div",Ut,C(e.$t("accounts.PASSWORD")),1),o(be,{modelValue:t.password,"onUpdate:modelValue":n[1]||(n[1]=i=>t.password=i),density:"compact",type:t.showPassword?"text":"password","prepend-inner-icon":"mdi-lock-outline","append-inner-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:[r.rules.required],"onClick:appendInner":n[2]||(n[2]=i=>t.showPassword=!t.showPassword),autocomplete:""},null,8,["modelValue","type","append-inner-icon","rules"])])]),_:1},8,["modelValue"]),o(lt,{class:"text-subtitle-2 text-right"},{default:u(()=>[o(Ne,null,{default:u(()=>[o(st,{modelValue:t.remember,"onUpdate:modelValue":n[4]||(n[4]=i=>t.remember=i),density:"compact",color:"secondary"},{label:u(()=>[P("span",Ht,C(e.$t("hint.REMEMBER_ME")),1)]),_:1},8,["modelValue"])]),_:1}),o(Ne,{class:"pt-2"},{default:u(()=>[o(l,{to:{name:"accounts.password.find"},class:"text-decoration-none",onClick:n[5]||(n[5]=i=>t.dialog=!1)},{default:u(()=>[L(C(e.$t("hint.FORGOT_PASSWORD")),1)]),_:1})]),_:1})]),_:1}),o(nt,{class:"pa-0"},{default:u(()=>[o(Y,{color:"secondary",block:"",disabled:!t.validation,onClick:s.login},{default:u(()=>[L(C(e.$t("action.LOGIN")),1)]),_:1},8,["disabled","onClick"])]),_:1}),P("div",Gt,[L(C(e.$t("hint.NO_ACCOUNT"))+" ",1),o(l,{to:{name:"accounts.signup"},class:"text-decoration-none",onClick:n[6]||(n[6]=i=>t.dialog=!1)},{default:u(()=>[L(C(e.$t("action.SIGNUP")),1)]),_:1})])]),_:1})]),_:1},8,["modelValue"])}const zt=J(Lt,[["render",Ft],["__scopeId","data-v-684204e7"]]);const Yt={setup(){return{theme:pt()}},computed:{menu(){return[{text:this.$t("menu.BLOG"),icon:"mdi-post-outline",to:{name:"blogs"}},{text:this.$t("menu.FORUM"),icon:"mdi-home-group",to:{name:"thread",params:{forum:"illegallysmolcats"}}}]},staffMenu(){return[{text:this.$t("menu.MANAGE_USERS"),icon:"mdi-account-outline",to:{name:"admin.users"}},{text:this.$t("menu.MANAGE_BLOGS"),icon:"mdi-post-outline",to:{name:"admin.blogs"}},{text:this.$t("menu.MANAGE_FORUMS"),icon:"mdi-forum-outline",to:{name:"admin.forums"}},{text:this.$t("menu.MANAGE_THREADS"),icon:"mdi-message-reply-outline",to:{name:"admin.threads"}}]}},methods:{openMenu(e){const n=e.url;n?window.open(n,"_blank"):this.$router.push(e.to)},languageSelected(e){return this.$i18n.locale==e},changeLocale(e){if(this.$i18n.locale!=e){const n="api";let a="https://<your api server>/";this.$store.const("DEFAULT_LANGUAGE")!=e&&(a+=e+"/"),this.$axios.defaults.baseURL=a+n,this.$i18n.locale=e,this.$store.setLocale(e)}},setTheme(e){this.theme.global.name.value=e,this.$store.setTheme(e)}}},Wt=e=>(wt("data-v-3be95654"),e=e(),Vt(),e),qt={class:"mx-4"},Xt={class:"mt-2 mx-6 text-caption footer"},Kt=Wt(()=>P("a",{href:"https://github.com/genonfire/bbgo-core",target:"_blank"}," Made by bbgo ",-1));function Zt(e,n,a,r,t,s){return S(),F(z,null,[o(ie,null,{default:u(()=>[(S(!0),F(z,null,se(s.menu,(l,i)=>(S(),E(ne,{key:i,value:l,onClick:v=>e.$router.push(l.to)},{prepend:u(()=>[l.icon?(S(),E(_e,{key:0,icon:l.icon},null,8,["icon"])):W("",!0)]),default:u(()=>[o(j,{textContent:C(l.text)},null,8,["textContent"])]),_:2},1032,["value","onClick"]))),128)),o(Pe,{class:"my-1"})]),_:1}),e.$store.isStaff?(S(),E(ie,{key:0,class:"pt-0"},{default:u(()=>[o(j,{class:"ml-3 font-weight-bold"},{default:u(()=>[L(C(e.$t("common.ADMIN")),1)]),_:1}),(S(!0),F(z,null,se(s.staffMenu,(l,i)=>(S(),E(ne,{key:i,value:l,onClick:v=>s.openMenu(l)},{prepend:u(()=>[l.icon?(S(),E(_e,{key:0,icon:l.icon},null,8,["icon"])):W("",!0)]),default:u(()=>[o(j,{textContent:C(l.text)},null,8,["textContent"])]),_:2},1032,["value","onClick"]))),128)),o(Pe,{class:"my-1"})]),_:1})):W("",!0),!e.$store.isLoggedIn||e.$store.isStaff?(S(),E(ie,{key:1,class:"pt-0"},{default:u(()=>[o(Le,null,{default:u(()=>[L(C(e.$t("common.LANGUAGE")),1)]),_:1}),(S(!0),F(z,null,se(e.$store.const("LANGUAGES"),(l,i)=>(S(),E(ne,{key:i,value:l,active:s.languageSelected(l.value),onClick:v=>s.changeLocale(l.value)},{default:u(()=>[o(j,{textContent:C(l.text)},null,8,["textContent"])]),_:2},1032,["value","active","onClick"]))),128)),o(Le,{class:"ml-3"},{default:u(()=>[L(C(e.$t("common.THEME")),1)]),_:1}),P("div",qt,[P("span",null,[o(Y,{icon:"mdi-weather-sunny",variant:"flat",onClick:n[0]||(n[0]=l=>s.setTheme("light"))})]),P("span",null,[o(Y,{icon:"mdi-weather-night",variant:"flat",onClick:n[1]||(n[1]=l=>s.setTheme("dark"))})])])]),_:1})):W("",!0),P("div",Xt,[L(" © "+C(new Date().getFullYear())+" "+C(e.$t("info.SITENAME"))+" ",1),Kt])],64)}const jt=J(Yt,[["render",Zt],["__scopeId","data-v-3be95654"]]),Jt={computed:{menu(){return[{text:this.$t("menu.PROFILE"),to:{name:"accounts.profile"}},{text:this.$t("menu.SETTINGS"),to:{name:"accounts.settings"}},{text:this.$t("menu.CHANGE_PASSWORD"),to:{name:"accounts.password.change"}}]}},methods:{logout(){const e=this;this.$axios({method:this.$api("ACCOUNTS_LOGOUT").method,url:this.$api("ACCOUNTS_LOGOUT").url}).then(function(n){e.$axios.defaults.headers.common.Authorization="",e.$store.logout(),e.$router.push({name:"home"}),e.$toast.info(e.$t("message.LOGOUT_COMPLETE"))}).catch(function(n){e.$toast.error(e.$error(n,"ACCOUNTS_LOGOUT"))})}}};function Qt(e,n,a,r,t,s){return S(),E(Mt,{activator:"#avatar"},{default:u(()=>[o(ie,{density:"compact",nav:""},{default:u(()=>[(S(!0),F(z,null,se(s.menu,(l,i)=>(S(),E(ne,{key:i,value:l,onClick:v=>e.$router.push(l.to),class:"px-4 py-0 my-0"},{default:u(()=>[o(j,{textContent:C(l.text)},null,8,["textContent"])]),_:2},1032,["value","onClick"]))),128)),o(ne,{onClick:s.logout,class:"px-4 py-0 my-0",style:{color:"#EB6669"}},{default:u(()=>[o(j,null,{default:u(()=>[o(_e,{class:"mr-1"},{default:u(()=>[L("mdi-logout")]),_:1}),L(" "+C(e.$t("action.LOGOUT")),1)]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})}const ea=J(Jt,[["render",Qt]]),ta="/bbgo-demo/logo.png";const aa=R({text:String,...q(),...Q()},"VToolbarTitle"),na=H()({name:"VToolbarTitle",props:aa(),setup(e,n){let{slots:a}=n;return G(()=>{const r=!!(a.default||a.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[r&&o("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]}})}),{}}}),oa=[null,"prominent","default","comfortable","compact"],Xe=R({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>oa.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ue(),...q(),...ce(),...de(),...Q({tag:"header"}),...fe()},"VToolbar"),Oe=H()({name:"VToolbar",props:Xe(),setup(e,n){var c;let{slots:a}=n;const{backgroundColorClasses:r,backgroundColorStyles:t}=oe(U(e,"color")),{borderClasses:s}=ve(e),{elevationClasses:l}=me(e),{roundedClasses:i}=he(e),{themeClasses:v}=ge(e),{rtlClasses:m}=Fe(),d=N(!!(e.extended||(c=a.extension)!=null&&c.call(a))),g=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=f(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ye({VBtn:{variant:"text"}}),G(()=>{var I;const _=!!(e.title||a.title),V=!!(a.image||e.image),B=(I=a.extension)==null?void 0:I.call(a);return d.value=!!(e.extended||B),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,s.value,l.value,i.value,v.value,m.value,e.class],style:[t.value,e.style]},{default:()=>[V&&o("div",{key:"image",class:"v-toolbar__image"},[a.image?o(ee,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o(Ue,{key:"image-img",cover:!0,src:e.image},null)]),o(ee,{defaults:{VTabs:{height:Z(g.value)}}},{default:()=>{var A,y,$;return[o("div",{class:"v-toolbar__content",style:{height:Z(g.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(A=a.prepend)==null?void 0:A.call(a)]),_&&o(na,{key:"title",text:e.title},{text:a.title}),(y=a.default)==null?void 0:y.call(a),a.append&&o("div",{class:"v-toolbar__append"},[($=a.append)==null?void 0:$.call(a)])])]}}),o(ee,{defaults:{VTabs:{height:Z(h.value)}}},{default:()=>[o(it,null,{default:()=>[d.value&&o("div",{class:"v-toolbar__extension",style:{height:Z(h.value)}},[B])]})]})]})}),{contentHeight:g,extensionHeight:h}}}),la=R({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function sa(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=n;let r=0;const t=we(null),s=N(0),l=N(0),i=N(0),v=N(!1),m=N(!1),d=f(()=>Number(e.scrollThreshold)),g=f(()=>kt((d.value-s.value)/d.value||0)),h=()=>{const c=t.value;!c||a&&!a.value||(r=s.value,s.value="window"in c?c.pageYOffset:c.scrollTop,m.value=s.value<r,i.value=Math.abs(s.value-d.value))};return D(m,()=>{l.value=l.value||s.value}),D(v,()=>{l.value=0}),Ve(()=>{D(()=>e.scrollTarget,c=>{var V;const _=c?document.querySelector(c):window;_&&_!==t.value&&((V=t.value)==null||V.removeEventListener("scroll",h),t.value=_,t.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),ke(()=>{var c;(c=t.value)==null||c.removeEventListener("scroll",h)}),a&&D(a,h,{immediate:!0}),{scrollThreshold:d,currentScroll:s,currentThreshold:i,isScrollActive:v,scrollRatio:g,isScrollingUp:m,savedScroll:l}}const ia=R({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Xe(),...Se(),...la(),height:{type:[Number,String],default:64}},"VAppBar"),ra=H()({name:"VAppBar",props:ia(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const r=we(),t=ze(e,"modelValue"),s=f(()=>{var $;const y=new Set((($=e.scrollBehavior)==null?void 0:$.split(" "))??[]);return{hide:y.has("hide"),fullyHide:y.has("fully-hide"),inverted:y.has("inverted"),collapse:y.has("collapse"),elevate:y.has("elevate"),fadeImage:y.has("fade-image")}}),l=f(()=>{const y=s.value;return y.hide||y.fullyHide||y.inverted||y.collapse||y.elevate||y.fadeImage||!t.value}),{currentScroll:i,scrollThreshold:v,isScrollingUp:m,scrollRatio:d}=sa(e,{canScroll:l}),g=f(()=>s.value.hide||s.value.fullyHide),h=f(()=>e.collapse||s.value.collapse&&(s.value.inverted?d.value>0:d.value===0)),c=f(()=>e.flat||s.value.fullyHide&&!t.value||s.value.elevate&&(s.value.inverted?i.value>0:i.value===0)),_=f(()=>s.value.fadeImage?s.value.inverted?1-d.value:d.value:void 0),V=f(()=>{var O,b;const y=Number(((O=r.value)==null?void 0:O.contentHeight)??e.height),$=Number(((b=r.value)==null?void 0:b.extensionHeight)??0);return g.value?i.value<v.value||s.value.fullyHide?y+$:y:y+$});ae(f(()=>!!e.scrollBehavior),()=>{Ye(()=>{g.value?s.value.inverted?t.value=i.value>v.value:t.value=m.value||i.value<v.value:t.value=!0})});const{ssrBootStyles:B}=xe(),{layoutItemStyles:I,layoutIsReady:A}=Ce({id:e.name,order:f(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:V,elementSize:N(void 0),active:t,absolute:U(e,"absolute")});return G(()=>{const y=Oe.filterProps(e);return o(Oe,re({ref:r,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...I.value,"--v-toolbar-image-opacity":_.value,height:void 0,...B.value},e.style]},y,{collapse:h.value,flat:c.value}),a)}),A}}),ua=R({...rt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ca=H()({name:"VAppBarNavIcon",props:ua(),setup(e,n){let{slots:a}=n;return G(()=>o(Y,re(e,{class:["v-app-bar-nav-icon"]}),a)),{}}});function da(e){let{rootEl:n,isSticky:a,layoutItemStyles:r}=e;const t=N(!1),s=N(0),l=f(()=>{const m=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[m]:Z(s.value)}:{top:r.value.top}]});Ve(()=>{D(a,m=>{m?window.addEventListener("scroll",v,{passive:!0}):window.removeEventListener("scroll",v)},{immediate:!0})}),ke(()=>{window.removeEventListener("scroll",v)});let i=0;function v(){const m=i>window.scrollY?"up":"down",d=n.value.getBoundingClientRect(),g=parseFloat(r.value.top??0),h=window.scrollY-Math.max(0,s.value-g),c=d.height+Math.max(s.value,g)-window.scrollY-window.innerHeight,_=parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y"))||0;d.height<window.innerHeight-g?(t.value="top",s.value=g):m==="up"&&t.value==="bottom"||m==="down"&&t.value==="top"?(s.value=window.scrollY+d.top-_,t.value=!0):m==="down"&&c<=0?(s.value=0,t.value="bottom"):m==="up"&&h<=0&&(_?t.value!=="top"&&(s.value=-h+_+g,t.value="top"):(s.value=d.top+h,t.value="top")),i=window.scrollY}return{isStuck:t,stickyStyles:l}}const va=100,ma=20;function Re(e){const n=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*n}function De(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const r=Re(n),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);n+=(t-r)*Math.abs(t),a===e.length-1&&(n*=.5)}return Re(n)*1e3}function ha(){const e={};function n(t){Array.from(t.changedTouches).forEach(s=>{(e[s.identifier]??(e[s.identifier]=new St(ma))).push([t.timeStamp,s])})}function a(t){Array.from(t.changedTouches).forEach(s=>{delete e[s.identifier]})}function r(t){var m;const s=(m=e[t])==null?void 0:m.values().reverse();if(!s)throw new Error(`No samples for touch id ${t}`);const l=s[0],i=[],v=[];for(const d of s){if(l[0]-d[0]>va)break;i.push({t:d[0],d:d[1].clientX}),v.push({t:d[0],d:d[1].clientY})}return{x:De(i),y:De(v),get direction(){const{x:d,y:g}=this,[h,c]=[Math.abs(d),Math.abs(g)];return h>c&&d>=0?"right":h>c&&d<=0?"left":c>h&&g>=0?"down":c>h&&g<=0?"up":fa()}}}return{addMovement:n,endTouch:a,getVelocity:r}}function fa(){throw new Error}function ga(e){let{el:n,isActive:a,isTemporary:r,width:t,touchless:s,position:l}=e;Ve(()=>{window.addEventListener("touchstart",A,{passive:!0}),window.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("touchend",$,{passive:!0})}),ke(()=>{window.removeEventListener("touchstart",A),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",$)});const i=f(()=>["left","right"].includes(l.value)),{addMovement:v,endTouch:m,getVelocity:d}=ha();let g=!1;const h=N(!1),c=N(0),_=N(0);let V;function B(b,p){return(l.value==="left"?b:l.value==="right"?document.documentElement.clientWidth-b:l.value==="top"?b:l.value==="bottom"?document.documentElement.clientHeight-b:K())-(p?t.value:0)}function I(b){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const w=l.value==="left"?(b-_.value)/t.value:l.value==="right"?(document.documentElement.clientWidth-b-_.value)/t.value:l.value==="top"?(b-_.value)/t.value:l.value==="bottom"?(document.documentElement.clientHeight-b-_.value)/t.value:K();return p?Math.max(0,Math.min(1,w)):w}function A(b){if(s.value)return;const p=b.changedTouches[0].clientX,w=b.changedTouches[0].clientY,k=25,T=l.value==="left"?p<k:l.value==="right"?p>document.documentElement.clientWidth-k:l.value==="top"?w<k:l.value==="bottom"?w>document.documentElement.clientHeight-k:K(),x=a.value&&(l.value==="left"?p<t.value:l.value==="right"?p>document.documentElement.clientWidth-t.value:l.value==="top"?w<t.value:l.value==="bottom"?w>document.documentElement.clientHeight-t.value:K());(T||x||a.value&&r.value)&&(V=[p,w],_.value=B(i.value?p:w,a.value),c.value=I(i.value?p:w),g=_.value>-20&&_.value<80,m(b),v(b))}function y(b){const p=b.changedTouches[0].clientX,w=b.changedTouches[0].clientY;if(g){if(!b.cancelable){g=!1;return}const T=Math.abs(p-V[0]),x=Math.abs(w-V[1]);(i.value?T>x&&T>3:x>T&&x>3)?(h.value=!0,g=!1):(i.value?x:T)>3&&(g=!1)}if(!h.value)return;b.preventDefault(),v(b);const k=I(i.value?p:w,!1);c.value=Math.max(0,Math.min(1,k)),k>1?_.value=B(i.value?p:w,!0):k<0&&(_.value=B(i.value?p:w,!1))}function $(b){if(g=!1,!h.value)return;v(b),h.value=!1;const p=d(b.changedTouches[0].identifier),w=Math.abs(p.x),k=Math.abs(p.y);(i.value?w>k&&w>400:k>w&&k>3)?a.value=p.direction===({left:"right",right:"left",top:"down",bottom:"up"}[l.value]||K()):a.value=c.value>.5}const O=f(()=>h.value?{transform:l.value==="left"?`translateX(calc(-100% + ${c.value*t.value}px))`:l.value==="right"?`translateX(calc(100% - ${c.value*t.value}px))`:l.value==="top"?`translateY(calc(-100% + ${c.value*t.value}px))`:l.value==="bottom"?`translateY(calc(100% - ${c.value*t.value}px))`:K(),transition:"none"}:void 0);return ae(h,()=>{var w,k;const b=((w=n.value)==null?void 0:w.style.transform)??null,p=((k=n.value)==null?void 0:k.style.transition)??null;Ye(()=>{var T,x,X,le;(x=n.value)==null||x.style.setProperty("transform",((T=O.value)==null?void 0:T.transform)||"none"),(le=n.value)==null||le.style.setProperty("transition",((X=O.value)==null?void 0:X.transition)||null)}),Ct(()=>{var T,x;(T=n.value)==null||T.style.setProperty("transform",b),(x=n.value)==null||x.style.setProperty("transition",p)})}),{isDragging:h,dragProgress:c,dragStyles:O}}function K(){throw new Error}const ya=["start","end","left","right","top","bottom"],ba=R({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ya.includes(e)},sticky:Boolean,...ue(),...q(),...Nt(),...We(),...ce(),...Se(),...de(),...Q({tag:"nav"}),...fe()},"VNavigationDrawer"),_a=H()({name:"VNavigationDrawer",props:ba(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,n){let{attrs:a,emit:r,slots:t}=n;const{isRtl:s}=Fe(),{themeClasses:l}=ge(e),{borderClasses:i}=ve(e),{backgroundColorClasses:v,backgroundColorStyles:m}=oe(U(e,"color")),{elevationClasses:d}=me(e),{displayClasses:g,mobile:h}=qe(e),{roundedClasses:c}=he(e),_=ut(),V=ze(e,"modelValue",null,M=>!!M),{ssrBootStyles:B}=xe(),{scopeId:I}=It(),A=we(),y=N(!1),{runOpenDelay:$,runCloseDelay:O}=Pt(e,M=>{y.value=M}),b=f(()=>e.rail&&e.expandOnHover&&y.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=f(()=>ct(e.location,s.value)),w=f(()=>e.persistent),k=f(()=>!e.permanent&&(h.value||e.temporary)),T=f(()=>e.sticky&&!k.value&&p.value!=="bottom");ae(()=>e.expandOnHover&&e.rail!=null,()=>{D(y,M=>r("update:rail",!M))}),ae(()=>!e.disableResizeWatcher,()=>{D(k,M=>!e.permanent&&Tt(()=>V.value=!M))}),ae(()=>!e.disableRouteWatcher&&!!_,()=>{D(_.currentRoute,()=>k.value&&(V.value=!1))}),D(()=>e.permanent,M=>{M&&(V.value=!0)}),e.modelValue==null&&!k.value&&(V.value=e.permanent||!h.value);const{isDragging:x,dragProgress:X}=ga({el:A,isActive:V,isTemporary:k,width:b,touchless:U(e,"touchless"),position:p}),le=f(()=>{const M=k.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):b.value;return x.value?M*X.value:M}),Ke=f(()=>["top","bottom"].includes(e.location)?0:b.value),{layoutItemStyles:Te,layoutItemScrimStyles:Ze,layoutIsReady:je}=Ce({id:e.name,order:f(()=>parseInt(e.order,10)),position:p,layoutSize:le,elementSize:Ke,active:f(()=>V.value||x.value),disableTransitions:f(()=>x.value),absolute:f(()=>e.absolute||T.value&&typeof $e.value!="string")}),{isStuck:$e,stickyStyles:Je}=da({rootEl:A,isSticky:T,layoutItemStyles:Te}),Ee=oe(f(()=>typeof e.scrim=="string"?e.scrim:null)),Qe=f(()=>({...x.value?{opacity:X.value*.2,transition:"none"}:void 0,...Ze.value}));return ye({VList:{bgColor:"transparent"}}),G(()=>{const M=t.image||e.image;return o(z,null,[o(e.tag,re({ref:A,onMouseenter:$,onMouseleave:O,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":y.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":k.value,"v-navigation-drawer--persistent":w.value,"v-navigation-drawer--active":V.value,"v-navigation-drawer--sticky":T.value},l.value,v.value,i.value,g.value,d.value,c.value,e.class],style:[m.value,Te.value,B.value,Je.value,e.style,["top","bottom"].includes(p.value)?{height:"auto"}:{}]},I,a),{default:()=>{var Be,Ae,Me;return[M&&o("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?o(ee,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):o(Ue,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&o("div",{class:"v-navigation-drawer__prepend"},[(Be=t.prepend)==null?void 0:Be.call(t)]),o("div",{class:"v-navigation-drawer__content"},[(Ae=t.default)==null?void 0:Ae.call(t)]),t.append&&o("div",{class:"v-navigation-drawer__append"},[(Me=t.append)==null?void 0:Me.call(t)])]}}),o(xt,{name:"fade-transition"},{default:()=>[k.value&&(x.value||V.value)&&!!e.scrim&&o("div",re({class:["v-navigation-drawer__scrim",Ee.backgroundColorClasses.value],style:[Qe.value,Ee.backgroundColorStyles.value],onClick:()=>{w.value||(V.value=!1)}},I),null)]})])}),je.then(()=>({isStuck:$e}))}}),pa={components:{LoginDialog:zt,Menu:jt,AvatarMenu:ea},data(){return{drawer:!1,search:null,bell:!1}},computed:{user(){return this.$store.getUser}},methods:{onEsc(){this.$refs.search.blur()},onEnter(){},searchAnything(e){this.onEsc(),this.$route.name.includes("blogs")?this.$router.push({name:"blogs",query:{q:this.search}}):this.$route.name.includes("thread")&&this.$router.push({name:"thread",params:{forum:this.$route.params.forum},query:{q:this.search}})}}},wa={key:0};function Va(e,n,a,r,t,s){const l=te("AvatarMenu"),i=te("LoginDialog"),v=te("Menu");return S(),F(z,null,[o(ra,null,{prepend:u(()=>[o(ca,{onClick:n[0]||(n[0]=$t(m=>t.drawer=!t.drawer,["stop"]))}),P("img",{src:ta,class:"appbar-logo",onClick:n[1]||(n[1]=m=>e.$router.push({name:"home"}))})]),append:u(()=>[s.user?(S(),F("div",wa,[o(Y,{id:"bell",icon:t.bell?"mdi-bell-badge-outline":"mdi-bell-outline",class:"mr-2",color:t.bell?"secondary":""},null,8,["icon","color"]),o(Y,{id:"avatar",icon:""},{default:u(()=>[s.user.photo?(S(),E(pe,{key:0,image:s.user.photo,size:"42"},null,8,["image"])):(S(),E(pe,{key:1,icon:"mdi-account-outline",color:"tertiary",size:"42"}))]),_:1}),o(l)])):W("",!0),s.user?W("",!0):(S(),E(Y,{key:1,variant:"flat",color:"secondary",width:"80"},{default:u(()=>[L(C(e.$t("action.LOGIN"))+" ",1),o(i)]),_:1}))]),default:u(()=>[o(dt,{class:"mx-3 appbar-search"},{default:u(()=>[o(be,{ref:"search",modelValue:t.search,"onUpdate:modelValue":n[2]||(n[2]=m=>t.search=m),variant:"outlined",density:"compact",clearable:"","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:e.$t("common.SEARCH"),onKeydown:[Ie(s.onEsc,["esc"]),Ie(s.onEnter,["enter"])],accesskey:"/"},null,8,["modelValue","placeholder","onKeydown"])]),_:1})]),_:1}),o(_a,{modelValue:t.drawer,"onUpdate:modelValue":n[3]||(n[3]=m=>t.drawer=m)},{default:u(()=>[o(v)]),_:1},8,["modelValue"])],64)}const ka=J(pa,[["render",Va]]);const Sa=R({scrollable:Boolean,...q(),...He(),...Q({tag:"main"})},"VMain"),Ca=H()({name:"VMain",props:Sa(),setup(e,n){let{slots:a}=n;const{dimensionStyles:r}=Ge(e),{mainStyles:t,layoutIsReady:s}=Et(),{ssrBootStyles:l}=xe();return G(()=>o(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,l.value,r.value,e.style]},{default:()=>{var i,v;return[e.scrollable?o("div",{class:"v-main__scroller"},[(i=a.default)==null?void 0:i.call(a)]):(v=a.default)==null?void 0:v.call(a)]}})),s}}),xa={};function Ta(e,n){const a=te("router-view");return S(),E(Ca,null,{default:u(()=>[(S(),E(a,{key:e.$route.fullPath}))]),_:1})}const $a=J(xa,[["render",Ta]]);const Ea=R({color:String,density:String,...q()},"VBannerActions"),Ba=H()({name:"VBannerActions",props:Ea(),setup(e,n){let{slots:a}=n;return ye({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),G(()=>{var r;return o("div",{class:["v-banner-actions",e.class],style:e.style},[(r=a.default)==null?void 0:r.call(a)])}),{}}}),Aa=vt("v-banner-text"),Ma=R({avatar:String,bgColor:String,color:String,icon:Bt,lines:String,stacked:Boolean,sticky:Boolean,text:String,...ue(),...q(),...mt(),...He(),...We(),...ce(),...ht(),...ft(),...de(),...Q(),...fe()},"VBanner"),Na=H()({name:"VBanner",props:Ma(),setup(e,n){let{slots:a}=n;const{backgroundColorClasses:r,backgroundColorStyles:t}=oe(e,"bgColor"),{borderClasses:s}=ve(e),{densityClasses:l}=gt(e),{displayClasses:i,mobile:v}=qe(e),{dimensionStyles:m}=Ge(e),{elevationClasses:d}=me(e),{locationStyles:g}=yt(e),{positionClasses:h}=bt(e),{roundedClasses:c}=he(e),{themeClasses:_}=ge(e),V=U(e,"color"),B=U(e,"density");ye({VBannerActions:{color:V,density:B}}),G(()=>{const I=!!(e.text||a.text),A=!!(e.avatar||e.icon),y=!!(A||a.prepend);return o(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||v.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},_.value,r.value,s.value,l.value,i.value,d.value,h.value,c.value,e.class],style:[t.value,m.value,g.value,e.style],role:"banner"},{default:()=>{var $;return[y&&o("div",{key:"prepend",class:"v-banner__prepend"},[a.prepend?o(ee,{key:"prepend-defaults",disabled:!A,defaults:{VAvatar:{color:V.value,density:B.value,icon:e.icon,image:e.avatar}}},a.prepend):o(pe,{key:"prepend-avatar",color:V.value,density:B.value,icon:e.icon,image:e.avatar},null)]),o("div",{class:"v-banner__content"},[I&&o(Aa,{key:"text"},{default:()=>{var O;return[((O=a.text)==null?void 0:O.call(a))??e.text]}}),($=a.default)==null?void 0:$.call(a)]),a.actions&&o(Ba,{key:"actions"},a.actions)]}})})}});const Ia=R({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ue(),...q(),...ce(),...Se(),...de(),...Q({tag:"footer"}),...fe()},"VFooter"),Pa=H()({name:"VFooter",props:Ia(),setup(e,n){let{slots:a}=n;const{themeClasses:r}=ge(e),{backgroundColorClasses:t,backgroundColorStyles:s}=oe(U(e,"color")),{borderClasses:l}=ve(e),{elevationClasses:i}=me(e),{roundedClasses:v}=he(e),m=N(32),{resizeRef:d}=At(_=>{_.length&&(m.value=_[0].target.clientHeight)}),g=f(()=>e.height==="auto"?m.value:parseInt(e.height,10)),{layoutItemStyles:h,layoutIsReady:c}=Ce({id:e.name,order:f(()=>parseInt(e.order,10)),position:f(()=>"bottom"),layoutSize:g,elementSize:f(()=>e.height==="auto"?void 0:g.value),active:f(()=>e.app),absolute:U(e,"absolute")});return G(()=>o(e.tag,{ref:d,class:["v-footer",r.value,t.value,l.value,i.value,v.value,e.class],style:[s.value,e.app?h.value:{height:Z(e.height)},e.style]},a)),e.app?c:{}}}),La={data(){return{banner:!0}}};function Oa(e,n,a,r,t,s){return t.banner?(S(),E(Pa,{key:0,app:"",color:"neutral"},{default:u(()=>[o(Na,{color:"info",elevation:0,"bg-color":"neutral",lines:"one",text:e.$t("demo.DEMO_BANNER"),icon:"mdi-alert-outline",class:"ma-0 py-0",style:{"border-bottom":"0px"}},{actions:u(()=>[o(Y,{icon:"mdi-close-circle-outline",onClick:n[0]||(n[0]=l=>t.banner=!1)})]),_:1},8,["text"])]),_:1})):W("",!0)}const Ra=J(La,[["render",Oa]]);const tn={__name:"Default",setup(e){return(n,a)=>(S(),F(z,null,[o(ka),o($a),o(Ra,{height:"80"})],64))}};export{tn as default};