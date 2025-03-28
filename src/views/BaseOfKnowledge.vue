<template>
  <v-container fluid class="mt-n6 container-of-content montserrat">
    <Breadcrumbs class="text-caption text-grey-darken-1" />
    <v-row>
      <!-- Создаём левую колонку - для навигации по библиотеке -->
      <v-col cols="3">
        <v-card variant="tonal pa-6" color="indigo-lighten-4" rounded="lg">
          <v-sheet class="text-h5 text-grey-darken-3"
            >Разделы библиотеки</v-sheet
          >
          <v-sheet class="text-caption text-grey-darken-2">Кликайте на интересующий</v-sheet>
          <v-divider class="mt-4"></v-divider>
          <v-list density="compact" class="text-indigo-darken-1 text-subtitle-1 montserrat">
            <v-list-item
              v-for="page in libraryPagesList"
              :key="page.title"
              :to="page.to"
              exact
              :active="page.to === route.path"
            >
              {{ page.title }}</v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9" class="pa-2">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";

const route = useRoute();

const libraryPagesList = [
  {
    title: "Ворота",
    to: "/base-of-knowledge/gates",
  },
  {
    title: "Типы",
    to: "/base-of-knowledge/types",
  },
  {
    title: "Профили",
    to: "/base-of-knowledge/profiles",
  },
  {
    title: "Каналы",
    to: "/base-of-knowledge/channels",
  },
  {
    title: "Центры",
    to: "/base-of-knowledge/centers",
  },
  {
    title: "Планеты",
    to: "/base-of-knowledge/planets",
  },
  {
    title: "Контуры",
    to: "/base-of-knowledge/streams",
  },
  {
    title: "Словарь терминов",
    to: "/base-of-knowledge/termins",
  },
];
</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}
.container-of-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px;
}
</style>
