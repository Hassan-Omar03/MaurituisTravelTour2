// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import bg from "../../Assests/bg.jpg";
import about from "../../Assests/a.jpg";
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar";
import org from "../../Assests/org.jpeg";
import { T } from "@/lib/i18n-global";
export default function HomePage() {



  const [aboutOpen, setAboutOpen] = useState(false);


  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-animate]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-[#082733] text-[#0d1b1e]">
      {/* Top strip */}

      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative h-[100vh] min-h-[560px] max-h-[800px] overflow-hidden"
      >
        <Image
          src={bg}
          alt="Mauritius aerial"
          fill
          priority
          className="object-cover absolute z-0"
        />

        {/* Overlay container */}
        <div className="relative z-10 flex w-[90%] max-w-[1300px] mx-auto items-end justify-center h-full">
          <div className="flex justify-center items-center flex-wrap gap-8 mb-24" >
          <h1 className="md:text-6xl text-4xl text-white"><T>Taking you to the</T> <br /> <T>Best Places in Mauritius</T> </h1>
         <a
  href="https://wa.me/23057526968?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20tours."
  target="_blank"
  aria-label="WhatsApp Us"
  rel="noopener noreferrer"
>
  <button className="bg-slate-600 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
    <span>Book Your Ride Now</span> &#8250;
  </button>
</a>
          </div>
        </div>
      </section>


      {/* About — exact layout: left small image, right text */}
      <section id="about" data-animate="fade" className="bg-[#0b2930] text-white py-10 overflow-x-hidden">
        <div className="max-w-[1300px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-6 md:gap-12 items-start">
          {/* Left: smaller image like screenshot */}
          <div className="justify-self-start self-start ">
            <img
              src={about.src}
              alt="Lagoon"
              className="
        block
        w-[min(96vw,820px)]  lg:w-[740px] xl:w-[780px]
        h-auto
        ring-1 ring-white/15
        shadow-[0_12px_28px_rgba(0,0,0,.35)]
      "
            />
          </div>

          {/* Right: text */}
          <div className="self-center lg:pl-8">
                      <p className="text-xl tracking-[.14em] uppercase text-white mb-1"><T>About Us</T></p>
          
                      <h2 className="m-0 mb-3 text-[42px] leading-tight text-[#25c7e0]">
                        <T>Discover Your Next Adventure</T>
                      </h2>
          
                      <p className="text-white leading-5">
                        <T>Welcome to Mauritius Travel & Tour, your trusted travel companion with over a decade of dedicated service. We take pride in providing dependable, comfortable, and tailored transportation experiences across the stunning island of Mauritius.</T>
                        <br />
                      </p>
                      <br />
          
                      {/* NEW: Expandable continuation without moving content elsewhere */}
                      <p className="text-white leading-5">
                        <T>
                          At Mauritius Travel & Tour, every trip is more than just a transfer — it’s a journey built on care, comfort, and convenience. Whether you’re exploring Mauritius for the first time or traveling as a local, our modern vehicles and professional chauffeurs ensure every ride is safe, smooth, and enjoyable. From airport pickups to full-day tours and private excursions, we’re committed to turning every journey into a memorable experience.
                        </T>
                        <br />
                        <br />
                        {aboutOpen && (
                          <>
                            <T>
Our mission goes beyond transportation — we connect people with the true beauty of Mauritius. With personalized itineraries, local insights, and a passion for excellence, we help you discover hidden gems, cultural landmarks, and scenic wonders at your own pace. Travel with confidence, knowing you’re in the hands of a team that values reliability, hospitality, and your complete satisfaction.
                            </T>
                          </>
                        )}
          
                      </p>
          
            {/* Grey medium-radius pill */}
            <a
              href="#about-more"
              onClick={(e) => {
                e.preventDefault();
                setAboutOpen((v) => !v);
              }}
              className="
            inline-flex mt-4 items-center justify-center gap-2
            px-5 py-2 w-[250px] rounded-[18px] text-[14px] 
            text-white
            bg-gray-500
            transition-transform active:translate-y-[1px]
          "
            >
              {aboutOpen ? "Show Less" : "Read More"} <span className="translate-y-[1px]">›</span>
            </a>
          </div>
        </div>
      </section>
      <section data-animate="fade" className="bg-[#f5fbfc]">
        <div className="mx-auto max-w-[1300px] px-5 py-16 grid gap-10 lg:grid-cols-[1.05fr_.95fr] items-center">
          {/* LEFT: heading + copy */}
          <div className="flex flex-col max-lg:justify-center" >
            <h2 className="m-0 text-4xl md:text-5xl leading-[1.05] text-[#35c9c3]">
              <T>Meet the Organizer</T>
              <br />
              <span className="text-[#35c9c3]">The Vision Behind It All</span>
            </h2>

            <p className="mt-4 max-w-[560px] ml-0 md:ml-3 text-[15px] leading-[1.09] text-[#1c2b2d]">
              <T>Behind every successful event</T> <T> is a passionate team working </T> <br className="md:block hidden" /><T>tirelessly to bring every detail to life.</T> 
              <T>Dedicated to excellence</T> <br className="md:block hidden" /> <T>and creativity, our organizers ensure each moment runs</T> <br /> <T>smoothly and
              leaves a lasting impression.</T>
            </p>
          </div>

          {/* RIGHT: layered shapes + card */}
          <div className="relative flex justify-center">
            {/* layered rounded squares behind the card */}
            {/* layered rounded squares behind the card (proper rotate) */}
            <div aria-hidden className="absolute -z-[1] top-6 right-10 w-[220px] md:w-[500px] h-[140px] md:h-[180px] rounded-[32px] bg-[#0b2930]/10 rotate-[-25deg] shadow-[0_18px_40px_rgba(0,0,0,.10)]" />
            <div aria-hidden className="absolute -z-[1] top-2 right-4  w-[240px] md:w-[500px] h-[130px] md:h-[200px] rounded-[32px] bg-[#0b2930]/20 rotate-[20deg]   shadow-[0_18px_40px_rgba(0,0,0,.10)]" />
            <div aria-hidden className="absolute -z-[1] top-0 right-12 w-[210px] md:w-[500px] h-[120px] md:h-[180px] rounded-[32px] bg-[#0b2930]/30 rotate-[14deg]  shadow-[0_18px_40px_rgba(0,0,0,.10)]" />

            {/* foreground card */}
            <div className="w-[300px] md:w-[320px] rounded-[22px] bg-white text-[#0b2930] shadow-[0_20px_60px_rgba(0,0,0,.18)]">
              <div className="p-4 pb-3">
                <img src={org.src} alt="Organizer" className="w-full h-[220px] md:h-[240px] object-cover rounded-[16px]" />
              </div>
              <div className="px-5 pb-6 text-center">
                <div className="font-semibold tracking-wide text-[18px]">ADIL &amp; HAPPY CLIENTS</div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[#3b4c4f]">
                At Mauritius Travel & Tour, our journey with happy clients has spanned over 10 years — built on trust, comfort, and excellent service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* responsive + animation tweaks */}
      <style>{`
          /* Section reveal */
          [data-animate="fade"]{
            opacity: 0;
            transform: translateY(16px);
            transition: opacity .6s ease, transform .6s ease;
          }
          [data-animate="fade"].in-view{
            opacity: 1;
            transform: translateY(0);
          }

          /* Card text legibility on very small devices */
          @media (max-width: 380px){
            #tours article .text-[17px]{ font-size: 16px; }
            #tours article .text-[13.5px]{ font-size: 13px; }
          }

          /* Hero CTA: keep off edges on tiny screens */
          @media (max-width: 480px){
            #home a[href="#book"]{
              width: 85vw !important;
              min-width: 0 !important;
            }
          }

          @media (max-width: 780px){
            /* compact nav pill on mobile */
            .brand strong{ display: none; }
          }
        `}</style>
    </main>
  );
}
