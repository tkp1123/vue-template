<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="30">
        <el-col :span="7">
          <el-input
            v-model="queryInfo"
            clearable
            placeholder="请输入内容"
            @clear="queryList()"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="queryList()"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addUser()">添加用户</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <!-- <el-table-column type="index"></el-table-column> -->
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.state"
                @change="userStateChange(scope.row)"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-tooltip
                effect="dark"
                content="编辑"
                placement="top"
                :enterable="false"
              >
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
              </el-tooltip>
              <el-tooltip
                effect="dark"
                content="删除"
                placement="top"
                :enterable="false"
              >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length"
          ></el-pagination>
        </el-row>
      </el-row>
    </el-card>
    <!-- dialog对话框    添加用户-->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="form.phone" type="phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDataReset()">取 消</el-button>
        <el-button type="primary" @click="dialogOk()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- dialog对话框     修改用户-->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%">
      <el-form
        ref="formEdit"
        :model="formEdit"
        label-width="80px"
        :rules="rulesEdit"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="formEdit.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formEdit.email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="formEdit.phone" type="phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editCancel()">取 消</el-button>
        <el-button type="primary" @click="editOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'tables',
  data() {
    var checkEmail = function (rule, value, callback) {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (regEmail.test(value)) {
        return callback()
      } else {
        return callback(new Error('邮箱不合法'))
      }
    }
    var checkPhone = function (rule, value, callback) {
      const regPhone = /^1(3|4|5|6|7|8|9)\d{9}$/
      if (regPhone.test(value)) {
        return callback()
      } else {
        return callback(new Error('手机号码不合法'))
      }
    }
    return {
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      queryInfo: '',
      dialogVisible: false,
      editDialogVisible: false,
      form: {
        name: '',
        password: '',
        email: '',
        phone: '',
      },
      formEdit: {
        name: '',
        email: '',
        phone: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur',
          },
          {
            validator: checkEmail,
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur',
          },
          {
            validator: checkPhone,
            trigger: 'blur',
          },
        ],
      },
      rulesEdit: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur',
          },
          {
            validator: checkEmail,
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur',
          },
          {
            validator: checkPhone,
            trigger: 'blur',
          },
        ],
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    //请求列表
    getList() {
      axios.post('http://www.bai.com').then((res) => {
        console.log(res)
        this.tableData = res.data
      })
    },
    //编辑用户打开dialog
    handleEdit(index, row) {
      //注意,这里正常的应该是根据row.id 调用接口去获取对应的用户信息,
      //这里用的是写死的数据
      this.editDialogVisible = true
      this.formEdit.name = row.name
      this.formEdit.email = row.email
      this.formEdit.phone = row.phone
    },
    handleDelete(index, row) {
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    userStateChange(row) {
      console.log(row)
      //这里监听行状态变化,可以调用接口修改状态
      //改变完状态应该重新拉取数据
    },
    queryList() {
      //搜索功能,查询接口form列表 ,还有一个清空输入框数据,再拉取接口数据
      console.log('搜索')
    },
    //添加用户打开dialog
    addUser() {
      this.dialogVisible = true
    },
    //添加用户确定
    dialogOk() {
      var that = this
      this.$refs.form.validate(function (valid) {
        console.log(valid)
        if (valid) {
          //这里表示校验成功,提交数据,关闭dialog,还需要刷新列表form
          that.$message.success('成功了')
          //成功了以后还需要重置dialog内已填入的数据
          //注意这里还需要区分,接口数据返回成功还是失败,成功关闭dialig并且
          //重置数据,不成功不能重置和关闭dialog,并且弹出提示
          that.dialogVisible = false
          that.$refs.form.resetFields()
        } else {
          //这里表示校验失败,需要提示
          that.$message.error('出错了')
        }
      })
    },
    //添加用户关闭dialog 和重置dialog数据
    dialogDataReset() {
      this.dialogVisible = false
      this.$refs.form.resetFields()
    },
    //编辑用户取消
    editCancel() {
      this.editDialogVisible = false
      this.$refs.formEdit.resetFields()
    },
    //编辑用户确定
    editOk() {
      var that = this
      this.$refs.formEdit.validate(function (valid) {
        console.log(valid)
        if (valid) {
          //这里表示校验成功,提交数据,关闭dialog,还需要刷新列表form
          that.$message.success('成功了')
          //成功了以后还需要重置dialog内已填入的数据
          //注意这里还需要区分,接口数据返回成功还是失败,成功关闭dialig并且
          //重置数据,不成功不能重置和关闭dialog,并且弹出提示
          that.editDialogVisible = false
          that.$refs.formEdit.resetFields()
        } else {
          //这里表示校验失败,需要提示
          that.$message.error('出错了')
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 15px;
  font-size: 14px;
}
.el-pagination {
  padding-top: 20px;
}
</style>