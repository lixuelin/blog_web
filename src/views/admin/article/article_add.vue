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
          <van-radio-group v-model="articleData.is_hot" class="article-item-group">
            <van-radio name="0" class="article-item-group-radio">默认</van-radio>
            <van-radio name="1" class="article-item-group-radio">推荐</van-radio>
          </van-radio-group>
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="封面图">
        <div class="article-item-text">
          <van-uploader>
            <van-button icon="photo" type="primary">上传图片</van-button>
          </van-uploader>
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
    <div class="article-foot">
      <van-button size="normal" type="primary" @click="createArticle">保存</van-button>
      <van-button size="normal" type="danger" @click="goBack">取消</van-button>
    </div>
  </div>
</template>

<script>
import VItem from "./../../../components/common/item/item.vue";
import VEdit from "./../../../components/edit/edit.vue";
import { Button, Radio, RadioGroup, Uploader } from "vant";
export default {
  data() {
    return {
      articleData: {
        name: "",
        description: "",
        is_hot: "0",
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
    [Button.name]: Button,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Uploader.name]: Uploader
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
      if (!res.success) {
        return console.log(res.msg);
      }
    },
    async createArticle() {
      let res = await this.$Http.createArticle(this.articleData);
      if (!res.success) {
        return console.log(res.msg);
      }
      this.goBack();
    },
    goBack() {
      setTimeout(() => {
        this.$router.push({ name: "manager" });
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../../../assets/less/admin/article.less");
</style>
