<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_content clr_white base_bg_left ">

        <div class="txt_linear f20 bold">备案审批概况（周）</div>
        <div class="mt_20 clr_white">
<!--          <div class="f18 bold text-center approval_num txt_shadow">审批总数：{{formData.count}}</div>-->
<!--          <div class="circle_num text-center">-->
<!--            <img src="./../../assets/image/approval_circle.png" class="circle_img">-->
<!--            <div class="circle_num_item">-->
<!--              <span class="clr_white f18 bold circleNum_left_bg block">{{formData.quanzhi}}/{{((Number(formData.quanzhi)/Number(formData.count))*100).toFixed(2)}}%</span>-->
<!--              <p class="clr_yellow bold">犬只审批</p>-->
<!--            </div>-->
<!--            <div class="circle_num_item">-->
<!--              <span class="clr_white f18 bold circleNum_left_bg block">{{formData.gongcheng}}/{{((Number(formData.gongcheng)/Number(formData.count))*100).toFixed(2)}}%</span>-->
<!--              <p class="clr_yellow bold">工程渣土</p>-->
<!--            </div>-->
<!--            <div class="circle_num_item">-->
<!--              <span class="clr_white f18 bold circleNum_right_bg block">{{formData.guanggao}}/{{((Number(formData.guanggao)/Number(formData.count))*100).toFixed(2)}}%</span>-->
<!--              <p class="clr_yellow bold">广告审批</p>-->
<!--            </div>-->
<!--            <div class="circle_num_item">-->
<!--              <span class="clr_white f18 bold circleNum_right_bg block">{{formData.qita}}/{{((Number(formData.qita)/Number(formData.count))*100).toFixed(2)}}%</span>-->
<!--              <p class="clr_yellow bold">其他审批</p>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div>-->
            <PieChartTwo :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="25vh" divwidth="100%"></PieChartTwo>
<!--          </div>-->

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
<!--        <el-table v-loading="listLoading" :data="list" :height="300"  stripe element-loading-text="拼命加载中" fit ref="tableList" class="f14">-->
<!--          <el-table-column type="index" label="序号" width="80" align="center" class="ellipsisOne"></el-table-column>-->
<!--          <el-table-column label="申请人/单位" align="center" prop="name" class="ellipsisOne"></el-table-column>-->
<!--          <el-table-column label="权力名称" align="center" prop="name" class="ellipsisOne"></el-table-column>-->
<!--          <el-table-column label="办理结果" align="center" prop="end" class="ellipsisOne"></el-table-column>-->

<!--        </el-table>-->
        <ul class="flex table_ul text-center">
          <li style="width: 50px;">序号</li>
          <li class="flex-item">申请人/单位</li>
          <li class="flex-item">权力名称</li>
          <li style="width: 80px;">办理结果</li>
        </ul>
        <vueSeamlessScroll :data="list" class="seamless-warp text-center" :class-option="classOption">
          <ul class="flex table_ul" v-for="(item,index) in list" :key="item.id">
            <li style="width: 50px;">{{index+1}}</li>
            <li class="flex-item ellipsisOne">{{item.statutory_people}}</li>
            <li class="flex-item ellipsisOne">{{item.apply_name}}</li>
            <li style="width: 80px;" class="ellipsisOne">{{item.result}}</li>
          </ul>
          <div style="margin-bottom: 300px;"></div>
        </vueSeamlessScroll>
      </div>
    </div>
    <div class="center_content clr_white text-center" v-if="mapPageType == 1">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==1?'active':'']" @click="handlePointType(1,type)">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=1" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==1?'clr_white':'']">全部审批</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==2?'active':'']" @click="handlePointType(2,'广告审批')">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=2" src="./../../assets/image/point25.png"/>
          <img v-else src="./../../assets/image/point25_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==2?'clr_white':'']">广告审批</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==3?'active':'']" @click="handlePointType(3,'犬只审批')">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=3" src="./../../assets/image/point26.png"/>
          <img v-else src="./../../assets/image/point26_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==3?'clr_white':'']">犬只审批</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==4?'active':'']" @click="handlePointType(4,'工程渣土')">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=4" src="./../../assets/image/point27.png"/>
          <img v-else src="./../../assets/image/point27_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==4?'clr_white':'']">工程渣土</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==5?'active':'']" @click="handlePointType(5,'其他审批')">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=5" src="./../../assets/image/point28.png"/>
          <img v-else src="./../../assets/image/point28_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==5?'clr_white':'']">其他审批</div>
      </div>
      <!--<p class="text-right baseColor f16 bold mt_20">说明</p>-->
    </div>
    <div class="top_div flex clr_white text-center f16 bold">
      <div class="flex f20 bold mr_20 border shadow" @click="showMapType(1)">
        <div class="baseColor">备案审批</div>
        <div class="">
          广告审批
          <span class="txt_linear f22">{{formData.guanggao}}</span>
        </div>
        <div class="">
          犬只审批
          <span class="txt_linear f22">{{formData.quanzi}}</span>
        </div>
        <div class="">
          工程渣土
          <span class="txt_linear f22">{{formData.gongcheng}}</span>
        </div>
        <div class="">
          其他审批
          <span class="txt_linear f22">{{formData.qita}}</span>
        </div>
      </div>
      <div class="flex f20 bold border shadow" @click="showMapType(2)">
        <div class="baseColor">视频</div>
        <div class="">
          普通视频
          <span class="txt_linear f22">{{commonVideo_num}}</span>
        </div>
      </div>





