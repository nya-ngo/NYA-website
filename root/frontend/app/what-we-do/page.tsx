import React from "react";
import WhatWeDo from "../_components/WhatWeDoSection";
import programmesData from "../data/WhatWeDoSection.json";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f4] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-24 lg:mb-32 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#c25934]"></div>
            <span className="text-sm font-semibold tracking-widest text-[#c25934] uppercase">
              What We Do
            </span>
          </div>

          {/* Adjusted the text size classes below */}
          <h1 className="text-3xl md:text-4xl lg:text-[56px] font-serif text-gray-800 leading-tight mb-8">
            Five programmes, woven together by one principle: communities lead,
            we walk beside.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Our interventions are rooted in operational research and shaped by
            the communities we serve — never imposed from above.
          </p>
        </section>

        {/* Programmes List Section */}
        <section className="flex flex-col gap-24 lg:gap-32">
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
        </section>
      </div>
    </main>
  );
}