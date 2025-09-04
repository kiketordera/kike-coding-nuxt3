
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return;

  // Only allow locales configured in Nuxt i18n
  const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr', 'pt'] as const;
  type SupportedLocaleCode = typeof SUPPORTED_LOCALES[number];

  const preferredLang = getLang();
  const i18n = nuxtApp.$i18n as any;

  const resolvedLocale: SupportedLocaleCode = (SUPPORTED_LOCALES as readonly string[]).includes(preferredLang as string)
    ? (preferredLang as SupportedLocaleCode)
    : 'en';

  // Ensure i18n uses the same locale as our custom detector
  const current = i18n?.global?.locale?.value ?? i18n?.global?.locale;
  if (current !== resolvedLocale) {
    if (i18n?.setLocale) {
      i18n.setLocale(resolvedLocale);
    } else if (i18n?.global?.locale) {
      i18n.global.locale.value = resolvedLocale;
    }
  }
});


