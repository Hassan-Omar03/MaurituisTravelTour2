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
          <h1 className="md:text-6xl text-4xl text-white"><T>Refresh Your Soul with</T> <br /> <T>Exclusive North Tours</T> </h1>
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
              <h2 className="text-[clamp(28px,3.2vw,52px)]  leading-[1.12] text-[#11c6c1] m-0">
                <T>Choose a tour that</T><br className="hidden md:block" /> satisfies your Soul
              </h2>

              {/* aligned like first page: center on small, preserve your layout on larger */}
              <p className="mt-3  text-[15.5px] text-black max-w-[66ch] md:w-[75%] max-sm:mx-auto break-words">
                <T>
                            Uncover the vibrant spirit of the North with Mauritius Travel & Tours, your trusted travel guide for 10+ years.
                          </T>
                 
              </p>
            </div>

            {/* pills right */}
            <div className="lex flex-col items-center md:pt-1">
              <h3 className="text-[#0e4f53] text-[24px] font-medium mb-3 text-center">
                <T>Our Awesome Services</T>
              </h3>

              <div className="flex flex-wrap justify-center gap-8">
                <button
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#11c6c1] text-[#073436] shadow-sm ring-1 ring-[#0e4f53]/10"
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
      className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10"
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
      title: "Package 1: North Tour 1",
      desc: "Pamplemousses Botanical Garden in Mauritius, founded in the 18th century, stretches across 60 acres of lush greenery. Discover rare palms, exotic plants, and the iconic giant water lilies that make this garden a true natural treasure.",
      img: hero1.src,
      link: "/Pricing&Detail",
      places: ["Pamplemousses Garden of Mauritius", "Aventure Du Sucre", "Chateau De Labourdonnais"],
    },
    {
      title: "Package 2: North Tour 2",
      desc: "Grand Baie Bazaar in Mauritius is a lively marketplace filled with color and culture. Explore its many stalls offering handmade crafts, local textiles, fragrant spices, and unique souvenirs in a warm island atmosphere.",
      img: hero1.src,
      link: "/Package2",
      places: ["Caudan Waterfront", "Bazar Port Louis", "Fort Adelaide At Citadelle"],
    },
    {
      title: "Package 3: North Tour 3",
      desc: "Fort Adelaide (the Citadel) in Mauritius is a historic hilltop fortress rich with heritage and panoramic views. Discover its stone ramparts, colonial architecture, and sweeping vistas over Port Louis, offering a glimpse into the island’s past within a calm, elevated atmosphere.",
      img: hero1.src,
      link: "/NorthTourPkg3",
      places: ["Fort Adelaide At Citadelle"],
    },
    {
      title: "Package 4: North Tour 4",
      desc: "Caudan Waterfront in Mauritius is a vibrant seaside destination blending shopping, culture, and leisure. Explore its stylish boutiques, local craft markets, waterfront cafés, and scenic harbor views, all set within a lively yet relaxed coastal atmosphere.",
      img: hero1.src,
      link: "/NorthTourPkg4",
      places: ["Caudan Waterfront"],
    },
    {
      title: "Package 5: North Tour 5",
      desc: "Kuanfu Tea Shop is a cozy and modern spot known for its refreshing bubble teas and handcrafted drinks. Enjoy a variety of flavorful milk teas, fruit infusions, and signature blends, served in a relaxed atmosphere perfect for unwinding and casual meetups.",
      img: hero1.src,
      link: "/NorthTourPkg5",
      places: ["Kuanfu Tea Shop"],
    },
    {
      title: "Package 6: North Tour 6",
      desc: "Odysseo Oceanarium is a spectacular marine attraction showcasing the wonders of ocean life. Explore immersive exhibits, massive aquariums, and diverse marine species in a captivating environment that inspires learning, conservation, and appreciation for the underwater world.",
      img: hero1.src,
      link: "/NorthTourPkg6",
      places: ["Odysseo Oceanarium"],
    },
    {
      title: "Package 7: North Tour 7",
      desc: "L’Aventure du Sucre is a fascinating sugar factory museum that brings Mauritius’s rich heritage to life. Explore historic machinery, interactive exhibits, and the story of sugar production, culture, and trade, all set within a beautifully restored industrial setting.",
      img: hero1.src,
      link: "/NorthTourPkg7",
      places: ["L’Aventure du Sucre"],
    },
    
    {
      title: "Package 8: North Tour 8",
      desc: "Château de Labourdonnais is an elegant colonial estate reflecting Mauritius’s rich history and refinement. Explore its beautifully restored mansion, manicured gardens, and surrounding orchards, offering a graceful glimpse into island heritage and timeless charm.",
      img: hero1.src,
      link: "/NorthTourPkg8",
      places: ["Château de Labourdonnais"],
    },
    {
      title: "Package 9: North Tour 9",
      desc: "Blue Safari is an exciting underwater adventure offering a unique view of Mauritius’s marine life. Glide beneath the ocean’s surface in a submarine-style vessel and discover colorful coral reefs, tropical fish, and the beauty of the deep in a thrilling, immersive experience.",
      img: hero1.src,
      link: "/NorthTourPkg9",
      places: ["Blue Safari"],
    },
    {
      title: "Package 10: North Tour 10",
      desc: "Grand Baie La Croisette is a modern lifestyle and shopping destination in Mauritius. Enjoy its stylish stores, diverse dining options, entertainment spaces, and relaxed surroundings, making it a lively hub for leisure and everyday experiences.",
      img: hero1.src,
      link: "/NorthTourPkg10",
      places: ["Grand Baie La Croisette"],
    },
    {
      title: "Package 11: North Tour 11",
      desc: "Red Church (Notre-Dame Auxiliatrice) is a charming seaside landmark famous for its striking red roof and peaceful setting. Admire its simple architecture, oceanfront views, and serene atmosphere, making it one of Mauritius’s most photographed and tranquil sites.",
      img: hero1.src,
      link: "/NorthTourPkg11",
      places: ["Red Church (Notre-Dame Auxiliatrice)"],
    },
    {
          title: "Package 12: North Tour 12",
          desc: "Grand Baie Bazar in Mauritius is a vibrant market offering a fusion of local crafts, textiles, and souvenirs. Visitors explore stalls filled with colorful items, spices, and unique finds in a lively atmosphere.",
          img: hero1.src,
          link: "/NorthTourPkg12",
          places: ["Casela Nature and Leisure Park"],
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
  {Array.isArray(card.places) && card.places.length
    ? card.places.join(" | ")
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
