<template>
  <div>
    <div class="form">
      <div class="form-group">
        <label for>文章标题：</label>
        <div class="form-group-cont">
          <input type="text" v-model="articleInfo.name" placeholder="请输入标题" />
        </div>
      </div>
      <div class="form-group">
        <label for>文章内容：</label>
        <div class="form-group-cont">
          <div id="edit"></div>
        </div>
      </div>
      <div class="form-group">
        <label for>是否推荐：</label>
        <div class="form-group-cont">
          <van-radio-group v-model="articleInfo.is_hot" direction="horizontal">
            <van-radio name="1">不推荐</van-radio>
            <van-radio name="2">推荐</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="form-btn">
        <button type="button" @click="save">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import Edit from "wangeditor";
export default {
  data() {
    return {
      articleInfo: {
        name: "",
        img: "",
        content: "",
        source: "原创",
        is_hot: "1"
      },
      edit: null
    };
  },
  components: {},
  mounted() {
    this.edit = new Edit("#edit");
    this.edit.create();
    this.edit.txt.html("<p>用 JS 设置的内容</p>");
    console.log(this.$http);
  },
  methods: {
    async save() {
      this.articleInfo.content = this.edit.txt.html();
      let res = await this.$Http.createArticle(this.articleInfo);
      console.log(res);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/components.less");
</style>
