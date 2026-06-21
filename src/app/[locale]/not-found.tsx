import Link from "next/link";

// Locale-scoped 404 — rendered inside the locale layout, which owns <html>/<body>.
export default function NotFound() {
  return (
    <section className="section section--forest" style={{ minHeight: "60vh" }}>
      <div className="container center">
        <h1 style={{ fontSize: "4rem" }}>404</h1>
        <p className="lede">
          Siden finnes ikke · Page not found · Seite nicht gefunden
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link className="btn btn--primary" href="/no">
            Stor-Elvdal Hotell →
          </Link>
        </div>
      </div>
    </section>
  );
}
