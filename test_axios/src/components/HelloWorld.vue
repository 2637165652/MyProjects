<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="query">发起axios请求</button>
    <button @click="query2">发起axios请求2</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  methods: {
    query () {
      this.$axios.get('/', {
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
        url: '/',
        params: {
          name: 'huang'
        }
      }).then(res => {
        console.log(res.data)
        console.log(typeof res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
