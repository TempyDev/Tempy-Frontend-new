import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const TABS = ["All", "Recommended", "One column", "Two column", "ATS friendly", "With photo", "Without photo"];
const INITIAL_COUNT = 8;

const PALETTES = [
  { id: "green", bg: "bg-[#10B981]", theme: "#10B981", light: "#ECFDF5" },
  { id: "pink", bg: "bg-[#FFE4E6]", theme: "#F43F5E", light: "#FFF1F2" },
  { id: "purple", bg: "bg-[#A855F7]", theme: "#8B5CF6", light: "#F5F3FF" },
  { id: "magenta", bg: "bg-[#EC4899]", theme: "#DB2777", light: "#FDF2F8" },
  { id: "gray", bg: "bg-[#4B5563]", theme: "#374151", light: "#F9FAFB" },
  { id: "black", bg: "bg-[#1F2937]", theme: "#111827", light: "#F3F4F6" },
];

const resumeData = {
  name: "Janna Gardner",
  contact: "4567 Main Street, Chicago, Illinois 98052 • (716) 555-0100 • janna@example.com",
  summary: "Human Resources Generalist with 6+ years of experience assisting with staffing needs. Proven track record of using excellent communication skills.",
  experience: {
    date: "20XX - PRESENT",
    role: "Human Resources Generalist",
    company: "Lamna Healthcare Company"
  }
};

const resumesMock = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  category: TABS[i % (TABS.length - 1) + 1] 
}));

const ResumeContentPreview = ({ theme }) => (
  <div className="p-4 text-[7px] leading-[1.4] text-gray-500 font-sans h-full overflow-hidden select-none">
    <div 
      className="py-1.5 mb-2 text-center text-gray-800 font-bold text-[10px] tracking-widest transition-colors duration-300"
      style={{ backgroundColor: theme.light }}
    >
      {resumeData.name.toUpperCase()}
    </div>
    <div className="text-[5px] text-center mb-4 border-b pb-1 border-gray-100">{resumeData.contact}</div>
    
    <div className="mb-3">
      <p className="font-bold text-gray-700 mb-0.5" style={{ color: theme.theme }}>Summary</p>
      <p className="line-clamp-3">{resumeData.summary}</p>
    </div>

    <div className="mb-3">
      <div className="px-1 font-bold text-gray-700 inline-block mb-1" style={{ backgroundColor: theme.light }}>Experience</div>
      <p className="font-bold text-[6px] text-gray-600">{resumeData.experience.date}</p>
      <p className="font-bold transition-colors duration-300" style={{ color: theme.theme }}>{resumeData.experience.role}</p>
      <div className="h-1 bg-gray-100 rounded w-full mt-1" />
      <div className="h-1 bg-gray-100 rounded w-5/6 mt-1" />
    </div>
  </div>
);

export default function ResumeTemplates() {
  const [activeTab, setActiveTab] = useState("Recommended");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [selectedPalettes, setSelectedPalettes] = useState({});

  const filteredResumes = useMemo(() => {
    const filtered = activeTab === "All" 
      ? resumesMock 
      : resumesMock.filter(resume => resume.category === activeTab);
    return filtered.slice(0, visibleCount);
  }, [activeTab, visibleCount]);

  const handlePaletteClick = (resumeId, palette) => {
    setSelectedPalettes(prev => ({ ...prev, [resumeId]: palette }));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-4 md:p-8">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-1 bg-white p-1.5 rounded-full border border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setVisibleCount(INITIAL_COUNT); }}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab ? "bg-[#8B5CF6] text-white shadow-md" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredResumes.map((resume) => {
          const currentPalette = selectedPalettes[resume.id] || PALETTES[0];

          return (
            <div key={resume.id} className="relative bg-white rounded-xl shadow-sm border border-gray-100 group overflow-hidden">
              <div className="aspect-[1/1.4] bg-white">
                <ResumeContentPreview theme={currentPalette} />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-3 p-4">
                <button 
                  onClick={() => setPreviewTemplate(resume)} 
                  className="bg-white text-black px-8 py-2 rounded-lg text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform"
                >
                  Preview
                </button>
                <Link 
                  to="/final-review"
                  className="bg-[#8B5CF6] text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform delay-75 flex items-center justify-center w-full max-w-[180px]"
                >
                  Select Template
                </Link>
              </div>

              {/* Color Palette */}
              <div className="flex items-center gap-2 p-3 border-t border-gray-50 bg-white">
                {PALETTES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePaletteClick(resume.id, p)}
                    className={`w-5 h-5 rounded-full ${p.bg} transition-all duration-200 hover:scale-125 ${
                      currentPalette.id === p.id ? "ring-2 ring-[#8B5CF6] ring-offset-2 scale-110" : "opacity-80"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12 pb-10">
        <button 
          onClick={() => setVisibleCount(prev => prev + 4)}
          className="bg-[#8B5CF6] text-white px-10 py-3 rounded-xl font-bold shadow-md hover:bg-[#7C3AED] transition-colors"
        >
          Load More
        </button>
      </div>

      {/* Corrected Full Modal Preview */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">
            {/* Close Button */}
            <button 
              onClick={() => setPreviewTemplate(null)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl z-10"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-10 bg-gray-50 flex justify-center">
              <div className="w-full max-w-[600px] bg-white shadow-lg p-12 min-h-[800px] text-[12px]">
                <div 
                  className="py-6 mb-4 text-center text-gray-800 font-bold text-2xl tracking-[0.2em] transition-colors"
                  style={{ 
                    backgroundColor: (selectedPalettes[previewTemplate.id] || PALETTES[0]).light 
                  }}
                >
                  JANNA GARDNER
                </div>
                <p className="text-center text-gray-400 mb-10">{resumeData.contact}</p>
                <h2 className="font-bold border-b mb-2" style={{ color: (selectedPalettes[previewTemplate.id] || PALETTES[0]).theme }}>SUMMARY</h2>
                <p className="text-gray-600 mb-8">{resumeData.summary}</p>
                <h2 className="font-bold border-b mb-2" style={{ color: (selectedPalettes[previewTemplate.id] || PALETTES[0]).theme }}>EXPERIENCE</h2>
                <p className="font-bold text-gray-800">{resumeData.experience.role}</p>
                <p className="text-gray-500">{resumeData.experience.company}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-4 p-6 bg-white border-t border-gray-100">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-8 py-3 rounded-xl font-bold text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              
              <Link 
                to="/final-review"
                className="bg-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#7C3AED] transition-all flex items-center justify-center"
              >
                Use This Template
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}