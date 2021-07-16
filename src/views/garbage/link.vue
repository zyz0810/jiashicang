<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>

    <div class="left_rate bold clr_white text-center">
      <div class="clean_rate flex">
        <div>
          <p class="f26">95.6%</p>
          <p class="mt_5">清扫完成</p>
        </div>
      </div>
      <div class="watering_rate flex">
        <div>
          <p class="f26">95.6%</p>
          <p class="mt_5">洒水完成</p>
        </div>
      </div>
      <ul class="f16 clr_white bold text-center link_intro">
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
    <div class="right_content clr_white base_bg shadow border">
      <div class="title bold">清扫作业</div>
      <div class="top clr_white border">
        <p class="f20 bold">
          道路统计78条
          <span class="f16 baseColor fr">清扫完成率</span>
        </p>
        <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" :height="'300px'" :divwidth="'50%'"></PieChartTwo>
        <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" :height="'300px'" :divwidth="'50%'"></PieChartTwo>
      </div>
      <div class="left_bottom mt_10 border">
        <p class="f20 bold">作业里程统计</p>
        <BarChartFive :chartData="BarData" height="100px" divwidth="100%"></BarChartFive>
      </div>
      <div class="left_bottom mt_10 border">
        <p class="f20 bold">实际作业车辆统计</p>
        <BarChartFive :chartData="BarDataTwo" height="100px" divwidth="100%"></BarChartFive>
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
            left: '0',
            right: '0',
            bottom: '-20',
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
              { offset: 0, color: '#E4683A' },
              { offset: 1, color: '#FDB019' }
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
            left: '0',
            right: '0',
            bottom: '-20',
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
        PieData:{
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          color: ['#7CDBFF', '#20437A'],
          // 80%是环中的数据显示
          title: {
            text: '80%',
            left: 'center',
            top: '38%',
            textStyle: {
              // color: '#27D9C8',
              color: '#bfbfbf',
              fontSize: 40,
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
              radius: ['65%', '80%'],
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
            }
          ]
        },
        map: '', // 对象
        zoom: 12, // 地图的初始化级别，及放大比例
        centerLatitude:'39.65053092',//中心纬度
        centerLongitude:'118.1834506',//中心经度
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
      this.onLoad()
    },
    methods: {
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        // this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        this.map.centerAndZoom(new T.LngLat(117.283042, 31.86119), this.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        this.addCtrl()

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
        let marker = new T.Marker(new T.LngLat(117.283042, 31.86119), {icon: icon});// 创建标注
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
  /deep/.tdt-marker-pane{
    .tdt-marker-icon{
      width: 57px !important;
      height: 52px !important;
    }
  }
  /deep/.tdt-infowindow-content-wrapper{
    width: 400px;
    background: url("./../../assets/image/pop_bg.png") left top no-repeat;
    background-size: 100% 100%;
  }
  .mapDiv{
    width:100%;
    height:80vh;
  }
  .left_rate{
    position: fixed;
    top: 10vh;
    left: 20px;
    z-index: 99999999;
    .clean_rate{
      width: 18vh;
      height: 18vh;
      background: url("./../../assets/image/cleanRate_bg.png") center center no-repeat;
      background-size: 100% 100%;
    }
    .watering_rate{
      width: 18vh;
      height: 18vh;
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

  .right_content{
    padding: 20px;
    width: 32%;
    position: fixed;
    top: 10vh;
    right: 20px;
    z-index: 9999;
    .anjian_num{
      padding: 20px 0;
    }
    .top{
      padding: 20px;
      .num01{
        span{
          width: 25px;
          height: 33px;
          line-height: 33px;
          margin-right: 3px;
          background: url("./../../assets/image/num_bg1.png") left top no-repeat;
        }
      }
      .num02{
        span{
          width: 25px;
          height: 33px;
          line-height: 33px;
          margin-right: 3px;
          background: url("./../../assets/image/num_bg2.png") left top no-repeat;
        }
      }
      .num03{
        span{
          width: 25px;
          height: 33px;
          line-height: 33px;
          margin-right: 3px;
          background: url("./../../assets/image/num_bg3.png") left top no-repeat;
        }
      }
    }
    .left_bottom{
      padding: 20px 20px 0 20px;
    }
  }
  .title{
    line-height: 1.8;
    background: url("./../../assets/image/title_bg.png") left bottom no-repeat;
  }

</style>
