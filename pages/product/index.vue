<template>
  <div class="index">
    <h1>{{ title }}</h1>
    <a-button type="primary">按钮</a-button>
  </div>
</template>

<script>
/**
 * @desc 产品页
 * @author changz
 * */
export default {
  name: 'Product',
  // 当前页面使用的基础布局
  layout: 'BasicLayout',
  // 用户获取数据
  asyncData (context) {
    return { name: 'World' }
  },
  
  data() {
    return {
      title: '产品页'
    }
  },

}
</script>
