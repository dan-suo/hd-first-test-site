<template>
  <v-container>
    <v-sheet class="text-h5 text-indigo-darken-3 font-weight-bold montserrat"
      >Профили в Дизайне Человека</v-sheet
    >
    <!-- Слайдер с drag-прокруткой -->
    <div class="slider-wrapper mt-4">
      <div
        class="slider"
        v-dragscroll.x="true"
        ref="slider"
        @dragscrollstart="onDragStart"
        @dragscrollend="onDragEnd"
      >
        <div v-for="(profile, index) in profiles" :key="index" class="slide">
          <v-card class="profile-card pa-4 pt-8" :to="profile.route" elevation="2" hover variant="flat" color="grey-lighten-5">
            <v-img
              :src="profile.images"
              :alt="profile.title"
              height="100px"
              width="100px"
              cover
              class="profile-image mx-auto"
            ></v-img>

            <v-card-title class="text-center px-2 pt-3">
              <div>
                <div class="text-h6">{{ profile.title }}</div>
                <div class="text-subtitle-2">{{ profile.semiTitle }}</div>
              </div>
            </v-card-title>

            <v-card-text class="px-3 pb-3 text-caption text-center">
              {{ profile.description }}
            </v-card-text>

            <v-card-actions class="justify-center pb-3">
              <v-btn
                variant="outlined"
                size="small"
                color="indigo-darken-3"
                :to="profile.route"
              >
                Подробнее
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>

    <!-- Индикаторы для десктопов -->
    <div class="slider-indicators d-none d-md-flex">
      <v-btn
        v-for="n in totalSlideGroups"
        :key="n"
        icon
        :color="
          currentSlideGroup === n - 1 ? 'indigo-darken-3' : 'grey-lighten-1'
        "
        @click="scrollToGroup(n - 1)"
        size="x-small"
      ></v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useGatesStore } from "@/stores/gatesStore";
import { dragscroll } from "vue-dragscroll";

const gatesStore = useGatesStore();
const profiles = computed(() => gatesStore.profilesStorage);

const slider = ref(null);
const currentSlideGroup = ref(0);
const isDragging = ref(false);

const visibleSlides = computed(() => {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 960) return 2;
  if (window.innerWidth < 1280) return 3;
  return 3;
});

const totalSlideGroups = computed(() =>
  Math.ceil(profiles.value.length / visibleSlides.value)
);

const onDragStart = () => {
  isDragging.value = true;
};

const onDragEnd = () => {
  isDragging.value = false;
  updateCurrentSlideGroup();
};

const scrollToGroup = (groupIndex) => {
  if (slider.value) {
    const scrollPosition = slider.value.clientWidth * groupIndex;
    slider.value.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    currentSlideGroup.value = groupIndex;
  }
};

const updateCurrentSlideGroup = () => {
  if (slider.value && !isDragging.value) {
    const scrollPos = slider.value.scrollLeft;
    const slideWidth = slider.value.clientWidth;
    currentSlideGroup.value = Math.round(scrollPos / slideWidth);
  }
};

onMounted(() => {
  window.addEventListener("resize", updateCurrentSlideGroup);
  slider.value?.addEventListener("scroll", updateCurrentSlideGroup);
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
.slider-wrapper {
  position: relative;
  margin: 0 -12px;
}

.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 12px;
  gap: 16px;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}

.slider:active {
  cursor: grabbing;
}

.slide {
  flex: 0 0 calc(25% - 12px);
  scroll-snap-align: start;
  min-width: 280px;
}

.profile-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
}

.profile-image {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.slider-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

@media (max-width: 1280px) {
  .slide {
    flex: 0 0 calc(33.333% - 11px);
  }
}

@media (max-width: 960px) {
  .slide {
    flex: 0 0 calc(50% - 8px);
  }
}

@media (max-width: 600px) {
  .slide {
    flex: 0 0 calc(100% - 8px);
  }
}

.slider::-webkit-scrollbar {
  display: none;
}

.slider {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
