<template>
  <v-breadcrumbs :items="breadcrumbs">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => [
  { title: "Главная", to: "/" },
  ...route.matched
    .filter((r) => r.meta?.title)
    .map((r) => ({ title: r.meta.title, to: r.path })),
]);
</script>
