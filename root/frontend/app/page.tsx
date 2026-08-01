import Link from "next/link";
import React from "react";

export default function HomePage() {
  const domains = [
    {
      title: "Watershed Development",
      description: "Check dams, farm ponds & water security.",
      span: "md:col-span-3",
      bgImage:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Sustainable Agriculture",
      description: "FPOs, millets revival & climate-resilient farming.",
      span: "md:col-span-3",
      bgImage:
        "https://images.unsplash.com/photo-1592982537447-6f296d19ecaa?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Women's Empowerment",
      description: "Self-Help Groups, livelihoods & leadership.",
      span: "md:col-span-2",
      bgImage:
        "https://images.unsplash.com/photo-1622340356501-4475ccaf0de3?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Child Rights",
      description: "Education access & anti-trafficking outreach.",
      span: "md:col-span-2",
      bgImage:
        "https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Health & Nutrition",
      description: "Mobile medical units & community wellbeing.",
      span: "md:col-span-2",
      bgImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    // Added 'antialiased' here to make fonts sharper
    <main className="w-full flex flex-col font-sans bg-[#FBF9F5] antialiased overflow-hidden">
      {/* Inline styles for the Trusted By marquee animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center bg-zinc-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#D95D39]"></div>
            <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
              Rural India · Since 1991
            </span>
          </div>
          {/* Reduced text size slightly (lg:text-6xl) to zoom out */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6 max-w-4xl">
            Building dignity where it's needed most.
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl font-light">
            Building dignity, equity, and hope for rural communities since 1991.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/donate"
              className="bg-[#D95D39] hover:bg-[#c2502f] text-white px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              Our Story →
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-8 md:gap-24 text-white">
            <div>
              <h3 className="text-3xl font-serif mb-1">33+</h3>
              <p className="text-xs tracking-wider uppercase text-gray-300 font-semibold">
                Years of Service
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-1">4,800</h3>
              <p className="text-xs tracking-wider uppercase text-gray-300 font-semibold">
                Women in SHGs
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-1">142</h3>
              <p className="text-xs tracking-wider uppercase text-gray-300 font-semibold">
                Check Dams Built
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#D95D39]"></div>
              <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
                About Us
              </span>
            </div>
            {/* Adjusted from 5xl to 4xl */}
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight pr-4">
              A grassroots organisation rooted in the soil of Kurnool.
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center text-gray-600 space-y-6 text-base md:text-lg">
            <p>
              Nava Youth Association (NYA) is a non-profit, non-political
              grassroots organization headquartered in Kurnool, Andhra Pradesh.
              For over three decades we have partnered with rural communities to
              build a fairer, greener, more prosperous countryside.
            </p>
            <p>
              Our work bridges evidence-based research with community wisdom —
              restoring watersheds, federating farmer collectives, empowering
              women, and protecting children's rights.
            </p>
            <Link
              href="/about"
              className="text-[#D95D39] font-medium hover:underline w-max mt-2 text-sm md:text-base"
            >
              Read our full story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (DOMAINS) SECTION */}
      <section className="w-full py-20 bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#D95D39]"></div>
            <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight mb-12 max-w-2xl">
            Five domains. One philosophy: dignity through cooperation.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {domains.map((domain, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl h-72 md:h-80 ${domain.span} cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${domain.bgImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm font-light">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RECENT PROJECTS SECTION */}
      <section className="w-full py-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-[#D95D39]"></div>
                <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
                  Recent Projects
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight max-w-2xl">
                Work that has shaped lives & landscapes.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-[#D95D39] font-medium hover:underline flex items-center gap-2 whitespace-nowrap mb-2 text-sm md:text-base"
            >
              View all projects &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Project 1 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full h-56 md:h-64 bg-gray-200 rounded-2xl overflow-hidden mb-6">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/project-watershed.jpg')" }}
                ></div>
              </div>
              <p className="text-[#D95D39] text-[10px] font-bold tracking-wider uppercase mb-3">
                NABARD · 2019–2024
              </p>
              <h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] mb-3">
                Integrated Watershed Development Programme
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Construction of 142 check dams, 87 farm ponds, and 23 rock-fill
                dams across 12 villages in Kurnool district — recharging
                groundwater for over 4,500 farming households.
              </p>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full h-56 md:h-64 bg-gray-200 rounded-2xl overflow-hidden mb-6">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/project-fpo.jpg')" }}
                ></div>
              </div>
              <p className="text-[#D95D39] text-[10px] font-bold tracking-wider uppercase mb-3">
                NABARD / SFAC · 2020–PRESENT
              </p>
              <h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] mb-3">
                Farmer Producer Organization (FPO) Promotion
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mobilized 3,200 smallholder farmers into 4 FPOs, providing
                market linkages, post-harvest infrastructure and access to
                institutional credit.
              </p>
            </div>
            {/* Project 3 */}
            <div className="flex flex-col group cursor-pointer">
              <div className="w-full h-56 md:h-64 bg-gray-200 rounded-2xl overflow-hidden mb-6">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/project-women.jpg')" }}
                ></div>
              </div>
              <p className="text-[#D95D39] text-[10px] font-bold tracking-wider uppercase mb-3">
                JSW FOUNDATION · 2018–PRESENT
              </p>
              <h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] mb-3">
                Women Empowerment & Livelihoods
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Federation of 320 women's Self-Help Groups facilitating savings,
                microenterprise and leadership training — touching 4,800 women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUSTED BY SECTION (Bulletproof Infinite Scroll) */}
      <section className="w-full py-16 bg-[#FBF9F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#D95D39]"></div>
            <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
              Trusted By
            </span>
            <div className="h-[1px] w-8 bg-[#D95D39]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A]">
            Three decades of partnership with India’s most respected
            institutions.
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full flex overflow-hidden opacity-50 grayscale hover:opacity-80 transition-opacity duration-300">
          {/* We render 4 separate blocks that EACH slide infinitely. */}
          {[1, 2, 3, 4].map((set) => (
            <div
              key={set}
              // Used bracket notation for a massive, valid Tailwind gap!
              className="flex shrink-0 animate-scroll items-center pr-[15rem] md:pr-[30rem]"
            >
              <span className="text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap pr-16 md:pr-24">
                SUZLON Foundation
              </span>
              <span className="text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap pr-16 md:pr-24">
                NITI Aayog
              </span>
              <span className="text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap pr-16 md:pr-24">
                Ministry of Rural Development
              </span>
              <span className="text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap pr-16 md:pr-24">
                NABARD
              </span>
              <span className="text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap pr-16 md:pr-24">
                World Bank
              </span>
              <span className="text-xl md:text-2xl font-bold text-gray-500 whitespace-nowrap">
                JSW Foundation
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. IMPACT CTA BANNER (Expanded Width) */}
      <section className="w-full py-24 bg-[#FBF9F5]">
        {/* Changed from max-w-5xl to max-w-7xl to make the box longer/wider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1C3F36] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <div className="md:w-2/3 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-[#D95D39]"></div>
                <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
                  Stand with rural India
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-4 max-w-2xl">
                Every rupee plants water, dignity & a future.
              </h2>
              <p className="text-gray-300 font-light max-w-lg text-sm md:text-base leading-relaxed">
                Donations to NYA are eligible for 50% tax deduction under
                Section 80G. Top contributors receive a personalised thank-you
                card.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-start md:justify-end relative z-10">
              <Link
                href="/donate"
                className="bg-[#D95D39] hover:bg-[#c2502f] text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2 w-full md:w-auto justify-center text-base md:text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
