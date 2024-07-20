import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
  '/',
  {text: 'Friendly Link', icon:'icon_xinyong_xianxing_jijin-', link: 'https://bloggersht.com.cn/blog/link.html'},
  {text:'anime',icon:'dongman', link: 'https://bloggersht.com.cn/anime/navigation.html'},
  {text:'game',
    icon:'game',
    children:[
      {text:'Minecraft 1.8 Web Edition', link: 'https://bloggersht.com.cn/game.html'},
      {text:'Web mini-games 50+',link:'https://bloggersht.com.cn/imc.html'},
      {text:'Web speed test',link:'https://bloggersht.com.cn/speedtest/index.html'},
      {text:'Genshin',link:'https://yuanshen-web-s1s3.vercel.app/'},
    ]
  },
  {text:'Alternate site', 
    icon:'web', 
    children:[
      {text:'Alternate site 1', link:'https://0x101008-github-io.vercel.app/'}, 
      {text:'Alternate site 2', link:'https://0x101008-github-io.vercel.app/'},
    ]
  }
]);
