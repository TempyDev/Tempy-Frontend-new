import { motion as Motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["Designs Instantly", "Quick Designs"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-center">
          Turn Details Into{" "}
          <span className="relative inline-flex text-[#DA29B8]">
            {/* Invisible placeholder (RESERVES SPACE) */}
            <span className="invisible">Designs Instantly</span>

            {/* Animated text */}
            <AnimatePresence mode="wait">
              <Motion.span
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute left-0 top-0"
              >
                {WORDS[index]}
              </Motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* SUB TEXT */}
        <p className="mt-4 text-slate-600">
          <span className="font-medium">No <span className="text-[#DA29B8]"> design.</span></span>{" "}
          <span className="font-medium">No <span className="text-[#DA29B8]"> confusion.</span></span>
          <br />
          Just fill in the details and get a ready-to-use document.
        </p>

        {/* CTA */}
       <button className="group relative mt-8 overflow-hidden rounded-lg bg-purple-600 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300">
  {/* The Liquid Wave Layer */}
  <span 
    className="absolute inset-0 z-0 h-full w-[115%] -translate-x-[105%] skew-x-[15deg] bg-gradient-to-b from-[#9B21FE] to-[#DA29B8]
               transition-transform duration-700 
               ease-[cubic-bezier(0.19,1,0.22,1)] 
               group-hover:translate-x-[-5%] group-hover:skew-x-0"
  ></span>
  
  {/* The Text Layer */}
  <span className="relative z-10 transition-colors duration-500 delay-100 group-hover:text-white">
    Generate Now
  </span>
</button>
      </div>
    </section>
  );
}
