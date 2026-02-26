import { useMemo, useState } from "react";
import ResumeCard from "../components/templates/ResumeCard";
import ResumePreviewModal from "../components/templates/ResumePreviewModal";
import TemplateTabs from "../components/templates/TemplateTabs";
import {
  COLOR_PALETTES,
  INITIAL_TEMPLATE_COUNT,
  resumePreviewData,
  resumeTemplates,
  TEMPLATE_TABS,
} from "../constants/templateData";

export default function ResumeTemplatesPage() {
  const [activeTab, setActiveTab] = useState("Recommended");
  const [visibleCount, setVisibleCount] = useState(INITIAL_TEMPLATE_COUNT);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [selectedPalettes, setSelectedPalettes] = useState({});

  const filteredResumes = useMemo(() => {
    const filtered =
      activeTab === "All"
        ? resumeTemplates
        : resumeTemplates.filter((resume) => resume.category === activeTab);

    return filtered.slice(0, visibleCount);
  }, [activeTab, visibleCount]);

  const handlePaletteChange = (resumeId, palette) => {
    setSelectedPalettes((prev) => ({ ...prev, [resumeId]: palette }));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-4 md:p-8">
      <TemplateTabs
        tabs={TEMPLATE_TABS}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setVisibleCount(INITIAL_TEMPLATE_COUNT);
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredResumes.map((resume) => {
          const activePalette = selectedPalettes[resume.id] || COLOR_PALETTES[0];

          return (
            <ResumeCard
              key={resume.id}
              resume={resume}
              palette={activePalette}
              palettes={COLOR_PALETTES}
              previewData={resumePreviewData}
              onPaletteChange={handlePaletteChange}
              onPreview={setPreviewTemplate}
            />
          );
        })}
      </div>

      <div className="flex justify-center pb-10 pt-12">
        <button
          onClick={() => setVisibleCount((prev) => prev + 4)}
          className="rounded-xl bg-[#8B5CF6] px-10 py-3 font-bold text-white shadow-md transition-colors hover:bg-[#7C3AED]"
        >
          Load More
        </button>
      </div>

      <ResumePreviewModal
        template={previewTemplate}
        palette={
          previewTemplate
            ? selectedPalettes[previewTemplate.id] || COLOR_PALETTES[0]
            : COLOR_PALETTES[0]
        }
        data={resumePreviewData}
        onClose={() => setPreviewTemplate(null)}
      />
    </div>
  );
}
