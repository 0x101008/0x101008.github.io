import{_ as i}from"./app-TxSL1PIM.js";var o={provider:"Waline",dark:"auto",serverURL:"https://comment.bloggersht.com.cn",reaction:["/emoji/img_love.png","/emoji/gif_hutao_bite.gif","/emoji/gif_thump.gif","/emoji/gif_tui.gif","/emoji/img_good.png"],comment:!0,pageview:!0,copyright:!0};const a=async()=>{try{const{pageviewCount:e}=await i(()=>import("./app-TxSL1PIM.js").then(t=>t.K),__vite__mapDeps([]));return e({serverURL:o.serverURL})}catch{console.error("@waline/client is not installed!")}};export{a as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
