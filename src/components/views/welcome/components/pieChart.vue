<template>
  <el-row>
    <div id="chartPie" class="echart" style="width: 100%; height: 400px"></div>
  </el-row>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
export default {
  data() {
    return {
      chartPie: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getData()
    })
    window.addEventListener('resize', () => {
      this.chartPie.resize()
    })
  },
  methods: {
    getData() {
      axios.post('http://localhost:3000/app/chartPie').then((res) => {
        if (res.data.code == 200) {
          var series = res.data.data
          this.drawPieChart(series)
        }
      })
    },
    drawPieChart(series) {
      this.chartPie = echarts.init(document.getElementById('chartPie'))
      this.chartPie.clear()
      this.chartPie.setOption({
        title: {
          text: '饼图',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['apple', 'pear', 'grape', 'cherry'],
        },
        series: series,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>