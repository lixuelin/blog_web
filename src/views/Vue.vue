<template>
  <div>
    <div class="home-article">
      <article-item :articles="artilce_list"></article-item>
    </div>
  </div>
</template>

<script>
import ArticleItem from "@/components/article_item.vue";
export default {
  data() {
    return {
      artilce_list: [
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com",
        },
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com",
        },
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com",
        },
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com",
        },
      ],
    };
  },
  components: { ArticleItem },
};
</script>

<style lang="scss" scoped></style>
