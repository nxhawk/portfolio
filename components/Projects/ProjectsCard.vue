<template>
  <CommonFramerWrapper :y="0" :scale="0.15" :duration="150" :delay="(num / 4) * 1000">
    <Card class="w-full h-full">
      <CardHeader>
        <CardTitle>{{ project.title }}</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-base font-poppins">{{ project.description }}</p>
        <div class="flex flex-wrap gap-1 mt-2">
          <ProjectsChip v-for="tag in project.tags" :key="tag" :tag="tag" />
        </div>
      </CardContent>
      <CardFooter class="flex justify-center">
        <NuxtLink
          :href="project.link"
          target="blank"
          :class="cn(buttonVariants({ variant: 'default', size: 'lg' }), 'flex items-center gap-2')"
        >
          Visit Project
          <CommonIcon name="ArrowUpRight" :stroke-width="2" />
        </NuxtLink>
      </CardFooter>
    </Card>
  </CommonFramerWrapper>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import type { IProject } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const { project, num } = defineProps({
  project: {
    type: Object as () => IProject,
    required: true,
  },
  num: {
    type: Number,
    required: true,
  },
});
</script>
