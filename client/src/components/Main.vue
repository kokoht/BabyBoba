<template lang="html">
  <div>
    <h1>HALLLOO in main </h1>
    <h2> {{showDiff}} </h2>
    <h1> {{showWinner}} </h1>
    <div class='container'>
      <div class="row">
        <div class="col-sm-6">
          <playerone> </playerone>
        </div>
        <div class="col-sm-6">
          <playertwo> </playertwo>
        </div>
        <div v-if="showWinner" :class="modalClass" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display:block">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
import { mapMutations } from 'vuex'
import playerone from '@/components/playerone'
import playertwo from '@/components/playertwo'

export default {
  data () {
    return {
      modalClass: 'modal fade'
    }
  },
  methods: {
    ...mapMutations([
      'reset'
    ])
  },
  components: {
    playerone,
    playertwo
  },
  computed: {
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
  }
}
// $('#myModal').modal('show')
</script>

<style>

</style>
