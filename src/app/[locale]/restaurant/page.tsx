import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero, Photo } from "@/components/sections";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return { title: dict.restaurant.heading };
}

export default async function RestaurantPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.restaurant;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heading} lede={t.intro} />

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>{t.menuHeading}</h2>
              <ul className="tick-list">
                {t.menuItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="note">{t.menuNote}</p>
            </div>
            <Photo
              src="/photos/cabin.jpg"
              alt="Lun tømmerbygning med torvtak i kveldssol"
            />
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container">
          <div className="split">
            <div>
              <h2>{t.aquavitHeading}</h2>
              <p className="lede">{t.aquavitBody}</p>
              <h2 style={{ marginTop: "2rem" }}>{t.pubHeading}</h2>
              <p className="lede">{t.pubBody}</p>
            </div>
            <Photo
              src="/photos/askeladden.jpg"
              alt="Puben «Askeladden» i kveldssol, speilet i en vannpytt"
            />
          </div>
        </div>
      </section>
    </>
  );
}
