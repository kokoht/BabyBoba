<template lang="html">
  <div>


<!-- here to connect with firebase n vuefire -->
    <!-- <h3>here new button </h3> -->
      <!-- <button @click="addPlayerOne">Add 1</button> -->
      <!-- <p>The button above has been clicked {{ baby1.babyone }} times.</p> -->
<!-- end here -->
    <h1>WELCOME TO BABY BOBA</h1>
    <h2> {{showDiff}} </h2>
    <!-- <h1> {{showWinner}} </h1> -->
    <div v-if="showWinner" :class="modalClass" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display:block">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Congratulations</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{showWinner}}
          </div>
          <div class="modal-footer">
            <button type="button" @click="reset" class="btn btn-primary" data-dismiss="modal">Play again</button>
          </div>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class="row">
        <div class="col-md-6">
          <playerone> </playerone>
        </div>
        <div class="col-md-6">
          <playertwo> </playertwo>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
button {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}

</style>

<script>

// import firebase from 'firebase'
import Vuefire from 'vuefire'
import Vue from 'vue'

Vue.use(Vuefire)

// var config = {
//   databaseURL: 'https://vuefire-69bb2.firebaseio.com',
//   projectId: 'vuefire-69bb2'
// }
// var firebaseApp = firebase.initializeApp(config)
// var db = firebaseApp.database()
// var dbRefBaby = db.ref('baby/1')

import { mapMutations, mapActions } from 'vuex'
import playerone from '@/components/playerone'
import playertwo from '@/components/playertwo'

export default {
  data () {
    return {
      playerone: 0
    }
  },
  // firebase: {
  //   firebaseDatas: dbRefBaby,
  //   baby1: {
  //     source: dbRefBaby,
  //     asObject: true
  //   }
  // },
  methods: {
    // addPlayerOne () {
    //   this.playerone += 1
    //   // this.firebaseDatas = this.playerone
    //   this.$firebaseRefs.firebaseDatas.set({
    //     babyone: this.playerone
    //   })
    // },
    ...mapMutations([
      'reset',
      'increment'
    ]),
    ...mapActions([
      'nambahDua'
    ])
  },
  components: {
    playerone,
    playertwo
  },
  computed: {
    showState () {
      return this.$store.state.count
    },
    showDiff () {
      if (this.$store.state.count - this.$store.state.counttwo >= 15 || this.$store.state.counttwo - this.$store.state.count >= 15) {
        if (this.$store.state.count > this.$store.state.counttwo) {
          return 'Player One is AHEAD'
        } else {
          return 'Player Two is AHEAD'
        }
      }
    },
    showWinner () {
      if (this.$store.state.count === 110 || this.$store.state.counttwo === 110) {
        if (this.$store.state.count > this.$store.state.counttwo) {
          return 'Player One is THE WINNER'
        } else {
          return 'Player Two is THE WINNER'
        }
      }
    }
  },
  watch: {
    showWinner: function (val) {
      console.log(val)
      if (this.$store.state.count === 110 || this.$store.state.counttwo === 110) {
        this.modalClass += ' show'
      }
    }
  },
  created () {
    this.$store.commit('reset')
  }
}
// $('#myModal').modal('show')
</script>

<style>

</style>
