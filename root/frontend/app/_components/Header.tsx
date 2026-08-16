
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Link from "next/link";
import { changeLanguage } from "./GoogleTranslateScript";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [currentHash, setCurrentHash] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedLang = localStorage.getItem("selectedLanguage");

    if (savedLang) {
      setSelectedLang(savedLang);
      return;
    }

    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);

    if (match?.[1]) {
      setSelectedLang(match[1]);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  const handleLanguageSelect = (lang: string) => {
    setSelectedLang(lang);

    localStorage.setItem("selectedLanguage", lang);

    changeLanguage(lang);
  };

  const handleNavigation = (route: string) => {
    setMenuOpen(false);
    setAboutHovered(false);
    setCurrentHash("");
    router.push(route);
  };

  const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/about/");

  return (
    <main className="fixed top-0 left-0 z-50 w-full bg-zinc-50 font-sans border-b border-gray-100 shadow-xs">
      <div className="flex min-h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">

        <Link href="/" className="cursor-pointer flex items-center gap-2.5 sm:gap-3 shrink-0">
          <Image
            src="/nya-logo.png"
            alt="Nava Youth Association Logo"
            width={48}
            height={48}
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full"
            priority
          />
          <div className="hidden xl:flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#1C3F36] leading-tight">
              Nava Youth Association
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#D95D39] uppercase">
              SINCE 1991 . KURNOOL, AP
            </span>
          </div>
        </Link>

        <div className="nav-btn hidden h-auto items-center py-4 lg:flex flex-1 justify-center px-4">
          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </h1>

          <div
            className="relative group"
            onMouseEnter={() => setAboutHovered(true)}
            onMouseLeave={() => setAboutHovered(false)}
          >
            <h1
              className={`flex cursor-pointer items-center hover:text-orange-500 ${
                isAboutActive ? "text-orange-500" : ""
              }`}
            >
              <Link href="/about" onClick={() => setCurrentHash("")}>
                About
              </Link>

              {aboutHovered ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </h1>

            <div className="absolute left-0 top-full z-50 hidden min-w-48 flex-col rounded-md bg-white pt-2 shadow-lg group-hover:flex">
              <Link
                href="/about"
                onClick={() => setCurrentHash("")}
                className={`px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                  pathname === "/about" && (!currentHash || currentHash === "#")
                    ? "text-orange-500 font-medium"
                    : ""
                }`}
              >
                About Us
              </Link>

              <Link
                href="/about#vision-mission-goals"
                onClick={() => setCurrentHash("#vision-mission-goals")}
                className={`px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                  pathname === "/about" && currentHash === "#vision-mission-goals"
                    ? "text-orange-500 font-medium"
                    : ""
                }`}
              >
                Vision, Mission, Goals
              </Link>

              <Link
                href="/about#board-of-directors"
                onClick={() => setCurrentHash("#board-of-directors")}
                className={`px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                  pathname === "/about" && currentHash === "#board-of-directors"
                    ? "text-orange-500 font-medium"
                    : ""
                }`}
              >
                Leadership Team
              </Link>

              <Link
                href="/about/legal-status"
                onClick={() => setCurrentHash("")}
                className={`px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                  pathname === "/about/legal-status"
                    ? "text-orange-500 font-medium"
                    : ""
                }`}
              >
                Legal & Certifications
              </Link>

              <Link
                href="/about/awards"
                onClick={() => setCurrentHash("")}
                className={`px-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                  pathname === "/about/awards"
                    ? "text-orange-500 font-medium"
                    : ""
                }`}
              >
                Awards & Recognition
              </Link>
            </div>
          </div>
          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/what-we-do"
                ? "text-orange-500"
                : ""
            }`}
          >
            <Link href="/what-we-do">What we do</Link>
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/projects"
                ? "text-orange-500"
                : ""
            }`}
          >
            <Link href="/projects">Projects</Link>
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/gallery"
                ? "text-orange-500"
                : ""
            }`}
          >
            <Link href="/gallery">Gallery</Link>
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/our-partners" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/our-partners">Our Partners</Link>
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/contact"
                ? "text-orange-500"
                : ""
            }`}
          >
            <Link href="/contact">Contact</Link>
          </h1>
        </div>

        <div className="flex h-16 items-center gap-3 lg:gap-3.5 shrink-0">

          <select
            value={selectedLang}
            onChange={(e) =>
              handleLanguageSelect(e.target.value)
            }
            className="notranslate hidden h-11 cursor-pointer rounded-md border bg-white px-3 text-sm text-gray-800 outline-none focus:border-[#D95D39] lg:block shrink-0"
            translate="no"
          >
            <option
              value="en"
              className="notranslate"
              translate="no"
            >
              English
            </option>

            <option
              value="hi"
              className="notranslate"
              translate="no"
            >
              हिंदी
            </option>

            <option
              value="te"
              className="notranslate"
              translate="no"
            >
              తెలుగు
            </option>
          </select>

          {/* Support Our Work button */}
          <Link
            href="/donate"
            style={{ backgroundColor: "#D95D39" }}
            className="inline-flex items-center gap-2 whitespace-nowrap shrink-0 text-white text-sm font-semibold px-5 py-3 rounded-full transition-opacity hover:opacity-90"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 shrink-0"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Donate Now
          </Link>

          <div
            className="flex cursor-pointer lg:hidden"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setAboutHovered(false);
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="flex w-full flex-col items-start gap-4 px-8 py-4 backdrop-blur-2xl lg:hidden">

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/" ? "text-orange-500" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </h1>

          <div className="w-full">

            <div
              onClick={() =>
                setAboutHovered((prev) => !prev)
              }
              className="flex w-full items-center justify-between"
            >
              <h1
                className={`cursor-pointer hover:text-orange-500 ${
                  isAboutActive
                    ? "text-orange-500"
                    : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigation("/about");
                }}
              >
                About Us
              </h1>

              {aboutHovered ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>

            {aboutHovered && (
              <div className="mt-4 flex w-full flex-col rounded-md">

                <Link
                  href="/about"
                  onClick={() => {
                    setCurrentHash("");
                    setMenuOpen(false);
                  }}
                  className={`pl-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                    pathname === "/about" && (!currentHash || currentHash === "#")
                      ? "text-orange-500 font-medium"
                      : ""
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/about#vision-mission-goals"
                  onClick={() => {
                    setCurrentHash("#vision-mission-goals");
                    setMenuOpen(false);
                  }}
                  className={`pl-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                    pathname === "/about" && currentHash === "#vision-mission-goals"
                      ? "text-orange-500 font-medium"
                      : ""
                  }`}
                >
                  Vision, Mission, Goals
                </Link>

                <Link
                  href="/about#board-of-directors"
                  onClick={() => {
                    setCurrentHash("#board-of-directors");
                    setMenuOpen(false);
                  }}
                  className={`pl-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                    pathname === "/about" && currentHash === "#board-of-directors"
                      ? "text-orange-500 font-medium"
                      : ""
                  }`}
                >
                  Leadership Team
                </Link>

                <Link
                  href="/about/legal-status"
                  onClick={() => {
                    setCurrentHash("");
                    setMenuOpen(false);
                  }}
                  className={`pl-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                    pathname === "/about/legal-status"
                      ? "text-orange-500 font-medium"
                      : ""
                  }`}
                >
                  Legal & Certifications
                </Link>

                <Link
                  href="/about/awards"
                  onClick={() => {
                    setCurrentHash("");
                    setMenuOpen(false);
                  }}
                  className={`pl-4 py-2 hover:bg-gray-100 hover:text-orange-500 ${
                    pathname === "/about/awards"
                      ? "text-orange-500 font-medium"
                      : ""
                  }`}
                >
                  Awards & Recognition
                </Link>
              </div>
            )}
          </div>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/what-we-do"
                ? "text-orange-500"
                : ""
            }`}
            onClick={() => handleNavigation("/what-we-do")}
          >
            What we do
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/projects"
                ? "text-orange-500"
                : ""
            }`}
            onClick={() => handleNavigation("/projects")}
          >
            Projects
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/events"
                ? "text-orange-500"
                : ""
            }`}
            onClick={() => handleNavigation("/events")}
          >
            Events
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/gallery"
                ? "text-orange-500"
                : ""
            }`}
            onClick={() => handleNavigation("/gallery")}
          >
            Gallery
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/our-partners"
                ? "text-orange-500"
                : ""
            }`}
            onClick={() => handleNavigation("/our-partners")}
          >
            Our Partners
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/contact"
                ? "text-orange-500"
                : ""
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </h1>

          <h1
            className={`cursor-pointer hover:text-orange-500 ${
              pathname === "/donate"
                ? "text-orange-500"
                : ""
            }`}
            onClick={() => handleNavigation("/donate")}
          >
            Donate us
          </h1>

          <div className="mt-2 flex w-full items-center gap-2 border-t pt-2">

            <span className="text-sm font-medium text-gray-600">
              Language:
            </span>

            <select
              value={selectedLang}
              onChange={(e) =>
                handleLanguageSelect(e.target.value)
              }
              className="notranslate h-10 cursor-pointer rounded-md border bg-white px-3 text-sm text-gray-800 outline-none focus:border-[#D95D39]"
              translate="no"
            >
              <option
                value="en"
                className="notranslate"
                translate="no"
              >
                English
              </option>

              <option
                value="hi"
                className="notranslate"
                translate="no"
              >
                हिंदी
              </option>

              <option
                value="te"
                className="notranslate"
                translate="no"
              >
                తెలుగు
              </option>
            </select>
          </div>
        </div>
      )}
    </main>
  );
}