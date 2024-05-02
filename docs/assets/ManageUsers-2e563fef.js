import{N as I}from"./NumberPagination-725c0352.js";import{A as N}from"./ActiveSelector-846d7c7f.js";import{u as b}from"./rules-b0a6d5c6.js";import{u as F}from"./datetime-87f6df03.js";import{u as L}from"./download-9d1f17ae.js";import{r as S,o as c,c as h,w as o,a as e,e as E,t as i,b as f,V as w,d as n,f as R,F as M,M as P,g as D}from"./index-b7137ed4.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{V as x}from"./VContainer-24aec8ae.js";import{V as m}from"./VCol-b579b353.js";import{V,f as B,a as g,B as z}from"./forwardRefs-b452bb48.js";import{V as p}from"./VRow-3f802a33.js";import{V as $,a as U}from"./VTabs-77954cac.js";import{V as _}from"./VTextField-83b93000.js";import{V as q}from"./VTable-c4f0321d.js";import{V as A}from"./VDialog-4c1d75bb.js";import{a as K,V as y,b as j}from"./VCard-4331e0a1.js";import{V as G}from"./VForm-0758555c.js";import{V as H}from"./VFileInput-7b278f7f.js";import{V as v}from"./VSwitch-f1c85895.js";import{V as T}from"./VSpacer-172a79c9.js";import"./VSelect-4a3dc8da.js";import"./VMenu-45d141ca.js";import"./ssrBoot-afe64649.js";import"./VOverlay-3da7fd39.js";import"./VField-3c3f03bd.js";import"./VCheckboxBtn-7d7bc7aa.js";import"./VChip-6dd36372.js";const J={setup(){const{rules:t}=b(),{formatDateTime:l,formatDate:r}=F();return{formatDateTime:l,formatDate:r,rules:t}},components:{NumberPagination:I,ActiveSelector:N},data(){return{dialog:!1,deleteDialog:!1,users:[],user:null,file:null,pagination:null,pageSize:20,active:null,search:null,staff:!1,validation:!1,init:!1}},mounted(){this.getUsers()},methods:{getUsers(t=1){const l=this;let r="ADMIN_USERS";this.staff&&(r="ADMIN_STAFFS"),this.search&&""+this.search;let u="";this.active&&(u="active="+this.active);let s=`${this.$api(r).url}?${u}`;this.$axios({method:this.$api(r).method,url:s}).then(function(d){l.pagination=d.data.pagination,l.users=d.data.data,l.init=!0}).catch(function(d){l.$toast.error(l.$error(d,r))})},onTabUpdate(){this.active=null,this.search=null,this.getUsers()},onEnter(){this.getUsers()},exportExcel(){const t=this.$api("ADMIN_EXPORT_USERS");L(t.method,t.url,"users")},getUser(t){const l=this;let r="ADMIN_USER";this.staff&&(r="ADMIN_STAFF"),this.$axios({method:this.$api(r).method,url:this.$api(r).url.replace("{pk}",t)}).then(function(u){l.user=u.data.data}).catch(function(u){l.$toast.error(l.$error(u,r))})},editUser(t){this.getUser(t.id),this.dialog=!0},deleteUser(){var t=this;let l="ADMIN_DELETE_USER";this.staff&&(l="ADMIN_DELETE_STAFF"),this.$axios({method:this.$api(l).method,url:this.$api(l).url.replace("{pk}",this.user.id)}).then(function(r){t.deleteDialog=!1,t.dialog=!1,t.user=null,t.getUsers(),t.$toast.success(t.$t("message.DELETED_SUCCESSFULLY"))}).catch(function(r){t.$toast.error(t.$error(r,l))})},updatePhoto(t){var l=this;let r="ADMIN_EDIT_USER";this.staff&&(r="ADMIN_EDIT_STAFF"),this.$axios({method:this.$api(r).method,url:this.$api(r).url.replace("{pk}",this.user.id),data:t}).then(function(u){l.user=u.data.data}).catch(function(u){l.$toast.error(l.$error(u,r))})},deletePhoto(){this.updatePhoto({photo:null}),this.file=null},uploadPhoto(){this.$refs.fileInput.click()},handleFileChange(){if(this.file){let t=new FormData;t.append("photo",this.file),this.updatePhoto(t)}},save(){var t=this;let l="ADMIN_EDIT_USER",r={first_name:this.user.first_name,last_name:this.user.last_name,call_name:this.user.call_name,tel:this.user.tel,address:this.user.address,is_active:this.user.is_active};this.staff?(l="ADMIN_EDIT_STAFF",r.is_staff=this.user.is_staff):r.is_approved=this.user.is_approved,this.$axios({method:this.$api(l).method,url:this.$api(l).url.replace("{pk}",this.user.id),data:r}).then(function(u){t.user=u.data.data,t.$toast.success(t.$t("message.SAVED_SUCCESSFULLY"))}).catch(function(u){t.$toast.error(t.$error(u,l))})}}},X={key:0},Y={key:1},Q=["onClick"],W={class:"py-6 ml-10"},Z={class:"text-body-2 font-weight-medium"},ee={class:"text-body-2 font-weight-medium"},te={class:"text-body-2 font-weight-medium"},le={class:"text-body-2 font-weight-medium"},oe={class:"text-body-2 font-weight-medium"},se={class:"text-body-2 font-weight-medium"},ae={class:"text-body-2 font-weight-medium"},ie={class:"mr-8"},ne={class:"mr-8"},re={class:"mr-8"};function ue(t,l,r,u,s,d){const C=S("ActiveSelector"),k=S("NumberPagination");return s.init?(c(),h(x,{key:0},{default:o(()=>[e(p,{style:{"border-bottom":"1px solid #DEE1E6FF"}},{default:o(()=>[e(m,{class:"text-h5 font-weight-bold py-2"},{default:o(()=>[s.staff?(c(),E("span",X,i(t.$t("accounts.STAFFS")),1)):(c(),E("span",Y,i(t.$t("accounts.USERS")),1))]),_:1}),e(m,{class:"text-right py-2"},{default:o(()=>[e(V,{variant:"outlined","prepend-icon":"mdi-microsoft-excel",color:"secondary",disabled:"",onClick:d.exportExcel},{default:o(()=>[f(i(t.$t("action.EXPORT")),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),e(p,{class:"py-2"},{default:o(()=>[e(m,null,{default:o(()=>[e($,{modelValue:s.staff,"onUpdate:modelValue":[l[0]||(l[0]=a=>s.staff=a),d.onTabUpdate],density:"comfortable",color:"secondary"},{default:o(()=>[e(U,{value:!1},{default:o(()=>[f(i(t.$t("accounts.USERS")),1)]),_:1}),e(U,{value:!0},{default:o(()=>[f(i(t.$t("accounts.STAFFS")),1)]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{class:"px-0"},{default:o(()=>[e(_,{modelValue:s.search,"onUpdate:modelValue":l[1]||(l[1]=a=>s.search=a),variant:"outlined",density:"compact","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:t.$t("hint.SEARCH_USERNAME_NAME"),onKeydown:w(d.onEnter,["enter"])},null,8,["modelValue","placeholder","onKeydown"])]),_:1}),e(m,{cols:"2",class:"ml-1 pl-0 pr-3 hidden-sm-and-down"},{default:o(()=>[e(C,{modelValue:s.active,"onUpdate:modelValue":l[2]||(l[2]=a=>s.active=a),getItems:d.getUsers},null,8,["modelValue","getItems"])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(m,null,{default:o(()=>[e(q,{density:"comfortable",hover:!0},{default:o(()=>[n("thead",null,[n("tr",null,[n("th",null,i(t.$t("common.ID")),1),n("th",null,i(t.$t("accounts.USERNAME")),1),n("th",null,i(t.$t("accounts.CALL_NAME")),1),n("th",null,i(t.$t("accounts.DATE_JOINED")),1),n("th",null,i(t.$t("accounts.LAST_LOGIN")),1),n("th",null,i(t.$t("common.ACTIVE")),1)])]),n("tbody",null,[(c(!0),E(M,null,R(s.users,a=>(c(),E("tr",{key:a.id,onClick:de=>d.editUser(a),style:{cursor:"pointer"}},[n("td",null,i(a.id),1),n("td",null,i(a.username),1),n("td",null,i(a.call_name),1),n("td",null,i(u.formatDate(a.date_joined)),1),n("td",null,i(u.formatDateTime(a.last_login)),1),n("td",null,[a.is_active?(c(),h(g,{key:0,icon:"mdi-check-circle-outline",color:"success"})):(c(),h(g,{key:1,icon:"mdi-close-circle-outline",color:"error"}))])],8,Q))),128))])]),_:1})]),_:1})]),_:1}),e(k,{modelValue:s.pageSize,"onUpdate:modelValue":l[3]||(l[3]=a=>s.pageSize=a),pagination:s.pagination,getItems:d.getUsers},null,8,["modelValue","pagination","getItems"]),s.user?(c(),h(A,{key:0,modelValue:s.dialog,"onUpdate:modelValue":l[16]||(l[16]=a=>s.dialog=a),"max-width":"500"},{default:o(()=>[e(y,{width:"100%",class:"mx-auto mt-3 pa-6 pt-2"},{default:o(()=>[e(K,{class:"mb-4 text-h6 font-weight-bold text-center"},{default:o(()=>[f(i(s.user.username),1)]),_:1}),e(G,{modelValue:s.validation,"onUpdate:modelValue":l[15]||(l[15]=a=>s.validation=a)},{default:o(()=>[e(p,null,{default:o(()=>[s.user.photo?(c(),h(y,{key:0,flat:"",class:"ml-3"},{default:o(()=>[e(B,{src:s.user.photo,width:"80",height:"80"},null,8,["src"])]),_:1})):(c(),h(y,{key:1,flat:"",width:"80",height:"80",class:"ml-3"},{default:o(()=>[e(g,{size:"x-large",class:"pa-10",icon:"mdi-account-outline"})]),_:1})),n("div",W,[e(V,{variant:"outlined",color:"secondary",onClick:d.uploadPhoto,disabled:""},{default:o(()=>[f(i(t.$t("accounts.UPLOAD_PHOTO")),1)]),_:1},8,["onClick"]),e(H,{modelValue:s.file,"onUpdate:modelValue":l[4]||(l[4]=a=>s.file=a),accept:"image/*",ref:"fileInput",onChange:d.handleFileChange,style:{display:"none"}},null,8,["modelValue","onChange"]),e(V,{variant:"text",color:"pale",class:"ml-4",onClick:d.deletePhoto,disabled:""},{default:o(()=>[f(i(t.$t("action.REMOVE")),1)]),_:1},8,["onClick"])])]),_:1}),e(p,{class:"mt-4"},{default:o(()=>[e(m,null,{default:o(()=>[n("div",Z,i(t.$t("accounts.FIRST_NAME")),1),e(_,{modelValue:s.user.first_name,"onUpdate:modelValue":l[5]||(l[5]=a=>s.user.first_name=a),density:"compact",rules:[u.rules.required]},null,8,["modelValue","rules"])]),_:1}),e(m,null,{default:o(()=>[n("div",ee,i(t.$t("accounts.LAST_NAME")),1),e(_,{modelValue:s.user.last_name,"onUpdate:modelValue":l[6]||(l[6]=a=>s.user.last_name=a),density:"compact",rules:[u.rules.required]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:o(()=>[e(m,null,{default:o(()=>[n("div",te,i(t.$t("accounts.CALL_NAME")),1),e(_,{modelValue:s.user.call_name,"onUpdate:modelValue":l[7]||(l[7]=a=>s.user.call_name=a),density:"compact",rules:[u.rules.required]},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:o(()=>[e(m,null,{default:o(()=>[n("div",le,i(t.$t("accounts.TEL")),1),e(_,{modelValue:s.user.tel,"onUpdate:modelValue":l[8]||(l[8]=a=>s.user.tel=a),density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:o(()=>[e(m,null,{default:o(()=>[n("div",oe,i(t.$t("accounts.ADDRESS")),1),e(_,{modelValue:s.user.address,"onUpdate:modelValue":l[9]||(l[9]=a=>s.user.address=a),density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:o(()=>[e(m,null,{default:o(()=>[n("div",se,[f(i(t.$t("accounts.DATE_JOINED"))+" ",1),e(_,{placeholder:u.formatDate(s.user.date_joined),density:"compact",readonly:""},null,8,["placeholder"])])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:o(()=>[e(m,null,{default:o(()=>[n("div",ae,[f(i(t.$t("accounts.LAST_LOGIN"))+" ",1),e(_,{placeholder:u.formatDateTime(s.user.last_login),density:"compact",readonly:""},null,8,["placeholder"])])]),_:1})]),_:1}),e(p,{class:"my-0"},{default:o(()=>[e(m,null,{default:o(()=>[e(v,{modelValue:s.user.is_active,"onUpdate:modelValue":l[10]||(l[10]=a=>s.user.is_active=a),color:"secondary"},{prepend:o(()=>[n("span",ie,i(t.$t("common.ACTIVE")),1)]),_:1},8,["modelValue"])]),_:1}),s.staff?(c(),h(m,{key:0},{default:o(()=>[e(v,{modelValue:s.user.is_staff,"onUpdate:modelValue":l[11]||(l[11]=a=>s.user.is_staff=a),color:"secondary"},{prepend:o(()=>[n("span",ne,i(t.$t("accounts.STAFF")),1)]),_:1},8,["modelValue"])]),_:1})):(c(),h(m,{key:1},{default:o(()=>[e(v,{modelValue:s.user.is_approved,"onUpdate:modelValue":l[12]||(l[12]=a=>s.user.is_approved=a),color:"secondary"},{prepend:o(()=>[n("span",re,i(t.$t("accounts.APPROVED")),1)]),_:1},8,["modelValue"])]),_:1}))]),_:1}),e(j,{class:"my-0 pa-0"},{default:o(()=>[e(V,{color:"secondary",block:"",disabled:!s.validation,onClick:d.save},{default:o(()=>[f(i(t.$t("action.SAVE")),1)]),_:1},8,["disabled","onClick"])]),_:1}),e(p,{class:"mt-2"},{default:o(()=>[e(T),e(A,{modelValue:s.deleteDialog,"onUpdate:modelValue":l[14]||(l[14]=a=>s.deleteDialog=a),"max-width":"400",persistent:""},{activator:o(({props:a})=>[s.user.is_active?(c(),h(V,P({key:0},a,{variant:"text",color:"pale",size:"small"}),{default:o(()=>[f(i(t.$t("action.DELETE_USER")),1)]),_:2},1040)):D("",!0)]),default:o(()=>[e(y,{title:t.$t("accounts.DELETE_USER"),text:t.$t("hint.DELETE_USER_DESCRIPTION")},{prepend:o(()=>[e(g,{icon:"mdi-alert",color:"secondary"})]),actions:o(()=>[e(T),e(V,{variant:"outlined",color:"pale",onClick:l[13]||(l[13]=a=>s.deleteDialog=!1)},{default:o(()=>[f(i(t.$t("action.CANCEL")),1)]),_:1}),e(V,{color:"secondary",onClick:d.deleteUser},{default:o(()=>[f(i(t.$t("action.DELETE_USER")),1)]),_:1},8,["onClick"])]),_:1},8,["title","text"])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])):D("",!0)]),_:1})):(c(),h(z,{key:1,indeterminate:"",height:4,color:"secondary"}))}const Oe=O(J,[["render",ue]]);export{Oe as default};
