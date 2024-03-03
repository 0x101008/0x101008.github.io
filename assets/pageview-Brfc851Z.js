import{_ as t}from"./app-lUjHLzf3.js";const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./pageview_vuepress-plugin-comment2-BIHI7g3E.js"),__vite__mapDeps([]));return e({serverURL:COMMENT_OPTIONS.serverURL})}catch{console.error("@waline/client is not installed!")}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
