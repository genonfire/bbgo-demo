import{ad as d}from"./index-9a7d77d1.js";function r(t,n,a="download"){d({method:t,url:n,responseType:"blob"}).then(function(o){const c=new Blob([o.data],{type:o.headers["content-type"]}),e=document.createElement("a");e.href=URL.createObjectURL(c),e.download=a,e.click(),URL.revokeObjectURL(e.href)})}export{r as u};