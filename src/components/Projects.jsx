import { useEffect, useState } from "react";
import { useRef } from "react";
import intersection from "../services/intersectionApi";
import { PiArrowSquareOutBold } from "react-icons/pi";
import projects from "../services/projects";
import Button from "../ui/Button";
const totalProjects = projects.length;

function Projects({ setIsProjectsIntersecting: setIsIntersecting }) {
  const [numbOfPrjToShow, setNumbOfPrj] = useState(6);

  function showMorePrj() {
    if (numbOfPrjToShow < totalProjects) setNumbOfPrj((numb) => numb + 3);
    else return;
  }
  const projectRef = useRef(null);

  useEffect(
    function () {
      intersection(projectRef, setIsIntersecting);
    },
    [setIsIntersecting],
  );
  return (
    <section
      ref={projectRef}
      id="projects"
      className="flex items-center justify-center"
    >
      <div className="py-24">
        <h3 className="text-center text-xl font-semibold uppercase tracking-wide text-slate-300">
          Works
        </h3>
        <div className="grid gap-8 p-4 sm:px-6 lg:px-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, numbOfPrjToShow).map((prj, i) => (
            <div
              key={i}
              className="transform-transition group relative duration-500 ease-in"
            >
              <div className="w-[100%] h-[100%] outline outline-offset-2 outline-1 outline-red-600 overflow-hidden rounded-xl bg-red-50">
                <img src={prj.imgUrl} alt="projects" className="h-full w-full object-fit"/>
              </div>

              {/* <div className="w-[100%] h-[22rem] overflow-hidden rounded-xl bg-red-50">
                <iframe 
                  className=" w-[80rem] h-[70rem] rounded-xl object-fill"
                  title="Inline Frame Example"
                  src={prj.url}
                  scrolling="no"
                  loading="lazy"
                ></iframe>
              </div> */}
              <div className="transform-transition hover:outline hover:outline-offset-2 hover:outline-1 hover:outline-red-600 absolute bottom-0 left-0 right-0 flex h-0 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900 to-red-600  duration-500 ease-in group-hover:h-full group-hover:opacity-80">
                <picture className="flex flex-col items-center justify-center space-y-4">
                  <h4 className="text-xl font-semibold uppercase tracking-wide">
                    {prj.title}
                  </h4>
                  <p className="text-center text-lg">"{prj.description}"</p>
                  <a href={prj.url} target="blank">
                    <PiArrowSquareOutBold className="text-3xl font-bold" />
                  </a>
                </picture>
              </div>
            </div>
          ))}
        </div>

        {numbOfPrjToShow < totalProjects && (
          <div className="mt-14 text-center">
            <Button click={showMorePrj}>Show More...</Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
