<template>
  <myDialog
    :visible.sync="showViewDialog"
    :close-on-click-modal="false"
    width="80%"
    @close="close"
    top="5vh"
    title="餐企信息"
    class="dialogContainer"
    @open="open"
  >
    <el-tabs v-model="activeName" class="catering_tab" @tab-click="handleClick">
      <el-tab-pane label="餐企信息" name="first">
        <el-form ref="firstForm" :rules="rules" :inline="true" :model="temp" label-width="120px">
          <el-form-item label="设备名称" prop="facility_id">
            <!--        <el-input v-model.trim="temp.name" placeholder="请输入所属分组" autocomplete="off" clearable/>-->
            <el-select v-model="temp.facility_id" multiple  placeholder="选择设备" @change="$forceUpdate()" :disabled="isCanView">
              <el-option v-for="option in facilityList" :label="option.name" :value="option.id" :key="option.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="餐企名称" prop="company" :disabled="isCanView">
            <el-input v-model.trim="temp.company" placeholder="请输入餐企名称" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="餐企简称" prop="simple_name">
            <el-input v-model.trim="temp.simple_name" placeholder="请输入餐企简称" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="信用代码" prop="credit_code">
            <el-input v-model.trim="temp.credit_code" placeholder="请输入信用代码" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="组织机构代码" prop="organization_code">
            <el-input v-model.trim="temp.organization_code" placeholder="请输入组织机构代码" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="企业状态" prop="status">
            <el-select v-model="temp.status" :disabled="isCanView">
              <el-option v-for="item in companyStatus" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业编码" prop="company_code">
            <el-input v-model.trim="temp.company_code" placeholder="请输入企业编码" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="负责人" prop="principal">
            <el-input v-model.trim="temp.principal" placeholder="请输入负责人" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobile">
            <el-input v-model.trim="temp.mobile" placeholder="请输入手机号码" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="餐企电话" prop="tel">
            <el-input v-model.trim="temp.tel" placeholder="请输入餐企电话" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>



          <el-form-item label="餐企类型" prop="company_type">
            <el-select v-model="temp.company_type" :disabled="isCanView">
              <el-option v-for="option in companyList" :label="option.name" :value="option.id" :key="option.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜系" prop="cook_type">
            <el-select v-model="temp.cook_type" :disabled="isCanView">
              <el-option v-for="option in cookList" :label="option.name" :value="option.id" :key="option.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="营业面积" prop="area">
            <el-input v-model.trim="temp.area" placeholder="请输入营业面积" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="灶头数量" prop="kitchen_range_num">
            <el-input v-model.trim="temp.kitchen_range_num" placeholder="请输入灶头数量" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="排口数量" prop="outlet_num">
            <el-input v-model.trim="temp.outlet_num" placeholder="请输入排口数量" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="餐企规模" prop="scale_type">
            <el-select v-model="temp.scale_type" :disabled="isCanView">
              <el-option v-for="option in scaleList" :label="option.name" :value="option.id" :key="option.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属辖区" prop="city_id">
            <el-select v-model="temp.city_id" :disabled="isCanView">
              <el-option v-for="option in cityList" :label="option.province+option.city+option.area" :value="option.id" :key="option.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属来源" prop="depart_id">
            <el-select v-model="temp.depart_id" :disabled="isCanView">
              <el-option v-for="item in departList" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="中队负责人" prop="zd_people">
            <el-input v-model.trim="temp.zd_people" placeholder="请输入中队负责人" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <el-form-item label="负责人电话" prop="zd_mobile">
            <el-input v-model.trim="temp.zd_mobile" placeholder="请输入负责人电话" autocomplete="off" clearable :disabled="isCanView"/>
          </el-form-item>
          <!--      <el-form-item label="所属分组" prop="street">-->
          <!--        <el-select v-model="temp.street">-->
          <!--          <el-option label="启用" value="1"></el-option>-->
          <!--          <el-option label="禁用" value="0"></el-option>-->
          <!--        </el-select>-->
          <!--      </el-form-item>-->
        </el-form>
        <el-form ref="secondForm" :rules="rules" :model="temp" label-width="120px" class="m_r30">
          <el-form-item label="详细地址" prop="address">
            <el-input v-model.trim="temp.address" placeholder="请输入详细地址" autocomplete="off" @input="getAddress" clearable :disabled="isCanView"/>
            <div id='mapDiv' class="mapDiv mt_10" style="width: 100%;height: 200px"></div>
          </el-form-item>
          <el-form-item label="门面照片" prop="images">
            <img v-if="dialogStatus==='view'" class="my_img" :src="temp.images"/>
            <SingleImage :tempUrl="temp.images" v-on:imgSrc="hasImgSrc" v-else></SingleImage>
          </el-form-item>
          <el-form-item label="营业执照" prop="license">
            <img v-if="dialogStatus==='view'" class="my_img" :src="temp.license"/>
            <SingleImage :tempUrl="temp.license" v-on:imgSrc="hasImgSrc1" v-else></SingleImage>
          </el-form-item>
          <el-form-item label="备  注" prop="remark">
            <el-input type="textarea" v-model.trim="temp.remark" placeholder="备注：1000字以内" clearable :disabled="isCanView"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
