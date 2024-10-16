<template>
  <div class="index">
    <div class="index-wrap">
      <div class="wrap-header">{{ newsDetail.title }}</div>
      <div class="wrap-content">{{ newsDetail.body }}</div>
    </div>
  </div>
</template>

<script>
/**
 * @desc 新闻详情页
 * @author changz
 * */

export default {
  name: 'NewsDetail',
  // 当前页面使用的基础布局
  layout: 'BasicLayout',
  // 用户获取数据
  asyncData ({ $axios, params, error }) {
    return $axios.$get(`/posts/${params.id}`).then(res => {
      return { newsDetail: res }
    }).catch(err => {
      error({ statusCode: err.code, message: err.message })
      // return { newsList: [] }
    })
  },
  data() {
    return {
      title: '新闻详情页'
    }
  },
  head () {
    return {
      title: 'Nuxt预渲染-新闻详情',
      meta: [
        { hid: 'nuxtkeywords', name: 'keywords', content: '新闻、动态' },
        { hid: 'nuxtdescription', name: 'description', content: '公司新闻动态' }
      ]
    }
  },
  methods: {
  }

}
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  background-color: #fff;
  .index-wrap {
    width: 1000px;
    padding: 40px 0;
    margin: 0 auto;
    .wrap-header {
      width: 100%;
      margin-bottom: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      font-size: 30px;
      color: #1e1f23;
    }
    .wrap-content {
      width: 100%;
      font-size: 20px;
      color: #333;
      line-height: 2;
    }
  }
}
</style>
