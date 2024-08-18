import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://bloggersht.com.cn/",

  author: {
    name: "sht",
    url: "https://bloggersht.com.cn/",
  },
  iconPrefix: 'iconfont icon-',
  iconAssets: "//at.alicdn.com/t/c/font_4478412_e6d93pvs54n.css",

  logo: "/logo.jpg",

  repo: "0x101008/0x101008.github.io",

  docsDir: "src",
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      displayFooter: true,

      editLink: false,

    },
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      displayFooter: true,

      editLink: false,
    }


  },
  // 博客相关
  blog: {
    description: "一个热爱二次元的码农",
    intro: "/intro.html",
    articlePerPage: 5,
    medias: {
      BiliBili: "https://space.bilibili.com/3493289428781167",
      Email: "sht15nb@163.com",
      GitHub: "https://github.com/0x101008?tab=repositories",
      Instagram: "https://www.instagram.com/sht15nb/",
      Qzone: "https://user.qzone.qq.com/1825033622",
      Discord:"https://discord.gg/8He7RYnf",
      Zhihu:"https://www.zhihu.com/people/s-54-23-45",
      Steam:'https://steamcommunity.com/profiles/76561199699905596/',
      Twitter:'https://x.com/sht1757062',
      Gmail:'luoyebusui@gmail.com',
      AFDian:'https://afdian.net/u/1acad27ede8c11ee8fbf5254001e7c00',
      Youtube:'https://www.youtube.com/@luoyebusui'
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/python": ["114514",'823453817Aa'],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    
    search: {
      maxSuggestions: 16,
      hotKeys: [],
      // 你的选项
      locales: {
        "/": {
          placeholder: "搜索",
        }
      }
    },

    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    comment: {
      provider: "Waline",
      serverURL: "https://comment.bloggersht.com.cn",
      reaction:[
        '/emoji/img_love.png',
        '/emoji/gif_hutao_bite.gif',
        '/emoji/gif_thump.gif',
        '/emoji/gif_tui.gif',
        '/emoji/img_good.png',
      ],
      comment:true,
      pageview:true,
      copyright:true,
      dark:'auto',
    },
    

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      tasklist: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      revealJs: true,



      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
