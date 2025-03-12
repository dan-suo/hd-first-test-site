<template>
  <v-card class="pa-2 text-body-2" v-show="data.length > 0" variant="flat">
    <v-card-title :class="[`text-${color}`, props.color === 'black' ? 'justify-start' : 'justify-end']" class="d-flex">{{ title }}</v-card-title>
      <v-row v-for="item in data" :key="item.planet" align="center" :class="props.color === 'black' ? 'justify-start' : 'justify-end'">
        <template v-if="align === 'left'">
          <v-col cols="2">
            <v-icon :color="color">{{ mdiPlanetsIcons[item.planet] }}</v-icon>
          </v-col>
          <v-col cols="3" class="text-left">
            <span :style="color">{{ item.gate }}.{{ item.line }}</span>
          </v-col>
        </template>
        <template v-else>
          <v-col cols="3" class="text-right">
            <span :style="color">{{ item.gate }}.{{ item.line }}</span>
          </v-col>
          <v-col cols="2">
            <v-icon :color="color">{{ mdiPlanetsIcons[item.planet] }}</v-icon>
          </v-col>
        </template>
      </v-row>
  </v-card>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  data: Array,
  color: String,
  align: String,
});


const mdiPlanetsIcons = {
  Sun: "mdi-weather-sunset",
  Earth: "mdi-earth",
  Rahu: "mdi-arrow-up",
  Ketu: "mdi-arrow-down",
  Moon: "mdi-moon-waxing-crescent",
  Mercury: "mdi-gender-male-female-variant",
  Venus: "mdi-gender-female",
  Mars: "mdi-gender-male",
  Jupiter: "mdi-tennis-ball-outline",
  Saturn: "mdi-rugby",
  Uranus: "mdi-crosshairs-off",
  Neptune: "mdi-liquid-spot",
  Pluto: "mdi-emoticon-devil",
};
</script>
