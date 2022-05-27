import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className="intro-hey">Hey, my name is</h2>
                <h1 className="intro-name">Jannette Krezel</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Front End Web Developer</div>
                            <div className="intro-title-item">Business Development & Marketing</div>
                            <div className="intro-title-item">Copywriter</div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="intro-right">right</div>
    </div>
  )
}

export default Intro