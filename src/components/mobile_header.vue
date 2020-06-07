<template>
  <div class="mobile-header">
    <header class="mobile-header-nav">
      <div class="mobile-header-logo" @click="goToHome">
        <img src="./../assets/logo.png" alt />
      </div>
      <div class="menu-btn" @click="showPopup">
        <van-icon name="wap-nav" />
      </div>
    </header>
    <van-popup v-model="show" position="left" :style="{ width: '180px', height: '100%' }">
      <div class="mobile-header-menu">
        <div class="mobile-header-logo mobile-header-menu-logo">
          <img src="./../assets/logo.png" alt />
        </div>
        <ul class="mobile-header-menu-list">
          <li v-for="item in menu" :key="item.path" @click="goToNext(item)">{{ item.name }}</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      menu: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Vue",
          path: "/vue"
        },
        {
          name: "Node"
        },
        {
          name: "About",
          path: "/about"
        },
        {
          name: "Python"
        }
      ]
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
      if (this.show) {
        this.showPopup();
      }
    },
    showPopup() {
      this.show = !this.show;
    },
    goToNext(data) {
      if (data.path) {
        this.$router.push({ path: data.path });
      } else {
        let current_router = this.$router.history.current.path;
        if (current_router !== "/") {
          this.showPopup();
          this.$router.push({ path: "/" });
          return;
        }
        let new_data = [
          {
            name: "我是来测试的",
            time: "2019-11-16",
            description:
              "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
            source: "www.baidu.com"
          },
          {
            name: "我是来测试的",
            time: "2019-11-16",
            description:
              "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
            source: "www.baidu.com"
          },
          {
            name: "我是来测试的",
            time: "2019-11-16",
            description:
              "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
            source: "www.baidu.com"
          },
          {
            name: "我是来测试的",
            time: "2019-11-16",
            description:
              "今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版",
            source: "www.baidu.com"
          }
        ];
        this.$emit("updateArticle", new_data);
      }

      this.showPopup();
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/components.less");
</style>
