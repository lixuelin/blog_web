import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/admin/Home.vue'),
  },
  {
    path: '/manager',
    name: 'manager',
    redirect: '/manager/article',
    component: () => import('@/views/admin/Index.vue'),
    children: [
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/admin/article.vue'),
      },
      {
        path: 'mark',
        name: 'mark',
        component: () => import('@/views/admin/mark.vue'),
      },
      {
        path: 'work',
        name: 'work',
        component: () => import('@/views/admin/work.vue'),
      },
      {
        path: 'book',
        name: 'book',
        component: () => import('@/views/admin/book.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
