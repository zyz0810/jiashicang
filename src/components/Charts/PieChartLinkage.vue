<template>
  <div class="clearfix">
<!--    <div :style="{width: divWidth}">-->
<!--      <div :class="className" ref="pieChart" :style="{height:height,width:width}" />-->
<!--    </div>-->
<!--    <div class="legend_span flex clr_white bold" v-if="PieChartLegend.length>0">-->
<!--      <div v-for="(item,index) in PieChartLegend" @click="editLegend" class="flex-item text-center">-->
<!--        <div class="flex baseColor">-->
<!--          <span class="color_block" :style="{background:item.color}"></span>-->
<!--          {{item.name}}-->
<!--        </div>-->
<!--        <p class="mt_5">{{item.val}}%</p>-->
<!--      </div>-->
<!--    </div>-->
    <div class="weui-cell">
      <div class="weui-cell__hd" style="width: 40%">
        <div :style="{width: divWidth}">
          <div :class="className" ref="pieChart" :style="{height:height,width:width}" />
        </div>
      </div>
      <div class="weui-cell__bd">
        <vueSeamlessScroll :data="PieDataGasListOne" class="seamless-warp text-center" :class-option="classThreeOption" v-show="pieIndex == 0">
          <div style="margin-bottom: 150px;"></div>
        </vueSeamlessScroll>
        <vueSeamlessScroll :data="PieDataGasListTwo" class="seamless-warp text-center" :class-option="classTwoOption" v-show="pieIndex == 1">
          <div class="weui-cell gas_scroll" v-for="(item,index) in PieDataGasListTwo" :key="item.id">
            <div class="weui-cell__hd" style="width: 20px;">
              <span class="circle orange_bg"></span>
            </div>
            <div class="weui-cell__bd">
              <p>钢瓶编码：{{item.gas_code}}</p>
              <p class="orange">{{item.scrap_date}} 报废</p>
            </div>
          </div>
          <div style="margin-bottom: 150px;"></div>
        </vueSeamlessScroll>
        <vueSeamlessScroll :data="PieDataGasListThree" class="seamless-warp text-center" :class-option="classThreeOption" v-show="pieIndex == 2">
          <div class="weui-cell gas_scroll" v-for="(item,index) in PieDataGasListThree" :key="item.id">
            <div class="weui-cell__hd" style="width: 20px;">
              <span class="circle purple_bg"></span>
            </div>
            <div class="weui-cell__bd">
              <p>钢瓶编码：{{item.gas_code}}</p>
              <p class="purple">{{item.next_check_date}} 检验</p>
            </div>
          </div>
          <div style="margin-bottom: 150px;"></div>
        </vueSeamlessScroll>

      </div>
    </div>

  </div>

</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import vueSeamlessScroll from 'vue-seamless-scroll'
import { autoHover } from './../../utils/tool'
const animationDuration = 2000
export default {
  mixins: [resize],
  components:{vueSeamlessScroll},
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    divWidth: {
      type: String,
      default: '100%',
      required: true
    },
    height: {
      type: String,
      default: '500px',
      required: true
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    },
    PieChartLegend: {
      type: Array,
      required: true
    },
    PieDataGasList: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      chart: null,
      selectOption:{},
      tootipTimer:'',
      PieDataGasListOne:[],
      PieDataGasListTwo:[],
      PieDataGasListThree:[],
      pieIndex:1,
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    },
    // PieChartLegend: {
    //   deep: true,
    //   handler(val) {
    //     if(val.length >0){
    //       this.setOptions(val)
    //     }
    //
    //   }
    // },
    // height: {
    //   deep: true,
    //   handler(val) {
    //     this.setOptions(val)
    //   }
    // },
    // divWidth: {
    //   deep: true,
    //   handler(val) {
    //     this.setOptions(val)
    //   }
    // },
    PieDataGasList: {
      deep: true,
      handler(val) {
        console.log('jjjjjjj')
        console.log(val)
        this.setScroll(val)
      }
    },
  },
  computed: {
    classTwoOption () {
      console.log('第二个')
      console.log(this.PieDataGasList)
      console.log(this.PieDataGasListTwo.length)
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        // limitMoveNum: this.PieDataGasListTwo.length, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    },
    classThreeOption () {
      console.log('第三个')
      console.log(this.PieDataGasListThree.length)
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        // limitMoveNum: this.PieDataGasListThree.length, // 开始无缝滚动的数据量 this.dataList.length
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
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.pieChart, 'macarons');
      this.setOptions(this.chartData);
      setTimeout(()=>{
        this.chart.dispatchAction({
          type: 'showTip',
          seriesIndex:1,  // 显示第几个series
          dataIndex: 0 // 显示第几个数据
        });
      },500)
      // this.tootipTimer && this.tootipTimer.clearLoop(); // this.tootipTimer 在data里定义
      // this.tootipTimer = 0;
      // this.tootipTimer = autoHover(this.chart, this.chartData, this.chartData.series[0].data.length, 1000);

      let that = this;
      // 移出当前整个图表
      this.chart.on('globalout',function(params) {
        // let tagTime1 = that.searchPOsition(this.chartData)//查找要设置的点的tooltip在数据第几个series的第几个位置
        // 显示 tooltip
        that.pieIndex = 1;
        that.chart.dispatchAction({
          type: 'showTip',
          seriesIndex:1,  // 显示第几个series
          dataIndex: 0 // 显示第几个数据
        })
      })
      this.chart.on("click", this.eConsole);//鼠标移入
      // this.chart.on("mouseover", this.eConsole);//鼠标移入

    },
    eConsole(param) {
      let i = param.seriesIndex;// 获取当前点击索引，
      if( i==0){
        this.pieIndex = 0;
      }else if(i==1){
        this.pieIndex = 1;
        this.PieDataGasListTwo = this.PieDataGasList[0];
      }else if(i==2){
        this.pieIndex = 2;
        this.PieDataGasListThree = this.PieDataGasList[1];
      }
    },
    setOptions({title,calculable,tooltip,color,polar,angleAxis,legend,radiusAxis,series,graphic } = {}) {
      this.chart.setOption({
        graphic:graphic,
        calculable:calculable,
        color:color,
        title: title,
        tooltip: tooltip,
        legend: legend,
        polar:polar,
        angleAxis:angleAxis,
        radiusAxis:radiusAxis,
        series: series
      })
    },
    setScroll(val) {
      console.log('获取之后')
      console.log(val)
      this.PieDataGasListTwo = val[0];
      this.PieDataGasListThree = val[1];
    },
    // editLegend(){
    //   let selectOption = {};
    //   let options = this.chartData;
    //   this.$refs.pieCheckbox.forEach(function (c) {
    //     c.checked?selectOption[c.value]=true:selectOption[c.value]=false;
    //   });
    //   options.legend.selected = selectOption;
    //   this.setOptions(options);
    // }
  }
}
</script>
<style lang="scss" scoped>
  .seamless-warp{
    height: 150px;
  }
.circle{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: block;
}
  .purple{
    color: rgb(195,119,235);
  }
  .orange{
    color: rgb(238,122,64);
  }
  .purple_bg{
    background: rgb(195,119,235);
  }
  .orange_bg{
    background: rgb(238,122,64);
  }
  .gas_scroll{
    line-height: 2;
    /*weui-cell__bd*/
    text-align: left;
  }
</style>
