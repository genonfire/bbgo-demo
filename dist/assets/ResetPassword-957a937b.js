import{u as V}from"./rules-d6c48776.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{V as _,a as C,b as P}from"./VCard-f27b3ff1.js";import{V as m}from"./VSheet-7121eb89.js";import{V as u}from"./VRow-9dd703d4.js";import{V as p}from"./VCol-aa336778.js";import{V as f}from"./VTextField-3cacdb26.js";import{V as R}from"./VForm-49541c40.js";import{V as E}from"./forwardRefs-540210a6.js";import{o as i,c as y,w as r,a as t,b as d,t as l,e as w,d as c}from"./index-cd0f3d5b.js";import"./VField-ffd0fbb4.js";const k={setup(){const{password:s,rules:e}=V();return{password:s,rules:e}},data(){return{done:!1,validation:!1,passwordConfirm:null,showPassword:!1,uid:null,token:null}},methods:{reset(){const s=this;this.$axios({method:this.$api("ACCOUNTS_PASSWORD_RESET").method,url:this.$api("ACCOUNTS_PASSWORD_RESET").url,data:{new_password:this.passwordConfirm,uid:this.$route.params.uid,token:this.$route.params.token}}).then(function(e){s.done=!0}).catch(function(e){s.$toast.error(s.$error(e,"ACCOUNTS_PASSWORD_RESET"))})}}},O={key:0},T={key:1},A={class:"text-body-2 font-weight-medium"},v={class:"text-body-2 font-weight-medium"};function b(s,e,x,a,o,S){return i(),y(_,{class:"mx-auto mt-3 pa-6 pt-2","max-width":"500"},{default:r(()=>[t(C,{class:"mb-4 text-h5 font-weight-bold text-center"},{default:r(()=>[d(l(s.$t("menu.RESET_PASSWORD")),1)]),_:1}),o.done?(i(),w("div",O,[t(m,null,{default:r(()=>[d(l(s.$t("hint.PASSWORD_RESET_COMPLETE")),1)]),_:1})])):(i(),w("div",T,[t(m,{class:"mx-2 mb-5"},{default:r(()=>[d(l(s.$t("hint.PASSWORD_RESET_DESCRIPTION")),1)]),_:1}),t(R,{modelValue:o.validation,"onUpdate:modelValue":e[4]||(e[4]=n=>o.validation=n)},{default:r(()=>[t(u,null,{default:r(()=>[t(p,null,{default:r(()=>[c("div",A,l(s.$t("accounts.PASSWORD")),1),t(f,{modelValue:a.password,"onUpdate:modelValue":e[0]||(e[0]=n=>a.password=n),density:"compact",type:o.showPassword?"text":"password","prepend-inner-icon":"mdi-lock-outline","append-inner-icon":o.showPassword?"mdi-eye":"mdi-eye-off",rules:[a.rules.required],"onClick:appendInner":e[1]||(e[1]=n=>o.showPassword=!o.showPassword),autocomplete:""},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1})]),_:1}),t(u,null,{default:r(()=>[t(p,null,{default:r(()=>[c("div",v,l(s.$t("accounts.PASSWORD_CONFIRM")),1),t(f,{modelValue:o.passwordConfirm,"onUpdate:modelValue":e[2]||(e[2]=n=>o.passwordConfirm=n),density:"compact",type:o.showPassword?"text":"password","prepend-inner-icon":"mdi-lock-outline","append-inner-icon":o.showPassword?"mdi-eye":"mdi-eye-off",rules:[a.rules.required,a.rules.samePassword],"onClick:appendInner":e[3]||(e[3]=n=>o.showPassword=!o.showPassword),autocomplete:""},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(P,{class:"mt-5 pa-0"},{default:r(()=>[t(E,{color:"secondary",block:"",disabled:!o.validation,onClick:S.reset},{default:r(()=>[d(l(s.$t("action.SAVE")),1)]),_:1},8,["disabled","onClick"])]),_:1})]))]),_:1})}const j=h(k,[["render",b]]);export{j as default};