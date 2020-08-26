<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="@/images/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="@/images/eye_protection.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="@/images/cart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
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
      selected: '发现'
    }
  }

}
</script>

<style>

</style>
