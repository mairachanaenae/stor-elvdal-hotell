import type { Dictionary } from "@/i18n/dictionaries";

export const BOOKING_URL = "https://reservations.visbook.com/2158";

// Slugs stay Norwegian across all locales (simple, stable URLs for the prototype).
export type NavItem = { slug: string; key: keyof Dictionary["nav"] };

export const navItems: NavItem[] = [
  { slug: "", key: "home" },
  { slug: "rom", key: "rooms" },
  { slug: "restaurant", key: "restaurant" },
  { slug: "kurs-konferanse", key: "meetings" },
  { slug: "selskaper", key: "events" },
  { slug: "kultursenter", key: "kultursenter" },
  { slug: "om-oss", key: "about" },
  { slug: "kontakt", key: "contact" },
];

export function href(locale: string, slug: string): string {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}
