<script setup lang="ts">
import { Pagination, PaginationEllipsis, PaginationList, PaginationListItem } from "@/components/ui/pagination";

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
});
</script>

<template>
  <div>
    <Pagination
      v-slot="{ page }"
      :total="totalItem"
      :sibling-count="1"
      show-edges
      :default-page="currentPage"
      :items-per-page="perPage"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <NuxtLink :href="'/blogs?page=' + item.value">
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
              </Button>
            </NuxtLink>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>
      </PaginationList>
    </Pagination>
  </div>
</template>
