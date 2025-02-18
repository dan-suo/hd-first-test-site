<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AppBar from './components/layouts/AppBar.vue';
</script>
