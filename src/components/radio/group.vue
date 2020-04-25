<template>
  <div class="radio">
    <div class="radio-group">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      checked: this.is_checked
    };
  },
  props: {
    is_checked: {
      type: String,
      default: ""
    }
  },
  components: {},
  mounted() {
    console.log(this.is_checked, "cc");
  }
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/components.less");
</style>