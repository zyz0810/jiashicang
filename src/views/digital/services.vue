<template>
  <div class="app-container">
    <!--创建容器-->
    <div id='mapDiv' class="mapDiv"></div>
    <div class="left_server clr_white text-center f16 bold">
      <div :class="[activeIndex == 0 ? 'baseColor':'']" @click="handlePageType(0)">
        <img v-if="activeIndex == 0" src="./../../assets/image/services_nav01_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/services_nav01.png" class="nav_img"/>
        <p class="nav_txt">数字停车</p>
      </div>
      <div :class="[activeIndex == 1 ? 'baseColor':'']" @click="handlePageType(1)">
        <img v-if="activeIndex == 1" src="./../../assets/image/services_nav02_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/services_nav02.png" class="nav_img"/>
        <p class="nav_txt">共享单车</p>
      </div>
      <div :class="[activeIndex == 2 ? 'baseColor':'']" @click="handlePageType(2)">
        <img v-if="activeIndex == 2" src="./../../assets/image/services_nav03_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/services_nav03.png" class="nav_img"/>
        <p class="nav_txt">城市亮灯</p>
      </div>
      <div :class="[activeIndex == 3 ? 'baseColor':'']" @click="handlePageType(3)">
        <img v-if="activeIndex == 3" src="./../../assets/image/services_nav04_active.png" class="nav_img"/>
        <img v-else src="./../../assets/image/services_nav04.png" class="nav_img"/>
        <p class="nav_txt">数字燃气</p>
      </div>
    </div>
    <!--<ul class="f16 clr_white bold text-center link_intro" v-if="activeIndex == 0">-->
      <!--<li class="mb_20 f14">空闲泊位等级</li>-->
      <!--<li>-->
        <!--<p>5级</p>-->
        <!--<span class="block color_bg01"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>4级</p>-->
        <!--<span class="block color_bg02"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>3级</p>-->
        <!--<span class="block color_bg03"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>2级</p>-->
        <!--<span class="block color_bg04"></span>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p>1级</p>-->
        <!--<span class="block color_bg05"></span>-->
      <!--</li>-->
    <!--</ul>-->
<!--    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 0">-->
<!--      <p class="f20 bold txt_linear">泊位概况</p>-->
<!--      <div class="weui-cell">-->
<!--        <div class="weui-cell__hd" style="width: 40%;">-->
<!--          <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" height="18vh" divwidth="100%"></PieChartTwo>-->
<!--        </div>-->
<!--        <div class="weui-cell__bd bold">-->
<!--          <p class="f16">当前占用泊位</p>-->
<!--          <div class="progress_cont mt_10">-->
<!--            <el-progress :show-text="false" :stroke-width="15" :percentage="80"></el-progress>-->
<!--            <span class="progress_border"></span>-->
<!--            <span class="progress_border"></span>-->
<!--            <span class="progress_border"></span>-->
<!--            <span class="progress_border"></span>-->
<!--          </div>-->
<!--          <p class="mt_10">-->
<!--            占用泊位<span class="baseColor txt_shadow m_r30">188</span>-->
<!--            占用泊位<span class="baseColor txt_shadow">188</span>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;<div class="mt_20">&ndash;&gt;-->
<!--        &lt;!&ndash;<p class="mb_20 f16 bold text-center">全区停车场数：1210</p>&ndash;&gt;-->
<!--        &lt;!&ndash;<div  class="weui-cell">&ndash;&gt;-->
<!--          &lt;!&ndash;<div class="weui-cell__hd text-center" style="width: 90px;">&ndash;&gt;-->
<!--            &lt;!&ndash;<p class="f26 bold clr_yellow mb_20">25321</p>&ndash;&gt;-->
<!--            &lt;!&ndash;<p class="f18">普查泊位</p>&ndash;&gt;-->
<!--          &lt;!&ndash;</div>&ndash;&gt;-->
<!--          &lt;!&ndash;<div class="weui-cell__bd">&ndash;&gt;-->
<!--            &lt;!&ndash;<RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="20vh"></RingChart>&ndash;&gt;-->
<!--          &lt;!&ndash;</div>&ndash;&gt;-->
<!--        &lt;!&ndash;</div>&ndash;&gt;-->

<!--      &lt;!&ndash;</div>&ndash;&gt;-->
<!--      &lt;!&ndash;<div  class="weui-cell">&ndash;&gt;-->
<!--        &lt;!&ndash;<div class="weui-cell__hd text-center" style="width: 90px;">&ndash;&gt;-->
<!--          &lt;!&ndash;<p class="f26 bold clr_yellow mb_20">25321</p>&ndash;&gt;-->
<!--          &lt;!&ndash;<p class="f18">接入泊位</p>&ndash;&gt;-->
<!--        &lt;!&ndash;</div>&ndash;&gt;-->
<!--        &lt;!&ndash;<div class="weui-cell__bd">&ndash;&gt;-->
<!--          &lt;!&ndash;<RingChart :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="20vh"></RingChart>&ndash;&gt;-->
<!--        &lt;!&ndash;</div>&ndash;&gt;-->
<!--      &lt;!&ndash;</div>&ndash;&gt;-->
<!--    </div>-->
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 1">
      <p class="f20 bold txt_linear mb_20">车辆概况</p>
<!--      <div class="flex f14 bold clr_white bicycle text-center">-->
<!--        <div class="flex-item flex_block_bg">-->
<!--          <p>已备案车辆</p>-->
<!--          <p class="clr_purple mt_10"><span class="f26">1.0</span>万</p>-->
<!--        </div>-->
<!--        <div class="flex-item flex_block_bg">-->
<!--          <p>活跃车辆</p>-->
<!--          <p class="clr_blue01 f26 mt_10">3287</p>-->
<!--        </div>-->
<!--        <div class="flex-item flex_block_bg">-->
<!--          <p>按规停放车辆</p>-->
<!--          <p class="clr_blue02 f26 mt_10">7892</p>-->
<!--        </div>-->
<!--        <div class="flex-item flex_block_bg">-->
<!--          <p>违规停放</p>-->
<!--          <p class="clr_yellow f26 mt_10">1887</p>-->
<!--        </div>-->
<!--      </div>-->
      <BarChartFour :chartData="BarDataTwo" :BarChartLegend="PieChartLegend" height="250px" divwidth="100%"></BarChartFour>
