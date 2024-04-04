import { useEffect, useRef } from "react";
import intersection from "../services/intersectionApi";
import Carousel from "./Carousel";
import testimonials from "../services/testimonials";

function About({ setIsAboutIntersecting: setIsIntersecting }) {
  const aboutRef = useRef(null);

  useEffect(
    function () {
      intersection(aboutRef, setIsIntersecting);
    },
    [setIsIntersecting],
  );
  return (
    <section ref={aboutRef} id="about" className=" text-center  lg:h-dvh">
      <div className="pt-24">
        <h3 className="text-xl font-semibold uppercase tracking-wide text-slate-300">
          About Me
        </h3>
        <div className="flex items-center justify-center pt-4 sm:px-8">
          <div className="grid grid-rows-2 lg:grid-cols-[1fr_2fr] ">
            <Carousel testimonials={testimonials} />
            <div className="space-y-8 rounded-t-lg border-2 border-red-500 px-2 py-6 text-left sm:px-4 lg:rounded-r-lg lg:rounded-tl-none">
              <p>
                Hello! I'm Mandeep Jain, a passionate web developer with five
                years of hands-on experience in crafting engaging and intuitive
                websites. Throughout my journey, I've had the privilege of
                building multiple sites from scratch, each tailored to deliver
                the best possible user experience (UX) and user interface (UI).{" "}
              </p>
              <p>
                My approach to web development revolves around marrying
                functionality with aesthetics. I believe that a well-designed
                website not only looks visually appealing but also seamlessly
                guides users through their journey, leaving them with a positive
                impression.
              </p>
              <p>
                Currently, I am honing my skills and expertise at Wipro, where I
                continue to push the boundaries of web development and stay
                abreast of the latest industry trends. Working in a dynamic
                environment like Wipro has allowed me to collaborate with
                diverse teams and tackle complex challenges head-on, further
                refining my craft.
              </p>

              <p>
                My goal is not just to create websites but to create experiences
                that resonate with users and drive results for businesses. I'm
                passionate about leveraging technology to solve problems and
                enhance digital experiences, and I'm always eager to take on new
                challenges. Thank you for visiting my portfolio.
              </p>

              <p>
                I look forward to the opportunity to collaborate and bring your
                next web project to fruition!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
