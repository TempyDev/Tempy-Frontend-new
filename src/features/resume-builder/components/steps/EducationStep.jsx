import { useState } from "react";
import { RiPencilLine, RiDeleteBin6Line, RiAddLine } from "react-icons/ri";

const EducationStep = ({ onNext, onBack }) => {
  const [showAddMore, setShowAddMore] = useState(false);
  const [isCurrentlyDoing, setIsCurrentlyDoing] = useState(false);

  const handleSave = () => {
    setShowAddMore(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10">
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col">
        {showAddMore ? (
          /* ================= SUMMARY VIEW ================= */
          <>
            <h2 className="text-xl font-bold mb-8 text-gray-800">Education</h2>

            {[1].map((_, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-6 mb-6 flex justify-between items-start"
              >
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    BIT Erode | 2025 | 80%
                  </p>
                </div>

                <div className="flex gap-4 text-gray-400">
                  <RiPencilLine 
                    onClick={() => setShowAddMore(false)}
                    className="cursor-pointer hover:text-purple-600 text-xl" 
                  />
                  <RiDeleteBin6Line className="text-red-500 cursor-pointer hover:text-red-800 text-xl" />
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowAddMore(false)}
              className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-4 text-sm font-bold text-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <RiAddLine /> Add Education
            </button>

            <div className="flex justify-end gap-4 mt-10 pt-6 border-t border-gray-100">
              <button onClick={onBack} className="px-10 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50">
                Prev
              </button>
              <button onClick={onNext} className="px-10 py-2.5 rounded-xl bg-[#9333ea] text-white text-sm font-bold shadow-lg shadow-purple-200 hover:bg-purple-700">
                Save & continue
              </button>
            </div>
          </>
        ) : (
          /* ================= FORM VIEW (FIGMA STYLE) ================= */
          <>
            <h2 className="text-xl font-bold mb-8 text-gray-800">Education</h2>

            <div className="flex-1 space-y-6">
              {/* Previous Summary Card (Static preview as per figma) */}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Degree / Course</label>
                <input
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-purple-500/10"
                  placeholder="Enter Degree / Course"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Institution name</label>
                  <input
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none"
                    placeholder="Enter institution name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Year of completion</label>
                  <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:18px_18px] bg-[right_12px_center] bg-no-repeat">
                    <option>Select year of completion</option>
                  </select>
                  <div className="flex items-center gap-2 mt-1">
                    <input 
                        type="checkbox" 
                        id="currentlyDoing"
                        checked={isCurrentlyDoing}
                        onChange={() => setIsCurrentlyDoing(!isCurrentlyDoing)}
                        className="w-4 h-4 rounded accent-[#9333ea]" 
                    />
                    <label htmlFor="currentlyDoing" className="text-xs font-medium text-gray-600">I am currently doing</label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Mark / CGPA (optional)</label>
                  <input
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none"
                    placeholder="Enter Score"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Location</label>
                  <input
                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-xl p-3.5 text-sm outline-none"
                    placeholder="Enter Location"
                  />
                </div>
              </div>

              {/* Add Additional Information Pill Buttons */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700">Add additional information</label>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-white">
                    Discription <RiAddLine className="text-gray-400" />
                  </button>
                  <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-white">
                    Certificate link <RiAddLine className="text-gray-400" />
                  </button>
                  <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-white">
                    Add <RiAddLine className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t mt-10">
              <button
                onClick={onBack}
                className="px-10 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-10 py-2.5 rounded-xl bg-[#9333ea] text-white text-sm font-bold shadow-md hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>

      {/* RIGHT PREVIEW (Updated to match Step 2/3 style) */}
      <div className="hidden lg:block sticky top-10 text-center">
        <p className="font-bold text-[13px] text-gray-900 mb-1 uppercase tracking-tight">Live Preview (Sample Layout)</p>
        <p className="text-[11px] text-gray-500 mb-8">(Note: Design can be changed later)</p>
        
        <div className="bg-[#FAF7F3] border border-gray-100 rounded-3xl p-10 min-h-[600px] shadow-sm flex justify-center items-start">
            <div className="w-full bg-white shadow-2xl aspect-[1/1.41] p-10 text-left">
                <h1 className="text-xl font-serif text-gray-800 border-b pb-3 mb-6 uppercase tracking-[0.15em] text-center">Janna Gardner</h1>
                <div className="space-y-4">
                  <div className="h-1.5 w-full bg-gray-50 rounded-full" />
                  <div className="h-1.5 w-5/6 bg-gray-50 rounded-full mx-auto" />
                  <div className="pt-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-1.5 mb-3">Education</p>
                    <div className="flex justify-between items-baseline">
                      <div className="h-2 w-1/2 bg-gray-100 rounded-sm" />
                      <div className="h-1.5 w-1/6 bg-gray-50 rounded-sm" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EducationStep;
