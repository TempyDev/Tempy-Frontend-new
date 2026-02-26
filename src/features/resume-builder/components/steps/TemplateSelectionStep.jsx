import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Mock data with categories to demonstrate filtering
const ALL_TEMPLATES = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "Janna Gardner",
  categories: [
    "All",
    i % 2 === 0 ? "One Column" : "Two Column",
    i % 3 === 0 ? "ATS Friendly" : "",
    i < 6 ? "Recommended" : "",
    i % 4 === 0 ? "With Photo" : "Without Photo",
  ].filter(Boolean),
}));

const tabs = [
  "All",
  "Recommended",
  "One Column",
  "Two Column",
  "ATS Friendly",
  "With Photo",
  "Without Photo",
];

const TemplateSelectionStep = () => {
  const [activeTab, setActiveTab] = useState("Recommended");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const filteredTemplates = useMemo(() => {
    if (activeTab === "All") return ALL_TEMPLATES;
    return ALL_TEMPLATES.filter((t) => t.categories.includes(activeTab));
  }, [activeTab]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-[#FAF9F6] min-h-screen">
      {/* TABS */}
      <div className="flex overflow-x-auto gap-3 pb-8 no-scrollbar justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-[13px] font-medium transition-all border
              ${
                activeTab === tab
                  ? "bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredTemplates.map((t) => (
          <div
            key={t.id}
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 border border-gray-100"
          >
            <div className="aspect-[1/1.4] bg-[#F3F4F6] rounded-xl overflow-hidden relative flex items-center justify-center border border-gray-50">
              <span className="text-gray-400 text-xs font-medium">
                Resume Preview {t.id}
              </span>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                <button
                  onClick={() => setPreviewTemplate(t)}
                  className="bg-white text-black px-6 py-2 rounded-lg font-semibold text-sm w-3/4 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center justify-center"
                >
                  Preview
                </button>
                
                {/* Fixed Link implementation */}
                <Link
                  to="/final-review"
                  className="bg-[#8B5CF6] text-white px-6 py-2 rounded-lg font-semibold text-sm w-3/4 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform delay-75 flex items-center justify-center text-center"
                >
                  Select Template
                </Link>
              </div>
            </div>

            {/* COLOR PALETTE */}
            <div className="flex items-center gap-2 mt-4 justify-start px-1">
              <span className="w-6 h-6 rounded-full bg-[#10B981] border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform ring-2 ring-[#10B981]/20"></span>
              <span className="w-6 h-6 rounded-full bg-[#FDE2E4] border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></span>
              <span className="w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></span>
              <span className="w-6 h-6 rounded-full bg-[#D946EF] border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></span>
              <span className="w-6 h-6 rounded-full bg-[#4B5563] border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></span>
              <span className="w-6 h-6 rounded-full bg-[#1F2937] border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"></span>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-12 pb-10">
        <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-10 py-3 rounded-xl font-bold text-sm shadow-md transition-colors">
          Load More
        </button>
      </div>

      {/* PREVIEW MODAL */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-3xl p-8 relative flex flex-col shadow-2xl">
            <button
              onClick={() => setPreviewTemplate(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              x
            </button>

            <div className="flex-1 overflow-auto bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-800">
                  Previewing Template {previewTemplate.id}
                </p>
                <p className="text-gray-500">Full resume layout would render here.</p>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6 mt-2 border-t border-gray-100">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="px-8 py-3 rounded-xl font-bold text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              
              {/* Added Link to Modal as well for better UX */}
              <Link 
                to="/final-review"
                className="bg-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#7C3AED] transition-all flex items-center"
              >
                Use This Template
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelectionStep;


