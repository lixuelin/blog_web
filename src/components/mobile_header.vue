<template>
  <div class="mobile-header">
    <header class="mobile-header-nav">
      <div class="mobile-header-logo">
        <img src="./../assets/logo.png" alt="" />
      </div>
      <div class="menu-btn" @click="showPopup">
        <van-icon name="wap-nav" />
      </div>
    </header>
    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '100px', height: '100%' }"
    >
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