<!--      <div class="top clr_white mt_20 ">-->
<!--        <p class="f20 bold txt_linear">区域统计</p>-->
<!--        <RingChart :chartData="chartDataTwo" :PieChartLegend="PieChartLegend" height="200px" divwidth="100%"></RingChart>-->
<!--      </div>-->
      <div class="left_bottom mt_40">
        <p class="f20 bold txt_linear">违停次数</p>
        <PieChartTwo :chartData="chartDataThree" :PieChartLegend="PieChartLegend" height="28vh" divwidth="100%"></PieChartTwo>
      </div>

    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 2">
      <p class="f20 bold txt_linear">亮灯率</p>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="width: 40%;">
          <PieChartTwo :chartData="PieData" :PieChartLegend="PieChartLegend" height="18vh" divwidth="100%"></PieChartTwo>
        </div>
        <div class="weui-cell__bd bold">
          <p class="f16">当前亮灯情况</p>
          <div class="progress_cont mt_10 progress_light">
            <el-progress :show-text="false" :stroke-width="15" :percentage="percentageNum"></el-progress>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
            <span class="progress_border"></span>
          </div>
          <p class="mt_10">
            亮灯数<span class="clr_blue04 txt_shadow m_r30"> {{lightNum.num}}</span>
            总灯数<span class="clr_blue04 txt_shadow"> {{lightNum.count}}</span>
          </p>
        </div>
      </div>
      <div class="mt_20">
        <el-row :gutter="10" class="mt_20 text-center">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="text-center clearfix">
            <p class="f16 bold txt_linear mb_10">节能率</p>
            <PieChartTwo :chartData="PieData2" :PieChartLegend="PieChartLegend" height="110px" divwidth="50%"></PieChartTwo>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="text-center clearfix">
            <p class="f16 bold txt_linear mb_10">综合评价</p>
<!--            <PieChartTwo :chartData="PieData2" :PieChartLegend="PieChartLegend" height="10vh" :divwidth="divwidth"></PieChartTwo>-->
<!--            <span :class="['inlineBlock','bor_circle','flex','bor_blue',   ]"><span class="circle_two inlineBlock">{{formData.evaluate}}</span></span>-->
            <span v-if="formData.evaluate == '优'" class="inlineBlock bor_circle flex bor_green"><span class="circle_two inlineBlock flex f20">{{formData.evaluate}}</span></span>
            <span v-if="formData.evaluate == '差'" class="inlineBlock bor_circle flex bor_red"><span class="circle_two inlineBlock flex f20">{{formData.evaluate}}</span></span>
            <span v-else class="inlineBlock bor_circle flex bor_blue"><span class="circle_two inlineBlock flex f20">{{formData.evaluate}}</span></span>
          </el-col>
        </el-row>
          <div class="text-center" style="width:50%;margin: 0 auto 0;">
            <p class="f16 bold txt_linear mb_10">故障警告</p>
            <span class="inlineBlock bor_circle bor_red flex"><span class="circle_two inlineBlock f26 flex">{{formData.warnNum}}</span></span>
          </div>


      </div>

    </div>
    <div class="right_content clr_white base_bg_right" v-if="activeIndex == 3">
      <p class="f20 bold txt_linear">钢瓶状态</p>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="width: 40%">
          <PieChartTwoHover :chartData="PieDataGas" :PieChartLegend="PieChartLegend" height="10vh" divwidth="10vh"></PieChartTwoHover>
        </div>
        <div class="weui-cell__bd bold">
          <p class="f16">当前亮灯情况</p>
          <p class="mt_10">
            亮灯数<span class="clr_blue04 txt_shadow m_r30"> {{lightNum.num}}</span>
            总灯数<span class="clr_blue04 txt_shadow"> {{lightNum.count}}</span>
          </p>
        </div>
      </div>
      <div class="left_bottom mt_20">
        <p class="f20 bold txt_linear">钢品充装</p>
        <ul class="flex table_ul text-center">
          <li style="width: 50px;">充装站</li>
          <li class="flex-item">钢瓶编码</li>
          <li class="flex-item">芯片编码</li>
          <li style="width: 80px;">充装时间</li>
        </ul>
        <vueSeamlessScroll :data="listOne" class="seamless-warp text-center" :class-option="classOption">
          <ul class="flex table_ul" v-for="(item,index) in listOne" :key="item.id">
            <li style="width: 50px;">{{index+1}}</li>
            <li class="flex-item ellipsisOne">{{item.one}}</li>
            <li class="flex-item ellipsisOne">{{item.two}}</li>
            <li style="width: 80px;" class="ellipsisOne">{{item.three}}</li>
          </ul>
          <div style="margin-bottom: 100px;"></div>
        </vueSeamlessScroll>
      </div>
      <div class="left_bottom mt_20">
        <p class="f20 bold txt_linear">钢品签收</p>
        <ul class="flex table_ul text-center">
          <li style="width: 50px;">订单号</li>
          <li class="flex-item">签收时间</li>
          <li class="flex-item">客户名称</li>
          <li class="flex-item">客户类型</li>
          <li style="width: 80px;">商品总数</li>
        </ul>
        <vueSeamlessScroll :data="listTwo" class="seamless-warp text-center" :class-option="classTwoOption">
          <ul class="flex table_ul" v-for="(item,index) in listTwo" :key="item.id">
            <li style="width: 50px;">{{index+1}}</li>
            <li class="flex-item ellipsisOne">{{item.one}}</li>
            <li class="flex-item ellipsisOne">{{item.two}}</li>
            <li class="flex-item ellipsisOne">{{item.two}}</li>
            <li style="width: 80px;" class="ellipsisOne">{{item.three}}</li>
          </ul>
          <div style="margin-bottom: 100px;"></div>
        </vueSeamlessScroll>
      </div>
    </div>
