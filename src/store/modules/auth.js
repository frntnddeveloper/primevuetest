import { defineStore } from 'pinia'

export const authStore = defineStore('counter', {
  state: () => {
    return { 
      user: [] 
    }
  },
  actions: {
    increment() {
    },
  },
})