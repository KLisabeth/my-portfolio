import React from "react";
import "./components.css"
import Icons from "./icons/Icons";



function Footer() {
  return (
    <div className="footer">
    <div className="footer-icons"><Icons/></div>
      <div className="copyright">
        Copyright © 2020 KLisabeth. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
