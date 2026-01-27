import { useState } from "react";

const Step2 = ({ onNext, onBack }) => {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT CARD */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Professional Summary</h2>

        {/* MAIN CONTENT */}
        <div
          className={`grid gap-6 flex-1 ${
            showAI ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {/* TEXTAREA SECTION */}
          <div>
            <textarea
              rows={8}
              className="w-full border rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen. Motivates teams to reach performance goals and business objectives."
            />

            <div className="mt-3">
              <button
                onClick={() => setShowAI(true)}
                className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md text-xs font-medium"
              >
                ✨ Enhance with AI
              </button>
            </div>

            {/* TOOLBAR */}
            <div className="flex items-center gap-4 border-t mt-5 pt-3 text-gray-500 text-sm">
              <span className="font-bold">B</span>
              <span className="italic">I</span>
              <span className="underline">U</span>
              <span>•</span>
              <span>≡</span>
              <span>↺</span>
              <span>↻</span>
            </div>
          </div>

          {/* AI SUGGESTIONS */}
          {showAI && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Recommended */}
              <div className="border rounded-lg p-3 bg-purple-50 border-purple-300 md:col-span-2">
                <p className="text-xs font-semibold text-purple-700 mb-1">
                  ✨ Recommended
                </p>
                <p className="text-xs text-gray-600">
                  Goal-oriented manager dedicated to continuous improvement and
                  driving positive business impact. Talented problem solver and
                  leader with high-level business and financial acumen.
                </p>
              </div>

              {/* Alternatives */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-3 border-purple-200"
                >
                  <p className="text-xs font-semibold text-purple-600 mb-1">
                    ✨ Alternative
                  </p>
                  <p className="text-xs text-gray-600">
                    Goal-oriented manager dedicated to continuous improvement
                    and driving positive business impact.
                  </p>
                </div>
              ))}

              {/* View more */}
              <button className="text-xs text-purple-600 font-medium md:col-span-2">
                + View more suggestions
              </button>
            </div>
          )}
        </div>

        {/* FOOTER BUTTONS (NO OVERLAP) */}
        <div className="flex justify-end gap-3 pt-6 border-t mt-6">
          <button
            onClick={onBack}
            className="px-4 py-2 rounded-md border text-sm"
          >
            Prev
          </button>

          <button
            onClick={onNext}
            className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm"
          >
            Save & continue
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden lg:block rounded-xl px-5">
        <p className="text-center font-semibold text-xs text-gray-900 mb-3">
          Live Preview (Sample Layout)
        </p>
        <p className="text-center text-xs text-gray-900 mb-3">
          (Note: Design can be changed later)
        </p>

        <div className="border rounded-md p-3 bg-gray-50">
          <div className="h-[420px] bg-white rounded shadow flex items-center justify-center text-gray-400 text-xs">
            Resume Preview
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
