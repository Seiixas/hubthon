import { WhatsApp } from "@mui/icons-material";
import { Step, StepButton, Stepper } from "@mui/material";
import { useState } from "react";

interface TMyStep {
  step: number;
}

export const MyStep = ({ step }: TMyStep) => {
  const steps = [
    "Criar empresa",
    "Entrar com a conta do Google",
    "Vincular locais",
  ];
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

  return (
    <>
      <Stepper nonLinear activeStep={step}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={() => {}}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </>
  );
};
