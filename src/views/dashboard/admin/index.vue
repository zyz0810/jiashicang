<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="content_index">
          <div class="title_index f18 bold text-center"><span class="txt_linear">数字城管</span></div>
          <div class="flex anjian_num clr_white">
            <div class="flex-item">
              <p class="f16 bold txtColor">今日受理量</p>
              <div class="num flex text-center f26 bold mt_10">
                <span></span>
                <span>2</span>
                <span>2</span>
                <span>5</span>
                <span>8</span>
              </div>
            </div>
            <div class="flex-item">
              <p class="f16 bold txtColor">今日及时结案量</p>
              <div class="num flex text-center f26 bold mt_10">
                <span></span>
                <span>2</span>
                <span>8</span>
                <span>9</span>
                <span>8</span>
              </div>
            </div>
            <div class="flex-item">
              <p class="f16 bold txtColor">今日结案量</p>
              <div class="num flex text-center f26 bold mt_10">
                <span></span>
                <span>1</span>
                <span>2</span>
                <span>6</span>
                <span>8</span>
              </div>
            </div>
          </div>
          <div>
            <el-col :span="12">
              <RingChart :chartData="chartData" :PieChartLegend="PieChartLegend" height="200px"></RingChart>
            </el-col>
            <el-col :span="12">
              <RingChart :chartData="chartData" :PieChartLegend="PieChartLegend" height="200px"></RingChart>
            </el-col>
          </div>
          <div class="flex city_num clr_white text-center">
            <div class="flex-item f16 bold">行走杭州</div>
            <div class="flex-item">
              <p class="f26 clr_yellow bold">79.97</p>
              <p class="mt_5 clr_yellow">总得分</p>
            </div>
            <div class="flex-item">
              <p class="f26 bold">1.04%</p>
              <p class="mt_5">环比下降</p>
            </div>
            <div class="flex-item">
              <p class="f26 bold">第4名</p>
              <p class="mt_5">全市排名</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
       <div class="content_index">
         <div class="title_index f18 bold text-center"><span class="txt_linear">执法办案</span></div>
         <div class="flex">
           <ul class="f16 clr_white bold anjian_cegory">
             <li class="flex">
               <span class="block f26 text-center">268</span>
               <p>今日受理案件</p>
             </li>
             <li class="flex mt_20">
               <span class="block f26 text-center">228</span>
               <p>今日审理案件</p>
             </li>
             <li class="flex mt_20">
               <span class="block f26 text-center">198</span>
               <p>今日结案案件</p>
             </li>
           </ul>
           <div class="map_echart">
             <p class="f20 baseColor bold">今日案件热力图</p>
