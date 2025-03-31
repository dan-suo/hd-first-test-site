<template>
    <v-container>
        <v-sheet></v-sheet>
    </v-container>
    
</template>

<script setup>
import { useGatesStore } from "@/stores/gatesStore";
import { computed } from "vue";
import { useRoute } from "vue-router";

const hdDataStore = useGatesStore();
const route = useRoute();

</script>