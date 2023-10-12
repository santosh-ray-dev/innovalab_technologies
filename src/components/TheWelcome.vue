<template>
  <div
    class="bg-gray-100 min-h-screen flex flex-col items-center justify-center"
  >
    <transition name="fade" mode="out-in">
      <div :key="showGreeting" class="text-center">
        <h1 class="text-3xl font-semibold text-black mb-4">
          Welcome to the Innovalabs Assignment
        </h1>
        <p class="text-lg text-gray-600 mb-8" v-if="showGreeting">
          click on question to go to the solution page
        </p>
      </div>
    </transition>
    <div class="w-full md:w-2/3 lg:w-1/2">
      <h2 class="text-2xl font-semibold text-black mb-4 mt-8">Questions</h2>
      <div
        v-for="question in questions"
        :key="question.id"
        class="p-4 border rounded-md mb-4 hover:shadow-md transition cursor-pointer"
      >
        <h3 class="text-lg font-semibold text-black mb-2">
          {{ question.title }}
        </h3>
        <p class="text-gray-700">{{ question.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showGreeting = ref(true);

const questions = ref([
  {
    id: 1,
    title: 'Question A',
    description: 'Parent-child communication,Child Parent Communication,Child Child Communication',
  },
  {
    id: 2,
    title: 'Question B',
    description: 'Need to list total users from an API in a paginated list. The list can be searched and filtered',
  },
  {
    id: 3,
    title: 'Question C',
    description: "Write code to build form and handle this dynamically. When the user press submit button this form needs to be validated before submit. This block can be dynamic JSON. This can be N number of Blocks.",
  },
  // Add more questions with descriptions as needed
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
