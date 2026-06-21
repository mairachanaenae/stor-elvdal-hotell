import "server-only";
import type { Locale } from "./config";

// Dictionaries are loaded on the server only, keeping translation payloads
// out of the client bundle.
const dictionaries = {
  no: () => import("./dictionaries/no.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  de: () => import("./dictionaries/de.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["no"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  (dictionaries[locale] ?? dictionaries.no)();
