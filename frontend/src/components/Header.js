import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import ArrowDown from "./arrow/ArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";

function Header() {
  const [isActive, setActive] = useState(`false`);
  
  const dispatch = useDispatch();

  const adminSignin = useSelector((state) => state.adminSignin);
  const { auth } = adminSignin;

  const handleActive = () => {
    setActive(!isActive);
  };

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <div>
     {auth && auth.isAdmin === true ? (
      <nav className="Navbar">
        <div className="content">
          <ArrowDown />
          <div className="logo">
            <Link to="/">{auth.name}</Link>
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
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <button className="navbar-button" onClick={handleSignout}>Log out</button>
            </li>
          </ul>
          <div
            className={isActive ? "icon menu-bnt hide" : "icon menu-btn active"}
          >
            <RiMenu4Line className="rime" onClick={handleActive} />
          </div>
        </div>
      </nav>
     ) : (
        <nav className="Navbar">
        <div className="content">
          <ArrowDown />
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
     )} 
        
    </div>
  );
}

export default Header;
