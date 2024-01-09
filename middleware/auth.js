// middleware/auth.js

import storage from 'store'
export default function ({ route, redirect, store }) {
  if (process.client) {
    const token = storage.get('ACCESS_TOKEN')
    if (!token) {
      redirect('/login')
    } else if (!store.isLogin) {
      store.dispatch('getUserInfo')
    }
  }
}