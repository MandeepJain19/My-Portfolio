import { useEffect, useRef } from "react";
import intersection from "../services/intersectionApi";
import {
  technologies,
  framework,
  tools,
  database,
} from "../services/skillsProvider";
function Skills({ setIsSkillsIntersecting: setIsIntersecting }) {
  const skillsRef = useRef(null);
  useEffect(
    function () {
      intersection(skillsRef, setIsIntersecting);
    },
    [setIsIntersecting],
  );
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="flex  flex-col items-center justify-start text-center"
    >
      <div className="py-24">
        <h3 className="text-xl font-semibold uppercase tracking-wide text-slate-300">
          Skills
        </h3>
        <div className="my-0 grid w-auto gap-8 px-4 py-4 sm:w-[450px] sm:px-12 sm:py-4 md:w-[800px] md:grid-cols-2 ">
          <div className="inline-block rounded-lg border-2 border-red-600 py-4 sm:px-8">
            <h4 className="mb-4 text-2xl font-semibold">Frontend</h4>
            <ul>
              {framework.map((item, i) => (
                <List key={i} name={item.name} icon={item.icon} />
              ))}
            </ul>
          </div>
          <div className="inline-block rounded-lg border-2 border-red-600 px-8 py-4">
            <h4 className="mb-4 text-2xl font-semibold">Backend</h4>
            <ul>
              {database.map((item, i) => (
                <List key={i} name={item.name} icon={item.icon} />
              ))}
            </ul>
          </div>
          <div className="inline-block rounded-lg border-2 border-red-600 px-8 py-4">
            <h4 className="mb-4 text-2xl font-semibold">Technologies</h4>
            <ul>
              {technologies.map((item, i) => (
                <List key={i} name={item.name} icon={item.icon} />
              ))}
            </ul>
          </div>
          <div className="inline-block rounded-lg border-2 border-red-600 px-8 py-4">
            <h4 className="mb-4 text-2xl font-semibold">Tools</h4>
            <ul>
              {tools.map((item, i) => (
                <List key={i} name={item.name} icon={item.icon} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  function List({ name, icon }) {
    return (
      <li className=" mb-2 ml-2 inline-block rounded-md border-2 border-slate-700 px-2 py-1 text-lg">
        <span className="flex gap-1">
          <img className="h-5 w-5" src={icon} alt="skill icon" />
          <span>{name}</span>
        </span>
      </li>
    );
  }
}

export default Skills;
