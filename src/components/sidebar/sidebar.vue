<template>
  <div class="vside">
    <v-nav></v-nav>
  </div>
</template>

<script>
import VNav from "@/components/sidebar/nav.vue";

export default {
  data() {
    return {};
  },
  components: { VNav }
};
</script>

<style lang="less" scoped>
.vside {
  padding: 20px 0;
}
</style>
