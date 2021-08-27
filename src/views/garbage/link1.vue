<template>
  <div class="app-container">
    <!--创建容器-->
<!--    <div id='mapDiv' class="mapDiv"></div>-->
    <iframe id="testMsg" class="mapDiv" src='http://47.98.38.192:64005'></iframe>
    <div class="left_rate bold clr_white text-center">
      <div class="clean_rate flex">
        <p class="f20">95.6%</p>
      </div>
      <p class="mb_10">清扫完成</p>
      <div class="watering_rate flex">
        <div>
          <p class="f20">95.6%</p>
        </div>
      </div>
      <p class="mb_10">洒水完成</p>
      <ul class="f16 clr_white bold text-center mt_20 link_intro">
        <li>
          <p>0次</p>
          <span class="block color_bg01"></span>
        </li>
        <li>
          <p>1次</p>
          <span class="block color_bg02"></span>
        </li>
        <li>
          <p>2次</p>
          <span class="block color_bg03"></span>
        </li>
        <li>
          <p>3次</p>
          <span class="block color_bg04"></span>
        </li>
        <li>
          <p>4次</p>
          <span class="block color_bg05"></span>
        </li>
        <li>
          <p>5次</p>
          <span class="block color_bg06"></span>
        </li>
        <li>
          <p>完成</p>
          <span class="block color_bg07"></span>
        </li>
      </ul>
    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="top clr_white ">
        <p class="f20 bold txt_linear">
          清扫完成率
        </p>
        <el-row :gutter="10" class="mt_20">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex">
            <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>一类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex">
            <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>二类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </el-col>
          <div class="flex" style="width:50%;margin: -50px auto 0;">
            <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>三类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </div>
        </el-row>


      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">作业里程统计</p>
        <BarChartFive :chartData="BarData" height="150px" divwidth="100%"></BarChartFive>
      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">实际作业车辆统计</p>
        <BarChartFive :chartData="BarDataTwo" height="150px" divwidth="100%"></BarChartFive>
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
  import BarChartFour from '@/components/Charts/BarChartFour'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point01.png' // 引入刚才的map.js 注意路径

  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
        divwidth:'30%',
        pieHeight:'300px',
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
            formatter:"{a1}<br/>{b1}：{c1}%"
          },
          grid: {
            left: '30',
            right: '30',
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
              data: [5, 20, ]
            }]
        },
        BarDataTwo:{
          tooltip: {
            trigger:"axis",
            formatter:"{a1}<br/>{b1}：{c1}%"
          },
          grid: {
            left: '30',
            right: '30',
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
              { offset: 0, color: '#2975FF' },
              { offset: 1, color: '#81BAFF' }
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
              data: [5, 20, ]
            }]
        },
        // PieData:{
        //   tooltip: {
        //     show: false,
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //   },
        //   color: ['#7CDBFF', '#20437A'],
        //   gird:{
        //     top:0,
        //     left:0,
        //
        //   },
        //   // 80%是环中的数据显示
        //   title: {
        //     text: '80%',
        //     left: 'center',
        //     top: '34%',
        //     textStyle: {
        //       color: '#fff',
        //       fontSize: 26,
        //       align: 'center',
        //     }
        //   },
        //   graphic: {
        //     type: 'text',
        //     left: 'center',
        //     top: '58%',
        //     style: {
        //       text: '满意度',
        //
        //       textAlign: 'center',
        //       fill: '#bfbfbf',
        //       fontSize: 30,
        //       fontWeight: 700
        //     }
        //   },
        //   series: [
        //     {
        //       name: '单位工程评定',
        //       type: 'pie',
        //       radius: ['85%', '100%'],
        //       avoidLabelOverlap: false,
        //       label: {
        //         normal: {
        //           show: false,
        //           position: 'center'
        //         },
        //       },
        //       data: [
        //         { value: 80, name: '优良' },
        //         { value: 20, name: '不及格' },
        //       ]
        //     }
        //   ]
        // },
        PieData:{
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
                  //   color: '#EB4B4B'
                  // }, {
                  //   offset: 1,
                  //   color: '#F47F7F'
                  // }]),
                  color:'rgba(78,239,254,1)'
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
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
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
      // this.onLoad()
    },
    methods: {
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        // this.map.centerAndZoom(new T.LngLat(117.283042, 31.86119), this.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()

        // // 普通标注
        let site = [
          { lng: 117.283042, lat: 31.86119 },
          { lng: 116.41238, lat: 40.07689 },
          { lng: 116.34143, lat: 40.03403 },
        ]
        // this.markerPoint(site)
        //创建图片对象
        var icon = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(19, 27),
          iconAnchor: new T.Point(10, 25)
        });
        //创建信息窗口对象
        // let marker = new T.Marker(new T.LngLat(117.283042, 31.86119));// 创建标注
        let marker = new T.Marker(new T.LngLat(this.centerLongitude, this.centerLatitude), {icon: icon});// 创建标注
        this.map.addOverLay(marker);
        // 随机向地图添加25个标注
        // let bounds = this.map.getBounds();
        // let sw = bounds.getSouthWest();
        // let ne = bounds.getNorthEast();
        // let lngSpan = Math.abs(sw.lng - ne.lng);
        // let latSpan = Math.abs(ne.lat - sw.lat);
        // for (let i = 0; i < 25; i++) {
        //   let point = new T.LngLat(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        //   var marker = new T.Marker(point, {icon: icon});// 创建标注
        //   this.map.addOverLay(marker);
        // }

        var infoWin1 = new T.InfoWindow();
        let sContent =
          '<div style=" color: #fff;font-size:14px;font-weight:bold;width:100%">' +
          '<div>' +
          '<p ref="enterpriseName">任务号：20210566121511</p>' +
          '<p ref="enterpriseName">任务来源：数字集群</p>' +
          '<p ref="enterpriseName">事件类型：电动车乱停放</p>' +
          '<p style="color:red" ref="enterpriseName">任务状态：超时</p>' +
          '<p style="font-size:16px;font-weight:bold;padding-bottom:5px;" ref="enterpriseName">发生时间：2021-05-12 12:05:19</p>' +
          '<p ref="enterpriseName">所属辖区：烟曲街道</p>' +
          '<p ref="enterpriseName">地址描述：人民路就简单三</p>' +
          '<p style="text-align: right"><a style="cursor: pointer;" onclick="openInfo()"> 查看详情</a></p>' +
          '</div></div>';
          infoWin1.setContent(sContent);
          marker.addEventListener("click", function () {
          marker.openInfoWindow(infoWin1);
        });// 将标注添加到地图中
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';
        this.map.setStyle('indigo')

      },

    }
  }
</script>
<style lang="scss" scoped>
  /deep/.tdt-infowindow-content-wrapper{
    width: 400px;
    background: url("./../../assets/image/pop_bg.png") left top no-repeat;
    background-size: 100% 100%;
  }
  .left_rate{
    position: fixed;
    top: 10vh;
    left: 20px;
    z-index: 99999999;
    .clean_rate{
      width: 15vh;
      height: 15vh;
      background: url("./../../assets/image/cleanRate_bg.png") center center no-repeat;
      background-size: 100% 100%;
    }
    .watering_rate{
      width: 15vh;
      height: 15vh;
      background: url("./../../assets/image/wateringRate_bg.png") center center no-repeat;
      background-size: 100% 100%;
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
  }

</style>
