import { defineStore } from 'pinia'

export const LinkActiveStateProvider = defineStore({
  id: 'linkstate-kike-coding',
  state: () => ({
    isActive: true,
  }),
})
export default LinkActiveStateProvider
