"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export function setGoogleTranslateCookie(lang: string) {
  const cookieValue = lang === "en" ? "/en/en" : `/en/${lang}`;
  document.cookie = `googtrans=${cookieValue}; path=/;`;
  if (typeof window !== "undefined") {
    document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/;`;
  }
}

export function changeLanguage(langCode: string) {
  setGoogleTranslateCookie(langCode);
  if (typeof window !== "undefined") {
    localStorage.setItem("selectedLanguage", langCode);
    const selectElem = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  }
}

export default function GoogleTranslateScript() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,te",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div
      id="google_translate_element"
      style={{ display: "none", position: "absolute", top: "-9999px", left: "-9999px" }}
    />
  );
}
