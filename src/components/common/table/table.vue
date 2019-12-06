<template>
  <table>
    <slot></slot>
  </table>
</template>

<script>
export default {
  provide() {
    return {
      vtable: this
    };
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array
    }
  }
};
</script>

<style lang="less" scoped></style>
