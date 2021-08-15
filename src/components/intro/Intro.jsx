import React, { useEffect, useRef } from "react";
import "./intro.scss";
import image from "../../assets/linkedinnssgotowe1.png";
import shopearnphoto from "../../assets/shopearnlogo.png";
import orlikiphoto from "../../assets/orlikilogo.png";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ["React Native", "AWS Amplify", "GraphQL"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="titleswrapper">
            <h2>Heeello! I'm </h2>
            <h1>Pawel Gladysz </h1>
            <h3>
              My stack is: <span ref={textRef}></span>
            </h3>
            <h4>My personal projects:</h4>
          </div>

          <div className="projectSection">
            <a className="firstProject" href="#shopearn">
              <div className="shop">ShopEarn</div>
              <img src={shopearnphoto} alt="" className="projImg" />
            </a>
            <a className="secondProject" href="#orlik">
              <div className="orliczek">Orliki</div>
              <img src={orlikiphoto} alt="" className="projImg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
