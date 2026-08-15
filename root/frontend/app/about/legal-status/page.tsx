"use client";

import React, { useState } from "react";

// --- SVG Icons ---
const ShieldCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
    />
  </svg>
);

const RibbonBadgeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// --- Utility function to force download ---
const handleDownload = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    // Convert the image to a Blob
    const blob = await response.blob();

    // Create a temporary local URL for the Blob
    const blobUrl = window.URL.createObjectURL(blob);

    // Programmatically create a link, click it, and remove it
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error(
      "Failed to download image, opening in new tab instead.",
      error,
    );
    // Fallback: If CORS blocks the fetch, open in a new tab instead
    window.open(url, "_blank");
  }
};

// --- Data for Certificates ---
const sampleCertificateUrl =
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop";

const certificates = [
  {
    authority: "REGISTRAR OF SOCIETIES, GOVT. OF ANDHRA PRADESH",
    title: "Society Registration",
    description:
      "Registered as a society under the Andhra Pradesh Societies Registration Act of 1991.",
    registrationNo: "181/1991",
    icon: <ShieldCheckIcon />,
    fileUrl: sampleCertificateUrl,
  },
  {
    authority: "COMMISSIONER OF INCOME TAX",
    title: "12A Certificate",
    description:
      "Income tax exemption granted for charitable purposes under Section 12A of the Income Tax Act.",
    registrationNo: "12A/CIT/KNL/1998",
    icon: <RibbonBadgeIcon />,
    fileUrl: sampleCertificateUrl,
  },
  {
    authority: "COMMISSIONER OF INCOME TAX (EXEMPTIONS)",
    title: "80G Certificate",
    description:
      "Donors are eligible for 50% tax deduction under Section 80G of the Income Tax Act.",
    registrationNo: "80G/AABCN1234E/2023",
    icon: <ShieldCheckIcon />,
    fileUrl: sampleCertificateUrl,
  },
  {
    authority: "MINISTRY OF HOME AFFAIRS, GOVT. OF INDIA",
    title: "FCRA Registration",
    description:
      "Foreign Contribution Regulation Act registration for receiving overseas contributions.",
    registrationNo: "010270221",
    icon: <RibbonBadgeIcon />,
    fileUrl: sampleCertificateUrl,
  },
  {
    authority: "NITI AAYOG, GOVT. OF INDIA",
    title: "NITI Aayog (Darpan)",
    description:
      "NGO Darpan registration with NITI Aayog for transparency and CSR partnership eligibility.",
    registrationNo: "AP/2018/0184567",
    icon: <ShieldCheckIcon />,
    fileUrl: sampleCertificateUrl,
  },
  {
    authority: "INCOME TAX DEPARTMENT, GOVT. OF INDIA",
    title: "PAN",
    description:
      "Permanent Account Number issued by the Income Tax Department.",
    registrationNo: "AABCN1234E",
    icon: <RibbonBadgeIcon />,
    fileUrl: sampleCertificateUrl,
  },
];

export default function LegalStatusPage() {
  const [viewImage, setViewImage] = useState<string | null>(null);

  return (
    <main className="w-full flex flex-col font-sans bg-[#FBF9F5] min-h-screen antialiased">
      {/* Hero section — dark cream, matches About page */}
      <section
        style={{ backgroundColor: "#F5F2EA" }}
        className="px-6 md:px-16 lg:px-28 xl:px-36 pt-20 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#D95D39]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#D95D39]">
                Legal Status
              </span>
            </div>

            {/* Changed text-zinc-900 to text-[#1A1A1A] for consistency */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1A1A1A] leading-tight mb-6">
              Certificates & Registrations
            </h1>

            {/* Same styling as your requested reference */}
            <p className="text-gray-600 text-base md:text-lg">
              Nava Youth Association is a fully compliant, transparently
              governed non-profit holding every major statutory registration
              required to receive Indian and foreign contributions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CERTIFICATES GRID SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-6 transition-shadow hover:shadow-md duration-300"
            >
              {/* Top Right Action Buttons */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <button
                  onClick={() => setViewImage(cert.fileUrl)}
                  className="p-2 text-gray-400 hover:text-[#D95D39] hover:bg-[#FDF2ED] rounded-full transition-all duration-200"
                  title="View Certificate"
                >
                  <EyeIcon />
                </button>
                <button
                  onClick={() =>
                    handleDownload(
                      cert.fileUrl,
                      `Certificate_${cert.registrationNo.replace(/\//g, "-")}.jpg`,
                    )
                  }
                  className="p-2 text-gray-400 hover:text-[#D95D39] hover:bg-[#FDF2ED] rounded-full transition-all duration-200"
                  title="Download Certificate"
                >
                  <DownloadIcon />
                </button>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#FDF2ED] text-[#D95D39] flex items-center justify-center shrink-0">
                {cert.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow pt-1 pr-12 sm:pr-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-[#D95D39]"></div>
                  <span className="text-[#D95D39] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    {cert.authority}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">
                  {cert.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light">
                  {cert.description}
                </p>

                {/* Registration Pill */}
                <div className="mt-auto inline-flex w-max items-center rounded-full bg-[#F3F4F1] px-4 py-1.5">
                  <span className="text-[10px] text-gray-500 font-bold tracking-wider mr-2">
                    REG.
                  </span>
                  <span className="text-xs text-[#1C3F36] font-bold tracking-wide">
                    {cert.registrationNo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. QUICK SUMMARY BANNER */}
      <section className="w-full pb-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#1C3F36] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex flex-col pt-6 md:pt-0 md:px-8 first:pt-0 first:pl-0">
                <h4 className="text-4xl font-serif text-[#D95D39] mb-3">80G</h4>
                <p className="text-white font-light text-sm md:text-base">
                  Donations tax-deductible (50%)
                </p>
              </div>
              <div className="flex flex-col pt-6 md:pt-0 md:px-8">
                <h4 className="text-4xl font-serif text-[#D95D39] mb-3">
                  FCRA
                </h4>
                <p className="text-white font-light text-sm md:text-base">
                  Eligible to receive foreign contributions
                </p>
              </div>
              <div className="flex flex-col pt-6 md:pt-0 md:pl-8">
                <h4 className="text-4xl font-serif text-[#D95D39] mb-3">
                  CSR-1
                </h4>
                <p className="text-white font-light text-sm md:text-base">
                  Eligible CSR implementing agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FOR VIEWING CERTIFICATE */}
      {viewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setViewImage(null)}
        >
          <div
            className="relative flex flex-col items-center max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setViewImage(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors duration-200 p-2"
              title="Close"
            >
              <CloseIcon />
            </button>

            {/* Image Container */}
            <img
              src={viewImage}
              alt="Certificate Document"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
