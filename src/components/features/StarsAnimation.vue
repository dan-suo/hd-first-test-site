<template>
  <canvas
    ref="canvasRef"
    class="star-canvas"
    :width="width"
    :height="height"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";

const props = defineProps({
  width: { type: Number, default: 500 },
  height: { type: Number, default: 250 },
});

const canvasRef = ref(null);
let ctx,
  stars = [],
  mouse = { x: null, y: null };

const numStars = ref(120);

// Создаём звёзды
function createStars() {
  stars = Array.from({ length: numStars.value }, () => ({
    x: Math.random() * canvasRef.value.width,
    y: Math.random() * canvasRef.value.height,
    radius: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
  }));
}

// Рисуем звёзды
function drawStars() {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  ctx.fillStyle = "#FFD700";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  connectStars();
}

// Двигаем звёзды
function updateStars() {
  stars.forEach((star) => {
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < 0 || star.x > canvasRef.value.width) star.vx *= -1;
    if (star.y < 0 || star.y > canvasRef.value.height) star.vy *= -1;
  });
}

// Линии между звёздами
function connectStars() {
  ctx.strokeStyle = "rgba(255, 215, 0, 0.5)";
  stars.forEach((star) => {
    const dx = star.x - mouse.x;
    const dy = star.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });
}

// Обновляем canvas
function animate() {
  updateStars();
  drawStars();
  requestAnimationFrame(animate);
}

// Обновляем координаты курсора
function updateMouse(event) {
  mouse.x = event.clientX - canvasRef.value.getBoundingClientRect().left;
  mouse.y = event.clientY - canvasRef.value.getBoundingClientRect().top;
}

onMounted(() => {
  const canvas = canvasRef.value;
  ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 250;
  createStars();
  animate();
  window.addEventListener("mousemove", updateMouse);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateMouse);
});

watch(() => [props.width, props.height], createStars);
</script>

<style scoped>
.star-canvas {
  display: block;
  background: transparent;
}
</style>
