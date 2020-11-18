<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="@/assets/logo.png" />
      </div>
      <el-form
        label-width="0px"
        class="login_form"
        :model="form"
        :rules="rules"
        ref="form"
      >
        <el-form-item prop="name">
          <el-input
            prefix-icon="iconfont icongerenzhongxin"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont iconmima"
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="verifyCode">
              <el-input v-model="form.password" type="text"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <div class="textCenter" id="v_container"></div>
          </el-col>
        </el-row>
        <!-- <el-form-item prop="verifyCode">
          <el-input prefix-icon="iconfont iconmima" v-model="form.password" type="password"></el-input>
          <div id="v_container"></div>
        </el-form-item>-->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('form')"
            >登 录</el-button
          >
          <el-button type="info" @click="resetForm('form')">重 置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { GVerify } from '@/utils/verifyCode'
import { getNavAPI, loginAPI } from '@/utils/api'
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: '白展堂',
        password: '123456',
        verifyCode: '',
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
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  mounted() {
    this.verifyCode = new GVerify('v_container')
  },
  methods: {
    submitForm(form) {
      var that = this
      this.$refs[form].validate(function (valid) {
        if (!valid) return that.$message.error('出错了')
        //登录
        loginAPI(that.form).then((res) => {
          if (res.code == 200) {
            that.$store.commit('user/SET_TOKEN', JSON.stringify(res.data.token))
            that.$store.commit('user/SET_USER_DATA', JSON.stringify(res.data))
            that.getNavList()
          }
        })
      })
    },
    resetForm(form) {
      this.$refs[form].resetFields()
    },
    //获取侧边栏数据
    getNavList() {
      getNavAPI().then((res) => {
        this.$store.commit('user/SET_NAVLIST', JSON.stringify(res.data))
        this.$router.push('/home')
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #2b4b6b;
}

.login-box {
  width: 450px;
  height: 375px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar-box {
    height: 130px;
    width: 130px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.textCenter {
  text-align: center;
}
</style>
