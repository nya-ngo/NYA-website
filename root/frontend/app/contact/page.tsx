"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your Node/Express + MongoDB backend endpoint
    console.log(form);
  };

  return (
    <main className="font-sans">
      {/* Hero section — dark cream, matches About page */}
      <section style={{ backgroundColor: "#F5F2EA" }} className="px-6 md:px-16 lg:px-28 xl:px-36 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D95D39]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">
                Contact
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-zinc-900 leading-tight mb-8">
              We&apos;d love to hear from you.
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Whether you&apos;re a fellow practitioner, a potential funder, a student
              researcher, or a curious neighbour — write to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form — light cream, matches About page */}
      <section style={{ backgroundColor: "#FBF9F5" }} className="px-6 md:px-16 lg:px-28 xl:px-36 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Reach us at */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#D95D39]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">
                Reach Us At
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-8 leading-snug">
              Our doors and inbox are open six days a week.
            </h2>

            <ul className="flex flex-col gap-5 mb-10">
              <li className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#D95D39] shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Plot No – 413, SilpaNandanavanam,<br />
                  Ulchala Road, Kurnool – 518003, AP, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#D95D39] shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:navayouth2021@gmail.com" className="hover:text-[#D95D39] transition-colors">
                  navayouth2021@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#D95D39] shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-[#D95D39] transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>

            {/* Map */}
            <div className="w-full h-72 rounded-xl overflow-hidden border border-zinc-200">
              <iframe
                title="Our location"
                src="https://www.google.com/maps?q=Plot+No+413+SilpaNandanavanam+Ulchala+Road+Kurnool+518003&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form card */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 md:p-10 h-fit">
            <h3 className="text-2xl font-serif text-zinc-900 mb-2">
              Send us a message
            </h3>
            <p className="text-zinc-500 text-sm mb-8">
              We typically respond within 2 working days.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-zinc-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D95D39] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-zinc-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D95D39] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D95D39] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#D95D39] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-zinc-300 rounded-md px-4 py-3 text-sm outline-none focus:border-[#D95D39] transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="self-start flex items-center gap-2 bg-[#D95D39] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#c04f2f] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}