<template>
  <div class="vside">
    <v-nav :menu="nav"></v-nav>
  </div>
</template>

<script>
import VNav from "@/components/common/nav/nav.vue";

export default {
  data() {
    return {
      nav: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Vue",
          path: "/vue"
        },
        {
          name: "Book",
          path: "/book"
        },
        {
          name: "About",
          path: "/about"
        }
      ],
    };
  },
  components: { VNav }
};
</script>

<style lang="less" scoped>
.vside {
  padding: 20px 0;
}
</style>
