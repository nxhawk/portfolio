<template>
  <span
    :class="
      cn(
        'inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-200 text-gray-950 capitalize',
        tagToColor(tag),
      )
    "
    >{{ tag }}</span
  >
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

const { tag } = defineProps({
  tag: {
    type: String,
    required: true,
  },
});

function tagToColor(tagName: string) {
  const lowerTag = tagName.toLowerCase();
  switch (lowerTag) {
    case "typescript":
      return "bg-sky-200 text-sky-600";
    case "postgresql":
      return "bg-cyan-200 text-cyan-600";
    case "reactjs":
    case "react":
      return "bg-teal-200 text-teal-600";
    case "tailwind":
    case "tailwindcss":
    case "nodejs":
      return "bg-emerald-200 text-emerald-600";
    case "nextjs":
      return "bg-slate-700 text-slate-50";
    case "nestjs":
      return "bg-red-200 text-red-500";
    case "vnpay":
      return "bg-red-100 text-red-500";
    case "redux":
      return "bg-violet-200 text-violet-600";
    case "tanstack":
      return "bg-amber-200 text-amber-600";
    case "docker":
      return "bg-blue-200 text-blue-500";
    case "vuejs":
    case "expressjs":
      return "bg-green-200 text-green-500";
    case "pinia":
      return "bg-orange-100 text-orange-500";
    case "prisma":
      return "bg-stone-200 text-stone-900";
    case "mongodb":
      return "bg-lime-100 text-lime-600";
    case "nuxtjs":
      return "bg-green-200 text-green-500";
    case "handlebars":
      return "bg-yellow-100 text-yellow-500";
    default:
      return "bg-gray-200 text-gray-950";
  }
}
</script>
