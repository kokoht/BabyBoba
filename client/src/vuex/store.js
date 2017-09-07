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
  }
})

export default store
