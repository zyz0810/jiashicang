<template>
  <div class="login-container flex flex-vertical">
    <div class="login_content">
<!--      <img src="../../assets/image/login_title.png" class="login_title"/>-->
      <p class="txt_linear f50 text-center bold" style="margin-bottom: 50px;">滨江区城市管理局主分平台一体化</p>
      <div class="login_div mt_20">
        <img src="../../assets/image/login_txt.png" class="login_txt"/>
        <div class="flex">
<!--          <div class="flex-item  text-center">-->
<!--            <img src="../../assets/image/login_ewm.png"/>-->
<!--            <p class="baseColor">打开浙政钉扫码登录</p>-->
<!--          </div>-->
          <div><img src="../../assets/image/login_border.png"/></div>
          <div class="flex-item">
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login_form" autocomplete="on" label-position="left">
              <el-form-item prop="mobile">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
                <el-input ref="mobile" v-model="loginForm.mobile" placeholder="请输入用户名" name="mobile" type="text" tabindex="1" autocomplete="on"/>
              </el-form-item>
              <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
                  <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="请输入密码" name="password" tabindex="2" autocomplete="on" @keyup.native="checkCapslock" @blur="capsTooltip = false" @keyup.enter.native="handleLogin"/>
                  <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
                </el-form-item>
              </el-tooltip>
              <el-button :loading="loading" type="primary" class="login_btn f16" @click.native.prevent="handleLogin">安 全 登 录</el-button>
            </el-form>
          </div>
        </div>
      </div>

    </div>





  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import axios from 'axios'
import Qs from 'qs'
export default {
  name: 'Login',
  components: {  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请填写用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error('请填写正确的密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        mobile: '',
        password: ''
      },
      loginRules: {
        // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        mobile:[{required: true, message: '请输入用户名', trigger: 'change'}],
        password: [{ required: true,message: '请输入密码', trigger: 'change' }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.mobile === '') {
      this.$refs.mobile.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      // let data = {
      //   "username": "admin",
      //   "password": "a"
      // }
      // axios({
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'client_id':'webApp',
      //     'client_secret':'webApp'
      //   },
      //   method: 'post',
      //   url: 'http://192.168.3.66:9200/api-auth/oauth/platform/login',
      //   data: Qs.stringify(data),
      //   success(){
      //
      //   }
      // })


      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // this.loading = true
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch((e) => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    // color: $cursor;
  }
}

/* reset element-ui css */
.login-container {

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      // color: $light_gray;
      height: 47px;
      // caret-color: $cursor;

      &:-webkit-autofill {
        // box-shadow: 0 0 0px 1000px $bg inset !important;
       //  -webkit-text-fill-color: $cursor !important;
      }
    }
  }
.login_btn{
  width: 100%;
  margin-top: 30px;
  background-color: #2e9fe0; /* 浏览器不支持的时候显示 */
  /*background-image: linear-gradient( #44c6fe, #0577f9);*/
  border:none;
}

  .el-form-item {
    border: 1px solid #0a3f7a;
    /*background: #fff;*/
    border-radius: 5px;
    color: #fff;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
$txt:#3f35cf;

.login_div{
  width: 700px;
  margin: 0 auto;
  padding: 70px 0 30px;
  background: url("../../assets/image/login_bg.png") no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
}

.login-container {
  min-height: 100%;
  width: 100%;
  //background-color: $bg;
  /*background: url("../../assets/image/login_bg.jpg") no-repeat;*/
  /*background-position: 0 0;*/
  /*background-size: 100% 100%;*/
  background: #00012D;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  .login_content{
    /*width: 90%;*/
    /*margin: 0 auto;*/
    /*height: 100vh;*/
    width: 800px;
    margin-bottom: 100px;
  }

.login_form{
  padding: 0 180px;
}
.login_txt{
  width: 300px;
  margin: 0 auto 20px;
  display: block;
}
.login_title{
  margin-bottom: 40px;
}

  .login-form {
    color:#fff;
    /*position: fixed;*/
    /*left: 66%;*/
    /*top: 45%;*/
    width: 600px;
    padding: 50px 100px 10px;
    margin: 0 auto 50px;
    overflow: hidden;
    background: #2f549a7a;
    border:1px solid #337fd5;

    .form-item__content{
      background: #fff;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #fff;
      margin: 0px auto 20px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }


  /*@media only screen and (max-width: 1370px) {*/
  /*  .login-form{*/
  /*    left: 60%;*/
  /*  }*/
  /*}*/
  /*@media only screen and (max-width: 1150px) {*/
  /*  .login-form{*/
  /*    left: 55%;*/
  /*  }*/
  /*}*/
  /*@media only screen and (max-width: 1000px) {*/
  /*  .login-form{*/
  /*    left: 50%;*/
  /*  }*/
  /*}*/
}
</style>
