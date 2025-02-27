<template>
<v-container fluid class="mt-n10 container-of-content">
    <Breadcrumbs class="text-caption text-grey-darken-1" />
    <v-sheet class="font-weight-bold text-h4 montserrat"
      >Магазин</v-sheet
    >
  </v-container>
</template>

<script setup>
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
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