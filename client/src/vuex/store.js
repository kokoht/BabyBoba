import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 500
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementdua (state, payload) {
      state.count = payload
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
