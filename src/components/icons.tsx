// Lightweight inline SVGs — no external image assets needed for the prototype.

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="3" y="3" width="42" height="42" rx="3" fill="#243024" />
      {/* stylised tun: log cabin + roof */}
      <path d="M11 30l13-11 13 11v9H11z" fill="#be8a3e" />
      <path d="M9 31L24 19l15 12" stroke="#f6f0e3" strokeWidth="2" fill="none" />
      <rect x="21" y="32" width="6" height="7" fill="#243024" />
    </svg>
  );
}

// Pillar icons share a soft "badge" disc with a clean line glyph for a
// consistent, refined look on the home cards.
const DISC = "rgba(169, 113, 47, 0.1)";

export function IconFood({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" fill={DISC} />
      <g
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 13v6a2.6 2.6 0 0 0 5.2 0v-6" />
        <path d="M20.6 13v6" />
        <path d="M20.6 21.2v13.8" />
        <path d="M30 13v22" />
        <path d="M30 13c4 1 4 9.5 0 11.5" />
      </g>
    </svg>
  );
}

export function IconArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" fill={DISC} />
      <g
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="13" y="14" width="22" height="16" rx="2" />
        <path d="M16 27l4-5 3 3 4-5 5 7" />
        <circle cx="19" cy="19" r="1.5" fill="currentColor" stroke="none" />
        <path d="M19.5 30v5M28.5 30v5" />
      </g>
    </svg>
  );
}

export function IconNature({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" fill={DISC} />
      <g
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32.5" cy="16" r="2.6" />
        <path d="M11.5 35l8.5-13.5 5 7 3.5-5.5 8 12z" />
      </g>
    </svg>
  );
}

// Scenic Rondane landscape — layered peaks, low sun, lake reflection, pines.
export function SceneLandscape() {
  return (
    <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="ls-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a4a55" />
          <stop offset="0.55" stopColor="#7a6a52" />
          <stop offset="1" stopColor="#caa15c" />
        </linearGradient>
        <linearGradient id="ls-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c89a52" />
          <stop offset="1" stopColor="#2f3e30" />
        </linearGradient>
      </defs>
      {/* sky + sun */}
      <rect width="400" height="210" fill="url(#ls-sky)" />
      <circle cx="285" cy="120" r="34" fill="#f1d9a6" opacity="0.92" />
      <circle cx="285" cy="120" r="50" fill="#f1d9a6" opacity="0.18" />
      {/* far range */}
      <path d="M0 150L70 96l55 38 60-54 70 50 80-40 65 36v34H0z" fill="#557484" opacity="0.7" />
      {/* near range */}
      <path d="M0 180L90 118l70 46 80-52 80 50 80-28v96H0z" fill="#3c5560" />
      {/* lake */}
      <rect y="210" width="400" height="110" fill="url(#ls-lake)" />
      {/* sun reflection */}
      <rect x="270" y="212" width="30" height="98" fill="#f1d9a6" opacity="0.25" />
      {/* mountain reflection */}
      <path d="M0 210L90 248l70-30 80 32 80-30 80 20v-2H0z" fill="#2a3a32" opacity="0.6" />
      {/* foreground pines */}
      <g fill="#1c261f">
        <path d="M40 232l12 24h-24zM40 246l14 26H26zM38 262h4v22h-4z" />
        <path d="M360 224l14 28h-28zM360 240l16 30h-32zM358 258h4v26h-4z" />
        <path d="M86 250l9 18h-18zM86 260l11 20H75zM84 272h4v16h-4z" />
      </g>
    </svg>
  );
}

// Decorative scene used as a "media" placeholder in split sections.
export function SceneTun() {
  return (
    <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="320" fill="#34505d" />
      <rect y="150" width="400" height="170" fill="#2f3e30" />
      {/* Rondane silhouette */}
      <path d="M0 150L70 95l50 35 60-55 70 50 80-45 60 40v30H0z" fill="#557484" opacity="0.55" />
      {/* fence */}
      <g stroke="#1c261f" strokeWidth="3">
        <path d="M20 250l30-12M55 250l30-12M90 250l30-12" opacity="0.5" />
      </g>
      {/* cabins */}
      <g>
        <path d="M120 250l45-30 45 30v40h-90z" fill="#a9712f" />
        <path d="M118 251l47-31 47 31" stroke="#f6f0e3" strokeWidth="3" fill="none" />
        <rect x="155" y="262" width="20" height="28" fill="#243024" />
        <path d="M230 255l35-24 35 24v35h-70z" fill="#be8a3e" />
        <rect x="258" y="266" width="15" height="24" fill="#243024" />
      </g>
      {/* sculpture glint */}
      <circle cx="330" cy="120" r="5" fill="#d2a85c" />
    </svg>
  );
}

