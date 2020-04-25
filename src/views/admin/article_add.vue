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
        <label for>文章备注</label>
        <div class="form-group-cont">
          <textarea v-model="articleInfo.description"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label for>文章内容：</label>
        <div class="form-group-cont">
          <div id="edit"></div>
        </div>
      </div>
      <div class="form-group">
        <label for>文章类型：</label>
        <div class="form-group-cont">
          <ul>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <label for>是否推荐：</label>
        <div class="form-group-cont">
          <div class="form-group-cont-check">
            <radio-group :is_checked="articleInfo.is_hot" @checkedCont="setCont">
              <radio name="1" @checkedCont="setCont">不推荐</radio>
              <radio name="2" @checkedCont="setCont">推荐</radio>
            </radio-group>
          </div>
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
import RadioGroup from "./../../components/radio/group";
import Radio from "./../../components/radio/index";
export default {
  data() {
    return {
      articleInfo: {
        name: "",
        img: "",
        content: "",
        source: "原创",
        description: "",
        is_hot: "1",
        author: "lxl"
      },
      edit: null
    };
  },
  components: { Radio, RadioGroup },
  mounted() {
    this.edit = new Edit("#edit");
    this.edit.create();
    this.edit.txt.html("<p>用 JS 设置的内容</p>");
  },
  methods: {
    async save() {
      this.articleInfo.content = this.edit.txt.html();
      try {
        let res = await this.$http.createArticle(this.articleInfo);
        console.log(res, "res");
        if (!res.success) {
          console.log(res.msg);
        }
        this.$router.push({ path: "Article" });
      } catch (error) {
        console.log("sss", error);
      }
    },
    setCont(data) {
      console.log(data, "data");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/components.less");
</style>
