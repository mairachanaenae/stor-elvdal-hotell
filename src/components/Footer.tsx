import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { navItems, href, BOOKING_URL } from "@/lib/nav";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{dict.meta.siteName}</h4>
            <p>{dict.footer.tagline}</p>
          </div>

          <div>
            <h4>{dict.footer.quickLinks}</h4>
            <ul className="footer-list">
              {navItems.slice(1).map((item) => (
                <li key={item.key}>
                  <Link href={href(locale, item.slug)}>{dict.nav[item.key]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{dict.footer.contactHeading}</h4>
            <ul className="footer-list">
              <li>{dict.contact.address}</li>
              <li>
                <a href="tel:+4762460455">{dict.contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${dict.contact.email}`}>{dict.contact.email}</a>
              </li>
              <li>{dict.contact.hours}</li>
            </ul>
          </div>

          <div>
            <h4>{dict.footer.bookHeading}</h4>
            <p>{dict.footer.bookBody}</p>
            <a
              className="btn btn--primary"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.footer.bookCta}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {dict.footer.rights}
          </span>
          <span>{dict.footer.prototypeNote}</span>
        </div>
      </div>
    </footer>
  );
}
