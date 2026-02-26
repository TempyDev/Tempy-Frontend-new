import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiAddLine, RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";

const AdditionalDetailsStep = ({ onBack }) => {
  const navigate = useNavigate();

  const handleSaveContinue = () => {
    navigate("/resume-templates");
  };

  const [languages, setLanguages] = useState([{ name: "", level: "" }]);
  const [hobbies, setHobbies] = useState(
    "- Prototyping\n- User Centric Designing\n- User Experience Research\n- Interaction Designing\n- Wireframing",
  );

  const handleLangChange = (index, field, value) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const addLanguage = () => {
    setLanguages((prev) => [...prev, { name: "", level: "" }]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-10">
      {/* LEFT FORM */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-8 text-gray-800">Additional Details</h2>

        {/* LANGUAGES SECTION */}
        <div className="bg-[#FFF8F8] border border-[#FFEAEA] rounded-2xl p-5 sm:p-6 mb-6">
          <h3 className="text-sm font-bold text-gray-700 mb-5">Language</h3>

          <div className="space-y-4">
            {languages.map((lang, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Enter Language"
                  value={lang.name}
                  onChange={(e) => handleLangChange(i, "name", e.target.value)}
                  className="bg-white border border-gray-200 rounded-xl p-3.5 text-sm w-full outline-none focus:ring-2 focus:ring-purple-500/10"
                />

                <select
                  value={lang.level}
                  onChange={(e) => handleLangChange(i, "level", e.target.value)}
                  className="bg-white border border-gray-200 rounded-xl p-3.5 text-sm w-full appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:18px_18px] bg-[right_12px_center] bg-no-repeat outline-none"
                >
                  <option value="">Select Proficiency</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Native</option>
                </select>
              </div>
            ))}
          </div>

          <button
            onClick={addLanguage}
            className="w-full mt-5 bg-white border border-gray-200 rounded-xl py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Add Language
          </button>
        </div>

        {/* HOBBIES SECTION */}
        <div className="bg-[#FFF8F8] border border-[#FFEAEA] rounded-2xl overflow-hidden flex flex-col mb-8">
          <div className="p-6 pb-0">
             <h3 className="text-sm font-bold text-gray-700 mb-4">Hobbies</h3>
             <textarea
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
                rows={6}
                className="w-full bg-transparent text-sm text-gray-700 leading-relaxed resize-none outline-none"
              />
          </div>

          {/* FIGMA STYLE TOOLBAR */}
          <div className="bg-white border-t border-gray-100 p-3 px-6 flex items-center justify-between">
            <div className="flex items-center gap-6 text-gray-400">
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
               <RiArrowGoBackLine className="hover:text-gray-500 cursor-pointer" />
               <RiArrowGoForwardLine className="hover:text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* ADDITIONAL DETAILS LINKS */}
        <div className="mb-10">
          <h4 className="text-sm font-bold text-gray-800 mb-1">Add Additional Details</h4>
          <p className="text-xs text-gray-500 mb-4">Share online profiles if you have them.</p>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-white">
              Accomplishments <RiAddLine className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-white">
              Affiliation <RiAddLine className="text-gray-400" />
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-white">
              Add <RiAddLine className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-4 border-t pt-8 mt-10">
          <button
            onClick={onBack}
            className="px-12 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all"
          >
            Prev
          </button>
          <button
            onClick={handleSaveContinue}
            className="bg-[#9333ea] text-white px-12 py-3 rounded-xl text-sm font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all active:scale-95"
          >
            Save & Continue
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
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-1 mb-2">Languages</p>
                {languages.map((l, i) => (
                  <p key={i} className="text-[8px] text-gray-500 uppercase">
                    {l.name} {l.level && ` | ${l.level}`}
                  </p>
                ))}
              </div>
              <div className="pt-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-1 mb-2">Hobbies</p>
                <p className="text-[8px] text-gray-500 leading-relaxed uppercase">{hobbies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetailsStep;


