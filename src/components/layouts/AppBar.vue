<template>
  <v-container fluid>
    <v-app-bar
      density="compact"
      elevation="0"
      image="@/assets/starsskytree.jpg"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(106, 90, 205,.8), rgba(96, 150, 255,.8)"
        ></v-img>
      </template>

      <!-- There are two different app-bars (depending on the screen size & info)
 first app-bar for desktop version and its down here -->

      <v-container
        v-if="$vuetify.display.mdAndUp"
        class="d-flex justify-space-evenly align-center text-white"
      >
        <div>
          <v-btn variant="text" size="small" class="mr-6 text-button"
            >Language</v-btn
          >
          <v-btn icon="mdi-facebook" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-twitter" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-instagram" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-youtube" variant="text" size="small"></v-btn>
        </div>
        <div>
          <v-btn variant="text" size="small">О ДЧ</v-btn>
          <v-btn variant="text" size="small">Генные ключи</v-btn>
          <v-btn variant="text" size="small">Блог</v-btn>
          <v-btn variant="text" size="small">Контакты</v-btn>
          <v-btn
            icon="mdi-exit-to-app"
            variant="text"
            size="small"
            class="ml-6"
          ></v-btn>
        </div>
      </v-container>

      <!-- first app-bar for mobile version is here -->

      <v-container v-else class="d-flex justify-space-between align-center text-white">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <div>
          <v-btn icon="mdi-facebook" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-twitter" variant="text" size="small"></v-btn>
          <v-btn icon="mdi-instagram" variant="text" size="small"></v-btn>
        </div>
        <v-btn icon="mdi-exit-to-app" variant="text" size="small"></v-btn>
      </v-container>
    </v-app-bar>

    <!-- We have a second non compact app-bar for middle and up screens
     we use it for main actions with our app -->

    <v-app-bar elevation="4" color="indigo-lighten-5" v-if="$vuetify.display.mdAndUp">

      <!-- Now we create a second app-bar for middle and up screens-->

      <v-container
        class="d-flex justify-center align-center text-black"
      ><v-btn to="/" icon="mdi-home" variant="text" class="mr-4"></v-btn>
        <v-sheet class="text-caption mr-6" color="indigo-lighten-5"
          >Путеводитель по
          <p>Дизайну Человека</p></v-sheet
        >

        <a class="cursor-pointer">
          <v-card variant="plain" class="mr-6" to="/rave-chart-calculation">
            <v-card-item>
              <template v-slot:prepend>
                <v-btn icon="mdi-plus-circle-outline" variant="text"></v-btn>
              </template>
              <v-card-title class="text-body-1 text-whit"
                >Новый расчёт</v-card-title
              >
            </v-card-item>
          </v-card>
        </a>

        <a class="cursor-pointer">
          <v-card variant="plain" class="mr-6" to="/market-main-page">
            <v-card-item>
              <template v-slot:prepend>
                <v-btn icon="mdi-cart-outline" variant="text"></v-btn>
              </template>
              <v-card-title class="text-body-1">Купить</v-card-title>
            </v-card-item>
          </v-card>
        </a>

        <a class="cursor-pointer">
          <v-card variant="plain" class="mr-6" to="/transits-main-page">
            <v-card-item>
              <template v-slot:prepend>
                <v-btn icon="mdi-cog-outline" variant="text"></v-btn>
              </template>
              <v-card-title class="text-body-1">Транзиты</v-card-title>
            </v-card-item>
          </v-card>
        </a>

        <a class="cursor-pointer">
          <v-card variant="plain" class="mr-6" to="/base-of-knowledge">
            <v-card-item>
              <template v-slot:prepend>
                <v-btn icon="mdi-library-outline" variant="text"></v-btn>
              </template>
              <v-card-title class="text-body-1">База знаний</v-card-title>
            </v-card-item>
          </v-card>
        </a>

        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-card v-bind="props" variant="tonal" color="deep-purple-lighten-2">
              <v-card-item>
                <template v-slot:prepend>
                  <v-icon>mdi-human-male</v-icon>
                </template>
                <v-card-title class="ml-1">
                  Войти
                </v-card-title>
                <template v-slot:append>
                  <v-icon>mdi-arrow-down-thin</v-icon>
                </template>
              </v-card-item>
            </v-card>
          </template>
          <v-list>
            <v-list-item v-for="list in menuList" :key="list.title">
              <v-list-item-title>{{ list.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>

      <!-- Up here ends second app-bar for middle and up screens
       and down here we start to create this for a mobile version BUT
       BUT we do it in footer for mobile version, so check FooterBar
       in layouts -->

    </v-app-bar>
  </v-container>
</template>

<script setup>
const menuList = [
  { title: "Мои данные" },
  { title: "Расчёты" },
  { title: "Расшифровки" },
  { title: "Покупки" },
  { title: "Выйти" },
];
</script>

<style scoped>
.sky-violet {
  background: rgba(119, 89, 202, 1);
}
</style>
