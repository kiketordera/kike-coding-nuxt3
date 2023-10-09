import { defineStore } from 'pinia'

export const LinkActiveStateProvider = defineStore({
  id: 'linkstate',
  state: () => ({
    isActive: true,

  }),
  actions: {

  },
})
export default LinkActiveStateProvider
