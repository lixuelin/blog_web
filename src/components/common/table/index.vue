<template>
  <div>
    <v-table class="v-table" :data="data" :columns="columns">
      <v-head :columns="columns"></v-head>
      <v-body :data="data"></v-body>
    </v-table>
  </div>
</template>

<script>
import VHead from "./head.vue";
import VBody from "./tbody.vue";
import VTable from "./table.vue";
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array
    }
  },
  components: {
    VHead,
    VBody,
    VTable
  }
};
</script>

<style lang="less" scoped>
.v-table {
  width: 100%;
  border: 1px solid #ccc;
}
</style>
