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
  position: absolute;
  padding: 0;
  top: 65px;
  width: 100%;
  bottom: 0;
  background-color: #f2f2f2;
}
.el-main::-webkit-scrollbar {
  width: 2px;
}

/*滚动条滑块*/
.el-main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #373d41;
}

/*滚动条轨道*/
.el-main::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  background: #fff;
}
</style>