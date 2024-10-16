/**
 * @desc vuex状态管理器
 * vuex根模块
 * */

export const state = () => ({
  userInfo: null,
  isLogin: false,
  counter: 0
})

export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin
  },
  increment(state) {
    state.counter++
  }
}

export const actions = {
  // 获取用户信息，防刷新
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      commit('setUserInfo', {
        id: 1,
        username: '超级管理员'
      })
      // this.$axios.get('/api/owner/info')
      //   .then((response) => {
      //     commit('setUserInfo', response.data.data)
      //     resolve()
      //   })
      //   .catch((err) => {
      //     reject(err)
      //   })
    })
  }
}