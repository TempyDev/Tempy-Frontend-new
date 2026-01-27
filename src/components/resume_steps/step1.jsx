const Step1 = ({ onNext }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT FORM CARD */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-6">Personal Details</h2>

        {/* FORM CONTENT */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="border rounded-md p-2 text-sm md:col-span-3"
              placeholder="Full name"
            />

            <select className="border rounded-md p-2 text-sm">
              <option>Select country</option>
            </select>

            <input
              className="border rounded-md p-2 text-sm"
              placeholder="City"
            />

            <input
              className="border rounded-md p-2 text-sm"
              placeholder="Pincode (optional)"
            />

            <input
              className="border rounded-md p-2 text-sm md:col-span-2"
              placeholder="Email"
            />

            <input
              className="border rounded-md p-2 text-sm"
              placeholder="Phone number"
            />
          </div>
        </div>

        {/* FOOTER BUTTON (NO OVERLAP) */}
        <div className="flex justify-end pt-6 border-t mt-6">
          <button
            onClick={onNext}
            className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700"
          >
            Save & continue
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden lg:block rounded-xl px-5">
        <p className="text-center font-semibold text-xs text-gray-900 mb-1">
          Live Preview (Sample Layout)
        </p>
        <p className="text-center text-xs text-gray-500 mb-3">
          (Note: Design can be changed later)
        </p>

        <div className="border rounded-md p-3 bg-gray-50">
          <div className="h-[420px] bg-white rounded shadow flex items-center justify-center text-gray-400 text-xs">
            Resume Preview
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
