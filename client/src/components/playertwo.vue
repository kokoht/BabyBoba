<template lang="html">
  <div class='container'>
    <h1>{{showState}}</h1>

    <button type="button" @click="incrementtwo" class="shake-lr">
      <img v-if="showState >= 0 && showState <30" src="../assets/baby.png">
      <img v-if="showState >= 30 && showState <50" src="../assets/mama.png">
      <img v-if="showState >= 50 && showState <80" src="../assets/grandma.png">
      <img v-if="showState >= 80 && showState <100" src="../assets/grandpa.png">
      <img v-if="showState >= 100 && showState <110" src="../assets/papa.png">
    </button>

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

export default {
  computed: {
    showState () {
      return this.$store.state.counttwo
    }
  },
  methods: {
    ...mapMutations([
      'incrementtwo'
    ])
  }
}
</script>

<style lang="css">
</style>
