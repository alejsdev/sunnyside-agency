import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-footer">
      <img
        src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1646266080/frontend%20mentor%20challenge/logo2_dwpyhb.svg"
        alt=""
      />
      <div className="social-media">
        <FaFacebookSquare className="icon"/>
        <FaInstagram className="icon"/>
        <FaTwitter className="icon"/>
        <FaPinterest className="icon"/>
      </div>
    </div>
  );
};

export default Footer;
