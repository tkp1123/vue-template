<template>
  <el-row class="panel-group">
    <div id="chartLine" style="width:100%; height:400px;"></div>
  </el-row>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      chartLine: null,
    }
  },
  methods: {
    drawLineChart() {
      this.chartLine = echarts.init(document.getElementById('chartLine'))
      this.chartLine.setOption({
        title: {
          text: 'Line Chart',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['apple', 'pear', 'grape', 'cherry'],
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
        series: [
          {
            name: 'apple',
            type: 'line',
            stack: '总量',
            color: '#40c9c6',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'pear',
            type: 'line',
            stack: '总量',
            color: '#36a3f7',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'grape',
            type: 'line',
            stack: '总量',
            color: '#f4516c',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: 'cherry',
            type: 'line',
            stack: '总量',
            color: '#34bfa3',
            data: [824, 935, 961, 938, 1230, 1310, 1120],
          },
        ],
      })
    },
  },
  mounted: function () {
    this.drawLineChart()
    window.addEventListener('resize', () => {
      this.chartLine.resize()
    })
  },
}
</script>
<style lang="scss" scoped>
.panel-group {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}
</style>