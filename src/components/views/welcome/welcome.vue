<template>
  <div class="dashboard-editor-container">
    <PanelGroup @handleClick="handleSetClick"></PanelGroup>
    <div class="frashDiv el-icon-refresh" @click="resetChart()"></div>
    <LineChart :toChildData="toChildData"></LineChart>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <RaddarChart></RaddarChart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <PieChart></PieChart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <BarChart></BarChart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from 'axios'
import PanelGroup from './components/panelGroup'
import LineChart from './components/lineChart'
import RaddarChart from './components/raddarChart'
import PieChart from './components/pieChart'
import BarChart from './components/barChart'
export default {
  name: 'welcome',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
  },
  data() {
    return {
      type: '',
      toChildData: '',
      appleData: {
        name: 'apple',
        type: 'line',
        stack: '总量',
        color: '#40c9c6',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      pearData: {
        name: 'pear',
        type: 'line',
        stack: '总量',
        color: '#36a3f7',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      grapeData: {
        name: 'grape',
        type: 'line',
        stack: '总量',
        color: '#f4516c',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
      cherryData: {
        name: 'cherry',
        type: 'line',
        stack: '总量',
        color: '#34bfa3',
        data: [824, 935, 961, 938, 1230, 1310, 1120],
      },
      legendData: ['apple', 'pear', 'grape', 'cherry'],
    }
  },
  created() {
    this.getList()
    this.toChildData = {
      seriesData: [
        this.appleData,
        this.pearData,
        this.grapeData,
        this.cherryData,
      ],
      legendData: this.legendData,
    }
  },
  methods: {
    getList() {
      axios.post('http://www.bai.com').then((res) => {
        console.log(res)
      })
    },
    handleSetClick(type) {
      switch (type) {
        case (type = 'apple'):
          this.toChildData = {
            seriesData: [this.appleData],
            legendData: ['apple'],
          }
          break
        case (type = 'pear'):
          this.toChildData = {
            seriesData: [this.pearData],
            legendData: ['pear'],
          }
          break
        case (type = 'grape'):
          this.toChildData = {
            seriesData: [this.grapeData],
            legendData: ['grape'],
          }
          break
        case (type = 'cherry'):
          this.toChildData = {
            seriesData: [this.cherryData],
            legendData: ['cherry'],
          }
          break
      }
    },
    resetChart() {
      this.toChildData = {
        seriesData: [
          this.appleData,
          this.pearData,
          this.grapeData,
          this.cherryData,
        ],
        legendData: this.legendData,
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }
  .frashDiv {
    background: #fff;
    font-size: 30px;
    width: 100%;
    text-align: right;
    padding-top: 10px;
    padding-right: 10px;
    :hover {
      background-color: #1d1c50;
    }
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>