import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step6 = ({ onNext, onBack }) => {
  const navigate = useNavigate();

  const handleSaveContinue = () => {
    navigate("/resume-templates");
  };
  const [languages, setLanguages] = useState([{ name: "", level: "" }]);

  const [hobbies, setHobbies] = useState(
    "- Prototyping\n- User Centric Designing\n- User Experience Research",
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT FORM */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-5 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold mb-5">
          Additional Details
        </h2>

        {/* LANGUAGES */}
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 sm:p-5 mb-6">
          <h3 className="text-sm font-medium mb-4">Language</h3>

          <div className="space-y-3">
            {languages.map((lang, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  placeholder="Enter Language"
                  value={lang.name}
                  onChange={(e) => handleLangChange(i, "name", e.target.value)}
                  className="border rounded-md p-2 text-sm w-full"
                />

                <select
                  value={lang.level}
                  onChange={(e) => handleLangChange(i, "level", e.target.value)}
                  className="border rounded-md p-2 text-sm w-full"
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
            className="w-full mt-4 border rounded-md py-2 text-sm hover:bg-gray-50"
          >
            Add Language
          </button>
        </div>

        {/* HOBBIES */}
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 sm:p-5 mb-6">
          <h3 className="text-sm font-medium mb-4">Hobbies</h3>

          <textarea
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            rows={6}
            className="w-full border rounded-md p-3 text-sm resize-none"
          />

          {/* SIMPLE TOOLBAR */}
          <div className="flex flex-wrap gap-3 border-t mt-4 pt-3 text-gray-500 text-sm">
            <span className="font-bold cursor-pointer">B</span>
            <span className="italic cursor-pointer">I</span>
            <span className="underline cursor-pointer">U</span>
            <span>•</span>
            <span>≡</span>
            <span>↺</span>
            <span>↻</span>
          </div>
        </div>

        {/* ADDITIONAL LINKS */}
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Add Additional Details</h4>

          <p className="text-xs text-gray-500 mb-3">
            Share online profiles if you have them.
          </p>

          <div className="flex flex-wrap gap-2">
            <button className="border px-3 py-1.5 rounded-full text-xs">
              Accomplishments +
            </button>
            <button className="border px-3 py-1.5 rounded-full text-xs">
              Affiliation +
            </button>
            <button className="border px-3 py-1.5 rounded-full text-xs">
              Add +
            </button>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-t pt-5 mt-6">
          <button
            onClick={onBack}
            className="px-5 py-2 border rounded-md text-sm"
          >
            Prev
          </button>

          {/* <button
            onClick={onNext}
            className="px-6 py-2 bg-purple-600 text-white rounded-md text-sm"
          >
            Save & continue
          </button> */}
          <button
            onClick={handleSaveContinue}
            className="bg-purple-600 text-white px-6 py-2 rounded"
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden lg:block bg-white rounded-xl shadow p-5">
        <p className="text-xs text-gray-500 mb-3">
          Live Preview (Sample Layout)
        </p>

        <div className="border rounded-md p-4 text-xs space-y-3">
          <p className="text-sm font-semibold tracking-widest text-center border-b pb-2">
            Janna Gardner
          </p>

          <div>
            <p className="font-semibold">Languages</p>
            {languages.map((l, i) => (
              <p key={i} className="text-gray-500">
                {l.name} {l.level && `- ${l.level}`}
              </p>
            ))}
          </div>

          <div>
            <p className="font-semibold">Hobbies</p>
            <pre className="whitespace-pre-wrap text-gray-500">{hobbies}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
