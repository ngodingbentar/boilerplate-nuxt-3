<template>
  <div class="flex w-full h-screen justify-center items-center">
    <div>
      <div>
        count : {{ count }}
      </div>
      <div>
        <button @click="decrement">-</button>
        <button @click="increment" class="ml-4">+</button>
      </div>
      <div>
        <button @click="getData">getData</button>
        <div v-if="todo">
          <div>id: {{ todo.id }}</div>
          <div>title: {{ todo.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../stores'
import { getTodo } from '@/api/main'

const mainStore = useMainStore()
const { count } = storeToRefs(mainStore)
const { increment, decrement } = mainStore

interface ITodo {
  id: number,
  title: string,
  completed: boolean,
  userId: number
}
const todo = ref({} as ITodo)

async function getData() {
  todo.value = await getTodo()
}
</script>
