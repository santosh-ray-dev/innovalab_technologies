<template>
  <div class="p-4 border mt-8" :class="borderClass">
    <h4 class="text-base font-semibold mb-2">Nested Child Component</h4>
    <div class="mb-4">
        <p>Counter Value: {{ counter }}</p>
        <button
      class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
      @click="incrementCounter"
    >
      Increment from Nested Child
    </button>
    </div>
    
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { counter } = defineProps(["counter"]);
const emit = defineEmits();

const incrementCounter = () => {
    emit('nestedIncrement');
};

const borderClass = "border-dotted border-purple-500";
</script>
