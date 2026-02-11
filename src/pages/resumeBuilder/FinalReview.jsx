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
      details: "Review, update, and revise company hiring practices, vacation, and other human resources policies to ensure compliance with OSHA and all local, state, and federal labor regulations. By creating and maintaining a positive and responsive work environment, we raised employee retention rates by over 10% to achieve a greater than 90% employee retention over a 2-year period."
    }
  ],
  skills: [
    "Type 96 words per minute", "Proficient with project management software", "Team player", "Excellent time management skills", "Conflict management", "Public speaking", "Data analytics"
  ]
};

export default function ResumeReviewFinalScreen() {
  const [color, setColor] = useState("#10B981");
  const [withPhoto, setWithPhoto] = useState(false);
  const [atsScore] = useState(78);

  return (
    <div className="min-h-screen  font-sans text-slate-900">
      {/* HEADER */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold
         mb-4 tracking-tight text-[#1F2937]">
          Review & download your <span className="text-[#D946EF]">resume</span>
        </h1>
        <p className="text-gray-800 text-lg font-medium">
          Make final adjustments, check ATS compatibility, and download your resume.
        </p>
      </header>

      {/* MAIN LAYOUT */}
      <main className="max-w-[1440px] mx-auto px-10 grid grid-cols-12 gap-10 items-start pb-24">
        
        {/* LEFT COLUMN: CONTROLS (Updated to match Figma) */}
        <aside className="col-span-3 space-y-6">
          {/* Layout Card */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-8 text-xl text-gray-800">Layout</h3>
            
            <div className="mb-10">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">Change Color</p>
              <div className="flex gap-3">
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
              <div className="flex flex-row gap-6">
                {["With Photo", "Without Photo"].map((label) => {
                  const isActive = (withPhoto && label === "With Photo") || (!withPhoto && label === "Without Photo");
                  return (
                    <label key={label} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" className="hidden" checked={isActive} onChange={() => setWithPhoto(label === "With Photo")} />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${isActive ? "border-[#9333ea]" : "border-gray-300"}`}>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#9333ea]" />}
                      </div>
                      <span className={`text-[13px] font-bold transition-colors ${isActive ? "text-[#9333ea]" : "text-gray-400"}`}>
                        {label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sections Card */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-6 text-xl text-gray-800">Sections</h3>
            <div className="relative group">
              <button className="w-full bg-slate-100 text-gray-500 border border-gray-200 rounded-full py-2 px-7 text-[15px] font-medium flex justify-between items-center hover:border-purple-300 transition-all">
                Add New Section
                <span className="text-xl text-gray-400">+</span>
              </button>
            </div>
          </div>

          {/* Design Card */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-6 text-xl text-gray-800">Design</h3>
            <button className="w-full bg-[#9333ea] text-white rounded-md py-3 font-bold text-[16px] shadow-lg shadow-purple-100 hover:brightness-110 active:scale-95 transition-all">
              Choose Template
            </button>
          </div>
        </aside>

        {/* CENTER COLUMN: RESUME PREVIEW */}
        <article className="col-span-6 flex flex-col items-center">
          <div className="w-full bg-white rounded-xl shadow-2xl border border-gray-100 p-12 min-h-[900px] relative overflow-hidden">
            <div className="bg-[#F3F0FF] py-7 mb-6 text-center text-gray-800 font-bold text-[40px] tracking-[0.15em] font-serif">
              {RESUME_CONTENT.name.toUpperCase()}
            </div>
            <p className="text-center text-[10px] text-gray-400 mb-12 uppercase tracking-widest font-semibold">
              {RESUME_CONTENT.contact}
            </p>

            <div className="relative group border-2 border-[#9333ea] rounded-xl p-5 bg-white shadow-xl mb-8">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#9333ea] rounded-lg flex items-center justify-center text-white cursor-grab shadow-lg">
                <span className="text-lg">⋮</span>
              </div>
              <div className="absolute -right-3 top-0 flex flex-col gap-2">
                <button className="bg-[#9333ea] text-white p-2.5 rounded-xl text-xs shadow-xl shadow-purple-200 hover:scale-110 transition-transform">✎</button>
                <button className="bg-[#9333ea] text-white p-2.5 rounded-xl text-xs shadow-xl shadow-purple-200 hover:scale-110 transition-transform">+</button>
              </div>
              <p className="text-[11px] leading-relaxed text-gray-500 font-medium italic">
                <span className="font-black text-gray-800 not-italic uppercase tracking-wider">{RESUME_CONTENT.experience[0].role}</span> {RESUME_CONTENT.summary}
              </p>
            </div>

            <div className="space-y-10">
              <section>
                <h4 className="font-black border-b-2 pb-1 mb-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500" style={{ color }}>Experience</h4>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{RESUME_CONTENT.experience[0].date}</p>
                  <p className="text-[11px] font-black text-gray-800 uppercase tracking-tight">{RESUME_CONTENT.experience[0].title}</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{RESUME_CONTENT.experience[0].details}</p>
                </div>
              </section>

              <section>
                <h4 className="font-black border-b-2 pb-1 mb-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500" style={{ color }}>Skills</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-loose">
                  {RESUME_CONTENT.skills.map((skill, i) => (
                    <span key={skill}>
                      • {skill} {i !== RESUME_CONTENT.skills.length - 1 && " "}
                    </span>
                  ))}
                </p>
              </section>
            </div>
          </div>
          
          <button className="mt-14 bg-[#9333ea] text-white px-8 py-3.5 rounded-[10px] font-bold text-xl shadow-[0_25px_60px_-15px_rgba(139,92,246,0.6)] hover:scale-105 active:scale-95 transition-all">
            Download Resume
          </button>
        </article>

        {/* RIGHT COLUMN: ATS SCORE */}
        <aside className="col-span-3">
          <section className="bg-white rounded-[10px] p-10 shadow-sm border-2 border-purple-500 flex flex-col items-center sticky top-10">
            <h3 className="font-black text-2xl mb-12 text-gray-900 tracking-tight">Ats Score</h3>
            
            <div className="relative flex items-center justify-center w-52 h-52 mb-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="104" cy="104" r="92" stroke="#F3F4F6" strokeWidth="14" fill="transparent" />
                <circle 
                  cx="104" cy="104" r="92" stroke={color} strokeWidth="14" fill="transparent" 
                  strokeDasharray={578} strokeDashoffset={578 - (578 * atsScore) / 100}
                  strokeLinecap="round" className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">Your Score</p>
                <p className="text-5xl font-black text-gray-800 tracking-tighter">
                  {atsScore}<span className="text-gray-300 font-bold text-xl">/100</span>
                </p>
              </div>
            </div>

            <div className="bg-[#4B5563] text-white px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] mb-10 shadow-lg">
              3 Issues Found
            </div>

            <div className="w-full space-y-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center  p-5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400 text-xl font-bold">⚠</span>
                    <span className="text-xs font-black text-gray-700 tracking-tight">Eduction Details</span>
                  </div>
                  <button className="text-pink-500 font-black text-[10px] uppercase border-b-2 border-pink-100 hover:border-pink-500 transition-colors">Fix</button>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}