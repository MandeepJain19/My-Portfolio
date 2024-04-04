import { useState } from "react";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";

function PathAcordian({ exprience }) {
  const [descriptionIndexOpen, setDescriptionIndexOpen] = useState(-1);
  function changeDescriptionIndex(index) {
    setDescriptionIndexOpen((openIndex) => (openIndex === index ? -1 : index));
  }
  return (
    <div className="space-y-6 py-4">
      {exprience.map((exp, i) => (
        <div
          key={i}
          className="relative my-0 ml-[3rem] mr-3 space-y-3  rounded-lg border-2 border-red-600 px-4 py-6 tracking-wide  transition duration-500 ease-in-out  sm:mx-auto sm:w-[500px] lg:w-[700px] "
        >
          <div
            onClick={() => changeDescriptionIndex(i)}
            className="flex gap-3 hover:cursor-pointer"
          >
            <div className="h-16 w-16 overflow-hidden rounded-lg bg-white ">
              <img
                src={exp.logo}
                alt={exp.companyName}
                className="object-fill h-full w-full"
              />
            </div>
            <div>
              <p className="font-md font-semibold uppercase tracking-wide">
                {exp.companyName}
              </p>
              <p>{exp.role}</p>
              <p className="text-slate-400">{exp.location}</p>
              <div className="text-slate-500">
                <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
              </div>
            </div>
            {exp.description && (
              <div className="ml-auto justify-self-end text-2xl">
                <span>
                  {descriptionIndexOpen === i ? (
                    <PiCaretUpBold />
                  ) : (
                    <PiCaretDownBold />
                  )}
                </span>
              </div>
            )}
          </div>
          {exp.skills && (
            <div className="pl-4">
              <span className="font-semibold">Skills: </span>
              <ul className="inline-block list-disc text-slate-300">
                {exp.skills.map((exp, i) => (
                  <li key={i} className="inline">
                    {exp},{" "}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {exp.description && (
            <ExperienceDetails
              details={exp.description}
              display={descriptionIndexOpen === i ? "block" : "hidden"}
            />
          )}
          <li className="absolute left-[-2.4rem] top-[-1.8rem] list-disc text-center text-5xl text-slate-50 "></li>
          <div className="absolute left-[-2rem] top-[0.6rem] h-full w-[1px] bg-slate-100"></div>
        </div>
      ))}
    </div>
  );
}
function ExperienceDetails({ details, display }) {
  return (
    <div className={` ${display}`}>
      <span className="text-lg font-semibold underline">Description:</span>
      <div className="mt-2 flex items-center justify-center">
        <ul className=" list-outside space-y-3 pl-4">
          {details.map((desc, i) => (
            <li key={i} className="list-disc">
              <span className="col-span-2">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default PathAcordian;
