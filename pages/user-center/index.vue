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
  // 用户获取数据
  asyncData(context) {
    return { name: 'World' }
  },

  data() {
    return {
      title: '个人中心'
    }
  }
}
</script>
