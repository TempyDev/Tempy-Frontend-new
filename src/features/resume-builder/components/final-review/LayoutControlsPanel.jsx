export default function LayoutControlsPanel({
  palette,
  selectedColor,
  onColorChange,
  withPhoto,
  onPhotoOptionChange,
}) {
  return (
    <aside className="order-2 space-y-6 lg:order-1 lg:col-span-3">
      <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm xl:p-8">
        <h3 className="mb-6 text-xl font-bold text-gray-800">Layout</h3>

        <div className="mb-8">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">
            Change Color
          </p>
          <div className="flex flex-wrap gap-3">
            {palette.map((item) => (
              <button
                key={item.hex}
                onClick={() => onColorChange(item.hex)}
                className={`h-6 w-6 rounded-full border-2 transition-all ${
                  selectedColor === item.hex
                    ? "scale-110 ring-2 ring-gray-200 ring-offset-2"
                    : "border-white shadow-sm"
                }`}
                style={{ background: item.hex }}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">
            Photo
          </p>
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-6">
            {["With Photo", "Without Photo"].map((label) => {
              const isActive =
                (withPhoto && label === "With Photo") ||
                (!withPhoto && label === "Without Photo");

              return (
                <label key={label} className="group flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    className="hidden"
                    checked={isActive}
                    onChange={() => onPhotoOptionChange(label === "With Photo")}
                  />
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all ${
                      isActive ? "border-[#9333ea]" : "border-gray-300"
                    }`}
                  >
                    {isActive && <div className="h-2 w-2 rounded-full bg-[#9333ea]" />}
                  </div>
                  <span
                    className={`text-[12px] font-bold xl:text-[13px] ${
                      isActive ? "text-[#9333ea]" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm xl:p-8">
        <h3 className="mb-6 text-xl font-bold text-gray-800">Sections</h3>
        <button className="flex w-full items-center justify-between rounded-full border border-gray-100 bg-[#F9FAFB] px-6 py-3 text-[15px] font-medium text-gray-400 hover:border-purple-300 xl:py-4">
          Add New Section <span className="text-xl">+</span>
        </button>
      </div>
    </aside>
  );
}
