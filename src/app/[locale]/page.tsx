import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { href, BOOKING_URL } from "@/lib/nav";
import { CtaBand, Media } from "@/components/sections";
import { IconFood, IconArt, IconNature } from "@/components/icons";

const pillarIcons = [IconFood, IconArt, IconNature];
const pillarLinks = ["restaurant", "kultursenter", "kontakt"];

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const t = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="hero hero--photo">
        <div className="hero__inner">
          <span className="kicker">{t.heroKicker}</span>
          <h1>{dict.meta.tagline}</h1>
          <p className="hero__sub">{dict.meta.subtagline}</p>
          <div className="btn-row">
            <a
              className="btn btn--primary"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.heroCtaBook}
            </a>
            <Link className="btn btn--ghost" href={href(locale, "kultursenter")}>
              {t.heroCtaExplore}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="kicker">{dict.meta.place} · Østerdalen</span>
              <h2>{t.introHeading}</h2>
              <p className="lede">{t.introBody}</p>
              <p>{t.introBody2}</p>
            </div>
            <Media>
              <img
                src="/photos/tun-summer.jpg"
                alt="Tunet en sommerdag – torvtekte tømmerhus rundt gresstunet og det norske flagget til værs"
                loading="lazy"
              />
            </Media>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section section--cream">
        <div className="container">
          <h2 className="center">{t.pillarsHeading}</h2>
          <div className="grid grid-3" style={{ marginTop: "2.5rem" }}>
            {t.pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? IconNature;
              return (
                <article className="card card--lift pillar" key={p.title}>
                  <Icon className="pillar__icon" />
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <Link href={href(locale, pillarLinks[i] ?? "")}>{p.link} →</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kultursenter hero */}
      <section className="section section--forest">
        <div className="container">
          <div className="split">
            <Media>
              <img
                src="/photos/cabin.jpg"
                alt="Tradisjonell tømmerbygning med torvtak i kveldssol"
                loading="lazy"
              />
            </Media>
            <div>
              <span className="kicker">{t.kultursenterKicker}</span>
              <h2>{t.kultursenterHeading}</h2>
              <p className="lede">{t.kultursenterBody}</p>
              <div className="btn-row">
                <Link
                  className="btn btn--primary"
                  href={href(locale, "kultursenter")}
                >
                  {t.kultursenterCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location + green shortcut */}
      <section className="section">
        <div className="container">
          <span className="kicker">{t.locationKicker}</span>
          <h2>{t.locationHeading}</h2>
          <p className="lede">{t.locationBody}</p>
          <div className="fact-grid">
            {t.locationFacts.map((f) => (
              <div className="fact" key={f.label}>
                <div className="fact__value">{f.value}</div>
                <div className="fact__label">{f.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-2" style={{ marginTop: "2.5rem" }}>
            <article className="card">
              <h3>{t.greenShortcutHeading}</h3>
              <p>{t.greenShortcutBody}</p>
            </article>
            <article className="card">
              <h3>{t.mooseHeading}</h3>
              <p>{t.mooseBody}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Nature */}
      <section className="section section--rondane">
        <div className="container">
          <div className="split">
            <div>
              <h2>{t.natureHeading}</h2>
              <p className="lede">{t.natureBody}</p>
            </div>
            <Media>
              <img
                src="/photos/sunset.jpg"
                alt="Solnedgang over tunet på Stor-Elvdal Hotell i Koppang"
                loading="lazy"
              />
            </Media>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section section--cream">
        <div className="container">
          <h2>{t.eventsHeading}</h2>
          <div className="split" style={{ marginTop: "1.5rem" }}>
            <div>
              {t.events.map((ev) => (
                <div className="event" key={ev.title}>
                  <div className="event__date">{ev.date}</div>
                  <div>
                    <h3 className="mt-0">{ev.title}</h3>
                    <p style={{ margin: 0 }}>{ev.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Media>
              <img
                src="/photos/rally.jpg"
                alt="Veterantreff på plenen – tunet har lang tradisjon som arrangementsplass"
                loading="lazy"
              />
            </Media>
          </div>
        </div>
      </section>

      <CtaBand
        heading={t.bookingHeading}
        body={t.bookingBody}
        ctaLabel={t.bookingCta}
      />
    </>
  );
}
