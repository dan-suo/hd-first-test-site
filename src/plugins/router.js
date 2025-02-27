import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "Главная"}
  },
  {
    path: "/rave-chart-calculation",
    name: "RaveChartCalculationMainPage",
    component: () => import("@/views/RaveChartCalculationMainPage.vue"),
    meta: { title: "Рассчёт рейв-карты" }
  },
  {
    path: "/market-main-page",
    name: "MarketMainPage",
    component: () => import("@/views/MarketMainPage.vue"),
    meta: { title: "Купить" }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
