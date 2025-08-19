import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './ScrollToTop.css'; // Assuming you have a CSS file for styling
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // scroll hone par button dikhana/hatana
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll top function
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
