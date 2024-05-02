import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{V as u,a as h,b as f}from"./VCard-4331e0a1.js";import{V}from"./VSwitch-f1c85895.js";import{a as _,V as p}from"./forwardRefs-b452bb48.js";import{V as m}from"./VRow-3f802a33.js";import{V as E}from"./VSelect-4a3dc8da.js";import{V as $}from"./VSpacer-172a79c9.js";import{u as A,o as L,c as S,w as s,a as t,b as n,t as r,d as T}from"./index-b7137ed4.js";import"./VCheckboxBtn-7d7bc7aa.js";import"./VTextField-83b93000.js";import"./VField-3c3f03bd.js";import"./VMenu-45d141ca.js";import"./ssrBoot-afe64649.js";import"./VOverlay-3da7fd39.js";import"./VChip-6dd36372.js";const k={setup(){return{theme:A()}},data(){return{dark:this.$store.isDarkMode,locale:this.$store.getLocale}},methods:{localeProps(e){return{title:e.text,value:e.value}},changeLocale(e){if(this.$i18n.locale!=e){const o="api";let l="https://<your api server>/";this.$store.const("DEFAULT_LANGUAGE")!=e&&(l+=e+"/"),this.$axios.defaults.baseURL=l+o,this.$i18n.locale=e,this.$store.setLocale(e)}},setTheme(e){this.theme.global.name.value=e,this.$store.setTheme(e)},save(){const e=this.dark?"dark":"light";this.setTheme(e),this.changeLocale(this.locale),this.$toast.success(this.$t("message.REAL_SAVED_SUCCESSFULLY"))}}},g={class:"mr-8"};function C(e,o,l,U,a,c){return L(),S(u,{fluid:"",class:"mx-auto mt-3 pa-6 pt-2","max-width":"500"},{default:s(()=>[t(h,{class:"mb-4 text-h5 font-weight-bold text-center"},{default:s(()=>[n(r(e.$t("menu.SETTINGS")),1)]),_:1}),t(m,null,{default:s(()=>[t(V,{modelValue:a.dark,"onUpdate:modelValue":o[0]||(o[0]=i=>a.dark=i),color:"secondary"},{prepend:s(()=>[t(_,{icon:"mdi-weather-night",class:"ml-6 mr-3"}),T("span",g,r(e.$t("common.THEME_DARK")),1)]),_:1},8,["modelValue"])]),_:1}),t(m,{class:"mt-0 px-4"},{default:s(()=>[t(E,{modelValue:a.locale,"onUpdate:modelValue":o[1]||(o[1]=i=>a.locale=i),label:e.$t("common.LANGUAGE"),"item-props":c.localeProps,items:e.$store.const("LANGUAGES")},null,8,["modelValue","label","item-props","items"])]),_:1}),t(f,{class:"mt-5 pa-0"},{default:s(()=>[t(p,{color:"secondary",block:"",onClick:c.save},{default:s(()=>[n(r(e.$t("action.SAVE")),1)]),_:1},8,["onClick"])]),_:1}),t(m,{class:"mt-6"},{default:s(()=>[t($),t(p,{variant:"text",color:"pale",size:"small",to:{name:"accounts.delete"}},{default:s(()=>[n(r(e.$t("menu.DELETE_ACCOUNT")),1)]),_:1})]),_:1})]),_:1})}const H=d(k,[["render",C]]);export{H as default};
