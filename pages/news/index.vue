<template>
  <div class="index">
    <div class="index-banner">
      <div ref="mySwiper" v-swiper:mySwiper="swiperOption">
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
    <div class="index-main">
      <div class="main-header">新闻动态</div>
      <div class="main-list">
        <div class="list-item" v-for="(item, index) in newsList" :key="index" @click="gotoPage(item.id)">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-img">
            <img :src="item.imgStr" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @desc 新闻页
 * @author changz
 * */

export default {
  name: 'News',
  // 当前页面使用的基础布局
  layout: 'BasicLayout',
  // 用户获取数据
  asyncData ({ $axios, error}) {
    const params = {
      pageNum: 1,
      pageSize: 9
    }
    return $axios.$get('/api/news/pages', {
      params
    }).then(res => {
      const { records } = res.data
      console.log(records)
      return { newsList: records }
    }).catch(err => {
      console.log(err)
      error({ statusCode: err.code, message: err.message })
      return { newsList: [] }
    })
  },
  
  data() {
    return {
      title: '新闻页',
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
    swiperData() {
      return this.$refs.mySwiper.swiper
    }
  },
  created() {
    this.$nextTick(() => {
      console.log(this.$refs.mySwiper)
      console.log(this.swiperData)
    })
  },
  methods: {
    gotoPage(id) {
      this.$router.push({
        path: `/news/${id}`
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
    height: 400px;
    background-color: #fff;
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
</style>
