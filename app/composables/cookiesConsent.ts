// ~/composables/useConsent.ts

import { ref } from 'vue'

interface ConsentOptions {
  ad_user_data?: 'granted' | 'denied'
  ad_personalization?: 'granted' | 'denied'
  ad_storage?: 'granted' | 'denied'
  analytics_storage?: 'granted' | 'denied'
}

export function useConsent()  {

  const { gtag } = useGtag()

  // Reactive state to track consent status
  const consentStatus = ref<ConsentOptions>({
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
    analytics_storage: 'denied',
  })

  /**
   * Update consent with provided options
   * @param options Partial consent options to update
   */
  const updateConsent = (options: ConsentOptions) => {
    consentStatus.value = { ...consentStatus.value, ...options }

    if (import.meta.client) {
      gtag('consent', 'update', { ...consentStatus.value })
      // Persist consentStatus to localStorage
      try {
        localStorage.setItem('userConsent', JSON.stringify(consentStatus.value))
      } catch (error) {
        console.error('Failed to save consent to localStorage:', error)
      }
    }
  }

  /**
   * Grant all consents
   */
  const allConsentGranted = () => {
    updateConsent({
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted',
    })
  }

  /**
   * Grant consent for ad storage only
   */
  const consentGrantedAdStorage = () => {
    updateConsent({
      ad_storage: 'granted',
    })
  }

  /**
   * Grant consent for instagram storage only
   */
  // const consentGrantedInstagram = () => {
  //   logicConsentGrantedInstagram()
  // }

  /**
   * Deny all consents
   */
  const allConsentDenied = () => {
    updateConsent({
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
    })
  }

  /**
   * Grant consent for analytics storage only
   */
  const consentGrantedAnalyticsStorage = () => {
    updateConsent({
      analytics_storage: 'granted',
    })
  }

  /**
   * Grant consent for personalization only
   */
  const consentGrantedPersonalization = () => {
    updateConsent({
      ad_personalization: 'granted',
    })
  }

  /**
   * Restore consent from localStorage if available
   */
  const restoreConsent = () => {

    if (!import.meta.client) {
      // Do not attempt to access localStorage on the server
      return
    }

    try {
      const storedConsent = localStorage.getItem('userConsent')
      if (storedConsent) {
        const parsedConsent: ConsentOptions = JSON.parse(storedConsent)
        consentStatus.value = parsedConsent
        gtag('consent', 'update', { ...consentStatus.value })
      }
    } catch (error) {
      console.error('Failed to restore consent from localStorage:', error)
    }
  }

  return {
    consentStatus,
    allConsentGranted,
    consentGrantedAdStorage,
    // consentGrantedInstagram,
    allConsentDenied,
    consentGrantedAnalyticsStorage,
    consentGrantedPersonalization,
    updateConsent,
    restoreConsent,
  }
}