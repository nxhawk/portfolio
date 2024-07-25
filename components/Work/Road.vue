<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="w-full flex">
    <CommonFramerWrapper
      :y="-50"
      :x="0"
      :delay="400 + num * 200"
      class="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
    >
      {{ work.time }}
    </CommonFramerWrapper>
    <CommonFramerWrapper
      :y="-50"
      :x="0"
      :delay="400 + num * 200"
      class="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
    >
      <div class="text-2xl font-rubik max-sm:text-xl" v-html="work.title" />
      <p class="font-poppins text-base w-full text-primary max-sm:text-xs">
        {{ work.description }}
      </p>
    </CommonFramerWrapper>
  </div>
</template>

<script setup lang="ts">
import type { IWork } from "@/data/work";

const { work } = defineProps({
  work: {
    type: Object as () => IWork,
    required: true,
  },
  num: {
    type: Number,
    required: true,
  },
});
</script>
