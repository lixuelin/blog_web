<template>
  <tbody>
    <template v-for="(row, index) in data">
      <tr :key="row.id">
        <template v-for="item in columns">
          <template v-if="!item.slot">
            <td :key="item.key">
              {{ row[item.key] }}
            </td>
          </template>
          <template v-else>
            <td :key="item.key">
              <table-slot :row="row" :column="item" :index="index"></table-slot>
            </td>
          </template>
        </template>
      </tr>
    </template>
  </tbody>
</template>

<script>
import TableSlot from "./slot";
export default {
  inject: ["tableRoot"],
  props: {
    data: {
      type: Array,
      default: function() {
        return [{ title: "序列" }];
      },
    },
    columns: {
      type: Array,
    },
  },
  data() {
    return {
      renderType: "",
    };
  },
  components: {
    TableSlot,
  },
  computed: {
    newColumns() {
      return this.columns.filter((item) => {
        if (item.key !== "action") {
          return item;
        }
      });
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
