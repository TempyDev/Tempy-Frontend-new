import React, { useState } from "react";

export default function ResumeReviewFinalScreen() {
  const [color, setColor] = useState("#7c3aed");
  const [withPhoto, setWithPhoto] = useState(false); // default matches design (Without Photo)
  const [sections, setSections] = useState([
    "Experience",
    "Skills",
    "Education",
    "Activities",
  ]);
  const [atsScore] = useState(78);
  const [atsIssues] = useState([
    "Education Details",
    "Education Details",
    "Education Details",
    "Experience Details",
    "Skills Keywords",
  ]);

  const addSection = () => {
    const name = prompt("Enter section name");
    if (name) setSections([...sections, name]);
  };

  const downloadResume = () => {
    alert("Resume Downloaded Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-rose-100 p-10 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Review & download your <span style={{ color }}>resume</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Make final adjustments, check ATS compatibility, and download your
          resume.
        </p>
      </div>

      {/* Main Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="space-y-4">
          {/* Layout Card */}
          <div className="rounded-2xl shadow-lg bg-white p-4 space-y-4">
            <h3 className="font-semibold">Layout</h3>

            {/* Color Picker */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Change Color</p>
              <div className="flex gap-2">
                {["#7c3aed", "#ec4899", "#3b82f6", "#111827"].map(
                  (c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className="w-6 h-6 rounded-full border"
                      style={{ background: c }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Photo options */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Photo</p>
              <div className="flex items-center gap-6 text-sm">
                {["With Photo", "Without Photo"].map((label) => {
                  const isActive =
                    (withPhoto && label === "With Photo") ||
                    (!withPhoto && label === "Without Photo");

                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setWithPhoto(label === "With Photo")}
                      className={`flex items-center gap-2 ${
                        isActive ? "text-purple-600" : "text-gray-500"
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full border ${
                          isActive ? "bg-purple-600 border-purple-600" : ""
                        }`}
                      />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="rounded-2xl shadow-lg bg-white p-4 space-y-4">
            <h3 className="font-semibold">Sections</h3>

            <div className="space-y-2">
              {sections.map((sec, i) => (
                <div
                  key={i}
                  className="px-3 py-2 bg-gray-100 rounded-xl text-sm"
                >
                  {sec}
                </div>
              ))}
            </div>

            <button
              onClick={addSection}
              className="w-full border rounded-xl py-2 hover:bg-gray-50"
            >
              + Add New Section
            </button>
          </div>

          {/* Design */}
          <div className="rounded-2xl shadow-lg bg-white p-4">
            <button
              className="w-full text-white rounded-xl py-2"
              style={{ background: color }}
            >
              Choose Template
            </button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="rounded-2xl shadow-xl bg-white p-6">
          <div className="border rounded-xl p-6 bg-white min-h-[500px]">
            <h2
              className="text-xl font-bold text-center tracking-widest mb-4"
              style={{ color }}
            >
              Janna Gardner
            </h2>

            {withPhoto && (
              <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4" />
            )}

            {sections.map((sec, i) => (
              <div key={i} className="mb-4">
                <h4
                  className="font-semibold border-b pb-1 mb-2"
                  style={{ color }}
                >
                  {sec}
                </h4>
                <p className="text-sm text-gray-600">
                  Sample content for {sec} section...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ATS Score */}
        <div className="rounded-2xl shadow-lg border-2 border-purple-400 bg-white p-6 space-y-6">
          <h3 className="font-semibold text-center">Ats Score</h3>

          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-40 h-40 mb-3">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(${color} 0 ${atsScore}%, #e5e7eb ${atsScore}% 100%)`,
                }}
              />
              <div className="relative flex flex-col items-center justify-center w-28 h-28 bg-white rounded-full shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Your Score</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {atsScore}
                  <span className="text-sm text-gray-500">/100</span>
                </p>
              </div>
            </div>

            <button className="px-4 py-1 text-xs font-medium text-white bg-gray-900 rounded-full">
              {atsIssues.length} Issues
            </button>
          </div>

          <div className="space-y-3 text-sm">
            {atsIssues.map((issue, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-yellow-50 p-3 rounded-xl"
              >
                <span className="flex items-center gap-2 text-gray-700">
                  <span className="text-yellow-500">⚠</span>
                  <span>{issue}</span>
                </span>
                <button className="text-pink-500 font-medium text-xs">
                  Fix Issue
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-10">
        <button
          onClick={downloadResume}
          className="px-10 py-4 text-white text-lg rounded-2xl shadow-xl"
          style={{ background: color }}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
