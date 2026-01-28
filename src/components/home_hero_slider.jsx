import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Images
import resume1 from "../assets/images/resume/resume-1.png";
import resume2 from "../assets/images/resume/resume-2.png";
import resume3 from "../assets/images/resume/resume-3.png";
import Mascotbg from "../assets/images/mascot/mascot-bg.png";

const slides = [resume1, resume2, resume3];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = (current - 1 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;

  // 3D Animation Variants
  const slideVariants = {
    center: { x: 0, scale: 1, z: 0, rotateY: 0, opacity: 1, zIndex: 10 },
    // Adjusted x-offset for smaller screens
    left: {
      x: -260,
      scale: 0.7,
      z: -100,
      rotateY: 30,
      opacity: 0.5,
      zIndex: 5,
      transition: { duration: 0.8 },
    },
    right: {
      x: 260,
      scale: 0.7,
      z: -100,
      rotateY: -30,
      opacity: 0.5,
      zIndex: 5,
      transition: { duration: 0.8 },
    },
  };

  // Adjustments for mobile view where 3D side peeks should be tighter
  const mobileVariants = {
    center: { x: 0, scale: 0.9, z: 0, rotateY: 0, opacity: 1, zIndex: 10 },
    left: { x: -80, scale: 0.6, z: -50, rotateY: 20, opacity: 0.2, zIndex: 5 },
    right: { x: 80, scale: 0.6, z: -50, rotateY: -20, opacity: 0.2, zIndex: 5 },
  };

  return (
    <section
      className="w-full bg-white items-center py-12 sm:py-16 xl:px-[7%] lg:px-[2%] md:pb-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Mascotbg})` }}
    >
      <div className="px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div className="text-center  justify-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2D2D2D] leading-tight">
            Top <span className="text-[#D946EF]">ATS</span> friendly <br />
            Templates
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md mx-auto lg:mx-0">
            Increases your shortlisting ratio up to 75%, recruiters-approved ATS
            friendly designs.
          </p>
          <button className="group relative mt-8 overflow-hidden rounded-xl bg-[#A855F7] px-8 py-3 text-lg font-bold text-white shadow-lg transition-colors duration-[1000ms] hover:text-[#fff]">
            <span
              className="absolute inset-y-0 left-0 z-0 w-1/2 -translate-x-full bg-gradient-to-b from-[#9B21FE] to-[#DA29B8] 
               transition-transform duration-[700ms] 
               ease-[cubic-bezier(0.25,1,0.5,1)] 
               group-hover:translate-x-0"
            ></span>

            <span
              className="absolute inset-y-0 right-0 z-0 w-1/2 translate-x-full bg-gradient-to-b from-[#9B21FE] to-[#DA29B8] min-h-screen;

               transition-transform duration-[700ms] 
               ease-[cubic-bezier(0.25,1,0.5,1)] 
               group-hover:translate-x-0"
            ></span>

            <span className="relative z-10 transition-colors duration-[1000ms]">
              Generate Now
            </span>
          </button>
        </div>

        <div className="relative flex justify-center items-center perspective-[1000px] mt-0 md:mt-0">
          <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[500px] preserve-3d">
            <AnimatePresence initial={false}>
              {slides.map((img, index) => {
                let position = "hidden";
                if (index === current) position = "center";
                else if (index === prev) position = "left";
                else if (index === next) position = "right";

                if (position === "hidden") return null;

                return (
                  <motion.img
                    key={index}
                    src={img}
                    variants={
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? mobileVariants
                        : slideVariants
                    }
                    initial={false}
                    animate={position}
                    transition={{
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute w-[220px] sm:w-[280px] md:w-[320px] rounded-xl shadow-2xl border border-gray-100 object-contain"
                  />
                );
              })}
            </AnimatePresence>

            <div className="relative z-[20] w-[220px] sm:w-[280px] md:w-[320px] h-full pointer-events-none">
              <div className="absolute bottom-[20px] sm:bottom-[8px] left-0 right-0 bg-[#DA29B8] text-white py-2 sm:py-2.5 text-center rounded-b-xl font-bold text-[10px] sm:text-[12px] uppercase tracking-wider pointer-events-auto">
                Free Resume Template
              </div>

              <div className="absolute top-[38%] -left-6 sm:-left-12 md:-left-18 bg-gradient-to-b from-[#9B21FE] to-[#DA29B8] text-white px-3 py-3 sm:px-4  rounded-lg text-[9px] sm:text-[11px] font-bold flex items-center gap-1 sm:gap-2 shadow-xl whitespace-nowrap pointer-events-auto">
                ✦ Enhance With Ai
              </div>

              <div className="absolute top-[48%] -left-6 sm:-left-12 md:-left-18 bg-white/95 backdrop-blur  shadow-2xl rounded-xl p-2 sm:p-3 w-[150px] xl:w-[280px] sm:w-[210px]  sm:block pointer-events-auto border-2  border-[#9B21FE]">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 ">
                  <span className="text-[#9B21FE] text-xs sm:text-sm">✦</span>
                  <p className="font-bold text-[10px] sm:text-[12px] text-gray-800">
                    Recommended
                  </p>
                </div>
                <p className="text-[8px] sm:text-[10px] text-gray-500 leading-tight line-clamp-3 md:line-clamp-none">
                  Goal-oriented manager dedicated to continuous improvement and
                  driving positive business impact.
                </p>
              </div>

              <div className="absolute bottom-16 sm:bottom-14 -right-4 sm:-right-8 md:-right-12 bg-white p-2 sm:p-2.5 rounded-2xl shadow-2xl border border-gray-100 w-[100px] sm:w-[140px] pointer-events-auto -rotate-6">
                <p className="text-[8px] sm:text-[10px] font-bold text-gray-400 mb-1 sm:mb-2 px-1">
                  Color
                </p>
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5 ">
                  {[
                    "#FF6B00",
                    "#fff",
                    "#DA29B8",
                    "#9B21FE",
                    "#0CB16D",
                    "#96005A",
                    "#9EC9D8",
                    "#9B21FE80",
                    "#6D5DA8",
                    "#3453FA",
                  ].map((c) => (
                    <div
                      key={c}
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-black"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute  xl:bottom-[-80px] lg:bottom-[-40px] sm:bottom-[-20px] md:bottom-[-50px] flex items-center justify-between gap-4 sm:gap-8 z-30">
            <button
              onClick={() => setCurrent(prev)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
            >
              <FiChevronLeft size={18} />
            </button>
            <div className="flex justify-end items-end gap-3 sm:gap-5">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 sm:h-1.8 rounded-full transition-all duration-300 ${i === current ? "w-6 sm:w-16 bg-[#9B21FE]" : "w-1.5 sm:w-1.8 shrike-0 bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent(next)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#DA29B8] text-white flex items-center justify-center hover:opacity-90 transition cursor-pointer"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
