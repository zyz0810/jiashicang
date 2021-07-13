<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
  import resize from './mixins/resize'

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
        chart: null
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
      },
      setOptions({ title,tooltip,legend,grid,xAxis,yAxis,series } = {}) {
        // this.chart.setOption(BarData)
        this.chart.setOption({
          title: title,
          tooltip: tooltip,
          legend: legend,
          grid: grid,
          xAxis: xAxis,
          yAxis: yAxis,
          series: series

        })
      },
    }
  }
</script>
