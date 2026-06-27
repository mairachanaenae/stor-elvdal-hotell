import { BOOKING_URL } from "@/lib/nav";

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="page-hero">
      <div className="container">
        {kicker ? <span className="kicker">{kicker}</span> : null}
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}

export function CtaBand({
  heading,
  body,
  ctaLabel,
  ctaHref,
  external = true,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  external?: boolean;
}) {
  const href = ctaHref ?? BOOKING_URL;
  return (
    <section className="section section--rondane">
      <div className="container center">
        <h2>{heading}</h2>
        <p className="lede">{body}</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <a
            className="btn btn--primary"
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Media({ children }: { children: React.ReactNode }) {
  return <div className="media">{children}</div>;
}

export function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="media">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
