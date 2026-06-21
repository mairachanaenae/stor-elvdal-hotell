import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero, Media } from "@/components/sections";
import { SceneTun } from "@/components/icons";

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
            <Media>
              <SceneTun />
            </Media>
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>{t.aquavitHeading}</h2>
              <p className="lede">{t.aquavitBody}</p>
            </div>
            <div>
              <h2>{t.pubHeading}</h2>
              <p className="lede">{t.pubBody}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
