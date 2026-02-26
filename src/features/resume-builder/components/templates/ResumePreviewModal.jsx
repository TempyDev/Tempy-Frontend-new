import { Link } from "react-router-dom";

export default function ResumePreviewModal({ template, palette, data, onClose }) {
  if (!template) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-xl text-gray-400 hover:text-gray-600"
          aria-label="Close preview"
        >
          x
        </button>

        <div className="flex flex-1 justify-center overflow-y-auto bg-gray-50 p-10">
          <div className="min-h-[800px] w-full max-w-[600px] bg-white p-12 text-[12px] shadow-lg">
            <div
              className="mb-4 py-6 text-center text-2xl font-bold tracking-[0.2em] text-gray-800 transition-colors"
              style={{ backgroundColor: palette.light }}
            >
              {data.name.toUpperCase()}
            </div>

            <p className="mb-10 text-center text-gray-400">{data.contact}</p>

            <h2 className="mb-2 border-b font-bold" style={{ color: palette.theme }}>
              SUMMARY
            </h2>
            <p className="mb-8 text-gray-600">{data.summary}</p>

            <h2 className="mb-2 border-b font-bold" style={{ color: palette.theme }}>
              EXPERIENCE
            </h2>
            <p className="font-bold text-gray-800">{data.experience.role}</p>
            <p className="text-gray-500">{data.experience.company}</p>
          </div>
        </div>

        <div className="flex justify-end gap-4 border-t border-gray-100 bg-white p-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-8 py-3 text-sm font-bold transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>

          <Link
            to="/final-review"
            className="flex items-center justify-center rounded-xl bg-[#8B5CF6] px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#7C3AED]"
          >
            Use This Template
          </Link>
        </div>
      </div>
    </div>
  );
}
