<template>
  <div class="head">
    <div class="logo">
      <img src="@/assets/logo.png" alt />
    </div>
    <div class="menu">
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  padding: 10px 0;
  height: 60px;
  background: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
  transition: background-color 0.3s ease-in-out;
  .logo {
    & img {
      display: block;
      width: 40px;
      height: 40px;
    }
  }
  .menu {
    flex: 1;
    height: 60px;
    text-align: right;
    & li {
      display: inline;
      padding: 0 10px;
      line-height: 40px;
    }
  }
}
</style>
