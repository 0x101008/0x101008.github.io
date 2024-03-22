function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o,u as n}from"./app-DKyDIAZE.js";const s=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-DKyDIAZE.js").then(r=>r.L),__vite__mapDeps([])),t=n();return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{s as updatePageview};
