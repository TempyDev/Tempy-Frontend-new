import { useState } from "react";
import BuilderHeader from "../components/BuilderHeader";
import BuilderStepContent from "../components/BuilderStepContent";
import { builderSteps } from "../constants/builderSteps";
import Stepper from "../../../shared/components/stepper/Stepper";

export default function ResumeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <BuilderHeader />
        <Stepper currentStep={currentStep} steps={builderSteps} />
        <BuilderStepContent currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </div>
  );
}
