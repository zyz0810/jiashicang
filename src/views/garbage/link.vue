<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv" v-show="showMapDiv"></div>
    <div id="guijimap" :class="['mapDiv',showguijiDiv?'z99':'z-1']" ref="guijimap"></div>
    <div class="left_rate bold clr_white text-center">
      <div class="clean_rate">
        <!--<p class="f20">95.6%</p>-->
        <!--<shui-qiu-chart :chartData="ShuiDataOne" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></shui-qiu-chart>-->
        <GaugeChart :chartData="gaugeOne" :PieChartLegend="PieChartLegend" height="15vh" ></GaugeChart>
      </div>
      <p class="mb_10">清扫完成</p>
      <div class="watering_rate">
        <div>
          <!--<p class="f20">95.6%</p>-->
          <GaugeChart :chartData="gaugeTwo" :PieChartLegend="PieChartLegend" height="15vh" ></GaugeChart>
        </div>
      </div>
      <p class="mb_10">洒水完成</p>
<!--      <ul class="f16 clr_white bold text-center mt_20 link_intro">-->
<!--        <li>-->
<!--          <p>0次</p>-->
<!--          <span class="block color_bg01"></span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <p>1次</p>-->
<!--          <span class="block color_bg02"></span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <p>2次</p>-->
<!--          <span class="block color_bg03"></span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <p>3次</p>-->
<!--          <span class="block color_bg04"></span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <p>4次</p>-->
<!--          <span class="block color_bg05"></span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <p>5次</p>-->
<!--          <span class="block color_bg06"></span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <p>完成</p>-->
<!--          <span class="block color_bg07"></span>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="top clr_white ">
        <p class="f20 bold txt_linear">
          清扫完成率
        </p>
        <el-row :gutter="10" class="mt_20">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex">
            <PieChartTwo :chartData="PieDataOne" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>一类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex">
            <PieChartTwo :chartData="PieDataTwo" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>二类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </el-col>
          <div class="flex" style="width:50%;margin: -50px auto 0;">
            <PieChartTwo :chartData="PieDataThree" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>三类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </div>
        </el-row>


      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">作业里程</p>
        <BarChartFive :chartData="BarData" height="150px" divwidth="100%"></BarChartFive>
      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">实际作业车辆</p>
        <BarChartFive :chartData="BarDataTwo" height="150px" divwidth="100%"></BarChartFive>
      </div>

    </div>
    <div class="top_div flex clr_white text-center f16 bold">
      <div class="flex f16 bold mr_20 border shadow" @click="showMapType(1)">
        <div class="baseColor">车辆管理</div>
        <div class="">
          总车辆
          <span class="txt_linear">{{carData.total}}</span>
        </div>
        <div class="">
          在线车辆
          <span class="txt_linear">{{carData.onlineNum}}</span>
        </div>
      </div>
      <div class="flex f16 bold border shadow" @click="showMapType(2)">
        <div class=" baseColor">视频</div>
        <div class="">
          普通视频
          <span class="txt_linear">{{commonVideo_num}}</span>
        </div>
      </div>

    </div>
    <div class="center_content clr_white text-center" v-if="mapPageType == 1">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==0?'active':'']" @click="handlePointType(0,type)">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=0" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==0?'clr_white':'']">全部</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==1?'active':'']" @click="handlePointType(1,type)">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=1" src="./../../assets/image/point40.png"/>
          <img v-else src="./../../assets/image/point40_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==1?'clr_white':'']">洒水车</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==2?'active':'']" @click="handlePointType(2,type)">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=2" src="./../../assets/image/point41.png"/>
          <img v-else src="./../../assets/image/point41_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==2?'clr_white':'']">清扫车</div>
      </div>
    </div>
    <div class="trail_content" v-if="showTrail">
      <p class="text-center mb_20">{{trailList[0].car_brand}}</p>
      <p>
        <el-button class="filter-item"
                   type="primary"
                   icon="el-icon-top"
                   @click="handleStart()">播放</el-button>
      </p>
      <p v-for="item in trailList" :key="item.id">{{$moment(Number(item.create_at)*1000).format("YYYY-MM-DD HH:mm:ss")}}</p>
    </div>



    <!--车辆轨迹框部分-->
    <div v-if="state.carTrack" class="tabbable-line guijitabbox carguiJiTabBox p20">
      <div class="tab-content">
        <div class="tab-pane active in" id="tab2_1">
          <p style="font-size: 16px; color: #000">
            <span id="carguijititle">{{ state.name }}</span>
          </p>
          <el-form :inline="true" :model="state" class="form-horizontal">
            <el-form-item label="日期" prop="name">
              <el-date-picker
                type="date"
                v-model="state.timeDate.day_time"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                @change="carvehicle(state.v.Vehicle)"
              />
            </el-form-item>
            <el-form-item label="时刻" prop="name">
              <el-time-picker
                is-range
                arrow-control
                v-model="dateTime"
                value-format="HH:mm:ss"
                @change="carvehicle(state.v.Vehicle)"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
              </el-time-picker>
            </el-form-item>

          </el-form>
