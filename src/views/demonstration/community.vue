<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_left_community">
<!--      <div class="left_server baseColor text-center f16 bold border shadow base_bg">-->
<!--        <div class="mb_20 clr_white">-->
<!--          <i class="iconfont icon-zaosheng f26"></i>-->
<!--          <p class="mt_10">滨江二区</p>-->
<!--        </div>-->
<!--      </div>-->
      <div class="left_content clr_white">
        <p class="bold clearfix">
          <span class="f20 txt_linear fl">AI视频墙</span>
<!--          <span class="f14 fr">更多</span>-->
        </p>
        <ul class="AI_list">
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路与江虹路交叉口</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路120号</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路138号</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路269号</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
        </ul>


      </div>
    </div>

    <div class="right_content clr_white base_bg_right">
        <p class="f20 bold txt_linear">智能识别概况</p>
        <div class="text-center">
          <ul class="bold communityNum flex mt_10">
            <li class="flex flex-item">
              <span class="f26 baseColor block">32</span>
              <span class="f16 clr_white block">监控点位</span>
            </li>
            <li class="flex flex-item">
              <span class="f26 baseColor block">1</span>
              <span class="f16 clr_white block">监控路段</span>
            </li>
          </ul>
          <div class="pieChart mt_10">
            <!--              <RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="16vh"></RingChart>-->
            <PieChartTwo :chartData="pieChartOne" :PieChartLegend="PieChartLegend" height="16vh" :divwidth="'100%'"></PieChartTwo>
          </div>
        </div>
        <p class="f20 bold txt_linear mt_20">今日违规场景概况</p>
        <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="36vh" divwidth="100%"></BarChartFour>


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
  import point01 from '@/assets/image/point13.png' // 引入刚才的map.js 注意路径
  import global from "@/utils/common";
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
        pieChartOne:{
          color: ['#75E4E3', '#E5AF45', '#9941E2'],
          // 预警值 环中的数据显示
          title: {
            text: '预警量',
            top: '38%',
            subtext: '',
            textStyle: {
              color: '#f2f2f2',
              fontSize: 20,
              align: 'center'
            },
            subtextStyle: {
              fontSize: 20,
              color: ['#fff'],
              align: 'center'
            },
            x: '50%',
            y: 'center',
            textAlign: 'center'
          },
          // 中心的文字
          graphic: {
            type: 'text',
            top: '55%',
            left: '45%',
            style: {
              color: '#f2f2f2',
              text: '10',
              textAlign: 'center',
              fill: '#f2f2f2',
              fontSize: 10,
              fontWeight: 700
            },
          },
          // 图表的位置和大小是由grid控制的
          grid: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
          },

          series: [// 主要展示层的
            {
              name: '',
              radius: ['50%', '65%'],
              center: ['50%', '50%'],
              type: 'pie',
              data: [{ value: 80, name: '违规立案' },
                { value: 20, name: '待审核' },
                { value: 30, name: '违规不立案' }],
              labelLine: {
                normal: {
                  show: false,
                  length1:'0',
                  length2:'0',
                }
              },
              label: { //对标签中 显示的文字进行设置
                color: 'white',
                position: 'outside',
                normal: {
                  // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                  formatter: '{a|{b}}\n{hr|}\n{per|{d}%}',
                  padding: [10, 15],
                  backgroundColor: '#387993',
                  borderRadius: 5,
                  rich: {
                    a: {
                      color: 'white',
                      fontSize: 15,
                      lineHeight: 20,
                      align: 'left'
                    },
                    hr: {
                      width: '100%',
                      height: 0,
                      alien: 'left'
                    },
                    per: {
                      color: '#fff',
                      align: 'left',
                      fontSize: 15,
                    }
                  }
                },
              },
            },
            {
              name: '',
              type: 'gauge',
              center: ['50%', '50%'],
              // radius: ['80%', '90%'],
              radius: '90%',
              startAngle: 0,
              endAngle: 359.9,
              splitNumber: 99,
              hoverAnimation: true,
              axisTick: {
                show: false
              },
              splitLine: {
                length: 13,
                lineStyle: {
                  width: 1,//最外层光圈的粗细
                  color: '#5692BC'// 最外层光圈颜色宽度
                }
              },
              title: {
                show: false
              },
              axisLabel: {
                show: false
              },
              pointer: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  opacity: 0
                }
              },
              detail: {
                show: false
              },
              data: [{ value: 80, name: '违规立案' },
                { value: 20, name: '待审核' },
                { value: 30, name: '违规不立案' }],
            },
            {
              name: '',
              type: 'pie',
              radius: ['90%', '100%'],
              center: ['77%', '50%'],
              silent: true,
              z: 0,
              zlevel: 0,
              showVal: true,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                }
              },
              itemStyle: {
                normal: {
                  // 定制显示（按顺序）最外层光环色值
                  color: function (params) {
                    var colorList = []
                    return colorList[params.dataIndex]
                  }
                }
              },
              data: []
            }
          ],
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
              data:['出店经营','无照商贩','占道经营','乱堆物料','非机动车违停','户外广告','违规撑伞','暴露垃圾']
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
                      { offset: 1, color: 'rgba(0,239,252,1)' },
                      { offset: 0, color: 'rgba(0,239,252,0)' }
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
              data: [56,56,230,301,320, 332,963,963]
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
        this.map.centerAndZoom(new T.LngLat(global.latlog.centerLongitude, global.latlog.centerLatitude), global.latlog.zoom) // 设置显示地图的中心点和级别
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
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(10, 25)
        });
        //创建信息窗口对象
        // let marker = new T.Marker(new T.LngLat(117.283042, 31.86119));// 创建标注
        let marker = new T.Marker(new T.LngLat(this.centerLongitude, this.centerLatitude), {icon: icon});// 创建标注
        // this.map.addOverLay(marker);
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
.left_left_community{
  .left_server{
    position: fixed;
    top: 10vh;
    left: 20px;
    width: 120px;
    z-index: 9999;
    padding: 20px;
  }
  .left_content{
    width: 15%;
    min-width: 260px;
    padding-right: 20px;
    left: 20px;
    .AI_list{
      li{
        border-radius: 20px;
        position: relative;
        .img_txt{
          position: absolute;
          left: 0;
          top: 0;
          z-index: 99999;
          width: 100%;
          line-height: 2;
          padding: 0 10px;
          background: rgba(0,0,0,0.5);
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        img{
          width: 100%;
          height: 13vh;
          border-radius: 20px;
        }
      }
    }
  }
}

.communityNum{
  /*width: 30%;*/
  li{
    margin-right: 10%;
    height: 6vh;
    line-height: 6vh;
    background: url("./../../assets/image/communityNum_bg.png") left top no-repeat;
    background-size: 100% 100%;
    & > span{
      &:nth-child(1){
        width: 40%;
        height: 6vh;
      }
      &:nth-child(2){
        width: 60%;
        height: 6vh;
      }
    }
  }
}

</style>