<!--      <el-tab-pane label="绑定设备" name="second">-->
<!--        <el-form ref="dataForm" :rules="rules" :inline="true" :model="temp" label-width="120px">-->
<!--          <el-form-item label="设备名称" prop="company">-->
<!--            <el-input v-model.trim="temp.company" placeholder="请输入餐企名称" autocomplete="off" clearable/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="设备型号" prop="simple_name">-->
<!--            <el-input v-model.trim="temp.simple_name" placeholder="请输入餐企简称" autocomplete="off" clearable/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="设备编号" prop="credit_code">-->
<!--            <el-input v-model.trim="temp.credit_code" placeholder="请输入信用代码" autocomplete="off" clearable/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="设备IMEI" prop="organization_code">-->
<!--            <el-input v-model.trim="temp.organization_code" placeholder="请输入组织机构代码" autocomplete="off" clearable/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="安装日期" prop="start_time">-->
<!--            <el-date-picker v-model="temp.start_time" type="datetime" placeholder="请选择时间" value-format="yyyy-MM-dd hh:mm:ss"></el-date-picker>-->
<!--          </el-form-item>-->

<!--        </el-form>-->
<!--        <el-form ref="dataForm" :rules="rules" :model="temp" label-width="120px">-->

<!--          <el-form-item label="安装照片" prop="name">-->
<!--            <SingleImage :tempUrl="temp.imageUrl" v-on:imgSrc="hasImgSrc"></SingleImage>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="备  注" prop="remark">-->
<!--            <el-input type="textarea" v-model.trim="temp.remark" placeholder="备注：1000字以内" clearable></el-input>-->
<!--          </el-form-item>-->

<!--        </el-form>-->
<!--      </el-tab-pane>-->

    </el-tabs>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" v-if="dialogStatus!='view'" @click="dialogStatus==='create'?createData():updateData()" :loading="paraLoading">确 定</el-button>
      <el-button @click="showViewDialog = false">取 消</el-button>
    </div>
  </myDialog>
</template>

