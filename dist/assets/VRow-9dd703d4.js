import{i as k,m as v,j as S,k as p,z as w,a7 as b,aW as L,aX as N}from"./index-cd0f3d5b.js";const o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,s){return L.reduce((e,a)=>{const n=t+N(a);return e[n]=s(),e},{})}const P=[...o,"baseline","stretch"],d=t=>P.includes(t),f=i("align",()=>({type:String,default:null,validator:d})),A=[...o,...g],y=t=>A.includes(t),j=i("justify",()=>({type:String,default:null,validator:y})),E=[...o,...g,"stretch"],C=t=>E.includes(t),m=i("alignContent",()=>({type:String,default:null,validator:C})),u={align:Object.keys(f),justify:Object.keys(j),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function G(t,s,e){let a=h[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const R=k({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...j,alignContent:{type:String,default:null,validator:C},...m,...v(),...S()},"VRow"),$=p()({name:"VRow",props:R(),setup(t,s){let{slots:e}=s;const a=w(()=>{const n=[];let l;for(l in u)u[l].forEach(c=>{const V=t[c],r=G(l,c,V);r&&n.push(r)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return b(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{$ as V};