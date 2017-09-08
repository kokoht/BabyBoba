import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCAndawPNofKLlN9W3EjWGYtqYnH1CneSc',
  databaseURL: 'https://movie-trailer-175012.firebaseio.com',
  projectId: 'movie-trailer-175012',
  storageBucket: 'movie-trailer-175012.appspot.com',
  messagingSenderId: '584104791052'
}
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()
var baby = db.ref('baby')
// var babyTwo = db.ref('baby/two')

const store = new Vuex.Store({
  state: {
    count: 0,
    counttwo: 0
  },
  mutations: {
    increment (state) {
      state.count++
      baby.child('one').set({
        count: state.count
      })
      baby.child('one').on('value', function (snapshot) {
        state.count = snapshot.val().count
      },
        function (errorObject) {
          console.log('The read failed: ' + errorObject.code)
        }
      )
    },
    incrementtwo (state) {
      state.counttwo++
      baby.child('two').set({
        count: state.counttwo
      })
      baby.child('two').on('value', function (snapshot) {
        state.counttwo = snapshot.val().count
        console.log('ini state countWo', state.counttwo)
      },
        function (errorObject) {
          console.log('The read failed: ' + errorObject.code)
        }
      )
    },
    reset (state) {
      state.counttwo = 0
      state.count = 0

      baby.child('one').set({
        count: state.count
      })

      baby.child('one').on('value', function (snapshot) {
        state.count = snapshot.val().count
        console.log('ini state countOne', state.count)
      },
        function (errorObject) {
          console.log('The read failed: ' + errorObject.code)
        }
      )

      baby.child('two').set({
        count: state.counttwo
      })
      baby.child('two').on('value', function (snapshot) {
        state.counttwo = snapshot.val().count
        console.log('ini state countWo', state.counttwo)
      },
        function (errorObject) {
          console.log('The read failed: ' + errorObject.code)
        }
      )
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
