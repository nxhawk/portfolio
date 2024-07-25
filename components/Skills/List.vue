<template>
  <CommonFramerWrapper :y="100" :delay="props.delay" class="mt-2 md:mt-4 block">
    <h1 class="gap-2 text-2xl font-poppinsBold text-primary font-semibold flex text_underline relative max-sm:text-xl">
      {{ props.title }}
    </h1>
    <div class="w-full h-fit flex flex-wrap pt-4 md:gap-x-10 gap-x-8 md:gap-y-5 gap-y-2">
      <SkillsFooter :items="props.items" />
    </div>
  </CommonFramerWrapper>
</template>

<script setup lang="ts">
import type { ISkill } from "@/data/skills";

const props = defineProps({
  delay: {
    type: Number,
    required: true,
  },
  items: {
    type: Array<ISkill>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
