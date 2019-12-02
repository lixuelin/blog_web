<template>
  <div class="title">
    <h3>{{name}}</h3>
    <time>{{time}}</time>
  </div>
</template>

<script>
import { log } from "util";
export default {
  inject: ["item"],
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    },
    time: {
      type: String
    }
  },
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  line-height: 36px;

  & h3 {
    flex: 2px;
  }
  & time {
    flex-basis: 100px;
    color: #999;
    font-size: 14px;
    text-align: center;
  }
}
</style>