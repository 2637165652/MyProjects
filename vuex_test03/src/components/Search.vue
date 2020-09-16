<template>
  <div class="over-tabbar">
    <div class="sh-content" :style="{height: !isLongText?'auto': showHeight+'px'}" ref="text1">
      <span>介绍</span>
      <p >
          项目开发商是XXXXXXXX房地产哈哈哈哈哈哈哈哈哈哈哈Lorem ipsum dolor sit amet, consectetur adipisicing elit.很关键的韩国代购换个换个换个符合规范和规划和规划黄沙古渡上个大号还是打个电话很关键的韩国代购换个换个换个符合规范和规划和规划黄沙古渡上个大号还是打个电话
          Accusantium很关键的韩国代购换个换个换个符合规范和规划和规划黄沙古渡上个大号还是打个电话很关键的韩国代购换个换个换个符合规范和规划和规划黄沙古渡上个大号还是打个电话很关键的韩国代购换个换个换个符合规范和规划和规划黄沙古渡上个大号还是打个电话
      </p>
    </div>
    <div v-show="isLongText">
      ...<button @click="downHandler" v-if="showMore">﹥展开</button>
      <button @click="upHandler" v-else>﹤收起</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  data () {
    return {
      showHeight: 120,
      isLongText: false,
      showMore: true
    }
  },
  mounted () {
    var h = this.$refs.text1.offsetHeight
    if (h > this.showHeight) {
      this.isLongText = true
    }
    console.log(this.$refs.text1.offsetHeight)
  },
  methods: {
    downHandler () {
      this.$refs.text1.style.height = 'auto'
      this.showMore = false
    },
    upHandler () {
      this.$refs.text1.style.height = this.showHeight + 'px'
      this.showMore = true
    }
  }

}
</script>

<style lang="stylus">
.sh-content
  overflow hidden
</style>
