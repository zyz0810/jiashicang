<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>

    <div class="left_rate bold clr_white text-center">
      <div class="clean_rate">
        <!--<p class="f20">95.6%</p>-->
        <!--<shui-qiu-chart :chartData="ShuiDataOne" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></shui-qiu-chart>-->
        <GaugeChart :chartData="gaugeOne" :PieChartLegend="PieChartLegend" height="15vh" ></GaugeChart>
      </div>
      <p class="mb_10">清扫完成</p>
      <div class="watering_rate">
        <div>
          <!--<p class="f20">95.6%</p>-->
          <GaugeChart :chartData="gaugeOne" :PieChartLegend="PieChartLegend" height="15vh" ></GaugeChart>
        </div>
      </div>
      <p class="mb_10">洒水完成</p>
      <ul class="f16 clr_white bold text-center mt_20 link_intro">
        <li>
          <p>0次</p>
          <span class="block color_bg01"></span>
        </li>
        <li>
          <p>1次</p>
          <span class="block color_bg02"></span>
        </li>
        <li>
          <p>2次</p>
          <span class="block color_bg03"></span>
        </li>
        <li>
          <p>3次</p>
          <span class="block color_bg04"></span>
        </li>
        <li>
          <p>4次</p>
          <span class="block color_bg05"></span>
        </li>
        <li>
          <p>5次</p>
          <span class="block color_bg06"></span>
        </li>
        <li>
          <p>完成</p>
          <span class="block color_bg07"></span>
        </li>
      </ul>
    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="top clr_white ">
        <p class="f20 bold txt_linear">
          清扫完成率
        </p>
        <el-row :gutter="10" class="mt_20">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex">
            <PieChartTwo :chartData="PieDataOne" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>一类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex">
            <PieChartTwo :chartData="PieDataTwo" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>二类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </el-col>
          <div class="flex" style="width:50%;margin: -50px auto 0;">
            <PieChartTwo :chartData="PieDataThree" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>
            <div style="width: 250px; margin-left: 10px" class="f16 bold">
              <p>三类道路</p>
              <p class="mt_10">30条</p>
            </div>
          </div>
        </el-row>


      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">作业里程</p>
        <BarChartFive :chartData="BarData" height="150px" divwidth="100%"></BarChartFive>
      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear">实际作业车辆</p>
        <BarChartFive :chartData="BarDataTwo" height="150px" divwidth="100%"></BarChartFive>
      </div>

    </div>
    <div class="top_div flex clr_white text-center f16 bold">
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          总车辆
          <span class="txt_linear">{{carData.total}}</span>
        </div>
      </div>
      <div class="flex border shadow">
        <div class="flex-item">
          在线车辆
          <span class="txt_linear">{{carData.onlineNum}}</span>
        </div>
      </div>

    </div>
    <div class="center_content clr_white text-center">
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point40.png"/></div>
        <div class="weui-cell__bd">洒水车</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point41.png"/></div>
        <div class="weui-cell__bd">清扫车</div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import RingChart from '@/components/Charts/RingChart'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import GaugeChart from '@/components/Charts/GaugeChart'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import ShuiQiuChart from '@/components/Charts/ShuiQiuChart'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import {cleancarList,cleanCarAddressList,lastGPS,carHistory,getGps,cleanCarNum} from '@/api/garbageLink'
  import point01 from "@/assets/image/point40.png";
  import point02 from "@/assets/image/point41.png";

  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo,ShuiQiuChart,GaugeChart},
    data() {
      return {
        carData:{},
        cleanCarList:[],
        divwidth:'30%',
        pieHeight:'300px',
        ShuiDataOne:{
          // x轴
          xAxis: {
            show: false, // 不显示
          },
          // y轴
          yAxis: {
            show: false, // 不显示
          },
          grid: {
            top: '2.5%',
              right: '40',
              bottom: '2.5%',
              left: 0,
          },
          series: [{
            type: 'liquidFill',
            radius: '96%', // 半径大小
            center: ['50%', '50%'], // 布局位置
            data: [20], // 水球波纹值
            color: ['#36A989'],//设置颜色系列
            label: {
              normal: {
                // color: '#FC7272',
                color: '#36A989',
                textStyle: {
                  fontSize: 18
                },
                formatter: (params) => { //console.log(params)
                  let newValue = params.value * 100;
                  return newValue.toFixed(2) + '%\n联网车位数\n'
                }
              }
            },
            outline: { // 轮廓设置
              show: true,
              borderDistance: 2, // 轮廓间距
              itemStyle: {
                // borderColor: '#294D99', // 轮廓颜色
                borderColor: '#36A989', // 轮廓颜色
                borderWidth: 4, // 轮廓大小
                shadowBlur: 'none', // 轮廓阴影
              }
            },
          }
          ]
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
          tooltip: {
            trigger:"axis",
            formatter:"{b1}：{c1}%"
          },
          grid: {
            left: '0',
            right: '80',
            bottom: '20',
            top: '20',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            show:false,
            axisTick: {
              alignWithLabel: false
            },
            splitLine: { show: false },//去除网格线
          },
          color:['rgba(21,25,60,1)',new echarts.graphic.LinearGradient(0, 0, 1, 0,
            [
              { offset: 0, color: 'rgba(15,234,192,1)' },
              { offset: 1, color: 'rgba(131,188,237,1)' }
            ]
          )],
          yAxis: {
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
            data: ["清扫作业","洒水作业",]
          },
          series: [{
            name: '',
            type: 'bar',
            barWidth: 20,//柱图宽度
            z:"-1",
            barGap: '-100%',
            data: [100, 100,]
          },
            {
              name: '增长率',
              type: 'bar',
              barWidth: 20,//柱图宽度

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
                    formatter: '{c}/180',
                    textStyle : {
                      color: '#fff',
                      fontSize:'16',
                      fontWeight:'bold'
                    }
                  }

                }
              },

              data: [5, 100, ]
            }]
        },
        BarDataTwo:{
          tooltip: {
            trigger:"axis",
            formatter:"{b1}：{c1}%"
          },
          grid: {
            left: '0',
            right: '80',
            bottom: '20',
            top: '20',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            show:false,
            axisTick: {
              alignWithLabel: false
            },
            splitLine: { show: false },//去除网格线
          },
          color:['#15193F',new echarts.graphic.LinearGradient(0, 0, 1, 0,
            [
              { offset: 0, color: '#2975FF' },
              { offset: 1, color: '#81BAFF' }
            ]
          )],
          yAxis: {
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
            data: ["清扫作业","洒水作业",]
          },
          series: [{
            name: '',
            type: 'bar',
            barWidth: 20,//柱图宽度
            z:"-1",
            barGap: '-100%',
            data: [100, 100,]
          },
            {
              name: '增长率',
              type: 'bar',
              barWidth: 20,//柱图宽度
              label: {
                show : true,
                position : 'right',
                formatter: '{c}/180',
                textStyle : {
                  color: '#fff',
                  fontSize:'16',
                  fontWeight:'bold'
                }
              },
              data: [5, 20, ]
            }]
        },
        gaugeOne:{
          series: [
            {
              name: "压力值",
              type: "gauge",
              clockwise: true,
              detail: {
                formatter: 20,
                textStyle: {
                  fontSize: 20,
                },
              },
              axisTick:{
                length :5,
              },
              data: [{ value: 20, name: "压力值" }],
              radius: "80%",
              axisLabel: {// 刻度标签。
                show: true,
                distance: -5,
                color: "black",
                fontSize: 10,
                formatter: "{value}",
              },
              axisLine: {// 仪表盘轴线(轮廓线)相关配置。
                show: true,
                lineStyle: {// 仪表盘轴线样式。
                  opacity: 1,
                  width: 10,
                  shadowBlur: 10,
                },
              },
              pointer: { // 仪表盘指针。
                show: true,
                length: "70%",
                width: 4,
              },
            },
          ]
        },
        PieDataOne:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '75%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '26',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['95%', '80%'],
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
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgb(17,197,187)'
                  }, {
                    offset: 1,
                    color: 'rgb(10,195,118)'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(62,109,176,1)'],
              // center: ['30%', '50%'],
              radius: ['70%', '68%'],
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
        PieDataTwo:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '75%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '26',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['95%', '80%'],
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
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgb(15,242,246)'
                  }, {
                    offset: 1,
                    color: 'rgb(53,214,250)'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(62,109,176,1)'],
              // center: ['30%', '50%'],
              radius: ['70%', '68%'],
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
        PieDataThree:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '75%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '26',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['95%', '80%'],
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
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgb(0,172,255)'
                  }, {
                    offset: 1,
                    color: 'rgb(2,109,250)'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(62,109,176,1)'],
              // center: ['30%', '50%'],
              radius: ['70%', '68%'],
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
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
        timerOne:'',
        timerTwo:'',
        line:'',
      }
    },

    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
    },
    mounted() {
      // 挂载完成后渲染地图
      this.$nextTick(function() {
        this.onLoad();
        this.getList();
      });
      this.getChart();
      this.getNum();
      window.handleTrail = this.handleTrail;
    },
    beforeDestroy() {
      clearInterval(this.timerOne);
      this.timerOne = null;
      clearInterval(this.timerTwo);
      this.timerTwo = null;
    },
    methods: {
      getNum(){
        cleanCarNum().then((res) => {
          const {offlineNum,onlineNum} = res.data;
          let total = Number(offlineNum) + Number(onlineNum);
          this.carData={offlineNum,onlineNum,total}
        });
      },
      getChart(){
        let i = 1;
        let that = this;
        this.timerOne = setInterval(function () {
          if(i==1){
            that.PieDataOne.series[0].data = [75];
            that.PieDataTwo.series[0].data = [75];
            that.PieDataThree.series[0].data = [75];
            i = 2;
          }else{
            that.PieDataOne.series[0].data = [0];
            that.PieDataTwo.series[0].data = [0];
            that.PieDataThree.series[0].data = [0];
            i = 1;
          }
        }, 1500);

        this.timerTwo = setInterval(function () {
          const random= +(Math.random() * 60).toFixed(2);
          that.gaugeOne.series[0].data = [          {
            value: random
          }]

        }, 1500);
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
      mapPoint(list){
        //创建图片对象
        this.map.clearOverLays();
        let icon01 = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(30, 52),
          iconAnchor: new T.Point(34, 59)
        });
        let icon02 = new T.Icon({
          iconUrl: point02,
          iconSize: new T.Point(30, 52),
          iconAnchor: new T.Point(34, 59)
        });
        let markers = [];
        for (let i = 0; i < list.length; i++) {
          // var marker
          // if(list[i].status == 1){
          //   let point = new T.LngLat(list[i].longitude,list[i].latitude1);
          //   markers[i]  = drawTMaker(point, icon01,this,list[i]);
          // }else if(list[i].status == 0){
          //   let point = new T.LngLat(list[i].longitude,list[i].longitude1);
          //   markers[i]  = drawTMaker(point, icon02,this,list[i]);
          // }

          let point = new T.LngLat(list[i].PACK.longitude1,list[i].PACK.latitude1);
          markers[i]  = drawTMaker(point, icon01,this,list[i]);
        }
        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            // carHistory({card_no:txt.Vehicle,start:that.$moment().format('YYYY-MM-DD'),end:that.$moment().format('YYYY-MM-DD')}).then((res) => {
            // });


            let infoWin1 = new T.InfoWindow();
            let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
            let sContent =
              '<div class="point_info">' +
              '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
              '<tr>' +
              '<td class="txt_6">车牌号</td><td>' + txt.Vehicle + '</td>' +
              '</tr>'+
              '<tr>' +
              '<td>车型</td><td>' + '（没接口）' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>品牌类型</td><td>' + '（没接口）' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>车辆类型</td><td>' + '（没接口）' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>地址</td><td>' + txt.Address + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td></td><td class="text-right baseColor" onClick="handleTrail(' + aa +')">查看轨迹</td>'+
              '</tr>'+
              '</table>'+
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }

      },
      //查看轨迹
      handleTrail(txt){
        if(this.line != ''){
          this.map.removeOverLay(this.line);
        }
        getGps({card_no:txt.Vehicle}).then((res) => {
          let points = res.data.map(item=>{
            let json = new T.LngLat(item.longitude1, item.latitude1)
            return json;
          });
          console.log(points)
          //创建线对象
          this.line = new T.Polyline(points,{color:'#00fd71',weight:10,opacity:1});
          //向地图上添加线
          this.map.addOverLay(this.line);
        });
      },
      getList(){
        cleanCarAddressList({type:'allList'}).then((res) => {
          this.cleanCarList = res.data;
          let card_no = res.data.map(item=> {return item.CarBrand}).join(',');
          lastGPS({card_no:card_no}).then((res) => {
            this.mapPoint(res.data)
          });
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
  .left_rate{
    position: fixed;
    top: 10vh;
    left: 20px;
    z-index: 99999999;
    .clean_rate{
      width: 15vh;
      /*height: 50vh;*/
      /*background: url("./../../assets/image/cleanRate_bg.png") center center no-repeat;*/
      /*background-size: 100% 100%;*/
    }
    .watering_rate{
      width: 15vh;
      /*height: 15vh;*/
      /*background: url("./../../assets/image/wateringRate_bg.png") center center no-repeat;*/
      /*background-size: 100% 100%;*/
    }
    .link_intro{
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
        background: #bb1f02;
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
  }

</style>
