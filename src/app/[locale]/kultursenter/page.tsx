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
  return { title: dict.kultursenter.heading };
}

export default async function KultursenterPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const t = dict.kultursenter;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heading} lede={t.intro} />

      {/* Museum + Library */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>{t.museumHeading}</h2>
              <p className="lede">{t.museumBody}</p>
            </div>
            <Photo
              src="/photos/kvernhuset.jpg"
              alt="Kvernhuset – tradisjonell tømmerbygning med torvtak i høstfarger"
            />
          </div>

          <div className="split" style={{ marginTop: "3rem" }}>
            <Photo
              src="/photos/sunset.jpg"
              alt="Solnedgang over tunet ved Stor-Elvdal Hotell"
            />
            <div>
              <h2>{t.libraryHeading}</h2>
              <p className="lede">{t.libraryBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treasures */}
      <section className="section section--cream">
        <div className="container">
          <h2>{t.treasuresHeading}</h2>
          <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
            <ul className="tick-list">
              {t.treasures
                .slice(0, Math.ceil(t.treasures.length / 2))
                .map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
            <ul className="tick-list">
              {t.treasures
                .slice(Math.ceil(t.treasures.length / 2))
                .map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Art + sculpture */}
      <section className="section section--forest">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>{t.artHeading}</h2>
              <p className="lede">{t.artBody}</p>
            </div>
            <div>
              <h2>{t.sculptureHeading}</h2>
              <p className="lede">{t.sculptureBody}</p>
            </div>
          </div>
          <p className="note">{t.externalNote}</p>
        </div>
      </section>

      {/* Tours */}
      <section className="section">
        <div className="container">
          <h2>{t.toursHeading}</h2>
          <p className="lede">{t.toursBody}</p>
        </div>
      </section>

      <CtaBand
        heading={t.ctaHeading}
        body={t.ctaBody}
        ctaLabel={dict.common.bookTour}
        ctaHref={href(locale, "kontakt")}
        external={false}
      />
    </>
  );
}
