<template>
  <v-container fluid class="mt-n10 container-of-content">
    <Breadcrumbs class="text-caption text-grey-darken-1" />
    <v-sheet class="font-weight-bold text-h4 montserrat">Магазин</v-sheet>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="product in marketStore.products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <CardOfMarketServ
            :title="product.title"
            :price="product.price"
            :description="product.description"
            :image="product.image"
            @buy="marketStore.addToCart"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-4"></v-divider>

    <v-container>
      <v-row v-if="marketStore.cart.length">
        <v-col cols="12">
          <v-sheet>Корзина ({{ marketStore.cartCount }})</v-sheet>
          <v-sheet class="text-caption text-grey-darken-1"
            >* корзина пока багованная и вообще сделана для посмотреть, исправим
            в следующей версии</v-sheet
          >
          <v-list>
            <v-list-item v-for="item in marketStore.cart" :key="item.id">
              {{ item.title }} - {{ item.quantity }} шт. ({{
                item.price * item.quantity
              }}
              грн.)
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import CardOfMarketServ from "../components/common/cards/CardOfMarketServ.vue";
import { useMarketStore } from "../stores/marketStore";

const marketStore = useMarketStore();
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
