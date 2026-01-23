// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero from "../../Assests/hero2.png";
import hero1 from "../../Assests/hero.png";
import money from "../../Assests/money.png";
import group from "../../Assests/groups.png";
import timing from "../../Assests/timing.png";
import logo from "../../Assests/logo.jpeg";
import e from "../../Assests/e.png";
import call from "../../Assests/call.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Instagram, Facebook, Music2 } from "lucide-react";
import Navbar from "../Components/Navbar";
import Join from "../Components/Join";
import Footer from "../Components/Footer";
import { T } from "@/lib/i18n-global";

export default function HomePage() {

  const router = useRouter();
  
  const [aboutOpen, setAboutOpen] = useState(false);

  
  // Reveal on scroll (same as first page)
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
      {/* Hero (typo fixed + mobile CTA width like first page) */}
      <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
        <Image src={hero} alt="Mauritius aerial" fill priority className="object-cover absolute z-0" />
       <div className="relative z-10 flex w-[90%] max-w-[1300px] mx-auto items-end justify-center h-full">
          <div className="flex justify-center items-center flex-wrap gap-8 mb-24" >
          <h1 className="md:text-6xl text-4xl text-white">Refresh Your Soul with <br /> Exclusive West Tours </h1>
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

      {/* Tours + Services */}
      <section id="tours" data-animate="fade" className="py-16 bg-white overflow-x-hidden">
        <div className="mx-auto w-[90%] max-w-[1300px]">
          {/* header row */}
          <div className="grid gap-6 md:gap-4 md:grid-cols-2 xl:max-w-[1100px] max-w-[900px] mx-auto items-start mb-12">
            <div>
              <h2 className="text-[clamp(28px,3.2vw,52px)]   leading-[1.12] text-[#11c6c1] m-0">
                Choose a tour that<br className="hidden md:block" /> satisfies your Soul
              </h2>

              {/* aligned like first page: center on small, preserve your layout on larger */}
              <p className="mt-3  text-[15.5px] text-black max-w-[66ch] md:w-[75%] max-sm:mx-auto break-words">
                Experience the golden sunsets of the West with Mauritius Travel & Tours, your reliable partner for over 10 years.
              </p>
            </div>

            {/* pills right */}
            <div className="lex flex-col items-center md:pt-1">
              <h3 className="text-[#0e4f53] text-[24px] font-medium mb-3 text-center">
                Our Awesome Services
              </h3>

              <div className="flex flex-wrap justify-center gap-8">
                 <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/NorthTour")}
    >
      North Tour
    </button>
                <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/SouthTour")}
    >
      South Tour
    </button>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-8">
               <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/EastTour")}
    >
      East Tour
    </button>
               <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#11c6c1] text-[#073436] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/WesttTour")}
    >
      West Tour
    </button>
              </div>
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 bg-white w-full max-w-[1400px] mx-auto overflow-hidden">
  {[
    {
      title: "Package 1: West Tour 1",
      desc: "Dolphin watching in the west of Mauritius offers a mesmerizing experience. Cruise through azure waters, encountering playful dolphins in their natural habitat, creating unforgettable moments amid the scenic coastal beauty",
      img: hero1.src,
      link: "/WestTourPkg1",
      Places: ["Dolphin Watching"],
    },
   
    {
      title: "Package 2: West Tour 2",
      desc: "Casela Nature Parks is a vibrant adventure and wildlife park set against the scenic landscapes of western Mauritius. Surrounded by mountains and open plains, it offers close encounters with exotic animals along with thrilling activities like .",
      img: hero1.src,
      link: "/WestTourPkg2",
      Places: ["Casela Nature Park"],
    },
    {
      title: "Package 3: West Tour 3",
      desc: "Dolphin and Whale Watching in Mauritius offers an unforgettable encounter with ocean life in the island’s deep blue waters. Guided boat excursions reveal playful dolphins and majestic whales in their natural habitat, blending adventure, respect for nature, and the breathtaking beauty of the Indian Ocean.",
      img: hero1.src,
      link: "/WestTourPkg3",
      Places: ["Dolphin and Whale Watching"],
    },
    {
      title: "Package 4: West Tour 4",
      desc: "Île aux Bénitiers and Crystal Rock offer a picture-perfect escape in the southwest lagoon of Mauritius. Surrounded by shallow turquoise waters and dramatic mountain backdrops, this serene island trip blends natural beauty, crystal-clear seas, and relaxed island vibes, making it one of the most scenic experiences on the coast.",
      img: hero1.src,
      link: "/WestTourPkg4",
      Places: ["Île aux Bénitiers and Crystal Rock"],
    },
    {
      title: "Package 5: West Tour 5",
      desc: "Seaplane at La Prairie Lagoon offers a breathtaking aerial view of Mauritius’ turquoise lagoons and dramatic coastline. Taking off and landing on calm waters, the experience combines thrill and elegance, revealing coral reefs, sandbanks, and mountain backdrops from a truly unique perspective.",
      img: hero1.src,
      link: "/WestTourPkg5",
      Places: ["Seaplane at La Prairie Lagoon"],
    },
    {
      title: "Package 6: West Tour 6",
      desc: "Le Morne Brabant hiking is a rewarding adventure that leads through lush trails to breathtaking panoramic views. Rising above the southwest coast, this UNESCO World Heritage mountain blends natural beauty, history, and challenge, offering sweeping vistas of turquoise lagoons and the open Indian Ocean.",
      img: hero1.src,
      link: "/WestTourPkg6",
      Places: ["Le Morne Brabant"],
    },
    {
      title: "Package 7: West Tour 7",
      desc: "Tamarind Falls, also known as the Seven Cascades, is a hidden natural treasure set deep within lush forests and rugged valleys. This breathtaking site reveals a series of cascading waterfalls, natural pools, and dramatic landscapes, offering a true sense of adventure and untouched beauty in the heart of Mauritius.",
      img: hero1.src,
      link: "/WestTourPkg7",
      Places: ["Casela Nature And Leisure Park"],
    },
    
  ].map((card, idx) => (
  <article
  key={idx}
  className="relative w-full h-[580px] sm:h-[600px] rounded-[22px] overflow-hidden ring-4 ring-gray-300 flex flex-col"
  style={{
    backgroundImage: `url(${card.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

  <div className="relative z-[1] px-5 pb-6 flex flex-col justify-end h-full text-white text-center">
    {/* TITLE */}
    <h3 className="m-0 text-[18px] md:text-[20px] font-semibold text-white/95">
      <T>{card.title}</T>
    </h3>

    {/* DESCRIPTION */}
    <p className="mt-1 text-[14px] md:text-[15px] leading-5 text-white/90">
      <T>{card.desc}</T>
    </p>

    {/* INFO BOXES */}
    <div className="mt-4 flex justify-center items-center gap-2 sm:gap-4 flex-nowrap">
      {[
        {
          icon: money,
          text: (
            <>
              Pricing <br />as from Rs 3000
            </>
          ),
        },
        {
          icon: group,
          text: (
            <>
              Travel Members <br />1–4 persons
            </>
          ),
        },
        {
          icon: timing,
          text: (
            <>
              Approximate Timing <br />8 hrs
            </>
          ),
        },
      ].map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center gap-1
          w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]
          rounded-[18px] bg-white/25 ring-1 ring-white/35 backdrop-blur-[2px] text-center"
        >
          <Image src={item.icon} alt="" width={26} height={26} className="opacity-95" />
          <span className="text-[11px] sm:text-[12px] leading-tight">
            {item.text}
          </span>
        </div>
      ))}
    </div>

    {/* BUTTON */}
    <div className="mt-4 flex justify-center">
      <Link
        href={card.link}
        className="inline-flex items-center justify-center rounded-full px-6 py-3
        text-[13px] sm:text-[14px]
        bg-[#11c6c1] text-[#073436] font-medium
        shadow-[0_8px_24px_rgba(0,0,0,.25)]
        hover:bg-[#0fb0ad] transition"
      >
        Get Details &amp; Pricing
      </Link>
    </div>

    {/* PLACES */}
    <div className="mt-3 text-[10px] text-center text-white/85">
      {Array.isArray(card.Places) && card.Places.length
        ? card.Places.join(" | ")
        : <T>place | place | place</T>}
    </div>
  </div>
</article>

  ))}
</div>

        </div>
      </section>

      {/* Join / WhatsApp CTA block */}
    <Join/>

      <Footer/>
      {/* responsive + animation tweaks (same as first file) */}
      <style>{`
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
          .brand strong{ display: none; }
        }
          /* 🔥 CRITICAL FIX: mobile IntersectionObserver bug */
@media (max-width: 768px), (max-height: 700px) {
  [data-animate="fade"] {
    opacity: 1 !important;
    transform: none !important;
  }
}

      `}</style>
    </main>
  );
}
