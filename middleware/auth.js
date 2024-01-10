/**
 * @desc 权限验证
 * 判断哪些页面需要登录，跳转到登录接口
 * */ 
import storage from 'store'
export default function ({ app, route, redirect, store }) {
  const whiteList = ['/', '/product', '/news', '/about']
  const empowerList = ['/empower']
  if (process.client) {
    const token = storage.get('ACCESS_TOKEN')
    if (!whiteList.includes(route.path)) {
      if (token) {
        if (!store.state.isLogin) {
          store.dispatch('getUserInfo')
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (!empowerList.includes(route.path)) {
          redirect('/empower')
        }
      }
    }
  }
}