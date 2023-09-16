import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="max-w-[90%] mx-[5%] my-[2%] pr-[20px] p-[25px] bg-[#272727] rounded-[40px] shadow-md">
        <h1 className="text-[40px] text-[#4444fc] font-arial">Projects</h1>
        <hr className="w-40 border-t-4 border-[#4444fc]"/>
        <div className="p-[25px]">
          <ul className="flex flex-wrap gap-6 justify-evenly m-5">
            <li>
              <a href="https://github.com/AndresMauricioG/Music" target="#">
                <img
                  className="h-[110px] w-[270px] rounded-lg border-[2px] border-[white] hover:opacity-[0.5]"
                  src="/images/Music.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/AndresMauricioG/Graphel" target="#">
                <img
                  className="h-[110px] w-[270px] rounded-lg border-[2px] border-[white] hover:opacity-[0.5]"
                  src="/images/graphel.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/AndresMauricioG/Blueasy" target="#">
                <img
                  className="h-[110px] w-[270px] rounded-lg border-[2px] border-[white] hover:opacity-[0.5]"
                  src="/images/blueasy.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};


export default Projects;
