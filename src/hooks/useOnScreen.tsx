import { useState, useEffect, useRef } from "react";

const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry);
      if (
        entry.boundingClientRect.top > 0 &&
        entry.boundingClientRect.top < 10
      ) {
        setIntersecting(true);
      }
      // setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

export default useOnScreen;
