<template>
  <div id="app">
    <v-head></v-head>
    <article id="main">
      <div id="saidbar">
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
import VSide from "@/components/common/sidebar.vue";
export default {
  name: "app",
  components: {
    VHead,
    VSide
  }
};
</script>

<style lang="less" scoped>
#main {
  position: relative;
  padding: 0 60px 30px;
}
#saidbar {
  position: fixed;
  left: 0;
  z-index: 10;
  top: 61px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
#content {
  position: relative;
  padding: 35px 0;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 50px;
}
</style>
