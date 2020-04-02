<template>
  <header class="admin-header">
    <div class="admin-header-logo">
      <img src="./../../assets/logo.png" alt="" srcset="" />
    </div>
    <div class="admin-header-nav"></div>
    <div class="admin-header-quit">
      <button type="button" @click="loginout">退出</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginout() {}
  }
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/common.less");
</style>
