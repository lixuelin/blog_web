// import Vue from "vue";
// import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/vue",
    name: "Vue",
    component: () => import(/* webpackChunkName: "about" */ "../views/Vue.vue"),
  },
  {
    path: "/node",
    name: "Node",
    component: () => import(/* webpackChunkName: "about" */ "../views/Node.vue"),
  },
  {
    path: "/article_detail",
    name: "article_detail",
    component: () => import(/* webpackChunkName: "about" */ "../views/article_detail.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
