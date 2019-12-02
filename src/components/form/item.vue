<template>
  <div class="text-item">
    <label v-if="label">{{label}}：</label>
    <div class="text-item-cont">
        <slot></slot>
    </div>
    <span v-if="error">{{error}}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: ""
    };
  }
};
</script>

<style lang="less" scoped>
.text-item {
    display: flex;
    padding: 15px 0;
    & label {
        flex-basis: 80px;
        line-height: 36px;
        color: #fff;
        text-align: right;
    }

    &-cont {
        flex: 1;
    }
}
</style>