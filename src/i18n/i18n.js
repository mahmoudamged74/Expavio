import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import arCommon from './locales/ar/common.json'
import arHome from './locales/ar/home.json'
import arServices from './locales/ar/services.json'
import arContact from './locales/ar/contact.json'
import arAbout from './locales/ar/about.json'
import arInvestor from './locales/ar/investor.json'
import arConsultation from './locales/ar/consultation.json'

import enCommon from './locales/en/common.json'
import enHome from './locales/en/home.json'
import enServices from './locales/en/services.json'
import enContact from './locales/en/contact.json'
import enAbout from './locales/en/about.json'
import enInvestor from './locales/en/investor.json'
import enConsultation from './locales/en/consultation.json'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        common: arCommon,
        home: arHome,
        services: arServices,
        contact: arContact,
        about: arAbout,
        investor: arInvestor,
        consultation: arConsultation,
      },
      en: {
        common: enCommon,
        home: enHome,
        services: enServices,
        contact: enContact,
        about: enAbout,
        investor: enInvestor,
        consultation: enConsultation,
      },
    },
    fallbackLng: 'ar',
    defaultNS: 'common',
    ns: ['common', 'home', 'services', 'contact', 'about', 'investor', 'consultation'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'expavio-lang',
      caches: ['localStorage'],
    },
  })

export default i18n
