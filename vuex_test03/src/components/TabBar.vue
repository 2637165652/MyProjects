<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        <img slot="icon" src="@/images/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="@/images/eye_protection.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <img slot="icon" src="@/images/cart.png">
        <mt-badge size="small" type="error">{{ $store.state.num }}</mt-badge>
        购物车
      </mt-tab-item>
      <mt-tab-item id="user">
        <!-- <mt-badge size="small">1</mt-badge> -->
        <img slot="icon" src="@/images/nickname.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      selected: 'index'
    }
  },
  watch: {
    selected: function (newV, oldV) {
      this.$router.push(`/${this.selected}`)
    }
  }

}
</script>

<style lang="stylus" scoped>
#tab-bar
 .mint-badge
    position absolute
    top 5px
    right 28%
</style>
