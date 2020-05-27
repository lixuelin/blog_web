<template>
  <div class="mobile-header">
    <header class="mobile-header-nav">
      <div class="mobile-header-logo" @click="goToHome">
        <img src="./../assets/logo.png" alt />
      </div>
      <div class="menu-btn" @click="showPopup">
        <van-icon name="wap-nav" />
      </div>
    </header>
    <van-popup v-model="show" position="left" :style="{ width: '180px', height: '100%' }">
      <div class="mobile-header-menu">
        <div class="mobile-header-logo mobile-header-menu-logo">
          <img src="./../assets/logo.png" alt />
        </div>
        <ul class="mobile-header-menu-list">
          <li v-for="item in menu" :key="item.path" @click="goToNext(item)">{{ item.name }}</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      menu: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Vue",
          path: "/vue"
        },
        {
          name: "Node",
          path: "/node"
        },
        {
          name: "About",
          path: "/about"
        }
      ]
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
      if (this.show) {
        this.showPopup();
      }
    },
    showPopup() {
      this.show = !this.show;
    },
    goToNext(data) {
      this.$router.push({ path: data.path });
      this.showPopup();
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
