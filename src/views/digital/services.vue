<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_server baseColor text-center f16 bold border base_bg shadow">
      <div :class="['mb_20',activeIndex == 0 ? 'clr_white':'']" @click="activeIndex = 0">
        <i class="iconfont icon-zaosheng f26"></i>
        <p class="mt_10">数字停车</p>
      </div>
      <div :class="activeIndex == 1 ? 'clr_white':''" @click="activeIndex = 1">
        <i class="iconfont icon-fengji f26"></i>
        <p class="mt_10">共享单车</p>
      </div>
    </div>
    <ul class="f16 clr_white bold text-center link_intro">
      <li class="mb_20 f14">空闲泊位等级</li>
      <li>
        <p>5级</p>
        <span class="block color_bg01"></span>
      </li>
      <li>
        <p>4级</p>
        <span class="block color_bg02"></span>
      </li>
      <li>
        <p>3级</p>
        <span class="block color_bg03"></span>
      </li>
      <li>
        <p>2级</p>
        <span class="block color_bg04"></span>
      </li>
      <li>
        <p>1级</p>
        <span class="block color_bg05"></span>
      </li>
    </ul>
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


      <div class="mt_20">
        <p class="mb_20 f18 bold text-center">全区停车场数：1210</p>
        <RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="20vh"></RingChart>
      </div>
      <RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="20vh"></RingChart>
    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 1">
      <p class="f20 bold txt_linear mb_20">车辆概况</p>
      <div class="flex f16 bold clr_white bicycle text-center">
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
  import point01 from '@/assets/image/point01.png' // 引入刚才的map.js 注意路径
  import toolTipBg from '@/assets/image/digital-bg.png' // 引入刚才的map.js 注意路径
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
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
              radius: ['60%', '80%'],
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
            top: '40%',
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
              radius: ['68%', '78%'],
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
              radius: ['60%', '59%'],
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
              radius: ['60%', '90%'],
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
                {value: 120, name: '公用泊位'},
                {value: 105, name: '专用泊位'},
                {value: 50, name: '道路泊位'},
                {value: 305, name: '其他泊位'},
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


  .left_server{
    position: fixed;
    top: 13vh;
    left: 20px;
    z-index: 9999;
    padding: 20px;
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
