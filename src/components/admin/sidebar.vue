<template>
  <aside class="admin-nav">
    <ul>
      <template v-for="item in menu">
        <nav-view
          :key="item.id"
          :menu="item"
          :currentMenu="current"
          @openMenu="openMenu"
        ></nav-view>
      </template>
    </ul>
  </aside>
</template>

<script>
import NavView from "@/components/nav.vue";
export default {
  data() {
    return {
      current: 9999,
      menu: [
        {
          id: 0,
          name: "文章管理",
          child: [
            {
              name: "文章列表",
              path: "/article"
            },
            {
              name: "文章新增",
              path: "/article_add"
            }
          ]
        },
        {
          id: 1,
          name: "用户管理",
          child: []
        },
        {
          id: 2,
          name: "简历管理",
          child: []
        }
      ]
    };
  },
  components: {
    NavView
  },
  methods: {
    openMenu(data) {
      console.log(data, "dada");
      if (!data) {
        console.log(data, "daa");

        return;
      }
      if (this.current === data.id) {
        return (this.current = 9999);
      }
      this.current = data.id;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/common.less");
</style>