<!--      <div class="flex border shadow mr_20">-->
<!--        <div class="flex-item">-->
<!--          广告审批-->
<!--          <span class="txt_linear">{{formData.guanggao}}</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex border shadow mr_20">-->
<!--        <div class="flex-item">-->
<!--          犬只审批-->
<!--          <span class="txt_linear">{{formData.quanzi}}</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex border shadow mr_20">-->
<!--        <div class="flex-item">-->
<!--          工程渣土-->
<!--          <span class="txt_linear">{{formData.gongcheng}}</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex border shadow">-->
<!--        <div class="flex-item">-->
<!--          其他审批-->
<!--          <span class="txt_linear">{{formData.qita}}</span>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div v-show="showVideoDialog" class="dashboard-video-player-box">
      <div id="dashboardVideoPlayer" class="dashboard-video-player">
        <!--<video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" controls data-setup="{}">-->
        <!--<source id="source" src="rtsp://10.32.54.38:554/openUrl/ePBOw6I" autoplay type="rtsp/flv">-->
        <!--</video>-->
      </div>
    </div>
  </div>
</template>

<script>
  import wgs84_to_gcj02 from "@/utils/gcj02towgs84";
  import global from '@/utils/common'
  import axios from 'axios'
  import echarts from 'echarts'
  import RingChart from '@/components/Charts/RingChart'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import LineChart from '@/components/Charts/LineChart'
  import waves from '@/directive/waves'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point25.png' // 引入刚才的map.js 注意路径
  import point02 from '@/assets/image/point26.png' // 引入刚才的map.js 注意路径
  import point03 from '@/assets/image/point27.png' // 引入刚才的map.js 注意路径
  import point04 from '@/assets/image/point28.png' // 引入刚才的map.js 注意路径
  import point05 from '@/assets/image/point38.png' // 普通视频图标
  import {generalApprove,checkIndex,checkWeek,checkAnalyse,listCheck} from '@/api/recordApproval'
  import {cleanCarAddressList, lastGPS} from "@/api/garbageLink";
  import {cos} from "@/utils/translate";
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import {getAllVideoPoint, getNowurl} from "@/api/system";
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,LineChart,PieChartTwo,vueSeamlessScroll},
    data() {
      return {
        showType:1,
        timer:'',
        timerTwo:'',
        approvalData:{},
        listLoading:false,
        list:[],
        // chartDataThree: {
        //   title:{},
        //   tooltip: {
        //     trigger: 'item',
        //     formatter: '{b}: {c} <br/> {d}%'
        //   },
        //   legend: {
        //     show:false
        //   },
        //   color:['rgb(255,213,84)','rgb(48,171,241)','rgb(255,82,52)','rgb(146,117,243)'],
        //   series: [
        //     {
        //       name: '备案审批概况',
        //       type: 'pie',
        //       center: ['50%', '50%'],
        //       radius: ['40%', '55%'],
        //       avoidLabelOverlap: true,
        //       // label: {
        //       //   show: false,
        //       //   position: 'center',
        //       // },
        //
        //       emphasis: {
        //         label: {
        //           show: true,
        //           fontSize: '30',
        //           fontWeight: 'bold'
        //         }
        //       },
        //       // labelLine: {
        //       //   show: false
        //       // },
        //       markLine :{
        //         label  :{
        //           show:true,
        //           position :'outside'
        //         },
        //       },
        //       labelLine:{
        //         normal:{
        //           lineStyle: {
        //             color: '#fff'
        //           },
        //           length:10,
        //           length2 :25,
        //         }
        //       },
        //       label :{
        //         // formatter: [
        //         //   '{c}',
        //         //   '{b}',
        //         //   '{d}'
        //         // ].join('\n'),
        //         // formatter: '{b}{c}({d})%',
        //         formatter: '{b}：{c}',
        //         verticalAlign :'bottom',
        //         position:'outside',
        //         textShadowOffsetY :10,
        //         align :'right',
        //         color:'white',
        //         // height :60,
        //         // lineHeight:30,
        //         fontSize:'14',
        //         rich: {
        //           a: {
        //             verticalAlign:'bottom',
        //             // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        //           }
        //         }
        //       },
        //
        //       data: []
        //     }
        //   ]
        // },
        chartDataThree: {
          legend: {show:false },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          color:['rgb(48,171,241)','rgb(146,117,243)','rgb(255,81,52)','rgb(255,213,84)'],
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [20, 100],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              label :{
                formatter: '{b}：{c}',
                verticalAlign :'bottom',
                position:'outside',
                textShadowOffsetY :10,
                align :'right',
                // color:'white',
                // height :60,
                // lineHeight:30,
                fontSize:'14',
                rich: {
                  a: {
                    verticalAlign:'bottom',
                    // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
                  }
                }
              },
              animationDuration:30000,
              animationDurationUpdate: function (idx) {
                // 越往后的数据时长越大
                return idx * 500;
              },
              data: []
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
            top: '30',
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
            data: []
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
            // symbol: 'none',
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'#F3E981'
                },
                label : {show: true, color:'#F3E981'}
              }
            },
            animationDuration:30000,
            data: [],
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
                },
                //设置文本过长超出隐藏...表示
                margin: 8,
                formatter:function(params){
                  var val="";
                  if(params.length >6){
                    val = params.substr(0,6)+'...';
                    return val;
                  }else{
                    return params;
                  }
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'category',
              data:[]
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
              animationDuration:3000,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [
                      { offset: 0, color: 'rgba(0,239,252,0)' },
                      { offset: 1, color: 'rgba(0,239,252,1)' }
                    ]
                  ),
                  label: {
                    // formatter:'{b}{c}',
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
              data: []
            },
          ]
        },
        map: '', // 对象
        formData:{},
        pointList:[],
        mapPageType:1,
        commonVideo_num:'',
        showVideoDialog:false,
        playVideoUri:'',
        player: null,
        offectNum:1,
      }
    },

    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
      classOption () {
        return {
          step: 0.2, // 数值越大速度滚动越快
          limitMoveNum: this.list.length, // 开始无缝滚动的数据量 this.dataList.length
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
      // this.getList();
      this.getVideoNum();
      this.getPoint('');
      this.getLineChart();
      this.getBarChart();
      this.getListData();
      this.getPieData('');//获取顶部及饼图数据
      window.handleVideo = this.handleVideo;
      window.closeVideoDialog = this.handleVideoClose;
      this.initPlayer()


    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
      clearInterval(this.timerTwo);
      this.timerTwo = null;
    },
    methods: {
      //播放视频
      handleVideo(txt){
        this.getNow(txt);
      },
      getNow(txt){
        getNowurl({camera_index_code:txt.index_code,protocol:'hls'}).then(res=>{
          this.showVideoDialog = true;
          this.playVideo(res.data.data.url,txt);
        });
      },

      handleVideoClose(id) {
        // this.player.dispose()
        $('#myVideo'+id).remove()
        $('#myVideoContent'+id).remove()
        if($('#dashboardVideoPlayer').children().length < 1){
          this.player.dispose()
          $('#dashboardVideoPlayer').html('')
          this.player = null
          this.showVideoDialog = false
          this.playVideoUri = ''
        }
        // $('#dashboardVideoPlayer').html('')
        // this.player = null
        // this.showVideoDialog = false
        // this.playVideoUri = ''
      },
      initPlayer() {
        this.$nextTick(() => {
          document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) {
              this.handleCloseKeyDown(e) // 事件名
            }
          })
        })
      },
      handleCloseKeyDown(e) {
        if (this.dialogVisible && e.keyCode === 27) {
          this.player.dispose()
          // $('#myVideo').remove()
          // $('#dashboardVideoPlayer').html('')
          $('#myVideo'+id).remove()
          $('#myVideoContent'+id).remove()

          if($('#dashboardVideoPlayer').children().length < 1){
            this.player.dispose()
            $('#dashboardVideoPlayer').html('')
            this.player = null
            this.showVideoDialog = false
            this.playVideoUri = ''
          }
          // this.player = null
          // this.showVideoDialog = false
          // this.playVideoUri = ''
        }
      },
      playVideo(uri,txt) {

        // let videoPlayer = $("#myVideo").get(0);
        // if (typeof (videoPlayer) != "undefined") {
        //   let myPlayer = videojs('myVideo');
        //   myPlayer.dispose();
        // }

        this.playVideoUri = uri;
        // this.dialogVisible = true
        let id = "myVideo"+txt.id;
        let divId = "myVideoContent"+txt.id;

        $('#dashboardVideoPlayer').append(
          `<div id="`+ divId +`" style="position: fixed;width: 450px;height: 300px; padding-top: 20px;left:`+ Number(20)*this.offectNum +`px;top:`+ Number(20)*this.offectNum +`px;" class="my_drag">
              <i class="el-icon-error"
                 onclick="closeVideoDialog(`+ txt.id +`)"
                 style="position: absolute;
                 right: 10px;
                 top: 10px;
                 z-index: 999;
                 color: #fff;
                 cursor: pointer;
                 font-size: 28px;
              "></i>
              <video id="`+ id +`" class="video-js vjs-default-skin vjs-big-play-centered" style="width: 100%; height: 100%;" data-setup="{}">
     <source id="source" src="${this.playVideoUri}" type="application/x-mpegURL">
            </video></div>`
        )
        this.offectNum++;
        $('#'+divId).mousedown(function (e) {
          let dragBox =  $('#'+divId)[0];
          //算出鼠标相对元素的位置
          let disX = e.clientX - dragBox.offsetLeft;
          let disY = e.clientY - dragBox.offsetTop;
          document.onmousemove = e => {
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;
            //移动当前元素
            dragBox.style.left = left + "px";
            dragBox.style.top = top + "px";
          };
          document.onmouseup = e => {
            //鼠标弹起来的时候不再移动
            document.onmousemove = null;
            //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
            document.onmouseup = null;
          };
        })
        window.setTimeout(() => {
          this.player = videojs(id, {
            muted: true,
            controls: true,
            preload: 'auto',
          })
          // <source id="source" src="${this.playVideoUri}" type="video/mp4">
          // <source id="source" src="${this.playVideoUri}" type="rtsp/flv">
          //   <source id="source" src="${this.playVideoUri}" type="application/x-mpegURL">
          // <!--rtsp://10.32.54.38:554/openUrl/ePBOw6I-->
          this.player.play()
        }, 1000)




        /* this.player.src({
          src: this.videos[0].url,
          type: 'application/x-mpegURL',
          withCredentials: false
        })*/

        // this.player.play()
      },

      //点击顶部备案审批、视频
      showMapType(val){
        this.mapPageType = val;
        if(val == 1){
          this.map.clearOverLays();
          this.getPoint();
        }else{
          this.map.clearOverLays();
          this.getPoint();
          this.getVideo();
        }
      },
      //普通视频数量
      getVideoNum(){
        getAllVideoPoint({class:4}).then((res) => {
          this.commonVideo_num = res.data.putong;
        });
      },
      //普通视频点位
      getVideo(){
        getAllVideoPoint({class:4}).then((res) => {
          this.commonVideo_num = res.data.putong;
          this.pointList = res.data.list;
          this.mapPoint('video',this.pointList);
        });
      },
      //不同类型点位
      handlePointType(val,type){
        this.map.clearOverLays();
        this.showType = val;
        this.getPoint(type);
      },
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(global.latlog.centerLongitude, global.latlog.centerLatitude), global.latlog.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        this.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';

      },
      // getList(){
      //   generalApprove().then((res) => {
      //     // this.pointList = [];
      //     const {count,gongcheng,guanggao,qita,quanzhi} = res.data;
      //     this.formData = {count,gongcheng,guanggao,qita,quanzhi};
      //     // 犬只审批、工程渣土、广告审批、其他审批
      //     // this.chartDataThree.series[0].data = [{
      //     //   name:'犬只审批',value:res.data.quanzhi
      //     // },{
      //     //   name:'工程渣土',value:res.data.gongcheng
      //     // },{
      //     //   name:'广告审批',value:res.data.guanggao
      //     // },{
      //     //   name:'其他审批',value:res.data.qita
      //     // }];
      //     let i = 1;
      //     console.log('2222222222dianjidainji')
      //     setInterval(function () {
      //       console.log('1111dianjidainji')
      //       if(i==1){
      //         this.chartDataThree.color=['rgb(255,213,84)','rgb(48,171,241)','rgb(249,138,127)','rgb(146,117,243)'];
      //         this.chartDataThree.series[0].data = [{
      //           name:'犬只审批',value:res.data.quanzhi
      //         },{
      //           name:'工程渣土',value:res.data.gongcheng
      //         },{
      //           name:'广告审批',value:res.data.guanggao
      //         },{
      //           name:'其他审批',value:res.data.qita
      //         }];
      //         i = 2;
      //       }else{
      //         this.chartDataThree.color=['rgb(255,213,84)','rgb(48,171,241)','rgb(249,138,127)','rgb(146,117,243)'];
      //         this.chartDataThree.series[0].data = [];
      //         i = 1;
      //       }
      //
      //     }, 2000);
      //   });
      // },
      getLineChart(){
        checkWeek().then((res) => {
          let x = res.data.map(item=>{return item.apply_date});
          let y = res.data.map(item=>{return item.apply_date_count});
          this.lineData.xAxis.data = x;
          this.lineData.series[0].data = y;
        });
      },
      getBarChart(){
        checkAnalyse().then((res) => {
          let arr = res.data;
          arr.sort((old,New)=>{
            return old.apply_name_count -New.apply_name_count
          })

          let x = arr.map(item=>{return item.apply_name});
          let y = arr.map(item=>{return item.apply_name_count});
          this.BarDataTwo.yAxis[0].data = x;
          this.BarDataTwo.series[0].data = y;
        });
      },
      getListData(){
        listCheck().then((res) => {
          this.list = res.data;
        });
      },
      getPieData(type){
        checkIndex({type:type}).then((res) => {
          const {count,gongcheng,guanggao,qita,quanzi} = res.data;
          this.formData = {count,gongcheng,guanggao,qita,quanzi};

          this.chartDataThree.color=['rgb(48,171,241)','rgb(146,117,243)','rgb(255,81,52)','rgb(255,213,84)'];
          this.chartDataThree.series[0].data = [{
            name:'工程渣土',value:res.data.gongcheng
          },{
            name:'其他审批',value:res.data.qita
          },{
            name:'广告审批',value:res.data.guanggao
          },{
            name:'犬只审批',value:res.data.quanzi
          }];

          let that = this;
          let i = 1;

          // this.timerTwo = setInterval(function () {

              this.timer = setInterval(function () {
                if(i == 1){
                  that.chartDataThree.color=['rgb(48,171,241)','rgb(146,117,243)','rgb(255,81,52)','rgb(255,213,84)'];
                  that.chartDataThree.series[0].data = [{
                    name:'工程渣土',value:res.data.gongcheng
                  },{
                    name:'其他审批',value:res.data.qita
                  },{
                    name:'广告审批',value:res.data.guanggao
                  },{
                    name:'犬只审批',value:res.data.quanzi
                  }];
                  i = 2;
                }else if(i==2){
                  that.chartDataThree.color=['rgb(255,213,84)','rgb(48,171,241)','rgb(146,117,243)','rgb(255,81,52)',];
                  that.chartDataThree.series[0].data = [{
                    name:'犬只审批',value:res.data.quanzi
                  },{
                    name:'工程渣土',value:res.data.gongcheng
                  },{
                    name:'其他审批',value:res.data.qita
                  },{
                    name:'广告审批',value:res.data.guanggao
                  },];
                  i = 3;
                }else if(i==3){
                  that.chartDataThree.color=['rgb(255,81,52)','rgb(255,213,84)','rgb(48,171,241)','rgb(146,117,243)',];
                  that.chartDataThree.series[0].data = [{
                    name:'广告审批',value:res.data.guanggao
                  },{
                    name:'犬只审批',value:res.data.quanzi
                  },{
                    name:'工程渣土',value:res.data.gongcheng
                  },{
                    name:'其他审批',value:res.data.qita
                  },];
                  i = 4;
                }else if(i==4){
                  that.chartDataThree.color=['rgb(146,117,243)','rgb(255,81,52)','rgb(255,213,84)','rgb(48,171,241)',];
                  that.chartDataThree.series[0].data = [{
                    name:'其他审批',value:res.data.qita
                  },{
                    name:'广告审批',value:res.data.guanggao
                  },{
                    name:'犬只审批',value:res.data.quanzi
                  },{
                    name:'工程渣土',value:res.data.gongcheng
                  },];
                  i = 1;
                }
              }, 2000);

          // },500);


        });
      },
      getPoint(type){
        checkIndex({type:type}).then((res) => {
          this.pointList = [];
          this.pointList = res.data.data;
          this.mapPoint('',this.pointList);
        });
      },
      mapPoint(type,list){
        let countries = [];
        let countriesOverlay = new T.D3Overlay(init,redraw);
        let that = this;
        d3.json("https://geo.datav.aliyun.com/areas_v3/bound/330108.json", function (data) {
          // countries = data.features;
          let a = data.features;
          let brr = a[0].geometry.coordinates[0][0].map(item=>{
            return wgs84_to_gcj02(item[0],item[1])
          })
          a[0].geometry.coordinates[0][0] = brr
          countries = a;
          that.map.addOverLay(countriesOverlay)
          countriesOverlay.bringToBack();
          countriesOverlay.bringToBack();
        });

        function init(sel, transform) {
          let upd = sel.selectAll('path.geojson').data(countries);
          upd.enter()
            .append('path')
            .attr("class", "geojson")
            .attr('stroke', '#0c14b8')
            .attr('stroke-width', function (d) {
              return 2
            })
            .attr('fill', function (d, i) {
              return d3.hsl(Math.random() * 360, 0.9, 0.5)
            })
            .attr('fill-opacity', '0')
        }
        function redraw(sel, transform) {
          sel.selectAll('path.geojson').each(
            function (d, i) {
              d3.select(this).attr('d', transform.pathFromGeojson)
                .on("mouseover",function(){

                })
            }
          )

        }
        //创建图片对象
        let icon01 = new T.Icon({
          iconUrl: point01,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon02 = new T.Icon({
          iconUrl: point02,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon03 = new T.Icon({
          iconUrl: point03,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon04 = new T.Icon({
          iconUrl: point04,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon05 = new T.Icon({
          iconUrl: point05,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let markers = []

        if(type == 'video'){
          for (let i = 0; i < list.length; i++) {
            let point = new T.LngLat(list[i].longitude,list[i].latitude);
            markers[i]  = drawTMaker(point, icon05,this,list[i]);
          }
        }else{
          for (let i = 0; i < list.length; i++) {
            // var marker
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
        }


        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            let infoWin1 = new T.InfoWindow();
            let sContent;
            if(type == 'video'){
              let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
              sContent =
                '<div class="point_info">' +
                '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
                '<tr>' +
                '<td class="txt_6">监控名称</td><td>' + txt.name + '</td>' +
                '</tr>'+
                '<tr>' +
                '<td>所属区域</td><td>' + txt.depart_name + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>来源区域</td><td>' + txt.community_name + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>所在地址</td><td>' + txt.install_place + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td></td><td class="text-right baseColor pointer" onClick="handleVideo('+ aa +')">查看视频</td>'+
                '</tr>'+
                '</table>'+
                '</div>';
            }else {
              // 办件编号、申请人/单位、电话、地址、申请日期、办结日期、办理结果、权力名称、所属类型
              sContent =
                '<div class="point_info">' +
                '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
                '<tr>' +
                '<td>权力名称</td><td>' + txt.apply_name + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>所属类型</td><td>' + txt.type + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td class="txt_6">办件编号</td><td>' + txt.number_no + '</td>' +
                '</tr>'+
                '<tr>' +
                '<td>申请人/单位</td><td>' + txt.statutory_people + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>电话</td><td>' +  txt.phone + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>地址</td><td>' + txt.address + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>申请日期</td><td>' + txt.apply_date + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>办结日期</td><td>' + txt.end_date + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>办理结果</td><td>' + txt.result + '</td>'+
                '</tr>'+
                '</table>'+
                '</div>';
            }
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
