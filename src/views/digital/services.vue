<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_server clr_white text-center f16 bold border base_bg shadow">
      <div :class="[activeIndex == 0 ? 'baseColor':'']" @click="handlePageType(0)">
        <img v-if="activeIndex == 0" src="./../../assets/image/services_nav01_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/services_nav01.png" class="nav_img"/>
        <p class="nav_txt">数字停车</p>
      </div>
      <div :class="[activeIndex == 1 ? 'baseColor':'']" @click="handlePageType(1)">
        <img v-if="activeIndex == 1" src="./../../assets/image/services_nav02_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/services_nav02.png" class="nav_img"/>
        <p class="nav_txt">共享单车</p>
      </div>
      <div :class="[activeIndex == 2 ? 'baseColor':'']" @click="handlePageType(2)">
        <img v-if="activeIndex == 2" src="./../../assets/image/services_nav03_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/services_nav03.png" class="nav_img"/>
        <p class="nav_txt">城市亮灯</p>
      </div>
    </div>
    <!--<ul class="f16 clr_white bold text-center link_intro" v-if="activeIndex == 0">-->
      <!--<li class="mb_20 f14">空闲泊位等级</li>-->
      <!--<li>-->
        <!--<p>5级</p>-->
        <!--<span class="block color_bg01"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>4级</p>-->
        <!--<span class="block color_bg02"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>3级</p>-->
        <!--<span class="block color_bg03"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>2级</p>-->
        <!--<span class="block color_bg04"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>1级</p>-->
        <!--<span class="block color_bg05"></span>-->
      <!--</li>-->
    <!--</ul>-->
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 0">
      <p class="f20 bold txt_linear">泊位概况</p>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="width: 40%;">
          <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" height="18vh" divwidth="100%"></PieChartTwo>
        </div>
        <div class="weui-cell__bd bold">
          <p class="f16">当前占用泊位</p>
          <div class="progress_cont mt_10">
            <el-progress :show-text="false" :stroke-width="15" :percentage="80"></el-progress>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
          </div>
          <p class="mt_10">
            占用泊位<span class="baseColor txt_shadow m_r30">188</span>
            占用泊位<span class="baseColor txt_shadow">188</span>
          </p>
        </div>
      </div>
      <!--<div class="mt_20">-->
        <!--<p class="mb_20 f16 bold text-center">全区停车场数：1210</p>-->
        <!--<div  class="weui-cell">-->
          <!--<div class="weui-cell__hd text-center" style="width: 90px;">-->
            <!--<p class="f26 bold clr_yellow mb_20">25321</p>-->
            <!--<p class="f18">普查泊位</p>-->
          <!--</div>-->
          <!--<div class="weui-cell__bd">-->
            <!--<RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="20vh"></RingChart>-->
          <!--</div>-->
        <!--</div>-->

      <!--</div>-->
      <!--<div  class="weui-cell">-->
        <!--<div class="weui-cell__hd text-center" style="width: 90px;">-->
          <!--<p class="f26 bold clr_yellow mb_20">25321</p>-->
          <!--<p class="f18">接入泊位</p>-->
        <!--</div>-->
        <!--<div class="weui-cell__bd">-->
          <!--<RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="20vh"></RingChart>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 1">
      <p class="f20 bold txt_linear mb_20">车辆概况</p>
      <div class="flex f14 bold clr_white bicycle text-center">
        <div class="flex-item flex_block_bg">
          <p>已备案车辆</p>
          <p class="clr_purple mt_10"><span class="f26">1.0</span>万</p>
        </div>
        <div class="flex-item flex_block_bg">
          <p>活跃车辆</p>
          <p class="clr_blue01 f26 mt_10">3287</p>
        </div>
        <div class="flex-item flex_block_bg">
          <p>按规停放车辆</p>
          <p class="clr_blue02 f26 mt_10">7892</p>
        </div>
        <div class="flex-item flex_block_bg">
          <p>违规停放</p>
          <p class="clr_yellow f26 mt_10">1887</p>
        </div>
      </div>
      <div class="top clr_white mt_20 ">
        <p class="f20 bold txt_linear">区域统计</p>
        <RingChart :chartData="chartDataTwo" :PieChartLegend="PieChartLegend" height="200px" divwidth="100%"></RingChart>
      </div>
      <div class="left_bottom mt_20">
        <p class="f20 bold txt_linear">违规次数</p>
        <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="200px" divwidth="100%"></BarChartFour>
      </div>

    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 2">
      <p class="f20 bold txt_linear">亮灯率</p>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="width: 40%;">
          <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" height="18vh" divwidth="100%"></PieChartTwo>
        </div>
        <div class="weui-cell__bd bold">
          <p class="f16">当前亮灯情况</p>
          <div class="progress_cont mt_10 progress_light">
            <el-progress :show-text="false" :stroke-width="15" :percentage="80"></el-progress>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
          </div>
          <p class="mt_10">
            亮灯数<span class="clr_green txt_shadow m_r30"> {{lightNum.num}}</span>
            总灯数<span class="clr_green txt_shadow"> {{lightNum.count}}</span>
          </p>
        </div>
      </div>
      <div class="mt_20">
        <el-row :gutter="10" class="mt_20 text-center">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="text-center clearfix">
            <p class="f16 bold txt_linear mb_10">节能率</p>
            <PieChartTwo :chartData="PieData2" :PieChartLegend="PieChartLegend" height="110px" divwidth="50%"></PieChartTwo>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="text-center clearfix">
            <p class="f16 bold txt_linear mb_10">综合评价</p>
