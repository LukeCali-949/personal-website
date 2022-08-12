import React, { useRef } from "react";

import githublogo from "../../assets/logos/githublogo.svg";
import linkedinLogo from "../../assets/logos/linkedinlogo.svg";
import "./Header.css";

const Header = (props) => {
  const handleClick1 = () => {
    props.ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    props.ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    props.ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-black-backdrop">
        <div className="flex flex-col items-center justify-center h-screen font-fredoka-one relative">
          <div class="navbar text-ocean-light-blue bg-black-backdrop absolute top-0">
            <div class="flex-1 flex space-x-7 ml-[1%]">
              <a href="https://github.com/LukeCali-949" target="_blank">
                <img src={githublogo} className="w-[40px] phone:w-[30px]"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/luke-meng-53746b221/"
                target="_blank"
              >
                <img
                  src={linkedinLogo}
                  className="w-[40px] phone:w-[30px]"
                ></img>
              </a>
            </div>
            <div class="flex-none phone:text-[11px] phone:space-x-[100px]">
              <ul class="menu menu-horizontal p-0">
                <li>
                  <a onClick={handleClick1}>Skills</a>
                </li>
                <li>
                  <a onClick={handleClick2}>Project</a>
                </li>

                <li>
                  <a onClick={handleClick3}>Experience</a>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="text-[70px] text-ocean-light-blue phone:text-[30px] ">
            Hello, I am Luke Meng
          </h1>
          <h3 className="text-[25px] text-ocean-medium-blue phone:text-[14px]">
            Frontend Developer specializing in React.js
          </h3>
          <div class="custom-shape-divider-bottom-1659591072">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
