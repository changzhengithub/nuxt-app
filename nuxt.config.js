export default {
  // 打包模式 static 静态预渲染 server 服务端渲染
  target: 'static',

  // 全局head设置
  head: {
    title: 'Nuxt预渲染',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'Nuxt' },
      { hid: 'description', name: 'description', content: '这是一个Nuxt应用程序' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // 全局CSS/LESS/SCSS引入
  css: [
    // 'ant-design-vue/dist/antd.less'
    '@/assets/css/reset.css',
    '@/assets/less/main.less',
    '@/assets/less/theme.less'
  ],

  // 引入插件
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios', // 配置@nuxtjs/axios的接口请求插件
    '@/plugins/swiper'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // 路由设置
  router: {
    // 中间件
    middleware: 'auth' // 权限校验中间件
  },

  // nuxt内置模块
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // nuxt自带的axios请求模块
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],

  // Axios 模块设置
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://jsonplaceholder.typicode.com'
    // 是否开启代理
    // proxy: true
  },

  // 跨域设置
  // proxy: {
  //   '/content': {
  //     target: 'https://www.ahss.com.cn', // 目标接口域名
  //     pathRewrite: {
  //       '^/content': '/api' // 把 /api 替换成 /
  //     }
  //   }
  // },

  // less全局配置
  styleResources: {
    less: ['@/assets/less/_flex.less', '@/assets/less/_common.less', '@/assets/less/theme.less']
  },

  // 静态文件打包配置
  generate: {
    routes: ['/news/1', '/news/2', '/news/3', '/news/4', '/news/5', '/news/6', '/news/7', '/news/8', '/news/9', '/news/10']
  },

  // 构建配置，自定义 webpack 的构建配置
  build: {
    loaders: {
      less: {
        lessOptions: { // less-loader 5.x以上才有 lessOptions , 5.x 以下直接配置
          javascriptEnabled: true
        }
      }
    }
  }
}
