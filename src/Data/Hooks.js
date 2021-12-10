import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const current = containerRef.current;
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (current) observer.unobserve(current);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, options]);
  return [containerRef, isVisible];
};
