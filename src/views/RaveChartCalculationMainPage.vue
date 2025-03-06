<template>
  <v-container fluid class="mt-n10 container-of-content">
    <Breadcrumbs class="text-caption text-grey-darken-1" />
    <v-sheet class="font-weight-bold text-h4 montserrat"
      >Расчёт рейв-карты</v-sheet
    >
    <v-sheet class="text-caption text-grey-darken-1 mt-1"
      >В данный момент расчёт находится в разработке, так что нажав на кнопку вы
      пока не увидите свою карту, но увидите котика.</v-sheet
    >
    <CalculationDataForm></CalculationDataForm>
    <v-container >

    </v-container>
  </v-container>
</template>

<script setup>
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import CalculationDataForm from "../components/forms/CalculationsDataForm.vue";
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
