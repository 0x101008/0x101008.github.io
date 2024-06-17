import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: '友情链接', icon: 'icon_xinyong_xianxing_jijin-', link: 'https://bloggersht.com.cn/blog/link.html'},
  {text:'动漫',icon:'dongman', link: 'https://bloggersht.com.cn/anime/navigation.html'},
  {text:'游戏',
    icon:'game',
    children:[
      {text:'我的世界1.8网页版',link:'https://bloggersht.com.cn/game.html'},
      {text:'网页小游戏50+',link:'https://bloggersht.com.cn/imc.html'},
      {text:'网页测速',link:'https://bloggersht.com.cn/speedtest/index.html'},
    ]
  },
  
]);

