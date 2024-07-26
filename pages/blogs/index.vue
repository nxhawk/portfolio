<template>
  <div class="h-full w-full relative flex flex-col gap-5 overflow-hidden items-start mb-2">
    <CommonBadge icon="Rss" name="Blogs" />
    <div class="flex flex-col gap-3">
      <CommonHeading> My Blogs </CommonHeading>
    </div>
    I like to write about anything that I am currently working or something new that interests me. If you would like me
    to write about something or be a guest blogger on your blog please reach out to me on Facebook. If you would like to
    subscribe to an RSS feed you can find it here.

    <section class="grid md:grid-cols-3 mt-8 gap-10">
      <BlogPost :posts="posts" />
    </section>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () => queryContent("/blogs").find());
</script>
