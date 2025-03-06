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
  },
  {
    path: "/transits-main-page",
    name: "TransitsMainPage",
    component: () => import("@/views/TransitsMainPage.vue"),
    meta: { title: "Транзиты" }
  },
  {
    path: "/base-of-knowledge",
    name: "BaseOfKnowledge",
    component: () => import("@/views/BaseOfKnowledge.vue"),
    meta: { title: "База знаний" }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
