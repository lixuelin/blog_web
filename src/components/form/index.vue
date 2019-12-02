<template>
  <div>
    <v-form :model="model">
      <v-item>
        <v-input v-model="model.username" placeholder="请输入用户名"></v-input>
      </v-item>
      <v-item>
        <v-input v-model="model.password" type="password" placeholder="请输入密码"></v-input>
      </v-item>
      <v-item class="btn">
        <van-button type="primary" size="normal" @click="go_to_home">登录</van-button>
      </v-item>
    </v-form>
  </div>
</template>

<script>
import VInput from "./input.vue";
import VItem from "./item.vue";
import VForm from "./form.vue";
import { Button } from "vant";
export default {
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  components: {
    VInput,
    VItem,
    VForm,
    [Button.name]: Button
  },
  methods: {
    go_to_home() {
      this.$router.push({ name: "admin" });
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  text-align: center;

  & button {
    cursor: pointer;
  }
  & span {
    color: #fff;
  }
}
</style>