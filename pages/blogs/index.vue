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
    <section class="mt-2 grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-5">
      <BlogPost :posts="posts.value" />
    </section>
    <div class="flex items-center justify-center w-full">
      <CommonPagination :total-item="totalBlog" :per-page="perPage" :current-page="currentPage" />
    </div>
  </div>
</template>

<script setup>
import { watch, reactive } from "vue";

const route = useRoute();
const perPage = 6;
const currentPage = ref(1);
const posts = reactive([]);
const { data: totalBlog } = await useAsyncData("totalPage", () => queryContent("/blogs").count());

watch(
  () => [route.path, route.query],
  async () => {
    try {
      currentPage.value = parseInt(route.query.page);
      if (isNaN(currentPage.value)) throw new Error();
    } catch (error) {
      currentPage.value = 1;
    }

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
