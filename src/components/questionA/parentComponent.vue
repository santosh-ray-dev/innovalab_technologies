<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
      <h2 class="text-2xl font-semibold mb-4">Parent Component</h2> <span>{{ title }}</span>
      <div class="mb-4">
        <p>Counter Value: {{ counter }}</p>
        <button
          @click="incrementCounter"
          class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Increment
        </button>
      </div>
      <ChildComponent :counter="counter" @childIncrement="incrementCounter" />
    </div>
  </div>
</template>

<script setup>
import ChildComponent from "./childComponent.vue";
import { ref,defineProps } from "vue";

const counter = ref(0);

const {title} = defineProps(["title"])

const incrementCounter = () => {
  counter.value++;
};
</script>
