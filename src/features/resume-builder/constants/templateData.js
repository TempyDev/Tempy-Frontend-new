export const TEMPLATE_TABS = [
  "All",
  "Recommended",
  "One column",
  "Two column",
  "ATS friendly",
  "With photo",
  "Without photo",
];

export const INITIAL_TEMPLATE_COUNT = 8;

export const COLOR_PALETTES = [
  { id: "green", bg: "bg-[#10B981]", theme: "#10B981", light: "#ECFDF5" },
  { id: "pink", bg: "bg-[#FFE4E6]", theme: "#F43F5E", light: "#FFF1F2" },
  { id: "purple", bg: "bg-[#A855F7]", theme: "#8B5CF6", light: "#F5F3FF" },
  { id: "magenta", bg: "bg-[#EC4899]", theme: "#DB2777", light: "#FDF2F8" },
  { id: "gray", bg: "bg-[#4B5563]", theme: "#374151", light: "#F9FAFB" },
  { id: "black", bg: "bg-[#1F2937]", theme: "#111827", light: "#F3F4F6" },
];

export const resumePreviewData = {
  name: "Janna Gardner",
  contact:
    "4567 Main Street, Chicago, Illinois 98052 | (716) 555-0100 | janna@example.com",
  summary:
    "Human Resources Generalist with 6+ years of experience assisting with staffing needs. Proven track record of using excellent communication skills.",
  experience: {
    date: "20XX - PRESENT",
    role: "Human Resources Generalist",
    company: "Lamna Healthcare Company",
  },
};

export const resumeTemplates = Array.from({ length: 24 }).map((_, index) => ({
  id: index + 1,
  category: TEMPLATE_TABS[(index % (TEMPLATE_TABS.length - 1)) + 1],
}));
