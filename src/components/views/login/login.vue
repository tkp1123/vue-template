<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="@/assets/logo.png" />
      </div>
      <el-form label-width="0px" class="login_form" :model="form" :rules="rules" ref="form">
        <el-form-item prop="name">
          <el-input prefix-icon="iconfont icongerenzhongxin" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont iconmima" v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('form')">登 录</el-button>
          <el-button type="info" @click="resetForm('form')">重 置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: 'admin',
        password: '123456',
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

  methods: {
    submitForm(form) {
      console.log(form)
      // this.$refs[form].validate(async valid => {
      //   if (!valid) return;
      //   const {
      //     data: res
      //   } = await $http.post('login', this.form);
      //   if (res.meta.status != '200') {
      //     return console.log('登录失败')
      //   } else {
      //     console.log('登录成功')
      //   }
      // });
      var that = this
      this.$refs[form].validate(function (valid) {
        console.log(valid)
        if (!valid) return that.$message.error('出错了')
        //这里先把网络请求略过,手写一个用户信息
        var resData = {
          email: 'dad@qq.com',
          id: 200,
          mobile: '13891315170',
          rid: '0',
          token: '15sdsd',
          userName: 'admin',
        }
        window.sessionStorage.setItem('token', resData.token)
        that.$router.push('/home')
      })
    },
    resetForm(form) {
      this.$refs[form].resetFields()
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
  height: 300px;
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
</style>