<!--             <RingChart :chartData="mapData" :PieChartLegend="PieChartLegend" height="13vh"></RingChart>-->
           </div>
           <div class="anjian_genzong bold">
             <p class="baseColor text-center bold f18">案件实时跟踪</p>
             <div class="weui-cells clr_white">
               <div class="weui-cell">
                 <div class="weui-cell__hd flex">
                   <span class="bg_red f12 tag">市容</span>
                   <img class="anjian_img" src="https://profile.csdnimg.cn/8/3/9/3_u011424614"/>
                 </div>
                 <div class="weui-cell__bd">
                   <p class="f16">市容环境-暴露垃圾</p>
                   <p class="f14">有暴露垃圾，请处理</p>
                 </div>
                 <div class="weui-cell__ft f12">
                   <p>上报<span class="ml_10">王先军</span></p>
                   <p>16:23:05</p>
                 </div>
               </div>
               <div class="weui-cell">
                 <div class="weui-cell__hd flex">
                   <span class="bg_blue f12 tag">执法</span>
                   <img class="anjian_img" src="https://profile.csdnimg.cn/8/3/9/3_u011424614"/>
                 </div>
                 <div class="weui-cell__bd">
                   <p class="f16">市容环境-暴露垃圾</p>
                   <p class="f14">有暴露垃圾，请处理</p>
                 </div>
                 <div class="weui-cell__ft f12">
                   <p>上报<span class="ml_10">王先军</span></p>
                   <p>16:23:05</p>
                 </div>
               </div>
               <div class="weui-cell">
                 <div class="weui-cell__hd flex">
                   <span class="bg_purple f12 tag">市容</span>
                   <img class="anjian_img" src="https://profile.csdnimg.cn/8/3/9/3_u011424614"/>
                 </div>
                 <div class="weui-cell__bd">
                   <p class="f16">市容环境-暴露垃圾</p>
                   <p class="f14">有暴露垃圾，请处理</p>
                 </div>
                 <div class="weui-cell__ft f12">
                   <p>上报<span class="ml_10">王先军</span></p>
                   <p>16:23:05</p>
                 </div>
               </div>
               <div class="weui-cell">
                 <div class="weui-cell__hd flex">
                   <span class="bg_red f12 tag">市容</span>
                   <img class="anjian_img" src="https://profile.csdnimg.cn/8/3/9/3_u011424614"/>
                 </div>
                 <div class="weui-cell__bd">
                   <p class="f16">市容环境-暴露垃圾</p>
                   <p class="f14">有暴露垃圾，请处理</p>
                 </div>
                 <div class="weui-cell__ft f12">
                   <p>上报<span class="ml_10">王先军</span></p>
                   <p>16:23:05</p>
                 </div>
               </div>
               <div class="weui-cell">
                 <div class="weui-cell__hd flex">
                   <span class="bg_red f12 tag">市容</span>
                   <img class="anjian_img" src="https://profile.csdnimg.cn/8/3/9/3_u011424614"/>
                 </div>
                 <div class="weui-cell__bd">
                   <p class="f16">市容环境-暴露垃圾</p>
                   <p class="f14">有暴露垃圾，请处理</p>
                 </div>
                 <div class="weui-cell__ft f12">
                   <p>上报<span class="ml_10">王先军</span></p>
                   <p>16:23:05</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mt_10">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="content_index">
          <div class="title_index f18 bold text-center"><span class="txt_linear">信访投诉</span></div>
          <div class="flex bold text-center">
            <div class="flex-item">
              <p class="clr_white">今日投诉量</p>
              <p class="clr_blue03 f26 complain_num mt_10">868</p>
            </div>
            <div class="flex-item">
              <p class="clr_white">今日重复投诉量</p>
              <p class="clr_blue03 f26 complain_num mt_10">868</p>
            </div>
            <div class="flex-item">
              <p class="clr_white">今日结案量</p>
              <p class="clr_blue03 f26 complain_num mt_10">868</p>
            </div>
            <div class="flex-item">
              <RingChart :chartData="chartData" :PieChartLegend="PieChartLegend" height="13vh"></RingChart>
            </div>
          </div>
          <div class="flex bold text-center clr_white" style="margin-top: 30px">
            <div class="flex-item">
              <p class="clr_yellow f26">99.89</p>
              <p class="mt_5">总得分</p>
            </div>
            <div class="flex-item">
              <p class="f26">1.04%</p>
              <p class="mt_5">环比下降</p>
            </div>
            <div class="flex-item">
              <p class="f26">第2名</p>
              <p class="mt_5">全市排名</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="content_index">
          <div class="title_index f18 bold text-center"><span class="txt_linear">审批情况</span></div>
          <div class="top clr_white">
            <div class="f26 bold text-center baseColor approval_num">审核总数：600</div>

            <div class="circle_num text-center">
              <img src="./../../../assets/image/approval_circle.png" class="circle_img">
              <div class="circle_num_item">
                <span class="clr_white f20 bold circleNum_left_bg block">180/15%</span>
                <p class="clr_yellow bold">犬只审批</p>
              </div>
              <div class="circle_num_item">
                <span class="clr_white f20 bold circleNum_left_bg block">120/10%</span>
                <p class="clr_yellow bold">工程车审批</p>
              </div>
              <div class="circle_num_item">
                <span class="clr_white f20 bold circleNum_right_bg block">18/1%</span>
                <p class="clr_yellow bold">广告审批</p>
              </div>
              <div class="circle_num_item">
                <span class="clr_white f20 bold circleNum_right_bg block">260/50%</span>
                <p class="clr_yellow bold">其他审批</p>
              </div>
            </div>

          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
       <div class="content_index">
         <div class="title_index f18 bold text-center"><span class="txt_linear">服务视图</span></div>
         <div class="flex clr_white f14 bold">
           <div class="flex-item">
             <div class="flex text-center">
               <div class="flex-item">
               <p>清扫完成</p>
               <div class="clean_rate clr_blue03 f26">95.6%</div>
             </div>
               <div class="flex-item">
                 <p>洒水完成</p>
                 <div class="clean_rate clr_blue03 f26">95.6%</div>
               </div>
             </div>
             <div class="weui-cell">
               <div class="weui-cell__hd"><RingChart :chartData="PieData2" :PieChartLegend="PieChartLegend" height="10vh"></RingChart></div>
               <div class="weui-cell__bd">
                 <p>亮灯数<span class="clr_blue03 ml_10">18961</span></p>
                 <p>总灯数<span class="clr_blue03 ml_10">18961</span></p>
               </div>
             </div>
             <p>亮灯率</p>
           </div>
           <div class="flex-item">
             <div class="weui-cell">
               <div class="weui-cell__hd"><RingChart :chartData="PieData" :PieChartLegend="PieChartLegend" height="10vh"></RingChart></div>
               <div class="weui-cell__bd">
                 <p>占用厕位<span class="clr_blue03 ml_10">18961</span></p>
                 <p>总厕位数<span class="clr_blue03 ml_10">18961</span></p>
               </div>
             </div>
             <p>厕位占用率</p>
             <div class="weui-cell">
               <div class="weui-cell__hd">
                 <RingChart :chartData="PieData3" :PieChartLegend="PieChartLegend" height="10vh"></RingChart>
