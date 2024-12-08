import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {text: '友情链接', icon: 'icon_xinyong_xianxing_jijin-', link: 'https://bloggersht.com.cn/blog/link.html'},
  {text:'小说',icon:'tushu', link: 'https://read.bloggersht.com.cn/'},
  {text:'相册',icon:'xiangce', link: 'https://album.bloggersht.com.cn'},
  {text:'游戏',
    icon:'game',
    children:[
      {text:'我的世界1.8网页版',link:'https://bloggersht.com.cn/game.html'},
      {text:'网页小游戏50+',link:'https://bloggersht.com.cn/imc.html'},
      {text:'原神',link:'https://yuanshen-web-s1s3.vercel.app/'},
    ]
  },
  {text:'备用站点',
    icon:'web',
    children:[
      {text:'备用站点1',link:'https://0x101008-github-io.vercel.app/'},
      // {text:'备用站点2',link:'https://sht15nb.b-cdn.net'},
    ]
  },
]);

