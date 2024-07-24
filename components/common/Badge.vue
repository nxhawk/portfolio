<template>
  <Badge class="gap-2">
    <CommonIcon :name="props.icon" :stroke-width="2" class="h-5 w-5" />
    {{ props.name }}
  </Badge>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
