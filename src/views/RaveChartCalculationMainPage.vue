<template>
  <v-container fluid class="mt-n10 container-of-content">
    <Breadcrumbs class="text-caption text-grey-darken-1" />
    <v-sheet class="font-weight-bold text-h4 montserrat"
      >Расчёт рейв-карты</v-sheet
    ><AstroCalculationCheck></AstroCalculationCheck>
  </v-container>
</template>

<script setup>
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import CalculationDataForm from "../components/forms/CalculationsDataForm.vue";
import AstroCalculationCheck from "@/components/features/AstroCalculationCheck.vue";
</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}
.container-of-content {
  max-width: 1500px;
  margin: 0 auto;
  padding: 16px;
}
</style>
