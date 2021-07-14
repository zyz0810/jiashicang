<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white">

        <div class="title bold">备案审批</div>
        <div class="top clr_white">
          <div class="f26 bold text-center baseColor approval_num">审核总数：600</div>

          <div class="circle_num text-center">
            <img src="./../../assets/image/approval_circle.png" class="circle_img">
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_left_bg block">180/15%</span>
              <p class="clr_yellow bold">犬只审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_left_bg block">120/10%</span>
              <p class="clr_yellow bold">工程车审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_right_bg block">18/1%</span>
              <p class="clr_yellow bold">广告审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_right_bg block">260/50%</span>
              <p class="clr_yellow bold">其他审批</p>
            </div>
          </div>

        </div>

      <div class="left_bottom mt_10">
        <p class="f20 bold">审批类型数量排名（top8）</p>
        <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="300px" divwidth="100%"></BarChartFour>
      </div>

    </div>
    <div class="right_content clr_white">
      <div class="title bold">备案审批</div>
      <div class="top clr_white">
        <p class="f20 bold">审批走势（一周）</p>
        <LineChart :chartData="lineData" :BarChartLegend="PieChartLegend" height="300px" divwidth="100%"></LineChart>
      </div>
      <div class="left_bottom mt_10">
        <p class="f20 bold">审批详情</p>
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
    <div class="center_content clr_white text-center">
      <div class="map_intro f14 bold flex baseColor">
        <img src="./../../assets/image/point04.png"/>
        <div>广告审批</div>
      </div>
      <div class="map_intro f14 bold flex baseColor">
        <img src="./../../assets/image/point05.png"/>
        <div>工程车审批</div>
      </div>
      <div class="map_intro f14 bold flex baseColor">
        <img src="./../../assets/image/point06.png"/>
        <div>犬只审批</div>
      </div>
      <p class="text-right baseColor f16 bold mt_20">说明</p>
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
  import LineChart from '@/components/Charts/LineChart'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point04.png' // 引入刚才的map.js 注意路径
  import point02 from '@/assets/image/point05.png' // 引入刚才的map.js 注意路径
  import point03 from '@/assets/image/point06.png' // 引入刚才的map.js 注意路径

  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,LineChart},
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
        PieChartLegend:[],
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
            splitLine: { show: false },//去除网格线
            type: 'category',
            data: ['5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19']
          },
          yAxis: {
            axisTick: {
              show: false
            },
            axisLine: {
              // show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#26CBE2',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            splitLine: {
              show: false,//去除网格线
              textStyle: {
                color: '#08245F',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            type: 'value'
          },
          series: [{
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'#F3E981'
                }
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
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
              data:['设置其他外网','设置其他外网','设置其他外网','设置其他外网','工程渣土准运证核准','养犬许可']
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
          { lng: 116.41238, lat: 31.07689 },
          { lng: 116.34143, lat: 31.03403 },
        ]
        // this.markerPoint(site)
        //创建图片对象
        var icon01 = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(31, 52),
          iconAnchor: new T.Point(10, 25)
        });
        var icon02 = new T.Icon({
          iconUrl: point02,
          iconSize: new T.Point(31, 52),
          iconAnchor: new T.Point(10, 25)
        });
        var icon03 = new T.Icon({
          iconUrl: point03,
          iconSize: new T.Point(31, 52),
          iconAnchor: new T.Point(10, 25)
        });
        //创建信息窗口对象
        // let marker = new T.Marker(new T.LngLat(117.283042, 31.86119));// 创建标注
        // let marker = new T.Marker(new T.LngLat(117.283042, 31.86119), {icon: icon});// 创建标注
        // this.map.addOverLay(marker);
        // 随机向地图添加25个标注
        let bounds = this.map.getBounds();
        let sw = bounds.getSouthWest();
        let ne = bounds.getNorthEast();
        let lngSpan = Math.abs(sw.lng - ne.lng);
        let latSpan = Math.abs(ne.lat - sw.lat);
        for (let i = 0; i < 5; i++) {
          let point = new T.LngLat(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
          var marker = new T.Marker(point, {icon: icon01});// 创建标注
          this.map.addOverLay(marker);
        }
        for (let i = 0; i < 5; i++) {
          let point = new T.LngLat(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
          var marker = new T.Marker(point, {icon: icon03});// 创建标注
          this.map.addOverLay(marker);
        }
        for (let i = 0; i < site.length; i++) {
          let point = new T.LngLat(site[i].lng, site[i].lat);
          var marker = new T.Marker(point, {icon: icon02});// 创建标注
          this.map.addOverLay(marker);
        }
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
  @import '@/styles/variables.scss';

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


  .approval_num{
    height: 60px;
    background: url("./../../assets/image/approvalTitle_bg.png") center bottom no-repeat;
  }
  .circle_num{
    width: 21vh;
    height: 15vh;
    margin: 0 auto 10px;
    position: relative;
    /*background: url("./../../assets/image/approval_circle.png") center bottom no-repeat;*/
    background-size: 100% 100%;
    .circle_img{
      width: 21vh;
      height: 15vh;

      /*position: ;*/
      /*width: 100%;*/
      /*height: 100%;*/
    }
    .circle_num_item{
      position: absolute;
      &:nth-child(2){
        top: 1.6vh;
        left: -80px;
      }
      &:nth-child(3){
        top: 11vh;
        left: -80px;
      }
      &:nth-child(4){
        top: 1.6vh;
        right: -60px;
      }
      &:nth-child(5){
        top: 11vh;
        right: -80px;
      }
    }
  }
  .circleNum_left_bg{
    padding-right: 3px;
    margin-bottom: 5px;
    border-right: 2px solid $baseColor;
    background-image: linear-gradient(270deg,  rgba(39,73,167,1), rgba(39,73,167,0));
  }
  .circleNum_right_bg{
    padding-left: 3px;
    margin-bottom: 5px;
    border-left: 2px solid $baseColor;
    background-image: linear-gradient(270deg,  rgba(39,73,167,0), rgba(39,73,167,1));
  }
  .sqaer{
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
  }
  .center_content{
    padding: 30px;
    background: rgba(8,19,41,0.6);
    position: fixed;
    bottom: 120px;
    right: 35%;
    z-index: 99999999;
  }
  .map_intro{
    width: 129px;
    height: 51px;
    line-height: 51px;
    margin: 0 auto;
    background: url("./../../assets/image/intro_bg.png") center bottom no-repeat;
    background-size: 100% 100%;
    img{
      width: 18px;
      height: 30px;
      margin-right: 22px;
    }
  }
</style>
