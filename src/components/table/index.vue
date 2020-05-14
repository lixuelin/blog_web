<template>
  <div>
    <table class="table">
      <thead-view :columns="columns"></thead-view>
      <tbody-view :data="data" :columns="columns">
        <div slot="action" slot-scope="{ row, index }">
          <slot name="action" :row="row" :index="index"></slot>
        </div>
      </tbody-view>
    </table>
  </div>
</template>

<script>
import TheadView from "./thead.vue";
import TbodyView from "./tbody.vue";

export default {
  name: "table-comp",
  provide() {
    return {
      tableRoot: this,
    };
  },
  props: {
    columns: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
  components: {
    TheadView,
    TbodyView,
  },
  mounted() {
    this.$on("actionRow", (data) => {
      console.log(data, "data");
    });
  },
};
</script>

<style lang="less">
@import url("./../../assets/less/components.less");
</style>
