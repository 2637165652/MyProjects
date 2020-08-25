<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="query">发起axios请求</button>
    <button @click="query2">发起axios请求2</button>
    <button @click="query3">发起post请求</button>
  </div>
</template>

<script>
// import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  methods: {
    query () {
      this.$axios.get('/user', {
        params: {
          id: 10
        }
      }).then(res => {
        console.log(res.data)
        console.log(typeof res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    query2 () {
      this.$axios({
        method: 'get',
        url: '/user',
        params: {
          name: 'huang'
        }
      }).then(res => {
        console.log(res.data)
        console.log(typeof res)
      }).catch(err => {
        console.log(err)
      })
    },
    query3 () {
      this.$axios({
        method: 'post',
        url: '/post',
        data: {
          age: 22
        }
      }).then(res => {
        console.log(res.data)
      }).catch(() => {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
 color red

</style>
