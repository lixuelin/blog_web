<template>
  <thead>
    <tr>
      <th v-for="item in columns" :key="item.key">
        {{ item.name }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: function() {
        return [{ title: "序列" }];
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
