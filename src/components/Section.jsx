import React, { useEffect, useRef } from "react";

const Section = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sectionTop = sectionRef.current.offsetTop;
    const windowHeight = window.innerHeight;
    const windowTop = window.pageYOffset;
    if (windowTop > sectionTop - windowHeight + windowHeight / 3) {
      sectionRef.current.classList.add("show");
    }
  };

  return <section ref={sectionRef}>{children}</section>;
};

export default Section;
