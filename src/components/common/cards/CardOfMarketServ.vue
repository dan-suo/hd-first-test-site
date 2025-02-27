<template>
  <v-card class="pa-2">
    <v-card-item>
      <v-img height="150" :src="image" cover></v-img>
      <v-card-title class="text-body-2 text-uppercase montserrat mt-2">{{
        title
      }}</v-card-title>
      <v-card-subtitle>{{ price }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="deep-orange-lighten-1" text="Больше"></v-btn>
        <v-btn
          :icon="showText ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="showText = !showText"
        ></v-btn>
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-cart-outline"
          color="deep-orange-lighten-1"
          @click="addToCart"
        ></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="showText">
          <v-divider></v-divider>
          <v-card-text>{{ description }}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { ref, defineProps } from "vue";

const showText = ref(false);

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const emit = defineEmits(["buy"]);

const addToCart = () => {
  emit("buy", { title: props.title, price: props.price });
};
</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}
</style>
