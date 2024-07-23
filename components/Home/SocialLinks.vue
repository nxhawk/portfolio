<template>
  <div class="h-fit w-full p-4 flex gap-3">
    <div v-for="(item, idx) in links" :key="item.name">
      <CommonFramerWrapper :delay="200 + idx * 250" :y="50">
        <NuxtLink
          target="blank"
          :to="item.link"
          :class="cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'bg-transparent border-gray-900')"
        >
          <CommonIcon :name="item.icon" :stroke-width="2" />
        </NuxtLink>
      </CommonFramerWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { name: "Facebook", link: "https://www.facebook.com/hawknhat.jr3", icon: "Facebook" },
  { name: "Youtube", link: "https://www.youtube.com/@hawk.nx2", icon: "Youtube" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/hao-nguyen-97448a226/", icon: "Linkedin" },
  { name: "Github", link: "https://github.com/nxhawk", icon: "Github" },
];
</script>
