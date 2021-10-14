<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content base_bg_left">
<!--        <div class="clr_white p20">-->
<!--          <p class="f20 bold txt_linear">亮灯概况</p>-->
<!--          <div class="weui-cell facilities_bg">-->
<!--            <div class="weui-cell__hd" style="width: 40%;">-->
<!--              <PieChartTwo :chartData="PieDataTwo" :PieChartLegend="PieChartLegend" height="20vh" :divwidth="'100%'"></PieChartTwo>-->
<!--            </div>-->
<!--            <div class="weui-cell__bd bold">-->
<!--              <p class="f20">当前亮灯情况</p>-->
<!--              <div class="progress_cont mt_10">-->
<!--                <el-progress :show-text="false" :stroke-width="15" :percentage="80"></el-progress>-->
<!--                <span class="progress_border"></span>-->
<!--                <span class="progress_border"></span>-->
<!--                <span class="progress_border"></span>-->
<!--                <span class="progress_border"></span>-->
<!--              </div>-->
<!--              <p class="mt_10">-->
<!--                亮灯数<span class="clr_yellow txt_shadow m_r30">226521</span>-->
<!--                总灯数<span class="clr_yellow txt_shadow">21596</span>-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

      <div class="clr_white">
        <p class="f20 bold txt_linear">市政管理信息总览</p>
        <div class="weui-cell facilities_weui">
          <div class="weui-cell__hd"><img src="./../../assets/image/facilities_left01_active.png"></div>
          <div class="weui-cell__bd">
            <p class="clr_white">桥梁(江虹桥)</p>
            <p class="bold clr01"><span class="f26">1</span>个</p>
          </div>
        </div>
        <div class="weui-cell facilities_weui">
          <div class="weui-cell__hd"><img src="./../../assets/image/facilities_left02.png"></div>
          <div class="weui-cell__bd">
            <p class="clr_white">智能感应井盖</p>
            <p class="bold clr02"><span class="f26">103</span>个</p>
          </div>
        </div>
        <div class="weui-cell facilities_weui">
          <div class="weui-cell__hd"><img src="./../../assets/image/facilities_left03.png"></div>
          <div class="weui-cell__bd">
            <p class="clr_white">养护道路</p>
            <p class="bold clr03"><span class="f26">103</span>个</p>
          </div>
        </div>
        <div class="weui-cell facilities_weui">
          <div class="weui-cell__hd"><img src="./../../assets/image/facilities_left04.png"></div>
          <div class="weui-cell__bd">
            <p class="clr_white">排水管线长度</p>
            <p class="bold clr04"><span class="f26">1</span>个</p>
          </div>
        </div>
        <div class="weui-cell facilities_weui">
          <div class="weui-cell__hd"><img src="./../../assets/image/facilities_left05.png"></div>
          <div class="weui-cell__bd">
            <p class="clr_white">养护单位</p>
            <p class="bold clr05"><span class="f26">14</span>个</p>
          </div>
        </div>
<!--        <div class="f14 bold flex mt_20 facilities_intro ml_10">-->
<!--          <div>养护道路：103条</div>-->
<!--          <div>排水管线长度：5625米</div>-->
<!--        </div>-->
<!--        <div class="f14 bold flex mt_20 facilities_intro ml_10">-->
<!--          <div>养护单位：14家</div>-->
<!--          <div>智能感应井盖：103个</div>-->
<!--        </div>-->
<!--        <div class="f14 bold flex mt_20 mb_20 facilities_intro ml_10">-->
<!--          <div>管道水位监测：24个</div>-->
<!--          <div>管道流量监测：2个</div>-->
<!--        </div>-->
<!--        <RingChart :class="'transformChart'" :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="200px"></RingChart>-->
        <!--<div class="flex facilitiesWarning_num f14 bold text-center">-->
          <!--<div class="flex-item">-->
            <!--<div class="facilities_bg01"><span class="f26">12</span> 件</div>-->
            <!--<p class="mt_10">流量报警</p>-->
          <!--</div>-->
          <!--<div class="flex-item">-->
            <!--<div class="facilities_bg02"><span class="f26">36</span> 件</div>-->
            <!--<p class="mt_10">水位报警</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="facilitiesWarning_num text-center bold">-->
          <!--<div class="facilities_bg03"><span class="f26">12</span> 件</div>-->
          <!--<p class="mt_10">井盖报警</p>-->
        <!--</div>-->

      </div>

    </div>
    <div class="right_content base_bg_right">
