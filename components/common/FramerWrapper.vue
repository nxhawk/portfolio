<template>
  <div
    v-motion
    :initial="
      props.scale === 0
        ? { opacity: 0, y: props.y, x: props.x }
        : { opacity: 0, y: props.y, x: props.x, scale: props.scale }
    "
    :enter="props.scale === 0 ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, y: 0, x: 0, scale: 1 }"
    :delay="props.delay"
    :duration="props.duration"
    :class="props.class"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  delay: {
    type: Number,
    default: 100,
  },
  duration: {
    type: Number,
    default: 300,
  },
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 15,
  },
  scale: {
    type: Number,
    default: 0,
  },
  class: {
    type: String,
    default: "",
  },
});
</script>
