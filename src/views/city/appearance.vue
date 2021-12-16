<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>

    <div class="left_server clr_white text-center f16 bold border base_bg shadow">
      <div :class="['mb_20',activeIndex == 0 ? 'baseColor':'']" @click="handlePageType(0)">
        <img v-if="activeIndex == 0" src="./../../assets/image/appearance_nav01_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/appearance_nav01.png" class="nav_img"/>
        <p class="nav_txt">AI视频</p>
      </div>
      <div :class="['mb_20',activeIndex == 1 ? 'baseColor':'']" @click="handlePageType(1)">
        <img v-if="activeIndex == 1" src="./../../assets/image/appearance_nav02_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/appearance_nav02.png" class="nav_img"/>
        <p class="nav_txt">油烟监测</p>
      </div>
      <div :class="[activeIndex == 2 ? 'baseColor':'']" @click="handlePageType(2)">
        <img v-if="activeIndex == 2" src="./../../assets/image/appearance_nav03_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/appearance_nav03.png" class="nav_img"/>
        <p class="nav_txt">工地监测</p>
      </div>
    </div>

    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 0">
      <p class="f20 bold txt_linear">智能识别概况（日）</p>
      <div class="text-center">
<!--        <ul class="bold communityNum flex mt_10" style="width: 160px;margin-left: 20px;">-->
<!--          <li class="flex flex-item">-->
<!--            <span class="f26 baseColor block">186</span>-->
<!--            <span class="f16 clr_white block">监控点位</span>-->
<!--          </li>-->
<!--          &lt;!&ndash;<li class="flex flex-item">&ndash;&gt;-->
<!--            &lt;!&ndash;<span class="f26 baseColor block">1</span>&ndash;&gt;-->
<!--            &lt;!&ndash;<span class="f16 clr_white block">监控路段</span>&ndash;&gt;-->
<!--          &lt;!&ndash;</li>&ndash;&gt;-->
<!--        </ul>-->
        <div class="pieChart mt_10">
          <!--              <RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="16vh"></RingChart>-->
          <PieChartTwo :chartData="pieChartOne" :PieChartLegend="PieChartLegend" height="25vh" :divwidth="'50%'"></PieChartTwo>
        </div>
      </div>
      <p class="f20 bold txt_linear mt_20">违规场景概况（日）</p>
      <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="35vh" divwidth="100%"></BarChartFour>

    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 1">
      <p class="f20 bold txt_linear">辖区异常报警数占比分析</p>
      <RingChart :chartData="chartDataFour" :PieChartLegend="PieChartLegend" height="250px"></RingChart>
      <div class="mt_20">
        <p class="f20 bold txt_linear">餐企油烟超标时长分析</p>
<!--        <BarChartFour :chartData="BarData" height="30vh" divwidth="100%"></BarChartFour>-->
        <BarChartFour :chartData="BarData" :BarChartLegend="PieChartLegend" height="35vh" divwidth="100%"></BarChartFour>
      </div>

    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 2">
      <p class="f20 bold txt_linear">工地五色治理</p>
      <div class="flex bold enforcement_num text-center mt_20">
        <div class="flex-item bg_blue01 weui-cell">
          <div class="weui-cell__hd ml_10"><img src="./../../assets/image/appearance_icon01.png"></div>
          <div class="weui-cell__bd">
            <p class="f14">低风险</p>
            <p class="f18 txt_linear mt_5">26</p>
          </div>
        </div>
        <div class="flex-item bg_blue01 weui-cell">
          <div class="weui-cell__hd ml_10"><img src="./../../assets/image/appearance_icon02.png"></div>
          <div class="weui-cell__bd">
            <p class="f14">一般风险</p>
            <p class="f18 txt_linear mt_5">43</p>
          </div>
        </div>
        <div class="flex-item bg_blue01 weui-cell">
          <div class="weui-cell__hd ml_10"><img src="./../../assets/image/appearance_icon03.png"></div>
          <div class="weui-cell__bd">
            <p class="f14">中风险</p>
            <p class="f18 txt_linear mt_5">65</p>
          </div>
        </div>
      </div>
      <div class="flex bold enforcement_num text-center mt_20 reset_w">
        <div class="flex-item bg_blue01 weui-cell">
          <div class="weui-cell__hd ml_10"><img src="./../../assets/image/appearance_icon04.png"></div>
          <div class="weui-cell__bd">
            <p class="f14">较高风险</p>
            <p class="f18 txt_linear mt_5">33</p>
          </div>
        </div>
        <div class="flex-item bg_blue01 weui-cell">
          <div class="weui-cell__hd ml_10"><img src="./../../assets/image/appearance_icon05.png"></div>
          <div class="weui-cell__bd">
            <p class="f14">高风险</p>
            <p class="f18 txt_linear mt_5">14</p>
          </div>
        </div>
      </div>
      <div class="clr_white mt_20">
        <p class="f20 bold txt_linear">工地一件事</p>
<!--        <BarChartFour :chartData="BarDataThree" :BarChartLegend="PieChartLegend" height="25vh" divwidth="100%"></BarChartFour>-->
        <RingChartHover :chartData="chartDataFive" :PieChartLegend="PieChartLegend" height="300px"></RingChartHover>
      </div>
<!--      <div class="mt_20">-->
<!--        <p class="f20 bold txt_linear">社会监督</p>-->
<!--        <div class="bg_blue01 text-center p20 mt_10">-->
<!--          <div class="flex">-->
<!--            <div class="flex-item">-->
<!--              <p>社会关注度</p>-->
<!--              <p class="f26 bold txt_linear LH_2">65562</p>-->
<!--              <p class="baseColor">较昨日 <i class="el-icon-bottom"></i>6.6%</p>-->
<!--            </div>-->
<!--            <div class="flex-item">-->
<!--              <p>投诉建议</p>-->
<!--              <p class="f26 bold txt_linear LH_2">699</p>-->
<!--              <p class="baseColor">已处理596</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex mt_20">-->
<!--            <div class="flex-item">-->
<!--              <p>信访统计</p>-->
<!--              <p class="f26 bold txt_linear LH_2">337</p>-->
<!--            </div>-->
<!--            <div class="flex-item">-->
<!--              <p>平安问答</p>-->
<!--              <p class="f26 bold txt_linear LH_2">65562</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

    </div>

