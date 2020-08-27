<template>
  <div class="over-tabbar">
    我是商品
    <div>
      <mt-button @click.native="subtract">-</mt-button>{{ num }}<mt-button @click.native="plus">+</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      num1: 0
    }
  },
  computed: {
    num: {
      // console.log(this.$store.state.num)
      get: function () {
        return this.$store.state.num
      },
      set: function (newV) {
        this.$store.commit('setValue', newV)
      }
    }
  },
  created () {
    if (localStorage.getItem('goods')) {
      this.num = JSON.parse(localStorage.getItem('goods')).num
    } else {
      this.num = 0
      localStorage.setItem('goods', JSON.stringify({num: this.num}))
    }
  },
  methods: {
    subtract () {
      if (this.num > 0) this.num--
      localStorage.setItem('goods', JSON.stringify({num: this.num}))
    },
    plus () {
      this.num++
      localStorage.setItem('goods', JSON.stringify({num: this.num}))
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
