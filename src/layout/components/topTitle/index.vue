<template>
<!--  <div class="sidebar-logo-container" :class="{'collapse':collapse}">-->
<!--    <transition name="sidebarLogoFade">-->
<!--      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">-->
<!--        <img v-if="logo" :src="logo" class="sidebar-logo">-->
<!--        <h1 v-else class="sidebar-title">{{ title }}111 </h1>-->
<!--      </router-link>-->
<!--      <router-link v-else key="expand" class="sidebar-logo-link" to="/">-->
<!--        <h1 class="sidebar-title"><span class="f18">集 据 物 连 </span></h1>-->
<!--      </router-link>-->
<!--    </transition>-->
<!--  </div>-->
  <el-header class="top">
    <el-row>
      <el-col :span="6">
        <span class="f26 bold m_r30">滨江区</span>
        <span class="date f18 bold  m_r30">{{$moment().format('YYYY-MM-DD')}}</span>
<!--        <span class="f18 bold mr_20">{{weatherData.weather}}</span>-->
<!--        <span class="f18 bold">{{weatherData.temperature}}℃</span>-->
      </el-col>
      <el-col :span="12" class="logo text-center">
<!--        <img src="./../../../assets/image/logo.png"/>-->
        <span class="txt_linear bold block xitong_title">{{title}}</span>
      </el-col>
      <el-col :span="6" class="top_right text-right">
        <!--<div class="right-menu">-->

        <router-link :to="{path:'/dashboard'}" class="f16 bold m_r30"><i class="el-icon-s-promotion" style="margin-right: 5px"></i>首 页</router-link>
          <span class="f16 bold" @click="logout">退 出<i class="el-icon-switch-button" style="margin-left: 5px"></i></span>
        <!--</div>-->
        <my-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="80%">
          <ul class="street">
            <li>街道1</li>
            <li>街道1</li>
            <li>街道1</li>
            <li>街道1</li>
            <li>街道1</li>
            <li>街道1</li>
            <li>街道1</li>
            <li>街道1</li>
            <li>街道1</li>
          </ul>
          <div slot="footer" class="dialog-footer" v-if="dialogStatus != 'updatePassword'">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="updateData()">确 定</el-button>
          </div>
        </my-dialog>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  import axios from 'axios'
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
import headImg from '@/assets/headImg/img.png'
import { getToken, setToken, removeToken,getId,setId,removeId,getName,setName,removeName,getMobile } from '@/utils/auth'
import { validUsername, validatePhone,isPassword } from "@/utils/validate";
import {updatePassword} from '@/api/user'
import {getSmsCode} from "@/api/code";

