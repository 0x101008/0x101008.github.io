const i=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,u=new Map,s=new Map;function h(e){var t;return(t=e.match(i))==null?void 0:t[1]}async function b(e,t){if(u.has(e))return u.get(e);if(s.has(e))return s.get(e);const n=new Promise(async c=>{const r=["maxresdefault","sddefault","hqdefault"];for(const a of r)for(const f of[!0,!1]){const o=p(e,a,f);if((await fetch(o,{mode:"no-cors",signal:t.signal})).status<400){u.set(e,o),c(o);return}}}).catch(()=>"").finally(()=>s.delete(e));return s.set(e,n),n}function p(e,t,n){return`https://i.ytimg.com/${n?"vi_webp":"vi"}/${e}/${t}.${n?"webp":"jpg"}`}export{b as findYouTubePoster,h as resolveYouTubeVideoId};