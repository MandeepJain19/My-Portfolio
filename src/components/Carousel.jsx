import { PiArrowLeftBold, PiArrowRightBold } from "react-icons/pi";
import Button from "../ui/Button";
import { useCallback, useEffect, useState } from "react";
function Carousel({
  testimonials,
  autoslide = true,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const next = useCallback(
    function next() {
      if (curr === testimonials.length - 1) setCurr(0);
      else setCurr((curr) => curr + 1);
    },
    [setCurr, curr, testimonials],
  );

  function prev() {
    if (curr === 0) setCurr(testimonials.length - 1);
    else setCurr((curr) => curr - 1);
  }
  useEffect(
    function () {
      if (!autoslide) return;
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    },
    [autoSlideInterval, autoslide, next],
  );
  return (
    <div className="relative row-start-2 max-h-[45%] sm:max-h-[70%] lg:max-h-dvh max-w-full overflow-hidden rounded-b-lg border-2 border-red-500 lg:row-start-auto lg:max-h-full lg:rounded-l-lg lg:rounded-br-none lg:border-r-0">
      <div
        className="flex gap-2 transition-transform duration-500 ease-out"
        // style={{ transform: `translateX(-${curr * 100}%` }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute left-0 top-0 h-full w-full bg-red-500 transition-transform duration-300 ease-out ${curr === i ? "block" : "hidden"} hover:scale-[1.5] hover:cursor-pointer`}
          >
            <img
              src={t.url}
              alt="Website designs"
              className="object-fill h-[100%] w-[100%]"
            />
          </div>
        ))}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-2">
        <Button click={prev}>
          <PiArrowLeftBold />
        </Button>
        <Button click={next}>
          <PiArrowRightBold />
        </Button>
      </div> */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <div
              onClick={() => {
                setCurr(i);
              }}
              key={i}
              className={`h-[4px] w-6 rounded-full bg-red-600 transition-all hover:cursor-pointer ${curr === i ? "p-0.5" : "bg-opacity-50"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
