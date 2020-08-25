<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="query">发起axios请求</button>
    <button @click="query3">发起post请求</button>
  </div>
</template>

<script>
import { getUser, login } from '../api/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      id: 1,
      name: '',
      age: 15
    }
  },
  methods: {
    query () {
      getUser(this.id).then(res => {
        console.log(res.data)
        console.log(typeof res.data)
      }).finally(() => {})
    },
    query3 () {
      login('huang', '123456')
        .then(res => {
          console.log(res.data)
        })
        .catch(() => {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
 color red

</style>
