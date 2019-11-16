<template>
  <div id="app">
    <div id="head">
      <v-head></v-head>
    </div>
    <article id="main">
      <div id="sidebar">
        <v-side></v-side>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
    </article>
  </div>
</template>

<script>
import VHead from "@/components/common/header.vue";
import VSide from "@/components/sidebar/sidebar.vue";
export default {
  name: "app",
  components: {
    VHead,
    VSide
  }
};
</script>

<style lang="less" scoped></style>