export default {
  name: 'topTitle',
  data() {
    return {
      headImg: headImg,
      systemDate:'',
      // name:getName()!='null'?getName():'',
      name:'滨江区',
      nowDate:'',
      dialogFormVisible: false,
      textMap: {
        update: '选择街道',
      },
      dialogStatus: '',
      temp:{
        oldPassword:''
      },
      title:'滨江区城市管理局数字驾驶舱',
      rules:{
        password: [
          { required: true, message: "请输入密码", trigger: "change" },{validator: isPassword}
        ],
        mobile: [
          { required: true, message: "请输入手机号码", trigger: "change" },
          { validator: validatePhone }
        ],
        verifyCode: [
          { required: true, message: "请输入验证码", trigger: "change" }
        ],
        confirmPassword: [
          { required: true, message: "请再次输入密码", trigger: "change" },{validator: isPassword}
        ]
      },
      passwordTemp:{
        confirmPassword:'',
        mobile:getMobile(),
        password:'',
        verifyCode:''
      },
      codeTxt: "获取验证码",
      disabled:false,
      weatherData:{
        weather:'',
        temperature:'',
      },
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    Search
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return
      }
      if(route.path == '/general/overview' || route.path == '/dashboard'){
        this.title = '滨江区城市管理局数字驾驶舱'
      } else if(route.path == '/record/approval'){
        this.title = '备案审批数字驾驶舱'
      } else if(route.path == '/garbage/link'){
        this.title = '环卫作业数字驾驶舱'
      } else if(route.path == '/digital/services'){
        this.title = '便民服务驾驶舱'
      } else if(route.path == '/demonstration/community'){
        this.title = '示范小区数字驾驶舱'
      } else if(route.path == '/city/appearance/index'){
        this.title = '市容市貌数字驾驶舱'
      } else if(route.path == '/law/soldier'){
        this.title = '执法单兵数字驾驶舱'
      } else if(route.path == '/illegal/construction'){
        this.title = '违法建筑数字驾驶舱'
      } else if(route.path == '/city/water'){
        this.title = '城市治水数字驾驶舱'
      } else if(route.path == '/municipal/facilities'){
        this.title = '市政设施数字驾驶舱'
      } else if(route.path == '/low/case'){
        this.title = '案件归集数字驾驶舱'
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
    ])
  },
  methods: {
    getWeather(){
      axios({
        url:"https://restapi.amap.com/v3/weather/weatherInfo",
        method:'get',
        params:{
          key:"50b7c6cf29043293d9c74d6154039858",
          city:"滨江区",
        }
      }).then((data)=>{
       this.weatherData={
         weather:data.data.lives[0].weather,
         temperature:data.data.lives[0].temperature
       }
      }).catch((err) => {
        // alert("获取失败");
      })
    },
    resetPasswordTemp(){
      this. passwordTemp={
        confirmPassword:'',
        mobile:getMobile(),
        password:'',
        verifyCode:''
      }
    },
    getCode() {
      if (this.passwordTemp.mobile != "") {
        getSmsCode({ mobile: this.passwordTemp.mobile }).then(res => {
          // this.publishOption = res.data
          // if(res.resp_code == 0){
          this.countdown2(this);
          // }
        });
      }else{
        this.$confirm(
          '请输入手机号码',
          "提示",
          {
            type: "warning",
            showCancelButton: false
          }
        )
          .then(() => {})
          .catch(() => {});
      }
    },
    countdown2(that) {
      let setTime = 60;
      let time = setTime;
      let codeTxt = "获取验证码";
      return (function timeFn(o) {
        if (time == 0) {
          that.codeTxt = codeTxt;
          that.disabled = false;
          time = setTime;
        } else {
          that.codeTxt = time + "s重试";
          that.disabled = true;
          time--;
          setTimeout(function() {
            timeFn(o);
          }, 1000);
        }
        if(that.dialogFormVisible == false){
          time = 0
        }
      })();
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    updatePassword(){
      this.resetPasswordTemp()
      this.dialogStatus = 'update';
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData(){
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          updatePassword(this.passwordTemp).then((res) => {
            if(res.resp_code == 0){
              this.dialogFormVisible = false;
              this.$message({
                message: '密码重置成功',
                type: 'success'
              });
            }
          })
        }
      })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      this.$router.push(`/login?redirect=/dashboard`)
    },
    // addDate() {
    //   let nowDate = new Date();
    //   this.nowDate = new Date();
    //   let date = {
    //     year: nowDate.getFullYear(),
    //     month: nowDate.getMonth() + 1,
    //     date: nowDate.getDate(),
    //   };
    //   if(date.month<10 && date.date<10){
    //     this.systemDate = date.year + '-' + 0 + date.month + '-' + 0 + date.date;
    //   }else if(date.month<10 && date.date>10){
    //     this.systemDate = date.year + '-' + 0 + date.month + '-' + date.date;
    //   }else if(date.month>10 && date.date<10){
    //     this.systemDate = date.year + '-' + date.month + '-' + 0 + date.date;
    //   }else {
    //     this.systemDate = date.year + '-' + date.month + '-' + date.date;
    //   }
    // }
  },
  mounted() {
    // this.addDate();
    // this.getWeather();
  },
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .el-header{
    color: $txtColor;
    height: 10vh !important;
    background: url("../../../assets/image/top_bg.png") left top no-repeat;
    background-size: 100% 100%;
    line-height: 10vh;
  }
  .xitong_title{
    font-size: 2.6em;
    margin: 0 auto;
    line-height: 9vh;
  }
  .get_code {
    position: relative;
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .logo{
    img{
      width: 50%;
      margin-top: 20px;
    }

  }
  .top_right {
    height: 10vh;
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .hamburger-container {
      line-height:10vh;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }
    .date{
      margin-right: 20px;
    }

    .right-menu {
      /*float: right;*/
      display: flex;
      justify-content: right;
      align-items: center;
      height: 100%;
      line-height: 50px;
      color: $txtColor !important;
      &:focus {
        outline: none;
      }
      .el-dropdown{
        color: $txtColor !important;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          /*margin-top: 5px;*/
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin-top: 5px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 20px;
            font-size: 12px;
          }
        }
      }
    }
  }
  .street{
    li{
      display: inline-block;
      line-height: 1;
      padding:  10px 20px;
      border: 1px solid $txtColor;
      border-radius: 10px;
      margin: 0 10px 10px 10px;
    }
  }
</style>
