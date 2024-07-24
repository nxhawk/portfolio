<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Lightbulb" name="My skills" />
    <div class="flex flex-col gap-3">
      <CommonHeading>My Technical Experience/Skills.</CommonHeading>
      <CommonFramerWrapper :y="0" :x="200">
        <p class="font-poppins text-xl w-full text-primary max-sm:text-lg">
          Currently I am a fresher and I have a solid understand of HTML5, CSS3, JS, TS and React, Vue including
          responsive design principles. I specialize in building web applications and sites using Javascript,
          Typescript, React, Nextjs, Vue, Nuxt, Angular & Nest, Spring Boot.
        </p>
      </CommonFramerWrapper>
      <CommonFramerWrapper :y="100" :delay="300" class="block">
        <h1
          class="gap-2 text-2xl font-poppinsBold text-primary font-semibold flex text_underline relative max-sm:text-xl"
        >
          Programming Languages
        </h1>
        <div class="w-full h-fit flex flex-wrap pt-4 gap-10 gap-y-5">
          <SkillsFooter :items="language" />
        </div>
      </CommonFramerWrapper>
      <CommonFramerWrapper :y="100" :delay="400" class="mt-2 md:mt-4 block">
        <h1
          class="gap-2 text-2xl font-poppinsBold text-primary font-semibold flex text_underline relative max-sm:text-xl"
        >
          Framework/Libraries Frontend
        </h1>
        <div class="w-full h-fit flex flex-wrap pt-4 gap-10 gap-y-5">
          <SkillsFooter :items="frontend" />
        </div>
      </CommonFramerWrapper>
      <CommonFramerWrapper :y="100" :delay="500" class="mt-2 md:mt-4 block">
        <h1
          class="gap-2 text-2xl font-poppinsBold text-primary font-semibold flex text_underline relative max-sm:text-xl"
        >
          Framework/Libraries Backend
        </h1>
        <div class="w-full h-fit flex flex-wrap pt-4 gap-10 gap-y-5">
          <SkillsFooter :items="backend" />
        </div>
      </CommonFramerWrapper>
      <CommonFramerWrapper :y="100" :delay="600" class="mt-2 md:mt-4 block">
        <h1
          class="gap-2 text-2xl font-poppinsBold text-primary font-semibold flex text_underline relative max-sm:text-xl"
        >
          Database
        </h1>
        <div class="w-full h-fit flex flex-wrap pt-4 gap-10 gap-y-5">
          <SkillsFooter :items="database" />
        </div>
      </CommonFramerWrapper>
      <CommonFramerWrapper :y="100" :delay="700" class="mt-2 md:mt-4 block">
        <h1
          class="gap-2 text-2xl font-poppinsBold text-primary font-semibold flex text_underline relative max-sm:text-xl"
        >
          Tools
        </h1>
        <div class="w-full h-fit flex flex-wrap pt-4 gap-10 gap-y-5">
          <SkillsFooter :items="tools" />
        </div>
      </CommonFramerWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
const language = [
  { alt: "js", img: "/skills/javascript-original.svg" },
  { alt: "ts", img: "/skills/typescript-original.svg" },
  { alt: "cplus", img: "/skills/cplusplus-original.svg" },
  { alt: "java", img: "/skills/java-original.svg" },
  { alt: "python", img: "/skills/python-original.svg" },
  { alt: "golang", img: "/skills/brand-golang.svg" },
];
const frontend = [
  { alt: "html", img: "/skills/frontend/html5-original.svg" },
  { alt: "css", img: "/skills/frontend/css3-original.svg" },
  { alt: "vite", img: "/skills/frontend/vitejsdev-icon.svg" },
  { alt: "react", img: "/skills/frontend/react.png" },
  { alt: "next", img: "/skills/frontend/nextjs.jpg" },
  { alt: "vuejs", img: "/skills/frontend/vue.svg" },
  { alt: "nuxtjs", img: "/skills/frontend/nuxtjs.svg" },
  { alt: "angular", img: "/skills/frontend/angular.svg" },
  { alt: "flutter", img: "/skills/frontend/flutter.svg" },
];
const backend = [
  { alt: "node", img: "/skills/backend/nodejs-icon.svg" },
  { alt: "nest", img: "/skills/backend/nestjs-icon.svg" },
  { alt: "spring", img: "/skills/backend/springio-icon.svg" },
  { alt: "django", img: "/skills/backend/djangoproject-icon.svg" },
  { alt: "flask", img: "/skills/backend/pocoo_flask-icon.svg" },
];
const database = [
  { alt: "mysql", img: "/skills/database/mysql-icon.svg" },
  { alt: "postgresql", img: "/skills/database/postgresql-icon.svg" },
  { alt: "mongodb", img: "/skills/database/mongodb-icon.svg" },
  { alt: "sqlite", img: "/skills/database/sqlite-icon.svg" },
  { alt: "redis", img: "/skills/database/redis-icon.svg" },
];
const tools = [
  { alt: "git", img: "/skills/tools/git-scm-icon.svg" },
  { alt: "visual studio code", img: "/skills/tools/visualstudio_code-icon.svg" },
  { alt: "jetbrains", img: "/skills/tools/jetbrains-icon.svg" },
  { alt: "trello", img: "/skills/tools/trello-icon.svg" },
  { alt: "postman", img: "/skills/tools/getpostman-icon.svg" },
  { alt: "linux", img: "/skills/tools/linux-icon.svg" },
  { alt: "firebase", img: "/skills/tools/firebase-icon.svg" },
  { alt: "figma", img: "/skills/tools/figma-icon.svg" },
  { alt: "jenkins", img: "/skills/tools/jenkins-icon.svg" },
  { alt: "docker", img: "/skills/tools/docker-icon.svg" },
];
</script>
