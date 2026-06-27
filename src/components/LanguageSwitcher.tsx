import Link from "next/link";
import { i18n, type Locale } from "@/i18n/config";

// Full names for tooltips / accessibility so the short codes are understood.
const NAMES: Record<string, string> = {
  no: "Norsk",
  en: "English",
  de: "Deutsch",
};

// Rebuilds the current path under each locale so language switching keeps the page.
export default function LanguageSwitcher({
  locale,
  restPath,
}: {
  locale: Locale;
  restPath: string;
}) {
  return (
    <div className="lang" role="group" aria-label="Language / Språk">
      <svg
        className="lang__globe"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
      </svg>
      {i18n.locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${restPath ? `/${restPath}` : ""}`}
          aria-current={l === locale ? "true" : undefined}
          hrefLang={l}
          title={NAMES[l] ?? l}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
