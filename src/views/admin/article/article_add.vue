<template>
  <div>
    <div class="article-item">
      <v-item label="标题">
        <div class="article-item-text">
          <input type="text" v-model="articleData.name" placeholder="请输入文章标题" />
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="描述">
        <div class="article-item-text">
          <input type="text" v-model="articleData.description" placeholder="请输入文章标题" />
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="推荐">
        <div class="article-item-text">
          <input type="text" placeholder="请输入文章标题" />
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="封面图">
        <div class="article-item-text">
          <input type="file" />
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="来源">
        <div class="article-item-text">
          <input type="text" v-model="articleData.source" placeholder="请输入文章来源" />
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="作者">
        <div class="article-item-text">
          <input type="text" v-model="articleData.author" placeholder="请输入文章来源" />
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="文章内容">
        <div class="article-item-text">
          <v-edit @editor="getArticleData"></v-edit>
        </div>
      </v-item>
    </div>
    <div>
      <van-button size="normal" type="primary" @click="createArticle">保存</van-button>
      <van-button size="normal" type="danger">取消</van-button>
    </div>
  </div>
</template>

<script>
import VItem from "./../../../components/common/item/item.vue";
import VEdit from "./../../../components/edit/edit.vue";
import { Button, Toast } from "vant";
export default {
  data() {
    return {
      articleData: {
        name: "",
        description: "",
        is_hot: 0,
        img: "content",
        source: "",
        content: "",
        author: ""
      }
    };
  },
  components: {
    VItem,
    VEdit,
    [Button.name]: Button
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticleData(data) {
      this.articleData.content = data;
    },
    async getArticle() {
      let data = { id: 1 };
      let res = await this.$Http.getArticle(data);
    },
    async createArticle() {
      try {
        let res = await this.$Http.createArticle(this.articleData);
        Toast.success("创建成功");
      } catch (err) {}

      console.log(res, "res");
    }
  }
};
</script>

<style lang="less" scoped>
.article-item {
  margin-bottom: 20px;
  &-text {
    & input {
      padding: 5px 10px;
      width: 240px;
      height: 36px;
      border: 1px solid #ccc;
    }
  }
}
</style>
