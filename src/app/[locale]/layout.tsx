import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Inter } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n/config";

// Display serif (variable: full weight range + true optical sizing) for
// headings; clean grotesk for body.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif-web",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans-web",
});
import { getDictionary } from "@/i18n/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const title = `${dict.meta.siteName} — ${dict.meta.tagline}`;
  const ogLocale = locale === "no" ? "nb_NO" : locale === "de" ? "de_DE" : "en_US";
  return {
    metadataBase: new URL("https://stor-elvdal-hotell.surge.sh"),
    title: {
      default: title,
      template: `%s · ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    applicationName: dict.meta.siteName,
    authors: [{ name: dict.meta.siteName }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        nb: "/no",
        en: "/en",
        de: "/de",
        "x-default": "/no",
      },
    },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: ogLocale,
      images: [
        {
          url: "/photos/hero.jpg",
          width: 2000,
          height: 1506,
          alt: `${dict.meta.siteName}, ${dict.meta.place}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dict.meta.description,
      images: ["/photos/hero.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!(i18n.locales as readonly string[]).includes(locale)) {
    notFound();
  }
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {/* Apply saved/system theme before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();",
          }}
        />
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
