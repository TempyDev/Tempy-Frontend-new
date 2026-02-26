export default function TemplateTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="mb-10 flex justify-center">
      <div className="no-scrollbar flex gap-1 overflow-x-auto rounded-full border border-gray-100 bg-white p-1.5 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#8B5CF6] text-white shadow-md"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
