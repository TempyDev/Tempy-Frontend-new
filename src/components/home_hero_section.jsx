import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["Designs Instantly", "Quick Designs"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 px-6">
      <div className="text-center max-w-4xl">
        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-center">
          Turn Details Into{" "}
          <span className="relative inline-flex text-[#DA29B8]">
            {/* Invisible placeholder (RESERVES SPACE) */}
            <span className="invisible">Designs Instantly</span>

            {/* Animated text */}
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute left-0 top-0"
              >
                {WORDS[index]}
              </motion.span>
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
        <button className="mt-8 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition">
          Generate Now
        </button>
      </div>
    </section>
  );
}
