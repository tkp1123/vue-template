<template>
  <div class="container-body">
    <el-row :gutter="10">
      <el-col :span="16">
        <el-row :gutter="10">
          <el-col :span="12">
            <el-card shadow="never">
              <div slot="header">
                <div class="dp-fx">
                  <i class="icon iconfont icontongji" />
                  <div class="dp-fx-title">数据统计</div>
                </div>
              </div>
              <el-row :gutter="10" class="mb10">
                <el-col :span="12">
                  <div class="panel-body bg-number">
                    <div class="panel-title">
                      <div class="panel-title-text">用户统计</div>
                      <span class="label pull-right bg-blue">实时</span>
                    </div>
                    <div class="panel-content">
                      <div class="panel-content-title">1234</div>
                      <div class="panel-content-sub-title">
                        当前分类总记录数
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="panel-body bg-number">
                    <div class="panel-title">
                      <div class="panel-title-text">商品统计</div>
                      <span class="label pull-right bg-black">实时</span>
                    </div>
                    <div class="panel-content">
                      <div class="panel-content-title">1234</div>
                      <div class="panel-content-sub-title">
                        当前分类总记录数
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10" class="mb10">
                <el-col :span="12">
                  <div class="panel-body bg-number">
                    <div class="panel-title">
                      <div class="panel-title-text">浏览统计</div>
                      <span class="label pull-right bg-orange">实时</span>
                    </div>
                    <div class="panel-content">
                      <div class="panel-content-title">1234</div>
                      <div class="panel-content-sub-title">
                        当前分类总记录数
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="panel-body bg-number">
                    <div class="panel-title">
                      <div class="panel-title-text">订单统计</div>
                      <span class="label pull-right bg-green">实时</span>
                    </div>
                    <div class="panel-content">
                      <div class="panel-content-title">1234</div>
                      <div class="panel-content-sub-title">
                        当前分类总记录数
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="never">
              <div slot="header">
                <div class="dp-fx">
                  <i class="icon iconfont iconicon-shortcut" />
                  <div class="dp-fx-title">快捷入口</div>
                </div>
              </div>
              <el-row :gutter="10" class="mb10">
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goUser()">
                    <i
                      class="icon iconfont iconyonghu2"
                      style="font-size: 40px"
                    />
                  </div>
                  <div class="panel-content-sub-title-2">用户管理</div>
                </el-col>
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goPermits()">
                    <i
                      class="icon iconfont iconquanxian"
                      style="font-size: 40px"
                    />
                  </div>
                  <div class="panel-content-sub-title-2">权限管理</div>
                </el-col>
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goRole()">
                    <i
                      class="icon iconfont icongerenzhongxin"
                      style="font-size: 40px"
                    />
                  </div>
                  <div class="panel-content-sub-title-2">角色列表</div>
                </el-col>
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goGoods()">
                    <i
                      class="icon iconfont icontubiao-qiantai-"
                      style="font-size: 40px"
                    />
                  </div>
                  <div class="panel-content-sub-title-2">商品管理</div>
                </el-col>
              </el-row>
              <el-row :gutter="10" class="mb10">
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goOrders()">
                    <i
                      class="icon iconfont iconxiadan"
                      style="font-size: 40px"
                    />
                  </div>
                  <div class="panel-content-sub-title-2">订单管理</div>
                </el-col>
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goReport()">
                    <i
                      class="icon iconfont iconshujutongji"
                      style="font-size: 40px"
                    />
                  </div>
                  <div class="panel-content-sub-title-2">数据统计</div>
                </el-col>
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goCharts()">
                    <i
                      class="icon iconfont iconzhuzhuangtutubiao"
                      style="font-size: 40px"
                    />
                  </div>
                  <div class="panel-content-sub-title-2">图表</div>
                </el-col>
                <el-col :span="6">
                  <div class="panel-body bg-number" @click="goZIP()">
                    <i class="icon iconfont iconzip" style="font-size: 40px" />
                  </div>
                  <div class="panel-content-sub-title-2">ZIP</div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="pt10">
          <el-card shadow="never">
            <div slot="header">
              <div class="dp-fx">
                <i class="icon iconfont iconbaobiao" />
                <div class="dp-fx-title">报表统计</div>
              </div>
            </div>
            <div id="chartLine" style="width: 100%; height: 400px"></div>
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="24">
            <el-card shadow="never">
              <div slot="header">
                <div class="dp-fx">
                  <i class="icon iconfont icongonggao" />
                  <div class="dp-fx-title">系统公告</div>
                </div>
              </div>
              <div v-for="i in noticeData" :key="i.id" class="text-item">
                <el-row
                  class="list-style"
                  type="flex"
                  :gutter="40"
                  justify="space-between"
                >
                  <el-col class="list-style-left">{{ i.value }}</el-col>
                  <el-col class="list-style-right">{{ i.date }}</el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="pt10">
          <el-col :span="24">
            <el-card shadow="never">
              <div slot="header">
                <div class="dp-fx">
                  <i class="icon iconfont iconbanben" />
                  <div class="dp-fx-title">版本信息</div>
                </div>
              </div>
              <table class="layui-table">
                <colgroup>
                  <col width="100" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <td>框架名称</td>
                    <td>element-ui</td>
                  </tr>
                  <tr>
                    <td>当前版本</td>
                    <td>v1.0.0</td>
                  </tr>
                  <tr>
                    <td>主要特色</td>
                    <td>零门槛 / 响应式 / 清爽 / 极简</td>
                  </tr>
                  <tr>
                    <td>前端地址</td>
                    <td>
                      <a
                        href="https://github.com/tkp1123/vue-template"
                        target="_blank"
                        >github</a
                      >
                      /
                      <a
                        href="https://gitee.com/a123_2/vue-template"
                        target="_blank"
                        >gitee</a
                      ><br />
                    </td>
                  </tr>
                  <tr>
                    <td>后端地址</td>
                    <td>
                      <a
                        href="https://github.com/tkp1123/simpleServe"
                        target="_blank"
                        >github</a
                      >
                      /
                      <a
                        href="https://gitee.com/a123_2/simpleServe"
                        target="_blank"
                        >gitee</a
                      ><br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="pt10">
          <el-col :span="24">
            <el-card shadow="never">
              <div slot="header">
                <div class="dp-fx">
                  <i class="icon iconfont iconmessage" />
                  <div class="dp-fx-title">作者留言</div>
                </div>
              </div>
              <div class="layui-card-body layui-text layadmin-text">
                <p>
                  本模板基于element-ui进行实现。element-ui开发文档地址：<a
                    class="layui-btn layui-btn-xs layui-btn-danger"
                    target="_blank"
                    href="https://element.eleme.cn/#/zh-CN/component/installation"
                    >element-ui文档</a
                  >
                </p>
                <p>喜欢此后台模板的可以给我的GitHub和Gitee加个Star支持一下</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getChartLine } from '@/utils/api'
