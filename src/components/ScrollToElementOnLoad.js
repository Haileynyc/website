import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToElementOnLoad = ({ delay = 300 }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, delay);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, delay]);

  return null;
};

export default ScrollToElementOnLoad;
