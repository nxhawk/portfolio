<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
    <CommonBadge icon="User2" name="About me" />
    <div class="flex flex-col gap-3">
      <CommonHeading>
        Software Engineer And Fullstack <br />
        Developer, Based In Vietnam.
      </CommonHeading>
      <CommonFramerWrapper :x="100" :y="0">
        <p class="font-poppins text-xl w-full text-primary max-sm:text-lg">
          I am a Full Stack Web Developer from Ho Chi Minh city, Vietnam. I love crafting cool web projects and also
          open-source contribuitions. My biggest achievement lies in my mastery of JavaScript and CSS, ensuring
          pixel-perfect designs that captivate users. With a keen eye for detail and a commitment to delivery speed, I
          excel at creating seamless and responsive interfaces that leave a lasting impression. I like to develop
          websites with React, Next, Vue, Nuxt and Angular technologies. I am in the process of learning Spring Boot,
          Nestjs, Golang for backend design.
        </p>
      </CommonFramerWrapper>
      <CommonFramerWrapper class="mt-2 md:mt-4 w-full flex justify-between gap-7 max-lg:flex-col" :y="100" :delay="300">
        <AboutFooter />
      </CommonFramerWrapper>
      <CommonFramerWrapper :y="100" :delay="310" class="mt-2">
        <h1 class="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <CommonIcon name="Heart" class="h-8 w-8" :stroke-width="2" />
          Hobbies
        </h1>
        <div class="w-full h-fit flex flex-wrap p-2 gap-7 gap-y-2 justify-between max-md:flex-col">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            class="flex gap-2 justify-center items-center text-xl text-primary pt-3 max-lg:justify-start"
          >
            <CommonIcon name="Circle" class="h-3 w-3" :stroke-width="2" />
            {{ item.hobby }}
          </div>
        </div>
      </CommonFramerWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { hobby: "Coding" },
  { hobby: "Playing games" },
  { hobby: "Listen to music" },
  { hobby: "Reading Novel" },
  { hobby: "Watching Anime" },
  { hobby: "Watching Live Streams" },
  { hobby: "Creating Cool Projects" },
];
</script>
