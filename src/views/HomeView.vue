<template>
  <v-container v-if="$vuetify.display.mdAndUp" fluid>
    <v-row class="d-flex justify-center align-center">
      <v-col
        cols="4"
        class="d-flex justify-center align-center text-h6 montserrat"
        ><StarsAnimation></StarsAnimation
      ></v-col>
      <v-col
        cols="4"
        class="d-flex justify-center text-h2 montserrat mt-n16"
        >Дизайн Человека</v-col
      >
      <v-col
        cols="4"
        class="d-flex justify-center align-center text-h6 montserrat"
        ><StarsAnimation></StarsAnimation
      ></v-col>
      <v-col
        cols="12"
        class="d-flex justify-center align-center text-h5 montserrat mt-n16"
        >Узнай себя лучше прямо сейчас</v-col
      >
      <v-col
        cols="12"
        class="d-flex justify-center align-center text-h6 montserrat"
        ><v-btn color="deep-orange-lighten-1" size="x-large" class="text-body-2"
          ><v-text class="">Рассчитать свою рейв-карту</v-text></v-btn
        ></v-col
      >
    </v-row>
    <v-row class="d-flex justify-center align-center"></v-row>
  </v-container>
</template>

<script setup>
import StarsAnimation from "../components/features/StarsAnimation.vue";


</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}
</style>
