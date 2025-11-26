import { useEffect } from "react";
import WOW from "wowjs";

export const useWow = () => {
  useEffect(() => {
    // Reset all wow elements
    const resetWowElements = () => {
      const elements = document.querySelectorAll(".wow");
      elements.forEach((el) => {
        el.style.visibility = "hidden";
        el.classList.remove("animated");
        const animationClasses = Array.from(el.classList).filter((c) =>
          c.startsWith("animate__")
        );
        animationClasses.forEach((c) => {
          if (c !== "animate__animated") {
            el.classList.remove(c);
            el.classList.add(c);
          }
        });
      });
    };

    resetWowElements();

    const wow = new WOW.WOW({
      live: false,
      resetAnimation: true,
      offset: 50, // Start animation slightly before element enters viewport
    });

    wow.init();

    return () => {
      resetWowElements();
    };
  }, []);
};
