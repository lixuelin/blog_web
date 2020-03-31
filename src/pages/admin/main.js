import Vue from "vue";
import App from "./admin.vue";
import router from "./../../router";
import store from "./../../store";
import Vant from "vant";
import "vant/lib/index.css";
import "assets/less/reset.less";

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#admin");
