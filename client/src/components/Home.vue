<template lang="html">
  <div class="">
    <button type="button" name="button" @click ="tambahCount">Click Me</button>
    <p>{{count}}</p>
    <h1 v-if="count == tempsCount" data-toggle="modal" data-target="#myModal"   >You Lose</h1>
    <div :class="modalClass" id="myModal" role="dialog" v-if="count == tempsCount">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      test: 'saya ganteng',
      tempsCount: 'ooioi',
      timer: '',
      modalClass: 'modal fade'
    }
  },
  methods: {
    tambahCount () {
      this.count += 1
      var self = this
      clearTimeout(this.timer)
      this.timer = setTimeout(function () {
        console.log(self.tempsCount)
        self.modalClass += ' in'
        self.tempsCount = self.count
      }, 8000)
    },
    closeModal () {
      this.modalClass -= ' in'
    }
  },
  created () {
  }
}
</script>

<style lang="css">
</style>
