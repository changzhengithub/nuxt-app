/**
 * @desc 全局请求拦截
 * */
import storage from 'store'
import notification from 'ant-design-vue/lib/notification'

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    const token = storage.get('ACCESS_TOKEN')
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    if (token) {
      config.headers['Authorization'] = token
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      storage.clearAll()
      notification.warning({
        message: '提示',
        description: '授权验证失败，请重新登录'
      })
      setTimeout(() => {
        // window.location.reload()
        redirect('/empower')
      }, 1000)
      return new Promise(() => { })
    } else if (code !== 200) {
      notification.warning({
        message: '提示',
        description: error.message
      })
      return new Promise(() => { })
    }
  })
}