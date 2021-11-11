<template>
  <div class="dashboard-container">
   <div class="index_cont">
     <p class="txt_linear f50 text-center bold">滨江区城市管理局主分平台一体化</p>
     <div class="index_title text-center">
       <div class="title_line_left"></div>
       <div class="title_line_right"></div>
       <span class="txtColor f26 title_txt">综合管理系统</span>
     </div>
     <ul class="f18 txtColor text-center index_ul">

       <li>
<!--         <a href="http://jsc.susongzhijia.com/#/general/overview" target="_blank">-->
           <router-link :to="{path:'/general/overview'}">
<!--         <a href=" http://192.168.2.3:8090/">-->
           <img src="./../../assets/image/index_icon01.png"/>
           <p class="mt_10">驾驶舱</p>
           </router-link>
<!--         </a>-->
       </li>

     </ul>
     <div class="index_title text-center">
       <div class="title_line_left"></div>
       <div class="title_line_right"></div>
       <span class="txtColor f26 title_txt">业务管理系统</span>
     </div>
     <ul class="f18 txtColor text-center index_ul">

       <li>
         <a href="http://172.18.16.15/szcg/main.html" target="_blank">
         <img src="./../../assets/image/index_icon18.png"/>
         <p class="mt_10">数字城管</p>
         </a>
       </li>
       <li>
         <a href="/direct/index.html">
           <img src="./../../assets/image/index_icon02.png"/>
           <p class="mt_10">指挥平台</p>
         </a>
       </li>
       <li>
<!--         <a href="http://ai.susongzhijia.com/" target="_blank">-->
         <a href="/AI/index.html">
<!--         <a href=" http://192.168.2.3:8091/">-->
           <img src="./../../assets/image/index_icon04.png"/>
           <p class="mt_10">市容监管</p>
         </a>
       </li>
       <li>
<!--         <a href="http://yy-web.susongzhijia.com/" target="_blank">-->
<!--         <a href="http://yy-web.susongzhijia.com/#/testing/monitor?type=auth" target="_blank">-->
         <a href="http://47.98.38.192:8087/#/testing/monitor?type=auth" target="_blank">
<!--         <a href="http://yy-web.susongzhijia.com/">-->
           <img src="./../../assets/image/index_icon05.png"/>
           <p class="mt_10">油烟监测</p>
         </a>
       </li>
       <li>
         <a href="http://218.108.205.60:8085/login?username=admin&password=123456" target="_blank">
         <img src="./../../assets/image/index_icon17.png"/>
         <p class="mt_10">共享单车</p>
         </a>
       </li>

       <li>
         <a href="http://218.108.98.28/map/index.html?system=ZHZF" target="_blank">
         <img src="./../../assets/image/index_icon07.png"/>
         <p class="mt_10">数字执法</p>
         </a>
       </li>
       <li>
         <a href="http://218.108.98.28/map/index.html?system=ZHHW " target="_blank">
         <img src="./../../assets/image/index_icon08.png"/>
         <p class="mt_10">数字环卫</p>
         </a>
       </li>
       <li>
         <a href="http://218.108.98.28/map/index.html?system=ZHSZ" target="_blank">
         <img src="./../../assets/image/index_icon09.png"/>
         <p class="mt_10">数字市政</p>
         </a>
       </li>
       <li>
         <a href="http://10.32.43.156:7778/zhsnjsc/index.html#/Login" target="_blank">
         <img src="./../../assets/image/index_icon10.png"/>
         <p class="mt_10">数字治水</p>
         </a>
       </li>
     </ul>
     <div class="index_title text-center">
       <div class="title_line_left"></div>
       <div class="title_line_right"></div>
       <span class="txtColor f26 title_txt">后台管理系统</span>
     </div>
     <ul class="f18 txtColor text-center index_ul">
       <li>
