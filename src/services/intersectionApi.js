const intersection = function (ref, setIsIntersecting) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      // console.log(entry);
      setIsIntersecting(entry.isIntersecting);
    },
    { root: null, threshold: 0.5, rootMargin: "-6px" },
  );
  observer.observe(ref.current);

  return () => observer.disconnect();
};

export default intersection;
