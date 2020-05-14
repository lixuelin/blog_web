<template>
  <button :type="type" :class="attrClasses" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      default: "按钮",
    },
  },
  data() {
    return {
      attr: {},
    };
  },
  created() {},
  computed: {
    attrClasses() {
      let classes = ["btn"];
      const attr = this.$attrs;
      if (attr.hasOwnProperty("default")) {
        classes.push("btn-danger");
      }
      if (attr.hasOwnProperty("success")) {
        classes.push("btn-success");
      }
      if (attr.hasOwnProperty("danger")) {
        classes.push("btn-danger");
      }
      return classes;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
