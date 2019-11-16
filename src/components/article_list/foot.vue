<template>
  <div>
    <span>{{source}}</span>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>