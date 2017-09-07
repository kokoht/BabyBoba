<template>
  <div id="app">
    <!-- <audio autoplay loop>
      <source src="./assets/babyshark.mp4" type="audio/MP4">
    Your browser does not support the audio element.
    </audio> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
