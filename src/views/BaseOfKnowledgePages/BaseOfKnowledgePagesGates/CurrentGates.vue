<template>
    <v-container>
        <v-sheet>Ворота {{ route.params.id }}</v-sheet>
        <v-sheet>{{ currentGate }}</v-sheet>
    </v-container>
</template>

<script setup>
import { useGatesStore } from "@/stores/gatesStore";
import { useRoute } from "vue-router";
import { computed } from "vue";

const allGatesStore = useGatesStore();
const route = useRoute();

// Объединяем все ворота в один массив для удобного поиска по id
const allGates = computed(() =>
  [
    ...allGatesStore.gatesHeadCenter,
    ...allGatesStore.gatesAjnaCenter,
    ...allGatesStore.gatesThroatCenter,
    ...allGatesStore.gatesGCenter,
    ...allGatesStore.gatesEgoCenter,
    ...allGatesStore.gatesSolarPlexusCenter,
    ...allGatesStore.gatesSacralCenter,
    ...allGatesStore.gatesSplenicCenter,
    ...allGatesStore.gatesRootCenter,
  ].reduce((acc, gate) => {
    acc[gate.id] = gate.title;
    return acc;
  }, {})
);

// Получаем текущее значение ворот на основе параметра из роута
const currentGate = computed(() => {
  const gateId = route.params.id;
  return allGates.value[gateId] || "Неизвестные ворота";
});
</script>