<!--      <div class="clr_white">-->
<!--        <p class="f20 bold txt_linear">江虹桥异常情况</p>-->
<!--        <div class="flex bold text-center mt_10">-->
<!--          <div class="flex-item equipment_normal">-->
<!--            <div class="f26 num">46</div>-->
<!--            <p class="f16 mt_10">正常设备</p>-->
<!--          </div>-->
<!--          <div class="flex-item equipment_abnormal">-->
<!--            <div class="f26 num">0</div>-->
<!--            <p class="f16 mt_10">异常设备</p>-->
<!--          </div>-->
<!--          <div class="flex-item rate_abnormal">-->
<!--            <div class="num">-->
<!--              <span class="f26">0</span>%-->
<!--              &lt;!&ndash;<ring-chart :chartData="pieData" :PieChartLegend="PieChartLegend" height="60px" divwidth="100%"></ring-chart>&ndash;&gt;-->
<!--            </div>-->
<!--            <p class="f16 mt_10">异常率</p>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--      <div class="mt_20 ">-->
<!--        <p class="f20 bold txt_linear">江虹桥预警信息</p>-->
<!--        <div class="flex warning_intro clr_white mt_10">-->
<!--          <div class="flex m_r30"><span class="block warning_circle bg_green"></span>正常</div>-->
<!--          <div class="flex m_r30"><span class="block warning_circle bg_blue"></span>一级预警</div>-->
<!--          <div class="flex m_r30"><span class="block warning_circle bg_yellow"></span>二级预警</div>-->
<!--          <div class="flex m_r30"><span class="block warning_circle bg_red"></span>三级预警</div>-->
<!--        </div>-->
<!--        <div class="flex divBar_content bold mt_10 text-center">-->
<!--          <div class="flex-item">-->
<!--            <div class="bar_div f16 bg_green">-->
<!--              <div>总27</div>-->
<!--              <p>0</p>-->
<!--            </div>-->
<!--            <p class="f14 clr_blue01 mt_5">应变计</p>-->
<!--          </div>-->
<!--          <div class="flex-item">-->
<!--            <div class="bar_div f16 bg_green">-->
<!--              <div>总27</div>-->
<!--              <p>0</p>-->
<!--            </div>-->
<!--            <p class="f14 clr_blue01 mt_5">饶变计</p>-->
<!--          </div>-->
<!--          <div class="flex-item">-->
<!--            <div class="bar_div f16 bg_green">-->
<!--              <div>总27</div>-->
<!--              <p>0</p>-->
<!--            </div>-->
<!--            <p class="f14 clr_blue01 mt_5">温湿度计</p>-->
<!--          </div>-->
<!--          <div class="flex-item">-->
<!--            <div class="bar_div f16 bg_green">-->
<!--              <div>总27</div>-->
<!--              <p>0</p>-->
<!--            </div>-->
<!--            <p class="f14 clr_blue01 mt_5">裂缝计</p>-->
<!--          </div>-->
<!--          <div class="flex-item">-->
<!--            <div class="bar_div f16 bg_green">-->
<!--              <div>总27</div>-->
<!--              <p>0</p>-->
<!--            </div>-->
<!--            <p class="f14 clr_blue01 mt_5">钢索计</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mt_20">-->
<!--        <p class="f20 bold clr_white txt_linear mb_20">江虹桥实时曲线</p>-->
<!--        <el-form :inline="true" :model="listQuery" class="facilities_form">-->
<!--          <el-form-item label="检测项类型">-->
<!--            <el-select v-model="listQuery.type">-->
<!--              <el-option v-for="item in typeList" :label="item.item_name" :value="item.item_name" :key="item.item_name"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="监测线">-->
<!--            <el-select v-model="listQuery.monitorlineid" placeholder="">-->
<!--              <el-option v-for="item in dataLine" :label="item.name" :value="item.id" :key="item.id"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button v-waves class="filter-item" type="primary">生成曲线</el-button>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--        <LineChart :chartData="lineData" :BarChartLegend="PieChartLegend" height="25vh" :divwidth="'100%'"></LineChart>-->
<!--      </div>-->

      <div>
        <p class="f20 bold txt_linear">江虹桥预警信息</p>
        <div class="flex warning_intro clr_white mt_10">
          <div class="flex m_r30"><span class="block warning_circle bg01"></span>正常</div>
          <div class="flex m_r30"><span class="block warning_circle bg02"></span>一级预警</div>
          <div class="flex m_r30"><span class="block warning_circle bg03"></span>二级预警</div>
          <div class="flex m_r30"><span class="block warning_circle bg04"></span>三级预警</div>
        </div>
        <div class="progress_cont mt_10 progress_light">
          <div class="weui-cell clr06">
            <div class="weui-cell__hd txtColor">应变计</div>
            <div class="weui-cell__bd"><el-progress :show-text="false" :stroke-width="16" :percentage="percentageNum"></el-progress></div>
            <div class="weui-cell__ft f12 clr_white ml_10 bg01">总：27</div>
          </div>
          <div class="weui-cell clr06">
            <div class="weui-cell__hd txtColor">挠度计</div>
            <div class="weui-cell__bd"><el-progress :show-text="false" :stroke-width="16" :percentage="percentageNum"></el-progress></div>
            <div class="weui-cell__ft f12 clr_white ml_10 bg01">总：10</div>
          </div>
          <div class="weui-cell clr06">
            <div class="weui-cell__hd txtColor">温湿度计</div>
            <div class="weui-cell__bd"><el-progress :show-text="false" :stroke-width="16" :percentage="percentageNum"></el-progress></div>
            <div class="weui-cell__ft f12 clr_white ml_10 bg01">总：1</div>
          </div>
          <div class="weui-cell clr06">
            <div class="weui-cell__hd txtColor">裂缝计</div>
            <div class="weui-cell__bd"><el-progress :show-text="false" :stroke-width="16" :percentage="percentageNum"></el-progress></div>
            <div class="weui-cell__ft f12 clr_white ml_10 bg01">总：2</div>
          </div>
          <div class="weui-cell clr06">
            <div class="weui-cell__hd txtColor">钢索计</div>
            <div class="weui-cell__bd"><el-progress :show-text="false" :stroke-width="16" :percentage="percentageNum"></el-progress></div>
            <div class="weui-cell__ft f12 clr_white ml_10 bg01">总：6</div>
          </div>
        </div>

      </div>
    </div>
    <!--<div class="top_div flex clr_white text-center">-->
      <!--<div class="flex f14 bold mr_20 border shadow" style="width: 400px;">-->
        <!--<div class="flex-item txt_linear">井盖设备</div>-->
        <!--<div class="flex-item">-->
          <!--总览-->
          <!--<span class="txt_linear">66</span>-->
        <!--</div>-->
        <!--<div class="flex-item">-->
          <!--离线-->
          <!--<span class="txt_linear">4</span>-->
        <!--</div>-->
        <!--<div class="flex-item">-->
          <!--故障-->
          <!--<span class="txt_linear">4</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="flex border shadow" style="position: relative;" @click="showOption == 0?showOption=1:showOption=0">-->
        <!--设备点位-->
        <!--<div style="position: absolute;top: 35px;left: 0;width: 100%; line-height: 30px;" class="clr_white border shadow" v-if="showOption==1">-->
          <!--<p :class="showType == 1 ? 'baseColor':''" @click="showType = 1">井盖点位</p>-->
          <!--<p :class="showType == 2 ? 'baseColor':''" @click="showType = 2">江虹桥</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="top_div flex clr_white text-center">
      <div class="flex f16 bold mr_20 border shadow" style="width: 600px;" @click="getPoint(1)">
        <div class="flex-item baseColor">设备管理</div>
        <div class="flex-item">
          正常
          <span class="txt_linear">1323</span>
        </div>
        <div class="flex-item">
          异常
          <span class="txt_linear">823</span>
        </div>
        <div class="flex-item">
          异常率
          <span class="txt_linear">823</span>
        </div>
      </div>
      <div class="flex f16 bold border shadow" style="width: 260px;" @click="getPoint(2)">
        <div class="flex-item baseColor">视频</div>
        <div class="flex-item">
          普通视频
          <span class="txt_linear">18</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts-liquidfill';
  import RingChart from '@/components/Charts/RingChart';
  import PieChartTwo from '@/components/Charts/PieChartTwo';
  import BarChartFive from '@/components/Charts/BarChartFive';
  import BarChartTwo from '@/components/Charts/BarChartTwo';
  import BarChartThree from '@/components/Charts/BarChartThree';
  import BarChartFour from '@/components/Charts/BarChartFour';
  import waves from '@/directive/waves';
  import { mapState } from 'vuex';
  import map from '@/components/Map/map.js'; // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point10.png'; // 引入刚才的map.js 注意路径
  import point02 from '@/assets/image/point38.png'; // 引入刚才的map.js 注意路径
  import {warring,typeData,dataLine,dataPoint,currentData,historicalData} from '@/api/municipalFacilities'
  import {getAllVideoPoint} from "@/api/system";
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
        videoList:[],
        percentageNum:0,
        showOption:0,
        showType:1,
        listQuery:{
          monitorlineid:'',
          type:'',
        },
        PieDataTwo:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '75%',
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
              data: [75],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(221,189,109,1)'
                  }, {
                    offset: 1,
                    color: 'rgba(220,188,111,1)'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(220,188,111,1)'],
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
        chartDataThree: {
          title: {
            text: '12件',
            top: '62%',
            subtext: '',
            textStyle: {
              color: '#f2f2f2',
              fontSize: 40,
              align: 'center'
            },
            subtextStyle: {
              fontSize: 40,
              color: ['#fff'],
              align: 'center'
            },
            x: '50%',
            y: 'center',
            textAlign: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          backgroundColor: '#001453',
          color:['#367CFD','#E20280'],
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [0.5, 'rgba(3,244,254,1)'],
                    [1, 'rgba(9,46,91,1)']
                  ],
                  shadowColor: '#0B487E',
                  shadowBlur: 20,
                }
              },
              // detail: { formatter: '{value}%' },
              // data: [{ value: 45, name: '完成率' }],
              startAngle: 0,
              endAngle: 359.999,
              pointer: {
                itemStyle: {
                  color: 'auto'
                }
              },
              axisTick: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: '#053973',
                  width: 2
                }
              },
              splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: '#08316C',
                  width: 2
                }
              },
              axisLabel: {
                color: 'transparent',
                distance: 40,
                fontSize: 20
              },
            },
            {
              name: '外层辅助线',
              type: 'gauge',
              z: 1,
              min: 0,
              max: 10,
              splitNumber: 30,
              startAngle: 175,
              endAngle: 360,
              radius: '80%',
              axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                  width: 2,
                  color: [[0.09, 'rgba(9,37,63,1)'], [0.5, '#108293'], [1, '#02FFC2']],
                  // color: [
                  //   [1, '#02FFC2']
                  // ],
                  opacity: 0.4,
                  shadowBlur: 10,
                  shadowColor: '#fff', //默认透明
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
              },
              splitLine: { // 分隔线
                show: false,
                length: 15,
              },
              detail: {
                show: false,
              },
              data: [],
              clockwise: false
            },
            {
              name: '外层辅助线',
              type: 'gauge',
              z: 1,
              min: 0,
              max: 10,
              startAngle: 185,
              endAngle: 355,
              radius: '85%',
              axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                  width: 2,
                  color: [
                    [1, '#02FFC2']
                  ],
                  opacity: 0.4,
                  shadowBlur: 10,
                  shadowColor: '#fff', //默认透明
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
              },
              splitLine: { // 分隔线
                show: false,
                length: 15,
              },
              detail: {
                show: false,
              },
              data: [],
              clockwise: false
            },
          ]
        },
        PieChartLegend:[],
        pieData:{
          // x轴
          xAxis: {
            show: false, // 不显示
          },
          // y轴
          yAxis: {
            show: false, // 不显示
          },
          grid: {
            top: '2.5%',
            right: '40',
            bottom: '2.5%',
            left: 0,
          },
          series: [{
            type: 'liquidFill',
            radius: '96%', // 半径大小
            center: ['50%', '50%'], // 布局位置
            data:  [20], // 水球波纹值
            color: ['#36A989'],//设置颜色系列
            label: {
              normal: {
                // color: '#FC7272',
                color: '#36A989',
                textStyle: {
                  fontSize: 18
                },
                formatter: (params) => { //console.log(params)
                  let newValue = params.value * 100;
                  return newValue.toFixed(2) + '%\n联网车位数\n' + ToInt
                }
              }
            },
            outline: { // 轮廓设置
              show: true,
              borderDistance: 2, // 轮廓间距
              itemStyle: {
                // borderColor: '#294D99', // 轮廓颜色
                borderColor: '#36A989', // 轮廓颜色
                borderWidth: 4, // 轮廓大小
                shadowBlur: 'none', // 轮廓阴影
              }
            },
          }
          ]
        },
        lineData:{
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
            bottom: '60',
            top: '10',
            containLabel: true
          },
          //----------------   图例 legend  -----------------
          legend:{
            bottom:0,
            textStyle:{
              color:'#fff',
            },

            data:['监测点读数','即时形变','累计变形'],
          },
          color:['rgb(3,235,252)','rgb(54,142,254)','rgb(31,205,159)'],
          xAxis: {
            // show:false,
            axisTick: {
              show: false,
              alignWithLabel: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#26CBE2',
                fontSize:'16',
                fontWeight:'bold'
              }
            },
            splitLine: { show: false },//去除网格线
            type: 'category',
            data: ['5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19']
          },
          yAxis: {
            axisTick: {
              show: false
            },
            axisLine: {
              // show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#26CBE2',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            splitArea:{show:false},
            splitLine: {
              show: true,//去除网格线
              textStyle: {
                color: 'rgba(30,66,88,1)',
                fontSize:'15',
                fontWeight:'bold'
              },
              lineStyle:{
                color: ['rgba(30,66,88,1)'],
                width: 1,
                type: 'solid'
              }
            },
            type: 'value'
          },
          series: [{
            name:'监测点读数',
            symbol:'circle',
            symbolSize:8,
            smooth:false,
            itemStyle : {
              normal : {
                color:'rgb(3,235,252)',
                lineStyle:{
                  color:'rgb(3,235,252)'
                }
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }, {
            name:'即时形变',
            symbol:'circle',
            symbolSize:8,
            smooth:false,
            itemStyle : {
              normal : {
                color:'rgb(54,142,254)',
                lineStyle:{
                  color:'rgb(54,142,254)'
                }
              }
            },
            data: [0, 0, 0, 0, 0, 50, 0],
            type: 'line'
            },{
            name:'累计变形',
            symbol:'circle',
            symbolSize:8,
            smooth:false,
            itemStyle : {
              normal : {
                color:'rgb(31,205,159)',
                lineStyle:{
                  color:'rgb(31,205,159)'
                }
              }
            },
            data: [80, 32, 1, 34, 290, 330, 320],
            type: 'line'
            }]
        },
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
            right: '0',
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
              data:['滨河路','秋溢路','江虹路','江陵路','长河路','滨文路']
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
                      { offset: 1, color: '#9D4EE8' }
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
              data: [320, 332, 301,230,56,963]
            },
          ]
        },
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
        typeList:[],
        dataLine:[],
        timerTwo:'',
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
      this.getWarring()
      this.onLoad();
      // this.getTypeData();

    },
    beforeDestroy() {
      clearInterval(this.timerTwo);
      this.timerTwo = null;
    },
    methods: {
      getPoint(val){
        if(val == 1){
          this.mapPoint('facilities',[]);
        }else{
          this.getVideo();
        }
      },
      getVideo(){
        getAllVideoPoint({class:2}).then((res) => {
          this.videoList = res.data.list;
          this.mapPoint('video',this.videoList)
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
        let markers = []

        if(type == 'facilities'){
          let point = new T.LngLat(120.208896,30.203874);
          markers[0] = drawTMaker(point, icon01,this,{name:'江虹桥',address:'江虹桥位于杭州市滨江区江虹路和滨河路交叉口以北处'});
        }else{
          for (let i = 0; i < list.length; i++) {
            let point = new T.LngLat(list[i].longitude,list[i].latitude);
            markers[i]  = drawTMaker(point, icon02,this,list[i]);
          }
        }

        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            let infoWin1 = new T.InfoWindow();
            let sContent =
              '<div class="point_info">' +
              '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
              '<tr>' +
              '<td class="txt_6">名称</td><td>' + txt.name + '</td>' +
              '</tr>'+
              '<tr>' +
              '<td>地址</td><td>' + txt.address + '</td>'+
              '</tr>'+
              '</table>'+
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }

      },
      // 获取当前项目所有监测项
      getTypeData(){
        typeData().then((res) => {
          this.typeList = res.data;
          this.listQuery.type = res.data[0].item_name;
          this.getDataLine(res.data[0].item_name)
        });
      },
      // 获取监测项下面的监测线
      getDataLine(type){
        dataLine({type:type}).then((res) => {
          this.dataLine = res.data;
          this.listQuery.monitorlineid = res.data[0].id;
          this.getDataPoint(res.data[0].id)
          // this.getCurrentData();
        });
      },
      // 获取监测线下面的测点
      getDataPoint(id){
        dataPoint({monitorlineid:id}).then((res) => {
          for(let i = 0;i<res.data.length;i++){
            this.getCurrentData(res.data[i].id);
          }
        });
      },
      // 获取实时数据
      getCurrentData(id){
      // * monitorlineid 监测线id
      //   * type 监测项
      //   * pointid 测点id
        currentData({monitorlineid:this.listQuery.monitorlineid,type:this.listQuery.type,pointid:id}).then((res) => {
          // this.dataLine = res.data;
        });
      },
      getWarring(){
        warring().then((res) => {
          // this.dataLine = res.data;
          let that = this;
          let i = 1;
          this.timerTwo = setInterval(function () {
            if(i==1){
              that.percentageNum = 100;
              i = 2;
            }else{
              that.percentageNum = 0;
              i = 1;
            }
          }, 1000);
        });
      },


    }
  }
