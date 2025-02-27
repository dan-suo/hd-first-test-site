<template>
  <v-container fluid>
    <v-form ref="form" @submit.prevent="submitForm" class="d-flex">
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="formData.birthDate"
            placeholder="дд.мм.гггг"
            label="Дата рождения"
            required
            v-mask="'##.##.####'"
            append-inner-icon="mdi-calendar"
          ></v-text-field>
        </v-col>

        <v-col cols="3" class="d-flex">
          <v-text-field
            v-model="formData.birthHour"
            placeholder="ЧЧ"
            label="Час рожд."
            required
            type="number"
            min="0"
            max="23"
            v-mask="'##'"
            append-inner-icon="mdi-clock"
          ></v-text-field>
          <v-text-field
            v-model="formData.birthMinute"
            placeholder="MM"
            label="Минута рожд."
            required
            type="number"
            min="0"
            max="59"
            append-inner-icon="mdi-clock-time-four-outline"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-autocomplete
            v-model="formData.birthCity"
            :items="cityList"
            label="Место рождения"
            append-inner-icon="mdi-map-marker"
            required
          ></v-autocomplete>
        </v-col>
        <v-col cols="2">
          <v-btn-toggle v-model="formData.gender" mandatory>
            <v-btn value="male" color="primary">Муж</v-btn>
            <v-btn value="female" color="pink">Жен</v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col cols="4" class="mt-n6">
          <v-text-field
            v-model="formData.name"
            label="Ваше имя"
            required
            append-inner-icon="mdi-account"
            type="text"
          ></v-text-field>
        </v-col>
        <v-col cols="8"></v-col>

        <v-col cols="3" class="mt-n9">
          <v-btn type="submit" color="deep-orange-lighten-1" class="mt-4" size="large" @click="toggleMemCat"
            >Рассчитать рейв-карту</v-btn
          >
        </v-col>
        <v-col cols="9"></v-col>
        <v-col cols="3" v-if="memCatVisibility" class="mt-n7">
            <v-img src="@/assets/MemCat1.jpg" class="mt-10 d-flex justify-start"></v-img>
            <v-sheet class="text-caption text-grey-darken-1 d-flex justify-center">Нажми расчёт ещё раз, я не должен тут быть</v-sheet>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  birthDate: "",
  birthHour: "",
  birthMinute: "",
  birthCity: "",
  gender: "male",
});

const cityList = ref(["Лондон", "Сиэтл", "Париж", "Киев", "Минск", "Варшава"]);

const submitForm = () => {
  console.log("Отправляем данные:", formData.value);
};

const memCatVisibility = ref(false);

const toggleMemCat = () => {
  memCatVisibility.value = !memCatVisibility.value;
};
</script>
