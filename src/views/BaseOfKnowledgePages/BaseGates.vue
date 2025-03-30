<template>
  <v-container>
    <v-sheet class="text-h5 text-indigo-darken-3 font-weight-bold montserrat"
      >Ворота в Дизайне Человека</v-sheet
    >
    <v-card
      variant="tonal"
      color="indigo-lighten-4"
      rounded="lg"
      class="mt-4 pa-4"
      v-for="centerCard in allGatesStore.centersNames"
      :key="centerCard.title"
    >
      <v-card-item>
        <v-card-title class="text-indigo-darken-1 mb-4">{{
          centerCard.title
        }}</v-card-title>
        <v-list density="dense">
          <v-list-item
            v-for="gate in centerCard.gates"
            :key="gate.id"
            append-icon="mdi-chevron-right"
            :to="`/base-of-knowledge/gates/${gate.id}`"
            link
            >Ворота {{ gate.id }} - {{ gate.title
            }}<v-divider class="mt-1"></v-divider
          ></v-list-item>
        </v-list>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { useGatesStore } from "@/stores/gatesStore";
import { useRoute } from "vue-router";

const allGatesStore = useGatesStore();
const route = useRoute();
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
