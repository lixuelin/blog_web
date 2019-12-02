<template>
  <div class="home">
    <div class="bg"></div>
    <div class="login">
      <div class="login-logo">
        <img src="./../../assets/logo.png" alt />
      </div>
      <v-form :model="model"></v-form>
    </div>
  </div>
</template>

<script>
import VForm from "@/components/form/index.vue";
export default {
  name: "home",
  data() {
    return {
      model: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    VForm
  }
};
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 320px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: #fff;

  &-logo {
    margin: 20px auto;
    & img {
      display: block;
      margin: 0 auto;
      width: 60px;
      height: 60px;
    }
  }
}
.bg {
  width: 100%;
  height: 766px;
  background: url("../../assets/image/bg.jpeg");
  background-size: cover;
  overflow: hidden;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
}
</style>