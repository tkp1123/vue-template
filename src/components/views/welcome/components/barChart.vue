<template>
  <el-row>
    <div id="chartBar" class="echart" style="width: 100%; height: 400px"></div>
  </el-row>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
export default {
  data() {
    return {
      chartBar: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getData()
    })
    window.addEventListener('resize', () => {
      this.chartBar.resize()
    })
  },
  methods: {
    getData() {
      axios.post('http://localhost:3000/app/chartBar').then((res) => {
        if (res.data.code == 200) {
          var series = res.data.data
          this.drawBarChart(series)
        }
      })
    },
    drawBarChart(series) {
      this.chartBar = echarts.init(document.getElementById('chartBar'))
      this.chartBar.clear()
      this.chartBar.setOption({
        title: {
          text: '柱状图',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: 40,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: true,
            },
          },
        ],
        series: series,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>