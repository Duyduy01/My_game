<template>
  <div
    ref="cloud"
    class="cloud rainy relative rounded-full w-80 h-24 z-50 before:absolute before:-top-12 before:left-10 before:rounded-full before:w-28 before:h-28 after:absolute after:inset-0 after:rounded-full"
    :style="{
      '--bg-color': color,
    }"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#484f59",
  },
  colorRainDrop: {
    type: String,
    default: "#05a2eb",
  },
  timeIn: {
    type: Number,
    default: 20,
  },
  timeOut: {
    type: Number,
    default: 2000,
  },
  duration: {
    type: Number,
    default: 0.5,
  },
});

const cloud = ref<HTMLElement | null>(null);

const rain = () => {
  const raindrop = document.createElement("div");
  const left = 10 + Math.floor(Math.random() * 290);
  const widthRainDrop = Math.random() * 4;
  const heightRainDrop = Math.random() * 50;
  const duration = Math.random() * props.duration;

  cloud.value.appendChild(raindrop);
  raindrop.classList.add("raindrop");

  raindrop.style.setProperty("--color", props.colorRainDrop);
  raindrop.style.left = left + "px";
  raindrop.style.width = 0.5 + widthRainDrop + "px";
  raindrop.style.height = 0.5 + heightRainDrop + "px";
  raindrop.style.animationDuration = 1 + duration + "s";

  // setTimeout(() => {
  //   cloud.value.removeChild(raindrop);
  // }, props.timeOut);
};

onMounted(() => {
  rain();
  // setInterval(() => {
  //   rain();
  // }, props.timeIn);
});
</script>

<style scoped>
.cloud::before,
.cloud::after {
  background-color: var(--bg-color);
}
.cloud::before {
  box-shadow: 90px 0 0 30px var(--bg-color);
}
</style>
