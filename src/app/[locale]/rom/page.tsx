import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHero, CtaBand } from "@/components/sections";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return { title: dict.rooms.heading };
}

export default async function RoomsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const t = dict.rooms;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heading} lede={t.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {t.list.map((room) => (
              <article className="card card--lift" key={room.name}>
                <h3 className="mt-0">{room.name}</h3>
                <p style={{ margin: 0 }}>{room.text}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-2" style={{ marginTop: "3rem" }}>
            <div>
              <h2>{t.factsHeading}</h2>
              <ul className="tick-list">
                {t.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="note" style={{ marginTop: "3.2rem" }}>
                {t.inventoryNote}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading={t.ctaHeading}
        body={t.ctaBody}
        ctaLabel={dict.common.bookRoom}
      />
    </>
  );
}
