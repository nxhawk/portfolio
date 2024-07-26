<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const route = useRoute();
const { path } = useRoute();

useHead({
  title: `Blog ${route.params.slug}`,
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

const { data }: { data: Record<string, any> } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Rss" name="Blog" />
    <div class="flex flex-col gap-3">
      <CommonHeading> My Blog </CommonHeading>
    </div>
    <main class="bg-white/80 rounded-lg w-full p-4 md:p-5">
      <!-- <ContentDoc class="prose"/> -->
      <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
      <div class="my-8 flex flex-wrap gap-2">
        <NuxtLink
          v-for="tag in data.tags"
          :key="tag"
          :href="`/blog/tags/${tag}`"
          class="text-sm font-semibold py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase flex w-fit items-center"
        >
          <CommonIcon name="Tag" :stroke-width="2" class="text-gray-100 mr-2" />
          {{ tag }}
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
