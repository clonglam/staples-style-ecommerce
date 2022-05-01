import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> 2022 All right reservered</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillGithub />
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Footer;
