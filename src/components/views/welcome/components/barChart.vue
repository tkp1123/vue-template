<template>
  <el-row>
    <div id="chartBar" class="echart" style="width: 100%; height: 400px"></div>
  </el-row>
</template>
<script>
import echarts from 'echarts'
const animationDuration = 3000
export default {
  data() {
    return {
      chartBar: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawBarChart()
    })
    this.drawBarChart()
    window.addEventListener('resize', () => {
      this.chartBar.resize()
    })
  },
  methods: {
    drawBarChart() {
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
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: 'apple',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [179, 152, 500, 234, 190, 930, 1220],
            animationDuration,
            itemStyle: {
              normal: {
                color: '#40c9c6',
              },
            },
          },
          {
            name: 'pear',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [180, 522, 2003, 3341, 3901, 3130, 1220],
            animationDuration,
            itemStyle: {
              normal: {
                color: '#36a3f7',
              },
            },
          },
          {
            name: 'grape',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [301, 152, 2010, 3134, 3190, 1330, 1220],
            animationDuration,
            itemStyle: {
              normal: {
                color: '#f4516c',
              },
            },
          },
          {
            name: 'cherry',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [130, 152, 100, 134, 190, 130, 2120],
            animationDuration,
            itemStyle: {
              normal: {
                color: '#34bfa3',
              },
            },
          },
        ],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>