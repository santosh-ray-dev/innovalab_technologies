<template>
  <div class="flex justify-end mt-4">
    <ul class="flex space-x-2">
      <li>
        <button
          @click="changePage(pagination.page - 1)"
          :disabled="pagination.page === 1"
          class="px-3 py-1 rounded bg-blue-500 text-white"
        >
          Previous
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <button
          @click="changePage(page)"
          :class="
            pagination.page === page
              ? 'bg-blue-500 text-white'
              : 'bg-white border border-gray-300'
          "
          class="px-3 py-1 rounded"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          @click="changePage(pagination.page + 1)"
          :disabled="pagination.page === pagination.count"
          class="px-3 py-1 rounded bg-blue-500 text-white"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, toRefs,defineProps, computed } from "vue";

import {useStore} from '@/stores/questionB'
const store = useStore()

const pagination = computed(()=>{
    return store.userPaginationData
})

const pages = ref([]);

const generatePages = () => {
  pages.value = [];
  for (let i = 1; i <= pagination.value.count/pagination.value.limit; i++) {
    pages.value.push(i);
  }
};

const changePage = (page) => {
  if (page >= 1 && page <= pagination.value.count/pagination.value.limit) {
    store.changePage({page:page,limit:5})
  }
};

generatePages();
</script>
