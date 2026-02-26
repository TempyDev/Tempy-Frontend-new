import { useState } from "react";
import { RiSearchLine, RiSparkling2Fill } from "react-icons/ri";

const suggestedSkills = [
  "Adobe Creative Suite",
  "Figma",
  "Xd",
  "UI",
  "UX",
  "Visual Designing",
  "Graphic Designing",
];

const SkillsStep = ({ onNext, onBack }) => {
  const [skills, setSkills] = useState([
    "Prototyping",
    "User Centric Designing",
    "User Experience Research",
    "Interaction Designing",
    "Wireframing",
  ]);

  const toggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto pt-10">
      {/* LEFT SECTION */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-bold mb-8 text-gray-800 tracking-tight">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* EDITOR BLOCK */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-[#F9FAFB] flex flex-col min-h-[400px]">
            <div className="p-6 flex-1">
              <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2.5 font-medium">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* TOOLBAR */}
            <div className="bg-white border-t border-gray-100 p-3 px-5 flex items-center justify-between">
              <div className="flex items-center gap-5 text-gray-400">
                <button className="hover:text-gray-700 font-bold text-base">B</button>
                <button className="hover:text-gray-700 italic font-serif text-lg">I</button>
                <button className="hover:text-gray-700 underline text-lg">U</button>
                <button className="hover:text-gray-700">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 00 7.07 7.07l1.71-1.71"/></svg>
                </button>
                <button className="text-purple-600 bg-purple-50 p-1.5 rounded-md">
                   <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </button>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                 <button className="hover:text-gray-500 transition-colors text-xs uppercase">Undo</button>
                 <button className="hover:text-gray-500 transition-colors text-xs uppercase">Redo</button>
              </div>
            </div>
          </div>

          {/* SEARCH & SUGGESTIONS BLOCK */}
          <div className="space-y-5">
            <div className="bg-[#FFF8F8] rounded-2xl p-5 border border-[#FFEAEA]">
              <label className="text-[13px] font-semibold text-gray-700 mb-4 block text-center leading-snug">
                Search by job title to get skill suggestions
              </label>
              <div className="relative">
                <RiSearchLine className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  placeholder="e.g. UI/UX Designer"
                  className="w-full bg-white border border-gray-100 rounded-xl py-3 pl-11 pr-4 text-sm outline-none shadow-sm focus:ring-2 focus:ring-purple-500/10 transition-all"
                />
              </div>
            </div>

            {/* SUGGESTED SKILLS WITH RADIO STYLE */}
            <div className="border border-purple-200 rounded-2xl p-6 bg-white shadow-sm relative">
              <div className="flex items-center gap-2 text-purple-600 mb-5">
                <RiSparkling2Fill className="text-base" />
                <span className="text-[10px] font-bold uppercase tracking-[0.1em]">Suggested skills</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {suggestedSkills.map((skill, i) => (
                  <button
                    key={i}
                    onClick={() => toggleSkill(skill)}
                    className={`px-4 py-2 rounded-full text-[12px] font-medium border transition-all flex items-center gap-2
                      ${
                        skills.includes(skill)
                          ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200"
                          : "bg-[#F9FAFB] text-gray-600 border-gray-200 hover:border-purple-300"
                      }`}
                  >
                    {skill}
                    {/* CUSTOM RADIO BUTTON ICON */}
                    <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors
                      ${skills.includes(skill) ? "border-white bg-white" : "border-gray-300 bg-transparent"}
                    `}>
                      {skills.includes(skill) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-4 mt-12 pt-8 border-t border-gray-100">
          <button onClick={onBack} className="px-12 py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
            Prev
          </button>
          <button onClick={onNext} className="px-12 py-3 rounded-xl bg-[#9333ea] text-white text-sm font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95">
            Save & continue
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden lg:block sticky top-10">
        <div className="text-center mb-8">
          <p className="font-bold text-[13px] text-gray-900 tracking-tight">Live Preview (Sample Layout)</p>
          <p className="text-[11px] text-gray-500 mt-1">(Note: Design can be changed later)</p>
        </div>
        <div className="bg-[#FAF7F3] border border-gray-100 rounded-[32px] p-10 min-h-[600px] shadow-sm flex justify-center items-start">
          <div className="w-full bg-white shadow-2xl aspect-[1/1.41] p-10 text-left">
            <h1 className="text-2xl font-serif text-gray-800 border-b pb-4 mb-6 uppercase tracking-[0.2em] text-center">Janna Gardner</h1>
            <div className="space-y-4 pt-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-1.5 mb-3">Skills</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.slice(0, 8).map((s, i) => (
                   <span key={i} className="text-[7px] bg-gray-50 px-2 py-1 rounded border border-gray-100 uppercase tracking-tighter">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsStep;


