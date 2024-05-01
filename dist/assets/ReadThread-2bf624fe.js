import{u as b}from"./datetime-87f6df03.js";import{u as I}from"./download-85189c7a.js";import{u as O}from"./file-481382df.js";import{u as S}from"./user-12dc24db.js";import{O as U,V as L}from"./VTextarea-b1da51d6.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{a as v}from"./VChip-85d324e4.js";import{V as f,s as F,a as A}from"./forwardRefs-540210a6.js";import{V as w}from"./VContainer-e9bae796.js";import{V as C,c as g,b as Y,a as M}from"./VCard-f27b3ff1.js";import{r as $,o as n,c as u,w as o,d as E,a as r,b as c,t as i,g as p,e as T,f as H,F as P,_ as N,M as V}from"./index-cd0f3d5b.js";import{V as y}from"./VCol-aa336778.js";import{V as k}from"./VTooltip-8cd96291.js";import{V as R}from"./VRow-9dd703d4.js";import{V as z}from"./VSheet-7121eb89.js";import{V as B}from"./VSpacer-0461be1c.js";import{V as G}from"./VDialog-f485cea0.js";import"./VField-ffd0fbb4.js";import"./VOverlay-891c21e4.js";const j={props:{thread:Object},setup(){const{formatDateOrTime:e}=b(),{username:t}=S();return{formatDateOrTime:e,username:t}},components:{Observer:U},data(){return{replies:null,dataStored:[],nextLink:null,pageSize:50,init:!1,loading:!1,newComment:null,commenting:!1,textareas:[],replying:[],scrollTo:null}},mounted(){this.getReplies(),this.$route.params.reply&&(this.scrollTo="reply-"+this.$route.params.reply)},methods:{scrollToReply(){const e=document.getElementById(this.scrollTo);e&&e.scrollIntoView({behavior:"smooth",block:"start"}),this.scrollTo=null},getReplies(){const e=this,t=`${this.$api("THREAD_REPLIES").url.replace("{pk}",this.thread.id)}?page_size=${this.pageSize}`;this.$axios({method:this.$api("THREAD_REPLIES").method,url:t}).then(function(s){e.nextLink=s.data.pagination.next_link,e.replies=s.data.data,e.replying=new Array(e.replies.length).fill(!1),e.textareas=new Array(e.replies.length).fill(null),e.commenting=!1,e.newComment=null,e.init=!0,e.scrollTo&&setTimeout(e.scrollToReply,300)}).catch(function(s){e.$toast.error(e.$error(s,"THREAD_REPLIES"))})},updateData(){this.replies=[...this.replies,...this.dataStored],this.replying=new Array(this.replies.length).fill(!1),this.textareas=new Array(this.replies.length).fill(null),this.commenting=!1,this.newComment=null,this.loading=!1},getMoreReplies(){if(!this.nextLink)return;const e=this;this.loading=!0,this.$axios({method:this.$api("THREAD_REPLIES").method,url:this.nextLink}).then(function(t){e.nextLink=t.data.pagination.next_link,e.dataStored=t.data.data,setTimeout(e.updateData,1e3)}).catch(function(t){e.$toast.error(e.$error(t,"THREAD_REPLIES"))})},cancelReply(e){e==-1?(this.commenting=!1,this.newComment=null):(this.replying[e]=!1,this.textareas[e]=null)},saveReply(e,t){const s=this;let h={reply_id:t,content:this.textareas[e]};e==-1&&(h={content:this.newComment}),this.$axios({method:this.$api("THREAD_REPLY").method,url:this.$api("THREAD_REPLY").url.replace("{pk}",this.thread.id),data:h}).then(function(a){s.getReplies()}).catch(function(a){s.$toast.error(s.$error(a,"THREAD_REPLY"))})},deleteReply(e){const t=this;confirm(this.$t("forum.DELETE_REPLY"))&&this.$axios({method:this.$api("REPLY_DELETE").method,url:this.$api("REPLY_DELETE").url.replace("{pk}",e)}).then(function(s){t.getReplies(),t.$toast.success(t.$t("message.DELETED_SUCCESSFULLY"))}).catch(function(s){t.$toast.error(t.$error(s,"REPLY_DELETE"))})}}},W={key:1,class:"text-right"},q={class:"font-weight-bold"},J={style:{color:"#565E6C"}},K={key:0,class:"text-right"},Q={key:0};function X(e,t,s,h,a,m){const D=$("Observer");return n(),u(w,{class:"pa-0"},{default:o(()=>[E("div",null,[r(v,{variant:"flat",color:"neutral","prepend-icon":"mdi-message-reply-outline",class:"px-4 mr-2"},{default:o(()=>[c(i(s.thread.reply_count),1)]),_:1}),s.thread.forum.permissions.reply?(n(),u(f,{key:0,variant:"outlined","prepend-icon":"mdi-plus",color:"secondary",class:"my-5",onClick:t[0]||(t[0]=d=>a.commenting=!0)},{default:o(()=>[c(i(e.$t("forum.ADD_COMMENT")),1)]),_:1})):p("",!0),a.commenting?(n(),T("div",W,[r(L,{modelValue:a.newComment,"onUpdate:modelValue":t[1]||(t[1]=d=>a.newComment=d),rows:"3",variant:"outlined"},null,8,["modelValue"]),r(f,{variant:"flat",density:"comfortable",color:"ashen",class:"mr-2",onClick:t[2]||(t[2]=d=>m.cancelReply(-1))},{default:o(()=>[c(i(e.$t("action.CANCEL")),1)]),_:1}),r(f,{variant:"flat",density:"comfortable",color:"secondary",onClick:t[3]||(t[3]=d=>m.saveReply(-1,0)),disabled:!a.newComment},{default:o(()=>[c(i(e.$t("action.SAVE")),1)]),_:1},8,["disabled"])])):p("",!0)]),(n(!0),T(P,null,H(a.replies,(d,l)=>(n(),u(C,{variant:"flat",key:d.id,id:"reply-"+d.id,class:N(d.reply_id?"ml-5":""),disabled:d.is_deleted},{default:o(()=>[r(g,{class:"pb-2"},{default:o(()=>[d.user&&d.user.id==s.thread.user.id?(n(),u(v,{key:0,variant:"flat",density:"compact",color:"secondary",class:"mr-2 px-2"},{default:o(()=>[c(i(e.$t("forum.AUTHOR")),1)]),_:1})):p("",!0),E("span",q,i(h.username(d)),1),E("span",J," - "+i(h.formatDateOrTime(d.date_or_time)),1)]),_:2},1024),d.is_deleted?(n(),u(g,{key:1,class:"py-1"},{default:o(()=>[c(i(e.$t("forum.DELETED_COMMENT")),1)]),_:1})):(n(),u(g,{key:0,class:"py-1"},{default:o(()=>[c(i(d.content)+" ",1),r(Y,{class:"pl-0 d-flex"},{default:o(()=>[r(f,{variant:"text","prepend-icon":"mdi-message-reply-outline",onClick:_=>a.replying[l]=!0},{default:o(()=>[c(i(e.$t("forum.REPLY")),1)]),_:2},1032,["onClick"]),d.editable?(n(),u(f,{key:0,variant:"text","prepend-icon":"mdi-trash-can-outline",color:"secondary",onClick:_=>m.deleteReply(d.id)},{default:o(()=>[c(i(e.$t("action.DELETE")),1)]),_:2},1032,["onClick"])):p("",!0)]),_:2},1024),a.replying[l]?(n(),T("div",K,[r(L,{modelValue:a.textareas[l],"onUpdate:modelValue":_=>a.textareas[l]=_,rows:"3",variant:"outlined"},null,8,["modelValue","onUpdate:modelValue"]),r(f,{variant:"flat",density:"comfortable",color:"ashen",class:"mr-2",onClick:_=>m.cancelReply(l)},{default:o(()=>[c(i(e.$t("action.CANCEL")),1)]),_:2},1032,["onClick"]),r(f,{variant:"flat",density:"comfortable",color:"secondary",onClick:_=>m.saveReply(l,d.id),disabled:!a.textareas[l]},{default:o(()=>[c(i(e.$t("action.SAVE")),1)]),_:2},1032,["onClick","disabled"])])):p("",!0)]),_:2},1024))]),_:2},1032,["id","class","disabled"]))),128)),a.loading?(n(),T("div",Q,[r(F,{indeterminate:"",height:1,color:"secondary"})])):p("",!0),r(D,{onShow:m.getMoreReplies},null,8,["onShow"])]),_:1})}const Z=x(j,[["render",X],["__scopeId","data-v-83d7642a"]]);const ee={setup(){const{formatDateTime:e}=b(),{fileSize:t}=O(),{username:s}=S();return{formatDateTime:e,fileSize:t,username:s}},components:{Reply:Z},data(){return{thread:null,deleteDialog:!1,init:!1}},mounted(){this.getThread(this.$route.params.forum,this.$route.params.thread)},methods:{backToList(){const e=this.$router.options.history.state.back;e&&e.startsWith("/forum/")?this.$router.back():this.$router.push({name:"thread"})},getThread(e,t){const s=this;this.$axios({method:this.$api("THREAD_READ").method,url:this.$api("THREAD_READ").url.replace("{forum}",e).replace("{pk}",t)}).then(function(h){s.thread=h.data.data,s.init=!0}).catch(function(h){s.$toast.error(s.$error(h,"THREAD_READ"))})},togglePin(){const e=this;let t="THREAD_PIN";this.thread.is_pinned&&(t="THREAD_UNPIN"),this.$axios({method:this.$api(t).method,url:this.$api(t).url.replace("{forum}",this.thread.forum.name).replace("{pk}",this.thread.id)}).then(function(s){e.thread=s.data.data,e.thread.is_pinned?e.$toast.success(e.$t("forum.THREAD_PINNED")):e.$toast.success(e.$t("forum.THREAD_UNPINNED"))}).catch(function(s){e.$toast.error(e.$error(s,t))})},editThread(){this.$router.push({name:"thread.edit",params:{forum:this.$route.params.forum,thread:this.$route.params.thread}})},deleteThread(){const e=this;this.$axios({method:this.$api("THREAD_DELETE").method,url:this.$api("THREAD_DELETE").url.replace("{forum}",this.thread.forum.name).replace("{pk}",this.thread.id)}).then(function(t){e.deleteDialog=!1,e.$toast.success(e.$t("message.DELETED_SUCCESSFULLY")),e.backToList()}).catch(function(t){e.$toast.error(e.$error(t,"THREAD_DELETE"))})},restoreThread(){const e=this;this.$axios({method:this.$api("THREAD_RESTORE").method,url:this.$api("THREAD_RESTORE").url.replace("{forum}",this.thread.forum.name).replace("{pk}",this.thread.id)}).then(function(t){e.deleteDialog=!1,e.$toast.success(e.$t("message.RESTORED_SUCCESSFULLY")),e.backToList()}).catch(function(t){e.$toast.error(e.$error(t,"THREAD_RESTORE"))})},downloadFile(e){I("GET",e.file,e.filename)}}},te={class:"d-flex flex-row"},oe={class:"ml-3 text-body-2"},ae={class:"font-weight-bold"},re={class:"ml-1 font-weight-regular"},se={key:1},ie={key:2};function le(e,t,s,h,a,m){const D=$("router-link"),d=$("Reply");return a.init?(n(),u(w,{key:0},{default:o(()=>[r(R,{style:{"border-bottom":"1px solid #DEE1E6FF"}},{default:o(()=>[r(y,{class:"py-2"},{default:o(()=>[E("div",te,[r(f,{icon:"mdi-arrow-left",size:"small",color:"ashen",onClick:m.backToList},null,8,["onClick"]),E("div",oe,[E("div",ae,[r(D,{to:{name:"thread"}},{default:o(()=>[c(i(a.thread.forum.name),1)]),_:1})]),E("div",null,[c(i(h.username(a.thread))+" ",1),E("span",re," - "+i(h.formatDateTime(a.thread.created_at)),1)])])])]),_:1}),a.thread.editable?(n(),u(y,{key:0,cols:"2",class:"text-right py-2 d-flex justify-end"},{default:o(()=>[a.thread.is_deleted?p("",!0):(n(),u(k,{key:0,location:"bottom",text:e.$t("action.EDIT")},{activator:o(({props:l})=>[r(f,V(l,{icon:"mdi-pencil-outline",density:"comfortable",variant:"text",color:"secondary",class:"ml-1",onClick:m.editThread}),null,16,["onClick"])]),_:1},8,["text"])),a.thread.is_deleted?(n(),u(f,{key:1,variant:"outlined","prepend-icon":"mdi-restore",color:"secondary",onClick:m.restoreThread},{default:o(()=>[c(i(e.$t("action.RESTORE_THREAD")),1)]),_:1},8,["onClick"])):(n(),u(k,{key:2,location:"bottom",text:e.$t("action.DELETE_THREAD")},{activator:o(({props:l})=>[r(f,V(l,{icon:"mdi-trash-can-outline",density:"comfortable",variant:"text",color:"pale",class:"ml-1",onClick:t[0]||(t[0]=_=>a.deleteDialog=!0)}),null,16)]),_:1},8,["text"]))]),_:1})):p("",!0)]),_:1}),r(R,null,{default:o(()=>[r(y,{class:N(["mt-2 mb-5 text-h4",a.thread.is_pinned?"font-weight-bold":""])},{default:o(()=>[a.thread.is_pinned?(n(),u(A,{key:0,icon:"mdi-pin-outline",size:"x-small"})):p("",!0),e.$store.isStaff?(n(),T("span",se,[E("a",{style:{cursor:"pointer"},onClick:t[1]||(t[1]=(...l)=>m.togglePin&&m.togglePin(...l))},[r(k,{activator:"parent",location:"bottom"},{default:o(()=>[c(i(e.$t("action.TOGGLE_PIN")),1)]),_:1}),c(" "+i(a.thread.title),1)])])):(n(),T("span",ie,i(a.thread.title),1))]),_:1},8,["class"])]),_:1}),r(R,null,{default:o(()=>[r(y,null,{default:o(()=>[r(z,{class:"editor-content",innerHTML:a.thread.content},null,8,["innerHTML"])]),_:1})]),_:1}),a.thread.files.length>0?(n(),u(R,{key:0,class:"mt-10"},{default:o(()=>[r(y,null,{default:o(()=>[r(C,{variant:"plain",class:"pb-2 px-1"},{default:o(()=>[r(M,{class:"py-0 text-body-1"},{default:o(()=>[c(i(e.$t("forum.ATTACHMENTS")),1)]),_:1}),(n(!0),T(P,null,H(a.thread.files,l=>(n(),u(v,{key:l.id,variant:"outlined",class:"mx-1 my-1",onClick:_=>m.downloadFile(l)},{default:o(()=>[c(i(l.filename)+" ("+i(h.fileSize(l.size))+") ",1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})):p("",!0),r(G,{modelValue:a.deleteDialog,"onUpdate:modelValue":t[4]||(t[4]=l=>a.deleteDialog=l),"max-width":"400",persistent:""},{default:o(()=>[r(C,{title:e.$t("forum.DELETE_THREAD"),text:e.$t("hint.DELETE_THREAD_DESCRIPTION")},{prepend:o(()=>[r(A,{icon:"mdi-alert",color:"secondary"})]),actions:o(()=>[r(B),r(f,{variant:"outlined",color:"pale",onClick:t[2]||(t[2]=l=>a.deleteDialog=!1)},{default:o(()=>[c(i(e.$t("action.CANCEL")),1)]),_:1}),r(f,{color:"secondary",onClick:t[3]||(t[3]=l=>m.deleteThread())},{default:o(()=>[c(i(e.$t("action.DELETE_THREAD")),1)]),_:1})]),_:1},8,["title","text"])]),_:1},8,["modelValue"]),r(d,{class:"mt-5",thread:a.thread},null,8,["thread"])]),_:1})):p("",!0)}const Le=x(ee,[["render",le]]);export{Le as default};