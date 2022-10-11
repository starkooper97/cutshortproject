import "./WorkspaceComponent.css";

import React from "react";

function PageOne() {
  return (
    <div className="pageone">
      <h1 className="pageone_heading">Let's set up a home for all your work</h1>
      <p className="pageone_para">
        You can always create another workspace later.
      </p>

      <form className="pageone_form">
        <label className="pageone_label">Workspace Name</label>
        <br />
        <input placeholder="Eden" size={47}></input>
        <br />
        <br />
        <label>
          Workspace URL <span className="blur">(optional)</span>
        </label>
        <br />
        <div className="secondInput_field">
          <div className="second_input">www.eden.com/</div>
          <input
            className="second"
            placeholder="Example"
            size={30}
            required={false}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default PageOne;
