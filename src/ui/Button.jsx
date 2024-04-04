function Button({ type, classString, children, isContactIntersecting, click }) {
  if (type === "link")
    return (
      // <a
      //   href="#contact"
      //   className={`rounded-lg bg-red-600 px-5  py-2 font-extrabold  uppercase tracking-wide text-slate-50 hover:animate-pulse hover:bg-red-500 hover:duration-300 ${classString}`}
      // >
      //   Contact Now
      // </a>
      <a
        href="#contact"
        className={`relative z-[1] rounded-sm border-2 border-red-600 px-3 py-2 text-xl font-bold text-slate-50 before:absolute before:left-0  before:top-0 before:z-[-1] before:h-[100%]  before:bg-red-600 before:duration-300 before:content-['']  hover:before:w-[100%] ${isContactIntersecting ? "before:w-[100%]" : "before:w-[0%]"}`}
      >
        {children}
      </a>
    );
  else if (type === "bigButton")
    return (
      <button
        onClick={click}
        className="rounded-md bg-red-600 px-8 py-2 text-xl font-semibold hover:bg-red-500"
        // className="rounded-md bg-red-600 px-2 py-2 hover:bg-red-500"
      >
        {children}
      </button>
    );
  else
    return (
      <button
        onClick={click}
        className="rounded-md bg-teal-600 px-4 py-2 hover:bg-teal-500"
        // className="rounded-md bg-red-600 px-2 py-2 hover:bg-red-500"
      >
        {children}
      </button>
    );
}

export default Button;
