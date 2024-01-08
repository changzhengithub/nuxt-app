import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'

// swiper有Window对象，在服务端无法渲染
if (process.client) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}