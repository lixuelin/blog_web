<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    login() {
      this.$router.push({ path: "/admin" });
    }
  }
};
</script>

<style lang="less" scoped></style>
