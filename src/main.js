import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vant from "vant";
import "vant/lib/index.css";
import "assets/less/reset.less";
import Http from "./util/http";

Vue.config.productionTip = false;
Vue.prototype.$http = Http;
Vue.use(Vant);

console.log(Vue.prototype);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
