import React, { useState } from "react";

const PALETTE = [
  { name: "Green", hex: "#10B981" },
  { name: "Peach", hex: "#FFE4E6" },
  { name: "Purple", hex: "#8B5CF6" },
  { name: "Pink", hex: "#EC4899" },
  { name: "Gray", hex: "#4B5563" },
  { name: "Black", hex: "#1F2937" },
];

const RESUME_CONTENT = {
  name: "Janna Gardner",
  contact: "4567 Main Street, Chicago, Illinois 98052 • (716) 555-0100 • janna@example.com",
  summary: "Human Resources Generalist with 6+ years of experience assisting with and fulfilling organization staffing needs and requirements. A proven track record of using excellent personal, communication and organization skills to lead and improve HR departments, recruit excellent personnel, and improve department efficiencies.",
  experience: [
    {
      date: "20XX – PRESENT",
      role: "Human Resources Generalist",
      title: "Human Resources Generalist | Lamna Healthcare Company | Chicago, Illinois",
      details: "Review, update, and revise company hiring practices, vacation, and other human resources policies to ensure compliance with OSHA and all local, state, and federal labor regulations."
    }
  ],
  skills: [
    "Type 96 words per minute", "Proficient with project management software", "Team player", "Data analytics"
  ]
};

export default function ResumeReviewFinalScreen() {
  const [color, setColor] = useState("#10B981");
  const [withPhoto, setWithPhoto] = useState(false);
  const [atsScore] = useState(78);

  return (
    <div className="min-h-screen text-slate-900 bg-[#FDFCFB] font-sans">
      {/* HEADER */}
      <header className="text-center py-8 lg:py-12 xl:py-16 px-4">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4
        
        
        
        
        tracking-tight text-[#1F2937]">
          Review & download your <span className="text-[#D946EF]">resume</span>
        </h1>
        <p className="text-gray-500 text-sm lg:text-base xl:text-lg font-medium">
          Make final adjustments, check ATS compatibility, and download your resume.
        </p>
      </header>

      {/* MAIN LAYOUT 
          - Mobile/Tablet: 1 Column
          - LG (1024px): 10 Columns (3 for sidebars, 7 for content)
          - XL (1280px): 12 Columns (Figma Standard)
      */}
      <main className="max-w-[1440px] mx-auto px-4 lg:px-6 xl:px-10 grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-12 gap-6 xl:gap-10 items-start pb-24">
        
        {/* LEFT COLUMN: CONTROLS */}
        <aside className="order-2 lg:order-1 lg:col-span-3 space-y-6">
          <div className="bg-white rounded-[24px] p-6 xl:p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-6 text-xl text-gray-800">Layout</h3>
            <div className="mb-8">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">Change Color</p>
              <div className="flex flex-wrap gap-3">
                {PALETTE.map((p) => (
                  <button
                    key={p.hex}
                    onClick={() => setColor(p.hex)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      color === p.hex ? "ring-2 ring-offset-2 ring-gray-200 scale-110" : "border-white shadow-sm"
                    }`}
                    style={{ background: p.hex }}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">Photo</p>
              <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                {["With Photo", "Without Photo"].map((label) => {
                  const isActive = (withPhoto && label === "With Photo") || (!withPhoto && label === "Without Photo");
                  return (
                    <label key={label} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" className="hidden" checked={isActive} onChange={() => setWithPhoto(label === "With Photo")} />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${isActive ? "border-[#9333ea]" : "border-gray-300"}`}>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#9333ea]" />}
                      </div>
                      <span className={`text-[12px] xl:text-[13px] font-bold ${isActive ? "text-[#9333ea]" : "text-gray-400"}`}>
                        {label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 xl:p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-6 text-xl text-gray-800">Sections</h3>
            <button className="w-full bg-[#F9FAFB] text-gray-400 border border-gray-100 rounded-full py-3 xl:py-4 px-6 text-[15px] font-medium flex justify-between items-center hover:border-purple-300">
              Add New Section <span className="text-xl">+</span>
            </button>
          </div>
        </aside>

        {/* CENTER COLUMN: RESUME PREVIEW */}
        <article className="order-1 lg:order-2 lg:col-span-7 xl:col-span-6 flex flex-col items-center w-full">
          <div className="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-6 lg:p-8 xl:p-12 min-h-[700px] xl:min-h-[900px] relative overflow-hidden">
            <div className="bg-[#F3F0FF] py-5 lg:py-6 xl:py-7 mb-6 text-center text-gray-800 font-bold text-2xl lg:text-3xl xl:text-[40px] tracking-[0.15em] font-serif">
              {RESUME_CONTENT.name.toUpperCase()}
            </div>
            
            <div className="relative group border-2 border-[#9333ea] rounded-xl p-4 lg:p-5 bg-white shadow-xl mb-8">
              <div className="hidden xl:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#9333ea] rounded-lg items-center justify-center text-white cursor-grab">
                <span className="text-lg">⋮</span>
              </div>
              <p className="text-[10px] lg:text-[11px] leading-relaxed text-gray-500 font-medium italic">
                <span className="font-black text-gray-800 not-italic uppercase tracking-wider">{RESUME_CONTENT.experience[0].role}</span> {RESUME_CONTENT.summary}
              </p>
            </div>

            <div className="space-y-6 lg:space-y-10">
              <section>
                <h4 className="font-black border-b-2 pb-1 mb-4 text-[10px] lg:text-[12px] tracking-[0.2em] uppercase" style={{ color }}>Experience</h4>
                <div className="space-y-2 lg:space-y-4">
                  <p className="text-[10px] font-black text-gray-800 uppercase">{RESUME_CONTENT.experience[0].title}</p>
                  <p className="text-[10px] lg:text-[11px] text-gray-500 leading-relaxed">{RESUME_CONTENT.experience[0].details}</p>
                </div>
              </section>
            </div>
          </div>
          
          <button className="mt-8 lg:mt-14 bg-[#9333ea] text-white w-full lg:w-auto px-10 xl:px-24 py-4 xl:py-5 rounded-[24px] font-black text-lg xl:text-xl shadow-lg transition-all hover:scale-105">
            Download Resume
          </button>
        </article>

        {/* RIGHT COLUMN: ATS SCORE 
            - On LG: Spans full width below preview (order-3)
            - On XL: Returns to sidebar (col-span-3)
        */}
        <aside className="order-3 lg:col-span-10 xl:col-span-3 w-full">
          <section className="bg-white rounded-[32px] p-6 lg:p-10 shadow-sm border-2 border-purple-50 flex flex-col items-center xl:sticky xl:top-10">
            <h3 className="font-black text-2xl mb-8 text-gray-900 tracking-tight">Ats Score</h3>
            
            <div className="flex flex-col lg:flex-row xl:flex-col items-center gap-8 lg:gap-16 xl:gap-8 w-full">
              <div className="relative flex items-center justify-center w-40 h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="42%" stroke="#F3F4F6" strokeWidth="12" fill="transparent" />
                  <circle 
                    cx="50%" cy="50%" r="42%" stroke={color} strokeWidth="12" fill="transparent" 
                    strokeDasharray="264" strokeDashoffset={264 - (264 * atsScore) / 100}
                    strokeLinecap="round" className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute flex flex-col items-center text-center">
                  <p className="text-[8px] lg:text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">Your Score</p>
                  <p className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-800 tracking-tighter">
                    {atsScore}<span className="text-gray-300 font-bold text-lg">/100</span>
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full space-y-4">
                <div className="bg-[#4B5563] text-white text-center py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] mb-6 shadow-lg">
                  3 Issues Found
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between items-center bg-[#FFF9F9] p-4 lg:p-5 rounded-2xl border border-red-50">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 text-xl font-bold">⚠</span>
                      <span className="text-xs font-black text-gray-700">Eduction Details</span>
                    </div>
                    <button className="text-pink-500 font-black text-[10px] uppercase border-b-2 border-pink-100">Fix</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}