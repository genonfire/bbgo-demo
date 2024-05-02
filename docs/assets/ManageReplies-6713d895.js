import{N as v}from"./NumberPagination-9c1fe51f.js";import{A}from"./ActiveSelector-22f5f600.js";import{u as I}from"./datetime-87f6df03.js";import{u as N}from"./user-12dc24db.js";import{r as h,o as s,c as f,w as n,a as t,b as m,t as r,V as b,d as o,e as E,f as D,F as k,ah as U}from"./index-9a7d77d1.js";import{_ as y}from"./plugin-vue_export-helper-c27b6911.js";import{V as C}from"./VContainer-5b7520f1.js";import{V as u}from"./VCol-c72717e7.js";import{V}from"./VRow-93a26ab0.js";import{V as P,a as _}from"./VTabs-20153399.js";import{V as w}from"./VTextField-c32c9752.js";import{V as L}from"./VTable-fd753445.js";import{a as T,B as F}from"./forwardRefs-601a00f7.js";import"./VSelect-fde9b95b.js";import"./VMenu-28f47fd6.js";import"./ssrBoot-dfd69665.js";import"./VOverlay-bfd1bd36.js";import"./VField-28f70089.js";import"./VCheckboxBtn-b9ccac59.js";import"./VChip-ec8b5f79.js";const M={setup(){const{formatDateTime:i}=I(),{username:a}=N();return{formatDateTime:i,username:a}},components:{NumberPagination:v,ActiveSelector:A},data(){return{replies:[],pagination:null,pageSize:20,active:null,search:null,section:"replies",init:!1}},computed:{delete(){return this.active=="false"}},mounted(){this.getReplies()},methods:{getReplies(i=1){const a=this;this.search&&""+this.search;let p="";this.active&&(p="delete="+this.delete);let d=`${this.$api("ADMIN_REPLIES").url}?${p}`;this.$axios({method:this.$api("ADMIN_REPLIES").method,url:d}).then(function(l){a.pagination=l.data.pagination,a.replies=l.data.data,a.init=!0}).catch(function(l){a.$toast.error(a.$error(l,"ADMIN_REPLIES"))})},onTabUpdate(){this.active=null,this.search=null,this.section=="threads"&&this.$router.push({name:"admin.threads"})},onEnter(){}}};function $(i,a,p,d,l,c){const R=h("ActiveSelector"),g=h("router-link"),S=h("NumberPagination");return l.init?(s(),f(C,{key:0},{default:n(()=>[t(V,{style:{"border-bottom":"1px solid #DEE1E6FF"}},{default:n(()=>[t(u,{class:"text-h5 font-weight-bold py-2"},{default:n(()=>[m(r(i.$t("forum.REPLIES")),1)]),_:1})]),_:1}),t(V,{class:"py-2"},{default:n(()=>[t(u,null,{default:n(()=>[t(P,{modelValue:l.section,"onUpdate:modelValue":[a[0]||(a[0]=e=>l.section=e),c.onTabUpdate],density:"comfortable",color:"secondary"},{default:n(()=>[t(_,{value:"threads"},{default:n(()=>[m(r(i.$t("forum.THREADS")),1)]),_:1}),t(_,{value:"replies"},{default:n(()=>[m(r(i.$t("forum.REPLIES")),1)]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),t(u,null,{default:n(()=>[t(w,{modelValue:l.search,"onUpdate:modelValue":a[1]||(a[1]=e=>l.search=e),variant:"outlined",density:"compact","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:i.$t("hint.SEARCH_NAME_CONTENTS"),onKeydown:b(c.onEnter,["enter"])},null,8,["modelValue","placeholder","onKeydown"])]),_:1}),t(u,{cols:"2",class:"ml-1 pl-0 pr-3 hidden-sm-and-down"},{default:n(()=>[t(R,{modelValue:l.active,"onUpdate:modelValue":a[2]||(a[2]=e=>l.active=e),getItems:c.getReplies},null,8,["modelValue","getItems"])]),_:1})]),_:1}),t(V,null,{default:n(()=>[t(u,null,{default:n(()=>[t(L,{density:"comfortable",hover:!0},{default:n(()=>[o("thead",null,[o("tr",null,[o("th",null,r(i.$t("common.ID")),1),o("th",null,r(i.$t("forum.FORUM_NAME")),1),o("th",null,r(i.$t("forum.CONTENT")),1),o("th",null,r(i.$t("forum.THREAD_USER")),1),o("th",null,r(i.$t("forum.THREAD_TITLE")),1),o("th",null,r(i.$t("common.DATE_CREATED")),1),o("th",null,r(i.$t("common.ACTIVE")),1)])]),o("tbody",null,[(s(!0),E(k,null,D(l.replies,e=>(s(),E("tr",{key:e.id,style:U(e.is_deleted?{opacity:.5}:"")},[o("td",null,r(e.id),1),o("td",null,r(e.forum_name),1),o("td",null,[t(g,{to:{name:"thread.reply",params:{forum:e.forum_name,thread:e.thread.id,reply:e.id,title:e.thread.title.replace(/ /g,"_")}}},{default:n(()=>[m(r(e.content),1)]),_:2},1032,["to"])]),o("td",null,r(d.username(e)),1),o("td",null,[t(g,{to:{name:"thread.read",params:{forum:e.forum_name,thread:e.thread.id,title:e.thread.title.replace(/ /g,"_")}}},{default:n(()=>[m(r(e.thread.title),1)]),_:2},1032,["to"])]),o("td",null,r(d.formatDateTime(e.created_at)),1),o("td",null,[e.is_deleted?(s(),f(T,{key:1,icon:"mdi-close-circle-outline",color:"error"})):(s(),f(T,{key:0,icon:"mdi-check-circle-outline",color:"success"}))])],4))),128))])]),_:1})]),_:1})]),_:1}),t(S,{modelValue:l.pageSize,"onUpdate:modelValue":a[3]||(a[3]=e=>l.pageSize=e),pagination:l.pagination,getItems:c.getReplies},null,8,["modelValue","pagination","getItems"])]),_:1})):(s(),f(F,{key:1,indeterminate:"",height:4,color:"secondary"}))}const re=y(M,[["render",$]]);export{re as default};