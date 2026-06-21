import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero, Media } from "@/components/sections";
import { SceneTun, SceneGallery } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return { title: dict.about.heading };
}

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.about;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heading} lede={t.intro} />

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2>{t.historyHeading}</h2>
              <p className="lede">{t.historyBody}</p>
            </div>
            <Media>
              <SceneTun />
            </Media>
          </div>

          <div className="fact-grid">
            {t.facts.map((f) => (
              <div className="fact" key={f.label}>
                <div className="fact__value">{f.value}</div>
                <div className="fact__label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="split">
            <Media>
              <SceneTun />
            </Media>
            <div>
              <h2>{t.tunHeading}</h2>
              <p className="lede">{t.tunBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container">
          <div className="split">
            <div>
              <h2>{t.ownerHeading}</h2>
              <p className="lede">{t.ownerBody}</p>
            </div>
            <Media>
              <SceneGallery />
            </Media>
          </div>
        </div>
      </section>
    </>
  );
}
