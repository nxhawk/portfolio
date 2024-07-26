<script setup lang="ts">
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Image",
  },
});
</script>
<!-- eslint-disable vue/html-self-closing -->

<template><img :src="'/portfolio' + props.img" :alt="props.alt" class="w-full h-fit" /></template>
