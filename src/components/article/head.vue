<template>
  <div>
    <h1>{{title}}</h1>
    <p v-if="tip">{{tip}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "如何为 ThinkJS 3 网站优化 TTFB 时间",
      tip: "这文章已经过期来"
    };
  }
};
</script>

<style lang="less" scoped>
</style>