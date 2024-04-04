import { useEffect, useRef } from "react";
import intersection from "../services/intersectionApi";
import exprience from "../services/Exprience";
import PathAcordian from "../ui/PathAcordian";

function Experience({ setIsExperienceIntersecting: setIsIntersecting }) {
  const experienceRef = useRef(null);

  useEffect(
    function () {
      intersection(experienceRef, setIsIntersecting);
    },
    [setIsIntersecting],
  );
  return (
    <section
      ref={experienceRef}
      id="experience"
      className="flex flex-col items-center justify-center"
      style={{ scrollbarColor: "#dc2626 #171717", scrollbarWidth: "thin" }}
    >
      <div className="py-24">
        <h3 className="text-center text-xl font-semibold uppercase tracking-wide text-slate-300">
          Exprience
        </h3>
        <PathAcordian exprience={exprience} />
      </div>
    </section>
  );
}

export default Experience;
