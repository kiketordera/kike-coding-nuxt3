import type { Locale } from "@dargmuesli/nuxt-cookie-control/runtime/types.js";

// Fix for using availableLanguages in nuxtConfig. Delete if bug updated
// Exclude 'sl' from the CookieLocale if it's present
export type SharedLocale = Exclude<Locale, 'sl'>

const defaultLang: SharedLocale = 'es'
export const availableLanguages: SharedLocale[] = ['en', 'es', 'fr', 'de', 'nl', 'pt']

export const getLang = (): SharedLocale => {
    const locale = useBrowserLocale() as SharedLocale || defaultLang 
    return availableLanguages.includes(locale) ? locale : defaultLang
}

export const getI18nJson = async <T>(name: string): Promise<T[]> => {
    const lang = getLang()
    const cacheKey = `${name}-${lang}` // Unique key based on `name` and `lang`

    const { data: jsonData } = await useAsyncData<T[]>(cacheKey, async () => {
        const result = await import(`~/assets/data/i18n/${name}/${name}-${lang}.json`)
        return result.default as T[]
    })

    // Unwrap the Ref and return the value directly as an array
    return jsonData.value ?? [] // If jsonData.value is undefined, return an empty array
}