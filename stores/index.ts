import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const count = ref(1)
  function decrement () {
    count.value--
  }

  function increment () {
    count.value++
  }

  return { count, decrement, increment }
})