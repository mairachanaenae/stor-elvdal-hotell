import Link from "next/link";
import { i18n, type Locale } from "@/i18n/config";

// Rebuilds the current path under each locale so language switching keeps the page.
export default function LanguageSwitcher({
  locale,
  restPath,
}: {
  locale: Locale;
  restPath: string;
}) {
  return (
    <div className="lang" role="group" aria-label="Language">
      {i18n.locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${restPath ? `/${restPath}` : ""}`}
          aria-current={l === locale ? "true" : undefined}
          hrefLang={l}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