<!--          <div class="wui-cell">-->
<!--            &lt;!&ndash; 轨迹播放快慢 &ndash;&gt;-->
<!--            <div class="weui-cell__hd">-->
<!--              轨迹播放-->
<!--            </div>-->
<!--            <div class="weui-cell__bd">-->
<!--              <el-slider-->
<!--                :min="1"-->
<!--                @change="sliderChange"-->
<!--                style="width: 74%"-->
<!--                id="test"-->
<!--                v-model="state.timeDate.rangeValue"/>-->
<!--            </div>-->
<!--          </div>-->
          <div class="text-center">
            <el-button type="primary" v-if="state.startgj" @click="startTrack">开始</el-button>
            <el-button type="primary" v-else @click="pauseTrack">暂停</el-button>
            <el-button type="primary" @click="stopTrack">结束</el-button>
            <el-button @click="carTrackReturn">返回</el-button>
          </div>

<!--          <div ref="time_box" style="width: 100%; margin-top: 10px">-->
<!--            <div-->
<!--              id="carguijiscroller"-->
<!--              class="scroller tabselbox"-->
<!--              data-rail-visible="1"-->
<!--              data-rail-color="#ececec"-->
<!--              data-handle-color="#bcbcbc"-->
<!--              style="width: 100%; height: 350px; overflow: auto"-->
<!--            >-->
<!--              <p v-for="(item, i) in state.timeList"-->
<!--                :key="i"-->
<!--                class="showcarpoint gjtimelist"-->
<!--                @click="clickCar(item, i)"-->
<!--              >-->
<!--                <i class="guijinumlist">{{ i }}</i-->
<!--                ><span>{{$moment(item.time).format("YYYY-MM-DD HH:mm:ss")}}</span>-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  import echarts from 'echarts'
  import RingChart from '@/components/Charts/RingChart'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import GaugeChart from '@/components/Charts/GaugeChart'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import ShuiQiuChart from '@/components/Charts/ShuiQiuChart'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import {cleancarList,cleanCarAddressList,lastGPS,carHistory,getGps,cleanCarNum} from '@/api/garbageLink'
  import point01 from "@/assets/image/point40.png";
  import pointCar from "@/assets/image/car.png";
  import point02 from "@/assets/image/point41.png";
  import point03 from "@/assets/image/point38.png";
  import {getAllVideoPoint} from "@/api/system";
  import global from "@/utils/common";

  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo,ShuiQiuChart,GaugeChart},
    data() {
      return {
        showMapDiv:true,
        showguijiDiv:false,
        showTrail:false,
        showType:0,
        carData:{offlineNum:'',onlineNum:'',total:''},
        cleanCarList:[],
        divwidth:'30%',
        pieHeight:'300px',
        ShuiDataOne:{
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
            data: [20], // 水球波纹值
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
                  return newValue.toFixed(2) + '%\n联网车位数\n'
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
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          color:['#367CFD','#E20280'],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['70%', '90%'],
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
              data: [
                {value: 520, name: '直接访问'},
                {value: 205, name: '邮件营销'},
              ]
            }
          ]
        },
        PieChartLegend:[],
        BarData:{
          tooltip: {
            trigger:"axis",
            formatter:"{b1}：{c1}%"
          },
          grid: {
            left: '0',
            right: '80',
            bottom: '20',
            top: '20',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            show:false,
            axisTick: {
              alignWithLabel: false
            },
            splitLine: { show: false },//去除网格线
          },
          color:['rgba(21,25,60,1)',new echarts.graphic.LinearGradient(0, 0, 1, 0,
            [
              { offset: 0, color: 'rgba(15,234,192,1)' },
              { offset: 1, color: 'rgba(131,188,237,1)' }
            ]
          )],
          yAxis: {
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
            data: ["清扫作业","洒水作业",]
          },
          series: [{
            name: '',
            type: 'bar',
            barWidth: 20,//柱图宽度
            z:"-1",
            barGap: '-100%',
            data: [100, 100,]
          },
            {
              name: '增长率',
              type: 'bar',
              barWidth: 20,//柱图宽度

              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [
                      { offset: 0, color: 'rgba(1,239,252,0)' },
                      { offset: 1, color: 'rgba(1,239,252,1)' }
                    ]
                  ),
                  label: {
                    show : true,
                    position : 'right',
                    formatter: '{c}/180',
                    textStyle : {
                      color: '#fff',
                      fontSize:'16',
                      fontWeight:'bold'
                    }
                  }

                }
              },

              data: [5, 100, ]
            }]
        },
        BarDataTwo:{
          tooltip: {
            trigger:"axis",
            formatter:"{b1}：{c1}%"
          },
          grid: {
            left: '0',
            right: '80',
            bottom: '20',
            top: '20',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            show:false,
            axisTick: {
              alignWithLabel: false
            },
            splitLine: { show: false },//去除网格线
          },
          color:['#15193F',new echarts.graphic.LinearGradient(0, 0, 1, 0,
            [
              { offset: 0, color: 'rgba(1,239,252,0)' },
              { offset: 1, color: 'rgba(1,239,252,1)' }
            ]
          )],
          yAxis: {
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
            data: ["清扫车","洒水车",]
          },
          series: [{
            name: '',
            type: 'bar',
            barWidth: 20,//柱图宽度
            z:"-1",
            barGap: '-100%',
            data: [100, 100,]
          },
            {
              name: '增长率',
              type: 'bar',
              barWidth: 20,//柱图宽度
              label: {
                show : true,
                position : 'right',
                formatter: '{c}/180',
                textStyle : {
                  color: '#fff',
                  fontSize:'16',
                  fontWeight:'bold'
                }
              },
              data: [5, 20, ]
            }]
        },
        gaugeOne:{
          series: [
            {
              name: "压力值",
              type: "gauge",
              clockwise: true,
              detail: {
                formatter: 20,
                textStyle: {
                  color:'rgb(93,176,244)',
                  fontSize: 20,
                },
              },
              axisTick:{
                length :3,
              },
              splitLine:{
                length:15
              },
              data: [{ value: 20, name: "压力值" }],
              radius: "80%",
              axisLabel: {// 刻度标签。
                show: true,
                distance: -5,
                color: "black",
                fontSize: 10,
                formatter: "{value}",
              },
              axisLine: {// 仪表盘轴线(轮廓线)相关配置。
                show: true,
                lineStyle: {// 仪表盘轴线样式。
                  opacity: 1,
                  // color : [ //表盘颜色
                  //   [ 0.5, "#DA462C" ],//0-50%处的颜色
                  //   [ 0.7, "#FF9618" ],//51%-70%处的颜色
                  //   [ 0.9, "#FFED44" ],//70%-90%处的颜色
                  //   [ 1,"#20AE51" ]//90%-100%处的颜色
                  // ],
                  color : [ //表盘颜色
                    [ 1, "rgb(57,247,203)" ],//0-50%处的颜色
                  ],
                  width: 10,
                  shadowBlur: 10,
                },
              },
              itemStyle:{
                // color:{//指针颜色
                //
                // }
                color:'rgb(93,176,244)'
              },
              pointer: { // 仪表盘指针。
                show: true,
                length: "70%",
                width: 4,
              },
            },
          ]
        },
        gaugeTwo:{
          series: [
            {
              name: "压力值",
              type: "gauge",
              clockwise: true,
              detail: {
                formatter: 20,
                textStyle: {
                  color:'rgb(93,176,244)',
                  fontSize: 20,
                },
              },
              axisTick:{
                length :3,
              },
              splitLine:{
                length:15
              },
              data: [{ value: 20, name: "压力值" }],
              radius: "80%",
              axisLabel: {// 刻度标签。
                show: true,
                distance: -5,
                color: "black",
                fontSize: 10,
                formatter: "{value}",
              },
              axisLine: {// 仪表盘轴线(轮廓线)相关配置。
                show: true,
                lineStyle: {// 仪表盘轴线样式。
                  opacity: 1,
                  // color : [ //表盘颜色
                  //   [ 0.5, "#DA462C" ],//0-50%处的颜色
                  //   [ 0.7, "#FF9618" ],//51%-70%处的颜色
                  //   [ 0.9, "#FFED44" ],//70%-90%处的颜色
                  //   [ 1,"#20AE51" ]//90%-100%处的颜色
                  // ],
                  color : [ //表盘颜色
                    [ 1, "rgb(5,247,255)" ],//0-50%处的颜色
                  ],
                  width: 10,
                  shadowBlur: 10,
                },
              },
              itemStyle:{
                // color:{//指针颜色
                //
                // }
                color:'rgb(93,176,244)'
              },
              pointer: { // 仪表盘指针。
                show: true,
                length: "70%",
                width: 4,
              },
            },
          ]
        },
        PieDataOne:{
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
                  // color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  //   offset: 0,
                  //   color: 'rgb(17,197,187)'
                  // }, {
                  //   offset: 1,
                  //   color: 'rgb(10,195,118)'
                  // }]),
                  color:'rgba(213,168,255,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(213,168,255,1)'],
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
        PieDataTwo:{
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
                  // color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  //   offset: 0,
                  //   color: 'rgb(15,242,246)'
                  // }, {
                  //   offset: 1,
                  //   color: 'rgb(53,214,250)'
                  // }]),
                  color:'rgba(255,111,22,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(255,111,22,1)'],
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
        PieDataThree:{
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
                  // color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  //   offset: 0,
                  //   color: 'rgb(0,172,255)'
                  // }, {
                  //   offset: 1,
                  //   color: 'rgb(2,109,250)'
                  // }]),
                  color:'rgba(56,253,207,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(56,253,207,1)'],
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
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
        timerOne:'',
        timerTwo:'',
        line:'',
        mapPageType:1,
        commonVideo_num:'',
        trailList:[],
        trailData:{},
        CarTrack:'',
        state:{
          count: 0,
          map: "",
          guijimap: "",
          zoom: 12,
          T: "",
          mapHeight: 800 + "px",
          timeDate: {
            day_time: '',
            start: "00:00:00",
            end: "23:59:59",
            rangeValue: 1,
          },
          carTrack: false,
          loading: false,
          obj_CarTrack: "",
          tile: "",
          timeList: [],
          timename: {},
          pagenum: 1,
          pagesize: 500,
          total: 10,
          carList: [],
          car_icon: "",
          detailAddress: "",
          v: {},
          icont: "",
          customerWinInfo: {},
          name: "",
          startgj: true,
          setCarTnterTime: 1000,
          linebottom: [],
          iguiji: 0,
          closetimeinter: 0,
          markercaruserlinelabel: null,
          markercarline: null,
          carline: null,
          startGTime: "",
          onlinemarkercar: [],
          markerclick: {},
        },
        open1:false,
        open2:false,
        _CarTrack:'',
      }
    },

    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
      dateTime: {
        get() {
          if (this.state.timeDate.start && this.state.timeDate.end) {
            return [this.state.timeDate.start, this.state.timeDate.end];
          } else {
            return [];
          }
        },
        set(v) {
          if (v) {
            this.state.timeDate.start = v[0];
            this.state.timeDate.end = v[1];
          } else {
            this.state.timeDate.start = "";
            this.state.timeDate.end = "";
          }
        },
      },
    },
    mounted() {
      // 挂载完成后渲染地图
      this.$nextTick(function() {
        this.onLoad();
        this.getList();
      });
      this.getChart();
      this.getNum();
      this.getPointNum();
      window.handleTrail = this.handleTrail;


      clearInterval(this.state.timename);
      window.onresize = () => {
        return (() => {
          if (window.innerWidth > 1664) {
            this.state.mapHeight = window.innerHeight - 350 + "px";
          } else {
            this.state.mapHeight = window.innerHeight - 350 + "px";
          }
        })();
      };
      this.state.cgjicon = new T.Icon({
        iconUrl: point02,
        iconSize: new T.Point(30, 52),
        iconAnchor: new T.Point(34, 59)
      });


    },
    beforeDestroy() {
      clearInterval(this.timerOne);
      this.timerOne = null;
      clearInterval(this.timerTwo);
      this.timerTwo = null;
    },
    methods: {
      carTrackReturn() {
        this.showMapDiv = true;
        this.showguijiDiv = false;
        this.state.carTrack = false;
        this.state.map.clearOverLays();
        clearInterval(this.state.timename);
      },
      clickCar(v, k) {
        console.log(v);
        let map1 = this.state.map;
        // this.map1.panTo(v["TLngLat"]);
        this.state.startgj = true;
        this.state.iguiji = k;
        // this.state.startGTime = this.$moment(Number(v.time)*1000).format("YYYY-MM-DD HH:mm:ss");
        this.state.startGTime =v.time;
          this.state.closetimeinter = 0;
        clearInterval(this.state.timename);
        if (this.state.markercarline != null) map1.removeOverLay(this.state.markercarline);
        if (this.state.markercaruserlinelabel != null)
          map1.removeOverLay(this.state.markercaruserlinelabel);
        let icon01 = new T.Icon({
          iconUrl: pointCar,
          iconSize: new T.Point(41, 26),
          // iconAnchor: new T.Point(6, 45)
        });
        this.state.markercarline = new T.Marker(v.TLngLat, {
          icon: icon01,
        });
        map1.addOverLay(this.state.markercarline);
        console.log(this.state.markercarline)
        this.timelabel(
          this.$moment(v.time).format("HH:mm:ss"),
          this.state.markercarline.getLngLat()
        );
      },
      showcarguiji(v) {
        this.state.v = v;
        this.state.startgj = true;
        this.state.carTrack = true;
        this.state.name = v.carcode;
        this.state.timeDate.day_time = this.$moment().format("YYYY-MM-DD");
        this.state.timeDate.start = "00:00:00";
        this.state.timeDate.end = "23:59:59";
        this.state.timeList = [];
        //由于使用ctx 打包后会保存，暂用jquery代替
        // $('#mapDiv').hide()
        // $('#guijimap').show()
        this.showMapDiv=false;
        this.showguijiDiv=true;
        // // ctx.$refs.mapDiv.style.display="none";
        // // ctx.$refs.guijimap.style.display = "block";

        //允许鼠标滚动放大地图
        // map1.enableHandleMouseScroll();
        this.state.map.clearOverLays();
        // this.UrGban();
        this.carvehicle(v.Vehicle);
      },
      UrGban() {
        //创建标注对象
        var marker = new T.Marker(new T.LngLat(119.95777, 30.53184), {
          icon: this.state.cgjicon,
        });
        //向上地图上添加标注
        this.state.map.addOverLay(marker);
      },
      carvehicle(v_devicecode, start_time, end_time) {
        if(this.state.markercarline != null){
          this.state.map.removeOverLay(this.state.markercarline);
        }
        if(this.state.carline != null){
          this.state.map.removeOverLay(this.state.carline);
        }
        if(this.state.markercaruserlinelabel != null){
          this.state.map.removeOverLay(this.state.markercaruserlinelabel);
        }

        if (!start_time) {
          var fields = {
            card_no: v_devicecode,
            day_time:this.state.timeDate.day_time,
            start: this.state.timeDate.start,
            end: this.state.timeDate.end,
          };
        } else {
          var fields = {
            card_no: v_devicecode,
            startTime: start_time,
            endTime: end_time,
          };
        }
        getGps(fields).then((res) => {
          if (res.code == 1) {
            var linebottom = [];
            var linebottompoint = [];
            if (res.data) {
              var knum = 0;
              let pointList = res.data.reverse()
              pointList.map(item => {
                // if (v["longitude1"]) {
                  var arr = new Object();
                  arr["TLngLat"] = new T.LngLat( item.longitude1,item.latitude1);
                  // arr["time"] = this.$moment(Number(item.create_at)*1000).format("YYYY-MM-DD HH:mm:ss");
                arr["time"] = Number(item.create_at)*1000;
                  linebottom[knum] = arr;
                  linebottompoint.push(new T.LngLat( item.longitude1,item.latitude1));
                  this.state.timeList = linebottom;
                  knum++;
                // }
              });
              console.log('时间列表')
              console.log(this.state.timeList)
              console.log(linebottompoint)
              this.state.linebottom = linebottom;
              let icon02 = new T.Icon({
                iconUrl: pointCar,
                iconSize: new T.Point(41, 26),
                // iconAnchor: new T.Point(6, 45)
              });
              this.state.markercarline = new T.Marker(linebottompoint[0], {
                icon: icon02 //车辆轨迹
              });
              // this.state.map.addOverLay(this.state.markercarline);
              this.state.startGTime = linebottom[0]["time"];
              //  添加其实车辆位置点标注
              //创建线对象
             let carline = new T.Polyline(linebottompoint, {
               color: "yellow",
               weight: 5,
               opacity: 1,
              });
              this.state.carline = carline;
              //向地图上添加线
              this.state.map.addOverLay(carline);
              // this.state.map.setViewport(linebottompoint);
              // this.state.map.panTo(linebottompoint[0]);
             //  this.timelabel(
             //    this.$moment(linebottom[0]["time"]).format("HH:mm:ss"),
             //    this.state.markercarline.getLngLat()
             //  );
              this._CarTrack = new T.CarTrack(this.state.map, {
                interval: 5,
                speed: 10,
                dynamicLine: true,
                carstyle:{
                  iconUrl:pointCar
                },
                polylinestyle: {color: "#fff", weight: 5, opacity: 0.9},
                Datas: this.state.timeList.map(function (obj, i) {
                    var lnlat = obj.TLngLat;
                    return lnlat;
                  }
                )
              })
            } else {
              // message.error("暂无数据！");
            }
          }
        });
        // .catch(()=>{
        //    alert('网络请求失败，请稍后再试');
        // })
      },
      timelabel(timehms, position) {
        console.log('时间：'+timehms)
        var config = {
          text:
            '<div style="font-size:14px;background-color:#000;color:#fff;border-radius:4px !important;padding:3px 10px;box-shadow:3px 3px 6px 0 rgba(0,0,0,0.5);">' +
            timehms +
            "</div>",
          offset: new T.Point(0,0),
          position: position,
        };
        this.state.markercaruserlinelabel = new T.Label(config); //创建地图文本对象
        // this.state.markercaruserlinelabel.setAnchorPer([0.5, 2]); //偏移量
        this.state.markercaruserlinelabel.setBorderLine(0);
        this.state.markercaruserlinelabel.setFontColor("#FFFFFF");
        this.state.markercaruserlinelabel.setBackgroundColor("transparent");
        this.state.map.addOverLay(this.state.markercaruserlinelabel);
      },
      sliderChange(val) {
        this.state.setCarTnterTime = 1000 / val;
        var st = Math.ceil(val / 9);
        var map1 = this.state.map;
        var linebottom = this.state.linebottom;
        if (this.state.closetimeinter == 1) {
          clearInterval(this.state.timename);
          let timehms;
          this.state.timename = setInterval(function() {
            // if(this.state.startGTim == ''){
            //   timehms = 0;
            // }else{
            //   timehms = this.$moment(this.state.startGTime).format("HH:mm:ss");
            // }
            // this.state.startGTime = this.$moment(this.state.startGTime).format("YYYY-MM-DD HH:mm:ss");
            if (this.state.markercaruserlinelabel != null)
              map1.removeOverLay(this.state.markercaruserlinelabel);
            this.timelabel(this.$moment(Number(timehms)*1000).format("HH:mm:ss"), this.state.markercarline.getLngLat());
            if (this.state.startGTime >= linebottom[this.state.iguiji]["time"]) {
              //当前时间车辆所在位置
              if (this.state.markercarline != null)
                map1.removeOverLay(this.state.markercarline);
              let icon01 = new T.Icon({
                iconUrl: pointCar,
                iconSize: new T.Point(41, 26),
                // iconAnchor: new T.Point(6, 45)
              });
              this.state.markercarline = new T.Marker(
                linebottom[this.state.iguiji]["TLngLat"],
                {
                  icon: icon01
                }
              );
              map1.addOverLay(this.state.markercarline);
              if (this.state.markercaruserlinelabel != null)
                map1.removeOverLay(this.state.markercaruserlinelabel);
              this.timelabel(this.$moment(Number(timehms)*1000).format("HH:mm:ss"), this.state.markercarline.getLngLat());
              this.state.iguiji++;
              if (this.state.iguiji == linebottom.length) {
                clearInterval(this.state.timename);
                this.state.startgj = true;
                this.state.iguiji = 0;
                this.state.closetimeinter = 0;
                this.state.startGTime = linebottom[0]["time"];
              }
            }
          }, this.state.setCarTnterTime);
        }
      },
      startTrack() {
        // console.log("start");
        // var map1 = this.state.map;
        // var linebottom = this.state.linebottom;
        this.state.startgj = false;
        // clearInterval(this.state.timename);
        // this.state.timename = setInterval(()=> {
        //
        //   console.log(11111)
        //   console.log(this.state.setCarTnterTime)
        //   console.log('；；；'+this.state.startGTime)
        //   var st = Math.ceil(this.state.timeDate.rangeValue / 9);
        //   var timehms = this.$moment(this.state.startGTime).subtract(-st, "second").format("HH:mm:ss");
        //   this.state.startGTime = this.$moment(this.state.startGTime).subtract(-st, "second");
        //   if (this.state.markercaruserlinelabel != null)
        //     map1.removeOverLay(this.state.markercaruserlinelabel);
        //   this.timelabel(timehms, this.state.markercarline.getLngLat());
        //   console.log(this.state.startGTime)
        //   console.log(linebottom[this.state.iguiji]["time"])
        //   if (this.state.startGTime >= linebottom[this.state.iguiji]["time"]) {
        //     console.log('斤斤计较军军军军军军')
        //     //当前时间车辆所在位置
        //     if (this.state.markercarline != null)
        //       map1.removeOverLay(this.state.markercarline);
        //     let icon01 = new T.Icon({
        //       iconUrl: pointCar,
        //       iconSize: new T.Point(41, 26),
        //       // iconAnchor: new T.Point(6, 45)
        //     });
        //     this.state.markercarline = new T.Marker(
        //       linebottom[this.state.iguiji]["TLngLat"],
        //       {
        //         icon: icon01, //车辆轨迹
        //       }
        //     );
        //     map1.addOverLay(this.state.markercarline);
        //     if (this.state.markercaruserlinelabel != null)
        //       map1.removeOverLay(this.state.markercaruserlinelabel);
        //     // this.timelabel(this.$moment(Number(timehms)*1000).format("HH:mm:ss"), this.state.markercarline.getLngLat());
        //     this.timelabel(timehms, this.state.markercarline.getLngLat());
        //     this.state.iguiji++;
        //     if (this.state.iguiji == linebottom.length) {
        //       console.log(123);
        //       clearInterval(this.state.timename);
        //       this.state.startgj = true;
        //       this.state.iguiji = 0;
        //       this.state.closetimeinter = 0;
        //       this.state.startGTime = linebottom[0]["time"];
        //     }
        //   }
        // }, this.state.setCarTnterTime);
        // this.state.closetimeinter = 1;
        // //添加起始车辆位置点标注
        // console.log("end");

        this._CarTrack.start();
      },

      pauseTrack() {
        // clearInterval(this.state.timename);
        this.state.startgj = true;
        // this.state.closetimeinter = 0;
        this._CarTrack.pause();
      },

      stopTrack() {
        this._CarTrack.stop();
        // this.state.iguiji = 0;
        // this.state.closetimeinter = 0;
        // this.state.startGTime = this.state.linebottom[0]["time"];
        // clearInterval(this.state.timename);
        this.state.startgj = true;
        // var lastm = this.state.linebottom.length - 1;
        // if (this.state.markercarline != null)
        //   this.state.map.removeOverLay(this.state.markercarline);
        // if (this.state.markercaruserlinelabel != null)
        //   this.state.map.removeOverLay(this.state.markercaruserlinelabel);
        // let icon01 = new T.Icon({
        //   iconUrl: pointCar,
        //   iconSize: new T.Point(41, 26),
        //   // iconAnchor: new T.Point(6, 45)
        // });
        // this.state.markercarline = new T.Marker(this.state.linebottom[lastm]["TLngLat"], {
        //   icon: icon01
        // });
        // this.state.map.addOverLay(this.state.markercarline);
        // this.timelabel(
        //   this.$moment(this.state.linebottom[lastm]["time"]).format("HH:mm:ss"),
        //   this.state.linebottom[lastm]["TLngLat"]
        // );
      },

      //点击顶部车辆管理、视频
      showMapType(val){
        this.mapPageType = val;
        if(val == 1){
          this.map.clearOverLays();
          this.getList();
        }else{
          this.getPoint();
        }
      },
      //普通视频数量
      getPointNum() {
        getAllVideoPoint({class: 2}).then((res) => {
          this.commonVideo_num = res.data.putong;
        });
      },
      //普通视频点位
      getPoint(type){
        getAllVideoPoint({class:2}).then((res) => {
          this.commonVideo_num = res.data.putong;
          this.pointList = res.data.list;
          this.mapPoint('video',this.pointList)
        });
      },
      //不同类型点位
      handlePointType(val,type){
        this.map.clearOverLays();
        this.showType = val;

        if(val == 0){
          this.getList('');
        }else{
          this.getList(val);
        }
      },
      getNum(){
        cleanCarNum().then((res) => {
          const {offlineNum,onlineNum} = res.data;
          let total = Number(offlineNum) + Number(onlineNum);
          this.carData={offlineNum,onlineNum,total}
        });
      },
      getChart(){
        let i = 1;
        let that = this;
        this.timerOne = setInterval(function () {
          if(i==1){
            that.PieDataOne.series[0].data = [75];
            that.PieDataTwo.series[0].data = [75];
            that.PieDataThree.series[0].data = [75];
            i = 2;
          }else{
            that.PieDataOne.series[0].data = [0];
            that.PieDataTwo.series[0].data = [0];
            that.PieDataThree.series[0].data = [0];
            i = 1;
          }
        }, 1500);

        this.timerTwo = setInterval(function () {
          const random= +(Math.random() * 60).toFixed(2);
          that.gaugeOne.series[0].data = [          {
            value: random
          }];
          that.gaugeTwo.series[0].data = [          {
            value: random
          }];
        }, 1500);
      },
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(global.latlog.centerLongitude, global.latlog.centerLatitude), global.latlog.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        this.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';

        //初始化地图对象

        this.state.map = new T.Map("guijimap");
        //设置显示地图的中心点和级别
        this.state.map.centerAndZoom(new T.LngLat(global.latlog.centerLongitude, global.latlog.centerLatitude), global.latlog.zoom);
        this.state.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[1].style.display = 'none';
        //允许鼠标滚动放大地图
        // map1.enableHandleMouseScroll();
        this.state.map.clearOverLays();
      },
      mapPoint(type,list){
        //创建图片对象
        let icon01 = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(30, 52),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon02 = new T.Icon({
          iconUrl: point02,
          iconSize: new T.Point(30, 52),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon03 = new T.Icon({
          iconUrl: point03,
          iconSize: new T.Point(30, 52),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon04 = new T.Icon({
          iconUrl: pointCar,
          iconSize: new T.Point(41, 26),
          // iconAnchor: new T.Point(34, 59)
        });
        let markers = [];
        if(type == 'video'){
          for (let i = 0; i < list.length; i++) {
            let point = new T.LngLat(list[i].longitude,list[i].latitude);
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }
        }else{
          for (let i = 0; i < list.length; i++) {
            // var marker
            let point = new T.LngLat(list[i].PACK.longitude1,list[i].PACK.latitude1);
            if(list[i].type == 1){
              markers[i]  = drawTMaker(point, icon01,this,list[i]);
            }else if(list[i].type == 2){
              markers[i]  = drawTMaker(point, icon02,this,list[i]);
            }else{
              // console.log('22222222')
              // markers[i]  = drawTMaker(point, icon04,this,list[i]);
            }
            // let point = new T.LngLat(list[i].PACK.longitude1,list[i].PACK.latitude1);
            // markers[i]  = drawTMaker(point, icon01,this,list[i]);
          }
        }

        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            // carHistory({card_no:txt.Vehicle,start:that.$moment().format('YYYY-MM-DD'),end:that.$moment().format('YYYY-MM-DD')}).then((res) => {
            // });


            let infoWin1 = new T.InfoWindow();
            let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
            let sContent =
              '<div class="point_info">' +
              '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
              '<tr>' +
              '<td class="txt_6">车牌号</td><td>' + txt.Vehicle + '</td>' +
              '</tr>'+
              '<tr>' +
              '<td>车型</td><td>' + '（没接口）' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>品牌类型</td><td>' + '（没接口）' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>车辆类型</td><td>' + '（没接口）' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>地址</td><td>' + txt.Address + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td></td><td class="text-right baseColor pointer" onClick="handleTrail(' + aa +')">查看轨迹</td>'+
              '</tr>'+
              '</table>'+
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }

      },
      //查看轨迹
      handleTrail(txt){
        this.showcarguiji(txt)
        // if(this.line != ''){
        //   this.map.removeOverLay(this.line);
        // }
        // getGps({card_no:txt.Vehicle}).then((res) => {
        //   this.showTrail = true;
        //   this.trailList = res.data;
        //   let points = res.data.map(item=>{
        //     let json = new T.LngLat(item.longitude1, item.latitude1)
        //     return json;
        //   });
        //   console.log(points)
        //   //创建线对象
        //   this.line = new T.Polyline(points,{color:'#00fd71',weight:5,opacity:1});
        //   //向地图上添加线
        //   this.map.addOverLay(this.line);
        //
        // });
      },
      handleStart(){
        this.CarTrack = new T.CarTrack(map, {
          interval: 5,
          speed: 10,
          dynamicLine: true,
          polylinestyle: {color: "#00fd71", weight: 5, opacity: 1},
          Datas: this.trailList.map(item=> {
              let lnlat = new T.LngLat(item.longitude1, item.latitude1);
              return lnlat;
            }
          )
        })
      },
      getList(type){
        cleanCarAddressList({type:'allList'}).then((res) => {
          this.cleanCarList = res.data;
          let card_no = res.data.map(item=> {return item.CarBrand}).join(',');
          lastGPS({card_no:card_no,type:type}).then((res) => {
            this.mapPoint('car',res.data)
          });
        });
      },
    }
  }
</script>
<style lang="scss" scoped>

/deep/.el-form-item__label{
    color: #409EFF!important;

  }
/deep/.el-date-editor--timerange.el-input__inner{
  width: 230px !important;
}
/deep/.el-date-editor .el-range-input,   /deep/.el-input__inner,   /deep/.el-textarea__inner,{
  color: #606266 !important;
  background: #fff!important;
}
  .el-popper[x-placement^="bottom"] .popper__arrow,.el-popper[x-placement^="bottom"] .popper__arrow::after{
    border-bottom-color:#fff!important;
  }
  .z99{
    z-index: 1000;
  }
  .z-1{
    z-index: -1;
  }
  .drapdown_wrap {
    position: absolute;
    left: 0px;
    top: 160px;
    z-index: 400;
    width: 200px;
    // height: 300px;
    background-color: #fff;
    .dropdown {
      width: 100%;
      z-index: 99999;
      background-color: #006dc9;
      color: #fff;
    }
  }

    .drapdown_wrap {
      position: absolute;
      left: 0px;
      top: 160px;
    }

    /*轨迹选择时间弹框*/
    .tabbable-line.guijitabbox {
      position: fixed;
      left: 20px;
      bottom: 200px;
      width: 320px;
      z-index: 3005;
      background: rgba(6,16,39,0.8);
      color: #5f5f5f;
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
      border-radius: 0 0 3px 3px !important;
      overflow: hidden;
    }
    /*弹框中的input*/
    .form-group .col-sm-7 {
      padding-left: 0 !important;
    }
    /*查询轨迹*/
    .gjtimelist {
      padding: 5px 0;
      border-bottom: 1px dashed #e3e3e3;
      cursor: pointer;
    }
    .guijinumlist {
      padding: 2px 8px 2px 4px;
      background: #89bff5;
      color: #fff;
      margin-right: 10px;
    }
    .backspan {
      font-size: 14px;
      margin-left: 10px;
      cursor: pointer;
    }
    /*巡检路线*/
    .tabselbox {
      height: 372px;
      border-top: 1px solid #999;
      text-align: left;
      padding: 7px 15px;
    }
    .tabselbox > a {
      display: block;
      color: #000;
      cursor: pointer;
      border-bottom: 1px dashed #ccc;
      padding: 9px 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tabselbox > a:hover {
      color: #5b9bd1;
    }



  .trail_content{
    padding: 20px;
    position: fixed;
    top: 12vh;
    right: 0;
    z-index:999999;
    background: #fff;
  }
  /deep/.tdt-infowindow-content-wrapper{
    width: 400px;
    background: url("./../../assets/image/pop_bg.png") left top no-repeat;
    background-size: 100% 100%;
  }
  .left_rate{
    position: fixed;
    top: 10vh;
    left: 20px;
    z-index: 3005;
    .clean_rate{
      width: 15vh;
      /*height: 50vh;*/
      /*background: url("./../../assets/image/cleanRate_bg.png") center center no-repeat;*/
      /*background-size: 100% 100%;*/
    }
    .watering_rate{
      width: 15vh;
      /*height: 15vh;*/
      /*background: url("./../../assets/image/wateringRate_bg.png") center center no-repeat;*/
      /*background-size: 100% 100%;*/
    }
    .link_intro{
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
        background: #bb1f02;
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
  }

</style>
