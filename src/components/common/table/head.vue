<template>
  <thead class="v-head">
    <tr>
      <th v-for="column in columns" :key="column.key">{{ column.name }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array
    }
  }
};
</script>

<style lang="less" scoped>
.v-head {
  & tr th {
    padding: 5px 10px;
    font-weight: 400;
    border: 1px solid #ccc;
    text-align: left;
  }
}
</style>
