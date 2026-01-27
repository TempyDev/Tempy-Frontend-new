import { useState } from "react";
import Stepper from "../../components/stepper";
import Step1 from "../../components/resume_steps/step1";
import Step2 from "../../components/resume_steps/step2";
import Step3 from "../../components/resume_steps/step3";

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

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen px-6 py-4 bg-gradient-to-br from-[#faf7f5] to-[#f6f2ef]">
      <div className="max-w-7xl mx-auto">
        <Stepper currentStep={currentStep} steps={steps} />

        {currentStep === 1 && <Step1 onNext={() => setCurrentStep(2)} />}

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
      </div>
    </div>
  );
};

export default ResumeBuilder;