</script>
<style lang="scss" scoped>
  /*/deep/.tdt-infowindow-content-wrapper{*/
    /*width: auto;*/
    /*color: #fff;*/
    /*background: #0a1f44;*/
  /*}*/
  .clr01{
    color: rgb(67,249,200);
  }
  .clr02{
    color: rgb(3,232,244);
  }
  .clr03{
    color: rgb(250,211,69);
  }
  .clr04{
    color: rgb(205,169,254);
  }
  .clr05{
    color: rgb(251,82,45);
  }
  .clr06{
    color: rgb(60,250,205);
    /deep/.el-progress-bar__inner{
      background-image: linear-gradient(to left,rgba(60,250,205,1) ,  rgba(63,219,234,0)); /* 标准的语法（必须放在最后） */
    }
  }
  .clr07{
    color: rgb(2,239,254);
  }
  .clr08{
    color: rgb(242,212,58);
  }
  .clr09{
    color: rgb(249,82,47);
  }
  .bg01{
    background: rgba(60,250,205,0.5);
  }
  .bg02{
    background: rgba(2,239,254,0.5);
  }
  .bg03{
    background: rgba(242,212,58,0.5);
  }
  .bg04{
    background: rgba(249,82,47,0.6);
  }
  .progress_cont{
    border: none;
    /deep/.el-progress-bar__outer{
      border-radius: 0;
    }
    .weui-cell{
      .weui-cell__hd{
        width: 4em;
      }
      .weui-cell__ft{
        text-align: center;
        width: 60px;
        padding: 5px 10px;
      }
    }
  }
  .facilities_weui{
    .weui-cell__hd{
      img{
        width: 100px;
        height: 103px;
      }
    }
  }
  /*/deep/.tdt-infowindow-tip{*/
    /*background: #0a1f44 !important;*/
  /*}*/
  .top_div{
    width: 50%;
    left: 20%;
  }
  .facilitiesWarning_num{
    .flex-item{
      &:nth-child(1){
        /*margin-right: 10px;*/
      }

    }
    .facilities_bg01{
      width: 80%;
      height: 10vh;
      line-height: 8vh;
      background: url("./../../assets/image/facilities_bg01.png") center center no-repeat;
      background-size: 100% 100%;
    }
    .facilities_bg02{
      width: 80%;
      height: 10vh;
      line-height: 8vh;
      background: url("./../../assets/image/facilities_bg02.png") center center no-repeat;
      background-size: 100% 100%;
    }
    .facilities_bg03{
      width: 45%;
      height: 10vh;
      line-height: 8vh;
      margin: 0 auto;
      background: url("./../../assets/image/facilities_bg03.png") center center no-repeat;
      background-size: 100% 100%;
    }
  }
  .facilities_form{
    /deep/.el-form-item__content{
      width: 80px;
    }
  }
  .facilities_bg{
    /deep/.el-progress-bar__inner{
      background-image: linear-gradient(to left,rgba(221,189,109,1) ,  rgba(221,189,109,0)); /* 标准的语法（必须放在最后） */
    }
  }
  .warning_intro{
    padding: 1.5%;
    border: 1px solid #476ABA;
  }
  .facilities_intro{
    & > div{
      width: 50%;
    }
  }
  .divBar_content{
    .bar_div{
      width: 30px;
      height: 12vh;
      position: relative;
      margin: 0 auto;
      &>div{
        position: absolute;
        top: 3px;
        left: 0;
        width: 30px;
      }
      &>p{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30px;
      }
    }
  }
  .warning_circle{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .equipment_normal{
    color: #0DE3F9;
   .num{
     width: 60px;
     height: 60px;
     line-height: 60px;
     border-radius: 50%;
     border: 3px dotted #0DE3F9;
     margin: 0 auto;
   }
  }
  .equipment_abnormal{
    color:rgb(255,76,70);
    .num{
      width: 60px;
      height: 60px;
      line-height: 60px;
      border-radius: 50%;
      border: 3px dotted rgb(255,76,70);
      margin: 0 auto;
    }
  }
  .rate_abnormal{
    color:rgb(255,76,70);
    .num{
      width: 60px;
      height: 60px;
      line-height: 60px;
      background: url("./../../assets/image/chart_bg.png") no-repeat center center;
      margin: 0 auto;
    }
  }
</style>
