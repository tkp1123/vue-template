<template>
  <el-container class="home-container">
    <!-- 侧边  -->
    <el-aside :width="isCollapse ? '64px':'200px'">
      <div style="color:#ffffff;line-height:60px;text-align:center">
        <img class="img" src="../assets/logo.png" />
        <span style="color:#ffffff" v-if="!isCollapse">管理系统</span>
      </div>
      <el-menu
        background-color="#333744"
        text-color="#fff"
        active-text-color="#409eff"
        unique-opened
        :collapse="isCollapse"
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
    <el-container>
      <!-- 头部  -->
      <el-header>
        <i
          :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
          @click="pointClick()"
          style="padding-left:20px"
        ></i>
        <!-- <el-button @click="loginout">退出</el-button> -->

        <el-dropdown>
          <span class="el-dropdown-link user-span">
            <img src="../assets/logo.png" class="head-portrait" />
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
            <el-dropdown-item divided @click.native="logout">
              <i class="icon iconfont icon-poweroff"></i>
              <span class="icon-span">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 主体部分  -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      menuList: [
        {
          id: 12,
          autoName: '首页',
          path: 'welcome',
          icon: 'iconfont iconsanguohome',
        },
        {
          id: 125,
          autoName: '用户管理',
          path: 'users',
          icon: 'iconfont iconyonghu2',
          children: [
            {
              id: 101,
              autoName: '用户列表',
              path: 'users',
              children: [],
            },
          ],
        },
        {
          id: 103,
          autoName: '权限管理',
          path: 'permits',
          icon: 'iconfont iconquanxian',
          children: [
            {
              id: 102,
              autoName: '角色列表',
              path: 'roles',
              children: [],
            },
            {
              id: 1021,
              autoName: '权限列表',
              path: 'permits',
              children: [],
            },
          ],
        },
        {
          id: 101,
          autoName: '商品管理',
          path: 'goods',
          icon: 'iconfont icontubiao-qiantai-',
          children: [
            {
              id: 103,
              autoName: '商品列表',
              path: 'goods',
              children: [],
            },
          ],
        },
        {
          id: 102,
          autoName: '订单管理',
          path: 'orders',
          icon: 'iconfont iconxiadan',
          children: [
            {
              id: 104,
              autoName: '订单列表',
              path: 'orders',
              children: [],
            },
          ],
        },
        {
          id: 145,
          autoName: '数据统计',
          path: 'reports',
          icon: 'iconfont iconshujutongji',
          children: [
            {
              id: 105,
              autoName: '数据统计',
              path: 'reports',
              children: [],
            },
          ],
        },
      ],
      isCollapse: false,
      activePath: '',
    }
  },
  created() {
    //this.getNavList()
    this.activePath = window.sessionStorage.getItem('activePath')
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
    //点击按钮,切换菜单的折叠与展开
    pointClick() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(activePath, subItem) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
      this.subItemName = subItem.autoName
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
  font-size: 20px;
}
.img {
  width: 50px;
  height: 50px;
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
.home-container {
  height: 100%;
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
  border-radius: 10px;
  margin: 10px;
  float: right;
}
</style>