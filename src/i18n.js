import { createI18n } from 'vue-i18n/index'
import en from '../public/locales/en.json'
import fr from '../public/locales/fr.json'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: navigator.language || navigator.userLanguage,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en,
    fr
  },
  enableInSFC: true,
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false
})
