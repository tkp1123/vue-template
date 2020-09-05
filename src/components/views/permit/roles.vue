<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="30">
        <el-col :span="4">
          <el-button type="primary" @click="addUser()">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['bdbottom',i1 === 0? 'bdtop':'','vcenter']"
              v-for="(item1,i1) in scope.row.children"
              :key="item1.id"
            >
              <!--一级权限-->
              <el-col :span="5">
                <el-tag closable @close="removeItem(scope.row,item1)">{{item1.name}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!--二级和三级权限-->
              <el-col :span="19">
                <!--通过for循环嵌套渲染二级权限-->
                <el-row
                  :class="[i2 === 0 ? '':'bdtop','vcenter']"
                  v-for="(item2,i2) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag
                      type="success"
                      closable
                      @close="removeItem(scope.row,item2)"
                    >{{item2.name}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      v-for="(item3) in item2.children"
                      :key="item3.id"
                      type="warning"
                      closable
                      @close="removeItem(scope.row,item3)"
                    >{{item3.name}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <!-- <pre>{{scope.row}}</pre> -->
          </template>
        </el-table-column>
        <el-table-column prop="name" label="角色名称"></el-table-column>
        <el-table-column prop="descript" label="角色描述"></el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="editRow(scope.row)">编辑</el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="deleteRow(scope.row)"
            >删除</el-button>
            <el-button
              type="warning"
              size="mini"
              icon="el-icon-setting"
              @click="settingRow(scope.row)"
            >分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!--分配权限对话框-->
    <el-dialog title="分配权限" :visible.sync="settingDialogVisible" width="50%">
      <el-tree
        :data="tableData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="defaultKeys"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="closeDialog()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'roles',
  data() {
    return {
      settingDialogVisible: false,
      tableData: [
        {
          descript: '技术负责人',
          name: '主管',
          id: '1',
          children: [
            {
              name: '商品管理',
              path: 'user',
              id: '101',
              children: [
                {
                  name: '商品列表',
                  path: 'users',
                  id: '1011',
                  children: [
                    { name: '商品列表', path: 'users', id: '10111' },
                    { name: '商品列表', path: 'users', id: '10112' },
                    { name: '商品列表', path: 'users', id: '10113' },
                    { name: '商品列表', path: 'users', id: '10114' },
                    { name: '商品列表', path: 'users', id: '10115' },
                    { name: '商品列表', path: 'users', id: '10116' },
                    { name: '商品列表', path: 'users', id: '10117' },
                    { name: '商品列表', path: 'users', id: '10118' },
                    { name: '商品列表', path: 'users', id: '10119' },
                    { name: '商品列表', path: 'users', id: '10110' },
                    { name: '商品列表', path: 'users', id: '101111' },
                    { name: '商品列表', path: 'users', id: '101112' },
                    { name: '商品列表', path: 'users', id: '101113' },
                    { name: '商品列表', path: 'users', id: '101114' },
                  ],
                },
              ],
            },
            {
              name: '权限管理',
              path: 'permit',
              id: '102',
              children: [
                {
                  name: '角色列表',
                  path: 'roles',
                  id: '1021',
                },
                {
                  name: '权限列表',
                  path: 'permits',
                  id: '1022',
                },
              ],
            },
            {
              name: '商品管理',
              path: 'goods',
              id: '103',
              children: [
                {
                  name: '商品列表',
                  path: 'goods',
                  id: '1031',
                },
              ],
            },
            {
              name: '订单管理',
              path: 'orders',
              id: '104',
              children: [
                {
                  name: '订单列表',
                  path: 'orders',
                  id: '1041',
                },
              ],
            },
            {
              name: '数据统计',
              path: 'reports',
              id: '105',
              children: [
                {
                  name: '数据统计',
                  path: 'reports',
                  id: '1051',
                },
              ],
            },
          ],
        },
        {
          descript: '测试角色',
          name: '测试角色',
          id: '2',
          children: [],
        },
        {
          descript: '测试描述',
          name: '测试角色2',
          id: '3',
          children: [],
        },
        {
          descript: '的德叔是的',
          name: '我的尔尔',
          id: '4',
          children: [],
        },
      ],
      defaultProps: {
        children: 'children',
        //label 代表的tree 需要展示的,children代表子集
        label: 'name',
      },
      //默认选中的数组
      defaultKeys: [],
    }
  },
  methods: {
    //添加角色
    addUser() {
      console.log('点击')
    },
    //删除第三极列表,获取接口数据,注意这里不能直接重新加载form列表
    //会导致数据重新渲染,已经打开的折叠项会闭合,所以在这里建议
    //获取完接口数据后替换数据就行了
    removeItem(row, item) {
      console.log(row)
      console.log(item)
      var that = this
      this.$confirm('是否继续删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(function () {
        that.$message({
          type: 'success',
          message: '好的!',
        })
      })
    },
    //分配权限对话框
    settingRow(row) {
      //获取权限树
      //打开对话框还需要把已有的三级权限id 获取出来 添加到defaultKeys
      //数组中,实现默认加载已有的权限
      this.getLeafKeys(row, this.defaultKeys)
      this.settingDialogVisible = true
    },
    //递归获取角色下所有三级权限id,并保存到数组中defaultKeys
    getLeafKeys(node, arr) {
      //如果当前节点不包含children,则是三级节点
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach((item) => {
        this.getLeafKeys(item, arr)
      })
    },
    handleNodeClick(data) {
      console.log(data)
    },
    //关闭tree对话框
    closeDialog() {
      console.log('关闭')
      this.defaultKeys = []
      this.settingDialogVisible = false
    },
  },
}
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 15px;
  font-size: 14px;
}
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>