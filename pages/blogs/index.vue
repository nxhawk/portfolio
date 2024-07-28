<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Rss" name="Blogs" />
    <div class="flex flex-col gap-3">
      <CommonHeading> My Blogs </CommonHeading>
      <CommonFramerWrapper :x="200" :y="0">
        <p class="font-poppins text-xl w-full text-primary max-sm:text-lg">
          I like to write about anything that I am currently working or something new that interests me.
        </p>
      </CommonFramerWrapper>
    </div>
    <section
      v-if="currentPage <= totalPage && currentPage > 0"
      class="mt-2 grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-5"
    >
      <BlogPost :posts="posts.value" />
    </section>
    <div class="flex items-center justify-center w-full">
      <div v-if="currentPage <= totalPage && currentPage > 0">
        <CommonPagination
          :total-item="totalBlog"
          :per-page="perPage"
          :current-page="currentPage"
          :next-page="nextPage"
          :prev-page="prevPage"
          :total-page="totalPage"
        />
      </div>
      <div v-else class="py-2 md:py-4 flex flex-col items-center">
        <CommonIcon name="Squirrel" :stroke-width="2" :size="200" class="transform -scale-x-100" />
        <span class="text-4xl font-poppinsBold my-4">Page Not Found</span>
        <NuxtLink
          href="/blogs"
          replace
          :class="cn(buttonVariants({ variant: 'default', size: 'lg' }), 'flex items-center gap-2')"
        >
          <CommonIcon name="ArrowLeft" :stroke-width="2" />
          Blogs
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, reactive } from "vue";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const route = useRoute();
const perPage = 6;
let prevPage = 1;
let nextPage = 1;
const currentPage = ref(1);
const posts = reactive([]);
const { data: totalBlog } = await useAsyncData("totalPage", () => queryContent("/blogs").count());
const totalPage = Math.floor(totalBlog.value / perPage) + (totalBlog.value % perPage > 0 ? 1 : 0);

watch(
  () => [route.path, route.query],
  async () => {
    try {
      currentPage.value = parseInt(route.query.page);
      if (isNaN(currentPage.value)) throw new Error();
    } catch (error) {
      currentPage.value = 1;
    }

    prevPage = Math.max(currentPage.value - 1, 1);
    nextPage = Math.min(currentPage.value + 1, totalPage);
    const { data } = await useAsyncData("posts", () =>
      queryContent("/blogs")
        .sort({ date: -1 })
        .skip((currentPage.value - 1) * perPage)
        .limit(perPage)
        .find(),
    );

    posts.value = data.value;
  },
  { immediate: true },
);
</script>
