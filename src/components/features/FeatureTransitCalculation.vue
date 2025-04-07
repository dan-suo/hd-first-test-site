<template>
  <v-container class="container-of-content mt-n5">
    <v-row justify="center" class="">
      <v-col cols="10">
        <v-card-title class="text-body-1 montserrat"
          >Для расчёта транзита введите дату и время в поле ниже и нажмите
          "рассчитать"</v-card-title
        >
        <v-text-field
          variant="solo-filled"
          v-model="inputDate"
          label="Введите дату транзита в UTC"
          type="datetime-local"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2" class="d-flex align-center">
        <v-btn color="primary" size="large" @click="calculateTransit"
          >Рассчитать</v-btn
        >
      </v-col>
    </v-row>
    <v-row justify="center" v-if="transitData.length && tablesVisibility">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="text-h5"
            >Транзит (на момент указанной даты)</v-card-title
          >
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>Планета</th>
                  <th>Градусы</th>
                  <th>Ворота</th>
                  <th>Линия</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in transitData"
                  :key="'transit-' + index"
                >
                  <td>{{ item.planet }}</td>
                  <td>{{ item.degree }}</td>
                  <td>{{ item.gate }}</td>
                  <td>{{ item.line }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align-items-start mt-n3 montserrat">
      <v-col cols="2">
        <PlanetsColumnForRaveCard
          title="Транзит"
          :data="transitData"
          color="black"
          align="right"
        ></PlanetsColumnForRaveCard>
      </v-col>
      <v-col cols="5" v-show="isRaveCardVisible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 600"
          xmlns:bx="https://boxy-svg.com"
          width="620"
          height="700"
        >
          <defs>
            <linearGradient
              id="black-red-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="50%" style="stop-color: black; stop-opacity: 1" />
              <stop offset="50%" style="stop-color: red; stop-opacity: 1" />
            </linearGradient>
          </defs>
          <path
            style="
              stroke: rgb(0, 0, 0);
              transform-origin: 350.38px 77.136px;
              fill: rgb(250, 250, 250);
            "
            d="M 350.769 21.496 C 393.817 21.496 420.722 67.86 399.197 104.955 C 377.674 142.047 323.862 142.047 302.342 104.955 C 291.691 86.608 292.443 63.837 304.275 46.222"
            transform="matrix(-0.882947, -0.469472, 0.469472, -0.882947, 0, -0.000011)"
          ></path>
          <path
            d="M 349.652 115.497 L 633.343 518.111 L 65.96 518.111 L 349.652 115.497 Z"
            bx:shape="triangle 65.96 115.497 567.383 402.614 0.5 0 1@1e0e3147"
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
          ></path>
          <path
            d="M 339.627 15.67 Q 350.001 -4.391 360.374 15.67 L 379.525 52.704 Q 389.899 72.765 369.152 72.765 L 330.849 72.765 Q 310.102 72.765 320.476 52.704 Z"
            bx:shape="triangle 310.102 -4.391 79.797 77.156 0.5 0.26 1@cac55dd3"
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 254, 254)"
            id="center-head"
          ></path>
          <path
            d="M -367.393 -141.633 Q -349.998 -172.5 -332.604 -141.633 L -320.381 -119.943 Q -302.987 -89.076 -337.776 -89.076 L -362.221 -89.076 Q -397.01 -89.076 -379.616 -119.943 Z"
            bx:shape="triangle -397.01 -172.5 94.023 83.424 0.5 0.37 1@d3b38079"
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            transform="matrix(-1, 0, 0, -1, 0, 0)"
            id="center-adjna"
          ></path>
          <rect
            x="295.152"
            y="172.121"
            width="109.697"
            height="65.176"
            rx="16"
            ry="16"
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            id="center-throat"
          ></rect>
          <rect
            x="291.315"
            y="445.874"
            width="117.369"
            height="63.97"
            rx="9"
            ry="9"
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            id="center-root"
          ></rect>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            transform="matrix(1.190438, 0, 0, 1.066121, -826.748003, -154.597705)"
            cx="988.5"
            cy="509.5"
            r="38.5"
            id="center-sacral"
          ></circle>
          <rect
            x="-381.5"
            y="-379.88"
            width="61.311"
            height="62.947"
            rx="2"
            ry="2"
            style="
              stroke: rgb(0, 0, 0);
              transform-box: fill-box;
              transform-origin: 50% 50%;
              fill: rgb(255, 255, 255);
            "
            transform="matrix(0.719339, -0.694659, 0.694659, 0.719339, 700.844505, 638.961057)"
            id="center-g"
          ></rect>
          <path
            d="M 291.162 510.369 Q 309.511 481.991 327.86 510.369 L 356.695 554.964 Q 375.044 583.342 338.346 583.342 L 280.676 583.342 Q 243.978 583.342 262.327 554.964 Z"
            bx:shape="triangle 243.978 481.991 131.066 101.351 0.5 0.28 1@17b3337f"
            style="
              stroke: rgb(0, 0, 0);
              fill: rgb(255, 254, 254);
              transform-box: fill-box;
              transform-origin: 50% 50%;
            "
            transform="matrix(0.838671, -0.544639, 0.544639, 0.83867, -84.668434, -127.528382)"
            id="center-spleen"
          ></path>
          <path
            d="M 369.101 589.326 Q 384.885 553.809 400.668 589.326 L 425.47 645.14 Q 441.253 680.657 409.687 680.657 L 360.082 680.657 Q 328.516 680.657 344.299 645.14 Z"
            bx:shape="triangle 328.516 553.809 112.737 126.848 0.5 0.28 1@b9c431d5"
            style="
              stroke: rgb(0, 0, 0);
              fill: rgb(255, 255, 255);
              transform-box: fill-box;
              transform-origin: 50% 50%;
            "
            transform="matrix(0.309018, -0.951056, 0.951056, 0.309018, 89.146104, -201.000025)"
            id="center-emotional"
          ></path>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            transform="matrix(1.032961, 0, 0, 0.90384, -699.972107, -92.482925)"
            cx="1081.5"
            cy="477.5"
            r="25.5"
            id="center-ego"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 71.827499, -33.476578)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-64"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 92.320625, -33.010735)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-61"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 112.503372, -32.700233)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-63"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 69.964348, 6.768255)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-47"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 92.010109, 6.768254)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-24"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 113.124382, 7.078759)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-4"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 78.037437, 31.919064)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-17"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 104.430267, 31.919064)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-11"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 91.699615, 50.859798)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-43"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 69.34333, 88.120255)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-62"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 90.457596, 88.120255)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-23"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 111.571854, 88.430756)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-56"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 48.229073, 101.057922)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-16"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 48.85009, 126.829742)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-20"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 69.964355, 132.418808)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-31"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 91.078606, 132.142822)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-8"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 111.571861, 131.832321)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-33"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 132.065109, 93.640335)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-35"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 132.065109, 112.891571)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-12"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 132.37561, 132.142822)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-45"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 76.174416, 181.064423)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-7"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 91.389114, 167.712753)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-1"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 106.293282, 181.443924)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-13"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 119.95546, 197.279617)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-25"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 106.293289, 210.941772)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-46"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 91.699615, 224.914459)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-2"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 77.726952, 211.56279)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-15"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 63.443756, 196.348099)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-10"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 146.358337, 237.334961)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-51"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 151.003052, 255.19928)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-26"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 166.366364, 233.7621)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-21"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 170.653778, 251.626419)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-40"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 91.603624, 265.263952)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-14"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 70.3761, 270.118322)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-5"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 114.527751, 271.42771)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-29"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 125.543719, 293.846869)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-59"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 115.302203, 315.699164)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-9"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 95.354059, 322.250098)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-3"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 75.703333, 318.76493)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-42"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 61.056718, 304.946326)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-27"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 178.156815, 318.478577)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-6"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 209.598038, 313.833862)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-37"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 233.893524, 310.618286)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-22"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 256.402527, 309.546417)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-36"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 199.951279, 339.915771)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-49"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 216.743744, 354.564514)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-55"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 233.536224, 369.927826)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-30"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 13.805048, 322.766022)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-50"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, -7.63214, 307.759979)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-44"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, -27.282909, 299.542389)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-57"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, -47.290939, 291.682098)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-48"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, -7.632159, 338.843903)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-32"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, -25.853748, 349.9198)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-28"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, -44.789936, 361.352966)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-18"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 71.685432, 362.424805)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-53"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 92.765335, 362.424805)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-60"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 113.845245, 362.782104)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-52"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 44.531685, 365.640411)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-54"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 44.888966, 384.219299)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-38"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 45.60355, 402.798218)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-58"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 138.855301, 365.283112)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-19"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 138.855316, 384.219299)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-39"
          ></circle>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 138.498016, 403.155487)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-41"
          ></circle>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 218.964981, 44.000732)"
            id="gate-text-64"
          >
            64
            <tspan x="327.29998779296875" dy="1em">​</tspan>
            <tspan x="327.29998779296875" dy="1em">​</tspan>
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 239.938446, 44.859657)"
            id="gate-text-61"
          >
            61
            <tspan x="327.29998779296875" dy="1em">​</tspan>
            <tspan x="327.29998779296875" dy="1em">​</tspan>
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="473.741"
            y="74.104"
          ></text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 259.964508, 44.859657)"
            id="gate-text-63"
          >
            63
            <tspan x="327.29998779296875" dy="1em">​</tspan>
            <tspan x="327.29998779296875" dy="1em">​</tspan>
            <tspan x="327.29998779296875" dy="1em">​</tspan>
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 217.027252, 83.990593)"
            id="gate-text-47"
          >
            47
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 239.419418, 83.990593)"
            id="gate-text-24"
          >
            24
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 262.903931, 84.263664)"
            id="gate-text-4"
          >
            4
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 224.946457, 109.265228)"
          >
            17
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 238.873276, 128.380493)"
            id="gate-text-43"
          >
            43
            <tspan x="327.29998779296875" dy="1em">​</tspan>
            <tspan x="327.29998779296875" dy="1em">​</tspan>
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 251.707809, 109.538307)"
            id="gate-text-11"
          >
            11
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 216.48111, 165.36702)"
          >
            62
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 238.054062, 165.640091)"
          >
            23
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 259.080841, 166.186249)"
          >
            56
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 279.561493, 171.313995)"
          >
            35
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 279.01532, 190.156174)"
          >
            12
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 279.834564, 209.817612)"
          >
            45
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 195.181244, 178.413971)"
          >
            16
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 196.273544, 204.219559)"
          >
            20
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 217.57341, 209.54454)"
          >
            31
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 240.784805, 209.817627)"
          >
            8
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 259.080872, 209.362488)"
          >
            33
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 241.057877, 244.998825)"
          >
            1
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 225.765671, 258.516052)"
          >
            7
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 253.892426, 258.652588)"
          >
            13
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 267.546173, 274.900574)"
          >
            25
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 253.619339, 288.28125)"
          >
            46
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 241.877106, 302.208069)"
          >
            2
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 224.946442, 289.100464)"
          >
            15
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 210.47345, 273.808258)"
          >
            10
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 293.761414, 314.648041)"
          >
            51
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 314.242035, 311.098053)"
          >
            21
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 298.403687, 332.67099)"
          >
            26
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 318.065094, 329.394104)"
          >
            40
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 219.759786, 347.615394)"
          >
            5
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 238.763021, 342.425178)"
          >
            14
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 261.970861, 348.543159)"
          >
            29
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 273.002478, 371.098061)"
          >
            59
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 265.139288, 392.99482)"
          >
            9
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 245.096273, 399.604684)"
          >
            3
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 223.031407, 395.942605)"
          >
            42
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 209.053883, 382.008706)"
          >
            27
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 327.622742, 395.993896)"
          >
            6
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 357.114868, 391.078583)"
          >
            37
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 381.145477, 388.074738)"
          >
            22
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 403.81073, 386.982422)"
          >
            36
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 347.011078, 417.293762)"
          >
            49
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 286.115295, 461.805054)"
          >
            39
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 363.941742, 432.039825)"
          >
            55
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 380.599335, 447.514069)"
          >
            30
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 285.842224, 442.871796)"
          >
            19
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 285.569153, 480.556152)"
          >
            41
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 261.265442, 440.141022)"
          >
            52
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 239.965576, 439.86795)"
          >
            60
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 218.938797, 439.86795)"
          >
            53
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 191.904343, 442.871765)"
          >
            54
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 192.177414, 461.713989)"
          >
            38
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 192.996643, 480.283081)"
          >
            58
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 102.062584, 438.836395)"
          >
            18
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 121.724007, 427.367218)"
          >
            28
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 139.473892, 416.444214)"
          >
            32
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 161.046844, 400.605865)"
          >
            50
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 139.473892, 385.040558)"
          >
            44
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 120.358627, 376.848328)"
          >
            57
          </text>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 99.604919, 368.929138)"
          >
            48
          </text>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="328.093 73.07 326.934 80.709 331.99 80.617 333.149 72.981"
            id="chanel-64"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="326.889 81.107 326.309 90.086 332.006 89.314 332.006 81.107"
            id="chanel-47"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="348.429 72.791 347.972 80.286 353.466 80.4 354.037 73.019"
            id="chanel-61"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(254, 254, 254)"
            points="347.964 80.334 347.634 88.973 353.663 88.924 353.475 80.67"
            id="chanel-24"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(250, 250, 250)"
            points="368.865 72.932 368.705 80.284 374.587 80.284 374.829 72.622"
            id="chanel-63"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 254, 254)"
            points="368.705 80.25 368.163 89.228 374.122 90.001 374.587 80.405"
            id="chanel-4"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(253, 253, 253)"
            points="330.614 138.122 325.965 153.629 331.647 155.674 335.09 145.449"
            id="chanel-17"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="325.995 153.458 322.812 171.96 330.641 172.133 331.759 155.792"
            id="chanel-62"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="346.333 156.214 346.029 164.141 354.444 164.24 354.139 156.313"
            id="chanel-43"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="346.01 164.042 345.915 171.97 354.947 172.069 354.472 164.24"
            id="chanel-23"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="370.535 136.077 376.204 154.978 370.535 157.499 365.963 144.358"
            id="chanel-11"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="376.159 154.88 376.761 172.19 369.984 172.265 370.36 157.374"
            id="chanel-56"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="325.779 237.273 326.212 252.752 333.999 252.184 333.566 237.273"
            id="chanel-31"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="326.189 252.752 327.183 267.947 335.136 260.988 333.999 252.326"
            id="chanel-7"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="345.57 237.412 345.873 242.566 353.908 242.717 354.211 237.26"
            id="chanel-8"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="345.794 242.366 345.36 251.339 349.411 247.564 351.052 247.613 354.235 250.849 353.946 242.758"
            id="chanel-1"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            points="367.972 237.397 367.837 248.425 374.479 248.669 374.75 237.274"
            id="chanel-33"
          ></polygon>
          <polygon
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 250, 250)"
            points="367.76 249.149 365.684 262.515 370.468 267.585 374.349 249.61"
            id="chanel-13"
          ></polygon>
          <path
            style="
              stroke: rgb(0, 0, 0);
              fill: rgb(255, 255, 255);
              transform-box: fill-box;
              transform-origin: 50% 50%;
            "
            d="M 399.128 233.858 C 400.659 234.641 423.19 276.918 422.467 276.189 L 412.383 278.165 C 415.449 278.465 396.479 238.256 391.925 237.809"
            transform="matrix(0.999391, 0.034899, -0.034899, 0.999391, 0.000001, 0.000001)"
            id="chanel-45"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            id="chanel-21"
            d="M 421.409 276.462 C 422.83 276.462 427.887 317.553 427.138 317.553 C 427.138 316.333 416.012 315.002 416.012 316.222 C 417.247 316.134 413.618 278.16 411.778 278.292 C 414.401 277.365 422.383 276.118 421.409 276.462 Z"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 404.978 206.151 C 404.502 207.578 459.979 302.863 460.392 301.623 L 453.048 304.294 C 452.31 304.663 403.613 217.015 404.645 216.499 L 404.978 206.151 Z"
            id="chanel-12"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 460.043 301.563 C 459.781 302.06 495.039 393.843 495.305 393.284 L 487.579 394.076 C 486.707 394.076 452.4 304.139 453.109 304.139 L 460.043 301.563 Z"
            id="chanel-22"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 404.21 186.16 L 489.392 297.708 L 479.927 301.764 L 404.733 195.363 L 404.21 186.16 Z"
            id="chanel-35"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 252, 252)"
            d="M 489.028 297.475 C 490.759 297.187 521.191 391.93 520.162 392.102 C 521.328 391.636 512.583 391.286 511.417 391.752 C 512.718 391.752 481.869 302.022 479.932 302.022 L 489.028 297.475 Z"
            id="chanel-36"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 440.681 349.551 C 442.433 349.551 459.018 371.784 457.157 371.784 C 457.484 372.111 452.389 374.559 452.194 374.364 C 452.973 374.169 438.615 354.187 437.306 354.514 C 438.413 354.514 441.092 349.551 440.681 349.551 Z"
            id="chanel-40"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 457.156 371.352 C 457.832 371.217 470.884 395.794 469.996 395.972 C 469.368 395.501 462.889 396.208 463.517 396.679 C 464.228 396.501 452.749 374.279 452.208 374.414 C 451.746 374.414 456.379 371.352 457.156 371.352 Z"
            id="chanel-37"
          ></path>
          <path
            style="
              stroke: rgb(0, 0, 0);
              fill: rgb(255, 255, 255);
              transform-box: fill-box;
              transform-origin: 50% 50%;
            "
            d="M 390.663 296.302 L 398.378 308.904 L 393.492 312.248 C 390.92 308.562 388.52 304.875 386.291 301.189 C 385.193 299.373 386.65 297.744 390.663 296.302 Z"
            transform="matrix(0.992546, -0.121869, 0.121869, 0.992546, 0, 0.000002)"
            id="chanel-25"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 398.854 308.08 L 404.426 318.875 L 399.289 322.271 L 394.501 312.085 L 398.854 308.08 Z"
            id="chanel-51"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 295.221 194.185 C 293.451 193.419 229.076 277.579 232.153 278.892 L 238.222 282.586 C 235.774 282.178 293.208 203.657 294.957 203.949 L 295.221 194.185 Z"
            id="chanel-16"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 231.738 278.398 L 207.711 373.622 L 215.308 374.682 L 238.098 282.284 L 231.738 278.398 Z"
            id="chanel-48"
          ></path>
          <circle
            style="stroke: rgb(0, 0, 0); fill: rgb(245, 245, 245)"
            transform="matrix(0.310504, 0, 0, 0.283736, 59.803193, 286.13941)"
            cx="833"
            cy="332.5"
            r="29"
            id="gate-34"
          ></circle>
          <text
            style="
              white-space: pre;
              fill: rgb(51, 51, 51);
              font-family: Arial, sans-serif;
              font-size: 28px;
            "
            x="327.3"
            y="60.587"
            transform="matrix(0.324878, 0, 0, 0.328, 207.388188, 363.406441)"
          >
            34
          </text>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 295.772 226.734 L 256.319 282.925 L 263.492 282.925 L 299.957 232.712 L 295.772 226.734 Z"
            id="chanel-20"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 254, 254)"
            d="M 262.894 282.925 L 310.717 284.718 L 306.532 288.006 L 308.089 291.813 L 262.448 289.883 L 262.894 282.925 Z"
            id="chanel-10"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 256.083 283.001 C 254.853 282.694 229.318 380.872 229.748 380.979 L 235.964 383.76 C 235.555 383.556 258.602 293.667 259.845 294.288 L 256.083 283.001 Z"
            id="chanel-57"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 256.246 282.838 L 263.116 282.838 L 262.625 290.199 C 263.345 289.719 309.173 370.939 308.588 371.329 L 305.48 378.362 C 305.668 377.423 260.092 293.218 259.845 294.451 L 256.246 282.838 Z"
            id="chanel-34"
          ></path>
          <path
            style="
              stroke: rgb(0, 0, 0);
              fill: rgb(255, 255, 255);
              paint-order: fill;
            "
            d="M 397.753 354.828 C 396.578 354.067 369.998 338.414 371.059 338.007 C 370.284 335.725 313.348 334.892 312.187 332.887 C 312.748 332.887 313.496 340.567 312.552 340.567 C 312.569 339.201 370.487 343.802 369.962 343.858 C 369.699 344.516 398.141 366.474 398.85 364.701 C 396.187 363.979 404.79 361.432 405.432 360.313 L 397.753 354.828 Z"
            id="chanel-26"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 311.801 332.783 L 251.976 390.577 L 258.523 393.737 L 312.704 340.008 L 311.801 332.783 Z"
            id="chanel-44"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 344.534 328.95 L 345.094 341.552 L 356.295 341.272 L 356.295 328.39 L 351.255 332.591 L 344.534 328.95 Z"
            id="chanel-2"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 345.114 341.175 L 345.114 348.335 C 344.902 347.486 356.358 347.168 356.57 348.017 L 356.411 341.175 C 356.623 338.417 345.326 338.417 345.114 341.175 Z"
            id="chanel-14"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 326.734 310.803 L 322.218 329.773 L 330.95 332.182 L 334.262 317.729 L 326.734 310.803 Z"
            id="chanel-15"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 322.076 329.752 L 320.16 357.27 L 327.301 352.982 L 330.96 332.432 L 322.076 329.752 Z"
            id="chanel-5"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 374.244 310.532 L 382.808 330.841 L 375.223 333.777 L 368.371 316.649 L 374.244 310.532 Z"
            id="chanel-46"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 382.563 330.771 L 382.563 359.446 L 375.553 354.348 L 374.916 333.702 L 382.563 330.771 Z"
            id="chanel-29"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 395.567 384.636 L 411.229 394.828 L 408.991 401.54 L 395.816 392.342 L 395.567 384.636 Z"
            id="chanel-59"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 425.651 404.178 L 411.475 395.019 L 409.164 401.735 L 421.953 409.522 C 420.926 409.114 424.624 403.771 425.651 404.178 Z"
            id="chanel-6"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 305.738 399.716 L 294.082 405.191 L 296.024 410.666 L 308.034 404.838 L 305.738 399.716 Z"
            id="chanel-27"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 284.369 409.076 L 294.082 405.191 L 296.024 410.666 L 286.311 414.728 C 286.773 415.287 284.903 410.419 284.369 409.076 Z"
            id="chanel-50"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 327.343 424.326 C 326.92 424.326 323.904 434.448 325.043 434.448 L 330.562 435.807 C 329.744 435.807 332.352 426.894 333.17 426.894 C 333.579 427.095 327.752 424.527 327.343 424.326 Z"
            id="chanel-42"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 324.709 433.995 L 323.954 445.628 L 329.997 445.628 L 330.45 435.807 L 324.709 433.995 Z"
            id="chanel-53"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 350.38 429.868 L 348.87 438.088 L 355.245 438.088 L 357.091 429.364 L 350.38 429.868 Z"
            id="chanel-3"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 348.905 437.946 L 347.616 445.856 L 354.519 445.856 L 355.255 438.139 L 348.905 437.946 Z"
            id="chanel-60"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 382.86 417.141 C 383.123 417.141 382.405 434.081 380.837 434.081 L 374.516 434.331 C 375.925 434.331 375.796 422.871 375.274 422.871 L 382.86 417.141 Z"
            id="chanel-9"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 381.04 434.165 C 381.259 434.603 380.36 447.092 379.77 445.912 L 373.579 445.753 C 373.156 446.388 374.267 435.117 374.69 434.482 L 381.04 434.165 Z"
            id="chanel-52"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 261.875 439.067 C 260.677 440.094 273.475 452.49 275.49 450.763 C 276.344 451.392 270.259 456.207 270.428 455.825 C 268.585 457.931 254.537 444.512 255.94 442.908 L 261.875 439.067 Z"
            id="chanel-32"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 275.08 451.335 L 291.281 456.084 L 291.281 463.121 L 270.254 456.26 L 275.08 451.335 Z"
            id="chanel-54"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 242.797 450.913 C 240.77 452.18 259.994 471.29 260.583 470.922 C 261.124 471.192 258.118 476.49 256.66 475.761 C 256.019 477.043 235.965 457.255 237.043 455.098 L 242.797 450.913 Z"
            id="chanel-28"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 260.607 471.19 C 261.33 472.329 291.766 478.087 291.195 477.2 C 290.427 477.2 291.06 482.351 291.517 482.351 C 292.661 485.32 257.652 479.155 256.422 475.912 C 257.619 476.111 261.051 471.264 260.607 471.19 Z"
            id="chanel-38"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 223.725 463.354 C 223.725 464.261 252.789 490.302 252.789 489.612 C 252.417 492.219 247.64 496.191 247.778 495.224 C 247.312 497.412 218.849 469.128 217.912 467.563 L 223.725 463.354 Z"
            id="chanel-18"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 252.658 489.601 C 254.395 489.218 292.266 493.866 291.146 494.209 C 290.476 494.432 291.019 501.66 291.418 501.527 C 291.418 502.14 247.372 496.167 247.372 495.7 C 246.107 494.074 251.393 487.975 252.658 489.601 Z"
            id="chanel-58"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 408.686 455.354 C 409.328 455.996 424.871 447.029 424.229 446.387 C 424.98 447.345 429.996 452.912 428.214 452.165 C 430.03 453.255 410.069 464.154 408.686 463.324 L 408.686 455.354 Z"
            id="chanel-19"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 424.458 446.551 C 424.958 446.051 444.58 437.302 444.08 437.802 C 444.913 438.635 450.038 443.259 449.205 442.426 C 449.923 441.995 429.774 451.485 428.832 452.05 L 424.458 446.551 Z"
            id="chanel-49"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 408.18 474.788 C 408.605 476.913 432.711 464.222 432.512 463.225 L 436.849 469.488 C 437.939 470.941 409.492 483.846 408.662 482.739 L 408.18 474.788 Z"
            id="chanel-39"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 432.733 463.423 L 460.282 452.499 L 466.565 458.009 C 466.565 458.759 436.793 470.87 436.793 469.609 L 432.733 463.423 Z"
            id="chanel-55"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 408.596 493.683 C 409.173 495.03 447.034 484.998 446.532 483.828 L 449.233 492.603 C 449.567 493.606 409.116 502.803 408.731 501.648 L 408.596 493.683 Z"
            id="chanel-41"
          ></path>
          <path
            style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255)"
            d="M 446.416 484.042 L 479.74 469.874 L 487.423 475.86 L 449.11 492.722 L 446.416 484.042 Z"
            id="chanel-30"
          ></path>
        </svg>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { getGateByDegree } from "@/services/nasaLibApiService";
