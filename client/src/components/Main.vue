<template lang="html">
  <div>
    <h1>{{showState}}</h1>
    <button type="button" @click="increment">+</button>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    showState () {
      return this.$store.state.count
    }
  },
  methods: {
    ...mapMutations([
      'increment'
    ])
  }
}
</script>

<style lang="css">
</style>
