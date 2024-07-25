<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Lightbulb" name="Skills" />
    <div class="flex flex-col gap-3">
      <CommonHeading>My Technical Experience/Skills.</CommonHeading>
      <CommonFramerWrapper :y="0" :x="200">
        <p class="font-poppins text-xl w-full text-primary max-sm:text-lg">
          Currently I am a fresher and I have a solid understand of HTML5, CSS3, JS, TS and React, Vue including
          responsive design principles. I specialize in building web applications and sites using Javascript,
          Typescript, React, Nextjs, Vue, Nuxt, Angular & Nest, Spring Boot.
        </p>
      </CommonFramerWrapper>
      <template v-for="(skill, idx) in skills" :key="skill.title">
        <SkillsList :delay="300 + idx * 100" :title="skill.title" :items="skill.data" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import skills from "@/data/skills";
</script>
