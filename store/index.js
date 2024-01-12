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
  getUserInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/owner/info')
        .then((response) => {
          console.log(response)
          commit('setUserInfo', response.data.data)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}