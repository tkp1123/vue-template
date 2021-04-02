<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="30">
        <el-col :span="7">
          <el-input
            v-model="queryInfo"
            clearable
            placeholder="请输入姓名"
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
          <el-table-column prop="mobile" label="手机号"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              {{ scope.row.status == '1' ? '激活' : '封存' }}
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
            :current-page="currentPage"
            :page-sizes="[10, 20, 30]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </el-row>
      </el-row>
    </el-card>
    <!-- dialog对话框    添加用户-->
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="50%"
      destroy-on-close
    >
      <el-form :model="form" label-width="80px" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" type="text"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="form.mobile" type="phone"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address" type="text"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="form.status"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDataReset()">取 消</el-button>
        <el-button type="primary" @click="dialogOk()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- dialog对话框     修改用户-->
    <el-dialog
      title="修改用户"
      :visible.sync="editDialogVisible"
      width="50%"
      destroy-on-close
    >
      <el-form :model="formEdit" label-width="80px" :rules="rulesEdit">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formEdit.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formEdit.email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="formEdit.mobile" type="phone"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="formEdit.address" type="text"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="formEdit.status"></el-switch>
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
import {
  selectCustomAPI,
  insertCustomAPI,
  deleteCustomAPI,
  updateCustomAPI,
} from '@/utils/api'
export default {
  name: 'users',
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
      total: 0,
      currentPage: 1,
      pageSize: 10,
      queryInfo: '',
      dialogVisible: false,
      editDialogVisible: false,
      form: {
        name: '',
        address: '',
        email: '',
        mobile: '',
        status: false,
      },
      formEdit: {
        name: '',
        email: '',
        mobile: '',
        address: '',
        status: false,
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名',
            trigger: 'blur',
          },
          {
            min: 2,
            max: 5,
            message: '长度在 2 到 5 个字符',
            trigger: 'blur',
          },
        ],
        address: [
          {
            required: true,
            message: '请输入地址',
            trigger: 'blur',
          },
          {
            min: 3,
            message: '最低3个字符',
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
        mobile: [
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
            message: '请输入姓名',
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
        mobile: [
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
        address: [
          {
            required: true,
            message: '请输入地址',
            trigger: 'blur',
          },
          {
            min: 3,
            message: '最低3个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  created() {},
  mounted() {
    this.queryList()
  },
  methods: {
    //添加用户确定
    dialogOk() {
      if (
        this.form.name == '' ||
        this.form.email == '' ||
        this.form.mobile == '' ||
        this.form.address == ''
      ) {
        this.$message({
          type: 'error',
          message: '所有字段为必填',
        })
        return
      }
      let status = '1'
      if (this.form.status == false) {
        status = '0'
      } else {
        status = '1'
      }
      let params = {
        name: this.form.name,
        email: this.form.email,
        mobile: this.form.mobile,
        address: this.form.address,
        status: status,
      }
      insertCustomAPI(params).then((res) => {
        console.log(res)
        if (res.code == '200') {
          this.$message({
            type: 'success',
            message: res.msg,
          })
          this.dialogDataReset()
          this.queryList()
        }
      })
    },
    //添加用户关闭dialog 和重置dialog数据
    dialogDataReset() {
      this.form.name = ''
      this.form.email = ''
      this.form.mobile = ''
      this.form.address = ''
      this.form.status = false
      this.dialogVisible = false
    },
    //编辑用户取消
    editCancel() {
      this.editDialogVisible = false
    },
    //编辑用户确定
    editOk() {
      console.log(this.formEdit)
      if (
        this.formEdit.name == '' ||
        this.formEdit.email == '' ||
        this.formEdit.mobile == '' ||
        this.formEdit.address == ''
      ) {
        this.$message({
          type: 'error',
          message: '所有字段为必填',
        })
        return
      }
      let status = '1'
      if (this.formEdit.status == false) {
        status = '0'
      } else {
        status = '1'
      }
      let params = {
        name: this.formEdit.name,
        email: this.formEdit.email,
        mobile: this.formEdit.mobile,
        address: this.formEdit.address,
        status: status,
        id: this.formEdit.id,
      }
      updateCustomAPI(params).then((res) => {
        console.log(res)
        if (res.code == '200') {
          this.$message({
            type: 'success',
            message: res.msg,
          })
          this.editCancel()
          this.queryList()
        }
      })
    },
    //编辑用户打开dialog
    handleEdit(index, row) {
      //注意,这里正常的应该是根据row.id 调用接口去获取对应的用户信息,
      //这里用的是写死的数据
      if (row.status == '1') {
      }
      this.editDialogVisible = true
      this.formEdit.name = row.name
      this.formEdit.email = row.email
      this.formEdit.mobile = row.mobile
      this.formEdit.address = row.address
      this.formEdit.id = row.id
      if (row.status == '1') {
        this.formEdit.status = true
      } else {
        this.formEdit.status = false
      }
    },
    handleDelete(index, row) {
      var that = this
      this.$confirm('是否继续删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(function () {
        console.log(row)
        deleteCustomAPI({ id: row.id, name: row.name }).then((res) => {
          console.log(res)
          if (res.code == '200') {
            that.$message({
              type: 'success',
              message: res.msg,
            })
          }
          that.queryList()
        })
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.selectCustom()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
      this.selectCustom()
    },
    queryList() {
      this.selectCustom()
    },
    //添加用户打开dialog
    addUser() {
      this.dialogVisible = true
    },
    selectCustom() {
      let that = this
      let data = {
        name: this.queryInfo,
        offset: this.currentPage,
        size: this.pageSize,
      }
      selectCustomAPI(data).then((res) => {
        console.log(res)
        if (res.code == '200') {
          that.tableData = res.data.data
          that.total = res.data.total
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