<template>
  <tbody class="v-body">
    <tr v-for="item in data" :key="item.id">
      <td v-for="column in vtable.columns" :key="column.key">{{ item[column.key] }}</td>
    </tr>
  </tbody>
</template>

<script>
import { log } from "util";
export default {
  inject: ["vtable"],
  props: {
    data: {
      type: Array
    }
  },
  mounted() {
    console.log(this.vtable);
  }
};
</script>

<style lang="less" scoped>
.v-body {
  & tr td {
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
}
</style>
