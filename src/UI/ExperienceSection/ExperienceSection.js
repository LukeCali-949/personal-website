import React from "react";

const ExperienceSection = (props) => {
  return (
    <>
      <div className="bg-ocean-light-blue ">
        <div className="text-black-backdrop flex flex-col items-center h-screen  phone:h-[100%] font-fredoka-one relative">
          <h1
            className="text-[70px] phone:text-[30px]   mt-[50px]"
            ref={props.ref3}
          >
            Experience/Education
          </h1>
          <h1 className="text-[70px] phone:text-[20px] ">
            -----------------------------------
          </h1>
          <h1 className="text-[30px] phone:mt-[25px] phone:text-[23px] phone:ml-[40px]  place-self-start  mx-[25%]">
            Education:
          </h1>
          <h1 className="text-[30px] phone:ml-[55px] phone:text-[18px]  place-self-start  mx-[28%]">
            Indiana University Bloomington - B.S. in Computer Science
          </h1>
          <h1 className="text-[30px] italic phone:ml-[55px] phone:text-[18px]  place-self-start  mx-[28%]">
            2021-2025
          </h1>
          <h1 className="text-[30px] mt-[25px] phone:mx-[40px] phone:text-[23px]  place-self-start  mx-[25%]">
            Work Experience:
          </h1>
          <h1 className="text-[30px] phone:ml-[55px] phone:text-[18px]  place-self-start  mx-[28%]">
            Software Engineering Intern for John's Incredible Pizza Company
          </h1>
          <h1 className="italic text-[30px] phone:ml-[55px] phone:mb-[50px] phone:text-[18px]   place-self-start mx-[28%]">
            July 2021-August 2021
          </h1>
          <footer class="footer items-center p-4 bg-black-backdrop  mt-auto text-ocean-light-blue">
            <div class="items-center grid-flow-col">
              <p>Copyright © 2023 - All rights reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
