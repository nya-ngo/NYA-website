"use client";
import Image from "next/image";

const boardMembers = [
  { name: "K. Venugopal Reddy", role: "President", qualification: "M.A. Sociology", slug: "img1" },
  { name: "M. Sridhar Rao", role: "Secretary & CEO", qualification: "M.S.W., MPhil Development Studies", slug: "img1" },
  { name: "G. Ramalakshma", role: "Vice President", qualification: "B.F. Civil Engineering", slug: "img1" },
  { name: "P. Lakshmi Devi", role: "Treasurer", qualification: "PhD Social Management", slug: "img1" },
  { name: "S. Anjaneyulu", role: "Joint Secretary", qualification: "M.A. Economics", slug: "img1" },
  { name: "Smt. K. Sarojini", role: "Executive Member", qualification: "MA Social Work", slug: "img1" },
  { name: "B. Narasimha Rao", role: "Executive Member", qualification: "M.Sc. Agriculture", slug: "img1" },
  { name: "T. Padma Kumari", role: "Executive Member", qualification: "MBA Development Topics", slug: "img1" },
  { name: "R. Subba Reddy", role: "Executive Member", qualification: "M.A. Public Administration", slug: "img1" },
];

const goals = [
  { id: "01", text: "Promote sustainable watershed development and water security in rural Andhra Pradesh and Telangana." },
  { id: "02", text: "Strengthen smallholder farmers through Farmer Producer Organizations and climate-resilient agriculture." },
  { id: "03", text: "Empower women through Self-Help Groups, livelihoods, and access to entitlements." },
  { id: "04", text: "Protect child rights — combat trafficking, ensure access to education and justice." },
  { id: "05", text: "Improve community health and nutrition via mobile medical units and outreach." },
];

export default function AboutPage() {
  return (
    <main className="font-sans">

      {/* ── Section 1: Hero — dark cream ── */}
      <section style={{ backgroundColor: "#F5F2EA" }} className="px-6 md:px-16 lg:px-28 xl:px-36 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D95D39]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">About Us</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-zinc-900 leading-tight mb-8">
              A grassroots story, written over three decades in the villages of Andhra Pradesh.
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
              Nava Youth Association (NYA) is a non-profit, non-political grassroots organization headquartered in
              Kurnool, Andhra Pradesh. For over three decades we have partnered with rural communities to build a
              fairer, greener, more prosperous countryside.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Quote — light cream ── */}
      <section style={{ backgroundColor: "#FBF9F5" }} className="px-6 md:px-16 lg:px-28 xl:px-36 py-20">
        <div className="max-w-6xl mx-auto">
          <blockquote className="max-w-3xl mx-auto italic leading-relaxed" style={{ color: "#8B7355", fontSize: "1.15rem" }}>
            &ldquo;Registered in 1991 under the A.P. Societies Act, Nava Youth Association has grown into a trusted
            development partner across multiple districts of Andhra Pradesh and Telangana. We work at the intersection
            of natural-resource management, sustainable agriculture, women&apos;s economic empowerment, and child
            rights — anchored in operational research and evidence-based interventions. Our work is supported by
            NABARD, the World Bank, NITI Aayog convergence programmes, and CSR partners including JSW Cements and
            SUZLON.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── Section 3: Vision + Mission — dark cream ── */}
      <section style={{ backgroundColor: "#F5F2EA" }} className="px-6 md:px-16 lg:px-28 xl:px-36 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="border border-zinc-200 rounded-2xl p-8 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-[#D95D39] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D95D39" strokeWidth="2" className="w-4 h-4">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">Vision</span>
            </div>
            <p className="text-zinc-800 text-xl font-serif leading-relaxed">
              A gender-equitable, just, and harmonious society where deprived sections live with dignity and honor.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl p-8 bg-[#1C3F36] text-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-[#D95D39] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D95D39" strokeWidth="2" className="w-4 h-4">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-red-400">Mission</span>
            </div>
            <p className="text-zinc-100 text-xl font-serif leading-relaxed">
              Building capacities of vulnerable sections through cooperative action — improving quality of life and
              optimizing natural resource management through sustainable, evidence-based interventions.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Goals — light cream ── */}
      <section style={{ backgroundColor: "#FBF9F5" }} className="px-6 md:px-16 lg:px-28 xl:px-36 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="#D95D39" strokeWidth="2" className="w-4 h-4">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
            <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">Our Goals</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-12 max-w-xl leading-snug">
            Five commitments that guide every project we take on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {goals.map((g) => (
              <div key={g.id} className="flex gap-5 items-start">
                <span className="text-sm font-bold text-zinc-300 mt-1 shrink-0">{g.id}</span>
                <p className="text-zinc-700 text-base leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Board of Directors — dark cream ── */}
      <section style={{ backgroundColor: "#F5F2EA" }} className="px-6 md:px-16 lg:px-28 xl:px-36 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#D95D39]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">Governance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-3">Board of Directors</h2>
          <p className="text-zinc-500 text-base mb-12 max-w-xl">
            Nine professionals from sociology, engineering, management and public administration — guiding NYA&apos;s
            mission with experience and accountability.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {boardMembers.map((member) => (
              <div key={member.name} className="flex flex-col">
                {/* Board member photo — pulled from /public/images/board/{slug}.jpg */}
                <Image
                  src={`/images/board/${member.slug}.jpg`}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square rounded-xl mb-3 object-cover"
                  style={{ backgroundColor: "#E8E3D9" }}
                />
                <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39] mb-1">{member.role}</span>
                <span className="text-sm font-semibold text-zinc-900">{member.name}</span>
                <span className="text-xs text-zinc-400 mt-0.5">{member.qualification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}