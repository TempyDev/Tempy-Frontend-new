import AdditionalDetailsStep from "./steps/AdditionalDetailsStep";
import EducationStep from "./steps/EducationStep";
import ExperienceStep from "./steps/ExperienceStep";
import PersonalDetailsStep from "./steps/PersonalDetailsStep";
import ProfessionalSummaryStep from "./steps/ProfessionalSummaryStep";
import SkillsStep from "./steps/SkillsStep";

export default function BuilderStepContent({ currentStep, setCurrentStep }) {
  if (currentStep === 1) {
    return <PersonalDetailsStep onNext={() => setCurrentStep(2)} />;
  }

  if (currentStep === 2) {
    return (
      <ProfessionalSummaryStep
        onBack={() => setCurrentStep(1)}
        onNext={() => setCurrentStep(3)}
      />
    );
  }

  if (currentStep === 3) {
    return (
      <ExperienceStep onBack={() => setCurrentStep(2)} onNext={() => setCurrentStep(4)} />
    );
  }

  if (currentStep === 4) {
    return (
      <EducationStep onBack={() => setCurrentStep(3)} onNext={() => setCurrentStep(5)} />
    );
  }

  if (currentStep === 5) {
    return <SkillsStep onBack={() => setCurrentStep(4)} onNext={() => setCurrentStep(6)} />;
  }

  if (currentStep === 6) {
    return <AdditionalDetailsStep onBack={() => setCurrentStep(5)} />;
  }

  return null;
}
