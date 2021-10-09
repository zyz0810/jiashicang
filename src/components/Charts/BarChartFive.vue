<template>
  <div :class="className" :style="{height:height,width:width}" />
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
      height: {
        type: String,
        default: '500px'
      },
      chartData: {
        deep: true,
        handler(val) {
          this.setOptions(val)
        }
      },
    },
    data() {
      return {
        chart: null,
        tootipTimer:''
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
        console.log('4454545')
        console.log(this.chartData.legend)
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
        this.chart = echarts.init(this.$el, 'macarons')

        this.setOptions(this.chartData)
        this.tootipTimer && this.tootipTimer.clearLoop(); // this.tootipTimer 在data里定义
        this.tootipTimer = 0;
        this.tootipTimer = autoHover(this.chart, this.chartData, this.chartData.series[0].data.length, 1000);
      },
      setOptions({ title,tooltip,legend,grid,color,xAxis,yAxis,series } = {}) {
        // this.chart.setOption(BarData)
        this.chart.setOption({
          title: title,
          tooltip: tooltip,
          legend: legend,
          grid: grid,
          color:color,
          xAxis: xAxis,
          yAxis: yAxis,
          series: series

        })
      },
    }
  }
</script>
