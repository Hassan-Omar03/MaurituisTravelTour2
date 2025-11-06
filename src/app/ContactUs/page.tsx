// app/contact/page.tsx
"use client";

import React, { useEffect, useState } from "react";

import e from "../../Assests/e.png"
import call from "../../Assests/call.png"

import logo from "../../Assests/logo.jpeg";

import { Instagram, Facebook, Music2, Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  

  // lock scroll when mobile menu is open
  
  // simple reveal on scroll (matches home page pattern)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-animate]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const faqs = [
    {
      q: "How do I book a tour?",
      a: "Send us a WhatsApp message or call us with your preferred date, pickup point, and number of guests. We’ll confirm availability and share payment options."
    },
    {
      q: "What's included in the tour price?",
      a: "Private vehicle with experienced driver, hotel pickup/drop-off, fuel, and parking. Attraction tickets and meals are usually not included unless specified."
    },
    {
      q: "Can tours be customized?",
      a: "Yes. We happily tailor itineraries to your schedule and interests—family-friendly, photography stops, restaurant choices, and more."
    },
    {
      q: "What if the weather is bad?",
      a: "We monitor forecasts. If weather is unsafe, we’ll reschedule at no cost or suggest safe alternatives for the day."
    },
    {
      q: "How many people can join a tour?",
      a: "Our standard vehicle fits up to 4 passengers comfortably. Bigger groups can be arranged—just let us know the headcount."
    },
    {
      q: "Do you provide airport transfers?",
      a: "Yes, 24/7 airport pickups and drop-offs with flight tracking. Ask for our fixed rates by zone."
    },
  ];

  return (
    <main className="bg-[#082733] text-[#0d1b1e]">
      <Navbar/>
      {/* Header */}
      <section className="pt-[120px] pb-6 text-white">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="text-4xl text-blue-400 font-bold">Get In Touch</h1>
          <p className="mt-2 text-white/85 max-w-[89ch] mx-auto">
            Ready to explore Mauritius? Contact us to discuss your dream tour, ask questions, or get <br /> personalized recommendations.
            We’re here to help you create unforgettable memories.
          </p>
        </div>
      </section>

      {/* Main two column cards */}
      <section id="contact" className="pb-10">
        <div className="max-w-[1100px] mx-auto px-4 grid gap-5 md:grid-cols-2 items-start">
          {/* Left column */}
          <div className="space-y-5">
            {/* WhatsApp card */}
            <div className="rounded-xl bg-[#22c55e] text-white p-5 shadow-[0_12px_28px_rgba(0,0,0,.25)]">
              <div className="flex items-center gap-2 text-[17px] font-semibold">
                <span>🟢</span>
                <span>WhatsApp – Fastest Response</span>
              </div>
              <p className="mt-2 text-white/95 text-[14.5px]">
                Get instant replies and share photos of places you’d like to visit. Available 24/7 for your convenience.
              </p>

              {/* fake input pill like screenshot */}
              <a
                href="https://wa.me/23057526968?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20tours."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-[220px] h-[38px] items-center justify-center rounded-full bg-white text-[#14532d] font-medium"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Alternative contact methods */}
            <div className="rounded-xl bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,.18)]">
              <h3 className="text-blue-400 text-xl font-semibold">Alternative Contact Methods</h3>

              <div className="mt-4 space-y-4 text-[15px] text-[#0b1e21]">
                <div className="flex gap-3">
                  <Phone size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Phone Call</div>
                    <a href="tel:+23057526968" className="text-blue-400 hover:underline">+230 5752 6968</a>
                    <div className="text-[13px] text-[#527177]">Available daily 6:00 AM – 8:00 PM</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:info@mauritiustraveltour.com" className="text-blue-400 hover:underline">info@mauritiustraveltour.com</a>
                    <div className="text-[13px] text-[#527177]">Response within 2 hours during business hours</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-blue-400">Flic en Flac, West Coast</div>
                    <div className="text-[13px] text-blue-400">Mauritius, Indian Ocean</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Operating Hours</div>
                    <div className="text-blue-400">Daily: 6:00 AM – 8:00 PM</div>
                    <div className="text-[13px] text-blue-400">WhatsApp available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* FAQ accordion */}
            <div className="rounded-xl bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,.18)]">
              <h3 className="text-2xl text-blue-400 font-semibold">Frequently Asked Questions</h3>

              <div className="mt-3 divide-y divide-[#e8f0f1]">
                {faqs.map((item, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={i}>
                      <button
                        className="w-full flex items-center justify-between gap-4 py-3 text-left"
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                      >
                        <span className="text-[15px] text-[#0b1e21]">{item.q}</span>
                        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} size={18} />
                      </button>
                      {open && (
                        <div className="pb-3 pt-1 text-[14px] text-[#33575c]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <a
                href="https://wa.me/23057526968?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20tours."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#f0d7ac] text-[#6b4b1b] py-3 text-[14.5px] font-medium"
              >
                Have a different question? <span className="ml-1 underline">Contact us directly</span>
              </a>
            </div>

            {/* Quick information card */}
            <div className="rounded-xl bg-[#f3e5c7] text-[#1b2b2e] p-5 shadow-[0_10px_24px_rgba(0,0,0,.18)]">
              <h4 className="sr-only">Quick Information</h4>
              <div className="grid gap-4 sm:grid-cols-2 text-[14.5px]">
                <div>
                  <div className="text-[#6d5530] text-[13px] uppercase tracking-wide">Languages:</div>
                  <div>English, French, Creole</div>
                  <div className="mt-3 text-[#6d5530] text-[13px] uppercase tracking-wide">License:</div>
                  <div>Experienced Driver</div>
                </div>
                <div>
                  <div className="text-[#6d5530] text-[13px] uppercase tracking-wide">Vehicle:</div>
                  <div>7-seater, air-conditioned</div>
                  <div className="mt-3 text-[#6d5530] text-[13px] uppercase tracking-wide">Authenticity:</div>
                  <div>Born in Mauritius</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (same as home) */}
      
    <Footer/>
      {/* reveal + small tweaks */}
      <style>{`
        [data-animate] { opacity: 0; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }
        [data-animate].in-view { opacity: 1; transform: translateY(0); }

        @media (max-width: 780px){ .brand strong{ display: none; } }
      `}</style>
    </main>
  );
}
