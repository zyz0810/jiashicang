<template>

  <div class="clearfix">
    <div class="fl" :style="{width: divWidth}">
      <div :class="className" ref="pieChart" :style="{height:height,width:width}" />
    </div>
<!--    <div class="legend_span fr" v-if="lineChartLegend.length>0">-->
<!--      <div v-for="(item,index) in lineChartLegend" @click="editLegend">-->
<!--        <label :for="index">-->
<!--          <input type="checkbox" checked="checked" ref="pieCheckbox" :id="index" :value="item.name"/>-->
<!--          <span class="color_block" :style="{background:item.color}"></span>-->
<!--          {{item.name}}-->
<!--        </label>-->
<!--      </div>-->
<!--    </div>-->


  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    divWidth:{
      type:String,
      default:'100%',
      required:true
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    },
    // lineChartLegend:{
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    },
    // lineChartLegend: {
    //   deep: true,
    //   handler(val) {
    //     if(val.length >0){
    //       this.setOptions(val)
    //     }
    //
    //   }
    // },
    divWidth: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    let echarts = require("echarts/lib/echarts")
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
      this.chart = echarts.init(this.$refs.pieChart, 'macarons')
      this.setOptions(this.chartData)

    },
    setOptions({ xAxis,grid,yAxis,series  } = {}) {
      // // x轴
      // xAxis: {
      //   show: false, // 不显示
      // },
      // // y轴
      // yAxis: {
      //   show: false, // 不显示
      // },
      // grid: {
      //   top: '2.5%',
      //     right: '40',
      //     bottom: '2.5%',
      //     left: 0,
      // },
      // series: [{
      //   type: 'liquidFill',
      //   radius: '96%', // 半径大小
      //   center: ['50%', '50%'], // 布局位置
      //   data: data, // 水球波纹值
      //   color: ['#36A989'],//设置颜色系列
      //   label: {
      //     normal: {
      //       // color: '#FC7272',
      //       color: '#36A989',
      //       textStyle: {
      //         fontSize: 18
      //       },
      //       formatter: (params) => { //console.log(params)
      //         let newValue = params.value * 100;
      //         return newValue.toFixed(2) + '%\n联网车位数\n' + ToInt
      //       }
      //     }
      //   },
      //   outline: { // 轮廓设置
      //     show: true,
      //     borderDistance: 2, // 轮廓间距
      //     itemStyle: {
      //       // borderColor: '#294D99', // 轮廓颜色
      //       borderColor: '#36A989', // 轮廓颜色
      //       borderWidth: 4, // 轮廓大小
      //       shadowBlur: 'none', // 轮廓阴影
      //     }
      //   },
      // }
      // ]
      this.chart.setOption({
        xAxis:xAxis,
        yAxis:yAxis,
        grid: grid,
        series: series,
      })
    },
    editLegend(){
      var selectOption = {};
      var options = this.chartData;
      this.$refs.pieCheckbox.forEach(function (c) {
        c.checked?selectOption[c.value]=true:selectOption[c.value]=false;
      });
      options.legend.selected = selectOption;
      this.chart.setOption(options);
    }
  }
}
</script>
