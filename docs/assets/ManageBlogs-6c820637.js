import{N}from"./NumberPagination-725c0352.js";import{A as C}from"./ActiveSelector-846d7c7f.js";import{T as U}from"./TagChips-2898481e.js";import{u as v}from"./datetime-87f6df03.js";import{r as b,o as u,c as V,w as i,a as e,b as d,t as n,V as P,d as s,e as h,f as D,F as A,ah as G}from"./index-b7137ed4.js";import{_ as k}from"./plugin-vue_export-helper-c27b6911.js";import{V as w}from"./VContainer-24aec8ae.js";import{V as m}from"./VCol-b579b353.js";import{V as I,a as T,B as R}from"./forwardRefs-b452bb48.js";import{V as p}from"./VRow-3f802a33.js";import{V as M,a as _}from"./VTabs-77954cac.js";import{V as y}from"./VTextField-83b93000.js";import{V as g}from"./VSelect-4a3dc8da.js";import{V as F}from"./VTable-c4f0321d.js";import{V as $,a as H,b as Y}from"./VCard-4331e0a1.js";import{V as z}from"./VForm-0758555c.js";import{V as K}from"./VCombobox-dc836c00.js";import{c as q,d as W,V as f}from"./VMenu-45d141ca.js";import{V as j}from"./VDialog-4c1d75bb.js";import"./VChip-6dd36372.js";import"./VField-3c3f03bd.js";import"./VOverlay-3da7fd39.js";import"./ssrBoot-afe64649.js";import"./VCheckboxBtn-7d7bc7aa.js";const J={setup(){const{formatDateTime:t}=v();return{formatDateTime:t}},components:{NumberPagination:N,ActiveSelector:C,TagChips:U},data(){return{blogOption:null,blogs:[],pagination:null,pageSize:20,active:null,search:null,category:null,categoryItems:null,section:"blogs",dialog:!1,init:!1}},computed:{permissions(){return["all","member","staff"]},draft(){return this.active=="false"}},mounted(){this.getBlogs()},methods:{getBlogOption(){const t=this;this.$axios({method:this.$api("BLOG_OPTION").method,url:this.$api("BLOG_OPTION").url}).then(function(l){t.blogOption=l.data.data,t.dialog=!0}).catch(function(l){t.$toast.error(t.$error(l,"BLOG_OPTION"))})},editBlogOption(){const t=this;this.$axios({method:this.$api("EDIT_BLOG_OPTION").method,url:this.$api("EDIT_BLOG_OPTION").url,data:this.blogOption}).then(function(l){t.$toast.success(t.$t("message.SAVED_SUCCESSFULLY")),t.dialog=!1}).catch(function(l){t.$toast.error(t.$error(l,"EDIT_BLOG_OPTION"))})},getBlogs(t=1){const l=this;this.search&&""+this.search;let O="";this.active&&(O="draft="+this.draft);let c="";this.category&&(c="&category="+this.category);let a=`${this.$api("ADMIN_BLOGS").url}?${O}${c}`;this.$axios({method:this.$api("ADMIN_BLOGS").method,url:a}).then(function(r){l.pagination=r.data.pagination,l.blogs=r.data.data,r.data.filter&&(l.categoryItems=r.data.filter.category),l.init=!0}).catch(function(r){l.$toast.error(l.$error(r,"ADMIN_BLOGS"))})},onUpdateCategory(){this.getBlogs()},onEnter(){},onTabUpdate(){this.active=null,this.search=null,this.section=="comments"&&this.$router.push({name:"admin.comments"})}}},Q={class:"text-body-2 font-weight-medium"},X={class:"text-body-2 font-weight-medium"},Z={class:"text-body-2 font-weight-medium"};function x(t,l,O,c,a,r){const S=b("ActiveSelector"),E=b("router-link"),B=b("TagChips"),L=b("NumberPagination");return a.init?(u(),V(w,{key:0},{default:i(()=>[e(p,{style:{"border-bottom":"1px solid #DEE1E6FF"}},{default:i(()=>[e(m,{class:"text-h5 font-weight-bold py-2"},{default:i(()=>[d(n(t.$t("blog.BLOGS")),1)]),_:1}),e(m,{class:"text-right py-2"},{default:i(()=>[e(I,{variant:"outlined","prepend-icon":"mdi-pencil-outline",color:"secondary",onClick:r.getBlogOption},{default:i(()=>[d(n(t.$t("blog.BLOG_OPTION")),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),e(p,{class:"py-2"},{default:i(()=>[e(m,null,{default:i(()=>[e(M,{modelValue:a.section,"onUpdate:modelValue":[l[0]||(l[0]=o=>a.section=o),r.onTabUpdate],density:"comfortable",color:"secondary"},{default:i(()=>[e(_,{value:"blogs"},{default:i(()=>[d(n(t.$t("blog.BLOGS")),1)]),_:1}),e(_,{value:"comments"},{default:i(()=>[d(n(t.$t("blog.COMMENTS")),1)]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,null,{default:i(()=>[e(y,{modelValue:a.search,"onUpdate:modelValue":l[1]||(l[1]=o=>a.search=o),variant:"outlined",density:"compact","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:t.$t("hint.SEARCH_TITLE_CONTENTS_TAGS"),onKeydown:P(r.onEnter,["enter"])},null,8,["modelValue","placeholder","onKeydown"])]),_:1}),e(m,{cols:"2",class:"ml-1 pl-0 pr-3 hidden-sm-and-down"},{default:i(()=>[e(g,{modelValue:a.category,"onUpdate:modelValue":[l[2]||(l[2]=o=>a.category=o),r.onUpdateCategory],clearable:"",variant:"outlined",density:"compact",label:t.$t("blog.CATEGORY"),items:a.categoryItems},null,8,["modelValue","label","items","onUpdate:modelValue"])]),_:1}),e(m,{cols:"2",class:"ml-1 pl-0 pr-3 hidden-sm-and-down"},{default:i(()=>[e(S,{modelValue:a.active,"onUpdate:modelValue":l[3]||(l[3]=o=>a.active=o),getItems:r.getBlogs,label:t.$t("blog.PUBLISHED")},null,8,["modelValue","getItems","label"])]),_:1})]),_:1}),e(p,null,{default:i(()=>[e(m,null,{default:i(()=>[e(F,{density:"comfortable"},{default:i(()=>[s("thead",null,[s("tr",null,[s("th",null,n(t.$t("common.ID")),1),s("th",null,n(t.$t("blog.TITLE")),1),s("th",null,n(t.$t("blog.CATEGORY")),1),s("th",null,n(t.$t("blog.TAGS")),1),s("th",null,n(t.$t("blog.LIKES")),1),s("th",null,n(t.$t("blog.DATE_PUBLISHED")),1),s("th",null,n(t.$t("blog.PUBLISHED")),1)])]),s("tbody",null,[(u(!0),h(A,null,D(a.blogs,o=>(u(),h("tr",{key:o.id,style:G(o.is_published?"":{opacity:.5})},[s("td",null,n(o.id),1),s("td",null,[e(E,{to:{name:"blog.read",params:{blog:o.id,title:o.title.replace(/ /g,"_")}}},{default:i(()=>[d(n(o.title),1)]),_:2},1032,["to"])]),s("td",null,n(o.category),1),s("td",null,[e(B,{tags:o.tags},null,8,["tags"])]),s("td",null,n(o.like),1),s("td",null,n(c.formatDateTime(o.created_at)),1),s("td",null,[o.is_published?(u(),V(T,{key:0,icon:"mdi-check-circle-outline",color:"success"})):(u(),V(T,{key:1,icon:"mdi-close-circle-outline",color:"error"}))])],4))),128))])]),_:1})]),_:1})]),_:1}),e(L,{modelValue:a.pageSize,"onUpdate:modelValue":l[4]||(l[4]=o=>a.pageSize=o),pagination:a.pagination,getItems:r.getBlogs},null,8,["modelValue","pagination","getItems"]),e(j,{modelValue:a.dialog,"onUpdate:modelValue":l[13]||(l[13]=o=>a.dialog=o),"max-width":"500"},{default:i(()=>[e($,{width:"100%",class:"mx-auto mt-3 pa-6 pt-2"},{default:i(()=>[e(H,{class:"mb-4 text-h6 font-weight-bold text-center"},{default:i(()=>[d(n(t.$t("blog.BLOG_OPTION")),1)]),_:1}),e(z,null,{default:i(()=>[e(p,null,{default:i(()=>[e(m,null,{default:i(()=>[s("div",Q,n(t.$t("blog.TITLE")),1),e(y,{modelValue:a.blogOption.title,"onUpdate:modelValue":l[5]||(l[5]=o=>a.blogOption.title=o),density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:i(()=>[e(m,null,{default:i(()=>[s("div",X,n(t.$t("blog.DESCRIPTION")),1),e(y,{modelValue:a.blogOption.description,"onUpdate:modelValue":l[6]||(l[6]=o=>a.blogOption.description=o),density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:i(()=>[e(m,null,{default:i(()=>[s("div",Z,n(t.$t("blog.CATEGORY")),1),e(K,{modelValue:a.blogOption.category,"onUpdate:modelValue":l[7]||(l[7]=o=>a.blogOption.category=o),density:"comfortable",multiple:"",chips:"","closable-chips":"","hide-details":"",placeholder:t.$t("hint.HIT_ENTER_FOR_MULTIPLE")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(q,{density:"compact",class:"py-0"},{default:i(()=>[e(W,null,{default:i(()=>[d(n(t.$t("blog.OPTIONS")),1)]),_:1}),e(f,{class:"py-0"},{default:i(()=>[e(g,{modelValue:a.blogOption.option.permission_list,"onUpdate:modelValue":l[8]||(l[8]=o=>a.blogOption.option.permission_list=o),label:t.$t("blog.PERMISSION_LIST"),items:r.permissions,density:"comfortable"},null,8,["modelValue","label","items"])]),_:1}),e(f,{class:"py-0"},{default:i(()=>[e(g,{modelValue:a.blogOption.option.permission_read,"onUpdate:modelValue":l[9]||(l[9]=o=>a.blogOption.option.permission_read=o),label:t.$t("blog.PERMISSION_READ"),items:r.permissions,density:"comfortable"},null,8,["modelValue","label","items"])]),_:1}),e(f,{class:"py-0"},{default:i(()=>[e(g,{modelValue:a.blogOption.option.permission_write,"onUpdate:modelValue":l[10]||(l[10]=o=>a.blogOption.option.permission_write=o),label:t.$t("blog.PERMISSION_WRITE"),items:r.permissions,density:"comfortable"},null,8,["modelValue","label","items"])]),_:1}),e(f,{class:"py-0"},{default:i(()=>[e(g,{modelValue:a.blogOption.option.permission_reply,"onUpdate:modelValue":l[11]||(l[11]=o=>a.blogOption.option.permission_reply=o),label:t.$t("blog.PERMISSION_REPLY"),items:r.permissions,density:"comfortable"},null,8,["modelValue","label","items"])]),_:1}),e(f,{class:"py-0"},{default:i(()=>[e(g,{modelValue:a.blogOption.option.permission_vote,"onUpdate:modelValue":l[12]||(l[12]=o=>a.blogOption.option.permission_vote=o),label:t.$t("blog.PERMISSION_VOTE"),items:r.permissions,density:"comfortable"},null,8,["modelValue","label","items"])]),_:1})]),_:1}),e(Y,{class:"my-0 pa-0"},{default:i(()=>[e(I,{color:"secondary",block:"",onClick:r.editBlogOption},{default:i(()=>[d(n(t.$t("action.SAVE")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):(u(),V(R,{key:1,indeterminate:"",height:4,color:"secondary"}))}const Se=k(J,[["render",x]]);export{Se as default};
