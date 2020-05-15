<template>
  <div class="page">
    <ul>
      <li class="page-prev">prev</li>
      <template v-for="i in pages">
        <li :key="i" class="page-num">
          {{ i }}
        </li>
      </template>
      <li class="page-next">next</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [1, 2, 3, 4, "...", 8, 9, 10],
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