<!--    <div class="center_content clr_white text-center" v-if="activeIndex == 0">-->
<!--      <div class="map_intro f14 bold flex baseColor weui-cell">-->
<!--        <div class="weui-cell__hd flex"><img src="./../../assets/image/point36.png"/></div>-->
<!--        <div class="weui-cell__bd">AI视频</div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="center_content clr_white text-center" v-if="activeIndex == 1&&yyMapType == 1">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showYyType==0?'active':'']" @click="handleYyPointType(0)">
        <div class="weui-cell__hd flex">
          <img v-if="showYyType!=0" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showYyType==0?'clr_white':'']">全部</div>
      </div>
      <div :class="['map_intro','map_intro_yy','f14','bold','flex','baseColor','weui-cell',showYyType==1?'active':'']" @click="handleYyPointType(1)">
        <div class="weui-cell__hd flex">
          <img v-if="showYyType!=1" src="./../../assets/image/point_yy_01.png"/>
          <img v-else src="./../../assets/image/point_yy_active.png"/>
          </div>
        <div :class="['weui-cell__bd',showYyType==1?'clr_white':'']">正常</div>
      </div>
      <div :class="['map_intro','map_intro_yy','f14','bold','flex','baseColor','weui-cell',showYyType==4?'active':'']" @click="handleYyPointType(4)">
        <div class="weui-cell__hd flex">
          <img v-if="showYyType!=4" src="./../../assets/image/point_yy_04.png"/>
          <img v-else src="./../../assets/image/point_yy_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showYyType==4?'clr_white':'']">报警</div>
      </div>
      <div :class="['map_intro','map_intro_yy','f14','bold','flex','baseColor','weui-cell',showYyType==3?'active':'']" @click="handleYyPointType(3)">
        <div class="weui-cell__hd flex">
          <img v-if="showYyType!=3" src="./../../assets/image/point_yy_03.png"/>
          <img v-else src="./../../assets/image/point_yy_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showYyType==3?'clr_white':'']">故障</div>
      </div>
      <div :class="['map_intro','map_intro_yy','f14','bold','flex','baseColor','weui-cell',showYyType==2?'active':'']" @click="handleYyPointType(2)">
        <div class="weui-cell__hd flex">
          <img v-if="showYyType!=2" src="./../../assets/image/point_yy_02.png"/>
          <img v-else src="./../../assets/image/point_yy_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showYyType==2?'clr_white':'']">离线</div>
      </div>
    </div>
    <div class="center_content clr_white text-center" v-if="activeIndex == 2&&gdMapType == 1">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showGdType==1?'active':'']" @click="handleGdPointType(1)">
        <div class="weui-cell__hd flex">
          <img v-if="showGdType!=1" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showGdType==1?'clr_white':'']">全部阶段</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showGdType==2?'active':'']" @click="handleGdPointType(2)">
        <div class="weui-cell__hd flex">
          <img v-if="showGdType!=2" src="./../../assets/image/point53.png"/>
          <img v-else src="./../../assets/image/point53_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showGdType==2?'clr_white':'']">竣工阶段</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showGdType==3?'active':'']" @click="handleGdPointType(3)">
        <div class="weui-cell__hd flex">
          <img v-if="showGdType!=3" src="./../../assets/image/point54.png"/>
          <img v-else src="./../../assets/image/point53_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showGdType==3?'clr_white':'']">施工阶段</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showGdType==4?'active':'']" @click="handleGdPointType(4)">
        <div class="weui-cell__hd flex">
          <img v-if="showGdType!=4" src="./../../assets/image/point55.png"/>
          <img v-else src="./../../assets/image/point53_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showGdType==4?'clr_white':'']">准备阶段</div>
      </div>
    </div>

    <div class="top_div flex clr_white text-center" v-if="activeIndex == 0">
      <div class="flex f20 bold mr_20 border shadow">
        <div class="baseColor">案件情况</div>
        <div class="">
          案件总数
          <span class="txt_linear f22">{{totalData.count}}</span>
        </div>
        <div class="">
          立案数
          <span class="txt_linear f22">{{totalData.isAudited}}</span>
        </div>
      </div>
      <div class="flex f20 bold border shadow">
        <div class="baseColor">视频</div>
        <div class="">
          AI视频
          <span class="txt_linear">{{AIVideo_num}}</span>
        </div>
      </div>
    </div>
    <div class="top_div flex clr_white text-center" v-if="activeIndex == 1">
      <div class="flex f20 bold mr_20 border shadow" @click="getYyPoint(1)">
        <div class="baseColor">设备管理</div>
        <div class="">
          报警数
          <span class="txt_linear f22">{{yyFacilityNum.super}}</span>
        </div>
        <div class="">
          正常数
          <span class="txt_linear f22">{{yyFacilityNum.normal}}</span>
        </div>
        <div class="">
          离线数
          <span class="txt_linear f22">{{yyFacilityNum.off}}</span>
        </div>
        <div class="">
          故障数
          <span class="txt_linear f22">{{yyFacilityNum.trouble}}</span>
        </div>
      </div>
      <div class="flex f20 bold border shadow" @click="getYyPoint(2)">
        <div class="baseColor">视频</div>
        <div class="">
          普通视频
          <span class="txt_linear f22">{{commonVideo_num}}</span>
        </div>
      </div>
    </div>
    <div class="top_div flex clr_white text-center" v-if="activeIndex == 2">
      <div class="flex f20 bold mr_20 border shadow" @click="getGdPoint(1)">
        <div class=" baseColor">工地概览</div>
        <div class="">
          总数
          <span class="txt_linear f22">32</span>
        </div>
        <div class="">
          准备阶段
          <span class="txt_linear f22">12</span>
        </div>
        <div class="">
          施工阶段
          <span class="txt_linear f22">10</span>
        </div>
        <div class="">
          竣工阶段
          <span class="txt_linear f22">10</span>
        </div>
      </div>
      <div class="flex f20 bold border shadow" @click="getGdPoint(2)">
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
<!--    <companyView :showDialog.sync="showViewDialog" :viewData="companyData"></companyView>-->


    <div class="search_result" v-show="showViewDialog">
      <i class="el-dialog__close el-icon el-icon-close f18 block fr close_search" @click="closeCompany"></i>
      <div class="view_tab flex text-center">
        <div :class="['flex-item',activeId == 0 ? 'active':'']" data-id="0" @click="handleTab(0)">实时工况</div>
        <div :class="['flex-item',activeId == 1 ? 'active':'']" data-id="1" @click="handleTab(1)">趋势曲线</div>
        <div :class="['flex-item',activeId == 2 ? 'active':'']" data-id="2" @click="handleTab(2)">企业信息</div>
        <div :class="['flex-item',activeId == 3 ? 'active':'']" data-id="3" @click="handleTab(3)">设备信息</div>
      </div>
      <div v-show="activeId == 0">
        <div class="flex baseColor">
          <el-form style="flex: 3">
            <el-form-item label="餐企名称：">{{companyInfo.company}}</el-form-item>
            <el-form-item label="检测状态："><span :class="aaclass">{{companyStatus}}</span></el-form-item>
            <el-form-item label="监测时间：">{{realTimeInfo?realTimeInfo.addtime:''}}</el-form-item>
          </el-form>
          <div style="flex: 5">
            <div class="table_title text-center">污染物排放情况（mg/m3）</div>
            <el-table v-loading="polluteListLoading" :data="polluteList" element-loading-text="拼命加载中" fit ref="tableList" border class="table_noBg table_tdNoBg">
              <el-table-column label="污染物类型" align="center" prop="name"></el-table-column>
              <el-table-column label="实测值" align="center" prop="val"></el-table-column>
              <el-table-column label="状态" align="center" prop="status"></el-table-column>
            </el-table>
          </div>

        </div>
        <div class="flex mt_20">
          <ul class="clr_white flex view_ul text-center" style="flex: 3">
            <li class="flex-item">
              <div class="bg_yellow">
                <i class="iconfont icon-wendu f26"></i>
                <p>温度</p>
              </div>
              <p class="num">{{realTimeInfo?realTimeInfo.temperature:''}}℃</p>
            </li>
            <!--           <li class="flex-item">-->
            <!--             <div class="bg_blue">-->
            <!--               <i class="iconfont icon-wenshidu1 f26"></i>-->
            <!--               <p>湿度</p>-->
            <!--             </div>-->
            <!--             <p class="num">{{realTimeInfo?realTimeInfo.wind_speed:''}}rh</p>-->
            <!--           </li>-->
            <li class="flex-item">
              <div class="bg_green">
                <i class="iconfont icon-fengsu f26"></i>
                <p>风速</p>
              </div>
              <p class="num">{{realTimeInfo?realTimeInfo.wind_speed:''}}m/s</p>
            </li>
            <li class="flex-item">
              <div class="bg_purple">
                <i class="iconfont icon-zaosheng f26"></i>
                <p>噪声</p>
              </div>
              <p class="num">{{realTimeInfo?realTimeInfo.noise:''}}Hz</p>
            </li>
          </ul>
          <div style="flex: 5">
            <div class="table_title text-center">设备情况</div>
            <el-table v-loading="polluteSListLoading" :data="polluteSList" element-loading-text="拼命加载中" fit border ref="tableList" class="table_tdNoBg">
              <el-table-column label="设备类型" align="center" prop="name"></el-table-column>
              <el-table-column label="状态" align="center" prop="status"></el-table-column>
            </el-table>
          </div>

        </div>
      </div>
      <div v-if="activeId == 1">
        <div class="f16 txtColor text-center">
          <span class="m_r30">餐企名称：{{companyInfo.company}}</span>
          <span>设备名称：{{facilityInfo.name}}</span>
        </div>
        <div class="bg_shadow mt_20 p20 line_chart">
          <p class="f14 txtColor text-center mt_10 mb_10">最近24小时污染物排放情况</p>
          <LineChart :chartData="lineData" :BarChartLegend="PieChartLegend" height="25vh" divwidth="100%"></LineChart>
        </div>
      </div>
      <table v-if="activeId == 2" class="company_table f14">
        <tr>
          <td class="baseColor">餐企名称</td>
          <td class="txtColor">{{companyInfo.company}}</td>
          <td class="baseColor">餐企简称</td>
          <td class="txtColor">{{companyInfo.simple_name}}</td>
          <td class="baseColor">信用代码</td>
          <td class="txtColor">{{companyInfo.credit_code}}</td>
        </tr>
        <tr>
          <td class="baseColor">组织机构码</td>
          <td class="txtColor">{{companyInfo.organization_code}}</td>
          <td class="baseColor">企业状态</td>
          <td class="txtColor">{{companyInfo.status | filtersCompanyStatus}}</td>
          <td class="baseColor">企业编码</td>
          <td class="txtColor">{{companyInfo.company_code}}</td>
        </tr>
        <tr>
          <td class="baseColor">负责人</td>
          <td class="txtColor">{{companyInfo.principal}}</td>
          <td class="baseColor">手机号码</td>
          <td class="txtColor">{{companyInfo.mobile}}</td>
          <td class="baseColor">餐企电话</td>
          <td class="txtColor">{{companyInfo.tel}}</td>
        </tr>
        <tr>
          <td class="baseColor">餐企类型</td>
          <!--          <td class="txtColor">{{ filterType(companyType,companyInfo.company_type)}}</td>-->
          <td class="txtColor">{{companyInfo.company_type_name}}</td>
          <td class="baseColor">菜系</td>
          <!--          <td class="txtColor">{{filterType(cookList,companyInfo.cook_type)}}</td>-->
          <td class="txtColor">{{companyInfo.cook_type_name}}</td>
          <td class="baseColor">营业面积</td>
          <td class="txtColor">{{companyInfo.area}}</td>
        </tr>
        <tr>
          <td class="baseColor">灶头数量</td>
          <td class="txtColor">{{companyInfo.kitchen_range_num}}</td>
          <td class="baseColor">排口数量</td>
          <td class="txtColor">{{companyInfo.outlet_num}}</td>
          <td class="baseColor">餐企规模</td>
          <!--          <td class="txtColor">{{filterType(scaleList,companyInfo.scale_type)}}</td>-->
          <td class="txtColor">{{companyInfo.scale_type_name}}</td>
        </tr>
        <tr>
          <td class="baseColor">所属辖区</td>
          <!--          <td class="txtColor">{{filterType(cityList,companyInfo.city_id)}}</td>-->
          <td class="txtColor">{{companyInfo.city_id_name}}</td>
          <td class="baseColor">所属分组</td>
          <td class="txtColor" colspan="3"></td>
        </tr>
        <tr>
          <td class="baseColor">所属来源</td>
          <td class="txtColor">{{companyInfo.depart_id | filtersCompanySource}}</td>
          <td class="baseColor">中队负责人</td>
          <td class="txtColor">{{companyInfo.zd_people}}</td>
          <td class="baseColor">负责人电话</td>
          <td class="txtColor">{{companyInfo.zd_mobile}}</td>
        </tr>
        <tr>
          <td class="baseColor">详细地址</td>
          <td class="txtColor" colspan="5">{{companyInfo.address}}</td>
        </tr>
      </table>
      <table v-if="activeId == 3" class="company_table equipment_table f14 mb_20">
        <tr>
          <td class="baseColor">设备名称</td>
          <td class="txtColor">{{facilityInfo.name}}</td>
          <td class="baseColor">设备型号</td>
          <td class="txtColor">{{facilityInfo.version}}</td>
        </tr>
        <tr>
          <td class="baseColor">设备编号</td>
          <td class="txtColor">{{facilityInfo.facility_no}}</td>
          <td class="baseColor">设备IMEI</td>
          <td class="txtColor">{{facilityInfo.imei}}</td>
        </tr>
        <tr>
          <td class="baseColor">生产厂家</td>
          <td class="txtColor">{{facilityInfo.product}}</td>
          <td class="baseColor">安装日期</td>
          <td class="txtColor">{{facilityInfo.start_time}}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
  import wgs84_to_gcj02 from "@/utils/gcj02towgs84";
  import echarts from 'echarts'
  import RingChart from '@/components/Charts/RingChart'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import RingChartHover from '@/components/Charts/RingChartHover'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point36.png' // 引入刚才的map.js 注意路径
  import point02 from '@/assets/image/point_yy_01.png' // 引入刚才的map.js 注意路径
  import point03 from '@/assets/image/point_yy_02.png' // 引入刚才的map.js 注意路径
  import point04 from '@/assets/image/point_yy_03.png' // 引入刚才的map.js 注意路径
  import point05 from '@/assets/image/point_yy_04.png' // 引入刚才的map.js 注意路径
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import {getAllVideoPoint, pointList,getNowurl} from '@/api/system'
  import {analysisData,departOfWarn,timesOfWarn,getFacilityAll,companyDetail,facilityDetail,realTime,trend} from '@/api/appearance'
  import global from "@/utils/common";
  export default {
    name: 'appearance',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo,RingChartHover},
    data() {
      return {
        activeId:'',
        showViewDialog:false,
        companyData:{},
        yyMapType:1,
        gdMapType:1,
        showGdType:1,
        showYyType:0,
        activeIndex:0,
        // pieChartOne:{
        //   color: ['#75E4E3', '#E5AF45', '#9941E2'],
        //   // 预警值 环中的数据显示
        //   title: {
        //     text: '预警量',
        //     top: '38%',
        //     subtext: '',
        //     textStyle: {
        //       color: '#f2f2f2',
        //       fontSize: 20,
        //       align: 'center'
        //     },
        //     subtextStyle: {
        //       fontSize: 20,
        //       color: ['#fff'],
        //       align: 'center'
        //     },
        //     x: '50%',
        //     y: 'center',
        //     textAlign: 'center'
        //   },
        //   // 中心的文字
        //   graphic: {
        //     type: 'text',
        //     top: '55%',
        //     left: '45%',
        //     style: {
        //       color: '#f2f2f2',
        //       text: '10',
        //       textAlign: 'center',
        //       fill: '#f2f2f2',
        //       fontSize: 10,
        //       fontWeight: 700
        //     },
        //   },
        //   // 图表的位置和大小是由grid控制的
        //   grid: {
        //     top: 10,
        //     bottom: 10,
        //     left: 10,
        //     right: 10
        //   },
        //
        //   series: [// 主要展示层的
        //     {
        //       name: '',
        //       radius: ['50%', '65%'],
        //       center: ['50%', '50%'],
        //       type: 'pie',
        //       data: [{ value: 80, name: '通过' },
        //         { value: 20, name: '待审核' },
        //         { value: 30, name: '不通过' }],
        //       labelLine: {
        //         normal: {
        //           show: false,
        //           length1:'0',
        //           length2:'0',
        //         }
        //       },
        //       label: { //对标签中 显示的文字进行设置
        //         color: 'white',
        //         position: 'outside',
        //         normal: {
        //           // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        //           formatter: '{a|{b}}\n{hr|}\n{per|{d}%}',
        //           padding: [10, 15],
        //           backgroundColor: '#387993',
        //           borderRadius: 5,
        //           rich: {
        //             a: {
        //               color: 'white',
        //               fontSize: 15,
        //               lineHeight: 20,
        //               align: 'left'
        //             },
        //             hr: {
        //               width: '100%',
        //               height: 0,
        //               alien: 'left'
        //             },
        //             per: {
        //               color: '#fff',
        //               align: 'left',
        //               fontSize: 15,
        //             }
        //           }
        //         },
        //       },
        //     },
        //     {
        //       name: '',
        //       type: 'gauge',
        //       center: ['50%', '50%'],
        //       // radius: ['80%', '90%'],
        //       radius: '90%',
        //       startAngle: 0,
        //       endAngle: 359.9,
        //       splitNumber: 99,
        //       hoverAnimation: true,
        //       axisTick: {
        //         show: false
        //       },
        //       splitLine: {
        //         length: 13,
        //         lineStyle: {
        //           width: 1,//最外层光圈的粗细
        //           color: '#5692BC'// 最外层光圈颜色宽度
        //         }
        //       },
        //       title: {
        //         show: false
        //       },
        //       axisLabel: {
        //         show: false
        //       },
        //       pointer: {
        //         show: false
        //       },
        //       axisLine: {
        //         lineStyle: {
        //           opacity: 0
        //         }
        //       },
        //       detail: {
        //         show: false
        //       },
        //       data: [{ value: 80, name: '违规立案' },
        //         { value: 20, name: '待审核' },
        //         { value: 30, name: '违规不立案' }],
        //     },
        //     {
        //       name: '',
        //       type: 'pie',
        //       radius: ['90%', '100%'],
        //       center: ['77%', '50%'],
        //       silent: true,
        //       z: 0,
        //       zlevel: 0,
        //       showVal: true,
        //       label: {
        //         normal: {
        //           show: false,
        //           position: 'center'
        //         }
        //       },
        //       itemStyle: {
        //         normal: {
        //           // 定制显示（按顺序）最外层光环色值
        //           color: function (params) {
        //             var colorList = []
        //             return colorList[params.dataIndex]
        //           }
        //         }
        //       },
        //       data: []
        //     }
        //   ],
        // },
       pieChartOne:{
         title: {},
         tooltip: {
           trigger: 'item',
           formatter: '{b} : {c} ({d}%)'
         },
         // legend: {
         //   left: 'center',
         //   top: 'bottom',
         //   data: ['未审核', '审核未通过', '审核通过',]
         // },
         toolbox: {
           show: true,
           feature: {
             mark: {show: true},
             dataView: {show: true, readOnly: false},
             magicType: {
               show: true,
               type: ['pie', 'funnel']
             },
             restore: {show: true},
             saveAsImage: {show: true}
           }
         },
         series: [
           {
             name: '',
             type: 'pie',
             radius: '75%',
             // radius: [30, 110],
             center: ['50%', '50%'],
             roseType: 'radius',
             color:['rgb(61,253,206)','rgb(206,171,255)','rgb(0,242,254)'],
             label: {
               normal: {
                 show: true,
                 formatter: "{b} {d}%",
                 textStyle: {
                   fontSize: 14,
                   color: "#fff"
                 },
               },
             },
             data: []
           }
         ]
       },
        chartData: {
          title:{},
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: true,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: []
            }
          ]
        },
        chartDataThree: {
          title:{},
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          color:['#367CFD','#E20280'],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['70%', '90%'],
              avoidLabelOverlap: true,
              label: {
                show: false,
                position: 'center',

              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 520, name: '直接访问'},
                {value: 205, name: '邮件营销'},
              ]
            }
          ]
        },
        PieChartLegend:[],
        BarData:{
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
            bottom: '40',
            top: '50',
            containLabel: true
          },
          //----------------   图例 legend  -----------------
          legend: {show:false},

          xAxis: [
            {
              axisTick: {
                show:false,
                alignWithLabel: false
              },
              axisLabel: {
                show: true,
                rotate:40,
                textStyle: {
                  color: '#fff',
                  fontSize:'12',
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'category',
              data: []
            }
          ],
          yAxis: [
            {
              splitArea:{show: false},
              axisTick: {
                show:false,
                alignWithLabel: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize:'15',
                  fontWeight:'bold'
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'value'
            }
          ],
          series: [
            {
              name:'超标时长',
              type: 'bar',
              barWidth: 20,//柱图宽度
              barGap:'50%',
              // barCategoryGap:'100%',/*多个并排柱子设置柱子之间的间距*/
              itemStyle: {
                normal: {
                  // color:'#00A0EB'
                  // 13,24,46
                  color:new echarts.graphic.LinearGradient(0, 1, 0, 0,
                    [
                      { offset: 1, color: 'rgba(63,247,203,1)' },
                      { offset: 0, color: 'rgb(13,24,46)' },
                      { offset: 0.4, color: 'rgba(63,247,203,1)' },
                    ]
                  ),
                }
              },
              data: []
            }
          ]
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
            right: '30',
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
                  let val="";
                  if(params.length >6){
                    val = params.substr(0,6)+'...';
                    return val;
                  }else{
                    return params;
                  }
                },
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
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [
                      { offset: 1, color: 'rgba(1,221,235,1)' },
                      { offset: 0, color: 'rgba(1,221,235,0)' },
                    ]
                  ),
                  label: {
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
              data: [ ]
            },
          ]
        },
        BarDataThree:{
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
                  fontSize:'15',
                  fontWeight:'bold'
                }
              },
              splitLine: { show: false },//去除网格线
              type: 'category',
              data:['出店经营','无照商贩','占道经营','乱堆物料','非机动车违停']
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
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [
                      { offset: 0, color: 'rgba(255,183,102,1)' },
                      { offset: 1, color: 'rgba(252,187,112,1)' }
                    ]
                  ),
                  label: {
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
              data: [320, 332, 301,230,56,]
            },
          ]
        },
        chartDataFour: {
          title:{},
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          color:['rgb(57,229,189)','rgba(206,171,255,1)','rgba(0,242,254,1)'],
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['40%', '60%'],
              avoidLabelOverlap: true,
              // label: {
              //   show: false,
              //   position: 'center',
              //
              // },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '14',
                }
              },
              // labelLine: {
              //   show: false
              // },
              markLine :{
                label  :{
                  show:true,
                  position :'outside'
                },
              },
              labelLine:{
                normal:{
                  lineStyle: {
                    color: '#fff'
                  },
                  length:10,
                  length2 :20,
                }
              },
              label :{
                // formatter: [
                //   '{c}',
                //   '{b}',
                //   '{d}'
                // ].join('\n'),
                // formatter: '{c} ({d}%)\n{b}',
                formatter: '{b}：{c} ({d}%)',
                verticalAlign :'bottom',
                position:'outside',
                textShadowOffsetY :10,
                align :'right',
                color:'white',
                // height :60,
                // lineHeight:30,
                fontSize:'14',
                rich: {
                  a: {
                    // verticalAlign:'bottom',
                    // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
                  }
                }
              },
              data: []
            }
          ]
        },
        chartDataFive:{
          title: {
            zlevel: 0,
            text: [
              '1788',
              '{name|申请次数}',
            ].join('\n'),
            rich: {
              value: {
                color: '#fff',
                fontSize: 40,
                fontWeight: 'bold',
                lineHeight: 40,
              },
              name: {
                color: '#fff',
                lineHeight: 20
              },
            },
            top: '36%',
            left: '49%',
            textAlign: 'center',
            textStyle: {
              rich: {
                value: {
                  color: '#fff',
                  fontSize: '50',
                  fontWeight: 'bold',
                  lineHeight: 40,
                },
                name: {
                  color: '#fff',
                  lineHeight: 20
                },
              },
            },
          },
          tooltip: { // 悬停指示
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
          },
          legend: {
            type: 'plain',
            orient: 'horizontal',
            // x: 'right',
            data: ['过程验收','工验收','安全考评','完工评价','危大备案','机械登记','拆卸告知'],
            // itemGap: 30,
            left: 'center',
            bottom:'bottom',
            // top: 'middle',
            // align: 'left',
            icon: 'circle',
            textStyle:{
              color:'#fff'
            },
            formatter: function (name) {
              return name;
            }
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['45%', '65%'],
              center: ['50%', '43%'],
              stillShowZeroSum: false,
              avoidLabelOverlap: true,
              zlevel: 1,
              label: {
                labelLine:{
                  show:false
                },
                normal: {
              //     padding: [30, 30, 30, 30],
              //     backgroundColor: '#fff',
                  show: false,
              //     position: 'center',
              //     formatter: [
              //       '{value|￥{c}}',
              //       '{name|{b}}'
              //     ].join('\n'),
              //     rich: {
              //       value: {
              //         color: '#303133',
              //         fontSize: 40,
              //         fontWeight: 'bold',
              //         lineHeight: 40,
              //       },
              //       name: {
              //         color: '#909399',
              //         lineHeight: 20
              //       },
              //     },
              //   },
              //   emphasis: {
              //     show: true,
              //     textStyle: {
              //       fontSize: '16',
              //       fontWeight: 'bold'
              //     }
                }
              },
              // ['过程验收','工验收','安全考评','完工评价','危大备案','机械登记','拆卸告知'],
              data: [{value: 320, name: '过程验收'},
                {value: 86, name: '工验收'},
                {value: 206, name: '安全考评'},
                {value: 80, name: '完工评价'},
                {value: 244, name: '危大备案'},{value: 689, name: '机械登记'},{value: 163, name: '拆卸告知'}]
            }
          ],
          color: ['rgb(0,242,254)','rgb(255,82,52)','rgb(247,212,66)','rgb(247,185,66)','rgb(62,252,128)','#8122fe','rgb(61,253,206)']
        },
        map: '', // 对象
        pointList:[],
        yyList:[],
        gdList:[],
        AIVideo_num:'',
        commonVideo_num:'',
        yyFacilityNum:{},
        showVideoDialog:false,
        playVideoUri:'',
        player: null,
        offectNum:1,
        totalData:{},
        companyName:'',
        realTimeInfo:{},
        aaclass:'55',
        companyStatus:"",
        polluteSListLoading:false,
        polluteSList:[{
          name:'净化器',
          val:'',
        },{
          name:'风机',
          val:'',
        }],
        polluteListLoading:false,
        polluteList:[{
          name:'油烟浓度',
          val:'',
          status:''
        }],
        companyInfo:{},
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
          legend:{
            textStyle:{
              fontSize:15,
              color: '#5EF4F9'
            },
            // data:['TVOC','油烟浓度']
            data:['油烟浓度']
          },
          xAxis: {
            splitArea : {show :  false }, //保留网格区域
            // show:false,
            axisLine: {
              show: false,
            },
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
            splitLine: {
              show: false,
              textStyle: {
                color: 'rgba(16,54,123,1)',
                fontSize:'15',
                fontWeight:'bold'
              }
            },//去除网格线
            boundaryGap: false, // 不留白，从原点开始
            type: 'category',
            data: []
          },
          yAxis: {
            splitArea : {show :  false }, //保留网格区域
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#26CBE2',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            splitLine: {
              show: false,//去除网格线
              textStyle: {
                color: '#08245F',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            type: 'value'
          },
          series: [
            //   {
            //   name:'TVOC',
            //   symbol:'circle',
            //   symbolSize:8,
            //   color:'#CC3275',
            //   itemStyle : {
            //     normal : {
            //       lineStyle:{
            //         color:'#CC3275',
            //         borderColor:'#CC3275'
            //       }
            //     }
            //   },
            //   areaStyle:{
            //     normal:{
            //       //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //         offset: 0,
            //         color: 'rgba(204,50,117,0.5)'
            //       }, {
            //         offset: .2,
            //         color: 'rgba(204,50,117,0.5)'
            //       },{
            //         offset: 1,
            //         color: 'rgba(204,50,117,0)'
            //       }])
            //
            //     }
            //   },//区域颜色渐变
            //   data: [],
            //   type: 'line'
            // },
            {
              name:'油烟浓度',
              symbol:'circle',
              symbolSize:8,
              color:'#E39915',
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#E39915',
                    borderColor:'#E39915'
                  }
                }
              },
              areaStyle:{
                normal:{
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(227,153,21,0.5)'
                  }, {
                    offset: .2,
                    color: 'rgba(227,153,21,0.5)'
                  },{
                    offset: 1,
                    color: 'rgba(227,153,21,0)'
                  }])

                }
              },//区域颜色渐变
              data: [],
              type: 'line'
            }]
        },
      }
    },

    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
    },
    filters: {
      filtersStatus: function (value) {
        let StatusArr = {1: '正常', 2: '关闭'}
        return StatusArr[value]
      },
      filtersCompanyStatus: function (value) {
        let StatusArr = {1: '正常', 2: '禁用'}
        return StatusArr[value]
      },
      filtersCompanySource: function (value) {
        let StatusArr = {1: '浦沿中队', 2: '长河中队', 3: '西兴中队'}
        return StatusArr[value]
      },
    },
    mounted() {
      // 挂载完成后渲染地图
      // this.$nextTick(function() {
      //
      // })
      this.onLoad();
      this.getList();
      this.getAIData();
      window.handleVideo = this.handleVideo;
      window.closeVideoDialog = this.handleVideoClose;
      this.initPlayer();
      window.handleView = this.handleView;
    },
    methods: {
      handleTab(val){
        this.activeId = val;
      },
      // 辖区报警次数占比分析
      getYyPie(){
        departOfWarn({ start_time:'', end_time:'',}).then(res => {
          let pieArr = res.data.map(item=>{
            return {name:item.x_name,value:item.y_count}
          });
          this.chartDataFour.series[0].data = pieArr;
          // this.chartDataFour.series[0].data = [{name:'西兴中队',value:2},{name:'西兴中队2',value:0},{name:'西兴中队3',value:0}];
        });
      },
      getYyBar(){
        timesOfWarn({ start_time:'', end_time:'',}).then(res => {
          let arr = res.data;
          arr.sort((old,New)=>{
            return New.y_count-old.y_count
          })
          let barArrName = arr.map(item=>{
            return item.x_name;
          });
          let barArrData = arr.map(item=>{
            return item.y_count;
          });
          this.BarData.xAxis[0].data = barArrName;
          this.BarData.series[0].data = barArrData;
        });
      },
      getYyPointList(type){
        getFacilityAll({ class:type}).then(res => {
          this.yyFacilityNum={
            normal:res.data.normal,
            off:res.data.off,
            super:res.data.super,
            trouble:res.data.trouble,
          }
          this.yyList = res.data.list
          this.mapPoint(this.yyList,'yy');
        });
      },

      //AI图表数据
      getAIData(){
        analysisData({day_time:''}).then(res => {
          //今日识别统计
          this.totalData = res.data.total;
          this.pieChartOne.series[0].data = [{
            name:'未审核',value:res.data.total.audited
            // name:'未审核',value:356
          },{
            name:'审核未通过',value:res.data.total.isNotAudited
            // name:'审核未通过',value:0
          },{
            name:'审核通过',value:res.data.total.isAudited
            // name:'审核通过',value:1
          }];
          //违规类型分析
          let  categoryArr = [];
          let category_x = [];
          let category_y = [];
          res.data.category.map((item,index)=>{
            if(index<10){
              // category_x.push(item.x_name);
              // category_y.push(item.y_count);
              categoryArr.push(item);
            }
          })
          categoryArr.sort((old,New)=>{
            return old.y_count - New.y_count
          })
          category_x = categoryArr.map(item=>{return item.x_name});
          category_y = categoryArr.map(item=>{return item.y_count});
          this.BarDataTwo.yAxis[0].data = category_x;
          this.BarDataTwo.series[0].data = category_y;
        });
      },
      handleGdPointType(val){
        this.showGdType = val;
      },
      getGdPoint(val){
        this.gdMapType = val;
        if(val == 1){
          this.map.clearOverLays();
          this.mapPoint(this.gdList,'gd');
        }else{
          this.getVideo();
        }
      },
      getYyPoint(val){
        this.yyMapType = val;
        if(val == 1){
          this.map.clearOverLays();
         this.getYyPointList('');
        }else{
          this.map.clearOverLays();
          this.getYyPointList('');
          this.getVideo();
        }
      },
      handleYyPointType(type){
        this.map.clearOverLays();
        this.showYyType = type
        if(type == 0){
          this.getYyPointList('')
        }else{
          this.getYyPointList(type)
        }
      },
      handleMapType(type){
        if(type == 1){//获取设备点位
          this.getList();
        }else if(type == 2){//获取视频点位
          this.getVideo();
        }
      },
      handlePageType(val){
        this.map.clearOverLays();
        this.activeIndex = val;
        if(val == 0){
          this.getList();
          this.getAIData();
        }else if(val == 2){
          this.getVideoNum();
          // this.yyMapType = val;
          if(this.gdMapType == 1){
            this.mapPoint(this.gdList,'gd');
          }else{
            this.getVideo();
          }
        }else{
          this.getVideoNum();
          this.getYyPie();
          this.getYyBar();
          if(this.yyMapType == 1){
            this.map.clearOverLays();
            this.getYyPointList('');
          }else{
            this.map.clearOverLays();
            this.getYyPointList('');
            this.getVideo();
          }

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
      mapPoint(list,type){
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
        let markers = [];
        for (let i = 0; i < list.length; i++) {
          // var marker
          if(type == 'yy'){
            let point = new T.LngLat(list[i].log,list[i].lat);
            if(list[i].status == 1){ // 正常
              markers[i]  = drawTMaker(point, icon02,this,list[i]);
            }else if(list[i].status == 2){//离线
              markers[i]  = drawTMaker(point, icon03,this,list[i]);
            }else if(list[i].status == 3){//故障
              markers[i]  = drawTMaker(point, icon04,this,list[i]);
            }else if(list[i].status == 4){//报警
              markers[i]  = drawTMaker(point, icon05,this,list[i]);
            }

          }else{

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
            if(type == 'yy'){
              let yyStstus;
              if(txt.status ==1){
                yyStstus = '正常';
              }else if(txt.status ==4){
                yyStstus = '报警';
              }else if(txt.status ==3){
                yyStstus = '故障';
              }else if(txt.status ==2){
                yyStstus = '离线';
              }
              let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
              // '<p class="f14 time">名称：' + txt.name + '</p>' +
              // '<p class="f14 time">状态：' + txt.status + '</p>' +
              // '<p class="f14 time">地址：' + txt.address + '</p>' +
              sContent =
                '<div class="point_info">' +
                '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
                '<tr>' +
                '<td class="txt_6">名称</td><td style="white-space:nowrap;">' + txt.name + '</td>' +
                '</tr>'+
                '<tr>' +
                '<td>状态</td><td>' + yyStstus + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>餐企名称</td><td>' + txt.company + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>所属辖区</td><td>' + txt.city_name  + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td>地址</td><td>' + txt.address + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td></td><td class="text-right baseColor pointer" onClick="handleView('+ aa +')">查看详情</td>'+
                '</tr>'+
                '</table>'+
                '</div>';
            }else{
              // '<p class="f14 time">监控名称：' + txt.name + '</p>' +
              // '<p class="f14 time">所属区域：' + txt.depart_name + '</p>' +
              // '<p class="f14 time">来源区域：' + txt.community_name + '</p>' +
              // '<p class="f14 time">所在地址：' + txt.install_place + '</p>' +
              // '<p class="f14 baseColor text-right">查看视频</p>' +
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
                '<td>来源区域</td><td>' + txt.install_place + '</td>'+
                '</tr>'+
                '<tr>' +
                '<td></td><td class="text-right baseColor pointer" onClick="handleVideo('+ aa +')">查看视频</td>'+
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
      handleView(txt){
        this.showViewDialog = true;
        this.getCompanyView(txt.company_id);
        this.getFacilityDetail(txt.facility_id);
        this.getCompanyInfo(txt.facility_no);
        this.getCompanyChart(txt.facility_no);

      },
      closeCompany(){
        this.showViewDialog = false;
        this.activeId='';
        this.showViewDialog=false;
        this.companyData={};
        this.companyName='';
        this.realTimeInfo={};
        this.aaclass='55';
        this.companyStatus="";
        this.polluteSListLoading=false;
        this. polluteSList=[{
          name:'净化器',
          val:'',
        },{
          name:'风机',
          val:'',
        }];
        this.polluteListLoading=false;
        this.polluteList=[{
          name:'油烟浓度',
          val:'',
          status:''
        }];
        this. companyInfo={};
        this.lineData={
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
          legend:{
            textStyle:{
              fontSize:15,
              color: '#5EF4F9'
            },
            // data:['TVOC','油烟浓度']
            data:['油烟浓度']
          },
          xAxis: {
            splitArea : {show :  false }, //保留网格区域
            // show:false,
            axisLine: {
              show: false,
            },
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
            splitLine: {
              show: false,
              textStyle: {
                color: 'rgba(16,54,123,1)',
                fontSize:'15',
                fontWeight:'bold'
              }
            },//去除网格线
            boundaryGap: false, // 不留白，从原点开始
            type: 'category',
            data: []
          },
          yAxis: {
            splitArea : {show :  false }, //保留网格区域
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#26CBE2',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            splitLine: {
              show: false,//去除网格线
              textStyle: {
                color: '#08245F',
                fontSize:'15',
                fontWeight:'bold'
              }
            },
            type: 'value'
          },
          series: [
            //   {
            //   name:'TVOC',
            //   symbol:'circle',
            //   symbolSize:8,
            //   color:'#CC3275',
            //   itemStyle : {
            //     normal : {
            //       lineStyle:{
            //         color:'#CC3275',
            //         borderColor:'#CC3275'
            //       }
            //     }
            //   },
            //   areaStyle:{
            //     normal:{
            //       //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //         offset: 0,
            //         color: 'rgba(204,50,117,0.5)'
            //       }, {
            //         offset: .2,
            //         color: 'rgba(204,50,117,0.5)'
            //       },{
            //         offset: 1,
            //         color: 'rgba(204,50,117,0)'
            //       }])
            //
            //     }
            //   },//区域颜色渐变
            //   data: [],
            //   type: 'line'
            // },
            {
              name:'油烟浓度',
              symbol:'circle',
              symbolSize:8,
              color:'#E39915',
              itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#E39915',
                    borderColor:'#E39915'
                  }
                }
              },
              areaStyle:{
                normal:{
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(227,153,21,0.5)'
                  }, {
                    offset: .2,
                    color: 'rgba(227,153,21,0.5)'
                  },{
                    offset: 1,
                    color: 'rgba(227,153,21,0)'
                  }])

                }
              },//区域颜色渐变
              data: [],
              type: 'line'
            }]
        };
      },
      getCompanyView(companyId){
        companyDetail({id:companyId}).then(res=>{
          if(res.data.status == 1){
            // this.aaclass = 'red01'
            console.log( this.aaclass)
            this.companyStatus='正常'
          }else if(res.data.status == 2){
            // this.aaclass = 'red01'
            this.companyStatus='离线'
          }else if(res.data.status == 3){
            this.aaclass = 'red01'
            this.companyStatus='故障'
          }else if(res.data.status == 4){
            this.aaclass = 'red01'
            this.companyStatus='异常'
          }
          this.polluteList[0].status = this.companyStatus
          const {id,company, simple_name, organization_code, status, company_code, principal, mobile, tel, company_type, cook_type, area,
            kitchen_range_num, outlet_num, scale_type, city, street, address, images, remark,depart_id,zd_people,zd_mobile,company_type_name,cook_type_name,scale_type_name,city_id_name} = res.data;
          this.companyInfo = {id,company, simple_name, organization_code, status, company_code, principal, mobile, tel, company_type, cook_type, area,
            kitchen_range_num, outlet_num, scale_type, city, street, address, images, remark,depart_id,zd_people,zd_mobile,company_type_name,cook_type_name,scale_type_name,city_id_name};
        });

      },
      getFacilityDetail(id){
        facilityDetail({id:id}).then(res=>{
          const { id,product, city_id,name, version,facility_no,imei,start_time,images,remark} = res.data
          this.facilityInfo = { id,product, city_id,name, version,facility_no,imei,start_time,images,remark}
        });
      },
      getCompanyInfo(id){
        realTime({facility_id:id}).then(res=>{
          this.realTimeInfo = res.data;
          this.polluteSList=[{
            name:'净化器',
            status:res.data.cleansing == 1?'正常':'异常',
          },{
            name:'风机',
            status:res.data.fan == 1?'开':'关',
          }]
          this.polluteList[0].val = res.data.concentration;
          // this.polluteList[0].status = this.companyStatus
        });
      },
      getCompanyChart(id){
        trend({facility_id:id}).then(res=>{
          // this.list = res.data.data;
          // this.total = res.data.count
          let a = res.data.map(item=>{return item.x_name})
          this.lineData.xAxis.data = a;
          console.log( a)
          console.log(res.data.map(item=>{ return item.y_tvoc_num}))
          // this.lineData.series[0].data = res.data.map(item=>{ return item.y_tvoc_num})
          // this.lineData.series[1].data = res.data.map(item=>{return item.y_fume_num})
          this.lineData.series[0].data = res.data.map(item=>{return item.y_fume_num})
        });
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

      //获取AI视频
      getList(){
        getAllVideoPoint({class:1}).then((res) => {
          this.AIVideo_num = res.data.ai;
          this.pointList = res.data.list;
          this.mapPoint(this.pointList);
        });
      },
      //获取油烟--普通视频数字
      getVideoNum(){
        getAllVideoPoint({class:4}).then((res) => {
          this.commonVideo_num = res.data.putong;
        });
      },
      //获取油烟--普通视频
      getVideo(){
        getAllVideoPoint({class:4}).then((res) => {
          this.commonVideo_num = res.data.putong;
          this.pointList = res.data.list;
          this.mapPoint(this.pointList,'video')
        });
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import './../../styles/variables.scss';
  .search_result{
    position: fixed;
    left: 10vw;
    top: 18vh;
    z-index: 20000;
    width: 800px;
    padding: 20px;
    background: #0a275f;
    .close_search{
      position: absolute;
      right: 20px;
      top:20px;
      z-index: 2001;
    }
    .view_tab{
      width: 60%;
      margin: 0 auto 30px;
      line-height: 2.6;
      color:$txtColor;
      background: #0a275f !important;
      box-shadow: $menuText 0 0 8px inset;
      border-radius: 5px;
      .active{
        color: #fff;
        background: #0a275f !important;
        box-shadow: $menuText 0 0 18px inset;
      }
      .flex-item{
        &:nth-child(1){
          &.active{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
        }
        &:nth-child(4){
          &.active{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }


    }
    .table_title{
      /*width: 60%;*/
      line-height: 2.6;
      color:$txtColor;
      background: #0a275f !important;
      box-shadow: $menuText 0 0 8px inset;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .view_ul{
      li{
        margin: 0 5px;
        border: 1px solid $txtColor;
        border-radius: 5px;
        & > div{
          padding: 10px 0;
          p{
            margin-top: 5px;
          }
        }
        .num{
          line-height: 2.5;
        }
      }
    }
  }
  .company_table{
    width: 100%;
    border-top: 1px solid #223492;
    border-left: 1px solid #223492;
    border-spacing: 0;
    tr{
      line-height: 2;

      td{
        padding: 0 5px;
        border-right: 1px solid #223492;
        border-bottom: 1px solid #223492;
      }
    }
  }
  .equipment_table{
    width: 80% !important;
    margin: 0 auto;
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

  .enforcement_num{
    &.reset_w{
      width: 67%;
      margin: 10px auto 0;
    }
    .flex-item{
      padding: 10px 0;
      .weui-cell__hd{
        img{
          width: 20px;
        }
      }
      &:nth-child(2){
        margin: 0 5px;
      }
    }
  }


</style>
