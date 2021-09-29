<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white base_bg_left">
      <div class="left_server clr_white text-center f16 bold border base_bg shadow">
        <div :class="['mb_20',activeIndex == 0 ? 'baseColor':'']" @click="handlePageType(0)">
          <img v-if="activeIndex == 0" src="./../../assets/image/case_nav01_active.png" class="nav_img"/>
          <img v-else src="./../../assets/image/case_nav01.png" class="nav_img"/>
          <p class="nav_txt">数字城管</p>
        </div>
        <div :class="['mb_20',activeIndex == 1 ? 'baseColor':'']" @click="handlePageType(1)">
          <img v-if="activeIndex == 1" src="./../../assets/image/case_nav01_active.png" class="nav_img"/>
          <img v-else src="./../../assets/image/case_nav01.png" class="nav_img"/>
          <p class="nav_txt">信访投诉</p>
        </div>
        <div :class="[activeIndex == 2 ? 'baseColor':'']" @click="handlePageType(2)">
          <img v-if="activeIndex == 2" src="./../../assets/image/case_nav01_active.png" class="nav_img"/>
          <img v-else src="./../../assets/image/case_nav01.png" class="nav_img"/>
          <p class="nav_txt">指挥平台</p>
        </div>
      </div>
      <ul class="direct_option clr_white text-center" v-if="activeIndex == 2">
        <li :class="['border','shadow','mb_10',directType==1?'baseColor':'']" @click="handleDirectType(1)">AI上报</li>
        <li :class="['border','shadow',directType==2?'baseColor':'']" @click="handleDirectType(2)">后台录入</li>
      </ul>
    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 2">
      <div class="top clr_white">
        <p class="f20 bold txt_linear">案件高发时段分析</p>
        <!--<BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="26vh" divwidth="100%"></BarChartFour>-->
        <LineChart :chartData="lineData" :BarChartLegend="PieChartLegend" height="25vh" divwidth="100%"></LineChart>
      </div>
      <div class="mt_20 ">
        <p class="f20 bold txt_linear">部门案件处置分析</p>
        <BarChartFive :chartData="BarData" height="30vh" divwidth="100%"></BarChartFive>
      </div>

    </div>
    <div class="top_div top_one flex clr_white text-center f16 bold" v-if="activeIndex == 0">
      <div class="flex-item border shadow">
        周上报量
        <span class="txt_linear">{{formData.shangBao}}</span>
      </div>
      <div class="flex-item border shadow ml_10">
        周处理量
        <span class="txt_linear">{{formData.chuLi}}</span>
      </div>
      <div class="flex-item border shadow ml_10">
        周未处理量
        <span class="txt_linear">{{formData.undisposed}}</span>
      </div>
      <div class="flex-item border shadow ml_10">
        周黄灯件
        <span class="txt_linear">{{formData.yellow_num}}</span>
      </div>
      <div class="flex-item border shadow ml_10">
        周红灯件
        <span class="txt_linear">{{formData.red_num}}</span>
      </div>
    </div>
    <div class="top_div flex clr_white text-center f16 bold" v-if="activeIndex == 1">
      <div class="flex border shadow mr_20" style="width: 650px">
        <div class="flex-item">
          受理量
          <span class="txt_linear">{{formData.month_deal_num}}</span>
        </div>
        <div class="flex-item">
          同比{{formData.basis_direction == 1?'上升':'下降'}}
          <span class="txt_linear">{{formData.basis_num}}%</span>
        </div>
        <div class="flex-item">
          环比{{formData.comparative_direction == 1?'上升':'下降'}}
          <span class="txt_linear">{{formData.comparative_num}}%</span>
        </div>
        <div class="flex-item">
          满意率
          <span class="txt_linear">{{formData.satisfaction_rate}}%</span>
        </div>
      </div>
      <div class="flex border shadow">
        <div class="flex-item">
          重复投诉件
          <span class="txt_linear">{{formData.rep_num}}</span>
        </div>
      </div>

    </div>
    <div class="top_div flex clr_white text-center f16 bold" v-if="activeIndex == 2 && directType == 1">
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          今日上报量
          <span class="txt_linear">{{AIData.count}}</span>
        </div>
      </div>
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          今日受理量
          <span class="txt_linear">{{AIData.chuli}}</span>
        </div>
      </div>
      <div class="flex border shadow">
        <div class="flex-item">
          今日结案量
          <span class="txt_linear">{{AIData.end}}</span>
        </div>
      </div>

    </div>
    <div class="top_div flex clr_white text-center f16 bold" v-if="activeIndex == 2 && directType == 2">
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          今日上报量
          <span class="txt_linear">{{directData.count}}</span>
        </div>
      </div>
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          今日受理量
          <span class="txt_linear">{{directData.chuli}}</span>
        </div>
      </div>
      <div class="flex border shadow">
        <div class="flex-item">
          今日结案量
          <span class="txt_linear">{{directData.end}}</span>
        </div>
      </div>

    </div>
    <div class="mapBtn clr_white border shadow p20 LH_2" v-if="activeIndex != 2" @click="changeMap">
      <p v-if="mapType == 1">反复件<br/>热力图</p>
      <p v-if="mapType == 2">实时<br/>点位</p>
    </div>
