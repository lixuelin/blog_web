import Vue from "vue";
import Admin from "./Admin.vue";
import router from "./router";
import "vant/lib/index.less";
import "./../../assets/less/reset.less";
import Http from "./../../api/http";

Vue.config.productionTip = false;
Vue.prototype.$Http = Http;

new Vue({
    router,
    render: h => h(Admin)
}).$mount("#admin");