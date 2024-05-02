import{N as D}from"./NumberPagination-9c1fe51f.js";import{A as S}from"./ActiveSelector-22f5f600.js";import{u as b}from"./datetime-87f6df03.js";import{u as v}from"./user-12dc24db.js";import{r as h,o as s,c,w as n,a as l,b as p,t as a,V as N,d as r,e as V,f as I,F as R,ah as k,g as U}from"./index-9a7d77d1.js";import{_ as w}from"./plugin-vue_export-helper-c27b6911.js";import{V as C}from"./VContainer-5b7520f1.js";import{V as m}from"./VCol-c72717e7.js";import{V as _}from"./VRow-93a26ab0.js";import{V as H,a as g}from"./VTabs-20153399.js";import{V as F}from"./VTextField-c32c9752.js";import{V as M}from"./VTable-fd753445.js";import{a as T,B}from"./forwardRefs-601a00f7.js";import"./VSelect-fde9b95b.js";import"./VMenu-28f47fd6.js";import"./ssrBoot-dfd69665.js";import"./VOverlay-bfd1bd36.js";import"./VField-28f70089.js";import"./VCheckboxBtn-b9ccac59.js";import"./VChip-ec8b5f79.js";const L={setup(){const{formatDateTime:i}=b(),{username:t}=v();return{formatDateTime:i,username:t}},components:{NumberPagination:D,ActiveSelector:S},data(){return{threads:[],pagination:null,pageSize:20,active:null,search:null,section:"threads",init:!1}},computed:{delete(){return this.active=="false"}},mounted(){this.getThreads()},methods:{getThreads(i=1){const t=this;this.search&&""+this.search;let f="";this.active&&(f="deleted"+this.delete);let u=`${this.$api("ADMIN_THREADS").url}${f}`;this.$axios({method:this.$api("ADMIN_THREADS").method,url:u}).then(function(o){t.pagination=o.data.pagination,t.threads=o.data.data,t.init=!0}).catch(function(o){t.$toast.error(t.$error(o,"ADMIN_THREADS"))})},onTabUpdate(){this.active=null,this.search=null,this.section=="replies"&&this.$router.push({name:"admin.replies"})},onEnter(){}}},P={key:0,class:"font-weight-bold",style:{color:"#2384e2"}};function $(i,t,f,u,o,d){const y=h("ActiveSelector"),E=h("router-link"),A=h("NumberPagination");return o.init?(s(),c(C,{key:0},{default:n(()=>[l(_,{style:{"border-bottom":"1px solid #DEE1E6FF"}},{default:n(()=>[l(m,{class:"text-h5 font-weight-bold py-2"},{default:n(()=>[p(a(i.$t("forum.THREADS")),1)]),_:1})]),_:1}),l(_,{class:"py-2"},{default:n(()=>[l(m,null,{default:n(()=>[l(H,{modelValue:o.section,"onUpdate:modelValue":[t[0]||(t[0]=e=>o.section=e),d.onTabUpdate],density:"comfortable",color:"secondary"},{default:n(()=>[l(g,{value:"threads"},{default:n(()=>[p(a(i.$t("forum.THREADS")),1)]),_:1}),l(g,{value:"replies"},{default:n(()=>[p(a(i.$t("forum.REPLIES")),1)]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),l(m,null,{default:n(()=>[l(F,{modelValue:o.search,"onUpdate:modelValue":t[1]||(t[1]=e=>o.search=e),variant:"outlined",density:"compact","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:i.$t("hint.SEARCH_NAME_TITLE_CONTENTS"),onKeydown:N(d.onEnter,["enter"])},null,8,["modelValue","placeholder","onKeydown"])]),_:1}),l(m,{cols:"2",class:"ml-1 pl-0 pr-3 hidden-sm-and-down"},{default:n(()=>[l(y,{modelValue:o.active,"onUpdate:modelValue":t[2]||(t[2]=e=>o.active=e),getItems:d.getThreads},null,8,["modelValue","getItems"])]),_:1})]),_:1}),l(_,null,{default:n(()=>[l(m,null,{default:n(()=>[l(M,{density:"comfortable",hover:!0},{default:n(()=>[r("thead",null,[r("tr",null,[r("th",null,a(i.$t("common.ID")),1),r("th",null,a(i.$t("forum.FORUM_NAME")),1),r("th",null,a(i.$t("forum.THREAD_TITLE")),1),r("th",null,a(i.$t("forum.THREAD_USER")),1),r("th",null,a(i.$t("common.DATE_CREATED")),1),r("th",null,a(i.$t("common.ACTIVE")),1)])]),r("tbody",null,[(s(!0),V(R,null,I(o.threads,e=>(s(),V("tr",{key:e.id,style:k(e.is_deleted?{opacity:.5}:"")},[r("td",null,a(e.id),1),r("td",null,a(e.forum_name),1),r("td",null,[l(E,{to:{name:"thread.read",params:{forum:e.forum_name,thread:e.id,title:e.title.replace(/ /g,"_")}}},{default:n(()=>[p(a(e.title)+" ",1),e.reply_count?(s(),V("span",P," ["+a(e.reply_count)+"] ",1)):U("",!0)]),_:2},1032,["to"])]),r("td",null,a(u.username(e)),1),r("td",null,a(u.formatDateTime(e.created_at)),1),r("td",null,[e.is_deleted?(s(),c(T,{key:1,icon:"mdi-close-circle-outline",color:"error"})):(s(),c(T,{key:0,icon:"mdi-check-circle-outline",color:"success"}))])],4))),128))])]),_:1})]),_:1})]),_:1}),l(A,{modelValue:o.pageSize,"onUpdate:modelValue":t[3]||(t[3]=e=>o.pageSize=e),pagination:o.pagination,getItems:d.getThreads},null,8,["modelValue","pagination","getItems"])]),_:1})):(s(),c(B,{key:1,indeterminate:"",height:4,color:"secondary"}))}const ie=w(L,[["render",$]]);export{ie as default};
