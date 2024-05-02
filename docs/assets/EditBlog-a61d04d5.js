import{T as V}from"./Tiptap-997ab182.js";import{_}from"./plugin-vue_export-helper-c27b6911.js";import{V as y}from"./VContainer-5b7520f1.js";import{V as r}from"./VCol-c72717e7.js";import{V as g}from"./VTextField-c32c9752.js";import{V as n}from"./VRow-93a26ab0.js";import{V as E,a as I}from"./VCard-70e41233.js";import{V as C}from"./VFileInput-73a7f6ef.js";import{V as L}from"./VSelect-fde9b95b.js";import{V as T}from"./VSwitch-713d43d5.js";import{V as U}from"./forwardRefs-601a00f7.js";import{R as v,r as A,o as m,c as f,w as a,g as d,a as o,b as c,t as h,e as B}from"./index-9a7d77d1.js";import"./VTooltip-4289a088.js";import"./VOverlay-bfd1bd36.js";import"./VField-28f70089.js";import"./VTabs-20153399.js";import"./ssrBoot-dfd69665.js";import"./VChip-ec8b5f79.js";import"./VSpacer-4d8b3bfe.js";import"./VDialog-a1cc2a02.js";import"./VMenu-28f47fd6.js";import"./VCheckboxBtn-b9ccac59.js";const D={setup(){const{smAndUp:t}=v();return{smAndUp:t}},components:{Tiptap:V},data(){return{blog:null,options:{content:""},file:null,featuredImage:null,saved:!1,init:!1}},mounted(){this.getBlog(this.$route.params.blog)},beforeRouteLeave(t,e,i){this.saved||confirm(this.$t("forum.QUIT_EDITING"))?i():i(!1)},methods:{getBlog(t){const e=this;this.$axios({method:this.$api("READ_BLOG").method,url:this.$api("READ_BLOG").url.replace("{pk}",t)}).then(function(i){e.blog=i.data.data,e.options.content=e.blog.content,e.blog.image&&(e.featuredImage=e.blog.image,e.file={name:e.blog.image.filename,size:e.blog.image.size,type:e.blog.image.content_type}),e.init=!0}).catch(function(i){e.$toast.error(e.$error(i,"READ_BLOG"))})},save(){const t=this;let e={title:this.blog.title,content:this.options.content,category:this.blog.category,tags:this.blog.tags,is_published:this.blog.is_published,image:null};this.featuredImage&&(e.image={id:this.featuredImage.id}),this.$axios({method:this.$api("EDIT_BLOG").method,url:this.$api("EDIT_BLOG").url.replace("{pk}",this.blog.id),data:e}).then(function(i){t.saved=!0,t.$toast.success(t.$t("message.SAVED_SUCCESSFULLY")),t.$router.push({name:"blogs"})}).catch(function(i){t.$toast.error(t.$error(i,"EDIT_BLOG"))})},imageUpload(t){var e=this;this.$axios({method:this.$api("FILE_UPLOAD").method,url:this.$api("FILE_UPLOAD").url,data:t}).then(function(i){e.featuredImage=i.data.data}).catch(function(i){e.$toast.error(e.$error(i,"FILE_UPLOAD"))})},handleFileChange(){if(this.file){let t=new FormData;t.append("file",this.file),this.imageUpload(t)}}}},O=["src","width","height"];function k(t,e,i,u,l,p){const b=A("Tiptap");return l.init?(m(),f(y,{key:0},{default:a(()=>[o(n,{class:"mt-0"},{default:a(()=>[o(r,null,{default:a(()=>[o(g,{modelValue:l.blog.title,"onUpdate:modelValue":e[0]||(e[0]=s=>l.blog.title=s),variant:"outlined",density:"compact",placeholder:t.$t("blog.TITLE")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),o(n,{class:"mt-0"},{default:a(()=>[o(r,null,{default:a(()=>[o(b,{options:l.options},null,8,["options"])]),_:1})]),_:1}),o(n,null,{default:a(()=>[o(r,null,{default:a(()=>[o(E,{variant:"outlined",density:"compact",class:"rounded-lg border-dashed"},{default:a(()=>[o(I,{class:"text-body-1"},{default:a(()=>[c(h(t.$t("blog.FEATURED_IMAGE")),1)]),_:1}),o(C,{modelValue:l.file,"onUpdate:modelValue":e[1]||(e[1]=s=>l.file=s),density:"compact",accept:"image/*","prepend-icon":"","prepend-inner-icon":"mdi-camera",label:l.file?null:t.$t("tiptap.SELECT_IMAGE"),onChange:p.handleFileChange,"onClick:clear":e[2]||(e[2]=s=>l.featuredImage=null),"show-size":"",class:"mx-4"},null,8,["modelValue","label","onChange"]),l.featuredImage?(m(),B("img",{key:0,src:l.featuredImage.file,class:"ml-4 mr-10",width:u.smAndUp?240:120,height:u.smAndUp?240:120},null,8,O)):d("",!0)]),_:1})]),_:1})]),_:1}),o(n,{class:"mt-6"},{default:a(()=>[o(r,null,{default:a(()=>[o(g,{modelValue:l.blog.tags,"onUpdate:modelValue":e[3]||(e[3]=s=>l.blog.tags=s),variant:"outlined",density:"comfortable",placeholder:t.$t("hint.TAGS_HERE")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),o(n,{class:"my-1"},{default:a(()=>[o(r,null,{default:a(()=>[t.$store.getBlogOption.category?(m(),f(L,{key:0,modelValue:l.blog.category,"onUpdate:modelValue":e[4]||(e[4]=s=>l.blog.category=s),variant:"outlined",density:"comfortable",label:t.$t("blog.CATEGORY"),items:t.$store.getBlogOption.category},null,8,["modelValue","label","items"])):d("",!0)]),_:1}),o(r,{class:"d-flex justify-center"},{default:a(()=>[o(T,{modelValue:l.blog.is_published,"onUpdate:modelValue":e[5]||(e[5]=s=>l.blog.is_published=s),color:"secondary",label:t.$t("blog.PUBLISH")},null,8,["modelValue","label"])]),_:1})]),_:1}),o(n,{class:"my-3"},{default:a(()=>[o(r,{class:"text-right"},{default:a(()=>[o(U,{color:"secondary",class:"px-8",onClick:p.save,disabled:!l.blog.title||!l.options.content||!l.blog.category},{default:a(()=>[c(h(t.$t("action.SAVE")),1)]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})):d("",!0)}const te=_(D,[["render",k]]);export{te as default};