import { useState } from "react";
import { RiSparkling2Fill } from "react-icons/ri";

const Step2 = ({ onNext, onBack }) => {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {/* LEFT SECTION - Shifts from span-2 to span-2 based on layout */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col">
        <h2 className="text-lg font-semibold mb-8 text-gray-800">Professional Summary</h2>

        {/* DYNAMIC GRID: When showAI is true, it uses a 2-column layout for the internal content */}
        <div className={`flex-1 grid gap-6 transition-all duration-300 ${showAI ? "md:grid-cols-2" : "grid-cols-1"}`}>
          
          {/* EDITOR BOX SECTION */}
          <div className="relative">
            {/* FLOATING AI BUTTON */}
            {!showAI && (
              <div 
                onClick={() => setShowAI(true)}
                className="absolute bottom-16 left-5 z-30 bg-gradient-to-b from-[#9B21FE] to-[#DA29B8] text-white px-4 py-2 rounded-lg text-[11px] font-bold flex items-center gap-2 shadow-lg cursor-pointer hover:scale-105 transition-transform"
              >
                <RiSparkling2Fill className="text-[16px]" />
                <span className="tracking-wide">Enhance With AI</span>
              </div>
            )}

            <div className="border border-gray-200 rounded-xl overflow-hidden bg-[#F9FAFB] flex flex-col min-h-[450px] relative z-10">
              <div className="p-5 flex-1">
                <textarea
                  rows={12}
                  className="w-full bg-transparent text-sm text-gray-700 leading-relaxed resize-none focus:outline-none placeholder:text-gray-400"
                  defaultValue="Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen. Motivates teams to reach performance goals and business objectives."
                />
                {showAI && (
                   <button 
                    onClick={() => setShowAI(false)}
                    className="bg-gradient-to-b from-[#9B21FE] to-[#DA29B8]  text-white px-4 py-2 rounded-lg text-[10px] font-bold flex gap-2 items-center mt-16"
                   >
                    <RiSparkling2Fill className="text-[16px]" />
                     View more suggestions
                   </button>
                )}
              </div>

              {/* TOOLBAR */}
              <div className="bg-white border-t border-gray-100 p-3 px-5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <button className="hover:text-gray-700 font-bold">B</button>
                  <button className="hover:text-gray-700 italic font-serif text-lg">I</button>
                  <button className="hover:text-gray-700 underline text-lg">U</button>
                  <button className="hover:text-gray-700">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 00 7.07 7.07l1.71-1.71"/></svg>
                  </button>
                </div>
                
              </div>
            </div>
          </div>

          {/* AI SUGGESTIONS GRID (FIGMA DESIGN) */}
          {showAI && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in slide-in-from-right-4 duration-500 overflow-y-auto max-h-[500px] pr-2">
              
              {/* Recommended Card */}
              <div className="border-2 border-purple-400 bg-purple-50 rounded-xl p-4 flex flex-col h-fit">
                <div className="flex items-center gap-1 text-[#9333ea] mb-2">
                  <RiSparkling2Fill className="text-xs" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">Recommended</span>
                </div>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen. Motivates teams to reach performance goals and business objectives.
                </p>
              </div>

              {/* Alternative Cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-purple-200 bg-white rounded-xl p-4 flex flex-col h-fit">
                   <div className="flex items-center gap-1 text-purple-400 mb-2">
                    <RiSparkling2Fill className="text-xs" />
                    <span className="text-[9px] font-bold uppercase tracking-wider">Alternative</span>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen.
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-3 pt-6 border-t mt-8">
          <button onClick={onBack} className="px-6 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">
            Prev
          </button>
          <button onClick={onNext} className="px-10 py-2.5 rounded-lg bg-[#9333ea] text-white text-sm font-semibold shadow-md hover:bg-purple-700">
            Save & continue
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden lg:block sticky top-10">
        <div className="text-center mb-6">
          <p className="font-bold text-[13px] text-gray-900">Live Preview (Sample Layout)</p>
          <p className="text-[11px] text-gray-500">(Note: Design can be changed later)</p>
        </div>
        <div className="bg-[#FAF7F3] border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="w-full bg-white shadow-2xl aspect-[1/1.4] p-8 text-left">
            <h1 className="text-lg font-serif text-gray-800 border-b pb-2 mb-3">Janna Gardner</h1>
            <h3 className="text-[7px] font-bold uppercase tracking-widest text-gray-900 mb-1">Professional Summary</h3>
            <p className="text-[7px] text-gray-600 leading-normal">
              Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;