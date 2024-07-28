<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";

const { totalItem, perPage, currentPage } = defineProps({
  totalItem: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: Number,
    required: true,
  },
  prevPage: {
    type: Number,
    required: true,
  },
});

function scrollToElement() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <CommonFramerWrapper :delay="300">
    <Pagination
      v-slot="{ page }"
      :total="totalItem"
      :sibling-count="1"
      show-edges
      :default-page="currentPage"
      :items-per-page="perPage"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <NuxtLink :to="'/blogs?page=' + prevPage" @click="scrollToElement">
          <PaginationPrev />
        </NuxtLink>

        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <NuxtLink :to="'/blogs?page=' + item.value" @click="scrollToElement">
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
              </Button>
            </NuxtLink>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>
        <NuxtLink :to="'/blogs?page=' + nextPage" @click="scrollToElement">
          <PaginationNext />
        </NuxtLink>
      </PaginationList>
    </Pagination>
  </CommonFramerWrapper>
</template>
