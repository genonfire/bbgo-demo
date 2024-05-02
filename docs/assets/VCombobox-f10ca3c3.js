import{m as we,u as Se,a as Me}from"./VSelect-fde9b95b.js";import{m as Ie,V as ae}from"./VTextField-c32c9752.js";import{i as ie,C as N,z as V,ac as B,N as Pe,ae as p,al as _e,Z as De,k as Ke,af as Ae,y as U,J as ue,am as Re,E as z,S as ne,l as Le,a as v,F as X,M as T,an as Ee,b as Oe,ao as Te,ap as Ne,aq as je}from"./index-9a7d77d1.js";import{F as Be,G as Ue,k as ze,a as oe,g as $e,C as He}from"./forwardRefs-601a00f7.js";import{u as Ge,t as $,e as Je,c as Qe,V as re}from"./VMenu-28f47fd6.js";import{V as We}from"./VCheckboxBtn-b9ccac59.js";import{a as Ze}from"./VChip-ec8b5f79.js";const Xe=(e,f,u)=>e==null||f==null?-1:e.toString().toLocaleLowerCase().indexOf(f.toString().toLocaleLowerCase()),Ye=ie({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function qe(e,f,u){var b;const t=[],w=(u==null?void 0:u.default)??Xe,h=u!=null&&u.filterKeys?p(u.filterKeys):!1,g=Object.keys((u==null?void 0:u.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let d=0;d<e.length;d++){const[k,K=k]=p(e[d]),S={},i={};let n=-1;if(f&&!(u!=null&&u.noFilter)){if(typeof k=="object"){const E=h||Object.keys(K);for(const I of E){const H=_e(K,I),j=(b=u==null?void 0:u.customKeyFilter)==null?void 0:b[I];if(n=j?j(H,f,k):w(H,f,k),n!==-1&&n!==!1)j?S[I]=n:i[I]=n;else if((u==null?void 0:u.filterMode)==="every")continue e}}else n=w(k,f,k),n!==-1&&n!==!1&&(i.title=n);const M=Object.keys(i).length,A=Object.keys(S).length;if(!M&&!A||(u==null?void 0:u.filterMode)==="union"&&A!==g&&!M||(u==null?void 0:u.filterMode)==="intersection"&&(A!==g||!M))continue}t.push({index:d,matches:{...i,...S}})}return t}function pe(e,f,u,t){const w=N([]),h=N(new Map),g=V(()=>t!=null&&t.transform?B(f).map(d=>[d,t.transform(d)]):B(f));Pe(()=>{const d=typeof u=="function"?u():B(u),k=typeof d!="string"&&typeof d!="number"?"":String(d),K=qe(g.value,k,{customKeyFilter:{...e.customKeyFilter,...B(t==null?void 0:t.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),S=B(f),i=[],n=new Map;K.forEach(M=>{let{index:A,matches:E}=M;const I=S[A];i.push(I),n.set(I.value,E)}),w.value=i,h.value=n});function b(d){return h.value.get(d.value)}return{filteredItems:w,filteredMatches:h,getMatches:b}}function el(e,f,u){if(f==null)return e;if(Array.isArray(f))throw new Error("Multiple matches is not implemented");return typeof f=="number"&&~f?v(X,null,[v("span",{class:"v-combobox__unmask"},[e.substr(0,f)]),v("span",{class:"v-combobox__mask"},[e.substr(f,u)]),v("span",{class:"v-combobox__unmask"},[e.substr(f+u)])]):e}const ll=ie({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...Ye({filterKeys:["title"]}),...we({hideNoData:!0,returnObject:!0}),...De(Ie({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Be({transition:!1})},"VCombobox"),cl=Ke()({name:"VCombobox",props:ll(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,f){var ee;let{emit:u,slots:t}=f;const{t:w}=Ae(),h=N(),g=U(!1),b=U(!0),d=U(!1),k=N(),K=N(),S=ue(e,"menu"),i=V({get:()=>S.value,set:l=>{var o;S.value&&!l&&((o=k.value)!=null&&o.ΨopenChildren)||(S.value=l)}}),n=U(-1);let M=!1;const A=V(()=>{var l;return(l=h.value)==null?void 0:l.color}),E=V(()=>i.value?e.closeText:e.openText),{items:I,transformIn:H,transformOut:j}=Ge(e),{textColorClasses:ce,textColorStyles:se}=Re(A),r=ue(e,"modelValue",[],l=>H(p(l)),l=>{const o=j(l);return e.multiple?o:o[0]??null}),O=Ue(),G=V(()=>!!(e.chips||t.chip)),P=V(()=>G.value||!!t.selection),D=U(!e.multiple&&!P.value?((ee=r.value[0])==null?void 0:ee.title)??"":""),m=V({get:()=>D.value,set:l=>{var o;if(D.value=l??"",!e.multiple&&!P.value&&(r.value=[$(e,l)]),l&&e.multiple&&((o=e.delimiters)!=null&&o.length)){const s=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));s.length>1&&(s.forEach(a=>{a=a.trim(),a&&F($(e,a))}),D.value="")}l||(n.value=-1),b.value=!l}}),ve=V(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?r.value.length:m.value.length);z(D,l=>{M?ne(()=>M=!1):g.value&&!i.value&&(i.value=!0),u("update:search",l)}),z(r,l=>{var o;!e.multiple&&!P.value&&(D.value=((o=l[0])==null?void 0:o.title)??"")});const{filteredItems:J,getMatches:fe}=pe(e,I,()=>b.value?"":m.value),_=V(()=>e.hideSelected?J.value.filter(l=>!r.value.some(o=>o.value===l.value)):J.value),de=V(()=>r.value.map(l=>l.value)),Q=V(()=>{var o;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&m.value===((o=_.value[0])==null?void 0:o.title))&&_.value.length>0&&!b.value&&!d.value}),Y=V(()=>e.hideNoData&&!_.value.length||e.readonly||(O==null?void 0:O.isReadonly.value)),q=N(),{onListScroll:me,onListKeydown:he}=Se(q,h);function ge(l){M=!0,e.openOnClear&&(i.value=!0)}function ye(){Y.value||(i.value=!0)}function be(l){Y.value||(g.value&&(l.preventDefault(),l.stopPropagation()),i.value=!i.value)}function xe(l){var a;if(Ne(l)||e.readonly||O!=null&&O.isReadonly.value)return;const o=h.value.selectionStart,s=r.value.length;if((n.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(i.value=!0),["Escape"].includes(l.key)&&(i.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(Q.value&&["Enter","Tab"].includes(l.key)&&F(J.value[0]),b.value=!0),l.key==="ArrowDown"&&Q.value&&((a=q.value)==null||a.focus("next")),l.key==="Enter"&&m.value&&(F($(e,m.value)),P.value&&(D.value="")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&P.value&&r.value.length>0&&!m.value)return F(r.value[0],!1);if(~n.value){const c=n.value;F(r.value[n.value],!1),n.value=c>=s-1?s-2:c}else l.key==="Backspace"&&!m.value&&(n.value=s-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(n.value<0&&o>0)return;const c=n.value>-1?n.value-1:s-1;r.value[c]?n.value=c:(n.value=-1,h.value.setSelectionRange(m.value.length,m.value.length))}if(l.key==="ArrowRight"){if(n.value<0)return;const c=n.value+1;r.value[c]?n.value=c:(n.value=-1,h.value.setSelectionRange(0,0))}}}function Ve(){var l;g.value&&(b.value=!0,(l=h.value)==null||l.focus())}function F(l){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const s=r.value.findIndex(c=>e.valueComparator(c.value,l.value)),a=o??!~s;if(~s){const c=a?[...r.value,l]:[...r.value];c.splice(s,1),r.value=c}else a&&(r.value=[...r.value,l]);e.clearOnSelect&&(m.value="")}else{const s=o!==!1;r.value=s?[l]:[],D.value=s&&!P.value?l.title:"",ne(()=>{i.value=!1,b.value=!0})}}function ke(l){g.value=!0,setTimeout(()=>{d.value=!0})}function Fe(l){d.value=!1}function Ce(l){(l==null||l===""&&!e.multiple&&!P.value)&&(r.value=[])}return z(g,(l,o)=>{if(!(l||l===o)){if(n.value=-1,i.value=!1,Q.value&&!d.value&&!r.value.some(s=>{let{value:a}=s;return a===_.value[0].value})){F(_.value[0]);return}if(m.value){if(e.multiple){F($(e,m.value));return}if(!P.value)return;r.value.some(s=>{let{title:a}=s;return a===m.value})?D.value="":F($(e,m.value))}}}),z(i,()=>{if(!e.hideSelected&&i.value&&r.value.length){const l=_.value.findIndex(o=>r.value.some(s=>e.valueComparator(s.value,o.value)));je&&window.requestAnimationFrame(()=>{var o;l>=0&&((o=K.value)==null||o.scrollToIndex(l))})}}),z(()=>e.items,(l,o)=>{i.value||g.value&&!o.length&&l.length&&(i.value=!0)}),Le(()=>{const l=!!(!e.hideNoData||_.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),o=r.value.length>0,s=ae.filterProps(e);return v(ae,T({ref:h},s,{modelValue:m.value,"onUpdate:modelValue":[a=>m.value=a,Ce],focused:g.value,"onUpdate:focused":a=>g.value=a,validationValue:r.externalValue,counterValue:ve.value,dirty:o,class:["v-combobox",{"v-combobox--active-menu":i.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!P.value,"v-combobox--selecting-index":n.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:o?void 0:e.placeholder,"onClick:clear":ge,"onMousedown:control":ye,onKeydown:xe}),{...t,default:()=>v(X,null,[v(Je,T({ref:k,modelValue:i.value,"onUpdate:modelValue":a=>i.value=a,activator:"parent",contentClass:"v-combobox__content",disabled:Y.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ve},e.menuProps),{default:()=>[l&&v(Qe,T({ref:q,selected:de.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:a=>a.preventDefault(),onKeydown:he,onFocusin:ke,onFocusout:Fe,onScrollPassive:me,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var a,c,C;return[(a=t["prepend-item"])==null?void 0:a.call(t),!_.value.length&&!e.hideNoData&&(((c=t["no-data"])==null?void 0:c.call(t))??v(re,{title:w(e.noDataText)},null)),v(Me,{ref:K,renderless:!0,items:_.value},{default:R=>{var te;let{item:y,index:L,itemRef:x}=R;const le=T(y.props,{ref:x,key:L,active:Q.value&&L===0?!0:void 0,onClick:()=>F(y,null)});return((te=t.item)==null?void 0:te.call(t,{item:y,index:L,props:le}))??v(re,T(le,{role:"option"}),{prepend:W=>{let{isSelected:Z}=W;return v(X,null,[e.multiple&&!e.hideSelected?v(We,{key:y.value,modelValue:Z,ripple:!1,tabindex:"-1"},null):void 0,y.props.prependAvatar&&v(ze,{image:y.props.prependAvatar},null),y.props.prependIcon&&v(oe,{icon:y.props.prependIcon},null)])},title:()=>{var W,Z;return b.value?y.title:el(y.title,(W=fe(y))==null?void 0:W.title,((Z=m.value)==null?void 0:Z.length)??0)}})}}),(C=t["append-item"])==null?void 0:C.call(t)]}})]}),r.value.map((a,c)=>{function C(x){x.stopPropagation(),x.preventDefault(),F(a,!1)}const R={"onClick:close":C,onKeydown(x){x.key!=="Enter"&&x.key!==" "||(x.preventDefault(),x.stopPropagation(),C(x))},onMousedown(x){x.preventDefault(),x.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},y=G.value?!!t.chip:!!t.selection,L=y?Ee(G.value?t.chip({item:a,index:c,props:R}):t.selection({item:a,index:c})):void 0;if(!(y&&!L))return v("div",{key:a.value,class:["v-combobox__selection",c===n.value&&["v-combobox__selection--selected",ce.value]],style:c===n.value?se.value:{}},[G.value?t.chip?v($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[L]}):v(Ze,T({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},R),null):L??v("span",{class:"v-combobox__selection-text"},[a.title,e.multiple&&c<r.value.length-1&&v("span",{class:"v-combobox__selection-comma"},[Oe(",")])])])})]),"append-inner":function(){var R;for(var a=arguments.length,c=new Array(a),C=0;C<a;C++)c[C]=arguments[C];return v(X,null,[(R=t["append-inner"])==null?void 0:R.call(t,...c),(!e.hideNoData||e.items.length)&&e.menuIcon?v(oe,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:be,onClick:Te,"aria-label":w(E.value),title:w(E.value)},null):void 0])}})}),He({isFocused:g,isPristine:b,menu:i,search:m,selectionIndex:n,filteredItems:J,select:F},h)}});export{cl as V};