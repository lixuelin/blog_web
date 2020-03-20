<template>
  <div>
    <ul>
      <template v-for="item in books">
        <li :key="item.id">
          <div>
            <img src="./../assets/logo.png" alt="" />
          </div>
          <div>
            <h4>
              <a href="">Javascript</a>
            </h4>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped></style>
