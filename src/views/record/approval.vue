<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white base_bg_left ">

        <div class="txt_linear f18 bold">备案审批概况（周）</div>
        <div class="mt_20 clr_white">
          <div class="f18 bold text-center approval_num txt_shadow">审批总数：{{formData.count}}</div>

          <div class="circle_num text-center">
            <img src="./../../assets/image/approval_circle.png" class="circle_img">
            <div class="circle_num_item">
              <span class="clr_white f18 bold circleNum_left_bg block">{{formData.quanzhi}}/{{((Number(formData.quanzhi)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">犬只审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f18 bold circleNum_left_bg block">{{formData.gongcheng}}/{{((Number(formData.gongcheng)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">工程渣土</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f18 bold circleNum_right_bg block">{{formData.guanggao}}/{{((Number(formData.guanggao)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">广告审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f18 bold circleNum_right_bg block">{{formData.qita}}/{{((Number(formData.qita)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">其他审批</p>
            </div>
          </div>

        </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">备案审批类型分析（周）</p>
        <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="300px" divwidth="100%"></BarChartFour>
      </div>

    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="top clr_white">
        <p class="f20 bold txt_linear mb_20">备案审批走势（周）</p>
        <LineChart :chartData="lineData" :BarChartLegend="PieChartLegend" height="25vh" divwidth="100%"></LineChart>
      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear mb_20">备案审批详情（周）</p>
        <el-table v-loading="listLoading" :data="list" :height="300"  stripe element-loading-text="拼命加载中" fit ref="tableList" class="f14">
          <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
          <el-table-column label="申请人/单位" align="center" prop="name"></el-table-column>
          <el-table-column label="权力名称" align="center" prop="name"></el-table-column>
          <el-table-column label="办理结果" align="center" prop="end"></el-table-column>

        </el-table>
      </div>
    </div>
    <div class="center_content clr_white text-center">
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point25.png"/></div>
        <div class="weui-cell__bd">广告审批</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point26.png"/></div>
        <div class="weui-cell__bd">犬只审批</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point27.png"/></div>
        <div class="weui-cell__bd">工程渣土</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point28.png"/></div>
        <div class="weui-cell__bd">其他审批</div>
      </div>
      <!--<p class="text-right baseColor f16 bold mt_20">说明</p>-->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
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
  import point01 from '@/assets/image/point25.png' // 引入刚才的map.js 注意路径
  import point02 from '@/assets/image/point26.png' // 引入刚才的map.js 注意路径
  import point03 from '@/assets/image/point27.png' // 引入刚才的map.js 注意路径
  import point04 from '@/assets/image/point28.png' // 引入刚才的map.js 注意路径
  import {generalApprove} from '@/api/recordApproval'
  import {cleanCarAddressList, lastGPS} from "@/api/garbageLink";
  import {cos} from "@/utils/translate";

  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,LineChart},
    data() {
      return {
        listLoading:false,
        list:[{
          name:'倪维绞',
          name2:'养犬许可-个人申请',
          end:'审批通过'
        },{
          name:'杭州市滨江区尔似便利店',
          name2:'设置其他户外广告设施和招牌、指示牌备案',
          end:'审批通过'
        },{
          name:'杭州市滨江区羽炫食品便利店',
          name2:'设置其他户外广告设施和招牌、指示牌备案',
          end:'审批通过'
        },{
          name:'杭州市滨江区教育局',
          name2:'城市建筑垃圾处置核准（处置）',
          end:'审批通过'
        },{
          name:'张潆心',
          name2:'养犬许可-个人申请',
          end:'审批通过'
        },{
          name:'刘欢',
          name2:'养犬许可-个人申请',
          end:'审批通过'
        },{
          name:'钱旦玮',
          name2:'养犬许可-个人申请',
          end:'审批通过'
        },{
          name:'陈俊边',
          name2:'养犬许可-个人申请',
          end:'审批通过'
        },{
          name:'唐根霞',
          name2:'养犬许可-个人申请',
          end:'审批通过'
        },{
          name:'陈青霞',
          name2:'养犬许可-个人申请',
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
            data: ['9.22', '9.23', '9.24', '9.25', '9.26', '9.27', '9.28']
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
            data: [11, 12, 12, 12, 17, 18, 17],
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
                  fontSize:'13',
                  fontWeight:'bold'
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'category',
              data:['工程渣土','广告审批','其他审批','犬只审批',]
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
                      { offset: 1, color: 'rgba(0,181,255,1)' }
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
              data: [7,13,19,60,]
            },
          ]
        },
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
        formData:{},
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
      getList(){
        generalApprove().then((res) => {
          this.pointList = [];
          const {count,gongcheng,guanggao,qita,quanzhi} = res.data;
          this.formData = {count,gongcheng,guanggao,qita,quanzhi};
          this.pointList = res.data.data;
          this.mapPoint(this.pointList);
        });
      },
      mapPoint(list){
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
        let icon03 = new T.Icon({
          iconUrl: point03,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let icon04 = new T.Icon({
          iconUrl: point04,
          iconSize: new T.Point(30, 51),
          iconAnchor: new T.Point(34, 59)
        });
        let markers = []

        for (let i = 0; i < list.length; i++) {
          // var marker
          console.log(list[i].type)
          let point = new T.LngLat(list[i].log,list[i].lat);
          if(list[i].type == '犬只审批'){
            markers[i]  = drawTMaker(point, icon02,this,list[i]);
          }else if(list[i].type == '广告审批'){
            markers[i]  = drawTMaker(point, icon01,this,list[i]);
          }else if(list[i].type == '工程渣土'){
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }else if(list[i].type == '其他审批'){

            markers[i]  = drawTMaker(point, icon04,this,list[i]);
          }

        }

        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          console.log('获取')
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            console.log(m)
            let infoWin1 = new T.InfoWindow();

            // 办件编号、申请人/单位、电话、地址、申请日期、办结日期、办理结果、权力名称、所属类型
            let sContent =
              '<div class="point_info">' +
              '<p class="f14 time">办件编号：' + txt.number_no + '</p>' +
              '<p class="f14 time">申请人/单位：' + txt.statutory_people + '</p>' +
              '<p class="f14 time">电话：' + txt.phone + '</p>' +
              '<p class="f14 time">地址：' + txt.address + '</p>' +
              '<p class="f14 time">申请日期：' + txt.apply_date + '</p>' +
              '<p class="f14 time">办结日期：' + txt.end_date + '</p>' +
              '<p class="f14 time">办理结果：' + txt.result + '</p>' +
              '<p class="f14 time">权力名称：' + txt.apply_name + '</p>' +
              '<p class="f14 time">所属类型：' + txt.type + '</p>' +
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
  @import '@/styles/variables.scss';

  /deep/.tdt-infowindow-content-wrapper{
    width: 400px;
    background: url("./../../assets/image/pop_bg.png") left top no-repeat;
    background-size: 100% 100%;
  }
  .approval_num{
    height: 60px;
    background: url("./../../assets/image/approvalTitle_bg.png") center bottom no-repeat;
  }
  .circle_num{
    width: 21vh;
    height: 15vh;
    margin: 0 auto 10vh;
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
        right: 196px;
      }
      &:nth-child(3){
        top: 11vh;
        right: 196px;
      }
      &:nth-child(4){
        top: 1.6vh;
        left: 196px;
      }
      &:nth-child(5){
        top: 11vh;
        left: 196px;
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
</style>
