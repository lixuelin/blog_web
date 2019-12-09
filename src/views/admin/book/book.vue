<template>
  <div>
    <div class="book-head">
      <van-button type="primary" @click="createBook">添加书籍</van-button>
    </div>
    <div>
      <v-table :columns="columns" :data="books"></v-table>
    </div>
  </div>
</template>

<script>
import VTable from "@/components/common/table/index.vue";
export default {
  data() {
    return {
      columns: [
        {
          name: "标题",
          key: "name"
        },
        {
          name: "描述",
          key: "description"
        },
        {
          name: "来源",
          key: "source"
        },
        {
          name: "创建时间",
          key: "createdAt"
        }
      ],
      books: [
        {
          id: 1,
          title: "我这要测试得",
          description: "是的第三方富士康史蒂夫收到了看法",
          source: "原创",
          createAt: "2019-12-6"
        }
      ]
    };
  },
  components: {
    VTable
  },
  methods: {
    createBook() {
      this.$router.push({ name: "add_book" });
    }
  }
};
</script>

<style lang="less" scoped></style>