import echarts from 'echarts'
export default {
  data() {
    return {
      chartLine: null,
      noticeData: [
        {
          id: 1,
          value: '界面足够简洁清爽。',
          date: '2021年4月2日 00:49:57',
        },
        {
          id: 2,
          value: '界面足够简洁清爽。',
          date: '2021年4月2日 00:49:57',
        },
        {
          id: 3,
          value: '界面足够简洁清爽。',
          date: '2021年4月2日 00:49:57',
        },
        {
          id: 4,
          value: '界面足够简洁清爽。',
          date: '2021年4月2日 00:49:57',
        },
        {
          id: 5,
          value: '界面足够简洁清爽。',
          date: '2021年4月2日 00:49:57',
        },
        {
          id: 6,
          value: '界面足够简洁清爽。',
          date: '2021年4月2日 00:49:57',
        },
        {
          id: 7,
          value: '界面足够简洁清爽。',
          date: '2021年4月2日 00:49:57',
        },
      ],
    }
  },
  mounted() {
    this.getChartLineData()
    window.addEventListener('resize', () => {
      this.chartLine.resize()
    })
  },
  methods: {
    getChartLineData() {
      getChartLine().then((res) => {
        console.log(res)
        if (res.code == '200') {
          let data = {
            seriesData: res.data.chartData,
            legendData: res.data.legendData,
            xAxis: res.data.xAxis,
          }
          this.drawLineChart(data)
        }
      })
    },
    drawLineChart(val) {
      console.log(val)
      console.log(val.seriesData)
      this.chartLine = echarts.init(document.getElementById('chartLine'))
      this.chartLine.clear()
      this.chartLine.setOption({
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
          data: val.xAxis,
        },
        yAxis: {
          type: 'value',
        },
        series: val.seriesData,
      })
    },
    goUser() {
      console.log(11)
      this.$router.push('/users')
    },
    goPermits() {
      this.$router.push('/permits')
    },
    goRole() {
      this.$router.push('/roles')
    },
    goGoods() {
      this.$router.push('/goods')
    },
    goOrders() {
      this.$router.push('/orders')
    },
    goReport() {
      this.$router.push('/reports')
    },
    goCharts() {
      this.$router.push('/charts')
    },
    goZIP() {
      this.$router.push('/zips')
    },
  },
}
</script>
<style lang="less" scoped>
.container-body {
  background-color: #fff;
  padding: 5px;
}
.pt10 {
  padding-top: 10px;
}
.mb10 {
  margin-bottom: 10px;
}
.bg-number {
  background-color: #f8f8f8;
}
.panel-group {
  background: #fff;
  padding: 0 16px 16px;
  margin-bottom: 32px;
}
.panel-body {
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  color: inherit;
}
.panel-title-text {
  font-size: 14px;
}
.panel-content-title {
  padding: 5px;
  font-size: 19px;
}
.panel-content-sub-title {
  padding-top: 5px;
  font-size: 12px;
}
.panel-content-sub-title-2 {
  padding-top: 13px;
  text-align: center;
  font-size: 12px;
}
.label {
  display: inline;
  padding: 2px 6px 3px;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 5px;
  margin-top: -15px;
}
.pull-right {
  float: right;
}
.dp-fx {
  display: flex;
}
.dp-fx-title {
  font-size: 16px;
  padding: 5px 0 0 5px;
}
.bg-blue {
  background-color: #1e9fff;
}
.bg-black {
  background-color: #2f4056;
}
.bg-orange {
  background-color: #ffb800;
}
.bg-green {
  background-color: #009688;
}
.text-item {
  padding: 0 10px;
}
.list-style {
  cursor: pointer;
  padding: 5px;
  display: flex;
}
.list-style:hover {
  cursor: pointer;
  padding: 5px;
  background-color: #f2f2f2;
}
.list-style-right {
  font-size: 12px;
  text-align: right;
  color: #999;
}
.list-style-left {
  font-size: 14px;
  text-align: left;
}
@import '../../../../assets/layui-v2.5.5/css/layui.css';
</style>