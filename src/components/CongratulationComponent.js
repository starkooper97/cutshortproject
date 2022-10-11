import "./CongratulationComponent.css";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

function PageFour() {
  return (
    <div className="pagefour">
      <CheckIcon
        className="checkicon"
        sx={{ fontSize: "24px", padding: "20px" }}
      />

      <h1 className="pagefour_heading">Congratulations, Eren!</h1>
      <p className="pagefour_para">
        You have completed onboarding, you can start using the Eden!
      </p>
    </div>
  );
}

export default PageFour;
