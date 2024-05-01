import{u as $}from"./datetime-87f6df03.js";import{O as B,V as v}from"./VTextarea-b1da51d6.js";import{u as M}from"./user-12dc24db.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{a as T}from"./VChip-85d324e4.js";import{V as d,s as x,a as S}from"./forwardRefs-540210a6.js";import{V as O}from"./VContainer-e9bae796.js";import{V,c as L,b as w}from"./VCard-f27b3ff1.js";import{r as y,o as m,c as u,w as l,d as h,a as s,b as r,t as n,e as b,g as p,f as N,F as G,_ as A}from"./index-cd0f3d5b.js";import{T as I}from"./TagChips-b1d630a8.js";import{V as C}from"./VCol-aa336778.js";import{V as E}from"./VRow-9dd703d4.js";import{V as U}from"./VSheet-7121eb89.js";import{V as R}from"./VSpacer-0461be1c.js";import{V as F}from"./VDialog-f485cea0.js";import"./VField-ffd0fbb4.js";import"./VOverlay-891c21e4.js";const K={props:{blog:Object},setup(){const{formatDateOrTime:e}=$(),{username:t}=M();return{formatDateOrTime:e,username:t}},components:{Observer:B},data(){return{comments:null,dataStored:[],nextLink:null,pageSize:50,init:!1,loading:!1,newComment:null,commenting:!1,textareas:[],replying:[],scrollTo:null}},mounted(){this.getComments(),this.$route.params.comment&&(this.scrollTo="comment-"+this.$route.params.comment)},methods:{scrollToComment(){const e=document.getElementById(this.scrollTo);e&&e.scrollIntoView({behavior:"smooth",block:"start"}),this.scrollTo=null},getComments(){const e=this,t=`${this.$api("BLOG_COMMENTS").url.replace("{pk}",this.blog.id)}?page_size=${this.pageSize}`;this.$axios({method:this.$api("BLOG_COMMENTS").method,url:t}).then(function(i){e.nextLink=i.data.pagination.next_link,e.comments=i.data.data,e.replying=new Array(e.comments.length).fill(!1),e.textareas=new Array(e.comments.length).fill(null),e.commenting=!1,e.newComment=null,e.init=!0,e.scrollTo&&setTimeout(e.scrollToComment,300)}).catch(function(i){e.$toast.error(e.$error(i,"BLOG_COMMENTS"))})},updateData(){this.comments=[...this.comments,...this.dataStored],this.replying=new Array(this.comments.length).fill(!1),this.textareas=new Array(this.comments.length).fill(null),this.commenting=!1,this.newComment=null,this.loading=!1},getMoreComments(){if(!this.nextLink)return;const e=this;this.loading=!0,this.$axios({method:this.$api("BLOG_COMMENTS").method,url:this.nextLink}).then(function(t){e.nextLink=t.data.pagination.next_link,e.dataStored=t.data.data,setTimeout(e.updateData,1e3)}).catch(function(t){e.$toast.error(e.$error(t,"BLOG_COMMENTS"))})},cancelComment(e){e==-1?(this.commenting=!1,this.newComment=null):(this.replying[e]=!1,this.textareas[e]=null)},saveComment(e,t){const i=this;let g={comment_id:t,content:this.textareas[e]};e==-1&&(g={content:this.newComment}),this.$axios({method:this.$api("BLOG_COMMENT").method,url:this.$api("BLOG_COMMENT").url.replace("{pk}",this.blog.id),data:g}).then(function(o){i.getComments()}).catch(function(o){i.$toast.error(i.$error(o,"BLOG_COMMENT"))})},deleteComment(e){const t=this;confirm(this.$t("blog.DELETE_COMMENT"))&&this.$axios({method:this.$api("DELETE_COMMENT").method,url:this.$api("DELETE_COMMENT").url.replace("{pk}",e)}).then(function(i){t.getComments(),t.$toast.success(t.$t("message.DELETED_SUCCESSFULLY"))}).catch(function(i){t.$toast.error(t.$error(i,"DELETE_COMMENT"))})}}},Y={key:1,class:"text-right"},z={class:"font-weight-bold"},H={style:{color:"#565E6C"}},P={key:0,class:"text-right"},j={key:0};function q(e,t,i,g,o,f){const k=y("Observer");return m(),u(O,{class:"pa-0"},{default:l(()=>[h("div",null,[s(T,{variant:"flat",color:"neutral","prepend-icon":"mdi-message-reply-outline",class:"px-4 mr-2"},{default:l(()=>[r(n(i.blog.comment_count),1)]),_:1}),(m(),u(d,{key:0,variant:"outlined","prepend-icon":"mdi-plus",color:"secondary",class:"my-5",onClick:t[0]||(t[0]=a=>o.commenting=!0)},{default:l(()=>[r(n(e.$t("blog.ADD_COMMENT")),1)]),_:1})),o.commenting?(m(),b("div",Y,[s(v,{modelValue:o.newComment,"onUpdate:modelValue":t[1]||(t[1]=a=>o.newComment=a),rows:"3",variant:"outlined"},null,8,["modelValue"]),s(d,{variant:"flat",density:"comfortable",color:"ashen",class:"mr-2",onClick:t[2]||(t[2]=a=>f.cancelComment(-1))},{default:l(()=>[r(n(e.$t("action.CANCEL")),1)]),_:1}),s(d,{variant:"flat",density:"comfortable",color:"secondary",onClick:t[3]||(t[3]=a=>f.saveComment(-1,0)),disabled:!o.newComment},{default:l(()=>[r(n(e.$t("action.SAVE")),1)]),_:1},8,["disabled"])])):p("",!0)]),(m(!0),b(G,null,N(o.comments,(a,c)=>(m(),u(V,{variant:"flat",key:a.id,id:"comment-"+a.id,class:A(a.comment_id?"ml-5":""),disabled:a.is_deleted},{default:l(()=>[s(L,{class:"pb-2"},{default:l(()=>[a.user&&a.user.id==i.blog.user.id?(m(),u(T,{key:0,variant:"flat",density:"compact",color:"secondary",class:"mr-2 px-2"},{default:l(()=>[r(n(e.$t("blog.AUTHOR")),1)]),_:1})):p("",!0),h("span",z,n(g.username(a)),1),h("span",H," - "+n(g.formatDateOrTime(a.date_or_time)),1)]),_:2},1024),a.is_deleted?(m(),u(L,{key:1,class:"py-1"},{default:l(()=>[r(n(e.$t("blog.DELETED_COMMENT")),1)]),_:1})):(m(),u(L,{key:0,class:"py-1"},{default:l(()=>[r(n(a.content)+" ",1),s(w,{class:"pl-0 d-flex"},{default:l(()=>[s(d,{variant:"text","prepend-icon":"mdi-message-reply-outline",onClick:_=>o.replying[c]=!0},{default:l(()=>[r(n(e.$t("blog.REPLY")),1)]),_:2},1032,["onClick"]),a.editable?(m(),u(d,{key:0,variant:"text","prepend-icon":"mdi-trash-can-outline",color:"secondary",onClick:_=>f.deleteComment(a.id)},{default:l(()=>[r(n(e.$t("action.DELETE")),1)]),_:2},1032,["onClick"])):p("",!0)]),_:2},1024),o.replying[c]?(m(),b("div",P,[s(v,{modelValue:o.textareas[c],"onUpdate:modelValue":_=>o.textareas[c]=_,rows:"3",variant:"outlined"},null,8,["modelValue","onUpdate:modelValue"]),s(d,{variant:"flat",density:"comfortable",color:"ashen",class:"mr-2",onClick:_=>f.cancelComment(c)},{default:l(()=>[r(n(e.$t("action.CANCEL")),1)]),_:2},1032,["onClick"]),s(d,{variant:"flat",density:"comfortable",color:"secondary",onClick:_=>f.saveComment(c,a.id),disabled:!o.textareas[c]},{default:l(()=>[r(n(e.$t("action.SAVE")),1)]),_:2},1032,["onClick","disabled"])])):p("",!0)]),_:2},1024))]),_:2},1032,["id","class","disabled"]))),128)),o.loading?(m(),b("div",j,[s(x,{indeterminate:"",height:1,color:"secondary"})])):p("",!0),s(k,{onShow:f.getMoreComments},null,8,["onShow"])]),_:1})}const J=D(K,[["render",q],["__scopeId","data-v-c3e7b436"]]);const Q={setup(){const{formatDate:e}=$();return{formatDate:e}},components:{Comment:J,TagChips:I},data(){return{blog:null,like:0,liked:!1,deleteDialog:!1,init:!1}},mounted(){this.getBlog(this.$route.params.blog)},methods:{getBlog(e){const t=this;this.$axios({method:this.$api("READ_BLOG").method,url:this.$api("READ_BLOG").url.replace("{pk}",e)}).then(function(i){t.blog=i.data.data,t.like=t.blog.like,t.liked=t.blog.liked,t.init=!0}).catch(function(i){t.$toast.error(t.$error(i,"READ_BLOG"))})},likeBlog(){if(this.liked){this.$toast.info(this.$t("error.ALREADY_LIKED"));return}const e=this;this.$axios({method:this.$api("LIKE_BLOG").method,url:this.$api("LIKE_BLOG").url.replace("{pk}",this.blog.id)}).then(function(t){e.like=t.data.data.like,e.liked=!0,e.$toast.success(e.$t("message.LIKED_SUCCESSFULLY"))}).catch(function(t){e.$toast.error(e.$error(t,"LIKE_BLOG"))})},deleteBlog(){const e=this;this.$axios({method:this.$api("DELETE_BLOG").method,url:this.$api("DELETE_BLOG").url.replace("{pk}",this.blog.id)}).then(function(t){e.deleteDialog=!1,e.$router.replace({name:"blogs"}),e.$toast.success(e.$t("message.DELETED_SUCCESSFULLY"))}).catch(function(t){e.$toast.error(e.$error(t,"DELETE_BLOG"))})}}},W={class:"mb-1 text-secondary"},X={class:"text-h4 font-weight-medium"},Z={class:"my-3 text-body-2"},ee={class:"mx-2"},te={class:"font-italic text-decoration-underline"},oe={class:"ml-2 text-pale"},le=["src"];function se(e,t,i,g,o,f){const k=y("TagChips"),a=y("Comment");return o.init?(m(),u(O,{key:0},{default:l(()=>[s(E,null,{default:l(()=>[s(C,{class:"my-4 d-flex flex-column"},{default:l(()=>[h("div",W,n(o.blog.category),1),h("div",X,n(o.blog.title),1),h("div",Z,[h("span",ee,[r(" By "),h("span",te,n(o.blog.user.call_name),1)]),h("span",oe,n(g.formatDate(o.blog.created_at)),1)])]),_:1})]),_:1}),s(E,{class:"my-0"},{default:l(()=>[s(C,null,{default:l(()=>[o.blog.image?(m(),b("img",{key:0,src:o.blog.image.file,width:"320",style:{"max-width":"100%"}},null,8,le)):p("",!0)]),_:1})]),_:1}),s(E,null,{default:l(()=>[s(C,null,{default:l(()=>[s(U,{class:"editor-content",innerHTML:o.blog.content},null,8,["innerHTML"])]),_:1})]),_:1}),s(E,{class:"my-10"},{default:l(()=>[s(C,null,{default:l(()=>[s(k,{tags:o.blog.tags,label:!0},null,8,["tags"])]),_:1})]),_:1}),s(E,null,{default:l(()=>[s(C,{class:"text-center"},{default:l(()=>[s(d,{variant:"flat","prepend-icon":"mdi-thumb-up-outline",color:o.liked?"secondary":"neutral",onClick:f.likeBlog},{default:l(()=>[r(n(o.like),1)]),_:1},8,["color","onClick"]),o.blog.editable?(m(),u(d,{key:0,variant:"flat",color:"neutral",class:"mx-2",onClick:t[0]||(t[0]=c=>e.$router.push({name:"blog.edit",params:{blog:o.blog.id}}))},{default:l(()=>[r(n(e.$t("action.EDIT")),1)]),_:1})):p("",!0),o.blog.editable?(m(),u(d,{key:1,variant:"flat",color:"secondary",onClick:t[1]||(t[1]=c=>o.deleteDialog=!0)},{default:l(()=>[r(n(e.$t("action.DELETE")),1)]),_:1})):p("",!0)]),_:1})]),_:1}),s(F,{modelValue:o.deleteDialog,"onUpdate:modelValue":t[4]||(t[4]=c=>o.deleteDialog=c),"max-width":"400",persistent:""},{default:l(()=>[s(V,{title:e.$t("blog.DELETE_BLOG"),text:e.$t("hint.DELETE_BLOG_DESCRIPTION")},{prepend:l(()=>[s(S,{icon:"mdi-alert",color:"secondary"})]),actions:l(()=>[s(R),s(d,{variant:"outlined",color:"pale",onClick:t[2]||(t[2]=c=>o.deleteDialog=!1)},{default:l(()=>[r(n(e.$t("action.CANCEL")),1)]),_:1}),s(d,{color:"secondary",onClick:t[3]||(t[3]=c=>f.deleteBlog())},{default:l(()=>[r(n(e.$t("action.DELETE_BLOG")),1)]),_:1})]),_:1},8,["title","text"])]),_:1},8,["modelValue"]),s(a,{blog:o.blog},null,8,["blog"])]),_:1})):p("",!0)}const Le=D(Q,[["render",se]]);export{Le as default};