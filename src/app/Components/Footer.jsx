// src/app/Components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Music2 } from "lucide-react";
import google from "./GoogleReviews";

// ✅ adjust paths if your folder structure is different
import logo from "../../Assests/logo.jpeg";
import call from "../../Assests/call.png";
import e from "../../Assests/e.png";
import { T } from "@/lib/i18n-global";

export default function Footer() {


  return (
    <>
      <footer id="contact" data-animate="fade" className="bg-[#071f24] hidden md:block text-[#cfe]">
        <div
          className="
      mx-auto w-full max-w-[1300px] 2xl:max-w-[1400px]
      px-6 py-12
      grid gap-8 md:gap-10
      grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.2fr]
      justify-items-center lg:justify-items-start
      text-center md:text-left
      items-start 
    "
        >
          <div>
            
            <h3 className="text-white text-2xl font-semibold mb-3"><T>Keep in Touch</T></h3>
            <h2 className="text-[#3ec6c3] text-3xl font-bold mb-4"><T>Travel With Us</T></h2>

            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image
                src={logo}
                alt="Mauritius Logo"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mr-3 object-cover"
              />
            </div>
            

            <p className="text-sm leading-5 text-white max-w-md mx-auto md:mx-0">
              <T>Welcome to Mauritius Travel & Tour, your trusted partner of</T> <br /> <T>more than 10 years in transportation services</T>{" "}
              <br /> <T>across the breathtaking landscapes of Mauritius</T>. <br /> <T>With a commitment to exceptional service</T>,{" "}
              <br /> <T>reliability, and passenger satisfaction, we stand as</T> <br /> <T>a leading taxi company</T>.
            </p>

            <div className="mt-5 flex items-center justify-center md:justify-start space-x-4">
              <span className="text-white font-medium">Follow Us</span>
              <div className="flex space-x-3 text-xl">
                <a href=" https://www.instagram.com/mauritiustraveltour?igsh=Zm5jMXN0dzJjN3N1" className="hover:text-[#3ec6c3] transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/share/17JwrehYP6/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ec6c3] transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>

              </div>
            </div>
          </div>

          <div className="w-full md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Quick Links */}
            <div className="md:pt-3">
              <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold"><T>Quick Links</T></h4>
              <ul className="space-y-2">
                <li><a href="#tours" className="hover:underline"><T>Tour</T></a></li>
                <li><a href="#transfer" className="hover:underline"><T>Airport Transfer</T></a></li>
                <li><a href="#about" className="hover:underline"><T>About</T></a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="md:pt-3">
              <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold"><T>Support</T></h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline"><T>Contact Us</T></a></li>
                <li><a href="#" className="hover:underline"><T>Privacy Policy</T></a></li>
                <li><a href="#" className="hover:underline"><T>Terms &amp; Conditions</T></a></li>
              </ul>
            </div>

            {/* Communication */}
            <div className="md:pt-3">
              <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold"><T>Communication</T></h4>
              <ul className="space-y-2 whitespace-nowrap">
                <li>
                  <span className="inline-flex items-center gap-2">
                    <Image src={call} alt="Email" width={20} height={20} className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain" />
                    <a href="mailto:info@mauritiustraveltour.com" className="hover:underline">info@mauritiustraveltour<br className="block xl:hidden" />.com</a>
                  </span>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2">
                    <Image src={e} alt="Call" width={20} height={20} className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain" />
                    <a href="tel:+23057526968" className="hover:underline">+230 5752 6968</a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Reviews (spans all 3 nested columns) */}
            <div className="md:col-span-3 mt-6 md:mt-8 overflow-x-auto">
              <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold">Exceptional <span style={{ color: "#FFCC33" }}>5 Stars</span> Google Reviews</h4>

              <div className="flex space-x-3 text-sm text-white w-max pb-2">
                <div className="border border-[#3ec6c3]/40 p-4 rounded-xl bg-[#0b2b31] w-[250px] flex-shrink-0">
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                  <p>“Excellent service! The driver was on time and very friendly.”</p>
                  <p className="text-xs text-[#9cc] mt-1">– Sarah M.</p>
                </div>

                <div className="border border-[#3ec6c3]/40 p-4 rounded-xl bg-[#0b2b31] w-[250px] flex-shrink-0">
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                  <p>“Clean cars and smooth ride, highly recommended!”</p>
                  <p className="text-xs text-[#9cc] mt-1">– David L.</p>
                </div>

                <div className="border border-[#3ec6c3]/40 p-4 rounded-xl bg-[#0b2b31] w-[250px] flex-shrink-0">
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                  <p>“Mauritius Travel & Tour made our trip unforgettable!”</p>
                  <p className="text-xs text-[#9cc] mt-1">– Priya K.</p>
                </div>
              </div>
            </div>
          </div>
          {/* end wrapper */}
        </div>
      </footer>
      
      <footer id="contact" data-animate="fade" className="bg-[#071f24] block md:hidden text-[#cfe]">
        <div
          className="
          mx-auto w-full max-w-[1300px] 2xl:max-w-[1400px]
          px-6 py-12
          grid gap-8 md:gap-10
          grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.2fr]
          justify-items-center lg:justify-items-start
          text-center md:text-left
          items-start
        "
        >
          {/* Left Section */}
          <div>
            <div className="w-full flex justify-center">
  <div className="overflow-x-auto max-w-[420px] sm:max-w-[600px]">
    <div className="mt-6 md:mt-8 overflow-x-auto">
      <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold text-center">
        Exceptional <span style={{ color: "#FFCC33" }}>5 Stars</span> Google Reviews
      </h4>

      <div
        className="flex flex-col items-center gap-3 text-sm text-white w-full sm:w-max pb-14 mx-auto"
      >
        {/* Review 1 */}
        <div className="border border-[#3ec6c3]/40 p-4 rounded-xl bg-[#0b2b31] w-[calc(80%-0.375rem)] sm:w-[280px] flex-shrink-0">
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p>“Excellent service! The driver was on time and very friendly.”</p>
          <p className="text-xs text-[#9cc] mt-1">– Sarah M.</p>
        </div>

        {/* Review 2 */}
        <div className="border border-[#3ec6c3]/40 p-4 rounded-xl bg-[#0b2b31] w-[calc(80%-0.375rem)] sm:w-[280px] flex-shrink-0">
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p>“Clean cars and smooth ride, highly recommended!”</p>
          <p className="text-xs text-[#9cc] mt-1">– David L.</p>
        </div>

        {/* Review 3 */}
        <div className="border border-[#3ec6c3]/40 p-4 rounded-xl bg-[#0b2b31] w-[calc(80%-0.375rem)] sm:w-[280px] flex-shrink-0">
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p>“Mauritius Travel & Tour made our trip unforgettable!”</p>
          <p className="text-xs text-[#9cc] mt-1">– Priya K.</p>
        </div>
      </div>
    </div>
  </div>
