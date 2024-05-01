import{T}from"./Tiptap-a43b034f.js";import{u as V}from"./file-481382df.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{V as C}from"./VContainer-e9bae796.js";import{V as f}from"./VCol-aa336778.js";import{V as H}from"./VTextField-3cacdb26.js";import{V as m}from"./VRow-9dd703d4.js";import{V as _,c as I}from"./VCard-f27b3ff1.js";import{a as A,V as F}from"./forwardRefs-540210a6.js";import{a as R}from"./VChip-85d324e4.js";import{r as k,o as u,c,w as r,g as h,a as i,e as v,F as y,f as S,b as p,t as d}from"./index-cd0f3d5b.js";import"./VTooltip-8cd96291.js";import"./VOverlay-891c21e4.js";import"./VField-ffd0fbb4.js";import"./VTabs-58df72cc.js";import"./ssrBoot-8c3076c6.js";import"./VFileInput-db5c86d4.js";import"./VSpacer-0461be1c.js";import"./VDialog-f485cea0.js";const x={setup(){const{fileSize:e}=V();return{fileSize:e}},components:{Tiptap:T},data(){return{forum:null,title:null,options:{content:"",supportImage:!0,supportVideo:!0},files:[],fileChips:[],isHovering:!1,saved:!1,init:!1}},mounted(){this.seekForum(this.$route.params.forum)},beforeRouteLeave(e,t,s){this.saved||confirm(this.$t("forum.QUIT_EDITING"))?s():s(!1)},methods:{seekForum(e){const t=this;this.$axios({method:this.$api("THREAD_SEEK").method,url:this.$api("THREAD_SEEK").url.replace("{forum}",e)}).then(function(s){t.forum=s.data.data,t.init=!0}).catch(function(s){t.$toast.error(t.$error(s,"THREAD_SEEK"))})},save(){const e=this;let t={title:this.title,content:this.options.content},s=[];if(this.files){for(let a=0;a<this.files.length;a++)s.push({id:this.files[a].id});t.files=s}this.$axios({method:this.$api("THREAD_WRITE").method,url:this.$api("THREAD_WRITE").url.replace("{forum}",this.forum.name),data:t}).then(function(a){e.saved=!0,e.$toast.success(e.$t("message.SAVED_SUCCESSFULLY")),e.$router.replace({name:"thread",params:{forum:e.forum.name}})}).catch(function(a){e.$toast.error(e.$error(a,"THREAD_WRITE"))})},allowDrop(e){e.preventDefault(),this.isHovering=!0},leaveDrop(e){e.preventDefault(),this.isHovering=!1},handleFileDrop(e){const t=this;if(this.isHovering=!1,this.forum.support_files){e.preventDefault();for(let s=0;s<e.dataTransfer.files.length;s++){let a=new FormData;a.append("file",e.dataTransfer.files[s]),this.$axios({method:this.$api("FILE_UPLOAD").method,url:this.$api("FILE_UPLOAD").url,data:a}).then(function(o){t.files.push(o.data.data),t.fileChips.push(o.data.data)}).catch(function(o){t.$toast.error(t.$error(o,"FILE_UPLOAD"))})}}},removeItem(e){const t=this.files.indexOf(e);this.files.splice(t,1)}}},L={key:0,class:"pl-2"};function $(e,t,s,a,o,n){const D=k("Tiptap");return o.init?(u(),c(C,{key:0},{default:r(()=>[i(m,{class:"mt-0"},{default:r(()=>[i(f,null,{default:r(()=>[i(H,{modelValue:o.title,"onUpdate:modelValue":t[0]||(t[0]=l=>o.title=l),variant:"outlined",density:"compact",placeholder:e.$t("forum.THREAD_TITLE")},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),i(m,{class:"mt-0"},{default:r(()=>[i(f,null,{default:r(()=>[i(D,{options:o.options},null,8,["options"])]),_:1})]),_:1}),o.forum.support_files?(u(),c(m,{key:0},{default:r(()=>[i(f,null,{default:r(()=>[i(_,{title:e.$t("forum.ATTACHMENTS"),variant:"outlined",density:"compact",class:"rounded-lg border-dashed"},{default:r(()=>[o.files?(u(),v("div",L,[(u(!0),v(y,null,S(o.fileChips,l=>(u(),c(R,{key:l.id,variant:"tonal",class:"mx-1 my-1",closable:"","onClick:close":E=>n.removeItem(l),"onUpdate:modelValue":E=>!0},{default:r(()=>[p(d(l.filename)+" ("+d(a.fileSize(l.size))+") ",1)]),_:2},1032,["onClick:close"]))),128))])):h("",!0),i(_,{variant:"outlined",density:"compact",color:o.isHovering?"secondary":void 0,class:"ma-2 pa-3 rounded-lg border-dashed text-center",onDrop:n.handleFileDrop,onDragover:n.allowDrop,onDragleave:n.leaveDrop},{default:r(()=>[i(A,{size:"x-large",color:o.isHovering?"secondary":"pale"},{default:r(()=>[p(" mdi-cloud-upload-outline ")]),_:1},8,["color"]),i(I,{class:"mt-2 pa-1"},{default:r(()=>[p(d(e.$t("hint.DROP_FILES_HERE")),1)]),_:1})]),_:1},8,["color","onDrop","onDragover","onDragleave"])]),_:1},8,["title"])]),_:1})]),_:1})):h("",!0),i(m,{class:"my-10"},{default:r(()=>[i(f,{class:"text-right"},{default:r(()=>[i(F,{color:"secondary",class:"px-8",onClick:n.save,disabled:!o.title||!o.options.content||!o.forum.permissions.write},{default:r(()=>[p(d(e.$t("action.SAVE")),1)]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})):h("",!0)}const ee=g(x,[["render",$]]);export{ee as default};