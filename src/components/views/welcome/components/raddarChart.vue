<template>
  <el-row>
    <div
      id="chartRaddar"
      class="echart"
      style="width: 100%; height: 400px"
    ></div>
  </el-row>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
const animationDuration = 3000
export default {
  data() {
    return {
      chartRaddar: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getData()
    })
    window.addEventListener('resize', () => {
      this.chartRaddar.resize()
    })
  },
  methods: {
    getData() {
      axios.post('http://localhost:3000/app/chartRaddar').then((res) => {
        if (res.data.code == 200) {
          var data = res.data.data
          this.drawRaddarChart(data)
        }
      })
    },
    drawRaddarChart(data) {
      this.chartRaddar = echarts.init(document.getElementById('chartRaddar'))
      this.chartRaddar.clear()
      this.chartRaddar.setOption({
        title: {
          text: '雷达图',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            },
          },
          indicator: [
            { name: '销量', max: 10000 },
            { name: '产量', max: 20000 },
            { name: '价格', max: 20000 },
            { name: '质地', max: 20000 },
            { name: '成色', max: 20000 },
            { name: '口感', max: 20000 },
          ],
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['apple', 'pear', 'grape', 'cherry'],
        },
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1,
              },
            },
            data: data,
            animationDuration: animationDuration,
          },
        ],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>