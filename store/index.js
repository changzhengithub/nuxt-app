/**
 * @desc vuex状态管理器
 * vuex根模块
 * */ 

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}