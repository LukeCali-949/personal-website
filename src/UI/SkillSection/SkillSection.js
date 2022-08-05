import React from "react";

import "./SkillSection.css";

import cSharpLogo from "../../assets/logos/csharplogo.svg";
import JavaScriptLogo from "../../assets/logos/javascriptlogo.svg";
import PythonLogo from "../../assets/logos/pythonlogo.svg";
import JavaLogo from "../../assets/logos/javalogo.svg";
import TailwindcssLogo from "../../assets/logos/tailwindcsslogo.svg";
import ReactLogo from "../../assets/logos/reactlogo.svg";
import htmlogo from "../../assets/logos/htmlogo.svg";
import csslogo from "../../assets/logos/csslogo.svg";
import githublogo from "../../assets/logos/githublogo.svg";
import vscodelogo from "../../assets/logos/vscodelogo.svg";
import msofficelogo from "../../assets/logos/msofficelogo.svg";
import PersonProgramming from "../../assets/logos/personProgramming.svg";

const SkillSection = () => {
  const infoArrayOne = [
    [JavaScriptLogo, "JavaScript"],
    [PythonLogo, "Python"],
    [JavaLogo, "Java"],
    [cSharpLogo, "C#"],
  ];

  const infoArrayTwo = [
    [ReactLogo, "React.js"],
    [TailwindcssLogo, "Tailwind CSS"],
    [htmlogo, "HTML"],
    [csslogo, "CSS"],
  ];

  const infoArrayThree = [
    [githublogo, "GitHub"],
    [vscodelogo, "VS Code"],
    [msofficelogo, "Microsoft Office"],
  ];

  const languageSection = infoArrayOne.map((arr, index) => {
    return (
      <>
        <div className="flex flex-col">
          <img
            src={arr[0]}
            width="70px"
            height="90px"
            className="mx-auto"
          ></img>
          <h3 className="text-[20px] mx-auto mt-5 ">{arr[1]}</h3>
        </div>
      </>
    );
  });

  const webDevToolsSection = infoArrayTwo.map((arr) => {
    return (
      <>
        <div className="flex flex-col">
          <img
            src={arr[0]}
            width="70px"
            height="70px"
            className="mx-auto"
          ></img>
          <h3 className="text-[20px] mx-auto mt-5">{arr[1]}</h3>
        </div>
      </>
    );
  });

  const otherToolsSection = infoArrayThree.map((arr) => {
    return (
      <>
        <div className="flex flex-col">
          <img
            src={arr[0]}
            width="70px"
            height="90px"
            className="mx-auto"
          ></img>
          <h3 className="text-[20px] mx-auto mt-5">{arr[1]}</h3>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="bg-ocean-light-blue ">
        <div className="flex flex-col   h-screen font-fredoka-one relative">
          <div className="flex flex-col mt-[30px] mx-auto">
            <h1 className="text-[70px] mx-auto">Skills</h1>
            <h3 className="text-[25px]">My technical abilities</h3>
          </div>
          <img
            src={PersonProgramming}
            className="absolute top-[250px] left-[1100px]"
          ></img>
          <div className="flex flex-col mx-[98px]">
            <h1 className="text-[30px]">Programming Languages:</h1>
            <div className="flex space-x-[123px] space-around mt-3">
              {languageSection}
            </div>
          </div>
          <div className="flex flex-col mx-[98px] mt-5">
            <h1 className="text-[30px]">Web Development Tools:</h1>
            <div className="flex space-x-[123px] space-around mt-3">
              {webDevToolsSection}
            </div>
          </div>
          <div className="flex flex-col mx-[98px] mt-5">
            <h1 className="text-[30px]">Other Tools:</h1>
            <div className="flex space-x-[123px] space-around mt-3">
              {otherToolsSection}
            </div>
          </div>
          <div class="custom-shape-divider-bottom-165959107242">
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

export default SkillSection;
