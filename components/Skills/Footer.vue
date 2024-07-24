<template>
  <div v-for="item in props.items" :key="item.alt" class="">
    <NuxtImg :src="item.img" :alt="item.alt" class="h-10 md:h-14 w-auto" />
  </div>
</template>

<script setup lang="ts">
interface IIcon {
  alt: string;
  img: string;
}

const props = defineProps({
  items: {
    type: Array<IIcon>,
    required: true,
  },
});
</script>
