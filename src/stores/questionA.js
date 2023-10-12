import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "questionA",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