import axios from "axios";
import PlanetsColumnForRaveCard from "../common/PlanetsColumnForRaveCard.vue";

const inputDate = ref(""); // Поле ввода даты транзита
const transitData = ref([]); // Данные транзита (только чёрный расчёт)
const tablesVisibility = ref(false);
const isRaveCardVisible = ref(false);
const transitGates = ref([]); // Ворота транзита

// Порядок планет для сортировки
const planetOrder = [
  "Sun",
  "Earth",
  "Rahu",
  "Ketu",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

// Цвета центров (можно оставить как в оригинале)
const centerColors = {
  "center-head": "#FFFACD",
  "center-adjna": "#6B8E23",
  "center-throat": "#4682B4",
  "center-root": "#FA8072",
  "center-sacral": "#FA8072",
  "center-g": "#FFD700",
  "center-spleen": "#6B8E23",
  "center-emotional": "#FA8072",
  "center-ego": "#FA8072",
};

onMounted(() => {
  if (transitData.value.length) {
    updateSvgColors();
  }
  document.querySelectorAll("text").forEach((textElement) => {
    const gateNumber = textElement.textContent.trim(); // Достаём текст из <text>

    // Проверяем, является ли текст числом от 1 до 64 (номера ворот)
    if (!isNaN(gateNumber) && gateNumber >= 1 && gateNumber <= 64) {
      textElement.id = `gate-text-${gateNumber}`; // Проставляем ID
    }
  });
});

const calculateTransit = async () => {
  isRaveCardVisible.value = true;

  if (!inputDate.value) {
    console.error("❌ Ошибка: дата не введена!");
    return;
  }

  const parsedDate = new Date(inputDate.value);
  if (isNaN(parsedDate)) {
    console.error("❌ Ошибка: введена некорректная дата!");
    return;
  }

  // Форматируем дату для сервера (только чёрный расчёт)
  const requestData = {
    date: {
      year: parsedDate.getUTCFullYear(),
      month: parsedDate.getUTCMonth() + 1,
      day: parsedDate.getUTCDate(),
      hours: parsedDate.getUTCHours(),
      minutes: parsedDate.getUTCMinutes(),
    },
  };

  try {
    console.log("📡 Отправляем запрос на сервер для расчёта транзита...");
    const response = await axios.post(
      "http://localhost:5000/api/astro",
      requestData
    );

    if (!Array.isArray(response.data) || response.data.length === 0) {
      console.error("❌ Пустой или некорректный ответ от сервера!");
      return;
    }

    console.log("✅ Данные транзита с сервера:", response.data);

    const transitDataArray = response.data.map((item) => {
      if (!item || typeof item !== "object" || item.degree === null) {
        console.warn("❌ Некорректные данные для планеты:", item);
        return {
          planet: item?.planet || "Unknown",
          degree: "N/A",
          gate: null,
          line: null,
        };
      }

      return {
        planet: item.planet,
        degree: parseFloat(item.degree).toFixed(2),
        ...getGateByDegree(parseFloat(item.degree)),
      };
    });

    // Сохраняем данные и сортируем
    transitData.value = transitDataArray.sort(
      (a, b) => planetOrder.indexOf(a.planet) - planetOrder.indexOf(b.planet)
    );

    await nextTick();
    console.log("📌 После nextTick:", transitData.value);

    updateGates();
    updateSvgColors();
    
  } catch (error) {
    console.error("❌ Ошибка запроса:", error);
  }
};

const updateGates = () => {
  if (!transitData.value.length) {
    console.warn("❌ Ошибка: данные для окраски SVG не получены!");
    return;
  }

  transitGates.value = transitData.value.map((entry) => String(entry.gate));
};


const updateSvgColors = () => {
  if (!transitGates.value.length) {
    console.warn("❌ Ошибка: данные для окраски SVG не получены!");
    return;
  }

  // Закрашиваем только чёрным
  document
    .querySelectorAll("[id^='gate-']:not([id^='gate-text']), [id^='chanel-']")
    .forEach((el) => {
      const gateNumber = el.id.replace(/(gate-|chanel-)/g, "");

      if (transitGates.value.includes(gateNumber)) {
        el.removeAttribute("fill");
        el.style.fill = "black";
      } else {
        el.removeAttribute("fill");
        el.style.fill = "white";
      }
    });

  document.querySelectorAll("[id^='gate-text-']").forEach((el) => {
    const gateNumber = el.id.replace("gate-text-", "");

    if (transitGates.value.includes(gateNumber)) {
      el.style.fill = "white"; // Если ворота закрашены, делаем текст белым
    } else {
      el.style.fill = "black";
    }
  });

  updateCenterColors();
};

const updateCenterColors = () => {
  document.querySelectorAll("[id^='center-']").forEach((el) => {
    const centerId = el.id;
    el.style.fill = centerColors[centerId] || "white";
  });
};
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
