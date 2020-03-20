<template>
  <div id="app">
    <div class="mobile-header">
      <mobile-header-view></mobile-header-view>
    </div>
    <div class="layout">
      <div id="header" class="layout-head">
        <header-view></header-view>
      </div>
      <div id="sidebar" class="layout-sidebar">
        <side-bar-view></side-bar-view>
      </div>
      <div id="container" class="layout-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MobileHeaderView from "@/components/mobile_header.vue";
import HeaderView from "@/components/header.vue";
import SideBarView from "@/components/sidebar.vue";
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    MobileHeaderView,
    HeaderView,
    SideBarView
  },
  methods: {
    showPopup() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less">
@import url("./assets/less/common.less");
</style>
