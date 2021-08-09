<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white base_bg_left">
        <div class="clr_white">
          <p class="f20 bold txt_linear">河道概况</p>
          <div class="flex water_num01 f16 bold text-center mt_10">
            <div class="flex-item flex_block_bg">
              <p class="clr_white">河流条数</p>
              <p class="clr_purple mt_5"><span class="f26">41</span>条</p>
            </div>
            <div class="flex-item flex_block_bg">
              <p class="f16 bold">河道总长</p>
              <p class="clr_blue01 mt_5"><span class="f26">77.95</span>km</p>
            </div>
            <div class="flex-item flex_block_bg">
              <p class="f16 bold">河道水质站点</p>
              <p class="clr_blue02 mt_5"><span class="f26">24</span>个</p>
            </div>
          </div>
          <div class="flex water_num02 f16 bold text-center mt_10">
            <div class="flex_block_bg">
              <p class="f16 bold">河道水位站点</p>
              <p class="clr_yellow mt_5"><span class="f26">12</span>个</p>
            </div>
            <div class="flex_block_bg">
              <p class="f16 bold">河道视频控点</p>
              <p class="clr_yellow mt_5"><span class="f26">162</span>个</p>
            </div>
          </div>
        </div>

      <div class="mt_20">
        <p class="f20 bold txt_linear">异常报警</p>
        <div class="flex abnormal_tab bold f16 mt_20">
          <div :class="['flex-item',abnormalIndex == 0?'clr_yellow txt_shadow':'']" @click="abnormalIndex = 0">水质告警：6</div>
          <div :class="['flex-item','text-center',abnormalIndex == 1?'clr_yellow txt_shadow':'']" @click="abnormalIndex = 1">配水方案</div>
          <div :class="['flex-item','text-right',abnormalIndex == 2?'clr_yellow txt_shadow':'']" @click="abnormalIndex = 2">内涝预测：0</div>
        </div>
        <img src="./../../assets/image/water_bg.png" class="mt_10"/>
        <el-table v-loading="listLoading" :data="list" :height="280" stripe element-loading-text="拼命加载中" fit ref="tableList1" v-show="abnormalIndex == 0" class="f14 mt_20">
          <el-table-column type="index" label="序号" width="50" align="center">
            <!--            <template slot-scope="scope">-->
            <!--             <span class="block sqaer">{{index}}</span>-->
            <!--            </template>-->
          </el-table-column>
          <el-table-column label="水质告警" align="center" prop="name"></el-table-column>
          <el-table-column label="配水量" align="center" prop="name2"></el-table-column>
          <el-table-column label="排水量" align="center" prop="end"></el-table-column>

        </el-table>
        <el-table v-loading="listLoading" :data="list" :height="280" stripe element-loading-text="拼命加载中" fit ref="tableList2" v-show="abnormalIndex == 1" class="f14 mt_20">
          <el-table-column type="index" label="序号" width="50" align="center">
            <!--            <template slot-scope="scope">-->
            <!--             <span class="block sqaer">{{index}}</span>-->
            <!--            </template>-->
          </el-table-column>
          <el-table-column label="方案名称" align="center" prop="name"></el-table-column>
          <el-table-column label="配水量" align="center" prop="name2"></el-table-column>
          <el-table-column label="排水量" align="center" prop="end"></el-table-column>

        </el-table>
        <el-table v-loading="listLoading" :data="list" :height="280" stripe element-loading-text="拼命加载中" fit ref="tableList3" v-show="abnormalIndex == 2" class="f14 mt_20">
          <el-table-column type="index" label="序号" width="50" align="center">
            <!--            <template slot-scope="scope">-->
            <!--             <span class="block sqaer">{{index}}</span>-->
            <!--            </template>-->
          </el-table-column>
          <el-table-column label="内涝预测" align="center" prop="name"></el-table-column>
          <el-table-column label="配水量" align="center" prop="name2"></el-table-column>
          <el-table-column label="排水量" align="center" prop="end"></el-table-column>

        </el-table>
      </div>

    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="clr_white">
        <p class="f20 bold txt_linear">水质检测概况</p>
        <PieChartTwo :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="25vh" divwidth="100%"></PieChartTwo>
      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear mb_20">河道水位</p>
        <LineChart :chartData="lineData" :BarChartLegend="PieChartLegend" height="30vh" divwidth="100%"></LineChart>
      </div>

    </div>
    <div class="water_survey flex">
      <div class="flex f14 bold mr_20">
        <div class="survey_name text-center"><span class="txt_linear f18">设备管理</span></div>
        <div class="flex-item">
          <p class="baseColor">总览</p>
          <p class="f20 clr_yellow mt_5 ml_10">66</p>
        </div>
        <div class="flex-item">
          <p class="baseColor">离线</p>
          <p class="f20 clr_yellow mt_5 ml_10">0</p>
        </div>
        <div class="flex-item">
          <p class="baseColor">故障</p>
          <p class="f20 clr_yellow mt_5 ml_10">0</p>
        </div>
      </div>
      <div class="flex f14 bold">
        <div class="survey_name text-center"><span class="txt_linear f18">视频监控</span></div>
        <div class="flex-item">
          <p class="baseColor">正常</p>
          <p class="f20 clr_yellow mt_5 ml_10">1836</p>
        </div>
        <div class="flex-item">
          <p class="baseColor">离线</p>
          <p class="f20 clr_yellow mt_5 ml_10">0</p>
        </div>
        <div class="flex-item">
          <p class="baseColor">故障</p>
          <p class="f20 clr_yellow mt_5 ml_10">0</p>
        </div>
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
        abnormalIndex:0,
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
            bottom: '40',
            top: '50',
            containLabel: true
          },
          //----------------   图例 legend  -----------------
          // legend:{
          //   data:['新浦河','时代河','槐河','西兴后河'],
          // },
          legend: {
            type:'plain',				//----图例类型，默认为'plain'，当图例很多时可使用'scroll'
            top:'5',					//----图例相对容器位置,top\bottom\left\right
            // data:['新浦河','时代河','槐河','西兴后河'],
            data:[						//----图例内容
              {
                name:'新浦河',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              },
              {
                name:'时代河',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              },
              {
                name:'槐河',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              },
              {
                name:'西兴后河',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              }
            ],
          },
          xAxis: {
            // show:false,
            axisTick: {
              show: false,
              alignWithLabel: false
            },
            axisLine: {
              // show: false
              lineStyle: {
                color: 'rgba(30,66,88,1)',//刻度线的颜色
              }
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
              show: true,

              lineStyle: {
                color: 'rgba(30,66,88,1)',//刻度线的颜色
              }

            },
            axisLine: {
              // show: false
              lineStyle: {
                color: 'rgba(30,66,88,1)',//刻度线的颜色
              }
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
            name:'新浦河',
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'rgba(1,190,246,1)'
                }
              }
            },
            smooth:false,
            data: [1, 4, 6, 8, 2, 3, 1],
            type: 'line'
          },{
            name:'时代河',
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'rgba(22,241,247,1)'
                }
              }
            },
            smooth:false,
            data: [4, 5, 6, 6, 5, 2, 3],
            type: 'line'
          },{
            name:'槐河',
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'rgba(28,210,239,1)'
                }
              }
            },
            smooth:false,
            data: [2, 4, 5, 3, 2, 6, 4],
            type: 'line'
          },{
            name:'西兴后河',
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'rgba(251,106,35,1)'
                }
              }
            },
            smooth:false,
            data: [5, 2, 7, 1, 8, 5, 1],
            type: 'line'
          },]
        },
        listLoading:false,
        list:[{
          name:'20201211号…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211号…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211号…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211号…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211号…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211号…',
          name2:'850000',
          end:'5000'
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
                {value: 335, name: '1类水'},
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
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '-30',
            containLabel: true
          },
          legend: {
            show:false
          },
          color:['#20BB76','#247DF5','#24D0F4','#13F3F5','#FA6C24'],
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['5%', '90%'],
              center: ['50%', '50%'],
              data: [
                {value: 0, name: 'Ⅰ类水'},
                {value: 310, name: 'Ⅱ类水'},
                {value: 234, name: 'Ⅲ类水'},
                {value: 135, name: 'Ⅳ类水'},
                {value: 135, name: '不达标'},
              ],
              label: {
                show: false,
                position: 'center'
              },
              labelLine: {
                show: false
              },
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
        PieChartLegend:[{name:'Ⅰ类水',color:'#20BB76'},{name:'Ⅱ类水',color:'#247DF5'}, {name:'Ⅲ类水',color:'#24D0F4'},{name:'Ⅳ类水',color:'#13F3F5'},{name:'不达标',color:'#FA6C24'}],
        BarChartLegend:[],
        BarData:{
          title: {},
          calculable : true,
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            containLabel: true
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          label: {
            show: false,
            position: 'center',

          },
          labelLine: {
            normal: {
              show: false
            }
          },
          legend: {show:false},
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '90%'],
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
      this.onLoad()
    },
    methods: {
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        // this.map.centerAndZoom(new T.LngLat(117.283042, 31.86119), this.zoom) // 设置显示地图的中心点和级别
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
  @import '@/styles/variables.scss';
  .abnormal_tab{

  }
  .water_num01{
    .flex-item{
      padding: 20px 0;
      &:nth-child(2){
        margin: 0 2%;
      }
    }
  }
  .water_num02{
    & > div{
      width: 30%;
      padding: 20px 0;
      &:nth-child(2){
        margin: 0 0 0 2%;
      }
    }
   }

  .water_survey{
    position: fixed;
    top: 10vh;
    left: 30%;
    z-index: 20001;
    .flex{
      padding: 10px;
      width: 280px;
      background: rgba(9,15,47,0.5);
      border-radius: 10px;
      .survey_name{
        width: 80px;
        height: 73px;
        margin-right: 10px;
        background: url("./../../assets/image/water_bg02.png") left top no-repeat;
        background-size: 100% 100%;
        span{
          display: inline-block;
          width: 50px;
          margin-top: 18px;
        }
      }
      .flex-item{
        p{
          &:first-child{
            padding-left: 5px;
            border-left: 3px solid $baseColor;
          }
        }
      }
    }
  }

</style>
