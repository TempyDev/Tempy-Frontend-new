import { useState } from "react";
import AtsScorePanel from "../components/final-review/AtsScorePanel";
import LayoutControlsPanel from "../components/final-review/LayoutControlsPanel";
import ResumePreviewPane from "../components/final-review/ResumePreviewPane";
import {
  atsIssues,
  resumeReviewContent,
  reviewPalette,
} from "../constants/finalReviewData";

export default function FinalReviewPage() {
  const [color, setColor] = useState("#10B981");
  const [withPhoto, setWithPhoto] = useState(false);
  const [atsScore] = useState(78);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-slate-900">
      <header className="px-4 py-8 text-center lg:py-12 xl:py-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1F2937] lg:text-4xl xl:text-5xl">
          Review and download your <span className="text-[#D946EF]">resume</span>
        </h1>
        <p className="text-sm font-medium text-gray-500 lg:text-base xl:text-lg">
          Make final adjustments, check ATS compatibility, and download your
          resume.
        </p>
      </header>

      <main className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-6 px-4 pb-24 lg:grid-cols-10 lg:px-6 xl:grid-cols-12 xl:gap-10 xl:px-10">
        <LayoutControlsPanel
          palette={reviewPalette}
          selectedColor={color}
          onColorChange={setColor}
          withPhoto={withPhoto}
          onPhotoOptionChange={setWithPhoto}
        />

        <ResumePreviewPane content={resumeReviewContent} color={color} />

        <AtsScorePanel atsScore={atsScore} color={color} issues={atsIssues} />
      </main>
    </div>
  );
}
