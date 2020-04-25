<template>
  <div class="article">
    <header class="article-header">
      <h1>{{ article_info.name }}</h1>
    </header>
    <article class="article-main">
      <div class="article-main-content" v-html="article_info.content" v-highlight></div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article_info: {
        name: "做了这么久的程序员，你知道为什么会有Lambda表达式吗？",
        content:
          "<pre><code>app.use(cors({<br>    origin: function (ctx) {<br>        if (ctx.url === '/test') {<br>            return '*'; // 允许来自所有域名请求<br>        }<br>        return 'http://localhost:8080'; / 这样就能只允许 http://localhost:8080 这个域名的请求了<br>    },<br>    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],<br>    maxAge: 5,<br>    credentials: true,<br>    allowMethods: ['GET', 'POST', 'DELETE'],<br>    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],<br>}))</code></pre>"
      }
    };
  },
  mounted() {
    this.get_article();
  },
  methods: {
    async get_article() {
      let data = this.$route.query;
      try {
        let res = await this.$http.queryArticleDetail(data);
        this.article_info = res.data;
      } catch (error) {}
    }
  }
};
</script>

<style lang="less" scoped>
.article {
  width: 100%;
  &-header {
    width: 100%;
    & h1 {
      padding: 10px 15px;
      font-size: 20px;
      text-align: center;
    }
  }
  &-main {
    padding-bottom: 50px;
    width: 100%;
  }
}
</style>
