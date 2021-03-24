import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import './components.css'
import ArrowDown from "./arrow/ArrowDown";

function Header() {
  const [isActive, setActive] = useState(`false`);
  
 

  const handleActive = () => {
    setActive(!isActive);
  };

 

  return (
    <div>
        <nav className="Navbar">
        <div className="content">
        <ArrowDown/>
          <div className="logo">
            <Link to="/">Kateryna Lisabeth</Link>
            
          </div>
          <ul className={isActive ? "menu-list hide" : "menu-list active"}>
            <div className="icon cancel-btn" onClick={handleActive}>
              <VscChromeClose className="rime" />
            </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/projectlist">Projects</Link>
            </li>
            <li>
              <Link to="/bloglist">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/signin"><RiAdminLine/></Link>
            </li>
          </ul>
          <div
            className={isActive ? "icon menu-bnt hide" : "icon menu-btn active"}
          >
            <RiMenu4Line className="rime" onClick={handleActive} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
