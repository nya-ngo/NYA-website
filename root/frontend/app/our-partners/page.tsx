"use client";
import React from "react";

// Custom SVG Logo components matching the screenshot exact partner logos
const NabardLogo = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#1b5e20]">
        <path
          d="M20 4L24 14H35L26 20L29 31L20 24L11 31L14 20L5 14H16L20 4Z"
          fill="#2e7d32"
        />
        <path
          d="M20 8C20 8 13 15 13 22C13 26 16 29 20 29C24 29 27 26 27 22C27 15 20 8 20 8Z"
          fill="#1b5e20"
        />
        <path
          d="M20 12V27M20 20L16 16M20 23L24 19"
          stroke="#81c784"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-800 font-sans">
      NABARD
    </span>
  </div>
);

const NitiAayogLogo = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="16" stroke="#0288d1" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="6" fill="#e65100" />
        <path
          d="M20 4V10M20 30V36M4 20H10M30 20H36M8.7 8.7L12.9 12.9M27.1 27.1L31.3 31.3M8.7 31.3L12.9 27.1M27.1 12.9L31.3 8.7"
          stroke="#0288d1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-800 font-sans">
      NITI Aayog
    </span>
  </div>
);

const RuralDevLogo = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path
          d="M20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C28.84 36 36 28.84 36 20C36 11.16 28.84 4 20 4ZM20 8C26.63 8 32 13.37 32 20C32 26.63 26.63 32 20 32C13.37 32 8 26.63 8 20C8 13.37 13.37 8 20 8Z"
          fill="#00695c"
        />
        <path d="M20 12L23 18H17L20 12Z" fill="#d95d39" />
        <rect x="18" y="18" width="4" height="10" rx="1" fill="#00695c" />
      </svg>
    </div>
    <span className="text-base md:text-lg font-bold leading-tight text-zinc-800 font-sans text-left">
      Ministry of Rural
      <br />
      Development
    </span>
  </div>
);

const WorldBankLogo = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#0071ce]">
        <circle cx="15" cy="20" r="11" stroke="#0071ce" strokeWidth="2.5" />
        <circle cx="25" cy="20" r="11" stroke="#0071ce" strokeWidth="2.5" />
        <path d="M4 20H36M20 4V36" stroke="#0071ce" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    </div>
    <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-800 font-sans">
      World Bank
    </span>
  </div>
);

const JswFoundationLogo = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path d="M6 10L16 10L11 30L1 30L6 10Z" fill="#d32f2f" />
        <path d="M16 10L26 10L21 30L11 30L16 10Z" fill="#1976d2" />
        <path d="M26 10L36 10L31 30L21 30L26 10Z" fill="#388e3c" />
      </svg>
    </div>
    <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-800 font-sans">
      JSW Foundation
    </span>
  </div>
);

const SuzlonFoundationLogo = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path
          d="M10 28C10 28 14 12 28 12C28 12 22 24 10 28Z"
          fill="#2e7d32"
        />
        <path
          d="M12 32C12 32 26 28 30 14C30 14 20 22 12 32Z"
          fill="#4caf50"
        />
      </svg>
    </div>
    <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-800 font-sans">
      SUZLON Foundation
    </span>
  </div>
);

// Partner Section Interface
interface Partner {
  id: string;
  name: string;
  logo: React.ReactNode;
}

interface CategorySection {
  kicker: string;
  description: string;
  partners: Partner[];
}

const partnerCategories: CategorySection[] = [
  {
    kicker: "GOVERNMENT PARTNERS",
    description: "Public-sector institutions that anchor NYA's grassroots work.",
    partners: [
      { id: "nabard", name: "NABARD", logo: <NabardLogo /> },
      { id: "niti-aayog", name: "NITI Aayog", logo: <NitiAayogLogo /> },
      {
        id: "mord",
        name: "Ministry of Rural Development",
        logo: <RuralDevLogo />,
      },
    ],
  },
  {
    kicker: "INTERNATIONAL INSTITUTIONS",
    description: "Global development partners supporting our long-term programs.",
    partners: [
      { id: "world-bank", name: "World Bank", logo: <WorldBankLogo /> },
    ],
  },
  {
    kicker: "CORPORATE / CSR PARTNERS",
    description: "Companies that have invested in rural transformation through us.",
    partners: [
      { id: "jsw", name: "JSW Foundation", logo: <JswFoundationLogo /> },
      { id: "suzlon", name: "SUZLON Foundation", logo: <SuzlonFoundationLogo /> },
    ],
  },
];

export default function OurPartnersPage() {
  return (
    <main className="font-sans antialiased">
      {/* ── 1. HERO SECTION (Matching Contact page exact font sizes and paddings) ── */}
      <section
        style={{ backgroundColor: "#F5F2EA" }}
        className="px-6 md:px-16 lg:px-28 xl:px-36 pt-20 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* Kicker matching Contact page */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D95D39]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">
                SUPPORTERS
              </span>
            </div>

            {/* Title matching Contact page h1 */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-zinc-900 leading-tight mb-8">
              Thirty years of partnership.
            </h1>

            {/* Subtitle matching Contact page p */}
            <p className="text-zinc-600 text-lg leading-relaxed">
              From NABARD to JSW Foundation, from the World Bank to NITI Aayog,
              we are grateful to every institution that has walked with us.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. PARTNERS CATEGORIES SECTION (Matching Contact page body) ── */}
      <section
        style={{ backgroundColor: "#FBF9F5" }}
        className="px-6 md:px-16 lg:px-28 xl:px-36 py-20"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {partnerCategories.map((category) => (
            <div key={category.kicker} className="w-full">
              {/* Category Kicker matching Contact page */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D95D39]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">
                  {category.kicker}
                </span>
              </div>

              {/* Category Subtitle */}
              <p className="text-zinc-600 text-base md:text-lg mb-8 max-w-2xl font-normal">
                {category.description}
              </p>

              {/* Partner Cards Grid - 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-2xl border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 p-8 min-h-[140px] md:min-h-[160px] flex items-center justify-center"
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
