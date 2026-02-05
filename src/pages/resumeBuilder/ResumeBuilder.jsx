// import { useState } from "react";
// import Stepper from "../../components/stepper";
// import Step1 from "../../components/resume_steps/step1";
// import Step2 from "../../components/resume_steps/step2";
// import Step3 from "../../components/resume_steps/step3";

// const steps = [
//   "Personal Details",
//   "Professional Summary",
//   "Experience",
//   "Education",
//   "Skills",
//   "Additional Sections",
// ];

// const ResumeBuilder = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     setCurrentStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   return (
//     <div className="min-h-screen px-6 py-4 bg-gradient-to-br from-[#faf7f5] to-[#f6f2ef]">
//       <div className="max-w-7xl mx-auto">
//         <Stepper currentStep={currentStep} steps={steps} />

//         {currentStep === 1 && <Step1 onNext={() => setCurrentStep(2)} />}

//         {currentStep === 2 && (
//           <Step2
//             onBack={() => setCurrentStep(1)}
//             onNext={() => setCurrentStep(3)}
//           />
//         )}

//         {currentStep === 3 && (
//           <Step3
//             onBack={() => setCurrentStep(2)}
//             onNext={() => setCurrentStep(4)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;
import { useState } from "react";
import Stepper from "../../components/stepper";
import Step1 from "../../components/resume_steps/step1";
import Step2 from "../../components/resume_steps/step2";
import Step3 from "../../components/resume_steps/step3";
import Step4 from "../../components/resume_steps/step4";
import Step5 from "../../components/resume_steps/step5";

const steps = [
  "Personal Details",
  "Professional Summary",
  "Experience",
  "Education",
  "Skills",
  "Additional Sections",
];

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl py-16 pt-6 m-auto">
          <h1 className=" text-centertext-4xl md:text-5xl font-bold text-slate-900 leading-tight text-center">Create <span className="relative inline-flex text-[#DA29B8]">Resume</span></h1>
          <p className="mt-4 text-slate-600 text-center">Add your details and preview your resume as you go.</p>
        </div>
        <Stepper currentStep={currentStep} steps={steps} />

        {currentStep === 1 && (
          <Step1 onNext={() => setCurrentStep(2)} />
        )}

        {currentStep === 2 && (
          <Step2
            onBack={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && (
          <Step3
            onBack={() => setCurrentStep(2)}
            onNext={() => setCurrentStep(4)}
          />
        )}
        {currentStep === 4 && (
          <Step4
            onBack={() => setCurrentStep(3)}
            onNext={() => setCurrentStep(5)}
          />
        )}
        {currentStep === 5 && (
          <Step5
            onBack={() => setCurrentStep(4)}
            onNext={() => setCurrentStep(6)}
          />
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
