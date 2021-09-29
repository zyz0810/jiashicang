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
        <p class="f20 bold txt_linear">异常站点</p>
<!--        <div class="flex abnormal_tab bold f16 mt_20">-->
<!--          <div :class="['flex-item',abnormalIndex == 0?'clr_yellow txt_shadow':'']" @click="abnormalIndex = 0">水质告警：6</div>-->
<!--          <div :class="['flex-item','text-center',abnormalIndex == 1?'clr_yellow txt_shadow':'']" @click="abnormalIndex = 1">配水方案</div>-->
<!--          <div :class="['flex-item','text-right',abnormalIndex == 2?'clr_yellow txt_shadow':'']" @click="abnormalIndex = 2">内涝预测：0</div>-->
<!--        </div>-->
<!--        <img src="./../../assets/image/water_bg.png" class="mt_10"/>-->
        <!--<el-table v-loading="listLoading" :data="abnormalList" :height="280" stripe element-loading-text="拼命加载中" fit ref="tableList1" class="f14 mt_20">-->
          <!--<el-table-column label="站点名称" align="center" prop="stnm"></el-table-column>-->
          <!--<el-table-column label="站点类型" align="center" prop="type" :formatter="formatType"></el-table-column>-->
          <!--<el-table-column label="异常状态" align="center" prop="status"></el-table-column>-->
          <!--<el-table-column label="上传时间" align="center" prop="createTime"></el-table-column>-->

        <!--</el-table>-->

        <ul class="flex table_ul text-center">
          <li class="flex-item">站点名称</li>
          <li class="flex-item">站点类型</li>
          <li class="flex-item">异常状态</li>
          <li class="flex-item">上传时间</li>
        </ul>
        <vueSeamlessScroll :data="abnormalList" class="seamless-warp text-center" :class-option="classOption">
          <ul class="flex table_ul" v-for="item in abnormalList" :key="item.id">
            <li class="flex-item">{{item.stnm}}</li>
            <li class="flex-item">{{item.type | formatType}}</li>
            <li class="flex-item">{{item.status}}</li>
            <li class="flex-item">{{item.createTime}}</li>
          </ul>
        </vueSeamlessScroll>

<!--        <el-table v-loading="listLoading" :data="list" :height="280" stripe element-loading-text="拼命加载中" fit ref="tableList2" v-show="abnormalIndex == 1" class="f14 mt_20">-->
<!--          <el-table-column type="index" label="站点名称" width="50" align="center">-->
<!--            &lt;!&ndash;            <template slot-scope="scope">&ndash;&gt;-->
<!--            &lt;!&ndash;             <span class="block sqaer">{{index}}</span>&ndash;&gt;-->
<!--            &lt;!&ndash;            </template>&ndash;&gt;-->
<!--          </el-table-column>-->
<!--          <el-table-column label="方案名称" align="center" prop="name"></el-table-column>-->
<!--          <el-table-column label="配水量" align="center" prop="name2"></el-table-column>-->
<!--          <el-table-column label="排水量" align="center" prop="end"></el-table-column>-->

<!--        </el-table>-->
<!--        <el-table v-loading="listLoading" :data="list" :height="280" stripe element-loading-text="拼命加载中" fit ref="tableList3" v-show="abnormalIndex == 2" class="f14 mt_20">-->
<!--          <el-table-column type="index" label="序号" width="50" align="center">-->
<!--            &lt;!&ndash;            <template slot-scope="scope">&ndash;&gt;-->
<!--            &lt;!&ndash;             <span class="block sqaer">{{index}}</span>&ndash;&gt;-->
<!--            &lt;!&ndash;            </template>&ndash;&gt;-->
<!--          </el-table-column>-->
<!--          <el-table-column label="内涝预测" align="center" prop="name"></el-table-column>-->
<!--          <el-table-column label="配水量" align="center" prop="name2"></el-table-column>-->
<!--          <el-table-column label="排水量" align="center" prop="end"></el-table-column>-->

