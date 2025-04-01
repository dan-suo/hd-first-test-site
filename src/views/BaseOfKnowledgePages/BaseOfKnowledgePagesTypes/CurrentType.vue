<template>
  <v-container>
    <v-sheet class="text-h5 text-indigo-darken-3 font-weight-bold montserrat">{{ typeData.title }}</v-sheet>
    <v-card class="mt-4 pa-4" width="300px">
      <v-card-item>
        <v-img :src="typeData.image" height="150px"></v-img>
        <v-sheet class="mt-4 montserrat text-subtitle-2 text-center opacity-60">{{ typeData.percentage }} населения</v-sheet>
      </v-card-item>
      <v-card-text>{{ typeData.description }}</v-card-text>
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

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}
.container-of-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px;
}
.text-wrap {
  word-break: break-word;
  white-space: normal;
  line-height: 1.2;
}
</style>