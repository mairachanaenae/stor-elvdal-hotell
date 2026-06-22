"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { navItems, href, BOOKING_URL } from "@/lib/nav";
import { LogoMark } from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Path after the locale segment, used to preserve the page when switching language.
  const restPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "").replace(/\/$/, "");

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={href(locale, "")} className="brand" aria-label={dict.meta.siteName}>
          <LogoMark className="brand__mark" />
          <span>
            {dict.meta.siteName}
            <small>{dict.meta.place}</small>
          </span>
        </Link>

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Primary">
          {navItems.map((item) => {
            const target = href(locale, item.slug);
            const isActive =
              item.slug === ""
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname.startsWith(target);
            return (
              <Link
                key={item.key}
                href={target}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {dict.nav[item.key]}
              </Link>
            );
          })}
          <a
            className="btn btn--primary"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.nav.book}
          </a>
        </nav>

        <div className="header-actions">
          <ThemeToggle label={dict.common.themeToggle ?? "Toggle dark mode"} />
          <LanguageSwitcher locale={locale} restPath={restPath} />
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? dict.common.closeMenu : dict.common.menuLabel}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
