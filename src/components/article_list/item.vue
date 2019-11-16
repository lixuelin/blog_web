<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      item: this
    };
  },
  props: {
      item: {
          type: Object,
      }
  },
  components: {
  }
};
</script>

<style lang="less" scoped>
</style>