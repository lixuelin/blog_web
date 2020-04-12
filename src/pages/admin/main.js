import Vue from "vue";
import Vant from "vant";
import App from "./admin.vue";
import router from "./router";
import store from "./../../store";
import "vant/lib/index.css";
import "assets/less/reset.less";
import Http from "./../../util/manager_http";

Vue.prototype.$http = Http;

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#admin");
