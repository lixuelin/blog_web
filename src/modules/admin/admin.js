import Vue from 'vue';
import Admin from './Admin.vue';
import router from './router';
import 'vant/lib/index.less';
import './../../assets/less/reset.less';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(Admin),
}).$mount('#admin');