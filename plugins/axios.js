import storage from 'store'

export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log(config)
    const token = storage.get('ACCESS_TOKEN')
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    if (token) {
      config.headers['Authorization'] = token
    }
  })
  
  $axios.onResponse(response => {
    console.log(response)
    console.log('Making response to ' + response)

    if (response) {
      const data = response.data
  
      if (response.status === 404) {
        // notification.warning({
        //   title: '不存在该页面',
        //   message: data.msg
        // })
        console.log('不存在该页面：' + data.msg)
        return new Promise(() => {})
      }
      if (response.status === 401) {
        // notification.warning({
        //   title: '不存在该页面',
        //   message: data.msg
        // })
        console.log('授权验证失败：' + data.msg)
        return new Promise(() => {})
      }
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}