<template>
  <div>
    <div class="article-item">
      <v-item label="标题">
        <div class="article-item-text">
          <input type="text" placeholder="请输入文章标题" />
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
      <v-item label="文章内容">
        <div class="article-item-text">
          <input type="file" />
        </div>
      </v-item>
    </div>
    <div class="article-item">
      <v-item label="来源">
        <div class="article-item-text">
          <input type="text" placeholder="请输入文章来源" />
        </div>
      </v-item>
    </div>
  </div>
</template>

<script>
import VItem from "./../../../components/common/item/item.vue";
export default {
  components: {
    VItem
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
