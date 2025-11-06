"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import call from "../../Assests/call.png";
import e from "../../Assests/e.png";
import whatsapp from "../../Assests/whatsapp.png";
import logo from "../../Assests/logo.jpeg";
import { T } from "@/lib/i18n-global";

import { translateClient } from "@/lib/client-translate";

// Base EN labels
const ORIGIN_LABELS = {
  home: "Home",
  about: "About",
  tours: "Tours",
  transfers: "Airport Transfers",
  contact: "Contact",
  whatsappUs: "Whatsapp Us",
  bookNow: "Book Now",
};

// language list for dropdown
const SUPPORTED = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "ur", label: "اردو", dir: "rtl" },
];

const JOINER = " | ";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // no TS generic here
  const [lang, setLang] = useState(() =>
    typeof window === "undefined" ? "en" : localStorage.getItem("lang") || "en"
  );
  const [labels, setLabels] = useState(ORIGIN_LABELS);
  const [loadingLang, setLoadingLang] = useState(false);

  const dir = useMemo(() => {
    const f = SUPPORTED.find((l) => l.code === lang);
    return f?.dir || "ltr";
  }, [lang]);

  // keep in sync with global changes
  useEffect(() => {
    const onLangChange = () => setLang(localStorage.getItem("lang") || "en");
    window.addEventListener("langchange", onLangChange);
    return () => window.removeEventListener("langchange", onLangChange);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // translate labels on lang change
  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (lang === "en") {
        setLabels(ORIGIN_LABELS);
        return;
      }
      setLoadingLang(true);
      try {
        const original = Object.values(ORIGIN_LABELS).join(JOINER);
        const batch = await translateClient(original, [lang], "en");
        if (cancelled) return;

        const translatedJoined = (batch && batch[lang]) || original;
        const parts = translatedJoined.split(JOINER);

        const keys = Object.keys(ORIGIN_LABELS);
        if (parts.length !== keys.length) {
          const out = {};
          for (const k of keys) {
            const one = await translateClient(ORIGIN_LABELS[k], [lang], "en");
            if (cancelled) return;
            out[k] = (one && one[lang]) || ORIGIN_LABELS[k];
          }
          setLabels(out);
        } else {
          const out = {};
          keys.forEach((k, i) => (out[k] = parts[i]));
          setLabels(out);
        }
      } finally {
        if (!cancelled) setLoadingLang(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [lang]);

  // make language global (persist + broadcast)
  function handleLangChange(e) {
    const next = e.target.value;
    setLang(next);
    localStorage.setItem("lang", next);
    window.dispatchEvent(new Event("langchange"));
  }

  const WHATSAPP_NUMBER_INTL = "23057526968";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=Hi!%20I%27d%20like%20to%20book%20a%20tour.`;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to book a tour with Mauritius Travel & Tours."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Top strip (hidden on mobile) */}
      <div className="backdrop-blur-md bg-white/5 text-white hidden sm:block" dir={dir}>
        <div className="max-w-[1300px] mx-auto px-4 py-2 flex flex-wrap items-start gap-2 sm:gap-3 justify-start sm:justify-between text-[15px]">
          <div className="flex items-center flex-wrap gap-2 sm:gap-6 opacity-95">
            {/* Email */}
            <div className="flex items-center gap-2">
              <Image
                src={call}
                alt="Email"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
              />
              <a
                href="mailto:info@mauritiustraveltour.com"
                className="text-white/90 hover:text-white transition"
              >
                <T>info@mauritiustraveltour.com</T>
              </a>
            </div>

            <span className="opacity-50 hidden sm:inline">•</span>

            {/* Call */}
            <div className="flex items-center gap-2">
              <Image
                src={e}
                alt="Call"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
              />
              <a
                href="tel:+23057526968"
                className="text-white/90 hover:text-white transition"
              >
                +230 5752 6968
              </a>
            </div>
          </div>

          {/* Right: WhatsApp + Language dropdown (DESKTOP) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 text-white/95 hover:text-white"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={whatsapp}
                alt="WhatsApp"
                width={20}
                height={20}
                className="inline-block w-6 h-6 sm:w-5 sm:h-5"
              />
              {labels.whatsappUs}
            </a>

            {/* Language dropdown */}
            <select
              aria-label="Language"
              value={lang}
              onChange={handleLangChange}
              className="px-2 py-1 rounded-md bg-white text-[#083438] border border-white/80 outline-none"
            >
              {SUPPORTED.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Glassy rounded navbar centered over hero */}
      <div className="relative z-[60]" dir={dir}>
        <div
          className="
              absolute left-1/2 -translate-x-1/2 top-5
    w-[min(1180px,calc(100%-28px))]
    flex justify-end items-center gap-5
    pl-[72px] md:pl-[92px]     /* space reserved for the logo */
    rounded-xl pr-1 text-white
    border border-white/80 bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,.25)]
          "
        >
          <div className="pointer-events-none absolute left-4 right-4 top-[54px] h-px bg-white/70/80 opacity-80" />

          <div className="w-[70px]  h-[70px] absolute left-[-10px]">
            <Image
              src={logo}
              alt="Logo"
              width={70}
              height={70}
              className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white/80 bg-white"
            />
          </div>

          <div className="flex items-center md:gap-18 lg:gap-40">
            {/* Desktop nav */}
            <nav className="hidden md:flex justify-center gap-4 lg:gap-[clamp(24px,5vw,48px)] font-medium">
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/">
                <T>{labels.home}</T>
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/About">
                <T>{labels.about}</T>
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/#tours">
                <T>{labels.tours}</T>
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/#transfer">
                <T>{labels.transfers}</T>
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/ContactUs">
                <T>{labels.contact}</T>
              </Link>
            </nav>

            {/* Desktop Book Now */}
            <Link
              href="https://wa.me/23057526968?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20tours."
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:inline-flex items-center justify-center rounded-xl font-semibold
                px-5 py-1 my-1 min-w-[126px]
                bg-[#1ad1a3] text-[#083438]
                border-2 border-white/80
                hover:brightness-110 transition
              "
            >
              {loadingLang ? "…" : labels.bookNow} <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden ml-auto inline-flex items-center justify-center rounded-full px-3 py-2"
            aria-label="Open menu"
          >
            <span className="sr-only">Open menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999]" dir={dir}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <div className="relative z-[1000] flex h-full w-full flex-col items-center justify-center text-white px-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 p-2"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="w-[92px] h-[82px] rounded-full object-cover border-2 border-white/80 bg-white mb-6"
            />

            {/* Language dropdown (MOBILE) */}
            <select
              aria-label="Language"
              value={lang}
              onChange={handleLangChange}
              className="mb-6 px-3 py-2 rounded-lg bg-white text-[#083438] border border-white/80 outline-none"
            >
              {SUPPORTED.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>

            <nav className="flex flex-col items-center gap-5 text-lg font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">
                {labels.home}
              </Link>
              <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:underline">
                {labels.about}
              </Link>
              <Link href="/#tours" onClick={() => setMenuOpen(false)} className="hover:underline">
                {labels.tours}
              </Link>
              <Link href="/#transfer" onClick={() => setMenuOpen(false)} className="hover:underline">
                {labels.transfers}
              </Link>
              <Link href="/ContactUs" onClick={() => setMenuOpen(false)} className="hover:underline">
                {labels.contact}
              </Link>
              <Link
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full font-semibold
                  px-5 py-2 min-w-[160px]
                  bg-[#1ad1a3] text-[#083438]
                  border-2 border-white/80 shadow-[0_6px_20px_rgba(0,0,0,.25)]
                  hover:brightness-110 transition"
              >
                {labels.bookNow} <span className="ml-1">›</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-10 right-4 md:right-6 z-[9999]
                   bg-[#082733] hover:bg-[#20b358] text-white
                   rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out
                   hover:scale-110 hover:shadow-xl"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
        </svg>
      </button>
    </>
  );
}
