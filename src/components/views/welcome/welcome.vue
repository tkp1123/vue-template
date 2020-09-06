<template>
  <div class="dashboard-editor-container">
    <PanelGroup></PanelGroup>
    <LineChart></LineChart>
    <RaddarChart></RaddarChart>
  </div>
</template>
<script>
import axios from 'axios'
import PanelGroup from './components/panelGroup'
import LineChart from './components/lineChart'
import RaddarChart from './components/raddarChart'
export default {
  name: 'welcome',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
  },
  data() {
    return {}
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      axios.post('http://www.bai.com').then((res) => {
        console.log(res)
      })
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

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>