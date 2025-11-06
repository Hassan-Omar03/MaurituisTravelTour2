// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero3 from "../../Assests/hero3.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Join from "../Components/Join";
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
     <Navbar />
      <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
        <Image src={hero3} alt="Mauritius aerial" fill priority className="object-cover absolute z-0" />
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

      {/* About — exact layout: left small image, right text */}
  
<div className="bg-white">
  <section className="relative bg-[#062E3D] text-white overflow-hidden rounded-b-[500px]">
    {/* --- Content --- */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-medium mb-2 text-teal-300"><T>Package 1</T></h2>
      <h1 className="text-4xl md:text-5xl font-medium text-teal-300 mb-2">
        <T>Dreamy Mauritius</T>
      </h1>
      <p className="text-4xl md:text-5xl  mb-8 text-teal-300"><T>As from Rs 3000 per trip</T></p>

      {/* Intro */}
<p className="text-white mb-12">
  <T>
              At Mauritius Travel & Tour, we’re dedicated to providing service that exceeds expectations — blending safety, comfort, and spotless cleanliness to make every journey both dependable and delightful.
            </T>
</p>


      {/* Info Boxes */}
      {/* Info Boxes */}
<div className="grid md:grid-cols-2 gap-6 mb-10 justify-center">
  {/* PLACES TO VISIT */}
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl sm:p-6 p-2 text-left shadow-md w-full max-w-[520px] mx-auto">
    <div className="text-center">
      <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
        <T>PLACES TO VISIT</T>
      </h3>
    </div>

    <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
<li><T>Pick-up from any resort or residence in the morning</T></li>
<li><T>Explore the famous Pamplemousses Botanical Garden</T></li>
<li><T>Discover the fascinating Aventure du Sucre Museum</T></li>
<li><T>Shop and wander around Grand Baie Bazar</T></li>
<li><T>Enjoy Sea Turtle spotting at Trou aux Biches Beach</T></li>
<li><T>Admire the Red Church located at Cap Malheureux</T></li>
<li><T>Return and drop-off at your hotel or residence</T></li>
    </ul>
  </div>

  {/* TOUR DESCRIPTION */}
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl sm:p-6 p-2 text-left shadow-md w-full max-w-[520px] mx-auto">
    <div className="text-center">
      <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
        <T>TOUR DESCRIPTION</T>
      </h3>
    </div>

    <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
<li>• <T>Tour Availability: Every single day</T></li>
<li>• <T>Tour Duration: Around 8 Hours (Full Day)</T></li>
<li>•<T>With our flexible Pick-Up hours you can start your trip anytime between 8:30 Am and 10:00 Am</T></li>
<li>•<T>Free Wi-Fi connection available inside Vehicle</T></li>
    </ul>
  </div>
</div>

{/* ADDITIONAL DETAILS */}
<div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl 
                sm:p-6 p-2 text-left shadow-md w-full max-w-[800px] mx-auto mb-50">
  <div className="text-center">
    <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold 
                   px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
      <T>ADDITIONAL DETAILS</T>
    </h3>
  </div>

  <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
<li>• <T>Payment can be done in cash to the driver using MUR, USD or EUR</T>.</li>
<li>• <T>Charges are per vehicle, not per traveler.</T></li>
<li>• <T>Full-day transport to all the sites mentioned above.</T></li>
<li>• <T>A polite English or French driver will share useful details during your travel.</T></li>
<li>• <T>Entrance ticket costs are not included.</T></li>
<li>• <T>For lunch, your driver will suggest top local restaurants ensuring a true culinary experience.</T></li>
<li>• <T>Arrangements may be made with your driver if you wish to combine 2 packages.</T></li>
<li>• <T>NOTE: 15-seater and 30-seater vehicles available.</T></li>
</ul>

</div>

    </div>
 </section>

{/* === Existing Attractions Section (your current code) === */}
<div className="flex max-w-[1300px] w-[90%] mx-auto flex-wrap justify-center items-center gap-6  pb-10 bg-white">
  {[
    {
      img: "/pamplemousse-garden-mauritius-travel-tour.jpg",
      title: "Pamplemousses Garden of Mauritius",
      desc: "Pamplemousses Botanical Garden in Mauritius, founded in the 18th century, covers 60 acres of exotic flora. Highlights feature giant water lilies and several rare palm species.",
    },
    {
      img: "/adventure-du-sucre-mauritius-travel-tour-min.jpg",
      title: "AVENTURE DU SUCRE",
      desc: "Aventure du Sucre is a museum set in a restored sugar factory. It explores Mauritius’ sugar heritage, displaying artifacts, machinery, and culture in a beautifully curated environment.",
    },
    {
      img: "/chateau-de-labordonnais-mauritius-travel-tour.jpg",
      title: "CHATEAU DE LABOURDONNAIS",
      desc: "Château de Labourdonnais is a grand estate reflecting colonial heritage. The 19th-century mansion is surrounded by lush gardens, fruit orchards, and a distillery offering exquisite local products.",
    },
  ].map((item, idx) => (
    <article
      key={idx}
      className="relative w-full sm:w-[390px] h-[420px] sm:h-[520px] md:h-[620px] rounded-[22px] overflow-hidden ring-4 ring-gray-400 shadow-lg transition-transform duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl flex-shrink-0 z-10 mx-auto"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* content area */}
      <div className="relative z-[1] px-6 pb-6 flex flex-col text-center justify-end h-full text-white">
        <h3 className="m-0 text-[18px] font-semibold text-white/95">
          <T>{item.title}</T>
        </h3>
        <p className="mt-2 text-[15px] leading-5 text-white/90 max-w-[60ch] mx-auto">
          <T>{item.desc}</T>
        </p>
      </div>
    </article>
  ))}
