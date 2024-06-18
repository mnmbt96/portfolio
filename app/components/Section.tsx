import React, { useEffect, useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const windowTop = window.scrollY;
      if (windowTop > sectionTop - windowHeight + windowHeight / 3) {
        sectionRef.current.classList.add("show");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <section ref={sectionRef}>{children}</section>;
};

export default Section;
