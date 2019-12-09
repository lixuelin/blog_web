<template>
  <div class="item-module">
    <div class="item-module-title">
      <label>{{ label }}：</label>
    </div>
    <div class="item-module-cont">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.item-module {
  display: flex;
  margin-bottom: 20px;
  &-title {
    flex-basis: 100px;
    margin-right: 10px;
    line-height: 36px;
    text-align: right;
  }
  &-cont {
    flex: 1;
  }
}
</style>
