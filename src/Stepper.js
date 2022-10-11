import * as React from "react";
import Box from "@mui/material/Box";
import "./Stepper.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WelcomeComponent from "./WelcomeComponent";
import WorkspaceComponent from "./WorkspaceComponent";
import PlanningComponent from "./PlanningComponent";
import CongratulationComponent from "./CongratulationComponent";

const steps = [
  //   "Select campaign settings",
  //   "Create an ad group",
  //   "Create an ad",
  1, 2, 3, 4,
];

export default function Stepperh() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  function getStepContent(steps) {
    switch (steps) {
      case 1:
        return <WelcomeComponent />;
      case 2:
        return <WorkspaceComponent />;
      case 3:
        return <PlanningComponent />;
      case 4:
        return <CongratulationComponent />;
      default:
        break;
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper className="stepper_head" activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <React.Fragment>
        <Typography>{getStepContent(activeStep + 1)}</Typography>
        <Box className="boxx">
          <button className="stepper_button" onClick={handleNext}>
            {activeStep === steps.length - 1
              ? "Check Eden"
              : "Create Workspace"}
          </button>
        </Box>
      </React.Fragment>
    </Box>
  );
}
