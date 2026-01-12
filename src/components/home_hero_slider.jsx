import { useEffect, useState } from "react";

import resume1 from "../assets/images/resume/resume-1.png";
import resume2 from "../assets/images/resume/resume-2.png";
import resume3 from "../assets/images/resume/resume-3.png";

const slides = [resume1, resume2, resume3];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  /* AUTO ROTATE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prev = (current - 1 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;

  return (
    <section className="w-full min-h-screen bg-white flex items-center py-10 sm:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Top <span className="text-purple-600">ATS</span> friendly <br />
            Templates
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Increases your shortlisting ratio upto 75%, recruiters-approved ATS
            friendly designs optimized to meet Industry standards.
          </p>

          <button className="mt-6 bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg text-sm sm:text-base">
            Generate Now
          </button>
        </div>

        {/* ---------------- RIGHT SLIDER ---------------- */}
        <div className="relative flex justify-center items-center h-[320px] sm:h-[380px] md:h-[450px] overflow-hidden">

          {/* Enhance with AI */}
          <div className="absolute top-3 sm:top-6 right-2 sm:right-6 bg-purple-600 text-white px-3 py-2 rounded-lg text-[10px] sm:text-sm z-20">
            ✨ Enhance with AI
          </div>

          {/* Recommended */}
          <div className="absolute bottom-20 sm:bottom-28 right-2 sm:right-6 bg-white shadow-lg rounded-lg p-3 sm:p-4 w-[180px] sm:w-[240px] z-20">
            <p className="font-semibold text-xs sm:text-sm">Recommended</p>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
              Best template based on your profile
            </p>
          </div>

          {/* Button */}
          <button className="absolute bottom-4 sm:bottom-6 right-2 sm:right-6 bg-pink-500 hover:bg-pink-600 transition text-white px-4 py-2 rounded-md text-[10px] sm:text-sm z-20">
            Free Resume Template
          </button>

          {/* ---------------- CAROUSEL ---------------- */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">

            {/* LEFT */}
            <img
              src={slides[prev]}
              className="
                w-[90px] h-[180px]
                sm:w-[140px] sm:h-[280px]
                md:w-[180px] md:h-[360px]
                object-contain
                opacity-40
                scale-90
              "
            />

            {/* CENTER (ACTIVE) */}
            <img
              src={slides[current]}
              className="
                w-[140px] h-[260px]
                sm:w-[190px] sm:h-[360px]
                md:w-[230px] md:h-[430px]
                object-contain
                scale-105 sm:scale-110
                shadow-2xl
                z-10
                transition-transform duration-700 ease-out
              "
            />

            {/* RIGHT */}
            <img
              src={slides[next]}
              className="
                w-[90px] h-[180px]
                sm:w-[140px] sm:h-[280px]
                md:w-[180px] md:h-[360px]
                object-contain
                opacity-40
                scale-90
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
