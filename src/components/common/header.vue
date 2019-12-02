<template>
  <div class="head">
    <div class="logo">
      <img src="../../assets/logo.png" />
    </div>
    <div class="vnav">
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "ddd"
    };
  }
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  padding: 0 60px;
}
.logo {
  flex-basis: 100px;
  & img {
    display: block;
    width: 40px;
    height: 40px;
  }
}

.vnav {
  flex: 1;
  text-align: right;

  & li {
    display: inline;
    padding: 0 10px;
    line-height: 40px;
  }
}
</style>
