import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "Главная" },
  },
  {
    path: "/rave-chart-calculation",
    name: "RaveChartCalculationMainPage",
    component: () => import("@/views/RaveChartCalculationMainPage.vue"),
    meta: { title: "Рассчёт рейв-карты" },
  },
  {
    path: "/market-main-page",
    name: "MarketMainPage",
    component: () => import("@/views/MarketMainPage.vue"),
    meta: { title: "Купить" },
  },
  {
    path: "/transits-main-page",
    name: "TransitsMainPage",
    component: () => import("@/views/TransitsMainPage.vue"),
    meta: { title: "Транзиты" },
  },
  {
    path: "/base-of-knowledge",
    name: "BaseOfKnowledge",
    component: () => import("@/views/BaseOfKnowledge.vue"),
    meta: { title: "База знаний" },
    children: [
      {
        path: "gates",
        name: "Gates",
        component: () => import("@/views/BaseOfKnowledgePages/BaseGates.vue"),
        meta: { title: "Ворота" },
      },
      {
        path: "types",
        name: "Types",
        component: () => import("@/views/BaseOfKnowledgePages/BaseTypes.vue"),
        meta: { title: "Типы" },
      },
      {
        path: "centers",
        name: "Centers",
        component: () => import("@/views/BaseOfKnowledgePages/BaseCenters.vue"),
        meta: { title: "Центры" },
      },
      {
        path: "channels",
        name: "Channels",
        component: () =>
          import("@/views/BaseOfKnowledgePages/BaseChannels.vue"),
        meta: { title: "Каналы" },
      },
      {
        path: "profiles",
        name: "Profiles",
        component: () =>
          import("@/views/BaseOfKnowledgePages/BaseProfiles.vue"),
        meta: { title: "Профили" },
      },
      {
        path: "planets",
        name: "Planets",
        component: () => import("@/views/BaseOfKnowledgePages/BasePlanets.vue"),
        meta: { title: "Планеты" },
      },
      {
        path: "streams",
        name: "Streams",
        component: () => import("@/views/BaseOfKnowledgePages/BaseStreams.vue"),
        meta: { title: "Контуры" },
      },
      {
        path: "termins",
        name: "Termins",
        component: () => import("@/views/BaseOfKnowledgePages/BaseTermins.vue"),
        meta: { title: "Термины" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
