import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import Product from "../views/Product.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/test",
      name: "test",
      component: TestView,
    },
  ],
});

export default router;
