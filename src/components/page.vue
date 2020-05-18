<template>
  <div class="page">
    <ul>
      <li class="page-prev" @click="setPrev">prev</li>
      <template v-for="(val, index) in countPage">
        <li
          :key="index"
          class="page-num"
          :class="{ active: val == pageInfo.currentPage }"
        >
          <span>{{ val }}</span>
        </li>
      </template>
      <li class="page-next" @click="setNext">next</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pageInfo: {
      type: Object,
      default() {
        return { pageSize: 10, total: 0, currentPage: 1 };
      },
    },
  },
  data() {
    return {
      pages: [1],
      count: 0,
    };
  },
  created() {
    this.count = Math.ceil(this.pageInfo.total / this.pageInfo.pageSize);
  },
  computed: {
    countPage() {
      const pageInfo = this.pageInfo;
      let count = this.count;
      let pageList = [];
      if (count <= 7) {
        for (let index = 0; index < count; index++) {
          pageList.push(index + 1);
        }
      } else {
        if (pageInfo.currentPage <= 4) {
          pageList = [1, 2, 3, 4, "...", count];
        } else if (
          pageInfo.currentPage < count - 3 &&
          pageInfo.currentPage >= 5
        ) {
          pageList = [
            1,
            "...",
            pageInfo.currentPage - 1,
            pageInfo.currentPage,
            pageInfo.currentPage + 1,
            "...",
            count,
          ];
        } else {
          pageList = [
            1,
            "...",
            count - 4,
            count - 3,
            count - 2,
            count - 1,
            count,
          ];
        }
      }
      return pageList;
    },
  },
  mounted() {
    console.log(this.countPage);
  },
  methods: {
    setPrev() {
      const pageInfo = this.pageInfo;
      if (pageInfo.currentPage === 1) {
        return;
      }
      this.pageInfo.currentPage = pageInfo.currentPage - 1;
      this.$emit("changePage", this.pageInfo);
    },
    setNext() {
      const pageInfo = this.pageInfo;
      if (pageInfo.currentPage === this.count) {
        return;
      }
      this.pageInfo.currentPage = pageInfo.currentPage + 1;
      this.$emit("changePage", this.pageInfo);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