<!--    <div class="top_div flex clr_white text-center f16" v-if="activeIndex == 2">-->
<!--      <div class="flex f16 bold mr_20 border shadow" style="width: 300px;">-->
<!--        <div class="flex-item txt_linear">控制柜</div>-->
<!--        <div class="flex-item">-->
<!--          总览-->
<!--          <span class="txt_linear">{{totalData.controlCabinetNum}}</span>-->
<!--        </div>-->
<!--        &lt;!&ndash;<div class="flex-item">&ndash;&gt;-->
<!--          &lt;!&ndash;离线&ndash;&gt;-->
<!--          &lt;!&ndash;<span class="txt_linear">4</span>&ndash;&gt;-->
<!--        &lt;!&ndash;</div>&ndash;&gt;-->
<!--        &lt;!&ndash;<div class="flex-item">&ndash;&gt;-->
<!--          &lt;!&ndash;故障&ndash;&gt;-->
<!--          &lt;!&ndash;<span class="txt_linear">4</span>&ndash;&gt;-->
<!--        &lt;!&ndash;</div>&ndash;&gt;-->
<!--      </div>-->
<!--      <div class="flex f16 bold mr_20 border shadow" style="width: 350px;">-->
<!--        <div class="flex-item txt_linear">亮灯设备</div>-->
<!--        <div class="flex-item">-->
<!--          总览-->
<!--          <span class="txt_linear">11012</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex border shadow" style="position: relative;" @click="showOption == 0?showOption=1:showOption=0">-->
<!--        设备点位-->
<!--        <div style="position: absolute;top: 35px;left: 0;width: 100%; line-height: 30px;" class="clr_white border shadow" v-if="showOption==1">-->
<!--          <p :class="showType == 1 ? 'baseColor':''" @click="handleTypeLight(1)">亮灯杆</p>-->
<!--          <p :class="showType == 2 ? 'baseColor':''" @click="handleTypeLight(2)">控制柜</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="top_div flex clr_white text-center f16" v-if="activeIndex == 0">
          <div class="flex f20 bold mr_20 border shadow" @click="handlePointType(1)">
            <div class="baseColor">
              泊位概况
            </div>
            <div class="flex-item">
              总泊位数
              <span class="txt_linear f22">{{parkData.total}}</span>
            </div>
            <div class="">占用泊位数<span class="txt_linear f22">{{parkData.useNum}}</span></div>
            <div class="">占用率<span class="txt_linear f22">{{parkData.useRate}}%</span></div>
          </div>
          <div class="flex f20 bold mr_20 border shadow" @click="handlePointType(2)">
            <div class="baseColor">
              视频
            </div>
            <div class="">
              停车场视频
              <span class="txt_linear f22">{{parkNum}}</span>
            </div>
          </div>
        </div>
    <div class="top_div top_one flex clr_white text-center f16 bold" v-if="activeIndex == 1">
      <div class="flex f20 bold mr_20 border shadow" @click="handleTwoPointType(1)">
        <div class="baseColor">
          单车概况
        </div>
        <div class="">
          总停车区域
          <span class="txt_linear f22">1290</span>
        </div>
        <div class="">
          允许投放
          <span class="txt_linear f22">22000</span>
        </div>
        <div class="">
          目前总车辆
          <span class="txt_linear f22">23515</span>
        </div>
      </div>
      <div class="flex f20 bold mr_20 border shadow" @click="handleTwoPointType(2)">
        <div class="baseColor">
          人员
        </div>
        <div class="">
          运维人员
          <span class="txt_linear f22">54</span>
        </div>
      </div>
      <div class="flex f20 bold border shadow" @click="handleTwoPointType(3)">
        <div class="baseColor">
          视频
        </div>
        <div class="">
          普通视频
          <span class="txt_linear f22">{{carData.commonVideo_num}}</span>
        </div>
      </div>

    </div>
    <div class="top_div top_one flex clr_white text-center f16 bold" v-if="activeIndex == 2">
      <div class="flex f20 bold mr_20 border shadow" @click="handleTypeLight(2)">
        <div class="baseColor">
          控制柜
        </div>
        <div class="">
          总数
          <span class="txt_linear f22">{{lightData.cabinetCount}}</span>
        </div>
        <div class="">
          故障数
          <span class="txt_linear f22">{{lightData.cabinetTrouble}}</span>
        </div>
      </div>
      <div class="flex f20 bold mr_20 border shadow" @click="handleTypeLight(1)">
        <div class="baseColor">
          亮灯设备
        </div>
        <div class="">
          总数
          <span class="txt_linear f22">{{lightData.lightCount}}</span>
        </div>
      </div>
    </div>
    <div class="top_div top_one flex clr_white text-center f16 bold" v-if="activeIndex == 3">
      <div class="flex f20 bold mr_20 border shadow" @click="handleTypeLight(2)">
        <div class="baseColor">
          钢瓶概览
        </div>
        <div class="">
          钢瓶总数
          <span class="txt_linear f22">{{lightData.cabinetCount}}</span>
        </div>
        <div class="">
          客户占用数
          <span class="txt_linear f22">{{lightData.cabinetTrouble}}</span>
        </div>
        <div class="">
          今日充装数
          <span class="txt_linear f22">{{lightData.cabinetTrouble}}</span>
        </div>
        <div class="">
          今日签收数
          <span class="txt_linear f22">{{lightData.cabinetTrouble}}</span>
        </div>
      </div>
      <div class="flex f20 bold mr_20 border shadow" @click="handleTypeLight(1)">
        <div class="baseColor">
          视频
        </div>
        <div class="">
          普通视频
          <span class="txt_linear f22">{{carData.commonVideo_num}}</span>
        </div>
      </div>
    </div>
<!--    <div class="center_content clr_white text-center no_right" v-if="activeIndex == 0 && pointType == 1">-->
<!--      <div class="map_intro f14 bold flex baseColor weui-cell">-->
<!--        <div class="weui-cell__hd flex"><img src="./../../assets/image/point29.png"/></div>-->
<!--        <div class="weui-cell__bd">停车场</div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="center_content clr_white text-center no_right" v-if="activeIndex == 0 && pointType == 2">-->
<!--      <div class="map_intro f14 bold flex baseColor weui-cell">-->
<!--        <div class="weui-cell__hd flex"><img src="./../../assets/image/point42.png"/></div>-->
<!--        <div class="weui-cell__bd">停车场视频</div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="center_content clr_white text-center" v-if="activeIndex == 1 && pointTwoType == 1">

      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showOneType==0?'active':'']" @click="handleParkPointType(0)">
        <div class="weui-cell__hd flex">
          <img v-if="showOneType!=0" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showOneType==0?'clr_white':'']">全部区域</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showOneType==1?'active':'']" @click="handleParkPointType(1)">
        <div class="weui-cell__hd flex">
          <img v-if="showOneType!=1" src="./../../assets/image/point69.png"/>
          <img v-else src="./../../assets/image/point66_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showOneType==1?'clr_white':'']">重点区域</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showOneType==2?'active':'']" @click="handleParkPointType(2)">
        <div class="weui-cell__hd flex">
          <img v-if="showOneType!=2" src="./../../assets/image/point70.png"/>
          <img v-else src="./../../assets/image/point63_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showOneType==2?'clr_white':'']">停车区域</div>
      </div>

