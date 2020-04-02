<template>
  <li>
    <div class="admin-nav-title" @click="openMenu(menu)">
      <span>{{ menu.name }}</span>
    </div>
    <template v-if="menu.child">
      <div class="admin-nav-child" v-show="currentMenu === menu.id">
        <ul>
          <template v-for="item in menu.child">
            <nav-view :menu="item" :key="item.path"></nav-view>
          </template>
        </ul>
      </div>
    </template>
  </li>
</template>

<script>
export default {
  name: "NavView",
  props: {
    menu: {
      type: Object
    },
    currentMenu: {
      type: Number
    }
  },
  mounted() {
    console.log(this.menu.name);
  },
  methods: {
    openMenu(menu) {
      if (menu.path) {
        this.$router.push({ path: menu.path });
      }
      this.$emit("openMenu", menu);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../assets/less/common.less");
</style>
