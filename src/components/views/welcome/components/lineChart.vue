<template>
  <el-row class="panel-group">
    <div id="chartLine" style="width: 100%; height: 400px"></div>
  </el-row>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['toChildData'],
  data() {
    return {
      chartLine: null,
      fatherData: this.toChildData,
    }
  },
  computed: {
    fasData() {
      this.chartLine = null
      return this.toChildData
    },
  },
  watch: {
    fasData(val) {
      this.chartLine = null
      this.fatherData = val
      this.drawLineChart(this.toChildData)
    },
  },
  methods: {
    drawLineChart(val) {
      this.chartLine = echarts.init(document.getElementById('chartLine'))
      this.chartLine.clear()
      this.chartLine.setOption({
        title: {
          text: 'Line Chart',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: val.legendData,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: val.seriesData,
      })
    },
  },
  mounted: function () {
    this.drawLineChart(this.toChildData)
    window.addEventListener('resize', () => {
      this.chartLine.resize()
    })
  },
}
</script>
<style lang="scss" scoped>
.panel-group {
  background: #fff;
  padding: 0 16px 16px;
  margin-bottom: 32px;
}
</style>