<!--        </el-table>-->
<!--     -->
      </div>

    </div>
    <div class="right_content clr_white base_bg_right">
      <div class="clr_white">
        <p class="f20 bold txt_linear">水质检测概况</p>
        <PieChartTwo :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="25vh" divwidth="100%"></PieChartTwo>
      </div>
      <div class="mt_20">
        <p class="f20 bold txt_linear mb_20">告警站点</p>
        <!--<el-table v-loading="listLoading" :data="warnList" :height="280" stripe element-loading-text="拼命加载中" fit ref="tableList1" class="f14 mt_20">-->
          <!--<el-table-column label="站点名称" align="center" prop="stnm"></el-table-column>-->
          <!--<el-table-column label="站点类型" align="center" prop="type" :formatter="formatType"></el-table-column>-->
          <!--<el-table-column label="告警级别" align="center" prop="alarmLevel" :formatter="formatLevel"></el-table-column>-->
          <!--<el-table-column label="告警时间" align="center" prop="alarmTime"></el-table-column>-->
        <!--</el-table>-->

        <ul class="flex table_ul text-center">
          <li class="flex-item">站点名称</li>
          <li class="flex-item">站点类型</li>
          <li class="flex-item">告警级别</li>
          <li class="flex-item">告警时间</li>
        </ul>
        <vueSeamlessScroll :data="warnList" class="seamless-warp text-center" :class-option="classOption">
          <ul class="flex table_ul" v-for="item in warnList" :key="item.id">
            <li class="flex-item">{{item.stnm}}</li>
            <li class="flex-item">{{item.type | formatType}}</li>
            <li class="flex-item">{{item.alarmLevel | formatLevel}}</li>
            <li class="flex-item">{{item.alarmTime}}</li>
          </ul>
        </vueSeamlessScroll>

      </div>

    </div>
    <div class="top_div flex clr_white text-center">
      <div class="flex f16 bold mr_20 border shadow" style="width: 400px;">
        <div class="flex-item txt_linear">设备管理</div>
        <div class="flex-item">
          总览
          <span class="txt_linear">66</span>
        </div>
        <div class="flex-item">
          离线
          <span class="txt_linear">4</span>
        </div>
        <div class="flex-item">
          故障
          <span class="txt_linear">4</span>
        </div>

      </div>
      <div class="flex f16 border shadow" style="position: relative;" @click="showOption == 0?showOption=1:showOption=0">
        设备点位
        <div style="position: absolute;top: 35px;left: 0;width: 100%; line-height: 30px;" class="clr_white border shadow" v-if="showOption==1">
          <p :class="showType == 2 ? 'baseColor':''" @click="handleTypeLight(2)">河道水质</p>
          <p :class="showType == 3 ? 'baseColor':''" @click="handleTypeLight(3)">河道水量</p>
          <p :class="showType == 0 ? 'baseColor':''" @click="handleTypeLight(0)">河道水位</p>
          <p :class="showType == 4 ? 'baseColor':''" @click="handleTypeLight(4)">视频点位</p>
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
  import point01 from '@/assets/image/point19.png'
  import point02 from "@/assets/image/point20.png";
  import point03 from "@/assets/image/point21.png";
  import point04 from "@/assets/image/point22.png";
  import {findSite,abnormalSite,warnSite} from "@/api/water"; // 引入刚才的map.js 注意路径
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo,vueSeamlessScroll},
    data() {
      return {
        showOption:0,
        showType:1,
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
          name:'202012…',
          name2:'850000',
          end:'5000'
        },{
          name:'2020121…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211…',
          name2:'850000',
          end:'5000'
        },{
          name:'20201211…',
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
                {value: 6.3, name: 'Ⅱ类水'},
                {value: 12.5, name: 'Ⅲ类水'},
                {value: 37.5, name: 'Ⅳ类水'},
                {value: 43.7, name: '不达标'},
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
        PieChartLegend:[{name:'Ⅰ类水',color:'#20BB76',val:0},{name:'Ⅱ类水',color:'#247DF5',val:6.3}, {name:'Ⅲ类水',color:'#24D0F4',val:12.5},
          {name:'Ⅳ类水',color:'#13F3F5',val:37.5},{name:'不达标',color:'#FA6C24',val:43.7}],
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
        waterList:[],
        warnList:[],
        abnormalList:[],
      }
    },

    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
      classOption () {
        return {
          step: 0.2, // 数值越大速度滚动越快
          limitMoveNum: this.warnList.length, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      }
    },
    mounted() {
      // 挂载完成后渲染地图
      // this.$nextTick(function() {
      //
      // })
      this.onLoad();
      this.getList(2);
      this.getAbnormal(3);
      this.getWarn(2);
    },
    methods: {
      formatType(row, column, cellValue, index) {
        return cellValue == 0
          ? "河道水位"
            : cellValue == 2
              ? "河道水质"
              : cellValue == 3
                ? "河道流量"
                : cellValue == 4
                  ? "AI监控"
                  : cellValue == 5
                    ? "非AI监控"
                  : cellValue == 6
                    ? "雨水管网液位"
                    : cellValue == 7
                      ? "雨水管网水质"
                    : "--";
      },
      formatLevel(row, column, cellValue, index) {
        return cellValue == 0
          ? "一般"
          : cellValue == 1
            ? "严重"
                      : "--";
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
        console.log('点位')
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

        console.log(list)
        for (let i = 0; i < list.length; i++) {
          // var marker
          // 0：关  1：开
          if(type == 2){
            let point = new T.LngLat(list[i].lgtd,list[i].lttd);
            markers[i]  = drawTMaker(point, icon01,this,list[i]);
          }else if(type == 3){
            let point = new T.LngLat(list[i].lgtd,list[i].lttd);
            markers[i]  = drawTMaker(point, icon02,this,list[i]);
          }else if(type == 0){
            let point = new T.LngLat(list[i].lgtd,list[i].lttd);
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }else if(type == 4){
            let point = new T.LngLat(list[i].lgtd,list[i].lttd);
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

      },
      handleTypeLight(val){
        this.showType = val
        this.getList(val);
      },
      getAbnormal(type){
        abnormalSite({type:type}).then((res) => {
          this.abnormalList = res.data.exceptionStations;
        });
      },
      getWarn(type){
        warnSite({type:type}).then((res) => {
          this.warnList = res.data;
        });
      },
      getList(type){
        findSite({type:type}).then((res) => {
          this.waterList = res.data;
          this.mapPoint(type,this.waterList)
        });
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  .seamless-warp{
    width: 100%;
    height: 300px;
    overflow: hidden;
    .table_ul{
      &:nth-child(2n+1){
        background-color: #12374b !important;
        border-radius: 10px;
      }
    }
  }
  .table_ul{
    padding: 5px;
    line-height: 1.6;
  }
  /deep/.tdt-infowindow-content-wrapper{
    width: auto;
    color: #fff;
    background: #0a1f44;
  }
  .progress_cont{
    border: 1px solid rgb(15,50,53) !important;
  }
  /deep/.tdt-infowindow-tip{
    background: #0a1f44 !important;
  }
  .top_div{
    width: 50%;
    left: 20%;
  }
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
