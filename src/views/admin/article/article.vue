<template>
  <div>
    <div>
      <van-button type="primary" size="small" @click="createArticle">添加文章</van-button>
    </div>
    <v-table :columns="columns" :data="articles"></v-table>
  </div>
</template>

<script>
import VTable from "./../../../components/common/table/index.vue";
import { Button } from "vant";
export default {
  data() {
    return {
      columns: [
        {
          name: "标题",
          key: "title"
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
          key: "createAt"
        }
      ],
      articles: [
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
    VTable,
    [Button.name]: Button
  },
  methods: {
    createArticle() {
      this.$router.push({
        path: "add_article"
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
