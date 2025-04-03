<template>
  <v-container>
    <v-sheet class="text-h5 text-indigo-darken-3 font-weight-bold montserrat"
      >Основные термины</v-sheet
    >
    <v-row class="mt-4">
      <v-col v-for="(term, index) in terms" :key="index" cols="6" class="mt-n4">
        <v-card variant="flat" @click="openTerm(term)" density="compact">
          <v-card-item prepend-icon="mdi-circle-small">
            <v-card-title>{{ term.title }}</v-card-title>
            <v-card-subtitle>{{ term.shortDescription }}</v-card-subtitle>
            <template v-slot:append>
              <v-chip
                size="small"
                :color="getCategoryColor(term.category)"
                class="ml-2"
              >
                {{ term.category }}
              </v-chip>
            </template>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      max-width="700px"
      transition="dialog-bottom-transition"
    >
      <v-card rounded="lg" class="pa-2">
        <v-card-item>
          <v-card-title class="montserrat ml-2 font-weight-bold"
            >{{ currentTerm.title
            }}<v-chip
              size="small"
              :color="getCategoryColor(currentTerm.category)"
              class="ml-6"
            >
              {{ currentTerm.category }}
            </v-chip></v-card-title
          >

          <v-card-text class="text-body-1 ml-n2 mt-5 montserrat">{{
            currentTerm.fullDescription
          }}</v-card-text>

          <v-card-actions>
            <v-btn class="ml-n2" color="deep-orange-lighten-1" @click="dialog = false"
              >Закрыть<v-icon size="small" class="ml-2"
                >mdi-close</v-icon
              ></v-btn
            >
          </v-card-actions>
        </v-card-item>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { useGatesStore } from "@/stores/gatesStore";
import { computed, ref } from "vue";

const hdDataStore = useGatesStore();
const terms = computed(() => hdDataStore.termsDictionary);

const dialog = ref(false);
const currentTerm = ref(null);

const openTerm = (term) => {
  currentTerm.value = term;
  dialog.value = true;
};

// Функция для определения цвета по категории
const getCategoryColor = (category) => {
  const colors = {
    dates: "blue-lighten-2",
    mechanics: "green-lighten-2",
    cosmology: "purple-lighten-2",
    default: "grey-lighten-1",
  };
  return colors[category] || colors["default"];
};
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
