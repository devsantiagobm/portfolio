import index_es from "locales/es/pages/index.locale.json";
import index_en from "locales/en/pages/index.locale.json";
import technologies_es from "locales/es/pages/technologies.locale.json";
import technologies_en from "locales/en/pages/technologies.locale.json";
import header_es from "locales/es/components/header.locale.json"
import header_en from "locales/en/components/header.locale.json"
import profile_es from "locales/es/pages/profile.locale.json"
import profile_en from "locales/en/pages/profile.locale.json"
import faq_es from "locales/es/pages/faq.locale.json"
import faq_en from "locales/en/pages/faq.locale.json"
import contact_es from "locales/es/pages/contact.locale.json"
import contact_en from "locales/en/pages/contact.locale.json"
import projects_es from "locales/es/pages/projects.locale.json"
import projects_en from "locales/en/pages/projects.locale.json"




const configurations = {
    interpolation: {
        escapeValue: false
    },
    lng: "es",

    resources: {
        es: {
            translation: { ...index_es, ...technologies_es, ...header_es, ...profile_es, ...faq_es, ...contact_es, ...projects_es }
        },
        en: {
            translation: { ...index_en, ...technologies_en, ...header_en, ...profile_en, ...faq_en, ...contact_en, ...projects_en }
        }
    }

}

export default configurations;