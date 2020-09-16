<template>
  <mt-header :title="header_title">
  </mt-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      header_title: ''
    }
  },
  props: {
    title: String
  },
  created () {
    console.log(this.title)
    this.header_title = this.title
  }

}
</script>

<style lang="stylus" scoped>
.mint-header
  margin-bottom 20px
</style>
