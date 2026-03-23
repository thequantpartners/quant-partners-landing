import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Step1Initial } from "./steps/Step1Initial";
import { Step2Problem } from "./steps/Step2Problem";
import { Step3Experience } from "./steps/Step3Experience";
import { Step4Commitment } from "./steps/Step4Commitment";
import { Qualified } from "./outcomes/Qualified";
import { Disqualified } from "./outcomes/Disqualified";

export interface FormData {
  // Step 1
  name: string;
  email: string;
  companyType: string;
  inventoryUnits: string;
  priceRange: string;
  
  // Step 2
  unsoldTime: string;
  currentChannels: string;
  
  // Step 3
  failureExperience: string;
  marketingInvestment: string;

  // Step 4
  decisionMakerInfo: string;
  executionSpeed: string;
}

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  companyType: "",
  inventoryUnits: "",
  priceRange: "",
  unsoldTime: "",
  currentChannels: "",
  failureExperience: "",
  marketingInvestment: "",
  decisionMakerInfo: "",
  executionSpeed: "",
};

const TOTAL_STEPS = 4;

export const SchedulingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [score, setScore] = useState(0);
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const addScore = (points: number) => {
    setScore((prev) => prev + points);
  };

  const disqualify = () => {
    setIsDisqualified(true);
  };

  const handleNext = () => {
    if (isDisqualified) {
      setIsFinished(true);
      return;
    }
    
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  if (isFinished) {
    // Determine final outcome
    // The threshold can be anything, e.g., > 10 points
    const passed = !isDisqualified && score >= 10;
    
    return passed ? <Qualified /> : <Disqualified />;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Initial
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            addScore={addScore}
            disqualify={disqualify}
          />
        );
      case 2:
        return (
          <Step2Problem
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
            addScore={addScore}
          />
        );
      case 3:
        return (
          <Step3Experience
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
            addScore={addScore}
          />
        );
      case 4:
        return (
          <Step4Commitment
            data={formData}
            updateData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
            addScore={addScore}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-border rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="mb-8">
          <div className="flex justify-between text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
            <span>Paso {currentStep} de {TOTAL_STEPS}</span>
            <span>{Math.round(progressPercentage)}% Completado</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-secondary" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
