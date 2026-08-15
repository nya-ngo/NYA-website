"use client";
import Image from "next/image";
import DonationForm from "../_components/donationForm";
import FAQSection from "../_components/FAQSection";
import StoryCard from "../_components/donarStoryComponent";
import { useEffect, useState } from "react";
const SERIF = "Georgia, 'Times New Roman', serif";
const ACCENT = "#C1502E";
const TEXT_DARK = "#1A1A18";
const TEXT_BODY = "#6B6A63";
const TEXT_LABEL = "#8C8B83";
const BORDER = "#E7E4DA";
const TINT_BG = "#F4E4DB";

function RecentDonations({
  donations,
}: {
  donations: {
    name: string;
    amount: number;
    time: string;
    avatar: string;
    created_date: string;
  }[];
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        border: `1px solid ${BORDER}`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid #f0efe9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{ margin: 0, fontSize: 15, fontWeight: 700, color: TEXT_DARK }}
        >
          Recent donations
        </h3>
      </div>
      {donations.map((d, i) => (
        <div
          key={i}
          style={{
            padding: "13px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            borderBottom:
              i < donations.length - 1 ? "1px solid #f4f3ee" : "none",
            transition: "background 0.12s",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: TINT_BG,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 12,
              color: ACCENT,
              flexShrink: 0,
            }}
          >
            {d?.avatar || d.name[0].toUpperCase()}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: TEXT_DARK }}>
              {d?.name}
              <span
                style={{
                  marginLeft: 8,
                  fontSize: 11,
                  padding: "2px 7px",
                  borderRadius: 20,
                  background: TINT_BG,
                  color: ACCENT,
                  fontWeight: 500,
                }}
              >
                {d?.created_date}
              </span>
            </div>
            <div style={{ fontSize: 11, color: TEXT_LABEL, marginTop: 2 }}>
              {d.time}
            </div>
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: ACCENT }}>
            ₹{d?.amount.toLocaleString("en-IN")}
          </div>
        </div>
      ))}
    </div>
  );
}

function MonthlyTargetCard({
  raised,
  target,
  label = "This month's goal",
}: {
  raised: number;
  target: number;
  label?: string;
}) {
  const pct = Math.min(100, Math.round((raised / target) * 100));
  const remaining = Math.max(0, target - raised);
  const fmt = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

  return (
    <div
      className="h-44"
      style={{
        background: "#fff",
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        padding: "14px 18px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 2,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: ACCENT,
          }}
        >
          {label}
        </span>
        <div className="flex flex-col items-end">
          <span style={{ fontSize: 13, fontWeight: 700, color: TEXT_DARK }}>
            {pct}%
          </span>
          <span style={{ fontSize: 10, color: TEXT_LABEL }}>funded</span>
        </div>
      </div>

      <div
        className="mt-4"
        style={{ display: "flex", alignItems: "baseline", gap: 6 }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: TEXT_DARK,
            fontFamily: SERIF,
          }}
        >
          {fmt(raised)}
        </span>
        <span style={{ fontSize: 13, color: TEXT_LABEL }}>
          raised of {fmt(target)}
        </span>
      </div>

      <div
        style={{
          height: 6,
          borderRadius: 6,
          background: "#f0efe9",
          overflow: "hidden",
          margin: "10px 0 8px",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 6,
            width: `${pct}%`,
            background: ACCENT,
            transition: "width 0.6s ease",
          }}
        />
      </div>

      <div className="mt-2 lg:mt-4" style={{ fontSize: 12, color: TEXT_LABEL }}>
        {remaining > 0
          ? `${fmt(remaining)} left to reach this month's goal`
          : "Monthly goal reached"}
      </div>
    </div>
  );
}
function TopDonors({
  donors,
}: {
  donors: {
    name: string;
    amount: number;
    created_date: string;
    rank: number;
  }[];
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        border: `1px solid ${BORDER}`,
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #f0efe9" }}>
        <h3
          style={{ margin: 0, fontSize: 15, fontWeight: 700, color: TEXT_DARK }}
        >
          Top donors this month
        </h3>
      </div>
      {donors.map((d, i) => (
        <div
          key={i}
          style={{
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderBottom: i < donors.length - 1 ? "1px solid #f4f3ee" : "none",
            background: d.rank === 1 ? "#FBF6EC" : "transparent",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 12,
              color: TEXT_DARK,
              flexShrink: 0,
            }}
          >
            {d.rank}
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: TEXT_DARK }}>
              {d.name}
            </div>
            <div style={{ fontSize: 11, color: TEXT_LABEL }}>
              {d.created_date}
            </div>
          </div>
          <div style={{ fontWeight: 700, fontSize: 14, color: ACCENT }}>
            ₹{d.amount.toLocaleString("en-IN")}
          </div>
        </div>
      ))}
    </div>
  );
}
export default function DonationPage() {
  const [recentDonations, setRecentDonations] = useState([]);
  const [topDonors, setTopDonors] = useState([]);
  useEffect(() => {
    const test = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/donations/recent-donation`,
        );
        const text = await response.text();
        setRecentDonations(JSON.parse(text));
      } catch (error) {
        console.error("FETCH ERROR:", error);
      }
    };

    test();
  }, []);
  useEffect(() => {
    const fetchTopDonors = async () => {
      try {
        console.log(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/donations/top-donations`,
        );
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/donations/top-donations`,
        );

        const text = await response.text();
        console.log("Top Donors Response:", text);
        const rankedDonors = JSON.parse(text).map(
          (donor: any, index: number) => ({
            rank: index + 1,
            ...donor,
          }),
        );

        console.log(rankedDonors);
        setTopDonors(rankedDonors);
      } catch (error) {
        console.error("FETCH ERROR:", error);
      }
    };

    fetchTopDonors();
  }, []);
  return (
    <div className="bg-[#FAF9F4] min-h-screen w-full">
      <main className="w-full min-h-screen flex flex-col">
        <div className="relative h-96 w-screen overflow-hidden">
          <Image
            src="/images.jpeg"
            alt="Donation"
            loading="eager"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex items-center">
            <div className="ml-[18%] max-w-[650px] text-white">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C1502E]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C1502E]">
                  Donate
                </span>
              </div>

              <h2 className="max-w-[650px] font-serif text-4xl leading-tight font-medium md:text-5xl">
                Plant water. Plant dignity. Plant a future.
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[600px] text-base leading-relaxed text-white/80 md:text-lg">
                Your contribution funds check dams, women's collectives, and a
                child's path to school. All donations qualify for 50% tax
                deduction under Section 80G.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-4 grid grid-cols-1 md:grid-cols-[70%_30%] w-full p-4 h-full">
          <div className="w-full lg:p-4 h-full">
            <DonationForm />
            <div className="dnr-story w-full">
              <StoryCard />
            </div>
          </div>

          <div className="w-full flex flex-col p-4 gap-4">
            <MonthlyTargetCard raised={50000} target={100000} />
            <RecentDonations donations={recentDonations} />
            <TopDonors donors={topDonors} />
          </div>
        </div>

        <div className="faq-sec mg:8 lg:mb-16">
          <FAQSection />
        </div>
      </main>
    </div>
  );
}
