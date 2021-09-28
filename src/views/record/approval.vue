<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white base_bg_left ">

        <div class="txt_linear f18 bold">备案审批概况</div>
        <div class="mt_20 clr_white">
          <div class="f20 bold text-center approval_num txt_shadow">审核总数：{{formData.count}}</div>

          <div class="circle_num text-center">
            <img src="./../../assets/image/approval_circle.png" class="circle_img">
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_left_bg block">{{formData.quanzhi}}/{{((Number(formData.quanzhi)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">犬只审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_left_bg block">{{formData.gongcheng}}/{{((Number(formData.gongcheng)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">工程车审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_right_bg block">{{formData.guanggao}}/{{((Number(formData.guanggao)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">广告审批</p>
            </div>
            <div class="circle_num_item">
              <span class="clr_white f20 bold circleNum_right_bg block">{{formData.qita}}/{{((Number(formData.qita)/Number(formData.count))*100).toFixed(2)}}%</span>
              <p class="clr_yellow bold">其他审批</p>
            </div>
          </div>

        </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">审批类型数量排名（top6）</p>
        <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="300px" divwidth="100%"></BarChartFour>
      </div>

    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="top clr_white">
        <p class="f20 bold txt_linear mb_20">审批走势（一周）</p>
        <LineChart :chartData="lineData" :BarChartLegend="PieChartLegend" height="25vh" divwidth="100%"></LineChart>
      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear mb_20">审批详情</p>
        <el-table v-loading="listLoading" :data="list" :height="300"  stripe element-loading-text="拼命加载中" fit ref="tableList" class="f14">
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
        <img src="./../../assets/image/point05.png"/>
        <div>广告审批</div>
      </div>
      <!--<div class="map_intro f14 bold flex baseColor">-->
        <!--<img src="./../../assets/image/point05.png"/>-->
        <!--<div>工程车审批</div>-->
      <!--</div>-->
      <!--<div class="map_intro f14 bold flex baseColor">-->
        <!--<img src="./../../assets/image/point06.png"/>-->
        <!--<div>犬只审批</div>-->
      <!--</div>-->
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
  import point01 from '@/assets/image/point04.png' // 引入刚才的map.js 注意路径
  import point02 from '@/assets/image/point05.png' // 引入刚才的map.js 注意路径
  import point03 from '@/assets/image/point06.png' // 引入刚才的map.js 注意路径
  import {generalApprove} from '@/api/recordApproval'
  import {cleanCarAddressList, lastGPS} from "@/api/garbageLink";
  import {cos} from "@/utils/translate";
  import point04 from "@/assets/image/point22.png";

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
            data: ['5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19']
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
              data: [123,156,230,301,320, 332,]
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
      this.getData();
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
      getData(){
        this.getList().then(val => {
          console.log('dierbu222')
          console.log(val)
          this.mapPoint(val);
        });
      },
      getList(){
        return new Promise((resolve, reject) => {
          //你的逻辑代码
          let pointList2 = [];
          generalApprove().then((res) => {
            this.pointList = [];
            const {count,gongcheng,guanggao,qita,quanzhi} = res.data;
            this.formData = {count,gongcheng,guanggao,qita,quanzhi};
            // let pointList = res.data.data.filter((item,index)=>{
            //   let that = this;
            //   let lat;
            //   let lng;
            //   axios({
            //     url:"http://api.tianditu.gov.cn/geocoder",
            //     method:'get',
            //     params:{
            //       tk:"09c212e85ea968b8789e2111963c819a",
            //       ds:{"keyWord":item.address}
            //     }
            //   }).then((data)=>{
            //     if(data.data.location.lat && data.data.location.lon){
            //       // if(index == 0){
            //         item.lat = data.data.location.lat
            //         item.lon = data.data.location.lon
            //         // that.$set(item,'lat',data.data.location.lat);
            //         // that.$set(item,'lon',data.data.location.lon);
            //         that.pointList.push(item);
            //         return item;
            //       // }
            //       // lat =  data.data.location.lat
            //       // lng = data.data.location.lon
            //       // item.lat = data.data.location.lat
            //       // item.lon = data.data.location.lon
            //       // return item;
            //     }
            //
            //   }).catch((err) => {
            //     console.log(err)
            //     // alert("获取失败");
            //   })
            //
            //
            // })


            this.pointList = res.data.data.filter((item,index)=>{
              if(item.address != ''){
                axios({
                  url:"http://api.tianditu.gov.cn/geocoder",
                  method:'get',
                  params:{
                    tk:"09c212e85ea968b8789e2111963c819a",
                    ds:{"keyWord":item.address}
                  }
                }).then((data)=>{
                  // item.lat = data.data.location.lat;
                  // item.lon = data.data.location.lon;

                  // console.log(location)
                  // debugger
                  let lat;
                  let lon;
                  if(data.data.msg == 'ok'){
                    // console.log(data.data.location)
                    if(data.data.location){
                      console.log('11111111')
                      lat = data.data.location.lat;
                      lon = data.data.location.lon;
                      this.$set(item,'lon1',lon);
                      this.$set(item,'lat',lat);
                      pointList2.push(item)
                      return item
                    }
                  }else{
                    console.log('cuowu'+index)
                    console.log(data)
                    console.log(item)
                  }

                  // return item
                }).catch((err) => {
                  console.log(err)
                  // alert("获取失败");
                })
              }

            });

          });
          console.log('dierbu111')
          resolve(pointList2)
        });

      },
      mapPoint(list){
        return new Promise((resolve, reject) => {
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

        console.log('点位点位点位点位')
        console.log(list.length)
        for (let i = 0; i < list.length; i++) {
          // var marker
          // 0：关  1：开
          console.log('犬只审批100000'+list[i].lon,list[i].lat)
          console.log(list[i].type)
          let point = new T.LngLat(list[i].lon,list[i].lat);
          if(list[i].type == '犬只审批'){
            console.log('犬只审批1'+list[i].lon,list[i].lat)
            markers[i]  = drawTMaker(point, icon01,this,list[i]);
          }else if(list[i].type == '广告审批'){
            console.log('犬只审批2')
            markers[i]  = drawTMaker(point, icon02,this,list[i]);
          }else if(list[i].type == '工程车审批'){
            console.log('犬只审批3')
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }else if(list[i].type == '其它审批'){
            console.log('犬只审批4')
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
            console.log(txt)
            let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
            let type ;
            if(txt.type == 2){
              type = '河道水质'
            }else if(txt.type == 3){
              type = '河道水量'
            }else if(txt.type == 0){
              type = '河道水位'
            }else if(txt.type == 4){
              type = '视频点位'
            }
            let sContent =
              '<div class="point_info">' +
              '<p class="f12 time">站点名称：' + txt.stnm + '</p>' +
              '<p class="f12 time">站点类型：' + type + '</p>' +
              '<p class="f12 time">地址：' + txt.address + '</p>' +
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }
          resolve()
        });
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
