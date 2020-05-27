import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import { Toast, Notify } from "vant";
import "vant/lib/index.css";
import "assets/less/reset.less";
import Http from "./util/web_http";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

Vue.config.productionTip = false;
Vue.prototype.$http = Http;
Vue.prototype.$toast = Toast;
Vue.prototype.$notify = Notify;
Vue.use(Vant);

Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
