import { useState } from "react";
import { 
  RiSparkling2Fill, 
  RiDeleteBin6Line, 
  RiPencilLine, 
  RiAddLine, 
  RiUploadCloud2Line 
} from "react-icons/ri";

const Step3 = ({ onNext, onBack }) => {
  const [currentRole, setCurrentRole] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showAddMore, setShowAddMore] = useState(true); // Defaulting to summary view for demonstration

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {/* LEFT SIDE FORM */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col min-h-[600px]">
        
        {showAddMore ? (
          /* ================= SUMMARY SCREEN (image_d508de.png) ================= */
          <>
            <h2 className="text-xl font-bold mb-8 text-gray-800">Experience</h2>
            <div className="space-y-4 flex-1">
              <div className="border border-gray-200 rounded-2xl p-6 relative bg-white group hover:border-purple-300 transition-all">
                <div className="absolute right-6 top-6 flex gap-4 opacity-100 transition-opacity">
                  <RiPencilLine 
                    onClick={() => setShowAddMore(false)} 
                    className="cursor-pointer text-gray-400 hover:text-purple-600 text-xl" 
                  />
                  <RiDeleteBin6Line className="cursor-pointer text-gray-400 hover:text-red-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800">Tempy</h3>
                  <p className="text-sm text-gray-500 mb-3">UIUX Designer | December 15 2025 - Present</p>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[90%]">
                    Goal-oriented manager dedicated to continuous improvement and driving positive business impact. 
                    Talented problem solver and leader with high-level business and financial acumen. 
                    Motivates teams to reach performance goals and business objectives.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setShowAddMore(false)} 
                className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-5 text-base font-bold text-gray-700 hover:bg-gray-50 hover:border-purple-200 transition-all flex items-center justify-center gap-2"
              >
                Add Experience
              </button>
            </div>

            <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
              <button onClick={onBack} className="px-10 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">Prev</button>
              <button onClick={onNext} className="px-10 py-2.5 rounded-xl bg-[#9333ea] text-white text-sm font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all">Save & continue</button>
            </div>
          </>
        ) : (
          /* ================= FORM SCREEN WITH AI GRID (image_d4aba2.png) ================= */
          <>
            <h2 className="text-xl font-bold mb-8 text-gray-800">Experience</h2>
            <div className="space-y-6 flex-1">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 tracking-tight">Profile Heading</label>
                <input className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-purple-500/10" placeholder="Enter Title" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Title</label>
                  <input className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none" placeholder="Enter Title" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Employment type (optional)</label>
                  <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:18px_18px] bg-[right_12px_center] bg-no-repeat">
                    <option>Enter Employment type</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Company or organization</label>
                  <input className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none" placeholder="Enter Company" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Location</label>
                  <input className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none" placeholder="Enter Location" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Start Date</label>
                  <div className="flex gap-3">
                    <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm appearance-none"><option>Select Month</option></select>
                    <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm appearance-none"><option>Select Year</option></select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">End Date</label>
                  <div className="flex gap-3">
                    <select disabled={currentRole} className="w-full bg-[#ecedef] border border-gray-200 rounded-xl p-3.5 text-sm disabled:cursor-not-allowed appearance-none"><option>Select Month</option></select>
                    <select disabled={currentRole} className="w-full bg-[#ecedef] border border-gray-200 rounded-xl p-3.5 text-sm disabled:cursor-not-allowed appearance-none"><option>Select Year</option></select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={currentRole} 
                  onChange={() => setCurrentRole(!currentRole)} 
                  className="w-4 h-4 rounded accent-[#9333ea] border-gray-300" 
                />
                <span className="text-sm font-medium text-gray-600">I am currently working in this role</span>
              </div>

              {/* DESCRIPTION & AI SUGGESTIONS GRID (image_d4aba2.png) */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Description</label>
                <div className={`grid gap-6 transition-all duration-300 ${showAI ? "md:grid-cols-2" : "grid-cols-1"}`}>
                  
                  {/* Editor Side */}
                  <div className="relative border border-gray-200 rounded-2xl overflow-hidden bg-[#F9FAFB] flex flex-col min-h-[380px]">
                    <div className="p-5 flex-1">
                      <textarea 
                        className="w-full bg-transparent text-sm text-gray-700 leading-relaxed resize-none outline-none" 
                        rows={12} 
                        placeholder="Goal-oriented manager..." 
                        defaultValue="Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen."
                      />
                      {!showAI && (
                        <button 
                          onClick={() => setShowAI(true)} 
                          className="absolute bottom-16 left-5 z-20 bg-gradient-to-b from-[#9B21FE] to-[#DA29B8] text-white px-4 py-2.5 rounded-lg text-[11px] font-bold flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform"
                        >
                          <RiSparkling2Fill className="text-base" /> Enhance With AI
                        </button>
                      )}
                    </div>
                    <div className="bg-white border-t border-gray-100 p-4 px-6 flex items-center justify-between text-gray-400">
                      <div className="flex items-center gap-6">
                        <button className="font-bold text-gray-900 text-base">B</button>
                        <button className="italic font-serif text-lg">I</button>
                        <button className="underline text-lg">U</button>
                        <button className="hover:text-gray-700">
                          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 00 7.07 7.07l1.71-1.71"/></svg>
                        </button>
                      </div>
                      <div className="flex gap-4">
                        <button className="text-xl">↺</button>
                        <button className="text-xl">↻</button>
                      </div>
                    </div>
                  </div>

                  {/* AI Suggestions Side */}
                  {showAI && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-[380px] overflow-y-auto pr-2 custom-scrollbar animate-in fade-in slide-in-from-right-4">
                      {["Recommended", "Alternative", "Alternative", "Alternative"].map((type, i) => (
                        <div key={i} className={`border ${i === 0 ? "border-[#9333ea] bg-[#fdfaff]" : "border-purple-200 bg-white"} rounded-2xl p-4 cursor-pointer hover:border-purple-500 transition-all shadow-sm`}>
                          <div className={`flex items-center gap-1 mb-2 ${i === 0 ? "text-[#9333ea]" : "text-purple-400"}`}>
                            <RiSparkling2Fill className="text-[10px]" />
                            <span className="text-[9px] font-extrabold uppercase tracking-widest">{type}</span>
                          </div>
                          <p className="text-[10px] text-gray-700 leading-[1.6]">
                            Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen.
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
              <button onClick={() => setShowAddMore(true)} className="px-10 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">Prev</button>
              <button onClick={() => setShowAddMore(true)} className="px-10 py-2.5 rounded-xl bg-[#9333ea] text-white text-sm font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all">Save & continue</button>
            </div>
          </>
        )}
      </div>

      {/* RIGHT PREVIEW (image_d508de.png) */}
      <div className="hidden lg:block sticky top-10">
        <div className="text-center mb-8">
          <p className="font-bold text-[13px] text-gray-900 tracking-tight">Live Preview (Sample Layout)</p>
          <p className="text-[11px] text-gray-500 mt-1">(Note: Design can be changed later)</p>
        </div>
        <div className="bg-[#FAF7F3] border border-gray-100 rounded-[32px] p-10 min-h-[650px] shadow-sm flex justify-center items-start">
          <div className="w-full bg-white shadow-2xl aspect-[1/1.41] p-10 text-left">
            <h1 className="text-2xl font-serif text-gray-800 border-b pb-4 mb-6 uppercase tracking-[0.15em] text-center">Janna Gardner</h1>
            <div className="space-y-4">
              <div className="h-[1.5px] w-full bg-gray-100 rounded-full" />
              <div className="h-[1.5px] w-5/6 bg-gray-100 rounded-full mx-auto" />
              <div className="pt-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-1.5 mb-3">Experience</p>
                <div className="flex justify-between items-baseline">
                  <div className="h-2 w-1/3 bg-gray-100 rounded-sm" />
                  <div className="h-1.5 w-1/4 bg-gray-50 rounded-sm" />
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 w-full bg-gray-50 rounded-full" />
                  <div className="h-1.5 w-full bg-gray-50 rounded-full" />
                  <div className="h-1.5 w-4/5 bg-gray-50 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;