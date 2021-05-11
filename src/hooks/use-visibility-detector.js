import { useEffect, useRef, useState } from "react";

const LISTENERS = new Map();
let OBSERVER = null;

const getObserver = () => {
  if (OBSERVER) {
    return OBSERVER;
  }

  OBSERVER = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const listener = LISTENERS.get(entry.target);
        if (listener) {
          //console.log(`${entry.target} ${entry.intersectionRatio}`);
          listener(entry.intersectionRatio > 0);
        }
      });
    },
    {
      rootMargin: "50px",
      threshold: 0.5
    }
  );

  return OBSERVER;
};

const useVisibilityDetector = () => {
  const visibilityRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = getObserver();
    const element = visibilityRef.current;
    if (!element) {
      return;
    }

    observer.observe(element);

    LISTENERS.set(element, (visible) => {
      if (isVisible !== visible) {
        setIsVisible(visible);
      }
    });

    // cleanup
    return () => {
      observer.unobserve(element);
    };
  }, [visibilityRef, isVisible]);

  return { visibilityRef, isVisible };
};

export default useVisibilityDetector;
