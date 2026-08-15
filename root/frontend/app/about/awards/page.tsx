"use client";

import React, { useState } from "react";

// --- Types ---
type Award = {
  authority: string;
  title: string;
  description: string;
  year: string;
  category: string;
  icon: React.ReactNode;
  fileUrl: string;
};

// --- SVG Icons ---
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75c-.621 0-1.125.504-1.125 1.125v3.375m9 0h-9M4.5 4.5h15m-15 0v3a4.5 4.5 0 0 0 4.5 4.5h6a4.5 4.5 0 0 0 4.5-4.5v-3m-15 0H3m18 0h1.5" />
  </svg>
);

const StarRibbonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const sampleAwardCertificateUrl =
  "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop";

const awardsData: Award[] = [
  {
    authority: "JSW FOUNDATION & SUZLON FOUNDATION",
    title: "CSR Leadership Partner Award",
    description: "Recognized as a trusted implementing partner for high-impact social responsibility, infrastructure development, and community welfare.",
    year: "2023",
    category: "CSR PARTNERSHIP",
    icon: <StarRibbonIcon />,
    fileUrl: sampleAwardCertificateUrl,
  },
  {
    authority: "NITI AAYOG, GOVT. OF INDIA",
    title: "NITI Aayog National Recognition",
    description: "Commended for community-led convergence programmes, operational transparency, and rural livelihood empowerment.",
    year: "2022",
    category: "COMMUNITY CONVERGENCE",
    icon: <TrophyIcon />,
    fileUrl: sampleAwardCertificateUrl,
  },
  {
    authority: "NATIONAL BANK FOR AGRICULTURE",
    title: "NABARD Excellence Award",
    description: "Recognized by NABARD for exemplary leadership in establishing Farmer Producer Organizations (FPOs) and climate-resilient farming.",
    year: "2021",
    category: "SUSTAINABLE AGRICULTURE",
    icon: <StarRibbonIcon />,
    fileUrl: sampleAwardCertificateUrl,
  },
  {
    authority: "STATE COMMISSION FOR CHILD RIGHTS",
    title: "Child Rights Protection Citation",
    description: "Citation of honor for anti-trafficking outreach, back-to-school drives, and safeguarding children's rights in rural mandals.",
    year: "2020",
    category: "CHILD RIGHTS",
    icon: <TrophyIcon />,
    fileUrl: sampleAwardCertificateUrl,
  },
];

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  return (
    <main className="w-full flex flex-col font-sans bg-[#FBF9F5] min-h-screen antialiased">
      
      {/* ── 1. HERO SECTION ── */}
      <section
        style={{ backgroundColor: "#F5F2EA" }}
        className="px-6 md:px-16 lg:px-28 xl:px-36 pt-20 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D95D39]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">
                Awards & Recognition
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-zinc-900 leading-tight mb-8">
              A Legacy of Excellence
            </h1>

            <p className="text-zinc-600 text-lg leading-relaxed">
              Over three decades of grassroots dedication recognized by state
              governments, central ministries, NABARD, and esteemed CSR institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. AWARDS TIMELINE SECTION ── */}
      <section
        style={{ backgroundColor: "#FBF9F5" }}
        className="px-6 md:px-16 lg:px-28 xl:px-36 py-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Restored to 2px thickness, but made brighter with a transparent rust-orange color */}
          <div className="relative border-l-2 border-[#D95D39]/40 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
            
            {awardsData.map((award, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Marker (Dot) - Perfect math alignment for the 2px line */}
                <div className="absolute -left-[43px] md:-left-[59px] top-6 w-6 h-6 bg-[#FBF9F5] border-[4px] border-[#D95D39] rounded-full group-hover:scale-110 transition-transform duration-300 pointer-events-none z-10"></div>

                {/* Award Content Card (Clickable) */}
                <div 
                  onClick={() => setSelectedAward(award)}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-zinc-200/80 flex flex-col md:flex-row items-start gap-8 transition-all hover:shadow-xl hover:border-[#D95D39]/20 hover:-translate-y-1 duration-300 relative overflow-hidden cursor-pointer"
                >
                  
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDF2ED] rounded-bl-full opacity-50 pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>

                  {/* Left Side: Icon & Year */}
                  <div className="flex flex-col items-center gap-4 shrink-0 z-10 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-[#FDF2ED] text-[#D95D39] flex items-center justify-center shadow-inner">
                      {award.icon}
                    </div>
                    <div className="bg-[#F3F4F1] px-4 py-1.5 rounded-full border border-gray-200">
                      <span className="text-xs text-[#1C3F36] font-bold tracking-wide">
                        {award.year}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex flex-col flex-grow z-10 w-full pointer-events-none">
                    <div className="flex flex-col gap-2 mb-3">
                      <span className="text-[#D95D39] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                        {award.authority}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-zinc-900">
                        {award.title}
                      </h3>
                    </div>

                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6 font-light max-w-2xl">
                      {award.description}
                    </p>

                    <div className="inline-flex items-center rounded-full bg-[#FDF2ED] px-4 py-1.5 w-fit">
                      <span className="text-[10px] text-gray-500 font-bold tracking-wider mr-2">CATEGORY:</span>
                      <span className="text-xs text-[#D95D39] font-bold tracking-wide">
                        {award.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SUMMARY STATS BANNER ── */}
      <section
        style={{ backgroundColor: "#FBF9F5" }}
        className="px-6 md:px-16 lg:px-28 xl:px-36 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1C3F36] rounded-[2rem] p-10 md:p-14 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/3 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                  Driven by Impact
                </h2>
                <p className="text-[#F5F2EA] font-light text-sm md:text-base opacity-90">
                  Every accolade represents lives changed and communities empowered across the rural landscape.
                </p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                  <h4 className="text-4xl font-serif text-[#D95D39] mb-2">30+</h4>
                  <p className="text-white text-xs uppercase tracking-widest font-bold">Years Active</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                  <h4 className="text-4xl font-serif text-[#D95D39] mb-2">15+</h4>
                  <p className="text-white text-xs uppercase tracking-widest font-bold">Major Awards</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                  <h4 className="text-4xl font-serif text-[#D95D39] mb-2">50k</h4>
                  <p className="text-white text-xs uppercase tracking-widest font-bold">Lives Touched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL: DETAILED AWARD VIEW ── */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 transition-opacity"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative flex flex-col md:flex-row bg-[#FBF9F5] rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 backdrop-blur-md transition-colors shadow-sm"
              title="Close"
            >
              <CloseIcon />
            </button>

            {/* Modal Left: Image Section */}
            <div className="w-full md:w-1/2 bg-[#F5F2EA] flex items-center justify-center relative min-h-[250px] md:min-h-full p-6 border-b md:border-b-0 md:border-r border-[#E5E0D8]">
               <img
                 src={selectedAward.fileUrl}
                 alt={`${selectedAward.title} Certificate`}
                 className="w-full h-full max-h-[40vh] md:max-h-[80vh] object-contain drop-shadow-xl"
               />
            </div>

            {/* Modal Right: Information Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
               
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-full bg-[#FDF2ED] text-[#D95D39] flex items-center justify-center shrink-0">
                    {selectedAward.icon}
                 </div>
                 <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                      Awarded By
                    </span>
                    <span className="text-[#D95D39] text-xs font-bold tracking-widest uppercase">
                      {selectedAward.authority}
                    </span>
                 </div>
               </div>

               <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4 leading-tight">
                 {selectedAward.title}
               </h3>
               
               <div className="w-12 h-1 bg-[#D95D39] mb-6 rounded-full"></div>

               <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                 {selectedAward.description}
               </p>

               <div className="mt-auto flex flex-wrap gap-3">
                 <div className="inline-flex flex-col bg-white border border-gray-100 px-5 py-3 rounded-2xl shadow-sm">
                   <span className="text-[10px] text-gray-400 font-bold tracking-wider mb-1">YEAR</span>
                   <span className="text-sm text-[#1C3F36] font-bold tracking-wide">
                     {selectedAward.year}
                   </span>
                 </div>
                 <div className="inline-flex flex-col bg-white border border-gray-100 px-5 py-3 rounded-2xl shadow-sm">
                   <span className="text-[10px] text-gray-400 font-bold tracking-wider mb-1">CATEGORY</span>
                   <span className="text-sm text-[#D95D39] font-bold tracking-wide">
                     {selectedAward.category}
                   </span>
                 </div>
               </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}