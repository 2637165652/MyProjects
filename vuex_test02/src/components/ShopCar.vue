<template>
  <div id=shopcar class="over-tabbar">
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <div>我是购物车</div>
    <!-- 子路由需完整，包括父路由 -->
    <router-link to="/shopcar/goods">子路由</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'ShopCar'
}
</script>

<style lang="stylus" scoped>

</style>
