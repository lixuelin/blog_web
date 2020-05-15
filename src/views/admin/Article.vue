<template>
  <div>
    <table-view :columns="columns" :data="list">
      <template slot="action" slot-scope="{ row, index }">
        <btn success @click.native="editArticle(row, index)">编辑</btn>
        <btn danger @click.native="delArticle(row, index)">删除</btn>
      </template>
    </table-view>
    <page-view></page-view>
  </div>
</template>
<script>
import Btn from "@/components/btn.vue";
import TableView from "@/components/table/index.vue";
import PageView from "@/components/page.vue";
export default {
  data() {
    return {
      columns: [
        {
          key: "title",
          name: "标题",
        },
        {
          key: "create_time",
          name: "创建时间",
        },
        {
          key: "update_time",
          name: "更新时间",
        },
        {
          key: "is_hot",
          name: "推荐",
        },
        {
          key: "action",
          name: "操作",
          slot: "action",
        },
      ],
      list: [
        {
          title: "我才有这么多时间",
          create_time: "2020-05-13",
          update_time: "2020-05-13",
          is_hot: 1,
        },
      ],
    };
  },
  components: {
    TableView,
    Btn,
    PageView,
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      try {
        // let res = await this.$http.getArticles();
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    editArticle(row, index) {
      console.log("edit");
      console.log(row, index);
    },
    delArticle(row, index) {
      console.log("del");
      console.log(row, index);
    },
  },
};
</script>
<style lang="less" scoped></style>
