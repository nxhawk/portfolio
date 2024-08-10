<template>
  <div
    v-show="show"
    class="fixed z-[1000] bottom-6 right-6 rounded-full p-2 bg-slate-200/50 cursor-pointer hover:bg-slate-200"
    @click="handleToTop"
  >
    <CommonIcon :stroke-width="3" name="ArrowUp" :size="30" color="#3FA2F6" />
  </div>
</template>

<script setup lang="ts">
import { useShowScrollToTop } from "~/composables/useShowScrollToTop";

const { show } = useShowScrollToTop();

function handleToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
