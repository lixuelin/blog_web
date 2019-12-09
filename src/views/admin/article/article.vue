<template>
  <div>
    <div class="article-head">
      <van-button type="primary" @click="createArticle">添加文章</van-button>
    </div>
    <div>
      <v-table :columns="columns" :data="articles"></v-table>
    </div>
    <div>
      <v-page></v-page>
    </div>
  </div>
</template>

<script>
import VTable from "./../../../components/common/table/index.vue";
import VPage from "./../../../components/common/page/page.vue";
import { Button } from "vant";
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
    [Button.name]: Button,
    VPage
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    createArticle() {
      this.$router.push({
        path: "add_article"
      });
    },
    async getArticles() {
      let data = {
        page: 0,
        page_size: 10,
        name: "",
        description: ""
      };
      let res = await this.$Http.getArticles(data);
      this.articles = res.data.rows;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../../../assets/less/admin/article.less");
</style>
