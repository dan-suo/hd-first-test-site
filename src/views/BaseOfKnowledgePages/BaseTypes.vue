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
    <v-sheet class="text-h6 text-indigo-darken-3 font-weight-bold montserrat opacity-80 mt-4"
      >Вкратце о роли каждого типа</v-sheet
    >
    <div>
        <v-card variant="flat">
            <v-img height="150px"></v-img>
        </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { useGatesStore } from "@/stores/gatesStore";

const hdDataStore = useGatesStore();
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
