<template>
  <div class="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
    <CommonBadge icon="Layers" name="Projects" />
    <div class="flex flex-col gap-3">
      <CommonHeading> My Projects </CommonHeading>
      <CommonFramerWrapper :x="200" :y="0">
        <p class="font-poppins text-xl w-full text-primary max-sm:text-lg">
          I love to Build Cool Projects. Here, you'll find a curated collection of my creative endeavors and technical
          projects. Each piece represents a journey of innovation, problem-solving, and continuous learning. Feel free
          to explore this showcase of my passion and expertise in action.
        </p>
      </CommonFramerWrapper>
    </div>

    <div class="w-full grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-3">
      <ProjectsCard v-for="(project, idx) in projects" :key="project.title" :num="idx" :project="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from "@/data/projects";
</script>
