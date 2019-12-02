<template>
  <div class="home">
    <div class="head">
      <v-head></v-head>
    </div>
    <div class="body">
      <div class="side-bar">
        <v-nav></v-nav>
      </div>
      <article class="main">
        <router-view></router-view>
      </article>
    </div>
  </div>
</template>

<script>
import VHead from "@/components/admin/common/head.vue";
import VNav from "@/components/admin/nav/nav.vue";
export default {
  components: {
    VHead,
    VNav
  }
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  .head {
    position: fixed;
    z-index: 20px;
    width: 100%;
    height: 40px;
  }
  .body {
    position: relative;
    z-index: 1;
    .side-bar {
      position: fixed;
      left: 0;
      z-index: 10;
      top: 61px;
      width: 200px;
      bottom: 0;
      overflow-x: hidden;
      overflow-y: auto;
      border-right: 1px solid #ddd;
      background: #fff;
    }
    .main {
      position: relative;
      margin: 0 auto;
      padding: 80px 20px 40px 0;
      padding-left: 220px;
    }
  }
}
</style>