<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
<!-- eslint-disable vue/html-self-closing -->

<template>
  <div v-for="(post, num) in props.posts" :key="post.slug">
    <CommonFramerWrapper
      class="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      :y="0"
      :scale="0.15"
      :duration="150"
      :delay="(num / 4) * 800"
    >
      <NuxtLink :to="post._path">
        <img :src="post.cover" alt="Blog Post Cover Image" class="w-full h-48 object-cover" />
      </NuxtLink>
      <div class="p-5 flex flex-col justify-between flex-1">
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-700 mb-4">{{ post.description }}</p>
        <NuxtLink
          :to="post._path"
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right self-end"
          >Read More
        </NuxtLink>
      </div>
    </CommonFramerWrapper>
  </div>
</template>
