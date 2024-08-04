<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const route = useRoute();
const { path } = useRoute();

const { data }: { data: Record<string, any> } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

function formatTitle(title: string) {
  const s = title.replaceAll("-", " ").trim();
  return s && s[0].toUpperCase() + s.slice(1);
}

useHead({
  title: `Blog ${data?.value?.title || formatTitle(route.params.slug[0])}`,
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

<template>
  <div>
    <CommonScrollToTop />
    <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
      <CommonBadge icon="Rss" name="Blog" />
      <div class="flex flex-col gap-3">
        <CommonHeading> My Blog </CommonHeading>
      </div>
      <CommonFramerWrapper class="bg-white/80 rounded-lg w-full p-4 md:p-5">
        <template v-if="data">
          <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
          <div class="my-8 flex flex-wrap gap-2">
            <NuxtLink
              v-for="tag in data?.tags"
              :key="tag"
              :href="`/blog/tags/${tag}`"
              class="text-sm font-semibold py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase flex w-fit items-center"
            >
              <CommonIcon name="Tag" :stroke-width="2" class="text-gray-100 mr-2" />
              {{ tag }}
            </NuxtLink>
          </div>
        </template>
        <div v-else class="py-2 md:py-4 flex flex-col items-center">
          <CommonIcon name="Squirrel" :stroke-width="2" :size="200" class="transform -scale-x-100" />
          <span class="text-4xl font-poppinsBold my-4">Blog Not Found</span>
          <NuxtLink
            href="/blogs"
            replace
            :class="cn(buttonVariants({ variant: 'default', size: 'lg' }), 'flex items-center gap-2')"
          >
            <CommonIcon name="ArrowLeft" :stroke-width="2" />
            Back
          </NuxtLink>
        </div>
      </CommonFramerWrapper>
    </div>
  </div>
</template>
