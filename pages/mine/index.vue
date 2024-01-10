<template>
  <div class="index">
    <h1>{{ title }}</h1>
    <a-button type="primary">按钮</a-button>
  </div>
</template>

<script>
/**
 * @desc 我的
 * @author changz
 * */
export default {
  name: 'Mine',
  // 当前页面使用的基础布局
  layout: 'BasicLayout',
  // 用户获取数据
  asyncData (context) {
    return { name: 'World' }
  },
  
  data() {
    return {
      title: '我的'
    }
  },
  head () {
    return {
      title: 'Nuxt预渲染-我的',
      meta: [
        { hid: 'nuxtkeywords', name: 'keywords', content: '我的' },
        { hid: 'nuxtdescription', name: 'description', content: '我的' }
      ]
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>