</div>


{/* === New 4-Image Section (same style/size as above) === */}
<div className="flex flex-wrap justify-center items-center gap-6 max-w-[1300px] w-[90%] mx-auto pb-10 bg-white">
  {[
    {
      img: "/bazzare-grande-baie-mauritius-travel-tour.jpg",
      title: "GRAND BAIE BAZAR",
      desc: "Grand Baie Bazar in Mauritius is a lively marketplace filled with local crafts, clothing, and souvenirs. Visitors browse colorful stalls of spices, art, and handmade goods in a vibrant setting.",
    },
    {
      img: "/sea-turtle-signtseeing-mauritius-travel-tour.jpg",
      title: "SEA TURTLE SIGHTING",
      desc: "Trou aux Biches Beach is a breathtaking location for sea turtle encounters. Its clear turquoise waters offer a serene setting where snorkelers often swim beside these gentle marine creatures.",
    },
    {
      img: "/red-church-mauritius-travel-tour.jpg",
      title: "RED CHURCH",
      desc: "The Red Church at Cap Malheureux stands as a famous landmark with beautiful ocean views and vivid architecture — ideal for photos. Its bold red roof contrasts perfectly with the bright lagoon.",
    },
  ].map((item, idx) => (
    <article
      key={idx}
      className="relative w-full sm:w-[390px] h-[420px] sm:h-[520px] md:h-[620px] rounded-[22px] overflow-hidden ring-4 ring-gray-400 shadow-lg transition-transform duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl flex-shrink-0 z-10 mx-auto"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* content area */}
      <div className="relative z-[1] px-6 pb-6 flex flex-col text-center justify-end h-full text-white">
        <h3 className="m-0 text-[18px] font-semibold text-white/95">
          {item.title}
        </h3>
        <p className="mt-2 text-[15px] leading-5 text-white/90 max-w-[60ch] mx-auto">
          <T>{item.desc}</T>
        </p>
      </div>
    </article>
  ))}
</div>

</div>
<Join/>
<Footer/>

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
