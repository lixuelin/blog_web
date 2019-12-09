<template>
  <div>
    <ul class="v-page">
      <li>
        <van-icon name="arrow-left" />
      </li>
      <li
        :class="{active: cur==index}"
        v-for="(item, index ) in data"
        :key="item"
        @click="cur=index"
      >
        <span>{{item}}</span>
      </li>
      <li>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  data() {
    return {
      cur: 0,
      data: [1, 2, 3, 4, 5, 6]
    };
  },
  components: {
    [Icon.name]: Icon
  }
};
</script>

<style lang="less" scoped>
.v-page {
  margin: 15px 0;
  height: 36px;
  text-align: center;
  & li {
    display: inline-block;
    margin-right: 10px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    &:hover,
    &.active {
      border-color: #07c160;
    }
  }
  & .van-icon {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
  }
}
</style>