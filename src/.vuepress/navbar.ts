import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: '友情链接', icon: '', link: '#'},
  {
    text:'游戏',
    icon:'game',
    children:[
      '/game.html'
    ]
  }
]);
