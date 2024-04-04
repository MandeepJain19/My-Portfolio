import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";
import Experience from "./components/Experience";

function AppLayout() {
  const [isHeroIntersecting, setIsHeroIntersecting] = useState();
  const [isProjectsIntersecting, setIsProjectsIntersecting] = useState();
  const [isSkillsIntersecting, setIsSkillsIntersecting] = useState();
  const [isExperienceIntersecting, setIsExperienceIntersecting] = useState();
  const [isEducationIntersecting, setIsEducationIntersecting] = useState();
  const [isContactIntersecting, setIsContactIntersecting] = useState();
  const [isAboutIntersecting, setIsAboutIntersecting] = useState();
  return (
    <div>
      <Header
        isHeroIntersecting={isHeroIntersecting}
        isProjectsIntersecting={isProjectsIntersecting}
        isSkillsIntersecting={isSkillsIntersecting}
        isEducationIntersecting={isEducationIntersecting}
        isContactIntersecting={isContactIntersecting}
        isAboutIntersecting={isAboutIntersecting}
        isExperienceIntersecting={isExperienceIntersecting}
      />
      <div className="mx-auto max-w-[1400px]">
        <HeroSection setIsIntersecting={setIsHeroIntersecting} />
        <About setIsAboutIntersecting={setIsAboutIntersecting} />
        <Skills setIsSkillsIntersecting={setIsSkillsIntersecting} />
        <Experience setIsExperienceIntersecting={setIsExperienceIntersecting} />
        <Projects setIsProjectsIntersecting={setIsProjectsIntersecting} />
        <Education setIsEducationIntersecting={setIsEducationIntersecting} />
        <Contact setIsContactIntersecting={setIsContactIntersecting} />
      </div>
    </div>
  );
}

export default AppLayout;
