import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: '友情链接', icon: 'icon_xinyong_xianxing_jijin-', link: '#'},
  {
    text:'游戏',
    icon:'game',
    children:[
      '/game.html'
    ]
  }
]);
