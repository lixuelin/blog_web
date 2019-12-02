<template>
  <div>
    <v-article>
      <v-head></v-head>
      <v-body></v-body>
      <v-foot></v-foot>
    </v-article>
  </div>
</template>

<script>
import VArticle from "./article.vue";
import VHead from "./head.vue";
import VBody from "./body.vue";
import VFoot from "./foot.vue";
export default {
  components: {
    VArticle,
    VHead,
    VBody,
    VFoot
  },
  mounted() {
    console.log(this.$route, "router");
  }
};
</script>

<style lang="less" scoped>
</style>