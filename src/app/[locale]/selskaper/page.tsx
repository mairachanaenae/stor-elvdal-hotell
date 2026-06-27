import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero, CtaBand, Photo } from "@/components/sections";
import { href } from "@/lib/nav";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return { title: dict.events.heading, description: dict.events.intro };
}

export default async function EventsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const t = dict.events;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heading} lede={t.intro} />

      <section className="section">
        <div className="container">
          <div className="split">
            <Photo
              src="/photos/market.jpg"
              alt="Sommermarked med telt på plenen foran hotellet og det røde klokketårnet"
            />
            <div>
              <h2>{t.barfrostuaHeading}</h2>
              <p className="lede">{t.barfrostuaBody}</p>
            </div>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2>{t.featuresHeading}</h2>
            <ul className="tick-list">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        heading={t.ctaHeading}
        body={t.ctaBody}
        ctaLabel={dict.nav.contact}
        ctaHref={href(locale, "kontakt")}
        external={false}
      />
    </>
  );
}
