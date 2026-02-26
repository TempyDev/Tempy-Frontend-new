export default function AtsScorePanel({ atsScore, color, issues }) {
  return (
    <aside className="order-3 w-full lg:col-span-10 xl:col-span-3">
      <section className="flex flex-col items-center rounded-[32px] border-2 border-purple-50 bg-white p-6 shadow-sm xl:sticky xl:top-10 lg:p-10">
        <h3 className="mb-8 text-2xl font-black tracking-tight text-gray-900">
          ATS Score
        </h3>

        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-16 xl:flex-col xl:gap-8">
          <div className="relative flex h-40 w-40 items-center justify-center lg:h-48 lg:w-48 xl:h-52 xl:w-52">
            <svg className="h-full w-full -rotate-90 transform">
              <circle
                cx="50%"
                cy="50%"
                r="42%"
                stroke="#F3F4F6"
                strokeWidth="12"
                fill="transparent"
              />
              <circle
                cx="50%"
                cy="50%"
                r="42%"
                stroke={color}
                strokeWidth="12"
                fill="transparent"
                strokeDasharray="264"
                strokeDashoffset={264 - (264 * atsScore) / 100}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute flex flex-col items-center text-center">
              <p className="mb-1 text-[8px] font-black uppercase tracking-[0.2em] text-gray-300 lg:text-[10px]">
                Your Score
              </p>
              <p className="text-3xl font-black tracking-tighter text-gray-800 lg:text-4xl xl:text-5xl">
                {atsScore}
                <span className="text-lg font-bold text-gray-300">/100</span>
              </p>
            </div>
          </div>

          <div className="w-full flex-1 space-y-4">
            <div className="mb-6 rounded-full bg-[#4B5563] py-2 text-center text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-lg">
              {issues.length} Issues Found
            </div>

            {issues.map((issue) => (
              <div
                key={issue.id}
                className="flex items-center justify-between rounded-2xl border border-red-50 bg-[#FFF9F9] p-4 lg:p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-orange-400">!</span>
                  <span className="text-xs font-black text-gray-700">{issue.label}</span>
                </div>
                <button className="border-b-2 border-pink-100 text-[10px] font-black uppercase text-pink-500">
                  Fix
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}
