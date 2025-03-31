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
        path: "gates/:id",
        name: "CurrentGates",
        component: () =>
          import(
            "@/views/BaseOfKnowledgePages/BaseOfKnowledgePagesGates/CurrentGates.vue"
          ),
        meta: { title: "Описание ворот" },
      },
      {
        path: "types",
        name: "Types",
        component: () => import("@/views/BaseOfKnowledgePages/BaseTypes.vue"),
        meta: { title: "Типы" },
      },
      {
        path: "types/:id",
        name: "CurrentType",
        component: () => import("@/views/BaseOfKnowledgePages/BaseOfKnowledgePagesTypes/CurrentType.vue"),
        meta: { title: "Описание типа" }
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

router.beforeEach((to, form, next) => {
  const gatesNames = {
    1: "Творчества",
    2: "Высшего Знания",
    3: "Упорядочивания",
    4: "Формулизации",
    5: "Фиксированных Ритмов",
    6: "Конфликта",
    7: "Собственной Роли",
    8: "Содействия",
    9: "Фокусирования",
    10: "Собственного поведения",
    11: "Идей",
    12: "Осторожности",
    13: "Слушателя",
    14: "Компетентности",
    15: "Крайностей",
    16: "Навыков",
    17: "Мнений",
    18: "Корректировки",
    19: "Потребностей",
    20: "Настоящего",
    21: "Охотника",
    22: "Открытости",
    23: "Ассимиляции",
    24: "Рационализации",
    25: "Духа Самости",
    26: "Эгоиста",
    27: "Заботы",
    28: "Игрока",
    29: "Согласия",
    30: "Распознавания",
    31: "Лидерства",
    32: "Непрерывности",
    33: "Уединения",
    34: "Силы",
    35: "Перемен",
    36: "Кризиса",
    37: "Дружбы",
    38: "Борьбы",
    39: "Провокации",
    40: "Одиночества",
    41: "Фантазий",
    42: "Роста",
    43: "Озарения",
    44: "Бдительности",
    45: "Собственности",
    46: "Собственной Решимости",
    47: "Осмысления",
    48: "Глубины",
    49: "Принципов",
    50: "Ценностей",
    51: "Шока",
    52: "Недеяния",
    53: "Начал",
    54: "Амбиций",
    55: "Духа",
    56: "Стимуляции",
    57: "Интуиции",
    58: "Жизненности",
    59: "Сексуальности",
    60: "Принятия Ограничений",
    61: "Внутренней Истины",
    62: "Деталей",
    63: "Сомнений",
    64: "Замешательства",
  };

  const typeNames = {
    manifestor: "Манифестор",
    generator: "Генератор",
    "manifesting-generator": "Манифестирующий Генератор",
    projector: "Проектор",
    reflector: "Рефлектор",
  };

  if (to.name === "CurrentGates" && to.params.id) {
    const gateName = gatesNames[to.params.id] || `Ворота ${to.params.id}`;
    document.title = `Ворота ${to.params.id} - ${gateName}`;
  } else if (to.name === "CurrentType" && to.params.id) {
    const typeName = typeNames[to.params.id] || `Тип ${to.params.id}`;
    document.title = `${typeName} | Дизайн Человека`;
  } else {
    document.title = to.meta.title || "Страница сайта";
  }
  next();
});

export default router;
