import { Link } from "react-router-dom";
import ResumeCardPreview from "./ResumeCardPreview";

export default function ResumeCard({
  resume,
  palette,
  palettes,
  onPaletteChange,
  onPreview,
  previewData,
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="aspect-[1/1.4] bg-white">
        <ResumeCardPreview data={previewData} theme={palette} />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 p-4 opacity-0 transition-all group-hover:opacity-100">
        <button
          onClick={() => onPreview(resume)}
          className="translate-y-2 transform rounded-lg bg-white px-8 py-2 text-sm font-bold text-black shadow-lg transition-transform group-hover:translate-y-0"
        >
          Preview
        </button>
        <Link
          to="/final-review"
          className="delay-75 flex w-full max-w-[180px] translate-y-2 transform items-center justify-center rounded-lg bg-[#8B5CF6] px-6 py-2 text-sm font-bold text-white shadow-lg transition-transform group-hover:translate-y-0"
        >
          Select Template
        </Link>
      </div>

      <div className="flex items-center gap-2 border-t border-gray-50 bg-white p-3">
        {palettes.map((item) => (
          <button
            key={item.id}
            onClick={() => onPaletteChange(resume.id, item)}
            className={`h-5 w-5 rounded-full ${item.bg} transition-all duration-200 hover:scale-125 ${
              palette.id === item.id
                ? "scale-110 ring-2 ring-[#8B5CF6] ring-offset-2"
                : "opacity-80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
