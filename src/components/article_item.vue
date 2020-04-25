<template>
  <div id="article-item" class="article-item">
    <ul>
      <li
        class="article-item-box"
        v-for="(item, index) in articles"
        :key="index"
        @click="go_to_detail(item)"
      >
        <div class="article-item-content">
          <div class="article-item-title">
            <h3>{{ item.name }}</h3>
            <time>{{ item.time }}</time>
          </div>
          <div>
            <p>{{ item.description }}</p>
          </div>
          <div>
            <span>{{ item.source }}</span>
          </div>
        </div>
        <div class="article-item-img">
          <img src="./../assets/logo.png" alt />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "article-item",
  props: {
    articles: {
      type: Array
    }
  },
  mounted() {
    console.log(this.articles);
  },
  methods: {
    go_to_detail(item) {
      this.$router.push({ name: "article_detail", query: { id: item.id } });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
