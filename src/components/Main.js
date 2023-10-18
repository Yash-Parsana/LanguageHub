import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-child" />
      <div className="text">What language you want to learn?</div>
      <div className="main-inner">
        <div className="rectangle-parent">
          <Link to="/sanskrit">
            <div className="frame-child" />
            <img className="frame-item" alt="" src="/rectangle-11@2x.png" />
            <div className="sanskrit">Sanskrit</div>
          </Link>
        </div>
      </div>
      <div className="group-div">
        <div className="rectangle-group">
          <Link to="/english">
            <div className="frame-inner" />
            <img className="rectangle-icon" alt="" src="/rectangle-12@2x.png" />
            <div className="english">English</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
