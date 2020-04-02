<template>
  <div class="admin" :style="{ height: clientHeight }">
    <div class="admin-bg">
      <div class="admin-layout">
        <div class="admin-layout-login">
          <div class="admin-logo">
            <img src="./../../assets/logo.png" alt="" />
          </div>
          <div class="form admin-form">
            <div class="form-group">
              <input
                type="text"
                v-model="user.username"
                placeholder="请输入用户名"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="user.password"
                placeholder="请输入密码"
              />
            </div>
            <div class="form-btn">
              <button type="button" @click="login">登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientHeight: document.documentElement.clientHeight + "px",
      user: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {
    login() {
      console.log(this.$router);
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./../../assets/less/components.less");
.admin {
  width: 100%;
  height: 100%;
  background-image: url("./../../assets/image/bg.jpg");
  background-size: cover;

  &-bg {
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0, 0, 0.3);
    backdrop-filter: saturate(180%) blur(5px);
  }
  &-layout {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 660px;
    height: 400px;
    background-image: url("./../../assets/image/bg.jpg");
    background-color: #fff;
    background-size: cover;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2),
      -1px -1px 2px rgba(255, 255, 255, 0.2);

    &-login {
      margin-left: 50%;
      padding: 50px 0;
      height: 400px;
      background: #fff;
      border-radius: 0 5px 5px 0;
    }
  }
  &-logo {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    & img {
      width: 100%;
    }
  }

  &-form {
    margin: 40px 35px;
  }
}
</style>
