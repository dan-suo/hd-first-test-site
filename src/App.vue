<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterBar></FooterBar>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import AppBar from "./components/layouts/AppBar.vue";
import FooterBar from "./components/layouts/FooterBar.vue";
</script>
