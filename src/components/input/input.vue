<template>
  <div>
    <input :type="type" :value="value" @click="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput(e) {
      this.$parent.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
