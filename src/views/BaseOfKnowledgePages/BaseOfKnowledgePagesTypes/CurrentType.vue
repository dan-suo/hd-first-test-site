<template>
  <v-container>
    <v-sheet>{{ typeData.title }}</v-sheet>
    <v-card>
      <v-card-item>
        <v-img :src="typeData.image" height="150px"></v-img>
        <v-card-text>{{ typeData.description }}</v-card-text>
        <v-sheet>{{ typeData.percentage }}</v-sheet>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useGatesStore } from "@/stores/gatesStore";

const route = useRoute();
const hdDataStore = useGatesStore();

const typeData = computed(() => {
  return (
    hdDataStore.typesStorage.find(
      (type) => type.route === `/base-of-knowledge/types/${route.params.id}`
    ) || {}
  );
});
</script>
