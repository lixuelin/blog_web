<template>
  <div class="text-box">
    <input :type="type" :value="value" v-bind="$attrs" @change="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="less" scoped>
.text-box {
    padding: 0 15px;
    input {
        padding-left: 10px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #fff;
        border-radius: 5px;
        box-sizing: border-box;
        
    }
}
</style>