<!--    <ul class="point_intro bg_blue01 p20">-->
<!--      <li class="weui-cell text-center" v-if="mapType  == 2 && activeIndex == 0">-->
<!--        <div class="weui-cell__hd"><img src="./../../assets/image/point02.png"/></div>-->
<!--        <div class="weui-cell__bd baseColor">红灯件</div>-->
<!--      </li>-->
<!--      <li class="weui-cell text-center" v-if="mapType  == 2  && activeIndex != 2">-->
<!--        <div class="weui-cell__hd"><img src="./../../assets/image/point01.png"/></div>-->
<!--        <div class="weui-cell__bd baseColor">黄灯件</div>-->
<!--      </li>-->
<!--      <li class="weui-cell text-center" v-if="(mapType  == 2  && activeIndex != 2) || activeIndex == 2">-->
<!--        <div class="weui-cell__hd"><img src="./../../assets/image/point03.png"/></div>-->
<!--        <div class="weui-cell__bd baseColor">正常件</div>-->
<!--      </li>-->
<!--    </ul>-->



    <myDialog :visible.sync="showImgDialog"
               title="查看图片"
               :append-to-body="true">
      <img v-for="item in imgArr" width="100%" :src="item" alt />

      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

    </myDialog>

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
  import point01 from '@/assets/image/point01.png'
  import {abnormalSite} from "@/api/water"; // 引入刚才的map.js 注意路径
  import {caseCount,commandCase} from "@/api/lowCase";
  import point02 from "@/assets/image/point20.png";
  import point03 from "@/assets/image/point24.png";
  import point04 from "@/assets/image/point22.png"; // 引入刚才的map.js 注意路径
  let heatmapOverlay;
  export default {
    name: 'case',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
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
            bottom: '5',
            top: '20',
            containLabel: true
          },
          //----------------   图例 legend  -----------------
          legend:{},
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
            axisLine: {
              // show: false
              lineStyle: {
                color: 'rgb(31,67,88,1)'
              }
            },
            splitLine: { show: false },//去除网格线
            type: 'category',
            data: ['滨文路', '长河路', '江陵路', '江虹路', '秋溢路', '滨湖路']
          },
          yAxis: {
            axisTick: {
              show: true
            },
            axisLine: {
              // show: false
              lineStyle: {
                color: 'rgb(31,67,88,1)'
              }
            },
            splitArea : {show : false},//保留网格区域
            axisLabel: {
              show: true,
              textStyle: {
                color: '#26CBE2',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            splitLine: {
              show: true,//去除网格线
              lineStyle:{
                color: ['rgb(31,67,88,1)'],
                width: 1,
                type: 'solid',
              },
              textStyle: {
                color: 'rgb(31,67,88,1)',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            type: 'value'
          },
          series: [{
            smooth: false,
            symbol: 'none',
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'#F3E981'
                }
              }
            },
            data: [332, 320, 301, 230, 156, 98,],
            type: 'line'
          }]
        },
        imgArr:[],
        formData:{},
        directType:1,
        mapType:1,
        activeIndex:0,
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
              data: [98,156,230,301,320, 332,]
            },
          ]
        },
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
        pointOne:[],
        pointTwo:[],
        AIData:{},
        directData:{},
        pointThree:[],
        pointFour:[],
        showImgDialog:false,
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
      this.getHeatMap();
      this.getPointOne();
      window.handleVideo = this.handleVideo;
    },
    methods: {
      handlePageType(val){
        this.activeIndex = val;
        if(val == 2){
          this.getPointThree();
        }else{
          this.getPointOne();
        }
      },
      //指挥平台
      handleDirectType(val){
        this.directType = val;
        if(val == 1){
          this.mapPoint(2,this.pointThree)
        }else{
          this.mapPoint(2,this.pointFour)
        }
      },
      changeMap(){
        if(this.mapType == 1){
          this.mapType  = 2
          // this.getMaker();
          this.getPointOne();
        }else{
          this.mapType  = 1
          this.getHeatMap();
        }
      },
      getHeatMap(){
        this.map.clearOverLays();
        console.log('热力图')
        var data = [
          {name: '海门', value: 899},
          {name: '鄂尔多斯', value: 312},
          {name: '招远', value: 512},
          {name: '舟山', value: 142},
          {name: '齐齐哈尔', value: 514},
          {name: '盐城', value: 615},
          {name: '盐城1', value: 914},
          {name: '赤峰1', value: 315},
          {name: '赤峰2', value: 315},
        ];
        var geoCoordMap = {
          '海门': [120.217470,30.202110],
          '招远': [120.223820,30.199590],
          '舟山': [120.217210,30.195440],
          '盐城': [120.207510,30.206050],
          '赤峰': [120.237720,30.199590],
          '盐城1': [120.219350,30.192690],
          '赤峰1': [120.218150,30.190840],
          '赤峰2': [120.226140,30.196250],

        };
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                lat: geoCoord[1],
                lng: geoCoord[0],
                count: data[i].value
              });
            }
          }
          return res;
        };
        var points = convertData(data);
        heatmapOverlay = new T.HeatmapOverlay({
          "radius": 50,
        });
        this.map.addOverLay(heatmapOverlay);
        heatmapOverlay.setDataSet({data: points, max: 300});
        console.log(points)
      },
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        // this.map.centerAndZoom(new T.LngLat(117.283042, 31.86119), this.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';
        this.map.setStyle('indigo')

      },
      getPointOne(){
        caseCount().then((res) => {
          const {chuLi,shangBao,undisposed,yellow_detail,yellow_num,red_num}=res.data.city
          const {basis_direction,basis_num,comparative_direction,comparative_num,satisfaction_rate,rep_num,month_deal_num}=res.data.letter
          this.formData = {chuLi,shangBao,undisposed,yellow_detail,yellow_num,red_num,basis_direction,basis_num,comparative_direction,comparative_num,satisfaction_rate,rep_num,month_deal_num}
          this.pointOne = res.data.city.list;
          this.pointTwo = res.data.letter.list;
          if((this.activeIndex == 0 || this.activeIndex == 1) && this.mapType == 1){
            // this.mapPoint(0,this.pointOne)
            // 热力图
            this.getHeatMap();
          }else if(this.activeIndex == 0 && this.mapType == 2) {
            this.mapPoint(0, this.pointOne)
          } else{
            console.log('第二个列表第二个列表第二个列表第二个列表')
            this.mapPoint(1,this.pointTwo)
          }

        });
      },
      getPointThree(){
        commandCase().then((res) => {
          this.directData = {
            chuli:res.data.dj.chuli,
            count:res.data.dj.count,
            end:res.data.dj.end
          };
          this.AIData = {
            chuli:res.data.ai.chuli,
            count:res.data.ai.count,
            end:res.data.ai.end
          };
          this.pointThree = res.data.ai.data;
          this.pointFour = res.data.dj.data;
          this.mapPoint(2,this.pointThree)
          if(this.directType == 1){
            this.mapPoint(2,this.pointThree)
          }else{
            this.mapPoint(2,this.pointFour)
          }
        });
      },
      mapPoint(type,list){
        //创建图片对象
        this.map.clearOverLays();
        let icon03 = new T.Icon({
          iconUrl: point03,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });

        let markers = [];

        console.log(list);
        for (let i = 0; i < list.length; i++) {
          // var marker
          // 0：关  1：开
          if(type == 0){
            let point = new T.LngLat(list[i].x_line,list[i].y_line);
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }else{
            let point = new T.LngLat(list[i].log,list[i].lat);
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }

        }


        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            console.log(m)
            let infoWin1 = new T.InfoWindow();
            console.log(txt)
            let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
            // 数字城管：任务号、问题来源、问题状态、小类名称、上报时间、问题描述、所属区域；
            // 信访投诉：受理单编号、工单状态、投诉来源、详细类型、反映内容、违法地址
            // 指挥平台（AI上报，问题登记）：案件编号、事件来源、小类、上报时间、问题描述、事件位置；图片
            let sContent = ''
            if(type == 0){
              sContent =
                '<div class="point_info">' +
                '<p class="f12 time">任务号：' + txt.number_no + '</p>' +
                '<p class="f12 time">问题来源：' + txt.source + '</p>' +
                '<p class="f12 time">问题状态：' + txt.status + '</p>' +
                '<p class="f12 time">小类名称：' + txt.small_category + '</p>' +
                '<p class="f12 time">上报时间：' + txt.create_time + '</p>' +
                '<p class="f12 time">问题描述：' + txt.description + '</p>' +
                '<p class="f12 time">所属区域：' + txt.professional_department_belongs + '</p>' +
                '</div>';
            }else if(type == 1){
              sContent =
                '<div class="point_info">' +
                '<p class="f12 time">受理单编号：' + txt.number_no + '</p>' +
                '<p class="f12 time">工单状态：' + txt.status + '</p>' +
                '<p class="f12 time">投诉来源：' + txt.source + '</p>' +
                '<p class="f12 time">详细类型：' + txt.detail_type + '</p>' +
                '<p class="f12 time">反映内容：' + txt.react_content + '</p>' +
                '<p class="f12 time">违法地址：' + txt.Illegal_address + '</p>' +
                '</div>';
            }else if(type == 2){
              // 指挥平台（AI上报，问题登记）：案件编号、事件来源、小类、上报时间、问题描述、事件位置；图片
              let source;
              if(txt.source == 1){
                source='问题登记'
              }else{
                source='AI上报'
              }
              let create_at = that.$moment(Number(txt.create_at)*1000).format("YYYY-MM-DD HH:mm:ss");
              if(txt.source == 1){
                sContent =
                  '<div class="point_info">' +
                  '<p class="f12 time">案件编号：' + txt.number_no + '</p>' +
                  '<p class="f12 time">事件来源：' + source + '</p>' +
                  '<p class="f12 time">小类：' + txt.small_category_name + '</p>' +
                  '<p class="f12 time">上报时间：' + create_at + '</p>' +
                  '<p class="f12 time">问题描述：' + txt.description + '</p>' +
                  '<p class="f12 time">事件位置：' + txt.address + '</p>' +
                  '<p class="f12 time text-right" onClick="handleVideo('+aa+')">查看图片</p>' +
                  '</div>';
              }else{
                sContent =
                  '<div class="point_info">' +
                  '<p class="f12 time">案件编号：' + txt.number_no + '</p>' +
                  '<p class="f12 time">事件来源：' + source + '</p>' +
                  '<p class="f12 time">小类：' + txt.small_category_name + '</p>' +
                  '<p class="f12 time">上报时间：' + create_at + '</p>' +
                  '<p class="f12 time">问题描述：' + txt.description + '</p>' +
                  '<p class="f12 time">事件位置：' + txt.address + '</p>' +
                  '</div>';
              }


            }


            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }

      },
      handleVideo(txt){
        this.showImgDialog = true;
        this.imgArr = txt.images_arr;
      },
    }
  }
</script>
<style lang="scss" scoped>
  /deep/.tdt-infowindow-content-wrapper{
    color: #fff;
  }
  .point_intro{
    position: fixed;
    bottom: 160px;
    right: 30%;
    z-index: 9999;
    li{
      width: 129px;
      height: 51px;
      background: url("./../../assets/image/intro_bg.png") no-repeat left center;
      .weui-cell__hd{
        width: 45px;
        img{
          width: 75%;
        }
      }
    }
  }
  .top_div{
    &.top_one{
      width: 50%;
      left: 20%;
      .flex-item{
        padding: 10px 0;
      }
    }

  }
  .mapBtn{
    position: fixed;
    top: 15vh;
    left: 15%;
    z-index: 999999;
  }
  .left_content{
    padding: 20px;
    width: 20%;
    position: fixed;
    top: 10vh;
    left: 20px;
    z-index: 99999;
    .left_server{
      width: 100px;
      padding: 20px 0;
    }
    .direct_option{
      position: absolute;
      left: 140px;
      top: 20px;
      z-index: 99999;
      width: 80px;
      li{
        padding: 10px;
      }
    }
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
