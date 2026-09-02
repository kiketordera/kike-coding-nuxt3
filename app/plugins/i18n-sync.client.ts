/**
 * `$i18n` is a vue-i18n Composer at runtime, but this plugin also tolerates the
 * legacy `{ global: { locale } }` shape, so it is narrowed to just the members
 * used here rather than to a concrete vue-i18n type.
 */
interface I18nLocaleController {
  setLocale?: (locale: string) => void | Promise<void>;
  global?: { locale: { value: string } | string };
}

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return;

  // Only allow locales configured in Nuxt i18n
  const SUPPORTED_LOCALES = ['de', 'en', 'es', 'fr'] as const;
  type SupportedLocaleCode = typeof SUPPORTED_LOCALES[number];

  const preferredLang = getLang();
  const i18n = nuxtApp.$i18n as unknown as I18nLocaleController;

  const resolvedLocale: SupportedLocaleCode = (SUPPORTED_LOCALES as readonly string[]).includes(preferredLang as string)
    ? (preferredLang as SupportedLocaleCode)
    : 'en';

  // Ensure i18n uses the same locale as our custom detector
  const globalLocale = i18n?.global?.locale;
  const current = typeof globalLocale === 'object' ? globalLocale.value : globalLocale;
  if (current !== resolvedLocale) {
    if (i18n?.setLocale) {
      i18n.setLocale(resolvedLocale);
    } else if (typeof globalLocale === 'object') {
      globalLocale.value = resolvedLocale;
    }
  }
});
