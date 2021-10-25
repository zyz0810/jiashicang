<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="top_div flex clr_white text-center">
      <div class="flex f16 bold mr_20 border shadow" @click="handleMapType(1)">
        <div class="baseColor">执法力量</div>
        <div class="">
          执法人员
          <span class="txt_linear">35</span>
        </div>
        <div class="">
          执法车辆
          <span class="txt_linear">16</span>
        </div>

      </div>
      <div class="flex f16 bold border shadow" @click="handleMapType(2)">
        <div class="baseColor">视频</div>
        <div class="">
          普通视频
          <span class="txt_linear">{{commonVideo_num}}</span>
        </div>
      </div>
    </div>
<!--    <div class="right_soldier bold text-center">-->
<!--     <ul>-->
<!--       <li class="f16">-->
<!--         <p class="clr_white"><span class="f26">35</span> 个</p>-->
<!--         <span class="block"></span>-->
<!--         <p class="f16 intro_txt clr_blue01">执法人员</p>-->
<!--       </li>-->
<!--       <li class="f16 mt_20">-->
<!--         <p class="clr_white"><span class="f26">16</span> 辆</p>-->
<!--         <span class="block flex"></span>-->
<!--         <p class="f16 intro_txt clr_blue01">执法车辆</p>-->
<!--       </li>-->
<!--       <li class="f16 mt_20">-->
<!--         <p class="clr_white"><span class="f26">828</span> 路</p>-->
<!--         <span class="block flex"></span>-->
<!--         <p class="f16 intro_txt clr_blue01">视频</p>-->
<!--       </li>-->
<!--     </ul>-->
<!--    </div>-->
    <div class="center_content no_right clr_white text-center" v-if="showMapType == 1">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==1?'active':'']" @click="handlePointType(1)">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=1" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==1?'clr_white':'']">全部力量</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==2?'active':'']" @click="handlePointType(2)">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=2" src="./../../assets/image/point49.png"/>
          <img v-else src="./../../assets/image/point49_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==2?'clr_white':'']">执法人员</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showType==3?'active':'']" @click="handlePointType(3)">
        <div class="weui-cell__hd flex">
          <img v-if="showType!=3" src="./../../assets/image/point50.png"/>
          <img v-else src="./../../assets/image/point50_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showType==3?'clr_white':'']">执法车辆</div>
      </div>
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
  import echarts from 'echarts'
  import RingChart from '@/components/Charts/RingChart'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point49.png' // 执法人员图标
  import point02 from '@/assets/image/point50.png' // 执法车辆图标
  import point03 from '@/assets/image/point51.png' // 普通视频图标
  import {getAllVideoPoint, getNowurl, pointList} from '@/api/system'
  import global from "@/utils/common";
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive},
    data() {
      return {
        showType:1,
        showMapType:1,
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
        pointList:[],
        commonVideo_num:'',
        showVideoDialog:false,
        playVideoUri:'',
        player: null
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
      this.getVideoNum();
      window.handleVideo = this.handleVideo;
      window.closeVideoDialog = () => {
        this.handleVideoClose()
      }
      this.initPlayer()
    },
    methods: {
      //播放视频
      handleVideo(txt){
        console.log(txt)
        this.getNow(txt);
      },
      getNow(txt){
        getNowurl({camera_index_code:txt.index_code,protocol:'hls'}).then(res=>{
          this.showVideoDialog = true;
          this.playVideo(res.data.data.url);
        });
      },
      handleVideoClose() {
        this.player.dispose()
        $('#myVideo').remove()
        $('#dashboardVideoPlayer').html('')
        this.player = null
        this.showVideoDialog = false
        this.playVideoUri = ''
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
          $('#myVideo').remove()
          $('#dashboardVideoPlayer').html('')
          this.player = null
          this.showVideoDialog = false
          this.playVideoUri = ''
        }
      },
      playVideo(uri) {
        this.playVideoUri = uri;
        // this.dialogVisible = true
        $('#dashboardVideoPlayer').append(
          `<div style="position: relative;width: 100%;height: 100%;">
              <i class="el-icon-error"
                 onclick="closeVideoDialog()"
                 style="position: absolute;
                 right: 10px;
                 top: 10px;
                 z-index: 999;
                 color: #fff;
                 cursor: pointer;
                 font-size: 28px;
              "></i>
              <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" style="width: 100%; height: 100%;" data-setup="{}">
            <source id="source" src="${this.playVideoUri}" type="application/x-mpegURL">
            </video></div>`
        )
        window.setTimeout(() => {
          this.player = videojs('myVideo', {
            muted: true,
            controls: true,
            preload: 'auto',
          })
          this.player.play()
          console.log('获取视频')
          console.log(this.player)

        }, 1000)
      },

      //获取力量 -- 不同类型点位
      handlePointType(type){
        this.showType = type;
        this.getList();
      },
      handleMapType(type){
        this.showMapType = type;
        if(type == 1){//获取设备点位
          this.map.clearOverLays();
          this.getList(2);
        }else if(type == 2){//获取视频点位
          this.getVideo();
        }
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
      mapPoint(type,list){
        console.log('点位');
        //创建图片对象
        // this.map.clearOverLays();
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

        let markers = [];
        console.log(list);
        if(type == 'video'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            let point = new T.LngLat(list[i].longitude,list[i].latitude);
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }
        }else{
          for (let i = 0; i < list.length; i++) {
            // var marker
            if(list[i].class==1){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon01,this,list[i]);
            }else if(list[i].class==3){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon02,this,list[i]);
            }
          }
        }

        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
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
              '<td>来源区域</td><td>' + txt.install_place + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td></td><td class="text-right baseColor pointer" onClick="handleVideo('+ aa +')">查看视频</td>'+
              '</tr>'+
              '</table>'+
              '</div>';
            // '<p class="f12 time">监控名称：' + txt.name + '</p>' +
            // '<p class="f12 time">所属区域：' + txt.depart_name + '</p>' +
            // '<p class="f12 time">来源区域：' + txt.community_name + '</p>' +
            // '<p class="f12 time">所在地址：' + txt.install_place + '</p>' +
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }
      },
      //执法力量点位
      getList(){
        this.userList = [];
        this.mapPoint('power',this.userList)
      },
      //视频点位数字
      getVideoNum(){
        getAllVideoPoint({class:2}).then((res) => {
          this.commonVideo_num = res.data.putong;
        });
      },
      //视频点位
      getVideo(){
        getAllVideoPoint({class:2}).then((res) => {
          this.commonVideo_num = res.data.putong;
          this.pointList = res.data.list;
          this.mapPoint('video',this.pointList);
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
