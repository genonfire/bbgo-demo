import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";import{a as l}from"./VChip-85d324e4.js";import{o as r,e as s,f as i,F as c,g as m,c as d,w as f,b as u,t as g}from"./index-cd0f3d5b.js";const y={props:{tags:String,variant:{type:String,default:"tonal"},density:{type:String,default:"comfortable"},color:{type:String,default:"pale"},label:{type:Boolean,default:!1}},methods:{onTagClick(a){this.$router.push({name:"blogs",query:{tag:a}})}}};function p(a,_,t,k,C,o){return t.tags?(r(!0),s(c,{key:0},i(t.tags.split(",").map(e=>e.trim()),e=>(r(),d(l,{key:e,variant:t.variant,density:t.density,color:t.color,label:t.label,class:"mr-1 mt-1",onClick:b=>o.onTagClick(e)},{default:f(()=>[u(g(e),1)]),_:2},1032,["variant","density","color","label","onClick"]))),128)):m("",!0)}const S=n(y,[["render",p]]);export{S as T};