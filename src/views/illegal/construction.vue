<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
<!--    <div class="right_content right_construction bold base_bg_right">-->
<!--        <div class="flex clr_white">-->
<!--          <div class="text-center">-->
<!--            <img src="./../../assets/image/construction-icon.png">-->
<!--            <p class="txt_linear f20 mt_10">违建概况</p>-->
<!--          </div>-->
<!--          <ul class="ml_10">-->
<!--            <li><span class="f16">违法建筑总宗数</span><span class="clr_blue03 f26">2881</span></li>-->
<!--            <li><span class="f16">违法占地总面积</span><span class="clr_blue03 f26">194246.83</span></li>-->
<!--            <li><span class="f16">违法建筑总面积</span><span class="clr_blue03 f26">285742.53</span></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--    </div>-->
    <div class="top_div flex clr_white text-center">
      <div class="flex f16 bold mr_20 border shadow" style="width: 1000px;" @click="handleMapType(1)">
        <div class="flex-item baseColor">违法建筑</div>
        <div class="flex-item">
          违法建筑总宗数
          <span class="txt_linear">2881</span>
        </div>
        <div class="flex-item">
          违法占地总面积
          <span class="txt_linear">194246.83</span>
        </div>
        <div class="flex-item">
          违法建筑总面积
          <span class="txt_linear">285742.53</span>
        </div>
      </div>
      <div class="flex f16 bold border shadow" style="width: 260px;" @click="handleMapType(2)">
        <div class="flex-item baseColor">视频</div>
        <div class="flex-item">
          普通视频
          <span class="txt_linear">828</span>
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
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point52.png'
  import point02 from '@/assets/image/point51.png'
  import {getAllVideoPoint} from "@/api/system"; // 引入刚才的map.js 注意路径

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
      handleMapType(type){
        this.showMapType = type;
        if(type == 1){//获取设备点位
          this.getList();
        }else if(type == 2){//获取视频点位
          this.getVideo();
        }
      },
      //违法建筑点位
      getList(){
        let pointList = [{
          name:'西兴中队',
          num01:'840',
          num02:'85233.83',
          num03:'121661.83',
          longitude:'120.203186',
          latitude:'30.214312',
        },{
          name:'长河中队',
          num01:'458',
          num02:'16213',
          num03:'26080.7',
          longitude:'120.19302',
          latitude:'30.194742',
        },{
          name:'浦沿中队',
          num01:'1583',
          num02:'138000',
          num03:'138000',
          longitude:'120.19772',
          latitude:'30.20525',
        }];
        this.mapPoint('',pointList);
      },
      //视频点位
      getVideo(){
        getAllVideoPoint({class:2}).then((res) => {
          this.pointList = res.data;
          this.mapPoint('video',this.pointList)
        });
      },
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        this.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';

      },
      mapPoint(type,list){
        console.log('点位333')
        //创建图片对象
        this.map.clearOverLays();
        let icon01 = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon02 = new T.Icon({
          iconUrl: point02,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let markers = []

        if(type == 'video'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            let point = new T.LngLat(list[i].longitude,list[i].latitude);
            markers[i]  = drawTMaker(point, icon02,this,list[i]);
          }
        }else{
          for (let i = 0; i < list.length; i++) {
            // var marker
            let point = new T.LngLat(list[i].longitude,list[i].latitude);
            markers[i]  = drawTMaker(point, icon01,this,list[i]);
          }
        }


        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            console.log(m)
            let infoWin1 = new T.InfoWindow();

            // 办件编号、申请人/单位、电话、地址、申请日期、办结日期、办理结果、权力名称、所属类型
            let sContent =
              // '<p class="f14 time">名称：' + txt.name + '</p>' +
              // '<p class="f14 time">违法建筑总宗数：' + txt.num01 + '</p>' +
              // '<p class="f14 time">违法占地总面积：' + txt.num02 + '</p>' +
              // '<p class="f14 time">违法建筑总面积：' + txt.num03 + '</p>' +
              '<div class="point_info">' +
              '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
              '<tr>' +
              '<td class="txt_6">名称</td><td>' + txt.name + '</td>' +
              '</tr>'+
              '<tr>' +
              '<td>违法建筑总宗数</td><td>' + txt.num01 + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>违法占地总面积</td><td>' + txt.num02 + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>违法建筑总面积</td><td>' + txt.num03 + '</td>'+
              '</tr>'+
              '</table>'+
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }
      },
    }
  }
</script>
<style lang="scss" scoped>


  .right_construction{
    /*width: 400px;*/
    /*position: fixed;*/
    /*top: 15vh;*/
    /*right: 50px;*/
    /*z-index: 9999;*/
    ul{
      li{
        span{
          &:nth-child(1){
            display: inline-block;
            width: 150px;
          }
        }
      }
    }
  }


</style>
