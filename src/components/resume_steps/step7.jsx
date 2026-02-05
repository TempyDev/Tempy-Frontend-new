import { useState } from "react";

const templates = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "Janna Gardner",
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

const Step7 = () => {
  const [activeTab, setActiveTab] = useState("Recommended");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  return (
    <div className="w-full">

      {/* TABS */}
      <div className="flex overflow-x-auto gap-2 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap
              ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-white border"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      ">
        {templates.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
          >
            {/* TEMPLATE IMAGE MOCK */}
            <div className="aspect-[3/4] bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">
              Resume Preview
            </div>

            {/* ACTIONS */}
            <div className="mt-3 space-y-2">
              <button
                onClick={() => setPreviewTemplate(t)}
                className="w-full border py-1.5 rounded text-xs hover:bg-gray-50"
              >
                Preview
              </button>

              <button className="w-full bg-purple-600 text-white py-1.5 rounded text-xs">
                Select Template
              </button>
            </div>

            {/* COLOR DOTS */}
            <div className="flex gap-1 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-8">
        <button className="bg-purple-600 text-white px-6 py-2 rounded text-sm">
          Load More
        </button>
      </div>

      {/* PREVIEW MODAL */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="
            bg-white 
            w-full 
            max-w-5xl 
            h-[90vh] 
            rounded-xl 
            p-6 
            relative 
            flex 
            flex-col
          ">
            {/* CLOSE */}
            <button
              onClick={() => setPreviewTemplate(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* MODAL CONTENT */}
            <div className="flex-1 overflow-auto flex items-center justify-center">
              <div className="
                w-full 
                max-w-md 
                aspect-[3/4] 
                bg-gray-100 
                rounded-lg 
                flex 
                items-center 
                justify-center
              ">
                Template {previewTemplate.id}
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="border px-5 py-2 rounded text-sm"
              >
                Cancel
              </button>

              <button className="bg-purple-600 text-white px-6 py-2 rounded text-sm">
                Use This Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step7;
