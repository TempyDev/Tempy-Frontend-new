import { useState } from "react";

const TABS = ["All", "Recommended", "One column", "Two column", "ATS friendly", "With photo", "Without photo"];

const INITIAL_COUNT = 8;

const resumesMock = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: "Janna Gardner",
}));

export default function ResumeTemplates() {
  const [activeTab, setActiveTab] = useState("Recommended");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [previewId, setPreviewId] = useState(null);

  const visibleResumes = resumesMock.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-8">
      {/* Tabs */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-600 hover:bg-purple-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {visibleResumes.map((resume) => (
          <div
            key={resume.id}
            className="relative bg-white rounded-xl shadow-sm border overflow-hidden group"
          >
            {/* Resume Preview */}
            <div className="p-4 text-xs text-gray-600 leading-relaxed h-[340px]">
              <h3 className="text-center font-semibold text-gray-800 mb-2">
                {resume.name}
              </h3>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded" />
                <div className="h-2 bg-gray-200 rounded w-5/6" />
                <div className="h-2 bg-gray-200 rounded w-4/6" />
                <div className="h-2 bg-gray-200 rounded" />
                <div className="h-2 bg-gray-200 rounded w-3/6" />
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3">
              <button
                onClick={() => setPreviewId(resume.id)}
                className="bg-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Preview
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Select Template
              </button>
            </div>

            {/* Color Dots */}
            <div className="flex gap-1 p-3">
              {["bg-green-500", "bg-purple-500", "bg-pink-500", "bg-gray-800"].map(
                (c, i) => (
                  <span key={i} className={`w-3 h-3 rounded-full ${c}`} />
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < resumesMock.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((c) => c + INITIAL_COUNT)}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      {previewId && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">
            <button
              onClick={() => setPreviewId(null)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Resume Preview</h2>
            <div className="h-[500px] border rounded-lg p-6 text-sm text-gray-600">
              Full resume preview content goes here…
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
