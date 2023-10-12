<template>
  <div class="overflow-x-auto">
    <!-- Loading section -->
    <div v-if="loading" class="p-4 flex flex-col items-center">
      <div
        class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"
      ></div>
      <div>Loading...</div>
    </div>
    <!-- Loading section -->

    <!-- Show "No Data" message when users array is empty -->
    <div v-else-if="users.length === 0" class="p-4 text-center text-gray-500">
        No data available.
      </div>

    <!-- table section -->
    <table v-else class="min-w-full">
      <thead>
        <tr>
          <th
            class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
          >
            Username
          </th>
          <th
            class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
          >
            Address
          </th>
          <th
            class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
          >
            Phone
          </th>
          <th
            class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider"
          >
            Company
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            {{ user.id }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            {{ user.name }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            {{ user.username }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            {{ user.email }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            {{ user.address.street }}, {{ user.address.suite }},
            {{ user.address.city }}, {{ user.address.zipcode }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            {{ user.phone }}
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
            {{ user.company.name }}, {{ user.company.catchPhrase }},
            {{ user.company.bs }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- table section -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps } from "vue";

const { users, loading } = defineProps(["users","loading"]);
</script>
