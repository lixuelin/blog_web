<template>
  <div class="home">
    <div class="search">
      <input type="text" name id placeholder />
    </div>
    <div>
      <ul>
        <v-list :list="list"></v-list>
      </ul>
    </div>
  </div>
</template>

<script>
import VList from "@/components/article_list/list.vue";
export default {
  name: "home",
  data() {
    return {
      list: [
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com"
        },
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com"
        },
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com"
        },
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com"
        },
        {
          name: "我是来测试的",
          time: "2019-11-16",
          content:
            "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
          source: "www.baidu.com"
        },
      ]
    };
  },
  components: {
    VList
  }
};
</script>

<style lang="less" scoped>
.search {
  & input {
    display: block;
    padding: 0 10px;
    width: 60%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>
