<template>
  <div class="index">
    <div class="index-banner">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/images/banner01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/banner02.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/banner03.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/banner04.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <a-button type="primary">按钮</a-button>
    
    <a-button type="primary">按钮{{ counter }}</a-button>
  </div>
</template>

<script>
/**
 * @desc 首页
 * @author changz
 * */

import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  // 当前页面使用的基础布局
  layout: 'BasicLayout',
  // 用户获取数据
  asyncData (context) {
    return { name: 'World' }
  },
  
  data() {
    return {
      title: '首页',
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },
  created() {
    this.getStatDatga()
  },
  methods: {
    getStatDatga() {
      this.codeLoad = true
      this.$axios.$get('/api/system/system').then(res => {
        this.codeLoad = false
        if (res.code !== 200) {
          this.$notification.warning({
            message: '提示',
            description: res.msg
          })
          return
        }
        const data = res.data
        console.log(data)
      }).catch(err => {
        this.codeLoad = false
        this.$notification.warning({
          message: '提示',
          description: err.message
        })
      })
    }
  }

}
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  .index-banner {
    width: 100%;
    height: 500px;
    background-color: #fff;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>