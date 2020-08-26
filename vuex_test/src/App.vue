<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    TabBar
  }
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
