<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-button type="info">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from "vant";

export default {
  name: "home",
  components: {
    [Button.name]: Button
  }
};
</script>
