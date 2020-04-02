<template>
  <div>
    <label>{{ label }}</label>
    <input-view></input-view>
    <span></span>
  </div>
</template>

<script>
import InputView from "@/components/input/input.vue";
export default {
  props: {
    model: {
      type: String
    },
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  components: {
    InputView
  },
  data() {
    return {
      error: "value"
    };
  },
  methods: {
    validate() {}
  }
};
</script>

<style lang="less" scoped></style>
