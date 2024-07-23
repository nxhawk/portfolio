<template>
  <!-- TODO: hidden when scroll -->
  <CommonFramerWrapper
    class="fixed top-5 left-0 right-0 m-auto border border-black rounded-full p-2 bg-transparent flex gap-3 transition ease-in-out delay-150 h-fit w-fit hover:-translate-y-1 hover:scale-100 max-sm:gap-1"
    :y="-100"
  >
    <TooltipProvider v-for="item in items" :key="item.name">
      <Tooltip>
        <TooltipTrigger>
          <NuxtLink
            :to="item.link"
            :class="
              cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'hover:text-[#2f7df4]',
                route.path === item.link && 'text-[#2f7df4] bg-zinc-100',
              )
            "
          >
            <CommonIcon :name="item.icon" :stroke-width="2" />
          </NuxtLink>
        </TooltipTrigger>
        <TooltipContent>
          <p>{{ item.name }}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </CommonFramerWrapper>
</template>

<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "~/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const route = useRoute();

const items = [
  { name: "Home", icon: "Home", link: "/" },
  { name: "About", icon: "User2", link: "/about" },
  { name: "Skills", icon: "Lightbulb", link: "/skills" },
  { name: "Projects", icon: "Layers", link: "/projects" },
  { name: "Work", icon: "Briefcase", link: "/work" },
  { name: "More", icon: "PackagePlus", link: "/more" },
  { name: "Contact", icon: "Phone", link: "/contact" },
];
</script>
