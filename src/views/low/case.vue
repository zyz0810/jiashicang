<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white base_bg_left">
      <div class="top clr_white">
        <p class="f20 bold txt_linear">案件状况</p>
        <div class="flex anjian_num">
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
        <el-row :gutter="20" class="pie_chart">
          <el-col :span="12">
            <PieChartTwo :chartData="chartData" :PieChartLegend="PieChartLegend" height="21vh" :divwidth="'100%'"></PieChartTwo>
          </el-col>
          <el-col :span="12">
            <PieChartTwo :chartData="chartDataTwo" :PieChartLegend="PieChartLegend" height="21vh" :divwidth="'100%'"></PieChartTwo>
          </el-col>
        </el-row>
      </div>

      <div class="mt_20">
        <p class="f20 bold txt_linear mb_20">案件类型占比分析</p>
        <RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="200px"></RingChart>
      </div>

    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="top clr_white">
        <p class="f20 bold txt_linear">案件高发路段（top6）</p>
        <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="26vh" divwidth="100%"></BarChartFour>
      </div>
      <div class="mt_20 ">
        <p class="f20 bold txt_linear">部门案件处置分析</p>
        <BarChartFive :chartData="BarData" height="30vh" divwidth="100%"></BarChartFive>
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
  import PieChartTwo from '@/components/Charts/PieChartTwo'
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
        chartData: {
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '75%',
            x: '49%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '26',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }, {
            text: '及时结案率',
            left: '48%',
            top: '52%',
            textAlign: 'center',
            textStyle: {
              fontSize: '14',
              fontWeight: '500',
              color: 'rgba(255,255,255,1)',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['70%', '80%'],
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

                  color:'rgba(6,183,225,1)',
                  // borderWidth:3, //设置border的宽度有多大
                  // borderColor:'#060c2a',
                }
              }
            }
          ]
        },
        chartDataTwo: {
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '75%',
            x: '49%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '26',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }, {
            text: '结案率',
            left: '48%',
            top: '52%',
            textAlign: 'center',
            textStyle: {
              fontSize: '14',
              fontWeight: '500',
              color: 'rgba(255,255,255,1)',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['70%', '80%'],
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

                  color:'rgba(247,214,81,1)',
                  // borderWidth:3, //设置border的宽度有多大
                  // borderColor:'#060c2a',
                }
              }
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
          color:['#367CFD','rgba(255,209,91,1)'],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['65%', '80%'],
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
                {value: 520, name: '数字城管'},
                {value: 205, name: '信访投诉'},
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
              splitArea: { show: false },//去除网格线
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
                  color:'rgba(0,107,226)'
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
                  color:'rgba(0,183,255)'

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
                      { offset: 1, color: 'rgba(0,183,255)' }
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
          iconSize: new T.Point(57, 52),
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


  .left_content{
    padding: 20px;
    width: 32%;
    position: fixed;
    top: 10vh;
    left: 20px;
    z-index: 9999;
    .anjian_num{
      padding: 20px 0;
    }
      .num{
        span{
          width: 25px;
          height: 33px;
          line-height: 33px;
          margin-right: 3px;
          background: url("./../../assets/image/index-num-bg.png") left top no-repeat;
        }
      }

  }



</style>
