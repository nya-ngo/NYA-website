"use client";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Donate Us", href: "/donate" },
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
          <polygon fill="#1a0a00" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
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
    <footer className="bg-[#1a0a00] text-[#f4f0e8] font-sans">

      {/* Donate nudge bar */}
      <div className="bg-[#ff0000] flex flex-wrap items-center justify-center gap-4 px-6 py-3">
        <p className="text-white text-sm font-medium m-0">
          Every rupee you give helps a farmer grow. Support our mission today.
        </p>
        <Link
          href="/donate"
          className="bg-white text-[#ff0000] text-sm font-bold px-5 py-2 rounded hover:bg-zinc-100 transition-colors whitespace-nowrap"
        >
          Donate now
        </Link>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Brand */}
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#f4f0e8] mb-3 inline-block">
            NYA<span className="text-sm font-normal text-[#b5906a] align-super">.ngo</span>
          </Link>
          <p className="text-sm text-[#c4b49e] leading-relaxed mb-5 max-w-[220px]">
            Standing with India&apos;s farmers — for fair prices, better livelihoods, and sustainable agriculture.
          </p>
          <ul className="flex gap-3 list-none p-0 m-0">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4b49e] flex items-center justify-center w-9 h-9 border border-[#3d2010] rounded-full hover:text-[#f4f0e8] hover:border-[#c4b49e] transition-colors"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#b5906a] mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[#c4b49e] hover:text-[#f4f0e8] transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#b5906a] mb-4">
            Contact
          </h3>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            <li className="flex items-start gap-2 text-sm text-[#c4b49e] leading-snug">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 mt-0.5 text-[#b5906a]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>123 Krishi Marg, Bhubaneswar, Odisha 751001</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-[#c4b49e]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-[#b5906a]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+911234567890" className="hover:text-[#f4f0e8] transition-colors">
                +91 12345 67890
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-[#c4b49e]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-[#b5906a]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:hello@nya-ngo.org" className="hover:text-[#f4f0e8] transition-colors">
                hello@nya-ngo.org
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#b5906a] mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-[#c4b49e] leading-relaxed mb-4">
            Get updates on farmer welfare programs, crop advisories, and upcoming events.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email for newsletter"
              className="bg-[#3d2010] border border-[#4a3020] rounded px-3 py-2 text-sm text-[#f4f0e8] placeholder-[#7a6050] outline-none focus:border-[#b5906a] w-full"
            />
            <button
              type="button"
              className="donate-btn w-full text-sm font-semibold"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3d2010] max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-[#7a6050] m-0">
          © {new Date().getFullYear()} NYA — Farmer Welfare NGO. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-5 list-none p-0 m-0">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Use", href: "/terms" },
            { label: "Sitemap", href: "/sitemap" },
          ].map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="text-xs text-[#7a6050] hover:text-[#c4b49e] transition-colors no-underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}