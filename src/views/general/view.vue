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
      <div class="left_content clr_white border shadow base_bg">
        <p class="bold clearfix">
          <span class="f20 txt_linear fl">AI视频墙</span>
          <!--          <span class="f14 fr">更多</span>-->
        </p>
        <ul class="AI_list">
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路与江虹路交叉口</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路120号</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路138号</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
          <li class="mt_20">
            <div class="img_txt f14 bold">滨湖路269号</div>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic18.nipic.com%2F20111226%2F6647776_214907087000_2.jpg&refer=http%3A%2F%2Fpic18.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628911322&t=74fc6a998a3b91caed7e5ae052df4354">
          </li>
        </ul>


      </div>
    </div>

    <div class="center_content clr_white text-center no_right">
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point36.png"/></div>
        <div class="weui-cell__bd">AI视频</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point38.png"/></div>
        <div class="weui-cell__bd">普通视频</div>
      </div>
      <div class="map_intro f14 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point37.png"/></div>
        <div class="weui-cell__bd">河道视频</div>
      </div>
      <div class="map_intro f12 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point42.png"/></div>
        <div class="weui-cell__bd">停车场视频</div>
      </div>
      <!--<p class="text-right baseColor f16 bold mt_20">说明</p>-->
    </div>
    <div class="top_div flex clr_white text-center f16 bold">
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          AI视频
          <span class="txt_linear">{{formData.guanggao}}</span>
        </div>
      </div>
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          停车场视频
          <span class="txt_linear">{{formData.quanzhi}}</span>
        </div>
      </div>
      <div class="flex border shadow mr_20">
        <div class="flex-item">
          普通视频
          <span class="txt_linear">{{formData.gongcheng}}</span>
        </div>
      </div>
      <div class="flex border shadow">
        <div class="flex-item">
          到视频河道
          <span class="txt_linear">{{formData.qita}}</span>
        </div>
      </div>
    </div>

    <div class="back"><router-link :to="{path:'/general/overview'}"><i class="el-icon-back f26 bold clr_white"></i></router-link></div>
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
  import point01 from '@/assets/image/point13.png'
  import point02 from "@/assets/image/point26.png";
  import point03 from "@/assets/image/point27.png";
  import point04 from "@/assets/image/point28.png"; // 引入刚才的map.js 注意路径

  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo},
    data() {
      return {
        formData:{},
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.2099178915',//中心纬度
        centerLongitude:'120.2372328407',//中心经度
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
      mapPoint(list){
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
          var marker =  new T.Marker(lnglat, {icon: icon});
          that.map.addOverLay(marker);
          marker.addEventListener("click", function (m) {
            let infoWin1 = new T.InfoWindow();

            // 办件编号、申请人/单位、电话、地址、申请日期、办结日期、办理结果、权力名称、所属类型
            let sContent =
              '<div class="point_info">' +
              '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
              '<tr>' +
              '<td class="txt_6">监控点名称</td><td>' + '没接口' + '</td>' +
              '</tr>'+
              '<tr>' +
              '<td>监控类型</td><td>' + '没接口' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td>地址</td><td>' +  '没接口' + '</td>'+
              '</tr>'+
              '<tr>' +
              '<td></td><td class="text-right" onClick="handleVideo()">查看视频</td>'+
              '</tr>'+
              '</table>'+
              '</div>';
            infoWin1.setContent(sContent);
            marker.openInfoWindow(infoWin1);

          });// 将标注添加到地图中
          return marker;
        }
      },
      handleVideo(txt){
        this.showVideoDialog = true
        // this.videoData={
        //   source:txt.org_name,
        //   code:txt.index_code,
        //   address:txt.name,
        //   video:'https://vd3.bdstatic.com/mda-mi6yu6w39518uykg/cae_h264/1631056499817188563/mda-mi6yu6w39518uykg.mp4?v_from_s=hkapp-haokan-tucheng&auth_key=1631080314-0-0-bafac110cf549f9655d005c67eb8dbe4&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000186_2'
        // }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .back{
    position: fixed;
    right: 2%;
    top: 20vh;
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
      width: 15%;
      min-width: 260px;
      padding-right: 20px;
      left: 20px;
      .AI_list{
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
            height: 13vh;
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
