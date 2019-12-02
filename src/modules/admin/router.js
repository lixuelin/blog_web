import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: () =>
        import ("@/views/admin/Home.vue"),
}, {
    path: '/admin',
    name: 'admin',
    component: () =>
        import ("@/views/admin/Index.vue"),
    children: [{
            path: '/',
            name: 'article',
            component: () =>
                import ("@/views/admin/article.vue"),
        },
        {
            path: '/mark',
            name: 'mark',
            component: () =>
                import ("@/views/admin/mark.vue"),
        }
    ]
}, ];

const router = new VueRouter({
    routes,
});

export default router;