<template>
  <div v-for="item in props.items" :key="item.alt">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <SkillsDialogItem :item="item" />
        </TooltipTrigger>
        <TooltipContent class="bg-transparent border-0 shadow-none">
          <Badge>
            <p class="capitalize">{{ item.alt }}</p>
          </Badge>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>

<script setup lang="ts">
import type { ISkill } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const props = defineProps({
  items: {
    type: Array<ISkill>,
    required: true,
  },
});
</script>