<!--                 <PieChartTwo :chartData="PieData3" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="'100%'"></PieChartTwo>-->
               </div>
               <div class="weui-cell__bd">
                 <p>占用泊位<span class="clr_blue03 ml_10">18961</span></p>
                 <p>总泊位数<span class="clr_blue03 ml_10">18961</span></p>
               </div>
             </div>
             <p>泊位占用率</p>
           </div>
         </div>
       </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import "echarts/lib/component/polar"
  import CountTo from 'vue-count-to'
  import PanelGroup from './components/PanelGroup'
  import PieChart from '@/components/Charts/PieChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import RingChart from '@/components/Charts/RingChart'

  export default {
    name: 'DashboardAdmin',
    components: {
      CountTo,
      PanelGroup,
      PieChart,
      BarChartThree,
      RingChart
    },
    data() {
      return {
        PieChartLegend:[],
        PieData3:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '75%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '26',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['95%', '80%'],
            center: ['50%', '50%'],
          },
          angleAxis: {
            max: 100,
            show: false,
            // startAngle: 0,
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
          },
          series: [
            {
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 60,
              showBackground: true,
              data: [75],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#EB4B4B'
                  }, {
                    offset: 1,
                    color: '#F47F7F'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(62,109,176,1)'],
              // center: ['30%', '50%'],
              radius: ['70%', '68%'],
              hoverAnimation: false,
              lable: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: [
                { value: 335, name: '' },
              ],
            },
          ]
        },
        PieData:{
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          color: ['#7CDBFF', '#20437A'],
          gird:{
            top:0,
            left:0,

          },
          // 80%是环中的数据显示
          title: {
            text: '80%',
            left: 'center',
            top: '34%',
            textStyle: {
              color: '#fff',
              fontSize: 26,
              align: 'center',
            }
          },
          graphic: {
            type: 'text',
            left: 'center',
            top: '58%',
            style: {
              text: '满意度',

              textAlign: 'center',
              fill: '#bfbfbf',
              fontSize: 30,
              fontWeight: 700
            }
          },
          series: [
            {
              name: '单位工程评定',
              type: 'pie',
              color: ['red'],
              radius: ['80%', '88%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
              },
              data: [
                { value: 80, name: '优良' },
              ]
            },{
              name: '单位工程评定',
              type: 'pie',
              radius: ['80%', '88%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
              },
              data: [
                { value: 80, name: '优良' },
                { value: 20, name: '不及格' },
              ]
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['#52D6FF'],
              // center: ['30%', '50%'],
              radius: ['70%', '69%'],
              hoverAnimation: false,
              lable: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: [
                { value: 335, name: '' },
              ],
            },
          ]
        },
        PieData2:{
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          color: ['rgba(253,210,90,1)', '#20437A'],
          gird:{
            top:0,
            left:0,

          },
          // 80%是环中的数据显示
          title: {
            text: '80%',
            left: 'center',
            top: '34%',
            textStyle: {
              color: '#fff',
              fontSize: 26,
              align: 'center',
            }
          },
          graphic: {
            type: 'text',
            left: 'center',
            top: '58%',
            style: {
              text: '满意度',

              textAlign: 'center',
              fill: '#bfbfbf',
              fontSize: 30,
              fontWeight: 700
            }
          },
          series: [
            {
              name: '单位工程评定',
              type: 'pie',
              radius: ['80%', '88%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
              },
              data: [
                { value: 80, name: '优良' },
                { value: 20, name: '不及格' },
              ]
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(253,210,90,1)'],
              // center: ['30%', '50%'],
              radius: ['70%', '69%'],
              hoverAnimation: false,
              lable: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: [
                { value: 335, name: '' },
              ],
            },
          ]
        },
        chartData: {
          title:{},
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ]
            }
          ]
        },

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  .content_index{
    padding: 0 20px 20px !important;
    box-shadow: $menuText 0 0 18px inset;
  }
  .anjian_num{
    .num{
      span{
        width: 25px;
        height: 33px;
        line-height: 33px;
        margin-right: 3px;
        background: url("./../../../assets/image/index-num-bg.png") left top no-repeat;
      }
    }

  }
  .clean_rate{
    height: 10vh;
    line-height: 10vh;
    background: url("./../../../assets/image/index-range-bg.png") center center no-repeat;
  }
  .title_index{
    height: 3em;
    line-height: 2em;
    background: url("./../../../assets/image/index-title-bg.png") center top no-repeat;
    /*background-image:-webkit-linear-gradient(bottom,#69CFF4,#fff);*/
    /*-webkit-background-clip:text;*/
    /*-webkit-text-fill-color:transparent;*/
  }
  .city_num{
    width: 100%;

    background: #061A3B;
    border-radius: 10px;


    & > div{
      &:nth-child(1){
        /*width: 1em;*/
        flex: 0.1;
        padding: 0 10px 0 20px;
        background-image:-webkit-linear-gradient(bottom,#69CFF4,#fff);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        /*background: #0A264D;*/
      }
      &:nth-child(2){
        padding: 20px 0;
      }
    }
  }
  .anjian_cegory{
    width: 25%;
    li{
      height: 11vh;
      line-height: 7vh;
      background: url("./../../../assets/image/index-num-bg02.png") left top no-repeat;
      span{
        width: 45%;
      }
      p{
        width: 53%;
        margin-left: 2%;
      }
    }
  }
  .map_echart{
    width: 40%;
  }
  .anjian_genzong{
    width: 40%;
    .anjian_img{
      width: 50px;
      height: 50px;
      border-radius: 10px;
      margin-right: 10px;
    }
    .tag{
      width: 20px;
      padding: 5px;
      margin-right: 5px;
      line-height: 1;
      border-radius: 10px;
    }
  }
  .approval_num{
    height: 60px;
    background: url("./../../../assets/image/approvalTitle_bg.png") center bottom no-repeat;
  }
  .circle_num{
    width: 21vh;
    height: 15vh;
    margin: 0 auto 10px;
    position: relative;
    /*background: url("./../../assets/image/approval_circle.png") center bottom no-repeat;*/
    background-size: 100% 100%;
    .circle_img{
      width: 21vh;
      height: 15vh;

      /*position: ;*/
      /*width: 100%;*/
      /*height: 100%;*/
    }
    .circle_num_item{
      position: absolute;
      &:nth-child(2){
        top: 1.6vh;
        left: -80px;
      }
      &:nth-child(3){
        top: 11vh;
        left: -80px;
      }
      &:nth-child(4){
        top: 1.6vh;
        right: -60px;
      }
      &:nth-child(5){
        top: 11vh;
        right: -80px;
      }
    }
  }
  .circleNum_left_bg{
    padding-right: 3px;
    margin-bottom: 5px;
    border-right: 2px solid $baseColor;
    background-image: linear-gradient(270deg,  rgba(39,73,167,1), rgba(39,73,167,0));
  }
  .circleNum_right_bg{
    padding-left: 3px;
    margin-bottom: 5px;
    border-left: 2px solid $baseColor;
    background-image: linear-gradient(270deg,  rgba(39,73,167,0), rgba(39,73,167,1));
  }
  .complain_num{
    height: 6vh;
    background: url("./../../../assets/image/index-num-bg03.png") center bottom no-repeat;
  }
  /*.dashboard-editor-container {*/
  /*  height: calc(100vh - 100px);*/
  /*  padding: 10px 30px;*/
  /*  !*background-color: rgb(240, 242, 245);*!*/
  /*  width: 90%;*/
  /*  margin: 0 auto;*/
  /*  background: url("./../../../assets/image/index.jpg") no-repeat;*/
  /*  background-size: 100%;*/
  /*  background-position: center;*/
  /*  position: relative;*/
  /*  !*img{*!*/
  /*  !*  width: 100%;*!*/
  /*  !*  height: 100%;*!*/
  /*  !*}*!*/
  /*  .chart-wrapper {*/
  /*    background: #fff;*/
  /*    padding: 16px 16px 0;*/
  /*    margin-bottom: 32px;*/
  /*  }*/
  /*}*/


  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }


  .panel-group {
    margin-top: 18px;

    .card-panel-col {
      margin-bottom: 32px;
      padding-left: 10px !important;
      padding-right: 10px !important;
    }

    .card-panel {
      height: 125px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);

      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-people {
          background: #40c9c6;
        }

        .icon-message {
          background: #36a3f7;
        }

        .icon-money {
          background: #f4516c;
        }

        .icon-shopping {
          background: #34bfa3
        }
      }

      .icon-people {
        color: #40c9c6;
      }

      .icon-message {
        color: #36a3f7;
      }

      .icon-money {
        color: #f4516c;
      }

      .icon-shopping {
        color: #34bfa3
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .iconfont {
        float: left;
        font-size: 58px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width:550px) {
    .card-panel-description {
      display: none;
    }

    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;

      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }

</style>
