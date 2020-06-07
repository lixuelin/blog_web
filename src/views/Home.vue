<template>
  <div class="home">
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
  name: "Home",
  components: { ArticleItem },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      page_size: 10,
      page: 0,
      list: []
    };
  },
  mounted() {},
  methods: {
    onLoad() {
      setTimeout(async () => {
        if (this.refreshing) {
          // this.list = [];
          this.refreshing = false;
        }
        // let data = {
        //   page: this.page
        // };
        // let res = await this.$http.queryArticles(data);
        // this.list = this.list.concat(res.data.rows);
        // if (
        //   res.data.rows.length < this.page_size ||
        //   res.data.rows.length === 0
        // ) {
        //   this.finished = true;
        // }
        // this.loading = false;
        // this.page = this.page + 1;
        if (this.total === this.list.length) {
          this.finished = true;
          this.loading = false;
          return;
        }
        this.queryArticles();
      }, 1000);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
    async queryArticles() {
      let data = {
        page: this.page
      };
      let res = await this.$http.queryArticles(data);
      this.total = res.data.count;
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

<style lang="less">
@import url("./../assets/less/index.less");
</style>
