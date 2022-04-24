export default {
  head: {
    title: "山西应用科技学院图书馆",
    htmlAttrs: {
      lang: "zh"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "山西应用科技学院图书馆开放时间：周一至周五 上午8:00-12:00下午14:00（夏季时间14:30）-21:30 周六、日 上午8:00-12:00下午14:00（夏季时间14:30）-17:30自习室一周七天8：00—21:30开放。地址：山西省太原市山西应用科技学院-图书馆 邮编：000003 电话：400-0351-181普歌计算机研发中心政务事业群提供技术支持"
      },
      ,
      {
        name: "keywords",
        content:
          "山西应用科技学院图书馆,山西教育,就业,培训,本科,专科,高职,山西,山西应用,民办,教育,自主招生,高校,应用科技,对口"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src:
          "https://cdn.bootcdn.net/ajax/libs/vue-lazyload/1.3.3/vue-lazyload.js"
      }
    ]
  },

  components: true,

  buildModules: [],
  server: {
    port: 3000,
    host: "0.0.0.0"
  },
  modules: [
    "@nuxtjs/axios" // 引用模块
  ],
  axios: {
    baseURL: process.env.BASE_URL,
    timeout: 20000 // 请求超时时间,
    // proxy: true, // 表示开启代理
    // prefix: "/api"
  },
  // proxy: {
  //   "/api": {
  //     target: process.env.BASE_URL, // 目标接口域名
  //     changeOrigin: true, // 表示是否跨域
  //     pathRewrite: {
  //       "^/api": "/" // 把 /api 替换成 /
  //     }
  //   }
  // },
  css: [
    "@/assets/theme/index.css",
    // 2. 自适应隐藏显示样式
    "element-ui/lib/theme-chalk/display.css",
    "@/assets/css/global.css",
    "@assets/css/iconfont.css"
  ],
  plugins: [
    // 3. 插件
    "@/plugins/element.js",
    "@/plugins/interceptor.js",
    "@/api/home.js",
    "@/api/news.js",
    { src: "@/plugins/vueSeamlessScroll.js", ssr: false },
    {
      src: "@/plugins/vue-lazyload",
      ssr: true
    }
  ],
  loading: "@/components/loading/index.vue",
  components: true,
  build: {
    // 4. 将位于node_modules的模块导出
    transpile: [/^element-ui/],
    // webpack自定义配置
    extend(config, ctx) {},
    extractCSS: true,
    //为 JS 和 Vue 文件设定自定义的 babel 配置。配置elementui按需加载
    babel: {
      plugins: [
        [
          "component",
          { libraryName: "element-ui", styleLibraryName: "theme-chalk" }
        ],
        ["@babel/plugin-syntax-dynamic-import"]
      ]
    },
    //设置扩展项
    extend(config, ctx) {
      if (ctx.isClient) {
        //忽略打包懒加载
        config.externals = {
          "vue-lazyload": "VueLazyload"
        };
      }
    }
  }
};
