<template>
  <div class="vnav">
    <ul>
      <li v-for="item in nav" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: "Home"
        },
        {
          name: "Vue"
        },
        {
          name: "Node"
        },
        {
          name: "Javascript"
        },
        {
          name: "Others"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.vnav {
  li {
    padding-left: 20px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    &:hover {
      background: #e4e4e4;
    }
  }
}
</style>