</div>

            <h3 className="text-white text-2xl font-semibold mb-3"><T>Keep in Touch</T></h3>
            <h2 className="text-[#3ec6c3] text-3xl font-bold mb-4"><T>Travel With Us</T></h2>

            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image
                src={logo}
                alt="Mauritius Logo"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mr-3 object-cover"
              />
            </div>

            <p className="text-sm leading-5 text-white max-w-md mx-auto md:mx-0">
              <T>Welcome to Mauritius Travel & Tour, your trusted partner of</T> <br /> <T>more than 10 years in transportation services</T>{" "}
              <br /> <T>across the breathtaking landscapes of Mauritius</T>. <br /> <T>With a commitment to exceptional service</T>,{" "}
              <br /> <T>reliability, and passenger satisfaction, we stand as</T> <br /> <T>a leading taxi company</T>.
            </p>

            <div className="mt-5 flex items-center justify-center md:justify-start space-x-4">
              <span className="text-white font-medium">Follow Us</span>
              <div className="flex space-x-3 text-xl">
                <a href=" https://www.instagram.com/mauritiustraveltour?igsh=Zm5jMXN0dzJjN3N1" className="hover:text-[#3ec6c3] transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/share/17JwrehYP6/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ec6c3] transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pt-3">
            <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold"><T>Quick Links</T></h4>
            <ul className="space-y-2">
              <li>
                <a href="#tours" className="hover:underline"><T>Tour</T></a>
              </li>
              <li>
                <a href="#transfer" className="hover:underline"><T>Airport Transfer</T></a>
              </li>
              <li>
                <a href="#about" className="hover:underline"><T>About</T></a>
              </li>
            </ul>

          </div>


          {/* Support */}
          <div className="md:pt-3">
            <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold"><T>Support</T></h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline"><T>Contact Us</T></a></li>
              <li><a href="#" className="hover:underline"><T>Privacy Policy</T></a></li>
              <li><a href="#" className="hover:underline"><T>Terms &amp; Conditions</T></a></li>
            </ul>
          </div>

          {/* Communication */}
          <div className="md:pt-3">
            <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold"><T>Communication</T></h4>
            <ul className="space-y-2 whitespace-nowrap">
              <li>
                <span className="inline-flex items-center gap-2">
                  <Image
                    src={call}
                    alt="Email"
                    width={20}
                    height={20}
                    className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
                  />
                  <a href="mailto:info@mauritiustraveltour.com" className="hover:underline">
                    info@mauritiustraveltour.com
                  </a>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <Image
                    src={e}
                    alt="Call"
                    width={20}
                    height={20}
                    className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
                  />
                  <a href="tel:+23057526968" className="hover:underline">
                    +230 5752 6968
                  </a>
                </span>
              </li>
            </ul>

      
          </div>
        </div>
      </footer>
    </>
  );
}
