"use client";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Supporters", href: "/supporters" },
    { label: "Legal Status", href: "/legal-status" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: "https://twitter.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon fill="#1C3F36" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: "#1C3F36" }} className="text-white font-sans">

      {/* Main grid — 3 columns */}
      <div className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Col 1: Brand */}
        <div>
          {/* Logo circle + name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">NYA</span>
            </div>
            <div>
              <p className="text-white font-semibold text-base leading-tight">Nava Youth Association</p>
              <p style={{ color: "#D95D39" }} className="text-xs font-semibold tracking-widest uppercase">
                Est. 1991
              </p>
            </div>
          </div>

          <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-[260px]">
            A grassroots non-profit working with rural communities of Andhra Pradesh &amp; Telangana on watershed
            development, sustainable agriculture, women&apos;s empowerment and child rights.
          </p>

          {/* Support Our Work button */}
          <Link
            href="/donate"
            style={{ backgroundColor: "#D95D39" }}
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-full transition-opacity hover:opacity-90 mb-8"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Support Our Work
          </Link>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-5">Quick Links</h3>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 no-underline transition-colors"
                  style={{}}
                  onMouseEnter={e => (e.currentTarget.style.color = "#D95D39")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Reach Us */}
        <div>
          <h3 className="text-base font-semibold text-white mb-5">Reach Us</h3>
          <ul className="flex flex-col gap-5 list-none p-0 m-0">
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#D95D39" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-sm text-white/70 leading-snug m-0">
                Plot No – 413, SilpaNandanavanam,<br />Ulchala Road, Kurnool – 518003, AP, India
              </p>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#D95D39" }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:navayouth2021@gmail.com"
                className="text-sm text-white/70 no-underline transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = "#D95D39")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                navayouth2021@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#D95D39" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a
                href="tel:+919876543210"
                className="text-sm text-white/70 no-underline transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = "#D95D39")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#D95D39" }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <a
                href="https://www.navayouth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 no-underline transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = "#D95D39")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                www.navayouth.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 max-w-6xl mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-white/40 m-0">
          © {new Date().getFullYear()} Nava Youth Association · Reg. No. 181/1991 (A.P. Societies Act)
        </p>
        <p className="text-xs text-white/40 m-0">
          12A · 80G · FCRA · NITI Aayog Registered
        </p>
      </div>
    </footer>
  );
}