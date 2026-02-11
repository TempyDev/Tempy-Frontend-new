const Step1 = ({ onNext }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10">

      {/* LEFT FORM CARD */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-6">Personal Details</h2>

        {/* FORM CONTENT */}
       <div className="flex-1 space-y-6">
  {/* Row 1: Full Name */}
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-gray-700">Full name</label>
    <input
      className="w-full border border-gray-200 bg-[#F9FAFB] rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
      placeholder="Enter Full name"
    />
  </div>

  {/* Row 2: Country, City, Pincode */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col gap-1.5 md:col-span-1">
      <label className="text-sm font-medium text-gray-700">Country</label>
      <select className="w-full border border-gray-200 bg-[#F9FAFB] rounded-lg p-3 text-sm appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_10px_center] bg-no-repeat">
        <option>Select country</option>
      </select>
    </div>
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">City</label>
      <input
        className="w-full border border-gray-200 bg-[#F9FAFB] rounded-lg p-3 text-sm"
        placeholder="Enter city"
      />
    </div>
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">Pincode (optional)</label>
      <input
        className="w-full border border-gray-200 bg-[#F9FAFB] rounded-lg p-3 text-sm"
        placeholder="Enter Pincode"
      />
    </div>
  </div>

  {/* Row 3: Email and Phone */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col gap-1.5 md:col-span-2">
      <label className="text-sm font-medium text-gray-700">Email</label>
      <input
        className="w-full border border-gray-200 bg-[#F9FAFB] rounded-lg p-3 text-sm"
        placeholder="Enter email"
      />
    </div>
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">Phone number</label>
      <input
        className="w-full border border-gray-200 bg-[#F9FAFB] rounded-lg p-3 text-sm"
        placeholder="Enter phone number"
      />
    </div>
  </div>

  {/* Row 4: GitHub */}
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-gray-700">GitHub</label>
    <div className="relative">
      <input
        className="w-full border border-gray-200 bg-[#F9FAFB] rounded-lg p-3 text-sm pr-10"
        placeholder="github.com/tempy"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
      </button>
    </div>
  </div>
</div>

        {/* FOOTER BUTTON (NO OVERLAP) */}
        <div className="flex justify-end pt-6 border-t mt-6">
          <button
            onClick={onNext}
            className="px-10 py-2.5 rounded-lg bg-[#9333ea] text-white text-sm font-semibold shadow-md hover:bg-purple-700"
          >
            Save & continue
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
     {/* RIGHT PREVIEW */}
<div className="hidden lg:block">
  <div className="sticky top-10">
    <div className="text-center mb-6">
      <p className="font-semibold text-[13px] text-gray-900">
        Live Preview (Sample Layout)
      </p>
      <p className="text-[11px] text-gray-500">
        (Note: Design can be changed later)
      </p>
    </div>

    {/* RESUME PAPER WRAPPER */}
    <div className="bg-[#FAF7F3] border border-gray-100 rounded-xl p-8 flex justify-center items-start min-h-[600px] shadow-sm">
      <div className="w-full bg-white shadow-2xl rounded-sm aspect-[1/1.41] p-8 overflow-hidden origin-top scale-95 transition-transform">
        
        {/* RESUME HEADER CONTENT (MATCHING IMAGE) */}
        <div className="text-center border-b pb-4 mb-4">
          <h1 className="text-2xl font-serif text-gray-800 tracking-wide uppercase">Janna Gardner</h1>
          <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-tighter">
            HR & Recruitment Specialist • Chicago, Illinois • (312) 555-0198 • janna@example.com
          </p>
        </div>

        {/* RESUME BODY MOCKUP */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-[10px] font-bold text-gray-800 border-b border-gray-100 pb-0.5 uppercase tracking-wider">Experience</h2>
            <div className="pt-1">
              <div className="flex justify-between items-baseline">
                <span className="text-[9px] font-bold text-gray-700">Senior HR Specialist | Janna Healthcare Company</span>
                <span className="text-[8px] text-gray-500 italic">2021 — PRESENT</span>
              </div>
              <p className="text-[8px] leading-relaxed text-gray-600 mt-1">
                Managed full-cycle recruitment for over 500 employees, ensuring compliance with state and federal regulations.
                Implemented a new applicant tracking system that reduced time-to-hire by 15%.
              </p>
            </div>
          </div>
          
          <div className="space-y-1">
            <h2 className="text-[10px] font-bold text-gray-800 border-b border-gray-100 pb-0.5 uppercase tracking-wider">Skills</h2>
            <p className="text-[8px] leading-relaxed text-gray-600 pt-1">
              Human Resources Management • Conflict Resolution • Strategic Planning • Public Speaking • Data Analytics
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Step1;
