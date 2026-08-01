import React from "react";
import WhatWeDo from "../_components/WhatWeDoSection";
import programmesData from "../data/WhatWeDoSection.json";

export default function WhatWeDoPage() {
  return (
    <main className="w-full flex flex-col font-sans bg-[#FBF9F5] min-h-screen antialiased">
      {/* 1. TOP HEADER SECTION (Two-tone background like the Projects page) */}
      <section className="w-full bg-[#F5F2EA] py-20 md:py-24 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col items-start text-left">
            {/* Eyebrow - Updated to official #D95D39 */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#D95D39]"></div>
              <span className="text-[#D95D39] text-xs font-bold tracking-[0.2em] uppercase">
                What We Do
              </span>
            </div>

            {/* Main Heading - Updated to #1A1A1A and exact typography scales */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-[1.15] mb-6">
              Five programmes, woven together by one principle: communities
              lead, we walk beside.
            </h1>

            {/* Subtitle - Added font-light for visual hierarchy */}
            <p className="max-w-2xl text-lg text-gray-600 font-light leading-relaxed">
              Our interventions are rooted in operational research and shaped by
              the communities we serve — never imposed from above.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES LIST SECTION (Standardized width and padding) */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-24 lg:gap-32">
            {programmesData.map((programme, index) => (
              <WhatWeDo
                key={programme.id}
                id={programme.id}
                title={programme.title}
                description={programme.description}
                features={programme.features}
                image={programme.image}
                icon={programme.icon}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
