<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Rss" name="Blog" />
    <div class="flex flex-col gap-3">
      <CommonHeading> My Blog </CommonHeading>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  title: `Blog ${route.params.blog}`,
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
