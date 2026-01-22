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
import { T } from "@/lib/i18n-global";
import Footer from "../Components/Footer";

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
          <h1 className="md:text-6xl text-4xl text-white"><T>Refresh Your Soul with</T> <br /> <T>Exclusive East Tours</T> </h1>
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
                <T>Choose a tour that</T><br className="hidden md:block" /> <T>satisfies your Soul</T>
              </h2>

              {/* aligned like first page: center on small, preserve your layout on larger */}
              <p className="mt-3  text-[15.5px] text-black max-w-[66ch] md:w-[75%] max-sm:mx-auto break-words">
               <T>
                                           Explore the tranquil charm of the East with Mauritius Travel & Tours, your trusted partner for more than a decade.
                                         </T>
              </p>
            </div>

            {/* pills right */}
            <div className="flex flex-col items-center md:pt-1">
              <h3 className="text-[#0e4f53] text-[24px] font-medium mb-3 text-center">
                <T>Our Awesome Services</T>
              </h3>

              <div className="flex flex-wrap justify-center gap-8">
                 <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/NorthTour")}
    >
      <T>North Tour</T>
    </button>
                <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/SouthTour")}
    >
      <T>South Tour</T>
    </button>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-8">
               <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#11c6c1] text-[#073436] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/EastTour")}
    >
      <T>East Tour</T>
    </button>
                  <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10"
      onClick={() => router.push("/WestTour")}
    >
      <T>West Tour</T>
    </button>
              </div>
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 bg-white w-full max-w-[1400px] mx-auto overflow-hidden">
  {[
    {
      title: "Package 1: East Tour 1",
      desc: "Embark on a thrilling speed boat trip to Ile aux Cerfs in Mauritius. Feel the rush as you glide across crystal-clear waters and arrive at this tropical paradise filled with white sand beaches and turquoise lagoons.",
      img: hero1.src,
      link: "/EastTourPkg1",
      Places: ["Ile Aux Cerfs trip by Speed Boat"],
    },
    {
      title: "Package 2: East Tour 2",
      desc: "Sail to Ile aux Cerfs on a catamaran in Mauritius for a relaxed and scenic journey. Enjoy the calm rhythm of the waves, breathtaking ocean views, and the island’s unspoiled beauty waiting to be explored.",
      img: hero1.src,
      link: "/EastTourPkg2",
      Places: ["Ile Aux Cerfs Trip by Catamaran"],
    },
    {
      title: "Package 3: East Tour 3",
      desc: "Experience the thrill of horse riding along Mauritius’ scenic east coast beaches. Enjoy peaceful rides by the turquoise lagoon or through lush coastal trails — a perfect blend of adventure and tranquility.",
      img: hero1.src,
      link: "/EastTourPkg3",
      Places: ["Horse Riding", "Flacq Centeral Market", "Coeur De Ville"],
    },
    {
      title: "Package 4: East Tour 4",
      desc: "A **boat trip to Île aux Cerfs and the Grand River South East Waterfall promises turquoise waters, lush riverbanks, and island charm. Gliding across the lagoon and up the river, it blends tropical beauty, gentle adventure, and unforgettable coastal scenery.",
      img: hero1.src,
      link: "/EastTourPkg4",
      Places: ["Île aux Cerfs"],
    },
    {
      title: "Package 5: East Tour 5",
      desc: "Legasea Horse Riding offers a serene escape where gentle horses move gracefully along sandy shores and coastal trails. With ocean breezes and open horizons, the experience blends nature, calm adventure, and the timeless romance of riding by the sea.",
      img: hero1.src,
      link: "/EastTourPkg5",
      Places: ["Legasea Horse Riding"],
    },
    {
      title: "Package 6: East Tour 6",
      desc: "A boat trip to visit the Five Islands and the Grand River South East Waterfall is a journey through Mauritius’ most scenic waters. Cruising past emerald islets and calm lagoons before reaching the cascading waterfall, the experience blends tropical beauty, gentle adventure, and unforgettable island views.",
      img: hero1.src,
      link: "/EastTourPkg6",
      Places: ["Grand River South East Waterfall"],
    },
    {
      title: "Package 7: East Tour 7",
      desc: "Saint Aubin Vanilla Plantation, set in the fertile south of Mauritius, delights with fragrant vines and lush tropical surroundings. Showcasing traditional cultivation and rich aromas, it reveals the island’s agricultural heritage and the delicate beauty of natural vanilla.",
      img: hero1.src,
      link: "/EastTourPkg7",
      Places: ["Saint Aubin Vanilla Plantation"],
    },
    
    {
      title: "Package 8: East Tour 8",
      desc: "Super U Flacq, a popular shopping stop in eastern Mauritius, offers a lively mix of local products, fresh foods, and international brands. With its vibrant atmosphere and wide variety, it reflects everyday island life and convenient modern shopping.",
      img: hero1.src,
      link: "/EastTourPkg8",
      Places: ["Super U Flacq"],
    },
    {
      title: "Package 9: East Tour 9",
      desc: "Bras d’Eau National Park, tucked away in the northeast of Mauritius, offers a peaceful escape with forest trails, native trees, and quiet wildlife. Blending coastal breezes with woodland calm, it reflects the island’s untouched nature and serene outdoor beauty.",
      img: hero1.src,
      link: "/EastTourPkg9",
      Places: ["Bras d’Eau National Park"],
    },
    {
      title: "Package 10: East Tour 10",
      desc: "Beaches on the east coast of Mauritius are known for their crystal-clear lagoons, soft white sand, and peaceful atmosphere. Bathed in gentle sunlight and cooled by ocean breezes, they offer a perfect setting for relaxation, scenic walks, and enjoying the island’s natural coastal beauty.",
      img: hero1.src,
      link: "/EastTourPkg10",
      Places: ["Beaches on the east coast"],
    },
    {
      title: "Package 11: East Tour 11",
      desc: "Flacq Market, a modern shopping hub in eastern Mauritius, blends convenience with a relaxed island vibe. With popular brands, cafés, and entertainment under one roof, it offers a comfortable spot to shop, dine, and unwind",
      img: hero1.src,
      link: "/EastTourPkg11",
      Places: ["Flacq Market"],
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
      {/* subtle top-to-bottom gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

      <div className="relative z-[1] px-5 pb-6 flex flex-col justify-end h-full text-white">
        <h3 className="m-0 text-[18px] md:text-[20px] font-semibold text-white/95 text-center">
          <T>{card.title}</T>
        </h3>

        <p className="mt-1 text-[14px] md:text-[15px] leading-5 text-white/90 text-center"><T>{card.desc}</T></p>

        <div className="mt-4 flex justify-center items-center gap-4">
          {[
            {
              icon: money,
              text: (
                <>
                  Pricing - <br />as from Rs 3000
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
                  Approximate Timing - 8 hrs
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 w-[90px] sm:w-[100px] h-[90px] sm:h-[100px]
                rounded-[18px] bg-white/25 ring-1 ring-white/35 backdrop-blur-[2px] text-center"
            >
              <Image src={item.icon} alt="" width={26} height={26} className="opacity-95" />
              <span className="text-[11px] sm:text-[12px] leading-tight">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href={card.link}
            className="inline-flex items-center justify-center text-center rounded-full px-6 py-3 text-[13px] sm:text-[14px]
              bg-[#11c6c1] text-[#073436] font-medium shadow-[0_8px_24px_rgba(0,0,0,.25)] hover:bg-[#0fb0ad] transition"
          >
            Get Details &amp; Pricing
          </Link>
        </div>

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
