<!-- eslint-disable vue/html-self-closing -->
<template>
  <Dialog>
    <DialogTrigger>
      <img :src="item.img" :alt="item.alt" class="h-10 md:h-14 w-auto" />
      <img :src="item.official" :alt="item.alt" class="h-10 md:h-14 w-auto hidden" />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <img :src="item.official" :alt="item.alt" class="h-10 md:h-14 w-auto" />
        </DialogTitle>
        <DialogDescription>{{ item.description }}</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import type { ISkill } from "@/data/skills";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const { item } = defineProps({
  item: {
    type: Object as () => ISkill,
    required: true,
  },
});
</script>
