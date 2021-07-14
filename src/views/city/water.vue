<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white">

        <div class="title bold">智慧河道</div>
        <div class="top clr_white">
          <p class="f20 bold">河道概况</p>
          <div class="flex water_num">
            <div class="flex-item">
              <p class="f16 bold">河流条数</p>
              <p>41条</p>
            </div>
            <div class="flex-item">
              <p class="f16 bold">河道总长</p>
              <p>77.95km</p>
            </div>
            <div class="flex-item">
              <p class="f16 bold">河道水质站点</p>
              <p>41个</p>
            </div>
          </div>
          <div class="flex water_num">
            <div class="flex-item">
              <p class="f16 bold">河道水位站点</p>
              <p>12个</p>
            </div>
            <div class="flex-item">
              <p class="f16 bold">河道视频控点</p>
              <p>162个</p>
            </div>
          </div>
        </div>

      <div class="left_bottom mt_10">
        <p class="f20 bold">河道概况</p>
        <el-table v-loading="listLoading" :data="list" :height="280" element-loading-text="拼命加载中" fit ref="tableList" class="f16">
          <el-table-column type="index" label="序号" width="80" align="center">
            <!--            <template slot-scope="scope">-->
            <!--             <span class="block sqaer">{{index}}</span>-->
            <!--            </template>-->
          </el-table-column>
          <el-table-column label="申请人/单位" align="center" prop="name"></el-table-column>
          <el-table-column label="权力名称" align="center" prop="name"></el-table-column>
          <el-table-column label="办理结果" align="center" prop="end"></el-table-column>

        </el-table>
      </div>

    </div>
    <div class="right_content clr_white">
      <div class="title bold">智慧河道</div>
      <div class="top clr_white">
        <p class="f20 bold">水质检测概况</p>
        <PieChartTwo :chartData="BarData" :PieChartLegend="PieChartLegend" height="300px" divwidth="100%"></PieChartTwo>
      </div>
      <div class="left_bottom mt_10">
        <p class="f20 bold">水质超标次数（top6）</p>
        <BarChartFour :chartData="BarDataTwo" :BarChartLegend="BarChartLegend" height="300px" divwidth="100%"></BarChartFour>
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
        listLoading:false,
        list:[{
          name:'发你辅导费',
          name2:'丰富的爽肤水',
          end:'审批通过'
        },{
          name:'发你辅导费',
          name2:'丰富的爽肤水',
          end:'审批通过'
        },{
          name:'发你辅导费',
          name2:'丰富的爽肤水',
          end:'审批通过'
        },{
          name:'发你辅导费',
          name2:'丰富的爽肤水',
          end:'审批通过'
        },{
          name:'发你辅导费',
          name2:'丰富的爽肤水',
          end:'审批通过'
        },{
          name:'发你辅导费',
          name2:'丰富的爽肤水',
          end:'审批通过'
        }],
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
        PieChartLegend:[{name:'直接访问',color:'red'},{name:'邮件营销',color:'green'}, {name:'联盟广告',color:'yellow'},{name:'视频广告',color:'gray'},{name:'搜索引擎',color:'pink'}],
        BarChartLegend:[],
        BarData:{
          title: {},
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {show:false},
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
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
  .left_content{
    padding: 20px;
    width: 32%;
    background: rgba(8,19,41,0.3);
    border:1px solid #0a76a4;
    position: fixed;
    top: 120px;
    left: 20px;
    z-index: 9999;
    .anjian_num{
      padding: 20px 0;
    }
    .top{
      padding: 20px;
      border:1px solid #0a76a4;
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
      padding: 20px;
      border:1px solid #0a76a4;
    }
  }
  .right_content{
    padding: 20px;
    width: 32%;
    background: rgba(8,19,41,0.3);
    border:1px solid #0a76a4;
    position: fixed;
    top: 12px;
    right: 20px;
    z-index: 9999;
    .anjian_num{
      padding: 20px 0;
    }
    .top{
      padding: 20px;
      border:1px solid #0a76a4;
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
      border:1px solid #0a76a4;
    }
  }
  .title{
    line-height: 1.8;
    background: url("./../../assets/image/title_bg.png") left bottom no-repeat;
  }

</style>
