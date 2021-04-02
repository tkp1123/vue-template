<template>
  <div class="app-wrapper">
    <Admin v-if="role == '1'"></Admin>
    <Manager v-else-if="role == '2'"></Manager>
    <Staff v-else-if="role == '3'"></Staff>
  </div>
</template>
<script>
import Admin from './template/admin'
import Manager from './template/manager'
import Staff from './template/staff'
export default {
  name: 'welcome',
  components: {
    Admin,
    Manager,
    Staff,
  },
  data() {
    return {
      role: '',
    }
  },
  mounted() {
    this.getRole()
  },
  methods: {
    getRole() {
      this.role = this.$store.state.user.role_id
    },
  },
}
</script>
<style lang="less" scoped>
.app-wrapper {
  background-color: #fff;
  margin: 15px;
  border-radius: 5px;
}
</style>