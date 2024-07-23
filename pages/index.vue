<template>
  <div>
    <CommonFramerWrapper :y="0" :x="-100" class="h-full w-auto flex flex-col justify-start gap-4">
      <HomeHeroTexts />
    </CommonFramerWrapper>
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
