import React from "react";
import "./English.css";

const English = () => {
  return (
    <div className="english1">
      <div className="english-child" />
      <div className="ellipse-parent">
        <div className="group-child" />
        <img className="speaking-icon" alt="" src="/speaking@2x.png" />
      </div>
      <div className="english-inner">
        <div className="ellipse-group">
          <div className="group-child" />
          <img className="letter-icon" alt="" src="/letter@2x.png" />
        </div>
      </div>
      <div className="ellipse-container">
        <div className="group-child" />
        <img className="reading-book-icon" alt="" src="/readingbook@2x.png" />
      </div>
      <div className="ellipse-parent1">
        <div className="group-child" />
        <img className="listen-icon" alt="" src="/listen@2x.png" />
      </div>
      <div className="text1" />
      <b className="reading">Reading</b>
      <b className="listening">Listening</b>
      <b className="speaking">Speaking</b>
      <b className="writing">Writing</b>
    </div>
  );
};

export default English;
