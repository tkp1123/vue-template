<template>
  <!-- 侧边  -->
  <el-aside :width="getCollapse ? '64px':'200px'">
    <div class="nav_title">
      <img class="img" src="@/assets/logo.png" v-if="getCollapse" />
      <span v-else style>管理系统</span>
    </div>
    <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409eff"
      unique-opened
      :collapse="getCollapse"
      :collapse-transition="false"
      :router="true"
      :default-active="$route.path"
    >
      <template v-for="menu in menuList">
        <el-submenu :index="menu.id+''" v-if="menu.children" :key="menu.id">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{menu.autoName}}</span>
          </template>
          <el-menu-item v-for="child in menu.children" :index="'/'+child.path" :key="child.id">
            <i class="el-icon-menu"></i>
            <span>{{child.autoName}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="'/'+menu.path" v-else :key="menu.id">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.autoName}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import store from '@/store'
import jsonNav from '@/assets/json/nav.json'
export default {
  store,
  computed: {
    getCollapse() {
      return this.$store.state.isCollapse
    },
  },
  data() {
    return {
      menuList: [],
    }
  },
  created() {
    this.menuList = jsonNav.menuList
  },
}
</script>
<style lang="less" scoped>
.img {
  width: 45px;
  height: 45px;
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
  font-size: 25px;
}
.nav_title {
  color: #ffffff;
  min-height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>