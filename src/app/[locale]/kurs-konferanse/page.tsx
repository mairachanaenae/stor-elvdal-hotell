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
  return { title: dict.meetings.heading, description: dict.meetings.intro };
}

export default async function MeetingsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const t = dict.meetings;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heading} lede={t.intro} />

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>{t.featuresHeading}</h2>
              <ul className="tick-list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <Photo
              src="/photos/tower.jpg"
              alt="Det hvite huset og klokketårnet ved hotellet, speilet i vann"
            />
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
