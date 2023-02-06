import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const headerHeight = 100; // px
  const navHeight = 56; //px
  const subtractedHeight = navHeight;
  const hasWindow = typeof window !== "undefined";
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight - subtractedHeight : null;
    return {
      width,
      height,
      headerHeight,
      navHeight,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

export default useWindowDimensions;
