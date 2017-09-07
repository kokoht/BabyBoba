import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    counttwo: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }, 
    incrementtwo (state) {
      state.counttwo++
    },
    reset (state) {
      state.counttwo = 0
      state.count = 0
    }
  },
  actions: {
    nambahDua ({commit, state}, payload) {
      const newCount = state.count + payload
      commit('incrementdua', newCount)
    }
  }
})

export default store
