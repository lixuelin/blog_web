<template>
  <div>
    <div class="book-item">
      <v-item label="标题">
        <div class="book-item-text">
          <input type="text" v-model="bookData.name" placeholder="请输入文章标题" />
        </div>
      </v-item>
    </div>
    <div class="book-item">
      <v-item label="描述">
        <div class="book-item-text">
          <input type="text" v-model="bookData.description" placeholder="请输入文章标题" />
        </div>
      </v-item>
    </div>
    <div class="book-item">
      <v-item label="推荐">
        <div class="book-item-text">
          <van-radio-group v-model="bookData.is_hot" class="book-item-group">
            <van-radio name="0" class="book-item-group-radio">默认</van-radio>
            <van-radio name="1" class="book-item-group-radio">推荐</van-radio>
          </van-radio-group>
        </div>
      </v-item>
    </div>
    <div class="book-item">
      <v-item label="封面图">
        <div class="book-item-text">
          <van-uploader>
            <van-button icon="photo" type="primary">上传图片</van-button>
          </van-uploader>
        </div>
      </v-item>
    </div>
    <div class="book-item">
      <v-item label="来源">
        <div class="book-item-text">
          <input type="text" v-model="bookData.source" placeholder="请输入文章来源" />
        </div>
      </v-item>
    </div>
    <div class="book-item">
      <v-item label="作者">
        <div class="book-item-text">
          <input type="text" v-model="bookData.author" placeholder="请输入文章来源" />
        </div>
      </v-item>
    </div>
    <div class="book-item">
      <v-item label="文章内容">
        <div class="book-item-text">
          <v-edit @editor="getbookData"></v-edit>
        </div>
      </v-item>
    </div>
    <div class="book-foot">
      <van-button size="normal" type="primary" @click="createbook">保存</van-button>
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
      bookData: {
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
    this.getbook();
  },
  methods: {
    getbookData(data) {
      this.bookData.content = data;
    },
    async getbook() {
      let data = { id: 1 };
      let res = await this.$Http.getbook(data);
      if (!res.success) {
        return console.log(res.msg);
      }
    },
    async createbook() {
      let res = await this.$Http.createbook(this.bookData);
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
@import url("./../../../assets/less/admin/book.less");
</style>
