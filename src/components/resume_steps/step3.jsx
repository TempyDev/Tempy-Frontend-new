import { useState } from "react";

const Step3 = ({ onNext, onBack }) => {
  const [currentRole, setCurrentRole] = useState(false);
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT FORM CARD */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-6">Experience</h2>

        {/* FORM CONTENT */}
        <div className="flex-1 space-y-4">

          {/* TITLE */}
          <div>
            <label className="text-xs font-medium mb-1 block">Title</label>
            <input
              className="border rounded-md p-2 text-sm w-full"
              placeholder="Enter Title"
            />
          </div>

          {/* EMPLOYMENT + COMPANY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium mb-1 block">
                Employment type (optional)
              </label>
              <select className="border rounded-md p-2 text-sm w-full">
                <option>Enter Employment type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium mb-1 block">
                Company or organization
              </label>
              <input
                className="border rounded-md p-2 text-sm w-full"
                placeholder="Enter Company"
              />
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <label className="text-xs font-medium mb-1 block">Location</label>
            <input
              className="border rounded-md p-2 text-sm w-full"
              placeholder="Enter Location"
            />
          </div>

          {/* START / END DATE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium mb-1 block">Start Date</label>
              <div className="flex gap-2">
                <select className="border rounded-md p-2 text-sm w-full">
                  <option>Select Month</option>
                </select>
                <select className="border rounded-md p-2 text-sm w-full">
                  <option>Select Year</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium mb-1 block">End Date</label>
              <div className="flex gap-2">
                <select
                  disabled={currentRole}
                  className="border rounded-md p-2 text-sm w-full disabled:bg-gray-100"
                >
                  <option>Select Month</option>
                </select>
                <select
                  disabled={currentRole}
                  className="border rounded-md p-2 text-sm w-full disabled:bg-gray-100"
                >
                  <option>Select Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* CURRENT ROLE */}
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <input
              type="checkbox"
              checked={currentRole}
              onChange={() => setCurrentRole(!currentRole)}
            />
            <span>I am currently working in this role</span>
          </div>

          {/* DESCRIPTION + AI */}
          <div
            className={`grid gap-6 ${
              showAI ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {/* DESCRIPTION */}
            <div>
              <label className="text-xs font-medium mb-1 block">
                Description
              </label>

              <textarea
                rows={5}
                className="w-full border rounded-md p-3 text-sm resize-none"
                defaultValue="Goal-oriented manager dedicated to continuous improvement and driving positive business impact. Talented problem solver and leader with high-level business and financial acumen."
              />

              <button
                onClick={() => setShowAI(true)}
                className="mt-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md text-xs font-medium"
              >
                ✨ Enhance With AI
              </button>

              {/* TOOLBAR */}
              <div className="flex items-center gap-4 border-t mt-4 pt-3 text-gray-500 text-sm">
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
                    Goal-oriented manager dedicated to continuous improvement
                    and driving positive business impact. Talented problem
                    solver and leader with high-level business and financial
                    acumen.
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
              </div>
            )}
          </div>
        </div>

        {/* FOOTER BUTTONS */}
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
      <div className="hidden lg:block bg-white rounded-xl shadow p-5">
        <p className="text-xs text-gray-500 mb-3">
          Live Preview (Sample Layout)
          <br />
          <span className="text-[10px]">(Note: Design can be changed later)</span>
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

export default Step3;