<!--         <a href="http://erp-web.susongzhijia.com/#/system/organization/manage" target="_blank">-->
         <a href="/zhuanxiang/index.html#/system/organization/manage">
           <img src="./../../assets/image/index_icon11.png"/>
           <p class="mt_10">系统管理</p>
         </a>
       </li>
       <li>
         <a href="/zhuanxiang/index.html#/dataExchange/exchangeApi">
         <img src="./../../assets/image/index_icon12.png"/>
         <p class="mt_10">数据交换</p>
       </a>
       </li>
       <li>
         <a href="/zhuanxiang/index.html#/dataAcquisition/grid/index">
         <img src="./../../assets/image/index_icon13.png"/>
         <p class="mt_10">数据采集</p>
         </a>
       </li>
       <li>
         <a href="/zhuanxiang/index.html#/personnel/personnelList">
         <img src="./../../assets/image/index_icon14.png"/>
         <p class="mt_10">人员管理</p>
         </a>
       </li>
       <li>
         <a href="/zhuanxiang/index.html#/car/carList">
         <img src="./../../assets/image/index_icon15.png"/>
         <p class="mt_10">车辆管理</p>
         </a>
       </li>
       <li>
         <a href="/zhuanxiang/index.html#/video/videoList">
         <img src="./../../assets/image/index_icon16.png"/>
         <p class="mt_10">视频管理</p>
         </a>
       </li>
       <li>
         <a href="/keynote/index.html">
           <img src="./../../assets/image/index_icon03.png"/>
           <p class="mt_10">重点工作</p>
         </a>
       </li>
       <li>
         <!--         <a href="http://jsc.susongzhijia.com/#/general/overview" target="_blank">-->
         <a href="/zhuanxiang/index.html#/electron/map">
           <!--         <a href=" http://192.168.2.3:8090/">-->
           <img src="./../../assets/image/index_icon19.png"/>
           <p class="mt_10">电子地图</p>
         </a>
         <!--         </a>-->
       </li>
     </ul>
   </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import "echarts/lib/component/polar"
  // import "echarts/chart/map"
  import PieChart from '@/components/Charts/PieChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import RingChart from '@/components/Charts/RingChart'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import xinjiang from "echarts/map/js/province/xinjiang";
  import {getInfo} from "@/api/user";
  import {roleDetail} from "@/api/system";
  import { mapState } from "vuex";
  //必须要导入
  export default {
    name: 'Dashboard',
    components: {

    },
    data() {
      return {
        menuList:[]
      }
    },
    computed: {
      ...mapState({
        id: (state) => state.user.id,
      }),
    },
    mounted(){
      this.getList();
    },
    methods: {
      getList(){
        getInfo().then((res) => {
          roleDetail({id:res.data.id}).then((res) => {
            this.menuList = res.data;
          });
        });
      },

    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .dashboard-container{
    width: 100%;
    height: 100%;
    padding-top: 6vh;
    /*background: url("./../../assets/image/index_bg.png") rgb(2,9,41) left top no-repeat;*/
    background: rgb(2,9,41);
    background-size: 100% 100%;
    .index_cont{
      width: 80%;
      margin: 0 auto 0;
    }
  }

  .index_title{
    position: relative;
    margin: 40px 0;
    line-height: 2;
    .title_line{
      position: absolute;
      left: 0;
      top: 2em;
      width: 100%;
      height: 1px;
      background: rgb(12,33,84);
      /*background: #fff;*/
    }
    .title_line_left{
      position: absolute;
      left: 0;
      top: 2em;
      width: 41%;
      height: 1px;
      background: rgb(12,33,84);
      /*background: #fff;*/
    }
    .title_line_right{
      position: absolute;
      right: 0;
      top: 2em;
      width: 41%;
      height: 1px;
      background: rgb(12,33,84);
      /*background: #fff;*/
    }
    .title_txt{
      position: relative;
      z-index: 2;
    }
  }
  .index_ul{
    flex-shrink:0;
    overflow: auto;
    white-space:nowrap;//不换行class
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      /*width : 100%;  !*高宽分别对应横竖滚动条的尺寸*!*/
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
      background   : #535353;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background   : #07195f;
    }
    li{
      display: inline-block;
      margin: 0 20px;
      img{
        width: 112px;
        height: 91px;
      }
    }
  }

</style>
