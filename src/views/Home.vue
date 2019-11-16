<template>
  <div class="home">
    <div class="search">
      <input type="text" name="" id="" placeholder="搜一下" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
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
