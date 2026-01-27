import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    <section className="w-full bg-white flex items-center py-10 sm:py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Top <span className="text-purple-600">ATS</span> friendly <br />
            Templates
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Increases your shortlisting ratio upto 75%, recruiters-approved ATS
            friendly designs optimized to meet Industry standards.
          </p>

          <button className="mt-6 bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg text-sm sm:text-base cursor-pointer">
            Generate Now
          </button>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative flex justify-center items-center overflow-hidden">

          {/* Enhance with AI */}
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-2 rounded-lg text-xs z-20 cursor-pointer">
            ✨ Enhance with AI
          </div>

          {/* Recommended */}
          <div className="absolute bottom-28 right-4 bg-white shadow-lg rounded-lg p-4 w-[220px] z-20">
            <p className="font-semibold text-sm">Recommended</p>
            <p className="text-xs text-gray-500 mt-1">
              Best template based on your profile
            </p>
          </div>

          {/* CTA */}
          <button className="absolute bottom-6 right-4 bg-pink-500 hover:bg-pink-600 transition text-white px-4 py-2 rounded-md text-xs z-20 cursor-pointer">
            Free Resume Template
          </button>

          {/* LEFT ARROW */}
          <button
            onClick={() => setCurrent(prev)}
            className="absolute left-2 z-20 bg-white shadow-md rounded-full p-2 cursor-pointer hover:scale-105 transition"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => setCurrent(next)}
            className="absolute right-2 z-20 bg-white shadow-md rounded-full p-2 cursor-pointer hover:scale-105 transition"
          >
            <FiChevronRight size={22} />
          </button>

          {/* CAROUSEL */}
          <div className="flex items-end gap-6">

            {/* LEFT */}
            <img
              src={slides[prev]}
              onClick={() => setCurrent(prev)}
              className="w-[120px] sm:w-[160px] object-contain opacity-40 scale-90 cursor-pointer"
            />

            {/* CENTER */}
            <img
              src={slides[current]}
              className="w-[180px] sm:w-[230px] object-contain scale-110 shadow-2xl z-10 transition-transform duration-700 cursor-pointer"
            />

            {/* RIGHT */}
            <img
              src={slides[next]}
              onClick={() => setCurrent(next)}
              className="w-[120px] sm:w-[160px] object-contain opacity-40 scale-90 cursor-pointer"
            />
          </div>

          {/* DOTS – FIXED POSITION */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 mt-6">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300
                  ${i === current ? "w-6 bg-purple-600" : "w-2 bg-gray-300"}
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
