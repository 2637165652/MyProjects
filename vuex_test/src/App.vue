<template>
  <div id="app">
    <Header title="迷你小商城"></Header>
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'App',
  data () {
    return {
      msg: 88
    }
  },
  components: {
    TabBar,
    Header
  },
  created () {
    // var test = this.msg || 'bb'
    // console.log(this.msg1, test)
  },
  methods: {
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
  /* margin-bottom: 20px; */
}
body{
  margin: 0px;
}
</style>
