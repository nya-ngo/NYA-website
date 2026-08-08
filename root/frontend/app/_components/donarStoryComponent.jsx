'use client'
import { useState, useEffect, useRef, useCallback } from "react";

const STORIES= [
  { quote: "I started with a small monthly amount, not expecting much. Three years later, the NGO sent me a photo of Kavya — a girl my donations helped stay in school. That single photo made everything real.", name: "Shruti Pillai", city: "Bengaluru", since: "Donor since 2021", amount: "₹300 / month", initials: "SP" },
  { quote: "I wanted my children to see that generosity is a habit, not an event. We donate together as a family every month. The impact reports have become our dinner-table conversations.", name: "Ramesh Nair", city: "Chennai", since: "Donor since 2019", amount: "₹1,000 / month", initials: "RN" },
  { quote: "After retiring I had time but didn't know where to direct it. Volunteering led me to donating. Knowing that my savings are feeding children while I sleep — that is the best feeling.", name: "Usha Krishnamurthy", city: "Hyderabad", since: "Donor since 2022", amount: "₹500 / month", initials: "UK" },
  { quote: "I work in tech and spend a lot on things I don't need. Rerouting a fraction of that to this cause felt obvious once I saw how efficiently every rupee was used. Audited reports every year — that earned my trust.", name: "Aditya Shenoy", city: "Pune", since: "Donor since 2020", amount: "₹2,500 / month", initials: "AS" },
  { quote: "My daughter was born the same year I started donating to the child nutrition programme. I think of it as growing up together — her and the children the programme supports.", name: "Meera Gopalan", city: "Mumbai", since: "Donor since 2023", amount: "₹750 / month", initials: "MG" },
];

const C = {
  heading: "#1a5c45", ctaBg: "#1a3d2e", ctaButton: "#c9e35c",
  border: "#e3e1d8", avatarBg: "#d4ead8", amountBg: "#f0f8f3",
  amountBorder: "#c5e0cc", dotActive: "#1a5c45", dotIdle: "#e3e1d8",
};

const INTERVAL_MS = 10_000;

function StoryCard({ story }) {
  return (
    <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "32px 4px" }}>
      <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 18, color: "#111", lineHeight: 1.65, fontStyle: "italic", marginBottom: 24 }}>
        &ldquo;{story.quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: C.heading, flexShrink: 0 }}>
          {story.initials}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>{story.name}</div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{story.city} &middot; {story.since}</div>
          <span style={{ display: "inline-block", marginTop: 6, background: C.amountBg, color: C.heading, fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: `1px solid ${C.amountBorder}` }}>
            {story.amount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DonorStories({
  stories = STORIES,
  intervalMs = INTERVAL_MS,
  ctaHeading = "Join our community\nof changemakers",
  ctaButtonLabel = "Donate now",
}) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef(Date.now());
  const elapsedRef = useRef(0);
  const rafRef = useRef(null);
  const total = stories.length;

  const goTo = useCallback((n) => {
    setCurrent(((n % total) + total) % total);
    elapsedRef.current = 0;
    startRef.current = Date.now();
    setProgress(0);
  }, [total]);

  useEffect(() => {
    const tick = () => {
      if (!paused) {
        const elapsed = elapsedRef.current + (Date.now() - startRef.current);
        const pct = Math.min(100, Math.round((elapsed / intervalMs) * 100));
        setProgress(pct);
        if (elapsed >= intervalMs) {
          elapsedRef.current = 0;
          startRef.current = Date.now();
          setCurrent((c) => (c + 1) % total);
          setProgress(0);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [paused, intervalMs, total]);

  const handleMouseEnter = () => { elapsedRef.current += Date.now() - startRef.current; setPaused(true); };
  const handleMouseLeave = () => { startRef.current = Date.now(); setPaused(false); };

//   const navBtnStyle: React.CSSProperties = {
//     width: 36, height: 36, borderRadius: "50%", border: `1px solid ${C.border}`,
//     background: "#fff", cursor: "pointer", fontSize: 16, color: C.heading,
//     display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.15s",
//   };

  return (
    <div className="max-w-4xl" style={{ margin: "0 auto", padding: "20px 20px 0", fontFamily: "'Arial', sans-serif", background: "#fff" }}>
      <span style={{ display: "inline-block", background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", padding: "4px 10px", borderRadius: 3 }}>
        Donor stories
      </span>
      <h2 style={{ color: C.heading, fontSize: 32, fontWeight: 400, margin: "10px 0 0", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        Voices from our community
      </h2>
      <div style={{ width: 48, height: 4, background: C.heading, margin: "14px 0 32px", borderRadius: 2 }} />

      <div style={{ overflow: "hidden", width: "100%" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div style={{ display: "flex", transform: `translateX(-${current * 100}%)`, transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}>
          {stories.map((story, i) => (
            <div key={i} style={{ minWidth: "100%", padding: "0 2px" }}>
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", height: 2, background: C.dotIdle, marginTop: 16, borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: C.heading, borderRadius: 2, transition: "width 0.08s linear" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {stories.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Story ${i + 1}`} style={{ width: 8, height: 8, borderRadius: "50%", background: i === current ? C.dotActive : C.dotIdle, border: "none", cursor: "pointer", padding: 0, transition: "background 0.2s" }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => goTo(current - 1)} aria-label="Previous story"  onMouseEnter={e => (e.currentTarget.style.borderColor = C.heading)} onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>&#8592;</button>
          <button onClick={() => goTo(current + 1)} aria-label="Next story"  onMouseEnter={e => (e.currentTarget.style.borderColor = C.heading)} onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>&#8594;</button>
        </div>
      </div>

    </div>
  );
}