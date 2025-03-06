<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title>🌌 Калькулятор Дизайна Человека</v-card-title>
      <v-card-text>
        <v-text-field
          label="Дата рождения (UTC)"
          v-model="dateInput"
          type="datetime-local"
        ></v-text-field>
        <v-btn color="primary" class="mt-2" @click="calculatePositions">
          🔄 Рассчитать
        </v-btn>
      </v-card-text>
      <v-card-text v-if="results.length">
        <h3>Результаты:</h3>
        <v-table>
          <thead>
            <tr>
              <th>🌍 Планета</th>
              <th>📍 Градус</th>
              <th>🚪 Ворота</th>
              <th>📏 Линия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(res, index) in results" :key="index">
              <td>{{ res.planet }}</td>
              <td>{{ res.degree }}°</td>
              <td>{{ res.gate }}</td>
              <td>{{ res.line }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { getHumanDesignData } from "@/services/astronomyService.js";

const dateInput = ref(""); // Ввод даты
const results = ref([]); // Итоговые данные

const calculatePositions = () => {
  if (!dateInput.value) return;
  const date = new Date(dateInput.value);
  results.value = getHumanDesignData(date);
};
</script>