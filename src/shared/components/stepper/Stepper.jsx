const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-between mb-8 overflow-x-auto">
      {steps.map((label, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div key={step} className="flex items-center flex-shrink-0">
            
            {/* Circle with Number */}
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold
                ${
                  isCompleted || isActive
                    ? "bg-[#0cb16d] text-white"
                    : "bg-gray-200 text-gray-600"
                }
              `}
            >
              {step}
            </div>

            {/* Label */}
            <span
              className={`ml-2 text-sm whitespace-nowrap
                ${isActive ? "text-[#0cb16d] font-semibold" : "text-gray-400"}
              `}
            >
              {label}
            </span>

            {/* Line */}
            {step !== steps.length && (
              <div className="w-10 h-px bg-gray-300 mx-4" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
