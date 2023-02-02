import React from "react";
import "./hero.css";

import logo from "../../Images/logo_3.png";

const Hero = () => {
  return (
    <div className="HSuper">
      <img className="HMainLogo" src={logo} alt="" />
      {/* <img className="HSubLogo" src={logo} alt="" /> */}
    </div>
  );
};

export default Hero;
