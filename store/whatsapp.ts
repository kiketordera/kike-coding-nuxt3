import { defineStore } from 'pinia'
import { WhatsAppState } from '~/types/types'

export const WhatsAppStateProvider = defineStore({
  id: 'whatsapp',
  state: (): WhatsAppState => ({
    show: false,
    messageVisible: false,
    notificationVisible: false,
  }),
  actions: {
    showWhatsApp () {
      if (!this.show) {
        this.toggleModal()
      }
    },
    toggleModal () {
      this.notificationVisible = false
      if (!this.messageVisible && !this.show) {
        setTimeout(() => {
          this.messageVisible = true
        }, 2000)
      }
      this.show = !this.show
    }
  },
})
export default WhatsAppStateProvider
