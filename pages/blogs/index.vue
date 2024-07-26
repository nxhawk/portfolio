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
      <BlogPost :posts="posts" />
    </section>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () => queryContent("/blogs").sort({ date: -1 }).find());
</script>
