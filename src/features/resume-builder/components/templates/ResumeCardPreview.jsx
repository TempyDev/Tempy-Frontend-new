export default function ResumeCardPreview({ data, theme }) {
  return (
    <div className="h-full select-none overflow-hidden p-4 font-sans text-[7px] leading-[1.4] text-gray-500">
      <div
        className="mb-2 py-1.5 text-center text-[10px] font-bold tracking-widest text-gray-800 transition-colors duration-300"
        style={{ backgroundColor: theme.light }}
      >
        {data.name.toUpperCase()}
      </div>
      <div className="mb-4 border-b border-gray-100 pb-1 text-center text-[5px]">
        {data.contact}
      </div>

      <div className="mb-3">
        <p className="mb-0.5 font-bold text-gray-700" style={{ color: theme.theme }}>
          Summary
        </p>
        <p className="line-clamp-3">{data.summary}</p>
      </div>

      <div className="mb-3">
        <div
          className="mb-1 inline-block px-1 font-bold text-gray-700"
          style={{ backgroundColor: theme.light }}
        >
          Experience
        </div>
        <p className="text-[6px] font-bold text-gray-600">{data.experience.date}</p>
        <p className="text-[6px] font-bold transition-colors duration-300" style={{ color: theme.theme }}>
          {data.experience.role}
        </p>
        <div className="mt-1 h-1 w-full rounded bg-gray-100" />
        <div className="mt-1 h-1 w-5/6 rounded bg-gray-100" />
      </div>
    </div>
  );
}
