<template>
  <!-- 主体部分  -->
  <el-main>
    <router-view></router-view>
  </el-main>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.el-main {
  // background-color: #eaedf1;
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
  padding: 0;
}
</style>