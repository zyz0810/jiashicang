<template>
  <myDialog
    :visible.sync="showViewDialog"
    :close-on-click-modal="false"
    width="80%"
    @close="close"
    top="10vh"
    title="查看视频"
    class="dialogContainer"
    @open="open"
  >
<!--    <p>设备来源：{{caseData.source}} <span class="m_r30">位置信息：{{caseData.address}}</span></p>-->
    <div class="video_cont">
<!--      <video :src="caseData.video"></video>-->
      <video
        src="http://erp.susongzhijia.com/static/2021-09-29464916.mp4"
        :controls="videoOptions.controls"
        class="video-js vjs-big-play-centered vjs-fluid"
        webkit-playsinline="true"
        playsinline="true"
        x-webkit-airplay="allow"
        x5-playsinline
        style="width: 100%;"
        @play="onPlayerPlay"
        @pause="onPlayerPause"
        @seeking="seeking"
        autoplay="autoplay"
        ref="video">
      </video>
    </div>
  </myDialog>
</template>

<script>
  import draggable from 'vuedraggable'
  import waves from '@/directive/waves'
  export default {
    name: 'parameterView',
    directives: { waves },
    components: {
      draggable,
    },
    props: {
      showDialog: {
        required: true,
        type: Boolean,
        default: false
      },
      caseData: {
        required: false,
        type: Object,
        default: {
          code:'',
          source: "",
          address: "",
          video: ""
        }
      }
    },
    data() {
      return {
        seeking:true,
        textMap: '',
        videoOptions: {
          controls:true,
          src:
            "http://erp.susongzhijia.com/static/2021-09-29464916.mp4", // url地址
        },
        player: null,
        playTime:'',
        seekTime:'',
        current:'',
      }
    },
    computed: {
      showViewDialog: {
        get() {
          return this.showDialog;
        },
        set(value) {
          this.$emit("update:show-dialog", value);
        }
      },
    },
    filters:{
      filtersStatus: function(value) {
        let StatusArr = {0:'禁用', 1:'启用'}
        return StatusArr[value]
      }
    },

    methods: {
      playVideo() {
      //   this.$refs['playerObj'].videoSrc = 'rtsp://10.32.54.38:554/openUrl/ePBOw6I'
      //   this.$refs['playerObj'].playerOptions.sources[0].src = 'rtsp://10.32.54.38:554/openUrl/ePBOw6I'
      },
      open(){
        // this.textMap = '设备来源：'+this.caseData.source+' 位置信息：'+this.caseData.address;
      },

      close(){},
      initVideo() {
        //原生初始化视频方法
        let myVideo = this.$refs.video;
        //ontimeupdate
        myVideo.ontimeupdate = function () {
          myFunction()
        };
        let _this = this;

        function myFunction() {
          let playTime = myVideo.currentTime
          setTimeout(function () {
            localStorage.setItem("cacheTime", playTime)
          }, 500)
          let time = localStorage.getItem("cacheTime")
          // 当前播放位置发生变化时触发。
          if (playTime - Number(time) > 2) {
            myVideo.currentTime = Number(time)
          } else {
          }
        };
      },

        // 播放回调
        onPlayerPlay(player) {
          // this.globalSetting = true
          console.log("player play!", player);
          // document.getElementsByClassName("vjs-control-bar").style.display = "block";
          // document.getElementsByClassName("vjs-control-bar").style.display = "block";
        },

        // 暂停回调
        onPlayerPause(player) {
          // this.globalSetting.controls = false;
          // console.log("player pause!", player);
          // var video = document.getElementById("video");
          // video.controls=false;
          // document.getElementsByClassName("vjs-control-bar").style.display = "none";
        },
    }
  }
</script>
<style lang="scss" scoped>
  .video_cont{
    width: 100%;
    height: 560px;
  }
</style>
