<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_left_community">
      <!--      <div class="left_server baseColor text-center f16 bold border shadow base_bg">-->
      <!--        <div class="mb_20 clr_white">-->
      <!--          <i class="iconfont icon-zaosheng f26"></i>-->
      <!--          <p class="mt_10">滨江二区</p>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="left_content clr_white">
        <p class="bold clearfix">
          <span class="f20 txt_linear fl">AI视频墙</span>
          <!--          <span class="f14 fr">更多</span>-->
        </p>
        <ul class="AI_list">
          <!--<li class="mt_20" v-for="item in AIList" :key="item.id" @click="handleVideo(item)">-->
          <li class="mt_20" v-for="item in AIList" :key="item.id">
            <div class="img_txt f14 bold">{{item.camera_name}}</div>
            <!--<img :src="item.pic_url">-->
            <div style="width: 100%;height: 16vh;">
              <video :id="'myVideo'+item.id" class="video-js vjs-default-skin vjs-big-play-centered" autoplay="autoplay" controls muted style="width: 100%; height: 100%;" data-setup="{}">
                <source id="source" :src="item.videoUrl" type="application/x-mpegURL">
                <!--<source id="source" :src="item.videoUrl" type="video/mp4">-->

              </video>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="center_content clr_white text-center no_right">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showPointType==0?'active':'']" @click="handlePointType(0)">
        <div class="weui-cell__hd flex">
          <img v-if="showPointType!=0" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showPointType==0?'clr_white':'']">全部</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showPointType==1?'active':'']" @click="handlePointType(1)">
        <div class="weui-cell__hd flex">
          <img v-if="showPointType!=1" src="./../../assets/image/point36.png"/>
          <img v-else src="./../../assets/image/point51_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showPointType==1?'clr_white':'']">AI视频</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showPointType==2?'active':'']" @click="handlePointType(4)">
        <div class="weui-cell__hd flex">
          <img v-if="showPointType!=2" src="./../../assets/image/point37.png"/>
          <img v-else src="./../../assets/image/point51_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showPointType==2?'clr_white':'']">普通视频</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showPointType==3?'active':'']" @click="handlePointType(2)">
        <div class="weui-cell__hd flex">
          <img v-if="showPointType!=3" src="./../../assets/image/point38.png"/>
          <img v-else src="./../../assets/image/point51_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showPointType==3?'clr_white':'']">河道视频</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showPointType==4?'active':'']" @click="handlePointType(3)">
        <div class="weui-cell__hd flex">
          <img v-if="showPointType!=4" src="./../../assets/image/point42.png"/>
          <img v-else src="./../../assets/image/point51_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showPointType==4?'clr_white':'']">停车场视频</div>
      </div>
      <!--<p class="text-right baseColor f16 bold mt_20">说明</p>-->
    </div>
    <div class="top_div flex clr_white text-center f20 bold">
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          AI视频
          <span class="txt_linear f22">{{formData.ai}}</span>
        </div>
      </div>
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          停车场视频
          <span class="txt_linear f22">{{formData.parking}}</span>
        </div>
      </div>
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          普通视频
          <span class="txt_linear f22">{{formData.putong}}</span>
        </div>
      </div>
      <div class="flex border shadow">
        <div class="flex-item">
          河道视频
          <span class="txt_linear f22">{{formData.hedao}}</span>
        </div>
      </div>
    </div>
    <div class="back"><router-link :to="{path:'/general/overview'}"><i class="iconfont icon-fanhui f26 bold txtColor"></i></router-link></div>
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
  import wgs84_to_gcj02 from "@/utils/gcj02towgs84";
  import RingChart from '@/components/Charts/RingChart'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point36.png'
  import point02 from "@/assets/image/point38.png";
  import point03 from "@/assets/image/point37.png";
  import point04 from "@/assets/image/point42.png"; // 引入刚才的map.js 注意路径
  import {getAllVideoPoint, getNowurl} from '@/api/system'
  import {collectList} from '@/api/overView'
  import global from "@/utils/common";
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
        showPointType:0,
        formData:{},
        AIList:[],
        map: '', // 对象
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
      window.handleVideo = this.handleVideo;
      window.closeVideoDialog = this.handleVideoClose;
      this.initPlayer();
      this.getPoint('');
      this.getAIList();
    },
    methods: {
      handlePointType(type){
        this.showPointType = type;
        this.map.clearOverLays();
        if(type == 0){
          this.getPoint('')
        }else{
          this.getPoint(type)
        }

      },
      // onLoad() {
      //   let T = window.T
      //   this.map = new T.Map('mapDiv')
      //   this.map.centerAndZoom(new T.LngLat(global.latlog.centerLongitude, global.latlog.centerLatitude), global.latlog.zoom) // 设置显示地图的中心点和级别
      //   // 添加地图类型控件
      //   // this.addCtrl()
      //   this.map.setStyle('indigo');
      //   document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';
      // },
      onLoad() {
        let T = window.T
        this.map = new T.Map('mapDiv')
        this.map.centerAndZoom(new T.LngLat(global.latlog.centerLongitude, global.latlog.centerLatitude), global.latlog.zoom) // 设置显示地图的中心点和级别
        // 添加地图类型控件
        // this.addCtrl()
        this.map.setStyle('indigo');
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';
      },
      getAIList(){
        collectList({is_important:1}).then((res) => {
          this.AIList = res.data.data;

          for(let i=0;i<this.AIList.length;i++){
            this.$set(this.AIList[i],'videoUrl','https://vd3.bdstatic.com/mda-mi6yu6w39518uykg/cae_h264/1631056499817188563/mda-mi6yu6w39518uykg.mp4')
            // this.AIList[i].videoUrl = 'https://vd3.bdstatic.com/mda-mi6yu6w39518uykg/cae_h264/1631056499817188563/mda-mi6yu6w39518uykg.mp4';
            // setTimeout(()=> {
            //   let myPlayer = videojs('myVideo'+this.AIList[i].id);
            //   videojs('myVideo'+this.AIList[i].id).ready(function() {
            //     let myPlayer = this;
            //     myPlayer.play();
            //   });
            // }, 5000);
            getNowurl({camera_index_code:this.AIList[i].index_code,protocol:'hls'}).then(res=>{
             //  this.AIList[i].videoUrl = res.data.data.url;
            this.$set(this.AIList[i],'videoUrl',res.data.data.url);
              // setTimeout(()=> {
              //   let myPlayer = videojs('myVideo'+this.AIList[i].id);
              //   videojs('myVideo'+this.AIList[i].id).ready(function() {
              //     let myPlayer = this;
              //     myPlayer.play();
              //   });
              // }, 2000);
            });


          }
          setTimeout(()=>{
            for(let i=0;i<this.AIList.length;i++){
              let myPlayer = videojs('myVideo'+this.AIList[i].id);
              videojs('myVideo'+this.AIList[i].id).ready(function() {
                let myPlayer = this;
                myPlayer.play();
              });
            }
          },3000)


        });
      },
      getPoint(type){
        getAllVideoPoint({class:type}).then((res) => {
          const {ai,hedao,parking,putong} = res.data;
          this.formData = {ai,hedao,parking,putong};
          this.pointList = res.data.list;
          this.mapPoint(this.pointList)
        });
      },
      mapPoint(list){
        //创建图片对象
        this.map.clearOverLays();
        // this.map.removeOverLay(markers);
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
        let markers = []

        for (let i = 0; i < list.length; i++) {
          // var marker
          // 监控类型1AI视频、2河道视频、3停车场视频、4普通视频
          let point = new T.LngLat(list[i].longitude,list[i].latitude);
          if(list[i].class == 1){
            markers[i]  = drawTMaker(point, icon01,this,list[i]);
          }else if(list[i].class == 2){
            markers[i]  = drawTMaker(point, icon02,this,list[i]);
          }else if(list[i].class == 3){
            markers[i]  = drawTMaker(point, icon03,this,list[i]);
          }else if(list[i].class == 4){
            markers[i]  = drawTMaker(point, icon04,this,list[i]);
          }
        }

        //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
        function drawTMaker(lnglat,icon,that,txt){
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            let infoWin1 = new T.InfoWindow();
            let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
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
              '<td>所在地址</td><td>' + txt.install_place + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td></td><td class="text-right baseColor pointer" onClick="handleVideo('+ aa +')">查看视频</td>'+
              '</tr>'+
              '</table>'+
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }
      },

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
    }
  }
