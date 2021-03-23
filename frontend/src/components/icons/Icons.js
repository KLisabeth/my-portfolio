import React from 'react';
import './icons.css';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Icons() {
    return (
        <div className="icons">
        <button href="https://github.com/KLisabeth">
          <GoMarkGithub className=" github" />
        </button>

        <button href="https://twitter.com/Katie66097186">
          <IoLogoTwitter className=" twitter" />
        </button>

        <button href="https://www.linkedin.com/in/kateryna-lisabeth-48a8a093/">
          <AiOutlineLinkedin className=" linkedin" />
        </button>

        <button href="">
          <AiOutlineInstagram className=" instagram" />
        </button>
      </div>
    )
}

export default Icons
