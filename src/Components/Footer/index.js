import React from "react";
import "./footer.css";

import logo from "../../Images/logo_1.png";
import twitter from "../../Images/twitter.svg";
import discord from "../../Images/discord.svg";
import gitbook from "../../Images/gitbook.png";

const Footer = () => {
  return (
    <div className="FSuper">
      <div className="Fcontainer">
        <div className="FL">
          <img src={logo} alt="" />
        </div>
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
        </div>
        <p>@GozukoNFT</p>
      </div>
    </div>
  );
};

export default Footer;
