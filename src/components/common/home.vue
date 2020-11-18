<template>
  <div :class="classObj" class="app-wrapper">
    <Nav class="sidebar-container"></Nav>
    <div class="main-container">
      <Header></Header>
      <Main></Main>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/common/nav'
import Header from '@/components/common/header'
import Main from '@/components/common/main'
import store from '@/store'
export default {
  name: 'Home',
  components: {
    Nav,
    Main,
    Header,
  },
  computed: {
    nav() {
      return this.$store.state.collapse
    },
    classObj() {
      return {
        hideSidebar: this.nav.isCollapse,
        openSidebar: !this.nav.isCollapse,
      }
    },
  },
  //store,
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.app-wrapper {
  // display: flex;
  height: 100%;
  width: 100%;
}
// .main-container {
//   min-height: 100%;
//   width: 100%;
//   transition: margin-left 0.28s;
//   position: relative;
// }
.remain {
  width: 100%;
}
</style>