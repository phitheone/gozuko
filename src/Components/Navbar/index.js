import React from "react";
import "./navbar.css";

import logo from "../../Images/logo_1.png";
import twitter from "../../Images/twitter.svg";
import discord from "../../Images/discord.svg";
import gitbook from "../../Images/gitbook.png";

const Navbar = () => {
  return (
    <div className="NBSuper">
      <div className="NBContainer">
        <img src={logo} alt="" />
        <div className="FT">
          <a href="https://twitter.com/GozukoNFT" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a href="https://discord.gg/gozuko" target="_blank">
            <img src={discord} alt="" />
          </a>
          <a
            href="https://gozukos-organization.gitbook.io/untitled/"
            target="_blank"
          >
            <img src={gitbook} alt="" />
          </a>
          <a
            className="MintBtn"
            href="https://mint.gozuko.xyz/"
            target="_blank"
          >
            <p>MINT</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
