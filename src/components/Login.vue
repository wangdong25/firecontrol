<template>
  <div class="Login">
    <headerLogin></headerLogin>
    <div class='content'>
      <div class="form">
        <el-form
          :model="ruleForm2"
          :rules="rules2"
          ref="ruleForm2"
          label-position="left"
          label-width="0px"
          class="demo-ruleForm login-container"
        >
          <h3 class="title">系统登录</h3>
          <el-form-item prop="account">
            <el-input
              type="text"
              v-model="ruleForm2.account"
              auto-complete="off"
              placeholder="账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm2.checkPass"
              auto-complete="off"
              placeholder="密码"
              @keyup.enter.native="handleSubmit"
            >
            </el-input>
          </el-form-item>
          <el-checkbox
            v-model="checked"
            checked
            class="remember"
          >记住密码</el-checkbox>
          <el-form-item style="width:100%;">
            <el-button
              type="primary"
              style="width:100%;"
              @click.native.prevent="handleSubmit"
              :loading="logining"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<script>
import { requestLogin } from "../api/api";
//import NProgress from 'nprogress'
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: "wangd",
        checkPass: "123456"
      },
      rules2: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  methods: {
    // 提交登录
    handleSubmit(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          this.logining = true;
          var loginParams = {
            username: this.ruleForm2.account,
            password: this.ruleForm2.checkPass
          };
          requestLogin(loginParams).then(res => {
            this.logining = false;
            //NProgress.done();
            this.$toast.success({
              title: this.ruleForm2.account,
              message: this.ruleForm2.checkPass
            });
          let user={
             "username":this.ruleForm2.account,
             "password":this.ruleForm2.checkPass
           }
            if(res.data.success){
              //登陆成功
                this.$router.push({ path: "/Index" });
               sessionStorage.setItem('user', JSON.stringify(user));
            } else {
          console.log("error submit!!");
          return false;
        }

      });
    }
      })
    }
  }
}
    
</script>

<style  scoped>
.Login {
  /* position: absolute; */
  height: 100%;
  width: 100%;
}
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 0 auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}
.content {
  height: calc(100% - 100px);
  background: url("~@/assets/img/login_banner.jpg");
  background-size: 100% 100%;
}
.form {
  width: 1200px;
  margin: 0 auto;
  padding: 7% 0 0 30%;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.remember {
  margin: 0px 0px 35px 0px;
}
</style>
