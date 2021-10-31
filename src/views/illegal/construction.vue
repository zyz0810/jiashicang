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
      <div class="flex f20 bold mr_20 border shadow" @click="handleMapType(1)">
        <div class="baseColor">违法建筑</div>
        <div class="">
          违法建筑总宗数
          <span class="txt_linear f22">2881</span>
        </div>
        <div class="">
          违法占地总面积
          <span class="txt_linear f22">194246.83</span>
        </div>
        <div class="">
          违法建筑总面积
          <span class="txt_linear f22">285742.53</span>
        </div>
      </div>
      <div class="flex f20 bold border shadow" @click="handleMapType(2)">
        <div class="baseColor">视频</div>
        <div class="">
          普通视频
          <span class="txt_linear f22">{{commonVideo_num}}</span>
        </div>
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
  import point01 from '@/assets/image/point52.png'
  import point02 from '@/assets/image/point51.png'
  import {getAllVideoPoint, getNowurl} from "@/api/system"; // 引入刚才的map.js 注意路径
  import global from "@/utils/common";

  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive},
    data() {
      return {
        map: '', // 对象
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
      window.closeVideoDialog = this.handleVideoClose;
      this.initPlayer()
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

      handleMapType(type){
        this.showMapType = type;
        if(type == 1){//获取设备点位
          this.map.clearOverLays();
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
          this.mapPoint('video',this.pointList)
        });
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
        let countries = [];
        let countriesOverlay = new T.D3Overlay(init,redraw);
        let that = this;
        d3.json("https://geo.datav.aliyun.com/areas_v3/bound/330108.json", function (data) {
          countries = data.features;
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
        // this.map.clearOverLays();
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
            let infoWin1 = new T.InfoWindow();
            let sContent;
            if(type == 'video'){
              let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
              // 办件编号、申请人/单位、电话、地址、申请日期、办结日期、办理结果、权力名称、所属类型
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
                '<td>来源区域</td><td>' + txt.install_place + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td></td><td class="text-right baseColor pointer" onClick="handleVideo('+ aa +')">查看视频</td>'+
                '</tr>'+
                '</table>'+
                '</div>';
            }else{
              // 办件编号、申请人/单位、电话、地址、申请日期、办结日期、办理结果、权力名称、所属类型
              sContent =
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