<!--      <div :class="['map_intro', 'no_bg','border','shadow','f12','bold','flex','baseColor','weui-cell',showOneType==1?'active':'']" @click="handleParkPointType(1)">-->
<!--        &lt;!&ndash;<div class="weui-cell__hd flex"><img src="./../../assets/image/point30.png"/></div>&ndash;&gt;-->
<!--        <div :class="['weui-cell__bd',showOneType==1?'clr_white':'']">全部区域</div>-->
<!--      </div>-->
<!--      <div :class="['map_intro', 'no_bg','border','shadow','f12','bold','flex','baseColor','weui-cell',showOneType==2?'active':'']" @click="handleParkPointType(2)">-->
<!--        &lt;!&ndash;<div class="weui-cell__hd flex"><img src="./../../assets/image/point30.png"/></div>&ndash;&gt;-->
<!--        <div :class="['weui-cell__bd',showOneType==2?'clr_white':'']">重点区域</div>-->
<!--      </div>-->
<!--      <div :class="['map_intro', 'no_bg','border','shadow','f12','bold','flex','baseColor','weui-cell',showOneType==3?'active':'']" @click="handleParkPointType(3)">-->
<!--        &lt;!&ndash;<div class="weui-cell__hd flex"><img src="./../../assets/image/point36.png"/></div>&ndash;&gt;-->
<!--        <div :class="['weui-cell__bd',showOneType==3?'clr_white':'']">停车区域</div>-->
<!--      </div>-->
<!--      <div :class="['map_intro', 'no_bg','border','shadow','f12','bold','flex','baseColor','weui-cell',showOneType==4?'active':'']" @click="handleParkPointType(4)">-->
<!--        &lt;!&ndash;<div class="weui-cell__hd flex"><img src="./../../assets/image/point38.png"/></div>&ndash;&gt;-->
<!--        <div :class="['weui-cell__bd',showOneType==4?'clr_white':'']">禁停区域</div>-->
<!--      </div>-->
<!--      <div :class="['map_intro', 'no_bg','border','shadow','f12','bold','flex','baseColor','weui-cell',showOneType==5?'active':'']" @click="handleParkPointType(5)">-->
<!--        &lt;!&ndash;<div class="weui-cell__hd flex"><img src="./../../assets/image/point38.png"/></div>&ndash;&gt;-->
<!--        <div :class="['weui-cell__bd',showOneType==5?'clr_white':'']">禁行区域</div>-->
<!--      </div>-->
    </div>
    <div class="center_content clr_white text-center" v-if="activeIndex == 1 && pointTwoType == 2">
      <div class="map_intro f12 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point43.png"/></div>
        <div class="weui-cell__bd">运维人员</div>
      </div>
    </div>
    <div class="center_content clr_white text-center" v-if="activeIndex == 1 && pointTwoType == 3">
      <div class="map_intro f12 bold flex baseColor weui-cell">
        <div class="weui-cell__hd flex"><img src="./../../assets/image/point38.png"/></div>
        <div class="weui-cell__bd">普通视频</div>
      </div>
    </div>
    <div class="center_content clr_white text-center" v-if="activeIndex == 2 && showType==1">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showTwoType==0?'active':'']" @click="handleLightPointType(0)">
        <div class="weui-cell__hd flex">
          <img v-if="showTwoType!=0" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showTwoType==0?'clr_white':'']">全部设备</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showTwoType==1?'active':'']" @click="handleLightPointType(1)">
        <div class="weui-cell__hd flex">
          <img v-if="showTwoType!=1" src="./../../assets/image/point35.png"/>
          <img v-else src="./../../assets/image/point34_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showTwoType==1?'clr_white':'']">亮灯设备开</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showTwoType==2?'active':'']" @click="handleLightPointType(2)">
        <div class="weui-cell__hd flex">
          <img v-if="showTwoType!=2" src="./../../assets/image/point34.png"/>
          <img v-else src="./../../assets/image/point34_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showTwoType==2?'clr_white':'']">亮灯设备关</div>
      </div>
    </div>
    <div class="center_content clr_white text-center" v-if="activeIndex == 2 && showType==2">
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showThreeType==0?'active':'']" @click="handleControlPointType(0)">
        <div class="weui-cell__hd flex">
          <img v-if="showThreeType!=0" src="./../../assets/image/point44.png"/>
          <img v-else src="./../../assets/image/point44_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showThreeType==0?'clr_white':'']">全部设备</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showThreeType==1?'active':'']" @click="handleControlPointType(1)">
        <div class="weui-cell__hd flex">
          <img v-if="showThreeType!=1" src="./../../assets/image/point33.png"/>
          <img v-else src="./../../assets/image/point31_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showThreeType==1?'clr_white':'']">控制柜开</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showThreeType==2?'active':'']" @click="handleControlPointType(2)">
        <div class="weui-cell__hd flex">
          <img v-if="showThreeType!=2" src="./../../assets/image/point32.png"/>
          <img v-else src="./../../assets/image/point31_active.png"/>
        </div>
        <div :class="['weui-cell__bd',showThreeType==2?'clr_white':'']">控制柜关</div>
      </div>
      <div :class="['map_intro','f14','bold','flex','baseColor','weui-cell',showThreeType==3?'active':'']" @click="handleControlPointType(3)">
        <div class="weui-cell__hd flex">
          <img v-if="showThreeType!=3" src="./../../assets/image/point31.png"/>
          <img v-else src="./../../assets/image/point31_active.png"/>
        </div>
        <div :class="['weui-cell__bd f12',showThreeType==3?'clr_white':'']">控制柜故障</div>
      </div>
    </div>
