import { useEffect, useRef } from "react";
import intersection from "../services/intersectionApi";
import PathAcordian from "../ui/PathAcordian";
import education from "../services/Education";

function Education({ setIsEducationIntersecting: setIsIntersecting }) {
  const educationRef = useRef(null);

  useEffect(
    function () {
      intersection(educationRef, setIsIntersecting);
    },
    [setIsIntersecting],
  );
  return (
    <section
      ref={educationRef}
      id="education"
      className="flex flex-col items-center justify-center transition-transform duration-500 ease-in-out lg:h-dvh"
    >
      <div className="pt-24">
        <h3 className="text-center text-xl font-semibold uppercase tracking-wide text-slate-300">
          Education
        </h3>
        <PathAcordian exprience={education} />
      </div>
    </section>
  );
}

export default Education;
