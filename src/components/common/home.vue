<template>
  <el-container class="home-container">
    <Nav></Nav>
    <el-container>
      <el-row class="remain">
        <el-col :span="24">
          <Header></Header>
          <Main></Main>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script>
import Nav from '@/components/common/nav'
import Header from '@/components/common/header'
import Main from '@/components/common/main'
import store from '@/store'
export default {
  name: 'Home',
  components: {
    Nav,
    Main,
    Header,
  },
  //store,
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.remain {
  width: 100%;
}
</style>