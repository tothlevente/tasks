import i18n from "i18next";

import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "eo",
  fallbackLng: "eo",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        noContentTitle: "There is no any content yet.",
        noContentDescription: "Please add some content first.",
        browserSavedContentWarn: "Your content will saved to your browser!",
        newContentInput: "Add your todo here. Click save when you're done.",
        lightThemeText: "Light",
        darkThemeText: "Dark",
        systemThemeText: "System",
        settingsTitle: "Settings",
        languageTitle: "Language",
        downloadAllContent: "Download my content to this computer in text file",
        deleteAllContent: "Delete all contents in this browser",
        footerLineLicensed: "This website is open source and licensed under MIT.",
        footerLineNoCookies:
          "This website is does not use cookies and collect data about you.",
        footerLineUseLocalStorage: "Only use local storage to save your to-do list.",
        footerLineMoreInformation: "For more information please visit the project repository.",
        footerLineThankYou: "Thank you for your visiting and intrest! 👍️",
        footerLineCreatedBy: "Created by Levente in 2024 - 2025",
        footerRepositoryLink: "Repository",
        footerLicenseLink: "License",
      },
    },
    eo: {
      translation: {
        noContentTitle: "Ankoraŭ ne ekzistas enhavo.",
        noContentDescription: "Bonvolu aldoni iom da enhavo unue.",
        browserSavedContentWarn: "Via enhavo estos konservita en via retumilo!",
        newContentInput: "Aldonu vian taskon ĉi tie. Klaku konservi kiam vi finis.",
        lightThemeText: "Luma",
        darkThemeText: "Malhela",
        systemThemeText: "Sistema",
        settingsTitle: "Agordoj",
        languageTitle: "Lingvo",
        downloadAllContent: "Elŝutu mian enhavon al ĉi tiu komputilo en tekstdosiero",
        deleteAllContent: "Forigu ĉiujn enhavojn en ĉi tiu retumilo",
        footerLineLicensed: "Ĉi tiu retejo estas malfermita kodo kaj licencita sub MIT.",
        footerLineNoCookies: "Ĉi tiu retejo ne uzas kuketojn kaj ne kolektas datumojn pri vi.",
        footerLineUseLocalStorage: "Nur uzi lokan stokadon por konservi vian farendaĵliston.",
        footerLineMoreInformation:
          "Por pliaj informoj, bonvolu viziti la projektan deponejon.",
        footerLineThankYou: "Dankon pro via vizito kaj intereso! 👍️",
        footerLineCreatedBy: "Kreita de Levente en 2024 - 2025",
        footerRepositoryLink: "Deponejo",
        footerLicenseLink: "Licenco",
      },
    },
  },
});

export default i18n;
