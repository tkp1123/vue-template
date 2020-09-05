<template>
  <h1>welcome</h1>
</template>
<script>
import axios from 'axios'
export default {
  name: 'welcome',
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
<style lang="less" scoped>
</style>