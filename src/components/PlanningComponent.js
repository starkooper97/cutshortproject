import "./PlanningComponent.css";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import React from "react";

function PageTwo() {
  return (
    <div className="pagethree">
      <h1 className="pagethree_heading">How are you planning to use Eden?</h1>
      <p className="pagethree_para">
        We'll streamline your setup experience accordingly.
      </p>

      {/* <form className="pagetwo_form">
        <label>Full Name</label>
        <br />
        <input placeholder="Steve Jobs" size={47}></input>
        <br />
        <br />
        <label>Display Name</label>
        <br />
        <div className="secondInput_field">
          <input className="second" placeholder="Steve" size={47}></input>
        </div>
      </form> */}

      <div className="main_box">
        <div className="box1">
          <PersonIcon className="box1_icon" />
          <h3>For myself</h3>
          <p>Write better. Think more clearly. Stay organised.</p>
        </div>
        <div className="box2">
          <GroupsIcon className="box2_icon" />
          <h3>With my team</h3>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
