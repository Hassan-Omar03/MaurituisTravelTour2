import React, { useEffect, useState, useRef } from "react";

export default function GoogleReviews() {
  const reviews = [
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      text: "Excellent service! The driver was on time and very friendly.",
      name: "– Sarah M.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      text: "Clean cars and smooth ride, highly recommended!",
      name: "– David L.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      text: "Mauritius Travel & Tour made our trip unforgettable!",
      name: "– Priya K.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      text: "Professional drivers and great communication throughout.",
      name: "– Ahmed R.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      text: "Affordable prices and premium quality service!",
      name: "– Lisa T.",
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      text: "Best travel experience ever — highly professional team.",
      name: "– John D.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // start/stop interval based on `paused`
  useEffect(() => {
    // clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
      }, 1000); // 1 second
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, reviews.length]);

  // ensure index stays valid if reviews length changes
  useEffect(() => {
    if (index >= reviews.length) setIndex(0);
  }, [reviews.length, index]);

  return (
    <div className="mt-10 text-center">
      <h4 className="text-[#3ec6c3] mb-5 text-xl font-semibold">Google Reviews</h4>

      {/* outer viewport */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Google Reviews"
      >
        {/* sliding track */}
        <div
          className="flex transition-transform duration-600 ease-in-out"
          style={{
            width: `${reviews.length * 100}%`,
            transform: `translateX(-${index * (100 / reviews.length)}%)`,
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full flex justify-center items-center"
              aria-hidden={i !== index}
            >
              <article className="border border-[#3ec6c3]/40 p-6 rounded-2xl bg-[#0b2b31] text-sm text-white w-[92%] sm:w-[480px] shadow-lg">
                <p className="text-lg">{r.stars}</p>
                <p className="mt-2 leading-relaxed">{r.text}</p>
                <p className="text-xs text-[#9cc] mt-3">{r.name}</p>
              </article>
            </div>
          ))}
        </div>

        {/* optional: small indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full transition-all duration-200 ${
                i === index ? "bg-[#3ec6c3]" : "bg-white/30"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}