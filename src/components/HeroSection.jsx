import { useEffect, useRef } from "react";
import intersection from "../services/intersectionApi";
import Button from "../ui/Button";

function HeroSection({ setIsIntersecting }) {
  const heroRef = useRef(null);

  useEffect(
    function () {
      intersection(heroRef, setIsIntersecting);
    },
    [setIsIntersecting],
  );
  // return (
  //   <section ref={heroRef} className="bg-red-950">
  //     Hero
  //   </section>
  // );

  return (
    <section
      ref={heroRef}
      // className="flex h-screen items-center justify-center gap-2"
      // className="grid h-screen grid-cols-2 "
      className="relative  flex h-screen items-end justify-center bg-[url('public/HeroSectionImg.png')] bg-cover bg-fixed bg-top bg-no-repeat pb-20
      before:absolute
      before:inset-0
      before:z-[1]
      before:block
      before:w-[100%]
      before:bg-gradient-to-r
      before:from-neutral-950
      before:to-neutral-950
      before:opacity-75
      before:content-['']
      lg:items-center
      lg:justify-start lg:bg-contain lg:bg-right lg:before:opacity-55  2xl:bg-scroll"
    >
      {/* <div className="lg:w-auto"></div> */}
      <div className="z-[2] flex items-center justify-center px-2 pb-14  ">
        <div>
          <h1 className="text-4xl sm:text-5xl  xl:text-6xl">
            Hi, i'm <span className="inline-block font-bold">Mandeep Jain</span>
          </h1>
          <div>
            <h2
              id="heroText"
              className={`relative my-4 inline-block animate-[heroText_4s_linear_infinite] bg-gradient-to-r
              from-red-600
              to-red-600
              bg-[-15rem]
              bg-no-repeat text-4xl
              text-transparent
             before:absolute before:left-0 before:top-0 before:h-[100%] before:w-0 before:animate-[heroCursor_4s_linear_infinite] before:border-r-2 before:border-red-600 before:from-red-600 before:to-red-600 before:content-['']`}
              style={{
                WebkitTextStroke: "0.7px #dc2626",
                WebkitBackgroundClip: "text",
              }}
            >
              Web Developer
            </h2>
          </div>
          <p className="my-2 text-lg font-semibold text-teal-300 xl:text-2xl ">
            We create something that stand out and let users say "woah."
          </p>
          <div className="float-right mt-6 ">
            <Button type="link">Let's Connect</Button>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default HeroSection;
