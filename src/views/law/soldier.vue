<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="right_soldier bold text-center">
     <ul>
       <li class="f16">
         <p class="clr_white"><span class="f26">35</span> 个</p>
         <span class="block"></span>
         <p class="f16 intro_txt clr_blue01">执法人员</p>
       </li>
       <li class="f16 mt_20">
         <p class="clr_white"><span class="f26">16</span> 辆</p>
         <span class="block flex"></span>
         <p class="f16 intro_txt clr_blue01">执法车辆</p>
       </li>
       <li class="f16 mt_20">
         <p class="clr_white"><span class="f26">828</span> 路</p>
         <span class="block flex"></span>
         <p class="f16 intro_txt clr_blue01">视频</p>
       </li>
     </ul>
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
  import point07 from '@/assets/image/point07.png' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point13.png' // 引入刚才的map.js 注意路径
  import {pointList} from '@/api/system'
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive},
    data() {
      return {
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
        pointList:[],
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
      this.getList();
    },
    methods: {
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        this.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';

      },
      mapPoint(list){
        console.log('点位');
        //创建图片对象
        this.map.clearOverLays();
        let icon01 = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });

        let markers = [];
        console.log(list);
        for (let i = 0; i < list.length; i++) {
          // var marker
          let point = new T.LngLat(list[i].longitude,list[i].latitude);
          markers[i]  = drawTMaker(point, icon01,this,list[i]);
        }
        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          console.log('获取')
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            console.log(m)
            let infoWin1 = new T.InfoWindow();
            console.log(txt)
            let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
            let type ;
            let sContent =
              '<div class="point_info">' +
              '<p class="f12 time">监控名称：' + txt.name + '</p>' +
              '<p class="f12 time">所属区域：' + txt.depart_name + '</p>' +
              '<p class="f12 time">来源区域：' + txt.community_name + '</p>' +
              '<p class="f12 time">所在地址：' + txt.install_place + '</p>' +
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }
      },

      getList(){
        pointList({type:'allList'}).then((res) => {
          this.pointList = res.data;
          this.mapPoint(this.pointList)
        });
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
  .mapDiv{
    width:100%;
    height:80vh;
  }

  .right_soldier{
    width: 135px;
    position: fixed;
    bottom: 200px;
    right: 20px;
    z-index: 9999;
    li{
      & > span{
        width: 135px;
        height: 92px;
        line-height: 80px;
      }
      &:nth-child(1){
        span{
          background: url("./../../assets/image/soldier_icon01.png") left top no-repeat;
        }
      }
      &:nth-child(2){
        span{
          background: url("./../../assets/image/soldier_icon02.png") left top no-repeat;
        }
      }
      &:nth-child(3){
        span{
          background: url("./../../assets/image/soldier_icon03.png") left top no-repeat;
        }
      }


      .intro_txt{
        margin-top: -15px;
      }
    }
  }


</style>
