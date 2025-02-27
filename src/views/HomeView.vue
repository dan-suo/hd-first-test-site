<template>
  <v-container v-if="$vuetify.display.mdAndUp" fluid class="">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="4" class="d-flex justify-center align-center text-h6"
        ><StarsAnimation></StarsAnimation
      ></v-col>
      <v-col cols="4" class="d-flex justify-center text-h2 montserrat"
        ><v-row
          ><v-col cols="12" class="d-flex justify-center montserrat"
            >Дизайн Человека</v-col
          ><v-col cols="12" class="d-flex justify-center text-h5 montserrat"
            >Узнай себя лучше</v-col
          >
          <v-col cols="12" class="d-flex justify-center"
            ><v-btn
              color="deep-orange-lighten-1"
              size="x-large"
              class="text-body-2"
              to="/rave-chart-calculation"
              ><div class="">Рассчитать свою рейв-карту</div></v-btn
            ></v-col
          ></v-row
        ></v-col
      >
      <v-col
        cols="4"
        class="d-flex justify-center align-center text-h6 montserrat"
        ><StarsAnimation></StarsAnimation
      ></v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center"></v-row>
  </v-container>

  <!-- There we use custom divider between start page
   and lower content of homepage -->

  <div class="wave-container mt-16 mb-n16">
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style="stop-color: rgba(55, 38, 167, 0.6); stop-opacity: 1"
          />
          <stop offset="100%" style="stop-color: white; stop-opacity: 1" />
        </linearGradient>
      </defs>
      <path
        transform="scale(1, -1) translate(0, -320)"
        fill="url(#gradient)"
        d="M0,220 
       C250,270 500,170 750,200 
       C1000,230 1250,250 1440,180 
       L1440,320 L0,320Z"
      ></path>
    </svg>
  </div>

  <v-container class="raise-container-1">
    <v-row class="d-flex justify-center align-center">
      <v-col class="d-flex justify-center align-center montserrat" cols="4"
        ><CardWhatIsHumDes></CardWhatIsHumDes
      ></v-col>
      <v-col class="d-flex justify-center align-center montserrat" cols="4">
        <v-img
          rounded="sm"
          src="@/assets/brain-space-img.jpg"
          max-height="500"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import StarsAnimation from "../components/features/StarsAnimation.vue";
import CardWhatIsHumDes from "@/components/common/cards/CardWhatIsHumDes.vue";
</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}

.wave-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 30%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 30%
  );
}
А svg {
  width: 100%;
  height: auto;
}

.raise-container-1 {
  position: relative;
  top: -150px;
}
</style>
