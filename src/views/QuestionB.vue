<script setup>
import { useStore } from "@/stores/questionB";
import { ref, computed, onMounted } from "vue";
import UserTable from "@/components/questionB/userTable.vue";
import debounce from "lodash/debounce";
const store = useStore();
let loading = ref(false);
var searchKey = ref("");
const usersData = computed(() => {
  return store.filterData;
});

onMounted(async () => {
  await getUsers();
});

const getUsers = async () => {
  loading.value = true;
  try {
    const res = await store.fetchAllUsers();
    userFilterData = res;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loading.value = false;
  }
};

const searchUser = async () => {
  //   if (searchKey.value.trim() !== "") {

  try {
    await store.searchUser(searchKey.value);
  } catch (error) {
    console.error("Error searching users:", error);
  } finally {
    loading.value = false;
  }
  //   }
};

const debouncedSearch = debounce(() => {
  loading.value = true;
  searchUser();
}, 500);
</script>

<template>
  <div class="my-20 mx-20">
    <div class="mb-4">
      <input
        v-model="searchKey"
        type="text"
        class="w-full p-2 border rounded shadow"
        placeholder="Search users..."
        @keyup="debouncedSearch"
      />
    </div>
    <div class="rounded-lg overflow-hidden shadow bg-white">
      <UserTable :users="usersData" :loading="loading" />
    </div>
  </div>
</template>
