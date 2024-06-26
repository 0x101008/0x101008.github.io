import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "shtの小窝",
  description: "个人博客",

  theme,

  shouldPrefetch: false,
  markdown:{
    headers:{
      level:[2,3,4,5,6],
    }
  },
  plugins: [
    oml2dPlugin({
      models: [
        {
          path: "https://model.oml2d.com/Pio/model.json",
          scale: 0.4,
          position: [0, 50],
          stageStyle: {
            height: 300
          }
        },
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
          scale: 0.12,
          position: [-10, 50],
          stageStyle: {
            width: 350
          }
        },
        {
          path: "https://model.oml2d.com/cat-black/model.json",
          scale: 0.15,
          position: [0, 20],
          stageStyle: {
            height: 350
          }
        },
        {
          path: "https://model.oml2d.com/HK416-1-normal/model.json",
          position: [0, 60],
          scale: 0.08,
          stageStyle: {
            height: 450
          }
        }
      ]
    })
  ]
});
