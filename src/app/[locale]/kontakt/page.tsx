import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero } from "@/components/sections";
import { BOOKING_URL } from "@/lib/nav";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return { title: dict.contact.heading };
}

export default async function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.contact;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heading} lede={t.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h3 className="mt-0">{t.addressLabel}</h3>
              <p>{t.address}</p>

              <h3>{t.phoneLabel}</h3>
              <p>
                <a href="tel:+4762460455">{t.phone}</a>
              </p>

              <h3>{t.mobileLabel}</h3>
              <p>
                <a href="tel:+4792818465">{t.mobile}</a>
              </p>

              <h3>{t.emailLabel}</h3>
              <p>
                <a href={`mailto:${t.email}`}>{t.email}</a>
              </p>

              <h3>{t.hoursLabel}</h3>
              <p>{t.hours}</p>
            </div>

            <div className="card">
              <h3 className="mt-0">{t.bookingHeading}</h3>
              <p>{t.bookingBody}</p>
              <a
                className="btn btn--primary"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.bookingCta}
              </a>

              <h3 style={{ marginTop: "2rem" }}>{t.getThereHeading}</h3>
              <p style={{ margin: 0 }}>{t.getThereBody}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
