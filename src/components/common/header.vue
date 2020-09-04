<template>
  <!-- 头部  -->
  <el-header>
    <i
      :class="getCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
      style="padding-left:20px"
      @click="pointClick"
    ></i>
    <!-- <el-button @click="loginout">退出</el-button> -->
    <el-dropdown>
      <span class="el-dropdown-link user-span">
        <img src="@/assets/touxiang.jpg" class="head-portrait" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <i class="icon iconfont icon-user"></i>
          <span class="icon-span">个人信息</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <i class="icon iconfont icon-edit-square"></i>
          <span class="icon-span">修改资料</span>
        </el-dropdown-item>
        <el-dropdown-item divided @click.native="loginout">
          <i class="icon iconfont icon-poweroff"></i>
          <span class="icon-span">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>
<script>
export default {
  computed: {
    getCollapse() {
      return this.$store.state.isCollapse
    },
  },
  data() {
    return {}
  },
  methods: {
    loginout() {
      var that = this
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(function () {
        window.sessionStorage.clear()
        that.$router.push('/login')
        that.$message({
          type: 'success',
          message: '退出成功!',
        })
      })
    },
    pointClick() {
      this.$store.commit('collapse')
    },
  },
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  width: 100%;
  font-size: 20px;
}
.img {
  width: 45px;
  height: 45px;
}
.iconfont {
  margin-right: 10px;
  font-size: 25px;
}
.toggle_button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.head-portrait {
  width: 45px;
  border-radius: 50%;
  margin: 10px;
  float: right;
}
</style>