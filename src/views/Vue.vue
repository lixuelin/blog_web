<template>
  <div>
    <div class="home-article">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <article-item :articles="list"></article-item>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import ArticleItem from "@/components/article_item.vue";
export default {
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      page: 0,
      page_size: 10,
      list: []
    };
  },
  components: { ArticleItem },
  methods: {
    async onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        this.queryArticles();
      }, 1000);
    },
    async onRefresh() {
      this.finished = false;
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      await this.onLoad();
    },
    async queryArticles() {
      let data = {
        page: this.page
      };
      let res = await this.$http.queryArticles(data);
      this.list = this.list.concat(res.data.rows);
      if (res.data.rows.length < this.page_size || res.data.rows.length === 0) {
        this.finished = true;
      }
      this.loading = false;
      this.page = this.page + 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