<script>
  import axios from 'axios'
  import {companyDetail,addCompany,editCompany} from '@/api/catering'
  import draggable from 'vuedraggable'
  import Pagination from "@/components/Pagination/index"; // waves directive
  import SingleImage from "@/components/Upload/SingleImage.vue";
  import {facilityList} from "@/api/monitor";
  import {dicList} from "@/api/dictionary";
  import {cityList} from "@/api/jurisdiction";
  import {cos} from "@/utils/translate";
  import {getCitySelected} from "@/utils/auth"; // waves directive
  let markerTool;
  export default {
    name: 'cateringView',
    components: {
      draggable,
      Pagination,
      SingleImage
    },
    props: {
      showDialog: {
        required: true,
        type: Boolean,
        default: false
      },
      viewData: {
        required: true,
        type: Object,
        default: {
          option: {},
          operatorType: "view",
          id: ""
        }
      }
    },
    data() {
      return {
        activeName:'first',
        map: '', // 对象
        zoom: 14, // 地图的初始化级别，及放大比例
        centerLatitude:'30.20835',//中心纬度
        centerLongitude:'120.21194',//中心经度
        paraLoading:false,
        companyStatus:[{
          id:1,
          name:'正常'
        },{
          id:2,
          name:'禁用'
        }],
        temp: {
          facility_id:'',
          company:'',
          simple_name:'',
          organization_code:'',
          status:1,
          company_code:'',
          principal:'',
          mobile:'',
          tel:'',
          company_type:'',
          cook_type:'',
          area:'',
          kitchen_range_num:'',
          outlet_num:'',
          scale_type:'',
          city_id:'',
          depart_id:'',
          // street:'',
          address:'',
          images:'',
          license:'',
          remark:'',
          log:'120.21194',
          lat:'30.20835',
          zd_mobile:'',
          zd_people:'',
        },
        images:{},
        license:{},
        companyList:[],
        cookList:[],
        scaleList:[],
        facilityList:[],
        cityList:[],
        // 1: '浦沿中队', 2: '长河中队',3: '西兴中队'
        departList:[{
          id:1,
          name:'浦沿中队'
        },{
          id:2,
          name:'长河中队'
        },{
          id:3,
          name:'西兴中队'
        }],
        dialogStatus: '',
        rules: {
          company: [{ required: true, message: '请输入名称', trigger: 'change' }],
          simple_name: [{ required: true, message: '请输入企业简称', trigger: 'change' }],
          credit_code: [{ required: true, message: '请输入信用代码', trigger: 'change' }],
          status: [{ required: true, message: '请选择企业状态', trigger: 'change' }],
          company_code: [{ required: true, message: '请输入企业编码', trigger: 'change' }],
          company_type: [{ required: true, message: '请选择餐企类型', trigger: 'change' }],
          cook_type: [{ required: true, message: '请选择菜系', trigger: 'change' }],
          kitchen_range_num: [{ required: true, message: '请输入灶头数量', trigger: 'change' }],
          outlet_num: [{ required: true, message: '请输入排口数量', trigger: 'change' }],
          scale_type: [{ required: true, message: '请选择餐企规模', trigger: 'change' }],
          city_id: [{ required: true, message: '请选择辖区', trigger: 'change' }],
          address: [{ required: true, message: '请选择详细地址', trigger: 'change' }],
          images: [{ required: true, message: '请上传门店照片', trigger: 'change' }],
          license: [{ required: true, message: '请上传营业执照', trigger: 'change' }],
        },
      }
    },
    computed: {
      isCanView() {
        return this.viewData.operatorType == "view";
      },
      showViewDialog: {
        get() {
          return this.showDialog;
        },
        set(value) {
          this.$emit("update:show-dialog", value);
        }
      },
    },
    methods: {
      getAddress(val){
        let  that = this;
        console.log(val)
        let config = {
          pageCapacity: 10,	//每页显示的数量
          onSearchComplete: localSearchResult	//接收数据的回调函数
        };
        //创建搜索对象
        let localsearch = new T.LocalSearch(that.map, config);
        //清空地图及搜索列表
        // function clearAll() {
        //   this.map.clearOverLays();
        // }
        function localSearchResult(result) {
          console.log('调用')
          //清空地图及搜索列表
          // clearAll();

          //添加提示词
          // prompt(result);
          //解析点数据结果
          function pois(obj) {
            console.log('带大的pois')
            if (obj) {
              //显示搜索列表
              var divMarker = document.createElement("div");
              //坐标数组，设置最佳比例尺时会用到
              var zoomArr = [];
              for (var i = 0; i < 1; i++) {
                // console.log('收到')
                //闭包
                (function (i) {
                  console.log(obj)
                  //名称
                  let name = obj[i].name;
                  //地址
                  let address = obj[i].address;
                  //坐标
                  let lnglatArr = obj[i].lonlat.split(" ");
                  let lnglat = new T.LngLat(lnglatArr[0], lnglatArr[1]);
                  console.log(lnglat)
                  that.temp.lat = lnglatArr[0];
                  that.temp.lng = lnglatArr[1];

                  let winHtml = "名称:" + name + "<br/>地址:" + address;

                  //创建标注对象
                  let marker = new T.Marker(lnglat);
                  //地图上添加标注点
                  that.map.addOverLay(marker);
                  //注册标注点的点击事件
                  let markerInfoWin = new T.InfoWindow(winHtml, {autoPan: true});
                  marker.addEventListener("click", function () {
                    marker.openInfoWindow(markerInfoWin);
                  });

                  zoomArr.push(lnglat);

                  //在页面上显示搜索的列表
                  let a = document.createElement("a");
                  a.href = "javascript://";
                  a.innerHTML = name;
                  a.onclick = function () {
                    showPosition(marker, winHtml);
                  }
                  divMarker.appendChild(document.createTextNode((i + 1) + "."));
                  divMarker.appendChild(a);
                  divMarker.appendChild(document.createElement("br"));
                })(i);
              }
              //显示地图的最佳级别
              that.map.setViewport(zoomArr);
              //显示搜索结果
              // divMarker.appendChild(document.createTextNode('共' + localsearch.getCountNumber() + '条记录，分' + localsearch.getCountPage() + '页,当前第' + localsearch.getPageIndex() + '页'));
              // document.getElementById("searchDiv").appendChild(divMarker);
              // document.getElementById("resultDiv").style.display = "block";
            }
          }

          //根据返回类型解析搜索结果
          switch (parseInt(result.getResultType())) {
            case 1:
              //解析点数据结果
              pois(result.getPois());
              break;
            case 2:
              //解析推荐城市
              statistics(result.getStatistics());
              break;
            case 3:
              //解析行政区划边界
              area(result.getArea());
              break;
            case 4:
              //解析建议词信息
              suggests(result.getSuggests());
              break;
            case 5:
              //解析公交信息
              lineData(result.getLineData());
              break;
          }
        }
        //显示信息框
        function showPosition(marker, winHtml) {
          var markerInfoWin = new T.InfoWindow(winHtml, {autoPan: true});
          marker.openInfoWindow(markerInfoWin);
        }

        //解析推荐城市
        function statistics(obj) {
          if (obj) {
            //坐标数组，设置最佳比例尺时会用到
            var pointsArr = [];
            var priorityCitysHtml = "";
            var allAdminsHtml = "";
            var priorityCitys = obj.priorityCitys;
            if (priorityCitys) {
              //推荐城市显示
              priorityCitysHtml += "在中国以下城市有结果<ul>";
              for (var i = 0; i < priorityCitys.length; i++) {
                priorityCitysHtml += "<li>" + priorityCitys[i].name + "(" + priorityCitys[i].count + ")</li>";
              }
              priorityCitysHtml += "</ul>";
            }

            var allAdmins = obj.allAdmins;
            if (allAdmins) {
              allAdminsHtml += "更多城市<ul>";
              for (var i = 0; i < allAdmins.length; i++) {
                allAdminsHtml += "<li>" + allAdmins[i].name + "(" + allAdmins[i].count + ")";
                var childAdmins = allAdmins[i].childAdmins;
                if (childAdmins) {
                  for (var m = 0; m < childAdmins.length; m++) {
                    allAdminsHtml += "<blockquote>" + childAdmins[m].name + "(" + childAdmins[m].count + ")</blockquote>";
                  }
                }
                allAdminsHtml += "</li>"
              }
              allAdminsHtml += "</ul>";
            }
            // document.getElementById("statisticsDiv").style.display = "block";
            // document.getElementById("statisticsDiv").innerHTML = priorityCitysHtml + allAdminsHtml;
            console.log(priorityCitysHtml + allAdminsHtml)
          }
        }

        //解析行政区划边界
        function area(obj) {
          if (obj) {
            if(obj.points){
              //坐标数组，设置最佳比例尺时会用到
              var pointsArr = [];
              var points = obj.points;
              for (var i = 0; i < points.length; i++) {
                var regionLngLats = [];
                var regionArr = points[i].region.split(",");
                for (var m = 0; m < regionArr.length; m++) {
                  var lnglatArr = regionArr[m].split(" ");
                  var lnglat = new T.LngLat(lnglatArr[0], lnglatArr[1]);
                  regionLngLats.push(lnglat);
                  pointsArr.push(lnglat);
                }
                //创建线对象
                var line = new T.Polyline(regionLngLats, {
                  color: "blue",
                  weight: 3,
                  opacity: 1,
                  lineStyle: "dashed"
                });
                //向地图上添加线
                this.map.addOverLay(line);
              }
              //显示最佳比例尺
              this.map.setViewport(pointsArr);
            }
            if(obj.lonlat){
              var regionArr = obj.lonlat.split(",");
              that.map.panTo(new T.LngLat(regionArr[0], regionArr[1]));
            }
          }
        }

        //解析建议词信息
        function suggests(obj) {
          if (obj) {
            //建议词提示，如果搜索类型为公交规划建议词或公交站搜索时，返回结果为公交信息的建议词。
            var suggestsHtml = "建议词提示<ul>";
            for (var i = 0; i < obj.length; i++) {
              suggestsHtml += "<li>" + obj[i].name + "&nbsp;&nbsp;<font style='color:#666666'>" + obj[i].address + "</font></li>";
            }
            suggestsHtml += "</ul>";
            document.getElementById("suggestsDiv").style.display = "block";
            document.getElementById("suggestsDiv").innerHTML = suggestsHtml;
          }
        }

        //解析公交信息
        function lineData(obj) {
          if (obj) {
            //公交提示
            var lineDataHtml = "公交提示<ul>";
            for (var i = 0; i < obj.length; i++) {
              lineDataHtml += "<li>" + obj[i].name + "&nbsp;&nbsp;<font style='color:#666666'>共" + obj[i].stationNum + "站</font></li>";
            }
            lineDataHtml += "</ul>";
            // document.getElementById("lineDataDiv").style.display = "block";
            // document.getElementById("lineDataDiv").innerHTML = lineDataHtml;
          }
        }

        localsearch.search(val);
      },
      open(){

        this.getCity();
        this.getCompanyType();
        this.getCookType();
        this.getScaleType();
        this.getFacility();
        this.dialogStatus = this.viewData.operatorType
        if(this.viewData.operatorType != 'create'){
          this.getView();
        }else{
          this.$nextTick(function() {
            // this.$refs.firstForm.clearValidate();
            // this.$refs.secondForm.clearValidate();
            if(this.map == ''){
              this.onLoad();
            }
          })
        }
      },
      close(){
        this.showViewDialog = false;
        this.activeName='first';
        // this.map= ''; // 对象
        this.zoom= 14; // 地图的初始化级别，及放大比例
        this.centerLatitude='30.20835';//中心纬度
        this.centerLongitude='120.21194';//中心经度
        this.paraLoading=false;
        this.images={};
        this.license={};
        this.companyList=[];
        this.cookList=[];
        this.scaleList=[];
        this.facilityList=[];
        this.cityList=[];
        this.dialogStatus= '';
        this.temp= {
          facility_id:'',
          company:'',
          simple_name:'',
          organization_code:'',
          status:1,
          company_code:'',
          principal:'',
          mobile:'',
          tel:'',
          company_type:'',
          cook_type:'',
          area:'',
          kitchen_range_num:'',
          outlet_num:'',
          scale_type:'',
          city_id:'',
          depart_id:'',
          // street:'',
          address:'',
          images:'',
          license:'',
          remark:'',
          log:'120.21194',
          lat:'30.20835',
          zd_mobile:'',
          zd_people:'',
        };
        // debugger
        // this.$refs.firstForm.clearValidate();
        // debugger
        // this.$refs.secondForm.clearValidate();
        this.$refs.firstForm.clearValidate();
        this.$refs.secondForm.clearValidate();
        // debugger
        console.log(this.temp)
      },
      getCity(){
        cityList({ city_id:getCitySelected(),page:1,pageSize:9999,}).then(res=>{
          this.cityList = res.data.data;
        });
      },
      getFacility(){
        facilityList({ city_id:getCitySelected(), page: 1, pageSize: 99999}).then(res => {
          this.facilityList = res.data.data
        });
      },
      getCompanyType(){
        dicList({  city_id:getCitySelected(),parent_id: 2,
          page: 1,
          pageSize: 9999,}).then(res => {
          this.companyList = res.data.data
        });
      },
      getCookType(){
        dicList({ city_id:getCitySelected(), parent_id: 1,
          page: 1,
          pageSize: 9999,}).then(res => {
          this.cookList = res.data.data
        });
      },
      getScaleType(){
        dicList({ city_id:getCitySelected(), parent_id: 3,
          page: 1,
          pageSize: 9999,}).then(res => {
          this.scaleList = res.data.data
        });
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onLoad() {
        let T = window.T;
        this.map = new T.Map('mapDiv');
        this.centerMap();
      },
      centerMap(){
        this.map.centerAndZoom(new T.LngLat(this.centerLongitude, this.centerLatitude), this.zoom); // 设置显示地图的中心点和级别
        console.log('地图所属');
        console.log(this.map);
        console.log(document.getElementsByClassName("tdt-control-copyright tdt-control"))
        document.getElementsByClassName("tdt-control-copyright tdt-control")[0].style.display = 'none';
        console.log('少时诵诗书')
        console.log(document.getElementsByClassName("tdt-control-copyright tdt-control"))
        //创建标注工具对象
        markerTool = new T.MarkTool(this.map, {follow: true});
        // this.map.addEventListener("click",MapClick);
        // function MapClick(e)
        // {
        //   console.log('11111111')
        //   alert(e.lnglat.getLng()+","+e.lnglat.getLat());
        // }
        //监听点击地图，获取坐标
        // var cp = new T.CoordinatePickup(this.map, {callback: this.getLngLat})
        // cp.addEvent();
        this.positionBtn();
      },
      positionBtn() {
        // centerLatitude:'30.20835',//中心纬度
        // centerLongitude:'120.21194',//中心经度
        this.map.clearOverLays();   //清理地图上的覆盖物
        let marker = new T.Marker(new T.LngLat(this.temp.log,this.temp.lat)); //e.lnglat，标注点的地理坐标
        this.map.addOverLay(marker); //addOverLay方法，将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次。
        marker.addEventListener("dragend", overlay_style); //添加事件监听函数。
        marker.enableDragging(); //开启标注拖拽功能
        let that = this;
        function overlay_style(e) {
          let p = e.target;
          console.log(e)
          axios({
            url:"http://api.tianditu.gov.cn/geocoder",
            method:'get',
            params:{
              tk:"09c212e85ea968b8789e2111963c819a",
              type:"geocode",
              postStr:"{'lon':" +p.getLngLat().lng+",'lat':" +p.getLngLat().lat+",'ver':1}"
            }
          }).then((data)=>{
            // var addressdata = eval("("+data+")");
            //弹出的就是地址信息
            that.temp.address = data.data.result.addressComponent.address
            that.temp.log = data.data.result.location.lon
            that.temp.lat = data.data.result.location.lat
            // alert(addressdata.result.formatted_address);
            // if(addressdata.msg =="ok" && addressdata.status ==0){
            //   //dosomething
            // }else{
            //   //dosomething
            // }
          }).catch((err) => {
            console.log(err)
            // alert("获取失败");
          })
        }
      },
      hasImgSrc(val) {
        this.images = val
        this.temp.images = val.url;
      },
      hasImgSrc1(val) {
        this.license = val
        this.temp.license = val.url;
      },
      getView(){
        companyDetail({id:this.viewData.id, city_id:getCitySelected(),}).then(res=>{
          // zd_mobile、zd_people
          const {id,company, simple_name, organization_code, status,depart_id, company_code, principal, mobile, tel, company_type, cook_type, area,
            kitchen_range_num, outlet_num, scale_type, address, remark,log,lat,credit_code,city_id,zd_mobile,zd_people} = res.data;
          let facility_id = [];
          if(res.data.facility_id){
            facility_id = res.data.facility_id.map(item=>item.facility_id);
          }
          let images = res.data.images_url;
          let license = res.data.license_url;
          this.images = {url:res.data.images_url,images:res.data.images};
          this.license = {url:res.data.license_url,images:res.data.license};
          this.temp = {id,company, simple_name, organization_code, status,depart_id, company_code, principal, mobile, tel, company_type, cook_type, area,
            kitchen_range_num, outlet_num, scale_type, address, images, remark,log,lat,credit_code,city_id,license,facility_id,zd_mobile,zd_people};
          this.centerLongitude = log;
          this.centerLatitude = lat;
          if(this.map == ''){
            this.onLoad();
          }else{
            this.centerMap();
          }
        });
      },
      createData() {
        this.$refs['firstForm'].validate((valid) => {
          if (valid) {
            this.$refs['secondForm'].validate((valid) => {
              if (valid) {
                this.paraLoading = true
                let temp = JSON.parse(JSON.stringify(this.temp));
                temp.images = this.images.images;
                temp.license = this.license.images;
                if(temp.facility_id.length > 0){
                  temp.facility_id = temp.facility_id.join(',');
                }
                addCompany(temp).then((res) => {
                  setTimeout(()=>{
                    this.paraLoading = false
                  },1000)
                  if(res.code == 1) {
                    this.$emit('insertList');
                    this.showViewDialog = false;
                    this.$message({
                      message: res.message,
                      type: 'success'
                    });
                  }
                }).catch(() => {
                  this.paraLoading = false;
                });
              }
            })
          }})
      },
      updateData() {
        this.$refs['firstForm'].validate((valid) => {
          if (valid) {
            this.$refs['secondForm'].validate((valid) => {
              if (valid) {
                this.paraLoading = true
                let temp = JSON.parse(JSON.stringify(this.temp));
                // if(this.images.images){
                //   temp.images = this.images.images;
                // }
                // if(this.license.images){
                //   temp.license = this.license.images;
                // }
                temp.images = this.images.images;
                temp.license = this.license.images;
                if(temp.facility_id.length > 0){
                  temp.facility_id = temp.facility_id.join(',');
                }
                editCompany(temp).then((res) => {
                  setTimeout(()=>{
                    this.paraLoading = false
                  },1000)
                  if(res.code == 1) {
                    this.$emit('insertList');
                    this.showViewDialog = false;
                    this.$message({
                      message: res.message,
                      type: 'success'
                    });
                  }
                }).catch(() => {
                  this.paraLoading = false;
                });
              }
            })
          }})

      },
    }
  }
</script>
<style lang="scss">
  @import './../../../../styles/variables.scss';
  .catering_tab{
    .el-tabs__content{
      height: 65vh;
      overflow: auto;
    }

    .el-tabs__item{
      color: $baseColor;
      &.is-active{
        color: $txtColor;
      }

    }
    .el-tabs__active-bar{
      background-color: $txtColor;
    }
    .el-tabs__nav-wrap::after{
      height: 1px;
      background-color: $baseColor;
    }
  }
</style>
