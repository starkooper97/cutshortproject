import "./WelcomeComponent.css";

import React from "react";

function PageTwo() {
  return (
    <div className="pagetwo">
      <h1 className="pagetwo_heading">Welcome! First things first...</h1>
      <p className="pagetwo_para">You can always change them later.</p>

      <form className="pagetwo_form">
        <label>Full Name</label>
        <br />
        <input placeholder="Steve Jobs" size={47}></input>
        <br />
        <br />
        <label>Display Name</label>
        <br />
        <div className="secondInput_field">
          {/* <div className="second_input">www.eden.com/</div> */}
          <input
            className="second"
            placeholder="Steve"
            size={47}
            // required={false}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default PageTwo;
