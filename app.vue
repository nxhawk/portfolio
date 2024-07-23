<template>
  <Html lang="en">
    <title>Nguyen Nhat Hao - Portfolio</title>
    <NuxtLayout>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage />
    </NuxtLayout>
  </Html>
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
      content: "Portfolio",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/portfolio/logo.png" }],
});
</script>
