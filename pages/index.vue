<template>
  <div class="flex items-center">
    <CommonFramerWrapper :y="0" :x="-100" class="h-full w-auto flex flex-col justify-start gap-2 md:gap-4">
      <HomeHeroTexts />
      <HomeSocialLinks />
      <HomeDownLoadResumeBtn />
    </CommonFramerWrapper>
    <CommonFramerWrapper :y="0" :x="100" class="h-full w-[40%] relative block max-lg:hidden pb-12">
      <HomeHeroImage />
    </CommonFramerWrapper>
    <HomeGithubButton />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Nguyen Nhat Hao",
  titleTemplate: "%s - Portfolio",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "This is my portfolio use Nuxt 3",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
});
</script>
