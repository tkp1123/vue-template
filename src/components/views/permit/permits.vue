<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="权限名称"></el-table-column>
        <el-table-column prop="router" label="路径"></el-table-column>
        <el-table-column prop="grade" label="权限等级">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.grade ==='1'">一级</el-tag>
            <el-tag type="success" v-else-if="scope.row.grade ==='2'">二级</el-tag>
            <el-tag type="warnning" v-else>三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'permits',
  data() {
    return {
      tableData: [
        {
          router: 'users',
          name: '用户列表',
          id: '1',
          grade: '2',
        },
        {
          router: 'user',
          name: '用户管理',
          id: '2',
          grade: '1',
        },
        {
          router: 'permit',
          name: '权限管理',
          id: '3',
          grade: '1',
        },
        {
          router: 'roles',
          name: '角色列表',
          id: '4',
          grade: '2',
        },
        {
          router: 'permits',
          name: '权限列表',
          id: '5',
          grade: '2',
        },
        {
          router: 'goods',
          name: '商品管理',
          id: '6',
          grade: '1',
        },
        {
          router: 'goods',
          name: '商品列表',
          id: '7',
          grade: '2',
        },
        {
          router: 'orders',
          name: '订单管理',
          id: '8',
          grade: '1',
        },
        {
          router: 'orders',
          name: '订单列表',
          id: '9',
          grade: '2',
        },
        {
          router: 'reports',
          name: '数据统计',
          id: '10',
          grade: '1',
        },
        {
          router: 'reports',
          name: '数据统计',
          id: '11',
          grade: '2',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
</style>