<!--        <videoView :showDialog.sync="showVideoDialog" :caseData={}></videoView>-->
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
  import echarts from 'echarts'
  import RingChart from '@/components/Charts/RingChart'
  import BarChartFive from '@/components/Charts/BarChartFive'
  import BarChartTwo from '@/components/Charts/BarChartTwo'
  import BarChartThree from '@/components/Charts/BarChartThree'
  import BarChartFour from '@/components/Charts/BarChartFour'
  import waves from '@/directive/waves'
  import { mapState } from 'vuex'
  import map from '@/components/Map/map.js' // 引入刚才的map.js 注意路径
  import point01 from '@/assets/image/point29.png' // 停车位
  import point02 from '@/assets/image/point30.png' // 共享单车
  import point03 from '@/assets/image/point31.png' // 控制柜故障
  import point04 from '@/assets/image/point32.png' // 控制柜关
  import point05 from '@/assets/image/point33.png' // 控制柜开
  import point06 from '@/assets/image/point34.png' // 亮灯关
  import point07 from '@/assets/image/point35.png' // 亮灯开
  import point08 from '@/assets/image/point36.png' // AI视频
  import point09 from '@/assets/image/point38.png' // 普通视频
  import point10 from '@/assets/image/point43.png' // 运维人员
  import point11 from '@/assets/image/point63.png' //
  import point12 from '@/assets/image/point64.png' //
  import point13 from '@/assets/image/point65.png' //
  import point14 from '@/assets/image/point66.png' //
  import point15 from '@/assets/image/point67.png' //
  import point16 from '@/assets/image/point68.png' //
  import toolTipBg from '@/assets/image/digital-bg.png' // 引入刚才的map.js 注意路径
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import videoView from "./videoView";
  import {getAllVideoPoint, getNowurl, pointList} from '@/api/system'
  import PieChartTwo from '@/components/Charts/PieChartTwo'
  import PieChartTwoHover from '@/components/Charts/PieChartTwoHover'
  import {getLampPostList,getcontrolcabinetlist,getevaluate,parkList,getAllPark,getShareCar} from '@/api/digitalServices'
  import {generalIndex} from "@/api/overView";
  import global from "@/utils/common";
  export default {
    name: 'parameterList',
    directives: {waves},
    mixins: [map],
    components:{RingChart,BarChartTwo,BarChartThree,BarChartFour,BarChartFive,PieChartTwo,PieChartTwoHover,videoView,vueSeamlessScroll,},
    data() {
      return {
        showThreeType:0,
        showTwoType:0,
        showOneType:0,
        parkData:{},
        percentageNum:0,
        pointType:1,
        lightData:{
          lightCount:'',
          cabinetCount:'',
          cabinetTrouble:'',
        },
        carData:{
          shangBao:'',
          chuLi:'',
          undisposed:'',
          user_num:'',
          commonVideo_num:''
        },
        lampPostList:[],
        showType:2,
        showOption:0,
        chartDataTwo: {
          title:{},
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            show:false
          },
          color:['#06F5FF','#FFBA0A','#367CFD','#E20280'],
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              // label: {
              //   show: false,
              //   position: 'center',
              //
              // },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
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
                  length2 :35,
                }
              },
              label :{
                formatter: [
                  '{c}',
                  '{b}',
                ].join('\n'),
                verticalAlign :'bottom',
                position:'outside',
                textShadowOffsetY :10,
                align :'right',
                color:'white',
                height :60,
                lineHeight:30,
                fontSize:'16',
                rich: {
                  a: {
                    verticalAlign:'bottom',
                    // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
                  }
                }
              },
              data: [
                {value: 220, name: '禁停区'},
                {value: 205, name: '禁行区'},
                {value: 320, name: '重点监管区'},
                {value: 505, name: '停车区'},
              ]
            }
          ]
        },
        PieData:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '%',
            x: '45%',
            y: '40%',
            textAlign: 'center',
            textStyle: {
              fontSize: '20',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['95%', '80%'],
            center: ['50%', '50%'],
          },
          angleAxis: {
            max: 100,
            show: false,
            // startAngle: 0,
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
          },
          series: [
            {
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 60,
              showBackground: true,
              data: [],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  // color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  //   offset: 0,
                  //   color: 'rgba(252,209,82,1)'
                  // }, {
                  //   offset: 1,
                  //   // color: 'red'
                  //   color: 'rgba(248,211,91,1)'
                  // }]),
                  color:'#30abf1'
                }
              }
            },{//里面细圈
              name: 'decorationOne',
              type: 'pie',
              color: ['#30abf1'],
              // center: ['30%', '50%'],
              radius: ['74%', '72%'],
              hoverAnimation: false,
              lable: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: ['59'],
            },
          ]
        },
        PieData2:{
          color: ['#EB4B4B', 'rgb(245,245,245)'],
          title: [{
            text: '%',
            x: '45%',
            y: '35%',
            textAlign: 'center',
            textStyle: {
              fontSize: '20',
              fontWeight: '500',
              color: '#fff',
              textAlign: 'center',
            },
          }],
          polar: {
            radius: ['95%', '80%'],
            center: ['50%', '50%'],
          },
          angleAxis: {
            max: 100,
            show: false,
            // startAngle: 0,
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
          },
          series: [
            {
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 60,
              showBackground: true,
              data: [],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#ffd554'
                  }, {
                    offset: 1,
                    // color: 'red'
                    color: '#ffd554'
                  }]),
                  // color:'rgba(78,239,254,1)'
                }
              }
            },{//里面细圈
              name: 'decorationOne',
              type: 'pie',
              color: ['#ffd554'],
              // center: ['30%', '50%'],
              radius: ['74%', '72%'],
              hoverAnimation: false,
              lable: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: ['59'],
            },
          ]
        },
        activeIndex:0,
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
              avoidLabelOverlap: false,
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
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ]
            }
          ]
        },
        chartDataThree: {
          title:{},
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} <br/> {d}%'
          },
          legend: {
            show:false
          },
          color:['rgb(255,213,84)','rgb(48,171,241)','rgb(249,138,127)','rgb(146,117,243)'],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              // center: ['30%', '50%'],
              radius: ['48%', '68%'],
              avoidLabelOverlap: true,
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
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
                  length2 :25,
                }
              },
              label :{
                // formatter: [
                //   '{c}',
                //   '{b}',
                //   '{d}'
                // ].join('\n'),
                // formatter: '{b}{c}({d})%',
                formatter: '{b}：{c}',
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
                    verticalAlign:'bottom',
                    // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
                  }
                }
              },
              data: [{name:'美团',value:24112},{name:'哈罗',value:15980},{name:'百姓快租',value:4909},]
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
            top: '20',
            containLabel: true
          },
          //----------------   图例 legend  -----------------
          legend: {
            type:'plain',				//----图例类型，默认为'plain'，当图例很多时可使用'scroll'
            bottom:'5',					//----图例相对容器位置,top\bottom\left\right
            data:[						//----图例内容
              {
                name:'应处置案件',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              },
              {
                name:'已处置案件',
                textStyle:{
                  color:'#fff',		//----单独设置某一个图例的颜色
                  //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                }
              }
            ],
          },

          xAxis: [
            {


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
              type: 'category',
              data: ['浦沿中队', '西兴中队', '长河中队']
            }
          ],
          yAxis: [
            {
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
              name:'应处置案件',
              type: 'bar',
              barWidth: 20,//柱图宽度
              barGap:'50%',
              // barCategoryGap:'50%',/*多个并排柱子设置柱子之间的间距*/
              itemStyle: {
                normal: {
                  color:'#2FB26B'
                }
              },
              data: [320, 332, 301]
            },
            {
              name:'已处置案件',
              type: 'bar',
              barWidth: 20,//柱图宽度
              barGap:'50%',
              // barCategoryGap:'100%',/*多个并排柱子设置柱子之间的间距*/
              itemStyle: {
                normal: {
                  color:'#00A0EB'

                }
              },
              data: [220, 182, 191]
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
          legend:{
            x:'center',
            y:'bottom',
            textStyle:{color:'#fff'},
            data:['允许投放数','目前投放数']
          },
          grid: {
            left: '0',
            right: '50',
            bottom: '30',
            top: '0',
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
              data:['百姓快租电单车','哈喽电单车','哈喽单车','美团单车',]
            }
          ],
          series: [{
            name:'允许投放数',
            type: 'bar',
            barWidth: 10,//柱图宽度
            barGap:'50%',
            barCategoryGap:'20%',/*多个并排柱子设置柱子之间的间距*/
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

                    { offset: 1, color: 'rgba(201,168,246,1)' },
                    { offset: 0, color: 'rgba(201,168,246,0)' },
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
            // '百姓快租','哈罗','美团',
            data: [ 1000,1000, 10000,10000,]
          },
            {
             name:'目前投放数',
              type: 'bar',
              barWidth: 10,//柱图宽度
              barGap:'50%',
              barCategoryGap:'20%',/*多个并排柱子设置柱子之间的间距*/
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
                      { offset: 1, color: 'rgba(3,238,252,1)' },
                      { offset: 0, color: 'rgba(3,238,252,0)' },
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
              // '百姓快租','哈罗','美团',
              data: [ 1000,1000, 8693,12822,]
            },
          ]
        },
        map: '', // 对象
        formData:{},
        totalData:{
          lampPostNum:'',//杆
          controlCabinetNum:'',
        },
        lightNum:{},
        controlList:[],
        parkList:[],
        pointList:[],
        timer:'',
        timerTwo:'',
        timerThree:'',
        pointTwoType:1,
        userList:[],
        commonVideoList:[],
        bikePartList:[],
        parkNum:'',
        showVideoDialog:false,
        playVideoUri:'',
        player: null,
        offectNum:1,
        listOne:[{
          one:'11',
          two:'22',
          three:'33'
        }],
        listTwo:[{
          one:'11',
          two:'22',
          three:'33'
        }],
        PieDataGas:{
          graphic: { // 这个属性可以在饼图内部填充图片,文字等
            elements: [{
              type: 'image',//需要填充图片,配置image,如果不需要图片可以配置其他的, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
              style: {
                image: point01, //这里添加图片地址
                width: 30,
                height: 51
              },
              left: 'center',//
              top: 'center' //配置图片居中
            }]
          },
          tooltip: {
            show: true,
          },
          title: [
            {
              show: false,
              text: '哈哈哈好22',
              left: '-1%',
              textStyle: {
                fontSize: 18,
                fontFamily: "PingFang SC",
                fontWeight: 500,
                color: "#feffff",
                lineHeight: 19,
              },
            },
            {
              show: false,
              text: '哈哈哈好',
              right: 0,
              textStyle: {
                fontSize: 12,
                fontFamily: "PingFang SC",
                left: 300,
                fontWeight: 400,
                color: "#FEFFFF",
                lineHeight: 19,
                opacity: 0.5,
              },
            },
          ],
          color: ['#EB4B4B', '#fff'],
          series: [{
            name:'一一',
            center:['50%','50%'],
            type:'pie',
            radius : [45, 43],
            label:{
              show:false,
              position:'center'
            },
            data:[
              {
                value:20,
                itemStyle:{
                  normal:{
                    // color:'rgb(17,122,252)'
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: 'rgb(22,109,222)'},
                        {offset: 1, color: 'rgb(21,202,243)'}
                      ]
                    )
                  }
                }
              }, {
                value:10,
                itemStyle:{
                  normal:{
                    color: "rgba(255,255,255,0.1)",
                  }
                }
              }
            ]},{
            name:'二二',
            center:['50%','50%'],
            type:'pie',
            radius : [39, 37],
            label:{
              show:false,
              position:'center'
            },
            data:[
              {
                value:80,
                itemStyle:{
                  normal:{
                    // color:'green'
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: 'rgb(245,219,41)'},
                        {offset: 1, color: 'rgb(240,57,1)'}
                      ]
                    )
                  }
                }
              }, {
                value:10,
                itemStyle:{
                  normal:{
                    color: "rgba(255,255,255,0.1)",
                  }
                }
              }]
          },{
            name:'三三',
            center:['50%','50%'],
            type:'pie',
            radius : [34, 32],
            label:{
              show:false,
              position:'center'
            },
            data:[
              {
                value:20,
                itemStyle:{
                  normal:{
                    // color:'green'
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: 'rgb(195,125,229)'},
                        {offset: 1, color: 'rgb(218,121,227)'}
                      ]
                    )
                  }
                }
              }, {
                value:10,
                itemStyle:{
                  normal:{
                    color: "rgba(255,255,255,0.1)",
                  }
                }
              }]
          }]
        },
      }
    },

    computed: {
      ...mapState({
        roles: state => state.user.roles,
      }),
      classOption () {
        return {
          step: 0.2, // 数值越大速度滚动越快
          limitMoveNum: this.listOne.length, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      },
      classTwoOption () {
        return {
          step: 0.2, // 数值越大速度滚动越快
          limitMoveNum: this.listTwo.length, // 开始无缝滚动的数据量 this.dataList.length
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
      this.getPieChart();//违规次数动效（共享单车）
      // this.getLampPostList('');


      // this.getControlCabinetlist();
      this.getParkList();
      //获取数字停车停车场数量
      this.getParkNum();
      this.getAllPark();
      window.handleVideo = this.handleVideo;
      window.closeVideoDialog = this.handleVideoClose;
      this.initPlayer()
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
      clearInterval(this.timerTwo);
      this.timerTwo = null;
      clearInterval(this.timerThree);
      this.timerThree = null;
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

      handleOnePointType(val){
        this.showOneType = val;
      },
      getPieChart(){
        let that = this;
        let i = 1;
        this.timer = setInterval(function () {
          if(i==1){
            that.chartDataThree.color=['rgb(255,213,84)','rgb(48,171,241)','rgb(249,138,127)'];
            // color:['rgb(255,213,84)','rgb(48,171,241)','rgb(249,138,127)','rgb(146,117,243)'],
            // [{name:'美团',value:24112},{name:'哈罗',value:15980},{name:'百姓快租',value:4909},]
            that.chartDataThree.series[0].data =  [{name:'美团',value:24112},{name:'哈罗',value:15980},{name:'百姓快租',value:4909},];
            i = 2;
          }else{
            that.chartDataThree.color=['rgb(48,171,241)','rgb(249,138,127)','rgb(255,213,84)'];
            that.chartDataThree.series[0].data =  [{name:'哈罗',value:15980},{name:'百姓快租',value:4909},{name:'美团',value:24112},];
            i = 1;
          }

        }, 3000);
      },
      handlePointType(val){
        this.pointType = val;
        if(val == 1){
          this.map.clearOverLays();
          this.getParkList();
        }else {
          this.getParkVideoList();
        }
      },
      handleTwoPointType(val){
        this.pointTwoType = val;
        if(val == 1){
          this.map.clearOverLays();
          // 停车场点位列表
        }else if(val == 2) {
          // 运维人员点位列表
          this.getUser();
        }else {
          // 普通视频点位列表
          this.getCommonVideoList();
        }
      },
      handleControlPointType(type){
        this.map.clearOverLays();
        this.showThreeType = type;
        if(type == 0){
          this.getControlCabinetlist('')
        }else{
          this.getControlCabinetlist(type)
        }
      },

      handlePageType(val){
        this.map.clearOverLays();
        this.activeIndex = val;
        if(val == 0){
          this.pointType = 1;
          this.getParkList();
        }else if(val == 1){
          //获取共享单车泊车位
          this.pointTwoType = 1;
          this.getCommonVideoNum();
          this.getBikePartList(0);
        }else if(val == 2){
          this.showType = 2;

          this.getChartData();
          this.getLampPostNum();
          this.getControlCabinetlist();
        }
        else if(val == 3){
          this.mapPoint('',[],this)
        }
      },
      //运维人员点位
      getUser(){
        this.mapPoint('user',this.userList,this)
      },
      //普通视频数量
      getCommonVideoNum(){
        getAllVideoPoint({class:4}).then((res) => {
          this.carData.commonVideo_num = res.data.putong;
        });
      },
      //普通视频点位
      getCommonVideoList(){
        getAllVideoPoint({class:4}).then((res) => {
          this.carData.commonVideo_num = res.data.putong;
          this.commonVideoList = res.data.list;
          this.mapPoint('point',this.commonVideoList,this)
        });
      },
      getParkNum(){
        getAllVideoPoint({class:3}).then((res) => {
          this.parkNum = res.data.parking;
        });
      },
      getAllPark(){
        getAllPark().then((res) => {
          let useRate = ((Number(res.data.shengyu)/Number(res.data.total))*100).toFixed(2);
          this.parkData = {
            total:res.data.total,
            useNum:res.data.shengyu,
            useRate:useRate
          };
        });
      },
      getParkVideoList(){
        getAllVideoPoint({class:3}).then((res) => {
          this.parkNum = res.data.parking;
          this.pointList = res.data.list;
          this.mapPoint('point',this.pointList,this);
        });
      },
      getPointList(){
        pointList({type:'allList'}).then((res) => {
          this.pointList = res.data;
          this.mapPoint('point',this.pointList,this)
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
      mapPoint(type,list,that){
        let countries = [];
        let countriesOverlay = new T.D3Overlay(init,redraw);
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
        let icon06 = new T.Icon({
          iconUrl: point06,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon07 = new T.Icon({
          iconUrl: point07,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon08 = new T.Icon({
          iconUrl: point08,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon09 = new T.Icon({
          iconUrl: point09,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon11= new T.Icon({
          iconUrl: point11,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon12 = new T.Icon({
          iconUrl: point12,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon13 = new T.Icon({
          iconUrl: point13,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon14= new T.Icon({
          iconUrl: point14,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon15 = new T.Icon({
          iconUrl: point15,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let icon16 = new T.Icon({
          iconUrl: point16,
          iconSize: new T.Point(30, 51),
          // iconAnchor: new T.Point(34, 59)
        });
        let markers = []
        if(type == 'control'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            // status 1开   2 关
            if(list[i].status == 1){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon05,this,list[i]);
            }else if(list[i].status == 2){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon04,this,list[i]);
            }else if(list[i].status == 3){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon03,this,list[i]);
            }
          }
        }else if(type == 'park'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            // 0：关  1：开
            if(list[i].way_longitude  && list[i].way_latitude){
              let point = new T.LngLat(list[i].way_longitude,list[i].way_latitude);
              markers[i]  = drawTMaker(point, icon01,this,list[i]);
            }else{
              if(list[i].class==1){
                let point = new T.LngLat(list[i].longitude,list[i].latitude);
                markers[i]  = drawTMaker(point, icon08,this,list[i]);
              }else if(list[i].class==3){
                let point = new T.LngLat(list[i].longitude,list[i].latitude);
                markers[i]  = drawTMaker(point, icon09,this,list[i]);
              }
            }
          }
        }else if(type == 'point'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            if(list[i].class==1){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon08,this,list[i]);
            }else if(list[i].class==2){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon09,this,list[i]);
            }else if(list[i].class==3){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon09,this,list[i]);
            }else if(list[i].class==3){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon09,this,list[i]);
            }

          }
        }else if(type == 'bike'){
          for (let i = 0; i < list.length; i++) {
            // var marker
            let point = new T.LngLat(list[i].log,list[i].lat);
            if(list[i].type == '停车区域'){
              if(list[i].status == 1){
                markers[i]  = drawTMaker(point, icon11,this,list[i]);
              }else if(list[i].status == 2){
                markers[i]  = drawTMaker(point, icon12,this,list[i]);
              }else if(list[i].status == 3){
                markers[i]  = drawTMaker(point, icon13,this,list[i]);
              }
            }else if(list[i].type == '重点监管区域'){
              if(list[i].status == 1){
                markers[i]  = drawTMaker(point, icon14,this,list[i]);
              }else if(list[i].status == 2){
                markers[i]  = drawTMaker(point, icon15,this,list[i]);
              }else if(list[i].status == 3){
                markers[i]  = drawTMaker(point, icon16,this,list[i]);
              }
            }

          }
        }else{

          for (let i = 0; i < list.length; i++) {
            // var marker
            // status 1开   2 关
            if(list[i].status == 1){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon07,this,list[i]);
            }else if(list[i].status == 2){
              let point = new T.LngLat(list[i].longitude,list[i].latitude);
              markers[i]  = drawTMaker(point, icon06,this,list[i]);
            }
          }
        }

          //往地图上添加一个marker。传入参数坐标信息lnglat。传入参数图标信息。
          function drawTMaker(lnglat,icon,that,txt){

            var marker =  new T.Marker(lnglat, {icon: icon});
            that.map.addOverLay(marker);
            marker.addEventListener("click", function (m) {
              let infoWin1 = new T.InfoWindow();
              let aa = JSON.stringify(txt).replace(/"/g, '&quot;')
              let status;
              if(txt.status == 1){
                status = '开'
              }else  if(txt.status == 2){
                status = '关'
              }else {
                status = '故障'
              }
              let sContent = '';
              if(type == 'park'){
                let park_type = '';
                // 0:地面停车场;1:地下停车场
                if(txt.park_type == 0){
                  park_type = '地面停车场'
                }else if(txt.park_type == 1){
                  park_type = '地下停车场'
                }
               if(txt.way_longitude  && txt.way_latitude){
                 sContent =
                   '<div class="point_info">' +
                   '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
                   '<tr>' +
                   '<td>停车场名称</td><td>' + txt.park_name + '</td>' +
                   '</tr>'+
                   '<tr>' +
                   '<td>总泊位数</td><td>' + txt.total_num + '</td>'+
                    '</tr>'+
                   '<tr>' +
                   '<td>剩余泊位数</td><td>' + txt.left_num + '</td>'+
                   '</tr>'+
                   '<tr>' +
                   '<td>性质</td><td>' + park_type + '</td>'+
                   '</tr>'+
                   '<tr>' +
                   '<td>充电桩泊位</td><td>' + txt.charge_num + '</td>'+
                   '</tr>'+
                   '<tr>' +
                   '<td>机械泊位</td><td>' + txt.machine_num + '</td>'+
                   '</tr>'+
                   '<tr>' +
                   '<td>停车场详细地址</td><td>' + txt.address + '</td>'+
                   '</tr>'+
                   '</table>'+
                   // '<p class="f14 time">停车场名称：' + txt.park_name + '</p>' +
                   // '<p class="f14 time">停车场类型：' + txt.park_type_name + '</p>' +
                   // '<p class="f14 time">停车场地址：' + txt.address + '</p>' +
                   '</div>';
               }else{
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
                   '<td></td><td class="text-right baseColor" onClick="handleVideo('+ aa +')">查看视频</td>'+
                   '</tr>'+
                   '</table>'+
                   '</div>';
               }
              }else if(type == 'point'){

                // '<p class="f14 time">监控名称：' + txt.name + '</p>' +
                // '<p class="f14 time">所属区域：' + txt.depart_name + '</p>' +
                // '<p class="f14 time">来源区域：' + txt.community_name + '</p>' +
                // '<p class="f14 time">所在地址：' + txt.install_place + '</p>' +
                // '<p class="f14 baseColor text-right" onClick="handleVideo()">查看视频</p>' +

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
                  '<td></td><td class="text-right baseColor" onClick="handleVideo('+ aa +')">查看视频</td>'+
                  '</tr>'+
                  '</table>'+
                  '</div>';
              }else if(type == 'bike'){
                // '<p class="f14 time">监控名称：' + txt.name + '</p>' +
                // '<p class="f14 time">状态：' + status + '</p>' +
                let bikeStatus;
                if(txt.status == 1){
                  bikeStatus = '异常'
                }else if(txt.status == 2){
                  bikeStatus = '警报'
                }else if(txt.status == 3){
                  bikeStatus = '正常'
                }
                sContent =
                  '<div class="point_info">' +
                  '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
                  '<tr>' +
                  '<td>区域名称</td><td>' + txt.company + '</td>' +
                  '</tr>'+
                  '<tr>' +
                  '<td>区域类型</td><td>' + txt.type + '</td>'+
                  '</tr>'+
                  '<tr>' +
                  '<td>允许投放数</td><td>' + txt.allow_num + '</td>'+
                  '</tr>'+
                  '<tr>' +
                  '<td>当前投放数</td><td>' + txt.now_num + '</td>'+
                  '</tr>'+
                  '<tr>' +
                  '<td>状态</td><td>' + bikeStatus + '</td>'+
                  '</tr>'+
                  '</table>'+
                  '</div>';
              }else{
                // '<p class="f14 time">监控名称：' + txt.name + '</p>' +
                // '<p class="f14 time">状态：' + status + '</p>' +
                sContent =
                  '<div class="point_info">' +
                  '<table class="f14 point_detail_table" border="0" cellspacing="0" cellpadding="0">' +
                  '<tr>' +
                  '<td>监控名称</td><td>' + txt.name + '</td>' +
                  '</tr>'+
                  '<tr>' +
                  '<td>状态</td><td>' + status + '</td>'+
                  '</tr>'+
                  '<tr>' +
                  '<td>地址</td><td>' + txt.address + '</td>'+
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
      handleTypeLight(val){
        this.map.clearOverLays();
        this.showType = val
        if(val == 1){
          this.getLampPostList('');
        }else{
          this.getControlCabinetlist('');
        }
      },
      handleParkPointType(type){
        this.showOneType = type;
        this.map.clearOverLays();
        this.getBikePartList(type);
      },
      handleLightPointType(type){
        this.map.clearOverLays();
        this.showTwoType = type;
        if(type == 0){
          this.getLampPostList('')
        }else{
          this.getLampPostList(type)
        }
      },
      //亮灯杆数字
      getLampPostNum(status){
        getLampPostList({status:status}).then((res) => {
          this.lightData.lightCount = res.data.count;
        });
      },
      //亮灯杆列表
      getLampPostList(status){
        this.lampPostList = [];
        let that = this
        for(let i = 1; i<=Math.ceil(Number(this.lightData.lightCount)/Number(500));i++){
          getLampPostList({page:i,pageSize:500,status:status}).then((res) => {
            if(i == 1){
              this.lightData.lightCount = res.data.count;
            }
            this.lampPostList = this.lampPostList.concat(res.data.data.data);
            if(i == Math.ceil(Number(this.lightData.lightCount)/Number(500))){
              this.mapPoint('lamp',that.lampPostList,that)
            }

          });
        }

      },
      //控制柜列表
      getControlCabinetlist(status){
        getcontrolcabinetlist({status:status}).then((res) => {
          this.lightData.cabinetCount =  res.data.count;
          this.lightData.cabinetTrouble = res.data.trouble;
          let b= res.data.data;
          // let a = [{
          //   address: "长江西路湘湖34北路",
          //   latitude: 30.188826,
          //   longitude:120.198799,
          //   name: "长湘109",
          //   status: 3,},{
          //   address: "长江西路湘湖北23路",
          //   latitude: 30.183412,
          //   longitude: 120.220823,
          //   name: "长湘109",
          //   status: 3,}]
          // b = b.concat(a);
          this.controlList = b
          this.mapPoint('control',this.controlList,this)
        });
      },
      getChartData(){
        getevaluate({year:this.$moment().format('YYYY')}).then((res) => {
          this.formData = res.data;
          this.PieData2.series[0].data = [((Number(res.data.powerRate))*100).toFixed(2)];
          this.PieData2.title[0].text = ((Number(res.data.powerRate))*100).toFixed(2)+'%';
          this.PieData.title[0].text = ((Number(res.data.lightRate))*100).toFixed(2)+'%';
          generalIndex().then((ress) => {
            this.lightNum={
              // 亮灯数=亮灯率*总灯数
              num:Number(Number(res.data.lightRate)*Number(ress.data.light.count)).toFixed(0),
              count:ress.data.light.count
            };
          });
          let that = this;
          let i = 1;
          this.timerTwo = setInterval(function () {
            if(i==1){
              that.percentageNum = 80;
              that.PieData2.series[0].data = [((Number(res.data.powerRate))*100).toFixed(2)];
              that.PieData.series[0].data = [((Number(res.data.lightRate))*100).toFixed(2)];
              i = 2;
            }else{
              that.percentageNum = 0;
              that.PieData2.series[0].data = [0];
              that.PieData.series[0].data =  [0];
              i = 1;
            }

          }, 2000);
        });
      },
      //获取灯总数及亮灯数
      getData(){
        generalIndex().then((res) => {
          this.lightNum={
            // 亮灯数=亮灯率*总灯数
            num:Number(res.data.lightRate)*Number(res.data.light.count),
            count:res.data.light.count
          };
        });
      },
      //获取共享单车泊车位点位
      getBikePartList(val){
      // class:0  全部   1、重点   2  停车      status  1、异常   2、警报  3、正常
        getShareCar({class:val}).then((res) => {
          this.bikePartList = res.data.list;
          this.mapPoint('bike',this.bikePartList,this)
        });
      },
      //获取停车场点位及视频点位
      getParkList(){
        parkList().then((res) => {
          // this.parkList = res.data.data;
          this.parkList = res.data.data;
          // pointList({type:'allList'}).then((res) => {
          //   // this.pointList = res.data;
          //   let b = a.concat(res.data);
          //   this.parkList = b;
          //   this.mapPoint('park',this.parkList,this)
          // });
          this.mapPoint('park',this.parkList,this)
        });
      },
    }
  }
</script>
<style lang="scss" scoped>
  .seamless-warp{
    height: 150px;
  }
  /deep/.tdt-infowindow-content-wrapper{
    width: auto;
  }
  .progress_cont{
    border: 1px solid rgba(48,171,241,0.3) !important;
  }

.progress_light{

  /deep/.el-progress-bar__inner{
    background-image: linear-gradient(to left,rgba(48,171,241,1) ,  rgba(48,171,241,0)) !important; /* 标准的语法（必须放在最后） */
  }
}
.bor_circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  &.bor_red{
    border:10px solid #f98a7f;
    .circle_two{
      border:1px solid #f98a7f;
    }
  }
  &.bor_blue{
    border:10px solid #9275f3;
    .circle_two{
      border:1px solid #9275f3;
    }
  }
  &.bor_green{
    border:10px solid rgb(49,174,106);
    .circle_two{
      border:1px solid rgb(49,174,106);
    }
  }
  .circle_two{
    width: 70px;
    height:70px;
    border-radius: 50%;
    line-height: 100px;
  }
 }

  .bicycle{
    .flex-item{
      padding: 20px 0;
      &:nth-child(2){
        margin: 0 10px;
      }
      &:nth-child(3){
        margin-right: 10px;
      }
    }
  }
  .link_intro{
    position: fixed;
    left: 100px;
    top: 13vh;
    z-index: 2000;
    width: 100px;
    padding: 20px;
    margin-left: 3vh;
    background: rgba(4,40,90,1);
    li{
      & > span{
        width: 40px;
        height: 10px;
        margin: 3px auto 15px;
      }
    }
    .color_bg01{
      background: rgba(255,100,71,1);
    }
    .color_bg02{
      background: rgba(254,98,71,1);
    }
    .color_bg03{
      background: rgba(222,194,21,1);
    }
    .color_bg04{
      background: rgba(231,96,196,1);
    }
    .color_bg05{
      background: rgba(147,126,214,1);
    }
    .color_bg06{
      background: rgba(15,165,197,1);
    }
    .color_bg07{
      background: rgba(145,178,61,1);
    }
  }

</style>
