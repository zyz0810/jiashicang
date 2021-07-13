
<template>
  <div class="contant"  id="map" style="z-index:1">
  </div>
</template>

<script>
  export default {
    name: "testJwds.vue",
    data() {
      return {
        map:{},
        geoJsons:{
          "data": {
            "features": [
              {
                "geometry":
                  {
                    "coordinates": ["118.794580", "32.037248"],
                    "type": "Point"
                  },
                "properties": {
                  "icon": "demoImg4",
                  "xmmc": "测试1",
                  "zzlds": "2",
                  "zznd": "2021",
                }, "type": "Feature"
              },
              {
                "geometry":
                  {
                    "coordinates": ["118.745607","32.060402"],
                    "type": "Point"
                  },
                "properties": {
                  "icon": "demoImg2",
                  "xmmc": "测试2",
                }, "type": "Feature"
              }
            ], "type": "FeatureCollection"
          }, "type": "geojson"
        },

      }
    },
    methods:{
      init(){
        GeoGlobe.customToken = "09c212e85ea968b8789e2111963c819a";
        //地图初始化参数
        let map = new GeoGlobe.Map({
          container: 'map', //绑定容器
          showLogo:false,
          mapCRS: '4490', //定义坐标系
          zoom: 11, //当前缩放级别
          center: [118.778,32.043], //定位中心点
          pitchWithRotate: false,//禁止45度倾斜
          dragRotate: false,
          maxZoom: 17, //最大缩放级别
          minZoom: 11, //最小缩放级别
          areaId:'',//区ID
          streetId:'',//街道ID
        });
        map.on(
          "load",
          function () {
            var dt_layer = new GeoGlobe.NJLayer("esri_vec_dt_controlcabin");
            map.loadSprite(dt_layer.sprite);
            map.style.setGlyphs(dt_layer.glyphs);
            map.addLayer(dt_layer);
            // 加载南京大屏版矢量注记
            var zj_layer = new GeoGlobe.NJLayer("esri_vec_zj_controlcabin");
            map.loadSprite(zj_layer.sprite);
            map.style.setGlyphs(zj_layer.glyphs);
            map.addLayer(zj_layer);
            this.addImgs()
          }.bind(this)
        )
        this.map = map;

      },
      addImgs(){
        let map = this.map
        var url1 = '/msgcdp/static/GeoGlobeAPI_53/img/图层10.png'; //申明图片路径
        map.loadImage(url1, function(error, image) {
          console.log(image)
          //添加图片 命名为demoImg，即这张图片的id为demoImg
          map.addImage("demoImg1", image);
        });

        var url2 = '/msgcdp/static/GeoGlobeAPI_53/img/图层10拷贝.png';
        map.loadImage(url2, function(error, image) {
          map.addImage("demoImg2", image);
        });
        var url3 = '/msgcdp/static/GeoGlobeAPI_53/img/图层10拷贝2.png';
        map.loadImage(url3, function(error, image) {
          map.addImage("demoImg3", image);
        });

        var url4 = '/msgcdp/static/GeoGlobeAPI_53/img/图层10拷贝3.png';
        map.loadImage(url4, function(error, image) {
          map.addImage("demoImg4", image);
        });
        //通过点方法组装点geojson串

        var pointGeoJSON = this.geoJsons

        //添加点数据源
        map.addSource('point-source', pointGeoJSON);

        //添加点图层
        map.addLayer({
          "id": "point-layer", //图层ID
          "type": "symbol", //图层类型
          "source": 'point-source', //数据源
          "layout": {
            "icon-image": ['get','icon'], //获取properties icon 图片
            "icon-size": 0.5, //图片大小
          }
        });
        this.popups()
      },
      popups(){
        let map = this.map
        //弹出信息框
        var popup = new GeoGlobe.Popup({
          closeButton: true,  //显示关闭按钮
          closeOnClick: true  //点击地图其他地方也可以关闭弹窗
        });

        //点击弹出框
        map.on('click', function (e) {
          var bbox = [//设置容差，使点变成一个范围，方便操作获取到对应的信息
            [e.point.x - 10, e.point.y - 10],
            [e.point.x + 10, e.point.y + 10]
          ];

          var features = map.queryRenderedFeatures(bbox, {
            layers:["point-layer"]
          });

          if(features.length>0){
            var coordinates = features[0].geometry.coordinates.slice();
            this.jd = coordinates[0]
            this.wd = coordinates[1]
            //设置中心点
            map.setCenter(new GeoGlobe.LngLat(this.jd, this.wd),11);
            popup.setLngLat(coordinates)
              .setHTML('<div class="wrap" >' +
                '    <label class="st" >' +
                '        <span class="st_title" onclick="sss(this)" >项目信息</span>' +
                '        <input type="radio" name="tab" checked>' +
                '        <div>' +
                '<p align="left" ><span class="st_title_spot" ></span><strong>项目名称</strong>' + '<span class="st_title_spot2" >'+features[0].properties.xmmc+'</span>' + '</p>' +
                '</div>' +
                '    </label>' +
                '    <label class="st" >' +
                '        <span class="st_title" onclick="sss(this)" >项目流程信息</span>' +
                '        <input type="radio" name="tab">' +
                '        <div>' +
                '</div>' +
                '    </label>' +
                '</div>')
              .addTo(map);
          }

        })

      },
    },
    mounted(){
      this.init()
    }
  }
</script>

<style scoped>

</style>

