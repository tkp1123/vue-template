<template>
  <el-row>
    <div id="chartPie" class="echart" style="width: 100%; height: 400px"></div>
  </el-row>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      chartPie: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPieChart()
    })
    this.drawPieChart()
    window.addEventListener('resize', () => {
      this.chartPie.resize()
    })
  },
  methods: {
    drawPieChart() {
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
        series: [
          {
            name: '访问来源',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              {
                value: 320,
                name: 'apple',
                itemStyle: {
                  normal: {
                    color: '#40c9c6',
                  },
                },
              },
              {
                value: 240,
                name: 'pear',
                itemStyle: {
                  normal: {
                    color: '#36a3f7',
                  },
                },
              },
              {
                value: 149,
                name: 'grape',
                itemStyle: {
                  normal: {
                    color: '#f4516c',
                  },
                },
              },
              {
                value: 100,
                name: 'cherry',
                itemStyle: {
                  normal: {
                    color: '#34bfa3',
                  },
                },
              },
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
          },
        ],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>