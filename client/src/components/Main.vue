<template lang="html">
  <div>
    <h1>{{showState}}</h1>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="nambahDua(2)"> +2 </button>


<!-- here to connect with firebase n vuefire -->
    <h3>here new button </h3>
      <button @click="addPlayerOne">Add 1</button>
      <p>The button above has been clicked {{ playerone }} times.</p>
<!-- end here -->
  </div>
</template>

<script>
import firebase from 'firebase'
import Vuefire from 'vuefire'
import Vue from 'vue'

Vue.use(Vuefire)

var config = {
  databaseURL: 'https://vuefire-69bb2.firebaseio.com',
  projectId: 'vuefire-69bb2'
}
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()
var dbRefBaby = db.ref('baby/1')

import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      playerone: 0
    }
  },
  firebase: {
    firebaseDatas: dbRefBaby
  },
  computed: {
    showState () {
      return this.$store.state.count
    }
  },
  methods: {
    addPlayerOne () {
      this.playerone += 1
      this.$firebaseRefs.firebaseDatas.set({
        babyone: this.playerone
      })
    },
    ...mapMutations([
      'increment'
    ]),
    ...mapActions([
      'nambahDua'
    ])
  }
}
</script>

<style lang="css">
</style>
