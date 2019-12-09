<template>
  <div>
    <div class="book-head">
      <van-button type="primary" @click="createMark">添加书籍</van-button>
    </div>
    <div>
      <v-table :columns="columns" :data="marks"></v-table>
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
      marks: [
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
    createMark() {
      this.$router.push({ name: "add_mark" });
    }
  }
};
</script>

<style lang="less" scoped></style>
