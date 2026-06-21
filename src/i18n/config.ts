export const i18n = {
  defaultLocale: "no",
  locales: ["no", "en", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  no: "Norsk",
  en: "English",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  no: "🇳🇴",
  en: "🇬🇧",
  de: "🇩🇪",
};
