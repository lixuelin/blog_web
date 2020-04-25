<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
    </table>
  </div>
</template><script>
export default {
  mounted() {
    this.getArticles();
  },

  methods: {
    async getArticles() {
      try {
        let res = await this.$http.getArticles();
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script><style lang="less"scoped></style>