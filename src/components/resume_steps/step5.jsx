import { useState } from "react";

const suggestedSkills = [
  "Adobe Creative Suite",
  "Figma",
  "UI",
  "UX",
  "Visual Designing",
  "Graphic Designing",
];

const aiRecommended = [
  "UX Strategy",
  "Design Systems",
  "Usability Testing",
];

const Step5 = ({ onNext, onBack }) => {
  const [skills, setSkills] = useState([
    "Prototyping",
    "User Centric Designing",
    "User Experience Research",
    "Interaction Design",
    "Wireframing",
  ]);

  const [showAI, setShowAI] = useState(true);

  const toggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT BLOCK */}
          <div>
            {/* SKILL LIST */}
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            {/* EDITOR TOOLBAR */}
            <div className="flex items-center gap-4 border rounded-md px-3 py-2 text-gray-500 text-sm mb-2">
              <span className="font-bold cursor-pointer">B</span>
              <span className="italic cursor-pointer">I</span>
              <span className="underline cursor-pointer">U</span>
              <span className="cursor-pointer">•</span>
              <span className="cursor-pointer">≡</span>
              <span className="cursor-pointer">↺</span>
              <span className="cursor-pointer">↻</span>
            </div>

            <textarea
              rows={4}
              className="w-full border rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-purple-400"
              placeholder="Describe your skills briefly"
            />
          </div>

          {/* RIGHT BLOCK */}
          <div>
            <label className="text-xs font-medium mb-1 block">
              Search to add skills
            </label>

            <input
              placeholder="e.g. UI / UX Designer"
              className="border rounded-md p-2 text-sm w-full mb-4"
            />

            {/* SUGGESTED SKILLS */}
            <div className="border rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-purple-600 mb-2">
                ✨ Suggested skills
              </p>

              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill, i) => (
                  <button
                    key={i}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1 rounded-full text-xs border transition
                      ${
                        skills.includes(skill)
                          ? "bg-purple-600 text-white border-purple-600"
                          : "bg-white text-gray-700 hover:border-purple-400"
                      }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* AI RECOMMENDATION */}
            <button
              onClick={() => setShowAI(!showAI)}
              className="text-xs font-medium text-purple-600 mb-2"
            >
              ✨ AI recommendations
            </button>

            {showAI && (
              <div className="border rounded-lg p-3 bg-purple-50">
                <p className="text-xs font-semibold text-purple-700 mb-2">
                  AI Recommended
                </p>

                <div className="flex flex-wrap gap-2">
                  {aiRecommended.map((skill, i) => (
                    <button
                      key={i}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1 rounded-full text-xs border transition
                        ${
                          skills.includes(skill)
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-white hover:border-purple-400"
                        }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center pt-6 mt-6 border-t">
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
          <span className="text-[10px]">
            (Note: Design can be changed later)
          </span>
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

export default Step5;
