export default {
  // 打包模式 static 静态预渲染 server 服务端渲染
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt预渲染',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'Nuxt' },
      { hid: 'description', name: 'description', content: '这是一个Nuxt应用程序' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // 全局CSS/LESS/SCSS引入
  css: [
    // 'ant-design-vue/dist/antd.css', 
    // 'ant-design-vue/dist/antd.less'
    '@/assets/less/main.less',
    '@/assets/less/theme.less'
  ],

  // 引入插件
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios',
    '@/plugins/swiper'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // 中间件
  router: {
    middleware: 'auth'
  },

  // nuxt内置模块
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // nuxt自带的axios请求模块
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true
  },

  // 跨域设置
  proxy: {
    '/api': {
      // target: 'https://www.ahss.com.cn', // 目标接口域名
      target: 'http://192.168.100.14:3351', // 目标接口域名
      // pathRewrite: {
      //   '^/api': '/', // 把 /api 替换成 /
      // }
    }
  },

  // less配置
  styleResources: {
    less: ['@/assets/less/_flex.less', '@/assets/less/_common.less', '@/assets/less/theme.less']
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
