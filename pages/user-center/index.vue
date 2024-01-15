<template>
  <div class="index">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
/**
 * @desc 个人中心
 * @author changz
 * */
export default {
  name: 'About',
  data() {
    return {
      title: '个人中心'
    }
  },

  head () {
    return {
      title: 'Nuxt预渲染-个人中心',
      meta: [
        { hid: 'nuxtkeywords', name: 'keywords', content: '新闻、动态' },
        { hid: 'nuxtdescription', name: 'description', content: '公司新闻动态' }
      ]
    }
  }
}
</script>