<!--            <PieChartTwo :chartData="PieData2" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>-->
<!--            <span :class="['inlineBlock','bor_circle','flex','bor_blue',   ]"><span class="circle_two inlineBlock">{{formData.evaluate}}</span></span>-->
            <span v-if="formData.evaluate == '优'" class="inlineBlock bor_circle flex bor_green"><span class="circle_two inlineBlock flex f20">{{formData.evaluate}}</span></span>
            <span v-if="formData.evaluate == '差'" class="inlineBlock bor_circle flex bor_red"><span class="circle_two inlineBlock flex f20">{{formData.evaluate}}</span></span>
            <span v-else class="inlineBlock bor_circle flex bor_blue"><span class="circle_two inlineBlock flex f20">{{formData.evaluate}}</span></span>
          </el-col>
        </el-row>
          <div class="text-center" style="width:50%;margin: 0 auto 0;">
            <p class="f16 bold txt_linear mb_10">故障警告</p>
            <span class="inlineBlock bor_circle bor_red flex"><span class="circle_two inlineBlock f26 flex">{{formData.warnNum}}</span></span>
          </div>


      </div>

    </div>
    <div class="top_div flex clr_white text-center f16" v-if="activeIndex == 2">
      <div class="flex f16 bold mr_20 border shadow" style="width: 300px;">
        <div class="flex-item txt_linear">控制柜</div>
        <div class="flex-item">
          总览
          <span class="txt_linear">{{totalData.controlCabinetNum}}</span>
        </div>
        <!--<div class="flex-item">-->
          <!--离线-->
          <!--<span class="txt_linear">4</span>-->
        <!--</div>-->
        <!--<div class="flex-item">-->
          <!--故障-->
          <!--<span class="txt_linear">4</span>-->
        <!--</div>-->
      </div>
      <div class="flex f16 bold mr_20 border shadow" style="width: 350px;">
        <div class="flex-item txt_linear">亮灯设备</div>
        <div class="flex-item">
          总览
          <!--<span class="txt_linear">{{totalData.lampPostNum}}</span>-->
          <span class="txt_linear">11012</span>
        </div>
        <!--<div class="flex-item">-->
          <!--离线-->
          <!--<span class="txt_linear">4</span>-->
        <!--</div>-->
        <!--<div class="flex-item">-->
          <!--故障-->
          <!--<span class="txt_linear">4</span>-->
        <!--</div>-->

      </div>
      <div class="flex border shadow" style="position: relative;" @click="showOption == 0?showOption=1:showOption=0">
        设备点位
        <div style="position: absolute;top: 35px;left: 0;width: 100%; line-height: 30px;" class="clr_white border shadow" v-if="showOption==1">
          <p :class="showType == 1 ? 'baseColor':''" @click="handleTypeLight(1)">亮灯杆</p>
          <p :class="showType == 2 ? 'baseColor':''" @click="handleTypeLight(2)">控制柜</p>
        </div>
      </div>
    </div>


    <div class="center_content clr_white text-center" v-if="activeIndex == 0">
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point29.png"/></div>
        <div class="weui-cell__bd">停车场</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point36.png"/></div>
        <div class="weui-cell__bd">AI视频</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point38.png"/></div>
        <div class="weui-cell__bd">普通视频</div>
      </div>
    </div>
    <div class="center_content clr_white text-center" v-if="activeIndex == 1">
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point30.png"/></div>
        <div class="weui-cell__bd">共享单车</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point36.png"/></div>
        <div class="weui-cell__bd">AI视频</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point38.png"/></div>
        <div class="weui-cell__bd">普通视频</div>
      </div>
    </div>
    <div class="center_content clr_white text-center" v-if="activeIndex == 2">
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point35.png"/></div>
        <div class="weui-cell__bd">亮灯设备开</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point34.png"/></div>
        <div class="weui-cell__bd">亮灯设备关</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point33.png"/></div>
        <div class="weui-cell__bd">控制柜开</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point32.png"/></div>
        <div class="weui-cell__bd">控制柜关</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point31.png"/></div>
        <div class="weui-cell__bd">控制柜故障</div>
      </div>
    </div>

  </div>
