<template>
  <div class="radio" @click="checkedRadio">
    <div :class="setClass">
      <div class="radio-default-box">
        <span></span>
      </div>
    </div>
    <div class="radio-value">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["checked"],
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      defaultClass: "radio-default",
      checkedClass: "radio-checked"
    };
  },
  computed: {
    setClass() {
      if (this.checked && this.checked === this.name) {
        return [this.defaultClass, this.checkedClass];
      }
      return [this.defaultClass];
    }
  },
  mounted() {
    console.log(this.checked, "radio");
  },
  methods: {
    checkedRadio() {
      console.log(this.name, "dd");
      this.$emit("checkedCont", this.name);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./../../assets/less/components.less");
</style>