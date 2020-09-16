<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">家教信息</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的家教</template>
            <el-menu-item index="2-1">未联系家教</el-menu-item>
            <el-menu-item index="2-2">已联系家教</el-menu-item>
            <el-submenu index="2-3">
              <template slot="title">我的家教</template>
              <el-menu-item index="2-3-1">未联系家教</el-menu-item>
              <el-menu-item index="2-3-2">已联系家教</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" >个人中心</el-menu-item>
          <el-menu-item index="4">消息管理</el-menu-item>
        </el-menu>
      </el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  components: {
    Header
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.activeIndex = key
    }
  }
}
</script>

<style lang="stylus">
#app
  min-width 1200px
  height 100%
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}
.el-menu
  // padding 0px 50px
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  // padding: 10px 0px;
}
</style>