</template>

<script>
  import echarts from 'echarts'
  import RingChart from '@/components/Charts/RingChart'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point29.png' // 停车位
  import point02 from '@/assets/image/point30.png' // 共享单车
  import point03 from '@/assets/image/point31.png' // 控制柜故障
  import point04 from '@/assets/image/point32.png' // 控制柜关
  import point05 from '@/assets/image/point33.png' // 控制柜开
  import point06 from '@/assets/image/point34.png' // 亮灯关
  import point07 from '@/assets/image/point35.png' // 亮灯开
  import point08 from '@/assets/image/point36.png' // AI视频
  import point09 from '@/assets/image/point38.png' // 普通视频
  import toolTipBg from '@/assets/image/digital-bg.png' // 引入刚才的map.js 注意路径
  import {pointList} from '@/api/system'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import {getLampPostList,getcontrolcabinetlist,getevaluate,parkList} from '@/api/digitalServices'
  import {generalIndex} from "@/api/overView";
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
        lampPostList:[],
        showType:2,
        showOption:0,
        chartDataTwo: {
          title:{},
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          color:['#06F5FF','#FFBA0A','#367CFD','#E20280'],
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              // label: {
              //   show: false,
              //   position: 'center',
              //
              // },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              // labelLine: {
              //   show: false
              // },
              markLine :{
                label  :{
                  show:true,
                  position :'outside'
                },
              },
              labelLine:{
                normal:{
                  lineStyle: {
                    color: '#fff'
                  },
                  length:10,
                  length2 :35,
                }
              },
              label :{
                formatter: [
                  '{c}',
                  '{b}',
                ].join('\n'),
                verticalAlign :'bottom',
                position:'outside',
                textShadowOffsetY :10,
                align :'right',
                color:'white',
                height :60,
                lineHeight:30,
                fontSize:'16',
                rich: {
                  a: {
                    verticalAlign:'bottom',
                    // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
                  }
                }
              },
              data: [
                {value: 220, name: '禁停区'},
                {value: 205, name: '禁行区'},
                {value: 320, name: '重点监管区'},
                {value: 505, name: '停车区'},
              ]
            }
          ]
        },
        PieData:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '20',
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
              data: [],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  // color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  //   offset: 0,
                  //   color: 'rgba(252,209,82,1)'
                  // }, {
                  //   offset: 1,
                  //   // color: 'red'
                  //   color: 'rgba(248,211,91,1)'
                  // }]),
                  color:'rgba(48,177,106,1)'
                }
              }
            },{//里面细圈
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(48,177,106,1)'],
              // center: ['30%', '50%'],
              radius: ['74%', '72%'],
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
              data: ['59'],
            },
          ]
        },
        PieData2:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '20',
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
              data: [],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(252,209,82,1)'
                  }, {
                    offset: 1,
                    // color: 'red'
                    color: 'rgba(248,211,91,1)'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{//里面细圈
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(252,209,82,1)'],
              // center: ['30%', '50%'],
              radius: ['74%', '72%'],
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
              data: ['59'],
            },
          ]
        },
        activeIndex:0,
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
        chartDataThree: {
          title:{},
          tooltip: {
            trigger: 'item',
            // formatter: '{a} <br/>{b}: {c} ({d}%)'
            backgroundColor: "transparent",
            borderWidth: 1,
            padding: 10,
            formatter: function(params) {
              // var str =params['percent']+'%'+'<br/>'+params.data.value+'笔'
              var str = `<div style = "background:url(" + toolTipBg + ") no-repeat center center ;width:60px;height:60px; ">${
                params["percent"]
              }%<br/> ${params.data.value}笔</div>`;
              // parms.marker
              console.log(str);
              return str;
            }
          },
          legend: {
            // show:false
            orient: 'vertical',
            right: '0',
            top:'10%',
            textStyle: {
              color: '#fff',          // 图例文字颜色
              fontSize:15,
              lineHeight:25
            }
          },
          color:['#BBF2F4','#8757DF','#2696E9','#4BADDC'],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '65%'],
              center: ['35%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center',
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
              itemStyle : {
                normal : {
                  borderWidth:8, //设置border的宽度有多大
                  // borderColor:'#2C8AF0',
                  borderColor:'#061027',
                },
              },
              // itemStyle:{
              //   borderWidth:5, //设置border的宽度有多大
              //   borderColor:'#fff',
              // },
              data: [
                {value: 120, name: '公用泊位 20'},
                {value: 105, name: '专用泊位 80'},
                {value: 50, name: '道路泊位 65'},
                {value: 305, name: '其他泊位 99'},
              ]
            }
          ]
        },
        PieChartLegend:[],
        BarData:{
          title: {},
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '0',
            right: '0',
            bottom: '40',
            top: '20',
            containLabel: true
          },
          //----------------   图例 legend  -----------------
          legend: {
            type:'plain',				//----图例类型，默认为'plain'，当图例很多时可使用'scroll'
            bottom:'5',					//----图例相对容器位置,top\bottom\left\right
            data:[						//----图例内容
              {
                name:'应处置案件',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              },
              {
                name:'已处置案件',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              }
            ],
          },

          xAxis: [
            {


              axisTick: {
                show:false,
                alignWithLabel: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize:'15',
                  fontWeight:'bold'
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'category',
              data: ['浦沿中队', '西兴中队', '长河中队']
            }
          ],
          yAxis: [
            {
              axisTick: {
                show:false,
                alignWithLabel: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize:'15',
                  fontWeight:'bold'
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'value'
            }
          ],
          series: [
            {
              name:'应处置案件',
              type: 'bar',
              barWidth: 20,//柱图宽度
              barGap:'50%',
              // barCategoryGap:'50%',/*多个并排柱子设置柱子之间的间距*/
              itemStyle: {
                normal: {
                  color:'#2FB26B'
                }
              },
              data: [320, 332, 301]
            },
            {
              name:'已处置案件',
              type: 'bar',
              barWidth: 20,//柱图宽度
              barGap:'50%',
              // barCategoryGap:'100%',/*多个并排柱子设置柱子之间的间距*/
              itemStyle: {
                normal: {
                  color:'#00A0EB'

                }
              },
              data: [220, 182, 191]
            }
          ]
        },
        BarDataTwo:{
          title: {},
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '0',
            right: '50',
            bottom: '-20',
            top: '20',
            containLabel: true
          },
          xAxis: [
            {
              show:false,
              axisTick: {
                alignWithLabel: false
              },
              splitLine: { show: false },//去除网格线
              type: 'value',
            }
          ],
          yAxis: [
            {
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize:'15',
                  fontWeight:'bold'
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'category',
              data:['哈罗','摩拜','青桔','骑呗',]
            }
          ],
          series: [
            {
              type: 'bar',
              barWidth: 20,//柱图宽度
              barGap:'180%',
              barCategoryGap:'100%',/*多个并排柱子设置柱子之间的间距*/
              // label: {
              //   normal: {
              //     color: 'red',
              //     show: true,
              //     position: 'top'
              //   }
              // },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [
                      { offset: 0, color: '#006FFF' },
                      { offset: 1, color: 'rgba(4,178,255,1)' }
                    ]
                  ),
                  label: {
                    show : true,
                    position : 'right',
                    textStyle : {
                      color: '#fff',
                      fontSize:'16',
                      fontWeight:'bold'
                    }
                  }

                }
              },
              data: [320, 332, 301,230,]
            },
          ]
        },
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
        formData:{},
        totalData:{
          lampPostNum:'',//杆
          controlCabinetNum:'',
        },
        lightNum:{},
        controlList:[],
        parkList:[],
        pointList:[],
      }
    },

    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
    },
    mounted() {
      // 挂载完成后渲染地图
      // this.$nextTick(function() {
      //
      // })
      this.onLoad();
      // this.getLampPostList();
      this.getChartData();
      this.getData();
      // this.getControlCabinetlist();
      this.getParkList();
    },
    methods: {
      handlePageType(val){
        this.activeIndex = val;
        if(val == 0){
          this.getParkList();
        }else if(val == 2){
          this.getControlCabinetlist();
        }else if(val == 1){
          this.getPointList();
        }
      },
      getPointList(){
        pointList({type:'allList'}).then((res) => {
          this.pointList = res.data;
          this.mapPoint('point',this.pointList)
        });
      },
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        this.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';

      },
      mapPoint(type,list){
        console.log('点位')
        //创建图片对象
        this.map.clearOverLays();
        let icon01 = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon02 = new T.Icon({
          iconUrl: point02,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon03 = new T.Icon({
          iconUrl: point03,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon04 = new T.Icon({
          iconUrl: point04,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon05 = new T.Icon({
          iconUrl: point05,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon06 = new T.Icon({
          iconUrl: point06,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon07 = new T.Icon({
          iconUrl: point07,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon08 = new T.Icon({
          iconUrl: point08,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon09 = new T.Icon({
          iconUrl: point09,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let markers = []
        if(type == 'control'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            // 0：关  1：开
            if(list[i].status == 0){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, point04,this,list[i]);
            }else if(list[i].status == 1){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon05,this,list[i]);
            }else if(list[i].status == 2){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon03,this,list[i]);
            }
          }
        }else if(type == 'park'){
          console.log('jjjj:'+list.length)
          for (let i = 0; i < list.length; i++) {
            // var marker
            // 0：关  1：开
            if(list[i].way_longitude  && list[i].way_latitude){
              console.log(list[i].way_longitude,list[i].way_latitude);
              console.log('停车场')
              let point = new T.LngLat(list[i].way_longitude,list[i].way_latitude);
              markers[i]  = drawTMaker(point, icon01,this,list[i]);
            }else{
              if(list[i].class==1){
                let point = new T.LngLat(list[i].longitude,list[i].latitude);
                markers[i]  = drawTMaker(point, icon08,this,list[i]);
              }else if(list[i].class==3){
                let point = new T.LngLat(list[i].longitude,list[i].latitude);
                markers[i]  = drawTMaker(point, icon09,this,list[i]);
              }
            }
          }
        }else if(type == 'point'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            if(list[i].class==1){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon08,this,list[i]);
            }else if(list[i].class==3){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon09,this,list[i]);
            }

          }
        }else{

          for (let i = 0; i < list.length; i++) {
            // var marker
            // 0：关  1：开
            if(list[i].status == 0){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon01,this,list[i]);
            }else if(list[i].status == 1){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon02,this,list[i]);
            }

          }
        }

          //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
          function drawTMaker(lnglat,icon,that,txt){
            console.log('获取')
            var marker =  new T.Marker(lnglat, {icon: icon});
            that.map.addOverLay(marker);
            marker.addEventListener("click", function (m) {
              console.log(m)
              let infoWin1 = new T.InfoWindow();
              console.log(txt)
              let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
              let status;
              if(txt.status == 0){
                status = '关'
              }else  if(txt.status == 1){
                status = '开'
              }else {
                status = '故障'
              }
              let sContent = '';
              if(type == 'park'){
               if(txt.way_longitude  && txt.way_latitude){
                 sContent =
                   '<div class="point_info">' +
                   '<p class="f14 time">停车场名称：' + txt.park_name + '</p>' +
                   '<p class="f14 time">停车场类型：' + txt.park_type_name + '</p>' +
                   '<p class="f14 time">停车场地址：' + txt.address + '</p>' +
                   '</div>';
               }else{
                 sContent =
                   '<div class="point_info">' +
                   '<p class="f14 time">监控名称：' + txt.name + '</p>' +
                   '<p class="f14 time">所属区域：' + txt.depart_name + '</p>' +
                   '<p class="f14 time">来源区域：' + txt.community_name + '</p>' +
                   '<p class="f14 time">所在地址：' + txt.install_place + '</p>' +
                   '<p class="f14 baseColor text-right">查看视频</p>' +
                   '</div>';
               }
              }else if(type == 'point'){
                sContent =
                  '<div class="point_info">' +
                  '<p class="f14 time">监控名称：' + txt.name + '</p>' +
                  '<p class="f14 time">所属区域：' + txt.depart_name + '</p>' +
                  '<p class="f14 time">来源区域：' + txt.community_name + '</p>' +
                  '<p class="f14 time">所在地址：' + txt.install_place + '</p>' +
                  '<p class="f14 baseColor text-right">查看视频</p>' +
                  '</div>';
              }else{
                sContent =
                  '<div class="point_info">' +
                  '<p class="f14 time">监控名称：' + txt.name + '</p>' +
                  '<p class="f14 time">状态：' + status + '</p>' +
                  '</div>';
              }
              infoWin1.setContent(sContent);
              marker.openInfoWindow(infoWin1);

            });// 将标注添加到地图中
            return marker;
          }

      },
      handleTypeLight(val){
        this.showType = val
        if(val == 1){
          this.getLampPostList();
        }else{
          this.getControlCabinetlist();
        }
      },
      //亮灯杆列表
      getLampPostList(){
        getLampPostList().then((res) => {
          this.formData.lampPostNum = res.data.total;
          this.lampPostList = res.data.list;
          this.mapPoint('lamp',this.lampPostList)
        });
      },
      //控制柜列表
      getControlCabinetlist(){
        getcontrolcabinetlist().then((res) => {
          this.totalData.controlCabinetNum =  res.data.total;
          let b= res.data.list;
          let a = [{
            address: "长江西路湘湖34北路",
            latitude: 30.188826,
            longitude:120.198799,
            name: "长湘109",
            status: 2,},{
            address: "长江西路湘湖北23路",
            latitude: 30.183412,
            longitude: 120.220823,
            name: "长湘109",
            status: 2,}]
          b = b.concat(a);
          this.controlList = b
          this.mapPoint('control',this.controlList)
        });
      },
      getChartData(){
        getevaluate({year:this.$moment().format('YYYY')}).then((res) => {
          this.formData = res.data;
          this.PieData2.series[0].data = [((Number(res.data.powerRate))*100).toFixed(2)];
          this.PieData2.title[0].text = ((Number(res.data.powerRate))*100).toFixed(2)+'%';
          this.PieData.series[0].data = [((Number(res.data.lightRate))*100).toFixed(2)];
          this.PieData.title[0].text = ((Number(res.data.lightRate))*100).toFixed(2)+'%';
        });
      },
      //获取灯总数及亮灯数
      getData(){
        generalIndex().then((res) => {
          this.lightNum={
            num:res.data.light.num,
            count:res.data.light.count
          };
        });
      },
      //获取停车场点位及视频点位
      getParkList(){
        parkList().then((res) => {
          // this.parkList = res.data.data;
          let a = res.data.data;
          pointList({type:'allList'}).then((res) => {
            // this.pointList = res.data;
            let b = a.concat(res.data);
            this.parkList = b;
            this.mapPoint('park',this.parkList)
          });

        });
      },

    }
  }
</script>
<style lang="scss" scoped>
  /deep/.tdt-infowindow-content-wrapper{
    width: auto;
  }
  .progress_cont{
    border: 1px solid rgb(15,50,53) !important;
  }

.progress_light{

  /deep/.el-progress-bar__inner{
    background-image: linear-gradient(to left,rgba(48,171,106,1) ,  rgba(48,164,104,0)) !important; /* 标准的语法（必须放在最后） */
  }
}
.bor_circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  &.bor_red{
    border:10px solid red;
    .circle_two{
      border:1px solid red;
    }
  }
  &.bor_blue{
    border:10px solid rgb(5,139,224);
    .circle_two{
      border:1px solid rgb(5,139,224);
    }
  }
  &.bor_green{
    border:10px solid rgb(49,174,106);
    .circle_two{
      border:1px solid rgb(49,174,106);
    }
  }
  .circle_two{
    width: 70px;
    height:70px;
    border-radius: 50%;
    line-height: 100px;
  }
 }

  .bicycle{
    .flex-item{
      padding: 20px 0;
      &:nth-child(2){
        margin: 0 10px;
      }
      &:nth-child(3){
        margin-right: 10px;
      }
    }
  }
  .link_intro{
    position: fixed;
    left: 100px;
    top: 13vh;
    z-index: 2000;
    width: 100px;
    padding: 20px;
    margin-left: 3vh;
    background: rgba(4,40,90,1);
    li{
      & > span{
        width: 40px;
        height: 10px;
        margin: 3px auto 15px;
      }
    }
    .color_bg01{
      background: rgba(255,100,71,1);
    }
    .color_bg02{
      background: rgba(254,98,71,1);
    }
    .color_bg03{
      background: rgba(222,194,21,1);
    }
    .color_bg04{
      background: rgba(231,96,196,1);
    }
    .color_bg05{
      background: rgba(147,126,214,1);
    }
    .color_bg06{
      background: rgba(15,165,197,1);
    }
    .color_bg07{
      background: rgba(145,178,61,1);
    }
  }

</style>
