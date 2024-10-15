import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useTodoStore = defineStore('todoList', {
  state: () => ({
    todoList: useStorage('todoList', []),
  }),
  actions: {
    add(todoItem) {
      this.todoList.push(todoItem)
    },
    toggle(id) {
      this.todoList[id].done = !this.todoList[id].done
    },
  },
  persist: true,
})
