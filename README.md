# Stor-Elvdal Hotell — Trilingual Website Prototype

A prototype marketing website for **Stor-Elvdal Hotell** in Koppang, Østerdalen — a
boutique heritage hotel built around a *tun* (farmstead cluster) of nine protected
timber buildings, with its own **Norsk Kultursenter**.

Built with **Next.js (App Router)** and fully **trilingual**: Norwegian (`no`,
default), English (`en`) and German (`de`).

## Highlights

- **i18n routing** via middleware — every path is served under a locale prefix
  (`/no`, `/en`, `/de`). The language switcher preserves the current page.
- **Server-side dictionaries** — all copy lives in `src/i18n/dictionaries/*.json`,
  one file per language, keeping translation payloads out of the client bundle.
- **Full site structure** mirroring the live site: Home, Rooms & apartments,
  Restaurant & bar, Meetings & conferences, Celebrations, **Norsk Kultursenter**
  (the hero differentiator), About us and Contact.
- **No external image assets** — the heritage aesthetic (timber tun, Rondane,
  the Storelgen moose) is rendered with inline SVG so the prototype runs anywhere.

## Getting started

### Option A — Docker (no Node.js needed)

One command builds and runs everything:

```bash
docker compose up --build
```

Then open **http://localhost:3000**. Stop with `Ctrl+C` (or `docker compose down`).

Plain Docker, without compose:

```bash
docker build -t stor-elvdal-hotell .
docker run --rm -p 3000:3000 stor-elvdal-hotell
```

### Option B — Node.js (for development)

Requires Node.js 18.17+ (built/tested on Node 22).

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /no (hot reload)
npm run build    # optimized production build
npm run start    # serve the production build
```

Switch languages with the `no / en / de` toggle in the header, or go straight to
`/en`, `/de`, `/en/kultursenter`, etc. Change the port with `npm run dev -- -p 3001`.

## Project structure

```
src/
  middleware.ts                 # locale detection + redirect
  i18n/
    config.ts                   # locales, default
    dictionaries.ts             # server-only loader
    dictionaries/{no,en,de}.json
  lib/nav.ts                    # nav items, slugs, Visbook booking URL
  components/                   # Header, Footer, LanguageSwitcher, sections, icons
  app/
    [locale]/
      layout.tsx                # root layout (<html lang>), header + footer
      page.tsx                  # home
      rom/ restaurant/ kurs-konferanse/ selskaper/
      kultursenter/ om-oss/ kontakt/
    not-found.tsx
    globals.css
```

## Content notes (from the factual content pack)

The copy is grounded in publicly available information and respects these caveats:

- **Storelgen** is described as *"the world's largest moose sculpture when unveiled
  in 2015, today the world's second-tallest"* (it lost the title to Canada's *Mac the
  Moose* on 8 October 2019).
- **2026 fly-fishing championships**: the Masters (WMFFC) is Koppang-based while the
  Ladies (WLFFC) is based in Åkrestrømmen — the hotel is **not** stated as the
  official athletes' accommodation.
- The pub appears as **"Askeladden"** on the official site and **"Nye Ladden"** on
  its Facebook/Tripadvisor presence; both names are noted.

Before any real launch, verify with the hotel: current sellable room inventory and
rates (via Visbook), the live Tunet kafè menu, the pub name, and the current
art-tour schedule.

Booking is handled externally via **Visbook** (`reservations.visbook.com/2158`).