// Clean antlered-moose silhouette (no background) — used as a hero watermark.
export function MooseSilhouette({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 240" fill="currentColor" aria-hidden>
      <g>
        <path d="M100 140c-6-30 4-55 14-50 4-22 18-26 22-10 10-6 16 0 12 12 18-4 26 6 22 18l-10 4 6 20-12 4 4 22h-12l-4-22-20 2-2 24h-12l-2-26c-10-2-16-12-14-20z" />
        <path d="M100 200l6 70h10l2-66zM160 200l4 70h10l-4-70z" />
      </g>
      <path d="M100 90c-12-14-30-12-34-26M146 86c12-16 30-16 34-30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function SceneMoose() {
  return (
    <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="moose-sky" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#22302a" />
          <stop offset="1" stopColor="#10160f" />
        </linearGradient>
        <radialGradient id="moose-glow" cx="0.7" cy="0.25" r="0.7">
          <stop offset="0" stopColor="#d2a85c" stopOpacity="0.35" />
          <stop offset="1" stopColor="#d2a85c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="320" fill="url(#moose-sky)" />
      <rect width="400" height="320" fill="url(#moose-glow)" />
      <g opacity="0.6" fill="#243024">
        <path d="M0 320l40-90 40 90zM70 320l45-110 45 110zM150 320l50-130 50 130zM260 320l45-100 45 100z" />
      </g>
      {/* moose silhouette in bright steel */}
      <g fill="#cfd9dc">
        <path d="M150 140c-6-30 4-55 14-50 4-22 18-26 22-10 10-6 16 0 12 12 18-4 26 6 22 18l-10 4 6 20-12 4 4 22h-12l-4-22-20 2-2 24h-12l-2-26c-10-2-16-12-14-20z" />
        <path d="M150 200l6 70h10l2-66zM210 200l4 70h10l-4-70z" />
      </g>
      <path d="M150 90c-12-14-30-12-34-26M196 86c12-16 30-16 34-30" stroke="#cfd9dc" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function SceneWinter() {
  return (
    <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a2b3a" />
          <stop offset="1" stopColor="#34505d" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#sky)" />
      <circle cx="320" cy="70" r="3" fill="#e4d7bd" />
      <circle cx="280" cy="50" r="2" fill="#e4d7bd" />
      <circle cx="350" cy="110" r="2" fill="#e4d7bd" />
      {/* Rondane massif, frozen blues */}
      <path d="M0 200L80 110l60 50 70-80 90 70 100-50v220H0z" fill="#557484" />
      <path d="M0 230L90 160l70 40 80-50 80 50 80-30v170H0z" fill="#91aab5" opacity="0.85" />
      <rect y="280" width="400" height="40" fill="#f6f0e3" opacity="0.9" />
    </svg>
  );
}

export function SceneGallery() {
  return (
    <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="gal-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2c3a2c" />
          <stop offset="1" stopColor="#1a231b" />
        </linearGradient>
        <linearGradient id="gal-frame1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#557484" />
          <stop offset="1" stopColor="#34505d" />
        </linearGradient>
        <linearGradient id="gal-frame2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34505d" />
          <stop offset="1" stopColor="#1c261f" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="url(#gal-bg)" />
      <rect x="30" y="40" width="150" height="110" rx="3" fill="url(#gal-frame1)" stroke="#be8a3e" strokeWidth="3" />
      <path d="M40 140l40-45 30 25 25-30 35 50z" fill="#91aab5" />
      <circle cx="70" cy="70" r="9" fill="#d2a85c" />
      <rect x="220" y="60" width="150" height="180" rx="3" fill="url(#gal-frame2)" stroke="#be8a3e" strokeWidth="3" />
      <path d="M240 230c0-60 20-110 55-110s55 50 55 110z" fill="#557484" />
      <rect x="40" y="200" width="320" height="14" rx="2" fill="#a9712f" />
    </svg>
  );
}
