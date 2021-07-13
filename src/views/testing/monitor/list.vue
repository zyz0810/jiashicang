<template>
  <div class="app-container">
    <TdMap></TdMap>
  </div>
</template>

<script>
  import {paraList, paraSave, paraUpdate, paraDelete} from '@/api/parameter'
  import draggable from 'vuedraggable'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import Pagination from "@/components/Pagination/index"; // waves directive
  import paraView from "./components/view";
  export default {
    name: 'parameterList',
    directives: {waves},
    components: {
      draggable,
      Pagination,
      paraView
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
    },
    mounted() {
      // this.$nextTick(function() {
      //
      // });
      this.aa();
    },
    methods: {
      aa(){
        const imageURL =
          'http://t0.tianditu.gov.cn/img_c/wmts?tk=4c2ba28410b984eada6cb7c66bef72fa'
        const lay = new T.TileLayer(imageURL, { minZoom: 4, maxZoom: 15 })
        console.log(lay)
        this.map = new T.Map('yzMap')
        this.map.centerAndZoom(new T.LngLat(116.401003, 39.903117), 12)
        let data_info = this.markers     //这里的this.markers就是实际开发中后台返回的数据,在data中定义的
        let that = this
        that.markers = []
        for (let i = 0; i < data_info.length; i++) {
          let marker = new T.Marker(
            new T.LngLat(data_info[i].lng, data_info[i].lat),
            {
              icon: icon
            }
          ) // 创建标注
          let content =
            '<div>' + data_info[i].name+'</div>'    //这里展示信息框的内容  ,也可以操作dom  但是dom中不能获取到后台数据,因为dom会比这里先加载完,数据没法赋值
          this.map.addOverLay(marker)     // 将标注添加到地图中
          addClickHandler(content, marker)
          marker.content = content
          that.markers.push(marker)
        }
        function addClickHandler(content, marker) {
          marker.addEventListener('click', function(e) {
            openInfo(content, e)
          })
        }
        function openInfo(content, e) {
          let point = e.lnglat
          marker = new T.Marker(point)   // 创建标注
          let markerInfoWin = new T.InfoWindow(content, {
            offset: new T.Point(0, -30)
          })
          that.map.openInfoWindow(markerInfoWin, point) // 开启信息窗口
        }
      },
    }
  }
</script>
