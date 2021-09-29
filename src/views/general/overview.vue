<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <el-row :gutter="10" class="flex flex_stretch">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="content_index">
            <div class="title_index f18 bold text-center"><span class="txt_linear">数字城管</span></div>
            <div class="flex anjian_num clr_white mt_20">
              <div class="flex-item">
                <p class="f16 bold txtColor">周上报量</p>
                <div class="num flex text-center f26 bold mt_10">
                  <span>{{formData.city.shangbao[4]}}</span>
                  <span>{{formData.city.shangbao[3]}}</span>
                  <span>{{formData.city.shangbao[2]}}</span>
                  <span>{{formData.city.shangbao[1]}}</span>
                  <span>{{formData.city.shangbao[0]}}</span>
                </div>
              </div>
              <div class="flex-item">
                <p class="f16 bold txtColor">周处理量</p>
                <div class="num flex text-center f26 bold mt_10">
                  <span>{{formData.city.chuli[4]}}</span>
                  <span>{{formData.city.chuli[3]}}</span>
                  <span>{{formData.city.chuli[2]}}</span>
                  <span>{{formData.city.chuli[1]}}</span>
                  <span>{{formData.city.chuli[0]}}</span>
                </div>
              </div>
              <div class="flex-item">
                <p class="f16 bold txtColor">周未处理量</p>
                <div class="num flex text-center f26 bold mt_10">
                  <span>{{formData.city.undisposed[4]}}</span>
                  <span>{{formData.city.undisposed[3]}}</span>
                  <span>{{formData.city.undisposed[2]}}</span>
                  <span>{{formData.city.undisposed[1]}}</span>
                  <span>{{formData.city.undisposed[0]}}</span>
                </div>
              </div>
            </div>
            <div class="weui-cell cityAdmin_cell mt_20">
              <div class="weui-cell__hd text-center">
                <p class="clr_white">周黄灯件</p>
                <p class="f26 clr_yellow bold mb_20 mt_10">{{formData.city.yellow_num}}</p>
              </div>
              <div class="weui-cell__bd">
                <div class="weui-cell">
                  <div class="weui-cell__hd text-center"><span class="block adminTxt_linear">黄灯件</span></div>
                  <div class="weui-cell__bd clr_white f14">
                    <p>{{formData.city.yellow_detail}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="weui-cell cityAdmin_cell mt_20">
              <div class="weui-cell__hd text-center">
                <p class="clr_white">周红灯件</p>
                <p class="f26 clr_red bold mb_20 mt_10">{{formData.city.red_num}}</p>
              </div>
              <div class="weui-cell__bd">
                <div class="weui-cell">
                  <div class="weui-cell__hd text-center"><span class="block adminTxt_linear">红灯件</span></div>
                  <div class="weui-cell__bd clr_white f14">
                    <p>{{formData.city.red_detail}}</p>
                  </div>
                </div>
              </div>
            </div>
<!--            <div class="flex cityAdmin_num text-center">-->
<!--&lt;!&ndash;              <el-col :span="12">&ndash;&gt;-->
<!--&lt;!&ndash;                &lt;!&ndash;                <RingChart :chartData="chartData" :PieChartLegend="PieChartLegend" height="200px"></RingChart>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                <PieChartTwo :chartData="chartData" :PieChartLegend="PieChartLegend" height="20vh" :divwidth="'100%'"></PieChartTwo>&ndash;&gt;-->
<!--&lt;!&ndash;              </el-col>&ndash;&gt;-->
<!--&lt;!&ndash;              <el-col :span="12">&ndash;&gt;-->
<!--&lt;!&ndash;                &lt;!&ndash;                <RingChart :chartData="chartData" :PieChartLegend="PieChartLegend" height="200px"></RingChart>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                <PieChartTwo :chartData="chartDataTwo" :PieChartLegend="PieChartLegend" height="20vh" :divwidth="'100%'"></PieChartTwo>&ndash;&gt;-->
<!--&lt;!&ndash;              </el-col>&ndash;&gt;-->
<!--              <div class="flex-item">-->
<!--                <p class="txtColor">累计未处理件</p>-->
<!--                <p class="f26 clr_white bold mb_20 mt_20">363</p>-->
<!--              </div>-->
<!--              <div class="flex-item">-->
<!--                <p class="txtColor">今日黄灯件</p>-->
<!--                <p class="f26 clr_white bold mb_20 mt_20">5</p>-->
<!--              </div>-->
<!--              <div class="flex-item">-->
<!--                <p class="txtColor">今日红灯件</p>-->
<!--                <p class="f26 clr_white bold mb_20 mt_20">0</p>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex city_num clr_white text-center">-->
<!--              <div class="flex-item f16 bold">行走杭州</div>-->
<!--              <div class="flex-item">-->
<!--                <p class="f26 clr_yellow bold">79.97</p>-->
<!--                <p class="mt_5 clr_yellow">总得分</p>-->
<!--              </div>-->
<!--              <div class="flex-item">-->
<!--                <p class="f26 bold">1.04%</p>-->
<!--                <p class="mt_5">环比下降</p>-->
<!--              </div>-->
<!--              <div class="flex-item">-->
<!--                <p class="f26 bold">第4名</p>-->
<!--                <p class="mt_5">全市排名</p>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </el-col>
        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
          <div class="content_index">
            <div class="title_index f18 bold text-center"><span class="txt_linear">执法办案</span></div>
            <div class="flex mt_10" style=" align-items: stretch;">
              <ul class="f16 clr_white bold anjian_cegory">
                <li class="flex">
                  <span class="block f26 text-center">{{formData.case.count}}</span>
                  <p>今日上报案件</p>
                </li>
                <li class="flex mt_10">
                  <span class="block f26 text-center">{{formData.case.chuli}}</span>
                  <p>今日受理案件</p>
                </li>
                <li class="flex mt_10">
                  <span class="block f26 text-center">{{formData.case.end}}</span>
                  <p>今日结案案件</p>
                </li>
              </ul>
              <div class="map_echart text-center">
                <p class="f20 txtColor bold">今日案件热力图</p>
                <!--                             <RingChart :chartData="mapData" :PieChartLegend="PieChartLegend" height="13vh"></RingChart>-->
                <!--<div id='mapDiv' class="mapDiv" style="width: 250px;height: 300px;"></div>-->
                <img src="./../../assets/image/map.png" class="my_map"/>
              </div>
              <div class="anjian_genzong bold">
                <p class="txtColor text-center bold f18">案件实时跟踪</p>
                <div class="weui-cells clr_white">

                  <vueSeamlessScroll :data="formData.case.list" class="seamless-warp text-center" :class-option="classOption">
                    <div class="weui-cell" v-for="item in formData.case.list">
                      <div class="weui-cell__hd flex">
                        <span :class="['tag f12',item.source==1?'bg_purple':'bg_blue02']">{{item.source == '1'?'问题登记':'AI上报'}}</span>
                        <img class="anjian_img" :src="item.images_arr?item.images_arr[0]:''"/>
                      </div>
                      <div class="weui-cell__bd">
                        <p class="f14">{{item.big_category_name}}</p>
                        <p class="f12">{{item.small_category_name}}</p>
                      </div>
                      <div class="weui-cell__ft f12">
                        <p><span class="ml_10">{{item.wz_status}}</span></p>
                        <p>{{$moment(Number(item.create_at)*1000).format("YYYY-MM-DD HH:mm:ss")}}</p>
                      </div>
                    </div>
                  </vueSeamlessScroll>


                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="mt_10 flex flex_stretch">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="content_index">
            <div class="title_index f18 bold text-center"><span class="txt_linear">信访投诉</span></div>
<!--            <div class="flex bold text-center mt_20" style="margin-top: 30px">-->
<!--              <div class="flex-item">-->
<!--                <p class="clr_white">今日投诉量</p>-->
<!--                <p class="clr_blue03 f26 complain_num mt_10">868</p>-->
<!--              </div>-->
<!--              <div class="flex-item">-->
<!--                <p class="clr_white">今日重复投诉量</p>-->
<!--                <p class="clr_blue03 f26 complain_num mt_10">23</p>-->
<!--              </div>-->
<!--              <div class="flex-item">-->
<!--                <p class="clr_white">今日结案量</p>-->
<!--                <p class="clr_blue03 f26 complain_num mt_10">756</p>-->
<!--              </div>-->
<!--              <div class="flex-item">-->
<!--                <PieChartTwo :chartData="PieDataOne" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="'100%'"></PieChartTwo>-->
<!--              </div>-->
<!--            </div>-->
            <p class="f16 baseColor bold text-center mt_10">{{formData.letter.input_time}}受理件<span class="f20">{{formData.letter.month_deal_num}}</span></p>
            <div class="flex bold text-center clr_white mt_10 mb_10 bg_blue03" style="padding: 10px 0; border-radius: 10px;">
              <div class="flex-item">
                <p class="f26">{{formData.letter.basis_num}}%</p>
                <p class="mt_5">同比<span>{{formData.letter.basis_direction == 1?'上升':'下降'}}</span></p>
              </div>
              <div class="flex-item">
                <p class="f26">{{formData.letter.comparative_num}}%</p>
                <p class="mt_5">环比<span>{{formData.letter.comparative_direction == 1?'上升':'下降'}}</span></p>
              </div>
              <div class="flex-item clr_yellow">
                <p class="f26">{{formData.letter.satisfaction_rate}}%</p>
                <p class="mt_5">满意率</p>
              </div>
            </div>
            <div class="weui-cell cityAdmin_cell mt_20">
              <div class="weui-cell__hd text-center">
                <p class="clr_white mb_20">重复投诉件</p>
                <p class="f26 clr_red bold mb_20 mt_10">{{formData.letter.rep_num}}</p>
              </div>
              <div class="weui-cell__bd">
                <div class="weui-cell">
                  <div class="weui-cell__hd text-center"><span class="block adminTxt_linear">重复投诉</span></div>
                  <div class="weui-cell__bd clr_white f14">
                    <p>{{formData.letter.rep_detail}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="content_index">
            <div class="title_index f18 bold text-center"><span class="txt_linear">行政审批</span></div>
            <div class="clr_white mt_20">
              <div class="f20 bold text-center baseColor approval_num">周审批总量：{{formData.check.count}}</div>

              <div class="circle_num text-center">
                <img src="./../../assets/image/approval_circle.png" class="circle_img">
                <div class="circle_num_item">
                  <span class="clr_white f20 bold circleNum_left_bg block">{{formData.check.quanzhi}}/{{((Number(formData.check.quanzhi)/Number(formData.check.count))*100).toFixed(2)}}%</span>
                  <p class="clr_yellow bold">犬只审批</p>
                </div>
                <div class="circle_num_item">
                  <span class="clr_white f20 bold circleNum_left_bg block">{{formData.check.gongcheng}}/{{((Number(formData.check.gongcheng)/Number(formData.check.count))*100).toFixed(2)}}%</span>
                  <p class="clr_yellow bold">工程渣土</p>
                </div>
                <div class="circle_num_item">
                  <span class="clr_white f20 bold circleNum_right_bg block">{{formData.check.guanggao}}/{{((Number(formData.check.guanggao)/Number(formData.check.count))*100).toFixed(2)}}%</span>
                  <p class="clr_yellow bold">广告审批</p>
                </div>
                <div class="circle_num_item">
                  <span class="clr_white f20 bold circleNum_right_bg block">{{formData.check.qita}}/{{((Number(formData.check.qita)/Number(formData.check.count))*100).toFixed(2)}}%</span>
                  <p class="clr_yellow bold">其他审批</p>
                </div>
              </div>

            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="content_index">
            <div class="title_index f18 bold text-center"><span class="txt_linear">服务视图</span></div>
            <div class="clr_white f14 bold">
<!--              <div class="flex">-->
<!--                <div class="flex-item text-center">-->
<!--                  <div class="flex">-->
<!--                    <div class="flex-item">-->
<!--                      <p>清扫完成</p>-->
<!--                      <div class="clean_rate clr_blue03 f20">95.6%</div>-->
<!--                    </div>-->
<!--                    <div class="flex-item">-->
<!--                      <p>洒水完成</p>-->
<!--                      <div class="clean_rate clr_blue03 f20">95.6%</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex-item">-->
<!--                  <div class="weui-cell server_cell">-->
<!--                    <div class="weui-cell__hd">   <PieChartTwo :chartData="PieDataTwo" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="'100%'"></PieChartTwo></div>-->
<!--                    <div class="weui-cell__bd">-->
<!--                      <p>占用厕位<span class="clr_blue03 ml_10">18961</span></p>-->
<!--                      <p>总厕位数<span class="clr_blue03 ml_10">19651</span></p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <p class="text-center chart_width">厕位占用率</p>-->
<!--                </div>-->

<!--              </div>-->
              <div class="flex" style="margin-top: 40px;">
                <div class="flex-item" style="padding-left: 20px;">
                  <div class="weui-cell server_cell">
                    <div class="weui-cell__hd"><PieChartTwo :chartData="PieDataThree" :PieChartLegend="PieChartLegend" height="12vh" :divwidth="'100%'"></PieChartTwo></div>
                    <div class="weui-cell__bd">
                      <p>亮灯数<span class="clr_yellow ml_10">{{formData.light.num}}</span></p>
                      <p>总灯数<span class="clr_yellow ml_10">{{formData.light.count}}</span></p>
                    </div>
                  </div>
                  <p class="text-center chart_width ml_10">亮灯率</p>
                </div>
                <div class="flex-item">
                  <div class="weui-cell server_cell">
                    <div class="weui-cell__hd">
                      <!--                    <RingChart :chartData="PieDataOne" :PieChartLegend="PieChartLegend" height="10vh"></RingChart>-->
                      <PieChartTwo :chartData="PieDataTwo" :PieChartLegend="PieChartLegend" height="12vh" :divwidth="'100%'"></PieChartTwo>
                      <!--                 <PieChartTwo :chartData="PieData3" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="'100%'"></PieChartTwo>-->
                    </div>
                    <div class="weui-cell__bd">
                      <p>占用泊位<span class="clr_blue03 ml_10">18961</span></p>
                      <p>总泊位数<span class="clr_blue03 ml_10">20566</span></p>
                    </div>
                  </div>
                  <p class="text-center chart_width">泊位占用率</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import "echarts/lib/component/polar"
  // import "echarts/chart/map"
  import PieChart from '@/components/Charts/PieChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import RingChart from '@/components/Charts/RingChart'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import xinjiang from "echarts/map/js/province/xinjiang";//必须要导入
  import {generalIndex,generalCaseCount} from '@/api/overView'
  import {generalApprove} from "@/api/recordApproval";
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    name: 'Dashboard',
    components: {
      PieChart,
      BarChartThree,
      RingChart,
      PieChartTwo,
      vueSeamlessScroll
    },
    data() {
      return {
        formData:{},
        approveData:{},
        mapData:{

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
                  // color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  //   offset: 0,
                  //   color: '#EB4B4B'
                  // }, {
                  //   offset: 1,
                  //   color: '#F47F7F'
                  // }]),
                  color:'rgba(78,239,254,1)'
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
        PieChartLegend:[],
        PieDataThree:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '20',
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
              data: [],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(252,209,82,1)'
                  }, {
                    offset: 1,
                    // color: 'red'
                    color: 'rgba(248,211,91,1)'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{//里面细圈
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(252,209,82,1)'],
              // center: ['30%', '50%'],
              radius: ['74%', '72%'],
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
              data: ['59'],
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
              fontSize: '20',
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
                    color: 'rgba(41,154,237,1)'
                  }, {
                    offset: 1,
                    color: 'rgba(57,252,255,1)'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{
              name: 'decorationOne',
              type: 'pie',
              color: ['rgba(62,109,176,1)'],
              // center: ['30%', '50%'],
              radius: ['74%', '72%'],
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
            top: '34%',
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
              color: ['red'],
              radius: ['80%', '88%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
              },
              data: [
                { value: 80, name: '优良' },
              ]
            },{
              name: '单位工程评定',
              type: 'pie',
              radius: ['80%', '88%'],
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
              radius: ['70%', '69%'],
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
        PieData2:{
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          color: ['rgba(253,210,90,1)', '#20437A'],
          gird:{
            top:0,
            left:0,

          },
          // 80%是环中的数据显示
          title: {
            text: '80%',
            left: 'center',
            top: '34%',
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
              radius: ['80%', '88%'],
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
              color: ['rgba(253,210,90,1)'],
              // center: ['30%', '50%'],
              radius: ['70%', '69%'],
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
            radius: ['65%', '80%'],
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
            radius: ['65%', '80%'],
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
        zoom:12,
        centerLatitude:'30.20835',//中心纬度
        centerLongitude:'120.21194',//中心经度
      }
    },
    computed: {
      classOption () {
        return {
          step: 0.2, // 数值越大速度滚动越快
          limitMoveNum: this.formData.case.list.length, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      }
    },
    mounted(){
      // this.mapChart();
      // this.onLoad();
      this.getData();
      // this.getApprove();
    },
    methods: {
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        // this.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';

        let that = this;
        let wmsLayer;
        function getWMS(url, config) {
          if (wmsLayer) {
            that.map.removeLayer(wmsLayer);
          }
          wmsLayer = new T.TileLayer.WMS(url, config);
          that.map.addLayer(wmsLayer);
        }

        function addWmsLayer(layers, url) {
          let config = {
            version: "1.1.1",	//请求服务的版本
            layers: layers,
            transparent: true,	//输出图像背景是否透明
            styles: "",			//每个请求图层的用","分隔的描述样式
            format: "image/png"	//输出图像的类型
          };
          getWMS(url, config);
        }

        addWmsLayer('demo_city,demo_road,demo_anno','http://gisserver.tianditu.com/tiandituService/wms')

      },
      mapChart(){
        var cityMap = {
          "杭州市": "330100"
        };
        var placeList = [
          {name:'西湖区', geoCoord:[120.13, 30.27],count:10},
          {name:'上城区', geoCoord:[120.17, 30.25],count:12},
          {name:'下城区', geoCoord:[120.17, 30.28],count:14},
          {name:'江干区', geoCoord:[120.20, 30.27],count:66},
          {name:'拱墅区', geoCoord:[120.13, 30.32],count:34},
          {name:'滨江区', geoCoord:[120.20, 30.20],count:88},
          {name:'萧山区', geoCoord:[120.27, 30.17],count:3422},
          {name:'余杭区', geoCoord:[120.30, 30.42],count:423},
          {name:'桐庐县', geoCoord:[119.67, 29.80],count:3},
          {name:'淳安县', geoCoord:[119.03, 29.60],count:44},
          {name:'建德市', geoCoord:[119.28, 29.48],count:3},
          {name:'富阳市', geoCoord:[119.95, 30.05],count:2},
          {name:'临安市', geoCoord:[119.72, 30.23],count:1}
        ];
        console.log('地图')
        let option = {
          tooltip : {
            trigger: 'item',
            formatter: '{b}'
          },

          series : [
            {
              name: '杭州市地图',
              type: 'map',
              mapType: '杭州市',
              roam:true,
              itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
              },
              data:[],
              markPoint : {
                symbol:'Circle',
                symbolSize: 0.3,
                large: true,
                effect : {
                  show: true
                },
                itemStyle:{
                  normal:{color:"#FF3300"}
                },
                data : (function(){
                  var data = [];
                  for(var j=0;j<placeList.length;j++){

                    var len = placeList[j].count;
                    var x = parseInt(4*Math.random())%4;
                    var geoCoord = placeList[j].geoCoord;
                    while(len--) {
                      if(x==0){
                        data.push({
                          name : placeList[j].name + len,
                          value : 2000,
                          geoCoord : [
                            geoCoord[0] + Math.random()*0.05,
                            geoCoord[1] + Math.random()*0.05
                          ]
                        })
                      }
                      if(x==1){
                        data.push({
                          name : placeList[j].name + len,
                          value : 2000,
                          geoCoord : [
                            geoCoord[0] + Math.random()*0.05,
                            geoCoord[1] - Math.random()*0.05
                          ]
                        })
                      }
                      if(x==2){
                        data.push({
                          name : placeList[j].name + len,
                          value : 2000,
                          geoCoord : [
                            geoCoord[0] - Math.random()*0.05,
                            geoCoord[1] - Math.random()*0.05
                          ]
                        })
                      }
                      if(x==3){
                        data.push({
                          name : placeList[j].name + len,
                          value : 2000,
                          geoCoord : [
                            geoCoord[0] + Math.random()*0.05,
                            geoCoord[1] - Math.random()*0.05
                          ]
                        })
                      }
                    }
                  }

                  return data;
                })()
              }
            }
          ],
          backgroundColor: '#fffff'
        };
        var curIndx = 0;
        var mapType = [];
        // var mapGeoData = require('echarts/util/mapData/params');
        //
        // for (var city in cityMap) {
        //   mapType.push(city);
        //   // 自定义扩展图表类型
        //   mapGeoData.params[city] = {
        //     getGeoJson: (function (c) {
        //       var geoJsonName = cityMap[c];
        //       return function (callback) {
        //         $.getJSON('${rc.contextPath}/common/plugs/echart/js/' + geoJsonName + '.json', callback);
        //       }
        //     })(city)
        //   }
        // }

        // var ecConfig = require('echarts/config');
        // var zrEvent = require('zrender/tool/event');

        this.mapData =  option
        console.log( this.mapData)
      },

      getData(){
        generalIndex().then((res) => {
          this.formData=res.data;
          this.PieDataThree.series[0].data = [((Number(res.data.light.num)/Number(res.data.light.count))*100).toFixed(2)];
          this.formData.city.shangbao = this.formData.city.shangbao.toString().split('').map(Number).reverse();
          this.formData.city.chuli = this.formData.city.chuli.toString().split('').map(Number).reverse();
          this.formData.city.undisposed = this.formData.city.undisposed.toString().split('').map(Number).reverse();;
          // this.formData.city.undisposed = '1234'.toString().split('').map(Number).reverse();
          this.PieDataThree.title[0].text = ((Number(res.data.light.num)/Number(res.data.light.count))*100).toFixed(2)+'%';
        });
      },

      // getApprove(){
      //   generalCaseCount().then((res) => {
      //     this.approveData = res.data;
      //   });
      // },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  .seamless-warp{
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .content_index{
    width: 100%;
    height: 100%;
    padding: 0 20px 20px !important;
    background: rgba(6,12,42,1);
    box-shadow: #0f39a0 0 0 18px inset;
  }
  .cityAdmin_num{
    margin: 4vh 0;
    .flex-item{
      background: url("./../../assets/image/index-num_bg04.png") center center no-repeat;
      &:nth-child(2){
        margin: 0 5%;
      }
    }
  }
  .cityAdmin_cell{
    padding: 0;
    &>.weui-cell__hd{
      width: 120px;
      /*height: 66px;*/
      background: url("./../../assets/image/index-num_bg04.png") center center no-repeat;
      background-size: 100% auto;
      margin-right: 5px;
    }
    .weui-cell{
      padding: 0;
      align-items: stretch;
      background: rgb(8,27,60);
      border-radius: 10px;
      p{
        line-height: 2;
      }
      .weui-cell__hd{
        width: 45px;
        padding: 5px 15px;
        background-color: rgb(13,37,81);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-right: 10px;
      }
    }
    .adminTxt_linear{
      background-image:-webkit-linear-gradient(bottom,#69CFF4,#fff);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
  }
  .server_cell{
    .weui-cell__bd{
      p{
        line-height: 2;
      }
    }
  }
  .chart_width{
   width: 100px;
  }
  .my_map{
   width: 60%;
  }
  .anjian_num{
    .num{
      justify-content: flex-start;
      span{
        width: 25px;
        height: 33px;
        line-height: 33px;
        margin-right: 3px;
        background: url("./../../assets/image/index-num-bg.png") left top no-repeat;
      }
    }

  }
  .clean_rate{
    height: 10vh;
    line-height: 10vh;
    background: url("./../../assets/image/index-range-bg.png") center center no-repeat;
  }
  .title_index{
    height: 36px;
    line-height: 36px;
    background: url("./../../assets/image/index-title-bg.png") center top no-repeat;
    /*background-image:-webkit-linear-gradient(bottom,#69CFF4,#fff);*/
    /*-webkit-background-clip:text;*/
    /*-webkit-text-fill-color:transparent;*/
  }
  .city_num{
    width: 100%;

    background: #061A3B;
    border-radius: 10px;


    & > div{
      &:nth-child(1){
        /*width: 1em;*/
        flex: 0.1;
        padding: 0 10px 0 20px;
        background-image:-webkit-linear-gradient(bottom,#69CFF4,#fff);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        /*background: #0A264D;*/
      }
      &:nth-child(2){
        padding: 20px 0;
      }
    }
  }
  .anjian_cegory{
    width: 210px;
    li{
      height: 106px;
      line-height: 106px;
      background: url("./../../assets/image/index-num-bg02.png") left top no-repeat;
      span{
        width: 100px;
      }
      p{
        width: 100px;
        margin-left: 10px;
      }
    }
  }
  .map_echart{
    width: 40%;
  }
  .anjian_genzong{
    width: 40%;
    .anjian_img{
      width: 50px;
      height: 50px;
      border-radius: 10px;
      margin-right: 10px;
    }
    .tag{
      width: 20px;
      padding: 5px;
      margin-right: 5px;
      line-height: 1;
      border-radius: 10px;
    }
  }
  .approval_num{
    height: 60px;
    background: url("./../../assets/image/approvalTitle_bg.png") center bottom no-repeat;
  }
  .circle_num{
    width: 21vh;
    height: 16vh;
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
  .complain_num{
    height: 6vh;
    background: url("./../../assets/image/index-num-bg03.png") center bottom no-repeat;
  }
  /*.dashboard-editor-container {*/
  /*  height: calc(100vh - 100px);*/
  /*  padding: 10px 30px;*/
  /*  !*background-color: rgb(240, 242, 245);*!*/
  /*  width: 90%;*/
  /*  margin: 0 auto;*/
  /*  background: url("./../../../assets/image/index.jpg") no-repeat;*/
  /*  background-size: 100%;*/
  /*  background-position: center;*/
  /*  position: relative;*/
  /*  !*img{*!*/
  /*  !*  width: 100%;*!*/
  /*  !*  height: 100%;*!*/
  /*  !*}*!*/
  /*  .chart-wrapper {*/
  /*    background: #fff;*/
  /*    padding: 16px 16px 0;*/
  /*    margin-bottom: 32px;*/
  /*  }*/
  /*}*/


  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }


  .panel-group {
    margin-top: 18px;

    .card-panel-col {
      margin-bottom: 32px;
      padding-left: 10px !important;
      padding-right: 10px !important;
    }

    .card-panel {
      height: 125px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);

      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-people {
          background: #40c9c6;
        }

        .icon-message {
          background: #36a3f7;
        }

        .icon-money {
          background: #f4516c;
        }

        .icon-shopping {
          background: #34bfa3
        }
      }

      .icon-people {
        color: #40c9c6;
      }

      .icon-message {
        color: #36a3f7;
      }

      .icon-money {
        color: #f4516c;
      }

      .icon-shopping {
        color: #34bfa3
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .iconfont {
        float: left;
        font-size: 58px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width:550px) {
    .card-panel-description {
      display: none;
    }

    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;

      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }

</style>
