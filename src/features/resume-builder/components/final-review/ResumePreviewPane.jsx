export default function ResumePreviewPane({ content, color }) {
  return (
    <article className="order-1 flex w-full flex-col items-center lg:order-2 lg:col-span-7 xl:col-span-6">
      <div className="relative min-h-[700px] w-full overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-2xl lg:p-8 xl:min-h-[900px] xl:p-12">
        <div className="mb-6 bg-[#F3F0FF] py-5 text-center font-serif text-2xl font-bold tracking-[0.15em] text-gray-800 lg:py-6 lg:text-3xl xl:py-7 xl:text-[40px]">
          {content.name.toUpperCase()}
        </div>

        <div className="group relative mb-8 rounded-xl border-2 border-[#9333ea] bg-white p-4 shadow-xl lg:p-5">
          <div className="absolute -left-3 top-1/2 hidden h-12 w-6 -translate-y-1/2 cursor-grab items-center justify-center rounded-lg bg-[#9333ea] text-white xl:flex">
            <span className="text-lg">::</span>
          </div>
          <p className="text-[10px] font-medium italic leading-relaxed text-gray-500 lg:text-[11px]">
            <span className="not-italic font-black uppercase tracking-wider text-gray-800">
              {content.experience[0].role}
            </span>{" "}
            {content.summary}
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          <section>
            <h4
              className="mb-4 border-b-2 pb-1 text-[10px] font-black uppercase tracking-[0.2em] lg:text-[12px]"
              style={{ color }}
            >
              Experience
            </h4>
            <div className="space-y-2 lg:space-y-4">
              <p className="text-[10px] font-black uppercase text-gray-800">
                {content.experience[0].title}
              </p>
              <p className="text-[10px] leading-relaxed text-gray-500 lg:text-[11px]">
                {content.experience[0].details}
              </p>
            </div>
          </section>
        </div>
      </div>

      <button className="mt-8 w-full rounded-[24px] bg-[#9333ea] px-10 py-4 text-lg font-black text-white shadow-lg transition-all hover:scale-105 lg:mt-14 lg:w-auto xl:px-24 xl:py-5 xl:text-xl">
        Download Resume
      </button>
    </article>
  );
}
