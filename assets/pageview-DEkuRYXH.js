import{_ as r}from"./app-D5ZtD7V0.js";var o={provider:"Waline",dark:"auto",serverURL:"https://comment.bloggersht.com.cn",comment:!0,pageview:!0,copyright:!0};const i=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-D5ZtD7V0.js").then(t=>t.O),__vite__mapDeps([]));return e({serverURL:o.serverURL})}catch{console.error("@waline/client is not installed!")}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
