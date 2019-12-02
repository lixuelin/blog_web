import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ("@/views/Home.vue"),
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ("@/views/About.vue"),
    },
    {
        path: '/book',
        name: 'book',
        component: () =>
            import ("@/views/Book.vue"),
    },
    {
        path: '/vue',
        name: 'vue',
        component: () =>
            import ("@/views/Vue.vue"),
    },
    {
        path: '/article',
        name: 'article',
        component: () =>
            import ("@/components/article/item.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;