</script>
<style lang="scss" scoped>
  .back{
    position: fixed;
    right: 2%;
    top: 12vh;
    z-index: 999;
  }
  .left_left_community{
    .left_server{
      position: fixed;
      top: 10vh;
      left: 20px;
      width: 120px;
      z-index: 9999;
      padding: 20px;
    }
    .left_content{
      /*width: 15%;*/
      min-width: 350px;
      padding-right: 20px;
      left: 20px;
      .AI_list{
        height: 98%;
        padding-right: 5px;
        overflow: auto;
        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
          height: 1px;
        }
        &::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          border-radius: 10px;
          box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
          background   : #535353;
        }
        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background   : #152d5b;
        }
        li{
          border-radius: 20px;
          position: relative;
          .img_txt{
            position: absolute;
            left: 0;
            top: 0;
            z-index: 99999;
            width: 100%;
            line-height: 2;
            padding: 0 10px;
            background: rgba(0,0,0,0.5);
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          img{
            width: 100%;
            height: 16vh;
            border-radius: 20px;
          }
        }
      }
    }
  }

  .communityNum{
    /*width: 30%;*/
    li{
      margin-right: 10%;
      height: 6vh;
      line-height: 6vh;
      background: url("./../../assets/image/communityNum_bg.png") left top no-repeat;
      background-size: 100% 100%;
      & > span{
        &:nth-child(1){
          width: 40%;
          height: 6vh;
        }
        &:nth-child(2){
          width: 60%;
          height: 6vh;
        }
      }
    }
  }

</style>
