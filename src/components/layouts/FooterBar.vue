<template>
  <v-footer class="gradient-footer" >

    <!-- Firstly crete a container for mobile version
     of footer, it will be complitely different
     from desktop version -->

    <v-container
      fluid
      v-if="$vuetify.display.smAndDown"
      class="d-flex justify-space-evenly align-center text-blue-grey-lighten-5 footer-height mt-n1"
    >
      <div class="d-flex justify-center align-center flex-column">
        <v-btn icon="mdi-cog-outline" variant="text" size="small"></v-btn>
        <p class="text-captions mt-n2">Транзит</p>
      </div>
      <div class="d-flex justify-center align-center flex-column">
        <v-btn
          icon="mdi-plus-circle-outline"
          variant="text"
          size="small"
        ></v-btn>
        <p class="text-captions mt-n2">Расчёт</p>
      </div>
      <div class="d-flex justify-center align-center flex-column">
        <v-btn icon="mdi-cart-outline" variant="text" size="small"></v-btn>
        <p class="text-captions mt-n2">Купить</p>
      </div>
      <div class="d-flex justify-center align-center flex-column">
        <v-btn icon="mdi-human-male" variant="text" size="small"></v-btn>
        <p class="text-captions mt-n2">Кабинет</p>
      </div>
    </v-container>

    <!-- And now it's place for desktop footer version -->

    <v-container v-else class="d-flex justify-center align-center">
        <div class="text-button text-white">Тут будет футер</div>
    </v-container>


  </v-footer>
</template>

<style scoped>
.gradient-footer {
  background: linear-gradient(to top right, rgba(55, 38, 167, 0.6), rgba(29, 62, 128, 0.6));
}

.footer-height {
    max-height: 50px;
}
</style>
