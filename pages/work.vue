<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Briefcase" name="Education" />
    <div class="flex flex-col gap-3">
      <CommonHeading> My Education </CommonHeading>
    </div>
    <div class="flex flex-col w-full h-fit">
      <WorkRoad v-for="(w, idx) in work" :key="w.title" :work="w" :num="idx" />
    </div>
  </div>
</template>

<script setup lang="ts">
import work from "@/data/work";
</script>
