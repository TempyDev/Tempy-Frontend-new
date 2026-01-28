import { useState } from "react";

const Step4 = ({ onNext, onBack }) => {
  const [showAddMore, setShowAddMore] = useState(false);

  const handleSave = () => {
    setShowAddMore(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col">
        {showAddMore ? (
          /* ================= SUMMARY VIEW ================= */
          <>
            <h2 className="text-lg font-semibold mb-4">Education</h2>

            {[1].map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 mb-4 flex justify-between items-start"
              >
                <div>
                  <h3 className="text-sm font-semibold">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">
                    Anna University | 2021 – 2025
                  </p>
                  <p className="text-xs text-gray-600">
                    CGPA: 8.4
                  </p>
                </div>

                <div className="flex gap-3 text-gray-400">
                  <button
                    onClick={() => setShowAddMore(false)}
                    className="hover:text-gray-600"
                  >
                    ✏️
                  </button>
                  <button className="hover:text-red-500">🗑️</button>
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowAddMore(false)}
              className="w-full border rounded-md py-2 text-sm text-gray-600 hover:bg-gray-50"
            >
              Add Education
            </button>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={onBack}
                className="px-4 py-2 rounded-md border text-sm"
              >
                Prev
              </button>

              <button
                onClick={onNext}
                className="px-5 py-2 rounded-md bg-purple-600 text-white text-sm"
              >
                Save & continue
              </button>
            </div>
          </>
        ) : (
          /* ================= FORM VIEW ================= */
          <>
            <h2 className="text-lg font-semibold mb-6">Education</h2>

            <div className="flex-1 space-y-4">
              <div>
                <label className="text-xs font-medium mb-1 block">
                  Degree
                </label>
                <input
                  className="border rounded-md p-2 text-sm w-full"
                  placeholder="Eg: Bachelor of Computer Science"
                />
              </div>

              <div>
                <label className="text-xs font-medium mb-1 block">
                  Institution
                </label>
                <input
                  className="border rounded-md p-2 text-sm w-full"
                  placeholder="College / University name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium mb-1 block">
                    Start Year
                  </label>
                  <input
                    className="border rounded-md p-2 text-sm w-full"
                    placeholder="2021"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium mb-1 block">
                    End Year
                  </label>
                  <input
                    className="border rounded-md p-2 text-sm w-full"
                    placeholder="2025"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium mb-1 block">
                  Grade / CGPA (optional)
                </label>
                <input
                  className="border rounded-md p-2 text-sm w-full"
                  placeholder="Eg: 8.4 CGPA"
                />
              </div>

              <div>
                <label className="text-xs font-medium mb-1 block">
                  Description (optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full border rounded-md p-3 text-sm resize-none"
                  placeholder="Achievements, specialization, etc."
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t mt-6">
              <button
                onClick={onBack}
                className="px-4 py-2 rounded-md border text-sm"
              >
                Prev
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm"
              >
                Save & continue
              </button>
            </div>
          </>
        )}
      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden lg:block bg-white rounded-xl shadow p-5">
        <p className="text-xs text-gray-500 mb-3">
          Live Preview (Sample Layout)
          <br />
          <span className="text-[10px]">
            (Design can be changed later)
          </span>
        </p>

        <div className="border rounded-md bg-gray-50 p-3 h-[520px] flex items-center justify-center text-xs text-gray-400">
          Resume Preview
        </div>
      </div>
    </div>
  );
};

export default Step4;
