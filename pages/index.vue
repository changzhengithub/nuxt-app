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
    <div class="index-container">
      <div class="container-section">
        <div class="section-wrap">
          <div class="wrap-header">IT基础设施支撑服务解决方案</div>
          <div class="wrap-desc">依托公司自主研发的“五大服务体系，一个支撑平台”，为用户灵活定制覆盖IT基础设施全生命周期的体系化支撑服务解决方案，满足用户数据中心个性化、全场景的服务需求，让用户IT基础设施运维工作变简单！</div>
          <div class="wrap-detail">
            <img src="@/assets/images/it-service.png" alt="">
          </div>
        </div>
      </div>
      <div class="container-section">
        <div class="section-wrap">
          <div class="wrap-header">业务数字化定制开发解决方案</div>
          <div class="wrap-desc">围绕用户业务场景和需求，为用户量身定制开发软硬件系统，贴身改造优化现有业务，快速响应新的业务变化，助力用户业务创新和数字化转型；针对用户业务数据要素，开展数据治理和分析服务，发掘数据价值，帮助用户科学决策、智慧运营，让用户的核心业务工作变简单！</div>
          <div class="wrap-detail">
            <img src="@/assets/images/it-service.png" alt="">
          </div>
        </div>
      </div>
    </div>
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
  asyncData(context) {
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
    // this.getStatDatga()
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
  overflow: hidden;

  .index-banner {
    width: 100%;
    height: 500px;
    margin-bottom: 30px;
    background-color: #fff;
    overflow: hidden;

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
  .index-container {
    width: 100%;
    overflow: hidden;
    .container-section {
      width: 100%;
      .section-wrap {
        width: 1240px;
        padding: 40px 0;
        margin: 0 auto;
        .wrap-header {
          width: 100%;
          margin-bottom: 40px;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 32px;
          color: @title-color;
          text-align: center;
        }
        .wrap-desc {
          width: 100%;
          margin-bottom: 40px;
          font-family: PingFang SC;
          font-size: 16px;
          color: @desc-color;
          text-align: center;
        }
        .wrap-detail {
          width: 1000px;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>