/* eslint-disable no-unused-vars */
import { useState } from "react";

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  return {
    currentStep,
    currentComponent: steps[currentStep],
  }

}