import React from "react";
import "./Sanskrit.css";

const Sanskrit = () => {
  return (
    <div className="sanskrit1">
      <div className="sanskrit-child" />
      <div className="grammer-parent">
        <b className="grammer">Grammer</b>
        <div className="group-parent">
          <img className="group-parent" alt="" src="/group-8.svg" />
          <img className="languages-icon" alt="" src="/languages@2x.png" />
        </div>
      </div>
      <div className="group-container">
        <img className="group-parent" alt="" src="/group-5.svg" />
        <b className="speaking1">Speaking</b>
        <img className="talking-icon" alt="" src="/talking@2x.png" />
      </div>
    </div>
  );
};

export default Sanskrit;
