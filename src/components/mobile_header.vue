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
      :style="{ width: '180px', height: '100%' }"
    >
      <ul>
        <li v-for="item in menu" :key="item.path">
          {{ item.name }}
        </li>
      </ul>
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
    showPopup() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
