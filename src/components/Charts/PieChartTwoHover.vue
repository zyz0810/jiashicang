<template>
  <div class="clearfix">
    <div :style="{width: divWidth}">
      <div :class="className" ref="pieChart" :style="{height:height,width:width}" />
    </div>
    <div class="legend_span flex clr_white bold" v-if="PieChartLegend.length>0">
      <div v-for="(item,index) in PieChartLegend" @click="editLegend" class="flex-item text-center">
        <div class="flex baseColor">
          <span class="color_block" :style="{background:item.color}"></span>
          {{item.name}}
        </div>
        <p class="mt_5">{{item.val}}%</p>
      </div>
    </div>


  </div>

</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { autoHover } from './../../utils/tool'
const animationDuration = 2000
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
    }
  },
  data() {
    return {
      chart: null,
      selectOption:{},
      tootipTimer:''
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    },
    PieChartLegend: {
      deep: true,
      handler(val) {
        if(val.length >0){
          this.setOptions(val)
        }

      }
    },
    height: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    },
    divWidth: {
      deep: true,
      handler(val) {
        this.setOptions(val)
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
      this.tootipTimer && this.tootipTimer.clearLoop(); // this.tootipTimer 在data里定义
      this.tootipTimer = 0;
      this.tootipTimer = autoHover(this.chart, this.chartData, this.chartData.series[0].data.length, 1000);
    },
    setOptions({title,calculable,tooltip,color,polar,angleAxis,legend,radiusAxis,series } = {}) {
      this.chart.setOption({
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
    editLegend(){

      var selectOption = {};
      var options = this.chartData;
      this.$refs.pieCheckbox.forEach(function (c) {
        c.checked?selectOption[c.value]=true:selectOption[c.value]=false;
      });
      options.legend.selected = selectOption;
      this.setOptions(options);
    }
  }
}
</script>
<style lang="scss" scoped>


</style>
