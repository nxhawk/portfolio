<template>
  <Button class="flex items-center text-base px-5 py-6" size="lg" :onmouseenter="startScrambling">
    <CommonIcon name="Download" :stroke-width="2" class="mx-1" />
    {{ displayText }}
  </Button>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from "vue";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
const displayText = ref(props.label);
const charset = "abcdefghijklmnopqrstuvwxyz";
const randomChars = (length: number) => {
  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join("");
};
const scramble = async (input: string) => {
  let prefix = "";
  for (let index = 0; index < input.length; index++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    prefix += input.charAt(index);
    displayText.value = prefix + randomChars(input.length - prefix.length);
  }
};
const startScrambling = () => {
  scramble(props.label);
  setTimeout(() => props.label.length * 50);
};
</script>
