<template lang="html">
  <div>
    <h1>{{showState}}</h1>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="nambahDua(2)"> +2 </button>

  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    showState () {
      return this.$store.state.count
    }
  },
  methods: {
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
