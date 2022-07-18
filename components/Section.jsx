import React from "react";
import SectionStyled from "../components.styled/Section.styled";
import Image from "next/image";

// spikes: 'light' | 'dark'
const Section = ({ id, className, children, bgImage, spikes }) => {
  return (
    <SectionStyled
      id={id}
      className={`wrapper--spikes ${className || ""}`}
      bgImage={bgImage}
    >
      {children}
    </SectionStyled>
  );
};

export default Section;
