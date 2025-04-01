<template>
  <v-container>
    <v-sheet class="text-h5 text-indigo-darken-3 font-weight-bold montserrat"
      >Типы в Дизайне Человека</v-sheet
    >
    <v-card
      variant="outlined"
      color="indigo-lighten-4"
      class="mt-4 pa-3"
      rounded="lg"
    >
      <v-card-item>
        <v-card-text class="text-indigo-darken-4"
          >"Тип личности" в ДЧ было бы вернее называть "тип энергетической
          механики", но по понятным причинам (никто не привык к таким названиям)
          оставили в таком виде. Тип здесь - это как классификация устройства.
          Это база того, чем и кем человек является на самом основном -
          энергетическом уровне, как устроена его химия тела, что движит его
          психикой и так далее. Разные типы - это как разные механизмы. Вот есть
          яхта, есть самолёт, есть автомобиль.
          <br />
          <br />
          <p>
            Каждый из них полезен и уместен в своём деле. Но лодка или авто
            ничего не смогут в небе, а самолёт не особо полезен на улочках
            города или на воде. Вот подобное разделение под собой и
            подразумевают "типы личости" в Дизайне Человека. Подробнее дальше.
          </p>
        </v-card-text>
      </v-card-item>
    </v-card>
    <v-sheet class="mt-4"
      >Ваш тип можно понять, посмотрев на "определённые" центры и каналы в вашей
      карте. Именно этим обусловлена наиболее "здоровая" и подходящая для вас
      стратегия движения через жизнь, стратегия взаимодействия с окружающими и
      миром в целом. Узнать свой тип - это как узнать в какой колее вы
      предназначены двигаться, предназначены по базовому природному признаку,
      который вы не выбираете, а получаете по факту рождения тем или той, кем вы
      являетесь.
    </v-sheet>
    <v-sheet
      class="text-h6 text-indigo-darken-3 font-weight-bold montserrat opacity-80 mt-4"
      >Вкратце о роли каждого типа</v-sheet
    >
    <v-container fluid>
      <v-row class="mt-4" dense>
        <v-col
          v-for="item in hdDataStore.typesStorage"
          :key="item.title"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
          <v-card variant="flat" class="h-100 d-flex flex-column pa-4" hover>
            <v-img height="150px" :src="item.image" class="align-end"> </v-img>
            <v-card-title
              class="text-center text-wrap"
              :class="{ 'text-body-1 montserrat': item.title.length > 15 }"
            >
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle class="px-4 pt-2">
              {{ item.percentage }} населения
            </v-card-subtitle>

            <v-card-text class="px-4 pb-2 flex-grow-1">
              {{ truncateDescription(item.description, 100) }}
            </v-card-text>

            <v-card-actions class="px-4 pb-4">
              <v-btn
                color="indigo-darken-3"
                variant="outlined"
                block
                :to="item.route"
              >
                Подробнее
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useGatesStore } from "@/stores/gatesStore";

const route = useRoute();
const hdDataStore = useGatesStore();

// Функция для обрезки длинного описания
const truncateDescription = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const typeData = computed(() => {
  return (
    hdDataStore.typesStorage.find(
      (type) => type.route === `/base-of-knowledge/types/${route.params.id}`
    ) || {}
  );
});
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
.text-wrap {
  word-break: break-word;
  white-space: normal;
  line-height: 1.2;
}
</style>
