<template>
  <div
    v-show="show"
    class="fixed z-[1000] bottom-8 right-10 rounded-full p-2 bg-slate-200/50 cursor-pointer hover:bg-slate-200"
    @click="handleToTop"
  >
    <CommonIcon :stroke-width="3" name="ArrowUp" :size="30" color="#3FA2F6" />
  </div>
</template>

<script setup lang="ts">
import { useShowScrollToTop } from "~/composables/useShowScrollToTop";

const { show } = useShowScrollToTop();

function easeInOutCubic(t: number, b: number, c: number, d: number) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

function handleToTop() {
  try {
    const targetPosition = 0;
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (startPosition > 1500) {
      const distance = targetPosition - startPosition;
      const duration = 2000;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  } catch (error) {
    console.log(error);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>
