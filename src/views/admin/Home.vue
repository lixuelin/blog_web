<template>
  <div class="layout">
    <div id="header" class="layout-head">
      <header-view></header-view>
    </div>
    <div id="sidebar" class="layout-sidebar">
      <side-bar-view></side-bar-view>
    </div>
    <div id="container" class="layout-container admin-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderView from "@/components/admin/header";
import SideBarView from "@/components/admin/sidebar";
export default {
  components: {
    HeaderView,
    SideBarView
  }
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/common.less");
.admin-container {
  padding-top: 100px;
}
</style>
