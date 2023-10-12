<template>
  <div class="p-4 border" :class="borderClass">
    <h3 class="text-lg font-semibold mb-2">Child Component</h3>
    <div class="mb-4">
        <p>Counter Value: {{ counter }}</p>
        <button
      class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
      @click="incrementCounter"
    >
      Increment from Child
    </button>
    </div>
    
    <NestedChildComponent :counter="counter" @nestedIncrement="incrementCounter" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import NestedChildComponent from "./NestedChildComponent.vue";

const { counter } = defineProps(["counter"]);
const emit = defineEmits();

const incrementCounter = () => {
    emit('childIncrement');
};

const borderClass = "border-dotted border-green-500";
</script>
