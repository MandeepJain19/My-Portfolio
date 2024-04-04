import { useState } from "react";
import {
  PiBookOpenTextDuotone,
  PiBriefcaseDuotone,
  PiDotsThreeDuotone,
  PiGraduationCapDuotone,
  PiHammerDuotone,
  PiLightbulbFilamentDuotone,
} from "react-icons/pi";
import Button from "../ui/Button";
const undelineEffect =
  "after:content-[''] relative after:absolute after:-bottom-[5px] after:left-4 lg:after:left-0 after:h-[3px] after:w-[0%] after:rounded-xl after:bg-teal-600 after:duration-300 hover:lg:text-slate-50 hover:after:lg:w-[100%]";

const linkStyle =
  "flex text-2xl lg:text-xl items-center justify-center gap-2 px-4 lg:px-0";
const iconStyle = "text-teal-300 lg:hidden";

function Header({
  isHeroIntersecting,
  isProjectsIntersecting,
  isExperienceIntersecting,
  isEducationIntersecting,
  isSkillsIntersecting,
  isAboutIntersecting,
  isContactIntersecting,
}) {
  const [displayMenu, setDisplayMenu] = useState(true);
  function toggleMenu() {
    setDisplayMenu((displayMenu) => !displayMenu);
  }
  return (
    <>
      {displayMenu && (
        <div
          onClick={toggleMenu}
          className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-slate-900 opacity-60 lg:hidden"
        ></div>
      )}
      <nav
        className={`flex items-center justify-between px-2 py-2 lg:bg-neutral-950 lg:px-8 lg:py-1 ${!isHeroIntersecting && "sticky top-0 z-50 bg-slate-900"} `}>
        <div className="text-6xl font-bold italic tracking-wider">
          <a href="#">
            <span className="">MJ</span>
            <span className="text-red-600">.</span>
          </a>
        </div>
        <ul
          className={`fixed right-0 top-0 z-50 flex  h-screen translate-x-0   flex-col items-start justify-center gap-8 bg-slate-900 px-6 py-6 text-xl  text-slate-300 duration-300 lg:static lg:h-max lg:translate-x-0  lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:text-lg ${!displayMenu && "translate-x-full transition-transform"}`}
        >
          <li
            className={`${undelineEffect} ${isAboutIntersecting && "text-slate-50 after:w-[100%]"}`}
          >
            <a href="#about" className={linkStyle}>
              <PiBookOpenTextDuotone className={iconStyle} /> <span>About</span>
            </a>
          </li>
          <li
            className={`${undelineEffect} ${isSkillsIntersecting && "text-slate-50 after:w-[100%]"}`}
          >
            <a href="#skills" className={linkStyle}>
              <PiLightbulbFilamentDuotone className={iconStyle} />
              <span>Skills</span>
            </a>
          </li>
          <li
            className={`${undelineEffect} ${isExperienceIntersecting && "text-slate-50 after:w-[100%]"}`}
          >
            <a href="#experience" className={linkStyle}>
              <PiBriefcaseDuotone className={iconStyle} />
              <span>Experience</span>
            </a>
          </li>
          <li
            className={`${undelineEffect} ${isProjectsIntersecting && "text-slate-50 after:w-[100%]"}`}
          >
            <a href="#projects" className={linkStyle}>
              <PiHammerDuotone className={iconStyle} />
              <span>Works</span>
            </a>
          </li>
          <li
            className={`${undelineEffect} ${isEducationIntersecting && "text-slate-50 after:w-[100%]"}`}
          >
            <a href="#education" className={linkStyle}>
              <PiGraduationCapDuotone className={iconStyle} />
              <span>Education</span>
            </a>
          </li>
          <button
            className="fixed right-2 top-1 rounded-md border-[1px] px-2 py-1 text-2xl duration-200 hover:border-white hover:text-white lg:hidden"
            onClick={toggleMenu}
          >
            X
          </button>
          <li className="ml-4 lg:ml-0">
            <Button type="link" isContactIntersecting={isContactIntersecting}>
              Contact Now
            </Button>
            {/* <a
              href="#contact"
              className={`rounded-lg bg-red-600 px-5  py-2 font-extrabold  uppercase tracking-wide text-slate-50 hover:animate-pulse hover:bg-red-500 hover:duration-300 ${isContactIntersecting && "bg-red-500"} `}
            >
              Contact Now
            </a> */}
          </li>
        </ul>

        <div className="lg:hidden">
          <button
            className="block rounded-lg bg-red-600 px-1  text-4xl  font-extrabold text-white hover:bg-red-500 hover:duration-500"
            onClick={toggleMenu}
          >
            <PiDotsThreeDuotone />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
