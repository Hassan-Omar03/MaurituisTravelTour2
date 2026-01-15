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
          <h1 className="md:text-6xl text-4xl text-white">Refresh Your Soul with <br /> Exclusive South Tours </h1>
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
                Discover the wild beauty of the South with Mauritius Travel & Tours, your trusted companion for over 10 years.
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
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#11c6c1] text-[#073436] shadow-sm ring-1 ring-[#0e4f53]/10"
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
                <button className="sm:w-44 w-36 rounded-full py-3 text-[14px]  bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10">
                  West Tour
                </button>
              </div>
            </div>
          </div>

         {/* cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 bg-white w-full max-w-[1400px] mx-auto overflow-hidden">
  {[
    {
      title: "Package 1: South Tour 1",
      desc: "Trou aux Cerfs Volcano in Mauritius is a dormant crater blanketed by lush greenery and panoramic scenery. This remarkable site offers sweeping island views and a glimpse into Mauritius’ volcanic past, making it a highlight for visitors.",
      img: hero1.src,
      link: "/SouthTourPkg1",
      places: ["Trou aux Cerfs Volcano", "Ship Model Factory", "Horse Riding on the Beach"],
    },
    {
      title: "Package 2: South Tour 2",
      desc: "The Ship Model Factory in Floreal is an inspiring workshop where skilled craftsmen create intricate miniature vessels. Combining artistry and history, it showcases detailed craftsmanship and the island’s strong maritime tradition.",
      img: hero1.src,
      link: "/SouthTourPkg2",
      places: ["Bois Cheri Tea Factory", "Grand Bassin Ganga Talao", "Black River Gorges Viewpoint"],
    },
    {
      title: "Package 3: South Tour 3",
      desc: "Gris Gris, found on Mauritius’ untamed southern coast, captivates with its roaring waves and towering cliffs. With no coral reef to soften the surf, it displays the raw beauty and wild spirit of the Indian Ocean.",
      img: hero1.src,
      link: "/SouthTourPkg3",
      places: ["Gris Gris Angry Area", "Crocodile Park", "Marine Park"],
    },
    {
      title: "Package 4: South Tour 4",
      desc: "La Vallée des Couleurs Nature Park, nestled in the lush south of Mauritius, enchants visitors with rolling hills, vibrant earth tones, and winding adventure trails. Surrounded by waterfalls and forests, it blends natural beauty with thrilling experiences, capturing the island’s adventurous and colorful spirit.",
      img: hero1.src,
      link: "/SouthTourPkg4",
      places: ["La Valley Nature Park"],
    },
    {
      title: "Package 5: South Tour 5",
      desc: "Bois Chéri Tea Factory, set amid the cool green hills of southern Mauritius, charms visitors with endless tea plantations and soothing aromas. Overlooking a serene lake, it reveals the island’s tea heritage and peaceful countryside, offering a calm and refreshing escape.",
      img: hero1.src,
      link: "/SouthTourPkg5",
      places: ["Bois Cheri Tea Factory"],
    },
    {
      title: "Package 6: South Tour 6",
      desc: "Grand Bassin (Ganga Talao), nestled in the misty highlands of Mauritius, inspires serenity with its sacred waters and towering statues. Revered by pilgrims and surrounded by quiet forests, it reflects deep spirituality and cultural heritage, offering a peaceful and soulful retreat.",
      img: hero1.src,
      link: "/SouthTourPkg6",
      places: ["Grand Bassin Ganga Talao"],
    },
    {
      title: "Package 7: South Tour 7",
      desc: "Alexandra Falls, hidden within the lush Black River Gorges region, mesmerizes with cascading waters and sweeping valley views. Surrounded by dense greenery and cool mountain air, it captures Mauritius’ tranquil beauty and refreshing natural charm.",
      img: hero1.src,
      link: "/SouthTourPkg7",
      places: ["Alexandra Falls"],
    },
    {
      title: "Package 8: South Tour 8",
      desc: "Black River Gorges Viewpoint, perched above deep green valleys, offers breathtaking panoramas of forests, rivers, and distant peaks. Wrapped in cool air and untouched wilderness, it showcases Mauritius’ richest natural landscapes and serene highland beauty.",
      img: hero1.src,
      link: "/SouthTourPkg8",
      places: ["Black River Gorges Viewpoint"],
    },
    {
      title: "Package 9: South Tour 9",
      desc: "Curious Corner of Chamarel, tucked away in the scenic south-west of Mauritius, delights visitors with mind-bending illusions and playful exhibits. Blending creativity, science, and fun, it challenges perception and sparks curiosity, offering a light-hearted and unforgettable experience.",
      img: hero1.src,
      link: "/SouthTourPkg9",
      places: ["Curious Corner of Chamarel"],
    },
    {
      title: "Package 10: South Tour 10",
      desc: "Chamarel Waterfall, plunging dramatically through lush greenery, captivates with its powerful cascade and misty depths. Set within a verdant valley, it reflects the raw natural beauty and serene charm of Mauritius’ southwest.",
      img: hero1.src,
      link: "/SouthTourPkg10",
      places: ["Chamarel Waterfall"],
    },
    {
      title: "Package 11: South Tour 11",
      desc: "Chamarel Seven Coloured Earth, a rare natural wonder in southwest Mauritius, amazes with rolling dunes of naturally layered hues. Formed by volcanic activity and untouched by time, it showcases the island’s unique geology and vibrant natural beauty.",
      img: hero1.src,
      link: "/SouthTourPkg11",
      places: ["Chamarel Seven Coloured Earth"],
    },
    {
      title: "Package 12: South Tour 12",
      desc: "Set along Mauritius’ shoreline, the coastal sea view enchants with endless horizons, gentle breezes, and shifting shades of blue. Where sky meets ocean, it captures the island’s relaxed rhythm and timeless beauty, offering moments of calm and quiet reflection.",
      img: hero1.src,
      link: "/SouthTourPkg12",
      places: ["Coastal Sea View"],
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

      <div className="relative z-[1] px-5 pb-6 flex flex-col justify-end h-full text-white">
        <h3 className="m-0 text-[18px] md:text-[20px] font-semibold text-white/95 text-center">
          {card.title}
        </h3>

        <p className="mt-1 text-[14px] md:text-[15px] leading-5 text-white/90 text-center">
          {card.desc}
        </p>

        {/* ✅ 3 boxes always in one line */}
        <div className="mt-4 flex justify-center items-center gap-4">
          {[
            { icon: money, text: <>Pricing - <br />as from Rs 3000</> },
            { icon: group, text: <>Travel Members <br />1–4 persons</> },
            { icon: timing, text: <> Approximate Timing - 8 hrs</> },
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
          {card.places?.length ? card.places.join(" | ") : <T>place | place | place</T>}
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
      `}</style>
    </main>
  );
}
