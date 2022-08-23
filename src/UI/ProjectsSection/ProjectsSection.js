import React from "react";

import firstprojsnip from "../../assets/projectpics/firstprojsnip.PNG";
import secondprojsnip from "../../assets/projectpics/secondprojsnip.PNG";

const ProjectsSection = (props) => {
  return (
    <>
      <div className="bg-black-backdrop h-[100%]">
        <div className="flex flex-col items-center h-[100%]  h-screen  phone:h-[100%] font-fredoka-one relative">
          <h1
            className="text-[70px] text-ocean-light-blue mt-[50px] phone:text-[50px]"
            ref={props.ref2}
          >
            Projects
          </h1>
          <div className="flex phone:flex-col gap-x-[300px] mt-28 ">
            <div class="card w-96 phone:w-64 phone:mx-auto  font-fredoka-one shadow-xl bg-ocean-light-blue">
              <figure>
                <img src={firstprojsnip} alt="Shoes" />
              </figure>
              <div class="card-body space-y-0 ">
                <h2 class="card-title mx-auto mb-[10px]">
                  Online BookShelf - July 2022
                </h2>
                <p className="font-bold text-[17px]">Technologies Used:</p>
                <p>
                  <span className="font-bold">React.js:</span> useState,
                  useEffect, props
                </p>
                <p className="mt-0">
                  <span className="font-bold">Tailwindcss:</span> flexbox, image
                  manipulation, content structuring and designing
                </p>
                <p className="hidden"></p>

                <div className="flex">
                  <div class="card-actions justify-end mr-auto">
                    <a
                      role="button"
                      class="btn mx-auto "
                      href="https://github.com/LukeCali-949/Bookshelf-Proj"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                  <div class="card-actions justify-end">
                    <a
                      role="button"
                      class="btn mx-auto "
                      href="https://bookshelf-app-89bff.web.app/"
                      target="_blank"
                    >
                      Website Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card w-96 phone:w-64 phone:mx-auto bg-ocean-light-blue  font-fredoka-one shadow-xl phone:mt-[100px] phone:mb-[300px]">
              <figure>
                <img src={secondprojsnip} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title mx-auto mb-[10px]">
                  Trivia Game Website - July 2022
                </h2>
                <p className="font-bold text-[17px]">Technologies Used:</p>
                <p>
                  <span className="font-bold">React.js:</span> useState,
                  useContext, useEffect, React Router, props
                </p>
                <p>
                  <span className="font-bold">Tailwindcss:</span> flexbox, image
                  manipulation, content structuring and designing
                </p>
                <p className="mb-[10px]">
                  <span className="font-bold ">Asynchronous JavaScript:</span>{" "}
                  GET request to opentdb API (opentdb.com)
                </p>
                <div className="flex">
                  <div class="card-actions justify-end mr-auto">
                    <a
                      role="button"
                      class="btn mx-auto "
                      href="https://github.com/LukeCali-949/my-project-3"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                  <div class="card-actions justify-end">
                    <a
                      role="button"
                      class="btn mx-auto "
                      href="https://trivia-app-c1c71.web.app/"
                      target="_blank"
                    >
                      Website Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[200px]"></div>
          <div class="custom-shape-divider-bottom-1659591072 ">
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

export default ProjectsSection;
