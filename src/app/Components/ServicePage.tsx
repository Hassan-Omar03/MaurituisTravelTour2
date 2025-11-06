// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import bg from "../../Assests/bg.jpg"
import about from "../../Assests/a.jpg";
import first from "../../Assests/first.jpeg";
import second from "../../Assests/second.jpg";
import third from "../../Assests/third.jpg";
import fourth from "../../Assests/fourth.jpg";
import airport from "../../Assests/r.jpg";
import cab from "../../Assests/cab.png";
import community from "../../Assests/community.png";
import location from "../../Assests/location.png";
import arrows from "../../Assests/arrows.png";
import day from "../../Assests/day.png";
import night from "../../Assests/night.png";
import org from "../../Assests/org.jpeg";
import Join from "./Join";
import Link from "next/link";
import Footer from "./Footer"
import Navbar from "./Navbar";
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
            <h1 className="md:text-6xl text-4xl text-white"> <T>Taking you to the</T> <br /><T>Best Places in Mauritius </T></h1>
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

      {/* Tours + Services */}
     <section id="tours" data-animate="fade" className="py-16 bg-white overflow-x-hidden">
  <div className="mx-auto w-[90%] max-w-[1300px]">
    {/* header row */}
    <div className="grid gap-6 md:gap-4 md:grid-cols-2 xl:max-w-[1100px] max-w-[900px] mx-auto items-start mb-12">
      <div>
        <h2 className="text-[clamp(28px,3.2vw,52px)] leading-[1.12] text-[#11c6c1] m-0">
          <T>Choose a tour that satisfies your Soul</T>
          <br className="hidden md:block" />
        </h2>

        <p className="mt-3 text-[15.5px] text-black max-w-[66ch] md:w-[75%] max-sm:mx-auto break-words">
          <T>
            At Mauritius Travel & Tour, we’re dedicated to providing service that exceeds expectations — blending safety, comfort, and spotless cleanliness to make every journey both dependable and delightful.
          </T>
        </p>
      </div>

      {/* pills right */}
      <div className="flex flex-col items-center md:pt-1">
        <h3 className="text-[#0e4f53] text-[24px] font-medium mb-3 text-center">
          <T>Our Awesome Services</T>
        </h3>

        {/* first row */}
        <div className="flex flex-wrap justify-center gap-8">
          <button className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10">
            <T>Airport Transfers</T>
          </button>
          <button className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] ring-1 ring-[#0e4f53]/10">
            <T>Hotel Transfers</T>
          </button>
        </div>

        {/* second row */}
        <div className="mt-3 flex flex-wrap justify-center gap-8">
          <button className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] ring-1 ring-[#0e4f53]/10">
            <T>Excursions</T>
          </button>
          <button className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] ring-1 ring-[#0e4f53]/10">
            <T>Door Step Services</T>
          </button>
        </div>
      </div>
    </div>

    {/* cards — clickable links */}
    <div
      className="
        grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2
        xl:[grid-template-columns:var(--c1)_var(--c2)_var(--c3)_var(--c4)]
        xl:[--c1:1.60fr] xl:[--c2:0.90fr] xl:[--c3:0.90fr] xl:[--c4:0.90fr]
        xl:transition-all xl:duration-700 xl:ease-in-out
        xl:[&:has(>a:nth-child(2):hover)]:[--c1:0.90fr]
        xl:[&:has(>a:nth-child(2):hover)]:[--c2:1.60fr]
        xl:[&:has(>a:nth-child(3):hover)]:[--c1:0.90fr]
        xl:[&:has(>a:nth-child(3):hover)]:[--c3:1.60fr]
        xl:[&:has(>a:nth-child(4):hover)]:[--c1:0.90fr]
        xl:[&:has(>a:nth-child(4):hover)]:[--c4:1.60fr]
      "
    >
      {[
        { img: first, alt: "North Tour", title: "NORTH TOUR", href: "/NorthTour" },
        { img: second, alt: "South Tour", title: "SOUTH TOUR", href: "/SouthTour" },
        { img: third, alt: "East Tour", title: "EAST TOUR", href: "/EastTour" },
        { img: fourth, alt: "West Tour", title: "WEST TOUR", href: "/WestTour" },
      ].map((c, i) => (
        <Link
          key={i}
          href={c.href}
          aria-label={`Open ${c.alt}`}
          className="group relative block
            h-[500px] md:h-[550px] xl:h-[640px]
            max-[480px]:h-[400px] max-[360px]:h-[350px]
            rounded-[22px] overflow-hidden text-white
            transition-all duration-[2500ms] ease-in-out
            hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,.35)] focus:outline-none"
        >
          <Image
            src={c.img}
            alt={c.alt}
            fill
            className="object-cover transition-all duration-[2500ms] ease-in-out group-hover:scale-[1.08] group-hover:brightness-[1.08]"
            placeholder="blur"
          />

          {/* corner icon */}
          <div className="absolute right-0 w-11 h-11 max-[360px]:w-9 max-[360px]:h-9 rounded-full grid place-items-center bg-[#0f2f33] text-[#e8ffff] ring-2 ring-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 max-[360px]:w-4 max-[360px]:h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 16 L16 8 M10 8h6v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* text */}
          <div className="absolute inset-x-0 bottom-0 p-5 max-[360px]:p-4">
            <h3 className="m-0 mb-1 tracking-[.02em] text-[17px] font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,.35)]">
              <T>{c.title}</T>
            </h3>
            <p className="m-0 text-[13.5px] leading-relaxed text-white/95 max-w-[36ch] drop-shadow-[0_1px_6px_rgba(0,0,0,.35)]">
              <T>Welcome to Mauritius Travel & Tours, your gateway to unforgettable island adventures — explore the South’s nature, the North’s charm, the East’s serenity, and the West’s sunsets.</T>
            </p>

            {/* Read More */}
            <span className="mt-4 inline-block rounded-full px-4 py-2 text-[13px] text-white bg-gray-500/90 ring-1 ring-white/15 transition duration-[2500ms] ease-in-out group-hover:bg-gray-500 group-hover:shadow-[0_6px_20px_rgba(0,0,0,.35)]">
              <T>View Tours</T> &#8250;
            </span>
          </div>

          <div className="absolute inset-0 ring-1 ring-white/10 rounded-[22px] pointer-events-none" />
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* Transfer Estimator */}
      <section
        id="transfer"
        data-animate="fade"
        className="relative isolate overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${airport.src})` }}
      >
        <div className="absolute inset-0 -z-10 bg-black/35" />

        <div className="relative mx-auto max-w-[1300px] px-5 pt-16 pb-24 text-white">
          {/* top-right glass cards */}
          <div className="hidden md:flex absolute right-30 top-20 z-[2] gap-6">
            <div
              className="flex w-[170px] h-[150px] flex-col items-center justify-center gap-3
                    rounded-[22px] bg-white/30 backdrop-blur-md
                    ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
            >
              <Image src={cab} alt="Cab" width={42} height={42} />
              <p className="m-0 px-5 text-center text-[14px] leading-snug text-white">
                <T>Customised transfer options available as per your needs</T>
              </p>
            </div>
            <div
              className="flex w-[170px] h-[150px] flex-col items-center justify-center gap-3
                    rounded-[22px] bg-white/30 backdrop-blur-md
                    ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
            >
              <Image src={community} alt="Group" width={42} height={42} />
              <p className="m-0 px-5 text-center text-[14px] leading-snug text-white">
                <T>We can arrange transfers for larger groups or multiple vehicles</T>
              </p>
            </div>
          </div>

          {/* left heading */}
        <div style={{ textShadow: "0 2px 10px rgba(0,0,0,.45)" }}>
  <h2 className="ml-0 md:ml-20 text-4xl md:text-5xl leading-[1.08] text-[#3fd0ca]">
  <T>Book Your Airport</T>
  <br className="hidden md:block" />
  <T>Transfer With Us</T>
</h2>


  <p className="mt-3 ml-0 md:ml-20 max-w-[520px] text-[15px] text-[#e6ffff]">
   
  <T>At Mauritius Travel & Tour, we make every arrival and departure effortless, offering punctual, comfortable, and stress-free airport transfers with vehicles maintained to the highest standards of quality and comfort.</T>


  </p>
</div>


          {/* ticket bar */}
          <div className="relative mt-10">
            <div className="relative mx-auto w-full max-w-[1060px] rounded-[30px] border border-white/35 bg-black/55 px-6 md:px-8 py-6 md:py-7 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
              {/* side notches */}
              <span className="pointer-events-none absolute -left-[22px] top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-transparent" />
              <span className="pointer-events-none absolute -right-[22px] top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto] items-center gap-6 md:gap-8">
                {/* FROM (text, not dropdown) */}
                <div className="">
                  <div className="flex flex-wrap items-center min-w-0 ml-0 md:ml-20 gap-2 text-[15px] sm:text-[16px] md:text-[18px] pl-3 md:pl-0 text-white">
                    <span><T>From</T></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src={location} alt="" width={60} height={26} />
                    <div className="text-[20px] md:text-[22px] leading-none">
                      <span className="opacity-95"><T>Airport (Mauritius)</T></span>
                    </div>
                  </div>
                </div>

                {/* arrows */}
                <div className="hidden md:flex items-center justify-center">
                  <Image src={arrows} alt="Swap" width={44} height={44} />
                </div>

                {/* TO (text, not dropdown) */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center min-w-0 ml-0 md:ml-20 gap-2 text-[15px] sm:text-[16px] md:text-[18px] pl-6 md:pl-0 text-white">
                    <span><T>To</T></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src={location} alt="" width={60} height={26} />
                    <div className="text-[20px] md:text-[22px] leading-none">
                      <span className="opacity-95">Hotel / <br className="sm:hidden block" />Accommodation</span>
                    </div>
                  </div>
                </div>

                {/* divider + day/night */}
                <div className="hidden md:flex items-center gap-4">
  <div className="h-12 w-px bg-white/80" />

  {/* Day */}
  <div className="flex flex-col items-center">
    <span className="text-md font-medium text-white "><T>Day</T></span>
    <div className="grid mb-5 place-items-center w-12 h-12 rounded-full bg-[#3fd0ca]">
      <Image src={day} alt="Day" width={26} height={26} />
    </div>
  </div>

  {/* Night */}
  <div className="flex flex-col items-center">
    <span className="text-md font-medium text-white "><T>Night</T></span>
    <div className="grid mb-5 place-items-center w-12 h-12 rounded-full bg-white">
      <Image src={night} alt="Night" width={26} height={26} className="invert" />
    </div>
  </div>
</div>
              </div>
            </div>
          </div>

          {/* price chip */}
          <div className="mt-6 flex justify-center">
            <div className="rounded-full border border-white/35 bg-black/55 px-6 md:px-8 py-3 text-[16px] shadow-[0_6px_30px_rgba(0,0,0,.35)]">
              <T>As from Rs 1,500 to Rs 2,500 - for up to 4 persons</T>
            </div>
          </div>
        </div>
      </section>

      {/* Organizer */}
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
      <Join />


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
