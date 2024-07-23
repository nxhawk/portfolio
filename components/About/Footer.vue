<template>
  <div v-for="item in items" :key="item.name">
    <h1 class="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
      <CommonIcon :name="item.icon" :stroke-width="2" :class="item.class" />
      {{ item.name }}
    </h1>
    <div class="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
      <CommonIcon name="Circle" :stroke-width="2" class="h-3 w-3" />
      {{ item.answer }}
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { name: "Language", answer: "English UK", icon: "Languages", class: "h-8 w-8" },
  { name: "Nationality", answer: "Vietname", icon: "Globe2", class: "h-8 w-8" },
  { name: "Gender", answer: "Male", icon: "Dna", class: "h-8 w-8" },
];
</script>
