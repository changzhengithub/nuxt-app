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
    <div class="index-container">
      <div class="container-section">
        <div class="section-wrap">
          <div class="wrap-header">新闻动态</div>
          
          <div class="wrap-list">
            <div class="list-item" v-for="(item, index) in newsList" :key="index" @click="gotoPage(item.id)">
              <div class="item-img">
                <img :src="baseUrl + item.imgStr" alt="">
              </div>
              <div class="item-title">{{ item.title }}</div>
            </div>
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
    return $axios.$get('/content/news/pages', {
      params
    }).then(res => {
      const { records } = res.data
      return { newsList: records }
    }).catch(err => {
      error({ statusCode: err.code, message: err.message })
      // return { newsList: [] }
    })
  },

  data() {
    return {
      baseUrl: 'https://www.ahss.com.cn',
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
  head () {
    return {
      title: 'Nuxt预渲染-新闻动态',
      meta: [
        { hid: 'nuxtkeywords', name: 'keywords', content: '新闻、动态' },
        { hid: 'nuxtdescription', name: 'description', content: '公司新闻动态' }
      ]
    }
  },
  computed: {
    swiperData() {
      return this.$refs.mySwiper.swiper
    }
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
        .wrap-list {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          .list-item {
            width: 33.3%;
            padding: 0 20px;
            margin-bottom: 50px;
            background-color: #fff;
            cursor: pointer;
            .item-title {
              width: 100%;
              font-family: PingFang SC;
              font-size: 20px;
              color: #1e1f23;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .item-img {
              width: 100%;
              height: 240px;
              margin-bottom: 20px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
}
</style>
