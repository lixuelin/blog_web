import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "@/views/admin/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Admin",
    component: Admin
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/admin/Home.vue"),
    children: [
      {
        path: "/article",
        name: "Article",
        component: () => import("@/views/admin/Article.vue")
      },
      {
        path: "/article_add",
        name: "Article_add",
        component: () => import("@/views/admin/article_add.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
